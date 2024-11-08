(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HideShowFrame");
            this.set_titletext("LEFT메뉴접기펼치기");
            this.set_scrolltype("none");
            this.set_scrollbartype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(16,990);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static01","0","0","15",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#c1e9ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static00",null,"0","1",null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#b5b6ba");
            this.addChild(obj.name, obj);

            obj = new Button("btnHideShow","0","0","15","61",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cursor("pointer");
            obj.set_text("◀");
            obj.set_background("#c1e9ff");
            obj.set_color("#598abe");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",16,990,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("HideShowFrame.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명) : HideShowFrame.xfdl(LEFT MENU 접기 펼치기)
        * 작 성         일 명 : jiback
        * 작 성         일 자 : 2018/08/25
        * 변 경         일 자 :
        * 변 경         자 명 :
        * 변경 및 수정 로 그 : 일자별로 변경자 및 변경사항을 간략히 기술
        ************************************************************************/
        /**********************************************************************
        	01. 전처리 공통 함수 선언
        ***********************************************************************/
        /**********************************************************************
        	02. 폼 변수 정의
        ***********************************************************************/
        /**********************************************************************
        	03. 폼 로드 및 언로드 선언
        ***********************************************************************/
        /**
         * 기능 : 폼 로드 완료후 초기값 Setting
         */
        this.HideShowFrame_onload = function(obj,e)
        {
        	this.fn_setFormOnSize(e.cx, e.cy); // 폼로드시 버튼 중앙정렬
        	this.btnHideShow.toggle = "HIDE";  // 사용자 정의 변수(toggle)에 HIDE저장(컴포넌트에 스크립트로 사용자 정의 변수선언)
        	this.btnHideShow.set_text("◀");   // 초기에 보여주는 접기 표시
        };
        /**
         * 기능 : 폼 언로드(닫기전 셋팅)  Setting
         */
        this.HideShowFrame_onclose = function(obj,e)
        {

        };
        /**********************************************************************
        	04. 공통 코드 및 마스터 코드 선언
        ***********************************************************************/
        /**********************************************************************
        	05. 콜백 함수 선언
        ***********************************************************************/
        /**********************************************************************
        	06. 조회 함수 선언
        ***********************************************************************/
        /**********************************************************************
        	07. 추가 함수 선언
        ***********************************************************************/
        /**********************************************************************
        	08. 삭제 함수 선언
        ***********************************************************************/
        /**********************************************************************
        	09. 저장 함수 선언
        ***********************************************************************/
        /**********************************************************************
        	10. 출력 함수 선언
        ***********************************************************************/
        /**********************************************************************
        	11. ExcelDnwn 엑셀로 출력
        ***********************************************************************/
        /**********************************************************************
        	12. ExcelUpLoad 엑셀업로드
        ***********************************************************************/
        /**********************************************************************
        	13. Get, Set Method
        ***********************************************************************/
        /*
         * 폼에 접기펼치기 버튼을 가운데에 정열한다(리사이즈시도 자동정렬)
         */
        this.fn_setFormOnSize = function(nWidth, nHeight)
        {
           	var nLeft	= (objApp.gv_appHideShowFrame.width / 2) - Math.round((this.btnHideShow.getOffsetWidth()) / 2);
          	var nTop    = (objApp.gv_appHideShowFrame.height / 2) - Math.round((this.btnHideShow.getOffsetHeight()) / 2);

        	if(nLeft <= 0)
        	{
        		this.btnHideShow.setOffsetLeft(0);

        	}else
        	{
        		this.btnHideShow.setOffsetLeft(nLeft);
        	}

        	if(nTop <= 0)
        	{
        		this.btnHideShow.setOffsetTop(0);

        	}else
        	{
        		this.btnHideShow.setOffsetTop(nTop);
        	}
        };
        /*
         * 버튼으로 클릭시 자동으로 토글기능처리(TOP메뉴시에도 호출을 함)
         */
        this.fn_setClickToggle = function()
        {
        	if(this.btnHideShow.toggle == "HIDE")
        	{
        		objApp.gv_appHFrameSet.set_separatesize("0,15,*");
        		this.btnHideShow.set_text("▶");
        		this.btnHideShow.toggle = "SHOW";
        	}else
        	{
        		objApp.gv_appHFrameSet.set_separatesize("225,15,*");
        		this.btnHideShow.set_text("◀");
        		this.btnHideShow.toggle = "HIDE";
        	}
        };

        /**********************************************************************
        	14. 기타 Control Event
        ***********************************************************************/
        /*
         *	토클버튼 클릭시 이벤트처리
         */
        this.btnHideShow_onclick = function(obj,e)
        {
        	this.fn_setClickToggle();

        };
        /*
         * 리사이즈시 자동으로 버튼을 가운데에 정렬
         */
        this.HideShowFrame_onsize = function(obj,e)
        {
        	this.fn_setFormOnSize(e.cx, e.cy);
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.HideShowFrame_onload,this);
            this.addEventHandler("onsize",this.HideShowFrame_onsize,this);
            this.addEventHandler("onclose",this.HideShowFrame_onclose,this);
            this.btnHideShow.addEventHandler("onclick",this.btnHideShow_onclick,this);
        };
        this.loadIncludeScript("HideShowFrame.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
