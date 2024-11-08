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
            this.set_titletext("학사학위학교 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,780);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMaster", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"UNIV_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"UNIV_KNAM\" type=\"STRING\" size=\"100\"/><Column id=\"SORT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"BIGO\" type=\"STRING\" size=\"1000\"/><Column id=\"YONGDO_COLUMN1\" type=\"STRING\" size=\"100\"/><Column id=\"YONGDO_COLUMN2\" type=\"STRING\" size=\"100\"/><Column id=\"YONGDO_COLUMN3\" type=\"STRING\" size=\"100\"/><Column id=\"YONGDO_COLUMN4\" type=\"STRING\" size=\"100\"/><Column id=\"YONGDO_COLUMN5\" type=\"STRING\" size=\"100\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_19_00_00_01_00_00","0",null,"1640","28",null,"111",null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","0","35",null,null,"0","stc_19_00_00_01_00_00:8",null,null,"150",null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\" band=\"left\"/><Column size=\"48\" band=\"left\"/><Column size=\"120\"/><Column size=\"300\"/><Column size=\"262\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"NO\"/><Cell col=\"2\" text=\"학사학위학교 코드\"/><Cell col=\"3\" text=\"학사학위학교명\"/><Cell col=\"4\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"2\" text=\"bind:UNIV_CODE\"/><Cell col=\"3\" text=\"bind:UNIV_KNAM\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:BIGO\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09","0","10","140","22",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("학사학위학교 관리");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_05_01","0",null,"1640","58",null,"54",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_06_01","0",null,"150","58",null,"54",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stRowCnt","140","9","233","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtBigo","153",null,"1483","52",null,"57",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_maxlength("1333");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","500","0","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","0","27","320","8",null,null,null,null,null,null,this);
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

            obj = new Static("stc_19_00_00_00","0",null,"1640","28",null,"0",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_21_00_00_00_01","500",null,"150","28",null,"0",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("용도컬럼5");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_20_00_00_00","0",null,"150","28",null,"0",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("용도컬럼4");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_19_00_00_01","0",null,"1640","28",null,"27",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_21_00_00_01","1000",null,"150","28",null,"27",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("용도컬럼3");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_21_00_00_00_02","500",null,"150","28",null,"27",null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("용도컬럼2");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_20_00_00_01","0",null,"150","28",null,"27",null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("용도컬럼1");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_21_00_00_00_02_00_00","500",null,"150","28",null,"111",null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("학사학위학교명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_20_00_00_01_00_00","0",null,"150","28",null,"111",null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("학사학위학교 코드");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtWiwonhoeCd","153",null,"300","22",null,"113",null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_maxlength("10");
            this.addChild(obj.name, obj);

            obj = new Edit("edtWiwonheoNm","653",null,"300","22",null,"113",null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_maxlength("166");
            this.addChild(obj.name, obj);

            obj = new Edit("edtYongdoCol1","153",null,"300","22",null,"30",null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_maxlength("166");
            this.addChild(obj.name, obj);

            obj = new Edit("edtYongdoCol4","153",null,"300","22",null,"3",null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_maxlength("166");
            this.addChild(obj.name, obj);

            obj = new Edit("edtYongdoCol2","653",null,"300","22",null,"30",null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_maxlength("166");
            this.addChild(obj.name, obj);

            obj = new Edit("edtYongdoCol5","653",null,"300","22",null,"3",null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_maxlength("166");
            this.addChild(obj.name, obj);

            obj = new Edit("edtYongdoCol3","1153",null,"300","22",null,"30",null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_maxlength("166");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,780,this,function(p){});
            obj.set_description("학사학위학교 관리");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item15","txtBigo","value","dsMaster","BIGO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edtWiwonhoeCd","value","dsMaster","UNIV_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edtWiwonheoNm","value","dsMaster","UNIV_KNAM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edtYongdoCol1","value","dsMaster","YONGDO_COLUMN1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edtYongdoCol4","value","dsMaster","YONGDO_COLUMN4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","edtYongdoCol2","value","dsMaster","YONGDO_COLUMN2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","edtYongdoCol5","value","dsMaster","YONGDO_COLUMN5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","edtYongdoCol3","value","dsMaster","YONGDO_COLUMN3");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("AM01_3010111_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): AM01_3010111_M.xfdl(학사학위학교 관리)
        * 작 성         일 명: 정진호
        * 작 성         일 자: 2022/09/27
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
        this.lvchkColidDs   = "UNIV_CODE$UNIV_KNAM"; // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs = "학사학위학교코드$학사학위학교명";
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
                    case "singleInit":
                            this.fn_PostSingleInt();
                        break;
                    case "Ret":
                            this.fn_PostRet();
                        break;
                    case "Save":
                            this.fn_PostSave();
                        break;
                    case "Del":
                            this.fn_PostDel();
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
                case "tmp1" :        // 여분버튼1
                         this.fn_Tip();
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
            // 조회조건 셋팅
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
            var strUrl      = "/prj/AM/AM01/Retrieve_3010111_MList.do";
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
            if(this.dsMaster.rowcount < 1 || this.dsMaster.findRow("CHK",1) == -1)
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
            this.dsMaster.set_enableevent(false);
            for(var i=this.dsMaster.rowcount-1;i>-1;i--)
            {
                if(this.dsMaster.getColumn(i,"CHK") == "1" || this.dsMaster.getRowType(i) == 2)
                {
                    this.dsMaster.deleteRow(i);
                }
            }
            this.dsMaster.set_enableevent(true);

            //개별삭제시
            //this.dsMaster.deleteRow(this.dsMaster.rowposition);
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
            var strUrl      = "/prj/AM/AM01/Delete_3010111_MList.do";
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
        };

        /**********************************************************************
                08. 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave = function()
        {
            if(this.dsMaster.rowcount > 0)
            {
                for(var i=0;i<this.dsMaster.rowcount; i++)
                {
                    if(this.dsMaster.getColumn(i,"CHK") == "0")
                    {
                        continue;
                    }
                    this.dsMaster.setColumn(i,"CHK","0");
                }
            }

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
            var strUrl      = "/prj/AM/AM01/Save_3010111_MList.do";
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
                09. 초기화
        ***********************************************************************/
        /**********************************************************************
                10. 출력 함수 선언
        ***********************************************************************/
        /**********************************************************************
                11. ExcelDnwn 엑셀로 출력
        ***********************************************************************/
        /**********************************************************************
                13. Get, Set Method
        ***********************************************************************/
        /**********************************************************************
                14. 기타 Control Event
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

        /**
         *      그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj,e)
        {
            if(e.cell != this.grdMaster.getBindCellIndex("body","CHK") && e.cell != 1)
            {
                this.gfn_gridSort(obj,e);
            }
        };

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
            //return this.gfn_isUpdate(this.dsMaster);
        };

        this.fn_Tip = function()
        {
        	this.alert("도움말 준비중입니다.");
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
            this.stc_09.addEventHandler("onclick",this.stc_09_onclick,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsMaster.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
        };
        this.loadIncludeScript("AM01_3010111_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
