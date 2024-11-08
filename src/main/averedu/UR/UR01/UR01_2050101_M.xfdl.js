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
            this.set_titletext("학과별등록금관리");
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
            obj.set_text("정규학기");
            obj.set_url("UR01::UR01_2050101_T01.xfdl");
            this.Tab.addChild(obj.name, obj);

            obj = new Tabpage("TabPage2",this.Tab);
            obj.set_text("계절학기");
            obj.set_url("UR01::UR01_2050101_T02.xfdl");
            this.Tab.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("학과별등록금관리");
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
            this._addPreloadList("fdl","UR01::UR01_2050101_T01.xfdl");
            this._addPreloadList("fdl","UR01::UR01_2050101_T02.xfdl");
        };
        
        // User Script
        this.registerScript("UR01_2050101_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UR01_2050101_M.xfdl(학과별 등록금 관리 관리(조회))
        * 작 성         일 명: jiback
        * 작 성         일 자: 2021/10/05
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
                case "new" :         // 신규
                        this.fn_New();
                    break;
                case "del" :         // 삭제
                        this.fn_Del();
                    break;
                case "save" :        // 저장
                        this.fn_Save();
                    break;
                case "tmp1" :        // 전년도복사
                         this.fn_Copy();
                    break;
                case "tmp2" :        // 팁
                         this.fn_Tip();
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
        	// 정규학기
        	if(this.Tab.tabindex==0){
        		this.Tab.TabPage1.form.fn_Ret();
        	}
        	// 계절학기
        	if(this.Tab.tabindex==1){
        		this.Tab.TabPage2.form.fn_Ret();
        	}
        };

        /**********************************************************************
                06. 추가 함수 선언
        ***********************************************************************/
        this.fn_New = function()
        {
        	// 정규학기
        	if(this.Tab.tabindex==0){
        		this.Tab.TabPage1.form.fn_New();
        	}
        	// 계절학기
        	if(this.Tab.tabindex==1){
        		this.Tab.TabPage2.form.fn_New();
        	}
        };

        /**********************************************************************
                07. 삭제 함수 선언
        ***********************************************************************/
        this.fn_Del = function()
        {
        	// 정규학기
        	if(this.Tab.tabindex==0){
        		this.Tab.TabPage1.form.fn_Del();
        	}
        	// 계절학기
        	if(this.Tab.tabindex==1){
        		this.Tab.TabPage2.form.fn_Del();
        	}
        };

        /**********************************************************************
                08. 저장 함수 선언
        ***********************************************************************/
        this.fn_Save = function()
        {
        	// 정규학기
        	if(this.Tab.tabindex==0){
        		this.Tab.TabPage1.form.fn_Save();
        	}
        	// 계절학기
        	if(this.Tab.tabindex==1){
        		this.Tab.TabPage2.form.fn_Save();
        	}
        };

        /**********************************************************************
                09. 전년도복사
        ***********************************************************************/
        this.fn_Copy = function()
        {
        	// 정규학기
        	if(this.Tab.tabindex==0){
        		this.Tab.TabPage1.form.fn_Copy();
        	}
        	// 계절학기
        	if(this.Tab.tabindex==1){
        		this.Tab.TabPage2.form.fn_Copy();
        	}
        };

        /**********************************************************************
                10. 팁
        ***********************************************************************/
        this.fn_Tip = function()
        {
        	this.alert("도움말 준비중입니다.");
        };

        /**********************************************************************
                11. 기타 Control Event
        ***********************************************************************/
        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
           var value = false;

           if(this.gfn_isUpdate(this.Tab.TabPage1.form.dsMaster))
           {
              value = true;
           }
           else if(this.gfn_isUpdate(this.Tab.TabPage2.form.dsMaster))
           {
              value = true;
           }

           return value;
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
        this.loadIncludeScript("UR01_2050101_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
