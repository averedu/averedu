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
            this.set_titletext("학교평가문항관리");
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
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"MUNHANG_NO\" type=\"STRING\" size=\"4\"/><Column id=\"PYEONGGA_GBCD\" type=\"STRING\" size=\"30\"/><Column id=\"MUNHANG_GBCD\" type=\"STRING\" size=\"30\"/><Column id=\"DAPBYEON_YHCD\" type=\"STRING\" size=\"30\"/><Column id=\"GYESAN_YN\" type=\"STRING\" size=\"1\"/><Column id=\"MUNHANG_NAEYONG\" type=\"STRING\" size=\"1000\"/><Column id=\"BIGO\" type=\"STRING\" size=\"500\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"PYEONGGA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"MUNHANG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"DAPBYEON_YHCD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBaseYyyyHakgi", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgi", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPyeonggaGbcd", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMunhangGbcd", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJuGaekgwansikGbcd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchHakgi", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchPyeonggaGbcd", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchMunhangGbcd", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchJuGaekgwansikGbcd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGyesan", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE_NM\">선택</Col></Row><Row><Col id=\"CODE\">Y</Col><Col id=\"CODE_NM\">포함</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"CODE_NM\">미포함</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBindable", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"bEnable\" type=\"STRING\" size=\"256\"/><Column id=\"bReadonly\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"bEnable\">true</Col><Col id=\"bReadonly\">false</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"CNT\" type=\"STRING\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_copyInput", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"NOW_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"AGO_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_13_06_00_00","0",null,"1492","28",null,"27",null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","0","52",null,"22","1455",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("학교평가 문항 리스트");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","167","51",null,"24","1350",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","0","77",null,null,"0","117",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"45\"/><Column size=\"85\"/><Column size=\"69\"/><Column size=\"109\"/><Column size=\"94\"/><Column size=\"594\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" text=\"평가구분\"/><Cell col=\"3\" text=\"문항번호\"/><Cell col=\"4\" text=\"문항구분\"/><Cell col=\"5\" text=\"계산여부\"/><Cell col=\"6\" text=\"문항내용\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"2\" text=\"bind:PYEONGGA_GBCD\" displaytype=\"combotext\" combodataset=\"dsSearchPyeonggaGbcd\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"3\" text=\"bind:MUNHANG_NO\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:MUNHANG_GBCD\" displaytype=\"combotext\" combodataset=\"dsMunhangGbcd\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"5\" text=\"bind:GYESAN_YN\" combodataset=\"dsGyesan\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\" displaytype=\"normal\"/><Cell col=\"6\" text=\"bind:MUNHANG_NAEYONG\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","0",null,"195","22",null,"88",null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("학교평가 항목 상세");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06","0",null,"1492","28",null,"54",null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00","0",null,"1492","28",null,"0",null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06","0",null,"100","28",null,"54",null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("학년도");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","500","42","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","10","69","320","8",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","500","683","100","35",null,null,null,null,null,null,this);
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

            obj = new Static("Static01_01_00_00_00_00","0","710","320","8",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"42","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","16","0","1620","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00","707","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("문항구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","42",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","790","0","10","42",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01_00","26","31","1620","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchMunhangGbcd","800","9","141","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_enable("true");
            obj.set_innerdataset("dsSearchMunhangGbcd");
            obj.set_autoselect("true");
            obj.set_text("");
            obj.set_value("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01","941","0","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","968","9","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("주 객관식 구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","1080","0","10","42",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJuGaekgwansikGbcd","1090","9","91","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_enable("true");
            obj.set_innerdataset("dsSearchJuGaekgwansikGbcd");
            obj.set_autoselect("true");
            obj.set_text("");
            obj.set_value("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01","-3","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("학년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01","80","0","10","42",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","90","9","121","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01_00","227","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("학기");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_00","310","0","10","42",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00","211","0","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgi","320","9","121","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_enable("true");
            obj.set_innerdataset("dsSearchHakgi");
            obj.set_autoselect("true");
            obj.set_text("");
            obj.set_value("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_01","441","0","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_02","467","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("평가구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_02","550","0","10","42",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchPyeonggaTycd","560","9","121","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_enable("true");
            obj.set_innerdataset("dsSearchPyeonggaGbcd");
            obj.set_autoselect("true");
            obj.set_text("");
            obj.set_value("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_02","681","0","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calSearchSincheongSijakDt","84","-132","200","22",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Spin("spnYYYY","102",null,"121","22",null,"57",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00","226",null,"80","28",null,"54",null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("학기");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_00","0",null,"100","28",null,"0",null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboHakgi","309",null,"161","22",null,"57",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_enable("true");
            obj.set_innerdataset("dsHakgi");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_value("1");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00","0",null,"100","28",null,"27",null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("문항번호");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_00_00","679",null,"100","28",null,"54",null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("문항구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtMunhangNo","102",null,"121","22",null,"30",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("point");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtMunhangNaeyong","309",null,"1180","22",null,"30",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cboMunhangGbcd","782",null,"161","22",null,"57",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_enable("true");
            obj.set_innerdataset("dsMunhangGbcd");
            obj.set_autoselect("true");
            obj.set_text("");
            obj.set_value("1");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_00_00_00","947",null,"110","28",null,"54",null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("주/객관식 구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboJugaekgwansikGbcd","1060",null,"161","22",null,"57",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_enable("true");
            obj.set_innerdataset("dsJuGaekgwansikGbcd");
            obj.set_autoselect("true");
            obj.set_text("");
            obj.set_value("1");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_00_00_00_00","1225",null,"100","28",null,"54",null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("계산여부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01","473",null,"80","28",null,"54",null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("평가구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboPyeonggaGbcd","555",null,"121","22",null,"57",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_enable("true");
            obj.set_innerdataset("dsPyeonggaGbcd");
            obj.set_autoselect("true");
            obj.set_text("");
            obj.set_value("1");
            this.addChild(obj.name, obj);

            obj = new Combo("cboGyesanYn","1328",null,"161","22",null,"57",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_enable("true");
            obj.set_innerdataset("dsGyesan");
            obj.set_autoselect("true");
            obj.set_text("");
            obj.set_value("1");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBigo","102",null,"1387","22",null,"3",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_01","226",null,"80","28",null,"27",null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("문항내용");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("학교평가문항관리");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.cboSearchMunhangGbcd","value","ds_input","MUNHANG_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboSearchJuGaekgwansikGbcd","value","ds_input","DAPBYEON_YHCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","calSearchSincheongSijakDt","value","ds_input","SINCHEONG_SIJAK_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","spnYYYY","value","dsMaster","YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","cboHakgi","value","dsMaster","HAKGI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edtMunhangNo","value","dsMaster","MUNHANG_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edtMunhangNaeyong","value","dsMaster","MUNHANG_NAEYONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","cboMunhangGbcd","value","dsMaster","MUNHANG_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","cboJugaekgwansikGbcd","value","dsMaster","DAPBYEON_YHCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divSearch.form.spnSearchYYYY","value","ds_input","YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divSearch.form.cboSearchHakgi","value","ds_input","HAKGI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divSearch.form.cboSearchPyeonggaTycd","value","ds_input","PYEONGGA_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","cboPyeonggaGbcd","value","dsMaster","PYEONGGA_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","cboGyesanYn","value","dsMaster","GYESAN_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edtBigo","value","dsMaster","BIGO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","cboGyesanYn","readonly","dsBindable","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","edtBigo","readonly","dsBindable","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edtMunhangNaeyong","readonly","dsBindable","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("UL05_2020505_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UL05_2020505_M.xfdl(학교평가문항관리)
        * 작 성         일 명: jiback
        * 작 성         일 자: 2022/07/13
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
        this.lvchkColidDs   = "PYEONGGA_GBCD$MUNHANG_GBCD$DAPBYEON_YHCD$MUNHANG_NAEYONG";
        this.lvchkColNameDs = "평가구분$문항구분$주/객관식 구분$문항내용";
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
            var strDs    = "dsSearchHakgi|dsHakgi|dsSearchPyeonggaGbcd|dsPyeonggaGbcd|dsSearchMunhangGbcd|dsMunhangGbcd|dsSearchJuGaekgwansikGbcd|dsJuGaekgwansikGbcd";
            var strLgcd  = "00022|00022|00031|00031|00090|00090|00528|00528";    // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "T|S|T|S|T|S|T|S";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = "";                                      // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId    = "Init";

                // gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
                // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.

            this.gfn_CmmnMultiComboLoad(strDs
                                      , strLgcd
                                      , strComb
                                      , strOptn
                                      , svcId);

        	// 기준연도학기
            strDs    = "dsBaseYyyyHakgi";        // 데이터를 받을 데이터셋리스트     예) "dsBaseYyyyHakgi"
            svcId    = "baseYyyyHakgiInit";
        	var strEopmuGbcd = "US";
        	var strUseYn     = "1";
            // gfn_BaseYyyyHakgiLoad(데이터셋, svcId , 업무구분, 사용구분);
            // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.gfn_BaseYyyyHakgiLoad(strDs
                                      , svcId
                                      , strEopmuGbcd
                                      , strUseYn);

        };

        this.fn_PostformInit = function()
        {
        	this.dsPyeonggaGbcd.filter("REF_1 == '5'");
        	this.dsSearchPyeonggaGbcd.filter("REF_1 == '5'");
        	this.dsPyeonggaGbcd.insertRow(0);
        	this.dsSearchPyeonggaGbcd.insertRow(0);
        	this.dsPyeonggaGbcd.setColumn(0, "CODE_NM", "선택");
        	this.dsSearchPyeonggaGbcd.setColumn(0, "CODE_NM", "전체");
        };

        this.fn_PostBaseYyyyHakgiInit = function()
        {
        	if (this.dsBaseYyyyHakgi.rowcount > 0)
        	{
        		this.ds_input.setColumn(0, "YYYY",  this.dsBaseYyyyHakgi.getColumn(0, "YYYY"));
        		this.ds_input.setColumn(0, "HAKGI", this.dsBaseYyyyHakgi.getColumn(0, "HAKGI"));
        	}
        };

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
                    case "baseYyyyHakgiInit":
        					this.fn_PostBaseYyyyHakgiInit();
        			    break;
                    case "Ret":
                            this.fn_PostRet();
                        break;
                    case "Save":
                            this.fn_PostSave();
                        break;
                    case "Del":
                            this.fn_PostDel();
                        break;
        			case "Copy":
                            this.fn_PostCopy();
                        break;
        			case "AfCopy":
                            this.fn_PostAfCopy();
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
                case "tmp1" :        // 전년도 복사
                         this.fn_Copy();
                    break;
                case "tmp2" :        // 팁
                         this.fn_Tip();
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
            var strUrl      = "/prj/UL/UL05/Retrieve_2020505_M.do";
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
            this.dsMaster.setColumn(nRow, "YYYY", this.ds_input.getColumn(0, "YYYY"));
        	this.dsMaster.setColumn(nRow, "HAKGI", this.ds_input.getColumn(0, "HAKGI"));
        };

        /**********************************************************************
                07. 삭제 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 삭제 버튼 실행
         */
        this.fn_PreDel = function()
        {
            //멀티삭제용도
            if(this.dsMaster.rowcount < 1 || this.dsMaster.findRow("CHK",1) == -1)
            {
                this.gfn_alert("삭제할 데이터가 없습니다.","삭제정보","","warning");
                return false;
            }
            var result = this.gfn_confirm( "현재선택행을 삭제하시겠습니까?", "삭제정보","","question" );

            if(result == 0)
            {
                return false;
            }

            //다중삭제 용도
            this.dsMaster.set_enableevent(false);
            for(var i=this.dsMaster.rowcount-1;i>-1;i--)
            {
                if(this.dsMaster.getColumn(i,"CHK") == "1" || this.dsMaster.getRowType(i) == 2)
                {
                    this.dsMaster.deleteRow(i);
                }
            }
            this.dsMaster.set_enableevent(true);

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
            var strUrl      = "/prj/UL/UL05/Delete_2020505_M.do";
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
            if(this.dsMaster.rowcount > 0)
            {
                for(var i=0;i<this.dsMaster.rowcount; i++)
                {
                    if(this.dsMaster.getColumn(i,"CHK") == "0")
                    {
                        continue;
                    }
                    this.dsMaster.setColumn(i,"CHK","0");
                }
            }

            if(!this.gfn_isUpdate(this.dsMaster))
            {
                this.gfn_alert("변경된 이력이 없습니다.","저장정보","","question");
                return false;
            }

            // 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
            var chkFocusFlg = false;
            var result      = this.gfn_cmmnChkEssentialItem(this.dsMaster, this.lvchkColidDs, this.lvchkColNameDs, "", chkFocusFlg, this);

            if (result[0] != "success")
            {
                this.gfn_alert(result[0],"저장정보","","question");
                this.dsMaster.set_rowposition(result[1]); //데이터셋 변경
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
            var strUrl      = "/prj/UL/UL05/Save_2020505_M.do";
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
                09. 전년도 복사
        ***********************************************************************/
        this.fn_PreCopy = function()
        {
        	this.ds_copyInput.setColumn(0, "NOW_YYYY", this.ds_input.getColumn(0, "YYYY"));
        	this.ds_copyInput.setColumn(0, "AGO_YYYY", this.ds_copyInput.getColumn(0, "NOW_YYYY") - 1);
        	this.ds_copyInput.setColumn(0, "HAKGI", this.ds_input.getColumn(0, "HAKGI"));
        	this.ds_copyInput.setColumn(0, "HAKGI_NM", this.divSearch.form.cboSearchHakgi.text);

        	if (this.ds_copyInput.getColumn(0, "HAKGI_NM") == "전체")
        	{
        		this.ds_copyInput.setColumn(0, "HAKGI_NM", "전체 학기");
        	}

        	var result = this.gfn_confirm(this.ds_copyInput.getColumn(0, "AGO_YYYY") + "년도의 " + this.ds_copyInput.getColumn(0, "HAKGI_NM") + " 학교평가문항을 " + this.ds_copyInput.getColumn(0, "NOW_YYYY") + "년도에 복사하시겠습니까?", "저장","", "question" );
        	if(result == 0)
        	{
        		return false;
        	}

        	return true;
        };

        this.fn_Copy = function()
        {
            if(!this.fn_PreCopy())
            {
                return false;
            }
            var strSvc      = "Copy";
            var strUrl      = "/prj/UL/UL05/Copy_2020505_M.do";
            var strInDs     = "ds_input=ds_input:a ";
            var strOutDs    = "dsCopy=dsCopy";
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

        this.fn_PreAfCopy = function()
        {
        	if (this.dsCopy.getColumn(0, "CNT") > 0)
        	{
        		var result = this.gfn_confirm(this.ds_copyInput.getColumn(0, "NOW_YYYY") + "년도 " + this.ds_copyInput.getColumn(0, "HAKGI_NM") + "에 이미 학교평가문항이 존재합니다.\n삭제 후 복사하시겠습니까?\n(확인을 누르시면 해당 년도/학기의 기존 데이터는 완전히 삭제됩니다.)", "저장","", "question" );
        		if(result == 0)
        		{
        			return false;
        		}
        	}

        	return true;
        };

        this.fn_PostCopy = function()
        {
            if(!this.fn_PreAfCopy())
            {
                return false;
            }
            var strSvc      = "AfCopy";
            var strUrl      = "/prj/UL/UL05/AfCopy_2020505_M.do";
            var strInDs     = "ds_copyInput=ds_copyInput:a ";
            var strOutDs    = "";
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

        /**********************************************************************
                10. 팁
        ***********************************************************************/
        this.fn_Tip = function()
        {
        	this.alert("도움말 준비중입니다.");
        };

        /**********************************************************************
                14. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 체크
         */
        this.grdMaster_onheadclick = function(obj,e)
        {
            if(e.cell == this.grdMaster.getBindCellIndex("body","CHK"))
            {
                this.gfn_checkAll(obj, e);
            }
        };

        /**
         *      그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj,e)
        {
            if(e.cell != this.grdMaster.getBindCellIndex("body","CHK") && e.cell != 1)
            {
                this.gfn_gridSort(obj,e);
            }
        };

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
            return this.gfn_isUpdate(this.dsMaster);
        };

        // 행 변경시
        this.dsMaster_onrowposchanged = function(obj,e)
        {
        	var rowType = this.dsMaster.getRowType(this.dsMaster.rowposition);

        	// 신규
        	if(rowType =='2')
        	{
        		this.dsBindable.setColumn(0, "bReadonly", "false");
        		this.dsBindable.setColumn(0, "bEnable",	"true");
        	}
        	else
        	{
        		this.dsBindable.setColumn(0, "bReadonly", "true");
        		this.dsBindable.setColumn(0, "bEnable",	"false");
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
            this.stc_09_00_00.addEventHandler("onclick",this.stc_09_00_00_onclick,this);
            this.divSearch.form.stc_01_00.addEventHandler("onclick",this.divSearch_stc_01_00_onclick,this);
            this.divSearch.form.stc_01_00_00.addEventHandler("onclick",this.divSearch_stc_01_00_onclick,this);
            this.divSearch.form.stc_01_00_01.addEventHandler("onclick",this.divSearch_stc_01_00_onclick,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onkeydown",this.divSearch_spnSearchYYYY_onkeydown,this);
            this.divSearch.form.stc_01_00_01_00.addEventHandler("onclick",this.divSearch_stc_01_00_onclick,this);
            this.divSearch.form.stc_01_00_02.addEventHandler("onclick",this.divSearch_stc_01_00_onclick,this);
            this.calSearchSincheongSijakDt.addEventHandler("onkeydown",this.div_00_calSearchSincheongSijakDt_onkeydown,this);
            this.spnYYYY.addEventHandler("onkeydown",this.divSearch_spnSearchYYYY_onkeydown,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsMaster.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
        };
        this.loadIncludeScript("UL05_2020505_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
