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
            this.set_titletext("선정자리스트");
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
            obj._setContents("<ColumnInfo><Column id=\"SCHL_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"SCHL_SMST\" type=\"STRING\" size=\"2\"/><Column id=\"STNT_NUMB\" type=\"STRING\" size=\"15\"/><Column id=\"STNT_GUBN\" type=\"STRING\" size=\"4\"/><Column id=\"STNT_KNAM\" type=\"STRING\" size=\"50\"/><Column id=\"ACPT_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"ROOM_GUBN\" type=\"STRING\" size=\"20\"/><Column id=\"BLNG_DEPT\" type=\"STRING\" size=\"201\"/><Column id=\"STNT_SEXC\" type=\"STRING\" size=\"1\"/><Column id=\"AVRG_MARK\" type=\"STRING\" size=\"65532\"/><Column id=\"TOTL_MARK\" type=\"STRING\" size=\"65532\"/><Column id=\"RWPN_SCOR\" type=\"STRING\" size=\"65532\"/><Column id=\"CELL_NUMB\" type=\"STRING\" size=\"16\"/><Column id=\"TELE_NUMB\" type=\"STRING\" size=\"16\"/><Column id=\"STNT_GRAD\" type=\"STRING\" size=\"1\"/><Column id=\"CMPN_ADDR\" type=\"STRING\" size=\"1001\"/><Column id=\"DEUN_YORN\" type=\"STRING\" size=\"2\"/><Column id=\"DEUN_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"RMRK_NOTE\" type=\"STRING\" size=\"100\"/><Column id=\"DIFF_SEQU\" type=\"STRING\" size=\"2\"/><Column id=\"PASS_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"35\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"DEUN_YORN\" type=\"STRING\" size=\"256\"/><Column id=\"SCHL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SCHL_SMST\" type=\"STRING\" size=\"256\"/><Column id=\"STNT_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"ROOM_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"STNT_SEXC\" type=\"STRING\" size=\"256\"/><Column id=\"STNT_KNAM\" type=\"STRING\" size=\"256\"/><Column id=\"STNT_GRAD\" type=\"STRING\" size=\"256\"/><Column id=\"STNT_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"DIFF_SEQU\" type=\"STRING\" size=\"256\"/><Column id=\"ASSN_GUBN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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


            obj = new Dataset("dsStnt", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRoom", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGender", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHaknyeon", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGrdStnt", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDtRoom", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDtGender", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDtHaknyeon", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDtDeun", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row><Col id=\"CODE\">Y</Col><Col id=\"CODE_NM\">등록</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"CODE_NM\">미등록</Col></Row></Rows>");
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

            obj = new Button("btnCancel",null,"74","80","25","3",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("합격취소");
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
            obj.set_text("성명");
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

            obj = new Static("stc_01_00_01_00_00","180","9","85","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("학기");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchStntName","60","36","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchSchlSmst","275","9","120","22",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new Static("Static01_02_00_00_00_00_01","265","0","10","67",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_02_00_00","180","36","85","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("남/여");
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

            obj = new Combo("cboSearchGender","275","36","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsGender");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01_00_00_00","395","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("차수");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01_00_00_00_00","395","36","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("학년");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00_01_00_00","395","0","56","67",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00","475","0","10","67",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchDiffSequ","485","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsDiffSequ");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHaknyeon","485","36","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsHaknyeon");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01_00_00_00_01","605","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00_01_00_00_00","605","0","56","67",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00","685","0","10","67",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchSntn","695","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsStnt");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01_00_00_00_01_00","815","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("25");
            obj.set_text("인실");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00_01_00_00_00_00","815","0","56","67",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("26");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_00","895","0","10","67",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("27");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchRoom","905","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("28");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsRoom");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_09_00","1","74","100","31",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("선정자 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","100","77","200","24",null,null,null,null,null,null,this);
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"30\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"30\"/><Column size=\"90\"/><Column size=\"35\"/><Column size=\"40\"/><Column size=\"50\"/><Column size=\"55\"/><Column size=\"95\"/><Column size=\"95\"/><Column size=\"205\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" text=\"구분\"/><Cell col=\"3\" text=\"신청일자\"/><Cell col=\"4\" text=\"인실\"/><Cell col=\"5\" text=\"학번\"/><Cell col=\"6\" text=\"성명\"/><Cell col=\"7\" text=\"학년\"/><Cell col=\"8\" text=\"학과\"/><Cell col=\"9\" text=\"성별\"/><Cell col=\"10\" text=\"평점\"/><Cell col=\"11\" text=\"총(평점)\"/><Cell col=\"12\" text=\"등록여부\"/><Cell col=\"13\" text=\"전화번호\"/><Cell col=\"14\" text=\"휴대폰\"/><Cell col=\"15\" text=\"주소\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" editmaxlength=\"1\"/><Cell col=\"1\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"2\" text=\"bind:STNT_GUBN\" displaytype=\"combotext\" combodataset=\"dsGrdStnt\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"3\" text=\"bind:ACPT_DATE\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"4\" text=\"bind:ROOM_GUBN\"/><Cell col=\"5\" text=\"bind:STNT_NUMB\"/><Cell col=\"6\" text=\"bind:STNT_KNAM\"/><Cell col=\"7\" text=\"bind:STNT_GRAD\"/><Cell col=\"8\" text=\"bind:BLNG_DEPT\" textAlign=\"left\"/><Cell col=\"9\" expr=\"expr:(STNT_SEXC ==&apos;M&apos;)? &apos;남&apos;:&apos;여&apos;\"/><Cell col=\"10\" text=\"bind:AVRG_MARK\" displaytype=\"number\"/><Cell col=\"11\" text=\"bind:TOTL_MARK\" displaytype=\"number\"/><Cell col=\"12\" expr=\"expr:(DEUN_YORN ==&apos;Y&apos;)? &apos;등록&apos; : &apos;미등록&apos;\"/><Cell col=\"13\" text=\"bind:TELE_NUMB\"/><Cell col=\"14\" text=\"bind:CELL_NUMB\"/><Cell col=\"15\" text=\"bind:CMPN_ADDR\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","0","509","165","31",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("기본정보");
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

            obj = new ImageViewer("imgView","0","541","120","160",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_stretch("fixaspectratio");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_01","125","541","950","28",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00","125","541","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("신청일");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Calendar("calAcptDate","258","544","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00_00","415","541","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("신청인실");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboRoomGubn","548","544","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_innerdataset("dsDtRoom");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_01_00","125","568","950","28",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00_01","125","568","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGyojikwonNo00","258","571","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00_01_00","415","568","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("성별");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGyojikwonNo00_00","838","571","234","22",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_01_00_00","125","595","950","28",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00_01_01","125","595","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("학년");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_01_00_00_00","125","622","950","28",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_01_00_00_00_00","125","649","950","28",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_01_00_00_00_00_00","125","676","950","28",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_01_00_00_00_00_00_00","125","703","950","28",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00_01_01_00","125","622","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("상벌점");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00_01_01_00_00","125","649","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("집주소");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00_01_01_00_00_00","125","676","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("합격일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00_01_01_00_00_00_00","125","703","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboJikjong00_00","548","571","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_innerdataset("dsDtGender");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00_01_01_00_01","415","622","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00_01_01_00_00_01_00","415","676","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("등록구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00_00_00","705","541","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("학번");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGyojikwonNo00_03","838","544","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00_01_00_00","705","568","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("소속");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00_01_01_01","415","595","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("직전학기성적");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00_01_01_01_00","705","595","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("총학점(입학점수)");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00_01_01_00_01_00","705","622","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("HP");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00_01_01_00_00_01_00_01","705","676","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("등록일");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboJikjong00_00_00","258","598","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_innerdataset("dsDtHaknyeon");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGyojikwonNo00_01","548","598","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGyojikwonNo00_01_00","838","598","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGyojikwonNo00_01_01","258","625","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGyojikwonNo00_01_01_00","548","625","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGyojikwonNo00_01_01_00_00","838","625","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGyojikwonNo00_01_01_01","258","652","444","22",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calAcptDate00","258","679","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calAcptDate00_00","838","679","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cboJikjong00_00_01","548","679","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_innerdataset("dsDtDeun");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGyojikwonNo00_01_01_01_00","258","706","734","22",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("선정자리스트");
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

            obj = new BindItem("item3","divSearch.form.cboSearchSntn","value","ds_input","STNT_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.cboSearchRoom","value","ds_input","ROOM_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.edtSearchStntName","value","ds_input","STNT_KNAM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.cboSearchGender","value","ds_input","STNT_SEXC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.cboSearchHaknyeon","value","ds_input","STNT_GRAD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","calAcptDate","value","dsMaster","ACPT_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","cboRoomGubn","value","dsMaster","ROOM_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edtGyojikwonNo00_03","value","dsMaster","STNT_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","edtGyojikwonNo00","value","dsMaster","STNT_KNAM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","cboJikjong00_00","value","dsMaster","STNT_SEXC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","edtGyojikwonNo00_00","value","dsMaster","BLNG_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","cboJikjong00_00_00","value","dsMaster","STNT_GRAD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","edtGyojikwonNo00_01","value","dsMaster","AVRG_MARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","edtGyojikwonNo00_01_00","value","dsMaster","TOTL_MARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","edtGyojikwonNo00_01_01","value","dsMaster","RWPN_SCOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","edtGyojikwonNo00_01_01_00","value","dsMaster","TELE_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","edtGyojikwonNo00_01_01_00_00","value","dsMaster","CELL_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","edtGyojikwonNo00_01_01_01","value","dsMaster","CMPN_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","calAcptDate00","value","dsMaster","PASS_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","cboJikjong00_00_01","value","dsMaster","DEUN_YORN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","calAcptDate00_00","value","dsMaster","DEUN_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","edtGyojikwonNo00_01_01_01_00","value","dsMaster","RMRK_NOTE");
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
        this.registerScript("BH02_4080202_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): BH02_4080202_M.xfdl(선정자리스트)
        * 작 성         일 명: 정진호
        * 작 성         일 자: 2022/10/06
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
        this.lvchkColidDs   = "CLASS_NM";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs = "설명";
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
            var strDs    = "dsHakgi|dsStnt|dsRoom|dsGender|dsHaknyeon";
        	    strDs   += "|dsGrdStnt";
        		strDs   += "|dsDtRoom|dsDtGender|dsDtHaknyeon";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00022|00743|00744|00001|00060";
        	    strLgcd += "|00743"
        		strLgcd += "|00744|00001|00060";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "X|T|T|T|T"
        	    strComb += "|N"
        		strComb += "|N|N|N";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = "";                                      // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId    = "Init";
        	// gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
        	// 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.gfn_CmmnMultiComboLoad(strDs, strLgcd, strComb, strOptn, svcId);

        	// 생활관 일정
        	this.fn_getSchl("");
        	this.fn_getDiffSequ();
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
                    case "GetSchl":
                            this.fn_PostGetSchl();
                        break;
                    case "GetDiffSequ":
                            this.fn_PostGetDiffSequ();
                        break;
        			case "Chwiso":
        					this.fn_PostChwiso();
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
            var strUrl      = "/prj/BH/BH02/Retrieve_4080202_MList.do";
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
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
            //return this.gfn_isUpdate(this.dsMaster);
        };

        // 일정조회
        this.fn_getSchl = function(schlYear) {
        	this.dsSchl.clearData();

        	this.ds_inputSchl.setColumn(0, "STNT_GUBN", "");
        	this.ds_inputSchl.setColumn(0, "DATE_CODE", "2");
        	this.ds_inputSchl.setColumn(0, "SCHL_YEAR", schlYear);
        	this.ds_inputSchl.setColumn(0, "SCHL_SMST", "");
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

        this.fn_PostGetSchl = function() {
        	this.ds_input.setColumn(0, "SCHL_YEAR", this.dsSchl.getColumn(0, "SCHL_YEAR"));
        	this.ds_input.setColumn(0, "SCHL_SMST", this.dsSchl.getColumn(0, "SCHL_SMST"));
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
        	this.fn_picLoad(); // 학생사진 set
        };

        this.divSearch_spnSearchSchlYear_canchange = function(obj,e)
        {
        	this.fn_getSchl(e.postvalue);
        	this.fn_getDiffSequ();
        };

        // 합격취소처리
        this.btnCancel_onclick = function(obj,e)
        {
        	// 체크한 학생만 처리
        	var count = this.dsMaster.getCaseCount("CHK == '1'");
        	if (count < 1) {
        		this.alert("체크된 항목이 없습니다. 확인 바랍니다.");
        		return;
        	}

        	// 필수항목체크
        	if (this.dsMaster.rowcount > 0) {
        		if (this.gfn_isNull(this.gfn_trim(this.dsMaster.getColumn(this.dsMaster.rowposition, "STNT_NUMB")))) {
        			this.alert("학번/수험 정보는 필수 항목입니다.");
        			return;
        		}
        	}

        	var result = this.gfn_confirm("합격취소처리를 하시겠습니까?", "합격취소처리", "", "question");
        	if(result == 0) return;

            var strSvc      = "Chwiso";
            var strUrl      = "/prj/BH/BH02/Save_4080201_T01ChwisoList.do";
            var strInDs     = "ds_input=ds_input:a ";
                strInDs    += "dsMaster=dsMaster:u";
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
        this.fn_PostChwiso = function() {
        	this.fn_Ret();
        }

        this.fn_Tip = function()
        {
        	this.alert("도움말 준비중입니다.");
        };

        this.fn_onkeydown = function(obj, e) {
        	if (e.keycode == "13") {
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
            this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
            this.divSearch.form.spnSearchSchlYear.addEventHandler("onkeydown",this.fn_onkeydown,this);
            this.divSearch.form.spnSearchSchlYear.addEventHandler("canchange",this.divSearch_spnSearchSchlYear_canchange,this);
            this.divSearch.form.edtSearchStntName.addEventHandler("onkeydown",this.fn_onkeydown,this);
            this.divSearch.form.cboSearchSchlSmst.addEventHandler("onkeydown",this.fn_onkeydown,this);
            this.divSearch.form.cboSearchSchlSmst.addEventHandler("canitemchange",this.divSearch2_cboSearchSchlSmst_canitemchange,this);
            this.divSearch.form.cboSearchGender.addEventHandler("onkeydown",this.fn_onkeydown,this);
            this.divSearch.form.cboSearchGender.addEventHandler("canitemchange",this.divSearch2_cboSearchSchlSmst_canitemchange,this);
            this.divSearch.form.cboSearchDiffSequ.addEventHandler("onkeydown",this.fn_onkeydown,this);
            this.divSearch.form.cboSearchDiffSequ.addEventHandler("canitemchange",this.divSearch2_cboSearchSchlSmst_canitemchange,this);
            this.divSearch.form.cboSearchHaknyeon.addEventHandler("onkeydown",this.fn_onkeydown,this);
            this.divSearch.form.cboSearchHaknyeon.addEventHandler("canitemchange",this.divSearch2_cboSearchSchlSmst_canitemchange,this);
            this.divSearch.form.cboSearchSntn.addEventHandler("onkeydown",this.fn_onkeydown,this);
            this.divSearch.form.cboSearchSntn.addEventHandler("canitemchange",this.divSearch2_cboSearchSchlSmst_canitemchange,this);
            this.divSearch.form.cboSearchRoom.addEventHandler("onkeydown",this.fn_onkeydown,this);
            this.divSearch.form.cboSearchRoom.addEventHandler("canitemchange",this.divSearch2_cboSearchSchlSmst_canitemchange,this);
            this.grdMaster.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster.addEventHandler("oncellclick",this.grdMaster_oncellclick,this);
            this.grdMaster.addEventHandler("onselectchanged",this.grdMaster_onselectchanged,this);
            this.grdMaster.addEventHandler("onexpandup",this.grdMaster_onexpandup,this);
            this.grdMaster.addEventHandler("onenterdown",this.grdMaster_onenterdown,this);
            this.cboRoomGubn.addEventHandler("onlbuttondown",this.cboSearchGyeyeol_onlbuttondown,this);
            this.cboRoomGubn.addEventHandler("onitemchanged",this.cboSearchGyeyeol_onitemchanged,this);
            this.cboRoomGubn.addEventHandler("onkeydown",this.div_01_cboSearchGyeyeol_onkeydown,this);
            this.cboJikjong00_00.addEventHandler("onlbuttondown",this.cboSearchGyeyeol_onlbuttondown,this);
            this.cboJikjong00_00.addEventHandler("onitemchanged",this.cboSearchGyeyeol_onitemchanged,this);
            this.cboJikjong00_00.addEventHandler("onkeydown",this.div_01_cboSearchGyeyeol_onkeydown,this);
            this.cboJikjong00_00_00.addEventHandler("onlbuttondown",this.cboSearchGyeyeol_onlbuttondown,this);
            this.cboJikjong00_00_00.addEventHandler("onitemchanged",this.cboSearchGyeyeol_onitemchanged,this);
            this.cboJikjong00_00_00.addEventHandler("onkeydown",this.div_01_cboSearchGyeyeol_onkeydown,this);
            this.cboJikjong00_00_01.addEventHandler("onlbuttondown",this.cboSearchGyeyeol_onlbuttondown,this);
            this.cboJikjong00_00_01.addEventHandler("onitemchanged",this.cboSearchGyeyeol_onitemchanged,this);
            this.cboJikjong00_00_01.addEventHandler("onkeydown",this.div_01_cboSearchGyeyeol_onkeydown,this);
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
        this.loadIncludeScript("BH02_4080202_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
