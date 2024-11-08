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
            this.set_titletext("성적");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsChongSeongjeok", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"SINCHEONG_HAKGISU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"ISU_HAKGISU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SINCHEONG_GWAMOKSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHWIDEUK_GWAMOKSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYOYANG_ISU_HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEONGONG_ISU_HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GONGTONG_ISU_HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYOJIK_ISU_HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYOYANG_JEOMSUGYE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEONGONG_JEOMSUGYE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GONGTONG_JEOMSUGYE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYOJIK_JEOMSUGYE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYOYANG_JEOMSU_AVG\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEONGONG_JEOMSU_AVG\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GONGTONG_JEOMSU_AVG\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYOJIK_JEOMSU_AVG\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SINCHEONG_HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHWIDEUK_HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PYEONIPINJEONG_HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PYEONGJEOMGYE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PYEONGJEOM_AVG\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEOMSUGYE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEOMSU_AVG\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HAKGWA_INWONSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HAKGWA_SEOKCHA\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYOYANG_PYEONGJEOM_AVG\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEONGONG_PYEONGJEOM_AVG\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GONGTONG_PYEONGJEOM_AVG\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYOJIK_PYEONGJEOM_AVG\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BIGO\" type=\"STRING\" size=\"500\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgiSeongjeok", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"YYYY_HAKGI\" type=\"STRING\" size=\"65532\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"SINCHEONG_GWAMOKSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHWIDEUK_GWAMOKSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SINCHEONG_HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHWIDEUK_HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PYEONGJEOMGYE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PYEONGJEOM_AVG\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEOMSUGYE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEOMSU_AVG\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYEONGGO_YN\" type=\"STRING\" size=\"1\"/><Column id=\"GYEONGGO_DT\" type=\"STRING\" size=\"8\"/><Column id=\"YUGEUP_YN\" type=\"STRING\" size=\"1\"/><Column id=\"YUGEUP_SAYU\" type=\"STRING\" size=\"100\"/><Column id=\"HAKGWA_INWONSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HAKGWA_SEOKCHA\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"INJEONG_YN\" type=\"STRING\" size=\"1\"/><Column id=\"HAKNYEON_INWONSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HAKNYEON_SEOKCHA\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BIGO\" type=\"STRING\" size=\"500\"/><Column id=\"SEOKCHA\" type=\"STRING\" size=\"65532\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGwamokSeongjeok", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"YYYY_HAKGI\" type=\"STRING\" size=\"65532\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"GYOGWAMOK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"GYOGWAMOK_NM\" type=\"STRING\" size=\"200\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"BUNBAN\" type=\"STRING\" size=\"3\"/><Column id=\"ISU_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"ISU_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DAMDANG_GYOSU_CD\" type=\"STRING\" size=\"10\"/><Column id=\"SUEOP_SIGAN\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYEOLSEOK_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHULSEOK_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GWAJE_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JUNGGAN_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GIMAL_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GITA_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHWIDEUK_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DEUNGGEUP\" type=\"STRING\" size=\"10\"/><Column id=\"PYEONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SUGANG_GUBUN\" type=\"STRING\" size=\"10\"/><Column id=\"SUGANG_GUBUN_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"JAESUGANG_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"JAESUGANG_HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"JAESUGANG_GYOGWAMOK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DAECHE_GWAJEONG_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"DAECHE_GWAJEONG_HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"DAECHE_GWAJEONG_HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"DAECHE_GWAJEONG_GWAMOK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"SEONGJEOK_INJEONG_YN\" type=\"STRING\" size=\"1\"/><Column id=\"SEONGJEOK_INJEONG_SAYU\" type=\"STRING\" size=\"1\"/><Column id=\"ISU_YN\" type=\"STRING\" size=\"1\"/><Column id=\"BYEONDONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"BYEONDONG_SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"ORG_ISU_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"CHWISO_DT\" type=\"STRING\" size=\"8\"/><Column id=\"BIGO\" type=\"STRING\" size=\"500\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"FLAG\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdChongSeongjeok","10","35",null,"62","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("dsChongSeongjeok");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"178\"/><Column size=\"178\"/><Column size=\"178\"/><Column size=\"178\"/><Column size=\"178\"/><Column size=\"178\"/><Column size=\"178\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"신청학점\"/><Cell col=\"1\" text=\"취득학점\"/><Cell col=\"2\" text=\"편입학점\"/><Cell col=\"3\" text=\"점수총합\"/><Cell col=\"4\" text=\"백분율\"/><Cell col=\"5\" text=\"평점총계\"/><Cell col=\"6\" text=\"평균학점\"/></Band><Band id=\"body\"><Cell displaytype=\"number\" edittype=\"none\" textAlign=\"center\" text=\"bind:SINCHEONG_HAKJEOM\" editmaxlength=\"256\"/><Cell col=\"1\" displaytype=\"number\" edittype=\"none\" textAlign=\"center\" text=\"bind:CHWIDEUK_HAKJEOM\" editmaxlength=\"256\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"none\" textAlign=\"center\" text=\"bind:PYEONIPINJEONG_HAKJEOM\" editmaxlength=\"256\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"none\" textAlign=\"center\" text=\"bind:JEOMSUGYE\" editmaxlength=\"256\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"none\" textAlign=\"center\" text=\"bind:JEOMSU_AVG\" editmaxlength=\"256\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"none\" textAlign=\"center\" text=\"bind:PYEONGJEOMGYE\" editmaxlength=\"256\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"none\" textAlign=\"center\" text=\"bind:PYEONGJEOM_AVG\" editmaxlength=\"256\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09","7","11","85","22",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("총성적");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","7","106","109","22",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("이수별 성적");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Grid("grdHakgiSeongjeok","10","264","600",null,null,"10",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("dsHakgiSeongjeok");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"85\"/><Column size=\"98\"/><Column size=\"108\"/><Column size=\"88\"/><Column size=\"84\"/><Column size=\"82\"/><Column size=\"96\"/><Column size=\"96\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"학년도/학기\"/><Cell col=\"2\" text=\"신청학점\"/><Cell col=\"3\" text=\"취득학점\"/><Cell col=\"4\" text=\"백분율\"/><Cell col=\"5\" text=\"평점총점\"/><Cell col=\"6\" text=\"평점평균\"/><Cell col=\"7\" text=\"석차\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:YYYY_HAKGI\" editmaxlength=\"256\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"none\" textAlign=\"center\" text=\"bind:SINCHEONG_HAKJEOM\" editmaxlength=\"22\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"none\" textAlign=\"center\" text=\"bind:CHWIDEUK_HAKJEOM\" editmaxlength=\"22\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"none\" textAlign=\"center\" text=\"bind:JEOMSU_AVG\" editmaxlength=\"22\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"none\" textAlign=\"center\" text=\"bind:PYEONGJEOMGYE\" editmaxlength=\"22\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"none\" textAlign=\"center\" text=\"bind:PYEONGJEOM_AVG\" editmaxlength=\"22\"/><Cell col=\"7\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:SEOKCHA\" editmaxlength=\"256\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_01","7","239","100","22",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("학기별성적");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Grid("grdGwamokSeongjeok","619","263",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("dsGwamokSeongjeok");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"56\"/><Column size=\"77\"/><Column size=\"140\"/><Column size=\"52\"/><Column size=\"43\"/><Column size=\"43\"/><Column size=\"43\"/><Column size=\"43\"/><Column size=\"43\"/><Column size=\"67\"/><Column size=\"71\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"교과목코드\"/><Cell col=\"2\" text=\"교과목명\"/><Cell col=\"3\" text=\"이수구분\"/><Cell col=\"4\" text=\"학년\"/><Cell col=\"5\" text=\"학점\"/><Cell col=\"6\" text=\"등급\"/><Cell col=\"7\" text=\"백분율\"/><Cell col=\"8\" text=\"평점\"/><Cell col=\"9\" text=\"이수여부\"/><Cell col=\"10\" text=\"재수강여부\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\" edittype=\"none\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:GYOGWAMOK_CD\" editmaxlength=\"10\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:GYOGWAMOK_NM\" editmaxlength=\"256\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:ISU_GBNM\" editmaxlength=\"256\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:HAKNYEON\" editmaxlength=\"1\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:HAKJEOM\" editmaxlength=\"10\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:DEUNGGEUP\" editmaxlength=\"10\"/><Cell col=\"7\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:CHWIDEUK_JEOMSU\" editmaxlength=\"10\"/><Cell col=\"8\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:PYEONGJEOM\" editmaxlength=\"10\"/><Cell col=\"9\" displaytype=\"checkboxcontrol\" edittype=\"none\" textAlign=\"center\" text=\"bind:ISU_YN\" editmaxlength=\"1\"/><Cell col=\"10\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:SUGANG_GUBUN_NM\" editmaxlength=\"256\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_01_00","617","239","100","22",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("과목별성적");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","73","11","233","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt2","102","238","233","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt3","714","239","233","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("Div03","10","130","602","102",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("type02");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","120","20",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("0");
            obj.set_background("powderblue");
            obj.set_border("1px solid #9db9d1");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            obj.set_text("");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static01","0","20","120","20",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("1");
            obj.set_text("전공학점");
            obj.set_background("powderblue");
            obj.set_border("1px solid #9db9d1");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static02","0","40","120","20",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("2");
            obj.set_text("교양학점");
            obj.set_background("powderblue");
            obj.set_border("1px solid #9db9d1");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static03","0","60","120","20",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("3");
            obj.set_text("교직학점");
            obj.set_background("powderblue");
            obj.set_border("1px solid #9db9d1");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static04","0","80","120","20",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("4");
            obj.set_text("공통학점");
            obj.set_background("powderblue");
            obj.set_border("1px solid #9db9d1");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static05","120","0","120","20",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("5");
            obj.set_background("powderblue");
            obj.set_border("1px solid #9db9d1");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            obj.set_text("이수학점");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static06","240","0","120","20",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("6");
            obj.set_background("powderblue");
            obj.set_border("1px solid #9db9d1");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            obj.set_text("점수총점");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static07","360","0","120","20",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("7");
            obj.set_background("powderblue");
            obj.set_border("1px solid #9db9d1");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            obj.set_text("백분율");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static08","480","0","120","20",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("8");
            obj.set_background("powderblue");
            obj.set_border("1px solid #9db9d1");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            obj.set_text("평균학점");
            this.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","120","20","120","20",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("9");
            obj.set_border("1px solid #9db9d1");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            obj.set_displaynulltext("0");
            this.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01","240","20","120","20",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("10");
            obj.set_border("1px solid #9db9d1");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            obj.set_format("###,##0");
            this.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit02","360","20","120","20",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("11");
            obj.set_border("1px solid #9db9d1");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            obj.set_displaynulltext("0");
            this.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit03","480","20","120","20",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("12");
            obj.set_border("1px solid #9db9d1");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            obj.set_displaynulltext("0");
            this.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit04","120","40","120","20",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("13");
            obj.set_border("1px solid #9db9d1");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            obj.set_displaynulltext("0");
            this.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit05","240","40","120","20",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("14");
            obj.set_border("1px solid #9db9d1");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            obj.set_format("###,##0");
            this.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit06","360","40","120","20",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("15");
            obj.set_border("1px solid #9db9d1");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            obj.set_displaynulltext("0");
            this.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit07","480","40","120","20",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("16");
            obj.set_border("1px solid #9db9d1");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            obj.set_displaynulltext("0");
            this.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit08","120","60","120","20",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("17");
            obj.set_border("1px solid #9db9d1");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            obj.set_displaynulltext("0");
            this.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit09","240","60","120","20",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("18");
            obj.set_border("1px solid #9db9d1");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            obj.set_format("###,##0");
            this.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit10","360","60","120","20",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("19");
            obj.set_border("1px solid #9db9d1");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            obj.set_displaynulltext("0");
            this.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit11","480","60","120","20",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("20");
            obj.set_border("1px solid #9db9d1");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            obj.set_displaynulltext("0");
            this.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit12","120","80","120","20",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("21");
            obj.set_border("1px solid #9db9d1");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            obj.set_displaynulltext("0");
            this.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit13","240","80","120","20",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("22");
            obj.set_border("1px solid #9db9d1");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            obj.set_format("###,##0");
            this.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit14","360","80","120","20",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("23");
            obj.set_border("1px solid #9db9d1");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            obj.set_displaynulltext("0");
            this.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit15","480","80","120","20",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("24");
            obj.set_border("1px solid #9db9d1");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            obj.set_displaynulltext("0");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,"0","10","487","0",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","5","496",null,null,"404","304",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","-1","10","477",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","11","28","510","8",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","733","0","100","35",null,null,null,null,null,null,this);
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

            obj = new Static("Static01_00","463","96","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_00","5","123","510","8",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","413","230","100","35",null,null,null,null,null,null,this);
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

            obj = new Static("Static01_01_00_00_00_00_00_00_00_00","11","256","880","8",null,null,null,null,null,null,this);
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

            obj = new Static("Static01_02_00_00_00_00_01","610","250","10","107",null,null,null,null,null,null,this);
            obj.set_taborder("20");
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
            obj.set_description("성적");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item14","cboJuya00","value","ds_input","DAEHAK_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","Div03.form.MaskEdit00","value","dsChongSeongjeok","JEONGONG_ISU_HAKJEOM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div03.form.MaskEdit04","value","dsChongSeongjeok","GYOYANG_ISU_HAKJEOM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div03.form.MaskEdit08","value","dsChongSeongjeok","GYOJIK_ISU_HAKJEOM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div03.form.MaskEdit12","value","dsChongSeongjeok","GONGTONG_ISU_HAKJEOM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div03.form.MaskEdit01","value","dsChongSeongjeok","JEONGONG_JEOMSUGYE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div03.form.MaskEdit05","value","dsChongSeongjeok","GYOYANG_JEOMSUGYE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Div03.form.MaskEdit09","value","dsChongSeongjeok","GYOJIK_JEOMSUGYE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Div03.form.MaskEdit13","value","dsChongSeongjeok","GONGTONG_JEOMSU_AVG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Div03.form.MaskEdit02","value","dsChongSeongjeok","JEONGONG_JEOMSU_AVG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","Div03.form.MaskEdit06","value","dsChongSeongjeok","GYOYANG_JEOMSU_AVG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","Div03.form.MaskEdit10","value","dsChongSeongjeok","GYOJIK_JEOMSU_AVG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","Div03.form.MaskEdit14","value","dsChongSeongjeok","GONGTONG_JEOMSU_AVG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","Div03.form.MaskEdit03","value","dsChongSeongjeok","JEONGONG_PYEONGJEOM_AVG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","Div03.form.MaskEdit07","value","dsChongSeongjeok","GYOYANG_PYEONGJEOM_AVG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","Div03.form.MaskEdit11","value","dsChongSeongjeok","GYOJIK_PYEONGJEOM_AVG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","Div03.form.MaskEdit15","value","dsChongSeongjeok","GONGTONG_PYEONGJEOM_AVG");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsChongSeongjeok");
            this._addPreloadList("data","","dsHakgiSeongjeok");
            this._addPreloadList("data","","dsGwamokSeongjeok");
        };
        
        // User Script
        this.registerScript("US01_2010101_T08.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): US01_2010101_T08.xfdl(총성적 관리(조회))
        * 작 성         일 명: jiback
        * 작 성         일 자: 2021/09/07
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
        };

        /**********************************************************************
                04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {

            this.gfn_clearSortAll(this.grdChongSeongjeok);
        	this.gfn_clearSortAll(this.grdHakgiSeongjeok);
        	this.gfn_clearSortAll(this.grdGwamokSeongjeok);
            if(nErrorCode != 0)
            {
                this.gfn_alert(sErrorMsg,"에러정보","","error");
                return false;
            }else
            {
                /*sSvcId (Transaction Id)*/
                switch(sSvcId)
                {
                    case "Ret":
                            this.fn_PostRet();
                        break;
        			case "DRet":
                            this.fn_PostDRet();
                        break;
                    default:
                        break;
                }
            }
        };

        /**********************************************************************
                05. 조회 함수 선언(마스터 함수)
        ***********************************************************************/
        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_Ret = function(hakbeon)
        {
        	this.ds_input.setColumn(0, "HAKBEON", hakbeon);

            var strSvc      = "Ret";
            var strUrl      = "/prj/US/US01/Retrieve_2010101_T08.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsChongSeongjeok=dsChongSeongjeok ";
        	    strOutDs   += "dsHakgiSeongjeok=dsHakgiSeongjeok ";
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
            this.gfn_getRowCount(this.staRowCnt,this.dsChongSeongjeok);
        	this.gfn_getRowCount(this.staRowCnt2,this.dsHakgiSeongjeok);
        };

        /**********************************************************************
                06. 조회 함수 선언(디테일 함수)
        ***********************************************************************/
        /**
         * 기능 : 디테일 조회 실행
         */
        this.dsHakgiSeongjeok_onrowposchanged = function(obj,e)
        {
        	var pHakgi = '';
        	var hakgi  = this.dsHakgiSeongjeok.getColumn(this.dsHakgiSeongjeok.rowposition, "HAKGI");
        	var flag   = hakgi.substr(hakgi.length-1, 1);

        	if (flag != 'P' && flag != 'I')
        	{
        		flag   = 'N';
        		pHakgi = hakgi;
        	}
        	else
        	{
        		pHakgi = hakgi.substr(0, hakgi.length-1);
        	}

        	this.ds_dInput.setColumn(0, "YYYY", this.dsHakgiSeongjeok.getColumn(this.dsHakgiSeongjeok.rowposition, "YYYY"));
        	this.ds_dInput.setColumn(0, "HAKGI", hakgi);
        	this.ds_dInput.setColumn(0, "HAKBEON", this.ds_input.getColumn(0, "HAKBEON"));
        	this.ds_dInput.setColumn(0, "FLAG", flag);

        	this.fn_DRet();
        };

        this.fn_DRet = function()
        {
            var strSvc      = "DRet";
            var strUrl      = "/prj/US/US01/Retrieve_2010101_T08_Detail.do";
            var strInDs     = "ds_dInput=ds_dInput";
            var strOutDs    = "dsGwamokSeongjeok=dsGwamokSeongjeok";
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
        this.fn_PostDRet = function()
        {
            this.gfn_getRowCount(this.staRowCnt3,this.dsGwamokSeongjeok);
        };

        /**********************************************************************
                06. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 소트정열
         */
        this.grdChongSeongjeok_onheaddblclick = function(obj,e)
        {
        	this.gfn_gridSort(obj,e);
        };

        this.grdHakgiSeongjeok_onheaddblclick = function(obj,e)
        {
        	this.gfn_gridSort(obj,e);
        };

        this.grdGwamokSeongjeok_onheaddblclick = function(obj,e)
        {
        	this.gfn_gridSort(obj,e);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.grdChongSeongjeok.addEventHandler("onheaddblclick",this.grdChongSeongjeok_onheaddblclick,this);
            this.stc_09.addEventHandler("onclick",this.tab_00_Tabpage7_stc_09_onclick,this);
            this.stc_09_00.addEventHandler("onclick",this.tab_00_Tabpage7_stc_09_onclick,this);
            this.grdHakgiSeongjeok.addEventHandler("onheaddblclick",this.grdHakgiSeongjeok_onheaddblclick,this);
            this.stc_09_01.addEventHandler("onclick",this.tab_00_Tabpage7_stc_09_onclick,this);
            this.grdGwamokSeongjeok.addEventHandler("onheaddblclick",this.grdGwamokSeongjeok_onheaddblclick,this);
            this.stc_09_01_00.addEventHandler("onclick",this.tab_00_Tabpage7_stc_09_onclick,this);
            this.dsChongSeongjeok.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsHakgiSeongjeok.addEventHandler("onrowposchanged",this.dsHakgiSeongjeok_onrowposchanged,this);
            this.dsGwamokSeongjeok.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
        };
        this.loadIncludeScript("US01_2010101_T08.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
