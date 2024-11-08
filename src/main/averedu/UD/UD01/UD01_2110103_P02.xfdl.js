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
            this.set_titletext("단체변경이력");
            if (Form == this.constructor)
            {
                this._setFormPosition(900,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_input", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DANCHE_CD\" type=\"STRING\" size=\"32\"/><Column id=\"DANCHE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DANCHE_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"DANCHE_CD\" type=\"STRING\" size=\"10\"/><Column id=\"BYEONGYEONG_DT\" type=\"DATE\" size=\"8\"/><Column id=\"BYEONGYEONG_GBN\" type=\"STRING\" size=\"8\"/><Column id=\"DANCHE_NM\" type=\"STRING\" size=\"100\"/><Column id=\"SEOLRIB_DT\" type=\"DATE\" size=\"8\"/><Column id=\"DAEPYO_HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"DAEPYO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BU_DAEPYO_HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"BU_DAEPYO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DANCHE_GBCD\" type=\"STRING\" size=\"8\"/><Column id=\"DANCHE_GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"DANCHE_BUNRYU_GBCD\" type=\"STRING\" size=\"8\"/><Column id=\"DANCHE_BUNRYU_GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"SAHOE_BONGSA_YN\" type=\"STRING\" size=\"1\"/><Column id=\"JIDOGYOSU_CD\" type=\"STRING\" size=\"8\"/><Column id=\"JIDOGYOSU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HWALDONG_MOKJEOK\" type=\"STRING\" size=\"4000\"/><Column id=\"GWANLI_DEPT_CD\" type=\"STRING\" size=\"8\"/><Column id=\"GWANLI_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEUNGIN_DT\" type=\"DATE\" size=\"8\"/><Column id=\"SINSEOL_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"SINSEOL_HAKGI\" type=\"STRING\" size=\"8\"/><Column id=\"DANCHE_SANGTAE_GBCD\" type=\"STRING\" size=\"8\"/><Column id=\"SEOYAKSEO_JECHUL_YN\" type=\"STRING\" size=\"1\"/><Column id=\"MYEONGDAN_JECHUL_YN\" type=\"STRING\" size=\"1\"/><Column id=\"JIDOGYOSU_JECHUL_YN\" type=\"STRING\" size=\"1\"/><Column id=\"GYEHOEKSEO_JECHUL_YN\" type=\"STRING\" size=\"1\"/><Column id=\"SEOYAKSEO_FILE_NO\" type=\"STRING\" size=\"32\"/><Column id=\"MYEONGDANG_FILE_NO\" type=\"STRING\" size=\"32\"/><Column id=\"JIDOGYOSU_FILE_NO\" type=\"STRING\" size=\"32\"/><Column id=\"GYEHOEKSEO_FILE_NO\" type=\"STRING\" size=\"32\"/><Column id=\"DANCHE_SINCHEONG_NO\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYOYUK_GONGGAN_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"8\"/><Column id=\"DAMDANGJA_SAWON_NO\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DAMDANGJA_TEL_NO\" type=\"STRING\" size=\"16\"/><Column id=\"BIGO\" type=\"STRING\" size=\"4000\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdMaster","10","87",null,null,"10","50",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("dsMaster");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"82\"/><Column size=\"87\"/><Column size=\"91\"/><Column size=\"98\"/><Column size=\"97\"/><Column size=\"99\"/><Column size=\"107\"/><Column size=\"105\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"변경일자\"/><Cell col=\"1\" text=\"단체명\"/><Cell col=\"2\" text=\"지도교수\"/><Cell col=\"3\" text=\"대표학생\"/><Cell col=\"4\" text=\"부대표학생\"/><Cell col=\"5\" text=\"단체구분\"/><Cell col=\"6\" text=\"단체분류\"/><Cell col=\"7\" text=\"관리부서\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" edittype=\"none\" textAlign=\"center\" text=\"bind:BYEONGYEONG_DT\" editmaxlength=\"8\" calendardisplaynulltype=\"none\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:DANCHE_NM\" editmaxlength=\"10\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:JIDOGYOSU_NM\" editmaxlength=\"256\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:DAEPYO_NM\" editmaxlength=\"256\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:BU_DAEPYO_NM\" editmaxlength=\"256\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:DANCHE_GBNM\" editmaxlength=\"256\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:DANCHE_BUNRYU_GBNM\" editmaxlength=\"256\"/><Cell col=\"7\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:GWANLI_DEPT_NM\" editmaxlength=\"256\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","835","564","55","26",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_Pop");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch00","10","10","880","42",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","-11","9","76","22",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_text("단체명");
            obj.set_textAlign("right");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Edit("edtSearchDancheNm","189","9","509","22",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            obj.set_enable("false");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Edit("edtSearchDancheCd","80","9","99","22",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("0");
            obj.set_autoselect("true");
            obj.set_enable("false");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Button("btnExcel","745","8","60","25",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("2");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_Crud");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Button("btnSearch","810","8","60","25",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("3");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Crud");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","40",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("5");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_01","20","0","610","9",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("6");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00","70","0","10","40",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","20","31","610","9",null,null,null,null,null,null,this.divSearch00.form);
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

            obj = new Static("Static01_02_00_00_00","179","0","10","40",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("stc_09_00","10","62","140","22",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("단체변경이력목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stRowCnt","150","61","233","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","247","52","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","10","79","850","8",null,null,null,null,null,null,this);
            obj.set_taborder("6");
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
            obj = new Layout("default","",900,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_description("단체변경이력");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch00.form.edtSearchDancheNm","value","ds_input","DANCHE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch00.form.edtSearchDancheCd","value","ds_input","DANCHE_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("UD01_2110103_P02.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UD01_2110103_P02.xfdl(단체변경이력)
        * 작 성         일 명: jiback
        * 작 성         일 자: 2020/12/02
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

        	if( !this.gfn_isNull(this.getOwnerFrame().dancheCd))
        	{
        		this.ds_input.setColumn(0, "DANCHE_CD", this.getOwnerFrame().dancheCd);
        		this.ds_input.setColumn(0, "DANCHE_NM", this.getOwnerFrame().dancheNm);
        	}

            if(this.ds_input.getColumn(0,"DANCHE_CD") == null){
        		return false;
        	}
        	else
        	{
                this.fn_Ret();
        	};
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
                    case "Ret":
                            this.fn_PostRet();
                        break;
                    default:
                        break;
                }
            }
        };

        /**********************************************************************
                05. 조회 함수 선언(마스터 함수)
        ***********************************************************************/
        this.btnSearch_onclick = function(obj,e)
        {
            if(this.ds_input.getColumn(0,"DANCHE_CD") == null){
                this.gfn_alert("검색조건에 단체코드 값이 존재하지 않습니다.", "검색조건 정보" ,"","information");
                return false;
        	}else{
                this.fn_Ret();
        	};
        };
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
            var strUrl      = "/prj/UD/UD01/Retrieve_2110103_P02.do";
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
        this.fn_PostRet = function()
        {
            this.gfn_getRowCount(this.stRowCnt,this.dsMaster);
        };

        /**********************************************************************
                06. ExcelDnwn 엑셀로 출력
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
            this.gfn_excelExport(this.grdMaster, "단체 변경이력 목록","단체 변경이력 목록");

        };

        /**********************************************************************
                07. 기타 Control Event
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

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
            //return this.gfn_isUpdate(this.dsMaster);
        };

        this.btnClose_onclick = function(obj,e)
        {
        	this.close("CLOSE");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster.addEventHandler("oncelldblclick",this.grdMaster_oncelldblclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.divSearch00.form.edtSearchDancheNm.addEventHandler("onkeyup",this.divSearch_edtStoreCd_onkeyup,this);
            this.divSearch00.form.edtSearchDancheNm.addEventHandler("oninput",this.divSearch_edtStoreCd_oninput,this);
            this.divSearch00.form.edtSearchDancheCd.addEventHandler("onkeyup",this.divSearch_edtStoreCd_onkeyup,this);
            this.divSearch00.form.edtSearchDancheCd.addEventHandler("oninput",this.divSearch_edtStoreCd_oninput,this);
            this.divSearch00.form.btnExcel.addEventHandler("onclick",this.btnExcel_onclick,this);
            this.divSearch00.form.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.dsMaster.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
        };
        this.loadIncludeScript("UD01_2110103_P02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
