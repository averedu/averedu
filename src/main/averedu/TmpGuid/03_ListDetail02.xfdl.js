(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Template_Sample01");
            this.set_titletext("ListDetail02");
            if (Form == this.constructor)
            {
                this._setFormPosition(1606,830);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cmb", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">이력전체</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">현재기준</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/><Col id=\"Column1\">1</Col><Col id=\"Column2\">12345678</Col><Col id=\"Column3\">비정형 텍스트 입니다.</Col><Col id=\"Column5\"/><Col id=\"Column6\">20181025</Col><Col id=\"Column7\">10,000,000</Col><Col id=\"Column8\">김항공</Col><Col id=\"Column4\">가나다라</Col><Col id=\"Column9\">9999-12-31</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\">2</Col><Col id=\"Column2\">12345678</Col><Col id=\"Column3\">비정형 텍스트 입니다.</Col><Col id=\"Column5\"/><Col id=\"Column6\">20181025</Col><Col id=\"Column7\">10,000,000</Col><Col id=\"Column8\">김항공</Col><Col id=\"Column4\">가나다라</Col><Col id=\"Column9\">9999-12-31</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\">3</Col><Col id=\"Column2\">12345678</Col><Col id=\"Column3\">비정형 텍스트 입니다.</Col><Col id=\"Column5\"/><Col id=\"Column6\">20181025</Col><Col id=\"Column7\">10,000,000</Col><Col id=\"Column8\">김항공</Col><Col id=\"Column4\">가나다라</Col><Col id=\"Column9\">9999-12-31</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\">4</Col><Col id=\"Column2\">12345678</Col><Col id=\"Column3\">비정형 텍스트 입니다.</Col><Col id=\"Column5\"/><Col id=\"Column6\">20181025</Col><Col id=\"Column7\">10,000,000</Col><Col id=\"Column8\">김항공</Col><Col id=\"Column4\">가나다라</Col><Col id=\"Column9\">9999-12-31</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\">5</Col><Col id=\"Column2\">12345678</Col><Col id=\"Column3\">비정형 텍스트 입니다.</Col><Col id=\"Column5\"/><Col id=\"Column6\">20181025</Col><Col id=\"Column7\">10,000,000</Col><Col id=\"Column8\">김항공</Col><Col id=\"Column4\">가나다라</Col><Col id=\"Column9\">9999-12-31</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\">6</Col><Col id=\"Column2\">12345678</Col><Col id=\"Column3\">비정형 텍스트 입니다.</Col><Col id=\"Column5\"/><Col id=\"Column6\">20181025</Col><Col id=\"Column7\">10,000,000</Col><Col id=\"Column8\">김항공</Col><Col id=\"Column4\">가나다라</Col><Col id=\"Column9\">9999-12-31</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\">7</Col><Col id=\"Column2\">12345678</Col><Col id=\"Column3\">비정형 텍스트 입니다.</Col><Col id=\"Column5\"/><Col id=\"Column6\">20181025</Col><Col id=\"Column7\">10,000,000</Col><Col id=\"Column8\">김항공</Col><Col id=\"Column4\">가나다라</Col><Col id=\"Column9\">9999-12-31</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\">8</Col><Col id=\"Column2\">12345678</Col><Col id=\"Column3\">비정형 텍스트 입니다.</Col><Col id=\"Column5\"/><Col id=\"Column6\">20181025</Col><Col id=\"Column7\">10,000,000</Col><Col id=\"Column8\">김항공</Col><Col id=\"Column4\">가나다라</Col><Col id=\"Column9\">9999-12-31</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\">9</Col><Col id=\"Column2\">12345678</Col><Col id=\"Column3\">비정형 텍스트 입니다.</Col><Col id=\"Column5\"/><Col id=\"Column6\">20181025</Col><Col id=\"Column7\">10,000,000</Col><Col id=\"Column8\">김항공</Col><Col id=\"Column4\">가나다라</Col><Col id=\"Column9\">9999-12-31</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\">10</Col><Col id=\"Column2\">12345678</Col><Col id=\"Column3\">비정형 텍스트 입니다.</Col><Col id=\"Column5\"/><Col id=\"Column6\">20181025</Col><Col id=\"Column7\">10,000,000</Col><Col id=\"Column8\">김항공</Col><Col id=\"Column4\">가나다라</Col><Col id=\"Column9\">9999-12-31</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\">11</Col><Col id=\"Column2\">12345678</Col><Col id=\"Column3\">비정형 텍스트 입니다.</Col><Col id=\"Column5\"/><Col id=\"Column6\">20181025</Col><Col id=\"Column7\">10,000,000</Col><Col id=\"Column8\">김항공</Col><Col id=\"Column4\">가나다라</Col><Col id=\"Column9\">9999-12-31</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column1\">12</Col><Col id=\"Column2\">12345678</Col><Col id=\"Column3\">비정형 텍스트 입니다.</Col><Col id=\"Column4\">가나다라</Col><Col id=\"Column6\">20181025</Col><Col id=\"Column7\">10,000,000</Col><Col id=\"Column8\">김항공</Col><Col id=\"Column9\">9999-12-31</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column1\">13</Col><Col id=\"Column2\">12345678</Col><Col id=\"Column3\">비정형 텍스트 입니다.</Col><Col id=\"Column4\">가나다라</Col><Col id=\"Column6\">20181025</Col><Col id=\"Column7\">10,000,000</Col><Col id=\"Column8\">김항공</Col><Col id=\"Column9\">9999-12-31</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column1\">14</Col><Col id=\"Column2\">12345678</Col><Col id=\"Column3\">비정형 텍스트 입니다.</Col><Col id=\"Column4\">가나다라</Col><Col id=\"Column6\">20181025</Col><Col id=\"Column7\">10,000,000</Col><Col id=\"Column8\">김항공</Col><Col id=\"Column9\">9999-12-31</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column1\">15</Col><Col id=\"Column2\">12345678</Col><Col id=\"Column3\">비정형 텍스트 입니다.</Col><Col id=\"Column4\">가나다라</Col><Col id=\"Column6\">20181025</Col><Col id=\"Column7\">10,000,000</Col><Col id=\"Column8\">김항공</Col><Col id=\"Column9\">9999-12-31</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column1\">16</Col><Col id=\"Column2\">12345678</Col><Col id=\"Column3\">비정형 텍스트 입니다.</Col><Col id=\"Column4\">가나다라</Col><Col id=\"Column6\">20181025</Col><Col id=\"Column7\">10,000,000</Col><Col id=\"Column8\">김항공</Col><Col id=\"Column9\">9999-12-31</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column1\">17</Col><Col id=\"Column2\">12345678</Col><Col id=\"Column3\">비정형 텍스트 입니다.</Col><Col id=\"Column4\">가나다라</Col><Col id=\"Column6\">20181025</Col><Col id=\"Column7\">10,000,000</Col><Col id=\"Column8\">김항공</Col><Col id=\"Column9\">9999-12-31</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column2\">12345678</Col><Col id=\"Column3\">비정형 텍스트 입니다.</Col><Col id=\"Column1\">18</Col><Col id=\"Column4\">가나다라</Col><Col id=\"Column6\">20181025</Col><Col id=\"Column7\">10,000,000</Col><Col id=\"Column8\">김항공</Col><Col id=\"Column9\">9999-12-31</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column2\">12345678</Col><Col id=\"Column3\">비정형 텍스트 입니다.</Col><Col id=\"Column1\">19</Col><Col id=\"Column4\">가나다라</Col><Col id=\"Column6\">20181025</Col><Col id=\"Column7\">10,000,000</Col><Col id=\"Column8\">김항공</Col><Col id=\"Column9\">9999-12-31</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column2\">12345678</Col><Col id=\"Column3\">비정형 텍스트 입니다.</Col><Col id=\"Column1\">20</Col><Col id=\"Column4\">가나다라</Col><Col id=\"Column6\">20181025</Col><Col id=\"Column7\">10,000,000</Col><Col id=\"Column8\">김항공</Col><Col id=\"Column9\">9999-12-31</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column2\">12345678</Col><Col id=\"Column3\">비정형 텍스트 입니다.</Col><Col id=\"Column1\">21</Col><Col id=\"Column4\">가나다라</Col><Col id=\"Column6\">20181025</Col><Col id=\"Column7\">10,000,000</Col><Col id=\"Column8\">김항공</Col><Col id=\"Column9\">9999-12-31</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column2\">12345678</Col><Col id=\"Column3\">비정형 텍스트 입니다.</Col><Col id=\"Column1\">22</Col><Col id=\"Column4\">가나다라</Col><Col id=\"Column6\">20181025</Col><Col id=\"Column7\">10,000,000</Col><Col id=\"Column8\">김항공</Col><Col id=\"Column9\">9999-12-31</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column2\">12345678</Col><Col id=\"Column3\">비정형 텍스트 입니다.</Col><Col id=\"Column1\">23</Col><Col id=\"Column4\">가나다라</Col><Col id=\"Column6\">20181025</Col><Col id=\"Column7\">10,000,000</Col><Col id=\"Column8\">김항공</Col><Col id=\"Column9\">9999-12-31</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column2\">12345678</Col><Col id=\"Column3\">비정형 텍스트 입니다.</Col><Col id=\"Column1\">24</Col><Col id=\"Column4\">가나다라</Col><Col id=\"Column6\">20181025</Col><Col id=\"Column7\">10,000,000</Col><Col id=\"Column8\">김항공</Col><Col id=\"Column9\">9999-12-31</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column2\">12345678</Col><Col id=\"Column3\">비정형 텍스트 입니다.</Col><Col id=\"Column1\">25</Col><Col id=\"Column4\">가나다라</Col><Col id=\"Column6\">20181025</Col><Col id=\"Column7\">10,000,000</Col><Col id=\"Column8\">김항공</Col><Col id=\"Column9\">9999-12-31</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column1\">26</Col><Col id=\"Column2\">12345678</Col><Col id=\"Column3\">비정형 텍스트 입니다.</Col><Col id=\"Column4\">가나다라</Col><Col id=\"Column6\">20181025</Col><Col id=\"Column7\">10,000,000</Col><Col id=\"Column8\">김항공</Col><Col id=\"Column9\">9999-12-31</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column1\">27</Col><Col id=\"Column2\">12345678</Col><Col id=\"Column3\">비정형 텍스트 입니다.</Col><Col id=\"Column4\">가나다라</Col><Col id=\"Column6\">20181025</Col><Col id=\"Column7\">10,000,000</Col><Col id=\"Column8\">김항공</Col><Col id=\"Column9\">9999-12-31</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column1\">28</Col><Col id=\"Column2\">12345678</Col><Col id=\"Column3\">비정형 텍스트 입니다.</Col><Col id=\"Column4\">가나다라</Col><Col id=\"Column6\">20181025</Col><Col id=\"Column7\">10,000,000</Col><Col id=\"Column8\">김항공</Col><Col id=\"Column9\">9999-12-31</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column1\">29</Col><Col id=\"Column2\">12345678</Col><Col id=\"Column3\">비정형 텍스트 입니다.</Col><Col id=\"Column4\">가나다라</Col><Col id=\"Column6\">20181025</Col><Col id=\"Column7\">10,000,000</Col><Col id=\"Column8\">김항공</Col><Col id=\"Column9\">9999-12-31</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column1\">30</Col><Col id=\"Column2\">12345678</Col><Col id=\"Column3\">비정형 텍스트 입니다.</Col><Col id=\"Column4\">가나다라</Col><Col id=\"Column6\">20181025</Col><Col id=\"Column7\">10,000,000</Col><Col id=\"Column8\">김항공</Col><Col id=\"Column9\">9999-12-31</Col><Col id=\"Column10\">버튼</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmb00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">예</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">아니요</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_05","0","6","330","21",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("03_ListDetail02");
            obj.set_cssclass("sta_WF_Title01");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09","0","84","110","22",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("리스트 그리드");
            obj.set_cssclass("sta_WF_Title02");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","0","102","100","7",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("7");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("true");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","1500","105",null,"3","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("3");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Button("btn_00",null,"84","46","22","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","515","74","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("35");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("true");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","74","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("15");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("true");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","1500","74",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_00","0","109","997",null,null,"0",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_binddataset("ds_grd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"220\"/><Column size=\"110\"/><Column size=\"90\"/><Column size=\"89\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"Column0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"No.\"/><Cell col=\"2\" text=\"코드(Center)\"/><Cell col=\"3\" text=\"제복(Left)\"/><Cell col=\"4\" text=\"단위(Right)\"/><Cell col=\"5\" text=\"작성자(Center)\"/><Cell col=\"6\" text=\"작성일(Center)\"/><Cell col=\"7\" text=\"Button\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\" cssclass=\"pointL\"/><Cell col=\"4\" text=\"bind:Column7\" cssclass=\"pointR\"/><Cell col=\"5\" text=\"bind:Column8\"/><Cell col=\"6\" text=\"bind:Column9\"/><Cell col=\"7\" text=\"bind:Column10\" displaytype=\"buttoncontrol\" edittype=\"button\"/></Band><Band id=\"summary\"><Cell colspan=\"4\" text=\"합계\"/><Cell col=\"4\" text=\"1,234,567,890,000\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_00","1012","84","330","22",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("디테일 항목");
            obj.set_cssclass("sta_WF_Title03");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","1012","102","100","7",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("7");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","1012","74","100","17",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("17");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("stc_24","1012","109",null,"28","0",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_25","1012","109","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_02","1134","112","172","22",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_innerdataset("combo");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("stc_26","1012","136",null,"28","0",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_27","1012","136","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("가나다라마바");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01","1012","163",null,"28","0",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_02","1012","163","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("가나다라마");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_03","1012","190",null,"28","0",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_04","1012","190","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("가나다라마바");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_06","1012","217",null,"28","0",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_07","1012","217","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_08","1012","244",null,"28","0",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_10","1012","244","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("가나다");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_11","1012","271",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12","1012","271","120",null,null,"0",null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("가나");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_05","1134","193","172","22",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_value("가나다라");
            obj.set_text("가나다라");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_00","1134","139","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_value("20181025");
            this.addChild(obj.name, obj);

            obj = new Spin("spn_00","1134","166","172","22",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_value("100");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_00","1134","220","60","22",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("체크");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_00","1134","274","172",null,null,"3",null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_value("가나다라마바사\n가나다라마바사\n가나다라마바사\n가나다라마바사\n가나다라마바사");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_03","1134","247","172","22",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_direction("vertical");
            obj.set_innerdataset("ds_cmb00");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_text("예");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_01","1204","219","60","22",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("체크");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13","1308","109","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_DetailTi_P");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_00","1430","112","172","22",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_innerdataset("combo");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_cssclass("point");
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14","1308","136","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("가나다라마바");
            obj.set_cssclass("sta_WF_DetailTi_P");
            this.addChild(obj.name, obj);

            obj = new Static("stc_15","1308","163","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("가나다라마");
            obj.set_cssclass("sta_WF_DetailTi_P");
            this.addChild(obj.name, obj);

            obj = new Static("stc_16","1308","190","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("가나다라마바");
            obj.set_cssclass("sta_WF_DetailTi_P");
            this.addChild(obj.name, obj);

            obj = new Static("stc_17","1308","217","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_DetailTi_P");
            this.addChild(obj.name, obj);

            obj = new Static("stc_18","1308","244","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("가나다");
            obj.set_cssclass("sta_WF_DetailTi_P");
            this.addChild(obj.name, obj);

            obj = new Static("stc_19","1308","271","120",null,null,"0",null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("가나");
            obj.set_cssclass("sta_WF_DetailTi_P");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_00","1430","193","172","22",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_value("가나다라");
            obj.set_cssclass("point");
            obj.set_text("가나다라");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_01","1430","139","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_value("20181025");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Spin("spn_01","1430","166","172","22",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_cssclass("point");
            obj.set_value("100");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_02","1430","220","60","22",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("체크");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_01","1430","274","172",null,null,"3",null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_cssclass("point");
            obj.set_value("가나다라마바사\n가나다라마바사\n가나다라마바사\n가나다라마바사\n가나다라마바사");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_00","1430","247","172","22",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_direction("vertical");
            obj.set_innerdataset("ds_cmb00");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_cssclass("point");
            obj.set_text("예");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_03","1500","219","60","22",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("체크");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Button("btn_134",null,"3","45","22","0",null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btn_132",null,"3","45","22","btn_134:2",null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","998","252","15","135",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("15");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Button("btn_02",null,"84","89","22","btn_00:2",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("역할일관추가");
            this.addChild(obj.name, obj);

            obj = new Static("stc_38","stc_09:0","84","60","22",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("<b v=\'true\'><fc v=\'#ff3300\'>0</fc></b> 건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_TotalSta");
            this.addChild(obj.name, obj);

            obj = new Div("div_01","0","30",null,"44","0",null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_00","0","10","68","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("2");
            obj.set_text("조회라벨");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.div_01.addChild(obj.name, obj);

            obj = new Edit("edt_00","stc_00:10","10","70","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("0");
            obj.set_cssclass("point");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_01","148","10","68","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("1");
            obj.set_text("조회라벨");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.div_01.addChild(obj.name, obj);

            obj = new Combo("cbo_00","stc_01:10","10","100","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("3");
            obj.set_innerdataset("combo");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_02","326","10","68","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("4");
            obj.set_text("조회라벨");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.div_01.addChild(obj.name, obj);

            obj = new Edit("edt_01","stc_02:10","10","100","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("5");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_03","526","10","67","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("6");
            obj.set_text("조회라벨");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.div_01.addChild(obj.name, obj);

            obj = new Calendar("cal_00","stc_03:10","10","110","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("7");
            obj.set_value("20181025");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_01.addChild(obj.name, obj);

            obj = new Button("btn_38","edt_01:2","10","20","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_PopSrch");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_09","714","10","68","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("9");
            obj.set_text("조회구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.div_01.addChild(obj.name, obj);

            obj = new Radio("rdo_00","stc_09:10","10","150","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("10");
            obj.set_direction("vertical");
            obj.set_innerdataset("ds_cmb");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_text("현재기준");
            obj.set_value("1");
            obj.set_index("1");
            this.div_01.addChild(obj.name, obj);

            obj = new Button("btn_00",null,null,"55","22","10","9",null,null,null,null,this.div_01.form);
            obj.set_taborder("11");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.div_01.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1606,830,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("03_ListDetail02.xfdl", function() {

        this.Template_Sample01_onload = function(obj,e)
        {

        };

        this.div_main_ondragmove = function(obj,e)
        {
        	this.div_main.form.btn_split.set_top(e.clienty);
        	this.div_main.form.resetScroll();
        };

        this.div_main_btn_split_ondrag = function(obj,e)
        {
        	return true;
        };

        this.Static22_onclick = function(obj,e)
        {

        };

        this.stc_11_onclick = function(obj,e)
        {

        };

        this.Static12_onclick = function(obj,e)
        {

        };

        this.stc_00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Template_Sample01_onload,this);
            this.Static22.addEventHandler("onclick",this.Static22_onclick,this);
            this.stc_00.addEventHandler("onclick",this.stc_00_onclick,this);
            this.stc_11.addEventHandler("onclick",this.stc_11_onclick,this);
            this.Static12.addEventHandler("onclick",this.Static12_onclick,this);
        };
        this.loadIncludeScript("03_ListDetail02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
