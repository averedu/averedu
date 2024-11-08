(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Left");
            this.set_titletext("LeftMenu");
            if (Form == this.constructor)
            {
                this._setFormPosition(270,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_Tree", this);
            obj._setContents("<ColumnInfo><Column id=\"txt\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"txt\">일이삼사오육칠팔구십일이삼사</Col><Col id=\"lev\">0</Col></Row><Row><Col id=\"txt\">일이삼사오육칠팔구십일이삼사</Col><Col id=\"lev\">1</Col><Col id=\"Column0\">theme://images/btn_WF_Bookmark_S.png</Col></Row><Row><Col id=\"txt\">1 Depth Menu</Col><Col id=\"lev\">0</Col></Row><Row><Col id=\"txt\">2 Depth Menu</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"txt\">1 Depth Menu</Col><Col id=\"lev\">0</Col><Col id=\"Column0\">theme://images/btn_WF_Bookmark_S.png</Col></Row><Row><Col id=\"txt\">2 Depth Menu</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"txt\">일이삼사오육칠팔구십일이삼사</Col><Col id=\"lev\">2</Col></Row><Row><Col id=\"txt\">3 Depth Menu</Col><Col id=\"lev\">2</Col></Row><Row><Col id=\"txt\">2 Depth Menu</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"txt\">2 Depth Menu</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"txt\">2 Depth Menu</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"txt\">3 Depth Menu</Col><Col id=\"lev\">2</Col></Row><Row><Col id=\"txt\">3 Depth Menu</Col><Col id=\"lev\">2</Col></Row><Row><Col id=\"txt\">3 Depth Menu</Col><Col id=\"lev\">2</Col></Row><Row><Col id=\"txt\">3 Depth Menu</Col><Col id=\"lev\">2</Col></Row><Row><Col id=\"txt\">3 Depth Menu</Col><Col id=\"lev\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Tree00", this);
            obj._setContents("<ColumnInfo><Column id=\"txt\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/><Column id=\"img\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"txt\">1 Depth Menu</Col><Col id=\"lev\">0</Col><Col id=\"img\">theme://images/btn_LF_Search.png</Col></Row><Row><Col id=\"txt\">2 Depth Menu</Col><Col id=\"lev\">1</Col><Col id=\"img\">theme://images/btn_LF_Search.png</Col></Row><Row><Col id=\"txt\">1 Depth Menu</Col><Col id=\"lev\">0</Col><Col id=\"img\">theme://images/btn_LF_Search.png</Col></Row><Row><Col id=\"txt\">2 Depth Menu</Col><Col id=\"lev\">1</Col><Col id=\"img\">theme://images/btn_LF_Search.png</Col></Row><Row><Col id=\"txt\">1 Depth Menu</Col><Col id=\"lev\">0</Col><Col id=\"img\">theme://images/btn_LF_Search.png</Col></Row><Row><Col id=\"txt\">2 Depth Menu</Col><Col id=\"lev\">1</Col><Col id=\"img\">theme://images/btn_LF_Search.png</Col></Row><Row><Col id=\"txt\">3 Depth Menu</Col><Col id=\"lev\">2</Col><Col id=\"img\">theme://images/btn_LF_Search.png</Col></Row><Row><Col id=\"txt\">3 Depth Menu</Col><Col id=\"lev\">2</Col><Col id=\"img\">theme://images/btn_LF_Search.png</Col></Row><Row><Col id=\"txt\">2 Depth Menu</Col><Col id=\"lev\">1</Col><Col id=\"img\">theme://images/btn_LF_Search.png</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","0","0","110","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("메뉴");
            obj.set_cssclass("btn_LF_Menu_S");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","110","0","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("즐겨찾기");
            obj.set_cssclass("btn_LF_Menu");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","208","0","50","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_LF_MenuClose");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","35","270",null,null,"0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_background("#0079bb");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMenu","0","50",null,null,"0","0",null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_Tree");
            obj.set_treeinitstatus("expand,null");
            obj.set_treeuseimage("true");
            obj.set_treeuseline("false");
            obj.set_treeusecheckbox("false");
            obj.set_treeusebutton("no");
            obj.set_cssclass("grd_LF_Menu");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"230\"/><Column size=\"40\"/></Columns><Rows><Row size=\"35\"/></Rows><Band id=\"body\"><Cell text=\"bind:txt\" displaytype=\"treeitemcontrol\" treelevel=\"bind:lev\" cssclass=\"Lf_Menu\" edittype=\"tree\"/><Cell col=\"1\" expandshow=\"show\" expandsize=\"40\" displaytype=\"imagecontrol\" edittype=\"button\" expandimage=\"URL(&quot;theme://images/btn_WF_Bookmark.png&quot;)\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","20","10",null,"30","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("edt_LF_Search");
            obj.set_value("메뉴검색");
            obj.set_text("메뉴검색");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","Edit00:-28","14","22","22",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_LF_Search");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00",null,"0","1",null,"0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("#b5b6ba");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","300","85","270","635",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_Tree");
            obj.set_cssclass("grd_LF_Menu");
            obj.set_treeinitstatus("expand,null");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseline("false");
            obj.set_treeuseimage("true");
            obj.set_treeuseexpandkey("false");
            obj.set_treeusebutton("no");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"268\"/></Columns><Rows><Row size=\"35\"/></Rows><Band id=\"body\"><Cell text=\"bind:txt\" treelevel=\"bind:lev\" treestartlevel=\"3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","635","35","270","685",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_Tree");
            obj.set_cssclass("grd_LF_Menu");
            obj.set_treeinitstatus("expand,null");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseline("false");
            obj.set_treeuseimage("true");
            obj.set_treeuseexpandkey("false");
            obj.set_treeusebutton("no");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"230\"/><Column size=\"40\"/></Columns><Rows><Row size=\"35\"/></Rows><Band id=\"body\"><Cell text=\"bind:txt\" treelevel=\"bind:lev\" cssclass=\"Lf_Menu\" treestartlevel=\"3\"/><Cell col=\"1\" displaytype=\"imagecontrol\" edittype=\"button\" expandshow=\"show\" expandimage=\"URL(&quot;theme://images/btn_WF_Bookmark_S.png&quot;)\" expandsize=\"40\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",270,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("Left.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
