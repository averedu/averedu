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
            this.set_titletext("교직적성및인성검사관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMaster", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"YYYY_HOECHA\" type=\"STRING\" size=\"15\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HOECHA\" type=\"STRING\" size=\"1\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"50\"/><Column id=\"POGI_YN\" type=\"STRING\" size=\"1\"/><Column id=\"JAGYEOKJONGBYEOL_CD\" type=\"STRING\" size=\"10\"/><Column id=\"SEUNGIN_YN\" type=\"STRING\" size=\"1\"/><Column id=\"GEOMSA_TYCD\" type=\"STRING\" size=\"1\"/><Column id=\"HANGMOK01\" type=\"STRING\" size=\"5\"/><Column id=\"HANGMOK02\" type=\"STRING\" size=\"5\"/><Column id=\"HANGMOK03\" type=\"STRING\" size=\"5\"/><Column id=\"HANGMOK04\" type=\"STRING\" size=\"5\"/><Column id=\"HANGMOK05\" type=\"STRING\" size=\"5\"/><Column id=\"HANGMOK06\" type=\"STRING\" size=\"5\"/><Column id=\"HANGMOK07\" type=\"STRING\" size=\"5\"/><Column id=\"HANGMOK08\" type=\"STRING\" size=\"5\"/><Column id=\"HANGMOK09\" type=\"STRING\" size=\"5\"/><Column id=\"HANGMOK10\" type=\"STRING\" size=\"5\"/><Column id=\"HANGMOK11\" type=\"STRING\" size=\"5\"/><Column id=\"HANGMOK12\" type=\"STRING\" size=\"5\"/><Column id=\"HANGMOK13\" type=\"STRING\" size=\"5\"/><Column id=\"HANGMOK14\" type=\"STRING\" size=\"5\"/><Column id=\"HANGMOK15\" type=\"STRING\" size=\"5\"/><Column id=\"HANGMOK16\" type=\"STRING\" size=\"5\"/><Column id=\"HANGMOK17\" type=\"STRING\" size=\"5\"/><Column id=\"HANGMOK18\" type=\"STRING\" size=\"5\"/><Column id=\"HANGMOK19\" type=\"STRING\" size=\"5\"/><Column id=\"HANGMOK20\" type=\"STRING\" size=\"5\"/><Column id=\"TOT\" type=\"STRING\" size=\"5\"/><Column id=\"JEOKGYEOK_YN\" type=\"STRING\" size=\"1\"/><Column id=\"ILGWANSEONG_YN_BIGO\" type=\"STRING\" size=\"100\"/><Column id=\"BUJEOKGYEOKHANGMOK_BIGO\" type=\"STRING\" size=\"2000\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HOECHA\" type=\"STRING\" size=\"256\"/><Column id=\"GYEYEOL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NUMNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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


            obj = new Dataset("ds_inputCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"SELECT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"GYOJIK_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJagyeokjongbyeol", this);
            obj._setContents("<ColumnInfo><Column id=\"JAGYEOKJONGBYEOL_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JAGYEOKJONGBYEOL_NM\" type=\"STRING\" size=\"50\"/><Column id=\"JAGYEOKJONGBYEOL_NM2\" type=\"STRING\" size=\"101\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inputAll", this);
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HOECHA\" type=\"STRING\" size=\"256\"/><Column id=\"GYEYEOL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NUMNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNyeondo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"YYYY_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHoecha", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"UP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HOECHA\" type=\"STRING\" size=\"256\"/><Column id=\"HOECHA_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"42","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

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

            obj = new Static("Static01_02_00_00_00","80","0","10","42",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","0","0","1640","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
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
            obj.set_taborder("3");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chk_searchAll","296","11","47","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("전체");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00","0","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("년도/회차");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01_00","343","10","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("계열");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_01","343","1","56","35",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_00_01","423","1","10","35",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchGyeyeol","433","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsGyeyeol");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00","553","1","56","35",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01_00_00","553","10","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("학과");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_00_00","633","1","10","35",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgwa","643","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsHakgwa");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_01_00","763","1","56","35",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01_00_00_00","763","10","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("전공");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_00_01_00","843","1","10","35",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJeongong","853","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsJeongong");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01_00_00_00_00","973","9","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("학생/성명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00_00","973","0","56","35",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_00_01_00_00","1083","0","10","35",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchName","1093","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchNyeondo","90","9","100","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_codecolumn("YYYY");
            obj.set_datacolumn("YYYY_NM");
            obj.set_innerdataset("dsNyeondo");
            obj.set_text("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHoecha","193","9","100","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_codecolumn("HOECHA");
            obj.set_datacolumn("HOECHA_NM");
            obj.set_innerdataset("dsHoecha");
            obj.set_text("");
            obj.set_index("0");
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

            obj = new Static("staRowCnt","215","48","500","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건 (적격 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건 / 부적격 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건)]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","0","45","215","31",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_Title02");
            obj.set_text("교직적성및인성검사 결과 목록");
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

            obj = new Grid("grdMaster","0","77",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("dsMaster");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"120\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"48\" band=\"left\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"150\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" text=\"년도-회차\"/><Cell col=\"3\" text=\"학번\"/><Cell col=\"4\" text=\"성명\"/><Cell col=\"5\" text=\"자격종별\"/><Cell col=\"6\" text=\"교직이수&#13;&#10;승인여부\"/><Cell col=\"7\" text=\"교직이수&#13;&#10;포기여부\"/><Cell col=\"8\" text=\"검사&#13;&#10;유형\"/><Cell col=\"9\" text=\"01.문제해결력&#13;&#10;탐구력\"/><Cell col=\"10\" text=\"02.판단력\"/><Cell col=\"11\" text=\"03.독립성&#13;&#10;자주성\"/><Cell col=\"12\" text=\"04.창의&#13;&#10;응용력\"/><Cell col=\"13\" text=\"05.심리적&#13;&#10;안정성\"/><Cell col=\"14\" text=\"06.언어&#13;&#10;의사소통력\"/><Cell col=\"15\" text=\"07.지도성\"/><Cell col=\"16\" text=\"08.공포&#13;&#10;포용력\"/><Cell col=\"17\" text=\"09.지식&#13;&#10;정보력\"/><Cell col=\"18\" text=\"10.봉사&#13;&#10;희생·협동성\"/><Cell col=\"19\" text=\"11.계획성\"/><Cell col=\"20\" text=\"12.성실&#13;&#10;책임감\"/><Cell col=\"21\" text=\"13.소명감&#13;&#10;교직관\"/><Cell col=\"22\" text=\"14.열정\"/><Cell col=\"23\" text=\"총점\"/><Cell col=\"24\" text=\"적격여부\"/><Cell col=\"25\" text=\"일관성 여부 비고\"/><Cell col=\"26\" text=\"부적격 항목 비고\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" editmaxlength=\"1\"/><Cell col=\"1\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"2\" text=\"bind:YYYY_HOECHA\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:HAKBEON\" textAlign=\"center\" expandimage=\"URL(&quot;theme://images/form/btn_find_p.png&quot;)\"/><Cell col=\"4\" text=\"bind:HAKSAENG_NM\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:JAGYEOKJONGBYEOL_CD\" combodataset=\"dsJagyeokjongbyeol\" combodatacol=\"JAGYEOKJONGBYEOL_NM\" combocodecol=\"JAGYEOKJONGBYEOL_CD\" displaytype=\"combotext\" textAlign=\"left\"/><Cell col=\"6\" displaytype=\"checkboxcontrol\" text=\"bind:SEUNGIN_YN\"/><Cell col=\"7\" text=\"bind:POGI_YN\" displaytype=\"combotext\" combodataset=\"dsYn\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:GEOMSA_TYCD\"/><Cell col=\"9\" text=\"bind:HANGMOK01\" edittype=\"text\" editinputtype=\"digit\" editautoselect=\"true\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:HANGMOK02\" edittype=\"text\" editinputtype=\"digit\" editautoselect=\"true\" textAlign=\"center\"/><Cell col=\"11\" text=\"bind:HANGMOK03\" edittype=\"text\" editinputtype=\"digit\" editautoselect=\"true\" textAlign=\"center\"/><Cell col=\"12\" text=\"bind:HANGMOK04\" edittype=\"text\" editinputtype=\"digit\" editautoselect=\"true\" textAlign=\"center\"/><Cell col=\"13\" text=\"bind:HANGMOK05\" edittype=\"text\" editinputtype=\"digit\" editautoselect=\"true\" textAlign=\"center\"/><Cell col=\"14\" text=\"bind:HANGMOK06\" edittype=\"text\" editinputtype=\"digit\" editautoselect=\"true\" textAlign=\"center\"/><Cell col=\"15\" text=\"bind:HANGMOK07\" edittype=\"text\" editinputtype=\"digit\" editautoselect=\"true\" textAlign=\"center\"/><Cell col=\"16\" text=\"bind:HANGMOK08\" edittype=\"text\" editinputtype=\"digit\" editautoselect=\"true\" textAlign=\"center\"/><Cell col=\"17\" text=\"bind:HANGMOK09\" edittype=\"text\" editinputtype=\"digit\" editautoselect=\"true\" textAlign=\"center\"/><Cell col=\"18\" text=\"bind:HANGMOK10\" edittype=\"text\" editinputtype=\"digit\" editautoselect=\"true\" textAlign=\"center\"/><Cell col=\"19\" text=\"bind:HANGMOK11\" edittype=\"text\" editinputtype=\"digit\" editautoselect=\"true\" textAlign=\"center\"/><Cell col=\"20\" text=\"bind:HANGMOK12\" edittype=\"text\" editinputtype=\"digit\" editautoselect=\"true\" textAlign=\"center\"/><Cell col=\"21\" text=\"bind:HANGMOK13\" edittype=\"text\" editinputtype=\"digit\" editautoselect=\"true\" textAlign=\"center\"/><Cell col=\"22\" text=\"bind:HANGMOK14\" edittype=\"text\" editinputtype=\"digit\" editautoselect=\"true\" textAlign=\"center\"/><Cell col=\"23\" text=\"expr:dataset.getRowType(currow) == &quot;1&quot; ? TOT : nexacro.toNumber(HANGMOK01, 0)+nexacro.toNumber(HANGMOK02, 0)+nexacro.toNumber(HANGMOK03, 0)+nexacro.toNumber(HANGMOK04, 0)+nexacro.toNumber(HANGMOK05, 0)+nexacro.toNumber(HANGMOK06, 0)+nexacro.toNumber(HANGMOK07, 0)+nexacro.toNumber(HANGMOK08, 0)+nexacro.toNumber(HANGMOK09, 0)+nexacro.toNumber(HANGMOK10, 0)+nexacro.toNumber(HANGMOK11, 0)+nexacro.toNumber(HANGMOK12, 0)+nexacro.toNumber(HANGMOK13, 0)+nexacro.toNumber(HANGMOK14, 0)\" displaytype=\"number\" textAlign=\"center\"/><Cell col=\"24\" text=\"bind:JEOKGYEOK_YN\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" textAlign=\"center\"/><Cell col=\"25\" text=\"bind:ILGWANSEONG_YN_BIGO\" textAlign=\"center\"/><Cell col=\"26\" text=\"bind:BUJEOKGYEOKHANGMOK_BIGO\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("교직적성및인성검사관리");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","divSearch.form.cboSearchGyeyeol","value","ds_input","GYEYEOL_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboSearchHakgwa","value","ds_input","HAKGWA_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.cboSearchJeongong","value","ds_input","JEONGONG_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.edtSearchName","value","ds_input","NUMNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.cboSearchNyeondo","value","ds_input","YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboSearchHoecha","value","ds_input","HOECHA");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("UP03_2040301_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UP03_2040301_M.xfdl(교직적성및인성검사관리)
        * 작 성         일 명: 정진호
        * 작 성         일 자: 2022/08/25
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
        /**********************************************************************
                03. 폼 로드 및 닫을때(폼이 포커스 갈때)
        ***********************************************************************/
        /**
         * 기능 : 폼 로드 완료후 초기값 Setting
         */
        this.form_onload = function(obj, e) {
            //폼에 공통으로 로드시 사용하는 함수.
            this.gfn_formOnload(obj.e);
            //사용자 화면  초기화 함수
            this.fn_formInit();
        };

        /**
         * 기능 : 폼언 로드(닫기전 셋팅)  Setting
         */
        this.form_onclose = function(obj, e) {

        };

        /**********************************************************************
                04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        this.fn_formInit = function() {
            var strDs	= "dsYn"; 	// 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd = "00051"; 	// 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb = "X"; 		// 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn = ""; 		// 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId   = "Init";
        	// gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
        	// 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.gfn_CmmnMultiComboLoad(strDs, strLgcd, strComb, strOptn, svcId);

        	// 콤보
        	this.fn_NyeondoCombo();				// 년도
        	this.fn_HoechaCombo();				// 회차
        	this.fn_GyeyeolCombo();				// 계열
        	this.fn_HakgwaCombo();				// 학과
        	this.fn_JeongongCombo();			// 전공
        	this.fn_JagyeokjongbyeolCombo();	// 자격종별
        };

        this.fn_PostNyeondoInit = function() {
        	// 회차 onitemchanged 호출
        	let info = new nexacro.ItemChangeEventInfo;
        	this.divSearch.form.cboSearchNyeondo.set_index(0);
        	this.divSearch_cboSearchNyeondo_onitemchanged(this.divSearch.form.cboSearchGyeyeol, info);
        };

        this.fn_PostHoechaInit = function() {
        	this.divSearch.form.cboSearchHoecha.set_index(0);
        };

        this.fn_PostGyeyeolInit = function() {
        	// 계열 onitemchanged 호출
        	let info = new nexacro.ItemChangeEventInfo;
        	this.divSearch_cboSearchGyeyeol_onitemchanged(this.divSearch.form.cboSearchGyeyeol, info);
        	this.divSearch.form.cboSearchGyeyeol.set_index(0);
        };

        this.fn_PostHakgwaInit = function() {
        	// 학과 onitemchanged 호출
        	let info = new nexacro.ItemChangeEventInfo;
        	this.divSearch_cboSearchHakgwa_onitemchanged(this.divSearch.form.cboSearchHakgwa, info);
        	this.divSearch.form.cboSearchHakgwa.set_index(0);
        };

        this.fn_PostJeongongInit = function() {
        	this.divSearch.form.cboSearchJeongong.set_index(0);
        };

        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId, nErrorCode, sErrorMsg) {
            this.gfn_clearSortAll(this.grdMaster);

            if(nErrorCode != 0) {
                this.gfn_alert(sErrorMsg, "에러정보", "", "error");
                return false;
            } else {
                /*sSvcId (Transaction Id)*/
                switch(sSvcId) {
                    case "Init":
        				this.fn_PostformInit();
                        break;
                    case "singleInit":
        				this.fn_PostSingleInt();
                        break;
                    case "Ret":
        				this.fn_PostRet();
                        break;
                    case "Save":
        				this.fn_PostSave();
                        break;
                    case "Del":
        				this.fn_PostDel();
                        break;
        			// 검색조건 년도
        			case "NyeondoCombo":
        				this.fn_PostNyeondoInit();
        			    break;
        			// 검색조건 회차
        			case "HoechaCombo":
        				this.fn_PostHoechaInit();
        			    break;
        			// 검색조건 계열
        			case "GyeyeolCombo":
        				this.fn_PostGyeyeolInit();
        			    break;
        			// 검색조건 학과
        			case "HakgwaCombo":
        				this.fn_PostHakgwaInit();
        			    break;
        			// 검색조건 전공
        			case "JeongongCombo":
        				this.fn_PostJeongongInit();
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
        this.fn_cmmBtnClick = function(sBtn) {
            switch(sBtn) {
                case "ret" : 	// 조회
        			this.fn_Ret();
                    break;
                case "del" : 	// 삭제
        			this.fn_Del();
                    break;
                case "save" : 	// 저장
        			this.fn_Save();
                    break;
                case "tmp1" :	// 엑셀업로드
        			this.fn_ExcelUpload();
                    break;
                case "tmp2" : 	// 팁
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
        this.fn_PreRet = function() {
            // 조회조건 셋팅
            return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_Ret = function() {
            if (!this.fn_PreRet()) {
                return false;
            }

            var strSvc      = "Ret";
            var strUrl      = "/prj/UP/UP03/Retrieve_2040301_MList.do";
        	var strInDs 	= this.divSearch.form.chk_searchAll.value == "1" ? "ds_input=ds_inputAll" : "ds_input=ds_input";
            var strOutDs    = "dsMaster=dsMaster";
            var strArg      = "";
            var GBV_MENUID	= objApp.gv_cutPrgId;
            if (!this.gfn_isNull(this.gfn_trim(GBV_MENUID))) {
            	strArg     += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        };

        /**
         * 기능 : 조회 후 실행
         */
        this.fn_PostRet = function() {
            this.fn_countJeokgyeok();
        };

        /**********************************************************************
                06. 추가 함수 선언
        ***********************************************************************/
        /**********************************************************************
                07. 삭제 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 삭제 버튼 실행
         */
        this.fn_PreDel = function() {
            //멀티삭제용도
            if (this.dsMaster.rowcount < 1 || this.dsMaster.findRow("CHK", 1) == -1) {
                this.gfn_alert("삭제할 데이터가 없습니다.", "삭제정보", "", "warning");
                return false;
            }

            var result = this.gfn_confirm("현재선택행을 삭제하시겠습니까?", "삭제정보", "", "question");
            if (result == 0) {
                return false;
            }

            //다중삭제 용도
            this.dsMaster.set_enableevent(false);
            for (var i = this.dsMaster.rowcount - 1; i > -1; i--) {
                if (this.dsMaster.getColumn(i,"CHK") == "1" || this.dsMaster.getRowType(i) == 2) {
                    this.dsMaster.deleteRow(i);
                }
            }
            this.dsMaster.set_enableevent(true);

            //개별삭제시
            //this.dsMaster.deleteRow(this.dsMaster.rowposition);

            return true;
        };

        /**
         * 기능 : Row 삭제 또는 Transaction 삭제 처리
         */
        this.fn_Del = function() {
            if (!this.fn_PreDel()) {
                return false;
            }

            var strSvc      = "Del";
            var strUrl      = "/prj/UP/UP03/Delete_2040301_MList.do";
            var strInDs     = "dsMaster=dsMaster:u";
            var strOutDs    = "";
            var strArg      = "";
            var strCallBack	= "fn_callBack";	//공백일시 기본 fn_callBack
            var strASync    = true; 			//샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        };

        this.fn_PostDel = function() {
            this.fn_countJeokgyeok();
        };

        /**********************************************************************
                08. 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave = function() {
            if (this.dsMaster.rowcount > 0) {
                for(var i = 0; i < this.dsMaster.rowcount; i++) {
                    if(this.dsMaster.getColumn(i, "CHK") == "0") {
                        continue;
                    }


                    this.dsMaster.setColumn(i, "CHK", "0");
                }
            }

            if (!this.gfn_isUpdate(this.dsMaster)) {
                this.gfn_alert("변경된 이력이 없습니다.", "저장정보", "", "question");
                return false;
            }

             var result = this.gfn_confirm("저장 하시겠습니까?", "저장", "", "question");
             if (result == 0) {
                 return false;
             }

             return true;
        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_Save = function() {
            if (!this.fn_PreSave()) {
                return false;
            }

            var strSvc      = "Save";
            var strUrl      = "/prj/UP/UP03/Save_2040301_MList.do";
            var strInDs     = "ds_input=ds_input:a ";
                strInDs    += "dsMaster=dsMaster:u";
            var strOutDs    = "dsMaster=dsMaster";
            var strArg      = "";
            var GBV_MENUID	= objApp.gv_cutPrgId;
            if (!this.gfn_isNull(this.gfn_trim(GBV_MENUID))) {
            	strArg     += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        };

        /**
         * 기능 : 저장시 후처리
         */
        this.fn_PostSave = function() {
            this.fn_countJeokgyeok();
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
        /**********************************************************************
                13. Get, Set Method
        ***********************************************************************/
        /**********************************************************************
                14. 기타 Control Event
        ***********************************************************************/
        /**
         * 그리드멀티 체크
         */
        this.grdMaster_onheadclick = function(obj, e) {
            if (e.cell == this.grdMaster.getBindCellIndex("body", "CHK")) {
                this.gfn_checkAll(obj, e);
            }
        };

        /**
         * 그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj, e) {
            if (e.cell != this.grdMaster.getBindCellIndex("body", "CHK") && e.cell != 1) {
                this.gfn_gridSort(obj, e);
            }
        };

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function() {
            //return this.gfn_isUpdate(this.dsMaster);
        };

        /**
         * 기능 : 엑셀업로드 실행
         */
        this.fn_ExcelUpload = function() {
        	this.alert("엑셀업로드 준비중입니다.");
        };

        /**
         * 기능 : 팁 실행
         */
        this.fn_Tip = function() {
        	this.alert("도움말 준비중입니다.");
        };

        this.ds_input_onvaluechanged = function(obj, e) {
        	if (this.divSearch.form.chk_searchAll.value == "1") {
        		this.ds_inputAll.copyData(this.ds_input);
        		this.ds_inputAll.setColumn(0, "YYYY", "");
        		this.ds_inputAll.setColumn(0, "HOECHA", "");
        	}
        };

        this.divSearch_chk_searchAll_onchanged = function(obj, e) {
        	var enableBool = (e.postvalue == "1" ? false : true);
        	this.divSearch.form.cboSearchNyeondo.set_enable(enableBool);
        	this.divSearch.form.cboSearchHoecha.set_enable(enableBool);
        };

        /**
         * 기능 : 년도콤보 조회
         */
        this.fn_NyeondoCombo = function() {
        	this.ds_inputCombo.setColumn(0, "SELECT_TYPE", 	"");
        	this.ds_inputCombo.setColumn(0, "GYOJIK_YN", 	"");

            var strSvc      = "NyeondoCombo";
            var strUrl      = "/prj/UP/UP_COMMON/Retrieve_NyeondoCombo.do";
            var strInDs     = "ds_input=ds_inputCombo";
            var strOutDs    = "dsNyeondo=dsMaster";
            var strArg      = "";
            var GBV_MENUID	= objApp.gv_cutPrgId;
            if (!this.gfn_isNull(this.gfn_trim(GBV_MENUID))) {
            	strArg     += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        }

        /**
         * 기능 : 회차콤보 조회
         */
        this.fn_HoechaCombo = function() {
        	this.ds_inputCombo.setColumn(0, "SELECT_TYPE", 	"A");
        	this.ds_inputCombo.setColumn(0, "GYOJIK_YN", 	"");

            var strSvc      = "HoechaCombo";
            var strUrl      = "/prj/UP/UP_COMMON/Retrieve_HoechaCombo.do";
            var strInDs     = "ds_input=ds_inputCombo";
            var strOutDs    = "dsHoecha=dsMaster";
            var strArg      = "";
            var GBV_MENUID	= objApp.gv_cutPrgId;
            if (!this.gfn_isNull(this.gfn_trim(GBV_MENUID))) {
            	strArg     += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        }

        /**
          * 회차 필터
         **/
        this.divSearch_cboSearchNyeondo_onitemchanged = function(obj, e) {
        	var strUpDeptCd = this.gfn_isNull(e.postvalue) ? "" : e.postvalue;
        	this.dsHoecha.filter("UP_CD == '" + strUpDeptCd + "' || HOECHA_NM == '전체'");
        	this.divSearch.form.cboSearchHoecha.set_index(0);
        };

        /**
         * 기능 : 교직계열콤보 조회
         */
        this.fn_GyeyeolCombo = function() {
        	this.ds_inputCombo.setColumn(0, "SELECT_TYPE", 	"A");
        	this.ds_inputCombo.setColumn(0, "GYOJIK_YN", 	"1");

            var strSvc      = "GyeyeolCombo";
            var strUrl      = "/prj/UP/UP_COMMON/Retrieve_gyeyeolCombo.do";
            var strInDs     = "ds_input=ds_inputCombo";
            var strOutDs    = "dsGyeyeol=dsMaster";
            var strArg      = "";
            var GBV_MENUID	= objApp.gv_cutPrgId;
            if (!this.gfn_isNull(this.gfn_trim(GBV_MENUID))) {
            	strArg     += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        }

        /**
         * 기능 : 교직학과콤보 조회
         */
        this.fn_HakgwaCombo = function() {
        	this.ds_inputCombo.setColumn(0, "SELECT_TYPE", 	"A");
        	this.ds_inputCombo.setColumn(0, "GYOJIK_YN", 	"1");

            var strSvc      = "HakgwaCombo";
            var strUrl      = "/prj/UP/UP_COMMON/Retrieve_hakgwaCombo.do";
            var strInDs     = "ds_input=ds_inputCombo";
            var strOutDs    = "dsHakgwa=dsMaster";
            var strArg      = "";
            var GBV_MENUID	= objApp.gv_cutPrgId;
            if (!this.gfn_isNull(this.gfn_trim(GBV_MENUID))) {
            	strArg     += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        }

        /**
         * 기능 : 교직전공콤보 조회
         */
        this.fn_JeongongCombo = function() {
        	this.ds_inputCombo.setColumn(0, "SELECT_TYPE", 	"A");
        	this.ds_inputCombo.setColumn(0, "GYOJIK_YN", 	"1");

            var strSvc      = "JeongongCombo";
            var strUrl      = "/prj/UP/UP_COMMON/Retrieve_jeongongCombo.do";
            var strInDs     = "ds_input=ds_inputCombo";
            var strOutDs    = "dsJeongong=dsMaster";
            var strArg      = "";
            var GBV_MENUID	= objApp.gv_cutPrgId;
            if (!this.gfn_isNull(this.gfn_trim(GBV_MENUID))) {
            	strArg     += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        }

        /**
          * 학과 필터
         **/
        this.divSearch_cboSearchGyeyeol_onitemchanged = function(obj, e) {
        	var strUpDeptCd = this.gfn_isNull(e.postvalue) ? "" : e.postvalue;
        	this.dsHakgwa.filter("UP_DEPT_CD == '" + strUpDeptCd + "' || DEPT_NM == '전체'");
        	this.divSearch.form.cboSearchHakgwa.set_index(0);
        	this.divSearch_cboSearchHakgwa_onitemchanged(this.divSearch.form.cboSearchHakgwa, e);
        };

        /**
          * 전공 필터
         **/
        this.divSearch_cboSearchHakgwa_onitemchanged = function(obj, e) {
        	var strUpDeptCd = this.gfn_isNull(e.postvalue) ? "" : e.postvalue;
        	this.dsJeongong.filter("UP_DEPT_CD == '" + strUpDeptCd + "' || DEPT_NM == '전체'");
        	this.divSearch.form.cboSearchJeongong.set_index(0);
        };

        /**
         * 기능 : 자격증별콤보 조회
         */
        this.fn_JagyeokjongbyeolCombo = function(objStr) {
        	this.ds_inputCombo.setColumn(0, "SELECT_TYPE", 	"");
        	this.ds_inputCombo.setColumn(0, "GYOJIK_YN", 	"");

            var strSvc      = "Jagyeokjongbyeol";
            var strUrl      = "/prj/UP/UP_COMMON/Retrieve_jagyeokjongbyeolList.do";
            var strInDs     = "ds_input=ds_inputCombo";
            var strOutDs    = "dsJagyeokjongbyeol=dsMaster";
            var strArg      = "";
            var GBV_MENUID	= objApp.gv_cutPrgId;
            if (!this.gfn_isNull(this.gfn_trim(GBV_MENUID))) {
            	strArg     += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        }

        /**
         * 기능 : 조회 건수
         */
        this.fn_countJeokgyeok = function() {
        	var totCnt 	= this.dsMaster.rowcount;
        	var yCnt 	= this.dsMaster.getCaseCount("JEOKGYEOK_YN=='1'");
        	var nCnt 	= this.dsMaster.getCaseCount("JEOKGYEOK_YN=='0'");
        	var txt 	= "[총 <fc v='red'><b v='true'>" 		+ totCnt	+ " </b></fc>건 "
        				+ "(적격 <fc v='red'><b v='true'>" 		+ yCnt 		+ " </b></fc>건 "
        				+ "/ 부적격 <fc v='red'><b v='true'>"	+ nCnt 		+ " </b></fc>건)]"
        	this.staRowCnt.set_text(txt);
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
            this.divSearch.form.chk_searchAll.addEventHandler("onchanged",this.divSearch_chk_searchAll_onchanged,this);
            this.divSearch.form.stc_01_00.addEventHandler("onclick",this.divSearch_stc_01_00_onclick,this);
            this.divSearch.form.cboSearchGyeyeol.addEventHandler("onitemchanged",this.divSearch_cboSearchGyeyeol_onitemchanged,this);
            this.divSearch.form.cboSearchGyeyeol.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onitemchanged",this.divSearch_cboSearchHakgwa_onitemchanged,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.divSearch.form.cboSearchJeongong.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.divSearch.form.edtSearchName.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.divSearch.form.cboSearchNyeondo.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.divSearch.form.cboSearchNyeondo.addEventHandler("onitemchanged",this.divSearch_cboSearchNyeondo_onitemchanged,this);
            this.divSearch.form.cboSearchHoecha.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.grdMaster.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster.addEventHandler("oncellclick",this.grdMaster_oncellclick,this);
            this.grdMaster.addEventHandler("onselectchanged",this.grdMaster_onselectchanged,this);
            this.grdMaster.addEventHandler("onexpandup",this.grdMaster_onexpandup,this);
            this.grdMaster.addEventHandler("onenterdown",this.grdMaster_onenterdown,this);
            this.ds_input.addEventHandler("onvaluechanged",this.ds_input_onvaluechanged,this);
            this.ds_inputCombo.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
            this.ds_inputAll.addEventHandler("onvaluechanged",this.ds_input_onvaluechanged,this);
        };
        this.loadIncludeScript("UP03_2040301_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
