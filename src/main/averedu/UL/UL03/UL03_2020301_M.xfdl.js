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
            this.set_titletext("교육과정관리");
            this.set_color("blue");
            this.set_cssclass("type02");
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
            obj._setContents("<ColumnInfo><ConstColumn id=\"A\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"B\" type=\"STRING\" size=\"30\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"GYOGWAMOK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"ISU_HAKNYEON_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"GYOGWAMOK_NM\" type=\"STRING\" size=\"200\"/><Column id=\"GYOGWAMOK_ENM\" type=\"STRING\" size=\"200\"/><Column id=\"GYOGWAMOK_GAEYO\" type=\"STRING\" size=\"1000\"/><Column id=\"GYOGWAMOK_GAEYO_ENM\" type=\"STRING\" size=\"1000\"/><Column id=\"HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"IRON_TM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SILSEUP_TM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TONGHAP_TM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"IRON_SISU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SILSEUP_SISU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TONGHAP_SISU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SINCHEONGJA_ID\" type=\"STRING\" size=\"30\"/><Column id=\"SEUNGINJA_ID\" type=\"STRING\" size=\"30\"/><Column id=\"SEUNGIN_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"GAESEOL_BUNBAN_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BIGO\" type=\"STRING\" size=\"1000\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/><Column id=\"MODIFY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJuya", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSeungIn", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"ISU_HAKNYEON_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SEUNGIN_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"GYOGWAMOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JUGWAN_DAEHAK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUGWAN_HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUGWAN_JEONGONG_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgi", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchHaknyeon", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchJuya", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHaknyeon", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJeongong", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgwa", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGyeyeol", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input1", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GYOGWAMOK_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDept", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGyogwamok", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_iljeongInput", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ILJEONG_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsIljeong", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ILJEONG_CD\" type=\"STRING\" size=\"4\"/><Column id=\"ILJEONG_NM\" type=\"STRING\" size=\"10\"/><Column id=\"FR_DT\" type=\"STRING\" size=\"10\"/><Column id=\"FR_TM\" type=\"STRING\" size=\"10\"/><Column id=\"TO_DT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TO_TM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CURR_ILJEONG_YN\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHUGA_NAEYONG\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"YONGDO_COLUMN1\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"YONGDO_COLUMN2\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"YONGDO_COLUMN3\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"YONGDO_COLUMN4\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBaseYyyyHakgi", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"71","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01","915","9","100","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("과목명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00","0","9","100","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("교육과정년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","110","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","230","9","90","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("학년");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHaknyeon","330","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsSearchHaknyeon");
            obj.set_enable("true");
            obj.set_text("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_02","0","37","100","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("계열");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_03","230","37","90","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("학과");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00","450","9","90","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("주야");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJuya","550","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsSearchJuya");
            obj.set_text("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01","450","37","90","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("전공");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJeongong","550","37","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_innerdataset("dsJeongong");
            obj.set_text("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00_00","670","9","115","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("승인구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchSeungIn","795","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsSeungIn");
            obj.set_text("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","70",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","0","0","1640","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","100","0","10","70",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01","230","-1","56","70",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","320","0","10","70",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00","450","0","56","70",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","540","0","10","70",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00_00","670","0","56","70",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00","785","0","10","70",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchGwamok","1025","9","200","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_maxlength("10");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00","1015","0","10","70",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_02","0","33","1640","5",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 6pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","0","61","1640","9",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00_00","915","0","56","70",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","1","74","110","31",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("교육과정 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","98","1640","8",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","0","106","950",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsMaster");
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"200\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"70\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" rowspan=\"2\" displaytype=\"normal\" text=\"No\"/><Cell col=\"2\" rowspan=\"2\" disptype=\"normal\" text=\"학년도\"/><Cell col=\"3\" rowspan=\"2\" disptype=\"normal\" text=\"이수학년\"/><Cell col=\"4\" rowspan=\"2\" text=\"학기\"/><Cell col=\"5\" rowspan=\"2\" text=\"학과/전공\"/><Cell col=\"6\" rowspan=\"2\" text=\"주야구분\"/><Cell col=\"7\" rowspan=\"2\" text=\"과목코드\"/><Cell col=\"8\" rowspan=\"2\" text=\"과목명(한글)\"/><Cell col=\"9\" rowspan=\"2\" text=\"학점\"/><Cell col=\"10\" colspan=\"3\" text=\"시수\"/><Cell col=\"13\" rowspan=\"2\" text=\"개설&#13;&#10;분반수\"/><Cell col=\"14\" rowspan=\"2\" text=\"신청구분\"/><Cell row=\"1\" col=\"10\" text=\"이론\"/><Cell row=\"1\" col=\"11\" text=\"실습\"/><Cell row=\"1\" col=\"12\" text=\"소계\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"normal\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:YYYY\" editmaxlength=\"4\"/><Cell col=\"3\" displaytype=\"combotext\" edittype=\"none\" textAlign=\"center\" text=\"bind:ISU_HAKNYEON_CD\" editmaxlength=\"10\" comboautoselect=\"true\" combodataset=\"dsHaknyeon\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"4\" text=\"bind:HAKGI\" displaytype=\"combotext\" comboautoselect=\"true\" combodataset=\"dsHakgi\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" textAlign=\"center\"/><Cell col=\"5\" displaytype=\"text\" text=\"bind:HAKGWA_NM\" textAlign=\"left\"/><Cell col=\"6\" displaytype=\"combotext\" text=\"bind:JUYA_GBCD\" comboautoselect=\"true\" combodataset=\"dsJuya\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" textAlign=\"center\"/><Cell col=\"7\" displaytype=\"text\" text=\"bind:GYOGWAMOK_CD\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:GYOGWAMOK_NM\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"9\" displaytype=\"text\" text=\"bind:HAKJEOM\" textAlign=\"right\"/><Cell col=\"10\" displaytype=\"text\" text=\"bind:IRON_SISU\" textAlign=\"right\"/><Cell col=\"11\" displaytype=\"text\" text=\"bind:SILSEUP_SISU\" textAlign=\"right\"/><Cell col=\"12\" displaytype=\"text\" text=\"bind:TONGHAP_SISU\" textAlign=\"right\"/><Cell col=\"13\" displaytype=\"text\" comboautoselect=\"false\" text=\"bind:GAESEOL_BUNBAN_CNT\" textAlign=\"right\"/><Cell col=\"14\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" combodataset=\"dsSeungIn\" text=\"bind:SEUNGIN_GBCD\" displaytype=\"combotext\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","520","71","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","113","77","233","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01","951","71","30",null,null,"0",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("30");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","981","74","150","31",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("교육과정 상세정보");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_19_00","980","106","660","28",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_20_00","980","106","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("교육과정년도");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("stc_20_00_00","1200","106","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("주야구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_20_00_00_00","1420","106","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("이수학년");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_19_00_00","980","133","660","28",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_20_00_01","980","133","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("과목명");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("stc_20_00_00_00_00","1420","133","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("학기");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_19_00_00_00","980","160","660","28",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_20_00_01_00","980","160","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("과목명(영문)");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("stc_20_00_00_00_00_00","1420","160","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("개설분반(수)");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_19_00_01","980","187","660","28",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_20_00_02","980","187","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("학과/전공");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("stc_19_00_01_00","980","214","660","43",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_20_00_02_00","980","214","100","43",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("학점");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("stc_20_00_00_01_00","1200","214","100","43",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("시수");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_19_00_01_00_00","980","256","660","180",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_20_00_02_00_00","980","256","100","180",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("교과목 개요\r\n(한글)");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("stc_19_00_01_00_00_00","980","435","660","180",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_20_00_02_00_00_00","980","435","100","180",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("교과목 개요\r\n(영문)");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHakjeom","1082","217","115","22",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_maxlength("5");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSisuIron","1303","218","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_maxlength("5");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","1330","219","13","20",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("-");
            obj.set_textAlign("center");
            obj.set_font("8pt Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSisuSilseup","1347","218","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_maxlength("5");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00","1374","219","13","20",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("-");
            obj.set_textAlign("center");
            obj.set_font("8pt Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSisuSogye","1391","218","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_maxlength("5");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","1304","242","110","15",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("이론   -   실습   -   소계");
            obj.set_cssclass("sta_label_title03");
            obj.set_textAlign("center");
            obj.set_verticalAlign("top");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEngGwamok","1082","163","335","22",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_maxlength("100");
            this.addChild(obj.name, obj);

            obj = new Spin("spnYYYY","1082","109","115","22",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_cssclass("point");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.addChild(obj.name, obj);

            obj = new Combo("cboJuya","1302","109","115","22",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsJuya");
            obj.set_cssclass("point");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cboIsuHaknyeon","1522","109","115","22",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsHaknyeon");
            obj.set_cssclass("point");
            obj.set_text("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cboHakgi","1522","136","115","22",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsHakgi");
            obj.set_cssclass("point");
            obj.set_text("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGaesolBunbanCnt","1522","163","115","22",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_maxlength("100");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHakgwacd","1082","190","160","22",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_enable("false");
            obj.set_cssclass("point");
            obj.set_maxlength("3");
            this.addChild(obj.name, obj);

            obj = new Button("btnHakgwa","1248","190","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_cssclass("btn_WF_PopSrch");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHakgwaNm","1277","190","140","22",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_enable("true");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGyogwamokNm","1277","136","140","22",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_enable("true");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Button("btnGyogwamok","1248","136","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_cssclass("btn_WF_PopSrch");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGyogwamokCd","1082","136","160","22",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_enable("false");
            obj.set_cssclass("point");
            obj.set_maxlength("3");
            this.addChild(obj.name, obj);

            obj = new Static("stc_19_00_01_00_00_00_00","980","614","660",null,null,"0",null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_20_00_02_00_00_00_00","980","614","100",null,null,"0",null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgwa","331","38","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_innerdataset("dsHakgwa");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSearchGyeyeol","111","38","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_innerdataset("dsGyeyeol");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new TextArea("textGyoGwamokGaeyo","1082","259","555","173",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_maxlength("333");
            this.addChild(obj.name, obj);

            obj = new TextArea("textEngGyoGwamokGaeyo","1082","438","555","173",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_maxlength("333");
            this.addChild(obj.name, obj);

            obj = new TextArea("textBigo","1082","617","555",null,null,"3",null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_maxlength("333");
            this.addChild(obj.name, obj);

            obj = new Button("btnSinChung","1388","76","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("신청");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnSeungin","1451","76","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("승인");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnBanryeo","1514","76","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("반려");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnBoksa","1577","76","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("복사");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("교육과정관리");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.spnSearchYYYY","value","ds_input","YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboSearchHaknyeon","value","ds_input","ISU_HAKNYEON_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboSearchJuya","value","ds_input","JUYA_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboSearchSeungIn","value","ds_input","SEUNGIN_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.edtSearchGwamok","value","ds_input","GYOGWAMOK_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","cboSearchGyeyeol","value","ds_input","JUGWAN_DAEHAK_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","cboSearchHakgwa","value","ds_input","JUGWAN_HAKGWA_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","spnYYYY","value","dsMaster","YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","cboJuya","value","dsMaster","JUYA_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","cboIsuHaknyeon","value","dsMaster","ISU_HAKNYEON_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","edtGyogwamokCd","value","dsMaster","GYOGWAMOK_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","edtGyogwamokNm","value","dsMaster","GYOGWAMOK_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","cboHakgi","value","dsMaster","HAKGI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","edtEngGwamok","value","dsMaster","GYOGWAMOK_ENM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","edtGaesolBunbanCnt","value","dsMaster","GAESEOL_BUNBAN_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","edtHakgwacd","value","dsMaster","HAKGWA_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","edtHakgwaNm","value","dsMaster","HAKGWA_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","edtHakjeom","value","dsMaster","HAKJEOM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","edtSisuIron","value","dsMaster","IRON_SISU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","edtSisuSilseup","value","dsMaster","SILSEUP_SISU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","edtSisuSogye","value","dsMaster","TONGHAP_SISU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","textGyoGwamokGaeyo","value","dsMaster","GYOGWAMOK_GAEYO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","textEngGyoGwamokGaeyo","value","dsMaster","GYOGWAMOK_GAEYO_ENM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","textBigo","value","dsMaster","BIGO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divSearch.form.cboSearchJeongong","value","ds_input","JUGWAN_JEONGONG_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
            this._addPreloadList("data","","dsIljeong");
        };
        
        // User Script
        this.registerScript("UL03_2020301_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UL03_2020301_M01.xfdl(교육과정 관리)
        * 작 성         일 명: 정진호
        * 작 성         일 자: 2022/07/12
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
        this.lvchkColidDs   = "YYYY$JUYA_GBCD$ISU_HAKNYEON_CD$GYOGWAMOK_NM$HAKGI$GAESEOL_BUNBAN_CNT$HAKGWA_NM$HAKJEOM"; // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs = "교육과정년도$주야구분$이수학년$과목명$학기$개설분반(수)$학과/전공$학점";

        /**********************************************************************
                03. 폼 로드 및 닫을때(폼이 포커스 갈때)
        ***********************************************************************/
        /**
         * 기능 : 폼 로드 완료후 초기값 Setting
         */
        this.form_onload = function(obj, e) {
            //폼에 공통으로 로드시 사용하는 함수.
            this.gfn_formOnload(obj.e);
            //사용자 화면  초기화 함수
            this.fn_formInit();
        };

        /**********************************************************************
                04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        this.fn_formInit = function() {
        	// 기준연도학기
            var strDs    		= "dsBaseYyyyHakgi"; // 데이터를 받을 데이터셋리스트 예) "dsBaseYyyyHakgi"
            var svcId    		= "baseYyyyHakgiInit";
        	var strEopmuGbcd 	= "UL";
        	var strUseYn     	= "1";
            // gfn_BaseYyyyHakgiLoad(데이터셋, svcId , 업무구분, 사용구분);
            // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.gfn_BaseYyyyHakgiLoad(strDs, svcId, strEopmuGbcd, strUseYn);

        	// 데이터를 받을 데이터셋리스트 예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strDs    = "dsSearchHaknyeon|dsSearchJuya|dsSeungIn|dsJuya|dsHaknyeon|dsHakgi";
        	// 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strLgcd  = "00060|00003|00520|00003|00060|00022";
        	// 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strComb  = "T|T|T|X|X|X";
        	// 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var strOptn  = "";
            var svcId    = "Init";
        	// gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
        	// 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.gfn_CmmnMultiComboLoad(strDs, strLgcd, strComb, strOptn, svcId);

        	strDs       	= "dsGyeyeol";
        	strComb     	= "T";
        	svcId       	= "gyeyeolInit";
        	strUseYn    	= "1";	// 사용 여부
        	strJojikGbcd	= "20"; // 조직구분 10.행정조직 20.학사조직 30.입시조직
        	strDaehakCd		= "";
        	// gfn_GyeyeolComboLoad(데이터셋, 콤보 옵션)
        	// 계열콤보
        	this.gfn_GyeyeolComboLoad(this.cboSearchGyeyeol, strComb, svcId, strUseYn, strJojikGbcd, strDaehakCd , objApp.gv_cutPrgId);
        };

        this.fn_PostformInit = function() {
        	this.fn_retIljeong();
        };

        this.fn_PostBaseYyyyHakgiInit = function() {
        	if (this.dsBaseYyyyHakgi.rowcount > 0) {
        		this.ds_input.setColumn(0, "YYYY", this.dsBaseYyyyHakgi.getColumn(0, "YYYY"));
        	}
        };

        // 교육과정입력기간 일정 체크
        this.fn_retIljeong = function() {
        	this.ds_iljeongInput.setColumn(0, "DEPT_CD", objApp.gds_userInfoDb.getColumn(0, "DEPT"));
        	this.ds_iljeongInput.setColumn(0, "ILJEONG_CD", "017");

            var strSvc      = "Iljeong";
            var strUrl      = "/prj/UR/UR_COMMON/Retrieve_COMMON_M_Iljeong.do";
            var strInDs     = "ds_iljeongInput=ds_iljeongInput";
            var strOutDs    = "dsIljeong=dsIljeong";
            var strArg      = "";
            var GBV_MENUID	= objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";	//공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        }

        this.fn_PostGyeyeolInt = function()
        {
        	this.cboSearchGyeyeol.set_index(0);

        	// 계열 onitemchanged 호출
        	let info = new nexacro.ItemChangeEventInfo;
        	this.cboSearchGyeyeol_onitemchanged(this.cboSearchGyeyeol, info);
        };

        this.fn_PostHakgwaInit = function()
        {
        	this.cboSearchHakgwa.set_index(0);

        	// 학과 onitemchanged 호출
        	let info = new nexacro.ItemChangeEventInfo;
        	this.cboSearchHakgwa_onitemchanged(this.cboSearchHakgwa, info);
        };

        this.fn_PostJeongongInit = function()
        {
        	this.divSearch.form.cboSearchJeongong.set_index(0);
        };

        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {

            this.gfn_clearSortAll(this.grdMaster);
            if(nErrorCode != 0) {
                this.gfn_alert(sErrorMsg,"에러정보","","error");
                return false;
            } else {
                /*sSvcId (Transaction Id)*/
                switch(sSvcId) {
                    case "Init":
                            this.fn_PostformInit();
                        break;
                    case "singleInit":
                            this.fn_PostSingleInt();
                        break;
        			// 조회
                    case "Ret":
                            this.fn_PostRet();
                        break;
        			// 저장
                    case "Save":
                            this.fn_PostSave();
                        break;
        			// 신규
                    case "New":
                            this.fn_PostNew();
                        break;
        			// 삭제
                    case "Del":
                            this.fn_PostDel();
                        break;
        			// 검색조건 계열
        			case "gyeyeolInit":
        			        this.fn_PostGyeyeolInt();
        			    break;
        			// 검색조건 학과
        			case "hakgwaInit":
        			        this.fn_PostHakgwaInit();
        			    break;
        			// 검색조건 전공
        			case "jeongongInit":
        			        this.fn_PostJeongongInit();
        			    break;
        			case "baseYyyyHakgiInit":
        					this.fn_PostBaseYyyyHakgiInit();
        			    break;
                    default:
                        break;
                }
            }
        };

        //Popup callback영역
        this.fn_popupCallback = function(strId, strVal)
        {
        	switch(strId) {
        		case "hakgwa" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE") {
        					this.dsMaster.set_enableevent(false);
        		            this.dsMaster.setColumn(this.dsMaster.rowposition, "HAKGWA_CD", sRtn[0]);
        		            this.dsMaster.setColumn(this.dsMaster.rowposition, "HAKGWA_NM", sRtn[1]);
        					this.dsMaster.set_enableevent(true);
        				}
        			break;
        		case "gyogwamok" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE") {
        					this.dsMaster.set_enableevent(false);
        		            this.dsMaster.setColumn(this.dsMaster.rowposition, "GYOGWAMOK_CD", sRtn[0]);
        		            this.dsMaster.setColumn(this.dsMaster.rowposition, "GYOGWAMOK_NM", sRtn[1]);
        					this.dsMaster.set_enableevent(true);
        				}
        			break;
        		case "boksa" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE") {
        					this.ds_input.setColumn(0, "YYYY", sRtn[0])
        					this.fn_Ret();
        				}
        			break;
        		default:
                    break;
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
            switch(sBtn) {
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
                default :
                    break;
            };
        };

        /**********************************************************************
                05. 조회 함수 선언(마스터 함수)
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreRet = function()
        {
            // 조회조건 셋팅
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
            var strUrl      = "/prj/UL/UL03/Retrieve_2020301_MList.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsMaster=dsMaster";
            var strArg      = "";
            var GBV_MENUID  = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
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
         * 기능 : 추가 전 실행(기본체크사항)
         */
        this.fn_PreNew = function()
        {
        	return true;
        };

        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_New = function()
        {
        	if (!this.fn_ChkIljeong()) {
        		return;
        	}

            if(!this.fn_PreNew()) {
                return false;
            }

            var nRow = this.dsMaster.addRow();
        	var userGb = this.gfn_isNull(objApp.gds_userInfoDb.getColumn(0, "USER_GBCD"))
        	// 사용자: 관리자 - 03 그외 - 02
        	this.dsMaster.setColumn(nRow,"SEUNGIN_GBCD",userGb ? "03" : "02");
        	// SPIN의 년도 값을 세팅
        	this.dsMaster.setColumn(this.dsMaster.rowposition, "YYYY", this.ds_input.getColumn(0, "YYYY"));

        	// 시수 0 설정
        	this.edtSisuIron.set_enable(true);
        	this.edtSisuSilseup.set_enable(true);
        	this.edtSisuIron.set_value("0");
        	this.edtSisuSilseup.set_value("0");
        	this.edtSisuSogye.set_value("0");

        	// 검색조건 값으로 설정
        	this.cboIsuHaknyeon.set_value(this.cboSearchHaknyeon.value);
        	this.cboJuya.set_value(this.cboSearchJuya.value);
        };
        /**
         * 기능 : 처리 후 실행
         */
        this.fn_PostNew = function()
        {

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

            //개별삭제시
            //this.dsMaster.deleteRow(this.dsMaster.rowposition);
            return true;
        };

        /**
         * 기능 : Row 삭제 또는 Transaction 삭제 처리
         */
        this.fn_Del = function()
        {
        	if (!this.fn_ChkIljeong()) {
        		return;
        	}

            if(!this.fn_PreDel())
            {
                return false;
            }

            var strSvc      = "Del";
            var strUrl      = "/prj/UL/UL03/Delete_2020301_MList.do";
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
            var chkFocusFlg = true;
            var result      = this.gfn_cmmnChkEssentialItem(this.dsMaster, this.lvchkColidDs, this.lvchkColNameDs, this.grdMaster, chkFocusFlg, this);

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
        	if (!this.fn_ChkIljeong()) {
        		return;
        	}

            if(!this.fn_PreSave())
            {
                return false;
            }

            var strSvc      = "Save";
            var strUrl      = "/prj/UL/UL03/Save_2020301_MList.do";
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
            this.gfn_getRowCount(this.staRowCnt, this.dsMaster);
        };

        /**********************************************************************
                09. 초기화
        ***********************************************************************/
        /**********************************************************************
                10. 출력 함수 선언
        ***********************************************************************/
        /**********************************************************************
                11. ExcelDnwn 엑셀로 출력
        ***********************************************************************/
        /**********************************************************************
                12. 팝업
        ***********************************************************************/
        this.fn_setCallDeptPopup = function(strSearchValue)
        {
        	this.dsDept.clearData();

        	this.ds_input1.setColumn(0, "DEPT_CD_NM", strSearchValue);

        	if(!this.gfn_isNull(strSearchValue))
        	{
        		var strSvc 		= "Search";
        		var strUrl      = "/prj/com/Retrieve_P01.do";
        		var strInDs  	= "ds_input=ds_input1";
        		var strOutDs 	= "dsDept=dsMaster";
        		var strArg 		= "";
        		var GBV_MENUID    = objApp.gv_cutPrgId;
        		if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
        		{
        		  strArg = "GBV_MENUID=" + GBV_MENUID + " " + strArg;
        		}
        		var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        		var strASync    = false;			//샏략이나 공백일시에는 ASync=true,싱크시는 false로
        		this.gfn_Transaction( strSvc
        							, strUrl
        							, strInDs
        							, strOutDs
        							, strArg
        							, strCallBack
        							, strASync);
        	}

        	if(this.dsDept.rowcount == 1)
        	{
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "HAKGWA_CD", this.dsDept.getColumn(0,"DEPT_CD"));
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "HAKGWA_NM", this.dsDept.getColumn(0,"DEPT_NM"));
        	} else
        	{
        		var oArg = {deptCdNm:strSearchValue, jojikGbcd:'20', useYn:'1', deptLv:'3'};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";
        		this.gfn_openPopup( "hakgwa","com::COMM_P01.xfdl",oArg,sPopupCallBack,oOption);
        	}
        };

        this.fn_setCallGyogwamokPopup = function(strSearchValue)
        {
        	this.dsGyogwamok.clearData();

        	this.ds_input1.setColumn(0, "GYOGWAMOK_CD_NM", strSearchValue);

        	if(!this.gfn_isNull(strSearchValue))
        	{
        		var strSvc 		= "Search";
        		var strUrl      = "/prj/com/Retrieve_P03.do";
        		var strInDs  	= "ds_input=ds_input1";
        		var strOutDs 	= "dsGyogwamok=dsMaster";
        		var strArg 		= "";
        		var GBV_MENUID    = objApp.gv_cutPrgId;
        		if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
        		{
        		  strArg = "GBV_MENUID=" + GBV_MENUID + " " + strArg;
        		}
        		var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        		var strASync    = false;			//샏략이나 공백일시에는 ASync=true,싱크시는 false로
        		this.gfn_Transaction( strSvc
        							, strUrl
        							, strInDs
        							, strOutDs
        							, strArg
        							, strCallBack
        							, strASync);
        	}

        	if(this.dsGyogwamok.rowcount == 1)
        	{
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "GYOGWAMOK_CD", this.dsGyogwamok.getColumn(0,"GYOGWAMOK_CD"));
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "GYOGWAMOK_NM", this.dsGyogwamok.getColumn(0,"GYOGWAMOK_NM"));
        	} else
        	{
        		var oArg = {gyogwamokCdNm:strSearchValue};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";
        		this.gfn_openPopup( "gyogwamok","com::COMM_P03.xfdl",oArg,sPopupCallBack,oOption);
        	}
        };

        /**********************************************************************
                13. Get, Set Method
        ***********************************************************************/
        this.fn_ChkIljeong = function() {
        	// 관리자가 아니면 공통일정기간 체크
        	if (!this.gfn_isNull(objApp.gds_userInfoDb.getColumn(0, "USER_GBCD"))) {
        		var chk = this.dsIljeong.getColumn("CURR_ILJEONG_YN");
        		if (chk != 'Y') {
        			this.alert("현재 교육과정입력기간이 아닙니다.");
        			return false;
        		}
        	}

        	return true;
        }

        this.updateSeunginStatus = function(text, stat) {
        	// 선택한 데이터가 없을 경우
        	if(this.dsMaster.rowcount < 1 || this.dsMaster.findRow("CHK", 1) == -1) {
        		this.gfn_alert(text + "할 데이터를 선택해주세요.", "승인정보", "", "warning");
        		return false;
        	}

        	for (var i = 0; i < this.dsMaster.rowcount; i++) {
        		// 체크된 데이터
        		if(this.dsMaster.getColumn(i, "CHK") == "1") {
        			var chk_cnt = 0;
        			var modify = this.dsMaster.getColumn(i, "MODIFY");
        			if (modify == "1") {
        				chk_cnt++;
        			}

        			if(chk_cnt > 0) {
        				this.alert("신규 또는 수정된 항목이 존재하여 " + text + "처리할 수 없습니다.");
        				return;
        			}

        			// 승인상태가 반려일 경우
        			if(this.dsMaster.getColumn(i, "SEUNGIN_SANGTAE") == stat) {
        				this.dsMaster.set_rowposition(i);
        				this.gfn_alert("이미 " + text + "한 항목입니다.", "승인정보", "", "warning");
        				return false;
        			}
        		}
        	} // for

        	var result = this.gfn_confirm( "현재 선택행을 " + text + "하시겠습니까?", "승인정보", "", "question" );
        	if(result == 0) {
        		return false;
        	}

        	for (var i = 0; i < this.dsMaster.rowcount; i++) {
        		// 체크된 데이터
        		if(this.dsMaster.getColumn(i,"CHK") == "1") {
        			this.dsMaster.setColumn(i, "SEUNGIN_GBCD", stat);
        			this.dsMaster.setColumn(i, "SEUNGINJA_ID", objApp.gds_userInfoDb.getColumn(0, "USER_ID"));
        		}
        	}

            var strSvc      = "Save";
            var strUrl      = "/prj/UL/UL03/Save_2020301_MList.do";
            var strInDs     = "ds_input=ds_input:a ";
                strInDs    += "dsMaster=dsMaster:u";
            var strOutDs    = "dsMaster=dsMaster";
            var strArg      = "";
            var GBV_MENUID	= objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID))) {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        }

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
            //return this.gfn_isUpdate(this.dsMaster);
        };

        /**
          * 학과 필터 적용
         **/
        this.cboSearchGyeyeol_onitemchanged = function(obj,e)
        {
        	// gfn_HakgwaComboLoad(데이터셋, 콤보 옵션)
        	// 학과콤보
        	var strComb     	= "T";
        	var svcId       	= "hakgwaInit";
        	var strUseYn    	= "1";	// 사용 여부
        	var strJojikGbcd	= "20";	// 조직구분 10.행정조직   20.학사조직   30.입시조직
        	var strUpDeptCd 	= "";
        	if(!this.gfn_isNull(e.postvalue)) {
        		strUpDeptCd    += e.postvalue;
        	}
        	this.gfn_HakgwaComboLoad(this.cboSearchHakgwa, strComb, svcId, strUseYn, strJojikGbcd, strUpDeptCd, objApp.gv_cutPrgId);
        };

        /**
          * 전공 필터 적용
         **/
        this.cboSearchHakgwa_onitemchanged = function(obj,e)
        {
        	// gfn_JeongongComboLoad(데이터셋, 콤보 옵션)
        	// 전공콤보
        	var strComb     	= "T";
        	var svcId       	= "jeongongInit";
        	var strUseYn    	= "1";	// 사용 여부
        	var strJojikGbcd	= "20";	// 조직구분 - 10.행정조직 20.학사조직 30.입시조직
        	var strUpDeptCd 	= "";
        	if(!this.gfn_isNull(e.postvalue)) {
        		strUpDeptCd    += e.postvalue;
        	}
        	this.gfn_JeongongComboLoad(this.divSearch.form.cboSearchJeongong, strComb, svcId, strUseYn, strJojikGbcd, strUpDeptCd, objApp.gv_cutPrgId);
        };

        this.btnHakgwa_onclick = function(obj,e)
        {
        	var deptCdNm = this.edtHakgwaNm.value;
        	this.fn_setCallDeptPopup(deptCdNm);
        };

        this.btnGyogwamok_onclick = function(obj,e)
        {
        	var gyogwamokNm = this.edtGyogwamokNm.value;
        	this.fn_setCallGyogwamokPopup(gyogwamokNm);
        };

        this.dsMaster_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid != "CHK") {
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "MODIFY", "1");
        	}

            // 팝업 명 삭제 시 코드 초기화
        	if (e.columnid == "HAKGWA_NM") {
        	   if (this.gfn_isNull(e.newvalue)) {
        	       obj.setColumn(obj.rowposition, "HAKGWA_CD", "");
        	   } else {
        			if (e.oldvalue != e.newvalue) {
        				this.fn_setCallDeptPopup(e.newvalue);
        			}
        	   }
        	}

            // 팝업 명 삭제 시 코드 초기화
        	if (e.columnid == "GYOGWAMOK_NM") {
        	   if (this.gfn_isNull(e.newvalue)) {
        	       obj.setColumn(obj.rowposition, "GYOGWAMOK_CD", "");
        	   } else {
        			if (e.oldvalue != e.newvalue) {
        				this.fn_setCallGyogwamokPopup(e.newvalue);
        			}
        	   }
        	}
        };

        // 엔터 입력
        this.divSearch_onkeydown = function(obj,e)
        {
        	if (obj.name == "spnSearchYYYY")
        	{
        		//13(Enter) 누르면 조회
        		if(e.keycode == 13)
        		{
        			this.ds_input.setColumn(0,"YYYY",obj.value);
        			this.fn_Ret();
        		}
        	}

        	if (obj.name == "cboSearchHaknyeon")
        	{
        		//13(Enter) 누르면 조회
        		if(e.keycode == 13)
        		{
        			this.ds_input.setColumn(0,"ISU_HAKNYEON_CD",obj.value);
        			this.fn_Ret();
        		}
        	}

        	if (obj.name == "cboSearchJuya")
        	{
        		//13(Enter) 누르면 조회
        		if(e.keycode == 13)
        		{
        			this.ds_input.setColumn(0,"JUYA_GBCD",obj.value);
        			this.fn_Ret();
        		}
        	}

        	if (obj.name == "cboSearchSeungIn")
        	{
        		//13(Enter) 누르면 조회
        		if(e.keycode == 13)
        		{
        			this.ds_input.setColumn(0,"SEUNGIN_GBCD",obj.value);
        			this.fn_Ret();
        		}
        	}

        	if (obj.name == "edtSearchGwamok")
        	{
        		//13(Enter) 누르면 조회
        		if(e.keycode == 13)
        		{
        			this.ds_input.setColumn(0,"GYOGWAMOK_NM",obj.value);
        			this.fn_Ret();
        		}
        	}

        	if (obj.name == "cboSearchGyeyeol")
        	{
        		//13(Enter) 누르면 조회
        		if(e.keycode == 13)
        		{
        			this.ds_input.setColumn(0,"JUGWAN_DAEHAK_CD",obj.value);
        			this.fn_Ret();
        		}
        	}

        	if (obj.name == "cboSearchHakgwa")
        	{
        		//13(Enter) 누르면 조회
        		if(e.keycode == 13)
        		{
        			this.ds_input.setColumn(0,"JUGWAN_HAKGWA_CD",obj.value);
        			this.fn_Ret();
        		}
        	}

        	if (obj.name == "cboSearchJeongong")
        	{
        		//13(Enter) 누르면 조회
        		if(e.keycode == 13)
        		{
        			this.ds_input.setColumn(0,"JUGWAN_JEONGONG_CD",obj.value);
        			this.fn_Ret();
        		}
        	}
        };

        /**
         * 기능 : 신청 실행
         */
        this.btnSinChung_onclick = function(obj,e)
        {
        	if (!this.fn_ChkIljeong()) {
        		return;
        	}

        	this.updateSeunginStatus(obj.text, "02");
        };

        /**
         * 기능 : 승인 실행
         */
        this.btnSeungin_onclick = function(obj,e)
        {
        	if (!this.fn_ChkIljeong()) {
        		return;
        	}

        	this.updateSeunginStatus(obj.text, "03");
        };

        /**
         * 기능 : 반려 실행
         */
        this.btnBanryeo_onclick = function(obj,e)
        {
        	if (!this.fn_ChkIljeong()) {
        		return;
        	}

        	this.updateSeunginStatus(obj.text, "04");
        };

        /**
         * 기능 : 팁 실행
         */
        this.fn_Tip = function()
        {
        	this.alert("도움말 준비중입니다.");
        };

        /**
         * 기능 : 복사 실행
         */
        this.btnBoksa_onclick = function(obj,e)
        {
        	if (!this.fn_ChkIljeong()) {
        		return;
        	}

        	var yyyy			= this.ds_input.getColumn("YYYY");
        	var oArg 			= {yyyy:yyyy};
        	var oOption 		= {};
        	var sPopupCallBack 	= "fn_popupCallback";
        	this.gfn_openPopup( "boksa","UL03::UL03_2020301_P01.xfdl", oArg, sPopupCallBack, oOption);
        };

        this.divSearch_spnSearchYYYY_onchanged = function(obj,e)
        {
        	this.fn_retIljeong();
        };

        this.grdMaster_oncellclick = function(obj,e)
        {
        	this.grdMaster_onselectchanged(obj, e);
        };

        this.grdMaster_onselectchanged = function(obj,e)
        {
        	//if (!this.gfn_isNull(objApp.gds_userInfoDb.getColumn(0, "USER_GBCD"))) {
        		var seungin = this.dsMaster.getColumn(this.dsMaster.rowposition, "SEUNGIN_GBCD")
        		if (seungin == "03") {
        			this.spnYYYY.set_enable(false);
        			this.cboJuya.set_enable(false);
        			this.cboIsuHaknyeon.set_enable(false);
        			this.btnGyogwamok.set_enable(false);
        			this.edtGyogwamokNm.set_enable(false);
        			this.cboHakgi.set_enable(false);
        			this.edtEngGwamok.set_enable(false);
        			this.edtGaesolBunbanCnt.set_enable(false);
        			this.btnHakgwa.set_enable(false);
        			this.edtHakgwaNm.set_enable(false);
        			this.edtHakjeom.set_enable(false);
        			this.edtSisuIron.set_enable(false);
        			this.edtSisuSilseup.set_enable(false);
        			this.textGyoGwamokGaeyo.set_enable(false);
        			this.textEngGyoGwamokGaeyo.set_enable(false);
        			this.textBigo.set_enable(false);
        		} else {
        			var rowType = this.dsMaster.getRowType(this.dsMaster.rowposition);
        			if (rowType == "2") { // 신규일 경우
        				this.spnYYYY.set_enable(true);
        				this.cboJuya.set_enable(true);
        				this.cboIsuHaknyeon.set_enable(true);
        				this.btnGyogwamok.set_enable(true);
        				this.edtGyogwamokNm.set_enable(true);
        				this.cboHakgi.set_enable(true);
        				this.edtEngGwamok.set_enable(true);
        				this.edtGaesolBunbanCnt.set_enable(true);
        				this.btnHakgwa.set_enable(true);
        				this.edtHakgwaNm.set_enable(true);
        				this.edtHakjeom.set_enable(true);
        				this.edtSisuIron.set_enable(true);
        				this.edtSisuSilseup.set_enable(true);
        				this.textGyoGwamokGaeyo.set_enable(true);
        				this.textEngGyoGwamokGaeyo.set_enable(true);
        				this.textBigo.set_enable(true);
        			} else {
        				this.spnYYYY.set_enable(false);
        				this.cboJuya.set_enable(false);
        				this.cboIsuHaknyeon.set_enable(false);
        				this.btnGyogwamok.set_enable(false);
        				this.edtGyogwamokNm.set_enable(false);
        				this.cboHakgi.set_enable(false);
        				this.edtEngGwamok.set_enable(true);
        				this.edtGaesolBunbanCnt.set_enable(true);
        				this.btnHakgwa.set_enable(false);
        				this.edtHakgwaNm.set_enable(false);
        				this.edtHakjeom.set_enable(false);
        				this.edtSisuIron.set_enable(true);
        				this.edtSisuSilseup.set_enable(true);
        				this.textGyoGwamokGaeyo.set_enable(true);
        				this.textEngGyoGwamokGaeyo.set_enable(true);
        				this.textBigo.set_enable(true);
        			}
        		}
        	//}
        };

        this.edtSisuIron_onkeyup = function(obj,e)
        {
        	// 이론 실습 시간 자동 계산
        	var silseup = this.edtSisuSilseup.value;
        	this.edtSisuSogye.set_value(parseInt(silseup) + parseInt(obj.value));
        };

        this.edtSisuSilseup_onkeyup = function(obj,e)
        {
        	// 이론 실습 시간 자동 계산
        	var iron = this.edtSisuIron.value;
        	this.edtSisuSogye.set_value(parseInt(iron) + parseInt(obj.value));
        };

        /**
        * @description 	   : 그리드 onheadclick 이벤트
        */
        this.gfnGrid_onheadclick = function(obj,e)
        {
        	var i;
        	var objDs;
        	var nChkVal;

        	//클릭된 cell이 checkcell이면
        	if(e.cell==obj.checkcell)
        	{
        		objDs = obj.getBindDataset();
        		nChkVal = obj.getCellText(-1, e.cell);

        		if(nChkVal==1)nChkVal = 0;
        		else nChkVal = 1;

        		//Head의 체크 상태 변경
        		obj.setCellProperty("head", e.cell, "text", nChkVal);

        		//Body의 체크 상태 변경
        		for(i=0;i<objDs.rowcount;i++)
        		{
        			objDs.checkarray[i] = nChkVal;
        		}

        		//Expr이 바로 반영되도록 실행
        		obj.redrawExprCell();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.divSearch.form.stc_01_00.addEventHandler("onclick",this.divM_stc_01_00_onclick,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onkeydown",this.divSearch_onkeydown,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onchanged",this.divSearch_spnSearchYYYY_onchanged,this);
            this.divSearch.form.cboSearchHaknyeon.addEventHandler("onkeydown",this.divSearch_onkeydown,this);
            this.divSearch.form.stc_01_00_00_02.addEventHandler("onclick",this.divM_stc_01_00_00_02_onclick,this);
            this.divSearch.form.cboSearchJuya.addEventHandler("onkeydown",this.divSearch_onkeydown,this);
            this.divSearch.form.cboSearchJuya.addEventHandler("onitemchanged",this.divSearch_cboSearchJuya_onitemchanged,this);
            this.divSearch.form.cboSearchJeongong.addEventHandler("onkeydown",this.divSearch_onkeydown,this);
            this.divSearch.form.cboSearchSeungIn.addEventHandler("onkeydown",this.divSearch_onkeydown,this);
            this.divSearch.form.cboSearchSeungIn.addEventHandler("onitemchanged",this.divSearch_cboSearchSeungIn_onitemchanged,this);
            this.divSearch.form.edtSearchGwamok.addEventHandler("onkeydown",this.divSearch_onkeydown,this);
            this.grdMaster.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster.addEventHandler("oncellclick",this.grdMaster_oncellclick,this);
            this.grdMaster.addEventHandler("onselectchanged",this.grdMaster_onselectchanged,this);
            this.Static01_01_00_00_00_01.addEventHandler("onclick",this.Static01_01_00_00_00_01_onclick,this);
            this.stc_20_00_02_00_00.addEventHandler("onclick",this.stc_20_00_02_00_00_onclick,this);
            this.stc_20_00_02_00_00_00.addEventHandler("onclick",this.stc_20_00_02_00_00_onclick,this);
            this.edtHakjeom.addEventHandler("onkeydown",this.divSearch_edtSearchSuheomNo_onkeydown,this);
            this.edtSisuIron.addEventHandler("onkeyup",this.edtSisuIron_onkeyup,this);
            this.edtSisuSilseup.addEventHandler("onkeyup",this.edtSisuSilseup_onkeyup,this);
            this.btnHakgwa.addEventHandler("onclick",this.btnHakgwa_onclick,this);
            this.edtHakgwaNm.addEventHandler("onchanged",this.edtHakgwaNm_onchanged,this);
            this.btnGyogwamok.addEventHandler("onclick",this.btnGyogwamok_onclick,this);
            this.stc_20_00_02_00_00_00_00.addEventHandler("onclick",this.stc_20_00_02_00_00_onclick,this);
            this.cboSearchHakgwa.addEventHandler("onkeydown",this.divSearch_onkeydown,this);
            this.cboSearchHakgwa.addEventHandler("onitemchanged",this.cboSearchHakgwa_onitemchanged,this);
            this.cboSearchGyeyeol.addEventHandler("onitemchanged",this.cboSearchGyeyeol_onitemchanged,this);
            this.cboSearchGyeyeol.addEventHandler("onkeydown",this.divSearch_onkeydown,this);
            this.btnSinChung.addEventHandler("onclick",this.btnSinChung_onclick,this);
            this.btnSeungin.addEventHandler("onclick",this.btnSeungin_onclick,this);
            this.btnBanryeo.addEventHandler("onclick",this.btnBanryeo_onclick,this);
            this.btnBoksa.addEventHandler("onclick",this.btnBoksa_onclick,this);
            this.dsMaster.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
            this.dsIljeong.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
        };
        this.loadIncludeScript("UL03_2020301_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
