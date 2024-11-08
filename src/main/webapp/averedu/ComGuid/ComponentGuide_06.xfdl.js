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
            this.set_titletext("조회영역");
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
            obj.set_text("Component Guide 06");
            obj.set_color("#ffffff");
            obj.set_font("normal 20px/normal \"Malgun Gothic\"");
            obj.set_letterSpacing("0px");
            obj.set_padding("0px, 0px, 0px, 10px");
            this.addChild(obj.name, obj);

            obj = new Static("stc_03","20","147","720","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Search Area");
            obj.set_font("normal 14px/normal \"Malgun Gothic\"");
            obj.set_color("#363636");
            this.addChild(obj.name, obj);

            obj = new Static("stc_39","71","1171","220","22",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("조회영역 안에 들어가는 설명글 입니다.");
            obj.set_cssclass("sta_WF_Desc02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_40","71","1210","200","22",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("범례");
            obj.set_cssclass("sta_WF_Desc03");
            this.addChild(obj.name, obj);

            obj = new Static("stc_41","354","1132","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("class : <b v=\'true\'>sta_WF_Desc01</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_42","354","1171","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("class : <b v=\'true\'>sta_WF_Desc02</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_43","354","1210","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("class : <b v=\'true\'>sta_WF_Desc03</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_44","354","1250","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("class : <b v=\'true\'>sta_WF_Desc04</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_45","71","1132","200","22",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("-설명글 입니다.");
            obj.set_cssclass("sta_WF_Desc01");
            this.addChild(obj.name, obj);

            obj = new Static("stc_46","71","1250","220","22",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("- 기본적인 설명글 입니다.(중요도 낮음)");
            obj.set_cssclass("sta_WF_Desc04");
            this.addChild(obj.name, obj);

            obj = new Static("stc_28","70","1055","200","22",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("조회라벨 필수");
            obj.set_cssclass("sta_WF_Label_P");
            this.addChild(obj.name, obj);

            obj = new Static("stc_29","354","1016","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("class : <b v=\'true\'>sta_WF_Label</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_36","354","1055","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("class : <b v=\'true\'>sta_WF_Label_P</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_37","70","1016","200","22",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("조회라벨");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("stc_04","20","230","710","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("- Search Area에 들어가는 Label Component와 입력 Component는 한 조합으로 쓰이고 둘의  heigt값은 <fc v=\'red\'>22px</fc>로 고정이나 width는 가변적임.\r\n- 한 조합 (Title 컴포넌트 + 입력 컴포넌트) 간의 간격은 <fc v=\'red\'>20px</fc>로 고정.");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_00","15","325",null,"44","15",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_00","0","10","80","22",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("2");
            obj.set_text("조회라벨");
            obj.set_cssclass("sta_WF_SearchLbl_P");
            this.div_00.addChild(obj.name, obj);

            obj = new Edit("edt_00","90","10","100","22",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("point");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("stc_01","190","10","80","22",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("1");
            obj.set_text("조회라벨");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.div_00.addChild(obj.name, obj);

            obj = new Combo("cbo_00","280","10","100","22",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("3");
            obj.set_innerdataset("combo");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("stc_02","380","10","120","22",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("4");
            obj.set_text("일이삼사오육칠팔");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.div_00.addChild(obj.name, obj);

            obj = new Edit("edt_01","508","10","100","22",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("5");
            this.div_00.addChild(obj.name, obj);

            obj = new Button("btn_00",null,null,"60","22","10","9",null,null,null,null,this.div_00.form);
            obj.set_taborder("6");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.div_00.addChild(obj.name, obj);

            obj = new Button("Button00","686","10","22","22",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_CalBtnM");
            this.div_00.addChild(obj.name, obj);

            obj = new Button("Button02","710","10","30","22",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("8");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CalBtnDay");
            this.div_00.addChild(obj.name, obj);

            obj = new Calendar("cal_00","742","10","110","22",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("9");
            obj.set_value("20181025");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_00.addChild(obj.name, obj);

            obj = new Button("Button01","854","10","22","22",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_CalBtnP");
            this.div_00.addChild(obj.name, obj);

            obj = new Button("Button03","904","10","22","22",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_CalBtnM");
            this.div_00.addChild(obj.name, obj);

            obj = new Button("Button04","928","10","30","22",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("12");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CalBtnDay");
            this.div_00.addChild(obj.name, obj);

            obj = new Calendar("cal_01","960","10","110","22",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("13");
            obj.set_value("20181025");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_00.addChild(obj.name, obj);

            obj = new Button("Button05","1072","10","22","22",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_CalBtnP");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("stc_03","886","10","18","22",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("15");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_SearchLbl_L");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("stc_04","609","10","68","22",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("16");
            obj.set_text("기간설정");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("stc_09","15","300","330","22",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("1줄 [조회영역사이즈 :  w 1606 x 44]");
            obj.set_cssclass("sta_WF_Title01");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","15","318","100","7",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("7");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","550","295","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("30");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","15","295","100","10",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("stc_05","14","420","330","21",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("2줄 [조회영역사이즈 :  w 1606 x 71]");
            obj.set_cssclass("sta_WF_Title01");
            this.addChild(obj.name, obj);

            obj = new Div("div_01","14","444",null,"71","16",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_00","0","10","102","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("2");
            obj.set_text("일이삼사오육");
            obj.set_cssclass("sta_WF_SearchLbl_P");
            this.div_01.addChild(obj.name, obj);

            obj = new Edit("edt_00","110","10","100","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("0");
            obj.set_cssclass("point");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_01","210","10","80","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("1");
            obj.set_text("일이삼사오");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.div_01.addChild(obj.name, obj);

            obj = new Combo("cbo_00","300","10","100","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("3");
            obj.set_innerdataset("combo");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_02","400","10","100","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("4");
            obj.set_text("일이");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.div_01.addChild(obj.name, obj);

            obj = new Edit("edt_01","510","10","100","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("5");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_03","610","10","100","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("6");
            obj.set_text("일이삼");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.div_01.addChild(obj.name, obj);

            obj = new Calendar("cal_00","746","10","100","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("7");
            obj.set_value("20180308");
            this.div_01.addChild(obj.name, obj);

            obj = new Button("btn_00",null,"34","60",null,"10","9",null,null,null,null,this.div_01.form);
            obj.set_taborder("8");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_04","0","37","102","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("9");
            obj.set_text("일이삼");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.div_01.addChild(obj.name, obj);

            obj = new Edit("edt_02","110","37","100","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("10");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_05","210","37","80","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("11");
            obj.set_text("일이삼");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.div_01.addChild(obj.name, obj);

            obj = new Combo("cbo_01","300","37","100","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("12");
            obj.set_innerdataset("combo");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_06","400","37","100","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("13");
            obj.set_text("일이삼사오육");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.div_01.addChild(obj.name, obj);

            obj = new Edit("edt_03","510","37","100","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("14");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_07","610","37","126","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("15");
            obj.set_text("일이삼사오육칠팔");
            obj.set_cssclass("sta_WF_SearchLbl_P");
            this.div_01.addChild(obj.name, obj);

            obj = new Calendar("cal_01","746","37","100","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("16");
            obj.set_cssclass("point");
            obj.set_value("20180308");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("Static05","736","1","10","69",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("17");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("Static01","830","445","100","10",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("pink");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","626","445","20","69",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","226","445","20","69",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","305","445","10","69",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","15","445","20","69",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("stc_06","14","558","330","21",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("3줄 [조회영역사이즈 :  w 1606 x 97]");
            obj.set_cssclass("sta_WF_Title01");
            this.addChild(obj.name, obj);

            obj = new Div("div_02","14","582",null,"97","16",null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_00","0","10","102","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("2");
            obj.set_text("일이삼사오육");
            obj.set_cssclass("sta_WF_SearchLbl_P");
            this.div_02.addChild(obj.name, obj);

            obj = new Edit("edt_00","110","10","100","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("0");
            obj.set_cssclass("point");
            this.div_02.addChild(obj.name, obj);

            obj = new Static("stc_01","210","10","80","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("1");
            obj.set_text("일이삼사오");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.div_02.addChild(obj.name, obj);

            obj = new Combo("cbo_00","305","10","100","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("3");
            obj.set_innerdataset("combo");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.div_02.addChild(obj.name, obj);

            obj = new Static("stc_02","405","10","100","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("4");
            obj.set_text("일이");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.div_02.addChild(obj.name, obj);

            obj = new Edit("edt_01","515","10","100","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("5");
            this.div_02.addChild(obj.name, obj);

            obj = new Static("stc_03","615","10","100","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("6");
            obj.set_text("일이삼");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.div_02.addChild(obj.name, obj);

            obj = new Calendar("cal_00","751","10","100","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("7");
            obj.set_value("20180308");
            this.div_02.addChild(obj.name, obj);

            obj = new Button("btn_00",null,"59","60","22","10",null,null,null,null,null,this.div_02.form);
            obj.set_taborder("8");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.div_02.addChild(obj.name, obj);

            obj = new Static("stc_04","0","37","102","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("9");
            obj.set_text("일이삼");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.div_02.addChild(obj.name, obj);

            obj = new Edit("edt_02","110","37","100","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("10");
            this.div_02.addChild(obj.name, obj);

            obj = new Static("stc_05","210","37","80","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("11");
            obj.set_text("일이삼");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.div_02.addChild(obj.name, obj);

            obj = new Combo("cbo_01","305","37","100","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("12");
            obj.set_innerdataset("combo");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.div_02.addChild(obj.name, obj);

            obj = new Static("stc_06","405","37","100","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("13");
            obj.set_text("일이삼사오육");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.div_02.addChild(obj.name, obj);

            obj = new Edit("edt_03","515","37","100","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("14");
            this.div_02.addChild(obj.name, obj);

            obj = new Static("stc_07","615","37","126","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("15");
            obj.set_text("일이삼사오육칠팔");
            obj.set_cssclass("sta_WF_SearchLbl_P");
            this.div_02.addChild(obj.name, obj);

            obj = new Calendar("cal_01","751","37","100","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("16");
            obj.set_value("20180308");
            obj.set_cssclass("point");
            this.div_02.addChild(obj.name, obj);

            obj = new Static("stc_08","0","64","102","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("17");
            obj.set_text("일이삼");
            obj.set_cssclass("sta_WF_SearchLbl_P");
            this.div_02.addChild(obj.name, obj);

            obj = new Edit("edt_04","110","64","100","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("18");
            obj.set_cssclass("point");
            this.div_02.addChild(obj.name, obj);

            obj = new Static("stc_09","210","64","80","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("19");
            obj.set_text("일이삼");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.div_02.addChild(obj.name, obj);

            obj = new Combo("cbo_02","305","64","100","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("20");
            obj.set_innerdataset("combo");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.div_02.addChild(obj.name, obj);

            obj = new Static("stc_10","405","64","100","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("21");
            obj.set_text("일이삼사오육");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.div_02.addChild(obj.name, obj);

            obj = new Edit("edt_05","515","64","100","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("22");
            this.div_02.addChild(obj.name, obj);

            obj = new Static("stc_11","615","64","126","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("23");
            obj.set_text("일이삼사오육칠팔");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.div_02.addChild(obj.name, obj);

            obj = new Calendar("cal_02","751","64","100","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("24");
            obj.set_value("20180308");
            this.div_02.addChild(obj.name, obj);

            obj = new Static("Static08","830","583","100","10",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("pink");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","15","583","20","90",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","830","668","100","10",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("pink");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","830","615","100","5",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("pink");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","830","642","100","5",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("pink");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("stc_07","14","736","330","21",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("4줄 [조회영역사이즈 :  w 1606 x 125]");
            obj.set_cssclass("sta_WF_Title01");
            this.addChild(obj.name, obj);

            obj = new Div("div_03","14","760",null,"125","16",null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_00","0","10","102","22",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("2");
            obj.set_text("일이삼사오육");
            obj.set_cssclass("sta_WF_SearchLbl_P");
            this.div_03.addChild(obj.name, obj);

            obj = new Edit("edt_00","110","10","100","22",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("0");
            obj.set_cssclass("point");
            this.div_03.addChild(obj.name, obj);

            obj = new Static("stc_01","210","10","90","22",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("1");
            obj.set_text("일이삼사오");
            obj.set_cssclass("sta_WF_SearchLbl_P");
            this.div_03.addChild(obj.name, obj);

            obj = new Combo("cbo_00","305","10","100","22",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("3");
            obj.set_innerdataset("combo");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_cssclass("point");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.div_03.addChild(obj.name, obj);

            obj = new Static("stc_02","405","10","100","22",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("4");
            obj.set_text("일이");
            obj.set_cssclass("sta_WF_SearchLbl_P");
            this.div_03.addChild(obj.name, obj);

            obj = new Edit("edt_01","515","10","100","22",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("5");
            obj.set_cssclass("point");
            this.div_03.addChild(obj.name, obj);

            obj = new Static("stc_03","615","10","100","22",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("6");
            obj.set_text("일이삼");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.div_03.addChild(obj.name, obj);

            obj = new Calendar("cal_00","739","10","100","22",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("7");
            obj.set_value("20180308");
            this.div_03.addChild(obj.name, obj);

            obj = new Button("btn_00",null,"84","60","22","10",null,null,null,null,null,this.div_03.form);
            obj.set_taborder("8");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.div_03.addChild(obj.name, obj);

            obj = new Static("stc_04","0","37","102","22",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("9");
            obj.set_text("일이삼");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.div_03.addChild(obj.name, obj);

            obj = new Edit("edt_02","110","37","100","22",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("10");
            this.div_03.addChild(obj.name, obj);

            obj = new Static("stc_05","210","37","80","22",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("11");
            obj.set_text("일이삼");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.div_03.addChild(obj.name, obj);

            obj = new Combo("cbo_01","305","37","100","22",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("12");
            obj.set_innerdataset("combo");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.div_03.addChild(obj.name, obj);

            obj = new Static("stc_06","405","37","100","22",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("13");
            obj.set_text("일이삼사오육");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.div_03.addChild(obj.name, obj);

            obj = new Edit("edt_03","515","37","100","22",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("14");
            this.div_03.addChild(obj.name, obj);

            obj = new Static("stc_07","615","37","114","22",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("15");
            obj.set_text("일이삼사오육칠");
            obj.set_cssclass("sta_WF_SearchLbl_P");
            this.div_03.addChild(obj.name, obj);

            obj = new Calendar("cal_01","739","37","100","22",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("16");
            obj.set_cssclass("point");
            obj.set_value("20180308");
            this.div_03.addChild(obj.name, obj);

            obj = new Static("stc_08","0","64","102","22",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("17");
            obj.set_text("일이삼");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.div_03.addChild(obj.name, obj);

            obj = new Edit("edt_04","110","64","100","22",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("18");
            this.div_03.addChild(obj.name, obj);

            obj = new Static("stc_09","210","64","80","22",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("19");
            obj.set_text("일이삼");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.div_03.addChild(obj.name, obj);

            obj = new Combo("cbo_02","305","64","100","22",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("20");
            obj.set_innerdataset("combo");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.div_03.addChild(obj.name, obj);

            obj = new Static("stc_10","405","64","115","22",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("21");
            obj.set_text("일이삼사오육칠");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.div_03.addChild(obj.name, obj);

            obj = new Edit("edt_05","515","64","100","22",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("22");
            this.div_03.addChild(obj.name, obj);

            obj = new Static("stc_11","615","64","100","22",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("23");
            obj.set_text("일이");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.div_03.addChild(obj.name, obj);

            obj = new Calendar("cal_02","739","64","100","22",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("24");
            obj.set_value("20180308");
            this.div_03.addChild(obj.name, obj);

            obj = new Static("stc_12","0","91","102","22",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("25");
            obj.set_text("일이삼사오");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.div_03.addChild(obj.name, obj);

            obj = new Edit("edt_06","110","91","100","22",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("26");
            this.div_03.addChild(obj.name, obj);

            obj = new Static("stc_13","210","91","80","22",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("27");
            obj.set_text("일이삼사오육칠");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.div_03.addChild(obj.name, obj);

            obj = new Combo("cbo_03","305","91","100","22",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("28");
            obj.set_innerdataset("combo");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.div_03.addChild(obj.name, obj);

            obj = new Static("stc_14","405","91","100","22",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("29");
            obj.set_text("일이");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.div_03.addChild(obj.name, obj);

            obj = new Edit("edt_07","515","91","100","22",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("30");
            this.div_03.addChild(obj.name, obj);

            obj = new Static("stc_15","615","91","100","22",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("31");
            obj.set_text("일이삼사");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.div_03.addChild(obj.name, obj);

            obj = new Calendar("cal_03","739","91","100","22",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("32");
            obj.set_value("20180308");
            this.div_03.addChild(obj.name, obj);

            obj = new Static("Static22","830","761","100","10",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("pink");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","15","761","20","123",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static30","830","873","100","10",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("pink");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static31","830","792","100","5",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("pink");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static32","830","819","100","5",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("pink");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static33","830","846","100","5",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("pink");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static34","830","477","100","5",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("pink");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static35","830","504","100","10",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("pink");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("stc_08","0","1298",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_background("#ccd6dc");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_10","70","969","77","22",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("조회라벨");
            obj.set_cssclass("sta_WF_SearchLbl_P");
            this.addChild(obj.name, obj);

            obj = new Static("stc_11","353","969","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("class : <b v=\'true\'>sta_WF_SearchLbl_P</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12","70","929","77","22",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("조회라벨");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13","352","929","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("class : <b v=\'true\'>sta_WF_SearchLbl</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14","641","928","54","22",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("일이");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.addChild(obj.name, obj);

            obj = new Static("stc_15","641","948","66","22",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("일이삼");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.addChild(obj.name, obj);

            obj = new Static("stc_16","641","968","78","22",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("일이삼사");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.addChild(obj.name, obj);

            obj = new Static("stc_17","641","988","90","22",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("일이삼사오");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.addChild(obj.name, obj);

            obj = new Static("stc_18","641","1008","102","22",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("일이삼사오육");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.addChild(obj.name, obj);

            obj = new Static("stc_19","641","1028","114","22",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("일이삼사오육칠");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.addChild(obj.name, obj);

            obj = new Static("stc_20","641","1048","126","22",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("일이삼사오육칠팔");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.addChild(obj.name, obj);

            obj = new Static("stc_21","641","1068","138","22",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("일이삼사오육칠팔구");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.addChild(obj.name, obj);

            obj = new Static("stc_22","641","1088","150","22",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("일이삼사오육칠팔구십");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.addChild(obj.name, obj);

            obj = new Static("stc_24","801","927","46","22",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("W : 54");
            this.addChild(obj.name, obj);

            obj = new Static("stc_25","801","947","46","22",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("W : 66");
            this.addChild(obj.name, obj);

            obj = new Static("stc_26","801","967","46","22",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("W : 78");
            this.addChild(obj.name, obj);

            obj = new Static("stc_27","801","987","46","22",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("W : 90");
            this.addChild(obj.name, obj);

            obj = new Static("stc_30","801","1007","46","22",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("W : 102");
            this.addChild(obj.name, obj);

            obj = new Static("stc_35","801","1027","46","22",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("W : 114");
            this.addChild(obj.name, obj);

            obj = new Static("stc_38","801","1067","46","22",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("W : 138");
            this.addChild(obj.name, obj);

            obj = new Static("stc_47","801","1087","46","22",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("W : 150");
            this.addChild(obj.name, obj);

            obj = new Static("stc_48","801","1047","46","22",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_text("W : 126");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01","20","20","390","60",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_background("#003876");
            obj.set_text("한국공항공사(iFIS) UI");
            obj.set_color("#ffffff");
            obj.set_font("normal 36px/normal \"Malgun Gothic\"");
            obj.set_letterSpacing("0px");
            obj.set_padding("0px, 0px, 0px, 10px");
            this.addChild(obj.name, obj);

            obj = new Static("stc_50","875","927","55","23",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("일이");
            obj.set_cssclass("sta_WF_SearchLbl_P");
            this.addChild(obj.name, obj);

            obj = new Static("stc_51","875","947","66","23",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_text("일이삼");
            obj.set_cssclass("sta_WF_SearchLbl_P");
            this.addChild(obj.name, obj);

            obj = new Static("stc_52","875","967","78","23",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_text("일이삼사");
            obj.set_cssclass("sta_WF_SearchLbl_P");
            this.addChild(obj.name, obj);

            obj = new Static("stc_53","875","1007","102","23",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_text("일이삼사오육");
            obj.set_cssclass("sta_WF_SearchLbl_P");
            this.addChild(obj.name, obj);

            obj = new Static("stc_54","875","1027","115","23",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_text("일이삼사오육칠");
            obj.set_cssclass("sta_WF_SearchLbl_P");
            this.addChild(obj.name, obj);

            obj = new Static("stc_55","875","1047","126","23",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_text("일이삼사오육칠팔");
            obj.set_cssclass("sta_WF_SearchLbl_P");
            this.addChild(obj.name, obj);

            obj = new Static("stc_56","875","1067","138","23",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_text("일이삼사오육칠팔구");
            obj.set_cssclass("sta_WF_SearchLbl_P");
            this.addChild(obj.name, obj);

            obj = new Static("stc_57","875","1087","150","23",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_text("일이삼사오육칠팔구십");
            obj.set_cssclass("sta_WF_SearchLbl_P");
            this.addChild(obj.name, obj);

            obj = new Static("stc_58","875","987","90","23",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_text("일이삼사오");
            obj.set_cssclass("sta_WF_SearchLbl_P");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","15","436","100","8",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_text("7");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","15","414","100","10",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","930","927","10","22",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
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
        this.registerScript("ComponentGuide_06.xfdl", function() {

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
            this.div_00.form.cal_00.addEventHandler("onchanged",this.div_01_cal_00_onchanged,this);
            this.div_00.form.cal_01.addEventHandler("onchanged",this.div_01_cal_00_onchanged,this);
        };
        this.loadIncludeScript("ComponentGuide_06.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
