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
            this.set_titletext("입시접수정보");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMaster", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"JANGHAKDAESANG_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"10\"/><Column id=\"GYEYEOL_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_JEONGONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONHYEONG_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"SEBUJEONHYEONG_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"SUHEOMSAENG_NM\" type=\"STRING\" size=\"40\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"8\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"CHONGDEUNGGEUP\" type=\"STRING\" size=\"10\"/><Column id=\"SEOKCHA\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HAPGYEOK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"IPHAK_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SUEOP_AMT\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONHYEONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SEBUJEONHYEONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"GYEYEOL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_HAKBU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"IPSI_YYYY\"/><Col id=\"MOJIP_GBCD\"/><Col id=\"JEONHYEONG_GBCD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGyeyeol", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgwa", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJeongong", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBaseYyyyHakgi", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchMojip", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"FILTER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchSinip", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchPyeonip", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchGuwol", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchHakgwa", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchJuya", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJuya", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGrdHakgwa", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMojip", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHapgyeok", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchJeonhyeong", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"ADDR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchSebu", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJeonhyeong", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"ADDR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSebu", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnClose","1130",null,"60","25",null,"10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnChoice","1065",null,"60","25",null,"10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("선택");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","10","10",null,"69","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","431","9","70","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_text("전형구분");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchSebu","653","9","197","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsSearchSebu");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJeonhyeong","509","9","127","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsSearchJeonhyeong");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch","1110","9","60","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Crud");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","16","0","1620","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_02","26","31","1600","5",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 6pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","20","58","1610","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","67",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00","-8","9","100","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("입시년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","103","9","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","216","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("모집구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchMojip","306","9","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsSearchMojip");
            obj.set_text("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01","-26","36","118","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_text("주야구분");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchSuheomNo","306","36","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00","196","36","100","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("수험번호/성명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJuya","103","36","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsSearchJuya");
            obj.set_text("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","431","36","50","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_text("계열");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchGyeyeol","489","36","127","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_innerdataset("dsGyeyeol");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","600","36","86","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_text("학과");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgwa","693","36","127","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_innerdataset("dsHakgwa");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","803","36","86","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_text("전공");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJeongong","896","36","127","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_innerdataset("dsJeongong");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","850","9","86","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_text("학과");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJeonhyeongHakgwa","943","9","127","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_innerdataset("dsSearchHakgwa");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stRowCnt","10",null,"233","24",null,"10",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","10","100",null,null,"10","50",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"50\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"입시년도\"/><Cell col=\"2\" text=\"수험번호\"/><Cell col=\"3\" text=\"수험생명\"/><Cell col=\"4\" text=\"주야구분\"/><Cell col=\"5\" text=\"모집구분\"/><Cell col=\"6\" text=\"전형구분\"/><Cell col=\"7\" text=\"세부전형구분\"/><Cell col=\"8\" text=\"학과\"/><Cell col=\"9\" text=\"합격구분\"/><Cell col=\"10\" text=\"입학금\"/><Cell col=\"11\" text=\"등록금\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:IPSI_YYYY\"/><Cell col=\"2\" text=\"bind:SUHEOM_NO\"/><Cell col=\"3\" text=\"bind:SUHEOMSAENG_NM\"/><Cell col=\"4\" text=\"bind:JUYA_GBCD\" displaytype=\"combotext\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\" combodataset=\"dsJuya\"/><Cell col=\"5\" text=\"bind:MOJIP_GBCD\" displaytype=\"combotext\" combodataset=\"dsMojip\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"6\" text=\"bind:JEONHYEONG_GBCD\" displaytype=\"expr:JEONHYEONG_GBCD != &apos;&apos;?&apos;combotext&apos;:&apos;normal&apos;\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\" combodataset=\"dsJeonhyeong\" textAlign=\"left\"/><Cell col=\"7\" displaytype=\"expr:SEBUJEONHYEONG_GBCD != &apos;&apos;?&apos;combotext&apos;:&apos;normal&apos;\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\" combodataset=\"dsSebu\" text=\"bind:SEBUJEONHYEONG_GBCD\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:HAKGWA_JEONGONG_CD\" displaytype=\"combotext\" combodatacol=\"DEPT_NM\" combocodecol=\"DEPT_CD\" combodataset=\"dsGrdHakgwa\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:HAPGYEOK_GBCD\" displaytype=\"combotext\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\" combodataset=\"dsHapgyeok\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:IPHAK_AMT\" textAlign=\"right\"/><Cell col=\"11\" text=\"bind:SUEOP_AMT\" textAlign=\"right\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1200,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_description("입시접수정보");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.cboSearchSebu","value","ds_input","SEBUJEONHYEONG_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.cboSearchJeonhyeong","value","ds_input","JEONHYEONG_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.spnSearchYYYY","value","ds_input","IPSI_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.cboSearchMojip","value","ds_input","MOJIP_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.edtSearchSuheomNo","value","ds_input","SUHEOM_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboSearchJuya","value","ds_input","JUYA_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboSearchGyeyeol","value","ds_input","GYEYEOL_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.cboSearchHakgwa","value","ds_input","HAKGWA_HAKBU_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.cboSearchJeongong","value","ds_input","JEONGONG_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch.form.cboSearchJeonhyeongHakgwa","value","ds_input","HAKGWA_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("COMM_P12.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): COM_P12.xfdl(입시접수정보)
        * 작 성         일 명: jiback
        * 작 성         일 자: 2022/08/09
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

        	if( !this.gfn_isNull(this.getOwnerFrame().suheomNO)){
        		this.ds_input.setColumn(0, "SUHEOM_NO", this.getOwnerFrame().suheomNO);
        	}

            //사용자 화면  초기화 함수
            this.fn_formInit();
        };

        /**********************************************************************
                04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        this.fn_formInit = function()
        {
            var strDs    = "dsSearchSinip|dsSearchPyeonip|dsSearchGuwol|dsSearchJuya|dsJuya|dsHapgyeok|dsSearchJeonhyeong|dsSearchSebu|dsJeonhyeong|dsSebu";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00005|01024|01028|00003|00003|01014|01001|01002|01001|01002";                         // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "X|X|X|T|X|X|T|T|X|X";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
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
        	var strEopmuGbcd = "US";
        	var strUseYn     = "1";
            // gfn_BaseYyyyHakgiLoad(데이터셋, svcId , 업무구분, 사용구분);
            // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.gfn_BaseYyyyHakgiLoad(strDs
                                      , svcId
                                      , strEopmuGbcd
                                      , strUseYn);

        	// gfn_GyeyeolComboLoad(데이터셋, 콤보 옵션)
        	// 계열콤보
        	strDs       = "dsGyeyeol";
        	strComb     = "T";
        	svcId       = "gyeyeolInit";
        	strUseYn    = "1"; // 사용 여부
        	strJojikGbcd = "20";  // 조직구분 10.행정조직   20.학사조직   30.입시조직
        	strDaehakCd = "";  //
        	this.gfn_GyeyeolComboLoad(this.divSearch.form.cboSearchGyeyeol, strComb, svcId, strUseYn, strJojikGbcd, strDaehakCd , objApp.gv_cutPrgId);

        	// gfn_HakgwaComboLoad(데이터셋, 콤보 옵션)
        	// 학과콤보
        	strDs       = "dsSearchHakgwa";
        	strComb     = "N";
        	svcId       = "searchHakgwaInit";
        	strUseYn    = "1"; // 사용 여부
        	strJojikGbcd = "20";  // 조직구분 10.행정조직   20.학사조직   30.입시조직
        	strUpDeptCd = "all";
        	this.gfn_HakgwaComboLoad(this.divSearch.form.cboSearchJeonhyeongHakgwa, strComb, svcId, strUseYn, strJojikGbcd, strUpDeptCd, objApp.gv_cutPrgId);

        	// 모집구분에 따른 검색조건 뷰 변경
        	this.fn_ChangeMojipGbcd();
        };

        this.fn_PostformInit = function()
        {
            var addRow = -1;
        	for(var i = 0 ; i < this.dsSearchSinip.rowcount ; i++) {
        	    addRow = this.dsSearchMojip.addRow();
        		this.dsSearchMojip.copyRow(addRow, this.dsSearchSinip, i);
        		this.dsSearchMojip.setColumn(addRow, 'FILTER', '1');
        	}
        	for(var i = 0 ; i < this.dsSearchPyeonip.rowcount ; i++) {
        	    addRow = this.dsSearchMojip.addRow();
        		this.dsSearchMojip.copyRow(addRow, this.dsSearchPyeonip, i);
        		this.dsSearchMojip.setColumn(addRow, 'FILTER', '3');
        	}
        	for(var i = 0 ; i < this.dsSearchGuwol.rowcount ; i++) {
        	    addRow = this.dsSearchMojip.addRow();
        		this.dsSearchMojip.copyRow(addRow, this.dsSearchGuwol, i);
        		this.dsSearchMojip.setColumn(addRow, 'FILTER', '1');
        	}
        	this.dsMojip.copyData(this.dsSearchMojip);
        	this.dsSearchMojip.insertRow(0);
        	this.dsSearchMojip.setColumn(0, "CODE", "");
        	this.dsSearchMojip.setColumn(0, "CODE_NM", "전체");

        	this.divSearch.form.cboSearchJeonhyeong.set_index(0);
        };

        this.fn_PostBaseYyyyHakgiInit = function()
        {
        	if (this.dsBaseYyyyHakgi.rowcount > 0)
        	{
        		this.ds_input.setColumn(0, "IPSI_YYYY",  this.dsBaseYyyyHakgi.getColumn(0, "YYYY"));
        	}
        };

        this.fn_PostGyeyeolInt = function()
        {
        	this.divSearch.form.cboSearchGyeyeol.set_index(0);

        	// 계열 onitemchanged 호출
        	let info = new nexacro.ItemChangeEventInfo;
        	this.cboSearchGyeyeol_onitemchanged(this.cboSearchGyeyeol, info);
        };


        this.fn_PostHakgwaInit = function()
        {
        	this.divSearch.form.cboSearchHakgwa.set_index(0);

        	// 학과 onitemchanged 호출
        	let info = new nexacro.ItemChangeEventInfo;
        	this.cboSearchHakgwa_onitemchanged(this.cboSearchHakgwa, info);
        };

        this.fn_PostJeongongInit = function()
        {
        	this.divSearch.form.cboSearchJeongong.set_index(0);
        };

        this.fn_PostSearchHakgwaInit = function()
        {
        	this.dsGrdHakgwa.copyData(this.dsSearchHakgwa);
        	this.dsGrdHakgwa.deleteRow(0);
        	this.dsSearchHakgwa.setColumn(0, "DEPT_CD", "");
        	this.dsSearchHakgwa.setColumn(0, "DEPT_NM", "전체");
        	this.divSearch.form.cboSearchJeonhyeongHakgwa.set_index(0);
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
        			case "gyeyeolInit":
        			        this.fn_PostGyeyeolInit();
        			    break;
        			case "hakgwaInit":
        			        this.fn_PostHakgwaInit();
        			    break;
        			case "jeongongInit":
        			        this.fn_PostJeongongInit();
        			    break;
        			case "searchHakgwaInit":
        			        this.fn_PostSearchHakgwaInit();
        			    break;
                    case "Ret":
                            this.fn_PostRet();
                        break;
                    default:
                        break;
                }
            }
        };

        /**********************************************************************
                05. 조회 함수 선언(마스터 함수)
        ***********************************************************************/
        this.btnSearch_onclick = function(obj,e)
        {
        	this.fn_Ret();
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_Ret = function()
        {
            var strSvc      = "Ret";
            var strUrl      = "/prj/com/Retrieve_P12.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsMaster=dsMaster";
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
        this.fn_PostRet = function()
        {
            this.gfn_getRowCount(this.stRowCnt,this.dsMaster);
        };

        /**********************************************************************
                06. 각종함수
        ***********************************************************************/
        // 모집구분에 따른 검색조건 뷰 변경
        this.fn_ChangeMojipGbcd = function()
        {
        	var mojipGbcd = this.divSearch.form.cboSearchMojip.value; // 모집구분

        	if(mojipGbcd == '7' || mojipGbcd == '8') {
        		this.divSearch.form.cboSearchGyeyeol.set_enable(true); // cbo 계열
        		this.divSearch.form.cboSearchHakgwa.set_enable(true); // cbo 학과
        		this.divSearch.form.cboSearchJeongong.set_enable(true); // cbo 전공

        		this.divSearch.form.cboSearchJeonhyeong.set_enable(false); // cbo 전형구분
        		this.divSearch.form.cboSearchSebu.set_enable(false); // cbo 세부전형구분
        		this.divSearch.form.cboSearchJeonhyeongHakgwa.set_enable(false); // cbo 입시학과

        		this.divSearch.form.cboSearchJeonhyeong.set_value(''); // cbo 전형구분
        		this.divSearch.form.cboSearchSebu.set_value(''); // cbo 세부전형구분
        		this.divSearch.form.cboSearchJeonhyeongHakgwa.set_value(''); // cbo 입시학과
        	}
        	else if(mojipGbcd == '1' || mojipGbcd == '2' || mojipGbcd == '3' || mojipGbcd == '4' || mojipGbcd == '9') {
        		this.divSearch.form.cboSearchGyeyeol.set_enable(false); // cbo 계열
        		this.divSearch.form.cboSearchHakgwa.set_enable(false); // cbo 학과
        		this.divSearch.form.cboSearchJeongong.set_enable(false); // cbo 전공

        		this.divSearch.form.cboSearchJeonhyeong.set_enable(true); // cbo 전형구분
        		this.divSearch.form.cboSearchSebu.set_enable(true); // cbo 세부전형구분
        		this.divSearch.form.cboSearchJeonhyeongHakgwa.set_enable(true); // cbo 입시학과

        		this.divSearch.form.cboSearchGyeyeol.set_value(''); // cbo 계열
        		this.divSearch.form.cboSearchHakgwa.set_value(''); // cbo 학과
        		this.divSearch.form.cboSearchJeongong.set_value(''); // cbo 전공
        	}
        	else if(this.gfn_isNull(mojipGbcd)) {
        		this.divSearch.form.cboSearchGyeyeol.set_enable(false); // cbo 계열
        		this.divSearch.form.cboSearchHakgwa.set_enable(false); // cbo 학과
        		this.divSearch.form.cboSearchJeongong.set_enable(false); // cbo 전공

        		this.divSearch.form.cboSearchJeonhyeong.set_enable(false); // cbo 전형구분
        		this.divSearch.form.cboSearchSebu.set_enable(false); // cbo 세부전형구분
        		this.divSearch.form.cboSearchJeonhyeongHakgwa.set_enable(false); // cbo 입시학과

        		this.divSearch.form.cboSearchJeonhyeong.set_value(''); // cbo 전형구분
        		this.divSearch.form.cboSearchSebu.set_value(''); // cbo 세부전형구분
        		this.divSearch.form.cboSearchJeonhyeongHakgwa.set_value(''); // cbo 입시학과
        		this.divSearch.form.cboSearchGyeyeol.set_value(''); // cbo 계열
        		this.divSearch.form.cboSearchHakgwa.set_value(''); // cbo 학과
        		this.divSearch.form.cboSearchJeongong.set_value(''); // cbo 전공
        	}
        };

        /**********************************************************************
                06. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj,e)
        {
            this.gfn_gridSort(obj,e);
        };

        this.btnChoice_onclick = function(obj,e)
        {
        	var objRtnArr = new Array(20);
        	objRtnArr[0] = this.dsMaster.getColumn(this.dsMaster.rowposition, "SUHEOM_NO");
        	objRtnArr[1] = this.dsMaster.getColumn(this.dsMaster.rowposition, "SUHEOMSAENG_NM");
        	objRtnArr[2] = this.dsMaster.getColumn(this.dsMaster.rowposition, "JANGHAKDAESANG_GBCD");
        	objRtnArr[3] = this.dsMaster.getColumn(this.dsMaster.rowposition, "IPSI_YYYY");
        	objRtnArr[4] = this.dsMaster.getColumn(this.dsMaster.rowposition, "MOJIP_GBCD");
        	objRtnArr[5] = this.dsMaster.getColumn(this.dsMaster.rowposition, "GYEYEOL_CD");
        	objRtnArr[6] = this.dsMaster.getColumn(this.dsMaster.rowposition, "HAKGWA_CD");
        	objRtnArr[7] = this.dsMaster.getColumn(this.dsMaster.rowposition, "JEONGONG_CD");
        	objRtnArr[8] = this.dsMaster.getColumn(this.dsMaster.rowposition, "HAKGWA_JEONGONG_CD");
        	objRtnArr[9] = this.dsMaster.getColumn(this.dsMaster.rowposition, "JUYA_GBCD");
        	objRtnArr[10] = this.dsMaster.getColumn(this.dsMaster.rowposition, "JEONHYEONG_GBCD");
        	objRtnArr[11] = this.dsMaster.getColumn(this.dsMaster.rowposition, "SEBUJEONHYEONG_GBCD");
        	objRtnArr[12] = this.dsMaster.getColumn(this.dsMaster.rowposition, "HAKNYEON");
        	objRtnArr[13] = this.dsMaster.getColumn(this.dsMaster.rowposition, "BIRTHDAY");
        	objRtnArr[14] = this.dsMaster.getColumn(this.dsMaster.rowposition, "GENDER");
        	objRtnArr[15] = this.dsMaster.getColumn(this.dsMaster.rowposition, "CHONGDEUNGGEUP");
        	objRtnArr[16] = this.dsMaster.getColumn(this.dsMaster.rowposition, "SEOKCHA");
        	objRtnArr[17] = this.dsMaster.getColumn(this.dsMaster.rowposition, "HAPGYEOK_GBCD");
        	objRtnArr[18] = this.dsMaster.getColumn(this.dsMaster.rowposition, "IPHAK_AMT");
        	objRtnArr[19] = this.dsMaster.getColumn(this.dsMaster.rowposition, "SUEOP_AMT");

        	this.close(objRtnArr.toString());
        };

        this.btnClose_onclick = function(obj,e)
        {
        	this.close("CLOSE");
        };

        /**
          * 학과 필터 적용
         **/
        this.cboSearchGyeyeol_onitemchanged = function(obj,e)
        {
        	// gfn_HakgwaComboLoad(데이터셋, 콤보 옵션)
        	// 학과콤보
        	strDs       = "dsHakgwa";
        	strComb     = "TT";
        	svcId       = "hakgwaInit";
        	strUseYn    = "1"; // 사용 여부
        	strJojikGbcd = "20";  // 조직구분 10.행정조직   20.학사조직   30.입시조직

        	if(this.gfn_isNull(e.postvalue))
        		strUpDeptCd = "";
        	else
        		strUpDeptCd = e.postvalue;

        	this.gfn_HakgwaComboLoad(this.divSearch.form.cboSearchHakgwa, strComb, svcId, strUseYn, strJojikGbcd, strUpDeptCd, this.menuId);
        };

        /**
          * 전공 필터 적용
         **/
        this.cboSearchHakgwa_onitemchanged = function(obj,e)
        {
        	// gfn_JeongongComboLoad(데이터셋, 콤보 옵션)
        	// 전공콤보
        	strDs       = "dsJeongong";
        	strComb     = "TT";
        	svcId       = "jeongongInit";
        	strUseYn    = "1"; // 사용 여부
        	strJojikGbcd = "20";  // 조직구분 10.행정조직   20.학사조직   30.입시조직

        	if(this.gfn_isNull(e.postvalue))
        		strUpDeptCd = "";
        	else
        		strUpDeptCd = e.postvalue;

        	this.gfn_JeongongComboLoad(this.divSearch.form.cboSearchJeongong, strComb, svcId, strUseYn, strJojikGbcd, strUpDeptCd, this.menuId);
        };

        this.divSearch_spnSearchYYYY_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13) {
        		this.ds_input.setColumn(0,"IPSI_YYYY",obj.value);
        		this.fn_Ret();
        	}
        };
        this.divSearch_cboSearchMojip_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13) {
        		this.ds_input.setColumn(0,"MOJIP_GBCD",obj.value);
        		this.fn_Ret();
        	}
        };
        this.divSearch_cboSearchJeonhyeong_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13) {
        		this.ds_input.setColumn(0,"JEONHYEONG_GBCD",obj.value);
        		this.fn_Ret();
        	}
        };
        this.divSearch_cboSearchSebu_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13) {
        		this.ds_input.setColumn(0,"SEBUJEONHYEONG_GBCD",obj.value);
        		this.fn_Ret();
        	}
        };
        this.divSearch_cboSearchJeonhyeongHakgwa_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13) {
        		this.ds_input.setColumn(0,"HAKGWA_CD",obj.value);
        		this.fn_Ret();
        	}
        };
        this.divSearch_cboSearchJuya_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13) {
        		this.ds_input.setColumn(0,"JUYA_GBCD",obj.value);
        		this.fn_Ret();
        	}
        };
        this.divSearch_edtSearchSuheomNo_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13) {
        		this.ds_input.setColumn(0,"SUHEOM_NO",obj.value);
        		this.fn_Ret();
        	}
        };
        this.divSearch_cboSearchGyeyeol_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13) {
        		this.ds_input.setColumn(0,"GYEYEOL_CD",obj.value);
        		this.fn_Ret();
        	}
        };
        this.divSearch_cboSearchHakgwa_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13) {
        		this.ds_input.setColumn(0,"HAKGWA_HAKBU_CD",obj.value);
        		this.fn_Ret();
        	}
        };
        this.divSearch_cboSearchJeongong_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13) {
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
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.btnChoice.addEventHandler("onclick",this.btnChoice_onclick,this);
            this.divSearch.form.cboSearchSebu.addEventHandler("onitemchanged",this.cboSearchHakgwa_onitemchanged,this);
            this.divSearch.form.cboSearchSebu.addEventHandler("onkeydown",this.divSearch_cboSearchSebu_onkeydown,this);
            this.divSearch.form.cboSearchJeonhyeong.addEventHandler("onitemchanged",this.cboSearchGyeyeol_onitemchanged,this);
            this.divSearch.form.cboSearchJeonhyeong.addEventHandler("onkeydown",this.divSearch_cboSearchJeonhyeong_onkeydown,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onkeydown",this.divSearch_spnSearchYYYY_onkeydown,this);
            this.divSearch.form.cboSearchMojip.addEventHandler("onitemchanged",this.fn_ChangeMojipGbcd,this);
            this.divSearch.form.cboSearchMojip.addEventHandler("onkeydown",this.divSearch_cboSearchMojip_onkeydown,this);
            this.divSearch.form.edtSearchSuheomNo.addEventHandler("onkeydown",this.divSearch_edtSearchSuheomNo_onkeydown,this);
            this.divSearch.form.cboSearchJuya.addEventHandler("onkeydown",this.divSearch_cboSearchJuya_onkeydown,this);
            this.divSearch.form.cboSearchGyeyeol.addEventHandler("onitemchanged",this.cboSearchGyeyeol_onitemchanged,this);
            this.divSearch.form.cboSearchGyeyeol.addEventHandler("onkeydown",this.divSearch_cboSearchGyeyeol_onkeydown,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onitemchanged",this.cboSearchHakgwa_onitemchanged,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onkeydown",this.divSearch_cboSearchHakgwa_onkeydown,this);
            this.divSearch.form.cboSearchJeongong.addEventHandler("onkeydown",this.divSearch_cboSearchJeongong_onkeydown,this);
            this.divSearch.form.cboSearchJeonhyeongHakgwa.addEventHandler("onitemchanged",this.cboSearchHakgwa_onitemchanged,this);
            this.divSearch.form.cboSearchJeonhyeongHakgwa.addEventHandler("onkeydown",this.divSearch_cboSearchJeonhyeongHakgwa_onkeydown,this);
            this.grdMaster.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
        };
        this.loadIncludeScript("COMM_P12.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
