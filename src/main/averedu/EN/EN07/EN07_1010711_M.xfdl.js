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
            this.set_titletext("전형료수납");
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
            obj._setContents("<ColumnInfo><Column id=\"TOT_NAPBU1_JINHAKSA_INWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOT_NAPBU1_JINHAKSA_GEUMAEK\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOT_NAPBU1_UWAY_INWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOT_NAPBU1_UWAY_GEUMAEK\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOT_NAPBU1_BANGMOON_INWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOT_NAPBU1_BANGMOON_GEUMAEK\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOT_NAPBU1_INWON_SUM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOT_NAPBU1_SUM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOT_NAPBU2_JINHAKSA_INWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOT_NAPBU2_JINHAKSA_GEUMAEK\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOT_NAPBU2_UWAY_INWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOT_NAPBU2_UWAY_GEUMAEK\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOT_NAPBU2_BANGMOON_INWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOT_NAPBU2_BANGMOON_GEUMAEK\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOT_NAPBU2_INWON_SUM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOT_NAPBU2_SUM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOT_MEONJAE_JINHAKSA_INWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOT_MEONJAE_JINHAKSA_GEUMAEK\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOT_MEONJAE_UWAY_INWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOT_MEONJAE_UWAY_GEUMAEK\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOT_MEONJAE_BANGMOON_INWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOT_MEONJAE_BANGMOON_GEUMAEK\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOT_MEONJAE_INWON_SUM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOT_MEONJAE_SUM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOT_JAEJIWON_JINHAKSA_INWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOT_JAEJIWON_JINHAKSA_GEUMAEK\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOT_JAEJIWON_UWAY_INWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOT_JAEJIWON_UWAY_GEUMAEK\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOT_JAEJIWON_BANGMOON_INWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOT_JAEJIWON_BANGMOON_GEUMAEK\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOT_JAEJIWON_INWON_SUM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOT_JAEJIWON_SUM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOT_SUSURYO_JINHAKSA_INWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOT_SUSURYO_JINHAKSA_GEUMAEK\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOT_SUSURYO_UWAY_INWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOT_SUSURYO_UWAY_GEUMAEK\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOT_SUSURYO_BANGMOON_INWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOT_SUSURYO_BANGMOON_GEUMAEK\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOT_SUSURYO_INWON_SUM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOT_SUSURYO_SUM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOT_JINHAKSA\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JINHAKSA_JEONHYEONGRYONAPBU_GEUMAEK\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOT_UWAY\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"UWAY_JEONHYEONGRYONAPBU_GEUMAEK\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOT_BANGMOON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BANGMOON_JEONHYEONGRYONAPBU_GEUMAEK\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOT_TOTAL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOTAL_JEONHYEONGRYONAPBU_GEUMAEK\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
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
            obj.set_text("전체 등록 현황 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","157","51",null,"24","1360",null,null,null,null,null,this);
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
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_binddataset("dsMaster");
            obj.set_autosizebandtype("allband");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"70\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"50\"/><Row size=\"50\"/><Row size=\"50\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"3\" text=\"접수처\"/><Cell col=\"1\" colspan=\"12\" text=\"총 누계\"/><Cell row=\"1\" col=\"1\" colspan=\"2\" text=\"납부1\"/><Cell row=\"1\" col=\"3\" colspan=\"2\" text=\"납부2\"/><Cell row=\"1\" col=\"5\" colspan=\"2\" text=\"면제\"/><Cell row=\"1\" col=\"7\" colspan=\"2\" text=\"재지원\"/><Cell row=\"1\" col=\"9\" colspan=\"2\" text=\"수수료\"/><Cell row=\"1\" col=\"11\" colspan=\"2\" text=\"합계\"/><Cell row=\"2\" col=\"1\" text=\"인원\"/><Cell row=\"2\" col=\"2\" text=\"금액(만원)\"/><Cell row=\"2\" col=\"3\" text=\"인원\"/><Cell row=\"2\" col=\"4\" text=\"금액(만원)\"/><Cell row=\"2\" col=\"5\" text=\"인원\"/><Cell row=\"2\" col=\"6\" text=\"금액(만원)\"/><Cell row=\"2\" col=\"7\" text=\"인원\"/><Cell row=\"2\" col=\"8\" text=\"금액(만원)\"/><Cell row=\"2\" col=\"9\" text=\"인원\"/><Cell row=\"2\" col=\"10\" text=\"금액(만원)\"/><Cell row=\"2\" col=\"11\" text=\"인원\"/><Cell row=\"2\" col=\"12\" text=\"금액(만원)\"/></Band><Band id=\"body\"><Cell text=\"진학사\"/><Cell col=\"1\" text=\"bind:TOT_NAPBU1_JINHAKSA_INWON\" displaytype=\"number\"/><Cell col=\"2\" text=\"bind:TOT_NAPBU1_JINHAKSA_GEUMAEK\" displaytype=\"number\"/><Cell col=\"3\" text=\"bind:TOT_NAPBU2_JINHAKSA_INWON\" displaytype=\"number\"/><Cell col=\"4\" text=\"bind:TOT_NAPBU2_JINHAKSA_GEUMAEK\" displaytype=\"number\"/><Cell col=\"5\" displaytype=\"number\" text=\"bind:TOT_MEONJAE_JINHAKSA_INWON\"/><Cell col=\"6\" displaytype=\"number\" text=\"bind:TOT_MEONJAE_JINHAKSA_GEUMAEK\"/><Cell col=\"7\" displaytype=\"number\" text=\"bind:TOT_JAEJIWON_JINHAKSA_INWON\"/><Cell col=\"8\" displaytype=\"number\" text=\"bind:TOT_JAEJIWON_JINHAKSA_GEUMAEK\"/><Cell col=\"9\" displaytype=\"number\" text=\"bind:TOT_SUSURYO_JINHAKSA_INWON\"/><Cell col=\"10\" displaytype=\"number\" text=\"bind:TOT_SUSURYO_JINHAKSA_GEUMAEK\"/><Cell col=\"11\" displaytype=\"number\" text=\"bind:TOT_JINHAKSA\"/><Cell col=\"12\" displaytype=\"number\" text=\"bind:JINHAKSA_JEONHYEONGRYONAPBU_GEUMAEK\"/><Cell row=\"1\" text=\"유웨이\"/><Cell row=\"1\" col=\"1\" text=\"bind:TOT_NAPBU1_UWAY_INWON\" displaytype=\"number\"/><Cell row=\"1\" col=\"2\" text=\"bind:TOT_NAPBU1_UWAY_GEUMAEK\" displaytype=\"number\"/><Cell row=\"1\" col=\"3\" text=\"bind:TOT_NAPBU2_UWAY_INWON\" displaytype=\"number\"/><Cell row=\"1\" col=\"4\" text=\"bind:TOT_NAPBU2_UWAY_GEUMAEK\" displaytype=\"number\"/><Cell row=\"1\" col=\"5\" displaytype=\"number\" text=\"bind:TOT_MEONJAE_UWAY_INWON\"/><Cell row=\"1\" col=\"6\" displaytype=\"number\" text=\"bind:TOT_MEONJAE_UWAY_GEUMAEK\"/><Cell row=\"1\" col=\"7\" displaytype=\"number\" text=\"bind:TOT_JAEJIWON_UWAY_INWON\"/><Cell row=\"1\" col=\"8\" displaytype=\"number\" text=\"bind:TOT_MEONJAE_UWAY_GEUMAEK\"/><Cell row=\"1\" col=\"9\" displaytype=\"number\" text=\"bind:TOT_SUSURYO_UWAY_INWON\"/><Cell row=\"1\" col=\"10\" displaytype=\"number\" text=\"bind:TOT_SUSURYO_UWAY_GEUMAEK\"/><Cell row=\"1\" col=\"11\" displaytype=\"number\" text=\"bind:TOT_UWAY\"/><Cell row=\"1\" col=\"12\" displaytype=\"number\" text=\"bind:UWAY_JEONHYEONGRYONAPBU_GEUMAEK\"/><Cell row=\"2\" text=\"창구접수\"/><Cell row=\"2\" col=\"1\" text=\"bind:TOT_NAPBU1_BANGMOON_INWON\" displaytype=\"number\"/><Cell row=\"2\" col=\"2\" text=\"bind:TOT_NAPBU1_BANGMOON_GEUMAEK\" displaytype=\"number\"/><Cell row=\"2\" col=\"3\" text=\"bind:TOT_NAPBU2_BANGMOON_INWON\" displaytype=\"number\"/><Cell row=\"2\" col=\"4\" text=\"bind:TOT_NAPBU2_BANGMOON_GEUMAEK\" displaytype=\"number\"/><Cell row=\"2\" col=\"5\" displaytype=\"number\" text=\"bind:TOT_MEONJAE_BANGMOON_INWON\"/><Cell row=\"2\" col=\"6\" displaytype=\"number\" text=\"bind:TOT_MEONJAE_BANGMOON_GEUMAEK\"/><Cell row=\"2\" col=\"7\" displaytype=\"number\" text=\"bind:TOT_JAEJIWON_BANGMOON_INWON\"/><Cell row=\"2\" col=\"8\" displaytype=\"number\" text=\"bind:TOT_JAEJIWON_BANGMOON_GEUMAEK\"/><Cell row=\"2\" col=\"9\" displaytype=\"number\" text=\"bind:TOT_SUSURYO_BANGMOON_INWON\"/><Cell row=\"2\" col=\"10\" displaytype=\"number\" text=\"bind:TOT_SUSURYO_BANGMOON_GEUMAEK\"/><Cell row=\"2\" col=\"11\" displaytype=\"number\" text=\"bind:TOT_BANGMOON\"/><Cell row=\"2\" col=\"12\" displaytype=\"number\" text=\"bind:BANGMOON_JEONHYEONGRYONAPBU_GEUMAEK\"/></Band><Band id=\"summary\"><Cell text=\"합   계:\"/><Cell col=\"1\" text=\"expr:dataset.getSum(&apos;TOT_NAPBU1_INWON_SUM&apos;)\"/><Cell col=\"2\" text=\"expr:dataset.getSum(&quot;TOT_NAPBU1_SUM&quot;)\"/><Cell col=\"3\" text=\"expr:dataset.getSum(&quot;TOT_NAPBU2_INWON_SUM&quot;)\"/><Cell col=\"4\" text=\"expr:dataset.getSum(&quot;TOT_NAPBU2_SUM&quot;)\"/><Cell col=\"5\" text=\"expr:dataset.getSum(&quot;TOT_MEONJAE_INWON_SUM&quot;)\"/><Cell col=\"6\" text=\"expr:dataset.getSum(&quot;TOT_MEONJAE_SUM&quot;)\"/><Cell col=\"7\" text=\"expr:dataset.getSum(&quot;TOT_JAEJIWON_INWON_SUM&quot;)\"/><Cell col=\"8\" text=\"expr:dataset.getSum(&quot;TOT_JAEJIWON_SUM&quot;)\"/><Cell col=\"9\" text=\"expr:dataset.getSum(&quot;TOT_SUSURYO_INWON_SUM&quot;)\"/><Cell col=\"10\" text=\"expr:dataset.getSum(&quot;TOT_SUSURYO_SUM&quot;)\"/><Cell col=\"11\" style=\"background:yellow;\" text=\"expr:dataset.getSum(&quot;TOT_TOTAL&quot;)\"/><Cell col=\"12\" style=\"background:yellow;\" text=\"expr:dataset.getSum(&quot;TOTAL_JEONHYEONGRYONAPBU_GEUMAEK&quot;)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("전형료수납");
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
        this.registerScript("EN07_1010711_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): EN07_1010711_M.xfdl(전형료수납)
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
            var strUrl      = "/prj/EN/EN07/Retrieve_1010711_M.do";
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

        	this.gfn_commonUtils_report('EN07/EN07_1010711_M_01.crf',  param);
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
        	var JEOPSU_FRDT = this.ds_mojipGbcd.getColumn(obj.index, "JEOPSU_FRDT");
        	var JEOPSU_TODT = this.ds_mojipGbcd.getColumn(obj.index, "JEOPSU_TODT");

        	this.ds_input.setColumn(0, "JEOPSU_FRDT", JEOPSU_FRDT);
        	this.ds_input.setColumn(0, "JEOPSU_TODT", JEOPSU_TODT);
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
        this.loadIncludeScript("EN07_1010711_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
