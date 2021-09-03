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

function SetSettingsText(ordervalue, takeprofit, stoploss, nborder){
	document.getElementById('settingstext').innerHTML = "Order value: " + ordervalue + "     |     Take Profit: " + takeprofit + "     |     Stop Loss: " + stoploss + "     |     Orders per day: " + nborder;
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

function toggledisplay(elementID)
    {
    var x = document.getElementById(elementID);
        if (x.style.display === "none") {
        x.style.display = "inherit";
    } else {
        x.style.display = "none";
  }
    }


function checkDisplay(id){
	if(document.getElementById(id).style.display == 'inherit'){
		document.getElementById(id).style.display = 'none';
		document.getElementById('settingsID').style.display = 'inherit'
	}
}

function GetInputValue(id){
	var x = document.getElementById(id).value
	return x;
}

function SetInputValue(id, value){
	document.getElementById(id).value = value;
}

function SetChecksymbol(id, delay, msg, symb){
	document.getElementById(id).textContent = symb;
	setTimeout(function(){ document.getElementById(id).textContent = msg; }, delay);
	
}

function SetSymbol(id){
	var e = document.getElementById(id);
	var strUser = e.value;
	return strUser;
}
