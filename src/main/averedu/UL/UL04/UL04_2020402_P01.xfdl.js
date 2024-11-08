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
            this.set_titletext("강의실선택");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,480);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMaster", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"LV\" type=\"STRING\" size=\"256\"/><Column id=\"BLDG_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"FLOR_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"HOSIL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HOSIL_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"100\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"ISU_HAKNYEON_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GYOGWAMOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BUNBAN\" type=\"STRING\" size=\"256\"/><Column id=\"JUCHA\" type=\"STRING\" size=\"256\"/><Column id=\"YOIL_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"GYOSI\" type=\"STRING\" size=\"256\"/><Column id=\"SUEOPTM_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"BEFORE_HOSIL\" type=\"STRING\" size=\"256\"/><Column id=\"HOSIL_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnClose","330",null,"60","25",null,"10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","265",null,"60","25",null,"10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("변경");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("staTree","10","10","105","22",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("강의실 선택");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","0","27",null,"8","0",null,null,null,null,null,this);
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

            obj = new Grid("grdMaster","10","35",null,null,"10","69",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:HOSIL_NM\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:LV\" treestartlevel=\"1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","200","0","100","35",null,null,null,null,null,null,this);
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

            obj = new Static("Static01_02_00_00_00_00","0","10","10",null,null,"250",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,"35","10",null,"0","225",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_01","0",null,null,"10","0","0",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("10");
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
            obj = new Layout("default","",400,480,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_description("강의실선택");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("UL04_2020402_P01.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UL03_2020402_P01.xfdl(강의실선택)
        * 작 성         일 명: jiback
        * 작 성         일 자: 2022/07/21
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

        	if (!this.gfn_isNull(this.getOwnerFrame().YYYY)) {
        		this.ds_input.setColumn(0, "YYYY", this.getOwnerFrame().YYYY);
        	}
        	if (!this.gfn_isNull(this.getOwnerFrame().HAKGI)) {
        		this.ds_input.setColumn(0, "HAKGI", this.getOwnerFrame().HAKGI);
        	}
        	if (!this.gfn_isNull(this.getOwnerFrame().HAKGWA_CD)) {
        		this.ds_input.setColumn(0, "HAKGWA_CD", this.getOwnerFrame().HAKGWA_CD);
        	}
        	if (!this.gfn_isNull(this.getOwnerFrame().JUYA_GBCD)) {
        		this.ds_input.setColumn(0, "JUYA_GBCD", this.getOwnerFrame().JUYA_GBCD);
        	}
        	if (!this.gfn_isNull(this.getOwnerFrame().ISU_HAKNYEON_CD)) {
        		this.ds_input.setColumn(0, "ISU_HAKNYEON_CD", this.getOwnerFrame().ISU_HAKNYEON_CD);
        	}
        	if (!this.gfn_isNull(this.getOwnerFrame().GYOGWAMOK_CD)) {
        		this.ds_input.setColumn(0, "GYOGWAMOK_CD", this.getOwnerFrame().GYOGWAMOK_CD);
        	}
        	if (!this.gfn_isNull(this.getOwnerFrame().BUNBAN)) {
        		this.ds_input.setColumn(0, "BUNBAN", this.getOwnerFrame().BUNBAN);
        	}
        	if (!this.gfn_isNull(this.getOwnerFrame().JUCHA)) {
        		this.ds_input.setColumn(0, "JUCHA", this.getOwnerFrame().JUCHA);
        	}
        	if (!this.gfn_isNull(this.getOwnerFrame().YOIL_GBCD)) {
        		this.ds_input.setColumn(0, "YOIL_GBCD", this.getOwnerFrame().YOIL_GBCD);
        	}
        	if (!this.gfn_isNull(this.getOwnerFrame().GYOSI)) {
        		this.ds_input.setColumn(0, "GYOSI", this.getOwnerFrame().GYOSI);
        	}
        	if (!this.gfn_isNull(this.getOwnerFrame().SUEOPTM_GBCD)) {
        		this.ds_input.setColumn(0, "SUEOPTM_GBCD", this.getOwnerFrame().SUEOPTM_GBCD);
        	}
        	if (!this.gfn_isNull(this.getOwnerFrame().BEFORE_HOSIL)) {
        		this.ds_input.setColumn(0, "BEFORE_HOSIL", this.getOwnerFrame().BEFORE_HOSIL);
        	}

        	this.fn_Ret();
        };

        /**********************************************************************
                04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {
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
        this.fn_Ret = function()
        {
            var strSvc      = "Ret";
            var strUrl      = "/prj/UL/UL04/Retrieve_2020402_P01.do";
            var strInDs     = "";
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
           	// 등록된 수업의 강의실 찾기
        	var getRowTemp = this.dsMaster.findRow("HOSIL_CD", this.ds_input.getColumn(0, "BEFORE_HOSIL"));
        	var rowList = new Array();
        	rowList[0] = getRowTemp;
        	this.dsMaster.set_rowposition(getRowTemp);

        	for(var i=1 ; i < 3 ; i++)
        	{
        		nParentRow = this.grdMaster.getTreeParentRow(getRowTemp);
        		rowList[i] = nParentRow;
        		getRowTemp = nParentRow;
        	}

        	for(var j=2 ; j >= 0 ; j--)
        	{
        		var treeRow = this.grdMaster.getTreeRow(rowList[j]);
        		var bSucc = this.grdMaster.setTreeStatus(treeRow,true);
        	}
        };

        /**********************************************************************
                08. 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave = function()
        {

             var result = this.gfn_confirm("강의실을 변경하시겠습니까?", "저장","", "question" );
             if(result == 0)
             {
                 return false;
             }

        	 this.ds_input.setColumn(0, "HOSIL_CD", this.dsMaster.getColumn(this.dsMaster.rowposition, "HOSIL_CD"))

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
            var strUrl      = "/prj/UL/UL04/Save_2020402_P01.do";
            var strInDs     = "ds_input=ds_input";
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
         *      기능 : 저장시 후처리
         */
        this.fn_PostSave = function()
        {
        	this.alert("정상적으로 변경되었습니다.");
        	this.close("CLOSE");
        };

        /**********************************************************************
                14. 기타 Control Event
        ***********************************************************************/
        this.btnSave_onclick = function(obj,e)
        {
        	this.fn_Save();
        };

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
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
        };
        this.loadIncludeScript("UL04_2020402_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
