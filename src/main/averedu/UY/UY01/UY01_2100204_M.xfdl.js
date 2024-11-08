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
            this.set_titletext("설문신청");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsChamyeoMaster", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"SEOLMUN_GAESEOL_CD\" type=\"STRING\" size=\"8\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"CHAMYEO_DT\" type=\"DATE\" size=\"8\"/><Column id=\"SEOLMUN_NAEYONG\" type=\"STRING\" size=\"4000\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGaeseolMaster", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"SEOLMUN_GAESEOL_CD\" type=\"STRING\" size=\"8\"/><Column id=\"SEOLMUN_YUHYUNG_GBCD\" type=\"STRING\" size=\"20\"/><Column id=\"SEOLMUN_NAEYONG\" type=\"STRING\" size=\"4000\"/><Column id=\"SEOLMUN_SIJAK_DT\" type=\"DATE\" size=\"8\"/><Column id=\"SEOLMUN_JONGRYO_DT\" type=\"DATE\" size=\"8\"/><Column id=\"DAMDANG_DEPT_CD\" type=\"STRING\" size=\"8\"/><Column id=\"MAGAM_YN\" type=\"STRING\" size=\"1\"/><Column id=\"DAESANG_INWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SEOLMUN_INWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BIGYOGWA_CD\" type=\"STRING\" size=\"8\"/><Column id=\"GYOGWAMOK_CD\" type=\"STRING\" size=\"8\"/><Column id=\"BUNBAN\" type=\"STRING\" size=\"5\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"8\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chamyeoInput", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"SEOLMUN_GAESEOL_CD\" type=\"STRING\" size=\"8\"/><Column id=\"SEOLMUN_YUHYUNG_GBCD\" type=\"STRING\" size=\"20\"/><Column id=\"SEOLMUN_NAEYONG\" type=\"STRING\" size=\"4000\"/><Column id=\"SEOLMUN_SIJAK_DT\" type=\"DATE\" size=\"8\"/><Column id=\"SEOLMUN_JONGRYO_DT\" type=\"DATE\" size=\"8\"/><Column id=\"DAMDANG_DEPT_CD\" type=\"STRING\" size=\"8\"/><Column id=\"MAGAM_YN\" type=\"STRING\" size=\"1\"/><Column id=\"DAESANG_INWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SEOLMUN_INWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BIGYOGWA_CD\" type=\"STRING\" size=\"8\"/><Column id=\"GYOGWAMOK_CD\" type=\"STRING\" size=\"8\"/><Column id=\"BUNBAN\" type=\"STRING\" size=\"5\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"8\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rtn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgiMaster", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBaseYyyyHakgi", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdGaeseol","0","77",null,"298","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsGaeseolMaster");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"1172\"/><Column size=\"133\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"checkbox\" text=\"No\"/><Cell col=\"1\" text=\"설문명\"/><Cell col=\"2\" text=\"참여\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\" text=\"bind:SEOLMUN_NAEYONG\" editmaxlength=\"4000\"/><Cell col=\"2\" displaytype=\"buttoncontrol\" edittype=\"button\" textAlign=\"center\" editmaxlength=\"8\" calendardisplaynulltype=\"none\" text=\"참여\" cursor=\"pointer\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","0","50","85","22",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("설문목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","0","394","115","22",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("설문참여목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Grid("grdChamyeo","0","420",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsChamyeoMaster");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"1172\"/><Column size=\"133\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"checkbox\" text=\"No\"/><Cell col=\"1\" text=\"설문명\"/><Cell col=\"2\" text=\"참여일시\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\" text=\"bind:SEOLMUN_NAEYONG\" editmaxlength=\"4000\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"none\" textAlign=\"center\" text=\"bind:CHAMYEO_DT\" editmaxlength=\"8\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stRowCnt","110","50","233","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stRowCnt2","137","394","233","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","0","69","320","8",null,null,null,null,null,null,this);
            obj.set_taborder("7");
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
            obj.set_taborder("8");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","412",null,"8","0",null,null,null,null,null,this);
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

            obj = new Static("Static01_00","500","375","100","45",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("↑\r\n45\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("div_01","0","0",null,"42","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01_00","-5","10","80","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("2");
            obj.set_text("학년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_01.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","85","9","230","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_value("2020");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","355","10","80","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("3");
            obj.set_text("학기");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_01.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgi","445","9","257","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsHakgiMaster");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","40","1","1000","9",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","1","1","27","37",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","560","32","100","9",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_01","316","1","56","40",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","86","1","10","37",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","436","1","10","37",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00","703","1","56","40",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","810","1","10","37",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("10");
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
            obj.set_description("설문신청");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_01.form.spnSearchYYYY","value","ds_gaeseolInput","YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_01.form.cboSearchHakgi","value","ds_gaeseolInput","HAKGI");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsChamyeoMaster");
            this._addPreloadList("data","","dsGaeseolMaster");
            this._addPreloadList("data","","ds_chamyeoInput");
        };
        
        // User Script
        this.registerScript("UY01_2100204_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UY01_2100204_M.xfdl(설문신청)
        * 작 성         일 명: jiback
        * 작 성         일 자: 2020/11/12
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
            var strDs    = "dsHakgiMaster";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00022";                         // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "X";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
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
        	var strEopmuGbcd = "UM";
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
        		this.ds_gaeseolInput.setColumn(0,"YYYY",     this.dsBaseYyyyHakgi.getColumn(0, "YYYY"));
        		this.ds_gaeseolInput.setColumn(0,"HAKGI",    this.dsBaseYyyyHakgi.getColumn(0, "HAKGI"));
        	}

        	// 자동조회
        	this.fn_Ret();
        	this.fn_ChamyeoRet();
        };

        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {
            this.gfn_clearSortAll(this.grdGaeseol);
        	this.gfn_clearSortAll(this.grdChamyeo);
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
        			case "ChamyeoRet":
                            this.fn_PostChamyeoRet();
                        break;
        			case "Save":
                            this.fn_PostSave();
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
        		case "popup":
        				var sRtn = strVal.split(",");
        				this.ds_rtn.loadXML(sRtn[2]);

        				if(this.ds_rtn.rowcount > 0)
        				{
        					this.fn_Save();
        				}
        			break;
                default:
                    break;
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
        				this.fn_ChamyeoRet();
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
            var strUrl      = "/prj/UY/UY01/gaeseolRetrieve_2100204_M.do";
            var strInDs     = "ds_gaeseolInput=ds_gaeseolInput";
            var strOutDs    = "dsGaeseolMaster=dsGaeseolMaster";
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
            this.gfn_getRowCount(this.stRowCnt,this.dsGaeseolMaster);
        };

        /**********************************************************************
                05-1. 조회 함수 선언(참여 함수)
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreChamyeoRet = function()
        {
            // 조회조건 셋팅
            return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_ChamyeoRet = function()
        {
            if(!this.fn_PreChamyeoRet())
            {
                return false;
            }
            var strSvc      = "ChamyeoRet";
            var strUrl      = "/prj/UY/UY01/chamyeoRetrieve_2100204_M.do";
            var strInDs     = "ds_gaeseolInput=ds_gaeseolInput";
            var strOutDs    = "dsChamyeoMaster=dsChamyeoMaster";
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
        this.fn_PostChamyeoRet = function()
        {
        	this.gfn_getRowCount(this.stRowCnt2,this.dsChamyeoMaster);
        };

        /**********************************************************************
                06. 참여 함수 선언
        ***********************************************************************/
        this.grdGaeseol_oncellclick = function(obj,e)
        {

        	if (this.dsGaeseolMaster.getColumn(e.row, "MAGAM_YN") == "2")
        	{
        		this.gfn_alert("마감되었습니다.","마감정보","","warning");
        		return false;
        	}

        	if(obj.getCellProperty("body", e.cell, "edittype") == "button" &&
        	   obj.getCellProperty("body", e.cell, "text")     == "참여")
        	{
        		var chamyeoBtn = this.gfn_confirm("설문 참여 하시겠습니까?","참여 처리","","question");
        		if(chamyeoBtn == 0)
        		{
        			return false;
        		}

        		var oArg = {dsArg:this.dsGaeseolMaster};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";
        		this.gfn_openPopup( "popup","UY01::UY01_2100204_P01.xfdl",oArg,sPopupCallBack,oOption);
        	}
        };
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave = function()
        {
        	// 조회조건 셋팅
        	this.ds_chamyeoInput.clearData();
        	this.ds_chamyeoInput.insertRow(0);
        	this.ds_chamyeoInput.copyRow(0, this.dsGaeseolMaster, this.dsGaeseolMaster.rowposition);

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
            var strUrl      = "/prj/UY/UY01/chamyeoSave_2100204_M.do";
            var strInDs     = "ds_gaeseolInput=ds_gaeseolInput:a ";
                strInDs    += "ds_chamyeoInput=ds_chamyeoInput:u";
            var strOutDs    = "dsChamyeoMaster=dsChamyeoMaster";
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
        	this.fn_Ret();
        	this.fn_ChamyeoRet();
            this.gfn_getRowCount(this.stRowCnt,this.dsGaeseolMaster);
        	this.gfn_getRowCount(this.stRowCnt2,this.dsChamyeoMaster);
        };

        /**********************************************************************
                07. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 소트정열
         */
        this.grdGaeseol_onheaddblclick = function(obj,e)
        {
            if(e.cell != this.grdGaeseol.getBindCellIndex("body","CHK"))
            {
                this.gfn_gridSort(obj,e);
            }
        };

        this.grdChamyeo_onheaddblclick = function(obj,e)
        {
            if(e.cell != this.grdChamyeo.getBindCellIndex("body","CHK"))
            {
                this.gfn_gridSort(obj,e);
            }
        };

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
            //return this.gfn_isUpdate(this.dsMaster);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.grdGaeseol.addEventHandler("onheaddblclick",this.grdGaeseol_onheaddblclick,this);
            this.grdGaeseol.addEventHandler("oncellclick",this.grdGaeseol_oncellclick,this);
            this.grdChamyeo.addEventHandler("onheaddblclick",this.grdGaeseol_onheaddblclick,this);
        };
        this.loadIncludeScript("UY01_2100204_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
