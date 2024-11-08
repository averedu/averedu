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
            this.set_titletext("고교코드관리");
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
            obj.set_text("고교코드 업로드");
            obj.set_url("EN01::EN01_1010106_T01.xfdl");
            this.Tab.addChild(obj.name, obj);

            obj = new Tabpage("TabPage2",this.Tab);
            obj.set_text("매핑고교코드 관리");
            obj.set_url("EN01::EN01_1010106_T02.xfdl");
            this.Tab.addChild(obj.name, obj);

            obj = new Tabpage("TabPage3",this.Tab);
            obj.set_text("온라인 대상교 관리");
            obj.set_url("EN01::EN01_1010106_T03.xfdl");
            this.Tab.addChild(obj.name, obj);

            obj = new Tabpage("TabPage4",this.Tab);
            obj.set_text("관심고교관리(교수)");
            obj.set_url("EN01::EN01_1010106_T04.xfdl");
            this.Tab.addChild(obj.name, obj);

            obj = new Tabpage("TabPage5",this.Tab);
            obj.set_text("관심고교관리(고교)");
            obj.set_url("EN01::EN01_1010106_T05.xfdl");
            this.Tab.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("고교코드관리");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item55","Tab.TabPage3.form.chk1Haknyeon00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","Tab.TabPage3.form.chk1Haknyeon00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","Tab.TabPage3.form.chk1Haknyeon00_00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","Tab.TabPage3.form.chk1Haknyeon00_00_00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","Tab.TabPage3.form.chk1Haknyeon00_00_00_00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","Tab.TabPage3.form.chk1Haknyeon00_00_00_00_00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","Tab.TabPage3.form.chk1Haknyeon00_00_00_00_00_00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item62","Tab.TabPage3.form.chk1Haknyeon01","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item64","Tab.TabPage3.form.chk2Haknyeon00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item65","Tab.TabPage3.form.chk2Haknyeon00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item66","Tab.TabPage3.form.chk2Haknyeon00_00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item67","Tab.TabPage3.form.chk2Haknyeon00_00_00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item68","Tab.TabPage3.form.chk2Haknyeon00_00_00_00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item69","Tab.TabPage3.form.chk2Haknyeon00_00_00_00_00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item70","Tab.TabPage3.form.chk2Haknyeon01","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item71","Tab.TabPage3.form.chk2Haknyeon00_01","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item72","Tab.TabPage3.form.chk2Haknyeon00_00_01","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item73","Tab.TabPage3.form.chk2Haknyeon00_00_00_01","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item74","Tab.TabPage3.form.chk2Haknyeon00_00_00_00_01","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item75","Tab.TabPage3.form.chk2Haknyeon00_00_00_00_00_01","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item76","Tab.TabPage3.form.chk2Haknyeon00_00_00_00_00_00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item77","Tab.TabPage3.form.chk2Haknyeon02","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item78","Tab.TabPage3.form.chk2Haknyeon00_02","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item79","Tab.TabPage3.form.chk2Haknyeon00_00_02","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item80","Tab.TabPage3.form.chk2Haknyeon00_00_00_00_02","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item88","Tab.TabPage3.form.edtSearchBigyogwaProgramNm00","value","ds_input","BIGYOGWA_PROGRAM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item89","Tab.TabPage3.form.edtSearchBigyogwaProgramNm01","value","ds_input","BIGYOGWA_PROGRAM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","Tab.TabPage4.form.chk1Haknyeon00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","Tab.TabPage4.form.chk1Haknyeon00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","Tab.TabPage4.form.chk1Haknyeon00_00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","Tab.TabPage4.form.chk1Haknyeon00_00_00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","Tab.TabPage4.form.chk1Haknyeon00_00_00_00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","Tab.TabPage4.form.chk1Haknyeon00_00_00_00_00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","Tab.TabPage4.form.chk1Haknyeon00_00_00_00_00_00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","Tab.TabPage4.form.chk1Haknyeon01","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","Tab.TabPage4.form.chk2Haknyeon00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","Tab.TabPage4.form.chk2Haknyeon00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","Tab.TabPage4.form.chk2Haknyeon00_00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","Tab.TabPage4.form.chk2Haknyeon00_00_00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","Tab.TabPage4.form.chk2Haknyeon00_00_00_00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","Tab.TabPage4.form.chk2Haknyeon00_00_00_00_00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","Tab.TabPage4.form.chk2Haknyeon01","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","Tab.TabPage4.form.chk2Haknyeon00_01","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","Tab.TabPage4.form.chk2Haknyeon00_00_01","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","Tab.TabPage4.form.chk2Haknyeon00_00_00_01","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","Tab.TabPage4.form.chk2Haknyeon00_00_00_00_01","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","Tab.TabPage4.form.chk2Haknyeon00_00_00_00_00_01","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","Tab.TabPage4.form.chk2Haknyeon00_00_00_00_00_00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","Tab.TabPage4.form.chk2Haknyeon02","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","Tab.TabPage4.form.chk2Haknyeon00_02","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","Tab.TabPage4.form.chk2Haknyeon00_00_02","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","Tab.TabPage4.form.chk2Haknyeon00_00_00_00_02","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item87","Tab.TabPage4.form.edtSearchBigyogwaProgramNm00","value","ds_input","BIGYOGWA_PROGRAM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item90","Tab.TabPage4.form.edtSearchBigyogwaProgramNm01","value","ds_input","BIGYOGWA_PROGRAM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","Tab","enable","dsBindableTab","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","EN01::EN01_1010106_T01.xfdl");
            this._addPreloadList("fdl","EN01::EN01_1010106_T02.xfdl");
            this._addPreloadList("fdl","EN01::EN01_1010106_T03.xfdl");
            this._addPreloadList("fdl","EN01::EN01_1010106_T04.xfdl");
            this._addPreloadList("fdl","EN01::EN01_1010106_T05.xfdl");
        };
        
        // User Script
        this.registerScript("EN01_1010106_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): EN01_1010106_M.xfdl(고교코드관리)
        * 작 성         일 명: 성연우
        * 작 성         일 자: 2021/04/13
        * 변 경         일 자:
        * 변 경         자 명:
        * 변경 및 수정 로그 :
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
        	//고교코드 업로드
        	if(this.Tab.tabindex==0){
        		this.Tab.TabPage1.form.fn_Ret();
        	}
        	//매핑고교코드 관리
        	if(this.Tab.tabindex==1){
        		this.Tab.TabPage2.form.fn_Ret();
        	}
        	//온라인대상교 관리
        	if(this.Tab.tabindex==2){
        		this.Tab.TabPage3.form.fn_Ret();
        	}
        	//관심고교관리(교수)
        	if(this.Tab.tabindex==3){
        		this.Tab.TabPage4.form.fn_Ret();
        	}
        	//관심고교관리(고교)
        	if(this.Tab.tabindex==4){
        		this.Tab.TabPage5.form.fn_Ret();
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
        	//고교코드 업로드
        	if(this.Tab.tabindex==0){
        		this.Tab.TabPage1.form.fn_New();
        	}
        	//매핑고교코드 관리
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
        	//고교코드 업로드
        	if(this.Tab.tabindex==0){
        		this.Tab.TabPage1.form.fn_Del();
        	}
        	//매핑고교코드 관리
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
        	//고교코드 업로드
        	if(this.Tab.tabindex==0){
        		this.Tab.TabPage1.form.fn_Save();
        	}
        	//매핑고교코드 관리
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
           else if(this.gfn_isUpdate(this.Tab.TabPage4.form.dsMaster))
           {
              value = true;
           }
           else if(this.gfn_isUpdate(this.Tab.TabPage4.form.dsDetail))
           {
              value = true;
           }
           else if(this.gfn_isUpdate(this.Tab.TabPage5.form.dsMaster))
           {
              value = true;
           }
           else if(this.gfn_isUpdate(this.Tab.TabPage5.form.dsDetail))
           {
              value = true;
           }

           return value;
        };

        // 고교코드 업로드, 매핑고교코드관리 페이지가 아니면 공통버튼(신규, 저장, 삭제) 비활성화
        this.Tab_onchanged = function(obj,e)
        {
        	if(this.Tab.tabindex == 0 || this.Tab.tabindex == 1)
        	{
        		this.parent.parent.div_Title.form.fn_newEnable(true);
        		this.parent.parent.div_Title.form.fn_saveEnable(true);
        		this.parent.parent.div_Title.form.fn_delEnable(true);
        	}
        	else
        	{
        		this.parent.parent.div_Title.form.fn_newEnable(false);
        		this.parent.parent.div_Title.form.fn_saveEnable(false);
        		this.parent.parent.div_Title.form.fn_delEnable(false);
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
        this.loadIncludeScript("EN01_1010106_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
