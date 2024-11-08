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
            this.set_titletext("학과별전형관리");
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
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONHYEONG_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"SEBUJEONHYEONG_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JUYA_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONHYEONG_GBCD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJeonHyung", this);
            obj._setContents("<ColumnInfo><Column id=\"JEONHYEONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONHYEONG_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSebuJeonHyung", this);
            obj._setContents("<ColumnInfo><Column id=\"JEONHYEONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SEBUJEONHYEONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SEBUJEONHYEONG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JIYEOK_YN\" type=\"STRING\" size=\"256\"/><Column id=\"JIYEOK_GBCD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Juya", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetail", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"MOJIP_NM\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONHYEONG_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONHYEONG_NM\" type=\"STRING\" size=\"10\"/><Column id=\"SEBUJEONHYEONG_GBCD\" type=\"STRING\" size=\"30\"/><Column id=\"SEBUJEONHYEONG_NM\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"500\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"500\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dInput", this);
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gijunYyyy", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_hakgwaCd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mojipGbcd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HYEONJAE_MOJIP_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_SearchHakgwa", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_SearchMojipGb", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HYEONJAE_MOJIP_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_SearchJuya", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBindableComp", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"bEnable\" type=\"STRING\" size=\"256\"/><Column id=\"bReadonly\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"bEnable\">false</Col><Col id=\"bReadonly\">true</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAllSebuJeonHyung", this);
            obj._setContents("<ColumnInfo><Column id=\"JEONHYEONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SEBUJEONHYEONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SEBUJEONHYEONG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JIYEOK_YN\" type=\"STRING\" size=\"256\"/><Column id=\"JIYEOK_GBCD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdMaster","0","77","419",null,null,"89",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("dsMaster");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"96\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"학부/학과\"/><Cell col=\"2\" text=\"학과코드\"/><Cell col=\"3\" text=\"주야구분\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" editmaxlength=\"256\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:HAKGWA_NM\" editmaxlength=\"256\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:HAKGWA_CD\" editmaxlength=\"256\"/><Cell col=\"3\" text=\"bind:JUYA_NM\" displaytype=\"normal\" edittype=\"none\" combodataset=\"ds_Juya\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","0","52","100","22",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("학과 정보");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","87","51","123","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01","419","127","30","100",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("30");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","69","610","8",null,null,null,null,null,null,this);
            obj.set_taborder("12");
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

            obj = new Combo("cboSearchJuya","798","9","100","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_Juya");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_04","720","9","68","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("주야구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_02","456","9","50","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("학과");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01","7","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("입시년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgwa","513","9","170","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_SearchHakgwa");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","86","9","101","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_cssclass("point");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01","14","0","910","9",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new Static("Static01_01_00","14","31","910","9",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new Static("Static01_02","683","1","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","1","27","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01","187","1","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00","77","1","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","503","1","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_02_00","224","9","70","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("모집구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchMojip","300","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_SearchMojipGb");
            obj.set_codecolumn("MOJIP_GBCD");
            obj.set_datacolumn("MOJIP_NM");
            obj.set_cssclass("point");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_01","290","1","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00","420","1","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","788","1","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Grid("grdDetail","449","77",null,null,"0","89",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("dsDetail");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"200\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"상태\"/><Cell col=\"1\" text=\"입시년도\"/><Cell col=\"2\" text=\"모집구분\"/><Cell col=\"3\" text=\"전형코드\"/><Cell col=\"4\" text=\"전형명\"/><Cell col=\"5\" text=\"세부전형코드\"/><Cell col=\"6\" text=\"세부전형명\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" editmaxlength=\"256\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:IPSI_YYYY\" edittype=\"none\"/><Cell col=\"2\" text=\"bind:MOJIP_GBCD\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"ds_mojipGbcd\" combocodecol=\"MOJIP_GBCD\" combodatacol=\"MOJIP_NM\"/><Cell col=\"3\" text=\"bind:JEONHYEONG_GBCD\" edittype=\"none\"/><Cell col=\"4\" displaytype=\"combotext\" edittype=\"none\" textAlign=\"center\" text=\"bind:JEONHYEONG_GBCD\" editmaxlength=\"256\" combodataset=\"dsJeonHyung\" combocodecol=\"JEONHYEONG_GBCD\" combodatacol=\"JEONHYEONG_NM\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:SEBUJEONHYEONG_GBCD\" editmaxlength=\"256\"/><Cell col=\"6\" text=\"bind:SEBUJEONHYEONG_GBCD\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"dsAllSebuJeonHyung\" combocodecol=\"SEBUJEONHYEONG_GBCD\" combodatacol=\"SEBUJEONHYEONG_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","449","52","97","22",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("전형 관리");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt2","545","51","123","24",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06","0",null,"1076","28",null,"27",null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06","0",null,"150","28",null,"27",null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("입시년도");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00","276",null,"120","28",null,"27",null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("모집구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00","571",null,"100","28",null,"27",null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("학과");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00","813",null,"120","28",null,"27",null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("주야구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboMojip","399",null,"169","22",null,"30",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_codecolumn("MOJIP_GBCD");
            obj.set_datacolumn("MOJIP_NM");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("ds_mojipGbcd");
            obj.set_cssclass("point");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cboHakgwa","674",null,"136","22",null,"30",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_innerdataset("ds_hakgwaCd");
            obj.set_cssclass("point");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","390","710","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Spin("spnYYYY","154",null,"119","22",null,"30",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_cssclass("point");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00","0",null,"1076","28",null,"0",null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01","0",null,"150","28",null,"0",null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("전형구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_01","396",null,"120","28",null,"0",null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("세부전형구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSebuJeonHyung","519",null,"290","22",null,"3",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_codecolumn("SEBUJEONHYEONG_GBCD");
            obj.set_datacolumn("SEBUJEONHYEONG_NM");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsSebuJeonHyung");
            obj.set_cssclass("point");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cboJuya","936",null,"136","22",null,"30",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_innerdataset("ds_Juya");
            obj.set_cssclass("point");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cboJeonHyung","153",null,"240","22",null,"3",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_cssclass("point");
            obj.set_innerdataset("dsJeonHyung");
            obj.set_datacolumn("JEONHYEONG_NM");
            obj.set_codecolumn("JEONHYEONG_GBCD");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","340","42","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("학과별전형관리");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","cboMojip","value","dsDetail","MOJIP_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","cboHakgwa","value","dsDetail","HAKGWA_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","cboSebuJeonHyung","value","dsDetail","SEBUJEONHYEONG_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","cboJuya","value","dsDetail","JUYA_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboSearchHakgwa","value","ds_input","HAKGWA_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","cboJeonHyung","value","dsDetail","JEONHYEONG_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.cboSearchJuya","value","ds_input","JUYA_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","cboSearchSeunginSangtae00_00","value","ds_input","HAKGWA_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","cboSearchSeunginSangtae00_00_00","value","ds_input","MOJIP_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","spnYYYY","value","dsDetail","IPSI_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.spnSearchYYYY","value","ds_input","IPSI_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divSearch.form.cboSearchMojip","value","ds_input","MOJIP_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","cboJeonHyung","readonly","dsBindableComp","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","cboMojip","readonly","dsBindableComp","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","cboSebuJeonHyung","readonly","dsBindableComp","bReadonly");
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
        this.registerScript("EN01_1010104_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): EN01_1010104_M.xfdl(학과별전형관리)
        * 작 성         일 명: 성연우
        * 작 성         일 자: 2021/04/13
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
        this.lvchkColidDs   = "IPSI_YYYY$MOJIP_GBCD$HAKGWA_CD$JUYA_GBCD$JEONHYEONG_GBCD$SEBUJEONHYEONG_GBCD";
        this.lvchkColNameDs = "입시년도$모집구분$학과$주야구분$전형구분$세부전형구분";
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
            var strDs    = "ds_SearchJuya|ds_Juya";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00003|00003";                         // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "T|S";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = "";                                      // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId    = "Init";

                // gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
                // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.

            this.gfn_CmmnMultiComboLoad(strDs
                                      , strLgcd
                                      , strComb
                                      , strOptn
                                      , svcId);

        	this.fn_IpsiGijunYyyy();
        };

        this.fn_IpsiGijunYyyy = function()
        {
        	// 입시기준년도 가져오기
        	var strSvc      = "IpsiGigunYyyy";
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

        // 조회조건에 입시년도 설정 및 입시모집구분 조회
        this.fn_PostIpsiGigunYyyy = function()
        {
        	this.ds_input.setColumn(0, "IPSI_YYYY", this.ds_gijunYyyy.getColumn(0, "YYYY"));

        	this.fn_IpsiHakgwa();
        }

        this.fn_IpsiHakgwa = function()
        {
        	// 입시학과 가져오기
        	var strSvc      = "IpsiHakgwa";
            var strUrl      = "prj/EN/EN_COM/Retrieve_HAKGWA_CD.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "ds_hakgwaCd=ds_hakgwaCd";
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

        // 학과 콤보박스 설정
        this.fn_PostIpsiHakgwa = function()
        {
        	this.ds_SearchHakgwa.copyData(this.ds_hakgwaCd);

        	this.ds_SearchHakgwa.insertRow(0);
        	this.ds_SearchHakgwa.setColumn(0, "DEPT_CD", "");
        	this.ds_SearchHakgwa.setColumn(0, "DEPT_NM", "전체");
        	this.divSearch.form.cboSearchHakgwa.set_index(0);

        	this.ds_hakgwaCd.insertRow(0);
        	this.ds_hakgwaCd.setColumn(0, "DEPT_CD", "");
        	this.ds_hakgwaCd.setColumn(0, "DEPT_NM", "선택");
        	this.cboHakgwa.set_index(0);

        	this.fn_IpsiMojipGb();
        }

        // 입시모집구분 가져오기
        this.fn_IpsiMojipGb = function()
        {
            var strSvc      = "IpsiMojipGb";
            var strUrl      = "prj/EN/EN_COM/Retrieve_MOJIPGBCD.do";
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

        // 모집구분 콤보박스 설정
        this.fn_PostIpsiMojipGb = function()
        {
        	this.ds_SearchMojipGb.copyData(this.ds_mojipGbcd);
        	this.divSearch.form.cboSearchMojip.set_index(0);

        	this.ds_mojipGbcd.insertRow(0);
        	this.ds_mojipGbcd.setColumn(0, "MOJIP_GBCD", "");
        	this.ds_mojipGbcd.setColumn(0, "MOJIP_NM", "선택");

        	this.fn_Jeonhyeong();
        }

        // 전형콤보박스 가져오기
        this.fn_Jeonhyeong = function()
        {
            var strSvc      = "Jeonhyeong";
            var strUrl      = "prj/EN/EN01/Retrieve_1010104_M_Jeonhyeong.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsJeonHyung=dsJeonHyung";
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

        // 세부전형 호출
        this.fn_PostJeonhyeong = function()
        {
        	this.fn_AllSebu();
        }

        // 세부전형콤보박스 가져오기
        this.fn_AllSebu = function()
        {
            var strSvc      = "AllSebu";
            var strUrl      = "prj/EN/EN01/Retrieve_1010104_M_AllSebu.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsAllSebuJeonHyung=dsAllSebuJeonHyung";
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

        // 세부전형콤보박스 가져오기
        this.fn_Sebu = function()
        {
            var strSvc      = "Sebu";
            var strUrl      = "prj/EN/EN01/Retrieve_1010104_M_Sebu.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsSebuJeonHyung=dsSebuJeonHyung";
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
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {
            this.gfn_clearSortAll(this.grdMaster);
        	this.gfn_clearSortAll(this.grdDetail);
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
        			case "IpsiGigunYyyy":
                            this.fn_PostIpsiGigunYyyy();
                        break;
        			case "IpsiHakgwa":
                            this.fn_PostIpsiHakgwa();
                        break;
        			case "IpsiMojipGb":
                            this.fn_PostIpsiMojipGb();
                        break;
        			case "Jeonhyeong":
                            this.fn_PostJeonhyeong();
                        break;
                    case "Ret":
         					this.fn_PostRet();
                        break;
        			case "DRet":
         					this.fn_PostDRet();
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
                            this.fn_PostCopyBeforeData();
                        break;
        			case "CopyChasoo":
                            this.fn_PostCopyChasoo();
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
                case "tmp3" :        // 전차수복사
                         this.fn_CopyChasoo();
                    break;
                default :
                    break;
            };
        };;

        /**********************************************************************
                05. 학과정보 조회 함수 선언(마스터 함수)
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreRet = function()
        {
            // 조회조건 셋팅
        	if(this.ds_input.getColumn(0, "IPSI_YYYY") == null || this.ds_input.getColumn(0, "IPSI_YYYY") == '')
        	{
        		this.alert("입시년도를 입력해주세요.");
        		return false;
        	}
        	if(this.ds_input.getColumn(0, "MOJIP_GBCD") == null || this.ds_input.getColumn(0, "MOJIP_GBCD") == '')
        	{
        		this.alert("모집구분을 입력해주세요.");
        		return false;
        	}

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
            var strUrl      = "/prj/EN/EN01/Retrieve_1010104_M.do";
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
        	this.dsDetail.clearData();
        };

        /**********************************************************************
                06. 전형관리 조회 함수 선언(디테일 함수)
        ***********************************************************************/
        // 학과정보 선택시 전형관리 조회
        this.dsMaster_canrowposchange = function(obj,e)
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
        };

        this.dsMaster_onrowposchanged = function(obj,e)
        {
        	this.ds_dInput.setColumn(0, "IPSI_YYYY", this.dsMaster.getColumn(this.dsMaster.rowposition,"IPSI_YYYY"));
        	this.ds_dInput.setColumn(0, "HAKGWA_CD", this.dsMaster.getColumn(this.dsMaster.rowposition,"HAKGWA_CD"));
        	this.ds_dInput.setColumn(0, "JUYA_GBCD", this.dsMaster.getColumn(this.dsMaster.rowposition,"JUYA_GBCD"));
        	this.ds_dInput.setColumn(0, "MOJIP_GBCD", this.ds_input.getColumn(0, "MOJIP_GBCD"));

        	this.fn_DRet();
        };

        this.fn_DRet = function(){

        	var strSvc      = "DRet";
        	var strUrl      = "/prj/EN/EN01/Retrieve_1010104_M_Detail.do";
        	var strInDs     = "ds_dInput=ds_dInput";
        	var strOutDs    = "dsDetail=dsDetail";
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

        /**
         * 기능 : 조회 후 실행
         */
        this.fn_PostDRet = function()
        {
        	this.gfn_getRowCount(this.staRowCnt2,this.dsDetail);
        };

        /**********************************************************************
                07. 추가 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_PreNew = function()
        {
        	if(this.dsMaster.rowcount == 0 || this.dsMaster.getColumn(this.dsMaster.rowposition, "HAKGWA_CD" == "") || this.dsMaster.getColumn(this.dsMaster.rowposition, "HAKGWA_CD" == null))
        	{
        		this.alert("학과를 선택해주세요.");
        		return false;
        	}
        	return true;
        };

        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_New = function()
        {
        	if(!this.fn_PreNew())
            {
                return false;
            }

            var nRow = this.dsDetail.addRow();
         	this.dsDetail.setColumn(nRow,"IPSI_YYYY",this.divSearch.form.spnSearchYYYY.value);
         	this.dsDetail.setColumn(nRow,"JUYA_GBCD",this.dsMaster.getColumn(this.dsMaster.rowposition,"JUYA_GBCD"));
         	this.dsDetail.setColumn(nRow,"MOJIP_GBCD",this.dsMaster.getColumn(this.dsMaster.rowposition,"MOJIP_GBCD"));
         	this.dsDetail.setColumn(nRow,"HAKGWA_CD",this.dsMaster.getColumn(this.dsMaster.rowposition,"HAKGWA_CD"));

        	this.cboMojip.set_index(0);
        };

        /**********************************************************************
                08. 삭제 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 삭제 버튼 실행
         */

        this.fn_PreDel = function()
        {
        	var result = this.gfn_confirm( "현재선택행을 삭제하시겠습니까?", "삭제정보","","question" );
        	if(result == 0)
        	{
        		return false;
        	}

            //개별삭제시
            this.dsDetail.deleteRow(this.dsDetail.rowposition);
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
            var strUrl      = "/prj/EN/EN01/Delete_1010104_M.do";
            var strInDs     = "dsDetail=dsDetail:u";
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
        	this.gfn_getRowCount(this.staRowCnt2,this.dsDetail);
        };

        /**********************************************************************
                09. 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave = function()
        {
        	if(this.dsDetail.rowcount > 0)
        	{
        		for(var i=0;i<this.dsDetail.rowcount; i++)
        		{
        			if(this.dsDetail.getColumn(i,"CHK") == "0")
        			{
        				continue;
        			}
        			this.dsDetail.setColumn(i,"CHK","0");
        		}
        	}

            if(!this.gfn_isUpdate(this.dsDetail))
            {
                this.gfn_alert("변경된 이력이 없습니다.!","저장정보","","question");
                return false;
            }

            // 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
            var chkFocusFlg = true;
            var result      = this.gfn_cmmnChkEssentialItem(this.dsDetail, this.lvchkColidDs, this.lvchkColNameDs, this.grdDetail, chkFocusFlg, this);

            if (result[0] != "success")
            {
                this.gfn_alert(result[0],"저장정보","","question");
                this.dsDetail.set_rowposition(result[1]); //데이터셋 변경
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
            var strUrl      = "/prj/EN/EN01/Save_1010104_M.do";
            var strInDs     = "ds_dInput=ds_dInput:a ";
                strInDs    += "dsDetail=dsDetail:u";
            var strOutDs    = "dsDetail=dsDetail";
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
        	this.gfn_getRowCount(this.staRowCnt2,this.dsDetail);
        	this.fn_Ret();
        };

        /**********************************************************************
                10. 팁
        ***********************************************************************/
        this.fn_Tip = function()
        {
        	this.alert("도움말 준비중입니다.");
        };

        /**********************************************************************
                11. 전년도 복사
        ***********************************************************************/
        /**
         * 기능 : 전년도복사 전 실행
         */
        this.fn_PreCopyBeforeData = function()
        {
        	var result = this.gfn_confirm( "전년도 데이터를 복사하시겠습니까?\n(복사 후에는 기존에 추가하였던 데이터가 모두 지워집니다.)", "저장","", "question" );
        	if(result == 0)
            {
        		return false;
            }
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
        	var strUrl      = "/prj/EN/EN01/Save_1010104_M_CopyBeforeData.do";
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

        /**
         *      기능 : 전년도복사시 후처리
         */
        this.fn_PostCopyBeforeData = function()
        {
            this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
        	this.gfn_getRowCount(this.staRowCnt2,this.dsDetail);
        };

        /**********************************************************************
                12. 전차수 복사
        ***********************************************************************/
        /**
         * 기능 : 전차수복사 전 실행
         */
        this.fn_PreCopyChasoo = function()
        {
        	var result = this.gfn_confirm( "검색조건에 해당하는 전차수 데이터를 복사하시겠습니까?\n(복사 후에는 기존에 추가하였던 데이터가 모두 지워집니다.)", "저장","", "question" );
        	if(result == 0)
            {
        		return false;
            }
            return true;
        };

        /**
         * 기능 : 전차수복사 실행
         */
        this.fn_CopyChasoo = function()
        {
        	if(!this.fn_PreCopyChasoo())
            {
                return false;
            }

            var strSvc      = "CopyChaSoo";
            var strUrl      = "/prj/EN/EN01/Save_1010104_M_CopyChaSoo.do";
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

        /**
         *      기능 : 전차수복사시 후처리
         */
        this.fn_PostCopyChasoo = function()
        {
            this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
        	this.gfn_getRowCount(this.staRowCnt2,this.dsDetail);
        };

        /**********************************************************************
                13. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj,e)
        {
            this.gfn_gridSort(obj,e);
        };

        this.grdDetail_onheaddblclick = function(obj,e)
        {
        	this.gfn_gridSort(obj,e);
        };

        // 입시년도가 바뀔때마다 모집구분, 전형 재조회
        this.divSearch_spnSearchYYYY_onchanged = function(obj,e)
        {
        	this.fn_IpsiMojipGb();
        	this.fn_Jeonhyeong();
        };

        // 전형이 바뀔때마다 세부전형 재조회
        this.cboJeonHyung_onitemchanged = function(obj,e)
        {
        	this.ds_input.setColumn(0, "JEONHYEONG_GBCD", this.dsJeonHyung.getColumn(this.cboJeonHyung.index, "JEONHYEONG_GBCD"));
        	this.fn_Sebu();
        };

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
        	return this.gfn_isUpdate(this.dsDetail);
        };

        // 디테일 그리드 변경시
        this.dsDetail_onrowposchanged = function(obj,e)
        {
        	if (obj.getRowType(obj.rowposition) == Dataset.ROWTYPE_INSERT)
        	{
        		this.dsBindableComp.setColumn(0, "bReadonly", "false");
        	}
        	else
        	{
        		this.dsBindableComp.setColumn(0, "bReadonly", "true");
        	}
        };

        /**********************************************************************
                14. 검색창 엔터키 조회
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

        this.divSearch_cboSearchJuya_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"JUYA_GBCD",obj.value);
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
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster.addEventHandler("oncellclick",this.grdMaster_oncellclick,this);
            this.grdMaster.addEventHandler("onkeydown",this.grdMaster_onkeydown,this);
            this.grdMaster.addEventHandler("onkeyup",this.grdMaster_onkeyup,this);
            this.divSearch.form.cboSearchJuya.addEventHandler("onkeydown",this.divSearch_cboSearchJuya_onkeydown,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onkeydown",this.divSearch_cboSearchHakgwa_onkeydown,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onchanged",this.divSearch_spnSearchYYYY_onchanged,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onkeydown",this.divSearch_spnSearchYYYY_onkeydown,this);
            this.divSearch.form.cboSearchMojip.addEventHandler("onkeydown",this.divSearch_cboSearchMojip_onkeydown,this);
            this.grdDetail.addEventHandler("onheaddblclick",this.grdDetail_onheaddblclick,this);
            this.cboJeonHyung.addEventHandler("onitemchanged",this.cboJeonHyung_onitemchanged,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsMaster.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
            this.dsDetail.addEventHandler("onrowposchanged",this.dsDetail_onrowposchanged,this);
        };
        this.loadIncludeScript("EN01_1010104_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
