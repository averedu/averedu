(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmPopup");
            this.set_titletext("CHILDPOPUP");
            if (Form == this.constructor)
            {
                this._setFormPosition(512,384);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"SEOLMUN_GAESEOL_CD\" type=\"STRING\" size=\"8\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnClose","206","337","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("close");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","25","77","439","234",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","180","39","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","22","39","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",512,384,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SML014ChildModelessP01.xfdl", function() {
        /**
        *  테스트용 팝업화면
        *  @MenuPath
        *  @FileName 		cmmPopup.xfdl
        *  @Creator 			jiback
        *  @CreateDate 	2017.11.01
        *  @LastModifier
        *  @LastModifyDate
        *  @Version 		1.0
        *  @Outline
        *  @Desction
        ************** 소스 수정 이력 *************************************************
        *    date          		Modifier            Description
        *******************************************************************************
        *  2017.11.01     	jiback	           최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/

        this.form_onload = function(obj,e)
        {

        	//this.getOwnerFrame().파라미터명 형식으로 받아서 사용합니다.

            trace("paramCode : " + this.getOwnerFrame().paramCode);
            trace("paramNum : " + this.getOwnerFrame().paramNum);
        	trace("dataset: " + this.getOwnerFrame().dsArg);

        	if( !this.gfn_isNull(this.getOwnerFrame().paramCode)){
        		this.Edit00.set_value(this.getOwnerFrame().paramCode);
        	}

        	if( !this.gfn_isNull(this.getOwnerFrame().paramNum)){
        		this.Edit01.set_value(this.getOwnerFrame().paramNum);
        	}

        	this.Dataset00.copyData(this.getOwnerFrame().dsArg);
        	this.Grid00.createFormat();
        };

          /**
        * btnClose_onclick : popup close
        * @param  : obj		   - [object]Button
        * @param  : e		   - [string]ClickEventInfo
        * @return : strReturnValue
        */
        this.btnClose_onclick = function(obj,e)
        {
        	//리턴값은 문자열만 가능합니다.(object은 안됨)
        	//Dataset은 saveXML을 이용하여 문자열로 보내고 loadXML으로 다시 넣어줍니다.
        	var objRtnArr = new Array(2);
        	objRtnArr[0] = this.Dataset00.getColumn(this.Dataset00.rowposition, "Column0");
        	objRtnArr[1] = this.Dataset00.getColumn(this.Dataset00.rowposition, "Column1");
        	objRtnArr[2] = this.Dataset00.saveXML();

        	this.close(objRtnArr.toString());
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
        };
        this.loadIncludeScript("SML014ChildModelessP01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
