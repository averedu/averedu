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
            this.set_titletext("메뉴관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMenuFg", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"SORT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ADDR\" type=\"STRING\" size=\"32\"/><Column id=\"CD_DC\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"32\"/><Column id=\"REF_2\" type=\"STRING\" size=\"32\"/><Column id=\"REF_3\" type=\"STRING\" size=\"32\"/><Column id=\"REF_4\" type=\"STRING\" size=\"32\"/><Column id=\"REF_5\" type=\"STRING\" size=\"32\"/><Column id=\"REF_6\" type=\"STRING\" size=\"32\"/><Column id=\"REF_7\" type=\"STRING\" size=\"32\"/><Column id=\"REF_8\" type=\"STRING\" size=\"32\"/><Column id=\"REF_9\" type=\"STRING\" size=\"32\"/><Column id=\"REF_10\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"REG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"REG_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"MOD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MOD_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"AUTO_PLUS\" type=\"BIGDECIMAL\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPrntYn", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"SORT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ADDR\" type=\"STRING\" size=\"32\"/><Column id=\"CD_DC\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"32\"/><Column id=\"REF_2\" type=\"STRING\" size=\"32\"/><Column id=\"REF_3\" type=\"STRING\" size=\"32\"/><Column id=\"REF_4\" type=\"STRING\" size=\"32\"/><Column id=\"REF_5\" type=\"STRING\" size=\"32\"/><Column id=\"REF_6\" type=\"STRING\" size=\"32\"/><Column id=\"REF_7\" type=\"STRING\" size=\"32\"/><Column id=\"REF_8\" type=\"STRING\" size=\"32\"/><Column id=\"REF_9\" type=\"STRING\" size=\"32\"/><Column id=\"REF_10\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"REG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"REG_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"MOD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MOD_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"AUTO_PLUS\" type=\"BIGDECIMAL\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"language\" type=\"STRING\" size=\"32\"/><Column id=\"classId\" type=\"STRING\" size=\"256\"/><Column id=\"classNm\" type=\"STRING\" size=\"256\"/><Column id=\"coYn\" type=\"STRING\" size=\"256\"/><Column id=\"coT\" type=\"STRING\" size=\"256\"/><Column id=\"coS\" type=\"STRING\" size=\"256\"/><Column id=\"coN\" type=\"STRING\" size=\"256\"/><Column id=\"coX\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"language\">en</Col><Col id=\"classId\"/><Col id=\"classNm\"/><Col id=\"coYn\"/><Col id=\"coT\"/><Col id=\"coS\"/><Col id=\"coN\"/><Col id=\"coX\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMenuCd01", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"SORT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ADDR\" type=\"STRING\" size=\"32\"/><Column id=\"CD_DC\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"32\"/><Column id=\"REF_2\" type=\"STRING\" size=\"32\"/><Column id=\"REF_3\" type=\"STRING\" size=\"32\"/><Column id=\"REF_4\" type=\"STRING\" size=\"32\"/><Column id=\"REF_5\" type=\"STRING\" size=\"32\"/><Column id=\"REF_6\" type=\"STRING\" size=\"32\"/><Column id=\"REF_7\" type=\"STRING\" size=\"32\"/><Column id=\"REF_8\" type=\"STRING\" size=\"32\"/><Column id=\"REF_9\" type=\"STRING\" size=\"32\"/><Column id=\"REF_10\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"REG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"REG_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"MOD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MOD_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"AUTO_PLUS\" type=\"BIGDECIMAL\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"LVL\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PARENT_MENU_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_TNM\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_ENG\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_CH\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_JP\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_ETC\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_DC\" type=\"STRING\" size=\"32\"/><Column id=\"PROG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"FORM_PATH\" type=\"STRING\" size=\"32\"/><Column id=\"FORM_ID\" type=\"STRING\" size=\"32\"/><Column id=\"FORM_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_LVL\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"MENU_DIV\" type=\"STRING\" size=\"32\"/><Column id=\"LINK_YN\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_SORT\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_CD_1\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_CD_2\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_CD_3\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_CD_4\" type=\"STRING\" size=\"32\"/><Column id=\"REG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"32\"/><Column id=\"MOD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMenuDeth", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"SORT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ADDR\" type=\"STRING\" size=\"32\"/><Column id=\"CD_DC\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"32\"/><Column id=\"REF_2\" type=\"STRING\" size=\"32\"/><Column id=\"REF_3\" type=\"STRING\" size=\"32\"/><Column id=\"REF_4\" type=\"STRING\" size=\"32\"/><Column id=\"REF_5\" type=\"STRING\" size=\"32\"/><Column id=\"REF_6\" type=\"STRING\" size=\"32\"/><Column id=\"REF_7\" type=\"STRING\" size=\"32\"/><Column id=\"REF_8\" type=\"STRING\" size=\"32\"/><Column id=\"REF_9\" type=\"STRING\" size=\"32\"/><Column id=\"REF_10\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"REG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"REG_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"MOD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MOD_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"AUTO_PLUS\" type=\"BIGDECIMAL\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMasterTemp", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"menuId\" type=\"STRING\" size=\"20\"/><Column id=\"pmenuId\" type=\"STRING\" size=\"20\"/><Column id=\"menuNm\" type=\"STRING\" size=\"50\"/><Column id=\"menuDc\" type=\"STRING\" size=\"500\"/><Column id=\"formPath\" type=\"STRING\" size=\"100\"/><Column id=\"formId\" type=\"STRING\" size=\"100\"/><Column id=\"menuLevel\" type=\"STRING\" size=\"1\"/><Column id=\"menuDiv\" type=\"STRING\" size=\"1\"/><Column id=\"linkYn\" type=\"STRING\" size=\"1\"/><Column id=\"menuOrdr\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"regId\" type=\"STRING\" size=\"35\"/><Column id=\"regDate\" type=\"DATE\" size=\"7\"/><Column id=\"modId\" type=\"STRING\" size=\"35\"/><Column id=\"modDate\" type=\"DATE\" size=\"7\"/><Column id=\"menuCd01\" type=\"STRING\" size=\"2\"/><Column id=\"menuCd02\" type=\"STRING\" size=\"2\"/><Column id=\"menuCd03\" type=\"STRING\" size=\"2\"/><Column id=\"menuCd04\" type=\"STRING\" size=\"2\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUiId", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"32\"/><Column id=\"progId\" type=\"STRING\" size=\"32\"/><Column id=\"formPath\" type=\"STRING\" size=\"32\"/><Column id=\"formId\" type=\"STRING\" size=\"32\"/><Column id=\"formNm\" type=\"STRING\" size=\"32\"/><Column id=\"userYn\" type=\"STRING\" size=\"32\"/><Column id=\"regId\" type=\"STRING\" size=\"32\"/><Column id=\"regDate\" type=\"STRING\" size=\"32\"/><Column id=\"modId\" type=\"STRING\" size=\"32\"/><Column id=\"modDate\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDummy", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"32\"/><Column id=\"progId\" type=\"STRING\" size=\"32\"/><Column id=\"formPath\" type=\"STRING\" size=\"32\"/><Column id=\"formId\" type=\"STRING\" size=\"32\"/><Column id=\"formNm\" type=\"STRING\" size=\"32\"/><Column id=\"userYn\" type=\"STRING\" size=\"32\"/><Column id=\"regId\" type=\"STRING\" size=\"32\"/><Column id=\"regDate\" type=\"STRING\" size=\"32\"/><Column id=\"modId\" type=\"STRING\" size=\"32\"/><Column id=\"modDate\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static18","461","65","358","28",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","1","36","325",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsMaster");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseexpandkey("true");
            obj.set_treeuseimage("false");
            obj.set_treeinitstatus("expand,all");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"251\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell edittype=\"tree\" text=\"bind:MENU_NM\" treelevel=\"bind:MENU_LVL\" treestartlevel=\"0\" displaytype=\"treeitemcontrol\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stRowCnt","235","6","83","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle","3","8","98","26",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("메뉴 리스트");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","1058","38",null,"28","5",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("staTitel01","333","38","123","28",null,null,null,null,null,null,this);
            obj.set_text("메뉴코드");
            obj.set_taborder("17");
            obj.set_background("");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","913","65",null,"28","5",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","455","92",null,"28","5",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("staTitel06","333","65","123","28",null,null,null,null,null,null,this);
            obj.set_text("프로그램 ID");
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","455","119",null,"28","5",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","455","146",null,"28","5",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","455","173",null,"28","5",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","455","200",null,"28","5",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","455","227",null,"28","5",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","455","254",null,"28","5",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("staTitel07","333","92","123","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("FORM ID(xfdl)");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("staTitel08","333","119","123","28",null,null,null,null,null,null,this);
            obj.set_text("메뉴명(한글)");
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("staTitel09","333","146","123","28",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("메뉴명(영어)");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("staTitel10","333","173","123","28",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("메뉴명(중국어)");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("staTitel11","333","200","123","28",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("메뉴명(일본여)");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("staTitel12","333","227","123","28",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("메뉴명(기타어)");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("staTitel13","333","254","123","28",null,null,null,null,null,null,this);
            obj.set_text("메뉴 Death");
            obj.getSetter("wordwrap").set("none");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","455","335",null,"28","5",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","455","362",null,"28","5",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","455","308",null,"28","5",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","455","281",null,"28","5",null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("staTitel14","333","281","123","28",null,null,null,null,null,null,this);
            obj.set_text("메뉴표시순서");
            obj.getSetter("wordwrap").set("none");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("staTitel15","333","308","123","28",null,null,null,null,null,null,this);
            obj.set_text("상위메뉴코드");
            obj.getSetter("wordwrap").set("none");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("staTitel19","333","335","123","28",null,null,null,null,null,null,this);
            obj.getSetter("wordwrap").set("none");
            obj.getSetter("position").set("absolute");
            obj.set_text("출력여부");
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("staTitel20","333","362","123","28",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("메뉴구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","455","389",null,"28","5",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("staTitel21","333","389","123","28",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("메뉴설명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("staTitel02","543","38","56","28",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("대분류");
            obj.set_border("1px solid #b2b2b2");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("staTitel03","712","38","56","28",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("중분류");
            obj.set_border("1px solid #b2b2b2");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("staTitel04","863","38","56","28",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("소분류");
            obj.set_border("1px solid #b2b2b2");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("staTitel05","1008","38","51","28",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("화면");
            obj.set_border("1px solid #b2b2b2");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtProgId","461","68","79","22",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnUiId","543","68","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_cssclass("btn_WF_PopSrch");
            this.addChild(obj.name, obj);

            obj = new Edit("edtFormNm","568","68","239","22",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFSA_LabelP16","818","65","96","28",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("FORM(PREFIX)");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtFormPath","923","68","136","22",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtFormId","461","95","597","22",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtMenuNm","461","122","597","22",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Edit("edtMenuNm01","461","149","597","22",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            this.addChild(obj.name, obj);

            obj = new Edit("edtMenuNm02","461","176","597","22",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            this.addChild(obj.name, obj);

            obj = new Edit("edtMenuNm03","461","203","597","22",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            this.addChild(obj.name, obj);

            obj = new Edit("edtMenuNm04","461","229","597","24",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            this.addChild(obj.name, obj);

            obj = new Combo("cboMenuLevel","461","257","146","22",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_enable("false");
            obj.set_innerdataset("dsMenuDeth");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            this.addChild(obj.name, obj);

            obj = new Combo("cboLinkYn","461","338","146","22",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_innerdataset("dsPrntYn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPmenuId","461","311","146","22",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cboMenuDiv","461","365","146","22",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_innerdataset("dsMenuFg");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtMenuDc","461","392","597","22",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskMenuOrdr","461","284","147","22",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","455","38","89","28",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Edit("edtMenuCode","461","41","77","22",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_enable("false");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","598","38","115","28",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Combo("cboMenuCd01","603","41","103","23",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_innerdataset("dsMenuCd01");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_type("filterlike");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Edit("edtMenuCd04","1063","41","71","22",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_textAlign("right");
            obj.set_maxlength("2");
            obj.set_inputtype("number");
            obj.set_cssclass("point");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","767","38","97","28",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Edit("edtMenuCd02","772","41","86","22",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_textAlign("right");
            obj.set_maxlength("2");
            obj.set_inputtype("number");
            obj.set_cssclass("point");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","918","38","91","28",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Edit("edtMenuCd03","923","41","80","22",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_textAlign("right");
            obj.set_maxlength("2");
            obj.set_inputtype("number");
            obj.set_cssclass("point");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle00","335","8","98","26",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("메뉴등록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("메뉴관리");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edtMenuCode","value","dsMaster","MENU_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","cboMenuCd01","value","dsMaster","MENU_CD_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edtMenuCd02","value","dsMaster","MENU_CD_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edtMenuCd03","value","dsMaster","MENU_CD_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edtMenuCd04","value","dsMaster","MENU_CD_4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edtProgId","value","dsMaster","PROG_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edtFormNm","value","dsMaster","FORM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edtFormPath","value","dsMaster","FORM_PATH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edtFormId","value","dsMaster","FORM_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edtMenuNm","value","dsMaster","MENU_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edtMenuNm01","value","dsMaster","MENU_ENG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","edtMenuNm02","value","dsMaster","MENU_CH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","edtMenuNm03","value","dsMaster","MENU_JP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","edtMenuNm04","value","dsMaster","MENU_ETC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","cboMenuLevel","value","dsMaster","MENU_LVL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","mskMenuOrdr","value","dsMaster","MENU_SORT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","edtPmenuId","value","dsMaster","PARENT_MENU_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","cboLinkYn","value","dsMaster","LINK_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","cboMenuDiv","value","dsMaster","MENU_DIV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","edtMenuDc","value","dsMaster","MENU_DC");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
            this._addPreloadList("data","","dsMasterTemp");
            this._addPreloadList("data","","dsUiId");
            this._addPreloadList("data","","dsDummy");
        };
        
        // User Script
        this.registerScript("SYS002MenuM01.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): COMM000002S.xfdl(메뉴관리)
        * 작 성			일 명: jiback
        * 작 성	    	일 자: 2018/09/04
        * 변 경     	일 자:
        * 변 경			자 명:
        * 변경 및 수정 로그 : 일자별로 변경자 및 변경사항을 간략히 기술
        */
        /**********************************************************************
        	01. 전처리 공통 함수 선언
        ***********************************************************************/
        /**********************************************************************
        	02. 폼 변수 정의
        ***********************************************************************/
        this.lvchkColidDs   = "MENU_ID$MENU_CD_1$MENU_CD_2$MENU_CD_3$MENU_CD_4$MENU_NM$MENU_SORT";         		// 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs = "메뉴코드$대분류$중분류$소분류$세부$메뉴명$메뉴표시순서";
        this.iFind			= 0;
        this.dsDummy1 		= new Dataset;
        this.strKeyValue	= "";
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

        /**
         * 기능 : 폼언 로드(닫기전 셋팅)  Setting
         */
        this.form_onclose = function(obj,e)
        {

        };

        /**********************************************************************
        	04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        this.fn_formInit = function()
        {
        	var strDs   = "dsMenuCd01|dsMenuDeth|dsPrntYn|dsMenuFg";	// 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
        	var strLgcd = "000004|000005|000006|000007";           		// 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
        	var strComb = "X|X|X|X";   									// 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
        	var strOptn = "";											// 조건문 " AND COMM_IT02 = '" + vip + "'|||";
        	var svcId 	= "Init";   									//콤보의 (A:기본명-네임바운드nmae ,B:코드에[01] 기본명-네임바운드name1)

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
        	this.fn_Ret();
        };

        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {
        	this.gfn_clearSortAll(this.grdMaster);
        	if(nErrorCode != 0)
        	{
        		this.dsMaster.set_enableevent(true);
        		this.gfn_alert(sErrorMsg);
        		return false;
        	}else
        	{
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

        /************************************************************************************************
        * 공통 버튼 호출 영역(공통버튼 사용에만사용)
        ************************************************************************************************/
        /*
         * _gfn_btnClick여기서 호출시 버튼을 클릭처릭(개인폼에 모든스크립터 복사함)
         */
        this.fn_cmmBtnClick = function(sBtn)
        {
        	switch(sBtn)
        	{
        		case "ret" :				//조회
        				this.fn_Ret();
        			break;
        		case "new" :				//신규
        				this.fn_New();
        			break;
        		case "del" :				//삭제
        				this.fn_Del();
        			break;
        		case "save" :				//저장
        				this.fn_Save();
        			break;
        		case "excel" :				//엑셀
        				this.fn_Excel();
        			break;
        		case "print" :				//출력
        				this.fn_Print();
        			break;
        		case "confirm" :			//확정
        				this.fn_Confirm();
        			break;
        		case "tmp1" :				//여분버튼1
        				this.fn_Tmp1();
        			break;
        		case "tmp2" :				//여분버튼2
        				this.fn_Tmp2();
        			break;
        		case "tmp3" :				//여분버튼3
        				this.fn_Tmp3();
        			break;

        		default :
        			break;
        	}
        };
        /**********************************************************************
        	05. 조회 함수 선언(마스터 함수)
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
        	this.dsMaster.set_enableevent(false);
        	var strSvc 		= "Ret";
        	var strUrl      = "/prj/sys/RetrieveMenuMasterList.do";
        	var strInDs  	= "ds_input=ds_input";
        	var strOutDs 	= "dsMaster=dsMaster";
        	var strArg 		= "";
        	var strCallBack = "fn_callBack";    									//공백일시 기본 fn_callBack
        	var strASync    = true;			   										//샏략이나 공백일시에는 ASync=true,싱크시는 false로

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
        	this.dsMaster.set_enableevent(true);
        	/*
        	var i=-1;
        	for(i=0; i< this.dsMaster.rowcount; i++)
        	{
        		if(this.dsMaster.getColumn(i,"LVL") !=  4)
        		{
        			continue;
        		}
        		var tRow = this.grdMaster.getTreeRow(i); // 펼칠row
        		this.grdMaster.setTreeStatus(tRow,false);
        	}
        	*/
        	this.dsMasterTemp.copyData(this.dsMaster);
        	//trace(this.dsMaster.saveXML());
        	//trace(dsErro.saveXML());
        };
        /**********************************************************************
        	06. 추가 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 추가 전 실행(기본체크사항)
         */
        this.fn_PreNew = function()
        {
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

        	var intCurRow 			= this.dsMaster.rowposition;                              	// 현재 포커스 항목 위치
            var intCurLvl 			= this.dsMaster.getColumn(intCurRow, "MENU_LVL");      		// 현재 포커스 항목 레벨
            var intNewRow 			= -1;                                                 		// 삽입될 항목 위치
            var intNewLvl 			= null;                                              		// 삽입될 항목 레벨
            var strCurMenuCode 		= "";                                    	   				// 현재 포커스 항목의 메뉴 코드

            if(intCurLvl == 4)
            {
        		var parentRowIndex 	= this.grdMaster.getTreeParentRow(this.dsMaster.rowposition);
        		intCurRow 			= parentRowIndex;
        		intCurLvl 			= this.dsMaster.getColumn(intCurRow, "MENU_LVL");
        		strCurMenuCode 		= this.dsMaster.getColumn(intCurRow, "MENU_ID");
            }else
            {
        		strCurMenuCode 		= this.dsMaster.getColumn(intCurRow, "MENU_ID");
            }

            this.grdMaster.set_enableredraw(false);
        	intNewRow =	this.dsMaster.findRowExpr("MENU_LVL <= " + intCurLvl, intCurRow + 1, this.dsMaster.rowcount);
            // 기존에 하위 레벨이 없다면 전체 데이터셋 종단 위치에 하위 레벨 항목 추가한다.
            if(intNewRow == -1)
            {
                intNewRow = this.dsMaster.rowcount;
            }

            intNewLvl = nexacro.toNumber(this.dsMaster.getColumn(intCurRow, "MENU_LVL")) + 1;

            // 현재 포커스가 04(프로그램) 인 경우 위에서 하위항목으로 추가 할 경우 최하위인 04(프로그램) 으로 세팅한다.
            if (intNewLvl == 5)
            {
                intNewLvl = 4;
            }

            var result;

        	if(this.gfn_isUpdateD(this.dsMaster) == true)
        	{
        		 result = this.gfn_confirm("MSG00010","확인 처리","","question");              // 변경이력있습니다. 이동하시겠습니까?

        		if(result == true)
        		{

        			this.gfn_reSetDs(this.dsMaster,this.dsMaster.rowposition);
        			this.dsMaster.insertRow(intNewRow);
        		}else
        		{
        			return false;
        		}
        	}else
        	{
        		this.dsMaster.insertRow(intNewRow);
        	}

        	var childRow 	= this.grdMaster.getTreeChildRow(intCurRow, 0, true);
        	var gridRow 	= this.grdMaster.getTreeRow(intCurRow);

        	if(this.grdMaster.isTreeCollapsedRow(childRow, true))
        	{
        		this.grdMaster.setTreeStatus(gridRow, true);
        	}

            this.dsMaster.setColumn(intNewRow, "MENU_LVL",intNewLvl.toString());
            this.dsMaster.setColumn(intNewRow, "PARENT_MENU_ID",  strCurMenuCode);
            this.dsMaster.setColumn(intNewRow, "LINK_YN",  '1');
            this.dsMaster.setColumn(intNewRow, "MENU_DIV", '0');

            if (intCurLvl == '0')
            {
                this.dsMaster.setColumn(intNewRow, "MENU_CD_1", '01');
                this.dsMaster.setColumn(intNewRow, "MENU_CD_2", '00');
                this.dsMaster.setColumn(intNewRow, "MENU_CD_3", '00');
                this.dsMaster.setColumn(intNewRow, "MENU_CD_4", '00');

            }else if (intCurLvl == '1')
            {
                this.dsMaster.setColumn(intNewRow, "MENU_CD_1", strCurMenuCode.substr(0,2));
                this.dsMaster.setColumn(intNewRow, "MENU_CD_2", '00');
                this.dsMaster.setColumn(intNewRow, "MENU_CD_3", '00');
                this.dsMaster.setColumn(intNewRow, "MENU_CD_4", '00');

            }else if (intCurLvl == '2')
            {

                this.dsMaster.setColumn(intNewRow, "MENU_CD_1", strCurMenuCode.substr(0,2));
                this.dsMaster.setColumn(intNewRow, "MENU_CD_2", strCurMenuCode.substr(2,2));
                this.dsMaster.setColumn(intNewRow, "MENU_CD_3", '00');
                this.dsMaster.setColumn(intNewRow, "MENU_CD_4", '00');

            }else if (intCurLvl == '3')
            {
                this.dsMaster.setColumn(intNewRow, "MENU_CD_1", strCurMenuCode.substr(0,2));
                this.dsMaster.setColumn(intNewRow, "MENU_CD_2", strCurMenuCode.substr(2,2));
                this.dsMaster.setColumn(intNewRow, "MENU_CD_3", strCurMenuCode.substr(4,2));
                this.dsMaster.setColumn(intNewRow, "MENU_CD_4", '00');
            }
        	this.grdMaster.set_enableredraw(true);

            this.dsMaster_onrowposchanged(this.dsMaster);
            this.dsMaster.set_rowposition(intNewRow);

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
        this.fn_PreDel= function()
        {

        	if(this.dsMaster.rowcount < 1)
        	{
        		this.gfn_alert("MSG00006","삭제 정보","","warning"); 	// 삭제할 데이타가 없습니다.!
        		return false;
        	}

        	if(!this.grdMaster.isTreeLeafRow(this.dsMaster.rowposition,true))
        	{
        		this.gfn_alert("MSG00011","삭제 정보","","warning"); 	// 하이메뉴가 있서 삭제 할수가 없습니다.!
        		return false;
        	}

        	var result = this.gfn_confirm("MSG00012","삭제 처리","","question");              // 메뉴삭제시 메뉴에 관련된 모든 권한도 삭제됩니다.\n현재선택행을 삭제하시겠습니까?
        	if(result == 0)
        	{
        	   return false;
        	}

        	this.dsMaster.deleteRow(this.dsMaster.rowposition);
        	//개별삭제시
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

        	var strSvc 		= "Del";
        	var strUrl      = "/prj/sys/DeleteMenuMasterList.do";
        	var strInDs  	= "dsMaster=dsMaster:u";
        	var strOutDs 	= "";
        	var strArg 		= "";
        	var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        	var strASync    = true;			   //샏략이나 공백일시에는 ASync=true,싱크시는 false로

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
        	08. 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave = function()
        {
        	var nRow = this.dsMasterTemp.findRow("MENU_ID",this.dsMaster.getColumn(this.dsMaster.rowposition,"MENU_ID"));

        	if(this.dsMaster.getRowType(this.dsMaster.rowposition)==2  &&  nRow > -1 )
        	{
        		this.alert("이미등록한 테이타 입니다.");
        		return false;
        	}

        	if(!this.gfn_isUpdate(this.dsMaster))
            {
        		this.gfn_alert("MSG00008","저장 정보","","information"); 	//변경된 이력이 없습니다.
                return false;
            }

        	if((this.gfn_trim(this.dsMaster.getColumn(this.dsMaster.rowposition,"MENU_CD_2"))).length != 2)
        	{
        		this.gfn_alert("MSG00013","저장 정보","중분류코드,2","information"); //중분류코드는 2자리입니다.
        		this.edtMenuCd02.setFocus();
        		return false;
        	}

        	if((this.gfn_trim(this.dsMaster.getColumn(this.dsMaster.rowposition,"MENU_CD_3"))).length != 2)
        	{
        		this.gfn_alert("MSG00013","저장 정보","소분류코드,2","information"); //소분류코드는 2자리입니다.
        		this.edtMenuCd03.setFocus();
        		return false;
        	}

        	if((this.gfn_trim(this.dsMaster.getColumn(this.dsMaster.rowposition,"MENU_CD_4"))).length != 2)
        	{
        		this.gfn_alert("MSG00013","저장 정보","상세코드,2","information"); //상세코드는 2자리입니다.
        		this.edtMenuCd04.setFocus();
        		return false;
        	}

        	// 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
        	var chkFocusFlg = false;
        	var result 		= this.gfn_cmmnChkEssentialItem(this.dsMaster, this.lvchkColidDs, this.lvchkColNameDs, "", chkFocusFlg, this);

        	if (result[0] != "success")
        	{
        		this.alert(result[0]);
        		this.dsMaster.set_rowposition(result[1]); //데이터셋 변경
        		return false;
        	}

        	var result = this.gfn_confirm("MSG00009","저장 처리","","question");              // 저장 하시겠습니까?
        	if(result == 0)
        	{
        	   return false;
        	}

        	return true;
        }

        /**
         * 기능 : 저장 실행
         */
        this.fn_Save = function()
        {
        	if(!this.fn_PreSave())
        	{
        		return false;
        	}

            //this.dsMaster.set_enableevent(false);

        	var strSvc 		= "Save";
        	var strUrl      = "/prj/sys/SaveMenuMasterList.do";
        	var strInDs  	= "ds_input=ds_input ";
        		strInDs    += "dsMaster=dsMaster:u";
        	var strOutDs 	= "dsMaster=dsMaster";
        	var strArg 		= "";
        	var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        	var strASync    = true;			   //샏략이나 공백일시에는 ASync=true,싱크시는 false로
        	this.gfn_Transaction(strSvc
        				   , strUrl
        				   , strInDs
        				   , strOutDs
        				   , strArg
        				   , strCallBack
        				   , strASync);
        };
        /**
         *	기능 : 저장시 후처리
         */
        this.fn_PostSave = function()
        {
           	this.dsMaster.set_enableevent(true);
        	var nRow = this.dsMaster.findRow("MENU_ID",this.strKeyValue);
        	this.dsMaster.set_rowposition(nRow);
        	//this.grdMaster.vscrollbar.set_pos(this.dsMaster.rowposition-10);
        };
        /**********************************************************************
        	09. 초기화
        ***********************************************************************/
        /**********************************************************************
        	10. 출력 함수 선언
        ***********************************************************************/
        /**********************************************************************
        	11. ExcelDnwn 엑셀로 출력
        ***********************************************************************/

        this.fn_Excel = function()
        {
        	if(this.dsMaster.rowcount < 1)
        	{
        		this.gfn_alert("MSG00004","EXCEL 정보","","information");
        		return false;
        	}

        	var result = this.gfn_confirm("MSG00005","EXCEL 출력","","question");
        	if(result == 0)
        	{
        	   return false;
        	}
            this.gfn_excelExport(this.grdMaster);
        };

        /**********************************************************************
        	13. Get, Set Method
        ***********************************************************************/
        /**********************************************************************
        	14. 기타 Control Event
        ***********************************************************************/
        this.dsMaster_onrowposchanged = function(obj,e)
        {
        	var intCurLvl = this.dsMaster.getColumn(this.dsMaster.rowposition, "MENU_LVL");    // 현재 포커스 항목 레벨

            if(intCurLvl == '0')
        	{
         		this.mskMenuOrdr.set_enable(false);
         		this.cboLinkYn.set_enable(false);
         		this.cboMenuDiv.set_enable(false);

            }else
            {
        		this.mskMenuOrdr.set_enable(true);
        		this.cboLinkYn.set_enable(true);
        		this.cboMenuDiv.set_enable(true);

            }

            this.edtMenuCode.set_enable(false);

            if(this.dsMaster.getRowType(this.dsMaster.rowposition) == 2)
            {
        		this.cboMenuCd01.set_enable(intCurLvl == '1');
        		this.edtMenuCd02.set_enable(intCurLvl == '2');
        		this.edtMenuCd03.set_enable(intCurLvl == '3');
        		this.edtMenuCd04.set_enable(intCurLvl == '4');
        	} else
        	{
        		this.cboMenuCd01.set_enable(false);
        		this.edtMenuCd02.set_enable(false);
        		this.edtMenuCd03.set_enable(false);
        		this.edtMenuCd04.set_enable(false);
        	}
        };

        this.dsMaster_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "MENU_CD_1"||e.columnid == "MENU_CD_2"|| e.columnid == "MENU_CD_3"||e.columnid == "MENU_CD_4")
        	{
                var strMenuCode = this.dsMaster.getColumn(e.row, "MENU_CD_1") + this.dsMaster.getColumn(e.row, "MENU_CD_2") +
                                  this.dsMaster.getColumn(e.row, "MENU_CD_3") + this.dsMaster.getColumn(e.row, "MENU_CD_4");

                this.dsMaster.setColumn(e.row,"MENU_ID", strMenuCode);
        	}
        };

        this.dsMaster_canrowposchange = function(obj,e)
        {
        	if(obj.getRowType(e.newrow) != 2)
        	{
        		var result;

        		if(obj.rowcount < 1)
        		{
        			return true;
        		}

        		if(this.gfn_isUpdateD(obj))
        		{
        			result = this.gfn_confirm("MSG00010","이동 처리","","question");

        		}else
        		{
        			return true;
        		}

        		if(result == true)
        		{
        			this.gfn_reSetDs(obj,e.oldrow);

        		}else
        		{
        			return false;
        		}
        	}
        };


        this.grdMaster_oncelldblclick = function(obj,e)
        {
        	if(e.clickitem == "treeitembutton")
        	{
        		return false;
        	}

        	var childRow = obj.getTreeChildRow(this.dsMaster.rowposition, 0, true);
            if (childRow  >= 0)
            {
        		 var gridRow = obj.getTreeRow(this.dsMaster.rowposition);

        		 if (obj.isTreeCollapsedRow(childRow, true))
        		 {
        			 obj.setTreeStatus(gridRow, true);

        		 }else
        		 {
        			 obj.setTreeStatus(gridRow, false);
        		 }
             }
        };



        this.btnUiId_onclick = function(obj,e)
        {
        	this.fn_setUiidP01();
        };

        /**
         * 기능 : 조회 전 실행
         */
        this.preUiIdP01 = function()
        {
        	// 조회조건 셋팅
        	return true;
        };


        this.fn_setUiidP01 = function()
        {
        	if(!this.preUiIdP01())
        	{
        		return false;
        	}

        	var lv_sFlag01 			= "Y";						// (필수)부모에서 파라미터를 넘길지의 여부 (Y:파라미터넘김 / N:넘기지 않음)
        	var lv_sFlag02			= "Y";						// (필수)팝업이 열렸을때 자동조회를 할 것인가 여부.(Y:자동조회 / N:수동조회)
        	var lv_sFlag03			= "S";						// 멀티처리 : 싱글처리/멀티처리 S:한로우처리/M:멀티로처리
        	var lv_sValue01 		= this.edtProgId.value;		// 부모에서 넘어가는 파라미터(프로그래ID)
        	var lv_sValue02 		= this.edtFormId.value;		// 부모에서 넘어가는 파라미터(폼ID)
        	var lv_sValue03 		= this.edtFormNm.value;		// 부모에서 넘어가는 파라미터(폼이름)
        	var lv_sValue04 		= this.edtFormPath.value;	// 부모에서 넘어가는 파라미터(폼경로)

        	var sPopId 			= "POP001ProgramMasterP01";
        	var sUrl 			= "pop::POP001ProgramMasterP01.xfdl";
        	var oArg 			= { pv_sOp01:lv_sFlag01      	// 조회조건 : 조회조건셋팅/조회조건에 미셋팅 Y:조회조건셋팅/조회조건자동셋팅않함.
        						  , pv_sOp02:lv_sFlag02       	// 자동조회 : 바로조회/미조회   Y:자동조회/N:자동조회않임
        						  , pv_sOp03:lv_sFlag03      	// 멀티처리 : 싱글처리/멀티처리 S:한로우처리/M:멀티로처리
        						  , pv_sVal01:lv_sValue01      	// 파라미터1
        						  , pv_sVal02:lv_sValue02       // 파라미터2
        						  , pv_sVal03:lv_sValue03       // 파라미터3
        						  , pv_sVal04:lv_sValue04};     // 파라미터4
        	var sPopupCallBack 	= "fn_callPopUpUiId";
        	var oOption			= {};
        	this.gfn_openPopup( sPopId
        					  , sUrl
        					  , oArg
        					  , sPopupCallBack
        					  , oOption);
        };

        this.fn_callPopUpUiId = function(sPopId,sPram)
        {
        	switch(sPopId)
        	{
        		case "POP001ProgramMasterP01" :
        			//대분류팝업조회
        			if(!this.gfn_isNull(sPram))
        			{
        				//일반
        				var sRtn = sPram.split(",");
        				if(sRtn[0] == "S")
        				{
        					var nRow = this.dsMaster.rowposition;
        					this.dsMaster.setColumn(nRow,"PROG_ID",		this.dsDummy.getColumn(0,"PROG_ID"));
        					this.dsMaster.setColumn(nRow,"FORM_PATH",	this.dsDummy.getColumn(0,"FORM_PATH"));
        					this.dsMaster.setColumn(nRow,"FORM_ID",		this.dsDummy.getColumn(0,"FORM_ID"));
        					this.dsMaster.setColumn(nRow,"FORM_NM",		this.dsDummy.getColumn(0,"FORM_NM"));
        					/*
        					this.div_cond.form.edt_lageCd.set_value(sRtn[1]);
        					this.div_cond.form.edt_lageNm.set_value(sRtn[2]);
        					*/
        					/*
        					trace("sRtn[1] ======> " + sRtn[1]);
        					trace("sRtn[2] ======> " + sRtn[2]);
        					*/
        					//Dataset
        					//this.dsDummy.loadXML(sRtn[3]);
        					this.dsUiId.copyData(this.dsDummy);
        					this.dsDummy.clearData();
        					//trace(this.dsDummy.saveXML());
        				} else if(sRtn[0] == "M")
        				{
        					this.dsDummy.loadXML(sRtn[1]);
        					//trace(this.dsDummy.saveXML());
        					this.dsUiId.copyData(this.dsDummy);
        					this.dsDummy.clearData();
        				} else if(sRtn[0] == "CLOSE")
        				{
        					this.dsUiId.clearData();

        				} else if(sRtn[0] == "EXIT")
        				{
        					this.dsUiId.clearData();
        				}
        			}
        			break;
        		default:
        			break;
        	}
        };

        /**
         * 데이타셋 팝업에서 카피한다(아래 copy:dsDummy데이타셋을 메인에 반듯이 만들어야함)
         */
        this.fn_dsChildCopydsDummy = function(ds)
        {
        	this.dsDummy.clearData();
        	this.dsDummy.copyData(ds);
        };


        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
            return this.gfn_isUpdate(this.dsMaster);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.grdMaster.addEventHandler("oncellclick",this.grdMenu_oncellclick,this);
            this.grdMaster.addEventHandler("oncelldblclick",this.grdMaster_oncelldblclick,this);
            this.btnUiId.addEventHandler("onclick",this.btnUiId_onclick,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsMaster.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
            this.dsMaster.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
            this.dsMasterTemp.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsMasterTemp.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
        };
        this.loadIncludeScript("SYS002MenuM01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
