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
            this.set_titletext("신/편입생이관처리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"IN_CREATE_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"IN_IPSI_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"IN_DEUNGROK_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"IN_IPHAK_DT\" type=\"STRING\" size=\"256\"/><Column id=\"IN_SUHEOM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"OUT_RESULT\" type=\"STRING\" size=\"256\"/><Column id=\"OUT_RESULT_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"OUT_TOTAL_CNT\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gijunYyyy", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster", this);
            obj._setContents("<ColumnInfo><Column id=\"IN_CREATE_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"IN_IPSI_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"IN_IPHAK_DT\" type=\"STRING\" size=\"256\"/><Column id=\"IN_SUHEOM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"OUT_RESULT\" type=\"STRING\" size=\"256\"/><Column id=\"OUT_RESULT_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"OUT_TOTAL_CNT\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("DivBg","0","0","780",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("type01");
            obj.set_background("#e3ebff");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","10","40",null,"42","10",null,null,null,null,null,this.DivBg.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.DivBg.addChild(obj.name, obj);

            obj = new Static("stc_01","7","9","80","22",null,null,null,null,null,null,this.DivBg.form.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("입시년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.DivBg.form.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","87","9","101","22",null,null,null,null,null,null,this.DivBg.form.divSearch.form);
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_cssclass("point");
            this.DivBg.form.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00","227","9","80","22",null,null,null,null,null,null,this.DivBg.form.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("입학일자");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.DivBg.form.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calSearchIphakDt","307","9","131","22",null,null,null,null,null,null,this.DivBg.form.divSearch.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_cssclass("point");
            this.DivBg.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtCheoriGunsu","631","9","100","22",null,null,null,null,null,null,this.DivBg.form.divSearch.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            this.DivBg.form.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_01_00_00","511","9","110","22",null,null,null,null,null,null,this.DivBg.form.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("처리건수");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.DivBg.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","10","41","27","40",null,null,null,null,null,null,this.DivBg.form);
            obj.set_taborder("3");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.DivBg.addChild(obj.name, obj);

            obj = new Static("Static01_02_01","199","41","56","40",null,null,null,null,null,null,this.DivBg.form);
            obj.set_taborder("4");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.DivBg.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00","88","41","10","40",null,null,null,null,null,null,this.DivBg.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.DivBg.addChild(obj.name, obj);

            obj = new Static("Static01_01_01","30","41","720","9",null,null,null,null,null,null,this.DivBg.form);
            obj.set_taborder("6");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.DivBg.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","30","72","720","9",null,null,null,null,null,null,this.DivBg.form);
            obj.set_taborder("7");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.DivBg.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","308","41","10","40",null,null,null,null,null,null,this.DivBg.form);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.DivBg.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_01","742","41","27","40",null,null,null,null,null,null,this.DivBg.form);
            obj.set_taborder("9");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.DivBg.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","632","41","10","40",null,null,null,null,null,null,this.DivBg.form);
            obj.set_taborder("10");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.DivBg.addChild(obj.name, obj);

            obj = new Static("stc_09_00","10","92","155","22",null,null,null,null,null,null,this.DivBg.form);
            obj.set_taborder("11");
            obj.set_text("대상자 일괄처리");
            obj.set_cssclass("sta_WF_Title02");
            this.DivBg.addChild(obj.name, obj);

            obj = new Div("DivButton","10","117",null,"50","10",null,null,null,null,null,this.DivBg.form);
            obj.set_taborder("1");
            obj.set_background("white");
            obj.set_border("1px solid #4c4b66");
            obj.set_text("");
            this.DivBg.addChild(obj.name, obj);

            obj = new Button("btnHakbeonSaengsung","60","11","179","25",null,null,null,null,null,null,this.DivBg.form.DivButton.form);
            obj.set_taborder("0");
            obj.set_text("1. 학번생성");
            obj.set_cssclass("btn_WF_Crud");
            this.DivBg.form.DivButton.addChild(obj.name, obj);

            obj = new Button("btnHakjeokIgwan","290","11","179","25",null,null,null,null,null,null,this.DivBg.form.DivButton.form);
            obj.set_taborder("1");
            obj.set_text("2. 학적이관");
            obj.set_cssclass("btn_WF_Crud");
            this.DivBg.form.DivButton.addChild(obj.name, obj);

            obj = new Button("btnJanghakIgwan",null,"11","179","25","60",null,null,null,null,null,this.DivBg.form.DivButton.form);
            obj.set_taborder("2");
            obj.set_text("3. 등록장학이관");
            obj.set_cssclass("btn_WF_Crud");
            this.DivBg.form.DivButton.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","330","82","100","35",null,null,null,null,null,null,this.DivBg.form);
            obj.set_taborder("12");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.DivBg.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00","330","167","100","25",null,null,null,null,null,null,this.DivBg.form);
            obj.set_taborder("13");
            obj.set_text("↑25↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.DivBg.addChild(obj.name, obj);

            obj = new Div("DivContent","10","192",null,null,"10","10",null,null,null,null,this.DivBg.form);
            obj.set_taborder("2");
            obj.set_background("white");
            obj.set_border("1px solid #4c4b66");
            obj.set_text("");
            this.DivBg.addChild(obj.name, obj);

            obj = new Div("DivMkHakbeon","10","35",null,"80","10",null,null,null,null,null,this.DivBg.form.DivContent.form);
            obj.set_taborder("0");
            obj.set_background("#e3ebff");
            obj.set_border("1px solid #4c4b66");
            obj.set_text("");
            this.DivBg.form.DivContent.addChild(obj.name, obj);

            obj = new Static("stc_01_01_00_00","-1","29","70","22",null,null,null,null,null,null,this.DivBg.form.DivContent.form.DivMkHakbeon.form);
            obj.set_taborder("2");
            obj.set_text("수험번호");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.DivBg.form.DivContent.form.DivMkHakbeon.addChild(obj.name, obj);

            obj = new Edit("edtSuheomNo1","79","29","129","22",null,null,null,null,null,null,this.DivBg.form.DivContent.form.DivMkHakbeon.form);
            obj.set_taborder("0");
            this.DivBg.form.DivContent.form.DivMkHakbeon.addChild(obj.name, obj);

            obj = new Button("btnHakbeonSaengsung1",null,"28","179","25","10",null,null,null,null,null,this.DivBg.form.DivContent.form.DivMkHakbeon.form);
            obj.set_taborder("1");
            obj.set_text("1-1. 학번생성(단건)");
            obj.set_cssclass("btn_WF_Crud");
            this.DivBg.form.DivContent.form.DivMkHakbeon.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","319","0","100","35",null,null,null,null,null,null,this.DivBg.form.DivContent.form);
            obj.set_taborder("3");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.DivBg.form.DivContent.addChild(obj.name, obj);

            obj = new Static("stc_09_00","10","10","155","22",null,null,null,null,null,null,this.DivBg.form.DivContent.form);
            obj.set_taborder("4");
            obj.set_text("학번생성(단건)");
            obj.set_cssclass("sta_WF_Title02");
            this.DivBg.form.DivContent.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","10","27","290","8",null,null,null,null,null,null,this.DivBg.form.DivContent.form);
            obj.set_taborder("5");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.DivBg.form.DivContent.addChild(obj.name, obj);

            obj = new Div("DivHakjeokIgwan","10","150",null,"80","10",null,null,null,null,null,this.DivBg.form.DivContent.form);
            obj.set_taborder("1");
            obj.set_background("#e3ebff");
            obj.set_border("1px solid #4c4b66");
            obj.set_text("");
            this.DivBg.form.DivContent.addChild(obj.name, obj);

            obj = new Static("stc_01_01_00_00","-1","29","70","22",null,null,null,null,null,null,this.DivBg.form.DivContent.form.DivHakjeokIgwan.form);
            obj.set_taborder("2");
            obj.set_text("수험번호");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.DivBg.form.DivContent.form.DivHakjeokIgwan.addChild(obj.name, obj);

            obj = new Edit("edtSuheomNo2","79","29","129","22",null,null,null,null,null,null,this.DivBg.form.DivContent.form.DivHakjeokIgwan.form);
            obj.set_taborder("0");
            this.DivBg.form.DivContent.form.DivHakjeokIgwan.addChild(obj.name, obj);

            obj = new Button("btnHakjeokIgwan1",null,"28","179","25","10",null,null,null,null,null,this.DivBg.form.DivContent.form.DivHakjeokIgwan.form);
            obj.set_taborder("1");
            obj.set_text("2-1. 학적이관(단건)");
            obj.set_cssclass("btn_WF_Crud");
            this.DivBg.form.DivContent.form.DivHakjeokIgwan.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00","319","115","100","35",null,null,null,null,null,null,this.DivBg.form.DivContent.form);
            obj.set_taborder("6");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.DivBg.form.DivContent.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","10","125","155","22",null,null,null,null,null,null,this.DivBg.form.DivContent.form);
            obj.set_taborder("7");
            obj.set_text("학적이관(단건)");
            obj.set_cssclass("sta_WF_Title02");
            this.DivBg.form.DivContent.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00","10","142","290","8",null,null,null,null,null,null,this.DivBg.form.DivContent.form);
            obj.set_taborder("8");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.DivBg.form.DivContent.addChild(obj.name, obj);

            obj = new Div("DivJanghakIgwan","10","265",null,"80","10",null,null,null,null,null,this.DivBg.form.DivContent.form);
            obj.set_taborder("2");
            obj.set_background("#e3ebff");
            obj.set_border("1px solid #4c4b66");
            obj.set_text("");
            this.DivBg.form.DivContent.addChild(obj.name, obj);

            obj = new Static("stc_01_01_00_00","-1","29","70","22",null,null,null,null,null,null,this.DivBg.form.DivContent.form.DivJanghakIgwan.form);
            obj.set_taborder("2");
            obj.set_text("수험번호");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.DivBg.form.DivContent.form.DivJanghakIgwan.addChild(obj.name, obj);

            obj = new Edit("edtSuheomNo3","79","29","129","22",null,null,null,null,null,null,this.DivBg.form.DivContent.form.DivJanghakIgwan.form);
            obj.set_taborder("0");
            this.DivBg.form.DivContent.form.DivJanghakIgwan.addChild(obj.name, obj);

            obj = new Button("btnJanghakIgwan1",null,"28","179","25","10",null,null,null,null,null,this.DivBg.form.DivContent.form.DivJanghakIgwan.form);
            obj.set_taborder("1");
            obj.set_text("3-1. 등록장학이관(단건)");
            obj.set_cssclass("btn_WF_Crud");
            this.DivBg.form.DivContent.form.DivJanghakIgwan.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01","319","230","100","35",null,null,null,null,null,null,this.DivBg.form.DivContent.form);
            obj.set_taborder("9");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.DivBg.form.DivContent.addChild(obj.name, obj);

            obj = new Static("stc_09_00_01","10","240","155","22",null,null,null,null,null,null,this.DivBg.form.DivContent.form);
            obj.set_taborder("10");
            obj.set_text("등록장학이관(단건)");
            obj.set_cssclass("sta_WF_Title02");
            this.DivBg.form.DivContent.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01","10","257","290","8",null,null,null,null,null,null,this.DivBg.form.DivContent.form);
            obj.set_taborder("11");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.DivBg.form.DivContent.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","10","109","290","8",null,null,null,null,null,null,this.DivBg.form);
            obj.set_taborder("14");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.DivBg.addChild(obj.name, obj);

            obj = new Static("stc_63","-9","10","362","20",null,null,null,null,null,null,this.DivBg.form);
            obj.set_taborder("15");
            obj.set_text("입시년도 기준으로 이관처리를 시행합니다.");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.DivBg.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("신/편입생이관처리");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item23","edt1_01_00_01_01_00","value","dsMaster","DANCHE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","edt1_01_00_01_01_00_00","value","dsMaster","DANCHE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","rdo_00_00","value","dsMaster","HYEONJAE_MOJIP_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","rdo_00_00_01","value","dsMaster","HYEONJAE_MOJIP_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","DivBg.form.divSearch.form.spnSearchYYYY","value","ds_input","IN_IPSI_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","DivBg.form.divSearch.form.calSearchIphakDt","value","ds_input","IN_IPHAK_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","DivBg.form.divSearch.form.edtCheoriGunsu","value","dsMaster","OUT_TOTAL_CNT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("ER01_1030102_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): ER01_1030102_M.xfdl(신/편입생이관처리)
        * 작 성         일 명: 백재인
        * 작 성         일 자: 2021/05/07
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
        	var strSvc      = "";
            var strUrl      = "/prj/EN/EN_COM/Retrieve_GIJUN_YYYY.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "ds_gijunYyyy=ds_gijunYyyy";
            var strArg      = "";
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = false;                                   //샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);

        	this.ds_input.setColumn(0,"IN_IPSI_YYYY", this.ds_gijunYyyy.getColumn(0, "YYYY"));
        };

        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {
            if(nErrorCode != 0)
            {
                this.gfn_alert(sErrorMsg,"에러정보","","error");
                return false;
            }else
            {
                /*sSvcId (Transaction Id)*/
                switch(sSvcId)
                {
                    case "MkHakbeon":
                            this.fn_PostMkHakbeon();
                        break;
        			case "HakjeokIgwan":
                            this.fn_PostHakjeokIgwan();
                        break;
        			case "JanghakIgwan":
                            this.fn_PostJanghakIgwan();
                        break;
                    default:
                        break;
                }
            }
        };

        /**********************************************************************
                05. 학번생성
        ***********************************************************************/
        this.DivBg_DivButton_btnHakbeonSaengsung_onclick = function(obj,e)
        {
        	this.ds_input.setColumn(0, "IN_CREATE_GBCD", "01");
        	this.ds_input.setColumn(0, "IN_SUHEOM_NO", "");

        	if(this.ds_input.getColumn(0, "IN_IPSI_YYYY") == "" || this.ds_input.getColumn(0, "IN_IPSI_YYYY") == null)
        	{
        		this.alert("입시년도를 입력하세요.");
        		return false;
        	}
        	else if(this.ds_input.getColumn(0, "IN_IPHAK_DT") == "" || this.ds_input.getColumn(0, "IN_IPHAK_DT") == null)
        	{
        		this.alert("입학일자를 선택하세요.");
        		return false;
        	}

        	this.fn_MkHakbeon();
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_MkHakbeon = function()
        {
            var strSvc      = "MkHakbeon";
            var strUrl      = "/prj/ER/ER01/MkHakbeon_1030102_M.do";
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
        this.fn_PostMkHakbeon = function()
        {
            if(this.dsMaster.getColumn(0, "OUT_RESULT") != '00')
        	{
        		this.alert(this.dsMaster.getColumn(0, "OUT_RESULT_CONT"));
        	}
        	else
        	{
        		this.alert("처리되었습니다.");
        	}

        	this.ds_input.setColumn(0, "IN_SUHEOM_NO", "");
        };

        /**********************************************************************
                06. 학적이관
        ***********************************************************************/
        this.DivBg_DivButton_btnHakjeokIgwan_onclick = function(obj,e)
        {
        	this.ds_input.setColumn(0, "IN_CREATE_GBCD", "01");
        	this.ds_input.setColumn(0, "IN_SUHEOM_NO", "");

        	if(this.ds_input.getColumn(0, "IN_IPSI_YYYY") == "" || this.ds_input.getColumn(0, "IN_IPSI_YYYY") == null)
        	{
        		this.alert("입시년도를 입력하세요.");
        		return false;
        	}
        	else if(this.ds_input.getColumn(0, "IN_IPHAK_DT") == "" || this.ds_input.getColumn(0, "IN_IPHAK_DT") == null)
        	{
        		this.alert("입학일자를 선택하세요.");
        		return false;
        	}

        	this.fn_HakjeokIgwan();
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_HakjeokIgwan = function()
        {
            var strSvc      = "HakjeokIgwan";
            var strUrl      = "/prj/ER/ER01/HakjeokIgwan_1030102_M.do";
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
        this.fn_PostHakjeokIgwan = function()
        {
            if(this.dsMaster.getColumn(0, "OUT_RESULT") != '00')
        	{
        		this.alert(this.dsMaster.getColumn(0, "OUT_RESULT_CONT"));
        	}
        	else
        	{
        		this.alert("처리되었습니다.");
        	}

        	this.ds_input.setColumn(0, "IN_SUHEOM_NO", "");
        };

        /**********************************************************************
                07. 등록장학이관
        ***********************************************************************/
        this.DivBg_DivButton_btnJanghakIgwan_onclick = function(obj,e)
        {
        	this.ds_input.setColumn(0, "IN_CREATE_GBCD", "01");
        	this.ds_input.setColumn(0, "IN_SUHEOM_NO", "");
        	this.ds_input.setColumn(0, "IN_DEUNGROK_YYYY", this.ds_input.getColumn(0, "IN_IPSI_YYYY"));

        	if(this.ds_input.getColumn(0, "IN_IPSI_YYYY") == "" || this.ds_input.getColumn(0, "IN_IPSI_YYYY") == null)
        	{
        		this.alert("입시년도를 입력하세요.");
        		return false;
        	}
        	else if(this.ds_input.getColumn(0, "IN_IPHAK_DT") == "" || this.ds_input.getColumn(0, "IN_IPHAK_DT") == null)
        	{
        		this.alert("입학일자를 선택하세요.");
        		return false;
        	}

        	this.fn_JanghakIgwan();
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_JanghakIgwan = function()
        {
            var strSvc      = "JanghakIgwan";
            var strUrl      = "/prj/ER/ER01/JanghakIgwan_1030102_M.do";
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
        this.fn_PostJanghakIgwan = function()
        {
            if(this.dsMaster.getColumn(0, "OUT_RESULT") != '00')
        	{
        		this.alert(this.dsMaster.getColumn(0, "OUT_RESULT_CONT"));
        	}
        	else
        	{
        		this.alert("처리되었습니다.");
        	}

        	this.ds_input.setColumn(0, "IN_SUHEOM_NO", "");
        };

        /**********************************************************************
                08. 학번생성(단건)
        ***********************************************************************/
        this.DivBg_DivContent_DivMkHakbeon_btnHakbeonSaengsung1_onclick = function(obj,e)
        {
        	this.ds_input.setColumn(0, "IN_CREATE_GBCD", "01");
        	this.ds_input.setColumn(0, "IN_SUHEOM_NO", this.DivBg.form.DivContent.form.DivMkHakbeon.form.edtSuheomNo1.value);

        	if(this.ds_input.getColumn(0, "IN_IPSI_YYYY") == "" || this.ds_input.getColumn(0, "IN_IPSI_YYYY") == null)
        	{
        		this.alert("입시년도를 입력하세요.");
        		return false;
        	}
        	else if(this.ds_input.getColumn(0, "IN_IPHAK_DT") == "" || this.ds_input.getColumn(0, "IN_IPHAK_DT") == null)
        	{
        		this.alert("입학일자를 선택하세요.");
        		return false;
        	}
        	else if(this.ds_input.getColumn(0, "IN_SUHEOM_NO") == "" || this.ds_input.getColumn(0, "IN_SUHEOM_NO") == null)
        	{
        		this.alert("수험번호를 입력하세요.");
        		return false;
        	}

        	this.fn_MkHakbeon();
        };

        /**********************************************************************
                09. 학적이관(단건)
        ***********************************************************************/
        this.DivBg_DivContent_DivHakjeokIgwan_btnHakjeokIgwan1_onclick = function(obj,e)
        {
        	this.ds_input.setColumn(0, "IN_CREATE_GBCD", "01");
        	this.ds_input.setColumn(0, "IN_SUHEOM_NO", this.DivBg.form.DivContent.form.DivHakjeokIgwan.form.edtSuheomNo2.value);

        	if(this.ds_input.getColumn(0, "IN_IPSI_YYYY") == "" || this.ds_input.getColumn(0, "IN_IPSI_YYYY") == null)
        	{
        		this.alert("입시년도를 입력하세요.");
        		return false;
        	}
        	else if(this.ds_input.getColumn(0, "IN_IPHAK_DT") == "" || this.ds_input.getColumn(0, "IN_IPHAK_DT") == null)
        	{
        		this.alert("입학일자를 선택하세요.");
        		return false;
        	}
        	else if(this.ds_input.getColumn(0, "IN_SUHEOM_NO") == "" || this.ds_input.getColumn(0, "IN_SUHEOM_NO") == null)
        	{
        		this.alert("수험번호를 입력하세요.");
        		return false;
        	}

        	this.fn_HakjeokIgwan();
        };

        /**********************************************************************
                10. 등록장학이관(단건)
        ***********************************************************************/
        this.DivBg_DivContent_DivJanghakIgwan_btnJanghakIgwan1_onclick = function(obj,e)
        {
        	this.ds_input.setColumn(0, "IN_CREATE_GBCD", "01");
        	this.ds_input.setColumn(0, "IN_SUHEOM_NO", this.DivBg.form.DivContent.form.DivJanghakIgwan.form.edtSuheomNo3.value);
        	this.ds_input.setColumn(0, "IN_DEUNGROK_YYYY", this.ds_input.getColumn(0, "IN_IPSI_YYYY"));

        	if(this.ds_input.getColumn(0, "IN_IPSI_YYYY") == "" || this.ds_input.getColumn(0, "IN_IPSI_YYYY") == null)
        	{
        		this.alert("입시년도를 입력하세요.");
        		return false;
        	}
        	else if(this.ds_input.getColumn(0, "IN_IPHAK_DT") == "" || this.ds_input.getColumn(0, "IN_IPHAK_DT") == null)
        	{
        		this.alert("입학일자를 선택하세요.");
        		return false;
        	}
        	else if(this.ds_input.getColumn(0, "IN_SUHEOM_NO") == "" || this.ds_input.getColumn(0, "IN_SUHEOM_NO") == null)
        	{
        		this.alert("수험번호를 입력하세요.");
        		return false;
        	}

        	this.fn_JanghakIgwan();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.DivBg.form.divSearch.form.calSearchIphakDt.addEventHandler("onkeydown",this.divSearch_calSearchSincheongSijakDt_onkeydown,this);
            this.DivBg.form.DivButton.form.btnHakbeonSaengsung.addEventHandler("onclick",this.DivBg_DivButton_btnHakbeonSaengsung_onclick,this);
            this.DivBg.form.DivButton.form.btnHakjeokIgwan.addEventHandler("onclick",this.DivBg_DivButton_btnHakjeokIgwan_onclick,this);
            this.DivBg.form.DivButton.form.btnJanghakIgwan.addEventHandler("onclick",this.DivBg_DivButton_btnJanghakIgwan_onclick,this);
            this.DivBg.form.DivContent.form.DivMkHakbeon.form.btnHakbeonSaengsung1.addEventHandler("onclick",this.DivBg_DivContent_DivMkHakbeon_btnHakbeonSaengsung1_onclick,this);
            this.DivBg.form.DivContent.form.DivHakjeokIgwan.form.btnHakjeokIgwan1.addEventHandler("onclick",this.DivBg_DivContent_DivHakjeokIgwan_btnHakjeokIgwan1_onclick,this);
            this.DivBg.form.DivContent.form.DivJanghakIgwan.form.btnJanghakIgwan1.addEventHandler("onclick",this.DivBg_DivContent_DivJanghakIgwan_btnJanghakIgwan1_onclick,this);
        };
        this.loadIncludeScript("ER01_1030102_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
