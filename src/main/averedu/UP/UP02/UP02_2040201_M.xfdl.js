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
            this.set_titletext("교직이수관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMaster", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"JAGYEOKJONGBYEOL_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JAGYEOKJONGBYEOL_NM\" type=\"STRING\" size=\"50\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"50\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"8\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"JUYA_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"SINCHEONG_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"SINCHEONG_DT\" type=\"STRING\" size=\"8\"/><Column id=\"SEUNGIN_YN\" type=\"STRING\" size=\"1\"/><Column id=\"JAGYEOK_YN\" type=\"STRING\" size=\"1\"/><Column id=\"BIGO\" type=\"STRING\" size=\"100\"/><Column id=\"POGI_YN\" type=\"STRING\" size=\"1\"/><Column id=\"POGI_DT\" type=\"STRING\" size=\"8\"/><Column id=\"PYOSIGWAMOK_NM\" type=\"STRING\" size=\"50\"/><Column id=\"HAKJEOK_STCD\" type=\"STRING\" size=\"3\"/><Column id=\"HAKJEOK_STNM\" type=\"STRING\" size=\"65532\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"SINCHEONG_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"GYEYEOL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"256\"/><Column id=\"POGI_YN\" type=\"STRING\" size=\"256\"/><Column id=\"JAGYEOKJONGBYEOL_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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


            obj = new Dataset("dsDaesang", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"JAGYEOKJONGBYEOL_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JAGYEOKJONGBYEOL_NM\" type=\"STRING\" size=\"50\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"50\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"8\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"JUYA_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"IPHAK_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"SINCHEONG_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"SINCHEONG_DT\" type=\"STRING\" size=\"8\"/><Column id=\"SEUNGIN_YN\" type=\"STRING\" size=\"1\"/><Column id=\"JAGYEOK_YN\" type=\"STRING\" size=\"1\"/><Column id=\"BIGO\" type=\"STRING\" size=\"100\"/><Column id=\"POGI_YN\" type=\"STRING\" size=\"1\"/><Column id=\"POGI_DT\" type=\"STRING\" size=\"8\"/><Column id=\"PYOSIGWAMOK_NM\" type=\"STRING\" size=\"50\"/><Column id=\"HAKJEOK_STCD\" type=\"STRING\" size=\"3\"/><Column id=\"HAKJEOK_STNM\" type=\"STRING\" size=\"65532\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYejeong", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"JAGYEOKJONGBYEOL_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JAGYEOKJONGBYEOL_NM\" type=\"STRING\" size=\"50\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"50\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"8\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"JUYA_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"SINCHEONG_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"SINCHEONG_DT\" type=\"STRING\" size=\"8\"/><Column id=\"SEUNGIN_YN\" type=\"STRING\" size=\"1\"/><Column id=\"JAGYEOK_YN\" type=\"STRING\" size=\"1\"/><Column id=\"BIGO\" type=\"STRING\" size=\"100\"/><Column id=\"POGI_YN\" type=\"STRING\" size=\"1\"/><Column id=\"POGI_DT\" type=\"STRING\" size=\"8\"/><Column id=\"PYOSIGWAMOK_NM\" type=\"STRING\" size=\"50\"/><Column id=\"HAKJEOK_STCD\" type=\"STRING\" size=\"3\"/><Column id=\"HAKJEOK_STNM\" type=\"STRING\" size=\"65532\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJuya", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inputCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"SELECT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"GYOJIK_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inputALL", this);
            obj._setContents("<ColumnInfo><Column id=\"SINCHEONG_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"GYEYEOL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"256\"/><Column id=\"POGI_YN\" type=\"STRING\" size=\"256\"/><Column id=\"JAGYEOKJONGBYEOL_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBaseYyyyHakgi", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inputDaesang", this);
            obj._setContents("<ColumnInfo><Column id=\"GYEYEOL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inputYejeong", this);
            obj._setContents("<ColumnInfo><Column id=\"SINCHEONG_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGyojikHakgwa", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input1", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"HAKBEON_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"71","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01_00","0","9","75","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("선발년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","85","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01_00","255","9","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("계열");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchGyeyeol","375","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsGyeyeol");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01_00_00","495","9","105","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("학과");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgwa","610","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsHakgwa");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01_00_00_00","705","9","105","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("전공");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJeongong","820","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsJeongong");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","255","39","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("학번/성명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchName","375","39","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_01_00","730","0","56","35",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","70",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","75","0","10","70",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","0","0","1640","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","0","62","1640","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_02","0","33","1640","5",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 6pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00","495","0","56","70",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_00_00","600","0","10","70",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_01","255","0","56","70",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_00_01","365","0","10","70",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_00_01_00","810","0","10","35",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01","0","39","75","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_text("주야구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chk_searchAll","208","10","47","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_text("전체");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJuya","85","39","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsJuya");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01_00_00_00_00","495","39","105","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
            obj.set_text("포기여부");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("rdoPogi","610","39","172","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("25");
            obj.set_direction("vertical");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSearch_form_rdoPogi_innerdataset = new nexacro.NormalDataset("divSearch_form_rdoPogi_innerdataset", obj);
            divSearch_form_rdoPogi_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">포기</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">미포기</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_rdoPogi_innerdataset);
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","800","71","100","35",null,null,null,null,null,null,this);
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

            obj = new Static("staRowCnt","165","77","200","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","1","74","165","31",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("교직 이수 예정자 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","98","1640","8",null,null,null,null,null,null,this);
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

            obj = new Grid("grdMaster","0","106",null,"200","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("dsMaster");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"70\"/><Column size=\"100\"/><Column size=\"105\"/><Column size=\"65\"/><Column size=\"80\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"65\"/><Column size=\"120\"/><Column size=\"70\"/><Column size=\"110\"/><Column size=\"40\"/><Column size=\"110\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" text=\"승인&#13;&#10;여부\"/><Cell col=\"3\" text=\"선발(생성)&#13;&#10;년도\"/><Cell col=\"4\" text=\"학과(전공)\"/><Cell col=\"5\" text=\"학번\"/><Cell col=\"6\" text=\"성명\"/><Cell col=\"7\" text=\"생년월일\"/><Cell col=\"8\" text=\"학년\"/><Cell col=\"9\" text=\"주야\"/><Cell col=\"10\" text=\"현재&#13;&#10;학적상태\"/><Cell col=\"11\" text=\"자격종류\"/><Cell col=\"12\" text=\"표시과목\"/><Cell col=\"13\" text=\"신청일자\"/><Cell col=\"14\" text=\"포기&#13;&#10;여부\"/><Cell col=\"15\" text=\"포기일자\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" editmaxlength=\"1\"/><Cell col=\"1\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"2\" text=\"bind:SEUNGIN_YN\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"3\" text=\"bind:SINCHEONG_YYYY\" displaytype=\"text\" edittype=\"text\" editmaxlength=\"4\" editinputtype=\"digit\"/><Cell col=\"4\" text=\"bind:HAKGWA_NM\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:HAKBEON\" edittype=\"none\" displaytype=\"text\" expandshow=\"hide\" expandsize=\"20\" textAlign=\"center\" cssclass=\"expr:HAKJEOK_STCD == &apos;20&apos; ? &apos;Expr_Case_Font_Blue&apos; : HAKJEOK_STCD == &apos;50&apos; ? &apos;Expr_Case_Font_Red&apos; : HAKJEOK_STCD == &apos;30&apos; ? &apos;Expr_Case_Font_Green&apos; : &apos;&apos;\"/><Cell col=\"6\" text=\"bind:HAKSAENG_NM\" textAlign=\"center\" cssclass=\"expr:HAKJEOK_STCD == &apos;20&apos; ? &apos;Expr_Case_Font_Blue&apos; : HAKJEOK_STCD == &apos;50&apos; ? &apos;Expr_Case_Font_Red&apos; : HAKJEOK_STCD == &apos;30&apos; ? &apos;Expr_Case_Font_Green&apos; : &apos;&apos;\" expandshow=\"expr:dataset.getRowType(currow)==2?&apos;show&apos;:&apos;hide&apos;\" edittype=\"expr:dataset.getRowType(currow)==2?&apos;text&apos;:&apos;none&apos;\"/><Cell col=\"7\" text=\"bind:BIRTHDAY\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" text=\"bind:HAKNYEON\"/><Cell col=\"9\" text=\"bind:JUYA_GBNM\"/><Cell col=\"10\" text=\"bind:HAKJEOK_STNM\" cssclass=\"expr:HAKJEOK_STCD == &apos;20&apos; ? &apos;Expr_Case_Font_Blue&apos; : HAKJEOK_STCD == &apos;50&apos; ? &apos;Expr_Case_Font_Red&apos; : HAKJEOK_STCD == &apos;30&apos; ? &apos;Expr_Case_Font_Green&apos; : &apos;&apos;\"/><Cell col=\"11\" text=\"bind:JAGYEOKJONGBYEOL_NM\" combodataset=\"ds_jagyeokjongbyeol_cp\" combodatacol=\"JAGYEOKJONGBYEOL_NM\" combocodecol=\"JAGYEOKJONGBYEOL_CD\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:PYOSIGWAMOK_NM\" textAlign=\"left\"/><Cell col=\"13\" text=\"bind:SINCHEONG_DT\" textAlign=\"center\" displaytype=\"calendarcontrol\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\" edittype=\"date\"/><Cell col=\"14\" text=\"bind:POGI_YN\" textAlign=\"left\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"15\" displaytype=\"expr:POGI_YN==&apos;1&apos;?&apos;calendarcontrol&apos;:&apos;normal&apos;\" edittype=\"expr:POGI_YN == &apos;1&apos; ? &apos;date&apos; : &apos;none&apos;\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\" text=\"bind:POGI_DT\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","0","309","165","31",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("교직 이수 대상자 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCntDaesang","165","312","200","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00","0","333",null,"8","0",null,null,null,null,null,this);
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

            obj = new Static("Static01_00_00","500","306","35","35",null,null,null,null,null,null,this);
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

            obj = new Grid("grdDaesang","0","341","900",null,null,"0",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("dsDaesang");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"130\"/><Column size=\"90\"/><Column size=\"70\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" text=\"학과\"/><Cell col=\"3\" text=\"학번\"/><Cell col=\"4\" text=\"성명\"/><Cell col=\"5\" text=\"입학년도\"/><Cell col=\"6\" text=\"학적상태\"/><Cell col=\"7\" text=\"생년월일\"/><Cell col=\"8\" text=\"학년\"/><Cell col=\"9\" text=\"분반\"/><Cell col=\"10\" text=\"주야\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" editmaxlength=\"1\"/><Cell col=\"1\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"2\" text=\"bind:HAKGWA_NM\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:HAKBEON\" expandsize=\"20\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:HAKSAENG_NM\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:IPHAK_YYYY\"/><Cell col=\"6\" text=\"bind:HAKJEOK_STNM\"/><Cell col=\"7\" text=\"bind:BIRTHDAY\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" text=\"bind:HAKNYEON\"/><Cell col=\"9\" text=\"bind:BUNBAN\"/><Cell col=\"10\" text=\"bind:JUYA_GBNM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01","900","306","30",null,null,"0",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("30");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnGaebyeol","830","314","70","22",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("개별생성");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnRet","777","314","50","22",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_tabstop("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01_00","566","314","80","22",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("학번/성명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Edit("edtName","650","314","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00_00","930","309","165","31",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("교직 이수 예정자 현황");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCntYejeong","1095","312","200","24",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdYejeong","930","341",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_binddataset("dsYejeong");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"145\"/><Column size=\"150\"/><Column size=\"45\"/><Column size=\"45\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"학과\"/><Cell col=\"2\" text=\"자격종별\"/><Cell col=\"3\" text=\"승인\"/><Cell col=\"4\" text=\"미승인\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:HAKGWA_NM\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:JAGYEOKJONGBYEOL_NM\" expandsize=\"20\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:SEUNGIN_CNT_1\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:SEUNGIN_CNT_0\"/></Band></Format><Format id=\"format00\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"130\"/><Column size=\"50\"/><Column size=\"50\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"선발년도\"/><Cell col=\"2\" text=\"학과(전공)\"/><Cell col=\"3\" text=\"자격종별\"/><Cell col=\"4\" text=\"승인\"/><Cell col=\"5\" text=\"미승인\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:SINCHEONG_YYYY\"/><Cell col=\"2\" text=\"bind:HAKGWA_NM\" textAlign=\"left\"/><Cell col=\"3\" textAlign=\"left\" text=\"bind:JAGYEOKJONGBYEOL_NM\"/><Cell col=\"4\" text=\"bind:SEUNGIN_CNT_1\"/><Cell col=\"5\" text=\"bind:SEUNGIN_CNT_0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkAll",null,"315","47","20","0",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("전체");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new Spin("spnYYYY",null,"314","120","22","50",null,null,null,null,null,this);
            obj.set_taborder("20");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00",null,"314","75","22","180",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("선발년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.spnSearchYYYY","value","ds_input","SINCHEONG_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.chk_searchAll","value","ds_input","ALL_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboSearchGyeyeol","value","ds_input","GYEYEOL_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboSearchHakgwa","value","ds_input","HAKGWA_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.cboSearchJeongong","value","ds_input","JEONGONG_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.cboSearchJuya","value","ds_input","JUYA_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.edtSearchName","value","ds_input","HAKBEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.rdoPogi","value","ds_input","POGI_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edtName","value","ds_inputDaesang","HAKBEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","spnYYYY","value","ds_inputYejeong","SINCHEONG_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","chkAll","value","ds_inputYejeong","ALL_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("UP02_2040201_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UP02_2040201_M.xfdl(교직이수관리)
        * 작 성         일 명: 정진호
        * 작 성         일 자: 2022/08/18
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
        this.lvchkColidDs   = "SINCHEONG_YYYY$JAGYEOKJONGBYEOL_CD$HAKBEON"; // 필수 입력사항 칼럼ID 예) "commSmcd$commName"
        this.lvchkColNameDs = "선발년도$자격종별$학번";

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
        	// 기준연도학기
            var strDs    		= "dsBaseYyyyHakgi"; // 데이터를 받을 데이터셋리스트     예) "dsBaseYyyyHakgi"
            var svcId    		= "baseYyyyHakgiInit";
        	var strEopmuGbcd 	= "US";
        	var strUseYn     	= "1";
            // gfn_BaseYyyyHakgiLoad(데이터셋, svcId , 업무구분, 사용구분);
            // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.gfn_BaseYyyyHakgiLoad(strDs, svcId, strEopmuGbcd, strUseYn);

            var strDs    = "dsJuya";	// 데이터를 받을 데이터셋리스트 예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00003"; 	// 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "T"; 		// 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = ""; 			// 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId    = "Init";
        	// gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
        	// 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.gfn_CmmnMultiComboLoad(strDs, strLgcd, strComb, strOptn, svcId);

        	// 콤보
        	this.fn_GyeyeolCombo();
        	this.fn_HakgwaCombo();
        	this.fn_JeongongCombo();
        };

        this.fn_PostBaseYyyyHakgiInit = function() {
        	if (this.dsBaseYyyyHakgi.rowcount > 0) {
        		this.ds_input.setColumn(0, "SINCHEONG_YYYY", this.dsBaseYyyyHakgi.getColumn(0, "YYYY"));
        		this.spnYYYY.set_value(this.dsBaseYyyyHakgi.getColumn(0, "YYYY"));
        	}
        };

        this.fn_PostGyeyeolInt = function() {
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

        this.fn_PostGaebyeolCreate = function() {
        	this.fn_Ret();
        	this.fn_RetYejeong();
        }

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
        			case "baseYyyyHakgiInit":
        				this.fn_PostBaseYyyyHakgiInit();
        			    break;
        			// 검색조건 계열
        			case "GyeyeolCombo":
        				this.fn_PostGyeyeolInt();
        			    break;
        			// 검색조건 학과
        			case "HakgwaCombo":
        				this.fn_PostHakgwaInit();
        			    break;
        			// 검색조건 전공
        			case "JeongongCombo":
        				this.fn_PostJeongongInit();
        			    break;
                    case "Ret":
        				this.fn_PostRet();
                        break;
                    case "RetDaesang":
        				this.fn_PostRetDaesang();
                        break;
                    case "RetYejeong":
        				this.fn_PostRetYejeong();
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
        			case "GaebyeolCreate":
        				this.fn_PostGaebyeolCreate();
        				break;
                    default:
                        break;
                }
            }
        };

        //Popup callback영역
        this.fn_popupCallback = function(strId, strVal) {
        	switch(strId) {
        		case "gyojikhakgwahaksaeng" :
        			var sRtn = strVal.split(",");
        			if(sRtn[0] != "CLOSE") {
        				this.dsMaster.set_enableevent(false);
        				this.dsMaster.setColumn(this.dsMaster.rowposition, "HAKBEON", 				sRtn[0]);
        				this.dsMaster.setColumn(this.dsMaster.rowposition, "HAKSAENG_NM", 			sRtn[1]);
        				this.dsMaster.setColumn(this.dsMaster.rowposition, "HAKGWA_CD", 			sRtn[2]);
        				this.dsMaster.setColumn(this.dsMaster.rowposition, "HAKGWA_NM", 			sRtn[3]);
        				this.dsMaster.setColumn(this.dsMaster.rowposition, "BIRTHDAY", 				sRtn[7]);
        				this.dsMaster.setColumn(this.dsMaster.rowposition, "HAKNYEON", 				sRtn[8]);
        				this.dsMaster.setColumn(this.dsMaster.rowposition, "JUYA_GBCD", 			sRtn[10]);
        				this.dsMaster.setColumn(this.dsMaster.rowposition, "JUYA_GBNM", 			sRtn[11]);
        				this.dsMaster.setColumn(this.dsMaster.rowposition, "IPSI_YYYY", 			sRtn[4]);
        				this.dsMaster.setColumn(this.dsMaster.rowposition, "JAGYEOKJONGBYEOL_CD",	sRtn[13]);
        				this.dsMaster.setColumn(this.dsMaster.rowposition, "JAGYEOKJONGBYEOL_NM", 	sRtn[14]);
        				this.dsMaster.setColumn(this.dsMaster.rowposition, "PYOSIGWAMOK_NM",		sRtn[15]);
        				this.dsMaster.set_enableevent(true);
        			}
        			break;
        		case "isuyejeong" :
        			var sRtn = strVal.split(",");
        			if(sRtn[0] != "CLOSE") {
        				this.ds_input.setColumn(0, "YYYY", sRtn[0])
        				this.fn_Ret();
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
        this.fn_cmmBtnClick = function(sBtn) {
            switch(sBtn) {
                case "ret" : 		// 조회
        			this.fn_Ret();
                    break;
                case "new" : 		// 신규
        			this.fn_New();
                    break;
                case "del" : 		// 삭제
        			this.fn_Del();
                    break;
                case "save" : 		// 저장
        			this.fn_Save();
                    break;
                case "print" : 		// 출력
        			this.fn_Print();
                    break;
                case "confirm" : 	// 확정
        			this.fn_Confirm();
                    break;
                case "tmp1" : 		// 교직이수예정자생성
        			this.fn_isuYejeongPop();
                    break;
                case "tmp2" : 		// 일괄처리
        			this.fn_ilgwalCheori();
                    break;
                case "tmp3" : 		// 팁
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
            if(!this.fn_PreRet()) return false;

            var strSvc      = "Ret";
            var strUrl      = "/prj/UP/UP02/Retrieve_2040201_MList.do";
        	var strInDs 	= (this.divSearch.form.chk_searchAll.value == "1" ? "ds_input=ds_inputALL" : "ds_input=ds_input");
            var strOutDs    = "dsMaster=dsMaster";
            var strArg      = "";
            var GBV_MENUID  = objApp.gv_cutPrgId;
            if(!this.gfn_isNull(this.gfn_trim(GBV_MENUID))) {
        		strArg     += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
        	}
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        };

        /**
         * 기능 : 교직 이수 대상자 조회
         */
        this.fn_RetDaesang = function() {
            if(!this.fn_PreRet()) return false;

        	this.ds_inputDaesang.setColumn(0, "GYEYEOL_CD", 	this.ds_input.getColumn(0, "GYEYEOL_CD"));
        	this.ds_inputDaesang.setColumn(0, "HAKGWA_CD", 		this.ds_input.getColumn(0, "HAKGWA_CD"));
        	this.ds_inputDaesang.setColumn(0, "JEONGONG_CD", 	this.ds_input.getColumn(0, "JEONGONG_CD"));

            var strSvc      = "RetDaesang";
            var strUrl      = "/prj/UP/UP02/Retrieve_2040201_DaesangList.do";
        	var strInDs 	= "ds_input=ds_inputDaesang";
            var strOutDs    = "dsDaesang=dsMaster";
            var strArg      = "";
            var GBV_MENUID  = objApp.gv_cutPrgId;
            if(!this.gfn_isNull(this.gfn_trim(GBV_MENUID))) {
        		strArg     += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
        	}
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        };

        /**
         * 기능 : 교직 이수 예정자 조회
         */
        this.fn_RetYejeong = function() {
            if(!this.fn_PreRet()) return false;

            var strSvc      = "RetYejeong";
            var strUrl      = "/prj/UP/UP02/Retrieve_2040201_YejeongList.do";
        	var strInDs 	= "ds_input=ds_inputYejeong";
            var strOutDs    = "dsYejeong=dsMaster";
            var strArg      = "";
            var GBV_MENUID  = objApp.gv_cutPrgId;
            if(!this.gfn_isNull(this.gfn_trim(GBV_MENUID))) {
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
            this.gfn_getRowCount(this.staRowCnt, this.dsMaster);

        	// 교직이수대상자 조회
        	this.fn_RetDaesang();
        	// 교직이수예정자 현황
        	this.fn_RetYejeong();
        };

        /**
         * 기능 : 조회 후 실행
         */
        this.fn_PostRetDaesang = function() {
            this.gfn_getRowCount(this.staRowCntDaesang, this.dsDaesang);
        };

        /**
         * 기능 : 조회 후 실행
         */
        this.fn_PostRetYejeong = function() {
        	this.fn_yejeongCount();
        };

        /**********************************************************************
                06. 추가 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 추가 전 실행(기본체크사항)
         */
        this.fn_PreNew = function() {
            return true;
        };

        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_New = function() {
            if(!this.fn_PreNew()) {
                return false;
            }

            var nRow = this.dsMaster.addRow();
            this.dsMaster.setColumn(nRow, "SINCHEONG_YYYY", this.divSearch.form.spnSearchYYYY.value);
            this.dsMaster.setColumn(nRow, "SINCHEONG_DT", 	objApp.gds_SystemDate.getColumn(0, "YYYYMMDD"));
            this.dsMaster.setColumn(nRow, "SEUNGIN_YN", 	"0");
            this.dsMaster.setColumn(nRow, "POGI_YN", 		"0");
        };

        /**
         * 기능 : 처리 후 실행
         */
        this.fn_PostNew = function() {

        };

        /**********************************************************************
                07. 삭제 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 삭제 버튼 실행
         */
        this.fn_PreDel = function() {
            //멀티삭제용도
            if(this.dsMaster.rowcount < 1 || this.dsMaster.findRow("CHK", 1) == -1) {
                this.gfn_alert("삭제할 데이터가 없습니다.", "삭제정보", "", "warning");
                return false;
            }

            var result = this.gfn_confirm("현재선택행을 삭제하시겠습니까?", "삭제정보", "", "question");
            if(result == 0) {
                return false;
            }

            //다중삭제 용도
            this.dsMaster.set_enableevent(false);
            for(var i = this.dsMaster.rowcount - 1; i > -1; i--) {
                if(this.dsMaster.getColumn(i, "CHK") == "1" || this.dsMaster.getRowType(i) == 2) {
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
            if(!this.fn_PreDel()) {
                return false;
            }

            var strSvc      = "Del";
            var strUrl      = "/prj/UP/UP02/Delete_2040201_MList.do";
            var strInDs     = "dsMaster=dsMaster:u";
            var strOutDs    = "";
            var strArg      = "";
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true; 			//샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        };

        this.fn_PostDel = function() {
        	this.fn_RetDaesang();
        	this.fn_RetYejeong();
        };

        /**********************************************************************
                08. 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave = function() {
            if(this.dsMaster.rowcount > 0) {
                for(var i = 0; i < this.dsMaster.rowcount; i++) {
                    if(this.dsMaster.getColumn(i, "CHK") == "0") {
                        continue;
                    }

                    this.dsMaster.setColumn(i, "CHK", "0");
                }
            }

            if(!this.gfn_isUpdate(this.dsMaster)) {
                this.gfn_alert("변경된 이력이 없습니다.", "저장정보", "", "question");
                return false;
            }

            // 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
            var chkFocusFlg = true;
            var result		= this.gfn_cmmnChkEssentialItem(this.dsMaster, this.lvchkColidDs, this.lvchkColNameDs, this.grdMaster, chkFocusFlg, this);
            if (result[0] != "success") {
                this.gfn_alert(result[0], "저장정보", "", "question");
                this.dsMaster.set_rowposition(result[1]); //데이터셋 변경
                return false;
             }

             var result = this.gfn_confirm("저장 하시겠습니까?", "저장", "", "question");
             if(result == 0) {
                 return false;
             }

             return true;
        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_Save = function() {
            if(!this.fn_PreSave()) {
                return false;
            }

            var strSvc      = "Save";
            var strUrl      = "/prj/UP/UP02/Save_2040201_MList.do";
            var strInDs     = "ds_input=ds_input:a ";
                strInDs    += "dsMaster=dsMaster:u";
            var strOutDs    = "dsMaster=dsMaster";
            var strArg      = "";
            var GBV_MENUID	= objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID))) {
            	strArg     += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        };

        /**
         *      기능 : 저장시 후처리
         */
        this.fn_PostSave = function() {
            this.gfn_getRowCount(this.staRowCnt, this.dsMaster);
        	this.fn_RetYejeong();
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
                12. 팝업
        ***********************************************************************/
        /**
         *      기능 : 학과검색팝업 호출
         */
        this.fn_setCallHaksaengPopup = function(strSearchValue) {
        	this.dsGyojikHakgwa.clearData();
        	this.ds_input1.setColumn(0, "HAKBEON_NM", strSearchValue);

        	if(!this.gfn_isNull(strSearchValue)) {
        		var strSvc 		= "Search";
        		var strUrl      = "/prj/com/Retrieve_P14.do";
        		var strInDs  	= "ds_input=ds_input1";
        		var strOutDs 	= "dsGyojikHakgwa=dsMaster";
        		var strArg 		= "";
        		var GBV_MENUID	= objApp.gv_cutPrgId;
        		if(!this.gfn_isNull(this.gfn_trim(GBV_MENUID))) {
        			strArg     += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
        		}
        		var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        		var strASync    = false;			//샏략이나 공백일시에는 ASync=true,싱크시는 false로
        		this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        	}

        	var rowCount 	= this.dsGyojikHakgwa.rowcount;
        	var rowPosition = this.dsMaster.rowposition;
        	if(rowCount == 1) {
        		this.dsMaster.setColumn(rowPosition, "HAKBEON", 			this.dsGyojikHakgwa.getColumn(0, "HAKBEON"));
        		this.dsMaster.setColumn(rowPosition, "HAKSAENG_NM", 		this.dsGyojikHakgwa.getColumn(0, "HAKSAENG_NM"));
        		this.dsMaster.setColumn(rowPosition, "HAKGWA_CD", 			this.dsGyojikHakgwa.getColumn(0, "HAKGWA_CD"));
        		this.dsMaster.setColumn(rowPosition, "HAKGWA_NM", 			this.dsGyojikHakgwa.getColumn(0, "HAKGWA_NM"));
        		this.dsMaster.setColumn(rowPosition, "BIRTHDAY", 			this.dsGyojikHakgwa.getColumn(0, "BIRTHDAY"));
        		this.dsMaster.setColumn(rowPosition, "HAKNYEON", 			this.dsGyojikHakgwa.getColumn(0, "HAKNYEON"));
        		this.dsMaster.setColumn(rowPosition, "JUYA_GBCD", 			this.dsGyojikHakgwa.getColumn(0, "JUYA_GBCD"));
        		this.dsMaster.setColumn(rowPosition, "JUYA_GBNM", 			this.dsGyojikHakgwa.getColumn(0, "JUYA_GBNM"));
        		this.dsMaster.setColumn(rowPosition, "IPSI_YYYY", 			this.dsGyojikHakgwa.getColumn(0, "IPSI_YYYY"));
        		this.dsMaster.setColumn(rowPosition, "JAGYEOKJONGBYEOL_CD", this.dsGyojikHakgwa.getColumn(0, "JAGYEOKJONGBYEOL_CD"));
        		this.dsMaster.setColumn(rowPosition, "JAGYEOKJONGBYEOL_NM", this.dsGyojikHakgwa.getColumn(0, "JAGYEOKJONGBYEOL_NM"));
        		this.dsMaster.setColumn(rowPosition, "PYOSIGWAMOK_NM", 		this.dsGyojikHakgwa.getColumn(0, "PYOSIGWAMOK_NM"));
        	} else {
        		var oArg 			= {hakbeonNm:strSearchValue};
        		var oOption 		= {};
        		var sPopupCallBack 	= "fn_popupCallback";
        		this.gfn_openPopup("gyojikhakgwahaksaeng", "com::COMM_P14.xfdl", oArg, sPopupCallBack, oOption);
        	}
        };

        /**
          * 교직이수예정자 생성 팝업
         **/
        this.fn_isuYejeongPop = function() {
        	var yyyy			= this.ds_input.getColumn("SINCHEONG_YYYY");
        	var oArg 			= {yyyy:yyyy};
        	var oOption 		= {};
        	var sPopupCallBack 	= "fn_popupCallback";
        	this.gfn_openPopup("isuyejeong", "UP02::UP02_2040201_P01.xfdl", oArg, sPopupCallBack, oOption);
        }

        /**********************************************************************
                13. Get, Set Method
        ***********************************************************************/
        /**********************************************************************
                14. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 체크
         */
        this.grdMaster_onheadclick = function(obj, e) {
            if(e.cell == this.grdMaster.getBindCellIndex("body", "CHK")) {
                this.gfn_checkAll(obj, e);
            }
        };

        /**
         *      그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj, e) {
            if(e.cell != this.grdMaster.getBindCellIndex("body", "CHK") && e.cell != 1) {
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
          * 일괄처리
         **/
        this.fn_ilgwalCheori = function() {
        	if(this.dsMaster.rowcount == 0) {
        		alert("승일처리할 학생이 없습니다.");
        		return;
        	}

        	for(var i = 0; i < this.dsMaster.rowcount; i++) {
        		this.dsMaster.setColumn(i, "SEUNGIN_YN", "1");
        	}
        }

        /**
         * 기능 : 팁 실행
         */
        this.fn_Tip = function() {
        	this.alert("도움말 준비중입니다.");
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
            if(!this.gfn_isNull(this.gfn_trim(GBV_MENUID))) {
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
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID))) {
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
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID))) {
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
        	var filterStr 	= "UP_DEPT_CD == '" + strUpDeptCd + "' || DEPT_NM == '전체'"
        	this.dsHakgwa.filter(filterStr);
        	this.divSearch.form.cboSearchHakgwa.set_index(0);
        	this.divSearch_cboSearchHakgwa_onitemchanged(this.divSearch.form.cboSearchHakgwa, e);
        };

        /**
          * 전공 필터
         **/
        this.divSearch_cboSearchHakgwa_onitemchanged = function(obj, e) {
        	var strUpDeptCd = this.gfn_isNull(e.postvalue) ? "" : e.postvalue;
        	var filterStr 	= "UP_DEPT_CD == '" + strUpDeptCd + "' || DEPT_NM == '전체'"
        	this.dsJeongong.filter(filterStr);
        	this.divSearch.form.cboSearchJeongong.set_index(0);
        };

        /**
          * 검색조건: 전체 체크박스 값 변경 시
         **/
        this.divSearch_chk_searchAll_onchanged = function(obj, e) {
        	this.divSearch.form.spnSearchYYYY.set_enable(e.postvalue == "1" ? false : true);
        };

        /**
          * 검색조건: 전체 체크박스 값 변경 시
         **/
        this.ds_input_onvaluechanged = function(obj, e) {
        	if (this.divSearch.form.chk_searchAll.value == "1") {
        		this.ds_inputALL.copyData(this.ds_input);
        		this.ds_inputALL.setColumn(0, "SINCHEONG_YYYY", "");
        	}
        };

        /**
          * 교직이수 대상자 목록 조회 버튼
         **/
        this.btnRet_onclick = function(obj,e)
        {
        	this.fn_RetDaesang();
        };

        /**
          * 교직이수 대상자 목록 개별생성 버튼
         **/
        this.btnGaebyeol_onclick = function(obj, e) {
        	var chkCnt 		= 0;
        	var rowCount 	= this.dsDaesang.rowcount;
        	if (rowCount > 0) {
        		for (var i = 0; i < rowCount; i++) {
        			if (this.dsDaesang.getColumn(i, "CHK") == "1") {
        				chkCnt++;
        			}
        		}
        	}

        	if (chkCnt == 0) {
        		this.alert("선택된 행이 없습니다.");
        		return;
        	}

        	for (var i = 0; i < rowCount; i++) {
        		if (this.dsDaesang.getColumn(i, "CHK") == "1" && this.gfn_isNull(this.dsDaesang.getColumn(i, "IPHAK_YYYY"))) {
        			this.alert("입학년도 정보가 없어 개별생성할 수 없습니다.");
        			return;
        		}
        	}

        	if (this.gfn_confirm("선택한 대상자를 교직이수 예정자로 생성하시겠습니까?", "개별생성", "", "question")) {
        		this.fn_gaebyeolCreate();
        	}
        };

        /**
          * 교직이수 대상자 목록 개별생성
         **/
        this.fn_gaebyeolCreate = function() {
        	this.dsDaesang.set_updatecontrol(false);
        	var rowCount = this.dsDaesang.rowcount;
        	if (rowCount > 0) {
        		for (var i = 0; i < rowCount; i++) {
        			if (this.dsDaesang.getColumn(i, "CHK") == "1") {
        				this.dsDaesang.setRowType(i, Dataset.ROWTYPE_INSERT)
        			}
        		}
        	}
        	this.dsDaesang.set_updatecontrol(true);

            var strSvc      = "GaebyeolCreate";
            var strUrl      = "/prj/UP/UP02/Save_2040201_DaesangList.do";
            var strInDs     = "ds_input=ds_input:a ";
                strInDs    += "dsMaster=dsDaesang:u";
            var strOutDs    = "dsDaesang=dsMaster";
            var strArg      = "";
            var GBV_MENUID	= objApp.gv_cutPrgId;
            if(!this.gfn_isNull(this.gfn_trim(GBV_MENUID))) {
            	strArg     += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        }

        /**
          * 교직이수 예정자 선발년도 값 변경
         **/
        this.spnYYYY_onchanged = function(obj, e) {
        	this.fn_RetYejeong();
        };

        /**
          * 교직이수 예정자 선발년도 값 변경
         **/
        this.spnYYYY_onspin = function(obj, e) {
        	this.fn_RetYejeong();
        };

        this.grdMaster_onexpandup = function(obj, e) {
        	if (e.cell == 6) { // 성명
        		var name = this.dsMaster.getColumn(e.row, "HAKBEON_NM");
        		this.fn_setCallHaksaengPopup(name);
        	}
        };

        this.grdMaster_onenterdown = function(obj, e) {
        	if (e.cell == 6) { // 성명
        		var name = this.dsMaster.getColumn(e.row, "HAKBEON_NM");
        		this.fn_setCallHaksaengPopup(name);
        	}
        };

        this.chkAll_onchanged = function(obj, e) {
        	var chkVal = this.chkAll.value;
        	this.grdYejeong.set_formatid(chkVal == "1" ? "format00" : "default"); // 전체 선택 시 선발년도 컬럼 활성
        	this.fn_RetYejeong();
        };

        // 엔터 입력
        this.fn_onKeydown = function(obj, e) {
        	if (e.keycode == 13) {
        		this.fn_Ret();
        	}
        }

        // 예정자 현황 count - 해당 선발년도의 총 인원수
        this.fn_yejeongCount = function() {
        	var yejeongCount	= 0;
        	var rowCount 		= this.dsYejeong.rowcount;
        	for (var i = 0; i < rowCount; i++) {
        		yejeongCount += nexacro.toNumber(this.dsYejeong.getColumn(i, "CNT"));
        	}

        	var textStr = "[총 <fc v='red'><b v='true'>" + yejeongCount + " </b></fc>건]";
        	this.staRowCntYejeong.set_text(textStr);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.divSearch.form.cboSearchGyeyeol.addEventHandler("onitemchanged",this.divSearch_cboSearchGyeyeol_onitemchanged,this);
            this.divSearch.form.cboSearchGyeyeol.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onitemchanged",this.divSearch_cboSearchHakgwa_onitemchanged,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.divSearch.form.cboSearchJeongong.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.divSearch.form.edtSearchName.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.divSearch.form.chk_searchAll.addEventHandler("onchanged",this.divSearch_chk_searchAll_onchanged,this);
            this.divSearch.form.cboSearchJuya.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.divSearch.form.rdoPogi.addEventHandler("onkeydown",this.divSearch_rdoPogi_onkeydown,this);
            this.grdMaster.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster.addEventHandler("oncellclick",this.grdMaster_oncellclick,this);
            this.grdMaster.addEventHandler("onselectchanged",this.grdMaster_onselectchanged,this);
            this.grdMaster.addEventHandler("onexpandup",this.grdMaster_onexpandup,this);
            this.grdMaster.addEventHandler("onenterdown",this.grdMaster_onenterdown,this);
            this.grdDaesang.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
            this.grdDaesang.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdDaesang.addEventHandler("onselectchanged",this.grdMaster_onselectchanged,this);
            this.grdDaesang.addEventHandler("onexpandup",this.grdMaster_onexpandup,this);
            this.Static01_01_00_00_00_01.addEventHandler("onclick",this.Static01_01_00_00_00_01_onclick,this);
            this.btnGaebyeol.addEventHandler("onclick",this.btnGaebyeol_onclick,this);
            this.btnRet.addEventHandler("onclick",this.btnRet_onclick,this);
            this.grdYejeong.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
            this.grdYejeong.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdYejeong.addEventHandler("onselectchanged",this.grdMaster_onselectchanged,this);
            this.grdYejeong.addEventHandler("onexpandup",this.grdDetail00_onexpandup,this);
            this.grdYejeong.addEventHandler("onenterdown",this.grdDetail00_onenterdown,this);
            this.chkAll.addEventHandler("onchanged",this.chkAll_onchanged,this);
            this.spnYYYY.addEventHandler("onchanged",this.spnYYYY_onchanged,this);
            this.spnYYYY.addEventHandler("onspin",this.spnYYYY_onspin,this);
            this.ds_input.addEventHandler("onvaluechanged",this.ds_input_onvaluechanged,this);
            this.ds_inputCombo.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
            this.ds_inputDaesang.addEventHandler("onvaluechanged",this.ds_input_onvaluechanged,this);
            this.ds_inputYejeong.addEventHandler("onvaluechanged",this.ds_input_onvaluechanged,this);
        };
        this.loadIncludeScript("UP02_2040201_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
