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
            this.set_titletext("Calendar / CheckBox / Radio / Tab / ImageViewer / Menu / FileUpload / FileDownload / PopupMenu / ProgressBar / GroupBox / Div / PopupDiv");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cmb", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">예</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">아니요</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_menu", this);
            obj._setContents("<ColumnInfo><Column id=\"idx\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/><Column id=\"UserData\" type=\"STRING\" size=\"256\"/><Column id=\"Caption\" type=\"STRING\" size=\"256\"/><Column id=\"enable\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"idx\">1000</Col><Col id=\"lev\">0</Col><Col id=\"enable\">1</Col><Col id=\"UserData\">PopupMenu01</Col><Col id=\"Caption\">PopupMenu01</Col></Row><Row><Col id=\"idx\">1001</Col><Col id=\"lev\">0</Col><Col id=\"enable\">1</Col><Col id=\"UserData\">PopupMenu02</Col><Col id=\"Caption\">PopupMenu02</Col></Row><Row><Col id=\"idx\">1002</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"UserData\">PopupMenu01</Col><Col id=\"Caption\">PopupMenu01</Col></Row><Row><Col id=\"idx\">1003</Col><Col id=\"lev\">1</Col><Col id=\"enable\">0</Col><Col id=\"UserData\">PopupMenu02</Col><Col id=\"Caption\">PopupMenu02</Col></Row><Row><Col id=\"idx\">1004</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"UserData\">PopupMenu03</Col><Col id=\"Caption\">PopupMenu03</Col></Row><Row><Col id=\"idx\">1005</Col><Col id=\"lev\">1</Col><Col id=\"enable\">0</Col><Col id=\"UserData\">PopupMenu04</Col><Col id=\"Caption\">PopupMenu04</Col></Row><Row><Col id=\"idx\">1006</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"UserData\">PopupMenu05</Col><Col id=\"Caption\">PopupMenu05</Col></Row><Row><Col id=\"idx\">1007</Col><Col id=\"lev\">0</Col><Col id=\"enable\">1</Col><Col id=\"UserData\">PopupMenu03</Col><Col id=\"Caption\">PopupMenu03</Col></Row><Row><Col id=\"idx\">1008</Col><Col id=\"lev\">0</Col><Col id=\"enable\">1</Col><Col id=\"UserData\">PopupMenu04</Col><Col id=\"Caption\">PopupMenu04</Col></Row><Row><Col id=\"idx\">1008</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"UserData\">PopupMenu01</Col><Col id=\"Caption\">PopupMenu01</Col></Row><Row><Col id=\"idx\">1009</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"UserData\">PopupMenu02</Col><Col id=\"Caption\">PopupMenu02</Col></Row><Row><Col id=\"idx\">1010</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"UserData\">PopupMenu03</Col><Col id=\"Caption\">PopupMenu03</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_00","0","0",null,"200","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#ccd6dc");
            this.addChild(obj.name, obj);

            obj = new Static("stc_02","20","80","260","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#0066b3");
            obj.set_text("Component Guide 02");
            obj.set_color("#ffffff");
            obj.set_font("normal 20px/normal \"Malgun Gothic\"");
            obj.set_letterSpacing("0px");
            obj.set_padding("0px, 0px, 0px, 10px");
            this.addChild(obj.name, obj);

            obj = new Static("stc_03","20","147","1040","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Calendar / CheckBox / Radio / Tab / ImageViewer / Menu / FileUpload / FileDownload / PopupMenu / ProgressBar / GroupBox / Div / PopupDiv");
            obj.set_font("normal 14px/normal \"Malgun Gothic\"");
            obj.set_color("#363636");
            this.addChild(obj.name, obj);

            obj = new Static("stc_04","20","225","600","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Calendar");
            obj.set_font("24px/normal \"Malgun Gothic\"");
            obj.set_color("#000000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_05","20","277","490","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("- Calendar 최소 사이즈 110px 이며 높이는 22px 설정에 따라 사용");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_08","20","350","80","22",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("enabled");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09","20","377","80","22",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("disabled");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new Static("stc_10","20","404","80","22",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("읽기전용");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new Static("stc_11","20","431","80","22",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("필수입력");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new Tab("tab_00","20","820","350","165",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_00);
            obj.set_text("Tabpage1");
            this.tab_00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab_00);
            obj.set_text("Tabpage2");
            this.tab_00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.tab_00);
            obj.set_text("Tabpage3");
            this.tab_00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.tab_00);
            obj.set_text("Tabpage4");
            this.tab_00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage5",this.tab_00);
            obj.set_text("Tabpage5");
            this.tab_00.addChild(obj.name, obj);

            obj = new Static("stc_31","391","351","30","20",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("22");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("stc_32","372","350","11","1",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_background("#ff0000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_33","372","371","11","1",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_background("#ff0000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_34","377","351","1","20",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_background("#ff0000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_38","112","321","100","22",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("type = \"normal\"");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new Static("stc_39","20","730","600","40",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("Tab");
            obj.set_font("24px/normal \"Malgun Gothic\"");
            obj.set_color("#000000");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_00","112","350","110","22",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_01","112","377","110","22",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_02","112","404","110","22",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_03","112","431","110","22",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Static("stc_06","260","320","99","22",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("type = \"spin\"");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_04","260","377","109","22",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_05","260","404","109","22",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_06","260","431","109","22",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_07","260","350","109","22",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            this.addChild(obj.name, obj);

            obj = new Static("stc_07","112","458","1","11",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_background("#ff0000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12","221","458","1","11",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_background("#ff0000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13","113","463","109","1",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_background("#ff0000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14","157","469","30","20",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("110");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("stc_15","20","550","80","22",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("기간달력");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_08","112","550","110","22",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_09","250","550","109","22",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            this.addChild(obj.name, obj);

            obj = new Static("stc_16","20","575","80","22",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("기간월력");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_10","250","577","109","22",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_11","112","577","110","22",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_autoselect("true");
            obj.set_autoskip("true");
            obj.set_dateformat("yyyy-MM");
            obj.set_editformat("yyyy-MM");
            this.addChild(obj.name, obj);

            obj = new Static("stc_17","232","550","18","22",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_SearchLbl_L");
            this.addChild(obj.name, obj);

            obj = new Static("stc_18","232","577","18","22",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_SearchLbl_L");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_12","477","349","200","213",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_type("monthonly");
            obj.set_value("20180313");
            this.addChild(obj.name, obj);

            obj = new Static("stc_19","477","320","139","21",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("type = :Monthonly\"");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new Static("stc_20","20","1020","600","40",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("CheckBox");
            obj.set_font("24px/normal \"Malgun Gothic\"");
            obj.set_color("#000000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_21","660","1018","600","40",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("Radio");
            obj.set_font("24px/normal \"Malgun Gothic\"");
            obj.set_color("#000000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_22","20","789","160","22",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("showextrabutton = false");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new Tab("tab_01","670","820","350","164",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_tabindex("0");
            obj.set_showextrabutton("true");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_01);
            obj.set_text("Tabpage1");
            this.tab_01.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab_01);
            obj.set_text("Tabpage2");
            this.tab_01.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.tab_01);
            obj.set_text("Tabpage3");
            this.tab_01.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.tab_01);
            obj.set_text("Tabpage4");
            this.tab_01.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage5",this.tab_01);
            obj.set_text("Tabpage5");
            this.tab_01.addChild(obj.name, obj);

            obj = new Static("stc_23","670","788","160","22",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("showextrabutton = true");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new Static("stc_24","660","1230","600","40",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("FileDownload");
            obj.set_font("24px/normal \"Malgun Gothic\"");
            obj.set_color("#000000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_25","20","1231","600","40",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("FileUpload");
            obj.set_font("24px/normal \"Malgun Gothic\"");
            obj.set_color("#000000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_26","20","1440","600","40",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("PopupMenu");
            obj.set_font("24px/normal \"Malgun Gothic\"");
            obj.set_color("#000000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_27","660","1440","600","40",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("ProgressBar");
            obj.set_font("24px/normal \"Malgun Gothic\"");
            obj.set_color("#000000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_28","20","1670","600","40",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("Div/PopupDiv");
            obj.set_font("24px/normal \"Malgun Gothic\"");
            obj.set_color("#000000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_29","660","1670","600","40",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("GroupBox");
            obj.set_font("24px/normal \"Malgun Gothic\"");
            obj.set_color("#000000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_30","20","1920","600","40",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("ImageViewer");
            obj.set_font("24px/normal \"Malgun Gothic\"");
            obj.set_color("#000000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_35","20","1077","60","23",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("enabled");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_00","20","1106","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("None Check");
            obj.set_tooltiptype("hover");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_01","20","1136","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("Check");
            obj.set_tooltiptype("hover");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_02","20","1166","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("Essential Check");
            obj.set_tooltiptype("hover");
            obj.set_cssclass("point");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_03","200","1105","100","22",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("None Check");
            obj.set_tooltiptype("hover");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_04","200","1135","100","22",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("Check");
            obj.set_tooltiptype("hover");
            obj.set_value("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_05","200","1165","100","22",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("Check");
            obj.set_tooltiptype("hover");
            obj.set_cssclass("point");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_36","200","1076","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("disabled");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new Static("stc_37","315","1163","80","25",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("class : <b v=\'true\'>point</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_40","889","1075","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("disabled");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new Static("stc_41","1040","1133","80","25",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("class : <b v=\'true\'>point</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_42","660","1076","59","24",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("enabled");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_00","660","1105","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_direction("vertical");
            obj.set_innerdataset("ds_cmb");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_text("예");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_01","660","1135","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_direction("vertical");
            obj.set_innerdataset("ds_cmb");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_cssclass("point");
            obj.set_text("예");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_02","888","1134","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_direction("vertical");
            obj.set_innerdataset("ds_cmb");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_cssclass("point");
            obj.set_enable("false");
            obj.set_text("예");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_03","888","1104","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_direction("vertical");
            obj.set_innerdataset("ds_cmb");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_enable("false");
            obj.set_text("예");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new GroupBox("grp_00","661","1770","250","120",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_text("그룹박스");
            this.addChild(obj.name, obj);

            obj = new GroupBox("grp_01","935","1770","250","120",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("그룹박스");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_43","660","1730","59","24",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("enabled");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new Static("stc_44","935","1730","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_text("disabled");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_00","20","2003","150","60",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_image("URL(\"theme://images/sta_TF_Logo.png\")");
            this.addChild(obj.name, obj);

            obj = new Static("stc_45","20","1976","59","24",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_text("enabled");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new Static("stc_46","182","1976","59","24",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_text("disabled");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_01","182","2003","140","60",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_image("URL(\"theme://images/sta_TF_Logo.png\")");
            obj.set_enable("false");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_47","397","1978","119","24",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_text("stretch = fit");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_02","397","2005","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_image("URL(\"theme://images/sta_TF_Logo.png\")");
            obj.set_stretch("fit");
            this.addChild(obj.name, obj);

            obj = new Static("stc_48","547","1978","119","24",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_text("stretch = fixaspectratio");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_03","547","2005","210","100",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_image("URL(\"theme://images/sta_TF_Logo.png\")");
            obj.set_stretch("fixaspectratio");
            this.addChild(obj.name, obj);

            obj = new Div("div_00","22","1741","160","80",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_text("Div");
            obj.set_background("pink");
            this.addChild(obj.name, obj);

            obj = new Div("div_01","216","1741","160","80",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_text("PopupDiv");
            obj.set_background("pink");
            this.addChild(obj.name, obj);

            obj = new Static("stc_49","20","1831","359","44",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_text("Div와 PopupDiv는 일반적인 사용은 Form을 로드해서 사용하거나\r\n컴포넌트를 직접 정렬시켜 하는 경우가 대부분이며, \r\n디자인 요소가 필요할 경우 Class로 지정해서 사용");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new PopupMenu("pmnu_00","22","1534","238","126",null,null,null,null,null,null,this);
            obj.set_innerdataset("ds_menu");
            obj.set_captioncolumn("Caption");
            obj.set_enablecolumn("enable");
            obj.set_idcolumn("idx");
            obj.set_levelcolumn("lev");
            obj.set_userdatacolumn("UserData");
            obj.set_checkboxcolumn("check");
            this.addChild(obj.name, obj);

            obj = new Button("btn_00","22","1494","118","40",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_text("PopupMenu");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("pgb_00","660","1535","245","15",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_min("0");
            obj.set_max("100");
            obj.set_pos("65");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("pgb_01","660","1566","245","15",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_min("0");
            obj.set_max("100");
            obj.set_pos("100");
            this.addChild(obj.name, obj);

            obj = new Static("stc_50","660","1490","58","23",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_text("enabled");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("pgb_02","934","1565","246","15",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_enable("false");
            obj.set_min("0");
            obj.set_max("100");
            obj.set_pos("100");
            this.addChild(obj.name, obj);

            obj = new Static("stc_51","934","1490","58","22",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_text("disabled");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("pgb_03","934","1534","246","16",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_enable("false");
            obj.set_min("0");
            obj.set_max("100");
            obj.set_pos("65");
            this.addChild(obj.name, obj);

            obj = new Static("stc_52","762","1278","58","22",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_text("disabled");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new Static("stc_53","660","1278","57","23",null,null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_text("enabled");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new Static("stc_54","20","1288","60","23",null,null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_text("enabled");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new Static("stc_55","20","1316","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_text("disabled");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload02","660","1305","100","20",null,null,null,null,null,null,this);
            obj.set_taborder("97");
            obj.set_text("파일다운로드");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload00","80","1289","280","22",null,null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_itemheight("20");
            obj.set_buttontext("FileUpload");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload00","762","1305","100","20",null,null,null,null,null,null,this);
            obj.set_taborder("97");
            obj.set_text("파일다운로드");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload01","80","1318","280","22",null,null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_itemheight("20");
            obj.set_buttontext("FileUpload");
            obj.set_enable("false");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("stc_56","0","2138",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_background("#ccd6dc");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_14","112","620","100","22",null,null,null,null,null,null,this);
            obj.set_taborder("101");
            obj.set_cssclass("point");
            obj.set_autoselect("true");
            obj.set_autoskip("true");
            obj.set_value("20181030");
            obj.set_type("spin");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01","20","20","390","60",null,null,null,null,null,null,this);
            obj.set_taborder("99");
            obj.set_background("#003876");
            obj.set_text("한국공항공사(iFIS) UI");
            obj.set_color("#ffffff");
            obj.set_font("normal 36px/normal \"Malgun Gothic\"");
            obj.set_letterSpacing("0px");
            obj.set_padding("0px, 0px, 0px, 10px");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","113","670","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("100");
            obj.set_cssclass("btn_WF_CalBtnM");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","137","670","30","22",null,null,null,null,null,null,this);
            obj.set_taborder("101");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CalBtnDay");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_13","169","670","110","22",null,null,null,null,null,null,this);
            obj.set_taborder("102");
            obj.set_value("20181025");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","281","670","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("103");
            obj.set_cssclass("btn_WF_CalBtnP");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","331","670","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("104");
            obj.set_cssclass("btn_WF_CalBtnM");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","355","670","30","22",null,null,null,null,null,null,this);
            obj.set_taborder("105");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CalBtnDay");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_15","387","670","110","22",null,null,null,null,null,null,this);
            obj.set_taborder("106");
            obj.set_value("20181025");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Button("Button05","499","670","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("107");
            obj.set_cssclass("btn_WF_CalBtnP");
            this.addChild(obj.name, obj);

            obj = new Static("stc_57","313","670","18","22",null,null,null,null,null,null,this);
            obj.set_taborder("108");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_SearchLbl_L");
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
        this.registerScript("ComponentGuide_02.xfdl", function() {

        this.tab_00_onchanged = function(obj,e)
        {

        };

        this.ComponentGuide_01_onclick = function(obj,e)
        {

        };

        this.stc_04_onclick = function(obj,e)
        {

        };

        this.stc_22_onclick = function(obj,e)
        {

        };

        this.stc_23_onclick = function(obj,e)
        {

        };

        this.stc_24_onclick = function(obj,e)
        {

        };

        this.mnu_00_onmenuclick = function(obj,e)
        {

        };

        this.pmnu_00_onmenuclick = function(obj,e)
        {

        };

        this.FileUpload00_onitemchanged = function(obj,e)
        {

        };

        this.cal_12_onchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclick",this.ComponentGuide_01_onclick,this);
            this.stc_04.addEventHandler("onclick",this.stc_04_onclick,this);
            this.tab_00.addEventHandler("onchanged",this.tab_00_onchanged,this);
            this.cal_12.addEventHandler("onchanged",this.cal_12_onchanged,this);
            this.stc_22.addEventHandler("onclick",this.stc_22_onclick,this);
            this.tab_01.addEventHandler("onchanged",this.tab_00_onchanged,this);
            this.stc_23.addEventHandler("onclick",this.stc_23_onclick,this);
            this.stc_35.addEventHandler("onclick",this.stc_22_onclick,this);
            this.stc_36.addEventHandler("onclick",this.stc_22_onclick,this);
            this.stc_37.addEventHandler("onclick",this.stc_22_onclick,this);
            this.stc_40.addEventHandler("onclick",this.stc_22_onclick,this);
            this.stc_41.addEventHandler("onclick",this.stc_22_onclick,this);
            this.stc_42.addEventHandler("onclick",this.stc_22_onclick,this);
            this.stc_43.addEventHandler("onclick",this.stc_22_onclick,this);
            this.stc_44.addEventHandler("onclick",this.stc_22_onclick,this);
            this.stc_45.addEventHandler("onclick",this.stc_22_onclick,this);
            this.stc_46.addEventHandler("onclick",this.stc_22_onclick,this);
            this.stc_47.addEventHandler("onclick",this.stc_22_onclick,this);
            this.stc_48.addEventHandler("onclick",this.stc_22_onclick,this);
            this.stc_49.addEventHandler("onclick",this.stc_22_onclick,this);
            this.pmnu_00.addEventHandler("onmenuclick",this.pmnu_00_onmenuclick,this);
            this.stc_50.addEventHandler("onclick",this.stc_22_onclick,this);
            this.stc_51.addEventHandler("onclick",this.stc_22_onclick,this);
            this.stc_52.addEventHandler("onclick",this.stc_22_onclick,this);
            this.stc_53.addEventHandler("onclick",this.stc_22_onclick,this);
            this.stc_54.addEventHandler("onclick",this.stc_22_onclick,this);
            this.stc_55.addEventHandler("onclick",this.stc_22_onclick,this);
            this.FileUpload00.addEventHandler("onitemchanged",this.FileUpload00_onitemchanged,this);
            this.FileUpload01.addEventHandler("onitemchanged",this.FileUpload00_onitemchanged,this);
            this.cal_13.addEventHandler("onchanged",this.div_01_cal_00_onchanged,this);
            this.cal_15.addEventHandler("onchanged",this.div_01_cal_00_onchanged,this);
        };
        this.loadIncludeScript("ComponentGuide_02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
