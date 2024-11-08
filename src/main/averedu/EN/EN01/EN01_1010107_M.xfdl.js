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
            this.set_titletext("과목코드관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Tab("Tab",null,"0","1640",null,"0","0",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_tabindex("0");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Tabpage("TabPage1",this.Tab);
            obj.set_text("과목코드 업로드");
            obj.set_url("EN01::EN01_1010107_T01.xfdl");
            this.Tab.addChild(obj.name, obj);

            obj = new Tabpage("TabPage2",this.Tab);
            obj.set_text("매핑과목코드 관리");
            obj.set_url("EN01::EN01_1010107_T02.xfdl");
            this.Tab.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("과목코드관리");
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
            this._addPreloadList("fdl","EN01::EN01_1010107_T01.xfdl");
            this._addPreloadList("fdl","EN01::EN01_1010107_T02.xfdl");
        };
        
        // User Script
        this.registerScript("EN01_1010107_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): EN01_1010107_M.xfdl(과목코드 관리)
        * 작 성         일 명: 성연우
        * 작 성         일 자: 2021/04/19
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
        this.lvchkColidDs   = "IPSI_YYYY$GWAMOK_CD$GWAMOK_NM$JUYOHAKSAENGBU_BANYEONG_YN";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs = "입시년도$과목코드$과목코드명$주요학생여부";
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
        };;

        /**********************************************************************
                05. 조회 함수 선언(마스터 함수)
        ***********************************************************************/
        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_Ret = function()
        {
        	//과목코드 업로드
        	if(this.Tab.tabindex==0){
        		this.Tab.TabPage1.form.fn_Ret();
        	}

        	//매핑과목코드 관리
        	if(this.Tab.tabindex==1){
        		this.Tab.TabPage2.form.fn_Ret();
        	}
        };

        /**********************************************************************
                06. 추가 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_New = function()
        {
        	//과목코드 업로드
        	if(this.Tab.tabindex==0){
        		this.Tab.TabPage1.form.fn_New();
        	}

        	//매핑과목코드 관리
        	if(this.Tab.tabindex==1){
        		this.Tab.TabPage2.form.fn_New();
        	}
        };

        /**********************************************************************
                07. 삭제 함수 선언
        ***********************************************************************/
        /**
         * 기능 : Row 삭제 또는 Transaction 삭제 처리
         */
        this.fn_Del = function()
        {
         	//과목코드 업로드
        	if(this.Tab.tabindex==0){
        		this.Tab.TabPage1.form.fn_Del();
        	}

        	//매핑과목코드 관리
        	if(this.Tab.tabindex==1){
        		this.Tab.TabPage2.form.fn_Del();
        	}
        };

        /**********************************************************************
                08. 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 실행
         */
        this.fn_Save = function()
        {
        	//과목코드 업로드
        	if(this.Tab.tabindex==0){
        		this.Tab.TabPage1.form.fn_Save();
        	}

        	//매핑과목코드 관리
        	if(this.Tab.tabindex==1){
        		this.Tab.TabPage2.form.fn_Save();
        	}
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
        };
        this.loadIncludeScript("EN01_1010107_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
