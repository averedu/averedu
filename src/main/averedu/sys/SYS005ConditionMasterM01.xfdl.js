(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SYS005ConditionMasterM01");
            this.set_titletext("신청제어");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMaster", this);
            obj.set_useclientlayout("true");
            obj.set_preload("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"JEEO_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"JEEO_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"IPRYEOK_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DATA_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_QUERY\" type=\"STRING\" size=\"256\"/><Column id=\"RETURN_QUERY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CHK\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inputType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"CODE_NM\">공통코드</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"CODE_NM\">문자</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"CODE_NM\">숫자</Col></Row><Row><Col id=\"CODE\">04</Col><Col id=\"CODE_NM\">날짜</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dataType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"CODE_NM\">01</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"CODE_NM\">02</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"CODE_NM\">03</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSinCheongM","20","10","400",null,null,"10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_05_00","0","10","220","20",null,null,null,null,null,null,this.divSinCheongM.form);
            obj.set_taborder("4");
            obj.set_text("신청제어 항목");
            obj.set_cssclass("sta_WF_Title02");
            obj.set_fittocontents("width");
            this.divSinCheongM.addChild(obj.name, obj);

            obj = new Grid("grdMaster","0","40",null,null,"10","10",null,null,null,null,this.divSinCheongM.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsMaster");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"168\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"none\"/><Cell col=\"1\" text=\"상태/순번\"/><Cell col=\"2\" text=\"제어항목 코드\"/><Cell col=\"3\" text=\"제어항목 명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"2\" text=\"bind:JEEO_CODE\"/><Cell col=\"3\" text=\"bind:JEEO_NAME\"/></Band></Format></Formats>");
            this.divSinCheongM.addChild(obj.name, obj);

            obj = new Static("staRowCnt","260","10",null,"20","10",null,null,null,null,null,this.divSinCheongM.form);
            obj.set_taborder("2");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            obj.set_textAlign("right");
            this.divSinCheongM.addChild(obj.name, obj);

            obj = new Div("divSinCheongD","430","10",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_00","10","10","220","20",null,null,null,null,null,null,this.divSinCheongD.form);
            obj.set_taborder("0");
            obj.set_text("신청제어 항목 상세");
            obj.set_cssclass("sta_WF_Title02");
            obj.set_fittocontents("width");
            this.divSinCheongD.addChild(obj.name, obj);

            obj = new Static("stc_01","10","40","150","30",null,null,null,null,null,null,this.divSinCheongD.form);
            obj.set_taborder("1");
            obj.set_text("제어항목코드");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divSinCheongD.addChild(obj.name, obj);

            obj = new Static("stc_02","160","40",null,"30","10",null,null,null,null,null,this.divSinCheongD.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divSinCheongD.addChild(obj.name, obj);

            obj = new Static("stc_02_00","400","45",null,"20","100",null,null,null,null,null,this.divSinCheongD.form);
            obj.set_taborder("20");
            obj.set_text("※ 자동으로 제어항목코드 최대값 + 1 값으로 저장된다.");
            obj.set_cssclass("");
            this.divSinCheongD.addChild(obj.name, obj);

            obj = new Edit("edt_00","170","45","200","20",null,null,null,null,null,null,this.divSinCheongD.form);
            obj.set_taborder("3");
            obj.set_enable("false");
            this.divSinCheongD.addChild(obj.name, obj);

            obj = new Static("stc_03","10","70","150","30",null,null,null,null,null,null,this.divSinCheongD.form);
            obj.set_taborder("4");
            obj.set_text("제어항목 명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divSinCheongD.addChild(obj.name, obj);

            obj = new Static("stc_04","160","70",null,"30","10",null,null,null,null,null,this.divSinCheongD.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divSinCheongD.addChild(obj.name, obj);

            obj = new Edit("edt_01","170","75","200","20",null,null,null,null,null,null,this.divSinCheongD.form);
            obj.set_taborder("6");
            this.divSinCheongD.addChild(obj.name, obj);

            obj = new Static("stc_05","10","100","150","30",null,null,null,null,null,null,this.divSinCheongD.form);
            obj.set_taborder("7");
            obj.set_text("입력방법 구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divSinCheongD.addChild(obj.name, obj);

            obj = new Static("stc_06","160","100",null,"30","10",null,null,null,null,null,this.divSinCheongD.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divSinCheongD.addChild(obj.name, obj);

            obj = new Combo("cbm_00","170","105","200","20",null,null,null,null,null,null,this.divSinCheongD.form);
            obj.set_taborder("9");
            obj.set_innerdataset("ds_inputType");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divSinCheongD.addChild(obj.name, obj);

            obj = new Static("stc_07","10","130","150","30",null,null,null,null,null,null,this.divSinCheongD.form);
            obj.set_taborder("10");
            obj.set_text("데이터 종류 구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divSinCheongD.addChild(obj.name, obj);

            obj = new Static("stc_08","160","130",null,"30","10",null,null,null,null,null,this.divSinCheongD.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divSinCheongD.addChild(obj.name, obj);

            obj = new Combo("cbm_01","170","135","200","20",null,null,null,null,null,null,this.divSinCheongD.form);
            obj.set_taborder("12");
            obj.set_innerdataset("ds_dataType");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            this.divSinCheongD.addChild(obj.name, obj);

            obj = new Static("stc_11","10","160","150","230",null,null,null,null,null,null,this.divSinCheongD.form);
            obj.set_taborder("13");
            obj.set_text("코드 쿼리");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divSinCheongD.addChild(obj.name, obj);

            obj = new Static("stc_12","160","160",null,"230","10",null,null,null,null,null,this.divSinCheongD.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.divSinCheongD.addChild(obj.name, obj);

            obj = new Static("stc_13","170","165",null,"20","100",null,null,null,null,null,this.divSinCheongD.form);
            obj.set_taborder("15");
            obj.set_text("※ 코드는 \'AS CODE\' 코드명은 \'AS CODE_NM\'으로 작성");
            obj.set_cssclass("");
            this.divSinCheongD.addChild(obj.name, obj);

            obj = new TextArea("txa_00","170","190",null,"190","20",null,null,null,null,null,this.divSinCheongD.form);
            obj.set_taborder("16");
            obj.set_enable("false");
            this.divSinCheongD.addChild(obj.name, obj);

            obj = new Static("stc_14","10","390","150",null,null,"10",null,null,null,null,this.divSinCheongD.form);
            obj.set_taborder("17");
            obj.set_text("결과(값) 쿼리");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divSinCheongD.addChild(obj.name, obj);

            obj = new Static("stc_15","160","390",null,null,"10","10",null,null,null,null,this.divSinCheongD.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divSinCheongD.addChild(obj.name, obj);

            obj = new TextArea("txa_01","170","400",null,null,"20","20",null,null,null,null,this.divSinCheongD.form);
            obj.set_taborder("19");
            this.divSinCheongD.addChild(obj.name, obj);

            obj = new Button("btnSincheongJeeo",null,"10","100","20","10",null,null,null,null,null,this.divSinCheongD.form);
            obj.set_taborder("21");
            obj.set_text("신청제어관리");
            obj.set_cssclass("btn_WF_Crud");
            this.divSinCheongD.addChild(obj.name, obj);

            obj = new Button("btnSincheongJeeoHangmok",null,"10","100","20","120",null,null,null,null,null,this.divSinCheongD.form);
            obj.set_taborder("22");
            obj.set_text("신청항목관리");
            obj.set_cssclass("btn_WF_Crud");
            this.divSinCheongD.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,1640,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSinCheongD.form.edt_00","value","dsMaster","JEEO_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSinCheongD.form.edt_01","value","dsMaster","JEEO_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSinCheongD.form.txa_00","value","dsMaster","CODE_QUERY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSinCheongD.form.txa_01","value","dsMaster","RETURN_QUERY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSinCheongD.form.cbm_00","value","dsMaster","IPRYEOK_TYPE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSinCheongD.form.cbm_01","value","dsMaster","DATA_TYPE_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("SYS005ConditionMasterM01.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): SYS005ConditionMasterM01.xfdl(신청제어항목관리)
        * 작 성         일 명: 고승재
        * 작 성         일 자: 2022/11/16
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
        this.lvchkColidDs   = "JEEO_NAME$IPRYEOK_TYPE_CD$DATA_TYPE_CD";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs = "제어항목명$입력방법구분$데이터종류구분";
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
            //this.fn_formInit();

        	this.fn_Ret();
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
            var strDs    = "";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
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

            this.gfn_clearSortAll(this.divSinCheongM.form.grdMaster);
            if(nErrorCode != 0)
            {
                this.gfn_alert(sErrorMsg,"에러정보","","error");
                return false;
            }else
            {
                /*sSvcId (Transaction Id)*/
                switch(sSvcId)
                {
                    //case "Init":
                            //this.fn_PostformInit();
                        //break;
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
            var strUrl      = "/prj/sys/RetrieveConditionMasterList.do";
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
            this.gfn_getRowCount(this.divSinCheongM.form.staRowCnt,this.dsMaster);
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
        	this.dsMaster.setColumn(nRow, "CHK", '0');
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
            var strUrl      = "/prj/sys/DeleteConditionMasterList.do";
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
            this.gfn_getRowCount(this.divSinCheongM.form.staRowCnt,this.dsMaster);
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
        			if ( this.dsMaster.getColumn(i, "IPRYEOK_TYPE_CD") == "01" ) {
        				if ( this.dsMaster.getColumn(i, "CODE_QUERY") == "" ) {
        					this.alert( (i+1) + "행 입력방법이 공통코드이므로 코드쿼리 필수입력입니다.");
        					return false;
        				}
        			}

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
            var strUrl      = "/prj/sys/SaveConditionMasterList.do";
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
            this.gfn_getRowCount(this.divSinCheongM.form.staRowCnt,this.dsMaster);
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
        this.divSinCheongM_grdMaster_onheadclick = function(obj,e)
        {
            if(e.cell == this.divSinCheongM.form.grdMaster.getBindCellIndex("body","CHK"))
            {
                this.gfn_checkAll(obj, e);
            }
        };

        /**
         *      그리드멀티 소트정열
         */
        this.divSinCheongM_grdMaster_onheaddblclick = function(obj,e)
        {
            if(e.cell != this.divSinCheongM.form.grdMaster.getBindCellIndex("body","CHK") && e.cell != 1)
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
         * 입력방법구분 변경 시
         */
        this.divSinCheongD_cbm_00_onitemchanged = function(obj,e)
        {
        	this.dsMaster.setColumn(this.dsMaster.rowposition, "CODE_QUERY", "");
        	if ( this.dsMaster.getColumn(this.dsMaster.rowposition, "IPRYEOK_TYPE_CD") == "01" ) {
        		this.divSinCheongD.form.txa_00.set_enable('true');
        	}
        	else {
        		this.divSinCheongD.form.txa_00.set_enable('false');
        	}
        };

        /**
         * 입력방법 구분 변경 시
         */
        this.divSinCheongM_grdMaster_oncellposchanged = function(obj,e)
        {
        	if ( this.dsMaster.getColumn(this.dsMaster.rowposition, "IPRYEOK_TYPE_CD") == "01" ) {
        		this.divSinCheongD.form.txa_00.set_enable('true');
        	}
        	else {
        		this.divSinCheongD.form.txa_00.set_enable('false');
        	}
        };

        /**
         * 신청제어관리 버튼 클릭 시
         */
        this.divSinCheongD_btnSincheongJeeo_onclick = function(obj,e)
        {
        	this.gfn_openPopup('sincheongJeeo', 'SYS/SYS005ConditionMasterP01.xfdl', '', 'fn_popupCallback', '');
        };

        /**
         * 신청항목관리 버튼 클릭 시
         */
        this.divSinCheongD_btnSincheongJeeoHangmok_onclick = function(obj,e)
        {
        	this.gfn_openPopup('jeeoHangmok', 'SYS/SYS005ConditionMasterP03.xfdl', '', 'fn_popupCallback', '');
        };

        /**
         * 팝업 callback
         */
        this.fn_popupCallback = function(strId, strVal)
        {
        	switch(strId)
        	{
        		case "sincheongJeeo" :
        				/*
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        		            this.dsMaster.setColumn(this.dsMaster.rowposition, "REGR_IDNT", sRtn[3]);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "STNT_NUMB", sRtn[3]);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "STNT_KNAM", sRtn[4]);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "ROOM_KFNM", sRtn[25])
        				}
        				*/
        				this.fn_Ret();
        			break;
        		case "jeeoHangmok" :
        				this.fn_Ret();
        			break;
        		default:
                    break;
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSinCheongM.form.stc_05_00.addEventHandler("onclick",this.stc_05_onclick,this);
            this.divSinCheongM.form.grdMaster.addEventHandler("oncellposchanged",this.divSinCheongM_grdMaster_oncellposchanged,this);
            this.divSinCheongM.form.grdMaster.addEventHandler("onheadclick",this.divSinCheongM_grdMaster_onheadclick,this);
            this.divSinCheongM.form.grdMaster.addEventHandler("onheaddblclick",this.divSinCheongM_grdMaster_onheaddblclick,this);
            this.divSinCheongD.form.stc_00.addEventHandler("onclick",this.stc_05_onclick,this);
            this.divSinCheongD.form.cbm_00.addEventHandler("onitemchanged",this.divSinCheongD_cbm_00_onitemchanged,this);
            this.divSinCheongD.form.btnSincheongJeeo.addEventHandler("onclick",this.divSinCheongD_btnSincheongJeeo_onclick,this);
            this.divSinCheongD.form.btnSincheongJeeoHangmok.addEventHandler("onclick",this.divSinCheongD_btnSincheongJeeoHangmok_onclick,this);
        };
        this.loadIncludeScript("SYS005ConditionMasterM01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
