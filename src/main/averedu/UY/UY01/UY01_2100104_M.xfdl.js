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
            this.set_titletext("비교과프로그램신청");
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
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"BIGYOGWA_PROGRAM_CD\" type=\"STRING\" size=\"10\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"8\"/><Column id=\"HAKGI_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GAESEOL_SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"PROGRAM_SINCHEONG_SIJAK_DT\" type=\"DATE\" size=\"8\"/><Column id=\"PROGRAM_SINCHEONG_JONGRYO_DT\" type=\"DATE\" size=\"8\"/><Column id=\"PROGRAM_SIJAK_DT\" type=\"DATE\" size=\"8\"/><Column id=\"PROGRAM_JONGRYO_DT\" type=\"DATE\" size=\"8\"/><Column id=\"GANGUISIL_JONGRYU\" type=\"STRING\" size=\"20\"/><Column id=\"GANGSA_SAWON_NO\" type=\"STRING\" size=\"9\"/><Column id=\"GANGSA_NM\" type=\"STRING\" size=\"100\"/><Column id=\"SINCHEONG_GANEUNG_HAKNYEON\" type=\"STRING\" size=\"10\"/><Column id=\"SINCHEONG_GANEUNG_HAKJEOK_SANGTAE\" type=\"STRING\" size=\"50\"/><Column id=\"SINCHEONG_JEHAN_INWON_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SEONCHAKSUN_YN\" type=\"STRING\" size=\"1\"/><Column id=\"SEONCHAKSUN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"4000\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/><Column id=\"BIGYOGWA_PROGRAM_NM\" type=\"STRING\" size=\"100\"/><Column id=\"BIGYOGWA_PROGRAM_GBCD\" type=\"STRING\" size=\"8\"/><Column id=\"BIGYOGWA_PROGRAM_GBCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BIGYOGWA_PROGRAM_SEOLMYEONG\" type=\"STRING\" size=\"4000\"/><Column id=\"JUGWAN_DEPT_CD\" type=\"STRING\" size=\"8\"/><Column id=\"JUGWAN_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DAMDANGJA_SAWON_NO\" type=\"STRING\" size=\"9\"/><Column id=\"HAEKSIM_YEOKRYANG_GBCD\" type=\"STRING\" size=\"8\"/><Column id=\"HAEKSIM_YEOKRYANG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JIKMU_YEOKRYANG\" type=\"STRING\" size=\"500\"/><Column id=\"HAWI_YEOKRYANG\" type=\"STRING\" size=\"500\"/><Column id=\"SINCHOENG_GANEUNG_HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"SINCHOENG_GANEUNG_HAKJEOK_SANGTAE\" type=\"STRING\" size=\"10\"/><Column id=\"GIBON_MILEAGE\" type=\"STRING\" size=\"100\"/><Column id=\"ATTFL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"KEY_VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSincheongMaster", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"BIGYOGWA_PROGRAM_CD\" type=\"STRING\" size=\"10\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"8\"/><Column id=\"HAKGI_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GAESEOL_SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"SINCHEONG_DT\" type=\"DATE\" size=\"8\"/><Column id=\"SEUNGIN_SANGTAE\" type=\"STRING\" size=\"10\"/><Column id=\"SEUNGIN_SANGTAE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BANRYEO_SAYU\" type=\"STRING\" size=\"4000\"/><Column id=\"SURYO_YN\" type=\"STRING\" size=\"1\"/><Column id=\"SURYO_DT\" type=\"DATE\" size=\"8\"/><Column id=\"POGI_YN\" type=\"STRING\" size=\"1\"/><Column id=\"POGI_SAYU\" type=\"STRING\" size=\"4000\"/><Column id=\"SUSANG_CD\" type=\"STRING\" size=\"8\"/><Column id=\"HWAKJEONG_MILEAGE_JUMSU\" type=\"STRING\" size=\"100\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/><Column id=\"BIGYOGWA_PROGRAM_NM\" type=\"STRING\" size=\"100\"/><Column id=\"HAEKSIM_YEOKRYANG_GBCD\" type=\"STRING\" size=\"8\"/><Column id=\"HAEKSIM_YEOKRYANG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRAM_SIJAK_DT\" type=\"DATE\" size=\"8\"/><Column id=\"PROGRAM_JONGRYO_DT\" type=\"DATE\" size=\"8\"/><Column id=\"SEUNGIN_DT\" type=\"STRING\" size=\"8\"/><Column id=\"JUGWAN_DEPT_CD\" type=\"STRING\" size=\"8\"/><Column id=\"JUGWAN_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GANGSA_SAWON_NO\" type=\"STRING\" size=\"9\"/><Column id=\"GANGSA_NM\" type=\"STRING\" size=\"100\"/><Column id=\"PROGRAM_SINCHEONG_SIJAK_DT\" type=\"DATE\" size=\"256\"/><Column id=\"PROGRAM_SINCHEONG_JONGRYO_DT\" type=\"DATE\" size=\"256\"/><Column id=\"KEY_VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sincheongInput", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"BIGYOGWA_PROGRAM_CD\" type=\"STRING\" size=\"10\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"8\"/><Column id=\"GAESEOL_SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"PROGRAM_SINCHEONG_SIJAK_DT\" type=\"DATE\" size=\"8\"/><Column id=\"PROGRAM_SINCHEONG_JONGRYO_DT\" type=\"DATE\" size=\"8\"/><Column id=\"PROGRAM_SIJAK_DT\" type=\"DATE\" size=\"8\"/><Column id=\"PROGRAM_JONGRYO_DT\" type=\"DATE\" size=\"8\"/><Column id=\"GANGUISIL_JONGRYU\" type=\"STRING\" size=\"20\"/><Column id=\"GANGSA_SAWON_NO\" type=\"STRING\" size=\"9\"/><Column id=\"GANGSA_NM\" type=\"STRING\" size=\"100\"/><Column id=\"SINCHEONG_JEHAN_INWON_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SEONCHAKSUN_YN\" type=\"STRING\" size=\"1\"/><Column id=\"BIGO\" type=\"STRING\" size=\"4000\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/><Column id=\"BIGYOGWA_PROGRAM_NM\" type=\"STRING\" size=\"100\"/><Column id=\"BIGYOGWA_PROGRAM_GBCD\" type=\"STRING\" size=\"8\"/><Column id=\"BIGYOGWA_PROGRAM_SEOLMYEONG\" type=\"STRING\" size=\"4000\"/><Column id=\"JUGWAN_DEPT_CD\" type=\"STRING\" size=\"8\"/><Column id=\"DAMDANGJA_SAWON_NO\" type=\"STRING\" size=\"9\"/><Column id=\"HAEKSIM_YEOKRYANG_GBCD\" type=\"STRING\" size=\"8\"/><Column id=\"JIKMU_YEOKRYANG\" type=\"STRING\" size=\"500\"/><Column id=\"HAWI_YEOKRYANG\" type=\"STRING\" size=\"500\"/><Column id=\"SINCHOENG_GANEUNG_HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"SINCHOENG_GANEUNG_HAKJEOK_SANGTAE\" type=\"STRING\" size=\"10\"/><Column id=\"GIBON_MILEAGE\" type=\"STRING\" size=\"100\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gaeseolInput", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"BIGYOGWA_PROGRAM_CD\" type=\"STRING\" size=\"10\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"YYYY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"8\"/><Column id=\"HAKGI_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GAESEOL_SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"SINCHEONG_DT\" type=\"DATE\" size=\"8\"/><Column id=\"SEUNGIN_SANGTAE\" type=\"STRING\" size=\"10\"/><Column id=\"SEUNGIN_SANGTAE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BANRYEO_SAYU\" type=\"STRING\" size=\"4000\"/><Column id=\"SURYO_YN\" type=\"STRING\" size=\"1\"/><Column id=\"SURYO_DT\" type=\"DATE\" size=\"8\"/><Column id=\"POGI_YN\" type=\"STRING\" size=\"1\"/><Column id=\"POGI_SAYU\" type=\"STRING\" size=\"4000\"/><Column id=\"SUSANG_CD\" type=\"STRING\" size=\"8\"/><Column id=\"HWAKJEONG_MILEAGE_JUMSU\" type=\"STRING\" size=\"100\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/><Column id=\"BIGYOGWA_PROGRAM_NM\" type=\"STRING\" size=\"100\"/><Column id=\"HAEKSIM_YEOKRYANG_GBCD\" type=\"STRING\" size=\"8\"/><Column id=\"HAEKSIM_YEOKRYANG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRAM_SIJAK_DT\" type=\"DATE\" size=\"8\"/><Column id=\"PROGRAM_JONGRYO_DT\" type=\"DATE\" size=\"8\"/><Column id=\"SEUNGIN_DT\" type=\"DATE\" size=\"8\"/><Column id=\"JUGWAN_DEPT_CD\" type=\"STRING\" size=\"8\"/><Column id=\"GANGSA_SAWON_NO\" type=\"STRING\" size=\"9\"/><Column id=\"GANGSA_NM\" type=\"STRING\" size=\"100\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"ATTFL_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YYYY\"/><Col id=\"HAKGI\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBaseYyyyHakgi", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgiMaster", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
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
            obj = new Grid("grdGaeseol","0","77",null,"303","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"57\"/><Column size=\"54\"/><Column size=\"156\"/><Column size=\"136\"/><Column size=\"127\"/><Column size=\"127\"/><Column size=\"125\"/><Column size=\"125\"/><Column size=\"79\"/><Column size=\"102\"/><Column size=\"70\"/><Column size=\"56\"/><Column size=\"62\"/><Column size=\"78\"/><Column size=\"48\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"normal\" edittype=\"normal\" text=\"NO\"/><Cell col=\"1\" rowspan=\"2\" text=\"학년도\"/><Cell col=\"2\" rowspan=\"2\" text=\"학기\"/><Cell col=\"3\" rowspan=\"2\" text=\"비교과프로그램\"/><Cell col=\"4\" rowspan=\"2\" text=\"핵심역량\"/><Cell col=\"5\" colspan=\"2\" text=\"프로그램 기간\"/><Cell col=\"7\" colspan=\"2\" text=\"프로그램 신청 기간\"/><Cell col=\"9\" rowspan=\"2\" text=\"마일리지\"/><Cell col=\"10\" rowspan=\"2\" text=\"주관부서\"/><Cell col=\"11\" rowspan=\"2\" text=\"강사\"/><Cell col=\"12\" rowspan=\"2\" text=\"제한인원\"/><Cell col=\"13\" rowspan=\"2\" text=\"선착순여부\"/><Cell col=\"14\" rowspan=\"2\" text=\"첨부파일\"/><Cell col=\"15\" rowspan=\"2\" text=\"신청\"/><Cell row=\"1\" col=\"5\" text=\"시작일시\"/><Cell row=\"1\" col=\"6\" text=\"종료일시\"/><Cell row=\"1\" col=\"7\" text=\"시작일시\"/><Cell row=\"1\" col=\"8\" text=\"종료일시\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:YYYY\" editmaxlength=\"4\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:HAKGI_NM\" editmaxlength=\"8\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\" text=\"bind:BIGYOGWA_PROGRAM_NM\" editmaxlength=\"100\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\" text=\"bind:HAEKSIM_YEOKRYANG_NM\" editmaxlength=\"8\" combodataset=\"dsHaeksim\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:PROGRAM_SIJAK_DT\" editmaxlength=\"8\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:PROGRAM_JONGRYO_DT\" editmaxlength=\"8\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:PROGRAM_SINCHEONG_SIJAK_DT\" editmaxlength=\"8\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:PROGRAM_SINCHEONG_JONGRYO_DT\" editmaxlength=\"8\" calendardisplaynulltype=\"none\"/><Cell col=\"9\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:GIBON_MILEAGE\" editmaxlength=\"100\"/><Cell col=\"10\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:JUGWAN_DEPT_NM\" editmaxlength=\"256\"/><Cell col=\"11\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:GANGSA_NM\" editmaxlength=\"100\"/><Cell col=\"12\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:SINCHEONG_JEHAN_INWON_CNT\" editmaxlength=\"22\"/><Cell col=\"13\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" editmaxlength=\"1\" text=\"bind:SEONCHAKSUN_NM\"/><Cell col=\"14\" text=\"expr:ATTFL_NO != null ? &quot;다운로드&quot; : &quot;&quot;\" edittype=\"expr:ATTFL_NO != null ? &quot;button&quot; : &quot;none&quot;\" displaytype=\"expr:ATTFL_NO != null ? &quot;buttoncontrol&quot; : &quot;normal&quot;\"/><Cell col=\"15\" edittype=\"button\" text=\"신청\" displaytype=\"buttoncontrol\" cursor=\"pointer\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09","0","52","192","22",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("비교과프로그램 개설 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","0","400","330","22",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("비교과프로그램 신청 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Grid("grdSincheong","0","425",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsSincheongMaster");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"61\"/><Column size=\"65\"/><Column size=\"145\"/><Column size=\"131\"/><Column size=\"127\"/><Column size=\"127\"/><Column size=\"141\"/><Column size=\"68\"/><Column size=\"82\"/><Column size=\"86\"/><Column size=\"85\"/><Column size=\"113\"/><Column size=\"84\"/><Column size=\"78\"/><Column size=\"101\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"normal\" edittype=\"normal\" text=\"NO\"/><Cell col=\"1\" rowspan=\"2\" text=\"학년도\"/><Cell col=\"2\" rowspan=\"2\" text=\"학기\"/><Cell col=\"3\" rowspan=\"2\" text=\"비교과프로그램\"/><Cell col=\"4\" rowspan=\"2\" text=\"핵심역량\"/><Cell col=\"5\" colspan=\"2\" text=\"프로그램 기간\"/><Cell col=\"7\" rowspan=\"2\" text=\"주관부서\"/><Cell col=\"8\" rowspan=\"2\" text=\"강사\"/><Cell col=\"9\" rowspan=\"2\" text=\"신청일자\"/><Cell col=\"10\" rowspan=\"2\" text=\"승인여부\"/><Cell col=\"11\" rowspan=\"2\" text=\"승인일자\"/><Cell col=\"12\" rowspan=\"2\" text=\"미승인&#13;&#10;사유\"/><Cell col=\"13\" rowspan=\"2\" text=\"취득&#13;&#10;마일리지\"/><Cell col=\"14\" rowspan=\"2\" text=\"신청취소\"/><Cell col=\"15\" rowspan=\"2\" text=\"수료증출력\"/><Cell row=\"1\" col=\"5\" text=\"시작일시\"/><Cell row=\"1\" col=\"6\" text=\"종료일시\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:YYYY\" editmaxlength=\"4\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:HAKGI_NM\" editmaxlength=\"8\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\" text=\"bind:BIGYOGWA_PROGRAM_NM\" editmaxlength=\"100\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\" text=\"bind:HAEKSIM_YEOKRYANG_NM\" editmaxlength=\"8\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:PROGRAM_SIJAK_DT\" editmaxlength=\"8\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:PROGRAM_JONGRYO_DT\" editmaxlength=\"8\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:JUGWAN_DEPT_NM\" editmaxlength=\"256\"/><Cell col=\"8\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:GANGSA_NM\" editmaxlength=\"100\"/><Cell col=\"9\" text=\"bind:SINCHEONG_DT\"/><Cell col=\"10\" text=\"bind:SEUNGIN_SANGTAE_NM\"/><Cell col=\"11\" text=\"bind:SEUNGIN_DT\" displaytype=\"normal\"/><Cell col=\"12\" text=\"bind:BANRYEO_SAYU\" textAlign=\"left\"/><Cell col=\"13\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:HWAKJEONG_MILEAGE_JUMSU\" editmaxlength=\"100\"/><Cell col=\"14\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"신청취소\" cursor=\"pointer\"/><Cell col=\"15\" displaytype=\"expr:SURYO_YN == &apos;1&apos; ? &quot;buttoncontrol&quot; : &quot;normal&quot;\" edittype=\"expr:SURYO_YN == &apos;1&apos; ? &quot;button&quot; : &quot;none&quot;\" text=\"expr:SURYO_YN == &apos;1&apos; ? &quot;수료증출력&quot; : &quot;&quot;\" cursor=\"pointer\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stRowCnt","192","51","233","24",null,null,null,null,null,null,this);
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            obj.set_taborder("16");
            this.addChild(obj.name, obj);

            obj = new Static("stRowCnt2","192","399","233","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","0","69","320","8",null,null,null,null,null,null,this);
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

            obj = new Static("Static01_01_00_00_00","0","417","320","8",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","500","380","100","45",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("↑\r\n45\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("div_01","0","0",null,"42","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01_00","-5","10","80","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("2");
            obj.set_text("학년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_01.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","85","9","230","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_value("2020");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","355","10","80","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("3");
            obj.set_text("학기");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_01.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgi","445","9","257","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsHakgiMaster");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","40","1","1000","9",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","1","1","27","37",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","560","32","100","9",null,null,null,null,null,null,this);
            obj.set_taborder("9");
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
            obj.set_taborder("10");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","86","1","10","37",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","436","1","10","37",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00","703","1","56","40",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","810","1","10","37",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","500","42","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("비교과프로그램신청");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item3","div_01.form.spnSearchYYYY","value","ds_input","YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_01.form.cboSearchHakgi","value","ds_input","HAKGI");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
            this._addPreloadList("data","","dsSincheongMaster");
            this._addPreloadList("data","","ds_sincheongInput");
            this._addPreloadList("data","","ds_gaeseolInput");
            this._addPreloadList("data","","dsDummy");
        };
        
        // User Script
        this.registerScript("UY01_2100104_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UY01_2100104_M.xfdl(비교과프로그램신청)
        * 작 성         일 명: jiback
        * 작 성         일 자: 2020/11/03
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
            var strDs    = "dsHakgiMaster";      // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00022";                     // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "X";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
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
        };

        this.fn_PostBaseYyyyHakgiInit = function()
        {
        	if (this.dsBaseYyyyHakgi.rowcount > 0) {
        		this.ds_input.setColumn(0,"YYYY",     this.dsBaseYyyyHakgi.getColumn(0, "YYYY"));
        		this.ds_input.setColumn(0,"HAKGI",    this.dsBaseYyyyHakgi.getColumn(0, "HAKGI"));
        	}

        	// 자동조회
        	this.fn_Ret();
        	this.fn_SRet();
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
        			case "baseYyyyHakgiInit":
        					this.fn_PostBaseYyyyHakgiInit();
        			    break;
                    case "Ret":
                            this.fn_PostRet();
                        break;
        			case "SRet":
                            this.fn_PostSRet();
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
        				this.fn_SRet();
                    break;
                default :
                    break;
            };
        };;

        /**********************************************************************
                05. 조회 함수 선언(개설 함수)
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreRet = function()
        {
            // 조회조건 셋팅
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
            var strUrl      = "/prj/UY/UY01/gaeseolRetrieve_2100104_M.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsMaster=dsMaster";
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
        this.fn_PostRet = function()
        {
            this.gfn_getRowCount(this.stRowCnt,this.dsMaster);
        };

        /**********************************************************************
                05-1. 조회 함수 선언(신청 함수)
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreSRet = function()
        {
            // 조회조건 셋팅
            return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_SRet = function()
        {
            if(!this.fn_PreSRet())
            {
                return false;
            }
            var strSvc      = "SRet";
            var strUrl      = "/prj/UY/UY01/sincheongRetrieve_2100104_M.do";
            var strInDs     = "ds_input=ds_input";
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
        this.fn_PostSRet = function()
        {
        	this.gfn_getRowCount(this.stRowCnt2,this.dsSincheongMaster);
        };

        /**********************************************************************
                06. 신청 함수 선언
        ***********************************************************************/
        this.grdGaeseol_oncellclick = function(obj,e)
        {
        	if(obj.getCellPropertyValue(e.row, e.cell, "edittype") == "button" && obj.getCellPropertyValue(e.row, e.cell, "text") == "신청")
        	{

        	    var strProgramSincheongSijakDt = this.dsMaster.getColumn(e.row, "PROGRAM_SINCHEONG_SIJAK_DT");
        	    var strProgramSincheongJongryoDt = this.dsMaster.getColumn(e.row, "PROGRAM_SINCHEONG_JONGRYO_DT");

        		var strToday = objApp.gds_SystemDate.getColumn(0,"YYYYMMDD");

        		if (!(strProgramSincheongSijakDt <= strToday && strToday <= strProgramSincheongJongryoDt))
        		{
        			this.gfn_alert("신청 기간이 아닙니다.","신청정보","","warning");
        			return false;
        		}

        		var sincheongBtn = this.gfn_confirm("현재 행을 신청 하시겠습니까?","신청 처리","","question");
        		if(sincheongBtn == 0)
        		{
        			return false;
        		}

        		this.fn_Save();
        	} else
        	if (obj.getCellPropertyValue(e.row, e.cell, "edittype") == "button" && obj.getCellPropertyValue(e.row, e.cell, "text") == "다운로드")
        	{
        		var strAttFileNo = this.dsMaster.getColumn(e.row, "ATTFL_NO");

        		if (!this.gfn_isNull(strAttFileNo))
        		{

        			var multFlg     = "S"; 	// 멀티처리 : 싱글처리/멀티처리 S:한로우처리/M:멀티로처리

        			this.ds_input.setColumn(this.ds_input.rowposition, "ATTFL_NO", strAttFileNo);

        			var lv_sFlag01 			= "Y";						// (필수)부모에서 파라미터를 넘길지의 여부 (Y:파라미터넘김 / N:넘기지 않음)
        			var lv_sFlag02			= "Y";						// (필수)팝업이 열렸을때 자동조회를 할 것인가 여부.(Y:자동조회 / N:수동조회)
        			var lv_sFlag03			= multFlg;					// 멀티처리 : 싱글처리/멀티처리 S:한로우처리/M:멀티로처리
        			var lv_sValue01 		= strAttFileNo;				// 부모에서 넘어가는 파라미터(첨부파일번호)
        			var lv_sValue02 		= "8";						// 부모에서 넘어가는 파라미터(파일허용갯수)
        			var lv_sValue03 		= "all";					// 부모에서 넘어가는 파라미터(파일허용유형 all,text,image)
        			var lv_sValue04 		= "";						// 부모에서 넘어가는 파라미터(확장자 ext)
        			var lv_sValue05 		= "univ_UY";				// 부모에서 넘어가는 파라미터(도메인네임)
        			var lv_sValue06 		= "N";                      // 부모에서 넘어가는 파라미터(추가/삭제 보이기)

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
        /**
         * 기능 : 신청 전 실행
         */
        this.fn_PreSave = function()
        {
        	// 조회조건 셋팅
        	this.ds_sincheongInput.clearData();
        	this.ds_sincheongInput.insertRow(0);
        	this.ds_sincheongInput.copyRow(0, this.dsMaster, this.dsMaster.rowposition);
        	this.ds_sincheongInput.setColumn(0, "HAKBEON", objApp.gds_userInfoDb.getColumn(0, "USER_ID"));
        	return true;
        };

        /**
         * 기능 : 신청 실행
         */
        this.fn_Save = function()
        {
            if(!this.fn_PreSave())
            {
                return false;
            }

        	this.strKeyValue = this.dsMaster.getColumn(this.dsMaster.rowposition, "KEY_VALUE");

            var strSvc      = "Save";
            var strUrl      = "/prj/UY/UY01/sincheongSave_2100104_M.do";
            var strInDs     = "ds_input=ds_input:a ";
        		strInDs    += "ds_sincheongInput=ds_sincheongInput:u";
            var strOutDs    = "dsSincheongMaster=dsSincheongMaster ";
        	    strOutDs   += "dsMaster=dsMaster";
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
         *      기능 : 신청시 후처리
         */
        this.fn_PostSave = function()
        {
        	var nRow = this.dsSincheongMaster.findRow("KEY_VALUE",this.strKeyValue);
        	this.dsSincheongMaster.set_rowposition(nRow);

        	this.gfn_getRowCount(this.stRowCnt,this.dsMaster);
            this.gfn_getRowCount(this.stRowCnt2,this.dsSincheongMaster);
        	//this.fn_Ret();
        };

        /**********************************************************************
                07. 신청취소 함수 선언
        ***********************************************************************/
        this.grdSincheong_oncellclick = function(obj,e)
        {
        	if(obj.getCellPropertyValue(e.row, e.cell, "edittype") == "button" && obj.getCellPropertyValue(e.row, e.cell, "text") == "신청취소")
        	{
        	    var strProgramSincheongSijakDt = this.dsSincheongMaster.getColumn(e.row, "PROGRAM_SINCHEONG_SIJAK_DT");
        	    var strProgramSincheongJongryoDt = this.dsSincheongMaster.getColumn(e.row, "PROGRAM_SINCHEONG_JONGRYO_DT");
        		var seunginSangtae = this.dsSincheongMaster.getColumn(e.row, "SEUNGIN_SANGTAE");

        		var strToday = objApp.gds_SystemDate.getColumn(0,"YYYYMMDD");

        		if (!(strProgramSincheongSijakDt <= strToday && strToday <= strProgramSincheongJongryoDt))
        		{
        			this.gfn_alert("신청 기간이 아닙니다.","신청정보","","warning");
        			return false;
        		}

        		if(seunginSangtae == '03')
        		{
        			this.gfn_alert("이미 승인된 비교과는 신청취소가 불가능합니다.","신청정보","","warning");
        			return false;
        		}

        		var sincheongCancelBtn = this.gfn_confirm("현재 행을 신청취소 하시겠습니까?","신청 처리","","question");
        		if(sincheongCancelBtn == 0)
        		{
        			return false;
        		}
        		this.fn_Del();
        	}
        	if(obj.getCellPropertyValue(e.row, e.cell, "edittype") == "button" && obj.getCellPropertyValue(e.row, e.cell, "text") == "수료증출력")
        	{
        		var YYYY = this.dsSincheongMaster.getColumn(this.dsSincheongMaster.rowposition, 'YYYY');
        		var HAKGI = this.dsSincheongMaster.getColumn(this.dsSincheongMaster.rowposition, 'HAKGI');
        		var HAKBEON = objApp.gds_userInfoDb.getColumn(0,"USER_ID");

        		var param = { YYYY	              : YYYY
        					, HAKGI               : HAKGI
        					, HAKBEON             : HAKBEON
        					};

        		this.gfn_commonUtils_report('UY01/UY01_2100107_M_01.crf',  param);
        	}
        };
        /**
         * 기능 : 신청취소 버튼 실행
         */
        this.fn_PreDel = function()
        {
        	this.ds_gaeseolInput.clearData();
        	this.ds_gaeseolInput.insertRow(0);
        	this.ds_gaeseolInput.copyRow(0, this.dsSincheongMaster, this.dsSincheongMaster.rowposition);
        	this.ds_gaeseolInput.set_updatecontrol(false);
        	this.ds_gaeseolInput.setRowType(0, Dataset.ROWTYPE_DELETE);
        	this.ds_gaeseolInput.set_updatecontrol(true);
        	return true;
        }

        /**
         * 기능 : Row 삭제 또는 Transaction 삭제 처리
         */
        this.fn_Del = function()
        {
            if(!this.fn_PreDel())
            {
                return false;
            }

        	this.strKeyValue = this.dsSincheongMaster.getColumn(this.dsSincheongMaster.rowposition, "KEY_VALUE");

            var strSvc      = "Del";
            var strUrl      = "/prj/UY/UY01/sincheongDelete_2100104_M.do";
            var strInDs     = "ds_gaeseolInput=ds_gaeseolInput:u ";
        	    strInDs    += "ds_input=ds_input:a";
            var strOutDs    = "dsSincheongMaster=dsSincheongMaster ";
        	    strOutDs   += "dsMaster=dsMaster";
            var strArg      = "";
            var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
              strArg = "GBV_MENUID=" + GBV_MENUID + " " + strArg;
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
        	var nRow = this.dsMaster.findRow("KEY_VALUE",this.strKeyValue);
        	this.dsMaster.set_rowposition(nRow);

        	this.gfn_getRowCount(this.stRowCnt,this.dsMaster);
            this.gfn_getRowCount(this.stRowCnt2,this.dsSincheongMaster);
        	//this.fn_Ret();
        	//this.fn_SRet();
        };

        /**********************************************************************
                08. 기타 Control Event
        ***********************************************************************/

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
            if(e.cell != this.grdSincheong.getBindCellIndex("body","CHK"))
            {
                this.gfn_gridSort(obj,e);
            }
        };


        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
            //return this.gfn_isUpdate(this.dsMaster);
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
            this.grdGaeseol.addEventHandler("oncellclick",this.grdGaeseol_oncellclick,this);
            this.grdSincheong.addEventHandler("onheaddblclick",this.grdSincheong_onheaddblclick,this);
            this.grdSincheong.addEventHandler("onheadclick",this.grdSincheong_onheadclick,this);
            this.grdSincheong.addEventHandler("oncellclick",this.grdSincheong_oncellclick,this);
            this.ds_input.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
        };
        this.loadIncludeScript("UY01_2100104_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();