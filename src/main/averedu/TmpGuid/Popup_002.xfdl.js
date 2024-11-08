(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Popup_002");
            this.set_titletext("회원가입01_약관");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grd", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/></Row><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","20","105",null,null,"20","70",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_05","20","25","220","22",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("회원가입");
            obj.set_cssclass("sta_WF_Title01");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09","20","128","140","22",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("이용약관");
            obj.set_cssclass("sta_WF_SearchLbl_P");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,null,"60","30","82","20",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("다음");
            obj.set_cssclass("btn_WF_Pop");
            this.addChild(obj.name, obj);

            obj = new Button("Button01",null,null,"60","30","20","20",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_Pop");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0",null,null,"20","0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","0","20","20",null,null,"20",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static05",null,"20","20",null,"0","20",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","290","20",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("30");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("stc_07","369","302","170","22",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("개인정보 수집 및 활용 동의");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("stc_00","20","448","140","22",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("자동가입방지");
            obj.set_cssclass("sta_WF_SearchLbl_P");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","170","445","389","28",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","170","125",null,"169","41",null,null,null,null,null,this);
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","546","302","20","22",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","170","335","389","100",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("ImageViewer00");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","20","50","280","40",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("1. 약관동의");
            obj.set_cssclass("sta_Login_Step_S");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","300","50","280","40",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("2. 정보입력/가입");
            obj.set_cssclass("sta_Login_Step_N");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","0",null,null,"20","0","50",null,null,null,null,this);
            obj.set_taborder("18");
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
            obj = new Layout("default","",600,570,this,function(p){});
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
        this.loadIncludeScript("Popup_002.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
