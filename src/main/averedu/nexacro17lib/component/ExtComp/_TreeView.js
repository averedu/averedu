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


if (!nexacro._TreeViewCellControl)
{
    //==============================================================================
    // nexacro._TreeViewCellControl
    //==============================================================================

    /* template comment
    // [interface:status]               : template code inteface comment
    // [interface.subinterface:status]  : sub interface comment
    // [interface/]                     : close comment
    */
 
    // [object.inherit:create]
    nexacro._TreeViewCellControl = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent)
    {
        nexacro._CellControl.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent);
    };

    // [object.prototype:create]
    var _pTreeViewCellControl = nexacro._createPrototype(nexacro._CellControl, nexacro._TreeViewCellControl);
    nexacro._TreeViewCellControl.prototype = _pTreeViewCellControl;

    // [component.typename:create]
    _pTreeViewCellControl._type_name = "_TreeViewCellControl";
    _pTreeViewCellControl._is_subcontrol = true;

    _pTreeViewCellControl._use_selected_status = true;
    _pTreeViewCellControl._use_readonly_status = false;

    //===============================================================
    // nexacro._TreeViewCellControl : Inner Logic
    //===============================================================

    // [component.contents:create]
    _pTreeViewCellControl.on_create_contents = function ()
    {
        // [component.contents:init]
        this._setAddedCreateInfo(this.parent, this.parent._treecellinfo);

        // [component.contents:create]
        nexacro._CellControl.prototype.on_create_contents.call(this);
    };
    // [component.contents:destroy]
    _pTreeViewCellControl.on_destroy_contents = function ()
    {
        // [component.contents:destroy]
        nexacro._CellControl.prototype.on_destroy_contents.call(this);

        // [component.contents:uninit]
        this._clearAddedCreateInfo();
    };
 
    _pTreeViewCellControl._setAddedCreateInfo = function (comp, cellinfo)
    {
        // init cell
        this._refinfo = cellinfo;
        this._view = comp.parent;
        this._rowidx = comp._rowidx;
        /*
        this._band = comp._band;
        this._cellidx = ctxt._index;
        this._varbind = null;
        this._expand_width = 0;
        this._subComp = null;
        this._text_elem = null;
        this._curDisplayType = "";
        this._curEditDisplay = "";
        this._expandCtrl = null;
        this._isSubCell = false;
        this._disp_show = true;
        this._fakecell = false;
        this._hideInner = false;
        this._is_real_upelem = null;
        this._clickcall = false;
        this._is_clickproc = false;
        this._mouse_evt_change_pseudo = false;
        this._refresh_display = false;
        */
    };
    _pTreeViewCellControl._clearAddedCreateInfo = function ()
    {
        // clear cell
        this._refinfo = null;
        this._view = null;
        /*
        this._band = null;
        */
    };

    // [component.bind.valuebind:initprop]          
    _pTreeViewCellControl._onGetBindableProperties = function ()
    {
        return "text";
    };

    _pTreeViewCellControl._applyEditor = function (async)
    {
        // TODO : 아래형식으로 변경할것.
        /*
        if (this._editor)
        {
            this._editor._setDataset(async);
        }
        */

        if (this._editor && this._view && this._varbind)
        {
            this._view._setBindData(this._getDataRow(), this._varbind, this._editor._getValueData());
            this._editor._EditUpdateAll();
            this._view._getBindData(this._getDataRow());
        }
    };

    // [component.action:getcell]
    _pTreeViewCellControl._getActionCell = function (from_cell)
    {
        var cellobj = from_cell;
        while (cellobj && cellobj._type_name != this._type_name)
        {
            if (cellobj == this)
            {
                break;
            }

            if (cellobj._cellobj && cellobj._cellobj._is_alive && cellobj._cellobj._type_name == this._type_name)
            {
                cellobj = cellobj._cellobj;
                break;
            }

            cellobj = cellobj.parent;
        }

        if (cellobj && cellobj._type_name == this._type_name)
        {
            if (cellobj.parentcell)
            {
                cellobj = cellobj.parentcell;
            }
        }

        return cellobj;
    };
    // [component.action:editcell]
    _pTreeViewCellControl._actionEditCell = function (cell, trigger)
    {
        switch (trigger)
        {
            case "setfocus":
            {
                if (cell && cell._hasEditor())
                {
                    cell._showEditor(true);
                }
                break;
            }
            case "killfocus":
            {
                if (cell && cell._isShowEditor())
                {
                    cell._applyEditor(true);
                    cell._hideEditor(true);
                }
                break;
            }
            case "lbuttondown":
            case "lbuttonup":
            {
                if (cell)
                {
                    cell.setFocus(false, false);
                }
                break;
            }
            case "enterkey":
            {
                if (cell && cell._isShowEditor())
                {
                    cell._applyEditor(true);
                }
                break;
            }
            case "tabkey":
            {
                if (cell && cell._hasEditor())
                {
                    cell._showEditor(true);
                }
                break;
            }
        }
    };

    //===============================================================
    // nexacro._TreeViewCellControl : Override
    //===============================================================

    // TODO : 아래부분 사용되지 않도록 cell 구조변경할것
    /*
    _pTreeViewCellControl._isEnable = function ()
    {
        if (this._view)
            return this._view._enable;

        return true;
    };
    */

    _pTreeViewCellControl.set_treetext = function (v)
    {
        if (v && v != this.treetext)
        {
            // set property value
            this.treetext = v;

            // apply value
            this.on_apply_treetext();
        }
    };
    _pTreeViewCellControl.set_treeicon = function (v)
    {
        if (v && v != this.treeicon)
        {
            // set property value
            this.treeicon = v;

            // apply value
            this.on_apply_treeicon();
        }
    };

    _pTreeViewCellControl.on_apply_treetext = function ()
    {
        if (!this._is_created)
            return;

        if (this._subComp && this._subComp._text_ctrl)
            this._subComp._text_ctrl.set_text(this.treetext);
    };
    _pTreeViewCellControl.on_apply_treeicon = function ()
    {
        if (!this._is_created)
            return;

        if (this._subComp && this._subComp._img_ctrl)
            this._subComp._load_image(this._subComp._img_ctrl, this.treeimage);
    };

    //===============================================================
    // nexacro._TreeViewCellControl : Event
    //===============================================================

    // Event Handler 처리는 
    //   - 최대한 Action+Condition의 일률패턴형 처리
    //   - 최대한 상위제어가 아닌 상위인지 없이 처리
    //   - 최대한 Common/Bubble 에서 일괄제어형 처리

    _pTreeViewCellControl.on_focus_basic_action = function (self_flag, evt_name, lose_focus, refer_lose_focus, new_focus, refer_new_focus)
    {
        // def basic action
        var ret = nexacro._CellControl.prototype.on_focus_basic_action.call(this, self_flag, evt_name, lose_focus, refer_lose_focus, new_focus, refer_new_focus);

        // own basic action
        this._actionEditCell(this._getActionCell(refer_new_focus), "setfocus");
    };
    _pTreeViewCellControl.on_killfocus_basic_action = function (new_focus, new_refer_focus)
    {
        // def basic action
        var ret = nexacro._CellControl.prototype.on_killfocus_basic_action.call(this, new_focus, new_refer_focus);

        // own basic action
        this._actionEditCell(this._getActionCell(this), "killfocus");
    };


    _pTreeViewCellControl.on_lbuttondown_basic_action = function (elem, button, alt_key, ctrl_key, shift_key, canvasX, canvasY, screenX, screenY, refer_comp)
    {
        // def basic action
        var ret = nexacro._CellControl.prototype.on_lbuttondown_basic_action.call(this, elem, button, alt_key, ctrl_key, shift_key, canvasX, canvasY, screenX, screenY, refer_comp);

        // own basic action
        this._actionEditCell(this._getActionCell(refer_comp), "lbuttondown");
    };
    _pTreeViewCellControl.on_lbuttonup_basic_action = function (elem, button, alt_key, ctrl_key, shift_key, canvasX, canvasY, screenX, screenY, refer_comp)
    {
        // def basic action
        var ret = nexacro._CellControl.prototype.on_lbuttonup_basic_action.call(this, elem, button, alt_key, ctrl_key, shift_key, canvasX, canvasY, screenX, screenY, refer_comp);

        // own basic action
        this._actionEditCell(this._getActionCell(refer_comp), "lbuttonup");
    };

    _pTreeViewCellControl.on_change_containerRect = function (width, height)
    {
        // def basic action
        nexacro._CellControl.prototype.on_change_containerRect.call(this, width, height);

        // own basic action
        this._updateAll();
    };

    delete _pTreeViewCellControl;
};


if (!nexacro._TreeViewItem)
{
    //==============================================================================
    // nexacro._TreeViewItem
    //==============================================================================

    /* template comment
    // [interface:status]               : template code inteface comment
    // [interface.subinterface:status]  : sub interface comment
    // [interface/]                     : close comment
    */
 
    // [object.inherit:create]
    nexacro._TreeViewItem = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent, index)
    {
        nexacro.ComplexComponent.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent);

        this._rowidx = index;
    };

    // [object.prototype:create]
    var _pTreeViewItem = nexacro._createPrototype(nexacro.ComplexComponent, nexacro._TreeViewItem);
    nexacro._TreeViewItem.prototype = _pTreeViewItem;

    // [component.typename:create]
    _pTreeViewItem._type_name = "_TreeViewItem";
    _pTreeViewItem._is_subcontrol = true;

    // [component.composite.layout.panel:useset]
    _pTreeViewItem._is_panel_layout = true;
    // [component.composite.layout:create]
    _pTreeViewItem._is_child = true;

    // [component.status:init]
    _pTreeViewItem._use_select = true;
    _pTreeViewItem._use_selected_status = true;
    

    //===============================================================
    // nexacro.ComplexComponent : Child/Create,Destroy
    //===============================================================

    // [component.contents:create]
    _pTreeViewItem.onCreateContents = function ()
    {
        // [component.contents:init]
        this._treecellinfo = this.parent._treecellinfo;

        // [component.contents:create]
        nexacro.ComplexComponent.prototype.onCreateContents.call(this);
    }

    // [component.contents:destroy]
    _pTreeViewItem.onDestroyContents = function ()
    {
        // [component.contents:destroy]
        nexacro.ComplexComponent.prototype.onDestroyContents.call(this);

        // [component.contents:uninit]
        this._treecellinfo = null;
    };

    // [component.layout.child:create]
    _pTreeViewItem.onCreateChild = function ()
    {
        // child create
        if (this.treecontrol = this.createChildControl(new nexacro._TreeViewCellControl("treecell", 0, 0, 0, 0, null, null, null, null, null, null, this)))
        {
            // attach event
            this.treecontrol._setEventHandler("onclick", this.on_notify_tree_onclick, this);
        }
    };

    // [component.layout.child:destroy]
    _pTreeViewItem.onDestroyChild = function ()
    {
        if (this.treecontrol)
        {
            // child unlink
            this.treecontrol = null;
        }
    };

    //===============================================================
    // nexacro.ComplexComponent : Child/Event
    //===============================================================

    _pTreeViewItem.on_notify_tree_onclick = function (obj, e)
    {
    //  nexacro._notify("_TreeViewItem.on_notify_tree_onclick");

        this._on_basic_onclick(obj, e);
        this._on_fire_onclick(obj, e);
        this._on_default_onclick(obj, e);
    };

    //===============================================================
    // nexacro._TreeView : Layout/Panel
    //===============================================================

    // [component.layout.panel:init]               
    _pTreeViewItem._onInitPanelLayout = function ()
  	{
        var panel = this._getPanel();

  	    if (panel)
  	    {
  	        // TODO: RuleBased Socketing 처리
  	        panel._setLayoutType(nexacro._PanelConst.LAYOUTSTYLE_ROWCOL);
  	        panel._setSizeInfoRefPanel(null, nexacro._PanelConst.SIZEINFO_REFSTYLE_NOLINK);
  	        panel._setGroupingSubPanel(null, nexacro._PanelConst.GROUPING_SUBSTYLE_NONE, nexacro._PanelConst.GROUPING_SUBPLACE_NONE);
  	        panel._setSlotArrangeType(nexacro._PanelConst.SLOT_ARRANGETYPE_COLFIRST | nexacro._PanelConst.SLOT_ARRANGETYPE_VERTAMID);
  	        panel._setSlotVisibleType(nexacro._PanelConst.SLOT_VISIBLETYPE_HIDESLOT);
  	        panel._setSlotOverFlowType(nexacro._PanelConst.SLOT_OVERFLOWTYPE_SCROLL | nexacro._PanelConst.SLOT_OVERFLOWTYPE_FULLSLOT);
  	        panel._setSlotAutoSizeType(nexacro._PanelConst.SLOT_AUTOSIZETYPE_HORZFIT);
  	    //  panel._setSlotAutoFillType(nexacro._PanelConst.SLOT_AUTOFILLTYPE_DEFAULT);
  	        panel._setSlotSizeMoveType(nexacro._PanelConst.SLOT_SIZEMOVETYPE_NONE);
            
  	        panel._resetPanelColSize(0,0);
  	        panel._resetPanelRowSize(0,0);
        }
    };

    delete _pTreeViewItem;
};


if (!nexacro._TreeViewItemHead)
{
    //==============================================================================
    // nexacro._TreeViewItemHead
    //==============================================================================

    /* template comment
    // [interface:status]               : template code inteface comment
    // [interface.subinterface:status]  : sub interface comment
    // [interface/]                     : close comment
    */
 
    // [object.inherit:create]
    nexacro._TreeViewItemHead = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent, index)
    {
        nexacro._TreeViewItem.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent, index);
    };

    // [object.prototype:create]
    var _pTreeViewItemHead = nexacro._createPrototype(nexacro._TreeViewItem, nexacro._TreeViewItemHead);
    nexacro._TreeViewItemHead.prototype = _pTreeViewItemHead;

    // [component.typename:create]
    _pTreeViewItemHead._type_name = "_TreeViewItemHead";
    _pTreeViewItemHead._is_subcontrol = true;

    // [component.composite.layout.panel:useset]
    _pTreeViewItemHead._is_panel_layout = true;
    // [component.composite.layout:create]
    _pTreeViewItemHead._is_child = true;


    //===============================================================
    // nexacro._TreeViewItemHead : Child/Create,Destroy
    //===============================================================

    // [component.layout.child:create]
    _pTreeViewItemHead.onCreateChild = function ()
    {
        // parent call
        nexacro._TreeViewItem.prototype.onCreateChild.call(this);

        // child create
        this.addcontrol = this.createChildControl(new nexacro.Button("add", 0, 0, 0, 0, null, null, null, null, null, null, this));
        this.subcontrol = this.createChildControl(new nexacro.Button("sub", 0, 0, 0, 0, null, null, null, null, null, null, this));
        this.delcontrol = this.createChildControl(new nexacro.Button("del", 0, 0, 0, 0, null, null, null, null, null, null, this));

        // attach event
        this.addcontrol._setEventHandler("onclick", this.on_notify_add_onclick, this);
        this.subcontrol._setEventHandler("onclick", this.on_notify_sub_onclick, this);
        this.delcontrol._setEventHandler("onclick", this.on_notify_del_onclick, this);
    };

    // [component.layout.child:destroy]
    _pTreeViewItemHead.onDestroyChild = function ()
    {
        // child unlink
        this.addcontrol = null;
        this.subcontrol = null;
        this.delcontrol = null;

        // parent call
        nexacro.ComplexComponent.prototype.onDestroyChild.call(this);
    };

    //===============================================================
    // nexacro._TreeViewItemHead : Child/Event
    //===============================================================

    _pTreeViewItemHead.on_notify_add_onclick = function (obj, e)
    {
        nexacro._notify("_TreeViewItemHead.on_notify_add_onclick");
    };
    _pTreeViewItemHead.on_notify_sub_onclick = function (obj, e)
    {
        nexacro._notify("_TreeViewItemHead.on_notify_sub_onclick");
    };
    _pTreeViewItemHead.on_notify_del_onclick = function (obj, e)
    {
        nexacro._notify("_TreeViewItemHead.on_notify_del_onclick");
    };

    //===============================================================
    // nexacro._TreeViewItemHead : Layout/Panel
    //===============================================================

    // [component.layout.panel:init]               
    _pTreeViewItemHead._onInitPanelLayout = function ()
  	{
  	    var panel = this._getPanel();

  	    if (panel)
  	    {
  	        // TODO: RuleBased Socketing 처리
  	        panel._setLayoutType(nexacro._PanelConst.LAYOUTSTYLE_ROWCOL);
  	        panel._setSizeInfoRefPanel(null, nexacro._PanelConst.SIZEINFO_REFSTYLE_NOLINK);
  	        panel._setGroupingSubPanel(null, nexacro._PanelConst.GROUPING_SUBSTYLE_NONE, nexacro._PanelConst.GROUPING_SUBPLACE_NONE);
  	        panel._setSlotArrangeType(nexacro._PanelConst.SLOT_ARRANGETYPE_COLFIRST | nexacro._PanelConst.SLOT_ARRANGETYPE_VERTAMID);
  	        panel._setSlotVisibleType(nexacro._PanelConst.SLOT_VISIBLETYPE_HIDESLOT);
  	        panel._setSlotOverFlowType(nexacro._PanelConst.SLOT_OVERFLOWTYPE_SCROLL | nexacro._PanelConst.SLOT_OVERFLOWTYPE_FULLSLOT);
  	        panel._setSlotAutoSizeType(nexacro._PanelConst.SLOT_AUTOSIZETYPE_HORZFIT);
  	    //  panel._setSlotAutoFillType(nexacro._PanelConst.SLOT_AUTOFILLTYPE_DEFAULT);
  	        panel._setSlotSizeMoveType(nexacro._PanelConst.SLOT_SIZEMOVETYPE_NONE);
            
  	        panel._resetPanelColSizeArray(4, [undefined,20,20,20], 100);
  	        panel._resetPanelRowSize(0,0);
        }
    };

    delete _pTreeViewItemHead;
};


if (!nexacro._TreeViewItemBranch)
{
    //==============================================================================
    // nexacro._TreeViewItemBranch
    //==============================================================================

    /* template comment
    // [interface:status]               : template code inteface comment
    // [interface.subinterface:status]  : sub interface comment
    // [interface/]                     : close comment
    */
 
    // [object.inherit:create]
    nexacro._TreeViewItemBranch = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent, index)
    {
        nexacro._TreeViewItemHead.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent, index);
    };

    // [object.prototype:create]
    var _pTreeViewItemBranch = nexacro._createPrototype(nexacro._TreeViewItemHead, nexacro._TreeViewItemBranch);
    nexacro._TreeViewItemBranch.prototype = _pTreeViewItemBranch;

    // [component.typename:create]
    _pTreeViewItemBranch._type_name = "_TreeViewItemBranch";
    _pTreeViewItemBranch._is_subcontrol = true;

    // [component.composite.layout.panel:useset]
    _pTreeViewItemBranch._is_panel_layout = true;
    // [component.composite.layout:create]
    _pTreeViewItemBranch._is_child = true;


    //===============================================================
    // nexacro._TreeViewItemBranch : Child/Create,Destroy
    //===============================================================

    // [component.layout.child:create]
    _pTreeViewItemBranch.onCreateChild = function ()
    {
        // parent call
        nexacro._TreeViewItemHead.prototype.onCreateChild.call(this);
    };

    // [component.layout.child:destroy]
    _pTreeViewItemBranch.onDestroyChild = function ()
    {
        // parent call
        nexacro._TreeViewItemHead.prototype.onDestroyChild.call(this);
    };


    //===============================================================
    // nexacro._TreeViewItemBranch : Child/Event
    //===============================================================

    // [component.event:init]
    _pTreeViewItemBranch._initEvents = function ()     // Event 추가시 Override
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
            "onadd": 1, "onsub": 1, "ondel": 1
            // [event/]
        };
    };

    // [component.event.child:notify]
    _pTreeViewItemBranch.on_notify_add_onclick = function (obj, e)
    {
    //  nexacro._notify("_TreeViewItemBranch.on_notify_add_onclick");

        this._on_basic_onadd(obj, e);
        this._on_fire_onadd(obj, e);
        this._on_default_onadd(obj, e);

        return true;
    };
    _pTreeViewItemBranch.on_notify_sub_onclick = function (obj, e)
    {
    //  nexacro._notify("_TreeViewItemBranch.on_notify_sub_onclick");

        this._on_basic_onsub(obj, e);
        this._on_fire_onsub(obj, e);
        this._on_default_onsub(obj, e);

        return true;
    };
    _pTreeViewItemBranch.on_notify_del_onclick = function (obj, e)
    {
    //  nexacro._notify("_TreeViewItemBranch.on_notify_del_onclick");

        this._on_basic_ondel(obj, e);
        this._on_fire_ondel(obj, e);
        this._on_default_ondel(obj, e);

        return true;
    };
    // [component.event.add:basicaction]
    _pTreeViewItemBranch._on_basic_onadd = function (obj, e)
    {
    };
    // [component.event.add:defaultaction]
    _pTreeViewItemBranch._on_default_onadd = function (obj, e)
    {
    };
    // [component.event.add:fireevent]
    _pTreeViewItemBranch._on_fire_onadd = function (obj, e)
    {
        return this._fire_event(this.onadd, obj, e);
    };
    // [component.event.sub:basicaction]
    _pTreeViewItemBranch._on_basic_onsub = function (obj, e)
    {
    };
    // [component.event.sub:defaultaction]
    _pTreeViewItemBranch._on_default_onsub = function (obj, e)
    {
    };
    // [component.event.sub:fireevent]
    _pTreeViewItemBranch._on_fire_onsub = function (obj, e)
    {
        return this._fire_event(this.onsub, obj, e);
    };
    // [component.event.del:basicaction]
    _pTreeViewItemBranch._on_basic_ondel = function (obj, e)
    {
    };
    // [component.event.del:defaultaction]
    _pTreeViewItemBranch._on_default_ondel = function (obj, e)
    {
    };
    // [component.event.del:fireevent]
    _pTreeViewItemBranch._on_fire_ondel = function (obj, e)
    {
        return this._fire_event(this.ondel, obj, e);
    };

    //===============================================================
    // nexacro._TreeViewItemBranch : Layout/Panel
    //===============================================================

    // [component.layout.panel:init]               
    _pTreeViewItemBranch._onInitPanelLayout = function ()
  	{
        // parent call
        nexacro._TreeViewItemHead.prototype._onInitPanelLayout.call(this);
    };

    delete _pTreeViewItemBranch;
};


if (!nexacro._TreeView)
{
    //==============================================================================
    // nexacro._TreeView
    //==============================================================================
 
    /* template comment
    // [interface:status]               : template code inteface comment
    // [interface.subinterface:status]  : sub interface comment
    // [interface/]                     : close comment
    */

    // [object.inherit:create]
    nexacro._TreeView = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent)
    {
        nexacro.ComplexComponent.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent);
    };

    // [object.prototype:create]
    var _pTreeView = nexacro._createPrototype(nexacro.ComplexComponent, nexacro._TreeView);
    nexacro._TreeView.prototype = _pTreeView;

    // [component.typename:create]
    _pTreeView._type_name = "_TreeView";

    // [component.composite.layout.formats:useset]
    _pTreeView._is_format_layout = false;               // TODO:formats로 변경처리
    // [component.composite.layout.formats:initprop]
    _pTreeView.formats = "";                            // format string
    _pTreeView.formatid = "";                           // format id

    // [component.composite.layout.panel:useset]
    _pTreeView._is_panel_layout = true;

    // [component.composite.layout.items:useset]
    _pTreeView._is_child = false;
    _pTreeView._is_items = true;

    // [component.composite.nclayout:useset]
    _pTreeView._is_nc_layout = false;
    _pTreeView._is_nc_head = false;
    _pTreeView._is_nc_foot = false;
    _pTreeView._is_nc_lead = false;
    _pTreeView._is_nc_tail = false;

    // [component.composite.scroll:useset]
    _pTreeView._is_scrollable = true;
    _pTreeView._is_nc_scroll = true;            // NC Scroll 사용시 개별 지정, Override 필요.
    _pTreeView._use_scrollmanager = false;      // NC Scroll 사용시 개별 지정, Override 필요.
    _pTreeView._use_translate_move = true;

    // [component.composite.expand:useset]
    _pTreeView._is_nc_expand = false;           // NC Expand 사용시 개별 지정, Override 필요.
    _pTreeView._use_expandmanager = false;      // NC Expand 사용시 개별 지정, Override 필요.




    //===============================================================
    // nexacro._TreeView : Init
    //===============================================================

    // [component.variable:init]
    /*
    _pTreeView._var1 = true;
    _pTreeView._var2 = null;
    _pTreeView._var3 = false;
    */

    // [object.property:init]
    /*
    _pTreeView.prop1 = true;
    _pTreeView.prop2 = false;
    _pTreeView.prop3 = false;
    */

    // [component.status:init]
    /*
    _pTreeView._use_pushed_status = true;
    _pTreeView._use_selected_status = true;
    */

    // [component.accessibility:init]
    /*
    _pTreeView._accessibility_role = "RoleName";
    */

    // [object.event:init]
    /*
    _pTreeView._event_list =
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
    // nexacro._TreeView : Create/Destroy
    //===============================================================

    // [use inherit]


    //===============================================================
    // nexacro._TreeView : NCChild
    //===============================================================

    //===============================================================
    // nexacro._TreeView : Child
    //===============================================================

    //===============================================================
    // nexacro._TreeView : Items
    //===============================================================

    // [개별 Component 처리]
    // Child는 생성/삭제 부분을 Override하여 처리

    // [component.contents:create]
    _pTreeView.onCreateContents = function ()
    {
        // [component.contents:init]
        this._treecellinfo = new nexacro.CellInfo("tree", null, this, "body", 0);
        this._treecellinfo.set_displaytype("tree");
        this._treecellinfo.set_edittype("tree");

        // [component.contents:create]
        nexacro.ComplexComponent.prototype.onCreateContents.call(this);
    }

    // [component.contents:destroy]
    _pTreeView.onDestroyContents = function ()
    {
        // [component.contents:destroy]
        nexacro.ComplexComponent.prototype.onDestroyContents.call(this);

        // [component.contents:uninit]
        delete this._treecellinfo;
    };
   

    // [component.layout.items:create]
    _pTreeView.onCreateItemBegin = function (ctxtdata, binddata)
    {
        if (!this.showhead && !this._is_subcontrol)
            return;

         // user before item create logic
        if (this.headcontrol = this.createItemControl(new nexacro._TreeViewItemHead("head", 0, 0, 0, 0, null, null, null, null, null, null, this)))
        {
            // attach event
            this.headcontrol._setEventHandler("onclick", this.on_notify_head_onclick, this);

            return this.headcontrol;
        }
    };
    // [component.layout.items:create]
    _pTreeView.onCreateItemFinal = function (ctxtdata, binddata)
    {
        // user after item create logic
    };
    _pTreeView.onCreateItem = function (ctxtdata, binddata, index)
    {
        // user item create logic
        if (binddata && this.subgroup != "none")
        {
            var level = binddata._getLevelValue();  // level
            var group = binddata._getGroupValue();  // group
            var item = null;

            // range : branch
            if (group)
            {
                if (item = this.createItemControl(new nexacro._TreeViewItemBranch("branch" + index, 0, 0, 0, 0, null, null, null, null, null, null, this, index), index))
                {
                    if (this.useeditbutton != "unuse")
                    {
                        // attach event
                        item._setEventHandler("onclick", this.on_notify_branch_onclick, this);
                        item._setEventHandler("onadd", this.on_notify_branch_onadd, this);
                        item._setEventHandler("onsub", this.on_notify_branch_onsub, this);
                        item._setEventHandler("ondel", this.on_notify_branch_ondel, this);
                    }
                    if (this.useeditbutton != "show")
                    {
                        // hide control
                        item.addcontrol.set_visible(false);
                        item.subcontrol.set_visible(false);
                        item.delcontrol.set_visible(false);
                    }

                    return item;
                }
            }
            // range : leaf
            else
            {
                if (item = this.createItemControl(new nexacro._TreeViewItem("item" + index, 0, 0, 0, 0, null, null, null, null, null, null, this, index), index))
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

    //===============================================================
    // nexacro.ComplexComponent : Items/Event
    //===============================================================

    // [component.event.items:notify]
    _pTreeView.on_notify_item_onclick = function (obj, e)
    {
    //  nexacro._notify('_TreeView.on_notify_item_onclick');

        this._on_basic_onclick(obj, e);
        this._on_fire_onclick(obj, e);
        this._on_default_onclick(obj, e);
    };
    _pTreeView.on_notify_branch_onclick = function (obj, e)
    {
    //  nexacro._notify('_TreeView.on_notify_branch_onclick');

        this._on_basic_onclick(obj, e);
        this._on_fire_onclick(obj, e);
        this._on_default_onclick(obj, e);
    };

    // [component.event.items.control:notify]
    _pTreeView.on_notify_branch_onadd = function (obj, e)
    {
    //  nexacro._notify('_TreeView.on_notify_branch_onadd');

        this._on_basic_onadd(obj, e);
        this._on_fire_onadd(obj, e);
        this._on_default_onadd(obj, e);
    };
    _pTreeView.on_notify_branch_onsub = function (obj, e)
    {
    //  nexacro._notify('_TreeView.on_notify_branch_onsub');

        this._on_basic_onsub(obj, e);
        this._on_fire_onsub(obj, e);
        this._on_default_onsub(obj, e);
    };
    _pTreeView.on_notify_branch_ondel = function (obj, e)
    {
    //  nexacro._notify('_TreeView.on_notify_branch_ondel');

        this._on_basic_ondel(obj, e);
        this._on_fire_ondel(obj, e);
        this._on_default_ondel(obj, e);
    };

    //===============================================================
    // nexacro._TreeView : Tree
    //===============================================================

    // [CellControl Tree 처리용 Logic]
    // 현재 CellInfo->Grid의 Tree Logic의 기본구조에 부합되도록 처리중임
    // TODO : CellInfo와 Grid의 Tree Logic 삭제처리
    // TODO : 아래 Tree Function -> Tree Interface로 변환하여 공통으로 이동
    //        TreeCheck Data -> TreeInferface.Check -> MultiSelect/DataBind
    //        TreeStats Data -> TreeInferface.Stats -> PanelStatus/DataBind
    //        TreeLevel Data -> TreeInferface.Level -> PanelLevel/LevelBind
    //        TreeText  Data -> TreeInferface.Text  -> DataBind

    _pTreeView._setTreeCellinfo = function (v)
    {
        if (this._treeCellinfo != v)
        {
            this._treeCellinfo = v;
            this._setTree(true);
        }
    };

    _pTreeView._removeTreeCellinfo = function (v)
    {
        if (this._treeCellinfo == v)
        {
            this._treeCellinfo = null;
            this._setTree(false);
        }
    };

    _pTreeView._setTree = function (v)
    {
        v = nexacro._toBoolean(v);

        if (this._hasTree != v)
        {
            this._hasTree = v;

            if (v == true)
                this._initTreeStats();
            else
                this._clearTreeStats();
        }
    };

    _pTreeView._initTreeStats = function ()
    {
        this._treeStats = [];
        this._treeCheck = [];
        this._treeLevel = [];

        this._treeStatsBindIndex = -1;
        this._treeCheckBindIndex = -1;
        this._treeLevelBindIndex = -1;
    };

    _pTreeView._clearTreeStats = function ()
    {
        this._treeStats = null;
        this._treeCheck = null;
        this._treeLevel = null;
    };

    _pTreeView._getTreeStats = function (rowidx)
    {
        var ret = 1;
        var arr = this._treeStats;

        if (arr)
        {
            if (arr.length <= rowidx)
                arr.length = this._getBindCount();

            if ((ret = arr[rowidx]) == undefined)
                ret = arr[rowidx] = this._getBindTreeStats(rowidx);
        }

        return ret;
    };
    _pTreeView._setTreeStats = function (rowidx, data)
    {
        var arr = this._treeStats;

        if (arr)
        {
            if (arr.length <= rowidx)
                arr.length = this._getBindCount();

            if (arr[rowidx] != data)
                this._setBindTreeStats(rowidx, arr[rowidx] = data);
        }

        return data;
    };

    _pTreeView._getTreeCheck = function (rowidx)
    {
        var ret = 0;
        var arr = this._treeCheck;

        if (arr)
        {
            if (arr.length <= rowidx)
                arr.length = this._getBindCount();

            if ((ret = arr[rowidx]) == undefined)
                ret = arr[rowidx] = this._getBindTreeCheck(rowidx);
        }

        return ret;
    };
    _pTreeView._setTreeStats = function (rowidx, data)
    {
        var arr = this._treeCheck;

        if (arr)
        {
            if (arr.length <= rowidx)
                arr.length = this._getBindCount();

            if (arr[rowidx] != data)
                this._setBindTreeCheck(rowidx, arr[rowidx] = data);
        }

        return data;
    };

    _pTreeView._getTreeLevel = function (rowidx)
    {
        var ret = 0;
        var arr = this._treeLevel;

        if (arr)
        {
            if (arr.length <= rowidx)
                arr.length = this._getBindCount();

            if ((ret = arr[rowidx]) == undefined)
                ret = arr[rowidx] = this._getBindTreeLevel(rowidx);
        }

        return ret;
    };
    _pTreeView._setTreeLevel = function (rowidx, data)
    {
        var arr = this._treeLevel;

        if (arr)
        {
            if (arr.length <= rowidx)
                arr.length = this._getBindCount();

            if (arr[rowidx] != data)
                this._setBindTreeLevel(rowidx, arr[rowidx] = data);
        }

        return data;
    };

    _pTreeView._getBindTreeStats = function (rowidx)
    {
        // get databind "status"
        return this._treeStatsBindIndex >= 0 ? this._fetchDataBindValue(rowidx, this._treeStatsBindIndex) : 1;
    };
    _pTreeView._getBindTreeCheck = function (rowidx)
    {
        // get databind "check" + multi select
        return this._treeCheckBindIndex >= 0 ? this._fetchDataBindValue(rowidx, this._treeCheckBindIndex) : this.isAboveSelected(rowidx);
    };
    _pTreeView._getBindTreeLevel = function (rowidx)
    {
        // get databind "level" + get levelbind
        return this._treeLevelBindIndex >= 0 ? this._fetchDataBindValue(rowidx, this._treeLevelBindIndex) : this._fetchLevelBindValue(rowidx);
    };

    _pTreeView._setBindTreeStats = function (rowidx, data)
    {
        // set databind "status"
        return this._treeStatsBindIndex >= 0 ? this._setBindData(rowidx, this._getDataBindInfo(this._treeStatsBindIndex), data) : 1;
    };
    _pTreeView._setBindTreeCheck = function (rowidx, data)
    {
        // set databind "check" + multi select
        return this._treeCheckBindIndex >= 0 ? this._setBindData(rowidx, this._getDataBindInfo(this._treeCheckBindIndex), data) : this.setSelect(rowidx);
    };
    _pTreeView._setBindTreeLevel = function (rowidx, data)
    {
        // set databind "level" + set levelbind
        return this._treeLevelBindIndex >= 0 ? this._setBindData(rowidx, this._getDataBindInfo(this._treeLevelBindIndex), data) : this._setBindData(rowidx, this._getLevelBindInfo(), data);
    };
    //===============================================================
    // nexacro._TreeView : Scroll
    //===============================================================

    // [상위 Component 처리]
    // Scroll의 기본적인 구성은 ComBase 에서 제공
    // User Component에서는 h/v scroll event만 Override

    /*
    _pTreeView._is_scrollable = true;
    _pTreeView._is_nc_scroll = true;            // NC Scroll 사용시 개별 지정, Override 필요.
    _pTreeView._use_scrollmanager = false;      // NC Scroll 사용시 개별 지정, Override 필요.
    _pTreeView._use_translate_move = true;

    _pTreeView.scrollbartype = undefined;
    _pTreeView.scrolltype = "both";
    _pTreeView.scrollbarsize = undefined;
    _pTreeView.scrollindicatorsize = undefined;
    */

    /*
    // [component.scroll.event.vscroll:fireevent]    // Scroll EventInfo 변경시 override
    _pComplexComponent._on_fire_onvscroll = function (obj, e)
    {
        return this._fire_event(this.onvscroll, obj, e);
    };
 
    // [component.scroll.event.hscroll:fireevent]    // Scroll EventInfo 변경시 override
    _pComplexComponent._on_fire_onhscroll = function (obj, e)
    {
        return this._fire_event(this.onhscroll, obj, e);
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
    // nexacro._TreeView : Layout/Panel
    //===============================================================

    // [component.layout.panel:init]               
    _pTreeView._onInitPanelLayout = function ()
  	{
        var panel = this._getPanel();

  	    if (panel)
  	    {
            // TODO: Property 확정후 정리
  	        var rowfirst = this.rowfirst ? nexacro._PanelConst.SLOT_ARRANGETYPE_ROWFIRST : nexacro._PanelConst.SLOT_ARRANGETYPE_COLFIRST;
  	        var arrange = nexacro._PanelConst.SLOT_ARRANGETYPE_HORZLEAD | nexacro._PanelConst.SLOT_ARRANGETYPE_VERTLEAD;
  	        var subgroup = nexacro._PanelConst.GROUPING_SUBSTYLE_GROUP_EXPAND;

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

  	        var rowsize = this.rowsize;
  	        var colsize = this.colsize;

  	        if (colsize && colsize.length)
  	            panel._resetPanelColSizeArray(colsize.length, colsize);
            else
  	            panel._resetPanelColSize(0);

  	        if (rowsize && rowsize.length)
  	            panel._resetPanelRowSizeArray(rowsize.length, rowsize, this._itemheight, this.showhead ? 1 : 0);
            else
                panel._resetPanelRowSize(0);

  	        panel._setPanelTitleSize(this._titleheight);
  	    //  panel._setPanelSplitSize(this._splitheight);
        }
    };

     // [component.layout.panel:subinit]               
    _pTreeView._onInitSubPanelNCChildLayout = function (ncchild, panel)
    {
        // set ncchild panel link
    };
    // [component.layout.panel:subinit]               
    _pTreeView._onInitSubPanelChildLayout = function (child, panel)
    {
        // set parent/child panel link
    };
    // [component.layout.panel:subinit]               
    _pTreeView._onInitSubPanelItemsLayout = function (item, panel, binddata, index)
    {
    };
    // [component.layout.panel.popup:subinit]               
    _pTreeView._onInitPopupSubPanelNCChildLayout = function (parent, startindex, startlevel)
    {
    };
    // [component.layout.panel.popup:subinit]               
    _pTreeView._onInitPopupSubPanelChildLayout = function (parent, startindex, startlevel)
    {
    };
    // [component.layout.panel.popup:subinit]               
    _pTreeView._onInitPopupSubPanelItemsLayout = function (parent, startindex, startlevel)
    {
    };

    //===============================================================
    // nexacro.ComplexComponent : Layout/Popup
    //===============================================================

    // [Complex Component 처리]
    // Container Element를 Panel의 구현요소로 이용해 Layout 배치를 처리한다.
    // Panel 동작은 Rule Base Interface로 Socketing 구조로 확장한다.

    //===============================================================
    // nexacro._TreeView : Layout/Split
    //===============================================================

    // [Complex Component 처리]
    // Resize Element를 Split의 구현요소로 이용해 Layout 크기변경을 처리한다.
    // Split 동작은 각 Control에 크기변경을 주고 Panel에 의해 Layout 재처리된다.

    //===============================================================
    // nexacro._TreeView : Layout/Sizing
    //===============================================================

    // [Complex Component 처리]
    // Panel/Arrangemenet/Autosize/MinMax의 기능을 이용해 Layout 크기를 처리한다.
    // Arrangemenet/Autosize/MinMax의 결과가 크기변경을 주고 Panel에 의해 Layout 최종처리된다.

    //===============================================================
    // nexacro._TreeView : Layout/Move
    //===============================================================

    // [Complex Component 처리]
    // DragDrop의 구현요소로 이용해 Layout 이동변경을 처리한다.
    // DragDrop 동작은 각 Control에 위치변경을 주고 Panel에 의해 Layout 재처리된다.



    //===============================================================
    // nexacro._TreeView : Formats
    //===============================================================

    // [상위 Component 처리]
    // Formats는 Complex Component에서 제공

    // [개별 Component 처리]
    // override 대상과 property/method 노출처리

    //===============================================================
    // nexacro._TreeView : InnerBind/FullBind
    //===============================================================

    // [상위 Component 처리]
    // value bind는 Simple Component 기본으로 제공
    // inner bind/full bind도 Complex Component에서 제공

    // [개별 Component 처리]
    // override 대상과 bind별 property/method 노출처리
    // bind 처리는 상위 interface를 사용

    // [component.bind.databind:initprop]   
    _pTreeView._is_databind = true;
    _pTreeView._is_fullbind = false;
    _pTreeView._is_levelbind = true;
    // [component.bind.ctxtbind:initprop]   
    _pTreeView._is_xmlbind = true;
    _pTreeView._is_jsonbind = true;

    /*
    // [component.bind.valuebind:init]              // value property가 없거나 다른 property로 처리시 override
    _pTreeView._onGetBindableProperties = function ()      // 왜 Properties 복수지??
    {
        return "value";
    };
    */

    // [component.bind.databind:init]               // innerbind/fullbind시 override
    _pTreeView._onGetBindDataSource = function ()
    {
        return this.binddatasource;
    };
    /*
    // [component.bind.databind:init]               // innerbind/fullbind시 override
    _pTreeView._onGetBindDataKey = function ()
    {
        // return datactxt key string
        return "*";
    };
    // [component.bind.databind:init]               // innerbind/fullbind시 override
    _pTreeView._onGetCodeColumn = function ()
    {
        return this.codecolumn;
    };
    // [component.bind.databind:init]               // innerbind/fullbind시 override
    _pTreeView._onGetCodeProp = function ()
    {
        return "codecolumn";
    };
    // [component.bind.databind:init]               // innerbind/fullbind시 override
    _pTreeView._onGetLevelColumn = function ()
    {
        return this.levelcolumn;
    };
    // [component.bind.databind:init]               // innerbind/fullbind시 override
    _pTreeView._onGetLevelProp = function ()
    {
        return "levelcolumn";
    };
    // [component.bind.databind:init]               // innerbind/fullbind시 override
    _pTreeView._onGetGroupColumn = function ()
    {
        return this.groupcolumn;
    };
    // [component.bind.databind:init]               // innerbind/fullbind시 override
    _pTreeView._onGetGroupProp = function ()
    {
        return "groupcolumn";
    };
    */

    // [component.bind.databind:init]               // innerbind/fullbind시 override
    _pTreeView._onGetDataColumns = function ()
    {
        return  [
                this.datacolumn ? this.datacolumn : "#nodename",
                this.iconcolumn ? this.iconcolumn : ""
                ];
    };
    // [component.bind.databind:init]               // innerbind/fullbind시 override
    _pTreeView._onGetDataProps = function ()
    {
        return ["datacolumn","iconcolumn"];
    };

    // [component.bind.databind:init]               // innerbind시 override
    /*
    _pTreeView._onGetCodeBindInfo = function ()
    {
        return this.createCodeBindInfo();
    };
    _pTreeView._onGetLevelBindInfo = function ()
    {
        return this.createLevelBindInfo();
    };
    */
    _pTreeView._onGetDataBindInfos = function ()
    {
        return  [
                this.createItemSubControlBindInfo("treecontrol", "treetext", "datacolumn"),
                this.createItemSubControlBindInfo("treecontrol", "treeicon", "iconcolumn")
                ];
    };

    /*
    // [component.bind.innerbind.event:load]   
    _pTreeView._callback_onload = function (obj, e)
    {
        if (e.reason == 0)
        {
            // [component.bind.innerbind.event:load]   
            this._recreateItems();
        }
    };
    // [component.bind.innerbind.event:rowsetchanged]   
    _pTreeView._callback_onrowsetchanged = function (obj, e)
    {
    	if (e.reason != 41)  //nexacro.Dataset.REASON_ENABLEEVENT  : enableevent 시 fire rowsetchanged -> valuechanged 
    	{
    	    // [component.bind.innerbind.event:load]   
    	    this._recreateItems();
    	}
    };
    // [component.bind.innerbind:rowsetchanged]   
    _pTreeView._callback_onvaluechanged = function (obj, e)
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
    // [component.bind.ctxtbind.datasource:initprop]   
    _pTreeView.binddatasource = null;
    _pTreeView.codecolumn = "";
    _pTreeView.datacolumn = "";
    _pTreeView.levelcolumn = "";
    _pTreeView.iconcolumn = "";

    // [component.bind.ctxtbind.datasource:set]   
    _pTreeView.set_binddatasource = function (str)
    {		
        if (this.binddatasource != str)
    	{
            // set property value
            this.binddatasource = str;

    	    // [component.bind.dataset:apply]           
            this.on_apply_binddatasource();
		}       
    };

    // [component.bind.ctxtbind.datasource:apply]   
    _pTreeView.on_apply_binddatasource = function ()
    {
        // [component.bind.datasource:set]
        this._setBindDataSource();

        if (!this._is_created)
            return;

        // [component.layout.items:recreate] 
        this._recreateItems();
    };

    // [component.bind.ctxtbind.binddataset:detach]   
    _pTreeView.on_clear_binddatasource = function ()
    {
        this._clearBindDataSource();
    };

    // [component.bind.ctxtbind.codecolumn:set]   
    _pTreeView.set_codecolumn = function (v)
    {
        if (v && v != this.codecolumn)
        {
            // set property value
            this.codecolumn = v;

            // [component.bind.codecolumn:apply]
            this.on_apply_codecolumn();
        }
    };
    // [component.bind.ctxtbind.levelcolumn:set]   
    _pTreeView.set_levelcolumn = function (v)
    {
        if (v && v != this.levelcolumn)
        {
            // set property value
            this.levelcolumn = v;

            // [component.bind.levelcolumn:apply]
            this.on_apply_levelcolumn();
        }
    };
    // [component.bind.ctxtbind.groupcolumn:set]   
    _pTreeView.set_groupcolumn = function (v)
    {
        if (v && v != this.groupcolumn)
        {
            // set property value
            this.groupcolumn = v;

            // [component.bind.groupcolumn:apply]
            this.on_apply_groupcolumn();
        }
    };
    // [component.bind.ctxtbind.datacolumn:set]   
    _pTreeView.set_datacolumn = function (v)
    {
        if (v && v != this.datacolumn)
        {
            // set property value
            this.datacolumn = v;

            // [component.bind.datacolumn:apply]
            this.on_apply_datacolumn();
        }
    };
    // [component.bind.ctxtbind.datacolumn:set]   
    _pTreeView.set_iconcolumn = function (v)
    {
        if (v && v != this.iconcolumn)
        {
            // set property value
            this.iconcolumn = v;

            // [component.bind.datacolumn:apply]
            this.on_apply_iconcolumn();
        }
    };

    // [component.bind.ctxtbind.codecolumn:apply]   
    _pTreeView.on_apply_codecolumn = function ()
    {
        // [component.bind.codecolumn:set]
        this._setCodeColumn();

        if (!this._is_created)
            return;

        // [component.valuebind:change]  
        this._applyValue();
    };
    // [component.bind.ctxtbind.levelcolumn:apply]   
    _pTreeView.on_apply_levelcolumn = function ()
    {
        // [component.bind.levelcolumn:set]
        this._setLevelColumn();

        if (!this._is_created)
            return;

        // [component.layout.items:recreate]
        this._recreateItems();
    };
    // [component.bind.ctxtbind.groupcolumn:apply]   
    _pTreeView.on_apply_groupcolumn = function ()
    {
        // [component.bind.groupcolumn:set]
        this._setGroupColumn();

        if (!this._is_created)
            return;

        // [component.layout.items:recreate]
        this._recreateItems();
    };
    // [component.bind.ctxtbind.datacolumn:apply]   
    _pTreeView.on_apply_datacolumn = function ()
    {
        // [component.bind.datacolumn:set]
        this._setDataColumn();

        if (!this._is_created)
            return;

        // [component.layout.items:recreate]
        this._recreateItems();
    };
    // [component.bind.ctxtbind.datacolumn:apply]   
    _pTreeView.on_apply_iconcolumn = function ()
    {
        // [component.bind.datacolumn:set]
        this._setDataColumn();

        if (!this._is_created)
            return;

        // [component.layout.items:recreaet]
        this._recreateItems();
    };

    // [component.bind.ctxtbind.codecolumn:clear]   
    _pTreeView.on_clear_codecolumn = function ()
    {
        if (!this._is_created)
            return;

        // [component.bind.ctxtbind.codecolumn:clear]   
        this._clearCodeColumn();
    };
    // [component.bind.ctxtbind.levelcolumn:clear]   
    _pTreeView.on_clear_levelcolumn = function ()
    {
        if (!this._is_created)
            return;

        // [component.bind.ctxtbind.levelcolumn:clear]   
        this._clearLevelColumn();
    };
    // [component.bind.ctxtbind.groupcolumn:clear]   
    _pTreeView.on_clear_groupcolumn = function ()
    {
        if (!this._is_created)
            return;

        // [component.bind.ctxtbind.groupcolumn:clear]   
        this._clearLevelColumn();
    };
    // [component.bind.ctxtbind.datacolumn:clear]   
    _pTreeView.on_clear_datacolumn = function ()
    {
        if (!this._is_created)
            return;

        // [component.bind.ctxtbind.datacolumn:clear]   
        this._clearDataColumn();
    };
    // [component.bind.ctxtbind.datacolumn:clear]   
    _pTreeView.on_clear_iconcolumn = function ()
    {
        if (!this._is_created)
            return;

        // [component.bind.ctxtbind.datacolumn:clear]   
        this._clearDataColumn();
    };

    // [component.bind.ctxtbind:set]   
    _pTreeView._setCtxtString = function (str)
    {
        // [component.bind.ctxtbind.datasource:set]    
        return this.set_binddatasource(str);
    };
    // [component.bind.ctxtbind:get]   
    _pTreeView._getCtxtString = function ()
    {
        // [component.bind.ctxtbind.datasource:get]   
        return this._fetchBindDataCtxStr();
    };
    // [component.bind.ctxtbind:get]   
    _pTreeView._getCtxtObject = function ()
    {
        // [component.bind.ctxtbind.datasource:get]   
        return this._fetchBindDataCtxObj();
    };
    // [component.bind.ctxtbind:fetch]   
    _pTreeView._getCtxtRow = function (index)
    {
        // [component.bind.ctxtbind.datasource:get]   
        return this._getBindRow(index ? index : this.getSelect());
    };
    // [component.bind.ctxtbind:add]   
    _pTreeView._addCtxtRow = function (index, item)
    {
        // [component.bind.ctxtbind.datasource:add]   
        return this._appendBindRow(index ? index : this.getSelect(), item);
    };
    // [component.bind.ctxtbind:ins]   
    _pTreeView._insCtxtRow = function (index, item)
    {
        // [component.bind.ctxtbind.datasource:ins]   
        return this._insertBindRow(index ? index : this.getSelect(), item);
    };
    // [component.bind.ctxtbind:sub]   
    _pTreeView._subCtxtRow = function (index, item, last)
    {
        // [component.bind.ctxtbind.datasource:sub]
        return this._subsetBindRow(index ? index : this.getSelect(), item, last);
    };
    // [component.bind.ctxtbind:add]
    _pTreeView._delCtxtRow = function (index, item)
    {
        // [component.bind.ctxtbind.datasource:add]   
        return this._deleteBindRow(index ? index : this.getSelect());
    };
    // [component.bind.ctxtbind:find]
    _pTreeView._findCtxtRow = function (attr, data)
    {
        // [component.bind.ctxtbind.datasource:find]   
        return this._searchBindRow(attr, data);
    };
    _pTreeView._getCtxtAttr = function (index, attr)
    {
        // [component.bind.ctxtbind.datasource:get]   
        return this._getBindColumn(index, attr);
    };
    _pTreeView._setCtxtAttr = function (index, attr, data)
    {
        // [component.bind.ctxtbind.datasource:set]   
        return this._setBindColumnByID(index, attr, data);
    };

    //===============================================================
    // nexacro._TreeView : Select (Single/Multi)
    //===============================================================

    // [상위 Component 처리]
    // Select 사용시 Interface 제공
    // Select의 Single/Multi 여부는 Component의 Simple/Complex 여부와 무관
    // Select의 정보구성은 각 Component별 정보에 따름

    // [component.select:init]                      // 동일 interface 유지
    _pTreeView._use_select = true;                  // Select 지원시 설정
    /*
    // [component.select:init]                      // 동일 interface 유지
    _pTreeView.multiselect = false;                // MultiSelect 지원시 추가, Ctrl Action 처리
    _pTreeView.rangeselect = false;                // RangeSelect 지원시 추가, Drag Action 처리
    _pTreeView.selectscrollmode = "default";       // Scroll/Select 동시지원시 추가

    // [component.select:get]
    _pTreeView.getSelect() = function ()
    {
        return _selectInfo;                         // 동일 member 유지
    }
    // [component.select:clear]
    _pTreeView.clearSelect() = function ()
    {
        return _selectInfo.clear();
    }
    // [component.select:set]
    _pTreeView.setSelect(pos,val) = function ()
    {
        return _selectInfo.setSelect(pos,val);
    }
    // [component.select:check]
    _pTreeView.isAboveSelected = function ()
    {

    };
    // [component.select:change]
    _pTreeView._onGetCurrentSelectPos() = function ()
    {
        return [pos];                               // select data 구성은 component별로 다름
        return [pos1,pos2];
        return [pos1,pos2,pos3];
    }
    // [component.select:chagerange]
    _pTreeView._onGetCurrentSelectStartPos() = function ()
    {
        return [pos];
        return [pos1,pos2];
        return [pos1,pos2,pos3];
    }
    // [component.select:changerange]
    _pTreeView._onGetCurrentSelectEndPos() = function ()
    {
        return [pos];
        return [pos1,pos2];
        return [pos1,pos2,pos3];
    }
    */
    //===============================================================
    // nexacro._TreeView : Interface Logic Override
    //===============================================================

    // [개별 Component 처리]
    // 해당 interface별 변경이 요구될때 Override 처리
    /*
    // [component.dlgcode:init]                     // dlgcode 설정값 변경이 필요하면 override, default는 모두 false
    _pTreeView._onGetDlgCode = function (keycode, altKey, ctrlKey, shiftKey)
    {
        return { want_tab: true, want_return: true, want_escape: true, want_chars: true, want_arrows: true };
    };

    // [component.dragdrop:getdragdata]             // drag 허용시 drag data
    _pTreeView._onGetDragData = function ()
    {
        return this.getSelectedText();
    };

    // [component.tabstop:get]                      // Accessibility 용 별도 처리시 override
    _pTreeView._onGetTabstop = function ()
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
    _pTreeView._onGetFocusAcceptable = function ()
    {
        // [component.accessibility.focus:get]
        return nexacro._enableaccessibility;
    };

    // [component.hotkey:action]                    // hotkey 기본 Action 변경시 override
    _pTreeView._onHotkey = function (keycode, altKey, ctrlKey, shiftKey)
    {
        // [component.hotkey:action]
        this.click();
    };
    */

    //===============================================================
    // nexacro._TreeView : Accessibility (추후제공)
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
    _pTreeView._onGetAccessibilityLabel = function ()
    {
        var label = this.text ? this.text : this.value;
        return label;
    };
    // [object.accessibility.role:getadd]
    _pTreeView._onGetAccessibilityAdditionalRole = function ()
    {
        return " addrole";
    };
    */

    //===============================================================
    // nexacro._TreeView : RTL/Locale (추후제공)
    //===============================================================

    // [상위 Component 처리]
    // Simple Component의 RTL/Locale은 ClientElement 대상으로만 처리
    // Basic Component에서만 처리되며 User Component에서는 별도 처리가 없다.

    // 상세 추후 추가


    // [하위 Component 처리]
    // Basic Component에서만 RTL Interface 일부 Override 처리

    // 상세 추후 추가


    //===============================================================
    // nexacro._TreeView : Status
    //===============================================================

    // [Simple Component 처리]
    // 상태는 기본적으로 Basic Component에서 모두 제공하도록 구성
    // User Component에서는 추가된 UserStatus를 사용만 코딩하며 Metainfo에만 노출
    // 명시적인 상태를 추가하려면 Property/Method Interface를 이용하여 처리한다.



    //===============================================================
    // nexacro._TreeView : Property
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
    _pTreeView.onInitProperties = function ()
    {
        // init interface prop
        /*
        this.innerdataset = null;
        this.codecolumn = "";
        this.datacolumn = "";
        this.levelcolumn = "";
        this.groupcolumn = "";
        */
        this.showhead = false;
        this.showsummary = false;
        this.subgroup = 0;

        this.rootusehead = false;       // true:head item by root(first) item,  false:head item by head bind info
        this.leafusebranch = false;     // true:leaf item use brach item,       false:leaf item by leaf item

        this.useedittext = "unuse";     // "unuse":none,    "use":edit,     "useselect":edit autoenter
        this.useeditbutton = "show";   // "unuse":none,    "use":show,     "usecurrent":show currentrow
        this.useeditnewrow = "unuse";   // "unuse":none,    "use":always add last empty new row

        this.treeusebutton = "use";     
        this.treeusecheckbox = false;
        this.treeuseimage = false;

        this.rowsize = this.showhead ? [30, 24] : [24];
        this.colsize = [];

        this._itemheight = 30;
        this._titleheight = 30;
    };
    // [object.property:apply]                      // Property 추가시 Override
    _pTreeView.onApplyProperties = function ()
    {
        this.on_apply_binddatasource();
        this.on_apply_codecolumn();
        this.on_apply_levelcolumn();
        this.on_apply_groupcolumn();
        this.on_apply_datacolumn();
        this.on_apply_iconcolumn();
    };
    // [object.property:clear]                      // 별도의 clear 처리시 생성
    _pTreeView.onClearProperties = function ()
    {
        // clear property
        this.on_clear_binddatasource();
        this.on_clear_codecolumn();
        this.on_clear_levelcolumn();
        this.on_clear_groupcolumn();
        this.on_clear_datacolumn();
        this.on_clear_iconcolumn();
    };

    _pTreeView.set_showhead = function (v)
    {
        var _v = nexacro._toBoolean(v);

        if (_v != this.showhead)
        {
            // set property value
            this.showhead = _v;
        }
    };
    _pTreeView.set_showsummary = function (v)
    {
        var _v = nexacro._toBoolean(v);

        if (_v != this.showsummary)
        {
            // set property value
            this.showsummary = _v;
        }
    };
    _pTreeView.set_subgroup = function (v)
    {
        if (v && v != this.subgroup)
        {
            // set property value
            this.subgroup = v;
        }
    };

    _pTreeView.set_rootusehead = function (v)
    {
        var _v = nexacro._toBoolean(v);

        if (_v != this.rootusehead)
        {
            // set property value
            this.rootusehead = _v;
        }
    };
    _pTreeView.set_leafusebranch = function (v)
    {
        var _v = nexacro._toBoolean(v);

        if (_v != this.leafusebranch)
        {
            // set property value
            this.leafusebranch = _v;
        }
    };
    _pTreeView.set_treeusebutton = function (v)
    {
        if (v && v != this.treeusebutton)
        {
            // set property value
            this.treeusebutton = v;
        }
    };
    _pTreeView.set_treeusecheck = function (v)
    {
        if (v && v != this.treeusecheck)
        {
            // set property value
            this.treeusecheck = v;
        }
    };
    _pTreeView.set_treeuseimage = function (v)
    {
        if (v && v != this.treeuseimage)
        {
            // set property value
            this.treeuseimage = v;
        }
    };

    _pTreeView.set_rowsize = function (v)
    {
        if (v && v != this.rowsize)
        {
            // set property value
            this.rowsize = JSON.parse(v);
        }
    };
    _pTreeView.set_colsize = function (v)
    {
        if (v && v != this.colsize)
        {
            // set property value
            this.colsize = JSON.parse(v);
        }
    };

    //===============================================================
    // nexacro._TreeView : Methods
    //===============================================================

    // [하위 Component 처리]
    // Method 추가 처리
    // Status 를 명시적으로 추가하고자 할때에는 Proeprty/Method로 처리
    /*
    // [method:call]
    _pTreeView.click = function ()
    {
        // method user logic

        // [event:call]
        this.on_fire_click("none", false, false, false, -1, -1, -1, -1, -1, -1, this, this);
    };

    // [method:get]
    _pTreeView.getAMethod = function ()
    {
        // [property:get]
        return this._A;
    };

    // [method:set]
    _pTreeView.setAStatus = function (v)
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
    // nexacro._TreeView : Events
    //===============================================================

    // [상위 Component 처리]
    // 기본 System Event Handler는 Basic Component에서 모두 처리하며 User Component에서 이의 수정은 제공하지 않는다.
    // 모든 Event Handler는 Override 가능한 FireAction/DefaultAction/BasicAction Handler를 제공한다.

    /*
    // [object.event:init]
  	_pComponent._initEvents = function ()           // Event 추가시 Override
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
            "ontouchstart": 1, "ontouchmove": 1, "ontouchend": 1
        };
        
   	//  _onInitEvents();                            // 현재 Event 추가 방식 유지시 이 Override는 없음
  	};
    */

    // [하위 Component 처리]
    // 이벤트 하위추가는 기존 event_list을 재정의하여 추가
    // 이벤트 하위삭제는 없으며, Metainfo에서만 삭제처리
    // EventInfo 변경, Action 변경시 Override 처리
    // Element 코드는 반드시 Basic Component에서만 허용

    // [object.event:init]
    _pTreeView._initEvents = function ()           // Event 추가시 Override
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
            "onselect": 1, "onadd": 1, "onsub": 1, "ondel": 1
            // [event/]
        };

    //  _onInitEvents();                            // 현재 Event 추가 방식 유지시 이 Override는 없음
    };

    // [component.clickevent:basicaction]
    _pTreeView._on_basic_onclick = function (obj, e)
    {
        // user basic action

        // TODO: Action / Action Control Syntax 정리 --> Scoket Interface 정리시 정리
        this.setSelect(this._getItemIndex(e.fromobject));
    };
    // [component.clickevent:defaultaction]
    _pTreeView._on_default_onclick = function (obj, e)
    {
        // user default action
    };
    // [component.clickevent:fireevent]
    /*
    _pTreeView._on_fire_onclick = function (obj, e)
    {
        if (this.onclick && this.onclick._has_handlers)
        {
            // [component.eventinfo:create]         // User EventInfo 코드
            return this.onclick._fireEvent(this, new nexacro.ClickEventInfo(this, "onclick", e.button, e.alt_key, e.ctrl_key, e.shift_key, e.screenX, e.screenY, e.canvasX, e.canvasY, e.clientX, e.clientY, this, e.from_refer_comp));
        }
        return true;
    };
    */

    // [component.event.add:basicaction]
    _pTreeView._on_basic_onadd = function (obj, e)
    {
    };
    // [component.event.add:defaultaction]
    _pTreeView._on_default_onadd = function (obj, e)
    {
    };
    // [component.event.add:fireevent]
    _pTreeView._on_fire_onadd = function (obj, e)
    {
        return this._fire_event(this.onadd, obj, e);
    };
    // [component.event.sub:basicaction]
    _pTreeView._on_basic_onsub = function (obj, e)
    {
    };
    // [component.event.sub:defaultaction]
    _pTreeView._on_default_onsub = function (obj, e)
    {
    };
    // [component.event.sub:fireevent]
    _pTreeView._on_fire_onsub = function (obj, e)
    {
        return this._fire_event(this.onsub, obj, e);
    };
    // [component.event.del:basicaction]
    _pTreeView._on_basic_ondel = function (obj, e)
    {
    };
    // [component.event.del:defaultaction]
    _pTreeView._on_default_ondel = function (obj, e)
    {
    };
    // [component.event.del:fireevent]
    _pTreeView._on_fire_ondel = function (obj, e)
    {
        return this._fire_event(this.ondel, obj, e);
    };

    /*
    // [component.mouseevent:fireevent]             // Event Override (왜 따로하지?)
    _pTreeView.on_fire_sys_onmouseup = function (button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp)
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
    _pTreeView.on_fire_user_onmouseup = function (button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp)
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
    // nexacro._TreeView : Inner Logic
    //===============================================================



    delete _pTreeView;
};


