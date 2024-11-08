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
            this.set_titletext("9월입학접수관리");
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
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONHYEONG_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"SEBUJEONHYEONG_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"SUHEOMSAENG_NM\" type=\"STRING\" size=\"40\"/><Column id=\"RES_NO1\" type=\"STRING\" size=\"6\"/><Column id=\"RES_NO2\" type=\"STRING\" size=\"100\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"8\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"NAEOEGUKIN_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"POST\" type=\"STRING\" size=\"6\"/><Column id=\"JUSO_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JUSO\" type=\"STRING\" size=\"500\"/><Column id=\"SANGSE_JUSO\" type=\"STRING\" size=\"500\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"50\"/><Column id=\"HP_NO\" type=\"STRING\" size=\"15\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"15\"/><Column id=\"CHUGA_YEONRAKCHEO\" type=\"STRING\" size=\"15\"/><Column id=\"GOGYO_CD\" type=\"STRING\" size=\"10\"/><Column id=\"GOGYO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHULSIN_GOGYO_CD\" type=\"STRING\" size=\"10\"/><Column id=\"GOGYOGYEYEOL_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"GOGYOJOLEOP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"GOGYOJOLEOP_YEJEONG_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"GEOMJEONGGOSI_CD\" type=\"STRING\" size=\"10\"/><Column id=\"GEOMJEONGGOSI_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GEOMJEONGGOSI_HOECHA\" type=\"STRING\" size=\"10\"/><Column id=\"AVG_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HAPGYEOK_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"DONGUI_NO\" type=\"STRING\" size=\"20\"/><Column id=\"CHULSIN_DAEHAK_NM\" type=\"STRING\" size=\"200\"/><Column id=\"DAEHAKJOLEOP_YEJEONG_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"DAEHAKJOLEOP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"CHONGISU_HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PYEONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GIJUN_PYEONGJEOM\" type=\"STRING\" size=\"256\"/><Column id=\"CHONGDEUNGGEUP\" type=\"STRING\" size=\"10\"/><Column id=\"BANK_NM\" type=\"STRING\" size=\"50\"/><Column id=\"GYEJWA_NO\" type=\"STRING\" size=\"50\"/><Column id=\"YEGEUMJU\" type=\"STRING\" size=\"40\"/><Column id=\"YEGEUMJU_GWANGYE\" type=\"STRING\" size=\"20\"/><Column id=\"SUJIP_DONGUI_YN\" type=\"STRING\" size=\"2\"/><Column id=\"GOYUSIKBYEOL_INFO_DONGUI_YN\" type=\"STRING\" size=\"2\"/><Column id=\"INFO_WITAK_DONGUI_YN\" type=\"STRING\" size=\"2\"/><Column id=\"INFO_3JA_JEGONG_DONGUI_YN\" type=\"STRING\" size=\"2\"/><Column id=\"NAEYONG_HWAKIN_YN\" type=\"STRING\" size=\"2\"/><Column id=\"SEORYU_JECHUL_YN\" type=\"STRING\" size=\"2\"/><Column id=\"HAPGYEOK_YN\" type=\"STRING\" size=\"2\"/><Column id=\"HAPGYEOK_DT\" type=\"STRING\" size=\"8\"/><Column id=\"JEONHYEONGRYONAPBU_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JEOPSUJA1\" type=\"STRING\" size=\"10\"/><Column id=\"JEOPSUJA2\" type=\"STRING\" size=\"10\"/><Column id=\"JEOPSU_DT\" type=\"STRING\" size=\"8\"/><Column id=\"DELETE_YN\" type=\"STRING\" size=\"2\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"500\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"500\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOMSAENG_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gijunYyyy", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"JEOPSU_FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"JEOPSU_TODT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMojipGbcd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBindableComp", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"bEnable\" type=\"STRING\" size=\"256\"/><Column id=\"bReadonly\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"bEnable\">false</Col><Col id=\"bReadonly\">true</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJuya", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Hakgwa", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_DongUi", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Y</Col><Col id=\"CODE_NM\">동의</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"CODE_NM\">비동의</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_YN", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_GogyoGyeyeol", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_GogyoJolub", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_DaehakJolub", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_PyeongJeom", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_JeonHyeongRyo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_HoeCha", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_HakgwaMaster", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJuyaMaster", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTemp", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONHYEONG_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"SEBUJEONHYEONG_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"SUHEOMSAENG_NM\" type=\"STRING\" size=\"40\"/><Column id=\"RES_NO1\" type=\"STRING\" size=\"6\"/><Column id=\"RES_NO2\" type=\"STRING\" size=\"100\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"8\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"NAEOEGUKIN_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"POST\" type=\"STRING\" size=\"6\"/><Column id=\"JUSO_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JUSO\" type=\"STRING\" size=\"500\"/><Column id=\"SANGSE_JUSO\" type=\"STRING\" size=\"500\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"50\"/><Column id=\"HP_NO\" type=\"STRING\" size=\"15\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"15\"/><Column id=\"CHUGA_YEONRAKCHEO\" type=\"STRING\" size=\"15\"/><Column id=\"GOGYO_CD\" type=\"STRING\" size=\"10\"/><Column id=\"GOGYO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHULSIN_GOGYO_CD\" type=\"STRING\" size=\"10\"/><Column id=\"GOGYOGYEYEOL_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"GOGYOJOLEOP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"GOGYOJOLEOP_YEJEONG_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"GEOMJEONGGOSI_CD\" type=\"STRING\" size=\"10\"/><Column id=\"GEOMJEONGGOSI_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GEOMJEONGGOSI_HOECHA\" type=\"STRING\" size=\"10\"/><Column id=\"AVG_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HAPGYEOK_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"DONGUI_NO\" type=\"STRING\" size=\"20\"/><Column id=\"CHULSIN_DAEHAK_NM\" type=\"STRING\" size=\"200\"/><Column id=\"DAEHAKJOLEOP_YEJEONG_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"DAEHAKJOLEOP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"CHONGISU_HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PYEONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GIJUN_PYEONGJEOM\" type=\"STRING\" size=\"256\"/><Column id=\"CHONGDEUNGGEUP\" type=\"STRING\" size=\"10\"/><Column id=\"BANK_NM\" type=\"STRING\" size=\"50\"/><Column id=\"GYEJWA_NO\" type=\"STRING\" size=\"50\"/><Column id=\"YEGEUMJU\" type=\"STRING\" size=\"40\"/><Column id=\"YEGEUMJU_GWANGYE\" type=\"STRING\" size=\"20\"/><Column id=\"SUJIP_DONGUI_YN\" type=\"STRING\" size=\"2\"/><Column id=\"GOYUSIKBYEOL_INFO_DONGUI_YN\" type=\"STRING\" size=\"2\"/><Column id=\"INFO_WITAK_DONGUI_YN\" type=\"STRING\" size=\"2\"/><Column id=\"INFO_3JA_JEGONG_DONGUI_YN\" type=\"STRING\" size=\"2\"/><Column id=\"NAEYONG_HWAKIN_YN\" type=\"STRING\" size=\"2\"/><Column id=\"SEORYU_JECHUL_YN\" type=\"STRING\" size=\"2\"/><Column id=\"HAPGYEOK_YN\" type=\"STRING\" size=\"2\"/><Column id=\"HAPGYEOK_DT\" type=\"STRING\" size=\"8\"/><Column id=\"JEONHYEONGRYONAPBU_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JEOPSUJA1\" type=\"STRING\" size=\"10\"/><Column id=\"JEOPSUJA2\" type=\"STRING\" size=\"10\"/><Column id=\"JEOPSU_DT\" type=\"STRING\" size=\"8\"/><Column id=\"DELETE_YN\" type=\"STRING\" size=\"2\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"500\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"500\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_13_05_00_01_00_01_01",null,"300","217","28","370",null,null,null,null,null,this);
            obj.set_taborder("151");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_05_01",null,"131","592","28","618",null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"42","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSearchJuyaGbcd","800","9","100","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsJuya");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_04","722","9","68","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("주야구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_02","458","9","50","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("학과");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01","7","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("입시년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgwa","512","9","172","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("ds_Hakgwa");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","87","9","101","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_cssclass("point");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_01_00","897","9","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("수험번호");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchSuheomBunho","1018","9","119","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchName","1230","9","100","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_01_00_00","1110","9","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_02_00","226","10","70","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("모집구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchMojipGbcd","301","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsMojipGbcd");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02","685","1","56","40",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","1","27","40",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_01","189","1","56","40",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00","78","1","10","40",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","503","1","10","40",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_01","292","1","10","40",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00","422","1","56","40",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_01","20","1","1500","9",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","20","32","1500","9",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_02","901","1","56","40",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_02_00","1138","1","56","40",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","792","1","10","40",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","1009","1","10","40",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00","1221","1","10","40",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","0","77",null,null,"1240","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"191\"/><Column size=\"104\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"상태\"/><Cell col=\"1\" text=\"수험번호\"/><Cell col=\"2\" text=\"학과\"/><Cell col=\"3\" text=\"성명\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\" edittype=\"none\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:SUHEOM_NO\" editmaxlength=\"10\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:HAKGWA_NM\" editmaxlength=\"100\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:SUHEOMSAENG_NM\" editmaxlength=\"256\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","0","47",null,"32","1525",null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("원서접수내역");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_05",null,"77","592","28","618",null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02",null,"77","110","28","1100",null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("지원일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","110","46",null,"34","1450",null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00",null,"52","115","22","1098",null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("지원정보");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_05_00",null,"104","592","28","618",null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_00",null,"131","110","28","1100",null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("수험번호");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSuheombunho",null,"134","180","22","917",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_01",null,"104","110","28","1100",null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("학과/학부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbHakgwa",null,"107","180","22","917",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_innerdataset("ds_HakgwaMaster");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_01_00",null,"104","110","28","804",null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_text("전공");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbJeongong",null,"107","180","22","621",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_01_00_00",null,"131","110","28","804",null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_text("주야구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbJuyaGbcd",null,"134","180","22","621",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_innerdataset("dsJuyaMaster");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Calendar("calJinwonDt",null,"80","275","23","621",null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","300","42","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","69","1610","8",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01","400","141","30","630",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_text("30");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","520","42","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Spin("SpinJiwonYYYY",null,"80","93","22","1004",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01_00","1022","141","30","100",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_text("30");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00_00",null,"52","115","22","476",null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_text("인적사항");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_05_01_00",null,"77","588","28","0",null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_02",null,"77","90","28","498",null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtName",null,"80","100","22","395",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_enable("true");
            obj.set_maxlength("13");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_05_00_01",null,"104","588","28","0",null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_05_00_00_00",null,"131","588","28","0",null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJumin1",null,"80","140","22","160",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_enable("true");
            obj.set_maxlength("6");
            obj.set_inputtype("number");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_01_02",null,"104","90","28","498",null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_text("주소");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_01_01_01",null,"131","90","28","498",null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_01_00_01_00",null,"77","90","28","302",null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_text("주민등록번호");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJumin2",null,"80","140","22","3",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_enable("true");
            obj.set_maxlength("7");
            obj.set_inputtype("number");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","1471","74","36","32",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJuso1",null,"107","100","22","395",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJuso2",null,"107","171","22","147",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtjeonhwaBunho",null,"134","100","22","395",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_enable("true");
            obj.set_maxlength("15");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_01_01_01_00",null,"131","90","28","301",null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_text("휴대폰");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPhone",null,"134","100","22","199",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_enable("true");
            obj.set_maxlength("15");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_01_01_01_00_00",null,"131","90","28","105",null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_text("추가연락처");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAddPhone",null,"134","100","22","3",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_enable("true");
            obj.set_maxlength("15");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","1140","42","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","543","159","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_text("↑\r\n30\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00_00_00",null,"163","115","22","1098",null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_text("학력사항(고교)");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_05_00_00_00_00",null,"270","265","28","945",null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_05_01_00_00",null,"189","265","28","945",null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_05_00_01_00",null,"243","265","28","945",null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_02_00",null,"189","110","28","1100",null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_text("출신고교명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtChulsinGogyo",null,"192","120","22","977",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_01_02_00",null,"243","110","28","1100",null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_text("고교졸업구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_01_01_01_01",null,"270","110","28","1100",null,null,null,null,null,this);
            obj.set_taborder("97");
            obj.set_text("졸업(예정)년도");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGogyoJolubYYYY",null,"273","146","22","951",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_enable("true");
            obj.set_maxlength("4");
            this.addChild(obj.name, obj);

            obj = new Button("btnGogyo",null,"192","22","22","952",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("btn_WF_PopSrch");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbGogyoJolub",null,"246","146","22","951",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_innerdataset("ds_GogyoJolub");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00","430","181","1130","8",null,null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_05_00_01_00_00",null,"216","265","28","945",null,null,null,null,null,this);
            obj.set_taborder("99");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_01_02_00_00",null,"216","110","28","1100",null,null,null,null,null,this);
            obj.set_taborder("100");
            obj.set_text("고교계열구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbGogyoGyeyeol",null,"219","146","22","951",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_innerdataset("ds_GogyoGyeyeol");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01_01","695","159","30","100",null,null,null,null,null,null,this);
            obj.set_taborder("101");
            obj.set_text("30");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00_00_00_01",null,"163","145","22","772",null,null,null,null,null,this);
            obj.set_taborder("102");
            obj.set_text("학력사항(검정고시)");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_05_01_00_00_00",null,"189","297","28","618",null,null,null,null,null,this);
            obj.set_taborder("103");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_05_00_01_00_00_00",null,"216","297","28","618",null,null,null,null,null,this);
            obj.set_taborder("104");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_05_00_00_00_00_01",null,"243","297","28","618",null,null,null,null,null,this);
            obj.set_taborder("105");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_05_01_00_00_00_00",null,"270","297","28","618",null,null,null,null,null,this);
            obj.set_taborder("106");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_05_00_01_00_00_00_00",null,"297","297","28","618",null,null,null,null,null,this);
            obj.set_taborder("107");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_02_00_00",null,"189","110","28","805",null,null,null,null,null,this);
            obj.set_taborder("108");
            obj.set_text("검정고시명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_01_02_00_00_00",null,"216","110","28","805",null,null,null,null,null,this);
            obj.set_taborder("109");
            obj.set_text("합격년도");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_01_01_01_01_00",null,"243","110","28","805",null,null,null,null,null,this);
            obj.set_taborder("110");
            obj.set_text("평균점수");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_02_00_00_00",null,"268","110","28","805",null,null,null,null,null,this);
            obj.set_taborder("111");
            obj.set_text("회차");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_01_02_00_00_00_00",null,"295","110","30","805",null,null,null,null,null,this);
            obj.set_taborder("112");
            obj.set_text("동의번호");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGumjeongGosi",null,"192","155","22","646",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnGeomJeongGosi",null,"192","22","22","622",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WF_PopSrch");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHabgyeokYYYY",null,"219","180","22","621",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_enable("true");
            obj.set_maxlength("4");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPyeongGyunJumsu",null,"246","180","22","621",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_enable("true");
            obj.set_maxlength("4");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbHoeCha",null,"273","180","22","621",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_innerdataset("ds_HoeCha");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDonguiBunho",null,"301","180","22","621",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_enable("true");
            obj.set_maxlength("20");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00_00_00_01_00",null,"163","145","22","446",null,null,null,null,null,this);
            obj.set_taborder("113");
            obj.set_text("학력사항(대학졸업)");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_05_01_00_00_01",null,"189","588","28","0",null,null,null,null,null,this);
            obj.set_taborder("114");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_05_00_01_00_00_01","1052","216",null,"28","0",null,null,null,null,null,this);
            obj.set_taborder("115");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_05_00_00_00_00_01_00",null,"243","588","28","0",null,null,null,null,null,this);
            obj.set_taborder("116");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_02_00_00_01",null,"189","110","28","478",null,null,null,null,null,this);
            obj.set_taborder("117");
            obj.set_text("출신대학명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_01_02_00_00_01",null,"189","110","28","181",null,null,null,null,null,this);
            obj.set_taborder("118");
            obj.set_text("대학졸업구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_01_01_01_01_00_01",null,"216","110","28","478",null,null,null,null,null,this);
            obj.set_taborder("119");
            obj.set_text("졸업(예정)년도");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_01_02_00_00_00_00_00",null,"216","110","28","181",null,null,null,null,null,this);
            obj.set_taborder("120");
            obj.set_text("이수학점");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_01_01_01_01_00_00_01",null,"243","110","28","478",null,null,null,null,null,this);
            obj.set_taborder("121");
            obj.set_text("평점");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_font("8pt \"Arial\" bold");
            this.addChild(obj.name, obj);

            obj = new Edit("edtChulsinDaehak",null,"192","181","22","294",null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_enable("true");
            obj.set_maxlength("66");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00_01_02_00_00_00",null,"192","175","22","3",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_innerdataset("ds_DaehakJolub");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJolubYYYY",null,"219","181","22","294",null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_enable("true");
            obj.set_maxlength("4");
            this.addChild(obj.name, obj);

            obj = new Edit("edtIsuHakjeom",null,"219","175","22","3",null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_enable("true");
            obj.set_maxlength("3");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPyeongJeom1",null,"246","80","22","395",null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_enable("true");
            obj.set_maxlength("3");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00",null,"239","36","32","367",null,null,null,null,null,this);
            obj.set_taborder("122");
            obj.set_text("/");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Combo("edtPyeongJeom2",null,"246","80","22","294",null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_innerdataset("ds_PyeongJeom");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00","840","325","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("123");
            obj.set_text("↑\r\n30\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00","430","347","1130","8",null,null,null,null,null,null,this);
            obj.set_taborder("124");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00_00_00_00_00_01",null,"330","115","22","1097",null,null,null,null,null,this);
            obj.set_taborder("125");
            obj.set_text("정보동의");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_05_00_01_01",null,"355","1210","28","0",null,null,null,null,null,this);
            obj.set_taborder("126");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_05_00_00_00_01",null,"382","1210","28","0",null,null,null,null,null,this);
            obj.set_taborder("127");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_01_01_01_01_01_00_00_00_00",null,"355","170","28","1040",null,null,null,null,null,this);
            obj.set_taborder("128");
            obj.set_text("개인정보 수집 및 이용");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoDongui1",null,"357","110","22","926",null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_direction("vertical");
            obj.set_innerdataset("ds_DongUi");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_cssclass("point");
            obj.set_text("예");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_01_01_01_01_01_00_00_00_00_00",null,"382","170","28","1040",null,null,null,null,null,this);
            obj.set_taborder("129");
            obj.set_text("개인정보취급 위탁");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoDongui3",null,"384","110","22","927",null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_direction("vertical");
            obj.set_innerdataset("ds_DongUi");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_cssclass("point");
            obj.set_text("예");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_01_01_01_01_01_00_00_00_00_01",null,"355","170","28","418",null,null,null,null,null,this);
            obj.set_taborder("130");
            obj.set_text("고유식별정보 수집 및 이용");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoDongui2",null,"357","110","22","302",null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_direction("vertical");
            obj.set_innerdataset("ds_DongUi");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_cssclass("point");
            obj.set_text("예");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_01_01_01_01_01_00_00_00_00_00_00",null,"382","170","28","418",null,null,null,null,null,this);
            obj.set_taborder("131");
            obj.set_text("개인정보 제3자 제공");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoDongui4",null,"384","110","22","303",null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_direction("vertical");
            obj.set_innerdataset("ds_DongUi");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_cssclass("point");
            obj.set_text("예");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_05_01_00_01_00",null,"440","592","28","618",null,null,null,null,null,this);
            obj.set_taborder("132");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_05_00_01_00_01_00",null,"467","592","28","618",null,null,null,null,null,this);
            obj.set_taborder("133");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00_00_00_00_00_00",null,"415","115","22","1098",null,null,null,null,null,this);
            obj.set_taborder("134");
            obj.set_text("은행계좌");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_01_01_01_01_00_00_00_00",null,"467","90","28","1120",null,null,null,null,null,this);
            obj.set_taborder("135");
            obj.set_text("계좌번호");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_01_01_01_01_00_00_02",null,"440","90","28","1120",null,null,null,null,null,this);
            obj.set_taborder("136");
            obj.set_text("은행명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEunhaengNm",null,"443","274","22","844",null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_enable("true");
            obj.set_maxlength("16");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGyegwaBunho",null,"470","274","22","844",null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_enable("true");
            obj.set_maxlength("30");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_01_01_01_01_00_00_02_00",null,"440","90","28","752",null,null,null,null,null,this);
            obj.set_taborder("137");
            obj.set_text("예금주");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_01_01_01_01_00_00_00_00_00",null,"467","90","28","752",null,null,null,null,null,this);
            obj.set_taborder("138");
            obj.set_text("관계");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtYegumju",null,"443","129","22","621",null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_enable("true");
            obj.set_maxlength("13");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGwangye",null,"470","129","22","621",null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_enable("true");
            obj.set_maxlength("6");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00","1149","410","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("139");
            obj.set_text("↑\r\n30\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","430","432","1130","8",null,null,null,null,null,null,this);
            obj.set_taborder("140");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01_01_00","1022","416","30","100",null,null,null,null,null,null,this);
            obj.set_taborder("141");
            obj.set_text("30");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00_00_00_00_00",null,"415","115","22","476",null,null,null,null,null,this);
            obj.set_taborder("142");
            obj.set_text("전형료");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_05_01_00_01",null,"440","588","28","0",null,null,null,null,null,this);
            obj.set_taborder("143");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_05_00_01_00_01",null,"467","588","28","0",null,null,null,null,null,this);
            obj.set_taborder("144");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_01_01_01_01_01_01",null,"440","110","28","478",null,null,null,null,null,this);
            obj.set_taborder("145");
            obj.set_text("전형료납부구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_01_01_01_01_01_00_00",null,"467","110","28","478",null,null,null,null,null,this);
            obj.set_taborder("146");
            obj.set_text("위내용확인여부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbNapbuGbcd",null,"443","130","22","346",null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_innerdataset("ds_JeonHyeongRyo");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoHwakinYN",null,"469","110","22","364",null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_direction("vertical");
            obj.set_innerdataset("ds_DongUi");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_cssclass("point");
            obj.set_text("예");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_02_01",null,"440","70","28","274",null,null,null,null,null,this);
            obj.set_taborder("147");
            obj.set_text("접수자1");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJubsuja1",null,"443","100","22","171",null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_enable("true");
            obj.set_maxlength("3");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_02_01_00",null,"440","70","28","99",null,null,null,null,null,this);
            obj.set_taborder("148");
            obj.set_text("접수자2");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJubsuja2",null,"443","93","22","3",null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_enable("true");
            obj.set_password("false");
            obj.set_maxlength("3");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00_00_00_00_00_02",null,"275","115","22","475",null,null,null,null,null,this);
            obj.set_taborder("149");
            obj.set_text("서류제출");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_01_01_01_01_01_01_00",null,"300","90","28","497",null,null,null,null,null,this);
            obj.set_taborder("150");
            obj.set_text("제출여부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbJechul",null,"303","122","22","373",null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_innerdataset("ds_YN");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbJiwonGbcd",null,"80","102","22","899",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_innerdataset("dsMojipGbcd");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJuso3",null,"107","140","22","3",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_enable("true");
            obj.set_maxlength("166");
            this.addChild(obj.name, obj);

            obj = new Button("btnJuso",null,"107","71","22","321",null,null,null,null,null,this);
            obj.set_taborder("152");
            obj.set_text("주소검색");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_01","1160","270","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("153");
            obj.set_text("↑\r\n30\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_01","1060","292","200","8",null,null,null,null,null,null,this);
            obj.set_taborder("154");
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
            obj.set_description("9월입학접수관리");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.cboSearchJuyaGbcd","value","ds_input","JUYA_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.spnSearchYYYY","value","ds_input","IPSI_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboSearchHakgwa","value","ds_input","HAKGWA_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edtName","value","dsMaster","SUHEOMSAENG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edtJuso1","value","dsMaster","POST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edtJuso2","value","dsMaster","JUSO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edtjeonhwaBunho","value","dsMaster","TEL_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edtPhone","value","dsMaster","HP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edtAddPhone","value","dsMaster","CHUGA_YEONRAKCHEO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edtChulsinGogyo","value","dsMaster","GOGYO_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edtGogyoJolubYYYY","value","dsMaster","GOGYOJOLEOP_YEJEONG_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","edtGumjeongGosi","value","dsMaster","GEOMJEONGGOSI_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","edtHabgyeokYYYY","value","dsMaster","HAPGYEOK_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","edtPyeongGyunJumsu","value","dsMaster","AVG_JEOMSU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","edtDonguiBunho","value","dsMaster","DONGUI_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","edtChulsinDaehak","value","dsMaster","CHULSIN_DAEHAK_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","edtJolubYYYY","value","dsMaster","DAEHAKJOLEOP_YEJEONG_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","edt1_01_00_01_01_00","value","dsMaster","DANCHE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","edt1_01_00_01_01_00_00","value","dsMaster","DANCHE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","edtJumin1","value","dsMaster","RES_NO1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","edtJumin2","value","dsMaster","RES_NO2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","edtEunhaengNm","value","dsMaster","BANK_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","edtGyegwaBunho","value","dsMaster","GYEJWA_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","edtYegumju","value","dsMaster","YEGEUMJU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","edtGwangye","value","dsMaster","YEGEUMJU_GWANGYE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","rdoHwakinYN","value","dsMaster","NAEYONG_HWAKIN_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","rdo_00_00","value","dsMaster","HYEONJAE_MOJIP_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","rdoDongui1","value","dsMaster","SUJIP_DONGUI_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","rdoDongui3","value","dsMaster","INFO_WITAK_DONGUI_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","rdo_00_00_01","value","dsMaster","HYEONJAE_MOJIP_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","rdoDongui2","value","dsMaster","GOYUSIKBYEOL_INFO_DONGUI_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","rdoDongui4","value","dsMaster","INFO_3JA_JEGONG_DONGUI_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","edtJubsuja1","value","dsMaster","JEOPSUJA1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","edtJubsuja2","value","dsMaster","JEOPSUJA2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divSearch.form.edtSearchSuheomBunho","value","ds_input","SUHEOM_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divSearch.form.edtSearchName","value","ds_input","SUHEOMSAENG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","cmbHakgwa","readonly","dsBindableComp","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","cmbJuyaGbcd","readonly","dsBindableComp","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","SpinJiwonYYYY","value","dsMaster","IPSI_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","cmbJiwonGbcd","value","dsMaster","MOJIP_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","calJinwonDt","value","dsMaster","JEOPSU_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","cmbHakgwa","value","dsMaster","HAKGWA_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","edtSuheombunho","value","dsMaster","SUHEOM_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","cmbJuyaGbcd","value","dsMaster","JUYA_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","cmbGogyoGyeyeol","value","dsMaster","GOGYOGYEYEOL_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","cmbGogyoJolub","value","dsMaster","GOGYOJOLEOP_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","cmbHoeCha","value","dsMaster","GEOMJEONGGOSI_HOECHA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","Combo00_01_02_00_00_00","value","dsMaster","DAEHAKJOLEOP_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","edtIsuHakjeom","value","dsMaster","CHONGISU_HAKJEOM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","edtPyeongJeom1","value","dsMaster","PYEONGJEOM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","edtPyeongJeom2","tooltiptext","dsMaster","GIJUN_PYEONGJEOM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","cmbNapbuGbcd","value","dsMaster","JEONHYEONGRYONAPBU_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","cmbJechul","value","dsMaster","SEORYU_JECHUL_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item62","edtJuso3","value","dsMaster","SANGSE_JUSO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divSearch.form.cboSearchMojipGbcd","value","ds_input","MOJIP_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
            this._addPreloadList("data","","dsTemp");
        };
        
        // User Script
        this.registerScript("ES01_1040102_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): ES01_1040102_M.xfdl(9월입학접수관리)
        * 작 성         일 명: 백재인
        * 작 성         일 자: 2021/04/30
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
        this.lvchkColidDs   = "HAKGWA_CD$JUYA_GBCD$SUHEOMSAENG_NM$RES_NO1$RES_NO2$SUJIP_DONGUI_YN$GOYUSIKBYEOL_INFO_DONGUI_YN$INFO_WITAK_DONGUI_YN$INFO_3JA_JEGONG_DONGUI_YN$NAEYONG_HWAKIN_YN";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs = "학과$주야구분$성명$주민등록번호$주민등록번호$개인 정보 수집 및 이용에 관한 동의$고유식별 정보 수집 및 이용에 대한 동의$개인정보 취급 위탁에 대한 동의$개인정보 제 3자 제공에 대한 동의$위 내용 확인 여부";
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
            var strDs    = "dsMojipGbcd|dsJuya|dsJuyaMaster|ds_Hakgwa|ds_HakgwaMaster|ds_YN|ds_GogyoGyeyeol|ds_GogyoJolub|ds_DaehakJolub|ds_PyeongJeom|ds_JeonHyeongRyo|ds_HoeCha";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "01028|00003|00003|01029|01029|01032|01008|01009|01011|01012|01013|01010";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "T|T|S|T|S|S|S|S|S|S|S|S";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = "";                                      // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId    = "Init";

                // gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
                // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.

            this.gfn_CmmnMultiComboLoad(strDs
                                      , strLgcd
                                      , strComb
                                      , strOptn
                                      , svcId);

        	this.dsBindableComp.setColumn(0, "bReadonly",	"true");
        };

        /**
         *      기준년도 조회
         */
        this.fn_PostformInit = function()
        {
        	var strSvc      = "";
            var strUrl      = "/prj/ES/ES_COMMON/Retrieve_GIJUN_YYYY.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "ds_gijunYyyy=ds_gijunYyyy";
            var strArg      = "";
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = false;                                   //샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);

        	this.ds_input.setColumn(0, "IPSI_YYYY", this.ds_gijunYyyy.getColumn(0, "IPSI_YYYY"));
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
                    case "Init":
                            this.fn_PostformInit();
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
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "GOGYO_CD", sRtn[0]);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "GOGYO_NM", sRtn[1]);
        				}
        			break;
        		case "geomjeonggosi" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "GEOMJEONGGOSI_CD", sRtn[0]);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "GEOMJEONGGOSI_NM", sRtn[1]);
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
                case "new" :         // 신규
                        this.fn_New();
                    break;
                case "del" :         // 삭제
                        this.fn_Del();
                    break;
                case "save" :        // 저장
                        this.fn_Save();
                    break;
                case "tmp1" :        // 접수내역 수정
                         this.fn_Update();
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
        	if (this.gfn_isNull(this.ds_input.getColumn(0, "IPSI_YYYY")))
        	{
        		this.gfn_alert("입시년도를 입력해주세요.","입력정보","","warning");
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
            var strUrl      = "/prj/ES/ES01/Retrieve_1040102_M.do";
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
        /**
         * 기능 : 추가 전 실행(기본체크사항)
         */
        this.fn_PreNew = function()
        {
        	var JEOPSU_FRDT = this.ds_gijunYyyy.getColumn(0, "JEOPSU_FRDT");
        	var JEOPSU_TODT = this.ds_gijunYyyy.getColumn(0, "JEOPSU_TODT");
        	var getDay = objApp.gds_SystemDate.getColumn(0,"YYYYMMDD");

        	if(JEOPSU_FRDT <= getDay && JEOPSU_TODT >= getDay)
        	{
        		return true;
        	}
        	else
        	{
        		this.alert("현재 모집기간이 아닙니다.");
        		return false;
        	}
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

        	this.dsBindableComp.setColumn(0, "bReadonly",	"false");

            var nRow = this.dsMaster.addRow();

        	this.dsMaster.setColumn(nRow, "IPSI_YYYY", this.ds_input.getColumn(0, "IPSI_YYYY"));
        	this.dsMaster.setColumn(nRow, "MOJIP_GBCD", "9");
        	this.dsMaster.setColumn(nRow, "JEONHYEONG_GBCD", "3");
        	this.dsMaster.setColumn(nRow, "SEBUJEONHYEONG_GBCD", "35");
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
            var strUrl      = "/prj/ES/ES01/Delete_1040102_M.do";
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
            var result      = this.gfn_cmmnChkEssentialItem(this.dsMaster, this.lvchkColidDs, this.lvchkColNameDs, "", chkFocusFlg, this);

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
            var strUrl      = "/prj/ES/ES01/Save_1040102_M.do";
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
        	this.dsBindableComp.setColumn(0, "bReadonly",	"true");
        };
        /**********************************************************************
                09. 접수내역수정
        ***********************************************************************/
        /**
         * 기능 : 수정 실행
         */
        this.fn_Update = function()
        {
        	var JEOPSU_FRDT = this.ds_gijunYyyy.getColumn(0, "JEOPSU_FRDT");
        	var JEOPSU_TODT = this.ds_gijunYyyy.getColumn(0, "JEOPSU_TODT");
        	var getDay = objApp.gds_SystemDate.getColumn(0,"YYYYMMDD");
        	var rowNo = this.dsMaster.rowposition;

        	if(JEOPSU_FRDT <= getDay && JEOPSU_TODT >= getDay){
        		this.dsTemp.copyRow(0, this.dsMaster, rowNo);
        		this.dsMaster.deleteRow(rowNo);

        		var strSvc      = "Del";
        		var strUrl      = "/prj/ES/ES01/Delete_1040102_M.do";
        		var strInDs     = "dsMaster=dsMaster:u";
        		var strOutDs    = "";
        		var strArg      = "";
        		var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        		var strASync    = false;                                   //샏략이나 공백일시에는 ASync=true,싱크시는 false로
        		this.gfn_Transaction(strSvc
        						   , strUrl
        						   , strInDs
        						   , strOutDs
        						   , strArg
        						   , strCallBack
        						   , strASync);

        		this.dsBindableComp.setColumn(0, "bReadonly",	"false");

        		var nRow = this.dsMaster.addRow();
        		this.dsMaster.copyRow(nRow, this.dsTemp, 0);

        		this.dsMaster.setColumn(nRow, "SUHEOM_NO", "");
         		this.dsMaster.setColumn(nRow, "HAKGWA_CD", "");
        		this.dsMaster.setColumn(nRow, "HAKGWA_NM", "");
         		this.dsMaster.setColumn(nRow, "JEONGONG_CD", "");
         		this.dsMaster.setColumn(nRow, "JUYA_GBCD", "");
        	}
        	else
        	{
        		this.alert("모집기간이 아니므로 접수 내역을 수정 하실 수 없습니다.");
        		return;
        	}
        };

        /**********************************************************************
                10. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj,e)
        {
            this.gfn_gridSort(obj,e);
        };

        // 주소검색 버튼 클릭시
        this.btnJuso_onclick = function(obj,e)
        {
        	if(this.dsMaster.rowcount == 0)
        	{
        		this.alert("주소를 검색할 데이터가 존재하지 않습니다.");
        	}
        	else
        	{
        		this.gfn_searchPost(this, searchPost);
        	}
        };

        this.postWebbrowser_close = function (obj,e) {
        	if (e.userdata != 'close') {
        		obj.user_callback(e.userdata);
        	} else {
        		obj.parent.removeChild('Post');
        		obj.destroy();
        		obj = null;
        	}
        };

        //주소 검색
        function searchPost(postData){
        	var addr	= "";
        	if (postData.userSelectedType == "R"){
        		// 도로명주소
        		addr = postData.roadAddress;
        		this.parent.dsMaster.setColumn(this.parent.dsMaster.rowposition,'JUSO_GBCD','Y');
        	}
        	else if (postData.userSelectedType == "J"){
        		// 지번주소
        		addr = postData.jibunAddress;
        		this.parent.dsMaster.setColumn(this.parent.dsMaster.rowposition,'JUSO_GBCD','N');
        	}

        	this.parent.edtJuso2.set_value(addr); // 도로명/지번 주소
        	this.parent.edtJuso1.set_value(postData.zonecode); // 우편번호 - 5자리
        };

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
            return this.gfn_isUpdate(this.dsMaster);
        };

        /**********************************************************************
                11. 팝업
        ***********************************************************************/

        // 출신고교명 버튼 클릭시
        this.btnGogyo_onclick = function(obj,e)
        {
        	var yyyy = this.ds_input.getColumn(this.ds_input.rowposition, "IPSI_YYYY");
        	var geomjeonggosi = "";
        	var oArg = {yyyy:yyyy, geomjeonggosi:geomjeonggosi};
        	var oOption = {};
        	var sPopupCallBack = "fn_popupCallback";
        	this.gfn_openPopup( "gogyo","EN01::EN01_1010106_T05P.xfdl",oArg,sPopupCallBack,oOption);
        };


        // 검정고시 버튼 클릭시
        this.btnGeomJeongGosi_onclick = function(obj,e)
        {
        	var yyyy = this.ds_input.getColumn(this.ds_input.rowposition, "IPSI_YYYY");
        	var geomjeonggosi = "100000001";
        	var oArg = {yyyy:yyyy, geomjeonggosi:geomjeonggosi};
        	var oOption = {};
        	var sPopupCallBack = "fn_popupCallback";
        	this.gfn_openPopup( "geomjeonggosi","EN01::EN01_1010106_T05P.xfdl",oArg,sPopupCallBack,oOption);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.divSearch.form.cboSearchJuyaGbcd.addEventHandler("onkeydown",this.divSearch_cboSearchSeunginSangtae_onkeydown,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onkeydown",this.divSearch_cboSearchSeunginSangtae_onkeydown,this);
            this.divSearch.form.cboSearchMojipGbcd.addEventHandler("onkeydown",this.divSearch_cboSearchSeunginSangtae_onkeydown,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
            this.btnGogyo.addEventHandler("onclick",this.btnGogyo_onclick,this);
            this.btnGeomJeongGosi.addEventHandler("onclick",this.btnGeomJeongGosi_onclick,this);
            this.rdoDongui1.addEventHandler("onitemchanged",this.rdo_00_onitemchanged,this);
            this.rdoDongui3.addEventHandler("onitemchanged",this.rdo_00_onitemchanged,this);
            this.rdoDongui2.addEventHandler("onitemchanged",this.rdo_00_onitemchanged,this);
            this.rdoDongui4.addEventHandler("onitemchanged",this.rdo_00_onitemchanged,this);
            this.rdoHwakinYN.addEventHandler("onitemchanged",this.rdo_00_onitemchanged,this);
            this.btnJuso.addEventHandler("onclick",this.btnJuso_onclick,this);
        };
        this.loadIncludeScript("ES01_1040102_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
