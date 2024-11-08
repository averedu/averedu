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
            this.set_titletext("면접점수리스트");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_input", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PYEONIP_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"PYEONIP_MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JIWONHAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PYEONIP_HAKNYEON\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOMSAENG_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"PYEONIP_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"PYEONIP_MOJIP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"PYEONIP_MOJIP_GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JUYA_GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"PYEONIP_HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"PYEONIP_HAKNYEON_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOMSAENG_NM\" type=\"STRING\" size=\"40\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"8\"/><Column id=\"SABEON_MYEONJEOP_JEOMSU\" type=\"STRING\" size=\"256\"/><Column id=\"CHONGJEOM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gijunYyyy", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_SearchJuya", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_SearchHakgwa", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_SearchMojip", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PYEONIP_MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"PYEONIP_MOJIP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HYEONJAE_MOJIP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"JEOPSU_FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"JEOPSU_TODT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_SearchHaknyeon", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PYEONIP_HAKNYEON\" type=\"STRING\" size=\"256\"/><Column id=\"PYEONIP_HAKNYEON_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"42","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01","7","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("편입년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","86","9","81","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_cssclass("point");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01","167","0","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","270","1","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_02_00","202","9","70","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("모집구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchMojip","280","9","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_SearchMojip");
            obj.set_codecolumn("PYEONIP_MOJIP_GBCD");
            obj.set_datacolumn("PYEONIP_MOJIP_NM");
            obj.set_cssclass("point");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00","390","0","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_02_00_00","427","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("학부/학과");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","501","1","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgwa","511","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_SearchHakgwa");
            obj.set_codecolumn("HAKGWA_CD");
            obj.set_datacolumn("HAKGWA_NM");
            obj.set_cssclass("point");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00_00","631","0","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_02_00_00_00","667","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("주야구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJuya","745","9","90","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_SearchJuya");
            obj.set_codecolumn("JUYA_GBCD");
            obj.set_datacolumn("JUYA_GBNM");
            obj.set_cssclass("point");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","735","1","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_02_00_00_00_00","872","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("학년");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00_00_00","836","0","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00","915","1","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHaknyeon","925","9","90","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_SearchHaknyeon");
            obj.set_codecolumn("PYEONIP_HAKNYEON");
            obj.set_datacolumn("PYEONIP_HAKNYEON_NM");
            obj.set_cssclass("point");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00_00_00_00","1015","0","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_02_00_00_00_00_00","1051","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_text("수험번호");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchSuhoemNo","1129","9","90","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_cssclass("point");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00","1119","0","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00_00_00_00_00","1219","0","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_02_00_00_00_00_00_00","1254","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("25");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchNm","1307","9","90","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00_00","1297","0","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("26");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01","76","0","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("27");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_01","0","0","1450","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("28");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_01_00","0","31","1450","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("29");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staRowCnt","117","47","123","34",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","0","47","155","32",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("면접점수 내역");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","390","42","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","0","77",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"160\"/><Column size=\"60\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"편입년도\"/><Cell col=\"1\" text=\"모집구분\"/><Cell col=\"2\" text=\"수험번호\"/><Cell col=\"3\" text=\"성명\"/><Cell col=\"4\" text=\"생년월일\"/><Cell col=\"5\" text=\"학과\"/><Cell col=\"6\" text=\"학년\"/><Cell col=\"7\" text=\"주야구분\"/><Cell col=\"8\" text=\"면접점수\"/><Cell col=\"9\" text=\"총점\"/></Band><Band id=\"body\"><Cell text=\"bind:PYEONIP_YYYY\"/><Cell col=\"1\" text=\"bind:PYEONIP_MOJIP_GBNM\"/><Cell col=\"2\" text=\"bind:SUHEOM_NO\"/><Cell col=\"3\" text=\"bind:SUHEOMSAENG_NM\"/><Cell col=\"4\" text=\"bind:BIRTHDAY\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"5\" text=\"bind:HAKGWA_NM\"/><Cell col=\"6\" text=\"bind:PYEONIP_HAKNYEON_NM\"/><Cell col=\"7\" text=\"bind:JUYA_GBNM\"/><Cell col=\"8\" text=\"bind:SABEON_MYEONJEOP_JEOMSU\"/><Cell col=\"9\" text=\"bind:CHONGJEOM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","1","69","320","8",null,null,null,null,null,null,this);
            obj.set_taborder("5");
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
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.spnSearchYYYY","value","ds_input","PYEONIP_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboSearchSeunginSangtae00_00","value","ds_input","HAKGWA_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboSearchMojip","value","ds_input","PYEONIP_MOJIP_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboSearchHakgwa","value","ds_input","HAKGWA_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.cboSearchJuya","value","ds_input","JUYA_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.cboSearchHaknyeon","value","ds_input","PYEONIP_HAKNYEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.edtSearchSuhoemNo","value","ds_input","SUHEOM_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.edtSearchNm","value","ds_input","SUHEOMSAENG_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("ET04_1020405_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): ET03_1020405_M.xfdl(면접점수리스트)
        * 작 성         일 명: 박경민
        * 작 성         일 자: 2021/04/30
        * 변 경         일 자:
        * 변 경         자 명:
        * 변경 및 수정 로그 :
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
        	//사용자 화면  초기화 함수
           	this.fn_GijunYyyy();
        };

        /**********************************************************************
                04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
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
                    case "Ret":
                            this.fn_PostRet();
                        break;
                    case "GijunYyyy":
                            this.fn_PostGijunYyyy();
                        break;
        			case "SearchMojip":
                            this.fn_PostSearchMojip();
                        break;
        			case "SearchHakgwa":
                            this.fn_PostSearchHakgwa();
                        break;
        			case "SearchJuya":
                            this.fn_PostSearchJuya();
                        break;
        			case "SearchHaknyeon":
                            this.fn_PostSearchHaknyeon();
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
                case "tmp1" :        // 팁
                         this.fn_Tip();
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
            // 조회조건 셋팅
        	if (this.gfn_isNull(this.ds_input.getColumn(0, "PYEONIP_YYYY")))
        	{
        		this.gfn_alert("편입년도를 입력해주세요.","입력정보","","warning");
        		return false;
        	}
        	if (this.gfn_isNull(this.ds_input.getColumn(0, "PYEONIP_MOJIP_GBCD")))
        	{
        		this.gfn_alert("모집구분을 선택해주세요.","입력정보","","warning");
        		return false;
        	}
        	if (this.gfn_isNull(this.ds_input.getColumn(0, "HAKGWA_CD")))
        	{
        		this.gfn_alert("학과를 선택해주세요.","입력정보","","warning");
        		return false;
        	}
        	if (this.gfn_isNull(this.ds_input.getColumn(0, "JUYA_GBCD")))
        	{
        		this.gfn_alert("주야구분을 선택해주세요.","입력정보","","warning");
        		return false;
        	}
        	if (this.gfn_isNull(this.ds_input.getColumn(0, "PYEONIP_HAKNYEON")))
        	{
        		this.gfn_alert("학년을 선택해주세요.","입력정보","","warning");
        		return false;
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
            var strUrl      = "/prj/ET/ET04/Retrieve_1020405_M.do";
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
                06. 팁
        ***********************************************************************/
        this.fn_Tip = function()
        {
        	this.alert("도움말 준비중입니다.");
        };

        /**********************************************************************
                07. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj,e)
        {
        	this.gfn_gridSort(obj,e);
        };

        /**********************************************************************
                08. 공통 함수
        ***********************************************************************/
        // 기준년도 조회
        this.fn_GijunYyyy = function()
        {
        	var strSvc      = "GijunYyyy";
            var strUrl      = "/prj/EN/EN_COM/Retrieve_GIJUN_YYYY.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "ds_gijunYyyy=ds_gijunYyyy";
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
        }

        this.fn_PostGijunYyyy = function()
        {
        	this.ds_input.setColumn(0,"PYEONIP_YYYY", this.ds_gijunYyyy.getColumn(0, "YYYY"));
        	this.fn_SearchMojip();
        }

        //모집구분 조회(검색조건)
        this.fn_SearchMojip = function()
        {
        	this.ds_SearchHakgwa.deleteAll();
        	this.ds_SearchJuya.deleteAll();
        	this.ds_SearchHaknyeon.deleteAll();

        	var strSvc      = "SearchMojip";
            var strUrl      = "/prj/ET/ET_COM/Retrieve_PYEONIP_MOJIP.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "ds_SearchMojip=ds_pyeonipMojip";
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

        this.fn_PostSearchMojip = function()
        {
        	for(var i = 0; i < this.ds_SearchMojip.rowcount; i++)
        	{
                if(this.ds_SearchMojip.getColumn(i, "HYEONJAE_MOJIP_YN") == 'Y')
        		{
        			this.ds_input.setColumn(0,"PYEONIP_MOJIP_GBCD", this.ds_SearchMojip.getColumn(0, "PYEONIP_MOJIP_GBCD"));
                }
            }

        	if(this.ds_SearchMojip.rowcount == 0)
        	{
        		this.ds_SearchMojip.insertRow(0);
        		this.ds_SearchMojip.setColumn(0, 'PYEONIP_MOJIP_GBCD','');
        		this.ds_SearchMojip.setColumn(0, 'PYEONIP_MOJIP_NM','전체');
        	}

        	this.fn_SearchHakgwa();
        }

        // 학과 조회(검색조건)
        this.fn_SearchHakgwa = function ()
        {
        	var strSvc      = "SearchHakgwa";
            var strUrl      = "/prj/ET/ET_COM/Retrieve_PYEONIP_HAKGWA.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "ds_SearchHakgwa=ds_Hakgwa";
            var strArg      = "";
            var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;                                   //샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);
        }

        this.fn_PostSearchHakgwa = function()
        {
        	this.ds_SearchHakgwa.insertRow(0);
        	this.ds_SearchHakgwa.setColumn(0, 'HAKGWA_CD','');
         	this.ds_SearchHakgwa.setColumn(0, 'HAKGWA_NM','전체');
        	this.divSearch.form.cboSearchHakgwa.set_index(0);

        	this.ds_SearchJuya.insertRow(0);
        	this.ds_SearchJuya.setColumn(0, 'JUYA_GBCD','');
         	this.ds_SearchJuya.setColumn(0, 'JUYA_GBNM','전체');
        	this.divSearch.form.cboSearchJuya.set_index(0);

        	this.ds_SearchHaknyeon.insertRow(0);
        	this.ds_SearchHaknyeon.setColumn(0, 'PYEONIP_HAKNYEON','');
         	this.ds_SearchHaknyeon.setColumn(0, 'PYEONIP_HAKNYEON_NM','전체');
        	this.divSearch.form.cboSearchHaknyeon.set_index(0);
        }

        //주야구분 조회(검색조건)
        this.fn_SearchJuya = function ()
        {
        	var strSvc      = "SearchJuya";
            var strUrl      = "/prj/ET/ET_COM/Retrieve_JUYA.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "ds_SearchJuya=ds_Juya";
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
        }

        this.fn_PostSearchJuya = function()
        {
        	this.ds_SearchJuya.insertRow(0);
        	this.ds_SearchJuya.setColumn(0, 'JUYA_GBCD','');
         	this.ds_SearchJuya.setColumn(0, 'JUYA_GBNM','전체');
        	this.divSearch.form.cboSearchJuya.set_index(0);

        	this.ds_SearchHaknyeon.insertRow(0);
        	this.ds_SearchHaknyeon.setColumn(0, 'PYEONIP_HAKNYEON','');
         	this.ds_SearchHaknyeon.setColumn(0, 'PYEONIP_HAKNYEON_NM','전체');
        	this.divSearch.form.cboSearchHaknyeon.set_index(0);
        }

        //학년 조회(검색조건)
        this.fn_SearchHaknyeon = function ()
        {
        	var strSvc      = "SearchHaknyeon";
            var strUrl      = "/prj/ET/ET_COM/Retrieve_PYEONIP_HAKNYEON.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "ds_SearchHaknyeon=ds_Haknyeon";
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
        }

        this.fn_PostSearchHaknyeon = function()
        {
        	this.ds_SearchHaknyeon.insertRow(0);
        	this.ds_SearchHaknyeon.setColumn(0, 'PYEONIP_HAKNYEON','');
         	this.ds_SearchHaknyeon.setColumn(0, 'PYEONIP_HAKNYEON_NM','전체');
        	this.divSearch.form.cboSearchHaknyeon.set_index(0);
        }

        /**********************************************************************
                09. 검색창 엔터키 조회
        ***********************************************************************/
        this.divSearch_spnSearchYYYY_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"PYEONIP_YYYY",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchMojip_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"PYEONIP_MOJIP_GBCD",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchHakgwa_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"JIWONHAKGWA_CD",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchJuya_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"JUYA_GBCD",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchHaknyeon_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"PYEONIP_HAKNYEON",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_edtSearchSuhoemNo_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"SUHEOM_NO",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_edtSearchNm_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"SUHEOMSAENG_NM",obj.value);
        		this.fn_Ret();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onchanged",this.fn_SearchMojip,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onkeydown",this.divSearch_spnSearchYYYY_onkeydown,this);
            this.divSearch.form.cboSearchMojip.addEventHandler("onitemchanged",this.fn_SearchHakgwa,this);
            this.divSearch.form.cboSearchMojip.addEventHandler("onkeydown",this.divSearch_cboSearchMojip_onkeydown,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onitemchanged",this.fn_SearchJuya,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onkeydown",this.divSearch_cboSearchHakgwa_onkeydown,this);
            this.divSearch.form.cboSearchJuya.addEventHandler("onitemchanged",this.fn_SearchHaknyeon,this);
            this.divSearch.form.cboSearchJuya.addEventHandler("onkeydown",this.divSearch_cboSearchJuya_onkeydown,this);
            this.divSearch.form.cboSearchHaknyeon.addEventHandler("onkeydown",this.divSearch_cboSearchHaknyeon_onkeydown,this);
            this.divSearch.form.edtSearchSuhoemNo.addEventHandler("onkeydown",this.divSearch_edtSearchSuhoemNo_onkeydown,this);
            this.divSearch.form.edtSearchNm.addEventHandler("onkeydown",this.divSearch_edtSearchNm_onkeydown,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsMaster.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
        };
        this.loadIncludeScript("ET04_1020405_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
