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
            this.set_titletext("성적입력");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,2000);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMaster", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"2\"/><Column id=\"DEPT_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"MAJOR_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DAYNIGHT_DIVCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DAYNIGHT_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"COMP_GRADE_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_GRADE_CD\" type=\"STRING\" size=\"5\"/><Column id=\"SUBJECT_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"LECTCLASS\" type=\"STRING\" size=\"3\"/><Column id=\"PROF_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PROF_CD\" type=\"STRING\" size=\"30\"/><Column id=\"EDUGOAL\" type=\"STRING\" size=\"2000\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"255\"/><Column id=\"TEL\" type=\"STRING\" size=\"15\"/><Column id=\"COMPLETE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"SHARE_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"NOTICE\" type=\"STRING\" size=\"1000\"/><Column id=\"NCS_USE_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"MNG_PLAN\" type=\"STRING\" size=\"4000\"/><Column id=\"IMPRO_EVALCONT\" type=\"STRING\" size=\"4000\"/><Column id=\"IMPROSUB_EVALCONT\" type=\"STRING\" size=\"4000\"/><Column id=\"IMPRO_MNG_WAY\" type=\"STRING\" size=\"4000\"/><Column id=\"DEEP_MNG_CONT\" type=\"STRING\" size=\"4000\"/><Column id=\"DEEPSUB_MNG_CONT\" type=\"STRING\" size=\"4000\"/><Column id=\"DEEP_MNG_TIME\" type=\"STRING\" size=\"4000\"/><Column id=\"DEEP_EDU_YN\" type=\"STRING\" size=\"1\"/><Column id=\"IMPRO_EDU_YN\" type=\"STRING\" size=\"1\"/><Column id=\"DEEP_EDU_PLACE\" type=\"STRING\" size=\"1000\"/><Column id=\"DEEP_EDU_TIME\" type=\"DATE\" size=\"8\"/><Column id=\"CONFIRM_YN\" type=\"STRING\" size=\"1\"/><Column id=\"TRANS_FINAL_DATA\" type=\"DATE\" size=\"8\"/><Column id=\"IMPRO_EDU_TIME\" type=\"DATE\" size=\"8\"/><Column id=\"IMPRO_EDU_PLACE\" type=\"STRING\" size=\"1000\"/><Column id=\"DEEP_EDU_LECTURER\" type=\"STRING\" size=\"100\"/><Column id=\"DEEP_EDU_DEPT\" type=\"STRING\" size=\"100\"/><Column id=\"IMPRO_IMPLE_TIME\" type=\"STRING\" size=\"100\"/><Column id=\"IMPRO_MNG_TIME\" type=\"STRING\" size=\"100\"/><Column id=\"NON_SUBJECT_NOTICE\" type=\"STRING\" size=\"1000\"/><Column id=\"LECTTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"8\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"SUBJECT_CD\" type=\"STRING\" size=\"100\"/><Column id=\"SUBJECT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PROF_CD\" type=\"STRING\" size=\"10\"/><Column id=\"PROF_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YYYY\"/><Col id=\"SEMESTER\"/><Col id=\"DEPT_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgi", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"GRADE_POSS_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"TOTAL_CNT\" type=\"INT\" size=\"256\"/><Column id=\"GRADE_1\" type=\"INT\" size=\"256\"/><Column id=\"GRADE_2\" type=\"INT\" size=\"256\"/><Column id=\"GRADE_3\" type=\"INT\" size=\"256\"/><Column id=\"GRADE_4\" type=\"INT\" size=\"256\"/><Column id=\"GRADE_5\" type=\"INT\" size=\"256\"/><Column id=\"GRADE_6\" type=\"INT\" size=\"256\"/><Column id=\"GRADE_7\" type=\"INT\" size=\"256\"/><Column id=\"GRADE_8\" type=\"INT\" size=\"256\"/><Column id=\"GRADE_9\" type=\"INT\" size=\"256\"/><Column id=\"SUBJ_KIND\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PROF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PROF_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NCS_USE_DIVCD\" type=\"STRING\" size=\"256\"/><Column id=\"CONFIRM_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"8\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"MAJOR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DAYNIGHT_DIVCD\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_GRADE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT_CD\" type=\"STRING\" size=\"100\"/><Column id=\"LECTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"PROF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LECTTM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YYYY\"/><Col id=\"SEMESTER\"/><Col id=\"DEPT_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJikmuAuth", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"2\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"MAJOR_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DAYNIGHT_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"COMP_GRADE_CD\" type=\"STRING\" size=\"5\"/><Column id=\"SUBJECT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"LECTCLASS\" type=\"STRING\" size=\"3\"/><Column id=\"PROF_CD\" type=\"STRING\" size=\"30\"/><Column id=\"EVALITEM_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"COMP_EVAL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"EVALITEM_DIVCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"POINT\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNCS", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAll", this);
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MAJOR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DAYNIGHT_DIVCD\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_GRADE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PROF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DAYNIGHT_DIVCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_GRADE_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LECTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"STDID\" type=\"STRING\" size=\"256\"/><Column id=\"STDID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NOTE\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_01\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_02\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_03\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_11\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_12\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_13\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_14\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_15\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_16\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_17\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_18\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_19\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_99\" type=\"STRING\" size=\"256\"/><Column id=\"ATTEND_CNT02\" type=\"STRING\" size=\"256\"/><Column id=\"ATTEND_CNT03\" type=\"STRING\" size=\"256\"/><Column id=\"IMPRO_EDU_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DEEP_EDU_YN\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_TOTAL_SCORE\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_SCORE\" type=\"STRING\" size=\"256\"/><Column id=\"RANK\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJikmu1", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MAJOR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DAYNIGHT_DIVCD\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_GRADE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PROF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LECTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"STDID\" type=\"STRING\" size=\"256\"/><Column id=\"STDID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EVALCONT_DIVCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NCS_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"POINT\" type=\"STRING\" size=\"256\"/><Column id=\"SCORE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JUDGING\" type=\"STRING\" size=\"256\"/><Column id=\"NCS_USE_DIVCD\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_EVAL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"EVAL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"EVALITEM_DIVCD\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_SCORE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CONFIRM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"EVALCONT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYNX", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHyangsang", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MAJOR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DAYNIGHT_DIVCD\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_GRADE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PROF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LECTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"STDID\" type=\"STRING\" size=\"256\"/><Column id=\"STDID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NCS_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"POINT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SCORE\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_SCORE\" type=\"STRING\" size=\"256\"/><Column id=\"JUDGING\" type=\"STRING\" size=\"256\"/><Column id=\"EVALITEM_DIVCD\" type=\"STRING\" size=\"256\"/><Column id=\"EVAL_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHyangsangAuth", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"2\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"MAJOR_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DAYNIGHT_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"COMP_GRADE_CD\" type=\"STRING\" size=\"5\"/><Column id=\"SUBJECT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"LECTCLASS\" type=\"STRING\" size=\"3\"/><Column id=\"PROF_CD\" type=\"STRING\" size=\"30\"/><Column id=\"EVALITEM_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"COMP_EVAL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"EVALITEM_DIVCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"POINT\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJikmu2", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MAJOR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DAYNIGHT_DIVCD\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_GRADE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PROF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LECTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"STDID\" type=\"STRING\" size=\"256\"/><Column id=\"STDID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EVALCONT_DIVCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NCS_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"POINT\" type=\"STRING\" size=\"256\"/><Column id=\"SCORE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JUDGING\" type=\"STRING\" size=\"256\"/><Column id=\"NCS_USE_DIVCD\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_EVAL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"EVAL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"EVALITEM_DIVCD\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_SCORE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CONFIRM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"EVALCONT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJikmu3", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MAJOR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DAYNIGHT_DIVCD\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_GRADE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PROF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LECTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"STDID\" type=\"STRING\" size=\"256\"/><Column id=\"STDID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EVALCONT_DIVCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NCS_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"POINT\" type=\"STRING\" size=\"256\"/><Column id=\"SCORE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JUDGING\" type=\"STRING\" size=\"256\"/><Column id=\"NCS_USE_DIVCD\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_EVAL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"EVAL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"EVALITEM_DIVCD\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_SCORE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CONFIRM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"EVALCONT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJikmu4", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MAJOR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DAYNIGHT_DIVCD\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_GRADE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PROF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LECTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"STDID\" type=\"STRING\" size=\"256\"/><Column id=\"STDID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EVALCONT_DIVCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NCS_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"POINT\" type=\"STRING\" size=\"256\"/><Column id=\"SCORE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JUDGING\" type=\"STRING\" size=\"256\"/><Column id=\"NCS_USE_DIVCD\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_EVAL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"EVAL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"EVALITEM_DIVCD\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_SCORE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CONFIRM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"EVALCONT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJikmu5", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MAJOR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DAYNIGHT_DIVCD\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_GRADE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PROF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LECTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"STDID\" type=\"STRING\" size=\"256\"/><Column id=\"STDID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EVALCONT_DIVCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NCS_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"POINT\" type=\"STRING\" size=\"256\"/><Column id=\"SCORE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JUDGING\" type=\"STRING\" size=\"256\"/><Column id=\"NCS_USE_DIVCD\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_EVAL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"EVAL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"EVALITEM_DIVCD\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_SCORE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CONFIRM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"EVALCONT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJikmu6", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MAJOR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DAYNIGHT_DIVCD\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_GRADE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PROF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LECTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"STDID\" type=\"STRING\" size=\"256\"/><Column id=\"STDID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EVALCONT_DIVCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NCS_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"POINT\" type=\"STRING\" size=\"256\"/><Column id=\"SCORE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JUDGING\" type=\"STRING\" size=\"256\"/><Column id=\"NCS_USE_DIVCD\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_EVAL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"EVAL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"EVALITEM_DIVCD\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_SCORE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CONFIRM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"EVALCONT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJikmu7", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MAJOR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DAYNIGHT_DIVCD\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_GRADE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PROF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LECTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"STDID\" type=\"STRING\" size=\"256\"/><Column id=\"STDID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EVALCONT_DIVCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NCS_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"POINT\" type=\"STRING\" size=\"256\"/><Column id=\"SCORE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JUDGING\" type=\"STRING\" size=\"256\"/><Column id=\"NCS_USE_DIVCD\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_EVAL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"EVAL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"EVALITEM_DIVCD\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_SCORE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CONFIRM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"EVALCONT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJikmu8", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MAJOR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DAYNIGHT_DIVCD\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_GRADE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PROF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LECTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"STDID\" type=\"STRING\" size=\"256\"/><Column id=\"STDID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EVALCONT_DIVCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NCS_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"POINT\" type=\"STRING\" size=\"256\"/><Column id=\"SCORE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JUDGING\" type=\"STRING\" size=\"256\"/><Column id=\"NCS_USE_DIVCD\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_EVAL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"EVAL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"EVALITEM_DIVCD\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_SCORE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CONFIRM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"EVALCONT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJikmu9", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MAJOR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DAYNIGHT_DIVCD\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_GRADE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PROF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LECTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"STDID\" type=\"STRING\" size=\"256\"/><Column id=\"STDID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EVALCONT_DIVCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NCS_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"POINT\" type=\"STRING\" size=\"256\"/><Column id=\"SCORE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JUDGING\" type=\"STRING\" size=\"256\"/><Column id=\"NCS_USE_DIVCD\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_EVAL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"EVAL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"EVALITEM_DIVCD\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_SCORE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CONFIRM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"EVALCONT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSisu", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"LECTTM\" type=\"STRING\" size=\"22\"/><Column id=\"ABSENT_CNT\" type=\"STRING\" size=\"22\"/><Column id=\"ATTEND_POINT\" type=\"STRING\" size=\"22\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdMaster","0","77","369","1923",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"89\"/><Column size=\"48\"/><Column size=\"56\"/><Column size=\"48\"/><Column size=\"119\"/><Column size=\"121\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"학과\"/><Cell col=\"1\" text=\"주야\"/><Cell col=\"2\" text=\"학년\"/><Cell col=\"3\" text=\"분반\"/><Cell col=\"4\" text=\"과목명\"/><Cell col=\"5\" text=\"교수명\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" textAlign=\"left\" text=\"bind:DEPT_CD_NM\" editmaxlength=\"256\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:DAYNIGHT_DIVCD_NM\" editmaxlength=\"256\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:COMP_GRADE_CD_NM\" editmaxlength=\"256\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:LECTCLASS\" editmaxlength=\"256\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\" text=\"bind:SUBJECT_CD_NM\" editmaxlength=\"256\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:PROF_CD_NM\" editmaxlength=\"256\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divM","0","0",null,"42","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSearchGwamokCd","791","9","90","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_text("1022139");
            this.divM.addChild(obj.name, obj);

            obj = new Edit("edtSearchGwamokNm","923","9","200","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("5");
            obj.set_enable("true");
            this.divM.addChild(obj.name, obj);

            obj = new Combo("cboSearchGyeYeolHakGwa","510","9","160","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("2");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_innerdataset("dsGyeyeolHakgwa");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divM.addChild(obj.name, obj);

            obj = new Button("btnSearchGwamokMaster","891","9","22","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_PopSrch");
            this.divM.addChild(obj.name, obj);

            obj = new Static("stc_01","666","9","110","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("9");
            obj.set_text("과목명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divM.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00","417","9","80","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("10");
            obj.set_text("계열/학과");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divM.addChild(obj.name, obj);

            obj = new Static("stc_01_00","3","9","80","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("11");
            obj.set_text("학년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divM.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","100","9","100","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("0");
            this.divM.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","204","9","80","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("12");
            obj.set_text("학기");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divM.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgi","296","9","90","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("1");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsHakgi");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","16","0","1620","9",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("13");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","90","-1","10","37",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("14");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","286","0","10","37",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("15");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_02_01","386","-1","56","33",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("16");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00","670","-1","56","40",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("17");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01","782","1","10","37",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("18");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01","200","-1","56","40",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("19");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","20","31","1610","9",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("20");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_00","881","5","10","27",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("21");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_00_00","913","5","10","27",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("22");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00_00","1123","-1","56","40",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("23");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divM.addChild(obj.name, obj);

            obj = new Static("stc_01_01_00","1154","10","80","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("24");
            obj.set_text("사번/성명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01","1241","-27","10","67",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("25");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divM.addChild(obj.name, obj);

            obj = new Edit("edtSearchSawonCd","1251","9","90","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("6");
            obj.set_readonly("true");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_01","1341","3","10","37",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("26");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divM.addChild(obj.name, obj);

            obj = new Button("btnSearchSawon","1351","9","22","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_PopSrch");
            obj.set_text("");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00","1373","3","10","37",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("27");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divM.addChild(obj.name, obj);

            obj = new Edit("edtSearchSawonNm","1383","9","200","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("8");
            obj.set_enable("true");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","500","0","10","37",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("28");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divM.addChild(obj.name, obj);

            obj = new Static("stc_09_00","0","52",null,"22","1485",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("교과목 리스트");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stRowCnt","117","51",null,"24","1400",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("divD","398","77","1242","42",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01","-12","8","88","22",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("6");
            obj.set_text("담당교수");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divD.addChild(obj.name, obj);

            obj = new Edit("edtSearchGyosuCd","86","9","90","22",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("0");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divD.addChild(obj.name, obj);

            obj = new Edit("edtSearchGyosuNm","186","9","120","22",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("1");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divD.addChild(obj.name, obj);

            obj = new Static("stc_01_00","312","9","88","22",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("7");
            obj.set_text("교과목");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divD.addChild(obj.name, obj);

            obj = new Edit("edtSearchGwamokCd","411","9","90","22",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divD.addChild(obj.name, obj);

            obj = new Edit("edtSearchGwamokNm","511","9","190","22",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("3");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divD.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","-1","27","41",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("8");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divD.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","77","2","10","37",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divD.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","16","0","1220","9",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("10");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divD.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01_00","6","31","1230","9",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("11");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divD.addChild(obj.name, obj);

            obj = new Static("Static01_02_01","305","-1","56","33",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("12");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divD.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","176","2","10","37",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divD.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","501","2","10","37",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("14");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divD.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00","701","-1","56","33",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("15");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divD.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","739","9","94","22",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("16");
            obj.set_text("활용구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divD.addChild(obj.name, obj);

            obj = new Combo("cboNCS","845","9","102","22",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("4");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_innerdataset("dsNCS");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divD.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01","401","2","10","37",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("17");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divD.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00","835","2","10","37",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("18");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divD.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00_00","947","-1","56","33",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("19");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divD.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00","985","9","94","22",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("20");
            obj.set_text("성적확정여부");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divD.addChild(obj.name, obj);

            obj = new Edit("edtSearchConfirm","1090","9","90","22",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("5");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divD.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00","1080","2","10","37",null,null,null,null,null,null,this.divD.form);
            obj.set_taborder("21");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divD.addChild(obj.name, obj);

            obj = new Tab("tab","398","246","1242","1754",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_tabindex("0");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Tabpage("allscore",this.tab);
            obj.set_text("전체점수");
            this.tab.addChild(obj.name, obj);

            obj = new Static("stc_09_00","10","11","392","22",null,null,null,null,null,null,this.tab.allscore.form);
            obj.set_taborder("3");
            obj.set_text("전체점수");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.allscore.addChild(obj.name, obj);

            obj = new Static("stRowCnt","98","10","166","24",null,null,null,null,null,null,this.tab.allscore.form);
            obj.set_taborder("4");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.tab.allscore.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_01","436",null,"210","10",null,"0",null,null,null,null,this.tab.allscore.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.allscore.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","481","0","100","35",null,null,null,null,null,null,this.tab.allscore.form);
            obj.set_taborder("6");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.allscore.addChild(obj.name, obj);

            obj = new Button("btnSimhwaPrint",null,"3","191","25","145",null,null,null,null,null,this.tab.allscore.form);
            obj.set_taborder("0");
            obj.set_text("심화교육과정 운영결과서 출력");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_tabstop("true");
            this.tab.allscore.addChild(obj.name, obj);

            obj = new Button("btnReset",null,"3","131","25","10",null,null,null,null,null,this.tab.allscore.form);
            obj.set_taborder("1");
            obj.set_text("향상 대상자 재설정");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_tabstop("true");
            obj.set_enable("false");
            this.tab.allscore.addChild(obj.name, obj);

            obj = new Div("divAll","10","35",null,null,"10","10",null,null,null,null,this.tab.allscore.form);
            obj.set_taborder("2");
            obj.set_text("");
            this.tab.allscore.addChild(obj.name, obj);

            obj = new Tabpage("jikmu1",this.tab);
            obj.set_text("직무능력1차");
            this.tab.addChild(obj.name, obj);

            obj = new Grid("grdJikmu","10","35",null,null,"10","10",null,null,null,null,this.tab.jikmu1.form);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("dsJikmu1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"127\"/><Column size=\"88\"/><Column size=\"180\"/><Column size=\"520\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"99\"/><Column size=\"108\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"checkbox\" text=\"학번\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"하위역량\"/><Cell col=\"3\" text=\"행동지표\"/><Cell col=\"4\" text=\"배점\"/><Cell col=\"5\" text=\"점수\"/><Cell col=\"6\" text=\"산업체 인사점수\"/><Cell col=\"7\" text=\"판정\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:STDID\" editmaxlength=\"256\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:STDID_NM\" editmaxlength=\"256\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:NCS_CD_NM\" editmaxlength=\"256\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:EVALCONT\" editmaxlength=\"256\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:POINT\" editmaxlength=\"256\"/><Cell col=\"5\" edittype=\"expr:CONFIRM_YN != &apos;Y&apos; ? &apos;text&apos; : &apos;none&apos;\" displaytype=\"expr:CONFIRM_YN != &apos;Y&apos; ? &apos;text&apos; : &apos;normal&apos;\" textAlign=\"right\" text=\"bind:SCORE\" editmaxlength=\"22\"/><Cell col=\"6\" edittype=\"expr:EVALITEM_DIVCD == &apos;11&apos; &amp; NCS_USE_DIVCD != &apos;3&apos; &amp; COMP_EVAL_YN == &apos;Y&apos; &amp; CONFIRM_YN != &apos;Y&apos; ? &apos;text&apos; : &apos;none&apos;\" displaytype=\"expr:EVALITEM_DIVCD == &apos;11&apos; &amp; NCS_USE_DIVCD != &apos;3&apos; &amp; COMP_EVAL_YN == &apos;Y&apos; &amp; CONFIRM_YN != &apos;Y&apos; ? &apos;text&apos; : &apos;normal&apos;\" text=\"bind:COMP_SCORE\" textAlign=\"right\"/><Cell col=\"7\" displaytype=\"combocontrol\" edittype=\"expr:CONFIRM_YN != &apos;Y&apos; ? &apos;combo&apos; : &apos;none&apos;\" textAlign=\"right\" text=\"bind:JUDGING\" editmaxlength=\"256\" combodataset=\"dsYNX\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/></Band></Format></Formats>");
            this.tab.jikmu1.addChild(obj.name, obj);

            obj = new Static("stc_09_00","10","11","392","22",null,null,null,null,null,null,this.tab.jikmu1.form);
            obj.set_taborder("2");
            obj.set_text("직무능력1차");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.jikmu1.addChild(obj.name, obj);

            obj = new Static("stRowCnt","118","10","166","24",null,null,null,null,null,null,this.tab.jikmu1.form);
            obj.set_taborder("3");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.tab.jikmu1.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","11","10","277",null,null,null,null,null,null,this.tab.jikmu1.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.jikmu1.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_01","436",null,"210","10",null,"0",null,null,null,null,this.tab.jikmu1.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.jikmu1.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,"11","10","277","0",null,null,null,null,null,this.tab.jikmu1.form);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.jikmu1.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","481","0","100","35",null,null,null,null,null,null,this.tab.jikmu1.form);
            obj.set_taborder("7");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.jikmu1.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","16","28","320","8",null,null,null,null,null,null,this.tab.jikmu1.form);
            obj.set_taborder("8");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.jikmu1.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_00","686","28","540","8",null,null,null,null,null,null,this.tab.jikmu1.form);
            obj.set_taborder("9");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.jikmu1.addChild(obj.name, obj);

            obj = new Button("btnJikmuPrint",null,"3","141","25","10",null,null,null,null,null,this.tab.jikmu1.form);
            obj.set_taborder("0");
            obj.set_text("직무능력평가서 출력");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_tabstop("true");
            this.tab.jikmu1.addChild(obj.name, obj);

            obj = new Tabpage("jikmu2",this.tab);
            obj.set_text("직무능력2차");
            this.tab.addChild(obj.name, obj);

            obj = new Static("stc_09_00","10","11","392","22",null,null,null,null,null,null,this.tab.jikmu2.form);
            obj.set_taborder("2");
            obj.set_text("직무능력2차");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.jikmu2.addChild(obj.name, obj);

            obj = new Static("stRowCnt","118","10","166","24",null,null,null,null,null,null,this.tab.jikmu2.form);
            obj.set_taborder("3");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.tab.jikmu2.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","121","10","67",null,null,null,null,null,null,this.tab.jikmu2.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.jikmu2.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,"121","10","67","0",null,null,null,null,null,this.tab.jikmu2.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.jikmu2.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","481","0","100","35",null,null,null,null,null,null,this.tab.jikmu2.form);
            obj.set_taborder("6");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.jikmu2.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","16","28","320","8",null,null,null,null,null,null,this.tab.jikmu2.form);
            obj.set_taborder("7");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.jikmu2.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_00","686","28","540","8",null,null,null,null,null,null,this.tab.jikmu2.form);
            obj.set_taborder("8");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.jikmu2.addChild(obj.name, obj);

            obj = new Button("btnJikmuPrint",null,"3","141","25","10",null,null,null,null,null,this.tab.jikmu2.form);
            obj.set_taborder("0");
            obj.set_text("직무능력평가서 출력");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_tabstop("true");
            this.tab.jikmu2.addChild(obj.name, obj);

            obj = new Grid("grdJikmu","10","35",null,null,"10","10",null,null,null,null,this.tab.jikmu2.form);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("dsJikmu2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"127\"/><Column size=\"88\"/><Column size=\"180\"/><Column size=\"520\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"99\"/><Column size=\"108\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"checkbox\" text=\"학번\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"하위역량\"/><Cell col=\"3\" text=\"행동지표\"/><Cell col=\"4\" text=\"배점\"/><Cell col=\"5\" text=\"점수\"/><Cell col=\"6\" text=\"산업체 인사점수\"/><Cell col=\"7\" text=\"판정\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:STDID\" editmaxlength=\"256\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:STDID_NM\" editmaxlength=\"256\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:NCS_CD_NM\" editmaxlength=\"256\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:EVALCONT\" editmaxlength=\"256\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:POINT\" editmaxlength=\"256\"/><Cell col=\"5\" edittype=\"expr:CONFIRM_YN != &apos;Y&apos; ? &apos;text&apos; : &apos;none&apos;\" displaytype=\"expr:CONFIRM_YN != &apos;Y&apos; ? &apos;text&apos; : &apos;normal&apos;\" textAlign=\"right\" text=\"bind:SCORE\" editmaxlength=\"22\"/><Cell col=\"6\" edittype=\"expr:EVALITEM_DIVCD == &apos;12&apos; &amp; NCS_USE_DIVCD != &apos;3&apos; &amp; COMP_EVAL_YN == &apos;Y&apos; &amp; CONFIRM_YN != &apos;Y&apos; ? &apos;text&apos; : &apos;none&apos;\" displaytype=\"expr:EVALITEM_DIVCD == &apos;12&apos; &amp; NCS_USE_DIVCD != &apos;3&apos; &amp; COMP_EVAL_YN == &apos;Y&apos; &amp; CONFIRM_YN != &apos;Y&apos; ? &apos;text&apos; : &apos;normal&apos;\" text=\"bind:COMP_SCORE\" textAlign=\"right\"/><Cell col=\"7\" displaytype=\"combocontrol\" edittype=\"expr:CONFIRM_YN != &apos;Y&apos; ? &apos;combo&apos; : &apos;none&apos;\" textAlign=\"right\" text=\"bind:JUDGING\" editmaxlength=\"256\" combodataset=\"dsYNX\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/></Band></Format></Formats>");
            this.tab.jikmu2.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_01_00","436",null,"210","10",null,"0",null,null,null,null,this.tab.jikmu2.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.jikmu2.addChild(obj.name, obj);

            obj = new Tabpage("jikmu3",this.tab);
            obj.set_text("직무능력3차");
            this.tab.addChild(obj.name, obj);

            obj = new Static("stc_09_00","10","11","392","22",null,null,null,null,null,null,this.tab.jikmu3.form);
            obj.set_taborder("2");
            obj.set_text("직무능력3차");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.jikmu3.addChild(obj.name, obj);

            obj = new Static("stRowCnt","118","10","166","24",null,null,null,null,null,null,this.tab.jikmu3.form);
            obj.set_taborder("3");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.tab.jikmu3.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","121","10","67",null,null,null,null,null,null,this.tab.jikmu3.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.jikmu3.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,"121","10","67","0",null,null,null,null,null,this.tab.jikmu3.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.jikmu3.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","481","0","100","35",null,null,null,null,null,null,this.tab.jikmu3.form);
            obj.set_taborder("6");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.jikmu3.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","16","28","320","8",null,null,null,null,null,null,this.tab.jikmu3.form);
            obj.set_taborder("7");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.jikmu3.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_00","686","28","540","8",null,null,null,null,null,null,this.tab.jikmu3.form);
            obj.set_taborder("8");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.jikmu3.addChild(obj.name, obj);

            obj = new Button("btnJikmuPrint",null,"3","141","25","10",null,null,null,null,null,this.tab.jikmu3.form);
            obj.set_taborder("0");
            obj.set_text("직무능력평가서 출력");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_tabstop("true");
            this.tab.jikmu3.addChild(obj.name, obj);

            obj = new Grid("grdJikmu","10","35",null,null,"10","10",null,null,null,null,this.tab.jikmu3.form);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("dsJikmu3");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"127\"/><Column size=\"88\"/><Column size=\"180\"/><Column size=\"520\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"99\"/><Column size=\"108\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"checkbox\" text=\"학번\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"하위역량\"/><Cell col=\"3\" text=\"행동지표\"/><Cell col=\"4\" text=\"배점\"/><Cell col=\"5\" text=\"점수\"/><Cell col=\"6\" text=\"산업체 인사점수\"/><Cell col=\"7\" text=\"판정\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:STDID\" editmaxlength=\"256\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:STDID_NM\" editmaxlength=\"256\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:NCS_CD_NM\" editmaxlength=\"256\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:EVALCONT\" editmaxlength=\"256\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:POINT\" editmaxlength=\"256\"/><Cell col=\"5\" edittype=\"expr:CONFIRM_YN != &apos;Y&apos; ? &apos;text&apos; : &apos;none&apos;\" displaytype=\"expr:CONFIRM_YN != &apos;Y&apos; ? &apos;text&apos; : &apos;normal&apos;\" textAlign=\"right\" text=\"bind:SCORE\" editmaxlength=\"22\"/><Cell col=\"6\" edittype=\"expr:EVALITEM_DIVCD == &apos;13&apos; &amp; NCS_USE_DIVCD != &apos;3&apos; &amp; COMP_EVAL_YN == &apos;Y&apos; &amp; CONFIRM_YN != &apos;Y&apos; ? &apos;text&apos; : &apos;none&apos;\" displaytype=\"expr:EVALITEM_DIVCD == &apos;13&apos; &amp; NCS_USE_DIVCD != &apos;3&apos; &amp; COMP_EVAL_YN == &apos;Y&apos; &amp; CONFIRM_YN != &apos;Y&apos; ? &apos;text&apos; : &apos;normal&apos;\" text=\"bind:COMP_SCORE\" textAlign=\"right\"/><Cell col=\"7\" displaytype=\"combocontrol\" edittype=\"expr:CONFIRM_YN != &apos;Y&apos; ? &apos;combo&apos; : &apos;none&apos;\" textAlign=\"right\" text=\"bind:JUDGING\" editmaxlength=\"256\" combodataset=\"dsYNX\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/></Band></Format></Formats>");
            this.tab.jikmu3.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_01_00","436",null,"210","10",null,"0",null,null,null,null,this.tab.jikmu3.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.jikmu3.addChild(obj.name, obj);

            obj = new Tabpage("jikmu4",this.tab);
            obj.set_text("직무능력4차");
            this.tab.addChild(obj.name, obj);

            obj = new Static("stc_09_00","10","11","392","22",null,null,null,null,null,null,this.tab.jikmu4.form);
            obj.set_taborder("2");
            obj.set_text("직무능력4차");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.jikmu4.addChild(obj.name, obj);

            obj = new Static("stRowCnt","118","10","166","24",null,null,null,null,null,null,this.tab.jikmu4.form);
            obj.set_taborder("3");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.tab.jikmu4.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","121","10","67",null,null,null,null,null,null,this.tab.jikmu4.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.jikmu4.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,"121","10","67","0",null,null,null,null,null,this.tab.jikmu4.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.jikmu4.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","481","0","100","35",null,null,null,null,null,null,this.tab.jikmu4.form);
            obj.set_taborder("6");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.jikmu4.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","16","28","320","8",null,null,null,null,null,null,this.tab.jikmu4.form);
            obj.set_taborder("7");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.jikmu4.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_00","686","28","540","8",null,null,null,null,null,null,this.tab.jikmu4.form);
            obj.set_taborder("8");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.jikmu4.addChild(obj.name, obj);

            obj = new Button("btnJikmuPrint",null,"3","141","25","10",null,null,null,null,null,this.tab.jikmu4.form);
            obj.set_taborder("0");
            obj.set_text("직무능력평가서 출력");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_tabstop("true");
            this.tab.jikmu4.addChild(obj.name, obj);

            obj = new Grid("grdJikmu","10","35",null,null,"10","10",null,null,null,null,this.tab.jikmu4.form);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("dsJikmu4");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"127\"/><Column size=\"88\"/><Column size=\"180\"/><Column size=\"520\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"99\"/><Column size=\"108\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"checkbox\" text=\"학번\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"하위역량\"/><Cell col=\"3\" text=\"행동지표\"/><Cell col=\"4\" text=\"배점\"/><Cell col=\"5\" text=\"점수\"/><Cell col=\"6\" text=\"산업체 인사점수\"/><Cell col=\"7\" text=\"판정\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:STDID\" editmaxlength=\"256\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:STDID_NM\" editmaxlength=\"256\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:NCS_CD_NM\" editmaxlength=\"256\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:EVALCONT\" editmaxlength=\"256\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:POINT\" editmaxlength=\"256\"/><Cell col=\"5\" edittype=\"expr:CONFIRM_YN != &apos;Y&apos; ? &apos;text&apos; : &apos;none&apos;\" displaytype=\"expr:CONFIRM_YN != &apos;Y&apos; ? &apos;text&apos; : &apos;normal&apos;\" textAlign=\"right\" text=\"bind:SCORE\" editmaxlength=\"22\"/><Cell col=\"6\" edittype=\"expr:EVALITEM_DIVCD == &apos;14&apos; &amp; NCS_USE_DIVCD != &apos;3&apos; &amp; COMP_EVAL_YN == &apos;Y&apos; &amp; CONFIRM_YN != &apos;Y&apos; ? &apos;text&apos; : &apos;none&apos;\" displaytype=\"expr:EVALITEM_DIVCD == &apos;14&apos; &amp; NCS_USE_DIVCD != &apos;3&apos; &amp; COMP_EVAL_YN == &apos;Y&apos; &amp; CONFIRM_YN != &apos;Y&apos; ? &apos;text&apos; : &apos;normal&apos;\" text=\"bind:COMP_SCORE\" textAlign=\"right\"/><Cell col=\"7\" displaytype=\"combocontrol\" edittype=\"expr:CONFIRM_YN != &apos;Y&apos; ? &apos;combo&apos; : &apos;none&apos;\" textAlign=\"right\" text=\"bind:JUDGING\" editmaxlength=\"256\" combodataset=\"dsYNX\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/></Band></Format></Formats>");
            this.tab.jikmu4.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_01_00","436",null,"210","10",null,"0",null,null,null,null,this.tab.jikmu4.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.jikmu4.addChild(obj.name, obj);

            obj = new Tabpage("jikmu5",this.tab);
            obj.set_text("직무능력5차");
            this.tab.addChild(obj.name, obj);

            obj = new Static("stc_09_00","10","11","392","22",null,null,null,null,null,null,this.tab.jikmu5.form);
            obj.set_taborder("2");
            obj.set_text("직무능력5차");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.jikmu5.addChild(obj.name, obj);

            obj = new Static("stRowCnt","118","10","166","24",null,null,null,null,null,null,this.tab.jikmu5.form);
            obj.set_taborder("3");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.tab.jikmu5.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","121","10","67",null,null,null,null,null,null,this.tab.jikmu5.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.jikmu5.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,"121","10","67","0",null,null,null,null,null,this.tab.jikmu5.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.jikmu5.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","481","0","100","35",null,null,null,null,null,null,this.tab.jikmu5.form);
            obj.set_taborder("6");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.jikmu5.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","16","28","320","8",null,null,null,null,null,null,this.tab.jikmu5.form);
            obj.set_taborder("7");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.jikmu5.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_00","686","28","540","8",null,null,null,null,null,null,this.tab.jikmu5.form);
            obj.set_taborder("8");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.jikmu5.addChild(obj.name, obj);

            obj = new Button("btnJikmuPrint",null,"3","141","25","10",null,null,null,null,null,this.tab.jikmu5.form);
            obj.set_taborder("0");
            obj.set_text("직무능력평가서 출력");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_tabstop("true");
            this.tab.jikmu5.addChild(obj.name, obj);

            obj = new Grid("grdJikmu","10","35",null,null,"10","10",null,null,null,null,this.tab.jikmu5.form);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("dsJikmu5");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"127\"/><Column size=\"88\"/><Column size=\"180\"/><Column size=\"520\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"99\"/><Column size=\"108\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"checkbox\" text=\"학번\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"하위역량\"/><Cell col=\"3\" text=\"행동지표\"/><Cell col=\"4\" text=\"배점\"/><Cell col=\"5\" text=\"점수\"/><Cell col=\"6\" text=\"산업체 인사점수\"/><Cell col=\"7\" text=\"판정\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:STDID\" editmaxlength=\"256\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:STDID_NM\" editmaxlength=\"256\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:NCS_CD_NM\" editmaxlength=\"256\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:EVALCONT\" editmaxlength=\"256\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:POINT\" editmaxlength=\"256\"/><Cell col=\"5\" edittype=\"expr:CONFIRM_YN != &apos;Y&apos; ? &apos;text&apos; : &apos;none&apos;\" displaytype=\"expr:CONFIRM_YN != &apos;Y&apos; ? &apos;text&apos; : &apos;normal&apos;\" textAlign=\"right\" text=\"bind:SCORE\" editmaxlength=\"22\"/><Cell col=\"6\" edittype=\"expr:EVALITEM_DIVCD == &apos;15&apos; &amp; NCS_USE_DIVCD != &apos;3&apos; &amp; COMP_EVAL_YN == &apos;Y&apos; &amp; CONFIRM_YN != &apos;Y&apos; ? &apos;text&apos; : &apos;none&apos;\" displaytype=\"expr:EVALITEM_DIVCD == &apos;15&apos; &amp; NCS_USE_DIVCD != &apos;3&apos; &amp; COMP_EVAL_YN == &apos;Y&apos; &amp; CONFIRM_YN != &apos;Y&apos; ? &apos;text&apos; : &apos;normal&apos;\" text=\"bind:COMP_SCORE\" textAlign=\"right\"/><Cell col=\"7\" displaytype=\"combocontrol\" edittype=\"expr:CONFIRM_YN != &apos;Y&apos; ? &apos;combo&apos; : &apos;none&apos;\" textAlign=\"right\" text=\"bind:JUDGING\" editmaxlength=\"256\" combodataset=\"dsYNX\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/></Band></Format></Formats>");
            this.tab.jikmu5.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_01","436",null,"210","10",null,"0",null,null,null,null,this.tab.jikmu5.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.jikmu5.addChild(obj.name, obj);

            obj = new Tabpage("jikmu6",this.tab);
            obj.set_text("직무능력6차");
            this.tab.addChild(obj.name, obj);

            obj = new Static("stc_09_00","10","11","392","22",null,null,null,null,null,null,this.tab.jikmu6.form);
            obj.set_taborder("2");
            obj.set_text("직무능력6차");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.jikmu6.addChild(obj.name, obj);

            obj = new Static("stRowCnt","118","10","166","24",null,null,null,null,null,null,this.tab.jikmu6.form);
            obj.set_taborder("3");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.tab.jikmu6.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","121","10","67",null,null,null,null,null,null,this.tab.jikmu6.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.jikmu6.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,"121","10","67","0",null,null,null,null,null,this.tab.jikmu6.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.jikmu6.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","481","0","100","35",null,null,null,null,null,null,this.tab.jikmu6.form);
            obj.set_taborder("6");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.jikmu6.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","16","28","320","8",null,null,null,null,null,null,this.tab.jikmu6.form);
            obj.set_taborder("7");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.jikmu6.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_00","686","28","540","8",null,null,null,null,null,null,this.tab.jikmu6.form);
            obj.set_taborder("8");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.jikmu6.addChild(obj.name, obj);

            obj = new Button("btnJikmuPrint",null,"3","141","25","10",null,null,null,null,null,this.tab.jikmu6.form);
            obj.set_taborder("0");
            obj.set_text("직무능력평가서 출력");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_tabstop("true");
            this.tab.jikmu6.addChild(obj.name, obj);

            obj = new Grid("grdJikmu","10","35",null,null,"10","10",null,null,null,null,this.tab.jikmu6.form);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("dsJikmu6");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"127\"/><Column size=\"88\"/><Column size=\"180\"/><Column size=\"520\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"99\"/><Column size=\"108\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"checkbox\" text=\"학번\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"하위역량\"/><Cell col=\"3\" text=\"행동지표\"/><Cell col=\"4\" text=\"배점\"/><Cell col=\"5\" text=\"점수\"/><Cell col=\"6\" text=\"산업체 인사점수\"/><Cell col=\"7\" text=\"판정\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:STDID\" editmaxlength=\"256\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:STDID_NM\" editmaxlength=\"256\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:NCS_CD_NM\" editmaxlength=\"256\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:EVALCONT\" editmaxlength=\"256\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:POINT\" editmaxlength=\"256\"/><Cell col=\"5\" edittype=\"expr:CONFIRM_YN != &apos;Y&apos; ? &apos;text&apos; : &apos;none&apos;\" displaytype=\"expr:CONFIRM_YN != &apos;Y&apos; ? &apos;text&apos; : &apos;normal&apos;\" textAlign=\"right\" text=\"bind:SCORE\" editmaxlength=\"22\"/><Cell col=\"6\" edittype=\"expr:EVALITEM_DIVCD == &apos;16&apos; &amp; NCS_USE_DIVCD != &apos;3&apos; &amp; COMP_EVAL_YN == &apos;Y&apos; &amp; CONFIRM_YN != &apos;Y&apos; ? &apos;text&apos; : &apos;none&apos;\" displaytype=\"expr:EVALITEM_DIVCD == &apos;16&apos; &amp; NCS_USE_DIVCD != &apos;3&apos; &amp; COMP_EVAL_YN == &apos;Y&apos; &amp; CONFIRM_YN != &apos;Y&apos; ? &apos;text&apos; : &apos;normal&apos;\" text=\"bind:COMP_SCORE\" textAlign=\"right\"/><Cell col=\"7\" displaytype=\"combocontrol\" edittype=\"expr:CONFIRM_YN != &apos;Y&apos; ? &apos;combo&apos; : &apos;none&apos;\" textAlign=\"right\" text=\"bind:JUDGING\" editmaxlength=\"256\" combodataset=\"dsYNX\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/></Band></Format></Formats>");
            this.tab.jikmu6.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_01_00","436",null,"210","10",null,"0",null,null,null,null,this.tab.jikmu6.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.jikmu6.addChild(obj.name, obj);

            obj = new Tabpage("jikmu7",this.tab);
            obj.set_text("직무능력7차");
            this.tab.addChild(obj.name, obj);

            obj = new Static("stc_09_00","10","11","392","22",null,null,null,null,null,null,this.tab.jikmu7.form);
            obj.set_taborder("2");
            obj.set_text("직무능력7차");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.jikmu7.addChild(obj.name, obj);

            obj = new Static("stRowCnt","118","10","166","24",null,null,null,null,null,null,this.tab.jikmu7.form);
            obj.set_taborder("3");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.tab.jikmu7.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","121","10","67",null,null,null,null,null,null,this.tab.jikmu7.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.jikmu7.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,"121","10","67","0",null,null,null,null,null,this.tab.jikmu7.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.jikmu7.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","481","0","100","35",null,null,null,null,null,null,this.tab.jikmu7.form);
            obj.set_taborder("6");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.jikmu7.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","16","28","320","8",null,null,null,null,null,null,this.tab.jikmu7.form);
            obj.set_taborder("7");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.jikmu7.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_00","686","28","540","8",null,null,null,null,null,null,this.tab.jikmu7.form);
            obj.set_taborder("8");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.jikmu7.addChild(obj.name, obj);

            obj = new Button("btnJikmuPrint",null,"3","141","25","10",null,null,null,null,null,this.tab.jikmu7.form);
            obj.set_taborder("0");
            obj.set_text("직무능력평가서 출력");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_tabstop("true");
            this.tab.jikmu7.addChild(obj.name, obj);

            obj = new Grid("grdJikmu","10","35",null,null,"10","10",null,null,null,null,this.tab.jikmu7.form);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("dsJikmu7");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"127\"/><Column size=\"88\"/><Column size=\"180\"/><Column size=\"520\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"99\"/><Column size=\"108\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"checkbox\" text=\"학번\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"하위역량\"/><Cell col=\"3\" text=\"행동지표\"/><Cell col=\"4\" text=\"배점\"/><Cell col=\"5\" text=\"점수\"/><Cell col=\"6\" text=\"산업체 인사점수\"/><Cell col=\"7\" text=\"판정\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:STDID\" editmaxlength=\"256\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:STDID_NM\" editmaxlength=\"256\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:NCS_CD_NM\" editmaxlength=\"256\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:EVALCONT\" editmaxlength=\"256\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:POINT\" editmaxlength=\"256\"/><Cell col=\"5\" edittype=\"expr:CONFIRM_YN != &apos;Y&apos; ? &apos;text&apos; : &apos;none&apos;\" displaytype=\"expr:CONFIRM_YN != &apos;Y&apos; ? &apos;text&apos; : &apos;normal&apos;\" textAlign=\"right\" text=\"bind:SCORE\" editmaxlength=\"22\"/><Cell col=\"6\" edittype=\"expr:EVALITEM_DIVCD == &apos;17&apos; &amp; NCS_USE_DIVCD != &apos;3&apos; &amp; COMP_EVAL_YN == &apos;Y&apos; &amp; CONFIRM_YN != &apos;Y&apos; ? &apos;text&apos; : &apos;none&apos;\" displaytype=\"expr:EVALITEM_DIVCD == &apos;17&apos; &amp; NCS_USE_DIVCD != &apos;3&apos; &amp; COMP_EVAL_YN == &apos;Y&apos; &amp; CONFIRM_YN != &apos;Y&apos; ? &apos;text&apos; : &apos;normal&apos;\" text=\"bind:COMP_SCORE\" textAlign=\"right\"/><Cell col=\"7\" displaytype=\"combocontrol\" edittype=\"expr:CONFIRM_YN != &apos;Y&apos; ? &apos;combo&apos; : &apos;none&apos;\" textAlign=\"right\" text=\"bind:JUDGING\" editmaxlength=\"256\" combodataset=\"dsYNX\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/></Band></Format></Formats>");
            this.tab.jikmu7.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_01_00","436",null,"210","10",null,"0",null,null,null,null,this.tab.jikmu7.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.jikmu7.addChild(obj.name, obj);

            obj = new Tabpage("jikmu8",this.tab);
            obj.set_text("직무능력8차");
            this.tab.addChild(obj.name, obj);

            obj = new Static("stc_09_00","10","11","392","22",null,null,null,null,null,null,this.tab.jikmu8.form);
            obj.set_taborder("2");
            obj.set_text("직무능력8차");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.jikmu8.addChild(obj.name, obj);

            obj = new Static("stRowCnt","118","10","166","24",null,null,null,null,null,null,this.tab.jikmu8.form);
            obj.set_taborder("3");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.tab.jikmu8.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","121","10","67",null,null,null,null,null,null,this.tab.jikmu8.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.jikmu8.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,"121","10","67","0",null,null,null,null,null,this.tab.jikmu8.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.jikmu8.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","481","0","100","35",null,null,null,null,null,null,this.tab.jikmu8.form);
            obj.set_taborder("6");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.jikmu8.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","16","28","320","8",null,null,null,null,null,null,this.tab.jikmu8.form);
            obj.set_taborder("7");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.jikmu8.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_00","686","28","540","8",null,null,null,null,null,null,this.tab.jikmu8.form);
            obj.set_taborder("8");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.jikmu8.addChild(obj.name, obj);

            obj = new Button("btnJikmuPrint",null,"3","141","25","10",null,null,null,null,null,this.tab.jikmu8.form);
            obj.set_taborder("0");
            obj.set_text("직무능력평가서 출력");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_tabstop("true");
            this.tab.jikmu8.addChild(obj.name, obj);

            obj = new Grid("grdJikmu","10","35",null,null,"10","10",null,null,null,null,this.tab.jikmu8.form);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("dsJikmu8");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"127\"/><Column size=\"88\"/><Column size=\"180\"/><Column size=\"520\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"99\"/><Column size=\"108\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"checkbox\" text=\"학번\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"하위역량\"/><Cell col=\"3\" text=\"행동지표\"/><Cell col=\"4\" text=\"배점\"/><Cell col=\"5\" text=\"점수\"/><Cell col=\"6\" text=\"산업체 인사점수\"/><Cell col=\"7\" text=\"판정\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:STDID\" editmaxlength=\"256\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:STDID_NM\" editmaxlength=\"256\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:NCS_CD_NM\" editmaxlength=\"256\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:EVALCONT\" editmaxlength=\"256\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:POINT\" editmaxlength=\"256\"/><Cell col=\"5\" edittype=\"expr:CONFIRM_YN != &apos;Y&apos; ? &apos;text&apos; : &apos;none&apos;\" displaytype=\"expr:CONFIRM_YN != &apos;Y&apos; ? &apos;text&apos; : &apos;normal&apos;\" textAlign=\"right\" text=\"bind:SCORE\" editmaxlength=\"22\"/><Cell col=\"6\" edittype=\"expr:EVALITEM_DIVCD == &apos;18&apos; &amp; NCS_USE_DIVCD != &apos;3&apos; &amp; COMP_EVAL_YN == &apos;Y&apos; &amp; CONFIRM_YN != &apos;Y&apos; ? &apos;text&apos; : &apos;none&apos;\" displaytype=\"expr:EVALITEM_DIVCD == &apos;18&apos; &amp; NCS_USE_DIVCD != &apos;3&apos; &amp; COMP_EVAL_YN == &apos;Y&apos; &amp; CONFIRM_YN != &apos;Y&apos; ? &apos;text&apos; : &apos;normal&apos;\" text=\"bind:COMP_SCORE\" textAlign=\"right\"/><Cell col=\"7\" displaytype=\"combocontrol\" edittype=\"expr:CONFIRM_YN != &apos;Y&apos; ? &apos;combo&apos; : &apos;none&apos;\" textAlign=\"right\" text=\"bind:JUDGING\" editmaxlength=\"256\" combodataset=\"dsYNX\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/></Band></Format></Formats>");
            this.tab.jikmu8.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_01_00","436",null,"210","10",null,"0",null,null,null,null,this.tab.jikmu8.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.jikmu8.addChild(obj.name, obj);

            obj = new Tabpage("jikmu9",this.tab);
            obj.set_text("직무능력9차");
            this.tab.addChild(obj.name, obj);

            obj = new Static("stc_09_00","10","11","392","22",null,null,null,null,null,null,this.tab.jikmu9.form);
            obj.set_taborder("2");
            obj.set_text("직무능력9차");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.jikmu9.addChild(obj.name, obj);

            obj = new Static("stRowCnt","118","10","166","24",null,null,null,null,null,null,this.tab.jikmu9.form);
            obj.set_taborder("3");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.tab.jikmu9.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","121","10","67",null,null,null,null,null,null,this.tab.jikmu9.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.jikmu9.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,"121","10","67","0",null,null,null,null,null,this.tab.jikmu9.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.jikmu9.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","481","0","100","35",null,null,null,null,null,null,this.tab.jikmu9.form);
            obj.set_taborder("6");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.jikmu9.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","16","28","320","8",null,null,null,null,null,null,this.tab.jikmu9.form);
            obj.set_taborder("7");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.jikmu9.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_00","686","28","540","8",null,null,null,null,null,null,this.tab.jikmu9.form);
            obj.set_taborder("8");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.jikmu9.addChild(obj.name, obj);

            obj = new Button("btnJikmuPrint",null,"3","141","25","10",null,null,null,null,null,this.tab.jikmu9.form);
            obj.set_taborder("0");
            obj.set_text("직무능력평가서 출력");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_tabstop("true");
            this.tab.jikmu9.addChild(obj.name, obj);

            obj = new Grid("grdJikmu","10","35",null,null,"10","10",null,null,null,null,this.tab.jikmu9.form);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("dsJikmu9");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"127\"/><Column size=\"88\"/><Column size=\"180\"/><Column size=\"520\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"99\"/><Column size=\"108\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"checkbox\" text=\"학번\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"하위역량\"/><Cell col=\"3\" text=\"행동지표\"/><Cell col=\"4\" text=\"배점\"/><Cell col=\"5\" text=\"점수\"/><Cell col=\"6\" text=\"산업체 인사점수\"/><Cell col=\"7\" text=\"판정\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:STDID\" editmaxlength=\"256\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:STDID_NM\" editmaxlength=\"256\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:NCS_CD_NM\" editmaxlength=\"256\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:EVALCONT\" editmaxlength=\"256\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:POINT\" editmaxlength=\"256\"/><Cell col=\"5\" edittype=\"expr:CONFIRM_YN != &apos;Y&apos; ? &apos;text&apos; : &apos;none&apos;\" displaytype=\"expr:CONFIRM_YN != &apos;Y&apos; ? &apos;text&apos; : &apos;normal&apos;\" textAlign=\"right\" text=\"bind:SCORE\" editmaxlength=\"22\"/><Cell col=\"6\" edittype=\"expr:EVALITEM_DIVCD == &apos;19&apos; &amp; NCS_USE_DIVCD != &apos;3&apos; &amp; COMP_EVAL_YN == &apos;Y&apos; &amp; CONFIRM_YN != &apos;Y&apos; ? &apos;text&apos; : &apos;none&apos;\" displaytype=\"expr:EVALITEM_DIVCD == &apos;19&apos; &amp; NCS_USE_DIVCD != &apos;3&apos; &amp; COMP_EVAL_YN == &apos;Y&apos; &amp; CONFIRM_YN != &apos;Y&apos; ? &apos;text&apos; : &apos;normal&apos;\" text=\"bind:COMP_SCORE\" textAlign=\"right\"/><Cell col=\"7\" displaytype=\"combocontrol\" edittype=\"expr:CONFIRM_YN != &apos;Y&apos; ? &apos;combo&apos; : &apos;none&apos;\" textAlign=\"right\" text=\"bind:JUDGING\" editmaxlength=\"256\" combodataset=\"dsYNX\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/></Band></Format></Formats>");
            this.tab.jikmu9.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_01_00","436",null,"210","10",null,"0",null,null,null,null,this.tab.jikmu9.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.jikmu9.addChild(obj.name, obj);

            obj = new Tabpage("hyangsang",this.tab);
            obj.set_text("향상교육과정");
            this.tab.addChild(obj.name, obj);

            obj = new Static("stc_09_00","10","11","392","22",null,null,null,null,null,null,this.tab.hyangsang.form);
            obj.set_taborder("2");
            obj.set_text("향상교육과정");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.hyangsang.addChild(obj.name, obj);

            obj = new Static("stRowCnt","118","10","166","24",null,null,null,null,null,null,this.tab.hyangsang.form);
            obj.set_taborder("3");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.tab.hyangsang.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","121","10","67",null,null,null,null,null,null,this.tab.hyangsang.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.hyangsang.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,"121","10","67","0",null,null,null,null,null,this.tab.hyangsang.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.hyangsang.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","481","0","100","35",null,null,null,null,null,null,this.tab.hyangsang.form);
            obj.set_taborder("6");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.hyangsang.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","16","28","320","8",null,null,null,null,null,null,this.tab.hyangsang.form);
            obj.set_taborder("7");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.hyangsang.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_00","686","28","540","8",null,null,null,null,null,null,this.tab.hyangsang.form);
            obj.set_taborder("8");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.hyangsang.addChild(obj.name, obj);

            obj = new Button("btnHyangsangPrint",null,"3","191","25","10",null,null,null,null,null,this.tab.hyangsang.form);
            obj.set_taborder("0");
            obj.set_text("향상교육과정 운영결과서 출력");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_tabstop("true");
            this.tab.hyangsang.addChild(obj.name, obj);

            obj = new Grid("grdJikmu","10","35",null,null,"10","10",null,null,null,null,this.tab.hyangsang.form);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("dsHyangsang");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"127\"/><Column size=\"88\"/><Column size=\"885\"/><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"checkbox\" text=\"학번\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"분류명\"/><Cell col=\"3\" text=\"배점\"/><Cell col=\"4\" text=\"점수\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:STDID\" editmaxlength=\"256\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:STDID_NM\" editmaxlength=\"256\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:NCS_CD_NM\" editmaxlength=\"256\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:POINT\" editmaxlength=\"256\"/><Cell col=\"4\" edittype=\"expr:CONFIRM_YN == &apos;Y&apos; ? &apos;none&apos; : &apos;text&apos;\" displaytype=\"expr:CONFIRM_YN == &apos;Y&apos; ? &apos;normal&apos; : &apos;text&apos;\" textAlign=\"right\" text=\"bind:SCORE\" editmaxlength=\"22\"/></Band></Format></Formats>");
            this.tab.hyangsang.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_01_00","436",null,"210","10",null,"0",null,null,null,null,this.tab.hyangsang.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.hyangsang.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","1","1","27","37",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Grid("grdDetail","398","119","1242","92",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("dsDetail");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"102\"/><Column size=\"94\"/><Column size=\"94\"/><Column size=\"135\"/><Column size=\"58\"/><Column size=\"62\"/><Column size=\"83\"/><Column size=\"68\"/><Column size=\"68\"/><Column size=\"68\"/><Column size=\"68\"/><Column size=\"56\"/><Column size=\"86\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"단위(%)\"/><Cell col=\"1\" colspan=\"3\" text=\"A등급 이상(교양40%, 전공30% 이하)\"/><Cell col=\"4\" rowspan=\"2\" text=\"B+\"/><Cell col=\"5\" rowspan=\"2\" text=\"B0\"/><Cell col=\"6\" rowspan=\"2\" text=\"소계\"/><Cell col=\"7\" colspan=\"6\" text=\"C등급 이하\"/><Cell row=\"1\" text=\"총인원\"/><Cell row=\"1\" col=\"1\" text=\"A+\"/><Cell row=\"1\" col=\"2\" text=\"A0\"/><Cell row=\"1\" col=\"3\" text=\"소계\"/><Cell row=\"1\" col=\"7\" text=\"C+\"/><Cell row=\"1\" col=\"8\" text=\"C0\"/><Cell row=\"1\" col=\"9\" text=\"D+\"/><Cell row=\"1\" col=\"10\" text=\"D0\"/><Cell row=\"1\" col=\"11\" text=\"F\"/><Cell row=\"1\" col=\"12\" text=\"소계\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:TOTAL_CNT\" editmaxlength=\"256\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:GRADE_1\" editmaxlength=\"256\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:GRADE_2\" editmaxlength=\"256\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"expr:GRADE_1 + GRADE_2\" editmaxlength=\"256\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:GRADE_3\" editmaxlength=\"256\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:GRADE_4\" editmaxlength=\"256\"/><Cell col=\"6\" text=\"expr:GRADE_3 + GRADE_4\" textAlign=\"center\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"7\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:GRADE_5\" editmaxlength=\"256\"/><Cell col=\"8\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:GRADE_6\" editmaxlength=\"256\"/><Cell col=\"9\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:GRADE_7\" editmaxlength=\"256\"/><Cell col=\"10\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:GRADE_8\" editmaxlength=\"256\"/><Cell col=\"11\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:GRADE_9\" editmaxlength=\"256\"/><Cell col=\"12\" text=\"expr:GRADE_5 + GRADE_6 + GRADE_7 + GRADE_8 + GRADE_9\" textAlign=\"center\" displaytype=\"normal\" edittype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00_00","397","221","330","22",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("성적입력");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","69","1620","8",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","400","238","320","8",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01","369","159","30","100",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("30");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","730","42","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("↑\r\n\r35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","850","211","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("13");
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
            obj = new Layout("default","",1640,2000,this,function(p){});
            obj.set_description("성적입력");
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

            obj = new BindItem("item3","divM.form.cboSearchGyeYeolHakGwa","value","ds_input","DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divM.form.spnSearchYYYY","value","ds_input","YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divM.form.cboSearchHakgi","value","ds_input","SEMESTER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","tab","enable","dsBindableTab","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divD.form.edtSearchGyosuCd","value","dsMaster","PROF_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divD.form.edtSearchGyosuNm","value","dsMaster","PROF_CD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divD.form.edtSearchGwamokCd","value","dsMaster","SUBJECT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divD.form.edtSearchGwamokNm","value","dsMaster","SUBJECT_CD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","grdDetail","enable","dsBindableGrid","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divD.form.cboNCS","value","dsMaster","NCS_USE_DIVCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divD.form.edtSearchConfirm","value","dsMaster","CONFIRM_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divM.form.edtSearchSawonCd","value","ds_input","PROF_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divM.form.edtSearchSawonNm","value","ds_input","PROF_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
            this._addPreloadList("data","","dsAuth");
            this._addPreloadList("data","","ds_authInput");
            this._addPreloadList("data","","dsDetail");
            this._addPreloadList("data","","dsJikmuAuth");
            this._addPreloadList("data","","dsJikmu1");
            this._addPreloadList("data","","dsHyangsang");
            this._addPreloadList("data","","dsHyangsangAuth");
            this._addPreloadList("data","","dsJikmu2");
            this._addPreloadList("data","","dsJikmu3");
            this._addPreloadList("data","","dsJikmu4");
            this._addPreloadList("data","","dsJikmu5");
            this._addPreloadList("data","","dsJikmu6");
            this._addPreloadList("data","","dsJikmu7");
            this._addPreloadList("data","","dsJikmu8");
            this._addPreloadList("data","","dsJikmu9");
            this._addPreloadList("data","","dsSisu");
        };
        
        // User Script
        this.registerScript("UC01_2122201_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UC01_2122201_M.xfdl(성적입력)
        * 작 성         일 명: jiback
        * 작 성         일 자: 2021/02/22
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
            var strDs    = "dsHakgi|dsNCS|dsYN|dsYNX";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00022|00506|00542|00542";                         			// 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "X|X|S|X";                                   											// 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
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


        	// 성적입력 작성/수정 권한 조회
        	var strSvc      = "authInit";
            var strUrl      = "/prj/UC/UC01/authRetrieve_2122201_M.do";
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

        this.fn_PostformInit = function()
        {
        	// 탭버튼 숨기기
        	this.tab.jikmu1.set_tabbuttonwidth(-1);
        	this.tab.jikmu2.set_tabbuttonwidth(-1);
        	this.tab.jikmu3.set_tabbuttonwidth(-1);
        	this.tab.jikmu4.set_tabbuttonwidth(-1);
        	this.tab.jikmu5.set_tabbuttonwidth(-1);
        	this.tab.jikmu6.set_tabbuttonwidth(-1);
        	this.tab.jikmu7.set_tabbuttonwidth(-1);
        	this.tab.jikmu8.set_tabbuttonwidth(-1);
        	this.tab.jikmu9.set_tabbuttonwidth(-1);
        	this.tab.hyangsang.set_tabbuttonwidth(-1);
        };

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
        };

        this.fn_PostAuthInit = function()
        {
         	if(this.dsAuth.getColumn(0, "GRADE_POSS_YN") == "N")
         	{
        		this.parent.parent.div_Title.form.fn_saveEnable(false);
        		this.parent.parent.div_Title.form.fn_tmp1Enable(false);
         	}
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
        			case "gyeyeolHakgwaInit":
        					this.fn_PostGyeyeolHakgwaInit();
        			    break;
        			case "authInit":
        					this.fn_PostAuthInit();
        			    break;
                    case "Ret":
                            this.fn_PostRet();
                        break;
        			case "DRet":
                            this.fn_PostDRet();
                        break;
        			case "SisuRet":
                            this.fn_PostSisuRet();
                        break;
        			case "HyangsangAuthRet":
                            this.fn_PostHyangsangAuthRet();
                        break;
        			case "JikmuAuthRet":
                            this.fn_PostJikmuAuthRet();
                        break;
        			case "AllRet":
                            this.fn_PostAllRet();
                        break;
        			case "JikmuRet":
                            this.fn_PostJikmuRet();
                        break;
        			case "HyangsangRet":
                            this.fn_PostHyangsangRet();
                        break;
                    case "Save":
                            this.fn_PostSave();
                        break;
        			case "Confirm":
                            this.fn_PostConfirm();
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
        		case "tmp1" :        // 성적확정
                        this.fn_Confirm();
                    break;
        		case "tmp2" :        // 성적현황 출력
                        this.fn_SeongjeokPrint();
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
        	// 탭버튼 숨기기
        	this.tab.jikmu1.set_tabbuttonwidth(-1);
        	this.tab.jikmu2.set_tabbuttonwidth(-1);
        	this.tab.jikmu3.set_tabbuttonwidth(-1);
        	this.tab.jikmu4.set_tabbuttonwidth(-1);
        	this.tab.jikmu5.set_tabbuttonwidth(-1);
        	this.tab.jikmu6.set_tabbuttonwidth(-1);
        	this.tab.jikmu7.set_tabbuttonwidth(-1);
        	this.tab.jikmu8.set_tabbuttonwidth(-1);
        	this.tab.jikmu9.set_tabbuttonwidth(-1);
        	this.tab.hyangsang.set_tabbuttonwidth(-1);

        	// 탭, 그리드 비활성화
        	this.dsBindableTab.setColumn(0, "bEnable",	"false");
        	this.dsBindableGrid.setColumn(0, "bEnable",	"false");

        	// 데이터셋 비우기
        	this.dsDetail.clearData();
        	this.dsAll.clearData();
        	this.dsJikmuAuth.clearData();
        	this.dsJikmu1.clearData();
        	this.dsJikmu2.clearData();
        	this.dsJikmu3.clearData();
        	this.dsJikmu4.clearData();
        	this.dsJikmu5.clearData();
        	this.dsJikmu6.clearData();
        	this.dsJikmu7.clearData();
        	this.dsJikmu8.clearData();
        	this.dsJikmu9.clearData();
        	this.dsHyangsang.clearData();
        	this.dsSisu.clearData();

        	// 동적생성된 그리드 삭제
        	this.fn_setObjGridDestroy(this.tab.allscore.form.divAll.form);
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
            var strUrl      = "/prj/UC/UC01/Retrieve_2122201_M.do";
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
        	this.dsMaster.set_rowposition(-1);
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

        	// 성적입력이 확정된 경우 저장버튼과 성적확정 버튼 비활성화
           	if(this.dsMaster.getColumn(this.dsMaster.rowposition, "CONFIRM_YN") == "Y")
           	{
        		// 화면 오픈시 작성 권한이 없을 경우 이미 버튼을 비활성화 해놓았는데
        		// 다시 비활성화를 할 때 에러가 발생하는 것으로 보임
        		// 작성 권한이 있는데 성적입력이 확정된 경우만 버튼을 비활성화 하도록 변경
        	 	if(this.dsAuth.getColumn(0, "GRADE_POSS_YN") != "N")
        		{
        			this.parent.parent.div_Title.form.fn_saveEnable(false);
        			this.parent.parent.div_Title.form.fn_tmp1Enable(false);
        		}
           	}
           	else
           	{
           		this.parent.parent.div_Title.form.fn_saveEnable(true);
         		this.parent.parent.div_Title.form.fn_tmp1Enable(true);
           	}

        	// 데이터셋 비우기
        	this.dsAll.clearData();
        	this.dsJikmuAuth.clearData();
        	this.dsJikmu1.clearData();
        	this.dsJikmu2.clearData();
        	this.dsJikmu3.clearData();
        	this.dsJikmu4.clearData();
        	this.dsJikmu5.clearData();
        	this.dsJikmu6.clearData();
        	this.dsJikmu7.clearData();
        	this.dsJikmu8.clearData();
        	this.dsJikmu9.clearData();
        	this.dsHyangsang.clearData();
        	this.dsSisu.clearData();

        	// 탭버튼 숨기기
        	this.tab.jikmu1.set_tabbuttonwidth(-1);
        	this.tab.jikmu2.set_tabbuttonwidth(-1);
        	this.tab.jikmu3.set_tabbuttonwidth(-1);
        	this.tab.jikmu4.set_tabbuttonwidth(-1);
        	this.tab.jikmu5.set_tabbuttonwidth(-1);
        	this.tab.jikmu6.set_tabbuttonwidth(-1);
        	this.tab.jikmu7.set_tabbuttonwidth(-1);
        	this.tab.jikmu8.set_tabbuttonwidth(-1);
        	this.tab.jikmu9.set_tabbuttonwidth(-1);
        	this.tab.hyangsang.set_tabbuttonwidth(-1);

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
        	this.ds_dInput.setColumn(0,"LECTTM",this.dsMaster.getColumn(this.dsMaster.rowposition,"LECTTM"));

        	// 디테일 조회
        	this.fn_DRet();
        };
        /**********************************************************************
        	05-1-1. 디테일 조회 함수
        ***********************************************************************/
        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_DRet = function()
        {
            var strSvc      = "DRet";
            var strUrl      = "/prj/UC/UC01/detailRetrieve_2122201_M.do";
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

        /**
         * 기능 : 조회 후 실행
         */
        this.fn_PostDRet = function()
        {
        	// 포커스 제거
        	this.dsDetail.set_rowposition(-1);

        	// 출석기준 조회
        	this.fn_SisuRet();
        };

        /**********************************************************************
        	05-1-2. 출석점수 기준 조회 함수
        ***********************************************************************/
        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_SisuRet = function()
        {
            var strSvc      = "SisuRet";
            var strUrl      = "/prj/UC/UC01/sisuRetrieve_2122201_M.do";
            var strInDs     = "ds_dInput=ds_dInput";
            var strOutDs    = "dsSisu=dsSisu";
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
        this.fn_PostSisuRet = function()
        {
        	// 향상교육과정 여부 확인
        	this.fn_HyangsangAuthRet();
        };

        /**********************************************************************
        	05-2-1. 향상교육과정 여부 확인 함수
        ***********************************************************************/
        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_HyangsangAuthRet = function()
        {
            var strSvc      = "HyangsangAuthRet";
            var strUrl      = "/prj/UC/UC01/hyangsangAuthRetrieve_2122201_M.do";
            var strInDs     = "ds_dInput=ds_dInput";
            var strOutDs    = "dsHyangsangAuth=dsHyangsangAuth";
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
        this.fn_PostHyangsangAuthRet = function()
        {
        	// 향상교육과정이 있을경우 탭 오픈
        	if(this.dsHyangsangAuth.rowcount > 0)
        	{
        		this.tab.hyangsang.set_tabbuttonwidth(120);

        		// 성적확정이 되지 않았을 경우에는 향상 대상자 재설정 버튼 오픈
        		if(this.dsMaster.getColumn(this.dsMaster.rowposition, "CONFIRM_YN") == "N")
        		{
        			this.tab.allscore.form.btnReset.set_enable(true);
        		}
        	}

        	// 직무능력 여부 확인
        	this.fn_JikmuAuthRet();
        };

        /**********************************************************************
        	05-2-2. 직무능력 여부 확인 함수
        ***********************************************************************/
        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_JikmuAuthRet = function()
        {
            var strSvc      = "JikmuAuthRet";
            var strUrl      = "/prj/UC/UC01/jikmuAuthRetrieve_2122201_M.do";
            var strInDs     = "ds_dInput=ds_dInput";
            var strOutDs    = "dsJikmuAuth=dsJikmuAuth";
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
        this.fn_PostJikmuAuthRet = function()
        {
        	// 탭 활성화
        	this.dsBindableTab.setColumn(0, "bEnable",	"true");

        	// 전체 탭 조회
        	this.fn_AllRet();
        };

        /**********************************************************************
        	05-3-1. 전체 탭 조회 함수
        ***********************************************************************/
        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_AllRet = function()
        {
            var strSvc      = "AllRet";
            var strUrl      = "/prj/UC/UC01/Retrieve_2122201_T.do";
            var strInDs     = "ds_dInput=ds_dInput";
            var strOutDs    = "dsAll=dsAll";
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
        this.fn_PostAllRet = function()
        {
        	// 전체 그리드 동적 생성
        	this.fn_mkGrid();
        	this.gfn_getRowCount(this.tab.allscore.form.stRowCnt, this.dsAll);
        };

        /**********************************************************************
        	05-3-2. 직무능력 조회 함수
        ***********************************************************************/
        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_JikmuRet = function(evalitemDivcd)
        {
            var strSvc      = "JikmuRet";
            var strUrl      = "/prj/UC/UC01/jikmuRetrieve_2122201_T.do";
            var strInDs     = "ds_dInput=ds_dInput";
            var strOutDs    = "dsJikmu1=dsJikmu1 ";
        		strOutDs   += "dsJikmu2=dsJikmu2 ";
        		strOutDs   += "dsJikmu3=dsJikmu3 ";
        		strOutDs   += "dsJikmu4=dsJikmu4 ";
        		strOutDs   += "dsJikmu5=dsJikmu5 ";
        		strOutDs   += "dsJikmu6=dsJikmu6 ";
        		strOutDs   += "dsJikmu7=dsJikmu7 ";
        		strOutDs   += "dsJikmu8=dsJikmu8 ";
        		strOutDs   += "dsJikmu9=dsJikmu9 ";
            var strArg      = "EVALITEM_DIVCD=" + evalitemDivcd;
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
        this.fn_PostJikmuRet = function()
        {
        	this.gfn_getRowCount(this.tab.jikmu1.form.stRowCnt, this.dsJikmu1);
        	this.gfn_getRowCount(this.tab.jikmu2.form.stRowCnt, this.dsJikmu2);
        	this.gfn_getRowCount(this.tab.jikmu3.form.stRowCnt, this.dsJikmu3);
        	this.gfn_getRowCount(this.tab.jikmu4.form.stRowCnt, this.dsJikmu4);
        	this.gfn_getRowCount(this.tab.jikmu5.form.stRowCnt, this.dsJikmu5);
        	this.gfn_getRowCount(this.tab.jikmu6.form.stRowCnt, this.dsJikmu6);
        	this.gfn_getRowCount(this.tab.jikmu7.form.stRowCnt, this.dsJikmu7);
        	this.gfn_getRowCount(this.tab.jikmu8.form.stRowCnt, this.dsJikmu8);
        	this.gfn_getRowCount(this.tab.jikmu9.form.stRowCnt, this.dsJikmu9);

        	// NCS활용여부, 산업체 인사 여부, 평가항목 구분, 성적 확정 여부를 데이터셋에 넣어줌
        	for(var i=0; i<this.dsJikmuAuth.rowcount; i++)
        	{
        		if(this.dsJikmuAuth.getColumn(i, "EVALITEM_DIVCD") == "11")
        		{
        			for(var j=0; j<this.dsJikmu1.rowcount; j++)
        			{
        				this.dsJikmu1.setColumn(j, "COMP_EVAL_YN", this.dsJikmuAuth.getColumn(i, "COMP_EVAL_YN"));
        				this.dsJikmu1.setColumn(j, "NCS_USE_DIVCD", this.dsMaster.getColumn(this.dsMaster.rowposition, "NCS_USE_DIVCD"));
        				this.dsJikmu1.setColumn(j, "CONFIRM_YN", this.dsMaster.getColumn(this.dsMaster.rowposition, "CONFIRM_YN"));
        				this.dsJikmu1.set_enableevent(false);
        				this.dsJikmu1.set_updatecontrol(false);
        				this.dsJikmu1.setRowType(j, Dataset.ROWTYPE_NORMAL);
        				this.dsJikmu1.set_updatecontrol(true);
        				this.dsJikmu1.set_enableevent(true);
        			}
        		}
        		else if(this.dsJikmuAuth.getColumn(i, "EVALITEM_DIVCD") == "12")
        		{
        			for(var j=0; j<this.dsJikmu2.rowcount; j++)
        			{
        				this.dsJikmu2.setColumn(j, "COMP_EVAL_YN", this.dsJikmuAuth.getColumn(i, "COMP_EVAL_YN"));
        				this.dsJikmu2.setColumn(j, "NCS_USE_DIVCD", this.dsMaster.getColumn(this.dsMaster.rowposition, "NCS_USE_DIVCD"));
        				this.dsJikmu2.setColumn(j, "CONFIRM_YN", this.dsMaster.getColumn(this.dsMaster.rowposition, "CONFIRM_YN"));
        				this.dsJikmu2.set_enableevent(false);
        				this.dsJikmu2.set_updatecontrol(false);
        				this.dsJikmu2.setRowType(j, Dataset.ROWTYPE_NORMAL);
        				this.dsJikmu2.set_updatecontrol(true);
        				this.dsJikmu2.set_enableevent(true);
        			}
        		}
        		else if(this.dsJikmuAuth.getColumn(i, "EVALITEM_DIVCD") == "13")
        		{
        			for(var j=0; j<this.dsJikmu3.rowcount; j++)
        			{
        				this.dsJikmu3.setColumn(j, "COMP_EVAL_YN", this.dsJikmuAuth.getColumn(i, "COMP_EVAL_YN"));
        				this.dsJikmu3.setColumn(j, "NCS_USE_DIVCD", this.dsMaster.getColumn(this.dsMaster.rowposition, "NCS_USE_DIVCD"));
        				this.dsJikmu3.setColumn(j, "CONFIRM_YN", this.dsMaster.getColumn(this.dsMaster.rowposition, "CONFIRM_YN"));
        				this.dsJikmu3.set_enableevent(false);
        				this.dsJikmu3.set_updatecontrol(false);
        				this.dsJikmu3.setRowType(j, Dataset.ROWTYPE_NORMAL);
        				this.dsJikmu3.set_updatecontrol(true);
        				this.dsJikmu3.set_enableevent(true);
        			}
        		}
        		else if(this.dsJikmuAuth.getColumn(i, "EVALITEM_DIVCD") == "14")
        		{
        			for(var j=0; j<this.dsJikmu4.rowcount; j++)
        			{
        				this.dsJikmu4.setColumn(j, "COMP_EVAL_YN", this.dsJikmuAuth.getColumn(i, "COMP_EVAL_YN"));
        				this.dsJikmu4.setColumn(j, "NCS_USE_DIVCD", this.dsMaster.getColumn(this.dsMaster.rowposition, "NCS_USE_DIVCD"));
        				this.dsJikmu4.setColumn(j, "CONFIRM_YN", this.dsMaster.getColumn(this.dsMaster.rowposition, "CONFIRM_YN"));
        				this.dsJikmu4.set_enableevent(false);
        				this.dsJikmu4.set_updatecontrol(false);
        				this.dsJikmu4.setRowType(j, Dataset.ROWTYPE_NORMAL);
        				this.dsJikmu4.set_updatecontrol(true);
        				this.dsJikmu4.set_enableevent(true);
        			}
        		}
        		else if(this.dsJikmuAuth.getColumn(i, "EVALITEM_DIVCD") == "15")
        		{
        			for(var j=0; j<this.dsJikmu5.rowcount; j++)
        			{
        				this.dsJikmu5.setColumn(j, "COMP_EVAL_YN", this.dsJikmuAuth.getColumn(i, "COMP_EVAL_YN"));
        				this.dsJikmu5.setColumn(j, "NCS_USE_DIVCD", this.dsMaster.getColumn(this.dsMaster.rowposition, "NCS_USE_DIVCD"));
        				this.dsJikmu5.setColumn(j, "CONFIRM_YN", this.dsMaster.getColumn(this.dsMaster.rowposition, "CONFIRM_YN"));
        				this.dsJikmu5.set_enableevent(false);
        				this.dsJikmu5.set_updatecontrol(false);
        				this.dsJikmu5.setRowType(j, Dataset.ROWTYPE_NORMAL);
        				this.dsJikmu5.set_updatecontrol(true);
        				this.dsJikmu5.set_enableevent(true);
        			}
        		}
        		else if(this.dsJikmuAuth.getColumn(i, "EVALITEM_DIVCD") == "16")
        		{
        			for(var j=0; j<this.dsJikmu6.rowcount; j++)
        			{
        				this.dsJikmu6.setColumn(j, "COMP_EVAL_YN", this.dsJikmuAuth.getColumn(i, "COMP_EVAL_YN"));
        				this.dsJikmu6.setColumn(j, "NCS_USE_DIVCD", this.dsMaster.getColumn(this.dsMaster.rowposition, "NCS_USE_DIVCD"));
        				this.dsJikmu6.setColumn(j, "CONFIRM_YN", this.dsMaster.getColumn(this.dsMaster.rowposition, "CONFIRM_YN"));
        				this.dsJikmu6.set_enableevent(false);
        				this.dsJikmu6.set_updatecontrol(false);
        				this.dsJikmu6.setRowType(j, Dataset.ROWTYPE_NORMAL);
        				this.dsJikmu6.set_updatecontrol(true);
        				this.dsJikmu6.set_enableevent(true);
        			}
        		}
        		else if(this.dsJikmuAuth.getColumn(i, "EVALITEM_DIVCD") == "17")
        		{
        			for(var j=0; j<this.dsJikmu7.rowcount; j++)
        			{
        				this.dsJikmu7.setColumn(j, "COMP_EVAL_YN", this.dsJikmuAuth.getColumn(i, "COMP_EVAL_YN"));
        				this.dsJikmu7.setColumn(j, "NCS_USE_DIVCD", this.dsMaster.getColumn(this.dsMaster.rowposition, "NCS_USE_DIVCD"));
        				this.dsJikmu7.setColumn(j, "CONFIRM_YN", this.dsMaster.getColumn(this.dsMaster.rowposition, "CONFIRM_YN"));
        				this.dsJikmu7.set_enableevent(false);
        				this.dsJikmu7.set_updatecontrol(false);
        				this.dsJikmu7.setRowType(j, Dataset.ROWTYPE_NORMAL);
        				this.dsJikmu7.set_updatecontrol(true);
        				this.dsJikmu7.set_enableevent(true);
        			}
        		}
        		else if(this.dsJikmuAuth.getColumn(i, "EVALITEM_DIVCD") == "18")
        		{
        			for(var j=0; j<this.dsJikmu8.rowcount; j++)
        			{
        				this.dsJikmu8.setColumn(j, "COMP_EVAL_YN", this.dsJikmuAuth.getColumn(i, "COMP_EVAL_YN"));
        				this.dsJikmu8.setColumn(j, "NCS_USE_DIVCD", this.dsMaster.getColumn(this.dsMaster.rowposition, "NCS_USE_DIVCD"));
        				this.dsJikmu8.setColumn(j, "CONFIRM_YN", this.dsMaster.getColumn(this.dsMaster.rowposition, "CONFIRM_YN"));
        				this.dsJikmu8.set_enableevent(false);
        				this.dsJikmu8.set_updatecontrol(false);
        				this.dsJikmu8.setRowType(j, Dataset.ROWTYPE_NORMAL);
        				this.dsJikmu8.set_updatecontrol(true);
        				this.dsJikmu8.set_enableevent(true);
        			}
        		}
        		else if(this.dsJikmuAuth.getColumn(i, "EVALITEM_DIVCD") == "19")
        		{
        			for(var j=0; j<this.dsJikmu9.rowcount; j++)
        			{
        				this.dsJikmu9.setColumn(j, "COMP_EVAL_YN", this.dsJikmuAuth.getColumn(i, "COMP_EVAL_YN"));
        				this.dsJikmu9.setColumn(j, "NCS_USE_DIVCD", this.dsMaster.getColumn(this.dsMaster.rowposition, "NCS_USE_DIVCD"));
        				this.dsJikmu9.setColumn(j, "CONFIRM_YN", this.dsMaster.getColumn(this.dsMaster.rowposition, "CONFIRM_YN"));
        				this.dsJikmu9.set_enableevent(false);
        				this.dsJikmu9.set_updatecontrol(false);
        				this.dsJikmu9.setRowType(j, Dataset.ROWTYPE_NORMAL);
        				this.dsJikmu9.set_updatecontrol(true);
        				this.dsJikmu9.set_enableevent(true);
        			}
        		}
        	}
        };

        /**********************************************************************
        	05-3-3. 향상/심화 조회 함수
        ***********************************************************************/
        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_HyangsangRet = function(evalitemDivcd)
        {
            var strSvc      = "HyangsangRet";
            var strUrl      = "/prj/UC/UC01/hyangsangRetrieve_2122201_T.do";
            var strInDs     = "ds_dInput=ds_dInput";
            var strOutDs    = "dsHyangsang=dsHyangsang ";
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
        this.fn_PostHyangsangRet = function()
        {
        	this.gfn_getRowCount(this.tab.hyangsang.form.stRowCnt, this.dsHyangsang);

        	for(var i=0; i<this.dsJikmuAuth.rowcount; i++)
        	{
        		if(this.dsJikmuAuth.getColumn(i, "EVALITEM_DIVCD") == "03")
        		{
        			for(var j=0; j<this.dsHyangsang.rowcount; j++)
        			{
        				this.dsHyangsang.setColumn(j, "EVALITEM_DIVCD", this.dsJikmuAuth.getColumn(i, "EVALITEM_DIVCD"));
        				this.dsHyangsang.set_enableevent(false);
        				this.dsHyangsang.set_updatecontrol(false);
        				this.dsHyangsang.setRowType(j, Dataset.ROWTYPE_NORMAL);
        				this.dsHyangsang.set_updatecontrol(true);
        				this.dsHyangsang.set_enableevent(true);
        			}
        		}
        	}
        };

        /**********************************************************************
                06. 향상 대상자 재설정 함수 선언
        ***********************************************************************/
        this.tab_allscore_btnReset_onclick = function(obj,e)
        {
        	this.fn_Reset();
        };

        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreReset = function()
        {
        	var result = this.gfn_confirm( "70점 미만인 경우 향상 대상자로 변경됩니다. 진행하시겠습니까?", "저장","", "question" );
            if(result == 0)
            {
                return false;
            }
            return true;
        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_Reset = function()
        {
            if(!this.fn_PreReset())
            {
                return false;
            }

            var strSvc      = "Reset";
            var strUrl      = "/prj/UC/UC01/Reset_2122201_M.do";
            var strInDs     = "ds_dInput=ds_dInput";
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
        this.fn_PostReset = function()
        {
        	this.fn_Ret();
        };

        /**********************************************************************
                07. 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave = function()
        {
        	if(this.dsAll.rowcount < 0)
        	{
        		this.gfn_alert("교과목을 선택해주세요.","저장정보","","question");
        	}

        	var result = this.gfn_confirm( "저장 하시겠습니까?", "저장","", "question" );
            if(result == 0)
            {
                return false;
            }

        	// 전체 세팅
        	for(var i=this.dsAll.rowcount-1;i>-1;i--)
        	{
        		this.dsAll.setColumn(i,"YYYY",this.dsMaster.getColumn(this.dsMaster.rowposition, "YYYY"));
        		this.dsAll.setColumn(i,"SEMESTER",this.dsMaster.getColumn(this.dsMaster.rowposition, "SEMESTER"));
        		this.dsAll.setColumn(i,"DEPT_CD",this.dsMaster.getColumn(this.dsMaster.rowposition, "DEPT_CD"));
        		this.dsAll.setColumn(i,"MAJOR_CD",this.dsMaster.getColumn(this.dsMaster.rowposition, "MAJOR_CD"));
        		this.dsAll.setColumn(i,"DAYNIGHT_DIVCD",this.dsMaster.getColumn(this.dsMaster.rowposition, "DAYNIGHT_DIVCD"));
        		this.dsAll.setColumn(i,"COMP_GRADE_CD",this.dsMaster.getColumn(this.dsMaster.rowposition, "COMP_GRADE_CD"));
        		this.dsAll.setColumn(i,"SUBJECT_CD",this.dsMaster.getColumn(this.dsMaster.rowposition, "SUBJECT_CD"));
        		this.dsAll.setColumn(i,"LECTCLASS",this.dsMaster.getColumn(this.dsMaster.rowposition, "LECTCLASS"));
        		this.dsAll.setColumn(i,"PROF_CD",this.dsMaster.getColumn(this.dsMaster.rowposition, "PROF_CD"));
        	}

        	// 직무능력1 세팅
        	if(this.dsJikmu1.rowcount > 0)
        	{
        		for(var i=this.dsJikmu1.rowcount-1;i>-1;i--)
        		{
        			this.dsJikmu1.setColumn(i,"YYYY",this.dsMaster.getColumn(this.dsMaster.rowposition, "YYYY"));
        			this.dsJikmu1.setColumn(i,"SEMESTER",this.dsMaster.getColumn(this.dsMaster.rowposition, "SEMESTER"));
        			this.dsJikmu1.setColumn(i,"DEPT_CD",this.dsMaster.getColumn(this.dsMaster.rowposition, "DEPT_CD"));
        			this.dsJikmu1.setColumn(i,"MAJOR_CD",this.dsMaster.getColumn(this.dsMaster.rowposition, "MAJOR_CD"));
        			this.dsJikmu1.setColumn(i,"DAYNIGHT_DIVCD",this.dsMaster.getColumn(this.dsMaster.rowposition, "DAYNIGHT_DIVCD"));
        			this.dsJikmu1.setColumn(i,"COMP_GRADE_CD",this.dsMaster.getColumn(this.dsMaster.rowposition, "COMP_GRADE_CD"));
        			this.dsJikmu1.setColumn(i,"SUBJECT_CD",this.dsMaster.getColumn(this.dsMaster.rowposition, "SUBJECT_CD"));
        			this.dsJikmu1.setColumn(i,"LECTCLASS",this.dsMaster.getColumn(this.dsMaster.rowposition, "LECTCLASS"));
        			this.dsJikmu1.setColumn(i,"PROF_CD",this.dsMaster.getColumn(this.dsMaster.rowposition, "PROF_CD"));
        		}
        	}

        	// 직무능력2 세팅
        	if(this.dsJikmu2.rowcount > 0)
        	{
        	for(var i=this.dsJikmu2.rowcount-1;i>-1;i--)
        		{
        			this.dsJikmu2.setColumn(i,"YYYY",this.dsMaster.getColumn(this.dsMaster.rowposition, "YYYY"));
        			this.dsJikmu2.setColumn(i,"SEMESTER",this.dsMaster.getColumn(this.dsMaster.rowposition, "SEMESTER"));
        			this.dsJikmu2.setColumn(i,"DEPT_CD",this.dsMaster.getColumn(this.dsMaster.rowposition, "DEPT_CD"));
        			this.dsJikmu2.setColumn(i,"MAJOR_CD",this.dsMaster.getColumn(this.dsMaster.rowposition, "MAJOR_CD"));
        			this.dsJikmu2.setColumn(i,"DAYNIGHT_DIVCD",this.dsMaster.getColumn(this.dsMaster.rowposition, "DAYNIGHT_DIVCD"));
        			this.dsJikmu2.setColumn(i,"COMP_GRADE_CD",this.dsMaster.getColumn(this.dsMaster.rowposition, "COMP_GRADE_CD"));
        			this.dsJikmu2.setColumn(i,"SUBJECT_CD",this.dsMaster.getColumn(this.dsMaster.rowposition, "SUBJECT_CD"));
        			this.dsJikmu2.setColumn(i,"LECTCLASS",this.dsMaster.getColumn(this.dsMaster.rowposition, "LECTCLASS"));
        			this.dsJikmu2.setColumn(i,"PROF_CD",this.dsMaster.getColumn(this.dsMaster.rowposition, "PROF_CD"));
        		}
        	}

        	// 직무능력3 세팅
        	if(this.dsJikmu3.rowcount > 0)
        	{
        	for(var i=this.dsJikmu3.rowcount-1;i>-1;i--)
        		{
        			this.dsJikmu3.setColumn(i,"YYYY",this.dsMaster.getColumn(this.dsMaster.rowposition, "YYYY"));
        			this.dsJikmu3.setColumn(i,"SEMESTER",this.dsMaster.getColumn(this.dsMaster.rowposition, "SEMESTER"));
        			this.dsJikmu3.setColumn(i,"DEPT_CD",this.dsMaster.getColumn(this.dsMaster.rowposition, "DEPT_CD"));
        			this.dsJikmu3.setColumn(i,"MAJOR_CD",this.dsMaster.getColumn(this.dsMaster.rowposition, "MAJOR_CD"));
        			this.dsJikmu3.setColumn(i,"DAYNIGHT_DIVCD",this.dsMaster.getColumn(this.dsMaster.rowposition, "DAYNIGHT_DIVCD"));
        			this.dsJikmu3.setColumn(i,"COMP_GRADE_CD",this.dsMaster.getColumn(this.dsMaster.rowposition, "COMP_GRADE_CD"));
        			this.dsJikmu3.setColumn(i,"SUBJECT_CD",this.dsMaster.getColumn(this.dsMaster.rowposition, "SUBJECT_CD"));
        			this.dsJikmu3.setColumn(i,"LECTCLASS",this.dsMaster.getColumn(this.dsMaster.rowposition, "LECTCLASS"));
        			this.dsJikmu3.setColumn(i,"PROF_CD",this.dsMaster.getColumn(this.dsMaster.rowposition, "PROF_CD"));
        		}
        	}

        	// 향상교육과정 세팅
        	if(this.dsHyangsang.rowcount > 0)
        	{
        	for(var i=this.dsHyangsang.rowcount-1;i>-1;i--)
        		{
        			this.dsHyangsang.setColumn(i,"YYYY",this.dsMaster.getColumn(this.dsMaster.rowposition, "YYYY"));
        			this.dsHyangsang.setColumn(i,"SEMESTER",this.dsMaster.getColumn(this.dsMaster.rowposition, "SEMESTER"));
        			this.dsHyangsang.setColumn(i,"DEPT_CD",this.dsMaster.getColumn(this.dsMaster.rowposition, "DEPT_CD"));
        			this.dsHyangsang.setColumn(i,"MAJOR_CD",this.dsMaster.getColumn(this.dsMaster.rowposition, "MAJOR_CD"));
        			this.dsHyangsang.setColumn(i,"DAYNIGHT_DIVCD",this.dsMaster.getColumn(this.dsMaster.rowposition, "DAYNIGHT_DIVCD"));
        			this.dsHyangsang.setColumn(i,"COMP_GRADE_CD",this.dsMaster.getColumn(this.dsMaster.rowposition, "COMP_GRADE_CD"));
        			this.dsHyangsang.setColumn(i,"SUBJECT_CD",this.dsMaster.getColumn(this.dsMaster.rowposition, "SUBJECT_CD"));
        			this.dsHyangsang.setColumn(i,"LECTCLASS",this.dsMaster.getColumn(this.dsMaster.rowposition, "LECTCLASS"));
        			this.dsHyangsang.setColumn(i,"PROF_CD",this.dsMaster.getColumn(this.dsMaster.rowposition, "PROF_CD"));
        		}
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
            var strUrl      = "/prj/UC/UC01/Save_2122201_M.do";
            var strInDs     = "dsAll=dsAll:u ";
        		strInDs	   += "dsJikmu1=dsJikmu1:a ";
        		strInDs	   += "dsJikmu2=dsJikmu2:a ";
        		strInDs	   += "dsJikmu3=dsJikmu3:a ";
        		strInDs	   += "dsHyangsang=dsHyangsang:a ";
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
        	this.fn_Ret();
        };

        /**********************************************************************
                08. 성적확정 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreConfirm = function()
        {
        	if(this.dsAll.rowcount < 0)
        	{
        		this.gfn_alert("교과목을 선택해주세요.","저장정보","","question");
        		return false;
        	}

        	var cntA = this.dsDetail.getColumn(0, "GRADE_1") + this.dsDetail.getColumn(0, "GRADE_2");
        	var cntBase = 0;
        	var alertContent = "";

        	if(this.dsDetail.getColumn(0, "SUBJ_KIND") == "00" || this.dsDetail.getColumn(0, "SUBJ_KIND") == "01" || this.dsDetail.getColumn(0, "SUBJ_KIND") == "02")
        	{
        		cntBase = Math.floor(this.dsDetail.getColumn(0, "TOTAL_CNT") * 0.4);
        		alertContent = "40%(교양)";
        	}
        	else if(this.dsDetail.getColumn(0, "SUBJ_KIND") == "03" || this.dsDetail.getColumn(0, "SUBJ_KIND") == "04" || this.dsDetail.getColumn(0, "SUBJ_KIND") == "07" || this.dsDetail.getColumn(0, "SUBJ_KIND") == "08")
        	{
        		cntBase = Math.floor(this.dsDetail.getColumn(0, "TOTAL_CNT") * 0.3);
        		alertContent = "30%(전공)";
        	}
        	else if(this.dsDetail.getColumn(0, "SUBJ_KIND") == "05" || this.dsDetail.getColumn(0, "SUBJ_KIND") == null)
        	{
        		cntBase = 200;
        	}

        	if(cntA > cntBase)
        	{
        		this.gfn_alert("해당 교과목은 A등급 이상 " + alertContent + "를 초과하였습니다.\n(최대인원 : " + cntBase + "명)","저장정보","","question");
        		return false;
        	}

        	var result = this.gfn_confirm( "저장하지 않은 변경사항은 저장되지 않으며,\n성적확정 시 해당 성적을 더이상 수정할 수 없습니다.\n성적확정을 진행하시겠습니까?", "저장","", "question" );
            if(result == 0)
            {
                return false;
            }

        	// 전체 세팅
        	this.dsAll.setColumn(0,"YYYY",this.dsMaster.getColumn(this.dsMaster.rowposition, "YYYY"));
        	this.dsAll.setColumn(0,"SEMESTER",this.dsMaster.getColumn(this.dsMaster.rowposition, "SEMESTER"));
        	this.dsAll.setColumn(0,"DEPT_CD",this.dsMaster.getColumn(this.dsMaster.rowposition, "DEPT_CD"));
        	this.dsAll.setColumn(0,"MAJOR_CD",this.dsMaster.getColumn(this.dsMaster.rowposition, "MAJOR_CD"));
        	this.dsAll.setColumn(0,"DAYNIGHT_DIVCD",this.dsMaster.getColumn(this.dsMaster.rowposition, "DAYNIGHT_DIVCD"));
        	this.dsAll.setColumn(0,"COMP_GRADE_CD",this.dsMaster.getColumn(this.dsMaster.rowposition, "COMP_GRADE_CD"));
        	this.dsAll.setColumn(0,"SUBJECT_CD",this.dsMaster.getColumn(this.dsMaster.rowposition, "SUBJECT_CD"));
        	this.dsAll.setColumn(0,"LECTCLASS",this.dsMaster.getColumn(this.dsMaster.rowposition, "LECTCLASS"));
        	this.dsAll.setColumn(0,"PROF_CD",this.dsMaster.getColumn(this.dsMaster.rowposition, "PROF_CD"));

            return true;
        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_Confirm = function()
        {
            if(!this.fn_PreConfirm())
            {
                return false;
            }

            var strSvc      = "Confirm";
            var strUrl      = "/prj/UC/UC01/Confirm_2122201_M.do";
            var strInDs     = "dsAll=dsAll:u";
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
        this.fn_PostConfirm = function()
        {
        	this.fn_Ret();
        };

        /**********************************************************************
                09. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj,e)
        {
        	this.gfn_gridSort(obj,e);
        };

        this.tab_jikmu1_grdJikmu_onheaddblclick = function(obj,e)
        {
        	this.gfn_gridSort(obj,e);
        };

        this.tab_jikmu2_grdJikmu_onheaddblclick = function(obj,e)
        {
        	this.gfn_gridSort(obj,e);
        };

        this.tab_jikmu3_grdJikmu_onheaddblclick = function(obj,e)
        {
        	this.gfn_gridSort(obj,e);
        };

        this.tab_jikmu4_grdJikmu_onheaddblclick = function(obj,e)
        {
        	this.gfn_gridSort(obj,e);
        };

        this.tab_jikmu5_grdJikmu_onheaddblclick = function(obj,e)
        {
        	this.gfn_gridSort(obj,e);
        };

        this.tab_jikmu6_grdJikmu_onheaddblclick = function(obj,e)
        {
        	this.gfn_gridSort(obj,e);
        };

        this.tab_jikmu7_grdJikmu_onheaddblclick = function(obj,e)
        {
        	this.gfn_gridSort(obj,e);
        };

        this.tab_jikmu8_grdJikmu_onheaddblclick = function(obj,e)
        {
        	this.gfn_gridSort(obj,e);
        };

        this.tab_jikmu9_grdJikmu_onheaddblclick = function(obj,e)
        {
        	this.gfn_gridSort(obj,e);
        };

        this.tab_hyangsang_grdJikmu_onheaddblclick = function(obj,e)
        {
        	this.gfn_gridSort(obj,e);
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

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
        	var value = false;

            if(this.gfn_isUpdate(this.dsAll))
        	{
        		value = true;
        	}
        	else if(this.gfn_isUpdate(this.dsJikmu1))
        	{
        		value = true;
        	}
        	else if(this.gfn_isUpdate(this.dsJikmu2))
        	{
        		value = true;
        	}
        	else if(this.gfn_isUpdate(this.dsJikmu3))
        	{
        		value = true;
        	}
        	else if(this.gfn_isUpdate(this.dsJikmu4))
        	{
        		value = true;
        	}
        	else if(this.gfn_isUpdate(this.dsJikmu5))
        	{
        		value = true;
        	}
        	else if(this.gfn_isUpdate(this.dsJikmu6))
        	{
        		value = true;
        	}
        	else if(this.gfn_isUpdate(this.dsJikmu7))
        	{
        		value = true;
        	}
        	else if(this.gfn_isUpdate(this.dsJikmu8))
        	{
        		value = true;
        	}
        	else if(this.gfn_isUpdate(this.dsJikmu9))
        	{
        		value = true;
        	}
        	else if(this.gfn_isUpdate(this.dsHyangsang))
        	{
        		value = true;
        	}
        	return value;
        };

        // 성적현황 출력
        this.fn_SeongjeokPrint = function()
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

        	this.gfn_commonUtils_report('UC01/UC01_2122201_M_01.crf',  param);
        };

        // 심화교육과정 운영결과서 출력
        this.tab_allscore_btnSimhwaPrint_onclick = function(obj,e)
        {
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

        	this.gfn_commonUtils_report('UC01/UC01_2122201_M_02.crf',  param);
        };

        // 향상교육과정 운영결과서 출력
        this.tab_hyangsang_btnHyangsangPrint_onclick = function(obj,e)
        {
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

        	this.gfn_commonUtils_report('UC01/UC01_2122201_M_03.crf',  param);
        };

        // 직무능력1 평가서 출력
        this.tab_jikmu1_btnJikmuPrint_onclick = function(obj,e)
        {
        	var YYYY     		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'YYYY');
        	var SEMESTER 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'SEMESTER');
        	var DEPT_CD 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'DEPT_CD');
        	var MAJOR_CD 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'MAJOR_CD');
        	var DAYNIGHT_DIVCD 	= this.dsMaster.getColumn(this.dsMaster.rowposition, 'DAYNIGHT_DIVCD');
        	var COMP_GRADE_CD 	= this.dsMaster.getColumn(this.dsMaster.rowposition, 'COMP_GRADE_CD');
        	var SUBJECT_CD 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'SUBJECT_CD');
        	var LECTCLASS 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'LECTCLASS');
        	var PROF_CD 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'PROF_CD');
        	var EVALITEM_DIVCD	= "11";

        	var param = { YYYY     			: YYYY
        				, SEMESTER 			: SEMESTER
        				, DEPT_CD 			: DEPT_CD
        				, MAJOR_CD 			: MAJOR_CD
        				, DAYNIGHT_DIVCD 	: DAYNIGHT_DIVCD
        				, COMP_GRADE_CD 	: COMP_GRADE_CD
        				, SUBJECT_CD 		: SUBJECT_CD
        				, LECTCLASS			: LECTCLASS
        				, PROF_CD			: PROF_CD
        				, EVALITEM_DIVCD	: EVALITEM_DIVCD
        				};

        	this.gfn_commonUtils_report('UC01/UC01_2122201_M_04.crf',  param);
        };

        // 직무능력2 평가서 출력
        this.tab_jikmu2_btnJikmuPrint_onclick = function(obj,e)
        {
        	var YYYY     		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'YYYY');
        	var SEMESTER 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'SEMESTER');
        	var DEPT_CD 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'DEPT_CD');
        	var MAJOR_CD 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'MAJOR_CD');
        	var DAYNIGHT_DIVCD 	= this.dsMaster.getColumn(this.dsMaster.rowposition, 'DAYNIGHT_DIVCD');
        	var COMP_GRADE_CD 	= this.dsMaster.getColumn(this.dsMaster.rowposition, 'COMP_GRADE_CD');
        	var SUBJECT_CD 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'SUBJECT_CD');
        	var LECTCLASS 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'LECTCLASS');
        	var PROF_CD 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'PROF_CD');
        	var EVALITEM_DIVCD	= '12';

        	var param = { YYYY     			: YYYY
        				, SEMESTER 			: SEMESTER
        				, DEPT_CD 			: DEPT_CD
        				, MAJOR_CD 			: MAJOR_CD
        				, DAYNIGHT_DIVCD 	: DAYNIGHT_DIVCD
        				, COMP_GRADE_CD 	: COMP_GRADE_CD
        				, SUBJECT_CD 		: SUBJECT_CD
        				, LECTCLASS			: LECTCLASS
        				, PROF_CD			: PROF_CD
        				, EVALITEM_DIVCD	: EVALITEM_DIVCD
        				};

        	this.gfn_commonUtils_report('UC01/UC01_2122201_M_04.crf',  param);
        };

        // 직무능력3 평가서 출력
        this.tab_jikmu3_btnJikmuPrint_onclick = function(obj,e)
        {
        	var YYYY     		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'YYYY');
        	var SEMESTER 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'SEMESTER');
        	var DEPT_CD 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'DEPT_CD');
        	var MAJOR_CD 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'MAJOR_CD');
        	var DAYNIGHT_DIVCD 	= this.dsMaster.getColumn(this.dsMaster.rowposition, 'DAYNIGHT_DIVCD');
        	var COMP_GRADE_CD 	= this.dsMaster.getColumn(this.dsMaster.rowposition, 'COMP_GRADE_CD');
        	var SUBJECT_CD 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'SUBJECT_CD');
        	var LECTCLASS 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'LECTCLASS');
        	var PROF_CD 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'PROF_CD');
        	var EVALITEM_DIVCD	= '13';

        	var param = { YYYY     			: YYYY
        				, SEMESTER 			: SEMESTER
        				, DEPT_CD 			: DEPT_CD
        				, MAJOR_CD 			: MAJOR_CD
        				, DAYNIGHT_DIVCD 	: DAYNIGHT_DIVCD
        				, COMP_GRADE_CD 	: COMP_GRADE_CD
        				, SUBJECT_CD 		: SUBJECT_CD
        				, LECTCLASS			: LECTCLASS
        				, PROF_CD			: PROF_CD
        				, EVALITEM_DIVCD	: EVALITEM_DIVCD
        				};

        	this.gfn_commonUtils_report('UC01/UC01_2122201_M_04.crf',  param);
        };

        // 직무능력4 평가서 출력
        this.tab_jikmu4_btnJikmuPrint_onclick = function(obj,e)
        {
        	var YYYY     		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'YYYY');
        	var SEMESTER 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'SEMESTER');
        	var DEPT_CD 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'DEPT_CD');
        	var MAJOR_CD 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'MAJOR_CD');
        	var DAYNIGHT_DIVCD 	= this.dsMaster.getColumn(this.dsMaster.rowposition, 'DAYNIGHT_DIVCD');
        	var COMP_GRADE_CD 	= this.dsMaster.getColumn(this.dsMaster.rowposition, 'COMP_GRADE_CD');
        	var SUBJECT_CD 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'SUBJECT_CD');
        	var LECTCLASS 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'LECTCLASS');
        	var PROF_CD 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'PROF_CD');
        	var EVALITEM_DIVCD	= '14';

        	var param = { YYYY     			: YYYY
        				, SEMESTER 			: SEMESTER
        				, DEPT_CD 			: DEPT_CD
        				, MAJOR_CD 			: MAJOR_CD
        				, DAYNIGHT_DIVCD 	: DAYNIGHT_DIVCD
        				, COMP_GRADE_CD 	: COMP_GRADE_CD
        				, SUBJECT_CD 		: SUBJECT_CD
        				, LECTCLASS			: LECTCLASS
        				, PROF_CD			: PROF_CD
        				, EVALITEM_DIVCD	: EVALITEM_DIVCD
        				};

        	this.gfn_commonUtils_report('UC01/UC01_2122201_M_04.crf',  param);
        };

        // 직무능력5 평가서 출력
        this.tab_jikmu5_btnJikmuPrint_onclick = function(obj,e)
        {
        	var YYYY     		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'YYYY');
        	var SEMESTER 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'SEMESTER');
        	var DEPT_CD 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'DEPT_CD');
        	var MAJOR_CD 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'MAJOR_CD');
        	var DAYNIGHT_DIVCD 	= this.dsMaster.getColumn(this.dsMaster.rowposition, 'DAYNIGHT_DIVCD');
        	var COMP_GRADE_CD 	= this.dsMaster.getColumn(this.dsMaster.rowposition, 'COMP_GRADE_CD');
        	var SUBJECT_CD 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'SUBJECT_CD');
        	var LECTCLASS 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'LECTCLASS');
        	var PROF_CD 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'PROF_CD');
        	var EVALITEM_DIVCD	= '15';

        	var param = { YYYY     			: YYYY
        				, SEMESTER 			: SEMESTER
        				, DEPT_CD 			: DEPT_CD
        				, MAJOR_CD 			: MAJOR_CD
        				, DAYNIGHT_DIVCD 	: DAYNIGHT_DIVCD
        				, COMP_GRADE_CD 	: COMP_GRADE_CD
        				, SUBJECT_CD 		: SUBJECT_CD
        				, LECTCLASS			: LECTCLASS
        				, PROF_CD			: PROF_CD
        				, EVALITEM_DIVCD	: EVALITEM_DIVCD
        				};

        	this.gfn_commonUtils_report('UC01/UC01_2122201_M_04.crf',  param);
        };

        // 직무능력6 평가서 출력
        this.tab_jikmu6_btnJikmuPrint_onclick = function(obj,e)
        {
        	var YYYY     		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'YYYY');
        	var SEMESTER 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'SEMESTER');
        	var DEPT_CD 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'DEPT_CD');
        	var MAJOR_CD 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'MAJOR_CD');
        	var DAYNIGHT_DIVCD 	= this.dsMaster.getColumn(this.dsMaster.rowposition, 'DAYNIGHT_DIVCD');
        	var COMP_GRADE_CD 	= this.dsMaster.getColumn(this.dsMaster.rowposition, 'COMP_GRADE_CD');
        	var SUBJECT_CD 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'SUBJECT_CD');
        	var LECTCLASS 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'LECTCLASS');
        	var PROF_CD 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'PROF_CD');
        	var EVALITEM_DIVCD	= '16';

        	var param = { YYYY     			: YYYY
        				, SEMESTER 			: SEMESTER
        				, DEPT_CD 			: DEPT_CD
        				, MAJOR_CD 			: MAJOR_CD
        				, DAYNIGHT_DIVCD 	: DAYNIGHT_DIVCD
        				, COMP_GRADE_CD 	: COMP_GRADE_CD
        				, SUBJECT_CD 		: SUBJECT_CD
        				, LECTCLASS			: LECTCLASS
        				, PROF_CD			: PROF_CD
        				, EVALITEM_DIVCD	: EVALITEM_DIVCD
        				};

        	this.gfn_commonUtils_report('UC01/UC01_2122201_M_04.crf',  param);
        };

        // 직무능력7 평가서 출력
        this.tab_jikmu7_btnJikmuPrint_onclick = function(obj,e)
        {
        	var YYYY     		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'YYYY');
        	var SEMESTER 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'SEMESTER');
        	var DEPT_CD 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'DEPT_CD');
        	var MAJOR_CD 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'MAJOR_CD');
        	var DAYNIGHT_DIVCD 	= this.dsMaster.getColumn(this.dsMaster.rowposition, 'DAYNIGHT_DIVCD');
        	var COMP_GRADE_CD 	= this.dsMaster.getColumn(this.dsMaster.rowposition, 'COMP_GRADE_CD');
        	var SUBJECT_CD 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'SUBJECT_CD');
        	var LECTCLASS 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'LECTCLASS');
        	var PROF_CD 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'PROF_CD');
        	var EVALITEM_DIVCD	= '17';

        	var param = { YYYY     			: YYYY
        				, SEMESTER 			: SEMESTER
        				, DEPT_CD 			: DEPT_CD
        				, MAJOR_CD 			: MAJOR_CD
        				, DAYNIGHT_DIVCD 	: DAYNIGHT_DIVCD
        				, COMP_GRADE_CD 	: COMP_GRADE_CD
        				, SUBJECT_CD 		: SUBJECT_CD
        				, LECTCLASS			: LECTCLASS
        				, PROF_CD			: PROF_CD
        				, EVALITEM_DIVCD	: EVALITEM_DIVCD
        				};

        	this.gfn_commonUtils_report('UC01/UC01_2122201_M_04.crf',  param);
        };

        // 직무능력8 평가서 출력
        this.tab_jikmu8_btnJikmuPrint_onclick = function(obj,e)
        {
        	var YYYY     		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'YYYY');
        	var SEMESTER 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'SEMESTER');
        	var DEPT_CD 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'DEPT_CD');
        	var MAJOR_CD 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'MAJOR_CD');
        	var DAYNIGHT_DIVCD 	= this.dsMaster.getColumn(this.dsMaster.rowposition, 'DAYNIGHT_DIVCD');
        	var COMP_GRADE_CD 	= this.dsMaster.getColumn(this.dsMaster.rowposition, 'COMP_GRADE_CD');
        	var SUBJECT_CD 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'SUBJECT_CD');
        	var LECTCLASS 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'LECTCLASS');
        	var PROF_CD 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'PROF_CD');
        	var EVALITEM_DIVCD	= '18';

        	var param = { YYYY     			: YYYY
        				, SEMESTER 			: SEMESTER
        				, DEPT_CD 			: DEPT_CD
        				, MAJOR_CD 			: MAJOR_CD
        				, DAYNIGHT_DIVCD 	: DAYNIGHT_DIVCD
        				, COMP_GRADE_CD 	: COMP_GRADE_CD
        				, SUBJECT_CD 		: SUBJECT_CD
        				, LECTCLASS			: LECTCLASS
        				, PROF_CD			: PROF_CD
        				, EVALITEM_DIVCD	: EVALITEM_DIVCD
        				};

        	this.gfn_commonUtils_report('UC01/UC01_2122201_M_04.crf',  param);
        };

        // 직무능력9 평가서 출력
        this.tab_jikmu9_btnJikmuPrint_onclick = function(obj,e)
        {
        	var YYYY     		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'YYYY');
        	var SEMESTER 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'SEMESTER');
        	var DEPT_CD 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'DEPT_CD');
        	var MAJOR_CD 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'MAJOR_CD');
        	var DAYNIGHT_DIVCD 	= this.dsMaster.getColumn(this.dsMaster.rowposition, 'DAYNIGHT_DIVCD');
        	var COMP_GRADE_CD 	= this.dsMaster.getColumn(this.dsMaster.rowposition, 'COMP_GRADE_CD');
        	var SUBJECT_CD 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'SUBJECT_CD');
        	var LECTCLASS 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'LECTCLASS');
        	var PROF_CD 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'PROF_CD');
        	var EVALITEM_DIVCD	= '19';

        	var param = { YYYY     			: YYYY
        				, SEMESTER 			: SEMESTER
        				, DEPT_CD 			: DEPT_CD
        				, MAJOR_CD 			: MAJOR_CD
        				, DAYNIGHT_DIVCD 	: DAYNIGHT_DIVCD
        				, COMP_GRADE_CD 	: COMP_GRADE_CD
        				, SUBJECT_CD 		: SUBJECT_CD
        				, LECTCLASS			: LECTCLASS
        				, PROF_CD			: PROF_CD
        				, EVALITEM_DIVCD	: EVALITEM_DIVCD
        				};

        	this.gfn_commonUtils_report('UC01/UC01_2122201_M_04.crf',  param);
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

        // 탭페이지 변경시
        this.tab_onchanged = function(obj,e)
        {
        	// 전체탭이 아니면 전체 그리드 삭제
        	if(this.tab.tabindex != 0)
        	{
        		this.fn_setObjGridDestroy(this.tab.allscore.form.divAll.form);

        		var evalitemDivcd = "";

        		// 직무능력 조회
        		if(this.tab.tabindex == 1)
        		{
        			evalitemDivcd = "11";
        			this.fn_JikmuRet(evalitemDivcd);
        		}
        		else if(this.tab.tabindex == 2)
        		{
        			evalitemDivcd = "12";
        			this.fn_JikmuRet(evalitemDivcd);
        		}
        		else if(this.tab.tabindex == 3)
        		{
        			evalitemDivcd = "13";
        			this.fn_JikmuRet(evalitemDivcd);
        		}
        		else if(this.tab.tabindex == 4)
        		{
        			evalitemDivcd = "14";
        			this.fn_JikmuRet(evalitemDivcd);
        		}
        		else if(this.tab.tabindex == 5)
        		{
        			evalitemDivcd = "15";
        			this.fn_JikmuRet(evalitemDivcd);
        		}
        		else if(this.tab.tabindex == 6)
        		{
        			evalitemDivcd = "16";
        			this.fn_JikmuRet(evalitemDivcd);
        		}
        		else if(this.tab.tabindex == 7)
        		{
        			evalitemDivcd = "17";
        			this.fn_JikmuRet(evalitemDivcd);
        		}
        		else if(this.tab.tabindex == 8)
        		{
        			evalitemDivcd = "18";
        			this.fn_JikmuRet(evalitemDivcd);
        		}
        		else if(this.tab.tabindex == 9)
        		{
        			evalitemDivcd = "19";
        			this.fn_JikmuRet(evalitemDivcd);
        		}
        		else if(this.tab.tabindex == 10)
        		{
        			evalitemDivcd = "03";
        			this.fn_HyangsangRet(evalitemDivcd);
        		}
        	}
        	else
        	{
        		this.fn_mkGrid();
        	}
        };

        // 전체 그리드 변경시
        this.dsAll_oncolumnchanged = function(obj,e)
        {
        	// 결석시수 입력시 출석평가 점수 변경
        	if (e.columnid == "ATTEND_CNT02")
        	{
        		if(this.dsMaster.getColumn(this.dsMaster.rowposition, "CONFIRM_YN") != "Y")
        		{
        			var point = this.dsJikmuAuth.getColumn(this.dsJikmuAuth.findRow("EVALITEM_DIVCD", "02"), "POINT");
        			var attend = this.dsAll.getColumn(this.dsAll.rowposition, "ATTEND_CNT02");

        			if(attend != 0)
        			{
        				for(var i=0; i<this.dsSisu.rowcount; i++)
        				{
        					if(this.dsSisu.getColumn(i, "ABSENT_CNT") == attend)
        					{
        						point = this.dsSisu.getColumn(i, "ATTEND_POINT");
        						this.dsAll.setColumn(this.dsAll.rowposition, "TOTAL_02", point);
        					}
        				}
        			} else {
        				this.dsAll.setColumn(this.dsAll.rowposition, "TOTAL_02", point);
        			}
        		}
        	}

        	// 배점을 넘는 점수 입력시 점수 초기화
        	var point01 = this.dsJikmuAuth.getColumn(this.dsJikmuAuth.findRow("EVALITEM_DIVCD", "01"), "POINT");
        	var point03 = this.dsJikmuAuth.getColumn(this.dsJikmuAuth.findRow("EVALITEM_DIVCD", "03"), "POINT");
        	var point11 = this.dsJikmuAuth.getColumn(this.dsJikmuAuth.findRow("EVALITEM_DIVCD", "11"), "POINT");
        	var point12 = this.dsJikmuAuth.getColumn(this.dsJikmuAuth.findRow("EVALITEM_DIVCD", "12"), "POINT");
        	var point13 = this.dsJikmuAuth.getColumn(this.dsJikmuAuth.findRow("EVALITEM_DIVCD", "13"), "POINT");
        	var name01 = this.dsJikmuAuth.getColumn(this.dsJikmuAuth.findRow("EVALITEM_DIVCD", "01"), "EVALITEM_DIVCD_NM");
        	var name03 = this.dsJikmuAuth.getColumn(this.dsJikmuAuth.findRow("EVALITEM_DIVCD", "03"), "EVALITEM_DIVCD_NM");
        	var name11 = this.dsJikmuAuth.getColumn(this.dsJikmuAuth.findRow("EVALITEM_DIVCD", "11"), "EVALITEM_DIVCD_NM");
        	var name12 = this.dsJikmuAuth.getColumn(this.dsJikmuAuth.findRow("EVALITEM_DIVCD", "12"), "EVALITEM_DIVCD_NM");
        	var name13 = this.dsJikmuAuth.getColumn(this.dsJikmuAuth.findRow("EVALITEM_DIVCD", "13"), "EVALITEM_DIVCD_NM");
        	var score01 = this.dsAll.getColumn(this.dsAll.rowposition, "TOTAL_01");
        	var score03 = this.dsAll.getColumn(this.dsAll.rowposition, "TOTAL_03");
        	var score11 = this.dsAll.getColumn(this.dsAll.rowposition, "TOTAL_11");
        	var score12 = this.dsAll.getColumn(this.dsAll.rowposition, "TOTAL_12");
        	var score13 = this.dsAll.getColumn(this.dsAll.rowposition, "TOTAL_13");

        	if (e.columnid == "TOTAL_01")
        	{
        		if(score01 > point01)
        		{
        			this.gfn_alert(name01 + " 항목의 최대값은 " + point01 + " 입니다.","저장정보","","question");
        			this.dsAll.setColumn(this.dsAll.rowposition, "TOTAL_01", 0);
        			return false;
        		}
        	}
        	if (e.columnid == "TOTAL_03")
        	{
        		if(score03 > point03)
        		{
        			this.gfn_alert(name03 + " 항목의 최대값은 " + point03 + " 입니다.","저장정보","","question");
        			this.dsAll.setColumn(this.dsAll.rowposition, "TOTAL_03", 0);
        			return false;
        		}
        	}
        	if (e.columnid == "TOTAL_11")
        	{
        		if(score11 > point11)
        		{
        			this.gfn_alert(name11 + " 항목의 최대값은 " + point11 + " 입니다.","저장정보","","question");
        			this.dsAll.setColumn(this.dsAll.rowposition, "TOTAL_11", 0);
        			return false;
        		}
        	}
        	if (e.columnid == "TOTAL_12")
        	{
        		if(score12 > point12)
        		{
        			this.gfn_alert(name12 + " 항목의 최대값은 " + point12 + " 입니다.","저장정보","","question");
        			this.dsAll.setColumn(this.dsAll.rowposition, "TOTAL_12", 0);
        			return false;
        		}
        	}
        	if (e.columnid == "TOTAL_13")
        	{
        		if(score13 > point13)
        		{
        			this.gfn_alert(name13 + " 항목의 최대값은 " + point13 + " 입니다.","저장정보","","question");
        			this.dsAll.setColumn(this.dsAll.rowposition, "TOTAL_13", 0);
        			return false;
        		}
        	}

        	// 교무 총점, ncs 총점, 교무 등급, 교무 등수, ncs 등수 구하는 함수
        	var sum = 0;
        	var sumList = [];
        	var ncsSum = 0;
        	var ncsSumList = [];
        	var rank = 1;
        	var ncsRank = 1;
        	var total01 = 0;
        	var total02 = 0;
        	var total03 = 0;
        	var total11 = 0;
        	var total12 = 0;
        	var total13 = 0;
        	var total14 = 0;
        	var total15 = 0;
        	var total16 = 0;
        	var total17 = 0;
        	var total18 = 0;
        	var total19 = 0;
        	var total99 = 0;
        	var cntAplus = 0;
        	var cntAzero = 0;
        	var cntBplus = 0;
        	var cntBzero = 0;
        	var cntCplus = 0;
        	var cntCzero = 0;
        	var cntDplus = 0;
        	var cntDzero = 0;
        	var cntF = 0;

        	for(var i=0; i<this.dsAll.rowcount; i++)
        	{
        		total01 = nexacro.toNumber(this.dsAll.getColumn(i, "TOTAL_01"));
        		total02 = nexacro.toNumber(this.dsAll.getColumn(i, "TOTAL_02"));
        		total03 = nexacro.toNumber(this.dsAll.getColumn(i, "TOTAL_03"));
        		total11 = nexacro.toNumber(this.dsAll.getColumn(i, "TOTAL_11"));
        		total12 = nexacro.toNumber(this.dsAll.getColumn(i, "TOTAL_12"));
        		total13 = nexacro.toNumber(this.dsAll.getColumn(i, "TOTAL_13"));
        		total14 = nexacro.toNumber(this.dsAll.getColumn(i, "TOTAL_14"));
        		total15 = nexacro.toNumber(this.dsAll.getColumn(i, "TOTAL_15"));
        		total16 = nexacro.toNumber(this.dsAll.getColumn(i, "TOTAL_16"));
        		total17 = nexacro.toNumber(this.dsAll.getColumn(i, "TOTAL_17"));
        		total18 = nexacro.toNumber(this.dsAll.getColumn(i, "TOTAL_18"));
        		total19 = nexacro.toNumber(this.dsAll.getColumn(i, "TOTAL_19"));
        		total99 = nexacro.toNumber(this.dsAll.getColumn(i, "TOTAL_99"));

        		sum = total01 + total02 + total03 + total11 + total12 + total13 + total14 + total15 + total16 + total17 + total18 + total19 + total99;
        		ncsSum = total11 + total12 + total13;

        		sumList.push(sum);
        		ncsSumList.push(ncsSum);

        		this.dsAll.setColumn(i, "TOTAL_SCORE", sum);   // 교무 총점
        		this.dsAll.setColumn(i, "TOTAL_NCS", ncsSum);  // ncs 총점

        		// 교무등급
        		if(sum >= 95)
        		{
        			this.dsAll.setColumn(i, "GRADE", "A+");
        			cntAplus++;
        		}
        		else if(sum >= 90)
        		{
        			this.dsAll.setColumn(i, "GRADE", "A0");
        			cntAzero++;
        		}
        		else if(sum >= 85)
        		{
        			this.dsAll.setColumn(i, "GRADE", "B+");
        			cntBplus++;
        		}
        		else if(sum >= 80)
        		{
        			this.dsAll.setColumn(i, "GRADE", "B0");
        			cntBzero++;
        		}
        		else if(sum >= 75)
        		{
        			this.dsAll.setColumn(i, "GRADE", "C+");
        			cntCplus++;
        		}
        		else if(sum >= 70)
        		{
        			this.dsAll.setColumn(i, "GRADE", "C0");
        			cntCzero++;
        		}
        		else if(sum >= 65)
        		{
        			this.dsAll.setColumn(i, "GRADE", "D+");
        			cntDplus++;
        		}
        		else if(sum >= 60)
        		{
        			this.dsAll.setColumn(i, "GRADE", "D0");
        			cntDzero++;
        		}
        		else
        		{
        			this.dsAll.setColumn(i, "GRADE", "F");
        			cntF++;
        		}
        	}

        	this.dsDetail.setColumn(0, "TOTAL_CNT", this.dsAll.rowcount);
        	this.dsDetail.setColumn(0, "GRADE_1", cntAplus);
        	this.dsDetail.setColumn(0, "GRADE_2", cntAzero);
        	this.dsDetail.setColumn(0, "GRADE_3", cntBplus);
        	this.dsDetail.setColumn(0, "GRADE_4", cntBzero);
        	this.dsDetail.setColumn(0, "GRADE_5", cntCplus);
        	this.dsDetail.setColumn(0, "GRADE_6", cntCzero);
        	this.dsDetail.setColumn(0, "GRADE_7", cntDplus);
        	this.dsDetail.setColumn(0, "GRADE_8", cntDzero);
        	this.dsDetail.setColumn(0, "GRADE_9", cntF);

        	// 교무 등수
        	for(var i=0; i<sumList.length; i++)
        	{
        		for(var j=0; j<sumList.length; j++)
        		{
        			if(sumList[i] < sumList[j])
        			{
        				rank++;
        			}
        		}
        		this.dsAll.setColumn(i, "RANK", rank);
        		rank = 1;
        	}

        	// ncs 등수
        	for(var i=0; i<ncsSumList.length; i++)
        	{
        		for(var j=0; j<ncsSumList.length; j++)
        		{
        			if(ncsSumList[i] < ncsSumList[j])
        			{
        				ncsRank++;
        			}
        		}
        		this.dsAll.setColumn(i, "NCS_RANK", ncsRank);
        		ncsRank = 1;
        	}
        };

        // 직무능력1차 그리드 변경시
        this.dsJikmu1_onvaluechanged = function(obj,e)
        {
        	if(this.dsJikmu1.getColumn(this.dsJikmu1.rowposition, "SCORE") > this.dsJikmu1.getColumn(this.dsJikmu1.rowposition, "POINT"))
        	{
        		this.gfn_alert("직무능력1차 항목의 최대값은 " + this.dsJikmu1.getColumn(this.dsJikmu1.rowposition, "POINT") + " 입니다.","저장정보","","question");
        		this.dsJikmu1.setColumn(this.dsJikmu1.rowposition, "SCORE", 0);
        		return false;
        	}
        };

        // 직무능력2차 그리드 변경시
        this.dsJikmu2_onvaluechanged = function(obj,e)
        {
        	if(this.dsJikmu2.getColumn(this.dsJikmu2.rowposition, "SCORE") > this.dsJikmu2.getColumn(this.dsJikmu2.rowposition, "POINT"))
        	{
        		this.gfn_alert("직무능력2차 항목의 최대값은 " + this.dsJikmu2.getColumn(this.dsJikmu2.rowposition, "POINT") + " 입니다.","저장정보","","question");
        		this.dsJikmu2.setColumn(this.dsJikmu2.rowposition, "SCORE", 0);
        		return false;
        	}
        };

        // 직무능력3차 그리드 변경시
        this.dsJikmu3_onvaluechanged = function(obj,e)
        {
        	if(this.dsJikmu3.getColumn(this.dsJikmu3.rowposition, "SCORE") > this.dsJikmu3.getColumn(this.dsJikmu3.rowposition, "POINT"))
        	{
        		this.gfn_alert("직무능력3차 항목의 최대값은 " + this.dsJikmu3.getColumn(this.dsJikmu3.rowposition, "POINT") + " 입니다.","저장정보","","question");
        		this.dsJikmu3.setColumn(this.dsJikmu3.rowposition, "SCORE", 0);
        		return false;
        	}
        };
        /**********************************************************************
                10. 팝업
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

        this.fn_setCallGwamokPopup = function(strSearchValue)
        {
        	var yyyy = this.divM.form.spnSearchYYYY.value;
        	var semester = this.divM.form.cboSearchHakgi.value;
        	var sabeon = this.divM.form.edtSearchSawonCd.value;
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
                11. 전체 그리드 생성 함수 선언
        ***********************************************************************/
        this.fn_mkGrid = function()
        {
        	this.fn_setObjGridDestroy(this.tab.allscore.form.divAll.form);

        	var objGrid = new Grid();
        	objGrid.init("grdAll", 0, 0, this.tab.allscore.form.divAll.getOffsetWidth(), this.tab.allscore.form.divAll.getOffsetHeight(),null,null);

            this.tab.allscore.form.divAll.addChild("grdAll", objGrid);

        	objGrid.set_autofittype( "col" );
        	objGrid.set_autoenter( "select" );
        	objGrid.createFormat();

        	objGrid.show();

            objGrid.set_binddataset(this.dsAll);

        	objGrid.appendContentsRow("head");
        	objGrid.appendContentsRow("body");

        	for(var i=0; i<25; i++)
        	{
        		objGrid.appendContentsCol();
        	}

        	// 컬럼 사이즈 설정
        	objGrid.setFormatColProperty(0, "size", 30);
        	objGrid.setFormatColProperty(1, "size", 15);
        	objGrid.setFormatColProperty(2, "size", 10);
        	objGrid.setFormatColProperty(3, "size", 20);
        	objGrid.setFormatColProperty(4, "size", 15);
        	objGrid.setFormatColProperty(5, "size", 20);
        	objGrid.setFormatColProperty(6, "size", 10);
        	objGrid.setFormatColProperty(7, "size", 10);
        	objGrid.setFormatColProperty(8, "size", 10);
        	objGrid.setFormatColProperty(9, "size", 20);
        	objGrid.setFormatColProperty(10, "size", 20);
        	objGrid.setFormatColProperty(11, "size", 10);
        	objGrid.setFormatColProperty(12, "size", 10);
        	objGrid.setFormatColProperty(13, "size", 10);
        	objGrid.setFormatColProperty(14, "size", 10);
        	objGrid.setFormatColProperty(15, "size", 10);
        	objGrid.setFormatColProperty(16, "size", 10);
        	objGrid.setFormatColProperty(17, "size", 10);
        	objGrid.setFormatColProperty(18, "size", 10);
        	objGrid.setFormatColProperty(19, "size", 10);
        	objGrid.setFormatColProperty(20, "size", 10);
        	objGrid.setFormatColProperty(21, "size", 10);
        	objGrid.setFormatColProperty(22, "size", 10);
        	objGrid.setFormatColProperty(23, "size", 10);
        	objGrid.setFormatColProperty(24, "size", 10);
        	objGrid.setFormatColProperty(25, "size", 10);

        	var cellNum = [0,1,2,3,4,5,23,24,25];
        	var cellGijun = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

        	// 로우 사이즈 설정
        	objGrid.setRealRowSize(-1, 80);
        	for(var i=0; i<this.dsAll.rowcount; i++)
        	{
        		objGrid.setRealRowSize(i, 30);
        	}

        	objGrid.setCellProperty("head", 0, "text", "학과");
        	objGrid.setCellProperty("body", 0, "text", "bind:DEPT_CD_NM");
        	objGrid.setCellProperty("body", 0, "textAlign", "left");

        	objGrid.setCellProperty("head", 1, "text", "학년");
        	objGrid.setCellProperty("body", 1, "text", "bind:COMP_GRADE_CD_NM");

        	objGrid.setCellProperty("head", 2, "text", "분반");
        	objGrid.setCellProperty("body", 2, "text", "bind:LECTCLASS");

        	objGrid.setCellProperty("head", 3, "text", "학번");
        	objGrid.setCellProperty("body", 3, "text", "bind:STDID");

        	objGrid.setCellProperty("head", 4, "text", "성명");
        	objGrid.setCellProperty("body", 4, "text", "bind:STDID_NM");

        	objGrid.setCellProperty("head", 5, "text", "특이사항");
        	objGrid.setCellProperty("body", 5, "text", "bind:NOTE");
        	objGrid.setCellProperty("body", 5, "textAlign", "left");

        	if(this.dsMaster.getColumn(this.dsMaster.rowposition, "CONFIRM_YN") != "Y")
        	{
        		objGrid.setCellProperty("body", 5, "displaytype", "text");
        		objGrid.setCellProperty("body", 5, "edittype", "text");
        	}

        	for(var i=0; i<this.dsJikmuAuth.rowcount; i++)
        	{
        		if(this.dsJikmuAuth.getColumn(i, "EVALITEM_DIVCD") == "01")
        		{
        			objGrid.setCellProperty("head", 6, "text", "진단\n평가\n(" + this.dsJikmuAuth.getColumn(i, "POINT") + ")");
        			objGrid.setCellProperty("body", 6, "text", "bind:TOTAL_01");
        			cellNum.push(6);
        		}

        		if(this.dsJikmuAuth.getColumn(i, "EVALITEM_DIVCD") == "02")
        		{
        			objGrid.setCellProperty("head", 7, "text", "결석\n시수");
        			objGrid.setCellProperty("body", 7, "text", "bind:ATTEND_CNT02");

        			if(this.dsMaster.getColumn(this.dsMaster.rowposition, "CONFIRM_YN") != "Y")
        			{
        				objGrid.setCellProperty("body", 7, "displaytype", "text");
        				objGrid.setCellProperty("body", 7, "edittype", "text");
        			}

        			cellNum.push(7);

        			objGrid.setCellProperty("head", 8, "text", "출석\n평가\n(" + this.dsJikmuAuth.getColumn(i, "POINT") + ")");
        			objGrid.setCellProperty("body", 8, "text", "bind:TOTAL_02");
        			cellNum.push(8);
        		}

        		if(this.dsJikmuAuth.getColumn(i, "EVALITEM_DIVCD") == "03")
        		{
        			objGrid.setCellProperty("head", 9, "text", "향상대상");
        			objGrid.setCellProperty("body", 9, "text", "bind:IMPRO_EDU_YN");
        			objGrid.setCellProperty("body", 9, "displaytype", "combocontrol");

        			if(this.dsMaster.getColumn(this.dsMaster.rowposition, "CONFIRM_YN") != "Y")
        			{
        				objGrid.setCellProperty("body", 9, "edittype", "combo");
        			}

        			objGrid.setCellProperty("body", 9, "combodataset", "dsYN");
        			objGrid.setCellProperty("body", 9, "combodatacol", "CODE_NM");
        			objGrid.setCellProperty("body", 9, "combocodecol", "CODE");
        			cellNum.push(9);

        			objGrid.setCellProperty("head", 10, "text", "심화대상");
        			objGrid.setCellProperty("body", 10, "text", "bind:DEEP_EDU_YN");
        			objGrid.setCellProperty("body", 10, "displaytype", "combocontrol");

        			if(this.dsMaster.getColumn(this.dsMaster.rowposition, "CONFIRM_YN") != "Y")
        			{
        				objGrid.setCellProperty("body", 10, "edittype", "combo");
        			}

        			objGrid.setCellProperty("body", 10, "combodataset", "dsYN");
        			objGrid.setCellProperty("body", 10, "combodatacol", "CODE_NM");
        			objGrid.setCellProperty("body", 10, "combocodecol", "CODE");
        			cellNum.push(10);

        			objGrid.setCellProperty("head", 11, "text", "향상\n심화\n출석");
        			objGrid.setCellProperty("body", 11, "text", "bind:ATTEND_CNT03");

        			if(this.dsMaster.getColumn(this.dsMaster.rowposition, "CONFIRM_YN") != "Y")
        			{
        				objGrid.setCellProperty("body", 11, "displaytype", "text");
        				objGrid.setCellProperty("body", 11, "edittype", "text");
        			}

        			cellNum.push(11);

        			objGrid.setCellProperty("head", 12, "text", "향상\n심화\n계획\n(" + this.dsJikmuAuth.getColumn(i, "POINT") + ")");
        			objGrid.setCellProperty("body", 12, "text", "bind:TOTAL_03");
        			cellNum.push(12);
        		}

        		if(this.dsJikmuAuth.getColumn(i, "EVALITEM_DIVCD") == "11")
        		{
        			if(this.dsMaster.getColumn(this.dsMaster.rowposition, "NCS_USE_DIVCD") != "3")
        			{
        				objGrid.setCellProperty("head", 13, "text", "직무\n능력\n1차\n(" + this.dsJikmuAuth.getColumn(i, "POINT") + ")");
        				objGrid.setCellProperty("body", 13, "text", "bind:TOTAL_11");
        				cellNum.push(13);
        				this.tab.jikmu1.set_tabbuttonwidth(115);
        			}
        			else
        			{
        				objGrid.setCellProperty("head", 13, "text", "직무\n능력\n1차\n(" + this.dsJikmuAuth.getColumn(i, "POINT") + ")");
        				objGrid.setCellProperty("body", 13, "text", "bind:TOTAL_11");

        				if(this.dsMaster.getColumn(this.dsMaster.rowposition, "CONFIRM_YN") != "Y")
        				{
        					objGrid.setCellProperty("body", 13, "displaytype", "text");
        					objGrid.setCellProperty("body", 13, "edittype", "text");
        				}

        				cellNum.push(13);
        			}
        		}

        		if(this.dsJikmuAuth.getColumn(i, "EVALITEM_DIVCD") == "12")
        		{
        			if(this.dsMaster.getColumn(this.dsMaster.rowposition, "NCS_USE_DIVCD") != "3")
        			{
        				objGrid.setCellProperty("head", 14, "text", "직무\n능력\n2차\n(" + this.dsJikmuAuth.getColumn(i, "POINT") + ")");
        				objGrid.setCellProperty("body", 14, "text", "bind:TOTAL_12");
        				cellNum.push(14);
        				this.tab.jikmu2.set_tabbuttonwidth(115);
        			}
        			else
        			{
        				objGrid.setCellProperty("head", 14, "text", "직무\n능력\n2차\n(" + this.dsJikmuAuth.getColumn(i, "POINT") + ")");
        				objGrid.setCellProperty("body", 14, "text", "bind:TOTAL_12");

        				if(this.dsMaster.getColumn(this.dsMaster.rowposition, "CONFIRM_YN") != "Y")
        				{
        					objGrid.setCellProperty("body", 14, "displaytype", "text");
        					objGrid.setCellProperty("body", 14, "edittype", "text");
        				}

        				cellNum.push(14);
        			}
        		}

        		if(this.dsJikmuAuth.getColumn(i, "EVALITEM_DIVCD") == "13")
        		{
        			if(this.dsMaster.getColumn(this.dsMaster.rowposition, "NCS_USE_DIVCD") != "3")
        			{
        				objGrid.setCellProperty("head", 15, "text", "직무\n능력\n3차\n(" + this.dsJikmuAuth.getColumn(i, "POINT") + ")");
        				objGrid.setCellProperty("body", 15, "text", "bind:TOTAL_13");
        				cellNum.push(15);
        				this.tab.jikmu3.set_tabbuttonwidth(115);
        			}
        			else
        			{
        				objGrid.setCellProperty("head", 15, "text", "직무\n능력\n3차\n(" + this.dsJikmuAuth.getColumn(i, "POINT") + ")");
        				objGrid.setCellProperty("body", 15, "text", "bind:TOTAL_13");

        				if(this.dsMaster.getColumn(this.dsMaster.rowposition, "CONFIRM_YN") != "Y")
        				{
        					objGrid.setCellProperty("body", 15, "displaytype", "text");
        					objGrid.setCellProperty("body", 15, "edittype", "text");
        				}

        				cellNum.push(15);
        			}
        		}

        		if(this.dsJikmuAuth.getColumn(i, "EVALITEM_DIVCD") == "14")
        		{
        			objGrid.setCellProperty("head", 16, "text", "직무\n능력\n4차\n(" + this.dsJikmuAuth.getColumn(i, "POINT") + ")");
        			objGrid.setCellProperty("body", 16, "text", "bind:TOTAL_14");
        			cellNum.push(16);
        			this.tab.jikmu4.set_tabbuttonwidth(115);
        		}

        		if(this.dsJikmuAuth.getColumn(i, "EVALITEM_DIVCD") == "15")
        		{
        			objGrid.setCellProperty("head", 17, "text", "직무\n능력\n5차\n(" + this.dsJikmuAuth.getColumn(i, "POINT") + ")");
        			objGrid.setCellProperty("body", 17, "text", "bind:TOTAL_15");
        			cellNum.push(17);
        			this.tab.jikmu5.set_tabbuttonwidth(115);
        		}

        		if(this.dsJikmuAuth.getColumn(i, "EVALITEM_DIVCD") == "16")
        		{
        			objGrid.setCellProperty("head", 18, "text", "직무\n능력\n6차\n(" + this.dsJikmuAuth.getColumn(i, "POINT") + ")");
        			objGrid.setCellProperty("body", 18, "text", "bind:TOTAL_16");
        			cellNum.push(18);
        			this.tab.jikmu6.set_tabbuttonwidth(115);
        		}

        		if(this.dsJikmuAuth.getColumn(i, "EVALITEM_DIVCD") == "17")
        		{
        			objGrid.setCellProperty("head", 19, "text", "직무\n능력\n7차\n(" + this.dsJikmuAuth.getColumn(i, "POINT") + ")");
        			objGrid.setCellProperty("body", 19, "text", "bind:TOTAL_17");
        			cellNum.push(9);
        			this.tab.jikmu7.set_tabbuttonwidth(115);
        		}

        		if(this.dsJikmuAuth.getColumn(i, "EVALITEM_DIVCD") == "18")
        		{
        			objGrid.setCellProperty("head", 20, "text", "직무\n능력\n8차\n(" + this.dsJikmuAuth.getColumn(i, "POINT") + ")");
        			objGrid.setCellProperty("body", 20, "text", "bind:TOTAL_18");
        			cellNum.push(20);
        			this.tab.jikmu8.set_tabbuttonwidth(120);
        		}

        		if(this.dsJikmuAuth.getColumn(i, "EVALITEM_DIVCD") == "19")
        		{
        			objGrid.setCellProperty("head", 21, "text", "직무\n능력\n9차\n(" + this.dsJikmuAuth.getColumn(i, "POINT") + ")");
        			objGrid.setCellProperty("body", 21, "text", "bind:TOTAL_19");
        			cellNum.push(21);
        			this.tab.jikmu9.set_tabbuttonwidth(115);
        		}

        		if(this.dsJikmuAuth.getColumn(i, "EVALITEM_DIVCD") == "99")
        		{
        			objGrid.setCellProperty("head", 22, "text", "조정\n점수\n(" + this.dsJikmuAuth.getColumn(i, "POINT") + ")");
        			objGrid.setCellProperty("body", 22, "text", "bind:TOTAL_99");

        			if(this.dsMaster.getColumn(this.dsMaster.rowposition, "CONFIRM_YN") != "Y")
        			{
        				objGrid.setCellProperty("body", 22, "displaytype", "text");
        				objGrid.setCellProperty("body", 22, "edittype", "text");

        			}
        			cellNum.push(22);
        		}

        		objGrid.setCellProperty("head", 23, "text", "교무\n총점");
        		objGrid.setCellProperty("body", 23, "text", "bind:TOTAL_SCORE");

        		objGrid.setCellProperty("head", 24, "text", "교무\n등수");
        		objGrid.setCellProperty("body", 24, "text", "bind:RANK");

        		objGrid.setCellProperty("head", 25, "text", "교무\n등급");
        		objGrid.setCellProperty("body", 25, "text", "bind:GRADE");
        	}

        	cellGijun = cellGijun.filter(function(val) {
        		return cellNum.indexOf(val) == -1;
        	});

        	for(var i=0; i<cellGijun.length; i++)
        	{
        		objGrid.setFormatColProperty(cellGijun[i], "size", 0);
        	}
        };

        /**********************************************************************
                12. grid 초기화(동적 생성된 그리드를 삭제)
        ***********************************************************************/
        this.fn_setObjGridDestroy = function(objForm)
        {
        	var arrComp  = objForm.components;
        	var nLength = arrComp.length-1;
        	for(var i=nLength; i>=0; i--)
        	{
        		var objComp = arrComp[i];
        		if(objComp instanceof nexacro.Grid)
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
            this.divM.form.cboSearchGyeYeolHakGwa.addEventHandler("onlbuttondown",this.divM_cboSearchGyeYeolHakGwa_onlbuttondown,this);
            this.divM.form.cboSearchGyeYeolHakGwa.addEventHandler("onitemchanged",this.divM_cboSearchGyeYeolHakGwa_onitemchanged,this);
            this.divM.form.cboSearchGyeYeolHakGwa.addEventHandler("onkeydown",this.divM_cboSearchGyeYeolHakGwa_onkeydown,this);
            this.divM.form.btnSearchGwamokMaster.addEventHandler("onclick",this.divM_btnSearchGwamok_onclick,this);
            this.divM.form.spnSearchYYYY.addEventHandler("onkeydown",this.divM_spnSearchYYYY_onkeydown,this);
            this.divM.form.cboSearchHakgi.addEventHandler("onkeydown",this.divM_cboSearchHakgi_onkeydown,this);
            this.divM.form.btnSearchSawon.addEventHandler("onclick",this.divM_btnSearchSawon_onclick,this);
            this.tab.addEventHandler("onchanged",this.tab_onchanged,this);
            this.tab.allscore.form.stc_09_00.addEventHandler("onclick",this.tab_KSAT_stc_09_00_onclick,this);
            this.tab.allscore.form.btnSimhwaPrint.addEventHandler("onclick",this.tab_allscore_btnSimhwaPrint_onclick,this);
            this.tab.allscore.form.btnReset.addEventHandler("onclick",this.tab_allscore_btnReset_onclick,this);
            this.tab.jikmu1.form.grdJikmu.addEventHandler("onheaddblclick",this.tab_jikmu1_grdJikmu_onheaddblclick,this);
            this.tab.jikmu1.form.stc_09_00.addEventHandler("onclick",this.tab_KSAT_stc_09_00_onclick,this);
            this.tab.jikmu1.form.btnJikmuPrint.addEventHandler("onclick",this.tab_jikmu1_btnJikmuPrint_onclick,this);
            this.tab.jikmu2.form.stc_09_00.addEventHandler("onclick",this.tab_KSAT_stc_09_00_onclick,this);
            this.tab.jikmu2.form.btnJikmuPrint.addEventHandler("onclick",this.tab_jikmu2_btnJikmuPrint_onclick,this);
            this.tab.jikmu2.form.grdJikmu.addEventHandler("onheaddblclick",this.tab_jikmu2_grdJikmu_onheaddblclick,this);
            this.tab.jikmu3.form.stc_09_00.addEventHandler("onclick",this.tab_KSAT_stc_09_00_onclick,this);
            this.tab.jikmu3.form.btnJikmuPrint.addEventHandler("onclick",this.tab_jikmu3_btnJikmuPrint_onclick,this);
            this.tab.jikmu3.form.grdJikmu.addEventHandler("onheaddblclick",this.tab_jikmu3_grdJikmu_onheaddblclick,this);
            this.tab.jikmu4.form.stc_09_00.addEventHandler("onclick",this.tab_KSAT_stc_09_00_onclick,this);
            this.tab.jikmu4.form.grdJikmu.addEventHandler("onheaddblclick",this.tab_jikmu4_grdJikmu_onheaddblclick,this);
            this.tab.jikmu5.form.stc_09_00.addEventHandler("onclick",this.tab_KSAT_stc_09_00_onclick,this);
            this.tab.jikmu5.form.btnJikmuPrint.addEventHandler("onclick",this.tab_jikmu5_btnJikmuPrint_onclick,this);
            this.tab.jikmu5.form.grdJikmu.addEventHandler("onheaddblclick",this.tab_jikmu5_grdJikmu_onheaddblclick,this);
            this.tab.jikmu6.form.stc_09_00.addEventHandler("onclick",this.tab_KSAT_stc_09_00_onclick,this);
            this.tab.jikmu6.form.btnJikmuPrint.addEventHandler("onclick",this.tab_jikmu6_btnJikmuPrint_onclick,this);
            this.tab.jikmu6.form.grdJikmu.addEventHandler("onheaddblclick",this.tab_jikmu6_grdJikmu_onheaddblclick,this);
            this.tab.jikmu7.form.stc_09_00.addEventHandler("onclick",this.tab_KSAT_stc_09_00_onclick,this);
            this.tab.jikmu7.form.btnJikmuPrint.addEventHandler("onclick",this.tab_jikmu7_btnJikmuPrint_onclick,this);
            this.tab.jikmu7.form.grdJikmu.addEventHandler("onheaddblclick",this.tab_jikmu7_grdJikmu_onheaddblclick,this);
            this.tab.jikmu8.form.stc_09_00.addEventHandler("onclick",this.tab_KSAT_stc_09_00_onclick,this);
            this.tab.jikmu8.form.btnJikmuPrint.addEventHandler("onclick",this.tab_jikmu8_btnJikmuPrint_onclick,this);
            this.tab.jikmu8.form.grdJikmu.addEventHandler("onheaddblclick",this.tab_jikmu8_grdJikmu_onheaddblclick,this);
            this.tab.jikmu9.form.stc_09_00.addEventHandler("onclick",this.tab_KSAT_stc_09_00_onclick,this);
            this.tab.jikmu9.form.btnJikmuPrint.addEventHandler("onclick",this.tab_jikmu9_btnJikmuPrint_onclick,this);
            this.tab.jikmu9.form.grdJikmu.addEventHandler("onheaddblclick",this.tab_jikmu9_grdJikmu_onheaddblclick,this);
            this.tab.hyangsang.form.stc_09_00.addEventHandler("onclick",this.tab_KSAT_stc_09_00_onclick,this);
            this.tab.hyangsang.form.btnHyangsangPrint.addEventHandler("onclick",this.tab_hyangsang_btnHyangsangPrint_onclick,this);
            this.tab.hyangsang.form.grdJikmu.addEventHandler("onheaddblclick",this.tab_hyangsang_grdJikmu_onheaddblclick,this);
            this.grdDetail.addEventHandler("oncellclick",this.grdDetail_oncellclick,this);
            this.grdDetail.addEventHandler("onheaddblclick",this.grdDetail_onheaddblclick,this);
            this.dsMaster.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.ds_input.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
            this.dsAll.addEventHandler("oncolumnchanged",this.dsAll_oncolumnchanged,this);
            this.dsJikmu1.addEventHandler("onvaluechanged",this.dsJikmu1_onvaluechanged,this);
            this.dsJikmu2.addEventHandler("onvaluechanged",this.dsJikmu2_onvaluechanged,this);
            this.dsJikmu3.addEventHandler("onvaluechanged",this.dsJikmu3_onvaluechanged,this);
        };
        this.loadIncludeScript("UC01_2122201_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
