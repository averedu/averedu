(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_Grid_Row_ScriptColumn3");
            this.set_titletext("엑셀피벗-예제3");
            this.getSetter("classname").set("ds_pvsample1");
            this.getSetter("inheritanceid").set("");
            this.getSetter("position").set("absolute");
            if (Form == this.constructor)
            {
                this._setFormPosition(1173,784);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_data", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CITY\" type=\"STRING\" size=\"256\"/><Column id=\"CITY_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"QUARTER\" type=\"STRING\" size=\"256\"/><Column id=\"VA1\" type=\"FLOAT\" size=\"256\"/><Column id=\"VA2\" type=\"FLOAT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CITY\">999</Col><Col id=\"VA1\">15</Col><Col id=\"VA2\">1</Col><Col id=\"CITY_NAME\">SEOUL</Col><Col id=\"YEAR\">2000</Col><Col id=\"QUARTER\">1</Col></Row><Row><Col id=\"CITY\">999</Col><Col id=\"VA1\">14</Col><Col id=\"VA2\">2</Col><Col id=\"CITY_NAME\">SEOUL</Col><Col id=\"YEAR\">2000</Col><Col id=\"QUARTER\">2</Col></Row><Row><Col id=\"CITY\">999</Col><Col id=\"VA1\">13</Col><Col id=\"VA2\">3</Col><Col id=\"CITY_NAME\">SEOUL</Col><Col id=\"YEAR\">2001</Col><Col id=\"QUARTER\">1</Col></Row><Row><Col id=\"CITY\">999</Col><Col id=\"VA1\">12</Col><Col id=\"VA2\">4</Col><Col id=\"CITY_NAME\">SEOUL</Col><Col id=\"YEAR\">2001</Col><Col id=\"QUARTER\">2</Col></Row><Row><Col id=\"CITY\">100</Col><Col id=\"VA1\">10</Col><Col id=\"VA2\">6</Col><Col id=\"CITY_NAME\">TOKYO</Col><Col id=\"YEAR\">2000</Col><Col id=\"QUARTER\">1</Col></Row><Row><Col id=\"CITY\">100</Col><Col id=\"VA1\">9</Col><Col id=\"VA2\">7</Col><Col id=\"CITY_NAME\">TOKYO</Col><Col id=\"YEAR\">2000</Col><Col id=\"QUARTER\">2</Col></Row><Row><Col id=\"CITY\">100</Col><Col id=\"VA1\">8</Col><Col id=\"VA2\">8</Col><Col id=\"CITY_NAME\">TOKYO</Col><Col id=\"YEAR\">2001</Col><Col id=\"QUARTER\">1</Col></Row><Row><Col id=\"CITY\">100</Col><Col id=\"VA1\">7</Col><Col id=\"VA2\">9</Col><Col id=\"CITY_NAME\">TOKYO</Col><Col id=\"YEAR\">2001</Col><Col id=\"QUARTER\">2</Col></Row><Row><Col id=\"CITY\">101</Col><Col id=\"VA1\">5</Col><Col id=\"VA2\">11</Col><Col id=\"CITY_NAME\">PARIS</Col><Col id=\"YEAR\">2000</Col><Col id=\"QUARTER\">1</Col></Row><Row><Col id=\"CITY\">101</Col><Col id=\"VA1\">4</Col><Col id=\"VA2\">12</Col><Col id=\"CITY_NAME\">PARIS</Col><Col id=\"YEAR\">2000</Col><Col id=\"QUARTER\">2</Col></Row><Row><Col id=\"CITY\">101</Col><Col id=\"VA1\">3</Col><Col id=\"VA2\">13</Col><Col id=\"CITY_NAME\">PARIS</Col><Col id=\"YEAR\">2001</Col><Col id=\"QUARTER\">1</Col></Row><Row><Col id=\"CITY\">101</Col><Col id=\"VA1\">2</Col><Col id=\"VA2\">14</Col><Col id=\"CITY_NAME\">PARIS</Col><Col id=\"YEAR\">2001</Col><Col id=\"QUARTER\">2</Col></Row><Row><Col id=\"CITY\">101</Col><Col id=\"YEAR\">2002</Col><Col id=\"QUARTER\">1</Col><Col id=\"VA1\">1</Col><Col id=\"VA2\">15</Col><Col id=\"CITY_NAME\">PARIS</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_output1","15","263","491","146",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.getSetter("useinputpanel").set("false");
            obj.set_visible("true");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.getSetter("position").set("absolute");
            obj.set_binddataset("ds_data");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background:#c6ceddff;\" text=\"CITY\"/><Cell col=\"1\" style=\"background:#c6ceddff;\" text=\"CITY_NAME\"/><Cell col=\"2\" style=\"background:#c6cedd88;\" text=\"YEAR\"/><Cell col=\"3\" style=\"background:#c6cedd88;\" text=\"QUARTER\"/><Cell col=\"4\" text=\"VA1\"/><Cell col=\"5\" text=\"VA2\"/></Band><Band id=\"body\"><Cell text=\"bind:CITY\"/><Cell col=\"1\" text=\"bind:CITY_NAME\"/><Cell col=\"2\" text=\"bind:YEAR\"/><Cell col=\"3\" text=\"bind:QUARTER\"/><Cell col=\"4\" text=\"bind:VA1\"/><Cell col=\"5\" text=\"bind:VA2\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_output3","15","443","1076","98",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.getSetter("useinputpanel").set("false");
            obj.set_cellsizingtype("col");
            obj.set_visible("true");
            obj.set_autofittype("col");
            obj.getSetter("position").set("absolute");
            obj._setContents("<Formats/>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_output2","531","263","560","146",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.getSetter("useinputpanel").set("false");
            obj.set_cellsizingtype("col");
            obj.set_visible("true");
            obj.getSetter("position").set("absolute");
            obj._setContents("<Formats/>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","15","239","264","21",null,null,null,null,null,null,this);
            obj.set_text("original - ds_data");
            obj.getSetter("position").set("absolute");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","15","417","243","21",null,null,null,null,null,null,this);
            obj.set_text("Y축(GroupKey) -  ds_pivot");
            obj.getSetter("position").set("absolute");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","531","239","286","21",null,null,null,null,null,null,this);
            obj.set_text("X축(PivotKey) - ds_pivothead");
            obj.getSetter("position").set("absolute");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_output4","15","570","1076","208",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.getSetter("useinputpanel").set("false");
            obj.set_cellsizingtype("col");
            obj.getSetter("position").set("absolute");
            obj._setContents("<Formats/>");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","15","545","264","21",null,null,null,null,null,null,this);
            obj.set_text("Grid Format Data - ds_gridinfo");
            obj.getSetter("position").set("absolute");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_output0","15","76","553","159",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.getSetter("useinputpanel").set("false");
            obj.getSetter("position").set("absolute");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"31\" band=\"left\"/><Column size=\"44\" band=\"left\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\" band=\"right\"/><Column size=\"40\" band=\"right\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"3\" colspan=\"2\" text=\"구분\"/><Cell col=\"2\" colspan=\"2\" text=\"expr:YEAR + &apos;년&apos;\"/><Cell col=\"4\" rowspan=\"2\" colspan=\"2\" text=\"합계\"/><Cell row=\"1\" col=\"2\" colspan=\"2\" text=\"expr:QUARTER +&apos;분기&apos;\"/><Cell row=\"2\" col=\"2\" text=\"VA1\"/><Cell row=\"2\" col=\"3\" text=\"VA2\"/><Cell row=\"2\" col=\"4\" text=\"VA1\"/><Cell row=\"2\" col=\"5\" text=\"VA2\"/></Band><Band id=\"body\"><Cell text=\"bind:CITY\"/><Cell col=\"1\" text=\"bind:CITY_NAME\"/><Cell col=\"2\" style=\"color: ;\" text=\"bind:VA1\"/><Cell col=\"3\" text=\"bind:VA2\"/><Cell col=\"4\" text=\"expr:comp.parent.fn_pivotSum(&quot;VA1&quot;, currow, &quot;ds_data&quot;, &quot;CITY,CITY_NAME&quot;)\"/><Cell col=\"5\" text=\"expr:comp.parent.fn_pivotSum(&quot;VA2&quot;, currow, &quot;ds_data&quot;, &quot;CITY,CITY_NAME&quot;)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_input","15","41","90","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("execute");
            obj.getSetter("position").set("absolute");
            this.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox00","576","41","515","194",null,null,null,null,null,null,this);
            obj.set_text(" 설명 ");
            obj.set_taborder("3");
            obj.set_cssclass("_gb_sample");
            obj.set_enableevent("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","587","59","493","171",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("지정한 칼럼 정보(X축, Y축)로 데이터를 크로스탭으로 구성하고 Grid포맷 정보를 가진 \r\nDataset을 이용 Grid 포맷을 \r\n동적(Sample::Comp_Grid_Row_DatasetColumn.xfdl 참조) 생성함\r\nds_data - 크로스탭 생성 전 원본, ds_gridinfo - Grid 포맷 정보\r\nds_pivothead - 열 정보 구성용, ds_pivot - 행 정보 구성용\r\n\r\n※ original Grid의 데이터를 왼쪽 Grid처럼 행과 열을 교차시켜 데이터를 집계하는 \r\n크로스탭(엑셀의 피봇) 형태로 구성함");
            obj.set_cssclass("_SS_Text");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","15","10","242","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("크로스탭 Grid 생성하기");
            obj.set_cssclass("_SS_Emphasis");
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
        this.registerScript("SML041Comp_Grid_Row_ScriptColumn3.xfdl", function() {

        this.fv_nFixCnt      = 0;
        this.fv_sFixinfo     = "";
        this.fv_sFactorinfo  = "";

        this.btn_input_onclick = function(obj,  e)
        {
        	this.fn_crossTab(this.grd_output0, this.ds_data, "YEAR,QUARTER", "CITY,CITY_NAME", "");
        };

        this.fn_crossTab = function(objGrid, objDs, sPivotkey, sGroupkey, sSummarykey)
        {
            if (this.fn_isNull(sGroupkey) == true)
            {
                trace("@@@@@ GroupKey[groupkey]");
                return;
            }
            if (this.fn_isNull(sPivotkey) == true)
            {
                trace("@@@@@ PivotKey[pivotkey]");
                return;
            }

            sGroupkey = sGroupkey.replace(" ", "");
            sPivotkey = sPivotkey.replace(" ", "");

            this.fn_init(objGrid, sPivotkey);

            objDs.addColumn("PVSEQ", "string",5);
            this.ds_pivot.clear();

            if (objDs.getRowCount() == 0)
            {
                return;
            }

            this.ds_pivot.set_enableevent(false);
            this.ds_pivothead.set_enableevent(false);

        	//ds_pivot fix
        	if (this.fn_dsGroupColSetting(objDs) == false)
        	{
                return;
            }

            //ds_pivothead
        	this.fn_dsPivotColSetting(objDs, sPivotkey);

            objDs.set_keystring("S:" + sGroupkey.replace(",", "+") + "+" + sPivotkey.replace(",", "+"));

        	var arrFix = this.fv_sFixinfo.split(/,/g);
            var arrFactor = this.fv_sFactorinfo.split(/,/g);
            var sCurrGroupVal = "";
            var sPrevGroupVal = "";
            var sCurrVal = "";
            var sPrevVal = "";
            var nRow = 0;

            var arrGroup = sGroupkey.split(/,/g);
            objDs.set_enableevent(false);
            //ds_pivot Factor
            for (var i = 0; i < objDs.getRowCount(); i++)
            {
                sCurrVal = "";
                for (var j = 0; j < arrGroup.length; j++) //GroupKey
                {
                    sCurrVal += objDs.getColumn(i, arrGroup[j]);
                }

                sCurrGroupVal = sCurrVal;
                sCurrVal += objDs.getColumn(i, "PVSEQ");

                if (sCurrVal == sPrevVal)
                {
                    continue;
                }

                if (sCurrGroupVal == sPrevGroupVal)
                {
                    this.fn_copyFactorRecord(objDs, nRow, i, arrFactor);
                }
                else
                {
                    nRow = this.ds_pivot.addRow();
                    this.fn_copyFixRecord(objDs, nRow, i);
                    this.fn_copyFactorRecord(objDs, nRow, i, arrFactor);
                }

                sPrevGroupVal = sCurrGroupVal;
                sPrevVal = sCurrVal;
            }

            objDs.set_enableevent(true);
            this.fn_setGridFormat(objGrid, sPivotkey, sGroupkey, sSummarykey);
            this.ds_gridinfo.filter("");
        	this.ds_pivot.set_enableevent(true);
        	this.ds_pivothead.set_enableevent(true);

            this.grd_output2.set_binddataset("ds_pivothead");
            this.grd_output2.createFormat();

            this.grd_output3.set_binddataset("ds_pivot");
            this.grd_output3.createFormat();

            this.grd_output4.set_binddataset("ds_gridinfo");
            this.grd_output4.createFormat();
        };

        this.fn_init = function(objGrid, sPivotkey)
        {
            var dsname = "ds_gridinfo";
            var ds0 = new Dataset;
            this.addChild(dsname , ds0);
            ds0.name = dsname;
            ds0.addColumn("seq"             , "int"   , 5);
            ds0.addColumn("cell"            , "int"   , 5);
            ds0.addColumn("band"            , "string", 10);
            ds0.addColumn("fix"             , "string", 10);
        	ds0.addColumn("cSize"            , "int"   , 2);
        	ds0.addColumn("text"            , "string", 20);
            ds0.addColumn("col"             , "int"   , 50);
            ds0.addColumn("colspan"         , "int"   , 50);
            ds0.addColumn("row"             , "int"   , 50);
            ds0.addColumn("rowspan"         , "int"   , 50);
            ds0.addColumn("displaytype"     , "string", 20);
            ds0.addColumn("edittype"        , "string", 20);
            ds0.addColumn("combocodecol"    , "string", 20);
            ds0.addColumn("combodatacol"    , "string", 20);
            ds0.addColumn("combodataset"    , "string", 20);
            ds0.addColumn("align"           , "string", 20);
            ds0.addColumn("color"           , "string", 50);
            ds0.addColumn("background"      , "string", 50);
            ds0.addColumn("color2"          , "string", 50);
            ds0.addColumn("background2"     , "string", 50);
            ds0.addColumn("subcell"         , "int"   , 50);
            ds0.addColumn("suppress"        , "string", 1);
            ds0.addColumn("suppressalign"   , "string", 50);
            ds0.addColumn("mask"            , "string", 50);
            ds0.addColumn("subsumtext"      , "string", 50);
            ds0.addColumn("expr"            , "string", 50);

            ds0.clearData();
            ds0.set_enableevent(false);

            // columns
            var nSeq = 0;
            var nRow = 0;
            var nCount = objGrid.getFormatColCount();
            for (var i = 0; i < nCount; i++)
            {
                nSeq++;
                nRow = ds0.addRow();
                ds0.setColumn(nRow, "band", "columns");
                ds0.setColumn(nRow, "fix" , objGrid.getFormatColProperty(i, "band"));
                ds0.setColumn(nRow, "cSize", objGrid.getFormatColProperty(i, "size"));
                ds0.setColumn(nRow, "cell", i);
                ds0.setColumn(nRow, "seq" , nSeq);
            }
            // rows
            nCount = objGrid.getFormatRowCount();
            for (var i = 0; i < nCount; i++)
            {
                nSeq++;
                nRow = ds0.addRow();
                ds0.setColumn(nRow, "band", "rows");
                ds0.setColumn(nRow, "fix" , objGrid.getFormatRowProperty(i, "band"));
                ds0.setColumn(nRow, "cSize", objGrid.getFormatRowProperty(i, "size"));
                ds0.setColumn(nRow, "cell", i);
                ds0.setColumn(nRow, "seq" , nSeq);
            }
            var arrBand = new Array();
            arrBand[0] = "head";
            arrBand[1] = "body";
            arrBand[2] = "summary";

            var sBand = "";
            for (var i = 0; i < 3; i++)
            {
                sBand = arrBand[i];
                nCount = objGrid.getCellCount(sBand);
                for (var j = 0; j < nCount; j++)
                {
                    nSeq++;
                    nRow = ds0.addRow();
                    ds0.setColumn(nRow, "band"          , sBand);
                    ds0.setColumn(nRow, "cell"          , j);
                    ds0.setColumn(nRow, "text"          , objGrid.getCellProperty(sBand, j, "text"));
                    ds0.setColumn(nRow, "displaytype"   , objGrid.getCellProperty(sBand, j, "displaytype"));
                    ds0.setColumn(nRow, "edittype"      , objGrid.getCellProperty(sBand, j, "edittype"));
                    ds0.setColumn(nRow, "combocodecol"  , objGrid.getCellProperty(sBand, j, "combocodecol"));
                    ds0.setColumn(nRow, "combodatacol"  , objGrid.getCellProperty(sBand, j, "combodatacol"));
                    ds0.setColumn(nRow, "combodataset"  , objGrid.getCellProperty(sBand, j, "combodataset"));
                    ds0.setColumn(nRow, "align"         , objGrid.getCellProperty(sBand, j, "align"));
                    ds0.setColumn(nRow, "color"         , objGrid.getCellProperty(sBand, j, "color"));
                    ds0.setColumn(nRow, "background"    , objGrid.getCellProperty(sBand, j, "background"));
                    ds0.setColumn(nRow, "color2"        , objGrid.getCellProperty(sBand, j, "color2"));
                    ds0.setColumn(nRow, "background2"   , objGrid.getCellProperty(sBand, j, "background2"));
                    ds0.setColumn(nRow, "col"           , objGrid.getCellProperty(sBand, j, "col"));
                    ds0.setColumn(nRow, "colspan"       , objGrid.getCellProperty(sBand, j, "colspan"));
                    ds0.setColumn(nRow, "row"           , objGrid.getCellProperty(sBand, j, "row"));
                    ds0.setColumn(nRow, "rowspan"       , objGrid.getCellProperty(sBand, j, "rowspan"));
                    ds0.setColumn(nRow, "subcell"       , objGrid.getCellProperty(sBand, j, "subcell"));
                    ds0.setColumn(nRow, "suppress"      , objGrid.getCellProperty(sBand, j, "suppress"));
                    ds0.setColumn(nRow, "suppressalign" , objGrid.getCellProperty(sBand, j, "suppressalign"));
                    ds0.setColumn(nRow, "mask"          , objGrid.getCellProperty(sBand, j, "mask"));
                    ds0.setColumn(nRow, "subsumtext"    , objGrid.getCellProperty(sBand, j, "subsumtext"));
                    ds0.setColumn(nRow, "expr"          , objGrid.getCellProperty(sBand, j, "expr"));
                    ds0.setColumn(nRow, "seq"           , nSeq);
                }
            }
            ds0.set_enableevent(true);
           // Grid Binding dummy Dataset
            dsname = "ds_pivot";
            var	ds1 = new Dataset;
            this.addChild(dsname , ds1);
            ds1.set_name(dsname);

            dsname = "ds_pivothead";
            var	ds2 = new Dataset;
            this.addChild(dsname , ds2);
            ds2.set_name(dsname);
            // Pivot Head Dataset
            var arrPivot = sPivotkey.split(/,/g);
            for (var i = 0; i < arrPivot.length; i++)
            {
                this.ds_pivothead.addColumn("PCOL_" + i.toString().padLeft(3,'0') + "_VALUE", "string", 100);
                this.ds_pivothead.addColumn("PCOL_" + i.toString().padLeft(3,'0') + "_START", "int"   , 5);
                this.ds_pivothead.addColumn("PCOL_" + i.toString().padLeft(3,'0') + "_CNT"  , "int"   , 5);
            }
            this.ds_pivothead.addColumn("cell", "string", 5);

            ds0 = null;
            ds1 = null;
            ds2 = null;
        };


        this.fn_dsGroupColSetting = function(objDs)
        {
            this.ds_gridinfo.filter("band=='columns' && fix=='left'");

            this.fv_nFixCnt = this.ds_gridinfo.getRowCount();

            if (this.fv_nFixCnt == 0)
            {
                trace("@@@@@ Grid Left Fixed Column");
                return false;
            }
            this.ds_gridinfo.filter("band=='body'");
            this.ds_gridinfo.set_keystring("S:cell");

            var objColinfo;
            var sColid;
            for (var i = 0; i < this.fv_nFixCnt; i++)
            {
                sColid = this.ds_gridinfo.getColumn(i, "text");
                if (sColid.indexOf("bind:") >= 0)
                {
                    sColid = sColid.replace("bind:", "");
                }

                if (this.fn_isNull(this.fv_sFixinfo) == false)
                {
                    this.fv_sFixinfo += ",";
                }

                this.fv_sFixinfo += sColid;
                objColinfo = objDs.getColumnInfo(sColid);

                if (this.fn_isNull(objColinfo))
                {
                    trace("@@@@ GroupKey Column..ID:" + sColid);
                    return false;
                }
                this.ds_pivot.addColumn(sColid, objColinfo.type, objColinfo.size);
            }

            return true;
        }

        this.fn_dsPivotColSetting = function(objDs, sPivotkey)
        {
            this.ds_gridinfo.filter("");
            var nRightRow = this.ds_gridinfo.findRowExpr("band=='columns' && fix=='right'");
            var nRight = 9999;
            if (nRightRow >= 0)
            {
                nRight = this.ds_gridinfo.getColumn(nRightRow, "cell");
            }

            this.ds_gridinfo.filter('band=="body"');
            this.ds_gridinfo.set_keystring("S:cell");

            var sColid = "";
            for (var i = this.fv_nFixCnt; i < this.ds_gridinfo.getRowCount(); i++)
            {
                if (i >= nRight)
                {
                    continue;
                }

                sColid = this.ds_gridinfo.getColumn(i, "text");
                if (sColid.indexOf("bind:") >= 0)
                {
                    sColid = sColid.replace("bind:", "");
                }
                else
                {
                    sColid = "";
                }

                if (this.fn_isNull(this.fv_sFactorinfo) == false)
                {
                    this.fv_sFactorinfo += ",";
                }
                this.fv_sFactorinfo += sColid;
            }

            objDs.set_enableevent(false);
            objDs.set_keystring("S:" + sPivotkey.replace(",", "+"));

            var arrFactor = this.fv_sFactorinfo.split(/,/g);
            var arrList1 = new Array();
            var arrList2 = new Array();
            for (var j = 0; j < arrFactor.length; j++)
            {
                objColinfo = objDs.getColumnInfo(arrFactor[j]);
                arrList1[j] = objColinfo.type;
                arrList2[j] = objColinfo.size;
            }

            var arrPivot = sPivotkey.split(/,/g);
            var sPrevVal = "";
            var sCurrVal = "";
            var nCnt = 0;
            var nRow = 0;
            var objColinfo;

            for (var i = 0; i < objDs.getRowCount(); i++)
            {
                sCurrVal = "";
                for (var j = 0; j < arrPivot.length; j++)
                {
                    sCurrVal = sCurrVal + objDs.getColumn(i, arrPivot[j]);
                }

                if (sCurrVal == sPrevVal)
                {
                    objDs.setColumn(i, "PVSEQ",(nCnt-1).toString().padLeft(3,'0'));
                }
                else
                {
                    nRow = this.ds_pivothead.addRow();
                    for (var j = 0; j < arrPivot.length; j++)
                    {
                        this.ds_pivothead.setColumn(nRow
                                            , "PCOL_" + j.toString().padLeft(3,'0') + "_VALUE"
                                            , objDs.getColumn(i, arrPivot[j]));
                    }
                    this.ds_pivothead.setColumn(nRow, "cell", nCnt.toString().padLeft(3,'0'));
                    for (var j = 0; j < arrFactor.length; j++)
                    {
                        this.ds_pivot.addColumn(arrFactor[j] + "_" + nCnt.toString().padLeft(3,'0'), arrList1[j], arrList2[j]);
                    }

                    objDs.setColumn(i, "PVSEQ", nCnt.toString().padLeft(3,'0'));
                    nCnt = nCnt + 1;
                    sPrevVal = sCurrVal;
                }
            }

            var nAddCnt = 1;
            var nStart = 0;

            for (var i = 0; i < arrPivot.length; i++)
            {
                if (this.ds_pivothead.getRowCount() == 1)
                {
                    this.ds_pivothead.setColumn(0, "PCOL_" + i.toString().padLeft(3,'0') + "_CNT",  1);
                    this.ds_pivothead.setColumn(0, "PCOL_" + i.toString().padLeft(3,'0') + "_START",0);
                }
                else
                {
                    for (var j = 0; j < this.ds_pivothead.getRowCount()-1; j++)
                    {
                        if (nAddCnt == 1)
                        {
                            nStart = j;
                        }

                        if (this.ds_pivothead.getColumn(j,   "PCOL_" + i.toString().padLeft(3,'0') + "_VALUE") ==
                            this.ds_pivothead.getColumn(j+1, "PCOL_" + i.toString().padLeft(3,'0') + "_VALUE"))
                        {
                            nAddCnt++;
                        }
                        else
                        {
                            this.ds_pivothead.setColumn(j, "PCOL_" + i.toString().padLeft(3,'0') + "_CNT"  , nAddCnt);
                            this.ds_pivothead.setColumn(j, "PCOL_" + i.toString().padLeft(3,'0') + "_START", nStart);
                            nAddCnt = 1;
                        }
                    }

                    if (this.ds_pivothead.getColumn(this.ds_pivothead.getRowCount()-1, "PCOL_" + i.toString().padLeft(3,'0') + "_VALUE") !=
                        this.ds_pivothead.getColumn(this.ds_pivothead.getRowCount()-2, "PCOL_" + i.toString().padLeft(3,'0') + "_VALUE"))
                    {
                        this.ds_pivothead.setColumn(this.ds_pivothead.getRowCount()-1, "PCOL_" + i.toString().padLeft(3,'0') + "_START", this.ds_pivothead.getRowCount()-1);
                    }
                    else
                    {
                        this.ds_pivothead.setColumn(this.ds_pivothead.getRowCount()-1, "PCOL_" + i.toString().padLeft(3,'0') + "_START", nStart);
                    }

                    this.ds_pivothead.setColumn(this.ds_pivothead.getRowCount()-1, "PCOL_" + i.toString().padLeft(3,'0') + "_CNT", nAddCnt);
                    nAddCnt = 1;
                }
            }

            objDs.set_enableevent(true);
        }

        this.fn_copyFixRecord = function(objDs, nRow, nOrgRow)
        {
            var arrFix = this.fv_sFixinfo.split(/,/g);

            for (var i = 0; i < arrFix.length; i++)
            {
                this.ds_pivot.setColumn(nRow, arrFix[i], objDs.getColumn(nOrgRow, arrFix[i]));
            }
        };

        this.fn_copyFactorRecord = function(objDs, nRow, nOrgRow, arrFactor)
        {
            var sSeq = objDs.getColumn(nOrgRow, "PVSEQ");
            for (var i = 0; i < arrFactor.length; i++)
            {
                this.ds_pivot.setColumn(nRow
        							, arrFactor[i] + "_" + sSeq
        							, objDs.getColumn(nOrgRow, arrFactor[i]));
            }
        };

        this.fn_setGridFormat = function(objGrid, sPivotkey, sGroupkey, sSummarykey)
        {
            var arrFactor = this.fv_sFactorinfo.split(/,/g);

            this.ds_gridinfo.filter("");
            this.ds_gridinfo.set_keystring("S:seq");

            var sContents = "";
            sContents += '<Formats>\n';
            sContents += '<Format id="default">\n';
            sContents += '\t<Columns>\n';

            this.ds_gridinfo.filter('band=="columns" && fix!="right"');
            // Columns : LEFT FIXED Column
            for (var i = 0; i < this.fv_nFixCnt; i++)
            {
                sContents += '\t\t<Column size="' + this.ds_gridinfo.getColumn(i, "cSize") + '"'
                          + ' band="' + this.ds_gridinfo.getColumn(i, "fix") + '"/>\n' ;
            }
            // Columns : FACTOR Column
            for (var i = 0; i < this.ds_pivothead.getRowCount(); i++)
            {
                for (var j = this.fv_nFixCnt; j < this.ds_gridinfo.getRowCount(); j++)
                {
                    sContents += '\t\t<Column size="' + this.ds_gridinfo.getColumn(j, "cSize") + '"/>\n' ;
                }
            }
            // Columns : RIGHT FIXED Column
            this.ds_gridinfo.filter('band=="columns" && fix=="right"');
            for (var i = 0; i < this.ds_gridinfo.getRowCount(); i++)
            {
                sContents += '\t\t<Column size="' + this.ds_gridinfo.getColumn(i, "cSize") + '"'
                          + ' band="' + this.ds_gridinfo.getColumn(i, "fix") + '"/>\n' ;
            }

            sContents += '\t</Columns>\n';

            // Rows
            sContents += '\t<Rows>\n';
            this.ds_gridinfo.filter('band=="rows"');
            for (var i = 0; i < this.ds_gridinfo.getRowCount(); i++)
            {
                sContents += '\t\t<Row size="' + this.ds_gridinfo.getColumn(i, "cSize") + '"'
                          + ' band="' + this.ds_gridinfo.getColumn(i, "fix") + '"/>\n' ;
            }
            sContents += '\t</Rows>\n';

            // Head : LEFT FIXED Column
            sContents += '\t<Band id="head">\n';
            this.ds_gridinfo.filter('band=="head" && col<' + this.fv_nFixCnt);

            for (var i = 0; i < this.ds_gridinfo.getRowCount(); i++)
            {
                sContents = sContents + this.fn_contentsRow(this.ds_gridinfo, i, this.ds_gridinfo.getColumn(i, "col"), "");
            }
            this.ds_gridinfo.filter("");
            var nRightRow = this.ds_gridinfo.findRowExpr('band=="columns" && fix=="right"');
            var nRight = 9999;
            if (nRightRow >= 0)
            {
                nRight = this.ds_gridinfo.getColumn(nRightRow, "cell");
            }

            // Head : FACTOR Column
            this.ds_gridinfo.filter('band=="head" && (col>=' + this.fv_nFixCnt + ' && col < ' + nRight + ')');

            var nFactorCol = this.ds_gridinfo.getColumn(0, "col");
            var nPivotCol  = nFactorCol;
            var nStartCol  = nFactorCol;
            var sSeq   = "";
            var sCol   = "";
            var sText  = "";
            var nCol   = 0;
            var nStart = 0;
            var nCount = 0;
            var arrPivot = sPivotkey.split(/,/g);
            // FACTOR Column
            for (var i = 0; i < this.ds_pivothead.getRowCount(); i++)
            {
                for (var j = 0; j < this.ds_gridinfo.getRowCount(); j++)
                {
                    if (this.ds_gridinfo.getColumn(j, "text").indexOf("bind:") > -1)
                    {
                        sCol = this.ds_gridinfo.getColumn(j, "text").replace("bind:", "");
                        for (var k = 0; k < arrPivot.length; k++)
                        {
                            if (arrPivot[k] == sCol)
                            {
                                sText  = this.ds_pivothead.getColumn(i, "PCOL_" +  k.toString().padLeft(3,'0') + "_VALUE");
                                nStart = this.ds_pivothead.getColumn(i, "PCOL_" +  k.toString().padLeft(3,'0') + "_START");

                                if (nStart == 0)
                                {
                                    nStart = nStartCol;
                                }
                                else
                                {
                                    nStart = (nStart * arrFactor.length) + nStartCol;
                                }
                                nCount = this.ds_pivothead.getColumn(i, "PCOL_" +  k.toString().padLeft(3,'0') + "_CNT");
                                break;
                            }
                        }
                        nCol = nPivotCol;
                    }
                    else if (this.ds_gridinfo.getColumn(j, "text").indexOf("expr:") > -1)
                    {
                        for (var k = 0; k <arrPivot.length; k++)
                        {
                            if (this.ds_gridinfo.getColumn(j, "text").indexOf(arrPivot[k]) > 0)
                            {
                                sText  = this.ds_pivothead.getColumn(i, "PCOL_" +  k.toString().padLeft(3,'0') + "_VALUE");
                                sCol   = this.ds_gridinfo.getColumn(j, "text").replace(arrPivot[k], sText);
                                sCol   = sCol.replace("expr:", "");
                                sText  = eval(sCol);
                                nStart = this.ds_pivothead.getColumn(i, "PCOL_" +  k.toString().padLeft(3,'0') + "_START");

                                if (nStart == 0)
                                {
                                    nStart = nStartCol;
                                }
                                else
                                {
                                    nStart = (nStart * arrFactor.length) + nStartCol;
                                }
                                nCount = this.ds_pivothead.getColumn(i, "PCOL_" +  k.toString().padLeft(3,'0') + "_CNT");
                                break;
                            }
                        }
                        nCol = nPivotCol;
                    }
                    else
                    {
                        sText = this.ds_gridinfo.getColumn(j, "text");
                        nCol = nFactorCol;
                        nFactorCol++;
                        nCount = 1;
                        nStart = 0;
                    }

                    if (nCount != undefined)
                    {
                        sContents = sContents + this.fn_contentsRow(this.ds_gridinfo, j, nCol, "", sText, nStart, nCount, arrFactor.length);
                    }
                }
                nPivotCol = nPivotCol + arrFactor.length;
            }

            // Head : RIGHT FIXED Column
            this.ds_gridinfo.filter('band=="head" && col>=' + nRight);
            nCol++;
            var nFcol = this.ds_gridinfo.getColumn(0, "col");
            var nGap = 0;
            for (var i = 0; i < this.ds_gridinfo.getRowCount(); i++)
            {
                nGap = this.ds_gridinfo.getColumn(i, "col") - nFcol;
                nCol = nCol + nGap;
                sContents = sContents + this.fn_contentsRow(this.ds_gridinfo, i, nCol, "");
            }

            sContents += '\t</Band>\n';
            // BODY : LEFT FIXED Column
            sContents += '\t<Band id="body">\n';
            this.ds_gridinfo.filter('band=="body" && col<' + this.fv_nFixCnt);
            for (var i = 0; i < this.ds_gridinfo.getRowCount(); i++)
            {
                sContents = sContents + this.fn_contentsRow(this.ds_gridinfo, i, this.ds_gridinfo.getColumn(i, "col"), "");
            }

            // BODY : FACTOR Column
            this.ds_gridinfo.filter('band=="body" && (col>=' + this.fv_nFixCnt + ' && col < ' + nRight + ')');

            nFactorCol = this.ds_gridinfo.getColumn(0, "col");
            nPivotCol  = nFactorCol;
            sCol  = "";
            sText = "";
            nCol  = 0;

            for (var i = 0; i < this.ds_pivothead.getRowCount(); i++)
            {
                sSeq = this.ds_pivothead.getColumn(i, "cell");
                for (var j = 0; j < this.ds_gridinfo.getRowCount(); j++)
                {
                    nCol = nFactorCol;
                    nFactorCol++;
                    sContents = sContents + this.fn_contentsRow(this.ds_gridinfo, j, nCol, sSeq);
                }
            }

            // BODY : RIGHT Column
            this.ds_gridinfo.filter('band=="body" && col>=' + nRight);
            nCol++;
            nFcol = this.ds_gridinfo.getColumn(0, "col");
            nGap = 0;
            for (var i = 0; i < this.ds_gridinfo.getRowCount(); i++)
            {
                nGap = this.ds_gridinfo.getColumn(i, "col") - nFcol;
                nCol = nCol + nGap;
                sContents = sContents + this.fn_contentsRow(this.ds_gridinfo, i, nCol, "");
            }
            sContents += '\t</Band>\n';
            this.ds_gridinfo.filter('band=="summary" && col<' + this.fv_nFixCnt);
            if (this.ds_gridinfo.getRowCount() > 0)
            {
                // SUMMARY : LEFT FIXED Column
                sContents += '\t<Band id="summary">\n';

                for (var i = 0; i < this.ds_gridinfo.getRowCount(); i++)
                {
                    sContents = sContents + this.fn_contentsRow(this.ds_gridinfo, i, this.ds_gridinfo.getColumn(i, "col"), "");
                }
                // SUMMARY : FACTOR Column
                this.ds_gridinfo.filter('band=="summary" && (col>=' + this.fv_nFixCnt + ' && col < ' + nRight + ')');
                nFactorCol = this.ds_gridinfo.getColumn(0, "col");
                nPivotCol  = nFactorCol;
                sCol  = "";
                sText = "";
                sSeq  = "";
                nCol  = 0;
                for (var i = 0; i < this.ds_pivothead.getRowCount(); i++)
                {
                    sSeq = this.ds_pivothead.getColumn(i, "cell");
                    for (var j = 0; j < this.ds_gridinfo.getRowCount(); j++)
                    {
                        nCol = nFactorCol;
                        nFactorCol++;
                        sContents = sContents + this.fn_contentsRow(this.ds_gridinfo, j, nCol, sSeq);
                    }
                }

                // SUMMARY : RIGHT FIXED Column
                this.ds_gridinfo.filter('band=="summary" && col>=' + nRight);

                nCol++;
                nFcol = this.ds_gridinfo.getColumn(0, "col");
                nGap  = 0;
                for (var i = 0; i < this.ds_gridinfo.getRowCount(); i++)
                {
                    nGap = this.ds_gridinfo.getColumn(i, "col") - nFcol;
                    nCol = nCol + nGap;
                    sContents = sContents + this.fn_contentsRow(this.ds_gridinfo, i, nCol, "");
                }
                sContents += '\t</Band>\n';
            }

            sContents += '\t</Format>\n';
            sContents += '\t</Formats>\n';

            objGrid.set_formats(sContents);

            this.ds_pivot.set_rowposition(0);
            objGrid.set_binddataset("ds_pivot");

            this.ds_pivot.set_keystring("S:" + sGroupkey.replace(",", "+"));
            if (this.fn_isNull(sSummarykey) == false)
            {
                this.ds_pivot.set_keystring("G:" + sSummarykey.replace(",", "+"));
            }
        };

        this.fn_contentsRow = function(objDsGrid, nRow, nCol, sSeq, sText, nStart, nCount, nFactorCnt)
        {
            var styles = ' style="';
            styles = styles + 'align:'       + this.fn_replaceCol(objDsGrid, nRow, "align"      , sSeq) + ';';
            styles = styles + 'color:'       + this.fn_replaceCol(objDsGrid, nRow, "color"      , sSeq) + ';';
            styles = styles + 'color2:'      + this.fn_replaceCol(objDsGrid, nRow, "color2"     , sSeq) + ';';
            styles = styles + 'background:'  + this.fn_replaceCol(objDsGrid, nRow, "background" , sSeq) + ';';
            styles = styles + 'background2:' + this.fn_replaceCol(objDsGrid, nRow, "background2", sSeq) + ';"';
            var colspan = objDsGrid.getColumn(nRow, "colspan");

            var sContents = '\t\t<Cell ';
            if (sText != undefined && sText != null)
            {
                if (nStart != undefined && nStart > 0)
                {
                    nCol = nStart;
                }
                if (nCount != undefined && nCount > 1)
                {
                    colspan = nCount * nFactorCnt;
                }
                sContents += ' text="' +  this.fn_xmlChrReplace(sText) + '"'
            }
            else
            {
                sContents += ' text="' +  this.fn_replaceCol(objDsGrid, nRow, "text", sSeq) + '"'
            }
            sContents += ' displaytype="' + this.fn_replaceCol(objDsGrid, nRow, "displaytype", sSeq) + '"'
            + ' edittype="' + this.fn_replaceCol(objDsGrid, nRow, "edittype", sSeq) + '"'
            + styles
            + ' col="'             + nCol + '"'
            + ' row="'             + objDsGrid.getColumn(nRow, "row") + '"'
            + ' colspan="'         + colspan + '"'
            + ' rowspan="'         + objDsGrid.getColumn(nRow, "rowspan") + '"'
            + ' subcell="'         + objDsGrid.getColumn(nRow, "subcell") + '"'
            + ' suppress="'        + this.fn_replaceCol(objDsGrid, nRow, "suppress"        , sSeq) + '"'
            + ' suppressalign="'   + this.fn_replaceCol(objDsGrid, nRow, "suppressalign"   , sSeq) + '"'
            + ' mask="'            + this.fn_replaceCol(objDsGrid, nRow, "mask"            , sSeq) + '"'
            + ' subsumtext="'      + this.fn_replaceCol(objDsGrid, nRow, "subsumtext"      , sSeq) + '"'
            + ' expr="'            + this.fn_replaceCol(objDsGrid, nRow, "expr"            , sSeq) + '"'
            + '/>\n';
            return sContents;
        };

        this.fn_replaceCol = function(objDsGrid, nRow, sValue, sSeq)
        {
            var sVal = objDsGrid.getColumn(nRow, sValue);

            if (sVal == undefined)
            {
                sVal = "";
            }
            else if (sSeq != "")
            {
                var arrFactor = this.fv_sFactorinfo.split(/,/g);

                for (var i = 0; i < arrFactor.length; i++)
                {
                    if (sVal.indexOf(arrFactor[i]) >= 0)
                    {
                        sVal = sVal.replace(arrFactor[i],arrFactor[i] + "_" + sSeq);
                        sVal = sVal.replace('"', "'");
                        return sVal;
                    }
                }
            }

            return this.fn_xmlChrReplace(sVal);
        };

        this.fn_xmlChrReplace = function(sVal)
        {
             var sCR = String.fromCharCode(13);
             sVal = sVal.toString();
             sVal = sVal.replace("&", "&amp;");
             sVal = sVal.replace("<", "&lt;");
             sVal = sVal.replace(">", "&gt;");
             sVal = sVal.replace(/\"/g, "&quot;");
             sVal = sVal.replace("'", "&apos;");
             sVal = sVal.replace('"', '/"');
             sVal = sVal.replace(" ", "&#32;");
             sVal = sVal.replace(sCR, "&#13;");

             return sVal;
        }

        this.fn_pivotSum = function(sCol, nRow, sDs, sGroupkey)
        {
            var sGrp = sGroupkey.replace(":", ", ");
            var arrGroup = sGrp.split(/,/g);
            var sSum = "";
            for (var i = 0; i <arrGroup.length; i++)
            {
                if (i > 0)
                {
                    sSum += " && ";
                }
                sSum += 	"(" + arrGroup[i] + "=='" +
                        this.ds_pivot.getColumn(nRow, arrGroup[i]) + "')";
            }

        	var objDs = this.all[sDs];
            return objDs.getCaseSum(sSum, sCol);
        };

        this.fn_isNull = function(sValue)
        {
            if (new String(sValue).valueOf() == "undefined")
            {
                return true;
            }
            if (sValue == null)
            {
                return true;
            }
            if (("x"+sValue == "xNaN") && (new String(sValue.length).valueOf() == "undefined"))
            {
                return true;
            }
            if (sValue.length == 0)
            {
                return true;
            }
            return false;
        };
        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_input.addEventHandler("onclick",this.btn_input_onclick,this);
        };
        this.loadIncludeScript("SML041Comp_Grid_Row_ScriptColumn3.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
