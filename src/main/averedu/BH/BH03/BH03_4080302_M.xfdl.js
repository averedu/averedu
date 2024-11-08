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
            this.set_titletext("관생 인원리스트");
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
            obj._setContents("<ColumnInfo><Column id=\"SCHL_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"SCHL_SMST\" type=\"STRING\" size=\"2\"/><Column id=\"STNT_NUMB\" type=\"STRING\" size=\"15\"/><Column id=\"STNT_KNAM\" type=\"STRING\" size=\"50\"/><Column id=\"BLNG_DEPT\" type=\"STRING\" size=\"65532\"/><Column id=\"STNT_SEXC\" type=\"STRING\" size=\"1\"/><Column id=\"RWPN_SCOR\" type=\"STRING\" size=\"65532\"/><Column id=\"CELL_NUMB\" type=\"STRING\" size=\"65532\"/><Column id=\"TELE_NUMB\" type=\"STRING\" size=\"65532\"/><Column id=\"CMPN_ADDR\" type=\"STRING\" size=\"601\"/><Column id=\"PASS_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"JOIN_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"QUIT_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"ASSN_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"DEUN_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"STNT_GUBN\" type=\"STRING\" size=\"4\"/><Column id=\"STAT_GUBN\" type=\"STRING\" size=\"2\"/><Column id=\"ASSN_ROOM\" type=\"STRING\" size=\"65532\"/><Column id=\"RMRK_NOTE\" type=\"STRING\" size=\"100\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"35\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"SCHL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SCHL_SMST\" type=\"STRING\" size=\"256\"/><Column id=\"STNT_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"STNT_KNAM\" type=\"STRING\" size=\"256\"/><Column id=\"STAT_GUBN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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


            obj = new Dataset("dsStat", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGrdStat", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDtGender", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01_00","520","42","100","35",null,null,null,null,null,null,this);
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

            obj = new Static("stc_09_00","1","47","100","31",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("선정자 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","100","50","200","24",null,null,null,null,null,null,this);
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

            obj = new Grid("grdMaster","0","79",null,"457","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsMaster");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"180\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"학번\"/><Cell col=\"2\" text=\"성명\"/><Cell col=\"3\" text=\"상태\"/><Cell col=\"4\" text=\"휴대폰\"/><Cell col=\"5\" text=\"전화번호\"/><Cell col=\"6\" text=\"학부/학과\"/><Cell col=\"7\" text=\"호실\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:STNT_NUMB\" displaytype=\"normal\"/><Cell col=\"2\" text=\"bind:STNT_KNAM\"/><Cell col=\"3\" text=\"bind:STAT_GUBN\" combodataset=\"dsStat\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\" displaytype=\"expr:STAT_GUBN == &apos;&apos;?&apos;normal&apos;:&apos;combotext&apos;\"/><Cell col=\"4\" text=\"bind:CELL_NUMB\"/><Cell col=\"5\" text=\"bind:TELE_NUMB\"/><Cell col=\"6\" text=\"bind:BLNG_DEPT\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:ASSN_ROOM\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","0","539","165","31",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00","0","563",null,"8","0",null,null,null,null,null,this);
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

            obj = new Static("Static01_00_00","500","536","35","35",null,null,null,null,null,null,this);
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

            obj = new ImageViewer("imgView","0","571","120","160",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_stretch("fixaspectratio");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_01","125","571","1160","28",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00","125","571","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("학번");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00_00","415","571","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_01_00","125","598","1160","28",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00_01","125","598","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("소속");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_01_00_00","125","625","1160","28",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00_01_01","125","625","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_01_00_00_00","125","652","1160","28",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_01_00_00_00_00","125","679","1160","28",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_01_00_00_00_00_00","125","706","1160","28",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00_01_01_00","125","652","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("배정점수");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00_01_01_00_00","125","679","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("합격일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00_01_01_00_00_00","125","706","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00_00_00","705","571","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("성별");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00_01_01_01","415","625","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("HP");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00_01_01_01_00","705","625","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("집주소");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch00","0","0",null,"42","0",null,null,null,null,null,this);
            obj.set_taborder("25");
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

            obj = new Static("stc_01_02_00","390","9","80","22",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("10");
            obj.set_text("학번");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Edit("edtSearchStntName","480","9","120","22",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("11");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00","390","0","56","42",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("12");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_00","470","0","10","42",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("stc_01_02_00_00","600","9","80","22",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("14");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00","600","0","56","42",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("15");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_00_00","680","0","10","42",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("16");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Edit("edtSearchStntName00","690","9","120","22",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("17");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("stc_01_02_00_00_00","810","9","80","22",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("18");
            obj.set_text("상태");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00_00","810","0","56","42",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("19");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_00_00_00","890","0","10","42",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("20");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgi00","900","9","120","22",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("21");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsStat");
            obj.set_text("");
            obj.set_index("0");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00_00_00_00","995","571","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("상벌점");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00_01_01_00_00_01","415","679","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("배정일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00_01_01_00_00_01_01","705","679","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("등록일");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00_01_01_00_00_01_01_00","995","679","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("퇴사일");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGyojikwonNo00_03_00","258","574","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGyojikwonNo00_03_00_00","548","574","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cboRoomGubn00","838","574","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_readonly("true");
            obj.set_innerdataset("dsDtGender");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGyojikwonNo00_03_01","1128","574","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGyojikwonNo00_03_02","258","601","444","22",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGyojikwonNo00_03_03","258","628","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGyojikwonNo00_03_04","548","628","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGyojikwonNo00_03_05","838","628","444","22",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGyojikwonNo00_03_06","258","655","444","22",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGyojikwonNo00_03_07","258","709","1024","22",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calAcptDate00_00_00","258","682","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calAcptDate00_00_01","548","682","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calAcptDate00_00_02","838","682","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calAcptDate00_00_03","1128","682","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("관생 인원리스트");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch00.form.spnSearchYYYY","value","ds_input","SCHL_YEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch00.form.cboSearchHakgi","value","ds_input","SCHL_SMST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch00.form.edtSearchStntName","value","ds_input","STNT_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch00.form.edtSearchStntName00","value","ds_input","STNT_KNAM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch00.form.cboSearchHakgi00","value","ds_input","STAT_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edtGyojikwonNo00_03_00","value","dsMaster","STNT_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edtGyojikwonNo00_03_00_00","value","dsMaster","STNT_KNAM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","cboRoomGubn00","value","dsMaster","STNT_SEXC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edtGyojikwonNo00_03_01","value","dsMaster","RWPN_SCOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edtGyojikwonNo00_03_02","value","dsMaster","BLNG_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edtGyojikwonNo00_03_03","value","dsMaster","TELE_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","edtGyojikwonNo00_03_04","value","dsMaster","CELL_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","edtGyojikwonNo00_03_05","value","dsMaster","CMPN_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","edtGyojikwonNo00_03_06","value","dsMaster","ASSN_ROOM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","calAcptDate00_00_00","value","dsMaster","PASS_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","calAcptDate00_00_01","value","dsMaster","ASSN_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","calAcptDate00_00_02","value","dsMaster","DEUN_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","calAcptDate00_00_03","value","dsMaster","QUIT_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","edtGyojikwonNo00_03_07","value","dsMaster","RMRK_NOTE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("BH03_4080302_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): BH03_4080302_M.xfdl(관생 인원리스트)
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
        	// 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strDs    = "dsHakgi|dsStat";
        	    strDs   += "|dsGrdStat";
        		strDs   += "|dsDtGender";
            // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
        	var strLgcd  = "00022|00741";
        	    strLgcd += "|00741";
        		strLgcd += "|00001";
        	// 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strComb  = "T|T";
        	    strComb += "|N";
        		strComb += "|N";
            var strOptn  = ""; // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId    = "Init";
        	// gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
        	// 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.gfn_CmmnMultiComboLoad(strDs, strLgcd, strComb, strOptn, svcId);

        	// 생활관일정, 차수
        	this.fn_getCurrSchl();
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
                    case "GetCurrSchl":
                            this.fn_PostGetCurrSchl();
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
            var strUrl      = "/prj/BH/BH03/Retrieve_4080302_MList.do";
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

        	if (this.dsMaster.rowcount == 0) {
        		this.imgView.set_image("");
        	}
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

        // 사진 set
        this.fn_picLoad = function()
        {
        	var xhttp = new XMLHttpRequest();
        	xhttp.targetObj = this.dsMaster;
        	xhttp.targetComp = this.imgView;
        	xhttp.onreadystatechange = function() {
        		if (this.readyState == 4 && this.status == 200) {
        			xhttp.targetComp.set_image(xhttp.targetObj.getColumn(xhttp.targetObj.rowposition, 'FILE_PATH'));
        		} else {
        			xhttp.targetComp.set_image('https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Noimage.svg/739px-Noimage.svg.png');
        		}
        	};
        	xhttp.open("GET", this.dsMaster.getColumn(this.dsMaster.rowposition, 'FILE_PATH'), false);
        	xhttp.send();
        };

        this.dsMaster_onrowposchanged = function(obj,e)
        {
        	this.fn_picLoad();
        };

        this.fn_Tip = function()
        {
        	this.alert("도움말 준비중입니다.");
        };

        this.fn_onKeyDown = function(obj, e) {
        	if (e.keycode == "13") {
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
            this.grdMaster.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster.addEventHandler("oncellclick",this.grdMaster_oncellclick,this);
            this.grdMaster.addEventHandler("onselectchanged",this.grdMaster_onselectchanged,this);
            this.grdMaster.addEventHandler("onexpandup",this.grdMaster_onexpandup,this);
            this.grdMaster.addEventHandler("onenterdown",this.grdMaster_onenterdown,this);
            this.divSearch00.form.spnSearchYYYY.addEventHandler("onkeydown",this.fn_onKeyDown,this);
            this.divSearch00.form.cboSearchHakgi.addEventHandler("onkeydown",this.fn_onKeyDown,this);
            this.divSearch00.form.cboSearchHakgi.addEventHandler("onitemchanged",this.divSearch_cboSearchHakgi_onitemchanged,this);
            this.divSearch00.form.edtSearchStntName.addEventHandler("onkeydown",this.fn_onKeyDown,this);
            this.divSearch00.form.edtSearchStntName00.addEventHandler("onkeydown",this.fn_onKeyDown,this);
            this.divSearch00.form.cboSearchHakgi00.addEventHandler("onkeydown",this.fn_onKeyDown,this);
            this.divSearch00.form.cboSearchHakgi00.addEventHandler("onitemchanged",this.divSearch_cboSearchHakgi_onitemchanged,this);
            this.cboRoomGubn00.addEventHandler("onlbuttondown",this.cboSearchGyeyeol_onlbuttondown,this);
            this.cboRoomGubn00.addEventHandler("onitemchanged",this.cboSearchGyeyeol_onitemchanged,this);
            this.cboRoomGubn00.addEventHandler("onkeydown",this.div_01_cboSearchGyeyeol_onkeydown,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsCurrSchl.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
            this.ds_inputCurrSchl.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
            this.dsDiffSequ.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
            this.ds_inputDiffSequ.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
        };
        this.loadIncludeScript("BH03_4080302_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
