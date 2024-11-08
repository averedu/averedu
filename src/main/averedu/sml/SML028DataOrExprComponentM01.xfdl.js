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
            this.set_titletext("GRID/MaskEdit컴포넌트별 기타 데이타 샘풀");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList02", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"Column1\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">10</Col><Col id=\"Column1\">20</Col><Col id=\"Column2\">a</Col></Row><Row><Col id=\"Column0\">10</Col><Col id=\"Column1\">10</Col><Col id=\"Column2\">b</Col></Row><Row><Col id=\"Column0\">20</Col><Col id=\"Column1\">30</Col><Col id=\"Column2\">a</Col></Row><Row><Col id=\"Column0\">30</Col><Col id=\"Column1\">30</Col><Col id=\"Column2\">b</Col></Row><Row><Col id=\"Column0\">30</Col><Col id=\"Column1\">40</Col><Col id=\"Column2\">a</Col></Row><Row><Col id=\"Column0\">40</Col><Col id=\"Column1\">20</Col><Col id=\"Column2\">b</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList01", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"COL_INT\" size=\"256\" type=\"INT\"/><Column id=\"COL_STR\" size=\"256\" type=\"STRING\"/><Column id=\"Column0\" type=\"FLOAT\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COL_INT\">10</Col><Col id=\"COL_STR\">100</Col><Col id=\"Column0\">100.1</Col><Col id=\"Column1\">100.1</Col></Row><Row><Col id=\"COL_INT\">20</Col><Col id=\"COL_STR\">200</Col><Col id=\"Column0\">100.1</Col><Col id=\"Column1\">100.1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList03", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"APPLY_YM\" type=\"STRING\" size=\"256\"/><Column id=\"CMMSN_RATE\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"APPLY_YM\">201902</Col><Col id=\"CMMSN_RATE\">100</Col></Row><Row><Col id=\"APPLY_YM\">201903</Col><Col id=\"CMMSN_RATE\">50</Col></Row><Row><Col id=\"APPLY_YM\">201904</Col><Col id=\"CMMSN_RATE\">40</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","530","65","450","201",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.getSetter("useinputpanel").set("false");
            obj.set_binddataset("dsList02");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"133\"/><Column size=\"172\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"getCaseSum\"/><Cell col=\"1\" text=\"getCaseAvg\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/></Band><Band id=\"summary\"><Cell expr=\"expr:dataset.getCaseSum(&apos;Column0&gt;15&apos;,&apos;Column0&apos;)\"/><Cell col=\"1\" expr=\"expr:dataset.getCaseAvg(&apos;Column1&gt;10&apos;,&apos;Column1&apos;)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdData","30","65","490","202",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsList01");
            obj.getSetter("position").set("absolute");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"209\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" text=\"INT Type\"/><Cell col=\"1\" displaytype=\"normal\" text=\"STRING Type\"/><Cell col=\"2\" text=\"Float Type\"/><Cell col=\"3\" text=\"STRING Type Conversion Float Type\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" text=\"bind:COL_INT\"/><Cell col=\"1\" displaytype=\"normal\" text=\"bind:COL_STR\"/><Cell col=\"2\" text=\"bind:Column0\"/><Cell col=\"3\" text=\"bind:Column1\"/></Band><Band id=\"summary\"><Cell text=\"expr:dataset.getSum(&quot;COL_INT&quot;)\"/><Cell col=\"1\" text=\"expr:dataset.getSum(&quot;parseFloat(COL_STR)&quot;)\"/><Cell col=\"2\" displaytype=\"normal\" text=\"expr:dataset.getSum(&quot;Column0&quot;)\"/><Cell col=\"3\" text=\"expr:dataset.getSum(&quot;parseFloat(Column1)&quot;)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","38","17","162","42",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("* getSum");
            obj.set_font("bold 24px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","527","17","325","42",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("* getCaseSum, getCaseAvg");
            obj.set_font("bold 24px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grdDetail","990","65",null,"126","10",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsList03");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"78\"/><Column size=\"381\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" text=\"No.\"/><Cell col=\"1\" disptype=\"normal\" text=\"적용일자\" cssclass=\"point\"/><Cell col=\"2\" disptype=\"normal\" text=\"수수료율\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" displaytype=\"mask\" edittype=\"expr:(dataset.getRowType(currow))==2 ? &apos;mask&apos;:&apos;none&apos;\" textAlign=\"center\" text=\"bind:APPLY_YM\" editmaxlength=\"6\" maskeditformat=\"####-##\" maskedittype=\"string\" maskeditmaskchar=\" \" maskeditautoselect=\"true\" maskeditclipmode=\"includespace\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"mask\" textAlign=\"right\" text=\"bind:CMMSN_RATE\" editmaxlength=\"5\" maskeditlimitbymask=\"both\" maskedittype=\"number\" maskeditclipmode=\"includespace\" maskeditformat=\"#0.###\" maskeditmaskchar=\" \" maskeditautoselect=\"true\" expr=\"CMMSN_RATE==null?&apos;&apos;:CMMSN_RATE+&apos;%&apos;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","987","17",null,"42","48",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("* Grid 수수료율(%율 표시)  그외 컴포넌트 표시방법");
            obj.set_font("bold 24px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc00","37","280","943",null,null,"20",null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Expr 호출시 사용하는 방식\r\nGrid: comp\r\nDataset: dataset\r\nCell: this\r\n\r\n<Cell text=\"expr:this.col\"/> <!-- Cell -->\r\n<Cell text=\"expr:dataset.rowcount\"/> <!-- Binded Dataset -->\r\n<Cell text=\"expr:comp.currentcell\"/> <!-- Grid -->\r\n<Cell text=\"expr:dataset.parent.func1()\"/> <!-- Form -->\r\n<Cell text=\"expr:comp.parent.func1()\"/> <!-- Form -->\r\n\r\n글로발변수 가지고 올시 사용방법\r\nvar objApp = nexacro.getApplication(); \t\r\nobjApp.gv_Temp;\r\n");
            obj.set_background("cornsilk");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new Static("stc","stc00:7","280",null,null,"10","20",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("- type 속성값이 \"number\" 일 때 숫자 앞에 사용될 부호 마스크를 설정합니다.\r\n1. 부호 마스크 문자\r\n  \"-\" : 음수기호만 입력가능\r\n  \"+\" : 양수기호만 입력가능\r\n  \"!\" : 음수/양수기호 모두 입력 불가능\r\nex) value 속성값이 1234.567 일 때 format 속성값이 아래와 같은 경우\r\n ㄱ. \"09999.99\"      // \"01234.56\" 으로 표시됨\r\n ㄴ. \"#9900.0090\"    // \"1234.5670\" 으로 표시됨\r\n ㄷ. \"9,999.##\"      // \"1,234.56\" 으로 표시됨\r\n\r\nex) value 속성값이 0 일 때 format 속성값이 아래와 같은 경우\r\n ㄱ. \"##.#\"          // \"\" 으로 표시됨\r\n ㄴ. \"99.9\"          // \"0\" 으로 표시됨\r\n ㄷ. \"00.0\"          // \"00.0\" 으로 표시됨\r\n \r\nex) value 속성값이 0.1 일 때 format 속성값이 아래와 같은 경우\r\n ㄱ. \"#.#\"           // \".1\" 로 표시됨\r\n ㄴ. \"9.9\"           // \".1\" 로 표시됨\r\n ㄷ. \"0.0\"           // \"0.1\" 로 표시됨\r\n\r\n1. 문자열 마스크 문자\r\n  \"@\" : 모든 Ascii 문자 (한글과 같은 다국어 문자는 입력 불가)\r\n  \"#\" : \"0~9\" 의 10진수 숫자\r\n  \"*\" : \"a~z\" 의 소문자와 \"A~Z\" 의 대문자\r\n  \"9\" : \"a~z\" 의 소문자, \"A~Z\" 의 대문자, \"0~9\" 의 10진수 숫자\r\n  \"A\" : \"A~Z\" 의 대문자\r\n  \"a\" : \"a~z\" 의 소문자\r\n  \"Z\" : \"A~Z\" 의 대문자와 \"0~9\" 의 10진수 숫자\r\n  \"z\" : \"a~z\" 의 소문자와 \"0~9\" 의 10진수 숫자\r\n\r\n");
            obj.set_background("cornsilk");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new Static("staRate","994","200","96","31",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_expr("expr:comp.parent.fn_setStaRate()");
            obj.set_border("1px solid");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","994","234","96","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_type("string");
            obj.set_maskchar(" ");
            obj.set_format("###%");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01","1094","234","96","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_type("string");
            obj.set_maskchar(" ");
            obj.set_format("###");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","1196","237","16","29",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("%");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","1104","210",null,"21","9",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("expr속성 : comp.parent.fn_setStaRate() 함수 %표시하는 방식");
            obj.set_textAlign("left");
            obj.set_background("cadetblue");
            obj.set_font("bold 14px/normal \"Gulim\"");
            obj.set_color("#ffffff");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","1214","243",null,"21","9",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("edit표시 하는 방법 %를 표시 하는 속성.");
            obj.set_textAlign("left");
            obj.set_background("cadetblue");
            obj.set_font("bold 14px/normal \"Gulim\"");
            obj.set_color("#ffffff");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","staRate","text","dsList03","CMMSN_RATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","MaskEdit00","value","dsList03","CMMSN_RATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","MaskEdit01","value","dsList03","CMMSN_RATE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsList01");
        };
        
        // User Script
        this.registerScript("SML028DataOrExprComponentM01.xfdl", function() {

        this.fn_setStaRate = function()
        {
        	var intCmmsnRate = this.dsList03.getColumn(this.dsList03.rowposition, "CMMSN_RATE");

        	if(!this.gfn_isNull(intCmmsnRate))
        	{
        		result = intCmmsnRate + "%";
        	}else
        	{
        		result = "";
        	}
        	return result;

        	this.fn_round()
        };

        this.Button00_onclick = function(obj,e)
        {
        	alert(this.gfn_getStrinMid("XPLATFORM", 2, 4));
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
            this.grdDetail.addEventHandler("onheaddblclick",this.grdDetail_onheaddblclick,this);
            this.Static04.addEventHandler("onclick",this.Static03_onclick,this);
            this.Static05.addEventHandler("onclick",this.Static03_onclick,this);
        };
        this.loadIncludeScript("SML028DataOrExprComponentM01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
