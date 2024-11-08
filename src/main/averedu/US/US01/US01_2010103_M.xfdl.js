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
            this.set_titletext("사진일괄처리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("DivBg","0","0","780",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("type01");
            obj.set_background("#e3ebff");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divFileUpload","10","40",null,"42","10",null,null,null,null,null,this.DivBg.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.DivBg.addChild(obj.name, obj);

            obj = new Static("stc_01","7","9","98","22",null,null,null,null,null,null,this.DivBg.form.divFileUpload.form);
            obj.set_taborder("2");
            obj.set_text("파일찾기");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.DivBg.form.divFileUpload.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload","85","8","525","25",null,null,null,null,null,null,this.DivBg.form.divFileUpload.form);
            obj.set_taborder("0");
            obj.set_uploadurl("/univ_cm/picUpload?upload_path=pic");
            this.DivBg.form.divFileUpload.addChild(obj.name, obj);

            obj = new Button("btnUpload",null,"7","79","25","27",null,null,null,null,null,this.DivBg.form.divFileUpload.form);
            obj.set_taborder("1");
            obj.set_text("파일업로드");
            obj.set_cssclass("btn_WF_Crud");
            this.DivBg.form.divFileUpload.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","10","41","27","40",null,null,null,null,null,null,this.DivBg.form);
            obj.set_taborder("2");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.DivBg.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00","86","41","10","40",null,null,null,null,null,null,this.DivBg.form);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.DivBg.addChild(obj.name, obj);

            obj = new Static("Static01_01_01","30","41","720","9",null,null,null,null,null,null,this.DivBg.form);
            obj.set_taborder("4");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.DivBg.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","30","72","720","9",null,null,null,null,null,null,this.DivBg.form);
            obj.set_taborder("5");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.DivBg.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_01","742","41","27","40",null,null,null,null,null,null,this.DivBg.form);
            obj.set_taborder("6");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.DivBg.addChild(obj.name, obj);

            obj = new Static("stc_09_00","10","15","155","22",null,null,null,null,null,null,this.DivBg.form);
            obj.set_taborder("7");
            obj.set_text("사진일괄등록");
            obj.set_cssclass("sta_WF_Title02");
            this.DivBg.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","330","82","100","35",null,null,null,null,null,null,this.DivBg.form);
            obj.set_taborder("8");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.DivBg.addChild(obj.name, obj);

            obj = new Div("DivContent","10","117",null,null,"10","492",null,null,null,null,this.DivBg.form);
            obj.set_taborder("1");
            obj.set_background("white");
            obj.set_border("1px solid #4c4b66");
            obj.set_text("");
            this.DivBg.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","319","0","100","35",null,null,null,null,null,null,this.DivBg.form.DivContent.form);
            obj.set_taborder("4");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.DivBg.form.DivContent.addChild(obj.name, obj);

            obj = new Static("stc_63","6","40","728","20",null,null,null,null,null,null,this.DivBg.form.DivContent.form);
            obj.set_taborder("0");
            obj.set_text("** 각 사진 파일명은 학번.jpg입니다. 학번이 다르면 사진 입력이 되지 않습니다.");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.DivBg.form.DivContent.addChild(obj.name, obj);

            obj = new Static("stc_63_00","6","70","728","20",null,null,null,null,null,null,this.DivBg.form.DivContent.form);
            obj.set_taborder("1");
            obj.set_text("** 일괄등록할 사진들을 ZIP파일로 압축하세요. (ex. 학생사진.zip)");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.DivBg.form.DivContent.addChild(obj.name, obj);

            obj = new Static("stc_63_00_00","6","100","728","20",null,null,null,null,null,null,this.DivBg.form.DivContent.form);
            obj.set_taborder("2");
            obj.set_text("** 압축파일을 선택한 후 파일업로드 버튼을 클릭합니다.");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.DivBg.form.DivContent.addChild(obj.name, obj);

            obj = new Static("stc_63_00_00_00","6","130","728","20",null,null,null,null,null,null,this.DivBg.form.DivContent.form);
            obj.set_taborder("3");
            obj.set_text("** 개별적인 사진 등록 및 수정은 통합학적부조회에서 처리하세요.");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.DivBg.form.DivContent.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00","319","154","100","35",null,null,null,null,null,null,this.DivBg.form.DivContent.form);
            obj.set_taborder("5");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.DivBg.form.DivContent.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","10","32","290","8",null,null,null,null,null,null,this.DivBg.form);
            obj.set_taborder("9");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.DivBg.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("사진일괄처리");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item23","edt1_01_00_01_01_00","value","dsMaster","DANCHE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","edt1_01_00_01_01_00_00","value","dsMaster","DANCHE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","rdo_00_00","value","dsMaster","HYEONJAE_MOJIP_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","rdo_00_00_01","value","dsMaster","HYEONJAE_MOJIP_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("US01_2010103_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): US01_2010103_M.xfdl(사진일괄처리)
        * 작 성         일 명: jiback
        * 작 성         일 자: 2021/09/09
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
                case "tmp1" :        // 팁
                         this.fn_Tip();
                    break;
                default :
                    break;
            };
        };
        /**********************************************************************
                04. 파일업로드
        ***********************************************************************/
        this.DivBg_divSearch_btnUpload_onclick = function(obj,e)
        {
        	if(this.DivBg.form.divFileUpload.form.FileUpload.getItemCount(true) == 0)
        	{
        		this.alert("선택된 파일이 없습니다.");
        		return false;
        	}

        	if(this.confirm("선택한 파일을 업로드합니다."))
        	{
        		this.DivBg.form.divFileUpload.form.FileUpload.upload();
        	}
        };

        this.DivBg_divFileUpload_FileUpload_onsuccess = function(obj,e)
        {
        	this.alert("사진 일괄업로드가 완료되었습니다.");
        };

        /**********************************************************************
                06. 팁
        ***********************************************************************/
        this.fn_Tip = function()
        {
        	this.alert("도움말 준비중입니다.");
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.DivBg.form.divFileUpload.form.FileUpload.addEventHandler("onsuccess",this.DivBg_divFileUpload_FileUpload_onsuccess,this);
            this.DivBg.form.divFileUpload.form.btnUpload.addEventHandler("onclick",this.DivBg_divSearch_btnUpload_onclick,this);
        };
        this.loadIncludeScript("US01_2010103_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
