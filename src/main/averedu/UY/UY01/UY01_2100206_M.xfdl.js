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
            this.set_titletext("설문문항별현황조회");
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
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"SEOLMUN_GAESEOL_CD\" type=\"STRING\" size=\"8\"/><Column id=\"SEOLMUN_YUHYUNG_GBCD\" type=\"STRING\" size=\"20\"/><Column id=\"SEOLMUN_YUHYUNG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEOLMUN_NAEYONG\" type=\"STRING\" size=\"4000\"/><Column id=\"SEOLMUN_SIJAK_DT\" type=\"DATE\" size=\"8\"/><Column id=\"SEOLMUN_JONGRYO_DT\" type=\"DATE\" size=\"8\"/><Column id=\"DAMDANG_DEPT_CD\" type=\"STRING\" size=\"8\"/><Column id=\"DAMDANG_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MAGAM_YN\" type=\"STRING\" size=\"1\"/><Column id=\"MAGAM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DAESANG_INWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SEOLMUN_INWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BIGYOGWA_CD\" type=\"STRING\" size=\"8\"/><Column id=\"BIGYOGWA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GYOGWAMOK_CD\" type=\"STRING\" size=\"8\"/><Column id=\"GYOGWAMOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUNBAN\" type=\"STRING\" size=\"5\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"8\"/><Column id=\"HAKGI_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("dsMunhangMaster", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"MUNHANG_GBN\" type=\"STRING\" size=\"256\"/><Column id=\"SEOLMUN_GAESEOL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GAESEOL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"MUNHANG_NO\" type=\"STRING\" size=\"256\"/><Column id=\"YEJE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MUNHANG_NAEYONG\" type=\"STRING\" size=\"256\"/><Column id=\"DAESANG_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"DABBYEON_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"DABBYEON_PER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("dsDabbyeonMaster", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"SEOLMUN_GAESEOL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"256\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GAESEOL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"MUNHANG_NAEYONG\" type=\"STRING\" size=\"256\"/><Column id=\"DABBYEON_NAEYONG\" type=\"STRING\" size=\"256\"/><Column id=\"MUNHANG_NO\" type=\"STRING\" size=\"256\"/><Column id=\"YEJE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"DAEHAK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdGaeseol","0","133",null,"210","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("dsGaeseolMaster");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"43\"/><Column size=\"81\"/><Column size=\"266\"/><Column size=\"107\"/><Column size=\"98\"/><Column size=\"106\"/><Column size=\"107\"/><Column size=\"111\"/><Column size=\"53\"/><Column size=\"53\"/><Column size=\"48\"/><Column size=\"92\"/><Column size=\"109\"/><Column size=\"109\"/><Column size=\"109\"/><Column size=\"109\"/><Column size=\"47\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"normal\" edittype=\"checkbox\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"유형구분\"/><Cell col=\"2\" rowspan=\"2\" text=\"설문내용\"/><Cell col=\"3\" colspan=\"2\" text=\"담당부서\"/><Cell col=\"5\" colspan=\"2\" text=\"설문기간\"/><Cell col=\"7\" rowspan=\"2\" text=\"마감여부\"/><Cell col=\"8\" rowspan=\"2\" text=\"대상인원\"/><Cell col=\"9\" rowspan=\"2\" text=\"설문인원\"/><Cell col=\"10\" rowspan=\"2\" text=\"학년도\"/><Cell col=\"11\" rowspan=\"2\" text=\"학기\"/><Cell col=\"12\" colspan=\"2\" text=\"비교과\"/><Cell col=\"14\" colspan=\"2\" text=\"교과목\"/><Cell col=\"16\" rowspan=\"2\" text=\"분반\"/><Cell row=\"1\" col=\"3\" text=\"담당부서코드\"/><Cell row=\"1\" col=\"4\" text=\"담당부서명\"/><Cell row=\"1\" col=\"5\" text=\"시작일자\"/><Cell row=\"1\" col=\"6\" text=\"종료일자\"/><Cell row=\"1\" col=\"12\" text=\"비교과코드\"/><Cell row=\"1\" col=\"13\" text=\"비교과명\"/><Cell row=\"1\" col=\"14\" text=\"교과목코드\"/><Cell row=\"1\" col=\"15\" text=\"교과목명\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\" text=\"bind:SEOLMUN_YUHYUNG_NM\" editmaxlength=\"256\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\" text=\"bind:SEOLMUN_NAEYONG\" editmaxlength=\"4000\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:DAMDANG_DEPT_CD\" editmaxlength=\"8\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:DAMDANG_DEPT_NM\" editmaxlength=\"256\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:SEOLMUN_SIJAK_DT\" editmaxlength=\"8\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:SEOLMUN_JONGRYO_DT\" editmaxlength=\"8\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:MAGAM_NM\" editmaxlength=\"256\"/><Cell col=\"8\" displaytype=\"normal\" edittype=\"none\" textAlign=\"right\" text=\"bind:DAESANG_INWON\" editmaxlength=\"22\"/><Cell col=\"9\" displaytype=\"normal\" edittype=\"none\" textAlign=\"right\" text=\"bind:SEOLMUN_INWON\" editmaxlength=\"22\"/><Cell col=\"10\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:YYYY\" editmaxlength=\"4\"/><Cell col=\"11\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:HAKGI_NM\" editmaxlength=\"256\"/><Cell col=\"12\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:BIGYOGWA_CD\" editmaxlength=\"8\"/><Cell col=\"13\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:BIGYOGWA_NM\" editmaxlength=\"256\"/><Cell col=\"14\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:GYOGWAMOK_CD\" editmaxlength=\"8\"/><Cell col=\"15\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:GYOGWAMOK_NM\" editmaxlength=\"256\"/><Cell col=\"16\" displaytype=\"combotext\" edittype=\"none\" textAlign=\"center\" text=\"bind:BUNBAN\" editmaxlength=\"5\" expandshow=\"hide\" combodataset=\"dsBunbanDetail\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","0","103","100","22",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("설문개설목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","0","grdGaeseol:19","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("설문답변목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stRowCnt","127","102","233","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnMunhangExcel",null,"grdGaeseol:12","60","25","14",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","500","98","100","35",null,null,null,null,null,null,this);
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

            obj = new Static("Static01_01_00_00","0","125","320","8",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","500","343","100","45",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("↑\r\n45\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","380",null,"28","0",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
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

            obj = new Static("Static01_02_00","1","1","27","67",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","40","1","320","9",null,null,null,null,null,null,this);
            obj.set_taborder("12");
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
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00","565","1","56","60",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_02","40","32","1050","5",null,null,null,null,null,null,this);
            obj.set_taborder("15");
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

            obj = new Static("Static01_01_00_00_01_00","40","88","320","9",null,null,null,null,null,null,this);
            obj.set_taborder("17");
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
            obj.set_taborder("18");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00_00","1043","1","56","90",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","675","1","10","97",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00_00_00","268","1","56","35",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00","1125","1","10","97",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","0","grdGaeseol:45",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("문항별현황");
            this.Tab00.addChild(obj.name, obj);

            obj = new Grid("grdMunhang","0","0",null,null,"0","0",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("dsMunhangMaster");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"103\"/><Column size=\"539\"/><Column size=\"477\"/><Column size=\"72\"/><Column size=\"103\"/><Column size=\"84\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"문항번호\"/><Cell col=\"1\" rowspan=\"2\" text=\"문항명\"/><Cell col=\"2\" rowspan=\"2\" text=\"예제\"/><Cell col=\"3\" rowspan=\"2\" text=\"대상인원\"/><Cell col=\"4\" colspan=\"3\" text=\"답변\"/><Cell row=\"1\" col=\"4\" text=\"답변그래프\"/><Cell row=\"1\" col=\"5\" text=\"답변인원\"/><Cell row=\"1\" col=\"6\" text=\"답변비율\"/></Band><Band id=\"body\"><Cell text=\"expr:MUNHANG_GBN == &apos;1&apos; ? MUNHANG_NO : NULL\"/><Cell col=\"1\" text=\"expr:MUNHANG_GBN == &apos;1&apos; ? MUNHANG_NAEYONG : NULL\" textAlign=\"left\"/><Cell col=\"2\" text=\"expr:MUNHANG_GBN != &apos;1&apos; ? YEJE_NO + &apos;. &apos; + MUNHANG_NAEYONG : NULL\" textAlign=\"left\"/><Cell col=\"3\" text=\"expr:MUNHANG_GBN == &apos;1&apos; ? DAESANG_CNT : NULL\"/><Cell col=\"4\" text=\"expr:MUNHANG_GBN != &apos;1&apos; ? DABBYEON_PER : NULL\" displaytype=\"expr:MUNHANG_GBN != &apos;1&apos; ? &apos;progressbarcontrol&apos; : &apos;normal&apos;\"/><Cell col=\"5\" text=\"expr:MUNHANG_GBN != &apos;1&apos; ? DABBYEON_CNT : NULL\"/><Cell col=\"6\" text=\"expr:MUNHANG_GBN != &apos;1&apos; ? DABBYEON_PER + &apos;%&apos;: NULL\"/></Band></Format><Format id=\"firstFormat\"/></Formats>");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("설문현황");
            this.Tab00.addChild(obj.name, obj);

            obj = new Grid("grdSeolmun","0","0",null,null,"0","0",null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsDabbyeonMaster");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"53\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"306\"/><Column size=\"224\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"36\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"학번\"/><Cell col=\"2\" text=\"성명\"/><Cell col=\"3\" text=\"문항번호\"/><Cell col=\"4\" text=\"문항\"/><Cell col=\"5\" text=\"답변\"/><Cell col=\"6\" text=\"계열\"/><Cell col=\"7\" text=\"학과\"/><Cell col=\"8\" text=\"전공\"/><Cell col=\"9\" text=\"학년\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:HAKBEON\" suppress=\"1\" suppressalign=\"middle\"/><Cell col=\"2\" text=\"bind:HAKSAENG_NM\" suppress=\"1\" suppressalign=\"middle\"/><Cell col=\"3\" text=\"bind:GAESEOL_SEQ\"/><Cell col=\"4\" text=\"bind:MUNHANG_NAEYONG\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:DABBYEON_NAEYONG\"/><Cell col=\"6\" text=\"bind:DAEHAK_CD\" suppress=\"2\" suppressalign=\"middle\"/><Cell col=\"7\" text=\"bind:HAKGWA_CD\" suppress=\"2\" suppressalign=\"middle\"/><Cell col=\"8\" text=\"bind:JEONGONG_CD\" suppress=\"2\" suppressalign=\"middle\"/><Cell col=\"9\" text=\"bind:HAKNYEON\" suppress=\"2\" suppressalign=\"middle\"/></Band></Format></Formats>");
            this.Tab00.Tabpage2.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("설문문항별현황조회");
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

            obj = new BindItem("item7","div_02.form.edtSearchGyogwamokCd","value","ds_gaeseolInput","GYOGWAMOK_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_02.form.edtSearchBigyogwaCd","value","ds_gaeseolInput","BIGYOGWA_PROGRAM_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_02.form.edtSearchDamdangDeptNm","value","ds_gaeseolInput","DAMDANG_DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_02.form.edtSearchGyogwamokNm","value","ds_gaeseolInput","GYOGWAMOK_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_02.form.edtSearchBigyogwaNm","value","ds_gaeseolInput","BIGYOGWA_PROGRAM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_02.form.cboSearchBunban","value","ds_gaeseolInput","BUNBAN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsGaeseolMaster");
            this._addPreloadList("data","","dsMunhangMaster");
            this._addPreloadList("data","","dsDummy");
            this._addPreloadList("data","","dsDabbyeonMaster");
        };
        
        // User Script
        this.registerScript("UY01_2100206_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UY01_2100206_M.xfdl(설문문항별현황조회)
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
        this.lvchkColidDsGaeseol   = "";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDsGaeseol = "";
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
        	this.gfn_clearSortAll(this.Tab00.Tabpage1.form.grdMunhang);
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
        			case "MunhangRet":
                            this.fn_PostMunhangRet();
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
        		default:
                    break;
        	}
        }

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
            // 조회조건 셋팅
        	this.dsMunhangMaster.clearData();
        	this.dsDabbyeonMaster.clearData();
        	if(this.ds_gaeseolInput.getColumn(this.ds_gaeseolInput.rowposition, "SEOLMUN_SIJAK_DT") > this.ds_gaeseolInput.getColumn(this.ds_gaeseolInput.rowposition, "SEOLMUN_JONGRYO_DT"))
        	{
        		this.gfn_alert("설문 종료일자는 설문 시작일자보다 이전 날짜가 될 수 없습니다.","저장정보","","question");
        		return false;
        	}
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
            var strUrl      = "/prj/UY/UY01/gaeseolRetrieve_2100206_M.do";
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
        this.dsGaeseolMaster_onrowposchanged = function(obj,e)
        {
        	this.fn_MunhangRet();
        };

        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreMunhangRet = function()
        {
            // 조회조건 셋팅
        	this.ds_munhangInput.setColumn(0,"SEOLMUN_GAESEOL_CD",this.dsGaeseolMaster.getColumn(this.dsGaeseolMaster.rowposition,"SEOLMUN_GAESEOL_CD"));
            return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_MunhangRet = function()
        {
            if(!this.fn_PreMunhangRet())
            {
                return false;
            }
            var strSvc      = "MunhangRet";
            var strUrl      = "/prj/UY/UY01/munhangRetrieve_2100206_M.do";
            var strInDs     = "ds_munhangInput=ds_munhangInput";
            var strOutDs    = "dsMunhangMaster=dsMunhangMaster ";
        	    strOutDs   += "dsDabbyeonMaster=dsDabbyeonMaster";
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
        	return false;
        };

        /**********************************************************************
                06. 도움말 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreHelp = function()
        {
        	return true;
        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_Help = function()
        {
        	this.gfn_alert("도움말 준비중입니다.","저장정보","","question");
        };
        /**
         *      기능 : 저장시 후처리
         */
        this.fn_PostHelp = function()
        {

        };

        /**********************************************************************
                07. 디테일 ExcelDnwn 엑셀로 출력
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

        	switch (this.Tab00.tabindex)
        	{
        		case 0:
        			this.gfn_excelExport(this.Tab00.Tabpage1.form.grdMunhang, "문항별 현황","문항별 현황");
        			break;
        		case 1:
        			this.gfn_excelExport(this.Tab00.Tabpage2.form.grdSeolmun, "설문현황","설문현황");
        			break;
        	}
        };

        /**********************************************************************
                08. 기타 Control Event
        ***********************************************************************/

        /**
         *      그리드멀티 소트정열
         */
        this.grdGaeseol_onheaddblclick = function(obj,e)
        {
            if(e.cell != this.grdGaeseol.getBindCellIndex("body","CHK"))
            {
                this.gfn_gridSort(obj,e);
            }
        };

        this.grdMunhang_onheaddblclick = function(obj,e)
        {
            if(e.cell != this.Tab00.Tabpage1.form.grdMunhang.getBindCellIndex("body","CHK"))
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

        /**********************************************************************
                09. 팝업
        ***********************************************************************/
        // 주관부서 팝업
        this.btnSearchDept_onclick = function(obj,e)
        {
        	var deptCdNm = this.div_02.form.edtSearchDeptCd.value;
        	this.fn_setCallDeptPopup(obj.name, deptCdNm);
        };

        // 비교과프로그램 팝업
        this.btnSearchBigyogwa_onclick = function(obj,e)
        {
        	var bigyogwaProgramCdNm = this.div_02.form.edtSearchBigyogwaCd.value;
        	this.fn_setCallBigyogwaProgramPopup(obj.name, bigyogwaProgramCdNm);
        };

        // 교과목 팝업
        this.btnSearchGyogwamok_onclick = function(obj,e)
        {
        	var gyogwamokCdNm = this.div_02.form.edtSearchGyogwamokCd.value;
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
        		this.ds_gaeseolInput.setColumn(this.ds_gaeseolInput.rowposition, "DAMDANG_DEPT_CD", this.dsDept.getColumn(0,"DEPT_CD"));
        		this.ds_gaeseolInput.setColumn(this.ds_gaeseolInput.rowposition, "DAMDANG_DEPT_NM", this.dsDept.getColumn(0,"DEPT_NM"));
        	}
        	else
        	{
        		var oArg = {deptCdNm:strSearchValue, jojikGbcd:'00', useYn:'1'};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";
        		this.gfn_openPopup( "deptSearch","com::COMM_P01.xfdl",oArg,sPopupCallBack,oOption);
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
        		this.ds_gaeseolInput.setColumn(this.ds_gaeseolInput.rowposition, "BIGYOGWA_PROGRAM_CD", this.dsBigyogwaProgram.getColumn(0,"BIGYOGWA_PROGRAM_CD"));
        		this.ds_gaeseolInput.setColumn(this.ds_gaeseolInput.rowposition, "BIGYOGWA_PROGRAM_NM", this.dsBigyogwaProgram.getColumn(0,"BIGYOGWA_PROGRAM_NM"));
         	}
         	else
         	{
        		var strYyyy = this.ds_gaeseolInput.getColumn(0,"YYYY");
        		var strHakgi = this.ds_gaeseolInput.getColumn(0,"HAKGI");

        		var oArg = {bigyogwaProgramCdNm:strSearchValue, yyyy:strYyyy, hakgi:strHakgi};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";
        		this.gfn_openPopup( "bigyogwaSearch","com::COMM_P05.xfdl",oArg,sPopupCallBack,oOption);
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
        		this.ds_gaeseolInput.setColumn(this.ds_gaeseolInput.rowposition, "GYOGWAMOK_CD", this.dsGyogwamok.getColumn(0,"GYOGWAMOK_CD"));
        		this.ds_gaeseolInput.setColumn(this.ds_gaeseolInput.rowposition, "GYOGWAMOK_NM", this.dsGyogwamok.getColumn(0,"GYOGWAMOK_NM"));
        	}
        	else
        	{
        		var oArg = {gyogwamokCdNm:strSearchValue};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";
        		this.gfn_openPopup( "gyogwamokSearch","com::COMM_P03.xfdl",oArg,sPopupCallBack,oOption);
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
            this.grdGaeseol.addEventHandler("onexpandup",this.grdGaeseol_onexpandup,this);
            this.btnMunhangExcel.addEventHandler("onclick",this.btnMunhangExcel_onclick,this);
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
            this.Tab00.Tabpage1.form.grdMunhang.addEventHandler("onheaddblclick",this.grdMunhang_onheaddblclick,this);
            this.Tab00.Tabpage1.form.grdMunhang.addEventHandler("onexpandup",this.grdMunhang_onexpandup,this);
            this.dsGaeseolMaster.addEventHandler("onrowposchanged",this.dsGaeseolMaster_onrowposchanged,this);
            this.ds_gaeseolInput.addEventHandler("oncolumnchanged",this.ds_gaeseolInput_oncolumnchanged,this);
        };
        this.loadIncludeScript("UY01_2100206_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
