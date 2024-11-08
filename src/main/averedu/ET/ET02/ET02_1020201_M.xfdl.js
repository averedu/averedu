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
            this.set_titletext("방문접수관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_Juya", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PYEONIP_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"PYEONIP_MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JIWONHAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PYEONIP_HAKNYEON\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOMSAENG_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPyeonipHaknyeon", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PYEONIP_HAKNYEON\" type=\"STRING\" size=\"256\"/><Column id=\"PYEONIP_HAKNYEON_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pyeonipMojip", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PYEONIP_MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"PYEONIP_MOJIP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HYEONJAE_MOJIP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"JEOPSU_FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"JEOPSU_TODT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"PYEONIP_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"PYEONIP_MOJIP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"10\"/><Column id=\"JIWONHAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"PYEONIP_HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"SUHEOMSAENG_NM\" type=\"STRING\" size=\"40\"/><Column id=\"SUHEOMSAENG_ENG_NM\" type=\"STRING\" size=\"50\"/><Column id=\"RES_NO1\" type=\"STRING\" size=\"6\"/><Column id=\"RES_NO2\" type=\"STRING\" size=\"100\"/><Column id=\"RES_NO_OLD\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"8\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"NAEOEGUKIN_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"POST\" type=\"STRING\" size=\"6\"/><Column id=\"JUSO_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JUSO\" type=\"STRING\" size=\"500\"/><Column id=\"SANGSE_JUSO\" type=\"STRING\" size=\"500\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"50\"/><Column id=\"HP_NO\" type=\"STRING\" size=\"15\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"15\"/><Column id=\"CHUGA_YEONRAKCHEO1\" type=\"STRING\" size=\"15\"/><Column id=\"CHUGA_YEONRAKCHEO2\" type=\"STRING\" size=\"15\"/><Column id=\"CHULSIN_DAEHAK_NM\" type=\"STRING\" size=\"200\"/><Column id=\"CHULSIN_HAKGWA_NM\" type=\"STRING\" size=\"200\"/><Column id=\"CHULSIN_DAEHAK_GYEYEOL_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"2\"/><Column id=\"JOLEOP_DT\" type=\"STRING\" size=\"8\"/><Column id=\"JOLEOP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"DAEHAK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"CHONGISU_HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PYEONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GIJUN_PYEONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PYEONGJEOM_HWANSAN_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SUJIP_DONGUI_YN\" type=\"STRING\" size=\"2\"/><Column id=\"GOYUSIKBYEOL_INFO_DONGUI_YN\" type=\"STRING\" size=\"2\"/><Column id=\"INFO_WITAK_DONGUI_YN\" type=\"STRING\" size=\"2\"/><Column id=\"INFO_3JA_JEGONG_DONGUI_YN\" type=\"STRING\" size=\"2\"/><Column id=\"NAEYONG_HWAKIN_YN\" type=\"STRING\" size=\"2\"/><Column id=\"MYEONJEOP_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"MYEONJEOP_HWANSAN_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SILGI_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SILGI_HWANSAN_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHOECHOHAPGYEOK_YN\" type=\"STRING\" size=\"2\"/><Column id=\"HAPGYEOK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"HAPGYEOK_DT\" type=\"STRING\" size=\"8\"/><Column id=\"HAKGWABYEOL_SEOKCHA\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"YEBIHAPGYEOKHUBO_SEOKCHA\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BULHAPGYEOK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"BULHAPGYEOK_DT\" type=\"STRING\" size=\"8\"/><Column id=\"JEOPSU_DT\" type=\"STRING\" size=\"8\"/><Column id=\"DELETE_YN\" type=\"STRING\" size=\"2\"/><Column id=\"SUJEONG_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gijunYyyy", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Hakgwa", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Juya_sch", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Hakgwa_sch", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input2", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PYEONIP_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"PYEONIP_MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JIWONHAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PYEONIP_HAKNYEON\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pyeonipMojip_sch", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PYEONIP_MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"PYEONIP_MOJIP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HYEONJAE_MOJIP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"JEOPSU_FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"JEOPSU_TODT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_jeongongCd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UP_DEPT_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHaknyeon", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPyeonipHaknyeon_sch", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PYEONIP_HAKNYEON\" type=\"STRING\" size=\"256\"/><Column id=\"PYEONIP_HAKNYEON_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJoleopGbcd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDaehakGbcd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsChulsinDaehakGyeyeolGbcd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGijunPyeongjeom", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input3", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PYEONIP_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"PYEONIP_MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"RES_NO1\" type=\"STRING\" size=\"256\"/><Column id=\"RES_NO2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input4", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PYEONIP_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"PYEONIP_MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"RES_NO1\" type=\"STRING\" size=\"256\"/><Column id=\"RES_NO2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJiwonja", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"PYEONIP_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"PYEONIP_MOJIP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"10\"/><Column id=\"JIWONHAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"PYEONIP_HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"SUHEOMSAENG_NM\" type=\"STRING\" size=\"40\"/><Column id=\"SUHEOMSAENG_ENG_NM\" type=\"STRING\" size=\"50\"/><Column id=\"RES_NO1\" type=\"STRING\" size=\"6\"/><Column id=\"RES_NO2\" type=\"STRING\" size=\"100\"/><Column id=\"RES_NO_OLD\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"8\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"NAEOEGUKIN_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"POST\" type=\"STRING\" size=\"6\"/><Column id=\"JUSO_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JUSO\" type=\"STRING\" size=\"500\"/><Column id=\"SANGSE_JUSO\" type=\"STRING\" size=\"500\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"50\"/><Column id=\"HP_NO\" type=\"STRING\" size=\"15\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"15\"/><Column id=\"CHUGA_YEONRAKCHEO1\" type=\"STRING\" size=\"15\"/><Column id=\"CHUGA_YEONRAKCHEO2\" type=\"STRING\" size=\"15\"/><Column id=\"CHULSIN_DAEHAK_NM\" type=\"STRING\" size=\"200\"/><Column id=\"CHULSIN_HAKGWA_NM\" type=\"STRING\" size=\"200\"/><Column id=\"CHULSIN_DAEHAK_GYEYEOL_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"2\"/><Column id=\"JOLEOP_DT\" type=\"STRING\" size=\"8\"/><Column id=\"JOLEOP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"DAEHAK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"CHONGISU_HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PYEONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GIJUN_PYEONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PYEONGJEOM_HWANSAN_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SUJIP_DONGUI_YN\" type=\"STRING\" size=\"2\"/><Column id=\"GOYUSIKBYEOL_INFO_DONGUI_YN\" type=\"STRING\" size=\"2\"/><Column id=\"INFO_WITAK_DONGUI_YN\" type=\"STRING\" size=\"2\"/><Column id=\"INFO_3JA_JEGONG_DONGUI_YN\" type=\"STRING\" size=\"2\"/><Column id=\"NAEYONG_HWAKIN_YN\" type=\"STRING\" size=\"2\"/><Column id=\"MYEONJEOP_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"MYEONJEOP_HWANSAN_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SILGI_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SILGI_HWANSAN_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHOECHOHAPGYEOK_YN\" type=\"STRING\" size=\"2\"/><Column id=\"HAPGYEOK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"HAPGYEOK_DT\" type=\"STRING\" size=\"8\"/><Column id=\"HAKGWABYEOL_SEOKCHA\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"YEBIHAPGYEOKHUBO_SEOKCHA\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BULHAPGYEOK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"BULHAPGYEOK_DT\" type=\"STRING\" size=\"8\"/><Column id=\"JEOPSU_DT\" type=\"STRING\" size=\"8\"/><Column id=\"DELETE_YN\" type=\"STRING\" size=\"2\"/><Column id=\"SUJEONG_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJuya", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"42","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01","7","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("편입년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnPyeonipYyyy","86","9","81","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("point");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01","167","0","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","270","1","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_02_00","202","9","70","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("모집구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboPyeonipMojip","280","9","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_innerdataset("ds_pyeonipMojip_sch");
            obj.set_codecolumn("PYEONIP_MOJIP_GBCD");
            obj.set_datacolumn("PYEONIP_MOJIP_NM");
            obj.set_cssclass("point");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00","390","0","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_02_00_00","427","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("학부/학과");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","501","1","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboHakgwa","511","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_innerdataset("ds_Hakgwa_sch");
            obj.set_codecolumn("HAKGWA_CD");
            obj.set_datacolumn("HAKGWA_NM");
            obj.set_cssclass("point");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00_00","631","0","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_02_00_00_00","667","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("주야구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboJuya","745","9","90","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_innerdataset("ds_Juya_sch");
            obj.set_codecolumn("JUYA_GBCD");
            obj.set_datacolumn("JUYA_GBNM");
            obj.set_cssclass("point");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","735","1","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_02_00_00_00_00","872","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("학년");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00_00_00","835","0","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00","915","1","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboPyeonipHaknyeon","925","9","90","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_innerdataset("dsPyeonipHaknyeon_sch");
            obj.set_codecolumn("PYEONIP_HAKNYEON");
            obj.set_datacolumn("PYEONIP_HAKNYEON_NM");
            obj.set_cssclass("point");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00_00_00_00","1015","0","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_02_00_00_00_00_00","1051","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("수험번호");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchSuheomNo","1129","9","90","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_maxlength("10");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00","1119","0","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00_00_00_00_00","1219","0","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_02_00_00_00_00_00_00","1254","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchNm","1307","9","90","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("25");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00_00","1297","0","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("26");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01","76","0","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("27");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_01","0","0","1400","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("28");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_01_00","0","31","1400","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("29");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Grid("grdMaster","0","87","522",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsMaster");
            obj.set_cellsizingtype("col");
            obj.set_autosizingtype("none");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"66\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"상태\"/><Cell col=\"1\" text=\"수험번호\"/><Cell col=\"2\" text=\"지원자명\"/><Cell col=\"3\" text=\"학부/학과\"/><Cell col=\"4\" text=\"주야구분\"/><Cell col=\"5\" text=\"접수일시\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:SUHEOM_NO\"/><Cell col=\"2\" text=\"bind:SUHEOMSAENG_NM\"/><Cell col=\"3\" text=\"bind:JIWONHAKGWA_CD\" displaytype=\"combotext\" combodataset=\"ds_Hakgwa_sch\" combocodecol=\"HAKGWA_CD\" combodatacol=\"HAKGWA_NM\"/><Cell col=\"4\" text=\"bind:JUYA_GBCD\" displaytype=\"combotext\" combodataset=\"dsJuya\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"5\" text=\"bind:JEOPSU_DT\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","77","55","73","34",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","0","57","70","32",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("수험생");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","390","42","100","45",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("↑\r\n45\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","553","62","155","22",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("수험생 지원정보");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_1","553","87","433","28",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_1_00","553","114","433","28",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_1_00_00","553","141","433","28",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2","553","87","90","28",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("편입년도");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_00","553","114","90","28",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("학과/학부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_00_00","553","141","90","28",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("주야구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_01","773","87","90","28",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("모집구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_00_01","773","114","90","28",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("전공");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_00_00_00","773","141","90","28",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("학년");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_1_01","553","204","883","28",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_1_00_01","553","stc_1_01:-1","883","28",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_1_00_00_00","553","258","883","28",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_02","553","204","90","28",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("출신학교");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_00_02","553","231","90","28",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("졸업 및 수료");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_00_00_01","553","258","90","28",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("총이수학점");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_1_00_00_01","553","320","883","28",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_1_00_00_01_00","553","347","883","28",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_1_00_00_01_00_00","553","374","883","28",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_1_00_00_01_00_00_00","553","401","883","28",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_1_00_00_01_00_00_00_00","553","428","883","28",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_02_00","833","204","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("출신학과");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_00_02_00","833","231","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("졸업구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_00_00_01_00","833","258","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("평점");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_02_00_00","1143","204","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("학년");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_00_02_00_00","1143","231","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("대학구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_00_00_01_00_00","1143","258","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_text("대학계열");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_00_00_02","553","320","90","28",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("지원자명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_00_00_02_00","553","347","90","28",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("주소");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_00_00_02_00_00","553","374","90","28",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_text("상세주소");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_00_00_02_00_00_00","553","401","90","28",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_00_00_02_00_00_00_00","553","428","90","28",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_text("추가연락처1");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Spin("spnPyeonipYyyy","647","90","122","22",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Combo("cboPyeonipMojip","867","90","114","22",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_pyeonipMojip");
            obj.set_codecolumn("PYEONIP_MOJIP_GBCD");
            obj.set_datacolumn("PYEONIP_MOJIP_NM");
            obj.set_readonly("true");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Combo("cboHakgwa","647","117","122","22",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_Hakgwa");
            obj.set_codecolumn("HAKGWA_CD");
            obj.set_datacolumn("HAKGWA_NM");
            obj.set_cssclass("point");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cboJeongongCd","867","116","114","22",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_innerdataset("ds_jeongongCd");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            this.addChild(obj.name, obj);

            obj = new Combo("cboJuya","647","143","122","22",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_innerdataset("ds_Juya");
            obj.set_codecolumn("JUYA_GBCD");
            obj.set_datacolumn("JUYA_GBNM");
            obj.set_cssclass("point");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cboPyeonipHaknyeon","867","143","114","22",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_innerdataset("dsPyeonipHaknyeon");
            obj.set_codecolumn("PYEONIP_HAKNYEON");
            obj.set_datacolumn("PYEONIP_HAKNYEON_NM");
            obj.set_cssclass("point");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edtChulsinDaehakNm","647","207","182","22",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_maxlength("65");
            this.addChild(obj.name, obj);

            obj = new Edit("edtChulsinHakgwaNm","937","207","202","22",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_maxlength("65");
            this.addChild(obj.name, obj);

            obj = new Combo("cboHaknyeon","1247","207","184","22",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_innerdataset("dsHaknyeon");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Calendar("calJoleupDt","647","234","182","22",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Combo("cboJoleopGbcd","937","234","202","22",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_innerdataset("dsJoleopGbcd");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            this.addChild(obj.name, obj);

            obj = new Combo("cboDaehakGbcd","1247","234","184","22",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_innerdataset("dsDaehakGbcd");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cboChulsinDaehakGyeyeolGbcd","1247","261","184","22",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_innerdataset("dsChulsinDaehakGyeyeolGbcd");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edtChongisuHakjeom","647","261","182","22",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_maxlength("3");
            obj.set_inputtype("digit");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPyeongjeom","938","261","82","22",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_maxlength("4");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Combo("cboGijunPyeongjeom","1046","261","93","22",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_innerdataset("dsGijunPyeongjeom");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","1018","257","29","31",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_text("/");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSuheomsaengNm","647","323","182","22",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_maxlength("11");
            obj.set_inputtype("normal");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_00_00_02_01","833","320","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_text("영문명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_00_00_02_01_00","1143","320","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_text("주민등록번호");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSuheomsaengEngNm","937","323","202","22",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_maxlength("40");
            obj.set_inputtype("english");
            this.addChild(obj.name, obj);

            obj = new Edit("edtResNo1","1247","323","74","22",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_maxlength("6");
            obj.set_inputtype("digit");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Edit("edtResNo2","1351","323","80","22",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_maxlength("7");
            obj.set_inputtype("digit");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","1323","319","29","31",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPost","647","350","182","22",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_inputtype("normal");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJuso","937","350","494","22",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_maxlength("132");
            obj.set_inputtype("normal");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSangseJuso","647","377","784","22",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_maxlength("132");
            obj.set_inputtype("normal");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEmail","647","404","183","22",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_maxlength("50");
            obj.set_inputtype("normal");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_00_00_02_01_01","833","401","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_text("자택전화번호");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_00_00_02_01_01_00","1143","401","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_text("휴대폰");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtTelNo","937","404","203","22",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_maxlength("15");
            obj.set_inputtype("normal");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHpNo","1247","404","183","22",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_maxlength("15");
            obj.set_inputtype("normal");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_00_00_02_00_00_00_00_00","833","428","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_text("추가연락처2");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtChugaYeonrakcheo1","647","431","183","22",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_maxlength("15");
            obj.set_inputtype("normal");
            this.addChild(obj.name, obj);

            obj = new Edit("edtChugaYeonrakcheo2","937","431","203","22",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_maxlength("15");
            obj.set_inputtype("normal");
            this.addChild(obj.name, obj);

            obj = new Static("stc_1_00_00_01_01","553","491","883","28",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_4_1","553","491","170","28",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_text("최초합격여부 확인");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_4_1_00","853","491","160","28",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_text("개인정보 수집 및 이용");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_4_1_00_00","1153","491","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_text("개인정보취급 위탁");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_1_00_00_01_01_00","553","518","883","28",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_4_1_01","553","518","170","28",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_text("고유식별정보 수집 및 이용");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_4_1_01_00","853","518","160","28",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_text("개인정보 제 3자 제공");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_4_naeyongHwakinYn","1153","518","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_text("위 내용 확인 여부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoChoechohapgyeokYn","732","494","110","22",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_innerdataset("dsYn");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_direction("vertical");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoSujipDonguiYn","1027","494","110","22",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_innerdataset("dsYn");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_direction("vertical");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoInfoWitakDonguiYn","1314","494","110","22",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_innerdataset("dsYn");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_direction("vertical");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoGoyusikbyeolInfoDonguiYn","732","521","110","22",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_innerdataset("dsYn");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_direction("vertical");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoInfo3jaJegongDonguiYn","1027","521","110","22",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_innerdataset("dsYn");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_direction("vertical");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoInfo3jaJegongDonguiYn00","1314","521","110","22",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_innerdataset("dsYn");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_direction("vertical");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00_00","553","179","155","22",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_text("학력정보");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00_00_00","553","295","155","22",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_text("인적사항");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00_00_00_00","553","467","155","22",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_text("정보동의");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Button("btnJiwonUpdate","865","54","120","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("지원정보수정");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnJuso","833","350","101","22",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("주소검색");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","1","79","990","8",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","713","169","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00","553","196","310","8",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","713","286","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","713","456","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00","553","312","310","8",null,null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","553","483","310","8",null,null,null,null,null,null,this);
            obj.set_taborder("97");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01","523","81","30","630",null,null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_text("30");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","690","42","100","45",null,null,null,null,null,null,this);
            obj.set_taborder("99");
            obj.set_text("↑\r\n45\r\n↓");
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
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.spnPyeonipYyyy","value","ds_input","PYEONIP_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboSearchSeunginSangtae00_00","value","ds_input","HAKGWA_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboPyeonipMojip","value","ds_input","PYEONIP_MOJIP_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboHakgwa","value","ds_input","JIWONHAKGWA_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.cboJuya","value","ds_input","JUYA_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.cboPyeonipHaknyeon","value","ds_input","PYEONIP_HAKNYEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","spnPyeonipYyyy","value","dsMaster","PYEONIP_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","cboPyeonipMojip","value","dsMaster","PYEONIP_MOJIP_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","cboHakgwa","value","dsMaster","JIWONHAKGWA_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","cboJeongongCd","value","dsMaster","JEONGONG_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","cboJuya","value","dsMaster","JUYA_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","cboPyeonipHaknyeon","value","dsMaster","PYEONIP_HAKNYEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","edtChulsinDaehakNm","value","dsMaster","CHULSIN_DAEHAK_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","edtChulsinHakgwaNm","value","dsMaster","CHULSIN_HAKGWA_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","cboHaknyeon","value","dsMaster","HAKNYEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","calJoleupDt","value","dsMaster","JOLEOP_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","cboJoleopGbcd","value","dsMaster","JOLEOP_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","cboDaehakGbcd","value","dsMaster","DAEHAK_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","cboChulsinDaehakGyeyeolGbcd","value","dsMaster","CHULSIN_DAEHAK_GYEYEOL_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","edtChongisuHakjeom","value","dsMaster","CHONGISU_HAKJEOM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","edtPyeongjeom","value","dsMaster","PYEONGJEOM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","cboGijunPyeongjeom","value","dsMaster","GIJUN_PYEONGJEOM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","edtSuheomsaengNm","value","dsMaster","SUHEOMSAENG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divSearch.form.edtSearchSuheomNo","value","ds_input","SUHEOM_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divSearch.form.edtSearchNm","value","ds_input","SUHEOMSAENG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","edtSuheomsaengEngNm","value","dsMaster","SUHEOMSAENG_ENG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","edtResNo1","value","dsMaster","RES_NO1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","edtResNo2","value","dsMaster","RES_NO2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","edtPost","value","dsMaster","POST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","edtJuso","value","dsMaster","JUSO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","edtSangseJuso","value","dsMaster","SANGSE_JUSO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","edtEmail","value","dsMaster","EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","edtTelNo","value","dsMaster","TEL_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","edtHpNo","value","dsMaster","HP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","edtChugaYeonrakcheo1","value","dsMaster","CHUGA_YEONRAKCHEO1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","edtChugaYeonrakcheo2","value","dsMaster","CHUGA_YEONRAKCHEO2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","rdoChoechohapgyeokYn","value","dsMaster","CHOECHOHAPGYEOK_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","rdoSujipDonguiYn","value","dsMaster","SUJIP_DONGUI_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","rdoInfoWitakDonguiYn","value","dsMaster","INFO_WITAK_DONGUI_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","rdoGoyusikbyeolInfoDonguiYn","value","dsMaster","GOYUSIKBYEOL_INFO_DONGUI_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","rdoInfo3jaJegongDonguiYn","value","dsMaster","INFO_3JA_JEGONG_DONGUI_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","rdoInfo3jaJegongDonguiYn00","value","dsMaster","NAEYONG_HWAKIN_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
            this._addPreloadList("data","","dsJiwonja");
        };
        
        // User Script
        this.registerScript("ET02_1020201_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): ET02_1020201_M.xfdl(방문접수관리)
        * 작 성         일 명: 박경민
        * 작 성         일 자: 2021/04/21
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
        this.lvchkColidDs   = "PYEONIP_YYYY$PYEONIP_MOJIP_GBCD$JIWONHAKGWA_CD$JUYA_GBCD$PYEONIP_HAKNYEON$SUHEOMSAENG_NM$RES_NO1$RES_NO2";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs = "편입 년도$편입모집구분코드$지원학과$주야구분$학년$지원자명$주민번호(외국인번호)앞자리$주민번호(외국인번호)뒷자리";
        var GIJUN_YYYY;
        var HYEONJAE_MOJIP;
        var JEOPSU_FRDT;
        var JEOPSU_TODT;
        var selResult=false;
        var selYyyy;
        var selMojipGbcd;
        var objDate = new Date();
        var nYear = objDate.getYear();

        var today = new Date();
        var hh = today.getHours();
        var mi = today.getMinutes();
        var ss = today.getSeconds();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();
        if(dd < 10) dd = '0' + dd;
        if(mm < 10) mm = '0' + mm;
        if(hh < 10) hh = '0' + hh;
        if(mi < 10) mi = '0' + mi;
        if(ss < 10) ss = '0' + ss;
        var getDay = yyyy +''+ mm +''+ dd+''+hh+''+mi+''+ss;
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
            var strDs    = "dsHaknyeon|dsJoleopGbcd|dsDaehakGbcd|dsChulsinDaehakGyeyeolGbcd|dsGijunPyeongjeom|dsYn|dsJuya";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00060|01042|01043|01033|01012|00052|00003";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "S|S|S|S|S|X|X";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
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
        			case "GijunYyyy":
                            this.fn_PostGijunYyyy();
                        break;
        			case "SearchMojip":
                            this.fn_PostSearchMojip();
                        break;
        			case "InputMojip":
                            this.fn_PostInputMojip();
                        break;
        			case "SearchHakgwa":
                            this.fn_PostSearchHakgwa();
                        break;
        			case "InputHakgwa":
                            this.fn_PostInputHakgwa();
                        break;
        			case "SearchJuya":
                            this.fn_PostSearchJuya();
                        break;
        			case "InputJuya":
                            this.fn_PostInputJuya();
                        break;
        			case "SearchHaknyeon":
                            this.fn_PostSearchHaknyeon();
                        break;
        			case "InputHaknyeon":
                            this.fn_PostInputHaknyeon();
                        break;
        			case "Jeongong":
                            this.fn_PostJeongong();
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
            var strUrl      = "/prj/ET/ET02/Retrieve_1020201_M.do";
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
        	selYyyy = this.divSearch.form.spnPyeonipYyyy.value;
        	selMojipGbcd = this.divSearch.form.cboPyeonipMojip.value;
        	selResult = true;

            this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
        	this.pyeonipMojipInput(GIJUN_YYYY);

        	if(this.dsMaster.getColumn(this.dsMaster.rowposition, "JIWONHAKGWA_CD") == "1800")
        	{
        		this.cboJeongongCd.set_readonly(false);
        	}
        	else
        	{
        		this.cboJeongongCd.set_readonly(true);
        	}
        };

        /**********************************************************************
                06. 추가 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 추가 전 실행(기본체크사항)
         */
        this.fn_PreNew = function()
        {
        	if(!selResult){
        		this.alert("조회 후 추가해 주세요.");
        		return;
        	}

        	if(selMojipGbcd != HYEONJAE_MOJIP){
        		this.alert("현재 모집중인 모집만 추가가능합니다.\n 현재 모집년도와 모집구분을 조회 후 이용해 주세요.");
        		return;
        	}
        	if(selYyyy != GIJUN_YYYY){
        		this.alert("현재 모집중인 모집만 추가가능합니다.\n 현재 모집년도와 모집구분을 조회 후 이용해 주세요.");
        		return;
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

        	if(JEOPSU_FRDT <= getDay && JEOPSU_TODT >= getDay){
        		var nRow = this.dsMaster.addRow();
        		this.dsMaster.setColumn(nRow,"PYEONIP_YYYY",GIJUN_YYYY);
        		this.fn_InputMojip();

        		this.dsMaster.setColumn(nRow,'SUJIP_DONGUI_YN','Y');
        		this.dsMaster.setColumn(nRow,'GOYUSIKBYEOL_INFO_DONGUI_YN','Y');
        		this.dsMaster.setColumn(nRow,'INFO_WITAK_DONGUI_YN','Y');
        		this.dsMaster.setColumn(nRow,'INFO_3JA_JEGONG_DONGUI_YN','Y');
        		this.dsMaster.setColumn(nRow,'NAEYONG_HWAKIN_YN','Y');
        		this.dsMaster.setColumn(nRow,'CHOECHOHAPGYEOK_YN','Y');

        		this.cboHakgwa.set_index(0);
        		this.cboJuya.set_index(0);
        		this.cboPyeonipHaknyeon.set_index(0);
        		this.cboJeongongCd.set_index(0);
        	}
        	else
        	{
        		this.alert("현재 모집기간이 아닙니다.");
        		return;
        	}
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
            var strUrl      = "/prj/ET/ET02/Delete_1020201_M.do";
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

        	 var cnt = 0;
        	 for (var i = 0; i < this.dsMaster.rowcount; i++) {
        		if(this.dsMaster.getRowType(i) == 2 || this.dsMaster.getRowType(i) == 4){
        			if (this.gfn_isNull(this.dsMaster.getColumn(i, "SUJIP_DONGUI_YN")) ||
        				this.gfn_isNull(this.dsMaster.getColumn(i, "INFO_WITAK_DONGUI_YN")) ||
        				this.gfn_isNull(this.dsMaster.getColumn(i, "GOYUSIKBYEOL_INFO_DONGUI_YN")) ||
        				this.gfn_isNull(this.dsMaster.getColumn(i, "NAEYONG_HWAKIN_YN")) ||
        				this.gfn_isNull(this.dsMaster.getColumn(i, "INFO_3JA_JEGONG_DONGUI_YN")) ||
        				this.gfn_isNull(this.dsMaster.getColumn(i, "CHOECHOHAPGYEOK_YN"))) {
        				cnt++;
        			}
        		}
        	 }

        	 if (cnt != 0 ) {
        		this.gfn_alert("위 내용 확인여부와 정보 동의 항목을 모두 체크해주세요.","정보동의","","warning");
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
            var strUrl      = "/prj/ET/ET02/Save_1020201_M.do";
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
                10. 기타 Control Event
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

        //지원정보 수정
        this.btnJiwonUpdate_onclick = function(obj,e)
        {
        	var rowNo = this.dsMaster.rowposition;

        	if(JEOPSU_FRDT <= getDay && JEOPSU_TODT >= getDay)
        	{
        		this.edtResNo1.set_readonly(true);
        		this.edtResNo2.set_readonly(true);
        		this.cboHakgwa.set_readonly(false);
        		this.cboJuya.set_readonly(false);
        		this.cboPyeonipHaknyeon.set_readonly(false);
        		this.cboJeongongCd.set_readonly(false);
        	}
        	else
        	{
        		this.alert("현재 모집기간이 아닙니다.");
        	}
        };

        //지원학과 변경시(입력)
        this.cboHakgwa_onitemchanged = function(obj,e)
        {
        	if(obj.value == "1800")
        	{
        		this.cboJeongongCd.set_readonly(false);
        	}
        	else
        	{
        		this.cboJeongongCd.set_readonly(true);
        	}

        	this.fn_InputJuya();
        };

        //주야구분변경시(입력)
        this.cboJuya_onitemchanged = function(obj,e)
        {
        	this.fn_InputHaknyeon();
        };

        // 학생 선택시 로우타입별로 리드온리 설정
        this.dsMaster_onrowposchanged = function(obj,e)
        {
        	this.fn_InputMojip();

        	if(this.dsMaster.getRowType(this.dsMaster.rowposition) != Dataset.ROWTYPE_NORMAL)
        	{
        		this.cboHakgwa.set_readonly(false);
        		this.cboJeongongCd.set_readonly(false);
        		this.cboJuya.set_readonly(false);
        		this.cboPyeonipHaknyeon.set_readonly(false);
        		this.edtResNo1.set_readonly(false);
        		this.edtResNo2.set_readonly(false);
        	}
        	else
        	{
        		this.cboHakgwa.set_readonly(true);
        		this.cboJeongongCd.set_readonly(true);
        		this.cboJuya.set_readonly(true);
        		this.cboPyeonipHaknyeon.set_readonly(true);
        		this.edtResNo1.set_readonly(true);
        		this.edtResNo2.set_readonly(true);
        	}

        	if(this.dsMaster.getColumn(this.dsMaster.rowposition, "JIWONHAKGWA_CD") == "1800")
        	{
        		this.cboJeongongCd.set_readonly(false);
        	}
        	else
        	{
        		this.cboJeongongCd.set_readonly(true);
        	}
        };

        this.grdMaster_oncellclick = function(obj,e)
        {

        };

        //RES_NO1이 다 입력되었을 경우 포커스가 RES_NO2로 넘어가게 하는 이벤트
        this.edtResNo1_onkeyup = function(obj,e)
        {
        	if(obj.getLength() == 6){
        		this.edtResNo2.setFocus();
        	}
        };

        // 1차 편입 시기에 지원 정보가 있는지 확인
        this.dsMaster_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "RES_NO1" || e.columnid == "RES_NO2") {
        		if (obj.getColumn(obj.rowposition, "RES_NO1") + obj.getColumn(obj.rowposition, "RES_NO2") != obj.getColumn(obj.rowposition, "RES_NO_OLD")) {
        			//중복조회
        			this.ds_input3.setColumn(0, "PYEONIP_YYYY", obj.getColumn(obj.rowposition, "PYEONIP_YYYY"));
        			this.ds_input3.setColumn(0, "PYEONIP_MOJIP_GBCD", obj.getColumn(obj.rowposition, "PYEONIP_MOJIP_GBCD"));
        			this.ds_input3.setColumn(0, "RES_NO1", obj.getColumn(obj.rowposition, "RES_NO1"));
        			this.ds_input3.setColumn(0, "RES_NO2", obj.getColumn(obj.rowposition, "RES_NO2"));

        			var strSvc      = "1020201_M_05";
        			var strUrl      = "/prj/ET/ET02/Retrieve_1020201_M_05.do";
        			var strInDs     = "ds_inputOverlap=ds_input3";
        			var strOutDs    = "dsResult1=dsResult1";
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

        			if (this.dsResult1.getColumn(0, "CNT") == "0" &&
        					this.dsMaster.getRowType(this.dsMaster.rowposition) == 2 &&
        					this.dsMaster.getColumn(this.dsMaster.rowposition,"PYEONIP_MOJIP_GBCD") == 8)
        			{
        				this.ds_input4.setColumn(0, "PYEONIP_YYYY", obj.getColumn(obj.rowposition, "PYEONIP_YYYY"));
        				this.ds_input4.setColumn(0, "PYEONIP_MOJIP_GBCD", "7");
        				this.ds_input4.setColumn(0, "RES_NO1", obj.getColumn(obj.rowposition, "RES_NO1"));
        				this.ds_input4.setColumn(0, "RES_NO2", obj.getColumn(obj.rowposition, "RES_NO2"));

        				var strSvc      = "Retrieve_1020201_M";
        				var strUrl      = "/prj/ET/ET02/Retrieve_1020201_M.do";
        				var strInDs     = "ds_input=ds_input4";
        				var strOutDs    = "dsJiwonja=dsMaster";
        				var strArg      = "";
        				var GBV_MENUID    = objApp.gv_cutPrgId;
        				if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
        				{
        					strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
        				}
        				var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        				var strASync    = false;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
        				this.gfn_Transaction(strSvc
        								   , strUrl
        								   , strInDs
        								   , strOutDs
        								   , strArg
        								   , strCallBack
        								   , strASync);

        				if (this.dsJiwonja.rowcount > 0) {
        					this.dsMaster.setColumn(this.dsMaster.rowposition,"SUHEOMSAENG_NM",this.dsJiwonja.getColumn(0,"SUHEOMSAENG_NM"));
        					this.dsMaster.setColumn(this.dsMaster.rowposition,"SUHEOMSAENG_ENG_NM",this.dsJiwonja.getColumn(0,"SUHEOMSAENG_ENG_NM"));
        					this.dsMaster.setColumn(this.dsMaster.rowposition,"RES_NO1",this.dsJiwonja.getColumn(0,"RES_NO1"));
        					this.dsMaster.setColumn(this.dsMaster.rowposition,"RES_NO2",this.dsJiwonja.getColumn(0,"RES_NO2"));
        					this.dsMaster.setColumn(this.dsMaster.rowposition,"BIRTHDAY",this.dsJiwonja.getColumn(0,"BIRTHDAY"));
        					this.dsMaster.setColumn(this.dsMaster.rowposition,"GENDER",this.dsJiwonja.getColumn(0,"GENDER"));
        					this.dsMaster.setColumn(this.dsMaster.rowposition,"NAEOEGUKIN_GBCD",this.dsJiwonja.getColumn(0,"NAEOEGUKIN_GBCD"));
        					this.dsMaster.setColumn(this.dsMaster.rowposition,"POST",this.dsJiwonja.getColumn(0,"POST"));
        					this.dsMaster.setColumn(this.dsMaster.rowposition,"JUSO_GBCD",this.dsJiwonja.getColumn(0,"JUSO_GBCD"));
        					this.dsMaster.setColumn(this.dsMaster.rowposition,"JUSO",this.dsJiwonja.getColumn(0,"JUSO"));
        					this.dsMaster.setColumn(this.dsMaster.rowposition,"SANGSE_JUSO",this.dsJiwonja.getColumn(0,"SANGSE_JUSO"));
        					this.dsMaster.setColumn(this.dsMaster.rowposition,"EMAIL",this.dsJiwonja.getColumn(0,"EMAIL"));
        					this.dsMaster.setColumn(this.dsMaster.rowposition,"HP_NO",this.dsJiwonja.getColumn(0,"HP_NO"));
        					this.dsMaster.setColumn(this.dsMaster.rowposition,"TEL_NO",this.dsJiwonja.getColumn(0,"TEL_NO"));
        					this.dsMaster.setColumn(this.dsMaster.rowposition,"CHUGA_YEONRAKCHEO1",this.dsJiwonja.getColumn(0,"CHUGA_YEONRAKCHEO1"));
        					this.dsMaster.setColumn(this.dsMaster.rowposition,"CHUGA_YEONRAKCHEO2",this.dsJiwonja.getColumn(0,"CHUGA_YEONRAKCHEO2"));
        					this.dsMaster.setColumn(this.dsMaster.rowposition,"CHULSIN_DAEHAK_NM",this.dsJiwonja.getColumn(0,"CHULSIN_DAEHAK_NM"));
        					this.dsMaster.setColumn(this.dsMaster.rowposition,"CHULSIN_HAKGWA_NM",this.dsJiwonja.getColumn(0,"CHULSIN_HAKGWA_NM"));
        					this.dsMaster.setColumn(this.dsMaster.rowposition,"CHULSIN_DAEHAK_GYEYEOL_GBCD",this.dsJiwonja.getColumn(0,"CHULSIN_DAEHAK_GYEYEOL_GBCD"));
        					this.dsMaster.setColumn(this.dsMaster.rowposition,"HAKNYEON",this.dsJiwonja.getColumn(0,"HAKNYEON"));
        					this.dsMaster.setColumn(this.dsMaster.rowposition,"JOLEOP_DT",this.dsJiwonja.getColumn(0,"JOLEOP_DT"));
        					this.dsMaster.setColumn(this.dsMaster.rowposition,"JOLEOP_GBCD",this.dsJiwonja.getColumn(0,"JOLEOP_GBCD"));
        					this.dsMaster.setColumn(this.dsMaster.rowposition,"DAEHAK_GBCD",this.dsJiwonja.getColumn(0,"DAEHAK_GBCD"));
        					this.dsMaster.setColumn(this.dsMaster.rowposition,"CHONGISU_HAKJEOM",this.dsJiwonja.getColumn(0,"CHONGISU_HAKJEOM"));
        					this.dsMaster.setColumn(this.dsMaster.rowposition,"PYEONGJEOM",this.dsJiwonja.getColumn(0,"PYEONGJEOM"));
        					this.dsMaster.setColumn(this.dsMaster.rowposition,"GIJUN_PYEONGJEOM",this.dsJiwonja.getColumn(0,"GIJUN_PYEONGJEOM"));
        					this.dsMaster.setColumn(this.dsMaster.rowposition,"SUJIP_DONGUI_YN",this.dsJiwonja.getColumn(0,"SUJIP_DONGUI_YN"));
        					this.dsMaster.setColumn(this.dsMaster.rowposition,"GOYUSIKBYEOL_INFO_DONGUI_YN",this.dsJiwonja.getColumn(0,"GOYUSIKBYEOL_INFO_DONGUI_YN"));
        					this.dsMaster.setColumn(this.dsMaster.rowposition,"INFO_WITAK_DONGUI_YN",this.dsJiwonja.getColumn(0,"INFO_WITAK_DONGUI_YN"));
        					this.dsMaster.setColumn(this.dsMaster.rowposition,"INFO_3JA_JEGONG_DONGUI_YN",this.dsJiwonja.getColumn(0,"INFO_3JA_JEGONG_DONGUI_YN"));
        					this.dsMaster.setColumn(this.dsMaster.rowposition,"NAEYONG_HWAKIN_YN",this.dsJiwonja.getColumn(0,"NAEYONG_HWAKIN_YN"));
        				}
        			}
        		}
        	}
        };

        //주소검색
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

        //주소검색
        function searchPost(postData){
        	var addr	= "";
        	if (postData.userSelectedType == "R"){
        		// 도로명주소
        		addr = postData.roadAddress;
        		this.parent.dsMaster.setColumn(this.parent.dsMaster.rowposition, "JUSO_GBCD", 'Y');
        	}
        	else if (postData.userSelectedType == "J"){
        		// 지번주소
        		addr = postData.jibunAddress;
        		this.parent.dsMaster.setColumn(this.parent.dsMaster.rowposition, "JUSO_GBCD", 'N');
        	}

        	this.parent.edtJuso.set_value(addr);				// 도로명/지번 주소
        	this.parent.edtPost.set_value(postData.zonecode);	// 우편번호 - 5자리
        };

        /**********************************************************************
                11. 공통 함수
        ***********************************************************************/
        // 기준년도 조회
        this.fn_GijunYyyy = function()
        {
        	var strSvc      = "GijunYyyy";
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

        this.fn_PostGijunYyyy = function()
        {
        	GIJUN_YYYY = this.ds_gijunYyyy.getColumn(0,'YYYY');
        	this.ds_input.setColumn(0,"PYEONIP_YYYY", this.ds_gijunYyyy.getColumn(0, "YYYY"));
        	this.fn_SearchMojip();
        }

        //모집구분 조회(검색조건)
        this.fn_SearchMojip = function()
        {
        	this.ds_Hakgwa_sch.deleteAll();
        	this.ds_Juya_sch.deleteAll();
        	this.dsPyeonipHaknyeon_sch.deleteAll();

        	var strSvc      = "SearchMojip";
            var strUrl      = "/prj/ET/ET_COM/Retrieve_PYEONIP_MOJIP.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "ds_pyeonipMojip_sch=ds_pyeonipMojip";
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

        this.fn_PostSearchMojip = function()
        {
        	for(var i = 0; i < this.ds_pyeonipMojip_sch.rowcount; i++)
        	{
                if(this.ds_pyeonipMojip_sch.getColumn(i, "HYEONJAE_MOJIP_YN") == 'Y')
        		{
        			JEOPSU_FRDT = this.ds_pyeonipMojip_sch.getColumn(i, "JEOPSU_FRDT") +'000000';
        			JEOPSU_TODT = this.ds_pyeonipMojip_sch.getColumn(i, "JEOPSU_TODT") +'235959';
        			HYEONJAE_MOJIP = this.ds_pyeonipMojip_sch.getColumn(i, "PYEONIP_MOJIP_GBCD");
        			this.divSearch.form.cboPyeonipMojip.set_value(this.ds_pyeonipMojip_sch.getColumn(i, "PYEONIP_MOJIP_GBCD"));
                }
            }

        	if(this.ds_pyeonipMojip_sch.rowcount == 0)
        	{
        		this.ds_pyeonipMojip_sch.insertRow(0);
        		this.ds_pyeonipMojip_sch.setColumn(0, 'PYEONIP_MOJIP_GBCD','');
        		this.ds_pyeonipMojip_sch.setColumn(0, 'PYEONIP_MOJIP_NM','전체');
        	}

        	this.fn_SearchHakgwa();
        }

        //모집구분 조회(입력)
        this.fn_InputMojip = function()
        {
        	this.ds_input2.setColumn(0, "PYEONIP_YYYY", this.dsMaster.getColumn(this.dsMaster.rowposition, "PYEONIP_YYYY"));

        	var strSvc      = "InputMojip";
            var strUrl      = "/prj/ET/ET_COM/Retrieve_PYEONIP_MOJIP.do";
            var strInDs     = "ds_input=ds_input2";
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
        };

        this.fn_PostInputMojip = function()
        {
        	if(this.dsMaster.getRowType(this.dsMaster.rowposition) == 2 )
        	{
        		this.cboPyeonipMojip.set_value(HYEONJAE_MOJIP);
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "PYEONIP_MOJIP_GBCD", HYEONJAE_MOJIP)
        	}

        	this.fn_InputHakgwa();
        }

        // 학과 조회(검색조건)
        this.fn_SearchHakgwa = function ()
        {
        	var strSvc      = "SearchHakgwa";
            var strUrl      = "/prj/ET/ET_COM/Retrieve_PYEONIP_HAKGWA.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "ds_Hakgwa_sch=ds_Hakgwa";
            var strArg      = "";
            var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
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

        this.fn_PostSearchHakgwa = function()
        {
        	this.ds_Hakgwa_sch.insertRow(0);
        	this.ds_Hakgwa_sch.setColumn(0, 'HAKGWA_CD','');
         	this.ds_Hakgwa_sch.setColumn(0, 'HAKGWA_NM','전체');
        	this.divSearch.form.cboHakgwa.set_index(0);

        	this.ds_Juya_sch.insertRow(0);
        	this.ds_Juya_sch.setColumn(0, 'JUYA_GBCD','');
         	this.ds_Juya_sch.setColumn(0, 'JUYA_GBNM','전체');
        	this.divSearch.form.cboJuya.set_index(0);

        	this.dsPyeonipHaknyeon_sch.insertRow(0);
        	this.dsPyeonipHaknyeon_sch.setColumn(0, 'PYEONIP_HAKNYEON','');
         	this.dsPyeonipHaknyeon_sch.setColumn(0, 'PYEONIP_HAKNYEON_NM','전체');
        	this.divSearch.form.cboPyeonipHaknyeon.set_index(0);
        }

        // 학과 조회(입력)
        this.fn_InputHakgwa = function ()
        {
        	this.ds_input2.setColumn(0, "PYEONIP_YYYY", this.dsMaster.getColumn(this.dsMaster.rowposition, "PYEONIP_YYYY"));
        	this.ds_input2.setColumn(0, "PYEONIP_MOJIP_GBCD", this.dsMaster.getColumn(this.dsMaster.rowposition, "PYEONIP_MOJIP_GBCD"));

        	var strSvc      = "InputHakgwa";
            var strUrl      = "/prj/ET/ET_COM/Retrieve_PYEONIP_HAKGWA.do";
            var strInDs     = "ds_input=ds_input2";
            var strOutDs    = "ds_Hakgwa=ds_Hakgwa";
            var strArg      = "";
            var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
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

        this.fn_PostInputHakgwa = function()
        {
        	this.ds_Hakgwa.insertRow(0);
        	this.ds_Hakgwa.setColumn(0, 'HAKGWA_CD','');
         	this.ds_Hakgwa.setColumn(0, 'HAKGWA_NM','선택');

        	this.fn_InputJuya();
        }

        //주야구분 조회(검색조건)
        this.fn_SearchJuya = function ()
        {
        	this.ds_input.setColumn(0, "HAKGWA_CD", this.ds_input.getColumn(0, "JIWONHAKGWA_CD"));
        	var strSvc      = "SearchJuya";
            var strUrl      = "/prj/ET/ET_COM/Retrieve_JUYA.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "ds_Juya_sch=ds_Juya";
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

        this.fn_PostSearchJuya = function()
        {
        	this.ds_Juya_sch.insertRow(0);
        	this.ds_Juya_sch.setColumn(0, 'JUYA_GBCD','');
         	this.ds_Juya_sch.setColumn(0, 'JUYA_GBNM','전체');
        	this.divSearch.form.cboJuya.set_index(0);

        	this.dsPyeonipHaknyeon_sch.insertRow(0);
        	this.dsPyeonipHaknyeon_sch.setColumn(0, 'PYEONIP_HAKNYEON','');
         	this.dsPyeonipHaknyeon_sch.setColumn(0, 'PYEONIP_HAKNYEON_NM','전체');
        	this.divSearch.form.cboPyeonipHaknyeon.set_index(0);
        }

        //주야구분 조회(입력)
        this.fn_InputJuya = function()
        {
        	this.ds_input2.setColumn(0, "PYEONIP_YYYY", this.dsMaster.getColumn(this.dsMaster.rowposition, "PYEONIP_YYYY"));
        	this.ds_input2.setColumn(0, "PYEONIP_MOJIP_GBCD", this.dsMaster.getColumn(this.dsMaster.rowposition, "PYEONIP_MOJIP_GBCD"));
        	this.ds_input2.setColumn(0, "HAKGWA_CD", this.dsMaster.getColumn(this.dsMaster.rowposition, "JIWONHAKGWA_CD"));

        	var strSvc      = "InputJuya";
            var strUrl      = "/prj/ET/ET_COM/Retrieve_JUYA.do";
            var strInDs     = "ds_input=ds_input2";
            var strOutDs    = "ds_Juya=ds_Juya";
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

        this.fn_PostInputJuya = function()
        {
        	this.ds_Juya.insertRow(0);
        	this.ds_Juya.setColumn(0, 'JUYA_GBCD','');
         	this.ds_Juya.setColumn(0, 'JUYA_GBNM','선택');

        	this.fn_InputHaknyeon();
        }

        //학년 조회(검색조건)
        this.fn_SearchHaknyeon = function ()
        {
        	this.ds_input.setColumn(0, "HAKGWA_CD", this.ds_input.getColumn(0, "JIWONHAKGWA_CD"));
        	var strSvc      = "SearchHaknyeon";
            var strUrl      = "/prj/ET/ET_COM/Retrieve_PYEONIP_HAKNYEON.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsPyeonipHaknyeon_sch=ds_Haknyeon";
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

        this.fn_PostSearchHaknyeon = function()
        {
        	this.dsPyeonipHaknyeon_sch.insertRow(0);
        	this.dsPyeonipHaknyeon_sch.setColumn(0, 'PYEONIP_HAKNYEON','');
         	this.dsPyeonipHaknyeon_sch.setColumn(0, 'PYEONIP_HAKNYEON_NM','전체');
        	this.divSearch.form.cboPyeonipHaknyeon.set_index(0);
        }

        //학년 조회(입력)
        this.fn_InputHaknyeon = function ()
        {
        	this.ds_input2.setColumn(0, "PYEONIP_YYYY", this.dsMaster.getColumn(this.dsMaster.rowposition, "PYEONIP_YYYY"));
        	this.ds_input2.setColumn(0, "PYEONIP_MOJIP_GBCD", this.dsMaster.getColumn(this.dsMaster.rowposition, "PYEONIP_MOJIP_GBCD"));
        	this.ds_input2.setColumn(0, "HAKGWA_CD", this.dsMaster.getColumn(this.dsMaster.rowposition, "JIWONHAKGWA_CD"));
        	this.ds_input2.setColumn(0, "JUYA_GBCD", this.dsMaster.getColumn(this.dsMaster.rowposition, "JUYA_GBCD"));

        	var strSvc      = "InputHaknyeon";
            var strUrl      = "/prj/ET/ET_COM/Retrieve_PYEONIP_HAKNYEON.do";
            var strInDs     = "ds_input=ds_input2";
            var strOutDs    = "dsPyeonipHaknyeon=ds_Haknyeon";
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

        this.fn_PostInputHaknyeon = function()
        {
        	this.dsPyeonipHaknyeon.insertRow(0);
        	this.dsPyeonipHaknyeon.setColumn(0, 'PYEONIP_HAKNYEON','');
         	this.dsPyeonipHaknyeon.setColumn(0, 'PYEONIP_HAKNYEON_NM','선택');
        }

        //전공 조회
        this.fn_Jeongong = function ()
        {
        	var strSvc      = "Jeongong";
            var strUrl      = "/prj/EN/EN_COM/Retrieve_JEONGONG_CD.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "ds_jeongongCd=ds_jeongongCd";
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

        this.fn_PostJeongong = function()
        {
        	this.ds_jeongongCd.insertRow(0);
        	this.ds_jeongongCd.setColumn(0, "DEPT_CD", null);
         	this.ds_jeongongCd.setColumn(0, "DEPT_NM","선택");
        	this.ds_jeongongCd.setColumn(0, "UP_DEPT_CD","");
        }

        /**********************************************************************
                12. 검색창 엔터키 조회
        ***********************************************************************/
        this.divSearch_spnPyeonipYyyy_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"PYEONIP_YYYY",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboPyeonipMojip_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"PYEONIP_MOJIP_GBCD",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboHakgwa_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"JIWONHAKGWA_CD",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboJuya_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"JUYA_GBCD",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboPyeonipHaknyeon_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"PYEONIP_HAKNYEON",obj.value);
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
            this.divSearch.form.spnPyeonipYyyy.addEventHandler("onchanged",this.fn_SearchMojip,this);
            this.divSearch.form.spnPyeonipYyyy.addEventHandler("onkeydown",this.divSearch_spnPyeonipYyyy_onkeydown,this);
            this.divSearch.form.cboPyeonipMojip.addEventHandler("onitemchanged",this.fn_SearchHakgwa,this);
            this.divSearch.form.cboPyeonipMojip.addEventHandler("onkeydown",this.divSearch_cboPyeonipMojip_onkeydown,this);
            this.divSearch.form.cboHakgwa.addEventHandler("onitemchanged",this.fn_SearchJuya,this);
            this.divSearch.form.cboHakgwa.addEventHandler("onkeydown",this.divSearch_cboHakgwa_onkeydown,this);
            this.divSearch.form.cboJuya.addEventHandler("onitemchanged",this.fn_SearchHaknyeon,this);
            this.divSearch.form.cboJuya.addEventHandler("onkeydown",this.divSearch_cboJuya_onkeydown,this);
            this.divSearch.form.cboPyeonipHaknyeon.addEventHandler("onkeydown",this.divSearch_cboPyeonipHaknyeon_onkeydown,this);
            this.divSearch.form.edtSearchSuheomNo.addEventHandler("onkeydown",this.divSearch_edtSearchSuheomNo_onkeydown,this);
            this.divSearch.form.edtSearchNm.addEventHandler("onkeydown",this.divSearch_edtSearchNm_onkeydown,this);
            this.grdMaster.addEventHandler("oncellclick",this.grdMaster_oncellclick,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.cboHakgwa.addEventHandler("onitemchanged",this.cboHakgwa_onitemchanged,this);
            this.cboJuya.addEventHandler("onitemchanged",this.cboJuya_onitemchanged,this);
            this.edtResNo1.addEventHandler("onkeyup",this.edtResNo1_onkeyup,this);
            this.btnJiwonUpdate.addEventHandler("onclick",this.btnJiwonUpdate_onclick,this);
            this.btnJuso.addEventHandler("onclick",this.btnJuso_onclick,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsMaster.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
            this.dsJiwonja.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsJiwonja.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
        };
        this.loadIncludeScript("ET02_1020201_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
