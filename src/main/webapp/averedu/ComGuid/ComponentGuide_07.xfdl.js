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
            this.set_titletext("상세(Detail)영역");
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


            obj = new Dataset("ds_cmb00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">예</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">아니요</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_51","953","275","295","28",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_47","953","248","295","28",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_41","15","790","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_00","0","0",null,"200","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#ccd6dc");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_02","20","80","260","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#0066b3");
            obj.set_text("Component Guide 07");
            obj.set_color("#ffffff");
            obj.set_font("normal 20px/normal \"Malgun Gothic\"");
            obj.set_letterSpacing("0px");
            obj.set_padding("0px, 0px, 0px, 10px");
            this.addChild(obj.name, obj);

            obj = new Static("stc_03","20","147","720","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Detail Data Area");
            obj.set_font("normal 14px/normal \"Malgun Gothic\"");
            obj.set_color("#363636");
            this.addChild(obj.name, obj);

            obj = new Static("stc_04","20","260","860","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("- Input Area에 들어가는 Label Component와 입력 Component 그리고 배경 Component는 한 조합으로 쓰이고 각각 컴포넌트들의  heigt값은 고정이나 width는 가변적임.");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09","15","330","330","22",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("1단일때");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","15","348","488","7",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("7");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","530","325","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("30");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","15","325","488","10",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("stc_08","0","1048",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_background("#ccd6dc");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_05","15","355",null,"28","15",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_06","15","355","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_00","167","358",null,"22","18",null,null,null,null,null,this);
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Static("stc_07","14","407","330","22",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("2단일때");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_11","15","432",null,"28","15",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_10","15","432","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_00","167","435","300","22",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_innerdataset("combo");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13","15","459",null,"28","15",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12","15","459","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("가나다라마바사아자차");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_02","167","462","472","22",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14","641","459","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("가나다라마바사아자차");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_03","793","462",null,"22","18",null,null,null,null,null,this);
            obj.set_taborder("20");
            this.addChild(obj.name, obj);

            obj = new Static("stc_15","641","432","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("가나다라마바사아자차");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_00","793","435","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_direction("vertical");
            obj.set_innerdataset("ds_cmb00");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_text("예");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("stc_16","14","515","330","22",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("3단일때");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_17","15","540",null,"28","15",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_18","15","540","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_19","15","567",null,"28","15",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_20","15","567","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("가나다라마바사아자차");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_01","167","570","260","22",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            this.addChild(obj.name, obj);

            obj = new Static("stc_21","429","567","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("가나다라마바사아자차");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_22","429","540","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("가나다라마바사아자차");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_23","14","623","330","22",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("4단일때");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_24","15","648",null,"28","15",null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_25","15","648","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_02","167","651","159","22",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_innerdataset("combo");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("stc_26","15","675",null,"28","15",null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_27","15","675","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("가나다라마바사아자차");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_05","167","678","159","22",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            this.addChild(obj.name, obj);

            obj = new Static("stc_28","641","675","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("가나다라마바사아자차");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_06","793","678","159","22",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            this.addChild(obj.name, obj);

            obj = new Static("stc_29","641","648","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("가나다라마바사아자차");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_02","793","651","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_direction("vertical");
            obj.set_innerdataset("ds_cmb00");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_text("예");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("stc_30","842","567","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("가나다라마바사아자차");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_35","842","540","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("가나다라마바사아자차");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_04","581","570","259","22",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_07","994","570",null,"22","18",null,null,null,null,null,this);
            obj.set_taborder("45");
            this.addChild(obj.name, obj);

            obj = new Spin("spn_00","994","543","100","22",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_value("100");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_01","581","543","60","22",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("체크");
            obj.set_tooltiptype("hover");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_00","641","542","60","22",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("체크");
            obj.set_tooltiptype("hover");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_00","167","543","100","22",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_value("20180313");
            this.addChild(obj.name, obj);

            obj = new Static("stc_36","328","648","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_37","328","675","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("가나다라마바사아자차");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_08","480","678","159","22",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_01","1106","651","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_direction("vertical");
            obj.set_innerdataset("ds_cmb00");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_text("예");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("stc_38","954","675","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("가나다라마바사아자차");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_09","1106","678",null,"22","18",null,null,null,null,null,this);
            obj.set_taborder("55");
            this.addChild(obj.name, obj);

            obj = new Static("stc_39","954","648","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("가나다라마바사아자차");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_00","480","651","159","22",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_value("100,000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_40","15","763","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("sta_WF_DetailTi_C");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_10","18","793","144","22",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            this.addChild(obj.name, obj);

            obj = new Static("stc_42","15","738","330","22",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("중앙정렬 Label");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_43","164","790","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_44","164","763","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("sta_WF_DetailTi_CP");
            obj.set_cssclass("sta_WF_DetailTi_CP");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_11","167","793","144","22",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Static("stc_45","14","903","330","22",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("라벨 컬러");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_49","15","928","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("라벨_01");
            obj.set_cssclass("sta_WF_DetailTi01");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_12","164","928","266","28",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_cssclass("edt_WF_Detail");
            this.addChild(obj.name, obj);

            obj = new Static("stc_50","429","928","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("라벨_02");
            obj.set_cssclass("sta_WF_DetailTi02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_52","842","928","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("라벨_03");
            obj.set_cssclass("sta_WF_DetailTi03");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_01","578","928","265","28",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_cssclass("msk_WF_Detail");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_02","991","928",null,"28","15",null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_cssclass("msk_WF_Detail");
            this.addChild(obj.name, obj);

            obj = new Static("stc_56","15","955","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_text("입력");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_13","164","955","266","28",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_cssclass("edt_WF_Detail");
            obj.set_value("500,000");
            obj.set_text("500,000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_57","429","955","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_text("금액");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_58","842","955","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_text("합계");
            obj.set_cssclass("sta_WF_DetailSum");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_03","578","955","265","28",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_cssclass("msk_WF_Detail");
            obj.set_value("500,000");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_04","991","955",null,"28","15",null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_cssclass("msk_WF_DetailSum");
            obj.set_value("1,000,000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_46","953","248","140","28",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_14","1095","251","150","22",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            this.addChild(obj.name, obj);

            obj = new Static("stc_31","920","251","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_text("28");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("stc_32","941","248","11","1",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_background("#ff0000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_33","941","275","11","1",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_background("#ff0000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_34","946","249","1","27",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_background("#ff0000");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_48","953","275","140","28",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_15","1095","278","150","22",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            this.addChild(obj.name, obj);

            obj = new Static("stc_53","941","302","11","1",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_background("#ff0000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_54","946","276","1","26",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_background("#ff0000");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_55","920","276","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_text("28");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("stc_59","1093","249","2","53",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_background("#ff0000");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_60","1095","249","11","2",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_background("#ff0000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_61","1095","273","11","2",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_background("#ff0000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_62","1095","300","11","2",null,null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_background("#ff0000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_63","1090","305","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_text("2");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("stc_64","1114","264","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_text("2");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("stc_65","1114","240","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("97");
            obj.set_text("2");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("stc_66","1114","287","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_text("2");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("stc_67","20","230","330","22",null,null,null,null,null,null,this);
            obj.set_taborder("99");
            obj.set_text("Input type");
            obj.set_cssclass("sta_WF_Title01");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01","20","20","390","60",null,null,null,null,null,null,this);
            obj.set_taborder("100");
            obj.set_background("#003876");
            obj.set_text("한국공항공사(iFIS) UI");
            obj.set_color("#ffffff");
            obj.set_font("normal 36px/normal \"Malgun Gothic\"");
            obj.set_letterSpacing("0px");
            obj.set_padding("0px, 0px, 0px, 10px");
            this.addChild(obj.name, obj);

            obj = new Static("stc_68","1100","324","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("101");
            obj.set_text("class : <b v=\'true\'>sta_WF_DetailBg</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_69","890","322","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("102");
            obj.set_text("class : <b v=\'true\'>sta_WF_DetailTi</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_70","996","296","1","26",null,null,null,null,null,null,this);
            obj.set_taborder("103");
            obj.set_background("#ff0000");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_71","1186","302","1","26",null,null,null,null,null,null,this);
            obj.set_taborder("104");
            obj.set_background("#ff0000");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_72","90","786","1","46",null,null,null,null,null,null,this);
            obj.set_taborder("105");
            obj.set_background("#ff0000");
            obj.set_text("<DesignFormClipBoard version=\"1.0\">\n  <Copydata>\n    <Component copyrect=\"1186,302,1187,328\">\n      <Static id=\"stc_71\" taborder=\"104\" left=\"1186\" top=\"302\" width=\"1\" height=\"26\" background=\"#ff0000\" text=\"\"/>\n    </Component>\n  </Copydata>\n  <Copydata>\n    <Component copyrect=\"1100,324,1240,344\">\n      <Static id=\"stc_68\" taborder=\"101\" left=\"1100\" top=\"324\" height=\"20\" text=\"class : &lt;b v=\'true\'&gt;sta_WF_DetailBg&lt;/b&gt;\" width=\"140\" font=\"11px/normal &quot;Malgun Gothic&quot;\" color=\"dodgerblue\" usedecorate=\"true\"/>\n    </Component>\n  </Copydata>\n</DesignFormClipBoard>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_73","20","832","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("106");
            obj.set_text("class : <b v=\'true\'>sta_WF_DetailTi_C</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_74","260","786","1","46",null,null,null,null,null,null,this);
            obj.set_taborder("107");
            obj.set_background("#ff0000");
            obj.set_text("<DesignFormClipBoard version=\"1.0\">\n  <Copydata>\n    <Component copyrect=\"1186,302,1187,328\">\n      <Static id=\"stc_71\" taborder=\"104\" left=\"1186\" top=\"302\" width=\"1\" height=\"26\" background=\"#ff0000\" text=\"\"/>\n    </Component>\n  </Copydata>\n  <Copydata>\n    <Component copyrect=\"1100,324,1240,344\">\n      <Static id=\"stc_68\" taborder=\"101\" left=\"1100\" top=\"324\" height=\"20\" text=\"class : &lt;b v=\'true\'&gt;sta_WF_DetailBg&lt;/b&gt;\" width=\"140\" font=\"11px/normal &quot;Malgun Gothic&quot;\" color=\"dodgerblue\" usedecorate=\"true\"/>\n    </Component>\n  </Copydata>\n</DesignFormClipBoard>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_75","190","832","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("108");
            obj.set_text("class : <b v=\'true\'>sta_WF_DetailTi_CP</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_76","290","970","1","46",null,null,null,null,null,null,this);
            obj.set_taborder("109");
            obj.set_background("#ff0000");
            obj.set_text("<DesignFormClipBoard version=\"1.0\">\n  <Copydata>\n    <Component copyrect=\"1186,302,1187,328\">\n      <Static id=\"stc_71\" taborder=\"104\" left=\"1186\" top=\"302\" width=\"1\" height=\"26\" background=\"#ff0000\" text=\"\"/>\n    </Component>\n  </Copydata>\n  <Copydata>\n    <Component copyrect=\"1100,324,1240,344\">\n      <Static id=\"stc_68\" taborder=\"101\" left=\"1100\" top=\"324\" height=\"20\" text=\"class : &lt;b v=\'true\'&gt;sta_WF_DetailBg&lt;/b&gt;\" width=\"140\" font=\"11px/normal &quot;Malgun Gothic&quot;\" color=\"dodgerblue\" usedecorate=\"true\"/>\n    </Component>\n  </Copydata>\n</DesignFormClipBoard>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_77","220","1016","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("110");
            obj.set_text("class : <b v=\'true\'>edt_WF_Detail</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_78","466","912","1","26",null,null,null,null,null,null,this);
            obj.set_taborder("111");
            obj.set_background("#ff0000");
            obj.set_text("<DesignFormClipBoard version=\"1.0\">\n  <Copydata>\n    <Component copyrect=\"1186,302,1187,328\">\n      <Static id=\"stc_71\" taborder=\"104\" left=\"1186\" top=\"302\" width=\"1\" height=\"26\" background=\"#ff0000\" text=\"\"/>\n    </Component>\n  </Copydata>\n  <Copydata>\n    <Component copyrect=\"1100,324,1240,344\">\n      <Static id=\"stc_68\" taborder=\"101\" left=\"1100\" top=\"324\" height=\"20\" text=\"class : &lt;b v=\'true\'&gt;sta_WF_DetailBg&lt;/b&gt;\" width=\"140\" font=\"11px/normal &quot;Malgun Gothic&quot;\" color=\"dodgerblue\" usedecorate=\"true\"/>\n    </Component>\n  </Copydata>\n</DesignFormClipBoard>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_79","396","888","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("112");
            obj.set_text("class : <b v=\'true\'>sta_WF_DetailTi02</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_80","126","888","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("113");
            obj.set_text("class : <b v=\'true\'>sta_WF_DetailTi01</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_81","156","912","1","26",null,null,null,null,null,null,this);
            obj.set_taborder("114");
            obj.set_background("#ff0000");
            obj.set_text("<DesignFormClipBoard version=\"1.0\">\n  <Copydata>\n    <Component copyrect=\"1186,302,1187,328\">\n      <Static id=\"stc_71\" taborder=\"104\" left=\"1186\" top=\"302\" width=\"1\" height=\"26\" background=\"#ff0000\" text=\"\"/>\n    </Component>\n  </Copydata>\n  <Copydata>\n    <Component copyrect=\"1100,324,1240,344\">\n      <Static id=\"stc_68\" taborder=\"101\" left=\"1100\" top=\"324\" height=\"20\" text=\"class : &lt;b v=\'true\'&gt;sta_WF_DetailBg&lt;/b&gt;\" width=\"140\" font=\"11px/normal &quot;Malgun Gothic&quot;\" color=\"dodgerblue\" usedecorate=\"true\"/>\n    </Component>\n  </Copydata>\n</DesignFormClipBoard>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_82","906","912","1","26",null,null,null,null,null,null,this);
            obj.set_taborder("115");
            obj.set_background("#ff0000");
            obj.set_text("<DesignFormClipBoard version=\"1.0\">\n  <Copydata>\n    <Component copyrect=\"1186,302,1187,328\">\n      <Static id=\"stc_71\" taborder=\"104\" left=\"1186\" top=\"302\" width=\"1\" height=\"26\" background=\"#ff0000\" text=\"\"/>\n    </Component>\n  </Copydata>\n  <Copydata>\n    <Component copyrect=\"1100,324,1240,344\">\n      <Static id=\"stc_68\" taborder=\"101\" left=\"1100\" top=\"324\" height=\"20\" text=\"class : &lt;b v=\'true\'&gt;sta_WF_DetailBg&lt;/b&gt;\" width=\"140\" font=\"11px/normal &quot;Malgun Gothic&quot;\" color=\"dodgerblue\" usedecorate=\"true\"/>\n    </Component>\n  </Copydata>\n</DesignFormClipBoard>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_83","836","888","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("116");
            obj.set_text("class : <b v=\'true\'>sta_WF_DetailTi03</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_84","916","972","1","26",null,null,null,null,null,null,this);
            obj.set_taborder("117");
            obj.set_background("#ff0000");
            obj.set_text("<DesignFormClipBoard version=\"1.0\">\n  <Copydata>\n    <Component copyrect=\"1186,302,1187,328\">\n      <Static id=\"stc_71\" taborder=\"104\" left=\"1186\" top=\"302\" width=\"1\" height=\"26\" background=\"#ff0000\" text=\"\"/>\n    </Component>\n  </Copydata>\n  <Copydata>\n    <Component copyrect=\"1100,324,1240,344\">\n      <Static id=\"stc_68\" taborder=\"101\" left=\"1100\" top=\"324\" height=\"20\" text=\"class : &lt;b v=\'true\'&gt;sta_WF_DetailBg&lt;/b&gt;\" width=\"140\" font=\"11px/normal &quot;Malgun Gothic&quot;\" color=\"dodgerblue\" usedecorate=\"true\"/>\n    </Component>\n  </Copydata>\n</DesignFormClipBoard>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_85","846","998","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("118");
            obj.set_text("class : <b v=\'true\'>sta_WF_DetailSum</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_86","1126","972","1","26",null,null,null,null,null,null,this);
            obj.set_taborder("119");
            obj.set_background("#ff0000");
            obj.set_text("<DesignFormClipBoard version=\"1.0\">\n  <Copydata>\n    <Component copyrect=\"1186,302,1187,328\">\n      <Static id=\"stc_71\" taborder=\"104\" left=\"1186\" top=\"302\" width=\"1\" height=\"26\" background=\"#ff0000\" text=\"\"/>\n    </Component>\n  </Copydata>\n  <Copydata>\n    <Component copyrect=\"1100,324,1240,344\">\n      <Static id=\"stc_68\" taborder=\"101\" left=\"1100\" top=\"324\" height=\"20\" text=\"class : &lt;b v=\'true\'&gt;sta_WF_DetailBg&lt;/b&gt;\" width=\"140\" font=\"11px/normal &quot;Malgun Gothic&quot;\" color=\"dodgerblue\" usedecorate=\"true\"/>\n    </Component>\n  </Copydata>\n</DesignFormClipBoard>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_87","1056","998","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("120");
            obj.set_text("class : <b v=\'true\'>msk_WF_DetailSum</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
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
        this.registerScript("ComponentGuide_07.xfdl", function() {

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

        this.stc_07_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclick",this.ComponentGuide_01_onclick,this);
            this.stc_07.addEventHandler("onclick",this.stc_07_onclick,this);
            this.stc_16.addEventHandler("onclick",this.stc_07_onclick,this);
            this.stc_23.addEventHandler("onclick",this.stc_07_onclick,this);
            this.stc_45.addEventHandler("onclick",this.stc_07_onclick,this);
        };
        this.loadIncludeScript("ComponentGuide_07.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
