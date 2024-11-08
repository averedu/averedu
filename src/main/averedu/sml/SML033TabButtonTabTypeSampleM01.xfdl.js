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
            this.set_titletext("탭을 버튼으로 Tab구현(Div)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_tabpage00","0","58",null,null,"20","0",null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Div("div_tabpage01","0","58",null,null,"20","0",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Div("div_tabpage02","0","58",null,null,"20","0",null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Div("div_tabpage03","0","58",null,null,"20","0",null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Div("div_tabpage04","0","58",null,null,"20","0",null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Div("div_tabpage05","0","58",null,null,"20","0",null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab03","0","0",null,"35","20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tabpage00",this.Tab03);
            obj.set_text("탭명1");
            this.Tab03.addChild(obj.name, obj);

            obj = new Tabpage("tabpage01",this.Tab03);
            obj.set_text("탭명2");
            this.Tab03.addChild(obj.name, obj);

            obj = new Tabpage("tabpage02",this.Tab03);
            obj.set_text("탭명3");
            this.Tab03.addChild(obj.name, obj);

            obj = new Tabpage("tabpage03",this.Tab03);
            obj.set_text("탭명4");
            this.Tab03.addChild(obj.name, obj);

            obj = new Tabpage("tabpage04",this.Tab03);
            obj.set_text("탭명5");
            this.Tab03.addChild(obj.name, obj);

            obj = new Static("Static00","0","34",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
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
        this.registerScript("SML033TabButtonTabTypeSampleM01.xfdl", function() {
        /************************************************************************************************
         *
         * 테스트는 gds_menuTabAuth에 데이터를 추가하세요. MAIN_TAB_YN
         *
         * 조건: 중요탭을 제외한 기본탭이면서 탭 갯수가 최대 5개까지인 경우에만 사용 가능
         *
        ************************************************************************************************/

         /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	//this.gfn_formOnload();
        	this.fn_afterFormOnload(obj,e);
        };

        this.fn_afterFormOnload = function(obj, e)
        {
        	this.gfn_setAuthTabpage(this.Tab03);

        }

        this.fn_afterTabInit = function (sTabpageId)
        {
        	this.components["div_"+sTabpageId].set_url("sml::STBJ300_T1.xfdl");
        	this.components["div_"+sTabpageId].set_visible(true);
        	this.components["div_"+sTabpageId].bringToFront();
        };
        this.Tab03_onchanged = function(obj,e)
        {

        	var sTabpageId    = this.Tab03.tabpages[e.postindex].name;
        	var sPreTabpageId = this.Tab03.tabpages[e.preindex].name;

        	//이전 div visible false
        	this.components["div_"+sPreTabpageId].set_visible(false);

        	//처음탭할때만 화면호출
        	if(this.gfn_isNull(this.components["div_"+sTabpageId].url))
        	{

        		var sUrl = "";
        		switch(sTabpageId)
        		{
        			case "tabpage00":
        				sUrl = "sml::STBJ300_T1.xfdl";
        				break;
        			case "tabpage01":
        				sUrl = "sml::STBJ300_T2.xfdl";
        				break;
        			case "tabpage02":
        				sUrl = "sml::STBJ300_T3.xfdl";
        				break;
        			case "tabpage03":
        				sUrl = "sml::STBJ300_T1.xfdl";
        				break;
        			case "tabpage04":
        				sUrl = "sml::STBJ300_T2.xfdl";
        				break;
        			default:
        				break;
        		}

        		this.components["div_"+sTabpageId].set_url(sUrl);

        	}

        	this.components["div_"+sTabpageId].set_visible(true);
        	this.components["div_"+sTabpageId].bringToFront();

        };

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
            //return this.gfn_isUpdate(this.dsDetail);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.Tab03.addEventHandler("onchanged",this.Tab03_onchanged,this);
        };
        this.loadIncludeScript("SML033TabButtonTabTypeSampleM01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
