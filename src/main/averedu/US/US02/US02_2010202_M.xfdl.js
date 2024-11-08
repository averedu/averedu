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
            this.set_titletext("분반관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"DAEHAK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"256\"/><Column id=\"HAKJEOK_STCD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SABEON\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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


            obj = new Dataset("dsMaster", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"DAEHAK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DAEHAK_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONGONG_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"JUYA_GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"256\"/><Column id=\"TOT_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BUNBAN_A_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BUNBAN_B_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BUNBAN_C_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BUNBAN_D_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BUNBAN_E_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BUNBAN_F_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BUNBAN_H_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BUNBAN_I_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BUNBAN_J_CNT\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHaksaeng", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"50\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"JUYA_GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"BUNBAN\" type=\"STRING\" size=\"5\"/><Column id=\"BUNBAN_BYEONGYEONG_YN\" type=\"STRING\" size=\"1\"/><Column id=\"BUNBAN_BYEONGYEONG_DTTM\" type=\"STRING\" size=\"19\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBunban", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"50\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"BUNBAN\" type=\"STRING\" size=\"5\"/><Column id=\"BYEONGYEONG_BUNBAN\" type=\"STRING\" size=\"1\"/><Column id=\"JUYA_GBNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBunbanCombo", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dInput", this);
            obj._setContents("<ColumnInfo><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"BUNBAN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdMaster","0","77",null,null,"0","385",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"55\"/><Column size=\"45\"/><Column size=\"55\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"계열\"/><Cell col=\"2\" rowspan=\"2\" text=\"학과/학부\"/><Cell col=\"3\" rowspan=\"2\" text=\"전공\"/><Cell col=\"4\" rowspan=\"2\" text=\"주야구분\"/><Cell col=\"5\" rowspan=\"2\" text=\"학년\"/><Cell col=\"6\" rowspan=\"2\" text=\"총 인원수\"/><Cell col=\"7\" colspan=\"6\" text=\"분반별 인원수\"/><Cell row=\"1\" col=\"7\" text=\"A\"/><Cell row=\"1\" col=\"8\" text=\"B\"/><Cell row=\"1\" col=\"9\" text=\"C\"/><Cell row=\"1\" col=\"10\" text=\"D\"/><Cell row=\"1\" col=\"11\" text=\"E\"/><Cell row=\"1\" col=\"12\" text=\"F\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:DAEHAK_NM\" suppress=\"1\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:HAKGWA_NM\" suppress=\"2\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:JEONGONG_NM\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:JUYA_GBNM\"/><Cell col=\"5\" text=\"bind:HAKNYEON\"/><Cell col=\"6\" text=\"bind:TOT_CNT\"/><Cell col=\"7\" text=\"bind:BUNBAN_A_CNT\" displaytype=\"number\"/><Cell col=\"8\" displaytype=\"number\" text=\"bind:BUNBAN_B_CNT\"/><Cell col=\"9\" displaytype=\"number\" text=\"bind:BUNBAN_C_CNT\"/><Cell col=\"10\" displaytype=\"number\" text=\"bind:BUNBAN_D_CNT\"/><Cell col=\"11\" displaytype=\"number\" text=\"bind:BUNBAN_E_CNT\"/><Cell col=\"12\" displaytype=\"number\" text=\"bind:BUNBAN_F_CNT\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdHaksaeng","0","459","800",null,null,"0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_selecttype("multirow");
            obj.set_binddataset("dsHaksaeng");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"50\"/><Column size=\"60\"/><Column size=\"50\"/><Column size=\"70\"/><Column size=\"170\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"학번\"/><Cell col=\"2\" text=\"성명\"/><Cell col=\"3\" text=\"학년\"/><Cell col=\"4\" text=\"주야구분\"/><Cell col=\"5\" text=\"분반\"/><Cell col=\"6\" text=\"분반&#13;&#10;변경여부\"/><Cell col=\"7\" text=\"분반변경일시\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:HAKBEON\"/><Cell col=\"2\" text=\"bind:HAKSAENG_NM\"/><Cell col=\"3\" text=\"bind:HAKNYEON\"/><Cell col=\"4\" text=\"bind:JUYA_GBNM\"/><Cell col=\"5\" text=\"bind:BUNBAN\"/><Cell col=\"6\" text=\"bind:BUNBAN_BYEONGYEONG_YN\" displaytype=\"checkboxcontrol\"/><Cell col=\"7\" text=\"bind:BUNBAN_BYEONGYEONG_DTTM\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"42","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","24","0","1500","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","24","31","1500","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02","580","0","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01","261","0","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00","51","0","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","370","0","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","660","0","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00","-30","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("계열");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchGyeyeol","61","9","200","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_innerdataset("dsGyeyeol");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","290","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("학과/학부");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgwa","380","9","200","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsHakgwa");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01","581","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("전공");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJeongong","670","9","200","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsJeongong");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_02_00","885","9","65","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("학년");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHaknyeon","960","9","105","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsHaknyeon");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_02","1081","9","65","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("주야");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJuya","1155","9","125","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsJuya");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_02","870","0","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","950","0","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_02_00","1065","0","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00","1145","0","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01","500","42","100","35",null,null,null,null,null,null,this);
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

            obj = new Static("Static01_01_00_00_00","0","451",null,"8","0",null,null,null,null,null,this);
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

            obj = new Combo("cboBunban","660","429","140","22",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsBunbanCombo");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Grid("grdBunban","840","459",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_selecttype("multirow");
            obj.set_binddataset("dsBunban");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"50\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"학번\"/><Cell col=\"2\" text=\"성명\"/><Cell col=\"3\" text=\"학년\"/><Cell col=\"4\" text=\"주야구분\"/><Cell col=\"5\" text=\"현재분반\"/><Cell col=\"6\" text=\"변경분반\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:HAKBEON\"/><Cell col=\"2\" text=\"bind:HAKSAENG_NM\"/><Cell col=\"3\" text=\"bind:HAKNYEON\"/><Cell col=\"4\" text=\"bind:JUYA_GBNM\"/><Cell col=\"5\" text=\"bind:BUNBAN\"/><Cell col=\"6\" text=\"bind:BYEONGYEONG_BUNBAN\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnMoveRight","805","528","30","90",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("▶");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01","800","422","40","100",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("40");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnMoveLeft","805","628","30","90",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("◀");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Combo("cboChangeBunban","1380","429","140","22",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsBunbanCombo");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","0","51",null,"22","1485",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("학과/전공 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","127","50",null,"24","1390",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00","0","69","1160","8",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","1080","415","100","45",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("↑\r\n45\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","0","434",null,"22","1485",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("학생 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt2","87","433",null,"24","1430",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00_00","840","434",null,"22","645",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("분반 변경 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Button("btnSaveBunban",null,"429","100","22","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("변경분반저장");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHakgwa","162","429","166","22",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_enable("true");
            obj.set_inputtype("normal");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJeongong","327","429","166","22",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_enable("true");
            obj.set_inputtype("digit");
            obj.set_maxlength("16");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_63","622","435","30","20",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("분반");
            this.addChild(obj.name, obj);

            obj = new Static("stc_63_00","1322","435","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("변경분반");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.cboSearchGyeyeol","value","ds_input","DAEHAK_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboSearchHakgwa","value","ds_input","HAKGWA_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboSearchJeongong","value","ds_input","JEONGONG_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divSearch.form.cboSearchHaknyeon","value","ds_input","HAKNYEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divSearch.form.cboSearchJuya","value","ds_input","JUYA_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edtHakgwa","value","dsMaster","HAKGWA_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edtJeongong","value","dsMaster","JEONGONG_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
            this._addPreloadList("data","","dsHaksaeng");
            this._addPreloadList("data","","dsBunban");
            this._addPreloadList("data","","dsBunbanCombo");
        };
        
        // User Script
        this.registerScript("US02_2010202_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): US02_2010202_M.xfdl(분반 관리(조회))
        * 작 성         일 명: jiback
        * 작 성         일 자: 2021/09/13
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
            var strDs    = "dsHaknyeon|dsJuya|dsBunbanCombo";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00060|00003|00050";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "T|T|T";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
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
        	this.gfn_GyeyeolComboLoad(this.divSearch.form.cboSearchGyeyeol, strComb, svcId, strUseYn, strJojikGbcd, strDaehakCd , objApp.gv_cutPrgId);
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
        	this.gfn_clearSortAll(this.grdMaster);
            this.gfn_clearSortAll(this.grdHaksaeng);
        	this.gfn_clearSortAll(this.grdBunban);
            if(nErrorCode != 0)
            {
                this.gfn_alert(sErrorMsg,"에러정보","","error");
                return false;
            }else
            {
                /*sSvcId (Transaction Id)*/
                switch(sSvcId)
                {
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
        			case "HaksaengRet":
                            this.fn_PostHaksaengRet();
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
            var strUrl      = "/prj/US/US02/Retrieve_2010202_M.do";
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
        	this.dsHaksaeng.clearData();
            this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
        };

        /**********************************************************************
                06. 조회 함수 선언(학생 함수)
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreHaksaengRet = function()
        {
        	this.ds_dInput.setColumn(0, "HAKGWA_CD", this.dsMaster.getColumn(this.dsMaster.rowposition, "HAKGWA_CD"));
        	this.ds_dInput.setColumn(0, "JEONGONG_CD", this.dsMaster.getColumn(this.dsMaster.rowposition, "JEONGONG_CD"));
        	this.ds_dInput.setColumn(0, "JUYA_GBCD", this.dsMaster.getColumn(this.dsMaster.rowposition, "JUYA_GBCD"));
        	this.ds_dInput.setColumn(0, "HAKNYEON", this.dsMaster.getColumn(this.dsMaster.rowposition, "HAKNYEON"));
        	this.ds_dInput.setColumn(0, "BUNBAN", this.cboBunban.value);

        	return true;
        }

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_HaksaengRet = function()
        {
            if(!this.fn_PreHaksaengRet())
            {
                return false;
            }
            var strSvc      = "HaksaengRet";
            var strUrl      = "/prj/US/US02/Retrieve_2010202_M_Haksaeng.do";
            var strInDs     = "ds_dInput=ds_dInput";
            var strOutDs    = "dsHaksaeng=dsHaksaeng";
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
        this.fn_PostHaksaengRet = function()
        {
            this.gfn_getRowCount(this.staRowCnt2,this.dsHaksaeng);
        };

        /**********************************************************************
                07. 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave = function()
        {
            if(!this.gfn_isUpdate(this.dsBunban))
            {
                this.gfn_alert("변경된 이력이 없습니다.","저장정보","","question");
                return false;
            }

        	if(this.dsBunban.findRowExpr("BYEONGYEONG_BUNBAN==undefined") > -1)
        	{
        		this.alert("변경분반을 선택하세요.");
        		return false;
        	}

            var result = this.gfn_confirm( "변경된 분반으로 저장 하시겠습니까?", "저장","", "question" );
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
            var strUrl      = "/prj/US/US02/Save_2010202_M.do";
            var strInDs     = "ds_input=ds_input:a ";
                strInDs    += "dsBunban=dsBunban:u";
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
        	this.dsBunban.clearData();
        	this.cboChangeBunban.set_index(0);
            this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
        };

        /**********************************************************************
                08. 분반변경
        ***********************************************************************/
        this.btn_move_onclick = function(obj,e)
        {
        	if(obj.name == "btnMoveRight")
        	{
        		if(this.dsHaksaeng.rowcount == 0)
        		{
        			this.alert("학생 목록이 없습니다.");
        			return false;
        		}

        		var rows   = this.grdHaksaeng.getSelectedRows();
        		var fRow   = 0;
        		var dupRow = 0;
        		for(var i=0; i<rows.length; i++)
        		{
        			if(this.dsHaksaeng.getColumn(rows[i], "BUNBAN_BYEONGYEONG_YN") == "1")
        			{
        				fRow++;
        			}

        			for(var j=0; j<this.dsBunban.rowcount; j++)
        			{
        				if(this.dsHaksaeng.getColumn(rows[i], "HAKBEON") == this.dsBunban.getColumn(j, "HAKBEON"))
        				{
        					dupRow++;
        				}
        			}
        		}
        		if(fRow > 0)
        		{
        			this.alert("이미 분반을 변경한 학생이 선택되었습니다.");
        			return false;
        		}
        		if(dupRow > 0)
        		{
        			this.alert("이미 분반변경목록에 있는 학생이 선택되었습니다.");
        			return false;
        		}

        		var nRow;
        		for(var idx=0; idx<rows.length; idx++)
        		{
        			nRow = this.dsBunban.addRow();
        			this.dsBunban.setColumn(nRow, "HAKBEON",     this.dsHaksaeng.getColumn(rows[idx], "HAKBEON"));
        			this.dsBunban.setColumn(nRow, "HAKSAENG_NM", this.dsHaksaeng.getColumn(rows[idx], "HAKSAENG_NM"));
        			this.dsBunban.setColumn(nRow, "HAKNYEON",    this.dsHaksaeng.getColumn(rows[idx], "HAKNYEON"));
        			this.dsBunban.setColumn(nRow, "BUNBAN",      this.dsHaksaeng.getColumn(rows[idx], "BUNBAN"));
        			this.dsBunban.setColumn(nRow, "JUYA_GBNM",   this.dsHaksaeng.getColumn(rows[idx], "JUYA_GBNM"));
        		}
        	}
        	else if(obj.name == "btnMoveLeft")
        	{
        		if(this.dsBunban.rowcount == 0)
        		{
        			this.alert("분반 변경 목록이 없습니다.");
        			return false;
        		}

        		var rows = this.grdBunban.getSelectedRows();
        		if(rows.length == 0)
        		{
        			this.alert("선택된 행이 없습니다.");
        			return false;
        		}
        		this.dsBunban.deleteMultiRows(rows);
        	}
        };

        /**********************************************************************
                09. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj,e)
        {
            this.gfn_gridSort(obj,e);
        };
        this.grdHaksaeng_onheaddblclick = function(obj,e)
        {
        	this.gfn_gridSort(obj,e);
        };

        this.grdBunban_onheaddblclick = function(obj,e)
        {
        	this.gfn_gridSort(obj,e);
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

        // dsMaster 변경시 조회
        this.dsMaster_onrowposchanged = function(obj,e)
        {
        	this.fn_HaksaengRet();
        };

        // 분반 변경시 조회
        this.cboBunban_onitemchanged = function(obj,e)
        {
        	this.fn_HaksaengRet();
        };

        // 변경분반 변경 전 이벤트
        this.cboChangeBunban_canitemchange = function(obj,e)
        {
        	var fRow = this.dsBunban.findRowExpr("BUNBAN=='" + e.postvalue + "'");
        	if(fRow > -1)
        	{
        		this.alert("현재분반과 변경분반이 같습니다.\n다른 분반을 선택하세요.");
        		return false;
        	}
        };

        // 변경분반 변경시 이벤트
        this.cboChangeBunban_onitemchanged = function(obj,e)
        {
        	if(this.dsBunban.rowcount == 0)
        	{
        		return false;
        	}

        	for(var i=0; i<this.dsBunban.rowcount; i++)
        	{
        		this.dsBunban.setColumn(i, "BYEONGYEONG_BUNBAN", this.cboChangeBunban.value);
        	}
        };

        // 변경분반저장 버튼 클릭시 저장
        this.btnSaveBunban_onclick = function(obj,e)
        {
        	this.fn_Save();
        };

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
            return this.gfn_isUpdate(this.dsBunban);
        };

        /**********************************************************************
                12. 검색창 엔터키 조회
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

        this.divSearch_cboSearchHaknyeon_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"HAKNYEON",obj.value);
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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdHaksaeng.addEventHandler("onheaddblclick",this.grdHaksaeng_onheaddblclick,this);
            this.divSearch.form.cboSearchGyeyeol.addEventHandler("onkeydown",this.divSearch_cboSearchGyeyeol_onkeydown,this);
            this.divSearch.form.cboSearchGyeyeol.addEventHandler("onitemchanged",this.divSearch_cboSearchGyeyeol_onitemchanged,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onkeydown",this.divSearch_cboSearchHakgwa_onkeydown,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onitemchanged",this.divSearch_cboSearchHakgwa_onitemchanged,this);
            this.divSearch.form.cboSearchJeongong.addEventHandler("onkeydown",this.divSearch_cboSearchJeongong_onkeydown,this);
            this.divSearch.form.cboSearchHaknyeon.addEventHandler("onkeydown",this.divSearch_cboSearchHaknyeon_onkeydown,this);
            this.divSearch.form.cboSearchJuya.addEventHandler("onkeydown",this.divSearch_cboSearchJuya_onkeydown,this);
            this.cboBunban.addEventHandler("onitemchanged",this.cboBunban_onitemchanged,this);
            this.grdBunban.addEventHandler("onheaddblclick",this.grdBunban_onheaddblclick,this);
            this.btnMoveRight.addEventHandler("onclick",this.btn_move_onclick,this);
            this.btnMoveLeft.addEventHandler("onclick",this.btn_move_onclick,this);
            this.cboChangeBunban.addEventHandler("canitemchange",this.cboChangeBunban_canitemchange,this);
            this.cboChangeBunban.addEventHandler("onitemchanged",this.cboChangeBunban_onitemchanged,this);
            this.btnSaveBunban.addEventHandler("onclick",this.btnSaveBunban_onclick,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
        };
        this.loadIncludeScript("US02_2010202_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
