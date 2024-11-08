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
            this.set_titletext("전과일괄처리");
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
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"DAEHAK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DAEHAK_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONGONG_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"50\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"BUNBAN\" type=\"STRING\" size=\"5\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"JUYA_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"HAKJEOK_STCD\" type=\"STRING\" size=\"3\"/><Column id=\"HAKJEOK_STNM\" type=\"STRING\" size=\"65532\"/><Column id=\"BYEONDONG_SANGSE_CD\" type=\"STRING\" size=\"19\"/><Column id=\"BYEONDONG_SANGSE_NM\" type=\"STRING\" size=\"19\"/><Column id=\"JEONGWA_DAEHAK_CD\" type=\"STRING\" size=\"17\"/><Column id=\"JEONGWA_HAKGWA_CD\" type=\"STRING\" size=\"17\"/><Column id=\"JEONGWA_JEONGOND_CD\" type=\"STRING\" size=\"19\"/><Column id=\"JEONGWA_JUYA_GBCD\" type=\"STRING\" size=\"17\"/><Column id=\"JEONGWA_DAEHAK_NM\" type=\"STRING\" size=\"17\"/><Column id=\"JEONGWA_HAKGWA_NM\" type=\"STRING\" size=\"17\"/><Column id=\"JEONGWA_JEONGOND_NM\" type=\"STRING\" size=\"19\"/><Column id=\"JEONGWA_JUYA_GBNM\" type=\"STRING\" size=\"17\"/><Column id=\"JEONGWA_BUNBAN\" type=\"STRING\" size=\"14\"/><Column id=\"BYEONDONG_JEOKYONG_YYYY\" type=\"STRING\" size=\"23\"/><Column id=\"BYEONDONG_JEOKYONG_HAKGI\" type=\"STRING\" size=\"24\"/><Column id=\"BYEONDONG_JEOKYONG_HAKNYEON\" type=\"STRING\" size=\"27\"/><Column id=\"BYEONDONG_DT\" type=\"STRING\" size=\"8\"/><Column id=\"BEF_SOSOK\" type=\"STRING\" size=\"65532\"/><Column id=\"AFT_SOSOK\" type=\"STRING\" size=\"65532\"/><Column id=\"BYEONDONG_SANGSE_NAEYONG\" type=\"STRING\" size=\"256\"/><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DAEHAK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKJEOK_STCD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"256\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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


            obj = new Dataset("dsJuya", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHaknyeon", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsByeondong", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJeongwaGyeyeol", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJeongwaHakgwa", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJeongwaJeongong", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchJuya", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBunban", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgi", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REF_3\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBaseYyyyHakgi", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_jeongwa", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"JEONGWA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGWA_DAEHAK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGWA_HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGWA_JEONGONG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGWA_JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGWA_BUNBAN_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGWA_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGWA_HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGWA_NAEYONG\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGridJuya", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
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

            obj = new Static("stc_01_01","-23","36","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("학적상태");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","67",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","90","0","10","67",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","411","0","10","67",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01","621","-1","56","66",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00","941","-1","56","66",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01","1030","0","10","63",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_01","300","0","56","70",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01","9","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("계열");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchGyeyeol","100","9","200","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_innerdataset("dsGyeyeol");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00","329","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("학과/학부");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgwa","421","9","200","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsHakgwa");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01","650","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("전공");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJeongong","741","9","200","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsJeongong");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00","731","0","10","63",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("rdoHakjeok","100","36","204","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_enable("true");
            obj.set_readonly("false");
            var divSearch_form_rdoHakjeok_innerdataset = new nexacro.NormalDataset("divSearch_form_rdoHakjeok_innerdataset", obj);
            divSearch_form_rdoHakjeok_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">재학</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">휴학</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_rdoHakjeok_innerdataset);
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_02","329","36","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_text("학년");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHaknyeon","421","36","200","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsHaknyeon");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01_00","650","36","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_text("학번/성명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchHakbeon","741","36","200","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00","949","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
            obj.set_text("주야");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJuya","1040","9","200","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsSearchJuya");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_09_00","0","210",null,"22","1455",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("학생 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","97","209",null,"24","1420",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","0","235",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"40\"/><Column size=\"110\"/><Column size=\"120\"/><Column size=\"130\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"70\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"110\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"250\"/><Column size=\"250\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" rowspan=\"2\" text=\"No\"/><Cell col=\"2\" rowspan=\"2\" text=\"계열\"/><Cell col=\"3\" rowspan=\"2\" text=\"학과/학부\"/><Cell col=\"4\" rowspan=\"2\" text=\"전공\"/><Cell col=\"5\" rowspan=\"2\" text=\"학번\"/><Cell col=\"6\" rowspan=\"2\" text=\"성명\"/><Cell col=\"7\" rowspan=\"2\" text=\"학년\"/><Cell col=\"8\" rowspan=\"2\" text=\"주야&#13;&#10;구분\"/><Cell col=\"9\" rowspan=\"2\" text=\"분반\"/><Cell col=\"10\" rowspan=\"2\" text=\"학적&#13;&#10;상태\"/><Cell col=\"11\" colspan=\"6\" text=\"전과 후\"/><Cell col=\"17\" colspan=\"3\" text=\"최근 전과정보\"/><Cell row=\"1\" col=\"11\" text=\"전과구분\"/><Cell row=\"1\" col=\"12\" text=\"계열\"/><Cell row=\"1\" col=\"13\" text=\"학과/학부\"/><Cell row=\"1\" col=\"14\" text=\"전공\"/><Cell row=\"1\" col=\"15\" text=\"주야\"/><Cell row=\"1\" col=\"16\" text=\"분반\"/><Cell row=\"1\" col=\"17\" text=\"전과 전 소속\"/><Cell row=\"1\" col=\"18\" text=\"전과 후 소속\"/><Cell row=\"1\" col=\"19\" text=\"처리일자\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"2\" text=\"bind:DAEHAK_NM\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:HAKGWA_NM\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:JEONGONG_NM\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:HAKBEON\"/><Cell col=\"6\" text=\"bind:HAKSAENG_NM\"/><Cell col=\"7\" text=\"bind:HAKNYEON\"/><Cell col=\"8\" text=\"bind:JUYA_GBCD\" displaytype=\"combotext\" combodataset=\"dsGridJuya\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"9\" text=\"bind:BUNBAN\"/><Cell col=\"10\" text=\"bind:HAKJEOK_STNM\"/><Cell col=\"11\" text=\"bind:BYEONDONG_SANGSE_NM\"/><Cell col=\"12\" text=\"bind:JEONGWA_DAEHAK_NM\" textAlign=\"left\"/><Cell col=\"13\" text=\"bind:JEONGWA_HAKGWA_NM\" textAlign=\"left\"/><Cell col=\"14\" text=\"bind:JEONGWA_JEONGOND_NM\" textAlign=\"left\"/><Cell col=\"15\" text=\"bind:JEONGWA_JUYA_GBCD\" displaytype=\"combotext\" combodataset=\"dsGridJuya\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"16\" text=\"bind:JEONGWA_BUNBAN\"/><Cell col=\"17\" text=\"bind:BEF_SOSOK\" textAlign=\"left\"/><Cell col=\"18\" text=\"bind:AFT_SOSOK\" textAlign=\"left\"/><Cell col=\"19\" text=\"bind:BYEONDONG_DT\" displaytype=\"date\" calendardisplaynulltype=\"none\" calendardateformat=\"yyyy-MM-dd\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","550","200","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","227",null,"8","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("divJeongwa","0","104",null,"96","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_02","26","31","1600","5",null,null,null,null,null,null,this.divJeongwa.form);
            obj.set_taborder("10");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 6pt/normal \"Arial\"");
            this.divJeongwa.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","16","0","1620","9",null,null,null,null,null,null,this.divJeongwa.form);
            obj.set_taborder("11");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divJeongwa.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","20","85","1610","9",null,null,null,null,null,null,this.divJeongwa.form);
            obj.set_taborder("12");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divJeongwa.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01","728","36","100","22",null,null,null,null,null,null,this.divJeongwa.form);
            obj.set_taborder("13");
            obj.set_text("주야");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divJeongwa.addChild(obj.name, obj);

            obj = new Static("stc_01_00","-3","9","80","22",null,null,null,null,null,null,this.divJeongwa.form);
            obj.set_taborder("14");
            obj.set_text("전과구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divJeongwa.addChild(obj.name, obj);

            obj = new Static("stc_01_01","-33","36","110","22",null,null,null,null,null,null,this.divJeongwa.form);
            obj.set_taborder("15");
            obj.set_text("전과계열");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divJeongwa.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","97",null,null,null,null,null,null,this.divJeongwa.form);
            obj.set_taborder("16");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divJeongwa.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","80","0","10","97",null,null,null,null,null,null,this.divJeongwa.form);
            obj.set_taborder("17");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divJeongwa.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","349","0","10","67",null,null,null,null,null,null,this.divJeongwa.form);
            obj.set_taborder("18");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divJeongwa.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01","509","-1","56","66",null,null,null,null,null,null,this.divJeongwa.form);
            obj.set_taborder("19");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divJeongwa.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_01","240","3","56","60",null,null,null,null,null,null,this.divJeongwa.form);
            obj.set_taborder("20");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divJeongwa.addChild(obj.name, obj);

            obj = new Combo("cboJeongwaGyeyeol","90","36","150","22",null,null,null,null,null,null,this.divJeongwa.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsJeongwaGyeyeol");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_cssclass("point");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divJeongwa.addChild(obj.name, obj);

            obj = new Combo("cboJeongwaHakgwa","359","36","150","22",null,null,null,null,null,null,this.divJeongwa.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsJeongwaHakgwa");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_cssclass("point");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.divJeongwa.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00","588","0","10","63",null,null,null,null,null,null,this.divJeongwa.form);
            obj.set_taborder("21");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divJeongwa.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_02","269","36","80","22",null,null,null,null,null,null,this.divJeongwa.form);
            obj.set_taborder("22");
            obj.set_text("학과/학부");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divJeongwa.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_02_00","26","58","1600","5",null,null,null,null,null,null,this.divJeongwa.form);
            obj.set_taborder("23");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 6pt/normal \"Arial\"");
            this.divJeongwa.addChild(obj.name, obj);

            obj = new Static("stc_01_01_00","-33","63","110","22",null,null,null,null,null,null,this.divJeongwa.form);
            obj.set_taborder("24");
            obj.set_text("전과내용");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divJeongwa.addChild(obj.name, obj);

            obj = new Edit("edtJeongwaNaeyong","90","63","658","22",null,null,null,null,null,null,this.divJeongwa.form);
            obj.set_taborder("9");
            this.divJeongwa.addChild(obj.name, obj);

            obj = new Combo("cboJeongwaGb","90","9","150","22",null,null,null,null,null,null,this.divJeongwa.form);
            obj.set_taborder("0");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsByeondong");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divJeongwa.addChild(obj.name, obj);

            obj = new Static("stc_01_02","509","36","80","22",null,null,null,null,null,null,this.divJeongwa.form);
            obj.set_taborder("25");
            obj.set_text("전공");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divJeongwa.addChild(obj.name, obj);

            obj = new Combo("cboJeongwaJeongong","598","36","150","22",null,null,null,null,null,null,this.divJeongwa.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsJeongwaJeongong");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.divJeongwa.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00","748","-1","56","63",null,null,null,null,null,null,this.divJeongwa.form);
            obj.set_taborder("26");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divJeongwa.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00","830","0","10","63",null,null,null,null,null,null,this.divJeongwa.form);
            obj.set_taborder("27");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divJeongwa.addChild(obj.name, obj);

            obj = new Combo("cboJeongwaJuya","840","36","120","22",null,null,null,null,null,null,this.divJeongwa.form);
            obj.set_taborder("4");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsJuya");
            obj.set_cssclass("point");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divJeongwa.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00_00","960","-1","56","66",null,null,null,null,null,null,this.divJeongwa.form);
            obj.set_taborder("28");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divJeongwa.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01_00","940","36","100","22",null,null,null,null,null,null,this.divJeongwa.form);
            obj.set_taborder("29");
            obj.set_text("분반");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divJeongwa.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_00","1039","0","10","63",null,null,null,null,null,null,this.divJeongwa.form);
            obj.set_taborder("30");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divJeongwa.addChild(obj.name, obj);

            obj = new Combo("cboJeongwaBunban","1049","36","120","22",null,null,null,null,null,null,this.divJeongwa.form);
            obj.set_taborder("5");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsBunban");
            obj.set_cssclass("point");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divJeongwa.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00_00_00","1169","-1","56","66",null,null,null,null,null,null,this.divJeongwa.form);
            obj.set_taborder("31");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divJeongwa.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01_00_00","1196","36","100","22",null,null,null,null,null,null,this.divJeongwa.form);
            obj.set_taborder("32");
            obj.set_text("적용년도학기");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divJeongwa.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_00_00","1295","0","10","63",null,null,null,null,null,null,this.divJeongwa.form);
            obj.set_taborder("33");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divJeongwa.addChild(obj.name, obj);

            obj = new Combo("cboJeongwaHakgi","1425","36","120","22",null,null,null,null,null,null,this.divJeongwa.form);
            obj.set_taborder("7");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsHakgi");
            obj.set_cssclass("point");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divJeongwa.addChild(obj.name, obj);

            obj = new Spin("spnJeongwaYYYY","1305","36","120","22",null,null,null,null,null,null,this.divJeongwa.form);
            obj.set_taborder("6");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.divJeongwa.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00",null,"0","27","97","0",null,null,null,null,null,this.divJeongwa.form);
            obj.set_taborder("34");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divJeongwa.addChild(obj.name, obj);

            obj = new Button("btnJeongwa",null,"36","75","22","17",null,null,null,null,null,this.divJeongwa.form);
            obj.set_taborder("8");
            obj.set_text("일괄적용");
            obj.set_cssclass("btn_WF_Crud");
            this.divJeongwa.addChild(obj.name, obj);

            obj = new Static("stc_05","0","79","220","22",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("전과조건");
            obj.set_cssclass("sta_WF_Title01");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01","1","96","1620","8",null,null,null,null,null,null,this);
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

            obj = new Static("Static01_01","600","69","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("9");
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
            obj.set_description("전과일괄처리");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.cboSearchGyeyeol","value","ds_input","DAEHAK_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboSearchHakgwa","value","ds_input","HAKGWA_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboSearchJeongong","value","ds_input","JEONGONG_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.rdoHakjeok","value","ds_input","HAKJEOK_STCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.cboSearchHaknyeon","value","ds_input","HAKNYEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.edtSearchHakbeon","value","ds_input","HAKBEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.cboSearchJuya","value","ds_input","JUYA_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divJeongwa.form.cboJeongwaJuya","value","ds_jeongwa","JEONGWA_JUYA_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divJeongwa.form.cboJeongwaGb","value","ds_jeongwa","JEONGWA_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divJeongwa.form.cboJeongwaGyeyeol","value","ds_jeongwa","JEONGWA_DAEHAK_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divJeongwa.form.cboJeongwaHakgwa","value","ds_jeongwa","JEONGWA_HAKGWA_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divJeongwa.form.cboJeongwaJeongong","value","ds_jeongwa","JEONGWA_JEONGONG_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divJeongwa.form.cboJeongwaBunban","value","ds_jeongwa","JEONGWA_BUNBAN_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divJeongwa.form.spnJeongwaYYYY","value","ds_jeongwa","JEONGWA_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divJeongwa.form.cboJeongwaHakgi","value","ds_jeongwa","JEONGWA_HAKGI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divJeongwa.form.edtJeongwaNaeyong","value","ds_jeongwa","JEONGWA_NAEYONG");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("US02_2010207_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): US02_2010207_M.xfdl(학적기본관리 관리(조회))
        * 작 성         일 명: jiback
        * 작 성         일 자: 2021/09/16
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
            var strDs    = "dsJuya|dsSearchJuya|dsGridJuya|dsHaknyeon|dsByeondong|dsBunban|dsHakgi";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00003|00003|00003|00060|00023|00050|00022";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "S|T|X|T|X|S|S";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
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

        	// gfn_GyeyeolComboLoad(데이터셋, 콤보 옵션)
        	// 계열콤보
        	strDs       = "dsJeongwaGyeyeol";
        	strComb     = "T";
        	svcId       = "jeongwaGyeyeolInit";
        	strUseYn    = "1"; // 사용 여부
        	strJojikGbcd = "20";  // 조직구분 10.행정조직   20.학사조직   30.입시조직
        	strDaehakCd = "";  //
        	this.gfn_GyeyeolComboLoad(this.divJeongwa.form.cboJeongwaGyeyeol, strComb, svcId, strUseYn, strJojikGbcd, strDaehakCd , objApp.gv_cutPrgId);
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
        	this.divSearch.form.rdoHakjeok.set_index(0);
        	this.fn_SetJeongwa();
        };

        this.fn_PostBaseYyyyHakgiInit = function()
        {
        	if (this.dsBaseYyyyHakgi.rowcount > 0)
        	{
        		this.divJeongwa.form.spnJeongwaYYYY.set_value(this.dsBaseYyyyHakgi.getColumn(0, "YYYY"));
        		this.divJeongwa.form.cboJeongwaHakgi.set_value(this.dsBaseYyyyHakgi.getColumn(0, "HAKGI"));
        	}
        };



        // 검색
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
        	this.divSearch_cboSearchHakgwa_onitemchanged(this.divSearch.form.cboSearchHakgwa, info);
        };
        this.fn_PostJeongongInit = function()
        {
        	this.divSearch.form.cboSearchJeongong.set_index(0);
        };


        // 전과
        this.fn_PostJeongwaGyeyeolInit = function()
        {
        	this.divJeongwa.form.cboJeongwaGyeyeol.set_index(0);

        	// 계열 onitemchanged 호출
        	let info = new nexacro.ItemChangeEventInfo;
        	this.divJeongwa_cboJeongwaGyeyeol_onitemchanged(this.divJeongwa.form.cboJeongwaGyeyeol, info);
        };
        this.fn_PostJeongwaHakgwaInit = function()
        {
        	this.divJeongwa.form.cboJeongwaHakgwa.set_index(0);

        	// 학과 onitemchanged 호출
        	let info = new nexacro.ItemChangeEventInfo;
        	this.divJeongwa_cboJeongwaHakgwa_onitemchanged(this.divJeongwa.form.cboJeongwaHakgwa, info);
        };
        this.fn_PostJeongwaJeongongInit = function()
        {
        	this.divJeongwa.form.cboJeongwaJeongong.set_index(0);
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
        			case "jeongwaGyeyeolInit":
        			        this.fn_PostJeongwaGyeyeolInit();
        			    break;
        			case "jeongwaHakgwaInit":
        			        this.fn_PostJeongwaHakgwaInit();
        			    break;
        			case "jeongwaJeongongInit":
        			        this.fn_PostJeongwaJeongongInit();
        			    break;
                    case "Ret":
                            this.fn_PostRet();
                        break;
                    case "Save":
                            this.fn_PostSave();
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
                case "tmp1" :        // 전과처리
                         this.fn_Save();
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
         * 기능 : 마스터 조회 실행
         */
        this.fn_Ret = function()
        {
            var strSvc      = "Ret";
            var strUrl      = "/prj/US/US02/Retrieve_2010207_M.do";
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
                06. 전과처리 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave = function()
        {
            //멀티삭제용도
            if(this.dsMaster.rowcount < 1 || this.dsMaster.findRow("CHK",1) == -1)
            {
                this.gfn_alert("전과처리할 데이터가 없습니다.","삭제정보","","warning");
                return false;
            }

        	var nCnt = 0;
        	for(var i=0; i<this.dsMaster.rowcount; i++)
        	{
        		if(this.dsMaster.getColumn(i, "CHK") == "1")
        		{
        			if(this.gfn_isNull(this.dsMaster.getColumn(i, "JEONGWA_HAKGWA_CD")))
        			{
        				nCnt++;
        			}
        			this.dsMaster.setColumn(i, "BYEONDONG_SANGSE_NAEYONG", this.ds_jeongwa.getColumn(0, "JEONGWA_NAEYONG"));
        			this.dsMaster.setColumn(i, "YYYY", this.dsBaseYyyyHakgi.getColumn(0, "YYYY"));
        			this.dsMaster.setColumn(i, "HAKGI", this.dsBaseYyyyHakgi.getColumn(0, "HAKGI"));
        		}
        	}

        	if(nCnt > 0)
        	{
        		this.alert("선택된 학생 중 [전과 후 정보]가 입력하지 않은 학생이 있습니다.");
        		return false;
        	}

            var result = this.gfn_confirm( "선택된 학생들을 전과처리하시겠습니까?", "삭제정보","","question" );
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
            var strUrl      = "/prj/US/US02/Save_2010207_M.do";
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
                07. 각종함수
        ***********************************************************************/
        this.fn_SetJeongwa = function()
        {
        	if(this.divSearch.form.rdoHakjeok.value == "10")
        	{
        		this.divJeongwa.form.cboJeongwaGb.set_value("0501");
        	}
        	else
        	{
        		this.divJeongwa.form.cboJeongwaGb.set_value("0502");
        	}
        };

        /**********************************************************************
                08. 팁
        ***********************************************************************/
        this.fn_Tip = function()
        {
        	this.alert("도움말 준비중입니다.");
        };

        /**********************************************************************
                09. 기타 Control Event
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

        // 전과 학과 필터 적용
        this.divJeongwa_cboJeongwaGyeyeol_onitemchanged = function(obj,e)
        {
        	// gfn_HakgwaComboLoad(데이터셋, 콤보 옵션)
        	// 학과콤보
        	strDs       = "dsJeongwaHakgwa";
        	strComb     = "T";
        	svcId       = "jeongwaHakgwaInit";
        	strUseYn    = "1"; // 사용 여부
        	strJojikGbcd = "20";  // 조직구분 10.행정조직   20.학사조직   30.입시조직

        	if(this.gfn_isNull(e.postvalue))
        		strUpDeptCd = "";
        	else
        		strUpDeptCd = e.postvalue;

        	this.gfn_HakgwaComboLoad(this.divJeongwa.form.cboJeongwaHakgwa, strComb, svcId, strUseYn, strJojikGbcd, strUpDeptCd, objApp.gv_cutPrgId);
        };

        // 전과 전공 필터 적용
        this.divJeongwa_cboJeongwaHakgwa_onitemchanged = function(obj,e)
        {
        	// gfn_JeongongComboLoad(데이터셋, 콤보 옵션)
        	// 전공콤보
        	strDs       = "dsJeongwaJeongong";
        	strComb     = "T";
        	svcId       = "jeongwaJeongongInit";
        	strUseYn    = "1"; // 사용 여부
        	strJojikGbcd = "20";  // 조직구분 10.행정조직   20.학사조직   30.입시조직

        	if(this.gfn_isNull(e.postvalue))
        		strUpDeptCd = "";
        	else
        		strUpDeptCd = e.postvalue;

        	this.gfn_JeongongComboLoad(this.divJeongwa.form.cboJeongwaJeongong, strComb, svcId, strUseYn, strJojikGbcd, strUpDeptCd, objApp.gv_cutPrgId);
        };

        // 라디오버튼 변경시 전과구분 변경
        this.divSearch_rdoHakjeok_onitemchanged = function(obj,e)
        {
        	this.fn_SetJeongwa();
        };

        // 일괄적용 버튼 클릭시
        this.divJeongwa_btnJeongwa_onclick = function(obj,e)
        {
            if(this.dsMaster.rowcount < 1 || this.dsMaster.findRow("CHK",1) == -1)
            {
                this.gfn_alert("일괄적용할 데이터가 없습니다.","삭제정보","","warning");
                return false;
            }

        	if(this.gfn_isNull(this.ds_jeongwa.getColumn(0, "JEONGWA_DAEHAK_CD"))
        	|| this.gfn_isNull(this.ds_jeongwa.getColumn(0, "JEONGWA_HAKGWA_CD"))
        	|| this.gfn_isNull(this.ds_jeongwa.getColumn(0, "JEONGWA_JUYA_GBCD"))
        	|| this.gfn_isNull(this.ds_jeongwa.getColumn(0, "JEONGWA_BUNBAN_GBCD"))
        	|| this.gfn_isNull(this.ds_jeongwa.getColumn(0, "JEONGWA_HAKGI")))
        	{
        		this.alert("[계열, 학과/학부, 주야, 분반, 적용학기]는 필수선택입니다.");
        		return false;
        	}

        	for(var i=0; i<this.dsMaster.rowcount; i++)
        	{
        		if(this.dsMaster.getColumn(i, "CHK") == "1")
        		{
        			this.dsMaster.setColumn(i, "BYEONDONG_SANGSE_CD",      this.ds_jeongwa.getColumn(0, "JEONGWA_GBCD"));
        			this.dsMaster.setColumn(i, "JEONGWA_DAEHAK_CD",        this.ds_jeongwa.getColumn(0, "JEONGWA_DAEHAK_CD"));
        			this.dsMaster.setColumn(i, "JEONGWA_HAKGWA_CD",        this.ds_jeongwa.getColumn(0, "JEONGWA_HAKGWA_CD"));
        			this.dsMaster.setColumn(i, "JEONGWA_JEONGONG_CD",      this.ds_jeongwa.getColumn(0, "JEONGWA_JEONGONG_CD"));
        			this.dsMaster.setColumn(i, "JEONGWA_JUYA_GBCD",        this.ds_jeongwa.getColumn(0, "JEONGWA_JUYA_GBCD"));
        			this.dsMaster.setColumn(i, "JEONGWA_BUNBAN",           this.ds_jeongwa.getColumn(0, "JEONGWA_BUNBAN_GBCD"));
        			this.dsMaster.setColumn(i, "BYEONDONG_SANGSE_NM",      this.divJeongwa.form.cboJeongwaGb.text);
        			this.dsMaster.setColumn(i, "JEONGWA_DAEHAK_NM",        this.divJeongwa.form.cboJeongwaGyeyeol.text);
        			this.dsMaster.setColumn(i, "JEONGWA_HAKGWA_NM",        this.divJeongwa.form.cboJeongwaHakgwa.text);
        			this.dsMaster.setColumn(i, "JEONGWA_JEONGONG_NM",      this.divJeongwa.form.cboJeongwaJeongong.text);
        			this.dsMaster.setColumn(i, "BYEONDONG_JEOKYONG_YYYY",  this.ds_jeongwa.getColumn(0, "JEONGWA_YYYY"));
        			this.dsMaster.setColumn(i, "BYEONDONG_JEOKYONG_HAKGI", this.ds_jeongwa.getColumn(0, "JEONGWA_HAKGI"));
        		}
        	}
        };

        /**********************************************************************
                10. 검색창 엔터키 조회
        ***********************************************************************/
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

        this.divSearch_cboSearchJuya_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"JUYA_GBCD",obj.value);
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

        this.divSearch_rdoHakjeok_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"HAKJEOK_STCD",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchHaknyeon_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"HAKNYEON",obj.value);
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
            this.divSearch.form.cboSearchGyeyeol.addEventHandler("onkeydown",this.divSearch_cboSearchGyeyeol_onkeydown,this);
            this.divSearch.form.cboSearchGyeyeol.addEventHandler("onitemchanged",this.divSearch_cboSearchGyeyeol_onitemchanged,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onkeydown",this.divSearch_cboSearchHakgwa_onkeydown,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onitemchanged",this.divSearch_cboSearchHakgwa_onitemchanged,this);
            this.divSearch.form.cboSearchJeongong.addEventHandler("onkeydown",this.divSearch_cboSearchJeongong_onkeydown,this);
            this.divSearch.form.rdoHakjeok.addEventHandler("onitemchanged",this.divSearch_rdoHakjeok_onitemchanged,this);
            this.divSearch.form.rdoHakjeok.addEventHandler("onkeydown",this.divSearch_rdoHakjeok_onkeydown,this);
            this.divSearch.form.cboSearchHaknyeon.addEventHandler("onkeydown",this.divSearch_cboSearchHaknyeon_onkeydown,this);
            this.divSearch.form.edtSearchHakbeon.addEventHandler("onkeydown",this.divSearch_edtSearchHakbeon_onkeydown,this);
            this.divSearch.form.cboSearchJuya.addEventHandler("onkeydown",this.divSearch_cboSearchJuya_onkeydown,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
            this.divJeongwa.form.cboJeongwaGyeyeol.addEventHandler("onitemchanged",this.divJeongwa_cboJeongwaGyeyeol_onitemchanged,this);
            this.divJeongwa.form.cboJeongwaHakgwa.addEventHandler("onitemchanged",this.divJeongwa_cboJeongwaHakgwa_onitemchanged,this);
            this.divJeongwa.form.btnJeongwa.addEventHandler("onclick",this.divJeongwa_btnJeongwa_onclick,this);
            this.stc_05.addEventHandler("onclick",this.stc_05_onclick,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
        };
        this.loadIncludeScript("US02_2010207_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
