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
            this.set_titletext("교과목명세서");
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
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"2\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DEPT_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MAJOR_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DAYNIGHT_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"DAYNIGHT_DIVCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_GRADE_CD\" type=\"STRING\" size=\"5\"/><Column id=\"COMP_GRADE_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"SUBJECT_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EDU_GOAL\" type=\"STRING\" size=\"2000\"/><Column id=\"EDU_CONT\" type=\"STRING\" size=\"2000\"/><Column id=\"EDU_INFO\" type=\"STRING\" size=\"2000\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/><Column id=\"LECTSCORE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"LECTTM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"COMP_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"NCS_USE_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"BEF_SUBJECT\" type=\"STRING\" size=\"2000\"/><Column id=\"AFT_SUBJECT\" type=\"STRING\" size=\"2000\"/><Column id=\"LMS_USE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"JOB_COMP_NM\" type=\"STRING\" size=\"2000\"/><Column id=\"SUBJECT_SUMMARY\" type=\"STRING\" size=\"2000\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"8\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"SUBJECT_CD\" type=\"STRING\" size=\"100\"/><Column id=\"SUBJECT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PROF_CD\" type=\"STRING\" size=\"10\"/><Column id=\"PROF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NCS_USE_DIVCD\" type=\"STRING\" size=\"10\"/><Column id=\"LMS_USE_YN\" type=\"STRING\" size=\"50\"/></ColumnInfo><Rows><Row><Col id=\"YYYY\"/><Col id=\"SEMESTER\"/><Col id=\"DEPT_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgi", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNCS", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLMS", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"8\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"MAJOR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DAYNIGHT_DIVCD\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_GRADE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT_CD\" type=\"STRING\" size=\"100\"/><Column id=\"DEGR_COMP_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YYYY\"/><Col id=\"SEMESTER\"/><Col id=\"DEPT_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGibonJeongbo", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"2\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DEPT_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MAJOR_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DAYNIGHT_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"COMP_GRADE_CD\" type=\"STRING\" size=\"5\"/><Column id=\"SUBJECT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"SUBJECT_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EDU_GOAL\" type=\"STRING\" size=\"2000\"/><Column id=\"EDU_CONT\" type=\"STRING\" size=\"2000\"/><Column id=\"EDU_INFO\" type=\"STRING\" size=\"2000\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/><Column id=\"LECTSCORE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"LECTTM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"COMP_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"NCS_USE_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"BEF_SUBJECT\" type=\"STRING\" size=\"2000\"/><Column id=\"AFT_SUBJECT\" type=\"STRING\" size=\"2000\"/><Column id=\"LMS_USE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"JOB_COMP_NM\" type=\"STRING\" size=\"2000\"/><Column id=\"SUBJECT_SUMMARY\" type=\"STRING\" size=\"2000\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHaknyeon", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJuya", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNCS_D", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLMS_D", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsIsu", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHaeksim", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"2\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"MAJOR_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DAYNIGHT_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"COMP_GRADE_CD\" type=\"STRING\" size=\"5\"/><Column id=\"SUBJECT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"CORE_COMP_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"NOTE\" type=\"STRING\" size=\"500\"/><Column id=\"CD_NM\" type=\"STRING\" size=\"100\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHawi", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"2\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"MAJOR_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DAYNIGHT_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"COMP_GRADE_CD\" type=\"STRING\" size=\"5\"/><Column id=\"SUBJECT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DEGR_COMP_SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DEGR_COMP_NM\" type=\"STRING\" size=\"2000\"/><Column id=\"NOTE\" type=\"STRING\" size=\"500\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJangbiDogu", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"2\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"MAJOR_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DAYNIGHT_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"COMP_GRADE_CD\" type=\"STRING\" size=\"5\"/><Column id=\"SUBJECT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"EQUIP_SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"NCS_EQUIP_YN\" type=\"STRING\" size=\"1\"/><Column id=\"EQUIP_NM\" type=\"STRING\" size=\"2000\"/><Column id=\"NCS_CD\" type=\"STRING\" size=\"18\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGyosu", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"2\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"MAJOR_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DAYNIGHT_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"COMP_GRADE_CD\" type=\"STRING\" size=\"5\"/><Column id=\"SUBJECT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"SUBITEM_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"SUBITEM_CD\" type=\"STRING\" size=\"5\"/><Column id=\"NOTE\" type=\"STRING\" size=\"500\"/><Column id=\"CD_NM\" type=\"STRING\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNCSCombo", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"2\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"MAJOR_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DAYNIGHT_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"COMP_GRADE_CD\" type=\"STRING\" size=\"5\"/><Column id=\"SUBJECT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"NCS_CD\" type=\"STRING\" size=\"18\"/><Column id=\"UP_NCS_CD\" type=\"STRING\" size=\"18\"/><Column id=\"NCS_CD_NM\" type=\"STRING\" size=\"4000\"/><Column id=\"CD_DIV\" type=\"STRING\" size=\"5\"/><Column id=\"NCS_DIVCD\" type=\"STRING\" size=\"20\"/><Column id=\"NCS_CDLV\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SORT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"NCS_YN\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCopy", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"2\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"MAJOR_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DAYNIGHT_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"COMP_GRADE_CD\" type=\"STRING\" size=\"5\"/><Column id=\"SUBJECT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"YYYY_COPY\" type=\"STRING\" size=\"4\"/><Column id=\"SEMESTER_COPY\" type=\"STRING\" size=\"2\"/><Column id=\"DEPT_CD_COPY\" type=\"STRING\" size=\"10\"/><Column id=\"MAJOR_CD_COPY\" type=\"STRING\" size=\"10\"/><Column id=\"DAYNIGHT_DIVCD_COPY\" type=\"STRING\" size=\"5\"/><Column id=\"COMP_GRADE_CD_COPY\" type=\"STRING\" size=\"5\"/><Column id=\"SUBJECT_CD_COPY\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsChechkBox", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"CHK_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CHK_NUM\">1</Col><Col id=\"CHK_NM\">이론강의</Col></Row><Row><Col id=\"CHK_NUM\">2</Col><Col id=\"CHK_NM\">실습</Col></Row><Row><Col id=\"CHK_NUM\">3</Col><Col id=\"CHK_NM\">발표</Col></Row><Row><Col id=\"CHK_NUM\">4</Col><Col id=\"CHK_NM\">토론</Col></Row><Row><Col id=\"CHK_NUM\">5</Col><Col id=\"CHK_NM\">팀프로젝트</Col></Row><Row><Col id=\"CHK_NUM\">6</Col><Col id=\"CHK_NM\">기타</Col></Row><Row><Col id=\"CHK_NUM\">7</Col><Col id=\"CHK_NM\">포토폴리오</Col></Row><Row><Col id=\"CHK_NUM\">8</Col><Col id=\"CHK_NM\">캡스톤디자인</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPyeongGa", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"2\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"MAJOR_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DAYNIGHT_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"COMP_GRADE_CD\" type=\"STRING\" size=\"5\"/><Column id=\"SUBJECT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"SUBITEM_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"SUBITEM_CD\" type=\"STRING\" size=\"5\"/><Column id=\"NOTE\" type=\"STRING\" size=\"500\"/><Column id=\"CD_NM\" type=\"STRING\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGyeyeolHakgwa", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBaseYyyyHakgi", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAuth", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SUBJ_POSS_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_authInput", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DEPT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input1", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SUBJECT_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SAWON_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"256\"/><Column id=\"SABEON\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGwamok", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSawon", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBindableTab", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"bEnable\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"bEnable\">false</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBindableComp", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"bEnable\" type=\"STRING\" size=\"256\"/><Column id=\"bReadonly\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"bEnable\">false</Col><Col id=\"bReadonly\">true</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGusungYoso", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"2\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"MAJOR_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DAYNIGHT_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"COMP_GRADE_CD\" type=\"STRING\" size=\"5\"/><Column id=\"SUBJECT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DEGR_COMP_SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"COMP_FACT_SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"COMP_FACT_NM\" type=\"STRING\" size=\"2000\"/><Column id=\"NOTE\" type=\"STRING\" size=\"500\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdMaster","0","104",null,null,"1271","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"87\"/><Column size=\"77\"/><Column size=\"178\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"checkbox\" text=\"학과\"/><Cell col=\"1\" text=\"주야구분\"/><Cell col=\"2\" text=\"과목명\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" textAlign=\"left\" text=\"bind:DEPT_CD_NM\" editmaxlength=\"256\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:DAYNIGHT_DIVCD_NM\" editmaxlength=\"256\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\" text=\"bind:SUBJECT_CD_NM\" editmaxlength=\"256\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divM","0","0",null,"69","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSearchGwamokCd","1052","9","200","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            this.divM.addChild(obj.name, obj);

            obj = new Edit("edtSearchGwamokNm","1294","9","200","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("5");
            obj.set_enable("true");
            this.divM.addChild(obj.name, obj);

            obj = new Combo("cboSearchNCSGubun","671","36","256","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("9");
            obj.set_innerdataset("dsNCS");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divM.addChild(obj.name, obj);

            obj = new Combo("cboSearchGyeYeolHakGwa","671","9","256","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("2");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_innerdataset("dsGyeyeolHakgwa");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divM.addChild(obj.name, obj);

            obj = new Combo("cboSearchLMSGubun","1052","36","200","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("10");
            obj.set_innerdataset("dsLMS");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divM.addChild(obj.name, obj);

            obj = new Button("btnSearchGwamokMaster","1262","9","22","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_PopSrch");
            this.divM.addChild(obj.name, obj);

            obj = new Static("stc_01","926","9","110","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("11");
            obj.set_text("과목명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divM.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01_00","959","36","80","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("12");
            obj.set_text("LMS구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divM.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01","578","36","80","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("13");
            obj.set_text("활용구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divM.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00","577","9","80","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("14");
            obj.set_text("계열/학과");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divM.addChild(obj.name, obj);

            obj = new Static("stc_01_00","7","9","80","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("15");
            obj.set_text("학년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divM.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","99","9","120","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("0");
            this.divM.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","252","9","80","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("16");
            obj.set_text("학기");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divM.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgi","341","9","124","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("1");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsHakgi");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divM.addChild(obj.name, obj);

            obj = new Edit("edtSearchName","341","36","200","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("8");
            obj.set_enable("true");
            this.divM.addChild(obj.name, obj);

            obj = new Button("btnSearchSabeon","309","36","22","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_PopSrch");
            obj.set_text("");
            this.divM.addChild(obj.name, obj);

            obj = new Edit("edtSearchSabeon","99","36","200","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("6");
            obj.set_readonly("true");
            this.divM.addChild(obj.name, obj);

            obj = new Static("stc_01_01","-23","36","110","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("17");
            obj.set_text("사번/성명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","67",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("18");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","90","0","10","67",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("19");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_02","26","31","1600","5",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("20");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 6pt/normal \"Arial\"");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","16","0","1620","9",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("21");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","20","58","1610","9",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("22");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","331","0","10","67",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("23");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01","541","-1","56","70",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("24");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","661","0","10","67",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("25");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00","927","-1","56","70",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("26");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01","1042","0","10","67",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("27");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_02","299","0","10","67",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("28");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00","1252","0","10","67",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("29");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00","1284","0","10","67",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("30");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divM.addChild(obj.name, obj);

            obj = new Static("stc_09_00","0","79",null,"22","1485",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("교과목명세서리스트");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stRowCnt","157","78",null,"24","1360",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("divD",null,"104","1242","69","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01","-14","11","88","22",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("10");
            obj.set_text("과목명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divD.addChild(obj.name, obj);

            obj = new Edit("edtSearchGwamokCd","86","9","186","22",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("0");
            obj.set_readonly("true");
            this.divD.addChild(obj.name, obj);

            obj = new Edit("edtSearchGwamokNm","314","9","180","22",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.divD.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","509","8","66","22",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("11");
            obj.set_text("학년");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divD.addChild(obj.name, obj);

            obj = new Combo("cboSearchHaknyeon","586","9","124","22",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsHaknyeon");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divD.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00","748","8","66","22",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("12");
            obj.set_text("주야구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divD.addChild(obj.name, obj);

            obj = new Combo("cboSearchJuya","827","9","124","22",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsJuya");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divD.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00_00","981","8","99","22",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("13");
            obj.set_text("활용구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divD.addChild(obj.name, obj);

            obj = new Combo("cboSearchNCS","1089","9","124","22",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsNCS_D");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_readonly("false");
            obj.set_enable("true");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divD.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01","8","36","66","22",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("14");
            obj.set_text("이수구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divD.addChild(obj.name, obj);

            obj = new Combo("cboSearchIsu","86","36","186","22",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsIsu");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divD.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01_00","375","36","66","22",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("15");
            obj.set_text("시수");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divD.addChild(obj.name, obj);

            obj = new Edit("edtSearchSisu","456","36","38","22",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("7");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_maxlength("5");
            this.divD.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01_00_00","509","36","66","22",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("16");
            obj.set_text("학점");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divD.addChild(obj.name, obj);

            obj = new Edit("edtSearchHakjeom","586","36","43","22",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("8");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_maxlength("5");
            this.divD.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00_01","722","38","92","22",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("17");
            obj.set_text("LMS활용구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divD.addChild(obj.name, obj);

            obj = new Combo("cboSearchLMS","827","36","124","22",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("9");
            obj.set_innerdataset("dsLMS_D");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_readonly("false");
            obj.set_enable("true");
            obj.set_displaynulltext("선택");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divD.addChild(obj.name, obj);

            obj = new Button("btnSearchGwamokDetail","282","9","22","22",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_PopSrch");
            obj.set_enableevent("true");
            obj.set_enable("true");
            this.divD.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","67",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("18");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divD.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","16","0","1620","9",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("19");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divD.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","20","58","1610","9",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("20");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divD.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_02","26","31","1600","5",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("21");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 6pt/normal \"Arial\"");
            this.divD.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","272","0","10","67",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("22");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divD.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00","304","0","10","67",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("23");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divD.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00","494","-1","56","70",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("24");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divD.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00","76","0","10","67",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("25");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divD.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_01","576","0","10","67",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("26");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divD.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_01_00","817","0","10","67",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("27");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divD.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00_00","710","3","56","30",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("28");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divD.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00_00_00","951","-1","56","70",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("29");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divD.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_01_00_00","1081","0","10","67",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("30");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divD.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00","1213","0","27","67",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("31");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divD.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00",null,"79","330","22","913",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("교과목명세 기본정보");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_39",null,"80","420","20","666",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("※NCS미활용 과목은 장비 및 도구 탭이 비활성화 됩니다.");
            obj.set_cssclass("sta_WF_Desc02");
            this.addChild(obj.name, obj);

            obj = new Tab("tab",null,"208","1242",null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_tabindex("0");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Tabpage("GibonJeongbo",this.tab);
            obj.set_text("기본정보");
            this.tab.addChild(obj.name, obj);

            obj = new Static("stc_13_06","10","36",null,"28","10",null,null,null,null,null,this.tab.GibonJeongbo.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.GibonJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_12_06","10","36","150","28",null,null,null,null,null,null,this.tab.GibonJeongbo.form);
            obj.set_taborder("9");
            obj.set_text("학년도");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.GibonJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00","526","36","150","28",null,null,null,null,null,null,this.tab.GibonJeongbo.form);
            obj.set_taborder("10");
            obj.set_text("학기");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.GibonJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00","10","413",null,"28","10",null,null,null,null,null,this.tab.GibonJeongbo.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.GibonJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01","10","413","150","28",null,null,null,null,null,null,this.tab.GibonJeongbo.form);
            obj.set_taborder("12");
            obj.set_text("선수교과목");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.GibonJeongbo.addChild(obj.name, obj);

            obj = new Edit("edtSeonsuGyogwamok","164","416",null,"22","15",null,null,null,null,null,this.tab.GibonJeongbo.form);
            obj.set_taborder("6");
            obj.set_enable("true");
            obj.set_maxlength("666");
            this.tab.GibonJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_00","10","64",null,"103","10",null,null,null,null,null,this.tab.GibonJeongbo.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.GibonJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_00","10","64","150","103",null,null,null,null,null,null,this.tab.GibonJeongbo.form);
            obj.set_taborder("14");
            obj.set_text("교과목개요");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.GibonJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00","875","36","150","28",null,null,null,null,null,null,this.tab.GibonJeongbo.form);
            obj.set_taborder("15");
            obj.set_text("학과");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.GibonJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_00_00","10","167",null,"123","10",null,null,null,null,null,this.tab.GibonJeongbo.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.GibonJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_00_00","10","167","150","123",null,null,null,null,null,null,this.tab.GibonJeongbo.form);
            obj.set_taborder("17");
            obj.set_text("교육목표");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.GibonJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_00_00_00","10","291",null,"123","10",null,null,null,null,null,this.tab.GibonJeongbo.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.GibonJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_00_00_01","10","290","150","123",null,null,null,null,null,null,this.tab.GibonJeongbo.form);
            obj.set_taborder("19");
            obj.set_text("교육내용");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.GibonJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00_00","10","441",null,"28","10",null,null,null,null,null,this.tab.GibonJeongbo.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.GibonJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_00","10","441","150","28",null,null,null,null,null,null,this.tab.GibonJeongbo.form);
            obj.set_taborder("21");
            obj.set_text("후수교과목");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.GibonJeongbo.addChild(obj.name, obj);

            obj = new Edit("edtHusuGyogwamok","164","444",null,"22","15",null,null,null,null,null,this.tab.GibonJeongbo.form);
            obj.set_taborder("7");
            obj.set_enable("true");
            obj.set_maxlength("666");
            this.tab.GibonJeongbo.addChild(obj.name, obj);

            obj = new Combo("cboHakgwa","1028","39",null,"22","15",null,null,null,null,null,this.tab.GibonJeongbo.form);
            obj.set_taborder("2");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsGyeyeolHakgwa");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.tab.GibonJeongbo.addChild(obj.name, obj);

            obj = new Combo("cboHakgi","678","39","192","22",null,null,null,null,null,null,this.tab.GibonJeongbo.form);
            obj.set_taborder("1");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsHakgi");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.tab.GibonJeongbo.addChild(obj.name, obj);

            obj = new TextArea("txtGyogwamokGaeyo","164","68",null,"94","15",null,null,null,null,null,this.tab.GibonJeongbo.form);
            obj.set_taborder("3");
            obj.set_maxlength("666");
            this.tab.GibonJeongbo.addChild(obj.name, obj);

            obj = new TextArea("txtGyoyukMokpyo","164","171",null,"114","15",null,null,null,null,null,this.tab.GibonJeongbo.form);
            obj.set_taborder("4");
            obj.set_maxlength("666");
            this.tab.GibonJeongbo.addChild(obj.name, obj);

            obj = new TextArea("txtGyoyukNaeyong","164","295",null,"114","15",null,null,null,null,null,this.tab.GibonJeongbo.form);
            obj.set_taborder("5");
            obj.set_maxlength("666");
            this.tab.GibonJeongbo.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","164","39","356","22",null,null,null,null,null,null,this.tab.GibonJeongbo.form);
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.tab.GibonJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","10","11","163","22",null,null,null,null,null,null,this.tab.GibonJeongbo.form);
            obj.set_taborder("22");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.GibonJeongbo.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","481","0","100","35",null,null,null,null,null,null,this.tab.GibonJeongbo.form);
            obj.set_taborder("23");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.GibonJeongbo.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","15","28","320","8",null,null,null,null,null,null,this.tab.GibonJeongbo.form);
            obj.set_taborder("24");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.GibonJeongbo.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","21","10","451",null,null,null,null,null,null,this.tab.GibonJeongbo.form);
            obj.set_taborder("25");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.GibonJeongbo.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,"21","10","447","0",null,null,null,null,null,this.tab.GibonJeongbo.form);
            obj.set_taborder("26");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.GibonJeongbo.addChild(obj.name, obj);

            obj = new Tabpage("YeokRyangMapping",this.tab);
            obj.set_text("역량 매핑");
            this.tab.addChild(obj.name, obj);

            obj = new Grid("grdHawiYeokryang","10","181","596",null,null,"10",null,null,null,null,this.tab.YeokRyangMapping.form);
            obj.set_taborder("4");
            obj.set_binddataset("dsHawi");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"285\"/><Column size=\"263\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"checkbox\" text=\"하위역량\" cssclass=\"point\"/><Cell col=\"2\" text=\"기타\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" editmaxlength=\"1\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:DEGR_COMP_NM\" editmaxlength=\"600\" tooltiptext=\"하위역량\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:NOTE\" editmaxlength=\"166\" tooltiptext=\"기타\"/></Band></Format></Formats>");
            this.tab.YeokRyangMapping.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_00","10","64",null,"73","10",null,null,null,null,null,this.tab.YeokRyangMapping.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.YeokRyangMapping.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_00","10","64","169","73",null,null,null,null,null,null,this.tab.YeokRyangMapping.form);
            obj.set_taborder("6");
            obj.set_text("직무역량");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.YeokRyangMapping.addChild(obj.name, obj);

            obj = new Static("stc_05_00_00_01_00","10","36",null,"28","10",null,null,null,null,null,this.tab.YeokRyangMapping.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.YeokRyangMapping.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00_01_00_00_00","10","36","169","28",null,null,null,null,null,null,this.tab.YeokRyangMapping.form);
            obj.set_taborder("8");
            obj.set_text("대학핵심역량");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.YeokRyangMapping.addChild(obj.name, obj);

            obj = new Button("btnNew",null,"148","59","25","765",null,null,null,null,null,this.tab.YeokRyangMapping.form);
            obj.set_taborder("2");
            obj.set_text("신규");
            obj.set_cssclass("btn_WF_Crud");
            this.tab.YeokRyangMapping.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"148","59","25","637",null,null,null,null,null,this.tab.YeokRyangMapping.form);
            obj.set_taborder("3");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            this.tab.YeokRyangMapping.addChild(obj.name, obj);

            obj = new Static("stc_09_00","10","156","163","22",null,null,null,null,null,null,this.tab.YeokRyangMapping.form);
            obj.set_taborder("9");
            obj.set_text("하위 역량");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.YeokRyangMapping.addChild(obj.name, obj);

            obj = new Static("stRowCnt","112","155","166","24",null,null,null,null,null,null,this.tab.YeokRyangMapping.form);
            obj.set_taborder("10");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.tab.YeokRyangMapping.addChild(obj.name, obj);

            obj = new TextArea("txtJikmuYeokryang","184","69",null,"64","15",null,null,null,null,null,this.tab.YeokRyangMapping.form);
            obj.set_taborder("1");
            obj.set_maxlength("600");
            obj.set_displaynulltext("직무역량");
            this.tab.YeokRyangMapping.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","10","11","163","22",null,null,null,null,null,null,this.tab.YeokRyangMapping.form);
            obj.set_taborder("11");
            obj.set_text("대학핵심 및 직무역량");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.YeokRyangMapping.addChild(obj.name, obj);

            obj = new Div("divHaeksimCheckbox","189","39",null,"28","15",null,null,null,null,null,this.tab.YeokRyangMapping.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.tab.YeokRyangMapping.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","15","28","320","8",null,null,null,null,null,null,this.tab.YeokRyangMapping.form);
            obj.set_taborder("12");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.YeokRyangMapping.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","481","0","100","35",null,null,null,null,null,null,this.tab.YeokRyangMapping.form);
            obj.set_taborder("13");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.YeokRyangMapping.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","605","136","50","45",null,null,null,null,null,null,this.tab.YeokRyangMapping.form);
            obj.set_taborder("14");
            obj.set_text("↑\r\n\r45\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.YeokRyangMapping.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_00","15","173","1200","8",null,null,null,null,null,null,this.tab.YeokRyangMapping.form);
            obj.set_taborder("15");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.YeokRyangMapping.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","21","10","451",null,null,null,null,null,null,this.tab.YeokRyangMapping.form);
            obj.set_taborder("16");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.YeokRyangMapping.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,"21","10","451","0",null,null,null,null,null,this.tab.YeokRyangMapping.form);
            obj.set_taborder("17");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.YeokRyangMapping.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_01","436",null,"210","10",null,"0",null,null,null,null,this.tab.YeokRyangMapping.form);
            obj.set_taborder("18");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.YeokRyangMapping.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01","606","214","30","100",null,null,null,null,null,null,this.tab.YeokRyangMapping.form);
            obj.set_taborder("19");
            obj.set_text("30");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.YeokRyangMapping.addChild(obj.name, obj);

            obj = new Grid("grdGusungYoso",null,"181","596",null,"10","10",null,null,null,null,this.tab.YeokRyangMapping.form);
            obj.set_taborder("20");
            obj.set_binddataset("dsGusungYoso");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"283\"/><Column size=\"265\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"checkbox\" text=\"구성요인\" cssclass=\"point\"/><Cell col=\"2\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" editmaxlength=\"1\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:COMP_FACT_NM\" editmaxlength=\"600\" tooltiptext=\"하위역량\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:NOTE\" editmaxlength=\"166\" tooltiptext=\"기타\"/></Band></Format></Formats>");
            this.tab.YeokRyangMapping.addChild(obj.name, obj);

            obj = new Button("btnNew2",null,"148","59","25","138",null,null,null,null,null,this.tab.YeokRyangMapping.form);
            obj.set_taborder("21");
            obj.set_text("신규");
            obj.set_cssclass("btn_WF_Crud");
            this.tab.YeokRyangMapping.addChild(obj.name, obj);

            obj = new Button("btnDel2",null,"148","59","25","10",null,null,null,null,null,this.tab.YeokRyangMapping.form);
            obj.set_taborder("22");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            this.tab.YeokRyangMapping.addChild(obj.name, obj);

            obj = new Button("btnSave2",null,"148","59","25","74",null,null,null,null,null,this.tab.YeokRyangMapping.form);
            obj.set_taborder("23");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            this.tab.YeokRyangMapping.addChild(obj.name, obj);

            obj = new Static("stc_09_00_01","636","156","163","22",null,null,null,null,null,null,this.tab.YeokRyangMapping.form);
            obj.set_taborder("24");
            obj.set_text("구성 요인");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.YeokRyangMapping.addChild(obj.name, obj);

            obj = new Static("stRowCnt2","732","155","166","24",null,null,null,null,null,null,this.tab.YeokRyangMapping.form);
            obj.set_taborder("25");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.tab.YeokRyangMapping.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"148","59","25","701",null,null,null,null,null,this.tab.YeokRyangMapping.form);
            obj.set_taborder("26");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            this.tab.YeokRyangMapping.addChild(obj.name, obj);

            obj = new Tabpage("JangbiDogu",this.tab);
            obj.set_text("장비 및 도구");
            this.tab.addChild(obj.name, obj);

            obj = new Grid("grdJangbiDogu","10","35",null,null,"10","10",null,null,null,null,this.tab.JangbiDogu.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsJangbiDogu");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"674\"/><Column size=\"98\"/><Column size=\"334\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"checkbox\" text=\"장비명\" cssclass=\"point\"/><Cell col=\"2\" text=\"NCS장비여부\"/><Cell col=\"3\" text=\"NCS코드\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" editmaxlength=\"1\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:EQUIP_NM\" editmaxlength=\"666\" tooltiptext=\"장비명\"/><Cell col=\"2\" displaytype=\"combocontrol\" edittype=\"combo\" textAlign=\"left\" text=\"bind:NCS_EQUIP_YN\" editmaxlength=\"1\" combodataset=\"dsLMS_D\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\" combodisplaynulltext=\"선택\" tooltiptext=\"NCS장비여부\"/><Cell col=\"3\" displaytype=\"combocontrol\" edittype=\"combo\" textAlign=\"left\" text=\"bind:NCS_CD\" editmaxlength=\"18\" combodataset=\"dsNCSCombo\" combodatacol=\"NCS_CD_NM\" combocodecol=\"NCS_CD\" combodisplaynulltext=\"선택\" tooltiptext=\"NCS코드\"/></Band></Format></Formats>");
            this.tab.JangbiDogu.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"3","60","25","10",null,null,null,null,null,this.tab.JangbiDogu.form);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            this.tab.JangbiDogu.addChild(obj.name, obj);

            obj = new Button("btnNew",null,"3","60","25","139",null,null,null,null,null,this.tab.JangbiDogu.form);
            obj.set_taborder("0");
            obj.set_text("신규");
            obj.set_cssclass("btn_WF_Crud");
            this.tab.JangbiDogu.addChild(obj.name, obj);

            obj = new Static("stc_09_00","10","11",null,"22","1114",null,null,null,null,null,this.tab.JangbiDogu.form);
            obj.set_taborder("3");
            obj.set_text("장비 및 도구");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.JangbiDogu.addChild(obj.name, obj);

            obj = new Static("stRowCnt","122","10","166","24",null,null,null,null,null,null,this.tab.JangbiDogu.form);
            obj.set_taborder("4");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.tab.JangbiDogu.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,"11","10","127","0",null,null,null,null,null,this.tab.JangbiDogu.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.JangbiDogu.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","481","0","100","35",null,null,null,null,null,null,this.tab.JangbiDogu.form);
            obj.set_taborder("6");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.JangbiDogu.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","16","28","1210","8",null,null,null,null,null,null,this.tab.JangbiDogu.form);
            obj.set_taborder("7");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.JangbiDogu.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","121","10","67",null,null,null,null,null,null,this.tab.JangbiDogu.form);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.JangbiDogu.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_01","436",null,"210","10",null,"0",null,null,null,null,this.tab.JangbiDogu.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.JangbiDogu.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"3","59","25","75",null,null,null,null,null,this.tab.JangbiDogu.form);
            obj.set_taborder("10");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            this.tab.JangbiDogu.addChild(obj.name, obj);

            obj = new Tabpage("GyosuHakseub",this.tab);
            obj.set_text("교수학습방법 및 평가방법");
            this.tab.addChild(obj.name, obj);

            obj = new Static("stc_05_00_00_01_00_02_00","10","120",null,"125","10",null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Static("stc_05_00_00_01_00_02","10","4",null,"97","10",null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Static("stc_05_00_00_01_00_00","19","63",null,"28","19",null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Static("stc_05_00_00_01_00","20","35",null,"28","20",null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00_01_00_00_00","20","35","140","28",null,null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("6");
            obj.set_text("교수학습방법");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00_01_00_00_00_00","20","63","140","28",null,null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("7");
            obj.set_text("기타내용");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Edit("edtGyosuGita","163","66",null,"22","22",null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("1");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_maxlength("166");
            obj.set_displaynulltext("기타내용");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Static("stc_05_00_00_01_00_00_00","20","207",null,"28","20",null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Static("stc_05_00_00_01_00_01","20","149",null,"58","20",null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00_01_00_00_00_01","20","149","140","58",null,null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("10");
            obj.set_text("평가방법");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00_01_00_00_00_00_00","20","207","140","28",null,null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("11");
            obj.set_text("기타내용");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Edit("edtPyeongGaGita","163","210",null,"22","22",null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("3");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_maxlength("166");
            obj.set_displaynulltext("기타내용");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Div("divGyosuCheckbox","168","35",null,"28","15",null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","20","10","163","22",null,null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("12");
            obj.set_text("교수학습방법");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00_00","20","124","163","22",null,null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("13");
            obj.set_text("평가방법");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Div("divPyeongGaCheckbox","168","150",null,"58","15",null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("2");
            obj.set_text("");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","16","27","320","8",null,null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("16");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","481","0","100","35",null,null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("17");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","484","100","100","20",null,null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("18");
            obj.set_text("↑\r\n20\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_00","18","141","320","8",null,null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("19");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_01","16","5","320","9",null,null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("20");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_01_00","16","91","320","9",null,null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("21");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_01_01","19","120","320","9",null,null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("22");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_01_01_00","19","235","320","9",null,null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("23");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00","10","28","10","67",null,null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("24");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00_00",null,"28","10","67","10",null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("25");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00_01","10","163","10","67",null,null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("26");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00_00_00",null,"153","10","67","10",null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("27");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00_02","0","8","10","247",null,null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("28");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00_02_00",null,"8","10","247","0",null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("29");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","1010","69","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("↑35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","1011","173","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01","369","143","30","100",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("30");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","96","320","8",null,null,null,null,null,null,this);
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

            obj = new Static("Static01_01_00_00_00_00","400","96","1230","8",null,null,null,null,null,null,this);
            obj.set_taborder("12");
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
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("교과목명세서");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","divM.form.edtSearchGwamokCd","value","ds_input","SUBJECT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divM.form.edtSearchGwamokNm","value","ds_input","SUBJECT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divD.form.edtSearchGwamokCd","value","dsGibonJeongbo","SUBJECT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divD.form.edtSearchGwamokNm","value","dsGibonJeongbo","SUBJECT_CD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divD.form.cboSearchHaknyeon","value","dsGibonJeongbo","COMP_GRADE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divD.form.cboSearchJuya","value","dsGibonJeongbo","DAYNIGHT_DIVCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divD.form.cboSearchNCS","value","dsGibonJeongbo","NCS_USE_DIVCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divD.form.cboSearchIsu","value","dsGibonJeongbo","COMP_DIVCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divD.form.edtSearchSisu","value","dsGibonJeongbo","LECTTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divD.form.edtSearchHakjeom","value","dsGibonJeongbo","LECTSCORE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divD.form.cboSearchLMS","value","dsGibonJeongbo","LMS_USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","tab.GibonJeongbo.form.edtSeonsuGyogwamok","value","dsGibonJeongbo","BEF_SUBJECT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","tab.GibonJeongbo.form.edtHusuGyogwamok","value","dsGibonJeongbo","AFT_SUBJECT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","tab.JangbiDogu.form.chk1Haknyeon00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","tab.JangbiDogu.form.chk1Haknyeon00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","tab.JangbiDogu.form.chk1Haknyeon00_00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","tab.JangbiDogu.form.chk1Haknyeon00_00_00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","tab.JangbiDogu.form.chk1Haknyeon00_00_00_00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","tab.JangbiDogu.form.chk1Haknyeon00_00_00_00_00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","tab.JangbiDogu.form.chk1Haknyeon00_00_00_00_00_00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item62","tab.JangbiDogu.form.chk1Haknyeon01","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item64","tab.JangbiDogu.form.chk2Haknyeon00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item65","tab.JangbiDogu.form.chk2Haknyeon00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item66","tab.JangbiDogu.form.chk2Haknyeon00_00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item67","tab.JangbiDogu.form.chk2Haknyeon00_00_00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item68","tab.JangbiDogu.form.chk2Haknyeon00_00_00_00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item69","tab.JangbiDogu.form.chk2Haknyeon00_00_00_00_00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item70","tab.JangbiDogu.form.chk2Haknyeon01","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item71","tab.JangbiDogu.form.chk2Haknyeon00_01","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item72","tab.JangbiDogu.form.chk2Haknyeon00_00_01","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item73","tab.JangbiDogu.form.chk2Haknyeon00_00_00_01","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item74","tab.JangbiDogu.form.chk2Haknyeon00_00_00_00_01","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item75","tab.JangbiDogu.form.chk2Haknyeon00_00_00_00_00_01","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item76","tab.JangbiDogu.form.chk2Haknyeon00_00_00_00_00_00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item77","tab.JangbiDogu.form.chk2Haknyeon02","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item78","tab.JangbiDogu.form.chk2Haknyeon00_02","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item79","tab.JangbiDogu.form.chk2Haknyeon00_00_02","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item80","tab.JangbiDogu.form.chk2Haknyeon00_00_00_00_02","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item88","tab.JangbiDogu.form.edtSearchBigyogwaProgramNm00","value","ds_input","BIGYOGWA_PROGRAM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item89","tab.JangbiDogu.form.edtSearchBigyogwaProgramNm01","value","ds_input","BIGYOGWA_PROGRAM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","tab.GyosuHakseub.form.chk1Haknyeon00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","tab.GyosuHakseub.form.chk1Haknyeon00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","tab.GyosuHakseub.form.chk1Haknyeon00_00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","tab.GyosuHakseub.form.chk1Haknyeon00_00_00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","tab.GyosuHakseub.form.chk1Haknyeon00_00_00_00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","tab.GyosuHakseub.form.chk1Haknyeon00_00_00_00_00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","tab.GyosuHakseub.form.chk1Haknyeon00_00_00_00_00_00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","tab.GyosuHakseub.form.chk1Haknyeon01","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","tab.GyosuHakseub.form.chk2Haknyeon00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","tab.GyosuHakseub.form.chk2Haknyeon00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","tab.GyosuHakseub.form.chk2Haknyeon00_00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","tab.GyosuHakseub.form.chk2Haknyeon00_00_00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","tab.GyosuHakseub.form.chk2Haknyeon00_00_00_00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","tab.GyosuHakseub.form.chk2Haknyeon00_00_00_00_00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","tab.GyosuHakseub.form.chk2Haknyeon01","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","tab.GyosuHakseub.form.chk2Haknyeon00_01","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","tab.GyosuHakseub.form.chk2Haknyeon00_00_01","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","tab.GyosuHakseub.form.chk2Haknyeon00_00_00_01","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","tab.GyosuHakseub.form.chk2Haknyeon00_00_00_00_01","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","tab.GyosuHakseub.form.chk2Haknyeon00_00_00_00_00_01","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","tab.GyosuHakseub.form.chk2Haknyeon00_00_00_00_00_00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","tab.GyosuHakseub.form.chk2Haknyeon02","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","tab.GyosuHakseub.form.chk2Haknyeon00_02","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","tab.GyosuHakseub.form.chk2Haknyeon00_00_02","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","tab.GyosuHakseub.form.chk2Haknyeon00_00_00_00_02","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item87","tab.GyosuHakseub.form.edtSearchBigyogwaProgramNm00","value","ds_input","BIGYOGWA_PROGRAM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item90","tab.GyosuHakseub.form.edtSearchBigyogwaProgramNm01","value","ds_input","BIGYOGWA_PROGRAM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divM.form.cboSearchNCSGubun","value","ds_input","NCS_USE_DIVCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divM.form.cboSearchGyeYeolHakGwa","value","ds_input","DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divM.form.cboSearchLMSGubun","value","ds_input","LMS_USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divM.form.spnSearchYYYY","value","ds_input","YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divM.form.cboSearchHakgi","value","ds_input","SEMESTER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divM.form.edtSearchName","value","ds_input","PROF_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divM.form.edtSearchSabeon","value","ds_input","PROF_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","tab.GibonJeongbo.form.cboHakgi","value","dsGibonJeongbo","SEMESTER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item106","tab.GibonJeongbo.form.cboHakgwa","value","dsGibonJeongbo","DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","tab.GibonJeongbo.form.txtGyogwamokGaeyo","value","dsGibonJeongbo","SUBJECT_SUMMARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","tab.GibonJeongbo.form.txtGyoyukMokpyo","value","dsGibonJeongbo","EDU_GOAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","tab.GibonJeongbo.form.txtGyoyukNaeyong","value","dsGibonJeongbo","EDU_CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","tab.YeokRyangMapping.form.txtJikmuYeokryang","value","dsGibonJeongbo","JOB_COMP_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","tab.GibonJeongbo.form.spnSearchYYYY","value","dsGibonJeongbo","YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","tab","enable","dsBindableTab","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item81","divD.form.edtSearchGwamokNm","readonly","dsBindableComp","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item82","divD.form.cboSearchHaknyeon","readonly","dsBindableComp","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item83","divD.form.cboSearchJuya","readonly","dsBindableComp","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item85","divD.form.cboSearchIsu","readonly","dsBindableComp","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item86","divD.form.edtSearchSisu","readonly","dsBindableComp","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item91","divD.form.edtSearchHakjeom","readonly","dsBindableComp","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item94","tab.GibonJeongbo.form.cboHakgi","readonly","dsBindableComp","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item95","tab.GibonJeongbo.form.cboHakgwa","readonly","dsBindableComp","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item96","divD.form.btnSearchGwamokDetail","enable","dsBindableComp","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
            this._addPreloadList("data","","dsGibonJeongbo");
            this._addPreloadList("data","","dsHaeksim");
            this._addPreloadList("data","","dsHawi");
            this._addPreloadList("data","","dsJangbiDogu");
            this._addPreloadList("data","","dsGyosu");
            this._addPreloadList("data","","dsNCSCombo");
            this._addPreloadList("data","","dsCopy");
            this._addPreloadList("data","","dsPyeongGa");
            this._addPreloadList("data","","dsAuth");
            this._addPreloadList("data","","ds_authInput");
            this._addPreloadList("data","","dsGusungYoso");
        };
        
        // User Script
        this.registerScript("UC01_2122101_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UC01_2122101_M.xfdl(교과목명세서)
        * 작 성         일 명: jiback
        * 작 성         일 자: 2021/02/01
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
        this.lvchkColidDs   = "SUBJECT_CD_NM$COMP_GRADE_CD$DAYNIGHT_DIVCD$NCS_USE_DIVCD$COMP_DIVCD$LECTTM$LECTSCORE$LMS_USE_YN$YYYY$SEMESTER";
        this.lvchkColNameDs = "과목$학년$주야구분$활용구분$이수구분$시수$학점$LMS활용구분$학년도$학기";
        this.lvchkColidHawiDs   = "DEGR_COMP_NM";
        this.lvchkColNameHawiDs = "하위역량명";
        this.lvchkColidGusungDs   = "COMP_FACT_NM";
        this.lvchkColNameGusungDs = "구성요인명";
        this.lvchkColidEquipDs   = "EQUIP_NM";
        this.lvchkColNameEquipDs = "장비명";
        var status = "";
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
        	this.fn_UserGbcdInit();
        };

        /**********************************************************************
                04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        this.fn_formInit = function()
        {
            var strDs    = "dsHakgi|dsNCS|dsNCS_D|dsLMS|dsLMS_D|dsHaknyeon|dsJuya|dsIsu";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00022|00506|00506|00542|00542|00060|00003|00025";                         			// 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "X|T|X|T|S|X|X|X";                                   											// 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = "";                                      															// 조건문 " AND COMM_IT02 = '" + vip + "'|||";
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
        	var strEopmuGbcd = "UL";
        	var strUseYn     = "1";
            // gfn_BaseYyyyHakgiLoad(데이터셋, svcId , 업무구분, 사용구분);
            // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.gfn_BaseYyyyHakgiLoad(strDs
                                      , svcId
                                      , strEopmuGbcd
                                      , strUseYn);


        	// gfn_HakgwaComboLoad(데이터셋, 콤보 옵션)
        	// 학과콤보
        	strComb     = "TT";
        	svcId       = "gyeyeolHakgwaInit";
        	strUseYn    = "1"; // 사용 여부
        	strJojikGbcd = "20";  // 조직구분 10.행정조직   20.학사조직   30.입시조직

        	this.gfn_GyeyeolHakgwaComboLoad(this.divM.form.cboSearchGyeYeolHakGwa, strComb, svcId, strUseYn, strJojikGbcd, objApp.gv_cutPrgId);


        	// 교과목명세서 작성/수정 권한 조회
        	var strSvc      = "authInit";
            var strUrl      = "/prj/UC/UC01/authRetrieve_2122101_M.do";
            var strInDs     = "ds_authInput=ds_authInput";
            var strOutDs    = "dsAuth=dsAuth";
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

        this.fn_UserGbcdInit = function()
        {
        	// 교원일 경우
        	if(objApp.gds_userInfoDb.getColumn(0,"USER_GBCD") == '10')
        	{
        		this.divM.form.edtSearchSabeon.set_value(objApp.gds_userInfoDb.getColumn(0,"USER_ID"));
        		this.divM.form.edtSearchName.set_value(objApp.gds_userInfoDb.getColumn(0,"USER_NM"));
        		this.divM.form.edtSearchSabeon.set_enable(false);
        		this.divM.form.edtSearchName.set_enable(false);
        		this.divM.form.btnSearchSabeon.set_enable(false);
        	}
        }

        this.fn_PostBaseYyyyHakgiInit = function()
        {
        	if (this.dsBaseYyyyHakgi.rowcount > 0) {
        		this.ds_input.setColumn(0,"YYYY",  this.dsBaseYyyyHakgi.getColumn(0, "YYYY"));
        		this.ds_input.setColumn(0,"SEMESTER", this.dsBaseYyyyHakgi.getColumn(0, "HAKGI"));
        	}
        };

        this.fn_PostGyeyeolHakgwaInit = function()
        {
        	this.divM.form.cboSearchGyeYeolHakGwa.set_index(0);
        	this.tab.GibonJeongbo.form.cboHakgwa.set_index(0);
        };

        this.fn_PostAuthInit = function()
        {
         	if(this.dsAuth.getColumn(0, "SUBJ_POSS_YN") == "N")
         	{
        		this.parent.parent.div_Title.form.fn_newEnable(false);
        		this.parent.parent.div_Title.form.fn_saveEnable(false);
        		this.parent.parent.div_Title.form.fn_delEnable(false);
        		this.parent.parent.div_Title.form.fn_tmp1Enable(false);
         	}
        };

        // NCS콤보 가져오는 함수
        this.fn_getNCSCombo = function()
        {
        	var strSvc      = "NCSComboRet";
            var strUrl      = "/prj/UC/UC01/comboRetrieve_2122101_T03.do";
            var strInDs     = "ds_dInput=ds_dInput";
            var strOutDs    = "dsNCSCombo=dsNCSCombo";
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
        }

        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {

            this.gfn_clearSortAll(this.grdMaster);
        	this.gfn_clearSortAll(this.tab.YeokRyangMapping.form.grdHawiYeokryang);
        	this.gfn_clearSortAll(this.tab.JangbiDogu.form.grdJangbiDogu);
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
        			case "gyeyeolHakgwaInit":
        					this.fn_PostGyeyeolHakgwaInit();
        			    break;
        			case "authInit":
        					this.fn_PostAuthInit();
        			    break;
                    case "Ret":
                            this.fn_PostRet();
                        break;
        			case "GibonJeongboRet":
                            this.fn_PostGibonJeongboRet();
                        break;
        			case "HaeksimRet":
                            this.fn_PostHaeksimRet();
                        break;
        			case "HawiRet":
                            this.fn_PostHawiRet();
                        break;
        			case "GusungRet":
                            this.fn_PostGusungRet();
                        break;
        			case "JangbiDoguRet":
                            this.fn_PostJangbiDoguRet();
                        break;
        			case "GyosuRet":
                            this.fn_PostGyosuRet();
                        break;
        			case "PyeongGaRet":
                            this.fn_PostPyeongGaRet();
                        break;
        			case "Copy":
                            this.fn_PostCopy();
                        break;
                    case "Save":
                            this.fn_PostSave();
                        break;
        			case "HawiSave":
                            this.fn_PostHawiSave();
                        break;
        			case "GusungSave":
                            this.fn_PostGusungSave();
                        break;
                    case "New":
                            this.fn_PostNew();
                        break;
                    case "Del":
                            this.fn_PostDel();
                        break;
        			case "HawiDel":
                            this.fn_PostHawiDel();
                        break;
        			case "GusungDel":
                            this.fn_PostGusungDel();
                        break;
        			case "JangbiDoguDel":
                            this.fn_PostJangbiDoguDel();
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
        		case "gwamokM" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					this.ds_input.set_enableevent(false);
        					this.ds_input.setColumn(0, "SUBJECT_CD", sRtn[5]);
        					this.ds_input.setColumn(0, "SUBJECT_NM", sRtn[6]);
        					this.ds_input.set_enableevent(true);
        				}
        			break;
        		case "gwamokD" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					// 데이터셋에 값 삽입
        					this.dsGibonJeongbo.set_enableevent(false);
          					this.dsGibonJeongbo.setColumn(0, "SEMESTER", sRtn[1]);
          					this.dsGibonJeongbo.setColumn(0, "DEPT_CD", sRtn[2]);
          					this.dsGibonJeongbo.setColumn(0, "DAYNIGHT_DIVCD", sRtn[3]);
          					this.dsGibonJeongbo.setColumn(0, "COMP_GRADE_CD", sRtn[4]);
          					this.dsGibonJeongbo.setColumn(0, "SUBJECT_CD", sRtn[5]);
          					this.dsGibonJeongbo.setColumn(0, "SUBJECT_CD_NM", sRtn[6]);
          					this.dsGibonJeongbo.setColumn(0, "LECTSCORE", sRtn[7]);
          					this.dsGibonJeongbo.setColumn(0, "LECTTM", sRtn[8]);
          					this.dsGibonJeongbo.setColumn(0, "COMP_DIVCD", sRtn[9]);
          					this.dsGibonJeongbo.setColumn(0, "MAJOR_CD", '1');
        					this.dsGibonJeongbo.set_enableevent(true);

         					// 디테일 조회조건 세팅
        					this.ds_dInput.set_enableevent(false);
         					this.ds_dInput.setColumn(0,"YYYY",this.dsGibonJeongbo.getColumn(this.dsGibonJeongbo.rowposition,"YYYY"));
         					this.ds_dInput.setColumn(0,"SEMESTER",this.dsGibonJeongbo.getColumn(this.dsGibonJeongbo.rowposition,"SEMESTER"));
         					this.ds_dInput.setColumn(0,"DEPT_CD",this.dsGibonJeongbo.getColumn(this.dsGibonJeongbo.rowposition,"DEPT_CD"));
         					this.ds_dInput.setColumn(0,"DAYNIGHT_DIVCD",this.dsGibonJeongbo.getColumn(this.dsGibonJeongbo.rowposition,"DAYNIGHT_DIVCD"));
         					this.ds_dInput.setColumn(0,"MAJOR_CD",this.dsGibonJeongbo.getColumn(this.dsGibonJeongbo.rowposition,"MAJOR_CD"));
         					this.ds_dInput.setColumn(0,"COMP_GRADE_CD",this.dsGibonJeongbo.getColumn(this.dsGibonJeongbo.rowposition,"COMP_GRADE_CD"));
         					this.ds_dInput.setColumn(0,"SUBJECT_CD",this.dsGibonJeongbo.getColumn(this.dsGibonJeongbo.rowposition,"SUBJECT_CD"));
        					this.ds_dInput.set_enableevent(true);

         					// 체크박스 생성을 위해 조회
         					this.fn_HaeksimRet();
         					this.fn_GyosuRet();
         					this.fn_PyeongGaRet();

         					// 생성된 체크박스를 빈 값으로 변경
         					this.fn_NewHaeksimCheckbox();
         					this.fn_NewGyosuCheckbox();
         					this.fn_NewPyeongGaCheckbox();
        				}
        			break;
        		case "sawon" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					this.ds_input.set_enableevent(false);
        					this.ds_input.setColumn(0, "PROF_CD", sRtn[0]);
        					this.ds_input.setColumn(0, "PROF_NM", sRtn[1]);
        					this.ds_input.set_enableevent(true);
        				}
        			break;
        		case "copy" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					this.dsCopy.setColumn(0, "YYYY",this.dsMaster.getColumn(this.dsMaster.rowposition,"YYYY"));
        					this.dsCopy.setColumn(0, "SEMESTER",this.dsMaster.getColumn(this.dsMaster.rowposition,"SEMESTER"));
        					this.dsCopy.setColumn(0, "DEPT_CD",this.dsMaster.getColumn(this.dsMaster.rowposition,"DEPT_CD"));
        					this.dsCopy.setColumn(0, "MAJOR_CD",this.dsMaster.getColumn(this.dsMaster.rowposition,"MAJOR_CD"));
        					this.dsCopy.setColumn(0, "DAYNIGHT_DIVCD",this.dsMaster.getColumn(this.dsMaster.rowposition,"DAYNIGHT_DIVCD"));
        					this.dsCopy.setColumn(0, "COMP_GRADE_CD",this.dsMaster.getColumn(this.dsMaster.rowposition,"COMP_GRADE_CD"));
        					this.dsCopy.setColumn(0, "SUBJECT_CD",this.dsMaster.getColumn(this.dsMaster.rowposition,"SUBJECT_CD"));
        					this.dsCopy.setColumn(0, "YYYY_COPY", sRtn[0]);
        					this.dsCopy.setColumn(0, "SEMESTER_COPY", sRtn[1]);
        					this.dsCopy.setColumn(0, "DEPT_CD_COPY", sRtn[2]);
        					this.dsCopy.setColumn(0, "MAJOR_CD_COPY", sRtn[3]);
        					this.dsCopy.setColumn(0, "DAYNIGHT_DIVCD_COPY", sRtn[4]);
        					this.dsCopy.setColumn(0, "COMP_GRADE_CD_COPY", sRtn[5]);
        					this.dsCopy.setColumn(0, "SUBJECT_CD_COPY", sRtn[6]);

        					this.fn_Copy();
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
        		case "new" :        // 신규
                        this.fn_New();
                    break;
        		case "save" :       // 저장
                        this.fn_Save();
                    break;
        		case "del" :        // 삭제
                        this.fn_Del();
                    break;
        		case "tmp1" :        // 교과목명세서 가져오기
                        this.fn_Get();
                    break;
        		case "tmp2" :        // 교과목명세서 출력
                        this.fn_Print();
                    break;
                default :
                    break;
            };
        };

        /**********************************************************************
                05. 조회 함수 선언(마스터 함수)
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreRet = function()
        {
        	if(this.fn_beforeclose())
        	{
        		var result = this.gfn_confirm( "변경된 데이터가 있습니다. 그래도 이동하시겠습니까?", "저장","", "question" );
        		if(result == 0)
        		{
        			return false;
        		}
        	}

            // 조회조건 셋팅
        	status = "";
        	this.dsBindableTab.setColumn(0, "bEnable",	"false");
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
            var strUrl      = "/prj/UC/UC01/Retrieve_2122101_M.do";
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
        	this.dsMaster.set_rowposition(0);
        	this.dsGibonJeongbo.clearData();
        	this.dsHaeksim.clearData();
        	this.dsHawi.clearData();
        	this.dsGusungYoso.clearData();
        	this.dsJangbiDogu.clearData();
        	this.dsGyosu.clearData();
        	this.dsPyeongGa.clearData();
            this.gfn_getRowCount(this.stRowCnt,this.dsMaster);
        };

        // 디테일 조회
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
        	this.dsBindableTab.setColumn(0, "bEnable",	"true");

            // 조회조건 셋팅
        	this.ds_dInput.setColumn(0,"YYYY",this.dsMaster.getColumn(this.dsMaster.rowposition,"YYYY"));
        	this.ds_dInput.setColumn(0,"SEMESTER",this.dsMaster.getColumn(this.dsMaster.rowposition,"SEMESTER"));
        	this.ds_dInput.setColumn(0,"DEPT_CD",this.dsMaster.getColumn(this.dsMaster.rowposition,"DEPT_CD"));
        	this.ds_dInput.setColumn(0,"MAJOR_CD",this.dsMaster.getColumn(this.dsMaster.rowposition,"MAJOR_CD"));
        	this.ds_dInput.setColumn(0,"DAYNIGHT_DIVCD",this.dsMaster.getColumn(this.dsMaster.rowposition,"DAYNIGHT_DIVCD"));
        	this.ds_dInput.setColumn(0,"COMP_GRADE_CD",this.dsMaster.getColumn(this.dsMaster.rowposition,"COMP_GRADE_CD"));
        	this.ds_dInput.setColumn(0,"SUBJECT_CD",this.dsMaster.getColumn(this.dsMaster.rowposition,"SUBJECT_CD"));

        	// readonly 설정
        	this.dsBindableComp.setColumn(0, "bEnable",	"false");
        	this.dsBindableComp.setColumn(0, "bReadonly","true");

        	// 조회
        	this.fn_getNCSCombo();
        	this.fn_GibonJeongboRet();
        	this.fn_HaeksimRet();
        	this.fn_HawiRet();
        	this.fn_JangbiDoguRet();
        	this.fn_GyosuRet();
        	this.fn_PyeongGaRet();

        	this.dsGusungYoso.clearData();
        };

        /**********************************************************************
        	05-1. 기본정보 조회 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_GibonJeongboRet = function()
        {
            var strSvc      = "GibonJeongboRet";
            var strUrl      = "/prj/UC/UC01/Retrieve_2122101_T01.do";
            var strInDs     = "ds_dInput=ds_dInput";
            var strOutDs    = "dsGibonJeongbo=dsGibonJeongbo";
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
        this.fn_PostGibonJeongboRet = function()
        {
        	// NCS활용구분이 NCS 미활용인 경우 장비 및 도구 탭 비활성화
        	if(this.divD.form.cboSearchNCS.value == 3)
        	{
        		this.tab.JangbiDogu.set_enable(false);
        	}
        	else
        	{
        		this.tab.JangbiDogu.set_enable(true);
        	}
        };

        /**********************************************************************
        	05-2. 대학핵심역량매핑 조회 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_HaeksimRet = function()
        {
            var strSvc      = "HaeksimRet";
            var strUrl      = "/prj/UC/UC01/haeksimRetrieve_2122101_T02.do";
            var strInDs     = "ds_dInput=ds_dInput";
            var strOutDs    = "dsHaeksim=dsHaeksim";
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
        this.fn_PostHaeksimRet = function()
        {
        	this.fn_HaeksimCheckbox();
        };

        /**
         * 대학핵심역량 체크박스 동적 생성
         */
        this.fn_HaeksimCheckbox = function()
        {
        	var chkId = "";
        	var leftSz = 0;
        	var topSz  = 0;
        	var colSize	= 7;    // CheckBox 열의 갯수생성

        	this.fn_setObjCheckBoxDestroy(this.tab.YeokRyangMapping.form.divHaeksimCheckbox.form);

        	for (var i = 0; i < this.dsHaeksim.getRowCount(); i++)
        	{
        		var chkNUM 		 = this.dsHaeksim.getColumn(i, "CORE_COMP_DIVCD");
        		var chkNm 		 = this.dsHaeksim.getColumn(i, "CD_NM");
        		var chkSubjectCd = this.dsHaeksim.getColumn(i, "SUBJECT_CD");
        		chkId = "CheckBox"+ chkNUM;
        		this.fn_HaeksimCreateCheckBox(chkId,chkNUM,chkNm,leftSz,topSz,chkSubjectCd);
        		var chkObj = this.tab.YeokRyangMapping.form.divHaeksimCheckbox.form.components[chkId];
        		var colNum      = (i+1) % colSize;

        		if(chkSubjectCd != null)
        		{
        			this.dsHaeksim.setColumn(i, "CORE_COMP_DIVCD", chkNUM);
        		}
        		else
        		{
        			this.dsHaeksim.setColumn(i, "CORE_COMP_DIVCD", null);
        		}

        		if(colNum == 0)
        		{
        			leftSz = 0;
        			topSz  = chkObj.getOffsetBottom();
        		}else
        		{
        			leftSz = chkObj.getOffsetRight();
        		}
        	}
        	this.tab.YeokRyangMapping.form.divHaeksimCheckbox.form.resetScroll();
        };

        this.fn_HaeksimCreateCheckBox = function (chkId,chkNUM,chkNm,leftSz,topSz,chkSubjectCd)
        {
        	var colWidth  	= 140;  // CheckBox 사이즈 설정
        	var colHeight   = 25;   // CheckBox 높이 설정

        	var objCheckBox = new CheckBox();
        	objCheckBox.init(chkId, leftSz,topSz,colWidth,colHeight);
        	this.tab.YeokRyangMapping.form.divHaeksimCheckbox.addChild(chkId, objCheckBox);
        	objCheckBox.addEventHandler("onclick", this.fn_isHaeksimClick, this);
        	objCheckBox.set_text(chkNm);
        	objCheckBox.set_falsevalue(null);
        	objCheckBox.set_truevalue(chkNUM);
        	if(chkSubjectCd != null)
        	{
        		objCheckBox.set_value(chkNUM);
        	}
        	else
        	{
        		objCheckBox.set_value(null);
        	}
        	objCheckBox.show();
        };

        /**********************************************************************
        	05-3. 하위역량매핑 조회 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_HawiRet = function()
        {
            var strSvc      = "HawiRet";
            var strUrl      = "/prj/UC/UC01/hawiRetrieve_2122101_T02.do";
            var strInDs     = "ds_dInput=ds_dInput";
            var strOutDs    = "dsHawi=dsHawi";
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
        this.fn_PostHawiRet = function()
        {
        	this.gfn_getRowCount(this.tab.YeokRyangMapping.form.stRowCnt,this.dsHawi);
        };

        /**********************************************************************
        	05-4. 구성요인 조회 함수 선언
        ***********************************************************************/
        this.dsHawi_canrowposchange = function(obj,e)
        {
        	if(this.fn_gusungbeforeclose())
        	{
        		var result = this.gfn_confirm( "변경된 데이터가 있습니다. 그래도 이동하시겠습니까?", "저장","", "question" );
        		if(result == 0)
        		{
        			return false;
        		}
        	}
        };

        this.dsHawi_onrowposchanged = function(obj,e)
        {
        	if(this.dsHawi.getRowType(this.dsHawi.rowposition) == Dataset.ROWTYPE_INSERT || this.dsHawi.getRowType(this.dsHawi.rowposition) == Dataset.ROWTYPE_UPDATE)
        	{
        		this.tab.YeokRyangMapping.form.btnNew2.set_enable(false);
        		this.tab.YeokRyangMapping.form.btnDel2.set_enable(false);
        		this.tab.YeokRyangMapping.form.btnSave2.set_enable(false);
        	}
        	else
        	{
        		this.tab.YeokRyangMapping.form.btnNew2.set_enable(true);
        		this.tab.YeokRyangMapping.form.btnDel2.set_enable(true);
        		this.tab.YeokRyangMapping.form.btnSave2.set_enable(true);
        	}

        	this.ds_dInput.setColumn(0, "DEGR_COMP_SEQ", this.dsHawi.getColumn(this.dsHawi.rowposition, "DEGR_COMP_SEQ"));
        	this.fn_GusungYosoRet();
        };

        this.fn_GusungYosoRet = function()
        {
            var strSvc      = "GusungRet";
            var strUrl      = "/prj/UC/UC01/gusungRetrieve_2122101_T02.do";
            var strInDs     = "ds_dInput=ds_dInput";
            var strOutDs    = "dsGusungYoso=dsGusungYoso";
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
        this.fn_PostGusungRet = function()
        {
        	this.gfn_getRowCount(this.tab.YeokRyangMapping.form.stRowCnt2,this.dsGusungYoso);
        };

        /**********************************************************************
        	05-5. 장비 및 도구 조회 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_JangbiDoguRet = function()
        {
            var strSvc      = "JangbiDoguRet";
            var strUrl      = "/prj/UC/UC01/Retrieve_2122101_T03.do";
            var strInDs     = "ds_dInput=ds_dInput";
            var strOutDs    = "dsJangbiDogu=dsJangbiDogu";
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
        this.fn_PostJangbiDoguRet = function()
        {
        	this.gfn_getRowCount(this.tab.JangbiDogu.form.stRowCnt,this.dsJangbiDogu);
        };

        /**********************************************************************
        	05-6. 교수학습방법 조회 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_GyosuRet = function()
        {
            var strSvc      = "GyosuRet";
            var strUrl      = "/prj/UC/UC01/gyosuRetrieve_2122101_T04.do";
            var strInDs     = "ds_dInput=ds_dInput";
            var strOutDs    = "dsGyosu=dsGyosu";
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
        this.fn_PostGyosuRet = function()
        {
        	this.fn_GyosuCheckbox();
        };

        /**
         * 교수학습방법 체크박스 동적 생성
         */
        this.fn_GyosuCheckbox = function()
        {
        	var chkId = "";
        	var leftSz = 0;
        	var topSz  = 0;
        	var colSize = 10;    // CheckBox 열의 갯수생성

        	this.tab.GyosuHakseub.form.edtGyosuGita.set_readonly(true);
        	this.tab.GyosuHakseub.form.edtGyosuGita.set_value(null);
        	this.fn_setObjCheckBoxDestroy(this.tab.GyosuHakseub.form.divGyosuCheckbox.form);

        	for (var i = 0; i < this.dsGyosu.getRowCount(); i++)
        	{
        		var chkNUM 		 = this.dsGyosu.getColumn(i, "SUBITEM_CD");
        		var chkNm 		 = this.dsGyosu.getColumn(i, "CD_NM");
        		var chkSubjectCd = this.dsGyosu.getColumn(i, "SUBJECT_CD");
        		var chkNote		 = this.dsGyosu.getColumn(i, "NOTE");
        		chkId = "CheckBox"+ chkNUM;
        		this.fn_GyosuCreateCheckBox(chkId,chkNUM,chkNm,leftSz,topSz,chkSubjectCd,chkNote);
        		var chkObj = this.tab.GyosuHakseub.form.divGyosuCheckbox.form.components[chkId];
        		var colNum      = (i+1) % colSize;
        		if(chkSubjectCd != null)
        		{
        			this.dsGyosu.setColumn(i, "SUBITEM_CD", chkNUM);
        		}
        		else
        		{
        			this.dsGyosu.setColumn(i, "SUBITEM_CD", null);
        		}

        		if(colNum == 0)
        		{
        			leftSz = 0;
        			topSz  = chkObj.getOffsetBottom();
        		}else
        		{
        			leftSz = chkObj.getOffsetRight();
        		}
        	}
        	this.tab.GyosuHakseub.form.divGyosuCheckbox.form.resetScroll();
        };

        this.fn_GyosuCreateCheckBox = function (chkId,chkNUM,chkNm,leftSz,topSz,chkSubjectCd,chkNote)
        {
        	var colWidth  	= 100;  // CheckBox 사이즈 설정
        	var colHeight   = 25;   // CheckBox 높이 설정

        	var objCheckBox = new CheckBox();
        	objCheckBox.init(chkId, leftSz,topSz,colWidth,colHeight);
        	this.tab.GyosuHakseub.form.divGyosuCheckbox.addChild(chkId, objCheckBox);
        	objCheckBox.addEventHandler("onclick", this.fn_isGyosuClick, this);
        	objCheckBox.set_text(chkNm);
        	objCheckBox.set_falsevalue(null);
        	objCheckBox.set_truevalue(chkNUM);
        	if(chkSubjectCd != null)
        	{
        		if(chkNUM == '106')
        		{
        			this.tab.GyosuHakseub.form.edtGyosuGita.set_readonly(false);
        			this.tab.GyosuHakseub.form.edtGyosuGita.set_value(chkNote);
        		}
        		objCheckBox.set_value(chkNUM);
        	}
        	else
        	{
        		objCheckBox.set_value(null);
        	}
        	objCheckBox.show();
        };

        /**********************************************************************
        	05-7. 평가방법 조회 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_PyeongGaRet = function()
        {
            var strSvc      = "PyeongGaRet";
            var strUrl      = "/prj/UC/UC01/pyeongGaRetrieve_2122101_T04.do";
            var strInDs     = "ds_dInput=ds_dInput";
            var strOutDs    = "dsPyeongGa=dsPyeongGa";
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
        this.fn_PostPyeongGaRet = function()
        {
        	this.fn_PyeongGaCheckbox();
        };

        /**
         * 평가방법 체크박스 동적 생성
         */
        this.fn_PyeongGaCheckbox = function()
        {
        	var chkId = "";
        	var leftSz = 0;
        	var topSz  = 0;
        	var colSize	= 7;    // CheckBox 열의 갯수생성

        	this.tab.GyosuHakseub.form.edtPyeongGaGita.set_readonly(true);
        	this.tab.GyosuHakseub.form.edtPyeongGaGita.set_value(null);
        	this.fn_setObjCheckBoxDestroy(this.tab.GyosuHakseub.form.divPyeongGaCheckbox.form);

        	for (var i = 0; i < this.dsPyeongGa.getRowCount(); i++)
        	{
        		var chkNUM 		 = this.dsPyeongGa.getColumn(i, "SUBITEM_CD");
        		var chkNm 		 = this.dsPyeongGa.getColumn(i, "CD_NM");
        		var chkSubjectCd = this.dsPyeongGa.getColumn(i, "SUBJECT_CD");
        		var chkNote		 = this.dsPyeongGa.getColumn(i, "NOTE");
        		chkId = "CheckBox"+ chkNUM;
        		this.fn_PyeongGaCreateCheckBox(chkId,chkNUM,chkNm,leftSz,topSz,chkSubjectCd,chkNote);
        		var chkObj = this.tab.GyosuHakseub.form.divPyeongGaCheckbox.form.components[chkId];
        		var colNum      = (i+1) % colSize;
        		if(chkSubjectCd != null)
        		{
        			this.dsPyeongGa.setColumn(i, "SUBITEM_CD", chkNUM);
        		}
        		else
        		{
        			this.dsPyeongGa.setColumn(i, "SUBITEM_CD", null);
        		}

        		if(colNum == 0)
        		{
        			leftSz = 0;
        			topSz  = chkObj.getOffsetBottom();
        		}else
        		{
        			leftSz = chkObj.getOffsetRight();
        		}
        	}
        	this.tab.GyosuHakseub.form.divPyeongGaCheckbox.form.resetScroll();
        };

        this.fn_PyeongGaCreateCheckBox = function (chkId,chkNUM,chkNm,leftSz,topSz,chkSubjectCd,chkNote)
        {
        	var colWidth  	= 140;  // CheckBox 사이즈 설정
        	var colHeight   = 25;   // CheckBox 높이 설정

        	var objCheckBox = new CheckBox();
        	objCheckBox.init(chkId, leftSz,topSz,colWidth,colHeight);
        	this.tab.GyosuHakseub.form.divPyeongGaCheckbox.addChild(chkId, objCheckBox);
        	objCheckBox.addEventHandler("onclick", this.fn_isPyeongGaClick, this);
        	objCheckBox.set_text(chkNm);
        	objCheckBox.set_falsevalue(null);
        	objCheckBox.set_truevalue(chkNUM);
        	if(chkSubjectCd != null)
        	{
        		if(chkNUM == '213')
        		{
        			this.tab.GyosuHakseub.form.edtPyeongGaGita.set_value(chkNote);
        			this.tab.GyosuHakseub.form.edtPyeongGaGita.set_readonly(false);
        		}
        		objCheckBox.set_value(chkNUM);
        	}
        	else
        	{
        		objCheckBox.set_value(null);
        	}
        	objCheckBox.show();
        };

        /**********************************************************************
                06. 신규입력 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_New = function()
        {
        	status = "newAdd";
        	this.tab.set_enable(true);

        	// 기본정보 초기화
        	this.dsGibonJeongbo.clearData();
        	var nRow = this.dsGibonJeongbo.addRow();
        	this.dsGibonJeongbo.setColumn(nRow, "NCS_USE_DIVCD", "4");

        	// 컴포넌트 활성화
        	this.dsBindableComp.setColumn(0, "bEnable",	"true");
        	this.dsBindableComp.setColumn(0, "bReadonly","false");

        	// 학년도는 조회조건의 학년도로
        	this.dsGibonJeongbo.setColumn(0, "YYYY", this.ds_input.getColumn(0, "YYYY"));

        	// 하위역량, 장비및도구 초기화
        	this.dsHawi.clearData();
        	this.gfn_getRowCount(this.tab.YeokRyangMapping.form.stRowCnt,this.dsHawi);

        	this.dsJangbiDogu.clearData();
        	this.gfn_getRowCount(this.tab.JangbiDogu.form.stRowCnt,this.dsJangbiDogu);
        };
        /**
         * 기능 : 처리 후 실행
         */
        this.fn_PostNew = function()
        {

        };

        /**********************************************************************
                06-1. 대학핵심역량 빈 체크박스 생성
        ***********************************************************************/
        this.fn_NewHaeksimCheckbox = function()
        {
        	this.tab.YeokRyangMapping.form.divHaeksimCheckbox.form.CheckBox001.set_value(null);
        	this.tab.YeokRyangMapping.form.divHaeksimCheckbox.form.CheckBox002.set_value(null);
        	this.fn_isHaeksimClick();
        };

        /**********************************************************************
                06-2. 교수학습방법 빈 체크박스 생성
        ***********************************************************************/
        this.fn_NewGyosuCheckbox = function()
        {
        	this.tab.GyosuHakseub.form.divGyosuCheckbox.form.CheckBox101.set_value(null);
        	this.tab.GyosuHakseub.form.divGyosuCheckbox.form.CheckBox102.set_value(null);
        	this.tab.GyosuHakseub.form.divGyosuCheckbox.form.CheckBox103.set_value(null);
        	this.tab.GyosuHakseub.form.divGyosuCheckbox.form.CheckBox104.set_value(null);
        	this.tab.GyosuHakseub.form.divGyosuCheckbox.form.CheckBox105.set_value(null);
        	this.tab.GyosuHakseub.form.divGyosuCheckbox.form.CheckBox106.set_value(null);
        	this.tab.GyosuHakseub.form.divGyosuCheckbox.form.CheckBox107.set_value(null);
        	this.tab.GyosuHakseub.form.divGyosuCheckbox.form.CheckBox108.set_value(null);
        	this.fn_isGyosuClick();
        };

        /**********************************************************************
                06-3. 평가방법 빈 체크박스 생성
        ***********************************************************************/
        this.fn_NewPyeongGaCheckbox = function()
        {
        	this.tab.GyosuHakseub.form.divPyeongGaCheckbox.form.CheckBox201.set_value(null);
        	this.tab.GyosuHakseub.form.divPyeongGaCheckbox.form.CheckBox202.set_value(null);
        	this.tab.GyosuHakseub.form.divPyeongGaCheckbox.form.CheckBox203.set_value(null);
        	this.tab.GyosuHakseub.form.divPyeongGaCheckbox.form.CheckBox204.set_value(null);
        	this.tab.GyosuHakseub.form.divPyeongGaCheckbox.form.CheckBox205.set_value(null);
        	this.tab.GyosuHakseub.form.divPyeongGaCheckbox.form.CheckBox206.set_value(null);
        	this.tab.GyosuHakseub.form.divPyeongGaCheckbox.form.CheckBox207.set_value(null);
        	this.tab.GyosuHakseub.form.divPyeongGaCheckbox.form.CheckBox208.set_value(null);
        	this.tab.GyosuHakseub.form.divPyeongGaCheckbox.form.CheckBox209.set_value(null);
        	this.tab.GyosuHakseub.form.divPyeongGaCheckbox.form.CheckBox210.set_value(null);
        	this.tab.GyosuHakseub.form.divPyeongGaCheckbox.form.CheckBox211.set_value(null);
        	this.tab.GyosuHakseub.form.divPyeongGaCheckbox.form.CheckBox212.set_value(null);
        	this.tab.GyosuHakseub.form.divPyeongGaCheckbox.form.CheckBox213.set_value(null);
        	this.fn_isPyeongGaClick();
        };

        /**********************************************************************
                07. 하위역량 신규 함수 선언
        ***********************************************************************/
        this.tab_YeokRyangMapping_btnNew_onclick = function(obj,e)
        {
        	this.fn_HawiNew();
        };

        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_HawiNew = function()
        {
        	var nRow = this.dsHawi.addRow();

        	this.dsHawi.setColumn(nRow,"YYYY",this.dsGibonJeongbo.getColumn(0,"YYYY"));
        	this.dsHawi.setColumn(nRow,"SEMESTER",this.dsGibonJeongbo.getColumn(0,"SEMESTER"));
        	this.dsHawi.setColumn(nRow,"DEPT_CD",this.dsGibonJeongbo.getColumn(0,"DEPT_CD"));
        	this.dsHawi.setColumn(nRow,"MAJOR_CD",this.dsGibonJeongbo.getColumn(0,"MAJOR_CD"));
        	this.dsHawi.setColumn(nRow,"DAYNIGHT_DIVCD",this.dsGibonJeongbo.getColumn(0,"DAYNIGHT_DIVCD"));
        	this.dsHawi.setColumn(nRow,"COMP_GRADE_CD",this.dsGibonJeongbo.getColumn(0,"COMP_GRADE_CD"));
        	this.dsHawi.setColumn(nRow,"SUBJECT_CD",this.dsGibonJeongbo.getColumn(0,"SUBJECT_CD"));
        };
        /**
         * 기능 : 처리 후 실행
         */
        this.fn_PostHawiNew = function()
        {

        };

        /**********************************************************************
                08. 구성요인 신규 함수 선언
        ***********************************************************************/
        this.tab_YeokRyangMapping_btnNew2_onclick = function(obj,e)
        {
        	if(this.dsHawi.getRowType(this.dsHawi.rowposition) == Dataset.ROWTYPE_INSERT || this.dsHawi.getRowType(this.dsHawi.rowposition) == Dataset.ROWTYPE_UPDATE)
        	{
        		this.alert("먼저 하위역량 변경사항을 저장해주시기 바랍니다.");
        		return false;
        	}
        	this.fn_GusungNew();
        };

        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_GusungNew = function()
        {
        	var nRow = this.dsGusungYoso.addRow();

        	this.dsGusungYoso.setColumn(nRow,"YYYY",this.dsGibonJeongbo.getColumn(0,"YYYY"));
        	this.dsGusungYoso.setColumn(nRow,"SEMESTER",this.dsGibonJeongbo.getColumn(0,"SEMESTER"));
        	this.dsGusungYoso.setColumn(nRow,"DEPT_CD",this.dsGibonJeongbo.getColumn(0,"DEPT_CD"));
        	this.dsGusungYoso.setColumn(nRow,"MAJOR_CD",this.dsGibonJeongbo.getColumn(0,"MAJOR_CD"));
        	this.dsGusungYoso.setColumn(nRow,"DAYNIGHT_DIVCD",this.dsGibonJeongbo.getColumn(0,"DAYNIGHT_DIVCD"));
        	this.dsGusungYoso.setColumn(nRow,"COMP_GRADE_CD",this.dsGibonJeongbo.getColumn(0,"COMP_GRADE_CD"));
        	this.dsGusungYoso.setColumn(nRow,"SUBJECT_CD",this.dsGibonJeongbo.getColumn(0,"SUBJECT_CD"));
        	this.dsGusungYoso.setColumn(nRow,"DEGR_COMP_SEQ",this.dsHawi.getColumn(this.dsHawi.rowposition,"DEGR_COMP_SEQ"));
        };

        /**********************************************************************
                09. 장비 및 도구 신규 함수 선언
        ***********************************************************************/
        this.tab_JangbiDogu_btnNew_onclick = function(obj,e)
        {
        	this.fn_JangbiDoguNew();
        };

        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_JangbiDoguNew = function()
        {
        	var nRow = this.dsJangbiDogu.addRow();

        	this.dsJangbiDogu.setColumn(nRow,"YYYY",this.dsGibonJeongbo.getColumn(0,"YYYY"));
        	this.dsJangbiDogu.setColumn(nRow,"SEMESTER",this.dsGibonJeongbo.getColumn(0,"SEMESTER"));
        	this.dsJangbiDogu.setColumn(nRow,"DEPT_CD",this.dsGibonJeongbo.getColumn(0,"DEPT_CD"));
        	this.dsJangbiDogu.setColumn(nRow,"MAJOR_CD",this.dsGibonJeongbo.getColumn(0,"MAJOR_CD"));
        	this.dsJangbiDogu.setColumn(nRow,"DAYNIGHT_DIVCD",this.dsGibonJeongbo.getColumn(0,"DAYNIGHT_DIVCD"));
        	this.dsJangbiDogu.setColumn(nRow,"COMP_GRADE_CD",this.dsGibonJeongbo.getColumn(0,"COMP_GRADE_CD"));
        	this.dsJangbiDogu.setColumn(nRow,"SUBJECT_CD",this.dsGibonJeongbo.getColumn(0,"SUBJECT_CD"));
        };
        /**
         * 기능 : 처리 후 실행
         */
        this.fn_PostJangbiDoguNew = function()
        {

        };

        /**********************************************************************
                10. 삭제 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 삭제 버튼 실행
         */

        this.fn_PreDel = function()
        {
            //멀티삭제용도
            if(this.dsGibonJeongbo.rowcount < 1)
            {
                this.gfn_alert("교과목을 선택해주세요.","삭제정보","","warning");
                return false;
            }
            var result = this.gfn_confirm( "교과목명세서 관련한 모든 데이터가 삭제됩니다.\n정말 삭제하시겠습니까?", "삭제정보","","question" );

            if(result == 0)
            {
                return false;
            }
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
            var strUrl      = "/prj/UC/UC01/Delete_2122101_M.do";
            var strInDs     = "dsGibonJeongbo=dsGibonJeongbo";
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
        	this.dsMaster.clearData();
        	this.dsGibonJeongbo.clearData();
        	this.dsHaeksim.clearData();
        	this.dsHawi.clearData();
        	this.dsGusungYoso.clearData();
        	this.dsJangbiDogu.clearData();
        	this.dsGyosu.clearData();
        	this.dsPyeongGa.clearData();
        	this.fn_NewHaeksimCheckbox();
        	this.fn_NewGyosuCheckbox();
        	this.fn_NewPyeongGaCheckbox();
            this.fn_Ret();
        };

        /**********************************************************************
                11. 하위역량 삭제 함수 선언
        ***********************************************************************/
        this.tab_YeokRyangMapping_btnDel_onclick = function(obj,e)
        {
            //멀티삭제용도
            if(this.dsHawi.rowcount < 1 || this.dsHawi.findRow("CHK",1) == -1)
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
            this.dsHawi.set_enableevent(false);
            for(var i=this.dsHawi.rowcount-1;i>-1;i--)
            {
                if(this.dsHawi.getColumn(i,"CHK") == "1")
                {
                    this.dsHawi.deleteRow(i);
                }
            }
            this.dsHawi.set_enableevent(true);
        	this.fn_HawiDel();
        };

        /**
         * 기능 : Row 삭제 또는 Transaction 삭제 처리
         */
        this.fn_HawiDel = function()
        {
            var strSvc      = "HawiDel";
            var strUrl      = "/prj/UC/UC01/hawiDelete_2122101_T02.do";
            var strInDs     = "dsHawi=dsHawi:u";
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

        this.fn_PostHawiDel = function()
        {
        	this.fn_HawiRet();
        	this.fn_GusungYosoRet();
        	this.tab.YeokRyangMapping.form.grdHawiYeokryang.setCellProperty("head", 0, "text", 0);
            this.gfn_getRowCount(this.tab.YeokRyangMapping.form.stRowCnt,this.dsHawi);
        };

        /**********************************************************************
                12. 구성요인 삭제 함수 선언
        ***********************************************************************/
        this.tab_YeokRyangMapping_btnDel2_onclick = function(obj,e)
        {
        	if(this.dsHawi.getRowType(this.dsHawi.rowposition) == Dataset.ROWTYPE_INSERT || this.dsHawi.getRowType(this.dsHawi.rowposition) == Dataset.ROWTYPE_UPDATE)
        	{
        		this.alert("먼저 하위역량 변경사항을 저장해주시기 바랍니다.");
        		return false;
        	}

            //멀티삭제용도
            if(this.dsGusungYoso.rowcount < 1 || this.dsGusungYoso.findRow("CHK",1) == -1)
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
            this.dsGusungYoso.set_enableevent(false);
            for(var i=this.dsGusungYoso.rowcount-1;i>-1;i--)
            {
                if(this.dsGusungYoso.getColumn(i,"CHK") == "1")
                {
                    this.dsGusungYoso.deleteRow(i);
                }
            }
            this.dsGusungYoso.set_enableevent(true);
        	this.fn_GusungDel();
        };

        /**
         * 기능 : Row 삭제 또는 Transaction 삭제 처리
         */
        this.fn_GusungDel = function()
        {
            var strSvc      = "GusungDel";
            var strUrl      = "/prj/UC/UC01/gusungDelete_2122101_T02.do";
            var strInDs     = "dsGusungYoso=dsGusungYoso:u";
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

        this.fn_PostGusungDel = function()
        {
        	this.tab.YeokRyangMapping.form.grdGusungYoso.setCellProperty("head", 0, "text", 0);
            this.gfn_getRowCount(this.tab.YeokRyangMapping.form.stRowCnt2,this.dsGusungYoso);
        };

        /**********************************************************************
                13. 장비 및 도구 삭제 함수 선언
        ***********************************************************************/
        this.tab_JangbiDogu_btnDel_onclick = function(obj,e)
        {
            //멀티삭제용도
            if(this.dsJangbiDogu.rowcount < 1 || this.dsJangbiDogu.findRow("CHK",1) == -1)
            {
                this.gfn_alert("삭제할 데이터가 없습니다!","삭제정보","","warning");
                return false;
            }
            var result = this.gfn_confirm( "현재선택행을 삭제하시겠습니까?", "삭제정보","","question" );

            if(result == 0)
            {
                return false;
            }

            //다중삭제 용도
            this.dsJangbiDogu.set_enableevent(false);
            for(var i=this.dsJangbiDogu.rowcount-1;i>-1;i--)
            {
                if(this.dsJangbiDogu.getColumn(i,"CHK") == "1")
                {
                    this.dsJangbiDogu.deleteRow(i);
                }
            }
            this.dsJangbiDogu.set_enableevent(true);
        	this.fn_JangbiDoguDel();
        };

        /**
         * 기능 : Row 삭제 또는 Transaction 삭제 처리
         */
        this.fn_JangbiDoguDel = function()
        {
            var strSvc      = "JangbiDoguDel";
            var strUrl      = "/prj/UC/UC01/Delete_2122101_T03.do";
            var strInDs     = "dsJangbiDogu=dsJangbiDogu:u";
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

        this.fn_PostJangbiDoguDel = function()
        {
        	this.tab.JangbiDogu.form.grdJangbiDogu.setCellProperty("head", 0, "text", 0);
            this.gfn_getRowCount(this.tab.JangbiDogu.form.stRowCnt,this.dsJangbiDogu);
        };

        /**********************************************************************
                14. 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave = function()
        {
            // 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
            var chkFocusFlg = false;
            var result      = this.gfn_cmmnChkEssentialItem(this.dsGibonJeongbo, this.lvchkColidDs, this.lvchkColNameDs, '', chkFocusFlg, this);

            if (result[0] != "success")
            {
                this.gfn_alert(result[0],"저장정보","","question");
                this.dsGibonJeongbo.set_rowposition(result[1]); //데이터셋 변경
                return false;
            }

        	if(this.dsGibonJeongbo.rowcount < 1)
            {
                this.gfn_alert("교과목을 선택해주세요.","삭제정보","","warning");
                return false;
            }

        	if(this.dsGibonJeongbo.getColumn(0, "NCS_USE_DIVCD") != "4")
        	{
        		this.gfn_alert("활용구분이 역량기반이 아닌경우 저장할 수 없습니다.","삭제정보","","warning");
                return false;
        	}

        	if(this.dsGusungYoso.getRowType(this.dsGusungYoso.rowposition) == Dataset.ROWTYPE_INSERT || this.dsGusungYoso.getRowType(this.dsGusungYoso.rowposition) == Dataset.ROWTYPE_UPDATE)
        	{
        		var result = this.gfn_confirm( "구성요인 변경사항이 저장되지 않았습니다.\n구성요인을 저장하지 않고 저장 하시겠습니까?", "저장","", "question" );
        		if(result == 0)
        		{
        			return false;
        		}
        	}
        	else
        	{
        		var result = this.gfn_confirm( "저장 하시겠습니까?", "저장","", "question" );
        		if(result == 0)
        		{
        			return false;
        		}
        	}

        	// 대학핵심역량 과목정보 세팅
        	for(var i=this.dsHaeksim.rowcount-1;i>-1;i--)
        	{
        		this.dsHaeksim.setColumn(i,"YYYY",this.dsGibonJeongbo.getColumn(0,"YYYY"));
        		this.dsHaeksim.setColumn(i,"SEMESTER",this.dsGibonJeongbo.getColumn(0,"SEMESTER"));
        		this.dsHaeksim.setColumn(i,"DEPT_CD",this.dsGibonJeongbo.getColumn(0,"DEPT_CD"));
        		this.dsHaeksim.setColumn(i,"MAJOR_CD",this.dsGibonJeongbo.getColumn(0,"MAJOR_CD"));
        		this.dsHaeksim.setColumn(i,"DAYNIGHT_DIVCD",this.dsGibonJeongbo.getColumn(0,"DAYNIGHT_DIVCD"));
        		this.dsHaeksim.setColumn(i,"COMP_GRADE_CD",this.dsGibonJeongbo.getColumn(0,"COMP_GRADE_CD"));
        		this.dsHaeksim.setColumn(i,"SUBJECT_CD",this.dsGibonJeongbo.getColumn(0,"SUBJECT_CD"));
        	}

        	// 하위역량 과목정보 세팅
        	for(var i = 0; i < this.dsHawi.getRowCount(); i++)
        	{
        		this.dsHawi.setColumn(i,"YYYY",this.dsGibonJeongbo.getColumn(0,"YYYY"));
        		this.dsHawi.setColumn(i,"SEMESTER",this.dsGibonJeongbo.getColumn(0,"SEMESTER"));
        		this.dsHawi.setColumn(i,"DEPT_CD",this.dsGibonJeongbo.getColumn(0,"DEPT_CD"));
        		this.dsHawi.setColumn(i,"MAJOR_CD",this.dsGibonJeongbo.getColumn(0,"MAJOR_CD"));
        		this.dsHawi.setColumn(i,"DAYNIGHT_DIVCD",this.dsGibonJeongbo.getColumn(0,"DAYNIGHT_DIVCD"));
        		this.dsHawi.setColumn(i,"COMP_GRADE_CD",this.dsGibonJeongbo.getColumn(0,"COMP_GRADE_CD"));
        		this.dsHawi.setColumn(i,"SUBJECT_CD",this.dsGibonJeongbo.getColumn(0,"SUBJECT_CD"));
        	}

        	// 장비 및 도구 과목정보 세팅
        	for(var i = 0; i < this.dsJangbiDogu.getRowCount(); i++)
        	{
        		this.dsJangbiDogu.setColumn(i,"YYYY",this.dsGibonJeongbo.getColumn(0,"YYYY"));
        		this.dsJangbiDogu.setColumn(i,"SEMESTER",this.dsGibonJeongbo.getColumn(0,"SEMESTER"));
        		this.dsJangbiDogu.setColumn(i,"DEPT_CD",this.dsGibonJeongbo.getColumn(0,"DEPT_CD"));
        		this.dsJangbiDogu.setColumn(i,"MAJOR_CD",this.dsGibonJeongbo.getColumn(0,"MAJOR_CD"));
        		this.dsJangbiDogu.setColumn(i,"DAYNIGHT_DIVCD",this.dsGibonJeongbo.getColumn(0,"DAYNIGHT_DIVCD"));
        		this.dsJangbiDogu.setColumn(i,"COMP_GRADE_CD",this.dsGibonJeongbo.getColumn(0,"COMP_GRADE_CD"));
        		this.dsJangbiDogu.setColumn(i,"SUBJECT_CD",this.dsGibonJeongbo.getColumn(0,"SUBJECT_CD"));
        	}

        	// 교수학습방법 과목정보 세팅
        	for(var i=this.dsGyosu.rowcount-1;i>-1;i--)
        	{
        		this.dsGyosu.setColumn(i,"YYYY",this.dsGibonJeongbo.getColumn(0,"YYYY"));
        		this.dsGyosu.setColumn(i,"SEMESTER",this.dsGibonJeongbo.getColumn(0,"SEMESTER"));
        		this.dsGyosu.setColumn(i,"DEPT_CD",this.dsGibonJeongbo.getColumn(0,"DEPT_CD"));
        		this.dsGyosu.setColumn(i,"MAJOR_CD",this.dsGibonJeongbo.getColumn(0,"MAJOR_CD"));
        		this.dsGyosu.setColumn(i,"DAYNIGHT_DIVCD",this.dsGibonJeongbo.getColumn(0,"DAYNIGHT_DIVCD"));
        		this.dsGyosu.setColumn(i,"COMP_GRADE_CD",this.dsGibonJeongbo.getColumn(0,"COMP_GRADE_CD"));
        		this.dsGyosu.setColumn(i,"SUBJECT_CD",this.dsGibonJeongbo.getColumn(0,"SUBJECT_CD"));
        	}

        	// 평가방법 과목정보 세팅
        	for(var i=this.dsPyeongGa.rowcount-1;i>-1;i--)
        	{
        		this.dsPyeongGa.setColumn(i,"YYYY",this.dsGibonJeongbo.getColumn(0,"YYYY"));
        		this.dsPyeongGa.setColumn(i,"SEMESTER",this.dsGibonJeongbo.getColumn(0,"SEMESTER"));
        		this.dsPyeongGa.setColumn(i,"DEPT_CD",this.dsGibonJeongbo.getColumn(0,"DEPT_CD"));
        		this.dsPyeongGa.setColumn(i,"MAJOR_CD",this.dsGibonJeongbo.getColumn(0,"MAJOR_CD"));
        		this.dsPyeongGa.setColumn(i,"DAYNIGHT_DIVCD",this.dsGibonJeongbo.getColumn(0,"DAYNIGHT_DIVCD"));
        		this.dsPyeongGa.setColumn(i,"COMP_GRADE_CD",this.dsGibonJeongbo.getColumn(0,"COMP_GRADE_CD"));
        		this.dsPyeongGa.setColumn(i,"SUBJECT_CD",this.dsGibonJeongbo.getColumn(0,"SUBJECT_CD"));
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
            var strUrl      = "/prj/UC/UC01/Save_2122101_M.do";
            var strInDs     = "dsGibonJeongbo=dsGibonJeongbo:a ";
        		strInDs	   += "dsHaeksim=dsHaeksim:a ";
        		strInDs    += "dsGyosu=dsGyosu:a ";
        		strInDs    += "dsPyeongGa=dsPyeongGa:a";
            var strOutDs    = "";
            var strArg      = "status=" + status + " ";
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
            this.gfn_getRowCount(this.stRowCnt,this.dsMaster);
        	this.gfn_getRowCount(this.tab.YeokRyangMapping.form.stRowCnt,this.dsHawi);
        	this.gfn_getRowCount(this.tab.JangbiDogu.form.stRowCnt,this.dsJangbiDogu);
        	this.fn_Ret();
        };

        /**********************************************************************
                15. 하위역량 저장 함수 선언
        ***********************************************************************/
        this.tab_YeokRyangMapping_btnSave_onclick = function(obj,e)
        {
            if(this.dsHawi.rowcount > 0)
            {
                for(var i=0;i<this.dsHawi.rowcount; i++)
                {
                    if(this.dsHawi.getColumn(i,"CHK") == "0")
                    {
                        continue;
                    }
                    this.dsHawi.setColumn(i,"CHK","0");
                }
            }

        	if(!this.gfn_isUpdate(this.dsHawi))
            {
                this.gfn_alert("변경된 이력이 없습니다.","저장정보","","question");
                return false;
            }

        	// 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
            var chkFocusFlg = true;
            var result      = this.gfn_cmmnChkEssentialItem(this.dsHawi, this.lvchkColidHawiDs, this.lvchkColNameHawiDs, this.tab.YeokRyangMapping.form.grdHawiYeokryang, chkFocusFlg, this);

            if (result[0] != "success")
            {
                this.gfn_alert(result[0],"저장정보","","question");
                this.dsHawi.set_rowposition(result[1]); //데이터셋 변경
                return false;
            }

        	var result = this.gfn_confirm( "저장 하시겠습니까?", "저장","", "question" );
            if(result == 0)
            {
                return false;
            }
            this.fn_HawiSave();
        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_HawiSave = function()
        {
            var strSvc      = "HawiSave";
            var strUrl      = "/prj/UC/UC01/hawiSave_2122101_T02.do";
            var strInDs     = "ds_dInput=ds_dInput:a ";
        		strInDs	   += "dsHawi=dsHawi:u ";
            var strOutDs    = "dsHawi=dsHawi";
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
        this.fn_PostHawiSave = function()
        {
        	this.gfn_getRowCount(this.tab.YeokRyangMapping.form.stRowCnt, this.dsHawi);
        };

        /**********************************************************************
                16. 구성요인 저장 함수 선언
        ***********************************************************************/
        this.tab_YeokRyangMapping_btnSave2_onclick = function(obj,e)
        {
            if(this.dsGusungYoso.rowcount > 0)
            {
                for(var i=0;i<this.dsGusungYoso.rowcount; i++)
                {
                    if(this.dsGusungYoso.getColumn(i,"CHK") == "0")
                    {
                        continue;
                    }
                    this.dsGusungYoso.setColumn(i,"CHK","0");
                }
            }

        	if(!this.gfn_isUpdate(this.dsGusungYoso))
            {
                this.gfn_alert("변경된 이력이 없습니다.","저장정보","","question");
                return false;
            }

        	if(this.dsHawi.getRowType(this.dsHawi.rowposition) == Dataset.ROWTYPE_INSERT || this.dsHawi.getRowType(this.dsHawi.rowposition) == Dataset.ROWTYPE_UPDATE)
        	{
        		this.alert("먼저 하위역량 변경사항을 저장해주시기 바랍니다.");
        		return false;
        	}

        	// 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
            var chkFocusFlg = true;
            var result      = this.gfn_cmmnChkEssentialItem(this.dsGusungYoso, this.lvchkColidGusungDs, this.lvchkColNameGusungDs, this.tab.YeokRyangMapping.form.grdGusungYoso, chkFocusFlg, this);

            if (result[0] != "success")
            {
                this.gfn_alert(result[0],"저장정보","","question");
                this.dsGusungYoso.set_rowposition(result[1]); //데이터셋 변경
                return false;
            }

        	var result = this.gfn_confirm( "저장 하시겠습니까?", "저장","", "question" );
            if(result == 0)
            {
                return false;
            }
            this.fn_GusungSave();
        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_GusungSave = function()
        {
            var strSvc      = "GusungSave";
            var strUrl      = "/prj/UC/UC01/gusungSave_2122101_T02.do";
            var strInDs     = "ds_dInput=ds_dInput:a ";
        		strInDs	   += "dsGusungYoso=dsGusungYoso:u ";
            var strOutDs    = "dsGusungYoso=dsGusungYoso";
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
        this.fn_PostGusungSave = function()
        {
        	this.gfn_getRowCount(this.tab.YeokRyangMapping.form.stRowCnt2, this.dsGusungYoso);
        };

        /**********************************************************************
                17. 장비 및 도구 저장 함수 선언
        ***********************************************************************/
        this.tab_JangbiDogu_btnSave_onclick = function(obj,e)
        {
            if(this.dsJangbiDogu.rowcount > 0)
            {
                for(var i=0;i<this.dsJangbiDogu.rowcount; i++)
                {
                    if(this.dsJangbiDogu.getColumn(i,"CHK") == "0")
                    {
                        continue;
                    }
                    this.dsJangbiDogu.setColumn(i,"CHK","0");
                }
            }

        	if(!this.gfn_isUpdate(this.dsJangbiDogu))
            {
                this.gfn_alert("변경된 이력이 없습니다.","저장정보","","question");
                return false;
            }

        	// 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
            var chkFocusFlg = true;
            var result      = this.gfn_cmmnChkEssentialItem(this.dsJangbiDogu, this.lvchkColidEquipDs, this.lvchkColNameEquipDs, this.tab.JangbiDogu.form.grdJangbiDogu, chkFocusFlg, this);

            if (result[0] != "success")
            {
                this.gfn_alert(result[0],"저장정보","","question");
                this.dsJangbiDogu.set_rowposition(result[1]); //데이터셋 변경
                return false;
            }

        	var result = this.gfn_confirm( "저장 하시겠습니까?", "저장","", "question" );
            if(result == 0)
            {
                return false;
            }
            this.fn_EquipSave();
        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_EquipSave = function()
        {
            var strSvc      = "EquipSave";
            var strUrl      = "/prj/UC/UC01/Save_2122101_T03.do";
            var strInDs     = "ds_dInput=ds_dInput:a ";
        		strInDs	   += "dsJangbiDogu=dsJangbiDogu:u ";
            var strOutDs    = "dsJangbiDogu=dsJangbiDogu";
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
        this.fn_PostEquipSave = function()
        {
        	this.gfn_getRowCount(this.tab.JangbiDogu.form.stRowCnt, this.dsJangbiDogu);
        };

        /**********************************************************************
                16. 교과목명세서 가져오기
        ***********************************************************************/
        /**
         * 기능 : 삭제 완료 후 복사
         */
        this.fn_Copy = function()
        {
        	var strSvc      = "Copy";
            var strUrl      = "/prj/UC/UC01/Copy_2122101_P01.do";
        	var strInDs     = "dsCopy=dsCopy:a";
            var strOutDs    = "";
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
        this.fn_PostCopy = function()
        {
        	this.fn_Ret();
        };
        /**********************************************************************
                17. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 체크
         */
        this.tab_YeokRyangMapping_grdHawiYeokryang_onheadclick = function(obj,e)
        {
        	if(e.cell == this.tab.YeokRyangMapping.form.grdHawiYeokryang.getBindCellIndex("body","CHK"))
            {
                this.gfn_checkAll(obj, e);
            }
        };

        this.tab_JangbiDogu_grdJangbiDogu_onheadclick = function(obj,e)
        {
        	if(e.cell == this.tab.JangbiDogu.form.grdJangbiDogu.getBindCellIndex("body","CHK"))
            {
                this.gfn_checkAll(obj, e);
            }
        };

        /**
         *      그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj,e)
        {
            if(e.cell != this.grdMaster.getBindCellIndex("body","CHK"))
            {
                this.gfn_gridSort(obj,e);
            }
        };

        this.tab_YeokRyangMapping_grdHawiYeokryang_onheaddblclick = function(obj,e)
        {
        	if(e.cell != this.tab.YeokRyangMapping.form.grdHawiYeokryang.getBindCellIndex("body","CHK") && e.cell != 1)
            {
                this.gfn_gridSort(obj,e);
            }
        };

        this.tab_JangbiDogu_grdJangbiDogu_onheaddblclick = function(obj,e)
        {
        	if(e.cell != this.tab_JangbiDogu_grdJangbiDogu.getBindCellIndex("body","CHK") && e.cell != 1)
            {
                this.gfn_gridSort(obj,e);
            }
        };


        // 엔터키 누르면 조회
        this.divM_spnSearchYYYY_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"YYYY",obj.value);
        		this.fn_Ret();
        	}
        };

        // 엔터키 누르면 조회
        this.divM_cboSearchHakgi_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"SEMESTER",obj.value);
        		this.fn_Ret();
        	}
        };

        // 엔터키 누르면 조회
        this.divM_cboSearchGyeYeolHakGwa_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"DEPT_CD",obj.value);
        		this.fn_Ret();
        	}
        };

        // 엔터키 누르면 조회
        this.divM_cboSearchNCSGubun_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"NCS_USE_DIVCD",obj.value);
        		this.fn_Ret();
        	}
        };

        // 엔터키 누르면 조회
        this.divM_cboSearchLMSGubun_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"LMS_USE_YN",obj.value);
        		this.fn_Ret();
        	}
        };

        // 교과목명세서 출력
        this.fn_Print = function()
        {
        	if(this.dsMaster.rowcount == 0)
        	{
        		this.gfn_alert("교과목을 선택해주세요.","저장정보","","question");
        		return false;
        	}
        	var YYYY     		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'YYYY');
        	var SEMESTER 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'SEMESTER');
        	var DEPT_CD 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'DEPT_CD');
        	var MAJOR_CD 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'MAJOR_CD');
        	var DAYNIGHT_DIVCD 	= this.dsMaster.getColumn(this.dsMaster.rowposition, 'DAYNIGHT_DIVCD');
        	var COMP_GRADE_CD 	= this.dsMaster.getColumn(this.dsMaster.rowposition, 'COMP_GRADE_CD');
        	var SUBJECT_CD 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'SUBJECT_CD');

        	var param = { YYYY     			: YYYY
        				, SEMESTER 			: SEMESTER
        				, DEPT_CD 			: DEPT_CD
        				, MAJOR_CD 			: MAJOR_CD
        				, DAYNIGHT_DIVCD 	: DAYNIGHT_DIVCD
        				, COMP_GRADE_CD 	: COMP_GRADE_CD
        				, SUBJECT_CD 		: SUBJECT_CD
        				};

        	this.gfn_commonUtils_report('UC01/UC01_2122101_M_01.crf',  param);
        };

        // NCS 활용여부가 미활용일 경우 장비 및 도구 탭 비활성화
        this.divD_cboSearchNCS_onitemchanged = function(obj,e)
        {
        	if(this.divD.form.cboSearchNCS.value == 3)
        	{
        		this.tab.JangbiDogu.set_enable(false);
        	}
        	else
        	{
        		this.tab.JangbiDogu.set_enable(true);
        	}
        };

        // 팝업 명 삭제 시 코드 초기화
        // ds_input
        this.ds_input_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "SUBJECT_NM") {
        	   if (this.gfn_isNull(e.newvalue)) {
        	       obj.setColumn(obj.rowposition, "SUBJECT_CD", "");
        	   } else {
        			if (e.oldvalue != e.newvalue)
        			{
        				this.fn_setCallGwamokPopup(obj.name, e.newvalue);
        			}
        	   }
        	}
        	else if (e.columnid == "PROF_NM") {
        	   if (this.gfn_isNull(e.newvalue)) {
        	       obj.setColumn(obj.rowposition, "PROF_CD", "");
        	   } else {
        			if (e.oldvalue != e.newvalue)
        			{
        				this.fn_setCallSawonPopup(e.newvalue);
        			}
        	   }
        	}
        };

        // 팝업 명 삭제 시 코드 초기화
        // dsGibonJeongbo
        this.dsGibonJeongbo_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "SUBJECT_CD_NM") {
        	   if (this.gfn_isNull(e.newvalue)) {
        	       obj.setColumn(obj.rowposition, "SUBJECT_CD", "");
        	   } else {
        			if (e.oldvalue != e.newvalue)
        			{
        				this.fn_setCallGwamokPopup(obj.name, e.newvalue);
        			}
        	   }
        	}
        };

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
        	var value = false;

            if(this.gfn_isUpdate(this.dsGibonJeongbo))
        	{
        		value = true;
        	}
        	else if(this.gfn_isUpdate(this.dsHawi))
        	{
        		value = true;
        	}
        	else if(this.gfn_isUpdate(this.dsJangbiDogu))
        	{
        		value = true;
        	}
        	else if(this.gfn_isUpdate(this.dsGusungYoso))
        	{
        		value = true;
        	}

        	return value;
        };

        /**
          * 구성요인 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_gusungbeforeclose = function()
        {
        	var value = false;

        	if(this.gfn_isUpdate(this.dsGusungYoso))
        	{
        		value = true;
        	}

        	return value;
        };

        /**********************************************************************
                18. 팝업
        ***********************************************************************/

        // 마스터 교과목 팝업
        this.divM_btnSearchGwamok_onclick = function(obj,e)
        {
        	var gwamokCdNm = this.divM.form.edtSearchGwamokCd.value;
        	this.fn_setCallGwamokPopup(obj.name, gwamokCdNm);
        };

        // 디테일 교과목 팝업
        this.divD_btnSearchGwamok_onclick = function(obj,e)
        {
        	var gwamokCdNm = this.divD.form.edtSearchGwamokCd.value;
        	this.fn_setCallGwamokPopup(obj.name, gwamokCdNm);
        };

        // 사원 팝업
        this.divM_btnSearchSabeon_onclick = function(obj,e)
        {
        	var sawonCdNm = this.divM.form.edtSearchSabeon.value;
        	this.fn_setCallSawonPopup(sawonCdNm);
        };

        // 교과목명세서 가져오기 팝업
        this.fn_Get = function()
        {
        	if(this.dsGibonJeongbo.rowcount < 1)
        	{
        		this.gfn_alert("교과목을 선택해주세요.","저장정보","","question");
        	}
        	else
        	{
        		var yyyy = this.dsMaster.getColumn(this.dsMaster.rowposition,"YYYY");
        		var semester = this.dsMaster.getColumn(this.dsMaster.rowposition,"SEMESTER");
        		var deptCd = this.dsMaster.getColumn(this.dsMaster.rowposition,"DEPT_CD");
        		var majorCd = this.dsMaster.getColumn(this.dsMaster.rowposition,"MAJOR_CD");
        		var daynightDivcd = this.dsMaster.getColumn(this.dsMaster.rowposition,"DAYNIGHT_DIVCD");
        		var compGradeCd = this.dsMaster.getColumn(this.dsMaster.rowposition,"COMP_GRADE_CD");
        		var gwamokCd = this.dsMaster.getColumn(this.dsMaster.rowposition,"SUBJECT_CD");
        		var gwamokNm = this.dsMaster.getColumn(this.dsMaster.rowposition,"SUBJECT_CD_NM");

        		var oArg = {  yyyy:yyyy
        					, semester:semester
        					, deptCd:deptCd
        					, majorCd:majorCd
        					, daynightDivcd:daynightDivcd
        					, compGradeCd:compGradeCd
        					, gwamokCd:gwamokCd
        					, gwamokNm:gwamokNm
        					};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";
        		this.gfn_openPopup( "copy","UC01::UC01_2122101_P01.xfdl",oArg,sPopupCallBack,oOption);
        	}
        };

        this.fn_setCallGwamokPopup = function(strObjName, strSearchValue)
        {
        	var yyyy = this.divM.form.spnSearchYYYY.value;
        	var semester = this.divM.form.cboSearchHakgi.value;
        	var sabeon = this.divM.form.edtSearchSabeon.value;
        	var hakgwaCdNm = this.divM.form.cboSearchGyeYeolHakGwa.value;

        	this.dsGwamok.clearData();

        	this.ds_input1.setColumn(this.ds_input1.rowposition, "SUBJECT_CD_NM", strSearchValue);
        	this.ds_input1.setColumn(this.ds_input1.rowposition, "YYYY", yyyy);
        	this.ds_input1.setColumn(this.ds_input1.rowposition, "SEMESTER", semester);
        	this.ds_input1.setColumn(this.ds_input1.rowposition, "SABEON", sabeon);

        	if(!this.gfn_isNull(strSearchValue))
        	{
        		var strSvc      = "SearchGwamok";
        		var strUrl      = "/prj/UC/UC01/Retrieve_2122101_P02.do";
        		var strInDs     = "ds_input=ds_input1";
        		var strOutDs    = "dsGwamok=dsMaster";
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
        		if (strObjName == "ds_input" || strObjName == "btnSearchGwamokMaster"){
        			this.ds_input.setColumn(this.ds_input.rowposition, "SUBJECT_CD", this.dsGwamok.getColumn(0,"SUBJECT_CD"));
        			this.ds_input.setColumn(this.ds_input.rowposition, "SUBJECT_NM", this.dsGwamok.getColumn(0,"SUBJECT_NM"));
        		} else {
        			this.dsGibonJeongbo.setColumn(0, "SUBJECT_CD", this.dsGwamok.getColumn(0,"SUBJECT_CD"));
        			this.dsGibonJeongbo.setColumn(0, "SUBJECT_CD_NM", this.dsGwamok.getColumn(0,"SUBJECT_NM"));
        		}
        	}
        	else
        	{
        		var oArg = {yyyy:yyyy, semester:semester, sabeon:sabeon, gwamokCdNm:strSearchValue};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";

        		if (strObjName == "ds_input" || strObjName == "btnSearchGwamokMaster"){
        			this.gfn_openPopup( "gwamokM","UC01::UC01_2122101_P02.xfdl",oArg,sPopupCallBack,oOption);
        		} else {
        			this.gfn_openPopup( "gwamokD","UC01::UC01_2122101_P02.xfdl",oArg,sPopupCallBack,oOption);
        		}
        	}
        };

        this.fn_setCallSawonPopup = function(strSearchValue)
        {
        	this.dsSawon.clearData();

        	this.ds_input1.setColumn(this.ds_input1.rowposition, "SAWON_CD_NM", strSearchValue);

        	if(!this.gfn_isNull(strSearchValue))
        	{
        		var strSvc      = "SearchSawon";
        		var strUrl      = "/prj/UC/UC01/Retrieve_2122101_P03.do";
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
        		this.ds_input.setColumn(this.ds_input.rowposition, "PROF_CD", this.dsSawon.getColumn(0,"USER_ID"));
        		this.ds_input.setColumn(this.ds_input.rowposition, "PROF_NM", this.dsSawon.getColumn(0,"USER_NM"));
        	} else
        	{
        		var oArg = {sawonCdNm:strSearchValue};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";
        		this.gfn_openPopup( "sawon","UC01::UC01_2122101_P03.xfdl",oArg,sPopupCallBack,oOption);
        	}
        };

        /**********************************************************************
                19. 동적 체크박스
        ***********************************************************************/

        /**
         * checkBox 초기화(모든 체크박스를 삭제)
         */
        this.fn_setObjCheckBoxDestroy = function(objForm)
        {
        	var arrComp  = objForm.components;
        	var nLength = arrComp.length-1;
        	for(var i=nLength; i>=0; i--)
        	{
        		var objComp = arrComp[i];
        		if(objComp instanceof nexacro.CheckBox)
        		{
        			var objCp = objForm.removeChild(objComp.name);
        			objCp.destroy();
        			objCp = null;
        		}
        	}
        };

        // 대학핵심역량 체크박스를 클릭했을때
        this.fn_isHaeksimClick = function()
        {
        	var arrComp = this.tab.YeokRyangMapping.form.divHaeksimCheckbox.form.components;

        	for(var i=0; i<arrComp.length; i++)
        	{
        		var objComp = arrComp[i];

        		if(objComp.value == false)
        		{
        			this.dsHaeksim.setColumn(i, "CORE_COMP_DIVCD", null);
        		}
        		else
        		{
        			this.dsHaeksim.setColumn(i, "CORE_COMP_DIVCD", objComp.value);
        		}
        	}
        }

        // 교수학습방법 체크박스를 클릭했을때
        this.fn_isGyosuClick = function()
        {
        	var arrComp = this.tab.GyosuHakseub.form.divGyosuCheckbox.form.components;

        	for(var i=0; i<arrComp.length; i++)
        	{
        		var objComp = arrComp[i];

        		// 기타일때
        		if(i == 5)
        		{
        			if(objComp.value == false)
        			{
        				this.dsGyosu.setColumn(i, "SUBITEM_CD", null);
        				this.dsGyosu.setColumn(i, "NOTE", null);
        				this.tab.GyosuHakseub.form.edtGyosuGita.set_readonly(true);
        				this.tab.GyosuHakseub.form.edtGyosuGita.set_value(null);
        			}
        			else
        			{
        				this.dsGyosu.setColumn(i, "SUBITEM_CD", objComp.value);
        				this.tab.GyosuHakseub.form.edtGyosuGita.set_readonly(false);
        			}
        		}
        		else
        		{
        			if(objComp.value == false)
        			{
        				this.dsGyosu.setColumn(i, "SUBITEM_CD", null);
        			}
        			else
        			{
        				this.dsGyosu.setColumn(i, "SUBITEM_CD", objComp.value);
        			}
        		}
        	}
        };

        // 평가방법 체크박스를 클릭했을때
        this.fn_isPyeongGaClick = function()
        {
        	var arrComp = this.tab.GyosuHakseub.form.divPyeongGaCheckbox.form.components;

        	for(var i=0; i<arrComp.length; i++)
        	{
        		var objComp = arrComp[i];

        		// 기타일때
        		if(i == 12)
        		{
        			if(objComp.value == false)
        			{
        				this.dsPyeongGa.setColumn(i, "SUBITEM_CD", null);
        				this.dsPyeongGa.setColumn(i, "NOTE", null);
        				this.tab.GyosuHakseub.form.edtPyeongGaGita.set_readonly(true);
        				this.tab.GyosuHakseub.form.edtPyeongGaGita.set_value(null);
        			}
        			else
        			{
        				this.dsPyeongGa.setColumn(i, "SUBITEM_CD", objComp.value);
        				this.tab.GyosuHakseub.form.edtPyeongGaGita.set_readonly(false);
        			}
        		}
        		else
        		{
        			if(objComp.value == false)
        			{
        				this.dsPyeongGa.setColumn(i, "SUBITEM_CD", null);
        			}
        			else
        			{
        				this.dsPyeongGa.setColumn(i, "SUBITEM_CD", objComp.value);
        			}
        		}
        	}
        };

        // 기타창에 입력시 기타에 해당하는 로우의 NOTE에 값 입력
        this.tab_GyosuHakseub_edtGyosuGita_onchanged = function(obj,e)
        {
        	this.dsGyosu.setColumn(5, "NOTE", this.tab.GyosuHakseub.form.edtGyosuGita.value);
        };

        this.tab_GyosuHakseub_edtPyeongGaGita_onchanged = function(obj,e)
        {
        	this.dsPyeongGa.setColumn(12, "NOTE", this.tab.GyosuHakseub.form.edtPyeongGaGita.value);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster.addEventHandler("oncellclick",this.grdMaster_oncellclick,this);
            this.divM.form.cboSearchNCSGubun.addEventHandler("onkeydown",this.divM_cboSearchNCSGubun_onkeydown,this);
            this.divM.form.cboSearchGyeYeolHakGwa.addEventHandler("onlbuttondown",this.divM_cboSearchGyeYeolHakGwa_onlbuttondown,this);
            this.divM.form.cboSearchGyeYeolHakGwa.addEventHandler("onitemchanged",this.divM_cboSearchGyeYeolHakGwa_onitemchanged,this);
            this.divM.form.cboSearchGyeYeolHakGwa.addEventHandler("onkeydown",this.divM_cboSearchGyeYeolHakGwa_onkeydown,this);
            this.divM.form.cboSearchLMSGubun.addEventHandler("onkeydown",this.divM_cboSearchLMSGubun_onkeydown,this);
            this.divM.form.btnSearchGwamokMaster.addEventHandler("onclick",this.divM_btnSearchGwamok_onclick,this);
            this.divM.form.spnSearchYYYY.addEventHandler("onkeydown",this.divM_spnSearchYYYY_onkeydown,this);
            this.divM.form.cboSearchHakgi.addEventHandler("onkeydown",this.divM_cboSearchHakgi_onkeydown,this);
            this.divM.form.btnSearchSabeon.addEventHandler("onclick",this.divM_btnSearchSabeon_onclick,this);
            this.divD.form.cboSearchNCS.addEventHandler("onitemchanged",this.divD_cboSearchNCS_onitemchanged,this);
            this.divD.form.cboSearchNCS.addEventHandler("oninnerdatachanged",this.divD_cboSearchNCS_oninnerdatachanged,this);
            this.divD.form.btnSearchGwamokDetail.addEventHandler("onclick",this.divD_btnSearchGwamok_onclick,this);
            this.tab.GibonJeongbo.form.stc_13_00_00_00_00.addEventHandler("onclick",this.tab_00_Tabpage1_stc_13_00_00_00_00_onclick,this);
            this.tab.GibonJeongbo.form.stc_13_00_00_00_00_00.addEventHandler("onclick",this.tab_00_Tabpage1_stc_13_00_00_00_00_onclick,this);
            this.tab.GibonJeongbo.form.stc_13_00_00_00_00_00_00.addEventHandler("onclick",this.tab_00_Tabpage1_stc_13_00_00_00_00_onclick,this);
            this.tab.YeokRyangMapping.form.grdHawiYeokryang.addEventHandler("onheaddblclick",this.tab_YeokRyangMapping_grdHawiYeokryang_onheaddblclick,this);
            this.tab.YeokRyangMapping.form.grdHawiYeokryang.addEventHandler("onheadclick",this.tab_YeokRyangMapping_grdHawiYeokryang_onheadclick,this);
            this.tab.YeokRyangMapping.form.stc_13_00_00_00_00.addEventHandler("onclick",this.tab_00_Tabpage1_stc_13_00_00_00_00_onclick,this);
            this.tab.YeokRyangMapping.form.btnNew.addEventHandler("onclick",this.tab_YeokRyangMapping_btnNew_onclick,this);
            this.tab.YeokRyangMapping.form.btnDel.addEventHandler("onclick",this.tab_YeokRyangMapping_btnDel_onclick,this);
            this.tab.YeokRyangMapping.form.grdGusungYoso.addEventHandler("onheaddblclick",this.tab_YeokRyangMapping_grdHawiYeokryang_onheaddblclick,this);
            this.tab.YeokRyangMapping.form.grdGusungYoso.addEventHandler("onheadclick",this.tab_YeokRyangMapping_grdHawiYeokryang_onheadclick,this);
            this.tab.YeokRyangMapping.form.btnNew2.addEventHandler("onclick",this.tab_YeokRyangMapping_btnNew2_onclick,this);
            this.tab.YeokRyangMapping.form.btnDel2.addEventHandler("onclick",this.tab_YeokRyangMapping_btnDel2_onclick,this);
            this.tab.YeokRyangMapping.form.btnSave2.addEventHandler("onclick",this.tab_YeokRyangMapping_btnSave2_onclick,this);
            this.tab.YeokRyangMapping.form.btnSave.addEventHandler("onclick",this.tab_YeokRyangMapping_btnSave_onclick,this);
            this.tab.JangbiDogu.form.grdJangbiDogu.addEventHandler("onheaddblclick",this.tab_JangbiDogu_grdJangbiDogu_onheaddblclick,this);
            this.tab.JangbiDogu.form.grdJangbiDogu.addEventHandler("onheadclick",this.tab_JangbiDogu_grdJangbiDogu_onheadclick,this);
            this.tab.JangbiDogu.form.btnDel.addEventHandler("onclick",this.tab_JangbiDogu_btnDel_onclick,this);
            this.tab.JangbiDogu.form.btnNew.addEventHandler("onclick",this.tab_JangbiDogu_btnNew_onclick,this);
            this.tab.JangbiDogu.form.btnSave.addEventHandler("onclick",this.tab_JangbiDogu_btnSave_onclick,this);
            this.tab.GyosuHakseub.form.stc_14_00_00_01_00_00_00_00.addEventHandler("onclick",this.tab_Janghak_stc_14_00_00_01_00_00_00_00_onclick,this);
            this.tab.GyosuHakseub.form.edtGyosuGita.addEventHandler("onchanged",this.tab_GyosuHakseub_edtGyosuGita_onchanged,this);
            this.tab.GyosuHakseub.form.stc_14_00_00_01_00_00_00_00_00.addEventHandler("onclick",this.tab_Janghak_stc_14_00_00_01_00_00_00_00_onclick,this);
            this.tab.GyosuHakseub.form.edtPyeongGaGita.addEventHandler("onchanged",this.tab_GyosuHakseub_edtPyeongGaGita_onchanged,this);
            this.tab.GyosuHakseub.form.divGyosuCheckbox.addEventHandler("onlbuttondown",this.tab_GyosuHakseub_divGyosuCheckbox_onlbuttondown,this);
            this.Static01_01_00_00_00_00.addEventHandler("onclick",this.Static01_01_00_00_00_00_onclick,this);
            this.dsMaster.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.ds_input.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
            this.dsGibonJeongbo.addEventHandler("oncolumnchanged",this.dsGibonJeongbo_oncolumnchanged,this);
            this.dsHawi.addEventHandler("onrowposchanged",this.dsHawi_onrowposchanged,this);
            this.dsHawi.addEventHandler("canrowposchange",this.dsHawi_canrowposchange,this);
        };
        this.loadIncludeScript("UC01_2122101_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
