(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Sample_006");
            this.set_titletext("비정상원인 일괄처리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1606,830);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grd", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/></Row><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmb", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">전체</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">현재</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_02",null,"3","46","22","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("필터");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btn_01",null,"3","46","22","48",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Div("div_01","0","30",null,"44","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);

            obj = new Static("stc_00","0","10","44","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("0");
            obj.set_text("공항");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_fittocontents("width");
            this.div_01.addChild(obj.name, obj);

            obj = new Button("btn_00",null,null,"55","22","10","9",null,null,null,null,this.div_01.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.div_01.addChild(obj.name, obj);

            obj = new Combo("Combo00","stc_00:10","10","80","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("2");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_01","404","10","44","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("3");
            obj.set_text("상태");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_fittocontents("width");
            this.div_01.addChild(obj.name, obj);

            obj = new Combo("Combo01","458","10","80","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("4");
            obj.set_text("지연");
            obj.set_value("");
            obj.set_index("-1");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_03","Combo00:0","10","70","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("5");
            obj.set_text("운항일자");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.div_01.addChild(obj.name, obj);

            obj = new Button("Button00","stc_03:10","10","22","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_CalBtnM");
            this.div_01.addChild(obj.name, obj);

            obj = new Button("Button02","238","10","30","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("7");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CalBtnDay");
            this.div_01.addChild(obj.name, obj);

            obj = new Calendar("cal_00","270","10","110","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("8");
            obj.set_value("20181025");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_01.addChild(obj.name, obj);

            obj = new Button("Button01","382","10","22","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_CalBtnP");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_05","0","5","330","22",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("비정상원인 일괄처리");
            obj.set_cssclass("sta_WF_Title01");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09","0","124","150","22",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("처리");
            obj.set_cssclass("sta_WF_Title02");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","0","142","100","7",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("7");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","114","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("15");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","0","149",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("ds_grd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"48\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" text=\"상태\"/><Cell col=\"3\" text=\"운항일자\"/><Cell col=\"4\" text=\"운항편명\"/><Cell col=\"5\" text=\"상대공항\"/><Cell col=\"6\" text=\"출도착\"/><Cell col=\"7\" text=\"국내국제\"/><Cell col=\"8\" text=\"등록기호\"/><Cell col=\"9\" text=\"ICAO\"/><Cell col=\"10\" text=\"운항시간\"/><Cell col=\"11\" text=\"예정시간\"/><Cell col=\"12\" text=\"실시각\"/><Cell col=\"13\" text=\"원인코드\"/><Cell col=\"14\" text=\"원인\"/><Cell col=\"15\" text=\"원인공항\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\"/><Cell col=\"2\" text=\"bind:Column1\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01","stc_09:0","124","50","22",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("<b v=\'true\'><fc v=\'#ff3300\'>0</fc></b> 건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_TotalSta");
            this.addChild(obj.name, obj);

            obj = new Static("stc_24","0","89",null,"28","0",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_25","0","89","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("원인");
            obj.set_cssclass("sta_WF_DetailTi_P");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","152","92","50","22",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","204","92","180","22",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Static("stc_00","799","89","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("원인공항");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","386","92","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_PopSrch");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02","951","92","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","1073","92","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_PopSrch");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","74","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("15");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Button("btn_00",null,"3","46","23","96",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("Button02",null,"92","46","22","3",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("반영");
            this.addChild(obj.name, obj);

            obj = new Button("Button03",null,"92","58","22","51",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("초기화");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1606,830,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.div_01.form.cal_00.addEventHandler("onchanged",this.div_01_cal_00_onchanged,this);
            this.stc_05.addEventHandler("onclick",this.stc_05_onclick,this);
        };
        this.loadIncludeScript("Sample_006.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
