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
            this.set_titletext("면접내역");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_input", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PYEONIP_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"PYEONIP_MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PYEONIP_HAKNYEON\" type=\"STRING\" size=\"256\"/><Column id=\"SABEON\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"PYEONIP_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"PYEONIP_MOJIP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"10\"/><Column id=\"JIWONHAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"PYEONIP_HAKNYEON\" type=\"STRING\" size=\"256\"/><Column id=\"PYEONIP_HAKNYEON_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOMSAENG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHDAY1\" type=\"STRING\" size=\"256\"/><Column id=\"CHAMSEOK_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CHONGJEOM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetail01", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PYEONIP_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"PYEONIP_MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SABEON\" type=\"STRING\" size=\"256\"/><Column id=\"PYEONIP_HAKNYEON\" type=\"STRING\" size=\"256\"/><Column id=\"SEONGMYEONG\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetail02", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PYEONIP_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"PYEONIP_MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MYEONJEOPHANGMOK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"1\"/><Column id=\"SABEON\" type=\"STRING\" size=\"256\"/><Column id=\"PYEONIP_HAKNYEON\" type=\"STRING\" size=\"256\"/><Column id=\"MYEONJEOPHANGMOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MAX_JEOMSU\" type=\"STRING\" size=\"256\"/><Column id=\"MYEONJEOP_JEOMSU\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input2", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PYEONIP_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"PYEONIP_MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"JIWONHAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"PYEONIP_HAKNYEON\" type=\"STRING\" size=\"256\"/><Column id=\"SABEON\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"RESULT_CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsChamseokYn", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input3", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PYEONIP_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"PYEONIP_MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"JIWONHAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"PYEONIP_HAKNYEON\" type=\"STRING\" size=\"256\"/><Column id=\"SABEON\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcelUpload", this);
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcelDaesangja", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PYEONIP_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_GBCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOMSAENG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PYEONIP_HAKNYEON\" type=\"STRING\" size=\"256\"/><Column id=\"PYEONIP_HAKNYEON_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"256\"/><Column id=\"HP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MYEONJEOPHANGMOK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"MYEONJEOPHANGMOK_GBCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MYEONJEOP_JEOMSU\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdMaster","10","45",null,null,"823","10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_fillareatype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"242\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"상태\"/><Cell col=\"1\" text=\"수험번호\"/><Cell col=\"2\" text=\"성명\"/><Cell col=\"3\" text=\"생년월일\"/><Cell col=\"4\" text=\"학부/학과\"/><Cell col=\"5\" text=\"학년\"/><Cell col=\"6\" text=\"면접여부\"/><Cell col=\"7\" text=\"총점\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:SUHEOM_NO\"/><Cell col=\"2\" text=\"bind:SUHEOMSAENG_NM\"/><Cell col=\"3\" text=\"bind:BIRTHDAY1\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" text=\"bind:HAKGWA_NM\"/><Cell col=\"5\" text=\"bind:PYEONIP_HAKNYEON_NM\"/><Cell col=\"6\" text=\"bind:CHAMSEOK_YN\" edittype=\"combo\" displaytype=\"expr:CHAMSEOK_YN  != &quot;&quot; ? &quot;combocontrol&quot; : &quot;combocontrol&quot; \" combodataset=\"dsChamseokYn\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" comboautoselect=\"true\"/><Cell col=\"7\" text=\"bind:CHONGJEOM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt",null,"14","123","34","1413",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00",null,"15","87","32","1546",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("학부/학과");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","240","0","100","45",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("↑\r\n45\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00",null,"15","155","32","638",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("담당교수");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Grid("grdDetail01",null,"45","783",null,"10","395",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("dsDetail01");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_fillareatype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"120\"/><Column size=\"150\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"교수명\"/><Cell col=\"2\" text=\"학부/학과\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:SEONGMYEONG\"/><Cell col=\"2\" text=\"bind:HAKGWA_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00_00","845","420","165","32",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("면접점수");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Grid("grdDetail02",null,null,"783","341","10","10",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("dsDetail02");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_fillareatype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"161\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"상태\"/><Cell col=\"1\" text=\"면접항목\"/><Cell col=\"2\" text=\"점수\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:MYEONJEOPHANGMOK_NM\"/><Cell col=\"2\" text=\"bind:MYEONJEOP_JEOMSU\" edittype=\"normal\" editmaxlength=\"3\" editinputtype=\"digit\" editautoselect=\"true\" displaytype=\"editcontrol\" textAlign=\"right\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnSaveDaesangja",null,"13","60","25","823",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnSaveJumsu",null,null,"60","25","10","359",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","1","37","1630","8",null,null,null,null,null,null,this);
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

            obj = new Static("Static01_01_00_00_00_00","830","441","800","8",null,null,null,null,null,null,this);
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

            obj = new Static("Static01_00","940","405","100","45",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("↑\r\n45\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01","817","81","30","630",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("30");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_01","0",null,"1640","10",null,"0",null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelUpload",null,"12","160","25","1063",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("면접대상점수 엑셀업로드");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelDown",null,"12","170","25","888",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("면접대상점수 엑셀다운로드");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","1","10","741",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,"1","10","741","0",null,null,null,null,null,this);
            obj.set_taborder("18");
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
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("ET04_1020403_T01.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): ET04_1020403_T01.xfdl(면접내역)
        * 작 성         일 명: 박경민
        * 작 성         일 자: 2021/05/10
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
        this.lvchkColidDs   = "PYEONIP_YYYY$PYEONIP_MOJIP_GBCD$JIWONHAKGWA_CD$JUYA_GBCD$PYEONIP_HAKNYEON";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs = "편입 년도$편입모집구분코드$지원학과$주야구분$학년";
        /**********************************************************************
                03. 폼 로드 및 닫을때(폼이 포커스 갈때)
        ***********************************************************************/
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
            var strDs    = "dsChamseokYn";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "01017";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "X";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = "";                                      // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId    = "Init";

                // gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
                // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.

            this.gfn_CmmnMultiComboLoad(strDs
                                      , strLgcd
                                      , strComb
                                      , strOptn
                                      , svcId);

        	this.fn_GijunYyyy();
        };
        /**
         * 기능 : 콜백함수(후처리)
         */
         this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {

            this.gfn_clearSortAll(this.Tab.Tabpage1.form.grdMaster);
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
        			case "Daesangja":
        					this.gfn_alert("저장에 성공하였습니다.","저장정보","","information");
        				break;
        			case "Jumsu":
        					this.gfn_alert("저장에 성공하였습니다.","저장정보","","information");
        				break;
        			case "IlgwalCheori":
        					this.gfn_alert("일괄처리에 성공하였습니다.","저장정보","","information");
        				break;
        			case "ExcelUpload":
        					this.gfn_alert("엑셀 업로드에 성공하였습니다.","저장정보","","information");
        					this.fn_Ret();
        				break;
        			case "ExcelDownload":
        					this.gfn_excelExport(this.excelGrid, "면접대상자면접점수","면접대상자면접점수");
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
        this.fn_Ret = function(data)
        {
            if(!this.fn_PreRet())
            {
                return false;
            }
        	this.ds_input.copyData(data);
        	var strSvc      = "Ret";
        	var strUrl      = "/prj/ET/ET04/Retrieve_1020403_T01_01.do";
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
                05-1. 조회 함수 선언(담당교수 함수)
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
        	this.ds_input2.setColumn(0, "PYEONIP_YYYY", this.dsMaster.getColumn(this.dsMaster.rowposition, "PYEONIP_YYYY"));
        	this.ds_input2.setColumn(0, "PYEONIP_MOJIP_GBCD", this.dsMaster.getColumn(this.dsMaster.rowposition, "PYEONIP_MOJIP_GBCD"));
        	this.ds_input2.setColumn(0, "SUHEOM_NO", this.dsMaster.getColumn(this.dsMaster.rowposition, "SUHEOM_NO"));
        	this.ds_input2.setColumn(0, "JIWONHAKGWA_CD", this.dsMaster.getColumn(this.dsMaster.rowposition, "JIWONHAKGWA_CD"));
        	this.ds_input2.setColumn(0, "JUYA_GBCD", this.dsMaster.getColumn(this.dsMaster.rowposition, "JUYA_GBCD"));
        	this.ds_input2.setColumn(0, "PYEONIP_HAKNYEON", this.dsMaster.getColumn(this.dsMaster.rowposition, "PYEONIP_HAKNYEON"));

        	this.fn_DRet1();
        };

        this.fn_DRet1 = function()
        {
        	var strSvc      = "damdangGyosuGrd";
            var strUrl      = "/prj/ET/ET04/Retrieve_1020403_T01_02.do";
            var strInDs     = "ds_input=ds_input2";
            var strOutDs    = "dsDetail01=dsDetail01";
            var strArg      = "";
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = false;                                   //샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);
        }

        /**********************************************************************
                05-2. 조회 함수 선언(면접점수 함수)
        ***********************************************************************/
        this.dsDetail01_canrowposchange = function(obj,e)
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

        this.dsDetail01_onrowposchanged = function(obj,e)
        {
        	this.ds_input3.setColumn(0, "PYEONIP_YYYY", this.dsDetail01.getColumn(this.dsDetail01.rowposition, "PYEONIP_YYYY"));
        	this.ds_input3.setColumn(0, "PYEONIP_MOJIP_GBCD", this.dsDetail01.getColumn(this.dsDetail01.rowposition, "PYEONIP_MOJIP_GBCD"));
        	this.ds_input3.setColumn(0, "SUHEOM_NO", this.dsDetail01.getColumn(this.dsDetail01.rowposition, "SUHEOM_NO"));
        	this.ds_input3.setColumn(0, "JIWONHAKGWA_CD", this.dsDetail01.getColumn(this.dsDetail01.rowposition, "HAKGWA_CD"));
        	this.ds_input3.setColumn(0, "JUYA_GBCD", this.dsDetail01.getColumn(this.dsDetail01.rowposition, "JUYA_GBCD"));
        	this.ds_input3.setColumn(0, "PYEONIP_HAKNYEON", this.dsDetail01.getColumn(this.dsDetail01.rowposition, "PYEONIP_HAKNYEON"));
        	this.ds_input3.setColumn(0, "SABEON", this.dsDetail01.getColumn(this.dsDetail01.rowposition, "SABEON"));

        	this.fn_DRet2();
        };

        this.fn_DRet2 = function()
        {
        	var strSvc      = "myeonjeopJeomsu";
            var strUrl      = "/prj/ET/ET04/Retrieve_1020403_T01_03.do";
            var strInDs     = "ds_input=ds_input3";
            var strOutDs    = "dsDetail02=dsDetail02";
            var strArg      = "";
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = false;                                   //샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);
        }

        /**********************************************************************
                06-1. 면접대상자 저장 함수 선언
        ***********************************************************************/
        this.btnSaveDaesangja_onclick = function(obj,e)
        {
        	if (!this.gfn_isUpdate(this.dsMaster))
        	{
        		this.gfn_alert("변경된 이력이 없습니다.", "저장정보" ,"","information");
        		return;
        	}

        	if (!this.gfn_confirm( "저장 하시겠습니까?", "저장","","question" ))
        	{
        		return;
        	}

        	this.fn_SaveDaesangja();
        };

        this.fn_SaveDaesangja = function()
        {
        	var strSvc      = "Daesangja";
            var strUrl      = "/prj/ET/ET04/Save_1020403_T01_01.do";
            var strInDs     = "ds_input=ds_input:a ";
        		strInDs     += "dsMaster=dsMaster:u";
            var strOutDs    = "";
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
        };

        this.fn_PostSaveDaesangja = function()
        {
        	var strSvc      = "";
        	var strUrl      = "/prj/ET/ET04/Save_1020403_T01_02.do";
        	var strInDs     = "ds_input=ds_input:a ";
        		strInDs     += "dsMaster=dsMaster:u";
        	var strOutDs    = "";
        	var strArg      = "";
        	var GBV_MENUID    = objApp.gv_cutPrgId;
        	if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
        	{
        		strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
        	}
        	var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        	var strASync    = false;                                   //샏략이나 공백일시에는 ASync=true,싱크시는 false로
        	this.gfn_Transaction(strSvc
        					   , strUrl
        					   , strInDs
        					   , strOutDs
        					   , strArg
        					   , strCallBack
        					   , strASync);
        };

        /**********************************************************************
                06-2. 면접점수 저장 함수 선언
        ***********************************************************************/
        this.btnSaveJumsu_onclick = function(obj,e)
        {
        	if (!this.gfn_isUpdate(this.dsDetail02))
        	{
        		this.gfn_alert("변경된 이력이 없습니다.", "저장정보" ,"","information");
        		return;
        	}

        	var chamseokYn = "N";
        	if (!this.gfn_isNull(this.dsMaster.getColumn(this.dsMaster.rowposition, "CHAMSEOK_YN")))
        	{
        		chamseokYn = this.dsMaster.getColumn(this.dsMaster.rowposition, "CHAMSEOK_YN");
        	}
        	else
        	{
        		chamseokYn = "N";
        	}

        	if (chamseokYn == "N")
        	{
        		this.gfn_alert("면접에 참석하지 않은 인원은 성적을 부여할 수 없습니다.", "정보", "", "information");
        		this.dsDetail02.reset();
        		return;
        	}

        	if (!this.gfn_confirm( "저장 하시겠습니까?", "저장","","question" ))
        	{
        		return;
        	}

        	//면접점수를 빈 값으로 입력할 경우
        	for(var  i = 0 ; i < this.dsDetail02.rowcount ; i++)
        	{
        		if(this.dsDetail02.getRowType(i)==4 && this.dsDetail02.getColumn(i,'MYEONJEOP_JEOMSU')=='')
        		{
        			this.dsDetail02.setColumn(i,'MYEONJEOP_JEOMSU',0);
        		}
        	}

        	var strSvc      = "Jumsu";
            var strUrl      = "/prj/ET/ET04/Save_1020403_T01_03.do";
            var strInDs     = "ds_input=ds_input:a ";
        		strInDs     += "dsDetail02=dsDetail02:u";
            var strOutDs    = "";
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
        };

        /**********************************************************************
                07. 면접대상자 엑셀업로드 함수 선언
        ***********************************************************************/
        this.btnExcelUpload_onclick = function(obj,e)
        {
        	// 조회조건 셋팅
        	this.ds_input.copyData(this.parent.parent.parent.ds_input);
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
        	if (this.gfn_isNull(this.ds_input.getColumn(0, "JUYA_GBCD"))) {
        		this.gfn_alert("주야구분을 선택해주세요.","입력정보","","warning");
        		return false;
        	}
        	if (this.gfn_isNull(this.ds_input.getColumn(0, "PYEONIP_HAKNYEON")))
        	{
        		this.gfn_alert("학년을 선택해주세요.","입력정보","","warning");
        		return false;
        	}
        	if (this.gfn_isNull(this.ds_input.getColumn(0, "SABEON")))
        	{
        		this.gfn_alert("검색조건의 담당교수를 선택해주세요.","입력정보","","warning");
        		return false;
        	}

        	if(this.gfn_confirm("검색조건의 편입년도, 모집구분, 학과, 주야구분, 학년, 담당교수를 기준으로 업로드합니다.", "엑셀 업로드","","question"))
        	{
        		this.gfn_excelImportNsheet("dsExcelUpload","면접대상점수","","","excelUpload_succFunc","excelUpload_errorFunc",this);
        	}
        };

        /**********************************************************************
                08. 면접대상자 엑셀다운로드 함수 선언
        ***********************************************************************/
        this.btnExcelDown_onclick = function(obj,e)
        {
        	// 조회조건 셋팅
        	this.ds_input.copyData(this.parent.parent.parent.ds_input);
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
        	if (this.gfn_isNull(this.ds_input.getColumn(0, "SABEON")))
        	{
        		this.gfn_alert("검색조건의 담당교수를 선택해주세요.","입력정보","","warning");
        		return false;
        	}

        	if(this.gfn_confirm("검색조건의 편입년도, 모집구분, 학과, 주야구분, 학년, 담당교수를 기준으로 다운로드합니다.", "엑셀 다운로드","","question"))
        	{
        		var strSvc      = "ExcelDownload";
        		var strUrl      = "/prj/ET/ET04/Download_1020403_T01.do";
        		var strInDs     = "ds_input=ds_input:a";
        		var strOutDs    = "dsExcelDaesangja=dsExcelDaesangja";
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

        this.grdDetail01_onheaddblclick = function(obj,e)
        {
        	this.gfn_gridSort(obj,e);
        };

        this.grdDetail02_onheaddblclick = function(obj,e)
        {
        	this.gfn_gridSort(obj,e);
        };

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
            return this.gfn_isUpdate(this.dsMaster);
        };

        /**
          * 디테일 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_detailbeforeclose = function()
        {
           var value = false;

           if(this.gfn_isUpdate(this.dsDetail02))
           {
              value = true;
           }

           return value;
        };


        // 면접점수변경시
        this.dsDetail02_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "MYEONJEOP_JEOMSU")
        	{
        		if (obj.getColumn(obj.rowposition, "MAX_JEOMSU") < obj.getColumn(obj.rowposition, "MYEONJEOP_JEOMSU"))
        		{
        			this.gfn_alert("면접 항목의 최대 점수보다 낮은 점수를 부여하여야 합니다.", "정보", "", "information");
        			obj.reset();
        		}
        		if(obj.getColumn(obj.rowposition, "MYEONJEOP_JEOMSU") < 0)
        		{
        			obj.reset();
        		}
        	}
        };

        /**********************************************************************
                10. 공통 함수
        ***********************************************************************/
        // 엑셀업로드 성공
        this.excelUpload_succFunc = function()
        {
        	var PYEONIP_YYYY 	= this.gfn_isEmpty(this.ds_input.getColumn(0, "PYEONIP_YYYY"));
        	var PYEONIP_MOJIP_GBCD 	= this.gfn_isEmpty(this.ds_input.getColumn(0, "PYEONIP_MOJIP_GBCD"));
        	var HAKGWA_CD 	= this.gfn_isEmpty(this.ds_input.getColumn(0, "HAKGWA_CD"));
        	var JUYA_GBCD 	= this.gfn_isEmpty(this.ds_input.getColumn(0, "JUYA_GBCD"));
        	var SABEON 		= this.gfn_isEmpty(this.ds_input.getColumn(0, "SABEON"));
        	var PYEONIP_HAKNYEON 		= this.gfn_isEmpty(this.ds_input.getColumn(0, "PYEONIP_HAKNYEON"));

        	this.dsExcelUpload.updateColID(0, "SABEON");					// 번호 -> 담당교수 사번
        	this.dsExcelUpload.updateColID(1, "PYEONIP_YYYY");			// 입시년도
        	this.dsExcelUpload.updateColID(2, "PYEONIP_MOJIP_GBCD");		// 모집구분
        	this.dsExcelUpload.updateColID(3, "HAKGWA_CD");				// 학과
        	this.dsExcelUpload.updateColID(4, "JUYA_GBCD");				// 주야구분
        	this.dsExcelUpload.updateColID(5, "PYEONIP_HAKNYEON");		// 학년
        	this.dsExcelUpload.updateColID(6, "SUHEOM_NO");				// 수험번호
        	this.dsExcelUpload.updateColID(10, "MYEONJEOPHANGMOK_GBCD");	// 항목명
        	this.dsExcelUpload.updateColID(12, "MYEONJEOP_JEOMSU");		// 점수

        	this.dsExcelUpload.set_updatecontrol(false);
         	this.dsExcelUpload.set_enableevent(false);

         	for(var i = 0 ; this.dsExcelUpload.rowcount > i ; i++)
        	{
        		this.dsExcelUpload.setRowType(i, Dataset.ROWTYPE_INSERT);
        		this.dsExcelUpload.setColumn(i, 0, SABEON);
        		this.dsExcelUpload.setColumn(i, "PYEONIP_MOJIP_GBCD", PYEONIP_MOJIP_GBCD);
        		this.dsExcelUpload.setColumn(i, "HAKGWA_CD", HAKGWA_CD);
        		this.dsExcelUpload.setColumn(i, "JEONGONG_CD", JEONGONG_CD);
        		this.dsExcelUpload.setColumn(i, "JUYA_GBCD", JUYA_GBCD);
        		this.dsExcelUpload.setColumn(i, "PYEONIP_HAKNYEON", PYEONIP_HAKNYEON);
         	}
         	this.dsExcelUpload.set_updatecontrol(true);
         	this.dsExcelUpload.set_enableevent(true);

        	// 면접접수테이블 업데이트
        	var strSvc      = "ExcelUpload";
        	var strUrl      = "/prj/ET/ET04/Upload_1020403_T01.do";
        	var strInDs     = "ds_input=ds_input:a ";
        		strInDs    += "dsExcelUpload=dsExcelUpload:u";
        	var strOutDs    = "";
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

        // 엑셀업로드 실패
        this.excelUpload_errorFunc = function()
        {
        	this.gfn_alert("엑셀을 업로드하는데 실패하였습니다.","입력정보","","warning");
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.grdMaster.addEventHandler("onselectchanged",this.Tab_Tabpage1_grdMaster_onselectchanged,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdDetail01.addEventHandler("onselectchanged",this.Tab_Tabpage1_grdDetail01_onselectchanged,this);
            this.grdDetail01.addEventHandler("onheaddblclick",this.grdDetail01_onheaddblclick,this);
            this.grdDetail02.addEventHandler("onheaddblclick",this.grdDetail02_onheaddblclick,this);
            this.btnSaveDaesangja.addEventHandler("onclick",this.btnSaveDaesangja_onclick,this);
            this.btnSaveJumsu.addEventHandler("onclick",this.btnSaveJumsu_onclick,this);
            this.btnExcelUpload.addEventHandler("onclick",this.btnExcelUpload_onclick,this);
            this.btnExcelDown.addEventHandler("onclick",this.btnExcelDown_onclick,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsMaster.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
            this.dsMaster.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
            this.dsDetail01.addEventHandler("onrowposchanged",this.dsDetail01_onrowposchanged,this);
            this.dsDetail01.addEventHandler("canrowposchange",this.dsDetail01_canrowposchange,this);
            this.dsDetail02.addEventHandler("oncolumnchanged",this.dsDetail02_oncolumnchanged,this);
        };
        this.loadIncludeScript("ET04_1020403_T01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
