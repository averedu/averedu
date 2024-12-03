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
            this.set_titletext("주소 검색");
            if (Form == this.constructor)
            {
                this._setFormPosition(1,1);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_addr", this);
            obj.set_updatecontrol("false");
            obj._setContents("<ColumnInfo><Column id=\"zonecode\" type=\"STRING\" size=\"256\"/><Column id=\"address\" type=\"STRING\" size=\"256\"/><Column id=\"addressEnglish\" type=\"STRING\" size=\"256\"/><Column id=\"addressType\" type=\"STRING\" size=\"256\"/><Column id=\"userSelectedType\" type=\"STRING\" size=\"256\"/><Column id=\"userLanguageType\" type=\"STRING\" size=\"256\"/><Column id=\"roadAddress\" type=\"STRING\" size=\"256\"/><Column id=\"roadAddressEnglish\" type=\"STRING\" size=\"256\"/><Column id=\"jibunAddress\" type=\"STRING\" size=\"256\"/><Column id=\"jibunAddressEnglish\" type=\"STRING\" size=\"256\"/><Column id=\"autoRoadAddress\" type=\"STRING\" size=\"256\"/><Column id=\"autoRoadAddressEnglish\" type=\"STRING\" size=\"256\"/><Column id=\"autoJibunAddress\" type=\"STRING\" size=\"256\"/><Column id=\"autoJibunAddressEnglish\" type=\"STRING\" size=\"256\"/><Column id=\"buildingCode\" type=\"STRING\" size=\"256\"/><Column id=\"buildingName\" type=\"STRING\" size=\"256\"/><Column id=\"apartment\" type=\"STRING\" size=\"256\"/><Column id=\"sido\" type=\"STRING\" size=\"256\"/><Column id=\"sigungu\" type=\"STRING\" size=\"256\"/><Column id=\"sigunguCode\" type=\"STRING\" size=\"256\"/><Column id=\"roadnameCode\" type=\"STRING\" size=\"256\"/><Column id=\"bcode\" type=\"STRING\" size=\"256\"/><Column id=\"bname\" type=\"STRING\" size=\"256\"/><Column id=\"hname\" type=\"STRING\" size=\"256\"/><Column id=\"query\" type=\"STRING\" size=\"256\"/><Column id=\"postcode\" type=\"STRING\" size=\"256\"/><Column id=\"postcode1\" type=\"STRING\" size=\"256\"/><Column id=\"postcode2\" type=\"STRING\" size=\"256\"/><Column id=\"postcodeSeq\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_returnAddr", this);
            obj.set_updatecontrol("false");
            obj._setContents("<ColumnInfo><Column id=\"ZIP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS2\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new WebBrowser("brw_addr","0","0",null,null,"0","35",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabstop("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","0","16","60","22",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_Pop");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1,1,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("COMM000010P.xfdl", function() {
        /**
         * 01. 업무구분	: 공통
         * 02. 프로그램명	: 주소 검색 팝업
         * 03. 화면설명	:
         * 04. 작성일		: 2016.07.26
         * 05. 작성자		: jiback
         * 06. 수정이력	:
         **************************************************************************************************
         *     수정일        이  름    사유
         **************************************************************************************************
         *     2016-07-26     jiback    최초 작성
         **************************************************************************************************
         */

        //=================================================================================================
        //	▷ 공통 라이브러리 INCLUDE 영역 (필수)
        //=================================================================================================
        //include "js::CommonUtil.xjs";

        //=================================================================================================
        //	▷ Form Variables Definition
        //=================================================================================================


        //=================================================================================================
        //	▶ Form Event(화면 Load Event 처리)
        //=================================================================================================
        this.form_onload = function(obj,e)
        {
        	//웹브라우저 주소 셋팅
        	this.brw_addr.set_url(nexacro.getEnvironment().services["svcurl"].url + "averedu/util/jsp/address.jsp");

        };


        //=================================================================================================
        //	▷ Load 후 초기설정 및 Data Setting
        //=================================================================================================


        //=================================================================================================
        //	☞ Local Function(사용자 FUNCTION 영역)
        //=================================================================================================


        //=================================================================================================
        //	▶ Component Event(각 COMPONENT 별 EVENT 영역)
        //=================================================================================================




        //=================================================================================================
        //	♨ Callback Function (트랜잭션 처리 후 함수 ) (fn_callback 고정)
        //=================================================================================================
        this.brw_addr_onusernotify = function(obj,e)
        {
        	var nVal = e.userdata;

        	if(e.userdata != "CLOSE")//선택한 데이터가 있을시
        	{
        		if(nVal.indexOf("WD@") >= 0)
        		{
        			//선택된 주소값을 글로벌 리턴DS에 받아서 넘기고 팝업 종료한다.
        			//리턴 데이터셋 초기화
        			this.ds_addr.clearData();
        			var addRow = this.ds_addr.addRow();

        			//리턴 주소 정보 받기
        			var addrJson = e.userdata;
        			//앞에 prefix 제거
        			addrJson = this.gfn_replace(addrJson, "WD@", "");
        			//주소 정보 분해
        			var addrArr1 = addrJson.split("?");

        			for (var i = 0; i < addrArr1.length; i++)
        			{
        				var addrArr2 	= addrArr1[i].split(":");
        				var addrKey 	= addrArr2[0];
        				var addrValue 	= addrArr2[1];
        				//주소 데이터셋에 맞게 셋팅
        				this.ds_addr.setColumn(addRow,addrKey,addrValue);
        			}

        			//전송 할 데이터 셋팅
        			this.ds_returnAddr.clearData();
        			var addRowReturn = this.ds_returnAddr.addRow();
        			this.ds_returnAddr.setColumn(addRowReturn, "ADDRESS_TYPE", this.ds_addr.getColumn(addRow,"userSelectedType"));
        			this.ds_returnAddr.setColumn(addRowReturn, "ZIP_CODE", this.ds_addr.getColumn(addRow,"zonecode"));

        			if(this.ds_addr.getColumn(addRow,"userSelectedType") == "J")
        			{
        				this.ds_returnAddr.setColumn(addRowReturn, "ADDRESS", this.ds_addr.getColumn(addRow,"jibunAddress"));	//지번 주소
        				this.ds_returnAddr.setColumn(addRowReturn, "ADDRESS2", this.ds_addr.getColumn(addRow,"roadAddress"));	//도로명주소
        			} else
        			{
        				//도로명 주소
        				this.ds_returnAddr.setColumn(addRowReturn, "ADDRESS", this.ds_addr.getColumn(addRow,"roadAddress"));	//도로명주소
        				this.ds_returnAddr.setColumn(addRowReturn, "ADDRESS2", this.ds_addr.getColumn(addRow,"jibunAddress"));	//지번주소
        			}

        			//글로벌 데이터셋 셋팅
        			//파일 데이터셋 클리어
        			objApp.gds_PopRtn.clearData();
        			//글로벌 팝업 리턴 데이터셋에 셋팅
        			objApp.gds_PopRtn.copyData(this.ds_returnAddr);


        			//팝업 닫기
        			this.setTimer(1, 500);
        		}
        	}else if(e.userdata =="CLOSE") //데이터를 선택하지 않고 그냥 닫았을시
        	{
        		//팝업 닫기
        		this.setTimer(1, 500);

        	}
        };

        this.btnClose_onclick = function(obj,e)
        {
        	objApp.gds_PopRtn.clearData();
        	this.close();
        };


        this.brw_addr_onloadcompleted = function(obj,e)
        {
        	//로드가 성공하면 되는것
        };


        this.form_ontimer = function(obj,e)
        {
        	this.killTimer(1);
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ontimer",this.form_ontimer,this);
            this.brw_addr.addEventHandler("onloadcompleted",this.brw_addr_onloadcompleted,this);
            this.brw_addr.addEventHandler("onusernotify",this.brw_addr_onusernotify,this);
            this.btn_close.addEventHandler("onclick",this.btnClose_onclick,this);
        };
        this.loadIncludeScript("COMM000010P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
