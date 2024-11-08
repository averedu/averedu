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
            this.set_titletext("시즌체크인카운터배정상세");
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

            obj = new Static("Static08","567","88","15","100",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("15");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","567","51","15",null,null,"20",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("div_WF_AreaBox");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0","0",null,null,"0","50",null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_Vspltt");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","20","50","547",null,null,"20",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09","0","10","180","22",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("[A04] 카운터 기배정 정보");
            obj.set_cssclass("sta_WF_Title02");
            obj.set_fittocontents("width");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static10","0","28","100","7",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("7");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static07","0","0","100","15",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("15");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("grd_00","0","35","547",null,null,"0",null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_binddataset("ds_grd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"70\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"배정시간\"/><Cell col=\"2\" rowspan=\"2\" text=\"항공사\"/><Cell col=\"3\" rowspan=\"2\" text=\"편명(출발시간)\"/><Cell col=\"4\" rowspan=\"2\" text=\"운항시작일자\"/><Cell col=\"5\" rowspan=\"2\" text=\"운항종료일자\"/><Cell row=\"1\" text=\"*시작\"/><Cell row=\"1\" col=\"1\" text=\"*종료\"/></Band><Band id=\"body\"><Cell text=\"bind:Column1\"/><Cell col=\"1\" text=\"bind:Column2\"/><Cell col=\"2\" text=\"bind:Column3\"/><Cell col=\"3\" text=\"bind:Column7\"/><Cell col=\"4\" text=\"bind:Column8\"/><Cell col=\"5\" text=\"bind:Column9\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("stc_15","stc_09:0","10","80","22",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("<b v=\'true\'><fc v=\'#ff3300\'>30</fc></b> 건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_TotalSta");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button03",null,"10","46","22","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("엑셀");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00",null,"10","46","22","48",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("저장");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button01",null,"10","46","22","96",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_text("삭제");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button02",null,"10","46","22","144",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_text("조회");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div02","582","50",null,"630","20",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Div02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_00","0","10","110","22",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_text("시즌 카운터 배정");
            obj.set_cssclass("sta_WF_Title03");
            obj.set_fittocontents("width");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static11","0","28","100","7",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_text("7");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static14","0","0","100","17",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("2");
            obj.set_text("17");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button13",null,"10","58","22","0",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("3");
            obj.set_text("초기화");
            this.Div02.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","35",null,"410","0",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("4");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"270\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"* 카운터\"/><Cell col=\"1\" colspan=\"2\" text=\"배정시간\"/><Cell col=\"3\" rowspan=\"2\" text=\"항공사\"/><Cell col=\"4\" rowspan=\"2\" text=\"* 편명(출발시간): 운영시작일자 ~ 운영종료일자\"/><Cell row=\"1\" col=\"1\" text=\"* 시작\"/><Cell row=\"1\" col=\"2\" text=\"* 종료\"/></Band></Format></Formats>");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button00",null,"10","46","22","60",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("5");
            obj.set_text("저장");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button02",null,"10","46","22","108",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("6");
            obj.set_text("추가");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("stc_01","stc_00:0","10","80","22",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("7");
            obj.set_text("<b v=\'true\'><fc v=\'#ff3300\'>0</fc></b> 건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_TotalSta");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("stc_02","0","455","440","22",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("8");
            obj.set_text("배정 시작 시간 이후 출발 편명이 표시됩니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Label");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("stc_03","0","477","440","22",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("9");
            obj.set_text("카우터 > 배정시간 > 항공사(필수 아님) > 편명 순으로 선택 후 저장하세요.");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Label");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("stc_04","0","499","590","112",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("10");
            obj.set_text("**[카운터]가 먼저 선택된 경우 해당 카운터에 배정이 없는 편명,\r\n  배정 [시작]시간이 먼저 선택된 경우 해당 시간 이후에 출발하는 편명,\r\n  항공사]가 먼저 선택된 경우 해당 항공사의 편명만 조회되고\r\n  조건에 해당하는 운항일정이 없는 경우 선택할 수 있는 편명이 없을 수 있습니다.");
            obj.set_usedecorate("true");
            obj.set_verticalAlign("top");
            this.Div02.addChild(obj.name, obj);
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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static08.addEventHandler("onclick",this.Static01_onclick,this);
        };
        this.loadIncludeScript("Popup_008.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
