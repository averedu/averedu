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
            this.set_titletext("단체활동내역접수");
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
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"DANCHE_CD\" type=\"STRING\" size=\"10\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"GYEOLGWA_BOGO_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIGEUBJA_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GWANLI_DEPT_CD\" type=\"STRING\" size=\"8\"/><Column id=\"HWALDONG_SIJAK_DT\" type=\"DATE\" size=\"8\"/><Column id=\"HWALDONG_JONGRYO_DT\" type=\"DATE\" size=\"8\"/><Column id=\"HWALDONG_NAEYONG\" type=\"STRING\" size=\"4000\"/><Column id=\"GEONUI_SAHANG\" type=\"STRING\" size=\"4000\"/><Column id=\"SINCHEONG_DT\" type=\"DATE\" size=\"8\"/><Column id=\"HOEWON_CNT1\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HOEWON_CNT2\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HOEWON_CNT3\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HOEWON_CNT4\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHONGINWON\" type=\"STRING\" size=\"256\"/><Column id=\"CHEORI_SANGTAE_GBCD\" type=\"STRING\" size=\"8\"/><Column id=\"CHEORI_SANGTAE_GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"CEOMBU_FILE_NO\" type=\"STRING\" size=\"32\"/><Column id=\"BANRYEO_SAYU\" type=\"STRING\" size=\"4000\"/><Column id=\"BIGO\" type=\"STRING\" size=\"4000\"/><Column id=\"DANCHE_GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"DANCHE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DAEPYO_HAKBEON\" type=\"STRING\" size=\"256\"/><Column id=\"DAEPYO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DAEPYO_HAKGWA\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/><Column id=\"CEOMBU_FILE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"GWANLI_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GWANLI_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DANCHE_BUNRYU_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"CHEORI_SANGTAE_GBCD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YYYY\"/><Col id=\"GWANLI_DEPT_CD\"/><Col id=\"DANCHE_BUNRYU_GBCD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCheoriSangtae", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDancheBunryu", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input1", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDummy", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDept", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBaseYyyyHakgi", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdMaster","0","86",null,null,"1015","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"62\"/><Column size=\"60\"/><Column size=\"98\"/><Column size=\"73\"/><Column size=\"75\"/><Column size=\"110\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"처리&#13;&#10;상태\"/><Cell col=\"1\" text=\"단체&#13;&#10;구분\"/><Cell col=\"2\" text=\"단체명\"/><Cell col=\"3\" text=\"대표학생&#13;&#10;학번\"/><Cell col=\"4\" text=\"대표학생&#13;&#10;성명\"/><Cell col=\"5\" text=\"대표학생&#13;&#10;학과\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:CHEORI_SANGTAE_GBNM\" editmaxlength=\"256\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:DANCHE_GBNM\" editmaxlength=\"256\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:DANCHE_NM\" editmaxlength=\"256\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:DAEPYO_HAKBEON\" editmaxlength=\"256\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:DAEPYO_NM\" editmaxlength=\"256\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:DAEPYO_HAKGWA\" editmaxlength=\"256\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_00","0","0",null,"41","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01","-18","8","80","22",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("6");
            obj.set_text("학년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_00.addChild(obj.name, obj);

            obj = new Spin("SpinSearchYYYY","72","8","169","22",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("0");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("stc_01_00","266","8","80","22",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("7");
            obj.set_text("관리부서");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_00.addChild(obj.name, obj);

            obj = new Edit("edtSearchDeptCd","356","8","145","22",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            this.div_00.addChild(obj.name, obj);

            obj = new Button("btnDept","509","8","22","22",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_PopSrch");
            obj.set_text("");
            this.div_00.addChild(obj.name, obj);

            obj = new Edit("edtSearchDeptNm","539","8","145","22",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("3");
            obj.set_enable("true");
            this.div_00.addChild(obj.name, obj);

            obj = new Combo("cboSearchDancheBunryu","800","8","169","22",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsDancheBunryu");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_enable("true");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("stc_04","693","8","95","22",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("8");
            obj.set_text("단체분류");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","1002","8","71","22",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("9");
            obj.set_text("처리상태");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_00.addChild(obj.name, obj);

            obj = new Combo("cboSearchCheoriSangtae","1082","8","169","22",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsCheoriSangtae");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_enable("true");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("stc_09_00","0","61","135","22",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("단체활동내역목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00",null,"86","1005","28","0",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00",null,"86","150","28","855",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("활동기간");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_00",null,"86","150","28","265",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("신청일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_02",null,"142","1005","335","0",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_02",null,"142","150","335","855",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("활동내용");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHwaldongNaeyong",null,"179","846","296","6",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00",null,"89","25","22","625",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btnFile",null,"148","127","25","726",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("활동내역 파일받기");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_04_01",null,"114","1005","28","0",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_04_01",null,"114","150","28","855",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("회원수");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHaknyeon1",null,"117","109","22","699",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00",null,"117","42","22","808",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("1학년");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHaknyeon2",null,"117","109","22","529",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00",null,"117","42","22","638",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("2학년");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHaknyeon3",null,"117","109","22","364",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00",null,"117","42","22","473",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("3학년");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHaknyeon4",null,"117","109","22","198",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00",null,"117","42","22","307",null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("4학년");
            this.addChild(obj.name, obj);

            obj = new Edit("edtChongInwon",null,"117","109","22","30",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00",null,"117","42","22","139",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("총인원");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_02_00",null,"477","1005",null,"0","0",null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_02_00",null,"477","150",null,"855","0",null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("건의사항");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGeunuiSahang",null,"480","846",null,"6","4",null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stRowCnt","140","60","73","24",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calHwaldongSijakDt",null,"89","194","22","659",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Calendar("calHwaldongJongryoDt",null,"89","202","22","418",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSincheongDt",null,"89","255","22","7",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnHwaldong",null,"53","100","25","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("활동내역보기");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","40",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00","63","0","10","40",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","0","78",null,"8","0",null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","390","41","100","45",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("↑45\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_01","242","1","56","40",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","347","0","10","40",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","720","0","100","9",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","720","31","100","9",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00","685","1","56","40",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","791","0","10","40",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00_00","970","1","56","40",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","1073","0","10","40",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCeombuFileNm","btnFile:5","149",null,"22","6",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnJeopsu",null,"53","60","25","1081",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("접수");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcel",null,"53","60","25","1015",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("단체활동내역접수");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item6","calHwaldongSijakDt","value","dsMaster","HWALDONG_SIJAK_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","calHwaldongJongryoDt","value","dsMaster","HWALDONG_JONGRYO_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","calSincheongDt","value","dsMaster","SINCHEONG_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edtHaknyeon1","value","dsMaster","HOEWON_CNT1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edtHaknyeon2","value","dsMaster","HOEWON_CNT2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edtHaknyeon3","value","dsMaster","HOEWON_CNT3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","edtHaknyeon4","value","dsMaster","HOEWON_CNT4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","edtChongInwon","value","dsMaster","CHONGINWON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","edtHwaldongNaeyong","value","dsMaster","HWALDONG_NAEYONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","edtGeunuiSahang","value","dsMaster","GEONUI_SAHANG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_00.form.SpinSearchYYYY","value","ds_input","YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_00.form.edtSearchDeptCd","value","ds_input","GWANLI_DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_00.form.edtSearchDeptNm","value","ds_input","GWANLI_DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_00.form.cboSearchDancheBunryu","value","ds_input","DANCHE_BUNRYU_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_00.form.cboSearchCheoriSangtae","value","ds_input","CHEORI_SANGTAE_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","edtCeombuFileNm","value","dsMaster","CEOMBU_FILE_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
            this._addPreloadList("data","","dsDummy");
        };
        
        // User Script
        this.registerScript("UD01_2110105_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UD01_2110105_M.xfdl(단체활동내역접수)
        * 작 성         일 명: jiback
        * 작 성         일 자: 2020/12/03
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

        this.strKeyValue 	= "";  // 저장 후 row 유지
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

            // 기준연도학기
            strDs    = "dsBaseYyyyHakgi";        // 데이터를 받을 데이터셋리스트     예) "dsBaseYyyyHakgi"
            svcId    = "baseYyyyHakgiInit";
        	var strEopmuGbcd = "UL";
        	var strUseYn     = "1";
            // gfn_BaseYyyyHakgiLoad(데이터셋, svcId , 업무구분, 사용구분);
            // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.gfn_BaseYyyyHakgiLoad(strDs
                                      , svcId
                                      , strEopmuGbcd
                                      , strUseYn);

            //사용자 화면  초기화 함수
            this.fn_formInit();
        };

        /**********************************************************************
                04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        this.fn_PostBaseYyyyHakgiInit = function()
        {

        };

        this.fn_formInit = function()
        {
            var strDs    = "dsCheoriSangtae|dsDancheBunryu";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "80306|80302";                         // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "T|T";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = "";                                      // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId    = "Init";

                // gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
                // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.

            this.gfn_CmmnMultiComboLoad(strDs
                                      , strLgcd
                                      , strComb
                                      , strOptn
                                      , svcId);

        };

        this.fn_PostformInit = function()
        {
            this.ds_input.setColumn(0,"DANCHE_BUNRYU_GBCD",null);  //단체분류
        	this.ds_input.setColumn(0,"YYYY", this.dsBaseYyyyHakgi.getColumn(0, "YYYY"));
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
                    case "New":
                            this.fn_PostNew();
                        break;
                    case "Del":
                            this.fn_PostDel();
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
        		case "Dept" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					this.ds_input.set_enableevent(false);
        					this.ds_input.setColumn(this.ds_input.rowposition, "GWANLI_DEPT_CD", sRtn[0]);
        					this.ds_input.setColumn(this.ds_input.rowposition, "GWANLI_DEPT_NM", sRtn[1]);
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
                case "save" :        // 저장
                        this.fn_Save();
                    break;
                case "excel" :       // 엑셀
                        this.fn_Excel();
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
            var strUrl      = "/prj/UD/UD01/Retrieve_2110105_M.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsMaster=dsMaster";
            var strArg      = "";
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
         * 기능 : 조회 후 실행
         */
        this.fn_PostRet = function()
        {
            this.gfn_getRowCount(this.stRowCnt,this.dsMaster);
        };

        /**********************************************************************
                06. 접수 함수 선언
        ***********************************************************************/
        this.btnJeopsu_onclick = function(obj,e)
        {
        	this.fn_Save();
        };

        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave = function()
        {
        	var CheckRow = this.dsMaster.rowposition;

        	// 처리상태가 접수일 경우
        	if(this.dsMaster.getColumn(CheckRow, "CHEORI_SANGTAE_GBCD") == "2")
        	{
        		this.gfn_alert("이미 접수한 항목입니다.","승인정보","","warning");
                return false;
        	}

        	// 처리상태가 없거나 미제출인 경우
        	if(this.dsMaster.getColumn(CheckRow, "CHEORI_SANGTAE_GBCD") == null || this.dsMaster.getColumn(CheckRow, "CHEORI_SANGTAE_GBCD") == "0")
        	{
        		this.gfn_alert("먼저 결과보고서를 제출해주세요.","승인정보","","warning");
                return false;
        	}

        	if(this.dsMaster.getColumn(CheckRow, "CHEORI_SANGTAE_GBCD") == "1")
        	{
        		var result = this.gfn_confirm( "현재 선택행을 접수하시겠습니까?", "신청정보","","question" );
        		if(result == 0)
        		{
        			return false;
        		}
        		this.dsMaster.setColumn(CheckRow, "CHEORI_SANGTAE_GBCD", "2");
        		return true;
        	}
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

        	this.strKeyValue = this.dsMaster.getColumn(this.dsMaster.rowposition, "GYEOLGWA_BOGO_CNT");

            var strSvc      = "Save";
            var strUrl      = "/prj/UD/UD01/Save_2110105_M.do";
            var strInDs     = "ds_input=ds_input:a ";
                strInDs    += "dsMaster=dsMaster:u";
            var strOutDs    = "dsMaster=dsMaster";
            var strArg      = "";
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
        	if (!this.gfn_isNull(this.strKeyValue)) {
        		var nRow = this.dsMaster.findRow("GYEOLGWA_BOGO_CNT", this.strKeyValue);
        		this.dsMaster.set_rowposition(nRow);
        		this.strKeyValue = "";
        	}

            this.gfn_getRowCount(this.stRowCnt,this.dsMaster);
        };

        /**********************************************************************
                07. ExcelDnwn 엑셀로 출력
        ***********************************************************************/
        this.btnExcel_onclick = function(obj,e)
        {
        	this.fn_Excel();
        };

        this.fn_Excel = function()
        {
            if(this.dsMaster.rowcount < 1)
            {
                this.gfn_alert("출력할 엑셀데이터가 없습니다.", "EXCEL 정보" ,"","information");
                return false;
            }
            var result = this.gfn_confirm( "Excel를 출력하시겠습니까?", "EXCEL 출력","","question" );
            if(result == 0)
            {
               return false;
            }
            this.gfn_excelExport(this.grdMaster, "단체 활동 내역 목록","단체 활동 내역 목록");

        };

        /**********************************************************************
                08. 기타 Control Event
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
            if(e.cell != this.grdMaster.getBindCellIndex("body","CHK"))
            {
                this.gfn_gridSort(obj,e);
            }
        };

        // 엔터키 누르면 조회
        this.div_00_SpinSearchYYYY_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"YYYY",obj.value);
        		this.fn_Ret();
        	}
        };

        // 엔터키 누르면 조회
        this.div_00_cboSearchDancheBunryu_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"DANCHE_BUNRYU_GBCD",obj.value);
        		this.fn_Ret();
        	}
        };

        // 엔터키 누르면 조회
        this.div_00_cboSearchCheoriSangtae_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"CHEORI_SANGTAE_GBCD",obj.value);
        		this.fn_Ret();
        	}
        };

        /**********************************************************************
                09. 팝업
        ***********************************************************************/
        // 관리부서 팝업
        this.btnDept_onclick = function(obj,e)
        {
        	var deptCdNm = this.div_00.form.edtSearchDeptNm.value;

        	this.fn_setCallDeptPopup(deptCdNm);
        };

        // 활동내역조회 팝업
        this.btnHwaldong_onclick = function(obj,e)
        {
        	var yyyy = this.ds_input.getColumn(0, "YYYY");
        	var gwanliDeptCd = this.ds_input.getColumn(0, "GWANLI_DEPT_CD");
        	var gwanliDeptNm = this.ds_input.getColumn(0, "GWANLI_DEPT_NM");
        	var dancheBunryu = this.ds_input.getColumn(0, "DANCHE_BUNRYU_GBCD");
        	var cheoriSangtae = this.ds_input.getColumn(0, "CHEORI_SANGTAE_GBCD");
        	var oArg = {yyyy:yyyy, gwanliDeptCd:gwanliDeptCd, gwanliDeptNm:gwanliDeptNm, dancheBunryu:dancheBunryu, cheoriSangtae:cheoriSangtae, tx:"1"};
        	var oOption = {};
        	var sPopupCallBack = "fn_popupCallback";
        	this.gfn_openPopup( "hwaldong","UD01::UD01_2110105_P01.xfdl",oArg,sPopupCallBack,oOption);
        };

        /**********************************************************************
                10. 파일첨부
        ***********************************************************************/
        this.btnFile_onclick = function(obj,e)
        {
        	var strAttFileNo = this.dsMaster.getColumn(this.dsMaster.rowposition, "CEOMBU_FILE_NO");
        	this.fn_setCallAttFilePopup(obj.name, strAttFileNo);
        };

        this.ds_input_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "GWANLI_DEPT_NM") {
        	   if (this.gfn_isNull(e.newvalue)) {
        	       obj.setColumn(obj.rowposition, "GWANLI_DEPT_CD", "");
        	   } else {
        			if (e.oldvalue != e.newvalue)
        			{
        				this.fn_setCallDeptPopup(e.newvalue);
        			}
        	   }
        	}
        };

        this.fn_setCallDeptPopup = function(strSearchValue)
        {
        	this.dsDept.clearData();

        	this.ds_input1.setColumn(this.ds_input1.rowposition, "DEPT_NM", strSearchValue);

        	if(!this.gfn_isNull(strSearchValue))
        	{
        		var strSvc 		= "Search";
        		var strUrl 		= "/prj/pop/RetrieveDeptSearchList.do";
        		var strInDs  	= "ds_input=ds_input1";
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
        		this.ds_input.setColumn(this.ds_input.rowposition, "GWANLI_DEPT_CD", this.dsDept.getColumn(0,"DEPT_CD"));
        		this.ds_input.setColumn(this.ds_input.rowposition, "GWANLI_DEPT_NM", this.dsDept.getColumn(0,"DEPT_NM"));
        	} else
        	{
        		var oArg = {deptCdNm:strSearchValue, jojikGbcd:'00', useYn:'1'};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";
        		this.gfn_openPopup( "Dept","com::COMM_P01.xfdl",oArg,sPopupCallBack,oOption);
        	}
        };


        this.fn_setCallAttFilePopup = function(strObj, strAttFileNo)
        {
        	if (!this.gfn_isNull(strAttFileNo))
        	{

        		var multFlg     = "S"; 	// 멀티처리 : 싱글처리/멀티처리 S:한로우처리/M:멀티로처리

        		this.ds_input.setColumn(this.ds_input.rowposition, "ATTFL_NO", strAttFileNo);

        		var lv_sFlag01 			= "Y";						// (필수)부모에서 파라미터를 넘길지의 여부 (Y:파라미터넘김 / N:넘기지 않음)
        		var lv_sFlag02			= "Y";						// (필수)팝업이 열렸을때 자동조회를 할 것인가 여부.(Y:자동조회 / N:수동조회)
        		var lv_sFlag03			= multFlg;					// 멀티처리 : 싱글처리/멀티처리 S:한로우처리/M:멀티로처리
        		var lv_sValue01 		= strAttFileNo;				// 부모에서 넘어가는 파라미터(첨부파일번호)
        		var lv_sValue02 		= "8";						// 부모에서 넘어가는 파라미터(파일허용갯수)
        		var lv_sValue03 		= "all";					// 부모에서 넘어가는 파라미터(파일허용유형 all,text,image)
        		var lv_sValue04 		= "";						// 부모에서 넘어가는 파라미터(확장자 ext)
        		var lv_sValue05 		= "univ_UY";				// 부모에서 넘어가는 파라미터(도메인네임)
        		var lv_sValue06 		= "N";                      // 부모에서 넘어가는 파라미터(추가/삭제 보이기)

        		var sPopId 			= "POP101FileUploadP01";
        		var sUrl 			= "pop::POP102FileUploadP01.xfdl";
        		var oArg 			= { pv_sOp01:lv_sFlag01      	// 조회조건 : 조회조건셋팅/조회조건에 미셋팅 Y:조회조건셋팅/조회조건자동셋팅않함.
        							  , pv_sOp02:lv_sFlag02       	// 자동조회 : 바로조회/미조회   Y:자동조회/N:자동조회않임
        							  , pv_sOp03:lv_sFlag03      	// 멀티처리 : 싱글처리/멀티처리 S:한로우처리/M:멀티로처리
        							  , pv_sVal01:lv_sValue01      	// 파라미터1
        							  , pv_sVal02:lv_sValue02       // 파라미터2
        							  , pv_sVal03:lv_sValue03       // 파라미터3
        							  , pv_sVal04:lv_sValue04       // 파라미터4
        							  , pv_sVal05:lv_sValue05       // 파라미터5
        							  , pv_sVal06:lv_sValue06};     // 파라미터6
        		var sPopupCallBack 	= "fn_popupCallback";
        		var oOption 		= {};

        		this.dsDummy.clearData();
        		this.gfn_openPopup( sPopId
        						  , sUrl
        						  , oArg
        						  , sPopupCallBack
        						  , oOption);
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
            this.div_00.form.SpinSearchYYYY.addEventHandler("onkeydown",this.div_00_SpinSearchYYYY_onkeydown,this);
            this.div_00.form.btnDept.addEventHandler("onclick",this.btnDept_onclick,this);
            this.div_00.form.cboSearchDancheBunryu.addEventHandler("onkeydown",this.div_00_cboSearchDancheBunryu_onkeydown,this);
            this.div_00.form.cboSearchCheoriSangtae.addEventHandler("onkeydown",this.div_00_cboSearchCheoriSangtae_onkeydown,this);
            this.btnFile.addEventHandler("onclick",this.btnFile_onclick,this);
            this.btnHwaldong.addEventHandler("onclick",this.btnHwaldong_onclick,this);
            this.btnJeopsu.addEventHandler("onclick",this.btnJeopsu_onclick,this);
            this.btnExcel.addEventHandler("onclick",this.btnExcel_onclick,this);
            this.dsMaster.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
            this.ds_input.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
        };
        this.loadIncludeScript("UD01_2110105_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
