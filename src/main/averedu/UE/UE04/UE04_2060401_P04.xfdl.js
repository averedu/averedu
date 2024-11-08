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
            this.set_titletext("장학환수내역(신입생)");
            if (Form == this.constructor)
            {
                this._setFormPosition(820,480);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMaster", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"JANGHAK_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"10\"/><Column id=\"JANGHAK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HWANSU_SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HWANSU_DT\" type=\"STRING\" size=\"8\"/><Column id=\"HWANSU_IPHAK_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HWANSU_SUEOP_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HWANSU_SAYU\" type=\"STRING\" size=\"100\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"100\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JANGHAK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JANGHAK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCheori", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JANGHAKDAESANG_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"JANGHAK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JANGHAK_NM\" type=\"STRING\" size=\"100\"/><Column id=\"USEON_SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYEYEOL_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"10\"/><Column id=\"SUHEOMSAENG_NM\" type=\"STRING\" size=\"40\"/><Column id=\"SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SUHYE_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"JIGEUP_SANGTAE_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"IPHAKGEUM_JIGEUP_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"SUEOPRYO_JIGEUP_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"IPHAKGEUM_JIGEUP_PAMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SUEOPRYO_JIGEUP_PAMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"IPHAK_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SUEOP_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIGEUP_GANEUNG_IPHAK_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIGEUP_GANEUNG_SUEOP_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIGEUP_IPHAK_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIGEUP_SUEOP_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JUNGBOKSAKJE_IPHAK_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JUNGBOKSAKJE_SUEOP_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIGEUP_YN\" type=\"STRING\" size=\"1\"/><Column id=\"JIGEUP_DT\" type=\"STRING\" size=\"8\"/><Column id=\"TOTAL_HWANSU_IPHAK_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOTAL_HWANSU_SUEOP_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BIGO\" type=\"STRING\" size=\"200\"/><Column id=\"JEONHYEONG_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"SEBUJEONHYEONG_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"HAPGYEOK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"SEOKCHA\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHONGDEUNGGEUP\" type=\"STRING\" size=\"10\"/><Column id=\"DEUNGROK_MAGAM_DT\" type=\"STRING\" size=\"8\"/><Column id=\"HWANSU_YN\" type=\"STRING\" size=\"1\"/><Column id=\"GYEOLJE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"GYEOLJE_DT\" type=\"STRING\" size=\"8\"/><Column id=\"RES_NO_1\" type=\"STRING\" size=\"6\"/><Column id=\"DEUNGROK_YN\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_saveInput", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"JIGEUP_IPHAK_AMT\" type=\"STRING\" size=\"100\"/><Column id=\"JIGEUP_SUEOP_AMT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnClose","750",null,"60","25",null,"10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnHwansu","645",null,"100","25",null,"10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("전액환수적용");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","10","10",null,"42","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","-14","9","118","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_text("수험번호/학번");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchSuheomNo","114","9","90","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","47",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","20","0","320","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","104","1","10","37",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01_00","20","31","320","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch","710","8","60","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Crud");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01","204","6","56","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","235","9","48","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_text("성명");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","284","1","10","37",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchHaksaengNm","294","9","90","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_autoselect("true");
            obj.set_password("false");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00","384","6","56","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","417","9","58","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_text("장학명");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","476","1","10","37",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchJanghakNm","486","9","190","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_autoselect("true");
            obj.set_password("false");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Grid("grdMaster","10","98",null,null,"10","172",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj.set_fillareatype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"252\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"환수일자\"/><Cell col=\"2\" text=\"환수입학금\"/><Cell col=\"3\" text=\"환수수업료\"/><Cell col=\"4\" text=\"환수사유\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:HWANSU_DT\" displaytype=\"date\" combodataset=\"DS_BALRYEONG_GBCD\" combocodecol=\"CD\" combodatacol=\"LABEL\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"2\" text=\"bind:HWANSU_IPHAK_AMT\" displaytype=\"number\" calendardateformat=\"yyyy-MM-dd\" textAlign=\"right\"/><Cell col=\"3\" text=\"bind:HWANSU_SUEOP_AMT\" displaytype=\"number\" calendardateformat=\"yyyy-MM-dd\" textAlign=\"right\"/><Cell col=\"4\" text=\"bind:HWANSU_SAYU\" textAlign=\"left\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" text=\"합 계\"/><Cell col=\"2\" text=\"expr:dataset.getSum(&apos;HWANSU_IPHAK_AMT&apos;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"3\" text=\"expr:dataset.getSum(&apos;HWANSU_SUEOP_AMT&apos;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","210","52","100","45",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("↑\r\n45\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","10","73","115","22",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("장학환수 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","123","72","93","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","0","90",null,"8","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"65","55","25","10",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,"0","10",null,"0","0",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","0",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00","0",null,null,"10","0","0",null,null,null,null,this);
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

            obj = new Button("btnCancel",null,"65","55","25","70",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"65","55","25","130",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnNew",null,"65","55","25","190",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("신규");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_01","10",null,"135","22",null,"140",null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("장학환수 상세정보");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","0","335",null,"8","0",null,null,null,null,null,this);
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

            obj = new Static("Static01_00","210","308","100","35",null,null,null,null,null,null,this);
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

            obj = new Static("stc_13","9",null,"801","28",null,"110",null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12","10",null,"110","28",null,"110",null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("잔여장학입학금");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_02","9",null,"801","28",null,"82",null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_02","10",null,"110","28",null,"82",null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("환수입학금");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_00_00","544",null,"108","28",null,"82",null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("환수일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_02_00","9",null,"801","28",null,"54",null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_02_00","10",null,"110","28",null,"54",null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("환수사유");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJigeupIpahkAmt","122",null,"153","22",null,"113",null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_enable("false");
            obj.set_readonly("false");
            obj.set_textAlign("right");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_01_00_00","277",null,"110","28",null,"82",null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("환수수업료");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_01_00_00_00","277",null,"110","28",null,"110",null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("잔여장학수업료");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHwansuIphakAmt","122",null,"153","22",null,"85",null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_textAlign("right");
            obj.set_inputtype("number");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHwansuSayu","122",null,null,"22","13","57",null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJigeupSueopAmt","389",null,"153","22",null,"113",null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_enable("false");
            obj.set_readonly("false");
            obj.set_textAlign("right");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHwansuSueopAmt","389",null,"153","22",null,"85",null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_textAlign("right");
            obj.set_inputtype("number");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Calendar("calHwansuDt","654",null,"153","22",null,"85",null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_readonly("false");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",820,480,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_description("장학환수내역(신입생)");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.edtSearchSuheomNo","value","ds_input","SUHEOM_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edtHwansuIphakAmt","value","dsMaster","HWANSU_IPHAK_AMT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edtHwansuSayu","value","dsMaster","HWANSU_SAYU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edtHwansuSueopAmt","value","dsMaster","HWANSU_SUEOP_AMT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","calHwansuDt","value","dsMaster","HWANSU_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtSearchJanghakNm","value","ds_input","JANGHAK_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.edtSearchHaksaengNm","value","ds_input","HAKSAENG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edtJigeupIpahkAmt","value","ds_saveInput","JIGEUP_IPHAK_AMT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edtJigeupSueopAmt","value","ds_saveInput","JIGEUP_SUEOP_AMT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
            this._addPreloadList("data","","dsCheori");
        };
        
        // User Script
        this.registerScript("UE04_2060401_P04.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UE04_2060401_P04.xfdl(장학환수내역(신입생))
        * 작 성         일 명: jiback
        * 작 성         일 자: 2022/08/10
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
        this.lvchkColidDs   = "HWANSU_IPHAK_AMT$HWANSU_SUEOP_AMT$HWANSU_DT$HWANSU_SAYU";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs = "환수입학금$환수수업료$환수일자$환수사유";
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

        /**********************************************************************
                04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        this.fn_formInit = function()
        {
        	this.dsCheori.copyData(this.getOwnerFrame().dsCheori)

        	var janghakNm = this.dsCheori.getColumn(0,"JANGHAK_NM");
        	var suheomNo = this.dsCheori.getColumn(0,"SUHEOM_NO");
        	var suheomsaengNm = this.dsCheori.getColumn(0,"SUHEOMSAENG_NM");
        	var jigeupIphakAmt = this.dsCheori.getColumn(0,"JIGEUP_IPHAK_AMT");
        	var jigeupSueopAmt = this.dsCheori.getColumn(0,"JIGEUP_SUEOP_AMT");
        	var totalHwansuIphakAmt = this.dsCheori.getColumn(0,"TOTAL_HWANSU_IPHAK_AMT");
        	var totalHwansuSueopAmt = this.dsCheori.getColumn(0,"TOTAL_HWANSU_SUEOP_AMT");

            jigeupIphakAmt = nexacro.toNumber(jigeupIphakAmt) - nexacro.toNumber(totalHwansuIphakAmt);
        	jigeupSueopAmt = nexacro.toNumber(jigeupSueopAmt) - nexacro.toNumber(totalHwansuSueopAmt);

        	this.divSearch.form.edtSearchSuheomNo.set_value(suheomNo);
            this.divSearch.form.edtSearchHaksaengNm.set_value(suheomsaengNm);
        	this.divSearch.form.edtSearchJanghakNm.set_value(janghakNm);
        	this.edtJigeupIpahkAmt.set_value(jigeupIphakAmt);
        	this.edtJigeupSueopAmt.set_value(jigeupSueopAmt);

        	// 장학환수내역 조회
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

        /**********************************************************************
                05. 조회 함수 선언(마스터 함수)
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreRet = function()
        {
            // 조회조건 셋팅
        	this.ds_input.setColumn(0, "IPSI_YYYY", this.dsCheori.getColumn(0, "IPSI_YYYY"));
        	this.ds_input.setColumn(0, "HAKGI", this.dsCheori.getColumn(0, "HAKGI"));
        	this.ds_input.setColumn(0, "JANGHAK_CD", this.dsCheori.getColumn(0, "JANGHAK_CD"));
        	this.ds_input.setColumn(0, "SEQ", this.dsCheori.getColumn(0, "SEQ"));
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
            var strUrl      = "/prj/UE/UE04/Retrieve_2060401_P04.do";
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
            this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
        };

        /**********************************************************************
                06. 추가 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 추가 전 실행(기본체크사항)
         */
        this.fn_PreNew = function()
        {
        	var jigeupIphakAmt = nexacro.toNumber(this.edtJigeupIpahkAmt.value); // 잔여장학입학금
        	var jigeupSueopAmt = nexacro.toNumber(this.edtJigeupSueopAmt.value); // 잔여장학수업료

        	if(jigeupIphakAmt == 0 && jigeupSueopAmt == 0)
        	{
        	    this.alert("잔여장학입학금과 잔여장학수업료가 모두 0원일 경우 장학환수 목록을 추가할 수 없습니다.");
        		return false;
        	}

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
         	this.dsMaster.setColumn(nRow, 'JANGHAK_YYYY', this.dsCheori.getColumn(0, "IPSI_YYYY"));
         	this.dsMaster.setColumn(nRow, 'HAKGI', this.dsCheori.getColumn(0, "HAKGI"));
         	this.dsMaster.setColumn(nRow, 'SUHEOM_NO', this.dsCheori.getColumn(0, "SUHEOM_NO"));
         	this.dsMaster.setColumn(nRow, 'JANGHAK_CD', this.dsCheori.getColumn(0, "JANGHAK_CD"));
         	this.dsMaster.setColumn(nRow, 'SEQ', this.dsCheori.getColumn(0, "SEQ"));
         	this.dsMaster.setColumn(nRow, 'HWANSU_IPHAK_AMT', 0);
         	this.dsMaster.setColumn(nRow, 'HWANSU_SUEOP_AMT', 0);
         	this.dsMaster.setColumn(nRow, 'HWANSU_DT', this.fn_Today());
         	this.dsMaster.setColumn(nRow, 'DEL_YN', 0);

        	// 목록에서 삭제된 장학환수일시 수정 못하도록 Enable false 처리
            this.fn_ChkDeleteYn(nRow);
        };

        /**********************************************************************
                07. 삭제 함수 선언
        ***********************************************************************/
        /**
         * 기능 : Row 삭제 또는 Transaction 삭제 처리
         */
        this.fn_Del = function()
        {
            if(this.dsMaster.getColumn(this.dsMaster.rowposition, 'DEL_YN') == '0')
        	{
        		var hwansuIphakAmt = this.dsMaster.getColumn(this.dsMaster.rowposition, 'HWANSU_IPHAK_AMT');
        		var hwansuSueopAmt = this.dsMaster.getColumn(this.dsMaster.rowposition, 'HWANSU_SUEOP_AMT');
        		var jigeupIphakAmt = this.edtJigeupIpahkAmt.value;
        		var jigeupSueopAmt = this.edtJigeupSueopAmt.value;
        	    // 잔여장학금액 + 삭제된 환수금액
        		this.edtJigeupIpahkAmt.set_value(nexacro.toNumber(jigeupIphakAmt) + nexacro.toNumber(hwansuIphakAmt));
        		this.edtJigeupSueopAmt.set_value(nexacro.toNumber(jigeupSueopAmt) + nexacro.toNumber(hwansuSueopAmt));
        	}

        	// 신규행일시 삭제처리
            if(this.dsMaster.getRowType(this.dsMaster.rowposition) == '2')
        	{
        	    this.dsMaster.deleteRow(this.dsMaster.rowposition);
        	}
        	else
        	{
                this.dsMaster.setColumn(this.dsMaster.rowposition, 'DEL_YN', '1');
        	}

        	// 목록에서 삭제된 장학환수일시 수정 못하도록 Enable false 처리
            this.fn_ChkDeleteYn(this.dsMaster.rowposition);
        };

        /**********************************************************************
                08. 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave = function()
        {
            if(!this.gfn_isUpdate(this.dsMaster))
            {
                this.gfn_alert("변경된 이력이 없습니다.","저장정보","","question");
                return false;
            }

            // 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
            var chkFocusFlg = false;
            var result      = this.gfn_cmmnChkEssentialItem(this.dsMaster, this.lvchkColidDs, this.lvchkColNameDs, "", chkFocusFlg, this);

            if (result[0] != "success")
            {
                this.gfn_alert(result[0],"저장정보","","question");
                this.dsMaster.set_rowposition(result[1]); //데이터셋 변경
                return false;
        	}

        	var result = this.gfn_confirm( "저장 하시겠습니까?", "저장","", "question" );
        	if(result == 0)
        	{
        		return false;
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
            var strUrl      = "/prj/UE/UE04/Save_2060401_P04.do";
            var strInDs     = "ds_input=ds_input:a ";
                strInDs    += "dsMaster=dsMaster:u ";
        		strInDs    += "ds_saveInput=ds_saveInput:a ";
        		strInDs    += "dsCheori=dsCheori";
            var strOutDs    = "dsMaster=dsMaster";
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
            this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
        };

        /**********************************************************************
                09. 취소 함수 선언
        ***********************************************************************/
        this.fn_Cancel = function()
        {
        	this.dsMaster.reset();
        	var jigeupIphakAmt = this.dsCheori.getColumn(0,"JIGEUP_IPHAK_AMT");
        	var jigeupSueopAmt = this.dsCheori.getColumn(0,"JIGEUP_SUEOP_AMT");
            // 팝업 오픈시 잔여장학금액으로 셋팅
        	this.edtJigeupIpahkAmt.set_value(jigeupIphakAmt);
        	this.edtJigeupSueopAmt.set_value(jigeupSueopAmt);

        	this.dsMaster.set_filterstr('');
        };

        /**********************************************************************
                10. 전액환수적용
        ***********************************************************************/
        this.fn_Hwansu = function()
        {
        	var cnt = this.dsMaster.rowcount;
        	if(cnt == 0)
        	{
        	    this.alert("장학환수 목록의 행을 추가해주세요.");
        		return false;
        	}

        	var jigeupIphakAmt = this.edtJigeupIpahkAmt.value; // 잔여장학입학금
        	var jigeupSueopAmt = this.edtJigeupSueopAmt.value; // 잔여장학수업료
        	var hwansuIphakAmt = this.dsMaster.getColumn(this.dsMaster.rowposition, 'HWANSU_IPHAK_AMT'); // 환수입학금
        	var hwansuSueopAmt = this.dsMaster.getColumn(this.dsMaster.rowposition, 'HWANSU_SUEOP_AMT'); // 환수수업료

        	if(nexacro.toNumber(jigeupIphakAmt) == 0 && nexacro.toNumber(jigeupSueopAmt) == 0)
        	{
        	    this.alert("잔여장학입학금과 잔여장학수업료가 모두 0원일 경우 장학금을 환수 할 수 없습니다.");
        	    return false;
        	}

        	this.dsMaster.setColumn(this.dsMaster.rowposition, 'HWANSU_IPHAK_AMT', nexacro.toNumber(jigeupIphakAmt) + nexacro.toNumber(hwansuIphakAmt));
        	this.dsMaster.setColumn(this.dsMaster.rowposition, 'HWANSU_SUEOP_AMT', nexacro.toNumber(jigeupSueopAmt) + nexacro.toNumber(hwansuSueopAmt));
        	this.edtJigeupIpahkAmt.set_value(0);
        	this.edtJigeupSueopAmt.set_value(0);
        };

        /**********************************************************************
                11. 각종함수
        ***********************************************************************/
        // 오늘날짜
        this.fn_Today = function()
        {
        	var objDate = new nexacro.Date();
        	var mm = (objDate.getMonth()+1).toString().padLeft(2, "0");
        	var dd = objDate.getDate().toString().padLeft(2, "0");
        	var today = objDate.getYear() + mm + dd;
        	return today;
        };

        // 목록에서 삭제된 장학환수일시 수정 못하도록 Enable false 처리
        this.fn_ChkDeleteYn = function (row)
        {
            // 1: 삭제O, 0:삭제X
            var deleteYn = this.dsMaster.getColumn(row, 'DEL_YN');

        	if(deleteYn == '0') { // 삭제 X
        	    this.edtHwansuIphakAmt.set_enable(true); // mdt 환수입학금
        		this.edtHwansuSueopAmt.set_enable(true); // mdt 환수수업료
        		this.calHwansuDt.set_enable(true); // cal 환수일자
        		this.edtHwansuSayu.set_enable(true); // edt 환수사유
        		this.btnHwansu.set_enable(true); // btn 전액환수
        	}
        	else if(deleteYn == '1') { // 삭제 O
        	    this.edtHwansuIphakAmt.set_enable(false); // mdt 환수입학금
        		this.edtHwansuSueopAmt.set_enable(false); // mdt 환수수업료
        		this.calHwansuDt.set_enable(false); // cal 환수일자
        		this.edtHwansuSayu.set_enable(false); // edt 환수사유
        		this.btnHwansu.set_enable(false); // btn 전액환수
        	}
        };

        /**********************************************************************
                12. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj,e)
        {
            this.gfn_gridSort(obj,e);
        };

        // 환수입학금 변경시
        this.edtHwansuIphakAmt_onchanged = function(obj,e)
        {
        	var jigeupIphakAmt = this.edtJigeupIpahkAmt.value; // 잔여장학입학금
        	var hwansuIphakAmt = e.postvalue;
        	var preHansuIphakAmt = e.prevalue;

        	if(nexacro.toNumber(jigeupIphakAmt) == 0 && nexacro.toNumber(preHansuIphakAmt) != 0) { // 전액환수했다가 환수입학금 변경시
        	    if(nexacro.toNumber(preHansuIphakAmt) - nexacro.toNumber(jigeupIphakAmt) > 0) {
        		    this.edtJigeupIpahkAmt.set_value(nexacro.toNumber(preHansuIphakAmt) - nexacro.toNumber(hwansuIphakAmt));
                } else {
        		    this.alert("환수입학금은 잔여장학입학금보다 클 수 없습니다.");
        			this.dsMaster.setColumn(this.dsMaster.rowposition, 'HWANSU_IPHAK_AMT', preHansuIphakAmt);
        			return false;
        		}
        	}
            else {
        		if(nexacro.toNumber(jigeupIphakAmt) < nexacro.toNumber(hwansuIphakAmt)) {
        			this.alert("환수입학금은 잔여장학입학금보다 클 수 없습니다.");
        			this.dsMaster.setColumn(this.dsMaster.rowposition, 'HWANSU_IPHAK_AMT', preHansuIphakAmt);
        			return false;
        		}
        		this.edtJigeupIpahkAmt.set_value(nexacro.toNumber(jigeupIphakAmt) + nexacro.toNumber(preHansuIphakAmt) - nexacro.toNumber(hwansuIphakAmt));
            }
        };

        // 환수수업료 변경시
        this.edtHwansuSueopAmt_onchanged = function(obj,e)
        {
        	var jigeupSueopAmt = this.edtJigeupSueopAmt.value; // 잔여장학수업료
        	var hwansuSueopAmt = e.postvalue;
        	var preHwansuSueopAmt = e.prevalue;

        	if(nexacro.toNumber(jigeupSueopAmt) == 0 && nexacro.toNumber(preHwansuSueopAmt) != 0) { // 전액환수했다가 환수수업료 변경시
        	    if(nexacro.toNumber(preHwansuSueopAmt) - nexacro.toNumber(hwansuSueopAmt) > 0) {
        	        this.edtJigeupSueopAmt.set_value(nexacro.toNumber(preHwansuSueopAmt) - nexacro.toNumber(jigeupSueopAmt));
        	    } else {
        		    this.alert("환수수업료는 잔여장학수업료보다 클 수 없습니다.");
        			this.dsMaster.setColumn(this.dsMaster.rowposition, 'HWANSU_SUEOP_AMT', preHwansuSueopAmt);
        			return false;
        		}
        	}
            else {
        		if(nexacro.toNumber(jigeupSueopAmt) < nexacro.toNumber(hwansuSueopAmt)) {
        			this.alert("환수수업료는 잔여장학수업료보다 클 수 없습니다.");
        			this.dsMaster.setColumn(this.dsMaster.rowposition, 'HWANSU_SUEOP_AMT', preHwansuSueopAmt);
        			return;
        		}
        		this.edtJigeupSueopAmt.set_value(nexacro.toNumber(jigeupSueopAmt) + nexacro.toNumber(preHwansuSueopAmt) - nexacro.toNumber(hwansuSueopAmt));
            }
        };

        // 행 변경시
        this.dsMaster_onrowposchanged = function(obj,e)
        {
        	// 목록에서 삭제된 장학환수일시 수정 못하도록 Enable false 처리
            this.fn_ChkDeleteYn(this.dsMaster.rowposition);
        };

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
            return this.gfn_isUpdate(this.dsMaster);
        };

        // 종료버튼 클릭시
        this.btnClose_onclick = function(obj,e)
        {
        	this.close("CLOSE");
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.btnHwansu.addEventHandler("onclick",this.fn_Hwansu,this);
            this.divSearch.form.edtSearchSuheomNo.addEventHandler("onkeydown",this.divSearch_edtSearchDancheCd_onkeydown,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.fn_Ret,this);
            this.divSearch.form.edtSearchHaksaengNm.addEventHandler("onkeydown",this.divSearch_edtSearchDancheCd_onkeydown,this);
            this.divSearch.form.edtSearchJanghakNm.addEventHandler("onkeydown",this.divSearch_edtSearchDancheCd_onkeydown,this);
            this.grdMaster.addEventHandler("onselectchanged",this.Div02_Grid00_onselectchanged,this);
            this.btnSave.addEventHandler("onclick",this.fn_Save,this);
            this.btnCancel.addEventHandler("onclick",this.fn_Cancel,this);
            this.btnDel.addEventHandler("onclick",this.fn_Del,this);
            this.btnNew.addEventHandler("onclick",this.fn_New,this);
            this.edtHwansuIphakAmt.addEventHandler("onchanged",this.edtHwansuIphakAmt_onchanged,this);
            this.edtHwansuSueopAmt.addEventHandler("onchanged",this.edtHwansuSueopAmt_onchanged,this);
            this.calHwansuDt.addEventHandler("onkeydown",this.divSearch_calSearchBokhakFr_onkeydown,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsCheori.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
        };
        this.loadIncludeScript("UE04_2060401_P04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
