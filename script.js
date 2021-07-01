function GetTrend(){
	var iframe = document.getElementById("idframe");
	var elmnt = iframe.contentWindow.document.getElementsByClassName("speedometerSignal-DPgs-R4s").innerHTML;
	console.log(elmnt);
}