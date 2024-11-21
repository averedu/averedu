(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CSYSCD0200");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,910);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMaster1", this);
            obj._setContents("<ColumnInfo><Column id=\"data\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">data1</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"data\">data2</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"data\">data3</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"data\">data4</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"data\">data5</Col><Col id=\"level\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster2", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"상태\" type=\"STRING\" size=\"256\"/><Column id=\"순번\" type=\"STRING\" size=\"256\"/><Column id=\"이전부서\" type=\"STRING\" size=\"256\"/><Column id=\"이후부서\" type=\"STRING\" size=\"256\"/><Column id=\"비고\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CHK\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_Dept_Title_01","13","15",null,"45","1060",null,null,null,null,null,this);
            obj.set_font("14pt/normal \"Arial\"");
            obj.set_taborder("1");
            obj.set_text("<b v=\'true\'>부서코드관리</b> ");
            obj.set_cssclass("stc_Dept_Title_01");
            obj.set_color("#000000");
            obj.set_usedecorate("true");
            obj.set_enableevent("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_01","10","69","77","45",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("<b v=\'true\'>부서명</b> ");
            obj.set_cssclass("stc_dept_01");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_05","10","113","77","45",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("<b v=\'true\'>기관구분</b> ");
            obj.set_cssclass("stc_dept_05");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_02","157","68","77","45",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("<b v=\'true\'>부서코드</b> ");
            obj.set_cssclass("stc_dept_02");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_06","155","113","77","45",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("<b v=\'true\'>최종조직여부</b> ");
            obj.set_cssclass("stc_dept_06");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_04","533","68","77","45",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("<b v=\'true\'>사용여부</b> ");
            obj.set_cssclass("stc_dept_04");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_07","330","117","77","45",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("<b v=\'true\'>학사조직여부</b> ");
            obj.set_cssclass("stc_dept_07");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_03","330","71","77","45",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("<b v=\'true\'>부서ID</b> ");
            obj.set_cssclass("stc_dept_03");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept_01","68","77","82","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("edt_dept_01");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept_02","242","78","82","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("edt_dept_02");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept_03","428","75","82","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("edt_dept_03");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_dept_01","600","75","80","32",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_dept_03","244","120","80","32",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_dept_02","68","123","80","32",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_dept_04","430","120","80","32",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Button("btn_dept_02",null,"179","95","32","830",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("부서엑셀다운");
            obj.set_cssclass("btn_dept_02");
            this.addChild(obj.name, obj);

            obj = new Button("btn_dept_01","1391","78","99","35",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("⌕ 조회");
            obj.set_escapebutton("true");
            obj.set_background("#e1b01d");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster1","10","211","664","629",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_binddataset("dsMaster1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"664\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"data\"/></Band><Band id=\"body\"><Cell text=\"bind:data\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:level\" background=\"#ffffff\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_08","10","168","74","39",null,null,null,null,null,null,this);
            obj.set_font("15px/normal \"Malgun Gothic\"");
            obj.set_taborder("18");
            obj.set_text("<b v=\'true\'>부서목록</b> ");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_09","684","165","74","39",null,null,null,null,null,null,this);
            obj.set_font("15px/normal \"Malgun Gothic\"");
            obj.set_taborder("19");
            obj.set_text("<b v=\'true\'>부서정보</b> ");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_dept_03",null,"179","95","33","730",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("부서엑셀다운");
            obj.set_cssclass("btn_dept_03");
            this.addChild(obj.name, obj);

            obj = new Button("btn_dept_04",null,"179","57","34","670",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("⊕ 추가");
            obj.set_cssclass("btn_dept_04");
            obj.set_cursor("auto");
            this.addChild(obj.name, obj);

            obj = new Button("btn_dept_05",null,"179","53","32","613",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("⊝ 삭제");
            obj.set_cssclass("btn_dept_05");
            this.addChild(obj.name, obj);

            obj = new Button("btn_dept_06",null,"179","57","32","553",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("저장");
            obj.set_cssclass("btn_dept_06");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_10","1372","172","96","45",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("<b v=\'true\'>총건수 : </b> ");
            obj.set_cssclass("stc_dept_10");
            obj.set_usedecorate("true");
            obj.set_font("15px/normal \"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_00",null,"213","836","29","400",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00",null,"242","836","28","400",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_11",null,"212","120","28","1116",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("부서코드");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept_04",null,"215","173","22","940",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_enable("true");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_00_00",null,"270","836","28","400",null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_14",null,"240","120","28","1116",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("기관구분");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13",null,"298","836","28","400",null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_17",null,"268","120","28","1116",null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("부서명");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_01",null,"326","836","28","400",null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_02",null,"408","836","28","400",null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_03",null,"380","836","28","400",null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_04",null,"352","836","28","400",null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_20",null,"296","120","28","1116",null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("부서영문명");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_23",null,"324","120","28","1116",null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("부서중문명");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_26",null,"352","120","28","1116",null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("생성일자");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_29",null,"380","120","28","1116",null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("폐지일자");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_32",null,"408","120","28","1116",null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("폐지예정일자");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept_06",null,"217","90","22","665",null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_12",null,"214","120","28","812",null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("상위부서");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_dept_07",null,"217","22","22","640",null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_cssclass("btn_WF_PopSrch");
            obj.set_text("");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_13",null,"213","120","29","514",null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept_05",null,"217","53","22","757",null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new CheckBox("che_dept_01","1410","212","40","30",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_15",null,"242","120","28","812",null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("조직유형");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_34",null,"408","120","28","563",null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_22",null,"296","120","28","514",null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("최종조직여부");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_19",null,"270","120","28","514",null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("가상조직여부");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_16",null,"242","120","28","514",null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("학사조직여부");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_33",null,"408","120","28","812",null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("부총장보직코드");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_30",null,"380","120","28","812",null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("학부(팀)");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_27",null,"354","120","28","812",null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("대학(처)");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_24",null,"326","120","28","812",null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("부서중문약어명");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_21",null,"298","120","28","812",null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("부서영문약어명");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_18",null,"270","120","28","812",null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("부서약어명");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_31",null,"380","120","28","514",null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("부서졍렬승인");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_28",null,"354","120","28","514",null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("주야구분");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_25",null,"326","120","28","514",null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("부서ID");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_dept_05",null,"245","173","22","940",null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_enable("true");
            obj.set_innerdataset("dsGijunGeumaek");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_dept_06",null,"243","170","22","640",null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_enable("true");
            obj.set_innerdataset("dsGijunGeumaek");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new CheckBox("che_dept_02","1410","240","40","30",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new CheckBox("che_dept_04","1410","295","40","30",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new CheckBox("che_dept_03","1410","268","40","30",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_dept_07",null,"355","100","22","410",null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_enable("true");
            obj.set_innerdataset("dsGijunGeumaek");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_dept_08",null,"412","120","22","690",null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_enable("true");
            obj.set_innerdataset("dsGijunGeumaek");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept_07",null,"273","173","22","940",null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_enable("true");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept_08",null,"274","170","22","640",null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept_12",null,"328","170","22","640",null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept_10",null,"301","170","22","640",null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept_11",null,"329","173","22","940",null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept_09",null,"300","173","22","940",null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept_13",null,"329","101","22","410",null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_enable("true");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept_14",null,"355","55","22","755",null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept_15",null,"355","90","22","662",null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept_16",null,"383","55","22","755",null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept_17",null,"383","89","22","662",null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_dept_09",null,"383","22","22","638",null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_cssclass("btn_WF_PopSrch");
            obj.set_text("");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_dept_08",null,"355","22","22","638",null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_cssclass("btn_WF_PopSrch");
            obj.set_text("");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_dept_18","1407","383","103","22",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_format("9,999");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_dept_19","1360","410","150","22",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_format("9,999");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_dept_01","807","355","100","22",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_dept_02","807","383","100","22",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_dept_03","807","410","100","22",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_35","683","446","194","39",null,null,null,null,null,null,this);
            obj.set_font("15px/normal \"Malgun Gothic\"");
            obj.set_taborder("87");
            obj.set_text("<b v=\'true\'>부서코드연계정보</b> ");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00",null,"570","836","28","400",null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_01",null,"543","836","28","400",null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_02",null,"515","835","28","400",null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_03",null,"598","837","28","398",null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_04",null,"626","836","28","398",null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_05",null,"487","835","28","400",null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_36",null,"485","120","28","1116",null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_text("증명서부서명");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_48",null,"597","120","28","1116",null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_text("업적심사대학");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_45",null,"569","120","28","1116",null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_text("등록계열");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_41",null,"516","120","28","570",null,null,null,null,null,this);
            obj.set_taborder("97");
            obj.set_text("박사학위");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_42",null,"541","120","28","1116",null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_text("전공분류");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_51",null,"625","156","28","1080",null,null,null,null,null,this);
            obj.set_taborder("99");
            obj.set_text("그룹웨어부서연계여부");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_39",null,"513","120","28","1116",null,null,null,null,null,this);
            obj.set_taborder("100");
            obj.set_text("학사학위");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_38",null,"488","120","28","570",null,null,null,null,null,this);
            obj.set_taborder("101");
            obj.set_text("정보공시계열");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_37",null,"487","120","28","840",null,null,null,null,null,this);
            obj.set_taborder("102");
            obj.set_text("주간학과코드");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_44",null,"544","120","28","570",null,null,null,null,null,this);
            obj.set_taborder("103");
            obj.set_text("업적계열");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_40",null,"515","120","28","840",null,null,null,null,null,this);
            obj.set_taborder("104");
            obj.set_text("석사학위");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_46",null,"569","120","28","840",null,null,null,null,null,this);
            obj.set_taborder("105");
            obj.set_text("졸업학위증출력명");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_43",null,"543","120","28","840",null,null,null,null,null,this);
            obj.set_taborder("106");
            obj.set_text("연계전공");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_52",null,"626","172","28","788",null,null,null,null,null,this);
            obj.set_taborder("107");
            obj.set_text("교원그룹웨어부서코드");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_49",null,"598","120","28","840",null,null,null,null,null,this);
            obj.set_taborder("108");
            obj.set_text("대학원분류");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_50",null,"598","120","28","570",null,null,null,null,null,this);
            obj.set_taborder("109");
            obj.set_text("학부(과)");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_47",null,"570","120","28","570",null,null,null,null,null,this);
            obj.set_taborder("110");
            obj.set_text("수업년한");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_53",null,"626","176","28","514",null,null,null,null,null,this);
            obj.set_taborder("111");
            obj.set_text("직원그룹웨어부서코드");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept_20",null,"491","143","22","970",null,null,null,null,null,this);
            obj.set_taborder("112");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept_22",null,"491","95","22","695",null,null,null,null,null,this);
            obj.set_taborder("113");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept_21",null,"491","48","22","791",null,null,null,null,null,this);
            obj.set_taborder("114");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept_24",null,"547","95","22","695",null,null,null,null,null,this);
            obj.set_taborder("115");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept_23",null,"547","48","22","791",null,null,null,null,null,this);
            obj.set_taborder("116");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept_27",null,"573","86","22","480",null,null,null,null,null,this);
            obj.set_taborder("117");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept_26",null,"572","143","22","695",null,null,null,null,null,this);
            obj.set_taborder("118");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept_25",null,"572","73","22","1040",null,null,null,null,null,this);
            obj.set_taborder("119");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept_29",null,"629","113","22","400",null,null,null,null,null,this);
            obj.set_taborder("120");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept_28",null,"629","93","22","693",null,null,null,null,null,this);
            obj.set_taborder("121");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJanghakNm09",null,"601","103","22","400",null,null,null,null,null,this);
            obj.set_taborder("122");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJanghakNm10",null,"601","66","22","504",null,null,null,null,null,this);
            obj.set_taborder("123");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("che_dept_05","843","623","40","30",null,null,null,null,null,null,this);
            obj.set_taborder("124");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("cboJeyakGbcd",null,"491","156","22","410",null,null,null,null,null,this);
            obj.set_taborder("125");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsJeyakGubun");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cboJeyakGbcd00",null,"519","143","22","970",null,null,null,null,null,this);
            obj.set_taborder("126");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsJeyakGubun");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cboJeyakGbcd01",null,"518","156","22","410",null,null,null,null,null,this);
            obj.set_taborder("127");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsJeyakGubun");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cboJeyakGbcd02",null,"547","156","22","410",null,null,null,null,null,this);
            obj.set_taborder("128");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsJeyakGubun");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cboJeyakGbcd00_00",null,"549","143","22","971",null,null,null,null,null,this);
            obj.set_taborder("129");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsJeyakGubun");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cboJeyakGbcd00_00_00",null,"599","143","22","970",null,null,null,null,null,this);
            obj.set_taborder("130");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsJeyakGubun");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cboJeyakGbcd00_00_01",null,"519","143","22","696",null,null,null,null,null,this);
            obj.set_taborder("131");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsJeyakGubun");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cboJeyakGbcd00_00_02",null,"598","143","22","695",null,null,null,null,null,this);
            obj.set_taborder("132");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsJeyakGubun");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_54","689","671","194","39",null,null,null,null,null,null,this);
            obj.set_font("15px/normal \"Malgun Gothic\"");
            obj.set_taborder("133");
            obj.set_text("<b v=\'true\'>부서이력목록</b> ");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_55","843","671","365","39",null,null,null,null,null,null,this);
            obj.set_font("10px/normal \"Malgun Gothic\"");
            obj.set_taborder("134");
            obj.set_usedecorate("true");
            obj.set_text("* 부서가 통·폐합되거나 명칭 변경등으로 신규 부서를 등록한 경우 \r\n이력 관리를 위해 부서 이력 목록을 등록해주십시오.");
            this.addChild(obj.name, obj);

            obj = new Button("btn_dept_10",null,"675","65","31","675",null,null,null,null,null,this);
            obj.set_taborder("135");
            obj.set_text("⊕ 추가");
            obj.set_cssclass("btn_dept_04");
            obj.set_cursor("auto");
            this.addChild(obj.name, obj);

            obj = new Button("btn_dept_13",null,"675","65","31","472",null,null,null,null,null,this);
            obj.set_taborder("136");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_dept_04");
            obj.set_cursor("auto");
            this.addChild(obj.name, obj);

            obj = new Button("btn_dept_11",null,"675","65","31","608",null,null,null,null,null,this);
            obj.set_taborder("137");
            obj.set_text("⊝ 삭제");
            obj.set_cssclass("btn_dept_04");
            obj.set_cursor("auto");
            this.addChild(obj.name, obj);

            obj = new Button("btn_dept_12",null,"675","65","31","540",null,null,null,null,null,this);
            obj.set_taborder("138");
            obj.set_text("저장");
            obj.set_cssclass("btn_dept_04");
            obj.set_cursor("auto");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_10_00","1458","670","96","45",null,null,null,null,null,null,this);
            obj.set_taborder("139");
            obj.set_text("<b v=\'true\'>총건수 : </b> ");
            obj.set_cssclass("stc_dept_10");
            obj.set_usedecorate("true");
            obj.set_font("15px/normal \"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster2","687","720","835","106",null,null,null,null,null,null,this);
            obj.set_taborder("140");
            obj.set_binddataset("dsMaster2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"47\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"238\"/><Column size=\"293\"/><Column size=\"95\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"상태\"/><Cell col=\"2\" text=\"순번\"/><Cell col=\"3\" text=\"이전부서\"/><Cell col=\"4\" text=\"이후부서\"/><Cell col=\"5\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" background=\"#ffffff\"/><Cell col=\"1\" text=\"bind:상태\" background=\"#ffffff\"/><Cell col=\"2\" text=\"bind:순번\" background=\"#ffffff\"/><Cell col=\"3\" text=\"bind:이전부서\" background=\"#ffffff\"/><Cell col=\"4\" text=\"bind:이후부서\" background=\"#ffffff\"/><Cell col=\"5\" text=\"bind:비고\" background=\"#ffffff\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1920,910,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_dept_04","value","dsMaster","JANGHAK_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_dept_06","value","dsMaster","JANGHAK_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","btn_dept_07","enable","dsBindable","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edt_dept_05","value","dsMaster","JANGHAK_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","cbo_dept_05","value","dsMaster","IPHAKGEUM_GIJUN_GEUMAEK_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","cbo_dept_06","value","dsMaster","IPHAKGEUM_GIJUN_GEUMAEK_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","cbo_dept_07","value","dsMaster","IPHAKGEUM_GIJUN_GEUMAEK_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","cbo_dept_08","value","dsMaster","IPHAKGEUM_GIJUN_GEUMAEK_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edt_dept_07","value","dsMaster","JANGHAK_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edt_dept_08","value","dsMaster","JANGHAK_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edt_dept_12","value","dsMaster","JANGHAK_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","edt_dept_10","value","dsMaster","JANGHAK_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","edt_dept_11","value","dsMaster","JANGHAK_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","edt_dept_09","value","dsMaster","JANGHAK_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","edt_dept_13","value","dsMaster","JANGHAK_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","edt_dept_14","value","dsMaster","JANGHAK_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","edt_dept_15","value","dsMaster","JANGHAK_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","edt_dept_16","value","dsMaster","JANGHAK_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","edt_dept_17","value","dsMaster","JANGHAK_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","btn_dept_09","enable","dsBindable","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","btn_dept_08","enable","dsBindable","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","edt_dept_18","value","dsMaster","IPHAKGEUM_JIGEUP_PAMT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","edt_dept_19","value","dsMaster","IPHAKGEUM_JIGEUP_PAMT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","cal_dept_01","value","ds_input","DEUNGROK_MAGAM_FRDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","cal_dept_02","value","ds_input","DEUNGROK_MAGAM_FRDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","cal_dept_03","value","ds_input","DEUNGROK_MAGAM_FRDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","edt_dept_20","value","dsMaster","JANGHAK_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","edt_dept_22","value","dsMaster","JANGHAK_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","edt_dept_21","value","dsMaster","JANGHAK_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","edt_dept_24","value","dsMaster","JANGHAK_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","edt_dept_23","value","dsMaster","JANGHAK_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","edt_dept_27","value","dsMaster","JANGHAK_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","edt_dept_26","value","dsMaster","JANGHAK_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","edt_dept_25","value","dsMaster","JANGHAK_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","edt_dept_29","value","dsMaster","JANGHAK_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","edt_dept_28","value","dsMaster","JANGHAK_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","edtJanghakNm09","value","dsMaster","JANGHAK_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","edtJanghakNm10","value","dsMaster","JANGHAK_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","cboJeyakGbcd","value","dsMaster","JEYAK_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","cboJeyakGbcd00","value","dsMaster","JEYAK_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","cboJeyakGbcd01","value","dsMaster","JEYAK_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","cboJeyakGbcd02","value","dsMaster","JEYAK_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","cboJeyakGbcd00_00","value","dsMaster","JEYAK_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","cboJeyakGbcd00_00_00","value","dsMaster","JEYAK_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","cboJeyakGbcd00_00_01","value","dsMaster","JEYAK_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","cboJeyakGbcd00_00_02","value","dsMaster","JEYAK_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CSYSCD0200.xfdl", function() {

        this.btn_dept_01_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.stc_Dept_Title_01.addEventHandler("onclick",this.stc_09_00_onclick,this);
            this.stc_dept_05.addEventHandler("onclick",this.stc01_00_onclick,this);
            this.stc_dept_02.addEventHandler("onclick",this.stc01_01_onclick,this);
            this.stc_dept_06.addEventHandler("onclick",this.stc01_02_onclick,this);
            this.stc_dept_04.addEventHandler("onclick",this.stc_dept_04_onclick,this);
            this.stc_dept_07.addEventHandler("onclick",this.stc_dept_07_onclick,this);
            this.cbo_dept_01.addEventHandler("onitemchanged",this.cbo_dept_01_onitemchanged,this);
            this.cbo_dept_03.addEventHandler("onitemchanged",this.cbo_dept_01_onitemchanged,this);
            this.cbo_dept_02.addEventHandler("onitemchanged",this.cbo_dept_01_onitemchanged,this);
            this.cbo_dept_04.addEventHandler("onitemchanged",this.cbo_dept_01_onitemchanged,this);
            this.btn_dept_02.addEventHandler("onclick",this.divHakgwa_btnJeongong_onclick,this);
            this.btn_dept_01.addEventHandler("onclick",this.btn_dept_01_onclick,this);
            this.stc_dept_08.addEventHandler("onclick",this.stc_dept_08_onclick,this);
            this.stc_dept_09.addEventHandler("onclick",this.stc_dept_08_onclick,this);
            this.btn_dept_03.addEventHandler("onclick",this.divHakgwa_btnJeongong_onclick,this);
            this.btn_dept_04.addEventHandler("onclick",this.divHakgwa_btnJeongong_onclick,this);
            this.btn_dept_05.addEventHandler("onclick",this.divHakgwa_btnJeongong_onclick,this);
            this.btn_dept_06.addEventHandler("onclick",this.divHakgwa_btnJeongong_onclick,this);
            this.stc_13_00_00_00_00.addEventHandler("onclick",this.stc_13_00_00_00_00_onclick,this);
            this.stc_13_00.addEventHandler("onclick",this.stc_13_00_onclick,this);
            this.stc_dept_14.addEventHandler("onclick",this.stc_12_onclick,this);
            this.stc_13_01.addEventHandler("onclick",this.stc_13_01_onclick,this);
            this.stc_dept_26.addEventHandler("onclick",this.stc_dept_26_onclick,this);
            this.stc_dept_29.addEventHandler("onclick",this.stc_12_04_onclick,this);
            this.edt_dept_06.addEventHandler("onchanged",this.edtJanghakNm_onchanged,this);
            this.btn_dept_07.addEventHandler("onclick",this.btnJanghak_onclick,this);
            this.che_dept_01.addEventHandler("onclick",this.CheckBox00_onclick,this);
            this.che_dept_02.addEventHandler("onclick",this.CheckBox00_onclick,this);
            this.che_dept_04.addEventHandler("onclick",this.CheckBox00_onclick,this);
            this.che_dept_03.addEventHandler("onclick",this.CheckBox00_onclick,this);
            this.btn_dept_09.addEventHandler("onclick",this.btnJanghak_onclick,this);
            this.btn_dept_08.addEventHandler("onclick",this.btnJanghak_onclick,this);
            this.cal_dept_01.addEventHandler("onkeydown",this.fn_Enter,this);
            this.cal_dept_02.addEventHandler("onkeydown",this.fn_Enter,this);
            this.cal_dept_03.addEventHandler("onkeydown",this.fn_Enter,this);
            this.stc_dept_35.addEventHandler("onclick",this.stc_dept_08_onclick,this);
            this.stc_dept_52.addEventHandler("onclick",this.stc_dept_52_onclick,this);
            this.che_dept_05.addEventHandler("onclick",this.CheckBox00_onclick,this);
            this.cboJeyakGbcd.addEventHandler("onitemchanged",this.cboSilseup_onitemchanged,this);
            this.cboJeyakGbcd00.addEventHandler("onitemchanged",this.cboSilseup_onitemchanged,this);
            this.cboJeyakGbcd01.addEventHandler("onitemchanged",this.cboSilseup_onitemchanged,this);
            this.cboJeyakGbcd02.addEventHandler("onitemchanged",this.cboSilseup_onitemchanged,this);
            this.cboJeyakGbcd00_00.addEventHandler("onitemchanged",this.cboSilseup_onitemchanged,this);
            this.cboJeyakGbcd00_00_00.addEventHandler("onitemchanged",this.cboSilseup_onitemchanged,this);
            this.cboJeyakGbcd00_00_01.addEventHandler("onitemchanged",this.cboSilseup_onitemchanged,this);
            this.cboJeyakGbcd00_00_02.addEventHandler("onitemchanged",this.cboSilseup_onitemchanged,this);
            this.stc_dept_54.addEventHandler("onclick",this.stc_dept_08_onclick,this);
            this.stc_dept_55.addEventHandler("onclick",this.stc_dept_08_onclick,this);
            this.btn_dept_10.addEventHandler("onclick",this.divHakgwa_btnJeongong_onclick,this);
            this.btn_dept_13.addEventHandler("onclick",this.divHakgwa_btnJeongong_onclick,this);
            this.btn_dept_11.addEventHandler("onclick",this.divHakgwa_btnJeongong_onclick,this);
            this.btn_dept_12.addEventHandler("onclick",this.divHakgwa_btnJeongong_onclick,this);
        };
        this.loadIncludeScript("CSYSCD0200.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
