(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Popup_017");
            this.set_titletext("작업구역선택");
            if (Form == this.constructor)
            {
                this._setFormPosition(900,630);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("DS_GridSample", this);
            obj._setContents("<ColumnInfo><Column id=\"Column25\" type=\"STRING\" size=\"256\"/><Column id=\"Column24\" type=\"STRING\" size=\"256\"/><Column id=\"Column23\" type=\"STRING\" size=\"256\"/><Column id=\"Column22\" type=\"STRING\" size=\"256\"/><Column id=\"Column21\" type=\"STRING\" size=\"256\"/><Column id=\"Column20\" type=\"STRING\" size=\"256\"/><Column id=\"Column19\" type=\"STRING\" size=\"256\"/><Column id=\"Column18\" type=\"STRING\" size=\"256\"/><Column id=\"Column17\" type=\"STRING\" size=\"256\"/><Column id=\"Column16\" type=\"STRING\" size=\"256\"/><Column id=\"Column15\" type=\"STRING\" size=\"256\"/><Column id=\"Column14\" type=\"STRING\" size=\"256\"/><Column id=\"Column13\" type=\"STRING\" size=\"256\"/><Column id=\"Column12\" type=\"STRING\" size=\"256\"/><Column id=\"Column11\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmb", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","20","20","200","22",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("작업구역선택");
            obj.set_cssclass("sta_WF_Title01");
            this.addChild(obj.name, obj);

            obj = new Button("Button01",null,"23","46","22","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("Static05",null,"20","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","0","20","20",null,null,"0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0",null,null,"20","0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","45",null,"5","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,"23","46","22","68",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","20","50",null,null,"20","20",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("데이터가 없습니다.");
            obj.set_cssclass("div_WF_Outline");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,null,"0","0",null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("지도 이미지 넣고 위에 그리드 올리세요\r\n그리드 선텍을 Cell 로 설정하세요");
            obj.set_background("#ffff00");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","0",null,null,"0","0",null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("grd_WF_Map");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"31\"/><Column size=\"33\"/><Column size=\"33\"/><Column size=\"33\"/><Column size=\"33\"/><Column size=\"33\"/><Column size=\"33\"/><Column size=\"33\"/><Column size=\"33\"/><Column size=\"33\"/><Column size=\"33\"/><Column size=\"33\"/><Column size=\"33\"/><Column size=\"33\"/><Column size=\"33\"/><Column size=\"33\"/><Column size=\"33\"/><Column size=\"33\"/><Column size=\"33\"/><Column size=\"33\"/><Column size=\"33\"/><Column size=\"33\"/><Column size=\"33\"/><Column size=\"33\"/><Column size=\"33\"/><Column size=\"33\"/></Columns><Rows><Row size=\"29\"/><Row size=\"33\"/><Row size=\"33\"/><Row size=\"33\"/><Row size=\"33\"/><Row size=\"33\"/><Row size=\"33\"/><Row size=\"33\"/><Row size=\"33\"/><Row size=\"33\"/><Row size=\"33\"/><Row size=\"33\"/><Row size=\"33\"/><Row size=\"33\"/><Row size=\"33\"/><Row size=\"33\"/><Row size=\"33\"/></Rows><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/><Cell col=\"21\"/><Cell col=\"22\"/><Cell col=\"23\"/><Cell col=\"24\"/><Cell col=\"25\"/><Cell row=\"1\"/><Cell row=\"1\" col=\"1\"/><Cell row=\"1\" col=\"2\"/><Cell row=\"1\" col=\"3\"/><Cell row=\"1\" col=\"4\"/><Cell row=\"1\" col=\"5\"/><Cell row=\"1\" col=\"6\"/><Cell row=\"1\" col=\"7\"/><Cell row=\"1\" col=\"8\"/><Cell row=\"1\" col=\"9\"/><Cell row=\"1\" col=\"10\"/><Cell row=\"1\" col=\"11\"/><Cell row=\"1\" col=\"12\"/><Cell row=\"1\" col=\"13\"/><Cell row=\"1\" col=\"14\"/><Cell row=\"1\" col=\"15\"/><Cell row=\"1\" col=\"16\"/><Cell row=\"1\" col=\"17\"/><Cell row=\"1\" col=\"18\"/><Cell row=\"1\" col=\"19\"/><Cell row=\"1\" col=\"20\"/><Cell row=\"1\" col=\"21\"/><Cell row=\"1\" col=\"22\"/><Cell row=\"1\" col=\"23\"/><Cell row=\"1\" col=\"24\"/><Cell row=\"1\" col=\"25\"/><Cell row=\"2\"/><Cell row=\"2\" col=\"1\"/><Cell row=\"2\" col=\"2\"/><Cell row=\"2\" col=\"3\"/><Cell row=\"2\" col=\"4\"/><Cell row=\"2\" col=\"5\"/><Cell row=\"2\" col=\"6\"/><Cell row=\"2\" col=\"7\"/><Cell row=\"2\" col=\"8\"/><Cell row=\"2\" col=\"9\"/><Cell row=\"2\" col=\"10\"/><Cell row=\"2\" col=\"11\"/><Cell row=\"2\" col=\"12\"/><Cell row=\"2\" col=\"13\"/><Cell row=\"2\" col=\"14\"/><Cell row=\"2\" col=\"15\"/><Cell row=\"2\" col=\"16\"/><Cell row=\"2\" col=\"17\"/><Cell row=\"2\" col=\"18\"/><Cell row=\"2\" col=\"19\"/><Cell row=\"2\" col=\"20\"/><Cell row=\"2\" col=\"21\"/><Cell row=\"2\" col=\"22\"/><Cell row=\"2\" col=\"23\"/><Cell row=\"2\" col=\"24\"/><Cell row=\"2\" col=\"25\"/><Cell row=\"3\"/><Cell row=\"3\" col=\"1\"/><Cell row=\"3\" col=\"2\"/><Cell row=\"3\" col=\"3\"/><Cell row=\"3\" col=\"4\"/><Cell row=\"3\" col=\"5\"/><Cell row=\"3\" col=\"6\"/><Cell row=\"3\" col=\"7\"/><Cell row=\"3\" col=\"8\"/><Cell row=\"3\" col=\"9\"/><Cell row=\"3\" col=\"10\"/><Cell row=\"3\" col=\"11\"/><Cell row=\"3\" col=\"12\"/><Cell row=\"3\" col=\"13\"/><Cell row=\"3\" col=\"14\"/><Cell row=\"3\" col=\"15\"/><Cell row=\"3\" col=\"16\"/><Cell row=\"3\" col=\"17\"/><Cell row=\"3\" col=\"18\"/><Cell row=\"3\" col=\"19\"/><Cell row=\"3\" col=\"20\"/><Cell row=\"3\" col=\"21\"/><Cell row=\"3\" col=\"22\"/><Cell row=\"3\" col=\"23\"/><Cell row=\"3\" col=\"24\"/><Cell row=\"3\" col=\"25\"/><Cell row=\"4\"/><Cell row=\"4\" col=\"1\"/><Cell row=\"4\" col=\"2\"/><Cell row=\"4\" col=\"3\"/><Cell row=\"4\" col=\"4\"/><Cell row=\"4\" col=\"5\"/><Cell row=\"4\" col=\"6\"/><Cell row=\"4\" col=\"7\"/><Cell row=\"4\" col=\"8\"/><Cell row=\"4\" col=\"9\"/><Cell row=\"4\" col=\"10\"/><Cell row=\"4\" col=\"11\"/><Cell row=\"4\" col=\"12\"/><Cell row=\"4\" col=\"13\"/><Cell row=\"4\" col=\"14\"/><Cell row=\"4\" col=\"15\"/><Cell row=\"4\" col=\"16\"/><Cell row=\"4\" col=\"17\"/><Cell row=\"4\" col=\"18\"/><Cell row=\"4\" col=\"19\"/><Cell row=\"4\" col=\"20\"/><Cell row=\"4\" col=\"21\"/><Cell row=\"4\" col=\"22\"/><Cell row=\"4\" col=\"23\"/><Cell row=\"4\" col=\"24\"/><Cell row=\"4\" col=\"25\"/><Cell row=\"5\"/><Cell row=\"5\" col=\"1\"/><Cell row=\"5\" col=\"2\"/><Cell row=\"5\" col=\"3\"/><Cell row=\"5\" col=\"4\"/><Cell row=\"5\" col=\"5\"/><Cell row=\"5\" col=\"6\"/><Cell row=\"5\" col=\"7\"/><Cell row=\"5\" col=\"8\"/><Cell row=\"5\" col=\"9\"/><Cell row=\"5\" col=\"10\"/><Cell row=\"5\" col=\"11\"/><Cell row=\"5\" col=\"12\"/><Cell row=\"5\" col=\"13\"/><Cell row=\"5\" col=\"14\"/><Cell row=\"5\" col=\"15\"/><Cell row=\"5\" col=\"16\"/><Cell row=\"5\" col=\"17\"/><Cell row=\"5\" col=\"18\"/><Cell row=\"5\" col=\"19\"/><Cell row=\"5\" col=\"20\"/><Cell row=\"5\" col=\"21\"/><Cell row=\"5\" col=\"22\"/><Cell row=\"5\" col=\"23\"/><Cell row=\"5\" col=\"24\"/><Cell row=\"5\" col=\"25\"/><Cell row=\"6\"/><Cell row=\"6\" col=\"1\"/><Cell row=\"6\" col=\"2\"/><Cell row=\"6\" col=\"3\"/><Cell row=\"6\" col=\"4\"/><Cell row=\"6\" col=\"5\"/><Cell row=\"6\" col=\"6\"/><Cell row=\"6\" col=\"7\"/><Cell row=\"6\" col=\"8\"/><Cell row=\"6\" col=\"9\"/><Cell row=\"6\" col=\"10\"/><Cell row=\"6\" col=\"11\"/><Cell row=\"6\" col=\"12\"/><Cell row=\"6\" col=\"13\"/><Cell row=\"6\" col=\"14\"/><Cell row=\"6\" col=\"15\"/><Cell row=\"6\" col=\"16\"/><Cell row=\"6\" col=\"17\"/><Cell row=\"6\" col=\"18\"/><Cell row=\"6\" col=\"19\"/><Cell row=\"6\" col=\"20\"/><Cell row=\"6\" col=\"21\"/><Cell row=\"6\" col=\"22\"/><Cell row=\"6\" col=\"23\"/><Cell row=\"6\" col=\"24\"/><Cell row=\"6\" col=\"25\"/><Cell row=\"7\"/><Cell row=\"7\" col=\"1\"/><Cell row=\"7\" col=\"2\"/><Cell row=\"7\" col=\"3\"/><Cell row=\"7\" col=\"4\"/><Cell row=\"7\" col=\"5\"/><Cell row=\"7\" col=\"6\"/><Cell row=\"7\" col=\"7\"/><Cell row=\"7\" col=\"8\"/><Cell row=\"7\" col=\"9\"/><Cell row=\"7\" col=\"10\"/><Cell row=\"7\" col=\"11\"/><Cell row=\"7\" col=\"12\"/><Cell row=\"7\" col=\"13\"/><Cell row=\"7\" col=\"14\"/><Cell row=\"7\" col=\"15\"/><Cell row=\"7\" col=\"16\"/><Cell row=\"7\" col=\"17\"/><Cell row=\"7\" col=\"18\"/><Cell row=\"7\" col=\"19\"/><Cell row=\"7\" col=\"20\"/><Cell row=\"7\" col=\"21\"/><Cell row=\"7\" col=\"22\"/><Cell row=\"7\" col=\"23\"/><Cell row=\"7\" col=\"24\"/><Cell row=\"7\" col=\"25\"/><Cell row=\"8\"/><Cell row=\"8\" col=\"1\"/><Cell row=\"8\" col=\"2\"/><Cell row=\"8\" col=\"3\"/><Cell row=\"8\" col=\"4\"/><Cell row=\"8\" col=\"5\"/><Cell row=\"8\" col=\"6\"/><Cell row=\"8\" col=\"7\"/><Cell row=\"8\" col=\"8\"/><Cell row=\"8\" col=\"9\"/><Cell row=\"8\" col=\"10\"/><Cell row=\"8\" col=\"11\"/><Cell row=\"8\" col=\"12\"/><Cell row=\"8\" col=\"13\"/><Cell row=\"8\" col=\"14\"/><Cell row=\"8\" col=\"15\"/><Cell row=\"8\" col=\"16\"/><Cell row=\"8\" col=\"17\"/><Cell row=\"8\" col=\"18\"/><Cell row=\"8\" col=\"19\"/><Cell row=\"8\" col=\"20\"/><Cell row=\"8\" col=\"21\"/><Cell row=\"8\" col=\"22\"/><Cell row=\"8\" col=\"23\"/><Cell row=\"8\" col=\"24\"/><Cell row=\"8\" col=\"25\"/><Cell row=\"9\"/><Cell row=\"9\" col=\"1\"/><Cell row=\"9\" col=\"2\"/><Cell row=\"9\" col=\"3\"/><Cell row=\"9\" col=\"4\"/><Cell row=\"9\" col=\"5\"/><Cell row=\"9\" col=\"6\"/><Cell row=\"9\" col=\"7\"/><Cell row=\"9\" col=\"8\"/><Cell row=\"9\" col=\"9\"/><Cell row=\"9\" col=\"10\"/><Cell row=\"9\" col=\"11\"/><Cell row=\"9\" col=\"12\"/><Cell row=\"9\" col=\"13\"/><Cell row=\"9\" col=\"14\"/><Cell row=\"9\" col=\"15\"/><Cell row=\"9\" col=\"16\"/><Cell row=\"9\" col=\"17\"/><Cell row=\"9\" col=\"18\"/><Cell row=\"9\" col=\"19\"/><Cell row=\"9\" col=\"20\"/><Cell row=\"9\" col=\"21\"/><Cell row=\"9\" col=\"22\"/><Cell row=\"9\" col=\"23\"/><Cell row=\"9\" col=\"24\"/><Cell row=\"9\" col=\"25\"/><Cell row=\"10\"/><Cell row=\"10\" col=\"1\"/><Cell row=\"10\" col=\"2\"/><Cell row=\"10\" col=\"3\"/><Cell row=\"10\" col=\"4\"/><Cell row=\"10\" col=\"5\"/><Cell row=\"10\" col=\"6\"/><Cell row=\"10\" col=\"7\"/><Cell row=\"10\" col=\"8\"/><Cell row=\"10\" col=\"9\"/><Cell row=\"10\" col=\"10\"/><Cell row=\"10\" col=\"11\"/><Cell row=\"10\" col=\"12\"/><Cell row=\"10\" col=\"13\"/><Cell row=\"10\" col=\"14\"/><Cell row=\"10\" col=\"15\"/><Cell row=\"10\" col=\"16\"/><Cell row=\"10\" col=\"17\"/><Cell row=\"10\" col=\"18\"/><Cell row=\"10\" col=\"19\"/><Cell row=\"10\" col=\"20\"/><Cell row=\"10\" col=\"21\"/><Cell row=\"10\" col=\"22\"/><Cell row=\"10\" col=\"23\"/><Cell row=\"10\" col=\"24\"/><Cell row=\"10\" col=\"25\"/><Cell row=\"11\"/><Cell row=\"11\" col=\"1\"/><Cell row=\"11\" col=\"2\"/><Cell row=\"11\" col=\"3\"/><Cell row=\"11\" col=\"4\"/><Cell row=\"11\" col=\"5\"/><Cell row=\"11\" col=\"6\"/><Cell row=\"11\" col=\"7\"/><Cell row=\"11\" col=\"8\"/><Cell row=\"11\" col=\"9\"/><Cell row=\"11\" col=\"10\"/><Cell row=\"11\" col=\"11\"/><Cell row=\"11\" col=\"12\"/><Cell row=\"11\" col=\"13\"/><Cell row=\"11\" col=\"14\"/><Cell row=\"11\" col=\"15\"/><Cell row=\"11\" col=\"16\"/><Cell row=\"11\" col=\"17\"/><Cell row=\"11\" col=\"18\"/><Cell row=\"11\" col=\"19\"/><Cell row=\"11\" col=\"20\"/><Cell row=\"11\" col=\"21\"/><Cell row=\"11\" col=\"22\"/><Cell row=\"11\" col=\"23\"/><Cell row=\"11\" col=\"24\"/><Cell row=\"11\" col=\"25\"/><Cell row=\"12\"/><Cell row=\"12\" col=\"1\"/><Cell row=\"12\" col=\"2\"/><Cell row=\"12\" col=\"3\"/><Cell row=\"12\" col=\"4\"/><Cell row=\"12\" col=\"5\"/><Cell row=\"12\" col=\"6\"/><Cell row=\"12\" col=\"7\"/><Cell row=\"12\" col=\"8\"/><Cell row=\"12\" col=\"9\"/><Cell row=\"12\" col=\"10\"/><Cell row=\"12\" col=\"11\"/><Cell row=\"12\" col=\"12\"/><Cell row=\"12\" col=\"13\"/><Cell row=\"12\" col=\"14\"/><Cell row=\"12\" col=\"15\"/><Cell row=\"12\" col=\"16\"/><Cell row=\"12\" col=\"17\"/><Cell row=\"12\" col=\"18\"/><Cell row=\"12\" col=\"19\"/><Cell row=\"12\" col=\"20\"/><Cell row=\"12\" col=\"21\"/><Cell row=\"12\" col=\"22\"/><Cell row=\"12\" col=\"23\"/><Cell row=\"12\" col=\"24\"/><Cell row=\"12\" col=\"25\"/><Cell row=\"13\"/><Cell row=\"13\" col=\"1\"/><Cell row=\"13\" col=\"2\"/><Cell row=\"13\" col=\"3\"/><Cell row=\"13\" col=\"4\"/><Cell row=\"13\" col=\"5\"/><Cell row=\"13\" col=\"6\"/><Cell row=\"13\" col=\"7\"/><Cell row=\"13\" col=\"8\"/><Cell row=\"13\" col=\"9\"/><Cell row=\"13\" col=\"10\"/><Cell row=\"13\" col=\"11\"/><Cell row=\"13\" col=\"12\"/><Cell row=\"13\" col=\"13\"/><Cell row=\"13\" col=\"14\"/><Cell row=\"13\" col=\"15\"/><Cell row=\"13\" col=\"16\"/><Cell row=\"13\" col=\"17\"/><Cell row=\"13\" col=\"18\"/><Cell row=\"13\" col=\"19\"/><Cell row=\"13\" col=\"20\"/><Cell row=\"13\" col=\"21\"/><Cell row=\"13\" col=\"22\"/><Cell row=\"13\" col=\"23\"/><Cell row=\"13\" col=\"24\"/><Cell row=\"13\" col=\"25\"/><Cell row=\"14\"/><Cell row=\"14\" col=\"1\"/><Cell row=\"14\" col=\"2\"/><Cell row=\"14\" col=\"3\"/><Cell row=\"14\" col=\"4\"/><Cell row=\"14\" col=\"5\"/><Cell row=\"14\" col=\"6\"/><Cell row=\"14\" col=\"7\"/><Cell row=\"14\" col=\"8\"/><Cell row=\"14\" col=\"9\"/><Cell row=\"14\" col=\"10\"/><Cell row=\"14\" col=\"11\"/><Cell row=\"14\" col=\"12\"/><Cell row=\"14\" col=\"13\"/><Cell row=\"14\" col=\"14\"/><Cell row=\"14\" col=\"15\"/><Cell row=\"14\" col=\"16\"/><Cell row=\"14\" col=\"17\"/><Cell row=\"14\" col=\"18\"/><Cell row=\"14\" col=\"19\"/><Cell row=\"14\" col=\"20\"/><Cell row=\"14\" col=\"21\"/><Cell row=\"14\" col=\"22\"/><Cell row=\"14\" col=\"23\"/><Cell row=\"14\" col=\"24\"/><Cell row=\"14\" col=\"25\"/><Cell row=\"15\"/><Cell row=\"15\" col=\"1\"/><Cell row=\"15\" col=\"2\"/><Cell row=\"15\" col=\"3\"/><Cell row=\"15\" col=\"4\"/><Cell row=\"15\" col=\"5\"/><Cell row=\"15\" col=\"6\"/><Cell row=\"15\" col=\"7\"/><Cell row=\"15\" col=\"8\"/><Cell row=\"15\" col=\"9\"/><Cell row=\"15\" col=\"10\"/><Cell row=\"15\" col=\"11\"/><Cell row=\"15\" col=\"12\"/><Cell row=\"15\" col=\"13\"/><Cell row=\"15\" col=\"14\"/><Cell row=\"15\" col=\"15\"/><Cell row=\"15\" col=\"16\"/><Cell row=\"15\" col=\"17\"/><Cell row=\"15\" col=\"18\"/><Cell row=\"15\" col=\"19\"/><Cell row=\"15\" col=\"20\"/><Cell row=\"15\" col=\"21\"/><Cell row=\"15\" col=\"22\"/><Cell row=\"15\" col=\"23\"/><Cell row=\"15\" col=\"24\"/><Cell row=\"15\" col=\"25\"/><Cell row=\"16\"/><Cell row=\"16\" col=\"1\"/><Cell row=\"16\" col=\"2\"/><Cell row=\"16\" col=\"3\"/><Cell row=\"16\" col=\"4\"/><Cell row=\"16\" col=\"5\"/><Cell row=\"16\" col=\"6\"/><Cell row=\"16\" col=\"7\"/><Cell row=\"16\" col=\"8\"/><Cell row=\"16\" col=\"9\"/><Cell row=\"16\" col=\"10\"/><Cell row=\"16\" col=\"11\"/><Cell row=\"16\" col=\"12\"/><Cell row=\"16\" col=\"13\"/><Cell row=\"16\" col=\"14\"/><Cell row=\"16\" col=\"15\"/><Cell row=\"16\" col=\"16\"/><Cell row=\"16\" col=\"17\"/><Cell row=\"16\" col=\"18\"/><Cell row=\"16\" col=\"19\"/><Cell row=\"16\" col=\"20\"/><Cell row=\"16\" col=\"21\"/><Cell row=\"16\" col=\"22\"/><Cell row=\"16\" col=\"23\"/><Cell row=\"16\" col=\"24\"/><Cell row=\"16\" col=\"25\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",900,630,this,function(p){});
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
        this.loadIncludeScript("Popup_017.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
