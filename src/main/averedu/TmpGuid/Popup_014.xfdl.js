(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Popup_014");
            this.set_titletext("사고접수현황 상세");
            if (Form == this.constructor)
            {
                this._setFormPosition(900,600);
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
            obj.set_text("사고접수현황 상세");
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

            obj = new Static("stc_41","20","112","131","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_40","20","85","131","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("접수시간");
            obj.set_cssclass("sta_WF_DetailTi_CP");
            this.addChild(obj.name, obj);

            obj = new Static("stc_42","20","60","220","22",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("시간");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_28","620","60","220","22",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("사고내용");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static05",null,"20","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","0","20","20",null,null,"0",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0",null,null,"20","0","0",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","45",null,"5","0",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("stc_00","150","112","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_03","150","85","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("종료시간");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_01","23","115","125","22",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("point");
            obj.set_value("20181012");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Static("stc_06","320","112","280","28",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_07","320","85","280","28",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("사고구분");
            obj.set_cssclass("sta_WF_DetailTi_CP");
            this.addChild(obj.name, obj);

            obj = new Static("stc_08","320","60","277","22",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("사고정보");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_56","620","85",null,"28","20",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_06","153","115","144","22",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_value("20181012");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","20","50","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("15");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("stc_65","20","202","141","28",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_66","20","175","141","28",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Static("stc_69","20","150","220","22",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("신고자");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_70","160","202","140","28",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_73","160","175","140","28",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("연락처");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","20","140","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("15");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_02","23","205","135","22",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("000");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_21","163","205","134","22",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01","20","256","280","28",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_02","20","229","280","28",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("소속(주소)");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_00","23","259","274","22",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_04","20","400","141","28",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_05","20","373","141","28",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("접수자");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12","20","294","220","22",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("사건처리 정보");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13","160","400","140","28",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14","160","373","140","28",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("출동인원");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","20","284","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("15");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_01","23","403","135","22",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("000");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_03","163","403","134","22",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_15","20","346","280","28",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_76","20","319","280","28",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("발생장소");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_05","23","349","274","22",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("000");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","323","115","274","22",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_cssclass("point");
            obj.set_text("항공기사고");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("stc_10","320","175","280","28",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Static("stc_17","320","229","141","28",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_18","320","202","141","28",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("공항내");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09","460","202","140","28",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("공항외");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Static("stc_11","460","229","140","28",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_00","384","233","16","22",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_direction("vertical");
            obj.set_innerdataset("ds_cmb");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_text("예");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_01","523","233","16","22",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_direction("vertical");
            obj.set_innerdataset("ds_cmb");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("stc_16","320","346","141","28",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_19","320","319","141","28",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("기종");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Static("stc_20","460","346","140","28",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_21","460","319","140","28",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("편명");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_04","323","349","135","22",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("000");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_06","463","349","134","22",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_22","320","400","141","28",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_23","320","373","141","28",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("풍향/풍속");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Static("stc_24","460","400","140","28",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_25","460","373","140","28",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("시정");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_07","323","403","135","22",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("000");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_08","463","403","134","22",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_29","320","454","141","28",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_30","320","427","141","28",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("온도(℃)");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Static("stc_33","460","454","140","28",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_34","460","427","140","28",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("활주로");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_09","323","457","135","22",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_text("000");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_10","463","457","134","22",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("000");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_11","623","88","254","22",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_26","620","112",null,"28","20",null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_12","623","115","254","22",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_text("000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_27","620","139",null,"28","20",null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_13","623","142","254","22",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_text("000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_31","620","166",null,"28","20",null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_14","623","169","254","22",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_text("000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_32","620","193",null,"28","20",null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_15","623","196","254","22",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_text("000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_35","620","294","220","22",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_text("조치내용(참고사항)");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_36","620","319",null,"28","20",null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_16","623","322","254","22",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_text("000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_37","620","346",null,"28","20",null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_17","623","349","254","22",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_text("000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_38","620","373",null,"28","20",null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_18","623","376","254","22",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_text("000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_39","620","400",null,"28","20",null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_19","623","403","254","22",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_text("000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_43","620","427",null,"28","20",null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_20","623","430","254","22",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_text("000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_44","20","492","220","22",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_text("사건처리 정보");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","20","482","320","15",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_text("15");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("stc_45","20","517","115","28",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_text("전차량");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Static("stc_46","20","544","115","28",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01","69","547","16","22",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_value("false");
            obj.set_tooltiptype("hover");
            this.addChild(obj.name, obj);

            obj = new Static("stc_47","134","517","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_48","134","517","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_text("소방차1호");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","252","520","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_value("false");
            obj.set_tooltiptype("hover");
            this.addChild(obj.name, obj);

            obj = new Static("stc_49","134","544","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("97");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_50","134","544","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_text("소방차6호");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox02","252","547","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("99");
            obj.set_value("false");
            obj.set_tooltiptype("hover");
            this.addChild(obj.name, obj);

            obj = new Static("stc_51","283","517","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("100");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox03","401","521","22","21",null,null,null,null,null,null,this);
            obj.set_taborder("101");
            obj.set_value("false");
            obj.set_tooltiptype("hover");
            this.addChild(obj.name, obj);

            obj = new Static("stc_52","283","544","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("102");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_53","283","544","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("103");
            obj.set_text("소방차6호");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox04","401","547","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("104");
            obj.set_value("false");
            obj.set_tooltiptype("hover");
            this.addChild(obj.name, obj);

            obj = new Static("stc_54","283","517","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("105");
            obj.set_text("소방차1호");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Static("stc_55","432","517","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("106");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox05","550","521","22","21",null,null,null,null,null,null,this);
            obj.set_taborder("107");
            obj.set_value("false");
            obj.set_tooltiptype("hover");
            this.addChild(obj.name, obj);

            obj = new Static("stc_57","432","544","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("108");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_58","432","544","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("109");
            obj.set_text("소방차6호");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox06","550","547","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("110");
            obj.set_value("false");
            obj.set_tooltiptype("hover");
            this.addChild(obj.name, obj);

            obj = new Static("stc_59","432","517","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("111");
            obj.set_text("소방차1호");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Static("stc_60","581","517","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("112");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox07","699","521","22","21",null,null,null,null,null,null,this);
            obj.set_taborder("113");
            obj.set_value("false");
            obj.set_tooltiptype("hover");
            this.addChild(obj.name, obj);

            obj = new Static("stc_61","581","544","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("114");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_62","581","544","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("115");
            obj.set_text("소방차6호");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox08","699","547","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("116");
            obj.set_value("false");
            obj.set_tooltiptype("hover");
            this.addChild(obj.name, obj);

            obj = new Static("stc_63","581","517","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("117");
            obj.set_text("소방차1호");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Static("stc_64","730","517",null,"28","20",null,null,null,null,null,this);
            obj.set_taborder("118");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox09","848","521","22","21",null,null,null,null,null,null,this);
            obj.set_taborder("119");
            obj.set_value("false");
            obj.set_tooltiptype("hover");
            this.addChild(obj.name, obj);

            obj = new Static("stc_67","730","544",null,"28","20",null,null,null,null,null,this);
            obj.set_taborder("120");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_68","730","544","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("121");
            obj.set_text("소방차6호");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox10","848","547","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("122");
            obj.set_value("false");
            obj.set_tooltiptype("hover");
            this.addChild(obj.name, obj);

            obj = new Static("stc_71","730","517","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("123");
            obj.set_text("소방차1호");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",900,600,this,function(p){});
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
        this.loadIncludeScript("Popup_014.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
