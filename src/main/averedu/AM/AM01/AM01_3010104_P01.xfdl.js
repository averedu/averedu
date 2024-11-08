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
            this.set_titletext("직원번호생성");
            if (Form == this.constructor)
            {
                this._setFormPosition(1160,450);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"SEONGMYEONG\" type=\"STRING\" size=\"256\"/><Column id=\"JUMIN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SEONGMYEONG_YEONGMUN\" type=\"STRING\" size=\"256\"/><Column id=\"SEONGMYEONG_HANMUN\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWON_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SABEON\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BALRYEONG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI_DT\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JIKJONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JIKGEUP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JIKGEUP_IMYONG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"HOBONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"TODT\" type=\"STRING\" size=\"256\"/><Column id=\"GIGWAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EOPMU\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"HP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"JAEJIK_GIGAN\" type=\"STRING\" size=\"256\"/><Column id=\"YEONGEUM_GAIP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UIRYO_BOHEOM\" type=\"STRING\" size=\"256\"/><Column id=\"CHOEJONG_JEONGONG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"THIS_SCHL\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGONG_DVSN\" type=\"STRING\" size=\"256\"/><Column id=\"CHOEJONG_HAKRYEOK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"CHOEJONG_HAKRYEOK_GUKGA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"BEFR_RGLR\" type=\"STRING\" size=\"256\"/><Column id=\"GYEYEOL_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGyeyeol", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgwa", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJeongong", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJikwon", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJikwi", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJikjong", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJikgeup", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REF_3\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHobong", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakryeok", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGukga", this);
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"JEOPSU_NO\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDept", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYn", this);
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"JEOPSU_NO\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divBg1","0","0","580","400",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("type01");
            obj.set_background("#e3ebff");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divSelect","10","10",null,null,"10","10",null,null,null,null,this.divBg1.form);
            obj.set_taborder("2");
            obj.set_background("white");
            obj.set_border("1px solid #4c4b66");
            obj.set_text("");
            this.divBg1.addChild(obj.name, obj);

            obj = new Static("stc_13_06","10","49","540","28",null,null,null,null,null,null,this.divBg1.form.divSelect.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divBg1.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_12_06","10","49","125","28",null,null,null,null,null,null,this.divBg1.form.divSelect.form);
            obj.set_taborder("2");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divBg1.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00","10","77","540","28",null,null,null,null,null,null,this.divBg1.form.divSelect.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divBg1.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01","10","77","125","28",null,null,null,null,null,null,this.divBg1.form.divSelect.form);
            obj.set_taborder("4");
            obj.set_text("영문성명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divBg1.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00","10","105","540","28",null,null,null,null,null,null,this.divBg1.form.divSelect.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divBg1.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00","10","105","125","28",null,null,null,null,null,null,this.divBg1.form.divSelect.form);
            obj.set_taborder("6");
            obj.set_text("직원구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divBg1.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02","280","49","125","28",null,null,null,null,null,null,this.divBg1.form.divSelect.form);
            obj.set_taborder("7");
            obj.set_text("주민등록번호");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divBg1.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_00","280","77","125","28",null,null,null,null,null,null,this.divBg1.form.divSelect.form);
            obj.set_taborder("8");
            obj.set_text("한문성명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divBg1.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02","280","105","125","28",null,null,null,null,null,null,this.divBg1.form.divSelect.form);
            obj.set_taborder("9");
            obj.set_text("직원번호");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divBg1.form.divSelect.addChild(obj.name, obj);

            obj = new Combo("cboJikwonGbcd","137","108","140","22",null,null,null,null,null,null,this.divBg1.form.divSelect.form);
            obj.set_taborder("0");
            obj.set_innerdataset("dsJikwon");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_cssclass("point");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divBg1.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_63_00_00","-9","29","308","20",null,null,null,null,null,null,this.divBg1.form.divSelect.form);
            obj.set_taborder("10");
            obj.set_text("* 직원구분을 선택한 후 생성 버튼을 클릭하십시오.");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divBg1.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_63_00","-9","9","362","20",null,null,null,null,null,null,this.divBg1.form.divSelect.form);
            obj.set_taborder("11");
            obj.set_text("* 직원번호를 생성합니다.");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divBg1.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_05","9","147","90","22",null,null,null,null,null,null,this.divBg1.form.divSelect.form);
            obj.set_taborder("12");
            obj.set_text("발령 정보");
            obj.set_cssclass("sta_WF_Title01");
            obj.set_fittocontents("width");
            this.divBg1.form.divSelect.addChild(obj.name, obj);

            obj = new Edit("edtNm","137","52","140","22",null,null,null,null,null,null,this.divBg1.form.divSelect.form);
            obj.set_taborder("13");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_cssclass("point");
            this.divBg1.form.divSelect.addChild(obj.name, obj);

            obj = new MaskEdit("mdtResNo","407","52","140","22",null,null,null,null,null,null,this.divBg1.form.divSelect.form);
            obj.set_taborder("14");
            obj.set_enable("true");
            obj.set_format("######-#{######}");
            obj.set_type("string");
            obj.set_readonly("false");
            obj.set_cssclass("point");
            this.divBg1.form.divSelect.addChild(obj.name, obj);

            obj = new Edit("edtEnm","137","80","140","22",null,null,null,null,null,null,this.divBg1.form.divSelect.form);
            obj.set_taborder("15");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.divBg1.form.divSelect.addChild(obj.name, obj);

            obj = new Edit("edtCnm","407","80","140","22",null,null,null,null,null,null,this.divBg1.form.divSelect.form);
            obj.set_taborder("16");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.divBg1.form.divSelect.addChild(obj.name, obj);

            obj = new Edit("edtJikwonNo","407","108","140","22",null,null,null,null,null,null,this.divBg1.form.divSelect.form);
            obj.set_taborder("17");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.divBg1.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_13_06_01","10","169","540","28",null,null,null,null,null,null,this.divBg1.form.divSelect.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divBg1.form.divSelect.addChild(obj.name, obj);

            obj = new Static("staCg1","10","169","125","28",null,null,null,null,null,null,this.divBg1.form.divSelect.form);
            obj.set_taborder("19");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divBg1.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00_00","10","197","540","28",null,null,null,null,null,null,this.divBg1.form.divSelect.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divBg1.form.divSelect.addChild(obj.name, obj);

            obj = new Static("staCg2","10","197","125","28",null,null,null,null,null,null,this.divBg1.form.divSelect.form);
            obj.set_taborder("21");
            obj.set_text("직위");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divBg1.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00","10","225","540","28",null,null,null,null,null,null,this.divBg1.form.divSelect.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divBg1.form.divSelect.addChild(obj.name, obj);

            obj = new Static("staCg3","10","225","125","28",null,null,null,null,null,null,this.divBg1.form.divSelect.form);
            obj.set_taborder("23");
            obj.set_text("전공");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divBg1.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00","280","169","125","28",null,null,null,null,null,null,this.divBg1.form.divSelect.form);
            obj.set_taborder("24");
            obj.set_text("현 소속발령일");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divBg1.form.divSelect.addChild(obj.name, obj);

            obj = new Static("staCg4","280","197","125","28",null,null,null,null,null,null,this.divBg1.form.divSelect.form);
            obj.set_taborder("25");
            obj.set_text("직위발령일");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divBg1.form.divSelect.addChild(obj.name, obj);

            obj = new Combo("cboJeongong","137","228","140","22",null,null,null,null,null,null,this.divBg1.form.divSelect.form);
            obj.set_taborder("26");
            obj.set_innerdataset("dsJeongong");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divBg1.form.divSelect.addChild(obj.name, obj);

            obj = new Combo("cboJikwi","137","200","140","22",null,null,null,null,null,null,this.divBg1.form.divSelect.form);
            obj.set_taborder("27");
            obj.set_innerdataset("dsJikwi");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divBg1.form.divSelect.addChild(obj.name, obj);

            obj = new Combo("cboDept","137","172","140","22",null,null,null,null,null,null,this.divBg1.form.divSelect.form);
            obj.set_taborder("28");
            obj.set_innerdataset("dsDept");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divBg1.form.divSelect.addChild(obj.name, obj);

            obj = new Calendar("calSosokBalryungDt","407","172","140","22",null,null,null,null,null,null,this.divBg1.form.divSelect.form);
            obj.set_taborder("29");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.divBg1.form.divSelect.addChild(obj.name, obj);

            obj = new Calendar("calJikwiBalryungDt","407","200","140","22",null,null,null,null,null,null,this.divBg1.form.divSelect.form);
            obj.set_taborder("30");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.divBg1.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_63_00_00_00","-9","259","308","20",null,null,null,null,null,null,this.divBg1.form.divSelect.form);
            obj.set_taborder("31");
            obj.set_text("* 직급을 선택하시면 자동으로 직종이 선택됩니다.");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divBg1.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_13_06_02","10","279","540","28",null,null,null,null,null,null,this.divBg1.form.divSelect.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divBg1.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_12_06_03","10","279","125","28",null,null,null,null,null,null,this.divBg1.form.divSelect.form);
            obj.set_taborder("33");
            obj.set_text("직종");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divBg1.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00_01","10","307","540","28",null,null,null,null,null,null,this.divBg1.form.divSelect.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divBg1.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_02","10","307","125","28",null,null,null,null,null,null,this.divBg1.form.divSelect.form);
            obj.set_taborder("35");
            obj.set_text("현 직급발령일");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divBg1.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_01","10","335","540","28",null,null,null,null,null,null,this.divBg1.form.divSelect.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divBg1.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01","10","335","125","28",null,null,null,null,null,null,this.divBg1.form.divSelect.form);
            obj.set_taborder("37");
            obj.set_text("임용시작일");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divBg1.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_01","280","279","125","28",null,null,null,null,null,null,this.divBg1.form.divSelect.form);
            obj.set_taborder("38");
            obj.set_text("직급");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divBg1.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_00_01","280","307","125","28",null,null,null,null,null,null,this.divBg1.form.divSelect.form);
            obj.set_taborder("39");
            obj.set_text("호봉");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divBg1.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_00","280","335","125","28",null,null,null,null,null,null,this.divBg1.form.divSelect.form);
            obj.set_taborder("40");
            obj.set_text("임용종료일");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divBg1.form.divSelect.addChild(obj.name, obj);

            obj = new Combo("cboJikjong","137","282","140","22",null,null,null,null,null,null,this.divBg1.form.divSelect.form);
            obj.set_taborder("41");
            obj.set_innerdataset("dsJikjong");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divBg1.form.divSelect.addChild(obj.name, obj);

            obj = new Combo("cboJikgeup","407","282","140","22",null,null,null,null,null,null,this.divBg1.form.divSelect.form);
            obj.set_taborder("42");
            obj.set_innerdataset("dsJikgeup");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divBg1.form.divSelect.addChild(obj.name, obj);

            obj = new Combo("cboHobong","407","310","140","22",null,null,null,null,null,null,this.divBg1.form.divSelect.form);
            obj.set_taborder("43");
            obj.set_innerdataset("dsHobong");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divBg1.form.divSelect.addChild(obj.name, obj);

            obj = new Calendar("calImyongTodt","407","338","140","22",null,null,null,null,null,null,this.divBg1.form.divSelect.form);
            obj.set_taborder("44");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.divBg1.form.divSelect.addChild(obj.name, obj);

            obj = new Calendar("calImyongFrdt","137","338","140","22",null,null,null,null,null,null,this.divBg1.form.divSelect.form);
            obj.set_taborder("45");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.divBg1.form.divSelect.addChild(obj.name, obj);

            obj = new Calendar("calJikgeupBalryungDt","137","310","140","22",null,null,null,null,null,null,this.divBg1.form.divSelect.form);
            obj.set_taborder("46");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.divBg1.form.divSelect.addChild(obj.name, obj);

            obj = new Combo("cboGyeyeol","137","172","140","22",null,null,null,null,null,null,this.divBg1.form.divSelect.form);
            obj.set_taborder("47");
            obj.set_innerdataset("dsGyeyeol");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divBg1.form.divSelect.addChild(obj.name, obj);

            obj = new Combo("cboHakgwa","137","200","140","22",null,null,null,null,null,null,this.divBg1.form.divSelect.form);
            obj.set_taborder("48");
            obj.set_innerdataset("dsHakgwa");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divBg1.form.divSelect.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","0","0","10",null,null,"0",null,null,null,null,this.divBg1.form);
            obj.set_taborder("0");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divBg1.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","0","0",null,"10","0",null,null,null,null,null,this.divBg1.form);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divBg1.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00",null,"0","10",null,"0","0",null,null,null,null,this.divBg1.form);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divBg1.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01_00","0",null,null,"10","0","0",null,null,null,null,this.divBg1.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divBg1.addChild(obj.name, obj);

            obj = new Button("btnCancel","293","415","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_enable("true");
            obj.set_background("blue");
            obj.set_color("white");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","228","415","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("확인");
            obj.set_enable("true");
            obj.set_background("gold");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Div("divBg2","580","0","580","400",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("type01");
            obj.set_background("#e3ebff");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divSelect","10","10",null,null,"10","10",null,null,null,null,this.divBg2.form);
            obj.set_taborder("2");
            obj.set_background("white");
            obj.set_border("1px solid #4c4b66");
            obj.set_text("");
            this.divBg2.addChild(obj.name, obj);

            obj = new Static("stc_13_06","10","39","540","28",null,null,null,null,null,null,this.divBg2.form.divSelect.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divBg2.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_12_06","10","39","125","28",null,null,null,null,null,null,this.divBg2.form.divSelect.form);
            obj.set_taborder("1");
            obj.set_text("기관명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divBg2.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00","10","67","540","28",null,null,null,null,null,null,this.divBg2.form.divSelect.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divBg2.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01","10","67","125","28",null,null,null,null,null,null,this.divBg2.form.divSelect.form);
            obj.set_taborder("3");
            obj.set_text("전화");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divBg2.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00","10","95","540","28",null,null,null,null,null,null,this.divBg2.form.divSelect.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divBg2.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00","10","95","125","28",null,null,null,null,null,null,this.divBg2.form.divSelect.form);
            obj.set_taborder("5");
            obj.set_text("재직기간");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divBg2.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02","280","39","125","28",null,null,null,null,null,null,this.divBg2.form.divSelect.form);
            obj.set_taborder("6");
            obj.set_text("업무");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divBg2.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_00","280","67","125","28",null,null,null,null,null,null,this.divBg2.form.divSelect.form);
            obj.set_taborder("7");
            obj.set_text("HP");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divBg2.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_63_00","-9","9","362","20",null,null,null,null,null,null,this.divBg2.form.divSelect.form);
            obj.set_taborder("8");
            obj.set_text("* 관계가 없을 경우 미입력 하시면 됩니다.");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divBg2.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_05","9","187","100","22",null,null,null,null,null,null,this.divBg2.form.divSelect.form);
            obj.set_taborder("9");
            obj.set_text("채용시 정보");
            obj.set_cssclass("sta_WF_Title01");
            obj.set_fittocontents("width");
            this.divBg2.form.divSelect.addChild(obj.name, obj);

            obj = new Edit("edtGigwanNm","137","42","140","22",null,null,null,null,null,null,this.divBg2.form.divSelect.form);
            obj.set_taborder("10");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.divBg2.form.divSelect.addChild(obj.name, obj);

            obj = new MaskEdit("mdtJaejik","137","98","140","22",null,null,null,null,null,null,this.divBg2.form.divSelect.form);
            obj.set_taborder("11");
            obj.set_enable("true");
            obj.set_format("##년 ##월");
            obj.set_type("string");
            obj.set_readonly("false");
            this.divBg2.form.divSelect.addChild(obj.name, obj);

            obj = new Edit("edtTelNo","137","70","140","22",null,null,null,null,null,null,this.divBg2.form.divSelect.form);
            obj.set_taborder("12");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.divBg2.form.divSelect.addChild(obj.name, obj);

            obj = new Edit("edtHpNo","407","70","140","22",null,null,null,null,null,null,this.divBg2.form.divSelect.form);
            obj.set_taborder("13");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.divBg2.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_13_06_01","10","123","540","28",null,null,null,null,null,null,this.divBg2.form.divSelect.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divBg2.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00","10","123","125","28",null,null,null,null,null,null,this.divBg2.form.divSelect.form);
            obj.set_taborder("15");
            obj.set_text("연금가입여부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divBg2.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00_00","10","151","540","28",null,null,null,null,null,null,this.divBg2.form.divSelect.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divBg2.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_01","10","151","125","28",null,null,null,null,null,null,this.divBg2.form.divSelect.form);
            obj.set_taborder("17");
            obj.set_text("의료보험");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divBg2.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00","10","236","540","28",null,null,null,null,null,null,this.divBg2.form.divSelect.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divBg2.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_00","10","236","125","28",null,null,null,null,null,null,this.divBg2.form.divSelect.form);
            obj.set_taborder("19");
            obj.set_text("전공분야");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divBg2.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_13_06_02","10","209","540","28",null,null,null,null,null,null,this.divBg2.form.divSelect.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divBg2.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_12_06_03","10","209","125","28",null,null,null,null,null,null,this.divBg2.form.divSelect.form);
            obj.set_taborder("22");
            obj.set_text("채용시 전공");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divBg2.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00_01","10","263","540","28",null,null,null,null,null,null,this.divBg2.form.divSelect.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divBg2.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_02","10","263","125","28",null,null,null,null,null,null,this.divBg2.form.divSelect.form);
            obj.set_taborder("24");
            obj.set_text("최종학력");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divBg2.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_01","10","290","540","28",null,null,null,null,null,null,this.divBg2.form.divSelect.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divBg2.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01","10","290","125","28",null,null,null,null,null,null,this.divBg2.form.divSelect.form);
            obj.set_taborder("26");
            obj.set_text("전직기관명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divBg2.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_01","280","209","125","28",null,null,null,null,null,null,this.divBg2.form.divSelect.form);
            obj.set_taborder("27");
            obj.set_text("본교출신여부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divBg2.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_00_01","280","263","125","28",null,null,null,null,null,null,this.divBg2.form.divSelect.form);
            obj.set_taborder("28");
            obj.set_text("학위취득국");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divBg2.form.divSelect.addChild(obj.name, obj);

            obj = new Combo("cboBongyo","407","212","140","22",null,null,null,null,null,null,this.divBg2.form.divSelect.form);
            obj.set_taborder("29");
            obj.set_innerdataset("dsYn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divBg2.form.divSelect.addChild(obj.name, obj);

            obj = new Combo("cboGukga","407","266","140","22",null,null,null,null,null,null,this.divBg2.form.divSelect.form);
            obj.set_taborder("30");
            obj.set_innerdataset("dsGukga");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divBg2.form.divSelect.addChild(obj.name, obj);

            obj = new Edit("edtEopmu","407","42","140","22",null,null,null,null,null,null,this.divBg2.form.divSelect.form);
            obj.set_taborder("31");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.divBg2.form.divSelect.addChild(obj.name, obj);

            obj = new Radio("RdoYeungeum","137","126","224","22",null,null,null,null,null,null,this.divBg2.form.divSelect.form);
            obj.set_taborder("32");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_enable("true");
            obj.set_readonly("true");
            var divBg2_form_divSelect_form_RdoYeungeum_innerdataset = new nexacro.NormalDataset("divBg2_form_divSelect_form_RdoYeungeum_innerdataset", obj);
            divBg2_form_divSelect_form_RdoYeungeum_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">가입</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">미가입</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">초과</Col></Row></Rows>");
            obj.set_innerdataset(divBg2_form_divSelect_form_RdoYeungeum_innerdataset);
            this.divBg2.form.divSelect.addChild(obj.name, obj);

            obj = new Radio("RdoBoheom","137","154","151","22",null,null,null,null,null,null,this.divBg2.form.divSelect.form);
            obj.set_taborder("33");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_enable("true");
            obj.set_readonly("true");
            var divBg2_form_divSelect_form_RdoBoheom_innerdataset = new nexacro.NormalDataset("divBg2_form_divSelect_form_RdoBoheom_innerdataset", obj);
            divBg2_form_divSelect_form_RdoBoheom_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">가입</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미가입</Col></Row></Rows>");
            obj.set_innerdataset(divBg2_form_divSelect_form_RdoBoheom_innerdataset);
            this.divBg2.form.divSelect.addChild(obj.name, obj);

            obj = new Combo("cboLastSchool","137","266","140","22",null,null,null,null,null,null,this.divBg2.form.divSelect.form);
            obj.set_taborder("20");
            obj.set_innerdataset("dsHakryeok");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divBg2.form.divSelect.addChild(obj.name, obj);

            obj = new Edit("edtChaeyongJeongong","137","212","140","22",null,null,null,null,null,null,this.divBg2.form.divSelect.form);
            obj.set_taborder("34");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.divBg2.form.divSelect.addChild(obj.name, obj);

            obj = new Edit("edtJeongongBunya","137","239","140","22",null,null,null,null,null,null,this.divBg2.form.divSelect.form);
            obj.set_taborder("35");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.divBg2.form.divSelect.addChild(obj.name, obj);

            obj = new Edit("edtBfGigwanNm","137","293","140","22",null,null,null,null,null,null,this.divBg2.form.divSelect.form);
            obj.set_taborder("36");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.divBg2.form.divSelect.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","0","0","10",null,null,"0",null,null,null,null,this.divBg2.form);
            obj.set_taborder("0");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divBg2.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","0","0",null,"10","0",null,null,null,null,null,this.divBg2.form);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divBg2.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00",null,"0","10",null,"0","0",null,null,null,null,this.divBg2.form);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divBg2.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01_00","0",null,null,"10","0","0",null,null,null,null,this.divBg2.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divBg2.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1160,450,this,function(p){});
            obj.set_description("직원번호생성");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item23","edt1_01_00_01_01_00","value","dsMaster","DANCHE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","edt1_01_00_01_01_00_00","value","dsMaster","DANCHE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","rdo_00_00","value","dsMaster","HYEONJAE_MOJIP_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","rdo_00_00_01","value","dsMaster","HYEONJAE_MOJIP_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divBg1.form.divSelect.form.cboJikwonGbcd","value","ds_input","JIKWON_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divBg1.form.divSelect.form.edtNm","value","ds_input","SEONGMYEONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divBg1.form.divSelect.form.mdtResNo","value","ds_input","JUMIN_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divBg1.form.divSelect.form.edtEnm","value","ds_input","SEONGMYEONG_YEONGMUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divBg1.form.divSelect.form.edtCnm","value","ds_input","SEONGMYEONG_HANMUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divBg1.form.divSelect.form.edtJikwonNo","value","ds_input","SABEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divBg1.form.divSelect.form.cboJeongong","value","ds_input","JEONGONG_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divBg1.form.divSelect.form.cboJikwi","value","ds_input","JIKWI_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divBg1.form.divSelect.form.cboDept","value","ds_input","DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divBg1.form.divSelect.form.calSosokBalryungDt","value","ds_input","BALRYEONG_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divBg1.form.divSelect.form.calJikwiBalryungDt","value","ds_input","JIKWI_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divBg1.form.divSelect.form.cboJikjong","value","ds_input","JIKJONG_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divBg1.form.divSelect.form.cboJikgeup","value","ds_input","JIKGEUP_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divBg1.form.divSelect.form.cboHobong","value","ds_input","HOBONG_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divBg1.form.divSelect.form.calImyongTodt","value","ds_input","TODT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divBg1.form.divSelect.form.calImyongFrdt","value","ds_input","FRDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divBg1.form.divSelect.form.calJikgeupBalryungDt","value","ds_input","JIKGEUP_IMYONG_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divBg2.form.divSelect.form.edtGigwanNm","value","ds_input","GIGWAN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divBg2.form.divSelect.form.mdtJaejik","value","ds_input","JAEJIK_GIGAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divBg2.form.divSelect.form.edtTelNo","value","ds_input","TEL_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divBg2.form.divSelect.form.edtHpNo","value","ds_input","HP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divBg2.form.divSelect.form.edtEopmu","value","ds_input","EOPMU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divBg2.form.divSelect.form.RdoYeungeum","value","ds_input","YEONGEUM_GAIP_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divBg2.form.divSelect.form.RdoBoheom","value","ds_input","UIRYO_BOHEOM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divBg2.form.divSelect.form.edtChaeyongJeongong","value","ds_input","CHOEJONG_JEONGONG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divBg2.form.divSelect.form.edtJeongongBunya","value","ds_input","JEONGONG_DVSN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divBg2.form.divSelect.form.edtBfGigwanNm","value","ds_input","BEFR_RGLR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divBg1.form.divSelect.form.cboGyeyeol","value","ds_input","GYEYEOL_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divBg1.form.divSelect.form.cboHakgwa","value","ds_input","DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divBg2.form.divSelect.form.cboLastSchool","value","ds_input","CHOEJONG_HAKRYEOK_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divBg2.form.divSelect.form.cboBongyo","value","ds_input","THIS_SCHL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divBg2.form.divSelect.form.cboGukga","value","ds_input","CHOEJONG_HAKRYEOK_GUKGA_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsGukga");
            this._addPreloadList("data","","dsYn");
        };
        
        // User Script
        this.registerScript("AM01_3010104_P01.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): AM01_3010104_P01.xfdl(직원번호생성)
        * 작 성         일 명: 정진호
        * 작 성         일 자: 2022/09/26
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
        this.lvchkColidDs1 	 = "SEONGMYEONG$JUMIN_NO$JIKWON_GBCD";
        this.lvchkColNameDs1 = "성명$주민등록번호$직원구분";
        this.lvchkColidDs2 	 = "DEPT_CD$JIKWI_GBCD$JIKWI_DT$JIKJONG_GBCD$JIKGEUP_GBCD$JIKGEUP_IMYONG_DT";
        this.lvchkColNameDs2 = "부서$직위$직위발령일$직종$직급$현 직급발령일";
        this.lvchkColidDs3 	 = "GYEYEOL_CD$DEPT_CD";
        this.lvchkColNameDs3 = "계열$학과";
        this.lvchkColidDs4 	 = "BALRYEONG_DT$JIKJONG_GBCD$JIKGEUP_GBCD$JIKGEUP_IMYONG_DT";
        this.lvchkColNameDs4 = "현 소속발령일$직종$직급$현 직급발령일";
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
            var strDs    = "dsJikwon|dsJikwi|dsJikjong|dsJikgeup|dsHobong|dsHakryeok|dsGukga|dsYn";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00207|00216|00205|00201|00202|00221|00266|01032";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "S|S|S|S|S|S|S|S";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
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
        	strDs       = "dsGyeyeol";
        	strComb     = "S";
        	svcId       = "gyeyeolInit";
        	strUseYn    = "1"; // 사용 여부
        	strJojikGbcd = "20";  // 조직구분 10.행정조직   20.학사조직   30.입시조직
        	strDaehakCd = "";  //
        	this.gfn_GyeyeolComboLoad(this.divBg1.form.divSelect.form.cboGyeyeol, strComb, svcId, strUseYn, strJojikGbcd, strDaehakCd , objApp.gv_cutPrgId);

        	// gfn_GyeyeolComboLoad(데이터셋, 콤보 옵션)
        	// 계열콤보
        	strDs       = "dsDept";
        	strComb     = "S";
        	svcId       = "";
        	strUseYn    = "1"; // 사용 여부
        	strJojikGbcd = "10";  // 조직구분 10.행정조직   20.학사조직   30.입시조직
        	strDaehakCd = "";  //
        	this.gfn_GyeyeolComboLoad(this.divBg1.form.divSelect.form.cboDept, strComb, svcId, strUseYn, strJojikGbcd, strDaehakCd , objApp.gv_cutPrgId);

        };

        this.fn_PostformInit = function()
        {
        	var nRow = this.ds_input.addRow();
        	this.ds_input.setColumn(nRow,"SEONGMYEONG", "");
        	this.ds_input.setColumn(nRow,"JUMIN_NO", "");
        	this.ds_input.setColumn(nRow,"SEONGMYEONG_YEONGMUN", "");
        	this.ds_input.setColumn(nRow,"SEONGMYEONG_HANMUN", "");
        	this.ds_input.setColumn(nRow,"JIKWON_GBCD", this.getOwnerFrame().jikwonGbcd);
        	this.ds_input.setColumn(nRow,"SABEON", "");
        	this.ds_input.setColumn(nRow,"DEPT_CD", "");
        	this.ds_input.setColumn(nRow,"BALRYEONG_DT", this.fn_Today());
        	this.ds_input.setColumn(nRow,"JIKWI_GBCD", "");
        	this.ds_input.setColumn(nRow,"JIKWI_DT", "");
        	this.ds_input.setColumn(nRow,"JEONGONG_CD", "");
        	this.ds_input.setColumn(nRow,"JIKJONG_GBCD", "");
        	this.ds_input.setColumn(nRow,"JIKGEUP_GBCD", "");
        	this.ds_input.setColumn(nRow,"JIKGEUP_IMYONG_DT", this.fn_Today());
        	this.ds_input.setColumn(nRow,"HOBONG_GBCD", "");
        	this.ds_input.setColumn(nRow,"FRDT", this.fn_Today());
        	this.ds_input.setColumn(nRow,"TODT", "");
        	this.ds_input.setColumn(nRow,"GIGWAN_NM", "");
        	this.ds_input.setColumn(nRow,"EOPMU", "");
        	this.ds_input.setColumn(nRow,"TEL_NO", "");
        	this.ds_input.setColumn(nRow,"HP_NO", "");
        	this.ds_input.setColumn(nRow,"JAEJIK_GIGAN", "");
        	this.ds_input.setColumn(nRow,"YEONGEUM_GAIP_CD", "1");
        	this.ds_input.setColumn(nRow,"UIRYO_BOHEOM", "N");
        	this.ds_input.setColumn(nRow,"CHOEJONG_JEONGONG_NM", "");
        	this.ds_input.setColumn(nRow,"THIS_SCHL", "N");
        	this.ds_input.setColumn(nRow,"JEONGONG_DVSN", "");
        	this.ds_input.setColumn(nRow,"CHOEJONG_HAKRYEOK_GBCD", "");
        	this.ds_input.setColumn(nRow,"CHOEJONG_HAKRYEOK_GUKGA_GBCD", "");
        	this.ds_input.setColumn(nRow,"BEFR_RGLR", "");
        	this.ds_input.setColumn(nRow,"GYEYEOL_CD", "");
        	this.ds_input.setColumn(nRow,"DEPT_CD2", "");

        	this.fn_JikwonGbcd(this.getOwnerFrame().jikwonGbcd);
        	this.divBg1_divSelect_cboJikgeup_onitemchanged(this.ds_input.getColumn(nRow, "JIKGEUP_GBCD"));

        	// 직종, 직급 기본값
        	this.divBg1.form.divSelect.form.cboJikjong.set_value(this.getOwnerFrame().jikjongGbcd);
        	this.divBg1.form.divSelect.form.cboJikgeup.set_value("301010"); // 시간강사
        	this.divBg1.form.divSelect.form.cboJikjong.set_readonly(true);
        };

        this.fn_PostGyeyeolInit = function()
        {
        	this.divBg1.form.divSelect.form.cboGyeyeol.set_index(0);

        	// 계열 onitemchanged 호출
        	let info = new nexacro.ItemChangeEventInfo;
        	this.divBg1_divSelect_cboGyeyeol_onitemchanged(this.divBg1.form.divSelect.form.cboGyeyeol, info);
        };

        this.fn_PostHakgwaInit = function()
        {
        	this.divBg1.form.divSelect.form.cboHakgwa.set_index(0);

        	// 학과 onitemchanged 호출
        	let info = new nexacro.ItemChangeEventInfo;
        	this.divBg1_divSelect_cboHakgwa_onitemchanged(this.divBg1.form.divSelect.form.cboHakgwa, info);
        };

        this.fn_PostJeongongInit = function()
        {
        	this.divBg1.form.divSelect.form.cboJeongong.set_index(0);
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
        			case "gyeyeolInit":
        			        this.fn_PostGyeyeolInit();
        			    break;
        			case "hakgwaInit":
        			        this.fn_PostHakgwaInit();
        			    break;
        			case "jeongongInit":
        			        this.fn_PostJeongongInit();
        			    break;
                    case "Save":
                            this.fn_PostSave();
                        break;
                    default:
                        break;
                }
            }
        };

        /**********************************************************************
                05. 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave = function()
        {
            // 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
            var chkFocusFlg = false;
            var result1 = this.gfn_cmmnChkEssentialItem(this.ds_input, this.lvchkColidDs1, this.lvchkColNameDs1, "", chkFocusFlg, this);
        	if (result1[0] != "success")
        	{
                this.gfn_alert(result1[0],"저장정보","","question");
                this.ds_input.set_rowposition(result1[1]); //데이터셋 변경
                return false;
        	}

        	if(this.ds_input.getColumn(0, "JIKWON_GBCD") == "20") {
        		var result2 = this.gfn_cmmnChkEssentialItem(this.ds_input, this.lvchkColidDs2, this.lvchkColNameDs2, "", chkFocusFlg, this);
        		if (result2[0] != "success")
        		{
        			this.gfn_alert(result2[0],"저장정보","","question");
        			this.ds_input.set_rowposition(result2[1]); //데이터셋 변경
        			return false;
        		}
        	} else {
        		if(this.ds_input.getColumn(0, "JIKGEUP_GBCD") == "101010") {
        			var result3 = this.gfn_cmmnChkEssentialItem(this.ds_input, this.lvchkColidDs3, this.lvchkColNameDs3, "", chkFocusFlg, this);
        			if (result3[0] != "success")
        			{
        				this.gfn_alert(result3[0],"저장정보","","question");
        				this.ds_input.set_rowposition(result3[1]); //데이터셋 변경
        				return false;
        			}
        		}
        		var result4 = this.gfn_cmmnChkEssentialItem(this.ds_input, this.lvchkColidDs4, this.lvchkColNameDs4, "", chkFocusFlg, this);
        		if (result4[0] != "success")
        		{
        			this.gfn_alert(result4[0],"저장정보","","question");
        			this.ds_input.set_rowposition(result4[1]); //데이터셋 변경
        			return false;
        		}
        	}

        	var result = this.gfn_confirm( "직원번호를 생성하시겠습니까?", "저장","", "question" );
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
            var strUrl      = "/prj/AM/AM01/Save_3010101_P01.do";
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
         *      기능 : 저장시 후처리
         */
        this.fn_PostSave = function()
        {
            this.alert("교직원 생성이 완료되었습니다.");
            this.close("CLOSE");
        };

        /**********************************************************************
                06. 각종함수
        ***********************************************************************/
        // 오늘날짜
        this.fn_Today = function()
        {
        	var objDate = new nexacro.Date();
        	var mm = (objDate.getMonth()+1).toString().padLeft(2, "0");
        	var dd = objDate.getDate().toString().padLeft(2, "0");
        	var today = objDate.getYear() + mm + dd;
        	return today;
        };

        // 직원구분에 따른 화면 변경
        this.fn_JikwonGbcd = function(jikwonGbcd)
        {
        	if((jikwonGbcd =="10") || (jikwonGbcd =="30") || (jikwonGbcd =="40")) {

        		this.divBg1.form.divSelect.form.staCg1.set_text("계열");
        		this.divBg1.form.divSelect.form.cboGyeyeol.set_visible(true); //AFFL_CODE 계열
        		this.divBg1.form.divSelect.form.cboDept.set_visible(false);  //DEPT_CODE2 부서

        		this.divBg1.form.divSelect.form.staCg2.set_text("학과/학부");
        		this.divBg1.form.divSelect.form.cboHakgwa.set_visible(true);    //DEPT_CODE 학과학부
        		this.divBg1.form.divSelect.form.cboJikwi.set_visible(false);  //CLSW_CODE 직위

        		this.divBg1.form.divSelect.form.staCg3.set_text("전공");
        		this.divBg1.form.divSelect.form.cboJeongong.set_visible(true); // MJOR_CODE 전공

        		this.divBg1.form.divSelect.form.staCg4.set_visible(false); //직위발령일 txt
        		this.divBg1.form.divSelect.form.calJikwiBalryungDt.set_visible(false); //CLSW_DATE 직위발령일
        	    this.divBg1.form.divSelect.form.calSosokBalryungDt.set_cssclass("point");
        	} else if(jikwonGbcd =="20") {

        		this.divBg1.form.divSelect.form.staCg1.set_text("부서");
        		this.divBg1.form.divSelect.form.cboGyeyeol.set_visible(false); //AFFL_CODE 계열
        		this.divBg1.form.divSelect.form.cboDept.set_visible(true);  //DEPT_CODE2 부서

        		this.divBg1.form.divSelect.form.staCg2.set_text("직위");
        		this.divBg1.form.divSelect.form.cboHakgwa.set_visible(false);    //DEPT_CODE 학과학부
        		this.divBg1.form.divSelect.form.cboJikwi.set_visible(true);  //CLSW_CODE 직위

        		this.divBg1.form.divSelect.form.staCg3.set_text("");
        		this.divBg1.form.divSelect.form.cboJeongong.set_visible(false); // MJOR_CODE 전공

        		this.divBg1.form.divSelect.form.staCg4.set_visible(true); //직위발령일 txt
        		this.divBg1.form.divSelect.form.calJikwiBalryungDt.set_visible(true); //CLSW_DATE 직위발령일
        		this.divBg1.form.divSelect.form.calSosokBalryungDt.set_cssclass("");
        	}
        }

        /**********************************************************************
                07. 기타 Control Event
        ***********************************************************************/
        // 학과 필터 적용
        this.divBg1_divSelect_cboGyeyeol_onitemchanged = function(obj,e)
        {
        	// gfn_HakgwaComboLoad(데이터셋, 콤보 옵션)
        	// 학과콤보
        	strDs       = "dsHakgwa";
        	strComb     = "S";
        	svcId       = "hakgwaInit";
        	strUseYn    = "1"; // 사용 여부
        	strJojikGbcd = "20";  // 조직구분 10.행정조직   20.학사조직   30.입시조직

        	if(this.gfn_isNull(e.postvalue))
        		strUpDeptCd = "";
        	else
        		strUpDeptCd = e.postvalue;

        	this.gfn_HakgwaComboLoad(this.divBg1.form.divSelect.form.cboHakgwa, strComb, svcId, strUseYn, strJojikGbcd, strUpDeptCd, objApp.gv_cutPrgId);
        };

        // 전공 필터 적용
        this.divBg1_divSelect_cboHakgwa_onitemchanged = function(obj,e)
        {
        	// gfn_JeongongComboLoad(데이터셋, 콤보 옵션)
        	// 전공콤보
        	strDs       = "dsJeongong";
        	strComb     = "S";
        	svcId       = "jeongongInit";
        	strUseYn    = "1"; // 사용 여부
        	strJojikGbcd = "20";  // 조직구분 10.행정조직   20.학사조직   30.입시조직

        	if(this.gfn_isNull(e.postvalue))
        		strUpDeptCd = "";
        	else
        		strUpDeptCd = e.postvalue;

        	this.gfn_JeongongComboLoad(this.divBg1.form.divSelect.form.cboJeongong, strComb, svcId, strUseYn, strJojikGbcd, strUpDeptCd, objApp.gv_cutPrgId);
        };

        this.divBg1_divSelect_cboJikjong_onitemchanged = function(obj,e)
        {
            if(obj.value =="1020") {
        		this.divBg2.set_visible(true);
        	} else {
        		this.divBg2.set_visible(false);
        	}
        };

        //직원구분에 따른 화면 변경
        this.divBg1_divSelect_cboJikwonGbcd_onitemchanged = function(obj,e)
        {
        	this.fn_JikwonGbcd(obj.value);
        };

        // 팝업 종료
        this.btnCancel_onclick = function(obj,e)
        {
        	this.close("CLOSE");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.divBg1.form.divSelect.form.cboJikwonGbcd.addEventHandler("onitemchanged",this.divBg1_divSelect_cboJikwonGbcd_onitemchanged,this);
            this.divBg1.form.divSelect.form.stc_05.addEventHandler("onclick",this.stc_05_onclick,this);
            this.divBg1.form.divSelect.form.cboJikjong.addEventHandler("onitemchanged",this.divBg1_divSelect_cboJikjong_onitemchanged,this);
            this.divBg1.form.divSelect.form.cboJikgeup.addEventHandler("onitemchanged",this.divBg1_divSelect_cboJikgeup_onitemchanged,this);
            this.divBg1.form.divSelect.form.cboGyeyeol.addEventHandler("onitemchanged",this.divBg1_divSelect_cboGyeyeol_onitemchanged,this);
            this.divBg1.form.divSelect.form.cboHakgwa.addEventHandler("onitemchanged",this.divBg1_divSelect_cboHakgwa_onitemchanged,this);
            this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
            this.btnSave.addEventHandler("onclick",this.fn_Save,this);
            this.divBg2.form.divSelect.form.stc_05.addEventHandler("onclick",this.stc_05_onclick,this);
        };
        this.loadIncludeScript("AM01_3010104_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
