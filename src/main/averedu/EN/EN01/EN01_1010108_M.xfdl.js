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
            this.set_titletext("입시기준정보관리");
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
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"10\"/><Column id=\"IPSI_MYEONJEOP_BIYUL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"IPSI_SILGI_BIYUL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PYEONIP_MYEONJEOP_BIYUL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PYEONIP_SILGI_BIYUL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"500\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"500\"/><Column id=\"USE_YN_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdMaster","0","0",null,null,"0","64",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"상태\"/><Cell col=\"1\" text=\"년도\"/><Cell col=\"2\" text=\"사용여부\"/><Cell col=\"3\" text=\"입시 면접 비율\"/><Cell col=\"4\" text=\"입시 실기 비율\"/><Cell col=\"5\" text=\"편입 면접 비율\"/><Cell col=\"6\" text=\"편입실기 비율\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:YYYY\" editmaxlength=\"4\" editinputtype=\"number\"/><Cell col=\"2\" displaytype=\"combotext\" edittype=\"none\" textAlign=\"center\" text=\"bind:USE_YN\" editmaxlength=\"100\" combodataset=\"dsYN\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:IPSI_MYEONJEOP_BIYUL\" editmaxlength=\"3\" editinputtype=\"number\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:IPSI_SILGI_BIYUL\" editmaxlength=\"3\" editinputtype=\"number\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:PYEONIP_MYEONJEOP_BIYUL\" editmaxlength=\"3\" combodataset=\"dsHaeksim\" editinputtype=\"number\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" editmaxlength=\"3\" text=\"bind:PYEONIP_SILGI_BIYUL\" combodataset=\"dsBigyogwaBunryu\" editinputtype=\"number\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06","0",null,"1640","28",null,"0",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06","0",null,"120","28",null,"0",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("년도");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00","223",null,"120","28",null,"0",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Spin("spnYYYY","124",null,"96","22",null,"3",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_enable("true");
            obj.set_cssclass("point");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","481","736","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoUseYn","354",null,"183","22",null,"3",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_innerdataset("dsYN");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_direction("vertical");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00","551",null,"120","28",null,"0",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("입시 면접 비율");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtIpsiMyeonjeop","674",null,"146","22",null,"3",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_cssclass("point");
            obj.set_maxlength("3");
            obj.set_inputtype("dot,number");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00","823",null,"120","28",null,"0",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("입시 실기 비율");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtIpsiSilgi","946",null,"146","22",null,"3",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_cssclass("point");
            obj.set_maxlength("3");
            obj.set_inputtype("dot,number");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00_00","1095",null,"120","28",null,"0",null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("편입 면접 비율");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPyeonipMyeonjeop","1218",null,"146","22",null,"3",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_cssclass("point");
            obj.set_maxlength("3");
            obj.set_inputtype("dot,number");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00_01","1367",null,"120","28",null,"0",null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("편입 실기 비율");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPyeonipSilgi","1490",null,"146","22",null,"3",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_cssclass("point");
            obj.set_maxlength("3");
            obj.set_inputtype("dot,number");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_description("입시기준정보관리");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item4","spnYYYY","value","dsMaster","YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","rdoUseYn","value","dsMaster","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtIpsiMyeonjeop","value","dsMaster","IPSI_MYEONJEOP_BIYUL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edtIpsiSilgi","value","dsMaster","IPSI_SILGI_BIYUL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edtPyeonipMyeonjeop","value","dsMaster","PYEONIP_MYEONJEOP_BIYUL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edtPyeonipSilgi","value","dsMaster","PYEONIP_SILGI_BIYUL");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("EN01_1010108_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): EN01_1010108_M.xfdl(입시기준정보관리)
        * 작 성         일 명: 성연우
        * 작 성         일 자: 2021/04/12
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
        this.lvchkColidDs   = "YYYY$USE_YN$IPSI_MYEONJEOP_BIYUL$IPSI_SILGI_BIYUL$PYEONIP_MYEONJEOP_BIYUL$PYEONIP_SILGI_BIYUL";      // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs = "입시년도$사용여부$입시 면접 비율$ 입시 실기 비율$편입 면접 비율$편입 실기 비율";
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
        	this.fn_Ret();
        };

        /**********************************************************************
                04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        this.fn_formInit = function()
        {

            var strDs    = "dsYN";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00801";                         // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
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
            var strUrl      = "/prj/EN/EN01/Retrieve_1010108_M.do";
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

        /**********************************************************************
                06. 추가 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_New = function()
        {
            var nRow = this.dsMaster.addRow();
        	this.dsMaster.setColumn(nRow,"YYYY",objApp.gds_SystemDate.getColumn(0,"YYYY"));
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
            if(this.dsMaster.rowcount < 1)
            {
                this.gfn_alert("삭제할 데이타가 없습니다.!","삭제정보","","warning");
                return false;
            }
            var result = this.gfn_confirm( "현재선택행을 삭제하시겠습니까?", "삭제정보","","question" );

            if(result == 0)
            {
                return false;
            }

            //개별삭제시
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
            var strUrl      = "/prj/EN/EN01/Delete_1010108_M.do";
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
                this.gfn_alert("변경된 이력이 없습니다.!","저장정보","","question");
                return false;
            }

        	var cnt = 0
        	for(var i=0;i<this.dsMaster.rowcount; i++)
        	{
        		if(this.dsMaster.getColumn(i,"USE_YN") == "1")
        		{
        			cnt++;
        		}
        	}

        	if(cnt > 1)
        	{
        		this.alert("현재 사용중인 입시기준년도가 존재합니다.");
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

        	for(var i=0;i<this.dsMaster.rowcount; i++)
        	{
        		if(this.dsMaster.getColumn(i,"IPSI_MYEONJEOP_BIYUL") > 1 || this.dsMaster.getColumn(i,"IPSI_MYEONJEOP_BIYUL") < 0)
        		{
        			this.alert("입시면접비율은 0과 1사이의 값을 입력해야 합니다.");
        			return false;
        		}

        		if(this.dsMaster.getColumn(i,"IPSI_SILGI_BIYUL") > 1 || this.dsMaster.getColumn(i,"IPSI_SILGI_BIYUL") < 0)
        		{
        			this.alert("입시실기비율은 0과 1사이의 값을 입력해야 합니다.");
        			return false;
        		}

        		if(this.dsMaster.getColumn(i,"PYEONIP_MYEONJEOP_BIYUL") > 1 || this.dsMaster.getColumn(i,"PYEONIP_MYEONJEOP_BIYUL") < 0)
        		{
        			this.alert("편입면접비율은 0과 1사이의 값을 입력해야 합니다.");
        			return false;
        		}

        		if(this.dsMaster.getColumn(i,"PYEONIP_SILGI_BIYUL") > 1 || this.dsMaster.getColumn(i,"PYEONIP_SILGI_BIYUL") < 0)
        		{
        			this.alert("편입실기비율은 0과 1사이의 값을 입력해야 합니다.");
        			return false;
        		}
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
            var strUrl      = "/prj/EN/EN01/Save_1010108_M.do";
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

        /**********************************************************************
                09. 팁
        ***********************************************************************/
        this.fn_Tip = function()
        {
        	this.alert("도움말 준비중입니다.");
        };

        /**********************************************************************
                10. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj,e)
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

        // 그리드 변경시
        this.dsMaster_onrowposchanged = function(obj,e)
        {
        	if (obj.getRowType(obj.rowposition) == Dataset.ROWTYPE_INSERT)
        	{
        		this.spnYYYY.set_readonly(false);
        	}
        	else
        	{
        		this.spnYYYY.set_readonly(true);
        	}
        };

        this.rdoUseYn_onitemchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclick",this.form_onclick,this);
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
            this.rdoUseYn.addEventHandler("onitemchanged",this.rdoUseYn_onitemchanged,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsMaster.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
        };
        this.loadIncludeScript("EN01_1010108_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
