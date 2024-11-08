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
            this.set_titletext("비교과프로그램개설관리");
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
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"BIGYOGWA_PROGRAM_CD\" type=\"STRING\" size=\"10\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"8\"/><Column id=\"HAKGI_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GAESEOL_SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PROGRAM_SINCHEONG_SIJAK_DT\" type=\"DATE\" size=\"8\"/><Column id=\"PROGRAM_SINCHEONG_JONGRYO_DT\" type=\"DATE\" size=\"8\"/><Column id=\"PROGRAM_SIJAK_DT\" type=\"DATE\" size=\"8\"/><Column id=\"PROGRAM_JONGRYO_DT\" type=\"DATE\" size=\"8\"/><Column id=\"GANGUISIL_JONGRYU\" type=\"STRING\" size=\"20\"/><Column id=\"GANGSA_SAWON_NO\" type=\"STRING\" size=\"9\"/><Column id=\"GANGSA_NM\" type=\"STRING\" size=\"100\"/><Column id=\"SINCHEONG_GANEUNG_HAKNYEON\" type=\"STRING\" size=\"10\"/><Column id=\"SINCHEONG_GANEUNG_HAKNYEON_1\" type=\"STRING\" size=\"10\"/><Column id=\"SINCHEONG_GANEUNG_HAKNYEON_2\" type=\"STRING\" size=\"10\"/><Column id=\"SINCHEONG_GANEUNG_HAKNYEON_3\" type=\"STRING\" size=\"10\"/><Column id=\"SINCHEONG_GANEUNG_HAKNYEON_4\" type=\"STRING\" size=\"10\"/><Column id=\"SINCHEONG_GANEUNG_HAKJEOK_SANGTAE\" type=\"STRING\" size=\"50\"/><Column id=\"SINCHEONG_GANEUNG_HAKJEOK_SANGTAE_JAEHAK\" type=\"STRING\" size=\"50\"/><Column id=\"SINCHEONG_GANEUNG_HAKJEOK_SANGTAE_HYUHAK\" type=\"STRING\" size=\"50\"/><Column id=\"SINCHEONG_GANEUNG_HAKJEOK_SANGTAE_JOLUB\" type=\"STRING\" size=\"50\"/><Column id=\"SINCHEONG_JEHAN_INWON_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SEONCHAKSUN_YN\" type=\"STRING\" size=\"1\"/><Column id=\"SEONCHAKSUN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"4000\"/><Column id=\"BIGYOGWA_PROGRAM_NM\" type=\"STRING\" size=\"100\"/><Column id=\"BIGYOGWA_PROGRAM_GBCD\" type=\"STRING\" size=\"8\"/><Column id=\"BIGYOGWA_PROGRAM_GBCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BIGYOGWA_PROGRAM_SEOLMYEONG\" type=\"STRING\" size=\"4000\"/><Column id=\"JUGWAN_DEPT_CD\" type=\"STRING\" size=\"8\"/><Column id=\"JUGWAN_DEPT_NM\" type=\"STRING\" size=\"100\"/><Column id=\"DAMDANGJA_SAWON_NO\" type=\"STRING\" size=\"9\"/><Column id=\"DAMDANGJA_SAWON_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAEKSIM_YEOKRYANG_GBCD\" type=\"STRING\" size=\"8\"/><Column id=\"HAEKSIM_YEOKRYANG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JIKMU_YEOKRYANG\" type=\"STRING\" size=\"500\"/><Column id=\"HAWI_YEOKRYANG\" type=\"STRING\" size=\"500\"/><Column id=\"SINCHOENG_GANEUNG_HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"SINCHOENG_GANEUNG_HAKJEOK_SANGTAE\" type=\"STRING\" size=\"10\"/><Column id=\"ATTFL_NO\" type=\"STRING\" size=\"255\"/><Column id=\"ATTFL_NM\" type=\"STRING\" size=\"255\"/><Column id=\"KEY_VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"JUGWAN_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUGWAN_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BIGYOGWA_PROGRAM_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"BIGYOGWA_PROGRAM_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YYYY\"/><Col id=\"HAKGI\"/><Col id=\"JUGWAN_DEPT_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHaeksim", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBigyogwaBunryuDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBigyogwaBunryuMaster", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGanguisilJongryu", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSincheongGaneungHaknyeon", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSincheongGaneungHakjeokSangtae", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgiMaster", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSincheongMaster", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"BIGYOGWA_PROGRAM_CD\" type=\"STRING\" size=\"10\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"8\"/><Column id=\"GAESEOL_SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"SINCHEONG_DT\" type=\"DATE\" size=\"8\"/><Column id=\"SEUNGIN_SANGTAE\" type=\"STRING\" size=\"10\"/><Column id=\"BANRYEO_SAYU\" type=\"STRING\" size=\"4000\"/><Column id=\"SURYO_YN\" type=\"STRING\" size=\"1\"/><Column id=\"SURYO_DT\" type=\"DATE\" size=\"8\"/><Column id=\"POGI_YN\" type=\"STRING\" size=\"1\"/><Column id=\"POGI_SAYU\" type=\"STRING\" size=\"4000\"/><Column id=\"SUSANG_CD\" type=\"STRING\" size=\"8\"/><Column id=\"HWAKJEONG_MILEAGE_JUMSU\" type=\"STRING\" size=\"100\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgiDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSeonchaksunYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSincheongChk", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"BIGYOGWA_PROGRAM_CD\" type=\"STRING\" size=\"10\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"8\"/><Column id=\"GAESEOL_SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PROGRAM_SINCHEONG_SIJAK_DT\" type=\"DATE\" size=\"8\"/><Column id=\"PROGRAM_SINCHEONG_JONGRYO_DT\" type=\"DATE\" size=\"8\"/><Column id=\"PROGRAM_SIJAK_DT\" type=\"DATE\" size=\"8\"/><Column id=\"PROGRAM_JONGRYO_DT\" type=\"DATE\" size=\"8\"/><Column id=\"GANGUISIL_JONGRYU\" type=\"STRING\" size=\"20\"/><Column id=\"GANGSA_SAWON_NO\" type=\"STRING\" size=\"9\"/><Column id=\"GANGSA_NM\" type=\"STRING\" size=\"100\"/><Column id=\"SINCHEONG_JEHAN_INWON_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SEONCHAKSUN_YN\" type=\"STRING\" size=\"1\"/><Column id=\"BIGO\" type=\"STRING\" size=\"4000\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/><Column id=\"BIGYOGWA_PROGRAM_NM\" type=\"STRING\" size=\"100\"/><Column id=\"BIGYOGWA_PROGRAM_GBCD\" type=\"STRING\" size=\"8\"/><Column id=\"BIGYOGWA_PROGRAM_SEOLMYEONG\" type=\"STRING\" size=\"4000\"/><Column id=\"JUGWAN_DEPT_CD\" type=\"STRING\" size=\"8\"/><Column id=\"DAMDANGJA_SAWON_NO\" type=\"STRING\" size=\"9\"/><Column id=\"HAEKSIM_YEOKRYANG_GBCD\" type=\"STRING\" size=\"8\"/><Column id=\"JIKMU_YEOKRYANG\" type=\"STRING\" size=\"500\"/><Column id=\"HAWI_YEOKRYANG\" type=\"STRING\" size=\"500\"/><Column id=\"SINCHOENG_GANEUNG_HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"SINCHOENG_GANEUNG_HAKJEOK_SANGTAE\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rtn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_fileSingle2", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SAVENM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"NUM\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input1", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ATTFL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BIGYOGWA_PROGRAM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"GAESEOL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SABEON_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BIGYOGWA_PROGRAM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ATTFL_NO\"/><Col id=\"BIGYOGWA_PROGRAM_CD\"/><Col id=\"YYYY\"/><Col id=\"HAKGI\"/><Col id=\"GAESEOL_SEQ\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBaseYyyyHakgi", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBindable", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"bEnable\" type=\"STRING\" size=\"256\"/><Column id=\"bReadonly\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"bEnable\">true</Col><Col id=\"bReadonly\">false</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDept", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSawon", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBigyogwaProgram", this);
            obj._setContents("");
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
            obj = new Grid("grdMaster","0","104",null,null,"0","454",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"56\"/><Column size=\"159\"/><Column size=\"294\"/><Column size=\"55\"/><Column size=\"60\"/><Column size=\"153\"/><Column size=\"216\"/><Column size=\"127\"/><Column size=\"127\"/><Column size=\"125\"/><Column size=\"125\"/><Column size=\"155\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" rowspan=\"2\" text=\"NO\"/><Cell col=\"2\" rowspan=\"2\" text=\"프로그램코드\"/><Cell col=\"3\" rowspan=\"2\" text=\"프로그램명\"/><Cell col=\"4\" rowspan=\"2\" text=\"학년도\"/><Cell col=\"5\" rowspan=\"2\" text=\"학기\"/><Cell col=\"6\" rowspan=\"2\" text=\"핵심역량\"/><Cell col=\"7\" rowspan=\"2\" text=\"비교과분류구분\"/><Cell col=\"8\" colspan=\"2\" text=\"프로그램 기간\"/><Cell col=\"10\" colspan=\"2\" text=\"프로그램 신청 기간\"/><Cell col=\"12\" rowspan=\"2\" text=\"주관부서\"/><Cell col=\"13\" rowspan=\"2\" text=\"담당자\"/><Cell col=\"14\" rowspan=\"2\" text=\"강사\"/><Cell row=\"1\" col=\"8\" text=\"시작일시\"/><Cell row=\"1\" col=\"9\" text=\"종료일시\"/><Cell row=\"1\" col=\"10\" text=\"시작일시\"/><Cell row=\"1\" col=\"11\" text=\"종료일시\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:BIGYOGWA_PROGRAM_CD\" editmaxlength=\"10\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\" text=\"bind:BIGYOGWA_PROGRAM_NM\" editmaxlength=\"100\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:YYYY\" editmaxlength=\"4\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:HAKGI_NM\" editmaxlength=\"8\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\" text=\"bind:HAEKSIM_YEOKRYANG_NM\" editmaxlength=\"8\" combodataset=\"dsHaeksim\"/><Cell col=\"7\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\" editmaxlength=\"8\" text=\"bind:BIGYOGWA_PROGRAM_GBCD_NM\" combodataset=\"dsBigyogwaBunryu\"/><Cell col=\"8\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:PROGRAM_SIJAK_DT\" editmaxlength=\"8\" calendardisplaynulltype=\"none\"/><Cell col=\"9\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:PROGRAM_JONGRYO_DT\" editmaxlength=\"8\" calendardisplaynulltype=\"none\"/><Cell col=\"10\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:PROGRAM_SINCHEONG_SIJAK_DT\" editmaxlength=\"8\" calendardisplaynulltype=\"none\"/><Cell col=\"11\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:PROGRAM_SINCHEONG_JONGRYO_DT\" editmaxlength=\"8\" calendardisplaynulltype=\"none\"/><Cell col=\"12\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:JUGWAN_DEPT_NM\" editmaxlength=\"256\"/><Cell col=\"13\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:DAMDANGJA_SAWON_NM\" editmaxlength=\"256\"/><Cell col=\"14\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:GANGSA_NM\" editmaxlength=\"100\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09","0","80","330","22",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_text("비교과프로그램 개설 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_19","0","grdMaster:63","1640","28",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_20","0","grdMaster:63","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_text("비교과프로그램코드");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_21","414","grdMaster:63","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_text("비교과프로그램명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_30","1110","grdMaster:63","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_text("비교과분류구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","0","grdMaster:9","330","22",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_text("비교과프로그램 개설 상세내역");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_05","0","grdMaster:91","1640","58",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_06","0","grdMaster:91","150","58",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("비교과프로그램설명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_19_00","0","grdMaster:149","1640","28",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_20_00","0","grdMaster:149","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("프로그램 기간");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_21_00","700","grdMaster:148","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("프로그램 신청 기간");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Calendar("calProgramSijakDt","152","grdMaster:151","252","22",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calProgramJongryoDt","442","grdMaster:151","253","22",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","415","grdMaster:151","16","22",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_05_00_00","0","grdMaster:176","1640","28",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_06_00_00","0","grdMaster:176","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("주관부서");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Button("btnJugwanDept","412","grdMaster:179","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_PopSrch");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_21_00_00_00_00","700","grdMaster:176","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("담당자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDamdangjaNo","853","grdMaster:179","252","22",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnDamdangja","1114","grdMaster:179","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_PopSrch");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDamdangjaNm","1145","grdMaster:179","492","22",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_05_00_00_00","0","grdMaster:232","1640","28",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_06_00_00_00","0","grdMaster:232","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("핵심역량구분코드");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboHaeksimYeokryang","152","grdMaster:235","453","22",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_innerdataset("dsHaeksim");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_readonly("true");
            obj.set_text("핵심역량");
            obj.set_value("1");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("stc_05_00_01","0","grdMaster:260","1640","28",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_06_00_01","0","grdMaster:260","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("직무역량");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJikmuYeokryang","152","grdMaster:263","1485","22",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_maxlength("166");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_05_00_02","0","grdMaster:288","1640","28",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_06_00_02","0","grdMaster:288","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("하위역량");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHawiYeokryang","152","grdMaster:291","1485","22",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_maxlength("166");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_05_01","0","grdMaster:372","1640","78",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_06_01","0","grdMaster:372","150","78",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Div("div_01","0","0",null,"69","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSearchJugwanDeptCd","819","9","200","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            this.div_01.addChild(obj.name, obj);

            obj = new Edit("edtSearchJugwanDeptNm","1067","9","200","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("4");
            obj.set_enable("true");
            this.div_01.addChild(obj.name, obj);

            obj = new Combo("cboSearchBigyogwaProgramGbcd","85","36","230","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsBigyogwaBunryuMaster");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.div_01.addChild(obj.name, obj);

            obj = new Button("btnSearchJugwanDeptCd","1032","9","22","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_PopSrch");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01","-5","36","80","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("7");
            obj.set_text("분류구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_01_00","-5","10","80","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("8");
            obj.set_text("학년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_01.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","85","9","230","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("0");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","355","10","80","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("9");
            obj.set_text("학기");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_01.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgi","445","9","257","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsHakgiMaster");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.div_01.addChild(obj.name, obj);

            obj = new Edit("edtSearchBigyogwaProgramNm","445","36","257","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("6");
            obj.set_maxlength("33");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00","354","36","80","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("10");
            obj.set_text("프로그램명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_01","729","10","80","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("11");
            obj.set_text("주관부서");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_05_00_00_01","0","grdMaster:204","1640","28",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Calendar("calProgramSincheongJongryoDt","1145","grdMaster:151","253","22",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.getSetter("onclick").set("cal_00_00_00_onclick");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","1117","grdMaster:151","16","22",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_21_00_00_00_00_00","700","grdMaster:204","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("강사");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGangsaNo","853","grdMaster:207","252","22",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnGangsa","1114","grdMaster:207","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_cssclass("btn_WF_PopSrch");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGangsaNm","1145","grdMaster:207","492","22",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_06_00_00_01","0","grdMaster:204","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("강의실종류");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_05_00_00_01_00","0","grdMaster:316","1640","28",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_21_00_00_00_00_00_00","700","grdMaster:316","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("신청가능학적상태");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_06_00_00_01_00","0","grdMaster:316","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("신청가능학년");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk1Haknyeon","160","grdMaster:319","103","22",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("1학년");
            obj.set_tooltiptype("hover");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk2Haknyeon","303","grdMaster:319","103","22",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("2학년");
            obj.set_tooltiptype("hover");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk3Haknyeon","446","grdMaster:319","103","22",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("3학년");
            obj.set_tooltiptype("hover");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.addChild(obj.name, obj);

            obj = new Static("stc_05_00_00_01_01","0","grdMaster:344","1640","28",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk4Haknyeon","589","grdMaster:319","103","22",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("4학년");
            obj.set_tooltiptype("hover");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.addChild(obj.name, obj);

            obj = new Static("stc_21_00_00_00_00_00_01","700","grdMaster:344","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_06_00_00_01_01","0","grdMaster:344","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("신청제한인원수");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkJaehak","855","grdMaster:319","103","22",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("재학");
            obj.set_tooltiptype("hover");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkHyuhak","998","grdMaster:319","103","22",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("휴학");
            obj.set_tooltiptype("hover");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkJolub","1141","grdMaster:319","103","22",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("졸업");
            obj.set_tooltiptype("hover");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSincheongJehanInwonCnt","152","grdMaster:347","183","22",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_textAlign("center");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Static("stc_21_00_00_00_00_00_01_00","340","grdMaster:344","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("선착순여부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stRowCnt","199","79","233","24",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBigyogwaProgramCd","152","grdMaster:66","233","22",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("point");
            obj.set_enable("true");
            obj.set_maxlength("10");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBigyogwaProgramNm","566","grdMaster:66","540","22",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("point");
            obj.set_enable("true");
            obj.set_maxlength("33");
            this.addChild(obj.name, obj);

            obj = new Combo("cboBigyogwaProgramGbcd","1262","grdMaster:66","375","22",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_type("filterlike");
            obj.set_cssclass("point");
            obj.set_innerdataset("dsBigyogwaBunryuDetail");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJugwanDeptCd","152","grdMaster:179","253","22",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("point");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJugwanDeptNm","442","grdMaster:179","253","22",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("point");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtBigyogwaProgramSeolmyung","153","grdMaster:94","1484","52",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_maxlength("1333");
            obj.set_scrollbartype("auto");
            obj.set_scrolltype("vertical");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtBigo","152","grdMaster:375","1485","72",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_maxlength("1333");
            obj.set_scrollbartype("auto");
            obj.set_scrolltype("vertical");
            this.addChild(obj.name, obj);

            obj = new Calendar("calProgramSincheongSijakDt","853","grdMaster:151","253","22",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Radio("RadioSeonchaksunYn","492","grdMaster:348","183","22",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_innerdataset("dsSeonchaksunYn");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_direction("vertical");
            this.addChild(obj.name, obj);

            obj = new Button("btnBigyogwaProgramCd","390","grdMaster:66","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_PopSrch");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAttflNm","855","grdMaster:347","252","22",null,null,null,null,null,"26",this);
            obj.set_taborder("36");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_text("Edit");
            this.addChild(obj.name, obj);

            obj = new Button("btnAttFilePopup","1114","grdMaster:347","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_cssclass("btn_WF_PopSrch");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","40","1","1000","9",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","1","1","27","67",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_02","40","32","1050","5",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 6pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","690","59","100","9",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_01","316","1","56","40",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","86","1","10","67",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","436","1","10","67",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00","703","1","56","40",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","810","1","10","67",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","500","69","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","0","97","320","8",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","500","346","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","373","320","8",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Radio("RadioGanguisilJongryu","152","grdMaster:208","543","22",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_innerdataset("dsGanguisilJongryu");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_direction("vertical");
            this.addChild(obj.name, obj);

            obj = new Static("stc_05_00_00_02","0","grdMaster:35","1640","28",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Spin("spnYYYY","153","grdMaster:38","233","22",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Combo("cboHakgi","854","grdMaster:38","252","22",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_type("filterlike");
            obj.set_cssclass("point");
            obj.set_innerdataset("dsHakgiDetail");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_21_00_00_00_00_01","700","grdMaster:35","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("학기");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_06_00_00_02","0","grdMaster:35","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_text("학년도");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_30_00","1110","grdMaster:35","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_text("개설번호");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGaeseolSeq","1262","grdMaster:38","52","22",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_password("false");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("비교과프로그램개설관리");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edtBigyogwaProgramCd","value","dsMaster","BIGYOGWA_PROGRAM_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtBigyogwaProgramNm","value","dsMaster","BIGYOGWA_PROGRAM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","cboBigyogwaProgramGbcd","value","dsMaster","BIGYOGWA_PROGRAM_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edtJugwanDeptCd","value","dsMaster","JUGWAN_DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edtJugwanDeptNm","value","dsMaster","JUGWAN_DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","txtBigyogwaProgramSeolmyung","value","dsMaster","BIGYOGWA_PROGRAM_SEOLMYEONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","txtBigo","value","dsMaster","BIGO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","calProgramSijakDt","value","dsMaster","PROGRAM_SIJAK_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","calProgramJongryoDt","value","dsMaster","PROGRAM_JONGRYO_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","calProgramSincheongSijakDt","value","dsMaster","PROGRAM_SINCHEONG_SIJAK_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","calProgramSincheongJongryoDt","value","dsMaster","PROGRAM_SINCHEONG_JONGRYO_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","edtDamdangjaNo","value","dsMaster","DAMDANGJA_SAWON_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","edtGangsaNo","value","dsMaster","GANGSA_SAWON_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","edtGangsaNm","value","dsMaster","GANGSA_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_01.form.cboSearchBigyogwaProgramGbcd","value","ds_input","BIGYOGWA_PROGRAM_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","chk1Haknyeon","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_01.form.edtSearchJugwanDeptCd","value","ds_input","JUGWAN_DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","cboHaeksimYeokryang","value","dsMaster","HAEKSIM_YEOKRYANG_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","edtJikmuYeokryang","value","dsMaster","JIKMU_YEOKRYANG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","edtHawiYeokryang","value","dsMaster","HAWI_YEOKRYANG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","edtSincheongJehanInwonCnt","value","dsMaster","SINCHEONG_JEHAN_INWON_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div_01.form.edtSearchJugwanDeptNm","value","ds_input","JUGWAN_DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","cboHakgi","value","dsMaster","HAKGI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","RadioGanguisilJongryu","value","dsMaster","GANGUISIL_JONGRYU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","RadioSeonchaksunYn","value","dsMaster","SEONCHAKSUN_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","spnYYYY","value","dsMaster","YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","chk2Haknyeon","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","chk3Haknyeon","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","chk4Haknyeon","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","chkJaehak","value","dsMaster","SINCHEONG_GANEUNG_HAKJEOK_SANGTAE_JAEHAK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","chkHyuhak","value","dsMaster","SINCHEONG_GANEUNG_HAKJEOK_SANGTAE_HYUHAK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","chkJolub","value","dsMaster","SINCHEONG_GANEUNG_HAKJEOK_SANGTAE_JOLUB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","edtDamdangjaNm","value","dsMaster","DAMDANGJA_SAWON_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","edtAttflNm","value","dsMaster","ATTFL_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_01.form.spnSearchYYYY","value","ds_input","YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_01.form.cboSearchHakgi","value","ds_input","HAKGI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_01.form.edtSearchBigyogwaProgramNm","value","ds_input","BIGYOGWA_PROGRAM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item68","btnBigyogwaProgramCd","enable","dsReadOnlyYn","itemYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item69","btnJugwanDept","enable","dsReadOnlyYn","itemYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item70","btnDamdangja","enable","dsReadOnlyYn","itemYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item71","btnGangsa","enable","dsReadOnlyYn","itemYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item72","btnAttFilePopup","enable","dsReadOnlyYn","itemYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","edtGaeseolSeq","value","dsMaster","GAESEOL_SEQ");
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
        this.registerScript("UY01_2100103_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UY01_2100103_M.xfdl(비교과프로그램개설관리)
        * 작 성         일 명: jiback
        * 작 성         일 자: 2020/10/28
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
        this.lvchkColidDs   = "YYYY$HAKGI$BIGYOGWA_PROGRAM_CD$BIGYOGWA_PROGRAM_NM$BIGYOGWA_PROGRAM_GBCD$JUGWAN_DEPT_CD";     // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs = "학년도$학기$비교과프로그램코드$비교과프로그램명$비교과분류구분코드$주관부서코드";

        this.strKeyValue 	= "";
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
            var strDs    = "dsBigyogwaBunryuMaster|dsBigyogwaBunryuDetail|dsHaeksim|dsHakgiMaster|dsHakgiDetail|dsGanguisilJongryu|dsSeonchaksunYn";        // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "80101|80101|80001|00022|00022|00517|80102";                  			   											  // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "T|X|X|T|X|X|X";                                 					   								   								  // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = "";                                     							   								    									  // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
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

        };

        this.fn_PostBaseYyyyHakgiInit = function()
        {
        	if (this.dsBaseYyyyHakgi.rowcount > 0) {
        		this.ds_input.setColumn(0,"YYYY",     this.dsBaseYyyyHakgi.getColumn(0, "YYYY"));
        		this.ds_input.setColumn(0,"HAKGI",    this.dsBaseYyyyHakgi.getColumn(0, "HAKGI"));
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
        			case "baseYyyyHakgiInit":
        					this.fn_PostBaseYyyyHakgiInit();
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
        		case "bigyogwa" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					this.dsMaster.set_enableevent(false);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "BIGYOGWA_PROGRAM_CD", sRtn[0]);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "BIGYOGWA_PROGRAM_NM", sRtn[1]);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "BIGYOGWA_PROGRAM_GBCD", sRtn[2]);  // 비교과분류구분코드
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "BIGYOGWA_PROGRAM_SEOLMYEONG", sRtn[3]);  // 비교과프로그램설명
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "PROGRAM_SIJAK_DT", sRtn[4]);  // 프로그램시작일시
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "PROGRAM_JONGRYO_DT", sRtn[5]);  // 프로그램종료일시
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "JUGWAN_DEPT_CD", sRtn[6]);  // 주관부서코드
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "JUGWAN_DEPT_NM", sRtn[7]);  // 주관부서명
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "DAMDANGJA_SAWON_NO", sRtn[8]);  // 담당자사원번호
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "DAMDANGJA_SAWON_NM", sRtn[9]);  // 담당자명
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "HAEKSIM_YEOKRYANG_GBCD", sRtn[10]); // 핵심역량구분코드
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "JIKMU_YEOKRYANG", sRtn[11]); // 직무역량
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "HAWI_YEOKRYANG", sRtn[12]); // 하위역량
        					this.dsMaster.set_enableevent(true);
        				}
        			break;
        		case "deptSearch" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					this.ds_input.set_enableevent(false);
        		            this.ds_input.setColumn(this.ds_input.rowposition, "JUGWAN_DEPT_CD", sRtn[0]);
        		            this.ds_input.setColumn(this.ds_input.rowposition, "JUGWAN_DEPT_NM", sRtn[1]);
        					this.ds_input.set_enableevent(true);
        				}
        			break;
        		case "deptMaster" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					this.dsMaster.set_enableevent(false);
        		            this.dsMaster.setColumn(this.dsMaster.rowposition, "JUGWAN_DEPT_CD", sRtn[0]);
        		            this.dsMaster.setColumn(this.dsMaster.rowposition, "JUGWAN_DEPT_NM", sRtn[1]);
        					this.dsMaster.set_enableevent(true);
        				}
        			break;
        		case "damdangja":
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					this.dsMaster.set_enableevent(false);
        		            this.dsMaster.setColumn(this.dsMaster.rowposition, "DAMDANGJA_SAWON_NO", sRtn[0]);
        		            this.dsMaster.setColumn(this.dsMaster.rowposition, "DAMDANGJA_SAWON_NM", sRtn[1]);
        					this.dsMaster.set_enableevent(true);
        				}
        			break;
        		case "gangsa" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					this.dsMaster.set_enableevent(false);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "GANGSA_SAWON_NO", sRtn[0]);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "GANGSA_NM",       sRtn[1]);
        					this.dsMaster.set_enableevent(true);
        				}
        			break;

        		// 파일업로드
        		case "POP101FileUploadP01" :
        			if(!this.gfn_isNull(strVal))
        			{
        				//일반
        				var sRtn = strVal.split(",");
        				if(sRtn[0] == "S")
        				{
        				    // 첨부파일번호가 바뀌면 저장한다.
        				    if (this.dsMaster.getColumn(this.dsMaster.rowposition, "ATTFL_NO") != sRtn[1])
        					{
        						this.dsMaster.setColumn(this.dsMaster.rowposition, "ATTFL_NO", sRtn[1]);
        						this.dsMaster.setColumn(this.dsMaster.rowposition, "ATTFL_NM", sRtn[2]);

        						// 첨부파일번호 업데이트
        						this.ds_input1.setColumn(0, "BIGYOGWA_PROGRAM_CD", this.dsMaster.getColumn(this.dsMaster.rowposition, "BIGYOGWA_PROGRAM_CD"));
        						this.ds_input1.setColumn(0, "YYYY",                this.dsMaster.getColumn(this.dsMaster.rowposition, "YYYY"));
        						this.ds_input1.setColumn(0, "HAKGI",               this.dsMaster.getColumn(this.dsMaster.rowposition, "HAKGI"));
        						this.ds_input1.setColumn(0, "GAESEOL_SEQ",         this.dsMaster.getColumn(this.dsMaster.rowposition, "GAESEOL_SEQ"));
        						this.ds_input1.setColumn(0, "ATTFL_NO",            this.dsMaster.getColumn(this.dsMaster.rowposition, "ATTFL_NO"));

        						var strSvc      = "Save02";
        						var strUrl      = "/prj/UY/UY01/Save02_2100103_M.do";
        						var strInDs     = "ds_input1=ds_input1:a";
        						var strOutDs    = "";
        						var strArg      = "";
        						var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        						var strASync    = false;            //생략이나 공백일시에는 ASync=true,싱크시는 false로
        						this.gfn_Transaction(strSvc
        										   , strUrl
        										   , strInDs
        										   , strOutDs
        										   , strArg
        										   , strCallBack
        										   , strASync);
        					}

        				} else if(sRtn[0] == "M")
        				{
        				} else if(sRtn[0] == "CLOSE")
        				{

        				} else if(sRtn[0] == "EXIT")
        				{
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
                case "new" :         // 신규
                        this.fn_New();
                    break;
                case "del" :         // 삭제
                        this.fn_Del();
                    break;
                case "save" :        // 저장
                        this.fn_Save();
                    break;
                case "excel" :       // 엑셀
                        this.fn_Excel();
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
            var strUrl      = "/prj/UY/UY01/Retrieve_2100103_M.do";
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
                06. 추가 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_New = function()
        {
        	var strHakgiNm = this.dsHakgiMaster.lookup("CODE", this.ds_input.getColumn(0, "HAKGI"), "CODE_NM");

            var nRow = this.dsMaster.addRow();

        	this.dsMaster.set_enableevent(false);
            this.dsMaster.setColumn(nRow,"YYYY",  this.ds_input.getColumn(0, "YYYY"));        //연도
            this.dsMaster.setColumn(nRow,"HAKGI", this.ds_input.getColumn(0, "HAKGI"));       //학기
        	this.dsMaster.setColumn(nRow,"HAKGI_NM", strHakgiNm);
        	this.dsMaster.setColumn(nRow,"SINCHEONG_JEHAN_INWON_CNT", "0");
        	this.dsMaster.set_enableevent(true);
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
        		// 체크되어있거나 데이터셋의 로우타입이 삭제일 때
        		if(this.dsMaster.getColumn(i,"CHK") == "1" || this.dsMaster.getRowType(i) == 2)
        		{
        			this.dsSincheongMaster.clearData();
        			this.dsSincheongChk.clearData();
        			this.dsSincheongChk.insertRow(0);
        			this.dsSincheongChk.copyRow(0, this.dsMaster, i);

        			var strSvc      = "SincheongRet";
        			var strUrl      = "/prj/UY/UY01/sincheongRetrieve_2100103_M.do";
        			var strInDs     = "dsSincheongChk=dsSincheongChk";
        			var strOutDs    = "dsSincheongMaster=dsSincheongMaster";
        			var strArg      = "";
        			var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        			var strASync    = false;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
        			this.gfn_Transaction(strSvc
        								, strUrl
        								, strInDs
        								, strOutDs
        								, strArg
        								, strCallBack
        								, strASync);
        			if(this.dsSincheongMaster.rowcount > 0)
        			{
        				this.gfn_alert("신청내역이 존재하여 삭제할 수 없습니다.","삭제정보","","warning");
        			}
        			else
        			{
        				this.dsMaster.deleteRow(i);
        			}
        		}
        	}
        	this.dsMaster.set_enableevent(true);

        	//개별삭제시
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
            var strUrl      = "/prj/UY/UY01/Delete_2100103_M.do";
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
            this.gfn_getRowCount(this.stRowCnt,this.dsMaster);
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

        	// 중복된 데이터가 존재할 경우
        	var sExpr = "rowidx==dataset.findRowExpr(\"BIGYOGWA_PROGRAM_CD=='\" + BIGYOGWA_PROGRAM_CD + \"'\")";
        	if(this.dsMaster.getCaseCount(sExpr) != this.dsMaster.rowcount)
        	{
        		this.gfn_alert("중복된 비교과프로그램이 존재합니다.","저장정보","","question");
        		return false;
        	}

        	for(var i=0; i<this.dsMaster.rowcount; i++)
        	{
        		if(this.dsMaster.getColumn(i, "PROGRAM_SINCHEONG_SIJAK_DT") > this.dsMaster.getColumn(i, "PROGRAM_SINCHEONG_JONGRYO_DT"))
        		{
        			this.gfn_alert("프로그램 신청 종료일자는 프로그램 신청 시작일자보다 이전 날짜가 될 수 없습니다.","저장정보","","question");
        			return false;
        		}
        	}

            var chkFocusFlg = false;
            var result      = this.gfn_cmmnChkEssentialItem(this.dsMaster, this.lvchkColidDs, this.lvchkColNameDs, "", chkFocusFlg, this);

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

        	 for(var i=0;i<this.dsMaster.rowcount; i++)
             {
        		if(this.dsMaster.getColumn(i, "PROGRAM_SINCHEONG_SIJAK_DT") == null || this.dsMaster.getColumn(i, "PROGRAM_SINCHEONG_SIJAK_DT") == "")
        		{
        			this.dsMaster.setColumn(i, "PROGRAM_SINCHEONG_SIJAK_DT", "00010101");
        		}

        		if(this.dsMaster.getColumn(i, "PROGRAM_SINCHEONG_JONGRYO_DT") == null || this.dsMaster.getColumn(i, "PROGRAM_SINCHEONG_JONGRYO_DT") == "")
        		{
        			this.dsMaster.setColumn(i, "PROGRAM_SINCHEONG_JONGRYO_DT", "99999999");
        		}
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
            var strUrl      = "/prj/UY/UY01/Save_2100103_M.do";
            var strInDs     = "ds_input=ds_input:a ";
                strInDs    += "dsMaster=dsMaster:u";
            var strOutDs    = "dsMaster=dsMaster";
            var strArg      = "rowposition=" + this.gfn_updateRowPosition(this.dsMaster);

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
        	var nRow = this.dsMaster.findRow("KEY_VALUE",this.strKeyValue);
        	this.dsMaster.set_rowposition(nRow);

            this.gfn_getRowCount(this.stRowCnt,this.dsMaster);
        };

        /**********************************************************************
                09. ExcelDnwn 엑셀로 출력
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
            this.gfn_excelExport(this.grdMaster, "비교과프로그램 개설 목록","비교과프로그램 개설 목록");

        };

        /**********************************************************************
                10. 기타 Control Event
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

        this.dsMaster_onrowposchanged = function(obj,e)
        {
            if(this.dsMaster.getRowType(this.dsMaster.rowposition) == Dataset.ROWTYPE_INSERT)
            {
        		this.spnYYYY.set_readonly(false);
        		this.cboHakgi.set_readonly(false);
        		this.edtBigyogwaProgramCd.set_readonly(true);
        		this.edtBigyogwaProgramNm.set_readonly(false);

        		this.btnBigyogwaProgramCd.set_enable(true);
        		this.btnGangsa.set_enable(true);
        		this.btnAttFilePopup.set_enable(true);
        	} else
        	{
        		this.spnYYYY.set_readonly(true);
        		this.cboHakgi.set_readonly(true);
        		this.edtBigyogwaProgramCd.set_readonly(true);
        		this.edtBigyogwaProgramNm.set_readonly(true);

        		this.btnBigyogwaProgramCd.set_enable(false);
        		this.btnGangsa.set_enable(true);
        		this.btnAttFilePopup.set_enable(true);
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
        this.div_01_cboSearchBigyogwaProgramGbcd_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"BIGYOGWA_PROGRAM_GBCD",obj.value);
        		this.fn_Ret();
        	}
        };

        // 엔터키 누르면 조회
        this.div_01_edtSearchBigyogwaProgramNm_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"BIGYOGWA_PROGRAM_NM",obj.value);
        		this.fn_Ret();
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
                11. 팝업
        ***********************************************************************/
        // 비교과프로그램 팝업
        this.btnBigyogwaProgramCd_onclick = function(obj,e)
        {
        	var bigyogwaProgramCdNm = this.edtBigyogwaProgramCd.value;

        	this.fn_setCallBigyogwaProgramPopup(obj.name, bigyogwaProgramCdNm)
        };

        // 주관부서 팝업
        this.btnSearchJugwanDeptCd_onclick = function(obj,e)
        {
        	var deptCdNm = this.div_01.form.edtSearchJugwanDeptCd.value;

        	this.fn_setCallDeptPopup(obj.name, deptCdNm);
        };

        // 주관부서 팝업
        this.btnJugwanDept_onclick = function(obj,e)
        {
        	var deptCdNm = this.edtJugwanDeptCd.value;

        	this.fn_setCallDeptPopup(obj.name, deptCdNm);
        };

        // 담당자 팝업
        this.btnDamdangja_onclick = function(obj,e)
        {
        	var sabeonNm = this.edtDamdangjaNo.value;

        	this.fn_setCallSawonPopup("DAMDANGJA_SAWON_NM", sabeonNm)
        };

        // 강사 팝업
        this.btnGangsa_onclick = function(obj,e)
        {
        	var sabeonNm = this.edtGangsaNo.value;

        	this.fn_setCallSawonPopup("GANGSA_NM", sabeonNm)
        };

        /**********************************************************************
                12. 첨부파일
        ***********************************************************************/
        //Popup 데이터 전달
        this.fn_dsChildCopydsDummy = function(ds)
        {
        	this.dsDummy.clearData();
        	this.dsDummy.copyData(ds);
        };

        this.btnAttFilePopup_onclick = function(obj,e)
        {
        	if (this.dsMaster.rowcount > 0) {
        		var nRow = this.dsMaster.rowposition;

        		if (this.dsMaster.getRowType(nRow) == Dataset.ROWTYPE_INSERT) {
        			this.gfn_alert("신규 데이터 저장 후 첨부파일 사용 가능합니다.","저장정보","","information");
        		} else {
        		    var sAttFileNo = this.dsMaster.getColumn(nRow, "ATTFL_NO");

        			var multFlg     = "S"; 	// 멀티처리 : 싱글처리/멀티처리 S:한로우처리/M:멀티로처리

        			this.ds_input1.setColumn(this.ds_input1.rowposition, "ATTFL_NO", sAttFileNo);

        			var lv_sFlag01 			= "Y";						// (필수)부모에서 파라미터를 넘길지의 여부 (Y:파라미터넘김 / N:넘기지 않음)
        			var lv_sFlag02			= "Y";						// (필수)팝업이 열렸을때 자동조회를 할 것인가 여부.(Y:자동조회 / N:수동조회)
        			var lv_sFlag03			= multFlg;					// 멀티처리 : 싱글처리/멀티처리 S:한로우처리/M:멀티로처리
        			var lv_sValue01 		= sAttFileNo;				// 부모에서 넘어가는 파라미터(첨부파일번호)
        			var lv_sValue02 		= "8";						// 부모에서 넘어가는 파라미터(파일허용갯수)
        			var lv_sValue03 		= "all";					// 부모에서 넘어가는 파라미터(파일허용유형 all,text,image)
        			var lv_sValue04 		= "";						// 부모에서 넘어가는 파라미터(확장자 ext)
        			var lv_sValue05 		= "univ_UY";				// 부모에서 넘어가는 파라미터(도메인네임)
        			var lv_sValue06 		= "Y";                      // 부모에서 넘어가는 파라미터(추가/삭제 보이기)

        			var sPopId 			= "POP101FileUploadP01";
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

        		}
        	}
        };

        // ds_input
        this.ds_input_oncolumnchanged = function(obj,e)
        {
            // 팝업 명 삭제 시 코드 초기화
        	if (e.columnid == "JUGWAN_DEPT_NM") {
        	   if (this.gfn_isNull(e.newvalue)) {
        	       obj.setColumn(obj.rowposition, "JUGWAN_DEPT_CD", "");
        	   } else {
        			if (e.oldvalue != e.newvalue)
        			{
        				this.fn_setCallDeptPopup(obj.name, e.newvalue);
        			}
        	   }
        	}
        };

        // dsMaster
        this.dsMaster_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "HAKGI")
        	{
        		var strHakgiNm = this.dsHakgiMaster.lookup("CODE", e.newvalue, "CODE_NM");
        		this.dsMaster.setColumn(0,"HAKGI_NM", strHakgiNm);
        	}
        	else if (e.columnid == "BIGYOGWA_PROGRAM_NM")
        	{
        	   if (this.gfn_isNull(e.newvalue)) {
        	       obj.setColumn(obj.rowposition, "BIGYOGWA_PROGRAM_CD", "");
        		   obj.setColumn(obj.rowposition, "BIGYOGWA_PROGRAM_GBCD", "");       // 비교과분류구분코드
        		   obj.setColumn(obj.rowposition, "BIGYOGWA_PROGRAM_SEOLMYEONG", ""); // 비교과프로그램설명
        		   obj.setColumn(obj.rowposition, "PROGRAM_SIJAK_DT", ""); // 프로그램시작일시
        		   obj.setColumn(obj.rowposition, "PROGRAM_JONGRYO_DT", ""); // 프로그램종료일시
        		   obj.setColumn(obj.rowposition, "JUGWAN_DEPT_CD", ""); // 주관부서코드
        		   obj.setColumn(obj.rowposition, "JUGWAN_DEPT_NM", ""); //
        		   obj.setColumn(obj.rowposition, "DAMDANGJA_SAWON_NO", ""); // 담당자사원번호
        		   obj.setColumn(obj.rowposition, "DAMDANGJA_SAWON_NM", ""); //
        		   obj.setColumn(obj.rowposition, "HAEKSIM_YEOKRYANG_GBCD", ""); // 핵심역량구분코드
        		   obj.setColumn(obj.rowposition, "JIKMU_YEOKRYANG", ""); // 직무역량
        		   obj.setColumn(obj.rowposition, "HAWI_YEOKRYANG", ""); // 하위역량

        	   } else {
        			if (e.oldvalue != e.newvalue)
        			{
        				this.fn_setCallBigyogwaProgramPopup(obj.name, e.newvalue);
        			}
        	   }
        	} else if (e.columnid == "JUGWAN_DEPT_NM") {
        	   if (this.gfn_isNull(e.newvalue)) {
        	       obj.setColumn(obj.rowposition, "JUGWAN_DEPT_CD", "");
        	   } else {
        			if (e.oldvalue != e.newvalue)
        			{
        				this.fn_setCallDeptPopup(e.columnid, e.newvalue);
        			}
        	   }
        	}
        	else if (e.columnid == "DAMDANGJA_SAWON_NM") {
        	   if (this.gfn_isNull(e.newvalue)) {
        	       obj.setColumn(obj.rowposition, "DAMDANGJA_SAWON_NO", "");
        	   } else {
        			if (e.oldvalue != e.newvalue)
        			{
        				this.fn_setCallSawonPopup(e.columnid, e.newvalue);
        			}
        	   }
        	} else if (e.columnid == "GANGSA_NM")
        	{
        	   if (this.gfn_isNull(e.newvalue)) {
        	       obj.setColumn(obj.rowposition, "GANGSA_SAWON_NO", "");
        	   } else {
        			if (e.oldvalue != e.newvalue)
        			{
        				this.fn_setCallSawonPopup(e.columnid, e.newvalue);
        			}
        	   }
        	}
        };

        //Popup
        // 비교과프로그램
        this.fn_setCallBigyogwaProgramPopup = function(strObjName, strSearchValue)
        {
        	this.dsBigyogwaProgram.clearData();

        	this.ds_input1.setColumn(this.ds_input1.rowposition, "BIGYOGWA_PROGRAM_CD_NM", strSearchValue);

        	if(!this.gfn_isNull(strSearchValue))
        	{
        		var strSvc 		= "SearchBigyogwaProgram";
        		var strUrl 		= "/prj/UY/UY01/retrieve_2100202_P01.do";
        		var strInDs  	= "ds_input=ds_input1";
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
        	    this.dsMaster.setColumn(this.dsMaster.rowposition, "BIGYOGWA_PROGRAM_CD",         this.dsBigyogwaProgram.getColumn(0,"BIGYOGWA_PROGRAM_CD"));
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "BIGYOGWA_PROGRAM_NM",         this.dsBigyogwaProgram.getColumn(0,"BIGYOGWA_PROGRAM_NM"));
        	    this.dsMaster.setColumn(this.dsMaster.rowposition, "BIGYOGWA_PROGRAM_GBCD",       this.dsBigyogwaProgram.getColumn(0,"BIGYOGWA_PROGRAM_GBCD"));       // 비교과분류구분코드
        	    this.dsMaster.setColumn(this.dsMaster.rowposition, "BIGYOGWA_PROGRAM_SEOLMYEONG", this.dsBigyogwaProgram.getColumn(0,"BIGYOGWA_PROGRAM_SEOLMYEONG")); // 비교과프로그램설명
        	    this.dsMaster.setColumn(this.dsMaster.rowposition, "PROGRAM_SIJAK_DT",            this.dsBigyogwaProgram.getColumn(0,"PROGRAM_SIJAK_DT")); // 프로그램시작일시
        	    this.dsMaster.setColumn(this.dsMaster.rowposition, "PROGRAM_JONGRYO_DT",          this.dsBigyogwaProgram.getColumn(0,"PROGRAM_JONGRYO_DT")); // 프로그램종료일시
        	    this.dsMaster.setColumn(this.dsMaster.rowposition, "JUGWAN_DEPT_CD",              this.dsBigyogwaProgram.getColumn(0,"JUGWAN_DEPT_CD")); // 주관부서코드
        	    this.dsMaster.setColumn(this.dsMaster.rowposition, "JUGWAN_DEPT_NM",              this.dsBigyogwaProgram.getColumn(0,"JUGWAN_DEPT_NM")); //
        	    this.dsMaster.setColumn(this.dsMaster.rowposition, "DAMDANGJA_SAWON_NO",          this.dsBigyogwaProgram.getColumn(0,"DAMDANGJA_SAWON_NO")); // 담당자사원번호
        	    this.dsMaster.setColumn(this.dsMaster.rowposition, "DAMDANGJA_SAWON_NM",          this.dsBigyogwaProgram.getColumn(0,"DAMDANGJA_SAWON_NM")); //
        	    this.dsMaster.setColumn(this.dsMaster.rowposition, "HAEKSIM_YEOKRYANG_GBCD",      this.dsBigyogwaProgram.getColumn(0,"HAEKSIM_YEOKRYANG_GBCD")); // 핵심역량구분코드
        	    this.dsMaster.setColumn(this.dsMaster.rowposition, "JIKMU_YEOKRYANG",             this.dsBigyogwaProgram.getColumn(0,"JIKMU_YEOKRYANG")); // 직무역량
        	    this.dsMaster.setColumn(this.dsMaster.rowposition, "HAWI_YEOKRYANG",              this.dsBigyogwaProgram.getColumn(0,"HAWI_YEOKRYANG")); // 하위역량
        	}
        	else
        	{
        		var oArg = {bigyogwaProgramCdNm:strSearchValue};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";
        		this.gfn_openPopup( "bigyogwa","UY01::UY01_2100102_P01.xfdl",oArg,sPopupCallBack,oOption);
        	}

        };

        // 주관부서
        this.fn_setCallDeptPopup = function(strObjName, strSearchValue)
        {
        	this.dsDept.clearData();

        	this.ds_input1.setColumn(this.ds_input1.rowposition, "DEPT_NM", strSearchValue);

        	if(!this.gfn_isNull(strSearchValue))
        	{
        		var strSvc 		= "Search";
        		var strUrl 		= "/prj/pop/RetrieveDeptSearchList.do";
        		var strInDs  	= "ds_input=ds_input1";
        		var strOutDs 	= "dsDept=dsDept";
        		var strArg 		= "";

        		var GBV_MENUID    = objApp.gv_cutPrgId;
        		if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
        		{
        		  strArg = "GBV_MENUID=" + GBV_MENUID + " " + strArg;
        		}

        		var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        		var strASync    = false;			//샏략이나 공백일시에는 ASync=true,싱크시는 false로
        		this.gfn_Transaction( strSvc
        							, strUrl
        							, strInDs
        							, strOutDs
        							, strArg
        							, strCallBack
        							, strASync);
        	}

        	if(this.dsDept.rowcount == 1)
        	{
        	    if (strObjName == "ds_input" || strObjName == "btnSearchJugwanDeptCd") {
        			this.ds_input.setColumn(this.ds_input.rowposition, "JUGWAN_DEPT_CD", this.dsDept.getColumn(0,"DEPT_CD"));
        			this.ds_input.setColumn(this.ds_input.rowposition, "JUGWAN_DEPT_NM", this.dsDept.getColumn(0,"DEPT_NM"));
        		} else {
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "JUGWAN_DEPT_CD", this.dsDept.getColumn(0,"DEPT_CD"));
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "JUGWAN_DEPT_NM", this.dsDept.getColumn(0,"DEPT_NM"));
        		}
        	}
        		else
        	{
        		var oArg = {deptCdNm:strSearchValue, jojikGbcd:'00', useYn:'1'};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";

        		if (strObjName == "ds_input" || strObjName == "btnSearchJugwanDeptCd")
        			this.gfn_openPopup( "deptSearch","com::COMM_P01.xfdl",oArg,sPopupCallBack,oOption);
        		else
        			this.gfn_openPopup( "deptMaster","com::COMM_P01.xfdl",oArg,sPopupCallBack,oOption);
        	}

        };


        this.fn_setCallSawonPopup = function(strColumnName, strSearchValue)
        {
        	this.dsSawon.clearData();

        	this.ds_input1.setColumn(this.ds_input1.rowposition, "SABEON_NM", strSearchValue);

        	if(!this.gfn_isNull(strSearchValue))
        	{
        		var strSvc      = "SearchSawon";
        		var strUrl      = "/prj/com/Retrieve_P02.do";
        		var strInDs     = "ds_input=ds_input1";
        		var strOutDs    = "dsSawon=dsMaster";
        		var strArg      = "";
        		var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        		var strASync    = false;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
        		this.gfn_Transaction(strSvc
        						   , strUrl
        						   , strInDs
        						   , strOutDs
        						   , strArg
        						   , strCallBack
        						   , strASync);

        	}

        	if(this.dsSawon.rowcount == 1)
        	{
        		if (strColumnName == "DAMDANGJA_SAWON_NM") {
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "DAMDANGJA_SAWON_NO", this.dsSawon.getColumn(0,"SABEON"));
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "DAMDANGJA_SAWON_NM", this.dsSawon.getColumn(0,"SEONGMYEONG"));
        		} else {
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "GANGSA_SAWON_NO", this.dsSawon.getColumn(0,"SABEON"));
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "GANGSA_NM", this.dsSawon.getColumn(0,"SEONGMYEONG"));
        		}
        	} else
        	{
        		var oArg = {sabeonNm:strSearchValue};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";

        		if (strColumnName == "DAMDANGJA_SAWON_NM")
        			this.gfn_openPopup( "damdangja","com::COMM_P02.xfdl",oArg,sPopupCallBack,oOption);
        		else
        			this.gfn_openPopup( "gangsa","com::COMM_P02.xfdl",oArg,sPopupCallBack,oOption);
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
            this.grdMaster.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
            this.btnJugwanDept.addEventHandler("onclick",this.btnJugwanDept_onclick,this);
            this.btnDamdangja.addEventHandler("onclick",this.btnDamdangja_onclick,this);
            this.div_01.form.edtSearchJugwanDeptCd.addEventHandler("onchanged",this.div_01_edtSearchJugwanDeptCd_onchanged,this);
            this.div_01.form.cboSearchBigyogwaProgramGbcd.addEventHandler("onkeydown",this.div_01_cboSearchBigyogwaProgramGbcd_onkeydown,this);
            this.div_01.form.btnSearchJugwanDeptCd.addEventHandler("onclick",this.btnSearchJugwanDeptCd_onclick,this);
            this.div_01.form.spnSearchYYYY.addEventHandler("onkeydown",this.div_01_spnSearchYYYY_onkeydown,this);
            this.div_01.form.cboSearchHakgi.addEventHandler("onkeydown",this.div_01_cboSearchHakgi_onkeydown,this);
            this.div_01.form.edtSearchBigyogwaProgramNm.addEventHandler("onkeydown",this.div_01_edtSearchBigyogwaProgramNm_onkeydown,this);
            this.btnGangsa.addEventHandler("onclick",this.btnGangsa_onclick,this);
            this.btnBigyogwaProgramCd.addEventHandler("onclick",this.btnBigyogwaProgramCd_onclick,this);
            this.btnAttFilePopup.addEventHandler("onclick",this.btnAttFilePopup_onclick,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsMaster.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
            this.ds_input.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
        };
        this.loadIncludeScript("UY01_2100103_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
