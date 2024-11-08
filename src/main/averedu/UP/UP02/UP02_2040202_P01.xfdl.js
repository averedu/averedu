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
            this.set_titletext("교원자격사정처리");
            if (Form == this.constructor)
            {
                this._setFormPosition(510,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"JOLEOP_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"JOLEOP_HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"CHWIDEUK_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SAJEONG_GB\" type=\"STRING\" size=\"256\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"256\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster", this);
            obj.set_preload("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"IN_HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"IN_HAKGWA_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"IN_JOLEOP_YYYY\" type=\"STRING\" size=\"14\"/><Column id=\"IN_JOLEOP_HAKGI\" type=\"STRING\" size=\"15\"/><Column id=\"IN_CHWIDEUK_DT\" type=\"STRING\" size=\"14\"/><Column id=\"IN_HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"DAESANGJA_CNT\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgi", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REF_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input1", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"HAKBEON_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakbeon", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"256\"/><Column id=\"CAMPUS_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"DAEHAK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DAEHAK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGONG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"256\"/><Column id=\"HAKNYEON_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JINGEUP_HAKNYEON\" type=\"STRING\" size=\"256\"/><Column id=\"JINGEUP_SYS_SAJEONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JINGEUP_ADMIN_SAJEONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"BUNBAN\" type=\"STRING\" size=\"256\"/><Column id=\"BUNBAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKSAENG_ENM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKSAENG_CNM\" type=\"STRING\" size=\"256\"/><Column id=\"RES_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKJEOK_STCD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKJEOK_SANGTAE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BYEONDONG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BYEONDONG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BYEONDONG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"JIDOGYOSU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JIDOGYOSU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKSEOKSA_TONGHAPGWAJEONG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKNYEONJE_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"GENDER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GENDER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GUKJEOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GYOJIK_ISU_YN\" type=\"STRING\" size=\"256\"/><Column id=\"GYOJIK_POGI_YN\" type=\"STRING\" size=\"256\"/><Column id=\"GYOJIK_POGI_DT\" type=\"STRING\" size=\"256\"/><Column id=\"GYOJIK_POGI_SAYU\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_HAKJEOM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"OEGUKIN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DONGPO_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BALSONGJUSO_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"HP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"POST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR1\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"PWD\" type=\"STRING\" size=\"256\"/><Column id=\"BOHOJA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BOHOJA_GWANGYE_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"BOHOJA_TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BOHOJA_HP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BOHOJA_POST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BOHOJA_ADDR1\" type=\"STRING\" size=\"256\"/><Column id=\"BOHOJA_ADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"BOHOJA_JIKEOP\" type=\"STRING\" size=\"256\"/><Column id=\"IPHAK_DT\" type=\"STRING\" size=\"256\"/><Column id=\"IPHAK_HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GOGYOGYEYEOL_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"CHULSINGOGYO_JOLEOP_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"CHULSINGOGYO_JOLEOP_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CHULSINGOGYO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHULSINGOGYO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NEIS_GOGYO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHULSINGOGYO_GUKJEOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHULSINDAEHAK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHULSINDAEHAK_HAKGWA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHULSINDAEHAK_JOLEOP_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"CHULSINDAEHAK_JOLEOP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"DAEHAK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGWONNAEOE_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"IPHAK_JEONHYEONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"IPHAK_TYCD\" type=\"STRING\" size=\"256\"/><Column id=\"IPHAK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"PYEONIP_HAKNYEON\" type=\"STRING\" size=\"256\"/><Column id=\"JOLEOP_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"JOLEOP_HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"JOLEOP_DT\" type=\"STRING\" size=\"256\"/><Column id=\"JOLEOP_HOETSU\" type=\"STRING\" size=\"256\"/><Column id=\"HAKWI_DEUNGROK_NO1\" type=\"STRING\" size=\"256\"/><Column id=\"HAKWI_DEUNGROK_NO2\" type=\"STRING\" size=\"256\"/><Column id=\"HAKWI_CD1\" type=\"STRING\" size=\"256\"/><Column id=\"HAKWI_CD2\" type=\"STRING\" size=\"256\"/><Column id=\"BALGEUP_BULGA_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BALGEUP_BULGA_SAYU\" type=\"STRING\" size=\"256\"/><Column id=\"BALGEUP_BULGA_DT\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgwa", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSajeongCnt", this);
            obj.set_preload("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BALGEUP_CNT\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_09_00","10","10","195","22",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("교직자격사정처리");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01_00_00_00","0","0",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01_00","0","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01_00_00",null,"0","10",null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01_00_00_00_00","0",null,null,"10","0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("divInput","10","36",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("div_WF_Outline");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stt_joleopYyyy","0","9","105","20",null,null,null,null,null,null,this.divInput.form);
            obj.set_taborder("0");
            obj.set_text("졸업년도/학기");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divInput.addChild(obj.name, obj);

            obj = new Spin("spn_joleopYyyy","115","9","100","20",null,null,null,null,null,null,this.divInput.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            this.divInput.addChild(obj.name, obj);

            obj = new Combo("cbo_joleopHakgi","218","9","100","20",null,null,null,null,null,null,this.divInput.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsHakgi");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("REF_2");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_index("-1");
            this.divInput.addChild(obj.name, obj);

            obj = new Static("stt_chwideukDt","0","39","105","20",null,null,null,null,null,null,this.divInput.form);
            obj.set_taborder("3");
            obj.set_text("취득일자");
            obj.getSetter("onitemchanged").set("divSearch_cbo_jagyeokjongbyeolCd_onitemchanged");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divInput.addChild(obj.name, obj);

            obj = new Calendar("cal_chwideukDt","115","39","100","20",null,null,null,null,null,null,this.divInput.form);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            this.divInput.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","0","0",null,"9","0",null,null,null,null,null,this.divInput.form);
            obj.set_taborder("5");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divInput.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","296",null,null,null,null,null,null,this.divInput.form);
            obj.set_taborder("6");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divInput.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_02","0","30",null,"9","0",null,null,null,null,null,this.divInput.form);
            obj.set_taborder("7");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 6pt/normal \"Arial\"");
            this.divInput.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_02_00","0","59",null,"9","0",null,null,null,null,null,this.divInput.form);
            obj.set_taborder("8");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 6pt/normal \"Arial\"");
            this.divInput.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_02_00_00","0","88",null,"9","0",null,null,null,null,null,this.divInput.form);
            obj.set_taborder("9");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 6pt/normal \"Arial\"");
            this.divInput.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","105","0","10","296",null,null,null,null,null,null,this.divInput.form);
            obj.set_taborder("10");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divInput.addChild(obj.name, obj);

            obj = new Static("stt_chwideukDt00","0","68","105","20",null,null,null,null,null,null,this.divInput.form);
            obj.set_taborder("11");
            obj.set_text("사정처리구분");
            obj.getSetter("onitemchanged").set("divSearch_cbo_jagyeokjongbyeolCd_onitemchanged");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divInput.addChild(obj.name, obj);

            obj = new Radio("rdoSajeongGb","115","68","150","20",null,null,null,null,null,null,this.divInput.form);
            obj.set_taborder("12");
            obj.set_direction("vertical");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divInput_form_rdoSajeongGb_innerdataset = new nexacro.NormalDataset("divInput_form_rdoSajeongGb_innerdataset", obj);
            divInput_form_rdoSajeongGb_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">학과별</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">학번/성명</Col></Row></Rows>");
            obj.set_innerdataset(divInput_form_rdoSajeongGb_innerdataset);
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divInput.addChild(obj.name, obj);

            obj = new Grid("grdMaster","115","97","305","170",null,null,null,null,null,null,this.divInput.form);
            obj.set_taborder("13");
            obj.set_binddataset("dsMaster");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"140\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"none\"/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" text=\"학과\"/><Cell col=\"3\" text=\"대상인원수\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" editmaxlength=\"1\"/><Cell col=\"1\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"2\" text=\"bind:IN_HAKGWA_NM\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:DAESANGJA_CNT\"/></Band></Format></Formats>");
            this.divInput.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_02_00_00_00","0","267",null,"9","0",null,null,null,null,null,this.divInput.form);
            obj.set_taborder("14");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 6pt/normal \"Arial\"");
            this.divInput.addChild(obj.name, obj);

            obj = new Static("stt_chwideukDt00_00","0","276","105","20",null,null,null,null,null,null,this.divInput.form);
            obj.set_taborder("15");
            obj.set_text("학번/성명");
            obj.getSetter("onitemchanged").set("divSearch_cbo_jagyeokjongbyeolCd_onitemchanged");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divInput.addChild(obj.name, obj);

            obj = new Edit("edtSearchHakbeon","115","276","120","20",null,null,null,null,null,null,this.divInput.form);
            obj.set_taborder("16");
            obj.set_enable("false");
            obj.set_maxlength("3");
            this.divInput.addChild(obj.name, obj);

            obj = new Button("btnHakbeon","238","276","22","20",null,null,null,null,null,null,this.divInput.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_PopSrch");
            this.divInput.addChild(obj.name, obj);

            obj = new Edit("edtSearchName","263","276","120","20",null,null,null,null,null,null,this.divInput.form);
            obj.set_taborder("18");
            obj.set_enable("true");
            this.divInput.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_02_00_00_00_00","0","296",null,"20","0",null,null,null,null,null,this.divInput.form);
            obj.set_taborder("19");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 6pt/normal \"Arial\"");
            this.divInput.addChild(obj.name, obj);

            obj = new Static("Static02","10","320","425","20",null,null,null,null,null,null,this.divInput.form);
            obj.set_taborder("20");
            obj.set_text("※ 대상인원수는 졸업년도학기의 졸업대상자 중 교직학과별 학생수이고");
            obj.set_cssclass("font_red");
            this.divInput.addChild(obj.name, obj);

            obj = new Static("Static03","10","345","410","20",null,null,null,null,null,null,this.divInput.form);
            obj.set_taborder("21");
            obj.set_text("　 교직이수 미승인 학생은 제외됩니다.(교직이수관리 화면에서 확인)");
            obj.set_cssclass("font_red");
            this.divInput.addChild(obj.name, obj);

            obj = new Static("Static00","10","370","340","20",null,null,null,null,null,null,this.divInput.form);
            obj.set_taborder("22");
            obj.set_text("※ 학과별 처리시 체크한 학과만 교직사정처리 됩니다.");
            obj.set_cssclass("font_red");
            this.divInput.addChild(obj.name, obj);

            obj = new Static("Static01","10","395","340","20",null,null,null,null,null,null,this.divInput.form);
            obj.set_taborder("23");
            obj.set_text("※ 학번/성명을 입력하면 개별 처리가 됩니다.");
            obj.set_cssclass("font_red");
            this.divInput.addChild(obj.name, obj);

            obj = new Button("btnSajeong","170","425","80","20",null,null,null,null,null,null,this.divInput.form);
            obj.set_taborder("24");
            obj.set_text("사정처리");
            obj.set_cssclass("btn_WF_Crud");
            this.divInput.addChild(obj.name, obj);

            obj = new Button("btn_close","259","425","50","20",null,null,null,null,null,null,this.divInput.form);
            obj.set_taborder("25");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_Crud");
            this.divInput.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","28",null,"8","0",null,null,null,null,null,this);
            obj.set_taborder("6");
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
            obj = new Layout("default","",510,500,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divInput.form.spn_joleopYyyy","value","ds_input","JOLEOP_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divInput.form.cbo_joleopHakgi","value","ds_input","JOLEOP_HAKGI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divInput.form.cal_chwideukDt","value","ds_input","CHWIDEUK_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divInput.form.rdoSajeongGb","value","ds_input","SAJEONG_GB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divInput.form.edtSearchHakbeon","value","ds_input","HAKBEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divInput.form.edtSearchName","value","ds_input","HAKSAENG_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
            this._addPreloadList("data","","dsSajeongCnt");
        };
        
        // User Script
        this.registerScript("UP02_2040202_P01.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UP02_2040202_P01.xfdl(교원자격사정처리)
        * 작 성         일 명: 정진호
        * 작 성         일 자: 2022/08/23
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
        this.form_onload = function(obj, e) {
            //폼에 공통으로 로드시 사용하는 함수.
            this.gfn_formOnload(obj.e);
            //사용자 화면  초기화 함수
            this.fn_formInit();

        	if (!this.gfn_isNull(this.getOwnerFrame().joleopYyyy)) {
        		this.divInput.form.spn_joleopYyyy.set_value(this.getOwnerFrame().joleopYyyy);
        	}

        	if (!this.gfn_isNull(this.getOwnerFrame().joleopHakgi)) {
        		this.divInput.form.cbo_joleopHakgi.set_value(this.getOwnerFrame().joleopHakgi);
        	}

        	this.divInput.form.cal_chwideukDt.set_value(objApp.gds_SystemDate.getColumn(0, "YYYYMMDD"));
        	this.divInput.form.rdoSajeongGb.set_value("1");

        	this.fn_setSajeongGb(this.divInput.form.rdoSajeongGb.value);
        };

        /**
         * 기능 : 폼언 로드(닫기전 셋팅)  Setting
         */
        this.form_onclose = function(obj, e) {

        };

        /**********************************************************************
                04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        this.fn_formInit = function() {
            var strDs    = "dsHakgi";	// 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00022"; 	// 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "X"; 		// 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = ""; 			// 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId    = "Init";
        	// gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
        	// 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.gfn_CmmnMultiComboLoad(strDs, strLgcd, strComb, strOptn, svcId);
        };

        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId, nErrorCode, sErrorMsg) {
            if(nErrorCode != 0) {
                this.gfn_alert(sErrorMsg, "에러정보", "", "error");
                return false;
            } else {
                /*sSvcId (Transaction Id)*/
                switch(sSvcId) {
        			case "SajeongCnt":
        				this.fn_PostSajeongCnt();
        				break;
        			case "Gyojiksajeong":
        				this.fn_PostGyojiksajeong();
        				break;
                    default:
                        break;
                }
            }
        };

        //Popup callback영역
        this.fn_popupCallback = function(strId, strVal) {
        	switch(strId) {
        		case "hakbeon" :
        			var sRtn = strVal.split(",");
        			if(sRtn[0] != "CLOSE") {
        				this.ds_input.set_enableevent(false);
        				this.ds_input.setColumn(0, "HAKBEON", 		sRtn[0]);
        				this.ds_input.setColumn(0, "HAKSAENG_NM",	sRtn[1]);
        				this.ds_input.set_enableevent(true);
        			}
        			break;
        		default:
                    break;
        	}
         };

        /**********************************************************************
                05. 조회 함수 선언(마스터 함수)
        ***********************************************************************/
        /**********************************************************************
                06. 추가 함수 선언
        ***********************************************************************/
        /**********************************************************************
                07. 삭제 함수 선언
        ***********************************************************************/
        /**********************************************************************
                08. 저장 함수 선언
        ***********************************************************************/
        /**********************************************************************
                09. 초기화
        ***********************************************************************/
        /**********************************************************************
                10. 출력 함수 선언
        ***********************************************************************/
        /**********************************************************************
                11. ExcelDnwn 엑셀로 출력
        ***********************************************************************/
        /**********************************************************************
                12. 팝업
        ***********************************************************************/
        /**
         * 학생 검색 팝업
         */
        this.fn_setCallHakbeonPopup = function(strSearchValue) {
        	this.dsHakbeon.clearData();
        	this.ds_input1.setColumn(0, "HAKBEON_NM", strSearchValue);

        	if(!this.gfn_isNull(strSearchValue)) {
        		var strSvc 		= "hakbeon";
        		var strUrl 		= "/prj/com/Retrieve_P04.do";
        		var strInDs  	= "ds_input=ds_input1";
        		var strOutDs 	= "dsHakbeon=dsMaster";
        		var strArg 		= "";
        		var GBV_MENUID	= objApp.gv_cutPrgId;
        		if(!this.gfn_isNull(this.gfn_trim(GBV_MENUID))) {
        			strArg     += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
        		}
        		var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        		var strASync    = false;			//생략이나 공백일시에는 ASync=true,싱크시는 false로
        		this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        	}

        	if(this.dsHakbeon.rowcount == 1) {
        		this.ds_input.setColumn(0, "HAKBEON", 		this.dsHakbeon.getColumn(0, "HAKBEON"));
        		this.ds_input.setColumn(0, "HAKSAENG_NM",	this.dsHakbeon.getColumn(0, "HAKSAENG_NM"));
        	} else {
        		var oArg 			= {hakbeonNm: strSearchValue};
        		var oOption 		= {};
        		var sPopupCallBack 	= "fn_popupCallback";
        		this.gfn_openPopup("hakbeon", "com::COMM_P04.xfdl", oArg, sPopupCallBack, oOption);
        	}
        };

        /**********************************************************************
                13. Get, Set Method
        ***********************************************************************/
        /**********************************************************************
                14. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 체크
         */
        this.grdMaster_onheadclick = function(obj, e) {
            if(e.cell == this.grdMaster.getBindCellIndex("body", "CHK")) {
                this.gfn_checkAll(obj, e);
            }
        };

        /**
         *      그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj, e) {
            if(e.cell != this.grdMaster.getBindCellIndex("body", "CHK") && e.cell != 1) {
                this.gfn_gridSort(obj, e);
            }
        };

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function() {
            //return this.gfn_isUpdate(this.dsMaster);
        };

        /**
          * 사정처리구분에 따라
         **/
        this.fn_setSajeongGb = function(sajeongGb) {
        	this.divInput.form.grdMaster.set_readonly(true);
        	this.divInput.form.edtSearchName.set_readonly(true);
        	this.divInput.form.btnHakbeon.set_enable(false);

        	if (sajeongGb == "1") { // 학과별
        		this.divInput.form.grdMaster.set_readonly(false);
        		// 사정처리할 교직학과 조회
        		this.fn_searchSajeongHakgwa();
        		// 학번/성명 초기화
        		this.divInput.form.edtSearchHakbeon.set_value(null);
        		this.divInput.form.edtSearchName.set_value(null);
        	} else { // 학생별
        		this.divInput.form.edtSearchName.set_readonly(false);
        		this.divInput.form.btnHakbeon.set_enable(true);
        		this.divInput.form.edtSearchName.setFocus();
        		// 교직학과 초기화
        		this.dsMaster.clearData();
        	}
        }

        /**
          * 교직학과조회
         **/
        this.fn_searchSajeongHakgwa = function() {
            var strSvc      = "SajeongHakgwa";
            var strUrl      = "/prj/UP/UP02/Retrieve_2040202_P01List.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsMaster=dsMaster";
            var strArg      = "";
            var GBV_MENUID	= objApp.gv_cutPrgId;
            if(!this.gfn_isNull(this.gfn_trim(GBV_MENUID))) {
            	strArg     += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        };

        this.divInput_rdoSajeongGb_onitemchanged = function(obj, e) {
        	this.fn_setSajeongGb(e.postvalue);
        };

        /**
          * 학생검색 버튼 클릭
         **/
        this.divInput_btnHakbeon_onclick = function(obj, e) {
        	this.fn_searchHakbeon();
        };

        /**
          * 학생검색 엔터 입력
         **/
        this.divInput_edtSearchName_onkeyup = function(obj, e) {
        	if (e.keycode == 13) {
        		if (this.gfn_isNull(obj.value)) {
        			this.divInput.form.edtSearchHakbeon.set_value("");
        		} else {
        			this.fn_searchHakbeon();
        		}
        	}
        };

        /**
          * 학생검색 포커스 나갈때
         **/
        this.divInput_edtSearchName_onkillfocus = function(obj, e) {
        	if (this.gfn_isNull(this.divInput.form.edtSearchName.value)) {
        		this.divInput.form.edtSearchHakbeon.set_value("");
        	}
        };

        /**
          * 학생검색 실행
         **/
        this.fn_searchHakbeon = function() {
        	if (this.gfn_isNull(this.divInput.form.edtSearchName.value)) {
        		this.alert("학번 또는 성명을 입력하세요.");
        		this.divInput.form.edtSearchName.setFocus();
        		return;
        	}

        	var name = this.divInput.form.edtSearchName.value;
        	this.fn_setCallHakbeonPopup(name);
        }

        this.divInput_btnSajeong_onclick = function(obj, e) {
        	if (this.gfn_isNull(this.divInput.form.spn_joleopYyyy.value)) {
        		this.alert("졸업년도를 입력하세요");
        		return;
        	}

        	if (this.gfn_isNull(this.divInput.form.cbo_joleopHakgi.value)) {
        		this.alert("졸업학기를 선택하세요");
        		return;
        	}

        	if (this.gfn_isNull(this.divInput.form.cal_chwideukDt.value)) {
        		this.alert("취득일자를 입력하세요.");
        		return;
        	}

        	if (this.divInput.form.rdoSajeongGb.value == "1") {
        		var cnt = this.dsMaster.getCaseCount("CHK == '1'");
        		if (cnt == 0) {
        			this.alert("선택된 학과가 없습니다.");
        			return;
        		}
        	} else {
        		var hakbeon = this.divInput.form.edtSearchHakbeon.value;
        		if (this.gfn_isNull(hakbeon)) {
        			this.alert("학번을 검색하세요.")
        			this.divInput.form.edtSearchName.setFocus();
        			return;
        		}
        	}

        	// 교직사정 체크
        	this.fn_count();
        };

        this.fn_count = function() {
            var strSvc      = "SajeongCnt";
            var strUrl      = "/prj/UP/UP02/Count_2040202_P01List.do";
            var strInDs     = "ds_input=ds_input:a ";
                strInDs    += "dsMaster=dsMaster:u";
            var strOutDs    = "dsSajeongCnt=dsMaster";
            var strArg      = "";
            var GBV_MENUID	= objApp.gv_cutPrgId;
            if(!this.gfn_isNull(this.gfn_trim(GBV_MENUID))) {
            	strArg     += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        }

        this.fn_PostSajeongCnt = function() {
        	var txt		= "졸업년도학기 : " + this.divInput.form.spn_joleopYyyy.value + " - " + this.divInput.form.cbo_joleopHakgi.text;
        	var txt2 	= this.divInput.form.spn_joleopYyyy.value + " - " + this.divInput.form.cbo_joleopHakgi.text;

        	// 처리년도학기의 졸업대상자 정보가 있는지
        	if (this.dsSajeongCnt.rowcount == 0) {
        		this.alert(txt + " 졸업대상자 정보가 없습니다.\n먼저 졸업대상자를 생성하세요.");
        		return;
        	}

        	// 교원자격증 발급정보가 있는지
        	if (this.dsSajeongCnt.getColumn(0, "BALGEUP_CNT") > 0) {
        		this.alert(txt2 + " 교원자격 취득자 중 교원자격증 발급내역이 있는 학생이 있습니다.\n교직사정처리를 진행할 수 없습니다.");
        		return;
        	}

        	txt += "\n　　취득일자 : " + this.divInput.form.cal_chwideukDt.text;
        	var strHakgwaArr = "";
        	for (var i = 0; i < this.dsMaster.rowcount; i++) {
        		if (this.dsMaster.getColumn(i, "CHK") == "1") {
        			if (this.gfn_isNull(str)) {
        				strHakgwaArr += this.dsMaster.getColumn(i, "IN_HAKGWA_NM");
        			} else {
        				strHakgwaArr += ", " + this.dsMaster.getColumn(i, "IN_HAKGWA_NM");
        			}
        		}
        	}

        	if (this.divInput.form.rdoSajeongGb.value == "1") {
        		txt += "\n　　처리학과 : " + strHakgwaArr;
        	} else {
        		txt += "\n　　학번성명 : " + this.divInput.form.edtSearchHakbeon.value + " " + this.divInput.form.edtSearchName.value;
        	}

        	var confirmMsg = txt + "\n\n(으)로 교직사정처리하시겠습니까?\n\n교직사정데이터가 존재하면 삭제 후 다시 사정처리됩니다.";
            var result = this.gfn_confirm(confirmMsg, "사정처리", "", "question");
            if (result == 0) return;

        	if (this.divInput.form.rdoSajeongGb.value == "1") {
        		for (var i = 0; i < this.dsMaster.rowcount; i++) {
        			if (this.dsMaster.getColumn(i, "CHK") == "1") {
        				this.dsMaster.setColumn(i, "IN_JOLEOP_YYYY", 	this.divInput.form.spn_joleopYyyy.value);
        				this.dsMaster.setColumn(i, "IN_JOLEOP_HAKGI", 	this.divInput.form.cbo_joleopHakgi.value);
        				this.dsMaster.setColumn(i, "IN_CHWIDEUK_DT", 	this.divInput.form.cal_chwideukDt.value);
        			}
        		}
        	}

        	this.fn_saveGyojiksajeong();
        }

        this.fn_saveGyojiksajeong = function() {
        	var sajeongGb		= this.divInput.form.rdoSajeongGb.value;
            var strSvc      	= "Gyojiksajeong";
        	if (sajeongGb == "1") {
        		var strUrl		= "/prj/UP/UP02/Save_2040202_HakgwaList.do";
        		var strInDs     = "ds_input=ds_input:a ";
        			strInDs    += "dsMaster=dsMaster:u";
        	} else {
        		var strUrl      = "/prj/UP/UP02/Save_2040202_HaksaengList.do";
        		var strInDs     = "ds_input=ds_input";
        	}
            var strOutDs    	= "";
            var strArg      	= "";
            var GBV_MENUID		= objApp.gv_cutPrgId;
            if(!this.gfn_isNull(this.gfn_trim(GBV_MENUID))) {
            	strArg         += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack 	= "fn_callBack";	//공백일시 기본 fn_callBack
            var strASync    	= true;             //샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        }

        this.fn_PostGyojiksajeong = function() {
        	this.alert("교직사정처리가 완료되었습니다.");
        }

        this.divInput_btn_close_onclick = function(obj, e) {
        	this.close("CLOSE");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.Static01_01_00_00_00_01_00_00_00.addEventHandler("onclick",this.Static01_01_00_00_00_01_onclick,this);
            this.Static01_01_00_00_00_01_00.addEventHandler("onclick",this.Static01_01_00_00_00_01_onclick,this);
            this.Static01_01_00_00_00_01_00_00.addEventHandler("onclick",this.Static01_01_00_00_00_01_onclick,this);
            this.Static01_01_00_00_00_01_00_00_00_00.addEventHandler("onclick",this.Static01_01_00_00_00_01_onclick,this);
            this.divInput.form.rdoSajeongGb.addEventHandler("onitemchanged",this.divInput_rdoSajeongGb_onitemchanged,this);
            this.divInput.form.grdMaster.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
            this.divInput.form.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.divInput.form.grdMaster.addEventHandler("oncellclick",this.grdMaster_oncellclick,this);
            this.divInput.form.grdMaster.addEventHandler("onselectchanged",this.grdMaster_onselectchanged,this);
            this.divInput.form.btnHakbeon.addEventHandler("onclick",this.divInput_btnHakbeon_onclick,this);
            this.divInput.form.edtSearchName.addEventHandler("onkillfocus",this.divInput_edtSearchName_onkillfocus,this);
            this.divInput.form.edtSearchName.addEventHandler("onkeyup",this.divInput_edtSearchName_onkeyup,this);
            this.divInput.form.btnSajeong.addEventHandler("onclick",this.divInput_btnSajeong_onclick,this);
            this.divInput.form.btn_close.addEventHandler("onclick",this.divInput_btn_close_onclick,this);
        };
        this.loadIncludeScript("UP02_2040202_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
