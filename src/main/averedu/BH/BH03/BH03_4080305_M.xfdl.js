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
            this.set_titletext("퇴사신청서 접수/리스트");
            this.set_color("blue");
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
            obj._setContents("<ColumnInfo><Column id=\"SCHL_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"SCHL_SMST\" type=\"STRING\" size=\"2\"/><Column id=\"STNT_NUMB\" type=\"STRING\" size=\"15\"/><Column id=\"STNT_KNAM\" type=\"STRING\" size=\"50\"/><Column id=\"BLNG_DEPT\" type=\"STRING\" size=\"65532\"/><Column id=\"STNT_SEXC\" type=\"STRING\" size=\"1\"/><Column id=\"RWPN_SCOR\" type=\"STRING\" size=\"65532\"/><Column id=\"CELL_NUMB\" type=\"STRING\" size=\"65532\"/><Column id=\"TELE_NUMB\" type=\"STRING\" size=\"65532\"/><Column id=\"CMPN_ADDR\" type=\"STRING\" size=\"601\"/><Column id=\"PASS_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"JOIN_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"QUIT_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"ASSN_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"DEUN_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"STNT_GUBN\" type=\"STRING\" size=\"4\"/><Column id=\"STAT_GUBN\" type=\"STRING\" size=\"2\"/><Column id=\"ASSN_ROOM\" type=\"STRING\" size=\"65532\"/><Column id=\"RMRK_NOTE\" type=\"STRING\" size=\"100\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"SCHL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SCHL_SMST\" type=\"STRING\" size=\"256\"/><Column id=\"APLY_STRT\" type=\"STRING\" size=\"256\"/><Column id=\"APLY_ENDD\" type=\"STRING\" size=\"256\"/><Column id=\"STNT_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"STNT_KNAM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetail", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SCHL_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"SCHL_SMST\" type=\"STRING\" size=\"2\"/><Column id=\"STNT_NUMB\" type=\"STRING\" size=\"15\"/><Column id=\"STNT_KNAM\" type=\"STRING\" size=\"50\"/><Column id=\"BLNG_DEPT\" type=\"STRING\" size=\"65532\"/><Column id=\"APLY_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"RESN_NOTE\" type=\"STRING\" size=\"100\"/><Column id=\"RMRK_NOTE\" type=\"STRING\" size=\"100\"/><Column id=\"KEYY_GUBN\" type=\"STRING\" size=\"2\"/><Column id=\"CERT_GUBN\" type=\"STRING\" size=\"2\"/><Column id=\"PROC_YORN\" type=\"STRING\" size=\"2\"/><Column id=\"LIST_NUMB\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCurrSchl", this);
            obj._setContents("<ColumnInfo><Column id=\"SCHL_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"SCHL_SMST\" type=\"STRING\" size=\"2\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inputCurrSchl", this);
            obj._setContents("<ColumnInfo><Column id=\"DATE_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgi", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Y</Col><Col id=\"CODE_NM\">반납</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"CODE_NM\">미반납</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Y</Col><Col id=\"CODE_NM\">처리</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"CODE_NM\">미처리</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01_00","1000","42","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","1","46","85","31",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("관생 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","85","51","200","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","71","1640","8",null,null,null,null,null,null,this);
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

            obj = new Grid("grdMaster","0","79","400",null,null,"0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsMaster");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"130\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" text=\"학번\"/><Cell col=\"3\" text=\"성명\"/><Cell col=\"4\" text=\"학부/학과\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" editmaxlength=\"1\"/><Cell col=\"1\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"2\" text=\"bind:STNT_NUMB\"/><Cell col=\"3\" text=\"bind:STNT_KNAM\"/><Cell col=\"4\" text=\"bind:BLNG_DEPT\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch00","0","0",null,"42","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01_00","0","9","50","22",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("1");
            obj.set_text("년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","60","9","120","22",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("2");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01","180","9","80","22",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("3");
            obj.set_text("학기");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgi","270","9","120","22",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("0");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsHakgi");
            obj.set_text("");
            obj.set_index("0");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01","260","0","10","42",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","180","0","56","42",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("5");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","50","0","10","42",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","42",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("7");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","0","32","1640","9",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("8");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","0","0","1640","9",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("9");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01_00","390","9","115","22",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("10");
            obj.set_text("퇴사신청일");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00","390","0","56","42",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("11");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_00","505","0","10","42",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Calendar("calSearchBirthDayFrdt","515","9","130","22",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("13");
            obj.set_dateformat("yyyy-MM-dd");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("Static00_00","645","9","20","22",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("14");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Calendar("calSearchBirthDayTodt","665","9","130","22",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("15");
            obj.set_dateformat("yyyy-MM-dd");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("stc_01_02_00","795","9","80","22",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("16");
            obj.set_text("학번");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("stc_01_02_00_00","1005","9","80","22",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("17");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00","795","0","56","42",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("18");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_00_00","875","0","10","42",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("19");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Edit("edtSearchStntName","885","9","120","22",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("20");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00_00","1005","0","56","42",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("21");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_00_00_00","1085","0","10","42",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("22");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Edit("edtSearchStntKnam","1095","9","120","22",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("23");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Grid("grdDetail","430","79",null,"500","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("dsDetail");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"150\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"200\"/><Column size=\"60\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" text=\"접수일\"/><Cell col=\"3\" text=\"학번\"/><Cell col=\"4\" text=\"성명\"/><Cell col=\"5\" text=\"학부/학과\"/><Cell col=\"6\" text=\"관생증\"/><Cell col=\"7\" text=\"KEY\"/><Cell col=\"8\" text=\"사유\"/><Cell col=\"9\" text=\"처리여부\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" editmaxlength=\"1\"/><Cell col=\"1\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"2\" text=\"bind:APLY_DATE\" edittype=\"date\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"3\" text=\"bind:STNT_NUMB\"/><Cell col=\"4\" text=\"bind:STNT_KNAM\"/><Cell col=\"5\" text=\"bind:BLNG_DEPT\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:CERT_GUBN\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"dsYn\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"7\" text=\"bind:KEYY_GUBN\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"dsYn\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"8\" text=\"bind:RESN_NOTE\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"9\" text=\"bind:PROC_YORN\" combodataset=\"dsProc\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\" displaytype=\"combotext\" edittype=\"combo\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","400","42","30",null,null,"0",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("30");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","430","46","145","31",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("관생 퇴사신청 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCntDetail","575","51","200","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelDown",null,"48","110","25","3",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("엑셀 다운로드");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnCheori",null,"48","80","25","btnExcelDown:3",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("퇴사처리");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd","401","262","28","60",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("▶");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_01_00","430","587","870","28",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00_01_00","430","587","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("접수일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00","430","579",null,"8","0",null,null,null,null,null,this);
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

            obj = new Static("stc_13_06_01_00_00","430","614","870","28",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00_01_00_00","430","614","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("퇴사사유");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00_01_00_01","720","587","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("학번");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00_01_00_01_00","1010","587","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_01_00_00_00","430","641","870","28",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00_01_00_00_00","430","641","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_01_00_01","430","668","870","28",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00_01_00_02","430","668","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("관생증");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00_01_00_01_01","720","668","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("KEY");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboCertGubn","563","671","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_innerdataset("dsYn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Calendar("calAplyDate","563","590","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGyojikwonNo00_01_01_00_00","853","590","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGyojikwonNo00_01_01_00_00_00","1143","590","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtResnNote","563","617","734","22",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtRmrkNote","563","644","734","22",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cboKeyyGubn","852","671","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_innerdataset("dsYn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("퇴사신청서 접수/리스트");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch00.form.spnSearchYYYY","value","ds_input","SCHL_YEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch00.form.cboSearchHakgi","value","ds_input","SCHL_SMST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch00.form.calSearchBirthDayFrdt","value","ds_input","APLY_STRT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch00.form.calSearchBirthDayTodt","value","ds_input","APLY_ENDD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch00.form.edtSearchStntName","value","ds_input","STNT_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch00.form.edtSearchStntKnam","value","ds_input","STNT_KNAM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","calAplyDate","value","dsDetail","APLY_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edtGyojikwonNo00_01_01_00_00","value","dsDetail","STNT_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edtGyojikwonNo00_01_01_00_00_00","value","dsDetail","STNT_KNAM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edtResnNote","value","dsDetail","RESN_NOTE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edtRmrkNote","value","dsDetail","RMRK_NOTE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","cboCertGubn","value","dsDetail","CERT_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","cboKeyyGubn","value","dsDetail","KEYY_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
            this._addPreloadList("data","","dsDetail");
        };
        
        // User Script
        this.registerScript("BH03_4080305_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): BH03_4080305_M.xfdl(퇴사신청서 접수/리스트)
        * 작 성         일 명: 정진호
        * 작 성         일 자: 2022/10/11
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
        this.lvchkColidDs   = "APLY_DATE";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs = "접수일자";
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
        	// 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strDs    = "dsHakgi";
            // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
        	var strLgcd  = "00022";
        	// 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strComb  = "T";
            var strOptn  = ""; // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId    = "Init";
        	// gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
        	// 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.gfn_CmmnMultiComboLoad(strDs, strLgcd, strComb, strOptn, svcId);

        	// 생활관일정
        	this.fn_getCurrSchl();
        	// 신청일자 기본값
        	this.fn_setAplyDate();
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
                    case "singleInit":
                            this.fn_PostSingleInt();
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
                    case "GetCurrSchl":
                            this.fn_PostGetCurrSchl();
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
        				this.fn_RetDetail();
                    break;
                case "del" :         // 삭제
                        this.fn_Del();
                    break;
                case "save" :        // 저장
                        this.fn_Save();
                    break;
                case "tmp1" :        // 여분버튼1
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
            var strUrl      = "/prj/BH/BH03/Retrieve_4080305_MList.do";
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
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        };

        /**
         * 기능 : 조회 후 실행
         */
        this.fn_PostRet = function()
        {
            this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
        };
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreRetDetail = function()
        {
            // 조회조건 셋팅
            return true;
        };

        /**
         * 기능 : 디테일 조회 실행
         */
        this.fn_RetDetail = function()
        {
            if(!this.fn_PreRetDetail())
            {
                return false;
            }
            var strSvc      = "RetDetail";
            var strUrl      = "/prj/BH/BH03/Retrieve_4080305_DList.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsDetail=dsMaster";
            var strArg      = "";
            var GBV_MENUID    = objApp.gv_cutPrgId;
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
        this.fn_PostRetDetail = function()
        {
            this.gfn_getRowCount(this.staRowCntDetail,this.dsDetail);
        };

        /**********************************************************************
                06. 추가 함수 선언
        ***********************************************************************/
        /**********************************************************************
                07. 삭제 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 삭제 버튼 실행
         */
        this.fn_PreDel = function()
        {
            //멀티삭제용도
            if(this.dsDetail.rowcount < 1 || this.dsDetail.findRow("CHK",1) == -1)
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
            this.dsDetail.set_enableevent(false);
            for(var i=this.dsDetail.rowcount-1;i>-1;i--)
            {
                if(this.dsDetail.getColumn(i,"CHK") == "1" || this.dsDetail.getRowType(i) == 2)
                {
                    this.dsDetail.deleteRow(i);
                }
            }
            this.dsDetail.set_enableevent(true);

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
            var strUrl      = "/prj/BH/BH03/Delete_4080305_MList.do";
            var strInDs     = "dsMaster=dsDetail:u";
            var strOutDs    = "";
            var strArg      = "";
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;                                   //샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        };

        this.fn_PostDel = function()
        {
            this.gfn_getRowCount(this.staRowCntDetail,this.dsDetail);
        };

        /**********************************************************************
                08. 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave = function()
        {
            if(this.dsDetail.rowcount > 0)
            {
                for(var i=0;i<this.dsDetail.rowcount; i++)
                {
                    if(this.dsDetail.getColumn(i,"CHK") == "0")
                    {
                        continue;
                    }
                    this.dsDetail.setColumn(i,"CHK","0");
                }
            }

            if(!this.gfn_isUpdate(this.dsDetail))
            {
                this.gfn_alert("변경된 이력이 없습니다.","저장정보","","question");
                return false;
            }

            // 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
            var chkFocusFlg = true;
            var result      = this.gfn_cmmnChkEssentialItem(this.dsDetail, this.lvchkColidDs, this.lvchkColNameDs, this.grdDetail, chkFocusFlg, this);

            if (result[0] != "success")
            {
                this.gfn_alert(result[0],"저장정보","","question");
                this.dsDetail.set_rowposition(result[1]); //데이터셋 변경
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
            var strUrl      = "/prj/BH/BH03/Save_4080305_MList.do";
            var strInDs     = "ds_input=ds_input:a ";
                strInDs    += "dsMaster=dsDetail:u";
            var strOutDs    = "dsMaster=dsMaster";
            var strArg      = "";
            var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        };
        /**
         *      기능 : 저장시 후처리
         */
        this.fn_PostSave = function()
        {
            this.gfn_getRowCount(this.staRowCntDetail,this.dsDetail);
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
        this.fn_Excel = function()
        {
            if(this.dsDetail.rowcount < 1)
            {
                this.gfn_alert("출력할 엑셀데이터가 없습니다.", "EXCEL 정보" ,"","information");
                return false;
            }
            var result = this.gfn_confirm( "Excel를 출력하시겠습니까?", "EXCEL 출력","","question" );
            if(result == 0)
            {
               return false;
            }
            this.gfn_excelExport(this.grdDetail, "시트이름","파일이름");

        };

        /**********************************************************************
                13. Get, Set Method
        ***********************************************************************/
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
         *      그리드멀티 체크
         */
        this.grdDetail_onheadclick = function(obj,e)
        {
            if(e.cell == this.grdDetail.getBindCellIndex("body","CHK"))
            {
                this.gfn_checkAll(obj, e);
            }
        };

        /**
         *      그리드멀티 소트정열
         */
        this.grdDetail_onheaddblclick = function(obj,e)
        {
            if(e.cell != this.grdDetail.getBindCellIndex("body","CHK") && e.cell != 1)
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

        // 생활관일정
        this.fn_getCurrSchl = function() {
        	this.ds_inputCurrSchl.setColumn(0, "DATE_CODE", "1");

            var strSvc      = "GetCurrSchl";
            var strUrl      = "/prj/BH/BH_COMMON/GET_CURR_SCHL.do";
            var strInDs     = "ds_input=ds_inputCurrSchl";
            var strOutDs    = "dsCurrSchl=dsMaster";
            var strArg      = "";
            var GBV_MENUID  = objApp.gv_cutPrgId;
            if (!this.gfn_isNull(this.gfn_trim(GBV_MENUID))) {
            	strArg     += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        }
        this.fn_PostGetCurrSchl = function() {
        	this.ds_input.setColumn(0, "SCHL_YEAR", this.dsCurrSchl.getColumn(0, "SCHL_YEAR"));
        	this.ds_input.setColumn(0, "SCHL_SMST", this.dsCurrSchl.getColumn(0, "SCHL_SMST"));
        }

        // 신청일 오늘날짜 셋팅
        this.fn_setAplyDate = function() {
        	var todayDt = objApp.gds_SystemDate.getColumn(0, "YYYYMMDD");
        	//this.ds_input.setColumn(0, "APLY_STRT", todayDt);
        	this.ds_input.setColumn(0, "APLY_ENDD", todayDt);
        }

        this.fn_onKeyDown = function(obj, e) {
        	if (e.keycode == "13") {
        		this.fn_Ret();
        		this.fn_RetDetail();
        	}
        }

        // 성명입력 시, 관생 기본 목록 필터처리
        this.divSearch00_edtSearchStntKnam_onkeyup = function(obj,e)
        {
        	if (!this.gfn_isNull(this.gfn_trim(obj.value))) {
        		this.dsMaster.set_filterstr("");
        	} else {
        		this.dsMaster.set_filterstr("STNT_KNAM.toString().indexOf(" + nexacro.wrapQuote(obj.value) + ") >= 0");
        	}

        	this.dsMaster.set_rowposition(0);
        };

        // 퇴사신청목록 등록
        this.fn_add = function(index) {
        	var nRow = this.dsDetail.insertRow();
        	this.dsDetail.setColumn(nRow, "CHK", 0);
        	this.dsDetail.setColumn(nRow, "SCHL_YEAR", this.dsMaster.getColumn(index, "SCHL_YEAR"));
        	this.dsDetail.setColumn(nRow, "SCHL_SMST", this.dsMaster.getColumn(index, "SCHL_SMST"));
        	this.dsDetail.setColumn(nRow, "STNT_NUMB", this.dsMaster.getColumn(index, "STNT_NUMB"));
        	this.dsDetail.setColumn(nRow, "STNT_KNAM", this.dsMaster.getColumn(index, "STNT_KNAM"));
        	this.dsDetail.setColumn(nRow, "BLNG_DEPT", this.dsMaster.getColumn(index, "BLNG_DEPT"));
        	this.dsDetail.setColumn(nRow, "CERT_GUBN", "N");
        	this.dsDetail.setColumn(nRow, "KEYY_GUBN", "N");
        	this.dsDetail.setColumn(nRow, "PROC_YORN", "N");
        	this.dsDetail.setColumn(nRow, "APLY_DATE", objApp.gds_SystemDate.getColumn(0, "YYYYMMDD"));

        	this.dsMaster.deleteRow(index);
        }

        // 관생 기본 목록 셀 더블클릭 시 관생 퇴사신청 목록 이동
        this.grdMaster_oncelldblclick = function(obj,e)
        {
        	this.fn_add(this.dsMaster.rowposition);
        };

        this.btnAdd_onclick = function(obj,e)
        {
        	this.dsDetail.set_enableevent(false);
        	this.dsMaster.set_enableevent(false);

        	for (var i = 0; i < this.dsMaster.rowcount; i++) {
        		if (this.dsMaster.getColumn(i, "CHK") == 1) {
        			this.fn_add(i);
        		}
        	}

        	this.dsDetail.set_enableevent(true);
        	this.dsMaster.set_enableevent(true);
        };

        // 관생 퇴사신청 목록 행 선택 변경시 접수일자에 따른 처리
        this.dsDetail_onrowposchanged = function(obj,e)
        {
        	var rowType = obj.getRowType(e.newrow);
        	if (rowType == 2) { // 신규
        		this.grdDetail.setCellProperty("body", 2, "edittype", "date");
        		this.calAplyDate.set_readonly(false);
        	} else {
        		this.grdDetail.setCellProperty("body", 2, "edittype", "none");
        		this.calAplyDate.set_readonly(true);
        	}

        	if (this.dsDetail.rowcount == 0) {
        		this.edtResnNote.set_readonly(true);
        		this.edtRmrkNote.set_readonly(true);
        		this.cboCertGubn.set_readonly(true);
        		this.cboKeyyGubn.set_readonly(true);
        	} else {
        		this.edtResnNote.set_readonly(false);
        		this.edtRmrkNote.set_readonly(false);
        		this.cboCertGubn.set_readonly(false);
        		this.cboKeyyGubn.set_readonly(false);
        	}
        };

        // 엑셀 다운로드 (기존 엑셀 버튼 동작 X)
        this.btnExcelDown_onclick = function(obj,e)
        {
        	this.fn_Excel();
        };

        // 퇴사처리
        this.btnCheori_onclick = function(obj,e)
        {
        	var schlYear = this.ds_input.getColumn(0, "SCHL_YEAR");
        	var schlSmst = this.ds_input.getColumn(0, "SCHL_SMST");
        	var oArg = {schlYear:schlYear, schlSmst:schlSmst};
        	var oOption = {};
        	var sPopupCallBack = "fn_popupCallback";
        	this.gfn_openPopup("popup","BH03::BH03_4080305_P01.xfdl",oArg,sPopupCallBack,oOption);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster.addEventHandler("onselectchanged",this.grdMaster_onselectchanged,this);
            this.grdMaster.addEventHandler("oncelldblclick",this.grdMaster_oncelldblclick,this);
            this.divSearch00.form.spnSearchYYYY.addEventHandler("onkeydown",this.fn_onKeyDown,this);
            this.divSearch00.form.cboSearchHakgi.addEventHandler("onitemchanged",this.divSearch_cboSearchHakgi_onitemchanged,this);
            this.divSearch00.form.cboSearchHakgi.addEventHandler("onkeydown",this.fn_onKeyDown,this);
            this.divSearch00.form.calSearchBirthDayFrdt.addEventHandler("onkeydown",this.fn_onKeyDown,this);
            this.divSearch00.form.calSearchBirthDayTodt.addEventHandler("onkeydown",this.fn_onKeyDown,this);
            this.divSearch00.form.edtSearchStntName.addEventHandler("onkeydown",this.fn_onKeyDown,this);
            this.divSearch00.form.edtSearchStntKnam.addEventHandler("onkeydown",this.fn_onKeyDown,this);
            this.divSearch00.form.edtSearchStntKnam.addEventHandler("onkeyup",this.divSearch00_edtSearchStntKnam_onkeyup,this);
            this.grdDetail.addEventHandler("onselectchanged",this.grdMaster_onselectchanged,this);
            this.grdDetail.addEventHandler("onheadclick",this.grdDetail_onheadclick,this);
            this.grdDetail.addEventHandler("onheaddblclick",this.grdDetail_onheaddblclick,this);
            this.btnExcelDown.addEventHandler("onclick",this.btnExcelDown_onclick,this);
            this.btnCheori.addEventHandler("onclick",this.btnCheori_onclick,this);
            this.btnAdd.addEventHandler("onclick",this.btnAdd_onclick,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsMaster.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
            this.dsMaster.addEventHandler("cancolumnchange",this.dsMaster_cancolumnchange,this);
            this.dsDetail.addEventHandler("onrowposchanged",this.dsDetail_onrowposchanged,this);
            this.dsCurrSchl.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
            this.ds_inputCurrSchl.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
        };
        this.loadIncludeScript("BH03_4080305_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
