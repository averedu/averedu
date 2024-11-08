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
            this.set_titletext("강의실관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGeonmul", this);
            obj.set_preload("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GEONMUL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GEONMUL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GEONMUL_ABBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GEONMUL_ENM\" type=\"STRING\" size=\"256\"/><Column id=\"GEONMUL_ABBR_ENM\" type=\"STRING\" size=\"256\"/><Column id=\"GEONMUL_ADMIN\" type=\"STRING\" size=\"256\"/><Column id=\"GEONMUL_ADMIN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GEONMUL_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"GEONMUL_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"GEONMULYONGDOGBCD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGrdGeonmulGbcb", this);
            obj.set_arguments("00539");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCheung", this);
            obj.set_preload("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GEONMUL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHEUNG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHEUNG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHEUNG_ABBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHEUNG_ADMIN\" type=\"STRING\" size=\"256\"/><Column id=\"CHEUNG_ADMIN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHEUNG_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"CHEUNG_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHEUNG_MYEONJEOK\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHosil", this);
            obj.set_preload("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"HOSIL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GEONMUL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHEUNG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HOSIL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HOSIL_ABBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HOSIL_INWON\" type=\"STRING\" size=\"256\"/><Column id=\"HOSIL_ADMIN\" type=\"STRING\" size=\"256\"/><Column id=\"HOSIL_ADMIN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HOSIL_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"HOSIL_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SOSOK_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"SOSOK_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"YONGDO_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"HOSIL_MYEONJEOK\" type=\"STRING\" size=\"256\"/><Column id=\"GANGUISIL_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGeonmulYongdoGbcd", this);
            obj.set_preload("true");
            obj.set_useclientlayout("true");
            obj.set_arguments("00539");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dInput", this);
            obj._setContents("<ColumnInfo><Column id=\"GEONMUL_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ddInput", this);
            obj._setContents("<ColumnInfo><Column id=\"GEONMUL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHEUNG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"YONGDO_GBCD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGrdGaanguisilGbcb", this);
            obj.set_arguments("00033");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"42","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01","7","9","92","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("건물용도구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00","100","0","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01","14","0","190","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","14","31","190","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchdsGeonmulYongdo","110","9","111","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_enable("true");
            obj.set_innerdataset("dsGeonmulYongdoGbcd");
            obj.set_autoselect("true");
            obj.set_text("");
            obj.set_value("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","154","42","100","45",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("↑\r\n45\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_05_00","0","62","220","22",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("건물별 정보");
            obj.set_cssclass("sta_WF_Title01");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01_00","-1","79","520","8",null,null,null,null,null,null,this);
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

            obj = new Button("btnAdd","325","53","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("신규");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_tabstop("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","389","53","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_tabstop("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel","453","53","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_tabstop("true");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","95","61","123","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdGeonmul","0","87","514","315",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("dsGeonmul");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"98\"/><Column size=\"94\"/><Column size=\"90\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"건물코드\" cssclass=\"point\"/><Cell col=\"2\" text=\"건물명\"/><Cell col=\"3\" text=\"건물약어명\"/><Cell col=\"4\" text=\"건물영문명\"/><Cell col=\"5\" text=\"건물영문약어명\"/><Cell col=\"6\" text=\"건물관리자\"/><Cell col=\"7\" text=\"건물관리부서\"/><Cell col=\"8\" text=\"비고\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:GEONMUL_CD\" edittype=\"expr:dataset.getRowType(currow) == &apos;2&apos; ? &apos;text&apos; : &apos;GEONMUL_CD&apos;\" editmaxlength=\"3\" editinputtype=\"number\"/><Cell col=\"2\" text=\"bind:GEONMUL_NM\" edittype=\"text\" editmaxlength=\"33\" editinputtype=\"normal\"/><Cell col=\"3\" text=\"bind:GEONMUL_ABBR_NM\" edittype=\"text\" editmaxlength=\"33\" editinputtype=\"normal\"/><Cell col=\"4\" text=\"bind:GEONMUL_ENM\" edittype=\"text\" editmaxlength=\"70\" editinputtype=\"english,half\"/><Cell col=\"5\" text=\"bind:GEONMUL_ABBR_ENM\" edittype=\"text\" editmaxlength=\"50\" editinputtype=\"half,english\"/><Cell col=\"6\" text=\"bind:GEONMUL_ADMIN_NM\" edittype=\"none\" expandshow=\"show\" expandsize=\"16\" displaytype=\"normal\"/><Cell col=\"7\" text=\"bind:GEONMUL_DEPT_NM\" edittype=\"none\" expandshow=\"show\" expandsize=\"16\"/><Cell col=\"8\" text=\"bind:BIGO\" edittype=\"text\" editmaxlength=\"66\" editinputtype=\"normal\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_05_00_00","0","422","220","22",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("층별 정보");
            obj.set_cssclass("sta_WF_Title01");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd2","325","413","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("신규");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_tabstop("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave2","389","413","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_tabstop("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel2","454","413","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_tabstop("true");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt2","82","420","123","24",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdHosil","544","86",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("dsHosil");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"호실코드\" cssclass=\"point\"/><Cell col=\"2\" text=\"건물코드\"/><Cell col=\"3\" text=\"층코드\"/><Cell col=\"4\" text=\"호실명\"/><Cell col=\"5\" text=\"호실약어명\"/><Cell col=\"6\" text=\"호실인원\"/><Cell col=\"7\" text=\"호실관리자\"/><Cell col=\"8\" text=\"호실관리부서\"/><Cell col=\"9\" text=\"소속학과\"/><Cell col=\"10\" text=\"용도구분\"/><Cell col=\"11\" text=\"호실면적\"/><Cell col=\"12\" text=\"강의실구분\"/><Cell col=\"13\" text=\"비고\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:HOSIL_CD\" edittype=\"expr:dataset.getRowType(currow) == &apos;2&apos; ? &apos;text&apos; : &apos;none&apos;\" editmaxlength=\"4\" editinputtype=\"number,half\"/><Cell col=\"2\" text=\"bind:GEONMUL_CD\" edittype=\"text\" editmaxlength=\"3\" editinputtype=\"number\"/><Cell col=\"3\" text=\"bind:CHEUNG_CD\" edittype=\"text\" editmaxlength=\"3\" editinputtype=\"number\"/><Cell col=\"4\" text=\"bind:HOSIL_NM\" edittype=\"text\" editmaxlength=\"26\"/><Cell col=\"5\" text=\"bind:HOSIL_ABBR_NM\" edittype=\"text\" editmaxlength=\"13\"/><Cell col=\"6\" text=\"bind:HOSIL_INWON\" edittype=\"text\" editmaxlength=\"5\" editinputtype=\"number\"/><Cell col=\"7\" text=\"bind:HOSIL_ADMIN_NM\" edittype=\"none\" expandshow=\"show\"/><Cell col=\"8\" text=\"bind:HOSIL_DEPT_NM\" edittype=\"none\" expandshow=\"show\"/><Cell col=\"9\" text=\"bind:SOSOK_DEPT_NM\" edittype=\"none\" expandshow=\"show\"/><Cell col=\"10\" text=\"bind:YONGDO_GBCD\" edittype=\"combo\" combodataset=\"dsGeonmulYongdoGbcd\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" displaytype=\"combotext\"/><Cell col=\"11\" text=\"bind:HOSIL_MYEONJEOK\" edittype=\"text\" editmaxlength=\"9\" editinputtype=\"number,dot\"/><Cell col=\"12\" text=\"bind:GANGUISIL_GBCD\" edittype=\"combo\" combodataset=\"dsGrdGaanguisilGbcb\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" displaytype=\"combotext\"/><Cell col=\"13\" text=\"bind:BIGO\" edittype=\"text\" editmaxlength=\"66\" editinputtype=\"normal\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_05_00_01","545","60","220","22",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("호실별 정보");
            obj.set_cssclass("sta_WF_Title01");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd3",null,"53","60","25","130",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("신규");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_tabstop("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave3",null,"53","60","25","65",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_tabstop("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel3",null,"53","60","25","0",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_tabstop("true");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt3","643","59","123","24",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdCheung","0","446","514",null,null,"0",null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("dsCheung");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"건물코드\" cssclass=\"point\"/><Cell col=\"2\" text=\"층코드\" cssclass=\"point\"/><Cell col=\"3\" text=\"층명\"/><Cell col=\"4\" text=\"층약어명\"/><Cell col=\"5\" text=\"층관리자\"/><Cell col=\"6\" text=\"층관리부서\"/><Cell col=\"7\" text=\"층면적\"/><Cell col=\"8\" text=\"비고\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:GEONMUL_CD\"/><Cell col=\"2\" text=\"bind:CHEUNG_CD\" edittype=\"expr:dataset.getRowType(currow) == &apos;2&apos; ? &apos;text&apos; : &apos;none&apos;\" editmaxlength=\"3\" editinputtype=\"number,english\"/><Cell col=\"3\" text=\"bind:CHEUNG_NM\" edittype=\"text\" editmaxlength=\"23\" editinputtype=\"normal\"/><Cell col=\"4\" text=\"bind:CHEUNG_ABBR_NM\" edittype=\"text\" editmaxlength=\"13\" editinputtype=\"normal\"/><Cell col=\"5\" text=\"bind:CHEUNG_ADMIN_NM\" edittype=\"none\" expandshow=\"show\"/><Cell col=\"6\" text=\"bind:CHEUNG_DEPT_NM\" edittype=\"none\" expandshow=\"show\"/><Cell col=\"7\" text=\"bind:CHEUNG_MYEONJEOK\" edittype=\"text\" editmaxlength=\"2\" editinputtype=\"number,dot\"/><Cell col=\"8\" text=\"bind:BIGO\" edittype=\"text\" editmaxlength=\"66\" editinputtype=\"normal\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01_00_01","540","78","320","8",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01","514","41","30","630",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("30");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_02","181","401","100","45",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("↑\r\n45\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01_00_02","0","438","520","8",null,null,null,null,null,null,this);
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

            obj = new Static("Static01_01_00_00_00_01_00_01_00","860","78",null,"8","0",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("강의실관리");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item7","calSearchSincheongSijakDt00_01","value","dsMaster","GOJISEO_PRINT_FRDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","calSearchSincheongJongryoDt00_01","value","dsMaster","GOJISEO_PRINT_TODT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","btnAdd","enable","dsBindableMaster","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","btnNew2","enable","dsBindableDetail","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","btnSave","enable","dsBindableMaster","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","btnSave2","enable","dsBindableDetail","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","btnDel","enable","dsBindableMaster","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","btnDel2","enable","dsBindableDetail","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","btnAdd2","enable","dsBindableMaster","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","btnSave2","enable","dsBindableMaster","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","btnDel2","enable","dsBindableMaster","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","btnAdd3","enable","dsBindableMaster","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","btnSave3","enable","dsBindableMaster","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","btnDel3","enable","dsBindableMaster","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.cboSearchdsGeonmulYongdo","value","ds_input","GEONMULYONGDOGBCD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsGeonmul");
            this._addPreloadList("data","","dsCheung");
            this._addPreloadList("data","","dsHosil");
            this._addPreloadList("data","","dsGeonmulYongdoGbcd","00539");
        };
        
        // User Script
        this.registerScript("UL01_2020104_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UL01_2020104_M.xfdl(건물정보 관리(조회))
        * 작 성         일 명: 이성구
        * 작 성         일 자: 2021/09/10
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
            var strDs    = "dsGeonmulYongdoGbcd|dsGrdGeonmulGbcb|dsGrdGaanguisilGbcb";      // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00539|00539|00033";                       	// 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "T|X|X";                           			// 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = "";                            				// 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId    = "Init";

                // gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
                // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.

            this.gfn_CmmnMultiComboLoad(strDs
                                      , strLgcd
                                      , strComb
                                      , strOptn
                                      , svcId);

        };

        // (건물 용도 구분 기본값 세팅)
        this.fn_PostformInit = function()
        {
        	this.divSearch.form.cboSearchdsGeonmulYongdo.set_index(1);
        };

        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {
            this.gfn_clearSortAll(this.grdGeonmul);
        	this.gfn_clearSortAll(this.grdCheung);
        	this.gfn_clearSortAll(this.grdHosil);

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
                    case "GeonmulRet":
                            this.fn_PostGeonmulRet();	//건물 그리드 조회
                        break;
        			case "CheungRet":
                            this.fn_PostCheungRet();	//층 그리드 조회
                        break;
        			case "HosilRet":
                            this.fn_PostHosilRet();		//호실 그리드 조회
                        break;
                    case "GeonmulSave":
                            this.fn_PostGeonmulSave();	//건물 저장
                        break;
        			case "CheungSave":
                            this.fn_PostCheungSave();	//층 저장
                        break;
        			case "HosilSave":
                            this.fn_PostHosilSave();	//호실 저장
                        break;
                    case "New":
                            this.fn_PostNew();
                        break;
                    case "GeonmulDel":					//건물 그리드 삭제
                            this.fn_PostGeonmulDel();
                        break;
        		    case "CheungDel":					//층 그리드 삭제
                            this.fn_PostCheungDel();
                        break;
        			case "HosilDel":					//호실 그리드 삭제
                            this.fn_PostHosilDel();
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
        		case "geonmulAdmin" :						//건물 관리자
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					this.dsGeonmul.set_enableevent(false);
        		            this.dsGeonmul.setColumn(this.dsGeonmul.rowposition, "GEONMUL_ADMIN", sRtn[0]);
        		            this.dsGeonmul.setColumn(this.dsGeonmul.rowposition, "GEONMUL_ADMIN_NM", sRtn[1]);
        					this.dsGeonmul.set_enableevent(true);
        				}
        			break;
        		case "geonmulDept" :					//건물 관리 부서
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					this.dsGeonmul.set_enableevent(false);
        		            this.dsGeonmul.setColumn(this.dsGeonmul.rowposition, "GEONMUL_DEPT", sRtn[0]);
        		            this.dsGeonmul.setColumn(this.dsGeonmul.rowposition, "GEONMUL_DEPT_NM", sRtn[1]);
        					this.dsGeonmul.set_enableevent(true);
        				}
        			break;
        		case "CheungAdmin" :					//층 관리자
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					this.dsCheung.set_enableevent(false);
        		            this.dsCheung.setColumn(this.dsCheung.rowposition, "CHEUNG_ADMIN", sRtn[0]);
        		            this.dsCheung.setColumn(this.dsCheung.rowposition, "CHEUNG_ADMIN_NM", sRtn[1]);
        					this.dsCheung.set_enableevent(true);
        				}
        			break;
        		case "CheungDept" :					//층 관리 부서
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					this.dsCheung.set_enableevent(false);
        		            this.dsCheung.setColumn(this.dsCheung.rowposition, "CHEUNG_DEPT", sRtn[0]);
        		            this.dsCheung.setColumn(this.dsCheung.rowposition, "CHEUNG_DEPT_NM", sRtn[1]);
        					this.dsCheung.set_enableevent(true);
        				}
        			break;
        		case "HosilAdmin" :					//호실 관리자
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					this.dsHosil.set_enableevent(false);
        		            this.dsHosil.setColumn(this.dsHosil.rowposition, "HOSIL_ADMIN", sRtn[0]);
        		            this.dsHosil.setColumn(this.dsHosil.rowposition, "HOSIL_ADMIN_NM", sRtn[1]);
        					this.dsHosil.set_enableevent(true);
        				}
        			break;
        		case "HosilDept" :					//호실 관리 부서
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					this.dsHosil.set_enableevent(false);
        		            this.dsHosil.setColumn(this.dsHosil.rowposition, "HOSIL_DEPT", sRtn[0]);
        		            this.dsHosil.setColumn(this.dsHosil.rowposition, "HOSIL_DEPT_NM", sRtn[1]);
        					this.dsHosil.set_enableevent(true);
        				}
        			break;
        		case "SosokDept" :					//호실 소속학과
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					this.dsHosil.set_enableevent(false);
        		            this.dsHosil.setColumn(this.dsHosil.rowposition, "SOSOK_DEPT", sRtn[0]);
        		            this.dsHosil.setColumn(this.dsHosil.rowposition, "SOSOK_DEPT_NM", sRtn[1]);
        					this.dsHosil.set_enableevent(true);
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
                default :
                    break;
            };
        };;

        /**********************************************************************
                05. 조회 함수 선언(건물 함수)
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreRet = function()
        {
        	if(this.fn_beforeclose())
        	{
        		var result = this.gfn_confirm( "변경된 데이터가 있습니다. 그래도 이동하시겠습니까?", "저장","", "question" );
        		if(result == 0)
        		{
        			return false;
        		}
        	}
        	this.fn_Ret();
        };

        /**
         * 기능 : 건물 그리드 조회 실행
         */
        this.fn_Ret = function()
        {
            var strSvc      = "GeonmulRet";									//id
            var strUrl      = "/prj/UL/UL01/Retrieve_2020104_M.do";
            var strInDs     = "";										// 보낼 dataSat
            var strOutDs    = "dsGeonmul=dsGeonmul ";					// 받는 dataSat
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
        this.fn_PostGeonmulRet = function()
        {
            this.gfn_getRowCount(this.staRowCnt,this.dsGeonmul);
        };

        /**********************************************************************
                06. 조회 함수 선언(층 함수)
        ***********************************************************************/
        // 건물의 층별 조회
        this.dsGeonmul_onrowposchanged = function(obj,e)
        {
        	//건물 코드
        	this.ds_dInput.setColumn(0,"GEONMUL_CD", this.dsGeonmul.getColumn(this.dsGeonmul.rowposition, "GEONMUL_CD"));
        	this.fn_GeonmulRet();
        }

        this.fn_GeonmulRet = function()
        {
        	var strSvc      = "CheungRet";
            var strUrl      = "/prj/UL/UL01/CheungRetrieve_2020104_M.do";
            var strInDs     = "ds_dInput=ds_dInput";
            var strOutDs    = "dsCheung=dsCheung";
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
        this.fn_PostCheungRet = function()
        {
            this.gfn_getRowCount(this.staRowCnt2,this.dsCheung);
        };

        /**********************************************************************
                07. 조회 함수 선언(호실 함수)
        ***********************************************************************/
         // 건물의 층의 호실 조회
        this.dsCheung_onrowposchanged = function(obj,e)
        {
           /// 건물 코드
           this.ds_ddInput.setColumn(0,"GEONMUL_CD",this.dsCheung.getColumn(this.dsCheung.rowposition, "GEONMUL_CD"));
           ///  층 코드
           this.ds_ddInput.setColumn(0,"CHEUNG_CD",this.dsCheung.getColumn(this.dsCheung.rowposition, "CHEUNG_CD"));
           ///  건물 용도 구분
           this.ds_ddInput.setColumn(0,"YONGDO_GBCD",this.ds_input.getColumn(0, "GEONMULYONGDOGBCD"));
           this.fn_HosilRet();

        };

        this.fn_HosilRet = function()
        {
        	var strSvc      = "HosilRet";
            var strUrl      = "/prj/UL/UL01/HosilRetrieve_2020104_M.do";
            var strInDs     = "ds_ddInput=ds_ddInput";
            var strOutDs    = "dsHosil=dsHosil";
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
        }

        /**
         * 기능 : 조회 후 실행
         */
        this.fn_PostHosilRet = function()
        {
            this.gfn_getRowCount(this.staRowCnt3,this.dsHosil);
        };

        /**********************************************************************
                08. 추가 함수 선언
        ***********************************************************************/
        // 건물 그리드 추가
        this.btnAdd_onclick = function(obj,e)
        {
        	this.dsCheung.clearData();
        	this.dsHosil.clearData();

        	var nRow = this.dsGeonmul.addRow();
        };

        /**********************************************************************
                09. 추가 함수 선언(층 함수)
        ***********************************************************************/

        // 층 그리드 추가
        this.btnAdd2_onclick = function(obj,e)
        {
        	// 그리드 건물 체크
           if(this.dsGeonmul.rowposition < 0)
           {
              this.alert("층 정보를 추가할 건물을 선택해야합니다.");
              return false;
           }
           else if(this.gfn_isUpdate(this.dsGeonmul))
           {
        	  this.alert("건물별 정보에 저장하지 않은 내용이 있습니다.");
              return false;
           }
           else
           {
              var nRow = this.dsCheung.addRow();
              this.dsCheung.setColumn(nRow, "GEONMUL_CD", this.dsGeonmul.getColumn(this.dsGeonmul.rowposition,"GEONMUL_CD"))
           }

        };

        /**********************************************************************
                10. 추가 함수 선언(호실 함수)
        ***********************************************************************/
        // 호실 그리드 추가
        this.btnAdd3_onclick = function(obj,e)
        {
        	var  GEONMUL_CD = this.dsGeonmul.getColumn(this.dsGeonmul.rowposition,"GEONMUL_CD");
        	var  CHEUNG_CD = this.dsCheung.getColumn(this.dsCheung.rowposition,"CHEUNG_CD");

        	// 신규 - 호실
        	var nRow = this.dsHosil.addRow();
        	this.dsHosil.setColumn(nRow, "GEONMUL_CD", GEONMUL_CD);
        	this.dsHosil.setColumn(nRow, "CHEUNG_CD", CHEUNG_CD);

        	this.dsHosil.setColumn(nRow,"HOSIL_CD",GEONMUL_CD+ "-"+CHEUNG_CD+"-");
        };

        /**********************************************************************
                11. 삭제 함수 선언
        ***********************************************************************/
        //건물 그리드 삭제
        this.btnDel_onclick = function(obj,e)
        {
        	// 삭제 - 건물
        	if(this.dsGeonmul.rowposition < 0)
        	{
        		this.alert("선택된 행이 없습니다.");
        		return false;
        	}

        	var result = this.gfn_confirm( "삭제하시겠습니까?\n해당 건물에 속한 층별 정보도 함께 삭제됩니다.", "삭제정보","","question" );
            if(result == 0)
            {
                return false;
            }

            //개별삭제시
            this.dsGeonmul.deleteRow(this.dsGeonmul.rowposition);

        	this.fn_GeonmulDel();
        };

        /**
         * 기능 : Row 삭제 또는 Transaction 삭제 처리
         */
        this.fn_GeonmulDel = function()
        {
        	var strSvc      = "GeonmulDel";
        	var strUrl      = "/prj/UL/UL01/GeonmulDelete_2020104_M.do";
        	var strInDs     = "dsGeonmul=dsGeonmul:u";
        	var strOutDs    = "";
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

        this.fn_PostGeonmulDel = function()
        {
            this.gfn_getRowCount(this.staRowCnt,this.dsGeonmul);
        };

        /**********************************************************************
                12. 삭제 함수 선언(층)
        ***********************************************************************/

        //층 그리드 버튼 클릭
        this.btnDel2_onclick = function(obj,e)
        {
        	// 삭제 하기 전
           if(this.dsCheung.rowposition < 0)
           {
        	  this.alert("선택된 행이 없습니다.");
        	  return false;
           }

        	var result = this.gfn_confirm( "현재선택행을 삭제하시겠습니까?", "삭제정보","","question" );

            if(result == 0)
            {
                return false;
            }

            //개별삭제시
            this.dsCheung.deleteRow(this.dsCheung.rowposition);

            this.fn_CheungDel();
        };

        this.fn_CheungDel = function()
        {
        		var strSvc      = "CheungDel";
        		var strUrl      = "/prj/UL/UL01/CheungDelete_2020104_M.do";
        		var strInDs     = "dsCheung=dsCheung:u";
        		var strOutDs    = "";
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

        this.fn_PostCheungDel = function()
        {
            this.gfn_getRowCount(this.staRowCnt2,this.dsCheung);
        };

        /**********************************************************************
                13. 삭제 함수 선언(호실)
        ***********************************************************************/
        //호실 그리드 버튼 클릭
        this.btnDel3_onclick = function(obj,e)
        {
        	//삭제 하기 전
           if(this.dsHosil.rowposition < 0)
           {
        	  this.alert("선택된 행이 없습니다.");
        	  return;
           }

            var result = this.gfn_confirm( "현재선택행을 삭제하시겠습니까?", "삭제정보","","question" );

            if(result == 0)
            {
                return false;
            }

            //개별삭제시
            this.dsHosil.deleteRow(this.dsHosil.rowposition);

            this.fn_HosilDel();

        };

        this.fn_HosilDel = function()
        {
        		var strSvc      = "HosilDel";
        		var strUrl      = "/prj/UL/UL01/HosilDelete_2020104_M.do";
        		var strInDs     = "dsHosil=dsHosil:u";
        		var strOutDs    = "";
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
        }

        this.fn_PostHosilDel = function()
        {
            this.gfn_getRowCount(this.staRowCnt3,this.dsHosil);
        };

        /**********************************************************************
                14. 저장 함수 선언
        ***********************************************************************/
        //건물 저장 버튼
        this.btnSave_onclick = function(obj,e)
        {
        	// 저장 하기 전
        	if(!this.gfn_isUpdate(this.dsGeonmul))
        	{
        		this.gfn_alert("변경된 이력이 없습니다.","저장정보","","question");
        		return false;
        	}

        	var result = this.gfn_confirm( "저장 하시겠습니까?", "저장","", "question" );
        	if(result == 0)
        	{
        		return false;
        	}

        	this.fn_GeonmulSave();

        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_GeonmulSave = function()
        {
        	var strSvc      = "GeonmulSave";
        	var strUrl      = "/prj/UL/UL01/Save_2020104_M.do";
        	var strInDs     = "dsGeonmul=dsGeonmul:u ";
        	var strOutDs    = "dsGeonmul=dsGeonmul";
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

        this.fn_PostGeonmulSave = function()
        {
            this.gfn_getRowCount(this.staRowCnt,this.dsGeonmul);
        };

        /**********************************************************************
                15. 층 저장 함수 선언
        ***********************************************************************/
        this.btnSave2_onclick = function(obj,e)
        {
        	// 저장 하기 전
        	if(!this.gfn_isUpdate(this.dsCheung))
        	{
        		this.gfn_alert("변경된 이력이 없습니다.","저장정보","","question");
        		return false;
        	}

        	var result = this.gfn_confirm( "저장 하시겠습니까?", "저장","", "question" );
        	if(result == 0)
        	{
        		return false;
        	}

        	this.fn_CheungSave();
        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_CheungSave = function()
        {
        	var strSvc      = "CheungSave";
        	var strUrl      = "/prj/UL/UL01/CheungSave_2020104_M.do";
        	var strInDs     = "dsCheung=dsCheung:u ";
        		strInDs    += "ds_dInput=ds_dInput:a";
        	var strOutDs    = "dsCheung=dsCheung";
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

        this.fn_PostCheungSave = function()
        {
            this.gfn_getRowCount(this.staRowCnt2,this.dsCheung);
        };

        /**********************************************************************
                16. 호실 저장 함수 선언
        ***********************************************************************/
        this.btnSave3_onclick = function(obj,e)
        {
        	// 저장 하기 전
        	if(!this.gfn_isUpdate(this.dsHosil))
        	{
        		this.gfn_alert("변경된 이력이 없습니다.","저장정보","","question");
        		return false;
        	}

        	var result = this.gfn_confirm( "저장 하시겠습니까?", "저장","", "question" );
        	if(result == 0)
        	{
        		return false;
        	}

        	this.fn_HosilSave();
        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_HosilSave = function()
        {
        	var strSvc      = "HosilSave";
        	var strUrl      = "/prj/UL/UL01/HosilSave_2020104_M.do";
        	var strInDs     = "dsHosil=dsHosil:u ";
        		strInDs    += "ds_ddInput=ds_ddInput:a";
        	var strOutDs    = "dsHosil=dsHosil";
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

        this.fn_PostHosilSave = function()
        {
            this.gfn_getRowCount(this.staRowCnt3,this.dsHosil);
        };
        /**********************************************************************
                17. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 소트정열
         */
        //건물
        this.grdGeonmul_onheaddblclick = function(obj,e)
        {
        	this.gfn_gridSort(obj,e);
        };

        //층
        this.grdCheung_onheaddblclick = function(obj,e)
        {
        	this.gfn_gridSort(obj,e);
        };

        //호실
        this.grdHosil_onheaddblclick = function(obj,e)
        {
        	this.gfn_gridSort(obj,e);
        };

        // 건물 dataset 변경 전 이벤트
        this.dsGeonmul_canrowposchange = function(obj,e)
        {
         	if(this.gfn_isUpdate(this.dsCheung))
         	{
        		var result = this.gfn_confirm( "층별 정보에 저장하지 않은 내용이 있습니다. 그래도 이동하시겠습니까?", "저장","", "question" );
        		if(result == 0)
        		{
        			return false;
        		}
        	}
        	return true;
        };

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
            var value = false;

        	if(this.gfn_isUpdate(this.dsGeonmul)) {
        		value = true;
        	} else if(this.gfn_isUpdate(this.dsCheung)) {
        		value = true;
        	} else if(this.gfn_isUpdate(this.dsHosil)) {
        		value = true;
        	}

        	return value;
        };
        /**********************************************************************
                18. 팝업
        ***********************************************************************/
        // 건물 그리드
        this.grdGeonmul_onexpandup = function(obj,e)
        {
        	// 건물관리자 팝업
        	if(e.col == this.grdGeonmul.getBindCellIndex("body", "GEONMUL_ADMIN_NM"))
        	{
        		var oArg = {};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";
        		this.gfn_openPopup( "geonmulAdmin","com::COMM_P02.xfdl",oArg,sPopupCallBack,oOption);
        	}

        	// 건물관리 부서 팝업
        	if(e.col == this.grdGeonmul.getBindCellIndex("body", "GEONMUL_DEPT_NM"))
        	{
        		var oArg = {jojikGbcd:'00', useYn:'1'};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";
        		this.gfn_openPopup( "geonmulDept","com::COMM_P01.xfdl",oArg,sPopupCallBack,oOption);
        	}
        };

        //층 그리드
        this.grdCheung_onexpandup = function(obj,e)
        {
        	// 층 관리자 팝업
        	if(e.col == this.grdCheung.getBindCellIndex("body", "CHEUNG_ADMIN_NM"))
        	{
        		var oArg = {};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";
        		this.gfn_openPopup( "CheungAdmin","com::COMM_P02.xfdl",oArg,sPopupCallBack,oOption);
        	}

        	// 층 관리 부서 팝업
        	if(e.col == this.grdCheung.getBindCellIndex("body", "CHEUNG_DEPT_NM"))
        	{
        		var oArg = {jojikGbcd:'00', useYn:'1'};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";
        		this.gfn_openPopup( "CheungDept","com::COMM_P01.xfdl",oArg,sPopupCallBack,oOption);
        	}
        };

        //호실 그리드
        this.grdHosil_onexpandup = function(obj,e)
        {
        	// 호실 관리자 팝업
        	if(e.col == this.grdHosil.getBindCellIndex("body", "HOSIL_ADMIN_NM"))
        	{
        		var oArg = {};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";
        		this.gfn_openPopup( "HosilAdmin","com::COMM_P02.xfdl",oArg,sPopupCallBack,oOption);
        	}

        	// 호실 관리 부서 팝업
        	if(e.col == this.grdHosil.getBindCellIndex("body", "HOSIL_DEPT_NM"))
        	{
        		var oArg = {jojikGbcd:'00', useYn:'1'};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";
        		this.gfn_openPopup( "HosilDept","com::COMM_P01.xfdl",oArg,sPopupCallBack,oOption);
        	}

        	// 호실 소속 학과 팝업
        	if(e.col == this.grdHosil.getBindCellIndex("body", "SOSOK_DEPT_NM"))
        	{
        		var oArg = {jojikGbcd:'00', useYn:'1'};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";
        		this.gfn_openPopup( "SosokDept","com::COMM_P01.xfdl",oArg,sPopupCallBack,oOption);
        	}
        };

        /**********************************************************************
                19. 검색창 엔터키 조회
        ***********************************************************************/
        this.divSearch_cboSearchdsGeonmulYongdo_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"GEONMULYONGDOGBCD",obj.value);
        		this.fn_Ret();
        	}

        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.cboSearchdsGeonmulYongdo.addEventHandler("onkeydown",this.divSearch_cboSearchdsGeonmulYongdo_onkeydown,this);
            this.Static01_01_00.addEventHandler("onclick",this.Static01_01_00_onclick,this);
            this.stc_05_00.addEventHandler("onclick",this.stc_05_onclick,this);
            this.btnAdd.addEventHandler("onclick",this.btnAdd_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.btnDel.addEventHandler("onclick",this.btnDel_onclick,this);
            this.grdGeonmul.addEventHandler("onexpandup",this.grdGeonmul_onexpandup,this);
            this.grdGeonmul.addEventHandler("onheaddblclick",this.grdGeonmul_onheaddblclick,this);
            this.stc_05_00_00.addEventHandler("onclick",this.stc_05_onclick,this);
            this.btnAdd2.addEventHandler("onclick",this.btnAdd2_onclick,this);
            this.btnSave2.addEventHandler("onclick",this.btnSave2_onclick,this);
            this.btnDel2.addEventHandler("onclick",this.btnDel2_onclick,this);
            this.grdHosil.addEventHandler("onheaddblclick",this.grdHosil_onheaddblclick,this);
            this.grdHosil.addEventHandler("onexpandup",this.grdHosil_onexpandup,this);
            this.stc_05_00_01.addEventHandler("onclick",this.stc_05_onclick,this);
            this.btnAdd3.addEventHandler("onclick",this.btnAdd3_onclick,this);
            this.btnSave3.addEventHandler("onclick",this.btnSave3_onclick,this);
            this.btnDel3.addEventHandler("onclick",this.btnDel3_onclick,this);
            this.grdCheung.addEventHandler("onheaddblclick",this.grdCheung_onheaddblclick,this);
            this.grdCheung.addEventHandler("onexpandup",this.grdCheung_onexpandup,this);
            this.Static01_01_00_02.addEventHandler("onclick",this.Static01_01_00_onclick,this);
            this.dsGeonmul.addEventHandler("canrowposchange",this.dsGeonmul_canrowposchange,this);
            this.dsGeonmul.addEventHandler("onrowposchanged",this.dsGeonmul_onrowposchanged,this);
            this.dsCheung.addEventHandler("onrowposchanged",this.dsCheung_onrowposchanged,this);
            this.dsHosil.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsHosil.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
            this.dsGeonmulYongdoGbcd.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsGeonmulYongdoGbcd.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
        };
        this.loadIncludeScript("UL01_2020104_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
