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
            this.set_titletext("버튼으로 TAB구현(DIV)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btn_prev","0","0","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabstop("false");
            obj.set_cssclass("btn_WF_tabPrev");
            this.addChild(obj.name, obj);

            obj = new Div("div_tab","34","0",null,"35","35",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_defaultTab");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("tabpage00","0","0","140","34",null,null,null,null,null,null,this.div_tab.form);
            obj.set_taborder("0");
            obj.set_text("사용자별 메뉴 현황");
            obj.set_cssclass("btn_WF_defaultTabActive");
            obj.set_visible("false");
            this.div_tab.addChild(obj.name, obj);

            obj = new Button("tabpage01","140","0","110","34",null,null,null,null,null,null,this.div_tab.form);
            obj.set_taborder("1");
            obj.set_text("사용자 현황");
            obj.set_visible("false");
            obj.set_cssclass("btn_WF_defaultTab");
            this.div_tab.addChild(obj.name, obj);

            obj = new Button("tabpage02","250","0","80","34",null,null,null,null,null,null,this.div_tab.form);
            obj.set_taborder("2");
            obj.set_text("메뉴 현황");
            obj.set_cssclass("btn_WF_defaultTab");
            obj.set_visible("false");
            this.div_tab.addChild(obj.name, obj);

            obj = new Button("tabpage03","330","0","60","34",null,null,null,null,null,null,this.div_tab.form);
            obj.set_taborder("3");
            obj.set_text("현황");
            obj.set_cssclass("btn_WF_defaultTab");
            obj.set_visible("false");
            this.div_tab.addChild(obj.name, obj);

            obj = new Button("tabpage04","390","0","130","34",null,null,null,null,null,null,this.div_tab.form);
            obj.set_taborder("4");
            obj.set_text("용자별 메뉴 현황");
            obj.set_cssclass("btn_WF_defaultTab");
            obj.set_visible("false");
            this.div_tab.addChild(obj.name, obj);

            obj = new Button("tabpage05","520","0","130","34",null,null,null,null,null,null,this.div_tab.form);
            obj.set_taborder("5");
            obj.set_text("용자별 메뉴 현황");
            obj.set_cssclass("btn_WF_defaultTab");
            obj.set_visible("false");
            this.div_tab.addChild(obj.name, obj);

            obj = new Button("btn_next","div_tab:0","0","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabstop("false");
            obj.set_cssclass("btn_WF_tabNext");
            this.addChild(obj.name, obj);

            obj = new Div("div_tabpage00","0","64",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Div("div_tabpage01","0","64",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Div("div_tabpage02","0","64",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Div("div_tabpage03","0","64",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Div("div_tabpage04","0","64",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Div("div_tabpage05","0","64",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","34",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("9");
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
        this.registerScript("SML032ButtonTabTypeSampleM01.xfdl", function() {
        /************************************************************************************************
         *
         * 테스트는 gds_menuTabAuth에 데이터를 추가하세요. MAIN_TAB_YN
         *
        ************************************************************************************************/

        this.preTabpage = ""; // 이전 탭페이지 저장용


         /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	//this.gfn_formOnload();
        	this.gfn_setAuthTabpage(this.div_tab);
        };

        this.fn_afterFormOnload = function(obj, e)
        {
        //	this.gfn_setAuthTabpage(this.div_tab);
        }

        this.fn_tabpageOnChange = function(obj,e)
        {
        	/*
        	//저장할 데이터 유무 체크 할 경우
        	if(this.gfn_dsIsUpdated(this.dsxx))
        	{
        		this.gfn_confirm();	 //confirm콜백함수에 아래로직 추가
        	}
        	*/

        	//cssclass, div 초기화
        	for(var i=0; i<this.div_tab.form.components.length; i++)
        	{
        		var objBtn = this.div_tab.form.components[i];

        		if(objBtn.cssclass.indexOf("Key") == -1)
        		{          //일반탭
        			objBtn.set_cssclass("btn_WF_defaultTab");
        		} else
        		{                                             //주요탭
        			objBtn.set_cssclass("btn_WF_defaultKeyTab");
        		}

        		this.components["div_"+objBtn.name].set_visible(false);
        	}

        	//활성화된 탭 표현
        	obj.set_cssclass(obj.cssclass+"Active");

        	//처음탭할때만 화면호출
        	if(this.gfn_isNull(this.components["div_"+obj.name].url))
        	{
        		switch(obj.name) {
        			case "tabpage00":
        				this.components["div_"+obj.name].set_url("sml::STBJ300_T1.xfdl");
        				break;
        			case "tabpage01":
        				this.components["div_"+obj.name].set_url("sml::STBJ300_T2.xfdl");
        				break;
        			case "tabpage02":
        				this.components["div_"+obj.name].set_url("sml::STBJ300_T3.xfdl");
        				break;
        			case "tabpage03":
        				this.components["div_"+obj.name].set_url("sml::STBJ300_T1.xfdl");
        				break;
        			case "tabpage04":
        				this.components["div_"+obj.name].set_url("sml::STBJ300_T2.xfdl");
        				break;
        			case "tabpage05":
        				this.components["div_"+obj.name].set_url("sml::STBJ300_T3.xfdl");
        				break;
        			default:
        				break;
        		}
        	}

        	this.components["div_"+obj.name].set_visible(true);
        	this.preTabpage = obj.name;
        };


        ////////////////////////////////////////////////// 탭스크롤(좌우버튼) 관련 함수 ///////////////////////////////////////////////////////////////////////////////////

        this.btn_prev_onclick = function(obj,e)
        {
        	this.gfn_prevTabOnClick(this.div_tab, this.btn_prev, this.btn_next);
        };

        this.btn_next_onclick = function(obj,e)
        {
        	this.gfn_nextTabOnClick(this.div_tab, this.btn_prev, this.btn_next);
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
            this.btn_prev.addEventHandler("onclick",this.btn_prev_onclick,this);
            this.div_tab.form.tabpage00.addEventHandler("onclick",this.fn_tabpageOnChange,this);
            this.div_tab.form.tabpage01.addEventHandler("onclick",this.fn_tabpageOnChange,this);
            this.div_tab.form.tabpage02.addEventHandler("onclick",this.fn_tabpageOnChange,this);
            this.div_tab.form.tabpage03.addEventHandler("onclick",this.fn_tabpageOnChange,this);
            this.div_tab.form.tabpage04.addEventHandler("onclick",this.fn_tabpageOnChange,this);
            this.div_tab.form.tabpage05.addEventHandler("onclick",this.fn_tabpageOnChange,this);
            this.btn_next.addEventHandler("onclick",this.btn_next_onclick,this);
        };
        this.loadIncludeScript("SML032ButtonTabTypeSampleM01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
