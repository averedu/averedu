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
            this.set_titletext("미등록·미복학자제적처리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Tab("Tab","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Tabpage("TabPage1",this.Tab);
            obj.set_text("미등록");
            obj.set_url("US02::US02_2010205_T01.xfdl");
            this.Tab.addChild(obj.name, obj);

            obj = new Tabpage("TabPage2",this.Tab);
            obj.set_text("미복학");
            obj.set_url("US02::US02_2010205_T02.xfdl");
            this.Tab.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("미등록·미복학자제적처리");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item63","Tab","enable","dsBindableTab","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","US02::US02_2010205_T01.xfdl");
            this._addPreloadList("fdl","US02::US02_2010205_T02.xfdl");
        };
        
        // User Script
        this.registerScript("US02_2010205_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): US02_2010205_M.xfdl(제적대상자 관리(조회))
        * 작 성         일 명: jiback
        * 작 성         일 자: 2021/09/15
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
                case "del" :         // 삭제
                        this.fn_Del();
                    break;
                case "tmp1" :        // 대상자생성
                         this.fn_Saengsung();
                    break;
                case "tmp2" :        // 제적처리
                         this.fn_Jejeok();
                    break;
                case "tmp3" :        // 주소라벨지
                         this.fn_Label();
                    break;
                default :
                    break;
            };
        };;

        /**********************************************************************
                05. 조회 함수 선언(마스터 함수)
        ***********************************************************************/
        this.fn_Ret = function()
        {
        	// 미등록
        	if(this.Tab.tabindex==0){
        		this.Tab.TabPage1.form.fn_Ret();
        	}
        	// 미복학
        	if(this.Tab.tabindex==1){
        		this.Tab.TabPage2.form.fn_Ret();
        	}
        };

        /**********************************************************************
                06. 삭제 함수 선언
        ***********************************************************************/
        this.fn_Del = function()
        {
        	// 미등록
        	if(this.Tab.tabindex==0){
        		this.Tab.TabPage1.form.fn_Del();
        	}
        	// 미복학
        	if(this.Tab.tabindex==1){
        		this.Tab.TabPage2.form.fn_Del();
        	}
        };

        /**********************************************************************
                07. 대상자생성 함수 선언
        ***********************************************************************/
        this.fn_Saengsung = function()
        {
        	// 미등록
        	if(this.Tab.tabindex==0){
        		this.Tab.TabPage1.form.fn_Saengsung();
        	}
        	// 미복학
        	if(this.Tab.tabindex==1){
        		this.Tab.TabPage2.form.fn_Saengsung();
        	}
        };

        /**********************************************************************
                08. 제적처리 함수 선언
        ***********************************************************************/
        this.fn_Jejeok = function()
        {
        	// 미등록
        	if(this.Tab.tabindex==0){
        		this.Tab.TabPage1.form.fn_Jejeok();
        	}
        	// 미복학
        	if(this.Tab.tabindex==1){
        		this.Tab.TabPage2.form.fn_Jejeok();
        	}
        };

        /**********************************************************************
                09. 주소라벨지 출력 함수 선언
        ***********************************************************************/
        this.fn_Label = function()
        {
        	// 미등록
        	if(this.Tab.tabindex==0){
        		this.Tab.TabPage1.form.fn_Label();
        	}
        	// 미복학
        	if(this.Tab.tabindex==1){
        		this.Tab.TabPage2.form.fn_Label();
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.Tab.addEventHandler("onchanged",this.Tab_onchanged,this);
        };
        this.loadIncludeScript("US02_2010205_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
