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
            this.set_titletext("등록공지관리(신입생)");
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
            obj._setContents("<ColumnInfo><Column id=\"DEUNGROK_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"GONGJI_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"DEUNGROK_CHASU_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"CHULRYEOK_FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"CHULRYEOK_FRTM\" type=\"STRING\" size=\"256\"/><Column id=\"CHULRYEOK_TODT\" type=\"STRING\" size=\"256\"/><Column id=\"CHULRYEOK_TOTM\" type=\"STRING\" size=\"256\"/><Column id=\"DEUNGROK_FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"DEUNGROK_TODT\" type=\"STRING\" size=\"256\"/><Column id=\"ANNAE_SAHANG\" type=\"STRING\" size=\"256\"/><Column id=\"HYEONJAE_CHASU_YN\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_DT\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"DEUNGROK_YYYY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBaseYyyyHakgi", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetail", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DEUNGROK_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"GONGJI_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"DEUNGROK_CHASU_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_BANK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_GBCD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGongji", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REF_3\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsChasu", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REF_3\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REF_3\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMojip", this);
            obj._setContents("<ColumnInfo><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dInput", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DEUNGROK_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"GONGJI_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"DEUNGROK_CHASU_GBCD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBank", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mojipInput", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_1_01_00_00_00","990","185","650","28",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_1_01_00_00","990","158","650","28",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_1_01","990","131","650","28",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_1_00","990","104","650","28",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","520","42","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("18");
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
            obj.set_taborder("19");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","0","47","110","31",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("등록공지 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","0","77","960",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"47\"/><Column size=\"105\"/><Column size=\"174\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"97\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"년도\"/><Cell col=\"2\" text=\"공지구분\"/><Cell col=\"3\" text=\"모집구분\"/><Cell col=\"4\" text=\"차수\"/><Cell col=\"5\" text=\"현재 차수여부\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:DEUNGROK_YYYY\"/><Cell col=\"2\" text=\"bind:GONGJI_GBCD\" displaytype=\"combotext\" combodataset=\"dsGongji\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"3\" text=\"bind:MOJIP_GBCD\" displaytype=\"combotext\" combodataset=\"dsMojip\" combocodecol=\"MOJIP_GBCD\" combodatacol=\"MOJIP_NM\"/><Cell col=\"4\" text=\"bind:DEUNGROK_CHASU_GBCD\" displaytype=\"combotext\" combodataset=\"dsChasu\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"5\" text=\"bind:HYEONJAE_CHASU_YN\" displaytype=\"combotext\" combodataset=\"dsYn\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01","960","54","30",null,null,"30",null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("30");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","990","47","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("상세정보");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00","440","69","1160","8",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_1","990","77","650","28",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2","990","77","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("등록년도");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_00","990","104","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("모집구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_00_00","990","131","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("출력시작일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_01","1247","77","90","28",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("공지구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_00_01","1247","104","90","28",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("차수");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboGongji","1339","80","298","22",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_readonly("false");
            obj.set_innerdataset("dsGongji");
            obj.set_cssclass("point");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("cboChasu","1339","107","298","22",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsChasu");
            obj.set_cssclass("point");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_00_00_01_00","990","158","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("등록시작일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_00_00_01_00_00","990","185","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("현재차수여부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_1_00_00","990","394","650",null,null,"0",null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_00_02_01","990","394","100",null,null,"0",null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("등록장소");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_1_00_00_00","990","212","649","184",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_00_02_01_00","990","212","100","184",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("안내(유의)사항");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboMojip","1092","107","153","22",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_codecolumn("MOJIP_GBCD");
            obj.set_datacolumn("MOJIP_NM");
            obj.set_innerdataset("dsMojip");
            obj.set_cssclass("point");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtAnnaesahang","1093","216","543","176",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_maxlength("333");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","116","51","124","24",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"42","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","16","0","1620","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","20","31","1610","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00","7","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("등록년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","100","9","150","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","37",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","90","0","10","37",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnDeungrokYYYY","1092","80","153","22",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_enable("false");
            obj.set_cssclass("point");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.addChild(obj.name, obj);

            obj = new Calendar("calIpgukDt","241","-224","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calChulryeokFrDt","1092","134","153","22",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskChulryeokFrTm","1247","134","50","22",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_format("##:##");
            obj.set_type("string");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","1303","135","30","20",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Calendar("calChulryeokToDt","1339","134","153","22",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskChulryeokToTm","1494","134","50","22",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_format("##:##");
            obj.set_type("string");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Calendar("calDeungrokFrDt","1092","161","153","22",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00","1251","162","30","20",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Calendar("calDeungrokToDt","1287","161","153","22",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cboChasuYn","1092","188","153","22",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsYn");
            obj.set_cssclass("point");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","1446","408","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnNew","1511","408","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("신규");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel","1575","408","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","1147","396","100","45",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("↑\r\n45\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","1090","433",null,"8","0",null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grdDetail","1095","441","540",null,null,"5",null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_binddataset("dsDetail");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"352\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"등록은행\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:BANK_GBCD\" displaytype=\"expr:DEUNGROK_YYYY != &apos;&apos; ? &apos;combocontrol&apos; : &apos;normal&apos;\" edittype=\"expr:DEUNGROK_YYYY != &apos;&apos; ? &apos;combo&apos; : &apos;none&apos;\" combodataset=\"dsBank\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","1090","500","5","217",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","1635","400","5","317",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_00","1090","795",null,"5","0",null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("등록공지관리(신입생)");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item18","cboSearchHakjeokSangtae00_00_02","value","ds_input","HAKJEOK_STCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","cboSearchHakjeokSangtae00_00","value","ds_input","HAKJEOK_STCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","cboSearchHakjeokSangtae00_01","value","ds_input","HAKJEOK_STCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","cboSearchHakjeokSangtae00","value","ds_input","HAKJEOK_STCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","cboSearchHakjeokSangtae01","value","ds_input","HAKJEOK_STCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","cboMojip","value","dsMaster","MOJIP_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","cboGongji","value","dsMaster","GONGJI_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","cboChasu","value","dsMaster","DEUNGROK_CHASU_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","txtAnnaesahang","value","dsMaster","ANNAE_SAHANG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSearch.form.spnSearchYYYY","value","ds_input","DEUNGROK_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","spnDeungrokYYYY","value","dsMaster","DEUNGROK_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","calIpgukDt","value","dsMaster","IPGUK_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","calChulryeokFrDt","value","dsMaster","CHULRYEOK_FRDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","mskChulryeokFrTm","value","dsMaster","CHULRYEOK_FRTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","calChulryeokToDt","value","dsMaster","CHULRYEOK_TODT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","mskChulryeokToTm","value","dsMaster","CHULRYEOK_TOTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","calDeungrokFrDt","value","dsMaster","DEUNGROK_FRDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","calDeungrokToDt","value","dsMaster","DEUNGROK_TODT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","cboChasuYn","value","dsMaster","HYEONJAE_CHASU_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
            this._addPreloadList("data","","dsDetail");
        };
        
        // User Script
        this.registerScript("UR02_2050201_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UR02_2050201_M.xfdl(등록 공지 관리(신입생) 관리(조회))
        * 작 성         일 명: jiback
        * 작 성         일 자: 2021/10/06
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
        this.lvchkColidDs   = "DEUNGROK_YYYY$GONGJI_GBCD$MOJIP_GBCD$DEUNGROK_CHASU_GBCD$HYEONJAE_CHASU_YN";
        this.lvchkColNameDs = "등록년도$공지구분$모집구분$차수$현재차수여부";
        this.lvchkColidDsDetail   = "BANK_GBCD";
        this.lvchkColNameDsDetail = "등록은행";
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
            var strDs    = "dsGongji|dsChasu|dsYn|dsBank";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "03005|03006|00051|03007";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "S|S|S|X";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
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
        	var strEopmuGbcd = "UR";
        	var strUseYn     = "1";
            // gfn_BaseYyyyHakgiLoad(데이터셋, svcId , 업무구분, 사용구분);
            // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.gfn_BaseYyyyHakgiLoad(strDs
                                      , svcId
                                      , strEopmuGbcd
                                      , strUseYn);
        };

        this.fn_PostInit = function()
        {
        	this.dsBank.filter("CODE != '09'");
        };

        this.fn_PostBaseYyyyHakgiInit = function()
        {
        	if (this.dsBaseYyyyHakgi.rowcount > 0)
        	{
        		this.ds_input.setColumn(0, "DEUNGROK_YYYY",  this.dsBaseYyyyHakgi.getColumn(0, "YYYY"));
        		this.ds_mojipInput.setColumn(0, "YYYY",  this.dsBaseYyyyHakgi.getColumn(0, "YYYY"));
        	}
        	this.fn_Mojip();
        };

        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {
            this.gfn_clearSortAll(this.grdMaster);
        	this.gfn_clearSortAll(this.grdDetail);
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
        			case "Mojip":
                            this.fn_PostMojip();
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
            var strUrl      = "/prj/UR/UR02/Retrieve_2050201_M.do";
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
                06. 조회 함수 선언(디테일 함수)
        ***********************************************************************/
        this.fn_PreDRet = function()
        {
            // 조회조건 셋팅
        	this.ds_dInput.setColumn(0, "DEUNGROK_YYYY", this.dsMaster.getColumn(this.dsMaster.rowposition, "DEUNGROK_YYYY"));
        	this.ds_dInput.setColumn(0, "GONGJI_GBCD", this.dsMaster.getColumn(this.dsMaster.rowposition, "GONGJI_GBCD"));
        	this.ds_dInput.setColumn(0, "MOJIP_GBCD", this.dsMaster.getColumn(this.dsMaster.rowposition, "MOJIP_GBCD"));
        	this.ds_dInput.setColumn(0, "DEUNGROK_CHASU_GBCD", this.dsMaster.getColumn(this.dsMaster.rowposition, "DEUNGROK_CHASU_GBCD"));

            return true;
        };

        // 등록장소 조회
        this.fn_DRet = function()
        {
            if(!this.fn_PreDRet())
            {
                return false;
            }
            var strSvc      = "DRet";
            var strUrl      = "/prj/UR/UR02/Retrieve_2050201_M_Detail.do";
            var strInDs     = "ds_dInput=ds_dInput";
            var strOutDs    = "dsDetail=dsDetail";
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

        /**********************************************************************
                07. 추가 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 추가 전 실행(기본체크사항)
         */
        this.fn_PreNew = function()
        {
        	if(this.dsBaseYyyyHakgi.getColumn(0, "YYYY") != this.ds_input.getColumn(0, "DEUNGROK_YYYY"))
        	{
        		this.alert("등록 가능한 년도가 아닙니다.\n검색 조건의 년도를 다시 확인해주세요.");
        		return false;
        	}
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
            var nRow = this.dsMaster.addRow();
        	this.dsMaster.setColumn(nRow, "DEUNGROK_YYYY", this.dsBaseYyyyHakgi.getColumn(0, "YYYY"));
        	this.dsMaster.setColumn(nRow, "MOJIP_GBCD", "");
        };

        /**********************************************************************
                08. 디테일 추가 함수 선언
        ***********************************************************************/
        this.btnNew_onclick = function(obj,e)
        {
        	var nRow = this.dsDetail.addRow();
        	var rRow = this.dsMaster.rowposition;

        	this.dsDetail.setColumn(nRow,"DEUNGROK_YYYY",this.dsMaster.getColumn(rRow,"DEUNGROK_YYYY"));
        	this.dsDetail.setColumn(nRow,"GONGJI_GBCD",this.dsMaster.getColumn(rRow,"GONGJI_GBCD"));
        	this.dsDetail.setColumn(nRow,"MOJIP_GBCD",this.dsMaster.getColumn(rRow,"MOJIP_GBCD"));
        	this.dsDetail.setColumn(nRow,"DEUNGROK_CHASU_GBCD",this.dsMaster.getColumn(rRow,"DEUNGROK_CHASU_GBCD"));
        };

        /**********************************************************************
                09. 삭제 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 삭제 버튼 실행
         */
        this.fn_PreDel = function()
        {
            //멀티삭제용도
            if(this.dsMaster.rowcount < 1)
            {
                this.gfn_alert("삭제할 데이터가 없습니다.","삭제정보","","warning");
                return false;
            }
            var result = this.gfn_confirm( "현재선택행을 삭제하시겠습니까?", "삭제정보","","question" );
            if(result == 0)
            {
                return false;
            }

            this.dsMaster.deleteRow(this.dsMaster.rowposition);
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
            var strUrl      = "/prj/UR/UR02/Delete_2050201_M.do";
            var strInDs     = "dsMaster=dsMaster:u";
            var strOutDs    = "";
            var strArg      = "";
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
                10. 디테일 삭제 함수 선언
        ***********************************************************************/
        this.btnDel_onclick = function(obj,e)
        {
            if(this.dsDetail.rowcount < 1)
            {
                this.gfn_alert("삭제할 데이터가 없습니다.","삭제정보","","warning");
                return false;
            }
            var result = this.gfn_confirm( "현재선택행을 삭제하시겠습니까?", "삭제정보","","question" );
            if(result == 0)
            {
                return false;
            }

            this.dsDetail.deleteRow(this.dsDetail.rowposition);
        	this.fn_DDel();
        };

        this.fn_DDel = function()
        {
            var strSvc      = "DDel";
            var strUrl      = "/prj/UR/UR02/Delete_2050201_M_Detail.do";
            var strInDs     = "dsDetail=dsDetail:u";
            var strOutDs    = "";
            var strArg      = "";
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

        /**********************************************************************
                11. 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave = function()
        {
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

        	var yChk = 0;
        	for(var i=0; i<this.dsMaster.rowcount; i++)
        	{
        		if(this.dsMaster.getColumn(i, "HYEONJAE_CHASU_YN") == "1")
        		{
        			yChk++;
        		}
        	}

        	if(yChk != 1)
        	{
        		this.alert("현재 차수 여부가 '예'인 항목은 하나만 가능합니다.\n다시 확인해주세요.");
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
            var strUrl      = "/prj/UR/UR02/Save_2050201_M.do";
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
                12. 디테일 저장 함수 선언
        ***********************************************************************/
        this.btnSave_onclick = function(obj,e)
        {
            if(!this.gfn_isUpdate(this.dsDetail))
            {
                this.gfn_alert("변경된 이력이 없습니다.","저장정보","","question");
                return false;
            }

        	// 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
            var chkFocusFlg = true;
            var result      = this.gfn_cmmnChkEssentialItem(this.dsDetail, this.lvchkColidDsDetail, this.lvchkColNameDsDetail, this.grdDetail, chkFocusFlg, this);

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
            this.fn_DSave();
        };

        this.fn_DSave = function()
        {
            var strSvc      = "DSave";
            var strUrl      = "/prj/UR/UR02/Save_2050201_M_Detail.do";
            var strInDs     = "ds_dInput=ds_dInput:a ";
                strInDs    += "dsDetail=dsDetail:u";
            var strOutDs    = "dsDetail=dsDetail";
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
                13. 팁
        ***********************************************************************/
        this.fn_Tip = function()
        {
        	this.alert("도움말 준비중입니다.");
        };

        /**********************************************************************
                14. 각종함수
        ***********************************************************************/
        // 공통 모집구분 조회
        this.fn_Mojip = function()
        {
            var strSvc      = "Mojip";
            var strUrl      = "/prj/UR/UR_COMMON/Retrieve_COMMON_M_Mojip.do";
            var strInDs     = "ds_mojipInput=ds_mojipInput";
            var strOutDs    = "dsMojip=dsMojip";
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

        this.fn_PostMojip = function()
        {
        	this.dsMojip.insertRow(0);
        	this.dsMojip.setColumn(0, "MOJIP_GBCD", "");
        	this.dsMojip.setColumn(0, "MOJIP_NM", "선택");
        };

        /**********************************************************************
                15. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj,e)
        {
            this.gfn_gridSort(obj,e);
        };
        this.grdDetail_onheaddblclick = function(obj,e)
        {
        	this.gfn_gridSort(obj,e);
        };

        this.dsMaster_canrowposchange = function(obj,e)
        {
        	if(this.fn_beforeDetailclose())
        	{
        		var result = this.gfn_confirm( "변경된 데이터가 있습니다. 그래도 이동하시겠습니까?", "저장","", "question" );
        		if(result == 0)
        		{
        			return false;
        		}
        	}
        	return true;
        };

        this.dsMaster_onrowposchanged = function(obj,e)
        {
        	this.dsDetail.clearData();
        	if(this.dsMaster.getRowType(this.dsMaster.rowposition) == Dataset.ROWTYPE_INSERT)
        	{
        		this.cboGongji.set_enable(true);
        		this.cboMojip.set_enable(true);
        		this.cboChasu.set_enable(true);

        		this.btnSave.set_visible(false);
        		this.btnNew.set_visible(false);
        		this.btnDel.set_visible(false);
        	}
        	else
        	{
        		this.cboGongji.set_enable(false);
        		this.cboMojip.set_enable(false);
        		this.cboChasu.set_enable(false);

        		this.btnSave.set_visible(true);
        		this.btnNew.set_visible(true);
        		this.btnDel.set_visible(true);
        	}

        	this.fn_DRet();
        };

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
           var value = false;

           if(this.gfn_isUpdate(this.dsMaster))
           {
              value = true;
           }
           else if(this.gfn_isUpdate(this.dsDetail))
           {
              value = true;
           }

           return value;
        };

        this.fn_beforeDetailclose = function()
        {
            return this.gfn_isUpdate(this.dsDetail);
        };

        /**********************************************************************
                16. 검색창 엔터키 조회
        ***********************************************************************/
        this.divSearch_spnSearchYYYY_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"DEUNGROK_YYYY",obj.value);
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
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster.addEventHandler("onselectchanged",this.grdMaster_onselectchanged,this);
            this.grdMaster.addEventHandler("oncellclick",this.grdMaster_oncellclick,this);
            this.Static01_01_00_00_00_01.addEventHandler("onclick",this.Static01_01_00_00_00_01_onclick,this);
            this.stc_2.addEventHandler("onclick",this.stc_2_onclick,this);
            this.stc_2_00.addEventHandler("onclick",this.stc_2_00_onclick,this);
            this.cboChasu.addEventHandler("canitemchange",this.cboSilseup_canitemchange,this);
            this.cboMojip.addEventHandler("onitemchanged",this.cboGyeyeol_onitemchanged,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onkeydown",this.divSearch_spnSearchYYYY_onkeydown,this);
            this.spnDeungrokYYYY.addEventHandler("onkeydown",this.divSearch_spnSearchYYYY_onkeydown,this);
            this.cboChasuYn.addEventHandler("onitemchanged",this.cboGyeyeol_onitemchanged,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.btnNew.addEventHandler("onclick",this.btnNew_onclick,this);
            this.btnDel.addEventHandler("onclick",this.btnDel_onclick,this);
            this.grdDetail.addEventHandler("onselectchanged",this.grdMaster_onselectchanged,this);
            this.grdDetail.addEventHandler("onheaddblclick",this.grdDetail_onheaddblclick,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsMaster.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
        };
        this.loadIncludeScript("UR02_2050201_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
