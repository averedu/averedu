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
            this.set_titletext("품질코드관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch_ITEM_GUBN", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInfo_ITEM_GUBN", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"ITEM_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"ITEM_CODE\" type=\"STRING\" size=\"9\"/><Column id=\"ITEM_GUBN\" type=\"STRING\" size=\"2\"/><Column id=\"ITEM_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"ITEM_STND\" type=\"STRING\" size=\"200\"/><Column id=\"ITEM_MODL\" type=\"STRING\" size=\"200\"/><Column id=\"ITEM_UNIT\" type=\"STRING\" size=\"10\"/><Column id=\"ITEM_NOTE\" type=\"STRING\" size=\"200\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","10","10","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_Title01");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","10","30",null,"40","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("div_WF_SearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","10","10","50","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("품목구분");
            obj.set_textAlign("right");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cbo_itemGubn","70","10","90","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsSearch_ITEM_GUBN");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_enable("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static11","170","10","50","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("품명");
            obj.set_textAlign("right");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_itemName","230","10","150","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","10","70","100","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("품질코드 목록");
            obj.set_cssclass("sta_WF_Title03");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","110","70","100","20",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","10","90",null,"500","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","10","10",null,"480","10",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"300\"/><Column size=\"100\"/><Column size=\"300\"/><Column size=\"150\"/><Column size=\"348\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"순번/상태\"/><Cell col=\"2\" text=\"품목구분\"/><Cell col=\"3\" text=\"품목코드\"/><Cell col=\"4\" text=\"품목명\"/><Cell col=\"5\" text=\"규격\"/><Cell col=\"6\" text=\"모델\"/><Cell col=\"7\" text=\"단위\"/><Cell col=\"8\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" editmaxlength=\"1\"/><Cell col=\"1\" textAlign=\"center\" edittype=\"none\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"2\" text=\"bind:ITEM_GUBN\" displaytype=\"expr:ITEM_GUBN == &apos;&apos;?&apos;normal&apos;:&apos;combotext&apos;\" combodataset=\"dsSearch_ITEM_GUBN\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"3\" text=\"bind:ITEM_CODE\"/><Cell col=\"4\" text=\"bind:ITEM_NAME\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:ITEM_STND\"/><Cell col=\"6\" text=\"bind:ITEM_MODL\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:ITEM_UNIT\"/><Cell col=\"8\" text=\"bind:ITEM_NOTE\" textAlign=\"left\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02","10","590","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("품질코드 상세정보");
            obj.set_cssclass("sta_WF_Title03");
            this.addChild(obj.name, obj);

            obj = new Div("Div02","10","610",null,"100","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_background("#DAD9FF");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","10","10","50","20",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_text("품목구분");
            obj.set_color("red");
            obj.set_font("bold 12px/normal \"Malgun Gothic\"");
            obj.set_textAlign("right");
            this.Div02.addChild(obj.name, obj);

            obj = new Combo("cbo_itemGubnInfo","65","10","90","20",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsInfo_ITEM_GUBN");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static13","160","10","50","20",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_text("품목코드");
            obj.set_font("bold 12px/normal \"Malgun Gothic\"");
            obj.set_textAlign("right");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("edt_itemCodeInfo","215","10","150","20",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("3");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static14","370","10","50","20",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_text("품명");
            obj.set_color("red");
            obj.set_font("bold 12px/normal \"Malgun Gothic\"");
            obj.set_textAlign("right");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("edt_itemNameInfo","425","10","200","20",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("3");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static15","10","40","50","20",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_text("규격");
            obj.set_font("bold 12px/normal \"Malgun Gothic\"");
            obj.set_textAlign("right");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("edt_itemStndInfo","65","40","90","20",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("3");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static16","160","40","50","20",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_text("단위");
            obj.set_font("bold 12px/normal \"Malgun Gothic\"");
            obj.set_textAlign("right");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("edt_itemUnitInfo","215","40","150","20",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("3");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static17","370","40","50","20",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_text("모델");
            obj.set_font("bold 12px/normal \"Malgun Gothic\"");
            obj.set_textAlign("right");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("edt_itemModlInfo","425","40","200","20",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("3");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static18","10","70","50","20",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_text("비고");
            obj.set_font("bold 12px/normal \"Malgun Gothic\"");
            obj.set_textAlign("right");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("edt_itemNoteInfo","65","70","560","20",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("3");
            this.Div02.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.cbo_itemGubn","value","ds_input","ITEM_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.edt_itemName","value","ds_input","ITEM_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div02.form.cbo_itemGubnInfo","value","dsMaster","ITEM_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div02.form.edt_itemCodeInfo","value","dsMaster","ITEM_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div02.form.edt_itemNameInfo","value","dsMaster","ITEM_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div02.form.edt_itemStndInfo","value","dsMaster","ITEM_STND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Div02.form.edt_itemUnitInfo","value","dsMaster","ITEM_UNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Div02.form.edt_itemModlInfo","value","dsMaster","ITEM_MODL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Div02.form.edt_itemNoteInfo","value","dsMaster","ITEM_NOTE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("BH01_4080103_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): BH01_4080103_M.xfdl(품질코드관리)
        * 작 성         일 명: 고승재
        * 작 성         일 자: 2022/10/06
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
        this.lvchkColidDs   = "ITEM_GUBN$ITEM_NAME";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs = "품목구분$품명";
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

        /**
         * 기능 : 폼언 로드(닫기전 셋팅)  Setting
         */
        this.form_onclose = function(obj,e)
        {

        };
        /**********************************************************************
                04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        this.fn_formInit = function()
        {
            var strDs    = "dsSearch_ITEM_GUBN|dsInfo_ITEM_GUBN";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00748|00748";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "T|S";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = "";                                      // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId    = "Init";

                // gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
                // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.

            this.gfn_CmmnMultiComboLoad(strDs
                                      , strLgcd
                                      , strComb
                                      , strOptn
                                      , svcId);

        };

        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {

            this.gfn_clearSortAll(this.Div01.form.grdMaster);
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
                case "excel" :       // 엑셀
                        this.fn_Excel();
                    break;
                case "print" :       // 출력
                         this.fn_Print();
                    break;
                case "confirm" :     // 확정
                         this.fn_Confirm();
                    break;
                case "tmp1" :        // 여분버튼1
                         this.fn_Tmp1();
                    break;
                case "tmp2" :        // 여분버튼2
                         this.fn_Tmp2();
                    break;
                case "tmp3" :        // 여분버튼3
                         this.fn_Tmp3();
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
            var strUrl      = "/prj/BH/BH01/Retrieve_4080103_M.do";
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

        /**
         * 기능 : 처리 후 실행
         */
        this.fn_PostNew = function()
        {

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
            var strUrl      = "/prj/BH/BH01/Delete_4080103_M.do";
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
            var strUrl      = "/prj/BH/BH01/Save_4080103_M.do";
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
        this.fn_Excel = function()
        {
            if(this.dsMaster.rowcount < 1)
            {
                this.gfn_alert("출력할 엑셀데이터가 없습니다.", "EXCEL 정보" ,"","information");
                return false;
            }
            var result = this.gfn_confirm( "Excel를 출력하시겠습니까?", "EXCEL 출력","","question" );
            if(result == 0)
            {
               return false;
            }
            this.gfn_excelExport(this.Div01.form.grdMaster, "시트이름","파일이름");

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
        this.Div01_grdMaster_onheadclick = function(obj,e)
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

        /**
          * 검색조건 변경 후 엔터시
         **/
        this.Div00_cbo_itemGubn_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"ITEM_GUBN",obj.value);
        		this.fn_Ret();
        	}
        };

        this.Div00_edt_itemName_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"ITEM_NAME",obj.value);
        		this.fn_Ret();
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.Div00.form.cbo_itemGubn.addEventHandler("onkeyup",this.Div00_cbo_itemGubn_onkeyup,this);
            this.Div00.form.edt_itemName.addEventHandler("onkeyup",this.Div00_edt_itemName_onkeyup,this);
            this.Div01.form.grdMaster.addEventHandler("onheadclick",this.Div01_grdMaster_onheadclick,this);
        };
        this.loadIncludeScript("BH01_4080103_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
