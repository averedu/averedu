(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Popup_001");
            this.set_titletext("비밀번호변경");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,420);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grd", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/></Row><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_05","20","25","220","22",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("비밀번호변경");
            obj.set_cssclass("sta_WF_Title01");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,null,"60","30","82","20",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("변경");
            obj.set_cssclass("btn_WF_Pop");
            this.addChild(obj.name, obj);

            obj = new Button("Button01",null,null,"60","30","20","20",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_Pop");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0",null,null,"20","0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","0","20","20",null,null,"20",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static05",null,"20","20",null,"0","20",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static00",null,"20","300","30","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("30");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","20","50","560","299",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09","70","73","140","22",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("사용자 ID");
            obj.set_cssclass("sta_WF_SearLabel");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","210","70","222","28",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Static("stc_00","70","111","140","22",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("사용자명");
            obj.set_cssclass("sta_WF_SearLabel");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","210","108","222","28",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01","70","149","140","22",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("인증번호 입력");
            obj.set_cssclass("sta_WF_SearLabel");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02","210","146","222","28",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_02","70","187","140","22",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("비밀번호");
            obj.set_cssclass("sta_WF_SearLabel");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03","210","184","300","28",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_03","210","212","310","44",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("9~16자의 영문, 숫자 및 특수문자가 반드시 포함되어야 \r\n합니다.");
            obj.set_cssclass("sta_WF_Desc04");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","434","110","76","24",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("인증요청");
            this.addChild(obj.name, obj);

            obj = new Button("Button05","434","148","76","24",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("인증하기");
            this.addChild(obj.name, obj);

            obj = new Static("stc_04","70","266","140","22",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("비밀번호 확인");
            obj.set_cssclass("sta_WF_SearLabel");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit04","210","263","300","28",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_06","210","292","290","22",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("비밀번호를 한번 더 입력하세요.");
            obj.set_cssclass("sta_WF_Desc04");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","0",null,null,"20","0","50",null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",600,420,this,function(p){});
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
            this.stc_05.addEventHandler("onclick",this.stc_05_onclick,this);
        };
        this.loadIncludeScript("Popup_001.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
