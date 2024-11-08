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
            this.set_titletext("단체활동내역등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMaster", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"DANCHE_CD\" type=\"STRING\" size=\"10\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"GYEOLGWA_BOGO_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SILJEOK_SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SIJAK_DT\" type=\"DATE\" size=\"8\"/><Column id=\"JONGRYO_DT\" type=\"DATE\" size=\"8\"/><Column id=\"SIGAN_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GIGWAN_NM\" type=\"STRING\" size=\"250\"/><Column id=\"HWALDONG_JANGSO\" type=\"STRING\" size=\"400\"/><Column id=\"HWALDONG_NAEYEOK\" type=\"STRING\" size=\"4000\"/><Column id=\"CHAMYEO_INWON_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SAHOE_BONGSA_YN\" type=\"STRING\" size=\"1\"/><Column id=\"BIGO\" type=\"STRING\" size=\"4000\"/><Column id=\"CHEOMBU_FILE_NO\" type=\"STRING\" size=\"32\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/><Column id=\"CHEOMBU_FILE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"DANCHE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DANCHE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GYEOLGWA_BOGO_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"CHEORI_SANGTAE_GBCD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YYYY\"/><Col id=\"DANCHE_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input1", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ATTFL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"DANCHE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"GYEOLGWA_BOGO_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"SILJEOK_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CHEOMBU_FILE_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDummy", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdMaster","10","97",null,null,"10","50",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("dsMaster");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"55\"/><Column size=\"103\"/><Column size=\"114\"/><Column size=\"82\"/><Column size=\"160\"/><Column size=\"162\"/><Column size=\"56\"/><Column size=\"61\"/><Column size=\"123\"/><Column size=\"230\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"실적순번\"/><Cell col=\"2\" text=\"시작일자\" cssclass=\"point\"/><Cell col=\"3\" text=\"종료일자\" cssclass=\"point\"/><Cell col=\"4\" text=\"활동시간\"/><Cell col=\"5\" text=\"활동장소\"/><Cell col=\"6\" text=\"활동내역\" cssclass=\"point\"/><Cell col=\"7\" text=\"참여인원\"/><Cell col=\"8\" text=\"사회봉사&#13;&#10;활동여부\"/><Cell col=\"9\" text=\"증빙서류\"/><Cell col=\"10\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" editmaxlength=\"1\"/><Cell col=\"1\" displaytype=\"number\" edittype=\"none\" textAlign=\"center\" text=\"bind:SILJEOK_SEQ\" editmaxlength=\"22\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"date\" textAlign=\"center\" text=\"bind:SIJAK_DT\" editmaxlength=\"8\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"date\" textAlign=\"center\" text=\"bind:JONGRYO_DT\" editmaxlength=\"8\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"mask\" textAlign=\"right\" text=\"bind:SIGAN_CNT\" editmaxlength=\"22\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:HWALDONG_JANGSO\" editmaxlength=\"400\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:HWALDONG_NAEYEOK\" editmaxlength=\"4000\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"mask\" textAlign=\"right\" text=\"bind:CHAMYEO_INWON_CNT\" editmaxlength=\"22\"/><Cell col=\"8\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" textAlign=\"left\" text=\"bind:SAHOE_BONGSA_YN\" editmaxlength=\"1\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/><Cell col=\"9\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\" text=\"bind:CHEOMBU_FILE_NM\" editmaxlength=\"32\" expandshow=\"show\"/><Cell col=\"10\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:BIGO\" editmaxlength=\"4000\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","1135","560",null,"26","10",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_Pop");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch00","10","10",null,"42","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01","0","8","64","22",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("4");
            obj.set_text("학년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Spin("SpinSearchYYYY","77","9","114","22",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("0");
            obj.set_enable("false");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("Static01","209","9","76","22",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_text("단체명");
            obj.set_textAlign("right");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Edit("edtDancheNm","297","9","204","22",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            obj.set_enable("false");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_00","532","9","98","22",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_text("결과보고차수");
            obj.set_textAlign("right");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Edit("edtGyeolgwaBogoCnt","641","9","142","22",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("2");
            obj.set_autoselect("true");
            obj.set_enable("false");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Button("btnSearch","1110","9","60","25",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("3");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Crud");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_01","10","0","720","9",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("7");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","10","31","720","9",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("8");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","40",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("9");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00","67","0","10","40",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("10");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00","191","1","56","40",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("11");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","287","0","10","40",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00_00","501","1","56","40",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("13");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","631","0","10","40",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("14");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("stc_09_00","10","72","140","22",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("단체활동실적");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcel","1130","64","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd","935","64","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel","1000","64","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","1065","64","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("stRowCnt","120","71","233","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","10","89",null,"8","10",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","400","52","100","45",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("↑45\r\n↓");
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
            obj = new Layout("default","",1200,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_description("단체활동내역등록");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch00.form.SpinSearchYYYY","value","ds_input","YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch00.form.edtDancheNm","value","ds_input","DANCHE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch00.form.edtGyeolgwaBogoCnt","value","ds_input","GYEOLGWA_BOGO_CNT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
            this._addPreloadList("data","","dsDummy");
        };
        
        // User Script
        this.registerScript("UD01_2110104_P02.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UD01_2110104_P02.xfdl(단체활동내역등록)
        * 작 성         일 명: jiback
        * 작 성         일 자: 2020/12/03
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
        this.lvchkColidDs   = "DANCHE_CD$YYYY$GYEOLGWA_BOGO_CNT$SIJAK_DT$JONGRYO_DT$HWALDONG_NAEYEOK";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs = "단체코드$학년도$결과보고차수$시작일자$종료일자$활동내용";

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

        	this.ds_input.setColumn(0, "YYYY", this.getOwnerFrame().yyyy);
        	this.ds_input.setColumn(0, "DANCHE_CD", this.getOwnerFrame().dancheCd);
        	this.ds_input.setColumn(0, "DANCHE_NM", this.getOwnerFrame().dancheNm);
        	this.ds_input.setColumn(0, "GYEOLGWA_BOGO_CNT", this.getOwnerFrame().gyeolgwabogo);
        	this.ds_input.setColumn(0, "CHEORI_SANGTAE_GBCD", this.getOwnerFrame().cheoriSangtae);

        	if(this.getOwnerFrame().cheoriSangtae == "1" || this.getOwnerFrame().cheoriSangtae == "2"){
        	   this.fn_enable("false");
        	}

        	this.fn_Ret();
        };

        /**********************************************************************
         각 기능 활성화/비활성화 처리
        ***********************************************************************/
        this.fn_enable = function(val)
        {
            if(val == "false"){
        	   this.btnAdd.set_enable(false);
        	   this.btnDel.set_enable(false);
        	   this.btnSave.set_enable(false);
        	   this.grdMaster.set_enable(false);
            }
        }

        /**********************************************************************
                04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
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

        //Popup callback영역
        this.fn_popupCallback = function(strId, strVal)
        {
        	switch(strId)
        	{
        	    // 첨부파일
        		case "cheombuFileNoFileUpload":
        			if(!this.gfn_isNull(strVal))
        			{
        				//일반
        				var sRtn = strVal.split(",");
        				if(sRtn[0] == "S")
        				{
        					// 첨부파일번호가 바뀌면 저장한다.
        					if (this.dsMaster.getColumn(this.dsMaster.rowposition, "CHEOMBU_FILE_NO") != sRtn[1])
        					{
        						this.dsMaster.setColumn(this.dsMaster.rowposition, "CHEOMBU_FILE_NO", sRtn[1]);
        						this.dsMaster.setColumn(this.dsMaster.rowposition, "CHEOMBU_FILE_NM", sRtn[2]);

        						// 첨부파일번호 업데이트
        						this.ds_input1.clearData(); this.ds_input1.addRow();
        						this.ds_input1.setColumn(0, "DANCHE_CD",         this.dsMaster.getColumn(this.dsMaster.rowposition, "DANCHE_CD"));
        						this.ds_input1.setColumn(0, "YYYY",              this.dsMaster.getColumn(this.dsMaster.rowposition, "YYYY"));
        						this.ds_input1.setColumn(0, "GYEOLGWA_BOGO_CNT", this.dsMaster.getColumn(this.dsMaster.rowposition, "GYEOLGWA_BOGO_CNT"));
        						this.ds_input1.setColumn(0, "SILJEOK_SEQ",       this.dsMaster.getColumn(this.dsMaster.rowposition, "SILJEOK_SEQ"));
        						this.ds_input1.setColumn(0, "CHEOMBU_FILE_NO",   this.dsMaster.getColumn(this.dsMaster.rowposition, "CHEOMBU_FILE_NO"));

        						var strSvc      = "Save02";
        						var strUrl      = "/prj/UD/UD01/Save02_2110104_P02.do";
        						var strInDs     = "ds_input1=ds_input1:a";
        						var strOutDs    = "";
        						var strArg      = "";

        						var GBV_MENUID    = objApp.gv_cutPrgId;
        						if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
        						{
        						  strArg = "GBV_MENUID=" + GBV_MENUID + " " + strArg;
        						}

        						var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        						var strASync    = false;            //생략이나 공백일시에는 ASync=true,싱크시는 false로
        						this.gfn_Transaction(strSvc
        										   , strUrl
        										   , strInDs
        										   , strOutDs
        										   , strArg
        										   , strCallBack
        										   , strASync);
        					}
        				} // "S"
        			}
        			break;
        		default:
                    break;
        	}
        }

        /**********************************************************************
                05. 조회 함수 선언(마스터 함수)
        ***********************************************************************/
        this.btnSearch_onclick = function(obj,e)
        {
        	this.fn_Ret();
        };

        this.fn_Ret = function()
        {
            var strSvc      = "Ret";
            var strUrl      = "/prj/UD/UD01/Retrieve_2110104_P02.do";
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

        this.fn_PostRet = function()
        {
            this.gfn_getRowCount(this.stRowCnt,this.dsMaster);
        };

        /**********************************************************************
                06. 추가 함수 선언
        ***********************************************************************/

        this.btnAdd_onclick = function(obj,e)
        {
        	this.fn_New();
        };

        this.fn_New = function()
        {
        	// Row를 하나 추가하고 단체코드, 학년도, 결과보고차수를 설정
            var nRow = this.dsMaster.addRow();
            this.dsMaster.setColumn(nRow,"CHK",     "0");           // 선택
        	this.dsMaster.setColumn(nRow, "DANCHE_CD", this.ds_input.getColumn(0, "DANCHE_CD"));
        	this.dsMaster.setColumn(nRow, "YYYY", this.ds_input.getColumn(0, "YYYY"));
        	this.dsMaster.setColumn(nRow, "GYEOLGWA_BOGO_CNT", this.ds_input.getColumn(0, "GYEOLGWA_BOGO_CNT"));

        	this.grdMaster.setFocus();
        	this.grdMaster.setCellPos(2);
        };

        this.fn_PostNew = function()
        {
        	this.gfn_getRowCount(this.stRowCnt,this.dsMaster);
        };

        /**********************************************************************
                07. 삭제 함수 선언
        ***********************************************************************/
        this.btnDel_onclick = function(obj,e)
        {
            //멀티삭제용도
            if(this.dsMaster.rowcount < 1 || this.dsMaster.findRow("CHK",1) == -1)
            {
                this.gfn_alert("삭제할 데이터가 없습니다.","삭제정보","","warning");
                return false;
            }

        	// 처리상태가 제출인 경우
        	if(this.ds_input.getColumn(0, "CHEORI_SANGTAE_GBCD") == '1')
        	{
        		this.gfn_alert("결과보고서가 제출되어 삭제할 수 없습니다.","삭제정보","","warning");
                return false;
        	}

        	// 처리상태가 접수인 경우
        	if(this.ds_input.getColumn(0, "CHEORI_SANGTAE_GBCD") == '2')
        	{
        		this.gfn_alert("결과보고서가 접수되어 삭제할 수 없습니다.","삭제정보","","warning");
                return false;
        	}

            var result = this.gfn_confirm( "현재선택행을 삭제하시겠습니까?", "삭제정보","","question" );

            if(result == 0)
            {
                return false;
            }

            //다중삭제 용도
            this.dsMaster.set_enableevent(false);
            for(var i=this.dsMaster.rowcount-1;i>-1;i--)
            {
                if(this.dsMaster.getColumn(i,"CHK") == "1" || this.dsMaster.getRowType(i) == 2)
                {
                    this.dsMaster.deleteRow(i);
                }
            }
            this.dsMaster.set_enableevent(true);

        	this.fn_Del();
        };

        this.fn_Del = function()
        {
            var strSvc      = "Del";
            var strUrl      = "/prj/UD/UD01/Delete_2110104_P02.do";
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
            this.gfn_getRowCount(this.stRowCnt,this.dsMaster);
        };

        /**********************************************************************
                08. 저장 함수 선언
        ***********************************************************************/

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
                this.gfn_alert("변경된 이력이 없습니다.","저장정보","","question");
                return false;
            }

        	for(var i=0; i<this.dsMaster.rowcount; i++)
        	{
        		if(this.dsMaster.getColumn(i, "SIJAK_DT") > this.dsMaster.getColumn(i, "JONGRYO_DT"))
        		{
        			this.gfn_alert("시작일자는 종료일자보다 이전 날짜가 될 수 없습니다.","저장정보","","question");
        			return false;
        		}
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

        this.fn_Save = function()
        {
            var strSvc      = "Save";
            var strUrl      = "/prj/UD/UD01/Save_2110104_P02.do";
            var strInDs     = "ds_input=ds_input:a ";
                strInDs    += "dsMaster=dsMaster:u";
            var strOutDs    = "dsMaster=dsMaster";
        	var strArg      = "rowposition=" + this.gfn_updateRowPosition(this.dsMaster);

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

        this.fn_PostSave = function()
        {
        	var nRow = this.dsMaster.findRow("SILJEOK_SEQ",this.strKeyValue);
        	this.dsMaster.set_rowposition(nRow);

            this.gfn_getRowCount(this.stRowCnt,this.dsMaster);
        };

        /**********************************************************************
                09. ExcelDnwn 엑셀로 출력
        ***********************************************************************/
        this.btnExcel_onclick = function(obj,e)
        {
        	this.fn_Excel();
        };

        this.fn_Excel = function()
        {
            if(this.dsMaster.rowcount < 1)
            {
                this.gfn_alert("출력할 엑셀데이터가 없습니다.", "EXCEL 정보" ,"","information");
                return false;
            }
            var result = this.gfn_confirm( "Excel를 출력하시겠습니까?", "EXCEL 출력","","question" );
            if(result == 0)
            {
               return false;
            }
            this.gfn_excelExport(this.grdMaster, "단체 활동 실적 목록","단체 활동 실적 목록");

        };

        /**********************************************************************
                10. 기타 Control Event
        ***********************************************************************/
        // 그리드 멀티 체크
        this.grdMaster_onheadclick = function(obj,e)
        {
            if(e.cell == this.grdMaster.getBindCellIndex("body","CHK"))
            {
                this.gfn_checkAll(obj, e);
            }
        };

        // 그리드 멀티 소트 정렬
        this.grdMaster_onheaddblclick = function(obj,e)
        {
            if(e.cell != this.grdMaster.getBindCellIndex("body","CHK"))
            {
                this.gfn_gridSort(obj,e);
            }
        };

        // 팝업 종료
        this.btnClose_onclick = function(obj,e)
        {
        	if (this.gfn_isUpdate(this.dsMaster))
        	{
        		var result = this.gfn_confirm( "변경된 데이터가 있습니다. 그래도 이동하시겠습니까?", "저장","", "question" );
        		if(result == false)
        		{
        			return false;
        		}
        	}

        	this.close("CLOSE");
        };

        this.grdMaster_onexpandup = function(obj,e)
        {
        	// 첨부파일
        	if(e.cell == this.grdMaster.getBindCellIndex("body","CHEOMBU_FILE_NM"))
        	{
        		this.fn_setCallAttFilePopup(obj.name, this.dsMaster.getColumn(this.dsMaster.rowposition, "CHEOMBU_FILE_NO"));
        	}
        };

        /**********************************************************************
                11. 첨부파일
        ***********************************************************************/
        //Popup 데이터 전달
        this.fn_dsChildCopydsDummy = function(ds)
        {
        	this.dsDummy.clearData();
        	this.dsDummy.copyData(ds);
        };

        this.fn_setCallAttFilePopup = function(strObj, strAttFileNo)
        {
        	if (this.dsMaster.rowcount > 0) {
        		var nRow = this.dsMaster.rowposition;

        		if (this.dsMaster.getRowType(nRow) == Dataset.ROWTYPE_INSERT) {
        			this.gfn_alert("저장 후 첨부파일 사용 가능합니다.","저장정보","","information");
        		} else {

        			var multFlg     = "S"; 	// 멀티처리 : 싱글처리/멀티처리 S:한로우처리/M:멀티로처리

        			this.ds_input1.setColumn(this.ds_input1.rowposition, "ATTFL_NO", strAttFileNo);

        			var lv_sFlag01 			= "Y";						// (필수)부모에서 파라미터를 넘길지의 여부 (Y:파라미터넘김 / N:넘기지 않음)
        			var lv_sFlag02			= "Y";						// (필수)팝업이 열렸을때 자동조회를 할 것인가 여부.(Y:자동조회 / N:수동조회)
        			var lv_sFlag03			= multFlg;					// 멀티처리 : 싱글처리/멀티처리 S:한로우처리/M:멀티로처리
        			var lv_sValue01 		= strAttFileNo;				// 부모에서 넘어가는 파라미터(첨부파일번호)
        			var lv_sValue02 		= "8";						// 부모에서 넘어가는 파라미터(파일허용갯수)
        			var lv_sValue03 		= "all";					// 부모에서 넘어가는 파라미터(파일허용유형 all,text,image)
        			var lv_sValue04 		= "";						// 부모에서 넘어가는 파라미터(확장자 ext)
        			var lv_sValue05 		= "univ_UD";				// 부모에서 넘어가는 파라미터(도메인네임)
        			var lv_sValue06 		= "Y";                      // 부모에서 넘어가는 파라미터(추가/삭제 보이기)

        			var sPopId          = "cheombuFileNoFileUpload";
        			var sUrl 			= "pop::POP102FileUploadP01.xfdl";
        			var oArg 			= { pv_sOp01:lv_sFlag01      	// 조회조건 : 조회조건셋팅/조회조건에 미셋팅 Y:조회조건셋팅/조회조건자동셋팅않함.
        								  , pv_sOp02:lv_sFlag02       	// 자동조회 : 바로조회/미조회   Y:자동조회/N:자동조회않임
        								  , pv_sOp03:lv_sFlag03      	// 멀티처리 : 싱글처리/멀티처리 S:한로우처리/M:멀티로처리
        								  , pv_sVal01:lv_sValue01      	// 파라미터1
        								  , pv_sVal02:lv_sValue02       // 파라미터2
        								  , pv_sVal03:lv_sValue03       // 파라미터3
        								  , pv_sVal04:lv_sValue04       // 파라미터4
        								  , pv_sVal05:lv_sValue05       // 파라미터5
        								  , pv_sVal06:lv_sValue06};     // 파라미터6
        			var sPopupCallBack 	= "fn_popupCallback";
        			var oOption 		= {};

        			this.dsDummy.clearData();
        			this.gfn_openPopup( sPopId
        							  , sUrl
        							  , oArg
        							  , sPopupCallBack
        							  , oOption);

        		}
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster.addEventHandler("onexpandup",this.grdMaster_onexpandup,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.divSearch00.form.edtDancheNm.addEventHandler("onkeyup",this.divSearch_edtStoreCd_onkeyup,this);
            this.divSearch00.form.edtDancheNm.addEventHandler("oninput",this.divSearch_edtStoreCd_oninput,this);
            this.divSearch00.form.edtGyeolgwaBogoCnt.addEventHandler("onkeyup",this.divSearch_edtStoreCd_onkeyup,this);
            this.divSearch00.form.edtGyeolgwaBogoCnt.addEventHandler("oninput",this.divSearch_edtStoreCd_oninput,this);
            this.divSearch00.form.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.btnExcel.addEventHandler("onclick",this.btnExcel_onclick,this);
            this.btnAdd.addEventHandler("onclick",this.btnAdd_onclick,this);
            this.btnDel.addEventHandler("onclick",this.btnDel_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
        };
        this.loadIncludeScript("UD01_2110104_P02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
