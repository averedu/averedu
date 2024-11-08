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
            this.set_titletext("그리드 Cell에 각종색상표현");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_sample1", this);
            obj._setContents("<ColumnInfo><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"COL1\" type=\"STRING\" size=\"256\"/><Column id=\"COL2\" type=\"STRING\" size=\"256\"/><Column id=\"COL3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TYPE\">1</Col><Col id=\"COL1\">글자색변경1</Col><Col id=\"COL3\">aaaaa</Col></Row><Row><Col id=\"TYPE\">0</Col><Col id=\"COL1\">글자색변경2</Col><Col id=\"COL3\">bbbbb</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sample2", this);
            obj._setContents("<ColumnInfo><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"COL1\" type=\"STRING\" size=\"256\"/><Column id=\"COL2\" type=\"STRING\" size=\"256\"/><Column id=\"COL3\" type=\"STRING\" size=\"256\"/><Column id=\"CSS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CSS\">grd_bgGreen</Col><Col id=\"TYPE\">222</Col></Row><Row><Col id=\"CSS\">grd_bgRed</Col><Col id=\"TYPE\">333</Col></Row><Row><Col id=\"CSS\">grd_bgBlue</Col><Col id=\"TYPE\">333</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sample3", this);
            obj._setContents("<ColumnInfo><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"COL1\" type=\"STRING\" size=\"256\"/><Column id=\"COL2\" type=\"STRING\" size=\"256\"/><Column id=\"COL3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TYPE\">&lt;b v=&apos;true&apos;&gt;point&lt;/b&gt;</Col></Row><Row><Col id=\"TYPE\">&lt;fc v=&apos;red&apos;&gt;Text&lt;/fc&gt;</Col></Row><Row><Col id=\"TYPE\">&lt;fc v=&apos;blue&apos;&gt;Text&lt;/fc&gt;</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_sample1","18","45","845","112",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_nodatatext("No Data");
            obj.set_binddataset("ds_sample1");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"TYPE\"/><Cell col=\"1\" text=\"COL1\"/><Cell col=\"2\" text=\"COL2\"/><Cell col=\"3\" text=\"COL3\"/></Band><Band id=\"body\"><Cell text=\"bind:TYPE\" cssclass=\"expr:TYPE == &apos;1&apos; ? &apos;grd_bgGreen&apos;:&apos;grd_bgBlue&apos;\" edittype=\"text\"/><Cell col=\"1\" text=\"bind:COL1\" cssclass=\"expr:TYPE == &apos;1&apos; ? &apos;grd_TxtRed&apos;:&apos;grd_TxtBlue&apos;\"/><Cell col=\"2\" text=\"bind:COL2\" cssclass=\"expr:TYPE == &apos;1&apos; ? &apos;grd_bgOrange&apos;:&apos;grd_bgRed&apos;\"/><Cell col=\"3\" text=\"bind:COL3\" cssclass=\"expr:TYPE == &apos;1&apos; ? &apos;grd_TxtGreen&apos;:&apos;grd_TxtPink&apos;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","18","15","392","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("1. 동적 변경이 필요할 경우 - expr 사용");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","18","173","392","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("2.1 쿼리사용 - css binding");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_sample2","18","203","845","122",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_nodatatext("No Data");
            obj.set_binddataset("ds_sample2");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"TYPE\"/><Cell col=\"1\" text=\"COL1\"/><Cell col=\"2\" text=\"COL2\"/><Cell col=\"3\" text=\"COL3\"/></Band><Band id=\"body\"><Cell text=\"bind:TYPE\" cssclass=\"bind:CSS\"/><Cell col=\"1\" text=\"bind:COL1\"/><Cell col=\"2\" text=\"bind:COL2\"/><Cell col=\"3\" text=\"bind:COL3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","18","331","392","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("2.2 쿼리 사용 - 쿼리에 태그사용");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_sample3","18","361","845","222",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_nodatatext("No Data");
            obj.set_binddataset("ds_sample3");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"TYPE\"/><Cell col=\"1\" text=\"COL1\"/><Cell col=\"2\" text=\"COL2\"/><Cell col=\"3\" text=\"COL3\"/></Band><Band id=\"body\"><Cell text=\"bind:TYPE\" displaytype=\"decoratetext\"/><Cell col=\"1\" text=\"bind:COL1\"/><Cell col=\"2\" text=\"bind:COL2\"/><Cell col=\"3\" text=\"bind:COL3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn1","825","13","38","23",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn2","825","175","38","23",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn3","825","333","38","23",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","878","45","392","115",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("동적일 변경의 경우 expr만 사용 가능\r\n그리드 cell 의 cssclass 에 expr 사용\r\nexpr:TYPE == \'1\' ? \'grid_colorRed\':\'grid_colorBlue\'\r\n");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","876","203","392","115",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("정적일 경우만 사용 가능\r\n쿼리에서부터 조건에 따른 cssclass값을 데이터셋 필드로 가져와서 \r\n그리드 cell 의 cssclass에 데이터셋 컬럼값을 바인딩");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","884","366","392","115",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("정적일 경우 사용 가능\r\n쿼리에 태그값을 사용 \r\n그리드 셀의 displaytype을 decoratetext 로 변경 후 사용\r\n사용가능한 태그는 넥사크로 도움말에서 displaytype 검색\r\n");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","880","440",null,null,"220","175",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Type Description Default Example \r\nfs 폰트크기(font size)를 지정 \"12\" <fs v=\'12\'>Text</fs> \r\nfc 폰트색상(font color)를 지정 \"#000000\" <fc v=\'red\'>Text</fc> \r\nff 폰트종류(font face)를 지정 \"굴림\" <ff v=\'Dotum\'>Text</ff> \r\nb 굵은(bold) 효과 지정 \"false\" <b v=\'true\'>Text</b> \r\ni 기울임(italic) 효과 지정 \"false\" <i v=\'true\'>Text</i> \r\nu 밑줄(under line) 효과 지정 \"false\" <u v=\'true\'>Text</u> \r\ns 취소선(strike) 효과 지정 \"false\" <s v=\'true\'>Text</s> \r\nl 링크(link) 효과 지정 value 에는 URL, 전화번호, 메일주소 중 하나를 설정할 수 있습니다. \r\nvalue 에 설정된 형태에 따라 알맞는 앱이 실행됩니다. \"false\" \r\n<l v=\'http://www.tobesoft.co.kr\'>Text</l> <l v=\'tel:010-1234-5678\'> 전화걸기 </l> \r\n<l v=\'mailto:manager@tobesoft.co.kr\'> 메일보내기 </l> \r\n");
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
        this.registerScript("SML027GridCellColrorCssclassExprM01.xfdl", function() {
        this.form_onload = function(obj,e)
        {
        	this.gfn_formOnload(obj,e);
        };

        this.btn1_onclick = function(obj,e)
        {
        	var strSvcId     = "search1";
        	var strSvcUrl    = "sample/search1";
        	var inData       = "";
        	var outData      = "ds_sample1=ds_sample1";
        	var strArg       = "";
        	var callBackFnc  = "fn_callback";

        	//생략가능
        	var isAsync   = true;                   // true:비동기, false:동기

        	this.gfn_transaction( 	strSvcId , 	    // transaction을 구분하기 위한 svc id값
        							strSvcUrl , 	// trabsaction을 요청할 주소
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        							callBackFnc, 	// transaction의 결과를 받을 Function 이름
        							isAsync);       // 통신(동기:false / 비동기:true). 생략하면 비동기통신. 비동기통신 권장.
        };

        this.btn2_onclick = function(obj,e)
        {
        	var strSvcId     = "search2";
        	var strSvcUrl    = "sample/search2";
        	var inData       = "";
        	var outData      = "ds_sample2=ds_sample2";
        	var strArg       = "";
        	var callBackFnc  = "fn_callback";

        	//생략가능
        	var isAsync   = true;                   // true:비동기, false:동기

        	this.gfn_transaction( 	strSvcId , 	    // transaction을 구분하기 위한 svc id값
        							strSvcUrl , 	// trabsaction을 요청할 주소
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        							callBackFnc, 	// transaction의 결과를 받을 Function 이름
        							isAsync);       // 통신(동기:false / 비동기:true). 생략하면 비동기통신. 비동기통신 권장.
        };

        this.btn3_onclick = function(obj,e)
        {
        	var strSvcId     = "search3";
        	var strSvcUrl    = "sample/search3";
        	var inData       = "";
        	var outData      = "ds_sample3=ds_sample3";
        	var strArg       = "";
        	var callBackFnc  = "fn_callback";

        	//생략가능
        	var isAsync   = true;                   // true:비동기, false:동기

        	this.gfn_transaction( 	strSvcId , 	    // transaction을 구분하기 위한 svc id값
        							strSvcUrl , 	// trabsaction을 요청할 주소
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        							callBackFnc, 	// transaction의 결과를 받을 Function 이름
        							isAsync);       // 통신(동기:false / 비동기:true). 생략하면 비동기통신. 비동기통신 권장.
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
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static01.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static02.addEventHandler("onclick",this.Static00_onclick,this);
            this.btn1.addEventHandler("onclick",this.btn1_onclick,this);
            this.btn2.addEventHandler("onclick",this.btn2_onclick,this);
            this.btn3.addEventHandler("onclick",this.btn3_onclick,this);
            this.Static03.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static04.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static05.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static06.addEventHandler("onclick",this.Static00_onclick,this);
        };
        this.loadIncludeScript("SML027GridCellColrorCssclassExprM01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
