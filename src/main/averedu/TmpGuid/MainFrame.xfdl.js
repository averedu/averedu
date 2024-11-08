(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MainFrame");
            this.set_titletext("사용자메인");
            this.set_background("#ececec");
            if (Form == this.constructor)
            {
                this._setFormPosition(1500,780);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","20","20",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","23","20","110","5",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#494949");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","234","27","110","23",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("NOTICE");
            obj.set_cssclass("sta_MF_Not_Eng");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","224","44","110","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text(" 공지사항");
            obj.set_cssclass("sta_MF_Not_Kor");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","23","196","188","267",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div00");
            obj.set_cssclass("div_MF_Box");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"80","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_MF_ColorBg_01");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","19","10","100","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_MF_Airport_Eng");
            obj.set_text("GIMPO");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","17","22","102","45",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_MF_Airport_Kor");
            obj.set_text("김포");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static08","16","90","30","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_MF_Planeicon");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static07",null,"90","55","30","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("정상");
            obj.set_cssclass("sta_MF_ColorTxt_01");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","10","128",null,"1","10",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_background("#b6b6b6");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04",null,"17","30","30","18",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_MF_Weather_01");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05","48","133","60","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_MF_DataTi_C");
            obj.set_text(" 전일");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06","10","158","42","95",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_MF_DataTi");
            obj.set_text("운항\r\n지연\r\n결항\r\n여객수");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static09","48","159","60","22",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/999");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static10",null,"159","61","22","9",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/999");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static11",null,"184","61","22","9",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("0/0");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static12","48","184","60","22",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("0/0");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static13",null,"209","61","22","9",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/50");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static14","48","209","60","22",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/999");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static15",null,"234","61","22","9",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/999");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static16","48","234","60","22",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/999");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static17",null,"132","61","20","9",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_MF_DataTi_C");
            obj.set_text("금일");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static18",null,"49","30","22","35",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_MF_Temp_01");
            obj.set_text("16");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static19",null,"49","15","22","15",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_MF_Temp_02");
            obj.set_text("℃");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","23","34","100","109",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("19");
            obj.set_cssclass("sta_MF_Day_D");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","23","29","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("OCTOBER 2018");
            obj.set_cssclass("sta_MF_Day_Y");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","23","128","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Friday");
            obj.set_cssclass("sta_MF_Day_W");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","646","134","309","40",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","957","134","85","40",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("검색");
            obj.set_cssclass("btn_MF_Search");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","234","86","370","22",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("- 공지사항입니다.");
            obj.set_cssclass("sta_MF_Not_List");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","234","109","370","22",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("- 신규 노선 안내입니다.");
            obj.set_cssclass("sta_MF_Not_List");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","1061","18","397","158",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Div00");
            obj.set_cssclass("div_MF_Box");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","10","30",null,"1","10",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_background("#c6c6c6");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static05","103","7","135","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_MF_sumDataTi_C");
            obj.set_text(" 전일");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static06","20","33","76","118",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_MF_sumDataTi");
            obj.set_text("운항편(A/D)\r\n지연\r\n결항\r\n여객수");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static09","103","35","135","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_MF_sumData");
            obj.set_text("999/999");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static10",null,"35","135","26","10",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_MF_sumData");
            obj.set_text("999/999");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static11",null,"63","135","26","10",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_MF_sumData");
            obj.set_text("0/0");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static12","103","63","135","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_MF_sumData");
            obj.set_text("0/0");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static13",null,"91","135","26","10",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_MF_sumData");
            obj.set_text("999/50");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static14","103","91","135","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_MF_sumData");
            obj.set_text("999/999");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static15",null,"119","135","26","10",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_MF_sumData");
            obj.set_text("999/999");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static16","103","119","135","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_MF_sumData");
            obj.set_text("999/999");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static17",null,"6","135","20","10",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_MF_sumDataTi_C");
            obj.set_text("금일");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div02","231","196","188","267",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Div00");
            obj.set_cssclass("div_MF_Box");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"80","0",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_MF_ColorBg_02");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static02","17","22","102","45",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_MF_Airport_Kor");
            obj.set_text("김해");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static08","16","90","30","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_MF_Planeicon");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static07",null,"90","55","30","20",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("4");
            obj.set_text("정상");
            obj.set_cssclass("sta_MF_ColorTxt_02");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static03","10","128",null,"1","10",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("5");
            obj.set_background("#b6b6b6");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static04",null,"17","30","30","18",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_MF_Weather_12");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static05","48","133","60","20",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_MF_DataTi_C");
            obj.set_text(" 전일");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static06","10","158","42","95",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_MF_DataTi");
            obj.set_text("운항\r\n지연\r\n결항\r\n여객수");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static09","48","159","60","22",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/999");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static10",null,"159","61","22","9",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/999");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static11",null,"184","61","22","9",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("0/0");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static12","48","184","60","22",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("0/0");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static13",null,"209","61","22","9",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/50");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static14","48","209","60","22",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/999");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static15",null,"234","61","22","9",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/999");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static16","48","234","60","22",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/999");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static17",null,"132","61","20","9",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_MF_DataTi_C");
            obj.set_text("금일");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static18",null,"49","30","22","35",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_MF_Temp_01");
            obj.set_text("16");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static19",null,"49","15","22","15",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_MF_Temp_02");
            obj.set_text("℃");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static01","19","10","100","20",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_MF_Airport_Eng");
            obj.set_text("GIMHAE");
            this.Div02.addChild(obj.name, obj);

            obj = new Div("Div03","439","196","187","267",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Div00");
            obj.set_cssclass("div_MF_Box");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"80","0",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_MF_ColorBg_03");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static01","19","10","100","20",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_MF_Airport_Eng");
            obj.set_text("JEJU");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static02","17","22","102","45",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_MF_Airport_Kor");
            obj.set_text("제주");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static08","16","90","30","30",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_MF_Planeicon");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static07",null,"90","55","30","20",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("4");
            obj.set_text("정상");
            obj.set_cssclass("sta_MF_ColorTxt_03");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static03","10","128",null,"1","10",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("5");
            obj.set_background("#b6b6b6");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static04",null,"17","30","30","18",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_MF_Weather_05");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static05","48","133","60","20",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_MF_DataTi_C");
            obj.set_text(" 전일");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static06","10","158","42","95",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_MF_DataTi");
            obj.set_text("운항\r\n지연\r\n결항\r\n여객수");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static09","48","159","60","22",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/999");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static10",null,"159","61","22","9",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/999");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static11",null,"184","61","22","9",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("0/0");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static12","48","184","60","22",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("0/0");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static13",null,"209","61","22","9",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/50");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static14","48","209","60","22",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/999");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static15",null,"234","61","22","9",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/999");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static16","48","234","60","22",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/999");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static17",null,"132","61","20","9",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_MF_DataTi_C");
            obj.set_text("금일");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static18",null,"49","30","22","35",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_MF_Temp_01");
            obj.set_text("16");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static19",null,"49","15","22","15",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_MF_Temp_02");
            obj.set_text("℃");
            this.Div03.addChild(obj.name, obj);

            obj = new Div("Div04","646","196","189","267",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("Div00");
            obj.set_cssclass("div_MF_Box");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"80","0",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_MF_ColorBg_04");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static01","19","10","100","20",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_MF_Airport_Eng");
            obj.set_text("DAEGU");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static02","17","22","102","45",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_MF_Airport_Kor");
            obj.set_text("대구");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static08","16","90","30","30",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_MF_Planeicon");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static07",null,"90","55","30","20",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("4");
            obj.set_text("정상");
            obj.set_cssclass("sta_MF_ColorTxt_04");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static03","10","128",null,"1","10",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("5");
            obj.set_background("#b6b6b6");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static04",null,"17","30","30","18",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_MF_Weather_01");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static05","48","133","60","20",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_MF_DataTi_C");
            obj.set_text(" 전일");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static06","10","158","42","95",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_MF_DataTi");
            obj.set_text("운항\r\n지연\r\n결항\r\n여객수");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static09","48","159","60","22",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/999");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static10",null,"159","61","22","9",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/999");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static11",null,"184","61","22","9",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("0/0");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static12","48","184","60","22",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("0/0");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static13",null,"209","61","22","9",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/50");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static14","48","209","60","22",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/999");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static15",null,"234","61","22","9",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/999");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static16","48","234","60","22",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/999");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static17",null,"132","61","20","9",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_MF_DataTi_C");
            obj.set_text("금일");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static18",null,"49","30","22","35",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_MF_Temp_01");
            obj.set_text("16");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static19",null,"49","15","22","15",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_MF_Temp_02");
            obj.set_text("℃");
            this.Div04.addChild(obj.name, obj);

            obj = new Div("Div05","855","196","187","267",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("Div00");
            obj.set_cssclass("div_MF_Box");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"80","0",null,null,null,null,null,this.Div05.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_MF_ColorBg_01");
            this.Div05.addChild(obj.name, obj);

            obj = new Static("Static01","19","10","100","20",null,null,null,null,null,null,this.Div05.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_MF_Airport_Eng");
            obj.set_text("GWANGJU");
            this.Div05.addChild(obj.name, obj);

            obj = new Static("Static02","17","22","102","45",null,null,null,null,null,null,this.Div05.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_MF_Airport_Kor");
            obj.set_text("광주");
            this.Div05.addChild(obj.name, obj);

            obj = new Static("Static08","16","90","30","30",null,null,null,null,null,null,this.Div05.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_MF_Planeicon");
            this.Div05.addChild(obj.name, obj);

            obj = new Static("Static07",null,"90","55","30","20",null,null,null,null,null,this.Div05.form);
            obj.set_taborder("4");
            obj.set_text("정상");
            obj.set_cssclass("sta_MF_ColorTxt_01");
            this.Div05.addChild(obj.name, obj);

            obj = new Static("Static03","10","128",null,"1","10",null,null,null,null,null,this.Div05.form);
            obj.set_taborder("5");
            obj.set_background("#b6b6b6");
            this.Div05.addChild(obj.name, obj);

            obj = new Static("Static04",null,"17","30","30","18",null,null,null,null,null,this.Div05.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_MF_Weather_01");
            this.Div05.addChild(obj.name, obj);

            obj = new Static("Static05","48","133","60","20",null,null,null,null,null,null,this.Div05.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_MF_DataTi_C");
            obj.set_text(" 전일");
            this.Div05.addChild(obj.name, obj);

            obj = new Static("Static06","10","158","42","95",null,null,null,null,null,null,this.Div05.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_MF_DataTi");
            obj.set_text("운항\r\n지연\r\n결항\r\n여객수");
            this.Div05.addChild(obj.name, obj);

            obj = new Static("Static09","48","159","60","22",null,null,null,null,null,null,this.Div05.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/999");
            this.Div05.addChild(obj.name, obj);

            obj = new Static("Static10",null,"159","61","22","9",null,null,null,null,null,this.Div05.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/999");
            this.Div05.addChild(obj.name, obj);

            obj = new Static("Static11",null,"184","61","22","9",null,null,null,null,null,this.Div05.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("0/0");
            this.Div05.addChild(obj.name, obj);

            obj = new Static("Static12","48","184","60","22",null,null,null,null,null,null,this.Div05.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("0/0");
            this.Div05.addChild(obj.name, obj);

            obj = new Static("Static13",null,"209","61","22","9",null,null,null,null,null,this.Div05.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/50");
            this.Div05.addChild(obj.name, obj);

            obj = new Static("Static14","48","209","60","22",null,null,null,null,null,null,this.Div05.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/999");
            this.Div05.addChild(obj.name, obj);

            obj = new Static("Static15",null,"234","61","22","9",null,null,null,null,null,this.Div05.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/999");
            this.Div05.addChild(obj.name, obj);

            obj = new Static("Static16","48","234","60","22",null,null,null,null,null,null,this.Div05.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/999");
            this.Div05.addChild(obj.name, obj);

            obj = new Static("Static17",null,"132","61","20","9",null,null,null,null,null,this.Div05.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_MF_DataTi_C");
            obj.set_text("금일");
            this.Div05.addChild(obj.name, obj);

            obj = new Static("Static18",null,"49","30","22","35",null,null,null,null,null,this.Div05.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_MF_Temp_01");
            obj.set_text("16");
            this.Div05.addChild(obj.name, obj);

            obj = new Static("Static19",null,"49","15","22","15",null,null,null,null,null,this.Div05.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_MF_Temp_02");
            obj.set_text("℃");
            this.Div05.addChild(obj.name, obj);

            obj = new Div("Div06","1062","196","187","267",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("Div00");
            obj.set_cssclass("div_MF_Box");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"80","0",null,null,null,null,null,this.Div06.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_MF_ColorBg_01");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static01","19","10","100","20",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_MF_Airport_Eng");
            obj.set_text("CHEONGJU");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static02","17","22","102","45",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_MF_Airport_Kor");
            obj.set_text("청주");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static08","16","90","30","30",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_MF_Planeicon");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static07",null,"90","55","30","20",null,null,null,null,null,this.Div06.form);
            obj.set_taborder("4");
            obj.set_text("정상");
            obj.set_cssclass("sta_MF_ColorTxt_01");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static03","10","128",null,"1","10",null,null,null,null,null,this.Div06.form);
            obj.set_taborder("5");
            obj.set_background("#b6b6b6");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static04",null,"17","30","30","18",null,null,null,null,null,this.Div06.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_MF_Weather_01");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static05","48","133","60","20",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_MF_DataTi_C");
            obj.set_text(" 전일");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static06","10","158","42","95",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_MF_DataTi");
            obj.set_text("운항\r\n지연\r\n결항\r\n여객수");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static09","48","159","60","22",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/999");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static10",null,"159","61","22","9",null,null,null,null,null,this.Div06.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/999");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static11",null,"184","61","22","9",null,null,null,null,null,this.Div06.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("0/0");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static12","48","184","60","22",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("0/0");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static13",null,"209","61","22","9",null,null,null,null,null,this.Div06.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/50");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static14","48","209","60","22",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/999");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static15",null,"234","61","22","9",null,null,null,null,null,this.Div06.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/999");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static16","48","234","60","22",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/999");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static17",null,"132","61","20","9",null,null,null,null,null,this.Div06.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_MF_DataTi_C");
            obj.set_text("금일");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static18",null,"49","30","22","35",null,null,null,null,null,this.Div06.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_MF_Temp_01");
            obj.set_text("16");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static19",null,"49","15","22","15",null,null,null,null,null,this.Div06.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_MF_Temp_02");
            obj.set_text("℃");
            this.Div06.addChild(obj.name, obj);

            obj = new Div("Div07","1269","196","189","267",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("Div00");
            obj.set_cssclass("div_MF_Box");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"80","0",null,null,null,null,null,this.Div07.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_MF_ColorBg_01");
            this.Div07.addChild(obj.name, obj);

            obj = new Static("Static01","19","10","100","20",null,null,null,null,null,null,this.Div07.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_MF_Airport_Eng");
            obj.set_text("MUAN");
            this.Div07.addChild(obj.name, obj);

            obj = new Static("Static02","17","22","102","45",null,null,null,null,null,null,this.Div07.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_MF_Airport_Kor");
            obj.set_text("무안");
            this.Div07.addChild(obj.name, obj);

            obj = new Static("Static08","16","90","30","30",null,null,null,null,null,null,this.Div07.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_MF_Planeicon");
            this.Div07.addChild(obj.name, obj);

            obj = new Static("Static07",null,"90","55","30","20",null,null,null,null,null,this.Div07.form);
            obj.set_taborder("4");
            obj.set_text("정상");
            obj.set_cssclass("sta_MF_ColorTxt_01");
            this.Div07.addChild(obj.name, obj);

            obj = new Static("Static03","10","128",null,"1","10",null,null,null,null,null,this.Div07.form);
            obj.set_taborder("5");
            obj.set_background("#b6b6b6");
            this.Div07.addChild(obj.name, obj);

            obj = new Static("Static04",null,"17","30","30","18",null,null,null,null,null,this.Div07.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_MF_Weather_01");
            this.Div07.addChild(obj.name, obj);

            obj = new Static("Static05","48","133","60","20",null,null,null,null,null,null,this.Div07.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_MF_DataTi_C");
            obj.set_text(" 전일");
            this.Div07.addChild(obj.name, obj);

            obj = new Static("Static06","10","158","42","95",null,null,null,null,null,null,this.Div07.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_MF_DataTi");
            obj.set_text("운항\r\n지연\r\n결항\r\n여객수");
            this.Div07.addChild(obj.name, obj);

            obj = new Static("Static09","48","159","60","22",null,null,null,null,null,null,this.Div07.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/999");
            this.Div07.addChild(obj.name, obj);

            obj = new Static("Static10",null,"159","61","22","9",null,null,null,null,null,this.Div07.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/999");
            this.Div07.addChild(obj.name, obj);

            obj = new Static("Static11",null,"184","61","22","9",null,null,null,null,null,this.Div07.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("0/0");
            this.Div07.addChild(obj.name, obj);

            obj = new Static("Static12","48","184","60","22",null,null,null,null,null,null,this.Div07.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("0/0");
            this.Div07.addChild(obj.name, obj);

            obj = new Static("Static13",null,"209","61","22","9",null,null,null,null,null,this.Div07.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/50");
            this.Div07.addChild(obj.name, obj);

            obj = new Static("Static14","48","209","60","22",null,null,null,null,null,null,this.Div07.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/999");
            this.Div07.addChild(obj.name, obj);

            obj = new Static("Static15",null,"234","61","22","9",null,null,null,null,null,this.Div07.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/999");
            this.Div07.addChild(obj.name, obj);

            obj = new Static("Static16","48","234","60","22",null,null,null,null,null,null,this.Div07.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/999");
            this.Div07.addChild(obj.name, obj);

            obj = new Static("Static17",null,"132","61","20","9",null,null,null,null,null,this.Div07.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_MF_DataTi_C");
            obj.set_text("금일");
            this.Div07.addChild(obj.name, obj);

            obj = new Static("Static18",null,"49","30","22","35",null,null,null,null,null,this.Div07.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_MF_Temp_01");
            obj.set_text("16");
            this.Div07.addChild(obj.name, obj);

            obj = new Static("Static19",null,"49","15","22","15",null,null,null,null,null,this.Div07.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_MF_Temp_02");
            obj.set_text("℃");
            this.Div07.addChild(obj.name, obj);

            obj = new Div("Div08","1268","482","189","267",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("Div00");
            obj.set_cssclass("div_MF_Box");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"80","0",null,null,null,null,null,this.Div08.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_MF_ColorBg_01");
            this.Div08.addChild(obj.name, obj);

            obj = new Static("Static01","19","10","100","20",null,null,null,null,null,null,this.Div08.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_MF_Airport_Eng");
            obj.set_text("YANGYANG");
            this.Div08.addChild(obj.name, obj);

            obj = new Static("Static02","17","22","102","45",null,null,null,null,null,null,this.Div08.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_MF_Airport_Kor");
            obj.set_text("양양");
            this.Div08.addChild(obj.name, obj);

            obj = new Static("Static08","16","90","30","30",null,null,null,null,null,null,this.Div08.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_MF_Planeicon");
            this.Div08.addChild(obj.name, obj);

            obj = new Static("Static07",null,"90","55","30","20",null,null,null,null,null,this.Div08.form);
            obj.set_taborder("4");
            obj.set_text("정상");
            obj.set_cssclass("sta_MF_ColorTxt_01");
            this.Div08.addChild(obj.name, obj);

            obj = new Static("Static03","10","128",null,"1","10",null,null,null,null,null,this.Div08.form);
            obj.set_taborder("5");
            obj.set_background("#b6b6b6");
            this.Div08.addChild(obj.name, obj);

            obj = new Static("Static04",null,"17","30","30","18",null,null,null,null,null,this.Div08.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_MF_Weather_01");
            this.Div08.addChild(obj.name, obj);

            obj = new Static("Static05","48","133","60","20",null,null,null,null,null,null,this.Div08.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_MF_DataTi_C");
            obj.set_text(" 전일");
            this.Div08.addChild(obj.name, obj);

            obj = new Static("Static06","10","158","42","95",null,null,null,null,null,null,this.Div08.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_MF_DataTi");
            obj.set_text("운항\r\n지연\r\n결항\r\n여객수");
            this.Div08.addChild(obj.name, obj);

            obj = new Static("Static09","48","159","60","22",null,null,null,null,null,null,this.Div08.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/999");
            this.Div08.addChild(obj.name, obj);

            obj = new Static("Static10",null,"159","61","22","9",null,null,null,null,null,this.Div08.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/999");
            this.Div08.addChild(obj.name, obj);

            obj = new Static("Static11",null,"184","61","22","9",null,null,null,null,null,this.Div08.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("0/0");
            this.Div08.addChild(obj.name, obj);

            obj = new Static("Static12","48","184","60","22",null,null,null,null,null,null,this.Div08.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("0/0");
            this.Div08.addChild(obj.name, obj);

            obj = new Static("Static13",null,"209","61","22","9",null,null,null,null,null,this.Div08.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/50");
            this.Div08.addChild(obj.name, obj);

            obj = new Static("Static14","48","209","60","22",null,null,null,null,null,null,this.Div08.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/999");
            this.Div08.addChild(obj.name, obj);

            obj = new Static("Static15",null,"234","61","22","9",null,null,null,null,null,this.Div08.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/999");
            this.Div08.addChild(obj.name, obj);

            obj = new Static("Static16","48","234","60","22",null,null,null,null,null,null,this.Div08.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/999");
            this.Div08.addChild(obj.name, obj);

            obj = new Static("Static17",null,"132","61","20","9",null,null,null,null,null,this.Div08.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_MF_DataTi_C");
            obj.set_text("금일");
            this.Div08.addChild(obj.name, obj);

            obj = new Static("Static18",null,"49","30","22","35",null,null,null,null,null,this.Div08.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_MF_Temp_01");
            obj.set_text("16");
            this.Div08.addChild(obj.name, obj);

            obj = new Static("Static19",null,"49","15","22","15",null,null,null,null,null,this.Div08.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_MF_Temp_02");
            obj.set_text("℃");
            this.Div08.addChild(obj.name, obj);

            obj = new Div("Div09","1061","482","187","267",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("Div00");
            obj.set_cssclass("div_MF_Box");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"80","0",null,null,null,null,null,this.Div09.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_MF_ColorBg_01");
            this.Div09.addChild(obj.name, obj);

            obj = new Static("Static01","19","10","100","20",null,null,null,null,null,null,this.Div09.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_MF_Airport_Eng");
            obj.set_text("WONJU");
            this.Div09.addChild(obj.name, obj);

            obj = new Static("Static02","17","22","102","45",null,null,null,null,null,null,this.Div09.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_MF_Airport_Kor");
            obj.set_text("원주");
            this.Div09.addChild(obj.name, obj);

            obj = new Static("Static08","16","90","30","30",null,null,null,null,null,null,this.Div09.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_MF_Planeicon");
            this.Div09.addChild(obj.name, obj);

            obj = new Static("Static07",null,"90","55","30","20",null,null,null,null,null,this.Div09.form);
            obj.set_taborder("4");
            obj.set_text("정상");
            obj.set_cssclass("sta_MF_ColorTxt_01");
            this.Div09.addChild(obj.name, obj);

            obj = new Static("Static03","10","128",null,"1","10",null,null,null,null,null,this.Div09.form);
            obj.set_taborder("5");
            obj.set_background("#b6b6b6");
            this.Div09.addChild(obj.name, obj);

            obj = new Static("Static04",null,"17","30","30","18",null,null,null,null,null,this.Div09.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_MF_Weather_08");
            this.Div09.addChild(obj.name, obj);

            obj = new Static("Static05","48","133","60","20",null,null,null,null,null,null,this.Div09.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_MF_DataTi_C");
            obj.set_text(" 전일");
            this.Div09.addChild(obj.name, obj);

            obj = new Static("Static06","10","158","42","95",null,null,null,null,null,null,this.Div09.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_MF_DataTi");
            obj.set_text("운항\r\n지연\r\n결항\r\n여객수");
            this.Div09.addChild(obj.name, obj);

            obj = new Static("Static09","48","159","60","22",null,null,null,null,null,null,this.Div09.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/999");
            this.Div09.addChild(obj.name, obj);

            obj = new Static("Static10",null,"159","61","22","9",null,null,null,null,null,this.Div09.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/999");
            this.Div09.addChild(obj.name, obj);

            obj = new Static("Static11",null,"184","61","22","9",null,null,null,null,null,this.Div09.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("0/0");
            this.Div09.addChild(obj.name, obj);

            obj = new Static("Static12","48","184","60","22",null,null,null,null,null,null,this.Div09.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("0/0");
            this.Div09.addChild(obj.name, obj);

            obj = new Static("Static13",null,"209","61","22","9",null,null,null,null,null,this.Div09.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/50");
            this.Div09.addChild(obj.name, obj);

            obj = new Static("Static14","48","209","60","22",null,null,null,null,null,null,this.Div09.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/999");
            this.Div09.addChild(obj.name, obj);

            obj = new Static("Static15",null,"234","61","22","9",null,null,null,null,null,this.Div09.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/999");
            this.Div09.addChild(obj.name, obj);

            obj = new Static("Static16","48","234","60","22",null,null,null,null,null,null,this.Div09.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/999");
            this.Div09.addChild(obj.name, obj);

            obj = new Static("Static17",null,"132","61","20","9",null,null,null,null,null,this.Div09.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_MF_DataTi_C");
            obj.set_text("금일");
            this.Div09.addChild(obj.name, obj);

            obj = new Static("Static18",null,"49","30","22","35",null,null,null,null,null,this.Div09.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_MF_Temp_01");
            obj.set_text("16");
            this.Div09.addChild(obj.name, obj);

            obj = new Static("Static19",null,"49","15","22","15",null,null,null,null,null,this.Div09.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_MF_Temp_02");
            obj.set_text("℃");
            this.Div09.addChild(obj.name, obj);

            obj = new Div("Div10","854","482","187","267",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("Div00");
            obj.set_cssclass("div_MF_Box");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"80","0",null,null,null,null,null,this.Div10.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_MF_ColorBg_01");
            this.Div10.addChild(obj.name, obj);

            obj = new Static("Static01","19","10","100","20",null,null,null,null,null,null,this.Div10.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_MF_Airport_Eng");
            obj.set_text("GUNSAN");
            this.Div10.addChild(obj.name, obj);

            obj = new Static("Static02","17","22","102","45",null,null,null,null,null,null,this.Div10.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_MF_Airport_Kor");
            obj.set_text("군산");
            this.Div10.addChild(obj.name, obj);

            obj = new Static("Static08","16","90","30","30",null,null,null,null,null,null,this.Div10.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_MF_Planeicon");
            this.Div10.addChild(obj.name, obj);

            obj = new Static("Static07",null,"90","55","30","20",null,null,null,null,null,this.Div10.form);
            obj.set_taborder("4");
            obj.set_text("정상");
            obj.set_cssclass("sta_MF_ColorTxt_01");
            this.Div10.addChild(obj.name, obj);

            obj = new Static("Static03","10","128",null,"1","10",null,null,null,null,null,this.Div10.form);
            obj.set_taborder("5");
            obj.set_background("#b6b6b6");
            this.Div10.addChild(obj.name, obj);

            obj = new Static("Static04",null,"17","30","30","18",null,null,null,null,null,this.Div10.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_MF_Weather_01");
            this.Div10.addChild(obj.name, obj);

            obj = new Static("Static05","48","133","60","20",null,null,null,null,null,null,this.Div10.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_MF_DataTi_C");
            obj.set_text(" 전일");
            this.Div10.addChild(obj.name, obj);

            obj = new Static("Static06","10","158","42","95",null,null,null,null,null,null,this.Div10.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_MF_DataTi");
            obj.set_text("운항\r\n지연\r\n결항\r\n여객수");
            this.Div10.addChild(obj.name, obj);

            obj = new Static("Static09","48","159","60","22",null,null,null,null,null,null,this.Div10.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/999");
            this.Div10.addChild(obj.name, obj);

            obj = new Static("Static10",null,"159","61","22","9",null,null,null,null,null,this.Div10.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/999");
            this.Div10.addChild(obj.name, obj);

            obj = new Static("Static11",null,"184","61","22","9",null,null,null,null,null,this.Div10.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("0/0");
            this.Div10.addChild(obj.name, obj);

            obj = new Static("Static12","48","184","60","22",null,null,null,null,null,null,this.Div10.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("0/0");
            this.Div10.addChild(obj.name, obj);

            obj = new Static("Static13",null,"209","61","22","9",null,null,null,null,null,this.Div10.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/50");
            this.Div10.addChild(obj.name, obj);

            obj = new Static("Static14","48","209","60","22",null,null,null,null,null,null,this.Div10.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/999");
            this.Div10.addChild(obj.name, obj);

            obj = new Static("Static15",null,"234","61","22","9",null,null,null,null,null,this.Div10.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/999");
            this.Div10.addChild(obj.name, obj);

            obj = new Static("Static16","48","234","60","22",null,null,null,null,null,null,this.Div10.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/999");
            this.Div10.addChild(obj.name, obj);

            obj = new Static("Static17",null,"132","61","20","9",null,null,null,null,null,this.Div10.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_MF_DataTi_C");
            obj.set_text("금일");
            this.Div10.addChild(obj.name, obj);

            obj = new Static("Static18",null,"49","30","22","35",null,null,null,null,null,this.Div10.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_MF_Temp_01");
            obj.set_text("16");
            this.Div10.addChild(obj.name, obj);

            obj = new Static("Static19",null,"49","15","22","15",null,null,null,null,null,this.Div10.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_MF_Temp_02");
            obj.set_text("℃");
            this.Div10.addChild(obj.name, obj);

            obj = new Div("Div11","645","482","189","267",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("Div00");
            obj.set_cssclass("div_MF_Box");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"80","0",null,null,null,null,null,this.Div11.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_MF_ColorBg_01");
            this.Div11.addChild(obj.name, obj);

            obj = new Static("Static01","19","10","100","20",null,null,null,null,null,null,this.Div11.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_MF_Airport_Eng");
            obj.set_text("POHANG");
            this.Div11.addChild(obj.name, obj);

            obj = new Static("Static02","17","22","102","45",null,null,null,null,null,null,this.Div11.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_MF_Airport_Kor");
            obj.set_text("포항");
            this.Div11.addChild(obj.name, obj);

            obj = new Static("Static08","16","90","30","30",null,null,null,null,null,null,this.Div11.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_MF_Planeicon");
            this.Div11.addChild(obj.name, obj);

            obj = new Static("Static07",null,"90","55","30","20",null,null,null,null,null,this.Div11.form);
            obj.set_taborder("4");
            obj.set_text("정상");
            obj.set_cssclass("sta_MF_ColorTxt_01");
            this.Div11.addChild(obj.name, obj);

            obj = new Static("Static03","10","128",null,"1","10",null,null,null,null,null,this.Div11.form);
            obj.set_taborder("5");
            obj.set_background("#b6b6b6");
            this.Div11.addChild(obj.name, obj);

            obj = new Static("Static04",null,"17","30","30","18",null,null,null,null,null,this.Div11.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_MF_Weather_01");
            this.Div11.addChild(obj.name, obj);

            obj = new Static("Static05","48","133","60","20",null,null,null,null,null,null,this.Div11.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_MF_DataTi_C");
            obj.set_text(" 전일");
            this.Div11.addChild(obj.name, obj);

            obj = new Static("Static06","10","158","42","95",null,null,null,null,null,null,this.Div11.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_MF_DataTi");
            obj.set_text("운항\r\n지연\r\n결항\r\n여객수");
            this.Div11.addChild(obj.name, obj);

            obj = new Static("Static09","48","159","60","22",null,null,null,null,null,null,this.Div11.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/999");
            this.Div11.addChild(obj.name, obj);

            obj = new Static("Static10",null,"159","61","22","9",null,null,null,null,null,this.Div11.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/999");
            this.Div11.addChild(obj.name, obj);

            obj = new Static("Static11",null,"184","61","22","9",null,null,null,null,null,this.Div11.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("0/0");
            this.Div11.addChild(obj.name, obj);

            obj = new Static("Static12","48","184","60","22",null,null,null,null,null,null,this.Div11.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("0/0");
            this.Div11.addChild(obj.name, obj);

            obj = new Static("Static13",null,"209","61","22","9",null,null,null,null,null,this.Div11.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/50");
            this.Div11.addChild(obj.name, obj);

            obj = new Static("Static14","48","209","60","22",null,null,null,null,null,null,this.Div11.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/999");
            this.Div11.addChild(obj.name, obj);

            obj = new Static("Static15",null,"234","61","22","9",null,null,null,null,null,this.Div11.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/999");
            this.Div11.addChild(obj.name, obj);

            obj = new Static("Static16","48","234","60","22",null,null,null,null,null,null,this.Div11.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/999");
            this.Div11.addChild(obj.name, obj);

            obj = new Static("Static17",null,"132","61","20","9",null,null,null,null,null,this.Div11.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_MF_DataTi_C");
            obj.set_text("금일");
            this.Div11.addChild(obj.name, obj);

            obj = new Static("Static18",null,"49","30","22","35",null,null,null,null,null,this.Div11.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_MF_Temp_01");
            obj.set_text("16");
            this.Div11.addChild(obj.name, obj);

            obj = new Static("Static19",null,"49","15","22","15",null,null,null,null,null,this.Div11.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_MF_Temp_02");
            obj.set_text("℃");
            this.Div11.addChild(obj.name, obj);

            obj = new Div("Div12","230","482","188","266",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("Div00");
            obj.set_cssclass("div_MF_Box");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"80","0",null,null,null,null,null,this.Div12.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_MF_ColorBg_01");
            this.Div12.addChild(obj.name, obj);

            obj = new Static("Static01","19","10","100","20",null,null,null,null,null,null,this.Div12.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_MF_Airport_Eng");
            obj.set_text("ULSAN");
            this.Div12.addChild(obj.name, obj);

            obj = new Static("Static02","17","22","102","45",null,null,null,null,null,null,this.Div12.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_MF_Airport_Kor");
            obj.set_text("울산");
            this.Div12.addChild(obj.name, obj);

            obj = new Static("Static08","16","90","30","30",null,null,null,null,null,null,this.Div12.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_MF_Planeicon");
            this.Div12.addChild(obj.name, obj);

            obj = new Static("Static07",null,"90","55","30","20",null,null,null,null,null,this.Div12.form);
            obj.set_taborder("4");
            obj.set_text("정상");
            obj.set_cssclass("sta_MF_ColorTxt_01");
            this.Div12.addChild(obj.name, obj);

            obj = new Static("Static03","10","128",null,"1","10",null,null,null,null,null,this.Div12.form);
            obj.set_taborder("5");
            obj.set_background("#b6b6b6");
            this.Div12.addChild(obj.name, obj);

            obj = new Static("Static04",null,"17","30","30","18",null,null,null,null,null,this.Div12.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_MF_Weather_01");
            this.Div12.addChild(obj.name, obj);

            obj = new Static("Static05","48","133","60","20",null,null,null,null,null,null,this.Div12.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_MF_DataTi_C");
            obj.set_text(" 전일");
            this.Div12.addChild(obj.name, obj);

            obj = new Static("Static06","10","158","42","95",null,null,null,null,null,null,this.Div12.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_MF_DataTi");
            obj.set_text("운항\r\n지연\r\n결항\r\n여객수");
            this.Div12.addChild(obj.name, obj);

            obj = new Static("Static09","48","159","60","22",null,null,null,null,null,null,this.Div12.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/999");
            this.Div12.addChild(obj.name, obj);

            obj = new Static("Static10",null,"159","61","22","9",null,null,null,null,null,this.Div12.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/999");
            this.Div12.addChild(obj.name, obj);

            obj = new Static("Static11",null,"184","61","22","9",null,null,null,null,null,this.Div12.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("0/0");
            this.Div12.addChild(obj.name, obj);

            obj = new Static("Static12","48","184","60","22",null,null,null,null,null,null,this.Div12.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("0/0");
            this.Div12.addChild(obj.name, obj);

            obj = new Static("Static13",null,"209","61","22","9",null,null,null,null,null,this.Div12.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/50");
            this.Div12.addChild(obj.name, obj);

            obj = new Static("Static14","48","209","60","22",null,null,null,null,null,null,this.Div12.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/999");
            this.Div12.addChild(obj.name, obj);

            obj = new Static("Static15",null,"234","61","22","9",null,null,null,null,null,this.Div12.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/999");
            this.Div12.addChild(obj.name, obj);

            obj = new Static("Static16","48","234","60","22",null,null,null,null,null,null,this.Div12.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/999");
            this.Div12.addChild(obj.name, obj);

            obj = new Static("Static17",null,"132","61","20","9",null,null,null,null,null,this.Div12.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_MF_DataTi_C");
            obj.set_text("금일");
            this.Div12.addChild(obj.name, obj);

            obj = new Static("Static18",null,"49","30","22","35",null,null,null,null,null,this.Div12.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_MF_Temp_01");
            obj.set_text("16");
            this.Div12.addChild(obj.name, obj);

            obj = new Static("Static19",null,"49","15","22","15",null,null,null,null,null,this.Div12.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_MF_Temp_02");
            obj.set_text("℃");
            this.Div12.addChild(obj.name, obj);

            obj = new Div("Div13","22","482","188","266",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("Div00");
            obj.set_cssclass("div_MF_Box");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"80","0",null,null,null,null,null,this.Div13.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_MF_ColorBg_01");
            this.Div13.addChild(obj.name, obj);

            obj = new Static("Static01","19","10","100","20",null,null,null,null,null,null,this.Div13.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_MF_Airport_Eng");
            obj.set_text("YEOSU");
            this.Div13.addChild(obj.name, obj);

            obj = new Static("Static02","17","22","102","45",null,null,null,null,null,null,this.Div13.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_MF_Airport_Kor");
            obj.set_text("여수");
            this.Div13.addChild(obj.name, obj);

            obj = new Static("Static08","16","90","30","30",null,null,null,null,null,null,this.Div13.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_MF_Planeicon");
            this.Div13.addChild(obj.name, obj);

            obj = new Static("Static07",null,"90","55","30","20",null,null,null,null,null,this.Div13.form);
            obj.set_taborder("4");
            obj.set_text("정상");
            obj.set_cssclass("sta_MF_ColorTxt_01");
            this.Div13.addChild(obj.name, obj);

            obj = new Static("Static03","10","128",null,"1","10",null,null,null,null,null,this.Div13.form);
            obj.set_taborder("5");
            obj.set_background("#b6b6b6");
            this.Div13.addChild(obj.name, obj);

            obj = new Static("Static04",null,"17","30","30","18",null,null,null,null,null,this.Div13.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_MF_Weather_01");
            this.Div13.addChild(obj.name, obj);

            obj = new Static("Static05","48","133","60","20",null,null,null,null,null,null,this.Div13.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_MF_DataTi_C");
            obj.set_text(" 전일");
            this.Div13.addChild(obj.name, obj);

            obj = new Static("Static06","10","158","42","95",null,null,null,null,null,null,this.Div13.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_MF_DataTi");
            obj.set_text("운항\r\n지연\r\n결항\r\n여객수");
            this.Div13.addChild(obj.name, obj);

            obj = new Static("Static09","48","159","60","22",null,null,null,null,null,null,this.Div13.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/999");
            this.Div13.addChild(obj.name, obj);

            obj = new Static("Static10",null,"159","61","22","9",null,null,null,null,null,this.Div13.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/999");
            this.Div13.addChild(obj.name, obj);

            obj = new Static("Static11",null,"184","61","22","9",null,null,null,null,null,this.Div13.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("0/0");
            this.Div13.addChild(obj.name, obj);

            obj = new Static("Static12","48","184","60","22",null,null,null,null,null,null,this.Div13.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("0/0");
            this.Div13.addChild(obj.name, obj);

            obj = new Static("Static13",null,"209","61","22","9",null,null,null,null,null,this.Div13.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/50");
            this.Div13.addChild(obj.name, obj);

            obj = new Static("Static14","48","209","60","22",null,null,null,null,null,null,this.Div13.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/999");
            this.Div13.addChild(obj.name, obj);

            obj = new Static("Static15",null,"234","61","22","9",null,null,null,null,null,this.Div13.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/999");
            this.Div13.addChild(obj.name, obj);

            obj = new Static("Static16","48","234","60","22",null,null,null,null,null,null,this.Div13.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/999");
            this.Div13.addChild(obj.name, obj);

            obj = new Static("Static17",null,"132","61","20","9",null,null,null,null,null,this.Div13.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_MF_DataTi_C");
            obj.set_text("금일");
            this.Div13.addChild(obj.name, obj);

            obj = new Static("Static18",null,"49","30","22","35",null,null,null,null,null,this.Div13.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_MF_Temp_01");
            obj.set_text("16");
            this.Div13.addChild(obj.name, obj);

            obj = new Static("Static19",null,"49","15","22","15",null,null,null,null,null,this.Div13.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_MF_Temp_02");
            obj.set_text("℃");
            this.Div13.addChild(obj.name, obj);

            obj = new Div("Div14","438","482","187","267",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("Div00");
            obj.set_cssclass("div_MF_Box");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"80","0",null,null,null,null,null,this.Div14.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_MF_ColorBg_01");
            this.Div14.addChild(obj.name, obj);

            obj = new Static("Static01","19","10","100","20",null,null,null,null,null,null,this.Div14.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_MF_Airport_Eng");
            obj.set_text("SACHEON");
            this.Div14.addChild(obj.name, obj);

            obj = new Static("Static02","17","22","102","45",null,null,null,null,null,null,this.Div14.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_MF_Airport_Kor");
            obj.set_text("사천");
            this.Div14.addChild(obj.name, obj);

            obj = new Static("Static08","16","90","30","30",null,null,null,null,null,null,this.Div14.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_MF_Planeicon");
            this.Div14.addChild(obj.name, obj);

            obj = new Static("Static07",null,"90","55","30","20",null,null,null,null,null,this.Div14.form);
            obj.set_taborder("4");
            obj.set_text("정상");
            obj.set_cssclass("sta_MF_ColorTxt_01");
            this.Div14.addChild(obj.name, obj);

            obj = new Static("Static03","10","128",null,"1","10",null,null,null,null,null,this.Div14.form);
            obj.set_taborder("5");
            obj.set_background("#b6b6b6");
            this.Div14.addChild(obj.name, obj);

            obj = new Static("Static04",null,"17","30","30","18",null,null,null,null,null,this.Div14.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_MF_Weather_01");
            this.Div14.addChild(obj.name, obj);

            obj = new Static("Static05","48","133","60","20",null,null,null,null,null,null,this.Div14.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_MF_DataTi_C");
            obj.set_text(" 전일");
            this.Div14.addChild(obj.name, obj);

            obj = new Static("Static06","10","158","42","95",null,null,null,null,null,null,this.Div14.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_MF_DataTi");
            obj.set_text("운항\r\n지연\r\n결항\r\n여객수");
            this.Div14.addChild(obj.name, obj);

            obj = new Static("Static09","48","159","60","22",null,null,null,null,null,null,this.Div14.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/999");
            this.Div14.addChild(obj.name, obj);

            obj = new Static("Static10",null,"159","61","22","9",null,null,null,null,null,this.Div14.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/999");
            this.Div14.addChild(obj.name, obj);

            obj = new Static("Static11",null,"184","61","22","9",null,null,null,null,null,this.Div14.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("0/0");
            this.Div14.addChild(obj.name, obj);

            obj = new Static("Static12","48","184","60","22",null,null,null,null,null,null,this.Div14.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("0/0");
            this.Div14.addChild(obj.name, obj);

            obj = new Static("Static13",null,"209","61","22","9",null,null,null,null,null,this.Div14.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/50");
            this.Div14.addChild(obj.name, obj);

            obj = new Static("Static14","48","209","60","22",null,null,null,null,null,null,this.Div14.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/999");
            this.Div14.addChild(obj.name, obj);

            obj = new Static("Static15",null,"234","61","22","9",null,null,null,null,null,this.Div14.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/999");
            this.Div14.addChild(obj.name, obj);

            obj = new Static("Static16","48","234","60","22",null,null,null,null,null,null,this.Div14.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_MF_Data");
            obj.set_text("999/999");
            this.Div14.addChild(obj.name, obj);

            obj = new Static("Static17",null,"132","61","20","9",null,null,null,null,null,this.Div14.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_MF_DataTi_C");
            obj.set_text("금일");
            this.Div14.addChild(obj.name, obj);

            obj = new Static("Static18",null,"49","30","22","35",null,null,null,null,null,this.Div14.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_MF_Temp_01");
            obj.set_text("16");
            this.Div14.addChild(obj.name, obj);

            obj = new Static("Static19",null,"49","15","22","15",null,null,null,null,null,this.Div14.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_MF_Temp_02");
            obj.set_text("℃");
            this.Div14.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1500,780,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("MainFrame.xfdl", function() {

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.MainFrame_onload,this);
        };
        this.loadIncludeScript("MainFrame.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
