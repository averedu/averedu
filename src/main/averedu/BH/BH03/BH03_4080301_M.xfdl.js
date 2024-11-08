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
            this.set_titletext("호실배정");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMaster1", this);
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SCHL_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"SCHL_SMST\" type=\"STRING\" size=\"2\"/><Column id=\"STNT_NUMB\" type=\"STRING\" size=\"15\"/><Column id=\"DIFF_SEQU\" type=\"STRING\" size=\"2\"/><Column id=\"STNT_GUBN\" type=\"STRING\" size=\"4\"/><Column id=\"STNT_KNAM\" type=\"STRING\" size=\"50\"/><Column id=\"ACPT_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"ROOM_GUBN\" type=\"STRING\" size=\"20\"/><Column id=\"BLNG_DEPT\" type=\"STRING\" size=\"65532\"/><Column id=\"STNT_SEXC\" type=\"STRING\" size=\"1\"/><Column id=\"STNT_GRAD\" type=\"STRING\" size=\"1\"/><Column id=\"AVRG_MARK\" type=\"STRING\" size=\"256\"/><Column id=\"TOTL_MARK\" type=\"STRING\" size=\"65532\"/><Column id=\"RWPN_SCOR\" type=\"STRING\" size=\"65532\"/><Column id=\"CELL_NUMB\" type=\"STRING\" size=\"65532\"/><Column id=\"TELE_NUMB\" type=\"STRING\" size=\"65532\"/><Column id=\"CMPN_ADDR\" type=\"STRING\" size=\"1001\"/><Column id=\"DEUN_YORN\" type=\"STRING\" size=\"2\"/><Column id=\"DEUN_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"RMRK_NOTE\" type=\"STRING\" size=\"100\"/><Column id=\"BLDG_CODE\" type=\"STRING\" size=\"3\"/><Column id=\"FLOR_NUMB\" type=\"STRING\" size=\"8\"/><Column id=\"ROOM_NUMB\" type=\"STRING\" size=\"8\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster2", this);
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SCHL_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"SCHL_SMST\" type=\"STRING\" size=\"2\"/><Column id=\"STNT_NUMB\" type=\"STRING\" size=\"15\"/><Column id=\"DIFF_SEQU\" type=\"STRING\" size=\"2\"/><Column id=\"STNT_GUBN\" type=\"STRING\" size=\"4\"/><Column id=\"STNT_KNAM\" type=\"STRING\" size=\"50\"/><Column id=\"ACPT_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"ROOM_GUBN\" type=\"STRING\" size=\"20\"/><Column id=\"BLNG_DEPT\" type=\"STRING\" size=\"65532\"/><Column id=\"STNT_SEXC\" type=\"STRING\" size=\"1\"/><Column id=\"STNT_GRAD\" type=\"STRING\" size=\"1\"/><Column id=\"AVRG_MARK\" type=\"STRING\" size=\"256\"/><Column id=\"TOTL_MARK\" type=\"STRING\" size=\"65532\"/><Column id=\"RWPN_SCOR\" type=\"STRING\" size=\"65532\"/><Column id=\"CELL_NUMB\" type=\"STRING\" size=\"65532\"/><Column id=\"TELE_NUMB\" type=\"STRING\" size=\"65532\"/><Column id=\"CMPN_ADDR\" type=\"STRING\" size=\"1001\"/><Column id=\"DEUN_YORN\" type=\"STRING\" size=\"2\"/><Column id=\"DEUN_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"RMRK_NOTE\" type=\"STRING\" size=\"100\"/><Column id=\"BLDG_CODE\" type=\"STRING\" size=\"3\"/><Column id=\"FLOR_NUMB\" type=\"STRING\" size=\"8\"/><Column id=\"ROOM_NUMB\" type=\"STRING\" size=\"8\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"SCHL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SCHL_SMST\" type=\"STRING\" size=\"256\"/><Column id=\"DIFF_SEQU\" type=\"STRING\" size=\"256\"/><Column id=\"ASSN_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"DEUN_YORN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSub1", this);
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BLDG_CODE\" type=\"STRING\" size=\"3\"/><Column id=\"BLDG_KFNM\" type=\"STRING\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSub2", this);
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"FLOR_NUMB\" type=\"STRING\" size=\"8\"/><Column id=\"FLOR_KFNM\" type=\"STRING\" size=\"60\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSub3", this);
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ROOM_NUMB\" type=\"STRING\" size=\"8\"/><Column id=\"ROOM_KFNM\" type=\"STRING\" size=\"40\"/><Column id=\"ROOM_CAPA\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CONT_INWN\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCurrSchl", this);
            obj._setContents("<ColumnInfo><Column id=\"SCHL_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"SCHL_SMST\" type=\"STRING\" size=\"2\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inputCurrSchl", this);
            obj._setContents("<ColumnInfo><Column id=\"DATE_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDiffSequ", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"255\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"255\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inputDiffSequ", this);
            obj._setContents("<ColumnInfo><Column id=\"SCHL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SCHL_SMST\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgi", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input2", this);
            obj._setContents("<ColumnInfo><Column id=\"BLDG_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"FLOR_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"ROOM_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"SCHL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SCHL_SMST\" type=\"STRING\" size=\"256\"/><Column id=\"DIFF_SEQU\" type=\"STRING\" size=\"256\"/><Column id=\"DEUN_YORN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inputSub2", this);
            obj._setContents("<ColumnInfo><Column id=\"BLDG_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inputSub3", this);
            obj._setContents("<ColumnInfo><Column id=\"BLDG_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"FLOR_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"SCHL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SCHL_SMST\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGrdStnt", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"42","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01_00","0","9","50","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","60","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01","180","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("학기");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgi","270","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsHakgi");
            obj.set_text("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","180","0","56","42",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","50","0","10","42",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","42",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01","260","0","10","42",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","0","0","1640","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","0","32","1640","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01_00","390","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("차수");
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

            obj = new Static("Static01_02_00_00_00_01_00","470","0","10","42",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchDiffSequ","480","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsDiffSequ");
            obj.set_text("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","800","42","35","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt1","475","48","200","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","0","45","80","31",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("호실목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","69","1640","8",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster1","330","77",null,"300","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("dsMaster1");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"40\"/><Column size=\"200\"/><Column size=\"60\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"구분\"/><Cell col=\"2\" text=\"학번\"/><Cell col=\"3\" text=\"성명\"/><Cell col=\"4\" text=\"학년\"/><Cell col=\"5\" text=\"학과\"/><Cell col=\"6\" text=\"배정인실\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:STNT_GUBN\" displaytype=\"combotext\" combodataset=\"dsGrdStnt\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"2\" text=\"bind:STNT_NUMB\"/><Cell col=\"3\" text=\"bind:STNT_KNAM\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:STNT_GRAD\"/><Cell col=\"5\" text=\"bind:BLNG_DEPT\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:ROOM_GUBN\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdSub1","0","77","300","200",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("dsSub1");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"185\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"건물\"/></Band><Band id=\"body\"><Cell text=\"bind:BLDG_KFNM\" editinputtype=\"number,digit\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdSub2","0","285","300","200",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("dsSub2");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"185\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"층수\"/></Band><Band id=\"body\"><Cell text=\"bind:FLOR_KFNM\" editinputtype=\"number,digit\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdSub3","0","493","300",null,null,"0",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("dsSub3");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"50\"/><Column size=\"50\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"호실\"/><Cell col=\"1\" text=\"배정인원\"/><Cell col=\"2\" text=\"수용인원\"/></Band><Band id=\"body\"><Cell text=\"bind:ROOM_KFNM\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:CONT_INWN\"/><Cell col=\"2\" text=\"bind:ROOM_CAPA\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","300","42","30",null,null,"0",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("←30→");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster2","331","412",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("dsMaster2");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"40\"/><Column size=\"200\"/><Column size=\"60\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"구분\"/><Cell col=\"2\" text=\"학번\"/><Cell col=\"3\" text=\"성명\"/><Cell col=\"4\" text=\"학년\"/><Cell col=\"5\" text=\"학과\"/><Cell col=\"6\" text=\"배정인실\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:STNT_GUBN\" displaytype=\"combotext\" combodataset=\"dsGrdStnt\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"2\" text=\"bind:STNT_NUMB\"/><Cell col=\"3\" text=\"bind:STNT_KNAM\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:STNT_GRAD\"/><Cell col=\"5\" text=\"bind:BLNG_DEPT\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:ROOM_GUBN\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","775","377","35","35",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00","330","404",null,"8","0",null,null,null,null,null,this);
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

            obj = new Static("stc_09_00_00","330","45","145","31",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("미배정된 인원 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00_00","330","380","130","31",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("배정된 인원 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt2","460","383","200","24",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"385","30","20","665",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("▼");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"385","30","20","630",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("▲");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"383","50","25","3",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("호실배정");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.spnSearchYYYY","value","ds_input","SCHL_YEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboSearchHakgi","value","ds_input","SCHL_SMST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboSearchDiffSequ","value","ds_input","DIFF_SEQU");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster1");
            this._addPreloadList("data","","dsMaster2");
            this._addPreloadList("data","","dsSub1");
            this._addPreloadList("data","","dsSub2");
            this._addPreloadList("data","","dsSub3");
        };
        
        // User Script
        this.registerScript("BH03_4080301_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): BH03_4080301_M.xfdl(호실배정)
        * 작 성         일 명: 정진호
        * 작 성         일 자: 2022/10/07
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
            var strDs    = "dsHakgi|dsGrdStnt";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00022|00743";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "X|N";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = "";                                      // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId    = "Init";
        	// gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
        	// 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.gfn_CmmnMultiComboLoad(strDs, strLgcd, strComb, strOptn, svcId);

        	// 생활관일정, 차수
        	this.fn_getCurrSchl();
        	// 건물 조회
        	this.fn_getBuilding();
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
                    case "Ret1":
                            this.fn_PostRet1();
                        break;
                    case "Save":
                            this.fn_PostSave();
                        break;
                    case "GetCurrSchl":
                            this.fn_PostGetCurrSchl();
                        break;
                    case "GetDiffSequ":
                            this.fn_PostGetDiffSequ();
                        break;
                    case "GetBuilding":
        					this.fn_PostGetBuilding();
                        break;
                    case "GetFloor":
        					this.fn_PostGetFloor();
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
                case "tmp1" :        // 여분버튼1
                         this.fn_Tmp1();
                    break;
                default :
                    break;
            };
        };;

        /**********************************************************************
                05. 조회 함수 선언(마스터 함수)
        ***********************************************************************/
        this.fn_Ret = function() {
        	this.fn_Ret1();
        	this.fn_Ret2();
        	this.fn_getBuilding();
        }

        /**
         * 기능 : 미배정목록 조회
         */
        this.fn_PreRet1 = function()
        {
            // 조회조건 셋팅
        	this.ds_input.setColumn(0, "ASSN_GUBN", "1");
        	this.ds_input.setColumn(0, "DEUN_YORN", "Y");
            return true;
        };
        this.fn_Ret1 = function()
        {
            if (!this.fn_PreRet1()) {
                return false;
            }
            var strSvc      = "Ret1";
            var strUrl      = "/prj/BH/BH03/Retrieve_4080301_MList1.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsMaster1=dsMaster";
            var strArg      = "";
            var GBV_MENUID	= objApp.gv_cutPrgId;
            if (!this.gfn_isNull(this.gfn_trim(GBV_MENUID))) {
            	strArg     += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        };
        this.fn_PostRet1 = function()
        {
            this.gfn_getRowCount(this.staRowCnt1, this.dsMaster1);
        };

        /**
         * 기능 : 배정목록 조회
         */
        this.fn_PreRet2 = function()
        {
            // 조회조건 셋팅
        	this.ds_input2.setColumn(0, "BLDG_CODE", this.dsSub1.getColumn(this.dsSub1.rowposition, "BLDG_CODE"));
        	this.ds_input2.setColumn(0, "FLOR_NUMB", this.dsSub2.getColumn(this.dsSub2.rowposition, "FLOR_NUMB"));
        	this.ds_input2.setColumn(0, "ROOM_NUMB", this.dsSub3.getColumn(this.dsSub3.rowposition, "ROOM_NUMB"));
        	this.ds_input2.setColumn(0, "SCHL_YEAR", this.ds_input.getColumn(0, "SCHL_YEAR"));
        	this.ds_input2.setColumn(0, "SCHL_SMST", this.ds_input.getColumn(0, "SCHL_SMST"));
        	this.ds_input2.setColumn(0, "DIFF_SEQU", this.ds_input.getColumn(0, "DIFF_SEQU"));
        	this.ds_input2.setColumn(0, "DEUN_YORN", "Y");
            return true;
        };
        this.fn_Ret2 = function()
        {
            if (!this.fn_PreRet2()) {
                return false;
            }
            var strSvc      = "Ret2";
            var strUrl      = "/prj/BH/BH03/Retrieve_4080301_MList2.do";
            var strInDs     = "ds_input=ds_input2";
            var strOutDs    = "dsMaster2=dsMaster";
            var strArg      = "";
            var GBV_MENUID	= objApp.gv_cutPrgId;
            if (!this.gfn_isNull(this.gfn_trim(GBV_MENUID))) {
            	strArg     += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        };
        this.fn_PostRet2 = function()
        {
            this.gfn_getRowCount(this.staRowCnt2, this.dsMaster2);
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
        	this.fn_getDiffSequ();
        }

        // 생활관일정차수
        this.fn_getDiffSequ = function() {
        	this.ds_inputDiffSequ.setColumn(0, "SCHL_YEAR", this.ds_input.getColumn(0, "SCHL_YEAR"));
        	this.ds_inputDiffSequ.setColumn(0, "SCHL_SMST", this.ds_input.getColumn(0, "SCHL_SMST"));
        	this.ds_inputDiffSequ.setColumn(0, "DATE_CODE", "1");

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
        	this.dsDiffSequ.insertRow(0);
        	this.dsDiffSequ.setColumn(0, "CODE_NM", "전체");
        	this.divSearch.form.cboSearchDiffSequ.set_index(0);
        }

        // 건물
        this.fn_getBuilding = function() {
            var strSvc      = "GetBuilding";
            var strUrl      = "/prj/BH/BH03/Retrieve_4080301_BuildingList.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsSub1=dsMaster";
            var strArg      = "";
            var GBV_MENUID	= objApp.gv_cutPrgId;
            if (!this.gfn_isNull(this.gfn_trim(GBV_MENUID))) {
            	strArg     += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        }
        this.fn_PostGetBuilding = function() {
        	this.fn_getFloor();
        }

        // 층수
        this.fn_getFloor = function() {
        	this.ds_inputSub2.setColumn(0, "BLDG_CODE", this.dsSub1.getColumn(this.dsSub1.rowposition, "BLDG_CODE"));

            var strSvc      = "GetFloor";
            var strUrl      = "/prj/BH/BH03/Retrieve_4080301_FloorList.do";
            var strInDs     = "ds_input=ds_inputSub2";
            var strOutDs    = "dsSub2=dsMaster";
            var strArg      = "";
            var GBV_MENUID	= objApp.gv_cutPrgId;
            if (!this.gfn_isNull(this.gfn_trim(GBV_MENUID))) {
            	strArg     += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        }
        this.fn_PostGetFloor = function() {
        	this.fn_getRoom();
        }

        // 호수
        this.fn_getRoom = function() {
        	this.ds_inputSub3.setColumn(0, "SCHL_YEAR", this.ds_input.getColumn(0, "SCHL_YEAR"));
        	this.ds_inputSub3.setColumn(0, "SCHL_SMST", this.ds_input.getColumn(0, "SCHL_SMST"));
        	this.ds_inputSub3.setColumn(0, "BLDG_CODE", this.dsSub1.getColumn(this.dsSub1.rowposition, "BLDG_CODE"));
        	this.ds_inputSub3.setColumn(0, "FLOR_NUMB", this.dsSub2.getColumn(this.dsSub2.rowposition, "FLOR_NUMB"));

            var strSvc      = "GetRoom";
            var strUrl      = "/prj/BH/BH03/Retrieve_4080301_RoomList.do";
            var strInDs     = "ds_input=ds_inputSub3";
            var strOutDs    = "dsSub3=dsMaster";
            var strArg      = "";
            var GBV_MENUID	= objApp.gv_cutPrgId;
            if (!this.gfn_isNull(this.gfn_trim(GBV_MENUID))) {
            	strArg     += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        }

        this.dsSub1_onrowposchanged = function(obj,e)
        {
        	if (this.dsSub3.rowcount == 0) {
        		this.dsSub3.clearData();
        		this.dsMaster2.clearData();
        	} else {
        		this.fn_getFloor();
        	}
        };

        this.dsSub2_onrowposchanged = function(obj,e)
        {
        	this.fn_getRoom();
        };

        this.dsSub3_onrowposchanged = function(obj,e)
        {
        	this.fn_Ret2();
        };

        // 배정
        this.btnAdd_onclick = function(obj,e)
        {
        	if (this.dsMaster1.rowcount == 0) {
        	    this.alert('배정된 인원 목록으로 이동할수 있는 인원이 존재하지 않습니다.');
        		return;
        	}

        	var bldgCode = this.dsSub1.getColumn(this.dsSub1.rowposition, "BLDG_CODE");
        	var florNumb = this.dsSub2.getColumn(this.dsSub2.rowposition, "FLOR_NUMB");
        	var roomNumb = this.dsSub3.getColumn(this.dsSub3.rowposition, "ROOM_NUMB");

        	var selectedList = this.grdMaster1.getSelectedDatasetRows();
        	if (this.fn_checkInwon(nexacro.toNumber(selectedList.length)) == false) {
        		return;
        	}

        	for (var i = 0; i < selectedList.length; i++) {
        		var selectedRow = nexacro.toNumber(selectedList[i]) - i;
        		var addRow = this.dsMaster2.addRow();
        		this.dsMaster2.copyRow(addRow, this.dsMaster1, selectedRow);
        		this.dsMaster2.setColumn(addRow, "BLDG_CODE", bldgCode);
        		this.dsMaster2.setColumn(addRow, "FLOR_NUMB", florNumb);
        		this.dsMaster2.setColumn(addRow, "ROOM_NUMB", roomNumb);
        		this.dsMaster1.deleteRow(selectedRow);
        	}

        	// 미배정된 인원 마지막 행에 세팅
        	this.grdMaster1.clearSelect();
        	if (this.dsMaster1.rowcount != 0) {
        		if (nexacro.toNumber(selectedList[nexacro.toNumber(selectedList.length) - 1]) >= nexacro.toNumber(this.dsMaster1.rowcount - 1)) {
        			this.grdMaster1.selectRow(this.dsMaster1.rowcount - 1, true);
        		} else {
        			this.grdMaster1.selectRow(selectedList[nexacro.toNumber(selectedList.length) - 1]);
        		}
        	}

        	// 배정된 인원 마지막 행에 세팅
        	this.grdMaster2.clearSelect();
        	if (this.dsMaster2.rowcount != 0) {
        		this.grdMaster2.selectRow(this.dsMaster2.rowcount - 1, true);
        	}

        	this.fn_PostRet1();
        	this.fn_PostRet2();
        };

        // 미배정
        this.btnDel_onclick = function(obj,e)
        {
        	if (this.dsMaster2.rowcount == 0) {
        	    this.alert('미배정된 인원 목록으로 이동할수 있는 인원이 존재하지 않습니다.');
        		return;
        	}

        	var bldgCode = this.dsSub1.getColumn(this.dsSub1.rowposition, "BLDG_CODE");
        	var florNumb = this.dsSub2.getColumn(this.dsSub2.rowposition, "FLOR_NUMB");
        	var roomNumb = this.dsSub3.getColumn(this.dsSub3.rowposition, "ROOM_NUMB");

        	var selectedList = this.grdMaster2.getSelectedDatasetRows();
        	if (this.fn_checkInwon(nexacro.toNumber(selectedList.length)*(-1)) == false) {
        		return;
        	}

        	for (var i = 0; i < selectedList.length; i++) {
        		var selectedRow = nexacro.toNumber(selectedList[i]) - i;
        		var addRow = this.dsMaster1.addRow();
        		this.dsMaster1.copyRow(addRow, this.dsMaster2, selectedRow);
        		this.dsMaster1.setColumn(addRow, "BLDG_CODE", "");
        		this.dsMaster1.setColumn(addRow, "FLOR_NUMB", "");
        		this.dsMaster1.setColumn(addRow, "ROOM_NUMB", "");
        		this.dsMaster2.deleteRow(selectedRow);
        	}

        	// 미배정된 인원 마지막 행에 세팅
        	this.grdMaster2.clearSelect();
        	if (this.dsMaster2.rowcount != 0) {
        		if (nexacro.toNumber(selectedList[nexacro.toNumber(selectedList.length) - 1]) >= nexacro.toNumber(this.dsMaster2.rowcount - 1)) {
        			this.grdMaster2.selectRow(this.dsMaster2.rowcount - 1, true);
        		} else {
        			this.grdMaster2.selectRow(selectedList[nexacro.toNumber(selectedList.length) - 1]);
        		}
        	}

        	// 배정된 인원 마지막 행에 세팅
        	this.grdMaster1.clearSelect();
        	if (this.dsMaster1.rowcount != 0) {
        		this.grdMaster1.selectRow(this.dsMaster1.rowcount - 1, true);
        	}

        	this.fn_PostRet1();
        	this.fn_PostRet2();
        };

        // 배정인원, 수용인원 체크
        this.fn_checkInwon = function(cnt) {
        	// 배정인원
        	var calContInwn = nexacro.toNumber(this.dsSub3.getColumn(this.dsSub3.rowposition, "CONT_INWN")) + nexacro.toNumber(cnt);
        	// 수용인원
        	var calRoomCapa = nexacro.toNumber(this.dsSub3.getColumn(this.dsSub3.rowposition, "ROOM_CAPA"))

        	// 배정인원 > 수용인원
        	if (calContInwn > calRoomCapa) {
        	    this.alert('인원을 초과하였습니다.');
        		return false;
        	} else {
        		this.dsSub3.setColumn(this.dsSub3.rowposition, "CONT_INWN", calContInwn);
        		return true;
        	}
        }

        // 저장
        this.btnSave_onclick = function(obj,e)
        {
        	var result = this.gfn_confirm( "저장하시겠습니까?", "저장","","question" );
        	if (result == 0) {
        		return false;
        	}

            var strSvc      = "Save";
            var strUrl      = "/prj/BH/BH03/Save_4080301_MList.do";
            var strInDs     = "ds_input=ds_input2:a ";
                strInDs    += "dsMaster=dsMaster2:u";
            var strOutDs    = "";
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
        this.fn_PostSave = function()
        {
        	this.fn_Ret();
        };

        // 데이터 변경여부 체크
        this.fn_checkChangedData = function() {
        	if (this.gfn_isUpdate(this.dsMaster2)) { // 변경
        		var result = this.gfn_confirm( "수정중인 호실배정 정보가 초기화됩니다.\n계속하시겠습니까?", "수정","","question" );
        		if (result == 0) {
        			return false;
        		} else {
        			this.dsMaster1.reset();
        			this.dsMaster2.reset();

        			// 리셋 후 배정된 인원수
        			var cntY = this.dsMaster2.rowcount;
        			this.dsSub3.setColumn(this.dsSub3.rowposition, "CONT_INWN", cntY);
        			return true;
        		}
        	}
        }

        this.fn_onKeyDown = function(obj, e) {
        	if (e.keycode == "13") {
        		this.fn_Ret();
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclose",this.form_onclose,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onkeydown",this.fn_onKeyDown,this);
            this.divSearch.form.cboSearchHakgi.addEventHandler("onkeydown",this.fn_onKeyDown,this);
            this.divSearch.form.cboSearchHakgi.addEventHandler("onitemchanged",this.divSearch_cboSearchHakgi_onitemchanged,this);
            this.divSearch.form.cboSearchDiffSequ.addEventHandler("onkeydown",this.fn_onKeyDown,this);
            this.divSearch.form.cboSearchDiffSequ.addEventHandler("onitemchanged",this.divSearch_cboSearchHakgi_onitemchanged,this);
            this.grdMaster1.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
            this.grdMaster1.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster1.addEventHandler("onselectchanged",this.grdMaster_onselectchanged,this);
            this.grdMaster1.addEventHandler("onexpandup",this.grdMaster_onexpandup,this);
            this.grdSub1.addEventHandler("onselectchanged",this.grdMaster_onselectchanged,this);
            this.grdSub2.addEventHandler("onselectchanged",this.grdMaster_onselectchanged,this);
            this.grdSub3.addEventHandler("onselectchanged",this.grdMaster_onselectchanged,this);
            this.grdMaster2.addEventHandler("onselectchanged",this.grdMaster_onselectchanged,this);
            this.btnAdd.addEventHandler("onclick",this.btnAdd_onclick,this);
            this.btnDel.addEventHandler("onclick",this.btnDel_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.dsMaster1.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsMaster1.addEventHandler("onvaluechanged",this.dsMaster_onvaluechanged,this);
            this.dsMaster1.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
            this.dsMaster1.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
            this.dsMaster2.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsMaster2.addEventHandler("onvaluechanged",this.dsMaster_onvaluechanged,this);
            this.dsMaster2.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
            this.dsMaster2.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
            this.ds_input.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
            this.dsSub1.addEventHandler("onrowposchanged",this.dsSub1_onrowposchanged,this);
            this.dsSub1.addEventHandler("canrowposchange",this.fn_checkChangedData,this);
            this.dsSub2.addEventHandler("onrowposchanged",this.dsSub2_onrowposchanged,this);
            this.dsSub2.addEventHandler("canrowposchange",this.fn_checkChangedData,this);
            this.dsSub3.addEventHandler("onrowposchanged",this.dsSub3_onrowposchanged,this);
            this.dsSub3.addEventHandler("canrowposchange",this.fn_checkChangedData,this);
            this.dsCurrSchl.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
            this.ds_inputCurrSchl.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
            this.dsDiffSequ.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
            this.ds_inputDiffSequ.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
            this.ds_input2.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
            this.ds_inputSub2.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
            this.ds_inputSub3.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
        };
        this.loadIncludeScript("BH03_4080301_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
