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
            this.set_titletext("합격기준관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMaster", this);
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"IPHAK_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"GYOJIK_HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"GYOJIK_HAKGWA_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"JAGYEOKJONGBYEOL_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONGONG_ISU_GIJUN_HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GIBON_ISU_GIJUN_HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYOGWA_GYOYUK_GIJUN_HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYOJIK_ISU_GIJUN_HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYOJIK_IRON_GIJUN_HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYOJIK_SOYANG_GIJUN_HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYOJIK_SILSEUP_GIJUN_HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEONCHE_GIJUN_AVG\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEONGONG_GWAMOK_GIJUN_AVG\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYOJIK_GWAMOK_GIJUN_AVG\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEOKSEONG_INSEONG_GIJUN_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"EUNGGEUP_SIMPYE_GIJUN_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JAGYEOKJEUNG_YN\" type=\"STRING\" size=\"1\"/><Column id=\"BIGO\" type=\"STRING\" size=\"500\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"IPHAK_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JAGYEOKJONGBYEOL_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetail", this);
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"IPHAK_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"GYOJIK_HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JAGYEOKJONGBYEOL_CD\" type=\"STRING\" size=\"10\"/><Column id=\"ISU_YEONGYEOK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"ISU_BUNYA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"ISU_GWAMOK_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"YEONGYEOKBYEOL_HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetail00", this);
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"IPHAK_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"GYOJIK_HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JAGYEOKJONGBYEOL_CD\" type=\"STRING\" size=\"10\"/><Column id=\"ISU_YEONGYEOK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"GYOGWAMOK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"GYOGWAMOK_NM\" type=\"STRING\" size=\"200\"/><Column id=\"HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BIGO\" type=\"STRING\" size=\"500\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inputDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"IPHAK_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"GYOJIK_HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JAGYEOKJONGBYEOL_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inputDetail00", this);
            obj._setContents("<ColumnInfo><Column id=\"IPHAK_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"GYOJIK_HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JAGYEOKJONGBYEOL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ISU_YEONGYEOK_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGyojikHakgwa", this);
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"105\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inputGyojikHakgwa", this);
            obj._setContents("<ColumnInfo><Column id=\"SELECT_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJagyeokjongbyeol", this);
            obj._setContents("<ColumnInfo><Column id=\"JAGYEOKJONGBYEOL_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JAGYEOKJONGBYEOL_NM\" type=\"STRING\" size=\"50\"/><Column id=\"JAGYEOKJONGBYEOL_NM2\" type=\"STRING\" size=\"101\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGridJagyeokjongbyeol", this);
            obj._setContents("<ColumnInfo><Column id=\"JAGYEOKJONGBYEOL_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JAGYEOKJONGBYEOL_NM\" type=\"STRING\" size=\"50\"/><Column id=\"JAGYEOKJONGBYEOL_NM2\" type=\"STRING\" size=\"101\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inputJagyeokjongbyeol", this);
            obj._setContents("<ColumnInfo><Column id=\"SELECT_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGridIsuBunya", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGridIsuYeongyeok", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REF_1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input1", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GYOGWAMOK_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDept", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGyogwamok", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inputCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"IPHAK_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"NOW_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"AGO_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"GYOJIK_HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JAGYEOKJONGBYEOL_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCopyCnt", this);
            obj._setContents("<ColumnInfo><Column id=\"AGO_COUNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"NOW_COUNT\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBaseYyyyHakgi", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"42","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01_00","0","9","75","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("입학년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","85","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01_00_00","205","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("학과");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgwa","295","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_innerdataset("dsGyojikHakgwa");
            obj.set_text("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01_00_00_00","415","9","105","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("자격종별");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJagyeokjongbyeol","530","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsJagyeokjongbyeol");
            obj.set_codecolumn("JAGYEOKJONGBYEOL_CD");
            obj.set_datacolumn("JAGYEOKJONGBYEOL_NM2");
            obj.set_text("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_01_00","415","0","56","42",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","42",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","75","0","10","42",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","0","0","1640","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","0","32","1640","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00","205","0","56","42",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_00_00","285","0","10","42",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_00_01_00","520","0","10","42",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","800","42","35","35",null,null,null,null,null,null,this);
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

            obj = new Static("stRowCnt","110","48","200","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","0","45","110","31",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("합격기준 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","69","1640","8",null,null,null,null,null,null,this);
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

            obj = new Grid("grdMaster","0","77",null,"200","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("dsMaster");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"120\" band=\"left\"/><Column size=\"170\" band=\"left\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"150\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" rowspan=\"2\" text=\"No\"/><Cell col=\"2\" rowspan=\"2\" text=\"입학년도\"/><Cell col=\"3\" rowspan=\"2\" text=\"교직학과\"/><Cell col=\"4\" rowspan=\"2\" text=\"자격종별\"/><Cell col=\"5\" colspan=\"3\" text=\"전공과목기준학점\"/><Cell col=\"8\" colspan=\"4\" text=\"교직과목기준학점\"/><Cell col=\"12\" colspan=\"3\" text=\"졸업전체평균성적\"/><Cell col=\"15\" rowspan=\"2\" text=\"교직적성 및&#13;&#10;인성검사횟수\"/><Cell col=\"16\" rowspan=\"2\" text=\"응급처치 및&#13;&#10;심폐소생술횟수\"/><Cell col=\"17\" rowspan=\"2\" text=\"자격증&#13;&#10;필요여부\"/><Cell col=\"18\" rowspan=\"2\" text=\"비고\"/><Cell row=\"1\" col=\"5\" text=\"전공이수\"/><Cell row=\"1\" col=\"6\" text=\"기본이수\"/><Cell row=\"1\" col=\"7\" text=\"교과교육\"/><Cell row=\"1\" col=\"8\" text=\"교직이수\"/><Cell row=\"1\" col=\"9\" text=\"교직이론\"/><Cell row=\"1\" col=\"10\" text=\"교직소향\"/><Cell row=\"1\" col=\"11\" text=\"교직실습\"/><Cell row=\"1\" col=\"12\" text=\"전체평균\"/><Cell row=\"1\" col=\"13\" text=\"전공평균\"/><Cell row=\"1\" col=\"14\" text=\"교직평균\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" editmaxlength=\"1\"/><Cell col=\"1\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"2\" text=\"bind:IPHAK_YYYY\"/><Cell col=\"3\" text=\"bind:GYOJIK_HAKGWA_NM\" edittype=\"expr:dataset.getRowType(currow) == &apos;2&apos; ? &apos;text&apos; : &apos;none&apos;\" textAlign=\"left\" expandshow=\"expr:dataset.getRowType(currow) == &quot;2&quot; ? &quot;show&quot; : &quot;hide&quot; \"/><Cell col=\"4\" displaytype=\"expr:dataset.getRowType(currow) == 2 ? &apos;combocontrol&apos; : &apos;combotext&apos;\" edittype=\"expr:dataset.getRowType(currow) == 2 ? &apos;combo&apos; : &apos;none&apos;\" text=\"bind:JAGYEOKJONGBYEOL_CD\" textAlign=\"left\" combodataset=\"dsGridJagyeokjongbyeol\" combocodecol=\"JAGYEOKJONGBYEOL_CD\" combodatacol=\"JAGYEOKJONGBYEOL_NM2\"/><Cell col=\"5\" text=\"bind:JEONGONG_ISU_GIJUN_HAKJEOM\" edittype=\"text\"/><Cell col=\"6\" text=\"bind:GIBON_ISU_GIJUN_HAKJEOM\" edittype=\"text\"/><Cell col=\"7\" text=\"bind:GYOGWA_GYOYUK_GIJUN_HAKJEOM\" edittype=\"text\"/><Cell col=\"8\" edittype=\"text\" text=\"bind:GYOJIK_ISU_GIJUN_HAKJEOM\"/><Cell col=\"9\" edittype=\"text\" text=\"bind:GYOJIK_IRON_GIJUN_HAKJEOM\"/><Cell col=\"10\" edittype=\"text\" text=\"bind:GYOJIK_SOYANG_GIJUN_HAKJEOM\"/><Cell col=\"11\" edittype=\"text\" text=\"bind:GYOJIK_SILSEUP_GIJUN_HAKJEOM\"/><Cell col=\"12\" edittype=\"text\" text=\"bind:JEONCHE_GIJUN_AVG\"/><Cell col=\"13\" edittype=\"mask\" text=\"bind:JEONGONG_GWAMOK_GIJUN_AVG\"/><Cell col=\"14\" edittype=\"mask\" text=\"bind:GYOJIK_GWAMOK_GIJUN_AVG\"/><Cell col=\"15\" edittype=\"text\" text=\"bind:JEOKSEONG_INSEONG_GIJUN_CNT\"/><Cell col=\"16\" edittype=\"text\" text=\"bind:EUNGGEUP_SIMPYE_GIJUN_CNT\"/><Cell col=\"17\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\" text=\"bind:JAGYEOKJEUNG_YN\"/><Cell col=\"18\" edittype=\"text\" displaytype=\"text\" text=\"bind:BIGO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","500","277","35","35",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grdDetail","0","312","900",null,null,"0",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("dsDetail");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"165\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" text=\"이수분야\"/><Cell col=\"3\" text=\"이수영역\"/><Cell col=\"4\" text=\"이수과목수\"/><Cell col=\"5\" text=\"영역별학점\"/><Cell col=\"6\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" editmaxlength=\"1\"/><Cell col=\"1\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"2\" displaytype=\"combocontrol\" edittype=\"expr:dataset.getRowType(currow) == &quot;2&quot; ? &quot;combo&quot; : &quot;none&quot; \" text=\"bind:ISU_BUNYA_CD\" textAlign=\"left\" combodataset=\"dsGridIsuBunya\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"3\" displaytype=\"combocontrol\" edittype=\"expr:dataset.getRowType(currow) == &quot;2&quot; &amp;&amp; ISU_BUNYA_CD != null &amp;&amp; ISU_BUNYA_CD != &quot;&quot; ? &quot;combo&quot; : &quot;none&quot; \" text=\"bind:ISU_YEONGYEOK_CD\" textAlign=\"left\" combodataset=\"dsGridIsuYeongyeok\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"4\" text=\"bind:ISU_GWAMOK_CNT\" edittype=\"text\" editinputtype=\"digit\"/><Cell col=\"5\" edittype=\"text\" text=\"bind:YEONGYEOKBYEOL_HAKJEOM\" editinputtype=\"digit\"/><Cell col=\"6\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01","900","277","30",null,null,"0",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("30");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grdDetail00","930","312",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_binddataset("dsDetail00");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"50\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" text=\"교과목코드\"/><Cell col=\"3\" text=\"교과목명\"/><Cell col=\"4\" text=\"학점\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" editmaxlength=\"1\"/><Cell col=\"1\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"2\" displaytype=\"text\" text=\"bind:GYOGWAMOK_CD\"/><Cell col=\"3\" text=\"bind:GYOGWAMOK_NM\" expandshow=\"expr:dataset.getRowType(currow) == &quot;2&quot; ? &quot;show&quot; : &quot;hide&quot; \" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:HAKJEOM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","1300","277","35","35",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00","0","304",null,"8","0",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","0","280","140","31",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("교직이수영역 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00_00","930","280","155","31",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("교직이수교과목 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stRowCntDetail","140","283","200","24",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stRowCntDetail00","1085","283","200","24",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel00",null,"285","50","22","0",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave00",null,"285","50","22","53",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnRet00",null,"285","50","22","159",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnNew00",null,"285","50","22","106",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("신규");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnNew","744","285","50","22",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("신규");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnRet","691","285","50","22",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","797","285","50","22",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel","850","285","50","22",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.spnSearchYYYY","value","ds_input","IPHAK_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboSearchHakgwa","value","ds_input","HAKGWA_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboSearchJagyeokjongbyeol","value","ds_input","JAGYEOKJONGBYEOL_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
            this._addPreloadList("data","","dsDetail");
            this._addPreloadList("data","","dsDetail00");
        };
        
        // User Script
        this.registerScript("UP01_2040103_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UP01_2040103_M.xfdl(합격기준관리)
        * 작 성         일 명: 정진호
        * 작 성         일 자: 2022/08/16
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
        this.lvchkColidDs   = "IPHAK_YYYY$GYOJIK_HAKGWA_CD$JAGYEOKJONGBYEOL_CD"; // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs	= "입학년도$교직학과$자격종별";

        this.lvchkDetailColidDs   	= "ISU_BUNYA_CD$ISU_YEONGYEOK_CD"; // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkDetailColNameDs	= "이수분야$이수영역";

        this.lvchkDetail00ColidDs	= "GYOGWAMOK_CD"; // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkDetail00ColNameDs	= "교과목코드";

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
        	// 교직학과 조회 함수
        	this.fn_searchGyojikHakgwa();
        	// 자격증별 조회 함수
        	this.fn_searchJagyeokjongbyeol("search");
        	this.fn_searchJagyeokjongbyeol("grid");
        };

        /**********************************************************************
                04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        this.fn_formInit = function()
        {
        	// 기준연도학기
            var strDs    		= "dsBaseYyyyHakgi"; // 데이터를 받을 데이터셋리스트     예) "dsBaseYyyyHakgi"
            var svcId    		= "baseYyyyHakgiInit";
        	var strEopmuGbcd	= "US";
        	var strUseYn     	= "1";
            // gfn_BaseYyyyHakgiLoad(데이터셋, svcId , 업무구분, 사용구분);
            // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.gfn_BaseYyyyHakgiLoad(strDs, svcId, strEopmuGbcd, strUseYn);

            var strDs	= "dsGridIsuBunya|dsGridIsuYeongyeok";	// 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd = "00073|00074";                        // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb = "S|S";                                // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn = "";                                   // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId   = "Init";
            // gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
            // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.gfn_CmmnMultiComboLoad(strDs, strLgcd, strComb, strOptn, svcId);
        };

        // 기준학년도/학기
        this.fn_PostBaseYyyyHakgiInit = function()
        {
        	if (this.dsBaseYyyyHakgi.rowcount > 0) {
        		this.ds_input.setColumn(0, "IPHAK_YYYY", this.dsBaseYyyyHakgi.getColumn(0, "YYYY"));
        	}
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
                    case "Init":
                        this.fn_PostformInit();
                        break;
                    case "singleInit":
        				this.fn_PostSingleInt();
                        break;
        			case "baseYyyyHakgiInit":
        				this.fn_PostBaseYyyyHakgiInit();
        			    break;
                    case "Ret":
        				this.fn_PostRet();
                        break;
                    case "DetailRet":
        				this.fn_PostDetailRet();
                        break;
                    case "DetailRet00":
        				this.fn_PostDetailRet00();
                        break;
                    case "Save":
        				this.fn_PostSave();
                        break;
                    case "SaveDetail":
        				this.fn_PostSaveDetail();
                        break;
                    case "SaveDetail00":
        				this.fn_PostSaveDetail00();
                        break;
                    case "New":
        				this.fn_PostNew();
                        break;
                    case "Del":
        				this.fn_PostDel();
                        break;
                    case "DelDetail":
        				this.fn_PostDelDetail();
                        break;
                    case "DelDetail00":
        				this.fn_PostDelDetail00();
                        break;
        			case "CopyCnt":
        				this.fn_PostCopyCnt();
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
        		case "hakgwa" :
        			var sRtn = strVal.split(",");
        			if(sRtn[0] != "CLOSE")
        			{
        				this.dsMaster.set_enableevent(false);
        				this.dsMaster.setColumn(this.dsMaster.rowposition, "GYOJIK_HAKGWA_CD", sRtn[0]);
        				this.dsMaster.setColumn(this.dsMaster.rowposition, "GYOJIK_HAKGWA_NM", sRtn[1]);
        				this.dsMaster.set_enableevent(true);
        			}
        			break;
        		case "gyogwamok" :
        			var sRtn = strVal.split(",");
        			if(sRtn[0] != "CLOSE")
        			{
        				this.dsDetail00.set_enableevent(false);
        				this.dsDetail00.setColumn(this.dsDetail00.rowposition, "GYOGWAMOK_CD", 	sRtn[0]);
        				this.dsDetail00.setColumn(this.dsDetail00.rowposition, "GYOGWAMOK_NM", 	sRtn[1]);
        				this.dsDetail00.setColumn(this.dsDetail00.rowposition, "HAKJEOM", 		sRtn[5]);
        				this.dsDetail00.set_enableevent(true);
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
                case "tmp1" :        // 전년도복사
        			this.fn_Copy();
                    break;
                case "tmp2" :        // 팁
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
        	this.fn_clearDsMaster();
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
            var strUrl      = "/prj/UP/UP01/Retrieve_2040103_MList.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsMaster=dsMaster";
            var strArg      = "";
            var GBV_MENUID	= objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";	//공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        };

        /**
         * 기능 : 교직이수영역 조회 실행
         */
        this.fn_DetailRet = function()
        {
        	this.ds_inputDetail.setColumn(0, "IPHAK_YYYY", 			this.dsMaster.getColumn(this.dsMaster.rowposition, "IPHAK_YYYY"));
        	this.ds_inputDetail.setColumn(0, "GYOJIK_HAKGWA_CD", 	this.dsMaster.getColumn(this.dsMaster.rowposition, "GYOJIK_HAKGWA_CD"));
        	this.ds_inputDetail.setColumn(0, "JAGYEOKJONGBYEOL_CD",	this.dsMaster.getColumn(this.dsMaster.rowposition, "JAGYEOKJONGBYEOL_CD"));

            var strSvc      = "DetailRet";
            var strUrl      = "/prj/UP/UP01/Retrieve_2040103_DList.do";
            var strInDs     = "ds_input=ds_inputDetail";
            var strOutDs    = "dsDetail=dsMaster";
            var strArg      = "";
            var GBV_MENUID	= objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        }

        /**
         * 기능 : 교직이수교과목 조회 실행
         */
        this.fn_DetailRet00 = function()
        {
        	this.ds_inputDetail00.setColumn(0, "IPHAK_YYYY", 			this.dsDetail.getColumn(this.dsDetail.rowposition, "IPHAK_YYYY"));
        	this.ds_inputDetail00.setColumn(0, "GYOJIK_HAKGWA_CD", 		this.dsDetail.getColumn(this.dsDetail.rowposition, "GYOJIK_HAKGWA_CD"));
        	this.ds_inputDetail00.setColumn(0, "JAGYEOKJONGBYEOL_CD", 	this.dsDetail.getColumn(this.dsDetail.rowposition, "JAGYEOKJONGBYEOL_CD"));
        	this.ds_inputDetail00.setColumn(0, "ISU_YEONGYEOK_CD", 		this.dsDetail.getColumn(this.dsDetail.rowposition, "ISU_YEONGYEOK_CD"));

            var strSvc      = "DetailRet00";
            var strUrl      = "/prj/UP/UP01/Retrieve_2040103_D00List.do";
            var strInDs     = "ds_input=ds_inputDetail00";
            var strOutDs    = "dsDetail00=dsMaster";
            var strArg      = "";
            var GBV_MENUID	= objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        }

        /**
         * 기능 : 조회 후 실행
         */
        this.fn_PostRet = function()
        {
            this.gfn_getRowCount(this.stRowCnt,this.dsMaster);
        };

        /**
         * 기능 : 교직이수영역 조회 후 실행
         */
        this.fn_PostDetailRet = function()
        {
            this.gfn_getRowCount(this.stRowCntDetail,this.dsDetail);
        	if (this.dsDetail.rowcount < 1)
        	{
        		this.dsDetail00.clearData();
        		this.fn_PostDetailRet00();
        	}
        };

        /**
         * 기능 : 교직이수교과목 조회 후 실행
         */
        this.fn_PostDetailRet00 = function()
        {
            this.gfn_getRowCount(this.stRowCntDetail00,this.dsDetail00);
        };

        /**********************************************************************
                06. 추가 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 추가 전 실행(기본체크사항)
         */
        this.fn_PreNew = function()
        {
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
        	var yyyy = this.divSearch.form.spnSearchYYYY.value;
            var nRow = this.dsMaster.addRow();
        	this.dsMaster.setColumn(nRow, "IPHAK_YYYY", 			yyyy);
        	this.dsMaster.setColumn(nRow, "JAGYEOKJONGBYEOL_CD", 	"");
        };

        /**
         * 기능 : 교직이수영역 추가 실행
         */
        this.fn_NewDetail = function()
        {
            var nRow = this.dsDetail.addRow();
        	this.dsDetail.setColumn(nRow, "IPHAK_YYYY", 			this.dsMaster.getColumn(this.dsMaster.rowposition, "IPHAK_YYYY"));
        	this.dsDetail.setColumn(nRow, "GYOJIK_HAKGWA_CD", 		this.dsMaster.getColumn(this.dsMaster.rowposition, "GYOJIK_HAKGWA_CD"));
        	this.dsDetail.setColumn(nRow, "JAGYEOKJONGBYEOL_CD", 	this.dsMaster.getColumn(this.dsMaster.rowposition, "JAGYEOKJONGBYEOL_CD"));
        };

        /**
         * 기능 : 교직이수교과목 추가 실행
         */
        this.fn_NewDetail00 = function()
        {
            var nRow = this.dsDetail00.addRow();
        	this.dsDetail00.setColumn(nRow, "IPHAK_YYYY", 			this.dsDetail.getColumn(this.dsDetail.rowposition, "IPHAK_YYYY"));
        	this.dsDetail00.setColumn(nRow, "GYOJIK_HAKGWA_CD", 	this.dsDetail.getColumn(this.dsDetail.rowposition, "GYOJIK_HAKGWA_CD"));
        	this.dsDetail00.setColumn(nRow, "JAGYEOKJONGBYEOL_CD", 	this.dsDetail.getColumn(this.dsDetail.rowposition, "JAGYEOKJONGBYEOL_CD"));
        	this.dsDetail00.setColumn(nRow, "ISU_YEONGYEOK_CD", 	this.dsDetail.getColumn(this.dsDetail.rowposition, "ISU_YEONGYEOK_CD"));
        };

        /**
         * 기능 : 처리 후 실행
         */
        this.fn_PostNew = function()
        {

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
            if(this.dsMaster.rowcount < 1 || this.dsMaster.findRow("CHK",1) == -1)
            {
                this.gfn_alert("삭제할 데이터가 없습니다.","삭제정보","","warning");
                return false;
            }

            var result = this.gfn_confirm( "현재선택행을 삭제하시겠습니까?", "삭제정보","","question" );
            if(result == 0)
            {
                return false;
            }

            //다중삭제 용도
            this.dsMaster.set_enableevent(false);
            for(var i=this.dsMaster.rowcount-1;i>-1;i--)
            {
                if(this.dsMaster.getColumn(i,"CHK") == "1" || this.dsMaster.getRowType(i) == 2)
                {
                    this.dsMaster.deleteRow(i);
                }
            }
            this.dsMaster.set_enableevent(true);

            //개별삭제시
            //this.dsMaster.deleteRow(this.dsMaster.rowposition);

            return true;
        };

        /**
         * 기능 : 교직이수영역 삭제 버튼 실행
         */
        this.fn_PreDelDetail = function()
        {
            //멀티삭제용도
            if(this.dsDetail.rowcount < 1 || this.dsDetail.findRow("CHK",1) == -1)
            {
                this.gfn_alert("삭제할 데이터가 없습니다.","삭제정보","","warning");
                return false;
            }

            var result = this.gfn_confirm("삭제하실 경우, 하위의 교직이수교과목 데이터도 함께 삭제됩니다.\n그래도 삭제하시겠습니까?", "삭제정보", "", "question");
            if(result == 0)
            {
                return false;
            }

            //다중삭제 용도
            this.dsDetail.set_enableevent(false);
            for(var i=this.dsDetail.rowcount-1;i>-1;i--)
            {
                if(this.dsDetail.getColumn(i,"CHK") == "1" || this.dsDetail.getRowType(i) == 2)
                {
                    this.dsDetail.deleteRow(i);
                }
            }
            this.dsDetail.set_enableevent(true);

            return true;
        };

        /**
         * 기능 : 교직이수교과목 삭제 버튼 실행
         */
        this.fn_PreDelDetail00 = function()
        {
            //멀티삭제용도
            if(this.dsDetail00.rowcount < 1 || this.dsDetail00.findRow("CHK",1) == -1)
            {
                this.gfn_alert("삭제할 데이터가 없습니다.","삭제정보","","warning");
                return false;
            }

            var result = this.gfn_confirm( "현재선택행을 삭제하시겠습니까?", "삭제정보","","question" );
            if(result == 0)
            {
                return false;
            }

            //다중삭제 용도
            this.dsDetail00.set_enableevent(false);
            for(var i=this.dsDetail00.rowcount-1;i>-1;i--)
            {
                if(this.dsDetail00.getColumn(i,"CHK") == "1" || this.dsDetail00.getRowType(i) == 2)
                {
                    this.dsDetail00.deleteRow(i);
                }
            }
            this.dsDetail00.set_enableevent(true);

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
            var strUrl      = "/prj/UP/UP01/Delete_2040103_MList.do";
            var strInDs     = "dsMaster=dsMaster:u";
            var strOutDs    = "";
            var strArg      = "";
            var strCallBack	= "fn_callBack";	// 공백일시 기본 fn_callBack
            var strASync    = true;				// 샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        };

        /**
         * 기능 : 교직이수영역 Row 삭제 또는 Transaction 삭제 처리
         */
        this.fn_DelDetail = function()
        {
            if(!this.fn_PreDelDetail())
            {
                return false;
            }

            var strSvc      = "DelDetail";
            var strUrl      = "/prj/UP/UP01/Delete_2040103_DList.do";
            var strInDs     = "dsMaster=dsDetail:u";
            var strOutDs    = "";
            var strArg      = "";
            var strCallBack = "fn_callBack";	// 공백일시 기본 fn_callBack
            var strASync    = true;				// 생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        };

        /**
         * 기능 : 교직이수교과목 Row 삭제 또는 Transaction 삭제 처리
         */
        this.fn_DelDetail00 = function()
        {
            if(!this.fn_PreDelDetail00())
            {
                return false;
            }

            var strSvc      = "DelDetail00";
            var strUrl      = "/prj/UP/UP01/Delete_2040103_D00List.do";
            var strInDs     = "dsMaster=dsDetail00:u";
            var strOutDs    = "";
            var strArg      = "";
            var strCallBack = "fn_callBack";	// 공백일시 기본 fn_callBack
            var strASync    = true;				// 샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        };

        /**
         * 기능 : 삭제 실행 후
         */
        this.fn_PostDel = function()
        {
        	this.fn_clearDsMaster();
        	this.alert("합격기준 목록이 정상적으로 삭제되었습니다.");
        };

        /**
         * 기능 : 교직이수영역 삭제 실행 후
         */
        this.fn_PostDelDetail = function()
        {
        	this.fn_clearDsDetail();
        	this.alert("교직이수영역 목록이 정상적으로 삭제되었습니다.");
        };

        /**
         * 기능 : 교직이수교과목 삭제 실행 후
         */
        this.fn_PostDelDetail00 = function()
        {
        	this.fn_clearDsDetail00();
        	this.alert("교직이수교과목 목록이 정상적으로 삭제되었습니다.");
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
            var chkFocusFlg = true;
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
         * 기능 : 교직이수영역 저장 전 실행
         */
        this.fn_PreSaveDetail = function()
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
                this.gfn_alert("변경된 이력이 없습니다.","저장정보","","question");
                return false;
            }

            // 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
            var chkFocusFlg = true;
            var result      = this.gfn_cmmnChkEssentialItem(this.dsDetail, this.lvchkDetailColidDs, this.lvchkDetailColNameDs, this.grdDetail, chkFocusFlg, this);
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
         * 기능 : 교직이수교과목 저장 전 실행
         */
        this.fn_PreSaveDetail00 = function()
        {
            if(this.dsDetail00.rowcount > 0)
            {
                for(var i=0;i<this.dsDetail00.rowcount; i++)
                {
                    if(this.dsDetail00.getColumn(i,"CHK") == "0")
                    {
                        continue;
                    }

                    this.dsDetail00.setColumn(i,"CHK","0");
                }
            }

            if(!this.gfn_isUpdate(this.dsDetail00))
            {
                this.gfn_alert("변경된 이력이 없습니다.","저장정보","","question");
                return false;
            }

            // 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
            var chkFocusFlg = true;
            var result      = this.gfn_cmmnChkEssentialItem(this.dsDetail00, this.lvchkDetail00ColidDs, this.lvchkDetail00ColNameDs, this.grdDetail00, chkFocusFlg, this);
            if (result[0] != "success")
            {
                this.gfn_alert(result[0],"저장정보","","question");
                this.dsDetail00.set_rowposition(result[1]); //데이터셋 변경
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
            var strUrl      = "/prj/UP/UP01/Save_2040103_MList.do";
            var strInDs     = "ds_input=ds_input:a ";
                strInDs    += "dsMaster=dsMaster:u";
            var strOutDs    = "dsMaster=dsMaster";
            var strArg      = "";
            var GBV_MENUID	= objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";	// 공백일시 기본 fn_callBack
            var strASync    = true;             // 샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        };

        /**
         * 기능 : 교수이수영역 저장 실행
         */
        this.fn_SaveDetail = function()
        {
            if(!this.fn_PreSaveDetail())
            {
                return false;
            }

            var strSvc      = "SaveDetail";
            var strUrl      = "/prj/UP/UP01/Save_2040103_DList.do";
            var strInDs     = "ds_input=ds_inputDetail:a ";
                strInDs    += "dsMaster=dsDetail:u";
            var strOutDs    = "dsDetail=dsMaster";
            var strArg      = "";
            var GBV_MENUID	= objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";	// 공백일시 기본 fn_callBack
            var strASync    = true;             // 샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        };

        /**
         * 기능 : 교수이수교과목 저장 실행
         */
        this.fn_SaveDetail00 = function()
        {
            if(!this.fn_PreSaveDetail00())
            {
                return false;
            }

            var strSvc      = "SaveDetail00";
            var strUrl      = "/prj/UP/UP01/Save_2040103_D00List.do";
            var strInDs     = "ds_input=ds_inputDetail00:a ";
                strInDs    += "dsMaster=dsDetail00:u";
            var strOutDs    = "dsDetail00=dsMaster";
            var strArg      = "";
            var GBV_MENUID	= objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        };

        /**
         *      기능 : 저장시 후처리
         */
        this.fn_PostSave = function()
        {
            this.gfn_getRowCount(this.stRowCnt,this.dsMaster);
        	this.alert("합격기준목록이 정상적으로 저장되었습니다.");
        };

        /**
         *      기능 : 교수이수영역 저장시 후처리
         */
        this.fn_PostSaveDetail = function()
        {
            this.gfn_getRowCount(this.stRowCntDetail,this.dsDetail);
        	this.alert("교직이수영역 목록이 정상적으로 저장되었습니다.");
        };

        /**
         *      기능 : 교수이수교과목 저장시 후처리
         */
        this.fn_PostSaveDetail00 = function()
        {
            this.gfn_getRowCount(this.stRowCntDetail00,this.dsDetail00);
        	this.alert("교직이수교과목 목록이 정상적으로 저장되었습니다.");
        };

        /**********************************************************************
                09. 초기화
        ***********************************************************************/
        /**********************************************************************
                10. 출력 함수 선언
        ***********************************************************************/
        /**********************************************************************
                11. ExcelDnwn 엑셀로 출력
        ***********************************************************************/
        this.fn_Excel = function()
        {
            if(this.dsMaster.rowcount < 1)
            {
                this.gfn_alert("출력할 엑셀데이터가 없습니다.", "EXCEL 정보" ,"","information");
                return false;
            }

            var result = this.gfn_confirm( "Excel를 출력하시겠습니까?", "EXCEL 출력","","question" );
            if(result == 0)
            {
               return false;
            }

            this.gfn_excelExport(this.grdList, "시트이름","파일이름");
        };

        /**********************************************************************
                12. 팝업
        ***********************************************************************/
        /**
         *      기능 : 학과검색팝업 호출
         */
        this.fn_setCallDeptPopup = function(strSearchValue)
        {
        	this.dsDept.clearData();
        	this.ds_input1.setColumn(0, "DEPT_CD_NM", strSearchValue);

        	if(!this.gfn_isNull(strSearchValue))
        	{
        		var strSvc 		= "Search";
        		var strUrl      = "/prj/com/Retrieve_P01.do";
        		var strInDs  	= "ds_input=ds_input1";
        		var strOutDs 	= "dsDept=dsMaster";
        		var strArg 		= "";
        		var GBV_MENUID	= objApp.gv_cutPrgId;
        		if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
        		{
        		  strArg = "GBV_MENUID=" + GBV_MENUID + " " + strArg;
        		}
        		var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        		var strASync    = false;			//샏략이나 공백일시에는 ASync=true,싱크시는 false로
        		this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        	}

        	if(this.dsDept.rowcount == 1)
        	{
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "GYOJIK_HAKGWA_CD", this.dsDept.getColumn(0,"DEPT_CD"));
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "GYOJIK_HAKGWA_NM", this.dsDept.getColumn(0,"DEPT_NM"));
        	}
        	else
        	{
        		var oArg 			= {deptCdNm:strSearchValue, jojikGbcd:'20', useYn:'1', deptLv:'3'};
        		var oOption 		= {};
        		var sPopupCallBack 	= "fn_popupCallback";
        		this.gfn_openPopup("hakgwa","com::COMM_P01.xfdl",oArg,sPopupCallBack,oOption);
        	}
        };

        /**
         *      기능 : 교과목검색팝업 호출
         */
        this.fn_setCallGyogwamokPopup = function(strSearchValue)
        {
        	this.dsGyogwamok.clearData();
        	this.ds_input1.setColumn(0, "GYOGWAMOK_CD_NM", strSearchValue);

        	if(!this.gfn_isNull(strSearchValue))
        	{
        		var strSvc 		= "Search";
        		var strUrl      = "/prj/com/Retrieve_P13.do";
        		var strInDs  	= "ds_input=ds_input1";
        		var strOutDs 	= "dsGyogwamok=dsMaster";
        		var strArg 		= "";
        		var GBV_MENUID	= objApp.gv_cutPrgId;
        		if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
        		{
        		  strArg = "GBV_MENUID=" + GBV_MENUID + " " + strArg;
        		}
        		var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        		var strASync    = false;			//샏략이나 공백일시에는 ASync=true,싱크시는 false로
        		this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        	}

        	if(this.dsGyogwamok.rowcount == 1)
        	{
        		this.dsDetail00.setColumn(this.dsDetail00.rowposition, "GYOGWAMOK_CD", 	this.dsGyogwamok.getColumn(0,"GYOGWAMOK_CD"));
        		this.dsDetail00.setColumn(this.dsDetail00.rowposition, "GYOGWAMOK_NM", 	this.dsGyogwamok.getColumn(0,"GYOGWAMOK_NM"));
        		this.dsDetail00.setColumn(this.dsDetail00.rowposition, "HAKJEOM", 		this.dsGyogwamok.getColumn(0,"HAKJEOM"));
        	}
        	else
        	{
        		var oArg 			= {gyogwamokCdNm:strSearchValue};
        		var oOption 		= {};
        		var sPopupCallBack 	= "fn_popupCallback";
        		this.gfn_openPopup( "gyogwamok","com::COMM_P13.xfdl",oArg,sPopupCallBack,oOption);
        	}
        };

        /**********************************************************************
                13. Get, Set Method
        ***********************************************************************/
        /**********************************************************************
                14. 기타 Control Event
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

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
            //return this.gfn_isUpdate(this.dsMaster);
        };

        /**
         * 기능 : 전년도복사 실행
         */
        this.fn_Copy = function()
        {
        	this.ds_inputCopy.setColumn(0, "IPHAK_YYYY", 			this.divSearch.form.spnSearchYYYY.value);
        	this.ds_inputCopy.setColumn(0, "NOW_YYYY", 				this.divSearch.form.spnSearchYYYY.value);
        	this.ds_inputCopy.setColumn(0, "AGO_YYYY", 				this.divSearch.form.spnSearchYYYY.value - 1);
        	this.ds_inputCopy.setColumn(0, "GYOJIK_HAKGWA_CD", 		this.divSearch.form.cboSearchHakgwa.value);
        	this.ds_inputCopy.setColumn(0, "JAGYEOKJONGBYEOL_CD", 	this.divSearch.form.cboSearchJagyeokjongbyeol.value);

        	// 데이터 존재여부 확인
            var strSvc      = "CopyCnt";
            var strUrl      = "/prj/UP/UP01/Retrieve_2040103_CopyCount.do";
            var strInDs     = "ds_input=ds_inputCopy";
            var strOutDs    = "dsCopyCnt=dsMaster";
            var strArg      = "";
            var GBV_MENUID	= objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        };

        /**
         * 기능 : 전년도복사 실행 후
         */
        this.fn_PostCopyCnt = function()
        {
        	var nowYyyy = this.divSearch.form.spnSearchYYYY.value;
        	var ageYyyy	= nowYyyy - 1;
        	var nowCnt 	= this.dsCopyCnt.getColumn(0, "NOW_COUNT");
        	var agoCnt 	= this.dsCopyCnt.getColumn(0, "AGO_COUNT");

        	if (agoCnt == 0)
        	{
        		this.alert(ageYyyy + "년도(전년도)에 데이터가 존재하지 않습니다.");
        		return;
        	}

        	var msgStr = (nowCnt > 0 ? (nowYyyy + "년도에 이미 데이터가 존재합니다.\n삭제 후 복사하시겠습니까?") : (ageYyyy + "년도의 데이터를 " + nowYyyy + "년도에 복사하시겠습니까?"));
        	if (!this.gfn_confirm(msgStr, "전년도복사", "", "question" )) return;

        	// 전년도복사 실행
            var strSvc      = "Copy";
            var strUrl      = "/prj/UP/UP01/Copy_2040103_MList.do";
            var strInDs     = "ds_input=ds_inputCopy";
            var strOutDs    = "dsMaster=dsMaster";
            var strArg      = "";
            var GBV_MENUID	= objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        }

        /**
         * 기능 : 팁 실행
         */
        this.fn_Tip = function()
        {
        	this.alert("도움말 준비중입니다.");
        };

        /**
          * grdMaster 확장기능
         **/
        this.grdMaster_onexpandup = function(obj,e)
        {
        	if (e.cell == 3)
        	{
        		var name = this.dsMaster.getColumn(e.row, "GYOJIK_HAKGWA_NM");
        		this.fn_setCallDeptPopup(name);
        	}
        };

        /**
          * grdMaster 엔터입력
         **/
        this.grdMaster_onenterdown = function(obj,e)
        {
        	if (e.cell == 3)
        	{
        		var name = this.dsMaster.getColumn(e.row, "GYOJIK_HAKGWA_NM");
        		this.fn_setCallDeptPopup(name);
        	}
        };

        /**
          * grdDetail00 확장기능
         **/
        this.grdDetail00_onexpandup = function(obj,e)
        {
        	if (e.cell == 3)
        	{
        		var name = this.dsDetail00.getColumn(e.row, "GYOGWAMOK_NM");
        		this.fn_setCallGyogwamokPopup(name);
        	}
        };

        /**
          * dsMaster row 변경시
         **/
        this.dsMaster_onrowposchanged = function(obj,e)
        {
        	this.fn_DetailRet();
        };

        /**
          * dsDetail row 변경시
         **/
        this.dsDetail_onrowposchanged = function(obj,e)
        {
        	this.fn_DetailRet00();
        };

        /**
          * dsDetail value 변경시
         **/
        this.dsDetail_onvaluechanged = function(obj,e)
        {
        	if (e.columnid == "ISU_BUNYA_CD")
        	{
        		this.dsGridIsuYeongyeok.filter("REF_1 == '" + this.dsDetail.getColumn(this.dsDetail.rowposition, "ISU_BUNYA_CD") + "'");
        	}

        	if (e.columnid == "ISU_YEONGYEOK_CD")
        	{
        		this.dsGridIsuYeongyeok.filter("");
        	}
        };

        /**
         * 기능 : 교직학과 조회
         */
        this.fn_searchGyojikHakgwa = function(obj) {
        	this.ds_inputGyojikHakgwa.setColumn(0, "SELECT_TYPE", "A");
            var strSvc      = "GyojikHakgwa";
            var strUrl      = "/prj/UP/UP_COMMON/Retrieve_gyojikHakgwaList.do";
            var strInDs     = "ds_input=ds_inputGyojikHakgwa";
            var strOutDs    = "dsGyojikHakgwa=dsMaster";
            var strArg      = "";
            var GBV_MENUID	= objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        }

        /**
         * 기능 : 자격증별 조회
         */
        this.fn_searchJagyeokjongbyeol = function(objStr) {
        	this.ds_inputJagyeokjongbyeol.setColumn(0, "SELECT_TYPE", objStr == "search" ? "A" : "S");
            var strSvc      = "Jagyeokjongbyeol";
            var strUrl      = "/prj/UP/UP_COMMON/Retrieve_jagyeokjongbyeolList.do";
            var strInDs     = "ds_input=ds_inputJagyeokjongbyeol";
            var strOutDs    = (objStr == "search" ? "dsJagyeokjongbyeol" : "dsGridJagyeokjongbyeol") + "=dsMaster";
            var strArg      = "";
            var GBV_MENUID	= objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        }

        /**
         * 기능 : 교직이수영역 조회 버튼
         */
        this.btnRet_onclick = function(obj,e)
        {
        	this.fn_DetailRet();
        };

        /**
         * 기능 : 교직이수영역 신규 버튼
         */
        this.btnNew_onclick = function(obj,e)
        {
        	if (this.dsMaster.rowcount < 1)
        	{
        		return;
        	}

        	for (var i = 0; i < this.dsMaster.rowcount; i++)
        	{
        		if (this.dsMaster.getRowType(i) == 2 || this.dsMaster.getRowType(i) == 4)
        		{
        			this.alert("합격기준목록에서 수정 또는 신규 데이터가 있습니다.\n합격기준목록을 저장 후 교직이수영역을 추가해주세요.");
        			return;
        		}
        	}

        	this.fn_NewDetail();
        };

        /**
         * 기능 : 교직이수영역 저장 버튼
         */
        this.btnSave_onclick = function(obj,e)
        {
        	this.fn_SaveDetail();
        };

        /**
         * 기능 : 교직이수영역 삭제 버튼
         */
        this.btnDel_onclick = function(obj,e)
        {
        	this.fn_DelDetail();
        };

        /**
         * 기능 : 교직이수교과목 조회 버튼
         */
        this.btnRet00_onclick = function(obj,e)
        {
        	this.fn_DetailRet00();
        };

        /**
         * 기능 : 교직이수교과목 신규 버튼
         */
        this.btnNew00_onclick = function(obj,e)
        {
        	if (this.dsDetail.rowcount < 1)
        	{
        		return;
        	}

        	for (var i = 0; i < this.dsDetail.rowcount; i++)
        	{
        		if (this.dsDetail.getRowType(i) == 2 || this.dsDetail.getRowType(i) == 4)
        		{
        			this.alert("교직이수영역 목록에서 수정 또는 신규 데이터가 있습니다.\교직이수영역 목록을 저장 후 교직이수교과목을 추가해주세요.");
        			return;
        		}
        	}

        	this.fn_NewDetail00();
        };

        /**
         * 기능 : 교직이수교과목 저장 버튼
         */
        this.btnSave00_onclick = function(obj,e)
        {
        	this.fn_SaveDetail00();
        };

        /**
         * 기능 : 교직이수교과목 삭제 버튼
         */
        this.btnDel00_onclick = function(obj,e)
        {
        	this.fn_DelDetail00();
        };

        /**
         * 기능 : dsMaster clear
         */
        this.fn_clearDsMaster = function()
        {
            this.gfn_getRowCount(this.stRowCnt,this.dsMaster);
        	this.dsDetail.clearData();
        	this.fn_clearDsDetail();
        }

        /**
         * 기능 : dsDetail clear
         */
        this.fn_clearDsDetail = function()
        {
            this.gfn_getRowCount(this.stRowCntDetail,this.dsDetail);
        	this.dsDetail00.clearData();
        	this.fn_clearDsDetail00();
        }

        /**
         * 기능 : dsDetail00 clear
         */
        this.fn_clearDsDetail00 = function()
        {
            this.gfn_getRowCount(this.stRowCntDetail00,this.dsDetail00);
        }

        // 엔터 입력
        this.fn_onKeydown = function(obj, e) {
        	if (e.keycode == 13) {
        		this.fn_Ret();
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclose",this.form_onclose,this);
            this.divSearch.form.stc_01_00.addEventHandler("onclick",this.divSearch_stc_01_00_onclick,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onitemchanged",this.divSearch_cboSearchHakgwa_onitemchanged,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.divSearch.form.cboSearchJagyeokjongbyeol.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.grdMaster.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster.addEventHandler("onselectchanged",this.grdMaster_onselectchanged,this);
            this.grdMaster.addEventHandler("onexpandup",this.grdMaster_onexpandup,this);
            this.grdMaster.addEventHandler("onenterdown",this.grdMaster_onenterdown,this);
            this.grdDetail.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
            this.grdDetail.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdDetail.addEventHandler("onselectchanged",this.grdMaster_onselectchanged,this);
            this.grdDetail.addEventHandler("onexpandup",this.grdMaster_onexpandup,this);
            this.Static01_01_00_00_00_01.addEventHandler("onclick",this.Static01_01_00_00_00_01_onclick,this);
            this.grdDetail00.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
            this.grdDetail00.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdDetail00.addEventHandler("onselectchanged",this.grdMaster_onselectchanged,this);
            this.grdDetail00.addEventHandler("onexpandup",this.grdDetail00_onexpandup,this);
            this.grdDetail00.addEventHandler("onenterdown",this.grdDetail00_onenterdown,this);
            this.btnDel00.addEventHandler("onclick",this.btnDel00_onclick,this);
            this.btnSave00.addEventHandler("onclick",this.btnSave00_onclick,this);
            this.btnRet00.addEventHandler("onclick",this.btnRet00_onclick,this);
            this.btnNew00.addEventHandler("onclick",this.btnNew00_onclick,this);
            this.btnNew.addEventHandler("onclick",this.btnNew_onclick,this);
            this.btnRet.addEventHandler("onclick",this.btnRet_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.btnDel.addEventHandler("onclick",this.btnDel_onclick,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.ds_input.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
            this.dsDetail.addEventHandler("onrowposchanged",this.dsDetail_onrowposchanged,this);
            this.dsDetail.addEventHandler("onvaluechanged",this.dsDetail_onvaluechanged,this);
            this.ds_inputDetail.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
            this.ds_inputDetail00.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
            this.ds_inputGyojikHakgwa.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
            this.ds_inputJagyeokjongbyeol.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
            this.ds_inputCopy.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
            this.dsCopyCnt.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
        };
        this.loadIncludeScript("UP01_2040103_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
