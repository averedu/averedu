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
            this.set_titletext("파일업로드");
            if (Form == this.constructor)
            {
                this._setFormPosition(700,480);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_input", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"100\"/><Column id=\"GIJUN_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HYEONJAE_MOJIP\" type=\"STRING\" size=\"256\"/><Column id=\"CALL_POPUP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFileUpload", this);
            obj._setContents("<ColumnInfo><Column id=\"FILENAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FILESIZE\" type=\"STRING\" size=\"256\"/><Column id=\"FILEPATH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Divbg","10","10",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Divbg");
            obj.set_cssclass("type02");
            obj.set_background("white");
            obj.set_border("2px solid");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload","200","230","230","20",null,null,null,null,null,null,this.Divbg.form);
            obj.set_taborder("0");
            obj.set_uploadurl("/event/comm/upload?upload_path=EN");
            this.Divbg.addChild(obj.name, obj);

            obj = new Static("Static00","140","230","60","20",null,null,null,null,null,null,this.Divbg.form);
            obj.set_taborder("1");
            obj.set_text("파일 선택");
            this.Divbg.addChild(obj.name, obj);

            obj = new Button("btnUpload","440","230","60","20",null,null,null,null,null,null,this.Divbg.form);
            obj.set_taborder("2");
            obj.set_text("업로드");
            this.Divbg.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",700,480,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_description("파일업로드");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("EN03_1010301_P01.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): EN03_1010301_P01.xfdl(파일업로드)
        * 작 성         일 명: 백재인
        * 작 성         일 자: 2021/06/10
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

        	// 기본값 세팅
        	this.ds_input.setColumn(0, "IPSI_YYYY", this.getOwnerFrame().IPSI_YYYY);
        	this.ds_input.setColumn(0, "GIJUN_YYYY", this.getOwnerFrame().GIJUN_YYYY);
        	this.ds_input.setColumn(0, "HYEONJAE_MOJIP", this.getOwnerFrame().HYEONJAE_MOJIP);
        	this.ds_input.setColumn(0, "CALL_POPUP", this.getOwnerFrame().CALL_POPUP);
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
                    default:
                        break;
                }
            }
        };

        /**********************************************************************
                05. 파일업로드 버튼 클릭시
        ***********************************************************************/
        this.Divbg_btnUpload_onclick = function(obj,e)
        {
        	var fileIndex = this.Divbg.form.FileUpload.index;
        	if(fileIndex == -1)
        	{
        		this.alert("업로드할 파일을 선택해주세요.");
        	}
        	else
        	{
        		this.Divbg.form.FileUpload.upload();
        	}
        };

        /**********************************************************************
                06. 파일업로드 성공시
        ***********************************************************************/
        this.Divbg_FileUpload_onsuccess = function(obj,e)
        {
        	this.dsFileUpload.copyData(e.datasets[0]);
        	var HYEONJAE_MOJIP	= this.ds_input.getColumn(0, "HYEONJAE_MOJIP");
        	var CALL_POPUP = this.ds_input.getColumn(0, "CALL_POPUP");
        	var mojipGubun1 = "";
        	var mojipGubun2 = "";

        	// (1: 정시, 2: 수시, A: 1차, B: 2차, C: 3차)
        	if( HYEONJAE_MOJIP == "1" )
        	{
        		// 수시 1차
        		mojipGubun1 = "2";
        		mojipGubun2 = "A";
        	}
        	else if( HYEONJAE_MOJIP == "2" )
        	{
        		// 수시 2차
        		mojipGubun1 = "2";
        		mojipGubun2 = "B";
        	}
        	else if( HYEONJAE_MOJIP == "3" )
        	{
        		// 정시 1차
        		mojipGubun1 = "1";
        		mojipGubun2 = "A";
        	}
        	else if( HYEONJAE_MOJIP == "4" )
        	{
        		// 정시 2차
        		mojipGubun1 = "1";
        		mojipGubun2 = "B";
        	}
        	else
        	{
        		mojipGubun1 = "";
        		mojipGubun2 = "";
        	}

        	//var param = 'IPSI_YYYY='+this.appObj.spn_ipsiYyyy.toString()+' MOJIP_GUBUN1='+mojipGubun1+' MOJIP_GUBUN2='+mojipGubun2+' GIJUN_YYYY='+this.appObj.GIJUN_YYYY.toString();
        	if(CALL_POPUP=="HAKSAENGBU")
        	{
        		// 학생부 성적이관
        		// - 엑셀업로드 보류
        // 		app.gfn_transaction({
        // 			FORM     : this
        // 			, ID       : 'EN03_1010301_M_01_T'
        // 			, URL      : '/en03_1010301_m_seongjeok_igwan_t'
        // 			, SEND_DS  : 'DS_FILE_UPLOAD=DS_FILE_UPLOAD'
        // 			, RECV_DS  : 'DS_UPLOAD_RESULT0=RESULT0 DS_ERROR=DS_ERROR'
        // 			, PARAM    : param
        // 			, CALLBACK : 'custom_callBack'
        // 			, ASYNC    : false
        // 		});

        	}
        	else if(CALL_POPUP=="GEOMJEONG")
        	{
        		// 검정고시 성적이관
        		// - 엑셀업로드 보류
        // 		app.gfn_transaction({
        // 			FORM     : this
        // 			, ID       : 'EN03_1010303_M_01_C'
        // 			, URL      : '/en03_1010303_m_seongjeok_igwan'
        // 			, SEND_DS  : 'DS_FILE_UPLOAD=DS_FILE_UPLOAD'
        // 			, RECV_DS  : 'DS_UPLOAD_RESULT0=RESULT0 DS_ERROR=DS_ERROR'
        // 			, PARAM    : param
        // 			, CALLBACK : 'custom_callBack'
        // 			, ASYNC    : false
        // 		});
        	}
        };

        /**********************************************************************
                07. 파일업로드 실패시
        ***********************************************************************/
        this.Divbg_FileUpload_onerror = function(obj,e)
        {
        	this.alert("업로드에 실패하였습니다.");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.Divbg.form.FileUpload.addEventHandler("onsuccess",this.Divbg_FileUpload_onsuccess,this);
            this.Divbg.form.FileUpload.addEventHandler("onerror",this.Divbg_FileUpload_onerror,this);
            this.Divbg.form.btnUpload.addEventHandler("onclick",this.Divbg_btnUpload_onclick,this);
        };
        this.loadIncludeScript("EN03_1010301_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
