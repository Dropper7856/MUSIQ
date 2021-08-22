function onMyFrameLoad(source) {
	document.getElementById("divpanel").style.display = "none";

}

function timeFunction() {
	setTimeout(function () {
		document.getElementById("divpanel").style.display = "none";
		document.getElementById("FormDivId").style.display = "block";
	}, 500);
}

function ToggleStartStop() {
   var background_tr = document.getElementById('background');
   background_tr.classList.toggle('background_Started');
   const btn = document.getElementById("btnstart");
   if(btn.innerText === "START"){
        btn.innerText = "STOP";
        btn.classList.remove('startcolor');
        btn.classList.add('stopcolor');
    }else{
        btn.innerText= "START";
        btn.classList.remove('stopcolor');
        btn.classList.add('startcolor');
    }
}

function SetSettingsText(ordervalue, takeprofit, stoploss){
	document.getElementById('settingstext').innerHTML = "Order value: " + ordervalue + "     |     Take Profit: " + takeprofit + "     |     Stop Loss: " + stoploss;
}

function HideSettingsMenu(){
	if(document.getElementById('settingsMenu').style.display === 'none'){
		document.getElementById('settingsMenu').style.display = 'block';
	}
	else{
		document.getElementById('settingsMenu').style.display = 'none';
	}
}

function SetBool(id, bool){
if(bool === "true"){
	document.getElementById(id).checked = true;
}
else{
	document.getElementById(id).checked = false;
}
}

function GetTrend(){
	var elmnt = document.getElementsByClassName("speedometerSignal-DPgs-R4s").innerText;
	console.log(elmnt);
}