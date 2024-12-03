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
            this.set_titletext("WEBBROWSER(LINK/PDF)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btnTest01","880","70","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("PDF");
            this.addChild(obj.name, obj);

            obj = new Button("btnTest03","883","193","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("웹call");
            this.addChild(obj.name, obj);

            obj = new Button("btnTest02","883","130","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("신규화면링크");
            this.addChild(obj.name, obj);

            obj = new Button("btnTest04","879","10","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("초기화하면");
            this.addChild(obj.name, obj);

            obj = new Button("btnTest05","884","258","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("innerHTML");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("webSemple","20","10","850",null,null,"10",null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SML012WebBrowserLinkPdfListM01.xfdl", function() {
        this.form_onload = function(obj,e)
        {
        	this.fn_setInitLink("htmlContent.html");
        };

        this.fn_setInitLink = function (fvFile)
        {
        	var svcUrl = nexacro.getEnvironment().services["svcurl"].url;
        	var sPath  = "averedu/file/"

        	if(this.gfn_isNull(fvFile))
        	{
        		alert("호출한 파일이 없습니다.");
        		return false;
        	}

        	var sFile  = fvFile;
        	trace(svcUrl + sPath + sFile);
        	this.webSemple.set_url(svcUrl + sPath + sFile);
        };
        /*  Runtime/IE인 경우, adobe reader가 설치되어 있어야 함.  */
        this.btnTest01_onclick = function(obj,e)
        {
        	this.fn_setInitLink("빌드.pdf");
        };

        this.btnTest02_onclick = function(obj,e)
        {
        	system.execBrowser("https://www.naver.com/");
        };

        this.btnTest03_onclick = function(obj,e)
        {
        	if (nexacro._Browser == "Runtime") { // Runtime
                try {
                    this.webTest = this.webSemple.getProperty("Document").getProperty("parentWindow");
                } catch (e) {
                    this.webTest = this.webSemple;
                }
        	} else
        	{ 	//HTML5
        		this.webTest = this.webSemple.getProperty("window");
        	}
        	this.webTest.callMethod("fn_ToWeb", "넥사크로에서 넘어온 html화면을 펑션을 호출함");
        };



        this.webSemple_onloadcompleted = function(obj,e)
        {
        	 //PC런타임에선 발생안하니 기다리지마
            //trace("WebBrowser00_onloadcompleted " + obj);

        };

        this.webSemple_onusernotify = function(obj,e)
        {
        	 trace("WebBrowser00_onusernotify " + e.userdata);

        // 	if (!this.gfnIsNull(e.userdata))
        // 	{
        //         var arrRtn = e.userdata.split("|");
        //         if (arrRtn[0] == "nexaCall")
        //         {
        //             alert(arrRtn[1]);
        //         }
        // 	}
        };

        this.btnTest04_onclick = function(obj,e)
        {
        	this.fn_setInitLink("htmlContent.html");
        };

        this.btnTest05_onclick = function(obj,e)
        {
        	if (nexacro._Browser == "Runtime") { // Runtime
                try {
                    this.webTest = this.webSemple.getProperty("Document").getProperty("parentWindow");
                } catch (e) {
                    this.webTest = this.webSemple;
                }
        	} else { //HTML5
        		this.webTest = this.webSemple.getProperty("window");
        	}

        	var originalData = '<p class="titleMain">공지사항<span class="btn border4"><a href="https://www.naver.com/">더보기</a></span></p>';
        	this.webTest.callMethod("fn_setContent", originalData);
        };


        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
           // return (this.gfn_isUpdate(this.dsMaster) || this.gfn_isUpdate(this.dsDetail1) || this.gfn_isUpdate(this.dsDetail2));
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnTest01.addEventHandler("onclick",this.btnTest01_onclick,this);
            this.btnTest03.addEventHandler("onclick",this.btnTest03_onclick,this);
            this.btnTest02.addEventHandler("onclick",this.btnTest02_onclick,this);
            this.btnTest04.addEventHandler("onclick",this.btnTest04_onclick,this);
            this.btnTest05.addEventHandler("onclick",this.btnTest05_onclick,this);
        };
        this.loadIncludeScript("SML012WebBrowserLinkPdfListM01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
