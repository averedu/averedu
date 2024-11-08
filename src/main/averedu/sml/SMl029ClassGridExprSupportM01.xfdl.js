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
            this.set_titletext("각종 Grid Data표현방식");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_data", this);
            obj._setContents("<ColumnInfo><Column id=\"normal\" type=\"STRING\" size=\"256\"/><Column id=\"none\" type=\"STRING\" size=\"256\"/><Column id=\"bar\" type=\"STRING\" size=\"256\"/><Column id=\"button\" type=\"STRING\" size=\"256\"/><Column id=\"checkbox\" type=\"STRING\" size=\"256\"/><Column id=\"combo\" type=\"STRING\" size=\"256\"/><Column id=\"currency\" type=\"STRING\" size=\"256\"/><Column id=\"date\" type=\"STRING\" size=\"256\"/><Column id=\"image\" type=\"STRING\" size=\"256\"/><Column id=\"number\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"tree\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"normal\">John</Col><Col id=\"none\">Korea</Col><Col id=\"bar\">20</Col><Col id=\"checkbox\">1</Col><Col id=\"combo\">M</Col><Col id=\"button\">Profile</Col><Col id=\"currency\">15000</Col><Col id=\"date\">20160105</Col><Col id=\"image\">imagerc::component_Button.png</Col><Col id=\"tree\">0</Col><Col id=\"text\">1dollar</Col><Col id=\"number\">15000</Col></Row><Row><Col id=\"normal\">James</Col><Col id=\"bar\">40</Col><Col id=\"button\">Profile</Col><Col id=\"checkbox\">0</Col><Col id=\"combo\">M</Col><Col id=\"currency\">25000</Col><Col id=\"date\">20100826</Col><Col id=\"image\">imagerc::component_Grid.png</Col><Col id=\"tree\">1</Col><Col id=\"text\">EBOT</Col><Col id=\"number\">25000</Col><Col id=\"none\">Spain</Col></Row><Row><Col id=\"normal\">Donald</Col><Col id=\"none\">USA</Col><Col id=\"bar\">80</Col><Col id=\"checkbox\">0</Col><Col id=\"combo\">M</Col><Col id=\"button\">Profile</Col><Col id=\"currency\">1000000</Col><Col id=\"date\">20120321</Col><Col id=\"image\">imagerc::component_MaskEdit.png</Col><Col id=\"tree\">1</Col><Col id=\"text\">EBOT</Col><Col id=\"number\">1000000</Col></Row><Row><Col id=\"normal\">Lisa</Col><Col id=\"none\">United Kingdom</Col><Col id=\"bar\">100</Col><Col id=\"checkbox\">1</Col><Col id=\"combo\">W</Col><Col id=\"button\">Profile</Col><Col id=\"currency\">3000</Col><Col id=\"date\">20101225</Col><Col id=\"image\">imagerc::component_Static.png</Col><Col id=\"tree\">2</Col><Col id=\"text\">1dollar</Col><Col id=\"number\">3000</Col></Row><Row><Col id=\"normal\">Joe</Col><Col id=\"none\">Brazil</Col><Col id=\"bar\">30</Col><Col id=\"checkbox\">1</Col><Col id=\"combo\">W</Col><Col id=\"button\">Profile</Col><Col id=\"currency\">8600</Col><Col id=\"date\">19190301</Col><Col id=\"image\">imagerc::component_Tab.png</Col><Col id=\"tree\">2</Col><Col id=\"text\">hangul</Col><Col id=\"number\">8600</Col></Row><Row><Col id=\"normal\">Michael</Col><Col id=\"bar\">0</Col><Col id=\"button\">Profile</Col><Col id=\"checkbox\">0</Col><Col id=\"combo\">M</Col><Col id=\"currency\">1300</Col><Col id=\"date\">20140416</Col><Col id=\"image\">imagerc::icon_Play.png</Col><Col id=\"tree\">0</Col><Col id=\"text\">1dollar</Col><Col id=\"number\">1300</Col><Col id=\"none\">India</Col></Row><Row><Col id=\"normal\">Lilli</Col><Col id=\"bar\">50</Col><Col id=\"checkbox\">0</Col><Col id=\"combo\">W</Col><Col id=\"button\">Profile</Col><Col id=\"currency\">4400</Col><Col id=\"date\">20200101</Col><Col id=\"image\">imagerc::launch_1.png</Col><Col id=\"tree\">1</Col><Col id=\"text\">hangul</Col><Col id=\"number\">4400</Col><Col id=\"none\">Turkey</Col></Row><Row><Col id=\"normal\">Colt</Col><Col id=\"bar\">90</Col><Col id=\"button\">Profile</Col><Col id=\"checkbox\">1</Col><Col id=\"combo\">M</Col><Col id=\"currency\">62000</Col><Col id=\"date\">19911221</Col><Col id=\"image\">imagerc::launch_2.png</Col><Col id=\"tree\">2</Col><Col id=\"text\">hangul</Col><Col id=\"number\">62000</Col><Col id=\"none\">Australia</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_combo", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">M</Col><Col id=\"VALUE\">Male</Col></Row><Row><Col id=\"CODE\">W</Col><Col id=\"VALUE\">Female</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","32","40",null,"220","30",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_data");
            obj.set_autofittype("col");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_autosizingtype("col");
            obj.set_extendsizetype("none");
            obj.set_autosizebandtype("body");
            obj.getSetter("text").set("");
            obj.set_autoenter("select");
            obj.set_fillareatype("none");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("none");
            obj.set_selectchangetype("up");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"30\"/><Column size=\"60\"/><Column size=\"40\"/><Column size=\"60\"/><Column size=\"70\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"40\"/><Column size=\"50\"/><Column size=\"40\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"normal\" font=\"9pt Arial\"/><Cell col=\"1\" text=\"none\" font=\"9pt Arial\"/><Cell col=\"2\" text=\"bar\" font=\"9pt Arial\"/><Cell col=\"3\" text=\"button\" font=\"9pt Arial\"/><Cell col=\"4\" text=\"checkbox\" font=\"9pt Arial\"/><Cell col=\"5\" text=\"combo\" font=\"9pt Arial\"/><Cell col=\"6\" text=\"currency\" font=\"9pt Arial\"/><Cell col=\"7\" text=\"date\" font=\"9pt Arial\"/><Cell col=\"8\" text=\"image\" font=\"9pt Arial\"/><Cell col=\"9\" text=\"number\" font=\"9pt Arial\"/><Cell col=\"10\" text=\"text\" font=\"9pt Arial\"/><Cell col=\"11\" text=\"tree\" font=\"9pt Arial\"/></Band><Band id=\"body\"><Cell text=\"bind:normal\" edittype=\"none\" textAlign=\"left\" font=\"8pt Arial\" displaytype=\"normal\"/><Cell col=\"1\" text=\"bind:none\" displaytype=\"none\" edittype=\"none\" font=\"8pt Arial\"/><Cell col=\"2\" text=\"bind:bar\" displaytype=\"progressbarcontrol\" edittype=\"none\" font=\"8pt Arial\"/><Cell col=\"3\" text=\"bind:button\" displaytype=\"buttoncontrol\" edittype=\"none\" font=\"8pt Arial\"/><Cell col=\"4\" text=\"bind:checkbox\" displaytype=\"checkboxcontrol\" edittype=\"none\" font=\"8pt Arial\"/><Cell col=\"5\" text=\"bind:combo\" displaytype=\"combocontrol\" edittype=\"none\" combodataset=\"ds_combo\" combocodecol=\"CODE\" combodatacol=\"VALUE\" font=\"8pt Arial\"/><Cell col=\"6\" text=\"bind:currency\" displaytype=\"currency\" edittype=\"none\" textAlign=\"right\" font=\"8pt Arial\"/><Cell col=\"7\" text=\"bind:date\" displaytype=\"date\" edittype=\"none\" font=\"8pt Arial\"/><Cell col=\"8\" text=\"bind:image\" displaytype=\"imagecontrol\" edittype=\"none\" font=\"8pt Arial\"/><Cell col=\"9\" text=\"bind:number\" displaytype=\"number\" edittype=\"none\" textAlign=\"right\" font=\"8pt Arial\"/><Cell col=\"10\" text=\"bind:text\" displaytype=\"text\" edittype=\"none\" textAlign=\"left\" font=\"8pt Arial\"/><Cell col=\"11\" text=\"bind:tree\" displaytype=\"treeitemcontrol\" edittype=\"none\" treecheck=\"bind:checkbox\" treelevel=\"bind:tree\" treestate=\"1\" font=\"8pt Arial\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","32","283",null,null,"30","30",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_data");
            obj.set_autofittype("col");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_autosizingtype("none");
            obj.set_extendsizetype("none");
            obj.set_autosizebandtype("body");
            obj.getSetter("text").set("");
            obj.set_autoenter("none");
            obj.set_fillareatype("none");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"60\"/><Column size=\"40\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"40\"/><Column size=\"50\"/><Column size=\"40\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"normal\" font=\"9pt Arial\"/><Cell col=\"1\" text=\"none\" font=\"9pt Arial\"/><Cell col=\"2\" text=\"bar\" font=\"9pt Arial\"/><Cell col=\"3\" text=\"button\" font=\"9pt Arial\"/><Cell col=\"4\" text=\"checkbox\" font=\"9pt Arial\"/><Cell col=\"5\" text=\"combo\" font=\"9pt Arial\"/><Cell col=\"6\" text=\"currency\" font=\"9pt Arial\"/><Cell col=\"7\" text=\"date\" font=\"9pt Arial\"/><Cell col=\"8\" text=\"image\" font=\"9pt Arial\"/><Cell col=\"9\" text=\"number\" font=\"9pt Arial\"/><Cell col=\"10\" text=\"text\" font=\"9pt Arial\"/><Cell col=\"11\" text=\"tree\" font=\"9pt Arial\"/></Band><Band id=\"body\"><Cell text=\"bind:normal\" edittype=\"none\" displaytype=\"normal\" textAlign=\"left\" font=\"8pt Arial\"/><Cell col=\"1\" text=\"bind:none\" displaytype=\"normal\" edittype=\"none\" font=\"8pt Arial\"/><Cell col=\"2\" text=\"bind:bar\" displaytype=\"normal\" edittype=\"none\" font=\"8pt Arial\"/><Cell col=\"3\" text=\"bind:button\" displaytype=\"normal\" edittype=\"none\" font=\"8pt Arial\"/><Cell col=\"4\" text=\"bind:checkbox\" displaytype=\"normal\" edittype=\"none\" font=\"8pt Arial\"/><Cell col=\"5\" text=\"bind:combo\" displaytype=\"normal\" edittype=\"none\" font=\"8pt Arial\"/><Cell col=\"6\" text=\"bind:currency\" displaytype=\"normal\" edittype=\"none\" textAlign=\"right\" font=\"8pt Arial\"/><Cell col=\"7\" text=\"bind:date\" displaytype=\"normal\" edittype=\"none\" font=\"8pt Arial\"/><Cell col=\"8\" text=\"bind:image\" displaytype=\"normal\" edittype=\"none\" font=\"8pt Arial\"/><Cell col=\"9\" text=\"bind:number\" displaytype=\"normal\" edittype=\"none\" textAlign=\"right\" font=\"8pt Arial\"/><Cell col=\"10\" text=\"bind:text\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\" font=\"8pt Arial\"/><Cell col=\"11\" text=\"bind:tree\" displaytype=\"normal\" edittype=\"none\" font=\"8pt Arial\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SMl029ClassGridExprSupportM01.xfdl", function() {
        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
            //return this.gfn_isUpdate(this.dsDetail);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("SMl029ClassGridExprSupportM01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
