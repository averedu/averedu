(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CheckBoxDynamicCreate");
            this.set_titletext("체크박스 동적생성");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsChechkBox", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"CHK_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CHK_NUM\">1</Col><Col id=\"CHK_NM\">이론강의</Col></Row><Row><Col id=\"CHK_NUM\">2</Col><Col id=\"CHK_NM\">실습</Col></Row><Row><Col id=\"CHK_NUM\">3</Col><Col id=\"CHK_NM\">발표</Col></Row><Row><Col id=\"CHK_NUM\">4</Col><Col id=\"CHK_NM\">토론</Col></Row><Row><Col id=\"CHK_NUM\">5</Col><Col id=\"CHK_NM\">팀프로젝트</Col></Row><Row><Col id=\"CHK_NUM\">6</Col><Col id=\"CHK_NM\">기타</Col></Row><Row><Col id=\"CHK_NUM\">7</Col><Col id=\"CHK_NM\">포토폴리오</Col></Row><Row><Col id=\"CHK_NUM\">8</Col><Col id=\"CHK_NM\">캡스톤디자인</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divCheckBoxCrt","187","57","833","373",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","45","57","124","39",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskCnt","412","8","199","36",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_value("3");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SML045CheckBoxDynamicCreate.xfdl", function() {
        var colSize 	= 0;    // CheckBox 열의 갯수생성
        var colWidth  	= 100;  // CheckBox 사이즈 설정
        var colHeight   = 40;   // CheckBox 높이 설정
        this.Button00_onclick = function(obj,e)
        {
        	var chkId = "";
        	var leftSz = 0;
        	var topSz  = 0;
        	var colSize = this.mskCnt.value;

        	this.fn_setObjCheckBoxDestroy(this.divCheckBoxCrt.form);

        	for (var i = 0; i < this.dsChechkBox.getRowCount(); i++)
        	{
        		var chkNUM 		= this.dsChechkBox.getColumn(i, "CHK_NUM");
        		var chkNm 		= this.dsChechkBox.getColumn(i, "CHK_NM");
        		chkId = "CheckBox"+ chkNUM;
        		this.fn_CreateCheckBox(chkId,chkNm,leftSz,topSz);
        		var chkObj = this.divCheckBoxCrt.form.components[chkId];
        		var colNum      = (i+1) % colSize;
        		if(colNum == 0)
        		{
        			leftSz = 0;
        			topSz  = chkObj.getOffsetBottom();
        		}else
        		{
        			leftSz = chkObj.getOffsetRight();
        		}
        	}
        	this.divCheckBoxCrt.form.resetScroll();
        };
        /**
         * checkBox 초기화(모든 체크박스를 삭제)
         */
        this.fn_setObjCheckBoxDestroy = function(objForm)
        {
        	var arrComp  = objForm.components;
        	var nLength = arrComp.length-1;
        	for(var i=nLength; i>=0; i--)
        	{
        		var objComp = arrComp[i];
        		if(objComp instanceof nexacro.CheckBox)
        		{
        			var objCp = objForm.removeChild(objComp.name);
        			objCp.destroy();
        			objCp = null;
        		}
        	}
        };
        /**
         * checkBox 동적인 생성
         */
        this.fn_CreateCheckBox = function (chkId,chkNm,leftSz,topSz)
        {
        	var objCheckBox = new CheckBox();
        	objCheckBox.init(chkId, leftSz,topSz,colWidth,colHeight);
        	this.divCheckBoxCrt.addChild(chkId, objCheckBox);
        	objCheckBox.set_text(chkNm);
        	//objCheckBox.set_border("1px solid black");
        	objCheckBox.set_font('bold 12px/normal "Malgun Gothic"');
        	//objCheckBox.set_background("brown");
        	objCheckBox.show();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("SML045CheckBoxDynamicCreate.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
