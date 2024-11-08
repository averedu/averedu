(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("STBJ300_T3");
            this.set_titletext("일일배송");
            if (Form == this.constructor)
            {
                this._setFormPosition(992,550);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static01","630","40","98","148",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_bgLine");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_summ","0","40","502","148",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_date");
            obj.set_cssclass("grid_WF_table");
            obj.set_visible("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\" band=\"right\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"31\"/><Row size=\"31\"/><Row size=\"31\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\" text=\"평균\"/></Band><Band id=\"body\"><Cell text=\"발주\" textAlign=\"center\" cssclass=\"grid_th\"/><Cell col=\"1\" text=\"bind:Column0\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell row=\"1\" text=\"납품\" textAlign=\"center\" cssclass=\"grid_th\"/><Cell row=\"1\" col=\"1\" text=\"bind:Column1\"/><Cell row=\"1\" col=\"2\"/><Cell row=\"1\" col=\"3\"/><Cell row=\"1\" col=\"4\"/><Cell row=\"1\" col=\"5\"/><Cell row=\"1\" col=\"6\"/><Cell row=\"1\" col=\"7\"/><Cell row=\"1\" col=\"8\"/><Cell row=\"1\" col=\"9\"/><Cell row=\"2\" text=\"판매\" textAlign=\"center\" cssclass=\"grid_th\"/><Cell row=\"2\" col=\"1\" text=\"bind:Column4\"/><Cell row=\"2\" col=\"2\"/><Cell row=\"2\" col=\"3\"/><Cell row=\"2\" col=\"4\"/><Cell row=\"2\" col=\"5\"/><Cell row=\"2\" col=\"6\"/><Cell row=\"2\" col=\"7\"/><Cell row=\"2\" col=\"8\"/><Cell row=\"2\" col=\"9\"/><Cell row=\"3\" text=\"폐기\" textAlign=\"center\" cssclass=\"grid_th\"/><Cell row=\"3\" col=\"1\" text=\"bind:Column6\"/><Cell row=\"3\" col=\"2\"/><Cell row=\"3\" col=\"3\"/><Cell row=\"3\" col=\"4\"/><Cell row=\"3\" col=\"5\"/><Cell row=\"3\" col=\"6\"/><Cell row=\"3\" col=\"7\"/><Cell row=\"3\" col=\"8\"/><Cell row=\"3\" col=\"9\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_pop00","639","56","80","26",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("CUT설정");
            this.addChild(obj.name, obj);

            obj = new Button("btn_pop01","639","86","80","26",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("중점설정");
            this.addChild(obj.name, obj);

            obj = new Button("btn_pop02","639","146","80","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("현재고변경");
            this.addChild(obj.name, obj);

            obj = new Button("btn_pop03","639","116","80","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("자동/스마트");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_item","499","40","132","148",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_image("URL(\"imagerc::img_sample01.png\")");
            this.addChild(obj.name, obj);

            obj = new Div("div_detail","718","40",null,"163","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("div_WF_table");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_title00","10","0","105","22",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_thFirst");
            obj.set_text("원가DC");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("stc_MID_NM","115","0",null,"22","0",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_td");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("stc_title01","10","21","105","22",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_thFirst");
            obj.set_text("원가DC 이익율");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("stc_AMT","115","21",null,"22","0",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_td");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("stc_title03","10","42","105","22",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_thFirst");
            obj.set_text("장려금 지급액");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("stc_WHRJS","115","42",null,"22","0",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_td");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("stc_title04","10","63","105","22",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_thFirst");
            obj.set_text("장려금 조건");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("stc_RLRKS","115","63",null,"22","0",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_td");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("stc_title05","10","84","105","22",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_thFirst");
            obj.set_text("장려금 기간");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("stc_WLRMQDPWJD","115","84",null,"22","0",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_td");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("stc_title06","10","105","105","22",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_thFirst");
            obj.set_text("반품기간");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("stc_ALWLRMQTKDB","115","105",null,"22","0",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_td");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("stc_title02","10","126","105","22",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_thFirst");
            obj.set_text("발주정지 예정일");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("stc_ALWLRMQTKDB00","115","126",null,"22","0",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_td");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static51","631","121","8","61",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","719","129","8","61",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","0","0","992","32",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_inquiryTable");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_search00","0","0","64","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_inquiryThFirst");
            obj.set_text("발주일자");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_date","64","0","90","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_inquiryTd");
            obj.set_text("2018-01-09");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_search01","154","0","64","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_inquiryTh");
            obj.set_text("중분류");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_midNm_search","218","0","151","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_inquiryTd");
            obj.set_text("사탕");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_search02","369","0","64","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_inquiryTh");
            obj.set_text("소분류");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_smallNm","433","0","126","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_inquiryTd");
            obj.set_text("봉지사탕");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_search03","559","0","65","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_inquiryTh");
            obj.set_text("발주금액");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_totamt","624","0","105","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_inquiryTd");
            obj.set_text("0원");
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
            this.div_search.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",992,550,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","img_item","image","ds_generalBind","IMG_CHK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_detail.form.stc_MID_NM","text","ds_generalBind","EVT_TXT_01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_detail.form.stc_AMT","text","ds_generalBind","EVT_TXT_02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_detail.form.stc_WHRJS","text","ds_generalBind","EVT_TXT_03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_detail.form.stc_RLRKS","text","ds_generalBind","EVT_TXT_04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_detail.form.stc_WLRMQDPWJD","text","ds_generalBind","EVT_TXT_05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_detail.form.stc_ALWLRMQTKDB","text","ds_generalBind","EVT_TXT_06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_detail.form.stc_ALWLRMQTKDB00","text","ds_generalBind","EVT_TXT_06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_detail.form.stc_ALWLRMQTKDB00","accessibilityaction","ds_generalBind","EVT_TXT_07");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_search.form.stc_smallNm","text","ds_generalBind","SMALL_NM");
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
            this.btn_pop00.addEventHandler("onclick",this.btn_pop00_onclick,this);
            this.btn_pop01.addEventHandler("onclick",this.btn_pop01_onclick,this);
            this.btn_pop02.addEventHandler("onclick",this.btn_pop02_onclick,this);
            this.btn_pop03.addEventHandler("onclick",this.btn_pop03_onclick,this);
            this.div_search.form.stc_date.addEventHandler("onclick",this.div_search_stc_midNm_search_onclick,this);
            this.div_search.form.stc_midNm_search.addEventHandler("onclick",this.div_search_stc_midNm_search_onclick,this);
        };
        this.loadIncludeScript("STBJ300_T3.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
