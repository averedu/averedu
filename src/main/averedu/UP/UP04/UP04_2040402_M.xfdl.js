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
            this.set_titletext("응급처치및심폐소생술실습현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMaster", this);
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"IPHAK_YYYY\" type=\"STRING\" size=\"12\"/><Column id=\"SINCHEONG_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"50\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"HAKJEOK_STCD\" type=\"STRING\" size=\"3\"/><Column id=\"JAGYEOKJONGBYEOL_CD\" type=\"STRING\" size=\"10\"/><Column id=\"NUJEOK_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"EUNGGEUP_SIMPYE_GIJUN_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JOLEOP_DT\" type=\"STRING\" size=\"8\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"SINCHEONG_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"GYEYEOL\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGONG\" type=\"STRING\" size=\"256\"/><Column id=\"HAKJEOK_STCD\" type=\"STRING\" size=\"256\"/><Column id=\"NUMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"JAGYEOKJONGBYEOL_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetail", this);
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"HAKGI_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"SILSEUP_DT\" type=\"STRING\" size=\"8\"/><Column id=\"SILSEUP_GIGWAN\" type=\"STRING\" size=\"100\"/><Column id=\"SILSEUP_JANGSO\" type=\"STRING\" size=\"300\"/><Column id=\"ISU_YN\" type=\"STRING\" size=\"1\"/><Column id=\"ISU_YN_NM\" type=\"STRING\" size=\"9\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inputDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"HAKBEON\" type=\"STRING\" size=\"256\"/><Column id=\"JAGYEOKJONGBYEOL_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGyeyeol", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgwa", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJeongong", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inputCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"SELECT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"GYOJIK_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakjeog", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJagyeokjongbyeol", this);
            obj._setContents("<ColumnInfo><Column id=\"JAGYEOKJONGBYEOL_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JAGYEOKJONGBYEOL_NM\" type=\"STRING\" size=\"50\"/><Column id=\"JAGYEOKJONGBYEOL_NM2\" type=\"STRING\" size=\"101\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBaseYyyyHakgi", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inputAll", this);
            obj._setContents("<ColumnInfo><Column id=\"SINCHEONG_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"GYEYEOL\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGONG\" type=\"STRING\" size=\"256\"/><Column id=\"HAKJEOK_STCD\" type=\"STRING\" size=\"256\"/><Column id=\"NUMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"JAGYEOKJONGBYEOL_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGrdJagyeokjongbyeol", this);
            obj._setContents("<ColumnInfo><Column id=\"JAGYEOKJONGBYEOL_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JAGYEOKJONGBYEOL_NM\" type=\"STRING\" size=\"50\"/><Column id=\"JAGYEOKJONGBYEOL_NM2\" type=\"STRING\" size=\"101\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGrdHakjeog", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01_00","450","71","50","35",null,null,null,null,null,null,this);
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

            obj = new Static("staRowCnt","105","77","300","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","0","74","105","31",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("실습집계현황");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","98","1640","8",null,null,null,null,null,null,this);
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

            obj = new Grid("grdMaster","0","106","900",null,null,"0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsMaster");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"56\"/><Column size=\"90\"/><Column size=\"50\"/><Column size=\"60\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"150\"/><Column size=\"40\"/><Column size=\"40\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"선발년도\" textAlign=\"center\"/><Cell col=\"2\" text=\"계열/학과\" textAlign=\"center\"/><Cell col=\"3\" text=\"학년\" textAlign=\"center\"/><Cell col=\"4\" text=\"학적상태\" textAlign=\"center\"/><Cell col=\"5\" text=\"학번\" textAlign=\"center\"/><Cell col=\"6\" text=\"성명\" textAlign=\"center\"/><Cell col=\"7\" text=\"자격종별\" textAlign=\"center\"/><Cell col=\"8\" text=\"누적\" textAlign=\"center\"/><Cell col=\"9\" text=\"기준\" textAlign=\"center\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:SINCHEONG_YYYY\"/><Cell col=\"2\" text=\"bind:HAKGWA_NM\"/><Cell col=\"3\" text=\"bind:HAKNYEON\"/><Cell col=\"4\" text=\"bind:HAKJEOK_STCD\" displaytype=\"combotext\" combodataset=\"dsGrdHakjeog\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"5\" text=\"bind:HAKBEON\" combocodecol=\"bind:HAKBEON\"/><Cell col=\"6\" text=\"bind:HAKSAENG_NM\" combocodecol=\"bind:HAKSAENG_NM\"/><Cell col=\"7\" text=\"bind:JAGYEOKJONGBYEOL_CD\" combocodecol=\"JAGYEOKJONGBYEOL_CD\" displaytype=\"combotext\" combodataset=\"dsJagyeokjongbyeol\" combodatacol=\"JAGYEOKJONGBYEOL_NM2\"/><Cell col=\"8\" text=\"bind:NUJEOK_CNT\" combocodecol=\"bind:NUJEOK_CNT\"/><Cell col=\"9\" text=\"bind:EUNGGEUP_SIMPYE_GIJUN_CNT\" combocodecol=\"bind:EUNGGEUP_SIMPYE_GIJUN_CNT\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdDetail","930","106",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("dsDetail");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"90\"/><Column size=\"60\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"년도\"/><Cell col=\"2\" text=\"학기\"/><Cell col=\"3\" text=\"실습기관\"/><Cell col=\"4\" text=\"실습장소\"/><Cell col=\"5\" text=\"실습일자\"/><Cell col=\"6\" text=\"이수여부\" textAlign=\"center\" border=\"0px none,0px,0px none,0px none\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:YYYY\"/><Cell col=\"2\" text=\"bind:HAKGI_NM\"/><Cell col=\"3\" text=\"bind:SILSEUP_GIGWAN\"/><Cell col=\"4\" text=\"bind:SILSEUP_JANGSO\"/><Cell col=\"5\" text=\"bind:SILSEUP_DT\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" edittype=\"none\" displaytype=\"checkboxcontrol\" text=\"bind:ISU_YN\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01","900","71","30",null,null,"0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("30");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","930","74","105","31",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("실습상세현황");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCntDetail","1035","77","200","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"71","0",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01_00","0","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("선발년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","90","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01_00","210","9","105","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("계열");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchGyeyeol","325","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsGyeyeol");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01_00_00","445","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("학과");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgwa","535","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsHakgwa");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01_00_00_00","655","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("전공");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJeongong","745","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsJeongong");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","210","39","105","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("자격종별");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchName","90","39","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_01_00","655","0","56","35",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","70",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","80","0","10","70",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","0","0","1640","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","0","62","1640","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_02","0","33","1640","5",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 6pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00","445","0","56","35",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_00_00","525","0","10","35",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_01","210","0","56","70",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_00_01","315","0","10","70",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_00_01_00","735","0","10","35",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01","0","39","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_text("학생/성명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJagyeog","325","39","200","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsJagyeokjongbyeol");
            obj.set_codecolumn("JAGYEOKJONGBYEOL_CD");
            obj.set_datacolumn("JAGYEOKJONGBYEOL_NM2");
            obj.set_text("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01_00_00_00_00","865","9","105","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_text("학적상태");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_01_00_00","865","0","56","35",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_00_01_00_00","970","0","10","35",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("25");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakjeog","980","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("26");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsHakjeog");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.spnSearchYYYY","value","ds_input","SINCHEONG_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboSearchGyeyeol","value","ds_input","GYEYEOL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboSearchHakgwa","value","ds_input","HAKGWA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboSearchJeongong","value","ds_input","JEONGONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.cboSearchHakjeog","value","ds_input","HAKJEOK_STCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.edtSearchName","value","ds_input","NUMNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.cboSearchJagyeog","value","ds_input","JAGYEOKJONGBYEOL_CD");
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
        this.registerScript("UP04_2040402_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UP04_2040402_M.xfdl(응급처치및심폐소생술실습현황)
        * 작 성         일 명: 정진호
        * 작 성         일 자: 2022/08/30
        * 변 경         일 자:
        * 변 경         자 명:
        * 변경 및 수정 로그 :
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
        this.form_onload = function(obj, e) {
            //폼에 공통으로 로드시 사용하는 함수.
            this.gfn_formOnload(obj.e);
            //사용자 화면  초기화 함수
            this.fn_formInit();
        };

        /**********************************************************************
                04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        this.fn_formInit = function() {
            var strDs   = "dsHakjeog|dsGrdHakjeog";	// 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd	= "000035|000035"; 			// 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb = "T|N"; 					// 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn = ""; 						// 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId   = "Init";
        	// gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
        	// 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.gfn_CmmnMultiComboLoad(strDs, strLgcd, strComb, strOptn, svcId);

        	// 기준연도학기
            var strDs    		= "dsBaseYyyyHakgi"; // 데이터를 받을 데이터셋리스트     예) "dsBaseYyyyHakgi"
            var svcId    		= "baseYyyyHakgiInit";
        	var strEopmuGbcd 	= "US";
        	var strUseYn     	= "1";
            // gfn_BaseYyyyHakgiLoad(데이터셋, svcId , 업무구분, 사용구분);
            // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.gfn_BaseYyyyHakgiLoad(strDs, svcId, strEopmuGbcd, strUseYn);

        	// 콤보
        	this.fn_GyeyeolCombo();				// 계열
        	this.fn_HakgwaCombo();				// 학과
        	this.fn_JeongongCombo();			// 전공
        	this.fn_JagyeokjongbyeolCombo();	// 자격종별
        };

        this.fn_PostBaseYyyyHakgiInit = function() {
        	if (this.dsBaseYyyyHakgi.rowcount > 0) {
        		this.ds_input.setColumn(0, "SINCHEONG_YYYY", this.dsBaseYyyyHakgi.getColumn(0, "YYYY"));
        	}
        };

        this.fn_PostGyeyeolInit = function() {
        	// 계열 onitemchanged 호출
        	let info = new nexacro.ItemChangeEventInfo;
        	this.divSearch_cboSearchGyeyeol_onitemchanged(this.divSearch.form.cboSearchGyeyeol, info);
        	this.divSearch.form.cboSearchGyeyeol.set_index(0);
        };

        this.fn_PostHakgwaInit = function() {
        	// 학과 onitemchanged 호출
        	let info = new nexacro.ItemChangeEventInfo;
        	this.divSearch_cboSearchHakgwa_onitemchanged(this.divSearch.form.cboSearchHakgwa, info);
        	this.divSearch.form.cboSearchHakgwa.set_index(0);
        };

        this.fn_PostJeongongInit = function() {
        	this.divSearch.form.cboSearchJeongong.set_index(0);
        };

        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId, nErrorCode, sErrorMsg) {
            this.gfn_clearSortAll(this.grdMaster);

            if(nErrorCode != 0) {
                this.gfn_alert(sErrorMsg, "에러정보", "", "error");
                return false;
            } else {
                /*sSvcId (Transaction Id)*/
                switch(sSvcId) {
                    case "Init":
        				this.fn_PostformInit();
                        break;
                    case "singleInit":
        				this.fn_PostSingleInt();
                        break;
                    case "Ret":
        				this.fn_PostRet();
                        break;
                    case "DetailRet":
        				this.fn_PostDetailRet();
                        break;
        			// 검색조건 계열
        			case "GyeyeolCombo":
        				this.fn_PostGyeyeolInit();
        			    break;
        			// 검색조건 학과
        			case "HakgwaCombo":
        				this.fn_PostHakgwaInit();
        			    break;
        			// 검색조건 전공
        			case "JeongongCombo":
        				this.fn_PostJeongongInit();
        			    break;
        			case "baseYyyyHakgiInit":
        				this.fn_PostBaseYyyyHakgiInit();
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
        this.fn_cmmBtnClick = function(sBtn) {
            switch(sBtn) {
                case "ret" : 	// 조회
        			this.fn_Ret();
                    break;
                case "tmp1" :	// 팁
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
        this.fn_PreRet = function() {
            // 조회조건 셋팅
            return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_Ret = function() {
            if (!this.fn_PreRet()) {
                return false;
            }

            var strSvc      = "Ret";
            var strUrl      = "/prj/UP/UP04/Retrieve_2040402_MList.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsMaster=dsMaster";
            var strArg      = "";
            var GBV_MENUID 	= objApp.gv_cutPrgId;
            if (!this.gfn_isNull(this.gfn_trim(GBV_MENUID))) {
            	strArg     += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        };

        /**
         * 기능 : 디테일 조회 실행
         */
        this.fn_DetailRet = function() {
            if (!this.fn_PreRet()) {
                return false;
            }

            var strSvc      = "Ret";
            var strUrl      = "/prj/UP/UP04/Retrieve_2040402_DList.do";
            var strInDs     = "ds_input=ds_inputDetail";
            var strOutDs    = "dsDetail=dsMaster";
            var strArg      = "";
            var GBV_MENUID 	= objApp.gv_cutPrgId;
            if (!this.gfn_isNull(this.gfn_trim(GBV_MENUID))) {
            	strArg     += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        };

        /**
         * 기능 : 조회 후 실행
         */
        this.fn_PostRet = function() {
            this.gfn_getRowCount(this.staRowCnt, this.dsMaster);
        };

        /**
         * 기능 : 상세조회 후 실행
         */
        this.fn_PostDetailRet = function() {
            this.gfn_getRowCount(this.staRowCntDetail, this.dsDetail);
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
         * 그리드멀티 체크
         */
        this.grdMaster_onheadclick = function(obj, e) {
            if (e.cell == this.grdMaster.getBindCellIndex("body", "CHK")) {
                this.gfn_checkAll(obj, e);
            }
        };

        /**
         * 그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj, e) {
            if (e.cell != this.grdMaster.getBindCellIndex("body", "CHK") && e.cell != 1) {
                this.gfn_gridSort(obj, e);
            }
        };

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function() {
            //return this.gfn_isUpdate(this.dsMaster);
        };

        /**
         * 기능 : 팁 실행
         */
        this.fn_Tip = function() {
        	this.alert("도움말 준비중입니다.");
        };

        /**
         * 기능 : 교직계열콤보 조회
         */
        this.fn_GyeyeolCombo = function() {
        	this.ds_inputCombo.setColumn(0, "SELECT_TYPE", 	"A");
        	this.ds_inputCombo.setColumn(0, "GYOJIK_YN", 	"1");

            var strSvc      = "GyeyeolCombo";
            var strUrl      = "/prj/UP/UP_COMMON/Retrieve_gyeyeolCombo.do";
            var strInDs     = "ds_input=ds_inputCombo";
            var strOutDs    = "dsGyeyeol=dsMaster";
            var strArg      = "";
            var GBV_MENUID 	= objApp.gv_cutPrgId;
            if (!this.gfn_isNull(this.gfn_trim(GBV_MENUID))) {
            	strArg     += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        }

        /**
         * 기능 : 교직학과콤보 조회
         */
        this.fn_HakgwaCombo = function() {
        	this.ds_inputCombo.setColumn(0, "SELECT_TYPE", 	"A");
        	this.ds_inputCombo.setColumn(0, "GYOJIK_YN", 	"1");

            var strSvc      = "HakgwaCombo";
            var strUrl      = "/prj/UP/UP_COMMON/Retrieve_hakgwaCombo.do";
            var strInDs     = "ds_input=ds_inputCombo";
            var strOutDs    = "dsHakgwa=dsMaster";
            var strArg      = "";
            var GBV_MENUID 	= objApp.gv_cutPrgId;
            if (!this.gfn_isNull(this.gfn_trim(GBV_MENUID))) {
            	strArg     += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        }

        /**
         * 기능 : 교직전공콤보 조회
         */
        this.fn_JeongongCombo = function() {
        	this.ds_inputCombo.setColumn(0, "SELECT_TYPE", 	"A");
        	this.ds_inputCombo.setColumn(0, "GYOJIK_YN", 	"1");

            var strSvc      = "JeongongCombo";
            var strUrl      = "/prj/UP/UP_COMMON/Retrieve_jeongongCombo.do";
            var strInDs     = "ds_input=ds_inputCombo";
            var strOutDs    = "dsJeongong=dsMaster";
            var strArg      = "";
            var GBV_MENUID 	= objApp.gv_cutPrgId;
            if (!this.gfn_isNull(this.gfn_trim(GBV_MENUID))) {
            	strArg     += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        }

        /**
          * 학과 필터
         **/
        this.divSearch_cboSearchGyeyeol_onitemchanged = function(obj, e) {
        	var strUpDeptCd = this.gfn_isNull(e.postvalue) ? "" : e.postvalue;
        	this.dsHakgwa.filter("UP_DEPT_CD == '" + strUpDeptCd + "' || DEPT_NM == '전체'");
        	this.divSearch.form.cboSearchHakgwa.set_index(0);
        	this.divSearch_cboSearchHakgwa_onitemchanged(this.divSearch.form.cboSearchHakgwa, e);
        };

        /**
          * 전공 필터
         **/
        this.divSearch_cboSearchHakgwa_onitemchanged = function(obj, e) {
        	var strUpDeptCd = this.gfn_isNull(e.postvalue) ? "" : e.postvalue;
        	this.dsJeongong.filter("UP_DEPT_CD == '" + strUpDeptCd + "' || DEPT_NM == '전체'");
        	this.divSearch.form.cboSearchJeongong.set_index(0);
        };

        /**
         * 기능 : 자격증별콤보 조회
         */
        this.fn_JagyeokjongbyeolCombo = function() {
        	this.ds_inputCombo.setColumn(0, "SELECT_TYPE", 	"A");
        	this.ds_inputCombo.setColumn(0, "GYOJIK_YN", 	"");

            var strSvc      = "Jagyeokjongbyeol";
            var strUrl      = "/prj/UP/UP_COMMON/Retrieve_jagyeokjongbyeolList.do";
            var strInDs     = "ds_input=ds_inputCombo";
            var strOutDs    = "dsJagyeokjongbyeol=dsMaster";
            var strArg      = "";
            var GBV_MENUID 	= objApp.gv_cutPrgId;
            if (!this.gfn_isNull(this.gfn_trim(GBV_MENUID))) {
            	strArg     += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        }

        this.dsMaster_onrowposchanged = function(obj, e) {
        	this.ds_inputDetail.setColumn(0, "HAKBEON", 			obj.getColumn(obj.rowposition, "HAKBEON"));
        	this.ds_inputDetail.setColumn(0, "JAGYEOKJONGBYEOL_CD", obj.getColumn(obj.rowposition, "JAGYEOKJONGBYEOL_CD"));
        	this.fn_DetailRet();
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
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclose",this.form_onclose,this);
            this.grdMaster.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster.addEventHandler("onselectchanged",this.grdMaster_onselectchanged,this);
            this.grdMaster.addEventHandler("onexpandup",this.grdMaster_onexpandup,this);
            this.grdDetail.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
            this.grdDetail.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdDetail.addEventHandler("onselectchanged",this.grdMaster_onselectchanged,this);
            this.grdDetail.addEventHandler("onexpandup",this.grdMaster_onexpandup,this);
            this.Static01_01_00_00_00_01.addEventHandler("onclick",this.Static01_01_00_00_00_01_onclick,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.divSearch.form.cboSearchGyeyeol.addEventHandler("onitemchanged",this.divSearch_cboSearchGyeyeol_onitemchanged,this);
            this.divSearch.form.cboSearchGyeyeol.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onitemchanged",this.divSearch_cboSearchHakgwa_onitemchanged,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.divSearch.form.cboSearchJeongong.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.divSearch.form.edtSearchName.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.divSearch.form.cboSearchJagyeog.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.divSearch.form.cboSearchHakjeog.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.dsMaster.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.ds_input.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
            this.dsDetail.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
            this.ds_inputCombo.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
            this.ds_inputAll.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
        };
        this.loadIncludeScript("UP04_2040402_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
