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
            this.set_titletext("평가계획서");
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
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"2\"/><Column id=\"DEPT_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"MAJOR_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DAYNIGHT_DIVCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DAYNIGHT_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"COMP_GRADE_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_GRADE_CD\" type=\"STRING\" size=\"5\"/><Column id=\"SUBJECT_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"LECTCLASS\" type=\"STRING\" size=\"3\"/><Column id=\"PROF_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PROF_CD\" type=\"STRING\" size=\"30\"/><Column id=\"EDUGOAL\" type=\"STRING\" size=\"2000\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"255\"/><Column id=\"TEL\" type=\"STRING\" size=\"15\"/><Column id=\"COMPLETE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"SHARE_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"NOTICE\" type=\"STRING\" size=\"1000\"/><Column id=\"NCS_USE_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"MNG_PLAN\" type=\"STRING\" size=\"4000\"/><Column id=\"IMPRO_EVALCONT\" type=\"STRING\" size=\"4000\"/><Column id=\"IMPROSUB_EVALCONT\" type=\"STRING\" size=\"4000\"/><Column id=\"IMPRO_MNG_WAY\" type=\"STRING\" size=\"4000\"/><Column id=\"DEEP_MNG_CONT\" type=\"STRING\" size=\"4000\"/><Column id=\"DEEPSUB_MNG_CONT\" type=\"STRING\" size=\"4000\"/><Column id=\"DEEP_MNG_TIME\" type=\"STRING\" size=\"4000\"/><Column id=\"DEEP_EDU_YN\" type=\"STRING\" size=\"1\"/><Column id=\"IMPRO_EDU_YN\" type=\"STRING\" size=\"1\"/><Column id=\"DEEP_EDU_PLACE\" type=\"STRING\" size=\"1000\"/><Column id=\"DEEP_EDU_TIME\" type=\"DATE\" size=\"8\"/><Column id=\"CONFIRM_YN\" type=\"STRING\" size=\"1\"/><Column id=\"TRANS_FINAL_DATA\" type=\"DATE\" size=\"8\"/><Column id=\"IMPRO_EDU_TIME\" type=\"DATE\" size=\"8\"/><Column id=\"IMPRO_EDU_PLACE\" type=\"STRING\" size=\"1000\"/><Column id=\"DEEP_EDU_LECTURER\" type=\"STRING\" size=\"100\"/><Column id=\"DEEP_EDU_DEPT\" type=\"STRING\" size=\"100\"/><Column id=\"IMPRO_IMPLE_TIME\" type=\"STRING\" size=\"100\"/><Column id=\"IMPRO_MNG_TIME\" type=\"STRING\" size=\"100\"/><Column id=\"NON_SUBJECT_NOTICE\" type=\"STRING\" size=\"1000\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"8\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"SUBJECT_CD\" type=\"STRING\" size=\"100\"/><Column id=\"SUBJECT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PROF_CD\" type=\"STRING\" size=\"10\"/><Column id=\"PROF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_GRADE_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YYYY\"/><Col id=\"SEMESTER\"/><Col id=\"DEPT_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgi", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsShare", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHaknyeon", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSigi", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"2\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"MAJOR_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DAYNIGHT_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"COMP_GRADE_CD\" type=\"STRING\" size=\"5\"/><Column id=\"SUBJECT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"LECTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"PROF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"YYYY_COPY\" type=\"STRING\" size=\"4\"/><Column id=\"SEMESTER_COPY\" type=\"STRING\" size=\"2\"/><Column id=\"DEPT_CD_COPY\" type=\"STRING\" size=\"10\"/><Column id=\"MAJOR_CD_COPY\" type=\"STRING\" size=\"10\"/><Column id=\"DAYNIGHT_DIVCD_COPY\" type=\"STRING\" size=\"5\"/><Column id=\"COMP_GRADE_CD_COPY\" type=\"STRING\" size=\"5\"/><Column id=\"SUBJECT_CD_COPY\" type=\"STRING\" size=\"10\"/><Column id=\"LECTCLASS_COPY\" type=\"STRING\" size=\"256\"/><Column id=\"PROF_CD_COPY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"EVAL_POSS_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("dsBindableGrid", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"bEnable\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"bEnable\">false</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetail", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"2\"/><Column id=\"DEPT_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"MAJOR_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DAYNIGHT_DIVCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DAYNIGHT_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"COMP_GRADE_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_GRADE_CD\" type=\"STRING\" size=\"5\"/><Column id=\"SUBJECT_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"LECTCLASS\" type=\"STRING\" size=\"3\"/><Column id=\"PROF_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PROF_CD\" type=\"STRING\" size=\"30\"/><Column id=\"EVALITEM_DIVCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EVALITEM_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"EVALITEM_DIVCD_SORT\" type=\"STRING\" size=\"256\"/><Column id=\"EVALITEM_YN01\" type=\"STRING\" size=\"256\"/><Column id=\"EVALITEM_YN02\" type=\"STRING\" size=\"256\"/><Column id=\"POINT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"EVALSUMM\" type=\"STRING\" size=\"500\"/><Column id=\"EVALCONT\" type=\"STRING\" size=\"4000\"/><Column id=\"EVALWAY_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"EVALWAY_DIVCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EVALWAY_ETC\" type=\"STRING\" size=\"500\"/><Column id=\"EVALCONSIDER\" type=\"STRING\" size=\"2000\"/><Column id=\"EVALTIME_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"EVALTIME_DIVCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SHARE_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"SHARE_DIVCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DIAGEVAL_RESULT_USEPLAN\" type=\"STRING\" size=\"500\"/><Column id=\"PFMC_SCORE_RT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"KSAT_SCORE_RT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"COMP_EVAL_YN\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
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


            obj = new Dataset("ds_ddInput", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"8\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"MAJOR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DAYNIGHT_DIVCD\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_GRADE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT_CD\" type=\"STRING\" size=\"100\"/><Column id=\"LECTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"PROF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EVALITEM_DIVCD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YYYY\"/><Col id=\"SEMESTER\"/><Col id=\"DEPT_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGibon", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"2\"/><Column id=\"DEPT_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"MAJOR_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DAYNIGHT_DIVCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DAYNIGHT_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"COMP_GRADE_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_GRADE_CD\" type=\"STRING\" size=\"5\"/><Column id=\"SUBJECT_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"LECTCLASS\" type=\"STRING\" size=\"3\"/><Column id=\"PROF_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PROF_CD\" type=\"STRING\" size=\"30\"/><Column id=\"EVALITEM_DIVCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EVALITEM_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"EVALITEM_DIVCD_SORT\" type=\"STRING\" size=\"256\"/><Column id=\"EVALITEM_YN01\" type=\"STRING\" size=\"256\"/><Column id=\"EVALITEM_YN02\" type=\"STRING\" size=\"256\"/><Column id=\"POINT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"EVALSUMM\" type=\"STRING\" size=\"500\"/><Column id=\"EVALCONT\" type=\"STRING\" size=\"4000\"/><Column id=\"EVALWAY_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"EVALWAY_DIVCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EVALWAY_ETC\" type=\"STRING\" size=\"500\"/><Column id=\"EVALCONSIDER\" type=\"STRING\" size=\"2000\"/><Column id=\"EVALTIME_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"EVALTIME_DIVCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SHARE_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"SHARE_DIVCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DIAGEVAL_RESULT_USEPLAN\" type=\"STRING\" size=\"500\"/><Column id=\"PFMC_SCORE_RT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"KSAT_SCORE_RT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"COMP_EVAL_YN\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBangbub", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJindan", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"2\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"MAJOR_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DAYNIGHT_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"COMP_GRADE_CD\" type=\"STRING\" size=\"5\"/><Column id=\"SUBJECT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"LECTCLASS\" type=\"STRING\" size=\"3\"/><Column id=\"PROF_CD\" type=\"STRING\" size=\"30\"/><Column id=\"EVALITEM_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"EVAL_SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"NCS_CD\" type=\"STRING\" size=\"18\"/><Column id=\"SORT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DIAGQUESTION\" type=\"STRING\" size=\"500\"/><Column id=\"EVALCONT_DIVCD\" type=\"STRING\" size=\"5\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comInput", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNaeyongCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CD\" type=\"STRING\" size=\"32\"/><Column id=\"CD_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNeungRyeok", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"2\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"MAJOR_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DAYNIGHT_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"COMP_GRADE_CD\" type=\"STRING\" size=\"5\"/><Column id=\"SUBJECT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"LECTCLASS\" type=\"STRING\" size=\"3\"/><Column id=\"PROF_CD\" type=\"STRING\" size=\"30\"/><Column id=\"EVALITEM_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"EVAL_SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"NCS_CD\" type=\"STRING\" size=\"18\"/><Column id=\"SORT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"EVALCONT_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"POINT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"EVALCONT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDegrCombo", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DEGR_COMP_SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DEGR_COMP_NM\" type=\"STRING\" size=\"2000\"/><Column id=\"NOTE\" type=\"STRING\" size=\"500\"/></ColumnInfo>");
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


            obj = new Dataset("dsJikmu", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"JOB_COMP_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHawi", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"WEEK\" type=\"STRING\" size=\"256\"/><Column id=\"DEGR_COMP_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"DEGR_COMP_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdMaster","0","104",null,null,"1271","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"77\"/><Column size=\"48\"/><Column size=\"178\"/><Column size=\"48\"/><Column size=\"70\"/><Column size=\"121\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"주야구분\"/><Cell col=\"1\" text=\"학년\"/><Cell col=\"2\" text=\"과목명\"/><Cell col=\"3\" text=\"분반\"/><Cell col=\"4\" text=\"교수명\"/><Cell col=\"5\" text=\"계열/학과\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:DAYNIGHT_DIVCD_NM\" editmaxlength=\"256\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:COMP_GRADE_CD_NM\" editmaxlength=\"256\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:SUBJECT_CD_NM\" editmaxlength=\"256\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:LECTCLASS\" editmaxlength=\"256\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:PROF_CD_NM\" editmaxlength=\"256\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:DEPT_CD_NM\" editmaxlength=\"256\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divM","0","0",null,"69","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSearchGwamokCd","913","9","200","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            this.divM.addChild(obj.name, obj);

            obj = new Edit("edtSearchGwamokNm","1155","9","200","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("5");
            obj.set_enable("true");
            this.divM.addChild(obj.name, obj);

            obj = new Combo("cboSearchGyeYeolHakGwa","592","9","200","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("2");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_innerdataset("dsGyeyeolHakgwa");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divM.addChild(obj.name, obj);

            obj = new Button("btnSearchGwamokMaster","1123","9","22","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_PopSrch");
            this.divM.addChild(obj.name, obj);

            obj = new Static("stc_01","788","9","110","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("10");
            obj.set_text("과목명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divM.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00","505","9","80","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("11");
            obj.set_text("계열/학과");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divM.addChild(obj.name, obj);

            obj = new Static("stc_01_00","3","9","80","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("12");
            obj.set_text("학년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divM.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","100","9","120","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("0");
            this.divM.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","248","9","80","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("13");
            obj.set_text("학기");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divM.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgi","350","9","124","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("1");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsHakgi");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divM.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01_00_00","-22","36","105","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("14");
            obj.set_text("학년");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divM.addChild(obj.name, obj);

            obj = new Combo("cboSearchHaknyeon","100","36","120","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("6");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsHaknyeon");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_02","26","31","1600","5",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("15");
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
            obj.set_taborder("16");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","90","-1","10","67",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("17");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","340","0","10","67",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("18");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_02_01","474","-1","56","33",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("19");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00","792","-1","56","70",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("20");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01","904","1","10","67",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("21");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divM.addChild(obj.name, obj);

            obj = new Static("stc_01_01","253","37","80","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("22");
            obj.set_text("사번/성명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divM.addChild(obj.name, obj);

            obj = new Edit("edtSearchSawonCd","350","36","200","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            this.divM.addChild(obj.name, obj);

            obj = new Button("btnSearchSawon","560","36","22","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_PopSrch");
            obj.set_text("");
            this.divM.addChild(obj.name, obj);

            obj = new Edit("edtSearchSawonNm","592","36","200","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("9");
            obj.set_enable("true");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01","220","-1","56","70",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("23");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","20","58","1610","9",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("24");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","550","30","10","37",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("25");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00","582","30","10","37",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("26");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_00","1113","5","10","27",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("27");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_00_00","1145","5","10","27",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("28");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divM.addChild(obj.name, obj);

            obj = new Static("stc_09_00","0","79",null,"22","1485",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("강의계획서 리스트");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stRowCnt","147","78",null,"24","1370",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("divD",null,"104","702","42","540",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01","-22","8","88","22",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("4");
            obj.set_text("과목명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divD.addChild(obj.name, obj);

            obj = new Edit("edtSearchGwamokCd","76","9","120","22",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("0");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divD.addChild(obj.name, obj);

            obj = new Edit("edtSearchGwamokNm","203","9","120","22",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("1");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divD.addChild(obj.name, obj);

            obj = new Static("stc_01_00","348","9","88","22",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("5");
            obj.set_text("담당교수");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divD.addChild(obj.name, obj);

            obj = new Edit("edtSearchDamdangGyosuCd","446","9","120","22",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divD.addChild(obj.name, obj);

            obj = new Edit("edtSearchDamdangGyosuNm","573","9","120","22",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("3");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divD.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","-1","27","41",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("6");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divD.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","67","2","10","37",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divD.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","16","0","660","9",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("8");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divD.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01_00","6","31","670","9",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("9");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divD.addChild(obj.name, obj);

            obj = new Static("Static01_02_01","323","-1","56","33",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("10");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divD.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00",null,"79","330","22","913",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("평가개요");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Tab("tab",null,"376","1242",null,"0","0",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_tabindex("0");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Tabpage("GibonPyeongGa",this.tab);
            obj.set_text("기본평가내용");
            this.tab.addChild(obj.name, obj);

            obj = new Static("stc_13_06","10","108",null,"28","10",null,null,null,null,null,this.tab.GibonPyeongGa.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.GibonPyeongGa.addChild(obj.name, obj);

            obj = new Static("stc_12_06","10","108","150","28",null,null,null,null,null,null,this.tab.GibonPyeongGa.form);
            obj.set_taborder("8");
            obj.set_text("평가시기");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.GibonPyeongGa.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00","276","108","150","28",null,null,null,null,null,null,this.tab.GibonPyeongGa.form);
            obj.set_taborder("9");
            obj.set_text("산업체인사활용여부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.GibonPyeongGa.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_00","10","36",null,"73","10",null,null,null,null,null,this.tab.GibonPyeongGa.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.GibonPyeongGa.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_00","10","36","150","73",null,null,null,null,null,null,this.tab.GibonPyeongGa.form);
            obj.set_taborder("11");
            obj.set_text("평가내용");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.GibonPyeongGa.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00","535","108","150","28",null,null,null,null,null,null,this.tab.GibonPyeongGa.form);
            obj.set_taborder("12");
            obj.set_text("평가방법");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.GibonPyeongGa.addChild(obj.name, obj);

            obj = new Combo("cboPyeongGaSigi","164","111","109","22",null,null,null,null,null,null,this.tab.GibonPyeongGa.form);
            obj.set_taborder("1");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsSigi");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.tab.GibonPyeongGa.addChild(obj.name, obj);

            obj = new TextArea("txtPyeongGaNaeyong","164","40",null,"64","15",null,null,null,null,null,this.tab.GibonPyeongGa.form);
            obj.set_taborder("0");
            obj.set_maxlength("666");
            this.tab.GibonPyeongGa.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","10","11","163","22",null,null,null,null,null,null,this.tab.GibonPyeongGa.form);
            obj.set_taborder("13");
            obj.set_text("기본평가내용");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.GibonPyeongGa.addChild(obj.name, obj);

            obj = new Edit("edtPyeongGaBangbub","792","111","310","22",null,null,null,null,null,null,this.tab.GibonPyeongGa.form);
            obj.set_taborder("4");
            obj.set_enable("true");
            obj.set_maxlength("166");
            obj.set_readonly("true");
            this.tab.GibonPyeongGa.addChild(obj.name, obj);

            obj = new Combo("cboSanupche","429","111","103","22",null,null,null,null,null,null,this.tab.GibonPyeongGa.form);
            obj.set_taborder("2");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsYN");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.tab.GibonPyeongGa.addChild(obj.name, obj);

            obj = new Combo("cboPyeongGaBangbub","688","111","102","22",null,null,null,null,null,null,this.tab.GibonPyeongGa.form);
            obj.set_taborder("3");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsBangbub");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.tab.GibonPyeongGa.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_00_00","10","136",null,"73","10",null,null,null,null,null,this.tab.GibonPyeongGa.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.GibonPyeongGa.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_00_00","10","136","150","73",null,null,null,null,null,null,this.tab.GibonPyeongGa.form);
            obj.set_taborder("15");
            obj.set_text("평가시\r\n고려사항");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.GibonPyeongGa.addChild(obj.name, obj);

            obj = new TextArea("txtGoryeoSahang","164","140",null,"64","15",null,null,null,null,null,this.tab.GibonPyeongGa.form);
            obj.set_taborder("5");
            obj.set_maxlength("666");
            this.tab.GibonPyeongGa.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_00_01","10","206",null,"73","10",null,null,null,null,null,this.tab.GibonPyeongGa.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.GibonPyeongGa.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_00_01","10","206","150","73",null,null,null,null,null,null,this.tab.GibonPyeongGa.form);
            obj.set_taborder("17");
            obj.set_text("평가결과\r\n활용계획");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.GibonPyeongGa.addChild(obj.name, obj);

            obj = new TextArea("txtHwalyong","164","210",null,"64","15",null,null,null,null,null,this.tab.GibonPyeongGa.form);
            obj.set_taborder("6");
            obj.set_maxlength("166");
            this.tab.GibonPyeongGa.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","15","28","320","8",null,null,null,null,null,null,this.tab.GibonPyeongGa.form);
            obj.set_taborder("18");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.GibonPyeongGa.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","481","0","100","35",null,null,null,null,null,null,this.tab.GibonPyeongGa.form);
            obj.set_taborder("19");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.GibonPyeongGa.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,"35","10","297","0",null,null,null,null,null,this.tab.GibonPyeongGa.form);
            obj.set_taborder("20");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.GibonPyeongGa.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","21","10","297",null,null,null,null,null,null,this.tab.GibonPyeongGa.form);
            obj.set_taborder("21");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.GibonPyeongGa.addChild(obj.name, obj);

            obj = new Tabpage("JindanPyeongGa",this.tab);
            obj.set_text("진단평가 문항관리");
            this.tab.addChild(obj.name, obj);

            obj = new Grid("grdJindan","10","35",null,null,"10","10",null,null,null,null,this.tab.JindanPyeongGa.form);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("dsJindan");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"185\"/><Column size=\"899\"/><Column size=\"85\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"checkbox\" text=\"하위역량\"/><Cell col=\"2\" text=\"진단문항\"/><Cell col=\"3\" text=\"순서\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" editmaxlength=\"1\"/><Cell col=\"1\" displaytype=\"combocontrol\" edittype=\"combo\" textAlign=\"left\" text=\"bind:NCS_CD\" editmaxlength=\"18\" combodataset=\"dsDegrCombo\" combodatacol=\"DEGR_COMP_NM\" combocodecol=\"DEGR_COMP_SEQ\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:DIAGQUESTION\" editmaxlength=\"166\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"mask\" textAlign=\"right\" text=\"bind:SORT\" editmaxlength=\"22\"/></Band></Format></Formats>");
            this.tab.JindanPyeongGa.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"3","60","25","10",null,null,null,null,null,this.tab.JindanPyeongGa.form);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            this.tab.JindanPyeongGa.addChild(obj.name, obj);

            obj = new Button("btnNew",null,"3","60","25","75",null,null,null,null,null,this.tab.JindanPyeongGa.form);
            obj.set_taborder("0");
            obj.set_text("신규");
            obj.set_cssclass("btn_WF_Crud");
            this.tab.JindanPyeongGa.addChild(obj.name, obj);

            obj = new Static("stc_09_00","10","11","262","22",null,null,null,null,null,null,this.tab.JindanPyeongGa.form);
            obj.set_taborder("3");
            obj.set_text("역량별 평가문항관리");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.JindanPyeongGa.addChild(obj.name, obj);

            obj = new Static("stRowCnt","186","10","166","24",null,null,null,null,null,null,this.tab.JindanPyeongGa.form);
            obj.set_taborder("4");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.tab.JindanPyeongGa.addChild(obj.name, obj);

            obj = new Static("stc_39",null,"12","442","20","116",null,null,null,null,null,this.tab.JindanPyeongGa.form);
            obj.set_taborder("5");
            obj.set_text("※진단평가 방식은 우수, 보통, 미흡의 3분위 자가진단 평가방법이 적용됩니다.");
            obj.set_cssclass("sta_WF_Desc02");
            this.tab.JindanPyeongGa.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","16","28","320","8",null,null,null,null,null,null,this.tab.JindanPyeongGa.form);
            obj.set_taborder("6");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.JindanPyeongGa.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_00","686","28","540","8",null,null,null,null,null,null,this.tab.JindanPyeongGa.form);
            obj.set_taborder("7");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.JindanPyeongGa.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","481","0","100","35",null,null,null,null,null,null,this.tab.JindanPyeongGa.form);
            obj.set_taborder("8");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.JindanPyeongGa.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","11","10","227",null,null,null,null,null,null,this.tab.JindanPyeongGa.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.JindanPyeongGa.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,"11","10","247","0",null,null,null,null,null,this.tab.JindanPyeongGa.form);
            obj.set_taborder("10");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.JindanPyeongGa.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_01","436",null,"210","10",null,"0",null,null,null,null,this.tab.JindanPyeongGa.form);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.JindanPyeongGa.addChild(obj.name, obj);

            obj = new Tabpage("NeungRyeok",this.tab);
            obj.set_text("직무역량평가내용관리");
            this.tab.addChild(obj.name, obj);

            obj = new Grid("grdNeungRyeok","10","35",null,null,"10","10",null,null,null,null,this.tab.NeungRyeok.form);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("dsNeungRyeok");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"262\"/><Column size=\"572\"/><Column size=\"98\"/><Column size=\"48\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"하위역량\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"checkbox\" text=\"행동지표\"/><Cell col=\"3\" text=\"배점\"/><Cell col=\"4\" text=\"순서\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" editmaxlength=\"1\"/><Cell col=\"1\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsDegrCombo\" combodatacol=\"DEGR_COMP_NM\" combocodecol=\"DEGR_COMP_SEQ\" text=\"bind:NCS_CD\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:EVALCONT\" editmaxlength=\"18\" combodataset=\"dsNCSCombo\" combodatacol=\"NCS_CD_NM\" combocodecol=\"NCS_CD\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"mask\" textAlign=\"right\" text=\"bind:POINT\" editmaxlength=\"22\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"mask\" textAlign=\"right\" text=\"bind:SORT\" editmaxlength=\"22\"/></Band></Format></Formats>");
            this.tab.NeungRyeok.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"3","60","25","10",null,null,null,null,null,this.tab.NeungRyeok.form);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            this.tab.NeungRyeok.addChild(obj.name, obj);

            obj = new Button("btnNew",null,"3","60","25","75",null,null,null,null,null,this.tab.NeungRyeok.form);
            obj.set_taborder("0");
            obj.set_text("신규");
            obj.set_cssclass("btn_WF_Crud");
            this.tab.NeungRyeok.addChild(obj.name, obj);

            obj = new Static("stc_09_00","10","11","332","22",null,null,null,null,null,null,this.tab.NeungRyeok.form);
            obj.set_taborder("3");
            obj.set_text("직무역량평가내용관리");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.NeungRyeok.addChild(obj.name, obj);

            obj = new Static("stRowCnt","186","10","146","24",null,null,null,null,null,null,this.tab.NeungRyeok.form);
            obj.set_taborder("4");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.tab.NeungRyeok.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","16","28","380","8",null,null,null,null,null,null,this.tab.NeungRyeok.form);
            obj.set_taborder("5");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.NeungRyeok.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","481","1","100","35",null,null,null,null,null,null,this.tab.NeungRyeok.form);
            obj.set_taborder("6");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.NeungRyeok.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_00","910","28","320","8",null,null,null,null,null,null,this.tab.NeungRyeok.form);
            obj.set_taborder("7");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.NeungRyeok.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","11","10","267",null,null,null,null,null,null,this.tab.NeungRyeok.form);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.NeungRyeok.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,"11","10","177","0",null,null,null,null,null,this.tab.NeungRyeok.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.NeungRyeok.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_01","436",null,"210","10",null,"0",null,null,null,null,this.tab.NeungRyeok.form);
            obj.set_taborder("10");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.NeungRyeok.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","1","1","27","67",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Grid("grdDetail",null,"181","702","150","540",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("dsDetail");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"77\"/><Column size=\"55\"/><Column size=\"137\"/><Column size=\"435\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"배점\"/><Cell col=\"2\" text=\"평가방법\"/><Cell col=\"3\" text=\"평가개요\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:EVALITEM_DIVCD_NM\" editmaxlength=\"256\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:POINT\" editmaxlength=\"256\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:EVALWAY_DIVCD_NM\" editmaxlength=\"256\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\" text=\"bind:EVALSUMM\" editmaxlength=\"256\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01_00_01",null,"346","91","22","134",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("공유구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cboJakseongWanryo",null,"346","124","22","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsShare");
            obj.set_visible("false");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00_00",null,"351","330","22","913",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("평가내용 및 방법");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_39",null,"352","442","20","654",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("※평가항목이 진단평가이면 진단평가 문항관리 탭이 활성화됩니다.");
            obj.set_cssclass("sta_WF_Desc02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00_01",null,"155","330","22","913",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("평가배점");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_39_00",null,"157","442","20","714",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("※각 평가구분별로 꼭 저장버튼을 눌러주세요.");
            obj.set_cssclass("sta_WF_Desc02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","751","146","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","96","320","8",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00","399","173","320","8",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","400","368","320","8",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01","369","106","30","100",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("30");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00","400","96","320","8",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","730","69","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_01","1130","96","510","8",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00","901","331","329","45",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("↑\r\n\r45\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_00","1320","368","320","8",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01_00","1100","116","30","160",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("30");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_00",null,"157","511","53","0",null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_00",null,"157","150","53","361",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("직무역량");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_05_00_00_01_00",null,"104","511","53","0",null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00_01_00_00_00",null,"104","150","53","361",null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("대학핵심역량");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtJikmuYeokryang",null,"160","353","47","5",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_maxlength("1333");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Div("divHaeksimCheckbox",null,"109","346","46","5",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_01_00",null,"79","136","22","375",null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("역량관리");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Grid("grdHawi",null,"210","512","121","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("dsHawi");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"65\"/><Column size=\"447\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"주차\"/><Cell col=\"1\" text=\"하위역량\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:WEEK\" editmaxlength=\"256\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\" text=\"bind:DEGR_COMP_NM\" editmaxlength=\"256\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_39_01",null,"338","574","20","522",null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("※평가항목이 직무능력이면 직무역량평가내용관리 탭이 활성화됩니다.");
            obj.set_cssclass("sta_WF_Desc02");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("평가계획서");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","divM.form.edtSearchGwamokCd","value","ds_input","SUBJECT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divM.form.edtSearchGwamokNm","value","ds_input","SUBJECT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","tab.NeungRyeok.form.chk1Haknyeon00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","tab.NeungRyeok.form.chk1Haknyeon00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","tab.NeungRyeok.form.chk1Haknyeon00_00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","tab.NeungRyeok.form.chk1Haknyeon00_00_00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","tab.NeungRyeok.form.chk1Haknyeon00_00_00_00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","tab.NeungRyeok.form.chk1Haknyeon00_00_00_00_00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","tab.NeungRyeok.form.chk1Haknyeon00_00_00_00_00_00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item62","tab.NeungRyeok.form.chk1Haknyeon01","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item64","tab.NeungRyeok.form.chk2Haknyeon00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item65","tab.NeungRyeok.form.chk2Haknyeon00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item66","tab.NeungRyeok.form.chk2Haknyeon00_00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item67","tab.NeungRyeok.form.chk2Haknyeon00_00_00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item68","tab.NeungRyeok.form.chk2Haknyeon00_00_00_00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item69","tab.NeungRyeok.form.chk2Haknyeon00_00_00_00_00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item70","tab.NeungRyeok.form.chk2Haknyeon01","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item71","tab.NeungRyeok.form.chk2Haknyeon00_01","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item72","tab.NeungRyeok.form.chk2Haknyeon00_00_01","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item73","tab.NeungRyeok.form.chk2Haknyeon00_00_00_01","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item74","tab.NeungRyeok.form.chk2Haknyeon00_00_00_00_01","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item75","tab.NeungRyeok.form.chk2Haknyeon00_00_00_00_00_01","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item76","tab.NeungRyeok.form.chk2Haknyeon00_00_00_00_00_00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item77","tab.NeungRyeok.form.chk2Haknyeon02","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item78","tab.NeungRyeok.form.chk2Haknyeon00_02","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item79","tab.NeungRyeok.form.chk2Haknyeon00_00_02","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item80","tab.NeungRyeok.form.chk2Haknyeon00_00_00_00_02","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item88","tab.NeungRyeok.form.edtSearchBigyogwaProgramNm00","value","ds_input","BIGYOGWA_PROGRAM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item89","tab.NeungRyeok.form.edtSearchBigyogwaProgramNm01","value","ds_input","BIGYOGWA_PROGRAM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divM.form.cboSearchGyeYeolHakGwa","value","ds_input","DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divM.form.spnSearchYYYY","value","ds_input","YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divM.form.cboSearchHakgi","value","ds_input","SEMESTER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","tab.GibonPyeongGa.form.cboPyeongGaSigi","value","dsGibon","EVALTIME_DIVCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","tab.GibonPyeongGa.form.txtPyeongGaNaeyong","value","dsGibon","EVALCONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","tab","enable","dsBindableTab","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divM.form.cboSearchHaknyeon","value","ds_input","COMP_GRADE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divM.form.edtSearchSawonCd","value","ds_input","PROF_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divM.form.edtSearchSawonNm","value","ds_input","PROF_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divD.form.edtSearchGwamokCd","value","dsDetail","SUBJECT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divD.form.edtSearchGwamokNm","value","dsDetail","SUBJECT_CD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divD.form.edtSearchDamdangGyosuCd","value","dsDetail","PROF_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divD.form.edtSearchDamdangGyosuNm","value","dsDetail","PROF_CD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","cboJakseongWanryo","value","dsGibon","SHARE_DIVCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","tab.GibonPyeongGa.form.edtPyeongGaBangbub","value","dsGibon","EVALWAY_ETC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","tab.GibonPyeongGa.form.cboSanupche","value","dsGibon","COMP_EVAL_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","tab.GibonPyeongGa.form.cboPyeongGaBangbub","value","dsGibon","EVALWAY_DIVCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","tab.GibonPyeongGa.form.txtGoryeoSahang","value","dsGibon","EVALCONSIDER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","tab.GibonPyeongGa.form.txtHwalyong","value","dsGibon","DIAGEVAL_RESULT_USEPLAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","grdDetail","enable","dsBindableGrid","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","txtJikmuYeokryang","value","dsJikmu","JOB_COMP_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","grdHawi","enable","dsBindableGrid","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
            this._addPreloadList("data","","dsNCSCombo");
            this._addPreloadList("data","","dsCopy");
            this._addPreloadList("data","","dsAuth");
            this._addPreloadList("data","","ds_authInput");
            this._addPreloadList("data","","dsDetail");
            this._addPreloadList("data","","dsGibon");
            this._addPreloadList("data","","dsJindan");
            this._addPreloadList("data","","dsNeungRyeok");
            this._addPreloadList("data","","dsDegrCombo");
            this._addPreloadList("data","","dsHaeksim");
            this._addPreloadList("data","","dsJikmu");
            this._addPreloadList("data","","dsHawi");
        };
        
        // User Script
        this.registerScript("UC01_2122103_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UC01_2122103_M.xfdl(평가계획서)
        * 작 성         일 명: jiback
        * 작 성         일 자: 2021/02/18
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
        this.chkKSAT   = "";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.chkKSATName = "";
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
            var strDs    = "dsHakgi|dsShare|dsSigi|dsHaknyeon|dsYN|dsBangbub";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00022|00543|00547|00060|00542|00548";                         			// 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "X|S|S|X|S|S";                                   											// 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
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


        	// 평가계획서 작성/수정 권한 조회
        	var strSvc      = "authInit";
            var strUrl      = "/prj/UC/UC01/authRetrieve_2122103_M.do";
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
        		this.divM.form.edtSearchSawonCd.set_value(objApp.gds_userInfoDb.getColumn(0,"USER_ID"));
        		this.divM.form.edtSearchSawonNm.set_value(objApp.gds_userInfoDb.getColumn(0,"USER_NM"));
        		this.divM.form.edtSearchSawonCd.set_enable(false);
        		this.divM.form.edtSearchSawonNm.set_enable(false);
        		this.divM.form.btnSearchSawon.set_enable(false);
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
         	if(this.dsAuth.getColumn(0, "EVAL_POSS_YN") == "N")
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
        	this.gfn_clearSortAll(this.grdDetail);
        	this.gfn_clearSortAll(this.grdHawi);
        	this.gfn_clearSortAll(this.tab.JindanPyeongGa.form.grdJindan);
        	this.gfn_clearSortAll(this.tab.NeungRyeok.form.grdNeungRyeok);
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
        			case "HaeksimRet":
                            this.fn_PostHaeksimRet();
                        break;
        			case "DRet":
                            this.fn_PostDRet();
                        break;
        			case "GibonRet":
                            this.fn_PostGibonRet();
                        break;
        			case "JindanRet":
                            this.fn_PostJindanRet();
                        break;
        			case "Copy":
                            this.fn_PostCopy();
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
        			case "JindanDel":
                            this.fn_PostJindanDel();
                        break;
        			case "NeungRyeokDel":
                            this.fn_PostNeungRyeokDel();
                        break;
        			case "HawiDel":
                            this.fn_PostHawiDel();
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
        					this.dsCopy.setColumn(0,"YYYY",this.dsDetail.getColumn(this.dsDetail.rowposition,"YYYY"));
        					this.dsCopy.setColumn(0,"SEMESTER",this.dsDetail.getColumn(this.dsDetail.rowposition,"SEMESTER"));
        					this.dsCopy.setColumn(0,"DEPT_CD",this.dsDetail.getColumn(this.dsDetail.rowposition,"DEPT_CD"));
        					this.dsCopy.setColumn(0,"MAJOR_CD",this.dsDetail.getColumn(this.dsDetail.rowposition,"MAJOR_CD"));
        					this.dsCopy.setColumn(0,"DAYNIGHT_DIVCD",this.dsDetail.getColumn(this.dsDetail.rowposition,"DAYNIGHT_DIVCD"));
        					this.dsCopy.setColumn(0,"COMP_GRADE_CD",this.dsDetail.getColumn(this.dsDetail.rowposition,"COMP_GRADE_CD"));
        					this.dsCopy.setColumn(0,"SUBJECT_CD",this.dsDetail.getColumn(this.dsDetail.rowposition,"SUBJECT_CD"));
        					this.dsCopy.setColumn(0,"LECTCLASS",this.dsDetail.getColumn(this.dsDetail.rowposition,"LECTCLASS"));
        					this.dsCopy.setColumn(0,"PROF_CD",this.dsDetail.getColumn(this.dsDetail.rowposition,"PROF_CD"));
        					this.dsCopy.setColumn(0, "YYYY_COPY", sRtn[0]);
        					this.dsCopy.setColumn(0, "SEMESTER_COPY", sRtn[1]);
        					this.dsCopy.setColumn(0, "DEPT_CD_COPY", sRtn[2]);
        					this.dsCopy.setColumn(0, "MAJOR_CD_COPY", sRtn[3]);
        					this.dsCopy.setColumn(0, "DAYNIGHT_DIVCD_COPY", sRtn[4]);
        					this.dsCopy.setColumn(0, "COMP_GRADE_CD_COPY", sRtn[5]);
        					this.dsCopy.setColumn(0, "SUBJECT_CD_COPY", sRtn[6]);
        					this.dsCopy.setColumn(0, "LECTCLASS_COPY", sRtn[7]);
        					this.dsCopy.setColumn(0, "PROF_CD_COPY", sRtn[8]);

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
        		case "tmp1" :        // 평가계획서 가져오기
                        this.fn_Get();
                    break;
        		case "tmp2" :        // 평가계획서 출력
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
        	this.dsBindableGrid.setColumn(0, "bEnable",	"false");
        	this.dsDetail.clearData();
        	this.dsGibon.clearData();
        	this.dsJindan.clearData();
        	this.dsNeungRyeok.clearData();
        	this.fn_setObjCheckBoxDestroy(this.divHaeksimCheckbox.form);
        	this.dsHaeksim.clearData();
        	this.dsJikmu.clearData();
        	this.dsHawi.clearData();
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
            var strUrl      = "/prj/UC/UC01/Retrieve_2122103_M.do";
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
        	this.dsDetail.clearData();
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
        	this.dsBindableGrid.setColumn(0, "bEnable",	"true");
        	this.dsDetail.clearData();
        	this.dsGibon.clearData();
        	this.dsJindan.clearData();
        	this.dsNeungRyeok.clearData();
        	this.fn_setObjCheckBoxDestroy(this.divHaeksimCheckbox.form);
        	this.dsHaeksim.clearData();
        	this.dsJikmu.clearData();
        	this.dsHawi.clearData();

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
        	this.fn_HaeksimRet();
        	this.fn_JikmuRet();
        	this.fn_HawiRet();
        	this.fn_DRet();
        };

        /**********************************************************************
        	05-1. 대학핵심역량매핑 조회 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_HaeksimRet = function()
        {
            var strSvc      = "HaeksimRet";
            var strUrl      = "/prj/UC/UC01/haeksimRetrieve_2122103_M.do";
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
        	var colSize	= 3;    // CheckBox 열의 갯수생성

        	this.fn_setObjCheckBoxDestroy(this.divHaeksimCheckbox.form);

        	for (var i = 0; i < this.dsHaeksim.getRowCount(); i++)
        	{
        		var chkNUM 		 = this.dsHaeksim.getColumn(i, "CORE_COMP_DIVCD");
        		var chkNm 		 = this.dsHaeksim.getColumn(i, "CD_NM");
        		var chkSubjectCd = this.dsHaeksim.getColumn(i, "SUBJECT_CD");
        		chkId = "CheckBox"+ chkNUM;
        		this.fn_HaeksimCreateCheckBox(chkId,chkNUM,chkNm,leftSz,topSz,chkSubjectCd);
        		var chkObj = this.divHaeksimCheckbox.form.components[chkId];
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
        	this.divHaeksimCheckbox.form.resetScroll();
        };

        this.fn_HaeksimCreateCheckBox = function (chkId,chkNUM,chkNm,leftSz,topSz,chkSubjectCd)
        {
        	var colWidth  	= 110;  // CheckBox 사이즈 설정
        	var colHeight   = 20;   // CheckBox 높이 설정

        	var objCheckBox = new CheckBox();
        	objCheckBox.init(chkId, leftSz,topSz,colWidth,colHeight);
        	this.divHaeksimCheckbox.addChild(chkId, objCheckBox);
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
        	05-2. 직무역량 조회 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_JikmuRet = function()
        {
            var strSvc      = "";
            var strUrl      = "/prj/UC/UC01/jikmuRetrieve_2122103_M.do";
            var strInDs     = "ds_dInput=ds_dInput";
            var strOutDs    = "dsJikmu=dsJikmu";
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
        	05-3. 하위역량 조회 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_HawiRet = function()
        {
            var strSvc      = "";
            var strUrl      = "/prj/UC/UC01/hawiRetrieve_2122103_M.do";
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

        /**********************************************************************
        	05-4. 디테일 조회 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_DRet = function()
        {
            var strSvc      = "DRet";
            var strUrl      = "/prj/UC/UC01/detailRetrieve_2122103_M.do";
            var strInDs     = "ds_dInput=ds_dInput";
            var strOutDs    = "dsDetail=dsDetail";
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

        this.dsDetail_canrowposchange = function(obj,e)
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

        this.dsDetail_onrowposchanged = function(obj,e)
        {
        	this.dsBindableTab.setColumn(0, "bEnable",	"true");
        	this.tab.set_tabindex(0);

        	// 조회조건 셋팅
        	this.ds_ddInput.setColumn(0,"YYYY",this.dsDetail.getColumn(this.dsDetail.rowposition,"YYYY"));
        	this.ds_ddInput.setColumn(0,"SEMESTER",this.dsDetail.getColumn(this.dsDetail.rowposition,"SEMESTER"));
        	this.ds_ddInput.setColumn(0,"DEPT_CD",this.dsDetail.getColumn(this.dsDetail.rowposition,"DEPT_CD"));
        	this.ds_ddInput.setColumn(0,"MAJOR_CD",this.dsDetail.getColumn(this.dsDetail.rowposition,"MAJOR_CD"));
        	this.ds_ddInput.setColumn(0,"DAYNIGHT_DIVCD",this.dsDetail.getColumn(this.dsDetail.rowposition,"DAYNIGHT_DIVCD"));
        	this.ds_ddInput.setColumn(0,"COMP_GRADE_CD",this.dsDetail.getColumn(this.dsDetail.rowposition,"COMP_GRADE_CD"));
        	this.ds_ddInput.setColumn(0,"SUBJECT_CD",this.dsDetail.getColumn(this.dsDetail.rowposition,"SUBJECT_CD"));
        	this.ds_ddInput.setColumn(0,"LECTCLASS",this.dsDetail.getColumn(this.dsDetail.rowposition,"LECTCLASS"));
        	this.ds_ddInput.setColumn(0,"PROF_CD",this.dsDetail.getColumn(this.dsDetail.rowposition,"PROF_CD"));
        	this.ds_ddInput.setColumn(0,"EVALITEM_DIVCD",this.dsDetail.getColumn(this.dsDetail.rowposition,"EVALITEM_DIVCD"));

        	// 조회
        	this.fn_getCombo();
        	this.fn_GibonRet();
        	this.fn_JindanRet();

           	if(this.dsDetail.getColumn(this.dsDetail.rowposition, "EVALITEM_YN01") == "Y")
           	{
           		this.tab.JindanPyeongGa.set_enable(true);
           	}
           	else
           	{
           		this.tab.JindanPyeongGa.set_enable(false);
           	}

           	if(this.dsDetail.getColumn(this.dsDetail.rowposition, "EVALITEM_YN02") == "Y")
           	{
           		this.tab.NeungRyeok.set_enable(true);
           	}
           	else
           	{
           		this.tab.NeungRyeok.set_enable(false);
           	}
        };

        /**********************************************************************
        	05-4-1. 공통코드 조회 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_getCombo = function()
        {
        	// 평가내용구분콤보 가져오는 함수
        	this.ds_comInput.setColumn(0, "CLASS_ID", "00549");

        	var strSvc      = "";
        	var strUrl      = "/prj/UC/UC01/comboRetrieve_2122103_M.do";
        	var strInDs     = "ds_comInput=ds_comInput";
        	var strOutDs    = "dsNaeyongCombo=dsNaeyongCombo";
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

        	// 하위역량 콤보박스 조회
        	var strSvc      = "";
            var strUrl      = "/prj/UC/UC01/degrComboRetrieve_2122103_M.do";
            var strInDs     = "ds_ddInput=ds_ddInput";
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
        };
        /**********************************************************************
        	05-4-2. 기본평가내용 조회 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_GibonRet = function()
        {
            var strSvc      = "GibonRet";
            var strUrl      = "/prj/UC/UC01/Retrieve_2122103_T01.do";
            var strInDs     = "ds_ddInput=ds_ddInput";
            var strOutDs    = "dsGibon=dsGibon";
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
        	05-4-3. 평가리스트 세부 조회 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_JindanRet = function()
        {
            var strSvc      = "JindanRet";
            var strUrl      = "/prj/UC/UC01/Retrieve_2122103_T02.do";
            var strInDs     = "ds_ddInput=ds_ddInput";
            var strOutDs    = "dsJindan=dsJindan ";
        		strOutDs   += "dsNeungRyeok=dsNeungRyeok ";
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
        this.fn_PostJindanRet = function()
        {
        	this.gfn_getRowCount(this.tab.JindanPyeongGa.form.stRowCnt, this.dsJindan);
        	this.gfn_getRowCount(this.tab.NeungRyeok.form.stRowCnt, this.dsNeungRyeok);
        };
        /**********************************************************************
                06. 신규 함수 선언
        ***********************************************************************/
        // 진단평가 문항관리
        this.tab_JindanPyeongGa_btnNew_onclick = function(obj,e)
        {
        	this.dsJindan.addRow();
        	this.gfn_getRowCount(this.tab.JindanPyeongGa.form.stRowCnt, this.dsJindan);
        };

        // 직무능력평가 평가내용관리(능력단위요소 수행준거)
        this.tab_NeungRyeok_btnNew_onclick = function(obj,e)
        {
        	this.dsNeungRyeok.addRow();
        	this.dsNeungRyeok.setColumn(this.dsNeungRyeok.rowposition, "EVALCONT_DIVCD", "1");
        	this.gfn_getRowCount(this.tab.NeungRyeok.form.stRowCnt, this.dsNeungRyeok);
        };

        /**********************************************************************
                07. 전체 삭제 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 삭제 버튼 실행
         */
        this.fn_PreDel = function()
        {
            //멀티삭제용도
            if(this.dsGibon.rowcount < 1)
            {
                this.gfn_alert("개설과목 및 평가구분을 선택해주세요.","삭제정보","","warning");
                return false;
            }
            var result = this.gfn_confirm( "평가항목 관련한 모든 데이터가 삭제됩니다. 정말 삭제하시겠습니까?", "삭제정보","","question" );

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
            var strUrl      = "/prj/UC/UC01/Delete_2122103_M.do";
            var strInDs     = "dsGibon=dsGibon";
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
        	this.dsDetail.clearData();
        	this.dsGibon.clearData();
        	this.dsJindan.clearData();
        	this.dsNeungRyeok.clearData();
            this.fn_Ret();
        };

        /**********************************************************************
                07-1. 진단평가 삭제 함수 선언
        ***********************************************************************/
        this.tab_JindanPyeongGa_btnDel_onclick = function(obj,e)
        {
            //멀티삭제용도
            if(this.dsJindan.rowcount < 1 || this.dsJindan.findRow("CHK",1) == -1)
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
            this.dsJindan.set_enableevent(false);
            for(var i=this.dsJindan.rowcount-1;i>-1;i--)
            {
                if(this.dsJindan.getColumn(i,"CHK") == "1" || this.dsJindan.getRowType(i) == 2)
                {
                    this.dsJindan.deleteRow(i);
                }
            }
            this.dsJindan.set_enableevent(true);

        	this.fn_JindanDel();
        };

        /**
         * 기능 : Row 삭제 또는 Transaction 삭제 처리
         */
        this.fn_JindanDel = function()
        {
            var strSvc      = "JindanDel";
            var strUrl      = "/prj/UC/UC01/jindanDelete_2122103_T02.do";
            var strInDs     = "dsJindan=dsJindan:u";
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

        this.fn_PostJindanDel = function()
        {
            this.gfn_getRowCount(this.tab.JindanPyeongGa.form.stRowCnt, this.dsJindan);
        };

        /**********************************************************************
                07-2. 직무역량 삭제 함수 선언
        ***********************************************************************/
        this.tab_NeungRyeok_btnDel_onclick = function(obj,e)
        {
            //멀티삭제용도
            if(this.dsNeungRyeok.rowcount < 1 || this.dsNeungRyeok.findRow("CHK",1) == -1)
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
            this.dsNeungRyeok.set_enableevent(false);
            for(var i=this.dsNeungRyeok.rowcount-1;i>-1;i--)
            {
                if(this.dsNeungRyeok.getColumn(i,"CHK") == "1" || this.dsNeungRyeok.getRowType(i) == 2)
                {
                    this.dsNeungRyeok.deleteRow(i);
                }
            }
            this.dsNeungRyeok.set_enableevent(true);

        	this.fn_NeungRyeokDel();
        };

        /**
         * 기능 : Row 삭제 또는 Transaction 삭제 처리
         */
        this.fn_NeungRyeokDel = function()
        {
            var strSvc      = "NeungRyeokDel";
            var strUrl      = "/prj/UC/UC01/neungRyeokDelete_2122103_T02.do";
            var strInDs     = "dsNeungRyeok=dsNeungRyeok:u";
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

        this.fn_PostNeungRyeokDel = function()
        {
            this.gfn_getRowCount(this.tab.NeungRyeok.form.stRowCnt, this.dsNeungRyeok);
        };

        /**********************************************************************
                8. 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave = function()
        {
        	if(this.dsGibon.rowcount < 1)
            {
                this.gfn_alert("개설과목 및 평가구분을 선택해주세요.","삭제정보","","warning");
                return false;
            }

        	// 수행준거 및 자율평가 배점의 합이 평가배점과 일치하지 않을 경우
        	var neungRyoekSum = 0;

        	for(var i=0; i<this.dsNeungRyeok.rowcount; i++)
        	{
        		neungRyoekSum = neungRyoekSum + this.dsNeungRyeok.getColumn(i, "POINT");
        	}

        	if(this.dsDetail.getColumn(this.dsDetail.rowposition, "EVALITEM_YN02") == "Y")
        	{
        		if(neungRyoekSum != this.dsGibon.getColumn(0, "POINT"))
        		{
        			this.gfn_alert("직무역량평가내용 배점의 합이 평가배점과 일치하지 않습니다.","삭제정보","","warning");
        			return false;
        		}
        	}

        	var result = this.gfn_confirm( "저장 하시겠습니까?", "저장","", "question" );
            if(result == 0)
            {
                return false;
            }

        	// 진단평가 문항관리 세팅
        	for(var i=this.dsJindan.rowcount-1;i>-1;i--)
        	{
        		this.dsJindan.setColumn(i,"YYYY",this.dsGibon.getColumn(0,"YYYY"));
        		this.dsJindan.setColumn(i,"SEMESTER",this.dsGibon.getColumn(0,"SEMESTER"));
        		this.dsJindan.setColumn(i,"DEPT_CD",this.dsGibon.getColumn(0,"DEPT_CD"));
        		this.dsJindan.setColumn(i,"MAJOR_CD",this.dsGibon.getColumn(0,"MAJOR_CD"));
        		this.dsJindan.setColumn(i,"DAYNIGHT_DIVCD",this.dsGibon.getColumn(0,"DAYNIGHT_DIVCD"));
        		this.dsJindan.setColumn(i,"COMP_GRADE_CD",this.dsGibon.getColumn(0,"COMP_GRADE_CD"));
        		this.dsJindan.setColumn(i,"SUBJECT_CD",this.dsGibon.getColumn(0,"SUBJECT_CD"));
        		this.dsJindan.setColumn(i,"LECTCLASS",this.dsGibon.getColumn(0,"LECTCLASS"));
        		this.dsJindan.setColumn(i,"PROF_CD",this.dsGibon.getColumn(0,"PROF_CD"));
        		this.dsJindan.setColumn(i,"EVALITEM_DIVCD",this.dsGibon.getColumn(0,"EVALITEM_DIVCD"));
        	}

        	// 직무능력평가 평가내용관리(능력단위요소 수행준거) 세팅
        	for(var i=this.dsNeungRyeok.rowcount-1;i>-1;i--)
        	{
        		this.dsNeungRyeok.setColumn(i,"YYYY",this.dsGibon.getColumn(0,"YYYY"));
        		this.dsNeungRyeok.setColumn(i,"SEMESTER",this.dsGibon.getColumn(0,"SEMESTER"));
        		this.dsNeungRyeok.setColumn(i,"DEPT_CD",this.dsGibon.getColumn(0,"DEPT_CD"));
        		this.dsNeungRyeok.setColumn(i,"MAJOR_CD",this.dsGibon.getColumn(0,"MAJOR_CD"));
        		this.dsNeungRyeok.setColumn(i,"DAYNIGHT_DIVCD",this.dsGibon.getColumn(0,"DAYNIGHT_DIVCD"));
        		this.dsNeungRyeok.setColumn(i,"COMP_GRADE_CD",this.dsGibon.getColumn(0,"COMP_GRADE_CD"));
        		this.dsNeungRyeok.setColumn(i,"SUBJECT_CD",this.dsGibon.getColumn(0,"SUBJECT_CD"));
        		this.dsNeungRyeok.setColumn(i,"LECTCLASS",this.dsGibon.getColumn(0,"LECTCLASS"));
        		this.dsNeungRyeok.setColumn(i,"PROF_CD",this.dsGibon.getColumn(0,"PROF_CD"));
        		this.dsNeungRyeok.setColumn(i,"EVALITEM_DIVCD",this.dsGibon.getColumn(0,"EVALITEM_DIVCD"));
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
            var strUrl      = "/prj/UC/UC01/Save_2122103_M.do";
            var strInDs     = "dsGibon=dsGibon:u ";
        		strInDs	   += "dsJindan=dsJindan:u ";
        		strInDs	   += "dsNeungRyeok=dsNeungRyeok:u ";
            var strOutDs    = "";
        	var strArg      = "";
        	var GBV_MENUID  = objApp.gv_cutPrgId;
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
        	this.dsMaster.clearData();
        	this.dsDetail.clearData();
        	this.dsGibon.clearData();
        	this.dsJindan.clearData();
        	this.dsNeungRyeok.clearData();
        	this.fn_Ret();
        };
        /**********************************************************************
                9. 평가계획서 가져오기
        ***********************************************************************/
        /**
         * 기능 : 삭제 완료 후 복사
         */
        this.fn_Copy = function()
        {
        	var strSvc      = "Copy";
            var strUrl      = "/prj/UC/UC01/Copy_2122103_P01.do";
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
        this.tab_YeokRyangMapping_grdHawiYeokryang_onheadclick = function(obj,e)
        {
        	if(e.cell == this.tab.YeokRyangMapping.form.grdHawiYeokryang.getBindCellIndex("body","CHK"))
            {
                this.gfn_checkAll(obj, e);
            }
        };

        this.tab_JindanPyeongGa_grdJindan_onheadclick = function(obj,e)
        {
        	if(e.cell == this.tab.JindanPyeongGa.form.grdJindan.getBindCellIndex("body","CHK"))
            {
                this.gfn_checkAll(obj, e);
            }
        };

        this.tab_NeungRyeok_grdNeungRyeok_onheadclick = function(obj,e)
        {
        	if(e.cell == this.tab.NeungRyeok.form.grdNeungRyeok.getBindCellIndex("body","CHK"))
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

        this.grdDetail_onheaddblclick = function(obj,e)
        {
        	if(e.cell != this.grdDetail.getBindCellIndex("body","CHK"))
            {
                this.gfn_gridSort(obj,e);
            }
        };

        this.tab_JindanPyeongGa_grdJindan_onheaddblclick = function(obj,e)
        {
        	if(e.cell != this.tab.JindanPyeongGa.form.grdJindan.getBindCellIndex("body","CHK"))
            {
                this.gfn_gridSort(obj,e);
            }
        };

        this.tab_NeungRyeok_grdNeungRyeok_onheaddblclick = function(obj,e)
        {
        	if(e.cell != this.tab.NeungRyeok.form.grdNeungRyeok.getBindCellIndex("body","CHK"))
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
        this.divM_cboSearchHaknyeon_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"COMP_GRADE_CD",obj.value);
        		this.fn_Ret();
        	}
        };

        // 평가방법이 기타일때만 옆에 입력창활성화
        this.tab_GibonPyeongGa_cboPyeongGaBangbub_onitemchanged = function(obj,e)
        {
        	if(this.dsGibon.getColumn(0, "EVALWAY_DIVCD") == "99")
        	{
        		this.tab.GibonPyeongGa.form.edtPyeongGaBangbub.set_readonly(false);
        	}
        	else
        	{
        		this.tab.GibonPyeongGa.form.edtPyeongGaBangbub.set_readonly(true);
        		this.dsGibon.setColumn(0, "EVALWAY_ETC", "");
        	}
        };

        // 평가계획서 출력
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

        	this.gfn_commonUtils_report('UC01/UC01_2122103_M_01.crf',  param);
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
        				this.fn_setCallGwamokPopup(e.newvalue);
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

            if(this.gfn_isUpdate(this.dsGibon))
        	{
        		value = true;
        	}
        	else if(this.gfn_isUpdate(this.dsJindan))
        	{
        		value = true;
        	}
        	else if(this.gfn_isUpdate(this.dsNeungRyeok))
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
        	this.fn_setCallGwamokPopup(gwamokCdNm);
        };

        // 사원 팝업
        this.divM_btnSearchSawon_onclick = function(obj,e)
        {
        	var sawonCdNm = this.divM.form.edtSearchSawonNm.value;
        	this.fn_setCallSawonPopup(sawonCdNm);
        };

        // 평가계획서 가져오기 팝업
        this.fn_Get = function()
        {
        	if(this.dsDetail.rowcount < 1)
        	{
        		this.gfn_alert("개설과목을 선택해주세요.","저장정보","","question");
        	}
        	else
        	{
        		var yyyy = this.dsDetail.getColumn(this.dsDetail.rowposition,"YYYY");
        		var semester = this.dsDetail.getColumn(this.dsDetail.rowposition,"SEMESTER");
        		var gwamokCd = this.dsDetail.getColumn(this.dsDetail.rowposition,"SUBJECT_CD");
        		var gwamokNm = this.dsDetail.getColumn(this.dsDetail.rowposition,"SUBJECT_CD_NM");
        		var profCd = this.dsDetail.getColumn(this.dsDetail.rowposition,"PROF_CD");
        		var deptCd = this.dsDetail.getColumn(this.dsDetail.rowposition,"DEPT_CD");
        		var oArg = {yyyy:yyyy, semester:semester, gwamokCd:gwamokCd, gwamokNm:gwamokNm, profCd:profCd, deptCd:deptCd};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";
        		this.gfn_openPopup( "copy","UC01::UC01_2122103_P01.xfdl",oArg,sPopupCallBack,oOption);
        	}
        };

        this.fn_setCallGwamokPopup = function(strSearchValue)
        {
        	var yyyy = this.divM.form.spnSearchYYYY.value;
        	var semester = this.divM.form.cboSearchHakgi.value;
        	var sabeon = this.divM.form.edtSearchSawonCd.value;
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
        	}
        	else
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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster.addEventHandler("oncellclick",this.grdMaster_oncellclick,this);
            this.divM.form.cboSearchGyeYeolHakGwa.addEventHandler("onlbuttondown",this.divM_cboSearchGyeYeolHakGwa_onlbuttondown,this);
            this.divM.form.cboSearchGyeYeolHakGwa.addEventHandler("onitemchanged",this.divM_cboSearchGyeYeolHakGwa_onitemchanged,this);
            this.divM.form.cboSearchGyeYeolHakGwa.addEventHandler("onkeydown",this.divM_cboSearchGyeYeolHakGwa_onkeydown,this);
            this.divM.form.btnSearchGwamokMaster.addEventHandler("onclick",this.divM_btnSearchGwamok_onclick,this);
            this.divM.form.spnSearchYYYY.addEventHandler("onkeydown",this.divM_spnSearchYYYY_onkeydown,this);
            this.divM.form.cboSearchHakgi.addEventHandler("onkeydown",this.divM_cboSearchHakgi_onkeydown,this);
            this.divM.form.cboSearchHaknyeon.addEventHandler("onkeydown",this.divM_cboSearchHaknyeon_onkeydown,this);
            this.divM.form.btnSearchSawon.addEventHandler("onclick",this.divM_btnSearchSawon_onclick,this);
            this.tab.GibonPyeongGa.form.stc_13_00_00_00_00.addEventHandler("onclick",this.tab_00_Tabpage1_stc_13_00_00_00_00_onclick,this);
            this.tab.GibonPyeongGa.form.cboPyeongGaBangbub.addEventHandler("onitemchanged",this.tab_GibonPyeongGa_cboPyeongGaBangbub_onitemchanged,this);
            this.tab.GibonPyeongGa.form.stc_13_00_00_00_00_00.addEventHandler("onclick",this.tab_00_Tabpage1_stc_13_00_00_00_00_onclick,this);
            this.tab.GibonPyeongGa.form.stc_13_00_00_00_00_01.addEventHandler("onclick",this.tab_00_Tabpage1_stc_13_00_00_00_00_onclick,this);
            this.tab.JindanPyeongGa.form.grdJindan.addEventHandler("onheadclick",this.tab_JindanPyeongGa_grdJindan_onheadclick,this);
            this.tab.JindanPyeongGa.form.grdJindan.addEventHandler("onheaddblclick",this.tab_JindanPyeongGa_grdJindan_onheaddblclick,this);
            this.tab.JindanPyeongGa.form.btnDel.addEventHandler("onclick",this.tab_JindanPyeongGa_btnDel_onclick,this);
            this.tab.JindanPyeongGa.form.btnNew.addEventHandler("onclick",this.tab_JindanPyeongGa_btnNew_onclick,this);
            this.tab.JindanPyeongGa.form.stc_09_00.addEventHandler("onclick",this.tab_JindanPyeongGa_stc_09_00_onclick,this);
            this.tab.JindanPyeongGa.form.stc_39.addEventHandler("onclick",this.stc_39_onclick,this);
            this.tab.NeungRyeok.form.grdNeungRyeok.addEventHandler("onheadclick",this.tab_NeungRyeok_grdNeungRyeok_onheadclick,this);
            this.tab.NeungRyeok.form.grdNeungRyeok.addEventHandler("onheaddblclick",this.tab_NeungRyeok_grdNeungRyeok_onheaddblclick,this);
            this.tab.NeungRyeok.form.btnDel.addEventHandler("onclick",this.tab_NeungRyeok_btnDel_onclick,this);
            this.tab.NeungRyeok.form.btnNew.addEventHandler("onclick",this.tab_NeungRyeok_btnNew_onclick,this);
            this.grdDetail.addEventHandler("onheaddblclick",this.grdDetail_onheaddblclick,this);
            this.stc_39.addEventHandler("onclick",this.stc_39_onclick,this);
            this.stc_39_00.addEventHandler("onclick",this.stc_39_onclick,this);
            this.stc_13_00_00_00_00.addEventHandler("onclick",this.tab_00_Tabpage1_stc_13_00_00_00_00_onclick,this);
            this.stc_39_01.addEventHandler("onclick",this.stc_39_onclick,this);
            this.dsMaster.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.ds_input.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
            this.dsDetail.addEventHandler("canrowposchange",this.dsDetail_canrowposchange,this);
            this.dsDetail.addEventHandler("onrowposchanged",this.dsDetail_onrowposchanged,this);
        };
        this.loadIncludeScript("UC01_2122103_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
