(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleGridSum");
            this.set_titletext("그리드 합계(걸럼병합/소계/합계/CELL자동사이즈)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSample", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">warm</Col><Col id=\"Column2\">red</Col><Col id=\"Column3\">1</Col></Row><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">warm</Col><Col id=\"Column2\">yellow</Col><Col id=\"Column3\">2</Col></Row><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">cool</Col><Col id=\"Column2\">blue</Col><Col id=\"Column3\">3</Col></Row><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">cool</Col><Col id=\"Column2\">navy</Col><Col id=\"Column3\">4</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">acid</Col><Col id=\"Column2\">lemon</Col><Col id=\"Column3\">5</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">acid</Col><Col id=\"Column2\">orange</Col><Col id=\"Column3\">6</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">sweet</Col><Col id=\"Column2\">test</Col><Col id=\"Column3\">7</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">sweet</Col><Col id=\"Column2\">strawberry</Col><Col id=\"Column3\">8</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">sweet</Col><Col id=\"Column2\">banana</Col><Col id=\"Column3\">9</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSample00", this);
            obj.set_keystring("G:Column0");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">warm</Col><Col id=\"Column2\">red</Col><Col id=\"Column3\">1</Col></Row><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">warm</Col><Col id=\"Column2\">yellow</Col><Col id=\"Column3\">2</Col></Row><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">cool</Col><Col id=\"Column2\">blue</Col><Col id=\"Column3\">3</Col></Row><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">cool</Col><Col id=\"Column2\">navy</Col><Col id=\"Column3\">4</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">acid</Col><Col id=\"Column2\">lemon</Col><Col id=\"Column3\">5</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">acid</Col><Col id=\"Column2\">orange</Col><Col id=\"Column3\">6</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">sweet</Col><Col id=\"Column2\">test</Col><Col id=\"Column3\">7</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">sweet</Col><Col id=\"Column2\">strawberry</Col><Col id=\"Column3\">8</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">sweet</Col><Col id=\"Column2\">banana</Col><Col id=\"Column3\">9</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSize", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">가</Col><Col id=\"Column1\">band 속성값이 &quot;body&quot;인 Row 의 높이가 자동조절됩니다.</Col><Col id=\"Column2\">red</Col><Col id=\"Column3\">1</Col></Row><Row><Col id=\"Column0\">가나</Col><Col id=\"Column1\">band 속성값이 &quot;body&quot;인 Row 의 높이가 자동조절됩니다.&#10;Row 중 가장 높이가 큰 Row에 맞게 모든 Row의 높이가 설정됩니다.&#10;</Col><Col id=\"Column2\">yellow</Col><Col id=\"Column3\">2</Col></Row><Row><Col id=\"Column0\">가나다</Col><Col id=\"Column1\">band 속성값이 &quot;body&quot;인 Row 의 높이가 자동조절됩니다.&#10;Row 중 가장 높이가 큰 Row에 맞게 모든 Row의 높이가 설정됩니다.&#10;band 속성값이 &quot;head&quot;, &quot;summary&quot; 인 Row 의 높이는 자동조절하지 않고, 디자인 시 설정한 크기로 유지합니다.&#10;</Col><Col id=\"Column2\">blue</Col><Col id=\"Column3\">3</Col></Row><Row><Col id=\"Column0\">가나다라</Col><Col id=\"Column1\">band 속성값이 &quot;body&quot;인 Row 의 높이가 자동조절됩니다.&#10;Row 중 가장 높이가 큰 Row에 맞게 모든 Row의 높이가 설정됩니다.&#10;band 속성값이 &quot;head&quot;, &quot;summary&quot; 인 Row 의 높이는 자동조절하지 않고, 디자인 시 설정한 크기로 유지합니다.&#10;&#10;band 속성값이 &quot;body&quot;인 Column 의 너비가 자동조절됩니다.&#10;각 Column 별로 가장 너비가 큰 Cell 에 맞게 Column의 너비가 따로 설정됩니다.&#10;band 속성값이 &quot;left&quot;, &quot;right&quot; 인 Column 의 너비는 자동조절하지 않고, 디자인 시 설정한 크기로 유지합니다.</Col><Col id=\"Column2\">navy</Col><Col id=\"Column3\">4</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","20","135","328","18",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("1.Suppress");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_cssclass("sta_WF_Title01");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","22","161","310",null,null,"16",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("dsSample");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"63\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:Column1\" suppress=\"2\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","340","135","328","18",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("2.소계,합계");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_cssclass("sta_WF_Title01");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","342","161","402",null,null,"16",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsSample00");
            obj.set_autofittype("col");
            obj.set_selecttype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"64\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"rowLevel\"/><Cell col=\"1\" text=\"Column0\"/><Cell col=\"2\" text=\"Column1\"/><Cell col=\"3\" text=\"Column2\"/><Cell col=\"4\" text=\"Column3\"/></Band><Band id=\"body\"><Cell text=\"expr:dataset.getRowLevel(currow)\"/><Cell col=\"1\" text=\"bind:Column0\" suppress=\"1\"/><Cell col=\"2\" text=\"bind:Column1\" suppress=\"2\"/><Cell col=\"3\" text=\"expr:dataset.getRowLevel(currow) == 0 ? Column2 : &apos;소계&apos;\"/><Cell col=\"4\" text=\"bind:Column3\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" colspan=\"3\" text=\"합계\"/><Cell col=\"4\" text=\"expr:dataset.getSum(&apos;Column3&apos;)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","773","133","278","18",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("3. Auto Size");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_cssclass("sta_WF_Title01");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00","773","181",null,"239","18",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("dsSize");
            obj.set_autosizingtype("col");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"칼럼0\"/><Cell col=\"1\" text=\"칼럼2\"/><Cell col=\"2\" text=\"칼럼3\" autosizecol=\"limitmin\"/><Cell col=\"3\" text=\"칼럼1\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column2\"/><Cell col=\"2\" text=\"bind:Column3\" autosizecol=\"limitmin\"/><Cell col=\"3\" text=\"bind:Column1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd01","773","455",null,null,"20","14",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("dsSize");
            obj.set_autosizingtype("both");
            obj.set_extendsizetype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"칼럼0\"/><Cell col=\"1\" text=\"칼럼1\"/><Cell col=\"2\" text=\"칼럼2\"/><Cell col=\"3\" text=\"칼럼3\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static05",null,"4","1622","23","6",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("그리드 그룹/합계 처리");
            obj.set_textAlign("center");
            obj.set_background("#f80626");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","12","30",null,"90","6",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("1. Suppress - 그리드의 row값이 같을 경우 하나의 값으로 표현해주는 기능\r\r\n2. 소계, 합계 - 그리드 소계, 합계 처리 샘플\r\n3. Auto Size - Grid Column, Row Auto Size 설정 샘플\r\n 예) -  autosizingtype 속성 : Grid 에 데이터가 모두 표시되도록 Row, Column 의 크기를 자동조절 할 지 설정하는 속성입니다.\r\n      -  extendsizetype 속성 : autosizingtype 속성에 의해 Row 의 높이가 자동조절될 때 각 Row 별로 따로 조절 할 지 설정하는 속성입니다.(각각로단위)");
            obj.set_textAlign("left");
            obj.set_background("cadetblue");
            obj.set_font("bold 14px/normal \"Gulim\"");
            obj.set_color("#ffffff");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01","770","154","130","22",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("원래하면");
            obj.set_cssclass("sta_WF_Title02");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("stc_00","770","429","130","22",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("속성을 셋팅화면");
            obj.set_cssclass("sta_WF_Title02");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SML024SampleGridSumM01.xfdl", function() {
        /**
        *  컨설팅 표준화 작업
        *  @MenuPath    샘플 > 그리드 합계
        *  @FileName 	sampleGridType.xfdl
        *  @Creator 	jiback
        *  @CreateDate 	2017.03.09
        *  @Desction    그리드 기능
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2017.03.09     	jiback 	                최초 생성
        *  2017.10.17     	jiback       	        주석 정비
        *******************************************************************************
        */

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);
        };

        this.btn00_onclick = function(obj,e)
        {
        	trace(this.dsList.saveXML());
        };

        this.sta01_onclick = function(obj,e)
        {

        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static03.addEventHandler("onclick",this.Static03_onclick,this);
        };
        this.loadIncludeScript("SML024SampleGridSumM01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
