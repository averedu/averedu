(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Top");
            this.set_titletext("TopFrame");
            if (Form == this.constructor)
            {
                this._setFormPosition(1916,71);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("menu_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"lev\" type=\"STRING\" size=\"256\"/><Column id=\"menu\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"menu\">메뉴01</Col><Col id=\"lev\">0</Col></Row><Row><Col id=\"menu\">메뉴두번째</Col><Col id=\"lev\">0</Col></Row><Row><Col id=\"menu\">세번째메뉴</Col><Col id=\"lev\">0</Col></Row><Row><Col id=\"menu\">메뉴4</Col><Col id=\"lev\">0</Col></Row><Row><Col id=\"menu\">메뉴다섯번째</Col><Col id=\"lev\">0</Col></Row><Row><Col id=\"menu\">메뉴6</Col><Col id=\"lev\">0</Col></Row><Row><Col id=\"menu\">메뉴일곱번째</Col><Col id=\"lev\">0</Col></Row><Row><Col id=\"menu\">메뉴8</Col><Col id=\"lev\">0</Col></Row><Row><Col id=\"menu\">메뉴9</Col><Col id=\"lev\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button04",null,"5","70","22","0",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_TF_Logout");
            obj.set_text("로그아웃");
            this.addChild(obj.name, obj);

            obj = new Static("Static07",null,"7","20","20","Button04:0",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("|");
            obj.set_cssclass("sta_TF_Hline");
            this.addChild(obj.name, obj);

            obj = new Static("Static09",null,"6","70","20","Static07:0",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("김항공 님");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_cssclass("sta_TF_Info");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static08",null,"6","20","20","Static09:0",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("|");
            obj.set_cssclass("sta_TF_Hline");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"5","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#005d90");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","260","5",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#00b1f1");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","0","220","5",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("#a99767");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","0","150","5",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("#8b1d04");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","1500","75","60","65",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_TF_MenuList");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","260","185","120","65",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Menu01");
            obj.set_cssclass("btn_TF_Menu");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","0","70",null,"1","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_background("#8d8e91");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","Button01:0","184","180","66",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("메뉴명길이에따라 늘어남");
            obj.set_cssclass("btn_TF_Menu");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","Button02:0","184","120","66",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("메뉴 선택");
            obj.set_cssclass("btn_TF_Menu_S");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","40","20","130","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_TF_Logo");
            this.addChild(obj.name, obj);

            obj = new Static("Static06",null,"7","216","20","Static08:0",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("2018.10.10 12:00 (172.25.118.001)");
            obj.set_cssclass("sta_TF_IpAdd");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","1440","141","200","210",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("div_WF_MenuBox");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","0",null,null,"0","30",null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.Div00.addChild(obj.name, obj);

            obj = new Menu("Menu00","270","30",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_innerdataset("menu_ds");
            obj.set_captioncolumn("menu");
            obj.set_levelcolumn("lev");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1916,71,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("Top.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
