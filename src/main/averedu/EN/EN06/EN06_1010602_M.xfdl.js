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
            this.set_titletext("합격자발표관리");
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
            obj._setContents("<ColumnInfo><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"10\"/><Column id=\"SUHEOMSAENG_NM\" type=\"STRING\" size=\"40\"/><Column id=\"JEONHYEONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONHYEONG_GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"SEBUJEONHYEONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SEBUJEONHYEONG_GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHDAY1\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"JEONHYEONGBYEOL_SEOKCHA\" type=\"STRING\" size=\"256\"/><Column id=\"YEBIHAPGYEOKHUBO_SEOKCHA\" type=\"STRING\" size=\"256\"/><Column id=\"HAPGYEOK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"HAPGYEOK_GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"HP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"HP_NO1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONHYEONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SEBUJEONHYEONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"HAPGYEOK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOMSAENG_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gijunYyyy", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_hakgwaCd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_juyaGbcd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mojipGbcd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HYEONJAE_MOJIP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"JEOPSU_FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"JEOPSU_TODT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_jeonhyeong", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"JEONHYEONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONHYEONG_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sebujeonhyeong", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SEBUJEONHYEONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SEBUJEONHYEONG_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHapgyeok", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdMaster","0","104",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_readonly("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"59\"/><Column size=\"100\"/><Column size=\"68\"/><Column size=\"100\"/><Column size=\"233\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"수험번호\"/><Cell col=\"2\" text=\"성명\"/><Cell col=\"3\" text=\"전형명\"/><Cell col=\"4\" text=\"세부전형\"/><Cell col=\"5\" text=\"생년월일\"/><Cell col=\"6\" text=\"1지망학과명\"/><Cell col=\"7\" text=\"1지망주야\"/><Cell col=\"8\" text=\"석차\"/><Cell col=\"9\" text=\"합격여부\"/><Cell col=\"10\" text=\"1지망후보석차\"/><Cell col=\"11\" text=\"휴대폰\"/></Band><Band id=\"body\"><Cell textAlign=\"center\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\" suppressalign=\"first\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:SUHEOM_NO\" editmaxlength=\"10\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:SUHEOMSAENG_NM\" editmaxlength=\"100\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:JEONHYEONG_GBNM\" editmaxlength=\"4\" editinputtype=\"number\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:SEBUJEONHYEONG_GBNM\" editmaxlength=\"4\" editinputtype=\"number\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:BIRTHDAY1\" editmaxlength=\"8\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" editmaxlength=\"8\" text=\"bind:HAKGWA_NM\"/><Cell col=\"7\" text=\"bind:JUYA_GBNM\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"8\" text=\"bind:JEONHYEONGBYEOL_SEOKCHA\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"9\" text=\"bind:HAPGYEOK_GBNM\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"10\" text=\"bind:YEBIHAPGYEOKHUBO_SEOKCHA\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"11\" text=\"bind:HP_NO\" displaytype=\"normal\" edittype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","500","69","100","35",null,null,null,null,null,null,this);
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

            obj = new Static("stc_09_00","0","79",null,"22","1485",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("합격자정보");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","97","78",null,"24","1420",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","96","320","8",null,null,null,null,null,null,this);
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

            obj = new Div("divSearch","0","0",null,"69","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_02","26","31","1600","5",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 6pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

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

            obj = new Static("Static01_01_00","20","58","1610","9",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new Combo("cboSearchHakgwa","594","9","183","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_hakgwaCd");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01","772","9","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("주야구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01_00","501","36","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("이름");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01","277","36","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("수험번호");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00","501","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("학과");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00","7","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("입시년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","100","9","152","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","277","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("모집구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchMojip","372","9","124","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_codecolumn("MOJIP_GBCD");
            obj.set_datacolumn("MOJIP_NM");
            obj.set_innerdataset("ds_mojipGbcd");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_01","-23","36","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("합격구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
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

            obj = new Static("Static01_02_00_00_00","90","0","10","67",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","362","0","10","67",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01","496","-1","56","65",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","584","0","10","67",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00","777","-1","56","37",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01","884","0","10","37",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_01","252","3","56","60",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJuya","894","9","124","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_codecolumn("JUYA_GBCD");
            obj.set_datacolumn("JUYA_NM");
            obj.set_innerdataset("ds_juyaGbcd");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00_00","1018","-1","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_02","1013","9","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_text("전형구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00","1125","0","10","37",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJeonhyeong","1135","9","124","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("25");
            obj.set_codecolumn("JEONHYEONG_GBCD");
            obj.set_datacolumn("JEONHYEONG_NM");
            obj.set_innerdataset("ds_jeonhyeong");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00_00_00","1259","-1","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("26");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_02_00","1278","9","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("27");
            obj.set_text("세부전형구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00","1390","0","10","37",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("28");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchSebu","1400","9","124","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("29");
            obj.set_codecolumn("SEBUJEONHYEONG_GBCD");
            obj.set_datacolumn("SEBUJEONHYEONG_NM");
            obj.set_innerdataset("ds_sebujeonhyeong");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchNm","594","36","183","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("30");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchSuheomNo","372","36","124","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("31");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHapgyeok","100","36","152","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("32");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsHapgyeok");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("합격자발표관리");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","divSearch.form.cboSearchHakgwa","value","ds_input","HAKGWA_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divSearch.form.spnSearchYYYY","value","ds_input","IPSI_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divSearch.form.cboSearchMojip","value","ds_input","MOJIP_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboSearchJuya","value","ds_input","JUYA_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.cboSearchJeonhyeong","value","ds_input","JEONHYEONG_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.cboSearchSebu","value","ds_input","SEBUJEONHYEONG_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtSearchSuheomNo","value","ds_input","SUHEOM_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.edtSearchNm","value","ds_input","SUHEOMSAENG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.cboSearchHapgyeok","value","ds_input","HAPGYEOK_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("EN06_1010602_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): EN06_1010602_M.xfdl(합격자발표관리)
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
            var strDs    = "dsHapgyeok";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "01014";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "T";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
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
        			case "Hakgwa":
                            this.fn_PostHakgwa();
                        break;
        			case "Juya":
                            this.fn_PostJuya();
                        break;
        			case "Jeonhyeong":
                            this.fn_PostJeonhyeong();
                        break;
        			case "SebuJeonhyeong":
                            this.fn_PostSebuJeonhyeong();
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
                case "tmp1" :        // 팁
                         this.fn_Tip();
                    break;
        		case "tmp2" :        // 중복 지원자 출력
                         this.fn_PrintJungbok();
                    break;
                default :
                    break;
            };
        };;

        /**********************************************************************
                05. 조회 함수 선언(마스터 함수)
        ***********************************************************************/
        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_Ret = function()
        {
            var strSvc      = "Ret";
            var strUrl      = "/prj/EN/EN06/Retrieve_1010602_M.do";
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
                07. 중복 지원자 출력
        ***********************************************************************/
        this.fn_PrintJungbok = function()
        {
        	this.alert("출력물 준비중입니다.");
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
        	this.ds_hakgwaCd.deleteAll();
        	this.ds_juyaGbcd.deleteAll();
        	this.ds_jeonhyeong.deleteAll();
        	this.ds_sebujeonhyeong.deleteAll();

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
        	var gubun;
        	for(var i=0; i<this.ds_mojipGbcd.rowcount; i++)
        	{
        		gubun = this.ds_mojipGbcd.getColumn(i, "HYEONJAE_MOJIP_YN");

        		if(gubun == 'Y')
        		{
        			this.ds_input.setColumn(0, "MOJIP_GBCD", this.ds_mojipGbcd.getColumn(i, "MOJIP_GBCD"));
        			this.ds_input.setColumn(0, "HYEONJAE_MOJIP_GBCD", this.ds_mojipGbcd.getColumn(i, "MOJIP_GBCD"));
        			this.ds_input.setColumn(0, "JEOPSU_FRDT", this.ds_mojipGbcd.getColumn(i, "JEOPSU_FRDT"));
        			this.ds_input.setColumn(0, "JEOPSU_TODT", this.ds_mojipGbcd.getColumn(i, "JEOPSU_TODT"));
        		}
        	}

        	this.fn_Hakgwa();
        }

        // 입시학과 가져오기
        this.fn_Hakgwa = function()
        {
        	this.ds_hakgwaCd.deleteAll();
        	this.ds_juyaGbcd.deleteAll();
        	this.ds_jeonhyeong.deleteAll();
        	this.ds_sebujeonhyeong.deleteAll();

        	var strSvc      = "Hakgwa";
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

        this.fn_PostHakgwa = function()
        {
        	this.ds_hakgwaCd.insertRow(0);
        	this.ds_hakgwaCd.setColumn(0, "DEPT_CD", "");
        	this.ds_hakgwaCd.setColumn(0, "DEPT_NM", "전체");
        	this.divSearch.form.cboSearchHakgwa.set_index(0);

        	this.ds_juyaGbcd.insertRow(0);
        	this.ds_juyaGbcd.setColumn(0, "JUYA_GBCD", "");
        	this.ds_juyaGbcd.setColumn(0, "JUYA_NM", "전체");
        	this.divSearch.form.cboSearchJuya.set_index(0);

        	this.ds_jeonhyeong.insertRow(0);
        	this.ds_jeonhyeong.setColumn(0, "JEONHYEONG_GBCD", "");
        	this.ds_jeonhyeong.setColumn(0, "JEONHYEONG_NM", "전체");
        	this.divSearch.form.cboSearchJeonhyeong.set_index(0);

        	this.ds_sebujeonhyeong.insertRow(0);
        	this.ds_sebujeonhyeong.setColumn(0, "SEBUJEONHYEONG_GBCD", "");
        	this.ds_sebujeonhyeong.setColumn(0, "SEBUJEONHYEONG_NM", "전체");
        	this.divSearch.form.cboSearchSebu.set_index(0);
        }

        // 입시주야 가져오기
        this.fn_Juya = function()
        {
        	this.ds_juyaGbcd.deleteAll();
        	this.ds_jeonhyeong.deleteAll();
        	this.ds_sebujeonhyeong.deleteAll();

        	var strSvc      = "Juya";
            var strUrl      = "prj/EN/EN_COM/Retrieve_JUYAGBCD.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "ds_juyaGbcd=ds_juyaGbcd";
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

        this.fn_PostJuya = function()
        {
        	this.ds_juyaGbcd.insertRow(0);
        	this.ds_juyaGbcd.setColumn(0, "JUYA_GBCD", "");
        	this.ds_juyaGbcd.setColumn(0, "JUYA_NM", "전체");
        	this.divSearch.form.cboSearchJuya.set_index(0);

        	this.ds_jeonhyeong.insertRow(0);
        	this.ds_jeonhyeong.setColumn(0, "JEONHYEONG_GBCD", "");
        	this.ds_jeonhyeong.setColumn(0, "JEONHYEONG_NM", "전체");
        	this.divSearch.form.cboSearchJeonhyeong.set_index(0);

        	this.ds_sebujeonhyeong.insertRow(0);
        	this.ds_sebujeonhyeong.setColumn(0, "SEBUJEONHYEONG_GBCD", "");
        	this.ds_sebujeonhyeong.setColumn(0, "SEBUJEONHYEONG_NM", "전체");
        	this.divSearch.form.cboSearchSebu.set_index(0);
        }

        // 입시전형 가져오기
        this.fn_Jeonhyeong = function()
        {
        	this.ds_jeonhyeong.deleteAll();
        	this.ds_sebujeonhyeong.deleteAll();

        	var strSvc      = "Jeonhyeong";
            var strUrl      = "prj/EN/EN_COM/Retrieve_JEONHYEONG.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "ds_jeonhyeong=ds_jeonhyeong";
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

        this.fn_PostJeonhyeong = function()
        {
        	this.ds_jeonhyeong.insertRow(0);
        	this.ds_jeonhyeong.setColumn(0, "JEONHYEONG_GBCD", "");
        	this.ds_jeonhyeong.setColumn(0, "JEONHYEONG_NM", "전체");
        	this.divSearch.form.cboSearchJeonhyeong.set_index(0);

        	this.ds_sebujeonhyeong.insertRow(0);
        	this.ds_sebujeonhyeong.setColumn(0, "SEBUJEONHYEONG_GBCD", "");
        	this.ds_sebujeonhyeong.setColumn(0, "SEBUJEONHYEONG_NM", "전체");
        	this.divSearch.form.cboSearchSebu.set_index(0);
        }

        // 입시세부전형 가져오기
        this.fn_SebuJeonhyeong = function()
        {
        	this.ds_sebujeonhyeong.deleteAll();

        	var strSvc      = "SebuJeonhyeong";
            var strUrl      = "prj/EN/EN_COM/Retrieve_SEBUJEONHYEONG.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "ds_sebujeonhyeong=ds_sebujeonhyeong";
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

        this.fn_PostSebuJeonhyeong = function()
        {
        	this.ds_sebujeonhyeong.insertRow(0);
        	this.ds_sebujeonhyeong.setColumn(0, "SEBUJEONHYEONG_GBCD", "");
        	this.ds_sebujeonhyeong.setColumn(0, "SEBUJEONHYEONG_NM", "전체");
        	this.divSearch.form.cboSearchSebu.set_index(0);
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

        this.divSearch_cboSearchJeonhyeong_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"JEONHYEONG_GBCD",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchSebu_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"SEBUJEONHYEONG_GBCD",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchHapgyeok_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"HAPGYEOK_GBCD",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_edtSearchSuheomNo_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"SUHEOM_NO",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_edtSearchNm_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"SUHEOMSAENG_NM",obj.value);
        		this.fn_Ret();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onitemchanged",this.fn_Juya,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onkeydown",this.divSearch_cboSearchHakgwa_onkeydown,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onkeydown",this.divSearch_spnSearchYYYY_onkeydown,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onchanged",this.fn_MojipGb,this);
            this.divSearch.form.cboSearchMojip.addEventHandler("onitemchanged",this.fn_Hakgwa,this);
            this.divSearch.form.cboSearchMojip.addEventHandler("onkeydown",this.divSearch_cboSearchMojip_onkeydown,this);
            this.divSearch.form.cboSearchJuya.addEventHandler("onitemchanged",this.fn_Jeonhyeong,this);
            this.divSearch.form.cboSearchJuya.addEventHandler("onkeydown",this.divSearch_cboSearchJuya_onkeydown,this);
            this.divSearch.form.cboSearchJeonhyeong.addEventHandler("onitemchanged",this.fn_SebuJeonhyeong,this);
            this.divSearch.form.cboSearchJeonhyeong.addEventHandler("onkeydown",this.divSearch_cboSearchJeonhyeong_onkeydown,this);
            this.divSearch.form.cboSearchSebu.addEventHandler("onkeydown",this.divSearch_cboSearchSebu_onkeydown,this);
            this.divSearch.form.edtSearchNm.addEventHandler("onkeydown",this.divSearch_edtSearchNm_onkeydown,this);
            this.divSearch.form.edtSearchSuheomNo.addEventHandler("onkeydown",this.divSearch_edtSearchSuheomNo_onkeydown,this);
            this.divSearch.form.cboSearchHapgyeok.addEventHandler("onitemchanged",this.fn_Hakgwa,this);
            this.divSearch.form.cboSearchHapgyeok.addEventHandler("onkeydown",this.divSearch_cboSearchHapgyeok_onkeydown,this);
            this.dsMaster.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
        };
        this.loadIncludeScript("EN06_1010602_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
