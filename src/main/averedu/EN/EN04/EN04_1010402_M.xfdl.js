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
            this.set_titletext("실기관리");
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
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORIGIN_JEONGONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"CHAEJEOM_GBCD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_hakgwaCd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_juyaGbcd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mojipGbcd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HYEONJAE_MOJIP_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetail", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SILGIHANGMOK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"ORIGIN_SILGIHANGMOK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"MAX_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SORT\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetail2", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SABEON\" type=\"STRING\" size=\"10\"/><Column id=\"SEONGMYEONG\" type=\"STRING\" size=\"256\"/><Column id=\"SORT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYOSU_GBCD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_SilGiGbCd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Chaejeom", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gijunYyyy", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_jeongongCd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGONG_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetailYn", this);
            obj._setContents("<ColumnInfo><Column id=\"RESULT_CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dInput", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult", this);
            obj._setContents("<ColumnInfo><Column id=\"ROWINDEX\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT\" type=\"STRING\" size=\"256\"/><Column id=\"ERROR\" type=\"STRING\" size=\"256\"/><Column id=\"OUT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"OUT_MSG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdMaster","0","87",null,null,"489","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("dsMaster");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"506\"/><Column size=\"341\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"상태\" cssclass=\"expr:dataset.getRowType(currow) == &apos;2&apos; ? &apos;newrow&apos;:(dataset.getRowType(currow) == &apos;4&apos; ? &apos;modrow&apos;:&apos;&apos;)\"/><Cell col=\"1\" text=\"전공명\"/><Cell col=\"2\" text=\"채점기준\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/></Band><Band id=\"body\"><Cell textAlign=\"center\" edittype=\"none\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:JEONGONG_CD\" displaytype=\"expr:JEONGONG_CD != &quot;&quot; ? &quot;combocontrol&quot; : &quot;none&quot;\" combodataset=\"ds_jeongongCd\" combocodecol=\"JEONGONG_CD\" combodatacol=\"JEONGONG_NM\" edittype=\"combo\"/><Cell col=\"2\" displaytype=\"expr:CHAEJEOM_GBCD != &quot;&quot; ? &quot;combocontrol&quot; : &quot;none&quot;\" text=\"bind:CHAEJEOM_GBCD\" edittype=\"combo\" combodataset=\"ds_Chaejeom\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"3\" text=\"bind:JUYA_GBCD\"/><Cell col=\"4\" text=\"bind:HAKGWA_CD\"/><Cell col=\"5\" text=\"bind:MOJIP_GBCD\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdDetail",null,"87","460","313","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("dsDetail");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"67\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"상태\"/><Cell col=\"1\" text=\"실기항목명\"/><Cell col=\"2\" text=\"최대점수\"/><Cell col=\"3\" text=\"순서\"/></Band><Band id=\"body\"><Cell textAlign=\"center\" edittype=\"none\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:SILGIHANGMOK_GBCD\" combocodecol=\"CODE\" combodataset=\"ds_SilGiGbCd\" combodatacol=\"CODE_NM\" displaytype=\"expr:SILGIHANGMOK_GBCD != &quot;&quot; ? &quot;combocontrol&quot; : &quot;none&quot;\" edittype=\"combo\"/><Cell col=\"2\" text=\"bind:MAX_JEOMSU\" edittype=\"text\"/><Cell col=\"3\" text=\"bind:SORT\" edittype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnNewSilGi",null,"54","51","25","112",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("신규");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_tabstop("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSaveSilGi",null,"54","51","25","56",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_tabstop("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelSilGi",null,"54","51","25","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_tabstop("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdDetail2",null,"445","459",null,"0","0",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("dsDetail2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"67\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"62\"/><Column size=\"67\"/><Column size=\"0\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"상태\"/><Cell col=\"1\" text=\"학부/학과\"/><Cell col=\"2\" text=\"교수명\"/><Cell col=\"3\" text=\"교수구분\"/><Cell col=\"4\" text=\"순서\"/><Cell col=\"5\"/></Band><Band id=\"body\"><Cell textAlign=\"center\" edittype=\"none\" cssclass=\"expr:dataset.getRowType(currow) == &apos;2&apos; ? &apos;newrow&apos;:(dataset.getRowType(currow) == &apos;4&apos; ? &apos;modrow&apos;:&apos;&apos;)\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:HAKGWA_CD\" displaytype=\"combotext\" combodataset=\"ds_hakgwaCd\" combocodecol=\"DEPT_CD\" combodatacol=\"DEPT_NM\"/><Cell col=\"2\" text=\"bind:SEONGMYEONG\"/><Cell col=\"3\" text=\"expr:GYOSU_GBCD==&quot;1&quot;?&quot;교내&quot;:&quot;외래&quot;\"/><Cell col=\"4\" text=\"bind:SORT\"/><Cell col=\"5\" text=\"bind:SABEON\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnNewSilGiGyoSoo",null,"412","51","25","112",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("신규");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_tabstop("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSaveSilGiGyoSoo",null,"412","51","25","56",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_tabstop("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelSilGiGyoSoo",null,"412","51","25","0",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_tabstop("true");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt2","1306","61",null,"24","211",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","1179","62",null,"22","306",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("실기채점기준표");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00_00","1182","420",null,"22","303",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("담당교수");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt3","1269","418",null,"24","248",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnCreateSilGiDaeSangJa",null,"54","111","25","608",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("실기대상자 생성");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_tabstop("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnDeleteSilGiDaeSangJa",null,"54","111","25","490",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("실기대상자 삭제");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_tabstop("true");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"42","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSearchJeongong","791","9","150","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_codecolumn("JEONGONG_CD");
            obj.set_datacolumn("JEONGONG_NM");
            obj.set_displaynulltext("전체");
            obj.set_innerdataset("ds_jeongongCd");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_04","734","9","68","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("전공");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_02","468","9","50","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("학과");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01","7","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("입시년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgwa","522","9","172","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_innerdataset("ds_hakgwaCd");
            obj.set_displaynulltext("전체");
            obj.set_cssclass("point");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","87","9","101","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_cssclass("point");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchMojip","308","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_codecolumn("MOJIP_GBCD");
            obj.set_datacolumn("MOJIP_NM");
            obj.set_innerdataset("ds_mojipGbcd");
            obj.set_displaynulltext("전체");
            obj.set_cssclass("point");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_02_00","226","10","70","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("모집구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","1","27","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00","78","1","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01","188","1","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_01","298","1","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00","428","1","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","513","1","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02","694","1","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_01","14","31","1580","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_02","14","0","1580","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","781","1","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01","500","42","100","45",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("↑\r\n45\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00_01","0","62","155","22",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("학부/학과-전공");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","79","1620","8",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00","1151","320","30","249",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("30");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","1350","400","100","45",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("↑\r\n45\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00","1179","437","440","8",null,null,null,null,null,null,this);
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

            obj = new Static("staRowCnt","131","61",null,"24","1386",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("실기관리");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","btnNewSilGi","enable","dsBindableButton","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","btnSaveSilGi","enable","dsBindableButton","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","btnDelSilGi","enable","dsBindableButton","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","btnNewSilGiGyoSoo","enable","dsBindableButton","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","btnSaveSilGiGyoSoo","enable","dsBindableButton","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","btnDelSilGiGyoSoo","enable","dsBindableButton","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","btnCreateSilGiDaeSangJa","enable","dsBindableButton","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","btnDeleteSilGiDaeSangJa","enable","dsBindableButton","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSearch.form.cboSearchJeongong","value","ds_input","JEONGONG_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divSearch.form.spnSearchYYYY","value","ds_input","IPSI_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divSearch.form.cboSearchMojip","value","ds_input","MOJIP_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divSearch.form.cboSearchHakgwa","value","ds_input","HAKGWA_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
            this._addPreloadList("data","","dsDetail");
            this._addPreloadList("data","","dsDetail2");
        };
        
        // User Script
        this.registerScript("EN04_1010402_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): EN04_1010402_M.xfdl(실기관리)
        * 작 성         일 명: 성연우
        * 작 성         일 자: 2021/04/23
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
        this.lvchkColidDs    = "JEONGONG_CD$CHAEJEOM_GBCD";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs  = "전공명$채점기준";
        this.lvchkColidDs2   = "SILGIHANGMOK_GBCD$MAX_JEOMSU$SORT";
        this.lvchkColNameDs2 = "실기항목명$최대점수$순서";
        this.lvchkColidDs3   = "SORT";
        this.lvchkColNameDs3 = "순서";
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
            var strDs    = "ds_SilGiGbCd|ds_Chaejeom";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "01018|01019";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "X|X";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = "";                                      // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId    = "Init";

                // gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
                // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.

            this.gfn_CmmnMultiComboLoad(strDs
                                      , strLgcd
                                      , strComb
                                      , strOptn
                                      , svcId);
        	this.fn_IpsiGijunYyyy();
        };


        // 입시기준년도 가져오기
        this.fn_IpsiGijunYyyy = function()
        {
        	var strSvc      = "IpsiGigunYyyy";
            var strUrl      = "prj/EN/EN_COM/Retrieve_GIJUN_YYYY.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "ds_gijunYyyy=ds_gijunYyyy";
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
        }

        // 조회조건에 입시년도 설정 및 입시모집구분 조회
        this.fn_PostIpsiGigunYyyy = function()
        {
        	this.ds_input.setColumn(0, "IPSI_YYYY", this.ds_gijunYyyy.getColumn(0, "YYYY"));
        	this.fn_IpsiMojipGb();
        }

        // 입시모집구분 가져오기
        this.fn_IpsiMojipGb = function()
        {
            var strSvc      = "IpsiMojipGb";
            var strUrl      = "prj/EN/EN_COM/Retrieve_MOJIPGBCD.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "ds_mojipGbcd=ds_mojipGbcd";
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
        }

        // 모집구분 콤보박스 설정
        this.fn_PostIpsiMojipGb = function()
        {
        	var gubun;
        	for(var i=0; i<this.ds_mojipGbcd.rowcount; i++)
        	{
        		gubun = this.ds_mojipGbcd.getColumn(i, "HYEONJAE_MOJIP_YN");

        		if(gubun == 'Y')
        		{
        			this.ds_input.setColumn(0, "MOJIP_GBCD", this.ds_mojipGbcd.getColumn(i, "MOJIP_GBCD"));
        			this.divSearch.form.cboSearchHakgwa.set_value(null);
        			this.divSearch.form.cboSearchJeongong.set_value(null);
        		}
        	}
        	this.fn_IpsiHakgwa();
        }

        // 입시 학과 가져오기
        this.fn_IpsiHakgwa = function()
        {
        	this.ds_hakgwaCd.deleteAll();
        	this.ds_jeongongCd.deleteAll();

        	if(this.ds_input.getColumn(0, "MOJIP_GBCD") != '')
        	{
        		var strSvc      = "";
        		var strUrl      = "prj/EN/EN04/Retrieve_HAKGWACD.do";
        		var strInDs     = "ds_input=ds_input";
        		var strOutDs    = "ds_hakgwaCd=ds_hakgwaCd";
        		var strArg      = "";
        		var GBV_MENUID    = objApp.gv_cutPrgId;
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

        	this.ds_jeongongCd.insertRow(0);
        	this.ds_jeongongCd.setColumn(0, "JEONGONG_CD", "");
        	this.ds_jeongongCd.setColumn(0, "JEONGONG_NM", "전체");
        	this.divSearch.form.cboSearchJeongong.set_index(0);
        }

        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {

            this.gfn_clearSortAll(this.grdMaster);
        	this.gfn_clearSortAll(this.grdDetail);
        	this.gfn_clearSortAll(this.grdDetail2);
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
        			case "IpsiGigunYyyy":
                            this.fn_PostIpsiGigunYyyy();
                        break;
        			case "IpsiMojipGb":
                            this.fn_PostIpsiMojipGb();
                        break;
                    case "Ret":
                            this.fn_PostRet();
                        break;
        			case "DRet":
                            this.fn_PostDRet();
                        break;
                    case "Save":
                            this.fn_PostSave();
                        break;
        			case "SligiSave":
                            this.fn_PostSligiSave();
                        break;
        			case "GyosuSave":
                            this.fn_PostGyosuSave();
                        break;
                    case "Del":
                            this.fn_PostDel();
                        break;
        			case "SilgiDel":
                            this.fn_PostSilgiDel();
                        break;
        			case "GyosuDel":
                            this.fn_PostGyosuDel();
                        break;
        			case "CreateDaeSangJa":
                            this.fn_PostCreateDaeSangJa();
                        break;
        			case "DeleteDaeSangJa":
                            this.fn_PostDeleteDaeSangJa();
                        break;
                    default:
                        break;
                }
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
                case "new" :         // 신규
                        this.fn_New();
                    break;
                case "del" :         // 삭제
                        this.fn_Del();
                    break;
                case "save" :        // 저장
                        this.fn_Save();
                    break;
        		case "tmp1" :        // 실기확인대장 출력
                        this.fn_PrintSilgi();
                    break;
        		case "tmp2" :        // 수험표 출력
                        this.fn_PrintSuheompyo();
                    break;
                default :
                    break;
            };
        };

        //Popup callback영역
        this.fn_popupCallback = function(strId, strVal)
        {
        	switch(strId)
        	{
        		case "prof":
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					var nRow = this.dsDetail2.addRow();
        					this.dsDetail2.setColumn(nRow,"IPSI_YYYY", this.dsMaster.getColumn(this.dsMaster.rowposition,"IPSI_YYYY"));
        					this.dsDetail2.setColumn(nRow,"MOJIP_GBCD", this.dsMaster.getColumn(this.dsMaster.rowposition,"MOJIP_GBCD"));
        					this.dsDetail2.setColumn(nRow,"HAKGWA_CD", this.dsMaster.getColumn(this.dsMaster.rowposition,"HAKGWA_CD"));
        					this.dsDetail2.setColumn(nRow,"JEONGONG_CD", this.dsMaster.getColumn(this.dsMaster.rowposition,"JEONGONG_CD"));
        					this.dsDetail2.setColumn(nRow,"JUYA_GBCD", this.dsMaster.getColumn(this.dsMaster.rowposition,"JUYA_GBCD"));
        					this.dsDetail2.setColumn(nRow,"SABEON", sRtn[0]);
        					this.dsDetail2.setColumn(nRow,"SEONGMYEONG", sRtn[1]);

        					if(sRtn[0].substring(0,1) == 'A')
        					{
        						this.dsDetail2.setColumn(nRow,"GYOSU_GBCD", "2");
        					}
        					else
        					{
        						this.dsDetail2.setColumn(nRow,"GYOSU_GBCD", "1");
        					}
        				}
        			break;
        		default:
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
        	if(this.ds_input.getColumn(0, "IPSI_YYYY") == null || this.ds_input.getColumn(0, "IPSI_YYYY") == "")
        	{
        		this.alert("입시년도를 입력해주세요.");
        		return false;
        	}
        	else if(this.ds_input.getColumn(0, "MOJIP_GBCD") == null || this.ds_input.getColumn(0, "MOJIP_GBCD") == "")
        	{
        		this.alert("모집구분을 선택해주세요.");
        		return false;
        	}
        	else if(this.ds_input.getColumn(0, "HAKGWA_CD") == null || this.ds_input.getColumn(0, "HAKGWA_CD") == "")
        	{
        		this.alert("학과를 선택해주세요.");
        		return false;
        	}

        	if(this.fn_beforeclose())
        	{
        		var result = this.gfn_confirm( "변경된 데이터가 있습니다. 그래도 이동하시겠습니까?", "저장","", "question" );
        		if(result == 0)
        		{
        			return false;
        		}
        	}

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
            var strUrl      = "/prj/EN/EN04/Retrieve_1010402_M.do";
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
                06. 조회 함수 선언(디테일 함수)
        ***********************************************************************/
        this.dsMaster_canrowposchange = function(obj,e)
        {
        	if(this.fn_detailbeforeclose())
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
        	this.ds_dInput.setColumn(0, "IPSI_YYYY", this.dsMaster.getColumn(this.dsMaster.rowposition, "IPSI_YYYY"));
        	this.ds_dInput.setColumn(0, "MOJIP_GBCD", this.dsMaster.getColumn(this.dsMaster.rowposition, "MOJIP_GBCD"));
        	this.ds_dInput.setColumn(0, "HAKGWA_CD", this.dsMaster.getColumn(this.dsMaster.rowposition, "HAKGWA_CD"));
        	this.ds_dInput.setColumn(0, "JEONGONG_CD", this.dsMaster.getColumn(this.dsMaster.rowposition, "JEONGONG_CD"));
        	this.ds_dInput.setColumn(0, "JUYA_GBCD", this.dsMaster.getColumn(this.dsMaster.rowposition, "JUYA_GBCD"));

        	this.fn_DRet();
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_DRet = function()
        {
            var strSvc      = "";
            var strUrl      = "/prj/EN/EN04/Retrieve_1010402_M_Silgi.do";
            var strInDs     = "ds_dInput=ds_dInput";
            var strOutDs    = "dsDetail=dsDetail";
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

        	var strSvc      = "DRet";
            var strUrl      = "/prj/EN/EN04/Retrieve_1010402_M_Gyosu.do";
            var strInDs     = "ds_dInput=ds_dInput";
            var strOutDs    = "dsDetail2=dsDetail2";
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

        	var strSvc      = "DRet";
            var strUrl      = "/prj/EN/EN04/Retrieve_1010402_M_SilGi_YN.do";
            var strInDs     = "ds_dInput=ds_dInput";
            var strOutDs    = "dsDetailYn=dsDetailYn";
            var strArg      = "";
            var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = false;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
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
            this.gfn_getRowCount(this.staRowCnt2,this.dsDetail);
        	this.gfn_getRowCount(this.staRowCnt3,this.dsDetail2);

        	var cnt = this.dsDetailYn.getColumn(0, "RESULT_CNT");

        	if(cnt == "0")
        	{
        		this.btnNewSilGi.set_visible(true);
        		this.btnNewSilGiGyoSoo.set_visible(true);
        		this.btnDelSilGi.set_visible(true);
        		this.btnDelSilGiGyoSoo.set_visible(true);
        		this.btnSaveSilGi.set_visible(true);
        		this.btnSaveSilGiGyoSoo.set_visible(true);

        		this.grdDetail.setCellProperty("body", 1, "displaytype", "combocontrol");
        		this.grdDetail.setCellProperty("body", 1, "edittype", "combo");
        		this.grdDetail.setCellProperty("body", 2, "edittype", "text");
        		this.grdDetail.setCellProperty("body", 3, "edittype", "text");

        		this.grdDetail2.setCellProperty("body", 4, "edittype", "text");
        	}
        	else
        	{
        		this.btnNewSilGi.set_visible(false);
        		this.btnNewSilGiGyoSoo.set_visible(false);
        		this.btnDelSilGi.set_visible(false);
        		this.btnDelSilGiGyoSoo.set_visible(false);
        		this.btnSaveSilGi.set_visible(false);
        		this.btnSaveSilGiGyoSoo.set_visible(false);

        		this.grdDetail.setCellProperty("body", 1, "displaytype", "combotext");
        		this.grdDetail.setCellProperty("body", 1, "edittype", "none");
        		this.grdDetail.setCellProperty("body", 2, "edittype", "none");
        		this.grdDetail.setCellProperty("body", 3, "edittype", "none");

        		this.grdDetail2.setCellProperty("body", 4, "edittype", "none");
        	}
        };

        /**********************************************************************
                07. 학부/학과/전공 추가 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 추가 전 실행(기본체크사항)
         */
        this.fn_PreNew = function()
        {
        	if(this.ds_input.getColumn(0, "IPSI_YYYY") == null || this.ds_input.getColumn(0, "IPSI_YYYY") == "")
        	{
        		this.alert("추가할 전공의 입시년도를 입력해주세요.");
        		return false;
        	}
        	else if(this.ds_input.getColumn(0, "MOJIP_GBCD") == null || this.ds_input.getColumn(0, "MOJIP_GBCD") == "")
        	{
        		this.alert("추가할 전공의 모집구분을 선택해주세요.");
        		return false;
        	}
        	else if(this.ds_input.getColumn(0, "HAKGWA_CD") == null || this.ds_input.getColumn(0, "HAKGWA_CD") == "")
        	{
        		this.alert("추가할 전공의 학과를 선택해주세요.");
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

        	this.dsDetail.clearData();
        	this.dsDetail2.clearData();

        	var nRow = this.dsMaster.addRow();
        	this.dsMaster.setColumn(nRow, "IPSI_YYYY", this.ds_input.getColumn(0, "IPSI_YYYY"));
        	this.dsMaster.setColumn(nRow, "MOJIP_GBCD", this.ds_input.getColumn(0, "MOJIP_GBCD"));
        	this.dsMaster.setColumn(nRow, "HAKGWA_CD", this.ds_input.getColumn(0, "HAKGWA_CD"));
        	this.dsMaster.setColumn(nRow, "JUYA_GBCD", "1");
        };

        /**********************************************************************
                08. 실기채점기준표 추가 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 추가 전 실행(기본체크사항)
         */
        this.btnNewSilGi_onclick = function(obj,e)
        {
        	if(this.dsMaster.rowposition == -1)
        	{
        		this.alert("추가할 전공을 선택해주세요.");
        		return false;
        	}
        	else if(this.dsMaster.getRowType(this.dsMaster.rowposition) == '2' || this.dsMaster.getRowType(this.dsMaster.rowposition) == '4')
        	{
        		this.alert("선택된 전공을 저장한 이후에 추가해주세요.");
        		return false;
        	}

        	this.fn_DNew();
        };

        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_DNew = function()
        {
        	var maxVal = 0;
        	for(var i=0; i<this.dsDetail.rowcount; i++)
        	{
        		if(this.dsDetail.getColumn(i, "SORT") > maxVal)
        		{
        			maxVal = this.dsDetail.getColumn(i, "SORT");
        		}
        	}

        	var nRow = this.dsDetail.addRow();
        	this.dsDetail.setColumn(nRow, "IPSI_YYYY", this.dsMaster.getColumn(this.dsMaster.rowposition, "IPSI_YYYY"));
        	this.dsDetail.setColumn(nRow, "MOJIP_GBCD", this.dsMaster.getColumn(this.dsMaster.rowposition, "MOJIP_GBCD"));
        	this.dsDetail.setColumn(nRow, "HAKGWA_CD", this.dsMaster.getColumn(this.dsMaster.rowposition, "HAKGWA_CD"));
        	this.dsDetail.setColumn(nRow, "JEONGONG_CD", this.dsMaster.getColumn(this.dsMaster.rowposition, "JEONGONG_CD"));
        	this.dsDetail.setColumn(nRow, "JUYA_GBCD", this.dsMaster.getColumn(this.dsMaster.rowposition, "JUYA_GBCD"));
        	this.dsDetail.setColumn(nRow, "SORT", maxVal + 1);
        	this.dsDetail.setColumn(nRow, "MAX_JEOMSU", "100");
        };

        /**********************************************************************
                09. 담당 교수 추가 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 추가 전 실행(기본체크사항)
         */
        this.btnNewSilGiGyoSoo_onclick = function(obj,e)
        {
        	if(this.dsMaster.rowposition == -1)
        	{
        		this.alert("추가할 전공을 선택해주세요.");
        		return false;
        	}

        	this.fn_DNew2();
        };

        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_DNew2 = function()
        {
        	var oArg = {};
        	var oOption = {};
        	var sPopupCallBack = "fn_popupCallback";
        	this.gfn_openPopup( "prof","EN01::EN01_1010106_T04P.xfdl",oArg,sPopupCallBack,oOption);
        };

        /**********************************************************************
                10. 학부/학과/전공 삭제 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 삭제 버튼 실행
         */

        this.fn_PreDel = function()
        {
        	var result = this.gfn_confirm( "현재선택행을 삭제하시겠습니까?", "삭제정보","","question" );
        	if(result == 0)
        	{
        		return false;
        	}

            //개별삭제시
        	this.dsDetail.clearData();
        	this.dsDetail2.clearData();
            this.dsMaster.deleteRow(this.dsMaster.rowposition);
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
            var strUrl      = "/prj/EN/EN04/Delete_1010402_M.do";
            var strInDs     = "dsMaster=dsMaster:u";
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
            this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
        	this.gfn_getRowCount(this.staRowCn2,this.dsDetail);
        	this.gfn_getRowCount(this.staRowCnt3,this.dsDetail2);
        };

        /**********************************************************************
                11. 실기채점기준표 삭제 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 삭제 버튼 실행
         */
        this.btnDelSilGi_onclick = function(obj,e)
        {
        	if(this.dsMaster.rowcount == 0)
        	{
        		this.alert("삭제할 데이터가 없습니다.");
        		return false;
        	}

        	var result = this.gfn_confirm( "현재선택행을 삭제하시겠습니까?", "삭제정보","","question" );
        	if(result == 0)
        	{
        		return false;
        	}

            //개별삭제시
        	this.dsDetail.deleteRow(this.dsDetail.rowposition);
            this.fn_SilgiDel();
        };

        /**
         * 기능 : Row 삭제 또는 Transaction 삭제 처리
         */
        this.fn_SilgiDel = function()
        {
        	var strSvc      = "SilgiDel";
        	var strUrl      = "/prj/EN/EN04/Delete_1010402_M_Sligi.do";
        	var strInDs     = "dsDetail=dsDetail:u";
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

        this.fn_PostSilgiDel = function()
        {
        	this.gfn_getRowCount(this.staRowCn2,this.dsDetail);
        };

        /**********************************************************************
                12. 담당교수 삭제 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 삭제 버튼 실행
         */
        this.btnDelSilGiGyoSoo_onclick = function(obj,e)
        {
        	if(this.dsMaster.rowcount == 0)
        	{
        		this.alert("삭제할 데이터가 없습니다.");
        		return false;
        	}

        	var result = this.gfn_confirm( "현재선택행을 삭제하시겠습니까?", "삭제정보","","question" );
        	if(result == 0)
        	{
        		return false;
        	}

            //개별삭제시
        	this.dsDetail2.deleteRow(this.dsDetail2.rowposition);
            this.fn_SilgiDel();
        };

        /**
         * 기능 : Row 삭제 또는 Transaction 삭제 처리
         */
        this.fn_GyosuDel = function()
        {
        	var strSvc      = "Del";
        	var strUrl      = "/prj/EN/EN04/Delete_1010402_M_Gyosu.do";
        	var strInDs     = "dsDetail2=dsDetail2:u";
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

        this.fn_PostGyosuDel = function()
        {
        	this.gfn_getRowCount(this.staRowCn3,this.dsDetail2);
        };

        /**********************************************************************
                13. 학부/학과/전공 저장 함수 선언
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
            var chkFocusFlg = true;
            var result      = this.gfn_cmmnChkEssentialItem(this.dsMaster, this.lvchkColidDs, this.lvchkColNameDs, this.grdMaster, chkFocusFlg, this);

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
            var strUrl      = "/prj/EN/EN04/Save_1010402_M.do";
            var strInDs     = "ds_input=ds_input:a ";
                strInDs    += "dsMaster=dsMaster:u";
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
                14. 실기채점기준표 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.btnSaveSilGi_onclick = function(obj,e)
        {
        	if(this.dsMaster.rowcount == 0)
        	{
        		this.alert("저장할 데이터가 없습니다.");
        		return false;
        	}

            if(!this.gfn_isUpdate(this.dsDetail))
            {
                this.gfn_alert("변경된 이력이 없습니다.","저장정보","","question");
                return false;
            }

        	// 실기항목의 최대접수의 합이 400인지 체크
        	var rowCount = this.dsDetail.rowcount;
        	var sum = 0;
        	if(rowCount > 0)
        	{
        		for(var i = 0 ; i < rowCount ; i++)
        		{
        			if(this.dsDetail.getColumn(i, "MAX_JEOMSU") == ''||this.dsDetail.getColumn(i, "MAX_JEOMSU") == null)
        			{
        				sum += 0;
        			}
        			else
        			{
        				sum += parseInt(this.dsDetail.getColumn(i, "MAX_JEOMSU"));
        			}
        		}
        	}

        	if (sum != 400){
        		this.alert("실기항목의 최대점수의 합계가 400점이 되어야 합니다.");
        		return false;
        	}

            // 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
            var chkFocusFlg = true;
            var result      = this.gfn_cmmnChkEssentialItem(this.dsDetail, this.lvchkColidDs2, this.lvchkColNameDs2, this.grdDetail, chkFocusFlg, this);

            if (result[0] != "success")
            {
                this.gfn_alert(result[0],"저장정보","","question");
                this.dsDetail.set_rowposition(result[1]); //데이터셋 변경
                return false;
            }

            var result = this.gfn_confirm( "저장 하시겠습니까?", "저장","", "question" );
            if(result == 0)
            {
                return false;
            }

            this.fn_SilgiSave();
        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_SilgiSave = function()
        {
        	var strSvc      = "SilgiSave";
        	var strUrl      = "/prj/EN/EN04/Save_1010402_M_Silgi.do";
        	var strInDs     = "ds_dInput=ds_dInput:a ";
        		strInDs    += "dsDetail=dsDetail:u";
        	var strOutDs    = "dsDetail=dsDetail";
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
         *      기능 : 저장시 후처리
         */
        this.fn_PostSilgiSave = function()
        {
            this.gfn_getRowCount(this.staRowCnt2,this.dsDetail);
        };

        /**********************************************************************
                15. 담당교수 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.btnSaveSilGiGyoSoo_onclick = function(obj,e)
        {
        	if(this.dsMaster.rowcount == 0)
        	{
        		this.alert("저장할 데이터가 없습니다.");
        		return false;
        	}

            if(!this.gfn_isUpdate(this.dsDetail2))
            {
                this.gfn_alert("변경된 이력이 없습니다.","저장정보","","question");
                return false;
            }

            // 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
            var chkFocusFlg = true;
            var result      = this.gfn_cmmnChkEssentialItem(this.dsDetail2, this.lvchkColidDs3, this.lvchkColNameDs3, this.grdDetail2, chkFocusFlg, this);

            if (result[0] != "success")
            {
                this.gfn_alert(result[0],"저장정보","","question");
                this.dsDetail2.set_rowposition(result[1]); //데이터셋 변경
                return false;
            }

            var result = this.gfn_confirm( "저장 하시겠습니까?", "저장","", "question" );
            if(result == 0)
            {
                return false;
            }

            this.fn_GyosuSave();
        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_GyosuSave = function()
        {
        	var strSvc      = "GyosuSave";
        	var strUrl      = "/prj/EN/EN04/Save_1010402_M_Gyosu.do";
        	var strInDs     = "ds_dInput=ds_dInput:a ";
        		strInDs    += "dsDetail2=dsDetail2:u";
        	var strOutDs    = "dsDetail2=dsDetail2";
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
         *      기능 : 저장시 후처리
         */
        this.fn_PostGyosuSave = function()
        {
            this.gfn_getRowCount(this.staRowCnt3,this.dsDetail2);
        };

        /**********************************************************************
                16. 실기대상자생성 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 생성 전 실행
         */
        this.btnCreateSilGiDaeSangJa_onclick = function(obj,e)
        {
        	if(this.dsMaster.rowcount == 0)
        	{
        		this.alert("실기대상자를 생성할 데이터가 없습니다.");
        		return false;
        	}

        	// 실기항목의 최대접수의 합이 400인지 체크
        	var rowCount = this.dsDetail.rowcount;
        	var sum = 0;
        	if(rowCount > 0)
        	{
        		for(var i = 0 ; i < rowCount ; i++)
        		{
        			if(this.dsDetail.getColumn(i, "MAX_JEOMSU") == '')
        			{
        				sum += 0;
        			}
        			else
        			{
        				sum += parseInt(this.dsDetail.getColumn(i, "MAX_JEOMSU"));
        			}
        		}
        	}

        	if (sum != 400)
        	{
        		this.alert("실기항목의 최대점수의 합계가 400점이 되어야 합니다.");
        		return false;
        	}

        	var result = this.gfn_confirm( "선택된 전공을 기준으로 실기대상자를 생성합니다.", "실기대상자 생성","","question" );
        	if(result == 0)
        	{
        		return false;
        	}

        	this.fn_CreateDaeSangJa();
        };

        /**
         * 기능 : 생성 실행
         */
        this.fn_CreateDaeSangJa = function()
        {
            var strSvc      = "CreateDaeSangJa";
            var strUrl      = "/prj/EN/EN04/Save_1010402_M_CreateDaesangja.do";
            var strInDs     = "ds_dInput=ds_dInput:a ";
            var strOutDs    = "dsResult=dsResult";
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

        this.fn_PostCreateDaeSangJa = function()
        {
        	if(this.dsResult.getColumn(0, "OUT_CODE") == "-1")
        	{
        		this.alert("실기대상자 생성에 성공하였습니다.");
        		this.fn_DRet();
        	}
        	else
        	{
        		this.alert(this.dsResult.getColumn(0, "OUT_MSG"));
        	}
        }

        /**********************************************************************
                17. 실기대상자삭제 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 삭제 전 실행
         */
        this.btnDeleteSilGiDaeSangJa_onclick = function(obj,e)
        {
        	if(this.dsMaster.rowcount == 0)
        	{
        		this.alert("실기대상자를 삭제할 데이터가 없습니다.");
        		return false;
        	}

        	var result = this.gfn_confirm( "선택된 전공을 기준으로 실기대상자를 삭제합니다.", "실기대상자 생성","","question" );
        	if(result == 0)
        	{
        		return false;
        	}
        	this.fn_DeleteDaeSangJa();
        };

        /**
         * 기능 : 삭제 실행
         */
        this.fn_DeleteDaeSangJa = function()
        {
            var strSvc      = "DeleteDaeSangJa";
            var strUrl      = "/prj/EN/EN04/Delete_1010402_M_DeleteDaesangja.do";
            var strInDs     = "ds_dInput=ds_dInput:a ";
            var strOutDs    = "dsResult=dsResult";
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

        this.fn_PostDeleteDaeSangJa = function()
        {
        	if(this.dsResult.getColumn(0, "OUT_CODE") == "-1")
        	{
        		this.alert("실기대상자 삭제에 성공하였습니다.");
        		this.fn_DRet();
        	}
        	else
        	{
        		this.alert(this.dsResult.getColumn(0, "OUT_MSG"));
        	}
        }

        /**********************************************************************
                18. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj,e)
        {
        	this.gfn_gridSort(obj,e);
        };

        this.grdDetail_onheaddblclick = function(obj,e)
        {
        	this.gfn_gridSort(obj,e);
        };

        this.grdDetail2_onheaddblclick = function(obj,e)
        {
        	this.gfn_gridSort(obj,e);
        };


        // 입시년도 변경시 모집구분 세팅됨
        this.divSearch_spnSearchYYYY_onchanged = function(obj,e)
        {
        	this.fn_IpsiMojipGb();
        };

        // 모집구분 변경시 학과 세팅됨
        this.divSearch_cboSearchMojip_onitemchanged = function(obj,e)
        {
        	this.fn_IpsiHakgwa();
        };

        // 학과 변경시 전공 세팅됨
        this.divSearch_cboSearchHakgwa_onitemchanged = function(obj,e)
        {
        	this.ds_jeongongCd.deleteAll();

        	if(this.ds_input.getColumn(0, "HAKGWA_CD") != '')
        	{
        		var strSvc      = "";
        		var strUrl      = "prj/EN/EN04/Retrieve_JEONGONGCD.do";
        		var strInDs     = "ds_input=ds_input";
        		var strOutDs    = "ds_jeongongCd=ds_jeongongCd";
        		var strArg      = "";
        		var GBV_MENUID    = objApp.gv_cutPrgId;
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

        	this.ds_jeongongCd.insertRow(0);
        	this.ds_jeongongCd.setColumn(0, "JEONGONG_CD", "");
        	this.ds_jeongongCd.setColumn(0, "JEONGONG_NM", "전체");
        	this.divSearch.form.cboSearchJeongong.set_index(0);
        };

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
        	var value = false;

        	if(this.gfn_isUpdate(this.dsMaster))
        	{
        		value = true;
        	}
        	else if(this.gfn_isUpdate(this.dsDetail))
        	{
        		value = true;
        	}
        	else if(this.gfn_isUpdate(this.dsDetail2))
        	{
        		value = true;
        	}

        	return value;
        };

        /**
          * 디테일 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_detailbeforeclose = function()
        {
        	var value = false;

        	if(this.gfn_isUpdate(this.dsDetail))
        	{
        		value = true;
        	}
        	else if(this.gfn_isUpdate(this.dsDetail2))
        	{
        		value = true;
        	}

        	return value;
        };

        /**********************************************************************
                19. 출력물
        ***********************************************************************/
        this.fn_PrintSilgi = function()
        {
        	if(this.ds_input.getColumn(0, "IPSI_YYYY") == "" || this.ds_input.getColumn(0, "IPSI_YYYY") == null)
        	{
        		this.alert("입시년도를 입력해주세요.");
        		return false;
        	}
        	else if(this.ds_input.getColumn(0, "MOJIP_GBCD") == "" || this.ds_input.getColumn(0, "MOJIP_GBCD") == null)
        	{
        		this.alert("모집구분을 선택해주세요.");
        		return false;
        	}
        	else if(this.ds_input.getColumn(0, "HAKGWA_CD") == "" || this.ds_input.getColumn(0, "HAKGWA_CD") == null)
        	{
        		this.alert("학과를 선택해주세요.");
        		return false;
        	}

        	var IPSI_YYYY  		= this.ds_input.getColumn(0, 'IPSI_YYYY');
        	var MOJIP_GBCD 		= this.ds_input.getColumn(0, 'MOJIP_GBCD');
        	var HAKGWA_CD 		= this.ds_input.getColumn(0, 'HAKGWA_CD');
        	var JEONGONG_CD 	= this.ds_input.getColumn(0, 'JEONGONG_CD');

        	var param = { IPSI_YYYY     : IPSI_YYYY
        				, MOJIP_GBCD 	: MOJIP_GBCD
        				, HAKGWA_CD 	: HAKGWA_CD
        				, JEONGONG_CD 	: JEONGONG_CD
        				};

        	this.gfn_commonUtils_report('EN04/EN04_1010402_M_01.crf',  param);
        };

        this.fn_PrintSuheompyo = function()
        {
        	if(this.ds_input.getColumn(0, "IPSI_YYYY") == "" || this.ds_input.getColumn(0, "IPSI_YYYY") == null)
        	{
        		this.alert("입시년도를 입력해주세요.");
        		return false;
        	}
        	else if(this.ds_input.getColumn(0, "MOJIP_GBCD") == "" || this.ds_input.getColumn(0, "MOJIP_GBCD") == null)
        	{
        		this.alert("모집구분을 선택해주세요.");
        		return false;
        	}
        	else if(this.ds_input.getColumn(0, "HAKGWA_CD") == "" || this.ds_input.getColumn(0, "HAKGWA_CD") == null)
        	{
        		this.alert("학과를 선택해주세요.");
        		return false;
        	}

        	var IPSI_YYYY  		= this.ds_input.getColumn(0, 'IPSI_YYYY');
        	var MOJIP_GBCD 		= this.ds_input.getColumn(0, 'MOJIP_GBCD');
        	var HAKGWA_CD 		= this.ds_input.getColumn(0, 'HAKGWA_CD');
        	var JEONGONG_CD 	= this.ds_input.getColumn(0, 'JEONGONG_CD');

        	var param = { IPSI_YYYY     : IPSI_YYYY
        				, MOJIP_GBCD 	: MOJIP_GBCD
        				, HAKGWA_CD 	: HAKGWA_CD
        				, JEONGONG_CD 	: JEONGONG_CD
        				};

        	this.gfn_commonUtils_report('EN04/EN04_1010402_M_02.crf',  param);
        };

        /**********************************************************************
                20. 검색창 엔터키 조회
        ***********************************************************************/
        this.divSearch_spnSearchYYYY_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"IPSI_YYYY",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchMojip_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"MOJIP_GBCD",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchHakgwa_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"HAKGWA_CD",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchJeongong_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"JEONGONG_CD",obj.value);
        		this.fn_Ret();
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
            this.grdMaster.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
            this.grdDetail.addEventHandler("onheaddblclick",this.grdDetail_onheaddblclick,this);
            this.btnNewSilGi.addEventHandler("onclick",this.btnNewSilGi_onclick,this);
            this.btnSaveSilGi.addEventHandler("onclick",this.btnSaveSilGi_onclick,this);
            this.btnDelSilGi.addEventHandler("onclick",this.btnDelSilGi_onclick,this);
            this.grdDetail2.addEventHandler("onheaddblclick",this.grdDetail2_onheaddblclick,this);
            this.btnNewSilGiGyoSoo.addEventHandler("onclick",this.btnNewSilGiGyoSoo_onclick,this);
            this.btnSaveSilGiGyoSoo.addEventHandler("onclick",this.btnSaveSilGiGyoSoo_onclick,this);
            this.btnDelSilGiGyoSoo.addEventHandler("onclick",this.btnDelSilGiGyoSoo_onclick,this);
            this.btnCreateSilGiDaeSangJa.addEventHandler("onclick",this.btnCreateSilGiDaeSangJa_onclick,this);
            this.btnDeleteSilGiDaeSangJa.addEventHandler("onclick",this.btnDeleteSilGiDaeSangJa_onclick,this);
            this.divSearch.form.cboSearchJeongong.addEventHandler("onitemchanged",this.Combo_onitemchanged,this);
            this.divSearch.form.cboSearchJeongong.addEventHandler("onkeydown",this.divSearch_cboSearchJeongong_onkeydown,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onitemchanged",this.divSearch_cboSearchHakgwa_onitemchanged,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onkeydown",this.divSearch_cboSearchHakgwa_onkeydown,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onchanged",this.divSearch_spnSearchYYYY_onchanged,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onkeydown",this.divSearch_spnSearchYYYY_onkeydown,this);
            this.divSearch.form.cboSearchMojip.addEventHandler("onitemchanged",this.divSearch_cboSearchMojip_onitemchanged,this);
            this.divSearch.form.cboSearchMojip.addEventHandler("onkeydown",this.divSearch_cboSearchMojip_onkeydown,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsMaster.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
        };
        this.loadIncludeScript("EN04_1010402_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
