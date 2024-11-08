(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("popupForm");
            this.set_titletext("교육과정복사");
            if (Form == this.constructor)
            {
                this._setFormPosition(740,306);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"ISU_HAKNYEON_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JUGWAN_DAEHAK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUGWAN_HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUGWAN_JEONGONG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"YYYY_B\" type=\"STRING\" size=\"256\"/><Column id=\"JUGWAN_DAEHAK_CD_B\" type=\"STRING\" size=\"256\"/><Column id=\"JUGWAN_HAKGWA_CD_B\" type=\"STRING\" size=\"256\"/><Column id=\"JUGWAN_JEONGONG_CD_B\" type=\"STRING\" size=\"256\"/><Column id=\"SEUNGIN_GBCD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_haknyeon", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_juya", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gyeyeol", this);
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_hakgwa", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_jeongong", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gyeyeolBoksa", this);
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_hakgwaBoksa", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_jeongongBoksa", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_09_00","20","20","50","22",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("원본");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","740","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static05",null,"0","20","300","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00","0","0","20","300",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","20","143","50","22",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("복사");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Div("div_Wonbon","20","49","700","71",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("div_WF_Outline");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01_00","0","9","100","22",null,null,null,null,null,null,this.div_Wonbon.form);
            obj.set_taborder("2");
            obj.set_text("교육과정년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_Wonbon.addChild(obj.name, obj);

            obj = new Spin("spnWonbonYYYY","110","9","120","22",null,null,null,null,null,null,this.div_Wonbon.form);
            obj.set_taborder("0");
            this.div_Wonbon.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","230","9","90","22",null,null,null,null,null,null,this.div_Wonbon.form);
            obj.set_taborder("3");
            obj.set_text("학년");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_Wonbon.addChild(obj.name, obj);

            obj = new Combo("cboWonbonHaknyeon","330","9","120","22",null,null,null,null,null,null,this.div_Wonbon.form);
            obj.set_taborder("1");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_enable("true");
            obj.set_innerdataset("ds_haknyeon");
            obj.set_text("");
            obj.set_index("-1");
            this.div_Wonbon.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_02","0","37","100","22",null,null,null,null,null,null,this.div_Wonbon.form);
            obj.set_taborder("4");
            obj.set_text("계열");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_Wonbon.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_03","230","37","90","22",null,null,null,null,null,null,this.div_Wonbon.form);
            obj.set_taborder("5");
            obj.set_text("학과");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_Wonbon.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00","450","9","90","22",null,null,null,null,null,null,this.div_Wonbon.form);
            obj.set_taborder("6");
            obj.set_text("주야");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_Wonbon.addChild(obj.name, obj);

            obj = new Combo("cboWonbonJuya","550","9","120","22",null,null,null,null,null,null,this.div_Wonbon.form);
            obj.set_taborder("7");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("ds_juya");
            obj.set_text("");
            obj.set_index("-1");
            this.div_Wonbon.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01","450","37","90","22",null,null,null,null,null,null,this.div_Wonbon.form);
            obj.set_taborder("8");
            obj.set_text("전공");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_Wonbon.addChild(obj.name, obj);

            obj = new Combo("cboWonbonJeongong","550","37","120","22",null,null,null,null,null,null,this.div_Wonbon.form);
            obj.set_taborder("9");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_innerdataset("ds_jeongong");
            obj.set_text("");
            obj.set_index("-1");
            this.div_Wonbon.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","70",null,null,null,null,null,null,this.div_Wonbon.form);
            obj.set_taborder("10");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.div_Wonbon.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","0","0","700","9",null,null,null,null,null,null,this.div_Wonbon.form);
            obj.set_taborder("11");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.div_Wonbon.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","100","0","10","70",null,null,null,null,null,null,this.div_Wonbon.form);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.div_Wonbon.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01","230","-1","56","70",null,null,null,null,null,null,this.div_Wonbon.form);
            obj.set_taborder("13");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.div_Wonbon.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","320","0","10","70",null,null,null,null,null,null,this.div_Wonbon.form);
            obj.set_taborder("14");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.div_Wonbon.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00","450","0","56","70",null,null,null,null,null,null,this.div_Wonbon.form);
            obj.set_taborder("15");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.div_Wonbon.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","540","0","10","70",null,null,null,null,null,null,this.div_Wonbon.form);
            obj.set_taborder("16");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.div_Wonbon.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_02","20","82","700","5",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 6pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","20","110","700","9",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Combo("cboWonbonHakgwa","351","87","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_innerdataset("ds_hakgwa");
            obj.set_text("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cboWonbonGyeyeol","131","87","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_innerdataset("ds_gyeyeol");
            obj.set_text("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","42","740","7",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("7");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","1","120","740","20",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","0","164","740","7",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("7");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Div("div_Boksa","21","170","700","71",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("div_WF_Outline");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01_00","0","9","100","22",null,null,null,null,null,null,this.div_Boksa.form);
            obj.set_taborder("2");
            obj.set_text("교육과정년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_Boksa.addChild(obj.name, obj);

            obj = new Spin("spnBoksaYYYY","110","9","120","22",null,null,null,null,null,null,this.div_Boksa.form);
            obj.set_taborder("0");
            this.div_Boksa.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","230","9","90","22",null,null,null,null,null,null,this.div_Boksa.form);
            obj.set_taborder("3");
            obj.set_text("학년");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_Boksa.addChild(obj.name, obj);

            obj = new Combo("cboBoksaHaknyeon","330","9","120","22",null,null,null,null,null,null,this.div_Boksa.form);
            obj.set_taborder("1");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_enable("true");
            obj.set_innerdataset("ds_haknyeon");
            obj.set_text("");
            obj.set_index("-1");
            this.div_Boksa.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_02","0","37","100","22",null,null,null,null,null,null,this.div_Boksa.form);
            obj.set_taborder("4");
            obj.set_text("계열");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_Boksa.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_03","230","37","90","22",null,null,null,null,null,null,this.div_Boksa.form);
            obj.set_taborder("5");
            obj.set_text("학과");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_Boksa.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00","450","9","90","22",null,null,null,null,null,null,this.div_Boksa.form);
            obj.set_taborder("6");
            obj.set_text("주야");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_Boksa.addChild(obj.name, obj);

            obj = new Combo("cboBoksaJuya","550","9","120","22",null,null,null,null,null,null,this.div_Boksa.form);
            obj.set_taborder("7");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("ds_juya");
            obj.set_text("");
            obj.set_index("-1");
            this.div_Boksa.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01","450","37","90","22",null,null,null,null,null,null,this.div_Boksa.form);
            obj.set_taborder("8");
            obj.set_text("전공");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_Boksa.addChild(obj.name, obj);

            obj = new Combo("cboBoksaJeongong","550","37","120","22",null,null,null,null,null,null,this.div_Boksa.form);
            obj.set_taborder("9");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_innerdataset("ds_jeongongBoksa");
            obj.set_text("");
            obj.set_index("-1");
            this.div_Boksa.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","70",null,null,null,null,null,null,this.div_Boksa.form);
            obj.set_taborder("10");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.div_Boksa.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","0","0","700","9",null,null,null,null,null,null,this.div_Boksa.form);
            obj.set_taborder("11");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.div_Boksa.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","100","0","10","70",null,null,null,null,null,null,this.div_Boksa.form);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.div_Boksa.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01","230","-1","56","70",null,null,null,null,null,null,this.div_Boksa.form);
            obj.set_taborder("13");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.div_Boksa.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","320","0","10","70",null,null,null,null,null,null,this.div_Boksa.form);
            obj.set_taborder("14");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.div_Boksa.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00","450","0","56","70",null,null,null,null,null,null,this.div_Boksa.form);
            obj.set_taborder("15");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.div_Boksa.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","540","0","10","70",null,null,null,null,null,null,this.div_Boksa.form);
            obj.set_taborder("16");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.div_Boksa.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_02_00","21","203","700","5",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 6pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","21","231","700","9",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Combo("cboBoksaHakgwa","352","208","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_innerdataset("ds_hakgwaBoksa");
            obj.set_text("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cboBoksaGyeyeol","132","208","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_innerdataset("ds_gyeyeolBoksa");
            obj.set_text("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_01","0","241","740","20",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Button("btnBoksa","309","261","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("복사");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","373","261","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_01_00","0","286","740","20",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",740,306,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_Wonbon.form.spnWonbonYYYY","value","ds_input","YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_Wonbon.form.cboWonbonHaknyeon","value","ds_input","ISU_HAKNYEON_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_Wonbon.form.cboWonbonJuya","value","ds_input","JUYA_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","cboWonbonGyeyeol","value","ds_input","JUGWAN_DAEHAK_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","cboWonbonHakgwa","value","ds_input","JUGWAN_HAKGWA_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_Wonbon.form.cboWonbonJeongong","value","ds_input","JUGWAN_JEONGONG_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_Boksa.form.spnBoksaYYYY","value","ds_input","YYYY_B");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_Boksa.form.cboBoksaHaknyeon","value","ds_input","ISU_HAKNYEON_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_Boksa.form.cboBoksaJuya","value","ds_input","JUYA_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","cboBoksaGyeyeol","value","ds_input","JUGWAN_DAEHAK_CD_B");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","cboBoksaHakgwa","value","ds_input","JUGWAN_HAKGWA_CD_B");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_Boksa.form.cboBoksaJeongong","value","ds_input","JUGWAN_JEONGONG_CD_B");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("UL03_2020301_P01.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UL03_2020301_M_P01.xfdl
        * 작 성         일 명: 정진호
        * 작 성         일 자: 2022/07/14
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

        	if (!this.gfn_isNull(this.getOwnerFrame().yyyy)) {
        		this.div_Wonbon.form.spnWonbonYYYY.set_value(this.getOwnerFrame().yyyy);
        		this.div_Boksa.form.spnBoksaYYYY.set_value(this.getOwnerFrame().yyyy);
        	}

            //사용자 화면  초기화 함수
            this.fn_formInit();
        };

        /**
         * 기능 : 폼언 로드(닫기전 셋팅)  Setting
         */
        this.form_onclose = function(obj,e)
        {

        };
        /**********************************************************************
                04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        this.fn_formInit = function()
        {
            var strDs    = "ds_haknyeon|ds_juya";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00060|00003";                          // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
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

        	// gfn_GyeyeolComboLoad(데이터셋, 콤보 옵션)
        	// 계열콤보
        	strComb     = "T";
        	svcId       = "wonbonGyeyeolInit";
        	strUseYn    = "1"; // 사용 여부
        	strJojikGbcd = "20";  // 조직구분 10.행정조직   20.학사조직   30.입시조직
        	strDaehakCd = "";  //
        	this.gfn_GyeyeolComboLoad(this.cboWonbonGyeyeol, strComb, svcId, strUseYn, strJojikGbcd, strDaehakCd , objApp.gv_cutPrgId);

        	// gfn_GyeyeolComboLoad(데이터셋, 콤보 옵션)
        	// 계열콤보
        	svcId       = "boksaGyeyeolInit";
        	this.gfn_GyeyeolComboLoad(this.cboBoksaGyeyeol, strComb, svcId, strUseYn, strJojikGbcd, strDaehakCd , objApp.gv_cutPrgId);
        };

        this.fn_PostformInit = function()
        {

        };

        /**
         *      기능 : 저장시 후처리
         */
        this.fn_PostSave = function()
        {
            this.close(this.ds_input.getColumn(0, "YYYY_B"));
        };

        this.fn_PostWonbonGyeyeolInit = function()
        {
        	this.cboWonbonGyeyeol.set_index(0);

        	// 계열 onitemchanged 호출
        	let info = new nexacro.ItemChangeEventInfo;
        	this.cboWonbonGyeyeol_onitemchanged(this.cboWonbonGyeyeol, info);
        };

        this.fn_PostWonbonHakgwaInit = function()
        {
        	this.cboWonbonHakgwa.set_index(0);

        	// 학과 onitemchanged 호출
        	let info = new nexacro.ItemChangeEventInfo;
        	this.cboWonbonHakgwa_onitemchanged(this.cboWonbonHakgwa, info);
        };

        this.fn_PostWonbonJeongongInit = function()
        {
        	this.div_Wonbon.form.cboWonbonJeongong.set_index(0);
        };

        this.fn_PostBoksaGyeyeolInit = function()
        {
        	this.cboBoksaGyeyeol.set_index(0);

        	// 계열 onitemchanged 호출
        	let info = new nexacro.ItemChangeEventInfo;
        	this.cboBoksaGyeyeol_onitemchanged(this.cboBoksaGyeyeol, info);
        };

        this.fn_PostBoksaHakgwaInit = function()
        {
        	this.cboBoksaHakgwa.set_index(0);

        	// 학과 onitemchanged 호출
        	let info = new nexacro.ItemChangeEventInfo;
        	this.cboBoksaHakgwa_onitemchanged(this.cboBoksaHakgwa, info);
        };

        this.fn_PostBoksaJeongongInit = function()
        {
        	this.div_Boksa.form.cboBoksaJeongong.set_index(0);
        };


        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {

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
                    case "Save":
                            this.fn_PostSave();
                        break;
        			// 원본 계열
        			case "wonbonGyeyeolInit":
        			        this.fn_PostWonbonGyeyeolInit();
        			    break;
        			// 원본 학과
        			case "wonbonHakgwaInit":
        			        this.fn_PostWonbonHakgwaInit();
        			    break;
        			// 원본 전공
        			case "wonbonJeongongInit":
        			        this.fn_PostWonbonJeongongInit();
        			    break;
        			// 복사 계열
        			case "boksaGyeyeolInit":
        			        this.fn_PostBoksaGyeyeolInit();
        			    break;
        			// 복사 학과
        			case "boksaHakgwaInit":
        			        this.fn_PostBoksaHakgwaInit();
        			    break;
        			// 복사 전공
        			case "boksaJeongongInit":
        			        this.fn_PostBoksaJeongongInit();
        			    break;
                    default:
                        break;
                }
            }
        };

        /**********************************************************************
                09. 초기화
        ***********************************************************************/
        /**********************************************************************
                10. 출력 함수 선언
        ***********************************************************************/
        /**********************************************************************
                13. Get, Set Method
        ***********************************************************************/
        /**********************************************************************
                14. 기타 Control Event
        ***********************************************************************/

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
            //return this.gfn_isUpdate(this.dsMaster);
        };

        this.fn_PreCopy = function() {
        	var wonbon = this.gfn_isNull(this.ds_input.getColumn(0, "YYYY")) ? "" : this.ds_input.getColumn(0, "YYYY");
        	wonbon += this.gfn_isNull(this.ds_input.getColumn(0, "JUGWAN_DAEHAK_CD")) ? "" : this.ds_input.getColumn(0, "JUGWAN_DAEHAK_CD");
        	wonbon += this.gfn_isNull(this.ds_input.getColumn(0, "JUGWAN_HAKGWA_CD")) ? "" : this.ds_input.getColumn(0, "JUGWAN_HAKGWA_CD");
        	wonbon += this.gfn_isNull(this.ds_input.getColumn(0, "JUGWAN_JEONGONG_CD")) ? "" : this.ds_input.getColumn(0, "JUGWAN_JEONGONG_CD");

        	var boksa = this.gfn_isNull(this.ds_input.getColumn(0, "YYYY_B")) ? "" : this.ds_input.getColumn(0, "YYYY_B");
        	boksa += this.gfn_isNull(this.ds_input.getColumn(0, "JUGWAN_DAEHAK_CD_B")) ? "" : this.ds_input.getColumn(0, "JUGWAN_DAEHAK_CD_B");
        	boksa += this.gfn_isNull(this.ds_input.getColumn(0, "JUGWAN_HAKGWA_CD_B")) ? "" : this.ds_input.getColumn(0, "JUGWAN_HAKGWA_CD_B");
        	boksa += this.gfn_isNull(this.ds_input.getColumn(0, "JUGWAN_JEONGONG_CD_B")) ? "" : this.ds_input.getColumn(0, "JUGWAN_JEONGONG_CD_B");

        	return wonbon == boksa
        }

        /**
          * 복사
         **/
        this.btnBoksa_onclick = function(obj,e)
        {
        	if (this.fn_PreCopy()) {
        		this.alert("같은 조건의 대상에는 복사할 수 없습니다.");
        		return;
        	}

        	if (this.gfn_isNull(objApp.gds_userInfoDb.getColumn(0, "USER_GBCD"))) {
        		this.ds_input.setColumn(0,"SEUNGIN_GBCD","03");	// 관리자면 승인
        	} else {
        		this.ds_input.setColumn(0,"SEUNGIN_GBCD","02");	// 관리자 아니면 신청으로 기본값 설정
        	}

            var strSvc      = "Save";
            var strUrl      = "/prj/UL/UL03/Save_2020301_P01List.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "";
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
          * 닫기
         **/
        this.btnClose_onclick = function(obj,e)
        {
        	this.close("CLOSE");
        };

        this.cboWonbonGyeyeol_onitemchanged = function(obj,e)
        {
        	// gfn_HakgwaComboLoad(데이터셋, 콤보 옵션)
        	// 학과콤보
        	strComb     = "T";
        	svcId       = "wonbonHakgwaInit";
        	strUseYn    = "1"; // 사용 여부
        	strJojikGbcd = "20";  // 조직구분 10.행정조직   20.학사조직   30.입시조직

        	if(this.gfn_isNull(e.postvalue))
        		strUpDeptCd = "";
        	else
        		strUpDeptCd = e.postvalue;

        	this.gfn_HakgwaComboLoad(this.cboWonbonHakgwa, strComb, svcId, strUseYn, strJojikGbcd, strUpDeptCd, objApp.gv_cutPrgId);
        };

        this.cboWonbonHakgwa_onitemchanged = function(obj,e)
        {
        	// gfn_JeongongComboLoad(데이터셋, 콤보 옵션)
        	// 전공콤보
        	strComb     = "T";
        	svcId       = "wonbonJeongongInit";
        	strUseYn    = "1"; // 사용 여부
        	strJojikGbcd = "20";  // 조직구분 10.행정조직   20.학사조직   30.입시조직

        	if(this.gfn_isNull(e.postvalue))
        		strUpDeptCd = "";
        	else
        		strUpDeptCd = e.postvalue;

        	this.gfn_JeongongComboLoad(this.div_Wonbon.form.cboWonbonJeongong, strComb, svcId, strUseYn, strJojikGbcd, strUpDeptCd, objApp.gv_cutPrgId);
        };

        this.cboBoksaGyeyeol_onitemchanged = function(obj,e)
        {
        	// gfn_HakgwaComboLoad(데이터셋, 콤보 옵션)
        	// 학과콤보
        	strComb     = "T";
        	svcId       = "boksaHakgwaInit";
        	strUseYn    = "1"; // 사용 여부
        	strJojikGbcd = "20";  // 조직구분 10.행정조직   20.학사조직   30.입시조직

        	if(this.gfn_isNull(e.postvalue))
        		strUpDeptCd = "";
        	else
        		strUpDeptCd = e.postvalue;

        	this.gfn_HakgwaComboLoad(this.cboBoksaHakgwa, strComb, svcId, strUseYn, strJojikGbcd, strUpDeptCd, objApp.gv_cutPrgId);
        };

        this.cboBoksaHakgwa_onitemchanged = function(obj,e)
        {
        	// gfn_JeongongComboLoad(데이터셋, 콤보 옵션)
        	// 전공콤보
        	strComb     = "T";
        	svcId       = "boksaJeongongInit";
        	strUseYn    = "1"; // 사용 여부
        	strJojikGbcd = "20";  // 조직구분 10.행정조직   20.학사조직   30.입시조직

        	if(this.gfn_isNull(e.postvalue))
        		strUpDeptCd = "";
        	else
        		strUpDeptCd = e.postvalue;

        	this.gfn_JeongongComboLoad(this.div_Boksa.form.cboBoksaJeongong, strComb, svcId, strUseYn, strJojikGbcd, strUpDeptCd, objApp.gv_cutPrgId);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.div_Wonbon.form.stc_01_00.addEventHandler("onclick",this.divM_stc_01_00_onclick,this);
            this.div_Wonbon.form.stc_01_00_00_02.addEventHandler("onclick",this.divM_stc_01_00_00_02_onclick,this);
            this.cboWonbonHakgwa.addEventHandler("onitemchanged",this.cboWonbonHakgwa_onitemchanged,this);
            this.cboWonbonGyeyeol.addEventHandler("onitemchanged",this.cboWonbonGyeyeol_onitemchanged,this);
            this.div_Boksa.form.stc_01_00.addEventHandler("onclick",this.divM_stc_01_00_onclick,this);
            this.div_Boksa.form.stc_01_00_00_02.addEventHandler("onclick",this.divM_stc_01_00_00_02_onclick,this);
            this.cboBoksaHakgwa.addEventHandler("onitemchanged",this.cboBoksaHakgwa_onitemchanged,this);
            this.cboBoksaGyeyeol.addEventHandler("onitemchanged",this.cboBoksaGyeyeol_onitemchanged,this);
            this.btnBoksa.addEventHandler("onclick",this.btnBoksa_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
        };
        this.loadIncludeScript("UL03_2020301_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
