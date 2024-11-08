(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("form");
            this.set_titletext("화면수평 버튼사용접기/펼치기");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_form01","0","0",null,"660","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("#f7f7f7");
            this.addChild(obj.name, obj);

            obj = new Button("btn_toggle01",null,"0","26","26","0",null,null,null,null,null,this.div_form01.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_ShuttleT");
            obj.set_visible("true");
            obj.set_text("");
            this.div_form01.addChild(obj.name, obj);

            obj = new Static("Static108","0","-1","128","29",null,null,null,null,null,null,this.div_form01.form);
            obj.set_taborder("1");
            obj.set_text("임차기본정보1");
            obj.set_cssclass("sta_WF_Title01");
            this.div_form01.addChild(obj.name, obj);

            obj = new Static("stc_11","15","49",null,"28","15",null,null,null,null,null,this.div_form01.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_DetailBg");
            this.div_form01.addChild(obj.name, obj);

            obj = new Static("stc_10","15","49","150","28",null,null,null,null,null,null,this.div_form01.form);
            obj.set_taborder("3");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_DetailTi");
            this.div_form01.addChild(obj.name, obj);

            obj = new Combo("cbo_00","167","52","300","22",null,null,null,null,null,null,this.div_form01.form);
            obj.set_taborder("4");
            obj.set_innerdataset("combo");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.div_form01.addChild(obj.name, obj);

            obj = new Static("stc_13","15","76",null,"28","15",null,null,null,null,null,this.div_form01.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_DetailBg");
            this.div_form01.addChild(obj.name, obj);

            obj = new Static("stc_12","15","76","150","28",null,null,null,null,null,null,this.div_form01.form);
            obj.set_taborder("6");
            obj.set_text("가나다라마바사아자차");
            obj.set_cssclass("sta_WF_DetailTi");
            this.div_form01.addChild(obj.name, obj);

            obj = new Edit("edt_02","167","79","472","22",null,null,null,null,null,null,this.div_form01.form);
            obj.set_taborder("7");
            this.div_form01.addChild(obj.name, obj);

            obj = new Static("stc_14","641","76","150","28",null,null,null,null,null,null,this.div_form01.form);
            obj.set_taborder("8");
            obj.set_text("가나다라마바사아자차");
            obj.set_cssclass("sta_WF_DetailTi");
            this.div_form01.addChild(obj.name, obj);

            obj = new Edit("edt_03","793","79",null,"22","378",null,null,null,null,null,this.div_form01.form);
            obj.set_taborder("9");
            this.div_form01.addChild(obj.name, obj);

            obj = new Static("stc_15","641","49","150","28",null,null,null,null,null,null,this.div_form01.form);
            obj.set_taborder("10");
            obj.set_text("가나다라마바사아자차");
            obj.set_cssclass("sta_WF_DetailTi");
            this.div_form01.addChild(obj.name, obj);

            obj = new Radio("rdo_00","793","52","120","22",null,null,null,null,null,null,this.div_form01.form);
            obj.set_taborder("11");
            obj.set_direction("vertical");
            obj.set_innerdataset("ds_cmb00");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_text("예");
            obj.set_value("0");
            obj.set_index("0");
            this.div_form01.addChild(obj.name, obj);

            obj = new Static("stc_09","15","27","330","22",null,null,null,null,null,null,this.div_form01.form);
            obj.set_taborder("12");
            obj.set_text("1단일때");
            obj.set_cssclass("sta_WF_Title02");
            this.div_form01.addChild(obj.name, obj);

            obj = new Static("stc_07","14","107","330","22",null,null,null,null,null,null,this.div_form01.form);
            obj.set_taborder("13");
            obj.set_text("2단일때");
            obj.set_cssclass("sta_WF_Title02");
            this.div_form01.addChild(obj.name, obj);

            obj = new Static("stc_00","15","132",null,"28","15",null,null,null,null,null,this.div_form01.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_DetailBg");
            this.div_form01.addChild(obj.name, obj);

            obj = new Static("stc_01","15","132","150","28",null,null,null,null,null,null,this.div_form01.form);
            obj.set_taborder("15");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_DetailTi");
            this.div_form01.addChild(obj.name, obj);

            obj = new Combo("cbo_01","167","135","300","22",null,null,null,null,null,null,this.div_form01.form);
            obj.set_taborder("16");
            obj.set_innerdataset("combo");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.div_form01.addChild(obj.name, obj);

            obj = new Static("stc_02","15","159",null,"28","15",null,null,null,null,null,this.div_form01.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_DetailBg");
            this.div_form01.addChild(obj.name, obj);

            obj = new Static("stc_03","15","159","150","28",null,null,null,null,null,null,this.div_form01.form);
            obj.set_taborder("18");
            obj.set_text("가나다라마바사아자차");
            obj.set_cssclass("sta_WF_DetailTi");
            this.div_form01.addChild(obj.name, obj);

            obj = new Edit("edt_00","167","162","472","22",null,null,null,null,null,null,this.div_form01.form);
            obj.set_taborder("19");
            this.div_form01.addChild(obj.name, obj);

            obj = new Static("stc_04","641","159","150","28",null,null,null,null,null,null,this.div_form01.form);
            obj.set_taborder("20");
            obj.set_text("가나다라마바사아자차");
            obj.set_cssclass("sta_WF_DetailTi");
            this.div_form01.addChild(obj.name, obj);

            obj = new Edit("edt_01","793","162",null,"22","378",null,null,null,null,null,this.div_form01.form);
            obj.set_taborder("21");
            this.div_form01.addChild(obj.name, obj);

            obj = new Static("stc_05","641","132","150","28",null,null,null,null,null,null,this.div_form01.form);
            obj.set_taborder("22");
            obj.set_text("가나다라마바사아자차");
            obj.set_cssclass("sta_WF_DetailTi");
            this.div_form01.addChild(obj.name, obj);

            obj = new Radio("rdo_01","793","135","120","22",null,null,null,null,null,null,this.div_form01.form);
            obj.set_taborder("23");
            obj.set_direction("vertical");
            obj.set_innerdataset("ds_cmb00");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_text("예");
            obj.set_value("0");
            obj.set_index("0");
            this.div_form01.addChild(obj.name, obj);

            obj = new Static("stc_16","14","215","330","22",null,null,null,null,null,null,this.div_form01.form);
            obj.set_taborder("24");
            obj.set_text("3단일때");
            obj.set_cssclass("sta_WF_Title02");
            this.div_form01.addChild(obj.name, obj);

            obj = new Static("stc_17","15","240",null,"28","15",null,null,null,null,null,this.div_form01.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_DetailBg");
            this.div_form01.addChild(obj.name, obj);

            obj = new Static("stc_18","15","240","150","28",null,null,null,null,null,null,this.div_form01.form);
            obj.set_taborder("26");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_DetailTi");
            this.div_form01.addChild(obj.name, obj);

            obj = new Static("stc_19","15","267",null,"28","15",null,null,null,null,null,this.div_form01.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_DetailBg");
            this.div_form01.addChild(obj.name, obj);

            obj = new Static("stc_20","15","267","150","28",null,null,null,null,null,null,this.div_form01.form);
            obj.set_taborder("28");
            obj.set_text("가나다라마바사아자차");
            obj.set_cssclass("sta_WF_DetailTi");
            this.div_form01.addChild(obj.name, obj);

            obj = new Edit("edt_04","167","270","260","22",null,null,null,null,null,null,this.div_form01.form);
            obj.set_taborder("29");
            this.div_form01.addChild(obj.name, obj);

            obj = new Static("stc_21","429","267","150","28",null,null,null,null,null,null,this.div_form01.form);
            obj.set_taborder("30");
            obj.set_text("가나다라마바사아자차");
            obj.set_cssclass("sta_WF_DetailTi");
            this.div_form01.addChild(obj.name, obj);

            obj = new Static("stc_22","429","240","150","28",null,null,null,null,null,null,this.div_form01.form);
            obj.set_taborder("31");
            obj.set_text("가나다라마바사아자차");
            obj.set_cssclass("sta_WF_DetailTi");
            this.div_form01.addChild(obj.name, obj);

            obj = new Static("stc_23","14","323","330","22",null,null,null,null,null,null,this.div_form01.form);
            obj.set_taborder("32");
            obj.set_text("4단일때");
            obj.set_cssclass("sta_WF_Title02");
            this.div_form01.addChild(obj.name, obj);

            obj = new Static("stc_24","15","348",null,"28","15",null,null,null,null,null,this.div_form01.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_DetailBg");
            this.div_form01.addChild(obj.name, obj);

            obj = new Static("stc_25","15","348","150","28",null,null,null,null,null,null,this.div_form01.form);
            obj.set_taborder("34");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_DetailTi");
            this.div_form01.addChild(obj.name, obj);

            obj = new Combo("cbo_02","167","351","159","22",null,null,null,null,null,null,this.div_form01.form);
            obj.set_taborder("35");
            obj.set_innerdataset("combo");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.div_form01.addChild(obj.name, obj);

            obj = new Static("stc_26","15","375",null,"28","15",null,null,null,null,null,this.div_form01.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_DetailBg");
            this.div_form01.addChild(obj.name, obj);

            obj = new Static("stc_27","15","375","150","28",null,null,null,null,null,null,this.div_form01.form);
            obj.set_taborder("37");
            obj.set_text("가나다라마바사아자차");
            obj.set_cssclass("sta_WF_DetailTi");
            this.div_form01.addChild(obj.name, obj);

            obj = new Edit("edt_05","167","378","159","22",null,null,null,null,null,null,this.div_form01.form);
            obj.set_taborder("38");
            this.div_form01.addChild(obj.name, obj);

            obj = new Static("stc_28","641","375","150","28",null,null,null,null,null,null,this.div_form01.form);
            obj.set_taborder("39");
            obj.set_text("가나다라마바사아자차");
            obj.set_cssclass("sta_WF_DetailTi");
            this.div_form01.addChild(obj.name, obj);

            obj = new Edit("edt_06","793","378","159","22",null,null,null,null,null,null,this.div_form01.form);
            obj.set_taborder("40");
            this.div_form01.addChild(obj.name, obj);

            obj = new Static("stc_29","641","348","150","28",null,null,null,null,null,null,this.div_form01.form);
            obj.set_taborder("41");
            obj.set_text("가나다라마바사아자차");
            obj.set_cssclass("sta_WF_DetailTi");
            this.div_form01.addChild(obj.name, obj);

            obj = new Radio("rdo_02","793","351","120","22",null,null,null,null,null,null,this.div_form01.form);
            obj.set_taborder("42");
            obj.set_direction("vertical");
            obj.set_innerdataset("ds_cmb00");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_text("예");
            obj.set_value("0");
            obj.set_index("0");
            this.div_form01.addChild(obj.name, obj);

            obj = new Static("stc_30","842","267","150","28",null,null,null,null,null,null,this.div_form01.form);
            obj.set_taborder("43");
            obj.set_text("가나다라마바사아자차");
            obj.set_cssclass("sta_WF_DetailTi");
            this.div_form01.addChild(obj.name, obj);

            obj = new Static("stc_35","842","240","150","28",null,null,null,null,null,null,this.div_form01.form);
            obj.set_taborder("44");
            obj.set_text("가나다라마바사아자차");
            obj.set_cssclass("sta_WF_DetailTi");
            this.div_form01.addChild(obj.name, obj);

            obj = new Edit("edt_07","581","270","259","22",null,null,null,null,null,null,this.div_form01.form);
            obj.set_taborder("45");
            this.div_form01.addChild(obj.name, obj);

            obj = new Edit("edt_08","994","270",null,"22","378",null,null,null,null,null,this.div_form01.form);
            obj.set_taborder("46");
            this.div_form01.addChild(obj.name, obj);

            obj = new Spin("spn_00","994","243","100","22",null,null,null,null,null,null,this.div_form01.form);
            obj.set_taborder("47");
            obj.set_value("100");
            this.div_form01.addChild(obj.name, obj);

            obj = new CheckBox("chk_01","581","243","60","22",null,null,null,null,null,null,this.div_form01.form);
            obj.set_taborder("48");
            obj.set_text("체크");
            obj.set_tooltiptype("hover");
            obj.set_value("true");
            this.div_form01.addChild(obj.name, obj);

            obj = new CheckBox("chk_00","641","242","60","22",null,null,null,null,null,null,this.div_form01.form);
            obj.set_taborder("49");
            obj.set_text("체크");
            obj.set_tooltiptype("hover");
            this.div_form01.addChild(obj.name, obj);

            obj = new Calendar("cal_00","167","243","100","22",null,null,null,null,null,null,this.div_form01.form);
            obj.set_taborder("50");
            obj.set_value("20180313");
            this.div_form01.addChild(obj.name, obj);

            obj = new Static("stc_36","328","348","150","28",null,null,null,null,null,null,this.div_form01.form);
            obj.set_taborder("51");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_DetailTi");
            this.div_form01.addChild(obj.name, obj);

            obj = new Static("stc_37","328","375","150","28",null,null,null,null,null,null,this.div_form01.form);
            obj.set_taborder("52");
            obj.set_text("가나다라마바사아자차");
            obj.set_cssclass("sta_WF_DetailTi");
            this.div_form01.addChild(obj.name, obj);

            obj = new Edit("edt_09","480","378","159","22",null,null,null,null,null,null,this.div_form01.form);
            obj.set_taborder("53");
            this.div_form01.addChild(obj.name, obj);

            obj = new Radio("rdo_03","1106","351","120","22",null,null,null,null,null,null,this.div_form01.form);
            obj.set_taborder("54");
            obj.set_direction("vertical");
            obj.set_innerdataset("ds_cmb00");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_text("예");
            obj.set_value("0");
            obj.set_index("0");
            this.div_form01.addChild(obj.name, obj);

            obj = new Static("stc_38","954","375","150","28",null,null,null,null,null,null,this.div_form01.form);
            obj.set_taborder("55");
            obj.set_text("가나다라마바사아자차");
            obj.set_cssclass("sta_WF_DetailTi");
            this.div_form01.addChild(obj.name, obj);

            obj = new Edit("edt_10","1106","378",null,"22","378",null,null,null,null,null,this.div_form01.form);
            obj.set_taborder("56");
            this.div_form01.addChild(obj.name, obj);

            obj = new Static("stc_39","954","348","150","28",null,null,null,null,null,null,this.div_form01.form);
            obj.set_taborder("57");
            obj.set_text("가나다라마바사아자차");
            obj.set_cssclass("sta_WF_DetailTi");
            this.div_form01.addChild(obj.name, obj);

            obj = new MaskEdit("msk_00","480","351","159","22",null,null,null,null,null,null,this.div_form01.form);
            obj.set_taborder("58");
            obj.set_value("100,000");
            this.div_form01.addChild(obj.name, obj);

            obj = new Div("div_form02","0","div_form01:20",null,"660","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#f7f7f7");
            this.addChild(obj.name, obj);

            obj = new Button("btn_toggle02",null,"0","26","26","0",null,null,null,null,null,this.div_form02.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_ShuttleT");
            this.div_form02.addChild(obj.name, obj);

            obj = new Static("Static108","0","2","128","29",null,null,null,null,null,null,this.div_form02.form);
            obj.set_taborder("1");
            obj.set_text("임차기본정보2");
            obj.set_cssclass("sta_WF_Title01");
            this.div_form02.addChild(obj.name, obj);

            obj = new Static("stc_11","15","49",null,"28","15",null,null,null,null,null,this.div_form02.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_DetailBg");
            this.div_form02.addChild(obj.name, obj);

            obj = new Static("stc_10","15","49","150","28",null,null,null,null,null,null,this.div_form02.form);
            obj.set_taborder("3");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_DetailTi");
            this.div_form02.addChild(obj.name, obj);

            obj = new Combo("cbo_00","167","52","300","22",null,null,null,null,null,null,this.div_form02.form);
            obj.set_taborder("4");
            obj.set_innerdataset("combo");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.div_form02.addChild(obj.name, obj);

            obj = new Static("stc_13","15","76",null,"28","15",null,null,null,null,null,this.div_form02.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_DetailBg");
            this.div_form02.addChild(obj.name, obj);

            obj = new Static("stc_12","15","76","150","28",null,null,null,null,null,null,this.div_form02.form);
            obj.set_taborder("6");
            obj.set_text("가나다라마바사아자차");
            obj.set_cssclass("sta_WF_DetailTi");
            this.div_form02.addChild(obj.name, obj);

            obj = new Edit("edt_02","167","79","472","22",null,null,null,null,null,null,this.div_form02.form);
            obj.set_taborder("7");
            this.div_form02.addChild(obj.name, obj);

            obj = new Static("stc_14","641","76","150","28",null,null,null,null,null,null,this.div_form02.form);
            obj.set_taborder("8");
            obj.set_text("가나다라마바사아자차");
            obj.set_cssclass("sta_WF_DetailTi");
            this.div_form02.addChild(obj.name, obj);

            obj = new Edit("edt_03","793","79",null,"22","378",null,null,null,null,null,this.div_form02.form);
            obj.set_taborder("9");
            this.div_form02.addChild(obj.name, obj);

            obj = new Static("stc_15","641","49","150","28",null,null,null,null,null,null,this.div_form02.form);
            obj.set_taborder("10");
            obj.set_text("가나다라마바사아자차");
            obj.set_cssclass("sta_WF_DetailTi");
            this.div_form02.addChild(obj.name, obj);

            obj = new Radio("rdo_00","793","52","120","22",null,null,null,null,null,null,this.div_form02.form);
            obj.set_taborder("11");
            obj.set_direction("vertical");
            obj.set_innerdataset("ds_cmb00");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_text("예");
            obj.set_value("0");
            obj.set_index("0");
            this.div_form02.addChild(obj.name, obj);

            obj = new Static("stc_09","15","27","330","22",null,null,null,null,null,null,this.div_form02.form);
            obj.set_taborder("12");
            obj.set_text("1단일때");
            obj.set_cssclass("sta_WF_Title02");
            this.div_form02.addChild(obj.name, obj);

            obj = new Div("div_form03","0","div_form02:20",null,"227","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("#f7f7f7");
            this.addChild(obj.name, obj);

            obj = new Button("btn_toggle03",null,"0","26","26","0",null,null,null,null,null,this.div_form03.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_ShuttleT");
            this.div_form03.addChild(obj.name, obj);

            obj = new Static("Static108","0","2","128","29",null,null,null,null,null,null,this.div_form03.form);
            obj.set_taborder("1");
            obj.set_text("기타정보");
            obj.set_cssclass("sta_WF_Title01");
            this.div_form03.addChild(obj.name, obj);

            obj = new Static("stc_11","15","49",null,"28","15",null,null,null,null,null,this.div_form03.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_DetailBg");
            this.div_form03.addChild(obj.name, obj);

            obj = new Static("stc_10","15","49","150","28",null,null,null,null,null,null,this.div_form03.form);
            obj.set_taborder("3");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_DetailTi");
            this.div_form03.addChild(obj.name, obj);

            obj = new Combo("cbo_00","167","52","300","22",null,null,null,null,null,null,this.div_form03.form);
            obj.set_taborder("4");
            obj.set_innerdataset("combo");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.div_form03.addChild(obj.name, obj);

            obj = new Static("stc_13","15","76",null,"28","15",null,null,null,null,null,this.div_form03.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_DetailBg");
            this.div_form03.addChild(obj.name, obj);

            obj = new Static("stc_12","15","76","150","28",null,null,null,null,null,null,this.div_form03.form);
            obj.set_taborder("6");
            obj.set_text("가나다라마바사아자차");
            obj.set_cssclass("sta_WF_DetailTi");
            this.div_form03.addChild(obj.name, obj);

            obj = new Edit("edt_02","167","79","472","22",null,null,null,null,null,null,this.div_form03.form);
            obj.set_taborder("7");
            this.div_form03.addChild(obj.name, obj);

            obj = new Static("stc_14","641","76","150","28",null,null,null,null,null,null,this.div_form03.form);
            obj.set_taborder("8");
            obj.set_text("가나다라마바사아자차");
            obj.set_cssclass("sta_WF_DetailTi");
            this.div_form03.addChild(obj.name, obj);

            obj = new Edit("edt_03","793","79",null,"22","378",null,null,null,null,null,this.div_form03.form);
            obj.set_taborder("9");
            this.div_form03.addChild(obj.name, obj);

            obj = new Static("stc_15","641","49","150","28",null,null,null,null,null,null,this.div_form03.form);
            obj.set_taborder("10");
            obj.set_text("가나다라마바사아자차");
            obj.set_cssclass("sta_WF_DetailTi");
            this.div_form03.addChild(obj.name, obj);

            obj = new Radio("rdo_00","793","52","120","22",null,null,null,null,null,null,this.div_form03.form);
            obj.set_taborder("11");
            obj.set_direction("vertical");
            obj.set_innerdataset("ds_cmb00");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_text("예");
            obj.set_value("0");
            obj.set_index("0");
            this.div_form03.addChild(obj.name, obj);

            obj = new Static("stc_09","15","27","330","22",null,null,null,null,null,null,this.div_form03.form);
            obj.set_taborder("12");
            obj.set_text("1단일때");
            obj.set_cssclass("sta_WF_Title02");
            this.div_form03.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SML021BtnHorizontalFoldDivListM01.xfdl", function() {
         /**
        *  물건관리조회 - 임차조건
        *  @MenuPath
        *  @FileName       MSSR000004T02.xfdl
        *  @Creator        jiback
        *  @CreateDate     2018.2.22
        *  @LastModifier
        *  @LastModifyDate
        *  @Version        1.0
        *  @Outline
        *  @Description
        ************** 소스 수정 이력 *************************************************
        *    date          		Modifier            Description
        *******************************************************************************
        *  2018.2.22     	    jiback             최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfn_formOnload(obj.e);

        	this.fn_formInit();
        };


        this.fn_formInit = function()
        {
        	//div scroll 제거
        	this.div_form01.form.set_scrollbartype("none");
        	this.div_form02.form.set_scrollbartype("none");
        	this.div_form03.form.set_scrollbartype("none");

        	this.div_form01.form.set_scrolltype("none");
        	this.div_form02.form.set_scrolltype("none");
        	this.div_form03.form.set_scrolltype("none");

        	this.div_form01.form.btn_toggle01.set_cssclass("btn_WF_ShuttleT");
        	this.div_form02.form.btn_toggle02.set_cssclass("btn_WF_ShuttleT");
        	this.div_form03.form.btn_toggle03.set_cssclass("btn_WF_ShuttleT");

        };

        this.div_form01_btn_toggle01_onclick = function(obj,e)
        {
        	var nHeigth = this.div_form01.getOffsetHeight();
        	if(nHeigth > 31 )
        	{
        		//접기
        		this.div_form01.form.btn_toggle01.set_cssclass("btn_WF_ShuttleB");
        		this.div_form01.set_height(31);
        		this.resetScroll();  //꼭 필요!! 필수
        	} else
        	{
        		//열기
        		this.div_form01.form.btn_toggle01.set_cssclass("btn_WF_ShuttleT");
        		this.div_form01.set_height(660);
        		this.resetScroll();  //꼭 필요!! 필수
        		this.vscrollbar.set_pos(this.div_form01.top);
        	}
        };

        this.div_form02_btn_toggle02_onclick = function(obj,e)
        {
        	var nHeigth = this.div_form02.getOffsetHeight();
        	if( nHeigth > 31 )
        	{
        		//접기
        		this.div_form02.form.btn_toggle02.set_cssclass("btn_WF_ShuttleB");
        		this.div_form02.set_height(31);
        		this.resetScroll();  //꼭 필요!! 필수

        	} else
        	{
        		//열기
        		this.div_form02.form.btn_toggle02.set_cssclass("btn_WF_ShuttleT");
        		this.div_form02.set_height(660);
        		this.resetScroll();  //꼭 필요!! 필수
        		this.vscrollbar.set_pos(this.div_form02.getOffsetTop());
        	}

        };

        this.div_form03_btn_toggle03_onclick = function(obj,e)
        {
        	var nHeigth = this.div_form03.getOffsetHeight();
        	if( nHeigth > 31 )
        	{
        		//접기
        		this.div_form03.form.btn_toggle03.set_cssclass("btn_WF_ShuttleB");
        		this.div_form03.set_height(31);
        		this.resetScroll();  //꼭 필요!! 필수
        	}else
        	{
        		//열기
        		this.div_form03.form.btn_toggle03.set_cssclass("btn_WF_ShuttleT");
        		this.div_form03.set_height(227);
        		this.resetScroll();  //꼭 필요!! 필수
        		this.vscrollbar.set_pos(this.div_form03.getOffsetTop());
        	}
        };

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
            //return this.gfn_isUpdate(this.dsDetail);
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_form01.form.btn_toggle01.addEventHandler("onclick",this.div_form01_btn_toggle01_onclick,this);
            this.div_form01.form.stc_07.addEventHandler("onclick",this.stc_07_onclick,this);
            this.div_form01.form.stc_16.addEventHandler("onclick",this.stc_07_onclick,this);
            this.div_form01.form.stc_23.addEventHandler("onclick",this.stc_07_onclick,this);
            this.div_form02.form.btn_toggle02.addEventHandler("onclick",this.div_form02_btn_toggle02_onclick,this);
            this.div_form03.form.btn_toggle03.addEventHandler("onclick",this.div_form03_btn_toggle03_onclick,this);
        };
        this.loadIncludeScript("SML021BtnHorizontalFoldDivListM01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
