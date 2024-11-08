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
            this.set_titletext("유학생정보관리");
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
            obj._setContents("<ColumnInfo><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"50\"/><Column id=\"DAEHAK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"HAKJEOK_STCD\" type=\"STRING\" size=\"3\"/><Column id=\"BYEONDONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JIDOGYOSU_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JIDOGYOSU_NM\" type=\"STRING\" size=\"20\"/><Column id=\"HAKNYEONJE_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"8\"/><Column id=\"GENDER_CD\" type=\"STRING\" size=\"1\"/><Column id=\"GUKJEOK_CD\" type=\"STRING\" size=\"3\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"10\"/><Column id=\"IPHAK_DT\" type=\"STRING\" size=\"8\"/><Column id=\"JEONGWONNAEOE_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"IPHAK_JEONHYEONG_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"IPHAK_TYCD\" type=\"STRING\" size=\"3\"/><Column id=\"IPHAK_HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"CHULSINDAEHAK_NM\" type=\"STRING\" size=\"300\"/><Column id=\"CHULSINDAEHAK_HAKGWA_NM\" type=\"STRING\" size=\"200\"/><Column id=\"PYEONIP_HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"YEOGWON_NO\" type=\"STRING\" size=\"10\"/><Column id=\"CHERYU_JAGYEOK\" type=\"STRING\" size=\"100\"/><Column id=\"CHERYU_ED_DT\" type=\"STRING\" size=\"8\"/><Column id=\"IPGUK_DT\" type=\"STRING\" size=\"8\"/><Column id=\"CHULGUK_DT\" type=\"STRING\" size=\"8\"/><Column id=\"BIGO\" type=\"STRING\" size=\"500\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"35\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"GYEYEOL_CD\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"8\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"100\"/><Column id=\"HAKJEOK_STCD\" type=\"STRING\" size=\"256\"/><Column id=\"NUMNAME\" type=\"STRING\" size=\"10\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"256\"/><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"GYEYEOL_CD\"/><Col id=\"HAKGWA_CD\"/><Col id=\"JEONGONG_CD\"/></Row></Rows>");
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


            obj = new Dataset("dsDeptAll", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_LV\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHaknyeon", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakjeok", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGender", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJuya", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYuhyung", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsByeondong", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHaknyeonje", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMojip", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJeongwon", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJeonhyung", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGukjeok", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsChongSeongjeok", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"SINCHEONG_HAKGISU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"ISU_HAKGISU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SINCHEONG_GWAMOKSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHWIDEUK_GWAMOKSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYOYANG_ISU_HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEONGONG_ISU_HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GONGTONG_ISU_HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYOJIK_ISU_HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYOYANG_JEOMSUGYE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEONGONG_JEOMSUGYE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GONGTONG_JEOMSUGYE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYOJIK_JEOMSUGYE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYOYANG_JEOMSU_AVG\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEONGONG_JEOMSU_AVG\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GONGTONG_JEOMSU_AVG\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYOJIK_JEOMSU_AVG\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SINCHEONG_HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHWIDEUK_HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PYEONGJEOMGYE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PYEONGJEOM_AVG\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEOMSUGYE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEOMSU_AVG\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HAKGWA_INWONSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HAKGWA_SEOKCHA\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYOYANG_PYEONGJEOM_AVG\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEONGONG_PYEONGJEOM_AVG\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GONGTONG_PYEONGJEOM_AVG\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYOJIK_PYEONGJEOM_AVG\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BIGO\" type=\"STRING\" size=\"500\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgiSeongjeok", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"YYYY_HAKGI\" type=\"STRING\" size=\"65532\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"SINCHEONG_GWAMOKSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHWIDEUK_GWAMOKSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SINCHEONG_HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHWIDEUK_HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PYEONGJEOMGYE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PYEONGJEOM_AVG\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEOMSUGYE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEOMSU_AVG\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYEONGGO_YN\" type=\"STRING\" size=\"1\"/><Column id=\"GYEONGGO_DT\" type=\"STRING\" size=\"8\"/><Column id=\"YUGEUP_YN\" type=\"STRING\" size=\"1\"/><Column id=\"YUGEUP_SAYU\" type=\"STRING\" size=\"100\"/><Column id=\"HAKGWA_INWONSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HAKGWA_SEOKCHA\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"INJEONG_YN\" type=\"STRING\" size=\"1\"/><Column id=\"HAKNYEON_INWONSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HAKNYEON_SEOKCHA\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BIGO\" type=\"STRING\" size=\"500\"/><Column id=\"SEOKCHA\" type=\"STRING\" size=\"65532\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGwamokSeongjeok", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"YYYY_HAKGI\" type=\"STRING\" size=\"65532\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"GYOGWAMOK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"GYOGWAMOK_NM\" type=\"STRING\" size=\"200\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"BUNBAN\" type=\"STRING\" size=\"3\"/><Column id=\"ISU_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"ISU_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DAMDANG_GYOSU_CD\" type=\"STRING\" size=\"10\"/><Column id=\"SUEOP_SIGAN\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYEOLSEOK_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHULSEOK_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GWAJE_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JUNGGAN_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GIMAL_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GITA_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHWIDEUK_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DEUNGGEUP\" type=\"STRING\" size=\"10\"/><Column id=\"PYEONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SUGANG_GUBUN\" type=\"STRING\" size=\"10\"/><Column id=\"SUGANG_GUBUN_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"JAESUGANG_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"JAESUGANG_HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"JAESUGANG_GYOGWAMOK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DAECHE_GWAJEONG_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"DAECHE_GWAJEONG_HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"DAECHE_GWAJEONG_HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"DAECHE_GWAJEONG_GWAMOK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"SEONGJEOK_INJEONG_YN\" type=\"STRING\" size=\"1\"/><Column id=\"SEONGJEOK_INJEONG_SAYU\" type=\"STRING\" size=\"1\"/><Column id=\"ISU_YN\" type=\"STRING\" size=\"1\"/><Column id=\"BYEONDONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"BYEONDONG_SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"ORG_ISU_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"CHWISO_DT\" type=\"STRING\" size=\"8\"/><Column id=\"BIGO\" type=\"STRING\" size=\"500\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdMaster","0","77",null,null,"1271","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"90\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"학번\"/><Cell col=\"2\" text=\"성명\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:HAKBEON\"/><Cell col=\"2\" text=\"bind:HAKSAENG_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","0","52",null,"22","1485",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("학생목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","87","51",null,"24","1430",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("divGibon",null,"77","1242","123","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01","-12","9","88","22",null,null,null,null,null,null,this.divGibon.form);
            obj.set_taborder("2");
            obj.set_text("학번");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divGibon.addChild(obj.name, obj);

            obj = new Edit("edtHakbeon","86","9","186","22",null,null,null,null,null,null,this.divGibon.form);
            obj.set_taborder("0");
            obj.set_readonly("true");
            this.divGibon.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00","640","8","66","22",null,null,null,null,null,null,this.divGibon.form);
            obj.set_taborder("3");
            obj.set_text("성별");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divGibon.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00_00","911","8","99","22",null,null,null,null,null,null,this.divGibon.form);
            obj.set_taborder("4");
            obj.set_text("생년월일");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divGibon.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01","10","36","66","22",null,null,null,null,null,null,this.divGibon.form);
            obj.set_taborder("5");
            obj.set_text("계열");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divGibon.addChild(obj.name, obj);

            obj = new Combo("cboGyeyeol","86","36","186","22",null,null,null,null,null,null,this.divGibon.form);
            obj.set_taborder("1");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_innerdataset("dsDeptAll");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divGibon.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01_00","337","36","66","22",null,null,null,null,null,null,this.divGibon.form);
            obj.set_taborder("6");
            obj.set_text("학과");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divGibon.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00_01","614","36","92","22",null,null,null,null,null,null,this.divGibon.form);
            obj.set_taborder("7");
            obj.set_text("전공");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divGibon.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","117",null,null,null,null,null,null,this.divGibon.form);
            obj.set_taborder("8");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divGibon.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","16","0","1620","9",null,null,null,null,null,null,this.divGibon.form);
            obj.set_taborder("9");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divGibon.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","20","112","1610","9",null,null,null,null,null,null,this.divGibon.form);
            obj.set_taborder("10");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divGibon.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_02","26","31","1600","5",null,null,null,null,null,null,this.divGibon.form);
            obj.set_taborder("11");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 6pt/normal \"Arial\"");
            this.divGibon.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00","272","-1","56","120",null,null,null,null,null,null,this.divGibon.form);
            obj.set_taborder("12");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divGibon.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00","76","0","10","137",null,null,null,null,null,null,this.divGibon.form);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divGibon.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_01","404","0","10","117",null,null,null,null,null,null,this.divGibon.form);
            obj.set_taborder("14");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divGibon.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_01_00","707","0","10","117",null,null,null,null,null,null,this.divGibon.form);
            obj.set_taborder("15");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divGibon.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00_00_00","903","-1","56","100",null,null,null,null,null,null,this.divGibon.form);
            obj.set_taborder("16");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divGibon.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00","1213","0","27","67",null,null,null,null,null,null,this.divGibon.form);
            obj.set_taborder("17");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divGibon.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_02_00","26","58","1600","5",null,null,null,null,null,null,this.divGibon.form);
            obj.set_taborder("18");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 6pt/normal \"Arial\"");
            this.divGibon.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01_01","10","63","66","22",null,null,null,null,null,null,this.divGibon.form);
            obj.set_taborder("19");
            obj.set_text("학년");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divGibon.addChild(obj.name, obj);

            obj = new Combo("cboHaknyeon","86","63","186","22",null,null,null,null,null,null,this.divGibon.form);
            obj.set_taborder("20");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_innerdataset("dsHaknyeon");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divGibon.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_02_00_00","26","85","1600","5",null,null,null,null,null,null,this.divGibon.form);
            obj.set_taborder("21");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 6pt/normal \"Arial\"");
            this.divGibon.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01_01_00","0","90","76","22",null,null,null,null,null,null,this.divGibon.form);
            obj.set_taborder("22");
            obj.set_text("학적상태");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divGibon.addChild(obj.name, obj);

            obj = new Combo("cboHakjeokSangtae","86","90","186","22",null,null,null,null,null,null,this.divGibon.form);
            obj.set_taborder("23");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_innerdataset("dsHakjeok");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divGibon.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01_00_01","337","63","66","22",null,null,null,null,null,null,this.divGibon.form);
            obj.set_taborder("24");
            obj.set_text("학년제");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divGibon.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01_00_01_00","307","90","96","22",null,null,null,null,null,null,this.divGibon.form);
            obj.set_taborder("25");
            obj.set_text("최종변동상태");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divGibon.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01_00_02","337","9","66","22",null,null,null,null,null,null,this.divGibon.form);
            obj.set_taborder("26");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divGibon.addChild(obj.name, obj);

            obj = new Combo("cboHakgwa","414","36","186","22",null,null,null,null,null,null,this.divGibon.form);
            obj.set_taborder("27");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_innerdataset("dsDeptAll");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divGibon.addChild(obj.name, obj);

            obj = new Combo("cboHaknyeonje","414","63","186","22",null,null,null,null,null,null,this.divGibon.form);
            obj.set_taborder("28");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_innerdataset("dsHaknyeonje");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divGibon.addChild(obj.name, obj);

            obj = new Combo("cboByeondong","414","90","186","22",null,null,null,null,null,null,this.divGibon.form);
            obj.set_taborder("29");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_innerdataset("dsByeondong");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divGibon.addChild(obj.name, obj);

            obj = new Edit("edtNm","414","9","186","22",null,null,null,null,null,null,this.divGibon.form);
            obj.set_taborder("30");
            obj.set_readonly("true");
            this.divGibon.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00_01","600","-1","56","120",null,null,null,null,null,null,this.divGibon.form);
            obj.set_taborder("31");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divGibon.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00_01_00","614","63","92","22",null,null,null,null,null,null,this.divGibon.form);
            obj.set_taborder("32");
            obj.set_text("입학유형");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divGibon.addChild(obj.name, obj);

            obj = new Combo("cboJeongong","717","36","186","22",null,null,null,null,null,null,this.divGibon.form);
            obj.set_taborder("33");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_innerdataset("dsDeptAll");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divGibon.addChild(obj.name, obj);

            obj = new Combo("cboSeongbyeol","717","9","186","22",null,null,null,null,null,null,this.divGibon.form);
            obj.set_taborder("34");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_innerdataset("dsGender");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divGibon.addChild(obj.name, obj);

            obj = new Combo("cboYuhyung","717","63","186","22",null,null,null,null,null,null,this.divGibon.form);
            obj.set_taborder("35");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_innerdataset("dsYuhyung");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divGibon.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00_00_00","911","36","99","22",null,null,null,null,null,null,this.divGibon.form);
            obj.set_taborder("36");
            obj.set_text("주야구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divGibon.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00_00_00_00","911","63","99","22",null,null,null,null,null,null,this.divGibon.form);
            obj.set_taborder("37");
            obj.set_text("지도교수");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divGibon.addChild(obj.name, obj);

            obj = new Combo("cboJuya","1021","36","186","22",null,null,null,null,null,null,this.divGibon.form);
            obj.set_taborder("38");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_innerdataset("dsJuya");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divGibon.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_01_00_00","1011","0","10","117",null,null,null,null,null,null,this.divGibon.form);
            obj.set_taborder("39");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divGibon.addChild(obj.name, obj);

            obj = new MaskEdit("mskBirthday","1021","9","186","22",null,null,null,null,null,null,this.divGibon.form);
            obj.set_taborder("40");
            obj.set_format("####-##-##");
            obj.set_type("string");
            obj.set_readonly("true");
            this.divGibon.addChild(obj.name, obj);

            obj = new Edit("edtJidogyosu","1021","63","186","22",null,null,null,null,null,null,this.divGibon.form);
            obj.set_taborder("41");
            obj.set_readonly("true");
            this.divGibon.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00",null,"52","330","22","913",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("학생 기본 정보");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Tab("tab",null,"235","1242",null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_tabindex("0");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Tabpage("TabPage1",this.tab);
            obj.set_text("유학생 정보");
            this.tab.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","10","11","163","22",null,null,null,null,null,null,this.tab.TabPage1.form);
            obj.set_taborder("2");
            obj.set_text("입학정보");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.TabPage1.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","458","0","100","35",null,null,null,null,null,null,this.tab.TabPage1.form);
            obj.set_taborder("3");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.TabPage1.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","15","28","320","8",null,null,null,null,null,null,this.tab.TabPage1.form);
            obj.set_taborder("4");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.TabPage1.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","21","10","451",null,null,null,null,null,null,this.tab.TabPage1.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.TabPage1.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,"21","10","447","0",null,null,null,null,null,this.tab.TabPage1.form);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.TabPage1.addChild(obj.name, obj);

            obj = new Div("divIphak","10","36","1102","123",null,null,null,null,null,null,this.tab.TabPage1.form);
            obj.set_taborder("0");
            obj.set_background("white");
            obj.set_border("1px solid #4c4b66");
            obj.set_text("");
            this.tab.TabPage1.addChild(obj.name, obj);

            obj = new Static("stc_13_06","94","5","1001","28",null,null,null,null,null,null,this.tab.TabPage1.form.divIphak.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.TabPage1.form.divIphak.addChild(obj.name, obj);

            obj = new Static("stc_12_06","94","5","175","28",null,null,null,null,null,null,this.tab.TabPage1.form.divIphak.form);
            obj.set_taborder("4");
            obj.set_text("모집구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.TabPage1.form.divIphak.addChild(obj.name, obj);

            obj = new Edit("edtSuhoemNo","604","8","154","22",null,null,null,null,null,null,this.tab.TabPage1.form.divIphak.form);
            obj.set_taborder("1");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.tab.TabPage1.form.divIphak.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00","94","33","1001","28",null,null,null,null,null,null,this.tab.TabPage1.form.divIphak.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.TabPage1.form.divIphak.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01","94","33","175","28",null,null,null,null,null,null,this.tab.TabPage1.form.divIphak.form);
            obj.set_taborder("6");
            obj.set_text("입학학과");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.TabPage1.form.divIphak.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00","94","61","1001","28",null,null,null,null,null,null,this.tab.TabPage1.form.divIphak.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.TabPage1.form.divIphak.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00","94","61","175","28",null,null,null,null,null,null,this.tab.TabPage1.form.divIphak.form);
            obj.set_taborder("8");
            obj.set_text("편입학년");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.TabPage1.form.divIphak.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00","94","89","1001","28",null,null,null,null,null,null,this.tab.TabPage1.form.divIphak.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.TabPage1.form.divIphak.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01","94","89","175","28",null,null,null,null,null,null,this.tab.TabPage1.form.divIphak.form);
            obj.set_taborder("10");
            obj.set_text("최종상태");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.TabPage1.form.divIphak.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02","427","5","175","28",null,null,null,null,null,null,this.tab.TabPage1.form.divIphak.form);
            obj.set_taborder("11");
            obj.set_text("수험번호");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.TabPage1.form.divIphak.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_00","427","33","175","28",null,null,null,null,null,null,this.tab.TabPage1.form.divIphak.form);
            obj.set_taborder("12");
            obj.set_text("모집전형");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.TabPage1.form.divIphak.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02","427","61","175","28",null,null,null,null,null,null,this.tab.TabPage1.form.divIphak.form);
            obj.set_taborder("13");
            obj.set_text("인정학점");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.TabPage1.form.divIphak.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_01","427","89","175","28",null,null,null,null,null,null,this.tab.TabPage1.form.divIphak.form);
            obj.set_taborder("14");
            obj.set_text("출신대학");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.TabPage1.form.divIphak.addChild(obj.name, obj);

            obj = new Edit("edtPyeonipHaknyeon","271","64","154","22",null,null,null,null,null,null,this.tab.TabPage1.form.divIphak.form);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.tab.TabPage1.form.divIphak.addChild(obj.name, obj);

            obj = new ImageViewer("imgView","5","5","82","112",null,null,null,null,null,null,this.tab.TabPage1.form.divIphak.form);
            obj.set_taborder("0");
            obj.set_stretch("fixaspectratio");
            this.tab.TabPage1.form.divIphak.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00","760","5","175","28",null,null,null,null,null,null,this.tab.TabPage1.form.divIphak.form);
            obj.set_taborder("15");
            obj.set_text("정원구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.TabPage1.form.divIphak.addChild(obj.name, obj);

            obj = new Edit("edtInjeongHakjeom","604","64","154","22",null,null,null,null,null,null,this.tab.TabPage1.form.divIphak.form);
            obj.set_taborder("16");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.tab.TabPage1.form.divIphak.addChild(obj.name, obj);

            obj = new Edit("edtChulsinDaehak","604","92","154","22",null,null,null,null,null,null,this.tab.TabPage1.form.divIphak.form);
            obj.set_taborder("17");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.tab.TabPage1.form.divIphak.addChild(obj.name, obj);

            obj = new Combo("cboMojip","271","8","154","22",null,null,null,null,null,null,this.tab.TabPage1.form.divIphak.form);
            obj.set_taborder("18");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_innerdataset("dsMojip");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.tab.TabPage1.form.divIphak.addChild(obj.name, obj);

            obj = new Combo("cboIphakHakgwa","271","36","154","22",null,null,null,null,null,null,this.tab.TabPage1.form.divIphak.form);
            obj.set_taborder("19");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_innerdataset("dsDeptAll");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.tab.TabPage1.form.divIphak.addChild(obj.name, obj);

            obj = new Combo("cboSangtae","271","92","154","22",null,null,null,null,null,null,this.tab.TabPage1.form.divIphak.form);
            obj.set_taborder("20");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_innerdataset("dsHakjeok");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.tab.TabPage1.form.divIphak.addChild(obj.name, obj);

            obj = new Combo("cboJeonhyung","604","36","154","22",null,null,null,null,null,null,this.tab.TabPage1.form.divIphak.form);
            obj.set_taborder("21");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_innerdataset("dsJeonhyung");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.tab.TabPage1.form.divIphak.addChild(obj.name, obj);

            obj = new Combo("cboJeongwon","937","8","154","22",null,null,null,null,null,null,this.tab.TabPage1.form.divIphak.form);
            obj.set_taborder("22");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_innerdataset("dsJeongwon");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.tab.TabPage1.form.divIphak.addChild(obj.name, obj);

            obj = new Calendar("calIphakDt","937","36","154","22",null,null,null,null,null,null,this.tab.TabPage1.form.divIphak.form);
            obj.set_taborder("23");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.tab.TabPage1.form.divIphak.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00_00","760","33","175","28",null,null,null,null,null,null,this.tab.TabPage1.form.divIphak.form);
            obj.set_taborder("24");
            obj.set_text("입학일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.TabPage1.form.divIphak.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_00","760","61","175","28",null,null,null,null,null,null,this.tab.TabPage1.form.divIphak.form);
            obj.set_taborder("25");
            obj.set_text("인정학기 수");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.TabPage1.form.divIphak.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_01_00","760","89","175","28",null,null,null,null,null,null,this.tab.TabPage1.form.divIphak.form);
            obj.set_taborder("26");
            obj.set_text("출신학과");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.TabPage1.form.divIphak.addChild(obj.name, obj);

            obj = new Edit("edtInjeongHakgi","937","64","154","22",null,null,null,null,null,null,this.tab.TabPage1.form.divIphak.form);
            obj.set_taborder("27");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.tab.TabPage1.form.divIphak.addChild(obj.name, obj);

            obj = new Edit("edtChulsinHakgwa","937","92","154","22",null,null,null,null,null,null,this.tab.TabPage1.form.divIphak.form);
            obj.set_taborder("28");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.tab.TabPage1.form.divIphak.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00_00","10","170","163","22",null,null,null,null,null,null,this.tab.TabPage1.form);
            obj.set_taborder("7");
            obj.set_text("체류정보");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.TabPage1.addChild(obj.name, obj);

            obj = new Div("divCheryu","10","195","1012",null,null,"10",null,null,null,null,this.tab.TabPage1.form);
            obj.set_taborder("1");
            obj.set_background("white");
            obj.set_border("1px solid #4c4b66");
            obj.set_text("");
            this.tab.TabPage1.addChild(obj.name, obj);

            obj = new Static("stc_13_06","94","5","911","28",null,null,null,null,null,null,this.tab.TabPage1.form.divCheryu.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.TabPage1.form.divCheryu.addChild(obj.name, obj);

            obj = new Static("stc_12_06","4","5","175","28",null,null,null,null,null,null,this.tab.TabPage1.form.divCheryu.form);
            obj.set_taborder("8");
            obj.set_text("여권번호");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.TabPage1.form.divCheryu.addChild(obj.name, obj);

            obj = new Edit("edtJagyeok","514","8","154","22",null,null,null,null,null,null,this.tab.TabPage1.form.divCheryu.form);
            obj.set_taborder("1");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_maxlength("33");
            this.tab.TabPage1.form.divCheryu.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00","94","33","911","28",null,null,null,null,null,null,this.tab.TabPage1.form.divCheryu.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.TabPage1.form.divCheryu.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01","4","33","175","28",null,null,null,null,null,null,this.tab.TabPage1.form.divCheryu.form);
            obj.set_taborder("10");
            obj.set_text("입국일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.TabPage1.form.divCheryu.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00","4","61","1001",null,null,"5",null,null,null,null,this.tab.TabPage1.form.divCheryu.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.TabPage1.form.divCheryu.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00","4","61","175",null,null,"5",null,null,null,null,this.tab.TabPage1.form.divCheryu.form);
            obj.set_taborder("12");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.TabPage1.form.divCheryu.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02","337","5","175","28",null,null,null,null,null,null,this.tab.TabPage1.form.divCheryu.form);
            obj.set_taborder("13");
            obj.set_text("체류자격");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.TabPage1.form.divCheryu.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_00","337","33","175","28",null,null,null,null,null,null,this.tab.TabPage1.form.divCheryu.form);
            obj.set_taborder("14");
            obj.set_text("출국일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.TabPage1.form.divCheryu.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00","670","5","175","28",null,null,null,null,null,null,this.tab.TabPage1.form.divCheryu.form);
            obj.set_taborder("15");
            obj.set_text("체류만료일");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.TabPage1.form.divCheryu.addChild(obj.name, obj);

            obj = new Combo("cboGukjeok","847","36","154","22",null,null,null,null,null,null,this.tab.TabPage1.form.divCheryu.form);
            obj.set_taborder("5");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsGukjeok");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.tab.TabPage1.form.divCheryu.addChild(obj.name, obj);

            obj = new Calendar("calManryo","847","8","154","22",null,null,null,null,null,null,this.tab.TabPage1.form.divCheryu.form);
            obj.set_taborder("2");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.tab.TabPage1.form.divCheryu.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00_00","670","33","175","28",null,null,null,null,null,null,this.tab.TabPage1.form.divCheryu.form);
            obj.set_taborder("16");
            obj.set_text("국적");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.TabPage1.form.divCheryu.addChild(obj.name, obj);

            obj = new Edit("edtYeogwonNo","181","8","154","22",null,null,null,null,null,null,this.tab.TabPage1.form.divCheryu.form);
            obj.set_taborder("0");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_inputtype("english,number");
            obj.set_maxlength("9");
            this.tab.TabPage1.form.divCheryu.addChild(obj.name, obj);

            obj = new Calendar("calChulgukDt","514","36","154","22",null,null,null,null,null,null,this.tab.TabPage1.form.divCheryu.form);
            obj.set_taborder("4");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.tab.TabPage1.form.divCheryu.addChild(obj.name, obj);

            obj = new Calendar("calIpgukDt","181","36","154","22",null,null,null,null,null,null,this.tab.TabPage1.form.divCheryu.form);
            obj.set_taborder("3");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.tab.TabPage1.form.divCheryu.addChild(obj.name, obj);

            obj = new TextArea("txtBigo","182","64","819",null,null,"9",null,null,null,null,this.tab.TabPage1.form.divCheryu.form);
            obj.set_taborder("6");
            obj.set_maxlength("166");
            this.tab.TabPage1.form.divCheryu.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_00","15","187","320","8",null,null,null,null,null,null,this.tab.TabPage1.form);
            obj.set_taborder("8");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.TabPage1.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","458","159","100","35",null,null,null,null,null,null,this.tab.TabPage1.form);
            obj.set_taborder("9");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.TabPage1.addChild(obj.name, obj);

            obj = new Tabpage("TabPage2",this.tab);
            obj.set_text("성적");
            this.tab.addChild(obj.name, obj);

            obj = new Grid("grdChongSeongjeok","10","35",null,"61","10",null,null,null,null,null,this.tab.TabPage2.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsChongSeongjeok");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"신청학점\"/><Cell col=\"1\" text=\"취득학점\"/><Cell col=\"2\" text=\"총점\"/><Cell col=\"3\" text=\"백분율\"/><Cell col=\"4\" text=\"평점총계\"/><Cell col=\"5\" text=\"평균학점\"/></Band><Band id=\"body\"><Cell text=\"bind:SINCHEONG_HAKJEOM\" displaytype=\"number\"/><Cell col=\"1\" text=\"bind:CHWIDEUK_HAKJEOM\" displaytype=\"number\"/><Cell col=\"2\" text=\"bind:JEOMSUGYE\" displaytype=\"number\"/><Cell col=\"3\" text=\"bind:JEOMSU_AVG\" displaytype=\"number\"/><Cell col=\"4\" text=\"bind:PYEONGJEOMGYE\" displaytype=\"number\"/><Cell col=\"5\" text=\"bind:PYEONGJEOM_AVG\" displaytype=\"number\"/></Band></Format></Formats>");
            this.tab.TabPage2.addChild(obj.name, obj);

            obj = new Static("stc_09","7","11","85","22",null,null,null,null,null,null,this.tab.TabPage2.form);
            obj.set_taborder("4");
            obj.set_text("총성적");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.TabPage2.addChild(obj.name, obj);

            obj = new Static("stc_09_00","7","106","109","22",null,null,null,null,null,null,this.tab.TabPage2.form);
            obj.set_taborder("5");
            obj.set_text("이수별 성적");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.TabPage2.addChild(obj.name, obj);

            obj = new Grid("grdHakgiSeongjeok","10","263","506",null,null,"10",null,null,null,null,this.tab.TabPage2.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsHakgiSeongjeok");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"85\"/><Column size=\"98\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"84\"/><Column size=\"82\"/><Column size=\"96\"/><Column size=\"96\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"학년도/학기\"/><Cell col=\"2\" text=\"신청&#13;&#10;학점\"/><Cell col=\"3\" text=\"취득&#13;&#10;학점\"/><Cell col=\"4\" text=\"백분율\"/><Cell col=\"5\" text=\"평점총점\"/><Cell col=\"6\" text=\"평점평균\"/><Cell col=\"7\" text=\"석차\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:YYYY_HAKGI\" editmaxlength=\"256\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:SINCHEONG_HAKJEOM\" editmaxlength=\"22\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:CHWIDEUK_HAKJEOM\" editmaxlength=\"22\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:JEOMSU_AVG\" editmaxlength=\"22\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:PYEONGJEOMGYE\" editmaxlength=\"22\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:PYEONGJEOM_AVG\" editmaxlength=\"22\"/><Cell col=\"7\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:SEOKCHA\" editmaxlength=\"256\"/></Band></Format></Formats>");
            this.tab.TabPage2.addChild(obj.name, obj);

            obj = new Static("stc_09_01","7","238","100","22",null,null,null,null,null,null,this.tab.TabPage2.form);
            obj.set_taborder("6");
            obj.set_text("학기별성적");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.TabPage2.addChild(obj.name, obj);

            obj = new Grid("grdGwamokSeongjeok","526","263",null,null,"10","10",null,null,null,null,this.tab.TabPage2.form);
            obj.set_taborder("3");
            obj.set_binddataset("dsGwamokSeongjeok");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"220\"/><Column size=\"65\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"50\"/><Column size=\"45\"/><Column size=\"65\"/><Column size=\"75\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"교과목명\"/><Cell col=\"2\" text=\"이수구분\"/><Cell col=\"3\" text=\"학년\"/><Cell col=\"4\" text=\"학점\"/><Cell col=\"5\" text=\"등급\"/><Cell col=\"6\" text=\"백분율\"/><Cell col=\"7\" text=\"평점\"/><Cell col=\"8\" text=\"이수여부\"/><Cell col=\"9\" text=\"재수강여부\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:GYOGWAMOK_NM\"/><Cell col=\"2\" text=\"bind:ISU_GBNM\"/><Cell col=\"3\" text=\"bind:HAKNYEON\"/><Cell col=\"4\" text=\"bind:HAKJEOM\"/><Cell col=\"5\" text=\"bind:DEUNGGEUP\"/><Cell col=\"6\" text=\"bind:CHWIDEUK_JEOMSU\"/><Cell col=\"7\" text=\"bind:PYEONGJEOM\"/><Cell col=\"8\" displaytype=\"checkboxcontrol\" text=\"bind:ISU_YN\"/><Cell col=\"9\" text=\"bind:SUGANG_GUBUN_NM\"/></Band></Format></Formats>");
            this.tab.TabPage2.addChild(obj.name, obj);

            obj = new Static("stc_09_01_00","524","238","100","22",null,null,null,null,null,null,this.tab.TabPage2.form);
            obj.set_taborder("7");
            obj.set_text("과목별성적");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.TabPage2.addChild(obj.name, obj);

            obj = new Static("staRowCnt","102","237","233","24",null,null,null,null,null,null,this.tab.TabPage2.form);
            obj.set_taborder("8");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.tab.TabPage2.addChild(obj.name, obj);

            obj = new Static("staRowCnt2","621","236","233","24",null,null,null,null,null,null,this.tab.TabPage2.form);
            obj.set_taborder("9");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.tab.TabPage2.addChild(obj.name, obj);

            obj = new Div("Div03","10","130","602","102",null,null,null,null,null,null,this.tab.TabPage2.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("type02");
            this.tab.TabPage2.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","120","20",null,null,null,null,null,null,this.tab.TabPage2.form.Div03.form);
            obj.set_taborder("0");
            obj.set_background("powderblue");
            obj.set_border("1px solid #9db9d1");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            obj.set_text("");
            this.tab.TabPage2.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static01","0","20","120","20",null,null,null,null,null,null,this.tab.TabPage2.form.Div03.form);
            obj.set_taborder("1");
            obj.set_text("전공학점");
            obj.set_background("powderblue");
            obj.set_border("1px solid #9db9d1");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            this.tab.TabPage2.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static02","0","40","120","20",null,null,null,null,null,null,this.tab.TabPage2.form.Div03.form);
            obj.set_taborder("2");
            obj.set_text("교양학점");
            obj.set_background("powderblue");
            obj.set_border("1px solid #9db9d1");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            this.tab.TabPage2.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static03","0","60","120","20",null,null,null,null,null,null,this.tab.TabPage2.form.Div03.form);
            obj.set_taborder("3");
            obj.set_text("교직학점");
            obj.set_background("powderblue");
            obj.set_border("1px solid #9db9d1");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            this.tab.TabPage2.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static04","0","80","120","20",null,null,null,null,null,null,this.tab.TabPage2.form.Div03.form);
            obj.set_taborder("4");
            obj.set_text("공통학점");
            obj.set_background("powderblue");
            obj.set_border("1px solid #9db9d1");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            this.tab.TabPage2.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static05","120","0","120","20",null,null,null,null,null,null,this.tab.TabPage2.form.Div03.form);
            obj.set_taborder("5");
            obj.set_background("powderblue");
            obj.set_border("1px solid #9db9d1");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            obj.set_text("이수학점");
            this.tab.TabPage2.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static06","240","0","120","20",null,null,null,null,null,null,this.tab.TabPage2.form.Div03.form);
            obj.set_taborder("6");
            obj.set_background("powderblue");
            obj.set_border("1px solid #9db9d1");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            obj.set_text("점수총점");
            this.tab.TabPage2.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static07","360","0","120","20",null,null,null,null,null,null,this.tab.TabPage2.form.Div03.form);
            obj.set_taborder("7");
            obj.set_background("powderblue");
            obj.set_border("1px solid #9db9d1");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            obj.set_text("백분율");
            this.tab.TabPage2.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static08","480","0","120","20",null,null,null,null,null,null,this.tab.TabPage2.form.Div03.form);
            obj.set_taborder("8");
            obj.set_background("powderblue");
            obj.set_border("1px solid #9db9d1");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            obj.set_text("평균학점");
            this.tab.TabPage2.form.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","120","20","120","20",null,null,null,null,null,null,this.tab.TabPage2.form.Div03.form);
            obj.set_taborder("9");
            obj.set_border("1px solid #9db9d1");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            obj.set_displaynulltext("0");
            this.tab.TabPage2.form.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01","240","20","120","20",null,null,null,null,null,null,this.tab.TabPage2.form.Div03.form);
            obj.set_taborder("10");
            obj.set_border("1px solid #9db9d1");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            obj.set_format("###,##0");
            this.tab.TabPage2.form.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit02","360","20","120","20",null,null,null,null,null,null,this.tab.TabPage2.form.Div03.form);
            obj.set_taborder("11");
            obj.set_border("1px solid #9db9d1");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            obj.set_displaynulltext("0");
            this.tab.TabPage2.form.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit03","480","20","120","20",null,null,null,null,null,null,this.tab.TabPage2.form.Div03.form);
            obj.set_taborder("12");
            obj.set_border("1px solid #9db9d1");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            obj.set_displaynulltext("0");
            this.tab.TabPage2.form.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit04","120","40","120","20",null,null,null,null,null,null,this.tab.TabPage2.form.Div03.form);
            obj.set_taborder("13");
            obj.set_border("1px solid #9db9d1");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            obj.set_displaynulltext("0");
            this.tab.TabPage2.form.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit05","240","40","120","20",null,null,null,null,null,null,this.tab.TabPage2.form.Div03.form);
            obj.set_taborder("14");
            obj.set_border("1px solid #9db9d1");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            obj.set_format("###,##0");
            this.tab.TabPage2.form.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit06","360","40","120","20",null,null,null,null,null,null,this.tab.TabPage2.form.Div03.form);
            obj.set_taborder("15");
            obj.set_border("1px solid #9db9d1");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            obj.set_displaynulltext("0");
            this.tab.TabPage2.form.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit07","480","40","120","20",null,null,null,null,null,null,this.tab.TabPage2.form.Div03.form);
            obj.set_taborder("16");
            obj.set_border("1px solid #9db9d1");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            obj.set_displaynulltext("0");
            this.tab.TabPage2.form.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit08","120","60","120","20",null,null,null,null,null,null,this.tab.TabPage2.form.Div03.form);
            obj.set_taborder("17");
            obj.set_border("1px solid #9db9d1");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            obj.set_displaynulltext("0");
            this.tab.TabPage2.form.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit09","240","60","120","20",null,null,null,null,null,null,this.tab.TabPage2.form.Div03.form);
            obj.set_taborder("18");
            obj.set_border("1px solid #9db9d1");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            obj.set_format("###,##0");
            this.tab.TabPage2.form.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit10","360","60","120","20",null,null,null,null,null,null,this.tab.TabPage2.form.Div03.form);
            obj.set_taborder("19");
            obj.set_border("1px solid #9db9d1");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            obj.set_displaynulltext("0");
            this.tab.TabPage2.form.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit11","480","60","120","20",null,null,null,null,null,null,this.tab.TabPage2.form.Div03.form);
            obj.set_taborder("20");
            obj.set_border("1px solid #9db9d1");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            obj.set_displaynulltext("0");
            this.tab.TabPage2.form.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit12","120","80","120","20",null,null,null,null,null,null,this.tab.TabPage2.form.Div03.form);
            obj.set_taborder("21");
            obj.set_border("1px solid #9db9d1");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            obj.set_displaynulltext("0");
            this.tab.TabPage2.form.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit13","240","80","120","20",null,null,null,null,null,null,this.tab.TabPage2.form.Div03.form);
            obj.set_taborder("22");
            obj.set_border("1px solid #9db9d1");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            obj.set_format("###,##0");
            this.tab.TabPage2.form.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit14","360","80","120","20",null,null,null,null,null,null,this.tab.TabPage2.form.Div03.form);
            obj.set_taborder("23");
            obj.set_border("1px solid #9db9d1");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            obj.set_displaynulltext("0");
            this.tab.TabPage2.form.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit15","480","80","120","20",null,null,null,null,null,null,this.tab.TabPage2.form.Div03.form);
            obj.set_taborder("24");
            obj.set_border("1px solid #9db9d1");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            obj.set_displaynulltext("0");
            this.tab.TabPage2.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,"-11","10","487","0",null,null,null,null,null,this.tab.TabPage2.form);
            obj.set_taborder("10");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.TabPage2.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","-1","10","477",null,null,null,null,null,null,this.tab.TabPage2.form);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.TabPage2.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","11","28","510","8",null,null,null,null,null,null,this.tab.TabPage2.form);
            obj.set_taborder("12");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.TabPage2.addChild(obj.name, obj);

            obj = new Static("Static01","733","0","100","35",null,null,null,null,null,null,this.tab.TabPage2.form);
            obj.set_taborder("13");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.TabPage2.addChild(obj.name, obj);

            obj = new Static("Static01_00","463","96","100","35",null,null,null,null,null,null,this.tab.TabPage2.form);
            obj.set_taborder("14");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.TabPage2.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_00","5","123","510","8",null,null,null,null,null,null,this.tab.TabPage2.form);
            obj.set_taborder("15");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.TabPage2.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","393","229","100","35",null,null,null,null,null,null,this.tab.TabPage2.form);
            obj.set_taborder("16");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.TabPage2.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_00_00","11","255","880","8",null,null,null,null,null,null,this.tab.TabPage2.form);
            obj.set_taborder("17");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.TabPage2.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01","516","249","10","107",null,null,null,null,null,null,this.tab.TabPage2.form);
            obj.set_taborder("18");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.TabPage2.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","5",null,null,"10","0","0",null,null,null,null,this.tab.TabPage2.form);
            obj.set_taborder("19");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.TabPage2.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","1010","42","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("↑35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","1011","200","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01","369","143","30","100",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("30");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","69","320","8",null,null,null,null,null,null,this);
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

            obj = new Static("Static01_01_00_00_00_00","400","69","1230","8",null,null,null,null,null,null,this);
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

            obj = new Div("divSearch","0","0",null,"42","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","24","0","1500","9",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new Static("Static01_01_00","24","31","1500","9",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new Static("Static01_02","580","0","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01","261","0","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00","51","0","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","370","0","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","660","0","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00","-30","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
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
            obj.set_taborder("15");
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
            obj.set_taborder("16");
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
            obj.set_taborder("17");
            obj.set_text("학년");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHaknyeon","960","9","105","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsHaknyeon");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_02","1094","9","75","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("학적상태");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakjeok","1178","9","125","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsHakjeok");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_02","870","0","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","950","0","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_02_00","1065","0","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00","1168","0","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_02_00_00","1303","0","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_02_01","1338","9","75","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
            obj.set_text("학번/성명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00","1412","0","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("25");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchHakbeonNm","1422","9","130","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.divSearch.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("유학생정보관리");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item9","divGibon.form.edtHakbeon","value","dsMaster","HAKBEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divGibon.form.cboGyeyeol","value","dsMaster","DAEHAK_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","tab","enable","dsBindableTab","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.cboSearchGyeyeol","value","ds_input","GYEYEOL_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboSearchHakgwa","value","ds_input","HAKGWA_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboSearchJeongong","value","ds_input","JEONGONG_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboSearchHaknyeon","value","ds_input","HAKNYEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.cboSearchHakjeok","value","ds_input","HAKJEOK_STCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.edtSearchHakbeonNm","value","ds_input","NUMNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divGibon.form.cboHaknyeon","value","dsMaster","HAKNYEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divGibon.form.cboHakjeokSangtae","value","dsMaster","HAKJEOK_STCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divGibon.form.edtNm","value","dsMaster","HAKSAENG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divGibon.form.mskBirthday","value","dsMaster","BIRTHDAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divGibon.form.edtJidogyosu","value","dsMaster","JIDOGYOSU_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divGibon.form.cboSeongbyeol","value","dsMaster","GENDER_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divGibon.form.cboHakgwa","value","dsMaster","HAKGWA_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divGibon.form.cboJeongong","value","dsMaster","JEONGONG_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divGibon.form.cboJuya","value","dsMaster","JUYA_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divGibon.form.cboHaknyeonje","value","dsMaster","HAKNYEONJE_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divGibon.form.cboYuhyung","value","dsMaster","IPHAK_TYCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divGibon.form.cboByeondong","value","dsMaster","BYEONDONG_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","tab.TabPage1.form.divIphak.form.edtSuhoemNo","value","dsMaster","SUHEOM_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","tab.TabPage1.form.divIphak.form.edtPyeonipHaknyeon","value","dsMaster","PYEONIP_HAKNYEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","tab.TabPage1.form.divIphak.form.edtChulsinDaehak","value","dsMaster","CHULSINDAEHAK_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","tab.TabPage1.form.divIphak.form.cboMojip","value","dsMaster","MOJIP_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","tab.TabPage1.form.divIphak.form.cboIphakHakgwa","value","dsMaster","IPHAK_HAKGWA_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","tab.TabPage1.form.divIphak.form.cboSangtae","value","dsMaster","HAKJEOK_STCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","tab.TabPage1.form.divIphak.form.cboJeonhyung","value","dsMaster","IPHAK_JEONHYEONG_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","tab.TabPage1.form.divIphak.form.cboJeongwon","value","dsMaster","JEONGWONNAEOE_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","tab.TabPage1.form.divIphak.form.calIphakDt","value","dsMaster","IPHAK_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","tab.TabPage1.form.divIphak.form.edtChulsinHakgwa","value","dsMaster","CHULSINDAEHAK_HAKGWA_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","tab.TabPage1.form.divCheryu.form.edtJagyeok","value","dsMaster","CHERYU_JAGYEOK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","tab.TabPage1.form.divCheryu.form.calManryo","value","dsMaster","CHERYU_ED_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","tab.TabPage1.form.divCheryu.form.edtYeogwonNo","value","dsMaster","YEOGWON_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","tab.TabPage1.form.divCheryu.form.calChulgukDt","value","dsMaster","CHULGUK_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","tab.TabPage1.form.divCheryu.form.calIpgukDt","value","dsMaster","IPGUK_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","tab.TabPage1.form.divCheryu.form.txtBigo","value","dsMaster","BIGO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","tab.TabPage1.form.divCheryu.form.cboGukjeok","value","dsMaster","GUKJEOK_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","tab.TabPage2.form.Div03.form.MaskEdit00","value","dsChongSeongjeok","JEONGONG_ISU_HAKJEOM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","tab.TabPage2.form.Div03.form.MaskEdit04","value","dsChongSeongjeok","GYOYANG_ISU_HAKJEOM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","tab.TabPage2.form.Div03.form.MaskEdit08","value","dsChongSeongjeok","GYOJIK_ISU_HAKJEOM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","tab.TabPage2.form.Div03.form.MaskEdit12","value","dsChongSeongjeok","GONGTONG_ISU_HAKJEOM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","tab.TabPage2.form.Div03.form.MaskEdit01","value","dsChongSeongjeok","JEONGONG_JEOMSUGYE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","tab.TabPage2.form.Div03.form.MaskEdit05","value","dsChongSeongjeok","GYOYANG_JEOMSUGYE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","tab.TabPage2.form.Div03.form.MaskEdit09","value","dsChongSeongjeok","GYOJIK_JEOMSUGYE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","tab.TabPage2.form.Div03.form.MaskEdit13","value","dsChongSeongjeok","GONGTONG_JEOMSU_AVG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","tab.TabPage2.form.Div03.form.MaskEdit02","value","dsChongSeongjeok","JEONGONG_JEOMSU_AVG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","tab.TabPage2.form.Div03.form.MaskEdit06","value","dsChongSeongjeok","GYOYANG_JEOMSU_AVG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","tab.TabPage2.form.Div03.form.MaskEdit10","value","dsChongSeongjeok","GYOJIK_JEOMSU_AVG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","tab.TabPage2.form.Div03.form.MaskEdit14","value","dsChongSeongjeok","GONGTONG_JEOMSU_AVG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","tab.TabPage2.form.Div03.form.MaskEdit03","value","dsChongSeongjeok","JEONGONG_PYEONGJEOM_AVG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","tab.TabPage2.form.Div03.form.MaskEdit07","value","dsChongSeongjeok","GYOYANG_PYEONGJEOM_AVG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","tab.TabPage2.form.Div03.form.MaskEdit11","value","dsChongSeongjeok","GYOJIK_PYEONGJEOM_AVG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","tab.TabPage2.form.Div03.form.MaskEdit15","value","dsChongSeongjeok","GONGTONG_PYEONGJEOM_AVG");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
            this._addPreloadList("data","","dsChongSeongjeok");
            this._addPreloadList("data","","dsHakgiSeongjeok");
            this._addPreloadList("data","","dsGwamokSeongjeok");
        };
        
        // User Script
        this.registerScript("US05_2010501_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): US05_2010501_M.xfdl(업체공통클래스(샘풀) 관리(조회))
        * 작 성         일 명: jiback
        * 작 성         일 자: 2021/10/05
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
            var strDs    = "dsHaknyeon|dsHakjeok|dsGender|dsJuya|dsYuhyung|dsByeondong|dsHaknyeonje|dsMojip|dsJeongwon|dsJeonhyung|dsGukjeok";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00060|00004|00001|00003|00521|00011|00063|00005|00006|00008|00266";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "T|T|X|X|X|X|X|X|X|X|X";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = "";                                      // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId    = "Init";

        	this.tab.TabPage1.form.divIphak.form.cboMojip.fi

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

        	this.fn_DeptAll();
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
        			case "SeongjeokRet":
                            this.gfn_getRowCount(this.tab.TabPage2.form.staRowCnt, this.dsHakgiSeongjeok);
                        break;
        			case "GwamokRet":
                            this.gfn_getRowCount(this.tab.TabPage2.form.staRowCnt2, this.dsGwamokSeongjeok);
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
        		this.alert("먼저 [학번: " + this.dsMaster.getColumn(this.dsMaster.rowposition, "HAKBEON") + ", 성명: " + this.dsMaster.getColumn(this.dsMaster.rowposition, "HAKSAENG_NM") + "] 학생의 체류 정보를 저장해주세요.");
        		return false;
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
            var strUrl      = "/prj/US/US05/Retrieve_2010501_M.do";
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
                06. 저장 함수 선언
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
            var strUrl      = "/prj/US/US05/Save_2010501_M.do";
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
        	this.alert("[학번: " + this.dsMaster.getColumn(this.dsMaster.rowposition, "HAKBEON") + ", 성명: " + this.dsMaster.getColumn(this.dsMaster.rowposition, "HAKSAENG_NM") + "] 학생의 체류 정보를 성공적으로 저장하였습니다.");
            this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
        };

        /**********************************************************************
                07. 각종 함수
        ***********************************************************************/
        // 계열.학과,전공을 모두 불러오는 함수
        this.fn_DeptAll = function()
        {
            var strSvc      = "DeptAll";
            var strUrl      = "/prj/US/US05/Retrieve_2010501_M_deptAll.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsDeptAll=dsDeptAll";
            var strArg      = "";
            var GBV_MENUID  = objApp.gv_cutPrgId;
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

        // 학생 사진 set
        this.fn_PicLoad = function()
        {
        	var xhttp = new XMLHttpRequest();
        	xhttp.targetObj  = this.dsMaster;
        	xhttp.targetComp = this.tab.TabPage1.form.divIphak.form.imgView;
        	xhttp.onreadystatechange = function() {
        		if (this.readyState == 4 && this.status == 200) {
        			xhttp.targetComp.set_image(xhttp.targetObj.getColumn(xhttp.targetObj.rowposition, 'FILE_PATH'));
        		} else {
        			xhttp.targetComp.set_image('https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Noimage.svg/739px-Noimage.svg.png');
        		}
        	};
        	xhttp.open("GET", this.dsMaster.getColumn(this.dsMaster.rowposition, 'FILE_PATH'), false);
        	xhttp.send();
        };

        // 학생별 성적조회
        this.fn_Seongjeok = function()
        {
        	if ( this.tab.tabindex == 1 )
        	{
        		this.ds_input.setColumn(0, "HAKBEON", this.dsMaster.getColumn(this.dsMaster.rowposition, "HAKBEON"));

        		var strSvc      = "SeongjeokRet";
        		var strUrl      = "/prj/US/US05/Retrieve_2010501_M_Seongjeok.do";
        		var strInDs     = "ds_input=ds_input";
        		var strOutDs    = "dsChongSeongjeok=dsChongSeongjeok ";
        			strOutDs   += "dsHakgiSeongjeok=dsHakgiSeongjeok ";
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
        };

        // 과목별 성적조회
        this.fn_GwamokSeongjeok = function()
        {
        	this.ds_input.setColumn(0, "YYYY", this.dsHakgiSeongjeok.getColumn(this.dsHakgiSeongjeok.rowposition, "YYYY"));
        	this.ds_input.setColumn(0, "HAKGI", this.dsHakgiSeongjeok.getColumn(this.dsHakgiSeongjeok.rowposition, "HAKGI"));

        	var strSvc      = "GwamokRet";
        	var strUrl      = "/prj/US/US05/Retrieve_2010501_M_Gwamok.do";
        	var strInDs     = "ds_input=ds_input";
        	var strOutDs    = "dsGwamokSeongjeok=dsGwamokSeongjeok";
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

        /**********************************************************************
                08. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj,e)
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

        // 그리드 로우 변경시
        this.dsMaster_onrowposchanged = function(obj,e)
        {
        	// 수정된 체류정보가 있을 때(저장하지 않으면 이동 못함)
        	if (this.dsMaster.getRowType(e.oldrow) == Dataset.ROWTYPE_UPDATE)
        	{
        		this.alert("먼저 [학번: " + this.dsMaster.getColumn(e.oldrow, "HAKBEON") + ", 성명: " + this.dsMaster.getColumn(e.oldrow, "HAKSAENG_NM") + "] 학생의 체류 정보를 저장해주세요.");
        		this.dsMaster.set_rowposition(e.oldrow);
        		return false;
        	}

        	// 학생사진 set
        	this.fn_PicLoad();

        	// 학생별 성적조회
        	this.fn_Seongjeok();
        };

        // 탭변경시
        this.tab_canchange = function(obj,e)
        {
        	if (this.dsMaster.rowcount == 0)
        	{
        		this.alert("조회된 학생이 없습니다.");
        		return false;
        	}
        };

        this.tab_onchanged = function(obj,e)
        {
        	// 학생별 성적조회
        	this.fn_Seongjeok();
        };

        // 학기별 성적 그리드에서 선택된 로우가 바뀔때 발생(과목별 성적 조회)
        this.dsHakgiSeongjeok_onrowposchanged = function(obj,e)
        {
        	this.fn_GwamokSeongjeok();
        };

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
            return this.gfn_isUpdate(this.dsMaster);
        };

        /**********************************************************************
                09. 검색창 엔터키 조회
        ***********************************************************************/
        this.divSearch_cboSearchGyeyeol_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"GYYEOL_CD",obj.value);
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

        this.divSearch_cboSearchHakjeok_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"HAKJEOK_STCD",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_edtSearchHakbeonNm_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"NUMNAME",obj.value);
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
            this.grdMaster.addEventHandler("oncellclick",this.grdMaster_oncellclick,this);
            this.tab.addEventHandler("onchanged",this.tab_onchanged,this);
            this.tab.addEventHandler("canchange",this.tab_canchange,this);
            this.tab.TabPage2.form.stc_09.addEventHandler("onclick",this.tab_00_Tabpage7_stc_09_onclick,this);
            this.tab.TabPage2.form.stc_09_00.addEventHandler("onclick",this.tab_00_Tabpage7_stc_09_onclick,this);
            this.tab.TabPage2.form.grdHakgiSeongjeok.addEventHandler("onheaddblclick",this.grdHakgiSeongjeok_onheaddblclick,this);
            this.tab.TabPage2.form.stc_09_01.addEventHandler("onclick",this.tab_00_Tabpage7_stc_09_onclick,this);
            this.tab.TabPage2.form.grdGwamokSeongjeok.addEventHandler("onheaddblclick",this.grdGwamokSeongjeok_onheaddblclick,this);
            this.tab.TabPage2.form.stc_09_01_00.addEventHandler("onclick",this.tab_00_Tabpage7_stc_09_onclick,this);
            this.Static01_01_00_00_00_00.addEventHandler("onclick",this.Static01_01_00_00_00_00_onclick,this);
            this.divSearch.form.cboSearchGyeyeol.addEventHandler("onkeydown",this.divSearch_cboSearchGyeyeol_onkeydown,this);
            this.divSearch.form.cboSearchGyeyeol.addEventHandler("onitemchanged",this.divSearch_cboSearchGyeyeol_onitemchanged,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onkeydown",this.divSearch_cboSearchHakgwa_onkeydown,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onitemchanged",this.divSearch_cboSearchHakgwa_onitemchanged,this);
            this.divSearch.form.cboSearchJeongong.addEventHandler("onkeydown",this.divSearch_cboSearchJeongong_onkeydown,this);
            this.divSearch.form.cboSearchHaknyeon.addEventHandler("onkeydown",this.divSearch_cboSearchHaknyeon_onkeydown,this);
            this.divSearch.form.cboSearchHakjeok.addEventHandler("onkeydown",this.divSearch_cboSearchHakjeok_onkeydown,this);
            this.divSearch.form.edtSearchHakbeonNm.addEventHandler("onkeydown",this.divSearch_edtSearchHakbeonNm_onkeydown,this);
            this.dsMaster.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.ds_input.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
            this.dsHakgiSeongjeok.addEventHandler("onrowposchanged",this.dsHakgiSeongjeok_onrowposchanged,this);
        };
        this.loadIncludeScript("US05_2010501_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
