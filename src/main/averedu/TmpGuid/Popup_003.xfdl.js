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
            this.set_titletext("회원가입02_정보입력");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,745);
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
            obj.set_text("사용자 ID");
            obj.set_cssclass("sta_WF_SearchLbl_P");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,null,"60","30","82","20",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("가입");
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

            obj = new Edit("Edit01","170","125",null,"28","88",null,null,null,null,null,this);
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","20","50","280","40",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("1. 약관동의");
            obj.set_cssclass("sta_Login_Step_N");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","300","50","280","40",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("2. 정보입력/가입");
            obj.set_cssclass("sta_Login_Step_S");
            this.addChild(obj.name, obj);

            obj = new Button("Button04",null,"127","46","24","40",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("중복");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","170","192",null,"28","40",null,null,null,null,null,this);
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Static("stc_00","20","195","140","22",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("비밀번호");
            obj.set_cssclass("sta_WF_SearchLbl_P");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("stc_03","170","153","390","22",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("5~16자의 영문, 숫자만 사용 할 수 있습니다.(공사직원은 사번입력)");
            obj.set_cssclass("sta_WF_Desc04");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01","170","220","390","22",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("9~16자의 영문, 숫자 및 특수문자가 반드시 포함되어야 합니다.");
            obj.set_cssclass("sta_WF_Desc04");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("stc_06","170","287","390","22",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("비밀번호를 한번 더 입력하세요.");
            obj.set_cssclass("sta_WF_Desc04");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02","170","259",null,"28","40",null,null,null,null,null,this);
            obj.set_taborder("19");
            this.addChild(obj.name, obj);

            obj = new Static("stc_02","20","262","140","22",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("비밀번호확인");
            obj.set_cssclass("sta_WF_SearchLbl_P");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("stc_04","20","328","140","22",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("사용자명");
            obj.set_cssclass("sta_WF_SearchLbl_P");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03","170","325",null,"28","40",null,null,null,null,null,this);
            obj.set_taborder("22");
            this.addChild(obj.name, obj);

            obj = new Static("stc_07","20","366","140","22",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("공항");
            obj.set_cssclass("sta_WF_SearchLbl_P");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit04","170","363",null,"28","88",null,null,null,null,null,this);
            obj.set_taborder("24");
            this.addChild(obj.name, obj);

            obj = new Button("Button02",null,"365","46","24","40",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("선택");
            this.addChild(obj.name, obj);

            obj = new Static("stc_08","20","404","140","22",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("소속");
            obj.set_cssclass("sta_WF_SearchLbl_P");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit06","170","434",null,"28","88",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button03",null,"436","46","24","40",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("선택");
            this.addChild(obj.name, obj);

            obj = new Static("stc_10","20","475","140","22",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("사원번호");
            obj.set_cssclass("sta_WF_SearchLbl_P");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit07","170","472",null,"28","40",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_11","20","513","140","22",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_SearchLbl_P");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit08","170","510",null,"28","40",null,null,null,null,null,this);
            obj.set_taborder("32");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12","20","551","140","22",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("핸드폰번호");
            obj.set_cssclass("sta_WF_SearchLbl_P");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit09","170","548",null,"28","40",null,null,null,null,null,this);
            obj.set_taborder("34");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13","20","589","140","22",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("사무실번호");
            obj.set_cssclass("sta_WF_SearchLbl_P");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit10","170","586",null,"28","40",null,null,null,null,null,this);
            obj.set_taborder("36");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14","20","627","140","22",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("이메일주소");
            obj.set_cssclass("sta_WF_SearchLbl_P");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit11","170","624",null,"28","40",null,null,null,null,null,this);
            obj.set_taborder("38");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","170","401","390","28",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","0",null,null,"20","0","50",null,null,null,null,this);
            obj.set_taborder("40");
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
            obj = new Layout("default","",600,745,this,function(p){});
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
        this.loadIncludeScript("Popup_003.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
