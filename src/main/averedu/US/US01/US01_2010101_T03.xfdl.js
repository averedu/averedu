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
            this.set_titletext("학적변동");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsByeondong", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"BYEONDONG_SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"BYEONDONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"BYEONDONG_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"BYEONDONG_SANGSE_CD\" type=\"STRING\" size=\"10\"/><Column id=\"BYEONDONG_SANGSE_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"BYEONDONG_SANGSESAYU_CD\" type=\"STRING\" size=\"10\"/><Column id=\"BYEONDONG_SANGSESAYU_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"BYEONDONG_SANGSE_NAEYONG\" type=\"STRING\" size=\"1000\"/><Column id=\"HAKJEOK_STCD\" type=\"STRING\" size=\"65532\"/><Column id=\"JEOPSU_DT\" type=\"STRING\" size=\"8\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"YYYY_HAKGI\" type=\"STRING\" size=\"65532\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"HAKNYEONJE_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"IPHAK_TYCD\" type=\"STRING\" size=\"3\"/><Column id=\"HYUHAK_GIGAN\" type=\"STRING\" size=\"2\"/><Column id=\"DELETE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"CHWISO_YN\" type=\"STRING\" size=\"1\"/><Column id=\"HAKNYEON_JINGEUP_YN\" type=\"STRING\" size=\"1\"/><Column id=\"GYOSU_CD\" type=\"STRING\" size=\"10\"/><Column id=\"SANGDAM_NO\" type=\"STRING\" size=\"10\"/><Column id=\"GYOSU_SEUNGIN_YN\" type=\"STRING\" size=\"1\"/><Column id=\"AFT_HAKGWA_GYOSU_CD\" type=\"STRING\" size=\"10\"/><Column id=\"AFT_HAKGWA_SANGDAM_NO\" type=\"STRING\" size=\"10\"/><Column id=\"JINHAENG_STCD\" type=\"STRING\" size=\"3\"/><Column id=\"SEUNGINJA_ID\" type=\"STRING\" size=\"30\"/><Column id=\"BYEONDONG_DT\" type=\"STRING\" size=\"8\"/><Column id=\"SEUNGIN_DT\" type=\"STRING\" size=\"8\"/><Column id=\"BANRYEO_SAYU\" type=\"STRING\" size=\"500\"/><Column id=\"IPDAE_DT\" type=\"STRING\" size=\"8\"/><Column id=\"JEONYEOK_DT\" type=\"STRING\" size=\"8\"/><Column id=\"SEONGJEOK_INJEONG_YN\" type=\"STRING\" size=\"1\"/><Column id=\"DEUNGROK_INJEONG_YN\" type=\"STRING\" size=\"1\"/><Column id=\"BOKHAK_YEJEONG_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"BOKHAK_YEJEONG_HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"BOKHAK_YEJEONG_YYYY_HAKGI\" type=\"STRING\" size=\"65532\"/><Column id=\"BOKHAK_YEJEONG_HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"BOKHAK_YEJEONG_DT\" type=\"STRING\" size=\"8\"/><Column id=\"CHOEJONG_DEUNGROK_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"CHOEJONG_DEUNGROK_HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"BOKHAK_YN\" type=\"STRING\" size=\"1\"/><Column id=\"BOKHAK_DT\" type=\"STRING\" size=\"8\"/><Column id=\"BOKHAK_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"BOKHAK_HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"JAEHYUHAK_YN\" type=\"STRING\" size=\"1\"/><Column id=\"BEF_GYEYEOL_CD\" type=\"STRING\" size=\"10\"/><Column id=\"BEF_HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"BEF_JEONGONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"BEF_HAKGWA_JEONGONG\" type=\"STRING\" size=\"65532\"/><Column id=\"BEF_HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"BEF_JUYA_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"AFT_GYEYEOL_CD\" type=\"STRING\" size=\"10\"/><Column id=\"AFT_HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"AFT_JEONGONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"AFT_HAKGWA_JEONGONG\" type=\"STRING\" size=\"65532\"/><Column id=\"AFT_HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"AFT_JUYA_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"JEONJEOK_DAEHAK_CD\" type=\"STRING\" size=\"4\"/><Column id=\"JEONJEOK_DAEHAK_NM\" type=\"STRING\" size=\"300\"/><Column id=\"JEONJEOK_HAKGWA_NM\" type=\"STRING\" size=\"100\"/><Column id=\"JEONJEOK_JEONGONG_NM\" type=\"STRING\" size=\"100\"/><Column id=\"BIGO\" type=\"STRING\" size=\"1000\"/></ColumnInfo>");
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


            obj = new Dataset("dsHakjeokSangtae", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJeongjeong", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"JEONGJEONG_DT\" type=\"STRING\" size=\"8\"/><Column id=\"JEONGJEONG_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"JEONGJEONG_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"JEONGJEONG_BEF_NAEYONG\" type=\"STRING\" size=\"65532\"/><Column id=\"JEONGJEONG_AFT_NAEYONG\" type=\"STRING\" size=\"65532\"/><Column id=\"JEONDAL_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"CHEORI_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"CHEORI_DT\" type=\"STRING\" size=\"8\"/><Column id=\"BIGO\" type=\"STRING\" size=\"500\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdHakjeokByeondong","10","35",null,"165","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("none");
            obj.set_cellclickbound("control");
            obj.set_binddataset("dsByeondong");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"98\"/><Column size=\"87\"/><Column size=\"64\"/><Column size=\"77\"/><Column size=\"84\"/><Column size=\"347\"/><Column size=\"121\"/><Column size=\"117\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"92\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"normal\" edittype=\"checkbox\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"학년도/학기\"/><Cell col=\"2\" rowspan=\"2\" text=\"변동일자\"/><Cell col=\"3\" rowspan=\"2\" text=\"학적상태\"/><Cell col=\"4\" rowspan=\"2\" text=\"변동구분\"/><Cell col=\"5\" rowspan=\"2\" text=\"변동상세구분\"/><Cell col=\"6\" rowspan=\"2\" text=\"상세내용\"/><Cell col=\"7\" rowspan=\"2\" text=\"이전학과(전공)\"/><Cell col=\"8\" rowspan=\"2\" text=\"전과학과(전공)\"/><Cell col=\"9\" colspan=\"2\" text=\"복학예정\"/><Cell col=\"11\" rowspan=\"2\" text=\"입대일자\"/><Cell row=\"1\" col=\"9\" text=\"학년도/학기\"/><Cell row=\"1\" col=\"10\" text=\"일자\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:YYYY_HAKGI\" editmaxlength=\"256\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"none\" textAlign=\"center\" text=\"bind:BYEONDONG_DT\" editmaxlength=\"8\"/><Cell col=\"3\" displaytype=\"combotext\" edittype=\"none\" textAlign=\"center\" text=\"bind:HAKJEOK_STCD\" editmaxlength=\"256\" combodataset=\"dsHakjeokSangtae\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:BYEONDONG_NM\" editmaxlength=\"10\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:BYEONDONG_SANGSE_NM\" editmaxlength=\"10\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\" text=\"bind:BYEONDONG_SANGSE_NAEYONG\" editmaxlength=\"1000\"/><Cell col=\"7\" displaytype=\"combotext\" edittype=\"none\" textAlign=\"center\" text=\"bind:BEF_HAKGWA_JEONGONG\" editmaxlength=\"10\"/><Cell col=\"8\" displaytype=\"combotext\" edittype=\"none\" textAlign=\"center\" text=\"bind:AFT_HAKGWA_JEONGONG\" editmaxlength=\"10\"/><Cell col=\"9\" displaytype=\"combotext\" edittype=\"none\" textAlign=\"center\" text=\"bind:BOKHAK_YEJEONG_YYYY_HAKGI\" editmaxlength=\"256\"/><Cell col=\"10\" displaytype=\"date\" edittype=\"none\" textAlign=\"center\" text=\"bind:BOKHAK_YEJEONG_DT\" editmaxlength=\"8\" calendardisplaynulltype=\"none\"/><Cell col=\"11\" displaytype=\"date\" edittype=\"none\" textAlign=\"center\" text=\"bind:IPDAE_DT\" editmaxlength=\"8\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09","7","11","330","22",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("학적변동내역");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Grid("grdHakjeokbuJeongjeong","10","235",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("none");
            obj.set_cellclickbound("control");
            obj.set_binddataset("dsJeongjeong");
            obj.set_autosizingtype("row");
            obj.set_extendsizetype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"98\"/><Column size=\"107\"/><Column size=\"484\"/><Column size=\"484\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"checkbox\" text=\"No\"/><Cell col=\"1\" text=\"정정일자\"/><Cell col=\"2\" text=\"정정구분\"/><Cell col=\"3\" text=\"변경전내용\"/><Cell col=\"4\" text=\"변경후내용\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" displaytype=\"date\" edittype=\"none\" textAlign=\"left\" text=\"bind:JEONGJEONG_DT\" editmaxlength=\"8\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\" text=\"bind:JEONGJEONG_GBCD\" editmaxlength=\"3\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\" text=\"bind:JEONGJEONG_BEF_NAEYONG\" editmaxlength=\"256\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\" text=\"bind:JEONGJEONG_AFT_NAEYONG\" editmaxlength=\"256\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","7","210","138","22",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("학적부정정내역");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","122","10","233","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt2","138","208","77","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","-1","10","427",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,"-11","10","437","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","5","436",null,null,"404","364",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","733","0","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","734","200","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","15","28","320","8",null,null,null,null,null,null,this);
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

            obj = new Static("Static01_01_00_00_00_00_00_00_00","15","227","320","8",null,null,null,null,null,null,this);
            obj.set_taborder("12");
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
            obj.set_description("학적변동");
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
            this._addPreloadList("data","","dsByeondong");
            this._addPreloadList("data","","dsJeongjeong");
        };
        
        // User Script
        this.registerScript("US01_2010101_T03.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): US01_2010101_T03.xfdl(학적기본관리 관리(조회))
        * 작 성         일 명: jiback
        * 작 성         일 자: 2021/09/02
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
            var strDs    = "dsHakjeokSangtae";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "000035";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
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
        };

        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {
        	this.gfn_clearSortAll(this.grdHakjeokByeondong);
            this.gfn_clearSortAll(this.grdHakjeokbuJeongjeong);
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
        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_Ret = function(hakbeon)
        {
        	this.ds_input.setColumn(0, "HAKBEON", hakbeon);

            var strSvc      = "Ret";
            var strUrl      = "/prj/US/US01/Retrieve_2010101_T03.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsByeondong=dsByeondong ";
        	    strOutDs   += "dsJeongjeong=dsJeongjeong ";
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
        this.fn_PostRet = function()
        {
            this.gfn_getRowCount(this.staRowCnt,this.dsByeondong);
        	this.gfn_getRowCount(this.staRowCnt2,this.dsJeongjeong);
        };

        /**********************************************************************
                06. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 소트정열
         */
        this.grdHakjeokByeongdong_onheaddblclick = function(obj,e)
        {
        	this.gfn_gridSort(obj,e);
        };
        this.grdHakjeokbuJeongjeong_onheaddblclick = function(obj,e)
        {
        	this.gfn_gridSort(obj,e);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.grdHakjeokByeondong.addEventHandler("onheaddblclick",this.grdHakjeokByeongdong_onheaddblclick,this);
            this.grdHakjeokbuJeongjeong.addEventHandler("onheaddblclick",this.grdHakjeokbuJeongjeong_onheaddblclick,this);
        };
        this.loadIncludeScript("US01_2010101_T03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
