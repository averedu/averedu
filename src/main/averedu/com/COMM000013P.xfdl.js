(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COMM000013P");
            this.set_titletext("Find 데이타 찾기");
            this.set_cssclass("frm_WF_Pop01");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,270);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_find", this);
            obj._setContents("<ColumnInfo><Column id=\"index\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"displaytype\" type=\"STRING\" size=\"256\"/><Column id=\"edittype\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static67","20","75",null,"36","20",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","110",null,"36","20",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","20","145",null,"36","20",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","180",null,"36","20",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","20","215",null,"36","20",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","106","464","270","32",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_td");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","16",null,"25","280",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("데이터 찾기");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_Title01");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","20","75","102","36",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("대상칼럼");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_col","130","80","241","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_find");
            obj.set_codecolumn("index");
            obj.set_datacolumn("name");
            obj.set_text("cbo00");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","20","110","102","36",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("찾을 문자열");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","16","464","90","32",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("바꿀 문자열");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_thFirst");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","20","145","102","36",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("찾을 방향");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_direction","130","150","125","26",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_direction("vertical");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var rdo_direction_innerdataset = new nexacro.NormalDataset("rdo_direction_innerdataset", obj);
            rdo_direction_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">prev</Col><Col id=\"datacolumn\">이전</Col></Row><Row><Col id=\"datacolumn\">다음</Col><Col id=\"codecolumn\">next</Col></Row></Rows>");
            obj.set_innerdataset(rdo_direction_innerdataset);
            obj.set_value("next");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","20","180","102","36",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("찾을 위치");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_startRow","130","185","177","26",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_direction("vertical");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var rdo_startRow_innerdataset = new nexacro.NormalDataset("rdo_startRow_innerdataset", obj);
            rdo_startRow_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">current</Col><Col id=\"datacolumn\">현재위치</Col></Row><Row><Col id=\"datacolumn\">처음부터</Col><Col id=\"codecolumn\">first</Col></Row></Rows>");
            obj.set_innerdataset(rdo_startRow_innerdataset);
            obj.set_value("current");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta05","20","215","102","36",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("찾을 조건");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_cond","130","220","115","26",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_direction("vertical");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var rdo_cond_innerdataset = new nexacro.NormalDataset("rdo_cond_innerdataset", obj);
            rdo_cond_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">equal</Col><Col id=\"datacolumn\">일치</Col></Row><Row><Col id=\"datacolumn\">포함</Col><Col id=\"codecolumn\">inclusion</Col></Row></Rows>");
            obj.set_innerdataset(rdo_cond_innerdataset);
            obj.set_text("포함");
            obj.set_value("inclusion");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_case","251","220","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("대/소문자 구분");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_find",null,"43","51","26","73",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("찾기");
            obj.set_cssclass("btn_WF_Pop");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","212","434","70","26",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("바꾸기");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn02","286","434","90","26",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("모두바꾸기");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"43","51","26","17",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_Pop");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_find","130","115","241","26",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Edit("edt01","115","467","253","26",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_topClose",null,"10","35","25","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_Close01");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",400,270,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("COMM000013P.xfdl", function() {
        /**
        *
        *  @MenuPath        cmm > cmmFind.xfdl
        *  @FileName 		cmmFind.xfdl
        *  @Creator 	    jiback
        *  @CreateDate 	    2017.12.01
        *  @Desction        스크립트 표준 및 주석 표준 정의
        ************** 소스 수정 이력 ***************************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2017.12.01     	     jiback	                최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.fv_grid;
        this.fv_ds;
        this.fv_selectRow;
        this.fv_cellname;
        this.fv_cellindex;
        this.fv_selectType;
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.fv_grid       = this.getOwnerFrame().pvGrid;
        	this.fv_ds         = this.fv_grid.getBindDataset();
        	this.fv_selectRow  = this.getOwnerFrame().pvStrartRow;
        	this.fv_selectType = this.getOwnerFrame().pvSelectType;
        	this.fv_selectCell = this.getOwnerFrame().pvCell;

        	//this.fv_grid.set_selecttype("cell");  //jgj
        	this.fn_getHeadText();

        	this.edt_find.setFocus();
        };

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /**
         * @description 그리드의 헤드정보를 받아와 콤보 세팅
        */
        this.fn_getHeadText = function ()
        {
        	var sDisplaytype;
        	var sEdittype;
        	var stxt;
        	var nHeadCell;

        	this.ds_find.clearData();
        	for( var i=0; i<this.fv_grid.getCellCount("body"); i++)
        	{
        		sDisplaytype = this.fv_grid.getCellProperty("body", i, "displaytype");
        		sEdittype    = this.fv_grid.getCellProperty("body", i, "edittype");

        		if( sDisplaytype == "checkboxcontrol" || sEdittype == "checkbox"){
        			continue;
        		}
        		var col = this.fv_grid.getCellProperty("body", i, "col");
        		if( this.fv_grid.getRealColSize(col)  == 0 ) continue;

        		for( var j=0; j<this.fv_grid.getCellCount("head"); j++)
        		{
        			if( col == this.fv_grid.getCellProperty("head", j, "col") ){
        				nHeadCell = j;
        			}
        		}
        		stxt = this.fv_grid.getCellProperty("head", nHeadCell, "text");
        		if( stxt == "순번" || stxt == "상태") continue;

        		var nRow = this.ds_find.addRow();
        		this.ds_find.setColumn(nRow, "index", i);
        		this.ds_find.setColumn(nRow, "name", stxt);
        		this.ds_find.setColumn(nRow, "displaytype", sDisplaytype);
        		this.ds_find.setColumn(nRow, "edittype", sEdittype);
        	}
        	// 현재 선택된 셀을 선택하도록
        	// 현재 선택된 셀이 검색에 해당되지 않을 경우 INDEX=0으로 세팅
        	var nRow = this.ds_find.findRow("index", this.fv_selectCell);  //this.fv_grid.currentcell
        	if( nRow > -1 ){
        		this.cbo_col.set_value(this.ds_find.getColumn(nRow,"index"));
        	}else{
        		this.cbo_col.set_index(0);
        	}

        	this.fv_cellindex = this.cbo_col.value;
        };

        /**
         * @description 찾기옵션세팅
        */
        this.fn_getFindOption = function()
        {
        	var option = {
        		'direction': this.rdo_direction.value,
        		'position': this.rdo_startRow.value,
        		'scope': 'col',
        		'condition': this.rdo_cond.value,
        		'strict': this.chk_case.value,
        		'cell': this.cbo_col.value,
        	};

        	return option;
        };

        /**
         * @description 각 컬럼 타입별 바꾸기 가능/불가능 설정
        */
        this.fnCheckType = function (val)
        {
        	var arr = ["normal","text","calendarcontrol","date","editcontrol","number","text","textareacontrol"];
        	for( var i=0; i<arr.length; i++){
        		if ( arr[i] == val ){
        			return true;
        		}
        	}
        	return false;
        };


        /**
         * @description 바꾸기 결과
        */
        this.markGridFindResult = function(grid, findRow, findCell)
        {
        	var dataset = this.fv_ds;
        	dataset.set_rowposition(findRow);
        	grid.setCellPos(findCell);
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
         * @description [닫기]버튼이벤트
        */
        this.btn_close_onclick = function(obj,e)
        {
        	this.fv_grid.set_selecttype(this.fv_selectType);
        	this.close();
        };

        /**
         * @description [대상컬럼콤보] 변경이벤트
         */
        this.cbo_col_onitemchanged = function(obj,e)
        {
        	this.fv_cellindex = e.postvalue;
        };

        this.btn_find_onclick = function(obj,e)
        {
        	var txt         = this.edt_find.value;

        	if(this.gfn_isNull(txt)){
        		this.alert("[찾을 문자열]을 입력하세요.");
        		this.edt_find.setFocus();
        		return;
        	}

        	if(this.rdo_startRow.index == 1){
        		this.fv_ds.set_rowposition(0);
        	}

        	var option      = this.fn_getFindOption();
        	var findRowCell = this.gfn_findGridText(this.fv_grid, txt, option);

        	var findRow  = findRowCell[0];
        	var findCell = findRowCell[1];

        	//trace(findRow+" , "+findCell);

        	if ( findRow > -1 && findCell > -1 )
        	{
        		this.fv_grid.set_selecttype(this.fv_selectType); //cell일때 rowposition 잘못찾는경우 발생
        		this.fv_ds.set_rowposition(findRow);
        		this.fv_grid.set_selecttype("cell");
        		this.fv_grid.setCellPos(findCell);
        		//this.fv_grid.set_selecttype(this.fv_selectType);
        		//this.close();
        	}else
        	{
        		this.alert("찾기 결과가 없습니다.");
        	}
        };

        this.rdo_startRow_onitemchanged = function(obj,e)
        {
        	//찾을위치가 [처음부터]일 경우
        	if(e.postindex == 1)
        	{
        		this.fv_grid.lastFindRow  = -99;
        		this.fv_grid.lastFindCell = -99;
        	}
        };

        this.btn_topClose_onclick = function(obj,e)
        {
        	this.fv_grid.set_selecttype(this.fv_selectType);
        	this.close();
        };

        this.edt_find_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.btn_find.click();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.cbo_col.addEventHandler("onitemchanged",this.cbo_col_onitemchanged,this);
            this.rdo_startRow.addEventHandler("onitemchanged",this.rdo_startRow_onitemchanged,this);
            this.btn_find.addEventHandler("onclick",this.btn_find_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.btn02.addEventHandler("onclick",this.btn02_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.edt_find.addEventHandler("onkeyup",this.edt_find_onkeyup,this);
            this.btn_topClose.addEventHandler("onclick",this.btn_topClose_onclick,this);
        };
        this.loadIncludeScript("COMM000013P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
