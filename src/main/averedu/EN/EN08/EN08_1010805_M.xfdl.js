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
            this.set_titletext("지역별통계");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGWON_GBCD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gijunYyyy", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJeongwon", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTonggye", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"CODE_NM\">현역/재수</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">남/여</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"CODE_NM\">보건/비보건</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMojip", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster1", this);
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JUYA_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"JIYEOK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JIYEOK_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"TBL2_A_JIWON_CH_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TBL2_A_JIWON_CJ_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TBL2_A_JIWON_CE_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIWON_A_TOTAL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TBL2_B_HAPGYEOK_CH_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TBL2_B_HAPGYEOK_CJ_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TBL2_B_HAPGYEOK_CE_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HAPGYEOK_A_TOTAL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TBL2_C_DEUNGROK_CH_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TBL2_C_DEUNGROK_CJ_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TBL2_C_DEUNGROK_CE_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DEUNGROK_A_TOTAL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TBL3_A_JIWON_CH_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TBL3_A_JIWON_CJ_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TBL3_A_JIWON_CE_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIWON_B_TOTAL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TBL3_B_HAPGYEOK_CH_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TBL3_B_HAPGYEOK_CJ_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TBL3_B_HAPGYEOK_CE_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HAPGYEOK_B_TOTAL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TBL3_C_DEUNGROK_CH_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TBL3_C_DEUNGROK_CJ_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TBL3_C_DEUNGROK_CE_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DEUNGROK_B_TOTAL\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster2", this);
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JUYA_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"JIYEOK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JIYEOK_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"TBL2_A_JIWON_M_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TBL2_A_JIWON_W_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIWON_A_TOTAL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TBL2_B_HAPGYEOK_M_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TBL2_B_HAPGYEOK_W_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HAPGYEOK_A_TOTAL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TBL2_C_DEUNGROK_M_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TBL2_C_DEUNGROK_W_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DEUNGROK_A_TOTAL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TBL3_A_JIWON_M_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TBL3_A_JIWON_W_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIWON_B_TOTAL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TBL3_B_HAPGYEOK_M_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TBL3_B_HAPGYEOK_W_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HAPGYEOK_B_TOTAL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TBL3_C_DEUNGROK_M_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TBL3_C_DEUNGROK_W_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DEUNGROK_B_TOTAL\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster3", this);
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JUYA_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"JIYEOK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JIYEOK_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"TBL2_A_JIWON_BOGEON_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TBL2_A_JIWON_NOTBOGEON_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIWON_A_TOTAL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TBL2_B_HAPGYEOK_BOGEON_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TBL2_B_HAPGYEOK_NOTBOGEON_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HAPGYEOK_A_TOTAL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TBL2_C_DEUNGROK_BOGEON_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TBL2_C_DEUNGROK_NOTBOGEON_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DEUNGROK_A_TOTAL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TBL3_A_JIWON_BOGEON_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TBL3_A_JIWON_NOTBOGEON_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIWON_B_TOTAL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TBL3_B_HAPGYEOK_BOGEON_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TBL3_B_HAPGYEOK_NOTBOGEON_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HAPGYEOK_B_TOTAL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TBL3_C_DEUNGROK_BOGEON_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TBL3_C_DEUNGROK_NOTBOGEON_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DEUNGROK_B_TOTAL\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","500","42","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("4");
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
            obj.set_taborder("5");
            obj.set_text("지역별통계");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt1","107","51",null,"24","1410",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","69","320","8",null,null,null,null,null,null,this);
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

            obj = new Div("divSearch","0","0",null,"42","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","16","0","1620","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
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
            obj.set_taborder("5");
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

            obj = new Static("stc_01","703","9","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("통계구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00","493","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("정원구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00","7","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
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
            obj.set_taborder("9");
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
            obj.set_taborder("10");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","90","0","10","37",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","331","0","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01","465","-1","56","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","574","0","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00","708","-1","56","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01","815","0","10","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_01","224","3","56","60",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchTonggye","825","9","124","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsTonggye");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00",null,"0","27","67","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staRowCnt2","107","51",null,"24","1410",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster1","0","77",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cellsizingtype("col");
            obj.set_visible("true");
            obj.set_binddataset("dsMaster1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"162\"/><Column size=\"81\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"49\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"3\" text=\"지역\"/><Cell col=\"1\" rowspan=\"3\" text=\"주야구분\"/><Cell col=\"2\" colspan=\"16\" text=\"창구\"/><Cell col=\"18\" colspan=\"16\" text=\"인터넷\"/><Cell col=\"34\" colspan=\"12\" text=\"총계\"/><Cell row=\"1\" col=\"2\" colspan=\"4\" text=\"지원자\"/><Cell row=\"1\" col=\"6\" colspan=\"4\" text=\"합격자\"/><Cell row=\"1\" col=\"10\" colspan=\"4\" text=\"등록자\"/><Cell row=\"1\" col=\"14\" colspan=\"4\" text=\"합계\"/><Cell row=\"1\" col=\"18\" colspan=\"4\" text=\"지원자\"/><Cell row=\"1\" col=\"22\" colspan=\"4\" text=\"합격자\"/><Cell row=\"1\" col=\"26\" colspan=\"4\" text=\"등록자\"/><Cell row=\"1\" col=\"30\" colspan=\"4\" text=\"합계\"/><Cell row=\"1\" col=\"34\" colspan=\"4\" text=\"지원자\"/><Cell row=\"1\" col=\"38\" colspan=\"4\" text=\"합격자\"/><Cell row=\"1\" col=\"42\" colspan=\"4\" text=\"등록자\"/><Cell row=\"2\" col=\"2\" text=\"현역\"/><Cell row=\"2\" col=\"3\" text=\"재수\"/><Cell row=\"2\" col=\"4\" text=\"기타\"/><Cell row=\"2\" col=\"5\" text=\"전체\"/><Cell row=\"2\" col=\"6\" text=\"현역\"/><Cell row=\"2\" col=\"7\" text=\"재수\"/><Cell row=\"2\" col=\"8\" text=\"기타\"/><Cell row=\"2\" col=\"9\" text=\"전체\"/><Cell row=\"2\" col=\"10\" text=\"현역\"/><Cell row=\"2\" col=\"11\" text=\"재수\"/><Cell row=\"2\" col=\"12\" text=\"기타\"/><Cell row=\"2\" col=\"13\" text=\"전체\"/><Cell row=\"2\" col=\"14\" text=\"현역\"/><Cell row=\"2\" col=\"15\" text=\"재수\"/><Cell row=\"2\" col=\"16\" text=\"기타\"/><Cell row=\"2\" col=\"17\" text=\"전체\"/><Cell row=\"2\" col=\"18\" text=\"현역\"/><Cell row=\"2\" col=\"19\" text=\"재수\"/><Cell row=\"2\" col=\"20\" text=\"기타\"/><Cell row=\"2\" col=\"21\" text=\"전체\"/><Cell row=\"2\" col=\"22\" text=\"현역\"/><Cell row=\"2\" col=\"23\" text=\"재수\"/><Cell row=\"2\" col=\"24\" text=\"기타\"/><Cell row=\"2\" col=\"25\" text=\"전체\"/><Cell row=\"2\" col=\"26\" text=\"현역\"/><Cell row=\"2\" col=\"27\" text=\"재수\"/><Cell row=\"2\" col=\"28\" text=\"기타\"/><Cell row=\"2\" col=\"29\" text=\"전체\"/><Cell row=\"2\" col=\"30\" text=\"현역\"/><Cell row=\"2\" col=\"31\" text=\"재수\"/><Cell row=\"2\" col=\"32\" text=\"기타\"/><Cell row=\"2\" col=\"33\" text=\"전체\"/><Cell row=\"2\" col=\"34\" text=\"현역\"/><Cell row=\"2\" col=\"35\" text=\"재수\"/><Cell row=\"2\" col=\"36\" text=\"기타\"/><Cell row=\"2\" col=\"37\" text=\"전체\"/><Cell row=\"2\" col=\"38\" text=\"현역\"/><Cell row=\"2\" col=\"39\" text=\"재수\"/><Cell row=\"2\" col=\"40\" text=\"기타\"/><Cell row=\"2\" col=\"41\" text=\"전체\"/><Cell row=\"2\" col=\"42\" text=\"현역\"/><Cell row=\"2\" col=\"43\" text=\"재수\"/><Cell row=\"2\" col=\"44\" text=\"기타\"/><Cell row=\"2\" col=\"45\" text=\"전체\"/></Band><Band id=\"body\"><Cell edittype=\"button\" text=\"bind:JIYEOK_NM\" suppress=\"1\" suppressalign=\"middle\" background=\"white\" color=\"black\"/><Cell col=\"1\" text=\"bind:JUYA_GBNM\"/><Cell col=\"2\" text=\"bind:TBL2_A_JIWON_CH_CNT\" displaytype=\"number\"/><Cell col=\"3\" text=\"bind:TBL2_A_JIWON_CJ_CNT\" displaytype=\"number\"/><Cell col=\"4\" text=\"bind:TBL2_A_JIWON_CE_CNT\" displaytype=\"number\"/><Cell col=\"5\" text=\"bind:JIWON_A_TOTAL\" displaytype=\"number\"/><Cell col=\"6\" text=\"bind:TBL2_B_HAPGYEOK_CH_CNT\" displaytype=\"number\"/><Cell col=\"7\" text=\"bind:TBL2_B_HAPGYEOK_CJ_CNT\" displaytype=\"number\"/><Cell col=\"8\" text=\"bind:TBL2_B_HAPGYEOK_CE_CNT\" displaytype=\"number\"/><Cell col=\"9\" text=\"bind:HAPGYEOK_A_TOTAL\" displaytype=\"number\"/><Cell col=\"10\" text=\"bind:TBL2_C_DEUNGROK_CH_CNT\" displaytype=\"number\"/><Cell col=\"11\" text=\"bind:TBL2_C_DEUNGROK_CJ_CNT\" displaytype=\"number\"/><Cell col=\"12\" text=\"bind:TBL2_C_DEUNGROK_CE_CNT\" displaytype=\"number\"/><Cell col=\"13\" text=\"bind:DEUNGROK_A_TOTAL\" displaytype=\"number\"/><Cell col=\"14\" expr=\"expr:TBL2_A_JIWON_CH_CNT+TBL2_B_HAPGYEOK_CH_CNT+TBL2_C_DEUNGROK_CH_CNT\" displaytype=\"number\"/><Cell col=\"15\" expr=\"expr:TBL2_A_JIWON_CJ_CNT+TBL2_B_HAPGYEOK_CJ_CNT+TBL2_C_DEUNGROK_CJ_CNT\" displaytype=\"number\"/><Cell col=\"16\" expr=\"expr:TBL2_A_JIWON_CE_CNT+TBL2_B_HAPGYEOK_CE_CNT+TBL2_C_DEUNGROK_CE_CNT\" displaytype=\"number\"/><Cell col=\"17\" expr=\"expr:JIWON_A_TOTAL+HAPGYEOK_A_TOTAL+DEUNGROK_A_TOTAL\" displaytype=\"number\"/><Cell col=\"18\" text=\"bind:TBL3_A_JIWON_CH_CNT\" displaytype=\"number\"/><Cell col=\"19\" text=\"bind:TBL3_A_JIWON_CJ_CNT\" displaytype=\"number\"/><Cell col=\"20\" text=\"bind:TBL3_A_JIWON_CE_CNT\" displaytype=\"number\"/><Cell col=\"21\" text=\"bind:JIWON_B_TOTAL\" displaytype=\"number\"/><Cell col=\"22\" text=\"bind:TBL3_B_HAPGYEOK_CH_CNT\" displaytype=\"number\"/><Cell col=\"23\" text=\"bind:TBL3_B_HAPGYEOK_CJ_CNT\" displaytype=\"number\"/><Cell col=\"24\" text=\"bind:TBL3_B_HAPGYEOK_CE_CNT\" displaytype=\"number\"/><Cell col=\"25\" text=\"bind:HAPGYEOK_B_TOTAL\" displaytype=\"number\"/><Cell col=\"26\" text=\"bind:TBL3_C_DEUNGROK_CH_CNT\" displaytype=\"number\"/><Cell col=\"27\" text=\"bind:TBL3_C_DEUNGROK_CJ_CNT\" displaytype=\"number\"/><Cell col=\"28\" text=\"bind:TBL3_C_DEUNGROK_CE_CNT\" displaytype=\"number\"/><Cell col=\"29\" text=\"bind:DEUNGROK_B_TOTAL\" displaytype=\"number\"/><Cell col=\"30\" expr=\"expr:TBL3_A_JIWON_CH_CNT+TBL3_B_HAPGYEOK_CH_CNT+TBL3_C_DEUNGROK_CH_CNT\" displaytype=\"number\"/><Cell col=\"31\" expr=\"expr:TBL3_A_JIWON_CJ_CNT+TBL3_B_HAPGYEOK_CJ_CNT+TBL3_C_DEUNGROK_CJ_CNT\" displaytype=\"number\"/><Cell col=\"32\" expr=\"expr:TBL3_A_JIWON_CE_CNT+TBL3_B_HAPGYEOK_CE_CNT+TBL3_C_DEUNGROK_CE_CNT\" displaytype=\"number\"/><Cell col=\"33\" expr=\"expr:JIWON_B_TOTAL+HAPGYEOK_B_TOTAL+DEUNGROK_B_TOTAL\" displaytype=\"number\"/><Cell col=\"34\" expr=\"expr:TBL2_A_JIWON_CH_CNT+TBL3_A_JIWON_CH_CNT\" displaytype=\"number\"/><Cell col=\"35\" expr=\"expr:TBL2_A_JIWON_CJ_CNT+TBL3_A_JIWON_CJ_CNT\" displaytype=\"number\"/><Cell col=\"36\" expr=\"expr:TBL2_A_JIWON_CE_CNT+TBL3_A_JIWON_CE_CNT\" displaytype=\"number\"/><Cell col=\"37\" expr=\"expr:JIWON_A_TOTAL+JIWON_B_TOTAL\" displaytype=\"number\"/><Cell col=\"38\" expr=\"expr:TBL2_B_HAPGYEOK_CH_CNT+TBL3_B_HAPGYEOK_CH_CNT\" displaytype=\"number\"/><Cell col=\"39\" expr=\"expr:TBL2_B_HAPGYEOK_CJ_CNT+TBL3_B_HAPGYEOK_CJ_CNT\" displaytype=\"number\"/><Cell col=\"40\" expr=\"expr:TBL2_B_HAPGYEOK_CE_CNT+TBL3_B_HAPGYEOK_CE_CNT\" displaytype=\"number\"/><Cell col=\"41\" expr=\"expr:HAPGYEOK_A_TOTAL+HAPGYEOK_B_TOTAL\" displaytype=\"number\"/><Cell col=\"42\" expr=\"expr:TBL2_C_DEUNGROK_CH_CNT+TBL3_C_DEUNGROK_CH_CNT\" displaytype=\"number\"/><Cell col=\"43\" expr=\"expr:TBL2_C_DEUNGROK_CJ_CNT+TBL3_C_DEUNGROK_CJ_CNT\" displaytype=\"number\"/><Cell col=\"44\" expr=\"expr:TBL2_C_DEUNGROK_CE_CNT+TBL3_C_DEUNGROK_CE_CNT\" displaytype=\"number\"/><Cell col=\"45\" expr=\"expr:DEUNGROK_A_TOTAL+DEUNGROK_B_TOTAL\" displaytype=\"number\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"합  계 :\" textAlign=\"center\"/><Cell col=\"2\" expr=\"expr:dataset.getSum(&quot;TBL2_A_JIWON_CH_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"3\" expr=\"expr:dataset.getSum(&quot;TBL2_A_JIWON_CJ_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"4\" expr=\"expr:dataset.getSum(&quot;TBL2_A_JIWON_CE_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"5\" expr=\"expr:dataset.getSum(&quot;JIWON_A_TOTAL&quot;)\" displaytype=\"number\"/><Cell col=\"6\" expr=\"expr:dataset.getSum(&quot;TBL2_B_HAPGYEOK_CH_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"7\" expr=\"expr:dataset.getSum(&quot;TBL2_B_HAPGYEOK_CJ_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"8\" expr=\"expr:dataset.getSum(&quot;TBL2_B_HAPGYEOK_CE_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"9\" expr=\"expr:dataset.getSum(&quot;HAPGYEOK_A_TOTAL&quot;)\" displaytype=\"number\"/><Cell col=\"10\" expr=\"expr:dataset.getSum(&quot;TBL2_C_DEUNGROK_CH_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"11\" expr=\"expr:dataset.getSum(&quot;TBL2_C_DEUNGROK_CJ_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"12\" expr=\"expr:dataset.getSum(&quot;TBL2_C_DEUNGROK_CE_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"13\" expr=\"expr:dataset.getSum(&quot;DEUNGROK_A_TOTAL&quot;)\" displaytype=\"number\"/><Cell col=\"14\" expr=\"expr:dataset.getSum(&quot;TBL2_A_JIWON_CH_CNT&quot;)+dataset.getSum(&quot;TBL2_B_HAPGYEOK_CH_CNT&quot;)+dataset.getSum(&quot;TBL2_C_DEUNGROK_CH_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"15\" expr=\"expr:dataset.getSum(&quot;TBL2_A_JIWON_CJ_CNT&quot;)+dataset.getSum(&quot;TBL2_B_HAPGYEOK_CJ_CNT&quot;)+dataset.getSum(&quot;TBL2_C_DEUNGROK_CJ_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"16\" expr=\"expr:dataset.getSum(&quot;TBL2_A_JIWON_CE_CNT&quot;)+dataset.getSum(&quot;TBL2_B_HAPGYEOK_CE_CNT&quot;)+dataset.getSum(&quot;TBL2_B_DEUNGROK_CE_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"17\" expr=\"expr:dataset.getSum(&quot;JIWON_A_TOTAL&quot;) + dataset.getSum(&quot;HAPGYEOK_A_TOTAL&quot;)+ dataset.getSum(&quot;DEUNGROK_A_TOTAL&quot;)\" displaytype=\"number\"/><Cell col=\"18\" expr=\"expr:dataset.getSum(&quot;TBL3_A_JIWON_CH_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"19\" expr=\"expr:dataset.getSum(&quot;TBL3_A_JIWON_CJ_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"20\" expr=\"expr:dataset.getSum(&quot;TBL3_A_JIWON_CE_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"21\" expr=\"expr:dataset.getSum(&quot;JIWON_B_TOTAL&quot;)\" displaytype=\"number\"/><Cell col=\"22\" expr=\"expr:dataset.getSum(&quot;TBL3_B_HAPGYEOK_CH_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"23\" expr=\"expr:dataset.getSum(&quot;TBL3_B_HAPGYEOK_CJ_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"24\" expr=\"expr:dataset.getSum(&quot;TBL3_B_HAPGYEOK_CE_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"25\" expr=\"expr:dataset.getSum(&quot;HAPGYEOK_B_TOTAL&quot;)\" displaytype=\"number\"/><Cell col=\"26\" expr=\"expr:dataset.getSum(&quot;TBL3_C_DEUNGROK_CH_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"27\" expr=\"expr:dataset.getSum(&quot;TBL3_C_DEUNGROK_CJ_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"28\" expr=\"expr:dataset.getSum(&quot;TBL3_C_DEUNGROK_CE_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"29\" expr=\"expr:dataset.getSum(&quot;DEUNGROK_B_TOTAL&quot;)\" displaytype=\"number\"/><Cell col=\"30\" expr=\"expr:dataset.getSum(&quot;TBL3_A_JIWON_CH_CNT&quot;)+dataset.getSum(&quot;TBL3_B_HAPGYEOK_CH_CNT&quot;)+dataset.getSum(&quot;TBL3_C_DEUNGROK_CH_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"31\" expr=\"expr:dataset.getSum(&quot;TBL3_A_JIWON_CJ_CNT&quot;)+dataset.getSum(&quot;TBL3_B_HAPGYEOK_CJ_CNT&quot;)+dataset.getSum(&quot;TBL3_C_DEUNGROK_CJ_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"32\" expr=\"expr:dataset.getSum(&quot;TBL3_A_JIWON_CH_CNT&quot;)+dataset.getSum(&quot;TBL3_B_HAPGYEOK_CE_CNT&quot;)+dataset.getSum(&quot;TBL3_C_DEUNGROK_CE_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"33\" expr=\"expr:dataset.getSum(&quot;JIWON_B_TOTAL&quot;)+dataset.getSum(&quot;HAPGYEOK_B_TOTAL&quot;)+dataset.getSum(&quot;DEUNGROK_B_TOTAL&quot;)\" displaytype=\"number\"/><Cell col=\"34\" expr=\"expr:dataset.getSum(&quot;TBL2_A_JIWON_CH_CNT&quot;)+dataset.getSum(&quot;TBL3_A_JIWON_CH_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"35\" expr=\"expr:dataset.getSum(&quot;TBL2_A_JIWON_CJ_CNT&quot;)+dataset.getSum(&quot;TBL3_A_JIWON_CJ_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"36\" expr=\"expr:dataset.getSum(&quot;TBL2_A_JIWON_CE_CNT&quot;)+dataset.getSum(&quot;TBL3_A_JIWON_CE_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"37\" expr=\"expr:dataset.getSum(&quot;JIWON_A_TOTAL&quot;)+dataset.getSum(&quot;JIWON_B_TOTAL&quot;)\" displaytype=\"number\"/><Cell col=\"38\" expr=\"expr:dataset.getSum(&quot;TBL2_B_HAPGYEOK_CH_CNT&quot;)+dataset.getSum(&quot;TBL3_B_HAPGYEOK_CH_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"39\" expr=\"expr:dataset.getSum(&quot;TBL2_B_HAPGYEOK_CJ_CNT&quot;)+dataset.getSum(&quot;TBL3_B_HAPGYEOK_CJ_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"40\" expr=\"expr:dataset.getSum(&quot;TBL2_B_HAPGYEOK_CE_CNT&quot;)+dataset.getSum(&quot;TBL3_B_HAPGYEOK_CE_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"41\" expr=\"expr:dataset.getSum(&quot;HAPGYEOK_A_TOTAL&quot;)+dataset.getSum(&quot;HAPGYEOK_B_TOTAL&quot;)\" displaytype=\"number\"/><Cell col=\"42\" expr=\"expr:dataset.getSum(&quot;TBL2_C_DEUNGROK_CH_CNT&quot;)+dataset.getSum(&quot;TBL3_C_DEUNGROK_CH_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"43\" expr=\"expr:dataset.getSum(&quot;TBL2_C_DEUNGROK_CJ_CNT&quot;)+dataset.getSum(&quot;TBL3_C_DEUNGROK_CJ_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"44\" expr=\"expr:dataset.getSum(&quot;TBL2_C_DEUNGROK_CE_CNT&quot;)+dataset.getSum(&quot;TBL3_C_DEUNGROK_CE_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"45\" expr=\"expr:dataset.getSum(&quot;DEUNGROK_A_TOTAL&quot;)+ dataset.getSum(&quot;DEUNGROK_B_TOTAL&quot;)\" displaytype=\"number\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster2","0","77",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_visible("false");
            obj.set_binddataset("dsMaster2");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"162\"/><Column size=\"81\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"3\" text=\"지역\"/><Cell col=\"1\" rowspan=\"3\" text=\"주야구분\"/><Cell col=\"2\" colspan=\"12\" text=\"창구\"/><Cell col=\"14\" colspan=\"12\" text=\"인터넷\"/><Cell col=\"26\" colspan=\"9\" text=\"총계\"/><Cell row=\"1\" col=\"2\" colspan=\"3\" text=\"지원자\"/><Cell row=\"1\" col=\"5\" colspan=\"3\" text=\"합격자\"/><Cell row=\"1\" col=\"8\" colspan=\"3\" text=\"등록자\"/><Cell row=\"1\" col=\"11\" colspan=\"3\" text=\"합계\"/><Cell row=\"1\" col=\"14\" colspan=\"3\" text=\"지원자\"/><Cell row=\"1\" col=\"17\" colspan=\"3\" text=\"합격자\"/><Cell row=\"1\" col=\"20\" colspan=\"3\" text=\"등록자\"/><Cell row=\"1\" col=\"23\" colspan=\"3\" text=\"합계\"/><Cell row=\"1\" col=\"26\" colspan=\"3\" text=\"지원자\"/><Cell row=\"1\" col=\"29\" colspan=\"3\" text=\"합격자\"/><Cell row=\"1\" col=\"32\" colspan=\"3\" text=\"등록자\"/><Cell row=\"2\" col=\"2\" text=\"남자\"/><Cell row=\"2\" col=\"3\" text=\"여자\"/><Cell row=\"2\" col=\"4\" text=\"전체\"/><Cell row=\"2\" col=\"5\" text=\"남자\"/><Cell row=\"2\" col=\"6\" text=\"여자\"/><Cell row=\"2\" col=\"7\" text=\"전체\"/><Cell row=\"2\" col=\"8\" text=\"남자\"/><Cell row=\"2\" col=\"9\" text=\"여자\"/><Cell row=\"2\" col=\"10\" text=\"전체\"/><Cell row=\"2\" col=\"11\" text=\"남자\"/><Cell row=\"2\" col=\"12\" text=\"여자\"/><Cell row=\"2\" col=\"13\" text=\"전체\"/><Cell row=\"2\" col=\"14\" text=\"남자\"/><Cell row=\"2\" col=\"15\" text=\"여자\"/><Cell row=\"2\" col=\"16\" text=\"전체\"/><Cell row=\"2\" col=\"17\" text=\"남자\"/><Cell row=\"2\" col=\"18\" text=\"여자\"/><Cell row=\"2\" col=\"19\" text=\"전체\"/><Cell row=\"2\" col=\"20\" text=\"남자\"/><Cell row=\"2\" col=\"21\" text=\"여자\"/><Cell row=\"2\" col=\"22\" text=\"전체\"/><Cell row=\"2\" col=\"23\" text=\"남자\"/><Cell row=\"2\" col=\"24\" text=\"여자\"/><Cell row=\"2\" col=\"25\" text=\"전체\"/><Cell row=\"2\" col=\"26\" text=\"남자\"/><Cell row=\"2\" col=\"27\" text=\"여자\"/><Cell row=\"2\" col=\"28\" text=\"전체\"/><Cell row=\"2\" col=\"29\" text=\"남자\"/><Cell row=\"2\" col=\"30\" text=\"여자\"/><Cell row=\"2\" col=\"31\" text=\"전체\"/><Cell row=\"2\" col=\"32\" text=\"남자\"/><Cell row=\"2\" col=\"33\" text=\"여자\"/><Cell row=\"2\" col=\"34\" text=\"전체\"/></Band><Band id=\"body\"><Cell text=\"bind:JIYEOK_NM\" suppress=\"1\" suppressalign=\"middle\" background=\"white\" color=\"black\"/><Cell col=\"1\" text=\"bind:JUYA_GBNM\"/><Cell col=\"2\" text=\"bind:TBL2_A_JIWON_M_CNT\" displaytype=\"number\"/><Cell col=\"3\" text=\"bind:TBL2_A_JIWON_W_CNT\" displaytype=\"number\"/><Cell col=\"4\" text=\"bind:JIWON_A_TOTAL\" displaytype=\"number\"/><Cell col=\"5\" text=\"bind:TBL2_B_HAPGYEOK_M_CNT\" displaytype=\"number\"/><Cell col=\"6\" text=\"bind:TBL2_B_HAPGYEOK_W_CNT\" displaytype=\"number\"/><Cell col=\"7\" text=\"bind:HAPGYEOK_A_TOTAL\" displaytype=\"number\"/><Cell col=\"8\" text=\"bind:TBL2_C_DEUNGROK_M_CNT\" displaytype=\"number\"/><Cell col=\"9\" text=\"bind:TBL2_C_DEUNGROK_W_CNT\" displaytype=\"number\"/><Cell col=\"10\" text=\"bind:DEUNGROK_A_TOTAL\" displaytype=\"number\"/><Cell col=\"11\" expr=\"expr:TBL2_A_JIWON_M_CNT+TBL2_B_HAPGYEOK_M_CNT+TBL2_C_DEUNGROK_M_CNT\" displaytype=\"number\"/><Cell col=\"12\" expr=\"expr:TBL2_A_JIWON_W_CNT+TBL2_B_HAPGYEOK_W_CNT+TBL2_C_DEUNGROK_W_CNT\" displaytype=\"number\"/><Cell col=\"13\" expr=\"expr:JIWON_A_TOTAL+HAPGYEOK_A_TOTAL+DEUNGROK_A_TOTAL\" displaytype=\"number\"/><Cell col=\"14\" text=\"bind:TBL3_A_JIWON_M_CNT\" displaytype=\"number\"/><Cell col=\"15\" text=\"bind:TBL3_A_JIWON_W_CNT\" displaytype=\"number\"/><Cell col=\"16\" text=\"bind:JIWON_B_TOTAL\" displaytype=\"number\"/><Cell col=\"17\" text=\"bind:TBL3_B_HAPGYEOK_M_CNT\" displaytype=\"number\"/><Cell col=\"18\" text=\"bind:TBL3_B_HAPGYEOK_W_CNT\" displaytype=\"number\"/><Cell col=\"19\" text=\"bind:HAPGYEOK_B_TOTAL\" displaytype=\"number\"/><Cell col=\"20\" text=\"bind:TBL3_C_DEUNGROK_M_CNT\" displaytype=\"number\"/><Cell col=\"21\" text=\"bind:TBL3_C_DEUNGROK_W_CNT\" displaytype=\"number\"/><Cell col=\"22\" text=\"bind:DEUNGROK_B_TOTAL\" displaytype=\"number\"/><Cell col=\"23\" expr=\"expr:TBL3_A_JIWON_M_CNT+TBL3_B_HAPGYEOK_M_CNT+TBL3_C_DEUNGROK_M_CNT\" displaytype=\"number\"/><Cell col=\"24\" expr=\"expr:TBL3_A_JIWON_W_CNT+TBL3_B_HAPGYEOK_W_CNT+TBL3_C_DEUNGROK_W_CNT\" displaytype=\"number\"/><Cell col=\"25\" expr=\"expr:JIWON_B_TOTAL+HAPGYEOK_B_TOTAL+DEUNGROK_B_TOTAL\" displaytype=\"number\"/><Cell col=\"26\" expr=\"expr:TBL2_A_JIWON_M_CNT+TBL3_A_JIWON_M_CNT\" displaytype=\"number\"/><Cell col=\"27\" expr=\"expr:TBL2_A_JIWON_W_CNT+TBL3_A_JIWON_W_CNT\" displaytype=\"number\"/><Cell col=\"28\" expr=\"expr:JIWON_A_TOTAL+JIWON_B_TOTAL\" displaytype=\"number\"/><Cell col=\"29\" expr=\"expr:TBL2_B_HAPGYEOK_M_CNT+TBL3_B_HAPGYEOK_M_CNT\" displaytype=\"number\"/><Cell col=\"30\" expr=\"expr:TBL2_B_HAPGYEOK_W_CNT+TBL3_B_HAPGYEOK_W_CNT\" displaytype=\"number\"/><Cell col=\"31\" expr=\"expr:HAPGYEOK_A_TOTAL+HAPGYEOK_B_TOTAL\" displaytype=\"number\"/><Cell col=\"32\" expr=\"expr:TBL2_C_DEUNGROK_M_CNT+TBL3_C_DEUNGROK_M_CNT\" displaytype=\"number\"/><Cell col=\"33\" expr=\"expr:TBL2_C_DEUNGROK_W_CNT+TBL3_C_DEUNGROK_W_CNT\" displaytype=\"number\"/><Cell col=\"34\" expr=\"expr:DEUNGROK_A_TOTAL+DEUNGROK_B_TOTAL\" displaytype=\"number\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"합  계 :\" textAlign=\"center\"/><Cell col=\"2\" expr=\"expr:dataset.getSum(&quot;TBL2_A_JIWON_M_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"3\" expr=\"expr:dataset.getSum(&quot;TBL2_A_JIWON_W_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"4\" expr=\"expr:dataset.getSum(&quot;JIWON_A_TOTAL&quot;)\" displaytype=\"number\"/><Cell col=\"5\" expr=\"expr:dataset.getSum(&quot;TBL2_B_HAPGYEOK_M_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"6\" expr=\"expr:dataset.getSum(&quot;TBL2_B_HAPGYEOK_W_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"7\" expr=\"expr:dataset.getSum(&quot;HAPGYEOK_A_TOTAL&quot;)\" displaytype=\"number\"/><Cell col=\"8\" expr=\"expr:dataset.getSum(&quot;TBL2_C_DEUNGROK_M_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"9\" expr=\"expr:dataset.getSum(&quot;TBL2_C_DEUNGROK_W_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"10\" expr=\"expr:dataset.getSum(&quot;DEUNGROK_A_TOTAL&quot;)\" displaytype=\"number\"/><Cell col=\"11\" expr=\"expr:dataset.getSum(&quot;TBL2_A_JIWON_M_CNT&quot;)+dataset.getSum(&quot;TBL2_B_HAPGYEOK_M_CNT&quot;)+dataset.getSum(&quot;TBL2_C_DEUNGROK_M_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"12\" expr=\"expr:dataset.getSum(&quot;TBL2_A_JIWON_W_CNT&quot;)+dataset.getSum(&quot;TBL2_B_HAPGYEOK_W_CNT&quot;)+dataset.getSum(&quot;TBL2_C_DEUNGROK_W_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"13\" expr=\"expr:dataset.getSum(&quot;JIWON_A_TOTAL&quot;)+dataset.getSum(&quot;HAPGYEOK_A_TOTAL&quot;)+dataset.getSum(&quot;DEUNGROK_A_TOTAL&quot;)\" displaytype=\"number\"/><Cell col=\"14\" expr=\"expr:dataset.getSum(&quot;TBL3_A_JIWON_M_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"15\" expr=\"expr:dataset.getSum(&quot;TBL3_A_JIWON_W_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"16\" expr=\"expr:dataset.getSum(&quot;JIWON_B_TOTAL&quot;)\" displaytype=\"number\"/><Cell col=\"17\" expr=\"expr:dataset.getSum(&quot;TBL3_B_HAPGYEOK_M_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"18\" expr=\"expr:dataset.getSum(&quot;TBL3_B_HAPGYEOK_W_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"19\" expr=\"expr:dataset.getSum(&quot;HAPGYEOK_B_TOTAL&quot;)\" displaytype=\"number\"/><Cell col=\"20\" expr=\"expr:dataset.getSum(&quot;TBL3_C_DEUNGROK_M_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"21\" expr=\"expr:dataset.getSum(&quot;TBL3_C_DEUNGROK_W_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"22\" expr=\"expr:dataset.getSum(&quot;DEUNGROK_B_TOTAL&quot;)\" displaytype=\"number\"/><Cell col=\"23\" expr=\"expr:dataset.getSum(&quot;TBL3_A_JIWON_M_CNT&quot;)+dataset.getSum(&quot;TBL3_B_HAPGYEOK_M_CNT&quot;)+dataset.getSum(&quot;TBL3_C_DEUNGROK_M_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"24\" expr=\"expr:dataset.getSum(&quot;TBL3_A_JIWON_W_CNT&quot;)+dataset.getSum(&quot;TBL3_B_HAPGYEOK_W_CNT&quot;)+dataset.getSum(&quot;TBL3_C_DEUNGROK_W_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"25\" expr=\"expr:dataset.getSum(&quot;JIWON_B_TOTAL&quot;)+dataset.getSum(&quot;HAPGYEOK_B_TOTAL&quot;)+dataset.getSum(&quot;DEUNGROK_B_TOTAL&quot;)\" displaytype=\"number\"/><Cell col=\"26\" expr=\"expr:dataset.getSum(&quot;TBL2_A_JIWON_M_CNT&quot;)+dataset.getSum(&quot;TBL3_A_JIWON_M_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"27\" expr=\"expr:dataset.getSum(&quot;TBL2_A_JIWON_W_CNT&quot;)+dataset.getSum(&quot;TBL3_A_JIWON_W_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"28\" expr=\"expr:dataset.getSum(&quot;JIWON_A_TOTAL&quot;)+dataset.getSum(&quot;JIWON_B_TOTAL&quot;)\" displaytype=\"number\"/><Cell col=\"29\" expr=\"expr:dataset.getSum(&quot;TBL2_B_HAPGYEOK_M_CNT&quot;)+dataset.getSum(&quot;TBL3_B_HAPGYEOK_M_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"30\" expr=\"expr:dataset.getSum(&quot;TBL2_B_HAPGYEOK_W_CNT&quot;)+dataset.getSum(&quot;TBL3_B_HAPGYEOK_W_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"31\" expr=\"expr:dataset.getSum(&quot;HAPGYEOK_A_TOTAL&quot;)+dataset.getSum(&quot;HAPGYEOK_B_TOTAL&quot;)\" displaytype=\"number\"/><Cell col=\"32\" expr=\"expr:dataset.getSum(&quot;TBL2_C_DEUNGROK_M_CNT&quot;)+dataset.getSum(&quot;TBL3_C_DEUNGROK_M_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"33\" expr=\"expr:dataset.getSum(&quot;TBL2_C_DEUNGROK_W_CNT&quot;)+dataset.getSum(&quot;TBL3_C_DEUNGROK_W_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"34\" expr=\"expr:dataset.getSum(&quot;DEUNGROK_A_TOTAL&quot;)+dataset.getSum(&quot;DEUNGROK_B_TOTAL&quot;)\" displaytype=\"number\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster3","0","77",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_visible("false");
            obj.set_binddataset("dsMaster3");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"162\"/><Column size=\"81\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"3\" text=\"지역\"/><Cell col=\"1\" rowspan=\"3\" text=\"주야구분\"/><Cell col=\"2\" colspan=\"12\" text=\"창구\"/><Cell col=\"14\" colspan=\"12\" text=\"인터넷\"/><Cell col=\"26\" colspan=\"9\" text=\"총계\"/><Cell row=\"1\" col=\"2\" colspan=\"3\" text=\"지원자\"/><Cell row=\"1\" col=\"5\" colspan=\"3\" text=\"합격자\"/><Cell row=\"1\" col=\"8\" colspan=\"3\" text=\"등록자\"/><Cell row=\"1\" col=\"11\" colspan=\"3\" text=\"합계\"/><Cell row=\"1\" col=\"14\" colspan=\"3\" text=\"지원자\"/><Cell row=\"1\" col=\"17\" colspan=\"3\" text=\"합격자\"/><Cell row=\"1\" col=\"20\" colspan=\"3\" text=\"등록자\"/><Cell row=\"1\" col=\"23\" colspan=\"3\" text=\"합계\"/><Cell row=\"1\" col=\"26\" colspan=\"3\" text=\"지원자\"/><Cell row=\"1\" col=\"29\" colspan=\"3\" text=\"합격자\"/><Cell row=\"1\" col=\"32\" colspan=\"3\" text=\"등록자\"/><Cell row=\"2\" col=\"2\" text=\"보건\"/><Cell row=\"2\" col=\"3\" text=\"비보건\"/><Cell row=\"2\" col=\"4\" text=\"전체\"/><Cell row=\"2\" col=\"5\" text=\"보건\"/><Cell row=\"2\" col=\"6\" text=\"비보건\"/><Cell row=\"2\" col=\"7\" text=\"전체\"/><Cell row=\"2\" col=\"8\" text=\"보건\"/><Cell row=\"2\" col=\"9\" text=\"비보건\"/><Cell row=\"2\" col=\"10\" text=\"전체\"/><Cell row=\"2\" col=\"11\" text=\"보건\"/><Cell row=\"2\" col=\"12\" text=\"비보건\"/><Cell row=\"2\" col=\"13\" text=\"전체\"/><Cell row=\"2\" col=\"14\" text=\"보건\"/><Cell row=\"2\" col=\"15\" text=\"비보건\"/><Cell row=\"2\" col=\"16\" text=\"전체\"/><Cell row=\"2\" col=\"17\" text=\"보건\"/><Cell row=\"2\" col=\"18\" text=\"비보건\"/><Cell row=\"2\" col=\"19\" text=\"전체\"/><Cell row=\"2\" col=\"20\" text=\"보건\"/><Cell row=\"2\" col=\"21\" text=\"비보건\"/><Cell row=\"2\" col=\"22\" text=\"전체\"/><Cell row=\"2\" col=\"23\" text=\"보건\"/><Cell row=\"2\" col=\"24\" text=\"비보건\"/><Cell row=\"2\" col=\"25\" text=\"전체\"/><Cell row=\"2\" col=\"26\" text=\"보건\"/><Cell row=\"2\" col=\"27\" text=\"비보건\"/><Cell row=\"2\" col=\"28\" text=\"전체\"/><Cell row=\"2\" col=\"29\" text=\"보건\"/><Cell row=\"2\" col=\"30\" text=\"비보건\"/><Cell row=\"2\" col=\"31\" text=\"전체\"/><Cell row=\"2\" col=\"32\" text=\"보건\"/><Cell row=\"2\" col=\"33\" text=\"비보건\"/><Cell row=\"2\" col=\"34\" text=\"전체\"/></Band><Band id=\"body\"><Cell text=\"bind:JIYEOK_NM\" suppress=\"1\" suppressalign=\"middle\" background=\" white\" color=\"black\"/><Cell col=\"1\" text=\"bind:JUYA_GBNM\"/><Cell col=\"2\" text=\"bind:TBL2_A_JIWON_BOGEON_CNT\" displaytype=\"number\"/><Cell col=\"3\" text=\"bind:TBL2_A_JIWON_NOTBOGEON_CNT\" displaytype=\"number\"/><Cell col=\"4\" text=\"bind:JIWON_A_TOTAL\" displaytype=\"number\"/><Cell col=\"5\" text=\"bind:TBL2_B_HAPGYEOK_BOGEON_CNT\" displaytype=\"number\"/><Cell col=\"6\" text=\"bind:TBL2_B_HAPGYEOK_NOTBOGEON_CNT\" displaytype=\"number\"/><Cell col=\"7\" text=\"bind:HAPGYEOK_A_TOTAL\" displaytype=\"number\"/><Cell col=\"8\" text=\"bind:TBL2_C_DEUNGROK_BOGEON_CNT\" displaytype=\"number\"/><Cell col=\"9\" text=\"bind:TBL2_C_DEUNGROK_NOTBOGEON_CNT\" displaytype=\"number\"/><Cell col=\"10\" text=\"bind:DEUNGROK_A_TOTAL\" displaytype=\"number\"/><Cell col=\"11\" expr=\"expr:TBL2_A_JIWON_BOGEON_CNT+TBL2_B_HAPGYEOK_BOGEON_CNT\" displaytype=\"number\"/><Cell col=\"12\" expr=\"expr:TBL2_A_JIWON_NOTBOGEON_CNT+TBL2_B_HAPGYEOK_NOTBOGEON_CNT\" displaytype=\"number\"/><Cell col=\"13\" expr=\"expr:JIWON_A_TOTAL+HAPGYEOK_A_TOTAL\" displaytype=\"number\"/><Cell col=\"14\" text=\"bind:TBL3_A_JIWON_BOGEON_CNT\" displaytype=\"number\"/><Cell col=\"15\" text=\"bind:TBL3_A_JIWON_NOTBOGEON_CNT\" displaytype=\"number\"/><Cell col=\"16\" text=\"bind:JIWON_B_TOTAL\" displaytype=\"number\"/><Cell col=\"17\" text=\"bind:TBL3_B_HAPGYEOK_BOGEON_CNT\" displaytype=\"number\"/><Cell col=\"18\" text=\"bind:TBL3_B_HAPGYEOK_NOTBOGEON_CNT\" displaytype=\"number\"/><Cell col=\"19\" text=\"bind:HAPGYEOK_B_TOTAL\" displaytype=\"number\"/><Cell col=\"20\" text=\"bind:TBL3_C_DEUNGROK_BOGEON_CNT\" displaytype=\"number\"/><Cell col=\"21\" text=\"bind:TBL3_C_DEUNGROK_NOTBOGEON_CNT\" displaytype=\"number\"/><Cell col=\"22\" text=\"bind:DEUNGROK_B_TOTAL\" displaytype=\"number\"/><Cell col=\"23\" expr=\"expr:TBL3_A_JIWON_BOGEON_CNT+TBL3_B_HAPGYEOK_BOGEON_CNT\" displaytype=\"number\"/><Cell col=\"24\" expr=\"expr:TBL3_A_JIWON_NOTBOGEON_CNT+TBL3_B_HAPGYEOK_NOTBOGEON_CNT\" displaytype=\"number\"/><Cell col=\"25\" expr=\"expr:JIWON_B_TOTAL+HAPGYEOK_B_TOTAL\" displaytype=\"number\"/><Cell col=\"26\" expr=\"expr:TBL2_A_JIWON_BOGEON_CNT+TBL3_A_JIWON_BOGEON_CNT\" displaytype=\"number\"/><Cell col=\"27\" expr=\"expr:TBL2_A_JIWON_NOTBOGEON_CNT+TBL3_A_JIWON_NOTBOGEON_CNT\" displaytype=\"number\"/><Cell col=\"28\" expr=\"expr:JIWON_A_TOTAL+JIWON_B_TOTAL\" displaytype=\"number\"/><Cell col=\"29\" expr=\"expr:TBL2_B_HAPGYEOK_BOGEON_CNT+TBL3_B_HAPGYEOK_BOGEON_CNT\" displaytype=\"number\"/><Cell col=\"30\" expr=\"expr:TBL2_B_HAPGYEOK_NOTBOGEON_CNT+TBL3_B_HAPGYEOK_NOTBOGEON_CNT\" displaytype=\"number\"/><Cell col=\"31\" expr=\"expr:HAPGYEOK_A_TOTAL+HAPGYEOK_B_TOTAL\" displaytype=\"number\"/><Cell col=\"32\" expr=\"expr:TBL2_C_DEUNGROK_BOGEON_CNT+TBL3_C_DEUNGROK_BOGEON_CNT\" displaytype=\"number\"/><Cell col=\"33\" expr=\"expr:TBL2_C_DEUNGROK_NOTBOGEON_CNT+TBL3_C_DEUNGROK_NOTBOGEON_CNT\" displaytype=\"number\"/><Cell col=\"34\" expr=\"expr:DEUNGROK_A_TOTAL+DEUNGROK_B_TOTAL\" displaytype=\"number\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" textAlign=\"center\" text=\"합  계 :\"/><Cell col=\"2\" expr=\"expr:dataset.getSum(&quot;TBL2_A_JIWON_BOGEON_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"3\" expr=\"expr:dataset.getSum(&quot;TBL2_A_JIWON_NOTBOGEON_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"4\" expr=\"expr:dataset.getSum(&quot;JIWON_A_TOTAL&quot;)\" displaytype=\"number\"/><Cell col=\"5\" expr=\"expr:dataset.getSum(&quot;TBL2_B_HAPGYEOK_BOGEON_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"6\" expr=\"expr:dataset.getSum(&quot;TBL2_B_HAPGYEOK_NOTBOGEON_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"7\" expr=\"expr:dataset.getSum(&quot;HAPGYEOK_A_TOTAL&quot;)\" displaytype=\"number\"/><Cell col=\"8\" expr=\"expr:dataset.getSum(&quot;TBL2_C_DEUNGROK_BOGEON_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"9\" expr=\"expr:dataset.getSum(&quot;TBL2_C_DEUNGROK_NOTBOGEON_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"10\" expr=\"expr:dataset.getSum(&quot;DEUNGROK_A_TOTAL&quot;)\" displaytype=\"number\"/><Cell col=\"11\" expr=\"expr:dataset.getSum(&quot;TBL2_A_JIWON_BOGEON_CNT&quot;)+dataset.getSum(&quot;TBL2_B_HAPGYEOK_BOGEON_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"12\" expr=\"expr:dataset.getSum(&quot;TBL2_A_JIWON_NOTBOGEON_CNT&quot;)+dataset.getSum(&quot;TBL2_B_HAPGYEOK_NOTBOGEON_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"13\" expr=\"expr:dataset.getSum(&quot;JIWON_A_TOTAL&quot;)+dataset.getSum(&quot;HAPGYEOK_A_TOTAL&quot;)\" displaytype=\"number\"/><Cell col=\"14\" expr=\"expr:dataset.getSum(&quot;TBL3_A_JIWON_BOGEON_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"15\" expr=\"expr:dataset.getSum(&quot;TBL3_A_JIWON_NOTBOGEON_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"16\" expr=\"expr:dataset.getSum(&quot;JIWON_B_TOTAL&quot;)\" displaytype=\"number\"/><Cell col=\"17\" expr=\"expr:dataset.getSum(&quot;TBL3_B_HAPGYEOK_BOGEON_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"18\" expr=\"expr:dataset.getSum(&quot;TBL3_B_HAPGYEOK_NOTBOGEON_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"19\" expr=\"expr:dataset.getSum(&quot;HAPGYEOK_B_TOTAL&quot;)\" displaytype=\"number\"/><Cell col=\"20\" expr=\"expr:dataset.getSum(&quot;TBL3_C_DEUNGROK_BOGEON_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"21\" expr=\"expr:dataset.getSum(&quot;TBL3_C_DEUNGROK_NOTBOGEON_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"22\" expr=\"expr:dataset.getSum(&quot;DEUNGROK_B_TOTAL&quot;)\" displaytype=\"number\"/><Cell col=\"23\" expr=\"expr:dataset.getSum(&quot;TBL3_A_JIWON_BOGEON_CNT&quot;)+dataset.getSum(&quot;TBL3_B_HAPGYEOK_BOGEON_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"24\" expr=\"expr:dataset.getSum(&quot;TBL3_A_JIWON_NOTBOGEON_CNT&quot;)+dataset.getSum(&quot;TBL3_B_HAPGYEOK_NOTBOGEON_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"25\" expr=\"expr:dataset.getSum(&quot;JIWON_B_TOTAL&quot;)+dataset.getSum(&quot;HAPGYEOK_B_TOTAL&quot;)\" displaytype=\"number\"/><Cell col=\"26\" expr=\"expr:dataset.getSum(&quot;TBL2_A_JIWON_BOGEON_CNT&quot;)+dataset.getSum(&quot;TBL3_A_JIWON_BOGEON_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"27\" expr=\"expr:dataset.getSum(&quot;TBL2_A_JIWON_NOTBOGEON_CNT&quot;)+dataset.getSum(&quot;TBL3_A_JIWON_NOTBOGEON_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"28\" expr=\"expr:dataset.getSum(&quot;JIWON_A_TOTAL&quot;)+dataset.getSum(&quot;JIWON_B_TOTAL&quot;)\" displaytype=\"number\"/><Cell col=\"29\" expr=\"expr:dataset.getSum(&quot;TBL2_B_HAPGYEOK_BOGEON_CNT&quot;)+dataset.getSum(&quot;TBL3_B_HAPGYEOK_BOGEON_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"30\" expr=\"expr:dataset.getSum(&quot;TBL2_B_HAPGYEOK_NOTBOGEON_CNT&quot;)+dataset.getSum(&quot;TBL3_B_HAPGYEOK_NOTBOGEON_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"31\" expr=\"expr:dataset.getSum(&quot;HAPGYEOK_A_TOTAL&quot;)+dataset.getSum(&quot;HAPGYEOK_B_TOTAL&quot;)\" displaytype=\"number\"/><Cell col=\"32\" expr=\"expr:dataset.getSum(&quot;TBL2_C_DEUNGROK_BOGEON_CNT&quot;)+dataset.getSum(&quot;TBL3_C_DEUNGROK_BOGEON_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"33\" expr=\"expr:dataset.getSum(&quot;TBL2_C_DEUNGROK_NOTBOGEON_CNT&quot;)+dataset.getSum(&quot;TBL3_C_DEUNGROK_NOTBOGEON_CNT&quot;)\" displaytype=\"number\"/><Cell col=\"34\" expr=\"expr:dataset.getSum(&quot;DEUNGROK_A_TOTAL&quot;)+dataset.getSum(&quot;DEUNGROK_B_TOTAL&quot;)\" displaytype=\"number\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt3","107","51",null,"24","1410",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("지역별통계");
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
        this.registerScript("EN08_1010805_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): EN08_1010805_M.xfdl(지역별통계)
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
            var strLgcd  = "00006|01056";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "T|T";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
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
            if(!this.fn_PreRet())
            {
                return false;
            }

        	if(this.divSearch.form.cboSearchTonggye.value == '0')
        	{
        		var strSvc      = "Ret1";
        		var strUrl      = "/prj/EN/EN08/Retrieve_1010805_M_1.do";
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
        	else if(this.divSearch.form.cboSearchTonggye.value == '1')
        	{
        		var strSvc      = "Ret2";
        		var strUrl      = "/prj/EN/EN08/Retrieve_1010805_M_2.do";
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
        	else if(this.divSearch.form.cboSearchTonggye.value == '2')
        	{
        		var strSvc      = "Ret3";
        		var strUrl      = "/prj/EN/EN08/Retrieve_1010805_M_3.do";
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
        };

        /**
         * 기능 : 조회 후 실행
         */
        this.fn_PostRet1 = function()
        {
            this.gfn_getRowCount(this.staRowCnt1,this.dsMaster1);
        };
        this.fn_PostRet2 = function()
        {
            this.gfn_getRowCount(this.staRowCnt2,this.dsMaster2);
        };
        this.fn_PostRet3 = function()
        {
            this.gfn_getRowCount(this.staRowCnt3,this.dsMaster3);
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

        	if(IPSI_YYYY == "" || IPSI_YYYY == null)
        	{
        		this.alert("입시년도를 입력해주세요.");
        		return false;
        	}

        	var param =   { IPSI_YYYY:IPSI_YYYY
        				  , MOJIP_GBCD:MOJIP_GBCD
        				  , JEONGWON_GBCD:JEONGWON_GBCD
        				  }

        	if(this.divSearch.form.cboSearchTonggye.value == '0')
        	{
        		this.gfn_commonUtils_report('EN08/EN08_1010805_M_01.crf',  param);
        	}
        	else if(this.divSearch.form.cboSearchTonggye.value == '1')
        	{
        		this.gfn_commonUtils_report('EN08/EN08_1010805_M_02.crf',  param);
        	}
        	else if(this.divSearch.form.cboSearchTonggye.value == '2')
        	{
        		this.gfn_commonUtils_report('EN08/EN08_1010805_M_03.crf',  param);
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

        // 통계구분 변경시
        this.divSearch_cboSearchTonggye_onitemchanged = function(obj,e)
        {
        	var tonggyeGbcd = this.divSearch.form.cboSearchTonggye.value;

        	if(tonggyeGbcd == 0)
        	{
        		this.grdMaster1.set_visible(true);
        		this.grdMaster2.set_visible(false);
        		this.grdMaster3.set_visible(false);
        		this.staRowCnt1.set_visible(true);
        		this.staRowCnt2.set_visible(false);
        		this.staRowCnt3.set_visible(false);
        	}
        	else if(tonggyeGbcd == 1)
        	{
        		this.grdMaster1.set_visible(false);
        		this.grdMaster2.set_visible(true);
        		this.grdMaster3.set_visible(false);
        		this.staRowCnt1.set_visible(false);
        		this.staRowCnt2.set_visible(true);
        		this.staRowCnt3.set_visible(false);
        	}
        	else if(tonggyeGbcd == 2)
        	{
        		this.grdMaster1.set_visible(false);
        		this.grdMaster2.set_visible(false);
        		this.grdMaster3.set_visible(true);
        		this.staRowCnt1.set_visible(false);
        		this.staRowCnt2.set_visible(false);
        		this.staRowCnt3.set_visible(true);
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
        	this.divSearch.form.cboSearchTonggye.set_index(0);
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
            this.divSearch.form.cboSearchTonggye.addEventHandler("onitemchanged",this.divSearch_cboSearchTonggye_onitemchanged,this);
            this.grdMaster1.addEventHandler("onheaddblclick",this.grdMaster1_onheaddblclick,this);
            this.grdMaster2.addEventHandler("onheaddblclick",this.grdMaster2_onheaddblclick,this);
            this.grdMaster3.addEventHandler("onheaddblclick",this.grdMaster3_onheaddblclick,this);
        };
        this.loadIncludeScript("EN08_1010805_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
