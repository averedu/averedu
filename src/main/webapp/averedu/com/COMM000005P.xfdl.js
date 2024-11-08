(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("commMsgPop");
            this.set_titletext("공통메시지");
            this.set_background("#0068b7");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,300);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_image", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"imageId\" size=\"50\" type=\"STRING\"/><Column id=\"imageUrl\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"imageId\">Question</Col><Col id=\"imageUrl\">transparent URL(&apos;theme://images/ico_WF_Question.png&apos;)</Col></Row><Row><Col id=\"imageId\">Information</Col><Col id=\"imageUrl\">transparent URL(&apos;theme://images/ico_WF_Information.png&apos;)</Col></Row><Row><Col id=\"imageId\">Error</Col><Col id=\"imageUrl\">transparent URL(&apos;theme://images/ico_WF_Error.png&apos;)</Col></Row><Row><Col id=\"imageId\">Warning</Col><Col id=\"imageUrl\">transparent URL(&apos;theme://images/ico_WF_Alert.png&apos;)</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staFormSize","0","65",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_border("5px solid #0068b7");
            obj.set_text("");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtMsg","19","85","564",null,null,"73",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_font("bold 16pt/normal \"Helvetica\"");
            obj.set_border("0 none #808080ff ");
            obj.set_textAlign("center");
            obj.set_color("#222222ff");
            this.addChild(obj.name, obj);

            obj = new Button("btnYes","179",null,"114","45",null,"14",null,null,null,null,this);
            obj.set_taborder("1");
            obj.getSetter("position").set("absolute");
            obj.set_text("예");
            obj.set_visible("true");
            obj.set_font("bold 20pt/normal \"Helvetica\"");
            obj.set_color("#222222ff");
            this.addChild(obj.name, obj);

            obj = new Button("btnNo","308",null,"114","45",null,"14",null,null,null,null,this);
            obj.set_taborder("2");
            obj.getSetter("position").set("absolute");
            obj.set_text("아니오");
            obj.set_visible("true");
            obj.set_font("bold 20pt/normal \"Helvetica\"");
            obj.set_color("#222222ff");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","225","67",null,null,null,null,null,null,this);
            obj.set_text("Title");
            obj.set_taborder("3");
            obj.set_background("#0068b7");
            obj.set_color("#ffffff");
            obj.set_font("23 Helvetica");
            obj.set_padding("0px 0px 0px 80px");
            this.addChild(obj.name, obj);

            obj = new Static("staFront","10","75","578","163",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnOK","239",null,"114","45",null,"14",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("확인");
            obj.set_font("bold 20pt/normal \"Helvetica\"");
            obj.set_color("#222222ff");
            this.addChild(obj.name, obj);

            obj = new Static("stc_type","17","7","51","50",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_background("URL(\"theme://images/ico_WF_Alert.png\")");
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
        this.registerScript("COMM000005P.xfdl", function() {
        /************************************************************************************************
         * Program ID    : commMsgPop.xfdl
         * Program Name  : 모바일학사행정/공통/공통메시지
         * Author        : jiback
         * Created On    : 2015.11.26
         * 화면 설명    : 공통메시지
         * 관련 화면/서비스 :
         * 관련테이블   :
         * 수정이력     :

         ************************************************************************************************
         *     수정일        이  름    사유
         ************************************************************************************************
         *     2015-11-26      kjh       최초 작성
         ************************************************************************************************
         */

        /*  Message Template
         Alert, Confirm 형태의 메세지 창
         gfn_Msg를 사용해서 띄워야함

         gfn_msg 사용법 : gfn_msg = function (sPopId, sTitle, sDesc, sType, sCallback)
         - sPopId : Msg ID
         - sTitle : title에 표시할 내용 (OFFSIDE에서는 사용안함)
         - sDesc : 메세지 내용
         - sType : 메세지 타입
         OK : Alert(에러:Error:E/물음:Question:Q/알림:Information:I/경고:Warning:W)
         YES,NO : Confirm (에러:Error:E/물음:Question:Q/알림:Information:I/경고:Warning:W)
         - sCallback : 콜백함수명

         ex) gfn_msg("ALERT", "타이틀", "메세지내용", "OK", "");
         */

        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/


        /*======================================================================================
         Initialization Area: form 변수 선언 및 form 초기화.
        =======================================================================================*/



        /************************************************************************************************
         * FORM EVENT 영역
        ************************************************************************************************/

        /**
         * @Description : onload Event Handler
         * @param       : obj  ( Form                   )
         * @param       : e    ( nexacro.LoadEventInfo )
         * @return      : N/A
         */

        this.fn_onload = function (obj, e)
        {
        	var arrArg = this.getOwnerFrame().arrParam;
        	var sTitle = "";
        	if(this.gfn_isNull(this.gfn_trim(arrArg[0])))
        	{
        		sTitle = "Information";
        	}else
        	{
        		sTitle = this.gfn_trim(arrArg[0]);
        	}

        	this.staTitle.set_text(sTitle);  		// Title SET
        	this.txtMsg.set_value(arrArg[1]);   	// 메세지 SET

        	var fvNRow = this.ds_image.findRow("imageId", sTitle);
        	var fvImageUrl = this.ds_image.getColumn(fvNRow, "imageUrl" );

            // set default component
        	this.btnYes.set_visible(false);
        	this.btnNo .set_visible(false);
        	this.btnOK .set_visible(false);

        	var fvMessageType   = arrArg[2];

        	// set title type button
        	if ((fvMessageType == "YES,NO") )
        	{
        		this.btnYes.set_visible(true);
        		this.btnNo.set_visible(true);
        	}
        	else if ((fvMessageType == "OK"))
        	{
        		this.btnOK.set_visible(true);
        	}

            this.stc_type.set_background(fvImageUrl);
        }


        /************************************************************************************************
         * 사용자 정의 이벤트 영역
         ************************************************************************************************/

        /**
         * @Description : button on click ( button event logic  )
         * @param       : obj ( Button                   )
         * @param       : e   ( nexacro.ClickEventInfo )
         * @return      : N/A
         **/
        this.common_onclick = function (obj, e)
        {
        	switch (obj.name)
        	{
        		case "btnOK":
        			this.close();
        			break;

        		case "btnYes":
        			this.close(true);
        			break;

        		case "btnNo":
        			this.close(false);
        			break;

        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onload,this);
            this.btnYes.addEventHandler("onclick",this.common_onclick,this);
            this.btnNo.addEventHandler("onclick",this.common_onclick,this);
            this.btnOK.addEventHandler("onclick",this.common_onclick,this);
        };
        this.loadIncludeScript("COMM000005P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
