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
            this.set_titletext("강의계획서");
            this.set_scrolltype("both");
            this.set_dragscrolltype("both");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,1700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMaster", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"2\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DEPT_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MAJOR_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DAYNIGHT_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"DAYNIGHT_DIVCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_GRADE_CD\" type=\"STRING\" size=\"5\"/><Column id=\"COMP_GRADE_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"SUBJECT_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LECTCLASS\" type=\"STRING\" size=\"3\"/><Column id=\"PROF_CD\" type=\"STRING\" size=\"30\"/><Column id=\"PROF_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WRITE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"EDUGOAL\" type=\"STRING\" size=\"2000\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"255\"/><Column id=\"TEL\" type=\"STRING\" size=\"15\"/><Column id=\"COMPLETE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"SHARE_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"NOTICE\" type=\"STRING\" size=\"1000\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/><Column id=\"NCS_USE_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"MNG_PLAN\" type=\"STRING\" size=\"4000\"/><Column id=\"IMPRO_EVALCONT\" type=\"STRING\" size=\"4000\"/><Column id=\"IMPROSUB_EVALCONT\" type=\"STRING\" size=\"4000\"/><Column id=\"IMPRO_MNG_WAY\" type=\"STRING\" size=\"4000\"/><Column id=\"DEEP_MNG_CONT\" type=\"STRING\" size=\"4000\"/><Column id=\"DEEPSUB_MNG_CONT\" type=\"STRING\" size=\"4000\"/><Column id=\"DEEP_MNG_TIME\" type=\"STRING\" size=\"4000\"/><Column id=\"DEEP_EDU_YN\" type=\"STRING\" size=\"1\"/><Column id=\"IMPRO_EDU_YN\" type=\"STRING\" size=\"1\"/><Column id=\"DEEP_EDU_PLACE\" type=\"STRING\" size=\"1000\"/><Column id=\"DEEP_EDU_TIME\" type=\"DATE\" size=\"8\"/><Column id=\"CONFIRM_YN\" type=\"STRING\" size=\"1\"/><Column id=\"TRANS_FINAL_DATA\" type=\"DATE\" size=\"8\"/><Column id=\"IMPRO_EDU_TIME\" type=\"DATE\" size=\"8\"/><Column id=\"IMPRO_EDU_PLACE\" type=\"STRING\" size=\"1000\"/><Column id=\"DEEP_EDU_LECTURER\" type=\"STRING\" size=\"100\"/><Column id=\"DEEP_EDU_DEPT\" type=\"STRING\" size=\"100\"/><Column id=\"IMPRO_IMPLE_TIME\" type=\"STRING\" size=\"100\"/><Column id=\"IMPRO_MNG_TIME\" type=\"STRING\" size=\"100\"/><Column id=\"SUBJECT_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"8\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"SUBJECT_CD\" type=\"STRING\" size=\"100\"/><Column id=\"SUBJECT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PROF_CD\" type=\"STRING\" size=\"10\"/><Column id=\"PROF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WRITE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"COMPLETE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"COMP_GRADE_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YYYY\"/><Col id=\"SEMESTER\"/><Col id=\"DEPT_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgi", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWriteYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCompleteYnM", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHaknyeon", this);
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
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"8\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"MAJOR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DAYNIGHT_DIVCD\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_GRADE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT_CD\" type=\"STRING\" size=\"100\"/><Column id=\"LECTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"PROF_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YYYY\"/><Col id=\"SEMESTER\"/><Col id=\"DEPT_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGibonJeongbo", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"2\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"MAJOR_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DAYNIGHT_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"DAYNIGHT_DIVCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_GRADE_CD\" type=\"STRING\" size=\"5\"/><Column id=\"COMP_GRADE_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"SUBJECT_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LECTCLASS\" type=\"STRING\" size=\"3\"/><Column id=\"PROF_CD\" type=\"STRING\" size=\"30\"/><Column id=\"PROF_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_DIVCD\" type=\"STRING\" size=\"256\"/><Column id=\"LECTSCORE\" type=\"STRING\" size=\"256\"/><Column id=\"LECTTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsIsu", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCompleteYnD", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMokpyo", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"2\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"MAJOR_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DAYNIGHT_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"COMP_GRADE_CD\" type=\"STRING\" size=\"5\"/><Column id=\"SUBJECT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"LECTCLASS\" type=\"STRING\" size=\"3\"/><Column id=\"PROF_CD\" type=\"STRING\" size=\"30\"/><Column id=\"WRITE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"EDUGOAL\" type=\"STRING\" size=\"2000\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"255\"/><Column id=\"TEL\" type=\"STRING\" size=\"15\"/><Column id=\"COMPLETE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"SHARE_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"NOTICE\" type=\"STRING\" size=\"1000\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/><Column id=\"NCS_USE_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"MNG_PLAN\" type=\"STRING\" size=\"4000\"/><Column id=\"NON_SUBJECT_NOTICE\" type=\"STRING\" size=\"256\"/><Column id=\"IMPRO_EVALCONT\" type=\"STRING\" size=\"4000\"/><Column id=\"IMPROSUB_EVALCONT\" type=\"STRING\" size=\"4000\"/><Column id=\"IMPRO_MNG_WAY\" type=\"STRING\" size=\"4000\"/><Column id=\"DEEP_MNG_CONT\" type=\"STRING\" size=\"4000\"/><Column id=\"DEEPSUB_MNG_CONT\" type=\"STRING\" size=\"4000\"/><Column id=\"DEEP_MNG_TIME\" type=\"STRING\" size=\"4000\"/><Column id=\"DEEP_EDU_YN\" type=\"STRING\" size=\"1\"/><Column id=\"IMPRO_EDU_YN\" type=\"STRING\" size=\"1\"/><Column id=\"DEEP_EDU_PLACE\" type=\"STRING\" size=\"1000\"/><Column id=\"DEEP_EDU_TIME\" type=\"DATE\" size=\"8\"/><Column id=\"CONFIRM_YN\" type=\"STRING\" size=\"1\"/><Column id=\"TRANS_FINAL_DATA\" type=\"DATE\" size=\"8\"/><Column id=\"IMPRO_EDU_TIME\" type=\"DATE\" size=\"8\"/><Column id=\"IMPRO_EDU_PLACE\" type=\"STRING\" size=\"1000\"/><Column id=\"DEEP_EDU_LECTURER\" type=\"STRING\" size=\"100\"/><Column id=\"DEEP_EDU_DEPT\" type=\"STRING\" size=\"100\"/><Column id=\"IMPRO_IMPLE_TIME\" type=\"STRING\" size=\"100\"/><Column id=\"IMPRO_MNG_TIME\" type=\"STRING\" size=\"100\"/><Column id=\"EDU_GOAL\" type=\"STRING\" size=\"256\"/><Column id=\"EDU_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"EDU_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"LECTSCORE\" type=\"STRING\" size=\"256\"/><Column id=\"LECTTM\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_DIVCD\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_COMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"NCS_USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSebu", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"2\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"MAJOR_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DAYNIGHT_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"COMP_GRADE_CD\" type=\"STRING\" size=\"5\"/><Column id=\"SUBJECT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"LECTCLASS\" type=\"STRING\" size=\"3\"/><Column id=\"PROF_CD\" type=\"STRING\" size=\"30\"/><Column id=\"DEPT_EDUGOAL_CD\" type=\"STRING\" size=\"4\"/><Column id=\"DEPT_EDUGOAL_NM\" type=\"STRING\" size=\"400\"/><Column id=\"MAIN_EDUGOAL_YN\" type=\"STRING\" size=\"1\"/><Column id=\"SORT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"CORR_DIVCD\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNCS", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBook", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"2\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"MAJOR_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DAYNIGHT_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"COMP_GRADE_CD\" type=\"STRING\" size=\"5\"/><Column id=\"SUBJECT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"LECTCLASS\" type=\"STRING\" size=\"3\"/><Column id=\"PROF_CD\" type=\"STRING\" size=\"30\"/><Column id=\"TXTBOOK_SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TXTBOOK_NM\" type=\"STRING\" size=\"500\"/><Column id=\"TXTBOOK_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"PUBLISHER\" type=\"STRING\" size=\"500\"/><Column id=\"WRITER\" type=\"STRING\" size=\"2000\"/><Column id=\"ISBN\" type=\"STRING\" size=\"13\"/><Column id=\"PUBYYYY\" type=\"STRING\" size=\"4\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBookDiv", this);
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


            obj = new Dataset("dsGyosu", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"2\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"MAJOR_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DAYNIGHT_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"COMP_GRADE_CD\" type=\"STRING\" size=\"5\"/><Column id=\"SUBJECT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"LECTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"PROF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SUBITEM_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"SUBITEM_CD\" type=\"STRING\" size=\"5\"/><Column id=\"NOTE\" type=\"STRING\" size=\"500\"/><Column id=\"CD_NM\" type=\"STRING\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPyeongGa", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"2\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"MAJOR_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DAYNIGHT_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"COMP_GRADE_CD\" type=\"STRING\" size=\"5\"/><Column id=\"SUBJECT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"LECTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"PROF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SUBITEM_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"SUBITEM_CD\" type=\"STRING\" size=\"5\"/><Column id=\"NOTE\" type=\"STRING\" size=\"500\"/><Column id=\"CD_NM\" type=\"STRING\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJangso", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"2\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"MAJOR_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DAYNIGHT_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"COMP_GRADE_CD\" type=\"STRING\" size=\"5\"/><Column id=\"SUBJECT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"LECTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"PROF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SUBITEM_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"SUBITEM_CD\" type=\"STRING\" size=\"5\"/><Column id=\"NOTE\" type=\"STRING\" size=\"500\"/><Column id=\"CD_NM\" type=\"STRING\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEvalplan", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"2\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"MAJOR_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DAYNIGHT_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"COMP_GRADE_CD\" type=\"STRING\" size=\"5\"/><Column id=\"SUBJECT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"LECTCLASS\" type=\"STRING\" size=\"3\"/><Column id=\"PROF_CD\" type=\"STRING\" size=\"30\"/><Column id=\"EVALITEM_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"EVALITEM_DIVCD_SORT\" type=\"STRING\" size=\"256\"/><Column id=\"POINT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"EVALSUMM\" type=\"STRING\" size=\"500\"/><Column id=\"EVALCONT\" type=\"STRING\" size=\"4000\"/><Column id=\"EVALWAY_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"EVALWAY_ETC\" type=\"STRING\" size=\"500\"/><Column id=\"EVALCONSIDER\" type=\"STRING\" size=\"2000\"/><Column id=\"EVALTIME_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"SHARE_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"DIAGEVAL_RESULT_USEPLAN\" type=\"STRING\" size=\"500\"/><Column id=\"PFMC_SCORE_RT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"KSAT_SCORE_RT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/><Column id=\"COMP_EVAL_YN\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEvalitem", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJuchaGyehoek", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"2\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"MAJOR_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DAYNIGHT_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"COMP_GRADE_CD\" type=\"STRING\" size=\"5\"/><Column id=\"SUBJECT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"LECTCLASS\" type=\"STRING\" size=\"3\"/><Column id=\"PROF_CD\" type=\"STRING\" size=\"30\"/><Column id=\"WEEK\" type=\"STRING\" size=\"3\"/><Column id=\"NCS_CD\" type=\"STRING\" size=\"18\"/><Column id=\"SORT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"LECT_CONT\" type=\"STRING\" size=\"4000\"/><Column id=\"NOTE\" type=\"STRING\" size=\"4000\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/><Column id=\"DEGR_COMP_SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"COMP_ELEM_CONT\" type=\"STRING\" size=\"2000\"/><Column id=\"JOB_COMP_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWeek", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPO", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"2\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"MAJOR_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DAYNIGHT_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"COMP_GRADE_CD\" type=\"STRING\" size=\"5\"/><Column id=\"SUBJECT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"LECTCLASS\" type=\"STRING\" size=\"3\"/><Column id=\"PROF_CD\" type=\"STRING\" size=\"30\"/><Column id=\"PO_CD\" type=\"STRING\" size=\"5\"/><Column id=\"PO_LV\" type=\"STRING\" size=\"5\"/><Column id=\"PO_CORR_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"PO_RATE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PO_EVALWAY\" type=\"STRING\" size=\"2000\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCorrDivcd", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPoLv", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPoCombo", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"PO_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"PO_CD\" type=\"STRING\" size=\"5\"/><Column id=\"PO_NM\" type=\"STRING\" size=\"2000\"/><Column id=\"L1_NM\" type=\"STRING\" size=\"2000\"/><Column id=\"L2_NM\" type=\"STRING\" size=\"2000\"/><Column id=\"L3_NM\" type=\"STRING\" size=\"2000\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDegrCombo", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"2\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"MAJOR_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DAYNIGHT_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"COMP_GRADE_CD\" type=\"STRING\" size=\"5\"/><Column id=\"SUBJECT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DEGR_COMP_SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DEGR_COMP_NM\" type=\"STRING\" size=\"2000\"/><Column id=\"NOTE\" type=\"STRING\" size=\"500\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsImproDeepNCS", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"2\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"MAJOR_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DAYNIGHT_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"COMP_GRADE_CD\" type=\"STRING\" size=\"5\"/><Column id=\"SUBJECT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"PROF_CD\" type=\"STRING\" size=\"30\"/><Column id=\"NCS_CD\" type=\"STRING\" size=\"18\"/><Column id=\"IMPRO_DEEP_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"LECTCLASS\" type=\"STRING\" size=\"3\"/><Column id=\"IMPRO_DEEP_SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"POINT\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsImproDeepNCSCombo", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"2\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"MAJOR_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DAYNIGHT_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"COMP_GRADE_CD\" type=\"STRING\" size=\"5\"/><Column id=\"SUBJECT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"LECTCLASS\" type=\"STRING\" size=\"3\"/><Column id=\"PROF_CD\" type=\"STRING\" size=\"30\"/><Column id=\"NCS_CD\" type=\"STRING\" size=\"18\"/><Column id=\"UP_NCS_CD\" type=\"STRING\" size=\"18\"/><Column id=\"NCS_CD_NM\" type=\"STRING\" size=\"4000\"/><Column id=\"CD_DIV\" type=\"STRING\" size=\"5\"/><Column id=\"NCS_DIVCD\" type=\"STRING\" size=\"20\"/><Column id=\"NCS_CDLV\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SORT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsComp", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"2\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"MAJOR_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DAYNIGHT_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"COMP_GRADE_CD\" type=\"STRING\" size=\"5\"/><Column id=\"SUBJECT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"PROF_CD\" type=\"STRING\" size=\"30\"/><Column id=\"LECTCLASS\" type=\"STRING\" size=\"3\"/><Column id=\"COMP_SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"COMP_NM\" type=\"STRING\" size=\"1000\"/><Column id=\"COMP_POSITION\" type=\"STRING\" size=\"100\"/><Column id=\"COMP_PERSON\" type=\"STRING\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsShare", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsImproDeepDiv", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGyoyukMokpyo", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"DEPT_EDUGOAL_CD\" type=\"STRING\" size=\"4\"/><Column id=\"DEPT_EDUGOAL_NM\" type=\"STRING\" size=\"400\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"MAIN_EDUGOAL_YN\" type=\"STRING\" size=\"1\"/><Column id=\"SORT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"CORR_DIVCD\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgwa", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"LECT_POSS_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("dsWeekTemp", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"JOB_COMP_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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


            obj = new Dataset("dsCopy", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"2\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"MAJOR_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DAYNIGHT_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"COMP_GRADE_CD\" type=\"STRING\" size=\"5\"/><Column id=\"SUBJECT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"LECTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"PROF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"YYYY_COPY\" type=\"STRING\" size=\"4\"/><Column id=\"SEMESTER_COPY\" type=\"STRING\" size=\"2\"/><Column id=\"DEPT_CD_COPY\" type=\"STRING\" size=\"10\"/><Column id=\"MAJOR_CD_COPY\" type=\"STRING\" size=\"10\"/><Column id=\"DAYNIGHT_DIVCD_COPY\" type=\"STRING\" size=\"5\"/><Column id=\"COMP_GRADE_CD_COPY\" type=\"STRING\" size=\"5\"/><Column id=\"SUBJECT_CD_COPY\" type=\"STRING\" size=\"10\"/><Column id=\"LECTCLASS_COPY\" type=\"STRING\" size=\"256\"/><Column id=\"PROF_CD_COPY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdMaster","0","123",null,"1577","1270",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"114\"/><Column size=\"57\"/><Column size=\"48\"/><Column size=\"183\"/><Column size=\"48\"/><Column size=\"81\"/><Column size=\"48\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"checkbox\" text=\"학과\"/><Cell col=\"1\" text=\"주야구분\"/><Cell col=\"2\" text=\"학년\"/><Cell col=\"3\" text=\"과목명\"/><Cell col=\"4\" text=\"분반\"/><Cell col=\"5\" text=\"담당교수\"/><Cell col=\"6\" text=\"작성여부\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:DEPT_CD_NM\" editmaxlength=\"256\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:DAYNIGHT_DIVCD_NM\" editmaxlength=\"256\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:COMP_GRADE_CD_NM\" editmaxlength=\"256\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:SUBJECT_CD_NM\" editmaxlength=\"256\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:LECTCLASS\" editmaxlength=\"3\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:PROF_CD_NM\" editmaxlength=\"256\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:WRITE_YN\" editmaxlength=\"1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divM","0","0",null,"69","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSearchGwamokCd","1072","9","200","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            this.divM.addChild(obj.name, obj);

            obj = new Edit("edtSearchGwamokNm","1314","9","200","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("5");
            obj.set_enable("true");
            this.divM.addChild(obj.name, obj);

            obj = new Static("stc_01_01","-28","36","110","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("12");
            obj.set_text("사번/성명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divM.addChild(obj.name, obj);

            obj = new Static("stc_01_00","2","9","80","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("13");
            obj.set_text("학년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divM.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","94","9","200","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("0");
            this.divM.addChild(obj.name, obj);

            obj = new Edit("edtSearchSabeon","94","36","200","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("6");
            obj.set_readonly("true");
            this.divM.addChild(obj.name, obj);

            obj = new Button("btnSearchSabeon","304","37","22","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_PopSrch");
            this.divM.addChild(obj.name, obj);

            obj = new Edit("edtSearchName","336","36","200","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("8");
            obj.set_enable("true");
            this.divM.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","317","9","80","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("14");
            obj.set_text("학기");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divM.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgi","412","9","124","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("1");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsHakgi");
            obj.set_text("");
            obj.set_index("-1");
            this.divM.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00","571","9","80","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("15");
            obj.set_text("계열/학과");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divM.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01","572","36","80","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("16");
            obj.set_text("작성여부");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divM.addChild(obj.name, obj);

            obj = new Combo("cboSearchJakseong","667","36","256","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("9");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsWriteYn");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divM.addChild(obj.name, obj);

            obj = new Combo("cboSearchGyeYeolHakGwa","667","9","256","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("2");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_innerdataset("dsGyeyeolHakgwa");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divM.addChild(obj.name, obj);

            obj = new Static("stc_01","947","9","110","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("17");
            obj.set_text("과목명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divM.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01_00","952","36","105","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("18");
            obj.set_text("작성완료여부");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divM.addChild(obj.name, obj);

            obj = new Combo("cboSearchJakseongWanryo","1072","36","200","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("10");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsCompleteYnM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divM.addChild(obj.name, obj);

            obj = new Button("btnSearchGwamok","1282","9","22","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_PopSrch");
            obj.set_text("");
            this.divM.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01_00_00","1238","36","105","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("19");
            obj.set_text("학년");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divM.addChild(obj.name, obj);

            obj = new Combo("cboSearchHaknyeon","1356","36","158","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("11");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsHaknyeon");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","67",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("20");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
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

            obj = new Static("Static01_01_00_00_02","26","31","1600","5",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("23");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 6pt/normal \"Arial\"");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","85","0","10","67",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("24");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","294","0","10","67",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("25");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","326","0","10","67",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("26");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00","402","0","10","37",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("27");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01","536","-1","56","70",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("28");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00","657","0","10","67",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("29");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00","923","-1","56","70",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("30");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00_00","1062","0","10","67",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("31");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00_00_00","1272","0","10","67",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("32");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00_00_00_00","1304","0","10","67",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("33");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00_00_00_00_00","1346","30","10","37",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("34");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divM.addChild(obj.name, obj);

            obj = new Static("stc_09_00","0","80",null,"22","1505",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("개설교과목 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stRowCnt","132","79",null,"24","1415",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("divD",null,"123","1242","96","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01","-9","9","88","22",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("12");
            obj.set_text("과목명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divD.addChild(obj.name, obj);

            obj = new Edit("edtSearchGwamokCd","94","9","200","22",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("0");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divD.addChild(obj.name, obj);

            obj = new Edit("edtSearchGwamokNm","304","9","200","22",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("1");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divD.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","790","36","66","22",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("13");
            obj.set_text("학년");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divD.addChild(obj.name, obj);

            obj = new Combo("cboSearchHaknyeon","868","36","111","22",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("7");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_readonly("true");
            obj.set_innerdataset("dsHaknyeon");
            obj.set_enable("true");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divD.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00","790","9","66","22",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("14");
            obj.set_text("분반");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divD.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00_00","997","9","99","22",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("15");
            obj.set_text("시수(통합)");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divD.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01","13","36","66","22",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("16");
            obj.set_text("이수구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divD.addChild(obj.name, obj);

            obj = new Combo("cboSearchIsu","94","36","200","22",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("5");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_innerdataset("dsIsu");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divD.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01_00","542","36","91","22",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("17");
            obj.set_text("계열/학과");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divD.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01_00_00","566","9","66","22",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("18");
            obj.set_text("학점");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divD.addChild(obj.name, obj);

            obj = new Edit("edtSearchHakjeom","648","9","124","22",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divD.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00_01","1030","36","66","22",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("19");
            obj.set_text("학기");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divD.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgi","1109","36","104","22",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("8");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_readonly("true");
            obj.set_enable("true");
            obj.set_innerdataset("dsHakgi");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divD.addChild(obj.name, obj);

            obj = new Edit("edtSearchBunban","868","9","111","22",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("3");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divD.addChild(obj.name, obj);

            obj = new Edit("edtSearchSisu","1109","9","104","22",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("4");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divD.addChild(obj.name, obj);

            obj = new Combo("cboSearchGyeyeol","648","36","124","22",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("6");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_readonly("true");
            obj.set_innerdataset("dsGyeyeolHakgwa");
            obj.set_enable("true");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divD.addChild(obj.name, obj);

            obj = new Static("stc_01_00","-9","63","88","22",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("20");
            obj.set_text("담당교수");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divD.addChild(obj.name, obj);

            obj = new Edit("edtSearchDamdangGyosuCd","94","63","200","22",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("9");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divD.addChild(obj.name, obj);

            obj = new Edit("edtSearchDamdangGyosuNm","304","63","200","22",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("10");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divD.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_02","538","63","97","22",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("21");
            obj.set_text("활용구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divD.addChild(obj.name, obj);

            obj = new Combo("cboSearchNCS","648","63","124","22",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("11");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsNCS");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divD.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","94",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("22");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divD.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","16","0","1220","9",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("23");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divD.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","20","85","1210","9",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("24");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divD.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_02","26","31","1190","5",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("25");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 6pt/normal \"Arial\"");
            this.divD.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_02_00","26","58","1190","5",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("26");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 6pt/normal \"Arial\"");
            this.divD.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00","85","0","10","97",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("27");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divD.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00","294","0","10","97",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("28");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divD.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01","504","-1","56","90",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("29");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divD.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00_00","638","0","10","97",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("30");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divD.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00","772","-1","56","90",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("31");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divD.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00_00_00","858","0","10","97",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("32");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divD.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00_00","979","-1","56","90",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("33");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divD.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00_00_00_00","1101","0","10","97",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("34");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divD.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00","1213","0","27","94",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("35");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divD.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00",null,"80","330","22","913",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("교과목 기본정보");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_39",null,"99","442","20","801",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("※NCS미활용 과목은 향상/심화 교육과정, 산업체인사 탭이 비활성화 됩니다.");
            obj.set_cssclass("sta_WF_Desc02");
            this.addChild(obj.name, obj);

            obj = new Tab("tab",null,"264","1241","1436","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_tabindex("0");
            obj.set_multiline("false");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Tabpage("MokpyoGwanli",this.tab);
            obj.set_text("목표관리 및 기본정보");
            this.tab.addChild(obj.name, obj);

            obj = new Static("stc_13_06","25","36","577","28",null,null,null,null,null,null,this.tab.MokpyoGwanli.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.MokpyoGwanli.addChild(obj.name, obj);

            obj = new Static("stc_12_06","10","36","150","28",null,null,null,null,null,null,this.tab.MokpyoGwanli.form);
            obj.set_taborder("10");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.MokpyoGwanli.addChild(obj.name, obj);

            obj = new Edit("edtEmail","162","39","139","22",null,null,null,null,null,null,this.tab.MokpyoGwanli.form);
            obj.set_taborder("0");
            obj.set_enable("true");
            obj.set_maxlength("255");
            obj.set_displaynulltext("이메일");
            obj.set_inputtype("dot,english,symbol,digit");
            this.tab.MokpyoGwanli.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00","305","36","150","28",null,null,null,null,null,null,this.tab.MokpyoGwanli.form);
            obj.set_taborder("11");
            obj.set_text("연락처");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.MokpyoGwanli.addChild(obj.name, obj);

            obj = new Edit("edtHpNo","457","39","139","22",null,null,null,null,null,null,this.tab.MokpyoGwanli.form);
            obj.set_taborder("1");
            obj.set_enable("true");
            obj.set_maxlength("15");
            obj.set_displaynulltext("연락처");
            obj.set_inputtype("digit,sign");
            this.tab.MokpyoGwanli.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00","25","64","281","28",null,null,null,null,null,null,this.tab.MokpyoGwanli.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.MokpyoGwanli.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01","10","64","150","28",null,null,null,null,null,null,this.tab.MokpyoGwanli.form);
            obj.set_taborder("13");
            obj.set_text("공유구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.MokpyoGwanli.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00_00","635","36",null,"57","10",null,null,null,null,null,this.tab.MokpyoGwanli.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.MokpyoGwanli.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_00","622","36","150","57",null,null,null,null,null,null,this.tab.MokpyoGwanli.form);
            obj.set_taborder("15");
            obj.set_text("학과 교육목표");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.MokpyoGwanli.addChild(obj.name, obj);

            obj = new Grid("grdHakgwaSebu","622","128",null,"175","10",null,null,null,null,null,this.tab.MokpyoGwanli.form);
            obj.set_taborder("5");
            obj.set_binddataset("dsSebu");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"505\"/><Column size=\"75\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"checkbox\" text=\"세부목표\"/><Cell col=\"1\" text=\"연관성\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" textAlign=\"left\" text=\"bind:DEPT_EDUGOAL_NM\" editmaxlength=\"400\"/><Cell col=\"1\" displaytype=\"combocontrol\" edittype=\"combo\" text=\"bind:CORR_DIVCD\" textAlign=\"center\" editmaxlength=\"400\" combodataset=\"dsCorrDivcd\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\" tooltiptext=\"연관성\"/></Band></Format></Formats>");
            this.tab.MokpyoGwanli.addChild(obj.name, obj);

            obj = new Static("stc_09_00","622","103","330","22",null,null,null,null,null,null,this.tab.MokpyoGwanli.form);
            obj.set_taborder("16");
            obj.set_text("학과 세부목표");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.MokpyoGwanli.addChild(obj.name, obj);

            obj = new Static("stRowCnt","1041","102","166","24",null,null,null,null,null,null,this.tab.MokpyoGwanli.form);
            obj.set_taborder("17");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.tab.MokpyoGwanli.addChild(obj.name, obj);

            obj = new Static("stc_39","740","104","294","20",null,null,null,null,null,null,this.tab.MokpyoGwanli.form);
            obj.set_taborder("18");
            obj.set_text("교육목표 연관성 표시(● : 밀접, ◐ : 보통, ○ : 약함)");
            obj.set_cssclass("sta_WF_Desc02");
            this.tab.MokpyoGwanli.addChild(obj.name, obj);

            obj = new Tab("tab","10","128","592","175",null,null,null,null,null,null,this.tab.MokpyoGwanli.form);
            obj.set_taborder("4");
            obj.set_tabindex("0");
            this.tab.MokpyoGwanli.addChild(obj.name, obj);

            obj = new Tabpage("GyoyukMokpyo",this.tab.MokpyoGwanli.form.tab);
            obj.set_text("교육목표(학습목표)");
            this.tab.MokpyoGwanli.form.tab.addChild(obj.name, obj);

            obj = new TextArea("txtGyoyukMokpyo","10","10",null,null,"10","10",null,null,null,null,this.tab.MokpyoGwanli.form.tab.GyoyukMokpyo.form);
            obj.set_taborder("0");
            obj.set_maxlength("666");
            obj.set_displaynulltext("교육목표(학습목표)");
            this.tab.MokpyoGwanli.form.tab.GyoyukMokpyo.addChild(obj.name, obj);

            obj = new Tabpage("GyoyukNaeyong",this.tab.MokpyoGwanli.form.tab);
            obj.set_text("교육내용");
            this.tab.MokpyoGwanli.form.tab.addChild(obj.name, obj);

            obj = new TextArea("txtGyoyukNaeyong","10","10",null,null,"10","10",null,null,null,null,this.tab.MokpyoGwanli.form.tab.GyoyukNaeyong.form);
            obj.set_taborder("0");
            obj.set_maxlength("1333");
            obj.set_readonly("true");
            this.tab.MokpyoGwanli.form.tab.GyoyukNaeyong.addChild(obj.name, obj);

            obj = new Tabpage("GyoyukJeongbo",this.tab.MokpyoGwanli.form.tab);
            obj.set_text("교육정보");
            this.tab.MokpyoGwanli.form.tab.addChild(obj.name, obj);

            obj = new TextArea("txtGyoyukJeongbo","10","10",null,null,"10","10",null,null,null,null,this.tab.MokpyoGwanli.form.tab.GyoyukJeongbo.form);
            obj.set_taborder("0");
            obj.set_maxlength("1333");
            obj.set_readonly("true");
            this.tab.MokpyoGwanli.form.tab.GyoyukJeongbo.addChild(obj.name, obj);

            obj = new Tabpage("SugangSaeng",this.tab.MokpyoGwanli.form.tab);
            obj.set_text("수강생 유의사항");
            this.tab.MokpyoGwanli.form.tab.addChild(obj.name, obj);

            obj = new TextArea("txtSugangsaengNotice","10","10",null,null,"10","10",null,null,null,null,this.tab.MokpyoGwanli.form.tab.SugangSaeng.form);
            obj.set_taborder("0");
            obj.set_maxlength("333");
            obj.set_displaynulltext("수강생 유의사항");
            this.tab.MokpyoGwanli.form.tab.SugangSaeng.addChild(obj.name, obj);

            obj = new Tabpage("HakseubMokpyo",this.tab.MokpyoGwanli.form.tab);
            obj.set_text("학습목표달성을 위한 관리계획");
            this.tab.MokpyoGwanli.form.tab.addChild(obj.name, obj);

            obj = new TextArea("txtHakseubMokpyo","10","10",null,null,"10","10",null,null,null,null,this.tab.MokpyoGwanli.form.tab.HakseubMokpyo.form);
            obj.set_taborder("0");
            obj.set_maxlength("1333");
            obj.set_displaynulltext("학습목표달성을 위한 관리계획");
            this.tab.MokpyoGwanli.form.tab.HakseubMokpyo.addChild(obj.name, obj);

            obj = new Tabpage("Bigyogwa",this.tab.MokpyoGwanli.form.tab);
            obj.set_text("비교과 연계성");
            this.tab.MokpyoGwanli.form.tab.addChild(obj.name, obj);

            obj = new TextArea("txtBigyogwa","10","10",null,null,"10","10",null,null,null,null,this.tab.MokpyoGwanli.form.tab.Bigyogwa.form);
            obj.set_taborder("0");
            obj.set_maxlength("333");
            obj.set_displaynulltext("비교과 연계성");
            this.tab.MokpyoGwanli.form.tab.Bigyogwa.addChild(obj.name, obj);

            obj = new Combo("cboGongYu","162","67","139","22",null,null,null,null,null,null,this.tab.MokpyoGwanli.form);
            obj.set_taborder("2");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsShare");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.tab.MokpyoGwanli.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","10","323","330","22",null,null,null,null,null,null,this.tab.MokpyoGwanli.form);
            obj.set_taborder("19");
            obj.set_text("교재관리");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.MokpyoGwanli.addChild(obj.name, obj);

            obj = new Grid("grdGyojae","10","348",null,null,"10","10",null,null,null,null,this.tab.MokpyoGwanli.form);
            obj.set_taborder("8");
            obj.set_binddataset("dsBook");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"43\"/><Column size=\"114\"/><Column size=\"426\"/><Column size=\"107\"/><Column size=\"99\"/><Column size=\"127\"/><Column size=\"142\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"교재구분\" cssclass=\"point\"/><Cell col=\"2\" text=\"교재명\"/><Cell col=\"3\" text=\"저자\"/><Cell col=\"4\" text=\"출판사\"/><Cell col=\"5\" text=\"출판년도\"/><Cell col=\"6\" text=\"ISBN\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" editmaxlength=\"1\"/><Cell col=\"1\" displaytype=\"combocontrol\" edittype=\"combo\" textAlign=\"left\" text=\"bind:TXTBOOK_DIVCD\" editmaxlength=\"5\" combodataset=\"dsBookDiv\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\" tooltiptext=\"교재구분\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:TXTBOOK_NM\" editmaxlength=\"166\" tooltiptext=\"교재명\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"text\" textAlign=\"center\" text=\"bind:WRITER\" editmaxlength=\"666\" tooltiptext=\"저자\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:PUBLISHER\" editmaxlength=\"166\" tooltiptext=\"출판사\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"text\" textAlign=\"center\" text=\"bind:PUBYYYY\" editmaxlength=\"4\" editinputfilter=\"none\" editinputtype=\"digit\" tooltiptext=\"출판년도\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"text\" textAlign=\"center\" text=\"bind:ISBN\" editmaxlength=\"13\" tooltiptext=\"ISBN\"/></Band></Format></Formats>");
            this.tab.MokpyoGwanli.addChild(obj.name, obj);

            obj = new Static("stRowCnt2","100","322","166","24",null,null,null,null,null,null,this.tab.MokpyoGwanli.form);
            obj.set_taborder("20");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.tab.MokpyoGwanli.addChild(obj.name, obj);

            obj = new Button("btnNew",null,"315","60","25","75",null,null,null,null,null,this.tab.MokpyoGwanli.form);
            obj.set_taborder("6");
            obj.set_text("신규");
            obj.set_cssclass("btn_WF_Crud");
            this.tab.MokpyoGwanli.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"315","60","25","10",null,null,null,null,null,this.tab.MokpyoGwanli.form);
            obj.set_taborder("7");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            this.tab.MokpyoGwanli.addChild(obj.name, obj);

            obj = new TextArea("txtGyoyukMokpyo","775","40",null,"50","14",null,null,null,null,null,this.tab.MokpyoGwanli.form);
            obj.set_taborder("3");
            obj.set_maxlength("1333");
            obj.set_readonly("true");
            this.tab.MokpyoGwanli.addChild(obj.name, obj);

            obj = new Static("stc_09_00_01","10","103","330","22",null,null,null,null,null,null,this.tab.MokpyoGwanli.form);
            obj.set_taborder("21");
            obj.set_text("학과 정보");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.MokpyoGwanli.addChild(obj.name, obj);

            obj = new Static("stc_09_00_01_00","10","11","330","22",null,null,null,null,null,null,this.tab.MokpyoGwanli.form);
            obj.set_taborder("22");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.MokpyoGwanli.addChild(obj.name, obj);

            obj = new Static("stc_09_00_01_00_00","622","11","330","22",null,null,null,null,null,null,this.tab.MokpyoGwanli.form);
            obj.set_taborder("23");
            obj.set_text("학과 교육목표");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.MokpyoGwanli.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","481","0","100","35",null,null,null,null,null,null,this.tab.MokpyoGwanli.form);
            obj.set_taborder("24");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.MokpyoGwanli.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","16","28","1210","8",null,null,null,null,null,null,this.tab.MokpyoGwanli.form);
            obj.set_taborder("25");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.MokpyoGwanli.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","21","10","451",null,null,null,null,null,null,this.tab.MokpyoGwanli.form);
            obj.set_taborder("26");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.MokpyoGwanli.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_00","16","120","1210","8",null,null,null,null,null,null,this.tab.MokpyoGwanli.form);
            obj.set_taborder("27");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.MokpyoGwanli.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","1101","93","100","35",null,null,null,null,null,null,this.tab.MokpyoGwanli.form);
            obj.set_taborder("28");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.MokpyoGwanli.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,"21","10","447","0",null,null,null,null,null,this.tab.MokpyoGwanli.form);
            obj.set_taborder("29");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.MokpyoGwanli.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01","602","21","20","311",null,null,null,null,null,null,this.tab.MokpyoGwanli.form);
            obj.set_taborder("30");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.MokpyoGwanli.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","771","303","100","45",null,null,null,null,null,null,this.tab.MokpyoGwanli.form);
            obj.set_taborder("31");
            obj.set_text("↑\r\n45\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.MokpyoGwanli.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_01","436",null,"210","10",null,"0",null,null,null,null,this.tab.MokpyoGwanli.form);
            obj.set_taborder("32");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.MokpyoGwanli.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_00_00","16","340","1210","8",null,null,null,null,null,null,this.tab.MokpyoGwanli.form);
            obj.set_taborder("33");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.MokpyoGwanli.addChild(obj.name, obj);

            obj = new Tabpage("YeokRyangMapping",this.tab);
            obj.set_text("역량 매핑관리");
            this.tab.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_00","10","62",null,"53","10",null,null,null,null,null,this.tab.YeokRyangMapping.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.YeokRyangMapping.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_00","10","62","150","53",null,null,null,null,null,null,this.tab.YeokRyangMapping.form);
            obj.set_taborder("3");
            obj.set_text("직무역량");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.YeokRyangMapping.addChild(obj.name, obj);

            obj = new Static("stc_05_00_00_01_00","10","35",null,"28","10",null,null,null,null,null,this.tab.YeokRyangMapping.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.YeokRyangMapping.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00_01_00_00_00","10","35","150","28",null,null,null,null,null,null,this.tab.YeokRyangMapping.form);
            obj.set_taborder("5");
            obj.set_text("대학핵심역량");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.YeokRyangMapping.addChild(obj.name, obj);

            obj = new TextArea("txtJikmuYeokryang","164","65",null,"47","15",null,null,null,null,null,this.tab.YeokRyangMapping.form);
            obj.set_taborder("1");
            obj.set_maxlength("1333");
            obj.set_readonly("true");
            this.tab.YeokRyangMapping.addChild(obj.name, obj);

            obj = new Div("divHaeksimCheckbox","164","35",null,"28","15",null,null,null,null,null,this.tab.YeokRyangMapping.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.tab.YeokRyangMapping.addChild(obj.name, obj);

            obj = new Static("stc_09_00_01_00","10","11","280","22",null,null,null,null,null,null,this.tab.YeokRyangMapping.form);
            obj.set_taborder("6");
            obj.set_text("대학핵심 및 직무역량");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.YeokRyangMapping.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","15","28","320","8",null,null,null,null,null,null,this.tab.YeokRyangMapping.form);
            obj.set_taborder("7");
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
            obj.set_taborder("8");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.YeokRyangMapping.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","21","10","451",null,null,null,null,null,null,this.tab.YeokRyangMapping.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.YeokRyangMapping.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,"21","10","447","0",null,null,null,null,null,this.tab.YeokRyangMapping.form);
            obj.set_taborder("10");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.YeokRyangMapping.addChild(obj.name, obj);

            obj = new Tabpage("GyosuHakseub",this.tab);
            obj.set_text("교수학습방법 및 평가방법, 배점관리");
            this.tab.addChild(obj.name, obj);

            obj = new Static("stc_05_00_00_01_00_02_00_00_00","10","265",null,"96","20",null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Static("stc_05_00_00_01_00_02_00_00","10","120",null,"126","20",null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Static("stc_05_00_00_01_00_02_00","10","6",null,"96","20",null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Static("stc_05_00_00_01_00_00_01","20","323",null,"28","30",null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Static("stc_05_00_00_01_00_02","20","295",null,"28","30",null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00_01_00_00_00_02","20","295","150","28",null,null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("11");
            obj.set_text("교육장소");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00_01_00_00_00_00_01","20","323","150","28",null,null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("12");
            obj.set_text("기타내용");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Grid("grdEvalplan","10","405",null,null,"20","10",null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("8");
            obj.set_binddataset("dsEvalplan");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"125\"/><Column size=\"93\"/><Column size=\"781\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"checkbox\" text=\"평가구분\" cssclass=\"point\"/><Cell col=\"2\" text=\"배점\"/><Cell col=\"3\" text=\"평가개요\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" editmaxlength=\"1\"/><Cell col=\"1\" displaytype=\"combocontrol\" edittype=\"combo\" textAlign=\"left\" text=\"bind:EVALITEM_DIVCD\" editmaxlength=\"5\" combodataset=\"dsEvalitem\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\" tooltiptext=\"평가구분\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"text\" textAlign=\"center\" text=\"bind:POINT\" tooltiptext=\"배점\" maskedittrimtype=\"none\" editmaxlength=\"5\" editinputtype=\"digit\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:EVALSUMM\" editmaxlength=\"166\" tooltiptext=\"평가개요\"/></Band></Format></Formats>");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Static("stc_09_00","10","380","129","22",null,null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("13");
            obj.set_text("평가배점관리");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Static("stRowCnt","122","380","166","24",null,null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("14");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Button("btnNew",null,"372","60","25","85",null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("6");
            obj.set_text("신규");
            obj.set_cssclass("btn_WF_Crud");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"372","60","25","20",null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("7");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Static("stc_05_00_00_01_00_00","20","64",null,"28","30",null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Static("stc_05_00_00_01_00","20","36",null,"28","30",null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00_01_00_00_00","20","36","150","28",null,null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("17");
            obj.set_text("교수학습방법");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00_01_00_00_00_00","20","64","150","28",null,null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("18");
            obj.set_text("기타내용");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Static("stc_05_00_00_01_00_00_00","20","208",null,"28","30",null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Static("stc_05_00_00_01_00_01","20","150",null,"58","30",null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00_01_00_00_00_01","20","150","150","58",null,null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("21");
            obj.set_text("평가방법");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00_01_00_00_00_00_00","20","208","150","28",null,null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("22");
            obj.set_text("기타내용");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","20","270","129","22",null,null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("23");
            obj.set_text("교육장소");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00_00","20","125","129","22",null,null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("24");
            obj.set_text("평가방법");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00_00_00","20","11","129","22",null,null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("25");
            obj.set_text("교수학습방법");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Div("divGyosuCheckbox","175","36",null,"28","35",null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Div("divPyeongGaCheckbox","175","150",null,"58","35",null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("2");
            obj.set_text("");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Div("divJangsoCheckbox","174","295",null,"28","35",null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("4");
            obj.set_text("");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Edit("edtGyosuGita","175","67",null,"22","35",null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("1");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_maxlength("166");
            obj.set_displaynulltext("기타내용");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Edit("edtPyeongGaGita","175","211",null,"22","35",null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("3");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_maxlength("166");
            obj.set_displaynulltext("기타내용");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Edit("edtJangsoGita","175","326",null,"22","35",null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("5");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_maxlength("166");
            obj.set_displaynulltext("기타내용");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","481","1","100","35",null,null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("29");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_01","16","7","320","9",null,null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("30");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","16","28","320","8",null,null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("31");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00","10","22","10","67",null,null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("32");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_01_00","15","92","320","9",null,null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("33");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","484","101","100","20",null,null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("34");
            obj.set_text("↑\r\n20\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_01_01","16","121","320","9",null,null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("35");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_00","16","142","320","8",null,null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("36");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00_01","10","162","10","67",null,null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("37");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_01_00_00","15","236","320","9",null,null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("38");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","484","246","100","20",null,null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("39");
            obj.set_text("↑\r\n20\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_00_00","16","287","320","8",null,null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("40");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_01_01_00","16","266","320","9",null,null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("41");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00_01_00","10","292","10","67",null,null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("42");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_01_00_00_00","15","351","320","9",null,null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("43");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00","480","360","100","45",null,null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("44");
            obj.set_text("↑\r\n\r45\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_01_02","430",null,"210","10",null,"0",null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("45");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","1232","371","10","77",null,null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("46");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","1","51","10","407",null,null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("47");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_02","9","397","1190","8",null,null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("48");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01",null,"51","10","407","10",null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("49");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00_00",null,"22","10","67","20",null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("50");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00_00_00",null,"152","10","67","20",null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("51");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00_00_00_00",null,"282","10","67","20",null,null,null,null,null,this.tab.GyosuHakseub.form);
            obj.set_taborder("52");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.GyosuHakseub.addChild(obj.name, obj);

            obj = new Tabpage("YeokRyangJuCha",this.tab);
            obj.set_text("역량주차별 계획관리");
            this.tab.addChild(obj.name, obj);

            obj = new Grid("grdJuchaGyehoek","10","35",null,null,"10","10",null,null,null,null,this.tab.YeokRyangJuCha.form);
            obj.set_taborder("3");
            obj.set_binddataset("dsJuchaGyehoek");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"148\"/><Column size=\"117\"/><Column size=\"215\"/><Column size=\"298\"/><Column size=\"157\"/><Column size=\"218\"/><Column size=\"50\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"80\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"checkbox\" text=\"주차\" cssclass=\"point\"/><Cell col=\"2\" text=\"직무역량\"/><Cell col=\"3\" text=\"하위역량\"/><Cell col=\"4\" text=\"수업내용\"/><Cell col=\"5\" text=\"비고(기자재)\"/><Cell col=\"6\" text=\"구성요소\"/><Cell col=\"7\" text=\"순서\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" editmaxlength=\"1\"/><Cell col=\"1\" displaytype=\"combocontrol\" edittype=\"combo\" textAlign=\"left\" text=\"bind:WEEK\" editmaxlength=\"3\" combodataset=\"dsWeek\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\" tooltiptext=\"주차\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\" text=\"bind:JOB_COMP_NM\" editmaxlength=\"256\" tooltiptext=\"직무역량\"/><Cell col=\"3\" displaytype=\"combocontrol\" edittype=\"combo\" textAlign=\"right\" text=\"bind:DEGR_COMP_SEQ\" editmaxlength=\"22\" combodataset=\"dsDegrCombo\" combodatacol=\"DEGR_COMP_NM\" combocodecol=\"DEGR_COMP_SEQ\" tooltiptext=\"하위역량\"/><Cell col=\"4\" displaytype=\"textareacontrol\" edittype=\"textarea\" textAlign=\"left\" text=\"bind:LECT_CONT\" editmaxlength=\"1333\" tooltiptext=\"수업내용\" textareamaxlength=\"1333\" textareaacceptsenter=\"true\"/><Cell col=\"5\" displaytype=\"textareacontrol\" edittype=\"textarea\" textAlign=\"left\" text=\"bind:NOTE\" editmaxlength=\"1333\" tooltiptext=\"비고(기자재)\" textareamaxlength=\"1333\" textareaacceptsenter=\"true\"/><Cell col=\"6\" displaytype=\"textareacontrol\" edittype=\"textarea\" textAlign=\"left\" text=\"bind:COMP_ELEM_CONT\" editmaxlength=\"666\" tooltiptext=\"구성요소\" textareamaxlength=\"666\" textareaacceptsenter=\"true\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"text\" textAlign=\"right\" text=\"bind:SORT\" editmaxlength=\"22\" tooltiptext=\"순서\" editinputtype=\"digit\"/></Band></Format></Formats>");
            this.tab.YeokRyangJuCha.addChild(obj.name, obj);

            obj = new Button("btnNew",null,"3","59","25","75",null,null,null,null,null,this.tab.YeokRyangJuCha.form);
            obj.set_taborder("1");
            obj.set_text("신규");
            obj.set_cssclass("btn_WF_Crud");
            this.tab.YeokRyangJuCha.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"3","59","25","10",null,null,null,null,null,this.tab.YeokRyangJuCha.form);
            obj.set_taborder("2");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            this.tab.YeokRyangJuCha.addChild(obj.name, obj);

            obj = new Button("btn16Add",null,"3","125","25","140",null,null,null,null,null,this.tab.YeokRyangJuCha.form);
            obj.set_taborder("0");
            obj.set_text("16주차 일괄생성");
            obj.set_cssclass("btn_WF_Crud");
            this.tab.YeokRyangJuCha.addChild(obj.name, obj);

            obj = new Static("stRowCnt","167","10","166","24",null,null,null,null,null,null,this.tab.YeokRyangJuCha.form);
            obj.set_taborder("4");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.tab.YeokRyangJuCha.addChild(obj.name, obj);

            obj = new Static("stc_09_00","10","11","163","22",null,null,null,null,null,null,this.tab.YeokRyangJuCha.form);
            obj.set_taborder("5");
            obj.set_text("역량주차별 계획관리");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.YeokRyangJuCha.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,"10","10","327","0",null,null,null,null,null,this.tab.YeokRyangJuCha.form);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.YeokRyangJuCha.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","481","0","100","35",null,null,null,null,null,null,this.tab.YeokRyangJuCha.form);
            obj.set_taborder("7");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.YeokRyangJuCha.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","16","28","1210","8",null,null,null,null,null,null,this.tab.YeokRyangJuCha.form);
            obj.set_taborder("8");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.YeokRyangJuCha.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","121","10","67",null,null,null,null,null,null,this.tab.YeokRyangJuCha.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.YeokRyangJuCha.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_01","436",null,"210","10",null,"0",null,null,null,null,this.tab.YeokRyangJuCha.form);
            obj.set_taborder("10");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.YeokRyangJuCha.addChild(obj.name, obj);

            obj = new Tabpage("HakseubSeongGwa",this.tab);
            obj.set_text("학습성과");
            this.tab.addChild(obj.name, obj);

            obj = new Grid("grdHakseubSeongGwa","10","35",null,null,"10","10",null,null,null,null,this.tab.HakseubSeongGwa.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsPO");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"474\"/><Column size=\"117\"/><Column size=\"81\"/><Column size=\"75\"/><Column size=\"411\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"checkbox\" text=\"학습성과구분\"/><Cell col=\"2\" text=\"학습성과수준\"/><Cell col=\"3\" text=\"연관성\"/><Cell col=\"4\" text=\"반영률\"/><Cell col=\"5\" text=\"평가방법\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" editmaxlength=\"1\"/><Cell col=\"1\" displaytype=\"combocontrol\" edittype=\"combo\" textAlign=\"left\" text=\"bind:PO_CD\" editmaxlength=\"5\" combodataset=\"dsPoCombo\" combodatacol=\"PO_NM\" combocodecol=\"PO_CD\" tooltiptext=\"학습성과구분\" combodisplaynulltext=\"선택\"/><Cell col=\"2\" displaytype=\"combocontrol\" edittype=\"combo\" textAlign=\"left\" text=\"bind:PO_LV\" editmaxlength=\"5\" combodataset=\"dsPoLv\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\" tooltiptext=\"학습성과수준\" combodisplaynulltext=\"선택\"/><Cell col=\"3\" displaytype=\"combocontrol\" edittype=\"combo\" textAlign=\"left\" text=\"bind:PO_CORR_DIVCD\" editmaxlength=\"5\" combodataset=\"dsCorrDivcd\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\" tooltiptext=\"연관성\" combodisplaynulltext=\"선택\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"text\" textAlign=\"right\" text=\"bind:PO_RATE\" editmaxlength=\"22\" tooltiptext=\"반영률\" editinputtype=\"digit\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:PO_EVALWAY\" editmaxlength=\"666\" tooltiptext=\"평가방법\"/></Band></Format></Formats>");
            this.tab.HakseubSeongGwa.addChild(obj.name, obj);

            obj = new Button("btnNew",null,"3","59","25","75",null,null,null,null,null,this.tab.HakseubSeongGwa.form);
            obj.set_taborder("0");
            obj.set_text("신규");
            obj.set_cssclass("btn_WF_Crud");
            this.tab.HakseubSeongGwa.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"3","59","25","10",null,null,null,null,null,this.tab.HakseubSeongGwa.form);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            this.tab.HakseubSeongGwa.addChild(obj.name, obj);

            obj = new Static("stc_09_00","10","11","163","22",null,null,null,null,null,null,this.tab.HakseubSeongGwa.form);
            obj.set_taborder("3");
            obj.set_text("학습성과");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.HakseubSeongGwa.addChild(obj.name, obj);

            obj = new Static("stRowCnt","97","10","166","24",null,null,null,null,null,null,this.tab.HakseubSeongGwa.form);
            obj.set_taborder("4");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.tab.HakseubSeongGwa.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","481","0","100","35",null,null,null,null,null,null,this.tab.HakseubSeongGwa.form);
            obj.set_taborder("5");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.HakseubSeongGwa.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","16","28","1210","8",null,null,null,null,null,null,this.tab.HakseubSeongGwa.form);
            obj.set_taborder("6");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.HakseubSeongGwa.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,"0","10","327","0",null,null,null,null,null,this.tab.HakseubSeongGwa.form);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.HakseubSeongGwa.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_01","436",null,"210","10",null,"0",null,null,null,null,this.tab.HakseubSeongGwa.form);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.HakseubSeongGwa.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","121","10","67",null,null,null,null,null,null,this.tab.HakseubSeongGwa.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.HakseubSeongGwa.addChild(obj.name, obj);

            obj = new Tabpage("HyangSangSimHwa",this.tab);
            obj.set_text("향상/심화교육과정");
            this.tab.addChild(obj.name, obj);

            obj = new Static("stc_05_00_00_01_00_02_00_00_00","10","107",null,"152","10",null,null,null,null,null,this.tab.HyangSangSimHwa.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.tab.HyangSangSimHwa.addChild(obj.name, obj);

            obj = new Static("stc_05_00_00_01_00_02_00_00","10","6",null,"81","10",null,null,null,null,null,this.tab.HyangSangSimHwa.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.tab.HyangSangSimHwa.addChild(obj.name, obj);

            obj = new Grid("grdHyangsangSimhwa","10","304",null,null,"10","10",null,null,null,null,this.tab.HyangSangSimHwa.form);
            obj.set_taborder("12");
            obj.set_binddataset("dsImproDeepNCS");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"166\"/><Column size=\"781\"/><Column size=\"48\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"checkbox\" text=\"평가구분\" cssclass=\"point\"/><Cell col=\"2\" text=\"평가내용/운영내용\"/><Cell col=\"3\" text=\"배점\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" editmaxlength=\"1\"/><Cell col=\"1\" displaytype=\"combocontrol\" edittype=\"combo\" textAlign=\"left\" text=\"bind:IMPRO_DEEP_DIVCD\" editmaxlength=\"5\" combodataset=\"dsImproDeepDiv\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\" tooltiptext=\"평가구분\" combodisplaynulltext=\"선택\"/><Cell col=\"2\" displaytype=\"combocontrol\" edittype=\"combo\" textAlign=\"left\" text=\"bind:NCS_CD\" editmaxlength=\"18\" combodataset=\"dsImproDeepNCSCombo\" combodatacol=\"NCS_CD_NM\" combocodecol=\"NCS_CD\" combodisplaynulltext=\"선택\" tooltiptext=\"평가내용/운영내용\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"text\" textAlign=\"right\" text=\"bind:POINT\" editmaxlength=\"5\" tooltiptext=\"배점\" editinputtype=\"digit\"/></Band></Format></Formats>");
            this.tab.HyangSangSimHwa.addChild(obj.name, obj);

            obj = new Static("stc_09_00","10","279","129","22",null,null,null,null,null,null,this.tab.HyangSangSimHwa.form);
            obj.set_taborder("13");
            obj.set_text("향상/심화");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.HyangSangSimHwa.addChild(obj.name, obj);

            obj = new Static("stRowCnt","104","278","180","24",null,null,null,null,null,null,this.tab.HyangSangSimHwa.form);
            obj.set_taborder("14");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.tab.HyangSangSimHwa.addChild(obj.name, obj);

            obj = new Button("btnNew",null,"271","59","25","75",null,null,null,null,null,this.tab.HyangSangSimHwa.form);
            obj.set_taborder("10");
            obj.set_text("신규");
            obj.set_cssclass("btn_WF_Crud");
            this.tab.HyangSangSimHwa.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"271","60","25","10",null,null,null,null,null,this.tab.HyangSangSimHwa.form);
            obj.set_taborder("11");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            this.tab.HyangSangSimHwa.addChild(obj.name, obj);

            obj = new Static("stc_13_06","20","49",null,"28","20",null,null,null,null,null,this.tab.HyangSangSimHwa.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.HyangSangSimHwa.addChild(obj.name, obj);

            obj = new Static("stc_12_06","20","49","108","28",null,null,null,null,null,null,this.tab.HyangSangSimHwa.form);
            obj.set_taborder("16");
            obj.set_text("향상교육장소");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.HyangSangSimHwa.addChild(obj.name, obj);

            obj = new Edit("edtGyoyukJangso","130","52","185","22",null,null,null,null,null,null,this.tab.HyangSangSimHwa.form);
            obj.set_taborder("1");
            obj.set_enable("true");
            obj.set_maxlength("333");
            obj.set_displaynulltext("향상교육장소");
            obj.set_text("향상교육 장소");
            this.tab.HyangSangSimHwa.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00","318","49","108","28",null,null,null,null,null,null,this.tab.HyangSangSimHwa.form);
            obj.set_taborder("17");
            obj.set_text("시행일시");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.HyangSangSimHwa.addChild(obj.name, obj);

            obj = new Calendar("calSihaengDt","428","52","200","22",null,null,null,null,null,null,this.tab.HyangSangSimHwa.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab.HyangSangSimHwa.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00","630","49","108","28",null,null,null,null,null,null,this.tab.HyangSangSimHwa.form);
            obj.set_taborder("18");
            obj.set_text("시행시간");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.HyangSangSimHwa.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00","920","49","108","28",null,null,null,null,null,null,this.tab.HyangSangSimHwa.form);
            obj.set_taborder("19");
            obj.set_text("운영시간");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.HyangSangSimHwa.addChild(obj.name, obj);

            obj = new Edit("edtSihaengTime","741","52","177","22",null,null,null,null,null,null,this.tab.HyangSangSimHwa.form);
            obj.set_taborder("3");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_maxlength("33");
            obj.set_displaynulltext("00:00 ~ 00:00");
            this.tab.HyangSangSimHwa.addChild(obj.name, obj);

            obj = new Edit("edtUnyungDt","1031","52",null,"22","22",null,null,null,null,null,this.tab.HyangSangSimHwa.form);
            obj.set_taborder("4");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_maxlength("33");
            obj.set_displaynulltext("운영시간");
            this.tab.HyangSangSimHwa.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","20","24","330","22",null,null,null,null,null,null,this.tab.HyangSangSimHwa.form);
            obj.set_taborder("20");
            obj.set_text("향상교육과정");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.HyangSangSimHwa.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00_00","20","112","330","22",null,null,null,null,null,null,this.tab.HyangSangSimHwa.form);
            obj.set_taborder("21");
            obj.set_text("심화교육과정");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.HyangSangSimHwa.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00","20","136",null,"28","20",null,null,null,null,null,this.tab.HyangSangSimHwa.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.HyangSangSimHwa.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01","20","136","150","28",null,null,null,null,null,null,this.tab.HyangSangSimHwa.form);
            obj.set_taborder("23");
            obj.set_text("심화교육 장소");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.HyangSangSimHwa.addChild(obj.name, obj);

            obj = new Edit("edtSimhwaGyoyukJangso","172","139","684","22",null,null,null,null,null,null,this.tab.HyangSangSimHwa.form);
            obj.set_taborder("5");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_maxlength("333");
            obj.set_displaynulltext("심화교육 장소");
            this.tab.HyangSangSimHwa.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_01","859","136","150","28",null,null,null,null,null,null,this.tab.HyangSangSimHwa.form);
            obj.set_taborder("24");
            obj.set_text("심화교육 일시");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.HyangSangSimHwa.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00_00","20","164",null,"28","20",null,null,null,null,null,this.tab.HyangSangSimHwa.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.HyangSangSimHwa.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_00","20","164","150","28",null,null,null,null,null,null,this.tab.HyangSangSimHwa.form);
            obj.set_taborder("26");
            obj.set_text("강사명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.HyangSangSimHwa.addChild(obj.name, obj);

            obj = new Edit("edtGangsa","172","167","684","22",null,null,null,null,null,null,this.tab.HyangSangSimHwa.form);
            obj.set_taborder("7");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_maxlength("33");
            obj.set_displaynulltext("심화교육 강사명");
            this.tab.HyangSangSimHwa.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00_00_00","20","192",null,"57","20",null,null,null,null,null,this.tab.HyangSangSimHwa.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.HyangSangSimHwa.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_00_00","20","192","150","57",null,null,null,null,null,null,this.tab.HyangSangSimHwa.form);
            obj.set_taborder("28");
            obj.set_text("특강내용");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.HyangSangSimHwa.addChild(obj.name, obj);

            obj = new Calendar("calSimhwaGyoyukDt","1012","139",null,"22","22",null,null,null,null,null,this.tab.HyangSangSimHwa.form);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab.HyangSangSimHwa.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_01_00","859","164","150","28",null,null,null,null,null,null,this.tab.HyangSangSimHwa.form);
            obj.set_taborder("29");
            obj.set_text("소속");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.HyangSangSimHwa.addChild(obj.name, obj);

            obj = new Edit("edtSosok","1012","167",null,"22","22",null,null,null,null,null,this.tab.HyangSangSimHwa.form);
            obj.set_taborder("8");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_maxlength("33");
            obj.set_displaynulltext("강사 소속");
            this.tab.HyangSangSimHwa.addChild(obj.name, obj);

            obj = new TextArea("txtJikmuYeokryang","172","195",null,"51","22",null,null,null,null,null,this.tab.HyangSangSimHwa.form);
            obj.set_taborder("9");
            obj.set_maxlength("1333");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.tab.HyangSangSimHwa.addChild(obj.name, obj);

            obj = new Button("btnPrint",null,"16","223","25","19",null,null,null,null,null,this.tab.HyangSangSimHwa.form);
            obj.set_taborder("0");
            obj.set_text("향상/심화교육과정 운영계획서 출력");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_tabstop("true");
            this.tab.HyangSangSimHwa.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00","484","0","100","45",null,null,null,null,null,null,this.tab.HyangSangSimHwa.form);
            obj.set_taborder("32");
            obj.set_text("↑\r\n\r45\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.HyangSangSimHwa.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","16","41","1210","8",null,null,null,null,null,null,this.tab.HyangSangSimHwa.form);
            obj.set_taborder("33");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.HyangSangSimHwa.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_01","906","7","320","9",null,null,null,null,null,null,this.tab.HyangSangSimHwa.form);
            obj.set_taborder("34");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.HyangSangSimHwa.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00","10","20","10","66",null,null,null,null,null,null,this.tab.HyangSangSimHwa.form);
            obj.set_taborder("35");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.HyangSangSimHwa.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_01_00","15","77","320","9",null,null,null,null,null,null,this.tab.HyangSangSimHwa.form);
            obj.set_taborder("36");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.HyangSangSimHwa.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00_00",null,"17","10","67","10",null,null,null,null,null,this.tab.HyangSangSimHwa.form);
            obj.set_taborder("37");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.HyangSangSimHwa.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","484","87","100","20",null,null,null,null,null,null,this.tab.HyangSangSimHwa.form);
            obj.set_taborder("38");
            obj.set_text("↑\r\n20\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.HyangSangSimHwa.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_01_01","16","108","320","9",null,null,null,null,null,null,this.tab.HyangSangSimHwa.form);
            obj.set_taborder("39");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.HyangSangSimHwa.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_00","16","129","320","8",null,null,null,null,null,null,this.tab.HyangSangSimHwa.form);
            obj.set_taborder("40");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.HyangSangSimHwa.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00_01","10","140","10","66",null,null,null,null,null,null,this.tab.HyangSangSimHwa.form);
            obj.set_taborder("41");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.HyangSangSimHwa.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00_00_00",null,"147","10","67","10",null,null,null,null,null,this.tab.HyangSangSimHwa.form);
            obj.set_taborder("42");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.HyangSangSimHwa.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_01_00_00","15","249","320","9",null,null,null,null,null,null,this.tab.HyangSangSimHwa.form);
            obj.set_taborder("43");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.HyangSangSimHwa.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00","484","259","100","45",null,null,null,null,null,null,this.tab.HyangSangSimHwa.form);
            obj.set_taborder("44");
            obj.set_text("↑\r\n\r45\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.HyangSangSimHwa.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_02","16","296","1210","8",null,null,null,null,null,null,this.tab.HyangSangSimHwa.form);
            obj.set_taborder("45");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.HyangSangSimHwa.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","21","10","297",null,null,null,null,null,null,this.tab.HyangSangSimHwa.form);
            obj.set_taborder("46");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.HyangSangSimHwa.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,"35","10","407","0",null,null,null,null,null,this.tab.HyangSangSimHwa.form);
            obj.set_taborder("47");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.HyangSangSimHwa.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_01_02","436",null,"210","10",null,"0",null,null,null,null,this.tab.HyangSangSimHwa.form);
            obj.set_taborder("48");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.HyangSangSimHwa.addChild(obj.name, obj);

            obj = new Tabpage("SanupCheInsa",this.tab);
            obj.set_text("산업체인사");
            this.tab.addChild(obj.name, obj);

            obj = new Grid("grdSanupcheInsa","10","35",null,null,"10","10",null,null,null,null,this.tab.SanupCheInsa.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsComp");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"464\"/><Column size=\"268\"/><Column size=\"273\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"checkbox\" text=\"산업체명\"/><Cell col=\"2\" text=\"이름\"/><Cell col=\"3\" text=\"직책\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" editmaxlength=\"1\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:COMP_NM\" editmaxlength=\"333\" tooltiptext=\"산업체명\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:COMP_PERSON\" editmaxlength=\"33\" tooltiptext=\"이름\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:COMP_POSITION\" editmaxlength=\"33\" tooltiptext=\"직책\"/></Band></Format></Formats>");
            this.tab.SanupCheInsa.addChild(obj.name, obj);

            obj = new Static("stc_09_00","10","11","129","22",null,null,null,null,null,null,this.tab.SanupCheInsa.form);
            obj.set_taborder("3");
            obj.set_text("산업체인사");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.SanupCheInsa.addChild(obj.name, obj);

            obj = new Static("stRowCnt","119","10","166","24",null,null,null,null,null,null,this.tab.SanupCheInsa.form);
            obj.set_taborder("4");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.tab.SanupCheInsa.addChild(obj.name, obj);

            obj = new Button("btnNew",null,"3","59","25","75",null,null,null,null,null,this.tab.SanupCheInsa.form);
            obj.set_taborder("0");
            obj.set_text("신규");
            obj.set_cssclass("btn_WF_Crud");
            this.tab.SanupCheInsa.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"3","59","25","10",null,null,null,null,null,this.tab.SanupCheInsa.form);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            this.tab.SanupCheInsa.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","481","0","100","35",null,null,null,null,null,null,this.tab.SanupCheInsa.form);
            obj.set_taborder("5");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.SanupCheInsa.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","16","28","1210","8",null,null,null,null,null,null,this.tab.SanupCheInsa.form);
            obj.set_taborder("6");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.SanupCheInsa.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,"0","10","327","0",null,null,null,null,null,this.tab.SanupCheInsa.form);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.SanupCheInsa.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_01","436",null,"210","10",null,"0",null,null,null,null,this.tab.SanupCheInsa.form);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.SanupCheInsa.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","121","10","67",null,null,null,null,null,null,this.tab.SanupCheInsa.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.SanupCheInsa.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01_00_01",null,"234","91","22","134",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("작성완료여부");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Combo("cboJakseongWanryo",null,"234","124","22","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsCompleteYnD");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","1010","69","100","55",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("↑\r\n55\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00","400","115","1230","8",null,null,null,null,null,null,this);
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

            obj = new Static("Static01_01_00_00_00_01","369","193","30","100",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("30");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","115","320","8",null,null,null,null,null,null,this);
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

            obj = new Static("Static01_00_01_00","1010","219","100","45",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("↑\r\n\r45\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_03","1316","256","320","8",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00","9","0","9","67",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("stc_39_00","0","99",null,"20","1298",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("※교과목명세서를 작성하지 않은 과목은 작성할 수 없습니다.");
            obj.set_cssclass("sta_WF_Desc02");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,1700,this,function(p){});
            obj.set_description("강의계획서");
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
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

            obj = new BindItem("item14","divD.form.cboSearchIsu","value","dsGibonJeongbo","COMP_DIVCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","tab.MokpyoGwanli.form.edtEmail","value","dsMokpyo","EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","tab.MokpyoGwanli.form.edtHpNo","value","dsMokpyo","TEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divD.form.cboSearchGyeyeol","value","dsGibonJeongbo","DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divD.form.edtSearchDamdangGyosuCd","value","dsGibonJeongbo","PROF_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divD.form.edtSearchDamdangGyosuNm","value","dsGibonJeongbo","PROF_CD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divD.form.cboSearchNCS","value","dsMokpyo","NCS_USE_DIVCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","tab.HyangSangSimHwa.form.edtGyoyukJangso","value","dsMokpyo","IMPRO_EDU_PLACE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","tab.HyangSangSimHwa.form.calSihaengDt","value","dsMokpyo","IMPRO_EDU_TIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","tab.HyangSangSimHwa.form.edtSihaengTime","value","dsMokpyo","IMPRO_IMPLE_TIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","tab.HyangSangSimHwa.form.edtUnyungDt","value","dsMokpyo","IMPRO_MNG_TIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","tab.HyangSangSimHwa.form.edtSimhwaGyoyukJangso","value","dsMokpyo","DEEP_EDU_PLACE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item62","tab.HyangSangSimHwa.form.edtGangsa","value","dsMokpyo","DEEP_EDU_LECTURER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item64","tab.HyangSangSimHwa.form.calSimhwaGyoyukDt","value","dsMokpyo","DEEP_EDU_TIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","tab.HyangSangSimHwa.form.edtSosok","value","dsMokpyo","DEEP_EDU_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item65","cboJakseongWanryo","value","dsMokpyo","COMPLETE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","tab.MokpyoGwanli.form.cboGongYu","value","dsMokpyo","SHARE_DIVCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","tab.MokpyoGwanli.form.tab.GyoyukMokpyo.form.txtGyoyukMokpyo","value","dsMokpyo","EDUGOAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","tab.MokpyoGwanli.form.tab.GyoyukNaeyong.form.txtGyoyukNaeyong","value","dsMokpyo","EDU_CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","tab.MokpyoGwanli.form.tab.GyoyukJeongbo.form.txtGyoyukJeongbo","value","dsMokpyo","EDU_INFO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","tab.MokpyoGwanli.form.tab.SugangSaeng.form.txtSugangsaengNotice","value","dsMokpyo","NOTICE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","tab.MokpyoGwanli.form.tab.HakseubMokpyo.form.txtHakseubMokpyo","value","dsMokpyo","MNG_PLAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","tab.MokpyoGwanli.form.tab.Bigyogwa.form.txtBigyogwa","value","dsMokpyo","NON_SUBJECT_NOTICE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","tab.YeokRyangMapping.form.txtJikmuYeokryang","value","dsMokpyo","JOB_COMP_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","tab.HyangSangSimHwa.form.txtJikmuYeokryang","value","dsMokpyo","DEEP_MNG_CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divM.form.spnSearchYYYY","value","ds_input","YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divM.form.edtSearchSabeon","value","ds_input","PROF_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divM.form.edtSearchName","value","ds_input","PROF_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divM.form.cboSearchHakgi","value","ds_input","SEMESTER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divM.form.cboSearchJakseong","value","ds_input","WRITE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divM.form.cboSearchGyeYeolHakGwa","value","ds_input","DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divM.form.cboSearchJakseongWanryo","value","ds_input","COMPLETE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","divM.form.cboSearchHaknyeon","value","ds_input","COMP_GRADE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","tab.MokpyoGwanli.form.txtGyoyukMokpyo","value","dsGyoyukMokpyo","DEPT_EDUGOAL_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","divD.form.edtSearchHakjeom","value","dsGibonJeongbo","LECTSCORE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item66","divD.form.edtSearchBunban","value","dsGibonJeongbo","LECTCLASS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item67","divD.form.edtSearchSisu","value","dsGibonJeongbo","LECTTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item68","divD.form.cboSearchHakgi","value","dsGibonJeongbo","SEMESTER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","tab.GyosuHakseub.form.edtGyosuGita","value","dsGyosu","NOTE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","tab","enable","dsBindableTab","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
            this._addPreloadList("data","","dsGibonJeongbo");
            this._addPreloadList("data","","dsMokpyo");
            this._addPreloadList("data","","dsSebu");
            this._addPreloadList("data","","dsBook");
            this._addPreloadList("data","","dsHaeksim");
            this._addPreloadList("data","","dsGyosu");
            this._addPreloadList("data","","dsPyeongGa");
            this._addPreloadList("data","","dsJangso");
            this._addPreloadList("data","","dsEvalplan");
            this._addPreloadList("data","","dsJuchaGyehoek");
            this._addPreloadList("data","","dsPO");
            this._addPreloadList("data","","dsPoCombo");
            this._addPreloadList("data","","dsDegrCombo");
            this._addPreloadList("data","","dsImproDeepNCS");
            this._addPreloadList("data","","dsImproDeepNCSCombo");
            this._addPreloadList("data","","dsComp");
            this._addPreloadList("data","","dsGyoyukMokpyo");
            this._addPreloadList("data","","dsAuth");
            this._addPreloadList("data","","ds_authInput");
            this._addPreloadList("data","","dsWeekTemp");
            this._addPreloadList("data","","dsCopy");
        };
        
        // User Script
        this.registerScript("UC01_2122102_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UC01_2122102_M.xfdl(강의계획서)
        * 작 성         일 명: jiback
        * 작 성         일 자: 2021/02/03
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
        this.chkBook   = "TXTBOOK_DIVCD";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.chkBookName = "교재구분";
        this.chkEvalplan   = "EVALITEM_DIVCD";
        this.chkEvalplanName = "평가구분";
        this.chkWeek   = "WEEK";
        this.chkWeekName = "주차";
        this.chkPO   = "PO_CD";
        this.chkPOName = "학습성과구분";
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
            var strDs    = "dsHakgi|dsWriteYn|dsCompleteYnM|dsCompleteYnD|dsHaknyeon|dsIsu|dsNCS|dsBookDiv|dsEvalitem|dsWeek|dsShare|dsImproDeepDiv|dsCorrDivcd|dsPoLv";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00022|00542|00542|00542|00060|00025|00506|00526|00511|00530|00543|00544|00545|00546";                         // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "X|T|T|X|T|X|X|S|S|X|S|S|S|S";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
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


        	// 강의계획서 작성/수정 권한 조회
        	var strSvc      = "authInit";
            var strUrl      = "/prj/UC/UC01/authRetrieve_2122102_M.do";
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
        	this.divD.form.cboSearchGyeyeol.set_index(0);
        };

        this.fn_PostAuthInit = function()
        {
         	if(this.dsAuth.getColumn(0, "LECT_POSS_YN") == "N")
         	{
        		this.parent.parent.div_Title.form.fn_saveEnable(false);
        		this.parent.parent.div_Title.form.fn_delEnable(false);
        		this.parent.parent.div_Title.form.fn_tmp1Enable(false);
         	}
        };


        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {

            this.gfn_clearSortAll(this.grdMaster);
        	this.gfn_clearSortAll(this.tab.MokpyoGwanli.form.grdHakgwaSebu);
        	this.gfn_clearSortAll(this.tab.MokpyoGwanli.form.grdGyojae);
        	this.gfn_clearSortAll(this.tab.GyosuHakseub.form.grdEvalplan);
        	this.gfn_clearSortAll(this.tab.HakseubSeongGwa.form.grdHakseubSeongGwa);
        	this.gfn_clearSortAll(this.tab.HyangSangSimHwa.form.grdHyangsangSimhwa);
        	this.gfn_clearSortAll(this.tab.SanupCheInsa.form.grdSanupcheInsa);
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
        			case "MokpyoRet":
                            this.fn_PostMokpyoRet();
                        break;
        			case "GyoyukMokpyoRet":
                            this.fn_PostGyoyukMokpyoRet();
                        break;
        			case "SebuRet":
                            this.fn_PostSebuRet();
                        break;
        			case "BookRet":
                            this.fn_PostBookRet();
                        break;
        			case "HaeksimRet":
                            this.fn_PostHaeksimRet();
                        break;
        			case "GyosuRet":
                            this.fn_PostGyosuRet();
                        break;
        			case "PyeongGaRet":
                            this.fn_PostPyeongGaRet();
                        break;
        			case "JangsoRet":
                            this.fn_PostJangsoRet();
                        break;
        			case "EvalplanRet":
                            this.fn_PostEvalplanRet();
                        break;
        			case "WeekRet":
                            this.fn_PostWeekRet();
                        break;
        			case "PORet":
                            this.fn_PostPORet();
                        break;
        			case "ImproDeepRet":
                            this.fn_PostImproDeepRet();
                        break;
        			case "CompRet":
                            this.fn_PostCompRet();
                        break;
                    case "Save":
                            this.fn_PostSave();
                        break;
                    case "New":
                            this.fn_PostNew();
                        break;
        			case "Week16New":
                            this.fn_PostWeek16New();
                        break;
                    case "Del":
                            this.fn_PostDel();
                        break;
        			case "BookDel":
                            this.fn_PostBookDel();
                        break;
        			case "EvalplanDel":
                            this.fn_PostEvalplanDel();
                        break;
        			case "WeekDel":
                            this.fn_PostWeekDel();
                        break;
        			case "PODel":
                            this.fn_PostPODel();
                        break;
        			case "ImproDeepDel":
                            this.fn_PostImproDeepDel();
                        break;
        			case "CompDel":
                            this.fn_PostCompDel();
                        break;
        			case "Copy":
                            this.fn_PostCopy();
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
        					this.ds_input.setColumn(0, "SUBJECT_CD", sRtn[5]);
        					this.ds_input.setColumn(0, "SUBJECT_NM", sRtn[6]);
        				}
        			break;
        		case "sawon" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					this.ds_input.setColumn(0, "PROF_CD", sRtn[0]);
        					this.ds_input.setColumn(0, "PROF_NM", sRtn[1]);
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
        					this.dsCopy.setColumn(0, "LECTCLASS",this.dsMaster.getColumn(this.dsMaster.rowposition,"LECTCLASS"));
        					this.dsCopy.setColumn(0, "PROF_CD",this.dsMaster.getColumn(this.dsMaster.rowposition,"PROF_CD"));
        					this.dsCopy.setColumn(0, "YYYY_COPY", sRtn[0]);
        					this.dsCopy.setColumn(0, "SEMESTER_COPY", sRtn[1]);
        					this.dsCopy.setColumn(0, "DEPT_CD_COPY", sRtn[2]);
        					this.dsCopy.setColumn(0, "MAJOR_CD_COPY", sRtn[3]);
        					this.dsCopy.setColumn(0, "DAYNIGHT_DIVCD_COPY", sRtn[4]);
        					this.dsCopy.setColumn(0, "COMP_GRADE_CD_COPY", sRtn[5]);
        					this.dsCopy.setColumn(0, "SUBJECT_CD_COPY", sRtn[6]);
        					this.dsCopy.setColumn(0, "LECTCLASS_COPY",sRtn[7]);
        					this.dsCopy.setColumn(0, "PROF_CD_COPY",sRtn[8]);

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
        		case "save" :       // 저장
                        this.fn_Save();
                    break;
        		case "del" :        // 삭제
                        this.fn_Del();
                    break;
        		case "tmp1" :        // 강의계획서 가져오기
                        this.fn_Get();
                    break;
        		case "tmp2" :        // 강의계획서 출력
                        this.fn_Print();
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
        	if(this.fn_beforeclose())
        	{
        		var result = this.gfn_confirm( "변경된 데이터가 있습니다. 그래도 이동하시겠습니까?", "저장","", "question" );
        		if(result == 0)
        		{
        			return false;
        		}
        	}

            // 조회조건 셋팅
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
            var strUrl      = "/prj/UC/UC01/Retrieve_2122102_M.do";
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
        	this.dsMokpyo.clearData();
        	this.dsSebu.clearData();
        	this.dsBook.clearData();
        	this.dsHaeksim.clearData();
        	this.dsGyosu.clearData();
        	this.dsPyeongGa.clearData();
        	this.dsJangso.clearData();
        	this.dsEvalplan.clearData();
        	this.dsJuchaGyehoek.clearData();
        	this.dsPO.clearData();
        	this.dsImproDeepNCS.clearData();
        	this.dsComp.clearData();
            this.gfn_getRowCount(this.stRowCnt,this.dsMaster);
        };

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
        	if(this.dsMaster.getColumn(this.dsMaster.rowposition, "SUBJECT_YN") == "N")
        	{
        		if(e.oldrow > -1)
        		{
        			this.alert("교과명세서 등록 후 입력 및 수정이 가능합니다.");
        			this.divD.set_enable(false);
        			this.tab.set_enable(false);
        			return false;
        		}
        	}
        	else
        	{
        		this.divD.set_enable(true);
        		this.tab.set_enable(true);
        		this.dsBindableTab.setColumn(0, "bEnable",	"true");
        		this.dsWeekTemp.clearData();

        		// 조회조건 셋팅
        		this.ds_dInput.setColumn(0,"YYYY",this.dsMaster.getColumn(this.dsMaster.rowposition,"YYYY"));
        		this.ds_dInput.setColumn(0,"SEMESTER",this.dsMaster.getColumn(this.dsMaster.rowposition,"SEMESTER"));
        		this.ds_dInput.setColumn(0,"DEPT_CD",this.dsMaster.getColumn(this.dsMaster.rowposition,"DEPT_CD"));
        		this.ds_dInput.setColumn(0,"MAJOR_CD",this.dsMaster.getColumn(this.dsMaster.rowposition,"MAJOR_CD"));
        		this.ds_dInput.setColumn(0,"DAYNIGHT_DIVCD",this.dsMaster.getColumn(this.dsMaster.rowposition,"DAYNIGHT_DIVCD"));
        		this.ds_dInput.setColumn(0,"COMP_GRADE_CD",this.dsMaster.getColumn(this.dsMaster.rowposition,"COMP_GRADE_CD"));
        		this.ds_dInput.setColumn(0,"SUBJECT_CD",this.dsMaster.getColumn(this.dsMaster.rowposition,"SUBJECT_CD"));
        		this.ds_dInput.setColumn(0,"LECTCLASS",this.dsMaster.getColumn(this.dsMaster.rowposition,"LECTCLASS"));
        		this.ds_dInput.setColumn(0,"PROF_CD",this.dsMaster.getColumn(this.dsMaster.rowposition,"PROF_CD"));

        		// 조회
        		this.fn_GibonJeongboRet();
        		this.fn_MokpyoRet();
        		this.fn_GyoyukMokpyoRet();
        		this.fn_SebuRet();
        		this.fn_BookRet();
        		this.fn_HaeksimRet();
        		this.fn_GyosuRet();
        		this.fn_PyeongGaRet();
        		this.fn_JangsoRet();
        		this.fn_EvalplanRet();
        		this.fn_WeekRet();
        		this.fn_PORet();
        		this.fn_ImproDeepRet();
        		this.fn_CompRet();
        	}

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
            var strUrl      = "/prj/UC/UC01/gibonRetrieve_2122102_T01.do";
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
        	return false;
        };

        /**********************************************************************
        	05-2. 목표관리 조회 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_MokpyoRet = function()
        {
        	var strSvc      = "MokpyoRet";
            var strUrl      = "/prj/UC/UC01/mokpyoRetrieve_2122102_T01.do";
            var strInDs     = "ds_dInput=ds_dInput";
            var strOutDs    = "dsMokpyo=dsMokpyo";
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
        this.fn_PostMokpyoRet = function()
        {
        	// 목표관리 결과값이 없을경우 입력할 수 있게 로우 한줄 추가, 역량기반으로 설정
        	if(this.dsMokpyo.rowcount < 1)
        	{
        		var nRow = this.dsMokpyo.addRow();
        		this.dsMokpyo.setColumn(nRow, "NCS_USE_DIVCD", 4);
        	}

        	// NCS활용구분이 NCS 미활용인 경우 향상/심화교육과정, 산업체인사 탭 비활성화
        	if(this.divD.form.cboSearchNCS.value == 3)
        	{
        		this.tab.HyangSangSimHwa.set_enable(false);
        		this.tab.SanupCheInsa.set_enable(false);
        	}
        	else
        	{
        		this.tab.HyangSangSimHwa.set_enable(true);
        		this.tab.SanupCheInsa.set_enable(true);
        	}
        };

        /**********************************************************************
        	05-3. 교육목표관리 조회 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_GyoyukMokpyoRet = function()
        {
            var strSvc      = "GyoyukMokpyoRet";
            var strUrl      = "/prj/UC/UC01/gyoyukMokpyoRetrieve_2122102_T01.do";
            var strInDs     = "ds_dInput=ds_dInput";
            var strOutDs    = "dsGyoyukMokpyo=dsGyoyukMokpyo";
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

        /**********************************************************************
        	05-4. 세부목표관리 조회 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_SebuRet = function()
        {
            var strSvc      = "SebuRet";
            var strUrl      = "/prj/UC/UC01/sebuRetrieve_2122102_T01.do";
            var strInDs     = "ds_dInput=ds_dInput";
            var strOutDs    = "dsSebu=dsSebu";
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
        this.fn_PostSebuRet = function()
        {
        	 this.gfn_getRowCount(this.tab.MokpyoGwanli.form.stRowCnt,this.dsSebu);
        };

        /**********************************************************************
        	05-5. 교재관리 조회 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_BookRet = function()
        {
            var strSvc      = "BookRet";
            var strUrl      = "/prj/UC/UC01/bookRetrieve_2122102_T01.do";
            var strInDs     = "ds_dInput=ds_dInput";
            var strOutDs    = "dsBook=dsBook";
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
        this.fn_PostBookRet = function()
        {
        	 this.gfn_getRowCount(this.tab.MokpyoGwanli.form.stRowCnt2,this.dsBook);
        };

        /**********************************************************************
        	05-6. 대학핵심역량매핑 조회 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_HaeksimRet = function()
        {
            var strSvc      = "HaeksimRet";
            var strUrl      = "/prj/UC/UC01/Retrieve_2122102_T02.do";
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
        	objCheckBox.set_text(chkNm);
        	objCheckBox.set_falsevalue(null);
        	objCheckBox.set_truevalue(chkNUM);
        	objCheckBox.set_readonly(true);
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
        	05-7. 교수학습방법 조회 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_GyosuRet = function()
        {
            var strSvc      = "GyosuRet";
            var strUrl      = "/prj/UC/UC01/gyosuRetrieve_2122102_T03.do";
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
        			this.tab.GyosuHakseub.form.edtGyosuGita.set_value(chkNote);
        			this.tab.GyosuHakseub.form.edtGyosuGita.set_readonly(false);
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
        	05-8. 평가방법 조회 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_PyeongGaRet = function()
        {
            var strSvc      = "PyeongGaRet";
            var strUrl      = "/prj/UC/UC01/pyeongGaRetrieve_2122102_T03.do";
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
        	05-9. 교육장소 조회 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_JangsoRet = function()
        {
            var strSvc      = "JangsoRet";
            var strUrl      = "/prj/UC/UC01/jangsoRetrieve_2122102_T03.do";
            var strInDs     = "ds_dInput=ds_dInput";
            var strOutDs    = "dsJangso=dsJangso";
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
        this.fn_PostJangsoRet = function()
        {
        	this.fn_JangsoCheckbox();
        };

        /**
         * 교육장소 체크박스 동적 생성
         */
        this.fn_JangsoCheckbox = function()
        {
        	var chkId = "";
        	var leftSz = 0;
        	var topSz  = 0;
        	var colSize	= 7;    // CheckBox 열의 갯수생성

        	this.tab.GyosuHakseub.form.edtJangsoGita.set_readonly(true);
        	this.tab.GyosuHakseub.form.edtJangsoGita.set_value(null);
        	this.fn_setObjCheckBoxDestroy(this.tab.GyosuHakseub.form.divJangsoCheckbox.form);

        	for (var i = 0; i < this.dsJangso.getRowCount(); i++)
        	{
        		var chkNUM 		 = this.dsJangso.getColumn(i, "SUBITEM_CD");
        		var chkNm 		 = this.dsJangso.getColumn(i, "CD_NM");
        		var chkSubjectCd = this.dsJangso.getColumn(i, "SUBJECT_CD");
        		var chkNote		 = this.dsJangso.getColumn(i, "NOTE");
        		chkId = "CheckBox"+ chkNUM;
        		this.fn_JangsoCreateCheckBox(chkId,chkNUM,chkNm,leftSz,topSz,chkSubjectCd,chkNote);
        		var chkObj = this.tab.GyosuHakseub.form.divJangsoCheckbox.form.components[chkId];
        		var colNum      = (i+1) % colSize;
        		if(chkSubjectCd != null)
        		{
        			this.dsJangso.setColumn(i, "SUBITEM_CD", chkNUM);
        		}
        		else
        		{
        			this.dsJangso.setColumn(i, "SUBITEM_CD", null);
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
        	this.tab.GyosuHakseub.form.divJangsoCheckbox.form.resetScroll();
        };

        this.fn_JangsoCreateCheckBox = function (chkId,chkNUM,chkNm,leftSz,topSz,chkSubjectCd,chkNote)
        {
        	var colWidth  	= 140;  // CheckBox 사이즈 설정
        	var colHeight   = 25;   // CheckBox 높이 설정

        	var objCheckBox = new CheckBox();
        	objCheckBox.init(chkId, leftSz,topSz,colWidth,colHeight);
        	this.tab.GyosuHakseub.form.divJangsoCheckbox.addChild(chkId, objCheckBox);
        	objCheckBox.addEventHandler("onclick", this.fn_isJangsoClick, this);
        	objCheckBox.set_text(chkNm);
        	objCheckBox.set_falsevalue(null);
        	objCheckBox.set_truevalue(chkNUM);
        	if(chkSubjectCd != null)
        	{
        		if(chkNUM == '305')
        		{
        			this.tab.GyosuHakseub.form.edtJangsoGita.set_value(chkNote);
        			this.tab.GyosuHakseub.form.edtJangsoGita.set_readonly(false);
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
        	05-10. 평가배점관리 조회 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_EvalplanRet = function()
        {
            var strSvc      = "EvalplanRet";
            var strUrl      = "/prj/UC/UC01/evalplanRetrieve_2122102_T03.do";
            var strInDs     = "ds_dInput=ds_dInput";
            var strOutDs    = "dsEvalplan=dsEvalplan";
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
        this.fn_PostEvalplanRet = function()
        {
        	 this.gfn_getRowCount(this.tab.GyosuHakseub.form.stRowCnt,this.dsEvalplan);
        };

        /**********************************************************************
        	05-11. 역량주차별 계획관리 조회 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_WeekRet = function()
        {
        	// 콤보박스 조회
        	var strSvc      = "";
            var strUrl      = "/prj/UC/UC01/degrComboRetrieve_2122102_T04.do";
            var strInDs     = "ds_dInput=ds_dInput";
            var strOutDs    = "dsDegrCombo=dsDegrCombo";
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

        	// 해당과목 직무역량 가져오기
            var strSvc      = "";
            var strUrl      = "/prj/UC/UC01/jikmuRetrieve_2122102_T04.do";
            var strInDs     = "ds_dInput=ds_dInput";
            var strOutDs    = "dsWeekTemp=dsWeekTemp";
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

            var strSvc      = "WeekRet";
            var strUrl      = "/prj/UC/UC01/Retrieve_2122102_T04.do";
            var strInDs     = "ds_dInput=ds_dInput";
            var strOutDs    = "dsJuchaGyehoek=dsJuchaGyehoek";
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
        this.fn_PostWeekRet = function()
        {
        	 this.gfn_getRowCount(this.tab.YeokRyangJuCha.form.stRowCnt,this.dsJuchaGyehoek);
        };

        /**********************************************************************
        	05-12. 학습성과 조회 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_PORet = function()
        {
        	// 콤보박스조회
        	var strSvc      = "";
            var strUrl      = "/prj/UC/UC01/poComboRetrieve_2122102_T05.do";
            var strInDs     = "ds_dInput=ds_dInput";
            var strOutDs    = "dsPoCombo=dsPoCombo";
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

            var strSvc      = "PORet";
            var strUrl      = "/prj/UC/UC01/Retrieve_2122102_T05.do";
            var strInDs     = "ds_dInput=ds_dInput";
            var strOutDs    = "dsPO=dsPO";
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
        this.fn_PostPORet = function()
        {
        	 this.gfn_getRowCount(this.tab.HakseubSeongGwa.form.stRowCnt,this.dsPO);
        };

        /**********************************************************************
        	05-13. 향상/심화 NCS 조회 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_ImproDeepRet = function()
        {
        	// 콤보박스 조회
        	var strSvc      = "";
            var strUrl      = "/prj/UC/UC01/ncsComboRetrieve_2122102_T06.do";
            var strInDs     = "ds_dInput=ds_dInput";
            var strOutDs    = "dsImproDeepNCSCombo=dsImproDeepNCSCombo";
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

            var strSvc      = "ImproDeepRet";
            var strUrl      = "/prj/UC/UC01/Retrieve_2122102_T06.do";
            var strInDs     = "ds_dInput=ds_dInput";
            var strOutDs    = "dsImproDeepNCS=dsImproDeepNCS";
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
        this.fn_PostImproDeepRet = function()
        {
        	 this.gfn_getRowCount(this.tab.HyangSangSimHwa.form.stRowCnt,this.dsImproDeepNCS);
        };

        /**********************************************************************
        	05-14. 산업체인사 조회 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_CompRet = function()
        {
            var strSvc      = "CompRet";
            var strUrl      = "/prj/UC/UC01/Retrieve_2122102_T07.do";
            var strInDs     = "ds_dInput=ds_dInput";
            var strOutDs    = "dsComp=dsComp";
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
        this.fn_PostCompRet = function()
        {
        	 this.gfn_getRowCount(this.tab.SanupCheInsa.form.stRowCnt,this.dsComp);
        };

        /**********************************************************************
                06-1. 교재관리 추가 함수 선언
        ***********************************************************************/
        this.tab_MokpyoGwanli_btnNew_onclick = function(obj,e)
        {
        	this.fn_BookNew();
        };
        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_BookNew = function()
        {
            this.dsBook.addRow();
        	this.gfn_getRowCount(this.tab.MokpyoGwanli.form.stRowCnt2,this.dsBook);
        };

        /**********************************************************************
                06-2. 평가배점관리 추가 함수 선언
        ***********************************************************************/
        this.tab_GyosuHakseub_btnNew_onclick = function(obj,e)
        {
        	this.fn_EvalplanNew();
        };
        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_EvalplanNew = function()
        {
            this.dsEvalplan.addRow();
        	this.gfn_getRowCount(this.tab.GyosuHakseub.form.stRowCnt,this.dsEvalplan);
        };

        /**********************************************************************
                06-3. 역량주차별 계획관리 추가 함수 선언
        ***********************************************************************/
        this.tab_YeokRyangJuCha_btnNew_onclick = function(obj,e)
        {
        	this.fn_WeekNew();
        };
        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_WeekNew = function()
        {
            this.dsJuchaGyehoek.addRow();
        	this.gfn_getRowCount(this.tab.YeokRyangJuCha.form.stRowCnt,this.dsJuchaGyehoek);
        };

        /**********************************************************************
                06-4. 학습성과 추가 함수 선언
        ***********************************************************************/
        this.tab_HakseubSeongGwa_btnNew_onclick = function(obj,e)
        {
        	this.fn_PONew();
        };
        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_PONew = function()
        {
            this.dsPO.addRow();
        	this.gfn_getRowCount(this.tab.HakseubSeongGwa.form.stRowCnt,this.dsPO);
        };

        /**********************************************************************
                06-5. 향상/심화 NCS 추가 함수 선언
        ***********************************************************************/
        this.tab_HyangSangSimHwa_btnNew_onclick = function(obj,e)
        {
        	this.fn_ImproDeepNew();
        };
        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_ImproDeepNew = function()
        {
            this.dsImproDeepNCS.addRow();
        	this.gfn_getRowCount(this.tab.HyangSangSimHwa.form.stRowCnt,this.dsImproDeepNCS);
        };

        /**********************************************************************
                06-6. 산업체인사 추가 함수 선언
        ***********************************************************************/
        this.tab_SanupCheInsa_btnNew_onclick = function(obj,e)
        {
        	this.fn_CompNew();
        };
        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_CompNew = function()
        {
            this.dsComp.addRow();
        	this.gfn_getRowCount(this.tab.SanupCheInsa.form.stRowCnt,this.dsComp);
        };

        /**********************************************************************
                06-7. 역량주차별 계획관리 16주차 일괄생성 함수 선언
        ***********************************************************************/
        this.tab_YeokRyangJuCha_btn16Add_onclick = function(obj,e)
        {
        	var result = this.gfn_confirm( "16주차 일괄생성시 기존 주차계획은 전부 삭제됩니다. 정말 삭제 하시겠습니까?", "삭제정보","","question" );
        	if(result == 0)
        	{
        		return false;
        	}

        	this.fn_Week16New();
        };

        this.fn_Week16New = function()
        {
             var strSvc      = "Week16New";
             var strUrl      = "/prj/UC/UC01/Delete_2122102_T04.do";
             var strInDs     = "dsJuchaGyehoek=dsJuchaGyehoek:a";
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

        this.fn_PostWeek16New = function()
        {
        	this.dsJuchaGyehoek.clearData();
        	for(var i=0; i<16; i++)
        	{
        		this.dsJuchaGyehoek.addRow();
        		this.dsJuchaGyehoek.setColumn(i, "WEEK", i+1);
        		this.dsJuchaGyehoek.setColumn(i, "SORT", i+1);
        		this.dsJuchaGyehoek.setColumn(i, "JOB_COMP_NM", this.dsWeekTemp.getColumn(0, "JOB_COMP_NM"));
        	}
        	this.gfn_getRowCount(this.tab.YeokRyangJuCha.form.stRowCnt,this.dsJuchaGyehoek);
        };

        /**********************************************************************
                06-8. 대학핵심역량 빈 체크박스 생성
        ***********************************************************************/
        this.fn_NewHaeksimCheckbox = function()
        {
        	this.tab.YeokRyangMapping.form.divHaeksimCheckbox.form.CheckBox001.set_value(null);
        	this.tab.YeokRyangMapping.form.divHaeksimCheckbox.form.CheckBox002.set_value(null);
        	this.fn_isHaeksimClick();
        };

        /**********************************************************************
                06-9. 교수학습방법 빈 체크박스 생성
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
                06-10. 평가방법 빈 체크박스 생성
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
                06-11. 교육장소 빈 체크박스 생성
        ***********************************************************************/
        this.fn_NewJangsoCheckbox = function()
        {
        	this.tab.GyosuHakseub.form.divJangsoCheckbox.form.CheckBox301.set_value(null);
        	this.tab.GyosuHakseub.form.divJangsoCheckbox.form.CheckBox302.set_value(null);
        	this.tab.GyosuHakseub.form.divJangsoCheckbox.form.CheckBox303.set_value(null);
        	this.tab.GyosuHakseub.form.divJangsoCheckbox.form.CheckBox304.set_value(null);
        	this.tab.GyosuHakseub.form.divJangsoCheckbox.form.CheckBox305.set_value(null);
        	this.fn_isJangsoClick();
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
            if(this.dsGibonJeongbo.rowcount < 1)
            {
                this.gfn_alert("개설과목을 선택해주세요.","삭제정보","","warning");
                return false;
            }
            var result = this.gfn_confirm( "강의계획서 및 평가계획서 관련한 모든 데이터가 삭제됩니다.\n정말 삭제 하시겠습니까?", "삭제정보","","question" );

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
            var strUrl      = "/prj/UC/UC01/Delete_2122102_M.do";
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
        	this.dsMokpyo.clearData();
        	this.dsSebu.clearData();
        	this.dsBook.clearData();
        	this.dsHaeksim.clearData();
        	this.dsGyosu.clearData();
        	this.dsPyeongGa.clearData();
        	this.dsJangso.clearData();
        	this.dsEvalplan.clearData();
        	this.dsJuchaGyehoek.clearData();
        	this.dsPO.clearData();
        	this.dsImproDeepNCS.clearData();
        	this.dsComp.clearData();
         	this.fn_NewHaeksimCheckbox();
         	this.fn_NewGyosuCheckbox();
         	this.fn_NewPyeongGaCheckbox();
        	this.fn_NewJangsoCheckbox();
            this.fn_Ret();
        };

        /**********************************************************************
                07-1. 교재관리 삭제 함수 선언
        ***********************************************************************/
        this.tab_MokpyoGwanli_btnDel_onclick = function(obj,e)
        {
            //멀티삭제용도
            if(this.dsBook.rowcount < 1 || this.dsBook.findRow("CHK",1) == -1)
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
            this.dsBook.set_enableevent(false);
            for(var i=this.dsBook.rowcount-1;i>-1;i--)
            {
                if(this.dsBook.getColumn(i,"CHK") == "1")
                {
                    this.dsBook.deleteRow(i);
                }
            }
            this.dsBook.set_enableevent(true);

        	this.fn_BookDel();
        };

        /**
         * 기능 : Row 삭제 또는 Transaction 삭제 처리
         */
        this.fn_BookDel = function()
        {
            var strSvc      = "BookDel";
            var strUrl      = "/prj/UC/UC01/bookDelete_2122102_T01.do";
            var strInDs     = "dsBook=dsBook:u";
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

        this.fn_PostBookDel = function()
        {
        	this.tab.MokpyoGwanli.form.grdGyojae.setCellProperty("head", 0, "text", 0);
            this.gfn_getRowCount(this.tab.MokpyoGwanli.form.stRowCnt2,this.dsBook);
        };


        /**********************************************************************
                07-2. 평가배점관리 삭제 함수 선언
        ***********************************************************************/
        this.tab_GyosuHakseub_btnDel_onclick = function(obj,e)
        {
            //멀티삭제용도
            if(this.dsEvalplan.rowcount < 1 || this.dsEvalplan.findRow("CHK",1) == -1)
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
            this.dsEvalplan.set_enableevent(false);
            for(var i=this.dsEvalplan.rowcount-1;i>-1;i--)
            {
                if(this.dsEvalplan.getColumn(i,"CHK") == "1")
                {
                    this.dsEvalplan.deleteRow(i);
                }
            }
            this.dsEvalplan.set_enableevent(true);

        	this.fn_EvalplanDel();
        };

        /**
         * 기능 : Row 삭제 또는 Transaction 삭제 처리
         */
        this.fn_EvalplanDel = function()
        {
            var strSvc      = "EvalplanDel";
            var strUrl      = "/prj/UC/UC01/evalplanDelete_2122102_T03.do";
            var strInDs     = "dsEvalplan=dsEvalplan:u";
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

        this.fn_PostEvalplanDel = function()
        {
        	this.tab.GyosuHakseub.form.grdEvalplan.setCellProperty("head", 0, "text", 0);
            this.gfn_getRowCount(this.tab.GyosuHakseub.form.stRowCnt,this.dsEvalplan);
        };

        /**********************************************************************
                07-3. 역량주자별 계획관리 삭제 함수 선언
        ***********************************************************************/
        this.tab_YeokRyangJuCha_btnDel_onclick = function(obj,e)
        {
            //멀티삭제용도
            if(this.dsJuchaGyehoek.rowcount < 1 || this.dsJuchaGyehoek.findRow("CHK",1) == -1)
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
            this.dsJuchaGyehoek.set_enableevent(false);
            for(var i=this.dsJuchaGyehoek.rowcount-1;i>-1;i--)
            {
                if(this.dsJuchaGyehoek.getColumn(i,"CHK") == "1")
                {
                    this.dsJuchaGyehoek.deleteRow(i);
                }
            }
            this.dsJuchaGyehoek.set_enableevent(true);

        	this.fn_WeekDel();
        };

        /**
         * 기능 : Row 삭제 또는 Transaction 삭제 처리
         */
        this.fn_WeekDel = function()
        {
            var strSvc      = "WeekDel";
            var strUrl      = "/prj/UC/UC01/Delete_2122102_T04.do";
            var strInDs     = "dsJuchaGyehoek=dsJuchaGyehoek:u";
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

        this.fn_PostWeekDel = function()
        {
        	this.tab.YeokRyangJuCha.form.grdJuchaGyehoek.setCellProperty("head", 0, "text", 0);
            this.gfn_getRowCount(this.tab.YeokRyangJuCha.form.stRowCnt,this.dsJuchaGyehoek);
        };
        /**********************************************************************
                07-4. 학습성과 삭제 함수 선언
        ***********************************************************************/
        this.tab_HakseubSeongGwa_btnDel_onclick = function(obj,e)
        {
            //멀티삭제용도
            if(this.dsPO.rowcount < 1 || this.dsPO.findRow("CHK",1) == -1)
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
            this.dsPO.set_enableevent(false);
            for(var i=this.dsPO.rowcount-1;i>-1;i--)
            {
                if(this.dsPO.getColumn(i,"CHK") == "1")
                {
                    this.dsPO.deleteRow(i);
                }
            }
            this.dsPO.set_enableevent(true);

        	this.fn_PODel();
        };

        /**
         * 기능 : Row 삭제 또는 Transaction 삭제 처리
         */
        this.fn_PODel = function()
        {
            var strSvc      = "PODel";
            var strUrl      = "/prj/UC/UC01/Delete_2122102_T05.do";
            var strInDs     = "dsPO=dsPO:u";
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

        this.fn_PostPODel = function()
        {
        	this.tab.HakseubSeongGwa.form.grdHakseubSeongGwa.setCellProperty("head", 0, "text", 0);
            this.gfn_getRowCount(this.tab.HakseubSeongGwa.form.stRowCnt,this.dsPO);
        };

        /**********************************************************************
                07-5. 향상/심화 삭제 함수 선언
        ***********************************************************************/
        this.tab_HyangSangSimHwa_btnDel_onclick = function(obj,e)
        {
            //멀티삭제용도
            if(this.dsImproDeepNCS.rowcount < 1 || this.dsImproDeepNCS.findRow("CHK",1) == -1)
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
            this.dsImproDeepNCS.set_enableevent(false);
            for(var i=this.dsImproDeepNCS.rowcount-1;i>-1;i--)
            {
                if(this.dsImproDeepNCS.getColumn(i,"CHK") == "1")
                {
                    this.dsImproDeepNCS.deleteRow(i);
                }
            }
            this.dsImproDeepNCS.set_enableevent(true);

        	this.fn_ImproDeepDel();
        };

        /**
         * 기능 : Row 삭제 또는 Transaction 삭제 처리
         */
        this.fn_ImproDeepDel = function()
        {
            var strSvc      = "ImproDeepDel";
            var strUrl      = "/prj/UC/UC01/Delete_2122102_T06.do";
            var strInDs     = "dsImproDeepNCS=dsImproDeepNCS:u";
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

        this.fn_PostImproDeepDel = function()
        {
        	this.tab.HyangSangSimHwa.form.grdHyangsangSimhwa.setCellProperty("head", 0, "text", 0);
            this.gfn_getRowCount(this.tab.HyangSangSimHwa.form.stRowCnt,this.dsImproDeepNCS);
        };

        /**********************************************************************
                07-6. 산업체인사 삭제 함수 선언
        ***********************************************************************/
        this.tab_SanupCheInsa_btnDel_onclick = function(obj,e)
        {
            //멀티삭제용도
            if(this.dsComp.rowcount < 1 || this.dsComp.findRow("CHK",1) == -1)
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
            this.dsComp.set_enableevent(false);
            for(var i=this.dsComp.rowcount-1;i>-1;i--)
            {
                if(this.dsComp.getColumn(i,"CHK") == "1")
                {
                    this.dsComp.deleteRow(i);
                }
            }
            this.dsComp.set_enableevent(true);

        	this.fn_CompDel();
        };

        /**
         * 기능 : Row 삭제 또는 Transaction 삭제 처리
         */
        this.fn_CompDel = function()
        {
            var strSvc      = "CompDel";
            var strUrl      = "/prj/UC/UC01/Delete_2122102_T07.do";
            var strInDs     = "dsComp=dsComp:u";
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

        this.fn_PostCompDel = function()
        {
        	this.tab.SanupCheInsa.form.grdSanupcheInsa.setCellProperty("head", 0, "text", 0);
            this.gfn_getRowCount(this.tab.SanupCheInsa.form.stRowCnt,this.dsComp);
        };

        /**********************************************************************
                08. 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave = function()
        {
        	// 필수 입력사항 체크 - 교재 구분
            var chkFocusFlg = true;
            var result      = this.gfn_cmmnChkEssentialItem(this.dsBook, this.chkBook, this.chkBookName, this.tab.MokpyoGwanli.form.grdGyojae, chkFocusFlg, this);

            if (result[0] != "success")
            {
                this.gfn_alert(result[0],"저장정보","","question");
                this.dsBook.set_rowposition(result[1]); //데이터셋 변경
                return false;
            }

            // 필수 입력사항 체크 - 평가 구분
            var chkFocusFlg = true;
            var result      = this.gfn_cmmnChkEssentialItem(this.dsEvalplan, this.chkEvalplan, this.chkEvalplanName, this.tab.GyosuHakseub.form.grdEvalplan, chkFocusFlg, this);

            if (result[0] != "success")
            {
                this.gfn_alert(result[0],"저장정보","","question");
                this.dsEvalplan.set_rowposition(result[1]); //데이터셋 변경
                return false;
            }

        	// 필수 입력사항 체크 - 주차
            var chkFocusFlg = true;
            var result      = this.gfn_cmmnChkEssentialItem(this.dsJuchaGyehoek, this.chkWeek, this.chkWeekName, this.tab.YeokRyangJuCha.form.grdJuchaGyehoek, chkFocusFlg, this);

            if (result[0] != "success")
            {
                this.gfn_alert(result[0],"저장정보","","question");
                this.dsJuchaGyehoek.set_rowposition(result[1]); //데이터셋 변경
                return false;
            }

        	// 필수 입력사항 체크 - 학습 성과 구분
            var chkFocusFlg = true;
            var result      = this.gfn_cmmnChkEssentialItem(this.dsPO, this.chkPO, this.chkPOName, this.tab.HakseubSeongGwa.form.grdHakseubSeongGwa, chkFocusFlg, this);

            if (result[0] != "success")
            {
                this.gfn_alert(result[0],"저장정보","","question");
                this.dsPO.set_rowposition(result[1]); //데이터셋 변경
                return false;
            }

        	// 교과목명세서를 등록하지 않은 경우
        	if(this.dsMaster.getColumn(this.dsMaster.rowposition, "SUBJECT_YN") == "N")
        	{
        		this.alert("교과명세서 등록 후 입력 및 수정이 가능합니다.");
        		return false;
        	}

        	// 개설과목을 선택하지 않고 저장을 누를 경우
        	if(this.dsGibonJeongbo.rowcount < 1)
            {
                this.gfn_alert("개설과목을 선택해주세요.","삭제정보","","warning");
                return false;
            }

        	// 학습성과 구분이 중복되는 경우
        	var nCnt = 0;
        	for(var i=0; i<this.dsPO.rowcount; i++)
        	{
        		for(var j=0; j<this.dsPO.rowcount; j++)
        		{
        			if(this.dsPO.getColumn(i, "PO_CD") == this.dsPO.getColumn(j, "PO_CD"))
        			{
        				if(i != j)
        				{
        					nCnt++;
        				}
        			}
        		}
        	}

        	if(nCnt > 1)
        	{
        		this.alert("학습성과 구분이 중복됩니다.");
        		return false;
        	}

        	// 평가 배점이 100점이 아닌 경우
        	var total = 0;
        	for(var i=0; i<this.dsEvalplan.rowcount; i++)
        	{
        		total = total + this.dsEvalplan.getColumn(i, "POINT");
        	}
        	if(total != 100)
        	{
        		this.gfn_alert("평가배점의 합은 100점이 되어야 합니다.","","","warning");
        		return false;
        	}

        	var result = this.gfn_confirm( "저장 하시겠습니까?", "저장","", "question" );
        	if(result == 0)
        	{
        	 return false;
        	}

        	// 학과목표 과목정보 세팅
        	for(var i=this.dsMokpyo.rowcount-1;i>-1;i--)
        	{
        		this.dsMokpyo.setColumn(i,"YYYY",this.dsGibonJeongbo.getColumn(0,"YYYY"));
        		this.dsMokpyo.setColumn(i,"SEMESTER",this.dsGibonJeongbo.getColumn(0,"SEMESTER"));
        		this.dsMokpyo.setColumn(i,"DEPT_CD",this.dsGibonJeongbo.getColumn(0,"DEPT_CD"));
        		this.dsMokpyo.setColumn(i,"MAJOR_CD",this.dsGibonJeongbo.getColumn(0,"MAJOR_CD"));
        		this.dsMokpyo.setColumn(i,"DAYNIGHT_DIVCD",this.dsGibonJeongbo.getColumn(0,"DAYNIGHT_DIVCD"));
        		this.dsMokpyo.setColumn(i,"COMP_GRADE_CD",this.dsGibonJeongbo.getColumn(0,"COMP_GRADE_CD"));
        		this.dsMokpyo.setColumn(i,"SUBJECT_CD",this.dsGibonJeongbo.getColumn(0,"SUBJECT_CD"));
        		this.dsMokpyo.setColumn(i,"LECTCLASS",this.dsGibonJeongbo.getColumn(0,"LECTCLASS"));
        		this.dsMokpyo.setColumn(i,"PROF_CD",this.dsGibonJeongbo.getColumn(0,"PROF_CD"));
        	}

        	// 학과세부목표 과목정보 세팅
        	for(var i=this.dsSebu.rowcount-1;i>-1;i--)
        	{
        		this.dsSebu.setColumn(i,"YYYY",this.dsGibonJeongbo.getColumn(0,"YYYY"));
        		this.dsSebu.setColumn(i,"SEMESTER",this.dsGibonJeongbo.getColumn(0,"SEMESTER"));
        		this.dsSebu.setColumn(i,"DEPT_CD",this.dsGibonJeongbo.getColumn(0,"DEPT_CD"));
        		this.dsSebu.setColumn(i,"MAJOR_CD",this.dsGibonJeongbo.getColumn(0,"MAJOR_CD"));
        		this.dsSebu.setColumn(i,"DAYNIGHT_DIVCD",this.dsGibonJeongbo.getColumn(0,"DAYNIGHT_DIVCD"));
        		this.dsSebu.setColumn(i,"COMP_GRADE_CD",this.dsGibonJeongbo.getColumn(0,"COMP_GRADE_CD"));
        		this.dsSebu.setColumn(i,"SUBJECT_CD",this.dsGibonJeongbo.getColumn(0,"SUBJECT_CD"));
        		this.dsSebu.setColumn(i,"LECTCLASS",this.dsGibonJeongbo.getColumn(0,"LECTCLASS"));
        		this.dsSebu.setColumn(i,"PROF_CD",this.dsGibonJeongbo.getColumn(0,"PROF_CD"));
        	}

        	// 교재관리 과목정보 세팅
        	for(var i=this.dsBook.rowcount-1;i>-1;i--)
        	{
        		this.dsBook.setColumn(i,"YYYY",this.dsGibonJeongbo.getColumn(0,"YYYY"));
        		this.dsBook.setColumn(i,"SEMESTER",this.dsGibonJeongbo.getColumn(0,"SEMESTER"));
        		this.dsBook.setColumn(i,"DEPT_CD",this.dsGibonJeongbo.getColumn(0,"DEPT_CD"));
        		this.dsBook.setColumn(i,"MAJOR_CD",this.dsGibonJeongbo.getColumn(0,"MAJOR_CD"));
        		this.dsBook.setColumn(i,"DAYNIGHT_DIVCD",this.dsGibonJeongbo.getColumn(0,"DAYNIGHT_DIVCD"));
        		this.dsBook.setColumn(i,"COMP_GRADE_CD",this.dsGibonJeongbo.getColumn(0,"COMP_GRADE_CD"));
        		this.dsBook.setColumn(i,"SUBJECT_CD",this.dsGibonJeongbo.getColumn(0,"SUBJECT_CD"));
        		this.dsBook.setColumn(i,"LECTCLASS",this.dsGibonJeongbo.getColumn(0,"LECTCLASS"));
        		this.dsBook.setColumn(i,"PROF_CD",this.dsGibonJeongbo.getColumn(0,"PROF_CD"));
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
        		this.dsGyosu.setColumn(i,"LECTCLASS",this.dsGibonJeongbo.getColumn(0,"LECTCLASS"));
        		this.dsGyosu.setColumn(i,"PROF_CD",this.dsGibonJeongbo.getColumn(0,"PROF_CD"));
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
        		this.dsPyeongGa.setColumn(i,"LECTCLASS",this.dsGibonJeongbo.getColumn(0,"LECTCLASS"));
        		this.dsPyeongGa.setColumn(i,"PROF_CD",this.dsGibonJeongbo.getColumn(0,"PROF_CD"));
        	}

        	// 교육장소 과목정보 세팅
        	for(var i=this.dsJangso.rowcount-1;i>-1;i--)
        	{
        		this.dsJangso.setColumn(i,"YYYY",this.dsGibonJeongbo.getColumn(0,"YYYY"));
        		this.dsJangso.setColumn(i,"SEMESTER",this.dsGibonJeongbo.getColumn(0,"SEMESTER"));
        		this.dsJangso.setColumn(i,"DEPT_CD",this.dsGibonJeongbo.getColumn(0,"DEPT_CD"));
        		this.dsJangso.setColumn(i,"MAJOR_CD",this.dsGibonJeongbo.getColumn(0,"MAJOR_CD"));
        		this.dsJangso.setColumn(i,"DAYNIGHT_DIVCD",this.dsGibonJeongbo.getColumn(0,"DAYNIGHT_DIVCD"));
        		this.dsJangso.setColumn(i,"COMP_GRADE_CD",this.dsGibonJeongbo.getColumn(0,"COMP_GRADE_CD"));
        		this.dsJangso.setColumn(i,"SUBJECT_CD",this.dsGibonJeongbo.getColumn(0,"SUBJECT_CD"));
        		this.dsJangso.setColumn(i,"LECTCLASS",this.dsGibonJeongbo.getColumn(0,"LECTCLASS"));
        		this.dsJangso.setColumn(i,"PROF_CD",this.dsGibonJeongbo.getColumn(0,"PROF_CD"));
        	}

        	// 평가배점관리 과목정보 세팅
        	for(var i=this.dsEvalplan.rowcount-1;i>-1;i--)
        	{
        		this.dsEvalplan.setColumn(i,"YYYY",this.dsGibonJeongbo.getColumn(0,"YYYY"));
        		this.dsEvalplan.setColumn(i,"SEMESTER",this.dsGibonJeongbo.getColumn(0,"SEMESTER"));
        		this.dsEvalplan.setColumn(i,"DEPT_CD",this.dsGibonJeongbo.getColumn(0,"DEPT_CD"));
        		this.dsEvalplan.setColumn(i,"MAJOR_CD",this.dsGibonJeongbo.getColumn(0,"MAJOR_CD"));
        		this.dsEvalplan.setColumn(i,"DAYNIGHT_DIVCD",this.dsGibonJeongbo.getColumn(0,"DAYNIGHT_DIVCD"));
        		this.dsEvalplan.setColumn(i,"COMP_GRADE_CD",this.dsGibonJeongbo.getColumn(0,"COMP_GRADE_CD"));
        		this.dsEvalplan.setColumn(i,"SUBJECT_CD",this.dsGibonJeongbo.getColumn(0,"SUBJECT_CD"));
        		this.dsEvalplan.setColumn(i,"LECTCLASS",this.dsGibonJeongbo.getColumn(0,"LECTCLASS"));
        		this.dsEvalplan.setColumn(i,"PROF_CD",this.dsGibonJeongbo.getColumn(0,"PROF_CD"));
        	}

        	// 역량주차별 계획관리 과목정보 세팅
        	for(var i=this.dsJuchaGyehoek.rowcount-1;i>-1;i--)
        	{
        		this.dsJuchaGyehoek.setColumn(i,"YYYY",this.dsGibonJeongbo.getColumn(0,"YYYY"));
        		this.dsJuchaGyehoek.setColumn(i,"SEMESTER",this.dsGibonJeongbo.getColumn(0,"SEMESTER"));
        		this.dsJuchaGyehoek.setColumn(i,"DEPT_CD",this.dsGibonJeongbo.getColumn(0,"DEPT_CD"));
        		this.dsJuchaGyehoek.setColumn(i,"MAJOR_CD",this.dsGibonJeongbo.getColumn(0,"MAJOR_CD"));
        		this.dsJuchaGyehoek.setColumn(i,"DAYNIGHT_DIVCD",this.dsGibonJeongbo.getColumn(0,"DAYNIGHT_DIVCD"));
        		this.dsJuchaGyehoek.setColumn(i,"COMP_GRADE_CD",this.dsGibonJeongbo.getColumn(0,"COMP_GRADE_CD"));
        		this.dsJuchaGyehoek.setColumn(i,"SUBJECT_CD",this.dsGibonJeongbo.getColumn(0,"SUBJECT_CD"));
        		this.dsJuchaGyehoek.setColumn(i,"LECTCLASS",this.dsGibonJeongbo.getColumn(0,"LECTCLASS"));
        		this.dsJuchaGyehoek.setColumn(i,"PROF_CD",this.dsGibonJeongbo.getColumn(0,"PROF_CD"));
        	}

        	// 학습성과 과목정보 세팅
        	for(var i=this.dsPO.rowcount-1;i>-1;i--)
        	{
        		this.dsPO.setColumn(i,"YYYY",this.dsGibonJeongbo.getColumn(0,"YYYY"));
        		this.dsPO.setColumn(i,"SEMESTER",this.dsGibonJeongbo.getColumn(0,"SEMESTER"));
        		this.dsPO.setColumn(i,"DEPT_CD",this.dsGibonJeongbo.getColumn(0,"DEPT_CD"));
        		this.dsPO.setColumn(i,"MAJOR_CD",this.dsGibonJeongbo.getColumn(0,"MAJOR_CD"));
        		this.dsPO.setColumn(i,"DAYNIGHT_DIVCD",this.dsGibonJeongbo.getColumn(0,"DAYNIGHT_DIVCD"));
        		this.dsPO.setColumn(i,"COMP_GRADE_CD",this.dsGibonJeongbo.getColumn(0,"COMP_GRADE_CD"));
        		this.dsPO.setColumn(i,"SUBJECT_CD",this.dsGibonJeongbo.getColumn(0,"SUBJECT_CD"));
        		this.dsPO.setColumn(i,"LECTCLASS",this.dsGibonJeongbo.getColumn(0,"LECTCLASS"));
        		this.dsPO.setColumn(i,"PROF_CD",this.dsGibonJeongbo.getColumn(0,"PROF_CD"));
        	}

        	// 향상/심화 NCS 과목정보 세팅
        	for(var i=this.dsImproDeepNCS.rowcount-1;i>-1;i--)
        	{
        		this.dsImproDeepNCS.setColumn(i,"YYYY",this.dsGibonJeongbo.getColumn(0,"YYYY"));
        		this.dsImproDeepNCS.setColumn(i,"SEMESTER",this.dsGibonJeongbo.getColumn(0,"SEMESTER"));
        		this.dsImproDeepNCS.setColumn(i,"DEPT_CD",this.dsGibonJeongbo.getColumn(0,"DEPT_CD"));
        		this.dsImproDeepNCS.setColumn(i,"MAJOR_CD",this.dsGibonJeongbo.getColumn(0,"MAJOR_CD"));
        		this.dsImproDeepNCS.setColumn(i,"DAYNIGHT_DIVCD",this.dsGibonJeongbo.getColumn(0,"DAYNIGHT_DIVCD"));
        		this.dsImproDeepNCS.setColumn(i,"COMP_GRADE_CD",this.dsGibonJeongbo.getColumn(0,"COMP_GRADE_CD"));
        		this.dsImproDeepNCS.setColumn(i,"SUBJECT_CD",this.dsGibonJeongbo.getColumn(0,"SUBJECT_CD"));
        		this.dsImproDeepNCS.setColumn(i,"LECTCLASS",this.dsGibonJeongbo.getColumn(0,"LECTCLASS"));
        		this.dsImproDeepNCS.setColumn(i,"PROF_CD",this.dsGibonJeongbo.getColumn(0,"PROF_CD"));
        	}

        	// 산업체인사 과목정보 세팅
        	for(var i=this.dsComp.rowcount-1;i>-1;i--)
        	{
        		this.dsComp.setColumn(i,"YYYY",this.dsGibonJeongbo.getColumn(0,"YYYY"));
        		this.dsComp.setColumn(i,"SEMESTER",this.dsGibonJeongbo.getColumn(0,"SEMESTER"));
        		this.dsComp.setColumn(i,"DEPT_CD",this.dsGibonJeongbo.getColumn(0,"DEPT_CD"));
        		this.dsComp.setColumn(i,"MAJOR_CD",this.dsGibonJeongbo.getColumn(0,"MAJOR_CD"));
        		this.dsComp.setColumn(i,"DAYNIGHT_DIVCD",this.dsGibonJeongbo.getColumn(0,"DAYNIGHT_DIVCD"));
        		this.dsComp.setColumn(i,"COMP_GRADE_CD",this.dsGibonJeongbo.getColumn(0,"COMP_GRADE_CD"));
        		this.dsComp.setColumn(i,"SUBJECT_CD",this.dsGibonJeongbo.getColumn(0,"SUBJECT_CD"));
        		this.dsComp.setColumn(i,"LECTCLASS",this.dsGibonJeongbo.getColumn(0,"LECTCLASS"));
        		this.dsComp.setColumn(i,"PROF_CD",this.dsGibonJeongbo.getColumn(0,"PROF_CD"));
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
            var strUrl      = "/prj/UC/UC01/Save_2122102_M.do";
            var strInDs     = "dsMokpyo=dsMokpyo:a ";
        		strInDs    += "dsSebu=dsSebu:a ";
        		strInDs    += "dsBook=dsBook:u ";
        		strInDs    += "dsGyosu=dsGyosu:a ";
        		strInDs    += "dsPyeongGa=dsPyeongGa:a ";
        		strInDs    += "dsJangso=dsJangso:a ";
        		strInDs    += "dsEvalplan=dsEvalplan:u ";
        		strInDs    += "dsJuchaGyehoek=dsJuchaGyehoek:u ";
        		strInDs    += "dsPO=dsPO:u ";
        		strInDs    += "dsImproDeepNCS=dsImproDeepNCS:u ";
        		strInDs    += "dsComp=dsComp:u";
            var strOutDs    = "";
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
            this.fn_Ret();
        };

        /**********************************************************************
                09. 강의계획서 가져오기
        ***********************************************************************/
        /**
         * 기능 : 삭제 완료 후 복사
         */
        this.fn_Copy = function()
        {
        	var strSvc      = "Copy";
            var strUrl      = "/prj/UC/UC01/Copy_2122102_P01.do";
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

        this.tab_MokpyoGwanli_grdGyojae_onheadclick = function(obj,e)
        {
        	if(e.cell == this.tab.MokpyoGwanli.form.grdGyojae.getBindCellIndex("body","CHK"))
            {
                this.gfn_checkAll(obj, e);
            }
        };

        this.tab_GyosuHakseub_grdEvalplan_onheadclick = function(obj,e)
        {
        	if(e.cell == this.tab.GyosuHakseub.form.grdEvalplan.getBindCellIndex("body","CHK"))
            {
                this.gfn_checkAll(obj, e);
            }
        };

        this.tab_YeokRyangJuCha_grdJuchaGyehoek_onheadclick = function(obj,e)
        {
        	if(e.cell == this.tab.YeokRyangJuCha.form.grdJuchaGyehoek.getBindCellIndex("body","CHK"))
            {
                this.gfn_checkAll(obj, e);
            }
        };

        this.tab_HakseubSeongGwa_grdHakseubSeongGwa_onheadclick = function(obj,e)
        {
        	if(e.cell == this.tab.HakseubSeongGwa.form.grdHakseubSeongGwa.getBindCellIndex("body","CHK"))
            {
                this.gfn_checkAll(obj, e);
            }
        };

        this.tab_HyangSangSimHwa_grdHyangsangSimhwa_onheadclick = function(obj,e)
        {
        	if(e.cell == this.tab.HyangSangSimHwa.form.grdHyangsangSimhwa.getBindCellIndex("body","CHK"))
            {
                this.gfn_checkAll(obj, e);
            }
        };

        this.tab_SanupCheInsa_grdSanupcheInsa_onheadclick = function(obj,e)
        {
        	if(e.cell == this.tab.SanupCheInsa.form.grdSanupcheInsa.getBindCellIndex("body","CHK"))
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

        this.tab_MokpyoGwanli_grdHakgwaSebu_onheaddblclick = function(obj,e)
        {
        	if(e.cell != this.tab.MokpyoGwanli.form.grdHakgwaSebu.getBindCellIndex("body","CHK"))
            {
                this.gfn_gridSort(obj,e);
            }
        };

        this.tab_MokpyoGwanli_grdGyojae_onheaddblclick = function(obj,e)
        {
        	if(e.cell != this.tab.MokpyoGwanli.form.grdGyojae.getBindCellIndex("body","CHK"))
            {
                this.gfn_gridSort(obj,e);
            }
        };

        this.tab_GyosuHakseub_grdEvalplan_onheaddblclick = function(obj,e)
        {
        	if(e.cell != this.tab.GyosuHakseub.form.grdEvalplan.getBindCellIndex("body","CHK"))
            {
                this.gfn_gridSort(obj,e);
            }
        };

        this.tab_YeokRyangJuCha_grdJuchaGyehoek_onheaddblclick = function(obj,e)
        {
        	if(e.cell != this.tab.YeokRyangJuCha.form.grdJuchaGyehoek.getBindCellIndex("body","CHK"))
            {
                this.gfn_gridSort(obj,e);
            }
        };

        this.tab_HakseubSeongGwa_grdHakseubSeongGwa_onheaddblclick = function(obj,e)
        {
        	if(e.cell != this.tab.HakseubSeongGwa.form.grdHakseubSeongGwa.getBindCellIndex("body","CHK"))
            {
                this.gfn_gridSort(obj,e);
            }
        };

        this.tab_HyangSangSimHwa_grdHyangsangSimhwa_onheaddblclick = function(obj,e)
        {
        	if(e.cell != this.tab.HyangSangSimHwa.form.grdHyangsangSimhwa.getBindCellIndex("body","CHK"))
            {
                this.gfn_gridSort(obj,e);
            }
        };

        this.tab_SanupCheInsa_grdSanupcheInsa_onheaddblclick = function(obj,e)
        {
        	if(e.cell != this.tab.SanupCheInsa.form.grdSanupcheInsa.getBindCellIndex("body","CHK"))
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
        this.divM_cboSearchJakseong_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"WRITE_YN",obj.value);
        		this.fn_Ret();
        	}
        };

        // 엔터키 누르면 조회
        this.divM_cboSearchJakseongWanryo_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"COMPLETE_YN",obj.value);
        		this.fn_Ret();
        	}
        };

        // 엔터키 누르면 조회
        this.divM_cboSearchHaknyeon_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"COMP_GRADE_CD",obj.value);
        		this.fn_Ret();
        	}
        };

        // 강의계획서 출력
        this.fn_Print = function()
        {
        	if(this.dsMaster.rowcount == 0)
        	{
        		this.gfn_alert("강의를 선택해주세요.","저장정보","","question");
        		return false;
        	}
        	var YYYY     		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'YYYY');
        	var SEMESTER 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'SEMESTER');
        	var DEPT_CD 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'DEPT_CD');
        	var MAJOR_CD 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'MAJOR_CD');
        	var DAYNIGHT_DIVCD 	= this.dsMaster.getColumn(this.dsMaster.rowposition, 'DAYNIGHT_DIVCD');
        	var COMP_GRADE_CD 	= this.dsMaster.getColumn(this.dsMaster.rowposition, 'COMP_GRADE_CD');
        	var SUBJECT_CD 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'SUBJECT_CD');
        	var LECTCLASS 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'LECTCLASS');
        	var PROF_CD 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'PROF_CD');

        	var param = { YYYY     			: YYYY
        				, SEMESTER 			: SEMESTER
        				, DEPT_CD 			: DEPT_CD
        				, MAJOR_CD 			: MAJOR_CD
        				, DAYNIGHT_DIVCD 	: DAYNIGHT_DIVCD
        				, COMP_GRADE_CD 	: COMP_GRADE_CD
        				, SUBJECT_CD 		: SUBJECT_CD
        				, LECTCLASS			: LECTCLASS
        				, PROF_CD			: PROF_CD
        				};

        	this.gfn_commonUtils_report('UC01/UC01_2122102_M_01.crf',  param);
        };

        // 향상/심화 교육과정 운영계획서 출력
        this.tab_HyangSangSimHwa_btnPrint_onclick = function(obj,e)
        {
        	var YYYY     		= this.dsMokpyo.getColumn(this.dsMokpyo.rowposition, 'YYYY');
        	var SEMESTER 		= this.dsMokpyo.getColumn(this.dsMokpyo.rowposition, 'SEMESTER');
        	var DEPT_CD 		= this.dsMokpyo.getColumn(this.dsMokpyo.rowposition, 'DEPT_CD');
        	var MAJOR_CD 		= this.dsMokpyo.getColumn(this.dsMokpyo.rowposition, 'MAJOR_CD');
        	var DAYNIGHT_DIVCD 	= this.dsMokpyo.getColumn(this.dsMokpyo.rowposition, 'DAYNIGHT_DIVCD');
        	var COMP_GRADE_CD 	= this.dsMokpyo.getColumn(this.dsMokpyo.rowposition, 'COMP_GRADE_CD');
        	var SUBJECT_CD 		= this.dsMokpyo.getColumn(this.dsMokpyo.rowposition, 'SUBJECT_CD');
        	var LECTCLASS 		= this.dsMokpyo.getColumn(this.dsMokpyo.rowposition, 'LECTCLASS');
        	var PROF_CD 		= this.dsMokpyo.getColumn(this.dsMokpyo.rowposition, 'PROF_CD');

        	var param = { YYYY     			: YYYY
        				, SEMESTER 			: SEMESTER
        				, DEPT_CD 			: DEPT_CD
        				, MAJOR_CD 			: MAJOR_CD
        				, DAYNIGHT_DIVCD 	: DAYNIGHT_DIVCD
        				, COMP_GRADE_CD 	: COMP_GRADE_CD
        				, SUBJECT_CD 		: SUBJECT_CD
        				, LECTCLASS			: LECTCLASS
        				, PROF_CD			: PROF_CD
        				};

        	this.gfn_commonUtils_report('UC01/UC01_2122102_M_02.crf',  param);
        };

        // NCS활용여부 변경
        this.divD_cboSearchNCS_onitemchanged = function(obj,e)
        {
        	// NCS 활용여부가 미활용일 경우 향상/심화교육과정, 산업체인사 탭 비활성화
        	if(this.divD.form.cboSearchNCS.value == 3)
        	{
        		this.tab.HyangSangSimHwa.set_enable(false);
        		this.tab.SanupCheInsa.set_enable(false);
        	}
        	else
        	{
        		// 교과목명세서를 작성하지 않은 경우
        		if(this.dsMokpyo.getColumn(0, "SUBJECT_YN") == 'N')
        		{
        			this.gfn_alert("교과목명세서가 없는 교과목은 수정할 수 없습니다.\n교과목명세서를 먼저 작성해주세요.","저장정보","","question");
        			this.dsMokpyo.setColumn(0, "NCS_USE_DIVCD", 0);
        		}
        		else
        		{
        			// 교과목명세서에서 NCS를 사용하지 않는 경우
        			if(this.dsMokpyo.getColumn(0, "NCS_USE_YN") == 'N')
        			{
        				this.gfn_alert("해당 과목은 NCS미활용으로 교과목명세서에 등록 되어있습니다.\n교과목명세서에서 수정 후 강의계획서를 작성해주세요.","저장정보","","question");
        				this.dsMokpyo.setColumn(0, "NCS_USE_DIVCD", 3);
        			}
        			else
        			{
        				this.tab.HyangSangSimHwa.set_enable(true);
        				this.tab.SanupCheInsa.set_enable(true);
        			}
        		}
        	}
        };

        // 평가배점관리 유효성검사
        this.dsEvalplan_oncolumnchanged = function(obj,e)
        {
         	var total = 0;
         	for(var i=0; i<this.dsEvalplan.rowcount; i++)
         	{
         		if(i != this.dsEvalplan.rowposition)
         		{
         			// 이미 등록된 평가구분인지 확인
         			if(this.dsEvalplan.getColumn(i, "EVALITEM_DIVCD") == this.dsEvalplan.getColumn(this.dsEvalplan.rowposition, "EVALITEM_DIVCD"))
         			{
         				this.gfn_alert("이미 등록된 평가구분입니다.","","","question");
         				this.dsEvalplan.setColumn(this.dsEvalplan.rowposition, "EVALITEM_DIVCD", null);
         				return false;
         			}
         		}

        		total += this.dsEvalplan.getColumn(i, "POINT");
         	}

         	// 배점의 총합이 100점을 넘을 경우
         	if(total > 100)
         	{
         		this.gfn_alert("평가배점의 합이 100점을 초과하였습니다.","","","question");
         		this.dsEvalplan.setColumn(this.dsEvalplan.rowposition, "POINT", 0);
         	}
        };

        // 역량주차별 관리계획 유효성검사
        this.dsJuchaGyehoek_onvaluechanged = function(obj,e)
        {
        	for(var i=0; i<this.dsJuchaGyehoek.rowcount; i++)
        	{
        		if(i != this.dsJuchaGyehoek.rowposition)
        		{
        			// 이미 등록된 주차인지 확인
        			if(this.dsJuchaGyehoek.getColumn(i, "WEEK") == this.dsJuchaGyehoek.getColumn(this.dsJuchaGyehoek.rowposition, "WEEK"))
        			{
        				this.gfn_alert("이미 등록된 주차입니다.","","","question");
        				this.dsJuchaGyehoek.setColumn(this.dsJuchaGyehoek.rowposition, "WEEK", null);
        			}
        		}
        	}
        };

        // 학습성과 유효성검사
        this.dsPO_onvaluechanged = function(obj,e)
        {
        	// 반영률 값이 0-100 사이인지 확인
        	if(this.dsPO.getColumn(this.dsPO.rowposition, "PO_RATE") > 100 || this.dsPO.getColumn(this.dsPO.rowposition, "PO_RATE") < 0)
        	{
        		this.gfn_alert("반영률 항목의 값은 0-100 사이 입니다.","","","question");
        		this.dsPO.setColumn(this.dsPO.rowposition, "PO_RATE", 0);
        	}
        };

        // 향상/심화 NCS 유효성검사
        this.dsImproDeepNCS_onvaluechanged = function(obj,e)
        {
        	for(var i=0; i<this.dsImproDeepNCS.rowcount; i++)
        	{
        		if(i != this.dsImproDeepNCS.rowposition)
        		{
        			// 이미 등록된 평가내용인지 확인
        			if(this.dsImproDeepNCS.getColumn(i, "NCS_CD") == this.dsImproDeepNCS.getColumn(this.dsImproDeepNCS.rowposition, "NCS_CD"))
        			{
        				if(this.dsImproDeepNCS.getColumn(this.dsImproDeepNCS.rowposition, "NCS_CD") != null && this.dsImproDeepNCS.getColumn(this.dsImproDeepNCS.rowposition, "NCS_CD") != '')
        				{
        					this.gfn_alert("이미 등록된 평가내용입니다.","","","question");
        					this.dsImproDeepNCS.setColumn(this.dsImproDeepNCS.rowposition, "NCS_CD", null);
        				}
        			}
        		}
        	}
        };

        // 팝업 명 삭제 시 코드 초기화
        this.ds_input_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "SUBJECT_NM") {
        	   if (this.gfn_isNull(e.newvalue)) {
        	       obj.setColumn(obj.rowposition, "SUBJECT_CD", "");
        	   } else {
        			if (e.oldvalue != e.newvalue)
        			{
        				this.fn_setCallGwamokMasterPopup(e.newvalue);
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

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
        	var value = false;

            if(this.gfn_isUpdate(this.dsMokpyo))
        	{
        		if(this.dsMokpyo.getRowType(0) != Dataset.ROWTYPE_INSERT)
        		{
        			value = true;
        		}
        	}
        	else if(this.gfn_isUpdate(this.dsSebu))
        	{
        		value = true;
        	}
        	else if(this.gfn_isUpdate(this.dsBook))
        	{
        		value = true;
        	}
        	else if(this.gfn_isUpdate(this.dsEvalplan))
        	{
        		value = true;
        	}
        	else if(this.gfn_isUpdate(this.dsJuchaGyehoek))
        	{
        		value = true;
        	}
        	else if(this.gfn_isUpdate(this.dsPO))
        	{
        		value = true;
        	}
        	else if(this.gfn_isUpdate(this.dsImproDeepNCS))
        	{
        		value = true;
        	}
        	else if(this.gfn_isUpdate(this.dsComp))
        	{
        		value = true;
        	}

        	return value;
        };
        /**********************************************************************
                11. 팝업
        ***********************************************************************/

        // 마스터 교과목 팝업
        this.divM_btnSearchGwamok_onclick = function(obj,e)
        {
        	var gwamokCdNm = this.divM.form.edtSearchGwamokCd.value;
        	this.fn_setCallGwamokMasterPopup(gwamokCdNm);
        };

        // 사원 팝업
        this.divM_btnSearchSabeon_onclick = function(obj,e)
        {
        	var sawonCdNm = this.divM.form.edtSearchSabeon.value;
        	this.fn_setCallSawonPopup(sawonCdNm);
        };

        // 강의계획서 가져오기
        this.fn_Get = function()
        {
        	if(this.dsMaster.getColumn(0, "SUBJECT_YN") == "N")
        	{
        		this.gfn_alert("교과목명세서 등록 후 강의계획서를 복사 할 수 있습니다.","저장정보","","question");
        		return false;
        	}
        	else if(this.dsGibonJeongbo.rowcount < 1)
        	{
        		this.gfn_alert("개설과목을 선택해주세요.","저장정보","","question");
        		return false;
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
        		var lectclass = this.dsMaster.getColumn(this.dsMaster.rowposition,"LECTCLASS");
        		var profCd = this.dsMaster.getColumn(this.dsMaster.rowposition,"PROF_CD");

        		var oArg = {  yyyy:yyyy
        				    , semester:semester
        					, deptCd:deptCd
        					, majorCd:majorCd
        					, daynightDivcd:daynightDivcd
        					, compGradeCd:compGradeCd
        					, gwamokCd:gwamokCd
        					, gwamokNm:gwamokNm
        					, lectclass:lectclass
        					, profCd:profCd
        					};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";
        		this.gfn_openPopup( "copy","UC01::UC01_2122102_P01.xfdl",oArg,sPopupCallBack,oOption);
        	}
        };

        this.fn_setCallGwamokMasterPopup = function(strSearchValue)
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
        		this.ds_input.setColumn(this.ds_input.rowposition, "SUBJECT_CD", this.dsGwamok.getColumn(0,"SUBJECT_CD"));
        		this.ds_input.setColumn(this.ds_input.rowposition, "SUBJECT_NM", this.dsGwamok.getColumn(0,"SUBJECT_NM"));
        	} else
        	{
        		var oArg = {yyyy:yyyy, semester:semester, sabeon:sabeon, gwamokCdNm:strSearchValue};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";
        		this.gfn_openPopup( "gwamokM","UC01::UC01_2122101_P02.xfdl",oArg,sPopupCallBack,oOption);
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
                12. 동적 체크박스
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

        // 교육장소 체크박스를 클릭했을때
        this.fn_isJangsoClick = function()
        {
        	var arrComp = this.tab.GyosuHakseub.form.divJangsoCheckbox.form.components;

        	for(var i=0; i<arrComp.length; i++)
        	{
        		var objComp = arrComp[i];

        		// 기타일때
        		if(i == 4)
        		{
        			if(objComp.value == false)
        			{
        				this.dsJangso.setColumn(i, "SUBITEM_CD", null);
        				this.dsJangso.setColumn(i, "NOTE", null);
        				this.tab.GyosuHakseub.form.edtJangsoGita.set_readonly(true);
        				this.tab.GyosuHakseub.form.edtJangsoGita.set_value(null);
        			}
        			else
        			{
        				this.dsJangso.setColumn(i, "SUBITEM_CD", objComp.value);
        				this.tab.GyosuHakseub.form.edtJangsoGita.set_readonly(false);
        			}
        		}
        		else
        		{
        			if(objComp.value == false)
        			{
        				this.dsJangso.setColumn(i, "SUBITEM_CD", null);
        			}
        			else
        			{
        				this.dsJangso.setColumn(i, "SUBITEM_CD", objComp.value);
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

        this.tab_GyosuHakseub_edtJangsoGita_onchanged = function(obj,e)
        {
        	this.dsJangso.setColumn(4, "NOTE", this.tab.GyosuHakseub.form.edtJangsoGita.value);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdGaeseol_onheaddblclick,this);
            this.grdMaster.addEventHandler("oncellclick",this.grdMaster_oncellclick,this);
            this.divM.form.spnSearchYYYY.addEventHandler("onkeydown",this.divM_spnSearchYYYY_onkeydown,this);
            this.divM.form.btnSearchSabeon.addEventHandler("onclick",this.divM_btnSearchSabeon_onclick,this);
            this.divM.form.cboSearchHakgi.addEventHandler("onkeydown",this.divM_cboSearchHakgi_onkeydown,this);
            this.divM.form.cboSearchJakseong.addEventHandler("onkeydown",this.divM_cboSearchJakseong_onkeydown,this);
            this.divM.form.cboSearchGyeYeolHakGwa.addEventHandler("onlbuttondown",this.divM_cboSearchGyeYeolHakGwa_onlbuttondown,this);
            this.divM.form.cboSearchGyeYeolHakGwa.addEventHandler("onkeydown",this.divM_cboSearchGyeYeolHakGwa_onkeydown,this);
            this.divM.form.cboSearchJakseongWanryo.addEventHandler("onkeydown",this.divM_cboSearchJakseongWanryo_onkeydown,this);
            this.divM.form.btnSearchGwamok.addEventHandler("onclick",this.divM_btnSearchGwamok_onclick,this);
            this.divM.form.cboSearchHaknyeon.addEventHandler("onkeydown",this.divM_cboSearchHaknyeon_onkeydown,this);
            this.divD.form.cboSearchNCS.addEventHandler("onitemchanged",this.divD_cboSearchNCS_onitemchanged,this);
            this.stc_39.addEventHandler("onclick",this.stc_39_onclick,this);
            this.tab.addEventHandler("onchanged",this.tab_onchanged,this);
            this.tab.MokpyoGwanli.form.grdHakgwaSebu.addEventHandler("onheaddblclick",this.tab_MokpyoGwanli_grdHakgwaSebu_onheaddblclick,this);
            this.tab.MokpyoGwanli.form.grdGyojae.addEventHandler("onheadclick",this.tab_MokpyoGwanli_grdGyojae_onheadclick,this);
            this.tab.MokpyoGwanli.form.grdGyojae.addEventHandler("onheaddblclick",this.tab_MokpyoGwanli_grdGyojae_onheaddblclick,this);
            this.tab.MokpyoGwanli.form.btnNew.addEventHandler("onclick",this.tab_MokpyoGwanli_btnNew_onclick,this);
            this.tab.MokpyoGwanli.form.btnDel.addEventHandler("onclick",this.tab_MokpyoGwanli_btnDel_onclick,this);
            this.tab.YeokRyangMapping.form.stc_13_00_00_00_00.addEventHandler("onclick",this.tab_00_Tabpage1_stc_13_00_00_00_00_onclick,this);
            this.tab.GyosuHakseub.form.stc_14_00_00_01_00_00_00_00_01.addEventHandler("onclick",this.tab_Janghak_stc_14_00_00_01_00_00_00_00_onclick,this);
            this.tab.GyosuHakseub.form.grdEvalplan.addEventHandler("onheadclick",this.tab_GyosuHakseub_grdEvalplan_onheadclick,this);
            this.tab.GyosuHakseub.form.grdEvalplan.addEventHandler("onheaddblclick",this.tab_GyosuHakseub_grdEvalplan_onheaddblclick,this);
            this.tab.GyosuHakseub.form.stRowCnt.addEventHandler("onclick",this.tab_GyosuHakseub_stRowCnt_onclick,this);
            this.tab.GyosuHakseub.form.btnNew.addEventHandler("onclick",this.tab_GyosuHakseub_btnNew_onclick,this);
            this.tab.GyosuHakseub.form.btnDel.addEventHandler("onclick",this.tab_GyosuHakseub_btnDel_onclick,this);
            this.tab.GyosuHakseub.form.stc_14_00_00_01_00_00_00_00.addEventHandler("onclick",this.tab_Janghak_stc_14_00_00_01_00_00_00_00_onclick,this);
            this.tab.GyosuHakseub.form.stc_14_00_00_01_00_00_00_00_00.addEventHandler("onclick",this.tab_Janghak_stc_14_00_00_01_00_00_00_00_onclick,this);
            this.tab.GyosuHakseub.form.divGyosuCheckbox.addEventHandler("onlbuttondown",this.tab_GyosuHakseub_divGyosuCheckbox_onlbuttondown,this);
            this.tab.GyosuHakseub.form.divJangsoCheckbox.addEventHandler("onlbuttondown",this.tab_GyosuHakseub_divGyosuCheckbox_onlbuttondown,this);
            this.tab.GyosuHakseub.form.edtGyosuGita.addEventHandler("onchanged",this.tab_GyosuHakseub_edtGyosuGita_onchanged,this);
            this.tab.GyosuHakseub.form.edtPyeongGaGita.addEventHandler("onchanged",this.tab_GyosuHakseub_edtPyeongGaGita_onchanged,this);
            this.tab.GyosuHakseub.form.edtJangsoGita.addEventHandler("onchanged",this.tab_GyosuHakseub_edtJangsoGita_onchanged,this);
            this.tab.YeokRyangJuCha.form.grdJuchaGyehoek.addEventHandler("onheadclick",this.tab_YeokRyangJuCha_grdJuchaGyehoek_onheadclick,this);
            this.tab.YeokRyangJuCha.form.grdJuchaGyehoek.addEventHandler("onheaddblclick",this.tab_YeokRyangJuCha_grdJuchaGyehoek_onheaddblclick,this);
            this.tab.YeokRyangJuCha.form.btnNew.addEventHandler("onclick",this.tab_YeokRyangJuCha_btnNew_onclick,this);
            this.tab.YeokRyangJuCha.form.btnDel.addEventHandler("onclick",this.tab_YeokRyangJuCha_btnDel_onclick,this);
            this.tab.YeokRyangJuCha.form.btn16Add.addEventHandler("onclick",this.tab_YeokRyangJuCha_btn16Add_onclick,this);
            this.tab.HakseubSeongGwa.form.grdHakseubSeongGwa.addEventHandler("onheadclick",this.tab_HakseubSeongGwa_grdHakseubSeongGwa_onheadclick,this);
            this.tab.HakseubSeongGwa.form.grdHakseubSeongGwa.addEventHandler("onheaddblclick",this.tab_HakseubSeongGwa_grdHakseubSeongGwa_onheaddblclick,this);
            this.tab.HakseubSeongGwa.form.btnNew.addEventHandler("onclick",this.tab_HakseubSeongGwa_btnNew_onclick,this);
            this.tab.HakseubSeongGwa.form.btnDel.addEventHandler("onclick",this.tab_HakseubSeongGwa_btnDel_onclick,this);
            this.tab.HyangSangSimHwa.form.grdHyangsangSimhwa.addEventHandler("onheadclick",this.tab_HyangSangSimHwa_grdHyangsangSimhwa_onheadclick,this);
            this.tab.HyangSangSimHwa.form.grdHyangsangSimhwa.addEventHandler("onheaddblclick",this.tab_HyangSangSimHwa_grdHyangsangSimhwa_onheaddblclick,this);
            this.tab.HyangSangSimHwa.form.btnNew.addEventHandler("onclick",this.tab_HyangSangSimHwa_btnNew_onclick,this);
            this.tab.HyangSangSimHwa.form.btnDel.addEventHandler("onclick",this.tab_HyangSangSimHwa_btnDel_onclick,this);
            this.tab.HyangSangSimHwa.form.btnPrint.addEventHandler("onclick",this.tab_HyangSangSimHwa_btnPrint_onclick,this);
            this.tab.SanupCheInsa.form.grdSanupcheInsa.addEventHandler("onheadclick",this.tab_SanupCheInsa_grdSanupcheInsa_onheadclick,this);
            this.tab.SanupCheInsa.form.grdSanupcheInsa.addEventHandler("onheaddblclick",this.tab_SanupCheInsa_grdSanupcheInsa_onheaddblclick,this);
            this.tab.SanupCheInsa.form.btnNew.addEventHandler("onclick",this.tab_SanupCheInsa_btnNew_onclick,this);
            this.tab.SanupCheInsa.form.btnDel.addEventHandler("onclick",this.tab_SanupCheInsa_btnDel_onclick,this);
            this.stc_39_00.addEventHandler("onclick",this.stc_39_onclick,this);
            this.dsMaster.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.ds_input.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
            this.dsEvalplan.addEventHandler("oncolumnchanged",this.dsEvalplan_oncolumnchanged,this);
            this.dsJuchaGyehoek.addEventHandler("onvaluechanged",this.dsJuchaGyehoek_onvaluechanged,this);
            this.dsPO.addEventHandler("onvaluechanged",this.dsPO_onvaluechanged,this);
            this.dsImproDeepNCS.addEventHandler("onvaluechanged",this.dsImproDeepNCS_onvaluechanged,this);
        };
        this.loadIncludeScript("UC01_2122102_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
