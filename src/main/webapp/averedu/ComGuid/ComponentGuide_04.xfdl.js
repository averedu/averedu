(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ComponentGuide_01");
            this.set_titletext("Grid");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grd", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column2\">1,000,000</Col><Col id=\"Column3\">김한국</Col><Col id=\"Column0\">1</Col><Col id=\"Column1\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다</Col><Col id=\"Column4\">20181128</Col><Col id=\"Column5\">EKSSFK1532</Col><Col id=\"Column6\">0</Col><Col id=\"Column7\">코드명003</Col></Row><Row><Col id=\"Column2\">1,000</Col><Col id=\"Column3\">김한국</Col><Col id=\"Column0\">2</Col><Col id=\"Column1\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다</Col><Col id=\"Column4\">20181128</Col><Col id=\"Column5\">ASDFA3456</Col><Col id=\"Column6\">1</Col><Col id=\"Column7\">코드명001</Col></Row><Row><Col id=\"Column2\">1</Col><Col id=\"Column3\">김한국</Col><Col id=\"Column0\">3</Col><Col id=\"Column1\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다</Col><Col id=\"Column4\">20181128</Col><Col id=\"Column5\">GZS36XCS1</Col><Col id=\"Column6\">0</Col><Col id=\"Column7\">코드명002</Col></Row><Row><Col id=\"Column2\">1,000,000,000,001</Col><Col id=\"Column3\">김한국</Col><Col id=\"Column0\">4</Col><Col id=\"Column1\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다</Col><Col id=\"Column4\">20181128</Col><Col id=\"Column5\">DE453Z52S</Col><Col id=\"Column6\">1</Col><Col id=\"Column7\">코드명003</Col></Row><Row><Col id=\"Column2\">1,000,000,000,001</Col><Col id=\"Column3\">김한국</Col><Col id=\"Column0\">5</Col><Col id=\"Column1\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다</Col><Col id=\"Column4\">20181128</Col><Col id=\"Column5\">NM4SG51V</Col><Col id=\"Column6\">0</Col><Col id=\"Column7\">코드명001</Col></Row><Row><Col id=\"Column2\">1,000,000,000,001</Col><Col id=\"Column3\">김한국</Col><Col id=\"Column0\">6</Col><Col id=\"Column1\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다</Col><Col id=\"Column4\">20181128</Col><Col id=\"Column5\">DFH34QTF</Col><Col id=\"Column6\">1</Col><Col id=\"Column7\">코드명002</Col></Row><Row><Col id=\"Column2\">1,000,000,000,001</Col><Col id=\"Column3\">김한국</Col><Col id=\"Column0\">7</Col><Col id=\"Column1\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다</Col><Col id=\"Column4\">20181128</Col><Col id=\"Column5\">S452FASD2</Col><Col id=\"Column6\">0</Col><Col id=\"Column7\">코드명003</Col></Row><Row><Col id=\"Column2\">1,000,000,000,001</Col><Col id=\"Column3\">김한국</Col><Col id=\"Column0\">8</Col><Col id=\"Column1\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다</Col><Col id=\"Column4\">20181128</Col><Col id=\"Column5\">S47NBER2A</Col><Col id=\"Column6\">0</Col><Col id=\"Column7\">코드명001</Col></Row><Row><Col id=\"Column2\">1,000,000,000,001</Col><Col id=\"Column3\">김한국</Col><Col id=\"Column0\">9</Col><Col id=\"Column1\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다</Col><Col id=\"Column4\">20181128</Col><Col id=\"Column5\">DE453Z52S</Col><Col id=\"Column6\">0</Col><Col id=\"Column7\">코드명002</Col></Row><Row><Col id=\"Column2\">1,000,000,000,001</Col><Col id=\"Column3\">김한국</Col><Col id=\"Column0\">10</Col><Col id=\"Column1\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다</Col><Col id=\"Column4\">20181128</Col><Col id=\"Column5\">NM4SG51V</Col><Col id=\"Column6\">0</Col></Row><Row><Col id=\"Column2\">1,000,000,000,001</Col><Col id=\"Column3\">김한국</Col><Col id=\"Column0\">999</Col><Col id=\"Column1\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다</Col><Col id=\"Column4\">20181128</Col><Col id=\"Column5\">DFH34QTF</Col><Col id=\"Column6\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_type", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"순번\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/><Column id=\"expandImg\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"순번\">1</Col><Col id=\"Column2\">일</Col><Col id=\"Column3\">가나다라마</Col><Col id=\"Column5\">expand</Col><Col id=\"Column6\">www.link.com</Col><Col id=\"Column7\">1234567890</Col><Col id=\"Column8\">버튼</Col><Col id=\"lev\">0</Col><Col id=\"expandImg\">theme://images/btn_WF_PopSrch.png</Col></Row><Row><Col id=\"순번\">2</Col><Col id=\"Column2\">일이</Col><Col id=\"Column3\">가나다라마</Col><Col id=\"Column5\">expand</Col><Col id=\"Column6\">www.link.com</Col><Col id=\"Column7\">1234567890</Col><Col id=\"Column8\">버튼</Col><Col id=\"lev\">0</Col><Col id=\"expandImg\">theme://images/btn_WF_PopSrch.png</Col></Row><Row><Col id=\"순번\">3</Col><Col id=\"Column2\">일이삼</Col><Col id=\"Column3\">가나다라마</Col><Col id=\"Column5\">expand</Col><Col id=\"Column6\">www.link.com</Col><Col id=\"Column7\">1234567890</Col><Col id=\"Column8\">버튼</Col><Col id=\"lev\">0</Col><Col id=\"expandImg\">theme://images/btn_WF_PopSrch.png</Col></Row><Row><Col id=\"순번\">4</Col><Col id=\"Column2\">일이삼사</Col><Col id=\"Column3\">가나다라마</Col><Col id=\"Column5\">expand</Col><Col id=\"Column6\">www.link.com</Col><Col id=\"Column7\">1234567890</Col><Col id=\"Column8\">버튼</Col><Col id=\"lev\">0</Col><Col id=\"expandImg\">theme://images/btn_WF_PopSrch.png</Col></Row><Row><Col id=\"순번\">5</Col><Col id=\"Column2\">일이삼사오</Col><Col id=\"Column3\">가나다라마</Col><Col id=\"Column5\">expand</Col><Col id=\"Column6\">www.link.com</Col><Col id=\"Column7\">1234567890</Col><Col id=\"Column8\">버튼</Col><Col id=\"lev\">0</Col><Col id=\"expandImg\">theme://images/btn_WF_PopSrch.png</Col></Row><Row><Col id=\"순번\">6</Col><Col id=\"Column2\">일이삼사오육</Col><Col id=\"Column3\">가나다라마</Col><Col id=\"Column5\">expand</Col><Col id=\"Column6\">www.link.com</Col><Col id=\"Column7\">1234567890</Col><Col id=\"Column8\">버튼</Col><Col id=\"expandImg\">theme://images/btn_WF_PopSrch.png</Col><Col id=\"lev\">0</Col></Row><Row><Col id=\"순번\">7</Col><Col id=\"Column2\">일이삼사오육칠</Col><Col id=\"Column3\">가나다라마</Col><Col id=\"Column5\">expand</Col><Col id=\"Column6\">www.link.com</Col><Col id=\"Column7\">1234567890</Col><Col id=\"Column8\">버튼</Col><Col id=\"expandImg\">theme://images/btn_WF_PopSrch.png</Col><Col id=\"lev\">0</Col></Row><Row><Col id=\"순번\">8</Col><Col id=\"Column2\">일이삼사오육칠팔</Col><Col id=\"Column3\">가나다라마</Col><Col id=\"Column5\">expand</Col><Col id=\"Column6\">www.link.com</Col><Col id=\"Column7\">1234567890</Col><Col id=\"Column8\">버튼</Col><Col id=\"expandImg\">theme://images/btn_WF_PopSrch.png</Col><Col id=\"lev\">0</Col></Row><Row><Col id=\"순번\">9</Col><Col id=\"Column2\">일이삼사오육칠팔구</Col><Col id=\"Column3\">가나다라마</Col><Col id=\"Column5\">expand</Col><Col id=\"Column6\">www.link.com</Col><Col id=\"Column7\">1234567890</Col><Col id=\"Column8\">버튼</Col><Col id=\"expandImg\">theme://images/btn_WF_PopSrch.png</Col><Col id=\"lev\">0</Col></Row><Row><Col id=\"순번\">10</Col><Col id=\"Column2\">일리삼사오육칠팔구십</Col><Col id=\"Column3\">가나다라마</Col><Col id=\"Column5\">expand</Col><Col id=\"Column6\">www.link.com</Col><Col id=\"Column7\">1234567890</Col><Col id=\"Column8\">버튼</Col><Col id=\"expandImg\">theme://images/btn_WF_PopSrch.png</Col><Col id=\"lev\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Tree", this);
            obj._setContents("<ColumnInfo><Column id=\"txt\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"txt\">1 Depth Menu</Col><Col id=\"lev\">0</Col></Row><Row><Col id=\"txt\">2 Depth Menu</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"txt\">1 Depth Menu</Col><Col id=\"lev\">0</Col></Row><Row><Col id=\"txt\">2 Depth Menu</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"txt\">1 Depth Menu</Col><Col id=\"lev\">0</Col></Row><Row><Col id=\"txt\">2 Depth Menu</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"txt\">3 Depth Menu</Col><Col id=\"lev\">2</Col></Row><Row><Col id=\"txt\">3 Depth Menu</Col><Col id=\"lev\">2</Col></Row><Row><Col id=\"txt\">2 Depth Menu</Col><Col id=\"lev\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_00","0","0",null,"200","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#ccd6dc");
            this.addChild(obj.name, obj);

            obj = new Static("stc_02","20","80","260","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#0066b3");
            obj.set_text("Component Guide 04");
            obj.set_color("#ffffff");
            obj.set_font("normal 20px/normal \"Malgun Gothic\"");
            obj.set_letterSpacing("0px");
            obj.set_padding("0px, 0px, 0px, 10px");
            this.addChild(obj.name, obj);

            obj = new Static("stc_03","20","147","260","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Grid");
            obj.set_font("normal 14px/normal \"Malgun Gothic\"");
            obj.set_color("#363636");
            this.addChild(obj.name, obj);

            obj = new Static("stc_04","20","225","600","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Grid");
            obj.set_font("24px/normal \"Malgun Gothic\"");
            obj.set_color("#000000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_05","20","277","490","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("- Grid 높이는 기본은 제공하는 Head height : 30px, body : 30px 꼭 확인 ");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09","15","325","330","22",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("그리드 대 타이틀");
            obj.set_cssclass("sta_WF_Title01");
            this.addChild(obj.name, obj);

            obj = new Button("btn_02",null,"326","56","22","73",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("행추가");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_00","15","350",null,"304","15",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("ds_grd");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"645\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" text=\"제목(Left)\"/><Cell col=\"2\" text=\"단위(Right)\"/><Cell col=\"3\" text=\"작성자\"/><Cell col=\"4\" text=\"작성일(Center)\"/><Cell col=\"5\" text=\"코드(Center)\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" displaytype=\"text\"/><Cell col=\"1\" text=\"bind:Column1\" cssclass=\"pointL\" background=\"#fdffc4\"/><Cell col=\"2\" text=\"bind:Column2\" displaytype=\"number\" cssclass=\"pointR\" background=\"#dcffe1\"/><Cell col=\"3\" text=\"bind:Column3\" displaytype=\"text\" background=\"#ffeae6\"/><Cell col=\"4\" text=\"bind:Column4\" displaytype=\"date\"/><Cell col=\"5\" text=\"bind:Column5\" displaytype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","15","343","488","7",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("7");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","780","347",null,"3","15",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("3");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Button("btn_00",null,"326","56","22","15",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("행삭제");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","530","320","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("30");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","15","320","488","10",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","776","320","488","6",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_02","15","775",null,"303","15",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_binddataset("ds_type");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"445\"/><Column size=\"150\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"Column0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"상태\" cssclass=\"grd_State\"/><Cell col=\"3\" text=\"Edit\"/><Cell col=\"4\" text=\"Combo\"/><Cell col=\"5\" text=\"Expand\"/><Cell col=\"6\" text=\"link\"/><Cell col=\"7\" text=\"Mask\" cssclass=\"point\"/><Cell col=\"8\" text=\"Button\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"123\" displaytype=\"text\"/><Cell col=\"2\" text=\"bind:Column1\" cssclass=\"grd_BgAdd\"/><Cell col=\"3\" text=\"bind:Column2\" displaytype=\"editcontrol\"/><Cell col=\"4\" text=\"bind:Column3\" displaytype=\"combocontrol\"/><Cell col=\"5\" text=\"bind:Column5\" expandimage=\"bind:expandImg\" expandshow=\"show\" expandsize=\"30\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"6\" text=\"bind:Column6\" textDecoration=\"underline\" cssclass=\"Link\"/><Cell col=\"7\" text=\"bind:Column7\" displaytype=\"maskeditcontrol\" edittype=\"mask\" cssclass=\"pointR\"/><Cell col=\"8\" text=\"bind:Column8\" displaytype=\"buttoncontrol\" edittype=\"button\"/></Band><Band id=\"summary\"><Cell colspan=\"7\" text=\"소계01\" cssclass=\"Sum01\"/><Cell col=\"7\" colspan=\"2\" text=\"1000000000\" displaytype=\"number\" cssclass=\"Sum01\"/><Cell row=\"1\" colspan=\"7\" text=\"합계\"/><Cell row=\"1\" col=\"7\" colspan=\"2\" text=\"1000000000\" displaytype=\"number\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_06","15","1407","330","25",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("그리드 Head 항목명이 두 줄일 경우 (각각 30px)");
            obj.set_cssclass("sta_WF_Title04");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_03","15","1435","615","124",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_binddataset("ds_type");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"219\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"Column0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" rowspan=\"2\" text=\"No.\"/><Cell col=\"2\" colspan=\"3\" text=\"Component\"/><Cell row=\"1\" col=\"2\" text=\"Edit\"/><Cell row=\"1\" col=\"3\" text=\"combo\"/><Cell row=\"1\" col=\"4\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"123\" displaytype=\"text\"/><Cell col=\"2\" text=\"bind:Column2\" cssclass=\"pointL\"/><Cell col=\"3\" text=\"bind:Column3\" displaytype=\"combocontrol\"/><Cell col=\"4\" cssclass=\"pointL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_07","650","1407","390","25",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("그리드 Head 1row 안에 텍스트가 두 줄이 들어갈 경우 (높이 50px)");
            obj.set_cssclass("sta_WF_Title04");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_01","650","1435",null,"124","15",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_binddataset("ds_type");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"313\"/><Column size=\"150\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" text=\"한 row안에&#13;&#10;두 줄 일때\"/><Cell col=\"2\" text=\"Combo\"/></Band><Band id=\"body\"><Cell text=\"bind:Column1\"/><Cell col=\"1\" text=\"bind:Column2\" cssclass=\"pointL\"/><Cell col=\"2\" text=\"bind:Column3\" displaytype=\"combocontrol\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_08","15","1581","330","25",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("Tree Grid");
            obj.set_cssclass("sta_WF_Title04");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_04","15","1610","300","190",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_binddataset("ds_Tree");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,null");
            obj.set_cssclass("grd_WF_Tree");
            obj.set_treeuseimage("false");
            obj.set_treeuseline("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"298\"/></Columns><Rows><Row size=\"30\"/></Rows><Band id=\"body\"><Cell text=\"bind:txt\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:lev\" border=\"0px none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_49","175","1581","138","24",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("cellclass: <b v=\'true\'>grd_WF_Tree</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_05","323","1610","300","189",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_binddataset("ds_Tree");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,null");
            obj.set_cssclass("grd_WF_Tree02");
            obj.set_treeuseimage("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"298\"/></Columns><Rows><Row size=\"30\"/></Rows><Band id=\"body\"><Cell text=\"bind:txt\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:lev\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_10","483","1580","138","24",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("cellclass: <b v=\'true\'>grd_WF_Tree02</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12","0","1830",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_background("#ccd6dc");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13","650","1580","300","25",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("Menu Grid");
            obj.set_cssclass("sta_WF_Title04");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_06","650","1610","300","190",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_binddataset("ds_Tree");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,null");
            obj.set_cssclass("grd_WF_MenuList");
            obj.set_treeuseimage("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"298\"/></Columns><Rows><Row size=\"30\"/></Rows><Band id=\"body\"><Cell text=\"bind:txt\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:lev\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14","797","1580","148","24",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("cellclass: <b v=\'true\'>grd_WF_MenuList</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_15",null,"1580","149","22","15",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("cellclass: <b v=\'true\'>grd_WF_MenuListX</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_07","965","1610",null,"188","15",null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_binddataset("ds_Tree");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,null");
            obj.set_cssclass("grd_WF_MenuListX");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"298\"/></Columns><Rows><Row size=\"30\"/></Rows><Band id=\"body\"><Cell text=\"bind:txt\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:lev\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_08","15","1160",null,"202","15",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_binddataset("ds_type");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"170\"/><Column size=\"170\"/><Column size=\"170\"/><Column size=\"170\"/><Column size=\"170\"/><Column size=\"170\"/><Column size=\"189\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Column0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"기본\"/><Cell col=\"3\" text=\"타이틀컬러01\" background=\"#72b1ff\"/><Cell col=\"4\" text=\"타이틀컬러02\" background=\"#8dc0ff\"/><Cell col=\"5\" text=\"타이틀컬러03\" background=\"#abd1ff\"/><Cell col=\"6\" text=\"타이틀컬러04\" background=\"#c4deff\"/><Cell col=\"7\" text=\"타이틀컬러05\" background=\"#d7e9ff\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"123\" displaytype=\"text\" background=\"#f3fffd\"/><Cell col=\"2\" background=\"#f3fff3\"/><Cell col=\"3\" background=\"#fff4f2\"/><Cell col=\"4\" background=\"#f2f5ff\"/><Cell col=\"5\" expandimage=\"bind:expandImg\" expandshow=\"show\" expandsize=\"30\" displaytype=\"editcontrol\" edittype=\"text\" text=\"bind:Column5\" background=\"#fffaf2\"/><Cell col=\"6\" textDecoration=\"underline\" cssclass=\"Link\" background=\"#fff1fd\"/><Cell col=\"7\" cssclass=\"pointR\" background=\"#fffef1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_16","15","1132","331","25",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("그리드 컬러 가이드");
            obj.set_cssclass("sta_WF_Title04");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01","20","20","390","60",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_background("#003876");
            obj.set_text("한국공항공사(iFIS) UI");
            obj.set_color("#ffffff");
            obj.set_font("normal 36px/normal \"Malgun Gothic\"");
            obj.set_letterSpacing("0px");
            obj.set_padding("0px, 0px, 0px, 10px");
            this.addChild(obj.name, obj);

            obj = new Static("stc_11","562","1088","138","24",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("cellclass: <b v=\'true\'>Sum01</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_17","581","748","139","24",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("cellclass: <b v=\'true\'>Link</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_18","60","747","138","24",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("cellclass: <b v=\'true\'>grd_BgAdd</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_19","420","1126","139","24",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("<b v=\'true\'>Background : #72b1ff</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_20","580","1125","140","25",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("<b v=\'true\'>Background : #8dc0ff</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_21","745","1125","140","25",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("<b v=\'true\'>Background : #abd1ff</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_22","910","1125","140","25",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("<b v=\'true\'>Background : #c4deff</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_23","1100","1125","140","25",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("<b v=\'true\'>Background : #d7e9ff</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_34","120","761","1","20",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_background("#ff0000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_24","620","768","1","50",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_background("#ff0000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_25","1070","768","1","20",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_background("#ff0000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_26","1031","748","139","24",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("cellclass: <b v=\'true\'>point</b>");
            obj.set_font("11px/normal \"Malgun Gothic\"");
            obj.set_color("dodgerblue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_27","630","1038","1","50",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_background("#ff0000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_28","470","1148","1","20",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_background("#ff0000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_29","640","1148","1","20",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_background("#ff0000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_30","810","1148","1","20",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_background("#ff0000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_31","980","1148","1","20",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_background("#ff0000");
            this.addChild(obj.name, obj);

            obj = new Static("stc_32","1150","1148","1","20",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_background("#ff0000");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("ComponentGuide_04.xfdl", function() {

        this.tab_00_onchanged = function(obj,e)
        {

        };

        this.ComponentGuide_01_onclick = function(obj,e)
        {

        };

        this.stc_21_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclick",this.ComponentGuide_01_onclick,this);
            this.stc_21.addEventHandler("onclick",this.stc_21_onclick,this);
        };
        this.loadIncludeScript("ComponentGuide_04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
