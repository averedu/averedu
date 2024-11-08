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
            this.set_titletext("개발시공용사용(팝업및공통코드)");
            this.set_enable("true");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cond", this);
            obj._setContents("<ColumnInfo><Column id=\"TEST_CD1\" type=\"STRING\" size=\"256\"/><Column id=\"TEST_CD2\" type=\"STRING\" size=\"256\"/><Column id=\"TEST_CD3\" type=\"STRING\" size=\"256\"/><Column id=\"TEST_CD4\" type=\"STRING\" size=\"256\"/><Column id=\"SYST_SDT\" type=\"STRING\" size=\"256\"/><Column id=\"SYST_EDT\" type=\"STRING\" size=\"256\"/><Column id=\"TEST_TX1\" type=\"STRING\" size=\"256\"/><Column id=\"LARGE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MID_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SMALL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DETA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LMSD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"KWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REL_CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SAUP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EVT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EVT_BIG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SP_GROUP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SP_GROUP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALE_STOP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_GROUP\" type=\"STRING\" size=\"256\"/><Column id=\"STORE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"STORE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_STORE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FC_STORE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HANG_CD3\" type=\"STRING\" size=\"256\"/><Column id=\"HANG_NM3\" type=\"STRING\" size=\"256\"/><Column id=\"HANG_CD2\" type=\"STRING\" size=\"256\"/><Column id=\"HANG_CD1\" type=\"STRING\" size=\"256\"/><Column id=\"HANG_NM1\" type=\"STRING\" size=\"256\"/><Column id=\"HANG_NM2\" type=\"STRING\" size=\"256\"/><Column id=\"STORE_DISTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"STORE_DISTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DUTY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DATA_AUTH_CHK_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TEST_CD1\"/><Col id=\"TEST_CD2\"/><Col id=\"TEST_CD3\"/><Col id=\"TEST_CD4\"/><Col id=\"SYST_SDT\"/><Col id=\"SYST_EDT\"/><Col id=\"TEST_TX1\"/><Col id=\"LARGE_CD\"/><Col id=\"MID_CD\"/><Col id=\"SMALL_CD\"/><Col id=\"SEARCH_GROUP\">NM</Col><Col id=\"DATA_AUTH_CHK_YN\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDummy", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"LARGE_CD\" type=\"STRING\" size=\"2\"/><Column id=\"LARGE_NM\" type=\"STRING\" size=\"50\"/><Column id=\"WONGA_RATE_ID\" type=\"STRING\" size=\"1\"/><Column id=\"DISP_SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"REG_YMD\" type=\"STRING\" size=\"8\"/><Column id=\"CHG_MAN_CD\" type=\"STRING\" size=\"7\"/><Column id=\"CHG_YMDHMS\" type=\"STRING\" size=\"14\"/><Column id=\"DEL_ID\" type=\"STRING\" size=\"1\"/><Column id=\"DEL_YMD\" type=\"STRING\" size=\"8\"/><Column id=\"START_YMD\" type=\"STRING\" size=\"8\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"lvl\" type=\"bigdecimal\" size=\"16\"/><Column id=\"menuId\" type=\"string\" size=\"32\"/><Column id=\"parentMenuId\" type=\"string\" size=\"32\"/><Column id=\"menuNm\" type=\"string\" size=\"32\"/><Column id=\"menuTnm\" type=\"string\" size=\"32\"/><Column id=\"menuEng\" type=\"string\" size=\"32\"/><Column id=\"menuCh\" type=\"string\" size=\"32\"/><Column id=\"menuJp\" type=\"string\" size=\"32\"/><Column id=\"menuEtc\" type=\"string\" size=\"32\"/><Column id=\"menuDc\" type=\"string\" size=\"32\"/><Column id=\"progId\" type=\"string\" size=\"32\"/><Column id=\"formPath\" type=\"string\" size=\"32\"/><Column id=\"formId\" type=\"string\" size=\"32\"/><Column id=\"formNm\" type=\"string\" size=\"32\"/><Column id=\"menuPath\" type=\"string\" size=\"32\"/><Column id=\"menuUrl\" type=\"string\" size=\"32\"/><Column id=\"menuLvl\" type=\"bigdecimal\" size=\"16\"/><Column id=\"menuDiv\" type=\"string\" size=\"32\"/><Column id=\"linkYn\" type=\"string\" size=\"32\"/><Column id=\"menuSort\" type=\"string\" size=\"32\"/><Column id=\"menuCd1\" type=\"string\" size=\"32\"/><Column id=\"menuCd2\" type=\"string\" size=\"32\"/><Column id=\"menuCd3\" type=\"string\" size=\"32\"/><Column id=\"menuCd4\" type=\"string\" size=\"32\"/><Column id=\"regId\" type=\"string\" size=\"32\"/><Column id=\"regDt\" type=\"string\" size=\"32\"/><Column id=\"updId\" type=\"string\" size=\"32\"/><Column id=\"updDt\" type=\"string\" size=\"32\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"PROG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"FORM_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_YN\" type=\"STRING\" size=\"256\"/><Column id=\"STOR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"STOR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"PROG_ID\"/><Col id=\"FORM_PATH\"/><Col id=\"FORM_ID\"/><Col id=\"FORM_NM\"/><Col id=\"USER_YN\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsStoreMaster", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"CMP_CD\" type=\"STRING\" size=\"4\"/><Column id=\"SALES_ORG_CD\" type=\"STRING\" size=\"4\"/><Column id=\"STOR_CD\" type=\"STRING\" size=\"10\"/><Column id=\"BIZ_NO\" type=\"STRING\" size=\"10\"/><Column id=\"DRT_FRCS_TYPE\" type=\"STRING\" size=\"1\"/><Column id=\"STOR_NM\" type=\"STRING\" size=\"60\"/><Column id=\"OPER_24_YN\" type=\"STRING\" size=\"1\"/><Column id=\"OPER_TYPE\" type=\"STRING\" size=\"2\"/><Column id=\"STATUS_DIV\" type=\"STRING\" size=\"1\"/><Column id=\"HQ_STOR_YN\" type=\"STRING\" size=\"1\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"14\"/><Column id=\"REG_USER_ID\" type=\"STRING\" size=\"50\"/><Column id=\"UPD_DATE\" type=\"STRING\" size=\"14\"/><Column id=\"UPD_USER_ID\" type=\"STRING\" size=\"50\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Search", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"STOR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"STOR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_GROUP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_GROUP_KOREAN_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"STOR_CD\"/><Col id=\"STOR_NM\"/><Col id=\"CD_GROUP_CD\"/><Col id=\"CD_GROUP_KOREAN_NM\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCommMaster", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"CD_GROUP_CD\" type=\"STRING\" size=\"30\"/><Column id=\"CD_GROUP_KOREAN_NM\" type=\"STRING\" size=\"100\"/><Column id=\"CD_GROUP_ABRV_NM\" type=\"STRING\" size=\"100\"/><Column id=\"RM_CNTNT\" type=\"STRING\" size=\"2000\"/><Column id=\"CD_LEN\" type=\"STRING\" size=\"10\"/><Column id=\"UPPER_CD_GROUP_CD\" type=\"STRING\" size=\"30\"/><Column id=\"INDICT_ORDR\" type=\"BIGDECIMAL\" size=\"5\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"CD_GROUP_ENG_NM\" type=\"STRING\" size=\"100\"/><Column id=\"CD_GROUP_CHNLNG_NM\" type=\"STRING\" size=\"100\"/><Column id=\"CD_GROUP_JPN_NM\" type=\"STRING\" size=\"100\"/><Column id=\"CD_GROUP_ETC_NM\" type=\"STRING\" size=\"100\"/><Column id=\"DELETE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"REGTR_EMPL_NO\" type=\"STRING\" size=\"10\"/><Column id=\"REG_DTTM\" type=\"DATE\" size=\"24\"/><Column id=\"REGTR_IP\" type=\"STRING\" size=\"20\"/><Column id=\"UPDUSR_EMPL_NO\" type=\"STRING\" size=\"10\"/><Column id=\"UPDT_DTTM\" type=\"DATE\" size=\"24\"/><Column id=\"UPDUSR_IP\" type=\"STRING\" size=\"20\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCommDetail", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"CD_GROUP_CD\" type=\"STRING\" size=\"30\"/><Column id=\"CD_GROUP_KOREAN_NM\" type=\"STRING\" size=\"100\"/><Column id=\"CD_GROUP_ABRV_NM\" type=\"STRING\" size=\"100\"/><Column id=\"RM_CNTNT\" type=\"STRING\" size=\"2000\"/><Column id=\"CD_LEN\" type=\"STRING\" size=\"10\"/><Column id=\"UPPER_CD_GROUP_CD\" type=\"STRING\" size=\"30\"/><Column id=\"INDICT_ORDR\" type=\"BIGDECIMAL\" size=\"5\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"CD_GROUP_ENG_NM\" type=\"STRING\" size=\"100\"/><Column id=\"CD_GROUP_CHNLNG_NM\" type=\"STRING\" size=\"100\"/><Column id=\"CD_GROUP_JPN_NM\" type=\"STRING\" size=\"100\"/><Column id=\"CD_GROUP_ETC_NM\" type=\"STRING\" size=\"100\"/><Column id=\"DELETE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"REGTR_EMPL_NO\" type=\"STRING\" size=\"10\"/><Column id=\"REG_DTTM\" type=\"DATE\" size=\"24\"/><Column id=\"REGTR_IP\" type=\"STRING\" size=\"20\"/><Column id=\"UPDUSR_EMPL_NO\" type=\"STRING\" size=\"10\"/><Column id=\"UPDT_DTTM\" type=\"DATE\" size=\"24\"/><Column id=\"UPDUSR_IP\" type=\"STRING\" size=\"20\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch01","2","1","490","44",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","0","10","149","22",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_text("사용자팝업1(700X480)");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Edit("edtCodeId","156","10","101","22",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Button("btnPopClick","261","10","22","22",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_PopSrch");
            obj.getSetter("auth").set("W");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Edit("edtCodeNm","287","10","191","22",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("3");
            obj.set_enable("false");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Div("divSearch03","2","50","490","44",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","0","10","149","22",null,null,null,null,null,null,this.divSearch03.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_text("사용자팝업3(480X300)");
            this.divSearch03.addChild(obj.name, obj);

            obj = new Edit("edtCodeId","156","10","101","22",null,null,null,null,null,null,this.divSearch03.form);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            this.divSearch03.addChild(obj.name, obj);

            obj = new Button("btnPopClick","261","10","22","22",null,null,null,null,null,null,this.divSearch03.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_PopSrch");
            obj.set_text("");
            this.divSearch03.addChild(obj.name, obj);

            obj = new Edit("edtCodeNm","287","10","191","22",null,null,null,null,null,null,this.divSearch03.form);
            obj.set_taborder("3");
            obj.set_enable("false");
            this.divSearch03.addChild(obj.name, obj);

            obj = new Static("Static00","8","620","998","45",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("grdObj.getBindCellIndex(\"body\", \"classId\")                          /***** 바운드 한 셀의 인덱스값을 가짐 ****/\r\r\r\r\nthis.tbMain.tabpages[this.tbMain.tabindex].name;                  /***** 텝인덱스의 명을 가지고올수 있음 ****/");
            obj.set_color("red");
            obj.set_font("bold 14px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Div("div_cond12","2","640","520","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_inquiryTable");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch02","514","1","498","44",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            obj.set_formscrollbartype("none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","10","146","22",null,null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_text("사용자팝업2(480X480)");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Edit("edtCodeId","151","10","101","22",null,null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Button("btnPopClick","256","10","22","22",null,null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_PopSrch");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Edit("edtCodeNm","282","10","204","22",null,null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("3");
            obj.set_enable("false");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Div("div_cond04","514","50","497","44",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            obj.set_formscrollbartype("none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","10","136","22",null,null,null,null,null,null,this.div_cond04.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_text("사용자팝업4");
            this.div_cond04.addChild(obj.name, obj);

            obj = new Edit("edtCodeId","151","10","101","22",null,null,null,null,null,null,this.div_cond04.form);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            this.div_cond04.addChild(obj.name, obj);

            obj = new Button("btnPopClick","256","10","22","22",null,null,null,null,null,null,this.div_cond04.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_PopSrch");
            this.div_cond04.addChild(obj.name, obj);

            obj = new Edit("edtCodeNm","282","10","203","22",null,null,null,null,null,null,this.div_cond04.form);
            obj.set_taborder("3");
            obj.set_enable("false");
            this.div_cond04.addChild(obj.name, obj);

            obj = new Div("divSearch","2","99","489","44",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","73","10","76","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_text("매장코드");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtStoreCd","156","10","101","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnStorePopup","261","10","22","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_PopSrch");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtStoreNm","287","10","190","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("div_cond05","513","99","497","44",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            obj.set_formscrollbartype("none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","10","136","22",null,null,null,null,null,null,this.div_cond05.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_text("사용자팝업4");
            this.div_cond05.addChild(obj.name, obj);

            obj = new Edit("edtCodeId","151","10","101","22",null,null,null,null,null,null,this.div_cond05.form);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            this.div_cond05.addChild(obj.name, obj);

            obj = new Button("btnPopClick","256","10","22","22",null,null,null,null,null,null,this.div_cond05.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_PopSrch");
            this.div_cond05.addChild(obj.name, obj);

            obj = new Edit("edtCodeNm","282","10","203","22",null,null,null,null,null,null,this.div_cond05.form);
            obj.set_taborder("3");
            obj.set_enable("false");
            this.div_cond05.addChild(obj.name, obj);

            obj = new Div("div_cond06","513","148","497","44",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            obj.set_formscrollbartype("none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","10","136","22",null,null,null,null,null,null,this.div_cond06.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_text("사용자팝업4");
            this.div_cond06.addChild(obj.name, obj);

            obj = new Edit("edtCodeId","151","10","101","22",null,null,null,null,null,null,this.div_cond06.form);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            this.div_cond06.addChild(obj.name, obj);

            obj = new Button("btnPopClick","256","10","22","22",null,null,null,null,null,null,this.div_cond06.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_PopSrch");
            this.div_cond06.addChild(obj.name, obj);

            obj = new Edit("edtCodeNm","282","10","203","22",null,null,null,null,null,null,this.div_cond06.form);
            obj.set_taborder("3");
            obj.set_enable("false");
            this.div_cond06.addChild(obj.name, obj);

            obj = new Div("div_cond07","2","148","489","44",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","1","10","136","22",null,null,null,null,null,null,this.div_cond07.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_text("사용자팝업4");
            this.div_cond07.addChild(obj.name, obj);

            obj = new Edit("edtCodeId","156","10","101","22",null,null,null,null,null,null,this.div_cond07.form);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            this.div_cond07.addChild(obj.name, obj);

            obj = new Button("btnPopClick","261","10","22","22",null,null,null,null,null,null,this.div_cond07.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_PopSrch");
            this.div_cond07.addChild(obj.name, obj);

            obj = new Edit("edtCodeNm","287","10","190","22",null,null,null,null,null,null,this.div_cond07.form);
            obj.set_taborder("3");
            obj.set_enable("false");
            this.div_cond07.addChild(obj.name, obj);

            obj = new Div("div_cond08","513","197","497","44",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            obj.set_formscrollbartype("none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","10","136","22",null,null,null,null,null,null,this.div_cond08.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_text("사용자팝업4");
            this.div_cond08.addChild(obj.name, obj);

            obj = new Edit("edtCodeId","151","10","101","22",null,null,null,null,null,null,this.div_cond08.form);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            this.div_cond08.addChild(obj.name, obj);

            obj = new Button("btnPopClick","256","10","22","22",null,null,null,null,null,null,this.div_cond08.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_PopSrch");
            this.div_cond08.addChild(obj.name, obj);

            obj = new Edit("edtCodeNm","282","10","203","22",null,null,null,null,null,null,this.div_cond08.form);
            obj.set_taborder("3");
            obj.set_enable("false");
            this.div_cond08.addChild(obj.name, obj);

            obj = new Div("div_cond09","2","197","489","44",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","1","10","136","22",null,null,null,null,null,null,this.div_cond09.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_text("사용자팝업4");
            this.div_cond09.addChild(obj.name, obj);

            obj = new Edit("edtCodeId","156","10","101","22",null,null,null,null,null,null,this.div_cond09.form);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            this.div_cond09.addChild(obj.name, obj);

            obj = new Button("btnPopClick","261","10","22","22",null,null,null,null,null,null,this.div_cond09.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_PopSrch");
            this.div_cond09.addChild(obj.name, obj);

            obj = new Edit("edtCodeNm","287","10","190","22",null,null,null,null,null,null,this.div_cond09.form);
            obj.set_taborder("3");
            obj.set_enable("false");
            this.div_cond09.addChild(obj.name, obj);

            obj = new Div("div_cond10","513","246","497","44",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            obj.set_formscrollbartype("none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","10","136","22",null,null,null,null,null,null,this.div_cond10.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_text("사용자팝업4");
            this.div_cond10.addChild(obj.name, obj);

            obj = new Edit("edtCodeId","151","10","101","22",null,null,null,null,null,null,this.div_cond10.form);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            this.div_cond10.addChild(obj.name, obj);

            obj = new Button("btnPopClick","256","10","22","22",null,null,null,null,null,null,this.div_cond10.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_PopSrch");
            this.div_cond10.addChild(obj.name, obj);

            obj = new Edit("edtCodeNm","282","10","203","22",null,null,null,null,null,null,this.div_cond10.form);
            obj.set_taborder("3");
            obj.set_enable("false");
            this.div_cond10.addChild(obj.name, obj);

            obj = new Div("div_cond11","2","246","489","44",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","1","10","136","22",null,null,null,null,null,null,this.div_cond11.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_text("사용자팝업4");
            this.div_cond11.addChild(obj.name, obj);

            obj = new Edit("edtCodeId","156","10","101","22",null,null,null,null,null,null,this.div_cond11.form);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            this.div_cond11.addChild(obj.name, obj);

            obj = new Button("btnPopClick","261","10","22","22",null,null,null,null,null,null,this.div_cond11.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_PopSrch");
            this.div_cond11.addChild(obj.name, obj);

            obj = new Edit("edtCodeNm","287","10","190","22",null,null,null,null,null,null,this.div_cond11.form);
            obj.set_taborder("3");
            obj.set_enable("false");
            this.div_cond11.addChild(obj.name, obj);

            obj = new Div("div_cond13","513","295","497","44",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            obj.set_formscrollbartype("none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","10","136","22",null,null,null,null,null,null,this.div_cond13.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_text("사용자팝업4");
            this.div_cond13.addChild(obj.name, obj);

            obj = new Edit("edtCodeId","151","10","101","22",null,null,null,null,null,null,this.div_cond13.form);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            this.div_cond13.addChild(obj.name, obj);

            obj = new Button("btnPopClick","256","10","22","22",null,null,null,null,null,null,this.div_cond13.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_PopSrch");
            this.div_cond13.addChild(obj.name, obj);

            obj = new Edit("edtCodeNm","282","10","203","22",null,null,null,null,null,null,this.div_cond13.form);
            obj.set_taborder("3");
            obj.set_enable("false");
            this.div_cond13.addChild(obj.name, obj);

            obj = new Div("div_cond14","2","295","489","44",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","1","10","136","22",null,null,null,null,null,null,this.div_cond14.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_text("사용자팝업4");
            this.div_cond14.addChild(obj.name, obj);

            obj = new Edit("edtCodeId","156","10","101","22",null,null,null,null,null,null,this.div_cond14.form);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            this.div_cond14.addChild(obj.name, obj);

            obj = new Button("btnPopClick","261","10","22","22",null,null,null,null,null,null,this.div_cond14.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_PopSrch");
            this.div_cond14.addChild(obj.name, obj);

            obj = new Edit("edtCodeNm","287","10","190","22",null,null,null,null,null,null,this.div_cond14.form);
            obj.set_taborder("3");
            obj.set_enable("false");
            this.div_cond14.addChild(obj.name, obj);

            obj = new Div("div_cond15","513","344","497","44",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            obj.set_formscrollbartype("none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","10","136","22",null,null,null,null,null,null,this.div_cond15.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_text("사용자팝업4");
            this.div_cond15.addChild(obj.name, obj);

            obj = new Edit("edtCodeId","151","10","101","22",null,null,null,null,null,null,this.div_cond15.form);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            this.div_cond15.addChild(obj.name, obj);

            obj = new Button("btnPopClick","256","10","22","22",null,null,null,null,null,null,this.div_cond15.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_PopSrch");
            this.div_cond15.addChild(obj.name, obj);

            obj = new Edit("edtCodeNm","282","10","203","22",null,null,null,null,null,null,this.div_cond15.form);
            obj.set_taborder("3");
            obj.set_enable("false");
            this.div_cond15.addChild(obj.name, obj);

            obj = new Div("div_cond16","2","344","489","44",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","1","10","136","22",null,null,null,null,null,null,this.div_cond16.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_text("사용자팝업4");
            this.div_cond16.addChild(obj.name, obj);

            obj = new Edit("edtCodeId","156","10","101","22",null,null,null,null,null,null,this.div_cond16.form);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            this.div_cond16.addChild(obj.name, obj);

            obj = new Button("btnPopClick","261","10","22","22",null,null,null,null,null,null,this.div_cond16.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_PopSrch");
            this.div_cond16.addChild(obj.name, obj);

            obj = new Edit("edtCodeNm","287","10","190","22",null,null,null,null,null,null,this.div_cond16.form);
            obj.set_taborder("3");
            obj.set_enable("false");
            this.div_cond16.addChild(obj.name, obj);

            obj = new Div("div_cond17","513","393","497","44",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            obj.set_formscrollbartype("none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","10","136","22",null,null,null,null,null,null,this.div_cond17.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_text("사용자팝업4");
            this.div_cond17.addChild(obj.name, obj);

            obj = new Edit("edtCodeId","151","10","101","22",null,null,null,null,null,null,this.div_cond17.form);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            this.div_cond17.addChild(obj.name, obj);

            obj = new Button("btnPopClick","256","10","22","22",null,null,null,null,null,null,this.div_cond17.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_PopSrch");
            this.div_cond17.addChild(obj.name, obj);

            obj = new Edit("edtCodeNm","282","10","203","22",null,null,null,null,null,null,this.div_cond17.form);
            obj.set_taborder("3");
            obj.set_enable("false");
            this.div_cond17.addChild(obj.name, obj);

            obj = new Div("div_cond18","2","393","489","44",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","1","10","136","22",null,null,null,null,null,null,this.div_cond18.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_text("사용자팝업4");
            this.div_cond18.addChild(obj.name, obj);

            obj = new Edit("edtCodeId","156","10","101","22",null,null,null,null,null,null,this.div_cond18.form);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            this.div_cond18.addChild(obj.name, obj);

            obj = new Button("btnPopClick","261","10","22","22",null,null,null,null,null,null,this.div_cond18.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_PopSrch");
            this.div_cond18.addChild(obj.name, obj);

            obj = new Edit("edtCodeNm","287","10","190","22",null,null,null,null,null,null,this.div_cond18.form);
            obj.set_taborder("3");
            obj.set_enable("false");
            this.div_cond18.addChild(obj.name, obj);

            obj = new Div("div_cond19","513","442","497","44",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            obj.set_formscrollbartype("none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","10","136","22",null,null,null,null,null,null,this.div_cond19.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_text("사용자팝업4");
            this.div_cond19.addChild(obj.name, obj);

            obj = new Edit("edtCodeId","151","10","101","22",null,null,null,null,null,null,this.div_cond19.form);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            this.div_cond19.addChild(obj.name, obj);

            obj = new Button("btnPopClick","256","10","22","22",null,null,null,null,null,null,this.div_cond19.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_PopSrch");
            this.div_cond19.addChild(obj.name, obj);

            obj = new Edit("edtCodeNm","282","10","203","22",null,null,null,null,null,null,this.div_cond19.form);
            obj.set_taborder("3");
            obj.set_enable("false");
            this.div_cond19.addChild(obj.name, obj);

            obj = new Div("div_cond20","2","442","489","44",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","1","10","136","22",null,null,null,null,null,null,this.div_cond20.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_text("사용자팝업4");
            this.div_cond20.addChild(obj.name, obj);

            obj = new Edit("edtCodeId","156","10","101","22",null,null,null,null,null,null,this.div_cond20.form);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            this.div_cond20.addChild(obj.name, obj);

            obj = new Button("btnPopClick","261","10","22","22",null,null,null,null,null,null,this.div_cond20.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_PopSrch");
            this.div_cond20.addChild(obj.name, obj);

            obj = new Edit("edtCodeNm","287","10","190","22",null,null,null,null,null,null,this.div_cond20.form);
            obj.set_taborder("3");
            obj.set_enable("false");
            this.div_cond20.addChild(obj.name, obj);

            obj = new Div("div_cond21","513","491","497","44",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            obj.set_formscrollbartype("none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","10","136","22",null,null,null,null,null,null,this.div_cond21.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_text("사용자팝업4");
            this.div_cond21.addChild(obj.name, obj);

            obj = new Edit("edtCodeId","151","10","101","22",null,null,null,null,null,null,this.div_cond21.form);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            this.div_cond21.addChild(obj.name, obj);

            obj = new Button("btnPopClick","256","10","22","22",null,null,null,null,null,null,this.div_cond21.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_PopSrch");
            this.div_cond21.addChild(obj.name, obj);

            obj = new Edit("edtCodeNm","282","10","203","22",null,null,null,null,null,null,this.div_cond21.form);
            obj.set_taborder("3");
            obj.set_enable("false");
            this.div_cond21.addChild(obj.name, obj);

            obj = new Div("div_cond22","2","491","489","44",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","1","10","136","22",null,null,null,null,null,null,this.div_cond22.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_text("사용자팝업4");
            this.div_cond22.addChild(obj.name, obj);

            obj = new Edit("edtCodeId","156","10","101","22",null,null,null,null,null,null,this.div_cond22.form);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            this.div_cond22.addChild(obj.name, obj);

            obj = new Button("btnPopClick","261","10","22","22",null,null,null,null,null,null,this.div_cond22.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_PopSrch");
            this.div_cond22.addChild(obj.name, obj);

            obj = new Edit("edtCodeNm","287","10","190","22",null,null,null,null,null,null,this.div_cond22.form);
            obj.set_taborder("3");
            obj.set_enable("false");
            this.div_cond22.addChild(obj.name, obj);

            obj = new Div("div_cond23","513","540","497","44",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            obj.set_formscrollbartype("none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","10","136","22",null,null,null,null,null,null,this.div_cond23.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_text("사용자팝업4");
            this.div_cond23.addChild(obj.name, obj);

            obj = new Edit("edtCodeId","151","10","101","22",null,null,null,null,null,null,this.div_cond23.form);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            this.div_cond23.addChild(obj.name, obj);

            obj = new Button("btnPopClick","256","10","22","22",null,null,null,null,null,null,this.div_cond23.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_PopSrch");
            this.div_cond23.addChild(obj.name, obj);

            obj = new Edit("edtCodeNm","282","10","203","22",null,null,null,null,null,null,this.div_cond23.form);
            obj.set_taborder("3");
            obj.set_enable("false");
            this.div_cond23.addChild(obj.name, obj);

            obj = new Div("div_cond24","2","540","489","44",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","1","10","136","22",null,null,null,null,null,null,this.div_cond24.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_text("사용자팝업4");
            this.div_cond24.addChild(obj.name, obj);

            obj = new Edit("edtCodeId","156","10","101","22",null,null,null,null,null,null,this.div_cond24.form);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            this.div_cond24.addChild(obj.name, obj);

            obj = new Button("btnPopClick","261","10","22","22",null,null,null,null,null,null,this.div_cond24.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_PopSrch");
            this.div_cond24.addChild(obj.name, obj);

            obj = new Edit("edtCodeNm","287","10","190","22",null,null,null,null,null,null,this.div_cond24.form);
            obj.set_taborder("3");
            obj.set_enable("false");
            this.div_cond24.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item8","divSearch01.form.edtCodeId","value","ds_input","PROG_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divSearch01.form.edtCodeNm","value","ds_input","FORM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch02.form.edtCodeId","value","ds_input","PROG_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch02.form.edtCodeNm","value","ds_input","FORM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divSearch03.form.edtCodeId","value","ds_input","PROG_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divSearch03.form.edtCodeNm","value","ds_input","FORM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.edtStoreCd","value","ds_Search","STOR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divSearch.form.edtStoreNm","value","ds_Search","STOR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_cond07.form.edtCodeId","value","ds_cond","LARGE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","div_cond07.form.edtCodeNm","value","ds_cond","LARGE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_cond09.form.edtCodeId","value","ds_cond","LARGE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","div_cond09.form.edtCodeNm","value","ds_cond","LARGE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_cond11.form.edtCodeId","value","ds_cond","LARGE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","div_cond11.form.edtCodeNm","value","ds_cond","LARGE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_cond14.form.edtCodeId","value","ds_cond","LARGE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","div_cond14.form.edtCodeNm","value","ds_cond","LARGE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_cond16.form.edtCodeId","value","ds_cond","LARGE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","div_cond16.form.edtCodeNm","value","ds_cond","LARGE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_cond18.form.edtCodeId","value","ds_cond","LARGE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","div_cond18.form.edtCodeNm","value","ds_cond","LARGE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_cond20.form.edtCodeId","value","ds_cond","LARGE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","div_cond20.form.edtCodeNm","value","ds_cond","LARGE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div_cond22.form.edtCodeId","value","ds_cond","LARGE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","div_cond22.form.edtCodeNm","value","ds_cond","LARGE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","div_cond24.form.edtCodeId","value","ds_cond","LARGE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","div_cond24.form.edtCodeNm","value","ds_cond","LARGE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_cond04.form.edtCodeId","value","ds_cond","LARGE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","div_cond04.form.edtCodeNm","value","ds_cond","LARGE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_cond05.form.edtCodeId","value","ds_cond","LARGE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","div_cond05.form.edtCodeNm","value","ds_cond","LARGE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_cond06.form.edtCodeId","value","ds_cond","LARGE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_cond06.form.edtCodeNm","value","ds_cond","LARGE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_cond08.form.edtCodeId","value","ds_cond","LARGE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_cond08.form.edtCodeNm","value","ds_cond","LARGE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_cond10.form.edtCodeId","value","ds_cond","LARGE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","div_cond10.form.edtCodeNm","value","ds_cond","LARGE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","div_cond13.form.edtCodeId","value","ds_cond","LARGE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","div_cond13.form.edtCodeNm","value","ds_cond","LARGE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","div_cond15.form.edtCodeId","value","ds_cond","LARGE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","div_cond15.form.edtCodeNm","value","ds_cond","LARGE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_cond17.form.edtCodeId","value","ds_cond","LARGE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_cond17.form.edtCodeNm","value","ds_cond","LARGE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_cond19.form.edtCodeId","value","ds_cond","LARGE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div_cond19.form.edtCodeNm","value","ds_cond","LARGE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","div_cond21.form.edtCodeId","value","ds_cond","LARGE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","div_cond21.form.edtCodeNm","value","ds_cond","LARGE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","div_cond23.form.edtCodeId","value","ds_cond","LARGE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","div_cond23.form.edtCodeNm","value","ds_cond","LARGE_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsDummy");
            this._addPreloadList("data","","dsMaster");
            this._addPreloadList("data","","dsStoreMaster");
            this._addPreloadList("data","","dsCommMaster");
            this._addPreloadList("data","","dsCommDetail");
        };
        
        // User Script
        this.registerScript("POP001MainParentsPopupM01.xfdl", function() {
        /**
        *  메시지 관리
        *  @MenuPath
        *  @FileName 		MSCO000102.xfdl
        *  @Creator 	    jiback
        *  @CreateDate 		2018.01.30
        *  @LastModifier
        *  @LastModifyDate
        *  @Version 		1.0
        *  @Outline
        *  @Description
        ************** 소스 수정 이력 *************************************************
        *    date          		Modifier            Description
        *******************************************************************************
        *  2018.01.30    	    jiback                 최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	//폼에 공통으로 로드시 사용하는 함수.
        	this.gfn_formOnload(obj.e);
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분
         ************************************************************************************************/
        this.fn_callback = function(svcID, errorCode, errorMsg)
        {

        	if(errorCode < 0)
        	{
        		return false;
        	}

        	switch(svcID)
        	{
        		case "init":
        			this.fn_postInit();
        			break;
        		case "initSingle":
        			this.fn_postInitSingle();
        			break;
        	}
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분
         ************************************************************************************************/
        this.fn_dsChildCopydsDummy = function(ds)
        {
        	this.dsDummy.clearData();
        	this.dsDummy.copyData(ds);
        };
        //Popup callback영역
        this.fn_popupCallback = function(strId, strVal)
        {

        	switch(strId)
        	{
        		case "POP002PopUpSizeW700xH480SampleP01" :
        			//대분류팝업조회
        			if(!this.gfn_isNull(strVal))
        			{
        				//일반
        				var sRtn = strVal.split(",");
        				if(sRtn[0] == "S")
        				{
        					this.divSearch01.form.edtCodeId.set_value(sRtn[1]);
        					this.divSearch01.form.edtCodeNm.set_value(sRtn[2]);
        					/*
        					trace("sRtn[1] ======> " + sRtn[1]);
        					trace("sRtn[2] ======> " + sRtn[2]);
        					*/
        					//Dataset
        					//this.dsDummy.loadXML(sRtn[3]);
        					//trace(this.dsDummy.saveXML());
        				} else if(sRtn[0] == "M")
        				{
        					this.dsDummy.loadXML(sRtn[1]);
        					//trace(this.dsDummy.saveXML());
        				} else if(sRtn[0] == "CLOSE")
        				{
        					trace(sRtn[0]);

        				} else if(sRtn[0] == "EXIT")
        				{
        					trace(sRtn[0]);
        				}
        			}
        			break;
        		case "POP003PopUpSizeW480xH480SampleP01" :

        			//중분류팝업조회
        			if(!this.gfn_isNull(strVal))
        			{
        				//일반
        				var sRtn = strVal.split(",");
        				if(sRtn[0] == "S")
        				{
        					this.divSearch02.form.edtCodeId.set_value(sRtn[1]);
        					this.divSearch02.form.edtCodeNm.set_value(sRtn[2]);
        					/*
        					trace("sRtn[1] ======> " + sRtn[1]);
        					trace("sRtn[2] ======> " + sRtn[2]);
        					*/
        					//Dataset
        					//this.dsDummy.loadXML(sRtn[3]);
        					//trace(this.dsDummy.saveXML());
        				} else if(sRtn[0] == "M")
        				{
        					//this.dsDummy.loadXML(sRtn[1]);
        					//trace(this.dsDummy.saveXML());
        				} else if(sRtn[0] == "CLOSE")
        				{
        					//trace(sRtn[0]);

        				} else if(sRtn[0] == "EXIT")
        				{
        					//trace(sRtn[0]);
        				}
        			}
        			break;
        		case "POP004PopUpSizeW480xH300SampleP01" :
        			//소분류팝업조회
        			if(!this.gfn_isNull(strVal))
        			{
        				//일반
        				var sRtn = strVal.split(",");
        				if(sRtn[0] == "S")
        				{
        					this.divSearch03.form.edtCodeId.set_value(sRtn[1]);
        					this.divSearch03.form.edtCodeNm.set_value(sRtn[2]);
        					/*
        					trace("sRtn[1] ======> " + sRtn[1]);
        					trace("sRtn[2] ======> " + sRtn[2]);
        					*/
        					//Dataset
        					//this.dsDummy.loadXML(sRtn[3]);
        					//trace(this.dsDummy.saveXML());
        				} else if(sRtn[0] == "M")
        				{
        					//this.dsDummy.loadXML(sRtn[1]);
        					//trace(this.dsDummy.saveXML());
        				} else if(sRtn[0] == "CLOSE")
        				{
        					//trace(sRtn[0]);

        				} else if(sRtn[0] == "EXIT")
        				{
        					//trace(sRtn[0]);
        				}
        			}
        			break;
        		case "POP005StorPopupP01" :

        			if(!this.gfn_isNull(strVal))
        			{
        				//일반
        				var sRtn = strVal.split(",");
        				if(sRtn[0] == "S")
        				{
        					this.ds_Search.setColumn(0,"STOR_CD",this.dsDummy.getColumn(0,"STOR_CD"));
        					this.ds_Search.setColumn(0,"STOR_NM",this.dsDummy.getColumn(0,"STOR_NM"));

        				} else if(sRtn[0] == "M")
        				{
        				} else if(sRtn[0] == "CLOSE")
        				{

        				} else if(sRtn[0] == "EXIT")
        				{
        				}
        			}
        			break;

        		default	:
        			break;
        	}
         };

        /***********************************************************************************************
        * 샘풀팝업1(POPM000002P)
        /***********************************************************************************************/
        /**
         * 돋보기버튼을 클릭(일반버튼)
         */
        this.divSearch01_btnPopClick_onclick = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.divSearch01.form.edtCodeId.value);
        	/*
        	// dataset으로 인자값을 받음
        	var sCodeId = this.gfn_trim(this.ds_cond.getColumn(this.ds_cond.rowposition,"progId"));
        	*/
        	this.fn_setCallPopup01(sCodeId);
        };
        /**
         * 입력에디터에 코드/명을 입력시 처리
         * 한행 바로셋팅/여러행일시 팝업을 띄운다.(단 입력창에 한글자 이상일때만 처리가능)
         */
        this.div_cond01_edtCodeId_onkeyup = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.divSearch01.form.edtCodeId.value);
        	/*
        	// dataset으로 인자값을 받음
        	var sCodeId = this.gfn_trim(this.ds_cond.getColumn(this.ds_cond.rowposition,"progId"));
        	*/
        	//13(Enter) 누르면 조회
        	if(e.keycode == 13)
        	{
        		if(!this.gfn_isNull(sCodeId))
        		{
        			this.fn_setCallPopup01(sCodeId);
        		}
        	}
        };
        /**
         * 입력창을 지우면 자동을 이름도 초기화처리
         */
        this.div_cond01_edtCodeId_oninput = function(obj,e)
        {
        	if(obj.getLength() == 0)
        	{
        		this.divSearch01.form.edtCodeNm.set_value("");
        	}
        };

        /**
         * 실제로 처리하는 팝업함수
         */
        this.fn_setCallPopup01 = function(sCodeId)
        {

        	var multFlg     = "S"; 	// 멀티처리 : 싱글처리/멀티처리 S:한로우처리/M:멀티로처리
        	this.dsMaster.clearData();

        	if(!this.gfn_isNull(sCodeId) && multFlg != "M")
        	{


        		var strSvc 		= "Search";
        		var strUrl 		= "/prj/pop/RetrievePopUpSizeW700xH480SampleList.do";
        		var strInDs  	= "ds_input=ds_input";
        		var strOutDs 	= "dsMaster=dsMaster";
        		var strArg 		= "";
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

        	if(this.dsMaster.rowcount == 1 && multFlg == "S")
        	{
        		this.divSearch01.form.edtCodeId.set_value(this.dsMaster.getColumn(0,"PROG_ID"));
        		this.divSearch01.form.edtCodeNm.set_value(this.dsMaster.getColumn(0,"FORM_NM"));

        	} else
        	{
        		var lv_sFlag01 			= "N";						// (필수)부모에서 파라미터를 넘길지의 여부 (Y:파라미터넘김 / N:넘기지 않음)
        		var lv_sFlag02			= "Y";						// (필수)팝업이 열렸을때 자동조회를 할 것인가 여부.(Y:자동조회 / N:수동조회)
        		var lv_sFlag03			= multFlg;					// 멀티처리 : 싱글처리/멀티처리 S:한로우처리/M:멀티로처리
        		var lv_sValue01 		= "";						// 부모에서 넘어가는 파라미터(프로그래ID)
        		var lv_sValue02 		= "";						// 부모에서 넘어가는 파라미터(폼ID)
        		var lv_sValue03 		= "";						// 부모에서 넘어가는 파라미터(폼이름)
        		var lv_sValue04 		= "";						// 부모에서 넘어가는 파라미터(폼경로)

        		var sPopId 			= "POP002PopUpSizeW700xH480SampleP01";
        		var sUrl 			= "pop::POP002PopUpSizeW700xH480SampleP01.xfdl";
        		var oArg 			= { pv_sOp01:lv_sFlag01      	// 조회조건 : 조회조건셋팅/조회조건에 미셋팅 Y:조회조건셋팅/조회조건자동셋팅않함.
        							  , pv_sOp02:lv_sFlag02       	// 자동조회 : 바로조회/미조회   Y:자동조회/N:자동조회않임
        							  , pv_sOp03:lv_sFlag03      	// 멀티처리 : 싱글처리/멀티처리 S:한로우처리/M:멀티로처리
        							  , pv_sVal01:lv_sValue01      	// 파라미터1
        							  , pv_sVal02:lv_sValue02       // 파라미터2
        							  , pv_sVal03:lv_sValue03       // 파라미터3
        							  , pv_sVal04:lv_sValue04};     // 파라미터4
        		var sPopupCallBack 	= "fn_popupCallback";
        		var oOption 		= {};
        		this.gfn_openPopup( sPopId
        						  , sUrl
        						  , oArg
        						  , sPopupCallBack
        						  , oOption);
        	}
        };

        /***********************************************************************************************
        * 샘풀팝업1종료
        /***********************************************************************************************/
        /***********************************************************************************************
        * 샘풀팝업2시작(POPM000003P)
        /***********************************************************************************************/
        /**
         * 돋보기버튼을 클릭(일반버튼)
         */
        this.div_cond02_btnPopClick_onclick = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.divSearch02.form.edtCodeId.value);
        	/*
        	// dataset으로 인자값을 받음
        	var sCodeId = this.gfn_trim(this.ds_input.getColumn(this.ds_input.rowposition,"progId"));
        	*/
        	this.fn_setCallPopup02(sCodeId);
        };
        /**
         * 입력에디터에 코드/명을 입력시 처리
         * 한행 바로셋팅/여러행일시 팝업을 띄운다.(단 입력창에 한글자 이상일때만 처리가능)
         */
        this.divSearch02_edtCodeId_onkeyup = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.divSearch02.form.edtCodeId.value);
        	/*
        	// dataset으로 인자값을 받음
        	var sCodeId = this.gfn_trim(this.ds_input.getColumn(this.ds_input.rowposition,"progId"));
        	*/
        	//13(Enter) 누르면 조회
        	if(e.keycode == 13)
        	{
        		if(!this.gfn_isNull(sCodeId))
        		{
        			this.fn_setCallPopup02(sCodeId);
        		}
        	}
        };
        /**
         * 입력창을 지우면 자동을 이름도 초기화처리
         */
        this.divSearch02_edtCodeId_oninput = function(obj,e)
        {
        	if(obj.getLength() == 0)
        	{
        		this.divSearch02.form.edtCodeNm.set_value("");
        	}
        };
        /**
         * 실제로 처리하는 팝업함수
         */
        this.fn_setCallPopup02 = function(sCodeId)
        {
        	var multFlg     = "S"; 	// 멀티처리 : 싱글처리/멀티처리 S:한로우처리/M:멀티로처리
        	this.dsMaster.clearData();

        	if(!this.gfn_isNull(sCodeId) && multFlg != "M")
        	{

        		var strSvc 		= "Search";
        		var strUrl 		= "/prj/pop/RetrievePopUpSizeW480xH480SampleList.do";
        		var strInDs  	= "ds_input=ds_input";
        		var strOutDs 	= "dsMaster=dsMaster";
        		var strArg 		= "";
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

        	if(this.dsMaster.rowcount == 1 && multFlg == "S")
        	{
        		this.divSearch02.form.edtCodeId.set_value(this.dsMaster.getColumn(0,"PROG_ID"));
        		this.divSearch02.form.edtCodeNm.set_value(this.dsMaster.getColumn(0,"FORM_NM"));

        	} else
        	{
        		var lv_sFlag01 			= "N";						// (필수)부모에서 파라미터를 넘길지의 여부 (Y:파라미터넘김 / N:넘기지 않음)
        		var lv_sFlag02			= "Y";						// (필수)팝업이 열렸을때 자동조회를 할 것인가 여부.(Y:자동조회 / N:수동조회)
        		var lv_sFlag03			= multFlg;					// 멀티처리 : 싱글처리/멀티처리 S:한로우처리/M:멀티로처리
        		var lv_sValue01 		= "";						// 부모에서 넘어가는 파라미터(프로그래ID)
        		var lv_sValue02 		= "";						// 부모에서 넘어가는 파라미터(폼ID)
        		var lv_sValue03 		= "";						// 부모에서 넘어가는 파라미터(폼이름)
        		var lv_sValue04 		= "";						// 부모에서 넘어가는 파라미터(폼경로)

        		var sPopId 			= "POP003PopUpSizeW480xH480SampleP01";
        		var sUrl 			= "pop::POP003PopUpSizeW480xH480SampleP01.xfdl";
        		var oArg 			= { pv_sOp01:lv_sFlag01      	// 조회조건 : 조회조건셋팅/조회조건에 미셋팅 Y:조회조건셋팅/조회조건자동셋팅않함.
        							  , pv_sOp02:lv_sFlag02       	// 자동조회 : 바로조회/미조회   Y:자동조회/N:자동조회않임
        							  , pv_sOp03:lv_sFlag03      	// 멀티처리 : 싱글처리/멀티처리 S:한로우처리/M:멀티로처리
        							  , pv_sVal01:lv_sValue01      	// 파라미터1
        							  , pv_sVal02:lv_sValue02       // 파라미터2
        							  , pv_sVal03:lv_sValue03       // 파라미터3
        							  , pv_sVal04:lv_sValue04};     // 파라미터4
        		var sPopupCallBack 	= "fn_popupCallback";
        		var oOption 		= {};
        		this.gfn_openPopup( sPopId
        						  , sUrl
        						  , oArg
        						  , sPopupCallBack
        						  , oOption);
        	}
        };

        /***********************************************************************************************
        * 샘풀팝업2종료
        /***********************************************************************************************/
        /***********************************************************************************************
        * 샘풀팝업3시작(POPM000004P)
        /***********************************************************************************************/
        /**
         * 돋보기버튼을 클릭(일반버튼)
         */
        this.divSearch03_btnPopClick_onclick = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.divSearch03.form.edtCodeId.value);
        	/*
        	// dataset으로 인자값을 받음
        	var sCodeId = this.gfn_trim(this.ds_input.getColumn(this.ds_input.rowposition,"progId"));
        	*/
        	this.fn_setCallPopup03(sCodeId);
        };
        /**
         * 입력에디터에 코드/명을 입력시 처리
         * 한행 바로셋팅/여러행일시 팝업을 띄운다.(단 입력창에 한글자 이상일때만 처리가능)
         */

        this.divSearch03_edtCodeId_onkeyup = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.divSearch03.form.edtCodeId.value);
        	/*
        	// dataset으로 인자값을 받음
        	var sCodeId = this.gfn_trim(this.ds_input.getColumn(this.ds_input.rowposition,"progId"));
        	*/
        	//13(Enter) 누르면 조회
        	if(e.keycode == 13)
        	{
        		if(!this.gfn_isNull(sCodeId))
        		{
        			this.fn_setCallPopup03(sCodeId);
        		}
        	}
        };
        /**
         * 입력창을 지우면 자동을 이름도 초기화처리
         */
        this.divSearch03_edtCodeId_oninput = function(obj,e)
        {
        	if(obj.getLength() == 0)
        	{
        		this.divSearch03.form.edtCodeNm.set_value("");
        	}
        };
        /**
         * 실제로 처리하는 팝업함수
         */
        this.fn_setCallPopup03 = function(sCodeId)
        {
        	var multFlg     = "S"; 	// 멀티처리 : 싱글처리/멀티처리 S:한로우처리/M:멀티로처리
        	this.dsMaster.clearData();

        	if(!this.gfn_isNull(sCodeId) && multFlg != "M")
        	{

        		var strSvc 		= "Search";
        		var strUrl 		= "/prj/pop/RetrievePopUpSizeW480xH300SampleList.do";
        		var strInDs  	= "ds_input=ds_input";
        		var strOutDs 	= "dsMaster=dsMaster";
        		var strArg 		= "";
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

        	if(this.dsMaster.rowcount == 1 && multFlg == "S")
        	{
        		this.divSearch03.form.edtCodeId.set_value(this.dsMaster.getColumn(0,"PROG_ID"));
        		this.divSearch03.form.edtCodeNm.set_value(this.dsMaster.getColumn(0,"FORM_NM"));

        	} else
        	{
        		var lv_sFlag01 			= "N";						// (필수)부모에서 파라미터를 넘길지의 여부 (Y:파라미터넘김 / N:넘기지 않음)
        		var lv_sFlag02			= "Y";						// (필수)팝업이 열렸을때 자동조회를 할 것인가 여부.(Y:자동조회 / N:수동조회)
        		var lv_sFlag03			= multFlg;					// 멀티처리 : 싱글처리/멀티처리 S:한로우처리/M:멀티로처리
        		var lv_sValue01 		= "";						// 부모에서 넘어가는 파라미터(프로그래ID)
        		var lv_sValue02 		= "";						// 부모에서 넘어가는 파라미터(폼ID)
        		var lv_sValue03 		= "";						// 부모에서 넘어가는 파라미터(폼이름)
        		var lv_sValue04 		= "";						// 부모에서 넘어가는 파라미터(폼경로)

        		var sPopId 			= "POP004PopUpSizeW480xH300SampleP01";
        		var sUrl 			= "pop::POP004PopUpSizeW480xH300SampleP01.xfdl";
        		var oArg 			= { pv_sOp01:lv_sFlag01      	// 조회조건 : 조회조건셋팅/조회조건에 미셋팅 Y:조회조건셋팅/조회조건자동셋팅않함.
        							  , pv_sOp02:lv_sFlag02       	// 자동조회 : 바로조회/미조회   Y:자동조회/N:자동조회않임
        							  , pv_sOp03:lv_sFlag03      	// 멀티처리 : 싱글처리/멀티처리 S:한로우처리/M:멀티로처리
        							  , pv_sVal01:lv_sValue01      	// 파라미터1
        							  , pv_sVal02:lv_sValue02       // 파라미터2
        							  , pv_sVal03:lv_sValue03       // 파라미터3
        							  , pv_sVal04:lv_sValue04};     // 파라미터4
        		var sPopupCallBack 	= "fn_popupCallback";
        		var oOption 		= {};
        		this.gfn_openPopup( sPopId
        						  , sUrl
        						  , oArg
        						  , sPopupCallBack
        						  , oOption);
        	}
        };
        /***********************************************************************************************
        * 샘풀팝업3종료
        /***********************************************************************************************/
        /***********************************************************************************************
        * 매장팝업(매장팝업)
        /***********************************************************************************************/

        this.divSearch_btnStorePopup_onclick = function(obj,e)
        {
        	var sStoreCd = this.gfn_trim(this.divSearch.form.edtStoreCd.value);
        	this.fn_storPopup(sStoreCd);
        };

        this.divSearch_edtStoreCd_onkeyup = function(obj,e)
        {
        	var sStoreCd = this.gfn_trim(this.divSearch.form.edtStoreCd.value);

        	//13(Enter) 누르면 조회
        	if(e.keycode == 13)
        	{
        		if(!this.gfn_isNull(sStoreCd))
        		{
        			this.fn_storPopup(sStoreCd);
        		}
        	}

        };

        this.divSearch_edtStoreCd_oninput = function(obj,e)
        {
        	if(obj.getLength() == 0)
        	{
        		this.divSearch.form.edtStoreNm.set_value("");
        	}
        };

        /**
         * 실제로 처리하는 팝업함수
         */
        this.fn_storPopup = function(sStoreCd)
        {
        	var multFlg     = "S"; 	// 멀티처리 : 싱글처리/멀티처리 S:한로우처리/M:멀티로처리
        	this.dsStoreMaster.clearData();

        	if(!this.gfn_isNull(sStoreCd) && multFlg != "M")
        	{
        		var strSvc 		= "Search";
        		var strUrl 		= "/prj/pop/RetrieveStorPopupList.do";
        		var strInDs  	= "ds_Search=ds_Search";
        		var strOutDs 	= "dsStoreMaster=dsStoreMaster";
        		var strArg 		= "";
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

        	if(this.dsStoreMaster.rowcount == 1 && multFlg == "S")
        	{
        		this.ds_Search.setColumn(0,"STOR_CD",this.dsStoreMaster.getColumn(0,"STOR_CD"));
        		this.ds_Search.setColumn(0,"STOR_NM",this.dsStoreMaster.getColumn(0,"STOR_NM"));

        	} else
        	{
        		var lv_sFlag01 			= "N";						// (필수)부모에서 파라미터를 넘길지의 여부 (Y:파라미터넘김 / N:넘기지 않음)
        		var lv_sFlag02			= "Y";						// (필수)팝업이 열렸을때 자동조회를 할 것인가 여부.(Y:자동조회 / N:수동조회)
        		var lv_sFlag03			= multFlg;					// 멀티처리 : 싱글처리/멀티처리 S:한로우처리/M:멀티로처리
        		var lv_sValue01 		= objApp.gds_userInfoDb.getColumn(0,"CMP_CD");	// 부모에서 넘어가는 파라미터(프로그래ID)
        		var lv_sValue02 		= this.ds_Search.getColumn(0,"STOR_CD");		// 부모에서 넘어가는 파라미터(폼ID)
        		var lv_sValue03 		= this.ds_Search.getColumn(0,"STOR_NM");  		// 부모에서 넘어가는 파라미터(폼이름)

        		var sPopId 			= "POP005StorPopupP01";
        		var sUrl 			= "pop::POP005StorPopupP01.xfdl";
        		var oArg 			= { pv_sOp01:lv_sFlag01      	// 조회조건 : 조회조건셋팅/조회조건에 미셋팅 Y:조회조건셋팅/조회조건자동셋팅않함.
        							  , pv_sOp02:lv_sFlag02       	// 자동조회 : 바로조회/미조회   Y:자동조회/N:자동조회않임
        							  , pv_sOp03:lv_sFlag03      	// 멀티처리 : 싱글처리/멀티처리 S:한로우처리/M:멀티로처리
        							  , pv_sVal01:lv_sValue01      	// 파라미터1
        							  , pv_sVal02:lv_sValue02       // 파라미터2
        							  , pv_sVal03:lv_sValue03};     // 파라미터3
        		var sPopupCallBack 	= "fn_popupCallback";
        		var oOption 		= {};
        		this.gfn_openPopup( sPopId
        						  , sUrl
        						  , oArg
        						  , sPopupCallBack
        						  , oOption);
        	}
        };

        /***********************************************************************************************
        * 매장팝업 종료
        /***********************************************************************************************/


         /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
           // return (this.gfn_isUpdate(this.dsMaster) || this.gfn_isUpdate(this.dsDetail1) || this.gfn_isUpdate(this.dsDetail2));
        };







        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch01.form.edtCodeId.addEventHandler("onkeyup",this.div_cond01_edtCodeId_onkeyup,this);
            this.divSearch01.form.edtCodeId.addEventHandler("oninput",this.div_cond01_edtCodeId_oninput,this);
            this.divSearch01.form.btnPopClick.addEventHandler("onclick",this.divSearch01_btnPopClick_onclick,this);
            this.divSearch03.form.edtCodeId.addEventHandler("onkeyup",this.divSearch03_edtCodeId_onkeyup,this);
            this.divSearch03.form.edtCodeId.addEventHandler("oninput",this.divSearch03_edtCodeId_oninput,this);
            this.divSearch03.form.btnPopClick.addEventHandler("onclick",this.divSearch03_btnPopClick_onclick,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.divSearch02.form.edtCodeId.addEventHandler("onkeyup",this.divSearch02_edtCodeId_onkeyup,this);
            this.divSearch02.form.edtCodeId.addEventHandler("oninput",this.divSearch02_edtCodeId_oninput,this);
            this.divSearch02.form.btnPopClick.addEventHandler("onclick",this.div_cond02_btnPopClick_onclick,this);
            this.div_cond04.form.edtCodeId.addEventHandler("onkeyup",this.div_cond_edt_lageCd_onkeyup,this);
            this.div_cond04.form.edtCodeId.addEventHandler("oninput",this.div_cond_edt_lageCd_oninput,this);
            this.div_cond04.form.btnPopClick.addEventHandler("onclick",this.div_cond_btn_popClick01_onclick,this);
            this.divSearch.form.edtStoreCd.addEventHandler("onkeyup",this.divSearch_edtStoreCd_onkeyup,this);
            this.divSearch.form.edtStoreCd.addEventHandler("oninput",this.divSearch_edtStoreCd_oninput,this);
            this.divSearch.form.btnStorePopup.addEventHandler("onclick",this.divSearch_btnStorePopup_onclick,this);
            this.div_cond05.form.edtCodeId.addEventHandler("onkeyup",this.div_cond_edt_lageCd_onkeyup,this);
            this.div_cond05.form.edtCodeId.addEventHandler("oninput",this.div_cond_edt_lageCd_oninput,this);
            this.div_cond05.form.btnPopClick.addEventHandler("onclick",this.div_cond_btn_popClick01_onclick,this);
            this.div_cond06.form.edtCodeId.addEventHandler("onkeyup",this.div_cond_edt_lageCd_onkeyup,this);
            this.div_cond06.form.edtCodeId.addEventHandler("oninput",this.div_cond_edt_lageCd_oninput,this);
            this.div_cond06.form.btnPopClick.addEventHandler("onclick",this.div_cond_btn_popClick01_onclick,this);
            this.div_cond07.form.edtCodeId.addEventHandler("onkeyup",this.div_cond_edt_lageCd_onkeyup,this);
            this.div_cond07.form.edtCodeId.addEventHandler("oninput",this.div_cond_edt_lageCd_oninput,this);
            this.div_cond07.form.btnPopClick.addEventHandler("onclick",this.div_cond_btn_popClick01_onclick,this);
            this.div_cond08.form.edtCodeId.addEventHandler("onkeyup",this.div_cond_edt_lageCd_onkeyup,this);
            this.div_cond08.form.edtCodeId.addEventHandler("oninput",this.div_cond_edt_lageCd_oninput,this);
            this.div_cond08.form.btnPopClick.addEventHandler("onclick",this.div_cond_btn_popClick01_onclick,this);
            this.div_cond09.form.edtCodeId.addEventHandler("onkeyup",this.div_cond_edt_lageCd_onkeyup,this);
            this.div_cond09.form.edtCodeId.addEventHandler("oninput",this.div_cond_edt_lageCd_oninput,this);
            this.div_cond09.form.btnPopClick.addEventHandler("onclick",this.div_cond_btn_popClick01_onclick,this);
            this.div_cond10.form.edtCodeId.addEventHandler("onkeyup",this.div_cond_edt_lageCd_onkeyup,this);
            this.div_cond10.form.edtCodeId.addEventHandler("oninput",this.div_cond_edt_lageCd_oninput,this);
            this.div_cond10.form.btnPopClick.addEventHandler("onclick",this.div_cond_btn_popClick01_onclick,this);
            this.div_cond11.form.edtCodeId.addEventHandler("onkeyup",this.div_cond_edt_lageCd_onkeyup,this);
            this.div_cond11.form.edtCodeId.addEventHandler("oninput",this.div_cond_edt_lageCd_oninput,this);
            this.div_cond11.form.btnPopClick.addEventHandler("onclick",this.div_cond_btn_popClick01_onclick,this);
            this.div_cond13.form.edtCodeId.addEventHandler("onkeyup",this.div_cond_edt_lageCd_onkeyup,this);
            this.div_cond13.form.edtCodeId.addEventHandler("oninput",this.div_cond_edt_lageCd_oninput,this);
            this.div_cond13.form.btnPopClick.addEventHandler("onclick",this.div_cond_btn_popClick01_onclick,this);
            this.div_cond14.form.edtCodeId.addEventHandler("onkeyup",this.div_cond_edt_lageCd_onkeyup,this);
            this.div_cond14.form.edtCodeId.addEventHandler("oninput",this.div_cond_edt_lageCd_oninput,this);
            this.div_cond14.form.btnPopClick.addEventHandler("onclick",this.div_cond_btn_popClick01_onclick,this);
            this.div_cond15.form.edtCodeId.addEventHandler("onkeyup",this.div_cond_edt_lageCd_onkeyup,this);
            this.div_cond15.form.edtCodeId.addEventHandler("oninput",this.div_cond_edt_lageCd_oninput,this);
            this.div_cond15.form.btnPopClick.addEventHandler("onclick",this.div_cond_btn_popClick01_onclick,this);
            this.div_cond16.form.edtCodeId.addEventHandler("onkeyup",this.div_cond_edt_lageCd_onkeyup,this);
            this.div_cond16.form.edtCodeId.addEventHandler("oninput",this.div_cond_edt_lageCd_oninput,this);
            this.div_cond16.form.btnPopClick.addEventHandler("onclick",this.div_cond_btn_popClick01_onclick,this);
            this.div_cond17.form.edtCodeId.addEventHandler("onkeyup",this.div_cond_edt_lageCd_onkeyup,this);
            this.div_cond17.form.edtCodeId.addEventHandler("oninput",this.div_cond_edt_lageCd_oninput,this);
            this.div_cond17.form.btnPopClick.addEventHandler("onclick",this.div_cond_btn_popClick01_onclick,this);
            this.div_cond18.form.edtCodeId.addEventHandler("onkeyup",this.div_cond_edt_lageCd_onkeyup,this);
            this.div_cond18.form.edtCodeId.addEventHandler("oninput",this.div_cond_edt_lageCd_oninput,this);
            this.div_cond18.form.btnPopClick.addEventHandler("onclick",this.div_cond_btn_popClick01_onclick,this);
            this.div_cond19.form.edtCodeId.addEventHandler("onkeyup",this.div_cond_edt_lageCd_onkeyup,this);
            this.div_cond19.form.edtCodeId.addEventHandler("oninput",this.div_cond_edt_lageCd_oninput,this);
            this.div_cond19.form.btnPopClick.addEventHandler("onclick",this.div_cond_btn_popClick01_onclick,this);
            this.div_cond20.form.edtCodeId.addEventHandler("onkeyup",this.div_cond_edt_lageCd_onkeyup,this);
            this.div_cond20.form.edtCodeId.addEventHandler("oninput",this.div_cond_edt_lageCd_oninput,this);
            this.div_cond20.form.btnPopClick.addEventHandler("onclick",this.div_cond_btn_popClick01_onclick,this);
            this.div_cond21.form.edtCodeId.addEventHandler("onkeyup",this.div_cond_edt_lageCd_onkeyup,this);
            this.div_cond21.form.edtCodeId.addEventHandler("oninput",this.div_cond_edt_lageCd_oninput,this);
            this.div_cond21.form.btnPopClick.addEventHandler("onclick",this.div_cond_btn_popClick01_onclick,this);
            this.div_cond22.form.edtCodeId.addEventHandler("onkeyup",this.div_cond_edt_lageCd_onkeyup,this);
            this.div_cond22.form.edtCodeId.addEventHandler("oninput",this.div_cond_edt_lageCd_oninput,this);
            this.div_cond22.form.btnPopClick.addEventHandler("onclick",this.div_cond_btn_popClick01_onclick,this);
            this.div_cond23.form.edtCodeId.addEventHandler("onkeyup",this.div_cond_edt_lageCd_onkeyup,this);
            this.div_cond23.form.edtCodeId.addEventHandler("oninput",this.div_cond_edt_lageCd_oninput,this);
            this.div_cond23.form.btnPopClick.addEventHandler("onclick",this.div_cond_btn_popClick01_onclick,this);
            this.div_cond24.form.edtCodeId.addEventHandler("onkeyup",this.div_cond_edt_lageCd_onkeyup,this);
            this.div_cond24.form.edtCodeId.addEventHandler("oninput",this.div_cond_edt_lageCd_oninput,this);
            this.div_cond24.form.btnPopClick.addEventHandler("onclick",this.div_cond_btn_popClick01_onclick,this);
            this.ds_cond.addEventHandler("oncolumnchanged",this.ds_cond_oncolumnchanged,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsMaster.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
            this.dsMaster.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
            this.dsStoreMaster.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
        };
        this.loadIncludeScript("POP001MainParentsPopupM01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
