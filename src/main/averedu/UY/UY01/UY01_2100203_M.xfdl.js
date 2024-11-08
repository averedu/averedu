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
            this.set_titletext("설문개설");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGaeseolMaster", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"SEOLMUN_GAESEOL_CD\" type=\"STRING\" size=\"8\"/><Column id=\"SEOLMUN_YUHYUNG_GBCD\" type=\"STRING\" size=\"20\"/><Column id=\"SEOLMUN_NAEYONG\" type=\"STRING\" size=\"4000\"/><Column id=\"SEOLMUN_SIJAK_DT\" type=\"DATE\" size=\"8\"/><Column id=\"SEOLMUN_JONGRYO_DT\" type=\"DATE\" size=\"8\"/><Column id=\"DAMDANG_DEPT_CD\" type=\"STRING\" size=\"8\"/><Column id=\"DAMDANG_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MAGAM_YN\" type=\"STRING\" size=\"1\"/><Column id=\"DAESANG_INWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SEOLMUN_INWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BIGYOGWA_CD\" type=\"STRING\" size=\"8\"/><Column id=\"BIGYOGWA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GYOGWAMOK_CD\" type=\"STRING\" size=\"8\"/><Column id=\"GYOGWAMOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUNBAN\" type=\"STRING\" size=\"5\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"8\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gaeseolInput", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DAMDANG_DEPT_CD\" type=\"STRING\" size=\"8\"/><Column id=\"DAMDANG_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEOLMUN_SIJAK_DT\" type=\"STRING\" size=\"8\"/><Column id=\"SEOLMUN_JONGRYO_DT\" type=\"STRING\" size=\"8\"/><Column id=\"SEOLMUN_YUHYUNG_GBCD\" type=\"STRING\" size=\"20\"/><Column id=\"MAGAM_YN\" type=\"STRING\" size=\"1\"/><Column id=\"BIGYOGWA_PROGRAM_CD\" type=\"STRING\" size=\"8\"/><Column id=\"BIGYOGWA_PROGRAM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GYOGWAMOK_CD\" type=\"STRING\" size=\"8\"/><Column id=\"GYOGWAMOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUNBAN\" type=\"STRING\" size=\"5\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"8\"/><Column id=\"GBV_MENUID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSeolmunYuhyungMaster", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSeolmunYuhyungDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMagamMaster", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMagamDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHwakin", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"SEOLMUN_GAESEOL_CD\" type=\"STRING\" size=\"8\"/><Column id=\"SEOLMUN_YUHYUNG_GBCD\" type=\"STRING\" size=\"20\"/><Column id=\"SEOLMUN_NAEYONG\" type=\"STRING\" size=\"4000\"/><Column id=\"SEOLMUN_SIJAK_DT\" type=\"DATE\" size=\"8\"/><Column id=\"SEOLMUN_JONGRYO_DT\" type=\"DATE\" size=\"8\"/><Column id=\"DAMDANG_DEPT_CD\" type=\"STRING\" size=\"8\"/><Column id=\"MAGAM_YN\" type=\"STRING\" size=\"1\"/><Column id=\"DAESANG_INWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SEOLMUN_INWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BIGYOGWA_CD\" type=\"STRING\" size=\"8\"/><Column id=\"GYOGWAMOK_CD\" type=\"STRING\" size=\"8\"/><Column id=\"GANGJWA_CD\" type=\"STRING\" size=\"8\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHwakinOutput", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CNT\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMunhangMaster", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"SEOLMUN_GAESEOL_CD\" type=\"STRING\" size=\"8\"/><Column id=\"MUNHANG_NO\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"MUNHANG_NAEYONG\" type=\"STRING\" size=\"4000\"/><Column id=\"PILSU_SEONTAEK_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GAESEOL_SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_munhangInput", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SEOLMUN_GAESEOL_CD\" type=\"STRING\" size=\"8\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgiMaster", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgiDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rtn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBaseYyyyHakgi", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBunbanMaster", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBunbanDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPopupInput", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BIGYOGWA_PROGRAM_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GYOGWAMOK_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDept", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDummy", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBigyogwaProgram", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGyogwamok", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdGaeseol","0","134",null,null,"0","386",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsGaeseolMaster");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"39\"/><Column size=\"36\"/><Column size=\"100\"/><Column size=\"260\"/><Column size=\"90\"/><Column size=\"98\"/><Column size=\"106\"/><Column size=\"107\"/><Column size=\"100\"/><Column size=\"53\"/><Column size=\"53\"/><Column size=\"48\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"109\"/><Column size=\"80\"/><Column size=\"97\"/><Column size=\"60\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" rowspan=\"2\" displaytype=\"normal\" edittype=\"checkbox\" text=\"No\"/><Cell col=\"2\" rowspan=\"2\" text=\"유형구분\" cssclass=\"point\"/><Cell col=\"3\" rowspan=\"2\" text=\"설문내용\" cssclass=\"point\"/><Cell col=\"4\" colspan=\"2\" text=\"담당부서\"/><Cell col=\"6\" colspan=\"2\" text=\"설문기간\"/><Cell col=\"8\" rowspan=\"2\" text=\"마감여부\"/><Cell col=\"9\" rowspan=\"2\" text=\"대상인원\"/><Cell col=\"10\" rowspan=\"2\" text=\"설문인원\"/><Cell col=\"11\" rowspan=\"2\" text=\"학년도\" cssclass=\"point\"/><Cell col=\"12\" rowspan=\"2\" text=\"학기\" cssclass=\"point\"/><Cell col=\"13\" colspan=\"2\" text=\"비교과\"/><Cell col=\"15\" colspan=\"2\" text=\"교과목\"/><Cell col=\"17\" rowspan=\"2\" text=\"분반\"/><Cell row=\"1\" col=\"4\" text=\"담당부서코드\" cssclass=\"point\"/><Cell row=\"1\" col=\"5\" text=\"담당부서명\"/><Cell row=\"1\" col=\"6\" text=\"시작일자\" cssclass=\"point\"/><Cell row=\"1\" col=\"7\" text=\"종료일자\" cssclass=\"point\"/><Cell row=\"1\" col=\"13\" text=\"비교과코드\"/><Cell row=\"1\" col=\"14\" text=\"비교과명\"/><Cell row=\"1\" col=\"15\" text=\"교과목코드\"/><Cell row=\"1\" col=\"16\" text=\"교과목명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" editmaxlength=\"1\"/><Cell col=\"1\" displaytype=\"normal\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"2\" displaytype=\"combocontrol\" edittype=\"combo\" textAlign=\"left\" text=\"bind:SEOLMUN_YUHYUNG_GBCD\" editmaxlength=\"20\" combodataset=\"dsSeolmunYuhyungDetail\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:SEOLMUN_NAEYONG\" editmaxlength=\"4000\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:DAMDANG_DEPT_CD\" editmaxlength=\"8\" expandshow=\"hide\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"text\" textAlign=\"center\" text=\"bind:DAMDANG_DEPT_NM\" editmaxlength=\"256\" expandshow=\"show\"/><Cell col=\"6\" displaytype=\"date\" edittype=\"date\" textAlign=\"center\" text=\"bind:SEOLMUN_SIJAK_DT\" editmaxlength=\"8\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" displaytype=\"date\" edittype=\"date\" textAlign=\"center\" text=\"bind:SEOLMUN_JONGRYO_DT\" editmaxlength=\"8\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" displaytype=\"combocontrol\" edittype=\"combo\" textAlign=\"left\" text=\"bind:MAGAM_YN\" editmaxlength=\"1\" combodataset=\"dsMagamDetail\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"9\" displaytype=\"number\" edittype=\"mask\" textAlign=\"center\" text=\"bind:DAESANG_INWON\" editmaxlength=\"22\"/><Cell col=\"10\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:SEOLMUN_INWON\" editmaxlength=\"22\"/><Cell col=\"11\" displaytype=\"text\" edittype=\"normal\" textAlign=\"center\" text=\"bind:YYYY\" editmaxlength=\"4\"/><Cell col=\"12\" displaytype=\"combocontrol\" edittype=\"combo\" textAlign=\"center\" text=\"bind:HAKGI\" editmaxlength=\"8\" combodataset=\"dsHakgiDetail\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"13\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:BIGYOGWA_CD\" editmaxlength=\"8\" expandshow=\"hide\"/><Cell col=\"14\" displaytype=\"text\" edittype=\"text\" textAlign=\"center\" text=\"bind:BIGYOGWA_NM\" editmaxlength=\"256\" expandshow=\"show\"/><Cell col=\"15\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:GYOGWAMOK_CD\" editmaxlength=\"8\" expandshow=\"hide\"/><Cell col=\"16\" displaytype=\"text\" edittype=\"text\" textAlign=\"center\" text=\"bind:GYOGWAMOK_NM\" editmaxlength=\"256\" expandshow=\"show\"/><Cell col=\"17\" displaytype=\"combocontrol\" edittype=\"combo\" textAlign=\"center\" text=\"bind:BUNBAN\" editmaxlength=\"5\" expandshow=\"hide\" combodataset=\"dsBunbanDetail\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","0","108","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("설문개설목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Div("div_02","0","0",null,"98","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_04_00","601","9","70","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("16");
            obj.set_text("담당부서");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_02.addChild(obj.name, obj);

            obj = new Edit("edtSearchDamdangDeptCd","684","9","155","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            this.div_02.addChild(obj.name, obj);

            obj = new Button("btnSearchDept","852","9","22","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_PopSrch");
            this.div_02.addChild(obj.name, obj);

            obj = new Edit("edtSearchDamdangDeptNm","886","9","155","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("4");
            obj.set_enable("true");
            this.div_02.addChild(obj.name, obj);

            obj = new Static("stc_04_00_01_00_00","601","36","70","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("17");
            obj.set_text("설문기간");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_02.addChild(obj.name, obj);

            obj = new Calendar("calSearchSeolmunSijakDt","684","36","155","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_02.addChild(obj.name, obj);

            obj = new Static("Static00_00","852","36","16","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("18");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.div_02.addChild(obj.name, obj);

            obj = new Calendar("calSearchSeolmunJongryoDt","886","36","155","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_02.addChild(obj.name, obj);

            obj = new Static("stc_04_00_00","6","37","95","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("19");
            obj.set_text("설문유형구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_02.addChild(obj.name, obj);

            obj = new Combo("cboSearchSeolmunYuhyung","112","36","155","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsSeolmunYuhyungMaster");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.div_02.addChild(obj.name, obj);

            obj = new Static("stc_04_00_00_00","302","37","95","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("20");
            obj.set_text("설문마감여부");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_02.addChild(obj.name, obj);

            obj = new Combo("cboSearchMagamYn","409","36","155","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsMagamMaster");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.div_02.addChild(obj.name, obj);

            obj = new Static("stc_01_00","21","9","80","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("21");
            obj.set_text("학년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_02.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","112","9","155","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("0");
            obj.set_tooltiptype("default");
            this.div_02.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","318","9","80","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("22");
            obj.set_text("학기");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_02.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgi","409","9","155","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsHakgiMaster");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.div_02.addChild(obj.name, obj);

            obj = new Static("stc_04_00_01_00_01","1053","64","70","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("23");
            obj.set_text("분반");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_02.addChild(obj.name, obj);

            obj = new Edit("edtSearchGyogwamokNm","886","64","155","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("14");
            obj.set_enable("true");
            this.div_02.addChild(obj.name, obj);

            obj = new Button("btnSearchGyogwamok","852","64","22","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_PopSrch");
            this.div_02.addChild(obj.name, obj);

            obj = new Edit("edtSearchGyogwamokCd","684","64","155","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("12");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            this.div_02.addChild(obj.name, obj);

            obj = new Static("stc_04_00_01_00","601","64","70","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("24");
            obj.set_text("교과목");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_02.addChild(obj.name, obj);

            obj = new Edit("edtSearchBigyogwaNm","307","64","155","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("11");
            obj.set_enable("true");
            this.div_02.addChild(obj.name, obj);

            obj = new Button("btnSearchBigyogwa","276","64","22","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_PopSrch");
            this.div_02.addChild(obj.name, obj);

            obj = new Edit("edtSearchBigyogwaCd","112","64","155","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            this.div_02.addChild(obj.name, obj);

            obj = new Static("stc_04_00_01","31","64","70","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("25");
            obj.set_text("비교과");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_02.addChild(obj.name, obj);

            obj = new Combo("cboSearchBunban","1134","65","125","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("15");
            obj.set_innerdataset("dsBunbanMaster");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.div_02.addChild(obj.name, obj);

            obj = new Grid("grdMunhang","0","grdGaeseol:45",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("dsMunhangMaster");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"60\"/><Column size=\"87\"/><Column size=\"88\"/><Column size=\"1159\"/><Column size=\"134\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"checkbox\" text=\"No\"/><Cell col=\"2\" text=\"문항순번\" cssclass=\"point\"/><Cell col=\"3\" text=\"문항번호\" cssclass=\"point\"/><Cell col=\"4\" text=\"문항명\"/><Cell col=\"5\" text=\"필수선택수\" cssclass=\"point\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" editmaxlength=\"1\"/><Cell col=\"1\" displaytype=\"normal\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"mask\" textAlign=\"center\" text=\"bind:GAESEOL_SEQ\" editmaxlength=\"22\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"none\" textAlign=\"center\" text=\"bind:MUNHANG_NO\" editmaxlength=\"22\" expandshow=\"expr:(dataset.getRowType(currow))==&apos;2&apos;?&apos;show&apos;:&apos;hide&apos;\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"none\" textAlign=\"left\" text=\"bind:MUNHANG_NAEYONG\" editmaxlength=\"4000\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"mask\" textAlign=\"center\" text=\"bind:PILSU_SEONTAEK_CNT\" editmaxlength=\"22\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","0","grdGaeseol:19","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("설문문항내역");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Button("btnMunhangAdd",null,"grdGaeseol:12","60","25","145",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnMunhangDel",null,"grdGaeseol:12","60","25","80",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnMunhangExcel",null,"grdGaeseol:12","60","25","14",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("stRowCnt","134","108","233","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stRowCnt2","134","grdGaeseol:17","233","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","1","1","27","67",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","40","1","320","9",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","103","1","10","87",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00","565","1","56","60",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","500","99","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","0","126","320","8",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_02","40","32","1050","5",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 6pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_02_00","40","60","1050","5",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 6pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01_00","40","88","320","9",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","400","1","10","64",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00_00","1043","1","56","90",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","675","1","10","97",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00_00_00","268","1","56","35",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00","1125","1","10","97",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","451",null,"8","0",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","500","414","100","45",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("↑\r\n45\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("설문개설");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_02.form.edtSearchDamdangDeptCd","value","ds_gaeseolInput","DAMDANG_DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_02.form.calSearchSeolmunSijakDt","value","ds_gaeseolInput","SEOLMUN_SIJAK_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_02.form.calSearchSeolmunJongryoDt","value","ds_gaeseolInput","SEOLMUN_JONGRYO_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_02.form.cboSearchSeolmunYuhyung","value","ds_gaeseolInput","SEOLMUN_YUHYUNG_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_02.form.cboSearchMagamYn","value","ds_gaeseolInput","MAGAM_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_02.form.spnSearchYYYY","value","ds_gaeseolInput","YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_02.form.cboSearchHakgi","value","ds_gaeseolInput","HAKGI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_02.form.edtSearchGyogwamokCd","value","ds_gaeseolInput","GYOGWAMOK_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_02.form.edtSearchBigyogwaCd","value","ds_gaeseolInput","BIGYOGWA_PROGRAM_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_02.form.edtSearchDamdangDeptNm","value","ds_gaeseolInput","DAMDANG_DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_02.form.edtSearchGyogwamokNm","value","ds_gaeseolInput","GYOGWAMOK_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_02.form.edtSearchBigyogwaNm","value","ds_gaeseolInput","BIGYOGWA_PROGRAM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_02.form.cboSearchBunban","value","ds_gaeseolInput","BUNBAN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsGaeseolMaster");
            this._addPreloadList("data","","dsHwakin");
            this._addPreloadList("data","","dsHwakinOutput");
            this._addPreloadList("data","","dsMunhangMaster");
            this._addPreloadList("data","","dsDummy");
        };
        
        // User Script
        this.registerScript("UY01_2100203_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UY01_2100203_M.xfdl(설문개설)
        * 작 성         일 명: jiback
        * 작 성         일 자: 2020/11/09
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
        this.lvchkColidDsGaeseol   = "SEOLMUN_YUHYUNG_GBCD$SEOLMUN_NAEYONG$SEOLMUN_SIJAK_DT$SEOLMUN_JONGRYO_DT$DAMDANG_DEPT_CD$YYYY$HAKGI";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDsGaeseol = "유형구분$설문내용$설문시작일자$설문종료일자$담당부서코드$학년도$학기";
        this.lvchkColidDsMunhang   = "MUNHANG_NO$PILSU_SEONTAEK_CNT";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDsMunhang = "문항번호$필수선택수";

        this.strGaeseolKeyValue 	= "";
        this.strMunhangKeyValue 	= "";
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
            var strDs    = "dsSeolmunYuhyungMaster|dsSeolmunYuhyungDetail|dsMagamMaster|dsMagamDetail|dsHakgiMaster|dsHakgiDetail|dsBunbanMaster|dsBunbanDetail";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "80201|80201|80202|80202|00022|00022|00050|00050";                         // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "T|X|T|X|T|X|T|X";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
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
        	var strEopmuGbcd = "UM";
        	var strUseYn     = "1";
            // gfn_BaseYyyyHakgiLoad(데이터셋, svcId , 업무구분, 사용구분);
            // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.gfn_BaseYyyyHakgiLoad(strDs
                                      , svcId
                                      , strEopmuGbcd
                                      , strUseYn);

        	// MENU ID
        	this.ds_gaeseolInput.setColumn(0, "GBV_MENUID", objApp.gv_cutPrgId);
        };

        this.fn_PostBaseYyyyHakgiInit = function()
        {
        	if (this.dsBaseYyyyHakgi.rowcount > 0) {
        		this.ds_gaeseolInput.setColumn(0,"YYYY",  this.dsBaseYyyyHakgi.getColumn(0, "YYYY"));
        		this.ds_gaeseolInput.setColumn(0,"HAKGI", this.dsBaseYyyyHakgi.getColumn(0, "HAKGI"));
        	}
        };

        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {

            this.gfn_clearSortAll(this.grdGaeseol);
        	this.gfn_clearSortAll(this.grdMunhang);
            if(nErrorCode != 0)
            {
                this.gfn_alert(sErrorMsg,"에러정보","","error");
                return false;
            }else
            {
                /*sSvcId (Transaction Id)*/
                switch(sSvcId)
                {
        			case "baseYyyyHakgiInit":
        					this.fn_PostBaseYyyyHakgiInit();
        			    break;
                    case "GaeseolRet":
                            this.fn_PostGaeseolRet();
                        break;
                    case "Save":
                            this.fn_PostSave();
                        break;
                    case "GaeseolNew":
                            this.fn_PostGaeseolNew();
                        break;
                    case "GaeseolDel":
                            this.fn_PostGaeseolDel();
                        break;
        			case "MunhangRet":
                            this.fn_PostMunhangRet();
                        break;
                    case "MunhangNew":
                            this.fn_PostMunhangNew();
                        break;
                    case "MunhangDel":
                            this.fn_PostMunhangDel();
                        break;
        			case "Help":
                            this.fn_PostHelp();
                        break;
                    default:
                        break;
                }
            }
        };

        //Popup callback영역
        this.fn_popupCallback = function(strId, strVal)
        {
        	switch(strId)
        	{
        		case "bigyogwaSearch" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					this.ds_gaeseolInput.set_enableevent(false);
        		            this.ds_gaeseolInput.setColumn(this.ds_gaeseolInput.rowposition, "BIGYOGWA_PROGRAM_CD", sRtn[0]);
        		            this.ds_gaeseolInput.setColumn(this.ds_gaeseolInput.rowposition, "BIGYOGWA_PROGRAM_NM", sRtn[1]);
        					this.ds_gaeseolInput.set_enableevent(true);
        				}
        			break;
        		case "bigyogwaMaster" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					this.dsGaeseolMaster.set_enableevent(false);
        					this.dsGaeseolMaster.setColumn(this.dsGaeseolMaster.rowposition, "BIGYOGWA_CD", sRtn[0]);
        					this.dsGaeseolMaster.setColumn(this.dsGaeseolMaster.rowposition, "BIGYOGWA_NM", sRtn[1]);
        					this.dsGaeseolMaster.set_enableevent(true);
        				}
        			break;
        		case "deptSearch" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					this.ds_gaeseolInput.set_enableevent(false);
        		            this.ds_gaeseolInput.setColumn(this.ds_gaeseolInput.rowposition, "DAMDANG_DEPT_CD", sRtn[0]);
        		            this.ds_gaeseolInput.setColumn(this.ds_gaeseolInput.rowposition, "DAMDANG_DEPT_NM", sRtn[1]);
        					this.ds_gaeseolInput.set_enableevent(true);
        				}
        			break;
        		case "deptMaster" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					this.dsGaeseolMaster.set_enableevent(false);
        					this.dsGaeseolMaster.setColumn(this.dsGaeseolMaster.rowposition, "DAMDANG_DEPT_CD", sRtn[0]);
        					this.dsGaeseolMaster.setColumn(this.dsGaeseolMaster.rowposition, "DAMDANG_DEPT_NM", sRtn[1]);
        					this.dsGaeseolMaster.set_enableevent(true);
        				}
        			break;
        		case "gyogwamokSearch" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					this.ds_gaeseolInput.set_enableevent(false);
        		            this.ds_gaeseolInput.setColumn(this.ds_gaeseolInput.rowposition, "GYOGWAMOK_CD", sRtn[0]);
        		            this.ds_gaeseolInput.setColumn(this.ds_gaeseolInput.rowposition, "GYOGWAMOK_NM", sRtn[1]);
        					this.ds_gaeseolInput.set_enableevent(true);
        				}
        			break;
        		case "gyogwamokMaster" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					this.dsGaeseolMaster.set_enableevent(false);
        					this.dsGaeseolMaster.setColumn(this.dsGaeseolMaster.rowposition, "GYOGWAMOK_CD", sRtn[0]);
        					this.dsGaeseolMaster.setColumn(this.dsGaeseolMaster.rowposition, "GYOGWAMOK_NM", sRtn[1]);
        					this.dsGaeseolMaster.set_enableevent(true);
        				}
        			break;
        		case "munhang" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        				    if (this.dsMunhangMaster.findRow("MUNHANG_NO", sRtn[0]) >= 0) {
        					    this.gfn_alert("이미 추가한 문항번호입니다.","추가정보","","warning");
        					} else {
        						this.dsMunhangMaster.setColumn(this.dsMunhangMaster.rowposition, "MUNHANG_NO", sRtn[0]);
        						this.dsMunhangMaster.setColumn(this.dsMunhangMaster.rowposition, "MUNHANG_NAEYONG", sRtn[1]);
        					}
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
            switch(sBtn)
            {
        		case "ret" :        // 조회
                        this.fn_GaeseolRet();
                    break;
                case "new" :         // 신규
                        this.fn_GaeseolNew();
                    break;
                case "del" :         // 삭제
                        this.fn_GaeseolDel();
                    break;
                case "save" :        // 저장
                        this.fn_Save();
                    break;
                case "excel" :       // 엑셀
                        this.fn_GaeseolExcel();
                    break;
                case "tmp1" :        // 도움말
                         this.fn_Help();
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
        this.fn_PreGaeseolRet = function()
        {
        	if(this.ds_gaeseolInput.getColumn(this.ds_gaeseolInput.rowposition, "SEOLMUN_SIJAK_DT") > this.ds_gaeseolInput.getColumn(this.ds_gaeseolInput.rowposition, "SEOLMUN_JONGRYO_DT"))
        	{
        		this.gfn_alert("설문 종료일자는 설문 시작일자보다 이전 날짜가 될 수 없습니다.","저장정보","","question");
        		return false;
        	}

        	if(this.fn_beforeclose())
        	{
        		var result = this.gfn_confirm( "변경된 데이터가 있습니다. 그래도 이동하시겠습니까?", "저장","", "question" );
        		if(result == 0)
        		{
        			return false;
        		}
        	}

            // 조회조건 셋팅
        	this.dsMunhangMaster.clearData();
            return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_GaeseolRet = function()
        {
            if(!this.fn_PreGaeseolRet())
            {
                return false;
            }
            var strSvc      = "GaeseolRet";
            var strUrl      = "/prj/UY/UY01/gaeseolRetrieve_2100203_M.do";
            var strInDs     = "ds_gaeseolInput=ds_gaeseolInput";
            var strOutDs    = "dsGaeseolMaster=dsGaeseolMaster";
            var strArg      = "";
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
        this.fn_PostGaeseolRet = function()
        {
            this.gfn_getRowCount(this.stRowCnt,this.dsGaeseolMaster);
        };

        /**********************************************************************
        	05-1. 조회 함수 선언
        ***********************************************************************/
        this.dsGaeseolMaster_canrowposchange = function(obj,e)
        {
        	if(this.fn_munhangbeforeclose())
        	{
        		var result = this.gfn_confirm( "변경된 데이터가 있습니다. 그래도 이동하시겠습니까?", "저장","", "question" );
        		if(result == 0)
        		{
        			return false;
        		}
        	}
        };

        this.dsGaeseolMaster_onrowposchanged = function(obj,e)
        {
        	this.ds_munhangInput.setColumn(0,"SEOLMUN_GAESEOL_CD",this.dsGaeseolMaster.getColumn(this.dsGaeseolMaster.rowposition,"SEOLMUN_GAESEOL_CD"));
        	this.fn_MunhangRet();
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_MunhangRet = function()
        {
            var strSvc      = "MunhangRet";
            var strUrl      = "/prj/UY/UY01/munhangRetrieve_2100203_M.do";
            var strInDs     = "ds_munhangInput=ds_munhangInput";
            var strOutDs    = "dsMunhangMaster=dsMunhangMaster";
            var strArg      = "";
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
        this.fn_PostMunhangRet = function()
        {
        	var nRow = this.dsMunhangMaster.findRowExpr( "SEOLMUN_GAESEOL_CD == '" + this.strGaeseolKeyValue + "' && MUNHANG_NO == '" + this.strMunhangKeyValue + "'");
        	this.dsMunhangMaster.set_rowposition(nRow);
        	// row 유지 초기화
        	if (nRow >= 0) {
        		this.strGaeseolKeyValue = "";
        		this.strMunhangKeyValue = "";
        	}

            this.gfn_getRowCount(this.stRowCnt2,this.dsMunhangMaster);
        };

        /**********************************************************************
                06. 추가 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_GaeseolNew = function()
        {
            var nRow = this.dsGaeseolMaster.addRow();
        	this.dsGaeseolMaster.set_enableevent(false);
            this.dsGaeseolMaster.setColumn(nRow,"CHK",     "0");           //선택
        	this.dsGaeseolMaster.setColumn(nRow,"YYYY",  this.ds_gaeseolInput.getColumn(0, "YYYY"));           //학년
        	this.dsGaeseolMaster.setColumn(nRow,"HAKGI", this.ds_gaeseolInput.getColumn(0, "HAKGI"));           //학기
        	this.dsGaeseolMaster.setColumn(nRow,"MAGAM_YN", "1"); // 마감여부
        	this.dsGaeseolMaster.setColumn(nRow,"DAESANG_INWON", 0);  // 대상인원
        	this.dsGaeseolMaster.setColumn(nRow,"SEOLMUN_INWON", 0);  // 설문인원

        	this.dsGaeseolMaster.set_enableevent(true);

        	this.grdMunhang.setFocus();
        	this.grdMunhang.setCellPos(3);
        };

        /**
         * 기능 : 처리 후 실행
         */
        this.fn_PostGaeseolNew = function()
        {
        	this.gfn_getRowCount(this.stRowCnt,this.dsGaeseolMaster);
        }

        /**********************************************************************
        	06-1. 디테일 추가 함수 선언
        ***********************************************************************/
        this.btnMunhangAdd_onclick = function(obj,e)
        {
        	if(this.dsGaeseolMaster.rowcount < 1)
        	{
        		this.gfn_alert("MSG00014","입력정보","","warning");  // 마스터 데이타가 없습니다.
        		return false;
        	}

            if(this.gfn_isUpdate(this.dsGaeseolMaster))
            {
                this.gfn_alert("설문개설목록에 변경된 이력이 있습니다. 저장 후 추가하세요.","추가정보","","question");
                return false;
            }

        	this.fn_MunhangAdd();
        };

        /**
         * 기능 : 디테일 추가 실행
         */
        this.fn_MunhangAdd = function()
        {
        	var nRow = this.dsMunhangMaster.addRow();
        	this.dsMunhangMaster.setColumn(nRow,"CHK", 	   	  "0"); 													//체크
        	this.dsMunhangMaster.setColumn(nRow,"SEOLMUN_GAESEOL_CD", this.dsGaeseolMaster.getColumn(this.dsGaeseolMaster.rowposition,"SEOLMUN_GAESEOL_CD")); 	//기본키값

        	var nGaeseolSeq = this.dsMunhangMaster.getMax("GAESEOL_SEQ");

        	if (this.gfn_isNull(nGaeseolSeq)) {
        		this.dsMunhangMaster.setColumn(nRow,"GAESEOL_SEQ", 1);
        	} else {
        		this.dsMunhangMaster.setColumn(nRow,"GAESEOL_SEQ", nGaeseolSeq + 1);
        	}

        	this.grdMunhang.setFocus();
        	this.grdMunhang.setCellPos(3);
        }

        /**
         * 기능 : 처리 후 실행
         */
        this.fn_PostMunhangAdd = function()
        {
        	this.gfn_getRowCount(this.stRowCnt2,this.dsMunhangMaster);
        };

        /**********************************************************************
                07. 도움말 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 실행
         */
        this.fn_Help = function()
        {
        	this.gfn_alert("도움말 준비중입니다.","저장정보","","question");
        };

        /**********************************************************************
                08. 삭제 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 삭제 버튼 실행
         */

        this.fn_PreGaeseolDel = function()
        {
            //멀티삭제용도
            if(this.dsGaeseolMaster.rowcount < 1 || this.dsGaeseolMaster.findRow("CHK",1) == -1)
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
            this.dsGaeseolMaster.set_enableevent(false);
            for(var i=this.dsGaeseolMaster.rowcount-1;i>-1;i--)
            {
        		// 설문내역 혹은 개설문항이 존재할 경우 삭제 불가
                if(this.dsGaeseolMaster.getColumn(i,"CHK") == "1" || this.dsGaeseolMaster.getRowType(i) == 2)
                {
                    this.dsHwakinOutput.clearData();
        			this.dsHwakin.clearData();
        			this.dsHwakin.insertRow(0);
        			this.dsHwakin.copyRow(0, this.dsGaeseolMaster, i);

        			var strSvc      = "HwakinRet";
        			var strUrl      = "/prj/UY/UY01/hwakinRetrieve_2100203_M.do";
        			var strInDs     = "dsHwakin=dsHwakin";
        			var strOutDs    = "dsHwakinOutput=dsHwakinOutput";
        			var strArg      = "";
        			var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        			var strASync    = false;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
        			this.gfn_Transaction(strSvc
        								, strUrl
        								, strInDs
        								, strOutDs
        								, strArg
        								, strCallBack
        								, strASync);
        			if(this.dsHwakinOutput.getColumn(0, "CNT") > 0)
        			{
        				this.gfn_alert("설문내역 혹은 개설문항이 존재하여 삭제할 수 없습니다.","삭제정보","","warning");
        			}
        			else
        			{
        				this.dsGaeseolMaster.deleteRow(i);
        			}
                }
            }
            this.dsGaeseolMaster.set_enableevent(true);

            //개별삭제시
            return true;
        };

        /**
         * 기능 : Row 삭제 또는 Transaction 삭제 처리
         */
        this.fn_GaeseolDel = function()
        {
            if(!this.fn_PreGaeseolDel())
            {
                return false;
            }

            var strSvc      = "GaeseolDel";
            var strUrl      = "/prj/UY/UY01/gaeseolDelete_2100203_M.do";
            var strInDs     = "dsGaeseolMaster=dsGaeseolMaster:u";
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

        this.fn_PostGaeseolDel = function()
        {
            this.gfn_getRowCount(this.stRowCnt,this.dsGaeseolMaster);
        };

        /**********************************************************************
        	08-1. 디테일 삭제 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 삭제 버튼 실행
         */
        this.fn_PreMunhangDel = function()
        {
        	//멀티삭제용도
        	if(this.dsMunhangMaster.rowcount < 1 || this.dsMunhangMaster.findRow("CHK",1) == -1)
        	{
        		this.gfn_alert("MSG00006","삭제 정보","","information");  // 삭제할 데이타가 없습니다.
        		return false;
        	}
        	var result = this.gfn_confirm("MSG00007","삭제 처리","","question"); // 현재선택행을 삭제하시겠습니까?
        	if(result == 0)
        	{
        	   return false;
        	}

        	//다중삭제 용도
        	this.dsMunhangMaster.set_enableevent(false);
        	for(var i=this.dsMunhangMaster.rowcount-1;i>-1;i--)
        	{
        		if(this.dsMunhangMaster.getColumn(i,"CHK") == "1" || this.dsMunhangMaster.getRowType(i) == 2)
        		{
        			this.dsMunhangMaster.deleteRow(i);
        		}
        	}
        	this.dsMunhangMaster.set_enableevent(true);

        	//개별삭제시
        	return true;
        };

        /**
         * 기능 : Row 삭제 또는 Transaction 삭제 처리
         */
        this.btnMunhangDel_onclick = function(obj,e)
        {
        	if(!this.fn_PreMunhangDel())
        	{
        		return false;
        	}

        	var strSvc 		= "MunhangDel";
        	var strUrl 		= "/prj/UY/UY01/munhangDelete_2100203_M.do";
        	var strInDs  	= "dsMunhangMaster=dsMunhangMaster:u";
        	var strOutDs 	= "";
        	var strArg 		= "";
        	var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        	var strASync    = true;			   //샏략이나 공백일시에는 ASync=true,싱크시는 false로
        	this.gfn_Transaction(strSvc
        					   , strUrl
        					   , strInDs
        					   , strOutDs
        					   , strArg
        					   , strCallBack
        					   , strASync);

        };

        this.fn_PostMunhangDel = function()
        {
        	this.gfn_getRowCount(this.stRowCnt2,this.dsMunhangMaster);
        };

        /**********************************************************************
                09. 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave = function()
        {
            if(this.dsGaeseolMaster.rowcount > 0)
            {
                for(var i=0;i<this.dsGaeseolMaster.rowcount; i++)
                {
                    if(this.dsGaeseolMaster.getColumn(i,"CHK") == "0")
                    {
                        continue;
                    }
                    this.dsGaeseolMaster.setColumn(i,"CHK","0");
                }
            }

        	if(this.dsMunhangMaster.rowcount > 0)
            {
                for(var i=0;i<this.dsMunhangMaster.rowcount; i++)
                {
                    if(this.dsMunhangMaster.getColumn(i,"CHK") == "0")
                    {
                        continue;
                    }
                    this.dsMunhangMaster.setColumn(i,"CHK","0");
                }
            }

            if(!this.gfn_isUpdate(this.dsGaeseolMaster) && !this.gfn_isUpdate(this.dsMunhangMaster))
            {
                this.gfn_alert("변경된 이력이 없습니다.","저장정보","","question");
                return false;
            }

        	// 비교과, 교과목, 분반중에 최소 하나는 작성
        	for(var i=0;i<this.dsGaeseolMaster.rowcount; i++)
            {
        		if (this.dsGaeseolMaster.getRowType(i) == Dataset.ROWTYPE_UPDATE || this.dsGaeseolMaster.getRowType(i) == Dataset.ROWTYPE_INSERT)
        		{
        			if (this.dsGaeseolMaster.getColumn(i, "SEOLMUN_YUHYUNG_GBCD") == "02" && this.gfn_isNull(this.dsGaeseolMaster.getColumn(i, "BIGYOGWA_CD")))
        			{
        				this.gfn_alert("유형구분이 비교과입니다. 비교과명은 필수로 입력해야 합니다.","저장정보","","question");
        				return false;
        			}

        			if (this.dsGaeseolMaster.getColumn(i, "SEOLMUN_YUHYUNG_GBCD") == "01" && (this.gfn_isNull(this.dsGaeseolMaster.getColumn(i, "GYOGWAMOK_CD")) ||
        																	                  this.gfn_isNull(this.dsGaeseolMaster.getColumn(i, "BUNBAN")) ) )
        			{
        				this.gfn_alert("유형구분이 교과입니다. 교과목과 분반은 필수로 입력해야 합니다.","저장정보","","question");
        				return false;
        			}
        		}
        	}

            // 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
            var chkFocusFlg = true;
            var result      = this.gfn_cmmnChkEssentialItem(this.dsGaeseolMaster, this.lvchkColidDsGaeseol, this.lvchkColNameDsGaeseol, this.grdGaeseol, chkFocusFlg, this);

            if (result[0] != "success")
            {
                this.gfn_alert(result[0],"저장정보","","question");
                this.dsGaeseolMaster.set_rowposition(result[1]); //데이터셋 변경
                return false;
             }

        	// 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
        	var chkFocusFlg1 = true;
        	var result 		= this.gfn_cmmnChkEssentialItem(this.dsMunhangMaster, this.lvchkColidDsMunhang, this.lvchkColNameDsMunhang, this.grdMunhang, chkFocusFlg1, this);

        	if (result[0] != "success")
        	{
        		this.gfn_alert(result[0]);
        		this.dsMunhangMaster.set_rowposition(result[1]); //데이터셋 변경
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
            var strUrl      = "/prj/UY/UY01/gaeseolSave_2100203_M.do";
            var strInDs     = "ds_gaeseolInput=ds_gaeseolInput:a ";
        	    strInDs    += "ds_munhangInput=ds_munhangInput:a ";
                strInDs    += "dsGaeseolMaster=dsGaeseolMaster:u ";
                strInDs    += "dsMunhangMaster=dsMunhangMaster:u";
            var strOutDs    = "dsGaeseolMaster=dsGaeseolMaster";
            var strArg      = "rowpositionGaeseol=" + this.gfn_updateRowPosition(this.dsGaeseolMaster) + " ";
                strArg     += "rowpositionMunhang=" + this.gfn_updateRowPosition(this.dsMunhangMaster);

            var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
              strArg = "GBV_MENUID=" + GBV_MENUID + " " + strArg;
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
         *      기능 : 저장시 후처리
         */
        this.fn_PostSave = function()
        {
        	var nRowGaeseol = this.dsGaeseolMaster.findRow("SEOLMUN_GAESEOL_CD",this.strGaeseolKeyValue);
        	this.dsGaeseolMaster.set_rowposition(nRowGaeseol);

            this.gfn_getRowCount(this.stRowCnt,this.dsGaeseolMaster);
        };

        /**********************************************************************
                10. 마스터 ExcelDnwn 엑셀로 출력
        ***********************************************************************/
        this.fn_GaeseolExcel = function()
        {
            if(this.dsGaeseolMaster.rowcount < 1)
            {
                this.gfn_alert("출력할 엑셀데이터가 없습니다.", "EXCEL 정보" ,"","information");
                return false;
            }
            var result = this.gfn_confirm( "Excel를 출력하시겠습니까?", "EXCEL 출력","","question" );
            if(result == 0)
            {
               return false;
            }
            this.gfn_excelExport(this.grdGaeseol, "설문 개설 내역","설문 개설 내역");
        };

        /**********************************************************************
                10-1. 디테일 ExcelDnwn 엑셀로 출력
        ***********************************************************************/
        this.btnMunhangExcel_onclick = function(obj,e)
        {
            if(this.dsMunhangMaster.rowcount < 1)
            {
                this.gfn_alert("출력할 엑셀데이터가 없습니다.", "EXCEL 정보" ,"","information");
                return false;
            }
            var result = this.gfn_confirm( "Excel를 출력하시겠습니까?", "EXCEL 출력","","question" );
            if(result == 0)
            {
               return false;
            }
            this.gfn_excelExport(this.grdMunhang, "설문 문항 내역","설문 문항 내역");
        };

        /**********************************************************************
                11. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 체크
         */
        this.grdGaeseol_onheadclick = function(obj,e)
        {
            if(e.cell == this.grdGaeseol.getBindCellIndex("body","CHK"))
            {
                this.gfn_checkAll(obj, e);
            }
        };

        this.grdMunhang_onheadclick = function(obj,e)
        {
            if(e.cell == this.grdMunhang.getBindCellIndex("body","CHK"))
            {
                this.gfn_checkAll(obj, e);
            }
        };

        /**
         *      그리드멀티 소트정열
         */
        this.grdGaeseol_onheaddblclick = function(obj,e)
        {
            if(e.cell != this.grdGaeseol.getBindCellIndex("body","CHK") && e.cell != 1)
            {
                this.gfn_gridSort(obj,e);
            }
        };

        this.grdMunhang_onheaddblclick = function(obj,e)
        {
            if(e.cell != this.grdMunhang.getBindCellIndex("body","CHK") && e.cell != 1)
            {
                this.gfn_gridSort(obj,e);
            }
        };

        // 엔터키 누르면 조회
        this.div_02_spnSearchYYYY_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_gaeseolInput.setColumn(0,"YYYY",obj.value);
        		this.fn_GaeseolRet();
        	}
        };

        // 엔터키 누르면 조회
        this.div_02_cboSearchHakgi_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_gaeseolInput.setColumn(0,"HAKGI",obj.value);
        		this.fn_GaeseolRet();
        	}
        };

        // 엔터키 누르면 조회
        this.div_02_cboSearchSeolmunYuhyung_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_gaeseolInput.setColumn(0,"SEOLMUN_YUHYUNG_GBCD",obj.value);
        		this.fn_GaeseolRet();
        	}
        };

        // 엔터키 누르면 조회
        this.div_02_cboSearchMagamYn_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_gaeseolInput.setColumn(0,"MAGAM_YN",obj.value);
        		this.fn_GaeseolRet();
        	}
        };

        // 엔터키 누르면 조회
        this.div_02_calSearchSeolmunSijakDt_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_gaeseolInput.setColumn(0,"SEOLMUN_SIJAK_DT",obj.value);
        		this.fn_GaeseolRet();
        	}
        };

        // 엔터키 누르면 조회
        this.div_02_calSearchSeolmunJongryoDt_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_gaeseolInput.setColumn(0,"SEOLMUN_JONGRYO_DT",obj.value);
        		this.fn_GaeseolRet();
        	}
        };

        // 엔터키 누르면 조회
        this.div_02_cboSearchBunban_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_gaeseolInput.setColumn(0,"BUNBAN",obj.value);
        		this.fn_GaeseolRet();
        	}
        };

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
        	var value = false;

            if(this.gfn_isUpdate(this.dsGaeseolMaster))
        	{
        		value = true;
        	}
        	else if(this.gfn_isUpdate(this.dsMunhangMaster))
        	{
        		value = true;
        	}

        	return value;
        };

        /**
          * 설문문항내역 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_munhangbeforeclose = function()
        {
        	var value = false;

        	if(this.gfn_isUpdate(this.dsMunhangMaster))
        	{
        		value = true;
        	}

        	return value;
        };
        /**********************************************************************
                12. 팝업
        ***********************************************************************/
        this.grdGaeseol_onexpandup = function(obj,e)
        {
        	// 주관부서 팝업
        	if(e.col == this.grdGaeseol.getBindCellIndex("body", "DAMDANG_DEPT_NM"))
        	{
        		var deptCdNm = this.dsGaeseolMaster.getColumn(this.dsGaeseolMaster.rowposition, "DAMDANG_DEPT_NM");
        		this.fn_setCallDeptPopup(obj.name, deptCdNm);
        	}
        	// 비교과프로그램 팝업
        	else if(e.col == this.grdGaeseol.getBindCellIndex("body", "BIGYOGWA_NM"))
        	{
        		var bigyogwaProgramCdNm = this.dsGaeseolMaster.getColumn(this.dsGaeseolMaster.rowposition, "BIGYOGWA_NM");
        		this.fn_setCallBigyogwaProgramPopup(obj.name, bigyogwaProgramCdNm);
        	}
        	// 교과목 팝업
        	else if(e.col == this.grdGaeseol.getBindCellIndex("body", "GYOGWAMOK_NM"))
        	{
        		var gyogwamokCdNm = this.dsGaeseolMaster.getColumn(this.dsGaeseolMaster.rowposition, "GYOGWAMOK_NM");
        		this.fn_setCallGyogwamokPopup(obj.name, gyogwamokCdNm);
        	}
        };

        // 설문문항 팝업
        this.grdMunhang_onexpandup = function(obj,e)
        {
        	var munhangNoNaeyong = this.dsMunhangMaster.getColumn(this.dsMunhangMaster.rowposition, "MUNHANG_NO");
        	var oArg = {munhangNoNaeyong:munhangNoNaeyong};
        	var oOption = {};
        	var sPopupCallBack = "fn_popupCallback";
        	this.gfn_openPopup( "munhang","com::COMM_P06.xfdl",oArg,sPopupCallBack,oOption);
        };

        // 주관부서 팝업
        this.btnSearchDept_onclick = function(obj,e)
        {
        	var deptCdNm = this.div_02.form.edtSearchDamdangDeptNm.value;

        	this.fn_setCallDeptPopup(obj.name, deptCdNm);
        };

        // 비교과프로그램 팝업
        this.btnSearchBigyogwa_onclick = function(obj,e)
        {
        	var bigyogwaProgramCdNm = this.div_02.form.edtSearchBigyogwaNm.value;

        	this.fn_setCallBigyogwaProgramPopup(obj.name, bigyogwaProgramCdNm);
        };

        // 교과목 팝업
        this.btnSearchGyogwamok_onclick = function(obj,e)
        {
        	var gyogwamokCdNm = this.div_02.form.edtSearchGyogwamokNm.value;

        	this.fn_setCallGyogwamokPopup(obj.name, gyogwamokCdNm);
        };

        this.ds_gaeseolInput_oncolumnchanged = function(obj,e)
        {
            // 팝업 명 삭제 시 코드 초기화
        	if (e.columnid == "DAMDANG_DEPT_NM") {
        	   if (this.gfn_isNull(e.newvalue)) {
        	       obj.setColumn(obj.rowposition, "DAMDANG_DEPT_CD", "");
        	   } else {
        			if (e.oldvalue != e.newvalue)
        			{
        				this.fn_setCallDeptPopup(obj.name, e.newvalue);
        			}
        	   }
        	} else
        	if (e.columnid == "BIGYOGWA_PROGRAM_NM") {
        	   if (this.gfn_isNull(e.newvalue)) {
        	       obj.setColumn(obj.rowposition, "BIGYOGWA_PROGRAM_CD", "");
        	   } else {
        			if (e.oldvalue != e.newvalue)
        			{
        				this.fn_setCallBigyogwaProgramPopup(obj.name, e.newvalue);
        			}
        	   }
        	} else
        	if (e.columnid == "GYOGWAMOK_NM") {
        	   if (this.gfn_isNull(e.newvalue)) {
        	       obj.setColumn(obj.rowposition, "GYOGWAMOK_CD", "");
        	   } else {
        			if (e.oldvalue != e.newvalue)
        			{
        				this.fn_setCallGyogwamokPopup(obj.name, e.newvalue);
        			}
        	   }
        	}
        };


        // 주관부서
        this.fn_setCallDeptPopup = function(strObjName, strSearchValue)
        {
        	this.dsDept.clearData();

        	this.dsPopupInput.setColumn(this.dsPopupInput.rowposition, "DEPT_NM", strSearchValue);

        	if(!this.gfn_isNull(strSearchValue))
        	{
        		var strSvc 		= "Search";
        		var strUrl 		= "/prj/pop/RetrieveDeptSearchList.do";
        		var strInDs  	= "ds_input=dsPopupInput";
        		var strOutDs 	= "dsDept=dsDept";
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
        	    if (strObjName == "ds_gaeseolInput" || strObjName == "btnSearchDept") {
        			this.ds_gaeseolInput.setColumn(this.ds_gaeseolInput.rowposition, "DAMDANG_DEPT_CD", this.dsDept.getColumn(0,"DEPT_CD"));
        			this.ds_gaeseolInput.setColumn(this.ds_gaeseolInput.rowposition, "DAMDANG_DEPT_NM", this.dsDept.getColumn(0,"DEPT_NM"));
        		} else {
        			this.dsGaeseolMaster.setColumn(this.dsGaeseolMaster.rowposition, "DAMDANG_DEPT_CD", this.dsDept.getColumn(0,"DEPT_CD"));
        			this.dsGaeseolMaster.setColumn(this.dsGaeseolMaster.rowposition, "DAMDANG_DEPT_NM", this.dsDept.getColumn(0,"DEPT_NM"));
        		}
        	}
        	else
        	{
        		var oArg = {deptCdNm:strSearchValue, jojikGbcd:'00', useYn:'1'};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";

        		if (strObjName == "ds_gaeseolInput" || strObjName == "btnSearchDept")
        			this.gfn_openPopup( "deptSearch","com::COMM_P01.xfdl",oArg,sPopupCallBack,oOption);
        		else
        			this.gfn_openPopup( "deptMaster","com::COMM_P01.xfdl",oArg,sPopupCallBack,oOption);
        	}

        };


        // 비교과프로그램
        this.fn_setCallBigyogwaProgramPopup = function(strObjName, strSearchValue)
        {
        	this.dsBigyogwaProgram.clearData();

        	this.dsPopupInput.setColumn(this.dsPopupInput.rowposition, "BIGYOGWA_PROGRAM_CD_NM", strSearchValue);

        	if(!this.gfn_isNull(strSearchValue))
        	{
        		var strSvc 		= "SearchBigyogwaProgram";
        		var strUrl 		= "/prj/UY/UY01/retrieve_2100202_P01.do";
        		var strInDs  	= "ds_input=dsPopupInput";
        		var strOutDs 	= "dsBigyogwaProgram=dsMaster";
        		var strArg 		= "";

        		var GBV_MENUID    = objApp.gv_cutPrgId;
        		if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
        		{
        		  strArg = "GBV_MENUID=" + GBV_MENUID + " " + strArg;
        		}

        		var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        		var strASync    = false;			//생략이나 공백일시에는 ASync=true,싱크시는 false로

        		this.gfn_Transaction( strSvc
        							, strUrl
        							, strInDs
        							, strOutDs
        							, strArg
        							, strCallBack
        							, strASync);
        	}

        	if(this.dsBigyogwaProgram.rowcount == 1)
        	{
        		if (strObjName == "ds_gaeseolInput" || strObjName == "btnSearchBigyogwa") {
        			this.ds_gaeseolInput.setColumn(this.ds_gaeseolInput.rowposition, "BIGYOGWA_PROGRAM_CD", this.dsBigyogwaProgram.getColumn(0,"BIGYOGWA_PROGRAM_CD"));
        			this.ds_gaeseolInput.setColumn(this.ds_gaeseolInput.rowposition, "BIGYOGWA_PROGRAM_NM", this.dsBigyogwaProgram.getColumn(0,"BIGYOGWA_PROGRAM_NM"));
        		} else {
        			this.dsGaeseolMaster.setColumn(this.dsGaeseolMaster.rowposition, "BIGYOGWA_CD", this.dsBigyogwaProgram.getColumn(0,"BIGYOGWA_PROGRAM_CD"));
        			this.dsGaeseolMaster.setColumn(this.dsGaeseolMaster.rowposition, "BIGYOGWA_NM", this.dsBigyogwaProgram.getColumn(0,"BIGYOGWA_PROGRAM_NM"));
        		}
         	}
         	else
         	{
        		var strYyyy = this.ds_gaeseolInput.getColumn(0,"YYYY");
        		var strHakgi = this.ds_gaeseolInput.getColumn(0,"HAKGI");

        		var oArg = {bigyogwaProgramCdNm:strSearchValue, yyyy:strYyyy, hakgi:strHakgi};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";

        		if (strObjName == "ds_gaeseolInput" || strObjName == "btnSearchBigyogwa")
        			this.gfn_openPopup( "bigyogwaSearch","com::COMM_P05.xfdl",oArg,sPopupCallBack,oOption);
        		else
        			this.gfn_openPopup( "bigyogwaMaster","com::COMM_P05.xfdl",oArg,sPopupCallBack,oOption);
         	}
        };

        this.fn_setCallGyogwamokPopup = function(strObjName, strSearchValue)
        {
        	this.dsGyogwamok.clearData();

        	this.dsPopupInput.setColumn(this.dsPopupInput.rowposition, "GYOGWAMOK_CD_NM", strSearchValue);


        	if(!this.gfn_isNull(strSearchValue))
        	{
        		var strSvc 		= "SearchGyogwamok";
        		var strUrl 		= "/prj/com/Retrieve_P03.do";
        		var strInDs  	= "ds_input=dsPopupInput";
        		var strOutDs 	= "dsGyogwamok=dsMaster";
        		var strArg 		= "";

        		var GBV_MENUID    = objApp.gv_cutPrgId;
        		if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
        		{
        		  strArg = "GBV_MENUID=" + GBV_MENUID + " " + strArg;
        		}

        		var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        		var strASync    = false;			//생략이나 공백일시에는 ASync=true,싱크시는 false로

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
        	    if (strObjName == "ds_gaeseolInput" || strObjName == "btnSearchGyogwamok") {
        			this.ds_gaeseolInput.setColumn(this.ds_gaeseolInput.rowposition, "GYOGWAMOK_CD", this.dsGyogwamok.getColumn(0,"GYOGWAMOK_CD"));
        			this.ds_gaeseolInput.setColumn(this.ds_gaeseolInput.rowposition, "GYOGWAMOK_NM", this.dsGyogwamok.getColumn(0,"GYOGWAMOK_NM"));
        		} else {
        			this.dsGaeseolMaster.setColumn(this.dsGaeseolMaster.rowposition, "GYOGWAMOK_CD", this.dsGyogwamok.getColumn(0,"GYOGWAMOK_CD"));
        			this.dsGaeseolMaster.setColumn(this.dsGaeseolMaster.rowposition, "GYOGWAMOK_NM", this.dsGyogwamok.getColumn(0,"GYOGWAMOK_NM"));
        		}
        	}
        	else
        	{
        		var oArg = {gyogwamokCdNm:strSearchValue};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";

        		if (strObjName == "ds_gaeseolInput" || strObjName == "btnSearchGyogwamok")
        			this.gfn_openPopup( "gyogwamokSearch","com::COMM_P03.xfdl",oArg,sPopupCallBack,oOption);
        		else
        			this.gfn_openPopup( "gyogwamokMaster","com::COMM_P03.xfdl",oArg,sPopupCallBack,oOption);
        	}
        };

        this.dsGaeseolMaster_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "BIGYOGWA_NM")
        	{
        	   if (this.gfn_isNull(e.newvalue)) {
        	       obj.setColumn(obj.rowposition, "BIGYOGWA_CD", "");
        	   } else {
        			if (e.oldvalue != e.newvalue)
        			{
        				this.fn_setCallBigyogwaProgramPopup(obj.name, e.newvalue);
        			}
        	   }
        	} else if (e.columnid == "DAMDANG_DEPT_NM") {
        	   if (this.gfn_isNull(e.newvalue)) {
        	       obj.setColumn(obj.rowposition, "DAMDANG_DEPT_CD", "");
        	   } else {
        			if (e.oldvalue != e.newvalue)
        			{
        				this.fn_setCallDeptPopup(e.columnid, e.newvalue);
        			}
        	   }
        	} else if (e.columnid == "GYOGWAMOK_NM") {
        	   if (this.gfn_isNull(e.newvalue)) {
        	       obj.setColumn(obj.rowposition, "GYOGWAMOK_CD", "");
        	   } else {
        			if (e.oldvalue != e.newvalue)
        			{
        				this.fn_setCallGyogwamokPopup(e.columnid, e.newvalue);
        			}
        	   }
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.grdGaeseol.addEventHandler("onheaddblclick",this.grdGaeseol_onheaddblclick,this);
            this.grdGaeseol.addEventHandler("onheadclick",this.grdGaeseol_onheadclick,this);
            this.grdGaeseol.addEventHandler("onexpandup",this.grdGaeseol_onexpandup,this);
            this.div_02.form.btnSearchDept.addEventHandler("onclick",this.btnSearchDept_onclick,this);
            this.div_02.form.calSearchSeolmunSijakDt.addEventHandler("onchanged",this.div_01_cal_00_onchanged,this);
            this.div_02.form.calSearchSeolmunSijakDt.addEventHandler("onkeydown",this.div_02_calSearchSeolmunSijakDt_onkeydown,this);
            this.div_02.form.calSearchSeolmunJongryoDt.addEventHandler("onchanged",this.div_01_cal_00_onchanged,this);
            this.div_02.form.calSearchSeolmunJongryoDt.addEventHandler("onkeydown",this.div_02_calSearchSeolmunJongryoDt_onkeydown,this);
            this.div_02.form.cboSearchSeolmunYuhyung.addEventHandler("onkeydown",this.div_02_cboSearchSeolmunYuhyung_onkeydown,this);
            this.div_02.form.cboSearchMagamYn.addEventHandler("onkeydown",this.div_02_cboSearchMagamYn_onkeydown,this);
            this.div_02.form.spnSearchYYYY.addEventHandler("onkeydown",this.div_02_spnSearchYYYY_onkeydown,this);
            this.div_02.form.cboSearchHakgi.addEventHandler("onkeydown",this.div_02_cboSearchHakgi_onkeydown,this);
            this.div_02.form.btnSearchGyogwamok.addEventHandler("onclick",this.btnSearchGyogwamok_onclick,this);
            this.div_02.form.btnSearchBigyogwa.addEventHandler("onclick",this.btnSearchBigyogwa_onclick,this);
            this.div_02.form.cboSearchBunban.addEventHandler("onkeydown",this.div_02_cboSearchBunban_onkeydown,this);
            this.grdMunhang.addEventHandler("onheaddblclick",this.grdMunhang_onheaddblclick,this);
            this.grdMunhang.addEventHandler("onheadclick",this.grdMunhang_onheadclick,this);
            this.grdMunhang.addEventHandler("onexpandup",this.grdMunhang_onexpandup,this);
            this.btnMunhangAdd.addEventHandler("onclick",this.btnMunhangAdd_onclick,this);
            this.btnMunhangDel.addEventHandler("onclick",this.btnMunhangDel_onclick,this);
            this.btnMunhangExcel.addEventHandler("onclick",this.btnMunhangExcel_onclick,this);
            this.dsGaeseolMaster.addEventHandler("oncolumnchanged",this.dsGaeseolMaster_oncolumnchanged,this);
            this.dsGaeseolMaster.addEventHandler("canrowposchange",this.dsGaeseolMaster_canrowposchange,this);
            this.dsGaeseolMaster.addEventHandler("onrowposchanged",this.dsGaeseolMaster_onrowposchanged,this);
            this.ds_gaeseolInput.addEventHandler("oncolumnchanged",this.ds_gaeseolInput_oncolumnchanged,this);
        };
        this.loadIncludeScript("UY01_2100203_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
