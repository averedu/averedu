/**
*  컨설팅 표준화 작업
*  @FileName 	Comp.js 
*  @Creator 	soojeong
*  @CreateDate 	2017.03.08
*  @Desction   		
************** 소스 수정 이력 ***********************************************
*  date          		Modifier                Description
*******************************************************************************
*  2017.03.08     	soojeong 	           최초 생성 
*******************************************************************************
*/

var pForm = nexacro.Form.prototype;

/**
 * @class Div를 기준으로 Header/Body 의 쌍이 접고 펼치는 처리를 하는 공통함수
 * @param {Object} objList - 아코디언처리할 대상 Object의 목록으로 JSON Object의 형식으로 Header : Body의 형식으로 작성한다.
 * @param {Boolean or Integer} openMode - 아코디언 초기 설정값으로 true: 전체 보여주기, false: 전체 숨기기, index: 해당항목만 펼쳐준다.
 * @return N/A
 */
pForm.gfnSetAccordion = function(objList, openMode)
{
    var targetlist = new Array();

    for(var objName in objList)
    {
		var targetobj = eval("this."+objName);

        // 대상아코디언이 있으면
        if( !this.gfnIsNull(objList[objName]) )
        {
            // Div Object일경우
            if( objList[objName].valueOf() == "[object Div]" )
            {
                targetobj.accordionbody = objList[objName];
            }
            // String으로 넘어온경우
            else
            {
                targetobj.accordionbody = eval("this."+objList[objName]);
            }

            targetobj.accordionbody.orgheight = targetobj.accordionbody.height;
        }

        targetlist.push(targetobj);
    }

    // 각각의 Object의 목록에 대한 아코디언설정정보를 설정한다.
    var firstbtnobj;
    for(var i=0;i<targetlist.length;i++)
    {
        // 어코디언 body 부분이 없는것은 무조건 보여준다.
        if( this.gfnIsNull(targetlist[i].accordionbody) )
        {
            targetlist[i].accordionopenstatus = true;
        }

        var headobjects = targetlist[i].form.components;
        for(var j=0;j<headobjects.length;j++)
        {
            // 아코디언 Close/Open 처리 버튼 검색 및 버튼에 필요한 아코디언 및 상태를 설정한다.
            if( headobjects[j].valueOf() == "[object Button]" && headobjects[j].cssclass.indexOf("btn_WF_Acc") != -1 )
            {
                // 아코디언 이벤트 처리핸들
                headobjects[j].addEventHandler("onclick", this._gfnHandleAccordionButtonClick, this);
                headobjects[j].accordionlist = targetlist;
                headobjects[j].accordionhead = targetlist[i];
                //headobjects[j].setFocus(false);

                if( this.gfnIsNull(firstbtnobj) )
                {
                    firstbtnobj = headobjects[j];
                }

                if( this.gfnIsBoolean(openMode))
                {
                    headobjects[j].accordionopenstatus = openMode;

                    if( openMode == true )
                    {
                        headobjects[j].set_cssclass("btn_WF_AccClose");
						headobjects[j].set_text("CLOSE");
                    }
                    else
                    {
                        headobjects[j].set_cssclass("btn_WF_AccOpen");
						headobjects[j].set_text("OPEN");
                    }

                    targetlist[i].accordionopenstatus = openMode;
                }
                else
                {
                    if( openMode == i )
                    {
                        headobjects[j].accordionopenstatus = true;
                        headobjects[j].set_cssclass("btn_WF_AccClose");
						headobjects[j].set_text("CLOSE");
                        targetlist[i].accordionopenstatus = true;
                    }
                    else
                    {
                        headobjects[j].accordionopenstatus = false;
                        headobjects[j].set_cssclass("btn_WF_AccOpen");
						headobjects[j].set_text("OPEN");
                        targetlist[i].accordionopenstatus = false;
                    }
                }                
                break;
            }
        }
    }

    // 현재의 상태에 맞게 리드로잉처리한다.
    this._gfnRedrawAccordion(firstbtnobj);
};


/**
 * @class 아코디언 처리시에 사용된는 공통 버튼의 이벤트핸들링 (사용자사용금지)
 * @param {Button}         아코디언 해더에 존재하는 버튼
 * @param {ClickEventInfo} 클릭이벤트
 * @return N/A
 */
pForm._gfnHandleAccordionButtonClick = function(obj,e)
{
	//trace(obj.name + " / " + obj.accordionhead.name ); 
    if( obj.accordionopenstatus == true )
    {
        obj.accordionopenstatus = false;
        obj.set_cssclass("btn_WF_AccOpen");
		obj.set_text("OPEN");
        obj.accordionhead.accordionopenstatus = false;
    }
    else
    {
        obj.accordionopenstatus = true;
        obj.set_cssclass("btn_WF_AccClose");
		obj.set_text("CLOSE");
        obj.accordionhead.accordionopenstatus = true;
    }

    // 현재의 상태에 맞게 리드로잉처리한다.
    this._gfnRedrawAccordion(obj);
};


/**
 * @class 아코디언의 상태값을 이용해서 리드로잉 처리한다.
 * @param {Button}         아코디언 해더에 존재하는 버튼
 * @return N/A
 */
pForm._gfnRedrawAccordion = function(obj)
{
	//trace("===== _gfnRedrawAccordion : " + obj.name);
    var heightoffset  = 0;
    var accordionlist = obj.accordionlist;

    var toppos = accordionlist[0].top;
    for(var i=0;i<accordionlist.length;i++)
    {
		//trace("===== _gfnRedrawAccordion accordionlist[i].name : " + accordionlist[i].name);
		
        accordionlist[i].set_top(toppos);

        // 보여주기 처리
        if( accordionlist[i].accordionopenstatus == true )
        {
            // 바디가 존재할때
            if( !this.gfnIsNull(accordionlist[i].accordionbody) )
            {
                accordionlist[i].accordionbody.set_top(parseInt(toppos)+parseInt(accordionlist[i].height));
                accordionlist[i].accordionbody.set_height(accordionlist[i].accordionbody.orgheight);
                accordionlist[i].accordionbody.set_visible(true);
				accordionlist[i].parent.resetScroll();
                toppos = parseInt(toppos)+parseInt(accordionlist[i].height)+parseInt(accordionlist[i].accordionbody.height)+parseInt(heightoffset);
            }
            else
            {
                toppos = parseInt(toppos)+parseInt(accordionlist[i].height)+parseInt(heightoffset);
            }
        }
        // 숨김처리
        else
        {
            if( !this.gfnIsNull(accordionlist[i].accordionbody) )
            {
                accordionlist[i].accordionbody.set_top(parseInt(toppos)+parseInt(accordionlist[i].height));
                accordionlist[i].accordionbody.set_height(0);
                accordionlist[i].accordionbody.set_visible(false);
                accordionlist[i].parent.resetScroll();
                toppos = parseInt(toppos)+parseInt(accordionlist[i].height)+parseInt(heightoffset);
            }
            else
            {
                toppos = parseInt(toppos)+parseInt(accordionlist[i].height)+parseInt(heightoffset);
            }
        }
    }
};