(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Popup_016");
            this.set_titletext("업무일지상세");
            if (Form == this.constructor)
            {
                this._setFormPosition(900,630);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("DS_GridSample", this);
            obj._setContents("<ColumnInfo><Column id=\"Column25\" type=\"STRING\" size=\"256\"/><Column id=\"Column24\" type=\"STRING\" size=\"256\"/><Column id=\"Column23\" type=\"STRING\" size=\"256\"/><Column id=\"Column22\" type=\"STRING\" size=\"256\"/><Column id=\"Column21\" type=\"STRING\" size=\"256\"/><Column id=\"Column20\" type=\"STRING\" size=\"256\"/><Column id=\"Column19\" type=\"STRING\" size=\"256\"/><Column id=\"Column18\" type=\"STRING\" size=\"256\"/><Column id=\"Column17\" type=\"STRING\" size=\"256\"/><Column id=\"Column16\" type=\"STRING\" size=\"256\"/><Column id=\"Column15\" type=\"STRING\" size=\"256\"/><Column id=\"Column14\" type=\"STRING\" size=\"256\"/><Column id=\"Column13\" type=\"STRING\" size=\"256\"/><Column id=\"Column12\" type=\"STRING\" size=\"256\"/><Column id=\"Column11\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmb", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","20","20","200","22",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("업무일지 상세");
            obj.set_cssclass("sta_WF_Title01");
            this.addChild(obj.name, obj);

            obj = new Button("Button01",null,"23","46","22","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("stc_42","20","60","220","22",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("근무기록");
            obj.set_cssclass("sta_WF_Title02");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static05",null,"20","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","0","20","20",null,null,"0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0",null,null,"20","0","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","45",null,"5","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","20","50","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("15");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","20","78","100","7",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("7");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","20","85","560","243",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("DS_GridSample");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Column25\"/><Cell col=\"1\" text=\"Column24\"/><Cell col=\"2\" text=\"Column23\"/><Cell col=\"3\" text=\"Column22\"/><Cell col=\"4\" text=\"Column21\"/><Cell col=\"5\" text=\"Column20\"/><Cell col=\"6\" text=\"Column19\"/><Cell col=\"7\" text=\"Column18\"/><Cell col=\"8\" text=\"Column17\"/><Cell col=\"9\" text=\"Column16\"/><Cell col=\"10\" text=\"Column15\"/><Cell col=\"11\" text=\"Column14\"/><Cell col=\"12\" text=\"Column13\"/><Cell col=\"13\" text=\"Column12\"/><Cell col=\"14\" text=\"Column11\"/><Cell col=\"15\" text=\"Column10\"/><Cell col=\"16\" text=\"Column9\"/><Cell col=\"17\" text=\"Column8\"/><Cell col=\"18\" text=\"Column7\"/><Cell col=\"19\" text=\"Column6\"/><Cell col=\"20\" text=\"Column5\"/><Cell col=\"21\" text=\"Column4\"/><Cell col=\"22\" text=\"Column3\"/><Cell col=\"23\" text=\"Column2\"/><Cell col=\"24\" text=\"Column1\"/><Cell col=\"25\" text=\"Column0\"/></Band><Band id=\"body\"><Cell text=\"bind:Column25\"/><Cell col=\"1\" text=\"bind:Column24\"/><Cell col=\"2\" text=\"bind:Column23\"/><Cell col=\"3\" text=\"bind:Column22\"/><Cell col=\"4\" text=\"bind:Column21\"/><Cell col=\"5\" text=\"bind:Column20\"/><Cell col=\"6\" text=\"bind:Column19\"/><Cell col=\"7\" text=\"bind:Column18\"/><Cell col=\"8\" text=\"bind:Column17\"/><Cell col=\"9\" text=\"bind:Column16\"/><Cell col=\"10\" text=\"bind:Column15\"/><Cell col=\"11\" text=\"bind:Column14\"/><Cell col=\"12\" text=\"bind:Column13\"/><Cell col=\"13\" text=\"bind:Column12\"/><Cell col=\"14\" text=\"bind:Column11\"/><Cell col=\"15\" text=\"bind:Column10\"/><Cell col=\"16\" text=\"bind:Column9\"/><Cell col=\"17\" text=\"bind:Column8\"/><Cell col=\"18\" text=\"bind:Column7\"/><Cell col=\"19\" text=\"bind:Column6\"/><Cell col=\"20\" text=\"bind:Column5\"/><Cell col=\"21\" text=\"bind:Column4\"/><Cell col=\"22\" text=\"bind:Column3\"/><Cell col=\"23\" text=\"bind:Column2\"/><Cell col=\"24\" text=\"bind:Column1\"/><Cell col=\"25\" text=\"bind:Column0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_00","20","339","220","22",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("업무수행내역");
            obj.set_cssclass("sta_WF_Title02");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","20","329","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("15");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","20","357","100","7",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("7");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02","20","364","560",null,null,"20",null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_binddataset("DS_GridSample");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Column25\"/><Cell col=\"1\" text=\"Column24\"/><Cell col=\"2\" text=\"Column23\"/><Cell col=\"3\" text=\"Column22\"/><Cell col=\"4\" text=\"Column21\"/><Cell col=\"5\" text=\"Column20\"/><Cell col=\"6\" text=\"Column19\"/><Cell col=\"7\" text=\"Column18\"/><Cell col=\"8\" text=\"Column17\"/><Cell col=\"9\" text=\"Column16\"/><Cell col=\"10\" text=\"Column15\"/><Cell col=\"11\" text=\"Column14\"/><Cell col=\"12\" text=\"Column13\"/><Cell col=\"13\" text=\"Column12\"/><Cell col=\"14\" text=\"Column11\"/><Cell col=\"15\" text=\"Column10\"/><Cell col=\"16\" text=\"Column9\"/><Cell col=\"17\" text=\"Column8\"/><Cell col=\"18\" text=\"Column7\"/><Cell col=\"19\" text=\"Column6\"/><Cell col=\"20\" text=\"Column5\"/><Cell col=\"21\" text=\"Column4\"/><Cell col=\"22\" text=\"Column3\"/><Cell col=\"23\" text=\"Column2\"/><Cell col=\"24\" text=\"Column1\"/><Cell col=\"25\" text=\"Column0\"/></Band><Band id=\"body\"><Cell text=\"bind:Column25\"/><Cell col=\"1\" text=\"bind:Column24\"/><Cell col=\"2\" text=\"bind:Column23\"/><Cell col=\"3\" text=\"bind:Column22\"/><Cell col=\"4\" text=\"bind:Column21\"/><Cell col=\"5\" text=\"bind:Column20\"/><Cell col=\"6\" text=\"bind:Column19\"/><Cell col=\"7\" text=\"bind:Column18\"/><Cell col=\"8\" text=\"bind:Column17\"/><Cell col=\"9\" text=\"bind:Column16\"/><Cell col=\"10\" text=\"bind:Column15\"/><Cell col=\"11\" text=\"bind:Column14\"/><Cell col=\"12\" text=\"bind:Column13\"/><Cell col=\"13\" text=\"bind:Column12\"/><Cell col=\"14\" text=\"bind:Column11\"/><Cell col=\"15\" text=\"bind:Column10\"/><Cell col=\"16\" text=\"bind:Column9\"/><Cell col=\"17\" text=\"bind:Column8\"/><Cell col=\"18\" text=\"bind:Column7\"/><Cell col=\"19\" text=\"bind:Column6\"/><Cell col=\"20\" text=\"bind:Column5\"/><Cell col=\"21\" text=\"bind:Column4\"/><Cell col=\"22\" text=\"bind:Column3\"/><Cell col=\"23\" text=\"bind:Column2\"/><Cell col=\"24\" text=\"bind:Column1\"/><Cell col=\"25\" text=\"bind:Column0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_02","stc_42:0","60","50","22",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("<b v=\'true\'><fc v=\'#ff3300\'>0</fc></b> 건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_TotalSta");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01","stc_00:0","339","50","22",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("<b v=\'true\'><fc v=\'#ff3300\'>0</fc></b> 건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_TotalSta");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,"23","46","22","68",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("필터");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("Button07","534","338","46","22",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("엑셀");
            this.addChild(obj.name, obj);

            obj = new Button("Button08","487","338","45","22",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("Button10","439","338","46","22",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("Button09","392","338","45","22",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","345","338","45","22",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","534","60","46","22",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("엑셀");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","487","60","45","22",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("Button05","439","60","46","22",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("Button06","392","60","45","22",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Button("Button11","345","60","45","22",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","595","50","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("15");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("stc_03","595","60","220","22",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("상번");
            obj.set_cssclass("sta_WF_Title02");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","595","78","100","7",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("7");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Button("Button12","835","60","45","22",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Static("stc_41","595","112","91","28",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_40","595","85","91","28",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("접수시간");
            obj.set_cssclass("sta_WF_DetailTi_CP");
            this.addChild(obj.name, obj);

            obj = new Static("stc_04","685","112","195","28",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_05","685","85","195","28",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("종료시간");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_06","688","115","124","22",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_value("20181012");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","598","115","85","22",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_cssclass("point");
            obj.set_text("A");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","814","115","63","22",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_value("13:22");
            obj.set_text("13:22");
            this.addChild(obj.name, obj);

            obj = new Static("stc_06","595","166","91","28",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_07","595","139","91","28",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("사용 활주로");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Static("stc_08","685","166","195","28",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09","685","139","195","28",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("기상");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01","598","169","85","22",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("34");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo02","688","169","189","22",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("구름많음");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("stc_10","595","193","285","28",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("사용 활주로");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Static("stc_11","595","220","285","109",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","597","222","281","105",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","595","329","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("15");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12","595","339","220","22",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("하번");
            obj.set_cssclass("sta_WF_Title02");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","595","357","100","7",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("7");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13","595","364","285","28",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("특이사항");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14","595","391","285","69",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea01","597","393","281","65",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            this.addChild(obj.name, obj);

            obj = new Static("stc_15","595","459","285","28",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Static("stc_16","595","486","285","69",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea02","597","488","281","65",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            this.addChild(obj.name, obj);

            obj = new Static("stc_17","595","554","285","28",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("하번시간");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Static("stc_18","595","581","285","28",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_00","598","584","124","22",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_value("20181012");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","724","584","105","22",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            this.addChild(obj.name, obj);

            obj = new Button("Button13","831","584","46","22",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("하번");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",900,630,this,function(p){});
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

        };
        this.loadIncludeScript("Popup_016.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
