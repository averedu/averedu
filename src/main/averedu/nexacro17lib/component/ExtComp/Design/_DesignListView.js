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

if (nexacro._ListView)
{
    //==============================================================================
    // nexacro.ListView : Design
    //==============================================================================

    var _pListView = nexacro._ListView.prototype;

    //==============================================================================
    // nexacro.ListView : Design Contents
    //==============================================================================
 
    // [상위 Component 처리]
    // Design 시점에 별도로 처리되어야 하는 부분 처리
    
    // [component.design.contents:create]           // Css 편집화면에서 Preview용 Contents를 설정할때 Override 
    _pListView._onCreateCssDesignContents = function (mode)
    {
        // user sample contents create
        var _innerdataset = new nexacro.NormalDataset("_innerdataset", this);
        _innerdataset._setContents("<ColumnInfo><Column id=\"column1\" size=\"256\"/><Column id=\"column2\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"column1\">1</Col><Col id=\"column2\">Item 1</Col></Row><Row><Col id=\"column1\">2</Col><Col id=\"column2\">Item 2</Col></Row><Row><Col id=\"column1\">3</Col><Col id=\"column2\">Item 3</Col></Row></Rows>");

        this.set_innerdataset(_innerdataset);
        this.set_codecolumn("column1");
        this.set_datacolumn("column2");
    };
    // [component.design.contents:show] 
    _pListView._onShowCssDesignContents = function ()
    {
        // user sample apperance set
        this.set_index(1);
    };
    // [component.design.contents:destroy] 
    _pListView._onDestroyCssDesignContents = function ()
    {
        // user sample contents destroy
        this.set_innerdataset(null);
    };


    //==============================================================================
    // nexacro.ComplexComponent : Design Logic
    //==============================================================================



    delete _pListView;
}