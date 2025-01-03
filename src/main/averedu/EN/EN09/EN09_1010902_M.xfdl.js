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
            this.set_titletext("전년도입시결과자료");
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
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"MOJIP_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"IPHAK_JEONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JU_CNT_21\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"YA_CNT_21\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JU_CNT_22\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"YA_CNT_22\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JU_CNT_23\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"YA_CNT_23\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JU_CNT_31\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"YA_CNT_31\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JU_CNT_32\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"YA_CNT_32\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JU_CNT_33\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"YA_CNT_33\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JU_CNT_34\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"YA_CNT_34\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JU_CNT_35\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"YA_CNT_35\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"NAE_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"OE_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JU_AVG_21\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"YA_AVG_21\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JU_AVG_22\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"YA_AVG_22\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JU_AVG_23\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"YA_AVG_23\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JU_AVG_31\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"YA_AVG_31\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JU_AVG_32\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"YA_AVG_32\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JU_AVG_33\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"YA_AVG_33\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JU_AVG_34\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"YA_AVG_34\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JU_AVG_35\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"YA_AVG_35\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"NAE_AVG\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"OE_AVG\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JU_MIN_21\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"YA_MIN_21\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JU_MIN_22\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"YA_MIN_22\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JU_MIN_23\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"YA_MIN_23\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JU_MIN_31\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"YA_MIN_31\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JU_MIN_32\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"YA_MIN_32\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JU_MIN_33\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"YA_MIN_33\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JU_MIN_34\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"YA_MIN_34\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JU_MIN_35\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"YA_MIN_35\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"NAE_MIN\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"OE_MIN\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gijunYyyy", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMojip", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"CODE_NM\">전체</Col></Row><Row><Col id=\"CODE\">12</Col><Col id=\"CODE_NM\">수시 전체</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">수시 1차</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"CODE_NM\">수시 2차</Col></Row><Row><Col id=\"CODE\">34</Col><Col id=\"CODE_NM\">정시 전체</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"CODE_NM\">정시 1차</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"CODE_NM\">정시 2차</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgwa", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","500","42","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
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
            obj.set_taborder("3");
            obj.set_text("전년도입시결과 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","167","51",null,"24","1350",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","69","320","8",null,null,null,null,null,null,this);
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

            obj = new Div("divSearch","0","0",null,"42","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","16","0","1620","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
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

            obj = new Combo("cboSearchHakgwa","556","9","194","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsHakgwa");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00","465","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("학과");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00","7","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
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
            obj.set_taborder("7");
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

            obj = new Static("Static01_02_00","0","0","27","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","90","0","10","37",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","331","0","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01","465","2","56","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","546","0","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_01","224","3","56","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Grid("grdMaster","0","77",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsMaster");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"85\"/><Column size=\"140\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"4\" text=\"모집시기\"/><Cell col=\"1\" rowspan=\"4\" text=\"대분류(계열)\"/><Cell col=\"2\" rowspan=\"4\" text=\"중분류\"/><Cell col=\"3\" rowspan=\"4\" text=\"소분류\"/><Cell col=\"4\" rowspan=\"4\" text=\"모집단위(학과)\"/><Cell col=\"5\" rowspan=\"4\" text=\"입학정원\"/><Cell col=\"6\" colspan=\"21\" text=\"정원내\"/><Cell col=\"27\" colspan=\"33\" text=\"정원외\"/><Cell row=\"1\" col=\"6\" colspan=\"6\" text=\"일반과정(일반고)\"/><Cell row=\"1\" col=\"12\" colspan=\"6\" text=\"전문과정(특성화고)\"/><Cell row=\"1\" col=\"18\" colspan=\"6\" text=\"특기자\"/><Cell row=\"1\" col=\"24\" colspan=\"3\" text=\"소계\"/><Cell row=\"1\" col=\"27\" colspan=\"6\" text=\"농어촌\"/><Cell row=\"1\" col=\"33\" colspan=\"6\" text=\"기초생활수급자 및 차상위계층\"/><Cell row=\"1\" col=\"39\" colspan=\"6\" text=\"만학도 및 성인재직자\"/><Cell row=\"1\" col=\"45\" colspan=\"6\" text=\"전문대이상 졸업\"/><Cell row=\"1\" col=\"51\" colspan=\"6\" text=\"재외국민 및 외국인\"/><Cell row=\"1\" col=\"57\" colspan=\"3\" text=\"소계\"/><Cell row=\"2\" col=\"6\" colspan=\"2\" text=\"경쟁률\"/><Cell row=\"2\" col=\"8\" colspan=\"2\" text=\"합격자 최저점\"/><Cell row=\"2\" col=\"10\" colspan=\"2\" text=\"합격자 평균\"/><Cell row=\"2\" col=\"12\" colspan=\"2\" text=\"경쟁률\"/><Cell row=\"2\" col=\"14\" colspan=\"2\" text=\"합격자 최저점\"/><Cell row=\"2\" col=\"16\" colspan=\"2\" text=\"합격자 평균\"/><Cell row=\"2\" col=\"18\" colspan=\"2\" text=\"경쟁률\"/><Cell row=\"2\" col=\"20\" colspan=\"2\" text=\"합격자 최저점\"/><Cell row=\"2\" col=\"22\" colspan=\"2\" text=\"합격자 평균\"/><Cell row=\"2\" col=\"24\" rowspan=\"2\" text=\"경쟁률\"/><Cell row=\"2\" col=\"25\" rowspan=\"2\" text=\"합격자&#13;&#10;최저점\"/><Cell row=\"2\" col=\"26\" rowspan=\"2\" text=\"합격자&#13;&#10;평균\"/><Cell row=\"2\" col=\"27\" colspan=\"2\" text=\"경쟁률\"/><Cell row=\"2\" col=\"29\" colspan=\"2\" text=\"합격자 최저점\"/><Cell row=\"2\" col=\"31\" colspan=\"2\" text=\"합격자 평균\"/><Cell row=\"2\" col=\"33\" colspan=\"2\" text=\"경쟁률\"/><Cell row=\"2\" col=\"35\" colspan=\"2\" text=\"합격자 최저점\"/><Cell row=\"2\" col=\"37\" colspan=\"2\" text=\"합격자 평균\"/><Cell row=\"2\" col=\"39\" colspan=\"2\" text=\"경쟁률\"/><Cell row=\"2\" col=\"41\" colspan=\"2\" text=\"합격자 최저점\"/><Cell row=\"2\" col=\"43\" colspan=\"2\" text=\"합격자 평균\"/><Cell row=\"2\" col=\"45\" colspan=\"2\" text=\"경쟁률\"/><Cell row=\"2\" col=\"47\" colspan=\"2\" text=\"합격자 최저점\"/><Cell row=\"2\" col=\"49\" colspan=\"2\" text=\"합격자 평균\"/><Cell row=\"2\" col=\"51\" colspan=\"2\" text=\"경쟁률\"/><Cell row=\"2\" col=\"53\" colspan=\"2\" text=\"합격자 최저점\"/><Cell row=\"2\" col=\"55\" colspan=\"2\" text=\"합격자 평균\"/><Cell row=\"2\" col=\"57\" rowspan=\"2\" text=\"경쟁률\"/><Cell row=\"2\" col=\"58\" rowspan=\"2\" text=\"합격자&#13;&#10;최저점\"/><Cell row=\"2\" col=\"59\" rowspan=\"2\" text=\"합격자&#13;&#10;평균\"/><Cell row=\"3\" col=\"6\" text=\"주\"/><Cell row=\"3\" col=\"7\" text=\"야\"/><Cell row=\"3\" col=\"8\" text=\"주간\"/><Cell row=\"3\" col=\"9\" text=\"야간\"/><Cell row=\"3\" col=\"10\" text=\"주간\"/><Cell row=\"3\" col=\"11\" text=\"야간\"/><Cell row=\"3\" col=\"12\" text=\"주\"/><Cell row=\"3\" col=\"13\" text=\"야\"/><Cell row=\"3\" col=\"14\" text=\"주간\"/><Cell row=\"3\" col=\"15\" text=\"야간\"/><Cell row=\"3\" col=\"16\" text=\"주간\"/><Cell row=\"3\" col=\"17\" text=\"야간\"/><Cell row=\"3\" col=\"18\" text=\"주\"/><Cell row=\"3\" col=\"19\" text=\"야\"/><Cell row=\"3\" col=\"20\" text=\"주간\"/><Cell row=\"3\" col=\"21\" text=\"야간\"/><Cell row=\"3\" col=\"22\" text=\"주간\"/><Cell row=\"3\" col=\"23\" text=\"야간\"/><Cell row=\"3\" col=\"27\" text=\"주\"/><Cell row=\"3\" col=\"28\" text=\"야\"/><Cell row=\"3\" col=\"29\" text=\"주간\"/><Cell row=\"3\" col=\"30\" text=\"야간\"/><Cell row=\"3\" col=\"31\" text=\"주간\"/><Cell row=\"3\" col=\"32\" text=\"야간\"/><Cell row=\"3\" col=\"33\" text=\"주\"/><Cell row=\"3\" col=\"34\" text=\"야\"/><Cell row=\"3\" col=\"35\" text=\"주간\"/><Cell row=\"3\" col=\"36\" text=\"야간\"/><Cell row=\"3\" col=\"37\" text=\"주간\"/><Cell row=\"3\" col=\"38\" text=\"야간\"/><Cell row=\"3\" col=\"39\" text=\"주\"/><Cell row=\"3\" col=\"40\" text=\"야\"/><Cell row=\"3\" col=\"41\" text=\"주간\"/><Cell row=\"3\" col=\"42\" text=\"야간\"/><Cell row=\"3\" col=\"43\" text=\"주간\"/><Cell row=\"3\" col=\"44\" text=\"야간\"/><Cell row=\"3\" col=\"45\" text=\"주\"/><Cell row=\"3\" col=\"46\" text=\"야\"/><Cell row=\"3\" col=\"47\" text=\"주간\"/><Cell row=\"3\" col=\"48\" text=\"야간\"/><Cell row=\"3\" col=\"49\" text=\"주간\"/><Cell row=\"3\" col=\"50\" text=\"야간\"/><Cell row=\"3\" col=\"51\" text=\"주\"/><Cell row=\"3\" col=\"52\" text=\"야\"/><Cell row=\"3\" col=\"53\" text=\"주간\"/><Cell row=\"3\" col=\"54\" text=\"야간\"/><Cell row=\"3\" col=\"55\" text=\"주간\"/><Cell row=\"3\" col=\"56\" text=\"야간\"/></Band><Band id=\"body\"><Cell text=\"bind:MOJIP_NM\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\" text=\"bind:HAKGWA_NM\"/><Cell col=\"5\" text=\"bind:IPHAK_JEONGWON\"/><Cell col=\"6\" text=\"bind:JU_CNT_21\"/><Cell col=\"7\" text=\"bind:YA_CNT_21\"/><Cell col=\"8\" text=\"bind:JU_MIN_21\"/><Cell col=\"9\" text=\"bind:YA_MIN_21\"/><Cell col=\"10\" text=\"bind:JU_AVG_21\"/><Cell col=\"11\" text=\"bind:YA_AVG_21\"/><Cell col=\"12\" text=\"bind:JU_CNT_22\"/><Cell col=\"13\" text=\"bind:YA_CNT_22\"/><Cell col=\"14\" text=\"bind:JU_MIN_22\"/><Cell col=\"15\" text=\"bind:YA_MIN_22\"/><Cell col=\"16\" text=\"bind:JU_AVG_22\"/><Cell col=\"17\" text=\"bind:YA_AVG_22\"/><Cell col=\"18\" text=\"bind:JU_CNT_23\"/><Cell col=\"19\" text=\"bind:YA_CNT_23\"/><Cell col=\"20\" text=\"bind:JU_MIN_23\"/><Cell col=\"21\" text=\"bind:YA_MIN_23\"/><Cell col=\"22\" text=\"bind:JU_AVG_23\"/><Cell col=\"23\" text=\"bind:YA_AVG_23\"/><Cell col=\"24\" text=\"bind:NAE_CNT\"/><Cell col=\"25\" text=\"bind:NAE_MIN\"/><Cell col=\"26\" text=\"bind:NAE_AVG\"/><Cell col=\"27\" text=\"bind:JU_CNT_31\"/><Cell col=\"28\" text=\"bind:YA_CNT_31\"/><Cell col=\"29\" text=\"bind:JU_MIN_31\"/><Cell col=\"30\" text=\"bind:YA_MIN_31\"/><Cell col=\"31\" text=\"bind:JU_AVG_31\"/><Cell col=\"32\" text=\"bind:YA_AVG_31\"/><Cell col=\"33\" text=\"bind:JU_CNT_32\"/><Cell col=\"34\" text=\"bind:YA_CNT_32\"/><Cell col=\"35\" text=\"bind:JU_MIN_32\"/><Cell col=\"36\" text=\"bind:YA_MIN_32\"/><Cell col=\"37\" text=\"bind:JU_AVG_32\"/><Cell col=\"38\" text=\"bind:YA_AVG_32\"/><Cell col=\"39\" text=\"bind:JU_CNT_33\"/><Cell col=\"40\" text=\"bind:YA_CNT_33\"/><Cell col=\"41\" text=\"bind:JU_MIN_33\"/><Cell col=\"42\" text=\"bind:YA_MIN_33\"/><Cell col=\"43\" text=\"bind:JU_AVG_33\"/><Cell col=\"44\" text=\"bind:YA_AVG_33\"/><Cell col=\"45\" text=\"bind:JU_CNT_34\"/><Cell col=\"46\" text=\"bind:YA_CNT_34\"/><Cell col=\"47\" text=\"bind:JU_MIN_34\"/><Cell col=\"48\" text=\"bind:YA_MIN_34\"/><Cell col=\"49\" text=\"bind:JU_AVG_34\"/><Cell col=\"50\" text=\"bind:YA_AVG_34\"/><Cell col=\"51\" text=\"bind:JU_MIN_35\"/><Cell col=\"52\" text=\"bind:YA_CNT_35\"/><Cell col=\"53\" text=\"bind:JU_MIN_35\"/><Cell col=\"54\" text=\"bind:YA_MIN_35\"/><Cell col=\"55\" text=\"bind:JU_AVG_35\"/><Cell col=\"56\" text=\"bind:YA_AVG_35\"/><Cell col=\"57\" text=\"bind:OE_CNT\"/><Cell col=\"58\" text=\"bind:OE_MIN\"/><Cell col=\"59\" text=\"bind:OE_AVG\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("전년도입시결과자료");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.cboSearchHakgwa","value","ds_input","HAKGWA_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.spnSearchYYYY","value","ds_input","IPSI_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboSearchMojip","value","ds_input","MOJIP_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("EN09_1010902_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): EN09_1010902_M.xfdl(전년도입시결과자료)
        * 작 성         일 명: 백재인
        * 작 성         일 자: 2021/06/29
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
            var strDs    = "dsHakgwa|dsMojip";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "01029|01056";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
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

        this.fn_PostInit = function()
        {
        	for(var i=0; i<this.dsMojip.rowcount; i++)
        	{
        		if(this.dsMojip.getColumn(i, "CODE") == "5")
        		{
        			this.dsMojip.deleteRow(i);
        		}
        	}
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
                            this.fn_PostInit();
                        break;
        			case "GigunYyyy":
                            this.fn_PostGigunYyyy();
                        break;
                    case "Ret":
                            this.fn_PostRet();
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
            var strSvc      = "Ret";
            var strUrl      = "/prj/EN/EN09/Retrieve_1010902_M.do";
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
                06. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj,e)
        {
            this.gfn_gridSort(obj,e);
        };

        /**********************************************************************
                07. 공통함수
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
        }

        /**********************************************************************
                08. 검색창 엔터키 조회
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

        this.divSearch_cboSearchHakgwa_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"HAKGWA_CD",obj.value);
        		this.fn_Ret();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onkeydown",this.divSearch_cboSearchHakgwa_onkeydown,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onkeydown",this.divSearch_spnSearchYYYY_onkeydown,this);
            this.divSearch.form.cboSearchMojip.addEventHandler("onkeydown",this.divSearch_cboSearchMojip_onkeydown,this);
            this.divSearch.form.cboSearchMojip.addEventHandler("onitemchanged",this.divSearch_cboSearchMojip_onitemchanged,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.dsMaster.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
        };
        this.loadIncludeScript("EN09_1010902_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
