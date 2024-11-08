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
            this.set_titletext("Edit / MaskEdit / Combo / Spin / TextArea / ListBox / Static");
            this.set_cssclass("point");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("combo", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">Combo</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">Combo</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">Combo</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">Combo</Col></Row><Row><Col id=\"Column0\">5</Col><Col id=\"Column1\">Combo</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmb", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">ListBox</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">ListBox</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">ListBox</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">ListBox</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">ListBox</Col></Row><Row><Col id=\"Column0\">5</Col><Col id=\"Column1\">ListBox</Col></Row><Row><Col id=\"Column0\">6</Col><Col id=\"Column1\">ListBox</Col></Row><Row><Col id=\"Column0\">7</Col><Col id=\"Column1\">ListBox</Col></Row><Row><Col id=\"Column0\">8</Col><Col id=\"Column1\">ListBox</Col></Row><Row><Col id=\"Column0\">9</Col><Col id=\"Column1\">ListBox</Col></Row><Row><Col id=\"Column0\">10</Col><Col id=\"Column1\">ListBox</Col></Row><Row><Col id=\"Column0\">11</Col><Col id=\"Column1\">ListBox</Col></Row><Row><Col id=\"Column0\">12</Col><Col id=\"Column1\">ListBox</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmb00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">하나</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">둘</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">셋</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_00","0","0",null,"200","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#ccd6dc");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01","20","20","390","60",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#003876");
            obj.set_text("한국공항공사(iFIS) UI");
            obj.set_color("#ffffff");
            obj.set_font("normal 36px/normal \"Malgun Gothic\"");
            obj.set_letterSpacing("0px");
            obj.set_padding("0px, 0px, 0px, 10px");
            this.addChild(obj.name, obj);

            obj = new Static("stc_02","20","80","260","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("#0066b3");
            obj.set_text("Component Guide 01");
            obj.set_color("#ffffff");
            obj.set_font("normal 20px/normal \"Malgun Gothic\"");
            obj.set_letterSpacing("0px");
            obj.set_padding("0px, 0px, 0px, 10px");
            this.addChild(obj.name, obj);

            obj = new Static("stc_03","20","147","720","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Edit / MaskEdit / Combo / Spin / TextArea / ListBox / Static");
            obj.set_font("normal 14px/normal \"Malgun Gothic\"");
            obj.set_color("#363636");
            this.addChild(obj.name, obj);

            obj = new Static("stc_04","20","225","600","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Edit");
            obj.set_font("24px/normal \"Malgun Gothic\"");
            obj.set_color("#000000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_08","20","290","80","22",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("enabled");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09","20","317","80","22",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("disabled");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new Static("stc_10","20","344","80","22",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("읽기전용");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new Static("stc_11","20","371","80","22",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("필수입력");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new Static("stc_17","660","224","600","40",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("MaskEdit");
            obj.set_font("24px/normal \"Malgun Gothic\"");
            obj.set_color("#000000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_31","290","289","30","22",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("H22");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("stc_32","271","290","11","1",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_background("#ff0000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_33","271","309","11","1",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_background("#ff0000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_34","276","291","1","18",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_background("#ff0000");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_01","130","290","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_value("Edit");
            obj.set_autoselect("true");
            obj.set_text("Edit");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_02","130","317","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_value("Edit");
            obj.set_autoselect("true");
            obj.set_enable("false");
            obj.set_text("Edit");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_03","130","344","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_value("Edit");
            obj.set_cssclass("readonly");
            obj.set_readonly("true");
            obj.set_text("Edit");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_04","130","371","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_value("Edit");
            obj.set_cssclass("point");
            obj.set_text("Edit");
            this.addChild(obj.name, obj);

            obj = new Static("stc_06","270","365","110","22",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("class : <b v=\'true\'>point</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_07","660","290","80","22",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("enabled");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13","660","317","80","22",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("disabled");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14","660","344","80","22",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("읽기전용");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new Static("stc_15","660","371","80","22",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("필수입력");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new Static("stc_18","930","288","30","22",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("H22");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("stc_19","910","290","11","1",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_background("#ff0000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_20","910","308","11","1",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_background("#ff0000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_21","915","290","1","18",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_background("#ff0000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_23","910","369","110","22",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("class : <b v=\'true\'>point</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_00","770","290","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_displaynulltext("123,456");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_01","770","317","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_enable("false");
            obj.set_displaynulltext("123,456");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_02","770","344","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_cssclass("readonly");
            obj.set_readonly("true");
            obj.set_displaynulltext("123,456");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_03","770","371","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_cssclass("point");
            obj.set_displaynulltext("123,456");
            this.addChild(obj.name, obj);

            obj = new Static("stc_24","20","475","600","40",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("Combo");
            obj.set_font("24px/normal \"Malgun Gothic\"");
            obj.set_color("#000000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_25","20","540","80","22",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("enabled");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new Static("stc_26","20","567","80","22",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("disabled");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new Static("stc_27","20","594","80","22",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("읽기전용");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new Static("stc_28","20","621","80","22",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("필수입력");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new Static("stc_30","290","539","30","22",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("H22");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("stc_35","271","540","11","1",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_background("#ff0000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_36","271","559","11","1",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_background("#ff0000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_37","276","541","1","18",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_background("#ff0000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_38","270","593","110","22",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("readonly = true");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new Static("stc_39","270","620","110","22",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("class : <b v=\'true\'>point</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_40","660","540","80","22",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("enabled");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new Static("stc_41","660","567","80","22",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("disabled");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new Static("stc_42","660","594","80","22",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("읽기전용");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new Static("stc_43","660","621","80","22",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("필수입력");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new Static("stc_45","930","538","30","22",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("H22");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("stc_46","910","540","11","1",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_background("#ff0000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_47","910","558","11","1",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_background("#ff0000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_48","915","540","1","18",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_background("#ff0000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_49","910","592","110","22",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("readonly = true");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new Static("stc_50","910","619","110","22",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("class : <b v=\'true\'>point</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_51","660","474","600","40",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("Spin");
            obj.set_font("24px/normal \"Malgun Gothic\"");
            obj.set_color("#000000");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_00","130","540","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_innerdataset("combo");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_01","130","567","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_enable("false");
            obj.set_text("Combo");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_02","130","594","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_cssclass("readonly");
            obj.set_readonly("true");
            obj.set_text("Combo");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_03","130","621","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_innerdataset("combo");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_cssclass("point");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Spin("spn_00","770","540","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_value("100");
            this.addChild(obj.name, obj);

            obj = new Spin("spn_01","770","567","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_enable("false");
            obj.set_value("100");
            this.addChild(obj.name, obj);

            obj = new Spin("spn_02","770","594","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_cssclass("readonly");
            obj.set_readonly("true");
            obj.set_value("100");
            this.addChild(obj.name, obj);

            obj = new Spin("spn_03","770","621","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_cssclass("point");
            obj.set_value("100");
            this.addChild(obj.name, obj);

            obj = new Static("stc_52","20","724","600","40",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("TextArea");
            obj.set_font("24px/normal \"Malgun Gothic\"");
            obj.set_color("#000000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_53","20","790","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("enabled");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new Static("stc_62","430","790","90","20",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("readonly = true");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new Static("stc_75","660","723","600","40",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("ListBox");
            obj.set_font("24px/normal \"Malgun Gothic\"");
            obj.set_color("#000000");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_00","20","810","160","100",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_value("가나다라마바사\n가나다라마바사\nABCDEFGHIJKL");
            this.addChild(obj.name, obj);

            obj = new Static("stc_54","190","790","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_text("disabled");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_01","190","810","160","100",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_value("가나다라마바사\n가나다라마바사\nABCDEFGHIJKL");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_55","360","790","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("읽기전용");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_02","360","810","160","100",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_value("가나다라마바사\n가나다라마바사\nABCDEFGHIJKL");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_56","20","930","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_text("필수입력");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new Static("stc_57","85","930","90","20",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_text("class : <b v=\'true\'>point</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_03","20","950","160","100",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_value("가나다라마바사\n가나다라마바사\nABCDEFGHIJKL");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Static("stc_59","660","790","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_text("enabled");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new Static("stc_60","830","790","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_text("disabled");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new ListBox("lst_00","660","810","160","200",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_innerdataset("ds_cmb");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            this.addChild(obj.name, obj);

            obj = new ListBox("lst_01","830","810","160","200",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_enable("false");
            obj.set_innerdataset("ds_cmb");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            this.addChild(obj.name, obj);

            obj = new Static("stc_61","20","1186","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_text("enabled");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new Static("stc_64","170","1186","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_text("disabled");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new Static("stc_65","480","1186","110","20",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_text("usedecorate = \"true\"");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new Static("stc_69","20","1120","600","40",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_text("Static");
            obj.set_font("24px/normal \"Malgun Gothic\"");
            obj.set_color("#000000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_63","20","1215","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_text("Static");
            this.addChild(obj.name, obj);

            obj = new Static("stc_66","170","1215","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_text("Static");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_05","480","1221","557","144",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_value("fs 글자의 크기(fontsize)를 지정합니다.  ex)<fs v=\'12\'></fs>\nfc 글자의 색상(fontcolor)를 지정합니다.  ex)<fc v=\'red\'></fc><fc v=\'#FF00FF\'></fc>\nff 글자의 종류(fontface)를 지정합니다.  ex)<ff v=\'굴림\'></ff>\nb 굵은글씨를(bold)를 지정합니다. ex)<b v=\'true\'></b>\ni 이텔릭체를 (italic)를 지정합니다.  ex)<i v=\'true\'></i>\nu 언더라인을(underline)를 지정합니다.  ex)<u v=\'true\'></u>\ns 취소선(strike)를 지정합니다.  ex)<s v=\'true\'></s>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_05","270","340","110","22",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_text("readonly = true");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12","270","315","110","22",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_text("enable = false");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new Static("stc_16","910","342","110","22",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_text("readonly = true");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new Static("stc_22","910","315","110","22",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_text("enable = false");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new Static("stc_29","910","565","110","22",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_text("enable = false");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new Static("stc_44","270","566","110","22",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_text("enable = false");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new Static("stc_58","260","790","90","20",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_text("enable = false");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new Static("stc_67","0","1418",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_background("#ccd6dc");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_68","20","1330","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_text("Static Underline");
            obj.set_cssclass("sta_WF_Link");
            obj.set_textDecoration("underline");
            this.addChild(obj.name, obj);

            obj = new Static("stc_70","20","1302","170","20",null,null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_text("textDecoration = \"underline\"");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("#999999");
            this.addChild(obj.name, obj);

            obj = new Static("stc_71","245","1330","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_text("<b v=\'true\'><fc v=\'#ff3300\'>0</fc></b> 건");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_cssclass("sta_WF_TotalSta");
            this.addChild(obj.name, obj);

            obj = new ListBox("lst_02","1030","810","160","200",null,null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_innerdataset("ds_cmb");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_cssclass("point");
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
        this.registerScript("ComponentGuide_01.xfdl", function() {

        this.tab_00_onchanged = function(obj,e)
        {

        };

        this.ComponentGuide_01_onclick = function(obj,e)
        {

        };

        this.stc_17_onclick = function(obj,e)
        {

        };

        this.lst_00_onitemchanged = function(obj,e)
        {

        };

        this.stc_70_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclick",this.ComponentGuide_01_onclick,this);
            this.stc_17.addEventHandler("onclick",this.stc_17_onclick,this);
            this.stc_51.addEventHandler("onclick",this.stc_17_onclick,this);
            this.stc_75.addEventHandler("onclick",this.stc_17_onclick,this);
            this.lst_00.addEventHandler("onitemchanged",this.lst_00_onitemchanged,this);
            this.stc_70.addEventHandler("onclick",this.stc_70_onclick,this);
            this.lst_02.addEventHandler("onitemchanged",this.lst_00_onitemchanged,this);
        };
        this.loadIncludeScript("ComponentGuide_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
