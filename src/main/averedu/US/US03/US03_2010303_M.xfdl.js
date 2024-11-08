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
            this.set_titletext("졸업대상자관리");
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
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"JOLEOP_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"JOLEOP_HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"JOLEOP_YYYY_HAKGI\" type=\"STRING\" size=\"65532\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"50\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"JUYA_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"JOLEOP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JOLEOP_DT\" type=\"STRING\" size=\"8\"/><Column id=\"JOLEOP_HOETSU\" type=\"STRING\" size=\"5\"/><Column id=\"HAKGWA_SEOKCHA\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HAKGWA_CHONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HAKGWA_SEOKCHA2\" type=\"STRING\" size=\"65532\"/><Column id=\"JEONCHE_SEOKCHA\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEONCHE_CHONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEONCHE_SEOKCHA2\" type=\"STRING\" size=\"65532\"/><Column id=\"JEUNGSEO_NO\" type=\"STRING\" size=\"20\"/><Column id=\"HAKWI_DEUNGROK_NO1\" type=\"STRING\" size=\"20\"/><Column id=\"HAKWI_DEUNGROK_NO1_NM\" type=\"STRING\" size=\"68\"/><Column id=\"HAKWI_DEUNGROK_NO2\" type=\"STRING\" size=\"20\"/><Column id=\"HAKWI_CD1\" type=\"STRING\" size=\"20\"/><Column id=\"HAKWI_NM1\" type=\"STRING\" size=\"65532\"/><Column id=\"HAKWI_CD2\" type=\"STRING\" size=\"20\"/><Column id=\"GYOWON_JAGYEOK_NO\" type=\"STRING\" size=\"20\"/><Column id=\"GYOWON_JEUNGSEO_NO\" type=\"STRING\" size=\"20\"/><Column id=\"JOLEOP_YN\" type=\"STRING\" size=\"1\"/><Column id=\"JOLEOP_BULGASAYU_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JOLEOP_BULGASAYU_NAEYONG\" type=\"STRING\" size=\"2000\"/><Column id=\"YUGEUP_YN\" type=\"STRING\" size=\"1\"/><Column id=\"YUGEUP_CHEORI_DT\" type=\"STRING\" size=\"8\"/><Column id=\"JOLEOP_CHEORI_YN\" type=\"STRING\" size=\"1\"/><Column id=\"JOLEOP_CHEORI_DT\" type=\"STRING\" size=\"8\"/><Column id=\"BYEONDONG_SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"SINCHEONG_HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHWIDEUK_HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYOYANG_SINCHEONG_HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYOYANG_CHWIDEUK_HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEONGONG_SINCHEONG_HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEONGONG_CHWIDEUK_HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYOJIK_SINCHEONG_HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYOJIK_CHWIDEUK_HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BIGO\" type=\"STRING\" size=\"1000\"/><Column id=\"JOLEOP_GIJUN_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKJEOK_STCD\" type=\"STRING\" size=\"3\"/><Column id=\"HAKJEOK_STNM\" type=\"STRING\" size=\"65532\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"JOLEOP_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"JOLEOP_HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"DAEHAK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"256\"/><Column id=\"JOLEOP_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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


            obj = new Dataset("dsHakgi", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REF_2\" type=\"STRING\" size=\"256\"/><Column id=\"REF_3\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBaseYyyyHakgi", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJoleopYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REF_4\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJoleopBulga", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCheori", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"JOLEOP_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"JOLEOP_HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"JOLEOP_CHEORI_DT\" type=\"STRING\" size=\"256\"/><Column id=\"GBN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCnt", this);
            obj._setContents("<ColumnInfo><Column id=\"JOLEOP_CREATE_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JOLEOP_CHEORI_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JOLEOP_SEOKCHA_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"YUGEUP_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DEUNGROK_NO_CNT\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsIljeong", this);
            obj._setContents("<ColumnInfo><Column id=\"ILJEONG_YN\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divJolup","0","104",null,"42","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","16","0","1620","9",null,null,null,null,null,null,this.divJolup.form);
            obj.set_taborder("8");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divJolup.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","20","31","1610","9",null,null,null,null,null,null,this.divJolup.form);
            obj.set_taborder("9");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divJolup.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","67",null,null,null,null,null,null,this.divJolup.form);
            obj.set_taborder("10");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divJolup.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","77","0","10","37",null,null,null,null,null,null,this.divJolup.form);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divJolup.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","338","0","10","37",null,null,null,null,null,null,this.divJolup.form);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divJolup.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01","478","-1","56","36",null,null,null,null,null,null,this.divJolup.form);
            obj.set_taborder("13");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divJolup.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_01","227","0","56","40",null,null,null,null,null,null,this.divJolup.form);
            obj.set_taborder("14");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divJolup.addChild(obj.name, obj);

            obj = new Static("stc_01_00","7","9","70","22",null,null,null,null,null,null,this.divJolup.form);
            obj.set_taborder("15");
            obj.set_text("졸업년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divJolup.addChild(obj.name, obj);

            obj = new Spin("spnJolupYYYY","87","9","140","22",null,null,null,null,null,null,this.divJolup.form);
            obj.set_taborder("0");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.divJolup.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","264","9","70","22",null,null,null,null,null,null,this.divJolup.form);
            obj.set_taborder("16");
            obj.set_text("졸업학기");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divJolup.addChild(obj.name, obj);

            obj = new Combo("cboJolupHakgi","348","9","130","22",null,null,null,null,null,null,this.divJolup.form);
            obj.set_taborder("1");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("REF_2");
            obj.set_innerdataset("dsHakgi");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divJolup.addChild(obj.name, obj);

            obj = new Button("btnDaesangja",null,"9","115","22","989",null,null,null,null,null,this.divJolup.form);
            obj.set_taborder("2");
            obj.set_text("졸업대상자 생성");
            obj.set_cssclass("btn_WF_Crud");
            this.divJolup.addChild(obj.name, obj);

            obj = new Static("Static02","652","10","20","20",null,null,null,null,null,null,this.divJolup.form);
            obj.set_taborder("17");
            obj.set_text(">>");
            obj.set_textAlign("right");
            this.divJolup.addChild(obj.name, obj);

            obj = new Button("btnCheori",null,"9","105","22","855",null,null,null,null,null,this.divJolup.form);
            obj.set_taborder("3");
            obj.set_text("졸업여부 처리");
            obj.set_cssclass("btn_WF_Crud");
            this.divJolup.addChild(obj.name, obj);

            obj = new Static("Static02_00","786","10","20","20",null,null,null,null,null,null,this.divJolup.form);
            obj.set_taborder("18");
            obj.set_text(">>");
            obj.set_textAlign("right");
            this.divJolup.addChild(obj.name, obj);

            obj = new Button("btnGyesan",null,"9","75","22","750",null,null,null,null,null,this.divJolup.form);
            obj.set_taborder("4");
            obj.set_text("석차계산");
            obj.set_cssclass("btn_WF_Crud");
            this.divJolup.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","891","10","20","20",null,null,null,null,null,null,this.divJolup.form);
            obj.set_taborder("19");
            obj.set_text(">>");
            obj.set_textAlign("right");
            this.divJolup.addChild(obj.name, obj);

            obj = new Button("btnDeungrok",null,"9","95","22","627",null,null,null,null,null,this.divJolup.form);
            obj.set_taborder("5");
            obj.set_text("학위번호등록");
            obj.set_cssclass("btn_WF_Crud");
            this.divJolup.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","1014","10","20","20",null,null,null,null,null,null,this.divJolup.form);
            obj.set_taborder("20");
            obj.set_text(">>");
            obj.set_textAlign("right");
            this.divJolup.addChild(obj.name, obj);

            obj = new Button("btnIgwan",null,"9","75","22","524",null,null,null,null,null,this.divJolup.form);
            obj.set_taborder("6");
            obj.set_text("졸업이관");
            obj.set_cssclass("btn_WF_Crud");
            this.divJolup.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00","1114","-1","56","36",null,null,null,null,null,null,this.divJolup.form);
            obj.set_taborder("21");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divJolup.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01_00_00_00","1145","9","100","22",null,null,null,null,null,null,this.divJolup.form);
            obj.set_taborder("22");
            obj.set_text("졸업처리일자");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divJolup.addChild(obj.name, obj);

            obj = new Calendar("calCheoriDt","1258","9","120","22",null,null,null,null,null,null,this.divJolup.form);
            obj.set_taborder("7");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.divJolup.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_00_00","1248","0","10","33",null,null,null,null,null,null,this.divJolup.form);
            obj.set_taborder("23");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divJolup.addChild(obj.name, obj);

            obj = new Static("stc_09_00","0","166",null,"22","1455",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("졸업대상자 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","307","165",null,"24","1210",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","0","191",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\" band=\"left\"/><Column size=\"50\" band=\"left\"/><Column size=\"130\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"70\" band=\"left\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"65\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"65\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"98\"/><Column size=\"150\"/><Column size=\"250\"/><Column size=\"65\"/><Column size=\"85\"/><Column size=\"65\"/><Column size=\"85\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" text=\"학과\"/><Cell col=\"3\" text=\"학번\"/><Cell col=\"4\" text=\"성명\"/><Cell col=\"5\" text=\"학년\"/><Cell col=\"6\" text=\"주야\"/><Cell col=\"7\" text=\"현재&#13;&#10;학적상태\"/><Cell col=\"8\" text=\"졸업기준년도\"/><Cell col=\"9\" text=\"졸업일자\"/><Cell col=\"10\" text=\"졸업회차\"/><Cell col=\"11\" text=\"학과석차\"/><Cell col=\"12\" text=\"전체석차\"/><Cell col=\"13\" text=\"증서번호\"/><Cell col=\"14\" text=\"학위번호\"/><Cell col=\"15\" text=\"학위\"/><Cell col=\"16\" text=\"교원자격번호\"/><Cell col=\"17\" text=\"교원증서번호\"/><Cell col=\"18\" text=\"졸업여부\"/><Cell col=\"19\" text=\"불가사유코드\"/><Cell col=\"20\" text=\"불가사유내용\"/><Cell col=\"21\" text=\"유급처리&#13;&#10;여부\"/><Cell col=\"22\" text=\"유급처리일자\"/><Cell col=\"23\" text=\"졸업처리&#13;&#10;여부\"/><Cell col=\"24\" text=\"졸업처리일자\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"2\" text=\"bind:HAKGWA_NM\" textAlign=\"left\" cssclass=\"expr:JOLEOP_YYYY != JOLEOP_GIJUN_YYYY ? &apos;Expr_Case_Font_Blue&apos; : &apos;&apos;\"/><Cell col=\"3\" text=\"bind:HAKBEON\" cssclass=\"expr:JOLEOP_YYYY != JOLEOP_GIJUN_YYYY ? &apos;Expr_Case_Font_Blue&apos; : &apos;&apos;\"/><Cell col=\"4\" text=\"bind:HAKSAENG_NM\" cssclass=\"expr:JOLEOP_YYYY != JOLEOP_GIJUN_YYYY ? &apos;Expr_Case_Font_Blue&apos; : &apos;&apos;\"/><Cell col=\"5\" text=\"bind:HAKNYEON\" cssclass=\"expr:JOLEOP_YYYY != JOLEOP_GIJUN_YYYY ? &apos;Expr_Case_Font_Blue&apos; : &apos;&apos;\"/><Cell col=\"6\" text=\"bind:JUYA_GBNM\" cssclass=\"expr:JOLEOP_YYYY != JOLEOP_GIJUN_YYYY ? &apos;Expr_Case_Font_Blue&apos; : &apos;&apos;\"/><Cell col=\"7\" text=\"bind:HAKJEOK_STNM\"/><Cell col=\"8\" text=\"bind:JOLEOP_GIJUN_YYYY\" cssclass=\"expr:JOLEOP_YYYY != JOLEOP_GIJUN_YYYY ? &apos;Expr_Case_Font_Blue&apos; : &apos;&apos;\"/><Cell col=\"9\" text=\"bind:JOLEOP_DT\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"10\" text=\"bind:JOLEOP_HOETSU\"/><Cell col=\"11\" text=\"bind:HAKGWA_SEOKCHA2\"/><Cell col=\"12\" text=\"bind:JEONCHE_SEOKCHA2\"/><Cell col=\"13\" text=\"bind:JEUNGSEO_NO\"/><Cell col=\"14\" text=\"bind:HAKWI_DEUNGROK_NO1_NM\"/><Cell col=\"15\" text=\"bind:HAKWI_NM1\"/><Cell col=\"16\" text=\"bind:GYOWON_JAGYEOK_NO\"/><Cell col=\"17\" text=\"bind:GYOWON_JEUNGSEO_NO\"/><Cell col=\"18\" text=\"bind:JOLEOP_YN\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsJoleopYn\" combocodecol=\"CODE\" combodatacol=\"REF_4\"/><Cell col=\"19\" text=\"bind:JOLEOP_BULGASAYU_CD\" displaytype=\"expr:JOLEOP_YN == &apos;0&apos; ? &apos;combocontrol&apos; : &apos;combotext&apos;\" edittype=\"expr:JOLEOP_YN == &apos;0&apos; ? &apos;combo&apos; : &apos;none&apos;\" combodataset=\"dsJoleopBulga\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"20\" displaytype=\"expr:JOLEOP_YN == &apos;0&apos; ? &apos;text&apos; : &apos;normal&apos;\" edittype=\"expr:JOLEOP_YN == &apos;0&apos; ? &apos;text&apos; : &apos;none&apos;\" text=\"bind:JOLEOP_BULGASAYU_NAEYONG\" textAlign=\"left\"/><Cell col=\"21\" displaytype=\"checkboxcontrol\" text=\"bind:YUGEUP_YN\"/><Cell col=\"22\" displaytype=\"date\" text=\"bind:YUGEUP_CHEORI_DT\" calendardisplaynulltype=\"none\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"23\" displaytype=\"checkboxcontrol\" text=\"bind:JOLEOP_CHEORI_YN\"/><Cell col=\"24\" displaytype=\"date\" text=\"bind:JOLEOP_CHEORI_DT\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","550","146","100","45",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("↑\r\n45\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","183",null,"8","0",null,null,null,null,null,this);
            obj.set_taborder("8");
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
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_02","26","31","1600","5",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
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
            obj.set_taborder("8");
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
            obj.set_taborder("9");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_01","452","9","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("계열");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","69",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","77","0","10","66",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","834","0","10","37",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_01","725","3","56","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchGyeyeol","575","9","150","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_innerdataset("dsGyeyeol");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgwa","844","9","150","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_innerdataset("dsHakgwa");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_02","754","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("학과/학부");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_02","995","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("전공");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJeongong","1084","9","150","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_innerdataset("dsJeongong");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00","994","-1","56","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00","1076","0","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00",null,"0","27","69","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_00_01","565","0","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00","7","9","70","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_text("졸업년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","87","9","140","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_01_00","227","0","56","62",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","264","9","70","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_text("졸업학기");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","338","0","10","67",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgi","348","9","130","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("REF_2");
            obj.set_innerdataset("dsHakgi");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01","478","-1","56","36",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("25");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_01_00","-33","36","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("26");
            obj.set_text("학번/성명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchHakbeon","87","36","140","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00","264","36","70","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("27");
            obj.set_text("졸업여부");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("RdoJolubYeobu","348","36","192","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_enable("true");
            obj.set_readonly("false");
            var divSearch_form_RdoJolubYeobu_innerdataset = new nexacro.NormalDataset("divSearch_form_RdoJolubYeobu_innerdataset", obj);
            divSearch_form_RdoJolubYeobu_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"datacolumn\">졸업</Col><Col id=\"codecolumn\">1</Col></Row><Row><Col id=\"datacolumn\">미졸업</Col><Col id=\"codecolumn\">0</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_RdoJolubYeobu_innerdataset);
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_05","0","79","220","22",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("졸업대상자 처리 조건");
            obj.set_cssclass("sta_WF_Title01");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01","1","96","1620","8",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","600","69","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("staTotCnt","127","165",null,"24","1340",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("( 졸업 0건 / 미졸업 0건)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calJolupDt","1458","161","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"158","55","25","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("stc_63_00",null,"167","50","20","188",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("졸업일자");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("졸업대상자관리");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item9","divSearch.form.cboSearchGyeyeol","value","ds_hakgwa","DAEHAK_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSearch.form.cboSearchHakgwa","value","ds_hakgwa","HAKGWA_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divSearch.form.cboSearchJeongong","value","ds_hakgwa","JEONGONG_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.spnSearchYYYY","value","ds_input","JOLEOP_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.cboSearchHakgi","value","ds_input","JOLEOP_HAKGI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.edtSearchHakbeon","value","ds_input","HAKBEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.RdoJolubYeobu","value","ds_input","JOLEOP_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divJolup.form.spnJolupYYYY","value","dsCheori","JOLEOP_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divJolup.form.cboJolupHakgi","value","dsCheori","JOLEOP_HAKGI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divJolup.form.calCheoriDt","value","dsCheori","JOLEOP_CHEORI_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
            this._addPreloadList("data","","dsCheori");
        };
        
        // User Script
        this.registerScript("US03_2010303_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): US03_2010303_M.xfdl(졸업대상자관리 관리(조회))
        * 작 성         일 명: jiback
        * 작 성         일 자: 2021/09/28
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
            var strDs    = "dsHakgi|dsJoleopYn|dsJoleopBulga";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00022|00051|00089";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "X|X|X";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = "";                                      // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId    = "Init";

                // gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
                // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.

            this.gfn_CmmnMultiComboLoad(strDs
                                      , strLgcd
                                      , strComb
                                      , strOptn
                                      , svcId);

        	// 기준연도학기
            strDs    = "dsBaseYyyyHakgi";        // 데이터를 받을 데이터셋리스트     예) "dsBaseYyyyHakgi"
            svcId    = "baseYyyyHakgiInit";
        	var strEopmuGbcd = "US";
        	var strUseYn     = "1";
            // gfn_BaseYyyyHakgiLoad(데이터셋, svcId , 업무구분, 사용구분);
            // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.gfn_BaseYyyyHakgiLoad(strDs
                                      , svcId
                                      , strEopmuGbcd
                                      , strUseYn);


        	// gfn_GyeyeolComboLoad(데이터셋, 콤보 옵션)
        	// 계열콤보
        	strDs       = "dsGyeyeol";
        	strComb     = "T";
        	svcId       = "gyeyeolInit";
        	strUseYn    = "1"; // 사용 여부
        	strJojikGbcd = "20";  // 조직구분 10.행정조직   20.학사조직   30.입시조직
        	strDaehakCd = "";  //
        	this.gfn_GyeyeolComboLoad(this.divSearch.form.cboSearchGyeyeol, strComb, svcId, strUseYn, strJojikGbcd, strDaehakCd , objApp.gv_cutPrgId);
        };

        this.fn_PostInit = function()
        {
        	for(var i=0; i<this.dsHakgi.rowcount; i++)
        	{
        		if(this.dsHakgi.getColumn(i, "REF_3") == "02")
        		{
        			this.dsHakgi.deleteRow(i);
        		}
        	}
        	this.divJolup.form.calCheoriDt.set_value(objApp.gds_SystemDate.getColumn(0,"YYYYMMDD"));
        	this.divSearch.form.RdoJolubYeobu.set_index(0);
        	this.fn_JoleopCnt();
        };

        this.fn_PostBaseYyyyHakgiInit = function()
        {
        	if (this.dsBaseYyyyHakgi.rowcount > 0)
        	{
        		this.ds_input.setColumn(0, "JOLEOP_YYYY",  this.dsBaseYyyyHakgi.getColumn(0, "YYYY"));
        		this.ds_input.setColumn(0, "JOLEOP_HAKGI", this.dsBaseYyyyHakgi.getColumn(0, "HAKGI"));
        		this.dsCheori.setColumn(0, "JOLEOP_YYYY",  this.dsBaseYyyyHakgi.getColumn(0, "YYYY"));
        		this.dsCheori.setColumn(0, "JOLEOP_HAKGI", this.dsBaseYyyyHakgi.getColumn(0, "HAKGI"));
        	}
        };

        this.fn_PostGyeyeolInit = function()
        {
        	this.divSearch.form.cboSearchGyeyeol.set_index(0);

        	// 계열 onitemchanged 호출
        	let info = new nexacro.ItemChangeEventInfo;
        	this.divSearch_cboSearchGyeyeol_onitemchanged(this.divSearch.form.cboSearchGyeyeol, info);
        };


        this.fn_PostHakgwaInit = function()
        {
        	this.divSearch.form.cboSearchHakgwa.set_index(0);

        	// 학과 onitemchanged 호출
        	let info = new nexacro.ItemChangeEventInfo;
        	this.divSearch_cboSearchHakgwa_onitemchanged(this.divSearch.cboSearchHakgwa, info);
        };

        this.fn_PostJeongongInit = function()
        {
        	this.divSearch.form.cboSearchJeongong.set_index(0);
        };

        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {
        	var sTxt = this.divJolup.form.spnJolupYYYY.value + "학년도 " + this.divJolup.form.cboJolupHakgi.text;
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
                            this.fn_PostInit();
                        break;
        			case "baseYyyyHakgiInit":
        					this.fn_PostBaseYyyyHakgiInit();
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
                            this.fn_PostSave();
                        break;c
        			case "DaesangjaChk":
                            this.fn_PostDaesangjaChk();
                        break;
        			case "CreateDaesangja":
                            this.alert(sTxt + " 졸업대상자 생성이 완료되었습니다.");
        					this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
                        break;
        			case "CheoriChk":
                            this.fn_PostCheoriChk();
                        break;
        			case "Cheori":
                            this.alert(sTxt + " 졸업여부 처리가 완료되었습니다.");
        					this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
                        break;
        			case "GyesanChk":
                            this.fn_PostGyesanChk();
                        break;
        			case "Gyesan":
                            this.alert(sTxt + " 석차계산 처리가 완료되었습니다.");
        					this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
                        break;
        			case "DeungrokChk":
                            this.fn_PostDeungrokChk();
                        break;
        			case "Deungrok":
                            this.alert(sTxt + " 학위번호등록 처리가 완료되었습니다.");
        					this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
                        break;
        			case "IgwanChk":
                            this.fn_PostIgwanChk();
                        break;
        			case "Igwan":
                            this.alert(sTxt + " 졸업이관 처리가 완료되었습니다.");
        					this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
                        break;
        			case "JoleopDt":
                            this.fn_PostJoleopDt();
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
                case "save" :        // 저장
                        this.fn_Save();
                    break;
                case "tmp1" :        // 미졸업자 유급 처리
                         this.fn_Yugeup();
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
            var strUrl      = "/prj/US/US03/Retrieve_2010303_M.do";
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
        	this.fn_JoleopCnt();
            this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
        };

        /**********************************************************************
                06. 저장 함수 선언
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

        	for(var i=0;i<this.dsMaster.rowcount; i++)
        	{
        		if(this.dsMaster.getRowType(i) == Dataset.ROWTYPE_UPDATE)
        		{
        			if(this.dsMaster.getColumn(i, "JOLEOP_YN") == "0" && this.gfn_isNull(this.dsMaster.getColumn(i, "JOLEOP_BULGASAYU_CD")))
        			{
        				this.alert("졸업여부가 미졸업인 경우 불가사유코드는 필수입력입니다.");
        				return false;
        			}
        		}
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
            var strUrl      = "/prj/US/US03/Save_2010303_M.do";
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
                07. 미졸업자 유급 처리 함수 선언
        ***********************************************************************/
        this.fn_Yugeup = function()
        {
        	if(this.gfn_isNull(this.ds_input.getColumn(0, "JOLEOP_YYYY")))
        	{
        		this.alert("학년도를 입력해주세요.");
        		return false;
        	}

        	if(this.gfn_isNull(this.ds_input.getColumn(0, "JOLEOP_HAKGI")))
        	{
        		this.alert("학기를 선택해주세요.");
        		return false;
        	}

        	var joleopYyyy = this.ds_input.getColumn(0, "JOLEOP_YYYY");
        	var joleopHakgi = this.ds_input.getColumn(0, "JOLEOP_HAKGI");
        	var oArg = {joleopYyyy:joleopYyyy, joleopHakgi:joleopHakgi};
        	var oOption = {};
        	var sPopupCallBack = "fn_popupCallback";
        	this.gfn_openPopup( "popup","US03::US03_2010303_P01.xfdl",oArg,sPopupCallBack,oOption);
        };

        /**********************************************************************
                08. 졸업대상자 생성
        ***********************************************************************/
        this.fn_PreDaesangjaChk = function()
        {
        	if(this.gfn_isNull(this.dsCheori.getColumn(0, "JOLEOP_YYYY")))
        	{
        		this.alert("학년도를 입력해주세요.");
        		return false;
        	}

        	if(this.gfn_isNull(this.dsCheori.getColumn(0, "JOLEOP_HAKGI")))
        	{
        		this.alert("학기를 선택해주세요.");
        		return false;
        	}

        	var sTxt = this.divJolup.form.spnJolupYYYY.value + "학년도 " + this.divJolup.form.cboJolupHakgi.text;
        	var result = this.gfn_confirm(sTxt + " 졸업대상자를 생성하시겠습니까?", "저장","", "question" );
            if(result == 0)
            {
                return false;
            }
        	this.dsCnt.clearData();

        	return true;
        };

        this.fn_DaesangjaChk = function()
        {
            if(!this.fn_PreDaesangjaChk())
            {
                return false;
            }
            var strSvc      = "DaesangjaChk";
            var strUrl      = "/prj/US/US03/Retrieve_2010303_M_DaesangjaChk.do";
            var strInDs     = "dsCheori=dsCheori";
            var strOutDs    = "dsCnt=dsCnt";
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

        this.fn_PostDaesangjaChk = function()
        {
        	// 학위등록번호가 생성되어있으면 졸업대상자를 재생성 못하게 함
        	var sTxt = this.divJolup.form.spnJolupYYYY.value + "학년도 " + this.divJolup.form.cboJolupHakgi.text;
        	if(this.dsCnt.getColumn(0, "DEUNGROK_NO_CNT") > 0)
        	{
        		this.alert(sTxt + " 졸업대상자의 학위등록번호가 이미 생성되어있습니다. 졸업대상자를 다시 생성할 수 없습니다.");
        		return false;
        	}

        	if(this.dsCnt.getColumn(0, "JOLEOP_CREATE_CNT") == 0)
        	{
        		// 졸업대상자 생성
        		this.fn_CreateDaesangja("1");
        	}
        	else
        	{
        		var result = this.gfn_confirm(sTxt + " 졸업대상자 자료가 존재합니다.\n삭제 후 다시 생성하시겠습니까?", "저장","", "question" );
        		if(result == 0)
        		{
        			return false;
        		}
        		this.fn_CreateDaesangja("2");
        	}
        };

        // 졸업대상자 생성
        this.fn_CreateDaesangja = function(gubun)
        {
        	this.dsCheori.setColumn(0, "GBN", gubun);

            var strSvc      = "CreateDaesangja";
            var strUrl      = "/prj/US/US03/Save_2010303_M_Daesangja.do";
            var strInDs     = "ds_input=ds_input:a ";
        		strInDs    += "dsCheori=dsCheori:a ";
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
                09. 졸업여부 처리
        ***********************************************************************/
        this.fn_PreCheoriChk = function()
        {
        	if(this.gfn_isNull(this.dsCheori.getColumn(0, "JOLEOP_YYYY")))
        	{
        		this.alert("학년도를 입력해주세요.");
        		return false;
        	}

        	if(this.gfn_isNull(this.dsCheori.getColumn(0, "JOLEOP_HAKGI")))
        	{
        		this.alert("학기를 선택해주세요.");
        		return false;
        	}

        	var sTxt = this.divJolup.form.spnJolupYYYY.value + "학년도 " + this.divJolup.form.cboJolupHakgi.text;
        	var result = this.gfn_confirm(sTxt + " 졸업대상자의 졸업여부를 처리하시겠습니까?", "저장","", "question" );
            if(result == 0)
            {
                return false;
            }
        	this.dsCnt.clearData();

        	return true;
        };

        this.fn_CheoriChk = function()
        {
            if(!this.fn_PreCheoriChk())
            {
                return false;
            }
            var strSvc      = "CheoriChk";
            var strUrl      = "/prj/US/US03/Retrieve_2010303_M_CheoriChk.do";
            var strInDs     = "dsCheori=dsCheori";
            var strOutDs    = "dsCnt=dsCnt ";
        		strOutDs   += "dsIljeong=dsIljeong";
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

        this.fn_PostCheoriChk = function()
        {
        	// 학위등록번호가 생성되어있으면 졸업여부 처리를 못하게 함
        	var sTxt = this.divJolup.form.spnJolupYYYY.value + "학년도 " + this.divJolup.form.cboJolupHakgi.text;
        	if(this.dsCnt.getColumn(0, "JOLEOP_CREATE_CNT") == 0)
        	{
        		this.alert(sTxt + " 졸업대상자가 정보가 없습니다.\n졸업대상자를 먼저 생성하세요.");
        		return false;
        	}

        	if(this.dsCnt.getColumn(0, "DEUNGROK_NO_CNT") > 0)
        	{
        		this.alert(sTxt + " 졸업대상자의 학위등록번호가 이미 생성되어있습니다. 다시 졸업여부를 처리할 수 없습니다.");
        		return false;
        	}

        	if(this.dsIljeong.getColumn(0, "ILJEONG_YN") == 0)
        	{
        		this.alert(sTxt + " 학위수여식 일정이 없습니다.\n일정을 먼저 등록하세요.");
        		return false;
        	}

        	// 졸업여부처리
        	this.fn_Cheori();
        };

        this.fn_Cheori = function()
        {
            var strSvc      = "Cheori";
            var strUrl      = "/prj/US/US03/Save_2010303_M_Cheori.do";
            var strInDs     = "ds_input=ds_input:a ";
        		strInDs    += "dsCheori=dsCheori:a ";
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

        /**********************************************************************
                10. 석차계산
        ***********************************************************************/
        this.fn_PreGyesanChk = function()
        {
        	if(this.gfn_isNull(this.dsCheori.getColumn(0, "JOLEOP_YYYY")))
        	{
        		this.alert("학년도를 입력해주세요.");
        		return false;
        	}

        	if(this.gfn_isNull(this.dsCheori.getColumn(0, "JOLEOP_HAKGI")))
        	{
        		this.alert("학기를 선택해주세요.");
        		return false;
        	}

        	var sTxt = this.divJolup.form.spnJolupYYYY.value + "학년도 " + this.divJolup.form.cboJolupHakgi.text;
        	var result = this.gfn_confirm(sTxt + " 졸업대상자의 석차를 처리하시겠습니까?\n이미 석차처리가 되어있다면 초기화 후 다시 처리됩니다.", "저장","", "question" );
            if(result == 0)
            {
                return false;
            }
        	this.dsCnt.clearData();

        	return true;
        };

        this.fn_GyesanChk = function()
        {
            if(!this.fn_PreGyesanChk())
            {
                return false;
            }
            var strSvc      = "GyesanChk";
            var strUrl      = "/prj/US/US03/Retrieve_2010303_M_GyesanChk.do";
            var strInDs     = "dsCheori=dsCheori";
            var strOutDs    = "dsCnt=dsCnt";
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

        this.fn_PostGyesanChk = function()
        {
        	var sTxt = this.divJolup.form.spnJolupYYYY.value + "학년도 " + this.divJolup.form.cboJolupHakgi.text;
        	if(this.dsCnt.getColumn(0, "JOLEOP_CREATE_CNT") == 0)
        	{
        		this.alert(sTxt + " 졸업대상자가 정보가 없습니다.\n졸업대상자를 먼저 생성하세요.");
        		return false;
        	}

        	if(this.dsCnt.getColumn(0, "JOLEOP_CHEORI_CNT") > 0)
        	{
        		this.alert(sTxt + " 졸업대상자의 졸업여부를 처리하지 않은 정보가 있습니다.\n먼저 졸업대상자의 졸업여부를 처리하세요.");
        		return false;
        	}

        	if(this.dsCnt.getColumn(0, "JOLEOP_SEOKCHA_CNT") > 0)
        	{
        		var result = this.gfn_confirm(sTxt + " 석차계산을 이미 처리하였습니다.\n다시 석차계산을 처리하시겠습니까?", "저장","", "question" );
        		if(result == 0)
        		{
        			return false;
        		}
        		this.fn_Gyesan("2");
        	}
        	else
        	{
        		this.fn_Gyesan("1");
        	}
        };

        this.fn_Gyesan = function(gubun)
        {
        	this.dsCheori.setColumn(0, "GBN", gubun);

            var strSvc      = "Gyesan";
            var strUrl      = "/prj/US/US03/Save_2010303_M_Gyesan.do";
            var strInDs     = "ds_input=ds_input:a ";
        		strInDs    += "dsCheori=dsCheori:a ";
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

        /**********************************************************************
                11. 학위번호등록
        ***********************************************************************/
        this.fn_PreDeungrokChk = function()
        {
        	if(this.gfn_isNull(this.dsCheori.getColumn(0, "JOLEOP_YYYY")))
        	{
        		this.alert("학년도를 입력해주세요.");
        		return false;
        	}

        	if(this.gfn_isNull(this.dsCheori.getColumn(0, "JOLEOP_HAKGI")))
        	{
        		this.alert("학기를 선택해주세요.");
        		return false;
        	}

        	var sTxt = this.divJolup.form.spnJolupYYYY.value + "학년도 " + this.divJolup.form.cboJolupHakgi.text;
        	var result = this.gfn_confirm(sTxt + " 졸업대상자의 학위번호를 등록하시겠습니까?", "저장","", "question" );
            if(result == 0)
            {
                return false;
            }
        	this.dsCnt.clearData();

        	return true;
        };

        this.fn_DeungrokChk = function()
        {
            if(!this.fn_PreDeungrokChk())
            {
                return false;
            }
            var strSvc      = "DeungrokChk";
            var strUrl      = "/prj/US/US03/Retrieve_2010303_M_DeungrokChk.do";
            var strInDs     = "dsCheori=dsCheori";
            var strOutDs    = "dsCnt=dsCnt";
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

        this.fn_PostDeungrokChk = function()
        {
        	var sTxt = this.divJolup.form.spnJolupYYYY.value + "학년도 " + this.divJolup.form.cboJolupHakgi.text;
        	// 그 이전 단계의 정보만 체크
        	if(this.dsCnt.getColumn(0, "JOLEOP_SEOKCHA_CNT") > 0)
        	{
        		this.alert(sTxt + " 석차계산을 처리하지 않은 정보가 있습니다.\n먼저 석차계산을 처리하세요.");
        		return false;
        	}

        	if(this.dsCnt.getColumn(0, "DEUNGROK_NO_CNT") == 0)
        	{
        		var result = this.gfn_confirm(sTxt + " 졸업대상자의 학위등록번호가 이미 생성되어있습니다. 학위번호를 다시 생성하시겠습니까?", "저장","", "question" );
        		if(result == 0)
        		{
        			return false;
        		}
        		this.fn_Deungrok("2");
        	}
        	else
        	{
        		this.fn_Deungrok("1");
        	}
        };

        this.fn_Deungrok = function(gubun)
        {
        	this.dsCheori.setColumn(0, "GBN", gubun);

            var strSvc      = "Deungrok";
            var strUrl      = "/prj/US/US03/Save_2010303_M_Deungrok.do";
            var strInDs     = "ds_input=ds_input:a ";
        		strInDs    += "dsCheori=dsCheori:a ";
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

        /**********************************************************************
                12. 졸업이관
        ***********************************************************************/
        this.fn_PreIgwanChk = function()
        {
        	if(this.gfn_isNull(this.dsCheori.getColumn(0, "JOLEOP_YYYY")))
        	{
        		this.alert("학년도를 입력해주세요.");
        		return false;
        	}

        	if(this.gfn_isNull(this.dsCheori.getColumn(0, "JOLEOP_HAKGI")))
        	{
        		this.alert("학기를 선택해주세요.");
        		return false;
        	}

        	if(this.gfn_isNull(this.dsCheori.getColumn(0, "JOLEOP_CHEORI_DT")))
        	{
        		this.alert("졸업처리일자를 선택해주세요.");
        		return false;
        	}

        	var sTxt = this.divJolup.form.spnJolupYYYY.value + "학년도 " + this.divJolup.form.cboJolupHakgi.text;
        	var result = this.gfn_confirm(sTxt + " 졸업대상자를 졸업으로 이관하시겠습니까?", "저장","", "question" );
            if(result == 0)
            {
                return false;
            }
        	this.dsCnt.clearData();

        	return true;
        };

        this.fn_IgwanChk = function()
        {
            if(!this.fn_PreIgwanChk())
            {
                return false;
            }
        	// 학위번호등록 전 조회와 졸업이관 전 조회는 같은 트랜잭션을 사용한다.
            var strSvc      = "IgwanChk";
            var strUrl      = "/prj/US/US03/Retrieve_2010303_M_DeungrokChk.do";
            var strInDs     = "dsCheori=dsCheori";
            var strOutDs    = "dsCnt=dsCnt";
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

        this.fn_PostIgwanChk = function()
        {
        	// 졸업대상자 생성 여부와 학위번호등록 여부만 체크
        	var sTxt = this.divJolup.form.spnJolupYYYY.value + "학년도 " + this.divJolup.form.cboJolupHakgi.text;
        	if(this.dsCnt.getColumn(0, "JOLEOP_CREATE_CNT") == 0)
        	{
        		this.alert(sTxt + " 졸업대상자가 정보가 없습니다.\n졸업대상자를 먼저 생성하세요.");
        		return false;
        	}

        	if(this.dsCnt.getColumn(0, "DEUNGROK_NO_CNT") > 0)
        	{
        		this.alert(sTxt + " 졸업대상자 중 학위번호를 등록하지 않은 정보가 있습니다.\n먼저 학위번호를 등록하세요.");
        		return false;
        	}

        	// 졸업이관 처리
        	this.fn_Igwan();
        };

        this.fn_Igwan = function()
        {
            var strSvc      = "Igwan";
            var strUrl      = "/prj/US/US03/Save_2010303_M_Igwan.do";
            var strInDs     = "ds_input=ds_input:a ";
        		strInDs    += "dsCheori=dsCheori:a ";
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

        /**********************************************************************
                13. 졸업일자수정
        ***********************************************************************/
        this.fn_PreJoleopDt = function()
        {
        	var cnt = 0;

        	if(this.gfn_isNull(this.calJolupDt.value))
        	{
        		this.alert("수정할 졸업일자를 입력하세요.");
        		return false;
        	}

        	if(this.dsMaster.findRow("CHK",1) == -1)
            {
                this.alert("수정할 학생을 선택하세요.");
        		return false;
            }

        	for(var i=0;i<this.dsMaster.rowcount; i++)
        	{
        		if(this.dsMaster.getColumn(i, "CHK") == "1")
        		{
        			if(this.dsMaster.getColumn(i, "JOLEOP_YN") == "")
        			{
        				cnt++;
        			}
        		}
        	}

        	if(cnt > 0)
        	{
        		this.alert("'졸업여부 처리'를 하지 않은 졸업대상자는 졸업일자를 수정할 수 없습니다.");
        		return false;
        	}

        	var result = this.gfn_confirm("졸업일자를 '" + this.calJolupDt.value+ "'로 수정하시겠습니까?", "저장","", "question" );
            if(result == 0)
            {
                return false;
            }

        	for(var i=0;i<this.dsMaster.rowcount; i++)
        	{
        		if(this.dsMaster.getColumn(i, "CHK") == "1")
        		{
        			this.dsMaster.setColumn(i, "JOLEOP_DT", this.calJolupDt.value);
        		}
        	}

        	return true;
        };

        this.fn_JoleopDt = function()
        {
            if(!this.fn_PreJoleopDt())
            {
                return false;
            }
            var strSvc      = "JoleopDt";
            var strUrl      = "/prj/US/US03/Save_2010303_M_JoleopDt.do";
            var strInDs     = "ds_input=ds_input:a ";
        		strInDs    += "dsMaster=dsMaster:u ";
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

        this.fn_PostJoleopDt = function()
        {
        	this.alert("졸업일자가 정상적으로 수정되었습니다.");
        	this.grdMaster.setCellProperty("head", 0, "text", 0);	// 전체 체크박스 해제
        	this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
        }

        /**********************************************************************
                14. 각종 함수
        ***********************************************************************/
        // 졸업,미졸업 건수
        this.fn_JoleopCnt = function()
        {
        	var yCnt = this.dsMaster.getCaseCount("JOLEOP_YN=='1'");
        	var nCnt = this.dsMaster.getCaseCount("JOLEOP_YN=='0'");
        	this.staTotCnt.set_text("( 졸업 " + yCnt + "건 / 미졸업 " + nCnt + "건 )");
        }

        /**********************************************************************
                15. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 체크
         */
        this.grdMaster_onheadclick = function(obj,e)
        {
            if(e.cell == this.grdMaster.getBindCellIndex("body","CHK"))
            {
                this.gfn_checkAll(obj, e);
            }
        };

        /**
         *      그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj,e)
        {
            if(e.cell != this.grdMaster.getBindCellIndex("body","CHK") && e.cell != 1)
            {
                this.gfn_gridSort(obj,e);
            }
        };

        // 학과 필터 적용
        this.divSearch_cboSearchGyeyeol_onitemchanged = function(obj,e)
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

        	this.gfn_HakgwaComboLoad(this.divSearch.form.cboSearchHakgwa, strComb, svcId, strUseYn, strJojikGbcd, strUpDeptCd, objApp.gv_cutPrgId);
        };

        // 전공 필터 적용
        this.divSearch_cboSearchHakgwa_onitemchanged = function(obj,e)
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

        	this.gfn_JeongongComboLoad(this.divSearch.form.cboSearchJeongong, strComb, svcId, strUseYn, strJojikGbcd, strUpDeptCd, objApp.gv_cutPrgId);
        };

        // dsMaster 수정 전
        this.dsMaster_cancolumnchange = function(obj,e)
        {
        	if(e.columnid == "JOLEOP_YN" || e.columnid == "JOLEOP_BULGASAYU_CD" || e.columnid == "JOLEOP_BULGASAYU_NAEYONG")
        	{
        		if(obj.getColumn(e.row, "YUGEUP_YN") == "1")
        		{
        			this.alert("이미 유급처리되었습니다. 수정할 수 없습니다.");
        			return false;
        		}
        	}
        };

        // dsMaster 수정 시
        this.dsMaster_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "JOLEOP_YN")
        	{
        		if(e.newvalue == "1")
        		{
        			obj.setColumn(e.row, "JOLEOP_BULGASAYU_CD", null);
        			obj.setColumn(e.row, "JOLEOP_BULGASAYU_NAEYONG", null);
        		}
        	}
        };

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
            return this.gfn_isUpdate(this.dsMaster);
        };

        /**********************************************************************
                16. 검색창 엔터키 조회
        ***********************************************************************/
        this.divSearch_spnSearchYYYY_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"JOLEOP_YYYY",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchHakgi_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"JOLEOP_HAKGI",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchGyeyeol_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"DAEHAK_CD",obj.value);
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

        this.divSearch_cboSearchJeongong_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"JEONGONG_CD",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_edtSearchHakbeon_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"HAKBEON",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_RdoJolubYeobu_onitemchanged = function(obj,e)
        {
        	this.ds_input.setColumn(0,"JOLEOP_YN",obj.value);
        	this.fn_Ret();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.divJolup.form.spnJolupYYYY.addEventHandler("onkeydown",this.divSearch_spnSearchYYYY_onkeydown,this);
            this.divJolup.form.cboJolupHakgi.addEventHandler("onkeydown",this.divSearch_cboSearchHakgi_onkeydown,this);
            this.divJolup.form.btnDaesangja.addEventHandler("onclick",this.fn_DaesangjaChk,this);
            this.divJolup.form.btnCheori.addEventHandler("onclick",this.fn_CheoriChk,this);
            this.divJolup.form.btnGyesan.addEventHandler("onclick",this.fn_GyesanChk,this);
            this.divJolup.form.btnDeungrok.addEventHandler("onclick",this.fn_DeungrokChk,this);
            this.divJolup.form.btnIgwan.addEventHandler("onclick",this.fn_IgwanChk,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
            this.divSearch.form.cboSearchGyeyeol.addEventHandler("onitemchanged",this.divSearch_cboSearchGyeyeol_onitemchanged,this);
            this.divSearch.form.cboSearchGyeyeol.addEventHandler("onkeydown",this.divSearch_cboSearchGyeyeol_onkeydown,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onitemchanged",this.divSearch_cboSearchHakgwa_onitemchanged,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onkeydown",this.divSearch_cboSearchHakgwa_onkeydown,this);
            this.divSearch.form.cboSearchJeongong.addEventHandler("onkeydown",this.divSearch_cboSearchJeongong_onkeydown,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onkeydown",this.divSearch_spnSearchYYYY_onkeydown,this);
            this.divSearch.form.cboSearchHakgi.addEventHandler("onkeydown",this.divSearch_cboSearchHakgi_onkeydown,this);
            this.divSearch.form.edtSearchHakbeon.addEventHandler("onkeydown",this.divSearch_edtSearchHakbeon_onkeydown,this);
            this.divSearch.form.RdoJolubYeobu.addEventHandler("onitemchanged",this.divSearch_RdoJolubYeobu_onitemchanged,this);
            this.stc_05.addEventHandler("onclick",this.stc_05_onclick,this);
            this.btnSave.addEventHandler("onclick",this.fn_JoleopDt,this);
            this.dsMaster.addEventHandler("cancolumnchange",this.dsMaster_cancolumnchange,this);
            this.dsMaster.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
            this.dsCheori.addEventHandler("cancolumnchange",this.dsMaster_cancolumnchange,this);
            this.dsCheori.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
        };
        this.loadIncludeScript("US03_2010303_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
