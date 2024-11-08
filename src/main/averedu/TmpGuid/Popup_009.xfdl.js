(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Popup_007");
            this.set_titletext("자동배정(탭형식샘플)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grd", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/><Col id=\"Column1\">06:00</Col><Col id=\"Column2\">08:00</Col><Col id=\"Column3\">OZ</Col><Col id=\"Column5\"/><Col id=\"Column6\">OZ1145(08:30)</Col><Col id=\"Column7\">OZ1145(08:30)</Col><Col id=\"Column8\">20181111</Col><Col id=\"Column4\">OZ1145(08:30)</Col><Col id=\"Column9\">9999-12-31</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\">06:00</Col><Col id=\"Column2\">08:00</Col><Col id=\"Column3\">OZ</Col><Col id=\"Column5\"/><Col id=\"Column6\">OZ1145(08:30)</Col><Col id=\"Column7\">OZ1145(08:30)</Col><Col id=\"Column8\">20181111</Col><Col id=\"Column4\">OZ1145(08:30)</Col><Col id=\"Column9\">9999-12-31</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\">06:00</Col><Col id=\"Column2\">08:00</Col><Col id=\"Column3\">OZ</Col><Col id=\"Column5\"/><Col id=\"Column6\">OZ1145(08:30)</Col><Col id=\"Column7\">OZ1145(08:30)</Col><Col id=\"Column8\">20181111</Col><Col id=\"Column4\">OZ1145(08:30)</Col><Col id=\"Column9\">9999-12-31</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\">06:00</Col><Col id=\"Column2\">08:00</Col><Col id=\"Column3\">OZ</Col><Col id=\"Column5\"/><Col id=\"Column6\">OZ1145(08:30)</Col><Col id=\"Column7\">OZ1145(08:30)</Col><Col id=\"Column8\">20181111</Col><Col id=\"Column4\">OZ1145(08:30)</Col><Col id=\"Column9\">9999-12-31</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\">06:00</Col><Col id=\"Column2\">08:00</Col><Col id=\"Column3\">OZ</Col><Col id=\"Column5\"/><Col id=\"Column6\">OZ1145(08:30)</Col><Col id=\"Column7\">OZ1145(08:30)</Col><Col id=\"Column8\">20181111</Col><Col id=\"Column4\">OZ1145(08:30)</Col><Col id=\"Column9\">9999-12-31</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\">06:00</Col><Col id=\"Column2\">08:00</Col><Col id=\"Column3\">OZ</Col><Col id=\"Column5\"/><Col id=\"Column6\">OZ1145(08:30)</Col><Col id=\"Column7\">OZ1145(08:30)</Col><Col id=\"Column8\">20181111</Col><Col id=\"Column4\">OZ1145(08:30)</Col><Col id=\"Column9\">9999-12-31</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\">06:00</Col><Col id=\"Column2\">08:00</Col><Col id=\"Column3\">OZ</Col><Col id=\"Column5\"/><Col id=\"Column6\">OZ1145(08:30)</Col><Col id=\"Column7\">OZ1145(08:30)</Col><Col id=\"Column8\">20181111</Col><Col id=\"Column4\">OZ1145(08:30)</Col><Col id=\"Column9\">9999-12-31</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\">06:00</Col><Col id=\"Column2\">08:00</Col><Col id=\"Column3\">OZ</Col><Col id=\"Column5\"/><Col id=\"Column6\">OZ1145(08:30)</Col><Col id=\"Column7\">OZ1145(08:30)</Col><Col id=\"Column8\">20181111</Col><Col id=\"Column4\">OZ1145(08:30)</Col><Col id=\"Column9\">9999-12-31</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\">06:00</Col><Col id=\"Column2\">08:00</Col><Col id=\"Column3\">OZ</Col><Col id=\"Column5\"/><Col id=\"Column6\">OZ1145(08:30)</Col><Col id=\"Column7\">OZ1145(08:30)</Col><Col id=\"Column8\">20181111</Col><Col id=\"Column4\">OZ1145(08:30)</Col><Col id=\"Column9\">9999-12-31</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\">06:00</Col><Col id=\"Column2\">08:00</Col><Col id=\"Column3\">OZ</Col><Col id=\"Column5\"/><Col id=\"Column6\">OZ1145(08:30)</Col><Col id=\"Column7\">OZ1145(08:30)</Col><Col id=\"Column8\">20181111</Col><Col id=\"Column4\">OZ1145(08:30)</Col><Col id=\"Column9\">9999-12-31</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\">06:00</Col><Col id=\"Column2\">08:00</Col><Col id=\"Column3\">OZ</Col><Col id=\"Column5\"/><Col id=\"Column6\">OZ1145(08:30)</Col><Col id=\"Column7\">OZ1145(08:30)</Col><Col id=\"Column8\">20181111</Col><Col id=\"Column4\">OZ1145(08:30)</Col><Col id=\"Column9\">9999-12-31</Col><Col id=\"Column10\">버튼</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","20","20","240","22",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("시즌 체크인 카운터 배정 상세");
            obj.set_cssclass("sta_WF_Title01");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("Button01",null,"23","46","22","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","45",null,"5","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static05",null,"20","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0",null,null,"20","0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","0","20","20",null,null,"0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Div("div_01","20","50",null,"71","20",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            obj.set_formscrolltype("none");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);

            obj = new Static("stc_00","0","10","90","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("0");
            obj.set_text("시즌");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_fittocontents("width");
            this.div_01.addChild(obj.name, obj);

            obj = new Combo("Combo00","stc_00:10","10","95","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("5");
            obj.set_text("S18");
            obj.set_value("");
            obj.set_index("-1");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_01","Combo00:0","10","90","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("2");
            obj.set_text("From Date");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_fittocontents("width");
            this.div_01.addChild(obj.name, obj);

            obj = new Edit("Edit02","stc_01:10","10","85","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("8");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_04","Edit02:0","10","79","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("7");
            obj.set_text("To Date");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_fittocontents("width");
            this.div_01.addChild(obj.name, obj);

            obj = new Edit("Edit03","stc_04:10","10","85","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("9");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_05","Edit03:0","10","60","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("11");
            obj.set_text("공항");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_fittocontents("width");
            this.div_01.addChild(obj.name, obj);

            obj = new Edit("Edit01","stc_05:10","10","55","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("10");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_09","Edit01:0","10","60","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("13");
            obj.set_text("버전");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_fittocontents("width");
            this.div_01.addChild(obj.name, obj);

            obj = new Edit("Edit04","stc_09:10","10","55","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("12");
            this.div_01.addChild(obj.name, obj);

            obj = new Button("btn_00",null,null,"55","22","10","9",null,null,null,null,this.div_01.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_02","0","37","90","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("3");
            obj.set_text("요일");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_fittocontents("width");
            this.div_01.addChild(obj.name, obj);

            obj = new Combo("Combo01","stc_02:10","37","95","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("6");
            obj.set_text("일");
            obj.set_value("");
            obj.set_index("-1");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_06","Edit04:0","10","140","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("14");
            obj.set_text("기존 배정자료 초기화");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_fittocontents("width");
            this.div_01.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","stc_06:5","10","22","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("15");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_03","Combo01:0","37","110","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("4");
            obj.set_text("주기장 선택 : LB");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_fittocontents("width");
            this.div_01.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01","stc_03:5","37","22","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("16");
            this.div_01.addChild(obj.name, obj);

            obj = new Button("btn_03",null,"23","58","22","68",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("도움말");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btn_02",null,"23","46","22","128",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("필터");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btn_01",null,"23","46","22","176",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btn_00",null,"23","46","22","224",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btn_134",null,"23","82","22","272",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("시뮬레이션");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","20","136",null,null,"20","20",null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("배정현황");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("stc_09","0","10","180","22",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("배정현황 리스트");
            obj.set_cssclass("sta_WF_Title02");
            obj.set_fittocontents("width");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static10","0","28","100","7",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("7");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grd_00","0","35",null,null,"0","40",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_binddataset("ds_grd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"70\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"배정시간\"/><Cell col=\"2\" rowspan=\"2\" text=\"항공사\"/><Cell col=\"3\" rowspan=\"2\" text=\"편명(출발시간)\"/><Cell col=\"4\" rowspan=\"2\" text=\"운항시작일자\"/><Cell col=\"5\" rowspan=\"2\" text=\"운항종료일자\"/><Cell row=\"1\" text=\"*시작\"/><Cell row=\"1\" col=\"1\" text=\"*종료\"/></Band><Band id=\"body\"><Cell text=\"bind:Column1\"/><Cell col=\"1\" text=\"bind:Column2\"/><Cell col=\"2\" text=\"bind:Column3\"/><Cell col=\"3\" text=\"bind:Column7\"/><Cell col=\"4\" text=\"bind:Column8\"/><Cell col=\"5\" text=\"bind:Column9\"/></Band></Format></Formats>");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("stc_15","stc_09:0","10","80","22",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("<b v=\'true\'><fc v=\'#ff3300\'>30</fc></b> 건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_TotalSta");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static07","0","0","100","15",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("15");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("배정통계");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Tab00);
            obj.set_text("배정출력");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static07","20","121","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("15");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1200,700,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Popup_009.xfdl", function() {

        this.Tab00_onchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("Popup_009.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
