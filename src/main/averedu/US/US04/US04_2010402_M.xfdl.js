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
            this.set_titletext("증명서일괄발급");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"JEOPSU_NO\" type=\"STRING\" size=\"256\"/><Column id=\"JEUNGMYEONGSEO_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JEUNGMYEONGSEO_KIND\" type=\"STRING\" size=\"256\"/><Column id=\"SINCHEONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"GYEYEOL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"256\"/><Column id=\"HAKJEOK_STCD\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"BUNBAN\" type=\"STRING\" size=\"256\"/><Column id=\"DANGA\" type=\"STRING\" size=\"256\"/><Column id=\"BALGEUP_MAESU\" type=\"STRING\" size=\"256\"/><Column id=\"GEUMAEK\" type=\"STRING\" size=\"256\"/><Column id=\"BALGEUP_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"BALGEUP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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


            obj = new Dataset("dsKorEng", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCert", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSincheong", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJuya", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHaknyeon", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBunban", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakjeokSangtae", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJeopsuNo", this);
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"JEOPSU_NO\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divBg","0","0","780",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("type01");
            obj.set_background("#e3ebff");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divSelect","10","30",null,"350","10",null,null,null,null,null,this.divBg.form);
            obj.set_taborder("5");
            obj.set_background("white");
            obj.set_border("1px solid #4c4b66");
            obj.set_text("");
            this.divBg.addChild(obj.name, obj);

            obj = new Button("btnPreview","290","295","80","25",null,null,null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("12");
            obj.set_text("미리보기");
            obj.set_enable("true");
            obj.set_background("blue");
            obj.set_color("white");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Button("btnPrint","390","295","80","25",null,null,null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("13");
            obj.set_text("일괄발급");
            obj.set_enable("true");
            obj.set_background("gold");
            obj.set_color("white");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_01","380","94",null,"28","8",null,null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_00_00","380","122",null,"28","8",null,null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_13_06","10","10",null,"28","8",null,null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_12_06","10","10","165","28",null,null,null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("17");
            obj.set_text("국/영 구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00","10","38",null,"28","8",null,null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01","10","38","165","28",null,null,null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("19");
            obj.set_text("증명서 종류");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00","10","66",null,"28","8",null,null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00","10","66","165","28",null,null,null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("21");
            obj.set_text("신청구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Static("staScore1Bg","10","94",null,"28","378",null,null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_visible("false");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Static("staScore1","10","94","165","28",null,null,null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("23");
            obj.set_text("점수 표기 방법");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_visible("false");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Static("staScore2Bg","10","122",null,"28","378",null,null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_visible("false");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Static("staScore2","10","122","165","28",null,null,null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("25");
            obj.set_text("석차 포함 여부");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_visible("false");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02","380","10","165","28",null,null,null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("26");
            obj.set_text("계열");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_00","380","38","165","28",null,null,null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("27");
            obj.set_text("학과/학부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02","380","66","165","28",null,null,null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("28");
            obj.set_text("전공");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_01","380","94","165","28",null,null,null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("29");
            obj.set_text("주야구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_00_00","380","122","165","28",null,null,null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("30");
            obj.set_text("학년");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Combo("cboKorEng","177","13","200","22",null,null,null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("0");
            obj.set_innerdataset("dsKorEng");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Combo("cboGyeyeol","547","13","200","22",null,null,null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsGyeyeol");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_00_00_00","380","150",null,"28","8",null,null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_00_00_00","380","150","165","28",null,null,null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("32");
            obj.set_text("분반");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_00_00_00_00","380","178",null,"28","8",null,null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_00_00_00_00","380","178","165","28",null,null,null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("34");
            obj.set_text("학적상태");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Combo("cboCert","177","41","200","22",null,null,null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsCert");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Combo("cboSincheong","177","69","200","22",null,null,null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsSincheong");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Combo("cboJuya","547","97","200","22",null,null,null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsJuya");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Combo("cboJeongong","547","69","200","22",null,null,null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsJeongong");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Combo("cboHakgwa","547","41","200","22",null,null,null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsHakgwa");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Combo("cboHaknyeon","547","125","200","22",null,null,null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsHaknyeon");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Combo("cboBunban","547","153","200","22",null,null,null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("8");
            obj.set_innerdataset("dsBunban");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Combo("cboHakjeokSangtae","547","181","200","22",null,null,null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("9");
            obj.set_innerdataset("dsHakjeokSangtae");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Radio("rdoScore1","182","97","200","22",null,null,null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("10");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_visible("false");
            var divBg_form_divSelect_form_rdoScore1_innerdataset = new nexacro.NormalDataset("divBg_form_divSelect_form_rdoScore1_innerdataset", obj);
            divBg_form_divSelect_form_rdoScore1_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">백분율</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">평점</Col></Row></Rows>");
            obj.set_innerdataset(divBg_form_divSelect_form_rdoScore1_innerdataset);
            obj.set_text("백분율");
            obj.set_value("1");
            obj.set_index("0");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Radio("rdoScore2","182","125","200","22",null,null,null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("11");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_visible("false");
            var divBg_form_divSelect_form_rdoScore2_innerdataset = new nexacro.NormalDataset("divBg_form_divSelect_form_rdoScore2_innerdataset", obj);
            divBg_form_divSelect_form_rdoScore2_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">석차 미포함</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">석차 포함</Col></Row></Rows>");
            obj.set_innerdataset(divBg_form_divSelect_form_rdoScore2_innerdataset);
            obj.set_text("석차 미포함");
            obj.set_value("2");
            obj.set_index("0");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_63_00_00","-9","250","648","20",null,null,null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("35");
            obj.set_text("** 성적증명서와 학적부는 출력내용이 많아 출력창이 2~3분정도 걸릴 수 있으니 유념하시기 바랍니다.");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_63_00","-9","220","362","20",null,null,null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("36");
            obj.set_text("** 학과별 증명서의 일괄발급을 처리합니다.");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Static("staScore","-9","160","362","20",null,null,null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("37");
            obj.set_text("(98학번 이전의 학생은 평점으로만 출력됩니다.)");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_visible("false");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","10","22","290","8",null,null,null,null,null,null,this.divBg.form);
            obj.set_taborder("0");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divBg.addChild(obj.name, obj);

            obj = new Static("stc_05","10","5","220","22",null,null,null,null,null,null,this.divBg.form);
            obj.set_taborder("1");
            obj.set_text("증명서 일괄발급");
            obj.set_cssclass("sta_WF_Title01");
            obj.set_fittocontents("width");
            this.divBg.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","770","0",null,null,"0","0",null,null,null,null,this.divBg.form);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divBg.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","0","0","10",null,null,"0",null,null,null,null,this.divBg.form);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divBg.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","0","0",null,"10","0",null,null,null,null,null,this.divBg.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divBg.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("증명서일괄발급");
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

            obj = new BindItem("item0","divBg.form.divSelect.form.cboKorEng","value","ds_input","JEUNGMYEONGSEO_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divBg.form.divSelect.form.cboGyeyeol","value","ds_input","GYEYEOL_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divBg.form.divSelect.form.cboCert","value","ds_input","JEUNGMYEONGSEO_KIND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divBg.form.divSelect.form.cboSincheong","value","ds_input","SINCHEONG_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divBg.form.divSelect.form.cboJuya","value","ds_input","JUYA_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divBg.form.divSelect.form.cboJeongong","value","ds_input","JEONGONG_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divBg.form.divSelect.form.cboHakgwa","value","ds_input","HAKGWA_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divBg.form.divSelect.form.cboHaknyeon","value","ds_input","HAKNYEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divBg.form.divSelect.form.cboBunban","value","ds_input","BUNBAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divBg.form.divSelect.form.cboHakjeokSangtae","value","ds_input","HAKJEOK_STCD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsJeopsuNo");
        };
        
        // User Script
        this.registerScript("US04_2010402_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): US04_2010402_M.xfdl(증명서 일괄발급)
        * 작 성         일 명: jiback
        * 작 성         일 자: 2021/10/01
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
            var strDs    = "dsKorEng|dsCert|dsSincheong|dsJuya|dsHaknyeon|dsBunban|dsHakjeokSangtae";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00041|00032|00043|00003|00060|00050|00004";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "S|S|S|S|S|S|S";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
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
        	strComb     = "T";
        	svcId       = "gyeyeolInit";
        	strUseYn    = "1"; // 사용 여부
        	strJojikGbcd = "20";  // 조직구분 10.행정조직   20.학사조직   30.입시조직
        	strDaehakCd = "";  //
        	this.gfn_GyeyeolComboLoad(this.divBg.form.divSelect.form.cboGyeyeol, strComb, svcId, strUseYn, strJojikGbcd, strDaehakCd , objApp.gv_cutPrgId);
        };

        this.fn_PostInit = function()
        {
        	this.ds_input.setColumn(0, "SINCHEONG_DT", objApp.gds_SystemDate.getColumn(0,"YYYYMMDD"));
        }

        this.fn_PostGyeyeolInit = function()
        {
        	this.divBg.form.divSelect.form.cboGyeyeol.set_index(0);

        	// 계열 onitemchanged 호출
        	let info = new nexacro.ItemChangeEventInfo;
        	this.divBg_divSelect_cboGyeyeol_onitemchanged(this.divBg.form.divSelect.form.cboGyeyeol, info);
        };


        this.fn_PostHakgwaInit = function()
        {
        	this.divBg.form.divSelect.form.cboHakgwa.set_index(0);

        	// 학과 onitemchanged 호출
        	let info = new nexacro.ItemChangeEventInfo;
        	this.divBg_divSelect_cboHakgwa_onitemchanged(this.divBg.form.divSelect.form.cboHakgwa, info);
        };

        this.fn_PostJeongongInit = function()
        {
        	this.divBg.form.divSelect.form.cboJeongong.set_index(0);
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
        			        this.fn_PostInit();
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
                    case "Ret":
                            this.fn_PostRet();
                        break;
                    case "Save":
                            this.fn_Cert('0');
                        break;
                    default:
                        break;
                }
            }
        };

        /**********************************************************************
                05. 미리보기
        ***********************************************************************/
        this.divBg_divSelect_btnPreview_onclick = function(obj,e)
        {
        	if(!this.fn_PrePrint())
            {
                return false;
            }
        	this.fn_Cert('1');
        };

        /**********************************************************************
                06. 일괄 발급
        ***********************************************************************/
        this.divBg_divSelect_btnPrint_onclick = function(obj,e)
        {
        	if(!this.fn_PrePrint())
            {
                return false;
            }

        	var result = this.gfn_confirm( "발급하시겠습니까?", "저장","", "question" );
        	if(result == 0)
        	{
        		return false;
        	}

        	this.fn_InsertCert();
        };

        this.fn_InsertCert = function()
        {
        	this.fn_JeopsuNo();
        	jeopsuNo = this.dsJeopsuNo.getColumn(0, "JEOPSU_NO");

        	var price = 0;
        	if (this.ds_input.getColumn(0, "JEUNGMYEONGSEO_GBCD") == '1')
        	{
        		price = 500;
        	}
        	else
        	{
        		price = 1000;
        	}

        	this.ds_input.setColumn(0, "JEOPSU_NO", jeopsuNo);
        	this.ds_input.setColumn(0, "DANGA", price);
        	this.ds_input.setColumn(0, "BALGEUP_MAESU", 1);
        	this.ds_input.setColumn(0, "GEUMAEK", price);
        	this.ds_input.setColumn(0, "BALGEUP_YYYY", objApp.gds_SystemDate.getColumn(0,"YYYY"));
        	this.ds_input.setColumn(0, "BALGEUP_GBCD", "0");

        	var strSvc      = "Save";
            var strUrl      = "/prj/US/US04/Save_2010402_M.do";
            var strInDs     = "ds_input=ds_input:a ";
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

        /**********************************************************************
                07. 각종 함수 선언
        ***********************************************************************/
        // 조회조건 확인
        this.fn_PrePrint = function ()
        {
        	var jeungmyeongseoGbcd = this.ds_input.getColumn(0, "JEUNGMYEONGSEO_GBCD");
        	var jeungmyeongseoKind = this.ds_input.getColumn(0, "JEUNGMYEONGSEO_KIND");
        	var sincheongGb = this.ds_input.getColumn(0, "SINCHEONG_GBCD");
        	var gyeyeolCd = this.ds_input.getColumn(0, "GYEYEOL_CD");
        	var hakgwaCd  = this.ds_input.getColumn(0, "HAKGWA_CD");
        	var juyaGbcd = this.ds_input.getColumn(0, "JUYA_GBCD");
        	var haknyeon = this.ds_input.getColumn(0, "HAKNYEON");
        	var hakjeokStcd = this.ds_input.getColumn(0, "HAKJEOK_STCD");
        	var bunban = this.ds_input.getColumn(0, "BUNBAN");

        	if (this.gfn_isNull(jeungmyeongseoGbcd))
        	{
        		this.alert("'국/영 구분' 을 선택하세요.");
        		return false;
        	}

        	if (this.gfn_isNull(jeungmyeongseoKind))
        	{
        		this.alert("'증명서 종류' 를 선택하세요.");
        		return false;
        	}

        	if (this.gfn_isNull(sincheongGb))
        	{
        		this.alert("'신청구분' 을 선택하세요.");
        		return false;
        	}

        	if (this.gfn_isNull(gyeyeolCd))
        	{
        		this.alert("'계열' 을 선택하세요.");
        		return false;
        	}

        	if (this.gfn_isNull(hakgwaCd))
        	{
        		this.alert("'학과' 를 선택하세요.");
        		return false;
        	}

        	if (this.gfn_isNull(juyaGbcd))
        	{
        		this.alert("'주야구분' 을 선택하세요.");
        		return false;
        	}

        	if (this.gfn_isNull(haknyeon))
        	{
        		this.alert("'학년' 을 선택하세요.");
        		return false;
        	}

        	if (this.gfn_isNull(bunban))
        	{
        		this.alert("'분반' 을 선택하세요.");
        		return false;
        	}

        	if (this.gfn_isNull(hakjeokStcd))
        	{
        		this.alert("'학적상태' 를 선택하세요.");
        		return false;
        	}
        	return true;
        };

        // 증명서 호출
        this.fn_Cert = function(previewYn)
        {
        	// 영문 증명서는 재학, 성적증명서만 가능
        	if (this.ds_input.getColumn(0, "JEUNGMYEONGSEO_GBCD") == '2'
        	&& this.ds_input.getColumn(0, "JEUNGMYEONGSEO_KIND") != '10'
        	&& this.ds_input.getColumn(0, "JEUNGMYEONGSEO_KIND") != '02')
        	{
        		this.alert("영문증명서는 재학, 성적증명서만 가능합니다.");
        		return false;
        	}

        	var url = '';

        	switch(this.ds_input.getColumn(0, "JEUNGMYEONGSEO_KIND"))
        	{
        		case '01' :   // 학적부
        				url = 'US04/US04_2010401_M_01_' + this.ds_input.getColumn(0, "JEUNGMYEONGSEO_GBCD") + '_'  ;
        				if (previewYn == '1')
        				{
        					url += 'PREVIEW.crf';
        				}
        				else
        				{
        					url += this.ds_input.getColumn(0, "SINCHEONG_GBCD") + '.crf';
        				}
        			break;
        		case '02' :  // 성적
        				url = 'US04/US04_2010401_M_02_' + this.ds_input.getColumn(0, "JEUNGMYEONGSEO_GBCD") + '_'  ;
        				if (previewYn == '1')
        				{
        					url += 'PREVIEW.crf';
        				}
        				else
        				{
        					if (this.ds_input.getColumn(0, "JEUNGMYEONGSEO_GBCD") == '2')
        					{
        						url += 'B.crf';
        					}
        					else
        					{
        						url += this.ds_input.getColumn(0, "SINCHEONG_GBCD") + '.crf';
        					}
        				}
        			break;
        		case '10' : // 재학
        				if (this.ds_input.getColumn(0, "JEUNGMYEONGSEO_GBCD") == '1')
        				{
        					url = 'US04/US04_2010401_M_10_' + this.ds_input.getColumn(0, "JEUNGMYEONGSEO_GBCD") + '_' + this.ds_input.getColumn(0, "SINCHEONG_GBCD") +'.crf';
        				}
        				if (this.ds_input.getColumn(0, "JEUNGMYEONGSEO_GBCD") == '2')
        				{
        					url = 'US04/US04_2010401_M_10_' + this.ds_input.getColumn(0, "JEUNGMYEONGSEO_GBCD") + '_A.crf';
        				}
        			break;
        		case '20' : // 휴학
        				url = 'US04/US04_2010401_M_20_' + this.ds_input.getColumn(0, "JEUNGMYEONGSEO_GBCD") + '_' + this.ds_input.getColumn(0, "SINCHEONG_GBCD") +'.crf';
        			break;
        		case '30' : // 제적
        				url = 'US04/US04_2010401_M_30_' + this.ds_input.getColumn(0, "JEUNGMYEONGSEO_GBCD") + '_' + this.ds_input.getColumn(0, "SINCHEONG_GBCD") +'.crf';
        			break;
        		case '50' : // 졸업
        				url = 'US04/US04_2010401_M_50_' + this.ds_input.getColumn(0, "JEUNGMYEONGSEO_GBCD") + '_' + this.ds_input.getColumn(0, "SINCHEONG_GBCD") +'.crf';
        			break;
        		case '51' : // 졸업예정
        				url = 'US04/US04_2010401_M_51_' + this.ds_input.getColumn(0, "JEUNGMYEONGSEO_GBCD") + '_' + this.ds_input.getColumn(0, "SINCHEONG_GBCD") +'.crf';
        			break;
        	}

        	var param = new Object();
        		param.HAKBEON = '';

        	if (!(this.ds_input.getColumn(0, "JEUNGMYEONGSEO_GBCD") == '01' && previewYn == '1') || !(this.ds_input.getColumn(0, "JEUNGMYEONGSEO_KIND") == '02' && previewYn == '1'))
        	{
        		param.JEOPSU_NO = this.ds_input.getColumn(0, "JEOPSU_NO");
        		param.SINCHEONG_DT = objApp.gds_SystemDate.getColumn(0,"YYYYMMDD");
        		param.JEUNGMYEONGSEO_KIND = this.ds_input.getColumn(0, "JEUNGMYEONGSEO_KIND");
        		param.JEUNGMYEONGSEO_GBCD = this.ds_input.getColumn(0, "JEUNGMYEONGSEO_GBCD");
        		param.SINCHEONG_GBCD = this.ds_input.getColumn(0, "SINCHEONG_GBCD");
        	}
        	param.HAKGWA_CD = this.ds_input.getColumn(0, "HAKGWA_CD");
        	param.JEONGONG_CD = this.ds_input.getColumn(0, "JEONGONG_CD");
        	param.JUYA_GBCD = this.ds_input.getColumn(0, "JUYA_GBCD");
        	param.HAKNYEON = this.ds_input.getColumn(0, "HAKNYEON");
        	param.BUNBAN = this.ds_input.getColumn(0, "BUNBAN");
        	param.HAKJEOK_STCD = this.ds_input.getColumn(0, "HAKJEOK_STCD");

        	if (this.ds_input.getColumn(0, "SINCHEONG_GBCD") == 'C') // fax
        	{
        		param.DAMDANGJA = objApp.gds_userInfoDb.getColumn(0,"USER_NM");
        		param.TEL_NO = '061)270-2513';
        	}

        	if (this.ds_input.getColumn(0, "JEUNGMYEONGSEO_KIND") == '01')
        	{
        		var domain = location.hostname;

        		if (domain.trim() == 'localhost')
        		{
        			domain = 'mstis.dev.codefarm.co.kr';
        		}

        		param.DOMAIN = domain;
        	}

        	if (this.ds_input.getColumn(0, "JEUNGMYEONGSEO_KIND") == '02')
        	{
        		// 성적증명서 타입
        		var scoreType  = this.divBg.form.divSelect.form.rdoScore1.value + '';
        			scoreType += this.divBg.form.divSelect.form.rdoScore2.value + '';
        		param.SCORE_TYPE = scoreType;
        	}

        	if (this.ds_input.getColumn(0, "JEUNGMYEONGSEO_KIND") != '01' && this.ds_input.getColumn(0, "JEUNGMYEONGSEO_KIND") != '02' && previewYn == '1')
        	{
        		param.PREVIEW = '1';
        	}

        	param.PG_CD = objApp.gv_cutPrgId;

        	if (previewYn == '1')
        	{
        		this.gfn_commonUtils_report(url,  param);
        	}
        	if (previewYn == '0')
        	{
        		this.gfn_commonUtils_report(url,  param, true);
        	}
        };

        // 증명서 접수번호 조회
        this.fn_JeopsuNo = function()
        {
            var strSvc      = "dsJeopsuNo";
            var strUrl      = "/prj/US/US04/Retrieve_2010401_M_JeopsuNo.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsJeopsuNo=dsJeopsuNo";
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
        };

        /**********************************************************************
                08. 기타 Control Event
        ***********************************************************************/
        // 학과 필터 적용
        this.divBg_divSelect_cboGyeyeol_onitemchanged = function(obj,e)
        {
        	// gfn_HakgwaComboLoad(데이터셋, 콤보 옵션)
        	// 학과콤보
        	strDs       = "dsHakgwa";
        	strComb     = "T";
        	svcId       = "hakgwaInit";
        	strUseYn    = "1"; // 사용 여부
        	strJojikGbcd = "20";  // 조직구분 10.행정조직   20.학사조직   30.입시조직

        	if(this.gfn_isNull(e.postvalue))
        		strUpDeptCd = "";
        	else
        		strUpDeptCd = e.postvalue;

        	this.gfn_HakgwaComboLoad(this.divBg.form.divSelect.form.cboHakgwa, strComb, svcId, strUseYn, strJojikGbcd, strUpDeptCd, objApp.gv_cutPrgId);
        };

        // 전공 필터 적용
        this.divBg_divSelect_cboHakgwa_onitemchanged = function(obj,e)
        {
        	// gfn_JeongongComboLoad(데이터셋, 콤보 옵션)
        	// 전공콤보
        	strDs       = "dsJeongong";
        	strComb     = "T";
        	svcId       = "jeongongInit";
        	strUseYn    = "1"; // 사용 여부
        	strJojikGbcd = "20";  // 조직구분 10.행정조직   20.학사조직   30.입시조직

        	if(this.gfn_isNull(e.postvalue))
        		strUpDeptCd = "";
        	else
        		strUpDeptCd = e.postvalue;

        	this.gfn_JeongongComboLoad(this.divBg.form.divSelect.form.cboJeongong, strComb, svcId, strUseYn, strJojikGbcd, strUpDeptCd, objApp.gv_cutPrgId);
        };

        // 증명서 종류가 성적증명서인 경우 라디오버튼 활성화
        this.divBg_divSelect_cboCert_onitemchanged = function(obj,e)
        {
        	if(e.postvalue == '02')
        	{
        		this.divBg.form.divSelect.form.rdoScore1.set_visible(true);
        		this.divBg.form.divSelect.form.rdoScore2.set_visible(true);
        		this.divBg.form.divSelect.form.staScore1.set_visible(true);
        		this.divBg.form.divSelect.form.staScore2.set_visible(true);
        		this.divBg.form.divSelect.form.staScore1Bg.set_visible(true);
        		this.divBg.form.divSelect.form.staScore2Bg.set_visible(true);
        		this.divBg.form.divSelect.form.staScore.set_visible(true);
        	}
        	else
        	{
        		this.divBg.form.divSelect.form.rdoScore1.set_visible(false);
        		this.divBg.form.divSelect.form.rdoScore2.set_visible(false);
        		this.divBg.form.divSelect.form.staScore1.set_visible(false);
        		this.divBg.form.divSelect.form.staScore2.set_visible(false);
        		this.divBg.form.divSelect.form.staScore1Bg.set_visible(false);
        		this.divBg.form.divSelect.form.staScore2Bg.set_visible(false);
        		this.divBg.form.divSelect.form.staScore.set_visible(false);
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.divBg.form.divSelect.form.btnPreview.addEventHandler("onclick",this.divBg_divSelect_btnPreview_onclick,this);
            this.divBg.form.divSelect.form.btnPrint.addEventHandler("onclick",this.divBg_divSelect_btnPrint_onclick,this);
            this.divBg.form.divSelect.form.cboGyeyeol.addEventHandler("onitemchanged",this.divBg_divSelect_cboGyeyeol_onitemchanged,this);
            this.divBg.form.divSelect.form.cboCert.addEventHandler("onitemchanged",this.divBg_divSelect_cboCert_onitemchanged,this);
            this.divBg.form.divSelect.form.cboHakgwa.addEventHandler("onitemchanged",this.divBg_divSelect_cboHakgwa_onitemchanged,this);
            this.divBg.form.stc_05.addEventHandler("onclick",this.stc_05_onclick,this);
        };
        this.loadIncludeScript("US04_2010402_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
