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
            this.set_titletext("휴(결)보강관리");
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
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"100\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"ISU_HAKNYEON_CD\" type=\"STRING\" size=\"10\"/><Column id=\"GYOGWAMOK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"BUNBAN\" type=\"STRING\" size=\"5\"/><Column id=\"JUCHA\" type=\"STRING\" size=\"10\"/><Column id=\"YOIL_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"GYOSI\" type=\"STRING\" size=\"2\"/><Column id=\"YOIL_NM\" type=\"STRING\" size=\"100\"/><Column id=\"HYUGANG_DT\" type=\"STRING\" size=\"8\"/><Column id=\"HYUGANG_SAYU\" type=\"STRING\" size=\"1000\"/><Column id=\"HYUGANG_SAYU_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"BOGANG_JUCHA\" type=\"STRING\" size=\"10\"/><Column id=\"BOGANG_YOIL_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"BOGANG_GYOSI\" type=\"STRING\" size=\"2\"/><Column id=\"BOGANG_DT\" type=\"STRING\" size=\"8\"/><Column id=\"BOGANG_HOSIL_CD\" type=\"STRING\" size=\"10\"/><Column id=\"BOGANG_HOSIL_NM\" type=\"STRING\" size=\"100\"/><Column id=\"GYOGWAMOK_NM\" type=\"STRING\" size=\"200\"/><Column id=\"GYOSU_CD\" type=\"STRING\" size=\"10\"/><Column id=\"GYOSU_NM\" type=\"STRING\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBaseYyyyHakgi", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgi", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REF_3\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"GYOGWAMOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GYOGWAMOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DAMDANGGYOSU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DAMDANGGYOSU_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YYYY\"/><Col id=\"HAKGI\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input1", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SABEON_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GYOGWAMOK_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SABEON_NM\"/><Col id=\"GYOGWAMOK_CD_NM\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSawon", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGwamok", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_09_00","-3","52",null,"22","1458",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("휴(결)강 내역");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","117","51",null,"24","1400",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","560","42","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","10","69",null,"8","0",null,null,null,null,null,this);
            obj.set_taborder("3");
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
            obj.set_taborder("4");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01_00","26","31",null,"9","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","20","0",null,"9","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00","-33","9","100","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("학년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","80","9","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_01","190","4","56","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","192","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("학기");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgi","282","9","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsHakgi");
            obj.set_text("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01_01","421","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("사번/성명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01","392","-1","56","34",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchSabeon","511","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00","631","3","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearchSawon","641","9","22","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_PopSrch");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_00","663","3","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchNm","673","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01_00_00","820","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("과목명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00","793","5","56","36",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_00_00_00_01","902","6","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchGwamokCd","912","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_01","1032","3","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearchGwamok","1042","9","22","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_cssclass("btn_WF_PopSrch");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_00_01","1064","3","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchGwamokNm","1074","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","272","0","10","37",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","70","0","10","37",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01","501","0","10","37",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("25");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Grid("grdMaster","0","77",null,null,"0","103",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("none");
            obj.set_fillareatype("none");
            obj.set_cellsizebandtype("body");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"161\"/><Column size=\"80\"/><Column size=\"244\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"81\"/><Column size=\"69\"/><Column size=\"88\"/><Column size=\"69\"/><Column size=\"80\"/><Column size=\"59\"/><Column size=\"88\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"217\"/><Column size=\"120\"/><Column size=\"300\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\" textAlign=\"center\"/><Cell col=\"1\" text=\"학과/전공\" textAlign=\"center\" autosizecol=\"limitmax\" autosizerow=\"limitmax\"/><Cell col=\"2\" text=\"교과목코드\" textAlign=\"center\"/><Cell col=\"3\" text=\"교과목명\" textAlign=\"center\"/><Cell col=\"4\" text=\"분반\" textAlign=\"center\"/><Cell col=\"5\" text=\"사번\" textAlign=\"center\"/><Cell col=\"6\" text=\"교수명\" textAlign=\"center\"/><Cell col=\"7\" text=\"휴강주차\" textAlign=\"center\"/><Cell col=\"8\" text=\"휴강요일\" textAlign=\"center\"/><Cell col=\"9\" text=\"휴강교시\" textAlign=\"center\"/><Cell col=\"10\" text=\"휴강일자\" textAlign=\"center\"/><Cell col=\"11\" text=\"보강주차\" textAlign=\"center\"/><Cell col=\"12\" text=\"보강요일\" textAlign=\"center\"/><Cell col=\"13\" text=\"보강교시\" textAlign=\"center\"/><Cell col=\"14\" text=\"보강일자\" textAlign=\"center\"/><Cell col=\"15\" text=\"보강강의실\" textAlign=\"center\"/><Cell col=\"16\" text=\"휴(결)강사유구분\"/><Cell col=\"17\" text=\"휴(결)강사유\" textAlign=\"center\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" autosizecol=\"limitmax\" autosizerow=\"limitmax\" controlautosizingtype=\"both\"/><Cell col=\"1\" text=\"bind:HAKGWA_NM\" textAlign=\"left\" autosizecol=\"limitmax\" autosizerow=\"limitmax\" controlautosizingtype=\"both\"/><Cell col=\"2\" text=\"bind:GYOGWAMOK_CD\" autosizecol=\"limitmax\" autosizerow=\"limitmax\" controlautosizingtype=\"both\"/><Cell col=\"3\" text=\"bind:GYOGWAMOK_NM\" textAlign=\"left\" autosizecol=\"limitmax\" autosizerow=\"limitmax\" controlautosizingtype=\"both\"/><Cell col=\"4\" text=\"bind:BUNBAN\" textAlign=\"center\" autosizecol=\"limitmax\" autosizerow=\"limitmax\" controlautosizingtype=\"both\"/><Cell col=\"5\" text=\"bind:GYOSU_CD\" textAlign=\"center\" autosizecol=\"limitmax\" autosizerow=\"limitmax\" controlautosizingtype=\"both\"/><Cell col=\"6\" text=\"bind:GYOSU_NM\" textAlign=\"center\" autosizecol=\"limitmax\" autosizerow=\"limitmax\" controlautosizingtype=\"both\"/><Cell col=\"7\" text=\"bind:JUCHA\" textAlign=\"center\" autosizecol=\"limitmax\" autosizerow=\"limitmax\" controlautosizingtype=\"both\"/><Cell col=\"8\" text=\"bind:YOIL_GBCD\" textAlign=\"center\" autosizecol=\"limitmax\" autosizerow=\"limitmax\" controlautosizingtype=\"both\" displaytype=\"combotext\" combodataset=\"DS_YOIL\" combodatacol=\"LABEL\" combocodecol=\"CD\"/><Cell col=\"9\" text=\"bind:GYOSI\" textAlign=\"center\" autosizecol=\"limitmax\" autosizerow=\"limitmax\" controlautosizingtype=\"both\"/><Cell col=\"10\" text=\"bind:HYUGANG_DT\" textAlign=\"center\" autosizecol=\"limitmax\" autosizerow=\"limitmax\" controlautosizingtype=\"both\"/><Cell col=\"11\" text=\"bind:BOGANG_JUCHA\" textAlign=\"center\" autosizecol=\"limitmax\" autosizerow=\"limitmax\" controlautosizingtype=\"both\"/><Cell col=\"12\" text=\"bind:BOGANG_YOIL_GBCD\" textAlign=\"center\" autosizecol=\"limitmax\" autosizerow=\"limitmax\" controlautosizingtype=\"both\" displaytype=\"combotext\" combodataset=\"DS_YOIL\" combodatacol=\"LABEL\" combocodecol=\"CD\"/><Cell col=\"13\" text=\"bind:BOGANG_GYOSI\" textAlign=\"center\" autosizecol=\"limitmax\" autosizerow=\"limitmax\" controlautosizingtype=\"both\"/><Cell col=\"14\" text=\"bind:BOGANG_DT\" textAlign=\"center\" autosizecol=\"limitmax\" autosizerow=\"limitmax\" controlautosizingtype=\"both\"/><Cell col=\"15\" text=\"bind:BOGANG_HOSIL_NM\" textAlign=\"left\" autosizecol=\"limitmax\" autosizerow=\"limitmax\" controlautosizingtype=\"both\"/><Cell col=\"16\" text=\"bind:HYUGANG_SAYU_GBCD\" displaytype=\"combotext\" combodataset=\"DS_SAYU_GBCD\" combocodecol=\"CD\" combodatacol=\"LABEL\"/><Cell col=\"17\" text=\"bind:HYUGANG_SAYU\" textAlign=\"left\" autosizecol=\"limitmax\" autosizerow=\"limitmax\" controlautosizingtype=\"both\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_00_00","0",null,null,"68","0","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_01_00_00_00","0",null,"100","68",null,"0",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("휴(결)강사유");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHyugangSayu","102",null,null,"62","3","3",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","560","697","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("↑\r\n35\r\n↓");
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
            obj.set_description("휴(결)보강관리");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.spnSearchYYYY","value","ds_input","YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboSearchHakgi","value","ds_input","HAKGI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.edtSearchNm","value","ds_input","DAMDANGGYOSU_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.edtSearchSabeon","value","ds_input","DAMDANGGYOSU_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.edtSearchGwamokCd","value","ds_input","GYOGWAMOK_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.edtSearchGwamokNm","value","ds_input","GYOGWAMOK_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edtHyugangSayu","value","dsDay","HYUGANG_SAYU");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("UL04_2020410_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UL04_2020410_M.xfdl(휴(결)보강관리)
        * 작 성         일 명: jiback
        * 작 성         일 자: 2022/07/22
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
        this.lvchkColidDs   = "";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs = "";
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
            var strDs    = "dsHakgi";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00022";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "T";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
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

        this.fn_PostBaseYyyyHakgiInit = function()
        {
        	if (this.dsBaseYyyyHakgi.rowcount > 0)
        	{
        		this.ds_input.setColumn(0, "YYYY",  this.dsBaseYyyyHakgi.getColumn(0, "YYYY"));
        		this.ds_input.setColumn(0, "HAKGI", this.dsBaseYyyyHakgi.getColumn(0, "HAKGI"));
        	}

        	this.fn_TreeRet();
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
                    case "baseYyyyHakgiInit":
        					this.fn_PostBaseYyyyHakgiInit();
        			    break;
                    case "Ret":
                            this.fn_PostRet();
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
        		case "sawon" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					this.ds_input.set_enableevent(false);
        		            this.ds_input.setColumn(this.ds_input.rowposition, "DAMDANGGYOSU_CD", sRtn[0]);
        		            this.ds_input.setColumn(this.ds_input.rowposition, "DAMDANGGYOSU_NM", sRtn[1]);
        					this.ds_input.set_enableevent(true);
        				}
        			break;
        		case "gwamok" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					this.ds_input.set_enableevent(false);
        		            this.ds_input.setColumn(this.ds_input.rowposition, "GYOGWAMOK_CD", sRtn[0]);
        		            this.ds_input.setColumn(this.ds_input.rowposition, "GYOGWAMOK_NM", sRtn[1]);
        					this.ds_input.set_enableevent(true);
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
                        this.fn_Ret();
                    break;
                case "tmp1" :        // 팁
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
         * 기능 : 마스터 조회 실행
         */
        this.fn_Ret = function()
        {
            var strSvc      = "Ret";
            var strUrl      = "/prj/UL/UL04/Retrieve_2020410_M.do";
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
                13. 팁
        ***********************************************************************/
        this.fn_Tip = function()
        {
        	this.alert("도움말 준비중입니다.");
        };

        /**********************************************************************
                14. 팝업
        ***********************************************************************/
        // 사원 팝업
        this.divSearch_btnSearchSawon_onclick = function(obj,e)
        {
        	var sabeonNm = this.divSearch.form.edtSearchNm.value;
        	this.fn_setCallSawonPopup("SAWON_NM", sabeonNm)
        };

        // 교과목 팝업
        this.divSearch_btnSearchGwamok_onclick = function(obj,e)
        {
        	var gwamokCdNm = this.divSearch.form.edtSearchGwamokNm.value;
        	this.fn_setCallGwamokPopup("GAMOK_NM", gwamokCdNm)
        };

        this.fn_setCallSawonPopup = function(strColumnName, strSearchValue)
        {
        	this.dsSawon.clearData();

        	this.ds_input1.setColumn(this.ds_input1.rowposition, "SABEON_NM", strSearchValue);

        	if(!this.gfn_isNull(strSearchValue))
        	{
        		var strSvc      = "SearchSawon";
        		var strUrl      = "/prj/com/Retrieve_P02.do";
        		var strInDs     = "ds_input=ds_input1";
        		var strOutDs    = "dsSawon=dsMaster";
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

        	}

        	if(this.dsSawon.rowcount == 1)
        	{
        		this.ds_input.setColumn(0, "DAMDANGGYOSU_CD", this.dsSawon.getColumn(0,"SABEON"));
        		this.ds_input.setColumn(0, "DAMDANGGYOSU_NM", this.dsSawon.getColumn(0,"SEONGMYEONG"));
        	} else
        	{
        		var oArg = {sabeonNm:strSearchValue};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";
        		this.gfn_openPopup("sawon","com::COMM_P02.xfdl",oArg,sPopupCallBack,oOption);
        	}
        };

        this.fn_setCallGwamokPopup = function(strColumnName, strSearchValue)
        {
        	this.dsGwamok.clearData();

        	this.ds_input1.setColumn(this.ds_input1.rowposition, "GYOGWAMOK_CD_NM", strSearchValue);

        	if(!this.gfn_isNull(strSearchValue))
        	{
        		var strSvc      = "SearchGwamok";
        		var strUrl      = "/prj/com/Retrieve_P03.do";
        		var strInDs     = "ds_input=ds_input1";
        		var strOutDs    = "dsGamok=dsMaster";
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

        	}

        	if(this.dsGwamok.rowcount == 1)
        	{
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "GYOGWAMOK_CD", this.dsGwamok.getColumn(0,"GYOGWAMOK_CD"));
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "GYOGWAMOK_NM", this.dsGwamok.getColumn(0,"GYOGWAMOK_NM"));
        	} else
        	{
        		var oArg = {gyogwamokCdNm:strSearchValue};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";
        		this.gfn_openPopup("gwamok","com::COMM_P03.xfdl",oArg,sPopupCallBack,oOption);
        	}
        };

        /**********************************************************************
                14. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj,e)
        {
            this.gfn_gridSort(obj,e);
        };

        this.ds_input_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "DAMDANGGYOSU_NM")
        	{
        	   if (this.gfn_isNull(e.newvalue)) {
        	       obj.setColumn(obj.rowposition, "DAMDANGGYOSU_CD", "");
        	   } else {
        			if (e.oldvalue != e.newvalue)
        			{
        				this.fn_setCallSawonPopup(e.columnid, e.newvalue);
        			}
        	   }
        	}
        	else if (e.columnid == "GYOGWAMOK_NM")
        	{
        	   if (this.gfn_isNull(e.newvalue)) {
        	       obj.setColumn(obj.rowposition, "GYOGWAMOK_CD", "");
        	   } else {
        			if (e.oldvalue != e.newvalue)
        			{
        				this.fn_setCallGwamokPopup(e.columnid, e.newvalue);
        			}
        	   }
        	}
        };

        /**********************************************************************
                16. 검색창 엔터키 조회
        ***********************************************************************/
        this.divSearch_spnSearchYYYY_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"YYYY",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchHakgi_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"HAKGI",obj.value);
        		this.fn_Ret();
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.stc_09_00.addEventHandler("onclick",this.stc_09_00_onclick,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onkeydown",this.divSearch_spnSearchYYYY_onkeydown,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onchanged",this.divSearch_spnSearchYYYY_onchanged,this);
            this.divSearch.form.cboSearchHakgi.addEventHandler("onkeydown",this.divSearch_cboSearchHakgi_onkeydown,this);
            this.divSearch.form.btnSearchSawon.addEventHandler("onclick",this.divSearch_btnSearchSawon_onclick,this);
            this.divSearch.form.edtSearchNm.addEventHandler("onchanged",this.div_01_edtSearchJugwanDeptNm_onchanged,this);
            this.divSearch.form.btnSearchGwamok.addEventHandler("onclick",this.divSearch_btnSearchGwamok_onclick,this);
            this.divSearch.form.edtSearchGwamokNm.addEventHandler("onchanged",this.div_01_edtSearchJugwanDeptNm_onchanged,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.ds_input.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
        };
        this.loadIncludeScript("UL04_2020410_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
