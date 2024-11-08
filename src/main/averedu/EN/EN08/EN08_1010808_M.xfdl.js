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
            this.set_titletext("지역/학교별학과별통계");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGWON_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JIYEOK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"GOGYO_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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


            obj = new Dataset("dsJiyeok", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTonggye2", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"CODE_NM\">지역별</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">학교별</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster1", this);
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"JIYEOK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JIYEOK_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JUYA_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"CNT01\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT02\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT03\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT04\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT05\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT06\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT07\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT08\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT09\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT10\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT11\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT12\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT13\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT14\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT15\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT16\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT17\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT18\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIYEOK_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JUYA_CNT\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster2", this);
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"JIYEOK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JIYEOK_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JUYA_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"CNT01\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT02\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT03\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT04\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT05\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT06\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT07\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT08\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT09\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT10\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT11\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT12\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT13\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT14\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT15\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT16\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT17\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT18\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIYEOK_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JUYA_CNT\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster3", this);
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"JIYEOK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JIYEOK_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JUYA_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"CNT01\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT02\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT03\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT04\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT05\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT06\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT07\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT08\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT09\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT10\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT11\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT12\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT13\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT14\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT15\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT16\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT17\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT18\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIYEOK_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JUYA_CNT\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster4", this);
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"GOGYO_CD\" type=\"STRING\" size=\"10\"/><Column id=\"GOGYO_NM\" type=\"STRING\" size=\"100\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JUYA_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"CNT01\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT02\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT03\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT04\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT05\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT06\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT07\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT08\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT09\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT10\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT11\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT12\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT13\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT14\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT15\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT16\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT17\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT18\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GOGYO_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JUYA_CNT\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster5", this);
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"GOGYO_CD\" type=\"STRING\" size=\"10\"/><Column id=\"GOGYO_NM\" type=\"STRING\" size=\"100\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JUYA_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"CNT01\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT02\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT03\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT04\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT05\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT06\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT07\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT08\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT09\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT10\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT11\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT12\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT13\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT14\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT15\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT16\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT17\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT18\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GOGYO_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JUYA_CNT\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster6", this);
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"GOGYO_CD\" type=\"STRING\" size=\"10\"/><Column id=\"GOGYO_NM\" type=\"STRING\" size=\"100\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JUYA_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"CNT01\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT02\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT03\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT04\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT05\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT06\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT07\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT08\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT09\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT10\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT11\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT12\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT13\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT14\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT15\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT16\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT17\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT18\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GOGYO_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JUYA_CNT\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","500","42","100","35",null,null,null,null,null,null,this);
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

            obj = new Static("stc_09_00","0","52",null,"22","1475",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("지역/학교별학과별통계");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","177","51",null,"24","1340",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","69","320","8",null,null,null,null,null,null,this);
            obj.set_taborder("10");
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

            obj = new Static("Static01_01_00","20","31","1610","9",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new Combo("cboSearchJeongwon","584","9","124","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsJeongwon");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01","1146","9","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("통계구분1");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00","493","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("정원구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00","7","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
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
            obj.set_taborder("12");
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
            obj.set_taborder("13");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","90","0","10","37",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","331","0","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01","465","-1","56","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","574","0","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00","708","-1","56","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01","1258","0","10","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_01","224","3","56","60",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchTonggye1","1268","9","94","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsTonggye1");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00",null,"0","27","37","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_01","683","9","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_text("지역");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00","795","0","10","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJiyeok","805","9","74","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsJiyeok");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00_00","879","-1","56","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_01_00","867","9","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("25");
            obj.set_text("학교명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchGogyoNm","990","9","124","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("26");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_02","1114","6","10","27",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("27");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearchGogyo","1124","9","22","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_PopSrch");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_01","980","0","10","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("28");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00_00_00","1146","9","56","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("29");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_02","1362","9","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("30");
            obj.set_text("통계구분2");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_02","1474","0","10","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("31");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchTonggye2","1484","9","94","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsTonggye2");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00_00_00_00","1362","9","56","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("32");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Grid("grdMaster1","0","77",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cellsizingtype("col");
            obj.set_visible("true");
            obj.set_binddataset("dsMaster1");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"162\"/><Column size=\"81\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"지역\"/><Cell col=\"1\" rowspan=\"2\" text=\"주야구분\"/><Cell col=\"2\" text=\"간호학과\"/><Cell col=\"3\" text=\"물리치료과\"/><Cell col=\"4\" text=\"임상병리과\"/><Cell col=\"5\" text=\"방사선과\"/><Cell col=\"6\" text=\"치위생과\"/><Cell col=\"7\" text=\"보건행정과\"/><Cell col=\"8\" text=\"토목조경과\"/><Cell col=\"9\" text=\"전기과\"/><Cell col=\"10\" text=\"사회복지과\"/><Cell col=\"11\" text=\"웰빙복지융합과\"/><Cell col=\"12\" text=\"뷰티미용과\"/><Cell col=\"13\" text=\"운동건강과\"/><Cell col=\"14\" text=\"건설융합과\"/><Cell col=\"15\" text=\"휴먼융합복지과\"/><Cell col=\"16\" text=\"호텔조리제빵과\"/><Cell col=\"17\" text=\"평생교육복지학\"/><Cell col=\"18\" text=\"유튜브크리에이터학과\"/><Cell col=\"19\" text=\" \"/><Cell col=\"20\" rowspan=\"2\" text=\"총계\"/><Cell row=\"1\" col=\"2\" text=\"지원자\"/><Cell row=\"1\" col=\"3\" text=\"지원자\"/><Cell row=\"1\" col=\"4\" text=\"지원자\"/><Cell row=\"1\" col=\"5\" text=\"지원자\"/><Cell row=\"1\" col=\"6\" text=\"지원자\"/><Cell row=\"1\" col=\"7\" text=\"지원자\"/><Cell row=\"1\" col=\"8\" text=\"지원자\"/><Cell row=\"1\" col=\"9\" text=\"지원자\"/><Cell row=\"1\" col=\"10\" text=\"지원자\"/><Cell row=\"1\" col=\"11\" text=\"지원자\"/><Cell row=\"1\" col=\"12\" text=\"지원자\"/><Cell row=\"1\" col=\"13\" text=\"지원자\"/><Cell row=\"1\" col=\"14\" text=\"지원자\"/><Cell row=\"1\" col=\"15\" text=\"지원자\"/><Cell row=\"1\" col=\"16\" text=\"지원자\"/><Cell row=\"1\" col=\"17\" text=\"지원자\"/><Cell row=\"1\" col=\"18\" text=\"지원자\"/><Cell row=\"1\" col=\"19\" text=\"지원자\"/></Band><Band id=\"body\"><Cell text=\"bind:JIYEOK_GBNM\" suppress=\"1\" suppressalign=\"middle\" background=\"white\" color=\"black\"/><Cell col=\"1\" text=\"bind:JUYA_GBNM\"/><Cell col=\"2\" text=\"bind:CNT01\" displaytype=\"number\"/><Cell col=\"3\" text=\"bind:CNT02\" displaytype=\"number\"/><Cell col=\"4\" text=\"bind:CNT03\" displaytype=\"number\"/><Cell col=\"5\" text=\"bind:CNT04\" displaytype=\"number\"/><Cell col=\"6\" text=\"bind:CNT05\" displaytype=\"number\"/><Cell col=\"7\" text=\"bind:CNT06\" displaytype=\"number\"/><Cell col=\"8\" text=\"bind:CNT07\" displaytype=\"number\"/><Cell col=\"9\" text=\"bind:CNT08\" displaytype=\"number\"/><Cell col=\"10\" text=\"bind:CNT09\" displaytype=\"number\"/><Cell col=\"11\" text=\"bind:CNT10\" displaytype=\"number\"/><Cell col=\"12\" text=\"bind:CNT11\" displaytype=\"number\"/><Cell col=\"13\" text=\"bind:CNT12\" displaytype=\"number\"/><Cell col=\"14\" text=\"bind:CNT13\" displaytype=\"number\"/><Cell col=\"15\" text=\"bind:CNT14\" displaytype=\"number\"/><Cell col=\"16\" text=\"bind:CNT15\" displaytype=\"number\"/><Cell col=\"17\" text=\"bind:CNT16\" displaytype=\"number\"/><Cell col=\"18\" text=\"bind:CNT17\" displaytype=\"number\"/><Cell col=\"19\" text=\"bind:CNT18\" displaytype=\"number\"/><Cell col=\"20\" text=\"bind:JIYEOK_CNT\" displaytype=\"number\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"합   계:\"/><Cell col=\"2\" text=\"expr:dataset.getSum(&quot;CNT01&quot;)\" displaytype=\"number\"/><Cell col=\"3\" text=\"expr:dataset.getSum(&quot;CNT02&quot;)\" displaytype=\"number\"/><Cell col=\"4\" text=\"expr:dataset.getSum(&quot;CNT03&quot;)\" displaytype=\"number\"/><Cell col=\"5\" text=\"expr:dataset.getSum(&quot;CNT04&quot;)\" displaytype=\"number\"/><Cell col=\"6\" text=\"expr:dataset.getSum(&quot;CNT05&quot;)\" displaytype=\"number\"/><Cell col=\"7\" text=\"expr:dataset.getSum(&quot;CNT06&quot;)\" displaytype=\"number\"/><Cell col=\"8\" text=\"expr:dataset.getSum(&quot;CNT07&quot;)\" displaytype=\"number\"/><Cell col=\"9\" text=\"expr:dataset.getSum(&quot;CNT08&quot;)\" displaytype=\"number\"/><Cell col=\"10\" text=\"expr:dataset.getSum(&quot;CNT09&quot;)\" displaytype=\"number\"/><Cell col=\"11\" text=\"expr:dataset.getSum(&quot;CNT10&quot;)\" displaytype=\"number\"/><Cell col=\"12\" text=\"expr:dataset.getSum(&quot;CNT11&quot;)\" displaytype=\"number\"/><Cell col=\"13\" text=\"expr:dataset.getSum(&quot;CNT12&quot;)\" displaytype=\"number\"/><Cell col=\"14\" text=\"expr:dataset.getSum(&quot;CNT13&quot;)\" displaytype=\"number\"/><Cell col=\"15\" text=\"expr:dataset.getSum(&quot;CNT14&quot;)\" displaytype=\"number\"/><Cell col=\"16\" text=\"expr:dataset.getSum(&quot;CNT15&quot;)\" displaytype=\"number\"/><Cell col=\"17\" text=\"expr:dataset.getSum(&quot;CNT16&quot;)\" displaytype=\"number\"/><Cell col=\"18\" text=\"expr:dataset.getSum(&quot;CNT17&quot;)\" displaytype=\"number\"/><Cell col=\"19\" text=\"expr:dataset.getSum(&quot;CNT18&quot;)\" displaytype=\"number\"/><Cell col=\"20\" text=\"expr:dataset.getSum(&quot;JIYEOK_CNT&quot;)\" displaytype=\"number\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster2","0","77",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cellsizingtype("col");
            obj.set_visible("false");
            obj.set_binddataset("dsMaster2");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"162\"/><Column size=\"81\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"지역\"/><Cell col=\"1\" rowspan=\"2\" text=\"주야구분\"/><Cell col=\"2\" text=\"간호학과\"/><Cell col=\"3\" text=\"물리치료과\"/><Cell col=\"4\" text=\"임상병리과\"/><Cell col=\"5\" text=\"방사선과\"/><Cell col=\"6\" text=\"치위생과\"/><Cell col=\"7\" text=\"보건행정과\"/><Cell col=\"8\" text=\"토목조경과\"/><Cell col=\"9\" text=\"전기과\"/><Cell col=\"10\" text=\"사회복지과\"/><Cell col=\"11\" text=\"웰빙복지융합과\"/><Cell col=\"12\" text=\"뷰티미용과\"/><Cell col=\"13\" text=\"운동건강과\"/><Cell col=\"14\" text=\"건설융합과\"/><Cell col=\"15\" text=\"휴먼융합복지과\"/><Cell col=\"16\" text=\"호텔조리제빵과\"/><Cell col=\"17\" text=\"평생교육복지학\"/><Cell col=\"18\" text=\"유튜브크리에이터학과\"/><Cell col=\"19\" text=\" \"/><Cell col=\"20\" rowspan=\"2\" text=\"총계\"/><Cell row=\"1\" col=\"2\" text=\"합격자\"/><Cell row=\"1\" col=\"3\" text=\"합격자\"/><Cell row=\"1\" col=\"4\" text=\"합격자\"/><Cell row=\"1\" col=\"5\" text=\"합격자\"/><Cell row=\"1\" col=\"6\" text=\"합격자\"/><Cell row=\"1\" col=\"7\" text=\"합격자\"/><Cell row=\"1\" col=\"8\" text=\"합격자\"/><Cell row=\"1\" col=\"9\" text=\"합격자\"/><Cell row=\"1\" col=\"10\" text=\"합격자\"/><Cell row=\"1\" col=\"11\" text=\"합격자\"/><Cell row=\"1\" col=\"12\" text=\"합격자\"/><Cell row=\"1\" col=\"13\" text=\"합격자\"/><Cell row=\"1\" col=\"14\" text=\"합격자\"/><Cell row=\"1\" col=\"15\" text=\"합격자\"/><Cell row=\"1\" col=\"16\" text=\"합격자\"/><Cell row=\"1\" col=\"17\" text=\"합격자\"/><Cell row=\"1\" col=\"18\" text=\"합격자\"/><Cell row=\"1\" col=\"19\" text=\"합격자\"/></Band><Band id=\"body\"><Cell text=\"bind:JIYEOK_GBNM\" suppress=\"1\" suppressalign=\"middle\" background=\"white\" color=\"black\"/><Cell col=\"1\" text=\"bind:JUYA_GBNM\"/><Cell col=\"2\" text=\"bind:CNT01\" displaytype=\"number\"/><Cell col=\"3\" text=\"bind:CNT02\" displaytype=\"number\"/><Cell col=\"4\" text=\"bind:CNT03\" displaytype=\"number\"/><Cell col=\"5\" text=\"bind:CNT04\" displaytype=\"number\"/><Cell col=\"6\" text=\"bind:CNT05\" displaytype=\"number\"/><Cell col=\"7\" text=\"bind:CNT06\" displaytype=\"number\"/><Cell col=\"8\" text=\"bind:CNT07\" displaytype=\"number\"/><Cell col=\"9\" text=\"bind:CNT08\" displaytype=\"number\"/><Cell col=\"10\" text=\"bind:CNT09\" displaytype=\"number\"/><Cell col=\"11\" text=\"bind:CNT10\" displaytype=\"number\"/><Cell col=\"12\" text=\"bind:CNT11\" displaytype=\"number\"/><Cell col=\"13\" text=\"bind:CNT12\" displaytype=\"number\"/><Cell col=\"14\" text=\"bind:CNT13\" displaytype=\"number\"/><Cell col=\"15\" text=\"bind:CNT14\" displaytype=\"number\"/><Cell col=\"16\" text=\"bind:CNT15\" displaytype=\"number\"/><Cell col=\"17\" text=\"bind:CNT16\" displaytype=\"number\"/><Cell col=\"18\" text=\"bind:CNT17\" displaytype=\"number\"/><Cell col=\"19\" text=\"bind:CNT18\" displaytype=\"number\"/><Cell col=\"20\" text=\"bind:JIYEOK_CNT\" displaytype=\"number\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"합   계:\"/><Cell col=\"2\" text=\"expr:dataset.getSum(&quot;CNT01&quot;)\" displaytype=\"number\"/><Cell col=\"3\" text=\"expr:dataset.getSum(&quot;CNT02&quot;)\" displaytype=\"number\"/><Cell col=\"4\" text=\"expr:dataset.getSum(&quot;CNT03&quot;)\" displaytype=\"number\"/><Cell col=\"5\" text=\"expr:dataset.getSum(&quot;CNT04&quot;)\" displaytype=\"number\"/><Cell col=\"6\" text=\"expr:dataset.getSum(&quot;CNT05&quot;)\" displaytype=\"number\"/><Cell col=\"7\" text=\"expr:dataset.getSum(&quot;CNT06&quot;)\" displaytype=\"number\"/><Cell col=\"8\" text=\"expr:dataset.getSum(&quot;CNT07&quot;)\" displaytype=\"number\"/><Cell col=\"9\" text=\"expr:dataset.getSum(&quot;CNT08&quot;)\" displaytype=\"number\"/><Cell col=\"10\" text=\"expr:dataset.getSum(&quot;CNT09&quot;)\" displaytype=\"number\"/><Cell col=\"11\" text=\"expr:dataset.getSum(&quot;CNT10&quot;)\" displaytype=\"number\"/><Cell col=\"12\" text=\"expr:dataset.getSum(&quot;CNT11&quot;)\" displaytype=\"number\"/><Cell col=\"13\" text=\"expr:dataset.getSum(&quot;CNT12&quot;)\" displaytype=\"number\"/><Cell col=\"14\" text=\"expr:dataset.getSum(&quot;CNT13&quot;)\" displaytype=\"number\"/><Cell col=\"15\" text=\"expr:dataset.getSum(&quot;CNT14&quot;)\" displaytype=\"number\"/><Cell col=\"16\" text=\"expr:dataset.getSum(&quot;CNT15&quot;)\" displaytype=\"number\"/><Cell col=\"17\" text=\"expr:dataset.getSum(&quot;CNT16&quot;)\" displaytype=\"number\"/><Cell col=\"18\" text=\"expr:dataset.getSum(&quot;CNT17&quot;)\" displaytype=\"number\"/><Cell col=\"19\" text=\"expr:dataset.getSum(&quot;CNT18&quot;)\" displaytype=\"number\"/><Cell col=\"20\" text=\"expr:dataset.getSum(&quot;JIYEOK_CNT&quot;)\" displaytype=\"number\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster3","0","77",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cellsizingtype("col");
            obj.set_visible("false");
            obj.set_binddataset("dsMaster3");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"162\"/><Column size=\"81\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"지역\"/><Cell col=\"1\" rowspan=\"2\" text=\"주야구분\"/><Cell col=\"2\" text=\"간호학과\"/><Cell col=\"3\" text=\"물리치료과\"/><Cell col=\"4\" text=\"임상병리과\"/><Cell col=\"5\" text=\"방사선과\"/><Cell col=\"6\" text=\"치위생과\"/><Cell col=\"7\" text=\"보건행정과\"/><Cell col=\"8\" text=\"토목조경과\"/><Cell col=\"9\" text=\"전기과\"/><Cell col=\"10\" text=\"사회복지과\"/><Cell col=\"11\" text=\"웰빙복지융합과\"/><Cell col=\"12\" text=\"뷰티미용과\"/><Cell col=\"13\" text=\"운동건강과\"/><Cell col=\"14\" text=\"건설융합과\"/><Cell col=\"15\" text=\"휴먼융합복지과\"/><Cell col=\"16\" text=\"호텔조리제빵과\"/><Cell col=\"17\" text=\"평생교육복지학\"/><Cell col=\"18\" text=\"유튜브크리에이터학과\"/><Cell col=\"19\" text=\" \"/><Cell col=\"20\" rowspan=\"2\" text=\"총계\"/><Cell row=\"1\" col=\"2\" text=\"등록자\"/><Cell row=\"1\" col=\"3\" text=\"등록자\"/><Cell row=\"1\" col=\"4\" text=\"등록자\"/><Cell row=\"1\" col=\"5\" text=\"등록자\"/><Cell row=\"1\" col=\"6\" text=\"등록자\"/><Cell row=\"1\" col=\"7\" text=\"등록자\"/><Cell row=\"1\" col=\"8\" text=\"등록자\"/><Cell row=\"1\" col=\"9\" text=\"등록자\"/><Cell row=\"1\" col=\"10\" text=\"등록자\"/><Cell row=\"1\" col=\"11\" text=\"등록자\"/><Cell row=\"1\" col=\"12\" text=\"등록자\"/><Cell row=\"1\" col=\"13\" text=\"등록자\"/><Cell row=\"1\" col=\"14\" text=\"등록자\"/><Cell row=\"1\" col=\"15\" text=\"등록자\"/><Cell row=\"1\" col=\"16\" text=\"등록자\"/><Cell row=\"1\" col=\"17\" text=\"등록자\"/><Cell row=\"1\" col=\"18\" text=\"등록자\"/><Cell row=\"1\" col=\"19\" text=\"등록자\"/></Band><Band id=\"body\"><Cell text=\"bind:JIYEOK_GBNM\" suppress=\"1\" suppressalign=\"middle\" background=\"white\" color=\"black\"/><Cell col=\"1\" text=\"bind:JUYA_GBNM\"/><Cell col=\"2\" text=\"bind:CNT01\" displaytype=\"number\"/><Cell col=\"3\" text=\"bind:CNT02\" displaytype=\"number\"/><Cell col=\"4\" text=\"bind:CNT03\" displaytype=\"number\"/><Cell col=\"5\" text=\"bind:CNT04\" displaytype=\"number\"/><Cell col=\"6\" text=\"bind:CNT05\" displaytype=\"number\"/><Cell col=\"7\" text=\"bind:CNT06\" displaytype=\"number\"/><Cell col=\"8\" text=\"bind:CNT07\" displaytype=\"number\"/><Cell col=\"9\" text=\"bind:CNT08\" displaytype=\"number\"/><Cell col=\"10\" text=\"bind:CNT09\" displaytype=\"number\"/><Cell col=\"11\" text=\"bind:CNT10\" displaytype=\"number\"/><Cell col=\"12\" text=\"bind:CNT11\" displaytype=\"number\"/><Cell col=\"13\" text=\"bind:CNT12\" displaytype=\"number\"/><Cell col=\"14\" text=\"bind:CNT13\" displaytype=\"number\"/><Cell col=\"15\" text=\"bind:CNT14\" displaytype=\"number\"/><Cell col=\"16\" text=\"bind:CNT15\" displaytype=\"number\"/><Cell col=\"17\" text=\"bind:CNT16\" displaytype=\"number\"/><Cell col=\"18\" text=\"bind:CNT17\" displaytype=\"number\"/><Cell col=\"19\" text=\"bind:CNT18\" displaytype=\"number\"/><Cell col=\"20\" text=\"bind:JIYEOK_CNT\" displaytype=\"number\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"합   계:\"/><Cell col=\"2\" text=\"expr:dataset.getSum(&quot;CNT01&quot;)\" displaytype=\"number\"/><Cell col=\"3\" text=\"expr:dataset.getSum(&quot;CNT02&quot;)\" displaytype=\"number\"/><Cell col=\"4\" text=\"expr:dataset.getSum(&quot;CNT03&quot;)\" displaytype=\"number\"/><Cell col=\"5\" text=\"expr:dataset.getSum(&quot;CNT04&quot;)\" displaytype=\"number\"/><Cell col=\"6\" text=\"expr:dataset.getSum(&quot;CNT05&quot;)\" displaytype=\"number\"/><Cell col=\"7\" text=\"expr:dataset.getSum(&quot;CNT06&quot;)\" displaytype=\"number\"/><Cell col=\"8\" text=\"expr:dataset.getSum(&quot;CNT07&quot;)\" displaytype=\"number\"/><Cell col=\"9\" text=\"expr:dataset.getSum(&quot;CNT08&quot;)\" displaytype=\"number\"/><Cell col=\"10\" text=\"expr:dataset.getSum(&quot;CNT09&quot;)\" displaytype=\"number\"/><Cell col=\"11\" text=\"expr:dataset.getSum(&quot;CNT10&quot;)\" displaytype=\"number\"/><Cell col=\"12\" text=\"expr:dataset.getSum(&quot;CNT11&quot;)\" displaytype=\"number\"/><Cell col=\"13\" text=\"expr:dataset.getSum(&quot;CNT12&quot;)\" displaytype=\"number\"/><Cell col=\"14\" text=\"expr:dataset.getSum(&quot;CNT13&quot;)\" displaytype=\"number\"/><Cell col=\"15\" text=\"expr:dataset.getSum(&quot;CNT14&quot;)\" displaytype=\"number\"/><Cell col=\"16\" text=\"expr:dataset.getSum(&quot;CNT15&quot;)\" displaytype=\"number\"/><Cell col=\"17\" text=\"expr:dataset.getSum(&quot;CNT16&quot;)\" displaytype=\"number\"/><Cell col=\"18\" text=\"expr:dataset.getSum(&quot;CNT17&quot;)\" displaytype=\"number\"/><Cell col=\"19\" text=\"expr:dataset.getSum(&quot;CNT18&quot;)\" displaytype=\"number\"/><Cell col=\"20\" text=\"expr:dataset.getSum(&quot;JIYEOK_CNT&quot;)\" displaytype=\"number\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster4","0","77",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cellsizingtype("col");
            obj.set_visible("false");
            obj.set_binddataset("dsMaster4");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"162\"/><Column size=\"81\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"학교\"/><Cell col=\"1\" rowspan=\"2\" text=\"주야구분\"/><Cell col=\"2\" text=\"간호학과\"/><Cell col=\"3\" text=\"물리치료과\"/><Cell col=\"4\" text=\"임상병리과\"/><Cell col=\"5\" text=\"방사선과\"/><Cell col=\"6\" text=\"치위생과\"/><Cell col=\"7\" text=\"보건행정과\"/><Cell col=\"8\" text=\"토목조경과\"/><Cell col=\"9\" text=\"전기과\"/><Cell col=\"10\" text=\"사회복지과\"/><Cell col=\"11\" text=\"웰빙복지융합과\"/><Cell col=\"12\" text=\"뷰티미용과\"/><Cell col=\"13\" text=\"운동건강과\"/><Cell col=\"14\" text=\"건설융합과\"/><Cell col=\"15\" text=\"휴먼융합복지과\"/><Cell col=\"16\" text=\"호텔조리제빵과\"/><Cell col=\"17\" text=\"평생교육복지학\"/><Cell col=\"18\" text=\"유튜브크리에이터학과\"/><Cell col=\"19\" text=\" \"/><Cell col=\"20\" rowspan=\"2\" text=\"총계\"/><Cell row=\"1\" col=\"2\" text=\"지원자\"/><Cell row=\"1\" col=\"3\" text=\"지원자\"/><Cell row=\"1\" col=\"4\" text=\"지원자\"/><Cell row=\"1\" col=\"5\" text=\"지원자\"/><Cell row=\"1\" col=\"6\" text=\"지원자\"/><Cell row=\"1\" col=\"7\" text=\"지원자\"/><Cell row=\"1\" col=\"8\" text=\"지원자\"/><Cell row=\"1\" col=\"9\" text=\"지원자\"/><Cell row=\"1\" col=\"10\" text=\"지원자\"/><Cell row=\"1\" col=\"11\" text=\"지원자\"/><Cell row=\"1\" col=\"12\" text=\"지원자\"/><Cell row=\"1\" col=\"13\" text=\"지원자\"/><Cell row=\"1\" col=\"14\" text=\"지원자\"/><Cell row=\"1\" col=\"15\" text=\"지원자\"/><Cell row=\"1\" col=\"16\" text=\"지원자\"/><Cell row=\"1\" col=\"17\" text=\"지원자\"/><Cell row=\"1\" col=\"18\" text=\"지원자\"/><Cell row=\"1\" col=\"19\" text=\"지원자\"/></Band><Band id=\"body\"><Cell text=\"bind:GOGYO_NM\" suppress=\"1\" suppressalign=\"middle\" background=\"white\" color=\"black\"/><Cell col=\"1\" text=\"bind:JUYA_GBNM\"/><Cell col=\"2\" text=\"bind:CNT01\" displaytype=\"number\"/><Cell col=\"3\" text=\"bind:CNT02\" displaytype=\"number\"/><Cell col=\"4\" text=\"bind:CNT03\" displaytype=\"number\"/><Cell col=\"5\" text=\"bind:CNT04\" displaytype=\"number\"/><Cell col=\"6\" text=\"bind:CNT05\" displaytype=\"number\"/><Cell col=\"7\" text=\"bind:CNT06\" displaytype=\"number\"/><Cell col=\"8\" text=\"bind:CNT07\" displaytype=\"number\"/><Cell col=\"9\" text=\"bind:CNT08\" displaytype=\"number\"/><Cell col=\"10\" text=\"bind:CNT09\" displaytype=\"number\"/><Cell col=\"11\" text=\"bind:CNT10\" displaytype=\"number\"/><Cell col=\"12\" text=\"bind:CNT11\" displaytype=\"number\"/><Cell col=\"13\" text=\"bind:CNT12\" displaytype=\"number\"/><Cell col=\"14\" text=\"bind:CNT13\" displaytype=\"number\"/><Cell col=\"15\" text=\"bind:CNT14\" displaytype=\"number\"/><Cell col=\"16\" text=\"bind:CNT15\" displaytype=\"number\"/><Cell col=\"17\" text=\"bind:CNT16\" displaytype=\"number\"/><Cell col=\"18\" text=\"bind:CNT17\" displaytype=\"number\"/><Cell col=\"19\" text=\"bind:CNT18\" displaytype=\"number\"/><Cell col=\"20\" text=\"bind:GOGYO_CNT\" displaytype=\"number\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"합   계:\"/><Cell col=\"2\" text=\"expr:dataset.getSum(&quot;CNT01&quot;)\" displaytype=\"number\"/><Cell col=\"3\" text=\"expr:dataset.getSum(&quot;CNT02&quot;)\" displaytype=\"number\"/><Cell col=\"4\" text=\"expr:dataset.getSum(&quot;CNT03&quot;)\" displaytype=\"number\"/><Cell col=\"5\" text=\"expr:dataset.getSum(&quot;CNT04&quot;)\" displaytype=\"number\"/><Cell col=\"6\" text=\"expr:dataset.getSum(&quot;CNT05&quot;)\" displaytype=\"number\"/><Cell col=\"7\" text=\"expr:dataset.getSum(&quot;CNT06&quot;)\" displaytype=\"number\"/><Cell col=\"8\" text=\"expr:dataset.getSum(&quot;CNT07&quot;)\" displaytype=\"number\"/><Cell col=\"9\" text=\"expr:dataset.getSum(&quot;CNT08&quot;)\" displaytype=\"number\"/><Cell col=\"10\" text=\"expr:dataset.getSum(&quot;CNT09&quot;)\" displaytype=\"number\"/><Cell col=\"11\" text=\"expr:dataset.getSum(&quot;CNT10&quot;)\" displaytype=\"number\"/><Cell col=\"12\" text=\"expr:dataset.getSum(&quot;CNT11&quot;)\" displaytype=\"number\"/><Cell col=\"13\" text=\"expr:dataset.getSum(&quot;CNT12&quot;)\" displaytype=\"number\"/><Cell col=\"14\" text=\"expr:dataset.getSum(&quot;CNT13&quot;)\" displaytype=\"number\"/><Cell col=\"15\" text=\"expr:dataset.getSum(&quot;CNT14&quot;)\" displaytype=\"number\"/><Cell col=\"16\" text=\"expr:dataset.getSum(&quot;CNT15&quot;)\" displaytype=\"number\"/><Cell col=\"17\" text=\"expr:dataset.getSum(&quot;CNT16&quot;)\" displaytype=\"number\"/><Cell col=\"18\" text=\"expr:dataset.getSum(&quot;CNT17&quot;)\" displaytype=\"number\"/><Cell col=\"19\" text=\"expr:dataset.getSum(&quot;CNT18&quot;)\" displaytype=\"number\"/><Cell col=\"20\" text=\"expr:dataset.getSum(&quot;GOGYO_CNT&quot;)\" displaytype=\"number\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster5","0","77",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cellsizingtype("col");
            obj.set_visible("false");
            obj.set_binddataset("dsMaster5");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"162\"/><Column size=\"81\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"학교\"/><Cell col=\"1\" rowspan=\"2\" text=\"주야구분\"/><Cell col=\"2\" text=\"간호학과\"/><Cell col=\"3\" text=\"물리치료과\"/><Cell col=\"4\" text=\"임상병리과\"/><Cell col=\"5\" text=\"방사선과\"/><Cell col=\"6\" text=\"치위생과\"/><Cell col=\"7\" text=\"보건행정과\"/><Cell col=\"8\" text=\"토목조경과\"/><Cell col=\"9\" text=\"전기과\"/><Cell col=\"10\" text=\"사회복지과\"/><Cell col=\"11\" text=\"웰빙복지융합과\"/><Cell col=\"12\" text=\"뷰티미용과\"/><Cell col=\"13\" text=\"운동건강과\"/><Cell col=\"14\" text=\"건설융합과\"/><Cell col=\"15\" text=\"휴먼융합복지과\"/><Cell col=\"16\" text=\"호텔조리제빵과\"/><Cell col=\"17\" text=\"평생교육복지학\"/><Cell col=\"18\" text=\"유튜브크리에이터학과\"/><Cell col=\"19\" text=\" \"/><Cell col=\"20\" rowspan=\"2\" text=\"총계\"/><Cell row=\"1\" col=\"2\" text=\"합격자\"/><Cell row=\"1\" col=\"3\" text=\"합격자\"/><Cell row=\"1\" col=\"4\" text=\"합격자\"/><Cell row=\"1\" col=\"5\" text=\"합격자\"/><Cell row=\"1\" col=\"6\" text=\"합격자\"/><Cell row=\"1\" col=\"7\" text=\"합격자\"/><Cell row=\"1\" col=\"8\" text=\"합격자\"/><Cell row=\"1\" col=\"9\" text=\"합격자\"/><Cell row=\"1\" col=\"10\" text=\"합격자\"/><Cell row=\"1\" col=\"11\" text=\"합격자\"/><Cell row=\"1\" col=\"12\" text=\"합격자\"/><Cell row=\"1\" col=\"13\" text=\"합격자\"/><Cell row=\"1\" col=\"14\" text=\"합격자\"/><Cell row=\"1\" col=\"15\" text=\"합격자\"/><Cell row=\"1\" col=\"16\" text=\"합격자\"/><Cell row=\"1\" col=\"17\" text=\"합격자\"/><Cell row=\"1\" col=\"18\" text=\"합격자\"/><Cell row=\"1\" col=\"19\" text=\"합격자\"/></Band><Band id=\"body\"><Cell text=\"bind:GOGYO_NM\" suppress=\"1\" suppressalign=\"middle\" background=\"white\" color=\"black\"/><Cell col=\"1\" text=\"bind:JUYA_GBNM\"/><Cell col=\"2\" text=\"bind:CNT01\" displaytype=\"number\"/><Cell col=\"3\" text=\"bind:CNT02\" displaytype=\"number\"/><Cell col=\"4\" text=\"bind:CNT03\" displaytype=\"number\"/><Cell col=\"5\" text=\"bind:CNT04\" displaytype=\"number\"/><Cell col=\"6\" text=\"bind:CNT05\" displaytype=\"number\"/><Cell col=\"7\" text=\"bind:CNT06\" displaytype=\"number\"/><Cell col=\"8\" text=\"bind:CNT07\" displaytype=\"number\"/><Cell col=\"9\" text=\"bind:CNT08\" displaytype=\"number\"/><Cell col=\"10\" text=\"bind:CNT09\" displaytype=\"number\"/><Cell col=\"11\" text=\"bind:CNT10\" displaytype=\"number\"/><Cell col=\"12\" text=\"bind:CNT11\" displaytype=\"number\"/><Cell col=\"13\" text=\"bind:CNT12\" displaytype=\"number\"/><Cell col=\"14\" text=\"bind:CNT13\" displaytype=\"number\"/><Cell col=\"15\" text=\"bind:CNT14\" displaytype=\"number\"/><Cell col=\"16\" text=\"bind:CNT15\" displaytype=\"number\"/><Cell col=\"17\" text=\"bind:CNT16\" displaytype=\"number\"/><Cell col=\"18\" text=\"bind:CNT17\" displaytype=\"number\"/><Cell col=\"19\" text=\"bind:CNT18\" displaytype=\"number\"/><Cell col=\"20\" text=\"bind:GOGYO_CNT\" displaytype=\"number\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"합   계:\"/><Cell col=\"2\" text=\"expr:dataset.getSum(&quot;CNT01&quot;)\" displaytype=\"number\"/><Cell col=\"3\" text=\"expr:dataset.getSum(&quot;CNT02&quot;)\" displaytype=\"number\"/><Cell col=\"4\" text=\"expr:dataset.getSum(&quot;CNT03&quot;)\" displaytype=\"number\"/><Cell col=\"5\" text=\"expr:dataset.getSum(&quot;CNT04&quot;)\" displaytype=\"number\"/><Cell col=\"6\" text=\"expr:dataset.getSum(&quot;CNT05&quot;)\" displaytype=\"number\"/><Cell col=\"7\" text=\"expr:dataset.getSum(&quot;CNT06&quot;)\" displaytype=\"number\"/><Cell col=\"8\" text=\"expr:dataset.getSum(&quot;CNT07&quot;)\" displaytype=\"number\"/><Cell col=\"9\" text=\"expr:dataset.getSum(&quot;CNT08&quot;)\" displaytype=\"number\"/><Cell col=\"10\" text=\"expr:dataset.getSum(&quot;CNT09&quot;)\" displaytype=\"number\"/><Cell col=\"11\" text=\"expr:dataset.getSum(&quot;CNT10&quot;)\" displaytype=\"number\"/><Cell col=\"12\" text=\"expr:dataset.getSum(&quot;CNT11&quot;)\" displaytype=\"number\"/><Cell col=\"13\" text=\"expr:dataset.getSum(&quot;CNT12&quot;)\" displaytype=\"number\"/><Cell col=\"14\" text=\"expr:dataset.getSum(&quot;CNT13&quot;)\" displaytype=\"number\"/><Cell col=\"15\" text=\"expr:dataset.getSum(&quot;CNT14&quot;)\" displaytype=\"number\"/><Cell col=\"16\" text=\"expr:dataset.getSum(&quot;CNT15&quot;)\" displaytype=\"number\"/><Cell col=\"17\" text=\"expr:dataset.getSum(&quot;CNT16&quot;)\" displaytype=\"number\"/><Cell col=\"18\" text=\"expr:dataset.getSum(&quot;CNT17&quot;)\" displaytype=\"number\"/><Cell col=\"19\" text=\"expr:dataset.getSum(&quot;CNT18&quot;)\" displaytype=\"number\"/><Cell col=\"20\" text=\"expr:dataset.getSum(&quot;GOGYO_CNT&quot;)\" displaytype=\"number\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster6","0","77",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cellsizingtype("col");
            obj.set_visible("false");
            obj.set_binddataset("dsMaster6");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"162\"/><Column size=\"81\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"학교\"/><Cell col=\"1\" rowspan=\"2\" text=\"주야구분\"/><Cell col=\"2\" text=\"간호학과\"/><Cell col=\"3\" text=\"물리치료과\"/><Cell col=\"4\" text=\"임상병리과\"/><Cell col=\"5\" text=\"방사선과\"/><Cell col=\"6\" text=\"치위생과\"/><Cell col=\"7\" text=\"보건행정과\"/><Cell col=\"8\" text=\"토목조경과\"/><Cell col=\"9\" text=\"전기과\"/><Cell col=\"10\" text=\"사회복지과\"/><Cell col=\"11\" text=\"웰빙복지융합과\"/><Cell col=\"12\" text=\"뷰티미용과\"/><Cell col=\"13\" text=\"운동건강과\"/><Cell col=\"14\" text=\"건설융합과\"/><Cell col=\"15\" text=\"휴먼융합복지과\"/><Cell col=\"16\" text=\"호텔조리제빵과\"/><Cell col=\"17\" text=\"평생교육복지학\"/><Cell col=\"18\" text=\"유튜브크리에이터학과\"/><Cell col=\"19\" text=\" \"/><Cell col=\"20\" rowspan=\"2\" text=\"총계\"/><Cell row=\"1\" col=\"2\" text=\"등록자\"/><Cell row=\"1\" col=\"3\" text=\"등록자\"/><Cell row=\"1\" col=\"4\" text=\"등록자\"/><Cell row=\"1\" col=\"5\" text=\"등록자\"/><Cell row=\"1\" col=\"6\" text=\"등록자\"/><Cell row=\"1\" col=\"7\" text=\"등록자\"/><Cell row=\"1\" col=\"8\" text=\"등록자\"/><Cell row=\"1\" col=\"9\" text=\"등록자\"/><Cell row=\"1\" col=\"10\" text=\"등록자\"/><Cell row=\"1\" col=\"11\" text=\"등록자\"/><Cell row=\"1\" col=\"12\" text=\"등록자\"/><Cell row=\"1\" col=\"13\" text=\"등록자\"/><Cell row=\"1\" col=\"14\" text=\"등록자\"/><Cell row=\"1\" col=\"15\" text=\"등록자\"/><Cell row=\"1\" col=\"16\" text=\"등록자\"/><Cell row=\"1\" col=\"17\" text=\"등록자\"/><Cell row=\"1\" col=\"18\" text=\"등록자\"/><Cell row=\"1\" col=\"19\" text=\"등록자\"/></Band><Band id=\"body\"><Cell text=\"bind:GOGYO_NM\" suppress=\"1\" suppressalign=\"middle\" background=\"white\" color=\"black\"/><Cell col=\"1\" text=\"bind:JUYA_GBNM\"/><Cell col=\"2\" text=\"bind:CNT01\" displaytype=\"number\"/><Cell col=\"3\" text=\"bind:CNT02\" displaytype=\"number\"/><Cell col=\"4\" text=\"bind:CNT03\" displaytype=\"number\"/><Cell col=\"5\" text=\"bind:CNT04\" displaytype=\"number\"/><Cell col=\"6\" text=\"bind:CNT05\" displaytype=\"number\"/><Cell col=\"7\" text=\"bind:CNT06\" displaytype=\"number\"/><Cell col=\"8\" text=\"bind:CNT07\" displaytype=\"number\"/><Cell col=\"9\" text=\"bind:CNT08\" displaytype=\"number\"/><Cell col=\"10\" text=\"bind:CNT09\" displaytype=\"number\"/><Cell col=\"11\" text=\"bind:CNT10\" displaytype=\"number\"/><Cell col=\"12\" text=\"bind:CNT11\" displaytype=\"number\"/><Cell col=\"13\" text=\"bind:CNT12\" displaytype=\"number\"/><Cell col=\"14\" text=\"bind:CNT13\" displaytype=\"number\"/><Cell col=\"15\" text=\"bind:CNT14\" displaytype=\"number\"/><Cell col=\"16\" text=\"bind:CNT15\" displaytype=\"number\"/><Cell col=\"17\" text=\"bind:CNT16\" displaytype=\"number\"/><Cell col=\"18\" text=\"bind:CNT17\" displaytype=\"number\"/><Cell col=\"19\" text=\"bind:CNT18\" displaytype=\"number\"/><Cell col=\"20\" text=\"bind:GOGYO_CNT\" displaytype=\"number\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"합   계:\"/><Cell col=\"2\" text=\"expr:dataset.getSum(&quot;CNT01&quot;)\" displaytype=\"number\"/><Cell col=\"3\" text=\"expr:dataset.getSum(&quot;CNT02&quot;)\" displaytype=\"number\"/><Cell col=\"4\" text=\"expr:dataset.getSum(&quot;CNT03&quot;)\" displaytype=\"number\"/><Cell col=\"5\" text=\"expr:dataset.getSum(&quot;CNT04&quot;)\" displaytype=\"number\"/><Cell col=\"6\" text=\"expr:dataset.getSum(&quot;CNT05&quot;)\" displaytype=\"number\"/><Cell col=\"7\" text=\"expr:dataset.getSum(&quot;CNT06&quot;)\" displaytype=\"number\"/><Cell col=\"8\" text=\"expr:dataset.getSum(&quot;CNT07&quot;)\" displaytype=\"number\"/><Cell col=\"9\" text=\"expr:dataset.getSum(&quot;CNT08&quot;)\" displaytype=\"number\"/><Cell col=\"10\" text=\"expr:dataset.getSum(&quot;CNT09&quot;)\" displaytype=\"number\"/><Cell col=\"11\" text=\"expr:dataset.getSum(&quot;CNT10&quot;)\" displaytype=\"number\"/><Cell col=\"12\" text=\"expr:dataset.getSum(&quot;CNT11&quot;)\" displaytype=\"number\"/><Cell col=\"13\" text=\"expr:dataset.getSum(&quot;CNT12&quot;)\" displaytype=\"number\"/><Cell col=\"14\" text=\"expr:dataset.getSum(&quot;CNT13&quot;)\" displaytype=\"number\"/><Cell col=\"15\" text=\"expr:dataset.getSum(&quot;CNT14&quot;)\" displaytype=\"number\"/><Cell col=\"16\" text=\"expr:dataset.getSum(&quot;CNT15&quot;)\" displaytype=\"number\"/><Cell col=\"17\" text=\"expr:dataset.getSum(&quot;CNT16&quot;)\" displaytype=\"number\"/><Cell col=\"18\" text=\"expr:dataset.getSum(&quot;CNT17&quot;)\" displaytype=\"number\"/><Cell col=\"19\" text=\"expr:dataset.getSum(&quot;CNT18&quot;)\" displaytype=\"number\"/><Cell col=\"20\" text=\"expr:dataset.getSum(&quot;GOGYO_CNT&quot;)\" displaytype=\"number\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("지역/학교별학과별통계");
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

            obj = new BindItem("item0","divSearch.form.cboSearchJiyeok","value","ds_input","JIYEOK_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtSearchGogyoNm","value","ds_input","GOGYO_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("EN08_1010808_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): EN08_1010808_M.xfdl(지역/학교별학과별통계)
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
            var strDs    = "dsJeongwon|dsMojip|dsJiyeok";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00006|00005|00053";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
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

        //Popup callback영역
        this.fn_popupCallback = function(strId, strVal)
        {
        	switch(strId)
        	{
        		case "gogyo" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					this.ds_input.setColumn(0, "GOGYO_NM", sRtn[1]);
        					this.ds_input.setColumn(0, "JIYEOK_GBCD", sRtn[2]);
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

        	if(tonggyeGbcd1 == '0' && tonggyeGbcd2 == '0')
        	{
        		var strSvc      = "Ret1";
        		var strUrl      = "/prj/EN/EN08/Retrieve_1010808_M_1.do";
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
        	else if(tonggyeGbcd1 == '1' && tonggyeGbcd2 == '0')
        	{
        		var strSvc      = "Ret2";
        		var strUrl      = "/prj/EN/EN08/Retrieve_1010808_M_2.do";
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
        	else if(tonggyeGbcd1 == '2' && tonggyeGbcd2 == '0')
        	{
        		var strSvc      = "Ret3";
        		var strUrl      = "/prj/EN/EN08/Retrieve_1010808_M_3.do";
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
        	else if(tonggyeGbcd1 == '0' && tonggyeGbcd2 == '1')
        	{
        		var strSvc      = "Ret4";
        		var strUrl      = "/prj/EN/EN08/Retrieve_1010808_M_4.do";
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
        	else if(tonggyeGbcd1 == '1' && tonggyeGbcd2 == '1')
        	{
        		var strSvc      = "Ret5";
        		var strUrl      = "/prj/EN/EN08/Retrieve_1010808_M_5.do";
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
        	else if(tonggyeGbcd1 == '2' && tonggyeGbcd2 == '1')
        	{
        		var strSvc      = "Ret6";
        		var strUrl      = "/prj/EN/EN08/Retrieve_1010808_M_6.do";
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
        	var JIYEOK_GBCD				= this.ds_input.getColumn(0, "JIYEOK_GBCD");
        	var GOGYO_NM				= this.ds_input.getColumn(0, "GOGYO_NM");

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
        				  , JIYEOK_GBCD:JIYEOK_GBCD
        				  , GOGYO_NM:GOGYO_NM
        				  }

        	// 지원자 & 지역별
        	if(tonggyeGbcd1 == '0' && tonggyeGbcd2 == '0')
        	{
        		this.gfn_commonUtils_report('EN08/EN08_1010808_M_01.crf',  param);
        	}
        	// 합격자 & 지역별
        	else if(tonggyeGbcd1 == '1'&& tonggyeGbcd2 == '0')
        	{
        		this.gfn_commonUtils_report('EN08/EN08_1010808_M_02.crf',  param);
        	}
        	// 등록자 & 지역별
        	else if(tonggyeGbcd1 == '2'&& tonggyeGbcd2 == '0')
        	{
        		this.gfn_commonUtils_report('EN08/EN08_1010808_M_03.crf',  param);
        	}
        	// 지원자 & 학교별
        	else if(tonggyeGbcd1 == '0'&& tonggyeGbcd2 == '1')
        	{
        		this.gfn_commonUtils_report('EN08/EN08_1010808_M_04.crf',  param);
        	}
        	// 합격자 & 학교별
        	else if(tonggyeGbcd1 == '1'&& tonggyeGbcd2 == '1')
        	{
        		this.gfn_commonUtils_report('EN08/EN08_1010808_M_05.crf',  param);
        	}
        	// 등록자 & 학교별
        	else if(tonggyeGbcd1 == '2'&& tonggyeGbcd2 == '1')
        	{
        		this.gfn_commonUtils_report('EN08/EN08_1010808_M_06.crf',  param);
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
                10. 팝업
        ***********************************************************************/
        this.divSearch_btnSearchGogyo_onclick = function(obj,e)
        {
        	var oArg = {yyyy:this.ds_input.getColumn(0, "IPSI_YYYY")};
        	var oOption = {};
        	var sPopupCallBack = "fn_popupCallback";
        	this.gfn_openPopup("gogyo","EN01::EN01_1010106_P02.xfdl",oArg,sPopupCallBack,oOption);
        };

        /**********************************************************************
                11. 검색창 엔터키 조회
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

        this.divSearch_cboSearchJiyeok_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"JIYEOK_GBCD",obj.value);
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
            this.divSearch.form.cboSearchJiyeok.addEventHandler("onkeydown",this.divSearch_cboSearchJiyeok_onkeydown,this);
            this.divSearch.form.btnSearchGogyo.addEventHandler("onclick",this.divSearch_btnSearchGogyo_onclick,this);
            this.divSearch.form.cboSearchTonggye2.addEventHandler("onitemchanged",this.fn_TonggyeChange,this);
            this.grdMaster1.addEventHandler("onheaddblclick",this.grdMaster1_onheaddblclick,this);
            this.grdMaster2.addEventHandler("onheaddblclick",this.grdMaster2_onheaddblclick,this);
            this.grdMaster3.addEventHandler("onheaddblclick",this.grdMaster3_onheaddblclick,this);
            this.grdMaster4.addEventHandler("onheaddblclick",this.grdMaster4_onheaddblclick,this);
            this.grdMaster5.addEventHandler("onheaddblclick",this.grdMaster5_onheaddblclick,this);
            this.grdMaster6.addEventHandler("onheaddblclick",this.grdMaster6_onheaddblclick,this);
        };
        this.loadIncludeScript("EN08_1010808_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
