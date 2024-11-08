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
            this.set_titletext("단체활동내역조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsHwaldong", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"DANCHE_CD\" type=\"STRING\" size=\"10\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"GYEOLGWA_BOGO_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIGEUBJA_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GWANLI_DEPT_CD\" type=\"STRING\" size=\"8\"/><Column id=\"HWALDONG_SIJAK_DT\" type=\"DATE\" size=\"8\"/><Column id=\"HWALDONG_JONGRYO_DT\" type=\"DATE\" size=\"8\"/><Column id=\"HWALDONG_NAEYONG\" type=\"STRING\" size=\"4000\"/><Column id=\"GEONUI_SAHANG\" type=\"STRING\" size=\"4000\"/><Column id=\"SINCHEONG_DT\" type=\"DATE\" size=\"8\"/><Column id=\"HOEWON_CNT1\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HOEWON_CNT2\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HOEWON_CNT3\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HOEWON_CNT4\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHONGINWON\" type=\"STRING\" size=\"256\"/><Column id=\"CHEORI_SANGTAE_GBCD\" type=\"STRING\" size=\"8\"/><Column id=\"CHEORI_SANGTAE_GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"CEOMBU_FILE_NO\" type=\"STRING\" size=\"32\"/><Column id=\"BANRYEO_SAYU\" type=\"STRING\" size=\"4000\"/><Column id=\"BIGO\" type=\"STRING\" size=\"4000\"/><Column id=\"DANCHE_GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"DANCHE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DAEPYO_HAKBEON\" type=\"STRING\" size=\"256\"/><Column id=\"DAEPYO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DAEPYO_HAKGWA\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/><Column id=\"CEOMBU_FILE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_hwaldongInput", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"GWANLI_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GWANLI_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DANCHE_BUNRYU_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"CHEORI_SANGTAE_GBCD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YYYY\"/><Col id=\"GWANLI_DEPT_CD\"/><Col id=\"DANCHE_BUNRYU_GBCD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSiljeok", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"DANCHE_CD\" type=\"STRING\" size=\"10\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"GYEOLGWA_BOGO_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SILJEOK_SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SIJAK_DT\" type=\"DATE\" size=\"8\"/><Column id=\"JONGRYO_DT\" type=\"DATE\" size=\"8\"/><Column id=\"SIGAN_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GIGWAN_NM\" type=\"STRING\" size=\"250\"/><Column id=\"HWALDONG_JANGSO\" type=\"STRING\" size=\"400\"/><Column id=\"HWALDONG_NAEYEOK\" type=\"STRING\" size=\"4000\"/><Column id=\"CHAMYEO_INWON_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SAHOE_BONGSA_YN\" type=\"STRING\" size=\"1\"/><Column id=\"BIGO\" type=\"STRING\" size=\"4000\"/><Column id=\"CHEOMBU_FILE_NO\" type=\"STRING\" size=\"32\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/><Column id=\"CHEOMBU_FILE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_siljeokInput", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"DANCHE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GYEOLGWA_BOGO_CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YYYY\"/><Col id=\"DANCHE_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCheoriSangtae", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDancheBunryu", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input1", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATTFL_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDummy", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDept", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","10","10","1180","42",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01_02","4","9","60","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("학년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("SpinSearchYYYY","74","9","100","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_01","200","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("관리부서");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchDeptCd","291","9","125","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnDept","426","9","22","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_PopSrch");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchDeptNm","458","9","125","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_04","594","9","95","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("단체분류");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchDancheBunryu","699","9","143","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsDancheBunryu");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_enable("true");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01","876","9","71","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("처리상태");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchCheoriSangtae","957","9","134","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsCheoriSangtae");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_enable("true");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch","1110","8","60","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Crud");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01","20","0","1060","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00","64","0","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","20","31","1060","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00","174","0","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","281","0","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","416","0","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","448","0","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00_00","583","0","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00","689","0","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00_00_00","842","0","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00","947","0","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnHwaldongExcel","530","64","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnSiljeokExcel","1130","64","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Grid("grdHwaldong","10","97",null,null,"610","50",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsHwaldong");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"62\"/><Column size=\"60\"/><Column size=\"98\"/><Column size=\"73\"/><Column size=\"75\"/><Column size=\"110\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"처리상태\"/><Cell col=\"1\" text=\"단체구분\"/><Cell col=\"2\" text=\"단체명\"/><Cell col=\"3\" text=\"대표학생&#13;&#10;학번\"/><Cell col=\"4\" text=\"대표학생&#13;&#10;성명\"/><Cell col=\"5\" text=\"대표학생학과\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:CHEORI_SANGTAE_GBNM\" editmaxlength=\"256\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:DANCHE_GBNM\" editmaxlength=\"256\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:DANCHE_NM\" editmaxlength=\"256\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:DAEPYO_HAKBEON\" editmaxlength=\"256\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:DAEPYO_NM\" editmaxlength=\"256\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:DAEPYO_HAKGWA\" editmaxlength=\"256\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","10","72","135","22",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("단체활동내역목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stRowCnt","155","71","233","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","610","72","135","22",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("활동실적목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stRowCnt2","725","71","233","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","1135",null,"55","26",null,"10",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_Pop");
            this.addChild(obj.name, obj);

            obj = new Grid("grdSiljeok","610","97",null,null,"10","50",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsSiljeok");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"111\"/><Column size=\"120\"/><Column size=\"48\"/><Column size=\"107\"/><Column size=\"107\"/><Column size=\"40\"/><Column size=\"76\"/><Column size=\"132\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"실적&#13;&#10;순번\"/><Cell col=\"1\" text=\"시작&#13;&#10;일자\"/><Cell col=\"2\" text=\"종료&#13;&#10;일자\"/><Cell col=\"3\" text=\"활동&#13;&#10;시간\"/><Cell col=\"4\" text=\"활동&#13;&#10;장소\"/><Cell col=\"5\" text=\"활동&#13;&#10;내역\"/><Cell col=\"6\" text=\"참여&#13;&#10;인원\"/><Cell col=\"7\" text=\"사회봉사&#13;&#10;활동여부\"/><Cell col=\"8\" text=\"증빙&#13;&#10;서류\"/></Band><Band id=\"body\"><Cell displaytype=\"number\" edittype=\"none\" textAlign=\"center\" text=\"bind:SILJEOK_SEQ\" editmaxlength=\"22\"/><Cell col=\"1\" displaytype=\"date\" edittype=\"none\" textAlign=\"center\" text=\"bind:SIJAK_DT\" editmaxlength=\"8\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"none\" textAlign=\"center\" text=\"bind:JONGRYO_DT\" editmaxlength=\"8\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"none\" textAlign=\"center\" text=\"bind:SIGAN_CNT\" editmaxlength=\"22\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:HWALDONG_JANGSO\" editmaxlength=\"400\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:HWALDONG_NAEYEOK\" editmaxlength=\"4000\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"none\" textAlign=\"center\" text=\"bind:CHAMYEO_INWON_CNT\" editmaxlength=\"22\"/><Cell col=\"7\" displaytype=\"checkboxcontrol\" edittype=\"none\" textAlign=\"center\" text=\"bind:SAHOE_BONGSA_YN\" editmaxlength=\"1\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/><Cell col=\"8\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:CHEOMBU_FILE_NM\" editmaxlength=\"32\" expandshow=\"show\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","247","52","100","45",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("↑\r\n45\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","10","89","1180","8",null,null,null,null,null,null,this);
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
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1200,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.SpinSearchYYYY","value","ds_hwaldongInput","YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtSearchDeptCd","value","ds_hwaldongInput","GWANLI_DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.edtSearchDeptNm","value","ds_hwaldongInput","GWANLI_DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboSearchDancheBunryu","value","ds_hwaldongInput","DANCHE_BUNRYU_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.cboSearchCheoriSangtae","value","ds_hwaldongInput","CHEORI_SANGTAE_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsHwaldong");
            this._addPreloadList("data","","dsSiljeok");
            this._addPreloadList("data","","dsDummy");
        };
        
        // User Script
        this.registerScript("UD01_2110105_P01.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UD01_2110105_P01.xfdl(단체활동내역조회)
        * 작 성         일 명: jiback
        * 작 성         일 자: 2020/12/03
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

        	if( !this.gfn_isNull(this.getOwnerFrame().yyyy)){
        		this.ds_hwaldongInput.setColumn(0, "YYYY", this.getOwnerFrame().yyyy);
        	}

        	if( !this.gfn_isNull(this.getOwnerFrame().gwanliDeptCd)){
        		this.ds_hwaldongInput.setColumn(0, "GWANLI_DEPT_CD", this.getOwnerFrame().gwanliDeptCd);
        	}

        	if( !this.gfn_isNull(this.getOwnerFrame().gwanliDeptNm)){
        		this.ds_hwaldongInput.setColumn(0, "GWANLI_DEPT_NM", this.getOwnerFrame().gwanliDeptNm);
        	}

        	if( !this.gfn_isNull(this.getOwnerFrame().dancheBunryu)){
        		this.ds_hwaldongInput.setColumn(0, "DANCHE_BUNRYU_GBCD", this.getOwnerFrame().dancheBunryu);
        	}

        	if( !this.gfn_isNull(this.getOwnerFrame().cheoriSangtae)){
        		this.ds_hwaldongInput.setColumn(0, "CHEORI_SANGTAE_GBCD", this.getOwnerFrame().cheoriSangtae);
        	}

        	this.fn_HwaldongRet();
        };

        /**********************************************************************
                04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        this.fn_formInit = function()
        {
            var strDs    = "dsCheoriSangtae|dsDancheBunryu";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "80306|80302";                         // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
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

        };

        this.fn_PostformInit = function()
        {
            this.ds_hwaldongInput.setColumn(0,"DANCHE_BUNRYU_GBCD",this.getOwnerFrame().dancheBunryu);  //단체분류
        };

        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {

            this.gfn_clearSortAll(this.grdHwaldong);
        	this.gfn_clearSortAll(this.grdSiljeok);
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
                    case "HwaldongRet":
                            this.fn_PostHwaldongRet();
                        break;
        			case "SiljeokRet":
                            this.fn_PostSiljeokRet();
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
        		case "Dept" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					this.ds_hwaldongInput.set_enableevent(false);
        					this.ds_hwaldongInput.setColumn(this.ds_hwaldongInput.rowposition, "GWANLI_DEPT_CD", sRtn[0]);
        					this.ds_hwaldongInput.setColumn(this.ds_hwaldongInput.rowposition, "GWANLI_DEPT_NM", sRtn[1]);
        					this.ds_hwaldongInput.set_enableevent(true);
        				}
        			break;
        		default:
                    break;
        	}
         };

        /**********************************************************************
                05. 활동내역 조회 함수 선언(마스터 함수)
        ***********************************************************************/
        this.btnSearch_onclick = function(obj,e)
        {
        	this.fn_HwaldongRet();
        };
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreHwaldongRet = function()
        {
            // 조회조건 셋팅
        	this.dsHwaldong.clearData();
        	this.dsSiljeok.clearData();
            return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_HwaldongRet = function()
        {
            if(!this.fn_PreHwaldongRet())
            {
                return false;
            }
            var strSvc      = "HwaldongRet";
            var strUrl      = "/prj/UD/UD01/hwaldongRetrieve_2110105_P01.do";
            var strInDs     = "ds_hwaldongInput=ds_hwaldongInput";
            var strOutDs    = "dsHwaldong=dsHwaldong";
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
        this.fn_PostHwaldongRet = function()
        {
            this.gfn_getRowCount(this.stRowCnt,this.dsHwaldong);
        };

        /**********************************************************************
                05-1. 실적내역 조회 함수 선언(마스터 함수)
        ***********************************************************************/
        this.dsHwaldong_onrowposchanged = function(obj,e)
        {
        	this.fn_SiljeokRet();
        };

        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreSiljeokRet = function()
        {
            this.ds_siljeokInput.setColumn(0, "DANCHE_CD", this.dsHwaldong.getColumn(this.dsHwaldong.rowposition, "DANCHE_CD"));
        	this.ds_siljeokInput.setColumn(0, "YYYY", this.dsHwaldong.getColumn(this.dsHwaldong.rowposition, "YYYY"));
        	this.ds_siljeokInput.setColumn(0, "GYEOLGWA_BOGO_CNT", this.dsHwaldong.getColumn(this.dsHwaldong.rowposition, "GYEOLGWA_BOGO_CNT"));
            return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_SiljeokRet = function()
        {
            if(!this.fn_PreSiljeokRet())
            {
                return false;
            }
            var strSvc      = "SiljeokRet";
            var strUrl      = "/prj/UD/UD01/siljeokRetrieve_2110105_P01.do";
            var strInDs     = "ds_siljeokInput=ds_siljeokInput";
            var strOutDs    = "dsSiljeok=dsSiljeok";
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
        this.fn_PostSiljeokRet = function()
        {
            this.gfn_getRowCount(this.stRowCnt2,this.dsSiljeok);
        };

        /**********************************************************************
                06. ExcelDnwn 엑셀로 출력
        ***********************************************************************/
        // 활동내역 엑셀
        this.btnHwaldongExcel_onclick = function(obj,e)
        {
        	this.fn_HwaldongExcel();
        };

        this.fn_HwaldongExcel = function()
        {
            if(this.dsHwaldong.rowcount < 1)
            {
                this.gfn_alert("출력할 엑셀데이터가 없습니다.", "EXCEL 정보" ,"","information");
                return false;
            }
            var result = this.gfn_confirm( "Excel를 출력하시겠습니까?", "EXCEL 출력","","question" );
            if(result == 0)
            {
               return false;
            }
            this.gfn_excelExport(this.grdHwaldong, "단체 활동 내역 목록","단체 활동 내역 목록");
        };

        // 실적목록 엑셀
        this.btnSiljeokExcel_onclick = function(obj,e)
        {
        	this.fn_SiljeokExcel();
        };

        this.fn_SiljeokExcel = function()
        {
            if(this.dsSiljeok.rowcount < 1)
            {
                this.gfn_alert("출력할 엑셀데이터가 없습니다.", "EXCEL 정보" ,"","information");
                return false;
            }
            var result = this.gfn_confirm( "Excel를 출력하시겠습니까?", "EXCEL 출력","","question" );
            if(result == 0)
            {
               return false;
            }
            this.gfn_excelExport(this.grdSiljeok, "단체 활동 실적 목록","단체 활동 실적 목록");
        };

        /**********************************************************************
                07. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 소트정열
         */
        this.grdHwaldong_onheaddblclick = function(obj,e)
        {
            if(e.cell != this.grdHwaldong.getBindCellIndex("body","CHK"))
            {
                this.gfn_gridSort(obj,e);
            }
        };

        /**
         *      그리드멀티 소트정열
         */
        this.grdSiljeok_onheaddblclick = function(obj,e)
        {
            if(e.cell != this.grdSiljeok.getBindCellIndex("body","CHK"))
            {
                this.gfn_gridSort(obj,e);
            }
        };

        // 엔터키 누르면 조회
        this.divSearch_SpinSearchYYYY_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_hwaldongInput.setColumn(0,"YYYY",obj.value);
        		this.fn_HwaldongRet();
        	}
        };

        // 엔터키 누르면 조회
        this.divSearch_cboSearchDancheBunryu_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_hwaldongInput.setColumn(0,"DANCHE_BUNRYU_GBCD",obj.value);
        		this.fn_HwaldongRet();
        	}
        };

        // 엔터키 누르면 조회
        this.divSearch_cboSearchCheoriSangtae_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_hwaldongInput.setColumn(0,"CHEORI_SANGTAE_GBCD",obj.value);
        		this.fn_HwaldongRet();
        	}
        };

        /**********************************************************************
                08. 팝업
        ***********************************************************************/
        // 주관부서 팝업
        this.btnDept_onclick = function(obj,e)
        {
        	var deptCdNm = this.divSearch.form.edtSearchDeptNm.value;

        	this.fn_setCallDeptPopup(deptCdNm);
        };

        // 팝업 종료
        this.btnClose_onclick = function(obj,e)
        {
        	this.close("CLOSE");
        };

        this.ds_hwaldongInput_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "GWANLI_DEPT_NM") {
        	   if (this.gfn_isNull(e.newvalue)) {
        	       obj.setColumn(obj.rowposition, "GWANLI_DEPT_CD", "");
        	   } else {
        			if (e.oldvalue != e.newvalue)
        			{
        				this.fn_setCallDeptPopup(e.newvalue);
        			}
        	   }
        	}
        };


        this.fn_setCallDeptPopup = function(strSearchValue)
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
        		this.ds_hwaldongInput.setColumn(this.ds_hwaldongInput.rowposition, "GWANLI_DEPT_CD", this.dsDept.getColumn(0,"DEPT_CD"));
        		this.ds_hwaldongInput.setColumn(this.ds_hwaldongInput.rowposition, "GWANLI_DEPT_NM", this.dsDept.getColumn(0,"DEPT_NM"));
        	} else
        	{
        		var oArg = {deptCdNm:strSearchValue, jojikGbcd:'00', useYn:'1'};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";
        		this.gfn_openPopup( "Dept","com::COMM_P01.xfdl",oArg,sPopupCallBack,oOption);
        	}
        };

        this.grdSiljeok_onexpandup = function(obj,e)
        {
        	var sValue = "";

        	if(e.cell == obj.getBindCellIndex("body","CHEOMBU_FILE_NM"))
        	{
        		sValue = this.gfn_trim(this.dsSiljeok.getColumn(this.dsSiljeok.rowposition,"CHEOMBU_FILE_NO"));

        		this.fn_setCallAttFilePopup(obj.name, sValue);
        	}
        };


        this.fn_setCallAttFilePopup = function(strObj, strAttFileNo)
        {
        	if (!this.gfn_isNull(strAttFileNo))
        	{

        		var multFlg     = "S"; 	// 멀티처리 : 싱글처리/멀티처리 S:한로우처리/M:멀티로처리

        		this.ds_input1.setColumn(this.ds_input1.rowposition, "ATTFL_NO", strAttFileNo);

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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.SpinSearchYYYY.addEventHandler("onkeydown",this.divSearch_SpinSearchYYYY_onkeydown,this);
            this.divSearch.form.btnDept.addEventHandler("onclick",this.btnDept_onclick,this);
            this.divSearch.form.cboSearchDancheBunryu.addEventHandler("onkeydown",this.divSearch_cboSearchDancheBunryu_onkeydown,this);
            this.divSearch.form.cboSearchCheoriSangtae.addEventHandler("onkeydown",this.divSearch_cboSearchCheoriSangtae_onkeydown,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.btnHwaldongExcel.addEventHandler("onclick",this.btnHwaldongExcel_onclick,this);
            this.btnSiljeokExcel.addEventHandler("onclick",this.btnSiljeokExcel_onclick,this);
            this.grdHwaldong.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdHwaldong.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.grdSiljeok.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdSiljeok.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
            this.grdSiljeok.addEventHandler("onexpandup",this.grdSiljeok_onexpandup,this);
            this.dsHwaldong.addEventHandler("onrowposchanged",this.dsHwaldong_onrowposchanged,this);
            this.ds_hwaldongInput.addEventHandler("oncolumnchanged",this.ds_hwaldongInput_oncolumnchanged,this);
        };
        this.loadIncludeScript("UD01_2110105_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
