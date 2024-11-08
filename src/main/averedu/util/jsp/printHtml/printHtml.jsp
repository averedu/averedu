<%
	String printObject = request.getParameter("printObject");
	printObject = printObject.replace("[style]", "<style>");
	printObject = printObject.replace("[/style]", "</style>");
%>
<html>
<head>
<title>BKR RIMS</title>
<script>
function doPirntMe(){
	window.print();
	window.close();
}
</script>
</head>
<body leftMargin="0" topMargin="0" onLoad="doPirntMe()">
<div style="width:100%" id="printObject"><%= printObject %></div>
</body>
</html>