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
            this.set_titletext("사용자메뉴별버튼권한");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMaster", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"32\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"USER_ID\"/><Col id=\"USER_NM\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBttnFg", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"SORT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ADDR\" type=\"STRING\" size=\"32\"/><Column id=\"CD_DC\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"32\"/><Column id=\"REF_2\" type=\"STRING\" size=\"32\"/><Column id=\"REF_3\" type=\"STRING\" size=\"32\"/><Column id=\"REF_4\" type=\"STRING\" size=\"32\"/><Column id=\"REF_5\" type=\"STRING\" size=\"32\"/><Column id=\"REF_6\" type=\"STRING\" size=\"32\"/><Column id=\"REF_7\" type=\"STRING\" size=\"32\"/><Column id=\"REF_8\" type=\"STRING\" size=\"32\"/><Column id=\"REF_9\" type=\"STRING\" size=\"32\"/><Column id=\"REF_10\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"REG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"REG_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"MOD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MOD_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"AUTO_PLUS\" type=\"BIGDECIMAL\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBttnFgGrd", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"SORT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ADDR\" type=\"STRING\" size=\"32\"/><Column id=\"CD_DC\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"32\"/><Column id=\"REF_2\" type=\"STRING\" size=\"32\"/><Column id=\"REF_3\" type=\"STRING\" size=\"32\"/><Column id=\"REF_4\" type=\"STRING\" size=\"32\"/><Column id=\"REF_5\" type=\"STRING\" size=\"32\"/><Column id=\"REF_6\" type=\"STRING\" size=\"32\"/><Column id=\"REF_7\" type=\"STRING\" size=\"32\"/><Column id=\"REF_8\" type=\"STRING\" size=\"32\"/><Column id=\"REF_9\" type=\"STRING\" size=\"32\"/><Column id=\"REF_10\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"REG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"REG_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"MOD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MOD_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"AUTO_PLUS\" type=\"BIGDECIMAL\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetail", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inputD", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"USER_ID\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMainList", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"120\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"10\"/><Column id=\"BTTN_SEQ\" type=\"STRING\" size=\"2\"/><Column id=\"BTTN_NM\" type=\"STRING\" size=\"150\"/><Column id=\"BTTN_FG\" type=\"STRING\" size=\"1\"/><Column id=\"REG_ID\" type=\"STRING\" size=\"240\"/><Column id=\"REG_DT\" type=\"DATE\" size=\"8\"/><Column id=\"MOD_ID\" type=\"STRING\" size=\"240\"/><Column id=\"MOD_DT\" type=\"DATE\" size=\"8\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inputD01", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"USER_ID\"/><Col id=\"MENU_ID\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static09_01","1397","81",null,"28","0",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00","1397","109",null,"28","0",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMainList","855","80","410",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("dsMainList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"39\"/><Column size=\"69\"/><Column size=\"179\"/><Column size=\"92\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" displaytype=\"normal\" text=\"No.\"/><Cell col=\"2\" disptype=\"normal\" text=\"버튼코드\"/><Cell col=\"3\" disptype=\"normal\" text=\"버튼명\" cssclass=\"point\"/><Cell col=\"4\" disptype=\"normal\" text=\"버튼구분\" cssclass=\"point\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" editmaxlength=\"1\"/><Cell col=\"1\" displaytype=\"normal\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:BTTN_SEQ\" editmaxlength=\"2\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"none\" textAlign=\"left\" text=\"bind:BTTN_NM\" editmaxlength=\"150\"/><Cell col=\"4\" displaytype=\"combotext\" edittype=\"none\" textAlign=\"center\" text=\"bind:BTTN_FG\" editmaxlength=\"1\" combodataset=\"dsBttnFgGrd\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"44","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_SearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle01","0","10","93","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("사용자아이디");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staSubTitle02","227","10","83","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("사용자 명");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtUserId","105","10","122","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_imemode("alpha");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtUserNm","317","10","117","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_imemode("alpha");
            obj.set_inputmode("upper");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staRowCnt","126","54","94","22",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","1","80","260",null,null,"0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"126\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" text=\"사용자id\"/><Cell col=\"2\" text=\"사용자명\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:USER_ID\" displaytype=\"text\" edittype=\"none\"/><Cell col=\"2\" text=\"bind:USER_NM\" displaytype=\"text\" edittype=\"none\" combodataset=\"dsGPrefix\" combocodecol=\"code\" combodatacol=\"codeNm\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdDetail","269","81","580",null,null,"0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsDetail");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"115\"/><Column size=\"414\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" text=\"No.\"/><Cell col=\"1\" disptype=\"normal\" text=\"메뉴아이디\"/><Cell col=\"2\" disptype=\"normal\" text=\"메뉴명\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:MENU_ID\" editmaxlength=\"10\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"none\" textAlign=\"left\" text=\"bind:MENU_NM\" editmaxlength=\"150\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt01","436","54","94","22",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt02","1029","54","94","22",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle","2","55","108","26",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("사용자 리스트");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle00","265","55","158","26",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("사용자별 메뉴 리스트");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle00_00","853","55","168","26",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("사용자 메뉴별 벼튼관리");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","1397","137",null,"28","0",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("staTitel20","1274","137","123","28",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("버튼구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("staTitel07","1274","109","123","28",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("버튼명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("staTitel01","1274","81","123","28",null,null,null,null,null,null,this);
            obj.set_text("버튼코드");
            obj.set_taborder("13");
            obj.set_background("");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboBttnFg","1402","139","167","23",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_innerdataset("dsBttnFg");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_type("filterlike");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBttnSeq","1402","84","77","22",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_enable("false");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBttnNm","1402","112","167","22",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("point");
            obj.set_inputtype("alpha,number,symbol");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("사용자메뉴별버튼권한");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.edtUserId","value","ds_input","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtUserNm","value","ds_input","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","cboBttnFg","value","dsMainList","BTTN_FG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edtBttnSeq","value","dsMainList","BTTN_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edtBttnNm","value","dsMainList","BTTN_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
            this._addPreloadList("data","","dsDetail");
            this._addPreloadList("data","","dsMainList");
        };
        
        // User Script
        this.registerScript("SYS009UserMenuButtonAuthM01.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): SYS009UserMenuButtonAuthM01.xfdl(사용자메뉴별버튼권한 관리(조회))
        * 작 성         일 명: jiback
        * 작 성         일 자: 2020/06/29
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
        this.lvchkColidDs   = "BTTN_NM$BTTN_FG";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs = "버튼명$버튼구분";
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
            var strDs    = "dsBttnFgGrd|dsBttnFg";        // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00520|00520";               // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "X|X";                         // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = "";                            // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
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
                    case "RetMst":
                            this.fn_PostRetMst();
                        break;
        			case "RetDtl":
                            this.fn_PostRetDtl();
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
                        this.fn_RetMst();
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
                case "excel" :       // 엑셀
                        this.fn_Excel();
                    break;
                case "print" :       // 출력
                         this.fn_Print();
                    break;
                case "confirm" :     // 확정
                         this.fn_Confirm();
                    break;
                case "tmp1" :        // 여분버튼1
                         this.fn_Tmp1();
                    break;
                case "tmp2" :        // 여분버튼2
                         this.fn_Tmp2();
                    break;
                case "tmp3" :        // 여분버튼3
                         this.fn_Tmp3();
                    break;
                default :
                    break;
            };
        };;

        /**********************************************************************
                05-1. 조회 함수 선언(사용자 리스트)
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreRetMst = function()
        {
            // 조회조건 셋팅
            this.dsDetail.clearData();
        	this.dsMainList.clearData();
        	return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_RetMst = function()
        {
            if(!this.fn_PreRetMst())
            {
                return false;
            }
            var strSvc      = "RetMst";
            var strUrl      = "/prj/sys/RetrieveUserInfoList.do";
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

        /**
         * 기능 : 조회 후 실행
         */
        this.fn_PostRetMst = function()
        {
            trace(this.dsMaster.saveXML());
            this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
        };

        /**********************************************************************
                05-2. 조회 함수 선언(사용별 메뉴 리스트)
        ***********************************************************************/
        /**
         * 기능 : 행을 변경시 처리하는 이벤트
         */
        this.dsMaster_onrowposchanged = function(obj,e)
        {
        	this.dsMainList.clearData();
        	this.fn_RetDtl();
        };

        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreRetDtl = function()
        {
            this.ds_inputD.clearData();
        	var nRow = this.ds_inputD.addRow();
        	this.ds_inputD.setColumn(nRow,"USER_ID",this.dsMaster.getColumn(this.dsMaster.rowposition,"USER_ID"));
            return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_RetDtl = function()
        {
            if(!this.fn_PreRetDtl())
            {
                return false;
            }
            var strSvc      = "RetDtl";
            var strUrl      = "/prj/sys/RetrieveUserAuthMenuList.do";
            var strInDs     = "ds_inputD=ds_inputD";
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
        };

        /**
         * 기능 : 조회 후 실행
         */
        this.fn_PostRetDtl = function()
        {
            //trace(this.dsDetail.saveXML());
            this.gfn_getRowCount(this.staRowCnt01,this.dsDetail);
        };
        /**********************************************************************
                05-3. 조회 함수 선언(사용자메뉴별 버튼리스트)
        ***********************************************************************/

        this.dsDetail_onrowposchanged = function(obj,e)
        {
        	this.fn_Ret();
        };

        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreRet = function()
        {
            this.ds_inputD01.clearData();
        	var nRow = this.ds_inputD01.addRow();
        	this.ds_inputD01.setColumn(nRow,"USER_ID",this.dsDetail.getColumn(this.dsDetail.rowposition,"USER_ID"));
        	this.ds_inputD01.setColumn(nRow,"MENU_ID",this.dsDetail.getColumn(this.dsDetail.rowposition,"MENU_ID"));
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
            var strUrl      = "/prj/sys/RetrieveUserMenuButtonAuthList.do";
            var strInDs     = "ds_inputD01=ds_inputD01";
            var strOutDs    = "dsMainList=dsMainList";
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
            //trace(this.dsMainList.saveXML());
            this.gfn_getRowCount(this.staRowCnt02,this.dsMainList);
        };

        /**********************************************************************
                06. 추가 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 추가 전 실행(기본체크사항)
         */
        this.fn_PreNew = function()
        {
            if(this.dsDetail.rowcount < 1)
        	{
        		this.gfn_alert("등록할 사용자별 메뉴가 없습니다.","삭제정보","","warning");
        		return false;
        	}
        	return true;
        };

        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_New = function()
        {
            if(!this.fn_PreNew())
            {
                return false;
            }
            var nRow = this.dsMainList.addRow();
            this.dsMainList.setColumn(nRow,"CHK",     "0");           														   // 삭제유무
            this.dsMainList.setColumn(nRow,"USER_ID", this.dsDetail.getColumn(this.dsDetail.rowposition,"USER_ID"));           // 사용자 아이디
        	this.dsMainList.setColumn(nRow,"MENU_ID", this.dsDetail.getColumn(this.dsDetail.rowposition,"MENU_ID"));           // 메뉴 아이디
        	this.dsMainList.setColumn(nRow,"BTTN_FG", "W");                                                                    // 번튼 구분코드
        	this.edtBttnNm.setFocus();
        };
        /**
         * 기능 : 처리 후 실행
         */
        this.fn_PostNew = function()
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
            if(this.dsMainList.rowcount < 1 || this.dsMainList.findRow("CHK",1) == -1)
            {
                this.gfn_alert("MSG00006","삭제정보","","warning");
                return false;
            }
            var result = this.gfn_confirm( "MSG00007", "삭제정보","","question" );

            if(result == 0)
            {
                return false;
            }

            //다중삭제 용도
            this.dsMainList.set_enableevent(false);
            for(var i=this.dsMainList.rowcount-1;i>-1;i--)
            {
                if(this.dsMainList.getColumn(i,"CHK") == "1" || this.dsMainList.getRowType(i) == 2)
                {
                    this.dsMainList.deleteRow(i);
                }
            }
            this.dsMainList.set_enableevent(true);

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
            var strUrl      = "/prj/sys/DeleteUserMenuButtonAuthList.do";
            var strInDs     = "dsMainList=dsMainList:u";
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
            this.gfn_getRowCount(this.staRowCnt,this.dsMainList);
        };

        /**********************************************************************
                08. 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave = function()
        {
            if(this.dsMainList.rowcount > 0)
            {
                for(var i=0;i<this.dsMainList.rowcount; i++)
                {
                    if(this.dsMainList.getColumn(i,"CHK") == "0")
                    {
                        continue;
                    }
                    this.dsMainList.setColumn(i,"CHK","0");
                }
            }

            if(!this.gfn_isUpdate(this.dsMainList))
            {
                this.gfn_alert("변경된 이력이 없습니다.!","저장정보","","question");
                return false;
            }


            // 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
            var chkFocusFlg = false;
            var result      = this.gfn_cmmnChkEssentialItem(this.dsMainList, this.lvchkColidDs, this.lvchkColNameDs, "", chkFocusFlg, this);


           if (result[0] != "success")
            {
                this.gfn_alert(result[0],"저장정보","","question");
                this.dsMainList.set_rowposition(result[1]); //데이터셋 변경
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
            var strUrl      = "/prj/sys/SaveUserMenuButtonAuthList.do";
            var strInDs     = "ds_inputD01=ds_inputD01:a ";
                strInDs    += "dsMainList=dsMainList:u";
            var strOutDs    = "dsMainList=dsMainList";
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
        this.fn_PostSave = function()
        {
            this.gfn_getRowCount(this.staRowCnt,this.dsMainList);
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
        /**********************************************************************
                13. Get, Set Method
        ***********************************************************************/
        /**********************************************************************
                14. 기타 Control Event
        ***********************************************************************/
        this.grdMaster_onheaddblclick = function(obj,e)
        {
        	if(e.cell != 0)
            {
                this.gfn_gridSort(obj,e);
            }
        };

        this.grdDetail_onheaddblclick = function(obj,e)
        {
        	if(e.cell != 0)
            {
                this.gfn_gridSort(obj,e);
            }
        };


        /**
         *      그리드멀티 체크
         */

        this.grdMainList_onheadclick = function(obj,e)
        {
        	 if(e.cell == this.grdMainList.getBindCellIndex("body","CHK"))
            {
                this.gfn_checkAll(obj, e);
            }
        };

        /**
         *   그리드멀티 소트정열
         */
        this.grdMainList_onheaddblclick = function(obj,e)
        {
        	if(e.cell != 1 || e.cell == this.grdMainList.getBindCellIndex("body","CHK"))
            {
                this.gfn_gridSort(obj,e);
            }
        };

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
            return this.gfn_isUpdate(this.dsMainList);
        };

        this.divSearch_edtUserId_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.fn_RetMst();
        	}
        };

        this.divSearch_edtUserNm_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.fn_RetMst();
        	}
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.grdMainList.addEventHandler("onheadclick",this.grdMainList_onheadclick,this);
            this.grdMainList.addEventHandler("onheaddblclick",this.grdMainList_onheaddblclick,this);
            this.divSearch.form.edtUserId.addEventHandler("onkeyup",this.divSearch_edtUserId_onkeyup,this);
            this.divSearch.form.edtUserNm.addEventHandler("onkeyup",this.divSearch_edtUserNm_onkeyup,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdDetail.addEventHandler("onheaddblclick",this.grdDetail_onheaddblclick,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsDetail.addEventHandler("onrowposchanged",this.dsDetail_onrowposchanged,this);
        };
        this.loadIncludeScript("SYS009UserMenuButtonAuthM01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
