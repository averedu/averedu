(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ComponentGuide_01");
            this.set_titletext("Button");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("stc_00","0","0",null,"200","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#ccd6dc");
            this.addChild(obj.name, obj);

            obj = new Static("stc_02","20","80","260","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#0066b3");
            obj.set_text("Component Guide 03");
            obj.set_color("#ffffff");
            obj.set_font("normal 20px/normal \"Malgun Gothic\"");
            obj.set_letterSpacing("0px");
            obj.set_padding("0px, 0px, 0px, 10px");
            this.addChild(obj.name, obj);

            obj = new Static("stc_03","20","147","260","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Button");
            obj.set_font("normal 14px/normal \"Malgun Gothic\"");
            obj.set_color("#363636");
            this.addChild(obj.name, obj);

            obj = new Static("stc_04","20","225","600","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Default Button");
            obj.set_font("24px/normal \"Malgun Gothic\"");
            obj.set_color("#000000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_05","20","277","490","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("- 최소 2글자부터 시작하여 한 글자가 늘어날 때마다 버튼 width가 12px씩 증가");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_06","68","320","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("enabled");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new Static("stc_07","122","320","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("disabled");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new Static("stc_08","20","352","30","22",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("W46");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new Button("btn_00","68","352","46","22",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("일이");
            this.addChild(obj.name, obj);

            obj = new Button("btn_01","116","352","46","22",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("일이");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09","20","379","30","22",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("W58");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new Button("btn_02","68","379","58","22",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("일이삼");
            this.addChild(obj.name, obj);

            obj = new Button("btn_03","128","379","58","22",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("일이삼");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_10","20","406","30","22",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("W70");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new Button("btn_04","68","406","70","22",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("일이삼사");
            this.addChild(obj.name, obj);

            obj = new Button("btn_05","140","406","70","22",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("일이삼사");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_11","20","433","30","22",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("W82");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new Button("btn_06","68","433","82","22",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("일이삼사오");
            this.addChild(obj.name, obj);

            obj = new Button("btn_07","152","433","82","22",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("일이삼사오");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12","20","460","30","22",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("W94");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new Button("btn_08","68","460","94","22",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("일이삼사오육");
            this.addChild(obj.name, obj);

            obj = new Button("btn_09","164","460","94","22",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("일이삼사오육");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13","20","487","30","22",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("W106");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new Button("btn_10","68","487","106","22",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("일이삼사오육칠");
            this.addChild(obj.name, obj);

            obj = new Button("btn_11","176","487","106","22",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("일이삼사오육칠");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14","20","514","30","22",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("W118");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new Button("btn_12","68","514","118","22",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("일이삼사오육칠팔");
            this.addChild(obj.name, obj);

            obj = new Button("btn_13","188","514","118","22",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("일이삼사오육칠팔");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_15","20","541","30","22",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("W130");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new Button("btn_14","68","541","130","22",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("일이삼사오육칠팔구");
            this.addChild(obj.name, obj);

            obj = new Button("btn_15","200","541","130","22",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("일이삼사오육칠팔구");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_16","20","568","30","22",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("W142");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new Button("btn_16","68","568","142","22",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("일이삼사오육칠팔구십");
            this.addChild(obj.name, obj);

            obj = new Button("btn_17","212","568","142","22",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("일이삼사오육칠팔구십");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_17","660","224","600","40",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("CRUD Button");
            obj.set_font("24px/normal \"Malgun Gothic\"");
            obj.set_color("#000000");
            this.addChild(obj.name, obj);

            obj = new Button("btn_18","703","372","46","22",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("stc_30","1173","370","30","22",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("22");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("stc_31","182","351","30","22",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("H22");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("stc_32","173","352","11","1",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_background("#ff0000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_33","173","372","11","1",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_background("#ff0000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_34","178","353","1","19",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_background("#ff0000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_35","1152","371","11","1",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_background("#ff0000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_36","1152","392","11","1",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_background("#ff0000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_37","1157","372","1","20",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_background("#ff0000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_38","702","411","140","22",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("class: <b v=\'true\'>btn_WF_Crud</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_39","20","730","600","40",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("Popup Button");
            obj.set_font("24px/normal \"Malgun Gothic\"");
            obj.set_color("#000000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_40","660","729","600","40",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("Search Button / Search Popup Button / etc. Button");
            obj.set_font("24px/normal \"Malgun Gothic\"");
            obj.set_color("#000000");
            this.addChild(obj.name, obj);

            obj = new Button("btn_36","707","796","60","22",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.addChild(obj.name, obj);

            obj = new Static("stc_41","683","796","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("22");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("stc_42","840","797","140","23",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("class: <b v=\'true\'>btn_WF_Search</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_37","774","796","65","24",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_43","733","820","23","23",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("60");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Button("btn_38","706","855","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_cssclass("btn_WF_PopSrch");
            this.addChild(obj.name, obj);

            obj = new Static("stc_44","840","855","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("class: <b v=\'true\'>btn_WF_PopSrch</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_39","730","855","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_cssclass("btn_WF_PopSrch");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_40","705","907","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_cssclass("btn_WF_Refresh");
            this.addChild(obj.name, obj);

            obj = new Static("stc_45","840","907","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("class : <b v=\'true\'>btn_WF_Refresh</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_41","729","907","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_cssclass("btn_WF_Refresh");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_42","729","953","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_cssclass("btn_WF_Excel");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_43","705","953","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_cssclass("btn_WF_Excel");
            this.addChild(obj.name, obj);

            obj = new Static("stc_46","840","953","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("class : <b v=\'true\'>btn_WF_Excel</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_00","1036","855","100","22",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_cssclass("edt_WF_Refresh");
            this.addChild(obj.name, obj);

            obj = new Button("btn_44","1138","855","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_cssclass("btn_WF_PopSrch");
            this.addChild(obj.name, obj);

            obj = new Button("btn_45","43","795","55","24",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Pop");
            this.addChild(obj.name, obj);

            obj = new Static("stc_49","167","795","140","24",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("class : <b v=\'true\'>btn_WF_Pop</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_46","100","795","55","24",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_Pop");
            this.addChild(obj.name, obj);

            obj = new Static("stc_50","21","829","22","24",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("24");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("stc_51","57","853","22","23",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_text("55");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_47","100","829","55","24",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_Pop");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_48","43","829","55","24",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Pop");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_47","20","1100","600","40",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_text("Shuttle Button");
            obj.set_font("24px/normal \"Malgun Gothic\"");
            obj.set_color("#000000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_52","660","1163","140","23",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_text("class : <b v=\'true\'>btn_WF_Prev2</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_51","705","1235","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_cssclass("btn_WF_PagePrev2");
            this.addChild(obj.name, obj);

            obj = new Static("stc_54","759","1345","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_text("class : <b v=\'true\'>btn_WF_Page</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_52","705","1265","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_cssclass("btn_WF_PagePrev2");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_53","42","1165","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_cssclass("btn_WF_ShuttleL2");
            this.addChild(obj.name, obj);

            obj = new Static("stc_55","121","1165","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_text("class : <b v=\'true\'>btn_WF_ShuttleL2</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_54","72","1165","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_cssclass("btn_WF_ShuttleL2");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_56","20","1165","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_text("22");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("red");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_57","42","1143","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_text("22");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_58","660","1100","600","40",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_text("Grid paging Button");
            obj.set_font("24px/normal \"Malgun Gothic\"");
            obj.set_color("#000000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_59","121","1195","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_text("class : <b v=\'true\'>btn_WF_ShuttleR2</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_55","72","1195","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_cssclass("btn_WF_ShuttleR2");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_56","42","1195","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_cssclass("btn_WF_ShuttleR2");
            this.addChild(obj.name, obj);

            obj = new Static("stc_60","121","1225","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_text("class : <b v=\'true\'>btn_WF_ShuttleL</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_57","72","1225","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_cssclass("btn_WF_ShuttleL");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_58","42","1225","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_cssclass("btn_WF_ShuttleL");
            this.addChild(obj.name, obj);

            obj = new Static("stc_61","121","1255","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_text("class : <b v=\'true\'>btn_WF_ShuttleR</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_59","72","1255","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_cssclass("btn_WF_ShuttleR");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_60","42","1255","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_cssclass("btn_WF_ShuttleR");
            this.addChild(obj.name, obj);

            obj = new Static("stc_62","121","1317","170","20",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_text("<,> 셔틀버틀 큰사이즈 스타일");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Button("btn_61","72","1285","22","40",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_cssclass("btn_WF_ShuttleL");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_62","42","1285","22","40",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_cssclass("btn_WF_ShuttleL");
            this.addChild(obj.name, obj);

            obj = new Button("btn_63","72","1335","22","40",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_cssclass("btn_WF_ShuttleR");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_64","42","1335","22","40",null,null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_cssclass("btn_WF_ShuttleR");
            this.addChild(obj.name, obj);

            obj = new Static("stc_64","121","1385","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_text("class : <b v=\'true\'>btn_WF_ShuttleT</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_65","72","1385","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_cssclass("btn_WF_ShuttleT");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_66","42","1385","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("97");
            obj.set_cssclass("btn_WF_ShuttleT");
            this.addChild(obj.name, obj);

            obj = new Static("stc_65","121","1415","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_text("class : <b v=\'true\'>btn_WF_ShuttleB</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_67","72","1415","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("99");
            obj.set_cssclass("btn_WF_ShuttleB");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_68","42","1415","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("100");
            obj.set_cssclass("btn_WF_ShuttleB");
            this.addChild(obj.name, obj);

            obj = new Static("stc_63","20","1295","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("101");
            obj.set_text("40");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("red");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_66","20","1345","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("102");
            obj.set_text("40");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("red");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_49","732","1265","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("103");
            obj.set_cssclass("btn_WF_PagePrev");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_50","732","1235","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("104");
            obj.set_cssclass("btn_WF_PagePrev");
            this.addChild(obj.name, obj);

            obj = new Button("btn_71","783","1235","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("105");
            obj.set_cssclass("btn_WF_Page");
            obj.set_text("2");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btn_72","759","1235","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("106");
            obj.set_cssclass("btn_WF_Page");
            obj.set_text("1");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btn_75","831","1235","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("107");
            obj.set_cssclass("btn_WF_Page_S");
            obj.set_text("4");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btn_76","807","1235","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("108");
            obj.set_cssclass("btn_WF_Page");
            obj.set_text("3");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btn_79","879","1235","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("109");
            obj.set_cssclass("btn_WF_Page");
            obj.set_text("6");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btn_80","855","1235","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("110");
            obj.set_cssclass("btn_WF_Page");
            obj.set_text("5");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btn_83","927","1235","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("111");
            obj.set_cssclass("btn_WF_Page");
            obj.set_text("8");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btn_84","903","1235","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("112");
            obj.set_cssclass("btn_WF_Page");
            obj.set_text("7");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btn_86","1010","1265","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("113");
            obj.set_cssclass("btn_WF_PageNext");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_87","1010","1235","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("114");
            obj.set_cssclass("btn_WF_PageNext");
            this.addChild(obj.name, obj);

            obj = new Button("btn_88","951","1235","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("115");
            obj.set_cssclass("btn_WF_Page");
            obj.set_text("9");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btn_89","1037","1265","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("116");
            obj.set_cssclass("btn_WF_PageNext2");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_92","1037","1235","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("117");
            obj.set_cssclass("btn_WF_PageNext2");
            this.addChild(obj.name, obj);

            obj = new Static("stc_48","730","1190","140","22",null,null,null,null,null,null,this);
            obj.set_taborder("118");
            obj.set_text("class : <b v=\'true\'>btn_WF_Prev</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_53","831","1305","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("119");
            obj.set_text("class : <b v=\'true\'>btn_WF_Page_S</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_67","1013","1162","140","24",null,null,null,null,null,null,this);
            obj.set_taborder("120");
            obj.set_text("class : <b v=\'true\'>btn_WF_PageNext</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_68","1042","1190","140","22",null,null,null,null,null,null,this);
            obj.set_taborder("121");
            obj.set_text("class : <b v=\'true\'>btn_WF_PageNext2</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_69","715","1182","1","50",null,null,null,null,null,null,this);
            obj.set_taborder("122");
            obj.set_background("#ff0000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_70","739","1212","1","20",null,null,null,null,null,null,this);
            obj.set_taborder("123");
            obj.set_background("#ff0000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_71","1022","1182","1","50",null,null,null,null,null,null,this);
            obj.set_taborder("124");
            obj.set_background("#ff0000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_72","1046","1212","1","20",null,null,null,null,null,null,this);
            obj.set_taborder("125");
            obj.set_background("#ff0000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_73","841","1260","1","50",null,null,null,null,null,null,this);
            obj.set_taborder("126");
            obj.set_background("#ff0000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_74","770","1260","1","80",null,null,null,null,null,null,this);
            obj.set_taborder("127");
            obj.set_background("#ff0000");
            this.addChild(obj.name, obj);

            obj = new Button("btn_19","751","372","46","22",null,null,null,null,null,null,this);
            obj.set_taborder("128");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btn_73","799","372","46","22",null,null,null,null,null,null,this);
            obj.set_taborder("129");
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btn_131","847","372","46","22",null,null,null,null,null,null,this);
            obj.set_taborder("130");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btn_132","895","372","46","22",null,null,null,null,null,null,this);
            obj.set_taborder("131");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btn_133","943","372","46","22",null,null,null,null,null,null,this);
            obj.set_taborder("132");
            obj.set_text("인쇄");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btn_134","1051","372","46","22",null,null,null,null,null,null,this);
            obj.set_taborder("133");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","1049","362","2","32",null,null,null,null,null,null,this);
            obj.set_taborder("134");
            obj.set_cssclass("sta_GU_space");
            obj.set_background("red");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","941","362","2","32",null,null,null,null,null,null,this);
            obj.set_taborder("135");
            obj.set_cssclass("sta_GU_space");
            obj.set_background("red");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","893","362","2","32",null,null,null,null,null,null,this);
            obj.set_taborder("136");
            obj.set_cssclass("sta_GU_space");
            obj.set_background("red");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","845","362","2","32",null,null,null,null,null,null,this);
            obj.set_taborder("137");
            obj.set_cssclass("sta_GU_space");
            obj.set_background("red");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","797","362","2","32",null,null,null,null,null,null,this);
            obj.set_taborder("138");
            obj.set_cssclass("sta_GU_space");
            obj.set_background("red");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("stc_81","784","340","30","22",null,null,null,null,null,null,this);
            obj.set_taborder("139");
            obj.set_text("2");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_82","717","337","30","22",null,null,null,null,null,null,this);
            obj.set_taborder("140");
            obj.set_text("46");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_20","703","356","1","13",null,null,null,null,null,null,this);
            obj.set_taborder("141");
            obj.set_background("#ff0000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_83","749","356","1","13",null,null,null,null,null,null,this);
            obj.set_taborder("142");
            obj.set_background("#ff0000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_84","703","362","46","1",null,null,null,null,null,null,this);
            obj.set_taborder("143");
            obj.set_background("#ff0000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_85","682","855","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("144");
            obj.set_text("22");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_86","704","875","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("145");
            obj.set_text("22");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_87","681","907","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("146");
            obj.set_text("22");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_88","703","928","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("147");
            obj.set_text("22");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_89","680","953","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("148");
            obj.set_text("22");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_90","702","973","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("149");
            obj.set_text("22");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_91","0","1938",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("150");
            obj.set_background("#ccd6dc");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_92","20","1538","600","40",null,null,null,null,null,null,this);
            obj.set_taborder("151");
            obj.set_text("Shuttle Button");
            obj.set_font("24px/normal \"Malgun Gothic\"");
            obj.set_color("#000000");
            this.addChild(obj.name, obj);

            obj = new Button("btn_20","42","1720","300","10",null,null,null,null,null,null,this);
            obj.set_taborder("152");
            obj.set_cssclass("btn_WF_Hspltt");
            this.addChild(obj.name, obj);

            obj = new Button("btn_21","430","1580","10","300",null,null,null,null,null,null,this);
            obj.set_taborder("153");
            obj.set_cssclass("btn_WF_Vspltt");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","98","786","2","65",null,null,null,null,null,null,this);
            obj.set_taborder("154");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("stc_93","88","770","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("155");
            obj.set_text("2");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_94","1126","838","22","21",null,null,null,null,null,null,this);
            obj.set_taborder("156");
            obj.set_text("2");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","1136","855","2","20",null,null,null,null,null,null,this);
            obj.set_taborder("157");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("stc_95","104","335","22","21",null,null,null,null,null,null,this);
            obj.set_taborder("158");
            obj.set_text("2");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","114","352","2","20",null,null,null,null,null,null,this);
            obj.set_taborder("159");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01","20","20","390","60",null,null,null,null,null,null,this);
            obj.set_taborder("160");
            obj.set_background("#003876");
            obj.set_text("한국공항공사(iFIS) UI");
            obj.set_color("#ffffff");
            obj.set_font("normal 36px/normal \"Malgun Gothic\"");
            obj.set_letterSpacing("0px");
            obj.set_padding("0px, 0px, 0px, 10px");
            this.addChild(obj.name, obj);

            obj = new Button("btn_22","975","1235","30","22",null,null,null,null,null,null,this);
            obj.set_taborder("161");
            obj.set_cssclass("btn_WF_Page");
            obj.set_text("10");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btn_23","991","372","58","22",null,null,null,null,null,null,this);
            obj.set_taborder("162");
            obj.set_text("도움말");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","989","362","2","32",null,null,null,null,null,null,this);
            obj.set_taborder("163");
            obj.set_cssclass("sta_GU_space");
            obj.set_background("red");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("stc_18","832","340","30","21",null,null,null,null,null,null,this);
            obj.set_taborder("164");
            obj.set_text("2");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_19","879","340","30","22",null,null,null,null,null,null,this);
            obj.set_taborder("165");
            obj.set_text("2");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_21","927","340","30","21",null,null,null,null,null,null,this);
            obj.set_taborder("166");
            obj.set_text("2");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_22","976","340","30","21",null,null,null,null,null,null,this);
            obj.set_taborder("167");
            obj.set_text("2");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_23","1036","340","30","21",null,null,null,null,null,null,this);
            obj.set_taborder("168");
            obj.set_text("2");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("Button06","705","1037","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("169");
            obj.set_cssclass("btn_WF_CalBtnP");
            this.addChild(obj.name, obj);

            obj = new Button("Button07","705","1005","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("170");
            obj.set_cssclass("btn_WF_CalBtnM");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_25","840","1006","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("171");
            obj.set_text("class : <b v=\'true\'>btn_WF_CalBtnM</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_26","840","1038","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("172");
            obj.set_text("class : <b v=\'true\'>btn_WF_CalBtnP</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","edt_00:-22","856","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("173");
            obj.set_cssclass("btn_WF_Close02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_24","1032","916","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("174");
            obj.set_text("class : <b v=\'true\'>edt_WF_Refresh</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_27","1032","796","140","24",null,null,null,null,null,null,this);
            obj.set_taborder("175");
            obj.set_text("class: <b v=\'true\'>btn_WF_Close02</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_28","1126","819","1","45",null,null,null,null,null,null,this);
            obj.set_taborder("176");
            obj.set_background("#ff0000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_29","1076","869","1","40",null,null,null,null,null,null,this);
            obj.set_taborder("177");
            obj.set_background("#ff0000");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("ComponentGuide_03.xfdl", function() {

        this.tab_00_onchanged = function(obj,e)
        {

        };

        this.ComponentGuide_01_onclick = function(obj,e)
        {

        };

        this.stc_38_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclick",this.ComponentGuide_01_onclick,this);
            this.stc_38.addEventHandler("onclick",this.stc_38_onclick,this);
        };
        this.loadIncludeScript("ComponentGuide_03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
