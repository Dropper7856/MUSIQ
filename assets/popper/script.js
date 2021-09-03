$('select[data-menu]').each(function() {

    let select = $(this),
        options = select.find('option'),
        menu = $('<div />').addClass('select-menu'),
        button = $('<div />').addClass('button'),
        list = $('<ul />'),
        arrow = $('<em />').prependTo(button);

    options.each(function(i) {
        let option = $(this);
        list.append($('<li />').text(option.text()));
    });

    menu.css('--t', select.find(':selected').index() * -41 + 'px');

    select.wrap(menu);

    button.append(list).insertAfter(select);

    list.clone().insertAfter(button);

});

$(document).on('click', '.select-menu', function(e) {

    let menu = $(this);

    if(!menu.hasClass('open')) {
        menu.addClass('open');
    }

});

$(document).on('click', '.select-menu > ul > li', function(e) {

    let li = $(this),
        menu = li.parent().parent(),
        select = menu.children('select'),
        selected = select.find('option:selected'),
        index = li.index();

    menu.css('--t', index * -41 + 'px');
    selected.attr('selected', false);
    select.find('option').eq(index).attr('selected', true);

    menu.addClass(index > selected.index() ? 'tilt-down' : 'tilt-up');

    setTimeout(() => {
        menu.removeClass('open tilt-up tilt-down');
    }, 500);

});

$(document).click(e => {
    e.stopPropagation();
    if($('.select-menu').has(e.target).length === 0) {
        $('.select-menu').removeClass('open');
    }
})

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
