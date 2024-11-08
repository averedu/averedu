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
            this.set_titletext("검정고시성적관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Tab("Tab",null,"0","1640",null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("TabPage1",this.Tab);
            obj.set_text("지원자파일생성");
            obj.set_url("EN03::EN03_1010303_T01.xfdl");
            this.Tab.addChild(obj.name, obj);

            obj = new Tabpage("TabPage2",this.Tab);
            obj.set_text("검정고시파일이관");
            obj.set_url("EN03::EN03_1010303_T02.xfdl");
            this.Tab.addChild(obj.name, obj);

            obj = new Tabpage("TabPage3",this.Tab);
            obj.set_text("검정고시성적이관");
            obj.set_url("EN03::EN03_1010303_T03.xfdl");
            this.Tab.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("검정고시성적관리");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","EN03::EN03_1010303_T01.xfdl");
            this._addPreloadList("fdl","EN03::EN03_1010303_T02.xfdl");
            this._addPreloadList("fdl","EN03::EN03_1010303_T03.xfdl");
        };
        
        // User Script
        this.registerScript("EN03_1010303_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): EN03_1010303_M.xfdl(검정고시성적관리)
        * 작 성         일 명: 성연우
        * 작 성         일 자: 2021/04/21
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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
        };
        this.loadIncludeScript("EN03_1010303_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
