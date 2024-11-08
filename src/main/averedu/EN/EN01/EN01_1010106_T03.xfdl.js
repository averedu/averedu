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
            this.set_titletext("온라인대상교 관리");
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
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"GOGYO_CD\" type=\"STRING\" size=\"10\"/><Column id=\"GOGYO_NM\" type=\"STRING\" size=\"100\"/><Column id=\"HAKSAENGBU_JEGONG_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"GIJUN_YYYY_DAESANG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DAESANG_YN1\" type=\"STRING\" size=\"2\"/><Column id=\"DAESANG_YN2\" type=\"STRING\" size=\"2\"/><Column id=\"DAESANG_YN3\" type=\"STRING\" size=\"2\"/><Column id=\"DAESANG_YN4\" type=\"STRING\" size=\"2\"/><Column id=\"DAESANG_YN5\" type=\"STRING\" size=\"2\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"GOGYO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JEOKYONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"GOGYO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GOGYOGYEYEOL_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JIYEOK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SEBUJIYEOK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gijunYyyy", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult", this);
            obj._setContents("<ColumnInfo><Column id=\"CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcelUpload", this);
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_09_00","10","97",null,"22","1485",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("온라인대상교 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","157","96",null,"24","1360",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","10","122",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"251\"/><Column size=\"100\"/><Column size=\"117\"/><Column size=\"117\"/><Column size=\"117\"/><Column size=\"117\"/><Column size=\"117\"/><Column size=\"117\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" text=\"No.\" font=\"bold 11px/normal &quot;Malgun Gothic&quot;\"/><Cell col=\"1\" disptype=\"normal\" text=\"입시 년도\" font=\"bold 11px/normal &quot;Malgun Gothic&quot;\"/><Cell col=\"2\" disptype=\"normal\" text=\"고교 코드\" font=\"bold 11px/normal &quot;Malgun Gothic&quot;\"/><Cell col=\"3\" disptype=\"normal\" text=\"고교 명\" font=\"bold 11px/normal &quot;Malgun Gothic&quot;\"/><Cell col=\"4\" disptype=\"normal\" text=\"제공 년도\" font=\"bold 11px/normal &quot;Malgun Gothic&quot;\"/><Cell col=\"5\" disptype=\"normal\" text=\"입시년도기준&#13;&#10;대상여부\" font=\"bold 11px/normal &quot;Malgun Gothic&quot;\"/><Cell col=\"6\" disptype=\"normal\" text=\"1년전&#13;&#10;대상여부\" font=\"bold 11px/normal &quot;Malgun Gothic&quot;\"/><Cell col=\"7\" disptype=\"normal\" text=\"2년전&#13;&#10;대상여부\" font=\"bold 11px/normal &quot;Malgun Gothic&quot;\"/><Cell col=\"8\" disptype=\"normal\" text=\"3년전&#13;&#10;대상여부\" font=\"bold 11px/normal &quot;Malgun Gothic&quot;\"/><Cell col=\"9\" disptype=\"normal\" text=\"4년전&#13;&#10;대상여부\" font=\"bold 11px/normal &quot;Malgun Gothic&quot;\"/><Cell col=\"10\" disptype=\"normal\" text=\"5년전&#13;&#10;대상여부\" font=\"bold 11px/normal &quot;Malgun Gothic&quot;\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:IPSI_YYYY\" editmaxlength=\"4\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:GOGYO_CD\" editmaxlength=\"10\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:GOGYO_NM\" editmaxlength=\"100\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:HAKSAENGBU_JEGONG_YYYY\" editmaxlength=\"4\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:GIJUN_YYYY_DAESANG_YN\" editmaxlength=\"2\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:DAESANG_YN1\" editmaxlength=\"2\"/><Cell col=\"7\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:DAESANG_YN2\" editmaxlength=\"2\"/><Cell col=\"8\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:DAESANG_YN3\" editmaxlength=\"2\"/><Cell col=\"9\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:DAESANG_YN4\" editmaxlength=\"2\"/><Cell col=\"10\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:DAESANG_YN5\" editmaxlength=\"2\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","10","45",null,"42","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_01","436","0","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_02_00","475","10","70","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("고교명");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_01","532","0","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchGogyoCd","325","9","111","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_enable("true");
            obj.set_maxlength("166");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchGogyoNm","542","9","119","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_maxlength("166");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01","246","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("고교코드");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","88","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00","-4","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("입시년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01","14","0","620","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","14","31","620","9",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new Static("Static01_02_00","0","0","27","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00","315","0","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","78","0","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01","208","0","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01","11","37","1580","8",null,null,null,null,null,null,this);
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

            obj = new Static("stc_05","10","20","220","22",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_Title01");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("stc_39",null,"21","519","20","1030",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("※엑셀업로드 자료입력시 셀서식에서 속성을 일반으로 변경한 후, 입력하시기 바랍니다.");
            obj.set_cssclass("sta_WF_Desc02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","610","0","100","45",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("↑\r\n45\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,"11","10","741","0",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","1","10","741",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_01","0",null,"1640","10",null,"0",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","610","87","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01_00","11","114","320","8",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelUpload",null,"12","80","25","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("엑셀업로드");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("온라인대상교 관리");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item4","cboSearchSeunginSangtae00_00","value","ds_input","MOJIP_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.edtSearchGogyoCd","value","ds_input","GOGYO_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtPyeongGaBangbub01_01_00_00_00","value","ds_input","GOGYO_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.edtSearchGogyoNm","value","ds_input","GOGYO_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.spnSearchYYYY","value","ds_input","IPSI_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("EN01_1010106_T03.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): EN01_1010106_T03.xfdl(온라인대상교 관리)
        * 작 성         일 명: 성연우
        * 작 성         일 자: 2021/04/15
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
        this.lvchkColidDs   = "IPSI_YYY$GOGYO_CD";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs = "입시년도$고교코드";
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
            this.fn_GijunYyyy();
        };
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
                    case "GijunYyyy":
                            this.fn_PostGijunYyyy();
                        break;
                    case "Ret":
                            this.fn_PostRet();
                        break;
        			case "Confirm":
                            this.fn_PostConfirm();
                        break;
                    default:
                        break;
                }
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
            var strUrl      = "/prj/EN/EN01/Retrieve_1010106_T03.do";
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
                06. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj,e)
        {
            this.gfn_gridSort(obj,e);
        };

        this.btnExcelUpload_onclick = function(obj,e)
        {
        	// 고교코드관리 테이블에 해당 입시년도의 데이터가 있는지 확인
        	var strSvc      = "Confirm";
            var strUrl      = "/prj/EN/EN01/Retrieve_1010106_T03_Confirm.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsResult=dsResult";
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

        this.fn_PostConfirm = function()
        {
        	var cnt = this.dsResult.getColumn(0, "CNT");
        	if(cnt == 0)
        	{
        		this.alert("고교코드업로드를 먼저 해야합니다.");
        	}
        	else
        	{
        		if(this.gfn_confirm("검색조건의 입시년도를 기준으로 온라인 대상교를 업로드합니다.", "엑셀 업로드","","question"))
        		{
        			this.gfn_excelImportNsheet("dsExcelUpload","온라인대상교","","","excelUpload_succFunc","excelUpload_errorFunc",this);
        		}
        	}
        }

        /**********************************************************************
                07. 공통 함수
        ***********************************************************************/
        // 기준년도 조회
        this.fn_GijunYyyy = function()
        {
        	var strSvc      = "GijunYyyy";
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

        this.fn_PostGijunYyyy = function()
        {
        	this.ds_input.setColumn(0,"IPSI_YYYY", this.ds_gijunYyyy.getColumn(0, "YYYY"));
        }

        // 중복 데이터 조회
        this.fn_unique = function(params)
        {
            var uniqueCk = 0;
            var array = new Array();
            for(var i = 0 ; i < params.length; i++){
                for(var j = 0 ; j < array.length ; j++){
                    if(array[j] == params[i]){
                        uniqueCk = 1;
                        break;
                    }
                }
                array[array.length] = params[i];
            }
            return uniqueCk;
        };

        // 엑셀업로드 성공
        this.excelUpload_succFunc = function()
        {
        	this.dsExcelUpload.updateColID(0, "SIDO_GYOYUKCHEONG");		// 시도
        	this.dsExcelUpload.updateColID(1, "GOGYO_CD");				// 학교코드
        	this.dsExcelUpload.updateColID(2, "GOGYO_NM");				// 학교명
        	this.dsExcelUpload.updateColID(8, "GIJUN_YYYY_DAESANG_YN");	// 기준년도대상여부
        	this.dsExcelUpload.updateColID(9, "DAESANG_YN1");			// 제공년도1년전
        	this.dsExcelUpload.updateColID(10, "DAESANG_YN2");			// 제공년도2년전
        	this.dsExcelUpload.updateColID(11, "DAESANG_YN3");			// 제공년도3년전
        	this.dsExcelUpload.updateColID(12, "DAESANG_YN4");			// 제공년도4년전
        	this.dsExcelUpload.updateColID(13, "DAESANG_YN5");			// 제공년도5년전

         	this.dsExcelUpload.set_updatecontrol(false);
         	this.dsExcelUpload.set_enableevent(false);

         	for(var i = 0 ; this.dsExcelUpload.rowcount > i ; i++)
        	{
        		this.dsExcelUpload.setRowType(i, Dataset.ROWTYPE_INSERT);
        		this.dsExcelUpload.setColumn(i, "IPSI_YYYY", this.ds_input.getColumn(0, "IPSI_YYYY"));
         	}

        	this.dsExcelUpload.deleteRow(this.dsExcelUpload.rowcount-1);	// 마지막 행은 합계 제외

         	this.dsExcelUpload.set_updatecontrol(true);
         	this.dsExcelUpload.set_enableevent(true);

        	//중복 데이터 체크
        	var r = new Array();

        	for(var i = 0 ; i < this.dsExcelUpload.rowcount ; i++){
        		 var GOGYO_CD = this.dsExcelUpload.getColumn(i, "GOGYO_CD");
        		 r.push(GOGYO_CD);
        	}

        	if(this.fn_unique(r) == 0)
        	{
        		// 온라인대상교 MERGE - UPDATE OR INSERT
        		var strSvc      = "ExcelUpload";
        		var strUrl      = "/prj/ET/EN01/Upload_1010106_T03.do";
        		var strInDs     = "dsExcelUpload=dsExcelUpload:u";
        		var strOutDs    = "";
        		var strArg      = "";
        		var GBV_MENUID    = objApp.gv_cutPrgId;
        		if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
        		{
        			strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
        		}
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
        	else
        	{
        		this.alert("저장된 데이터가 존재합니다.");
        	}
        }

        // 엑셀업로드 실패
        this.excelUpload_errorFunc = function()
        {
        	this.alert("엑셀을 업로드하는데 실패하였습니다.");
        }

        /**********************************************************************
                08. 검색창 엔터키 조회
        ***********************************************************************/
        this.divSearch_spnSearchYYYY_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"IPSI_YYYY",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_edtSearchGogyoCd_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"GOGYO_CD",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_edtSearchGogyoNm_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"GOGYO_NM",obj.value);
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
            this.grdMaster.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
            this.divSearch.form.edtSearchGogyoCd.addEventHandler("onkeydown",this.divSearch_edtSearchGogyoCd_onkeydown,this);
            this.divSearch.form.edtSearchGogyoNm.addEventHandler("onkeydown",this.divSearch_edtSearchGogyoNm_onkeydown,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onkeydown",this.divSearch_spnSearchYYYY_onkeydown,this);
            this.stc_05.addEventHandler("onclick",this.stc_05_onclick,this);
            this.btnExcelUpload.addEventHandler("onclick",this.btnExcelUpload_onclick,this);
        };
        this.loadIncludeScript("EN01_1010106_T03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
