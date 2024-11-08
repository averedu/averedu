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
            this.set_titletext("자격증");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMaster1", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SABEON\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"JAGYEOK_MYEONHEO\" type=\"STRING\" size=\"256\"/><Column id=\"JAGYEOK_JEUNGMYEONG\" type=\"STRING\" size=\"256\"/><Column id=\"CHWIDEUK_DT\" type=\"STRING\" size=\"256\"/><Column id=\"YUHYO_GIGAN\" type=\"STRING\" size=\"256\"/><Column id=\"JAGYEOKJEUNG_BEONHO\" type=\"STRING\" size=\"256\"/><Column id=\"SIHAENG_GIGWAN\" type=\"STRING\" size=\"256\"/><Column id=\"CHOESANGGEUP_GUBUN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CHEORI_DT\" type=\"DATE\" size=\"256\"/><Column id=\"CHEORIJA\" type=\"STRING\" size=\"256\"/><Column id=\"WEP_SUJEONG_DT\" type=\"DATE\" size=\"256\"/><Column id=\"WEP_SUJEONG_IP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"SABEON\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster2", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SABEON\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"OEGUKEO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OEGUKEO_JEOMSU\" type=\"STRING\" size=\"256\"/><Column id=\"SIHAENG_GIGWAN\" type=\"STRING\" size=\"256\"/><Column id=\"CHWIDEUK_DT\" type=\"STRING\" size=\"256\"/><Column id=\"YUHYO_GIGAN\" type=\"STRING\" size=\"256\"/><Column id=\"CHEORI_DT\" type=\"DATE\" size=\"256\"/><Column id=\"CHEORIJA\" type=\"STRING\" size=\"256\"/><Column id=\"WEP_SUJEONG_DT\" type=\"DATE\" size=\"256\"/><Column id=\"WEP_SUJEONG_IP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01_02_00_00_00_00","0","-1","10","437",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","313","0","100","45",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("↑\r\n45\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","7","19","153","22",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("자격증 정보");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_00","5","36",null,"8","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave1",null,"11","55","25","10",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel1",null,"11","55","25","70",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnNew1",null,"11","55","25","190",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("신규");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel1",null,"11","55","25","130",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster1","10","44",null,"200","10",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("dsMaster1");
            obj.set_autofittype("col");
            obj.set_fillareatype("none");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\" band=\"left\"/><Column size=\"75\"/><Column size=\"143\"/><Column size=\"101\"/><Column size=\"106\"/><Column size=\"109\"/><Column size=\"139\"/><Column size=\"74\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"급수\"/><Cell col=\"2\" text=\"자격증명\" cssclass=\"point\"/><Cell col=\"3\" text=\"취득일자\" cssclass=\"point\"/><Cell col=\"4\" text=\"유효기간\"/><Cell col=\"5\" text=\"자격증번호\"/><Cell col=\"6\" text=\"시행기관\"/><Cell col=\"7\" text=\"최상급구분\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:JAGYEOK_MYEONHEO\" edittype=\"text\"/><Cell col=\"2\" text=\"bind:JAGYEOK_JEUNGMYEONG\" edittype=\"text\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:CHWIDEUK_DT\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" edittype=\"date\"/><Cell col=\"4\" text=\"bind:YUHYO_GIGAN\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"date\" edittype=\"date\"/><Cell col=\"5\" text=\"bind:JAGYEOKJEUNG_BEONHO\" edittype=\"text\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:SIHAENG_GIGWAN\" edittype=\"text\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:CHOESANGGEUP_GUBUN_YN\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","313","244","100","45",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("↑\r\n45\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00_00","7","263","153","22",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("외국어 능력");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_00_00","5","280",null,"8","0",null,null,null,null,null,this);
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

            obj = new Button("btnSave2",null,"255","55","25","10",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel2",null,"255","55","25","70",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnNew2",null,"255","55","25","190",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("신규");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel2",null,"255","55","25","130",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster2","10","288",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_binddataset("dsMaster2");
            obj.set_autofittype("col");
            obj.set_fillareatype("none");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\" band=\"left\"/><Column size=\"188\"/><Column size=\"114\"/><Column size=\"175\"/><Column size=\"115\"/><Column size=\"126\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"외국어명\" cssclass=\"point\"/><Cell col=\"2\" text=\"접수및급수\"/><Cell col=\"3\" text=\"시행기관\"/><Cell col=\"4\" text=\"취득일자\" cssclass=\"point\"/><Cell col=\"5\" text=\"유효기간\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:OEGUKEO_NM\" edittype=\"text\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:OEGUKEO_JEOMSU\" edittype=\"text\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:SIHAENG_GIGWAN\" edittype=\"text\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:CHWIDEUK_DT\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" edittype=\"date\"/><Cell col=\"5\" text=\"bind:YUHYO_GIGAN\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" edittype=\"date\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("자격증");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item14","cboJuya00","value","ds_input","DAEHAK_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster1");
            this._addPreloadList("data","","dsMaster2");
        };
        
        // User Script
        this.registerScript("AM01_3010103_T06.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): AM01_3010103_T06.xfdl(자격증)
        * 작 성         일 명: 정진호
        * 작 성         일 자: 2022/09/23
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
        this.lvchkColidDs1   = "JAGYEOK_JEUNGMYEONG$CHWIDEUK_DT";
        this.lvchkColNameDs1 = "자격증명$취득일자";
        this.lvchkColidDs2   = "OEGUKEO_NM$CHWIDEUK_DT";
        this.lvchkColNameDs2 = "외국어명$취득일자";
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
                    case "Post":
                            this.fn_Ret(this.ds_input.getColumn(0, "SABEON"));
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
         * 기능 : 마스터 조회 실행
         */
        this.fn_Ret = function(sabeon)
        {
            this.ds_input.setColumn(0, "SABEON", sabeon);

            var strSvc      = "Ret";
            var strUrl      = "/prj/AM/AM01/Retrieve_3010101_T08.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsMaster1=dsMaster1 ";
        	    strOutDs   += "dsMaster2=dsMaster2";
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
        this.fn_New1 = function()
        {
            var nRow = this.dsMaster1.addRow();
        	this.dsMaster1.setColumn(nRow, "SABEON", this.ds_input.getColumn(0, "SABEON"));
        };
        this.fn_New2 = function()
        {
            var nRow = this.dsMaster2.addRow();
        	this.dsMaster2.setColumn(nRow, "SABEON", this.ds_input.getColumn(0, "SABEON"));
        };

        /**********************************************************************
                07. 삭제 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 삭제 버튼 실행
         */
        this.fn_PreDel1 = function()
        {
            //멀티삭제용도
            if(this.dsMaster1.rowcount < 1)
            {
                this.gfn_alert("삭제할 데이터가 없습니다.","삭제정보","","warning");
                return false;
            }

            var result = this.gfn_confirm( "현재선택행을 삭제하시겠습니까?", "삭제정보","","question" );
            if(result == 0)
            {
                return false;
            }

            //개별삭제시
            this.dsMaster1.deleteRow(this.dsMaster1.rowposition);
            return true;
        };

        /**
         * 기능 : Row 삭제 또는 Transaction 삭제 처리
         */
        this.fn_Del1 = function()
        {
            if(!this.fn_PreDel1())
            {
                return false;
            }
            var strSvc      = "Post";
            var strUrl      = "/prj/AM/AM01/Delete_3010101_T08_1.do";
            var strInDs     = "dsMaster1=dsMaster1:u";
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

        /**
         * 기능 : 삭제 버튼 실행
         */
        this.fn_PreDel2 = function()
        {
            //멀티삭제용도
            if(this.dsMaster2.rowcount < 1)
            {
                this.gfn_alert("삭제할 데이터가 없습니다.","삭제정보","","warning");
                return false;
            }

            var result = this.gfn_confirm( "현재선택행을 삭제하시겠습니까?", "삭제정보","","question" );
            if(result == 0)
            {
                return false;
            }

            //개별삭제시
            this.dsMaster2.deleteRow(this.dsMaster2.rowposition);
            return true;
        };

        /**
         * 기능 : Row 삭제 또는 Transaction 삭제 처리
         */
        this.fn_Del2 = function()
        {
            if(!this.fn_PreDel2())
            {
                return false;
            }
            var strSvc      = "Post";
            var strUrl      = "/prj/AM/AM01/Delete_3010101_T08_2.do";
            var strInDs     = "dsMaster2=dsMaster2:u";
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
        this.fn_PreSave1 = function()
        {
            if(!this.gfn_isUpdate(this.dsMaster1))
            {
                this.gfn_alert("변경된 이력이 없습니다.","저장정보","","question");
                return false;
            }

            // 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
            var chkFocusFlg = true;
            var result      = this.gfn_cmmnChkEssentialItem(this.dsMaster1, this.lvchkColidDs1, this.lvchkColNameDs1, this.grdMaster1, chkFocusFlg, this);

            if (result[0] != "success")
            {
                this.gfn_alert(result[0],"저장정보","","question");
                this.dsMaster1.set_rowposition(result[1]); //데이터셋 변경
                return false;
        	}

        	for(var i=0; i<this.dsMaster1.rowcount; i++)
        	{
        		var chwideukDt = this.dsMaster1.getColumn(i, "CHWIDEUK_DT"); // 취득일자
        		var yuhyoGigan = this.dsMaster1.getColumn(i, "YUHYO_GIGAN"); // 유효기간

        		if(this.gfn_trim(yuhyoGigan) != "")
        		{
        			if (this.gfn_getDiffDate(chwideukDt, yuhyoGigan) < 0)
        			{
        				this.alert("취득일자가 유효기간보다 큽니다.");
        				return false;
        			}
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
        this.fn_Save1 = function()
        {
            if(!this.fn_PreSave1())
            {
                return false;
            }
            var strSvc      = "Post";
            var strUrl      = "/prj/AM/AM01/Save_3010101_T08_1.do";
            var strInDs     = "dsMaster1=dsMaster1:u";
            var strOutDs    = "";
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
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave2 = function()
        {
            if(!this.gfn_isUpdate(this.dsMaster2))
            {
                this.gfn_alert("변경된 이력이 없습니다.","저장정보","","question");
                return false;
            }

            // 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
            var chkFocusFlg = true;
            var result      = this.gfn_cmmnChkEssentialItem(this.dsMaster2, this.lvchkColidDs2, this.lvchkColNameDs2, this.grdMaster2, chkFocusFlg, this);

            if (result[0] != "success")
            {
                this.gfn_alert(result[0],"저장정보","","question");
                this.dsMaster2.set_rowposition(result[1]); //데이터셋 변경
                return false;
        	}

        	for(var i=0; i<this.dsMaster2.rowcount; i++)
        	{
        		var chwideukDt = this.dsMaster2.getColumn(i, "CHWIDEUK_DT"); // 취득일자
        		var yuhyoGigan = this.dsMaster2.getColumn(i, "YUHYO_GIGAN"); // 유효기간

        		if(this.gfn_trim(yuhyoGigan) != "")
        		{
        			if (this.gfn_getDiffDate(chwideukDt, yuhyoGigan) < 0)
        			{
        				this.alert("취득일자가 유효기간보다 큽니다.");
        				return false;
        			}
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
        this.fn_Save2 = function()
        {
            if(!this.fn_PreSave2())
            {
                return false;
            }
            var strSvc      = "Post";
            var strUrl      = "/prj/AM/AM01/Save_3010101_T08_2.do";
            var strInDs     = "dsMaster2=dsMaster2:u";
            var strOutDs    = "";
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
                08. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj,e)
        {
            this.gfn_gridSort(obj,e);
        };

        // 취소버튼 클릭시
        this.btnCancel1_onclick = function(obj,e)
        {
        	this.dsMaster1.reset();
        };
        this.btnCancel2_onclick = function(obj,e)
        {
        	this.dsMaster2.reset();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.btnSave1.addEventHandler("onclick",this.fn_Save1,this);
            this.btnCancel1.addEventHandler("onclick",this.btnCancel1_onclick,this);
            this.btnNew1.addEventHandler("onclick",this.fn_New1,this);
            this.btnDel1.addEventHandler("onclick",this.fn_Del1,this);
            this.grdMaster1.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.btnSave2.addEventHandler("onclick",this.fn_Save2,this);
            this.btnCancel2.addEventHandler("onclick",this.btnCancel2_onclick,this);
            this.btnNew2.addEventHandler("onclick",this.fn_New2,this);
            this.btnDel2.addEventHandler("onclick",this.fn_Del2,this);
            this.grdMaster2.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
        };
        this.loadIncludeScript("AM01_3010103_T06.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
