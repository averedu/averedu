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
            this.set_titletext("설문참여자관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGaeseolMaster", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"SEOLMUN_GAESEOL_CD\" type=\"STRING\" size=\"8\"/><Column id=\"SEOLMUN_YUHYUNG_GBCD\" type=\"STRING\" size=\"20\"/><Column id=\"SEOLMUN_YUHYUNG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEOLMUN_NAEYONG\" type=\"STRING\" size=\"4000\"/><Column id=\"SEOLMUN_SIJAK_DT\" type=\"DATE\" size=\"8\"/><Column id=\"SEOLMUN_JONGRYO_DT\" type=\"DATE\" size=\"8\"/><Column id=\"DAMDANG_DEPT_CD\" type=\"STRING\" size=\"8\"/><Column id=\"DAMDANG_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MAGAM_YN\" type=\"STRING\" size=\"1\"/><Column id=\"MAGAM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DAESANG_INWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SEOLMUN_INWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BIGYOGWA_CD\" type=\"STRING\" size=\"8\"/><Column id=\"BIGYOGWA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GYOGWAMOK_CD\" type=\"STRING\" size=\"8\"/><Column id=\"GYOGWAMOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUNBAN\" type=\"STRING\" size=\"5\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"8\"/><Column id=\"HAKGI_NM\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gaeseolInput", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DAMDANG_DEPT_CD\" type=\"STRING\" size=\"8\"/><Column id=\"DAMDANG_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEOLMUN_SIJAK_DT\" type=\"STRING\" size=\"8\"/><Column id=\"SEOLMUN_JONGRYO_DT\" type=\"STRING\" size=\"8\"/><Column id=\"SEOLMUN_YUHYUNG_GBCD\" type=\"STRING\" size=\"20\"/><Column id=\"MAGAM_YN\" type=\"STRING\" size=\"1\"/><Column id=\"BIGYOGWA_PROGRAM_CD\" type=\"STRING\" size=\"8\"/><Column id=\"BIGYOGWA_PROGRAM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GYOGWAMOK_CD\" type=\"STRING\" size=\"8\"/><Column id=\"GYOGWAMOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUNBAN\" type=\"STRING\" size=\"5\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"8\"/><Column id=\"GBV_MENUID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSeolmunYuhyungMaster", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSeolmunYuhyungDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMagamMaster", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMagamDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHaksaengMaster", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"50\"/><Column id=\"CAMPUS_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"DAEHAK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DAEHAK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONGONG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"JUYA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUNBAN\" type=\"STRING\" size=\"5\"/><Column id=\"BUNBAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"HAKNYEON_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKJEOK_STCD\" type=\"STRING\" size=\"3\"/><Column id=\"HAKJEOK_SANGTAE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BYEONDONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"BYEONDONG_SANGSE_CD\" type=\"STRING\" size=\"10\"/><Column id=\"BYEONDONG_SANGSE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHDAY\" type=\"DATE\" size=\"8\"/><Column id=\"GENDER_CD\" type=\"STRING\" size=\"1\"/><Column id=\"GENDER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHAMYEO_DT\" type=\"DATE\" size=\"8\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_haksaengInput", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SEOLMUN_GAESEOL_CD\" type=\"STRING\" size=\"8\"/><Column id=\"ATTFL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"GBV_MENUID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgiMaster", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgiDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rtn", this);
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


            obj = new Dataset("dsBaseYyyyHakgi", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBunbanMaster", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBunbanDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPopupInput", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BIGYOGWA_PROGRAM_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GYOGWAMOK_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDept", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDummy00", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBigyogwaProgram", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGyogwamok", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdGaeseol","0","132",null,"290","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsGaeseolMaster");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"43\"/><Column size=\"81\"/><Column size=\"266\"/><Column size=\"107\"/><Column size=\"98\"/><Column size=\"106\"/><Column size=\"107\"/><Column size=\"111\"/><Column size=\"53\"/><Column size=\"53\"/><Column size=\"48\"/><Column size=\"92\"/><Column size=\"109\"/><Column size=\"109\"/><Column size=\"109\"/><Column size=\"109\"/><Column size=\"47\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" rowspan=\"2\" displaytype=\"normal\" edittype=\"checkbox\" text=\"No\"/><Cell col=\"2\" rowspan=\"2\" text=\"유형구분\"/><Cell col=\"3\" rowspan=\"2\" text=\"설문내용\"/><Cell col=\"4\" colspan=\"2\" text=\"담당부서\"/><Cell col=\"6\" colspan=\"2\" text=\"설문기간\"/><Cell col=\"8\" rowspan=\"2\" text=\"마감여부\"/><Cell col=\"9\" rowspan=\"2\" text=\"대상인원\"/><Cell col=\"10\" rowspan=\"2\" text=\"설문인원\"/><Cell col=\"11\" rowspan=\"2\" text=\"학년도\"/><Cell col=\"12\" rowspan=\"2\" text=\"학기\"/><Cell col=\"13\" colspan=\"2\" text=\"비교과\"/><Cell col=\"15\" colspan=\"2\" text=\"교과목\"/><Cell col=\"17\" rowspan=\"2\" text=\"분반\"/><Cell row=\"1\" col=\"4\" text=\"담당부서코드\"/><Cell row=\"1\" col=\"5\" text=\"담당부서명\"/><Cell row=\"1\" col=\"6\" text=\"시작일자\"/><Cell row=\"1\" col=\"7\" text=\"종료일자\"/><Cell row=\"1\" col=\"13\" text=\"비교과코드\"/><Cell row=\"1\" col=\"14\" text=\"비교과명\"/><Cell row=\"1\" col=\"15\" text=\"교과목코드\"/><Cell row=\"1\" col=\"16\" text=\"교과목명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" editmaxlength=\"1\"/><Cell col=\"1\" displaytype=\"normal\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:SEOLMUN_YUHYUNG_NM\" editmaxlength=\"256\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\" text=\"bind:SEOLMUN_NAEYONG\" editmaxlength=\"4000\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:DAMDANG_DEPT_CD\" editmaxlength=\"8\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:DAMDANG_DEPT_NM\" editmaxlength=\"256\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:SEOLMUN_SIJAK_DT\" editmaxlength=\"8\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:SEOLMUN_JONGRYO_DT\" editmaxlength=\"8\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:MAGAM_NM\" editmaxlength=\"256\"/><Cell col=\"9\" displaytype=\"normal\" edittype=\"none\" textAlign=\"right\" text=\"bind:DAESANG_INWON\" editmaxlength=\"22\"/><Cell col=\"10\" displaytype=\"normal\" edittype=\"none\" textAlign=\"right\" text=\"bind:SEOLMUN_INWON\" editmaxlength=\"22\"/><Cell col=\"11\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:YYYY\" editmaxlength=\"4\"/><Cell col=\"12\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:HAKGI_NM\" editmaxlength=\"256\"/><Cell col=\"13\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:BIGYOGWA_CD\" editmaxlength=\"8\"/><Cell col=\"14\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:BIGYOGWA_NM\" editmaxlength=\"256\"/><Cell col=\"15\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:GYOGWAMOK_CD\" editmaxlength=\"8\"/><Cell col=\"16\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:GYOGWAMOK_NM\" editmaxlength=\"256\"/><Cell col=\"17\" displaytype=\"combotext\" edittype=\"none\" textAlign=\"center\" text=\"bind:BUNBAN\" editmaxlength=\"5\" expandshow=\"hide\" combodataset=\"dsBunbanDetail\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","0","106","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("설문개설목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Grid("grdHaksaeng","0","grdGaeseol:45",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("dsHaksaengMaster");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"62\"/><Column size=\"82\"/><Column size=\"95\"/><Column size=\"117\"/><Column size=\"90\"/><Column size=\"86\"/><Column size=\"63\"/><Column size=\"63\"/><Column size=\"63\"/><Column size=\"63\"/><Column size=\"88\"/><Column size=\"133\"/><Column size=\"139\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"checkbox\" text=\"No\"/><Cell col=\"1\" text=\"계열\"/><Cell col=\"2\" text=\"학과/학부\"/><Cell col=\"3\" text=\"전공\"/><Cell col=\"4\" text=\"학번\"/><Cell col=\"5\" text=\"성명\"/><Cell col=\"6\" text=\"생년월일\"/><Cell col=\"7\" text=\"성별\"/><Cell col=\"8\" text=\"학년\"/><Cell col=\"9\" text=\"분반\"/><Cell col=\"10\" text=\"주야\"/><Cell col=\"11\" text=\"학적상태\"/><Cell col=\"12\" text=\"변동사유\"/><Cell col=\"13\" text=\"참여일시\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:DAEHAK_NM\" editmaxlength=\"256\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:HAKGWA_NM\" editmaxlength=\"256\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:JEONGONG_NM\" editmaxlength=\"256\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:HAKBEON\" editmaxlength=\"10\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:HAKSAENG_NM\" editmaxlength=\"50\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:BIRTHDAY\" editmaxlength=\"8\"/><Cell col=\"7\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:GENDER_NM\" editmaxlength=\"256\"/><Cell col=\"8\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:HAKNYEON_NM\" editmaxlength=\"256\"/><Cell col=\"9\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:BUNBAN_NM\" editmaxlength=\"256\"/><Cell col=\"10\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:JUYA_NM\" editmaxlength=\"256\"/><Cell col=\"11\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:HAKJEOK_SANGTAE_NM\" editmaxlength=\"256\"/><Cell col=\"12\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:BYEONDONG_SANGSE_NM\" editmaxlength=\"256\"/><Cell col=\"13\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:CHAMYEO_DT\" editmaxlength=\"8\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","0","grdGaeseol:18","85","22",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("학생정보");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stRowCnt","125","105","233","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stRowCnt2","100","grdGaeseol:18","233","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnDownload",null,"grdGaeseol:12","95","25","169",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("양식다운로드");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnUpload",null,"grdGaeseol:12","85","25","79",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("양식업로드");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcel",null,"grdGaeseol:12","60","25","14",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","500","97","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","0","124","320","8",null,null,null,null,null,null,this);
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

            obj = new Static("Static01_00","500","422","100","45",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("↑\r\n45\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","459",null,"8","0",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("div_02","0","0",null,"98","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_04_00","601","9","70","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("16");
            obj.set_text("담당부서");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_02.addChild(obj.name, obj);

            obj = new Edit("edtSearchDamdangDeptCd","684","9","155","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            this.div_02.addChild(obj.name, obj);

            obj = new Button("btnSearchDept","852","9","22","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_PopSrch");
            this.div_02.addChild(obj.name, obj);

            obj = new Edit("edtSearchDamdangDeptNm","886","9","155","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("4");
            obj.set_enable("true");
            this.div_02.addChild(obj.name, obj);

            obj = new Static("stc_04_00_01_00_00","601","36","70","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("17");
            obj.set_text("설문기간");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_02.addChild(obj.name, obj);

            obj = new Calendar("calSearchSeolmunSijakDt","684","36","155","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_02.addChild(obj.name, obj);

            obj = new Static("Static00_00","852","36","16","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("18");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.div_02.addChild(obj.name, obj);

            obj = new Calendar("calSearchSeolmunJongryoDt","886","36","155","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_02.addChild(obj.name, obj);

            obj = new Static("stc_04_00_00","6","37","95","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("19");
            obj.set_text("설문유형구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_02.addChild(obj.name, obj);

            obj = new Combo("cboSearchSeolmunYuhyung","112","36","155","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsSeolmunYuhyungMaster");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.div_02.addChild(obj.name, obj);

            obj = new Static("stc_04_00_00_00","302","37","95","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("20");
            obj.set_text("설문마감여부");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_02.addChild(obj.name, obj);

            obj = new Combo("cboSearchMagamYn","409","36","155","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsMagamMaster");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.div_02.addChild(obj.name, obj);

            obj = new Static("stc_01_00","21","9","80","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("21");
            obj.set_text("학년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_02.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","112","9","155","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("0");
            this.div_02.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","318","9","80","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("22");
            obj.set_text("학기");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_02.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgi","409","9","155","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsHakgiMaster");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.div_02.addChild(obj.name, obj);

            obj = new Static("stc_04_00_01_00_01","1053","64","70","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("23");
            obj.set_text("분반");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_02.addChild(obj.name, obj);

            obj = new Edit("edtSearchGyogwamokNm","886","64","155","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("14");
            obj.set_enable("true");
            this.div_02.addChild(obj.name, obj);

            obj = new Button("btnSearchGyogwamok","852","64","22","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_PopSrch");
            this.div_02.addChild(obj.name, obj);

            obj = new Edit("edtSearchGyogwamokCd","684","64","155","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("12");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            this.div_02.addChild(obj.name, obj);

            obj = new Static("stc_04_00_01_00","601","64","70","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("24");
            obj.set_text("교과목");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_02.addChild(obj.name, obj);

            obj = new Edit("edtSearchBigyogwaNm","307","64","155","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("11");
            obj.set_enable("true");
            this.div_02.addChild(obj.name, obj);

            obj = new Button("btnSearchBigyogwa","276","64","22","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_PopSrch");
            this.div_02.addChild(obj.name, obj);

            obj = new Edit("edtSearchBigyogwaCd","112","64","155","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            this.div_02.addChild(obj.name, obj);

            obj = new Static("stc_04_00_01","31","64","70","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("25");
            obj.set_text("비교과");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_02.addChild(obj.name, obj);

            obj = new Combo("cboSearchBunban","1134","65","125","22",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("15");
            obj.set_innerdataset("dsBunbanMaster");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.div_02.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","1","1","27","67",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","40","1","320","9",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","103","1","10","87",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00","565","1","56","60",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_02","40","32","1050","5",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 6pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_02_00","40","60","1050","5",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 6pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01_00","40","88","320","9",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","400","1","10","64",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00_00","1043","1","56","90",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","675","1","10","97",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00_00_00","268","1","56","35",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00","1125","1","10","97",null,null,null,null,null,null,this);
            obj.set_taborder("25");
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
            obj.set_description("설문참여자관리");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_02.form.edtSearchDamdangDeptCd","value","ds_gaeseolInput","DAMDANG_DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_02.form.calSearchSeolmunSijakDt","value","ds_gaeseolInput","SEOLMUN_SIJAK_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_02.form.calSearchSeolmunJongryoDt","value","ds_gaeseolInput","SEOLMUN_JONGRYO_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_02.form.cboSearchSeolmunYuhyung","value","ds_gaeseolInput","SEOLMUN_YUHYUNG_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_02.form.cboSearchMagamYn","value","ds_gaeseolInput","MAGAM_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_02.form.spnSearchYYYY","value","ds_gaeseolInput","YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_02.form.cboSearchHakgi","value","ds_gaeseolInput","HAKGI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_02.form.edtSearchGyogwamokCd","value","ds_gaeseolInput","GYOGWAMOK_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_02.form.edtSearchBigyogwaCd","value","ds_gaeseolInput","BIGYOGWA_PROGRAM_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_02.form.edtSearchDamdangDeptNm","value","ds_gaeseolInput","DAMDANG_DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_02.form.edtSearchGyogwamokNm","value","ds_gaeseolInput","GYOGWAMOK_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_02.form.edtSearchBigyogwaNm","value","ds_gaeseolInput","BIGYOGWA_PROGRAM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_02.form.cboSearchBunban","value","ds_gaeseolInput","BUNBAN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsGaeseolMaster");
            this._addPreloadList("data","","dsHaksaengMaster");
            this._addPreloadList("data","","dsDummy");
            this._addPreloadList("data","","dsDummy00");
        };
        
        // User Script
        this.registerScript("UY01_2100205_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UY01_2100205_M.xfdl(설문참여자관리)
        * 작 성         일 명: jiback
        * 작 성         일 자: 2020/11/09
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
        this.lvchkColidDsGaeseol   = "";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDsGaeseol = "";
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
            var strDs    = "dsSeolmunYuhyungMaster|dsSeolmunYuhyungDetail|dsMagamMaster|dsMagamDetail|dsHakgiMaster|dsHakgiDetail|dsBunbanMaster|dsBunbanDetail";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "80201|80201|80202|80202|00022|00022|00050|00050";                         // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "T|X|T|X|T|X|T|X";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
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
        	this.ds_gaeseolInput.setColumn(0, "GBV_MENUID", objApp.gv_cutPrgId);
        	this.ds_haksaengInput.setColumn(0, "GBV_MENUID", objApp.gv_cutPrgId);
        };

        this.fn_PostBaseYyyyHakgiInit = function()
        {
        	if (this.dsBaseYyyyHakgi.rowcount > 0) {
        		this.ds_gaeseolInput.setColumn(0,"YYYY",  this.dsBaseYyyyHakgi.getColumn(0, "YYYY"));
        		this.ds_gaeseolInput.setColumn(0,"HAKGI", this.dsBaseYyyyHakgi.getColumn(0, "HAKGI"));
        	}
        };

        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {

            this.gfn_clearSortAll(this.grdGaeseol);
        	this.gfn_clearSortAll(this.grdHaksaeng);
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
                    case "GaeseolRet":
                            this.fn_PostGaeseolRet();
                        break;
                    case "Save":
                            this.fn_PostSave();
                        break;
        			case "HaksaengRet":
                            this.fn_PostHaksaengRet();
                        break;
        			case "Help":
                            this.fn_PostHelp();
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
        		case "bigyogwaSearch" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					this.ds_gaeseolInput.set_enableevent(false);
        		            this.ds_gaeseolInput.setColumn(this.ds_gaeseolInput.rowposition, "BIGYOGWA_PROGRAM_CD", sRtn[0]);
        		            this.ds_gaeseolInput.setColumn(this.ds_gaeseolInput.rowposition, "BIGYOGWA_PROGRAM_NM", sRtn[1]);
        					this.ds_gaeseolInput.set_enableevent(true);
        				}
        			break;
        		case "deptSearch" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					this.ds_gaeseolInput.set_enableevent(false);
        		            this.ds_gaeseolInput.setColumn(this.ds_gaeseolInput.rowposition, "DAMDANG_DEPT_CD", sRtn[0]);
        		            this.ds_gaeseolInput.setColumn(this.ds_gaeseolInput.rowposition, "DAMDANG_DEPT_NM", sRtn[1]);
        					this.ds_gaeseolInput.set_enableevent(true);
        				}
        			break;
        		case "gyogwamokSearch" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					this.ds_gaeseolInput.set_enableevent(false);
        		            this.ds_gaeseolInput.setColumn(this.ds_gaeseolInput.rowposition, "GYOGWAMOK_CD", sRtn[0]);
        		            this.ds_gaeseolInput.setColumn(this.ds_gaeseolInput.rowposition, "GYOGWAMOK_NM", sRtn[1]);
        					this.ds_gaeseolInput.set_enableevent(true);
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
        					this.ds_haksaengInput.setColumn(0, "SEOLMUN_GAESEOL_CD",this.dsGaeseolMaster.getColumn(this.dsGaeseolMaster.rowposition,"SEOLMUN_GAESEOL_CD"));
        				    this.ds_haksaengInput.setColumn(0, "ATTFL_NO", sRtn[1]); // 첨부파일번호

        					var strSvc      = "ExcelUpload02";
        					var strUrl      = "/prj/UY/UY01/haksaengExcelUpload_2100205_M.do";
        					var strInDs     = "ds_haksaengInput=ds_haksaengInput:a";
        					var strOutDs    = "dsHaksaengMaster=dsHaksaengMaster";
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
                        this.fn_GaeseolRet();
                    break;
                case "tmp1" :        // 도움말
                         this.fn_Help();
                    break;
        		case "tmp2" :        // 마감
                         this.fn_Magam();
                    break;
        		case "tmp3" :        // 마감해제
                         this.fn_MagamHaeje();
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
        this.fn_PreGaeseolRet = function()
        {
            // 조회조건 셋팅
        	this.dsHaksaengMaster.clearData();
        	this.gfn_getRowCount(this.stRowCnt2,this.dsHaksaengMaster);
        	if(this.ds_gaeseolInput.getColumn(this.ds_gaeseolInput.rowposition, "SEOLMUN_SIJAK_DT") > this.ds_gaeseolInput.getColumn(this.ds_gaeseolInput.rowposition, "SEOLMUN_JONGRYO_DT"))
        	{
        		this.gfn_alert("설문 종료일자는 설문 시작일자보다 이전 날짜가 될 수 없습니다.","저장정보","","question");
        		return false;
        	}
            return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_GaeseolRet = function()
        {
            if(!this.fn_PreGaeseolRet())
            {
                return false;
            }
            var strSvc      = "GaeseolRet";
            var strUrl      = "/prj/UY/UY01/gaeseolRetrieve_2100205_M.do";
            var strInDs     = "ds_gaeseolInput=ds_gaeseolInput";
            var strOutDs    = "dsGaeseolMaster=dsGaeseolMaster";
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
        this.fn_PostGaeseolRet = function()
        {
            this.gfn_getRowCount(this.stRowCnt,this.dsGaeseolMaster);
        };

        /**********************************************************************
        	05-1. 조회 함수 선언
        ***********************************************************************/
        this.dsGaeseolMaster_onrowposchanged = function(obj,e)
        {
        	this.fn_HaksaengRet();
        };

        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreHaksaengRet = function()
        {
            // 조회조건 셋팅
        	this.ds_haksaengInput.setColumn(0,"SEOLMUN_GAESEOL_CD", this.dsGaeseolMaster.getColumn(this.dsGaeseolMaster.rowposition, "SEOLMUN_GAESEOL_CD"));
            return true;
        };

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
            var strUrl      = "/prj/UY/UY01/haksaengRetrieve_2100205_M.do";
            var strInDs     = "ds_haksaengInput=ds_haksaengInput";
            var strOutDs    = "dsHaksaengMaster=dsHaksaengMaster";
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
        this.fn_PostHaksaengRet = function()
        {
            this.gfn_getRowCount(this.stRowCnt2,this.dsHaksaengMaster);
        };

        /**********************************************************************
                06. 도움말 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreHelp = function()
        {
        	return true;
        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_Help = function()
        {
        	this.gfn_alert("도움말 준비중입니다.","저장정보","","question");
        };
        /**
         *      기능 : 저장시 후처리
         */
        this.fn_PostHelp = function()
        {

        };

        /**********************************************************************
        		07. 마감 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 추가 전 실행(기본체크사항)
         */
        this.fn_PreMagam = function()
        {
        	return true;
        };

        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_Magam = function()
        {
        	if(!this.fn_PreMagam())
        	{
        		return false;
        	}

        	// 선택한 데이터가 없을 경우
        	if(this.dsGaeseolMaster.rowcount < 1 || this.dsGaeseolMaster.findRow("CHK",1) == -1)
            {
                this.gfn_alert("마감할 데이터를 선택해주세요.","마감정보","","warning");
                return false;
            }

        	for(var i=0;i<this.dsGaeseolMaster.rowcount; i++)
        	{
        		// 체크되어있거나 데이터셋의 로우타입이 수정일 때
        		if(this.dsGaeseolMaster.getColumn(i,"CHK") == "1" && this.dsGaeseolMaster.getRowType(i) == Dataset.ROWTYPE_UPDATE)
        		{
        			// 마감상태가 마감일 경우
        			if(this.dsGaeseolMaster.getColumn(i, "MAGAM_YN") == "2")
        			{
        				this.dsGaeseolMaster.set_rowposition(i);
        				this.gfn_alert("이미 마감한 항목입니다.","마감정보","","warning");
        				return false;
        			}
        		}
        	} // for

        	var result = this.gfn_confirm( "현재 선택행을 마감하시겠습니까?", "마감정보","","question" );
        	if(result == 0)
        	{
        		return false;
        	}

        	for(var i=0;i<this.dsGaeseolMaster.rowcount; i++)
        	{
        		// 체크되어있거나 데이터셋의 로우타입이 수정일 때
        		if(this.dsGaeseolMaster.getColumn(i,"CHK") == "1" && this.dsGaeseolMaster.getRowType(i) == Dataset.ROWTYPE_UPDATE)
        		{
        			this.dsGaeseolMaster.setColumn(i, "MAGAM_YN", "2");
        		}
        	}

        	var strSvc      = "Save";
            var strUrl      = "/prj/UY/UY01/gaeseolSave_2100205_M.do";
            var strInDs     = "ds_gaeseolInput=ds_gaeseolInput:a ";
                strInDs    += "dsGaeseolMaster=dsGaeseolMaster:u";
            var strOutDs    = "dsGaeseolMaster=dsGaeseolMaster";
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
        		08. 마감해제 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 추가 전 실행(기본체크사항)
         */
        this.fn_PreMagamHaeje = function()
        {
        	return true;
        };

        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_MagamHaeje = function()
        {
        	if(!this.fn_PreMagamHaeje())
        	{
        		return false;
        	}

        	// 선택한 데이터가 없을 경우
        	if(this.dsGaeseolMaster.rowcount < 1 || this.dsGaeseolMaster.findRow("CHK",1) == -1)
            {
                this.gfn_alert("마감해제할 데이터를 선택해주세요.","마감정보","","warning");
                return false;
            }

        	for(var i=0;i<this.dsGaeseolMaster.rowcount; i++)
        	{
        		// 체크되어있거나 데이터셋의 로우타입이 수정일 때
        		if(this.dsGaeseolMaster.getColumn(i,"CHK") == "1" && this.dsGaeseolMaster.getRowType(i) == Dataset.ROWTYPE_UPDATE)
        		{
        			// 마감상태가 마감해제일 경우
        			if(this.dsGaeseolMaster.getColumn(i, "MAGAM_YN") == "1")
        			{
        				this.dsGaeseolMaster.set_rowposition(i);
        				this.gfn_alert("이미 마감해제한 항목입니다.","마감정보","","warning");
        				return false;
        			}
        		}
        	} // for

        	var result = this.gfn_confirm( "현재 선택행을 마감해제하시겠습니까?", "마감정보","","question" );
        	if(result == 0)
        	{
        		return false;
        	}

        	for(var i=0;i<this.dsGaeseolMaster.rowcount; i++)
        	{
        		// 체크되어있거나 데이터셋의 로우타입이 수정일 때
        		if(this.dsGaeseolMaster.getColumn(i,"CHK") == "1" && this.dsGaeseolMaster.getRowType(i) == Dataset.ROWTYPE_UPDATE)
        		{
        			this.dsGaeseolMaster.setColumn(i, "MAGAM_YN", "1");
        		}
        	} // for


        	var strSvc      = "Save";
            var strUrl      = "/prj/UY/UY01/gaeseolSave_2100205_M.do";
            var strInDs     = "ds_gaeseolInput=ds_gaeseolInput:a ";
                strInDs    += "dsGaeseolMaster=dsGaeseolMaster:u";
            var strOutDs    = "dsGaeseolMaster=dsGaeseolMaster";
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
                09. ExcelDnwn 엑셀로 출력
        ***********************************************************************/
        this.btnExcel_onclick = function(obj,e)
        {
            if(this.dsHaksaengMaster.rowcount < 1)
            {
                this.gfn_alert("출력할 엑셀데이터가 없습니다.", "EXCEL 정보" ,"","information");
                return false;
            }
            var result = this.gfn_confirm( "Excel를 출력하시겠습니까?", "EXCEL 출력","","question" );
            if(result == 0)
            {
               return false;
            }
            this.gfn_excelExport(this.grdHaksaeng, "학생정보","학생정보");
        };

        /**********************************************************************
                10. 기타 Control Event
        ***********************************************************************/

        /**
         *      그리드멀티 체크
         */
        this.grdGaeseol_onheadclick = function(obj,e)
        {
            if(e.cell == this.grdGaeseol.getBindCellIndex("body","CHK"))
            {
                this.gfn_checkAll(obj, e);
            }
        };

        /**
         *      그리드멀티 소트정열
         */
        this.grdGaeseol_onheaddblclick = function(obj,e)
        {
            if(e.cell != this.grdGaeseol.getBindCellIndex("body","CHK") && e.cell != 1)
            {
                this.gfn_gridSort(obj,e);
            }
        };

        this.grdHaksaeng_onheaddblclick = function(obj,e)
        {
            if(e.cell != this.grdHaksaeng.getBindCellIndex("body","CHK"))
            {
                this.gfn_gridSort(obj,e);
            }
        };

        // 엔터키 누르면 조회
        this.div_02_spnSearchYYYY_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_gaeseolInput.setColumn(0,"YYYY",obj.value);
        		this.fn_GaeseolRet();
        	}
        };

        // 엔터키 누르면 조회
        this.div_02_cboSearchHakgi_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_gaeseolInput.setColumn(0,"HAKGI",obj.value);
        		this.fn_GaeseolRet();
        	}
        };

        // 엔터키 누르면 조회
        this.div_02_cboSearchSeolmunYuhyung_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_gaeseolInput.setColumn(0,"SEOLMUN_YUHYUNG_GBCD",obj.value);
        		this.fn_GaeseolRet();
        	}
        };

        // 엔터키 누르면 조회
        this.div_02_cboSearchMagamYn_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_gaeseolInput.setColumn(0,"MAGAM_YN",obj.value);
        		this.fn_GaeseolRet();
        	}
        };

        // 엔터키 누르면 조회
        this.div_02_calSearchSeolmunSijakDt_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_gaeseolInput.setColumn(0,"SEOLMUN_SIJAK_DT",obj.value);
        		this.fn_GaeseolRet();
        	}
        };

        // 엔터키 누르면 조회
        this.div_02_calSearchSeolmunJongryoDt_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_gaeseolInput.setColumn(0,"SEOLMUN_JONGRYO_DT",obj.value);
        		this.fn_GaeseolRet();
        	}
        };

        // 엔터키 누르면 조회
        this.div_02_cboSearchBunban_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_gaeseolInput.setColumn(0,"BUNBAN",obj.value);
        		this.fn_GaeseolRet();
        	}
        };

        /**********************************************************************
                11. 팝업
        ***********************************************************************/
        // 주관부서 팝업
        this.btnSearchDept_onclick = function(obj,e)
        {
        	var deptCdNm = this.div_02.form.edtSearchDeptCd.value;
        	this.fn_setCallDeptPopup(obj.name, deptCdNm);
        };

        // 비교과프로그램 팝업
        this.btnSearchBigyogwa_onclick = function(obj,e)
        {
        	var bigyogwaProgramCdNm = this.div_02.form.edtSearchBigyogwaCd.value;
        	this.fn_setCallBigyogwaProgramPopup(obj.name, bigyogwaProgramCdNm);
        };

        // 교과목 팝업
        this.btnSearchGyogwamok_onclick = function(obj,e)
        {
        	var gyogwamokCdNm = this.div_02.form.edtSearchGyogwamokCd.value;
        	this.fn_setCallGyogwamokPopup(obj.name, gyogwamokCdNm);
        };


        /**********************************************************************
                12. 파일첨부
        ***********************************************************************/
        this.btnDownload_onclick = function(obj,e)
        {
            // 설문참여자관리양식 다운로드
        	this.gfn_attFileDownload("attach6ac96074fb1945d2988dd57594", "001");
        };

        this.btnUpload_onclick = function(obj,e)
        {
        	if (this.dsHaksaengMaster.getRowType(nRow) == Dataset.ROWTYPE_INSERT) {
        		this.gfn_alert("변경 데이터 저장 후 업로드 가능합니다.","저장정보","","information");
        		return;
        	}

        	if (this.dsGaeseolMaster.rowcount == 0)
        	{
        		this.gfn_alert("설문개설목록에서 업로드할 설문을 선택해 주세요.","에러정보","","error");
        		return;
        	}

        	var nRow = this.dsGaeseolMaster.rowposition;
        	var seolmunNaeyong = this.dsGaeseolMaster.getColumn(nRow, "SEOLMUN_NAEYONG");

        	var result = this.gfn_confirm( seolmunNaeyong + "의 학생정보를 업로드 하시겠습니까?", "설문정보","","question" );
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

        //Popup 데이터 전달
        this.fn_dsChildCopydsDummy = function(ds)
        {
        	this.dsDummy.clearData();
        	this.dsDummy.copyData(ds);
        };

        this.ds_gaeseolInput_oncolumnchanged = function(obj,e)
        {
            // 팝업 명 삭제 시 코드 초기화
        	if (e.columnid == "DAMDANG_DEPT_NM") {
        	   if (this.gfn_isNull(e.newvalue)) {
        	       obj.setColumn(obj.rowposition, "DAMDANG_DEPT_CD", "");
        	   } else {
        			if (e.oldvalue != e.newvalue)
        			{
        				this.fn_setCallDeptPopup(obj.name, e.newvalue);
        			}
        	   }
        	} else
        	if (e.columnid == "BIGYOGWA_PROGRAM_NM") {
        	   if (this.gfn_isNull(e.newvalue)) {
        	       obj.setColumn(obj.rowposition, "BIGYOGWA_PROGRAM_CD", "");
        	   } else {
        			if (e.oldvalue != e.newvalue)
        			{
        				this.fn_setCallBigyogwaProgramPopup(obj.name, e.newvalue);
        			}
        	   }
        	} else
        	if (e.columnid == "GYOGWAMOK_NM") {
        	   if (this.gfn_isNull(e.newvalue)) {
        	       obj.setColumn(obj.rowposition, "GYOGWAMOK_CD", "");
        	   } else {
        			if (e.oldvalue != e.newvalue)
        			{
        				this.fn_setCallGyogwamokPopup(obj.name, e.newvalue);
        			}
        	   }
        	}
        };


        // 주관부서
        this.fn_setCallDeptPopup = function(strObjName, strSearchValue)
        {
        	this.dsDept.clearData();

        	this.dsPopupInput.setColumn(this.dsPopupInput.rowposition, "DEPT_NM", strSearchValue);

        	if(!this.gfn_isNull(strSearchValue))
        	{
        		var strSvc 		= "Search";
        		var strUrl 		= "/prj/pop/RetrieveDeptSearchList.do";
        		var strInDs  	= "ds_input=dsPopupInput";
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
        		this.ds_gaeseolInput.setColumn(this.ds_gaeseolInput.rowposition, "DAMDANG_DEPT_CD", this.dsDept.getColumn(0,"DEPT_CD"));
        		this.ds_gaeseolInput.setColumn(this.ds_gaeseolInput.rowposition, "DAMDANG_DEPT_NM", this.dsDept.getColumn(0,"DEPT_NM"));
        	}
        	else
        	{
        		var oArg = {deptCdNm:strSearchValue, jojikGbcd:'00', useYn:'1'};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";
        		this.gfn_openPopup( "deptSearch","com::COMM_P01.xfdl",oArg,sPopupCallBack,oOption);
        	}

        };


        // 비교과프로그램
        this.fn_setCallBigyogwaProgramPopup = function(strObjName, strSearchValue)
        {
        	this.dsBigyogwaProgram.clearData();

        	this.dsPopupInput.setColumn(this.dsPopupInput.rowposition, "BIGYOGWA_PROGRAM_CD_NM", strSearchValue);

        	if(!this.gfn_isNull(strSearchValue))
        	{
        		var strSvc 		= "SearchBigyogwaProgram";
        		var strUrl 		= "/prj/UY/UY01/retrieve_2100202_P01.do";
        		var strInDs  	= "ds_input=dsPopupInput";
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
        		this.ds_gaeseolInput.setColumn(this.ds_gaeseolInput.rowposition, "BIGYOGWA_PROGRAM_CD", this.dsBigyogwaProgram.getColumn(0,"BIGYOGWA_PROGRAM_CD"));
        		this.ds_gaeseolInput.setColumn(this.ds_gaeseolInput.rowposition, "BIGYOGWA_PROGRAM_NM", this.dsBigyogwaProgram.getColumn(0,"BIGYOGWA_PROGRAM_NM"));
         	}
         	else
         	{
        		var strYyyy = this.ds_gaeseolInput.getColumn(0,"YYYY");
        		var strHakgi = this.ds_gaeseolInput.getColumn(0,"HAKGI");

        		var oArg = {bigyogwaProgramCdNm:strSearchValue, yyyy:strYyyy, hakgi:strHakgi};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";
        		this.gfn_openPopup( "bigyogwaSearch","com::COMM_P05.xfdl",oArg,sPopupCallBack,oOption);
         	}
        };

        this.fn_setCallGyogwamokPopup = function(strObjName, strSearchValue)
        {
        	this.dsGyogwamok.clearData();

        	this.dsPopupInput.setColumn(this.dsPopupInput.rowposition, "GYOGWAMOK_CD_NM", strSearchValue);


        	if(!this.gfn_isNull(strSearchValue))
        	{
        		var strSvc 		= "SearchGyogwamok";
        		var strUrl 		= "/prj/com/Retrieve_P03.do";
        		var strInDs  	= "ds_input=dsPopupInput";
        		var strOutDs 	= "dsGyogwamok=dsMaster";
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


        	if(this.dsGyogwamok.rowcount == 1)
        	{
        		this.ds_gaeseolInput.setColumn(this.ds_gaeseolInput.rowposition, "GYOGWAMOK_CD", this.dsGyogwamok.getColumn(0,"GYOGWAMOK_CD"));
        		this.ds_gaeseolInput.setColumn(this.ds_gaeseolInput.rowposition, "GYOGWAMOK_NM", this.dsGyogwamok.getColumn(0,"GYOGWAMOK_NM"));
        	}
        	else
        	{
        		var oArg = {gyogwamokCdNm:strSearchValue};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";
        		this.gfn_openPopup( "gyogwamokSearch","com::COMM_P03.xfdl",oArg,sPopupCallBack,oOption);
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
            this.grdGaeseol.addEventHandler("onheadclick",this.grdGaeseol_onheadclick,this);
            this.grdGaeseol.addEventHandler("onexpandup",this.grdGaeseol_onexpandup,this);
            this.grdHaksaeng.addEventHandler("onheaddblclick",this.grdHaksaeng_onheaddblclick,this);
            this.btnDownload.addEventHandler("onclick",this.btnDownload_onclick,this);
            this.btnUpload.addEventHandler("onclick",this.btnUpload_onclick,this);
            this.btnExcel.addEventHandler("onclick",this.btnExcel_onclick,this);
            this.div_02.form.btnSearchDept.addEventHandler("onclick",this.btnSearchDept_onclick,this);
            this.div_02.form.calSearchSeolmunSijakDt.addEventHandler("onchanged",this.div_01_cal_00_onchanged,this);
            this.div_02.form.calSearchSeolmunSijakDt.addEventHandler("onkeydown",this.div_02_calSearchSeolmunSijakDt_onkeydown,this);
            this.div_02.form.calSearchSeolmunJongryoDt.addEventHandler("onchanged",this.div_01_cal_00_onchanged,this);
            this.div_02.form.calSearchSeolmunJongryoDt.addEventHandler("onkeydown",this.div_02_calSearchSeolmunJongryoDt_onkeydown,this);
            this.div_02.form.cboSearchSeolmunYuhyung.addEventHandler("onkeydown",this.div_02_cboSearchSeolmunYuhyung_onkeydown,this);
            this.div_02.form.cboSearchMagamYn.addEventHandler("onkeydown",this.div_02_cboSearchMagamYn_onkeydown,this);
            this.div_02.form.spnSearchYYYY.addEventHandler("onkeydown",this.div_02_spnSearchYYYY_onkeydown,this);
            this.div_02.form.cboSearchHakgi.addEventHandler("onkeydown",this.div_02_cboSearchHakgi_onkeydown,this);
            this.div_02.form.btnSearchGyogwamok.addEventHandler("onclick",this.btnSearchGyogwamok_onclick,this);
            this.div_02.form.btnSearchBigyogwa.addEventHandler("onclick",this.btnSearchBigyogwa_onclick,this);
            this.div_02.form.cboSearchBunban.addEventHandler("onkeydown",this.div_02_cboSearchBunban_onkeydown,this);
            this.dsGaeseolMaster.addEventHandler("onrowposchanged",this.dsGaeseolMaster_onrowposchanged,this);
            this.ds_gaeseolInput.addEventHandler("oncolumnchanged",this.ds_gaeseolInput_oncolumnchanged,this);
        };
        this.loadIncludeScript("UY01_2100205_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
