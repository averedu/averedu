//==============================================================================
//
//  TOBESOFT Co., Ltd.
//  Copyright 2014 TOBESOFT Co., Ltd.
//  All Rights Reserved.
//
//  NOTICE: TOBESOFT permits you to use, modify, and distribute this file 
//          in accordance with the terms of the license agreement accompanying it.
//
//  Readme URL: http://www.nexacro.co.kr/legal/nexacro-public-license-readme-1.0.html	
//
//==============================================================================

if (!nexacro._ListViewItem)
{
    //==============================================================================
    // nexacro._ListViewItem
    //==============================================================================

    /* template comment
    // [interface:status]               : template code inteface comment
    // [interface.subinterface:status]  : sub interface comment
    // [interface/]                     : close comment
    */
 
    // [object.inherit:create]
    nexacro._ListViewItem = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent)
    {
        nexacro.ComplexComponent.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent);
    };

    // [object.prototype:create]
    var _pListViewItem = nexacro._createPrototype(nexacro.ComplexComponent, nexacro._ListViewItem);
    nexacro._ListViewItem.prototype = _pListViewItem;

    // [component.typename:create]
    _pListViewItem._type_name = "_ListViewItem";

    // [component.composite.layout.panel:useset]
    _pListViewItem._is_panel_layout = true;
    // [component.composite.layout:create]
    _pListViewItem._is_child = true;

    // [component.status:init]
    _pListViewItem._use_selected_status = true;
    

    //===============================================================
    // nexacro.ComplexComponent : Child/Create,Destroy
    //===============================================================

    // [component.layout.child:create]
    _pListViewItem.onCreateChild = function ()
    {
        // child create
        if (this.checkcontrol = this.createChildControl(new nexacro.CheckBox("checkbox", 0, 0, 0, 0, null, null, null, null, null, null, this)))
        {
            // attach event
            this.checkcontrol._setEventHandler("onclick", this.on_notify_check_onclick, this);
        }
        // child create
        if (this.textcontrol = this.createChildControl(new nexacro.Static("text", 0, 0, 0, 0, null, null, null, null, null, null, this)))
        {
            // attach event
            this.textcontrol._setEventHandler("onclick", this.on_notify_text_onclick, this);
        }
        // child create
        /*
        if (this.desccontrol = this.createChildControl(new nexacro.Static("desc", 0, 0, 0, 0, null, null, null, null, null, null, this)))
        {
            // attach event
            this.desccontrol._setEventHandler("onclick", this.on_notify_text_onclick, this);
        }
        */
    };

    // [component.layout.child:destroy]
    _pListViewItem.onDestroyChild = function ()
    {
        // child unlink
        this.checkcontrol = null;
        this.textcontrol = null;
        this.desccontrol = null;
    };

    //===============================================================
    // nexacro.ComplexComponent : Child/Event
    //===============================================================

    _pListViewItem.on_notify_check_onclick = function (obj, e)
    {
        nexacro._notify("_ListViewItem.on_notify_check_onclick");
    };
    _pListViewItem.on_notify_text_onclick = function (obj, e)
    {
        nexacro._notify("_ListViewItem.on_notify_text_onclick");
    };

    //===============================================================
    // nexacro._ListView : Layout/Panel
    //===============================================================

    // [component.layout.panel:init]               
    _pListViewItem._onInitPanelLayout = function ()
  	{
        var panel = this._getPanel();

  	    if (panel)
  	    {
  	        // TODO: RuleBased Socketing 처리
  	        panel._setLayoutType(nexacro._PanelConst.LAYOUTSTYLE_ROWCOL);
  	        panel._setSizeInfoRefPanel(null, nexacro._PanelConst.SIZEINFO_REFSTYLE_NOLINK);
  	        panel._setGroupingSubPanel(null, nexacro._PanelConst.GROUPING_SUBSTYLE_NONE, nexacro._PanelConst.GROUPING_SUBPLACE_NONE);
  	        panel._setSlotArrangeType(nexacro._PanelConst.SLOT_ARRANGETYPE_COLFIRST | nexacro._PanelConst.SLOT_ARRANGETYPE_HORZLEAD);
  	        panel._setSlotVisibleType(nexacro._PanelConst.SLOT_VISIBLETYPE_HIDESLOT);
  	        panel._setSlotOverFlowType(nexacro._PanelConst.SLOT_OVERFLOWTYPE_SCROLL | nexacro._PanelConst.SLOT_OVERFLOWTYPE_FULLSLOT);
  	        panel._setSlotAutoSizeType(nexacro._PanelConst.SLOT_AUTOSIZETYPE_HORZFIT);
  	    //  panel._setSlotAutoFillType(nexacro._PanelConst.SLOT_AUTOFILLTYPE_DEFAULT);
  	        panel._setSlotSizeMoveType(nexacro._PanelConst.SLOT_SIZEMOVETYPE_NONE);
            
  	        panel._resetPanelColSizeArray(3,[20,undefined,20],20);
  	        panel._resetPanelRowSize(0,20);
        }
    };

    delete _pListViewItem;
};


if (!nexacro._ListViewHead)
{
    //==============================================================================
    // nexacro._ListViewHead
    //==============================================================================

    /* template comment
    // [interface:status]               : template code inteface comment
    // [interface.subinterface:status]  : sub interface comment
    // [interface/]                     : close comment
    */
 
    // [object.inherit:create]
    nexacro._ListViewHead = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent)
    {
        nexacro.ComplexComponent.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent);
    };

    // [object.prototype:create]
    var _pListViewHead = nexacro._createPrototype(nexacro.ComplexComponent, nexacro._ListViewItem);
    nexacro._ListViewHead.prototype = _pListViewHead;

    // [component.typename:create]
    _pListViewHead._type_name = "_ListViewHead";

    // [component.composite.layout.panel:useset]
    _pListViewHead._is_panel_layout = true;
    // [component.composite.layout:create]
    _pListViewHead._is_child = true;

    //===============================================================
    // nexacro.ComplexComponent : Child/Create,Destroy
    //===============================================================

    // [component.layout.child:create]
    _pListViewHead.onCreateChild = function ()
    {
        // child create
        if (this.checkcontrol = this.createChildControl(new nexacro.CheckBox("checkbox", 0, 0, 0, 0, null, null, null, null, null, null, this)))
        {
            // attach event
            this.checkcontrol._setEventHandler("onclick", this.on_notify_check_onclick, this);
        }
        // child create
        if (this.textcontrol = this.createChildControl(new nexacro.Static("text", 0, 0, 0, 0, null, null, null, null, null, null, this)))
        {
            // set prop     // TODO:Context로 변경
            this.textcontrol.set_text("Name");
            // attach event
            this.textcontrol._setEventHandler("onclick", this.on_notify_text_onclick, this);
        }
        // child create
        if (this.desccontrol = this.createChildControl(new nexacro.Static("desc", 0, 0, 0, 0, null, null, null, null, null, null, this)))
        {
            // set prop     // TODO:Context로 변경
            this.desccontrol.set_text("Level");
            // attach event
            this.desccontrol._setEventHandler("onclick", this.on_notify_text_onclick, this);
        }
    };

    // [component.layout.child:destroy]
    _pListViewHead.onDestroyChild = function ()
    {
        // child unlink
        this.checkcontrol = null;
        this.textcontrol = null;
        this.desccontrol = null;

        // parent call
        nexacro.ComplexComponent.prototype.onDestroyChild.call(this);
    };

    //===============================================================
    // nexacro.ComplexComponent : Child/Event
    //===============================================================

    _pListViewHead.on_notify_check_onclick = function (obj, e)
    {
        nexacro._notify("_ListViewHead.on_notify_check_onclick");
    };
    _pListViewHead.on_notify_text_onclick = function (obj, e)
    {
        nexacro._notify("_ListViewHead.on_notify_text_onclick");
    };

    //===============================================================
    // nexacro._ListView : Layout/Panel
    //===============================================================

    // [component.layout.panel:init]               
    _pListViewHead._onInitPanelLayout = function ()
  	{
  	    var panel = this._getPanel();

  	    if (panel)
  	    {
  	        // TODO: RuleBased Socketing 처리
  	        panel._setLayoutType(nexacro._PanelConst.LAYOUTSTYLE_ROWCOL);
  	        panel._setSizeInfoRefPanel(null, nexacro._PanelConst.SIZEINFO_REFSTYLE_NOLINK);
  	        panel._setGroupingSubPanel(null, nexacro._PanelConst.GROUPING_SUBSTYLE_NONE, nexacro._PanelConst.GROUPING_SUBPLACE_NONE);
  	        panel._setSlotArrangeType(nexacro._PanelConst.SLOT_ARRANGETYPE_COLFIRST | nexacro._PanelConst.SLOT_ARRANGETYPE_HORZLEAD);
  	        panel._setSlotVisibleType(nexacro._PanelConst.SLOT_VISIBLETYPE_HIDESLOT);
  	        panel._setSlotOverFlowType(nexacro._PanelConst.SLOT_OVERFLOWTYPE_SCROLL | nexacro._PanelConst.SLOT_OVERFLOWTYPE_FULLSLOT);
  	        panel._setSlotAutoSizeType(nexacro._PanelConst.SLOT_AUTOSIZETYPE_HORZFIT);
  	    //  panel._setSlotAutoFillType(nexacro._PanelConst.SLOT_AUTOFILLTYPE_DEFAULT);
  	        panel._setSlotSizeMoveType(nexacro._PanelConst.SLOT_SIZEMOVETYPE_NONE);
            
  	        panel._resetPanelColSizeArray(4, [20,undefined,60,20], 100);
  	        panel._resetPanelRowSize(1,30);
        }
    };

    delete _pListViewHead;
};


if (!nexacro._ListViewTitle)
{
    //==============================================================================
    // nexacro._ListViewTitle
    //==============================================================================

    /* template comment
    // [interface:status]               : template code inteface comment
    // [interface.subinterface:status]  : sub interface comment
    // [interface/]                     : close comment
    */
 
    // [object.inherit:create]
    nexacro._ListViewTitle = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent)
    {
        nexacro._ListViewItem.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent);
    };

    // [object.prototype:create]
    var _pListViewTitle = nexacro._createPrototype(nexacro._ListViewItem, nexacro._ListViewTitle);
    nexacro._ListViewTitle.prototype = _pListViewTitle;

    // [component.typename:create]
    _pListViewTitle._type_name = "_ListViewTitle";

    // [component.composite.layout.panel:useset]
    _pListViewTitle._is_panel_layout = true;
    // [component.composite.layout:create]
    _pListViewTitle._is_child = true;

    //===============================================================
    // nexacro._ListViewTitle : Child/Create,Destroy
    //===============================================================

    // [component.layout.child:create]
    _pListViewTitle.onCreateChild = function ()
    {
        // parent call
        nexacro._ListViewItem.prototype.onCreateChild.call(this);

        // child add
        if (this.popupcontrol = this.createChildControl(new nexacro.Button("popup", 0, 0, 0, 0, null, null, null, null, null, null, this)))
        {
            // attach event
            this.popupcontrol._setEventHandler("onclick", this.on_notify_popup_onclick, this);
        }
    };

    // [component.layout.child:destroy]
    _pListViewTitle.onDestroyChild = function ()
    {
        // child unlink
        this.popupcontrol = null;

        // parent call
        nexacro._ListViewItem.prototype.onDestroyChild.call(this);
    };


    //===============================================================
    // nexacro._ListViewTitle : Child/Event
    //===============================================================

    // [component.event:init]
    _pListViewTitle._initEvents = function ()     // Event 추가시 Override
    {
        this._event_list =
        {
            "onclick": 1, "ondblclick": 1, "onkillfocus": 1, "onsetfocus": 1,
            "oninput": 1, "onkeydown": 1, "onkeyup": 1,
            "onlbuttondown": 1, "onlbuttonup": 1, "onrbuttondown": 1, "onrbuttonup": 1,
            "onmousedown": 1, "onmouseup": 1,
            "onmouseenter": 1, "onmouseleave": 1, "onmousemove": 1, "onmousewheel": 1,
            "ondrag": 1, "ondragenter": 1, "ondragleave": 1, "ondragmove": 1, "ondrop": 1,
            "onmove": 1, "onsize": 1, "oncontextmenu": 1,
            "ontouchstart": 1, "ontouchmove": 1, "ontouchend": 1,

            // [event:init]
            "onpopup": 1
            // [event/]
        };
    };

    // [component.event.child:notify]
    _pListViewTitle.on_notify_popup_onclick = function (obj, e)
    {
    //  nexacro._notify("_ListViewTitle.on_notify_popup_onclick");
        this._on_basic_onpopup(obj, e);
        this._on_fire_onpopup(obj, e);
        this._on_default_onpopup(obj, e);

        return true;
    };
    // [component.event.popup:basicaction]
    _pListViewTitle._on_basic_onpopup = function (obj, e)
    {
    };
    // [component.event.popup:defaultaction]
    _pListViewTitle._on_default_onpopup = function (obj, e)
    {
    };
    // [component.event.popup:fireevent]
    _pListViewTitle._on_fire_onpopup = function (obj, e)
    {
        if (this.onpopup && this.onpopup._has_handlers)
        {
            e.fromobject = this;
            this.onpopup._fireEvent(this, e);
        }
        return true;
    };

    //===============================================================
    // nexacro._ListViewTitle : Layout/Panel
    //===============================================================

    // [component.layout.panel:init]               
    _pListViewTitle._onInitPanelLayout = function ()
  	{
        // parent call
        nexacro._ListViewItem.prototype._onInitPanelLayout.call(this);

        // child add - not use, use link
        /*
        var panel = this._getPanel();

  	    if (panel)
  	    {
  	        panel._addPanelColSize(20);
        }
        */
    };

    delete _pListViewTitle;
};


if (!nexacro._ListView)
{
    //==============================================================================
    // nexacro._ListView
    //==============================================================================
 
    /* template comment
    // [interface:status]               : template code inteface comment
    // [interface.subinterface:status]  : sub interface comment
    // [interface/]                     : close comment
    */

    // [object.inherit:create]
    nexacro._ListView = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent)
    {
        nexacro.ComplexComponent.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent);
    };

    // [object.prototype:create]
    var _pListView = nexacro._createPrototype(nexacro.ComplexComponent, nexacro._ListView);
    nexacro._ListView.prototype = _pListView;

    // [component.typename:create]
    _pListView._type_name = "_ListView";

    // [component.composite.layout.formats:useset]
    _pListView._is_format_layout = false;               // TODO:formats로 변경처리
    // [component.composite.layout.formats:initprop]
    _pListView.formats = "";                            // format string
    _pListView.formatid = "";                           // format id

    // [component.composite.layout.panel:useset]
    _pListView._is_panel_layout = true;

    // [component.composite.layout.items:useset]
    _pListView._is_child = false;
    _pListView._is_items = true;

    // [component.composite.nclayout:useset]
    _pListView._is_nc_layout = false;
    _pListView._is_nc_head = true;
    _pListView._is_nc_foot = false;
    _pListView._is_nc_lead = false;
    _pListView._is_nc_tail = false;

    // [component.composite.scroll:useset]
    _pListView._is_scrollable = true;
    _pListView._is_nc_scroll = true;            // NC Scroll 사용시 개별 지정, Override 필요.
    _pListView._use_scrollmanager = false;      // NC Scroll 사용시 개별 지정, Override 필요.
    _pListView._use_translate_move = true;

    // [component.composite.expand:useset]
    _pListView._is_nc_expand = false;           // NC Expand 사용시 개별 지정, Override 필요.
    _pListView._use_expandmanager = false;      // NC Expand 사용시 개별 지정, Override 필요.




    //===============================================================
    // nexacro._ListView : Init
    //===============================================================

    // [component.variable:init]
    /*
    _pListView._var1 = true;
    _pListView._var2 = null;
    _pListView._var3 = false;
    */

    // [object.property:init]
    /*
    _pListView.prop1 = true;
    _pListView.prop2 = false;
    _pListView.prop3 = false;
    */

    // [component.status:init]
    /*
    _pListView._use_pushed_status = true;
    _pListView._use_selected_status = true;
    */

    // [component.accessibility:init]
    /*
    _pListView._accessibility_role = "RoleName";
    */

    // [object.event:init]
    /*
    _pListView._event_list =
    {
            "onlbuttondown": 1,
            "onlbuttonup": 1, 
            "onmouseenter": 1,
            "onmouseleave": 1,
            "onmousemove": 1,
            "onmove": 1,
            "onsize": 1,
            "onmousedown": 1,
            "onmouseup": 1,
            "ontouchstart": 1,
            "ontouchmove": 1,
            "ontouchend": 1,
            "onflingstart": 1,
            "onfling": 1,
            "onflingend": 1,
            "onpinchstart": 1,
            "onpinch": 1,
            "onpinchend": 1,
            "onlongpress": 1,
            "onslidestart": 1,
            "onslide": 1,
            "onslideend": 1
    };
    */

    //===============================================================
    // nexacro._ListView : Create/Destroy
    //===============================================================

    // [use inherit]


    //===============================================================
    // nexacro._ListView : NCChild
    //===============================================================

    // [Complex Component 처리]
    // NCChild를 Simple Component에서는 처리하지 않는다.
    // ScrollBar/TitleBar등을 Control로 NC위치에 등록시킨다.

    // [component.layout.ncchild:create]
    _pListView.onCreateNCHeadControl = function (child)
    {
        // user item create logic
        this.createNCHeadControl(new nexacro._ListViewHead("nchead", 0, 0, 0, 0, null, null, null, null, null, null, this));
    };

    //===============================================================
    // nexacro.ComplexComponent : Child
    //===============================================================

    // [component.layout.child:create]
    _pListView.onCreateChild = function ()
    {
        // child create
        /*
        if (this.headcontrol = this.createChildControl(new nexacro._ListViewHead("head", 0, 0, 0, 0, null, null, null, null, null, null, this)))
        {
            // attach event
            this.headcontrol._setEventHandler("onclick", this.on_notify_head_onclick, this);
        }
        */
    };


    //===============================================================
    // nexacro._ListView : Items
    //===============================================================

    // [개별 Component 처리]
    // Child는 생성/삭제 부분을 Override하여 처리
    
    _pListView.itemcount = 0;

    // [component.layout.items.itemcount:set]
    _pListView.set_itemcount = function (v)
    {
        if (v && v != this.itemcount)
        {
            // set property value
            this.itemcount = v;

            // [component.layout.items.itemcount:apply]
            this._on_apply_itemcount();
        }
    };

    // [component.layout.items.itemcount:apply] 
    _pListView._on_apply_itemcount = function ()
    {
        if (!this._is_created)
            return;
        
        // [component.layout.items:recreate]
        this._recreateItems();
    };

    // [component.layout.items:create]
    _pListView.onCreateItemBegin = function (ctxtdata, binddata)
    {
        if (!this.showhead && !this._is_subcontrol)
            return;

         // user before item create logic
        if (this.headcontrol = this.createItemControl(new nexacro._ListViewHead("head", 0, 0, 0, 0, null, null, null, null, null, null, this)))
        {
            // attach event
            this.headcontrol._setEventHandler("onclick", this.on_notify_head_onclick, this);

            return this.headcontrol;
        }
    };
    // [component.layout.items:create]
    _pListView.onCreateItemFinal = function (ctxtdata, binddata)
    {
        // user after item create logic
    };
    _pListView.onCreateItem = function (ctxtdata, binddata, index)
    {
        // user item create logic
        if (binddata && this.subgroup != "none")
        {
            var level = binddata._getLevelValue();  // levelcolumn
            var group = binddata._getGroupValue();  // groupcolumn
            var item = null;

            // range : leaf
            if (group == 0)
            {
                if (item = this.createItemControl(new nexacro._ListViewItem("item" + index, 0, 0, 0, 0, null, null, null, null, null, null, this), index))
                {
                    // attach event
                    item._setEventHandler("onclick", this.on_notify_item_onclick, this);

                    return item;
                }
            }
            // range : group
            if (group >= 1)
            {
                if (item = this.createItemControl(new nexacro._ListViewTitle("title" + index, 0, 0, 0, 0, null, null, null, null, null, null, this), index))
                {
                    // attach event
                    item._setEventHandler("onclick", this.on_notify_title_onclick, this);
                    item._setEventHandler("onpopup", this.on_notify_title_onpopup, this);

                    return item;
                }
            }
            // range : split
            if (group < 0)
            {
                if (item = this.createItemControl(new nexacro._ListViewSplit("split" + index, 0, 0, 0, 0, null, null, null, null, null, null, this), index))
                {
                    // attach event
                    item._setEventHandler("onclick", this.on_notify_split_onclick, this);

                    return item;
                }
            }
        }
        // range : nodata -> leaf
        {
            {
                if (item = this.createItemControl(new nexacro._ListViewItem("item" + index, 0, 0, 0, 0, null, null, null, null, null, null, this), index))
                {
                    // attach event
                    item._setEventHandler("onclick", this.on_notify_item_onclick, this);

                    return item;
                }
            }
        }
    };
    // [component.layout.items:destroy]
    _pComplexComponent.onDestroyItems = function ()
    {
        // unlink items
        this.headcontrol = null;
    };

    /*
    // [component.layout.items:index]
    _pListView._onSetItemIndex = function(item, index)
    {
        item._itemindex = index;
    };
    // [component.layout.items:index]
    _pListView._onGetItemIndex = function(item)
    {
        return item._itemindex;
    };
    */

    //===============================================================
    // nexacro.ComplexComponent : Items/Event
    //===============================================================

    // [component.event.items:notify]
    _pListView.on_notify_item_onclick = function (obj, e)
    {
    //  nexacro._notify('_ListView.on_notify_item_onclick');

        this.setSelect(this._getItemIndex(e.fromobject));
    };
    // [component.event.items:notify]
    _pListView.on_notify_title_onclick = function (obj, e)
    {
        nexacro._notify('_ListView.on_notify_title_onclick');
    };
    // [component.event.items:notify]
    _pListView.on_notify_title_onpopup = function (obj, e)
    {
    //  nexacro._notify('_ListView.on_notify_title_onpopup');

        this._setPanelGroupToggle(this._getItemIndex(e.fromobject));
    };
    // [component.event.items:notify]
    _pListView.on_notify_split_onclick = function (obj, e)
    {
        nexacro._notify('_ListView.on_notify_split_onclick');
    };



    //===============================================================
    // nexacro._ListView : Scroll
    //===============================================================

    // [상위 Component 처리]
    // Scroll의 기본적인 구성은 ComBase 에서 제공
    // User Component에서는 h/v scroll event만 Override

    /*
    _pListView._is_scrollable = true;
    _pListView._is_nc_scroll = true;            // NC Scroll 사용시 개별 지정, Override 필요.
    _pListView._use_scrollmanager = false;      // NC Scroll 사용시 개별 지정, Override 필요.
    _pListView._use_translate_move = true;

    _pListView.scrollbartype = undefined;
    _pListView.scrolltype = "both";
    _pListView.scrollbarsize = undefined;
    _pListView.scrollindicatorsize = undefined;
    */

    /*
    // [component.scroll.event.vscroll:fireevent]    // Scroll EventInfo 변경시 override
    _pComplexComponent._on_fire_onvscroll = function (obj, e)
    {
        if (this.onvscroll && this.onvscroll._has_handlers)
        {
            e.fromobject = this;
            this.onvscroll._fireEvent(this, e);
        }
        return true;
    };
 
    // [component.scroll.event.hscroll:fireevent]    // Scroll EventInfo 변경시 override
    _pComplexComponent._on_fire_onhscroll = function (obj, e)
    {
        if (this.onhscroll && this.onhscroll._has_handlers)
        {
            e.fromobject = this;
            this.onhscroll._fireEvent(this, e);
        }
        return true;
    };

    // [component.scroll.event.vscroll:basicaction]  // Scroll 별도 처리시 override
    _pComplexComponent._on_basic_onvscroll = function (pos)
    {
    };
    // [component.scroll.event.vscroll:defaultaction]// Scroll 별도 처리시 override
    _pComplexComponent._on_default_onvscroll = function (pos)
    {
        this.control_elem.setElementVScrollPos(pos);
    };

    // [component.scroll.event.hscroll:basicaction]  // Scroll 별도 처리시 override
    _pComplexComponent._on_basic_onhscroll = function (pos)
    {
    };
    // [component.scroll.event.hscroll:defaultaction]// Scroll 별도 처리시 override
    _pComplexComponent._on_default_onhscroll = function (pos)
    {
        this.control_elem.setElementHScrollPos(pos);
    };
    */

    //===============================================================
    // nexacro._ListView : Layout/Panel
    //===============================================================

    // [component.layout.panel:init]               
    _pListView._onInitPanelLayout = function ()
  	{
        var panel = this._getPanel();

  	    if (panel)
  	    {
            // TODO: Property 확정후 정리
  	        var rowfirst = this.rowfirst ? nexacro._PanelConst.SLOT_ARRANGETYPE_ROWFIRST : nexacro._PanelConst.SLOT_ARRANGETYPE_COLFIRST;
  	        var rowsize = this.rowsize;
  	        var colsize = this.colsize;
  	        var arrange = 0;
  	        var subgroup = 0;

  	        var arr = this.arrange ? a=this.arrange.split(",") : [];

  	        for (var i=0,l=arr.length; i<l; i++)
  	        {
  	            switch(arr[i])
  	            {
  	                case "horzlead"  : arrange |= nexacro._PanelConst.SLOT_ARRANGETYPE_HORZLEAD; break;
  	                case "horztail"  : arrange |= nexacro._PanelConst.SLOT_ARRANGETYPE_HORZTAIL; break;
  	                case "horzmiddle": arrange |= nexacro._PanelConst.SLOT_ARRANGETYPE_HORZAMID; break;
  	                case "horzinvert": arrange |= nexacro._PanelConst.SLOT_ARRANGETYPE_HORZINVT; break;
  	                case "horzaround": arrange |= nexacro._PanelConst.SLOT_ARRANGETYPE_HORZARND; break;
  	                case "horzgapped": arrange |= nexacro._PanelConst.SLOT_ARRANGETYPE_HORZGAPD; break;
  	                case "vertlead"  : arrange |= nexacro._PanelConst.SLOT_ARRANGETYPE_VERTLEAD; break;
  	                case "verttail"  : arrange |= nexacro._PanelConst.SLOT_ARRANGETYPE_VERTTAIL; break;
  	                case "vertmiddle": arrange |= nexacro._PanelConst.SLOT_ARRANGETYPE_VERTAMID; break;
  	                case "vertinvert": arrange |= nexacro._PanelConst.SLOT_ARRANGETYPE_VERTINVT; break;
  	                case "vertaround": arrange |= nexacro._PanelConst.SLOT_ARRANGETYPE_VERTARND; break;
  	                case "vertgapped": arrange |= nexacro._PanelConst.SLOT_ARRANGETYPE_VERTGAPD; break;
  	            }
  	        }

  	        switch (this.subgroup)
  	        {
  	            case "collpase" : subgroup = nexacro._PanelConst.GROUPING_SUBSTYLE_GROUP_COLLAPSE; break;
  	            case "expand"   : subgroup = nexacro._PanelConst.GROUPING_SUBSTYLE_GROUP_EXPAND; break;
  	            case "popup"    : subgroup = nexacro._PanelConst.GROUPING_SUBSTYLE_GROUP_POPUP; break;
            }


  	        // TODO: RuleBased Socketing 처리
  	        panel._setLayoutType(nexacro._PanelConst.LAYOUTSTYLE_ROWCOL);
  	        panel._setSizeInfoRefPanel(null, nexacro._PanelConst.SIZEINFO_REFSTYLE_NOLINK);
  	        panel._setGroupingSubPanel(null, subgroup, nexacro._PanelConst.GROUPING_SUBPLACE_NONE);
  	        panel._setSlotArrangeType(rowfirst | arrange);
  	        panel._setSlotVisibleType(nexacro._PanelConst.SLOT_VISIBLETYPE_HIDESLOT);
  	        panel._setSlotOverFlowType(nexacro._PanelConst.SLOT_OVERFLOWTYPE_SCROLL | nexacro._PanelConst.SLOT_OVERFLOWTYPE_FULLSLOT);
  	        panel._setSlotAutoSizeType(nexacro._PanelConst.SLOT_AUTOSIZETYPE_HORZFIT);
  	    //  panel._setSlotAutoFillType(nexacro._PanelConst.SLOT_AUTOFILLTYPE_DEFAULT);
  	        panel._setSlotSizeMoveType(nexacro._PanelConst.SLOT_SIZEMOVETYPE_NONE);

  	        if (colsize && colsize.length)
  	            panel._resetPanelColSizeArray(colsize.length, colsize);
            else
  	            panel._resetPanelColSize(0);

  	        if (rowsize && rowsize.length)
  	            if (this._is_subcontrol)
                    if (this.showhead)
                        panel._resetPanelRowSize(1, 40);
                    else
                        panel._resetPanelRowSizeArray(2, [0, rowsize[1]], this.itemheight, 1);
                else
          	        panel._resetPanelRowSizeArray(rowsize.length, rowsize, this.itemheight, this.showhead ? 1 : 0);
            else
                panel._resetPanelRowSize(0);

  	        panel._setPanelTitleSize(30);
  	        panel._setPanelSplitSize(5);
        }
    };

     // [component.layout.panel:subinit]               
    _pListView._onInitSubPanelNCChildLayout = function (ncchild, panel)
    {
        // set ncchild panel link
    };
    // [component.layout.panel:subinit]               
    _pListView._onInitSubPanelChildLayout = function (child, panel)
    {
        // set parent/child panel link
    };
    // [component.layout.panel:subinit]               
    _pListView._onInitSubPanelItemsLayout = function (item, panel, binddata, index)
    {
        if (item)
        {
            if (this.headcontrol)
            {
                item._setPanelSizeRefInfoLink(this.headcontrol, nexacro._PanelConst.SIZEINFO_REFSTYLE_COLLINK);
            }
        }
    };
    // [component.layout.panel.popup:subinit]               
    _pListView._onInitPopupSubPanelNCChildLayout = function (parent, startindex, startlevel)
    {
    };
    // [component.layout.panel.popup:subinit]               
    _pListView._onInitPopupSubPanelChildLayout = function (parent, startindex, startlevel)
    {
    };
    // [component.layout.panel.popup:subinit]               
    _pListView._onInitPopupSubPanelItemsLayout = function (parent, startindex, startlevel)
    {
    };

    //===============================================================
    // nexacro.ComplexComponent : Layout/Popup
    //===============================================================

    // [Complex Component 처리]
    // Container Element를 Panel의 구현요소로 이용해 Layout 배치를 처리한다.
    // Panel 동작은 Rule Base Interface로 Socketing 구조로 확장한다.


    // [component.layout.panel.popup:create]        // Override 처리
    _pListView._onCreatePopup = function ()
  	{
  	    var popup = null;
       
  	    if (popup = this._createPopupControl(new nexacro._PanelPopupControl("panelpopup", 0, 0, 0, 0, null, null, null, null, null, null, this)))
  	    {
  	        return popup;
        }
  	};

    // [component.layout.panel.subgroup:create]     // Override 처리
    _pListView._onCreatePopupChild = function ()
  	{
  	    // create self complex component
  	    var child = null;
       
  	    if (child = this._createPopupCloneControl(new this.constructor("popupchild", 0, 0, 0, 0, null, null, null, null, null, null, this)))
  	    {
  	        return child;
        }
  	};

    // [component.layout.panel.subgroup:clone]      // Override 처리
    _pListView._onCloneProperities = function (source)
    {
        this.set_innerdataset(source.innerdataset);
        this.set_codecolumn(source.codecolumn);
        this.set_datacolumn(source.datacolumn);
        this.set_levelcolumn(source.levelcolumn);
        this.set_groupcolumn(source.groupcolumn);

        this.set_rowfirst(source.rowfirst);
        this.set_subgroup(source.subgroup);
        this.set_showhead(source.showhead);
        this.set_arrange(source.arrange);
        this.set_rowsize(JSON.stringify(source.rowsize));
        this.set_colsize(JSON.stringify(source.colsize));
    };

    //===============================================================
    // nexacro._ListView : Layout/Split
    //===============================================================

    // [Complex Component 처리]
    // Resize Element를 Split의 구현요소로 이용해 Layout 크기변경을 처리한다.
    // Split 동작은 각 Control에 크기변경을 주고 Panel에 의해 Layout 재처리된다.

    //===============================================================
    // nexacro._ListView : Layout/Sizing
    //===============================================================

    // [Complex Component 처리]
    // Panel/Arrangemenet/Autosize/MinMax의 기능을 이용해 Layout 크기를 처리한다.
    // Arrangemenet/Autosize/MinMax의 결과가 크기변경을 주고 Panel에 의해 Layout 최종처리된다.

    //===============================================================
    // nexacro._ListView : Layout/Move
    //===============================================================

    // [Complex Component 처리]
    // DragDrop의 구현요소로 이용해 Layout 이동변경을 처리한다.
    // DragDrop 동작은 각 Control에 위치변경을 주고 Panel에 의해 Layout 재처리된다.



    //===============================================================
    // nexacro._ListView : Formats
    //===============================================================

    // [상위 Component 처리]
    // Formats는 Complex Component에서 제공

    // [개별 Component 처리]
    // override 대상과 property/method 노출처리

    // [component.formats:set]   
    _pListView.set_formats = function (str)
    {		
        if (this.formats != str)
        {
            // set property value
            this.formats = str;
 
            // [component.formats:set]
            this._setFormats(this.formats);
 
            // [component.formats:apply]           
            this.on_apply_formats();
        }       
     };
 
     // [component.formats:apply]   
    _pListView.on_apply_formats = function ()
    {
        if (!this._is_created)
            return;

        // [component.formats:recreate]
        this._recreateItems();
    };

    // [component.bind.innerbind.binddataset:detach]   
    _pListView.on_clear_formats = function ()
    {
        this._clearFormats();
    };

    // [component.formats.formatid:set]   
    _pListView.set_formatid = function (v)
    {
        if (v && v != this.formatid)
        {
            // set property value
            this.formatid = v;

            // [component.formats.formatid:set]
            this._changeFormatId(this.formatid);

            // [component.formats.formatid:apply]
            this._on_apply_formatid();
        }
    };
    // [component.formats.formatid:apply]   
    _pListView._on_apply_formatid = function ()
    {
        if (!this._is_created)
            return;

        // [component.formats.formatid:change]  
        this._changeFormatId(this.formatid);
    };
    // [component.formats.formatid:clear]   
    _pListView.on_clear_formatid = function ()
    {
        if (!this._is_created)
            return;

        // [component.formats.formatid:clear] 
        this._clearFormatId();
    };


    //===============================================================
    // nexacro._ListView : InnerBind/FullBind
    //===============================================================

    // [상위 Component 처리]
    // value bind는 Simple Component 기본으로 제공
    // inner bind/full bind도 Complex Component에서 제공

    // [개별 Component 처리]
    // override 대상과 bind별 property/method 노출처리
    // bind 처리는 상위 interface를 사용

    // [component.bind.innerbind:initprop]   
    _pListView._is_databind = true;
    _pListView._is_fullbind = false;
    _pListView._is_levelbind = true;

    /*
    // [component.bind.valuebind:init]              // value property가 없거나 다른 property로 처리시 override
    _pListView._onGetBindableProperties = function ()      // 왜 Properties 복수지??
    {
        return "value";
    };

    // [component.bind.databind:init]               // innerbind/fullbind시 override
    _pListView._onGetBindDataSource = function ()
    {
        return this.innerdataset;
    };
    // [component.bind.databind:init]               // innerbind/fullbind시 override
    _pListView._onGetCodeColumn = function ()
    {
        return this.codecolumn;
    };
    // [component.bind.databind:init]               // innerbind/fullbind시 override
    _pListView._onGetCodeProp = function ()
    {
        return "codecolumn";
    };
    // [component.bind.databind:init]               // innerbind/fullbind시 override
    _pListView._onGetLevelColumn = function ()
    {
        return this.levelcolumn;
    };
    // [component.bind.databind:init]               // innerbind/fullbind시 override
    _pListView._onGetLevelProp = function ()
    {
        return "levelcolumn";
    };
    // [component.bind.databind:init]               // innerbind/fullbind시 override
    _pListView._onGetGroupColumn = function ()
    {
        return this.groupcolumn;
    };
    // [component.bind.databind:init]               // innerbind/fullbind시 override
    _pListView._onGetGroupProp = function ()
    {
        return "groupcolumn";
    };
    */

    // [component.bind.databind:init]               // innerbind/fullbind시 override
    _pListView._onGetDataColumns = function ()
    {
        return [this.datacolumn];
    };
    // [component.bind.databind:init]               // innerbind/fullbind시 override
    _pListView._onGetDataProps = function ()
    {
        return ["datacolumn"];
    };
   

    // [component.bind.databind:init]               // innerbind시 override
    /*
    _pListView._onGetCodeBindInfo = function ()
    {
        return this.createCodeBindInfo();
    };
    _pListView._onGetLevelBindInfo = function ()
    {
        return this.createLevelBindInfo();
    };
    _pListView._onGetGroupBindInfo = function ()
    {
        return this.createGroupBindInfo();
    };
    */
    _pListView._onGetDataBindInfos = function ()
    {
        return  [
                this.createItemBindInfo("", "groupcolumn"),
                this.createItemSubControlBindInfo("textcontrol", "text", "datacolumn"),
                this.createItemSubControlBindInfo("desccontrol", "text", "levelcolumn")
                ];
    };

    /*
    // [component.bind.innerbind.event:load]   
    _pListView._callback_onload = function (obj, e)
    {
        if (e.reason == 0)
        {
            // [component.bind.innerbind.event:load]   
            this._recreateItems();
        }
    };
    // [component.bind.innerbind.event:rowsetchanged]   
    _pListView._callback_onrowsetchanged = function (obj, e)
    {
    	if (e.reason != 41)  //nexacro.Dataset.REASON_ENABLEEVENT  : enableevent 시 fire rowsetchanged -> valuechanged 
    	{
    	    // [component.bind.innerbind.event:load]   
    	    this._recreateItems();
    	}
    };
    // [component.bind.innerbind:rowsetchanged]   
    _pListView._callback_onvaluechanged = function (obj, e)
    {
    //  if (e.reason == 0)
        {
            if (this._is_databind && this._is_created)
            {
                // [component.bind.innerbind.event:load]   
                this._recreateItems();
            }
        }
    };
    */

    // TODO: Interface Socketing으로 통합시킬것
    // [component.bind.innerbind:initprop]   
    _pListView.innerdataset = null;
    _pListView.codecolumn = "";
    _pListView.datacolumn = "";
    _pListView.levelcolumn = "";
    _pListView.groupcolumn = "";

    // [component.bind.innerbind.dataset:set]   
    _pListView.set_innerdataset = function (str)
    {		
    	if (this.innerdataset != str)
    	{
            // set property value
    	    this.innerdataset = str;

    	    // [component.bind.dataset:apply]           
    	    this.on_apply_innerdataset();
		}       
    };

    // [component.bind.innerbind.dataset:apply]   
    _pListView.on_apply_innerdataset = function ()
    {
        // [component.bind.dataset:set]
        this._setBindDataSource();

        if (!this._is_created)
            return;

        // [component.bind.innerbind:recreate]   
        this._recreateItems();
    };

    // [component.bind.innerbind.binddataset:detach]   
    _pListView.on_clear_innerdataset = function ()
    {
        this._clearBindDataSource();
    };

    // [component.bind.innerbind.codecolumn:set]   
    _pListView.set_codecolumn = function (v)
    {
        if (v && v != this.codecolumn)
        {
            // set property value
            this.codecolumn = v;

            // [component.bind.codecolumn:apply]
            this.on_apply_codecolumn();
        }
    };
    // [component.bind.innerbind.levelcolumn:set]   
    _pListView.set_levelcolumn = function (v)
    {
        if (v && v != this.levelcolumn)
        {
            // set property value
            this.levelcolumn = v;

            // [component.bind.levelcolumn:apply]
            this.on_apply_levelcolumn();
        }
    };
    // [component.bind.innerbind.datacolumn:set]   
    _pListView.set_groupcolumn = function (v)
    {
        if (v && v != this.groupcolumn)
        {
            // set property value
            this.groupcolumn = v;

            // [component.bind.levelcolumn:apply]
            this.on_apply_groupcolumn();
        }
    };
    // [component.bind.innerbind.datacolumn:set]   
    _pListView.set_datacolumn = function (v)
    {
        if (v && v != this.datacolumn)
        {
            // set property value
            this.datacolumn = v;

            // [component.bind.datacolumn:apply]
            this.on_apply_datacolumn();
        }
    };

    // [component.bind.innerbind.codecolumn:apply]   
    _pListView.on_apply_codecolumn = function ()
    {
        // [component.bind.codecolumn:set]
        this._setCodeColumn();

        if (!this._is_created)
            return;

        // [component.valuebind:change]  
        this._applyValue();
    };
   // [component.bind.innerbind.levelcolumn:apply]   
    _pListView.on_apply_levelcolumn = function ()
    {
        // [component.bind.levelcolumn:set]
        this._setLevelColumn();

        if (!this._is_created)
            return;

        // [component.layout.items:recreaet]
        this._recreateItems();
    };
    // [component.bind.innerbind.datacolumn:apply]   
    _pListView.on_apply_groupcolumn = function ()
    {
        // [component.bind.datacolumn:set]
        this._setDataColumn();

        if (!this._is_created)
            return;

        // [component.layout.items:recreaet]
        this._recreateItems();
    };
    // [component.bind.innerbind.datacolumn:apply]   
    _pListView.on_apply_datacolumn = function ()
    {
        // [component.bind.datacolumn:set]
        this._setDataColumn();

        if (!this._is_created)
            return;

        // [component.layout.items:recreaet]
        this._recreateItems();
    };

    // [component.bind.innerbind.codecolumn:clear]   
    _pListView.on_clear_codecolumn = function ()
    {
        if (!this._is_created)
            return;

        // [component.bind.innerbind.codecolumn:clear]   
        this._clearCodeColumn();
    };
    // [component.bind.innerbind.levelcolumn:clear]   
    _pListView.on_clear_levelcolumn = function ()
    {
        if (!this._is_created)
            return;

        // [component.bind.innerbind.datacolumn:clear]   
        this._clearLevelColumn();
    };
    // [component.bind.innerbind.datacolumn:clear]   
    _pListView.on_clear_groupcolumn = function ()
    {
        if (!this._is_created)
            return;

        // [component.bind.innerbind.datacolumn:clear]   
        this._clearDataColumn();
    };
    // [component.bind.innerbind.datacolumn:clear]   
    _pListView.on_clear_datacolumn = function ()
    {
        if (!this._is_created)
            return;

        // [component.bind.innerbind.datacolumn:clear]   
        this._clearDataColumn();
    };


    //===============================================================
    // nexacro._ListView : Select (Single/Multi)
    //===============================================================

    // [상위 Component 처리]
    // Select 사용시 Interface 제공
    // Select의 Single/Multi 여부는 Component의 Simple/Complex 여부와 무관
    // Select의 정보구성은 각 Component별 정보에 따름
    /*
    // [component.select:init]                      // 동일 interface 유지
    _pListView.multiselect = false;                // MultiSelect 지원시 추가, Ctrl Action 처리
    _pListView.rangeselect = false;                // RangeSelect 지원시 추가, Drag Action 처리
    _pListView.selectscrollmode = "default";       // Scroll/Select 동시지원시 추가

    // [component.select:get]
    _pListView.getSelect() = function ()
    {
        return _selectInfo;                         // 동일 member 유지
    }
    // [component.select:clear]
    _pListView.clearSelect() = function ()
    {
        return _selectInfo.clear();
    }
    // [component.select:set]
    _pListView.setSelect(pos,val) = function ()
    {
        return _selectInfo.setSelect(pos,val);
    }
    // [component.select:check]
    _pListView.isAboveSelected = function ()
    {

    };
    // [component.select:change]
    _pListView._onGetCurrentSelectPos() = function ()
    {
        return [pos];                               // select data 구성은 component별로 다름
        return [pos1,pos2];
        return [pos1,pos2,pos3];
    }
    // [component.select:chagerange]
    _pListView._onGetCurrentSelectStartPos() = function ()
    {
        return [pos];
        return [pos1,pos2];
        return [pos1,pos2,pos3];
    }
    // [component.select:changerange]
    _pListView._onGetCurrentSelectEndPos() = function ()
    {
        return [pos];
        return [pos1,pos2];
        return [pos1,pos2,pos3];
    }
    */
    //===============================================================
    // nexacro._ListView : Interface Logic Override
    //===============================================================

    // [개별 Component 처리]
    // 해당 interface별 변경이 요구될때 Override 처리
    /*
    // [component.dlgcode:init]                     // dlgcode 설정값 변경이 필요하면 override, default는 모두 false
    _pListView._onGetDlgCode = function (keycode, altKey, ctrlKey, shiftKey)
    {
        return { want_tab: true, want_return: true, want_escape: true, want_chars: true, want_arrows: true };
    };

    // [component.dragdrop:getdragdata]             // drag 허용시 drag data
    _pListView._onGetDragData = function ()
    {
        return this.getSelectedText();
    };

    // [component.tabstop:get]                      // Accessibility 용 별도 처리시 override
    _pListView._onGetTabstop = function ()
    {
        // [component.accessibility.tabstop:get]
        if (nexacro._enableaccessibility)
        {
            var accessibility = this.accessibility;
            if (accessibility && accessibility.enable && accessibility.role == "link")
                return true;
        }
        return false;
    };

    // [component.focus:get]                        // Accessibility 용 별도 처리시 override
    _pListView._onGetFocusAcceptable = function ()
    {
        // [component.accessibility.focus:get]
        return nexacro._enableaccessibility;
    };

    // [component.hotkey:action]                    // hotkey 기본 Action 변경시 override
    _pListView._onHotkey = function (keycode, altKey, ctrlKey, shiftKey)
    {
        // [component.hotkey:action]
        this.click();
    };
    */

    //===============================================================
    // nexacro._ListView : Accessibility (추후제공)
    //===============================================================

    // [개별 Component 처리]
    // 접근성용 Interface 일부 Override 처리

    /* 상위 Component 처리
    // [object.accessibility:init]
  	_pComponent._initAccessibility = function ()    // Basic Component 에서 Override
  	{
        this._accessibility_role = "RoleName";      // Basic Component 에서 Role 지정
    
   	    onInitAccessibility();                      // User Accessibility 처리시 Override
  	};
    */

    /*
    // [object.accessibility.label:get]
    _pListView._onGetAccessibilityLabel = function ()
    {
        var label = this.text ? this.text : this.value;
        return label;
    };
    // [object.accessibility.role:getadd]
    _pListView._onGetAccessibilityAdditionalRole = function ()
    {
        return " addrole";
    };
    */

    //===============================================================
    // nexacro._ListView : RTL/Locale (추후제공)
    //===============================================================

    // [상위 Component 처리]
    // Simple Component의 RTL/Locale은 ClientElement 대상으로만 처리
    // Basic Component에서만 처리되며 User Component에서는 별도 처리가 없다.

    // 상세 추후 추가


    // [하위 Component 처리]
    // Basic Component에서만 RTL Interface 일부 Override 처리

    // 상세 추후 추가


    //===============================================================
    // nexacro._ListView : Status
    //===============================================================

    // [Simple Component 처리]
    // 상태는 기본적으로 Basic Component에서 모두 제공하도록 구성
    // User Component에서는 추가된 UserStatus를 사용만 코딩하며 Metainfo에만 노출
    // 명시적인 상태를 추가하려면 Property/Method Interface를 이용하여 처리한다.



    //===============================================================
    // nexacro._ListView : Property
    //===============================================================

    // [상위 Component 처리]
    // Component Stock이나 상위 Componnet의 DefaultValue를 바꾸고자 하면 Override 하여 처리

    /*
    // [object.property:create]
  	_pComponent._initProperties = function ()
  	{
        this.stock_prop1 = DEFAULT_VALUE;           // Component Stock Normal Property Init (여기서 해야하나?)
        this.stock_prop2 = DEFAULT_VALUE;           
        
   	    onInitProperties();                         // Property 추가시 Override
  	};
    // [object.property:apply]
  	_pComponent._applyProperties = function ()
  	{
        this.on_apply_stock_prop1();                // Component Stock Normal Property Apply
        this.on_apply_stock_prop2();

   	    onApplyProperties();                        // Property 추가시 Override
  	};
    // [object.property:clear]
  	_pComponent._clearProperties = function ()
  	{
        this.on_clear_stock_prop1();                // Component Stock Normal Property Clear (없을것임)
        this.on_clear_stock_prop2();

   	    onClearProperties();                        // 별도의 clear 처리시 Override
  	};
    */

    // [하위 Component 처리]
    // Premitive형 Property이면 생성만 처리
    // new/delete가 요구되는 Property이면 생성/삭제까지 처리

    // [object.property:init]                       // Property 추가시 Override
    _pListView.onInitProperties = function ()
    {
        // init interface prop
        /*
        this.innerdataset = null;
        this.codecolumn = "";
        this.datacolumn = "";
        this.levelcolumn = "";
        this.groupcolumn = "";
        */
        this.rowfirst = false;
        this.showhead = true;
        this.arrange = 0;
        this.subgroup = 0;
        this.rowsize = [40,30];
        this.colsize = [];
    };
    // [object.property:apply]                      // Property 추가시 Override
    _pListView.onApplyProperties = function ()
    {
        this.on_apply_innerdataset();
        this.on_apply_codecolumn();
        this.on_apply_levelcolumn();
        this.on_apply_datacolumn();
        this.on_apply_groupcolumn();
    };
    // [object.property:clear]                      // 별도의 clear 처리시 생성
    _pListView.onClearProperties = function ()
    {
        // clear property
        this.on_clear_innerdataset();
        this.on_clear_codecolumn();
        this.on_clear_levelcolumn();
        this.on_clear_datacolumn();
        this.on_clear_groupcolumn();
    };

    _pListView.set_rowfirst = function (v)
    {
        var _v = nexacro._toBoolean(v);

        if (_v != this.rowfirst)
        {
            // set property value
            this.rowfirst = _v;
        }
    };
    _pListView.set_showhead = function (v)
    {
        var _v = nexacro._toBoolean(v);

        if (_v != this.showhead)
        {
            // set property value
            this.showhead = _v;
        }
    };
    _pListView.set_arrange = function (v)
    {
        if (v && v != this.arrange)
        {
            // set property value
            this.arrange = v;
        }
    };
    _pListView.set_subgroup = function (v)
    {
        if (v && v != this.subgroup)
        {
            // set property value
            this.subgroup = v;
        }
    };
    _pListView.set_rowsize = function (v)
    {
        if (v && v != this.rowsize)
        {
            // set property value
            this.rowsize = JSON.parse(v);
        }
    };
    _pListView.set_colsize = function (v)
    {
        if (v && v != this.colsize)
        {
            // set property value
            this.colsize = JSON.parse(v);
        }
    };

    //===============================================================
    // nexacro._ListView : Methods
    //===============================================================

    // [하위 Component 처리]
    // Method 추가 처리
    // Status 를 명시적으로 추가하고자 할때에는 Proeprty/Method로 처리
    /*
    // [method:call]
    _pListView.click = function ()
    {
        // method user logic

        // [event:call]
        this.on_fire_click("none", false, false, false, -1, -1, -1, -1, -1, -1, this, this);
    };

    // [method:get]
    _pListView.getAMethod = function ()
    {
        // [property:get]
        return this._A;
    };

    // [method:set]
    _pListView.setAStatus = function (v)
    {
        // [property:set]
        var ret = this._A;
        this._A = v;

        // [status:change]
        this._changeUserStatus("Status1", v);

        return ret;
    };
    */

    //===============================================================
    // nexacro._ListView : Events
    //===============================================================

    // [상위 Component 처리]
    // 기본 System Event Handler는 Basic Component에서 모두 처리하며 User Component에서 이의 수정은 제공하지 않는다.
    // 모든 Event Handler는 Override 가능한 FireAction/DefaultAction/BasicAction Handler를 제공한다.

    // [하위 Component 처리]
    // 이벤트 하위추가는 기존 event_list을 재정의하여 추가
    // 이벤트 하위삭제는 없으며, Metainfo에서만 삭제처리
    // EventInfo 변경, Action 변경시 Override 처리
    // Element 코드는 반드시 Basic Component에서만 허용

    // [object.event:init]
    _pListView._initEvents = function ()           // Event 추가시 Override
    {
        this._event_list =
        {
            "onclick": 1, "ondblclick": 1, "onkillfocus": 1, "onsetfocus": 1,
            "oninput": 1, "onkeydown": 1, "onkeyup": 1,
            "onlbuttondown": 1, "onlbuttonup": 1, "onrbuttondown": 1, "onrbuttonup": 1,
            "onmousedown": 1, "onmouseup": 1,
            "onmouseenter": 1, "onmouseleave": 1, "onmousemove": 1, "onmousewheel": 1,
            "ondrag": 1, "ondragenter": 1, "ondragleave": 1, "ondragmove": 1, "ondrop": 1,
            "onmove": 1, "onsize": 1, "oncontextmenu": 1,
            "ontouchstart": 1, "ontouchmove": 1, "ontouchend": 1,

            // [event:init]
            "onnewevent": 1
            // [event/]
        };

    //  _onInitEvents();                            // 현재 Event 추가 방식 유지시 이 Override는 없음
    };

    /*
    // [component.clickevent:basicaction]
    _pListView._on_basic_onclick = function (button, alt_key, ctrl_key, shift_key, canvasX, canvasY, screenX, screenY)
    {
        // user basic action
    };
    // [component.clickevent:defaultaction]
    _pListView._on_default_onclick = function (button, alt_key, ctrl_key, shift_key, canvasX, canvasY, screenX, screenY)
    {
        // user default action
    };
    // [component.clickevent:fireevent]
    _pListView.on_fire_onclick = function (button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp)
    {
        if (this.onclick && this.onclick._has_handlers)
        {
            // [component.eventinfo:create]         // User EventInfo 코드
            var evt = new nexacro.ListViewClickEventInfo(this, "onclick", button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientXY[0], clientXY[1], this, this);

            return this.onclick._fireEvent(this, evt);
        }
        return true;
    };

    // [component.mouseevent:fireevent]             // Event Override (왜 따로하지?)
    _pListView.on_fire_sys_onmouseup = function (button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp)
    {
        if (this.onmouseup && this.onmouseup._has_handlers)
        {
            var rootComp = this._getRootComponent(from_comp);

            // [event:eventinfo]                    // User EventInfo 코드
            var evt = new nexacro.UserMouseEventInfo(rootComp, "onmouseup", button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp);

            return this.onmouseup._fireSysEvent(this, evt);
        }
        return false;
    };
    // [component.mouseevent:fireevent]             // Event Override (왜 따로하지?)
    _pListView.on_fire_user_onmouseup = function (button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp)
    {
        if (this.onmouseup && this.onmouseup._has_handlers)
        {
            var rootComp = this._getRootComponent(from_comp);

            // [component.eventinfo:create]         // User EventInfo 코드
            var evt = new nexacro.UserMouseEventInfo(rootComp, "onmouseup", button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp);

            return this.onmouseup._fireUserEvent(this, evt);
        }
        return false;
    };
    */

    //===============================================================
    // nexacro._ListView : Inner Logic
    //===============================================================



    delete _pListView;
};


