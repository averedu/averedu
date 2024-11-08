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
            this.set_titletext("성적처리팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMaster", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"HAKGI_NM\" type=\"STRING\" size=\"256\"/><Column id=\"YYYY_HAKGI\" type=\"STRING\" size=\"65532\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"DAEHAK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"SINCHEONG_GWAMOKSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHWIDEUK_GWAMOKSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SINCHEONG_HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHWIDEUK_HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PYEONGJEOMGYE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PYEONGJEOM_AVG\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEOMSUGYE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEOMSU_AVG\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYEONGGO_YN\" type=\"STRING\" size=\"1\"/><Column id=\"GYEONGGO_DT\" type=\"STRING\" size=\"8\"/><Column id=\"YUGEUP_YN\" type=\"STRING\" size=\"1\"/><Column id=\"YUGEUP_SAYU\" type=\"STRING\" size=\"100\"/><Column id=\"HAKGWA_INWONSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HAKGWA_SEOKCHA\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"INJEONG_YN\" type=\"STRING\" size=\"1\"/><Column id=\"HAKNYEON_INWONSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HAKNYEON_SEOKCHA\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BIGO\" type=\"STRING\" size=\"500\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"HAKBEON\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"HAKBEON\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetail", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"YYYY_HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"GYOGWAMOK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"GYOGWAMOK_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"BUNBAN\" type=\"STRING\" size=\"3\"/><Column id=\"ISU_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"ISU_GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DAMDANG_GYOSU_CD\" type=\"STRING\" size=\"10\"/><Column id=\"SUEOP_SIGAN\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYEOLSEOK_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHULSEOK_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GWAJE_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JUNGGAN_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GIMAL_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GITA_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHWIDEUK_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DEUNGGEUP\" type=\"STRING\" size=\"10\"/><Column id=\"PYEONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SUGANG_GUBUN\" type=\"STRING\" size=\"10\"/><Column id=\"SUGANG_GUBUN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JAESUGANG_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"JAESUGANG_HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"JAESUGANG_GYOGWAMOK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DAECHE_GWAJEONG_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"DAECHE_GWAJEONG_HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"DAECHE_GWAJEONG_HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"DAECHE_GWAJEONG_GWAMOK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"SEONGJEOK_INJEONG_YN\" type=\"STRING\" size=\"1\"/><Column id=\"SEONGJEOK_INJEONG_SAYU\" type=\"STRING\" size=\"1\"/><Column id=\"ISU_YN\" type=\"STRING\" size=\"1\"/><Column id=\"BYENDONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"BYENDONG_SEQ\" type=\"STRING\" size=\"10\"/><Column id=\"ORG_ISU_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"CHWISO_DT\" type=\"STRING\" size=\"8\"/><Column id=\"BIGO\" type=\"STRING\" size=\"500\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dInput", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"HAKBEON\" type=\"STRING\" size=\"256\"/><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YYYY\"/><Col id=\"HAKGI\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","10","10","1180","42",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01_02","-6","9","60","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("학번");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchDeptNm","64","9","207","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01","20","0","1060","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00","54","0","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","20","31","1060","9",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new Static("Static01_02_00_00_00","271","0","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Grid("grdMaster","10","97",null,null,"790","50",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"40\"/><Column size=\"45\"/><Column size=\"45\"/><Column size=\"50\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" text=\"학년도학기\"/><Cell col=\"3\" text=\"학년\"/><Cell col=\"4\" text=\"신청&#13;&#10;학점\"/><Cell col=\"5\" text=\"취득&#13;&#10;학점\"/><Cell col=\"6\" text=\"평점&#13;&#10;평균\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"2\" text=\"bind:YYYY_HAKGI\"/><Cell col=\"3\" text=\"bind:HAKNYEON\"/><Cell col=\"4\" text=\"bind:SINCHEONG_HAKJEOM\"/><Cell col=\"5\" text=\"bind:CHWIDEUK_HAKJEOM\"/><Cell col=\"6\" text=\"bind:PYEONGJEOM_AVG\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","10","72","135","22",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("학기별 성적 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stRowCnt","155","71","233","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","430","72","135","22",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("과목별 성적 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stRowCnt2","575","71","233","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdDetail","430","97",null,null,"10","50",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsDetail");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"40\"/><Column size=\"180\"/><Column size=\"60\"/><Column size=\"40\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"65\"/><Column size=\"70\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"학년도학기\"/><Cell col=\"2\" text=\"학년\"/><Cell col=\"3\" text=\"교과목명\"/><Cell col=\"4\" text=\"이수구분\"/><Cell col=\"5\" text=\"학점\"/><Cell col=\"6\" text=\"등급\"/><Cell col=\"7\" text=\"평점\"/><Cell col=\"8\" text=\"이수여부\"/><Cell col=\"9\" text=\"재수강여부\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:YYYY_HAKGI\"/><Cell col=\"2\" text=\"bind:HAKNYEON\"/><Cell col=\"3\" text=\"bind:GYOGWAMOK_NM\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:ISU_GBNM\"/><Cell col=\"5\" text=\"bind:HAKJEOM\"/><Cell col=\"6\" text=\"bind:DEUNGGEUP\"/><Cell col=\"7\" text=\"bind:PYEONGJEOM\"/><Cell col=\"8\" text=\"bind:ISU_YN\" displaytype=\"checkboxcontrol\"/><Cell col=\"9\" text=\"bind:SUGANG_GUBUN_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","710","52","100","45",null,null,null,null,null,null,this);
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

            obj = new Static("Static01_01_00_00","10","89","1180","8",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch","284","64","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel","349","64","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"60","25","10","10",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1200,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","divSearch.form.edtSearchDeptNm","value","ds_input","HAKBEON");
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
        this.registerScript("US02_2010203_P01.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): US02_2010203_P01.xfdl(성적처리팝업)
        * 작 성         일 명: jiback
        * 작 성         일 자: 2021/09/14
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

        	if( !this.gfn_isNull(this.getOwnerFrame().hakbeon)){
        		this.ds_input.setColumn(0, "HAKBEON", this.getOwnerFrame().hakbeon);
        	}

        	this.fn_Ret();
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
                    case "Ret":
                            this.fn_PostRet();
                        break;
        			case "DRet":
                            this.fn_PostDRet();
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
        	this.fn_Ret();
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_Ret = function()
        {
            var strSvc      = "Ret";
            var strUrl      = "/prj/US/US02/Retrieve_2010203_P01.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsMaster=dsMaster";
            var strArg      = "";
        	var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
              strArg = "GBV_MENUID=" + GBV_MENUID + " " + strArg;
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
            this.gfn_getRowCount(this.stRowCnt,this.dsMaster);
        };

        /**********************************************************************
                06. 조회 함수 선언(디테일 함수)
        ***********************************************************************/
        this.dsMaster_onrowposchanged = function(obj,e)
        {
        	this.ds_dInput.setColumn(0, "HAKBEON", this.dsMaster.getColumn(this.dsMaster.rowposition, "HAKBEON"));
        	this.ds_dInput.setColumn(0, "YYYY", this.dsMaster.getColumn(this.dsMaster.rowposition, "YYYY"));
        	this.ds_dInput.setColumn(0, "HAKGI", this.dsMaster.getColumn(this.dsMaster.rowposition, "HAKGI"));

        	this.fn_DRet();
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_DRet = function()
        {
            var strSvc      = "DRet";
            var strUrl      = "/prj/US/US02/Retrieve_2010203_P01_Detail.do";
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
        };

        /**
         * 기능 : 조회 후 실행
         */
        this.fn_PostDRet = function()
        {
            this.gfn_getRowCount(this.stRowCnt2,this.dsDetail);
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
            var result = this.gfn_confirm( "선택된 년도학기의 성적을 삭제하시겠습니까?", "삭제정보","","question" );

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

        /**
         * 기능 : Row 삭제 또는 Transaction 삭제 처리
         */
        this.fn_Del = function()
        {
            var strSvc      = "Del";
            var strUrl      = "/prj/US/US02/Delete_2010203_P01.do";
            var strInDs     = "dsMaster=dsMaster:u";
            var strOutDs    = "";
            var strArg      = "";
        	var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
              strArg = "GBV_MENUID=" + GBV_MENUID + " " + strArg;
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
        };

        this.fn_PostDel = function()
        {
            this.gfn_getRowCount(this.stRowCnt,this.dsMaster);
        	this.gfn_getRowCount(this.stRowCnt2,this.dsDetail);
        };

        /**********************************************************************
                07. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 체크
         */
        this.grdMaster_onheadclick = function(obj,e)
        {
            if(e.cell == this.grdMaster.getBindCellIndex("body","CHK"))
            {
                this.gfn_checkAll(obj, e);
            }
        };

        /**
         *      그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj,e)
        {
        	if(e.cell != this.grdHwaldong.getBindCellIndex("body","CHK"))
            {
                this.gfn_gridSort(obj,e);
            }
        };
        this.grdDetail_onheaddblclick = function(obj,e)
        {
        	this.gfn_gridSort(obj,e);
        };


        /**********************************************************************
                08. 팝업
        **********************************************************************/
        // 팝업 종료
        this.btnClose_onclick = function(obj,e)
        {
        	this.close("CLOSE");
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
            this.grdDetail.addEventHandler("onheaddblclick",this.grdDetail_onheaddblclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.btnDel.addEventHandler("onclick",this.btnDel_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.ds_input.addEventHandler("oncolumnchanged",this.ds_hwaldongInput_oncolumnchanged,this);
        };
        this.loadIncludeScript("US02_2010203_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
