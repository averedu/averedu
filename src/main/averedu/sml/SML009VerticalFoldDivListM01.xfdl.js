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
            this.set_titletext("화면수직 Drag화면접기");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMaster", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column1\">test_1</Col><Col id=\"Column0\">test_1.xfdl</Col></Row><Row><Col id=\"Column0\">test_2.xfdl</Col><Col id=\"Column1\">test_2</Col></Row><Row><Col id=\"Column0\">test_3.xfdl</Col><Col id=\"Column1\">test_3</Col></Row><Row><Col id=\"Column0\">test_4.xfdl</Col><Col id=\"Column1\">test_4</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new ImageViewer("imgVerticalBarMove02","865","40","10",null,null,"10",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_image("url(\'theme://images/btn_WF_Vspltt.png\')");
            obj.set_text("");
            obj.set_cursor("w-resize");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgVerticalBarMove03","1294","40","10",null,null,"10",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_image("url(\'theme://images/btn_WF_Vspltt.png\')");
            obj.set_text("");
            obj.set_cursor("w-resize");
            this.addChild(obj.name, obj);

            obj = new Div("divView03","imgVerticalBarMove02:0","40",null,null,"imgVerticalBarMove03:0","10",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Div02");
            obj.set_background("gainsboro");
            obj.set_border("1px solid rgba(128,128,128,1)");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","7.1%","42",null,"45","61.75%",null,null,null,null,null,this.divView03.form);
            obj.set_taborder("4");
            obj.set_text("Button00");
            this.divView03.addChild(obj.name, obj);

            obj = new Grid("Grid00","5.46%","151",null,"139","7.1%",null,null,null,null,null,this.divView03.form);
            obj.set_taborder("5");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Col size=\"80\"/><Col size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/></Band><Band id=\"body\"><Cell col=\"0\" text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/></Band></Format></Formats>");
            this.divView03.addChild(obj.name, obj);

            obj = new ImageViewer("imgVerticalBarMove01","436","40","10",null,null,"10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cursor("w-resize");
            obj.set_image("url(\'theme://images/btn_WF_Vspltt.png\')");
            this.addChild(obj.name, obj);

            obj = new Div("divView02","imgVerticalBarMove01:0","40",null,null,"imgVerticalBarMove02:0","10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div02");
            obj.set_background("gainsboro");
            obj.set_border("1px solid rgba(128,128,128,1)");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","7.26%","42",null,"45","61.69%",null,null,null,null,null,this.divView02.form);
            obj.set_taborder("2");
            obj.set_text("Button00");
            this.divView02.addChild(obj.name, obj);

            obj = new Grid("Grid00","5.24%","151",null,"139","7.26%",null,null,null,null,null,this.divView02.form);
            obj.set_taborder("3");
            obj.set_binddataset("dsMaster1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell row=\"1\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell row=\"1\" col=\"1\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/></Band></Format></Formats>");
            this.divView02.addChild(obj.name, obj);

            obj = new Button("btnLeftRightFold1","divView02:-30","6","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("◀");
            obj.set_color("#7c84f2");
            this.addChild(obj.name, obj);

            obj = new Div("divView01","14","40",null,null,"imgVerticalBarMove01:0","10",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_background("beige");
            obj.set_border("1px solid rgba(128,128,128,1)");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","10.5%","42",null,"45","68%",null,null,null,null,null,this.divView01.form);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.divView01.addChild(obj.name, obj);

            obj = new Grid("Grid00","47.5%","29",null,"139","3.75%",null,null,null,null,null,this.divView01.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsMaster");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/></Band></Format></Formats>");
            this.divView01.addChild(obj.name, obj);

            obj = new Div("divView04","imgVerticalBarMove03:0","40",null,null,"15","10",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div02");
            obj.set_background("gainsboro");
            obj.set_border("1px solid rgba(128,128,128,1)");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","7.1%","42",null,"45","61.75%",null,null,null,null,null,this.divView04.form);
            obj.set_taborder("4");
            obj.set_text("Button00");
            this.divView04.addChild(obj.name, obj);

            obj = new Grid("Grid00","5.46%","151",null,"139","7.1%",null,null,null,null,null,this.divView04.form);
            obj.set_taborder("5");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Col size=\"80\"/><Col size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/></Band><Band id=\"body\"><Cell col=\"0\" text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/></Band></Format></Formats>");
            this.divView04.addChild(obj.name, obj);

            obj = new Button("btnLeftRightFold2","divView04:-30","6","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("◀");
            obj.set_color("#7c84f2");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SML009VerticalFoldDivListM01.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): SML009VerticalFoldDivListM01.xfdl(수직 드래그 접기)
        * 작 성			일 명: jiback
        * 작 성	    	일 자: 2018/09/13
        * 변 경     	일 자:
        * 변 경			자 명:
        * 변경 및 수정 로그 : 일자별로 변경자 및 변경사항을 간략히 기술
        */
        /**********************************************************************
        	01. 전처리 공통 함수 선언
        ***********************************************************************/
        /**********************************************************************
        	02. 폼 변수 정의
        ***********************************************************************/
        this.f_drag 		= false;
        this.currArrange 	= "vertical1";
        this.nMoveX 		= 0;
        this.nRight			= 0;
        this.nBarMoveX      = 1;   //버튼을 클릭시 접기/펼치기 플래그 변수
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
        	//사용자 화면  초기화 함수
        	this.fn_formInit();
        };

        /**
         * 기능 : 폼언 로드(닫기전 셋팅)  Setting
         */
        this.form_onclose = function(obj,e)
        {

        };
        /**********************************************************************
        	04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        this.fn_formInit = function()
        {


        };

        /**********************************************************************
        	05. Get, Set Method
        ***********************************************************************/
        /**********************************************************************
        	06. 기타 Control Event
        ***********************************************************************/
        /**
         * FORM화면상의 드래그 상태에서 마우스움직일때 발생하는 이벤트처리(화면접기/펼치기)
         */
        this.form_ondragmove = function(obj,e)
        {
        	if (this.f_drag == false)
        	{
        		return;
        	}
        	var nPosX;
        	if (e.button == "lbutton")
        	{
        		nPosX = nexacro.toNumber(e.clientx);

        		try
        		{
        			if (this.currArrange == "vertical1")
        			{
        				if(this.divView01.getOffsetLeft() < nPosX &&  nPosX < this.nRight )
        				{
        					this.imgVerticalBarMove01.setOffsetLeft(nPosX);
        				}else
        				{
        					this.imgVerticalBarMove01.setOffsetLeft(this.nMoveX);
        				}
        			}else if (this.currArrange == "vertical2")
        			{

        				if(this.divView02.getOffsetLeft() < nPosX && nPosX < this.nRight)
        				{
        					this.imgVerticalBarMove02.setOffsetLeft(nPosX);
        				}else
        				{

        					this.imgVerticalBarMove02.setOffsetLeft(this.nMoveX);
        				}
        			}else if(this.currArrange == "vertical3")
        			{

        				if(this.divView03.getOffsetLeft() < nPosX && nPosX < this.nRight)
        				{
        					this.imgVerticalBarMove03.setOffsetLeft(nPosX);
        				}else
        				{

        					this.imgVerticalBarMove03.setOffsetLeft(this.nMoveX);
        				}
        			}
        		}
        		catch (ex)
        		{
        		}
        	}
        	this.resetScroll();
        };
        /**
         * FORM화면상의 드래그 상태에서 마우스 떼었을 때 발생하는 이벤트처리(화면접기/펼치기)
         */
        this.form_ondrop = function(obj,e)
        {
           if(this.f_drag == false)
        	{
        		return;
        	}

        	this.f_drag = false;

        	if (this.currArrange == "vertical1")
        	{
        		if(this.divView01.getOffsetLeft() < e.clientx && e.clientx < this.nRight )
        		{
        			this.imgVerticalBarMove01.setOffsetLeft(e.clientx);
        		}else
        		{
        			this.imgVerticalBarMove01.setOffsetLeft(this.nMoveX);
        		}

        	}else if (this.currArrange == "vertical2")
        	{
        		if(this.divView02.getOffsetLeft() < e.clientx && e.clientx < this.nRight)
        		{
        			this.imgVerticalBarMove02.setOffsetLeft(e.clientx);
        		}else
        		{
        			this.imgVerticalBarMove02.setOffsetLeft(this.nMoveX);
        		}
        	}else if (this.currArrange == "vertical3")
        	{
        		if(this.divView03.getOffsetLeft() < e.clientx && e.clientx < this.nRight)
        		{
        			this.imgVerticalBarMove03.setOffsetLeft(e.clientx);
        		}else
        		{
        			this.imgVerticalBarMove03.setOffsetLeft(this.nMoveX);
        		}
        	}
        	this.resetScroll();
        };


        this.div_verticalBar_move_ondrag = function(obj,e)
        {
        	this.currArrange = "vertical1";
        	this.nMoveX = nexacro.toNumber(obj.left);
        	this.nRight =  this.divView02.getOffsetRight();
        	this.f_drag = true;

        	return true;
        };

        this.div_verticalBar_move00_ondrag = function (obj, e)
        {
        	this.currArrange = "vertical2";
        	this.nMoveX = nexacro.toNumber(obj.left);
        	this.nRight =  this.divView03.getOffsetRight();
        	this.f_drag = true;

        	return true;
        };

        this.div_verticalBar_move01_ondrag = function(obj, e)
        {
        	this.currArrange = "vertical3";
        	this.nMoveX = nexacro.toNumber(obj.left);
        	this.nRight =  this.divView04.getOffsetRight();
        	this.f_drag = true;

        	return true;
        };

        /**
         * 버튼을 클릭시 접기/펼치기 처리이벤트
         */
        this.btnLeftRightFold1_onclick = function(obj,e)
        {
        	if(this.nBarMoveX == -1)
        	{
        		this.imgVerticalBarMove01.setOffsetLeft(this.divView02.getOffsetRight()-this.imgVerticalBarMove01.getOffsetWidth());
        		this.btnLeftRightFold1.set_text("◀");
        		this.nBarMoveX = 1;
        		this.resetScroll();
        	}else
        	{
        		this.imgVerticalBarMove01.setOffsetLeft(this.divView01.getOffsetLeft());
        		this.btnLeftRightFold1.set_text("▶");
        		this.nBarMoveX = -1;
        		this.resetScroll();
        	}
        };

        /**
         * 버튼을 클릭시 접기/펼치기 처리이벤트
         */
        this.btnLeftRightFold2_onclick = function(obj,e)
        {
        	if(this.nBarMoveX == -1)
        	{
        		this.imgVerticalBarMove03.setOffsetLeft(this.divView04.getOffsetRight()-this.imgVerticalBarMove03.getOffsetWidth());
        		this.btnLeftRightFold2.set_text("◀");
        		this.nBarMoveX = 1;
        		this.resetScroll();
        	}else
        	{
        		this.imgVerticalBarMove03.setOffsetLeft(this.divView03.getOffsetLeft());
        		this.btnLeftRightFold2.set_text("▶");
        		this.nBarMoveX = -1;
        		this.resetScroll();
        	}
        };



        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
           // return (this.gfn_isUpdate(this.dsMaster) || this.gfn_isUpdate(this.dsDetail1) || this.gfn_isUpdate(this.dsDetail2));
        };






        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ondragmove",this.form_ondragmove,this);
            this.addEventHandler("ondrop",this.form_ondrop,this);
            this.imgVerticalBarMove02.addEventHandler("ondrag",this.div_verticalBar_move00_ondrag,this);
            this.imgVerticalBarMove03.addEventHandler("ondrag",this.div_verticalBar_move01_ondrag,this);
            this.imgVerticalBarMove01.addEventHandler("ondrag",this.div_verticalBar_move_ondrag,this);
            this.btnLeftRightFold1.addEventHandler("onclick",this.btnLeftRightFold1_onclick,this);
            this.btnLeftRightFold2.addEventHandler("onclick",this.btnLeftRightFold2_onclick,this);
        };
        this.loadIncludeScript("SML009VerticalFoldDivListM01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
