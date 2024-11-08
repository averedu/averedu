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
            this.set_titletext("화면수평 Drag화면접기");
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
            obj = new ImageViewer("imgHorizontalBarMove01","19","201",null,"10","50",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_image("url(\'theme://images/btn_WF_Hspltt.png\')");
            obj.set_cursor("s-resize");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgHorizontalBarMove02","19","395",null,"10","50",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_image("url(\'theme://images/btn_WF_Hspltt.png\')");
            obj.set_cursor("s-resize");
            this.addChild(obj.name, obj);

            obj = new Div("divView02","19","imgHorizontalBarMove01:0",null,null,"50","imgHorizontalBarMove02:0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_background("gainsboro");
            obj.set_border("1px solid rgba(128,128,128,1)");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","65",null,"280","45",null,"58",null,null,null,null,this.divView02.form);
            obj.set_taborder("2");
            obj.set_text("Button00");
            this.divView02.addChild(obj.name, obj);

            obj = new Grid("Grid00","353","41",null,null,"65","25",null,null,null,null,this.divView02.form);
            obj.set_taborder("3");
            obj.set_binddataset("");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell row=\"1\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell row=\"1\" col=\"1\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/></Band></Format></Formats>");
            this.divView02.addChild(obj.name, obj);

            obj = new Div("divView01","19","17",null,null,"50","imgHorizontalBarMove01:0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("beige");
            obj.set_border("1px solid rgba(128,128,128,1)");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","93",null,"198","45",null,"31",null,null,null,null,this.divView01.form);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.divView01.addChild(obj.name, obj);

            obj = new Grid("Grid00","390","9","440",null,null,"29",null,null,null,null,this.divView01.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsMaster");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/></Band></Format></Formats>");
            this.divView01.addChild(obj.name, obj);

            obj = new ImageViewer("imgHorizontalBarMove03","19","589",null,"12","50",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_image("url(\'theme://images/btn_WF_Hspltt.png\')");
            obj.set_cssclass("img_GWF_SplitterH");
            obj.set_cursor("s-resize");
            this.addChild(obj.name, obj);

            obj = new Div("divView03","19","imgHorizontalBarMove02:0",null,null,"50","imgHorizontalBarMove03:0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_background("gainsboro");
            obj.set_border("1px solid rgba(128,128,128,1)");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","65",null,"280","45",null,"58",null,null,null,null,this.divView03.form);
            obj.set_taborder("2");
            obj.set_text("Button00");
            this.divView03.addChild(obj.name, obj);

            obj = new Grid("Grid00","353","41",null,null,"65","25",null,null,null,null,this.divView03.form);
            obj.set_taborder("3");
            obj.set_binddataset("");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell row=\"1\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell row=\"1\" col=\"1\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/></Band></Format></Formats>");
            this.divView03.addChild(obj.name, obj);

            obj = new Div("divView04","19","imgHorizontalBarMove03:0",null,null,"50","15",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_background("gainsboro");
            obj.set_border("1px solid rgba(128,128,128,1)");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","65",null,"280","45",null,"58",null,null,null,null,this.divView04.form);
            obj.set_taborder("2");
            obj.set_text("Button00");
            this.divView04.addChild(obj.name, obj);

            obj = new Grid("Grid00","353","41",null,null,"65","25",null,null,null,null,this.divView04.form);
            obj.set_taborder("3");
            obj.set_binddataset("");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell row=\"1\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell row=\"1\" col=\"1\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/></Band></Format></Formats>");
            this.divView04.addChild(obj.name, obj);

            obj = new Button("btnTopBottomFold1",null,null,"30","30","17","imgHorizontalBarMove02:1",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("▲");
            obj.set_color("#7c84f2");
            this.addChild(obj.name, obj);

            obj = new Button("btnTopBottomFold2","divView04:3",null,"30","30",null,"15",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("▲");
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
        this.registerScript("SML010HorizontalFoldDivListM01.xfdl", function() {

        this.f_drag 		= false;
        this.currArrange 	= "horizontal1";
        this.nMoveY 		= 0;
        this.nBottom		= 0;
        this.nBarMoveY      = 1;   //버튼을 클릭시 접기/펼치기 플래그 변수
        this.test_ondragmove = function(obj,e)
        {

        	if (this.f_drag == false)
        	{
        		return false;
        	}
        	var nPosY;
        	if (e.button == "lbutton")
        	{
        		nPosY = nexacro.toNumber(e.clienty);

        		try
        		{
        			if (this.currArrange == "horizontal1")
        			{
        				if(this.divView01.getOffsetTop() < nPosY &&  nPosY < this.nBottom )
        				{
        					this.imgHorizontalBarMove01.setOffsetTop(nPosY);
        				}else
        				{

        					this.imgHorizontalBarMove01.setOffsetTop(this.nMoveY);
        				}
        			}else if (this.currArrange == "horizontal2")
        			{
        				if(this.divView02.getOffsetTop() < nPosY &&  nPosY < this.nBottom )
        				{
        					this.imgHorizontalBarMove02.setOffsetTop(nPosY);
        				}else
        				{

        					this.imgHorizontalBarMove02.setOffsetTop(this.nMoveY);
        				}
        			}else if (this.currArrange == "horizontal3")
        			{

        				if(this.divView03.getOffsetTop() < nPosY &&  nPosY < this.nBottom )
        				{
        					this.imgHorizontalBarMove03.setOffsetTop(nPosY);
        				}else
        				{

        					this.imgHorizontalBarMove03.setOffsetTop(this.nMoveY);
        				}
        			}
        		}
        		catch (ex)
        		{
        		}
        	}
        	this.resetScroll();
        };

        this.test_ondrop = function(obj,e)
        {

            if(this.f_drag == false)
        	{
        		return false;
        	}

        	this.f_drag = false;


        	if (this.currArrange == "horizontal1")
        	{
        		if(this.divView01.getOffsetTop() < e.clienty && e.clienty < this.nBottom )
        		{
        			this.imgHorizontalBarMove01.getOffsetTop(e.clienty);
        		}else
        		{
        			this.imgHorizontalBarMove01.getOffsetTop(this.nBottom);
        		}
        	}else if (this.currArrange == "horizontal2")
        	{
        		if(this.divView02.getOffsetTop() < e.clienty && e.clienty < this.nBottom )
        		{
        			this.imgHorizontalBarMove02.getOffsetTop(e.clienty);
        		}else
        		{
        			this.imgHorizontalBarMove02.getOffsetTop(this.nBottom);
        		}
        	}else if (this.currArrange == "horizontal3")
        	{
        		if(this.divView03.getOffsetTop() < e.clienty && e.clienty < this.nBottom )
        		{
        			this.imgHorizontalBarMove03.getOffsetTop(e.clienty);
        		}else
        		{
        			this.imgHorizontalBarMove03.getOffsetTop(this.nBottom);
        		}
        	}
        	this.resetScroll();
        };


        this.div_horizontalBar_move_ondrag = function(obj,e)
        {
        	this.currArrange 	= "horizontal1";
            this.nMoveY 		= nexacro.toNumber(obj.top);
        	this.nBottom 		= this.divView02.getOffsetBottom();
        	this.f_drag 		= true;
        	return true;
        };

        this.div_horizontalBar_move00_ondrag = function(obj,e)
        {
        	this.currArrange 	= "horizontal2";
            this.nMoveY 		= nexacro.toNumber(obj.top);
        	this.nBottom 		= this.divView03.getOffsetBottom();
        	this.f_drag 		= true;
        	return true;
        };

        this.div_horizontalBar_move01_ondrag = function(obj,e)
        {
        	this.currArrange 	= "horizontal3";
            this.nMoveY 		= nexacro.toNumber(obj.top);
        	this.nBottom 		= this.divView04.getOffsetBottom();
        	this.f_drag 		= true;
        	return true;
        };


        this.btnTopBottomFold1_onclick = function(obj,e)
        {
        	if(this.nBarMoveY == -1)
        	{
        		this.imgHorizontalBarMove01.setOffsetTop(this.divView02.getOffsetBottom()-this.imgHorizontalBarMove01.getOffsetHeight());
        		this.btnTopBottomFold1.set_text("▲");
        		this.nBarMoveY = 1;
        		this.resetScroll();
        	}else
        	{
        		this.imgHorizontalBarMove01.setOffsetTop(this.divView01.getOffsetTop());
        		this.btnTopBottomFold1.set_text("▼");
        		this.nBarMoveY = -1;
        		this.resetScroll();
        	}
        };

        this.btnTopBottomFold2_onclick = function(obj,e)
        {
        	if(this.nBarMoveY == -1)
        	{
        		this.imgHorizontalBarMove03.setOffsetTop(this.divView04.getOffsetBottom()-this.imgHorizontalBarMove03.getOffsetHeight());
        		this.btnTopBottomFold2.set_text("▲");
        		this.nBarMoveY = 1;
        		this.resetScroll();
        	}else
        	{
        		this.imgHorizontalBarMove03.setOffsetTop(this.divView03.getOffsetTop());
        		this.btnTopBottomFold2.set_text("▼");
        		this.nBarMoveY = -1;
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
            this.addEventHandler("onload",this.test_onload,this);
            this.addEventHandler("ondragmove",this.test_ondragmove,this);
            this.addEventHandler("ondrop",this.test_ondrop,this);
            this.imgHorizontalBarMove01.addEventHandler("ondrag",this.div_horizontalBar_move_ondrag,this);
            this.imgHorizontalBarMove02.addEventHandler("ondrag",this.div_horizontalBar_move00_ondrag,this);
            this.imgHorizontalBarMove03.addEventHandler("ondrag",this.div_horizontalBar_move01_ondrag,this);
            this.btnTopBottomFold1.addEventHandler("onclick",this.btnTopBottomFold1_onclick,this);
            this.btnTopBottomFold2.addEventHandler("onclick",this.btnTopBottomFold2_onclick,this);
        };
        this.loadIncludeScript("SML010HorizontalFoldDivListM01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
