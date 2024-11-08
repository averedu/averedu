(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("STBJ300_T1");
            this.set_titletext("전체상품");
            if (Form == this.constructor)
            {
                this._setFormPosition(992,550);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_general", this);
            obj._setContents("<ColumnInfo><Column id=\"ORD_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_STORE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"STORE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JIP_PLU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RET_PSS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PITEM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PITEM_ID_NM_CSS\" type=\"STRING\" size=\"256\"/><Column id=\"PITEM_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PROFIT_RATE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"HQ_MAEGA_SET\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ORD_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_UNIT_QTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ORD_SUG_QTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PYUN_PLU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PYUN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PYUN_QTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MAGAM_HMS\" type=\"STRING\" size=\"256\"/><Column id=\"ABSENCE\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_MULT_ULMT\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_MULT_LLMT\" type=\"STRING\" size=\"256\"/><Column id=\"CT_ITEM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CITEM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"AIS_PLAN_HM\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_MUL_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"NOW_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"OLD_PYUN_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"TOT_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"EXPIRE_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"CURDAY\" type=\"STRING\" size=\"256\"/><Column id=\"CURTIME\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_BKCOLOR\" type=\"STRING\" size=\"256\"/><Column id=\"IMG_CHK\" type=\"STRING\" size=\"256\"/><Column id=\"SMALL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MONTH_EVT\" type=\"STRING\" size=\"256\"/><Column id=\"NEXT_MONTH_EVT\" type=\"STRING\" size=\"256\"/><Column id=\"INFORM_SYMD\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"EVT_CHK_01\" type=\"STRING\" size=\"256\"/><Column id=\"EVT_CHK_01_CSS\" type=\"STRING\" size=\"256\"/><Column id=\"EVT_CHK_02\" type=\"STRING\" size=\"256\"/><Column id=\"EVT_CHK_03\" type=\"STRING\" size=\"256\"/><Column id=\"EVT_CHK_04\" type=\"STRING\" size=\"256\"/><Column id=\"EVT_CHK_05\" type=\"STRING\" size=\"256\"/><Column id=\"EVT_TXT_01\" type=\"STRING\" size=\"256\"/><Column id=\"EVT_TXT_02\" type=\"STRING\" size=\"256\"/><Column id=\"EVT_TXT_03\" type=\"STRING\" size=\"256\"/><Column id=\"EVT_TXT_04\" type=\"STRING\" size=\"256\"/><Column id=\"EVT_TXT_05\" type=\"STRING\" size=\"256\"/><Column id=\"EVT_TXT_06\" type=\"STRING\" size=\"256\"/><Column id=\"EVT_TXT_07\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gridheader", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_date", this);
            obj._setContents("<ColumnInfo><Column id=\"ORD_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"JIP_PLU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PYUN_PLU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"SALE_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"DISUSE_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"SUM_UNIT_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_generalBind", this);
            obj._setContents("<ColumnInfo><Column id=\"ORD_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_STORE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"STORE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JIP_PLU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RET_PSS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PITEM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PITEM_ID_NM_CSS\" type=\"STRING\" size=\"256\"/><Column id=\"PITEM_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PROFIT_RATE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"HQ_MAEGA_SET\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ORD_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_UNIT_QTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ORD_SUG_QTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PYUN_PLU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PYUN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PYUN_QTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MAGAM_HMS\" type=\"STRING\" size=\"256\"/><Column id=\"ABSENCE\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_MULT_ULMT\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_MULT_LLMT\" type=\"STRING\" size=\"256\"/><Column id=\"CT_ITEM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CITEM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"AIS_PLAN_HM\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_MUL_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"NOW_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"OLD_PYUN_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"TOT_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"EXPIRE_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"CURDAY\" type=\"STRING\" size=\"256\"/><Column id=\"CURTIME\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_BKCOLOR\" type=\"STRING\" size=\"256\"/><Column id=\"IMG_CHK\" type=\"STRING\" size=\"256\"/><Column id=\"SMALL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MONTH_EVT\" type=\"STRING\" size=\"256\"/><Column id=\"NEXT_MONTH_EVT\" type=\"STRING\" size=\"256\"/><Column id=\"INFORM_SYMD\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"EVT_CHK_01\" type=\"STRING\" size=\"256\"/><Column id=\"EVT_CHK_01_CSS\" type=\"STRING\" size=\"256\"/><Column id=\"EVT_CHK_02\" type=\"STRING\" size=\"256\"/><Column id=\"EVT_CHK_03\" type=\"STRING\" size=\"256\"/><Column id=\"EVT_CHK_04\" type=\"STRING\" size=\"256\"/><Column id=\"EVT_CHK_05\" type=\"STRING\" size=\"256\"/><Column id=\"EVT_TXT_01\" type=\"STRING\" size=\"256\"/><Column id=\"EVT_TXT_02\" type=\"STRING\" size=\"256\"/><Column id=\"EVT_TXT_03\" type=\"STRING\" size=\"256\"/><Column id=\"EVT_TXT_04\" type=\"STRING\" size=\"256\"/><Column id=\"EVT_TXT_05\" type=\"STRING\" size=\"256\"/><Column id=\"EVT_TXT_06\" type=\"STRING\" size=\"256\"/><Column id=\"EVT_TXT_07\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dateBind", this);
            obj._setContents("<ColumnInfo><Column id=\"DAY1\" type=\"STRING\" size=\"256\"/><Column id=\"DAY2\" type=\"STRING\" size=\"256\"/><Column id=\"DAY3\" type=\"STRING\" size=\"256\"/><Column id=\"DAY4\" type=\"STRING\" size=\"256\"/><Column id=\"DAY5\" type=\"STRING\" size=\"256\"/><Column id=\"DAY6\" type=\"STRING\" size=\"256\"/><Column id=\"DAY7\" type=\"STRING\" size=\"256\"/><Column id=\"DAY8\" type=\"STRING\" size=\"256\"/><Column id=\"AVG\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_weather", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_week", this);
            obj._setContents("<ColumnInfo><Column id=\"ORD_YMD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static06","632","398","98","148",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_bgLine");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_item","0","40",null,"350","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_generalBind");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_scrolltype("none");
            obj.set_nodatatext("No Data");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"157\"/><Column size=\"49\"/><Column size=\"49\"/><Column size=\"49\"/><Column size=\"49\"/><Column size=\"49\"/><Column size=\"49\"/><Column size=\"49\"/><Column size=\"49\"/><Column size=\"49\"/><Column size=\"49\"/><Column size=\"49\"/><Column size=\"49\"/><Column size=\"49\"/><Column size=\"49\"/><Column size=\"49\"/><Column size=\"49\"/><Column size=\"49\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"상품명\"/><Cell col=\"1\" text=\"매가\"/><Cell col=\"2\" text=\"이익율\"/><Cell col=\"3\" text=\"유효&#13;&#10;기간\"/><Cell col=\"4\" text=\"차발주\"/><Cell col=\"5\" text=\"현재고\"/><Cell col=\"6\" text=\"입수\"/><Cell col=\"7\" text=\"배수\"/><Cell col=\"8\" text=\"발주량\"/><Cell col=\"9\" text=\"발주&#13;&#10;단위\"/><Cell col=\"10\" text=\"당월&#13;&#10;행사\"/><Cell col=\"11\" text=\"익월&#13;&#10;행사\"/><Cell col=\"12\" text=\"등급\"/><Cell col=\"13\" text=\"반품&#13;&#10;불가\"/><Cell col=\"14\" text=\"원가&#13;&#10;DC\"/><Cell col=\"15\" text=\"장려금\"/><Cell col=\"16\" text=\"원/매가\"/><Cell col=\"17\" text=\"발주&#13;&#10;정지\"/></Band><Band id=\"body\"><Cell text=\"bind:ITEM_NM\" cssclass=\"grid_linkPoint\"/><Cell col=\"1\" text=\"bind:HQ_MAEGA_SET\" displaytype=\"number\"/><Cell col=\"2\" text=\"bind:PROFIT_RATE\" displaytype=\"number\"/><Cell col=\"3\" text=\"bind:EXPIRE_DAY\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:ECO_ORD_QTY\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:NOW_QTY\" cssclass=\"grid_bgGreen\"/><Cell col=\"6\" text=\"bind:ORD_UNIT_QTY\" displaytype=\"number\"/><Cell col=\"7\" text=\"bind:PYUN_QTY\" edittype=\"text\" displaytype=\"number\" editinputtype=\"number\" maskeditformat=\"999,999,999\" maskeditlimitbymask=\"integer\" cssclass=\"grid_bgBlue\" editautoselect=\"true\"/><Cell col=\"8\" text=\"bind:TOT_QTY\" displaytype=\"number\"/><Cell col=\"9\" text=\"bind:ORD_UNIT\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:MONTH_EVT\" textAlign=\"center\" cssclass=\"grid_link\"/><Cell col=\"11\" text=\"bind:NEXT_MONTH_EVT\" textAlign=\"center\" cssclass=\"grid_link\"/><Cell col=\"12\" text=\"bind:PITEM_ID_NM\" textAlign=\"center\" cssclass=\"bind:PITEM_ID_NM_CSS\"/><Cell col=\"13\" textAlign=\"center\" text=\"bind:EVT_CHK_01\" cssclass=\"bind:EVT_CHK_01_CSS\"/><Cell col=\"14\" textAlign=\"center\" cssclass=\"bind:EVT_CHK_02\"/><Cell col=\"15\" textAlign=\"center\" cssclass=\"bind:EVT_CHK_03\"/><Cell col=\"16\" textAlign=\"center\" cssclass=\"bind:EVT_CHK_04\"/><Cell col=\"17\" textAlign=\"center\" cssclass=\"bind:EVT_CHK_05\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_summ","48","398","455","148",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_dateBind");
            obj.set_cssclass("grid_WF_table");
            obj.set_visible("true");
            obj.set_nodatatext("No Data");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"53\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\" text=\"평균\"/></Band><Band id=\"body\"><Cell text=\"bind:DAY1\"/><Cell col=\"1\" text=\"bind:DAY2\"/><Cell col=\"2\" text=\"bind:DAY3\"/><Cell col=\"3\" text=\"bind:DAY4\"/><Cell col=\"4\" text=\"bind:DAY5\"/><Cell col=\"5\" text=\"bind:DAY6\"/><Cell col=\"6\" text=\"bind:DAY7\"/><Cell col=\"7\" text=\"bind:DAY8\"/><Cell col=\"8\" text=\"bind:AVG\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","0","0",null,"32","0",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_inquiryTable");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_search00","0","0","64","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_inquiryThFirst");
            obj.set_text("발주일자");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_date","64","0","105","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_inquiryTd");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_search01","169","0","64","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_inquiryTh");
            obj.set_text("중분류");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_midNm_search","233","0","151","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_inquiryTd");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_search02","384","0","64","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_inquiryTh");
            obj.set_text("소분류");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_smallNm","448","0","121","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_inquiryTd");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_search03","569","0","65","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_inquiryTh");
            obj.set_text("발주금액");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_totamt","634","0","95","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_inquiryTd");
            obj.set_text("0원");
            obj.set_textAlign("right");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_search04","729","0","65","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_inquiryTh");
            obj.set_text("발주수량");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_totqnty","794","0","65","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_inquiryTd");
            obj.set_text("0개");
            obj.set_textAlign("right");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_search05","859","0","78","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_inquiryTh");
            obj.set_text("발주진행율");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_rate","937","0","55","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_inquiryTd");
            obj.set_text("00/00");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_pop01","143","7","18","18",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_order");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_pop02","358","7","18","18",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_order");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static51","633","479","8","62",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","721","484","8","62",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","398","48","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_thColFirst");
            obj.set_text("구분");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","436","48","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_thColFirst");
            obj.set_text("발주");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","463","48","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_thColFirst");
            obj.set_text("입고");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","0","490","48","28",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_thColFirst");
            obj.set_text("판매");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","0","517","48","29",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_thColFirst");
            obj.set_text("폐기");
            this.addChild(obj.name, obj);

            obj = new Button("btn_pop02","641","504","80","26",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("현재고변경");
            this.addChild(obj.name, obj);

            obj = new Button("btn_pop03","641","474","80","26",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("자동/스마트");
            this.addChild(obj.name, obj);

            obj = new Button("btn_pop01","641","444","80","26",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("중점설정");
            this.addChild(obj.name, obj);

            obj = new Button("btn_pop00","641","414","80","26",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("CUT설정");
            this.addChild(obj.name, obj);

            obj = new Static("stc_MID_NM","835","398",null,"22","0",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_td");
            this.addChild(obj.name, obj);

            obj = new Static("stc_title00","730","398","105","22",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_thFirst");
            obj.set_text("원가DC");
            this.addChild(obj.name, obj);

            obj = new Static("stc_title01","730","419","105","22",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_thFirst");
            obj.set_text("원가DC 이익율");
            this.addChild(obj.name, obj);

            obj = new Static("stc_AMT","835","419",null,"22","0",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_td");
            this.addChild(obj.name, obj);

            obj = new Static("stc_WHRJS","835","440",null,"22","0",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_td");
            this.addChild(obj.name, obj);

            obj = new Static("stc_title03","730","440","105","22",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_thFirst");
            obj.set_text("장려금 지급액");
            this.addChild(obj.name, obj);

            obj = new Static("stc_title04","730","461","105","22",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_thFirst");
            obj.set_text("장려금 조건");
            this.addChild(obj.name, obj);

            obj = new Static("stc_RLRKS","835","461",null,"22","0",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_td");
            this.addChild(obj.name, obj);

            obj = new Static("stc_WLRMQDPWJD","835","482",null,"22","0",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_td");
            this.addChild(obj.name, obj);

            obj = new Static("stc_title05","730","482","105","22",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_thFirst");
            obj.set_text("장려금 기간");
            this.addChild(obj.name, obj);

            obj = new Static("stc_title06","730","503","105","22",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_thFirst");
            obj.set_text("반품기간");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ALWLRMQTKDB","835","503",null,"22","0",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_td");
            this.addChild(obj.name, obj);

            obj = new Static("stc_title02","730","524","105","22",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_thFirst");
            obj.set_text("발주정지 예정일");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ALWLRMQTKDB00","835","524",null,"22","0",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_td");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_item","501","398","132","148",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",992,550,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_search.form.stc_smallNm","text","ds_generalBind","SMALL_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","stc_MID_NM","text","ds_generalBind","EVT_TXT_01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","stc_AMT","text","ds_generalBind","EVT_TXT_02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","stc_WHRJS","text","ds_generalBind","EVT_TXT_03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","stc_RLRKS","text","ds_generalBind","EVT_TXT_04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","stc_WLRMQDPWJD","text","ds_generalBind","EVT_TXT_05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","stc_ALWLRMQTKDB","text","ds_generalBind","EVT_TXT_06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","stc_ALWLRMQTKDB00","text","ds_generalBind","EVT_TXT_07");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclose",this.STBJ300_T1_onclose,this);
            this.grd_item.addEventHandler("oncellclick",this.grd_item_oncellclick,this);
            this.grd_item.addEventHandler("onkeyup",this.grd_item_onkeyup,this);
            this.div_search.form.btn_pop01.addEventHandler("onclick",this.div_search_btn_pop_onclick,this);
            this.div_search.form.btn_pop02.addEventHandler("onclick",this.div_search_btn_pop_onclick,this);
            this.btn_pop02.addEventHandler("onclick",this.btn_pop02_onclick,this);
            this.btn_pop03.addEventHandler("onclick",this.btn_pop03_onclick,this);
            this.btn_pop01.addEventHandler("onclick",this.btn_pop01_onclick,this);
            this.btn_pop00.addEventHandler("onclick",this.btn_pop00_onclick,this);
            this.ds_generalBind.addEventHandler("oncolumnchanged",this.ds_general_oncolumnchanged,this);
            this.ds_generalBind.addEventHandler("onrowposchanged",this.ds_generalBind_onrowposchanged,this);
        };
        this.loadIncludeScript("STBJ300_T2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
