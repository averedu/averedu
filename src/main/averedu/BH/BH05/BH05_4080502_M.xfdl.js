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
            this.set_titletext("등록대상자 관리");
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
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"CRET_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"SCHL_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"SCHL_SMST\" type=\"STRING\" size=\"2\"/><Column id=\"SCHL_SMSTNM\" type=\"STRING\" size=\"65532\"/><Column id=\"STNT_NUMB\" type=\"STRING\" size=\"15\"/><Column id=\"STNT_GUBN\" type=\"STRING\" size=\"4\"/><Column id=\"PASS_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"STNT_KNAM\" type=\"STRING\" size=\"50\"/><Column id=\"STNT_GRAD\" type=\"STRING\" size=\"1\"/><Column id=\"CELL_NUMB\" type=\"STRING\" size=\"65532\"/><Column id=\"TELE_NUMB\" type=\"STRING\" size=\"65532\"/><Column id=\"BLNG_DEPT\" type=\"STRING\" size=\"65532\"/><Column id=\"DEUN_YORN\" type=\"STRING\" size=\"2\"/><Column id=\"DEUN_YORN_NM\" type=\"STRING\" size=\"9\"/><Column id=\"ROOM_GUBN\" type=\"STRING\" size=\"26\"/><Column id=\"STAT_GUBN\" type=\"STRING\" size=\"2\"/><Column id=\"ACNT_NUMB2\" type=\"STRING\" size=\"20\"/><Column id=\"AMNT_0001\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"AMNT_0002\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DIFF_SEQU\" type=\"STRING\" size=\"2\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"SCHL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SCHL_SMST\" type=\"STRING\" size=\"256\"/><Column id=\"ROOM_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"STNT_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"STNT_KNAM\" type=\"STRING\" size=\"256\"/><Column id=\"STNT_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"DIFF_SEQU\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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


            obj = new Dataset("dsInsil", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsStntGubn", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGrdStntGubn", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGrdStat", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGrdHaknyeon", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDtYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Y</Col><Col id=\"CODE_NM\">등록</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"CODE_NM\">미등록</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inputAdd01", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SCHL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SCHL_SMST\" type=\"STRING\" size=\"256\"/><Column id=\"STNT_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"STNT_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"DIFF_SEQU\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inputAdd02", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SCHL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SCHL_SMST\" type=\"STRING\" size=\"256\"/><Column id=\"STNT_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"STNT_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"DIFF_SEQU\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAdd01", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01_00","520","69","100","35",null,null,null,null,null,null,this);
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

            obj = new Button("btnAdd03",null,"74","100","25","3",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("은행자료생성");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"69","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01_02_00","0","36","50","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("학번");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01_00","0","9","50","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnSearchSchlYear","60","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01_00_00","180","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("학기");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchStntName","60","36","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchSchlSmst","270","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsHakgi");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00","0","0","27","67",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01_00","19","0",null,"9","-1",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01","49","0","10","67",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_02_00","19","31","1570","5",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 6pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","13","58",null,"9","-1",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01","260","0","10","67",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_02_00_00","180","36","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00_01_00","180","0","56","67",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01_00_00_00","390","9","105","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("차수");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01_00_00_00_00","390","36","105","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("학생구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00_01_00_00","390","0","56","67",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00","495","0","10","67",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchDiffSequ","505","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsDiffSequ");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchStntGubn","505","36","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsStntGubn");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01_00_00_00_01_00","625","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("인실");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00_01_00_00_00_00","625","0","56","67",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_00","705","0","10","67",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchRoom","715","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsInsil");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchStntName00","270","36","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_09_00","1","74","115","31",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("관생 기본현황");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","115","77","200","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","98","1640","8",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","0","106",null,"400","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("dsMaster");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"구분\"/><Cell col=\"2\" text=\"합격일자\"/><Cell col=\"3\" text=\"학번\"/><Cell col=\"4\" text=\"성명\"/><Cell col=\"5\" text=\"상태\"/><Cell col=\"6\" text=\"전화번호\"/><Cell col=\"7\" text=\"휴대폰\"/><Cell col=\"8\" text=\"학부/학과\"/><Cell col=\"9\" text=\"가상계좌\"/><Cell col=\"10\" text=\"등록년도\"/><Cell col=\"11\" text=\"등록학기\"/><Cell col=\"12\" text=\"등록학년\"/><Cell col=\"13\" text=\"등록\"/><Cell col=\"14\" text=\"인실구분\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:STNT_GUBN\" displaytype=\"combotext\" combodataset=\"dsGrdStntGubn\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"2\" text=\"bind:PASS_DATE\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"date\"/><Cell col=\"3\" text=\"bind:STNT_NUMB\"/><Cell col=\"4\" text=\"bind:STNT_KNAM\"/><Cell col=\"5\" text=\"bind:STAT_GUBN\" displaytype=\"combotext\" combodataset=\"dsGrdStat\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"6\" text=\"bind:TELE_NUMB\"/><Cell col=\"7\" text=\"bind:CELL_NUMB\"/><Cell col=\"8\" text=\"bind:BLNG_DEPT\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:ACNT_NUMB2\"/><Cell col=\"10\" text=\"bind:SCHL_YEAR\"/><Cell col=\"11\" text=\"bind:SCHL_SMSTNM\"/><Cell col=\"12\" text=\"bind:STNT_GRAD\" displaytype=\"combotext\" combodataset=\"dsGrdHaknyeon\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"13\" text=\"bind:DEUN_YORN_NM\"/><Cell col=\"14\" text=\"bind:ROOM_GUBN\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","0","509","165","31",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("등록대상자 상세정보");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00","0","533",null,"8","0",null,null,null,null,null,this);
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

            obj = new Static("Static01_00_00","500","506","35","35",null,null,null,null,null,null,this);
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

            obj = new Static("stc_13_06_01","0","541","870","28",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00","0","541","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("기준일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00_00","290","541","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("학번");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_01_00","0","568","870","28",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00_01","0","568","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("등록년도");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGyojikwonNo00","713","544","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00_01_00","290","568","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("등록학기");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_01_00_00","0","595","870","28",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00_01_01","0","595","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("생활관비");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_01_00_00_00","0","622","870","28",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_01_00_00_00_00","0","649","870","28",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00_01_01_00","0","622","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("등록여부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00_01_01_00_00","0","649","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("광주은행");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00_00_00","580","541","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00_01_00_00","580","568","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("등록학년");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00_01_01_01","290","595","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("식비");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboJikjong00_00_00","133","625","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_readonly("true");
            obj.set_innerdataset("dsDtYn");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd02",null,"74","70","25","106",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("계좌생성");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd01",null,"74","80","25","179",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("대상자생성");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnPrint",null,"74","80","25","262",null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("고지서출력");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00_01_01_00_00_01","290","649","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("국민은행");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00_01_01_00_00_01_00","580","649","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("우체국");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Calendar("calAcptDate00","133","544","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGyojikwonNo00_01","423","544","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGyojikwonNo00_01_00","133","571","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGyojikwonNo00_01_00_00","423","571","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGyojikwonNo00_01_00_00_00","713","571","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAmnt0001","133","598","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAmnt0002","423","598","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGyojikwonNo00_01_00_01_00_00","133","652","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGyojikwonNo00_01_00_01_00_00_00","423","652","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGyojikwonNo00_01_00_01_00_00_01","713","652","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("등록대상자 관리");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.spnSearchSchlYear","value","ds_input","SCHL_YEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboSearchSchlSmst","value","ds_input","SCHL_SMST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboSearchDiffSequ","value","ds_input","DIFF_SEQU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboSearchRoom","value","ds_input","ROOM_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.edtSearchStntName","value","ds_input","STNT_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.edtSearchStntName00","value","ds_input","STNT_KNAM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.cboSearchStntGubn","value","ds_input","STNT_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","calAcptDate00","value","dsMaster","CRET_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edtGyojikwonNo00_01","value","dsMaster","STNT_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edtGyojikwonNo00","value","dsMaster","STNT_KNAM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edtGyojikwonNo00_01_00","value","dsMaster","SCHL_YEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","edtGyojikwonNo00_01_00_00","value","dsMaster","SCHL_SMSTNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","edtGyojikwonNo00_01_00_00_00","value","dsMaster","STNT_GRAD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","edtAmnt0001","value","dsMaster","AMNT_0001");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","edtAmnt0002","value","dsMaster","AMNT_0002");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","cboJikjong00_00_00","value","dsMaster","DEUN_YORN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","edtGyojikwonNo00_01_00_01_00_00_00","value","dsMaster","ACNT_NUMB2");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
            this._addPreloadList("data","","dsSchl");
            this._addPreloadList("data","","dsDiffSequ");
        };
        
        // User Script
        this.registerScript("BH05_4080502_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): BH05_4080502_M.xfdl(등록대상자 관리)
        * 작 성         일 명: 정진호
        * 작 성         일 자: 2022/10/12
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
            var strDs    = "dsHakgi|dsInsil|dsStntGubn";
        	    strDs   += "|dsGrdStntGubn|dsGrdStat|dsGrdHaknyeon";
            // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
        	var strLgcd  = "00022|00744|00743";
        	    strLgcd += "|00743|00741|00060";
        	// 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strComb  = "X|T|X";
        	    strComb += "|N|N|N";
            var strOptn  = ""; // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId    = "Init";
        	// gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
        	// 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.gfn_CmmnMultiComboLoad(strDs, strLgcd, strComb, strOptn, svcId);
        };

        this.fn_PostformInit = function() {
        	this.divSearch.form.cboSearchStntGubn.set_index(0);

        	// 생활관 일정
        	this.fn_getSchl();
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
                    case "singleInit":
                            this.fn_PostSingleInt();
                        break;
                    case "Ret":
                            this.fn_PostRet();
                        break;
                    case "RetAdd01":
                            this.fn_PostRetAdd01();
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
            var strUrl      = "/prj/BH/BH05/Retrieve_4080502_MList.do";
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

        /**********************************************************************
                06. 추가 함수 선언
        ***********************************************************************/
        /**********************************************************************
                07. 삭제 함수 선언
        ***********************************************************************/
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
            var strUrl      = "/prj/BH/BH05/Save_4080502_MList.do";
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
        this.grdMaster_onheaddblclick = function(obj,e)
        {
            if(e.cell != this.grdMaster.getBindCellIndex("body","CHK") && e.cell != 1)
            {
                this.gfn_gridSort(obj,e);
            }
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

        this.dsMaster_onrowposchanged = function(obj,e)
        {
        	var deunYorn = (this.dsMaster.getColumn(e.newrow, "DEUN_YORN") == "Y");
        	this.edtAmnt0001.set_readonly(deunYorn);
        	this.edtAmnt0002.set_readonly(deunYorn);
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

        // 고지서 출력
        this.btnPrint_onclick = function(obj,e)
        {
        	this.alert("기능 개발 중....");
        	return;
        };

        // 대상자 생성
        this.btnAdd01_onclick = function(obj,e)
        {
        	if (this.gfn_isNull(this.ds_input.getColumn(0, "SCHL_YEAR"))) {
        		this.alert("년도를 입력해주세요.");
        		return;
        	}

        	if (this.gfn_isNull(this.ds_input.getColumn(0, "SCHL_SMST"))) {
        		this.alert("학기를 선택해주세요.");
        		return;
        	}

        	if (this.gfn_isNull(this.ds_input.getColumn(0, "DIFF_SEQU"))) {
        		this.alert("차수를 선택해주세요.");
        		return;
        	}

        	this.ds_inputAdd01.setColumn(0, "SCHL_YEAR", this.ds_input.getColumn(0, "SCHL_YEAR"));
        	this.ds_inputAdd01.setColumn(0, "SCHL_SMST", this.ds_input.getColumn(0, "SCHL_SMST"));
        	this.ds_inputAdd01.setColumn(0, "DIFF_SEQU", this.ds_input.getColumn(0, "DIFF_SEQU"));
        	this.ds_inputAdd01.setColumn(0, "STNT_GUBN", this.ds_input.getColumn(0, "STNT_GUBN"));
        	this.ds_inputAdd01.setColumn(0, "STNT_NUMB", this.ds_input.getColumn(0, "STNT_NUMB"));

            var strSvc      = "RetAdd01";
            var strUrl      = "/prj/BH/BH05/Retrieve_4080502_M01List.do";
            var strInDs     = "ds_input=ds_inputAdd01";
            var strOutDs    = "dsAdd01=dsMaster";
            var strArg      = "";
            var GBV_MENUID	= objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        };
        this.fn_PostRetAdd01 = function() {
        	if (nexacro.toNumber(this.dsAdd01.getColumn(0, "CNT")) != 0) {
        		var result = this.gfn_confirm("기존의 생성된 대상자가 있습니다.\r\n다시 생성하시겠습니까?", "대상자생성","", "question");
        		if(result == 0) return;
        	} else {
        		var result = this.gfn_confirm("대상자를 생성하시겠습니까?", "대상자생성","", "question");
        		if(result == 0) return;
        	}

            var strSvc      = "Add01";
            var strUrl      = "/prj/BH/BH05/Add_4080502_M01List.do";
            var strInDs     = "ds_input=ds_inputAdd01";
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
        }

        // 계좌 생성
        this.btnAdd02_onclick = function(obj,e)
        {
        	/*
        	this.alert("기능 개발 중....");
        	return;
        	*/

        	if (this.gfn_isNull(this.ds_input.getColumn(0, "SCHL_YEAR"))) {
        		this.alert("년도를 입력해주세요.");
        		return;
        	}

        	if (this.gfn_isNull(this.ds_input.getColumn(0, "SCHL_SMST"))) {
        		this.alert("학기를 선택해주세요.");
        		return;
        	}

        	if (this.gfn_isNull(this.ds_input.getColumn(0, "DIFF_SEQU"))) {
        		this.alert("차수를 선택해주세요.");
        		return;
        	}

        	var result = this.gfn_confirm( "가상계좌를 생성하시겠습니까?", "계좌 생성","", "question" );
        	if(result == 0) return;

        	this.ds_inputAdd02.setColumn(0, "SCHL_YEAR", this.ds_input.getColumn(0, "SCHL_YEAR"));
        	this.ds_inputAdd02.setColumn(0, "SCHL_SMST", this.ds_input.getColumn(0, "SCHL_SMST"));
        	this.ds_inputAdd02.setColumn(0, "DIFF_SEQU", this.ds_input.getColumn(0, "DIFF_SEQU"));
        	this.ds_inputAdd02.setColumn(0, "STNT_GUBN", this.ds_input.getColumn(0, "STNT_GUBN"));

            var strSvc      = "Add02";
            var strUrl      = "/prj/BH/BH05/Add_4080502_M02List.do";
            var strInDs     = "ds_input=ds_inputAdd02:a ";
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

        // 은행자료 생성
        this.btnAdd03_onclick = function(obj,e)
        {
        	var schlYear = this.ds_input.getColumn(0, "SCHL_YEAR");
        	var schlSmst = this.ds_input.getColumn(0, "SCHL_SMST");
        	var diffSequ = this.ds_input.getColumn(0, "DIFF_SEQU");

        	if (this.gfn_isNull(schlYear)) {
        		this.alert("년도를 입력해주세요.");
        		return;
        	}

        	if (this.gfn_isNull(schlSmst)) {
        		this.alert("학기를 선택해주세요.");
        		return;
        	}

        	var oArg = {schlYear:schlYear, schlSmst:schlSmst, diffSequ:diffSequ};
        	var oOption = {};
        	var sPopupCallBack = "fn_popupCallback";
        	this.gfn_openPopup("popup","BH05::BH05_4080502_P01.xfdl",oArg,sPopupCallBack,oOption);
        };

        // 엔터 입력
        this.fn_onKeydown = function(obj, e) {
        	if (e.keycode == 13) {
        		this.fn_Ret();
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.btnAdd03.addEventHandler("onclick",this.btnAdd03_onclick,this);
            this.divSearch.form.spnSearchSchlYear.addEventHandler("canchange",this.divSearch_spnSearchSchlYear_canchange,this);
            this.divSearch.form.spnSearchSchlYear.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.divSearch.form.edtSearchStntName.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.divSearch.form.cboSearchSchlSmst.addEventHandler("canitemchange",this.divSearch_cboSearchSchlSmst_canitemchange,this);
            this.divSearch.form.cboSearchSchlSmst.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.divSearch.form.cboSearchDiffSequ.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.divSearch.form.cboSearchDiffSequ.addEventHandler("canitemchange",this.divSearch2_cboSearchSchlSmst_canitemchange,this);
            this.divSearch.form.cboSearchStntGubn.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.divSearch.form.cboSearchStntGubn.addEventHandler("canitemchange",this.divSearch2_cboSearchSchlSmst_canitemchange,this);
            this.divSearch.form.cboSearchRoom.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.divSearch.form.cboSearchRoom.addEventHandler("canitemchange",this.divSearch2_cboSearchSchlSmst_canitemchange,this);
            this.divSearch.form.edtSearchStntName00.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.grdMaster.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster.addEventHandler("oncellclick",this.grdMaster_oncellclick,this);
            this.grdMaster.addEventHandler("onselectchanged",this.grdMaster_onselectchanged,this);
            this.grdMaster.addEventHandler("onexpandup",this.grdMaster_onexpandup,this);
            this.grdMaster.addEventHandler("onenterdown",this.grdMaster_onenterdown,this);
            this.cboJikjong00_00_00.addEventHandler("onlbuttondown",this.cboSearchGyeyeol_onlbuttondown,this);
            this.cboJikjong00_00_00.addEventHandler("onitemchanged",this.cboSearchGyeyeol_onitemchanged,this);
            this.cboJikjong00_00_00.addEventHandler("onkeydown",this.div_01_cboSearchGyeyeol_onkeydown,this);
            this.btnAdd02.addEventHandler("onclick",this.btnAdd02_onclick,this);
            this.btnAdd01.addEventHandler("onclick",this.btnAdd01_onclick,this);
            this.btnPrint.addEventHandler("onclick",this.btnPrint_onclick,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsSchl.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsSchl.addEventHandler("onvaluechanged",this.dsMaster_onvaluechanged,this);
            this.dsSchl.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
            this.dsSchl.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
            this.ds_inputSchl.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
            this.dsDiffSequ.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsDiffSequ.addEventHandler("onvaluechanged",this.dsMaster_onvaluechanged,this);
            this.dsDiffSequ.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
            this.dsDiffSequ.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
            this.ds_inputDiffSequ.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
        };
        this.loadIncludeScript("BH05_4080502_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
