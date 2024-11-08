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
            this.set_titletext("편입학설정");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_Hakgwa", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Juya", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"PYEONIP_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"PYEONIP_MOJIP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"PYEONIP_MOJIP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JUYA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PYEONIP_HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"YEOSEOK_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHASUIGWAN_YEOSEOK_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"MYEONJEOP_YN\" type=\"STRING\" size=\"2\"/><Column id=\"SILGI_YN\" type=\"STRING\" size=\"2\"/><Column id=\"MYEONJEOP_DT\" type=\"STRING\" size=\"8\"/><Column id=\"SILGI_DT\" type=\"STRING\" size=\"8\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PYEONIP_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONNYEONDO_PYEONIP_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"PYEONIP_MOJIP_GBCD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pyeonipMojip", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PYEONIP_MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"PYEONIP_MOJIP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HYEONJAE_MOJIP_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMojipGbcd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHaknyeon", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gijunYyyy", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"42","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01","7","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("편입년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnPyeonipYyyy","85","9","101","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_cssclass("point");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01","186","1","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","288","1","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_02_00","221","10","70","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("모집구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboPyeonipMojip","298","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_pyeonipMojip");
            obj.set_codecolumn("PYEONIP_MOJIP_GBCD");
            obj.set_datacolumn("PYEONIP_MOJIP_NM");
            obj.set_cssclass("point");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_01","0","0","450","9",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new Static("Static01_01_01_00","0","31","450","9",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new Static("Static01_02_00_00_00_00","75","1","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_09_00","0","47","155","32",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("편입학과");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","77","47","123","34",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","0","77",null,null,"0","118",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"상태\"/><Cell col=\"1\" text=\"학과코드\"/><Cell col=\"2\" text=\"학과명\"/><Cell col=\"3\" text=\"주야구분\"/><Cell col=\"4\" text=\"학년\"/><Cell col=\"5\" text=\"여석수\"/><Cell col=\"6\" text=\"차수이관여석\"/><Cell col=\"7\" text=\"면접여부\"/><Cell col=\"8\" text=\"면접일자\"/><Cell col=\"9\" text=\"실기여부\"/><Cell col=\"10\" text=\"실기일자\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:HAKGWA_CD\"/><Cell col=\"2\" text=\"bind:HAKGWA_NM\"/><Cell col=\"3\" text=\"bind:JUYA_NM\"/><Cell col=\"4\" text=\"bind:PYEONIP_HAKNYEON\"/><Cell col=\"5\" text=\"bind:YEOSEOK_CNT\"/><Cell col=\"6\" text=\"bind:CHASUIGWAN_YEOSEOK_CNT\"/><Cell col=\"7\" text=\"bind:MYEONJEOP_YN\" displaytype=\"combotext\" combodataset=\"dsYn\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"8\" text=\"bind:MYEONJEOP_DT\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"9\" text=\"bind:SILGI_YN\" combodataset=\"dsYn\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" displaytype=\"combotext\"/><Cell col=\"10\" text=\"bind:SILGI_DT\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","500","42","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","500","682","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","0",null,"155","22",null,"86",null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("편입학과 상세");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06","0",null,"1423","28",null,"55",null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00","0",null,"1423","28",null,"28",null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06","0",null,"150","28",null,"55",null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("편입년도");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00","277",null,"150","28",null,"55",null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("모집구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Spin("spnPyeonipYyyy","154",null,"119","22",null,"58",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_cssclass("point");
            obj.set_min("0");
            obj.set_max("9999");
            obj.set_value("");
            this.addChild(obj.name, obj);

            obj = new Combo("cboMojipGbcd","431",null,"119","22",null,"58",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_innerdataset("dsMojipGbcd");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_readonly("true");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00","554",null,"150","28",null,"55",null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("학과명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00","870",null,"150","28",null,"55",null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("주야구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSearchSeunginSangtae","1023",null,"119","22",null,"58",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_Juya");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_cssclass("point");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cboHakgwa","707",null,"159","22",null,"58",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_Hakgwa");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_cssclass("point");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00_00","1146",null,"150","28",null,"55",null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("학년");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboPyeonipHaknyeon","1300",null,"119","22",null,"58",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_innerdataset("dsHaknyeon");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_readonly("true");
            obj.set_cssclass("point");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01","0",null,"150","28",null,"28",null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("여석");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_01","277",null,"150","28",null,"28",null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("차수이관여석");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtYeoseokCnt","153",null,"120","22",null,"31",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_maxlength("3");
            obj.set_inputtype("digit");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Edit("edtChasuigwanYeoseokCnt","431",null,"120","22",null,"31",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_maxlength("3");
            obj.set_inputtype("digit");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00_00","0",null,"1423","28",null,"1",null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_00","0",null,"150","28",null,"1",null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("면접여부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboMyeonjeopYn","153",null,"120","22",null,"4",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_innerdataset("dsYn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_00_00","277",null,"150","28",null,"1",null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("면접일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_00_00_00","554",null,"150","28",null,"1",null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("실기여부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_00_00_00_00","871",null,"150","28",null,"1",null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("실기일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Calendar("calMyeonjeopDt","431",null,"120","22",null,"4",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSilgiDt","1024",null,"121","22",null,"4",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Combo("cboMyeonjeopYn00","707",null,"160","22",null,"4",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_innerdataset("dsYn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","1","69","300","8",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00","0","710","320","8",null,null,null,null,null,null,this);
            obj.set_taborder("33");
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
            obj.set_mobileorientation("landscape");
            obj.set_description("편입학설정");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.spnPyeonipYyyy","value","ds_input","PYEONIP_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboSearchSeunginSangtae00_00","value","ds_input","HAKGWA_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboPyeonipMojip","value","ds_input","PYEONIP_MOJIP_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","spnPyeonipYyyy","value","dsMaster","PYEONIP_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","cboMojipGbcd","value","dsMaster","PYEONIP_MOJIP_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","cboSearchSeunginSangtae","value","dsMaster","JUYA_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","cboHakgwa","value","dsMaster","HAKGWA_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","cboPyeonipHaknyeon","value","dsMaster","PYEONIP_HAKNYEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edtYeoseokCnt","value","dsMaster","YEOSEOK_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edtChasuigwanYeoseokCnt","value","dsMaster","CHASUIGWAN_YEOSEOK_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","cboMyeonjeopYn","value","dsMaster","MYEONJEOP_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","calSearchSincheongJongryoDt00_00_00","value","dsMaster","DEUNGROK_TODT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","calMyeonjeopDt","value","dsMaster","MYEONJEOP_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","calSilgiDt","value","dsMaster","SILGI_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","calSearchSincheongJongryoDt00_01","value","dsMaster","GOJISEO_PRINT_TODT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","cboMyeonjeopYn00","value","dsMaster","SILGI_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("ET01_1020102_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): ET01_1020102_M.xfdl(편입학설정)
        * 작 성         일 명: 박경민
        * 작 성         일 자: 2021/04/20
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
        this.lvchkColidDs   = "PYEONIP_YYYY$PYEONIP_MOJIP_GBCD$HAKGWA_CD$JUYA_GBCD$PYEONIP_HAKNYEON$YEOSEOK_CNT";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs = "편입년도$편입모집구분코드$학과$주야구분$편입학년$여석수";
        var HYEONJAE_MOJIP;
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
            var strDs    = "ds_Juya|dsMojipGbcd|dsHaknyeon|dsYn";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00003|01024|01041|01032";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "S|S|S|S";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = "";                                      // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId    = "Init";

                // gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
                // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.

            this.gfn_CmmnMultiComboLoad(strDs
                                      , strLgcd
                                      , strComb
                                      , strOptn
                                      , svcId);

        	this.fn_PyeonIpGijunYyyy();
        };

        // 편입기준년도 가져오기
        this.fn_PyeonIpGijunYyyy = function()
        {
        	var strSvc      = "PyeonIpGijunYyyy";
            var strUrl      = "/prj/EN/EN_COM/Retrieve_GIJUN_YYYY.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "ds_gijunYyyy=ds_gijunYyyy";
            var strArg      = "";
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;                                   //샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);
        }

        // 조회조건에 편입년도 설정
        this.fn_PostPyeonIpGijunYyyy = function()
        {
        	this.ds_input.setColumn(0, "PYEONIP_YYYY", this.ds_gijunYyyy.getColumn(0, "YYYY"));
        	this.fn_PyeonIpMojip();
        }

        // 편입모집구분 가져오기
        this.fn_PyeonIpMojip = function()
        {
        	var strSvc      = "PyeonIpMojip";
            var strUrl      = "/prj/ET/ET_COM/Retrieve_PYEONIP_MOJIP.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "ds_pyeonipMojip=ds_pyeonipMojip";
            var strArg      = "";
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;                                   //샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);
        }

        // 조회조건에 모집구분 설정
        this.fn_PostPyeonIpMojip = function()
        {
        	for(var i = 0; i < this.ds_pyeonipMojip.rowcount; i++)
        	{
                if(this.ds_pyeonipMojip.getColumn(i, "HYEONJAE_MOJIP_YN") == 'Y')
        		{
        			HYEONJAE_MOJIP = this.ds_pyeonipMojip.getColumn(i, "PYEONIP_MOJIP_GBCD");
        			this.ds_input.setColumn(0, "PYEONIP_MOJIP_GBCD", this.ds_pyeonipMojip.getColumn(i, "PYEONIP_MOJIP_GBCD"));
                }
            }

        	if(this.ds_pyeonipMojip.rowcount == 0)
        	{
        		this.ds_pyeonipMojip.insertRow(0);
        		this.ds_pyeonipMojip.setColumn(0, 'PYEONIP_MOJIP_GBCD','');
        		this.ds_pyeonipMojip.setColumn(0, 'PYEONIP_MOJIP_NM','전체');
        	}

        	this.fn_PyeonIpHakgwa();
        }

        // 편입학과 가져오기
        this.fn_PyeonIpHakgwa = function()
        {
        	var strSvc      = "hakgwa";
            var strUrl      = "/prj/EN/EN_COM/Retrieve_HAKGWA_CD.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "ds_Hakgwa=ds_hakgwaCd";
            var strArg      = "";
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;                                   //샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);
        }

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
        			case "PyeonIpGijunYyyy":
                            this.fn_PostPyeonIpGijunYyyy();
                        break;
        			case "PyeonIpMojip":
                            this.fn_PostPyeonIpMojip();
                        break;
                    case "Ret":
                            this.fn_PostRet();
                        break;
                    case "Save":
                            this.fn_PostSave();
                        break;
                    case "New":
                            this.fn_PostNew();
                        break;
                    case "Del":
                            this.fn_PostDel();
                        break;
        			case "CopyBeforeData":
        					this.fn_Ret();
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
                case "new" :         // 신규
                        this.fn_New();
                    break;
                case "del" :         // 삭제
                        this.fn_Del();
                    break;
                case "save" :        // 저장
                        this.fn_Save();
                    break;
                case "tmp1" :        // 팁
                         this.fn_Tip();
                    break;
                case "tmp2" :        // 전년도복사
                         this.fn_CopyBeforeData();
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
        	if(this.fn_beforeclose())
        	{
        		var result = this.gfn_confirm( "변경된 데이터가 있습니다. 그래도 이동하시겠습니까?", "저장","", "question" );
        		if(result == 0)
        		{
        			return false;
        		}
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
            var strUrl      = "/prj/ET/ET01/Retrieve_1020102_M.do";
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
        this.fn_PreNew = function()
        {
        	if(this.ds_input.getColumn(0, "PYEONIP_YYYY") == "" || this.ds_input.getColumn(0, "PYEONIP_MOJIP_GBCD") == "")
        	{
        		this.alert("조회 후 추가해주세요.");
        		return false;
        	}
        	return true;
        }
        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_New = function()
        {
            if(!this.fn_PreNew())
            {
                return false;
            }
            var nRow = this.dsMaster.addRow();
        	this.dsMaster.setColumn(nRow,"PYEONIP_YYYY", this.ds_input.getColumn(0, "PYEONIP_YYYY"));
        	this.dsMaster.setColumn(nRow,"PYEONIP_MOJIP_GBCD", this.ds_input.getColumn(0, "PYEONIP_MOJIP_GBCD"));
        	this.dsMaster.setColumn(nRow,"HAKGWA_CD", "");
        	this.dsMaster.setColumn(nRow,"JUYA_GBCD", "");
        	this.dsMaster.setColumn(nRow,"PYEONIP_HAKNYEON", "2");
        	this.dsMaster.setColumn(nRow,"CHASUIGWAN_YEOSEOK_CNT", "0");
        	this.dsMaster.setColumn(nRow,"MYEONJEOP_YN", "N");
        	this.dsMaster.setColumn(nRow,"SILGI_YN", "N");
        };

        /**********************************************************************
                07. 삭제 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 삭제 버튼 실행
         */
        this.fn_PreDel = function()
        {
            //멀티삭제용도
            if(this.dsMaster.rowcount < 1)
            {
                this.gfn_alert("삭제할 데이터가 없습니다.","삭제정보","","warning");
                return false;
            }
            var result = this.gfn_confirm( "현재선택행을 삭제하시겠습니까?", "삭제정보","","question" );

            if(result == 0)
            {
                return false;
            }

            //개별삭제시
            this.dsMaster.deleteRow(this.dsMaster.rowposition);
            return true;
        };

        /**
         * 기능 : Row 삭제 또는 Transaction 삭제 처리
         */
        this.fn_Del = function()
        {
            if(!this.fn_PreDel())
            {
                return false;
            }

            var strSvc      = "Del";
            var strUrl      = "/prj/ET/ET01/Delete_1020102_M.do";
            var strInDs     = "dsMaster=dsMaster:u";
            var strOutDs    = "";
            var strArg      = "";
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;                                   //샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);
        };

        this.fn_PostDel = function()
        {
            this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
        };

        /**********************************************************************
                08. 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave = function()
        {
            if(this.dsMaster.rowcount > 0)
            {
                for(var i=0;i<this.dsMaster.rowcount; i++)
                {
                    if(this.dsMaster.getColumn(i,"CHK") == "0")
                    {
                        continue;
                    }
                    this.dsMaster.setColumn(i,"CHK","0");
                }
            }

            if(!this.gfn_isUpdate(this.dsMaster))
            {
                this.gfn_alert("변경된 이력이 없습니다.","저장정보","","question");
                return false;
            }

            // 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
            var chkFocusFlg = false;
            var result      = this.gfn_cmmnChkEssentialItem(this.dsMaster, this.lvchkColidDs, this.lvchkColNameDs, this.grdMaster, chkFocusFlg, this);

            if (result[0] != "success")
            {
                this.gfn_alert(result[0],"저장정보","","question");
                this.dsMaster.set_rowposition(result[1]); //데이터셋 변경
                return false;
            }

            var result = this.gfn_confirm( "저장 하시겠습니까?", "저장","", "question" );
            if(result == 0)
            {
                return false;
            }
            return true;
        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_Save = function()
        {
            if(!this.fn_PreSave())
            {
                return false;
            }
            var strSvc      = "Save";
            var strUrl      = "/prj/ET/ET01/Save_1020102_M.do";
            var strInDs     = "ds_input=ds_input:a ";
                strInDs    += "dsMaster=dsMaster:u";
            var strOutDs    = "dsMaster=dsMaster";
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
        /**
         *      기능 : 저장시 후처리
         */
        this.fn_PostSave = function()
        {
            this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
        };

        /**********************************************************************
                09. 팁
        ***********************************************************************/
        this.fn_Tip = function()
        {
        	this.alert("도움말 준비중입니다.");
        };

        /**********************************************************************
                10. 전년도 복사
        ***********************************************************************/
        /**
         * 기능 : 전년도복사 전 실행
         */
        this.fn_PreCopyBeforeData = function()
        {
        	if(this.ds_input.getColumn(0, "PYEONIP_YYYY") == "" || this.ds_input.getColumn(0, "PYEONIP_MOJIP_GBCD") == "")
        	{
        		this.alert("조회 후 복사해주세요.");
        		return false;
        	}

        	var result = this.gfn_confirm( "기준년도의 전년도를 복사합니다. \n전년도 데이터를 복사하시겠습니까?\n(복사 후에는 기존에 추가하였던 데이터가 모두 지워집니다.)", "저장","", "question" );
        	if(result == 0)
            {
        		return false;
            }

        	this.ds_input.setColumn(0, "JEONNYEONDO_PYEONIP_YYYY", (parseInt(this.ds_input.getColumn(0, "PYEONIP_YYYY")) - 1))
            return true;
        };

        /**
         * 기능 : 전년도복사 실행
         */
        this.fn_CopyBeforeData = function()
        {
        	if(!this.fn_PreCopyBeforeData())
            {
                return false;
            }
        	var strSvc      = "CopyBeforeData";
            var strUrl      = "/prj/ET/ET01/Copy_1020102_M.do";
            var strInDs     = "ds_input=ds_input:a ";
                strInDs    += "dsMaster=dsMaster:u";
            var strOutDs    = "dsMaster=dsMaster";
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

        }

        /**********************************************************************
                11. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj,e)
        {
            this.gfn_gridSort(obj,e);
        };

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
            return this.gfn_isUpdate(this.dsMaster);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.spnPyeonipYyyy.addEventHandler("onchanged",this.fn_PyeonIpMojip,this);
            this.divSearch.form.cboPyeonipMojip.addEventHandler("onkeydown",this.divSearch_cboSearchSeunginSangtae_onkeydown,this);
            this.spnPyeonipYyyy.addEventHandler("onkeydown",this.divM_spnSearchYYYY_onkeydown,this);
            this.cboSearchSeunginSangtae.addEventHandler("onkeydown",this.divSearch_cboSearchSeunginSangtae_onkeydown,this);
            this.cboHakgwa.addEventHandler("onkeydown",this.divSearch_cboSearchSeunginSangtae_onkeydown,this);
            this.cboPyeonipHaknyeon.addEventHandler("onkeydown",this.divSearch_cboSearchSeunginSangtae_onkeydown,this);
            this.cboMyeonjeopYn.addEventHandler("onkeydown",this.divSearch_cboSearchSeunginSangtae_onkeydown,this);
            this.calMyeonjeopDt.addEventHandler("onkeydown",this.divSearch_calSearchSincheongJongryoDt_onkeydown,this);
            this.calSilgiDt.addEventHandler("onkeydown",this.divSearch_calSearchSincheongJongryoDt_onkeydown,this);
            this.cboMyeonjeopYn00.addEventHandler("onkeydown",this.divSearch_cboSearchSeunginSangtae_onkeydown,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsMaster.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
        };
        this.loadIncludeScript("ET01_1020102_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
