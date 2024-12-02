(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CSYSCD0200");
            this.set_titletext("부서코드관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,910);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMaster", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_GRP_FG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_TYP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UNIV_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ABBNM\" type=\"STRING\" size=\"256\"/><Column id=\"SHAF_FORMA_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DAN_FG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FR_DT\" type=\"DATE\" size=\"256\"/><Column id=\"ABLN_DT\" type=\"DATE\" size=\"256\"/><Column id=\"ABLN_EXPC_DT\" type=\"DATE\" size=\"256\"/><Column id=\"PRN_ORD\" type=\"STRING\" size=\"256\"/><Column id=\"CYBER_FORMA_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FL_DEPT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REMK\" type=\"STRING\" size=\"256\"/><Column id=\"CAMP_FG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FRST_INPUT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FRST_INPUT_DT\" type=\"DATE\" size=\"256\"/><Column id=\"FRST_INPUT_MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FRST_INPUT_IP\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_MODF_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_MODF_DT\" type=\"DATE\" size=\"256\"/><Column id=\"LAST_MODF_MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_MODF_IP\" type=\"STRING\" size=\"256\"/><Column id=\"BREU_FG\" type=\"STRING\" size=\"256\"/><Column id=\"FORMA_TYP\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ENG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ENG_ABB_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CHN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CHN_ABB_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"COLG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SUST_TEAM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CERT_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DAYTM_SUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"INFO_ANNC_PART\" type=\"STRING\" size=\"256\"/><Column id=\"SHAF_DEGR\" type=\"STRING\" size=\"256\"/><Column id=\"MASTER_DEGR\" type=\"STRING\" size=\"256\"/><Column id=\"PHD_DEGR\" type=\"STRING\" size=\"256\"/><Column id=\"MJ_CLSF\" type=\"STRING\" size=\"256\"/><Column id=\"CONN_MJ\" type=\"STRING\" size=\"256\"/><Column id=\"ACHV_PART\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PART\" type=\"STRING\" size=\"256\"/><Column id=\"GRDT_DEGR_IDCD_PRN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LSN_YR\" type=\"STRING\" size=\"256\"/><Column id=\"ACHV_SCRN_UNIV\" type=\"STRING\" size=\"256\"/><Column id=\"GRSC_CLSF\" type=\"STRING\" size=\"256\"/><Column id=\"SUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GW_DEPT_CONN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SPRF_GW_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_GW_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_SORT_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_CHANC_MISS_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSub", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"상태\" type=\"STRING\" size=\"256\"/><Column id=\"순번\" type=\"STRING\" size=\"256\"/><Column id=\"BF_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"AF_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REMK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CHK\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboBreuFg", this);
            obj._setContents("<ColumnInfo><Column id=\"BREU_FG\" type=\"STRING\" size=\"256\"/><Column id=\"BREU_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"BREU_FG\">Y</Col><Col id=\"BREU_NM\">기관</Col></Row><Row><Col id=\"BREU_FG\">N</Col><Col id=\"BREU_NM\">미기관</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboFormaTyp", this);
            obj._setContents("<ColumnInfo><Column id=\"FORMA_TYP\" type=\"STRING\" size=\"256\"/><Column id=\"FORMA_TYP_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"FORMA_TYP\">Y</Col><Col id=\"FORMA_TYP_NM\">조직</Col></Row><Row><Col id=\"FORMA_TYP\">N</Col><Col id=\"FORMA_TYP_NM\">미조직</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboDanFg", this);
            obj._setContents("<ColumnInfo><Column id=\"DAN_FG\" type=\"STRING\" size=\"256\"/><Column id=\"DAN_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DAN_FG\">Y</Col><Col id=\"DAN_NM\">주간</Col></Row><Row><Col id=\"DAN_FG\">N</Col><Col id=\"DAN_NM\">야간</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboSubChancMissCd", this);
            obj._setContents("<ColumnInfo><Column id=\"SUB_CHANC_MISS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_CHANC_MISS_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SUB_CHANC_MISS_CD\">E0001</Col><Col id=\"SUB_CHANC_MISS_NM\">확인</Col></Row><Row><Col id=\"SUB_CHANC_MISS_CD\">E0002</Col><Col id=\"SUB_CHANC_MISS_NM\">미확인</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboShafDegr", this);
            obj._setContents("<ColumnInfo><Column id=\"SHAF_DEGR\" type=\"STRING\" size=\"256\"/><Column id=\"SHAF_DEGR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SHAF_DEGR\">Y</Col><Col id=\"SHAF_DEGR_NM\">학사</Col></Row><Row><Col id=\"SHAF_DEGR\">N</Col><Col id=\"SHAF_DEGR_NM\">미학사</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboMasterDegr", this);
            obj._setContents("<ColumnInfo><Column id=\"MASTER_DEGR\" type=\"STRING\" size=\"256\"/><Column id=\"MASTER_DEGR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MASTER_DEGR\">Y</Col><Col id=\"MASTER_DEGR_NM\">석사</Col></Row><Row><Col id=\"MASTER_DEGR\">N</Col><Col id=\"MASTER_DEGR_NM\">미석사</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboPhdDegr", this);
            obj._setContents("<ColumnInfo><Column id=\"PHD_DEGR\" type=\"STRING\" size=\"256\"/><Column id=\"PHD_DEGR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"PHD_DEGR\">Y</Col><Col id=\"PHD_DEGR_NM\">박사</Col></Row><Row><Col id=\"PHD_DEGR\">N</Col><Col id=\"PHD_DEGR_NM\">미박사</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboMjClsf", this);
            obj._setContents("<ColumnInfo><Column id=\"MJ_CLSF\" type=\"STRING\" size=\"256\"/><Column id=\"MJ_CLSF__NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MJ_CLSF\">Y</Col><Col id=\"MJ_CLSF__NM\">전공</Col></Row><Row><Col id=\"MJ_CLSF\">N</Col><Col id=\"MJ_CLSF__NM\">미전공</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboAchvPart", this);
            obj._setContents("<ColumnInfo><Column id=\"ACHV_PART\" type=\"STRING\" size=\"256\"/><Column id=\"ACHV_PART_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ACHV_PART\">Y</Col><Col id=\"ACHV_PART_NM\">업적</Col></Row><Row><Col id=\"ACHV_PART\">N</Col><Col id=\"ACHV_PART_NM\">미업적</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboScrnUniv", this);
            obj._setContents("<ColumnInfo><Column id=\"ACHV_SCRN_UNIV\" type=\"STRING\" size=\"256\"/><Column id=\"ACHV_SCRN_UNIV_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ACHV_SCRN_UNIV\">Y</Col><Col id=\"ACHV_SCRN_UNIV_NM\">심사완료</Col></Row><Row><Col id=\"ACHV_SCRN_UNIV\">N</Col><Col id=\"ACHV_SCRN_UNIV_NM\">미심사</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboGrscClsf", this);
            obj._setContents("<ColumnInfo><Column id=\"GRSC_CLSF\" type=\"STRING\" size=\"256\"/><Column id=\"GRSC_CLSF_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"GRSC_CLSF\">Y</Col><Col id=\"GRSC_CLSF_NM\">진학</Col></Row><Row><Col id=\"GRSC_CLSF\">N</Col><Col id=\"GRSC_CLSF_NM\">미진학</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboInfoAnncPart", this);
            obj._setContents("<ColumnInfo><Column id=\"INFO_ANNC_PART\" type=\"STRING\" size=\"256\"/><Column id=\"INFO_ANNC_PART_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"INFO_ANNC_PART\">Y</Col><Col id=\"INFO_ANNC_PART_NM\">계열</Col></Row><Row><Col id=\"INFO_ANNC_PART\">N</Col><Col id=\"INFO_ANNC_PART_NM\">미계열</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_Dept_Title_01","13","15",null,"35","1420",null,null,null,null,null,this);
            obj.set_font("14pt/normal \"Arial\"");
            obj.set_taborder("1");
            obj.set_text("<b v=\'true\'>부서코드관리</b> ");
            obj.set_cssclass("stc_Dept_Title_01");
            obj.set_color("#000000");
            obj.set_usedecorate("true");
            obj.set_enableevent("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_01","10","69","77","45",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("<b v=\'true\'>부서명</b> ");
            obj.set_cssclass("stc_dept_01");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_05","10","113","77","45",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("<b v=\'true\'>기관구분</b> ");
            obj.set_cssclass("stc_dept_05");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_02","157","68","77","45",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("<b v=\'true\'>부서코드</b> ");
            obj.set_cssclass("stc_dept_02");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_06","155","113","77","45",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("<b v=\'true\'>최종조직여부</b> ");
            obj.set_cssclass("stc_dept_06");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_04","533","68","77","45",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("<b v=\'true\'>사용여부</b> ");
            obj.set_cssclass("stc_dept_04");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_07","330","117","77","45",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("<b v=\'true\'>학사조직여부</b> ");
            obj.set_cssclass("stc_dept_07");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_03","330","71","77","45",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("<b v=\'true\'>부서ID</b> ");
            obj.set_cssclass("stc_dept_03");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept_01","68","77","82","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("edt_dept_01");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept_02","242","78","82","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("edt_dept_02");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept_03","428","75","82","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("edt_dept_03");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_dept_01","600","75","80","32",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_dept_03","244","120","80","32",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_dept_02","68","123","80","32",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_dept_04","430","120","80","32",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","10","211","664","629",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_binddataset("dsMaster");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"412\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_NM\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treecheck=\"bind:CHK\" treelevel=\"bind:DEPT_SORT_SEQ\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_08","10","168","74","39",null,null,null,null,null,null,this);
            obj.set_font("15px/normal \"Malgun Gothic\"");
            obj.set_taborder("16");
            obj.set_text("<b v=\'true\'>부서목록</b> ");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_dept_02",null,"185","95","32","513",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("부서엑셀다운");
            obj.set_cssclass("btn_dept_02");
            this.addChild(obj.name, obj);

            obj = new Button("btn_dept_01","1456","78","99","35",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("⌕ 조회");
            obj.set_escapebutton("true");
            obj.set_background("#e1b01d");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_09","721","171","74","39",null,null,null,null,null,null,this);
            obj.set_font("15px/normal \"Malgun Gothic\"");
            obj.set_taborder("19");
            obj.set_text("<b v=\'true\'>부서정보</b> ");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_dept_03",null,"185","95","33","413",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("부서엑셀다운");
            obj.set_cssclass("btn_dept_03");
            this.addChild(obj.name, obj);

            obj = new Button("add_dept_list_btn",null,"185","57","34","353",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("⊕ 추가");
            obj.set_cssclass("add_dept_list_btn");
            obj.set_cursor("auto");
            this.addChild(obj.name, obj);

            obj = new Button("del_dept_list_btn",null,"185","53","32","296",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("⊝ 삭제");
            obj.set_cssclass("del_dept_list_btn");
            this.addChild(obj.name, obj);

            obj = new Button("save_dept_list_btn",null,"185","57","32","236",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("저장");
            obj.set_cssclass("save_dept_list_btn");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_10","1409","178","96","45",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("<b v=\'true\'>총건수 :  </b> ");
            obj.set_cssclass("stc_dept_10");
            obj.set_usedecorate("true");
            obj.set_font("15px/normal \"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_00",null,"219","836","29","83",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00",null,"248","836","28","83",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_11",null,"218","120","28","799",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("부서코드");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept_04",null,"221","173","22","623",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_enable("true");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_00_00",null,"276","836","28","83",null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_14",null,"246","120","28","799",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("기관구분");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13",null,"304","836","28","83",null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_17",null,"274","120","28","799",null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("부서명");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_01",null,"332","836","28","83",null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_02",null,"414","836","28","83",null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_03",null,"386","836","28","83",null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_04",null,"358","836","28","83",null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_20",null,"302","120","28","799",null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("부서영문명");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_23",null,"330","120","28","799",null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("부서중문명");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_26",null,"358","120","28","799",null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("생성일자");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_29",null,"386","120","28","799",null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("폐지일자");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_32",null,"414","120","28","799",null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("폐지예정일자");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept_06",null,"223","90","22","348",null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_12",null,"220","120","28","495",null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("상위부서");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_dept_07",null,"223","22","22","323",null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_cssclass("btn_WF_PopSrch");
            obj.set_text("");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_13",null,"219","120","29","197",null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept_05",null,"223","53","22","440",null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new CheckBox("che_dept_01","1447","218","40","30",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_15",null,"248","120","28","495",null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("조직유형");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_34",null,"414","120","28","246",null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_22",null,"302","120","28","197",null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("최종조직여부");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_19",null,"276","120","28","197",null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("가상조직여부");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_16",null,"248","120","28","197",null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("학사조직여부");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_33",null,"414","120","28","495",null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("부총장보직코드");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_30",null,"386","120","28","495",null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("학부(팀)");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_27",null,"360","120","28","495",null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("대학(처)");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_24",null,"332","120","28","495",null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("부서중문약어명");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_21",null,"304","120","28","495",null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("부서영문약어명");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_18",null,"276","120","28","495",null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("부서약어명");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_31",null,"386","120","28","197",null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("부서졍렬순번");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_28",null,"360","120","28","197",null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("주야구분");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_25",null,"332","120","28","197",null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("부서ID");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_dept_05",null,"251","173","22","623",null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_datacolumn("BREU_NM");
            obj.set_codecolumn("BREU_FG");
            obj.set_enable("true");
            obj.set_innerdataset("dsCboBreuFg");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_dept_06",null,"249","170","22","323",null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_datacolumn("FORMA_TYP_NM");
            obj.set_codecolumn("FORMA_TYP");
            obj.set_enable("true");
            obj.set_innerdataset("dsCboFormaTyp");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new CheckBox("che_dept_02","1447","246","40","30",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new CheckBox("che_dept_04","1447","301","40","30",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new CheckBox("che_dept_03","1447","274","40","30",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_dept_07",null,"361","100","22","93",null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_datacolumn("DAN_NM");
            obj.set_codecolumn("DAN_FG");
            obj.set_enable("true");
            obj.set_innerdataset("dsCboDanFg");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_dept_08",null,"418","120","22","373",null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_datacolumn("SUB_CHANC_MISS_NM");
            obj.set_codecolumn("SUB_CHANC_MISS_CD");
            obj.set_enable("true");
            obj.set_innerdataset("dsCboSubChancMissCd");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept_07",null,"279","173","22","623",null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_enable("true");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept_08",null,"280","170","22","323",null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept_12",null,"334","170","22","323",null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept_10",null,"307","170","22","323",null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept_11",null,"335","173","22","623",null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept_09",null,"306","173","22","623",null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept_13",null,"335","101","22","93",null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_enable("true");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept_14",null,"361","55","22","438",null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept_15",null,"361","90","22","345",null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept_16",null,"389","55","22","438",null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept_17",null,"389","89","22","345",null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_dept_09",null,"389","22","22","321",null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_cssclass("btn_WF_PopSrch");
            obj.set_text("");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_dept_08",null,"361","22","22","321",null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_cssclass("btn_WF_PopSrch");
            obj.set_text("");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_dept_18","1428","389","103","22",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_format("9,999");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_dept_01","827","361","100","22",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_dept_02","827","388","100","22",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_dept_03","827","416","100","22",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_35","720","452","194","39",null,null,null,null,null,null,this);
            obj.set_font("15px/normal \"Malgun Gothic\"");
            obj.set_taborder("86");
            obj.set_text("<b v=\'true\'>부서코드연계정보</b> ");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00",null,"576","836","28","83",null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_01",null,"549","836","28","83",null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_02",null,"521","835","28","83",null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_03",null,"604","837","28","81",null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_04",null,"632","836","28","81",null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_05",null,"493","835","28","83",null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_36",null,"491","120","28","799",null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_text("증명서부서명");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_48",null,"603","120","28","799",null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_text("업적심사대학");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_45",null,"575","120","28","799",null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_text("등록계열");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_41",null,"522","120","28","253",null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_text("박사학위");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_42",null,"547","120","28","799",null,null,null,null,null,this);
            obj.set_taborder("97");
            obj.set_text("전공분류");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_51",null,"631","156","28","763",null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_text("그룹웨어부서연계여부");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_39",null,"519","120","28","799",null,null,null,null,null,this);
            obj.set_taborder("99");
            obj.set_text("학사학위");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_38",null,"494","120","28","253",null,null,null,null,null,this);
            obj.set_taborder("100");
            obj.set_text("정보공시계열");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_37",null,"493","120","28","523",null,null,null,null,null,this);
            obj.set_taborder("101");
            obj.set_text("주간학과코드");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_44",null,"550","120","28","253",null,null,null,null,null,this);
            obj.set_taborder("102");
            obj.set_text("업적계열");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_40",null,"521","120","28","523",null,null,null,null,null,this);
            obj.set_taborder("103");
            obj.set_text("석사학위");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_46",null,"575","120","28","523",null,null,null,null,null,this);
            obj.set_taborder("104");
            obj.set_text("졸업학위증출력명");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_43",null,"549","120","28","523",null,null,null,null,null,this);
            obj.set_taborder("105");
            obj.set_text("연계전공");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_52",null,"632","172","28","471",null,null,null,null,null,this);
            obj.set_taborder("106");
            obj.set_text("교원그룹웨어부서코드");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_49",null,"604","120","28","523",null,null,null,null,null,this);
            obj.set_taborder("107");
            obj.set_text("대학원분류");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_50",null,"604","120","28","253",null,null,null,null,null,this);
            obj.set_taborder("108");
            obj.set_text("학부(과)");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_47",null,"576","120","28","253",null,null,null,null,null,this);
            obj.set_taborder("109");
            obj.set_text("수업년한");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_53",null,"632","176","28","197",null,null,null,null,null,this);
            obj.set_taborder("110");
            obj.set_text("직원그룹웨어부서코드");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept_20",null,"497","143","22","653",null,null,null,null,null,this);
            obj.set_taborder("111");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept_22",null,"497","95","22","378",null,null,null,null,null,this);
            obj.set_taborder("112");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept_21",null,"497","48","22","474",null,null,null,null,null,this);
            obj.set_taborder("113");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept_24",null,"553","95","22","378",null,null,null,null,null,this);
            obj.set_taborder("114");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept_23",null,"553","48","22","474",null,null,null,null,null,this);
            obj.set_taborder("115");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept_27",null,"579","86","22","163",null,null,null,null,null,this);
            obj.set_taborder("116");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept_26",null,"578","143","22","378",null,null,null,null,null,this);
            obj.set_taborder("117");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept_25",null,"578","73","22","723",null,null,null,null,null,this);
            obj.set_taborder("118");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept_29",null,"635","113","22","83",null,null,null,null,null,this);
            obj.set_taborder("119");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept_28",null,"635","93","22","376",null,null,null,null,null,this);
            obj.set_taborder("120");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJanghakNm09",null,"607","103","22","83",null,null,null,null,null,this);
            obj.set_taborder("121");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJanghakNm10",null,"607","66","22","187",null,null,null,null,null,this);
            obj.set_taborder("122");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("che_dept_05","880","629","40","30",null,null,null,null,null,null,this);
            obj.set_taborder("123");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("cboJeyakGbcd",null,"497","156","22","93",null,null,null,null,null,this);
            obj.set_taborder("124");
            obj.set_datacolumn("INFO_ANNC_PART_NM");
            obj.set_codecolumn("INFO_ANNC_PART");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsCboInfoAnncPart");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cboJeyakGbcd00",null,"525","143","22","653",null,null,null,null,null,this);
            obj.set_taborder("125");
            obj.set_datacolumn("SHAF_DEGR_NM");
            obj.set_codecolumn("SHAF_DEGR");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsCboShafDegr");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cboJeyakGbcd01",null,"524","156","22","93",null,null,null,null,null,this);
            obj.set_taborder("126");
            obj.set_datacolumn("PHD_DEGR_NM");
            obj.set_codecolumn("PHD_DEGR");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsCboPhdDegr");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cboJeyakGbcd02",null,"553","156","22","93",null,null,null,null,null,this);
            obj.set_taborder("127");
            obj.set_datacolumn("ACHV_PART_NM");
            obj.set_codecolumn("ACHV_PART");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsCboAchvPart");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cboJeyakGbcd00_00",null,"555","143","22","654",null,null,null,null,null,this);
            obj.set_taborder("128");
            obj.set_datacolumn("MJ_CLSF__NM");
            obj.set_codecolumn("MJ_CLSF");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsCboMjClsf");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cboJeyakGbcd00_00_00",null,"605","143","22","653",null,null,null,null,null,this);
            obj.set_taborder("129");
            obj.set_datacolumn("ACHV_SCRN_UNIV_NM");
            obj.set_codecolumn("ACHV_SCRN_UNIV");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsCboScrnUniv");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cboJeyakGbcd00_00_01",null,"525","143","22","379",null,null,null,null,null,this);
            obj.set_taborder("130");
            obj.set_datacolumn("MASTER_DEGR_NM");
            obj.set_codecolumn("MASTER_DEGR");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsCboMasterDegr");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cboJeyakGbcd00_00_02",null,"604","143","22","378",null,null,null,null,null,this);
            obj.set_taborder("131");
            obj.set_datacolumn("GRSC_CLSF_NM");
            obj.set_codecolumn("GRSC_CLSF");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsCboGrscClsf");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_54","726","677","194","39",null,null,null,null,null,null,this);
            obj.set_font("15px/normal \"Malgun Gothic\"");
            obj.set_taborder("132");
            obj.set_text("<b v=\'true\'>부서이력목록</b> ");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_55","880","677","365","39",null,null,null,null,null,null,this);
            obj.set_font("10px/normal \"Malgun Gothic\"");
            obj.set_taborder("133");
            obj.set_usedecorate("true");
            obj.set_text("* 부서가 통·폐합되거나 명칭 변경등으로 신규 부서를 등록한 경우 \r\n이력 관리를 위해 부서 이력 목록을 등록해주십시오.");
            this.addChild(obj.name, obj);

            obj = new Button("add_dept_hist_btn",null,"681","65","31","358",null,null,null,null,null,this);
            obj.set_taborder("134");
            obj.set_text("⊕ 추가");
            obj.set_cssclass("add_dept_hist_btn");
            obj.set_cursor("auto");
            this.addChild(obj.name, obj);

            obj = new Button("btn_dept_13",null,"681","65","31","155",null,null,null,null,null,this);
            obj.set_taborder("135");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_dept_04");
            obj.set_cursor("auto");
            this.addChild(obj.name, obj);

            obj = new Button("del_dept_hist_btn",null,"681","65","31","291",null,null,null,null,null,this);
            obj.set_taborder("136");
            obj.set_text("⊝ 삭제");
            obj.set_cssclass("del_dept_hist_btn");
            obj.set_cursor("auto");
            this.addChild(obj.name, obj);

            obj = new Button("save_dept_hist_btn",null,"681","65","31","223",null,null,null,null,null,this);
            obj.set_taborder("137");
            obj.set_text("저장");
            obj.set_cssclass("save_dept_hist_btn");
            obj.set_cursor("auto");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_10_00","1495","676","96","45",null,null,null,null,null,null,this);
            obj.set_taborder("138");
            obj.set_text("<b v=\'true\'>총건수 : </b> ");
            obj.set_cssclass("stc_dept_10");
            obj.set_usedecorate("true");
            obj.set_font("15px/normal \"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grdSub","724","726","835","106",null,null,null,null,null,null,this);
            obj.set_taborder("139");
            obj.set_binddataset("dsSub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"44\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"167\"/><Column size=\"172\"/><Column size=\"291\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"상태\"/><Cell col=\"2\" text=\"순번\"/><Cell col=\"3\" text=\"이전부서\"/><Cell col=\"4\" text=\"이후부서\"/><Cell col=\"5\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:상태\"/><Cell col=\"2\" expr=\"currow+1\"/><Cell col=\"3\" text=\"bind:BF_DEPT_CD\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"4\" text=\"bind:AF_DEPT_CD\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"5\" text=\"bind:REMK\" displaytype=\"text\" edittype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept_19","1375","417","154","21",null,null,null,null,null,null,this);
            obj.set_taborder("140");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,910,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_dept_04","value","dsMaster","DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_dept_06","value","dsMaster","UP_DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","btn_dept_07","enable","dsBindable","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","cbo_dept_05","value","dsMaster","BREU_FG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","cbo_dept_06","value","dsMaster","FORMA_TYP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","cbo_dept_07","value","dsMaster","DAN_FG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","cbo_dept_08","value","dsMaster","SUB_CHANC_MISS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edt_dept_07","value","dsMaster","DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edt_dept_08","value","dsMaster","DEPT_ABBNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edt_dept_12","value","dsMaster","DEPT_CHN_ABB_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","edt_dept_10","value","dsMaster","DEPT_ENG_ABB_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","edt_dept_11","value","dsMaster","DEPT_CHN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","edt_dept_09","value","dsMaster","DEPT_ENG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","edt_dept_13","value","dsMaster","DEPT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","edt_dept_14","value","dsMaster","JANGHAK_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","edt_dept_15","value","dsMaster","COLG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","edt_dept_16","value","dsMaster","JANGHAK_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","edt_dept_17","value","dsMaster","SUST_TEAM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","btn_dept_09","enable","dsBindable","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","btn_dept_08","enable","dsBindable","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","edt_dept_18","value","dsMaster","DEPT_SORT_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","cal_dept_01","value","dsMaster","FR_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","cal_dept_02","value","dsMaster","ABLN_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","cal_dept_03","value","dsMaster","ABLN_EXPC_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","edt_dept_20","value","dsMaster","CERT_DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","edt_dept_21","value","dsMaster","DAYTM_SUST_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","edt_dept_23","value","dsMaster","CONN_MJ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","edt_dept_27","value","dsMaster","LSN_YR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","edt_dept_26","value","dsMaster","GRDT_DEGR_IDCD_PRN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","edt_dept_25","value","dsMaster","REG_PART");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","edt_dept_29","value","dsMaster","EMP_GW_DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","edt_dept_28","value","dsMaster","SPRF_GW_DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","edtJanghakNm10","value","dsMaster","SUST_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","cboJeyakGbcd","value","dsMaster","INFO_ANNC_PART");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","cboJeyakGbcd00","value","dsMaster","SHAF_DEGR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","cboJeyakGbcd01","value","dsMaster","PHD_DEGR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","cboJeyakGbcd02","value","dsMaster","ACHV_PART");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","cboJeyakGbcd00_00","value","dsMaster","MJ_CLSF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","cboJeyakGbcd00_00_00","value","dsMaster","ACHV_SCRN_UNIV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","cboJeyakGbcd00_00_01","value","dsMaster","MASTER_DEGR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","cboJeyakGbcd00_00_02","value","dsMaster","GRSC_CLSF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","che_dept_01","value","dsMaster","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","che_dept_02","value","dsMaster","SHAF_FORMA_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","che_dept_03","value","dsMaster","CYBER_FORMA_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","che_dept_04","value","dsMaster","FL_DEPT_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","che_dept_05","value","dsMaster","GW_DEPT_CONN_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","edt_dept_19","value","dsMaster","REMK");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CSYSCD0200.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): SYS01ProgramM01.xfdl(프로그램관리)
        * 작 성			일 명: admin
        * 작 성	    	일 자: 2024/06/18
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
        this.lvchkColidDs   	= "FORM_PATH$FORM_ID$FORM_NM";         		// 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs 	= "경로$화면아이디$화면이름";
        /**********************************************************************
        	03. 폼 로드 및 닫을때(폼이 포커스 갈때)
        ***********************************************************************/
        /**
         * 기능 : 폼 로드 완료후 초기값 Setting
         */
        this.form_onload = function(obj,e)
        {
        	//폼에 공통으로 로드시 사용하는 함수.
        	//this.gfn_formOnload(obj.e);
        	//사용자 화면  초기화 함수
           	//this.fn_formInit();
        	this.fn_Ret();

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
        };

        /**
         *	기능 : 초기화 후처리
         */
        this.fn_PostformInit = function()
        {
        	this.ds_input.setColumn(0,"FORM_PATH", null);
        	this.ds_input.setColumn(0,"USER_YN",   null);
        	this.dvSearch.form.edUiId.setFocus();

        	//this.fn_Ret();
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
        				//this.fn_Ret();
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
         * 기능 : 조회 후 실행
         */
        this.fn_PostRet = function()
        {
        	this.dsMaster.set_enableevent(true);
        	//trace(this.dsMaster.saveXML());
        	this.gfn_getRowCount(this.stRowCnt,this.dsMaster);
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
        	var nRow = this.dsMaster.addRow();
        	//this.dsMaster.setColumn(nRow,"FORM_PATH","sys"); 		//업체코드
        	//this.dsMaster.setColumn(nRow,"CHK", 	'0'); 		    //삭제여부
        	//this.dsMaster.setColumn(nRow,"USER_YN", '1'); 		    //사용유무
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
        		this.gfn_alert("MSG00006","삭제 정보","","information"); 						// 삭제할 데이타가 없습니다.!
        		return false;
        	}

        	var result = this.gfn_confirm("MSG00007","삭제 처리","","question");              // 현재선택행을 삭제하시겠습니까?
        	if(result == 0)
        	{
        	   return false;
        	}

        	//다중삭제 용도
        	this.dsMaster.set_enableevent(false);
        	for(var i=this.dsMaster.rowcount-1;i>-1;i--)
        	{
        		if(this.dsMaster.getColumn(i,"CHK") == "1")
        		{
        			this.dsMaster.deleteRow(i);
        		}
        	}
        	this.dsMaster.set_enableevent(true);

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
        	var strUrl 		= "/prj/sys/DeleteProgramMasterList.do";
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
                this.gfn_alert("MSG00008","저장 정보","","information"); 	//변경된 이력이 없습니다.
                return false;
            }

        	// 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
        	var chkFocusFlg = true;
        	/*
        	var result 		= this.gfn_cmmnChkEssentialItem(this.dsMaster, this.lvchkColidDs, this.lvchkColNameDs, this.grdMaster, chkFocusFlg, this);

        	if (result[0] != "success")
        	{
        		this.gfn_alert(result[0]);
        		this.dsMaster.set_rowposition(result[1]); //데이터셋 변경
        		return false;
        	}

        	var result = this.gfn_confirm("MSG00009","저장 처리","","question");              // 저장 하시겠습니까?

        	if(result == 0)
        	{
        		return false;
        	}
        	return true;
        	*/
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
        	var strSvc 		= "Save";
        	var strUrl 		= "/prj/sys/SaveProgramMasterList.do";
        	var strInDs  	= "ds_input=ds_input:a ";
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
        	12. Get, Set Method
        ***********************************************************************/
        /**********************************************************************
        	13. 기타 Control Event
        ***********************************************************************/
        /*
         *	그리를 더블 클릭시 멀티소팅처리하는이벤트
         */
        this.grdMaster_onheaddblclick = function(obj,e)
        {
        	if(e.cell != this.grdMaster.getBindCellIndex("body","CHK") && e.cell != 1)
        	{
        		this.gfn_gridSort(obj,e);
        	}
        };
        /*
         *	그리헤더에 올체크어리하는 이벤트
         */
        this.grdMaster_onheadclick = function(obj,e)
        {
        	if(e.cell == this.grdMaster.getBindCellIndex("body","CHK"))
        	{
        		this.gfn_checkAll(obj, e,true);
        	}
        };

        /*
         * 조회조건을 콤보의 내영이 변경될때 바로 조회하는 이벤트

        this.dvSearch_cbPrefix_onitemchanged = function(obj:nexacro.Combo,e:nexacro.ItemChangeEventInfo)
        {
        	this.fn_Ret();
        };
         */

        /*
         * 조회조건을 Enter(엔터)를 첫을 바로 조회하는 이벤트

        this.dvSearch_edFormName_onkeyup = function(obj:nexacro.Edit,e:nexacro.KeyEventInfo)
        {
        	if(e.keycode == 13)
        	{
        		this.fn_Ret();
        	}
        };
         */
        /*
         * 조회조건을 콤보의 내영이 변경될때 바로 조회하는 이벤트

        this.dvSearch_cboUseYn_onitemchanged = function(obj:nexacro.Combo,e:nexacro.ItemChangeEventInfo)
        {
        	this.fn_Ret();
        };

         */
        /*
         * 조회조건을 Enter(엔터)를 첫을 바로 조회하는 이벤트

        this.dvSearch_edFormId_onkeyup = function(obj:nexacro.Edit,e:nexacro.KeyEventInfo)
        {
        	if(e.keycode == 13)
        	{
        		this.fn_Ret();
        	}
        };
         */
        /*
         * 조회조건을 Enter(엔터)를 첫을 바로 조회하는 이벤트

        this.dvSearch_edUiId_onkeyup = function(obj:nexacro.Edit,e:nexacro.KeyEventInfo)
        {
        	if(e.keycode == 13)							// Enter:13 코드
        	{
        		this.fn_Ret();
        	}
        };
         */

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)

        this.fn_beforeclose = function()
        {
            return this.gfn_isUpdate(this.dsMaster);
        };
         **/



        this.add_dept_list_btn_onclick = function(obj,e)
        {
        	this.dsMaster.addRow();
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_Ret = function()
        {
        // 	if(!this.fn_PreRet())
        // 	{
        // 		return false;
        // 	}
        	// this.dsMaster.set_enableevent(false);
        	var strSvc 		= "Ret";
        	var strUrl 		= "/prj/com/deptCdMngList.do";
        	var strInDs  	= "ds_input=ds_input";
        	var strOutDs 	= "dsMaster=dsMaster dsSub=dsSub";
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

        this.del_dept_list_btn_onclick = function(obj,e)
        {
        	if(!this.fn_PreDel())
        	{
        		return false;
        	}

        	var strSvc 		= "Del";
        	var strUrl 		= "/prj/com/deptCdMngDel.do";
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

        this.save_dept_list_btn_onclick = function(obj,e)
        {
        	if(!this.fn_PreSave())
        	{
        		return false;
        	}
        	var strSvc 		= "Save";
        	var strUrl 		= "/prj/com/deptCdMngSave.do";
        	var strInDs  	= "ds_input=ds_input:a ";
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

        this.add_dept_hist_btn_onclick = function(obj,e)
        {
        	this.dsSub.addRow();
        };

        this.del_dept_hist_btn_onclick = function(obj,e)
        {
        	if(!this.fn_dsSubDel())
        	{
        		return false;
        	}

        	var strSvc 		= "Del";
        	var strUrl 		= "/prj/com/deptHistDel.do";
        	var strInDs  	= "dsSub=dsSub:u";
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

        this.save_dept_hist_btn_onclick = function(obj,e)
        {
        	if(!this.fn_dsSubSave())
        	{
        		return false;
        	}
        	var strSvc 		= "Save";
        	var strUrl 		= "/prj/com/deptHistSave.do";
        	var strInDs  	= "ds_input=ds_input:a ";
        		strInDs    += "dsSub=dsSub:u";
        	var strOutDs 	= "dsSub=dsSub";
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

        this.fn_dsSubDel = function()
        {
        	//멀티삭제용도
        	if(this.dsSub.rowcount < 1 || this.dsSub.findRow("CHK",1) == -1)
        	{
        		this.gfn_alert("MSG00006","삭제 정보","","information"); 						// 삭제할 데이타가 없습니다.!
        		return false;
        	}

        	var result = this.gfn_confirm("MSG00007","삭제 처리","","question");              // 현재선택행을 삭제하시겠습니까?
        	if(result == 0)
        	{
        	   return false;
        	}

        	//다중삭제 용도
        	this.dsSub.set_enableevent(false);
        	for(var i=this.dsSub.rowcount-1;i>-1;i--)
        	{
        		if(this.dsSub.getColumn(i,"CHK") == "1")
        		{
        			this.dsSub.deleteRow(i);
        		}
        	}
        	this.dsSub.set_enableevent(true);

        	//개별삭제시
        	return true;
        }

        this.fn_dsSubSave = function()
        {
        	if(this.dsSub.rowcount > 0)
        	{
        		for(var i=0;i<this.dsSub.rowcount; i++)
        		{
        			if(this.dsSub.getColumn(i,"CHK") == "0")
        			{
        				continue;
        			}
        			this.dsSub.setColumn(i,"CHK","0");
        		}
        	}

        	if(!this.gfn_isUpdate(this.dsSub))
            {
                this.gfn_alert("MSG00008","저장 정보","","information"); 	//변경된 이력이 없습니다.
                return false;
            }

        	// 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
        	var chkFocusFlg = true;

        	return true;
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.stc_Dept_Title_01.addEventHandler("onclick",this.stc_09_00_onclick,this);
            this.stc_dept_05.addEventHandler("onclick",this.stc01_00_onclick,this);
            this.stc_dept_02.addEventHandler("onclick",this.stc01_01_onclick,this);
            this.stc_dept_06.addEventHandler("onclick",this.stc01_02_onclick,this);
            this.stc_dept_04.addEventHandler("onclick",this.stc_dept_04_onclick,this);
            this.stc_dept_07.addEventHandler("onclick",this.stc_dept_07_onclick,this);
            this.grdMaster.addEventHandler("oncellclick",this.dsMasterOnCellClick,this);
            this.stc_dept_08.addEventHandler("onclick",this.stc_dept_08_onclick,this);
            this.btn_dept_02.addEventHandler("onclick",this.divHakgwa_btnJeongong_onclick,this);
            this.btn_dept_01.addEventHandler("onclick",this.btn_dept_01_onclick,this);
            this.stc_dept_09.addEventHandler("onclick",this.stc_dept_08_onclick,this);
            this.btn_dept_03.addEventHandler("onclick",this.divHakgwa_btnJeongong_onclick,this);
            this.add_dept_list_btn.addEventHandler("onclick",this.add_dept_list_btn_onclick,this);
            this.del_dept_list_btn.addEventHandler("onclick",this.del_dept_list_btn_onclick,this);
            this.save_dept_list_btn.addEventHandler("onclick",this.save_dept_list_btn_onclick,this);
            this.stc_dept_10.addEventHandler("onclick",this.stc_dept_10_onclick,this);
            this.stc_13_00_00_00_00.addEventHandler("onclick",this.stc_13_00_00_00_00_onclick,this);
            this.stc_13_00.addEventHandler("onclick",this.stc_13_00_onclick,this);
            this.edt_dept_04.addEventHandler("onchanged",this.edt_dept_04_onchanged,this);
            this.stc_dept_14.addEventHandler("onclick",this.stc_12_onclick,this);
            this.stc_13_01.addEventHandler("onclick",this.stc_13_01_onclick,this);
            this.stc_dept_26.addEventHandler("onclick",this.stc_dept_26_onclick,this);
            this.stc_dept_29.addEventHandler("onclick",this.stc_12_04_onclick,this);
            this.edt_dept_06.addEventHandler("onchanged",this.edtJanghakNm_onchanged,this);
            this.btn_dept_07.addEventHandler("onclick",this.btnJanghak_onclick,this);
            this.che_dept_01.addEventHandler("onclick",this.CheckBox00_onclick,this);
            this.cbo_dept_06.addEventHandler("onitemchanged",this.cbo_dept_06_onitemchanged,this);
            this.che_dept_02.addEventHandler("onclick",this.CheckBox00_onclick,this);
            this.che_dept_04.addEventHandler("onclick",this.CheckBox00_onclick,this);
            this.che_dept_03.addEventHandler("onclick",this.CheckBox00_onclick,this);
            this.btn_dept_09.addEventHandler("onclick",this.btnJanghak_onclick,this);
            this.btn_dept_08.addEventHandler("onclick",this.btnJanghak_onclick,this);
            this.cal_dept_01.addEventHandler("onkeydown",this.fn_Enter,this);
            this.cal_dept_02.addEventHandler("onkeydown",this.fn_Enter,this);
            this.cal_dept_03.addEventHandler("onkeydown",this.fn_Enter,this);
            this.stc_dept_35.addEventHandler("onclick",this.stc_dept_08_onclick,this);
            this.stc_dept_52.addEventHandler("onclick",this.stc_dept_52_onclick,this);
            this.che_dept_05.addEventHandler("onclick",this.CheckBox00_onclick,this);
            this.cboJeyakGbcd.addEventHandler("onitemchanged",this.cboSilseup_onitemchanged,this);
            this.cboJeyakGbcd00.addEventHandler("onitemchanged",this.cboSilseup_onitemchanged,this);
            this.cboJeyakGbcd01.addEventHandler("onitemchanged",this.cboSilseup_onitemchanged,this);
            this.cboJeyakGbcd02.addEventHandler("onitemchanged",this.cboSilseup_onitemchanged,this);
            this.cboJeyakGbcd00_00.addEventHandler("onitemchanged",this.cboSilseup_onitemchanged,this);
            this.cboJeyakGbcd00_00_00.addEventHandler("onitemchanged",this.cboSilseup_onitemchanged,this);
            this.cboJeyakGbcd00_00_01.addEventHandler("onitemchanged",this.cboSilseup_onitemchanged,this);
            this.cboJeyakGbcd00_00_02.addEventHandler("onitemchanged",this.cboSilseup_onitemchanged,this);
            this.stc_dept_54.addEventHandler("onclick",this.stc_dept_08_onclick,this);
            this.stc_dept_55.addEventHandler("onclick",this.stc_dept_08_onclick,this);
            this.add_dept_hist_btn.addEventHandler("onclick",this.add_dept_hist_btn_onclick,this);
            this.del_dept_hist_btn.addEventHandler("onclick",this.del_dept_hist_btn_onclick,this);
            this.save_dept_hist_btn.addEventHandler("onclick",this.save_dept_hist_btn_onclick,this);
            this.edt_dept_19.addEventHandler("onchanged",this.Edit00_onchanged,this);
        };
        this.loadIncludeScript("CSYSCD0200.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
