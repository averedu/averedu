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
            this.set_titletext("학적부정정관리");
            this.set_color("blue");
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
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"50\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"HAKJEOK_STNM\" type=\"STRING\" size=\"65532\"/><Column id=\"JEONGJEONG_DT\" type=\"STRING\" size=\"8\"/><Column id=\"JEONGJEONG_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"JEONGJEONG_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"JEONGJEONG_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"JEONGJEONG_HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"JEONGJEONG_BEF_NAEYONG1\" type=\"STRING\" size=\"100\"/><Column id=\"JEONGJEONG_BEF_NAEYONG2\" type=\"STRING\" size=\"100\"/><Column id=\"JEONGJEONG_BEF_NAEYONG3\" type=\"STRING\" size=\"100\"/><Column id=\"JEONGJEONG_BEF_NAEYONG4\" type=\"STRING\" size=\"65532\"/><Column id=\"JEONGJEONG_BEF_NAEYONG5\" type=\"STRING\" size=\"8\"/><Column id=\"JEONGJEONG_AFT_NAEYONG1\" type=\"STRING\" size=\"100\"/><Column id=\"JEONGJEONG_AFT_NAEYONG2\" type=\"STRING\" size=\"100\"/><Column id=\"JEONGJEONG_AFT_NAEYONG3\" type=\"STRING\" size=\"100\"/><Column id=\"JEONGJEONG_AFT_NAEYONG4\" type=\"STRING\" size=\"65532\"/><Column id=\"JEONGJEONG_AFT_NAEYONG5\" type=\"STRING\" size=\"8\"/><Column id=\"JEONGJEONG_SAYU\" type=\"STRING\" size=\"100\"/><Column id=\"JEONDAL_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"CHEORI_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"CHEORI_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"CHEORI_DT\" type=\"STRING\" size=\"8\"/><Column id=\"BIGO\" type=\"STRING\" size=\"500\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"JEONGJEONG_FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGJEONG_TODT\" type=\"STRING\" size=\"256\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGJEONG_GBCD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJeongjeong", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchJeongjeong", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBaseYyyyHakgi", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakbeon", this);
            obj._setContents("<ColumnInfo><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"50\"/><Column id=\"HAKSAENG_ENM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKSAENG_CNM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKJEOK_STCD\" type=\"STRING\" size=\"3\"/><Column id=\"HAKJEOK_SANGTAE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"8\"/><Column id=\"RES_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj = new Static("stc_13_06","0","77","1284","28",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06","0","77","155","28",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("정정일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00","0","105","1284","28",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01","0","105","155","28",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("학번/성명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00","0","133","1284","28",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00","0","133","155","28",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("정정구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01","950","105","175","28",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("학적상태");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHakjeokSangtae","1127","108","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calJeongjeongDt","157","80","224","22",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_00_00_00","0","329","1284","28",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_00_00_00","0","329","155","28",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("결재일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00_01_00_00_00","383","329","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("결재여부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Radio("RdoGyeoljaeYeobu","536","333","183","22",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_enable("true");
            obj.set_readonly("false");
            var RdoGyeoljaeYeobu_innerdataset = new nexacro.NormalDataset("RdoGyeoljaeYeobu_innerdataset", obj);
            RdoGyeoljaeYeobu_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">승인</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">미승인</Col></Row></Rows>");
            obj.set_innerdataset(RdoGyeoljaeYeobu_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Static("Static01","290","357","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"42","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01","417","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("학번/성명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchHakbeon","512","9","130","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","672","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("정정구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJeongjeong","763","9","130","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsSearchJeongjeong");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_01","3","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("정정일자");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calSearchJeongjeonFrdt","95","9","130","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00","230","9","16","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calSearchJeongjeonTodt","253","9","130","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","1","1","27","37",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","20","1","1000","9",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","86","1","10","37",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_01","384","1","56","37",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00","643","1","56","37",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_02","503","1","10","37",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00","754","1","10","37",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","520","42","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","69","1160","8",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","0","366",null,"22","1485",null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("학적부 정정 내역");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","137","365",null,"24","1380",null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","0","392",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"75\"/><Column size=\"70\"/><Column size=\"135\"/><Column size=\"70\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"280\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" rowspan=\"2\" text=\"No\"/><Cell col=\"2\" rowspan=\"2\" text=\"정정일자\"/><Cell col=\"3\" rowspan=\"2\" text=\"학번\"/><Cell col=\"4\" rowspan=\"2\" text=\"성명\"/><Cell col=\"5\" rowspan=\"2\" text=\"학과\"/><Cell col=\"6\" rowspan=\"2\" text=\"현재&#13;&#10;학적상태\"/><Cell col=\"7\" rowspan=\"2\" text=\"정정구분\"/><Cell col=\"8\" colspan=\"5\" text=\"정정전내용\"/><Cell col=\"13\" colspan=\"5\" text=\"정정후내용\"/><Cell col=\"18\" rowspan=\"2\" text=\"정정사유\"/><Cell col=\"19\" rowspan=\"2\" text=\"처리구분\"/><Cell row=\"1\" col=\"8\" text=\"한글성명\"/><Cell row=\"1\" col=\"9\" text=\"영어성명\"/><Cell row=\"1\" col=\"10\" text=\"한문성명\"/><Cell row=\"1\" col=\"11\" text=\"주민번호\"/><Cell row=\"1\" col=\"12\" text=\"생년월일\"/><Cell row=\"1\" col=\"13\" text=\"한글성명\"/><Cell row=\"1\" col=\"14\" text=\"영어성명\"/><Cell row=\"1\" col=\"15\" text=\"한문성명\"/><Cell row=\"1\" col=\"16\" text=\"주민번호\"/><Cell row=\"1\" col=\"17\" text=\"생년월일\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"2\" displaytype=\"date\" text=\"bind:JEONGJEONG_DT\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" text=\"bind:HAKBEON\"/><Cell col=\"4\" text=\"bind:HAKSAENG_NM\"/><Cell col=\"5\" text=\"bind:HAKGWA_NM\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:HAKJEOK_STNM\"/><Cell col=\"7\" text=\"bind:JEONGJEONG_GBCD\" displaytype=\"combotext\" combodataset=\"ds_jeongjeongGbcdGrd\" combocodecol=\"CD\" combodatacol=\"LABEL\"/><Cell col=\"8\" text=\"bind:JEONGJEONG_BEF_NAEYONG1\"/><Cell col=\"9\" text=\"bind:JEONGJEONG_BEF_NAEYONG2\"/><Cell col=\"10\" text=\"bind:JEONGJEONG_BEF_NAEYONG3\"/><Cell col=\"11\" displaytype=\"mask\" maskedittype=\"string\" maskeditformat=\"######-#######\" text=\"bind:JEONGJEONG_AFT_NAEYONG4\"/><Cell col=\"12\" calendardateformat=\"yyyy-MM-dd\" text=\"bind:JEONGJEONG_BEF_NAEYONG5\" displaytype=\"date\" calendardisplaynulltype=\"none\"/><Cell col=\"13\" text=\"bind:JEONGJEONG_AFT_NAEYONG1\"/><Cell col=\"14\" text=\"bind:JEONGJEONG_AFT_NAEYONG2\"/><Cell col=\"15\" text=\"bind:JEONGJEONG_AFT_NAEYONG3\"/><Cell col=\"16\" displaytype=\"mask\" maskedittype=\"string\" maskeditformat=\"######-#######\" text=\"bind:JEONGJEONG_AFT_NAEYONG4\"/><Cell col=\"17\" calendardateformat=\"yyyy-MM-dd\" text=\"bind:JEONGJEONG_AFT_NAEYONG5\" displaytype=\"date\" calendardisplaynulltype=\"none\"/><Cell col=\"18\" text=\"bind:JEONGJEONG_SAYU\" textareascrolltype=\"horizontal\" textareascrollbartype=\"auto auto\" textAlign=\"left\"/><Cell col=\"19\" text=\"bind:CHEORI_GBNM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cboJeongjeong","157","136","224","22",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsJeongjeong");
            obj.set_cssclass("point");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","0","52",null,"22","1458",null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("학적부 정정 상세항목");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01_00","20","32","1000","9",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00","0","384","1160","8",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHakbeon","157","108","224","22",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_enable("false");
            obj.set_readonly("false");
            obj.set_usecontextmenu("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnHakbeon","387","108","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_PopSrch");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtNm","415","108","224","22",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00_01_01","642","105","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("학과");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHakgwa","794","108","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_01","0","161","1284","28",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_00","0","161","155","28",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("이전 한글성명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBefKorNm","157","164","224","22",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_enable("false");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("stt_jeongjeongGbcd05","390","165","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text(">>>>>");
            obj.set_textAlign("center");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_00_00","450","161","155","28",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("이후 한글성명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAftKorNm","607","164","224","22",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_01_00","0","189","1284","28",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_00_01","0","189","155","28",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("이전 영문성명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBefEngNm","157","192","224","22",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_enable("false");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("stt_jeongjeongGbcd05_00","390","193","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text(">>>>>");
            obj.set_textAlign("center");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_00_00_00","450","189","155","28",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("이후 영문성명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAftEngNm","607","192","224","22",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_01_01","0","217","1284","28",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_00_02","0","217","155","28",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("이전 한문성명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBefChnNm","157","220","224","22",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_enable("false");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("stt_jeongjeongGbcd05_01","390","221","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text(">>>>>");
            obj.set_textAlign("center");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_00_00_01","450","217","155","28",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("이후 한문성명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAftChnNm","607","220","224","22",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_01_01_00","0","245","1284","28",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_00_02_00","0","245","155","28",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("이전 주민등록번호");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stt_jeongjeongGbcd05_01_00","390","249","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text(">>>>>");
            obj.set_textAlign("center");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_00_00_01_00","450","245","155","28",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("이후 주민등록번호");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskBefResNo","157","248","224","22",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_type("string");
            obj.set_format("######-#######");
            obj.set_textAlign("left");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskAftResNo","607","248","224","22",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_type("string");
            obj.set_format("######-#######");
            obj.set_textAlign("left");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_01_01_00_00","0","273","1284","28",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_00_02_00_00","0","273","155","28",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("이전 생년월일");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stt_jeongjeongGbcd05_01_00_00","390","277","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text(">>>>>");
            obj.set_textAlign("center");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_00_00_01_00_00","450","273","155","28",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("이후 생년월일");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskBefBirthday","157","276","224","22",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_type("string");
            obj.set_format("####-##-##");
            obj.set_textAlign("left");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskAftBirthday","607","276","224","22",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_type("string");
            obj.set_format("####-##-##");
            obj.set_textAlign("left");
            obj.set_readonly("false");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_01_01_00_00_00","0","301","1284","28",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_00_02_00_00_00","0","301","155","28",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("정정사유");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJeongjeongSayu","157","304","674","22",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Calendar("calGyeoljaeDt","157","332","224","22",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("학적부정정관리");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item10","edtHakjeokSangtae","value","dsMaster","HAKJEOK_STNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","calJeongjeongDt","value","dsMaster","JEONGJEONG_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item95","divSearch.form.edtSearchHakbeon","value","ds_input","HAKBEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item96","divSearch.form.cboSearchJeongjeong","value","ds_input","JEONGJEONG_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","cboJeongjeong","value","dsMaster","JEONGJEONG_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divSearch.form.calSearchJeongjeonFrdt","value","ds_input","JEONGJEONG_FRDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divSearch.form.calSearchJeongjeonTodt","value","ds_input","JEONGJEONG_TODT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","edtHakbeon","value","dsMaster","HAKBEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","btnHakbeon","enable","dsBindable","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edtNm","value","dsMaster","HAKSAENG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edtHakgwa","value","dsMaster","HAKGWA_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edtBefKorNm","value","dsMaster","JEONGJEONG_BEF_NAEYONG1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edtAftKorNm","value","dsMaster","JEONGJEONG_AFT_NAEYONG1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edtBefEngNm","value","dsMaster","JEONGJEONG_BEF_NAEYONG2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edtAftEngNm","value","dsMaster","JEONGJEONG_AFT_NAEYONG2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","edtBefChnNm","value","dsMaster","JEONGJEONG_BEF_NAEYONG3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","edtAftChnNm","value","dsMaster","JEONGJEONG_AFT_NAEYONG3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","mskBefResNo","value","dsMaster","JEONGJEONG_BEF_NAEYONG4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","mskAftResNo","value","ds_hakjeokbuJeongjeong","JEONGJEONG_BEF_NAEYONG4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","mskBefBirthday","value","dsMaster","JEONGJEONG_BEF_NAEYONG5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","mskAftBirthday","value","ds_hakjeokbuJeongjeong","JEONGJEONG_BEF_NAEYONG5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","edtJeongjeongSayu","value","dsMaster","JEONGJEONG_SAYU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","calGyeoljaeDt","value","dsMaster","CHEORI_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","RdoGyeoljaeYeobu","value","dsMaster","CHEORI_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("US02_2010201_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): US02_2010201_M.xfdl(학적부정정관리 관리(조회))
        * 작 성         일 명: jiback
        * 작 성         일 자: 2021/09/10
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
        this.lvchkColidDs   = "HAKBEON$JEONGJEONG_GBCD";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs = "학번$정정구분";
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
            var strDs    = "dsSearchJeongjeong|dsJeongjeong";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00065|00065";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "T|S";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
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

        };

        this.fn_PostformInit = function()
        {
        	// 현재일자
        	var currDt = objApp.gds_SystemDate.getColumn(0,"YYYYMMDD");
        	var yyyy   = currDt.substr(0, 4);

        	if(currDt.substr(4, 2) > "02" && currDt.substr(4, 2) <= "12")
        	{
        		this.divSearch.form.calSearchJeongjeonFrdt.set_value(yyyy+"0301");
        	}
        	else
        	{
        		this.divSearch.form.calSearchJeongjeonFrdt.set_value((yyyy-1)+"0301");
        	}
        	this.divSearch.form.calSearchJeongjeonTodt.set_value(currDt);
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

        //Popup callback영역
        this.fn_popupCallback = function(strId, strVal)
        {
        	switch(strId)
        	{
        		case "hakbeon" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					this.dsMaster.set_enableevent(false);
        		            this.dsMaster.setColumn(this.dsMaster.rowposition, "HAKBEON", sRtn[0]);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "HAKSAENG_NM", sRtn[1]);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "HAKGWA_NM", sRtn[2]);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "HAKJEOK_STNM", sRtn[5]);
        					this.dsMaster.set_enableevent(true);

        					this.dsHakbeon.clearData();
        					var nRow = this.dsHakbeon.addRow();

        					this.dsHakbeon.set_enableevent(false);
        		            this.dsHakbeon.setColumn(nRow, "HAKBEON", sRtn[0]);
        					this.dsHakbeon.setColumn(nRow, "HAKSAENG_NM", sRtn[1]);
        					this.dsHakbeon.setColumn(nRow, "HAKGWA_NM", sRtn[2]);
        					this.dsHakbeon.setColumn(nRow, "HAKJEOK_STNM", sRtn[5]);
        					this.dsHakbeon.setColumn(nRow, "HAKSAENG_ENM", sRtn[6]);
        					this.dsHakbeon.setColumn(nRow, "HAKSAENG_CNM", sRtn[7]);
        					this.dsHakbeon.setColumn(nRow, "RES_NO", sRtn[8]);
        					this.dsHakbeon.setColumn(nRow, "BIRTHDAY", sRtn[9]);
        					this.dsHakbeon.set_enableevent(true);
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
            var strUrl      = "/prj/US/US02/Retrieve_2010201_M.do";
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
                06. 추가 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_New = function()
        {
            var nRow = this.dsMaster.addRow();
        	this.dsMaster.setColumn(nRow, "JEONGJEONG_DT", objApp.gds_SystemDate.getColumn(0,"YYYYMMDD"));
        	this.dsMaster.setColumn(nRow, "CHEORI_GBCD", "1");
        	this.dsMaster.setColumn(nRow, "CHEORI_DT", objApp.gds_SystemDate.getColumn(0,"YYYYMMDD"));
        	this.dsMaster.setColumn(nRow, "JEONGJEONG_YYYY", this.dsBaseYyyyHakgi.getColumn(0, "YYYY"));
        	this.dsMaster.setColumn(nRow, "JEONGJEONG_HAKGI", this.dsBaseYyyyHakgi.getColumn(0, "HAKGI"));

        	this.cboJeongjeong.set_index(0);
        	this.edtNm.setFocus();
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
            var result = this.gfn_confirm( "승인처리된 학적부 정정내용은 정정구분에 따라 정정전 내용으로 복구됩니다.\n삭제하시겠습니까?", "삭제정보","","question" );

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
            var strUrl      = "/prj/US/US02/Delete_2010201_M.do";
            var strInDs     = "dsMaster=dsMaster:u";
            var strOutDs    = "";
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
            var result      = this.gfn_cmmnChkEssentialItem(this.dsMaster, this.lvchkColidDs, this.lvchkColNameDs, '', chkFocusFlg, this);

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
         * 기능 : 저장 실행
         */
        this.fn_Save = function()
        {
            if(!this.fn_PreSave())
            {
                return false;
            }
            var strSvc      = "Save";
            var strUrl      = "/prj/US/US02/Save_2010201_M.do";
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
                10. 각종 함수
        ***********************************************************************/
        // 정정구분에 따라 enable set
        this.fn_SetCompEnable = function()
        {
        	var jeongjeongGbcd = this.dsMaster.getColumn(this.dsMaster.rowposition, "JEONGJEONG_GBCD");

        	this.edtAftKorNm.set_enable(false);
        	this.edtAftEngNm.set_enable(false);
        	this.edtAftChnNm.set_enable(false);
        	this.mskAftResNo.set_enable(false);

        	// 개명
        	if(jeongjeongGbcd == "01")
        	{
        		this.edtAftKorNm.set_enable(true);
        		this.edtAftEngNm.set_enable(true);
        		this.edtAftChnNm.set_enable(true);
        	}
        	// 한자
        	else if(jeongjeongGbcd == "02")
        	{
        		this.edtAftChnNm.set_enable(true);
        	}
        	// 영문
        	else if(jeongjeongGbcd == "03")
        	{
        		this.edtAftEngNm.set_enable(true);
        	}
        	// 주민등록번호
        	else if(jeongjeongGbcd == "04")
        	{
        		this.mskAftResNo.set_enable(true);
        	}
        	// 기재오류정정
        	else if(jeongjeongGbcd == "09")
        	{
        		this.edtAftKorNm.set_enable(true);
        		this.edtAftEngNm.set_enable(true);
        		this.edtAftChnNm.set_enable(true);
        		this.mskAftResNo.set_enable(true);
        	}
        }

        // 정정전 정보 set
        this.fn_SetHakjeokInfo = function()
        {
        	var jeongjeongGbcd = this.dsMaster.getColumn(this.dsMaster.rowposition, "JEONGJEONG_GBCD");

        	this.dsMaster.setColumn(this.dsMaster.rowposition, "JEONGJEONG_BEF_NAEYONG1", null);
        	this.dsMaster.setColumn(this.dsMaster.rowposition, "JEONGJEONG_BEF_NAEYONG2", null);
        	this.dsMaster.setColumn(this.dsMaster.rowposition, "JEONGJEONG_BEF_NAEYONG3", null);
        	this.dsMaster.setColumn(this.dsMaster.rowposition, "JEONGJEONG_BEF_NAEYONG4", null);
        	this.dsMaster.setColumn(this.dsMaster.rowposition, "JEONGJEONG_BEF_NAEYONG5", null);

        	// 개명
        	if(jeongjeongGbcd == "01")
        	{
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "JEONGJEONG_BEF_NAEYONG1", this.dsHakbeon.getColumn(0, "HAKSAENG_NM"));
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "JEONGJEONG_BEF_NAEYONG2", this.dsHakbeon.getColumn(0, "HAKSAENG_ENM"));
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "JEONGJEONG_BEF_NAEYONG3", this.dsHakbeon.getColumn(0, "HAKSAENG_CNM"));
        	}
        	// 한자
        	else if(jeongjeongGbcd == "02")
        	{
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "JEONGJEONG_BEF_NAEYONG3", this.dsHakbeon.getColumn(0, "HAKSAENG_CNM"));
        	}
        	// 영문
        	else if(jeongjeongGbcd == "03")
        	{
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "JEONGJEONG_BEF_NAEYONG2", this.dsHakbeon.getColumn(0, "HAKSAENG_ENM"));
        	}
        	// 주민등록번호
        	else if(jeongjeongGbcd == "04")
        	{
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "JEONGJEONG_BEF_NAEYONG4", this.dsHakbeon.getColumn(0, "RES_NO"));
        	}
        	// 기재오류정정
        	else if(jeongjeongGbcd == "09")
        	{
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "JEONGJEONG_BEF_NAEYONG1", this.dsHakbeon.getColumn(0, "HAKSAENG_NM"));
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "JEONGJEONG_BEF_NAEYONG2", this.dsHakbeon.getColumn(0, "HAKSAENG_ENM"));
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "JEONGJEONG_BEF_NAEYONG3", this.dsHakbeon.getColumn(0, "HAKSAENG_CNM"));
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "JEONGJEONG_BEF_NAEYONG4", this.dsHakbeon.getColumn(0, "RES_NO"));
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "JEONGJEONG_BEF_NAEYONG5", this.dsHakbeon.getColumn(0, "BIRTHDAY"));
        	}
        }

        /**********************************************************************
                11. 기타 Control Event
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
            if(e.cell != this.grdMaster.getBindCellIndex("body","CHK"))
            {
                this.gfn_gridSort(obj,e);
            }
        };

        // dsMaster 컬럼 변경시
        this.dsMaster_oncolumnchanged = function(obj,e)
        {
            // 팝업 명 삭제 시 코드 초기화
        	if (e.columnid == "HAKSAENG_NM") {
        	   if (this.gfn_isNull(e.newvalue)) {
        	       obj.setColumn(obj.rowposition, "HAKBEON", "");
        	   } else {
        			if (e.oldvalue != e.newvalue)
        			{
        				this.fn_setCallHakbeonPopup(e.newvalue);
        			}
        	   }
        	}
        };

        // 정정구분 변경할 때
        this.cboJeongjeong_canitemchange = function(obj,e)
        {
        	if(this.gfn_isNull(this.dsMaster.getColumn(this.dsMaster.rowposition, "HAKBEON")) && this.gfn_isNull(this.dsMaster.getColumn(this.dsMaster.rowposition, "HAKSAENG_NM")))
        	{
        		this.alert("학생을 선택한 후 정정구분을 선택하세요.");
        		return false;
        	}
        };

        // 정정구분 아이템 변경 후 이벤트
        this.cboJeongjeong_onitemchanged = function(obj,e)
        {
        	this.fn_SetCompEnable();
        	this.fn_SetHakjeokInfo();
        };

        // 이름 입력 시도할 때
        this.edtNm_oninput = function(obj,e)
        {
        	this.edtNm.set_value(null);
        	this.edtHakgwa.set_value(null);
        	this.edtHakjeokSangtae.set_value(null);
        	this.edtBefKorNm.set_value(null);
        	this.edtBefEngNm.set_value(null);
        	this.edtBefChnNm.set_value(null);
        	this.mskBefResNo.set_value(null);
        	this.mskBefBirthday.set_value(null);
        	this.edtAftKorNm.set_value(null);
        	this.edtAftEngNm.set_value(null);
        	this.edtAftChnNm.set_value(null);
        	this.mskAftResNo.set_value(null);
        	this.mskAftBirthday.set_value(null);
        	this.edtJeongjeongSayu.set_value(null);
        	this.cboJeongjeong.set_index(0);
        };

        // 이름 입력할때
        this.edtNm_onkeyup = function(obj,e)
        {
        	if(this.dsMaster.getRowType(this.dsMaster.rowposition) == 2 && e.keycode == 13)
        	{
        		if(this.gfn_isNull(obj.value))
        		{
        			this.alert("학번 또는 성명을 입력하세요.");
        			this.edtNm.setFocus();
        			return false;
        		}
        	}
        };

        // 데이터셋 로우 변경시 로우타입에 따라 enable 변경
        this.dsMaster_onrowposchanged = function(obj,e)
        {
        	// 신규일때만 readonly : false
        	this.calJeongjeongDt.set_enable(obj.getRowType(e.newrow)==2?true:false);
        	this.edtNm.set_enable(obj.getRowType(e.newrow)==2?true:false);
        	this.cboJeongjeong.set_enable(obj.getRowType(e.newrow)==2?true:false);
        	this.btnHakbeon.set_enable(obj.getRowType(e.newrow)==2?true:false);

        	// 정정구분에 따라
        	this.fn_SetCompEnable();
        };

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
            return this.gfn_isUpdate(this.dsMaster);
        };

        /**********************************************************************
                12. 팝업
        ***********************************************************************/
        this.btnHakbeon_onclick = function(obj,e)
        {
        	var hakbeonNm = this.edtNm.value;
        	this.fn_setCallHakbeonPopup(hakbeonNm);
        };

        // 학번 popup
        this.fn_setCallHakbeonPopup = function(strSearchValue)
        {
        	this.dsHakbeon.clearData();
        	this.ds_input1.setColumn(this.ds_input1.rowposition, "HAKBEON_NM", strSearchValue);

        	if(!this.gfn_isNull(strSearchValue))
        	{
        		var strSvc 		= "SearchHakbeon";
        		var strUrl 		= "/prj/com/Retrieve_P04.do";
        		var strInDs  	= "ds_input=ds_input1";
        		var strOutDs 	= "dsHakbeon=dsMaster";
        		var strArg 		= "";
        		var GBV_MENUID    = objApp.gv_cutPrgId;
        		if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
        		{
        		  strArg = "GBV_MENUID=" + GBV_MENUID + " " + strArg;
        		}
        		var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        		var strASync    = false;			//생략이나 공백일시에는 ASync=true,싱크시는 false로

        		this.gfn_Transaction( strSvc
        							, strUrl
        							, strInDs
        							, strOutDs
        							, strArg
        							, strCallBack
        							, strASync);
        	}

        	if(this.dsHakbeon.rowcount == 1)
        	{
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "HAKBEON", this.dsHakbeon.getColumn(0,"HAKBEON"));
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "HAKSAENG_NM", this.dsHakbeon.getColumn(0,"HAKSAENG_NM"));
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "HAKGWA_NM", this.dsHakbeon.getColumn(0,"HAKGWA_NM"));
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "HAKJEOK_STNM", this.dsHakbeon.getColumn(0,"HAKJEOK_SANGTAE_NM"));
        	}
        	else
        	{
        		var oArg = {hakbeonNm:strSearchValue, menuId:objApp.gv_cutPrgId};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";
        		this.gfn_openPopup( "hakbeon","com::COMM_P04.xfdl",oArg,sPopupCallBack,oOption);
        	}
        }

        /**********************************************************************
                13. 검색창 엔터키 조회
        ***********************************************************************/
        this.divSearch_calSearchJeongjeonFrdt_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"JEONGJEONG_FRDT",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_calSearchJeongjeonTodt_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"JEONGJEONG_TODT",obj.value);
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

        this.divSearch_cboSearchJeongjeong_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"JEONGJEONG_GBCD",obj.value);
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
            this.divSearch.form.edtSearchHakbeon.addEventHandler("onkeydown",this.divSearch_edtSearchHakbeon_onkeydown,this);
            this.divSearch.form.cboSearchJeongjeong.addEventHandler("onkeydown",this.divSearch_cboSearchJeongjeong_onkeydown,this);
            this.divSearch.form.calSearchJeongjeonFrdt.addEventHandler("onkeydown",this.divSearch_calSearchJeongjeonFrdt_onkeydown,this);
            this.divSearch.form.calSearchJeongjeonTodt.addEventHandler("onkeydown",this.divSearch_calSearchJeongjeonTodt_onkeydown,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster.addEventHandler("oncellclick",this.grdMaster_oncellclick,this);
            this.cboJeongjeong.addEventHandler("canitemchange",this.cboJeongjeong_canitemchange,this);
            this.cboJeongjeong.addEventHandler("onitemchanged",this.cboJeongjeong_onitemchanged,this);
            this.btnHakbeon.addEventHandler("onclick",this.btnHakbeon_onclick,this);
            this.edtNm.addEventHandler("oninput",this.edtNm_oninput,this);
            this.edtNm.addEventHandler("onkeyup",this.edtNm_onkeyup,this);
            this.dsMaster.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
        };
        this.loadIncludeScript("US02_2010201_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
