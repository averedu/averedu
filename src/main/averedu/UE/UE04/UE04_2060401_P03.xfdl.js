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
            this.set_titletext("전체수석목록");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMaster", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JUYA_GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"JEONHYEONG_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONHYEONG_GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"SEBUJEONHYEONG_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"SEBUJEONHYEONG_GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"JEONHYEONGBYEOL_SEOKCHA\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SUHEOMSAENG_NM\" type=\"STRING\" size=\"40\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"JEONCHE_SEOKCHA\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHONGDEUNGGEUP\" type=\"STRING\" size=\"10\"/><Column id=\"TERM1_KOR_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TERM1_ENG_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TERM2_KOR_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TERM2_ENG_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TERM3_KOR_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TERM3_ENG_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GEOMJEONGGOSI_BAEKBUNYUL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"AVG_PYEONGJEOM_BAEKBUNYUL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"MYEONJEOP_SILGI_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HAPGYEOK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"IPHAK_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SUEOP_AMT\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"100\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgwa", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMojip", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnClose","730",null,"60","25",null,"10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("staTree","10","10","160","22",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("전체 수석 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","0","27",null,"8","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","200","0","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","10","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,"35","10",null,"0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_01","0",null,null,"10","0","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","10","35",null,null,"10","49",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("dsMaster");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"90\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"130\"/><Column size=\"40\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"60\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"입시년도\" textAlign=\"center\"/><Cell col=\"1\" rowspan=\"2\" text=\"모집구분\" textAlign=\"center\"/><Cell col=\"2\" rowspan=\"2\" text=\"수험번호\" textAlign=\"center\"/><Cell col=\"3\" rowspan=\"2\" text=\"수험생명\" textAlign=\"center\"/><Cell col=\"4\" rowspan=\"2\" textAlign=\"center\" text=\"전체&#13;&#10;석차\"/><Cell col=\"5\" rowspan=\"2\" text=\"학과\" textAlign=\"center\"/><Cell col=\"6\" rowspan=\"2\" text=\"주야&#13;&#10;구분\" textAlign=\"center\"/><Cell col=\"7\" rowspan=\"2\" text=\"전형구분\" textAlign=\"center\"/><Cell col=\"8\" rowspan=\"2\" text=\"세부전형구분\" textAlign=\"center\"/><Cell col=\"9\" rowspan=\"2\" text=\"총점\" textAlign=\"center\"/><Cell col=\"10\" rowspan=\"2\" text=\"총등급\" textAlign=\"center\"/><Cell col=\"11\" colspan=\"2\" text=\"1학년\" textAlign=\"center\"/><Cell col=\"13\" colspan=\"2\" text=\"2학년\" textAlign=\"center\"/><Cell col=\"15\" colspan=\"2\" text=\"3학년\" textAlign=\"center\"/><Cell col=\"17\" rowspan=\"2\" text=\"검정고시&#13;&#10;백분율\" textAlign=\"center\"/><Cell col=\"18\" rowspan=\"2\" text=\"대학성적&#13;&#10;백분율\" textAlign=\"center\"/><Cell col=\"19\" rowspan=\"2\" textAlign=\"center\" text=\"면접/실기&#13;&#10;점수\"/><Cell row=\"1\" col=\"11\" textAlign=\"center\" text=\"국어 점수\"/><Cell row=\"1\" col=\"12\" textAlign=\"center\" text=\"영어 점수\"/><Cell row=\"1\" col=\"13\" textAlign=\"center\" text=\"국어 점수\"/><Cell row=\"1\" col=\"14\" textAlign=\"center\" text=\"영어 점수\"/><Cell row=\"1\" col=\"15\" textAlign=\"center\" text=\"국어 점수\"/><Cell row=\"1\" col=\"16\" textAlign=\"center\" text=\"영어 점수\"/></Band><Band id=\"body\"><Cell text=\"bind:IPSI_YYYY\"/><Cell col=\"1\" text=\"bind:MOJIP_GBCD\" displaytype=\"combotext\" combodataset=\"dsMojip\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"2\" text=\"bind:SUHEOM_NO\"/><Cell col=\"3\" text=\"bind:SUHEOMSAENG_NM\"/><Cell col=\"4\" text=\"bind:JEONCHE_SEOKCHA\"/><Cell col=\"5\" text=\"bind:HAKGWA_CD\" displaytype=\"combotext\" combodataset=\"dsHakgwa\" combodatacol=\"DEPT_NM\" combocodecol=\"DEPT_CD\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:JUYA_GBNM\"/><Cell col=\"7\" text=\"bind:JEONHYEONG_GBNM\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:SEBUJEONHYEONG_GBNM\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:CHONGJEOM\"/><Cell col=\"10\" text=\"bind:CHONGDEUNGGEUP\"/><Cell col=\"11\" text=\"bind:TERM1_KOR_JEOMSU\"/><Cell col=\"12\" text=\"bind:TERM1_ENG_JEOMSU\"/><Cell col=\"13\" text=\"bind:TERM2_KOR_JEOMSU\"/><Cell col=\"14\" text=\"bind:TERM2_ENG_JEOMSU\"/><Cell col=\"15\" text=\"bind:TERM3_KOR_JEOMSU\"/><Cell col=\"16\" text=\"bind:TERM3_ENG_JEOMSU\"/><Cell col=\"17\" text=\"bind:GEOMJEONGGOSI_BAEKBUNYUL\"/><Cell col=\"18\" text=\"bind:AVG_PYEONGJEOM_BAEKBUNYUL\"/><Cell col=\"19\" text=\"bind:MYEONJEOP_SILGI_JEOMSU\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,400,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_description("전체수석목록");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("UE04_2060401_P03.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UE04_2020401_P03.xfdl(전체수석목록)
        * 작 성         일 명: jiback
        * 작 성         일 자: 2022/08/10
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
        	this.dsHakgwa.copyData(this.getOwnerFrame().dsHakgwa)
        	this.dsMojip.copyData(this.getOwnerFrame().dsMojip)
        	this.ds_input.setColumn(0, "IPSI_YYYY", this.getOwnerFrame().ipsiYyyy);
        	this.fn_Ret();
        };

        /**********************************************************************
                05. 조회 함수 선언(마스터 함수)
        ***********************************************************************/
        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_Ret = function()
        {
            var strSvc      = "Ret";
            var strUrl      = "/prj/UE/UE04/Retrieve_2060401_P03.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsMaster=dsMaster";
            var strArg      = "";
            var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);
        };

        /**********************************************************************
                06. 기타 Control Event
        ***********************************************************************/
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
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.grdMaster.addEventHandler("oncelldblclick",this.divJeoncheSuseok_Grid00_oncelldblclick,this);
        };
        this.loadIncludeScript("UE04_2060401_P03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
