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
            this.set_titletext("주소팝업및프로시저처리샘풀 ");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMaster", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"POST_NO\" type=\"STRING\" size=\"32\"/><Column id=\"ADDR1\" type=\"STRING\" size=\"32\"/><Column id=\"ADDR2\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"POST_NO\"/><Col id=\"ADDR1\"/><Col id=\"ADDR2\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"PI_PARAM1\" type=\"STRING\" size=\"256\"/><Column id=\"PO_RET\" type=\"STRING\" size=\"256\"/><Column id=\"PO_ERRMSG\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"PI_PARAM1\">1</Col><Col id=\"PO_RET\"/><Col id=\"PO_ERRMSG\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_24","16","90",null,"32","574",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_25","16","90","100","32",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("우편번호");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPostNo","121","93","74","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAddr1","281","93","326","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddrPopup","200","93","77","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("주소검색");
            obj.set_cssclass("btn_WF_Pop");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAddr2","612","93",null,"25","580",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_autoselect("true");
            obj.set_maxlength("100");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","16","130","1053","50",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"526\"/><Column size=\"334\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"POST_NO\"/><Cell col=\"1\" text=\"ADDR1\"/><Cell col=\"2\" text=\"ADDR2\"/></Band><Band id=\"body\"><Cell text=\"bind:POST_NO\"/><Cell col=\"1\" text=\"bind:ADDR1\"/><Cell col=\"2\" text=\"bind:ADDR2\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","0","1",null,"44","1",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("우편번호 팝업 및 프로시저 처리 호출");
            obj.set_textAlign("center");
            obj.set_background("#f80626");
            obj.set_color("#ffffff");
            obj.set_font("bold 18px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static04",null,"49","166","35","1459",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("- 우편번호 팝업 샘풀 -");
            obj.set_textAlign("center");
            obj.set_background("cadetblue");
            obj.set_font("bold 14px/normal \"Gulim\"");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00",null,"189","166","35","1459",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("- 프로시저호출 -");
            obj.set_textAlign("center");
            obj.set_background("cadetblue");
            obj.set_font("bold 14px/normal \"Gulim\"");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Button("btnProceDure","23","317","107","26",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("프로시저 호출");
            obj.set_cssclass("btn_WF_Pop");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","17","259","473","53",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_binddataset("ds_input");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"129\"/><Column size=\"105\"/><Column size=\"228\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"PI_PARAM1\"/><Cell col=\"1\" text=\"PO_RET\"/><Cell col=\"2\" text=\"PO_ERRMSG\"/></Band><Band id=\"body\"><Cell text=\"bind:PI_PARAM1\"/><Cell col=\"1\" text=\"bind:PO_RET\"/><Cell col=\"2\" text=\"bind:PO_ERRMSG\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","16","226","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edtPostNo","value","dsMaster","POST_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtAddr1","value","dsMaster","ADDR1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edtAddr2","value","dsMaster","ADDR2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Edit00","value","ds_input","PI_PARAM1");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("SML034addressrProcedureSampleM01.xfdl", function() {
        /************************************************************************************************
         *
         * 테스트는 gds_menuTabAuth에 데이터를 추가하세요. MAIN_TAB_YN
         *
         * 조건: 중요탭을 제외한 기본탭이면서 탭 갯수가 최대 5개까지인 경우에만 사용 가능
         *
        ************************************************************************************************/

        /***********************************************************************************************
         *  FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	//폼에 공통으로 로드시 사용하는 함수.
        	this.gfn_formOnload(obj.e);
        	//사용자 화면  초기화 함수
           	this.fn_formInit();
        };
        /**********************************************************************
        	공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        this.fn_formInit = function()
        {

        };
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
                    case "Save":
                            this.fn_PostSave();
                        break;
                    default:
                        break;
                }
            }
        };
        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
            //return this.gfn_isUpdate(this.dsDetail);
        };

        this.btnAddrPopup_onclick = function(obj,e)
        {
        	this.gfn_searchAddress("addressCallback");
        };

        //주소 검색 팝업 콜백 함수
        this.addressCallback = function(strId, strVal)
        {
        	//값이 있을 때만 값 셋팅
        	//팝업에서 걍 닫기 누르면 아무값도 안 넘김

        	if(objApp.gds_PopRtn.rowcount > 0)
        	{
        		this.dsMaster.setColumn(this.dsMaster.rowposition,"POST_NO", objApp.gds_PopRtn.getColumn(0,"ZIP_CODE"));		//우편번호(5자리 신규 우편번호)
        		this.dsMaster.setColumn(this.dsMaster.rowposition,"ADDR1", 	 objApp.gds_PopRtn.getColumn(0,"ADDRESS"));			//주소1
        		this.edtAddr2.setFocus();
        	}
        };

        this.btnProceDure_onclick = function(obj,e)
        {
        	this.fn_Save();

        };

        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave = function()
        {
             var result = this.gfn_confirm( "프로시처 처리 하시겠습니까?", "프로시저","", "question" );
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
            var strUrl      = "/prj/sml/SaveProcedureSample.do";
            var strInDs     = "ds_input=ds_input:a";
            var strOutDs    = "ds_input=ds_input";
            var strArg      = "";
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
           trace(this.ds_input.saveXML());
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnAddrPopup.addEventHandler("onclick",this.btnAddrPopup_onclick,this);
            this.btnProceDure.addEventHandler("onclick",this.btnProceDure_onclick,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsMaster.addEventHandler("cancolumnchange",this.dsMaster_cancolumnchange,this);
        };
        this.loadIncludeScript("SML034addressrProcedureSampleM01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
