(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Popup_005");
            this.set_titletext("차량및장비상세보기");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,485);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("DS_GridSample", this);
            obj._setContents("<ColumnInfo><Column id=\"Column25\" type=\"STRING\" size=\"256\"/><Column id=\"Column24\" type=\"STRING\" size=\"256\"/><Column id=\"Column23\" type=\"STRING\" size=\"256\"/><Column id=\"Column22\" type=\"STRING\" size=\"256\"/><Column id=\"Column21\" type=\"STRING\" size=\"256\"/><Column id=\"Column20\" type=\"STRING\" size=\"256\"/><Column id=\"Column19\" type=\"STRING\" size=\"256\"/><Column id=\"Column18\" type=\"STRING\" size=\"256\"/><Column id=\"Column17\" type=\"STRING\" size=\"256\"/><Column id=\"Column16\" type=\"STRING\" size=\"256\"/><Column id=\"Column15\" type=\"STRING\" size=\"256\"/><Column id=\"Column14\" type=\"STRING\" size=\"256\"/><Column id=\"Column13\" type=\"STRING\" size=\"256\"/><Column id=\"Column12\" type=\"STRING\" size=\"256\"/><Column id=\"Column11\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","20","20","200","22",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("차량및장비상세보기");
            obj.set_cssclass("sta_WF_Title01");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,"23","46","22","68",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("Button01",null,"23","46","22","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("stc_41","20","112","111","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_40","20","85","111","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("등록일");
            obj.set_cssclass("sta_WF_DetailTi_CP");
            this.addChild(obj.name, obj);

            obj = new Static("stc_42","20","60","220","22",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12","20","166","111","28",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13","20","139","111","28",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_DetailTi_CP");
            this.addChild(obj.name, obj);

            obj = new Static("stc_28","660","60","220","22",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Moving Arp Info");
            obj.set_cssclass("sta_WF_Title03");
            this.addChild(obj.name, obj);

            obj = new Static("stc_71","320","436","320","28",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_72","320","409","320","28",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_29","323","439","314","22",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Static("stc_75","660","150","220","22",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Etc Info");
            obj.set_cssclass("sta_WF_Title03");
            this.addChild(obj.name, obj);

            obj = new Static("stc_85","20","257","190","22",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("Maintenace IN/OUT Info");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","20","283","280","181",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"110\"/><Column size=\"110\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"입고일\"/><Cell col=\"2\" text=\"출고일\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static05",null,"20","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","0","20","20",null,null,"0",null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0",null,null,"20","0","0",null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","45",null,"5","0",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Button("Button07",null,"22","46","23","116",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("stc_00","130","112","170","29",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_02","133","115","164","22",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01","130","166","170","28",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_02","130","139","170","28",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("용도");
            obj.set_cssclass("sta_WF_DetailTi_CP");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","277","115","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_cssclass("btn_WF_EditSrch");
            this.addChild(obj.name, obj);

            obj = new Static("stc_03","130","85","170","28",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("업체");
            obj.set_cssclass("sta_WF_DetailTi_CP");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_01","23","115","105","22",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_cssclass("point");
            obj.set_value("20181012");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Static("stc_04","20","220","141","28",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_05","20","193","141","28",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("등록번호");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_05","23","223","53","22",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_value("000");
            obj.set_text("000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14","160","220","140","28",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_15","160","193","140","28",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("분류번호");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","133","169","164","22",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_cssclass("point");
            obj.set_text("업무용 1500-1999 CC");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo02","23","169","105","22",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_cssclass("point");
            obj.set_text("차량");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_00","78","223","24","22",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_value("1");
            obj.set_text("1");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_01","104","223","54","22",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_value("407");
            obj.set_text("407");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_03","189","223","43","22",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_value("000");
            obj.set_text("000");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_06","163","223","24","22",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_value("1");
            obj.set_text("1");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_08","234","223","63","22",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_value("407");
            obj.set_text("407");
            this.addChild(obj.name, obj);

            obj = new Static("stc_06","320","112","121","28",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_07","320","85","121","28",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("장비명");
            obj.set_cssclass("sta_WF_DetailTi_CP");
            this.addChild(obj.name, obj);

            obj = new Static("stc_08","320","60","277","22",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("Car & Equipment Detail Information");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09","320","166","240","28",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_10","320","139","240","28",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("제작사");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Static("stc_11","440","112","95","28",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_04","323","115","115","22",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_cssclass("point");
            obj.set_value("SM5(김대석)");
            obj.set_text("SM5(김대석)");
            this.addChild(obj.name, obj);

            obj = new Static("stc_16","559","166","81","28",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_17","559","139","81","28",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("제작년");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Static("stc_18","440","85","95","28",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("형식");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Static("stc_23","534","85","106","28",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("차종");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Static("stc_24","534","112","106","28",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_16","323","169","234","22",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_value("삼성");
            obj.set_text("삼성");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_17","562","169","75","22",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("407");
            this.addChild(obj.name, obj);

            obj = new Static("stc_19","320","220","81","28",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_20","320","193","81","28",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("총중량kg");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_07","323","223","75","22",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("407");
            this.addChild(obj.name, obj);

            obj = new Static("stc_21","400","220","81","28",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_22","400","193","81","28",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("최대적재kg");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_09","403","223","75","22",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("407");
            this.addChild(obj.name, obj);

            obj = new Static("stc_25","480","220","80","28",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_29","480","193","80","28",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("승차정원");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_10","483","223","74","22",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("407");
            this.addChild(obj.name, obj);

            obj = new Static("stc_30","559","220","81","28",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_33","559","193","81","28",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("안전점검");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Static("stc_34","320","274","81","28",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_35","320","247","81","28",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("중량kg");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_13","323","277","75","22",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("407");
            this.addChild(obj.name, obj);

            obj = new Static("stc_36","400","274","81","28",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_37","400","247","81","28",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_text("길이");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_15","403","277","75","22",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_text("407");
            this.addChild(obj.name, obj);

            obj = new Static("stc_38","480","274","80","28",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_39","480","247","80","28",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_text("폭");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_18","483","277","74","22",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_text("407");
            this.addChild(obj.name, obj);

            obj = new Static("stc_43","559","274","81","28",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_44","559","247","81","28",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_text("높이");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_19","562","277","75","22",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_text("407");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01","536","115","101","22",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_text("승용.승합차");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_12","443","115","89","22",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_value("e1m20-4A-0");
            obj.set_text("e1m20-4A-0");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo03","562","223","75","22",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("stc_45","320","328","210","28",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_46","320","301","210","28",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_text("차대번호");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Static("stc_47","529","328","111","28",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_48","529","301","111","28",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_text("검사예정일");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_20","323","331","204","22",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_value("KNMA4C2BM8P311080");
            obj.set_text("KNMA4C2BM8P311080");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_00","532","331","105","22",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_value("20181012");
            obj.set_dateformat("yyyy-MM-dd ");
            this.addChild(obj.name, obj);

            obj = new Static("stc_49","540","382","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_50","540","355","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_text("사용연료");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Static("stc_51","320","382","111","28",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_52","320","355","111","28",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_text("장비구분");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Static("stc_53","430","382","111","28",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_54","430","355","111","28",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_text("검사예정일");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_04","433","385","105","22",null,null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_value("20181012");
            obj.set_dateformat("yyyy-MM-dd ");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo04","323","385","105","22",null,null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo07","543","385","94","22",null,null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_text("휘발유");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("stc_56","660","112","91","28",null,null,null,null,null,null,this);
            obj.set_taborder("97");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_57","660","85","91","28",null,null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_text("전출여부");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Static("stc_58","750","112","115","28",null,null,null,null,null,null,this);
            obj.set_taborder("99");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_59","750","85","115","28",null,null,null,null,null,null,this);
            obj.set_taborder("100");
            obj.set_text("전출일자");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Static("stc_60","864","85","116","28",null,null,null,null,null,null,this);
            obj.set_taborder("101");
            obj.set_text("전출공항");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Static("stc_61","864","112","116","28",null,null,null,null,null,null,this);
            obj.set_taborder("102");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo05","866","115","111","22",null,null,null,null,null,null,this);
            obj.set_taborder("103");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox02","698","115","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_value("true");
            obj.set_tooltiptype("hover");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_02","753","115","109","22",null,null,null,null,null,null,this);
            obj.set_taborder("104");
            obj.set_value("20181012");
            obj.set_dateformat("yyyy-MM-dd ");
            this.addChild(obj.name, obj);

            obj = new Static("stc_26","768","202","107","28",null,null,null,null,null,null,this);
            obj.set_taborder("105");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_27","768","175","107","28",null,null,null,null,null,null,this);
            obj.set_taborder("106");
            obj.set_text("전출일자");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Static("stc_31","874","175","106","28",null,null,null,null,null,null,this);
            obj.set_taborder("107");
            obj.set_text("전출공항");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Static("stc_32","874","202","106","28",null,null,null,null,null,null,this);
            obj.set_taborder("108");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_03","771","205","101","22",null,null,null,null,null,null,this);
            obj.set_taborder("109");
            obj.set_value("20181012");
            obj.set_dateformat("yyyy-MM-dd ");
            this.addChild(obj.name, obj);

            obj = new Static("stc_62","660","202","109","28",null,null,null,null,null,null,this);
            obj.set_taborder("110");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_74","660","175","109","28",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("결항여부");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_05","663","205","103","22",null,null,null,null,null,null,this);
            obj.set_taborder("111");
            obj.set_value("20181012");
            obj.set_dateformat("yyyy-MM-dd ");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_11","877","205","100","22",null,null,null,null,null,null,this);
            obj.set_taborder("112");
            obj.set_text("407");
            this.addChild(obj.name, obj);

            obj = new Static("stc_63","768","256","212","28",null,null,null,null,null,null,this);
            obj.set_taborder("113");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_64","768","229","212","28",null,null,null,null,null,null,this);
            obj.set_taborder("114");
            obj.set_text("말소사유");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Static("stc_67","660","256","109","28",null,null,null,null,null,null,this);
            obj.set_taborder("115");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_68","660","229","109","28",null,null,null,null,null,null,this);
            obj.set_taborder("116");
            obj.set_text("말소일");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_07","663","259","103","22",null,null,null,null,null,null,this);
            obj.set_taborder("117");
            obj.set_value("20181012");
            obj.set_dateformat("yyyy-MM-dd ");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_14","771","259","205","22",null,null,null,null,null,null,this);
            obj.set_taborder("118");
            obj.set_text("407");
            this.addChild(obj.name, obj);

            obj = new Static("stc_55","660","293","151","22",null,null,null,null,null,null,this);
            obj.set_taborder("119");
            obj.set_text("File Info");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","660","319","320","145",null,null,null,null,null,null,this);
            obj.set_taborder("120");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"318\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"파일명\"/></Band><Band id=\"body\"><Cell/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button06",null,"294","22","22","44",null,null,null,null,null,this);
            obj.set_taborder("121");
            obj.set_cssclass("btn_WF_CalBtnP");
            this.addChild(obj.name, obj);

            obj = new Button("Button03",null,"294","22","22","20",null,null,null,null,null,this);
            obj.set_taborder("122");
            obj.set_cssclass("btn_WF_CalBtnM");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","254","258","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("123");
            obj.set_cssclass("btn_WF_CalBtnP");
            this.addChild(obj.name, obj);

            obj = new Button("Button05","278","258","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("124");
            obj.set_cssclass("btn_WF_CalBtnM");
            obj.set_text("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1000,485,this,function(p){});
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
        this.loadIncludeScript("Popup_005.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
