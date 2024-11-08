(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Sample_023");
            this.set_titletext("권한그룹등록관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1606,830);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grd", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/></Row><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_03",null,"3","58","22","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("도움말");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btn_02",null,"3","46","22","60",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("필터");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btn_01",null,"3","46","22","108",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btn_00",null,"3","46","22","156",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Div("div_01","0","30",null,"44","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_00","0","10","54","22",null,null,null,null,null,null,this.div_01.form);
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

            obj = new Edit("edt_01","595","10","145","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("3");
            obj.set_cssclass("point");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_01","530","10","65","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("2");
            obj.set_text("출발편");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_fittocontents("width");
            this.div_01.addChild(obj.name, obj);

            obj = new Combo("Combo00","55","10","95","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("4");
            obj.set_text("GMP");
            obj.set_value("");
            obj.set_index("-1");
            this.div_01.addChild(obj.name, obj);

            obj = new Combo("Combo01","228","10","96","21",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("5");
            obj.set_text("60");
            obj.set_value("");
            obj.set_index("-1");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_02","150","10","78","21",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("6");
            obj.set_text("시간범위");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_fittocontents("width");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_03","322","10","103","20",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("7");
            obj.set_text("새로고침시간");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_fittocontents("width");
            this.div_01.addChild(obj.name, obj);

            obj = new Edit("edt_00","425","9","105","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("8");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_04","740","10","65","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("9");
            obj.set_text("도착편");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_fittocontents("width");
            this.div_01.addChild(obj.name, obj);

            obj = new Edit("edt_02","805","10","145","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("10");
            obj.set_cssclass("point");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_05","0","5","330","22",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("통합패널");
            obj.set_cssclass("sta_WF_Title01");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btn_134",null,"3","46","22","204",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btn_132",null,"3","46","22","252",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","459",null,"15","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("");
            obj.set_cssclass("div_WF_AreaBox");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0","0",null,null,"0","0",null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_Hspltt");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","0","74","1131","385",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09","0","40","150","22",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("도착편");
            obj.set_cssclass("sta_WF_Title02");
            obj.set_fittocontents("width");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static10","0","58","100","7",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("7");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02","0","30","100","15",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("15");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","65","296",null,null,"0",null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_binddataset("ds_grd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"편명\"/><Cell col=\"1\" text=\"ETA\"/><Cell col=\"2\" text=\"기종\"/><Cell col=\"3\" text=\"주기장\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\"/><Cell col=\"3\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("stc_01","stc_09:0","40","50","22",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("<b v=\'true\'><fc v=\'#ff3300\'>0</fc></b> 건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_TotalSta");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("stc_05","0","5","330","22",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("도착편명");
            obj.set_cssclass("sta_WF_Title01");
            obj.set_fittocontents("width");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("stc_00","311","40","150","22",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("착륙");
            obj.set_cssclass("sta_WF_Title02");
            obj.set_fittocontents("width");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01","311","58","100","7",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_text("7");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static04","311","30","100","15",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_text("15");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid01","311","65","402",null,null,"0",null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_binddataset("ds_grd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"70\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"편명\"/><Cell col=\"1\" text=\"ETA\"/><Cell col=\"2\" text=\"기종\"/><Cell col=\"3\" text=\"주기장\"/><Cell col=\"4\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("stc_02","461","40","50","22",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_text("<b v=\'true\'><fc v=\'#ff3300\'>0</fc></b> 건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_TotalSta");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("stc_03","728","40","150","22",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("11");
            obj.set_text("RAMP");
            obj.set_cssclass("sta_WF_Title02");
            obj.set_fittocontents("width");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static05","728","57","100","8",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("12");
            obj.set_text("7");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static06","938","30","100","35",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("13");
            obj.set_text("35");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static07","728","30","100","15",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("14");
            obj.set_text("15");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("stc_04","878","40","50","22",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("15");
            obj.set_text("<b v=\'true\'><fc v=\'#ff3300\'>0</fc></b> 건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_TotalSta");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid02","728","65",null,null,"0","0",null,null,null,null,this.Div01.form);
            obj.set_taborder("16");
            obj.set_binddataset("ds_grd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"69\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"편명\"/><Cell col=\"1\" text=\"ETA\"/><Cell col=\"2\" text=\"기종\"/><Cell col=\"3\" text=\"주기장\"/><Cell col=\"4\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div02","1146","74",null,"385","0",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09","0","40","150","22",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_text("Event");
            obj.set_cssclass("sta_WF_Title03");
            obj.set_fittocontents("width");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static10","0","58","100","7",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_text("7");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static00","210","30","100","35",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("2");
            obj.set_text("35");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static02","0","30","100","15",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("3");
            obj.set_text("15");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.Div02.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","65",null,null,"0","0",null,null,null,null,this.Div02.form);
            obj.set_taborder("4");
            obj.set_binddataset("ds_grd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"편명\"/><Cell col=\"1\" text=\"ETA\"/><Cell col=\"2\" text=\"기종\"/><Cell col=\"3\" text=\"주기장\"/><Cell col=\"4\"/><Cell col=\"5\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/></Band></Format></Formats>");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("stc_01","150","40","50","22",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("5");
            obj.set_text("<b v=\'true\'><fc v=\'#ff3300\'>0</fc></b> 건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_TotalSta");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("stc_05","0","5","330","22",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("6");
            obj.set_text("이벤트");
            obj.set_cssclass("sta_WF_Title02");
            obj.set_fittocontents("width");
            this.Div02.addChild(obj.name, obj);

            obj = new Div("Div03","0","474",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09","0","40","150","22",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("0");
            obj.set_text("출발편");
            obj.set_cssclass("sta_WF_Title02");
            obj.set_fittocontents("width");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static10","0","58","100","7",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("1");
            obj.set_text("7");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static02","0","30","100","15",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("2");
            obj.set_text("15");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.Div03.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","65","296",null,null,"0",null,null,null,null,this.Div03.form);
            obj.set_taborder("3");
            obj.set_binddataset("ds_grd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"편명\"/><Cell col=\"1\" text=\"ETA\"/><Cell col=\"2\" text=\"기종\"/><Cell col=\"3\" text=\"주기장\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\"/><Cell col=\"3\"/></Band></Format></Formats>");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("stc_01","150","40","50","22",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("4");
            obj.set_text("<b v=\'true\'><fc v=\'#ff3300\'>0</fc></b> 건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_TotalSta");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("stc_05","0","5","330","22",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("5");
            obj.set_text("출발편명");
            obj.set_cssclass("sta_WF_Title01");
            obj.set_fittocontents("width");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("stc_00","311","40","150","22",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("6");
            obj.set_text("RAMP");
            obj.set_cssclass("sta_WF_Title02");
            obj.set_fittocontents("width");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static01","311","58","100","7",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("7");
            obj.set_text("7");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static04","311","30","100","15",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("8");
            obj.set_text("15");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.Div03.addChild(obj.name, obj);

            obj = new Grid("Grid01","311","65","660",null,null,"0",null,null,null,null,this.Div03.form);
            obj.set_taborder("9");
            obj.set_binddataset("ds_grd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"70\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"편명\"/><Cell col=\"1\" text=\"ETA\"/><Cell col=\"2\" text=\"기종\"/><Cell col=\"3\" text=\"주기장\"/><Cell col=\"4\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/></Band></Format></Formats>");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("stc_02","461","40","50","22",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("10");
            obj.set_text("<b v=\'true\'><fc v=\'#ff3300\'>0</fc></b> 건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_TotalSta");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("stc_03","987","40","150","22",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("11");
            obj.set_text("토잉");
            obj.set_cssclass("sta_WF_Title02");
            obj.set_fittocontents("width");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static05","987","57","100","8",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("12");
            obj.set_text("7");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static06","1197","30","100","35",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("13");
            obj.set_text("35");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static07","987","30","100","15",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("14");
            obj.set_text("15");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("stc_04","1137","40","50","22",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("15");
            obj.set_text("<b v=\'true\'><fc v=\'#ff3300\'>0</fc></b> 건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_TotalSta");
            this.Div03.addChild(obj.name, obj);

            obj = new Grid("Grid02","987","65","362",null,null,"0",null,null,null,null,this.Div03.form);
            obj.set_taborder("16");
            obj.set_binddataset("ds_grd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"편명\"/><Cell col=\"1\" text=\"ETA\"/><Cell col=\"2\" text=\"기종\"/><Cell col=\"3\" text=\"주기장\"/><Cell col=\"4\"/><Cell col=\"5\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/></Band></Format></Formats>");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("stc_06","1364","40","150","22",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("17");
            obj.set_text("출발완료");
            obj.set_cssclass("sta_WF_Title02");
            obj.set_fittocontents("width");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static00","1364","57","100","8",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("18");
            obj.set_text("7");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static08","1364","30","100","15",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("19");
            obj.set_text("15");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("stc_07","1514","40","50","22",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("20");
            obj.set_text("<b v=\'true\'><fc v=\'#ff3300\'>0</fc></b> 건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_TotalSta");
            this.Div03.addChild(obj.name, obj);

            obj = new Grid("Grid03","1364","65",null,null,"0","0",null,null,null,null,this.Div03.form);
            obj.set_taborder("21");
            obj.set_binddataset("ds_grd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"편명\"/><Cell col=\"1\" text=\"ATD\"/><Cell col=\"2\" text=\"RWY\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\"/></Band></Format></Formats>");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static03","1349","111","15","145",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("22");
            obj.set_text("35");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static09","972","111","15","145",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("23");
            obj.set_text("35");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.Div03.addChild(obj.name, obj);
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
            this.stc_05.addEventHandler("onclick",this.stc_05_onclick,this);
            this.Div01.form.stc_05.addEventHandler("onclick",this.stc_05_onclick,this);
            this.Div02.form.stc_05.addEventHandler("onclick",this.stc_05_onclick,this);
            this.Div03.form.stc_05.addEventHandler("onclick",this.stc_05_onclick,this);
        };
        this.loadIncludeScript("Sample_023.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
