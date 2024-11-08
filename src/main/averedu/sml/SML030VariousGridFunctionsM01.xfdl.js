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
            this.set_titletext("각종GRID편리한 기능들");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ID\">A-01</Col><Col id=\"NAME\">jiback</Col><Col id=\"DESCRIPTION\">123</Col><Col id=\"USE_YN\"/><Col id=\"REG_USER\">한글</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"ID\">A-02</Col><Col id=\"NAME\">홍통합</Col><Col id=\"DESCRIPTION\">456</Col><Col id=\"USE_YN\"/><Col id=\"REG_USER\">영문</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"ID\">B-01</Col><Col id=\"NAME\">홍문서</Col><Col id=\"DESCRIPTION\">789</Col><Col id=\"USE_YN\"/><Col id=\"REG_USER\">영문</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"ID\">B-02</Col><Col id=\"NAME\">홍고딕</Col><Col id=\"DESCRIPTION\">987</Col><Col id=\"USE_YN\"/><Col id=\"REG_USER\">한글</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"ID\">C-01</Col><Col id=\"NAME\">김수식</Col><Col id=\"DESCRIPTION\">765</Col><Col id=\"USE_YN\"/><Col id=\"REG_USER\">영문</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"ID\">A-01</Col><Col id=\"NAME\">jiback</Col><Col id=\"DESCRIPTION\">123</Col><Col id=\"REG_USER\">한글</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"ID\">A-02</Col><Col id=\"NAME\">홍통합</Col><Col id=\"DESCRIPTION\">456</Col><Col id=\"REG_USER\">영문</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"ID\">B-01</Col><Col id=\"NAME\">홍문서</Col><Col id=\"DESCRIPTION\">789</Col><Col id=\"REG_USER\">영문</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"ID\">B-02</Col><Col id=\"NAME\">홍고딕</Col><Col id=\"DESCRIPTION\">987</Col><Col id=\"REG_USER\">한글</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"ID\">C-01</Col><Col id=\"NAME\">김수식</Col><Col id=\"DESCRIPTION\">765</Col><Col id=\"REG_USER\">영문</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"ID\">A-01</Col><Col id=\"NAME\">jiback</Col><Col id=\"DESCRIPTION\">123</Col><Col id=\"REG_USER\">한글</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"ID\">A-02</Col><Col id=\"NAME\">홍통합</Col><Col id=\"DESCRIPTION\">456</Col><Col id=\"REG_USER\">영문</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"ID\">B-01</Col><Col id=\"NAME\">홍문서</Col><Col id=\"DESCRIPTION\">789</Col><Col id=\"REG_USER\">영문</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"ID\">B-02</Col><Col id=\"NAME\">홍고딕</Col><Col id=\"DESCRIPTION\">987</Col><Col id=\"REG_USER\">한글</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"ID\">C-01</Col><Col id=\"NAME\">김수식</Col><Col id=\"DESCRIPTION\">765</Col><Col id=\"REG_USER\">영문</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"ID\">A-01</Col><Col id=\"NAME\">jiback</Col><Col id=\"DESCRIPTION\">123</Col><Col id=\"REG_USER\">한글</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"ID\">A-02</Col><Col id=\"NAME\">홍통합</Col><Col id=\"DESCRIPTION\">456</Col><Col id=\"REG_USER\">영문</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"ID\">B-01</Col><Col id=\"NAME\">홍문서</Col><Col id=\"DESCRIPTION\">789</Col><Col id=\"REG_USER\">영문</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"ID\">B-02</Col><Col id=\"NAME\">홍고딕</Col><Col id=\"DESCRIPTION\">987</Col><Col id=\"REG_USER\">한글</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"ID\">C-01</Col><Col id=\"NAME\">김수식</Col><Col id=\"DESCRIPTION\">765</Col><Col id=\"REG_USER\">영문</Col><Col id=\"CHK\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCellNum", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"NAME\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"NAME\">0</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">1</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">2</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"NAME\">3</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"NAME\">4</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_test1", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list2", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"ID_0\" type=\"STRING\" size=\"256\"/><Column id=\"NAME_0\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION_0\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN_0\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_0\" type=\"STRING\" size=\"256\"/><Column id=\"ID_1\" type=\"STRING\" size=\"256\"/><Column id=\"NAME_1\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN_1\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_1\" type=\"STRING\" size=\"256\"/><Column id=\"CHK2\" type=\"STRING\" size=\"256\"/><Column id=\"CHK3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ID\">A-01</Col><Col id=\"NAME\">jiback</Col><Col id=\"DESCRIPTION\">123</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">한글</Col><Col id=\"CHK\">0</Col><Col id=\"ID_0\">A-01</Col><Col id=\"NAME_0\">jiback</Col><Col id=\"DESCRIPTION_0\">123</Col><Col id=\"USE_YN_0\">Y</Col><Col id=\"REG_USER_0\">한글</Col><Col id=\"ID_1\">A-01</Col><Col id=\"NAME_1\">jiback</Col><Col id=\"DESCRIPTION_1\">123</Col><Col id=\"USE_YN_1\">Y</Col><Col id=\"REG_USER_1\">한글</Col><Col id=\"CHK2\">0</Col><Col id=\"CHK3\">0</Col></Row><Row><Col id=\"ID\">A-02</Col><Col id=\"NAME\">홍통합</Col><Col id=\"DESCRIPTION\">456</Col><Col id=\"USE_YN\">N</Col><Col id=\"REG_USER\">영문</Col><Col id=\"CHK\">0</Col><Col id=\"ID_0\">A-02</Col><Col id=\"NAME_0\">홍통합</Col><Col id=\"DESCRIPTION_0\">456</Col><Col id=\"USE_YN_0\">N</Col><Col id=\"REG_USER_0\">영문</Col><Col id=\"ID_1\">A-02</Col><Col id=\"NAME_1\">홍통합</Col><Col id=\"DESCRIPTION_1\">456</Col><Col id=\"USE_YN_1\">N</Col><Col id=\"REG_USER_1\">영문</Col><Col id=\"CHK2\">0</Col><Col id=\"CHK3\">0</Col></Row><Row><Col id=\"ID\">B-01</Col><Col id=\"NAME\">홍문서</Col><Col id=\"DESCRIPTION\">789</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">영문</Col><Col id=\"CHK\">0</Col><Col id=\"ID_0\">B-01</Col><Col id=\"NAME_0\">홍문서</Col><Col id=\"DESCRIPTION_0\">789</Col><Col id=\"USE_YN_0\">Y</Col><Col id=\"REG_USER_0\">영문</Col><Col id=\"ID_1\">B-01</Col><Col id=\"NAME_1\">홍문서</Col><Col id=\"DESCRIPTION_1\">789</Col><Col id=\"USE_YN_1\">Y</Col><Col id=\"REG_USER_1\">영문</Col><Col id=\"CHK2\">0</Col><Col id=\"CHK3\">0</Col></Row><Row><Col id=\"ID\">B-02</Col><Col id=\"NAME\">홍고딕</Col><Col id=\"DESCRIPTION\">987</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">한글</Col><Col id=\"CHK\">0</Col><Col id=\"ID_0\">B-02</Col><Col id=\"NAME_0\">홍고딕</Col><Col id=\"DESCRIPTION_0\">987</Col><Col id=\"USE_YN_0\">Y</Col><Col id=\"REG_USER_0\">한글</Col><Col id=\"ID_1\">B-02</Col><Col id=\"NAME_1\">홍고딕</Col><Col id=\"DESCRIPTION_1\">987</Col><Col id=\"USE_YN_1\">Y</Col><Col id=\"REG_USER_1\">한글</Col><Col id=\"CHK2\">0</Col><Col id=\"CHK3\">0</Col></Row><Row><Col id=\"ID\">C-01</Col><Col id=\"NAME\">김수식</Col><Col id=\"DESCRIPTION\">765</Col><Col id=\"USE_YN\">N</Col><Col id=\"REG_USER\">영문</Col><Col id=\"CHK\">0</Col><Col id=\"ID_0\">C-01</Col><Col id=\"NAME_0\">김수식</Col><Col id=\"DESCRIPTION_0\">765</Col><Col id=\"USE_YN_0\">N</Col><Col id=\"REG_USER_0\">영문</Col><Col id=\"ID_1\">C-01</Col><Col id=\"NAME_1\">김수식</Col><Col id=\"DESCRIPTION_1\">765</Col><Col id=\"USE_YN_1\">N</Col><Col id=\"REG_USER_1\">영문</Col><Col id=\"CHK2\">0</Col><Col id=\"CHK3\">0</Col></Row><Row><Col id=\"ID\">A-01</Col><Col id=\"NAME\">jiback</Col><Col id=\"DESCRIPTION\">123</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">한글</Col><Col id=\"CHK\">0</Col><Col id=\"ID_0\">A-01</Col><Col id=\"NAME_0\">jiback</Col><Col id=\"DESCRIPTION_0\">123</Col><Col id=\"USE_YN_0\">Y</Col><Col id=\"REG_USER_0\">한글</Col><Col id=\"ID_1\">A-01</Col><Col id=\"NAME_1\">jiback</Col><Col id=\"DESCRIPTION_1\">123</Col><Col id=\"USE_YN_1\">Y</Col><Col id=\"REG_USER_1\">한글</Col><Col id=\"CHK2\">0</Col><Col id=\"CHK3\">0</Col></Row><Row><Col id=\"ID\">A-02</Col><Col id=\"NAME\">홍통합</Col><Col id=\"DESCRIPTION\">456</Col><Col id=\"USE_YN\">N</Col><Col id=\"REG_USER\">영문</Col><Col id=\"CHK\">0</Col><Col id=\"ID_0\">A-02</Col><Col id=\"NAME_0\">홍통합</Col><Col id=\"DESCRIPTION_0\">456</Col><Col id=\"USE_YN_0\">N</Col><Col id=\"REG_USER_0\">영문</Col><Col id=\"ID_1\">A-02</Col><Col id=\"NAME_1\">홍통합</Col><Col id=\"DESCRIPTION_1\">456</Col><Col id=\"USE_YN_1\">N</Col><Col id=\"REG_USER_1\">영문</Col><Col id=\"CHK2\">0</Col><Col id=\"CHK3\">0</Col></Row><Row><Col id=\"ID\">B-01</Col><Col id=\"NAME\">홍문서</Col><Col id=\"DESCRIPTION\">789</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">영문</Col><Col id=\"CHK\">0</Col><Col id=\"ID_0\">B-01</Col><Col id=\"NAME_0\">홍문서</Col><Col id=\"DESCRIPTION_0\">789</Col><Col id=\"USE_YN_0\">Y</Col><Col id=\"REG_USER_0\">영문</Col><Col id=\"ID_1\">B-01</Col><Col id=\"NAME_1\">홍문서</Col><Col id=\"DESCRIPTION_1\">789</Col><Col id=\"USE_YN_1\">Y</Col><Col id=\"REG_USER_1\">영문</Col><Col id=\"CHK2\">0</Col><Col id=\"CHK3\">0</Col></Row><Row><Col id=\"ID\">B-02</Col><Col id=\"NAME\">홍고딕</Col><Col id=\"DESCRIPTION\">987</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">한글</Col><Col id=\"CHK\">0</Col><Col id=\"ID_0\">B-02</Col><Col id=\"NAME_0\">홍고딕</Col><Col id=\"DESCRIPTION_0\">987</Col><Col id=\"USE_YN_0\">Y</Col><Col id=\"REG_USER_0\">한글</Col><Col id=\"ID_1\">B-02</Col><Col id=\"NAME_1\">홍고딕</Col><Col id=\"DESCRIPTION_1\">987</Col><Col id=\"USE_YN_1\">Y</Col><Col id=\"REG_USER_1\">한글</Col><Col id=\"CHK2\">0</Col><Col id=\"CHK3\">0</Col></Row><Row><Col id=\"ID\">C-01</Col><Col id=\"NAME\">김수식</Col><Col id=\"DESCRIPTION\">765</Col><Col id=\"USE_YN\">N</Col><Col id=\"REG_USER\">영문</Col><Col id=\"CHK\">0</Col><Col id=\"ID_0\">C-01</Col><Col id=\"NAME_0\">김수식</Col><Col id=\"DESCRIPTION_0\">765</Col><Col id=\"USE_YN_0\">N</Col><Col id=\"REG_USER_0\">영문</Col><Col id=\"ID_1\">C-01</Col><Col id=\"NAME_1\">김수식</Col><Col id=\"DESCRIPTION_1\">765</Col><Col id=\"USE_YN_1\">N</Col><Col id=\"REG_USER_1\">영문</Col><Col id=\"CHK2\">0</Col><Col id=\"CHK3\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","8","191","458","18",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("1.Cell 포커스 셋팅 및 이동(setCellPos(index)/Grid.showEditor( bShow ))");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_cssclass("sta_WF_Title01");
            this.addChild(obj.name, obj);

            obj = new Static("Static05",null,"4","1622","23","6",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("그리드에서 사용하는 각종기능들");
            obj.set_textAlign("center");
            obj.set_background("#f80626");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","12","29","838","164",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("※ Grid 에서 편집이 가능한 Cell 이 선택되었을 때 편집모드용 컨트롤이 활성화 되는 방법을 설정하는 속성입니다.\r\n예) this.Grid00.set_autoenter( \"select\" ); 바로 포커스가 cell편집가능 함.\r\n※ Grid 에 스크롤 없이 전체 Column이 표시되도록 Column의 너비를 자동조절할지 설정하는 속성입니다.  \r\n예) this.Grid00.set_autofittype( \"col\" );\r\n※ Cell 이 Combo 또는 Calendar 형식일 때 팝업창으로 선택된 값이 DataSet 에 적용되는 시점을 설정하는 속성입니다.\r\n예) this.Grid00.set_autoupdatetype( \"itemselect\");\r\n => Cell 에서 팝업창(Combo 리스트 또는 팝업달력)으로 값을 선택하는 즉시 DataSet 에 반영됩니다.\r\n※ 특정 Cell에 정규식으로 한글만 입력가능하게 막는다\r\n참조) this.grdMaster_oninput = function(obj:nexacro.Grid,e:nexacro.InputEventInfo)\r\n          obj.setEditValue(inputKeyString.replace(/[^\\ㄱ-ㅎㅏ-ㅣ가-힣]/g, \"\"));\r\n");
            obj.set_textAlign("left");
            obj.set_background("cadetblue");
            obj.set_font("bold 14px/normal \"Gulim\"");
            obj.set_color("#ffffff");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","7","242","462","262",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"ID\"/><Cell col=\"1\" text=\"NAME\"/><Cell col=\"2\" text=\"DESCRIPTION\"/><Cell col=\"3\" text=\"USE_YN\"/><Cell col=\"4\" text=\"REG_USER\"/></Band><Band id=\"body\"><Cell text=\"bind:ID\" edittype=\"text\"/><Cell col=\"1\" text=\"bind:NAME\" edittype=\"text\"/><Cell col=\"2\" text=\"bind:DESCRIPTION\" edittype=\"text\"/><Cell col=\"3\" text=\"bind:USE_YN\" edittype=\"text\"/><Cell col=\"4\" text=\"bind:REG_USER\" edittype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbCell","375","214","93","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_innerdataset("dsCellNum");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskRowNum","123","214","104","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_format("0");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle01","14","215","103","22",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text(" 그리드(Row)행");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle00","225","215","146","22",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text(" 그리드(Column)열Cell");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.addChild(obj.name, obj);

            obj = new Button("btnCreate","7","540","87","28",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("GridCreate");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","7","511","458","18",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("4.그리드 동적으로 생성및 삭제");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_cssclass("sta_WF_Title01");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","491","216","359",null,null,"40",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj.set_cellclickbound("cell");
            obj.set_selectchangetype("down");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"48\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\"/><Cell col=\"2\" text=\"ID\"/><Cell col=\"3\" text=\"NAME\"/><Cell col=\"4\" text=\"DESCRIPTION\"/><Cell col=\"5\" text=\"USE_YN\"/><Cell col=\"6\" text=\"REG_USER\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"2\" text=\"bind:ID\"/><Cell col=\"3\" text=\"bind:NAME\"/><Cell col=\"4\" text=\"bind:DESCRIPTION\"/><Cell col=\"5\" text=\"bind:USE_YN\"/><Cell col=\"6\" text=\"bind:REG_USER\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","491","191","358","18",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("2.그리드 라디오버튼처럼사용하기");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_cssclass("sta_WF_Title01");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList2","870","219",null,null,"20","40",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_binddataset("ds_list2");
            obj.set_autofittype("none");
            obj.set_cellclickbound("cell");
            obj.set_selectscrollmode("select");
            obj.set_fastvscrolltype("default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"48\"/><Column size=\"65\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"전체권한\" expandshow=\"show\" expandsize=\"26\" expandimage=\"URL(&quot;theme://images/chk_WF_Box.png&quot;)\"/><Cell col=\"3\" text=\"NO\"/><Cell col=\"4\" text=\"ROWTYPE\"/><Cell col=\"5\" text=\"ID\"/><Cell col=\"6\" text=\"NAME\"/><Cell col=\"7\" text=\"DESCRIPTION\"/><Cell col=\"8\" text=\"USE_YN\"/><Cell col=\"9\" text=\"ID_0\"/><Cell col=\"10\" text=\"NAME_0\"/><Cell col=\"11\" text=\"DESCRIPTION_0\"/><Cell col=\"12\" text=\"USE_YN_0\"/><Cell col=\"13\" text=\"REG_USER_0\"/><Cell col=\"14\" text=\"ID_1\"/><Cell col=\"15\" text=\"NAME_1\"/><Cell col=\"16\" text=\"DESCRIPTION_1\"/><Cell col=\"17\" text=\"USE_YN_1\"/><Cell col=\"18\" text=\"REG_USER_1\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:CHK2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:CHK3\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"3\" expr=\"currow+1\" textAlign=\"center\"/><Cell col=\"4\" expr=\"dataset.getRowType(currow)\"/><Cell col=\"5\" text=\"bind:ID\"/><Cell col=\"6\" text=\"bind:NAME\"/><Cell col=\"7\" text=\"bind:DESCRIPTION\"/><Cell col=\"8\" text=\"bind:USE_YN\"/><Cell col=\"9\" text=\"bind:ID_0\"/><Cell col=\"10\" text=\"bind:NAME_0\"/><Cell col=\"11\" text=\"bind:DESCRIPTION_0\"/><Cell col=\"12\" text=\"bind:USE_YN_0\"/><Cell col=\"13\" text=\"bind:REG_USER_0\"/><Cell col=\"14\" text=\"bind:ID_1\"/><Cell col=\"15\" text=\"bind:NAME_1\"/><Cell col=\"16\" text=\"bind:DESCRIPTION_1\"/><Cell col=\"17\" text=\"bind:USE_YN_1\"/><Cell col=\"18\" text=\"bind:REG_USER_1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","871","191","398","18",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("3.체크박스(타입변경/타입변경없음),이미지체크/멀티소팅");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_cssclass("sta_WF_Title01");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","872","29","758","164",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("※ Grid 해드를 클릭시 올체크를 한다 ROWTYPE변경됨.\r\n예) this.gfn_checkAll(obj, e,true);\r\n※ Grid 해드를 클릭시 올체크를 하지만 ROWTYPE변경않됨.\r\n예) this.gfn_checkAll(obj, e);\r\n※  Grid 해드를 클릭시 올체크를 한다 ROWTYPE변경됨 이름이들어가 이미지체크.\r\n예) this.gfn_setExpandCheckAll(obj,e);\r\n※ 체크박스 제외한 모든 해드를 더블클릭시 소팅(SORTING) \r\n참조) this.gfn_gridSort(obj,e);\r\n한번더클릭:▲      두번더클릭: ▼    세번더클릭:일반");
            obj.set_textAlign("left");
            obj.set_background("cadetblue");
            obj.set_font("bold 14px/normal \"Gulim\"");
            obj.set_color("#ffffff");
            obj.set_verticalAlign("top");
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
        this.registerScript("SML030VariousGridFunctionsM01.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): SML030VariousGridFunctionsM01.xfdl(각종GRID편리한 기능들)
        * 작 성			일 명: jiback
        * 작 성	    	일 자: 2018/09/13
        * 변 경     	일 자:
        * 변 경			자 명:
        * 변경 및 수정 로그 : 일자별로 변경자 및 변경사항을 간략히 기술
        */
        /**********************************************************************
        	01. 전처리 공통 함수 선언
        ***********************************************************************/
        /**********************************************************************
        	02. 폼 변수 정의
        ***********************************************************************/
        /**********************************************************************
        	03. 폼 로드 및 닫을때(폼이 포커스 갈때)
        ***********************************************************************/
        /**
         * 기능 : 폼 로드 완료후 초기값 Setting
         */
        this.form_onload = function(obj,e)
        {
        	//폼에 공통으로 로드시 사용하는 함수.
        	this.gfn_formOnload(obj.e);
        	//사용자 화면  초기화 함수
        	this.fn_formInit();
        };

        /**
         * 기능 : 폼언 로드(닫기전 셋팅)  Setting
         */
        this.form_onclose = function(obj,e)
        {

        };
        /**********************************************************************
        	04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        /*
         * 화면편집모드를 셋팅하는 화면
         */
        this.fn_formInit = function()
        {
        	if(this.gfn_isNull(this.mskRowNum.value))
        	{
        		this.mskRowNum.set_value(0);
        	}

        	this.cmbCell.set_index(0);

        	this.ds_list.set_rowposition(this.mskRowNum.value);
        	this.grdMaster.setCellPos(3);
        	this.grdMaster.showEditor(true);
        };

        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {

        	if(nErrorCode != 0)
        	{
        		this.gfn_alert(sErrorMsg,"에러정보","","error");
        		return false;
        	}else
        	{
        		/*sSvcId (Transaction Id)*/
        		switch(sSvcId)
        		{
        			case "Init":
        				this.postformInit();
        				break;
        			case "Search":
        			    this.postSearch();
        			  	break;
        			case "Save":
        			    this.postSave();
        				break;
        			case "Add":
        				this.postAdd();
        				break;
        			case "Del":
        				this.postDel();
        				break;
        			default:
        				break;
        		}
        	}
        };

        this.cmbCell_onitemchanged = function(obj,e)
        {

        	this.ds_list.set_rowposition(this.mskRowNum.value);
        	this.grdMaster.setCellPos(e.postvalue);
        	this.grdMaster.showEditor(true);

        };


        this.btnCreate_onclick = function(obj,e)
        {
        	// Remove Object form Parent Form
        	if (this.isValidObject("Grid02"))
        	{
        		this.Grid02.destroy();
        		this.removeChild("Grid02");
            }

        	var objGrid = new Grid();
        	objGrid.init("Grid02", this.btnCreate.getOffsetLeft(),  this.btnCreate.getOffsetBottom(), 462, 200,null,null);

        	// Add Object to Parent Form
        	this.addChild("Grid02", objGrid);
        	objGrid.set_autofittype( "col" );
        	objGrid.createFormat();
        	// Show Object
        	objGrid.show();
        	//trace(objGrid.name);
        	//trace(this.GridNm.name);
        	// Create dataset
        	var objDs = new Dataset();
        	objDs.set_name("ds_test");

        	objDs.addColumn("no", "string");
        	objDs.addColumn("name", "string");
        	objDs.addColumn("age", "int");

        	// Dataset Data Input
        	for (var i = 0; i < 5; i++)
        	{
        		var nRow = objDs.addRow();

        		objDs.setColumn(nRow, "no", i);
        		objDs.setColumn(nRow, "name", 'employ_' + i);
        		objDs.setColumn(nRow, "age", (10 + i));
        	}

        	//objGrid.set_binddataset("ds_test");
            objGrid.set_binddataset(objDs);

        	objGrid.appendContentsRow("head");
        	objGrid.appendContentsRow("body");
        	objGrid.appendContentsRow("summ");

        	// Col Generation
        	// Append one column by default from  appendContentsRow()
        	objGrid.appendContentsCol();
        	objGrid.appendContentsCol();

        	// Col Size Setting
        	objGrid.setFormatColProperty(0, "size", 100);
        	objGrid.setFormatColProperty(1, "size", 100);
        	objGrid.setFormatColProperty(2, "size", 100);

        	// band setting by cell properties
        	for (var r = 0; r < objDs.getColCount(); r++)
        	{
        		var colinfo = objDs.getColumnInfo(r);
        		objGrid.setCellProperty("head", r, "text", colinfo.name);
        		objGrid.setCellProperty("body", r, "text", "bind:" + colinfo.name);
        		if (r == 2)
        		{
        			objGrid.setCellProperty("summ", r, "text", "expr:dataset.getSum('" + colinfo.name + "')");
        		}
        		else if(r == 1)
        		{
        			objGrid.setCellProperty("summ", r, "text", "total");
        		}
        	}
        };
        /************************************************************************
         * 특정셀에 한글만 입력가능하게 하는기능
         ************************************************************************/
        this.grdMaster_oninput = function(obj,e)
        {
        	if(obj.getCellPos() == obj.getBindCellIndex("body","USE_YN"))
        	{
        		var inputKeyString =  obj.getEditText();
        		if(inputKeyString)
        		{
        			obj.setEditValue(inputKeyString.replace(/[^\ㄱ-ㅎㅏ-ㅣ가-힣]/g, ""));
        		}
        	}
        };

        this.grdList_oncellclick = function(obj,e)
        {
        	if(e.cell == obj.getBindCellIndex("body","CHK"))
        	{
        		this.gfn_setGridCheckSingle(obj,e);
        	}
        };


        this.grdList2_onheadclick = function(obj,e)
        {
        	if(e.cell == obj.getBindCellIndex("body","CHK"))
        	{
        		this.gfn_checkAll(obj, e,true);

        	}else if(e.cell == obj.getBindCellIndex("body","CHK2"))
        	{
        		this.gfn_checkAll(obj, e);
        	}
        };

        this.grdList2_onheaddblclick = function(obj,e)
        {
        	if(e.cell != obj.getBindCellIndex("body","CHK") && e.cell != obj.getBindCellIndex("body","CHK2") && e.cell != obj.getBindCellIndex("body","CHK3"))
        	{
        		this.gfn_gridSort(obj,e);
        	}
        };

        this.grdList2_onexpandup = function(obj,e)
        {
        	if(e.col == obj.getBindCellIndex("body","CHK3"))
        	{
        		this.gfn_setExpandCheckAll(obj,e);
        	}
        };

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
            this.addEventHandler("onload",this.form_onload,this);
            this.Static03.addEventHandler("onclick",this.Static03_onclick,this);
            this.grdMaster.addEventHandler("oninput",this.grdMaster_oninput,this);
            this.cmbCell.addEventHandler("onitemchanged",this.cmbCell_onitemchanged,this);
            this.btnCreate.addEventHandler("onclick",this.btnCreate_onclick,this);
            this.grdList.addEventHandler("oncellclick",this.grdList_oncellclick,this);
            this.grdList2.addEventHandler("onheadclick",this.grdList2_onheadclick,this);
            this.grdList2.addEventHandler("onexpandup",this.grdList2_onexpandup,this);
            this.grdList2.addEventHandler("onheaddblclick",this.grdList2_onheaddblclick,this);
            this.Static06.addEventHandler("onclick",this.Static03_onclick,this);
        };
        this.loadIncludeScript("SML030VariousGridFunctionsM01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
