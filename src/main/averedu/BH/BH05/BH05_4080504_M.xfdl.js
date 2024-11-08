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
            this.set_titletext("생활관비 환불관리");
            this.set_color("blue");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMaster01", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SCHL_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"SCHL_SMST\" type=\"STRING\" size=\"2\"/><Column id=\"STNT_NUMB\" type=\"STRING\" size=\"15\"/><Column id=\"STNT_GUBN\" type=\"STRING\" size=\"4\"/><Column id=\"STNT_KNAM\" type=\"STRING\" size=\"50\"/><Column id=\"BLNG_DEPT\" type=\"STRING\" size=\"65532\"/><Column id=\"STNT_SEXC\" type=\"STRING\" size=\"1\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"8\"/><Column id=\"DIFF_SEQU\" type=\"STRING\" size=\"2\"/><Column id=\"ROOM_GUBN\" type=\"STRING\" size=\"20\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster02", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SCHL_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"SCHL_SMST\" type=\"STRING\" size=\"2\"/><Column id=\"STNT_NUMB\" type=\"STRING\" size=\"15\"/><Column id=\"STNT_GUBN\" type=\"STRING\" size=\"4\"/><Column id=\"STNT_KNAM\" type=\"STRING\" size=\"50\"/><Column id=\"BLNG_DEPT\" type=\"STRING\" size=\"65532\"/><Column id=\"STNT_SEXC\" type=\"STRING\" size=\"1\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"8\"/><Column id=\"DIFF_SEQU\" type=\"STRING\" size=\"2\"/><Column id=\"ROOM_GUBN\" type=\"STRING\" size=\"20\"/><Column id=\"FOOD_RTRN\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"MNMT_RTRN\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"ACNT_KNAM\" type=\"STRING\" size=\"50\"/><Column id=\"ACNT_NUMB\" type=\"STRING\" size=\"20\"/><Column id=\"DESC_NOTE\" type=\"STRING\" size=\"100\"/><Column id=\"SUM_RTRN\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"RTRN_DATE\" type=\"STRING\" size=\"8\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"SCHL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SCHL_SMST\" type=\"STRING\" size=\"256\"/><Column id=\"STNT_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"STNT_KNAM\" type=\"STRING\" size=\"256\"/><Column id=\"STNT_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"DIFF_SEQU\" type=\"STRING\" size=\"256\"/><Column id=\"HWANBUL_CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNapbu", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"STNT_NUMB\" type=\"STRING\" size=\"15\"/><Column id=\"SCHL_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"SCHL_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"SCHL_SMST\" type=\"STRING\" size=\"2\"/><Column id=\"DIFF_SEQU\" type=\"STRING\" size=\"2\"/><Column id=\"STNT_KNAM\" type=\"STRING\" size=\"50\"/><Column id=\"STAT_GUBN\" type=\"STRING\" size=\"2\"/><Column id=\"BLNG_DEPT\" type=\"STRING\" size=\"65532\"/><Column id=\"ROOM_GUBN\" type=\"STRING\" size=\"26\"/><Column id=\"AMNT_0001\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"AMNT_0002\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SUM_AMNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"ACNT_NUMB2\" type=\"STRING\" size=\"20\"/><Column id=\"STNT_SEXC\" type=\"STRING\" size=\"1\"/><Column id=\"STNT_GRAD\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHwanbul", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"STNT_NUMB\" type=\"STRING\" size=\"15\"/><Column id=\"SCHL_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"SCHL_SMST\" type=\"STRING\" size=\"2\"/><Column id=\"RTRN_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"RTRN_GUBN\" type=\"STRING\" size=\"2\"/><Column id=\"RTRN_KIND\" type=\"STRING\" size=\"1\"/><Column id=\"MNMT_RTRN\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"FOOD_RTRN\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BANK_CODE\" type=\"STRING\" size=\"3\"/><Column id=\"ACNT_NUMB\" type=\"STRING\" size=\"20\"/><Column id=\"ACNT_KNAM\" type=\"STRING\" size=\"50\"/><Column id=\"DESC_NOTE\" type=\"STRING\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inputNapbu", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"STNT_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"SCHL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SCHL_SMST\" type=\"STRING\" size=\"256\"/><Column id=\"DIFF_SEQU\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSchl", this);
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DIFF_SEQU\" type=\"STRING\" size=\"256\"/><Column id=\"STNT_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"STRT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ENDD_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SCHL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SCHL_SMST\" type=\"STRING\" size=\"256\"/><Column id=\"CURR_GUBN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inputSchl", this);
            obj._setContents("<ColumnInfo><Column id=\"SCHL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SCHL_SMST\" type=\"STRING\" size=\"256\"/><Column id=\"STNT_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DIFF_SEQU\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDiffSequ", this);
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inputDiffSequ", this);
            obj._setContents("<ColumnInfo><Column id=\"SCHL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SCHL_SMST\" type=\"STRING\" size=\"256\"/><Column id=\"STNT_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DIFF_SEQU\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgi", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsStntGubn", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGrdInsil", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGrdGender", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGrdHakgi", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inputHwanbul", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SCHL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SCHL_SMST\" type=\"STRING\" size=\"256\"/><Column id=\"STNT_NUMB\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDtHwanbulKind", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDtHwanbulGubn", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDtHwanbulBank", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Static("stc_09_00","0","46","80","31",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("학생 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","80","51","200","24",null,null,null,null,null,null,this);
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

            obj = new Static("Static01_00_00","1000","327","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster01","0","78",null,null,"0","473",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsMaster01");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_visible("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"150\"/><Column size=\"80\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"학번\"/><Cell col=\"2\" text=\"성명\"/><Cell col=\"3\" text=\"인실\"/><Cell col=\"4\" text=\"성별\"/><Cell col=\"5\" text=\"학과\"/><Cell col=\"6\" text=\"생년월일\" calendardateformat=\"yyyy-MM-dd\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:STNT_NUMB\"/><Cell col=\"2\" text=\"bind:STNT_KNAM\"/><Cell col=\"3\" text=\"bind:ROOM_GUBN\" displaytype=\"combotext\" combodataset=\"dsGrdInsil\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"4\" text=\"bind:STNT_SEXC\" displaytype=\"combotext\" combodataset=\"dsGrdGender\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"5\" text=\"bind:BLNG_DEPT\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:BIRTHDAY\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"42","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01_00","0","9","50","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnSearchSchlYear","60","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01","180","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("학기");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchSchlSmst","270","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsHakgi");
            obj.set_text("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01","260","0","10","42",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","180","0","56","42",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","50","0","10","42",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
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

            obj = new Static("Static01_01_00","0","32","1640","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","0","0","1640","9",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new Static("stc_01_00_01_00","390","9","105","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("학생구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00","390","0","56","42",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_00","495","0","10","42",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgi00","505","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsStntGubn");
            obj.set_text("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01_00_00","625","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("학번");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00","625","0","56","42",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_00_00","705","0","10","42",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchStntName","715","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_readonly("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01_00_00_00","835","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00_00","835","0","56","42",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_00_00_00","915","0","10","42",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchStntName00","925","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_readonly("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01_00_00_00_00","1045","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_text("차수");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00_00_00","1045","0","56","42",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_00_00_00_00","1125","0","10","42",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchDiffSequ","1135","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("25");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsDiffSequ");
            obj.set_text("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01_00_00_00_00_00","1255","9","105","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("26");
            obj.set_text("환불내역");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00_00_00_00","1255","0","56","42",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("27");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_00_00_00_00_00","1360","0","10","42",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("28");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkHwanbul","1370","9","22","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("29");
            obj.set_text("CheckBox00");
            obj.set_truevalue("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00","0","356","1640","8",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","1000",null,"100","35",null,"203",null,null,null,null,this);
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

            obj = new Grid("grdNapbu","0",null,null,"200","0","238",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("dsNapbu");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"학번\"/><Cell col=\"2\" text=\"등록년도\"/><Cell col=\"3\" text=\"등록학기\"/><Cell col=\"4\" text=\"납입일자\"/><Cell col=\"5\" text=\"생활관비\"/><Cell col=\"6\" text=\"식대\"/><Cell col=\"7\" text=\"실납부금액\"/><Cell col=\"8\" text=\"등록은행\"/><Cell col=\"9\" text=\"계좌번호\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:STNT_NUMB\"/><Cell col=\"2\" text=\"bind:SCHL_YEAR\"/><Cell col=\"3\" text=\"bind:SCHL_SMST\" displaytype=\"combotext\" combodataset=\"dsGrdHakgi\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"4\" text=\"bind:SCHL_DATE\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"5\" text=\"bind:AMNT_0001\"/><Cell col=\"6\" text=\"bind:AMNT_0002\"/><Cell col=\"7\" text=\"bind:SUM_AMNT\"/><Cell col=\"8\" text=\"국민은행\"/><Cell col=\"9\" text=\"bind:ACNT_NUMB2\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00_00","0",null,"80","31",null,"203",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("환불 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCntHwanbul","80",null,"200","24",null,"205",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00","0",null,"1640","8",null,"201",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grdHwanbul","0",null,null,"200","530","0",null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_binddataset("dsHwanbul");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"50\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" text=\"년도\"/><Cell col=\"3\" text=\"학기\"/><Cell col=\"4\" text=\"환불일자\"/><Cell col=\"5\" text=\"생활관비환불\"/><Cell col=\"6\" text=\"식대환불\"/><Cell col=\"7\" text=\"예금주\"/><Cell col=\"8\" text=\"계좌번호\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" editmaxlength=\"1\"/><Cell col=\"1\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"2\" text=\"bind:SCHL_YEAR\"/><Cell col=\"3\" text=\"bind:SCHL_SMST\" displaytype=\"combotext\" combodataset=\"dsGrdHakgi\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"4\" text=\"bind:RTRN_DATE\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"5\" text=\"bind:MNMT_RTRN\" displaytype=\"number\"/><Cell col=\"6\" text=\"bind:FOOD_RTRN\" displaytype=\"number\"/><Cell col=\"7\" text=\"bind:ACNT_KNAM\"/><Cell col=\"8\" text=\"bind:ACNT_NUMB\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster02","0","78",null,null,"0","473",null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_binddataset("dsMaster02");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"학번\"/><Cell col=\"2\" text=\"성명\"/><Cell col=\"3\" text=\"인실\"/><Cell col=\"4\" text=\"성별\"/><Cell col=\"5\" text=\"학과\"/><Cell col=\"6\" text=\"생년월일\"/><Cell col=\"7\" text=\"환불일자\"/><Cell col=\"8\" text=\"생활관비환불\"/><Cell col=\"9\" text=\"식대환불\"/><Cell col=\"10\" text=\"환불액합계\"/><Cell col=\"11\" text=\"예금주\"/><Cell col=\"12\" text=\"계좌번호\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:STNT_NUMB\"/><Cell col=\"2\" text=\"bind:STNT_KNAM\"/><Cell col=\"3\" text=\"bind:ROOM_GUBN\" displaytype=\"combotext\" combodataset=\"dsGrdInsil\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"4\" text=\"bind:STNT_SEXC\" displaytype=\"combotext\" combodataset=\"dsGrdGender\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"5\" text=\"bind:BLNG_DEPT\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:BIRTHDAY\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"7\" text=\"bind:RTRN_DATE\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"8\" text=\"bind:MNMT_RTRN\" displaytype=\"number\"/><Cell col=\"9\" text=\"bind:FOOD_RTRN\" displaytype=\"number\"/><Cell col=\"10\" text=\"bind:SUM_RTRN\" displaytype=\"number\"/><Cell col=\"11\" text=\"bind:ACNT_KNAM\"/><Cell col=\"12\" text=\"bind:ACNT_NUMB\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06",null,null,"500","28","0","172",null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06",null,null,"110","28","390","172",null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("학번");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00",null,null,"500","28","0","145",null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00_00",null,null,"500","28","0","118",null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00_00_00",null,null,"500","28","0","91",null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00_00_00_00",null,null,"500","28","0","64",null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00_00_00_00_00",null,null,"500","28","0","37",null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00_00_00_00_00_00",null,null,"500","28","0","10",null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","0",null,"80","31",null,"438",null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("납입 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCntNapbu","80",null,"200","24",null,"440",null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00",null,null,"110","28","140","172",null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01",null,null,"110","28","390","145",null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("등록년도");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_00",null,null,"110","28","140","145",null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("등록학기");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_01",null,null,"110","28","390","118",null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("환불종류");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_01_00",null,null,"110","28","140","118",null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("환불일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_01_01",null,null,"110","28","390","91",null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("환불구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_01_01_00",null,null,"110","28","390","64",null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("생활관비 환불액");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_01_01_00_00",null,null,"110","28","140","64",null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("식대 환불액");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_01_01_00_01",null,null,"110","28","390","37",null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("예금주");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_01_01_00_00_00",null,null,"110","28","140","37",null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("환불은행");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_01_01_00_01_00",null,null,"110","28","390","10",null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("계좌번호");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_01_01_00_00_00_00",null,null,"110","28","140","10",null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00",null,"562","30",null,"500","0",null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("30");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00_00_00",null,null,"200","31","300","203",null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("학생 상세정보");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSearchStntName","1253",null,"134","22",null,"175",null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSearchStntName00","1503",null,"134","22",null,"175",null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSearchStntName01","1253",null,"134","22",null,"148",null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cboDiffSequ","1503",null,"134","22",null,"148",null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsGrdHakgi");
            obj.set_text("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cboRtrnKind","1253",null,"134","22",null,"121",null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsDtHwanbulKind");
            obj.set_text("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cboRtrnGubn","1253",null,"134","22",null,"94",null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsDtHwanbulGubn");
            obj.set_text("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cboBankCode","1503",null,"134","22",null,"40",null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsDtHwanbulBank");
            obj.set_text("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edtMnmtRtrn","1253",null,"134","22",null,"67",null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtFoodRtrn","1503",null,"134","22",null,"67",null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAcntKnam","1253",null,"134","22",null,"40",null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAcntNumb","1253",null,"134","22",null,"13",null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDescNote","1503",null,"134","22",null,"13",null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnHwanbulCal","1390",null,"80","22",null,"94",null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("환불계산");
            obj.set_visible("false");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Calendar("calRtrnDate","1503",null,"134","22",null,"121",null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("생활관비 환불관리");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.spnSearchSchlYear","value","ds_input","SCHL_YEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboSearchSchlSmst","value","ds_input","SCHL_SMST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboSearchHakgi00","value","ds_input","STNT_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.edtSearchStntName","value","ds_input","STNT_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.edtSearchStntName00","value","ds_input","STNT_KNAM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.cboSearchDiffSequ","value","ds_input","DIFF_SEQU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.chkHwanbul","value","ds_input","HWANBUL_CHK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edtSearchStntName","value","dsMaster01","STNT_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edtSearchStntName00","value","dsMaster01","STNT_KNAM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edtSearchStntName01","value","dsMaster01","SCHL_YEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","cboDiffSequ","value","dsMaster01","SCHL_SMST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","cboRtrnKind","value","dsHwanbul","RTRN_KIND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","calRtrnDate","value","dsHwanbul","RTRN_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","cboRtrnGubn","value","dsHwanbul","RTRN_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","edtMnmtRtrn","value","dsHwanbul","MNMT_RTRN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","edtFoodRtrn","value","dsHwanbul","FOOD_RTRN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","edtAcntKnam","value","dsHwanbul","ACNT_KNAM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","cboBankCode","value","dsHwanbul","BANK_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","edtAcntNumb","value","dsHwanbul","ACNT_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","edtDescNote","value","dsHwanbul","DESC_NOTE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster01");
            this._addPreloadList("data","","dsMaster02");
            this._addPreloadList("data","","dsNapbu");
            this._addPreloadList("data","","dsHwanbul");
            this._addPreloadList("data","","dsSchl");
            this._addPreloadList("data","","dsDiffSequ");
        };
        
        // User Script
        this.registerScript("BH05_4080504_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): BH05_4080504_M.xfdl(생활관비 환불관리)
        * 작 성         일 명: 정진호
        * 작 성         일 자: 2022/10/14
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
        this.lvchkColidDs	= "RTRN_KIND$MNMT_RTRN$FOOD_RTRN$ACNT_KNAM$BANK_CODE$ACNT_NUMB"; // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs = "환불종류$생활관비 환불액$식대 환불액$예금주$환불은행$계좌번호";
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
            var strDs    = "dsHakgi|dsStntGubn";
        	    strDs   += "|dsGrdInsil|dsGrdGender|dsGrdHakgi";
        		strDs   += "|dsDtHwanbulKind|dsDtHwanbulGubn|dsDtHwanbulBank";
            // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
        	var strLgcd  = "00022|00743";
        	    strLgcd += "|00744|00001|00022";
        		strLgcd += "|00750|00749|00040";
        	// 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strComb  = "X|T";
        	    strComb += "|N|N|N";
        		strComb += "|X|X|S";
            var strOptn  = ""; // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId    = "Init";
        	// gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
        	// 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.gfn_CmmnMultiComboLoad(strDs, strLgcd, strComb, strOptn, svcId);

        	// 생활관 일정
        	this.fn_getSchl();
        };

        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {
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
                    case "RetNapbu":
                            this.fn_PostRetNapbu();
                        break;
                    case "RetHwanbul":
                            this.fn_PostRetHwanbul();
                        break;
                    case "Save":
                            this.fn_PostSave();
                        break;
                    case "Del":
                            this.fn_PostDel();
                        break;
                    case "GetSchl":
                            this.fn_PostGetSchl();
                        break;
                    case "GetDiffSequ":
                            this.fn_PostGetDiffSequ();
                        break;
                    default:
                        break;
                }
            }
        };

        //Popup callback영역
        this.fn_popupCallback = function(strId, strVal) {
        	switch(strId) {
        		case "popup":
        			var sRtn = strVal.split(",");
        			if(sRtn[0] != "CLOSE") {
        				var rowPosition = this.dsHwanbul.rowposition;
        				this.dsHwanbul.set_enableevent(false);
        				this.dsHwanbul.setColumn(rowPosition, "MNMT_RTRN", sRtn[0]);
        				this.dsHwanbul.setColumn(rowPosition, "FOOD_RTRN", sRtn[1]);
        				this.dsHwanbul.setColumn(rowPosition, "RTRN_GUBN", sRtn[2]);
        				this.dsHwanbul.set_enableevent(true);
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
                case "new" :         // 신규
                        this.fn_New();
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
            if (!this.fn_PreRet()) return false;

        	var hwanbul = this.divSearch.form.chkHwanbul.value != "1";
        	this.fn_setGrd(hwanbul);

            var strSvc      = "Ret";
            var strUrl      = "/prj/BH/BH05/"
        	    strUrl     += hwanbul ? "Retrieve_4080504_M01List.do" : "Retrieve_4080504_M02List.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = hwanbul ? "dsMaster01" : "dsMaster02";
        	    strOutDs   += "=dsMaster";
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
        	var obj = this.divSearch.form.chkHwanbul.value != "1" ? this.dsMaster01 : this.dsMaster02;
            this.gfn_getRowCount(this.staRowCnt, obj);
        	if (obj.rowcount == 0) {
        		this.dsNapbu.clearData();
        		this.dsHwanbul.clearData();
        	}
        };

        // 납부목록 조회
        this.fn_PreRetNapbu = function(obj)
        {
            // 조회조건 셋팅
        	this.ds_inputNapbu.setColumn(0, "SCHL_YEAR", obj.getColumn(obj.rowposition, "SCHL_YEAR"));
        	this.ds_inputNapbu.setColumn(0, "SCHL_SMST", obj.getColumn(obj.rowposition, "SCHL_SMST"));
        	this.ds_inputNapbu.setColumn(0, "DIFF_SEQU", obj.getColumn(obj.rowposition, "DIFF_SEQU"));
        	this.ds_inputNapbu.setColumn(0, "STNT_NUMB", obj.getColumn(obj.rowposition, "STNT_NUMB"));
            return true;
        };
        this.fn_RetNapbu = function(obj) {
            if (!this.fn_PreRetNapbu(obj)) return false;

            var strSvc      = "RetNapbu";
            var strUrl      = "/prj/BH/BH05/Retrieve_4080504_NapbuList.do";
            var strInDs     = "ds_input=ds_inputNapbu";
            var strOutDs    = "dsNapbu=dsMaster";
            var strArg      = "";
            var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        }
        this.fn_PostRetNapbu = function()
        {
            this.gfn_getRowCount(this.staRowCntNapbu,this.dsNapbu);
        };

        // 환불목록 조회
        this.fn_PreRetHwanbul = function(obj)
        {
            // 조회조건 셋팅
        	this.ds_inputHwanbul.setColumn(0, "SCHL_YEAR", obj.getColumn(obj.rowposition, "SCHL_YEAR"));
        	this.ds_inputHwanbul.setColumn(0, "SCHL_SMST", obj.getColumn(obj.rowposition, "SCHL_SMST"));
        	this.ds_inputHwanbul.setColumn(0, "STNT_NUMB", obj.getColumn(obj.rowposition, "STNT_NUMB"));
            return true;
        };
        this.fn_RetHwanbul = function(obj) {
            if (!this.fn_PreRetHwanbul(obj)) return false;

            var strSvc      = "RetHwanbul";
            var strUrl      = "/prj/BH/BH05/Retrieve_4080504_HwanbulList.do";
            var strInDs     = "ds_input=ds_inputHwanbul";
            var strOutDs    = "dsHwanbul=dsMaster";
            var strArg      = "";
            var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        }
        this.fn_PostRetHwanbul = function()
        {
            this.gfn_getRowCount(this.staRowCntHwanbul,this.dsHwanbul);
        };

        /**********************************************************************
                06. 추가 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 추가 전 실행(기본체크사항)
         */
        this.fn_PreNew = function()
        {
        	if (this.dsMaster01.rowcount == 0) {
        		this.alert("조회를 하시기 바랍니다.");
        		return false;
        	}

        	if (this.dsNapbu.rowcount == 0) {
        		this.alert("납부 내역이 없습니다.");
        		return false;
        	}

            return true;
        };

        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_New = function()
        {
            if (!this.fn_PreNew()) return false;
            var nRow = this.dsHwanbul.addRow();
            this.dsHwanbul.setColumn(nRow, "SCHL_YEAR", this.dsMaster01.getColumn(this.dsMaster01.rowposition, "SCHL_YEAR"));
            this.dsHwanbul.setColumn(nRow, "SCHL_SMST", this.dsMaster01.getColumn(this.dsMaster01.rowposition, "SCHL_SMST"));
            this.dsHwanbul.setColumn(nRow, "STNT_NUMB", this.dsMaster01.getColumn(this.dsMaster01.rowposition, "STNT_NUMB"));
            this.dsHwanbul.setColumn(nRow, "RTRN_DATE", objApp.gds_SystemDate.getColumn(0, "YYYYMMDD"));
            this.dsHwanbul.setColumn(nRow, "RTRN_KIND", "");
            this.dsHwanbul.setColumn(nRow, "BANK_CODE", "");
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
            if(this.dsHwanbul.rowcount < 1 || this.dsHwanbul.findRow("CHK",1) == -1)
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
            this.dsHwanbul.set_enableevent(false);
            for(var i=this.dsHwanbul.rowcount-1;i>-1;i--)
            {
                if(this.dsHwanbul.getColumn(i,"CHK") == "1" || this.dsHwanbul.getRowType(i) == 2)
                {
                    this.dsHwanbul.deleteRow(i);
                }
            }
            this.dsHwanbul.set_enableevent(true);

            //개별삭제시
            //this.dsHwanbul.deleteRow(this.dsHwanbul.rowposition);
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
            var strUrl      = "/prj/BH/BH05/Delete_4080504_MList.do";
            var strInDs     = "dsMaster=dsHwanbul:u";
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
            this.gfn_getRowCount(this.staRowCntHwanbul,this.dsHwanbul);
        };

        /**********************************************************************
                08. 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave = function()
        {
            if(this.dsHwanbul.rowcount > 0)
            {
                for(var i=0;i<this.dsHwanbul.rowcount; i++)
                {
                    if(this.dsHwanbul.getColumn(i,"CHK") == "0")
                    {
                        continue;
                    }
                    this.dsHwanbul.setColumn(i,"CHK","0");
                }
            }

            if(!this.gfn_isUpdate(this.dsHwanbul))
            {
                this.gfn_alert("변경된 이력이 없습니다.","저장정보","","question");
                return false;
            }

            // 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
            var chkFocusFlg = true;
            var result      = this.gfn_cmmnChkEssentialItem(this.dsHwanbul, this.lvchkColidDs, this.lvchkColNameDs, this.grdHwanbul, chkFocusFlg, this);

            if (result[0] != "success")
            {
                this.gfn_alert(result[0],"저장정보","","question");
                this.dsHwanbul.set_rowposition(result[1]); //데이터셋 변경
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
            var strUrl      = "/prj/BH/BH05/Save_4080504_MList.do";
            var strInDs     = "ds_input=ds_inputHwanbul:a ";
                strInDs    += "dsMaster=dsHwanbul:u";
            var strOutDs    = "dsHwanbul=dsMaster";
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
            this.gfn_getRowCount(this.staRowCntHwanbul,this.dsHwanbul);
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
                13. Get, Set Method
        ***********************************************************************/
        /**********************************************************************
                14. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 소트정열
         */
        this.grdMaster01_onheaddblclick = function(obj,e)
        {
            if(e.cell != this.grdMaster01.getBindCellIndex("body","CHK") && e.cell != 1)
            {
                this.gfn_gridSort(obj,e);
            }
        };
        this.grdMaster02_onheaddblclick = function(obj,e)
        {
            if(e.cell != this.grdMaster02.getBindCellIndex("body","CHK") && e.cell != 1)
            {
                this.gfn_gridSort(obj,e);
            }
        };
        this.grdNapbu_onheaddblclick = function(obj,e)
        {
            if(e.cell != this.grdNapbu.getBindCellIndex("body","CHK") && e.cell != 1)
            {
                this.gfn_gridSort(obj,e);
            }
        };
        this.grdHwanbul_onheaddblclick = function(obj,e)
        {
            if(e.cell != this.grdHwanbul.getBindCellIndex("body","CHK") && e.cell != 1)
            {
                this.gfn_gridSort(obj,e);
            }
        };

        /**
         *      그리드멀티 체크
         */
        this.grdHwanbul_onheadclick = function(obj,e)
        {
            if(e.cell == this.grdHwanbul.getBindCellIndex("body","CHK"))
            {
                this.gfn_checkAll(obj, e);
            }
        };

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
            //return this.gfn_isUpdate(this.dsMaster);
        };

        // 생활관 일정 조회
        this.fn_getSchl = function() {
        	this.ds_inputSchl.setColumn(0, "SCHL_YEAR", "");
        	this.ds_inputSchl.setColumn(0, "SCHL_SMST", "");
        	this.ds_inputSchl.setColumn(0, "STNT_GUBN", "");
        	this.ds_inputSchl.setColumn(0, "DATE_CODE", "2");
        	this.ds_inputSchl.setColumn(0, "DIFF_SEQU", "");

        	var strSvc      = "GetSchl";
            var strUrl      = "/prj/BH/BH_COMMON/GET_SCHL.do";
            var strInDs     = "ds_input=ds_inputSchl";
            var strOutDs    = "dsSchl=dsMaster";
            var strArg      = "";
            var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        }
        this.fn_PostGetSchl = function()
        {
        	this.ds_input.setColumn(0, "SCHL_YEAR", this.dsSchl.getColumn(0, "SCHL_YEAR"));
        	this.ds_input.setColumn(0, "SCHL_SMST", this.dsSchl.getColumn(0, "SCHL_SMST"));
        	this.fn_getDiffSequ();
        };

        // 일정차수조회
        this.fn_getDiffSequ = function() {
        	this.ds_inputDiffSequ.setColumn(0, "STNT_GUBN", "");
        	this.ds_inputDiffSequ.setColumn(0, "DATE_CODE", "2");
        	this.ds_inputDiffSequ.setColumn(0, "SCHL_YEAR", this.ds_input.getColumn(0, "SCHL_YEAR"));
        	this.ds_inputDiffSequ.setColumn(0, "SCHL_SMST", this.ds_input.getColumn(0, "SCHL_SMST"));

        	var strSvc      = "GetDiffSequ";
            var strUrl      = "/prj/BH/BH_COMMON/GET_DIFF_SEQU.do";
            var strInDs     = "ds_input=ds_inputDiffSequ";
            var strOutDs    = "dsDiffSequ=dsMaster";
            var strArg      = "";
            var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        }
        this.fn_PostGetDiffSequ = function() {
        	var nRow = this.dsDiffSequ.insertRow(0);
        	this.dsDiffSequ.setColumn(nRow, "CODE", "");
        	this.dsDiffSequ.setColumn(nRow, "CODE_NM", "전체");
        	this.divSearch.form.cboSearchDiffSequ.set_index(0);
        };

        this.divSearch_spnSearchSchlYear_canchange = function(obj,e)
        {
        	this.divSearch_cboSearchSchlSmst_canitemchange();
        };

        this.divSearch_cboSearchSchlSmst_canitemchange = function(obj,e)
        {
        	this.dsDiffSequ.clearData();
        	this.fn_getDiffSequ();
        };

        // 환불내역 값에 따른 설정
        this.fn_setGrd = function(hwanbul) {
        	this.grdMaster01.set_visible(hwanbul);
        	this.grdMaster02.set_visible(!hwanbul);
        	this.dsMaster01.clearData();
        	this.dsMaster02.clearData();
        	this.dsNapbu.clearData();
        	this.dsHwanbul.clearData();
        };

        this.dsMaster_onrowposchanged = function(obj,e)
        {
        	this.fn_RetNapbu(obj);
        };

        this.dsNapbu_onrowposchanged = function(obj,e)
        {
        	this.fn_RetHwanbul(obj);
        };

        //환불 금액 입력 및 환불 계산 버튼 보이도록 세팅
        this.cboRtrnKind_onitemchanged = function(obj,e)
        {
        	if (obj.value == "1") {
        		this.btnHwanbulCal.set_visible(false);
        		this.cboRtrnGubn.set_enable(false);
        		this.edtMnmtRtrn.set_readonly(true);
        		this.edtFoodRtrn.set_readonly(true);

        		this.dsHwanbul.setColumn(this.dsHwanbul.rowposition, "RTRN_GUBN", "");
        		this.edtMnmtRtrn.set_value(this.dsNapbu.getColumn(this.dsNapbu.rowposition, "AMNT_0001"));
        		this.edtFoodRtrn.set_value(this.dsNapbu.getColumn(this.dsNapbu.rowposition, "AMNT_0002"));
        	} else if (obj.value == "2") {
        		this.btnHwanbulCal.set_visible(false);
        		this.cboRtrnGubn.set_enable(false);
        		this.edtMnmtRtrn.set_readonly(true);
        		this.edtFoodRtrn.set_readonly(true);

        		var mnmtRtrn = this.dsNapbu.getColumn(this.dsNapbu.rowposition, "AMNT_0001") / 2;
        		var foodRtrn = this.dsNapbu.getColumn(this.dsNapbu.rowposition, "AMNT_0002") / 2;

        		this.dsHwanbul.setColumn(this.dsHwanbul.rowposition, "RTRN_GUBN", "");
        		// 10원 절사
        		this.edtMnmtRtrn.set_value(Math.floor(mnmtRtrn / 100) * 100);
        		this.edtFoodRtrn.set_value(Math.floor(foodRtrn / 100) * 100);
        	} else if (obj.value == "3") {
        		this.btnHwanbulCal.set_visible(true);
        		this.cboRtrnGubn.set_enable(true);
        		this.cboRtrnGubn.set_readonly(true);

        		this.edtMnmtRtrn.set_readonly(false);
        		this.edtFoodRtrn.set_readonly(false);

        		this.edtMnmtRtrn.set_value("");
        		this.edtFoodRtrn.set_value("");
        	}
        };

        this.dsHwanbul_onrowposchanged = function(obj,e)
        {
        	this.cboRtrnKind.set_readonly(false);
        	this.calRtrnDate.set_readonly(false);
        	this.edtAcntKnam.set_readonly(false);
        	this.cboBankCode.set_readonly(false);
        	this.edtAcntNumb.set_readonly(false);
        	this.edtDescNote.set_readonly(false);
        };

        // 환불계산
        this.btnHwanbulCal_onclick = function(obj,e)
        {
        	var amnt0001 = this.dsNapbu.getColumn(this.dsNapbu.rowposition, "AMNT_0001");
        	var amnt0002 = this.dsNapbu.getColumn(this.dsNapbu.rowposition, "AMNT_0002");
        	var oArg = {amnt0001:amnt0001, amnt0002:amnt0002};
        	var oOption = {};
        	var sPopupCallBack = "fn_popupCallback";
        	this.gfn_openPopup("popup","BH05::BH05_4080504_P01.xfdl",oArg,sPopupCallBack,oOption);
        };

        this.fn_onKeyDown = function(obj, e) {
        	if (e.keycode == 13) {
        		this.fn_Ret();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.grdMaster01.addEventHandler("onselectchanged",this.grdMaster_onselectchanged,this);
            this.grdMaster01.addEventHandler("onheaddblclick",this.grdMaster01_onheaddblclick,this);
            this.divSearch.form.spnSearchSchlYear.addEventHandler("onkeydown",this.fn_onKeyDown,this);
            this.divSearch.form.spnSearchSchlYear.addEventHandler("canchange",this.divSearch_spnSearchSchlYear_canchange,this);
            this.divSearch.form.cboSearchSchlSmst.addEventHandler("onkeydown",this.fn_onKeyDown,this);
            this.divSearch.form.cboSearchSchlSmst.addEventHandler("canitemchange",this.divSearch_cboSearchSchlSmst_canitemchange,this);
            this.divSearch.form.cboSearchHakgi00.addEventHandler("onitemchanged",this.divSearch_cboSearchHakgi_onitemchanged,this);
            this.divSearch.form.cboSearchHakgi00.addEventHandler("onkeydown",this.fn_onKeyDown,this);
            this.divSearch.form.cboSearchDiffSequ.addEventHandler("onitemchanged",this.divSearch_cboSearchHakgi_onitemchanged,this);
            this.divSearch.form.cboSearchDiffSequ.addEventHandler("onkeydown",this.fn_onKeyDown,this);
            this.divSearch.form.chkHwanbul.addEventHandler("onchanged",this.divSearch_chkHwanbul_onchanged,this);
            this.grdNapbu.addEventHandler("onselectchanged",this.grdMaster_onselectchanged,this);
            this.grdNapbu.addEventHandler("onheaddblclick",this.grdNapbu_onheaddblclick,this);
            this.grdHwanbul.addEventHandler("onselectchanged",this.grdMaster_onselectchanged,this);
            this.grdHwanbul.addEventHandler("onheaddblclick",this.grdHwanbul_onheaddblclick,this);
            this.grdHwanbul.addEventHandler("onheadclick",this.grdHwanbul_onheadclick,this);
            this.grdMaster02.addEventHandler("onselectchanged",this.grdMaster_onselectchanged,this);
            this.grdMaster02.addEventHandler("onheaddblclick",this.grdMaster02_onheaddblclick,this);
            this.cboRtrnKind.addEventHandler("onitemchanged",this.cboRtrnKind_onitemchanged,this);
            this.btnHwanbulCal.addEventHandler("onclick",this.btnHwanbulCal_onclick,this);
            this.dsMaster01.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsNapbu.addEventHandler("onrowposchanged",this.dsNapbu_onrowposchanged,this);
            this.dsHwanbul.addEventHandler("onrowposchanged",this.dsHwanbul_onrowposchanged,this);
        };
        this.loadIncludeScript("BH05_4080504_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
