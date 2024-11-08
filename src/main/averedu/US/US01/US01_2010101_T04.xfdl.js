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
            this.set_titletext("등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsNapbu", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DEUNGROK_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"10\"/><Column id=\"YYYY_HAKGI\" type=\"STRING\" size=\"65532\"/><Column id=\"HAKNYEON_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"NAPBU_DT\" type=\"STRING\" size=\"8\"/><Column id=\"IPHAK\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SUEOP\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SUHYE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HAKHOE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"ELBEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JANGHAK_GEUMAEK\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SILNAPBU_GEUMAEK\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
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


            obj = new Dataset("dsHwanbul", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DEUNGROK_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"10\"/><Column id=\"YYYY_HAKGI\" type=\"STRING\" size=\"65532\"/><Column id=\"HWANBUL_DT\" type=\"STRING\" size=\"8\"/><Column id=\"GEUMAEK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"GEUMAEK_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"HWANBUL_SAYU_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"HWANBUL_SAYU_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"HWANBUL_GIJUN_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"HWANBUL_GIJUN_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"HWANBUL_GEUMAEK\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GONGJE_GEUMAEK\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HWANBUL_GYEJWA_NO\" type=\"STRING\" size=\"30\"/><Column id=\"HWANBUL_YEGEUMJU\" type=\"STRING\" size=\"40\"/><Column id=\"BIGO\" type=\"STRING\" size=\"500\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdDeungrokgeumNapbu","10","35",null,"165","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("dsNapbu");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"98\"/><Column size=\"56\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"checkbox\" text=\"No\"/><Cell col=\"1\" text=\"학년도/학기\"/><Cell col=\"2\" text=\"학년\"/><Cell col=\"3\" text=\"등록일자\"/><Cell col=\"4\" text=\"입학금\"/><Cell col=\"5\" text=\"수업료\"/><Cell col=\"6\" text=\"수혜경비\"/><Cell col=\"7\" text=\"학생회비\"/><Cell col=\"8\" text=\"졸업앨범비\"/><Cell col=\"9\" text=\"장학금\"/><Cell col=\"10\" text=\"실납부금\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:YYYY_HAKGI\" editmaxlength=\"256\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:HAKNYEON_GBCD\" editmaxlength=\"10\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"none\" textAlign=\"center\" text=\"bind:NAPBU_DT\" editmaxlength=\"256\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"none\" textAlign=\"right\" text=\"bind:IPHAK\" editmaxlength=\"256\" maskeditformat=\"#,###,###\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"none\" textAlign=\"right\" text=\"bind:SUEOP\" editmaxlength=\"256\" maskeditformat=\"#,###,###\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"none\" textAlign=\"right\" text=\"bind:SUHYE\" editmaxlength=\"256\" maskeditformat=\"#,###,###\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"none\" textAlign=\"right\" text=\"bind:HAKHOE\" editmaxlength=\"256\" maskeditformat=\"#,###,###\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"none\" textAlign=\"right\" text=\"bind:ELBEOM\" editmaxlength=\"256\" maskeditformat=\"#,###,###\"/><Cell col=\"9\" displaytype=\"number\" edittype=\"none\" textAlign=\"right\" text=\"bind:JANGHAK_GEUMAEK\" editmaxlength=\"256\" maskeditformat=\"#,###,###\"/><Cell col=\"10\" displaytype=\"number\" edittype=\"none\" textAlign=\"right\" text=\"bind:SILNAPBU_GEUMAEK\" editmaxlength=\"256\" maskeditformat=\"#,###,###\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09","7","11","330","22",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("등록금납부내역");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Grid("grdDeungrokgeumHwanbul","10","235",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("dsHwanbul");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"98\"/><Column size=\"107\"/><Column size=\"90\"/><Column size=\"75\"/><Column size=\"95\"/><Column size=\"95\"/><Column size=\"95\"/><Column size=\"95\"/><Column size=\"95\"/><Column size=\"95\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"checkbox\" text=\"No\"/><Cell col=\"1\" text=\"학년도/학기\"/><Cell col=\"2\" text=\"환불일자\"/><Cell col=\"3\" text=\"환불구분\"/><Cell col=\"4\" text=\"환불사유\"/><Cell col=\"5\" text=\"환불기준구분\"/><Cell col=\"6\" text=\"공제액\"/><Cell col=\"7\" text=\"환불액\"/><Cell col=\"8\" text=\"계좌번호\"/><Cell col=\"9\" text=\"예금주\"/><Cell col=\"10\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:YYYY_HAKGI\" editmaxlength=\"256\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"none\" textAlign=\"center\" text=\"bind:HWANBUL_DT\" editmaxlength=\"8\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:GEUMAEK_GBNM\" editmaxlength=\"256\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:HWANBUL_SAYU_GBNM\" editmaxlength=\"256\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:HWANBUL_GIJUN_GBNM\" editmaxlength=\"256\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"none\" textAlign=\"right\" text=\"bind:GONGJE_GEUMAEK\" editmaxlength=\"256\" maskeditformat=\"#,###,###\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"none\" textAlign=\"right\" text=\"bind:HWANBUL_GEUMAEK\" editmaxlength=\"256\" maskeditformat=\"#,###,###\"/><Cell col=\"8\" displaytype=\"normal\" edittype=\"none\" textAlign=\"right\" text=\"bind:HWANBUL_GYEJWA_NO\" editmaxlength=\"256\"/><Cell col=\"9\" displaytype=\"normal\" edittype=\"none\" textAlign=\"right\" text=\"bind:HWANBUL_YEGEUMJU\" editmaxlength=\"256\"/><Cell col=\"10\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:BIGO\" editmaxlength=\"256\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","7","210","131","22",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("등록금환불내역");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","134","10","233","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt2","134","209","74","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","-1","10","477",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","733","0","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,"0","10","487","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","5","536",null,null,"404","264",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
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
            obj.set_description("등록");
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
            this._addPreloadList("data","","dsNapbu");
            this._addPreloadList("data","","dsHwanbul");
        };
        
        // User Script
        this.registerScript("US01_2010101_T04.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): US01_2010101_T04.xfdl(등록 납부 관리(재학) 관리(조회))
        * 작 성         일 명: jiback
        * 작 성         일 자: 2021/09/06
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
        };

        /**********************************************************************
                04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {

            this.gfn_clearSortAll(this.grdDeungrokgeumNapbu);
        	this.gfn_clearSortAll(this.grdDeungrokgeumHwanbul);
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
            var strUrl      = "/prj/US/US01/Retrieve_2010101_T04.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsNapbu=dsNapbu ";
        	    strOutDs   += "dsHwanbul=dsHwanbul ";
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
            this.gfn_getRowCount(this.staRowCnt,this.dsNapbu);
        	this.gfn_getRowCount(this.staRowCnt2,this.dsHwanbul);
        };

        /**********************************************************************
                06. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 소트정열
         */
        this.grdDeungrokgeumNapbu_onheaddblclick = function(obj,e)
        {
        	this.gfn_gridSort(obj,e);
        };

        this.grdDeungrokgeumHwanbul_onheaddblclick = function(obj,e)
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
            this.grdDeungrokgeumNapbu.addEventHandler("onheaddblclick",this.grdDeungrokgeumNapbu_onheaddblclick,this);
            this.grdDeungrokgeumHwanbul.addEventHandler("onheaddblclick",this.grdDeungrokgeumHwanbul_onheaddblclick,this);
        };
        this.loadIncludeScript("US01_2010101_T04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
