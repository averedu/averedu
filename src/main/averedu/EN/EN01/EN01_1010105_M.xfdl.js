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
            this.set_titletext("입시모집관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMaster", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKSAENGBU_JEGONG_YYYY\" type=\"STRING\" size=\"10\"/><Column id=\"SEORYU_JECHUL_DT\" type=\"STRING\" size=\"8\"/><Column id=\"JEOPSU_FRDT\" type=\"STRING\" size=\"8\"/><Column id=\"JEOPSU_TODT\" type=\"STRING\" size=\"8\"/><Column id=\"HAPGYEOKJA_BALPYO_DT\" type=\"STRING\" size=\"8\"/><Column id=\"HAPGYEOKJA_DEUNGROK_FRDT\" type=\"STRING\" size=\"8\"/><Column id=\"HAPGYEOKJA_DEUNGROK_TODT\" type=\"STRING\" size=\"8\"/><Column id=\"CHUNGWON_DEUNGROK_FRDT\" type=\"STRING\" size=\"8\"/><Column id=\"CHUNGWON_DEUNGROK_TODT\" type=\"STRING\" size=\"8\"/><Column id=\"GOJISEO_PRINT_FRDT\" type=\"STRING\" size=\"8\"/><Column id=\"GOJISEO_PRINT_TODT\" type=\"STRING\" size=\"8\"/><Column id=\"HYEONJAE_MOJIP_YN\" type=\"STRING\" size=\"2\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"500\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"500\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mojipGB", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gijunYyyy", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBindableComp", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"bEnable\" type=\"STRING\" size=\"256\"/><Column id=\"bReadonly\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"bEnable\">false</Col><Col id=\"bReadonly\">true</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdMaster","0","77",null,null,"0","144",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"100\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"상태\"/><Cell col=\"1\" text=\"입시년도\"/><Cell col=\"2\" text=\"모집구분\"/><Cell col=\"3\" text=\"학생부&#13;&#10;제공년도\"/><Cell col=\"4\" text=\"서류&#13;&#10;제출일자\"/><Cell col=\"5\" text=\"접수기간\"/><Cell col=\"6\" text=\"합격자&#13;&#10;발표일자\"/><Cell col=\"7\" text=\"합격자등록기간\"/><Cell col=\"8\" text=\"충원 등록기간\"/><Cell col=\"9\" text=\"고지서출력기간\"/><Cell col=\"10\" text=\"현재&#13;&#10;모집여부\"/></Band><Band id=\"body\"><Cell textAlign=\"center\" edittype=\"none\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:IPSI_YYYY\" editmaxlength=\"10\"/><Cell col=\"2\" displaytype=\"combotext\" edittype=\"none\" textAlign=\"center\" editmaxlength=\"100\" combodataset=\"ds_mojipGB\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\" text=\"bind:MOJIP_GBCD\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:HAKSAENGBU_JEGONG_YYYY\" editmaxlength=\"4\"/><Cell col=\"4\" displaytype=\"date\" edittype=\"none\" textAlign=\"center\" text=\"bind:SEORYU_JECHUL_DT\" editmaxlength=\"8\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"expr:JEOPSU_FRDT.substring(0,4) +&apos;-&apos;+ JEOPSU_FRDT.substring(4,6) +&quot;-&quot;+JEOPSU_FRDT.substring(6,8) + &quot; ~ &quot; + JEOPSU_TODT.substring(0,4) +&apos;-&apos;+ JEOPSU_TODT.substring(4,6) +&quot;-&quot;+JEOPSU_TODT.substring(6,8)\" editmaxlength=\"8\" combodataset=\"dsHaeksim\"/><Cell col=\"6\" displaytype=\"date\" edittype=\"none\" textAlign=\"center\" editmaxlength=\"8\" text=\"bind:HAPGYEOKJA_BALPYO_DT\" combodataset=\"dsBigyogwaBunryu\"/><Cell col=\"7\" text=\"expr:HAPGYEOKJA_DEUNGROK_FRDT.substring(0,4) +&apos;-&apos;+ HAPGYEOKJA_DEUNGROK_FRDT.substring(4,6) +&quot;-&quot;+HAPGYEOKJA_DEUNGROK_FRDT.substring(6,8) + &quot; ~ &quot; + HAPGYEOKJA_DEUNGROK_TODT.substring(0,4) +&apos;-&apos;+ HAPGYEOKJA_DEUNGROK_TODT.substring(4,6) +&quot;-&quot;+HAPGYEOKJA_DEUNGROK_TODT.substring(6,8)\" edittype=\"none\"/><Cell col=\"8\" text=\"expr:CHUNGWON_DEUNGROK_FRDT.substring(0,4) +&apos;-&apos;+ CHUNGWON_DEUNGROK_FRDT.substring(4,6) +&quot;-&quot;+CHUNGWON_DEUNGROK_FRDT.substring(6,8) + &quot; ~ &quot; + CHUNGWON_DEUNGROK_TODT.substring(0,4) +&apos;-&apos;+ CHUNGWON_DEUNGROK_TODT.substring(4,6) +&quot;-&quot;+CHUNGWON_DEUNGROK_TODT.substring(6,8)\" edittype=\"none\"/><Cell col=\"9\" text=\"expr:GOJISEO_PRINT_FRDT.substring(0,4) +&apos;-&apos;+ GOJISEO_PRINT_FRDT.substring(4,6) +&quot;-&quot;+GOJISEO_PRINT_FRDT.substring(6,8) + &quot; ~ &quot; + GOJISEO_PRINT_TODT.substring(0,4) +&apos;-&apos;+GOJISEO_PRINT_TODT.substring(4,6) +&quot;-&quot;+GOJISEO_PRINT_TODT.substring(6,8)\" edittype=\"none\"/><Cell col=\"10\" displaytype=\"combotext\" text=\"bind:HYEONJAE_MOJIP_YN\" edittype=\"none\" combodataset=\"dsYN\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06","0",null,"1640","28",null,"81",null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06","0",null,"150","28",null,"81",null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("입시년도");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00","276",null,"120","28",null,"81",null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("모집구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00","543",null,"130","28",null,"81",null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("학생부제공년도");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"42","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01","7","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("입시년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","87","9","119","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00","78","0","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01","14","0","190","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","14","31","190","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01","500","42","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","0","52",null,"22","1475",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("년도 별 모집구분 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","177","51",null,"24","1340",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","69","320","8",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Combo("cboPyeongGaSigi00","398",null,"141","22",null,"84",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("ds_mojipGB");
            obj.set_cssclass("point");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","500","656","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00","0",null,"1640","28",null,"54",null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01","0",null,"150","28",null,"54",null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("서류제출일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_01","543",null,"130","28",null,"54",null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("접수기간");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00","1065",null,"130","28",null,"54",null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("합격자발표일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00_00","0",null,"1640","28",null,"27",null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_00","0",null,"150","28",null,"27",null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("합격자등록기간");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_01_00","543",null,"130","28",null,"27",null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("충원 등록기간");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00_00","1065",null,"130","28",null,"27",null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("고지서출력기간");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00_00_00","0",null,"1640","28",null,"0",null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_00_00","0",null,"150","28",null,"0",null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("현재모집여부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSeoRyoJaeChol","152",null,null,"22","1328","57",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Calendar("calHapGyukStDt","152",null,"160","22",null,"30",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","335",null,"26","22",null,"32",null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Calendar("calHapGyukEtDt","379",null,"160","22",null,"30",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Calendar("calChoongWonStDt","676",null,"160","22",null,"30",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","859",null,"26","22",null,"32",null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Calendar("calChoongWonEtDt","903",null,"160","22",null,"30",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Calendar("calJeopSooStDt","676",null,null,"22","804","57",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","859",null,"26","22",null,"59",null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Calendar("calJeopSooEtDt","903",null,null,"22","577","57",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSearchSincheongSijakDt01","1198",null,null,"22","282","57",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Calendar("calGojiSeoPrintStDt","1198",null,"160","22",null,"30",null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01","1381",null,"26","22",null,"32",null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Calendar("calGojiSeoPrintEtDt","1425",null,"160","22",null,"30",null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","152",null,"121","22",null,"84",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("point");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY00","676",null,"159","22",null,"84",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("point");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoMojipYn","152",null,"183","22",null,"3",null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_innerdataset("dsYN");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_direction("vertical");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","calSeoRyoJaeChol","value","dsMaster","SEORYU_JECHUL_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","calHapGyukStDt","value","dsMaster","HAPGYEOKJA_DEUNGROK_FRDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","calChoongWonStDt","value","dsMaster","CHUNGWON_DEUNGROK_FRDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","calJeopSooStDt","value","dsMaster","JEOPSU_FRDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","calSearchSincheongSijakDt01","value","dsMaster","HAPGYEOKJA_BALPYO_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","calGojiSeoPrintStDt","value","dsMaster","GOJISEO_PRINT_FRDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","spnSearchYYYY","value","dsMaster","IPSI_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","cboPyeongGaSigi00","value","dsMaster","MOJIP_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","spnSearchYYYY00","value","dsMaster","HAKSAENGBU_JEGONG_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","calJeopSooEtDt","value","dsMaster","JEOPSU_TODT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","calHapGyukEtDt","value","dsMaster","HAPGYEOKJA_DEUNGROK_TODT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","calChoongWonEtDt","value","dsMaster","CHUNGWON_DEUNGROK_TODT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","calGojiSeoPrintEtDt","value","dsMaster","GOJISEO_PRINT_TODT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.spnSearchYYYY","value","ds_input","IPSI_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","cboPyeongGaSigi00","readonly","dsBindableComp","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","rdoMojipYn","value","dsMaster","HYEONJAE_MOJIP_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","spnSearchYYYY","readonly","dsBindableComp","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("EN01_1010105_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): EN01_1010105_M.xfdl(입시모집관리)
        * 작 성         일 명: 홍길동
        * 작 성         일 자: 2021/04/12
        * 변 경         일 자:
        * 변 경         자 명:
        * 변경 및 수정 로그 : 일자별로 변경자 및 변경사항을 간략히 기술
        */
        /**********************************************************************
                01. 전처리 공통 함수 선언
        ***********************************************************************/
        /**********************************************************************
                02. 폼 변수 정의
        ***********************************************************************/
        this.lvchkColidDs   = "IPSI_YYYY$MOJIP_GBCD$HAKSAENGBU_JEGONG_YYYY$SEORYU_JECHUL_DT$JEOPSU_FRDT$JEOPSU_TODT$HAPGYEOKJA_BALPYO_DT$HAPGYEOKJA_DEUNGROK_FRDT$HAPGYEOKJA_DEUNGROK_TODT$CHUNGWON_DEUNGROK_FRDT$CHUNGWON_DEUNGROK_TODT$GOJISEO_PRINT_FRDT$GOJISEO_PRINT_TODT$HYEONJAE_MOJIP_YN";
        this.lvchkColNameDs = "입시년도$모집구분코드$학생부제공년도$서류제출일자$접수시작일$접수종료일$합격자발표일자$합격자등록시작일$합격자등록종료일$충원등록시작일$충원등록종료일$고지서출력시작일$고지서출력종료일$현재모집여부";
        /**********************************************************************
                03. 폼 로드 및 닫을때(폼이 포커스 갈때)
        ***********************************************************************/
        /**
         * 기능 : 폼 로드 완료후 초기값 Setting
         */
        this.form_onload = function(obj,e)
        {
            //폼에 공통으로 로드시 사용하는 함수.
            this.gfn_formOnload(obj.e);
            //사용자 화면  초기화 함수
            this.fn_formInit();
        };

        /**********************************************************************
                04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        this.fn_formInit = function()
        {
            var strDs    = "ds_mojipGB|dsYN";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00005|01032";                         // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "S|X";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = "";                                      // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId    = "Init";

                // gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
                // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.

            this.gfn_CmmnMultiComboLoad(strDs
                                      , strLgcd
                                      , strComb
                                      , strOptn
                                      , svcId);


        	// 입시기준년도 가져오기
        	var strSvc      = "IpsiGigunYyyy";
            var strUrl      = "prj/EN/EN_COM/Retrieve_GIJUN_YYYY.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "ds_gijunYyyy=ds_gijunYyyy";
            var strArg      = "";
            var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);

        };

        // 조회조건에 입시년도 설정
        this.fn_PostIpsiGigunYyyy = function()
        {
        	this.ds_input.setColumn(0, "IPSI_YYYY", this.ds_gijunYyyy.getColumn(0, "YYYY"));
        	this.fn_Ret();
        }

        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {

            this.gfn_clearSortAll(this.grdMaster);
            if(nErrorCode != 0)
            {
                this.gfn_alert(sErrorMsg,"에러정보","","error");
                return false;
            }else
            {
                /*sSvcId (Transaction Id)*/
                switch(sSvcId)
                {
                    case "Init":
                            this.fn_PostformInit();
                        break;
        			case "IpsiGigunYyyy":
                            this.fn_PostIpsiGigunYyyy();
                        break;
                    case "Ret":
                            this.fn_PostRet();
                        break;
                    case "Save":
                            this.fn_PostSave();
                        break;
                    case "New":
                            this.fn_PostNew();
                        break;
                    case "Del":
                            this.fn_PostDel();
                        break;
        			case "CopyBeforeData":
                            this.fn_PostCopyBeforeData();
                        break;
                    default:
                        break;
                }
            }
        };

        /************************************************************************************************;
         * 공통 버튼 호출 영역(공통버튼 사용에만사용);
         ************************************************************************************************/;
        /*;
         * _gfn_btnClick여기서 호출시 버튼을 클릭처릭(개인폼에 모든스크립터 복사함);
         */;
        this.fn_cmmBtnClick = function(sBtn)
        {
            switch(sBtn)
            {
                case "ret" :        // 조회
                        this.fn_Ret();
                    break;
                case "new" :         // 신규
                        this.fn_New();
                    break;
                case "del" :         // 삭제
                        this.fn_Del();
                    break;
                case "save" :        // 저장
                        this.fn_Save();
                    break;
                case "tmp1" :        // 팁
                         this.fn_Tip();
                    break;
                case "tmp2" :        // 전년도복사
                         this.fn_CopyBeforeData();
                    break;
                default :
                    break;
            };
        };;

        /**********************************************************************
                05. 조회 함수 선언(마스터 함수)
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreRet = function()
        {
            // 조회조건 셋팅
        	if(this.fn_beforeclose())
        	{
        		var result = this.gfn_confirm( "변경된 데이터가 있습니다. 그래도 이동하시겠습니까?", "저장","", "question" );
        		if(result == 0)
        		{
        			return false;
        		}
        	}
            return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_Ret = function()
        {
            if(!this.fn_PreRet())
            {
                return false;
            }
            var strSvc      = "Ret";
            var strUrl      = "/prj/EN/EN01/Retrieve_1010105_M.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsMaster=dsMaster";
            var strArg      = "";
            var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);
        };

        /**
         * 기능 : 조회 후 실행
         */
        this.fn_PostRet = function()
        {
            this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
        };

        /**********************************************************************
                06. 추가 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_New = function()
        {
            var nRow = this.dsMaster.addRow();
        	var IPSI_YYYY = this.ds_input.getColumn(0, "IPSI_YYYY");

        	this.dsMaster.setColumn(nRow, 'IPSI_YYYY', IPSI_YYYY);
        	this.dsMaster.setColumn(nRow, 'HYEONJAE_MOJIP_YN', 'N');
        	this.dsMaster.setColumn(nRow, 'HAKSAENGBU_JEGONG_YYYY', IPSI_YYYY-6);
        };

        /**********************************************************************
                07. 삭제 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 삭제 버튼 실행
         */

        this.fn_PreDel = function()
        {
        	var result = this.gfn_confirm( "현재선택행을 삭제하시겠습니까?", "삭제정보","","question" );
        	if(result == 0)
        	{
        		return false;
        	}

            //개별삭제시
            this.dsMaster.deleteRow(this.dsMaster.rowposition);
            return true;
        };

        /**
         * 기능 : Row 삭제 또는 Transaction 삭제 처리
         */
        this.fn_Del = function()
        {
            if(!this.fn_PreDel())
            {
                return false;
            }

            var strSvc      = "Del";
            var strUrl      = "/prj/EN/EN01/Delete_1010105_M.do";
            var strInDs     = "dsMaster=dsMaster:u";
            var strOutDs    = "";
            var strArg      = "";
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;                                   //샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);
        };

        this.fn_PostDel = function()
        {
            this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
        };

        /**********************************************************************
                08. 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave = function()
        {
            if(!this.gfn_isUpdate(this.dsMaster))
            {
                this.gfn_alert("변경된 이력이 없습니다.!","저장정보","","question");
                return false;
            }

            // 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
            var chkFocusFlg = false;
            var result      = this.gfn_cmmnChkEssentialItem(this.dsMaster, this.lvchkColidDs, this.lvchkColNameDs, '', chkFocusFlg, this);

            if (result[0] != "success")
            {
                this.gfn_alert(result[0],"저장정보","","question");
                this.dsMaster.set_rowposition(result[1]); //데이터셋 변경
                return false;
            }

        	if(this.calJeopSooStDt.value>this.calJeopSooEtDt.value)
        	{
        		this.alert("접수기간시작일자가 접수기간종료일자보다 클 수 없습니다");
        		return false;
        	}

        	if(this.calHapGyukStDt.value>this.calHapGyukEtDt.value)
        	{
        		this.alert("합격자등록시작일자 합격자등록종료일자보다 클 수 없습니다");
        		return false;
        	}

        	if(this.calChoongWonStDt.value>this.calChoongWonEtDt.value)
        	{
        		this.alert("충원등록시작일자가 충원등록종료일자보다 클 수 없습니다");
        		return false;
        	}

        	if(this.calGojiSeoPrintStDt.value>this.calGojiSeoPrintEtDt.value)
        	{
        		this.alert("고지서출력등록시작일자가 고지서출력등록종료일자보다 클 수 없습니다");
        		return false;
        	}

        	var cnt = 0
        	for(var i=0;i<this.dsMaster.rowcount; i++)
        	{
        		if(this.dsMaster.getColumn(i,"HYEONJAE_MOJIP_YN") == "Y")
        		{
        			cnt++;
        		}
        	}

        	if(cnt > 1)
        	{
        		this.alert("현재 모집중인 항목이 존재합니다.");
        		return false;
        	}

        	var result = this.gfn_confirm( "저장 하시겠습니까?", "저장","", "question" );
        	if(result == 0)
        	{
        		return false;
        	}
        	return true;

        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_Save = function()
        {
            if(!this.fn_PreSave())
            {
                return false;
            }

            var strSvc      = "Save";
            var strUrl      = "/prj/EN/EN01/Save_1010105_M.do";
            var strInDs     = "ds_input=ds_input:a ";
                strInDs    += "dsMaster=dsMaster:u";
            var strOutDs    = "dsMaster=dsMaster";
            var strArg      = "";
            var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);
        };
        /**
         *      기능 : 저장시 후처리
         */
        this.fn_PostSave = function()
        {
            this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
        };

        /**********************************************************************
                09. 팁
        ***********************************************************************/
        this.fn_Tip = function()
        {
        	this.alert("도움말 준비중입니다.");
        };

        /**********************************************************************
                10. 전년도 복사
        ***********************************************************************/
        /**
         * 기능 : 전년도복사 전 실행
         */
        this.fn_PreCopyBeforeData = function()
        {
        	var result = this.gfn_confirm( "전년도 데이터를 복사하시겠습니까?\n(복사 후에는 기존에 추가하였던 데이터가 모두 지워집니다.)", "저장","", "question" );
        	if(result == 0)
            {
        		return false;
            }
            return true;
        };

        /**
         * 기능 : 전년도복사 실행
         */
        this.fn_CopyBeforeData = function()
        {
        	if(!this.fn_PreCopyBeforeData())
            {
                return false;
            }

        	var strSvc      = "CopyBeforeData";
        	var strUrl      = "/prj/EN/EN01/Save_1010105_M_CopyBeforeData.do";
        	var strInDs     = "ds_input=ds_input:a ";
        		strInDs    += "dsMaster=dsMaster:u";
        	var strOutDs    = "dsMaster=dsMaster";
        	var strArg      = "";
        	var GBV_MENUID    = objApp.gv_cutPrgId;
        	if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
        	{
        		strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
        	}
        	var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        	var strASync    = true;             //샏략이나 공백일시에는 ASync=true,싱크시는 false로
        	this.gfn_Transaction(strSvc
        					   , strUrl
        					   , strInDs
        					   , strOutDs
        					   , strArg
        					   , strCallBack
        					   , strASync);

        }

        /**
         *      기능 : 전년도복사시 후처리
         */
        this.fn_PostCopyBeforeData = function()
        {
            this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
        };

        /**********************************************************************
                11. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj,e)
        {
            this.gfn_gridSort(obj,e);
        };

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
            return this.gfn_isUpdate(this.dsMaster);
        };

        // 그리드 변경시
        this.dsMaster_onrowposchanged = function(obj,e)
        {
        	if (obj.getRowType(obj.rowposition) == Dataset.ROWTYPE_INSERT)
        	{
        		this.dsBindableComp.setColumn(0, "bReadonly", "false");
        	}
        	else
        	{
        		this.dsBindableComp.setColumn(0, "bReadonly", "true");
        	}
        };

        /**********************************************************************
                12. 검색창 엔터키 조회
        ***********************************************************************/
        this.divSearch_spnSearchYYYY_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"IPSI_YYYY",obj.value);
        		this.fn_Ret();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onkeydown",this.divSearch_spnSearchYYYY_onkeydown,this);
            this.calSeoRyoJaeChol.addEventHandler("onkeydown",this.divSearch_calSearchSincheongSijakDt_onkeydown,this);
            this.calHapGyukStDt.addEventHandler("onkeydown",this.divSearch_calSearchSincheongSijakDt_onkeydown,this);
            this.calHapGyukEtDt.addEventHandler("onkeydown",this.divSearch_calSearchSincheongJongryoDt_onkeydown,this);
            this.calChoongWonStDt.addEventHandler("onkeydown",this.divSearch_calSearchSincheongSijakDt_onkeydown,this);
            this.calChoongWonEtDt.addEventHandler("onkeydown",this.divSearch_calSearchSincheongJongryoDt_onkeydown,this);
            this.calJeopSooStDt.addEventHandler("onkeydown",this.divSearch_calSearchSincheongSijakDt_onkeydown,this);
            this.calJeopSooEtDt.addEventHandler("onkeydown",this.divSearch_calSearchSincheongJongryoDt_onkeydown,this);
            this.calSearchSincheongSijakDt01.addEventHandler("onkeydown",this.divSearch_calSearchSincheongSijakDt_onkeydown,this);
            this.calGojiSeoPrintStDt.addEventHandler("onkeydown",this.divSearch_calSearchSincheongSijakDt_onkeydown,this);
            this.calGojiSeoPrintEtDt.addEventHandler("onkeydown",this.divSearch_calSearchSincheongJongryoDt_onkeydown,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
        };
        this.loadIncludeScript("EN01_1010105_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
