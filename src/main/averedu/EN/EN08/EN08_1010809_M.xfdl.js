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
            this.set_titletext("고교구분현황통계");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGWON_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"GOGYO_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gijunYyyy", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJeongwon", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTonggye1", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"CODE_NM\">지원자</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">합격자</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"CODE_NM\">등록자</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMojip", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTonggye2", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"CODE_NM\">모집학과별</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">세부전형별</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster1", this);
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"MOJIP_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JUYA_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"GYEYEOL11\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYEYEOL21\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYEYEOL22\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYEYEOL23\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYEYEOL24\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYEYEOL31\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYEYEOL41\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYEYEOL51\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYEYEOL52\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYEYEOL53\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYEYEOL_TOTAL\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster2", this);
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"MOJIP_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JUYA_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"GYEYEOL11\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYEYEOL21\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYEYEOL22\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYEYEOL23\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYEYEOL24\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYEYEOL31\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYEYEOL41\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYEYEOL51\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYEYEOL52\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYEYEOL53\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYEYEOL_TOTAL\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster3", this);
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JUYA_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"GYEYEOL11\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYEYEOL21\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYEYEOL22\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYEYEOL23\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYEYEOL24\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYEYEOL31\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYEYEOL41\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYEYEOL51\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYEYEOL52\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYEYEOL53\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYEYEOL_TOTAL\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster4", this);
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JUYA_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"JEONHYEONG_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONHYEONG_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"SEBUJEONHYEONG_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"SEBUJEONHYEONG_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"GYEYEOL11\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYEYEOL21\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYEYEOL22\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYEYEOL23\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYEYEOL24\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYEYEOL31\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYEYEOL41\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYEYEOL51\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYEYEOL52\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYEYEOL53\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYEYEOL_TOTAL\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster5", this);
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JUYA_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"JEONHYEONG_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONHYEONG_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"SEBUJEONHYEONG_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"SEBUJEONHYEONG_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"GYEYEOL11\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYEYEOL21\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYEYEOL22\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYEYEOL23\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYEYEOL24\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYEYEOL31\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYEYEOL41\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYEYEOL51\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYEYEOL52\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYEYEOL53\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYEYEOL_TOTAL\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster6", this);
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JUYA_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"JEONHYEONG_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONHYEONG_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"SEBUJEONHYEONG_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"SEBUJEONHYEONG_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"GYEYEOL11\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYEYEOL21\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYEYEOL22\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYEYEOL23\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYEYEOL24\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYEYEOL31\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYEYEOL41\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYEYEOL51\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYEYEOL52\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYEYEOL53\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYEYEOL_TOTAL\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","500","42","100","35",null,null,null,null,null,null,this);
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

            obj = new Static("stc_09_00","0","52",null,"22","1475",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("고교구분현항통계");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","147","51",null,"24","1370",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","69","320","8",null,null,null,null,null,null,this);
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

            obj = new Div("divSearch","0","0",null,"42","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","16","0","1620","9",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new Static("Static01_01_00","20","31","1610","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJeongwon","584","9","124","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsJeongwon");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01","712","9","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("통계구분1");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00","493","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("정원구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00","7","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("입시년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","100","9","124","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_cssclass("point");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","248","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("모집구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchMojip","341","9","124","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsMojip");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","67",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","90","0","10","37",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","331","0","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01","465","-1","56","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","574","0","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00","708","-1","56","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01","824","0","10","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_01","224","3","56","60",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchTonggye1","834","9","94","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsTonggye1");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00",null,"0","27","37","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_02","928","9","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("통계구분2");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_02","1040","0","10","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchTonggye2","1050","9","94","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsTonggye2");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00_00_00_00","928","9","56","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Grid("grdMaster1","0","77",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cellsizingtype("col");
            obj.set_visible("true");
            obj.set_binddataset("dsMaster1");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"180\"/><Column size=\"81\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"모집학과\"/><Cell col=\"1\" rowspan=\"2\" text=\"주야구분\"/><Cell col=\"2\" text=\"일반고\"/><Cell col=\"3\" text=\"과학고\"/><Cell col=\"4\" text=\"외고/국제고/특목고\"/><Cell col=\"5\" text=\"예술/체육고\"/><Cell col=\"6\" text=\"산업수요맞춤형고\"/><Cell col=\"7\" text=\"특성화고\"/><Cell col=\"8\" text=\"자율고\"/><Cell col=\"9\" text=\"영재학교\"/><Cell col=\"10\" text=\"검정고시\"/><Cell col=\"11\" text=\"기타고\"/><Cell col=\"12\" rowspan=\"2\" text=\"총계\"/><Cell row=\"1\" col=\"2\" text=\"지원자\"/><Cell row=\"1\" col=\"3\" text=\"지원자\"/><Cell row=\"1\" col=\"4\" text=\"지원자\"/><Cell row=\"1\" col=\"5\" text=\"지원자\"/><Cell row=\"1\" col=\"6\" text=\"지원자\"/><Cell row=\"1\" col=\"7\" text=\"지원자\"/><Cell row=\"1\" col=\"8\" text=\"지원자\"/><Cell row=\"1\" col=\"9\" text=\"지원자\"/><Cell row=\"1\" col=\"10\" text=\"지원자\"/><Cell row=\"1\" col=\"11\" text=\"지원자\"/></Band><Band id=\"body\"><Cell text=\"bind:HAKGWA_NM\" suppress=\"1\" suppressalign=\"middle\" background=\"white\" color=\"black\"/><Cell col=\"1\" text=\"bind:JUYA_GBNM\"/><Cell col=\"2\" text=\"bind:GYEYEOL11\" displaytype=\"number\"/><Cell col=\"3\" text=\"bind:GYEYEOL21\" displaytype=\"number\"/><Cell col=\"4\" text=\"bind:GYEYEOL22\" displaytype=\"number\"/><Cell col=\"5\" text=\"bind:GYEYEOL23\" displaytype=\"number\"/><Cell col=\"6\" text=\"bind:GYEYEOL24\" displaytype=\"number\"/><Cell col=\"7\" text=\"bind:GYEYEOL31\" displaytype=\"number\"/><Cell col=\"8\" text=\"bind:GYEYEOL41\" displaytype=\"number\"/><Cell col=\"9\" text=\"bind:GYEYEOL51\" displaytype=\"number\"/><Cell col=\"10\" text=\"bind:GYEYEOL52\" displaytype=\"number\"/><Cell col=\"11\" text=\"bind:GYEYEOL53\" displaytype=\"number\"/><Cell col=\"12\" text=\"bind:GYEYEOL_TOTAL\" displaytype=\"number\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"합   계:\"/><Cell col=\"2\" text=\"expr:dataset.getSum(&quot;GYEYEOL11&quot;)\" displaytype=\"number\"/><Cell col=\"3\" text=\"expr:dataset.getSum(&quot;GYEYEOL21&quot;)\" displaytype=\"number\"/><Cell col=\"4\" text=\"expr:dataset.getSum(&quot;GYEYEOL22&quot;)\" displaytype=\"number\"/><Cell col=\"5\" text=\"expr:dataset.getSum(&quot;GYEYEOL23&quot;)\" displaytype=\"number\"/><Cell col=\"6\" text=\"expr:dataset.getSum(&quot;GYEYEOL24&quot;)\" displaytype=\"number\"/><Cell col=\"7\" text=\"expr:dataset.getSum(&quot;GYEYEOL31&quot;)\" displaytype=\"number\"/><Cell col=\"8\" text=\"expr:dataset.getSum(&quot;GYEYEOL41&quot;)\" displaytype=\"number\"/><Cell col=\"9\" text=\"expr:dataset.getSum(&quot;GYEYEOL51&quot;)\" displaytype=\"number\"/><Cell col=\"10\" text=\"expr:dataset.getSum(&quot;GYEYEOL52&quot;)\" displaytype=\"number\"/><Cell col=\"11\" text=\"expr:dataset.getSum(&quot;GYEYEOL53&quot;)\" displaytype=\"number\"/><Cell col=\"12\" text=\"expr:dataset.getSum(&quot;GYEYEOL_TOTAL&quot;)\" displaytype=\"number\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster2","0","77",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cellsizingtype("col");
            obj.set_visible("false");
            obj.set_binddataset("dsMaster2");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"180\"/><Column size=\"81\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"모집학과\"/><Cell col=\"1\" rowspan=\"2\" text=\"주야구분\"/><Cell col=\"2\" text=\"일반고\"/><Cell col=\"3\" text=\"과학고\"/><Cell col=\"4\" text=\"외고/국제고/특목고\"/><Cell col=\"5\" text=\"예술/체육고\"/><Cell col=\"6\" text=\"산업수요맞춤형고\"/><Cell col=\"7\" text=\"특성화고\"/><Cell col=\"8\" text=\"자율고\"/><Cell col=\"9\" text=\"영재학교\"/><Cell col=\"10\" text=\"검정고시\"/><Cell col=\"11\" text=\"기타고\"/><Cell col=\"12\" rowspan=\"2\" text=\"총계\"/><Cell row=\"1\" col=\"2\" text=\"합격자\"/><Cell row=\"1\" col=\"3\" text=\"합격자\"/><Cell row=\"1\" col=\"4\" text=\"합격자\"/><Cell row=\"1\" col=\"5\" text=\"합격자\"/><Cell row=\"1\" col=\"6\" text=\"합격자\"/><Cell row=\"1\" col=\"7\" text=\"합격자\"/><Cell row=\"1\" col=\"8\" text=\"합격자\"/><Cell row=\"1\" col=\"9\" text=\"합격자\"/><Cell row=\"1\" col=\"10\" text=\"합격자\"/><Cell row=\"1\" col=\"11\" text=\"합격자\"/></Band><Band id=\"body\"><Cell text=\"bind:HAKGWA_NM\" suppress=\"1\" suppressalign=\"middle\" background=\"white\" color=\"black\"/><Cell col=\"1\" text=\"bind:JUYA_GBNM\"/><Cell col=\"2\" text=\"bind:GYEYEOL11\" displaytype=\"number\"/><Cell col=\"3\" text=\"bind:GYEYEOL21\" displaytype=\"number\"/><Cell col=\"4\" text=\"bind:GYEYEOL22\" displaytype=\"number\"/><Cell col=\"5\" text=\"bind:GYEYEOL23\" displaytype=\"number\"/><Cell col=\"6\" text=\"bind:GYEYEOL24\" displaytype=\"number\"/><Cell col=\"7\" text=\"bind:GYEYEOL31\" displaytype=\"number\"/><Cell col=\"8\" text=\"bind:GYEYEOL41\" displaytype=\"number\"/><Cell col=\"9\" text=\"bind:GYEYEOL51\" displaytype=\"number\"/><Cell col=\"10\" text=\"bind:GYEYEOL52\" displaytype=\"number\"/><Cell col=\"11\" text=\"bind:GYEYEOL53\" displaytype=\"number\"/><Cell col=\"12\" text=\"bind:GYEYEOL_TOTAL\" displaytype=\"number\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"합   계:\"/><Cell col=\"2\" text=\"expr:dataset.getSum(&quot;GYEYEOL11&quot;)\" displaytype=\"number\"/><Cell col=\"3\" text=\"expr:dataset.getSum(&quot;GYEYEOL21&quot;)\" displaytype=\"number\"/><Cell col=\"4\" text=\"expr:dataset.getSum(&quot;GYEYEOL22&quot;)\" displaytype=\"number\"/><Cell col=\"5\" text=\"expr:dataset.getSum(&quot;GYEYEOL23&quot;)\" displaytype=\"number\"/><Cell col=\"6\" text=\"expr:dataset.getSum(&quot;GYEYEOL24&quot;)\" displaytype=\"number\"/><Cell col=\"7\" text=\"expr:dataset.getSum(&quot;GYEYEOL31&quot;)\" displaytype=\"number\"/><Cell col=\"8\" text=\"expr:dataset.getSum(&quot;GYEYEOL41&quot;)\" displaytype=\"number\"/><Cell col=\"9\" text=\"expr:dataset.getSum(&quot;GYEYEOL51&quot;)\" displaytype=\"number\"/><Cell col=\"10\" text=\"expr:dataset.getSum(&quot;GYEYEOL52&quot;)\" displaytype=\"number\"/><Cell col=\"11\" text=\"expr:dataset.getSum(&quot;GYEYEOL53&quot;)\" displaytype=\"number\"/><Cell col=\"12\" text=\"expr:dataset.getSum(&quot;GYEYEOL_TOTAL&quot;)\" displaytype=\"number\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster3","0","77",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cellsizingtype("col");
            obj.set_visible("false");
            obj.set_binddataset("dsMaster3");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"180\"/><Column size=\"81\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"모집학과\"/><Cell col=\"1\" rowspan=\"2\" text=\"주야구분\"/><Cell col=\"2\" text=\"일반고\"/><Cell col=\"3\" text=\"과학고\"/><Cell col=\"4\" text=\"외고/국제고/특목고\"/><Cell col=\"5\" text=\"예술/체육고\"/><Cell col=\"6\" text=\"산업수요맞춤형고\"/><Cell col=\"7\" text=\"특성화고\"/><Cell col=\"8\" text=\"자율고\"/><Cell col=\"9\" text=\"영재학교\"/><Cell col=\"10\" text=\"검정고시\"/><Cell col=\"11\" text=\"기타고\"/><Cell col=\"12\" rowspan=\"2\" text=\"총계\"/><Cell row=\"1\" col=\"2\" text=\"등록자\"/><Cell row=\"1\" col=\"3\" text=\"등록자\"/><Cell row=\"1\" col=\"4\" text=\"등록자\"/><Cell row=\"1\" col=\"5\" text=\"등록자\"/><Cell row=\"1\" col=\"6\" text=\"등록자\"/><Cell row=\"1\" col=\"7\" text=\"등록자\"/><Cell row=\"1\" col=\"8\" text=\"등록자\"/><Cell row=\"1\" col=\"9\" text=\"등록자\"/><Cell row=\"1\" col=\"10\" text=\"등록자\"/><Cell row=\"1\" col=\"11\" text=\"등록자\"/></Band><Band id=\"body\"><Cell text=\"bind:HAKGWA_NM\" suppress=\"1\" suppressalign=\"middle\" background=\"white\" color=\"black\"/><Cell col=\"1\" text=\"bind:JUYA_GBNM\"/><Cell col=\"2\" text=\"bind:GYEYEOL11\" displaytype=\"number\"/><Cell col=\"3\" text=\"bind:GYEYEOL21\" displaytype=\"number\"/><Cell col=\"4\" text=\"bind:GYEYEOL22\" displaytype=\"number\"/><Cell col=\"5\" text=\"bind:GYEYEOL23\" displaytype=\"number\"/><Cell col=\"6\" text=\"bind:GYEYEOL24\" displaytype=\"number\"/><Cell col=\"7\" text=\"bind:GYEYEOL31\" displaytype=\"number\"/><Cell col=\"8\" text=\"bind:GYEYEOL41\" displaytype=\"number\"/><Cell col=\"9\" text=\"bind:GYEYEOL51\" displaytype=\"number\"/><Cell col=\"10\" text=\"bind:GYEYEOL52\" displaytype=\"number\"/><Cell col=\"11\" text=\"bind:GYEYEOL53\" displaytype=\"number\"/><Cell col=\"12\" text=\"bind:GYEYEOL_TOTAL\" displaytype=\"number\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"합   계:\"/><Cell col=\"2\" text=\"expr:dataset.getSum(&quot;GYEYEOL11&quot;)\" displaytype=\"number\"/><Cell col=\"3\" text=\"expr:dataset.getSum(&quot;GYEYEOL21&quot;)\" displaytype=\"number\"/><Cell col=\"4\" text=\"expr:dataset.getSum(&quot;GYEYEOL22&quot;)\" displaytype=\"number\"/><Cell col=\"5\" text=\"expr:dataset.getSum(&quot;GYEYEOL23&quot;)\" displaytype=\"number\"/><Cell col=\"6\" text=\"expr:dataset.getSum(&quot;GYEYEOL24&quot;)\" displaytype=\"number\"/><Cell col=\"7\" text=\"expr:dataset.getSum(&quot;GYEYEOL31&quot;)\" displaytype=\"number\"/><Cell col=\"8\" text=\"expr:dataset.getSum(&quot;GYEYEOL41&quot;)\" displaytype=\"number\"/><Cell col=\"9\" text=\"expr:dataset.getSum(&quot;GYEYEOL51&quot;)\" displaytype=\"number\"/><Cell col=\"10\" text=\"expr:dataset.getSum(&quot;GYEYEOL52&quot;)\" displaytype=\"number\"/><Cell col=\"11\" text=\"expr:dataset.getSum(&quot;GYEYEOL53&quot;)\" displaytype=\"number\"/><Cell col=\"12\" text=\"expr:dataset.getSum(&quot;GYEYEOL_TOTAL&quot;)\" displaytype=\"number\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster4","0","77",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cellsizingtype("col");
            obj.set_visible("false");
            obj.set_binddataset("dsMaster4");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"180\"/><Column size=\"81\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"전형\"/><Cell col=\"1\" rowspan=\"2\" text=\"세부전형\"/><Cell col=\"2\" rowspan=\"2\" text=\"주야구분\"/><Cell col=\"3\" text=\"일반고\"/><Cell col=\"4\" text=\"과학고\"/><Cell col=\"5\" text=\"외고/국제고/특목고\"/><Cell col=\"6\" text=\"예술/체육고\"/><Cell col=\"7\" text=\"산업수요맞춤형고\"/><Cell col=\"8\" text=\"특성화고\"/><Cell col=\"9\" text=\"자율고\"/><Cell col=\"10\" text=\"영재학교\"/><Cell col=\"11\" text=\"검정고시\"/><Cell col=\"12\" text=\"기타고\"/><Cell col=\"13\" rowspan=\"2\" text=\"총계\"/><Cell row=\"1\" col=\"3\" text=\"지원자\"/><Cell row=\"1\" col=\"4\" text=\"지원자\"/><Cell row=\"1\" col=\"5\" text=\"지원자\"/><Cell row=\"1\" col=\"6\" text=\"지원자\"/><Cell row=\"1\" col=\"7\" text=\"지원자\"/><Cell row=\"1\" col=\"8\" text=\"지원자\"/><Cell row=\"1\" col=\"9\" text=\"지원자\"/><Cell row=\"1\" col=\"10\" text=\"지원자\"/><Cell row=\"1\" col=\"11\" text=\"지원자\"/><Cell row=\"1\" col=\"12\" text=\"지원자\"/></Band><Band id=\"body\"><Cell text=\"bind:JEONHYEONG_GBNM\" suppressalign=\"middle\" suppress=\"1\" background=\"white\" color=\"black\"/><Cell col=\"1\" text=\"bind:SEBUJEONHYEONG_GBNM\" background=\"white\" color=\"black\" suppressalign=\"middle\" suppress=\"1\"/><Cell col=\"2\" text=\"bind:JUYA_GBNM\"/><Cell col=\"3\" text=\"bind:GYEYEOL11\" displaytype=\"number\"/><Cell col=\"4\" text=\"bind:GYEYEOL21\" displaytype=\"number\"/><Cell col=\"5\" text=\"bind:GYEYEOL22\" displaytype=\"number\"/><Cell col=\"6\" text=\"bind:GYEYEOL23\" displaytype=\"number\"/><Cell col=\"7\" text=\"bind:GYEYEOL24\" displaytype=\"number\"/><Cell col=\"8\" text=\"bind:GYEYEOL31\" displaytype=\"number\"/><Cell col=\"9\" text=\"bind:GYEYEOL41\" displaytype=\"number\"/><Cell col=\"10\" text=\"bind:GYEYEOL51\" displaytype=\"number\"/><Cell col=\"11\" text=\"bind:GYEYEOL52\" displaytype=\"number\"/><Cell col=\"12\" text=\"bind:GYEYEOL53\" displaytype=\"number\"/><Cell col=\"13\" text=\"bind:GYEYEOL_TOTAL\" displaytype=\"number\"/></Band><Band id=\"summary\"><Cell colspan=\"3\" text=\"합   계:\"/><Cell col=\"3\" text=\"expr:dataset.getSum(&quot;GYEYEOL11&quot;)\" displaytype=\"number\"/><Cell col=\"4\" text=\"expr:dataset.getSum(&quot;GYEYEOL21&quot;)\" displaytype=\"number\"/><Cell col=\"5\" text=\"expr:dataset.getSum(&quot;GYEYEOL22&quot;)\" displaytype=\"number\"/><Cell col=\"6\" text=\"expr:dataset.getSum(&quot;GYEYEOL23&quot;)\" displaytype=\"number\"/><Cell col=\"7\" text=\"expr:dataset.getSum(&quot;GYEYEOL24&quot;)\" displaytype=\"number\"/><Cell col=\"8\" text=\"expr:dataset.getSum(&quot;GYEYEOL31&quot;)\" displaytype=\"number\"/><Cell col=\"9\" text=\"expr:dataset.getSum(&quot;GYEYEOL41&quot;)\" displaytype=\"number\"/><Cell col=\"10\" text=\"expr:dataset.getSum(&quot;GYEYEOL51&quot;)\" displaytype=\"number\"/><Cell col=\"11\" text=\"expr:dataset.getSum(&quot;GYEYEOL52&quot;)\" displaytype=\"number\"/><Cell col=\"12\" text=\"expr:dataset.getSum(&quot;GYEYEOL53&quot;)\" displaytype=\"number\"/><Cell col=\"13\" text=\"expr:dataset.getSum(&quot;GYEYEOL_TOTAL&quot;)\" displaytype=\"number\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster5","0","77",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cellsizingtype("col");
            obj.set_visible("false");
            obj.set_binddataset("dsMaster5");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"180\"/><Column size=\"81\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"전형\"/><Cell col=\"1\" rowspan=\"2\" text=\"세부전형\"/><Cell col=\"2\" rowspan=\"2\" text=\"주야구분\"/><Cell col=\"3\" text=\"일반고\"/><Cell col=\"4\" text=\"과학고\"/><Cell col=\"5\" text=\"외고/국제고/특목고\"/><Cell col=\"6\" text=\"예술/체육고\"/><Cell col=\"7\" text=\"산업수요맞춤형고\"/><Cell col=\"8\" text=\"특성화고\"/><Cell col=\"9\" text=\"자율고\"/><Cell col=\"10\" text=\"영재학교\"/><Cell col=\"11\" text=\"검정고시\"/><Cell col=\"12\" text=\"기타고\"/><Cell col=\"13\" rowspan=\"2\" text=\"총계\"/><Cell row=\"1\" col=\"3\" text=\"합격자\"/><Cell row=\"1\" col=\"4\" text=\"합격자\"/><Cell row=\"1\" col=\"5\" text=\"합격자\"/><Cell row=\"1\" col=\"6\" text=\"합격자\"/><Cell row=\"1\" col=\"7\" text=\"합격자\"/><Cell row=\"1\" col=\"8\" text=\"합격자\"/><Cell row=\"1\" col=\"9\" text=\"합격자\"/><Cell row=\"1\" col=\"10\" text=\"합격자\"/><Cell row=\"1\" col=\"11\" text=\"합격자\"/><Cell row=\"1\" col=\"12\" text=\"합격자\"/></Band><Band id=\"body\"><Cell text=\"bind:JEONHYEONG_GBNM\" color=\"black\" background=\"white\" suppressalign=\"middle\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:SEBUJEONHYEONG_GBNM\" suppress=\"1\" suppressalign=\"middle\" background=\"white\" color=\"black\"/><Cell col=\"2\" text=\"bind:JUYA_GBNM\"/><Cell col=\"3\" text=\"bind:GYEYEOL11\" displaytype=\"number\"/><Cell col=\"4\" text=\"bind:GYEYEOL21\" displaytype=\"number\"/><Cell col=\"5\" text=\"bind:GYEYEOL22\" displaytype=\"number\"/><Cell col=\"6\" text=\"bind:GYEYEOL23\" displaytype=\"number\"/><Cell col=\"7\" text=\"bind:GYEYEOL24\" displaytype=\"number\"/><Cell col=\"8\" text=\"bind:GYEYEOL31\" displaytype=\"number\"/><Cell col=\"9\" text=\"bind:GYEYEOL41\" displaytype=\"number\"/><Cell col=\"10\" text=\"bind:GYEYEOL51\" displaytype=\"number\"/><Cell col=\"11\" text=\"bind:GYEYEOL52\" displaytype=\"number\"/><Cell col=\"12\" text=\"bind:GYEYEOL53\" displaytype=\"number\"/><Cell col=\"13\" text=\"bind:GYEYEOL_TOTAL\" displaytype=\"number\"/></Band><Band id=\"summary\"><Cell colspan=\"3\" text=\"합   계:\"/><Cell col=\"3\" text=\"expr:dataset.getSum(&quot;GYEYEOL11&quot;)\" displaytype=\"number\"/><Cell col=\"4\" text=\"expr:dataset.getSum(&quot;GYEYEOL21&quot;)\" displaytype=\"number\"/><Cell col=\"5\" text=\"expr:dataset.getSum(&quot;GYEYEOL22&quot;)\" displaytype=\"number\"/><Cell col=\"6\" text=\"expr:dataset.getSum(&quot;GYEYEOL23&quot;)\" displaytype=\"number\"/><Cell col=\"7\" text=\"expr:dataset.getSum(&quot;GYEYEOL24&quot;)\" displaytype=\"number\"/><Cell col=\"8\" text=\"expr:dataset.getSum(&quot;GYEYEOL31&quot;)\" displaytype=\"number\"/><Cell col=\"9\" text=\"expr:dataset.getSum(&quot;GYEYEOL41&quot;)\" displaytype=\"number\"/><Cell col=\"10\" text=\"expr:dataset.getSum(&quot;GYEYEOL51&quot;)\" displaytype=\"number\"/><Cell col=\"11\" text=\"expr:dataset.getSum(&quot;GYEYEOL52&quot;)\" displaytype=\"number\"/><Cell col=\"12\" text=\"expr:dataset.getSum(&quot;GYEYEOL53&quot;)\" displaytype=\"number\"/><Cell col=\"13\" text=\"expr:dataset.getSum(&quot;GYEYEOL_TOTAL&quot;)\" displaytype=\"number\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster6","0","77",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cellsizingtype("col");
            obj.set_visible("false");
            obj.set_binddataset("dsMaster6");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"180\"/><Column size=\"81\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"전형\"/><Cell col=\"1\" rowspan=\"2\" text=\"세부전형\"/><Cell col=\"2\" rowspan=\"2\" text=\"주야구분\"/><Cell col=\"3\" text=\"일반고\"/><Cell col=\"4\" text=\"과학고\"/><Cell col=\"5\" text=\"외고/국제고/특목고\"/><Cell col=\"6\" text=\"예술/체육고\"/><Cell col=\"7\" text=\"산업수요맞춤형고\"/><Cell col=\"8\" text=\"특성화고\"/><Cell col=\"9\" text=\"자율고\"/><Cell col=\"10\" text=\"영재학교\"/><Cell col=\"11\" text=\"검정고시\"/><Cell col=\"12\" text=\"기타고\"/><Cell col=\"13\" rowspan=\"2\" text=\"총계\"/><Cell row=\"1\" col=\"3\" text=\"등록자\"/><Cell row=\"1\" col=\"4\" text=\"등록자\"/><Cell row=\"1\" col=\"5\" text=\"등록자\"/><Cell row=\"1\" col=\"6\" text=\"등록자\"/><Cell row=\"1\" col=\"7\" text=\"등록자\"/><Cell row=\"1\" col=\"8\" text=\"등록자\"/><Cell row=\"1\" col=\"9\" text=\"등록자\"/><Cell row=\"1\" col=\"10\" text=\"등록자\"/><Cell row=\"1\" col=\"11\" text=\"등록자\"/><Cell row=\"1\" col=\"12\" text=\"등록자\"/></Band><Band id=\"body\"><Cell text=\"bind:JEONHYEONG_GBNM\" background=\"white\" color=\"black\" suppressalign=\"middle\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:SEBUJEONHYEONG_GBNM\" suppress=\"1\" suppressalign=\"middle\" background=\"white\" color=\"black\"/><Cell col=\"2\" text=\"bind:JUYA_GBNM\"/><Cell col=\"3\" text=\"bind:GYEYEOL11\" displaytype=\"number\"/><Cell col=\"4\" text=\"bind:GYEYEOL21\" displaytype=\"number\"/><Cell col=\"5\" text=\"bind:GYEYEOL22\" displaytype=\"number\"/><Cell col=\"6\" text=\"bind:GYEYEOL23\" displaytype=\"number\"/><Cell col=\"7\" text=\"bind:GYEYEOL24\" displaytype=\"number\"/><Cell col=\"8\" text=\"bind:GYEYEOL31\" displaytype=\"number\"/><Cell col=\"9\" text=\"bind:GYEYEOL41\" displaytype=\"number\"/><Cell col=\"10\" text=\"bind:GYEYEOL51\" displaytype=\"number\"/><Cell col=\"11\" text=\"bind:GYEYEOL52\" displaytype=\"number\"/><Cell col=\"12\" text=\"bind:GYEYEOL53\" displaytype=\"number\"/><Cell col=\"13\" text=\"bind:GYEYEOL_TOTAL\" displaytype=\"number\"/></Band><Band id=\"summary\"><Cell colspan=\"3\" text=\"합   계:\"/><Cell col=\"3\" text=\"expr:dataset.getSum(&quot;GYEYEOL11&quot;)\" displaytype=\"number\"/><Cell col=\"4\" text=\"expr:dataset.getSum(&quot;GYEYEOL21&quot;)\" displaytype=\"number\"/><Cell col=\"5\" text=\"expr:dataset.getSum(&quot;GYEYEOL22&quot;)\" displaytype=\"number\"/><Cell col=\"6\" text=\"expr:dataset.getSum(&quot;GYEYEOL23&quot;)\" displaytype=\"number\"/><Cell col=\"7\" text=\"expr:dataset.getSum(&quot;GYEYEOL24&quot;)\" displaytype=\"number\"/><Cell col=\"8\" text=\"expr:dataset.getSum(&quot;GYEYEOL31&quot;)\" displaytype=\"number\"/><Cell col=\"9\" text=\"expr:dataset.getSum(&quot;GYEYEOL41&quot;)\" displaytype=\"number\"/><Cell col=\"10\" text=\"expr:dataset.getSum(&quot;GYEYEOL51&quot;)\" displaytype=\"number\"/><Cell col=\"11\" text=\"expr:dataset.getSum(&quot;GYEYEOL52&quot;)\" displaytype=\"number\"/><Cell col=\"12\" text=\"expr:dataset.getSum(&quot;GYEYEOL53&quot;)\" displaytype=\"number\"/><Cell col=\"13\" text=\"expr:dataset.getSum(&quot;GYEYEOL_TOTAL&quot;)\" displaytype=\"number\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("고교구분현황통계");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","divSearch.form.cboSearchJeongwon","value","ds_input","JEONGWON_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divSearch.form.spnSearchYYYY","value","ds_input","IPSI_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divSearch.form.cboSearchMojip","value","ds_input","MOJIP_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("EN08_1010809_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): EN08_1010809_M.xfdl(고교구분현황통계)
        * 작 성         일 명: 백재인
        * 작 성         일 자: 2021/06/21
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
            var strDs    = "dsJeongwon|dsMojip";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00006|00005";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "T|T|T";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = "";                                      // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId    = "Init";

            // gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
            // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.

            this.gfn_CmmnMultiComboLoad(strDs
                                      , strLgcd
                                      , strComb
                                      , strOptn
                                      , svcId);
        	this.fn_GijunYyyy();
        };

        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {
            this.gfn_clearSortAll(this.grdMaster1);
        	this.gfn_clearSortAll(this.grdMaster2);
        	this.gfn_clearSortAll(this.grdMaster3);
        	this.gfn_clearSortAll(this.grdMaster4);
        	this.gfn_clearSortAll(this.grdMaster5);
        	this.gfn_clearSortAll(this.grdMaster6);
            if(nErrorCode != 0)
            {
                this.gfn_alert(sErrorMsg,"에러정보","","error");
                return false;
            }else
            {
                /*sSvcId (Transaction Id)*/
                switch(sSvcId)
                {
        			case "GigunYyyy":
                            this.fn_PostGigunYyyy();
                        break;
        			case "MojipGb":
                            this.fn_PostMojipGb();
                        break;
                    case "Ret1":
                            this.fn_PostRet1();
                        break;
        			case "Ret2":
                            this.fn_PostRet2();
                        break;
        			case "Ret3":
                            this.fn_PostRet3();
                        break;
        			case "Ret4":
                            this.fn_PostRet4();
                        break;
        			case "Ret5":
                            this.fn_PostRet5();
                        break;
        			case "Ret6":
                            this.fn_PostRet6();
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
        		case "print" :       // 출력
                         this.fn_Print();
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
         * 기능 : 조회 전 실행
         */
        this.fn_PreRet = function()
        {
        	if(this.ds_input.getColumn(0, "IPSI_YYYY") == null || this.ds_input.getColumn(0, "IPSI_YYYY") == '')
        	{
        		this.alert("입시년도를 입력해주세요.");
        		return false;
        	}

            return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_Ret = function()
        {
        	var tonggyeGbcd1 = this.divSearch.form.cboSearchTonggye1.value
        	var tonggyeGbcd2 = this.divSearch.form.cboSearchTonggye2.value
            if(!this.fn_PreRet())
            {
                return false;
            }

        	// 지원자 & 모집학과
        	if(tonggyeGbcd1 == '0' && tonggyeGbcd2 == '0')
        	{
        		var strSvc      = "Ret1";
        		var strUrl      = "/prj/EN/EN08/Retrieve_1010809_M_1.do";
        		var strInDs     = "ds_input=ds_input";
        		var strOutDs    = "dsMaster1=dsMaster1";
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
        	// 합격자 & 모집학과
        	else if(tonggyeGbcd1 == '1' && tonggyeGbcd2 == '0')
        	{
        		var strSvc      = "Ret2";
        		var strUrl      = "/prj/EN/EN08/Retrieve_1010809_M_2.do";
        		var strInDs     = "ds_input=ds_input";
        		var strOutDs    = "dsMaster2=dsMaster2";
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
        	// 등록자 & 모집학과
        	else if(tonggyeGbcd1 == '2' && tonggyeGbcd2 == '0')
        	{
        		var strSvc      = "Ret3";
        		var strUrl      = "/prj/EN/EN08/Retrieve_1010809_M_3.do";
        		var strInDs     = "ds_input=ds_input";
        		var strOutDs    = "dsMaster3=dsMaster3";
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
        	// 지원자 & 세부전형
        	else if(tonggyeGbcd1 == '0' && tonggyeGbcd2 == '1')
        	{
        		var strSvc      = "Ret4";
        		var strUrl      = "/prj/EN/EN08/Retrieve_1010809_M_4.do";
        		var strInDs     = "ds_input=ds_input";
        		var strOutDs    = "dsMaster4=dsMaster4";
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
        	// 합격자 & 세부전형
        	else if(tonggyeGbcd1 == '1' && tonggyeGbcd2 == '1')
        	{
        		var strSvc      = "Ret5";
        		var strUrl      = "/prj/EN/EN08/Retrieve_1010809_M_5.do";
        		var strInDs     = "ds_input=ds_input";
        		var strOutDs    = "dsMaster5=dsMaster5";
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
        	// 등록자 & 세부전형
        	else if(tonggyeGbcd1 == '2' && tonggyeGbcd2 == '1')
        	{
        		var strSvc      = "Ret6";
        		var strUrl      = "/prj/EN/EN08/Retrieve_1010809_M_6.do";
        		var strInDs     = "ds_input=ds_input";
        		var strOutDs    = "dsMaster6=dsMaster6";
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
        };

        /**
         * 기능 : 조회 후 실행
         */
        this.fn_PostRet1 = function()
        {
            this.gfn_getRowCount(this.staRowCnt,this.dsMaster1);
        };
        this.fn_PostRet2 = function()
        {
            this.gfn_getRowCount(this.staRowCnt,this.dsMaster2);
        };
        this.fn_PostRet3 = function()
        {
            this.gfn_getRowCount(this.staRowCnt,this.dsMaster3);
        };
        this.fn_PostRet4 = function()
        {
            this.gfn_getRowCount(this.staRowCnt,this.dsMaster4);
        };
        this.fn_PostRet5 = function()
        {
            this.gfn_getRowCount(this.staRowCnt,this.dsMaster5);
        };
        this.fn_PostRet6 = function()
        {
            this.gfn_getRowCount(this.staRowCnt,this.dsMaster6);
        };

        /**********************************************************************
                06. 팁
        ***********************************************************************/
        this.fn_Tip = function()
        {
        	this.alert("도움말 준비중입니다.");
        };

        /**********************************************************************
                07. 출력
        ***********************************************************************/
        this.fn_Print = function()
        {
        	var IPSI_YYYY				= this.ds_input.getColumn(0, "IPSI_YYYY");
        	var MOJIP_GBCD 				= this.ds_input.getColumn(0, "MOJIP_GBCD");
        	var JEONGWON_GBCD 			= this.ds_input.getColumn(0, "JEONGWON_GBCD");

        	var tonggyeGbcd1 = this.divSearch.form.cboSearchTonggye1.value;
        	var tonggyeGbcd2 = this.divSearch.form.cboSearchTonggye2.value;

        	if(IPSI_YYYY == "" || IPSI_YYYY == null)
        	{
        		this.alert("입시년도를 입력해주세요.");
        		return false;
        	}

        	var param =   { IPSI_YYYY:IPSI_YYYY
        				  , MOJIP_GBCD:MOJIP_GBCD
        				  , JEONGWON_GBCD:JEONGWON_GBCD
        				  }

        	// 지원자 & 모집학과
        	if(tonggyeGbcd1 == '0' && tonggyeGbcd2 == '0')
        	{
        		this.gfn_commonUtils_report('EN08/EN08_1010809_M_01.crf',  param);
        	}
        	// 합격자 & 모집학과
        	else if(tonggyeGbcd1 == '1'&& tonggyeGbcd2 == '0')
        	{
        		this.gfn_commonUtils_report('EN08/EN08_1010809_M_02.crf',  param);
        	}
        	// 등록자 & 모집학과
        	else if(tonggyeGbcd1 == '2'&& tonggyeGbcd2 == '0')
        	{
        		this.gfn_commonUtils_report('EN08/EN08_1010809_M_03.crf',  param);
        	}
        	// 지원자 & 세부전형
        	else if(tonggyeGbcd1 == '0'&& tonggyeGbcd2 == '1')
        	{
        		this.gfn_commonUtils_report('EN08/EN08_1010809_M_04.crf',  param);
        	}
        	// 합격자 & 세부전형
        	else if(tonggyeGbcd1 == '1'&& tonggyeGbcd2 == '1')
        	{
        		this.gfn_commonUtils_report('EN08/EN08_1010809_M_05.crf',  param);
        	}
        	// 등록자 & 세부전형
        	else if(tonggyeGbcd1 == '2'&& tonggyeGbcd2 == '1')
        	{
        		this.gfn_commonUtils_report('EN08/EN08_1010809_M_06.crf',  param);
        	}
        };

        /**********************************************************************
                08. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 소트정열
         */
        this.grdMaster1_onheaddblclick = function(obj,e)
        {
            this.gfn_gridSort(obj,e);
        };
        this.grdMaster2_onheaddblclick = function(obj,e)
        {
            this.gfn_gridSort(obj,e);
        };
        this.grdMaster3_onheaddblclick = function(obj,e)
        {
            this.gfn_gridSort(obj,e);
        };
        this.grdMaster4_onheaddblclick = function(obj,e)
        {
            this.gfn_gridSort(obj,e);
        };
        this.grdMaster5_onheaddblclick = function(obj,e)
        {
            this.gfn_gridSort(obj,e);
        };
        this.grdMaster6_onheaddblclick = function(obj,e)
        {
            this.gfn_gridSort(obj,e);
        };

        // 통계구분 변경시
        this.fn_TonggyeChange = function()
        {
        	var tonggyeGbcd1 = this.divSearch.form.cboSearchTonggye1.value;
        	var tonggyeGbcd2 = this.divSearch.form.cboSearchTonggye2.value;

        	if(tonggyeGbcd1 == 0 && tonggyeGbcd2 == 0)
        	{
        		this.grdMaster1.set_visible(true);
        		this.grdMaster2.set_visible(false);
        		this.grdMaster3.set_visible(false);
        		this.grdMaster4.set_visible(false);
        		this.grdMaster5.set_visible(false);
        		this.grdMaster6.set_visible(false);
        	}
        	else if(tonggyeGbcd1 == 1 && tonggyeGbcd2 == 0)
        	{
        		this.grdMaster1.set_visible(false);
        		this.grdMaster2.set_visible(true);
        		this.grdMaster3.set_visible(false);
        		this.grdMaster4.set_visible(false);
        		this.grdMaster5.set_visible(false);
        		this.grdMaster6.set_visible(false);
        	}
        	else if(tonggyeGbcd1 == 2 && tonggyeGbcd2 == 0)
        	{
        		this.grdMaster1.set_visible(false);
        		this.grdMaster2.set_visible(false);
        		this.grdMaster3.set_visible(true);
        		this.grdMaster4.set_visible(false);
        		this.grdMaster5.set_visible(false);
        		this.grdMaster6.set_visible(false);
        	}
        	else if(tonggyeGbcd1 == 0 && tonggyeGbcd2 == 1)
        	{
        		this.grdMaster1.set_visible(false);
        		this.grdMaster2.set_visible(false);
        		this.grdMaster3.set_visible(false);
        		this.grdMaster4.set_visible(true);
        		this.grdMaster5.set_visible(false);
        		this.grdMaster6.set_visible(false);
        	}
        	else if(tonggyeGbcd1 == 1 && tonggyeGbcd2 == 1)
        	{
        		this.grdMaster1.set_visible(false);
        		this.grdMaster2.set_visible(false);
        		this.grdMaster3.set_visible(false);
        		this.grdMaster4.set_visible(false);
        		this.grdMaster5.set_visible(true);
        		this.grdMaster6.set_visible(false);
        	}
        	else if(tonggyeGbcd1 == 2 && tonggyeGbcd2 == 1)
        	{
        		this.grdMaster1.set_visible(false);
        		this.grdMaster2.set_visible(false);
        		this.grdMaster3.set_visible(false);
        		this.grdMaster4.set_visible(false);
        		this.grdMaster5.set_visible(false);
        		this.grdMaster6.set_visible(true);
        	}
        };

        /**********************************************************************
                09. 공통함수
        ***********************************************************************/
        // 기준년도 가져오기
        this.fn_GijunYyyy = function()
        {
        	var strSvc      = "GigunYyyy";
            var strUrl      = "prj/EN/EN_COM/Retrieve_GIJUN_YYYY.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "ds_gijunYyyy=ds_gijunYyyy";
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

        this.fn_PostGigunYyyy = function()
        {
        	this.ds_input.setColumn(0, "IPSI_YYYY", this.ds_gijunYyyy.getColumn(0, "YYYY"));
        	this.divSearch.form.cboSearchTonggye1.set_index(0);
        	this.divSearch.form.cboSearchTonggye2.set_index(0);
        }

        /**********************************************************************
                10. 검색창 엔터키 조회
        ***********************************************************************/
        this.divSearch_spnSearchYYYY_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"IPSI_YYYY",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchMojip_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"MOJIP_GBCD",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchJeongwon_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"JEONGWON_GBCD",obj.value);
        		this.fn_Ret();
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.cboSearchJeongwon.addEventHandler("onkeydown",this.divSearch_cboSearchJeongwon_onkeydown,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onkeydown",this.divSearch_spnSearchYYYY_onkeydown,this);
            this.divSearch.form.cboSearchMojip.addEventHandler("onkeydown",this.divSearch_cboSearchMojip_onkeydown,this);
            this.divSearch.form.cboSearchTonggye1.addEventHandler("onitemchanged",this.fn_TonggyeChange,this);
            this.divSearch.form.cboSearchTonggye2.addEventHandler("onitemchanged",this.fn_TonggyeChange,this);
        };
        this.loadIncludeScript("EN08_1010809_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
