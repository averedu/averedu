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
            this.set_titletext("Class Cpmponent & ETC. / Chart Color");
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
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">대우조선</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">대우조선</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">대우조선</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">대우조선</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">대우조선</Col></Row><Row><Col id=\"Column0\">5</Col><Col id=\"Column1\">대우조선</Col></Row><Row><Col id=\"Column0\">6</Col><Col id=\"Column1\">대우조선</Col></Row><Row><Col id=\"Column0\">7</Col><Col id=\"Column1\">대우조선</Col></Row><Row><Col id=\"Column0\">8</Col><Col id=\"Column1\">대우조선</Col></Row><Row><Col id=\"Column0\">9</Col><Col id=\"Column1\">대우조선</Col></Row><Row><Col id=\"Column0\">10</Col><Col id=\"Column1\">대우조선</Col></Row><Row><Col id=\"Column0\">11</Col><Col id=\"Column1\">대우조선</Col></Row><Row><Col id=\"Column0\">12</Col><Col id=\"Column1\">대우조선</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_00","0","0",null,"200","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#ccd6dc");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_02","20","80","260","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#0066b3");
            obj.set_text("Component Guide 05");
            obj.set_color("#ffffff");
            obj.set_font("normal 20px/normal \"Malgun Gothic\"");
            obj.set_letterSpacing("0px");
            obj.set_padding("0px, 0px, 0px, 10px");
            this.addChild(obj.name, obj);

            obj = new Static("stc_03","20","147","720","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Class Cpmponent & ETC. / Chart Color");
            obj.set_font("normal 14px/normal \"Malgun Gothic\"");
            obj.set_color("#363636");
            this.addChild(obj.name, obj);

            obj = new Static("stc_04","20","225","600","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Class Component & ETC.");
            obj.set_font("24px/normal \"Malgun Gothic\"");
            obj.set_color("#000000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_31","617","289","30","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("H22");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("stc_32","638","290","11","1",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_background("#ff0000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_33","638","309","11","1",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_background("#ff0000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_34","643","291","1","18",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_background("#ff0000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_52","20","724","600","40",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Chart Color");
            obj.set_font("24px/normal \"Malgun Gothic\"");
            obj.set_color("#000000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_67","300","300","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("class : <b v=\'true\'>sta_WF_Left</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_68","20","300","200","20",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Static 정렬");
            obj.set_cssclass("sta_WF_Left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_70","20","342","200","20",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Static 정렬");
            obj.set_cssclass("sta_WF_Center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_71","300","342","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("class : <b v=\'true\'>sta_WF_Center</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_72","20","380","200","20",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Static 정렬");
            obj.set_cssclass("sta_WF_Right");
            this.addChild(obj.name, obj);

            obj = new Static("stc_73","300","380","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("class : <b v=\'true\'>sta_WF_Right</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_74","20","448","130","20",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("www.link.com");
            obj.set_textDecoration("underline");
            obj.set_cssclass("sta_WF_Link");
            this.addChild(obj.name, obj);

            obj = new Static("stc_76","300","448","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("class : <b v=\'true\'>sta_WF_Link</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_77","15","523","200","22",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("대 타이틀");
            obj.set_cssclass("sta_WF_Title01");
            this.addChild(obj.name, obj);

            obj = new Static("stc_78","15","562","200","22",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("중 타이틀");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_79","15","601","200","22",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("소 타이틀");
            obj.set_cssclass("sta_WF_Title03");
            this.addChild(obj.name, obj);

            obj = new Static("stc_80","15","640","200","22",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("상세 타이틀");
            obj.set_cssclass("sta_WF_Title04");
            this.addChild(obj.name, obj);

            obj = new Static("stc_05","300","524","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("class : <b v=\'true\'>sta_WF_Title01</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_06","300","563","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("class : <b v=\'true\'>sta_WF_Title02</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_07","300","602","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("class : <b v=\'true\'>sta_WF_Title03</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_08","300","641","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("class : <b v=\'true\'>sta_WF_Title04</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09","20","790","100","20",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("01");
            obj.set_background("#f5675e");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_01","355","790","40","280",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_value("1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n16\n17\n18");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_00","395","790","100","280",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_value("#f5675e\n#ff9f5d\n#ffc055\n#26ba9b\n#4aacd9\n#2690c2\n#806ec8\n#669d7b\n#f2a18d\n#26b8d2\n#ec6d5a\n#557082\n#b18053\n#8a9ed8\n#86c884\n#42eceb\n#daa6e0\n#d8b88a");
            this.addChild(obj.name, obj);

            obj = new Static("stc_10","20","820","100","20",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("02");
            obj.set_background("#ff9f5d");
            this.addChild(obj.name, obj);

            obj = new Static("stc_11","20","850","100","20",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("03");
            obj.set_background("#ffc055");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12","20","880","100","20",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("04");
            obj.set_background("#26ba9b");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13","20","910","100","20",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("05");
            obj.set_background("#4aacd9");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14","20","940","100","20",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("06");
            obj.set_background("#2690c2");
            this.addChild(obj.name, obj);

            obj = new Static("stc_15","20","970","100","20",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("07");
            obj.set_background("#806ec8");
            this.addChild(obj.name, obj);

            obj = new Static("stc_16","20","1000","100","20",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("08");
            obj.set_background("#669d7b");
            this.addChild(obj.name, obj);

            obj = new Static("stc_17","20","1030","100","20",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("09");
            obj.set_background("#f2a18d");
            this.addChild(obj.name, obj);

            obj = new Static("stc_18","160","790","100","20",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("10");
            obj.set_background("#26b8d2");
            this.addChild(obj.name, obj);

            obj = new Static("stc_19","160","850","100","20",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("12");
            obj.set_background("#557082");
            this.addChild(obj.name, obj);

            obj = new Static("stc_20","160","880","100","20",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("13");
            obj.set_background("#b18053");
            this.addChild(obj.name, obj);

            obj = new Static("stc_21","160","910","100","20",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("14");
            obj.set_background("#8a9ed8");
            this.addChild(obj.name, obj);

            obj = new Static("stc_22","160","940","100","20",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("15");
            obj.set_background("#86c884");
            this.addChild(obj.name, obj);

            obj = new Static("stc_23","160","970","100","20",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("16");
            obj.set_background("#42eceb");
            this.addChild(obj.name, obj);

            obj = new Static("stc_24","160","1000","100","20",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("17");
            obj.set_background("#daa6e0");
            this.addChild(obj.name, obj);

            obj = new Static("stc_25","160","1030","100","20",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("18");
            obj.set_background("#d8b88a");
            this.addChild(obj.name, obj);

            obj = new Static("stc_26","160","820","100","20",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("11");
            obj.set_background("#ec6d5a");
            this.addChild(obj.name, obj);

            obj = new Static("stc_27","657","331","110","20",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("조회라벨 필수");
            obj.set_cssclass("sta_WF_SearchLbl_P");
            this.addChild(obj.name, obj);

            obj = new Static("stc_30","940","292","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("class : <b v=\'true\'>sta_WF_SearchLbl</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_35","940","331","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("class : <b v=\'true\'>sta_WF_SearchLbl_P</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_38","657","292","110","20",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("조회라벨");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.addChild(obj.name, obj);

            obj = new Static("stc_39","657","513","220","20",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("조회영역 안에 들어가는 설명글 입니다.");
            obj.set_cssclass("sta_WF_Desc02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_40","657","552","200","20",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("범례");
            obj.set_cssclass("sta_WF_Desc03");
            this.addChild(obj.name, obj);

            obj = new Static("stc_41","940","474","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("class : <b v=\'true\'>sta_WF_Desc01</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_42","940","513","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("class : <b v=\'true\'>sta_WF_Desc02</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_43","940","552","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("class : <b v=\'true\'>sta_WF_Desc03</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_44","940","592","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("class : <b v=\'true\'>sta_WF_Desc04</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_45","657","474","200","20",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("-설명글 입니다.");
            obj.set_cssclass("sta_WF_Desc01");
            this.addChild(obj.name, obj);

            obj = new Static("stc_46","657","592","230","20",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("- 기본적인 설명글 입니다.(중요도 낮음)");
            obj.set_cssclass("sta_WF_Desc04");
            this.addChild(obj.name, obj);

            obj = new Static("stc_28","656","427","200","20",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("조회라벨 필수");
            obj.set_cssclass("sta_WF_Label_P");
            this.addChild(obj.name, obj);

            obj = new Static("stc_29","940","388","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("class : <b v=\'true\'>sta_WF_SearchLbl</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_36","940","427","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("class : <b v=\'true\'>sta_WF_SearchLbl_P</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_37","656","388","200","20",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("조회라벨");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("stc_47","0","1180",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_background("#ccd6dc");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01","20","20","390","60",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_background("#003876");
            obj.set_text("한국공항공사(iFIS) UI");
            obj.set_color("#ffffff");
            obj.set_font("normal 36px/normal \"Malgun Gothic\"");
            obj.set_letterSpacing("0px");
            obj.set_padding("0px, 0px, 0px, 10px");
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
        this.registerScript("ComponentGuide_05.xfdl", function() {

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

        this.stc_24_onclick = function(obj,e)
        {

        };

        this.stc_04_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclick",this.ComponentGuide_01_onclick,this);
            this.stc_04.addEventHandler("onclick",this.stc_04_onclick,this);
        };
        this.loadIncludeScript("ComponentGuide_05.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
