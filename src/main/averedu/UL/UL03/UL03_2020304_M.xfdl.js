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
            this.set_titletext("개설강좌관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_input", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"ISU_HAKNYEON_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GYEYEOL\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGONG\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SEUNGIN_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"GANGJWA_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GYOSUBAEJEONG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DAMDANGGYOSU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DAMDANGGYOSU_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YYYY\"/><Col id=\"HAKGI\"/><Col id=\"ISU_HAKNYEON_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"ISU_HAKNYEON_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ISU_HAKNYEON_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GYOGWAMOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GYOGWAMOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUNBAN\" type=\"STRING\" size=\"256\"/><Column id=\"GYOGWAMOK_ENM\" type=\"STRING\" size=\"256\"/><Column id=\"GYOGWAMOK_GAEYO\" type=\"STRING\" size=\"256\"/><Column id=\"GYOGWAMOK_GAEYO_ENM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKJEOM\" type=\"STRING\" size=\"256\"/><Column id=\"IRON_TM\" type=\"STRING\" size=\"256\"/><Column id=\"SILSEUP_TM\" type=\"STRING\" size=\"256\"/><Column id=\"TONGHAP_TM\" type=\"STRING\" size=\"256\"/><Column id=\"SIL_SILSEUP_TM\" type=\"STRING\" size=\"256\"/><Column id=\"IRON_SISU\" type=\"STRING\" size=\"256\"/><Column id=\"SILSEUP_SISU\" type=\"STRING\" size=\"256\"/><Column id=\"TONGHAP_SISU\" type=\"STRING\" size=\"256\"/><Column id=\"ISU_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"ISU_GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"GWAMOK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"GWAMOK_GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"NCS_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"NCS_NEUNGRYEOK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"PYEONGGA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SEONGJEOK_BUYEO_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"GANGUISIL_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SISU_HALF_GWAMOK_YN\" type=\"STRING\" size=\"256\"/><Column id=\"GYOJIKGWAMOK_YN\" type=\"STRING\" size=\"256\"/><Column id=\"GANGUIPYEONGGA_YN\" type=\"STRING\" size=\"256\"/><Column id=\"GANGUIPYEONGGA_TYCD\" type=\"STRING\" size=\"256\"/><Column id=\"GANGJWA_TYCD\" type=\"STRING\" size=\"256\"/><Column id=\"GANGJWA_TYNM\" type=\"STRING\" size=\"256\"/><Column id=\"PO_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CHAEOPGWAMOK_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CHAEOPGWAMOK_YNNM\" type=\"STRING\" size=\"256\"/><Column id=\"GAESEOL_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SOSOK_BUNBAN\" type=\"STRING\" size=\"256\"/><Column id=\"SINCHEONGJA_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SEUNGINJA_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SEUNGIN_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SEUNGIN_GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"PYEGANG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"HAPBUNBAN_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"HAPBUNBAN_GIJUN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"HAPBUNBAN_DAEHAK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAPBUNBAN_HAKGWA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAPBUNBAN_JEONGONG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAPBUNBAN_JUYA_GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"HAPBUNBAN_ISU_HAKNYEON_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAPBUNBAN_IPHAK_TYNM\" type=\"STRING\" size=\"256\"/><Column id=\"HAPBUNBAN_GYOGWAMOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAPBUNBAN_BUNBAN\" type=\"STRING\" size=\"256\"/><Column id=\"SUGANGSINCHEONG_JEONGWON\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"MAGAM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SEONTAEK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"TAEKIL_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"GYOJIKJA_JEOE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CAPSTONE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"GYOYANG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"DAMDANGGYOSU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DAMDANGGYOSU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CNT\" type=\"STRING\" size=\"256\"/><Column id=\"SUGANGSINCHEONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_DEPT_CD1\" type=\"STRING\" size=\"256\"/><Column id=\"UP_DEPT_CD2\" type=\"STRING\" size=\"256\"/><Column id=\"SUEOPTM_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"DAMDANGGYOSU_JIKJONG_GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_BUNBAN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBaseYyyyHakgi", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("dsSearchHakgi", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchHaknyeon", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchSeungin", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchJuya", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgi", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHaknyeon", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSeungin", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJuya", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsIsu", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSilseup", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGangjwaTycd", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSeongjeok", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSiganpyo", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSeongjeokBuyeo", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGanguisil", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGanguiPyeongga", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSugangSincheong", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"ISU_HAKNYEON_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GYOGWAMOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BUNBAN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YYYY\"/><Col id=\"HAKGI\"/><Col id=\"HAKGWA_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetail", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"ISU_HAKNYEON_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GYOGWAMOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BUNBAN\" type=\"STRING\" size=\"256\"/><Column id=\"DAMDANGGYOSU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DAMDANGGYOSU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DAMDANGGYOSU_HAKGWA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DAMDANGGYOSU_BIRTHDAY\" type=\"STRING\" size=\"256\"/><Column id=\"DAMDANGGYOSU_JAEJIK_GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"DAMDANGGYOSU_JIKJONG_GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"IRON_TM\" type=\"STRING\" size=\"256\"/><Column id=\"SILSEUP_TM\" type=\"STRING\" size=\"256\"/><Column id=\"IRON_SISU\" type=\"STRING\" size=\"256\"/><Column id=\"SILSEUP_SISU\" type=\"STRING\" size=\"256\"/><Column id=\"GANGUI_FR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"GANGUI_TO_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DAEPYOGYOSU_YN\" type=\"STRING\" size=\"256\"/><Column id=\"IRON_SILSEUP_DAMDANG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"GANGSARYOJIGEUP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_BUNBAN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_iljeongInput", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ILJEONG_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsIljeong", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ILJEONG_CD\" type=\"STRING\" size=\"4\"/><Column id=\"ILJEONG_NM\" type=\"STRING\" size=\"10\"/><Column id=\"FR_DT\" type=\"STRING\" size=\"10\"/><Column id=\"FR_TM\" type=\"STRING\" size=\"10\"/><Column id=\"TO_DT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TO_TM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CURR_ILJEONG_YN\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHUGA_NAEYONG\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"YONGDO_COLUMN1\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"YONGDO_COLUMN2\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"YONGDO_COLUMN3\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"YONGDO_COLUMN4\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"SABEON_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GYOGWAMOK_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SABEON_NM\"/><Col id=\"GYOGWAMOK_CD_NM\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSawon", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGwamok", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgwaJeongong", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_09_00","0","90","115","22",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("개설강좌목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","0","114",null,"423","668",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("dsMaster");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"NO\"/><Cell col=\"2\" text=\"승인구분\"/><Cell col=\"3\" text=\"학과/전공\"/><Cell col=\"4\" text=\"이수학년\"/><Cell col=\"5\" text=\"주야구분\"/><Cell col=\"6\" text=\"분반\"/><Cell col=\"7\" text=\"과목코드\"/><Cell col=\"8\" text=\"과목명\"/><Cell col=\"9\" text=\"이수구분\"/><Cell col=\"10\" text=\"교수코드\"/><Cell col=\"11\" text=\"대표교수\"/><Cell col=\"12\" text=\"교원구분\"/><Cell col=\"13\" text=\"강좌유형\"/><Cell col=\"14\" text=\"학점\"/><Cell col=\"15\" text=\"신청인원\"/><Cell col=\"16\" text=\"이론시수\"/><Cell col=\"17\" text=\"실습시수\"/><Cell col=\"18\" text=\"합계시수\"/><Cell col=\"19\" text=\"실습구분\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" editmaxlength=\"22\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"2\" displaytype=\"combotext\" edittype=\"none\" textAlign=\"center\" text=\"bind:SEUNGIN_GBCD\" editmaxlength=\"10\" combodataset=\"dsSeungin\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\" text=\"bind:HAKGWA_NM\" editmaxlength=\"8\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" displaytype=\"combotext\" edittype=\"none\" textAlign=\"center\" text=\"bind:ISU_HAKNYEON_CD\" editmaxlength=\"100\" combodataset=\"dsHaknyeon\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"5\" displaytype=\"combotext\" edittype=\"none\" textAlign=\"center\" text=\"bind:JUYA_GBCD\" editmaxlength=\"10\" combodataset=\"dsJuya\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"6\" text=\"bind:CHG_BUNBAN\"/><Cell col=\"7\" text=\"bind:GYOGWAMOK_CD\"/><Cell col=\"8\" text=\"bind:GYOGWAMOK_NM\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:ISU_GBCD\" displaytype=\"combotext\" combodataset=\"dsIsu\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"10\" text=\"bind:DAMDANGGYOSU_CD\" expandshow=\"show\" expandsize=\"20\"/><Cell col=\"11\" text=\"bind:DAMDANGGYOSU_NM\"/><Cell col=\"12\" text=\"bind:DAMDANGGYOSU_JIKJONG_GBNM\"/><Cell col=\"13\" text=\"bind:GANGJWA_TYCD\" displaytype=\"combotext\" combodataset=\"dsGangjwaTycd\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"14\" text=\"bind:HAKJEOM\"/><Cell col=\"15\" text=\"bind:SUGANGSINCHEONG_JEONGWON\"/><Cell col=\"16\" text=\"bind:IRON_SISU\"/><Cell col=\"17\" text=\"bind:SILSEUP_SISU\"/><Cell col=\"18\" text=\"bind:TONGHAP_SISU\"/><Cell col=\"19\" text=\"bind:GWAMOK_GBCD\" displaytype=\"combotext\" combodataset=\"dsSilseup\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","113","89","233","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13",null,"114","658","28","0",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12",null,"114","100","28","558",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("학년도");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00",null,"142","658","28","0",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00",null,"142","100","28","558",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("주야구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboJuya",null,"145","113","22","443",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_enable("true");
            obj.set_innerdataset("dsJuya");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_01",null,"170","658","28","0",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_01",null,"170","100","28","558",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("과목명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGwamokCd",null,"173","103","22","453",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGwamokNm",null,"173","198","22","223",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_password("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_01_00",null,"198","658","28","0",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_01_00",null,"198","100","28","558",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("과목명(영문)");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGwamokEnm",null,"201","333","22","223",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_01_00_00",null,"226","658","28","0",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_01_00_00",null,"226","100","28","558",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("학과/전공");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHakgwaCd",null,"229","103","22","453",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHakgwaNm",null,"229","198","22","223",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_01_00_01",null,"254","658","38","0",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_01_00_01",null,"254","100","38","558",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("학점");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Button("btnGwamok",null,"173","22","22","427",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_PopSrch");
            obj.set_text("");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnHakgwa",null,"229","22","22","427",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_PopSrch");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","500","69","100","45",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("↑\r\n45\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","0","107",null,"8","0",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"69","0",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_02","26","31","1600","5",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
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
            obj.set_taborder("6");
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

            obj = new Static("stc_01_00","-23","9","100","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("학년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","90","9","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","249","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("학기");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgi","339","9","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsSearchHakgi");
            obj.set_text("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","67",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","80","0","10","67",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","329","0","10","67",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01","449","-1","56","66",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00","861","32","56","36",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_01","200","0","56","70",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01","689","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("계열");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchGyeyeol","780","9","200","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsGyeyeol");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00","981","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("학과");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgwa","1071","9","200","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsHakgwa");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01","1273","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("전공");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJeongong","1362","9","200","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsJeongong");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00","569","0","10","73",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01","489","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("학년");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHaknyeon","579","9","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsSearchHaknyeon");
            obj.set_text("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01_00","1209","36","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_text("주야구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJuya","1299","36","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsSearchJuya");
            obj.set_text("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_02","239","36","90","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
            obj.set_text("교수배정여부");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_02","-23","36","100","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("25");
            obj.set_text("승인구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchBaejeong","339","36","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("26");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsSearchYn");
            obj.set_text("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchSeungin","90","36","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("27");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsSearchSeungin");
            obj.set_text("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01_01","489","36","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("28");
            obj.set_text("사번/성명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchSabeon","579","36","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("29");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearchSawon","709","36","22","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("30");
            obj.set_cssclass("btn_WF_PopSrch");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchNm","741","36","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("31");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00","699","30","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("32");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_00","731","30","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("33");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00_00","689","-1","56","36",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("34");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_00_00","770","0","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("35");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00_00_00","980","-1","56","36",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("36");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_00_00_00","1061","0","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("37");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00_00_00_00","1271","-1","56","36",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("38");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_00_00_00_00","1352","0","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("39");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01_00_00","888","36","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("40");
            obj.set_text("개설강좌");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_00_00_00_01","970","33","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("41");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchGangjwa","980","36","200","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("42");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00_01","1180","32","56","36",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("43");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_00_00_00_01_00","1289","33","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("44");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00",null,"142","100","28","340",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("분반");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_00",null,"142","100","28","120",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("강좌유형");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboGangjwaTycd",null,"145","113","22","4",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsGangjwaTycd");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00",null,"292","658","28","0",null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_01",null,"292","100","28","558",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("실습구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSilseup",null,"295","113","22","443",null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsSilseup");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01",null,"292","100","28","340",null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("강의실유형");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboGanguisil",null,"295","113","22","224",null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsGanguisil");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00",null,"320","658","28","0",null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_01_00",null,"320","100","28","558",null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("교직과목여부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_00",null,"320","100","28","340",null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("강의평가");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_00",null,"348","658","28","0",null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_01_00_00",null,"348","100","28","558",null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("실습시간");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_00_00",null,"348","100","28","340",null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("강의평가유형");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboGanguiPyeongga",null,"351","113","22","224",null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsGanguiPyeongga");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_00_00",null,"376","658","48","0",null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_01_00_00_00",null,"376","100","48","558",null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("교과목 개요\r\n(한글)");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_00_00_00",null,"376","100","48","219",null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("교과목 개요\r\n(영어)");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Spin("spnYYYY",null,"117","113","22","443",null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02",null,"114","100","28","340",null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("학기");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboHakgi",null,"117","113","22","224",null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsHakgi");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBunban",null,"145","113","22","224",null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_00",null,"114","100","28","120",null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("이수학년");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboIsuHaknyeon",null,"117","113","22","4",null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsHaknyeon");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_00_01",null,"170","100","28","120",null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("이수구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboIsuGbcd",null,"173","113","22","4",null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsIsu");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_00_01_00",null,"198","100","28","120",null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("성적평가");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSeongjeok",null,"201","113","22","4",null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsSeongjeok");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_00_01_00_00",null,"226","100","28","120",null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("시간표구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSiganpyo",null,"229","113","22","4",null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsSiganpyo");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHakjeom",null,"257","113","32","443",null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_01",null,"254","100","38","340",null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("시수");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_00_00_01",null,"254","100","38","120",null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("성적부여");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSeongjeokBuyeo",null,"257","113","32","4",null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsSeongjeokBuyeo");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSilseupSigan",null,"351","113","22","443",null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoGyojikGwamok",null,"323","113","22","443",null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_innerdataset("dsYn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_direction("vertical");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoGanguiPyeongga",null,"323","113","22","224",null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_innerdataset("dsYn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_direction("vertical");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGyogwamokGaeyo",null,"379","235","42","321",null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEngGyogwamokGaeyo",null,"379","214","42","3",null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtIronSisu","1305","257","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_textAlign("right");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static66","1305","277","110","15",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("이론   -   실습   -   소계");
            obj.set_textAlign("center");
            obj.set_verticalAlign("top");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static69",null,"257","13","20","296",null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_text("-");
            obj.set_textAlign("center");
            obj.set_font("8pt Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSilseupSisu","1349","257","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_textAlign("right");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static70",null,"257","13","20","250",null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("-");
            obj.set_textAlign("center");
            obj.set_font("8pt Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("edtTonghapSisu","1395","257","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_textAlign("right");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_00_00_00_01","972","71","10",null,null,"10",null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","985","90","135","22",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_text("개설강좌 상세정보");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","1182","424","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00",null,"451","470","8","190",null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_01",null,"459","658","48","0",null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_01_01",null,"459","100","48","558",null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_text("수강신청구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSugangSincheong",null,"462","113","42","443",null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsSugangSincheong");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_02",null,"459","100","48","340",null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_text("비고\r\n(폐강여부)");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_01",null,"507","658","28","0",null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_01_00_01",null,"507","100","28","558",null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_text("수강신청정원");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_00_01",null,"507","100","28","340",null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_text("폐강여부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoPyegang",null,"510","113","22","224",null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_innerdataset("dsYn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_direction("vertical");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBigo",null,"462","335","42","3",null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_00_01_00_00_00",null,"507","100","28","120",null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_text("합분반 여부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkHapbunban",null,"510","40","22","77",null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_tooltiptype("hover");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00_00","985","434","135","22",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_text("수강관리");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_01","0","558","135","22",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_text("강의담당교수 관리");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","0","575",null,"8","0",null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","500","537","100","45",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_text("↑\r\n45\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grdDetail","0","583",null,null,"668","0",null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("dsDetail");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"교수명\"/><Cell col=\"2\" text=\"교원구분\"/><Cell col=\"3\" text=\"소속학과\"/><Cell col=\"4\" text=\"대표교수\"/><Cell col=\"5\" text=\"이론시수\"/><Cell col=\"6\" text=\"실기시수\"/><Cell col=\"7\" text=\"강사료 반영여부\"/><Cell col=\"8\" text=\"생년월일\"/><Cell col=\"9\" text=\"재직구분\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" editmaxlength=\"22\" cursor=\"pointer\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:DAMDANGGYOSU_NM\" editmaxlength=\"10\" expandshow=\"show\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:DAMDANGGYOSU_JIKJONG_GBNM\" editmaxlength=\"8\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\" text=\"bind:DAMDANGGYOSU_HAKGWA_NM\" editmaxlength=\"100\"/><Cell col=\"4\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" textAlign=\"center\" text=\"bind:DAEPYOGYOSU_YN\" editmaxlength=\"10\"/><Cell col=\"5\" text=\"bind:IRON_SISU\"/><Cell col=\"6\" text=\"bind:SILSEUP_SISU\"/><Cell col=\"7\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:GANGSARYOJIGEUP_YN\"/><Cell col=\"8\" displaytype=\"date\" text=\"bind:DAMDANGGYOSU_BIRTHDAY\"/><Cell col=\"9\" text=\"bind:DAMDANGGYOSU_JAEJIK_GBNM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel2",null,"550","55","25","668",null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave2",null,"550","55","25","728",null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSugangSincheongJeongwon",null,"510","113","22","443",null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnBanryeo",null,"82","55","25","0",null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_text("반려");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnSeungin",null,"82","55","25","60",null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_text("승인");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnSincheong",null,"82","55","25","120",null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_text("신청");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnNew2",null,"550","55","25","788",null,null,null,null,null,this);
            obj.set_taborder("97");
            obj.set_text("신규");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnNew",null,"81","55","25","788",null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_text("신규");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"81","55","25","728",null,null,null,null,null,this);
            obj.set_taborder("99");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"81","55","25","668",null,null,null,null,null,this);
            obj.set_taborder("100");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("개설강좌관리");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item6","cboJuya","value","dsMaster","JUYA_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","edtGwamokEnm","value","dsMaster","GYOGWAMOK_ENM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","edtHakgwaCd","value","dsMaster","HAKGWA_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","edtHakgwaNm","value","dsMaster","HAKGWA_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.spnSearchYYYY","value","ds_input","YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboSearchHakgi","value","ds_input","HAKGI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboSearchGyeyeol","value","ds_input","GYEYEOL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboSearchHakgwa","value","ds_input","HAKGWA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","divSearch.form.cboSearchJeongong","value","ds_input","JEONGONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","divSearch.form.cboSearchHaknyeon","value","ds_input","ISU_HAKNYEON_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","divSearch.form.cboSearchJuya","value","ds_input","JUYA_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","divSearch.form.cboSearchBaejeong","value","ds_input","GYOSUBAEJEONG_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","divSearch.form.cboSearchSeungin","value","ds_input","SEUNGIN_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","divSearch.form.edtSearchSabeon","value","ds_input","DAMDANGGYOSU_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","divSearch.form.edtSearchNm","value","ds_input","DAMDANGGYOSU_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","divSearch.form.edtSearchGangjwa","value","ds_input","GANGJWA_CD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","cboSilseup","value","dsMaster","GWAMOK_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","spnYYYY","value","dsMaster","YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","rdoGyojikGwamok","value","dsMaster","GYOJIKGWAMOK_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","rdoGanguiPyeongga","value","dsMaster","GANGUIPYEONGGA_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edtGyogwamokGaeyo","value","dsMaster","GYOGWAMOK_GAEYO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edtEngGyogwamokGaeyo","value","dsMaster","GYOGWAMOK_GAEYO_ENM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","edtIronSisu","value","dsMaster","IRON_SISU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","edtSilseupSisu","value","dsMaster","SILSEUP_SISU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","edtTonghapSisu","value","dsMaster","TONGHAP_SISU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","cboSugangSincheong","value","dsMaster","SUGANGSINCHEONG_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","rdoPyegang","value","dsMaster","PYEGANG_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","edtBigo","value","dsMaster","BIGO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","chkHapbunban","value","dsMaster","HAPBUNBAN_GIJUN_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","cboHakgi","value","dsMaster","HAKGI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","cboIsuHaknyeon","value","dsMaster","ISU_HAKNYEON_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","edtBunban","value","dsMaster","CHG_BUNBAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","cboGangjwaTycd","value","dsMaster","GANGJWA_TYCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","edtGwamokCd","value","dsMaster","GYOGWAMOK_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","edtGwamokNm","value","dsMaster","GYOGWAMOK_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","cboIsuGbcd","value","dsMaster","ISU_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","cboSeongjeok","value","dsMaster","PYEONGGA_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","cboSiganpyo","value","dsMaster","SUEOPTM_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","edtHakjeom","value","dsMaster","HAKJEOM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","cboSeongjeokBuyeo","value","dsMaster","SEONGJEOK_BUYEO_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","cboGanguisil","value","dsMaster","GANGUISIL_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","edtSilseupSigan","value","dsMaster","SIL_SILSEUP_TM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","cboGanguiPyeongga","value","dsMaster","GANGUIPYEONGGA_TYCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","edtSugangSincheongJeongwon","value","dsMaster","SUGANGSINCHEONG_JEONGWON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","spnYYYY","readonly","dsBindable","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","cboHakgi","readonly","dsBindable","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","cboIsuHaknyeon","readonly","dsBindable","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","cboJuya","readonly","dsBindable","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","edtBunban","readonly","dsBindable","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","cboGangjwaTycd","readonly","dsBindable","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","edtGwamokNm","readonly","dsBindable","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","cboIsuGbcd","readonly","dsBindable","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","edtGwamokEnm","readonly","dsBindable","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","cboSeongjeok","readonly","dsBindable","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","edtHakgwaNm","readonly","dsBindable","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","cboSiganpyo","readonly","dsBindable","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","edtHakjeom","readonly","dsBindable","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","edtIronSisu","readonly","dsBindable","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","edtSilseupSisu","readonly","dsBindable","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","cboSeongjeokBuyeo","readonly","dsBindable","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","cboSilseup","readonly","dsBindable","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","cboGanguisil","readonly","dsBindable","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item62","rdoGyojikGwamok","readonly","dsBindable","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","rdoGanguiPyeongga","readonly","dsBindable","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item64","edtSilseupSigan","readonly","dsBindable","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item65","cboGanguiPyeongga","readonly","dsBindable","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item66","edtGyogwamokGaeyo","readonly","dsBindable","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item67","edtEngGyogwamokGaeyo","readonly","dsBindable","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item68","cboSugangSincheong","readonly","dsBindable","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item69","edtSugangSincheongJeongwon","readonly","dsBindable","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item70","btnGwamok","enable","dsBindable","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item71","btnHakgwa","enable","dsBindable","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
            this._addPreloadList("data","","dsDetail");
            this._addPreloadList("data","","dsIljeong");
        };
        
        // User Script
        this.registerScript("UL03_2020304_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UL03_2020304_M.xfdl(개설강좌관리)
        * 작 성         일 명: jiback
        * 작 성         일 자: 2022/07/18
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
        this.lvchkColidDs   = "ISU_HAKNYEON_CD$JUYA_GBCD$BUNBAN$GYOGWAMOK_CD$HAKGWA_CD$ISU_GBCD$SEONGJEOK_BUYEO_GBCD$GANGUIPYEONGGA_YN$GANGUIPYEONGGA_TYCD$SUEOPTM_GBCD";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs = "이수학년$주야구분$분반$교과목$학과/전공$이수구분$성적부여$강의평가$강의평가유형$시간표구분";
        this.lvchkDColidDs   = "DAMDANGGYOSU_NM";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkDColNameDs = "담당교수";
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
            var strDs    = "dsSearchHakgi|dsSearchHaknyeon|dsSearchSeungin|dsSearchYn|dsSearchJuya|dsHakgi|dsHaknyeon|dsSeungin|dsJuya|dsIsu|dsSilseup|dsGangjwaTycd|dsSeongjeok|dsSiganpyo|dsSeongjeokBuyeo|dsGanguisil|dsYn|dsGanguiPyeongga|dsSugangSincheong";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00022|00060|00520|00051|00003|00022|00060|00520|00003|00025|00033|00522|00518|00537|00519|00517|00051|00403|00523";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "T|T|T|T|T|X|X|X|X|X|X|X|X|X|X|X|X|X|X";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
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

        	this.fn_Iljeong();
        };

        this.fn_PostBaseYyyyHakgiInit = function()
        {
        	if (this.dsBaseYyyyHakgi.rowcount > 0)
        	{
        		this.ds_input.setColumn(0, "YYYY",  this.dsBaseYyyyHakgi.getColumn(0, "YYYY"));
        		this.ds_input.setColumn(0, "HAKGI", this.dsBaseYyyyHakgi.getColumn(0, "HAKGI"));
        	}
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
                    case "Init":
                            this.fn_PostformInit();
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
                    case "Ret":
                            this.fn_PostRet();
                        break;
                    case "Save":
                            this.fn_PostSave();
                        break;
                    case "Del":
                            this.fn_PostDel();
                        break;
        			case "DDel":
                            this.fn_PostDDel();
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
        		case "sawon" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					this.ds_input.set_enableevent(false);
        		            this.ds_input.setColumn(this.ds_input.rowposition, "DAMDANGGYOSU_CD", sRtn[0]);
        		            this.ds_input.setColumn(this.ds_input.rowposition, "DAMDANGGYOSU_NM", sRtn[1]);
        					this.ds_input.set_enableevent(true);
        				}
        			break;
        		case "damdangja" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					// 대표교수 변경처리
        					this.dsMaster.set_updatecontrol(false);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "DAMDANGGYOSU_CD", sRtn[0]);
        					this.dsMaster.setRowType(this.dsMaster.rowposition, Dataset.ROWTYPE_UPDATE);
        					this.dsMaster.set_updatecontrol(true);

        					var strSvc      = "Chg";
        					var strUrl      = "/prj/UL/UL03/Chg_2020304_M.do";
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
        				}
        			break;
        		case "detailDamdangja" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					this.dsDetail.set_enableevent(false);
        		            this.dsDetail.setColumn(this.dsDetail.rowposition, "DAMDANGGYOSU_CD", sRtn[0]);
        		            this.dsDetail.setColumn(this.dsDetail.rowposition, "DAMDANGGYOSU_NM", sRtn[1]);
        					this.dsDetail.setColumn(this.dsDetail.rowposition, "DAMDANGGYOSU_BIRTHDAY", sRtn[6]);
        					this.dsDetail.setColumn(this.dsDetail.rowposition, "DAMDANGGYOSU_JAEJIK_GBNM", sRtn[10]);
        					this.dsDetail.setColumn(this.dsDetail.rowposition, "DAMDANGGYOSU_JIKJONG_GBNM", sRtn[17]);
        					this.dsDetail.setColumn(this.dsDetail.rowposition, "DAMDANGGYOSU_HAKGWA_NM", sRtn[2]);
        					this.dsDetail.set_enableevent(true);
        				}
        			break;
        		case "gwamok" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					this.dsMaster.set_enableevent(false);
        		            this.dsMaster.setColumn(this.dsMaster.rowposition, "GYOGWAMOK_CD", sRtn[0]);
        		            this.dsMaster.setColumn(this.dsMaster.rowposition, "GYOGWAMOK_NM", sRtn[1]);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "GANGUIPYEONGGA_TYCD", sRtn[21]);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "GANGUIPYEONGGA_YN", sRtn[20]);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "GANGUISIL_GBCD", sRtn[19]);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "GWAMOK_GBCD", sRtn[13]);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "GYOGWAMOK_ENM", sRtn[2]);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "GYOGWAMOK_GAEYO", sRtn[3]);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "GYOGWAMOK_GAEYO_ENM", sRtn[4]);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "GYOJIKGWAMOK_YN", sRtn[32]);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "HAKJEOM", sRtn[5]);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "IRON_SISU", sRtn[6]);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "SILSEUP_SISU", sRtn[7]);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "TONGHAP_SISU", sRtn[8]);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "ISU_GBCD", sRtn[12]);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "PYEONGGA_GBCD", sRtn[16]);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "SEONGJEOK_BUYEO_GBCD", sRtn[17]);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "IRON_TM", sRtn[9]);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "SILSEUP_TM", sRtn[10]);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "TONGHAP_TM", sRtn[11]);
        					this.dsMaster.set_enableevent(true);
        				}
        			break;
        		case "hakgwa" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					this.dsMaster.set_enableevent(false);
        		            this.dsMaster.setColumn(this.dsMaster.rowposition, "HAKGWA_CD", sRtn[0]);
        		            this.dsMaster.setColumn(this.dsMaster.rowposition, "HAKGWA_NM", sRtn[1]);
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
                case "tmp1" :        // 개설강좌생성
                         this.fn_Saengsung();
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
            var strUrl      = "/prj/UL/UL03/Retrieve_2020304_M.do";
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
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreDRet = function()
        {
            // 조회조건 셋팅
        	var row = this.dsMaster.rowposition;
        	this.ds_dInput.setColumn(0, "YYYY", this.dsMaster.getColumn(row, "YYYY"));
        	this.ds_dInput.setColumn(0, "HAKGI", this.dsMaster.getColumn(row, "HAKGI"));
        	this.ds_dInput.setColumn(0, "HAKGWA_CD", this.dsMaster.getColumn(row, "HAKGWA_CD"));
        	this.ds_dInput.setColumn(0, "JEONGONG_CD", this.dsMaster.getColumn(row, "JEONGONG_CD"));
        	this.ds_dInput.setColumn(0, "JUYA_GBCD", this.dsMaster.getColumn(row, "JUYA_GBCD"));
        	this.ds_dInput.setColumn(0, "ISU_HAKNYEON_CD", this.dsMaster.getColumn(row, "ISU_HAKNYEON_CD"));
        	this.ds_dInput.setColumn(0, "GYOGWAMOK_CD", this.dsMaster.getColumn(row, "GYOGWAMOK_CD"));
        	this.ds_dInput.setColumn(0, "BUNBAN", this.dsMaster.getColumn(row, "BUNBAN"));
            return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_DRet = function()
        {
            if(!this.fn_PreDRet())
            {
                return false;
            }
            var strSvc      = "DRet";
            var strUrl      = "/prj/UL/UL03/detailRetrieve_2020304_M.do";
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
        };

        /**********************************************************************
                07. 추가 함수 선언
        ***********************************************************************/
        this.btnNew_onclick = function(obj,e)
        {
        	this.fn_New();
        };

        this.fn_PreNew = function()
        {
        	// 관리자가 아니면 공통일정기간 체크
        	if (!this.gfn_isNull(objApp.gds_userInfoDb.getColumn(0, "USER_GBCD")))
        	{
        		if(this.dsIljeong.getColumn(0, "CURR_ILJEONG_YN") == "N")
        		{
        			this.alert("현재 " + this.dsIljeong.getColumn(0, "ILJEONG_NM") + "이 아닙니다.");
        			return false;
        		}
        	}

        	if(this.gfn_isUpdate(this.dsMaster))
        	{
        		this.alert("개설강좌목록 중에 저장하지 않은 내용이 있습니다.");
        		return false;
        	}

        	if(this.gfn_isUpdate(this.dsDetail))
        	{
        		this.alert("강의담당교수 관리 중에 저장하지 않은 내용이 있습니다.");
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
            this.dsMaster.setColumn(nRow,"YYYY",this.ds_input.getColumn(0, "YYYY"));
            this.dsMaster.setColumn(nRow,"SUGANGSINCHEONG_GBCD", "0");
        	this.dsMaster.setColumn(nRow, "PYEGANG_YN", "0");
        	if (this.gfn_isNull(objApp.gds_userInfoDb.getColumn(0, "USER_GBCD")))
        	{
        		this.dsMaster.setColumn(nRow,"SEUNGIN_GBCD", "03");	// 관리자면 승인
        	}
        	else
        	{
        		this.dsMaster.setColumn(nRow,"SEUNGIN_GBCD", "02"); // 관리자 아니면 신청으로 기본값 설정
        	}

        	// 시수 0 설정
        	this.edtIronSisu.set_enable(true);
        	this.edtSilseupSisu.set_enable(true);
        	this.edtIronSisu.set_value("0");
        	this.edtSilseupSisu.set_value("0");
        	this.edtTonghapSisu.set_value("0");

        	// 검색조건 값으로 설정
        	this.spnYYYY.set_value(this.divSearch.form.spnSearchYYYY.value);
        	this.cboHakgi.set_value(this.divSearch.form.cboSearchHakgi.value);
        	this.cboJuya.set_value(this.divSearch.form.cboSearchJuya.value);

        	// 검색조건에 학과 또는 전공이 선택되어 있는 경우에 전공을 우선으로하여 학과/전공 파인더에 값 설정
        	var hakgwaCd = this.divSearch.form.cboSearchHakgwa.value;
        	var jeongongCd = this.divSearch.form.cboSearchJeongong.value;
        	var setCode = jeongongCd == "" ? hakgwaCd : jeongongCd;
        	if(!this.gfn_isNull(setCode))
        	{
        		this.dsMaster.set_enableevent(false);
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "HAKGWA_CD", setCode);
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "HAKGWA_NM", this.dsJeongong.getColumn(this.dsJeongong.findRow("DEPT_CD", setCode), "DEPT_NM"));
        		this.dsMaster.set_enableevent(true);
        	}

        	// 강의평가유형 기본값 설정
        	this.cboGanguiPyeongga.set_index(0);
        };

        /**********************************************************************
                08. 디테일 추가 함수 선언
        ***********************************************************************/
        this.btnNew2_onclick = function(obj,e)
        {
        	this.fn_DNew();
        };

        this.fn_PreDNew = function()
        {
        	// 관리자가 아니면 공통일정기간 체크
        	if (!this.gfn_isNull(objApp.gds_userInfoDb.getColumn(0, "USER_GBCD")))
        	{
        		if(this.dsIljeong.getColumn(0, "CURR_ILJEONG_YN") == "N")
        		{
        			this.alert("현재 " + this.dsIljeong.getColumn(0, "ILJEONG_NM") + "이 아닙니다.");
        			return false;
        		}
        	}

        	if(this.gfn_isUpdate(this.dsMaster))
        	{
        		this.alert("개설강좌목록 중에 저장하지 않은 내용이 있습니다.");
        		return false;
        	}

        	if(this.gfn_isUpdate(this.dsDetail))
        	{
        		this.alert("강의담당교수 관리 중에 저장하지 않은 내용이 있습니다.");
        		return false;
        	}

            return true;
        };

        /**
         * 기능 : 디테일 추가 실행
         */
        this.fn_DNew = function()
        {
            if(!this.fn_PreDNew())
            {
                return false;
            }

            var nRow = this.dsDetail.addRow();
        	var mRow = this.dsMaster.rowposition;
        	if(this.dsDetail.rowcount == 1){
        		this.dsDetail.setColumn(nRow, "DAEPYOGYOSU_YN", 1);
        	}
        	this.dsDetail.setColumn(nRow, "YYYY"			, this.dsMaster.getColumn(mRow, "YYYY"));
        	this.dsDetail.setColumn(nRow, "HAKGI"			, this.dsMaster.getColumn(mRow, "HAKGI"));
        	this.dsDetail.setColumn(nRow, "HAKGWA_CD"		, this.dsMaster.getColumn(mRow, "HAKGWA_CD"));
        	this.dsDetail.setColumn(nRow, "JEONGONG_CD"		, this.dsMaster.getColumn(mRow, "JEONGONG_CD"));
        	this.dsDetail.setColumn(nRow, "JUYA_GBCD"		, this.dsMaster.getColumn(mRow, "JUYA_GBCD"));
        	this.dsDetail.setColumn(nRow, "ISU_HAKNYEON_CD"	, this.dsMaster.getColumn(mRow, "ISU_HAKNYEON_CD"));
        	this.dsDetail.setColumn(nRow, "GYOGWAMOK_CD"	, this.dsMaster.getColumn(mRow, "GYOGWAMOK_CD"));
        	this.dsDetail.setColumn(nRow, "BUNBAN"			, this.dsMaster.getColumn(mRow, "BUNBAN"));
        	this.dsDetail.setColumn(nRow, "IRON_TM"			, this.dsMaster.getColumn(mRow, "IRON_TM"));
        	this.dsDetail.setColumn(nRow, "SILSEUP_TM"		, this.dsMaster.getColumn(mRow, "SILSEUP_TM"));
        	this.dsDetail.setColumn(nRow, "IRON_SISU"		, this.dsMaster.getColumn(mRow, "IRON_SISU"));
        	this.dsDetail.setColumn(nRow, "SILSEUP_SISU"	, this.dsMaster.getColumn(mRow, "SILSEUP_SISU"));
        	this.dsDetail.setColumn(nRow, "GANGSARYOJIGEUP_YN", 1);
        };

        /**********************************************************************
                09. 삭제 함수 선언
        ***********************************************************************/
        this.btnDel_onclick = function(obj,e)
        {
        	this.fn_Del();
        };

        this.fn_PreDel = function()
        {
        	// 관리자가 아니면 공통일정기간 체크
        	if (!this.gfn_isNull(objApp.gds_userInfoDb.getColumn(0, "USER_GBCD")))
        	{
        		if(this.dsIljeong.getColumn(0, "CURR_ILJEONG_YN") == "N")
        		{
        			this.alert("현재 " + this.dsIljeong.getColumn(0, "ILJEONG_NM") + "이 아닙니다.");
        			return false;
        		}
        	}

            //멀티삭제용도
            if(this.dsMaster.rowcount < 1 || this.dsMaster.findRow("CHK",1) == -1)
            {
                this.gfn_alert("삭제할 데이터가 없습니다.","삭제정보","","warning");
                return false;
            }

        	// 관리자가 아니면 승인된 항목은 삭제할 수 없음.
        	if (!this.gfn_isNull(objApp.gds_userInfoDb.getColumn(0, "USER_GBCD")))
        	{
        		var chkDel = 0;
        		for(var i=0; i<this.grdMaster.rowcount; i++) {
        			if(this.dsMaster.getColumn(i, "CHK") == "1") {
        				if(this.dsMaster.getColumn(i, "SEUNGIN_GBCD") == "03")
        				{
        					chkDel++;
        				}
        			}
        		}

        		if(chkDel > 0){
        			this.alert("승인된 항목이 존재하여 삭제할 수 없습니다.");
        			return false;
        		}
        	}

            var result = this.gfn_confirm( " 삭제시 NCS에서 작성한 (강의계획서, 평가계획서, 평가점수 등) 관련 모든 정보가 삭제됩니다."
        		                + " 삭제 후에는 데이터를 복구할 수 없습니다.\n그래도 삭제하시겠습니까?", "삭제정보","","question" );
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
            var strUrl      = "/prj/UL/UL03/Delete_2020304_M.do";
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
            this.fn_Ret();
        };

        /**********************************************************************
                10. 디테일 삭제 함수 선언
        ***********************************************************************/
        this.btnDel2_onclick = function(obj,e)
        {
        	this.fn_DDel();
        };

        this.fn_PreDDel = function()
        {
        	// 관리자가 아니면 공통일정기간 체크
        	if (!this.gfn_isNull(objApp.gds_userInfoDb.getColumn(0, "USER_GBCD")))
        	{
        		if(this.dsIljeong.getColumn(0, "CURR_ILJEONG_YN") == "N")
        		{
        			this.alert("현재 " + this.dsIljeong.getColumn(0, "ILJEONG_NM") + "이 아닙니다.");
        			return false;
        		}
        	}

            //멀티삭제용도
            if(this.dsDetail.rowcount < 1 || this.dsDetail.rowposition < 0)
            {
                this.gfn_alert("삭제할 담당교수를 선택해주세요.","삭제정보","","warning");
                return false;
            }

            var result = this.gfn_confirm( "삭제하시겠습니까?", "삭제정보","","question" );
            if(result == 0)
            {
                return false;
            }

            //개별삭제시
            this.dsDetail.deleteRow(this.dsDetail.rowposition);
            return true;
        };

        /**
         * 기능 : Row 삭제 또는 Transaction 삭제 처리
         */
        this.fn_DDel = function()
        {
            if(!this.fn_PreDDel())
            {
                return false;
            }
            var strSvc      = "DDel";
            var strUrl      = "/prj/UL/UL03/detailDelete_2020304_M.do";
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

        this.fn_PostDDel = function()
        {
            this.fn_DRet();
        };

        /**********************************************************************
                11. 저장 함수 선언
        ***********************************************************************/
        this.btnSave_onclick = function(obj,e)
        {
        	this.fn_Save();
        };

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

        	// 관리자가 아니면 공통일정기간 체크
        	if (!this.gfn_isNull(objApp.gds_userInfoDb.getColumn(0, "USER_GBCD")))
        	{
        		if(this.dsIljeong.getColumn(0, "CURR_ILJEONG_YN") == "N")
        		{
        			this.alert("현재 " + this.dsIljeong.getColumn(0, "ILJEONG_NM") + "이 아닙니다.");
        			return false;
        		}
        	}

            if(!this.gfn_isUpdate(this.dsMaster))
            {
                this.gfn_alert("변경된 이력이 없습니다.","저장정보","","question");
                return false;
            }

        	var seunginGbcd = this.dsMaster.getColumn(this.dsMaster.rowposition, "SEUNGIN_GBCD");
        	var bunban = this.dsMaster.getColumn(this.dsMaster.rowposition, "BUNBAN");
        	var chgBunban = this.dsMaster.getColumn(this.dsMaster.rowposition, "CHG_BUNBAN");

        	if (seunginGbcd == '03' && bunban != chgBunban)
        	{
        		this.alert("승인된 개설강좌의 분반은 수정할 수 없습니다.");
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "CHG_BUNBAN", BUNBAN);
        		return false;
        	}

            // 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
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
            var strUrl      = "/prj/UL/UL03/Save_2020304_M.do";
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
                12. 저장 함수 선언
        ***********************************************************************/
        this.btnSave2_onclick = function(obj,e)
        {
        	this.fn_DSave();
        };

        this.fn_PreDSave = function()
        {
        	// 관리자가 아니면 공통일정기간 체크
        	if (!this.gfn_isNull(objApp.gds_userInfoDb.getColumn(0, "USER_GBCD")))
        	{
        		if(this.dsIljeong.getColumn(0, "CURR_ILJEONG_YN") == "N")
        		{
        			this.alert("현재 " + this.dsIljeong.getColumn(0, "ILJEONG_NM") + "이 아닙니다.");
        			return false;
        		}
        	}

            if(!this.gfn_isUpdate(this.dsDetail))
            {
                this.gfn_alert("변경된 이력이 없습니다.","저장정보","","question");
                return false;
            }

            // 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
            var chkFocusFlg = true;
            var result      = this.gfn_cmmnChkEssentialItem(this.dsDetail, this.lvchkDColidDs, this.lvchkDColNameDs, this.grdDetail, chkFocusFlg, this);

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
        	return true;

        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_DSave = function()
        {
            if(!this.fn_PreDSave())
            {
                return false;
            }
            var strSvc      = "DSave";
            var strUrl      = "/prj/UL/UL03/detailSave_2020304_M.do";
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
                13. 신청,승인,반려 함수 선언
        ***********************************************************************/
        this.btnSincheong_onclick = function(obj,e)
        {
        	this.fn_Update(obj.text ,"02");
        };

        this.btnSeungin_onclick = function(obj,e)
        {
        	this.fn_Update(obj.text ,"03");
        };

        this.btnBanryeo_onclick = function(obj,e)
        {
        	this.fn_Update(obj.text ,"04");
        };

        this.fn_PreUpdate = function(text, status)
        {
        	// 	01 : 등록,	02 : 신청,	03 : 승인,	04 : 반려
            if(this.dsMaster.rowcount < 1 || this.dsMaster.findRow("CHK",1) == -1)
            {
                this.gfn_alert(text + "할 데이터가 없습니다.","삭제정보","","warning");
                return false;
            }

        	// 신규 또는 수정된 항목이 존재하는 경우 처리 불가능하게 처리.
        	var chkCnt = 0;
        	for(var i=0; i<this.dsMaster.rowcount; i++)
        	{
        		if(this.dsMaster.getColumn(i, "CHK") != "1")
        		{
        			var rowType = this.dsMaster.getRowType(i);
        			if(rowType == "2" || rowType == "4")
        			{
        				chkCnt++;
        			}
        		}
        	}

        	if(chkCnt > 0)
        	{
        		this.alert("신규 또는 수정된 항목이 존재하여 " + text + " 처리할 수 없습니다.");
        		return false;
        	}

            var result = this.gfn_confirm(text+ "하시겠습니까?", "삭제정보","","question" );
            if(result == 0)
            {
                return false;
            }

        	for(var i=0; i<this.dsMaster.rowcount; i++)
        	{
        		if(this.dsMaster.getColumn(i, "CHK") == "1")
        		{
        			this.dsMaster.setColumn(i, "SEUNGIN_GBCD", status);
        		}
        	}

        	return true;

        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_Update = function(text, status)
        {
            if(!this.fn_PreUpdate(text, status))
            {
                return false;
            }
            var strSvc      = "Save";
            var strUrl      = "/prj/UL/UL03/Update_2020304_M.do";
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

        /**********************************************************************
                14. 개설강좌생성 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 개설강좌생성 실행
         */
        this.fn_Saengsung = function()
        {
        	var yyyy = this.dsBaseYyyyHakgi.getColumn(0, "YYYY");
        	var hakgi = this.dsBaseYyyyHakgi.getColumn(0, "HAKGI");
        	var oArg = {yyyy:yyyy, hakgi:hakgi};
        	var oOption = {};
        	var sPopupCallBack = "fn_popupCallback";
        	this.gfn_openPopup("saengsung","UL03::UL03_2020304_P01.xfdl",oArg,sPopupCallBack,oOption);
        };

        /**********************************************************************
                15. 팁
        ***********************************************************************/
        this.fn_Tip = function()
        {
        	this.alert("도움말 준비중입니다.");
        };

        /**********************************************************************
                16. 각종함수
        ***********************************************************************/
        // 공통일정기간 조회
        this.fn_Iljeong = function()
        {
        	this.ds_iljeongInput.setColumn(0, "DEPT_CD", objApp.gds_userInfoDb.getColumn(0, "DEPT"));
        	this.ds_iljeongInput.setColumn(0, "ILJEONG_CD", "018");

            var strSvc      = "Iljeong";
            var strUrl      = "/prj/UR/UR_COMMON/Retrieve_COMMON_M_Iljeong.do";
            var strInDs     = "ds_iljeongInput=ds_iljeongInput";
            var strOutDs    = "dsIljeong=dsIljeong";
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
                16. 팝업
        ***********************************************************************/
        // 사원 팝업
        this.divSearch_btnSearchSawon_onclick = function(obj,e)
        {
        	var sabeonNm = this.divSearch.form.edtSearchNm.value;
        	this.fn_setCallSawonPopup("SAWON_NM", sabeonNm)
        };

        // 교과목 팝업
        this.btnGwamok_onclick = function(obj,e)
        {
        	var gwamokCdNm = this.edtGwamokNm.value;
        	this.fn_setCallGwamokPopup("GAMOK_NM", gwamokCdNm)
        };

        // 학과/전공 팝업
        this.btnHakgwa_onclick = function(obj,e)
        {
        	var HakgwaCdNm = this.edtHakgwaNm.value;
        	this.fn_setCallHakgwaPopup("HAKGWA_NM", HakgwaCdNm)
        };

        // 개설강좌목록-교수검색팝업
        this.grdMaster_onexpandup = function(obj,e)
        {
        	if (e.col == 10)
        	{
        		// 관리자가 아니면 공통일정기간 체크
        		if (!this.gfn_isNull(objApp.gds_userInfoDb.getColumn(0, "USER_GBCD")))
        		{
        			if(this.dsIljeong.getColumn(0, "CURR_ILJEONG_YN") == "N")
        			{
        				this.alert("현재 " + this.dsIljeong.getColumn(0, "ILJEONG_NM") + "이 아닙니다.");
        				return false;
        			}
        		}

        		var sabeonNm = this.dsMaster.getColumn(e.row, "DAMDANGGYOSU_CD");
        		this.fn_setCallSawonPopup("DAMDANGGYOSU_NM", sabeonNm)
        	}
        };

        // 강의담당교수-교수검색팝업
        this.grdDetail_onexpandup = function(obj,e)
        {
        	if (e.col == 1)
        	{
        		// 관리자가 아니면 공통일정기간 체크
        		if (!this.gfn_isNull(objApp.gds_userInfoDb.getColumn(0, "USER_GBCD")))
        		{
        			if(this.dsIljeong.getColumn(0, "CURR_ILJEONG_YN") == "N")
        			{
        				this.alert("현재 " + this.dsIljeong.getColumn(0, "ILJEONG_NM") + "이 아닙니다.");
        				return false;
        			}
        		}

        		// 신규일때만 교수 지정
        		if(this.dsDetail.getRowType(e.row) == "2")
        		{
        			var sabeonNm = this.dsDetail.getColumn(e.row, "DAMDANGGYOSU_CD");
        			this.fn_setCallSawonPopup("DETAIL_DAMDANGGYOSU_NM", sabeonNm)
        		}
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
        		this.ds_input.setColumn(0, "DAMDANGGYOSU_CD", this.dsSawon.getColumn(0,"SABEON"));
        		this.ds_input.setColumn(0, "DAMDANGGYOSU_NM", this.dsSawon.getColumn(0,"SEONGMYEONG"));
        	} else
        	{
        		var oArg = {sabeonNm:strSearchValue};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";

        		if (strColumnName == "SAWON_NM")
        		{
        			this.gfn_openPopup("sawon","com::COMM_P02.xfdl",oArg,sPopupCallBack,oOption);
        		}
        		else if (strColumnName == "DAMDANGGYOSU_NM")
        		{
        			this.gfn_openPopup("damdangja","com::COMM_P02.xfdl",oArg,sPopupCallBack,oOption);
        		}
        		else if (strColumnName == "DETAIL_DAMDANGGYOSU_NM")
        		{
        			this.gfn_openPopup("detailDamdangja","com::COMM_P02.xfdl",oArg,sPopupCallBack,oOption);
        		}
        	}
        };

        this.fn_setCallGwamokPopup = function(strColumnName, strSearchValue)
        {
        	this.dsGwamok.clearData();

        	this.ds_input1.setColumn(this.ds_input1.rowposition, "GYOGWAMOK_CD_NM", strSearchValue);

        	if(!this.gfn_isNull(strSearchValue))
        	{
        		var strSvc      = "SearchGwamok";
        		var strUrl      = "/prj/com/Retrieve_P03.do";
        		var strInDs     = "ds_input=ds_input1";
        		var strOutDs    = "dsGamok=dsMaster";
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

        	if(this.dsGwamok.rowcount == 1)
        	{
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "GYOGWAMOK_CD", this.dsGwamok.getColumn(0,"GYOGWAMOK_CD"));
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "GYOGWAMOK_NM", this.dsGwamok.getColumn(0,"GYOGWAMOK_NM"));
        	} else
        	{
        		var oArg = {gyogwamokCdNm:strSearchValue};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";
        		this.gfn_openPopup("gwamok","com::COMM_P03.xfdl",oArg,sPopupCallBack,oOption);
        	}
        };

        this.fn_setCallHakgwaPopup = function(strColumnName, strSearchValue)
        {
        	this.dsHakgwaJeongong.clearData();

        	this.ds_input1.setColumn(this.ds_input1.rowposition, "DEPT_CD_NM", strSearchValue);

        	if(!this.gfn_isNull(strSearchValue))
        	{
        		var strSvc      = "SearchHakgwa";
        		var strUrl      = "/prj/com/Retrieve_P01.do";
        		var strInDs     = "ds_input=ds_input1";
        		var strOutDs    = "dsHakgwaJeongong=dsMaster";
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

        	if(this.dsHakgwaJeongong.rowcount == 1)
        	{
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "HAKGWA_CD", this.dsHakgwaJeongong.getColumn(0,"DEPT_CD"));
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "HAKGWA_NM", this.dsHakgwaJeongong.getColumn(0,"DEPT_NM"));
        	} else
        	{
        		var oArg = {deptCdNm:strSearchValue};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";
        		this.gfn_openPopup("hakgwa","com::COMM_P01.xfdl",oArg,sPopupCallBack,oOption);
        	}
        };

        /**********************************************************************
                17. 기타 Control Event
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
        this.grdDetail_onheaddblclick = function(obj,e)
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

        // 행 변경시
        this.dsMaster_onrowposchanged = function(obj,e)
        {
        	// 개설강좌 담당교수 조회
        	this.fn_DRet();

        	// 관리자가 아니면 승인된 항목은 수정 안되게.
        	if (!this.gfn_isNull(objApp.gds_userInfoDb.getColumn(0, "USER_GBCD")))
        	{
        		var seunginGbcd = this.dsMaster.getColumn(this.dsMaster.rowposition, "SEUNGIN_GBCD");
        		if(seunginGbcd == "03")
        		{
        			this.dsBindable.setColumn(0, "bReadonly", "true");
        			this.dsBindable.setColumn(0, "bEnable", "false");
        		}
        		else
        		{
        			this.dsBindable.setColumn(0, "bReadonly", "false");
        			this.dsBindable.setColumn(0, "bEnable", "true");

        			// 신규는 모두 입력가능하고 신규가 아니면 일부만 입력가능.
        			if(this.dsMaster.getRowType(this.dsMaster.rowposition) == "2")
        			{
        				this.spnYYYY.set_readonly(false);
        				this.cboHakgi.set_readonly(false);
        				this.cboIsuHaknyeon.set_readonly(false);
        				this.cboJuya.set_readonly(false);
        				this.edtBunban.set_readonly(false);
        				this.edtGwamokNm.set_readonly(false);
        				this.btnGwamok.set_enable(true);
        				this.cboIsuGbcd.set_readonly(false);
        				this.edtHakgwaNm.set_readonly(false);
        				this.btnHakgwa.set_enable(true);
        				this.edtHakjeom.set_readonly(false);
        				this.edtSilseupSigan.set_readonly(false);
        				this.cboSiganpyo.set_readonly(false);
        			}
        			else
        			{
        				this.spnYYYY.set_readonly(true);
        				this.cboHakgi.set_readonly(true);
        				this.cboIsuHaknyeon.set_readonly(true);
        				this.cboJuya.set_readonly(true);
        				// 개설강좌입력기간이면 분반 수정 가능.
        				this.fn_Iljeong();
        				if(this.dsGaeseol.getColumn(0, "CURR_ILJEONG_YN") == "N")
        				{
        					this.edtBunban.set_readonly(false);
        				}
        				else
        				{
        					this.edtBunban.set_readonly(true);
        				}
        				this.edtGwamokNm.set_readonly(true);
        				this.btnGwamok.set_enable(false);
        				this.cboIsuGbcd.set_readonly(true);
        				this.edtHakgwaNm.set_readonly(true);
        				this.btnHakgwa.set_enable(false);
        				this.edtHakjeom.set_readonly(true);
        				this.edtSilseupSigan.set_readonly(true);
        				this.cboSiganpyo.set_readonly(true);
        			}
        		}
        	}
        	else
        	{
        		// 관리자면 기존대로
        		// 개설강좌 사용여부 제어 - 신규일때 수정가능.
        		if(this.dsMaster.getRowType(this.dsMaster.rowposition) == "2")
        		{
        			this.spnYYYY.set_readonly(false);
        			this.cboHakgi.set_readonly(false);
        			this.cboIsuHaknyeon.set_readonly(false);
        			this.cboJuya.set_readonly(false);
        			this.edtBunban.set_readonly(false);
        			this.edtGwamokNm.set_readonly(false);
        			this.btnGwamok.set_enable(true);
        			this.cboIsuGbcd.set_readonly(false);
        			this.edtHakgwaNm.set_readonly(false);
        			this.btnHakgwa.set_enable(true);
        			this.edtHakjeom.set_readonly(false);
        			this.edtSilseupSigan.set_readonly(false);
        			this.cboSiganpyo.set_readonly(false);
        		}
        		else
        		{
        			this.spnYYYY.set_readonly(true);
        			this.cboHakgi.set_readonly(true);
        			this.cboIsuHaknyeon.set_readonly(true);
        			this.cboJuya.set_readonly(true);
        			this.edtBunban.set_readonly(false); // 분반 수정 가능
        			this.edtGwamokNm.set_readonly(true);
        			this.btnGwamok.set_enable(false);
        			this.cboIsuGbcd.set_readonly(true);
        			this.edtHakgwaNm.set_readonly(true);
        			this.btnHakgwa.set_enable(false);
        			this.edtHakjeom.set_readonly(true);
        			this.edtSilseupSigan.set_readonly(true);
        			this.cboSiganpyo.set_readonly(true);
        		}
        	}

        	var gwamokCd = this.dsMaster.getColumn(this.dsMaster.rowposition, "GWAMOK_GBCD");
        	if(gwamokCd == "1")
        	{
        		// 이론
        		this.edtIronSisu.set_readonly(false);
        		this.edtSilseupSisu.set_readonly(true);
        	}
        	else if(gwamokCd == "2")
        	{
        		// 실습
        		this.edtIronSisu.set_readonly(true);
        		this.edtSilseupSisu.set_readonly(false);
        	}
        	else if(gwamokCd == "3")
        	{
        		// 이론/실습
        		this.edtIronSisu.set_readonly(false);
        		this.edtSilseupSisu.set_readonly(false);
        	}
        };

        this.dsMaster_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "CHG_BUNBAN")
        	{
        		// 분반 변경 후.

        		// 개설강좌 신규입력할때, 분반 처리.
        		if(this.dsMaster.getRowType(this.dsMaster.rowposition) == "2")
        		{
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "BUNBAN", e.newvalue);
        		}

        		// 담당 교수의 분반도 변경.
        		this.dsDetail.setColumn(this.dsDetail.rowposition, "CHG_BUNBAN", e.newvalue);
        	}
        	else if (e.columnid == "HAKGWA_NM")
        	{
        	   if (this.gfn_isNull(e.newvalue)) {
        	       obj.setColumn(obj.rowposition, "HAKGWA_CD", "");
        	   } else {
        			if (e.oldvalue != e.newvalue)
        			{
        				this.fn_setCallHakgwaPopup(e.columnid, e.newvalue);
        			}
        	   }
        	}
        	else if (e.columnid == "GYOGWAMOK_NM")
        	{
        	   if (this.gfn_isNull(e.newvalue)) {
        	       obj.setColumn(obj.rowposition, "GYOGWAMOK_CD", "");
        	   } else {
        			if (e.oldvalue != e.newvalue)
        			{
        				this.fn_setCallGwamokPopup(e.columnid, e.newvalue);
        			}
        	   }
        	}
        };

        // 이론 실습 시간 자동 계산
        this.edtIronSisu_onkeyup = function(obj,e)
        {
        	var silseup = this.edtSilseupSisu.value;
        	this.edtTonghapSisu.set_value(parseInt(silseup) + parseInt(obj.value));
        };

        // 이론 실습 시간 자동 계산
        this.edtSilseupSisu_onkeyup = function(obj,e)
        {
        	var ironSisu = this.edtIronSisu.value;
        	this.edtTonghapSisu.set_value(parseInt(ironSisu) + parseInt(obj.value));
        };

        // 이수구분 변경시
        this.cboIsuGbcd_onitemchanged = function(obj,e)
        {
        	var isuGbcd = this.cboIsuGbcd.value;
        	if(isuGbcd == "05")
        	{
        		// 교직
        		this.rdoGyojikGwamok.set_value("1");
        	}
        	else
        	{
        		// 교직 외
        		this.rdoGyojikGwamok.set_value("0");
        	}
        };

        // 실습구분 변경시
        this.cboSilseup_onitemchanged = function(obj,e)
        {
        	var gwamokCd = this.cboSilseup.value;
        	if(gwamokCd == "1")
        	{
        		// 이론
        		this.edtIronSisu.set_readonly(false);
        		this.edtSilseupSisu.set_value("0");
        		this.edtSilseupSisu.set_readonly(true);
        		this.edtTonghapSisu.set_value(this.edtIronSisu.value);
        	}
        	else if(gwamokCd == "2")
        	{
        		// 실습
        		this.edtIronSisu.set_value("0");
        		this.edtIronSisu.set_readonly(true);
        		this.edtSilseupSisu.set_readonly(false);
        		this.edtTonghapSisu.set_value(this.edtSilseupSisu.value);
        	}
        	else if(gwamokCd == "3")
        	{
        		// 이론/실습
        		this.edtIronSisu.set_readonly(false);
        		this.edtSilseupSisu.set_readonly(false);
        		this.edtTonghapSisu.set_value(parseInt(this.edtIronSisu.value)+parseInt(this.edtSilseupSisu.value));
        	}
        };

        // 강의담당교수 - 대표교수를 1명만 설정.
        this.dsDetail_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid=="DAEPYOGYOSU_YN")
        	{
        		for(var i=0; i<this.dsDetail.rowcount; i++)
        		{
        			this.dsDetail.setColumn(i, "DAEPYOGYOSU_YN", "0");
        		}
        		this.dsDetail.setColumn(e.row, "DAEPYOGYOSU_YN", "1");
        	}
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

        /**********************************************************************
                18. 검색창 엔터키 조회
        ***********************************************************************/
        this.divSearch_spnSearchYYYY_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"YYYY",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchHakgi_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"HAKGI",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchHaknyeon_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"ISU_HAKNYEON_CD",obj.value);
        		this.fn_Ret();
        	}
        };

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

        this.divSearch_cboSearchSeungin_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"SEUNGIN_GBCD",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchBaejeong_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"GYOSUBAEJEONG_YN",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_edtSearchGangjwa_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"GANGJWA_CD_NM",obj.value);
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
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
            this.grdMaster.addEventHandler("onexpandup",this.grdMaster_onexpandup,this);
            this.btnGwamok.addEventHandler("onclick",this.btnGwamok_onclick,this);
            this.btnHakgwa.addEventHandler("onclick",this.btnHakgwa_onclick,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onkeydown",this.divSearch_spnSearchYYYY_onkeydown,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onchanged",this.divSearch_spnSearchYYYY_onchanged,this);
            this.divSearch.form.cboSearchHakgi.addEventHandler("onkeydown",this.divSearch_cboSearchHakgi_onkeydown,this);
            this.divSearch.form.cboSearchGyeyeol.addEventHandler("onkeydown",this.divSearch_cboSearchGyeyeol_onkeydown,this);
            this.divSearch.form.cboSearchGyeyeol.addEventHandler("onitemchanged",this.divSearch_cboSearchGyeyeol_onitemchanged,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onkeydown",this.divSearch_cboSearchHakgwa_onkeydown,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onitemchanged",this.divSearch_cboSearchHakgwa_onitemchanged,this);
            this.divSearch.form.cboSearchJeongong.addEventHandler("onkeydown",this.divSearch_cboSearchJeongong_onkeydown,this);
            this.divSearch.form.cboSearchHaknyeon.addEventHandler("onkeydown",this.divSearch_cboSearchHaknyeon_onkeydown,this);
            this.divSearch.form.cboSearchJuya.addEventHandler("onkeydown",this.divSearch_cboSearchJuya_onkeydown,this);
            this.divSearch.form.cboSearchBaejeong.addEventHandler("onkeydown",this.divSearch_cboSearchBaejeong_onkeydown,this);
            this.divSearch.form.cboSearchSeungin.addEventHandler("onkeydown",this.divSearch_cboSearchSeungin_onkeydown,this);
            this.divSearch.form.btnSearchSawon.addEventHandler("onclick",this.divSearch_btnSearchSawon_onclick,this);
            this.divSearch.form.edtSearchNm.addEventHandler("onchanged",this.div_01_edtSearchJugwanDeptNm_onchanged,this);
            this.divSearch.form.edtSearchGangjwa.addEventHandler("onkeydown",this.divSearch_edtSearchGangjwa_onkeydown,this);
            this.cboSilseup.addEventHandler("onitemchanged",this.cboSilseup_onitemchanged,this);
            this.spnYYYY.addEventHandler("onkeydown",this.divSearch_spnSearchYYYY_onkeydown,this);
            this.cboIsuGbcd.addEventHandler("onitemchanged",this.cboIsuGbcd_onitemchanged,this);
            this.edtIronSisu.addEventHandler("onkeyup",this.edtIronSisu_onkeyup,this);
            this.edtSilseupSisu.addEventHandler("onkeyup",this.edtSilseupSisu_onkeyup,this);
            this.grdDetail.addEventHandler("onexpandup",this.grdDetail_onexpandup,this);
            this.grdDetail.addEventHandler("onheaddblclick",this.grdDetail_onheaddblclick,this);
            this.btnDel2.addEventHandler("onclick",this.btnDel2_onclick,this);
            this.btnSave2.addEventHandler("onclick",this.btnSave2_onclick,this);
            this.btnBanryeo.addEventHandler("onclick",this.btnBanryeo_onclick,this);
            this.btnSeungin.addEventHandler("onclick",this.btnSeungin_onclick,this);
            this.btnSincheong.addEventHandler("onclick",this.btnSincheong_onclick,this);
            this.btnNew2.addEventHandler("onclick",this.btnNew2_onclick,this);
            this.btnNew.addEventHandler("onclick",this.btnNew_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.btnDel.addEventHandler("onclick",this.btnDel_onclick,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsMaster.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
            this.dsDetail.addEventHandler("oncolumnchanged",this.dsDetail_oncolumnchanged,this);
            this.dsIljeong.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
        };
        this.loadIncludeScript("UL03_2020304_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
