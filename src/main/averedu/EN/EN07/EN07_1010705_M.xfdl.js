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
            this.set_titletext("모집남녀지원현황");
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
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"SEBU_11\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SEBU_11_M\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SEBU_11_F\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SEBU_21\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SEBU_21_M\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SEBU_21_F\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SEBU_22\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SEBU_22_M\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SEBU_22_F\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SEBU_23\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SEBU_23_M\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SEBU_23_F\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SEBU_24\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SEBU_24_M\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SEBU_24_F\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEONGWON_HAP_NAE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIWON_HAP_NAE_M\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIWON_HAP_NAE_F\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SEBU_31\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SEBU_31_M\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SEBU_31_F\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SEBU_32\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SEBU_32_M\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SEBU_32_F\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SEBU_33\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SEBU_33_M\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SEBU_33_F\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SEBU_34\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SEBU_34_M\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SEBU_34_F\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SEBU_35\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SEBU_35_M\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SEBU_35_F\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SEBU_36\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SEBU_36_M\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SEBU_36_F\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEONGWON_HAP_OE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIWON_HAP_OE_M\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIWON_HAP_OE_F\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEONGWON_CHONG_HAP\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEONGWON_CHONG_HAP_M\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEONGWON_CHONG_HAP_F\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOTAL\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JEOPSU_FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"JEOPSU_TODT\" type=\"STRING\" size=\"256\"/><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gijunYyyy", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mojipGbcd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HYEONJAE_MOJIP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"JEOPSU_FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"JEOPSU_TODT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sebu", this);
            obj._setContents("<ColumnInfo><Column id=\"SEBUJEONHYEONG_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"SEBUJEONHYEONG_GBNM\" type=\"STRING\" size=\"65532\"/></ColumnInfo>");
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

            obj = new Static("stc_09_00","0","52",null,"22","1485",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("남녀 지원현황 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","147","51",null,"24","1370",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","69",null,"8","0",null,null,null,null,null,this);
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

            obj = new Static("stc_01_00","7","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
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
            obj.set_taborder("6");
            obj.set_text("모집구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchMojip","341","9","124","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_codecolumn("MOJIP_GBCD");
            obj.set_datacolumn("MOJIP_NM");
            obj.set_innerdataset("ds_mojipGbcd");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","37",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","90","0","10","37",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","331","0","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01","465","2","56","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_01","224","3","56","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01_00","16","31","1620","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_03_00_01","462","9","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("접수일자");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calSearchJeopsuFrDt","584","9","155","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("point");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00","748","9","16","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calSearchJeopsuToDt","776","9","155","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00","738","-3","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00","766","-3","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_01","574","-3","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Grid("grdMaster","0","77",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cellsizingtype("col");
            obj.set_binddataset("dsMaster");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"4\" text=\"모집&#13;&#10;학과\"/><Cell col=\"1\" rowspan=\"2\" colspan=\"3\" text=\"일반전형\"/><Cell col=\"4\" colspan=\"15\" text=\"정원 내\"/><Cell col=\"19\" colspan=\"21\" text=\"정원 외\"/><Cell col=\"40\" rowspan=\"2\" colspan=\"4\" text=\"총계\"/><Cell row=\"1\" col=\"4\" colspan=\"3\" text=\"일반고\"/><Cell row=\"1\" col=\"7\" colspan=\"3\" text=\"특성화고\"/><Cell row=\"1\" col=\"10\" colspan=\"3\" text=\"특기자\"/><Cell row=\"1\" col=\"13\" colspan=\"3\" text=\"대학자체기준\"/><Cell row=\"1\" col=\"16\" colspan=\"3\" text=\"소계\"/><Cell row=\"1\" col=\"19\" colspan=\"3\" text=\"농어촌 출신\"/><Cell row=\"1\" col=\"22\" colspan=\"3\" text=\"기초생활수급자 및 차상위\"/><Cell row=\"1\" col=\"25\" colspan=\"3\" text=\"만학도 및 성인재직자\"/><Cell row=\"1\" col=\"28\" colspan=\"3\" text=\"전문대이상 졸업자\"/><Cell row=\"1\" col=\"31\" colspan=\"3\" text=\"재외국민 및 외국인\"/><Cell row=\"1\" col=\"34\" colspan=\"3\" text=\"특수교육대상자\"/><Cell row=\"1\" col=\"37\" colspan=\"3\" text=\"소계\"/><Cell row=\"2\" col=\"1\" rowspan=\"2\" text=\"정원\"/><Cell row=\"2\" col=\"2\" colspan=\"2\" text=\"지원\"/><Cell row=\"2\" col=\"4\" rowspan=\"2\" text=\"정원\"/><Cell row=\"2\" col=\"5\" colspan=\"2\" text=\"지원\"/><Cell row=\"2\" col=\"7\" rowspan=\"2\" text=\"정원\"/><Cell row=\"2\" col=\"8\" colspan=\"2\" text=\"지원\"/><Cell row=\"2\" col=\"10\" rowspan=\"2\" text=\"정원\"/><Cell row=\"2\" col=\"11\" colspan=\"2\" text=\"지원\"/><Cell row=\"2\" col=\"13\" rowspan=\"2\" text=\"정원\"/><Cell row=\"2\" col=\"14\" colspan=\"2\" text=\"지원\"/><Cell row=\"2\" col=\"16\" rowspan=\"2\" text=\"정원\"/><Cell row=\"2\" col=\"17\" colspan=\"2\" text=\"지원\"/><Cell row=\"2\" col=\"19\" rowspan=\"2\" text=\"정원\"/><Cell row=\"2\" col=\"20\" colspan=\"2\" text=\"지원\"/><Cell row=\"2\" col=\"22\" rowspan=\"2\" text=\"정원\"/><Cell row=\"2\" col=\"23\" colspan=\"2\" text=\"지원\"/><Cell row=\"2\" col=\"25\" rowspan=\"2\" text=\"정원\"/><Cell row=\"2\" col=\"26\" colspan=\"2\" text=\"지원\"/><Cell row=\"2\" col=\"28\" rowspan=\"2\" text=\"정원\"/><Cell row=\"2\" col=\"29\" colspan=\"2\" text=\"지원\"/><Cell row=\"2\" col=\"31\" rowspan=\"2\" text=\"정원\"/><Cell row=\"2\" col=\"32\" colspan=\"2\" text=\"지원\"/><Cell row=\"2\" col=\"34\" rowspan=\"2\" text=\"정원\"/><Cell row=\"2\" col=\"35\" colspan=\"2\" text=\"지원\"/><Cell row=\"2\" col=\"37\" rowspan=\"2\" text=\"정원\"/><Cell row=\"2\" col=\"38\" colspan=\"2\" text=\"지원\"/><Cell row=\"2\" col=\"40\" rowspan=\"2\" text=\"정원\"/><Cell row=\"2\" col=\"41\" colspan=\"2\" text=\"지원\"/><Cell row=\"2\" col=\"43\" rowspan=\"2\" text=\"소계\"/><Cell row=\"3\" col=\"2\" text=\"남\"/><Cell row=\"3\" col=\"3\" text=\"여\"/><Cell row=\"3\" col=\"5\" text=\"남\"/><Cell row=\"3\" col=\"6\" text=\"여\"/><Cell row=\"3\" col=\"8\" text=\"남\"/><Cell row=\"3\" col=\"9\" text=\"여\"/><Cell row=\"3\" col=\"11\" text=\"남\"/><Cell row=\"3\" col=\"12\" text=\"여\"/><Cell row=\"3\" col=\"14\" text=\"남\"/><Cell row=\"3\" col=\"15\" text=\"여\"/><Cell row=\"3\" col=\"17\" text=\"남\"/><Cell row=\"3\" col=\"18\" text=\"여\"/><Cell row=\"3\" col=\"20\" text=\"남\"/><Cell row=\"3\" col=\"21\" text=\"여\"/><Cell row=\"3\" col=\"23\" text=\"남\"/><Cell row=\"3\" col=\"24\" text=\"여\"/><Cell row=\"3\" col=\"26\" text=\"남\"/><Cell row=\"3\" col=\"27\" text=\"여\"/><Cell row=\"3\" col=\"29\" text=\"남\"/><Cell row=\"3\" col=\"30\" text=\"여\"/><Cell row=\"3\" col=\"32\" text=\"남\"/><Cell row=\"3\" col=\"33\" text=\"여\"/><Cell row=\"3\" col=\"35\" text=\"남\"/><Cell row=\"3\" col=\"36\" text=\"여\"/><Cell row=\"3\" col=\"38\" text=\"남\"/><Cell row=\"3\" col=\"39\" text=\"여\"/><Cell row=\"3\" col=\"41\" text=\"남\"/><Cell row=\"3\" col=\"42\" text=\"여\"/></Band><Band id=\"body\"><Cell text=\"bind:HAKGWA_NM\"/><Cell col=\"1\" text=\"bind:SEBU_11\"/><Cell col=\"2\" text=\"bind:SEBU_11_M\"/><Cell col=\"3\" text=\"bind:SEBU_11_F\"/><Cell col=\"4\" text=\"bind:SEBU_21\"/><Cell col=\"5\" text=\"bind:SEBU_21_M\"/><Cell col=\"6\" text=\"bind:SEBU_21_F\"/><Cell col=\"7\" text=\"bind:SEBU_22\"/><Cell col=\"8\" text=\"bind:SEBU_22_M\"/><Cell col=\"9\" text=\"bind:SEBU_22_F\"/><Cell col=\"10\" text=\"bind:SEBU_23\"/><Cell col=\"11\" text=\"bind:SEBU_23_M\"/><Cell col=\"12\" text=\"bind:SEBU_23_F\"/><Cell col=\"13\" text=\"bind:SEBU_24\"/><Cell col=\"14\" text=\"bind:SEBU_24_M\"/><Cell col=\"15\" text=\"bind:SEBU_24_F\"/><Cell col=\"16\" text=\"bind:JEONGWON_HAP_NAE\"/><Cell col=\"17\" text=\"bind:JIWON_HAP_NAE_M\"/><Cell col=\"18\" text=\"bind:JIWON_HAP_NAE_F\"/><Cell col=\"19\" text=\"bind:SEBU_31\"/><Cell col=\"20\" text=\"bind:SEBU_31_M\"/><Cell col=\"21\" text=\"bind:SEBU_31_F\"/><Cell col=\"22\" text=\"bind:SEBU_32\"/><Cell col=\"23\" text=\"bind:SEBU_32_M\"/><Cell col=\"24\" text=\"bind:SEBU_32_F\"/><Cell col=\"25\" text=\"bind:SEBU_33\"/><Cell col=\"26\" text=\"bind:SEBU_33_M\"/><Cell col=\"27\" text=\"bind:SEBU_33_F\"/><Cell col=\"28\" text=\"bind:SEBU_34\"/><Cell col=\"29\" text=\"bind:SEBU_34_M\"/><Cell col=\"30\" text=\"bind:SEBU_34_F\"/><Cell col=\"31\" text=\"bind:SEBU_35\"/><Cell col=\"32\" text=\"bind:SEBU_35_M\"/><Cell col=\"33\" text=\"bind:SEBU_35_F\"/><Cell col=\"34\" text=\"bind:SEBU_36\"/><Cell col=\"35\" text=\"bind:SEBU_36_M\"/><Cell col=\"36\" text=\"bind:SEBU_36_F\"/><Cell col=\"37\" text=\"bind:JEONGWON_HAP_OE\"/><Cell col=\"38\" text=\"bind:JIWON_HAP_OE_M\"/><Cell col=\"39\" text=\"bind:JIWON_HAP_OE_F\"/><Cell col=\"40\" text=\"bind:JEONGWON_CHONG_HAP\"/><Cell col=\"41\" text=\"bind:JEONGWON_CHONG_HAP_M\"/><Cell col=\"42\" text=\"bind:JEONGWON_CHONG_HAP_F\"/><Cell col=\"43\" text=\"bind:TOTAL\"/></Band><Band id=\"summary\"><Cell text=\"합  계:\" textAlign=\"center\"/><Cell col=\"1\" expr=\"expr:dataset.getSum(&quot;SEBU_11&quot;)\"/><Cell col=\"2\" expr=\"expr:dataset.getSum(&quot;SEBU_11_M&quot;)\"/><Cell col=\"3\" expr=\"expr:dataset.getSum(&quot;SEBU_11_F&quot;)\"/><Cell col=\"4\" expr=\"expr:dataset.getSum(&quot;SEBU_21&quot;)\"/><Cell col=\"5\" expr=\"expr:dataset.getSum(&quot;SEBU_21_M&quot;)\"/><Cell col=\"6\" expr=\"expr:dataset.getSum(&quot;SEBU_21_F&quot;)\"/><Cell col=\"7\" expr=\"expr:dataset.getSum(&quot;SEBU_22&quot;)\"/><Cell col=\"8\" expr=\"expr:dataset.getSum(&quot;SEBU_22_M&quot;)\"/><Cell col=\"9\" expr=\"expr:dataset.getSum(&quot;SEBU_22_F&quot;)\"/><Cell col=\"10\" expr=\"expr:dataset.getSum(&quot;SEBU_23&quot;)\"/><Cell col=\"11\" expr=\"expr:dataset.getSum(&quot;SEBU_23_M&quot;)\"/><Cell col=\"12\" expr=\"expr:dataset.getSum(&quot;SEBU_23_F&quot;)\"/><Cell col=\"13\" expr=\"expr:dataset.getSum(&quot;SEBU_24&quot;)\"/><Cell col=\"14\" expr=\"expr:dataset.getSum(&quot;SEBU_24_M&quot;)\"/><Cell col=\"15\" expr=\"expr:dataset.getSum(&quot;SEBU_24_F&quot;)\"/><Cell col=\"16\" expr=\"expr:dataset.getSum(&quot;JEONGWON_HAP_NAE&quot;)\"/><Cell col=\"17\" expr=\"expr:dataset.getSum(&quot;JIWON_HAP_NAE_M&quot;)\"/><Cell col=\"18\" expr=\"expr:dataset.getSum(&quot;JIWON_HAP_NAE_F&quot;)\"/><Cell col=\"19\" expr=\"expr:dataset.getSum(&quot;SEBU_31&quot;)\"/><Cell col=\"20\" expr=\"expr:dataset.getSum(&quot;SEBU_31_M&quot;)\"/><Cell col=\"21\" expr=\"expr:dataset.getSum(&quot;SEBU_31_F&quot;)\"/><Cell col=\"22\" expr=\"expr:dataset.getSum(&quot;SEBU_32&quot;)\"/><Cell col=\"23\" expr=\"expr:dataset.getSum(&quot;SEBU_32_M&quot;)\"/><Cell col=\"24\" expr=\"expr:dataset.getSum(&quot;SEBU_32_F&quot;)\"/><Cell col=\"25\" expr=\"expr:dataset.getSum(&quot;SEBU_33&quot;)\"/><Cell col=\"26\" expr=\"expr:dataset.getSum(&quot;SEBU_33_M&quot;)\"/><Cell col=\"27\" expr=\"expr:dataset.getSum(&quot;SEBU_33_F&quot;)\"/><Cell col=\"28\" expr=\"expr:dataset.getSum(&quot;SEBU_34&quot;)\"/><Cell col=\"29\" expr=\"expr:dataset.getSum(&quot;SEBU_34_M&quot;)\"/><Cell col=\"30\" expr=\"expr:dataset.getSum(&quot;SEBU_34_F&quot;)\"/><Cell col=\"31\" expr=\"expr:dataset.getSum(&quot;SEBU_35&quot;)\"/><Cell col=\"32\" expr=\"expr:dataset.getSum(&quot;SEBU_35_M&quot;)\"/><Cell col=\"33\" expr=\"expr:dataset.getSum(&quot;SEBU_35_F&quot;)\"/><Cell col=\"34\" expr=\"expr:dataset.getSum(&quot;SEBU_36&quot;)\"/><Cell col=\"35\" expr=\"expr:dataset.getSum(&quot;SEBU_36_M&quot;)\"/><Cell col=\"36\" expr=\"expr:dataset.getSum(&quot;SEBU_36_F&quot;)\"/><Cell col=\"37\" expr=\"expr:dataset.getSum(&quot;JEONGWON_HAP_OE&quot;)\"/><Cell col=\"38\" expr=\"expr:dataset.getSum(&quot;JIWON_HAP_OE_M&quot;)\"/><Cell col=\"39\" expr=\"expr:dataset.getSum(&quot;JIWON_HAP_OE_F&quot;)\"/><Cell col=\"40\" expr=\"expr:dataset.getSum(&quot;JEONGWON_CHONG_HAP&quot;)\"/><Cell col=\"41\" expr=\"expr:dataset.getSum(&quot;JEONGWON_CHONG_HAP_M&quot;)\"/><Cell col=\"42\" expr=\"expr:dataset.getSum(&quot;JEONGWON_CHONG_HAP_F&quot;)\"/><Cell col=\"43\" expr=\"expr:dataset.getSum(&quot;TOTAL&quot;)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("모집남녀지원현황");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item13","divSearch.form.spnSearchYYYY","value","ds_input","IPSI_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divSearch.form.cboSearchMojip","value","ds_input","MOJIP_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.calSearchJeopsuFrDt","value","ds_input","JEOPSU_FRDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.calSearchJeopsuToDt","value","ds_input","JEOPSU_TODT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("EN07_1010705_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): EN07_1010705_M.xfdl(모집남녀지원현황)
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
        	this.fn_GijunYyyy();
        };

        /**********************************************************************
                04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
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
        			case "GigunYyyy":
                            this.fn_PostGigunYyyy();
                        break;
        			case "MojipGb":
                            this.fn_PostMojipGb();
                        break;
        			case "Sebu":
                            this.fn_PostSebu();
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
            // 조회조건 셋팅
        	var startDt = this.ds_input.getColumn(0, "JEOPSU_FRDT");
        	var endDt = this.ds_input.getColumn(0, "JEOPSU_TODT");

        	if(this.ds_input.getColumn(0, "IPSI_YYYY") == null || this.ds_input.getColumn(0, "IPSI_YYYY") == '')
        	{
        		this.alert("입시년도를 입력해주세요.");
        		return false;
        	}

        	if(startDt != '' && endDt == '')
        	{
        		this.ds_input.setColumn(0, "GUBUN", "0");
        	}
        	else if(startDt!="" && endDt!="")
        	{
        		if(startDt > endDt!="")
        		{
        			this.alert("접수일자를 확인해주세요.");
        			return false;
        		}
        		else
        		{
        			this.ds_input.setColumn(0, "GUBUN", "1");
        		}
        	}
        	else if(startDt == "" && endDt != "")
        	{
        		this.alert("접수일자를 확인해주세요.");
        		return false;
        	}
        	else if(startDt == "" && endDt == "")
        	{
        		this.alert("접수일자를 확인해주세요.");
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
            var strUrl      = "/prj/EN/EN07/Retrieve_1010705_M.do";
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
        	var JEOPSU_FRDT 			= this.ds_input.getColumn(0, "JEOPSU_FRDT");
        	var JEOPSU_TODT 			= this.ds_input.getColumn(0, "JEOPSU_TODT");
        	var GUBUN					= ''	// 0 : 일계, 1: 누계

        	if(IPSI_YYYY == "" || IPSI_YYYY == null)
        	{
        		this.alert("입시년도를 입력해주세요.");
        		return false;
        	}

        	if(JEOPSU_FRDT!='' && JEOPSU_TODT=='')
        	{
        		GUBUN = "0";
        	}
        	else if(JEOPSU_FRDT!="" && JEOPSU_TODT!="")
        	{
        		if(JEOPSU_FRDT > JEOPSU_TODT!="")
        		{
        			this.alert("접수일자를 확인해주세요.");
        			return false;
        		}
        		else
        		{
        			GUBUN = "1";
        		}
        	}
        	else if(JEOPSU_FRDT=="" && JEOPSU_TODT!="")
        	{
        		this.alert("접수일자를 확인해주세요.");
        		return false;
        	}
        	else if(JEOPSU_FRDT=="" && JEOPSU_TODT=="")
        	{
        		this.alert("접수일자를 확인해주세요.");
        		return false;
        	}

        	var param =   { IPSI_YYYY:IPSI_YYYY
        				  , MOJIP_GBCD:MOJIP_GBCD
        				  , JEOPSU_FRDT:JEOPSU_FRDT
        				  , JEOPSU_TODT:JEOPSU_TODT
        				  , GUBUN:GUBUN
        				  }

        	if(IPSI_YYYY < 2020)
        	{
        		this.gfn_commonUtils_report('EN07/EN07_1010705_M_01.crf',  param);
        	}
        	else
        	{
        		this.gfn_commonUtils_report('EN07/EN07_1010705_M_02.crf',  param);
        	}
        };

        /**********************************************************************
                08. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj,e)
        {
            this.gfn_gridSort(obj,e);
        };

        // 모집구분 변경시
        this.divSearch_cboSearchMojip_onitemchanged = function(obj,e)
        {
        	this.fn_Sebu();

        	var JEOPSU_FRDT = this.ds_mojipGbcd.getColumn(obj.index, "JEOPSU_FRDT");
        	var JEOPSU_TODT = this.ds_mojipGbcd.getColumn(obj.index, "JEOPSU_TODT");

        	this.ds_input.setColumn(0, "JEOPSU_FRDT", JEOPSU_FRDT);
        	this.ds_input.setColumn(0, "JEOPSU_TODT", JEOPSU_TODT);
        };

        // 컬럼사이즈 변경 함수
        this.fn_ChangeSize = function(gubun)
        {
        	// 정원내 소계
        	if(gubun = 1)
        	{
        		this.grdMaster.setFormatColProperty(16, "size",60);
        		this.grdMaster.setFormatColProperty(17, "size",60);
        		this.grdMaster.setFormatColProperty(18, "size",60);
        	}
        	// 정원외 소계
        	if(gubun = 2)
        	{
        		this.grdMaster.setFormatColProperty(37, "size",60);
        		this.grdMaster.setFormatColProperty(38, "size",60);
        		this.grdMaster.setFormatColProperty(39, "size",60);
        	}
        	// 총계
        	this.grdMaster.setFormatColProperty(40, "size",60);
        	this.grdMaster.setFormatColProperty(41, "size",60);
        	this.grdMaster.setFormatColProperty(42, "size",60);
        	this.grdMaster.setFormatColProperty(43, "size",60);
        };

        // 기간 체크 함수
        this.fn_CheckDt = function(Frdt,Todt,Contents)
        {
        	var result ;

        	var yearFr = Frdt.substr(0,4) ;
        	var monthFr = Frdt.substr(4,2);
        	var dayFr = Frdt.substr(6,2);

        	var dtFr = new Date(yearFr,monthFr,dayFr);

        	var yearTo =Todt.substr(0,4);
        	var monthTo =Todt.substr(4,2);
        	var dayTo =Todt.substr(6,2);

        	var dtTo = new Date(yearTo,monthTo,dayTo);

        	if(dtFr > dtTo)
        	{
        		this.alert(Contents + "을 확인하세요.");
        		result = -1;
        	}
        	else
        	{
        		result = 0;
        	}

        	return result;
        };

        // 접수시작일 validation 체크
        this.divSearch_calSearchJeopsuFrDt_onchanged = function(obj,e)
        {
        	//접수시작일,접수종료일자 가져오기
        	var JEOPSUFRDT = this.ds_input.getColumn(0, "JEOPSU_FRDT");
        	var JEOPSUTODT = this.ds_input.getColumn(0, "JEOPSU_TODT");

        	if(JEOPSUTODT != null && JEOPSUTODT != '')
        	{
        	    var result = this.fn_CheckDt(JEOPSUFRDT,JEOPSUTODT,'시작날짜');
        	    if(result == -1)
        		{
        			this.ds_input.setColumn(0, "JEOPSU_FRDT", "");
        	    }
        	}
        };

        //접수종료일 validation 체크
        this.divSearch_calSearchJeopsuToDt_onchanged = function(obj,e)
        {
        	//접수시작일,접수종료일자 가져오기
        	var JEOPSUFRDT = this.ds_input.getColumn(0, "JEOPSU_FRDT");
        	var JEOPSUTODT = this.ds_input.getColumn(0, "JEOPSU_TODT");

        	if(JEOPSUTODT != null && JEOPSUTODT != '')
        	{
        	    var result = this.fn_CheckDt(JEOPSUFRDT,JEOPSUTODT,'종료날짜');
        	    if(result == -1)
        		{
        			this.ds_input.setColumn(0, "JEOPSU_TODT", "");
        	    }
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
        	this.fn_MojipGb();
        }

        // 입시모집구분 가져오기
        this.fn_MojipGb = function()
        {
        	this.ds_mojipGbcd.deleteAll();
        	this.ds_sebu.deleteAll();

            var strSvc      = "MojipGb";
            var strUrl      = "prj/EN/EN_COM/Retrieve_IPSI_MOJIPGBCD.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "ds_mojipGbcd=ds_mojipGbcd";
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

        this.fn_PostMojipGb = function()
        {
        	this.ds_mojipGbcd.insertRow(0);
        	this.ds_mojipGbcd.setColumn(0, "MOJIP_GBCD", "");
        	this.ds_mojipGbcd.setColumn(0, "MOJIP_NM", "전체");
        	this.divSearch.form.cboSearchMojip.set_index(0);

        	this.fn_Sebu();
        }

        this.fn_Sebu = function()
        {
        	this.ds_sebu.deleteAll();

            var strSvc      = "Sebu";
            var strUrl      = "prj/EN/EN07/Retrieve_1010703_M_SEBU.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "ds_sebu=ds_sebu";
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

        this.fn_PostSebu = function()
        {
        	this.dsMaster.deleteAll();
        	this.gfn_getRowCount(this.staRowCnt,this.dsMaster);

        	for(var i = 1; i < 44; i++)
        	{
        		this.grdMaster.setFormatColProperty(i, "size",0);
        	}

        	for(var i = 0; i < this.ds_sebu.rowcount; i++)
        	{
        		var sebujeonhyeongGbnm = this.ds_sebu.getColumn(i, "SEBUJEONHYEONG_GBNM");

        		if(sebujeonhyeongGbnm == '일반전형')
        		{
        			// 공통 컬럼사이즈 변경
        			this.fn_ChangeSize(0);
        			// 전형별 컬럼사이즈
        			this.grdMaster.setFormatColProperty(1, "size",60);
        			this.grdMaster.setFormatColProperty(2, "size",60);
        			this.grdMaster.setFormatColProperty(3, "size",60);
        		}
        		else if(sebujeonhyeongGbnm == '일반고')
        		{
        			// 공통 컬럼사이즈 변경
        			this.fn_ChangeSize(1);
        			// 전형별 컬럼사이즈
        			this.grdMaster.setFormatColProperty(4, "size",60);
        			this.grdMaster.setFormatColProperty(5, "size",60);
        			this.grdMaster.setFormatColProperty(6, "size",60);
        		}
        		else if(sebujeonhyeongGbnm == '특성화고')
        		{
        			// 공통 컬럼사이즈 변경
        			this.fn_ChangeSize(1);
        			// 전형별 컬럼사이즈
        			this.grdMaster.setFormatColProperty(7, "size",60);
        			this.grdMaster.setFormatColProperty(8, "size",60);
        			this.grdMaster.setFormatColProperty(9, "size",60);
        		}
        		else if(sebujeonhyeongGbnm == '특기자')
        		{
        			// 공통 컬럼사이즈 변경
        			this.fn_ChangeSize(1);
        			// 전형별 컬럼사이즈
        			this.grdMaster.setFormatColProperty(10, "size",48);
        			this.grdMaster.setFormatColProperty(11, "size",48);
        			this.grdMaster.setFormatColProperty(12, "size",48);
        		}
        		else if(sebujeonhyeongGbnm == '대학자체기준')
        		{
        			// 공통 컬럼사이즈 변경
        			this.fn_ChangeSize(1);
        			// 전형별 컬럼사이즈
        			this.grdMaster.setFormatColProperty(13, "size",48);
        			this.grdMaster.setFormatColProperty(14, "size",48);
        			this.grdMaster.setFormatColProperty(15, "size",48);
        		}
        		else if(sebujeonhyeongGbnm == '농어촌 출신')
        		{
        			// 공통 컬럼사이즈 변경
        			this.fn_ChangeSize(2);
        			// 전형별 컬럼사이즈
        			this.grdMaster.setFormatColProperty(19, "size",60);
        			this.grdMaster.setFormatColProperty(20, "size",60);
        			this.grdMaster.setFormatColProperty(21, "size",60);
        		}
        		else if(sebujeonhyeongGbnm == '기초생활수급자 및 차상위')
        		{
        			// 공통 컬럼사이즈 변경
        			this.fn_ChangeSize(2);
        			// 전형별 컬럼사이즈
        			this.grdMaster.setFormatColProperty(22, "size",60);
        			this.grdMaster.setFormatColProperty(23, "size",60);
        			this.grdMaster.setFormatColProperty(24, "size",60);
        		}
        		else if(sebujeonhyeongGbnm == '만학도 및 성인재직자')
        		{
        			// 공통 컬럼사이즈 변경
        			this.fn_ChangeSize(2);
        			// 전형별 컬럼사이즈
        			this.grdMaster.setFormatColProperty(25, "size",60);
        			this.grdMaster.setFormatColProperty(26, "size",60);
        			this.grdMaster.setFormatColProperty(27, "size",60);
        		}
        		else if(sebujeonhyeongGbnm == '전문대이상 졸업자')
        		{
        			// 공통 컬럼사이즈 변경
        			this.fn_ChangeSize(2);
        			// 전형별 컬럼사이즈
        			this.grdMaster.setFormatColProperty(28, "size",60);
        			this.grdMaster.setFormatColProperty(29, "size",60);
        			this.grdMaster.setFormatColProperty(30, "size",60);
        		}
        		else if(sebujeonhyeongGbnm == '재외국민 및 외국인')
        		{
        			// 공통 컬럼사이즈 변경
        			this.fn_ChangeSize(2);
        			// 전형별 컬럼사이즈
        			this.grdMaster.setFormatColProperty(31, "size",60);
        			this.grdMaster.setFormatColProperty(32, "size",60);
        			this.grdMaster.setFormatColProperty(33, "size",60);
        		}
        		else if(sebujeonhyeongGbnm == '특수교육대상자')
        		{
        			// 공통 컬럼사이즈 변경
        			this.fn_ChangeSize(2);
        			// 전형별 컬럼사이즈
        			this.grdMaster.setFormatColProperty(34, "size",60);
        			this.grdMaster.setFormatColProperty(35, "size",60);
        			this.grdMaster.setFormatColProperty(36, "size",60);
        		}
        	}

        	if(this.ds_sebu.rowcount == 0)
        	{
        		for(var i = 1; i < 44; i ++)
        		{
        			this.grdMaster.setFormatColProperty(i, "size",60);
        		}
        	}
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

        this.divSearch_calSearchJeopsuFrDt_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"JEOPSU_FRDT",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_calSearchJeopsuToDt_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"JEOPSU_TODT",obj.value);
        		this.fn_Ret();
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onchanged",this.fn_MojipGb,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onkeydown",this.divSearch_spnSearchYYYY_onkeydown,this);
            this.divSearch.form.cboSearchMojip.addEventHandler("onkeydown",this.divSearch_cboSearchMojip_onkeydown,this);
            this.divSearch.form.cboSearchMojip.addEventHandler("onitemchanged",this.divSearch_cboSearchMojip_onitemchanged,this);
            this.divSearch.form.calSearchJeopsuFrDt.addEventHandler("onkeydown",this.divSearch_calSearchJeopsuFrDt_onkeydown,this);
            this.divSearch.form.calSearchJeopsuFrDt.addEventHandler("onchanged",this.divSearch_calSearchJeopsuFrDt_onchanged,this);
            this.divSearch.form.calSearchJeopsuToDt.addEventHandler("onkeydown",this.divSearch_calSearchJeopsuToDt_onkeydown,this);
            this.divSearch.form.calSearchJeopsuToDt.addEventHandler("onchanged",this.divSearch_calSearchJeopsuToDt_onchanged,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.dsMaster.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
        };
        this.loadIncludeScript("EN07_1010705_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
