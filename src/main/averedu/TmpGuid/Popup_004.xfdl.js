(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Popup_004");
            this.set_titletext("일일운항일정 상세");
            if (Form == this.constructor)
            {
                this._setFormPosition(900,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("DS_GridSample", this);
            obj._setContents("<ColumnInfo><Column id=\"Column25\" type=\"STRING\" size=\"256\"/><Column id=\"Column24\" type=\"STRING\" size=\"256\"/><Column id=\"Column23\" type=\"STRING\" size=\"256\"/><Column id=\"Column22\" type=\"STRING\" size=\"256\"/><Column id=\"Column21\" type=\"STRING\" size=\"256\"/><Column id=\"Column20\" type=\"STRING\" size=\"256\"/><Column id=\"Column19\" type=\"STRING\" size=\"256\"/><Column id=\"Column18\" type=\"STRING\" size=\"256\"/><Column id=\"Column17\" type=\"STRING\" size=\"256\"/><Column id=\"Column16\" type=\"STRING\" size=\"256\"/><Column id=\"Column15\" type=\"STRING\" size=\"256\"/><Column id=\"Column14\" type=\"STRING\" size=\"256\"/><Column id=\"Column13\" type=\"STRING\" size=\"256\"/><Column id=\"Column12\" type=\"STRING\" size=\"256\"/><Column id=\"Column11\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","20","20","200","22",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("일일운항일정 상세 - 추가");
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

            obj = new Static("stc_41","20","112","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_40","20","85","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("항공사");
            obj.set_cssclass("sta_WF_DetailTi_CP");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_10","23","115","28","22",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Static("stc_42","20","60","220","22",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("출/도착 운항 정보");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_00","119","112","60","28",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01","119","85","60","28",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("편명");
            obj.set_cssclass("sta_WF_DetailTi_CP");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_00","122","115","54","22",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Static("stc_02","178","112","80","28",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_03","178","85","80","28",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("출도착");
            obj.set_cssclass("sta_WF_DetailTi_CP");
            this.addChild(obj.name, obj);

            obj = new Static("stc_04","257","112","90","28",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_05","257","85","90","28",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("상대공항");
            obj.set_cssclass("sta_WF_DetailTi_CP");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_02","260","115","84","22",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Static("stc_06","346","112","90","28",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_07","346","85","90","28",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("계획일자");
            obj.set_cssclass("sta_WF_DetailTi_CP");
            this.addChild(obj.name, obj);

            obj = new Static("stc_08","435","112","80","28",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09","435","85","80","28",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("계획시간");
            obj.set_cssclass("sta_WF_DetailTi_CP");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_04","438","115","74","22",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Static("stc_10","514","112","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_11","514","85","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("국내/국제");
            obj.set_cssclass("sta_WF_DetailTi_CP");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_06","53","115","64","22",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","181","115","74","22",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("point");
            obj.set_text("0");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_08","349","115","84","22",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("point");
            obj.set_tooltiptext("20181012");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01","517","115","114","22",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("point");
            obj.set_text("국내");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12","20","166","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13","20","139","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("등록기호");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_01","23","169","94","22",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14","119","166","60","28",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_15","119","139","60","28",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("기종");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_03","122","169","54","22",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            this.addChild(obj.name, obj);

            obj = new Static("stc_16","178","166","80","28",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_17","178","139","80","28",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("IATA");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Static("stc_18","257","166","90","28",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_19","257","139","90","28",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("ICAO");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_05","260","169","84","22",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            this.addChild(obj.name, obj);

            obj = new Static("stc_20","346","166","90","28",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_21","346","139","90","28",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("실운항일자");
            obj.set_cssclass("sta_WF_DetailTi_CP");
            this.addChild(obj.name, obj);

            obj = new Static("stc_22","435","166","80","28",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_23","435","139","80","28",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("예정시간");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_07","438","169","74","22",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            this.addChild(obj.name, obj);

            obj = new Static("stc_24","514","166","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_25","514","139","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("실제시간     부정기");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_00","349","169","84","22",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_tooltiptext("20181012");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_08","181","169","74","22",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_09","517","169","64","22",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","601","169","14","22",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_value("true");
            obj.set_tooltiptype("hover");
            this.addChild(obj.name, obj);

            obj = new Static("stc_26","654","85",null,"28","20",null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_27","654","85","90","28",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("항공사");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_28","654","60","220","22",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("출/도착 운항 정보");
            obj.set_cssclass("sta_WF_Title03");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_11","746","88","131","22",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","322","170","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_cssclass("btn_WF_EditSrch");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","321","116","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_cssclass("btn_WF_EditSrch");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","95","115","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_cssclass("btn_WF_EditSrch");
            this.addChild(obj.name, obj);

            obj = new Static("stc_29","20","255","159","28",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_30","20","228","159","28",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("운항서비스");
            obj.set_cssclass("sta_WF_DetailTi_CP");
            this.addChild(obj.name, obj);

            obj = new Static("stc_33","20","203","220","22",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("출/도착 운항 정보");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_36","178","255","159","28",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_37","178","228","159","28",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("운항목적");
            obj.set_cssclass("sta_WF_DetailTi_CP");
            this.addChild(obj.name, obj);

            obj = new Static("stc_43","336","255","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_44","336","228","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("터미널");
            obj.set_cssclass("sta_WF_DetailTi_CP");
            this.addChild(obj.name, obj);

            obj = new Static("stc_45","435","255","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_46","435","228","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("게이트");
            obj.set_cssclass("sta_WF_DetailTi_CP");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_16","438","258","94","22",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Static("stc_47","534","255","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_48","534","228","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("활주로");
            obj.set_cssclass("sta_WF_DetailTi_CP");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo02","23","258","153","22",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_cssclass("point");
            obj.set_text("여객기 엑스트라");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo03","537","258","94","22",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_cssclass("point");
            obj.set_text("국내");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("stc_49","20","309","80","28",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_50","20","282","80","28",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_text("주기장1");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_18","23","312","74","22",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            this.addChild(obj.name, obj);

            obj = new Static("stc_51","99","309","80","28",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_52","99","282","80","28",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_text("접현");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_19","102","312","74","22",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            this.addChild(obj.name, obj);

            obj = new Static("stc_53","178","309","80","28",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_54","178","282","80","28",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_text("이현");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Static("stc_55","257","309","80","28",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_56","257","282","80","28",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_text("주기장2");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_20","260","312","74","22",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            this.addChild(obj.name, obj);

            obj = new Static("stc_57","336","309","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_58","336","282","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_text("접현");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Static("stc_61","485","309","149","28",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_62","485","282","149","28",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_text("이현");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_22","181","312","74","22",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_12","181","258","47","22",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_15","230","258","104","22",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_cssclass("point");
            obj.set_displaynulltext("정규취항");
            this.addChild(obj.name, obj);

            obj = new Button("Button06","311","259","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_cssclass("btn_WF_EditSrch");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo04","339","258","94","22",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_cssclass("point");
            obj.set_text("국내");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_13","339","312","144","22",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_17","488","312","143","22",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            this.addChild(obj.name, obj);

            obj = new Static("stc_34","20","363","80","28",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_35","20","336","80","28",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_text("상대항공");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_21","23","366","74","22",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_readonly("true");
            obj.set_displaynulltext("GMP");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_38","99","363","80","28",null,null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_39","99","336","80","28",null,null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_text("출도착");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_23","102","366","74","22",null,null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_readonly("true");
            obj.set_displaynulltext("A");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_59","178","363","80","28",null,null,null,null,null,null,this);
            obj.set_taborder("97");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_60","178","336","80","28",null,null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_text("계획시간");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Static("stc_63","257","363","80","28",null,null,null,null,null,null,this);
            obj.set_taborder("99");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_64","257","336","80","28",null,null,null,null,null,null,this);
            obj.set_taborder("100");
            obj.set_text("항공사");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_24","290","366","44","22",null,null,null,null,null,null,this);
            obj.set_taborder("101");
            this.addChild(obj.name, obj);

            obj = new Static("stc_65","336","363","80","28",null,null,null,null,null,null,this);
            obj.set_taborder("102");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_66","336","336","80","28",null,null,null,null,null,null,this);
            obj.set_taborder("103");
            obj.set_text("편명");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Static("stc_67","415","363","219","28",null,null,null,null,null,null,this);
            obj.set_taborder("104");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_68","415","336","219","28",null,null,null,null,null,null,this);
            obj.set_taborder("105");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_25","181","366","74","22",null,null,null,null,null,null,this);
            obj.set_taborder("106");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_26","339","366","74","22",null,null,null,null,null,null,this);
            obj.set_taborder("107");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_69","20","417","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("108");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_70","20","390","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("109");
            obj.set_text("FOIS 수신불가");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Static("stc_71","139","417","495","28",null,null,null,null,null,null,this);
            obj.set_taborder("110");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_72","139","390","495","28",null,null,null,null,null,null,this);
            obj.set_taborder("111");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_29","142","420","489","22",null,null,null,null,null,null,this);
            obj.set_taborder("112");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01","73","420","14","22",null,null,null,null,null,null,this);
            obj.set_taborder("113");
            obj.set_value("true");
            obj.set_tooltiptype("hover");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_27","260","366","28","22",null,null,null,null,null,null,this);
            obj.set_taborder("114");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_31","654","112",null,"28","20",null,null,null,null,null,this);
            obj.set_taborder("115");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_32","654","112","90","28",null,null,null,null,null,null,this);
            obj.set_taborder("116");
            obj.set_text("편명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_14","746","115","107","22",null,null,null,null,null,null,this);
            obj.set_taborder("117");
            this.addChild(obj.name, obj);

            obj = new Static("stc_73","654","174",null,"28","20",null,null,null,null,null,this);
            obj.set_taborder("118");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_74","654","174","90","28",null,null,null,null,null,null,this);
            obj.set_taborder("119");
            obj.set_text("결항여부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_75","654","149","220","22",null,null,null,null,null,null,this);
            obj.set_taborder("120");
            obj.set_text("결항 정보");
            obj.set_cssclass("sta_WF_Title03");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox02","755","177","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("121");
            obj.set_value("true");
            obj.set_tooltiptype("hover");
            this.addChild(obj.name, obj);

            obj = new Static("stc_76","654","236",null,"28","20",null,null,null,null,null,this);
            obj.set_taborder("122");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_77","654","236","90","28",null,null,null,null,null,null,this);
            obj.set_taborder("123");
            obj.set_text("회항유형");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_78","654","211","220","22",null,null,null,null,null,null,this);
            obj.set_taborder("124");
            obj.set_text("회항 정보");
            obj.set_cssclass("sta_WF_Title03");
            this.addChild(obj.name, obj);

            obj = new Static("stc_79","654","297",null,"28","20",null,null,null,null,null,this);
            obj.set_taborder("125");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_80","654","297","90","28",null,null,null,null,null,null,this);
            obj.set_taborder("126");
            obj.set_text("지연여부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_81","654","273","220","22",null,null,null,null,null,null,this);
            obj.set_taborder("127");
            obj.set_text("지연 정보");
            obj.set_cssclass("sta_WF_Title03");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox04","755","300","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("128");
            obj.set_value("true");
            obj.set_tooltiptype("hover");
            this.addChild(obj.name, obj);

            obj = new Static("stc_82","654","358",null,"28","20",null,null,null,null,null,this);
            obj.set_taborder("129");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_83","654","358","90","28",null,null,null,null,null,null,this);
            obj.set_taborder("130");
            obj.set_text("SST");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_84","654","334","220","22",null,null,null,null,null,null,this);
            obj.set_taborder("131");
            obj.set_text("코드쉐어 정보");
            obj.set_cssclass("sta_WF_Title03");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo05","746","239","131","22",null,null,null,null,null,null,this);
            obj.set_taborder("132");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo06","746","361","131","22",null,null,null,null,null,null,this);
            obj.set_taborder("133");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Button("Button05","855","115","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("134");
            obj.set_cssclass("btn_WF_PopSrch");
            this.addChild(obj.name, obj);

            obj = new Static("stc_85","20","454","480","22",null,null,null,null,null,null,this);
            obj.set_taborder("135");
            obj.set_text("입출항 신고서 (여객정보:명/화물정보 : kg / 수하물수량 : 개)");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_87","20","672","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("136");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_88","20","645","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("137");
            obj.set_text("통과객");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_28","23","675","124","22",null,null,null,null,null,null,this);
            obj.set_taborder("138");
            this.addChild(obj.name, obj);

            obj = new Static("stc_89","149","672","128","28",null,null,null,null,null,null,this);
            obj.set_taborder("139");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_30","153","675","121","22",null,null,null,null,null,null,this);
            obj.set_taborder("140");
            this.addChild(obj.name, obj);

            obj = new Static("stc_90","149","645","128","28",null,null,null,null,null,null,this);
            obj.set_taborder("141");
            obj.set_text("화물중량");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Static("stc_91","276","672","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("142");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_31","280","676","113","20",null,null,null,null,null,null,this);
            obj.set_taborder("143");
            this.addChild(obj.name, obj);

            obj = new Static("stc_92","276","645","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("144");
            obj.set_text("기장");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Static("stc_93","395","672","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("145");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_32","400","676","112","20",null,null,null,null,null,null,this);
            obj.set_taborder("146");
            this.addChild(obj.name, obj);

            obj = new Static("stc_94","395","645","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("147");
            obj.set_text("좌석수");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Static("stc_95","514","672","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("148");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_33","519","676","113","20",null,null,null,null,null,null,this);
            obj.set_taborder("149");
            this.addChild(obj.name, obj);

            obj = new Static("stc_96","514","645","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("150");
            obj.set_text("승무원수");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","20","480","614","166",null,null,null,null,null,null,this);
            obj.set_taborder("151");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"40\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\"/><Cell col=\"2\" text=\"1\"/><Cell col=\"3\" text=\"2\"/><Cell col=\"4\" text=\"3\"/><Cell col=\"5\" text=\"4\"/><Cell col=\"6\" text=\"5\"/><Cell col=\"7\" text=\"계\"/></Band><Band id=\"body\"><Cell text=\"경유지\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static05",null,"20","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("152");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("153");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","0","20","20",null,null,"0",null,null,null,null,this);
            obj.set_taborder("154");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0",null,null,"20","0","0",null,null,null,null,this);
            obj.set_taborder("155");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","634","50","20",null,null,"20",null,null,null,null,this);
            obj.set_taborder("156");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","400","50","180","35",null,null,null,null,null,null,this);
            obj.set_taborder("157");
            obj.set_text("35");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static02",null,"45","200","5","20",null,null,null,null,null,this);
            obj.set_taborder("158");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","249","20","240","30",null,null,null,null,null,null,this);
            obj.set_taborder("159");
            obj.set_text("30");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","300","193","90","35",null,null,null,null,null,null,this);
            obj.set_taborder("160");
            obj.set_text("35");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","460","445","90","35",null,null,null,null,null,null,this);
            obj.set_taborder("161");
            obj.set_text("35");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","780","50","20","34",null,null,null,null,null,null,this);
            obj.set_taborder("162");
            obj.set_text("35");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","780","141","20","33",null,null,null,null,null,null,this);
            obj.set_taborder("163");
            obj.set_text("35");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","780","202","20","34",null,null,null,null,null,null,this);
            obj.set_taborder("164");
            obj.set_text("35");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","780","264","20","33",null,null,null,null,null,null,this);
            obj.set_taborder("165");
            obj.set_text("35");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","780","325","20","33",null,null,null,null,null,null,this);
            obj.set_taborder("166");
            obj.set_text("35");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",900,720,this,function(p){});
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
        this.loadIncludeScript("Popup_004.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
