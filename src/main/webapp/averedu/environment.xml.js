if (nexacro.Environment)
{
    var env = nexacro._environment = new nexacro.Environment();
    env.on_init = function ()
    {
        this.set_themeid("theme::default");
        this.set_loadingimage("URL(\"imagerc::img_loading.gif\")");
    };
    env.on_initEvent = function ()
    {
        // add event handler

    };
    env.loadTypeDefinition = function ()
    {
        nexacro._setTypeDefinitionURL("typedefinition.xml");
        nexacro._addService("theme", "file", "./_resource_/_theme_/", "session", null, "", "0", "");
        nexacro._addService("initvalue", "file", "./_resource_/_initvalue_/", "session", null, "", "0", "");
        nexacro._addService("xcssrc", "file", "./_resource_/_xcss_/", "session", null, "", "", "");
        nexacro._addService("imagerc", "file", "./_resource_/_images_/", "session", null, "", "", "");
        nexacro._addService("font", "file", "./_resource_/_font_/", "session", null, "", "0", "0");
        nexacro._addService("Frame", "form", "./Frame/", "none", null, "", "0", "0");
        nexacro._addService("svcurl", "JSP", "http://localhost:2013", "none", null, "", "0", "0");
        nexacro._addService("ExtLibrary", "js", "./nexacro17lib/component/ExtLibrary/", "none", null, "", "0", "0");
        nexacro._addService("Img", "file", "./Img/", "none", null, "", "0", "0");
        nexacro._addService("com", "form", "./com/", "none", null, "", "0", "0");
        nexacro._addService("sys", "form", "./sys/", "none", null, "", "0", "0");
        nexacro._addService("sml", "form", "./sml/", "none", null, "", "0", "0");
        nexacro._addService("pop", "form", "./pop/", "none", null, "", "0", "0");
        nexacro._addService("file", "file", "./file/", "none", null, "", "0", "0");
        nexacro._addService("ComGuid", "form", "./ComGuid/", "none", null, "", "0", "0");
        nexacro._addService("TmpGuid", "form", "./TmpGuid/", "none", null, "", "0", "0");
        nexacro._addService("util", "js", "./util/", "none", null, "", "0", "0");
        nexacro._addService("tst", "form", "./tst/", "none", null, "", "0", "0");
        nexacro._addService("UY01", "form", "./UY/UY01/", "none", null, "", "0", "0");
        nexacro._addService("UI01", "form", "./UI/UI01/", "none", null, "", "0", "0");
        nexacro._addService("UD01", "form", "./UD/UD01/", "none", null, "", "0", "0");
        nexacro._addService("UC01", "form", "./UC/UC01/", "none", null, "", "0", "0");
        nexacro._addService("EN01", "form", "./EN/EN01/", "none", null, "", "0", "0");
        nexacro._addService("EN02", "form", "./EN/EN02/", "none", null, "", "0", "0");
        nexacro._addService("EN03", "form", "./EN/EN03/", "none", null, "", "0", "0");
        nexacro._addService("EN04", "form", "./EN/EN04/", "none", null, "", "0", "0");
        nexacro._addService("EN05", "form", "./EN/EN05/", "none", null, "", "0", "0");
        nexacro._addService("EN06", "form", "./EN/EN06/", "none", null, "", "0", "0");
        nexacro._addService("EN07", "form", "./EN/EN07/", "none", null, "", "0", "0");
        nexacro._addService("EN08", "form", "./EN/EN08/", "none", null, "", "0", "0");
        nexacro._addService("EN09", "form", "./EN/EN09/", "none", null, "", "0", "0");
        nexacro._addService("ET01", "form", "./ET/ET01/", "none", null, "", "0", "0");
        nexacro._addService("ET02", "form", "./ET/ET02/", "none", null, "", "0", "0");
        nexacro._addService("ET03", "form", "./ET/ET03/", "none", null, "", "0", "0");
        nexacro._addService("ET04", "form", "./ET/ET04/", "none", null, "", "0", "0");
        nexacro._addService("ET05", "form", "./ET/ET05/", "none", null, "", "0", "0");
        nexacro._addService("ET06", "form", "./ET/ET06/", "none", null, "", "0", "0");
        nexacro._addService("ER01", "form", "./ER/ER01/", "none", null, "", "0", "0");
        nexacro._addService("ER02", "form", "./ER/ER02/", "none", null, "", "0", "0");
        nexacro._addService("ES01", "form", "./ES/ES01/", "none", null, "", "0", "0");
        nexacro._addService("SC06", "form", "./SC/SC06/", "none", null, "", "0", "0");
        nexacro._addService("US01", "form", "./US/US01/", "none", null, "", "0", "0");
        nexacro._addService("US02", "form", "./US/US02/", "none", null, "", "0", "0");
        nexacro._addService("US03", "form", "./US/US03/", "none", null, "", "0", "0");
        nexacro._addService("US04", "form", "./US/US04/", "none", null, "", "0", "0");
        nexacro._addService("US05", "form", "./US/US05/", "none", null, "", "0", "0");
        nexacro._addService("US06", "form", "./US/US06/", "none", null, "", "0", "0");
        nexacro._addService("UL01", "form", "./UL/UL01/", "none", null, "", "0", "0");
        nexacro._addService("UL02", "form", "./UL/UL02/", "none", null, "", "0", "0");
        nexacro._addService("UL03", "form", "./UL/UL03/", "none", null, "", "0", "0");
        nexacro._addService("UL04", "form", "./UL/UL04/", "none", null, "", "0", "0");
        nexacro._addService("UL05", "form", "./UL/UL05/", "none", null, "", "0", "0");
        nexacro._addService("UL06", "form", "./UL/UL06/", "none", null, "", "0", "0");
        nexacro._addService("UL07", "form", "./UL/UL07/", "none", null, "", "0", "0");
        nexacro._addService("UR01", "form", "./UR/UR01/", "none", null, "", "0", "0");
        nexacro._addService("UR02", "form", "./UR/UR02/", "none", null, "", "0", "0");
        nexacro._addService("UR03", "form", "./UR/UR03/", "none", null, "", "0", "0");
        nexacro._addService("UR04", "form", "./UR/UR04/", "none", null, "", "0", "0");
        nexacro._addService("UR05", "form", "./UR/UR05/", "none", null, "", "0", "0");
        nexacro._addService("UR06", "form", "./UR/UR06/", "none", null, "", "0", "0");
        nexacro._addService("UE01", "form", "./UE/UE01/", "none", null, "", "0", "0");
        nexacro._addService("UE02", "form", "./UE/UE02/", "none", null, "", "0", "0");
        nexacro._addService("UE03", "form", "./UE/UE03/", "none", null, "", "0", "0");
        nexacro._addService("UE04", "form", "./UE/UE04/", "none", null, "", "0", "0");
        nexacro._addService("UE05", "form", "./UE/UE05/", "none", null, "", "0", "0");
        nexacro._addService("UE06", "form", "./UE/UE06/", "none", null, "", "0", "0");
        nexacro._addService("UM01", "form", "./UM/UM01/", "none", null, "", "0", "0");
        nexacro._addService("UM02", "form", "./UM/UM02/", "none", null, "", "0", "0");
        nexacro._addService("UM03", "form", "./UM/UM03/", "none", null, "", "0", "0");
        nexacro._addService("UM04", "form", "./UM/UM04/", "none", null, "", "0", "0");
        nexacro._addService("UM05", "form", "./UM/UM05/", "none", null, "", "0", "0");
        nexacro._addService("UP01", "form", "./UP/UP01/", "none", null, "", "0", "0");
        nexacro._addService("UP02", "form", "./UP/UP02/", "none", null, "", "0", "0");
        nexacro._addService("UP03", "form", "./UP/UP03/", "none", null, "", "0", "0");
        nexacro._addService("UP04", "form", "./UP/UP04/", "none", null, "", "0", "0");
        nexacro._addService("UP05", "form", "./UP/UP05/", "none", null, "", "0", "0");
        nexacro._addService("UP06", "form", "./UP/UP06/", "none", null, "", "0", "0");
        nexacro._addService("UA01", "form", "./UA/UA01/", "none", null, "", "0", "0");
        nexacro._addService("UA02", "form", "./UA/UA02/", "none", null, "", "0", "0");
        nexacro._addService("UA03", "form", "./UA/UA03/", "none", null, "", "0", "0");
        nexacro._addService("UA06", "form", "./UA/UA06/", "none", null, "", "0", "0");
        nexacro._addService("UA04", "form", "./UA/UA04/", "none", null, "", "0", "0");
        nexacro._addService("UA05", "form", "./UA/UA05/", "none", null, "", "0", "0");
        nexacro._addService("AM01", "form", "./AM/AM01/", "none", null, "", "0", "0");
        nexacro._addService("AM02", "form", "./AM/AM02/", "none", null, "", "0", "0");
        nexacro._addService("AM03", "form", "./AM/AM03/", "none", null, "", "0", "0");
        nexacro._addService("AM06", "form", "./AM/AM06/", "none", null, "", "0", "0");
        nexacro._addService("AM07", "form", "./AM/AM07/", "none", null, "", "0", "0");
        nexacro._addService("BH01", "form", "./BH/BH01/", "none", null, "", "0", "0");
        nexacro._addService("BH02", "form", "./BH/BH02/", "none", null, "", "0", "0");
        nexacro._addService("BH03", "form", "./BH/BH03/", "none", null, "", "0", "0");
        nexacro._addService("BH04", "form", "./BH/BH04/", "none", null, "", "0", "0");
        nexacro._addService("BH05", "form", "./BH/BH05/", "none", null, "", "0", "0");
    	nexacro._component_uri = (nexacro._arg_compurl ? nexacro._arg_compurl : "./nexacro17lib/component/");
    	nexacro._theme_uri = "./_resource_/_theme_/";
    	// load components
        var registerclass = [
        		{"id":"Button", "classname":"nexacro.Button", "type":"JavaScript"},
        		{"id":"Combo", "classname":"nexacro.Combo", "type":"JavaScript"},
        		{"id":"Edit", "classname":"nexacro.Edit", "type":"JavaScript"},
        		{"id":"MaskEdit", "classname":"nexacro.MaskEdit", "type":"JavaScript"},
        		{"id":"TextArea", "classname":"nexacro.TextArea", "type":"JavaScript"},
        		{"id":"Static", "classname":"nexacro.Static", "type":"JavaScript"},
        		{"id":"Div", "classname":"nexacro.Div", "type":"JavaScript"},
        		{"id":"PopupDiv", "classname":"nexacro.PopupDiv", "type":"JavaScript"},
        		{"id":"Radio", "classname":"nexacro.Radio", "type":"JavaScript"},
        		{"id":"CheckBox", "classname":"nexacro.CheckBox", "type":"JavaScript"},
        		{"id":"ListBox", "classname":"nexacro.ListBox", "type":"JavaScript"},
        		{"id":"Grid", "classname":"nexacro.Grid", "type":"JavaScript"},
        		{"id":"Spin", "classname":"nexacro.Spin", "type":"JavaScript"},
        		{"id":"Menu", "classname":"nexacro.Menu", "type":"JavaScript"},
        		{"id":"PopupMenu", "classname":"nexacro.PopupMenu", "type":"JavaScript"},
        		{"id":"Tab", "classname":"nexacro.Tab", "type":"JavaScript"},
        		{"id":"GroupBox", "classname":"nexacro.GroupBox", "type":"JavaScript"},
        		{"id":"Calendar", "classname":"nexacro.Calendar", "type":"JavaScript"},
        		{"id":"ImageViewer", "classname":"nexacro.ImageViewer", "type":"JavaScript"},
        		{"id":"ProgressBar", "classname":"nexacro.ProgressBar", "type":"JavaScript"},
        		{"id":"Plugin", "classname":"nexacro.Plugin", "type":"JavaScript"},
        		{"id":"Dataset", "classname":"nexacro.NormalDataset", "type":"JavaScript"},
        		{"id":"FileDownload", "classname":"nexacro.FileDownload", "type":"JavaScript"},
        		{"id":"FileUpload", "classname":"nexacro.FileUpload", "type":"JavaScript"},
        		{"id":"WebBrowser", "classname":"nexacro.WebBrowser", "type":"JavaScript"},
        		{"id":"ExcelExportObject", "classname":"nexacro.ExcelExportObject", "type":"JavaScript"},
        		{"id":"ExcelImportObject", "classname":"nexacro.ExcelImportObject", "type":"JavaScript"},
        		{"id":"VirtualFile", "classname":"nexacro.VirtualFile", "type":"JavaScript"},
        		{"id":"NxPivot", "classname":"nexacro.NxPivot", "type":"JavaScript"}
        ];
    	nexacro._addClasses(registerclass);
    };
    env.on_loadVariables = function ()
    {
        // Variables

        // Cookies

        // HTTP Header

    };
	env.on_loadDeviceAdaptors = function ()
	{
        // load device adatpor

	};
    // User Script

					
    env = null;
}
