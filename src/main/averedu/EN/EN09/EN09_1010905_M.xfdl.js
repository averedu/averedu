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
            this.set_titletext("신입생지원현황자료");
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
            obj._setContents("<ColumnInfo><Column id=\"HAKGYO_CD\" type=\"STRING\" size=\"8\"/><Column id=\"JOSA_GIGAN_CD\" type=\"STRING\" size=\"6\"/><Column id=\"BONBUNGYO_CD\" type=\"STRING\" size=\"1\"/><Column id=\"HAKJE_GBCD\" type=\"STRING\" size=\"1\"/><Column id=\"SANGSE_HAKJE_GBCD\" type=\"STRING\" size=\"1\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"20\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"100\"/><Column id=\"DANGWA_DAEHAK_CD\" type=\"STRING\" size=\"3\"/><Column id=\"DANGWA_DAEHAK_NM\" type=\"STRING\" size=\"21\"/><Column id=\"GYOYUKBU_GYEYEOL_CD\" type=\"STRING\" size=\"19\"/><Column id=\"HAKWI_GWAJEONG_CD\" type=\"STRING\" size=\"1\"/><Column id=\"SUEOP_NYEONHAN_CD\" type=\"STRING\" size=\"2\"/><Column id=\"HAKGWA_TEUKSEONG_CD\" type=\"STRING\" size=\"2\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"1\"/><Column id=\"G1_STATUS_APPLI_1\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"G1_STATUS_APPLI_2\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"G1_STATUS_APPLI_3\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"G1_STATUS_APPLI_4\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"G1_STATUS_APPLI_10\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"G1_IN_APPLI_1\" type=\"STRING\" size=\"13\"/><Column id=\"G1_IN_APPLI_2\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"G1_OUT_APPLI_1\" type=\"STRING\" size=\"14\"/><Column id=\"G1_OUT_APPLI_2\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"G1_OUT_APPLI_3\" type=\"STRING\" size=\"14\"/><Column id=\"G1_OUT_APPLI_4\" type=\"STRING\" size=\"14\"/><Column id=\"G1_OUT_APPLI_5\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"G1_OUT_APPLI_6\" type=\"STRING\" size=\"14\"/><Column id=\"G1_OUT_APPLI_7\" type=\"STRING\" size=\"14\"/><Column id=\"G1_OUT_APPLI_8\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"G1_OUT_APPLI_9\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"G1_OUT_APPLI_10\" type=\"STRING\" size=\"15\"/><Column id=\"G1_OUT_APPLI_11\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"G1_OUT_APPLI_12\" type=\"STRING\" size=\"15\"/><Column id=\"G2_STATUS_APPLI_1\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"G2_STATUS_APPLI_2\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"G2_STATUS_APPLI_3\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"G2_STATUS_APPLI_4\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"G2_STATUS_APPLI_10\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"G2_IN_APPLI_1\" type=\"STRING\" size=\"13\"/><Column id=\"G2_IN_APPLI_2\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"G2_OUT_APPLI_1\" type=\"STRING\" size=\"14\"/><Column id=\"G2_OUT_APPLI_2\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"G2_OUT_APPLI_3\" type=\"STRING\" size=\"14\"/><Column id=\"G2_OUT_APPLI_4\" type=\"STRING\" size=\"14\"/><Column id=\"G2_OUT_APPLI_5\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"G2_OUT_APPLI_6\" type=\"STRING\" size=\"14\"/><Column id=\"G2_OUT_APPLI_7\" type=\"STRING\" size=\"14\"/><Column id=\"G2_OUT_APPLI_8\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"G2_OUT_APPLI_9\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"G2_OUT_APPLI_10\" type=\"STRING\" size=\"15\"/><Column id=\"G2_OUT_APPLI_11\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"G2_OUT_APPLI_12\" type=\"STRING\" size=\"15\"/><Column id=\"HAKGWA_INWON_CNT\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gijunYyyy", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","500","42","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","0","52",null,"22","1485",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("학과별 입학자현황");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","147","51",null,"24","1370",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","69","330","8",null,null,null,null,null,null,this);
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

            obj = new Div("divSearch","0","0",null,"42","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","16","0","1620","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","20","31","1610","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00","7","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("입시년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","100","9","124","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_cssclass("point");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","90","0","10","37",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Grid("grdMaster","0","77",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsMaster");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"학교코드\"/><Cell col=\"1\" text=\"조사기간코드\"/><Cell col=\"2\" text=\"본분교코드\"/><Cell col=\"3\" text=\"학제구분코드\"/><Cell col=\"4\" text=\"상세학제구분코드\"/><Cell col=\"5\" text=\"학과코드\"/><Cell col=\"6\" text=\"학과명\"/><Cell col=\"7\" text=\"단과대학코드\"/><Cell col=\"8\" text=\"단과대학명\"/><Cell col=\"9\" text=\"교육부5대계열코드\"/><Cell col=\"10\" text=\"학위과정코드\"/><Cell col=\"11\" text=\"수업연한코드\"/><Cell col=\"12\" text=\"학과특성코드\"/><Cell col=\"13\" text=\"주야구분코드\"/><Cell col=\"14\" text=\"고교졸업상황_지원자_&#13;&#10;당해졸업_남\"/><Cell col=\"15\" text=\"고교졸업상황_지원자_&#13;&#10;재수자_남\"/><Cell col=\"16\" text=\"고교졸업상황_지원자_&#13;&#10;검정고시_남\"/><Cell col=\"17\" text=\"고교졸업상황_지원자_&#13;&#10;재진학자_남\"/><Cell col=\"18\" text=\"고교졸업상황_지원자_&#13;&#10;기타_남\"/><Cell col=\"19\" text=\"정원내_지원자_&#13;&#10;일반전형_남\"/><Cell col=\"20\" text=\"정원내_지원자_&#13;&#10;특별전형_남\"/><Cell col=\"21\" text=\"정원외_지원자_&#13;&#10;군위탁_남\"/><Cell col=\"22\" text=\"정원외_지원자_&#13;&#10;농어촌_남\"/><Cell col=\"23\" text=\"정원외_지원자_&#13;&#10;특성화고졸업_남\"/><Cell col=\"24\" text=\"정원외_지원자_&#13;&#10;장애인등대상자_남\"/><Cell col=\"25\" text=\"정원외_지원자_&#13;&#10;기초수급권_남\"/><Cell col=\"26\" text=\"정원외_지원자_&#13;&#10;특성화고재직_남\"/><Cell col=\"27\" text=\"정원외_지원자_&#13;&#10;산업체위탁_남\"/><Cell col=\"28\" text=\"정원외_지원자_&#13;&#10;재외국민_남\"/><Cell col=\"29\" text=\"정원외_지원자_&#13;&#10;전문대이상졸_남\"/><Cell col=\"30\" text=\"정원외_지원자_&#13;&#10;북한이탈주민_남\"/><Cell col=\"31\" text=\"정원외_지원자_&#13;&#10;만학도성인재_남\"/><Cell col=\"32\" text=\"정원외_지원자_&#13;&#10;기타_남\"/><Cell col=\"33\" text=\"고교졸업상황_지원자_&#13;&#10;당해졸업_여\"/><Cell col=\"34\" text=\"고교졸업상황_지원자_&#13;&#10;재수자_여\"/><Cell col=\"35\" text=\"고교졸업상황_지원자_&#13;&#10;검정고시_여\"/><Cell col=\"36\" text=\"고교졸업상황_지원자_&#13;&#10;재진학자_여\"/><Cell col=\"37\" text=\"고교졸업상황_지원자_&#13;&#10;기타_여\"/><Cell col=\"38\" text=\"정원내_지원자_&#13;&#10;일반전형_여\"/><Cell col=\"39\" text=\"정원내_지원자_&#13;&#10;특별전형_여\"/><Cell col=\"40\" text=\"정원외_지원자_&#13;&#10;군위탁_여\"/><Cell col=\"41\" text=\"정원외_지원자_&#13;&#10;농어촌_여\"/><Cell col=\"42\" text=\"정원외_지원자_&#13;&#10;특성화고졸업_여\"/><Cell col=\"43\" text=\"정원외_지원자_&#13;&#10;장애인등대상자_여\"/><Cell col=\"44\" text=\"정원외_지원자_&#13;&#10;기초수급권_여\"/><Cell col=\"45\" text=\"정원외_지원자_&#13;&#10;특성화고재직_여\"/><Cell col=\"46\" text=\"정원외_지원자_&#13;&#10;산업체위탁_여\"/><Cell col=\"47\" text=\"정원외_지원자_&#13;&#10;재외국민_여\"/><Cell col=\"48\" text=\"정원외_지원자_&#13;&#10;전문대이상졸_여\"/><Cell col=\"49\" text=\"정원외_지원자_&#13;&#10;북한이탈주민_여\"/><Cell col=\"50\" text=\"정원외_지원자_&#13;&#10;만학도성인재_여\"/><Cell col=\"51\" text=\"정원외_지원자_&#13;&#10;기타_여\"/></Band><Band id=\"body\"><Cell text=\"bind:HAKGYO_CD\"/><Cell col=\"1\" text=\"bind:JOSA_GIGAN_CD\"/><Cell col=\"2\" text=\"bind:BONBUNGYO_CD\"/><Cell col=\"3\" text=\"bind:HAKJE_GBCD\"/><Cell col=\"4\" text=\"bind:SANGSE_HAKJE_GBCD\"/><Cell col=\"5\" text=\"bind:HAKGWA_CD\"/><Cell col=\"6\" textAlign=\"left\" text=\"bind:HAKGWA_NM\"/><Cell col=\"7\" text=\"bind:DANGWA_DAEHAK_CD\"/><Cell col=\"8\" text=\"bind:DANGWA_DAEHAK_NM\"/><Cell col=\"9\" text=\"bind:GYOYUKBU_GYEYEOL_CD\"/><Cell col=\"10\" text=\"bind:HAKWI_GWAJEONG_CD\"/><Cell col=\"11\" text=\"bind:SUEOP_NYEONHAN_CD\"/><Cell col=\"12\" text=\"bind:HAKGWA_TEUKSEONG_CD\"/><Cell col=\"13\" text=\"bind:JUYA_GBCD\"/><Cell col=\"14\" text=\"bind:G1_STATUS_APPLI_1\"/><Cell col=\"15\" text=\"bind:G1_STATUS_APPLI_2\"/><Cell col=\"16\" text=\"bind:G1_STATUS_APPLI_3\"/><Cell col=\"17\" text=\"bind:G1_STATUS_APPLI_4\"/><Cell col=\"18\" text=\"bind:G1_STATUS_APPLI_10\"/><Cell col=\"19\" text=\"bind:G1_IN_APPLI_1\"/><Cell col=\"20\" text=\"bind:G1_IN_APPLI_2\"/><Cell col=\"21\" text=\"bind:G1_OUT_APPLI_1\"/><Cell col=\"22\" text=\"bind:G1_OUT_APPLI_2\"/><Cell col=\"23\" text=\"bind:G1_OUT_APPLI_3\"/><Cell col=\"24\" text=\"bind:G1_OUT_APPLI_4\"/><Cell col=\"25\" text=\"bind:G1_OUT_APPLI_5\"/><Cell col=\"26\" text=\"bind:G1_OUT_APPLI_6\"/><Cell col=\"27\" text=\"bind:G1_OUT_APPLI_7\"/><Cell col=\"28\" text=\"bind:G1_OUT_APPLI_8\"/><Cell col=\"29\" text=\"bind:G1_OUT_APPLI_9\"/><Cell col=\"30\" text=\"bind:G1_OUT_APPLI_10\"/><Cell col=\"31\" text=\"bind:G1_OUT_APPLI_11\"/><Cell col=\"32\" text=\"bind:G1_OUT_APPLI_12\"/><Cell col=\"33\" text=\"bind:G2_STATUS_APPLI_1\"/><Cell col=\"34\" text=\"bind:G2_STATUS_APPLI_2\"/><Cell col=\"35\" text=\"bind:G2_STATUS_APPLI_3\"/><Cell col=\"36\" text=\"bind:G2_STATUS_APPLI_4\"/><Cell col=\"37\" text=\"bind:G2_STATUS_APPLI_10\"/><Cell col=\"38\" text=\"bind:G2_IN_APPLI_1\"/><Cell col=\"39\" text=\"bind:G2_IN_APPLI_2\"/><Cell col=\"40\" text=\"bind:G2_OUT_APPLI_1\"/><Cell col=\"41\" text=\"bind:G2_OUT_APPLI_2\"/><Cell col=\"42\" text=\"bind:G2_OUT_APPLI_3\"/><Cell col=\"43\" text=\"bind:G2_OUT_APPLI_4\"/><Cell col=\"44\" text=\"bind:G2_OUT_APPLI_5\"/><Cell col=\"45\" text=\"bind:G2_OUT_APPLI_6\"/><Cell col=\"46\" text=\"bind:G2_OUT_APPLI_7\"/><Cell col=\"47\" text=\"bind:G2_OUT_APPLI_8\"/><Cell col=\"48\" text=\"bind:G2_OUT_APPLI_9\"/><Cell col=\"49\" text=\"bind:G2_OUT_APPLI_10\"/><Cell col=\"50\" text=\"bind:G2_OUT_APPLI_11\"/><Cell col=\"51\" text=\"bind:G2_OUT_APPLI_12\"/></Band><Band id=\"summary\"><Cell colspan=\"14\" text=\"소계\"/><Cell col=\"14\" text=\"expr:dataset.getSum(&quot;G1_STATUS_APPLI_1&quot;)\"/><Cell col=\"15\" text=\"expr:dataset.getSum(&quot;G1_STATUS_APPLI_2&quot;)\"/><Cell col=\"16\" text=\"expr:dataset.getSum(&quot;G1_STATUS_APPLI_3&quot;)\"/><Cell col=\"17\" text=\"expr:dataset.getSum(&quot;G1_STATUS_APPLI_4&quot;)\"/><Cell col=\"18\" text=\"expr:dataset.getSum(&quot;G1_STATUS_APPLI_10&quot;)\"/><Cell col=\"19\" text=\"expr:dataset.getSum(&quot;G1_IN_APPLI_1&quot;)\"/><Cell col=\"20\" text=\"expr:dataset.getSum(&quot;G1_IN_APPLI_2&quot;)\"/><Cell col=\"21\" text=\"expr:dataset.getSum(&quot;G1_OUT_APPLI_1&quot;)\"/><Cell col=\"22\" text=\"expr:dataset.getSum(&quot;G1_OUT_APPLI_2&quot;)\"/><Cell col=\"23\" text=\"expr:dataset.getSum(&quot;G1_OUT_APPLI_3&quot;)\"/><Cell col=\"24\" text=\"expr:dataset.getSum(&quot;G1_OUT_APPLI_4&quot;)\"/><Cell col=\"25\" text=\"expr:dataset.getSum(&quot;G1_OUT_APPLI_5&quot;)\"/><Cell col=\"26\" text=\"expr:dataset.getSum(&quot;G1_OUT_APPLI_6&quot;)\"/><Cell col=\"27\" text=\"expr:dataset.getSum(&quot;G1_OUT_APPLI_7&quot;)\"/><Cell col=\"28\" text=\"expr:dataset.getSum(&quot;G1_OUT_APPLI_8&quot;)\"/><Cell col=\"29\" text=\"expr:dataset.getSum(&quot;G1_OUT_APPLI_9&quot;)\"/><Cell col=\"30\" text=\"expr:dataset.getSum(&quot;G1_OUT_APPLI_10&quot;)\"/><Cell col=\"31\" text=\"expr:dataset.getSum(&quot;G1_OUT_APPLI_11&quot;)\"/><Cell col=\"32\" text=\"expr:dataset.getSum(&quot;G1_OUT_APPLI_12&quot;)\"/><Cell col=\"33\" text=\"expr:dataset.getSum(&quot;G2_STATUS_APPLI_1&quot;)\"/><Cell col=\"34\" text=\"expr:dataset.getSum(&quot;G2_STATUS_APPLI_2&quot;)\"/><Cell col=\"35\" text=\"expr:dataset.getSum(&quot;G2_STATUS_APPLI_3&quot;)\"/><Cell col=\"36\" text=\"expr:dataset.getSum(&quot;G2_STATUS_APPLI_4&quot;)\"/><Cell col=\"37\" text=\"expr:dataset.getSum(&quot;G2_STATUS_APPLI_10&quot;)\"/><Cell col=\"38\" text=\"expr:dataset.getSum(&quot;G2_IN_APPLI_1&quot;)\"/><Cell col=\"39\" text=\"expr:dataset.getSum(&quot;G2_IN_APPLI_2&quot;)\"/><Cell col=\"40\" text=\"expr:dataset.getSum(&quot;G2_OUT_APPLI_1&quot;)\"/><Cell col=\"41\" text=\"expr:dataset.getSum(&quot;G2_OUT_APPLI_2&quot;)\"/><Cell col=\"42\" text=\"expr:dataset.getSum(&quot;G2_OUT_APPLI_3&quot;)\"/><Cell col=\"43\" text=\"expr:dataset.getSum(&quot;G2_OUT_APPLI_4&quot;)\"/><Cell col=\"44\" text=\"expr:dataset.getSum(&quot;G2_OUT_APPLI_5&quot;)\"/><Cell col=\"45\" text=\"expr:dataset.getSum(&quot;G2_OUT_APPLI_6&quot;)\"/><Cell col=\"46\" text=\"expr:dataset.getSum(&quot;G2_OUT_APPLI_7&quot;)\"/><Cell col=\"47\" text=\"expr:dataset.getSum(&quot;G2_OUT_APPLI_8&quot;)\"/><Cell col=\"48\" text=\"expr:dataset.getSum(&quot;G2_OUT_APPLI_9&quot;)\"/><Cell col=\"49\" text=\"expr:dataset.getSum(&quot;G2_OUT_APPLI_10&quot;)\"/><Cell col=\"50\" text=\"expr:dataset.getSum(&quot;G2_OUT_APPLI_11&quot;)\"/><Cell col=\"51\" text=\"expr:dataset.getSum(&quot;G2_OUT_APPLI_12&quot;)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("신입생지원현황자료");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divSearch.form.spnSearchYYYY","value","ds_input","IPSI_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("EN09_1010905_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): EN09_1010905_M.xfdl(신입생지원현황자료)
        * 작 성         일 명: 백재인
        * 작 성         일 자: 2021/06/29
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
        			case "GigunYyyy":
                            this.fn_PostGigunYyyy();
                        break;
                    case "Ret":
                            this.fn_PostRet();
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
                        this.fn_Ret();
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
        	if(this.ds_input.getColumn(0, "IPSI_YYYY") == null || this.ds_input.getColumn(0, "IPSI_YYYY") == '')
        	{
        		this.alert("입시년도를 입력해주세요.");
        		return false;
        	}

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
            var strUrl      = "/prj/EN/EN09/Retrieve_1010905_M.do";
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

        /**********************************************************************
                07. 공통함수
        ***********************************************************************/
        // 기준년도 가져오기
        this.fn_GijunYyyy = function()
        {
        	var strSvc      = "GigunYyyy";
            var strUrl      = "prj/EN/EN_COM/Retrieve_GIJUN_YYYY.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "ds_gijunYyyy=ds_gijunYyyy";
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
        }

        this.fn_PostGigunYyyy = function()
        {
        	this.ds_input.setColumn(0, "IPSI_YYYY", this.ds_gijunYyyy.getColumn(0, "YYYY"));
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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onkeydown",this.divSearch_spnSearchYYYY_onkeydown,this);
            this.dsMaster.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
        };
        this.loadIncludeScript("EN09_1010905_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
