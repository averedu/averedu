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
            this.set_titletext("비교과프로그램사용승인관리");
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
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"BIGYOGWA_PROGRAM_CD\" type=\"STRING\" size=\"10\"/><Column id=\"BIGYOGWA_PROGRAM_NM\" type=\"STRING\" size=\"100\"/><Column id=\"BIGYOGWA_PROGRAM_SEOLMYEONG\" type=\"STRING\" size=\"4000\"/><Column id=\"BIGYOGWA_PROGRAM_GBCD\" type=\"STRING\" size=\"8\"/><Column id=\"BIGYOGWA_PROGRAM_GBCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRAM_SIJAK_DT\" type=\"DATE\" size=\"8\"/><Column id=\"PROGRAM_JONGRYO_DT\" type=\"DATE\" size=\"8\"/><Column id=\"SINCHEONG_DT\" type=\"DATE\" size=\"8\"/><Column id=\"SEUNGIN_SANGTAE_0\" type=\"STRING\" size=\"10\"/><Column id=\"SEUNGIN_SANGTAE_NM_0\" type=\"STRING\" size=\"256\"/><Column id=\"SEUNGIN_SANGTAE\" type=\"STRING\" size=\"10\"/><Column id=\"SEUNGIN_SANGTAE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEUNGIN_DT\" type=\"DATE\" size=\"8\"/><Column id=\"BANRYEO_SAYU\" type=\"STRING\" size=\"4000\"/><Column id=\"JUGWAN_DEPT_CD\" type=\"STRING\" size=\"8\"/><Column id=\"JUGWAN_DEPT_NM\" type=\"STRING\" size=\"100\"/><Column id=\"DAMDANGJA_SAWON_NO\" type=\"STRING\" size=\"9\"/><Column id=\"DAMDANGJA_SAWON_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAEKSIM_YEOKRYANG_GBCD\" type=\"STRING\" size=\"8\"/><Column id=\"HAEKSIM_YEOKRYANG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JIKMU_YEOKRYANG\" type=\"STRING\" size=\"500\"/><Column id=\"HAWI_YEOKRYANG\" type=\"STRING\" size=\"500\"/><Column id=\"GIBON_MILEAGE\" type=\"STRING\" size=\"100\"/><Column id=\"BIGO\" type=\"STRING\" size=\"4000\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"JUGWAN_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUGWAN_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BIGYOGWA_PROGRAM_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"BIGYOGWA_PROGRAM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SINCHEONG_SIJAK_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SINCHEONG_JONGRYO_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SEUNGIN_SANGTAE\" type=\"STRING\" size=\"256\"/><Column id=\"BIGYOGWA_PROGRAM_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"JUGWAN_DEPT_CD\"/><Col id=\"JUGWAN_DEPT_NM\"/><Col id=\"BIGYOGWA_PROGRAM_GBCD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSeungInSangtaeMaster", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBigyogwaBunryuDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHaeksim", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSeungInSangtaeDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBigyogwaBunryuMaster", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGaeseolMaster", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"BIGYOGWA_PROGRAM_CD\" type=\"STRING\" size=\"10\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"8\"/><Column id=\"GAESEOL_SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PROGRAM_SINCHEONG_SIJAK_DT\" type=\"DATE\" size=\"8\"/><Column id=\"PROGRAM_SINCHEONG_JONGRYO_DT\" type=\"DATE\" size=\"8\"/><Column id=\"PROGRAM_SIJAK_DT\" type=\"DATE\" size=\"8\"/><Column id=\"PROGRAM_JONGRYO_DT\" type=\"DATE\" size=\"8\"/><Column id=\"GANGUISIL_JONGRYU\" type=\"STRING\" size=\"20\"/><Column id=\"GANGSA_SAWON_NO\" type=\"STRING\" size=\"9\"/><Column id=\"GANGSA_NM\" type=\"STRING\" size=\"100\"/><Column id=\"SINCHEONG_GANEUNG_HAKNYEON\" type=\"STRING\" size=\"10\"/><Column id=\"SINCHEONG_GANEUNG_HAKJEOK_SANGTAE\" type=\"STRING\" size=\"50\"/><Column id=\"SINCHEONG_JEHAN_INWON_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SEONCHAKSUN_YN\" type=\"STRING\" size=\"1\"/><Column id=\"BIGO\" type=\"STRING\" size=\"4000\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGaeseolChk", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"BIGYOGWA_PROGRAM_CD\" type=\"STRING\" size=\"10\"/><Column id=\"BIGYOGWA_PROGRAM_NM\" type=\"STRING\" size=\"100\"/><Column id=\"BIGYOGWA_PROGRAM_SEOLMYEONG\" type=\"STRING\" size=\"4000\"/><Column id=\"BIGYOGWA_PROGRAM_GBCD\" type=\"STRING\" size=\"8\"/><Column id=\"PROGRAM_SIJAK_DT\" type=\"DATE\" size=\"8\"/><Column id=\"PROGRAM_JONGRYO_DT\" type=\"DATE\" size=\"8\"/><Column id=\"SINCHEONG_DT\" type=\"DATE\" size=\"8\"/><Column id=\"SEUNGIN_SANGTAE\" type=\"STRING\" size=\"10\"/><Column id=\"SEUNGIN_DT\" type=\"DATE\" size=\"8\"/><Column id=\"BANRYEO_SAYU\" type=\"STRING\" size=\"4000\"/><Column id=\"JUGWAN_DEPT_CD\" type=\"STRING\" size=\"8\"/><Column id=\"DAMDANGJA_SAWON_NO\" type=\"STRING\" size=\"9\"/><Column id=\"SINCHEONG_GANEUNG_HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"SINCHEONG_GANEUNG_HAKJEOK_SANGTAE\" type=\"STRING\" size=\"10\"/><Column id=\"HAEKSIM_YEOKRYANG_GBCD\" type=\"STRING\" size=\"8\"/><Column id=\"JIKMU_YEOKRYANG\" type=\"STRING\" size=\"500\"/><Column id=\"HAWI_YEOKRYANG\" type=\"STRING\" size=\"500\"/><Column id=\"GIBON_MILEAGE\" type=\"STRING\" size=\"100\"/><Column id=\"BIGO\" type=\"STRING\" size=\"4000\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rtn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBindable", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"bEnable\" type=\"STRING\" size=\"256\"/><Column id=\"bReadonly\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"bEnable\">true</Col><Col id=\"bReadonly\">false</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input1", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SABEON_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDept", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSawon", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdMaster","0","104",null,null,"0","380",null,null,"150",null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"51\"/><Column size=\"69\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"159\"/><Column size=\"294\"/><Column size=\"153\"/><Column size=\"140\"/><Column size=\"125\"/><Column size=\"125\"/><Column size=\"155\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" rowspan=\"2\" text=\"NO\"/><Cell col=\"2\" rowspan=\"2\" text=\"승인상태\"/><Cell col=\"3\" rowspan=\"2\" text=\"신청일자\"/><Cell col=\"4\" rowspan=\"2\" text=\"승인일자\"/><Cell col=\"5\" rowspan=\"2\" text=\"프로그램코드\"/><Cell col=\"6\" rowspan=\"2\" text=\"프로그램명\"/><Cell col=\"7\" rowspan=\"2\" text=\"핵심역량\"/><Cell col=\"8\" rowspan=\"2\" text=\"비교과분류구분\"/><Cell col=\"9\" colspan=\"2\" text=\"프로그램 운영 기간\"/><Cell col=\"11\" rowspan=\"2\" text=\"주관부서\"/><Cell row=\"1\" col=\"9\" text=\"시작일자\"/><Cell row=\"1\" col=\"10\" text=\"종료일자\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:SEUNGIN_SANGTAE_NM\" editmaxlength=\"10\" combodataset=\"dsSeungInSangtaeDetail\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:SINCHEONG_DT\" editmaxlength=\"8\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:SEUNGIN_DT\" editmaxlength=\"8\" calendardisplaynulltype=\"none\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\" text=\"bind:BIGYOGWA_PROGRAM_CD\" editmaxlength=\"10\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\" text=\"bind:BIGYOGWA_PROGRAM_NM\" editmaxlength=\"100\"/><Cell col=\"7\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\" text=\"bind:HAEKSIM_YEOKRYANG_NM\" editmaxlength=\"8\" combodataset=\"dsHaeksim\"/><Cell col=\"8\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\" editmaxlength=\"8\" text=\"bind:BIGYOGWA_PROGRAM_GBCD_NM\" combodataset=\"dsBigyogwaBunryu\"/><Cell col=\"9\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:PROGRAM_SIJAK_DT\" editmaxlength=\"8\" calendardisplaynulltype=\"none\"/><Cell col=\"10\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:PROGRAM_JONGRYO_DT\" editmaxlength=\"8\" calendardisplaynulltype=\"none\"/><Cell col=\"11\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:JUGWAN_DEPT_NM\" editmaxlength=\"256\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09","0","79","330","22",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("비교과프로그램 신청 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_19","0","grdMaster:35","1640","28",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_20","0","grdMaster:35","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("비교과프로그램코드");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_21","414","grdMaster:35","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("비교과프로그램명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_30","1140","grdMaster:35","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("비교과분류구분코드");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","0","grdMaster:10","330","22",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("비교과프로그램 신청 상세내역");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_05","0","grdMaster:63","1640","58",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_06","0","grdMaster:63","150","58",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("비교과프로그램설명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_19_00","0","grdMaster:121","1640","28",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_20_00","0","grdMaster:121","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("프로그램 운영 기간");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_21_00","885","grdMaster:121","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("기본마일리지");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGibonMileage","1036","grdMaster:124","600","22",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_maxlength("33");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calProgramSijakDt","153","grdMaster:124","343","22",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calProgramJongryoDt","531","grdMaster:124","348","22",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","505","grdMaster:124","16","22",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_19_00_00","0","grdMaster:149","1640","28",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_20_00_00","0","grdMaster:149","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("신청일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_21_00_00","1110","grdMaster:149","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("승인일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSincheongDt","153","grdMaster:152","343","22",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_21_00_00_00","500","grdMaster:149","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("승인상태");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSeunginSangtae","652","grdMaster:152","453","22",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_innerdataset("dsSeungInSangtaeDetail");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSeunginDt","1262","grdMaster:152","374","22",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_05_00","0","grdMaster:177","1640","28",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_06_00","0","grdMaster:177","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("반려사유");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBanryeoSayu","153","grdMaster:180","1483","22",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_maxlength("1333");
            this.addChild(obj.name, obj);

            obj = new Static("stc_05_00_00","0","grdMaster:205","1640","28",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_06_00_00","0","grdMaster:205","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("주관부서");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Button("btnJugwanDeptCd","412","grdMaster:208","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_PopSrch");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_21_00_00_00_00","700","grdMaster:205","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("담당자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDamdangjaSawonNo","853","grdMaster:208","252","22",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnDamdangja","1113","grdMaster:208","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_PopSrch");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDamdangjaSawonNm","1145","grdMaster:208","252","22",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_05_00_00_00","0","grdMaster:233","1640","28",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_06_00_00_00","0","grdMaster:233","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("핵심역량구분코드");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboHaeksimYeokryangGbcd","153","grdMaster:236","453","22",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_innerdataset("dsHaeksim");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("stc_05_00_01","0","grdMaster:261","1640","28",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_06_00_01","0","grdMaster:261","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("직무역량");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJikmuYeokryang","153","grdMaster:264","1483","22",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_maxlength("166");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_05_00_02","0","grdMaster:289","1640","28",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_06_00_02","0","grdMaster:289","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("하위역량");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHawiYeokryang","153","grdMaster:292","1483","22",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_maxlength("166");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_05_01","0","grdMaster:317","1640","58",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_06_01","0","grdMaster:317","150","58",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Div("div_01","0","0",null,"69","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01_00","-3","9","80","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("8");
            obj.set_text("주관부서");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01","-3","36","80","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("9");
            obj.set_text("신청기간");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_01.addChild(obj.name, obj);

            obj = new Calendar("calSearchSincheongSijakDt","87","36","200","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_01.addChild(obj.name, obj);

            obj = new Edit("edtSearchJugwanDeptCd","87","9","200","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("0");
            obj.set_readonly("true");
            this.div_01.addChild(obj.name, obj);

            obj = new Button("btnSearchJugwanDeptCd","300","9","22","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_PopSrch");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("Static00_00","303","36","16","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("10");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.div_01.addChild(obj.name, obj);

            obj = new Calendar("calSearchSincheongJongryoDt","337","36","200","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_01.addChild(obj.name, obj);

            obj = new Edit("edtSearchJugwanDeptNm","337","9","200","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","562","9","80","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("11");
            obj.set_text("분류구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00","562","36","80","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("12");
            obj.set_text("승인상태");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_01.addChild(obj.name, obj);

            obj = new Combo("cboSearchSeunginSangtae","652","36","230","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsSeungInSangtaeMaster");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.div_01.addChild(obj.name, obj);

            obj = new Combo("cboSearchProgramCd","652","9","230","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsBigyogwaBunryuMaster");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_index("0");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_01","919","9","80","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("13");
            obj.set_text("프로그램명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_01.addChild(obj.name, obj);

            obj = new Edit("edtSearchProgramNm","1009","9","257","22",null,null,"100",null,null,null,this.div_01.form);
            obj.set_taborder("4");
            obj.set_maxlength("33");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stRowCnt","199","78","233","24",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJugwanDeptCd","153","grdMaster:208","253","22",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("point");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJugwanDeptNm","442","grdMaster:208","253","22",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("point");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBigyogwaProgramNm","566","grdMaster:38","569","22",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("point");
            obj.set_enable("true");
            obj.set_maxlength("33");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cboBigyogwaProgramGbcd","1292","grdMaster:38","344","22",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_innerdataset("dsBigyogwaBunryuDetail");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_type("filterlike");
            obj.set_cssclass("point");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBigyogwaProgramCd","153","grdMaster:38","258","22",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("point");
            obj.set_enable("true");
            obj.set_maxlength("10");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtBigo","153","grdMaster:320","1483","52",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_maxlength("1333");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtBigyogwaProgramSeolmyung","153","grdMaster:66","1483","52",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_maxlength("1333");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","1","1","27","67",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_01","538","1","56","40",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","500","69","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","0","96","320","8",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","720","59","100","9",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","447","320","8",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","500","420","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","40","1","320","9",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_02","40","32","1050","5",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 6pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00","883","1","56","40",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","80","1","10","67",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","643","1","10","68",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","1000","1","10","68",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("비교과프로그램사용승인관리");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item4","calProgramSijakDt","value","dsMaster","PROGRAM_SIJAK_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","calProgramJongryoDt","value","dsMaster","PROGRAM_JONGRYO_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edtGibonMileage","value","dsMaster","GIBON_MILEAGE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","calSincheongDt","value","dsMaster","SINCHEONG_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","cboSeunginSangtae","value","dsMaster","SEUNGIN_SANGTAE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","calSeunginDt","value","dsMaster","SEUNGIN_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edtBanryeoSayu","value","dsMaster","BANRYEO_SAYU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","edtDamdangjaSawonNo","value","dsMaster","DAMDANGJA_SAWON_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","cboHaeksimYeokryangGbcd","value","dsMaster","HAEKSIM_YEOKRYANG_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","edtJikmuYeokryang","value","dsMaster","JIKMU_YEOKRYANG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","edtHawiYeokryang","value","dsMaster","HAWI_YEOKRYANG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","edtJugwanDeptCd","value","dsMaster","JUGWAN_DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","edtJugwanDeptNm","value","dsMaster","JUGWAN_DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","edtBigyogwaProgramNm","value","dsMaster","BIGYOGWA_PROGRAM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","cboBigyogwaProgramGbcd","value","dsMaster","BIGYOGWA_PROGRAM_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","edtBigyogwaProgramCd","value","dsMaster","BIGYOGWA_PROGRAM_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","txtBigo","value","dsMaster","BIGO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","txtBigyogwaProgramSeolmyung","value","dsMaster","BIGYOGWA_PROGRAM_SEOLMYEONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","edtDamdangjaSawonNm","value","dsMaster","DAMDANGJA_SAWON_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_01.form.calSearchSincheongSijakDt","value","ds_input","SINCHEONG_SIJAK_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_01.form.edtSearchJugwanDeptCd","value","ds_input","JUGWAN_DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_01.form.calSearchSincheongJongryoDt","value","ds_input","SINCHEONG_JONGRYO_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_01.form.cboSearchSeunginSangtae","value","ds_input","SEUNGIN_SANGTAE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_01.form.cboSearchProgramCd","value","ds_input","BIGYOGWA_PROGRAM_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div_01.form.edtSearchProgramNm","value","ds_input","BIGYOGWA_PROGRAM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div_01.form.edtSearchJugwanDeptNm","value","ds_input","JUGWAN_DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","edtBanryeoSayu","readonly","dsBindable","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
            this._addPreloadList("data","","dsGaeseolMaster");
            this._addPreloadList("data","","dsGaeseolChk");
        };
        
        // User Script
        this.registerScript("UY01_2100102_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UY01_2100102_M.xfdl(비교과프로그램사용승인관리)
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
        this.lvchkColidDs   = "BIGYOGWA_PROGRAM_CD$BIGYOGWA_PROGRAM_NM$BIGYOGWA_PROGRAM_GBCD$JUGWAN_DEPT_CD";     // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs = "비교과프로그램코드$비교과프로그램명$비교과분류구분코드$주관부서코드";

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
            var strDs    = "dsSeungInSangtaeMaster|dsBigyogwaBunryuDetail|dsHaeksim|dsSeungInSangtaeDetail|dsBigyogwaBunryuMaster";        // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00520|80101|80001|00520|80101";                  			   							 				      // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "T|X|X|X|T";                                 					   								     						  // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = "";                                     							   								     							  // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId    = "Init";

                // gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
                // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.

            this.gfn_CmmnMultiComboLoad(strDs
                                      , strLgcd
                                      , strComb
                                      , strOptn
                                      , svcId);

        };

        this.fn_PostformInit = function()
        {
            var sincheongJongryoDt = objApp.gds_SystemDate.getColumn(0,"YYYYMMDD");

        	this.ds_input.setColumn(0, "SINCHEONG_SIJAK_DT", this.gfn_addMonth(sincheongJongryoDt, -1));
        	this.ds_input.setColumn(0, "SINCHEONG_JONGRYO_DT", sincheongJongryoDt);


        	this.div_01.form.cboSearchProgramCd.set_index(0)

        	this.dsSeungInSangtaeMaster.filter("CODE!='01'");
        	this.div_01.form.cboSearchSeunginSangtae.set_index(0)
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
        		case "sawon" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					this.dsMaster.set_enableevent(false);
        		            this.dsMaster.setColumn(this.dsMaster.rowposition, "DAMDANGJA_SAWON_NO", sRtn[0]);
        		            this.dsMaster.setColumn(this.dsMaster.rowposition, "DAMDANGJA_SAWON_NM", sRtn[1]);
        					this.dsMaster.set_enableevent(true);
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
                case "excel" :       // 엑셀
                        this.fn_Excel();
                    break;
                case "tmp1" :        // 승인
                         this.fn_Seungin();
                    break;
                case "tmp2" :        // 반려
                         this.fn_Banryeo();
                    break;
                case "tmp3" :        // 승인반려취소
        				 this.fn_SeunginBanryeoCancel();
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
        	if(this.ds_input.getColumn(this.ds_input.rowposition, "SINCHEONG_SIJAK_DT") > this.ds_input.getColumn(this.ds_input.rowposition, "SINCHEONG_JONGRYO_DT"))
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
            var strUrl      = "/prj/UY/UY01/Retrieve_2100102_M.do";
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
            //trace(this.dsMaster.saveXML());
            this.gfn_getRowCount(this.stRowCnt,this.dsMaster);
        };

        /**********************************************************************
        	06. 승인 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 추가 전 실행(기본체크사항)
         */
        this.fn_PreSeungin = function()
        {
        	// 선택한 데이터가 없을 경우
        	if(this.dsMaster.rowcount < 1 || this.dsMaster.findRow("CHK",1) == -1)
            {
                this.gfn_alert("승인할 데이터를 선택해주세요.","승인정보","","warning");
                return false;
            }

        	for(var i=0;i<this.dsMaster.rowcount; i++)
        	{
        		// 체크되어있거나 데이터셋의 로우타입이 수정일 때
        		if(this.dsMaster.getColumn(i,"CHK") == "1" && this.dsMaster.getRowType(i) == Dataset.ROWTYPE_UPDATE)
        		{
        			// 승인상태가 없을 경우
        			if(this.dsMaster.getColumn(i, "SEUNGIN_SANGTAE") == "01")
        			{
        				this.dsMaster.set_rowposition(i);
        				this.gfn_alert("먼저 신청해주세요.","승인정보","","warning");
        				return false;
        			}

        			// 승인상태가 승인일 경우
        			if(this.dsMaster.getColumn(i, "SEUNGIN_SANGTAE") == "03")
        			{
        				this.dsMaster.set_rowposition(i);
        				this.gfn_alert("이미 승인한 항목입니다.","승인정보","","warning");
        				return false;
        			}

        			// 승인상태가 반려일 경우
        			if(this.dsMaster.getColumn(i, "SEUNGIN_SANGTAE") == "04")
        			{
        				this.dsMaster.set_rowposition(i);
        				this.gfn_alert("반려한 항목은 승인할 수 없습니다.\n반려취소 후 승인해주세요.","승인정보","","warning");
        				return false;
        			}

        			// 반려사유에 내용이 있을 경우
        			if(!this.gfn_isNull(this.dsMaster.getColumn(i, "BANRYEO_SAYU")))
        			{
        				this.dsMaster.set_rowposition(i);
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

        	return true;
        };

        /**
         * 기능 : 마스터 승인 실행
         */
        this.fn_Seungin = function()
        {
        	if(!this.fn_PreSeungin())
        	{
        		return false;
        	}

        	// 승인상태 변경
        	for(var i=0;i<this.dsMaster.rowcount; i++)
        	{
        		// 체크되어있거나 데이터셋의 로우타입이 수정일 때
        		if(this.dsMaster.getColumn(i,"CHK") == "1" && this.dsMaster.getRowType(i) == Dataset.ROWTYPE_UPDATE)
        		{
        			this.dsMaster.setColumn(i, "SEUNGIN_SANGTAE", "03"); // 승인
        			this.dsMaster.setColumn(i, "SEUNGIN_DT", objApp.gds_SystemDate.getColumn(0,"YYYYMMDD"));
        		}
        	}

        	var strSvc      = "Save";
            var strUrl      = "/prj/UY/UY01/Save_2100102_M.do";
            var strInDs     = "ds_input=ds_input:a ";
                strInDs    += "dsMaster=dsMaster:u";
            var strOutDs    = "dsMaster=dsMaster";
        	var strArg      = "rowposition=" + this.gfn_updateRowPosition(this.dsMaster);  // 저장 후 row 유지

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
        	07. 반려 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 추가 전 실행(기본체크사항)
         */
        this.fn_PreBanryeo = function()
        {
        	// 선택한 데이터가 없을 경우
        	if(this.dsMaster.rowcount < 1 || this.dsMaster.findRow("CHK",1) == -1)
            {
                this.gfn_alert("반려할 데이터를 선택해주세요.","반려정보","","warning");
                return false;
            }

        	for(var i=0;i<this.dsMaster.rowcount; i++)
        	{
        		// 체크되어있거나 데이터셋의 로우타입이 수정일 때
        		if(this.dsMaster.getColumn(i,"CHK") == "1" && this.dsMaster.getRowType(i) == Dataset.ROWTYPE_UPDATE)
        		{
        			// 승인상태가 없을 경우
        			if(this.dsMaster.getColumn(i, "SEUNGIN_SANGTAE") == "01")
        			{
        				this.dsMaster.set_rowposition(i);
        				this.gfn_alert("먼저 신청해주세요.","승인정보","","warning");
        				return false;
        			}

        			// 승인상태가 반려일 경우
        			if(this.dsMaster.getColumn(i, "SEUNGIN_SANGTAE") == "04")
        			{
        				this.dsMaster.set_rowposition(i);
        				this.gfn_alert("이미 반려한 항목입니다.","반려정보","","warning");
        				return false;
        			}

        			// 승인상태가 승인일 경우
        			if(this.dsMaster.getColumn(i, "SEUNGIN_SANGTAE") == "03")
        			{
        				this.dsMaster.set_rowposition(i);
        				this.gfn_alert("승인한 항목은 반려할 수 없습니다.\n승인취소 후 반려해주세요.","반려정보","","warning");
        				return false;
        			}

        			// 반려사유에 내용이 없을 경우
        			if(this.gfn_isNull(this.dsMaster.getColumn(i, "BANRYEO_SAYU")) )
        			{
        				this.dsMaster.set_rowposition(i);
        				this.gfn_alert("반려사유를 입력 해주세요.","승인정보","","warning");
        				this.edtBanryeoSayu.setFocus();
        				return false;
        			}
        		}
        	} // for

        	var result = this.gfn_confirm( "현재 선택행을 반려하시겠습니까?", "반려정보","","question" );
        	if(result == 0)
        	{
        		return false;
        	}

        	return true;
        };

        /**
         * 기능 : 마스터 반려 실행
         */
        this.fn_Banryeo = function()
        {

        	if(!this.fn_PreBanryeo())
        	{
        		return false;
        	}

        	// 승인상태 변경
        	for(var i=0;i<this.dsMaster.rowcount; i++)
        	{
        		// 체크되어있거나 데이터셋의 로우타입이 수정일 때
        		if(this.dsMaster.getColumn(i,"CHK") == "1" && this.dsMaster.getRowType(i) == Dataset.ROWTYPE_UPDATE)
        		{
        			this.dsMaster.setColumn(i, "SEUNGIN_SANGTAE", "04");
        			this.dsMaster.setColumn(i, "SEUNGIN_DT", null);
        		}
        	}

        	var strSvc      = "Save";
            var strUrl      = "/prj/UY/UY01/Save_2100102_M.do";
            var strInDs     = "ds_input=ds_input:a ";
                strInDs    += "dsMaster=dsMaster:u";
            var strOutDs    = "dsMaster=dsMaster";
            var strArg      = "rowposition=" + this.gfn_updateRowPosition(this.dsMaster);  // 저장 후 row 유지

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
        	08. 승인/반려취소 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 추가 전 실행(기본체크사항)
         */
        this.fn_PreSeunginBanryeoCancel = function()
        {
        	// 선택한 데이터가 없을 경우
        	if(this.dsMaster.rowcount < 1 || this.dsMaster.findRow("CHK",1) == -1)
            {
                this.gfn_alert("승인/반려취소할 데이터를 선택해주세요.","승인/반려취소정보","","warning");
                return false;
            }

        	for(var i=0;i<this.dsMaster.rowcount; i++)
        	{
        		// 체크되어있거나 데이터셋의 로우타입이 수정일 때
        		if(this.dsMaster.getColumn(i,"CHK") == "1" && this.dsMaster.getRowType(i) == Dataset.ROWTYPE_UPDATE)
        		{
        			// 승인상태가 승인/반려일 경우
        			if(!(this.dsMaster.getColumn(i, "SEUNGIN_SANGTAE") == "03" || this.dsMaster.getColumn(i, "SEUNGIN_SANGTAE") == "04"))
        			{
        				this.dsMaster.set_rowposition(i);
        				this.gfn_alert("승인 또는 반려상태가 아닙니다.","승인/반려취소정보","","warning");
        				return false;
        			}
        		}
        	}

        	var result = this.gfn_confirm( "현재 선택행을 승인취소 또는 반려취소 하시겠습니까?", "	","","question" );
        	if(result == 0)
        	{
        		return false;
        	}

        	return true;
        };

        /**
         * 기능 : 마스터 반려 실행
         */
        this.fn_SeunginBanryeoCancel = function()
        {

        	if(!this.fn_PreSeunginBanryeoCancel())
        	{
        		return false;
        	}

        	// 승인상태 변경
        	for(var i=0;i<this.dsMaster.rowcount; i++)
        	{
        		// 체크되어있거나 데이터셋의 로우타입이 수정일 때
        		if(this.dsMaster.getColumn(i,"CHK") == "1" && this.dsMaster.getRowType(i) == Dataset.ROWTYPE_UPDATE)
        		{
        			this.dsMaster.setColumn(i, "SEUNGIN_SANGTAE", "02");
        			this.dsMaster.setColumn(i, "SEUNGIN_DT", null);
        		}
        	}

        	var strSvc      = "Save";
            var strUrl      = "/prj/UY/UY01/Save_2100102_M.do";
            var strInDs     = "ds_input=ds_input:a ";
                strInDs    += "dsMaster=dsMaster:u";
            var strOutDs    = "dsMaster=dsMaster";
            var strArg      = "rowposition=" + this.gfn_updateRowPosition(this.dsMaster);  // 저장 후 row 유지

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
            this.gfn_excelExport(this.grdMaster, "비교과프로그램 신청 목록","비교과프로그램 신청 목록");

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

        // 엔터키 누르면 조회
        this.div_01_cboSearchProgramCd_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"BIGYOGWA_PROGRAM_GBCD",obj.value);
        		this.fn_Ret();
        	}
        };

        // 엔터키 누르면 조회
        this.div_01_edtSearchProgramNm_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"BIGYOGWA_PROGRAM_NM",obj.value);
        		this.fn_Ret();
        	}
        };

        // 엔터키 누르면 조회
        this.div_01_calSearchSincheongSijakDt_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"SINCHEONG_SIJAK_DT",obj.value);
        		this.fn_Ret();
        	}
        };

        // 엔터키 누르면 조회
        this.div_01_calSearchSincheongJongryoDt_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"SINCHEONG_JONGRYO_DT",obj.value);
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

        /**********************************************************************
                11. 팝업
        ***********************************************************************/

        // 검색조건 주관부서 팝업
        this.btnSearchJugwanDeptCd_onclick = function(obj,e)
        {
        	var deptCdNm = this.div_01.form.edtSearchJugwanDeptNm.value;

        	this.fn_setCallDeptPopup(obj.name, deptCdNm);
        };

        // 주관부서 팝업
        this.btnJugwanDeptCd_onclick = function(obj,e)
        {
        	var deptCdNm = this.edtJugwanDeptNm.value;

        	this.fn_setCallDeptPopup(obj.name, deptCdNm);
        };

        // 담당자 팝업
        this.btnDamdangja_onclick = function(obj,e)
        {
        	var sabeonNm = this.edtDamdangjaSawonNm.value;

        	this.fn_setCallSawonPopup(sabeonNm);
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
        	else if (e.columnid == "DAMDANGJA_SAWON_NM") {
        	   if (this.gfn_isNull(e.newvalue)) {
        	       obj.setColumn(obj.rowposition, "DAMDANGJA_SAWON_NO", "");
        	   } else {
        			if (e.oldvalue != e.newvalue)
        			{
        				this.fn_setCallSawonPopup(e.newvalue);
        			}
        	   }
        	}
        };

        //Popup
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


        this.fn_setCallSawonPopup = function(strSearchValue)
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
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "DAMDANGJA_SAWON_NO", this.dsSawon.getColumn(0,"SABEON"));
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "DAMDANGJA_SAWON_NM", this.dsSawon.getColumn(0,"SEONGMYEONG"));
        	} else
        	{
        		var oArg = {sabeonNm:strSearchValue};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";
        		this.gfn_openPopup( "sawon","com::COMM_P02.xfdl",oArg,sPopupCallBack,oOption);
        	}
        };

        this.dsMaster_onrowposchanged = function(obj,e)
        {
            // 승인 상태에따른 입력 활성화
        	if(this.dsMaster.getRowType(this.dsMaster.rowposition) == Dataset.ROWTYPE_INSERT)
            {
        		this.dsBindable.setColumn(0, "bReadonly", "false");
        	} else {
        	    // 신청
        		if (this.dsMaster.getColumn(e.newrow, "SEUNGIN_SANGTAE") == "02")
        		{
        			this.dsBindable.setColumn(0, "bReadonly", "false");
        		}
        		else
        		{
        			this.dsBindable.setColumn(0, "bReadonly", "true");
        		}
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
            this.btnJugwanDeptCd.addEventHandler("onclick",this.btnJugwanDeptCd_onclick,this);
            this.btnDamdangja.addEventHandler("onclick",this.btnDamdangja_onclick,this);
            this.div_01.form.calSearchSincheongSijakDt.addEventHandler("onkeydown",this.div_01_calSearchSincheongSijakDt_onkeydown,this);
            this.div_01.form.btnSearchJugwanDeptCd.addEventHandler("onclick",this.btnSearchJugwanDeptCd_onclick,this);
            this.div_01.form.calSearchSincheongJongryoDt.addEventHandler("onchanged",this.div_01_cal_00_onchanged,this);
            this.div_01.form.calSearchSincheongJongryoDt.addEventHandler("onkeydown",this.div_01_calSearchSincheongJongryoDt_onkeydown,this);
            this.div_01.form.edtSearchJugwanDeptNm.addEventHandler("onchanged",this.div_01_edtSearchJugwanDeptNm_onchanged,this);
            this.div_01.form.cboSearchSeunginSangtae.addEventHandler("onkeydown",this.div_01_cboSearchSeunginSangtae_onkeydown,this);
            this.div_01.form.cboSearchProgramCd.addEventHandler("onkeydown",this.div_01_cboSearchProgramCd_onkeydown,this);
            this.div_01.form.edtSearchProgramNm.addEventHandler("onkeydown",this.div_01_edtSearchProgramNm_onkeydown,this);
            this.dsMaster.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.ds_input.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
        };
        this.loadIncludeScript("UY01_2100102_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
