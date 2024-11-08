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
            this.set_titletext("비교과프로그램승인관리");
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
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"BIGYOGWA_PROGRAM_CD\" type=\"STRING\" size=\"10\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"8\"/><Column id=\"HAKGI_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GAESEOL_SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PROGRAM_SINCHEONG_SIJAK_DT\" type=\"DATE\" size=\"8\"/><Column id=\"PROGRAM_SINCHEONG_JONGRYO_DT\" type=\"DATE\" size=\"8\"/><Column id=\"PROGRAM_SIJAK_DT\" type=\"DATE\" size=\"8\"/><Column id=\"PROGRAM_JONGRYO_DT\" type=\"DATE\" size=\"8\"/><Column id=\"GANGUISIL_JONGRYU\" type=\"STRING\" size=\"20\"/><Column id=\"GANGUISIL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GANGSA_SAWON_NO\" type=\"STRING\" size=\"9\"/><Column id=\"GANGSA_NM\" type=\"STRING\" size=\"100\"/><Column id=\"SINCHEONG_GANEUNG_HAKNYEON\" type=\"STRING\" size=\"10\"/><Column id=\"SINCHEONG_GANEUNG_HAKJEOK_SANGTAE\" type=\"STRING\" size=\"50\"/><Column id=\"SINCHEONG_JEHAN_INWON_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SEONCHAKSUN_YN\" type=\"STRING\" size=\"1\"/><Column id=\"SEONCHAKSUN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"4000\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/><Column id=\"BIGYOGWA_PROGRAM_NM\" type=\"STRING\" size=\"100\"/><Column id=\"HAEKSIM_YEOKRYANG_GBCD\" type=\"STRING\" size=\"8\"/><Column id=\"HAEKSIM_YEOKRYANG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GIBON_MILEAGE\" type=\"STRING\" size=\"100\"/><Column id=\"JUGWAN_DEPT_CD\" type=\"STRING\" size=\"8\"/><Column id=\"JUGWAN_DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"8\"/><Column id=\"BIGYOGWA_PROGRAM_CD\" type=\"STRING\" size=\"10\"/><Column id=\"BIGYOGWA_PROGRAM_NM\" type=\"STRING\" size=\"100\"/><Column id=\"SEUNGIN_SANGTAE\" type=\"STRING\" size=\"10\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"50\"/><Column id=\"PROGRAM_SINCHEONG_SIJAK_DT\" type=\"STRING\" size=\"8\"/><Column id=\"PROGRAM_SINCHEONG_JONGRYO_DT\" type=\"STRING\" size=\"8\"/><Column id=\"GBV_MENUID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YYYY\"/><Col id=\"HAKGI\"/><Col id=\"BIGYOGWA_PROGRAM_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgi", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSeunginSangtae", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSincheongMaster", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"BIGYOGWA_PROGRAM_CD\" type=\"STRING\" size=\"10\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"8\"/><Column id=\"HAKGI_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GAESEOL_SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"SINCHEONG_DT\" type=\"DATE\" size=\"8\"/><Column id=\"SEUNGIN_SANGTAE\" type=\"STRING\" size=\"10\"/><Column id=\"SEUNGIN_SANGTAE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BANRYEO_SAYU\" type=\"STRING\" size=\"4000\"/><Column id=\"SURYO_YN\" type=\"STRING\" size=\"1\"/><Column id=\"SURYO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SURYO_DT\" type=\"DATE\" size=\"8\"/><Column id=\"SURYO_NO\" type=\"STRING\" size=\"256\"/><Column id=\"POGI_YN\" type=\"STRING\" size=\"1\"/><Column id=\"POGI_NM\" type=\"STRING\" size=\"256\"/><Column id=\"POGI_DT\" type=\"DATE\" size=\"8\"/><Column id=\"POGI_SAYU\" type=\"STRING\" size=\"4000\"/><Column id=\"SUSANG_CD\" type=\"STRING\" size=\"8\"/><Column id=\"HWAKJEONG_MILEAGE_JUMSU\" type=\"STRING\" size=\"100\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/><Column id=\"SEUNGIN_DT\" type=\"DATE\" size=\"8\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"50\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sincheongInput", this);
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BIGYOGWA_PROGRAM_CD\" type=\"STRING\" size=\"10\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"8\"/><Column id=\"GAESEOL_SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"ATTFL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"GBV_MENUID\" type=\"STRING\" size=\"256\"/><Column id=\"BIGYOGWA_PROGRAM_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKBEON_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"BIGYOGWA_PROGRAM_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rtn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBaseYyyyHakgi", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBindable", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"bEnable\" type=\"STRING\" size=\"256\"/><Column id=\"bReadonly\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"bEnable\">true</Col><Col id=\"bReadonly\">false</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBigyogwaProgram", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakbeon", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"256\"/><Column id=\"CAMPUS_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"DAEHAK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DAEHAK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGONG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"256\"/><Column id=\"HAKNYEON_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JINGEUP_HAKNYEON\" type=\"STRING\" size=\"256\"/><Column id=\"JINGEUP_SYS_SAJEONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JINGEUP_ADMIN_SAJEONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"BUNBAN\" type=\"STRING\" size=\"256\"/><Column id=\"BUNBAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKSAENG_ENM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKSAENG_CNM\" type=\"STRING\" size=\"256\"/><Column id=\"RES_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKJEOK_STCD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKJEOK_SANGTAE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BYEONDONG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BYEONDONG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BYEONDONG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"JIDOGYOSU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JIDOGYOSU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKSEOKSA_TONGHAPGWAJEONG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKNYEONJE_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"GENDER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GENDER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GUKJEOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GYOJIK_ISU_YN\" type=\"STRING\" size=\"256\"/><Column id=\"GYOJIK_POGI_YN\" type=\"STRING\" size=\"256\"/><Column id=\"GYOJIK_POGI_DT\" type=\"STRING\" size=\"256\"/><Column id=\"GYOJIK_POGI_SAYU\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_HAKJEOM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"OEGUKIN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DONGPO_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BALSONGJUSO_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"HP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"POST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR1\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"PWD\" type=\"STRING\" size=\"256\"/><Column id=\"BOHOJA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BOHOJA_GWANGYE_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"BOHOJA_TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BOHOJA_HP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BOHOJA_POST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BOHOJA_ADDR1\" type=\"STRING\" size=\"256\"/><Column id=\"BOHOJA_ADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"BOHOJA_JIKEOP\" type=\"STRING\" size=\"256\"/><Column id=\"IPHAK_DT\" type=\"STRING\" size=\"256\"/><Column id=\"IPHAK_HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GOGYOGYEYEOL_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"CHULSINGOGYO_JOLEOP_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"CHULSINGOGYO_JOLEOP_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CHULSINGOGYO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHULSINGOGYO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NEIS_GOGYO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHULSINGOGYO_GUKJEOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHULSINDAEHAK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHULSINDAEHAK_HAKGWA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHULSINDAEHAK_JOLEOP_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"CHULSINDAEHAK_JOLEOP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"DAEHAK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGWONNAEOE_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"IPHAK_JEONHYEONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"IPHAK_TYCD\" type=\"STRING\" size=\"256\"/><Column id=\"IPHAK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"PYEONIP_HAKNYEON\" type=\"STRING\" size=\"256\"/><Column id=\"JOLEOP_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"JOLEOP_HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"JOLEOP_DT\" type=\"STRING\" size=\"256\"/><Column id=\"JOLEOP_HOETSU\" type=\"STRING\" size=\"256\"/><Column id=\"HAKWI_DEUNGROK_NO1\" type=\"STRING\" size=\"256\"/><Column id=\"HAKWI_DEUNGROK_NO2\" type=\"STRING\" size=\"256\"/><Column id=\"HAKWI_CD1\" type=\"STRING\" size=\"256\"/><Column id=\"HAKWI_CD2\" type=\"STRING\" size=\"256\"/><Column id=\"BALGEUP_BULGA_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BALGEUP_BULGA_SAYU\" type=\"STRING\" size=\"256\"/><Column id=\"BALGEUP_BULGA_DT\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSuryoYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"SORT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ADDR\" type=\"STRING\" size=\"32\"/><Column id=\"CD_DC\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"32\"/><Column id=\"REF_2\" type=\"STRING\" size=\"32\"/><Column id=\"REF_3\" type=\"STRING\" size=\"32\"/><Column id=\"REF_4\" type=\"STRING\" size=\"32\"/><Column id=\"REF_5\" type=\"STRING\" size=\"32\"/><Column id=\"REF_6\" type=\"STRING\" size=\"32\"/><Column id=\"REF_7\" type=\"STRING\" size=\"32\"/><Column id=\"REF_8\" type=\"STRING\" size=\"32\"/><Column id=\"REF_9\" type=\"STRING\" size=\"32\"/><Column id=\"REF_10\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"REG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"REG_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"MOD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MOD_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"AUTO_PLUS\" type=\"BIGDECIMAL\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDummy", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01_01_00_00_00","0","442","1020","8",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grdGaeseol","0","104",null,"300","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"43\"/><Column size=\"50\"/><Column size=\"63\"/><Column size=\"184\"/><Column size=\"115\"/><Column size=\"127\"/><Column size=\"127\"/><Column size=\"125\"/><Column size=\"125\"/><Column size=\"58\"/><Column size=\"104\"/><Column size=\"96\"/><Column size=\"62\"/><Column size=\"58\"/><Column size=\"59\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"normal\" edittype=\"checkbox\" text=\"NO\"/><Cell col=\"1\" rowspan=\"2\" text=\"학년도\"/><Cell col=\"2\" rowspan=\"2\" text=\"학기\"/><Cell col=\"3\" rowspan=\"2\" text=\"비교과프로그램\"/><Cell col=\"4\" rowspan=\"2\" text=\"핵심역량\"/><Cell col=\"5\" colspan=\"2\" text=\"프로그램 기간\"/><Cell col=\"7\" colspan=\"2\" text=\"프로그램 신청 기간\"/><Cell col=\"9\" rowspan=\"2\" text=\"마일리지\"/><Cell col=\"10\" rowspan=\"2\" text=\"주관부서\"/><Cell col=\"11\" rowspan=\"2\" text=\"강의실\"/><Cell col=\"12\" rowspan=\"2\" text=\"강사\"/><Cell col=\"13\" rowspan=\"2\" text=\"제한인원\"/><Cell col=\"14\" rowspan=\"2\" text=\"선착순여부\"/><Cell row=\"1\" col=\"5\" text=\"시작일시\"/><Cell row=\"1\" col=\"6\" text=\"종료일시\"/><Cell row=\"1\" col=\"7\" text=\"시작일시\"/><Cell row=\"1\" col=\"8\" text=\"종료일시\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:YYYY\" editmaxlength=\"256\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:HAKGI_NM\" editmaxlength=\"256\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\" text=\"bind:BIGYOGWA_PROGRAM_NM\" editmaxlength=\"100\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\" text=\"bind:HAEKSIM_YEOKRYANG_NM\" editmaxlength=\"256\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:PROGRAM_SIJAK_DT\" editmaxlength=\"8\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:PROGRAM_JONGRYO_DT\" editmaxlength=\"8\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:PROGRAM_SINCHEONG_SIJAK_DT\" editmaxlength=\"8\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:PROGRAM_SINCHEONG_JONGRYO_DT\" editmaxlength=\"8\" calendardisplaynulltype=\"none\"/><Cell col=\"9\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:GIBON_MILEAGE\" editmaxlength=\"20\"/><Cell col=\"10\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:JUGWAN_DEPT_NM\" editmaxlength=\"256\"/><Cell col=\"11\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:GANGUISIL_NM\" editmaxlength=\"256\"/><Cell col=\"12\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:GANGSA_NM\" editmaxlength=\"100\"/><Cell col=\"13\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:SINCHEONG_JEHAN_INWON_CNT\" editmaxlength=\"22\"/><Cell col=\"14\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:SEONCHAKSUN_NM\" editmaxlength=\"256\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09","0","80","330","22",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("비교과프로그램 개설 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Div("div_01","0","0",null,"69","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01_00","0","10","80","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("11");
            obj.set_text("학년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01","0","36","80","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("12");
            obj.set_text("신청기간");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_01.addChild(obj.name, obj);

            obj = new Calendar("calSearchProgramSincheongSijakDt","89","36","230","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_01.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","89","9","230","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("0");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","370","10","80","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("13");
            obj.set_text("학기");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_01.addChild(obj.name, obj);

            obj = new Calendar("calSearchProgramSincheongJongryoDt","356","36","230","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("Static00_00","330","36","16","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("14");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.div_01.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgi","462","10","124","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsHakgi");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_01","617","9","110","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("15");
            obj.set_text("비교과프로그램");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_01_01","617","36","110","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("16");
            obj.set_text("학번/성명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_01.addChild(obj.name, obj);

            obj = new Edit("edtSearchHakbeon","737","36","200","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            this.div_01.addChild(obj.name, obj);

            obj = new Edit("edtSearchBigyogwaProgramCd","737","9","200","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            this.div_01.addChild(obj.name, obj);

            obj = new Button("btnSearchBigyogwaProgram","950","9","22","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_PopSrch");
            this.div_01.addChild(obj.name, obj);

            obj = new Button("btnSearchHakbeonNm","950","36","22","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_PopSrch");
            this.div_01.addChild(obj.name, obj);

            obj = new Edit("edtSearchName","987","36","200","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("10");
            obj.set_enable("true");
            this.div_01.addChild(obj.name, obj);

            obj = new Edit("edtSearchBigyogwaProgramNm","987","9","200","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("4");
            obj.set_enable("true");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00","1214","9","80","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("17");
            obj.set_text("승인상태");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_01.addChild(obj.name, obj);

            obj = new Combo("cboSearchSeunginSangtae","1304","9","295","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsSeunginSangtae");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.div_01.addChild(obj.name, obj);

            obj = new Grid("grdSincheong","0","449",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("dsSincheongMaster");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"43\"/><Column size=\"57\"/><Column size=\"60\"/><Column size=\"89\"/><Column size=\"97\"/><Column size=\"93\"/><Column size=\"63\"/><Column size=\"93\"/><Column size=\"201\"/><Column size=\"80\"/><Column size=\"93\"/><Column size=\"58\"/><Column size=\"154\"/><Column size=\"93\"/><Column size=\"183\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell edittype=\"normal\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" text=\"NO\"/><Cell col=\"2\" text=\"학년도\"/><Cell col=\"3\" text=\"학기\"/><Cell col=\"4\" text=\"학번\"/><Cell col=\"5\" text=\"성명\"/><Cell col=\"6\" text=\"신청일시\"/><Cell col=\"7\" text=\"승인상태\"/><Cell col=\"8\" text=\"승인일시\"/><Cell col=\"9\" text=\"반려사유\"/><Cell col=\"10\" text=\"확정마일리지\"/><Cell col=\"11\" text=\"수료일시\"/><Cell col=\"12\" text=\"수료여부\"/><Cell col=\"13\" text=\"수료번호\"/><Cell col=\"14\" text=\"포기일시\"/><Cell col=\"15\" text=\"포기사유\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" editmaxlength=\"1\"/><Cell col=\"1\" displaytype=\"normal\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:YYYY\" editmaxlength=\"256\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:HAKGI_NM\" editmaxlength=\"256\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:HAKBEON\" editmaxlength=\"10\"/><Cell col=\"5\" displaytype=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;text&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;normal&apos;:&apos;normal&apos;\" edittype=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;text&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;none&apos;:&apos;none&apos;\" textAlign=\"left\" text=\"bind:HAKSAENG_NM\" editmaxlength=\"50\" expandshow=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;show&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;hide&apos;:&apos;hide&apos;\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:SINCHEONG_DT\" editmaxlength=\"8\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:SEUNGIN_SANGTAE_NM\" editmaxlength=\"256\"/><Cell col=\"8\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:SEUNGIN_DT\" editmaxlength=\"8\" calendardisplaynulltype=\"none\"/><Cell col=\"9\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:BANRYEO_SAYU\" editmaxlength=\"4000\"/><Cell col=\"10\" displaytype=\"text\" edittype=\"text\" textAlign=\"center\" text=\"bind:HWAKJEONG_MILEAGE_JUMSU\" editmaxlength=\"100\"/><Cell col=\"11\" displaytype=\"expr:SURYO_YN == &apos;1&apos; ? &apos;date&apos; : &apos;normal&apos;\" edittype=\"expr:SURYO_YN == &apos;1&apos; ? &apos;date&apos; : &apos;none&apos;\" textAlign=\"center\" text=\"bind:SURYO_DT\" editmaxlength=\"8\" calendardisplaynulltype=\"none\"/><Cell col=\"12\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" textAlign=\"center\" text=\"bind:SURYO_YN\" editmaxlength=\"1\" checkboxfalsevalue=\"2\" checkboxtruevalue=\"1\"/><Cell col=\"13\" displaytype=\"mask\" text=\"bind:SURYO_NO\" maskeditlimitbymask=\"both\" maskedittype=\"string\" maskeditformat=\"##########-####\" edittype=\"mask\"/><Cell col=\"14\" displaytype=\"expr:SURYO_YN == &apos;1&apos; ? &apos;normal&apos; : &apos;date&apos;\" edittype=\"expr:SURYO_YN == &apos;1&apos; ? &apos;none&apos; : &apos;date&apos;\" textAlign=\"center\" text=\"bind:POGI_DT\" editmaxlength=\"8\" calendardisplaynulltype=\"none\"/><Cell col=\"15\" displaytype=\"expr:SURYO_YN == &apos;1&apos; ? &apos;normal&apos; : &apos;text&apos;\" edittype=\"expr:SURYO_YN == &apos;1&apos; ? &apos;none&apos; : &apos;text&apos;\" textAlign=\"left\" text=\"bind:POGI_SAYU\" editmaxlength=\"4000\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","0","425","330","22",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("비교과프로그램 신청자 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Button("btnBanryeo",null,"417","60","25","271",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("반려");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"417","60","25","206",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"417","60","25","141",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"417","60","25","76",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcel",null,"417","60","25","11",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnSeungin",null,"417","60","25","336",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("승인");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelFormUpload",null,"417","112","25","401",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("엑셀양식 업로드");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelFormDownload",null,"417","121","25","518",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("엑셀양식 다운로드");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("stRowCnt","194","78","233","24",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stRowCnt2","205","424","233","24",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","0","96","320","8",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","500","69","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","500","404","100","45",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("↑\r\n\r45\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","1","1","27","67",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","80","1","10","67",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","40","1","320","9",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","720","59","100","9",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_01","320","1","56","40",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_02","40","32","1050","5",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 6pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00","1187","1","56","40",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01","586","1","56","40",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","728","1","10","67",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","453","1","10","67",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01_00","40","59","320","9",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnMkSuryoNo",null,"417","121","25","644",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("수료번호 일괄생성");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("비교과프로그램승인관리");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_01.form.calSearchProgramSincheongSijakDt","value","ds_input","PROGRAM_SINCHEONG_SIJAK_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_01.form.spnSearchYYYY","value","ds_input","YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_01.form.calSearchProgramSincheongJongryoDt","value","ds_input","PROGRAM_SINCHEONG_JONGRYO_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_01.form.cboSearchHakgi","value","ds_input","HAKGI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_01.form.edtSearchHakbeon","value","ds_input","HAKBEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_01.form.edtSearchBigyogwaProgramCd","value","ds_input","BIGYOGWA_PROGRAM_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_01.form.edtSearchName","value","ds_input","HAKSAENG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_01.form.edtSearchBigyogwaProgramNm","value","ds_input","BIGYOGWA_PROGRAM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_01.form.cboSearchSeunginSangtae","value","ds_input","SEUNGIN_SANGTAE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
            this._addPreloadList("data","","dsSincheongMaster");
            this._addPreloadList("data","","dsDummy");
        };
        
        // User Script
        this.registerScript("UY01_2100105_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UY01_2100105_M.xfdl(비교과프로그램승인관리)
        * 작 성         일 명: jiback
        * 작 성         일 자: 2020/11/04
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
        this.lvchkColidDs   = "HAKBEON";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs = "학번";

        this.strKeyValue 	= "";  // 저장 후 row 유지
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
            var strDs    = "dsHakgi|dsSeunginSangtae";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00022|00520";                   // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "T|T";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
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
        	var strEopmuGbcd = "UM";
        	var strUseYn     = "1";
            // gfn_BaseYyyyHakgiLoad(데이터셋, svcId , 업무구분, 사용구분);
            // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.gfn_BaseYyyyHakgiLoad(strDs
                                      , svcId
                                      , strEopmuGbcd
                                      , strUseYn);

        	// MENU ID
        	this.ds_input.setColumn(0, "GBV_MENUID", objApp.gv_cutPrgId);
        	this.ds_sincheongInput.setColumn(0, "GBV_MENUID", objApp.gv_cutPrgId);
        };

        this.fn_PostformInit = function()
        {
        	this.div_01.form.cboSearchSeunginSangtae.set_index(0);
        };

        this.fn_PostBaseYyyyHakgiInit = function()
        {
        	if (this.dsBaseYyyyHakgi.rowcount > 0) {
        		this.ds_input.setColumn(0,"YYYY",  this.dsBaseYyyyHakgi.getColumn(0, "YYYY"));
        		this.ds_input.setColumn(0,"HAKGI", this.dsBaseYyyyHakgi.getColumn(0, "HAKGI"));
        	}
        };

        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {

            this.gfn_clearSortAll(this.grdGaeseol);
        	this.gfn_clearSortAll(this.grdSincheong);
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
        			case "baseYyyyHakgiInit":
        					this.fn_PostBaseYyyyHakgiInit();
        			    break;
                    case "Ret":
                            this.fn_PostRet();
        				break;
        			case "DRet":
                            this.fn_PostDRet();
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
        			case "ExcelUpload02":
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
        		case "SearchHakbeon" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					this.div_01.form.edtSearchHakbeon.set_value(sRtn[0]);
        					this.div_01.form.edtSearchName.set_value(sRtn[1]);
        				}
        			break;

        		case "GridHakbeon" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					if ( this.dsSincheongMaster.findRow("HAKBEON", sRtn[0]) >= 0 ) {
        						this.gfn_alert("이미 신청한 학번입니다.","신청정보","","warning");

        						this.dsSincheongMaster.set_enableevent(false);
        						this.dsSincheongMaster.setColumn(this.dsSincheongMaster.rowposition, "HAKBEON",     "");
        						this.dsSincheongMaster.setColumn(this.dsSincheongMaster.rowposition, "HAKSAENG_NM", "");
        						this.dsSincheongMaster.set_enableevent(true);
        					} else {
        						this.dsSincheongMaster.set_enableevent(false);
        						this.dsSincheongMaster.setColumn(this.dsSincheongMaster.rowposition, "HAKBEON", sRtn[0]);
        						this.dsSincheongMaster.setColumn(this.dsSincheongMaster.rowposition, "HAKSAENG_NM", sRtn[1]);
        						this.dsSincheongMaster.set_enableevent(true);
        					}
        				}
        			break;

        		case "bigyogwa" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					this.ds_input.set_enableevent(false);
        					this.ds_input.setColumn(this.ds_input.rowposition, "BIGYOGWA_PROGRAM_CD", sRtn[0]);
        					this.ds_input.setColumn(this.ds_input.rowposition, "BIGYOGWA_PROGRAM_NM", sRtn[1]);
        					this.ds_input.set_enableevent(true);
        				}
        			break;

        		// 엑셀업로드
        		case "popExcleFileUploadP01":
        			if(!this.gfn_isNull(strVal))
        			{
        				//일반
        				var sRtn = strVal.split(",");
        				if(sRtn[0] == "S")
        				{
        					this.ds_sincheongInput.setColumn(0, "YYYY",this.dsMaster.getColumn(this.dsMaster.rowposition,"YYYY"));
        					this.ds_sincheongInput.setColumn(0, "HAKGI",this.dsMaster.getColumn(this.dsMaster.rowposition,"HAKGI"));
        					this.ds_sincheongInput.setColumn(0, "BIGYOGWA_PROGRAM_CD",this.dsMaster.getColumn(this.dsMaster.rowposition,"BIGYOGWA_PROGRAM_CD"));
        					this.ds_sincheongInput.setColumn(0, "GAESEOL_SEQ",this.dsMaster.getColumn(this.dsMaster.rowposition,"GAESEOL_SEQ"));
        				    this.ds_sincheongInput.setColumn(0, "ATTFL_NO", sRtn[1]); // 첨부파일번호

        					var strSvc      = "ExcelUpload02";
        					var strUrl      = "/prj/UY/UY01/sincheongExcelUpload_2100105_M.do";
        					var strInDs     = "ds_sincheongInput=ds_sincheongInput:a";
        					var strOutDs    = "dsSincheongMaster=dsSincheongMaster";
        					var strArg      = "";
        					var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        					var strASync    = true;            //생략이나 공백일시에는 ASync=true,싱크시는 false로
        					this.gfn_Transaction(strSvc
        									   , strUrl
        									   , strInDs
        									   , strOutDs
        									   , strArg
        									   , strCallBack
        									   , strASync);
        				}
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

        	this.dsSincheongMaster.clearData();
        	if(this.ds_input.getColumn(this.ds_input.rowposition, "PROGRAM_SINCHEONG_SIJAK_DT") > this.ds_input.getColumn(this.ds_input.rowposition, "PROGRAM_SINCHEONG_JONGRYO_DT"))
        	{
        		this.gfn_alert("프로그램 신청 종료일자는 프로그램 신청 시작일자보다 이전 날짜가 될 수 없습니다.","저장정보","","question");
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
            var strUrl      = "/prj/UY/UY01/gaeseolRetrieve_2100105_M.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsMaster=dsMaster";
            var strArg      = "";
        	var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
              strArg = "GBV_MENUID=" + GBV_MENUID + " " + strArg;
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
            this.gfn_getRowCount(this.stRowCnt,this.dsMaster);
        };

        /**********************************************************************
        	05-1. 조회 함수 선언
        ***********************************************************************/
        this.dsMaster_canrowposchange = function(obj,e)
        {
        	if(this.fn_beforeclose())
        	{
        		var result = this.gfn_confirm( "변경된 데이터가 있습니다. 그래도 이동하시겠습니까?", "저장","", "question" );
        		if(result == 0)
        		{
        			return false;
        		}
        	}
        };

        this.dsMaster_onrowposchanged = function(obj,e)
        {
        	// 조회조건 셋팅
        	this.ds_sincheongInput.setColumn(0,"BIGYOGWA_PROGRAM_CD",this.dsMaster.getColumn(this.dsMaster.rowposition,"BIGYOGWA_PROGRAM_CD"));
        	this.ds_sincheongInput.setColumn(0,"YYYY",this.dsMaster.getColumn(this.dsMaster.rowposition,"YYYY"));
        	this.ds_sincheongInput.setColumn(0,"HAKGI",this.dsMaster.getColumn(this.dsMaster.rowposition,"HAKGI"));
        	this.ds_sincheongInput.setColumn(0,"GAESEOL_SEQ",this.dsMaster.getColumn(this.dsMaster.rowposition,"GAESEOL_SEQ"));
            this.fn_DRet();
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_DRet = function()
        {
            var strSvc      = "DRet";
            var strUrl      = "/prj/UY/UY01/sincheongRetrieve_2100105_M.do";
            var strInDs     = "ds_sincheongInput=ds_sincheongInput";
            var strOutDs    = "dsSincheongMaster=dsSincheongMaster";
            var strArg      = "";
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
        this.fn_PostDRet = function()
        {
            this.gfn_getRowCount(this.stRowCnt2,this.dsSincheongMaster);
        };

        /**********************************************************************
                06. 추가 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 추가 전 실행(기본체크사항)
         */
        this.fn_PreNew = function()
        {
        	if (this.dsMaster.rowcount == 0)
        	{
        		this.alert("추가할 데이터가 없습니다.");
        		return false;
        	}
            return true;
        };

        /**
         * 기능 : 마스터 추가 실행
         */
        this.btnAdd_onclick = function(obj,e)
        {
            if(!this.fn_PreNew())
            {
                return false;
            }

            var nRow = this.dsSincheongMaster.addRow();
        	this.dsSincheongMaster.set_enableevent(false);
            this.dsSincheongMaster.setColumn(nRow,"CHK",     "0");           //
        	this.dsSincheongMaster.setColumn(nRow,"BIGYOGWA_PROGRAM_CD", this.dsMaster.getColumn(this.dsMaster.rowposition,"BIGYOGWA_PROGRAM_CD"));
        	this.dsSincheongMaster.setColumn(nRow,"YYYY", this.dsMaster.getColumn(this.dsMaster.rowposition,"YYYY"));
        	this.dsSincheongMaster.setColumn(nRow,"HAKGI", this.dsMaster.getColumn(this.dsMaster.rowposition,"HAKGI"));
        	this.dsSincheongMaster.setColumn(nRow,"HAKGI_NM", this.dsMaster.getColumn(this.dsMaster.rowposition,"HAKGI_NM"));
        	this.dsSincheongMaster.setColumn(nRow,"GAESEOL_SEQ", this.dsMaster.getColumn(this.dsMaster.rowposition,"GAESEOL_SEQ"));

        	this.dsSincheongMaster.setColumn(nRow,"SEUNGIN_SANGTAE",     "02");           //승인상태
        	this.dsSincheongMaster.setColumn(nRow,"SEUNGIN_SANGTAE_NM",  "신청");         //승인상태

        	this.dsSincheongMaster.setColumn(nRow,"SURYO_YN",     "2");         //수료여부
        	this.dsSincheongMaster.setColumn(nRow,"SURYO_NM",  "미수료");      //수료여부

        	this.dsSincheongMaster.setColumn(nRow,"POGI_YN",     "2");         //포기여부
        	this.dsSincheongMaster.setColumn(nRow,"POGI_NM",  "미수료");      //포기여부

        	this.dsSincheongMaster.setColumn(nRow,"SINCHEONG_DT", objApp.gds_SystemDate.getColumn(0,"YYYYMMDD") ); // 신청일자

        	this.dsSincheongMaster.set_enableevent(true);

        	this.grdSincheong.setFocus();
        	this.grdSincheong.setCellPos(5);
        };

        /**********************************************************************
                07. 승인 함수 선언
        ***********************************************************************/
        this.fn_PreSeungin = function()
        {
        	return true;
        };

        /**
         * 기능 : 디테일 승인 실행
         */
        this.btnSeungin_onclick = function(obj,e)
        {
        	if(!this.fn_PreSeungin())
        	{
        		return false;
        	}

        	// 선택한 데이터가 없을 경우
        	if(this.dsSincheongMaster.rowcount < 1 || this.dsSincheongMaster.findRow("CHK",1) == -1)
        	{
        		this.gfn_alert("승인할 데이터를 선택해주세요.","승인정보","","warning");
        		return false;
        	}

        	for(var i=0;i<this.dsSincheongMaster.rowcount; i++)
        	{
        		// 체크된 데이터
        		if(this.dsSincheongMaster.getColumn(i,"CHK") == "1")
        		{
        			// 승인상태가 승인일 경우
        			if(this.dsSincheongMaster.getColumn(i, "SEUNGIN_SANGTAE") == "03")
        			{
        				this.dsSincheongMaster.set_rowposition(i);
        				this.gfn_alert("이미 승인한 항목입니다.","승인정보","","warning");
        				return false;
        			}

        			// 반려사유가 존재할 경우
        			if(this.dsSincheongMaster.getColumn(i, "BANRYEO_SAYU") != null && this.dsSincheongMaster.getColumn(i, "BANRYEO_SAYU") != "")
        			{
        				this.gfn_alert("반려사유를 삭제 해주세요.","승인정보","","warning");
        				return false;
        			}
        		}
        	} // for


        	var result = this.gfn_confirm( "현재 선택행을 승인하시겠습니까?", "신청정보","","question" );
        	if(result == 0)
        	{
        		return false;
        	}

        	for(var i=0;i<this.dsSincheongMaster.rowcount; i++)
        	{
        		// 체크된 데이터
        		if(this.dsSincheongMaster.getColumn(i,"CHK") == "1")
        		{
        			this.dsSincheongMaster.setColumn(i, "SEUNGIN_SANGTAE", "03");
        			this.dsSincheongMaster.setColumn(i, "SEUNGIN_DT", objApp.gds_SystemDate.getColumn(0,"YYYYMMDD"));
        		}
        	}

        	this.strKeyValue = this.dsSincheongMaster.getColumn(this.dsSincheongMaster.rowposition, "HAKBEON");

        	var strSvc      = "Save";
        	var strUrl      = "/prj/UY/UY01/sincheongSave_2100105_M.do";
        	var strInDs     = "ds_sincheongInput=ds_sincheongInput:a ";
        		strInDs    += "dsSincheongMaster=dsSincheongMaster:u";
        	var strOutDs    = "dsSincheongMaster=dsSincheongMaster";
        	var strArg      = "";
        	var GBV_MENUID    = objApp.gv_cutPrgId;
        	if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
        	{
        	  strArg = "GBV_MENUID=" + GBV_MENUID + " " + strArg;
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
                08. 반려 함수 선언
        ***********************************************************************/
        this.fn_preBanryeo = function()
        {
        	return true;
        };

        /**
         * 기능 : 디테일 반려 실행
         */
        this.btnBanryeo_onclick = function(obj,e)
        {
        	if(!this.fn_preBanryeo())
        	{
        		return false;
        	}

        	// 선택한 데이터가 없을 경우
        	if(this.dsSincheongMaster.rowcount < 1 || this.dsSincheongMaster.findRow("CHK",1) == -1)
        	{
        		this.gfn_alert("반려할 데이터를 선택해주세요.","반려정보","","warning");
        		return false;
        	}

        	for(var i=0;i<this.dsSincheongMaster.rowcount; i++)
        	{
        		// 체크된 데이터
        		if(this.dsSincheongMaster.getColumn(i,"CHK") == "1")
        		{
        			// 승인상태가 반려일 경우
        			if(this.dsSincheongMaster.getColumn(i, "SEUNGIN_SANGTAE") == "04")
        			{
        				this.dsSincheongMaster.set_rowposition(i);
        				this.gfn_alert("이미 반려한 항목입니다.","반려정보","","warning");
        				return false;
        			}

        			// 반려사유가 존재하지 않을 경우
        			if(this.dsSincheongMaster.getColumn(i, "BANRYEO_SAYU") == null)
        			{
        				this.gfn_alert("반려사유를 입력 해주세요.","승인정보","","warning");
        				return false;
        			}
        		}
        	} // for

        	var result = this.gfn_confirm( "현재 선택행을 반려하시겠습니까?", "신청정보","","question" );
        	if(result == 0)
        	{
        		return false;
        	}

        	for(var i=0;i<this.dsSincheongMaster.rowcount; i++)
        	{
        		// 체크된 데이터
        		if(this.dsSincheongMaster.getColumn(i,"CHK") == "1")
        		{
        			this.dsSincheongMaster.setColumn(i, "SEUNGIN_SANGTAE", "04");
        			this.dsSincheongMaster.setColumn(i, "SEUNGIN_DT", "");
        		}
        	}

        	this.strKeyValue = this.dsSincheongMaster.getColumn(this.dsSincheongMaster.rowposition, "HAKBEON");

        	var strSvc      = "Save";
        	var strUrl      = "/prj/UY/UY01/sincheongSave_2100105_M.do";
        	var strInDs     = "ds_sincheongInput=ds_sincheongInput:a ";
        		strInDs    += "dsSincheongMaster=dsSincheongMaster:u";
        	var strOutDs    = "dsSincheongMaster=dsSincheongMaster";
        	var strArg      = "";
        	var GBV_MENUID    = objApp.gv_cutPrgId;
        	if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
        	{
        	  strArg = "GBV_MENUID=" + GBV_MENUID + " " + strArg;
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
                09. 삭제 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 삭제 버튼 실행
         */

        this.fn_PreDel = function()
        {
            //멀티삭제용도
            if(this.dsSincheongMaster.rowcount < 1 || this.dsSincheongMaster.findRow("CHK",1) == -1)
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
            this.dsSincheongMaster.set_enableevent(false);
            for(var i=this.dsSincheongMaster.rowcount-1;i>-1;i--)
            {
        		// 체크되어있거나 데이터셋의 로우타입이 삭제일 때
                if(this.dsSincheongMaster.getColumn(i,"CHK") == "1" || this.dsSincheongMaster.getRowType(i) == Dataset.ROWTYPE_INSERT)
                {
        			// 승인상태가 승인이나 반려면 삭제 x, 신청이면 삭제 o
        			if(this.dsSincheongMaster.getColumn(i, "SEUNGIN_SANGTAE") == "1" || this.dsSincheongMaster.getColumn(i, "SEUNGIN_SANGTAE") == "2")
        			{
        				this.gfn_alert("승인 또는 반려상태인 경우에는 삭제할 수 없습니다.","삭제정보","","warning");
        			}
        			else
        			{
        				this.dsSincheongMaster.deleteRow(i);
        			}
                }
            }
            this.dsSincheongMaster.set_enableevent(true);

            //개별삭제시
            return true;
        };

        /**
         * 기능 : Row 삭제 또는 Transaction 삭제 처리
         */
        this.btnDel_onclick = function(obj,e)
        {
            if(!this.fn_PreDel())
            {
                return false;
            }

            var strSvc      = "Del";
            var strUrl      = "/prj/UY/UY01/sincheongDelete_2100105_M.do";
            var strInDs     = "dsSincheongMaster=dsSincheongMaster:u";
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
            this.gfn_getRowCount(this.stRowCnt2,this.dsSincheongMaster);
        };
        /**********************************************************************
                10. 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave = function()
        {
            if(this.dsSincheongMaster.rowcount > 0)
            {
                for(var i=0;i<this.dsSincheongMaster.rowcount; i++)
                {
                    if(this.dsSincheongMaster.getColumn(i,"CHK") == "0")
                    {
                        continue;
                    }
                    this.dsSincheongMaster.setColumn(i,"CHK","0");
                }
            }

            if(!this.gfn_isUpdate(this.dsSincheongMaster))
            {
                this.gfn_alert("변경된 이력이 없습니다.","저장정보","","question");
                return false;
            }

        	for(var i=0;i<this.dsSincheongMaster.rowcount; i++)
        	{
        		// 수료여부가 Y인데 수료일시가 없을 시
        		if(this.dsSincheongMaster.getColumn(i, "SURYO_YN") == "1" && this.dsSincheongMaster.getColumn(i, "SURYO_DT") == null)
        		{
        			this.gfn_alert("수료일시를 입력 해주세요.","삭제정보","","warning");
        			return false;
        		}

        		// 수료여부가 N인데 수료일시가 있을 시
        		if(this.dsSincheongMaster.getColumn(i, "SURYO_YN") == "2" && this.dsSincheongMaster.getColumn(i, "SURYO_DT") != null)
        		{
        			this.gfn_alert("수료일시를 삭제 해주세요.","삭제정보","","warning");
        			return false;
        		}

        		// 포기일시가 있는데 포기사유가 없을 시
        		if(this.dsSincheongMaster.getColumn(i, "POGI_DT") != null && this.dsSincheongMaster.getColumn(i, "POGI_SAYU") == null)
        		{
        			this.gfn_alert("포기사유를 입력 해주세요.","삭제정보","","warning");
        			return false;
        		}

        		// 포기일시가 없는데 포기사유가 있을 시
        		if(this.dsSincheongMaster.getColumn(i, "POGI_DT") == null && this.dsSincheongMaster.getColumn(i, "POGI_SAYU") != null)
        		{
        			this.gfn_alert("포기사유를 삭제 해주세요.","삭제정보","","warning");
        			return false;
        		}
        	}

            // 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
            var chkFocusFlg = true;
            var result      = this.gfn_cmmnChkEssentialItem(this.dsSincheongMaster, this.lvchkColidDs, this.lvchkColNameDs, this.grdSincheong, chkFocusFlg, this);

            if (result[0] != "success")
            {
                this.gfn_alert(result[0],"저장정보","","question");
                this.dsSincheongMaster.set_rowposition(result[1]); //데이터셋 변경
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
        this.btnSave_onclick = function(obj,e)
        {
            if(!this.fn_PreSave())
            {
                return false;
            }

        	this.strKeyValue = this.dsSincheongMaster.getColumn(this.dsSincheongMaster.rowposition, "HAKBEON");

            var strSvc      = "Save";
            var strUrl      = "/prj/UY/UY01/sincheongSave_2100105_M.do";
            var strInDs     = "ds_sincheongInput=ds_sincheongInput:a ";
                strInDs    += "dsSincheongMaster=dsSincheongMaster:u";
            var strOutDs    = "dsSincheongMaster=dsSincheongMaster";
            var strArg      = "";
            var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
              strArg = "GBV_MENUID=" + GBV_MENUID + " " + strArg;
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
        	var nRow = this.dsSincheongMaster.findRow("HAKBEON",this.strKeyValue);
        	this.dsSincheongMaster.set_rowposition(nRow);

            this.gfn_getRowCount(this.stRowCnt2,this.dsSincheongMaster);
        };

        /**********************************************************************
                11. 수료번호 일괄생성
        ***********************************************************************/
        this.btnMkSuryoNo_onclick = function(obj,e)
        {
        	if(this.dsSincheongMaster.rowcount < 1)
        	{
        		this.alert("수료번호를 생성할 데이터가 존재하지 않습니다.")
        		return false;
        	}

        	// 수료번호 getMax
        	var suryoNoMax = "0000";
        	for(var i=0; i<this.dsSincheongMaster.rowcount; i++)
        	{
        		if(this.dsSincheongMaster.getColumn(i, "SURYO_NO") != null && this.dsSincheongMaster.getColumn(i, "SURYO_NO").substring(10, 14) > suryoNoMax)
        		{
        			suryoNoMax = this.dsSincheongMaster.getColumn(i, "SURYO_NO").substring(10, 14);
        		}
        	}

        	// 수료여부가 Y이고 수료번호가 없는 컬럼에 수료번호 getMax + 1 로 추가
         	for(var i=0; i<this.dsSincheongMaster.rowcount; i++)
         	{
         		if(this.dsSincheongMaster.getColumn(i, "SURYO_NO") == null && this.dsSincheongMaster.getColumn(i, "SURYO_YN") == "1")
         		{
        			if((nexacro.toNumber(suryoNoMax)+1).toString().length == 1)
        			{
        				suryoNoMax = "000" + (nexacro.toNumber(suryoNoMax)+1).toString();
        			}
        			else if((nexacro.toNumber(suryoNoMax)+1).toString().length == 2)
        			{
        				suryoNoMax = "00" + (nexacro.toNumber(suryoNoMax)+1).toString();
        			}
        			else if((nexacro.toNumber(suryoNoMax)+1).toString().length == 3)
        			{
        				suryoNoMax = "0" + (nexacro.toNumber(suryoNoMax)+1).toString();
        			}
        			else if((nexacro.toNumber(suryoNoMax)+1).toString().length == 4)
        			{
        				suryoNoMax = (nexacro.toNumber(suryoNoMax)+1).toString();
        			}

        			this.dsSincheongMaster.setColumn(i, "SURYO_NO", this.dsSincheongMaster.getColumn(i, "BIGYOGWA_PROGRAM_CD") + suryoNoMax);
        		}
         	}

        	this.alert("수료학생의 수료번호가 생성되었습니다.\n저장버튼을 클릭해야 생성된 수료번호가 저장됩니다.");
        };

        /**********************************************************************
                11. ExcelDnwn 엑셀로 출력
        ***********************************************************************/
        this.btnExcel_onclick = function(obj,e)
        {
            if(this.dsSincheongMaster.rowcount < 1)
            {
                this.gfn_alert("출력할 엑셀데이터가 없습니다.", "EXCEL 정보" ,"","information");
                return false;
            }
            var result = this.gfn_confirm( "Excel를 출력하시겠습니까?", "EXCEL 출력","","question" );
            if(result == 0)
            {
               return false;
            }
            this.gfn_excelExport(this.grdSincheong, "비교과프로그램 신청자 목록","비교과프로그램 신청자 목록");
        };

        /**********************************************************************
                12. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 체크
         */
        this.grdSincheong_onheadclick = function(obj,e)
        {
            if(e.cell == this.grdSincheong.getBindCellIndex("body","CHK"))
            {
                this.gfn_checkAll(obj, e);
            }
        };

        /**
         *      그리드멀티 소트정열
         */
         // 개설목록
        this.grdGaeseol_onheaddblclick = function(obj,e)
        {
            if(e.cell != this.grdGaeseol.getBindCellIndex("body","CHK"))
            {
                this.gfn_gridSort(obj,e);
            }
        };

        // 신청목록
        this.grdSincheong_onheaddblclick = function(obj,e)
        {
            if(e.cell != this.grdSincheong.getBindCellIndex("body","CHK") && e.cell != 1)
            {
                this.gfn_gridSort(obj,e);
            }
        };

        // 엔터키 누르면 조회
        this.div_01_spnSearchYYYY_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"YYYY",obj.value);
        		this.fn_Ret();
        	}
        };

        // 엔터키 누르면 조회
        this.div_01_cboSearchHakgi_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"HAKGI",obj.value);
        		this.fn_Ret();
        	}
        };

        // 엔터키 누르면 조회
        this.div_01_cboSearchSeunginSangtae_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"SEUNGIN_SANGTAE",obj.value);
        		this.fn_Ret();
        	}
        };

        // 엔터키 누르면 조회
        this.div_01_calSearchProgramSincheongSijakDt_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"PROGRAM_SINCHEONG_SIJAK_DT",obj.value);
        		this.fn_Ret();
        	}
        };

        // 엔터키 누르면 조회
        this.div_01_calSearchProgramSincheongJongryoDt_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"PROGRAM_SINCHEONG_JONGRYO_DT",obj.value);
        		this.fn_Ret();
        	}
        };

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
            return this.gfn_isUpdate(this.dsSincheongMaster);
        };

        // 신청그리드 내용 변경시
        this.dsSincheongMaster_oncolumnchanged = function(obj,e)
        {
        	// 학생팝업
        	if (e.columnid == "HAKSAENG_NM") {
        	   if (e.newvalue == "") {
        	       obj.setColumn(obj.rowposition, "HAKBEON", "");
        	   } else {
        		   this.fn_setCallHakbeonPopup("grdSincheong", e.newvalue);
        	   }
        	}

        	if (e.columnid == "SURYO_YN") {
        		// 수료여부가 Y이면 포기일시랑 포기사유 내용 삭제 및 수료일자 설정
        		if(e.newvalue == "1")
        		{
        			var jongryoDt = this.dsMaster.getColumn(this.dsMaster.rowposition, "PROGRAM_JONGRYO_DT");

        			obj.setColumn(obj.rowposition, "POGI_DT", "");
        			obj.setColumn(obj.rowposition, "POGI_SAYU", "");

        			// 비교과프로그램 종료일자가 없을 경우 수료일자에 현재날짜 설정
        			if(jongryoDt == null || jongryoDt == "")
        			{
        				obj.setColumn(obj.rowposition, "SURYO_DT", objApp.gds_SystemDate.getColumn(0,"YYYYMMDD"));
        			}
        			// 비교과프로그램 종료일자가 있을 경우 수료일자에 비교과프로그램 종료일자 설정
        			else
        			{
        				obj.setColumn(obj.rowposition, "SURYO_DT", this.dsMaster.getColumn(this.dsMaster.rowposition, "PROGRAM_JONGRYO_DT"));
        			}
        		}

        		// 수료여부가 N이면 수료일시, 수료번호 내용 삭제
        		if(e.newvalue == "2")
        		{
        			obj.setColumn(obj.rowposition, "SURYO_DT", "");
        			obj.setColumn(obj.rowposition, "SURYO_NO", "");
        		}
        	}
        };

        /**********************************************************************
                13. 팝업
        ***********************************************************************/
        // 학생 팝업
        this.btnSearchHakbeonNm_onclick = function(obj,e)
        {
        	var hakbeonNm = this.div_01.form.edtSearchName.value;

        	this.fn_setCallHakbeonPopup(obj.name, hakbeonNm);
        };

        // 비교과프로그램 팝업
        this.btnSearchBigyogwaProgram_onclick = function(obj,e)
        {
        	var bigyogwaProgramCdNm = this.div_01.form.edtSearchBigyogwaProgramNm.value;

        	this.fn_setCallBigyogwaProgramPopup(obj.name, bigyogwaProgramCdNm);
        };

        /**********************************************************************
                14. 파일첨부
        ***********************************************************************/
        this.btnExcelFormDownload_onclick = function(obj,e)
        {
            // 비교과신청엑셀업로드양식 다운로드
        	this.gfn_attFileDownload("attach1991b0cac94cc9c4c676e29cbf", "001");
        };

        //Popup 데이터 전달
        this.fn_dsChildCopydsDummy = function(ds)
        {
        	this.dsDummy.clearData();
        	this.dsDummy.copyData(ds);
        };

        this.btnExcelFormUpload_onclick = function(obj,e)
        {
        	if (this.dsSincheongMaster.getRowType(nRow) == Dataset.ROWTYPE_INSERT) {
        		this.gfn_alert("변경 데이터 저장 후 업로드 가능합니다.","저장정보","","information");
        		return;
        	}

        	if (this.dsMaster.rowcount == 0)
        	{
        		this.gfn_alert("비교과프로그램 개설 목록에서 업로드할 비교과프로그램을 선택해 주세요.","에러정보","","error");
        		return;
        	}

        	var nRow = this.dsMaster.rowposition;
        	var yyyy = this.dsMaster.getColumn(nRow, "YYYY");
        	var hakgi = this.dsMaster.getColumn(nRow, "HAKGI");
        	var hakgiNm = this.dsMaster.getColumn(nRow, "HAKGI_NM");
        	var bigyogwaProgramNm = this.dsMaster.getColumn(nRow, "BIGYOGWA_PROGRAM_NM");

        	var result = this.gfn_confirm( yyyy+"학년도 " + hakgiNm + " " + bigyogwaProgramNm + "의 신청내역을 업로드 하시겠습니까?", "신청정보","","question" );
        	if(result == 0)
        	{
        		return false;
        	}

        	var multFlg     = "S"; 	// 멀티처리 : 싱글처리/멀티처리 S:한로우처리/M:멀티로처리

        	var lv_sFlag01 			= "Y";						// (필수)부모에서 파라미터를 넘길지의 여부 (Y:파라미터넘김 / N:넘기지 않음)
        	var lv_sFlag02			= "Y";						// (필수)팝업이 열렸을때 자동조회를 할 것인가 여부.(Y:자동조회 / N:수동조회)
        	var lv_sFlag03			= multFlg;					// 멀티처리 : 싱글처리/멀티처리 S:한로우처리/M:멀티로처리
        	var lv_sValue01 		= "";				        // 부모에서 넘어가는 파라미터(첨부파일번호)
        	var lv_sValue02 		= "1";						// 부모에서 넘어가는 파라미터(파일허용갯수)
        	var lv_sValue03 		= "all";					// 부모에서 넘어가는 파라미터(파일허용유형 all,text,image)
        	var lv_sValue04 		= "";						// 부모에서 넘어가는 파라미터(확장자 ext)
        	var lv_sValue05 		= "univ_upload";			// 부모에서 넘어가는 파라미터(도메인네임)
        	var lv_sValue06 		= "Y";                      // 부모에서 넘어가는 파라미터(추가/삭제 보이기)

        	var sPopId 			= "popExcleFileUploadP01";
        	var sUrl 			= "pop::POP102FileUploadP01.xfdl";
        	var oArg 			= { pv_sOp01:lv_sFlag01      	// 조회조건 : 조회조건셋팅/조회조건에 미셋팅 Y:조회조건셋팅/조회조건자동셋팅않함.
        						  , pv_sOp02:lv_sFlag02       	// 자동조회 : 바로조회/미조회   Y:자동조회/N:자동조회않임
        						  , pv_sOp03:lv_sFlag03      	// 멀티처리 : 싱글처리/멀티처리 S:한로우처리/M:멀티로처리
        						  , pv_sVal01:lv_sValue01      	// 파라미터1
        						  , pv_sVal02:lv_sValue02       // 파라미터2
        						  , pv_sVal03:lv_sValue03       // 파라미터3
        						  , pv_sVal04:lv_sValue04       // 파라미터4
        						  , pv_sVal05:lv_sValue05       // 파라미터5
        						  , pv_sVal06:lv_sValue06};     // 파라미터6
        	var sPopupCallBack 	= "fn_popupCallback";
        	var oOption 		= {};

        	this.dsDummy.clearData();
        	this.gfn_openPopup( sPopId
        					  , sUrl
        					  , oArg
        					  , sPopupCallBack
        					  , oOption);

        };

        this.ds_input_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "BIGYOGWA_PROGRAM_NM")
        	{
        	   if (this.gfn_isNull(e.newvalue)) {
        	       obj.setColumn(obj.rowposition, "BIGYOGWA_PROGRAM_CD", "");
        	   } else {
        			if (e.oldvalue != e.newvalue)
        			{
        				this.fn_setCallBigyogwaProgramPopup(obj.name, e.newvalue);
        			}
        	   }
        	} else
        	if (e.columnid == "HAKSAENG_NM") {
        	   if (this.gfn_isNull(e.newvalue)) {
        	       obj.setColumn(obj.rowposition, "HAKBEON", "");
        	   } else {
        			if (e.oldvalue != e.newvalue)
        			{
        				this.fn_setCallHakbeonPopup(obj.name, e.newvalue);
        			}
        	   }
        	}
        };

        //Popup
        // 비교과프로그램
        this.fn_setCallBigyogwaProgramPopup = function(strObjName, strSearchValue)
        {
        	this.dsBigyogwaProgram.clearData();

        	this.ds_sincheongInput.setColumn(this.ds_sincheongInput.rowposition, "BIGYOGWA_PROGRAM_CD_NM", strSearchValue);

        	if(!this.gfn_isNull(strSearchValue))
        	{
        		var strSvc 		= "SearchBigyogwaProgram";
        		var strUrl 		= "/prj/UY/UY01/retrieve_2100202_P01.do";
        		var strInDs  	= "ds_input=ds_sincheongInput";
        		var strOutDs 	= "dsBigyogwaProgram=dsMaster";
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

        	if(this.dsBigyogwaProgram.rowcount == 1)
        	{
        	    this.ds_input.setColumn(this.ds_input.rowposition, "BIGYOGWA_PROGRAM_CD",         this.dsBigyogwaProgram.getColumn(0,"BIGYOGWA_PROGRAM_CD"));
        		this.ds_input.setColumn(this.ds_input.rowposition, "BIGYOGWA_PROGRAM_NM",         this.dsBigyogwaProgram.getColumn(0,"BIGYOGWA_PROGRAM_NM"));
        	}
        	else
        	{
        		var oArg = {bigyogwaProgramCdNm:strSearchValue};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";
        		this.gfn_openPopup( "bigyogwa","UY01::UY01_2100102_P01.xfdl",oArg,sPopupCallBack,oOption);
        	}
        };

        // 학번 popup
        this.fn_setCallHakbeonPopup = function(strObjName, strSearchValue)
        {
        	this.dsHakbeon.clearData();

        	this.ds_sincheongInput.setColumn(this.ds_sincheongInput.rowposition, "HAKBEON_NM", strSearchValue);

        	if(!this.gfn_isNull(strSearchValue))
        	{
        		var strSvc 		= "SearchHakbeon";
        		var strUrl 		= "/prj/com/Retrieve_P04.do";
        		var strInDs  	= "ds_input=ds_sincheongInput";
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
        		if (strObjName == "grdSincheong") {
        		    if ( this.dsSincheongMaster.findRow("HAKBEON", this.dsHakbeon.getColumn(0,"HAKBEON")) >= 0 ) {
        				this.gfn_alert("이미 신청한 학번입니다.","신청정보","","warning");
        				this.dsSincheongMaster.setColumn(this.dsSincheongMaster.rowposition, "HAKBEON",     "");
        				this.dsSincheongMaster.setColumn(this.dsSincheongMaster.rowposition, "HAKSAENG_NM", "");
        				return;
        			} else {
        				this.dsSincheongMaster.setColumn(this.dsSincheongMaster.rowposition, "HAKBEON",     this.dsHakbeon.getColumn(0,"HAKBEON"));
        				this.dsSincheongMaster.setColumn(this.dsSincheongMaster.rowposition, "HAKSAENG_NM", this.dsHakbeon.getColumn(0,"HAKSAENG_NM"));
        			}
        		} else {
        			this.ds_input.setColumn(this.ds_input.rowposition, "HAKBEON",         this.dsHakbeon.getColumn(0,"HAKBEON"));
        			this.ds_input.setColumn(this.ds_input.rowposition, "HAKSAENG_NM",     this.dsHakbeon.getColumn(0,"HAKSAENG_NM"));
        		}
        	}
        	else
        	{
        		var oArg = {hakbeonNm:strSearchValue, menuId:objApp.gv_cutPrgId};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";

        		if (strObjName == "grdSincheong")
        			this.gfn_openPopup( "GridHakbeon","com::COMM_P04.xfdl",oArg,sPopupCallBack,oOption);
        		else
        			this.gfn_openPopup( "SearchHakbeon","com::COMM_P04.xfdl",oArg,sPopupCallBack,oOption);
        	}
        }
        this.grdSincheong_onexpandup = function(obj,e)
        {
        	var sValue = "";

        	if(e.cell == this.grdSincheong.getBindCellIndex("body","HAKSAENG_NM"))
        	{
        		sValue = this.gfn_trim(this.dsSincheongMaster.getColumn(this.dsSincheongMaster.rowposition,"HAKSAENG_NM"));

        		this.fn_setCallHakbeonPopup(obj.name, sValue);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.grdGaeseol.addEventHandler("onheaddblclick",this.grdGaeseol_onheaddblclick,this);
            this.div_01.form.calSearchProgramSincheongSijakDt.addEventHandler("onchanged",this.div_01_cal_00_onchanged,this);
            this.div_01.form.calSearchProgramSincheongSijakDt.addEventHandler("onkeydown",this.div_01_calSearchProgramSincheongSijakDt_onkeydown,this);
            this.div_01.form.spnSearchYYYY.addEventHandler("onkeydown",this.div_01_spnSearchYYYY_onkeydown,this);
            this.div_01.form.calSearchProgramSincheongJongryoDt.addEventHandler("onchanged",this.div_01_cal_00_onchanged,this);
            this.div_01.form.calSearchProgramSincheongJongryoDt.addEventHandler("onkeydown",this.div_01_calSearchProgramSincheongJongryoDt_onkeydown,this);
            this.div_01.form.cboSearchHakgi.addEventHandler("onkeydown",this.div_01_cboSearchHakgi_onkeydown,this);
            this.div_01.form.btnSearchBigyogwaProgram.addEventHandler("onclick",this.btnSearchBigyogwaProgram_onclick,this);
            this.div_01.form.btnSearchHakbeonNm.addEventHandler("onclick",this.btnSearchHakbeonNm_onclick,this);
            this.div_01.form.cboSearchSeunginSangtae.addEventHandler("onkeydown",this.div_01_cboSearchSeunginSangtae_onkeydown,this);
            this.grdSincheong.addEventHandler("onheaddblclick",this.grdSincheong_onheaddblclick,this);
            this.grdSincheong.addEventHandler("onheadclick",this.grdSincheong_onheadclick,this);
            this.grdSincheong.addEventHandler("onexpandup",this.grdSincheong_onexpandup,this);
            this.btnBanryeo.addEventHandler("onclick",this.btnBanryeo_onclick,this);
            this.btnAdd.addEventHandler("onclick",this.btnAdd_onclick,this);
            this.btnDel.addEventHandler("onclick",this.btnDel_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.btnExcel.addEventHandler("onclick",this.btnExcel_onclick,this);
            this.btnSeungin.addEventHandler("onclick",this.btnSeungin_onclick,this);
            this.btnExcelFormUpload.addEventHandler("onclick",this.btnExcelFormUpload_onclick,this);
            this.btnExcelFormDownload.addEventHandler("onclick",this.btnExcelFormDownload_onclick,this);
            this.btnMkSuryoNo.addEventHandler("onclick",this.btnMkSuryoNo_onclick,this);
            this.dsMaster.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.ds_input.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
            this.dsSincheongMaster.addEventHandler("oncolumnchanged",this.dsSincheongMaster_oncolumnchanged,this);
        };
        this.loadIncludeScript("UY01_2100105_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
