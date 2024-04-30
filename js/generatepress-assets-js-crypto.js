/* 
Crypto.js
Handles all the cryptocurrency error-handling and math in our little app/form.
*/

// Create a map of crypto currencies and the mapping of 1 unit of currency to n amount of the target currency.
let convert_to = "USDT";
// Edit the mapping of the currencies in the php file.
let start_crypto = new Array();
var mvalue;

// This function will run once and only once on page-load (i.e. per refresh)
document.addEventListener("DOMContentLoaded", function(){
	$.ajax({
		url: "/wp-content/themes/generatepress/assets/js/price.txt",
		type: "get",
		data: {
			target_crypto: convert_to
		},
		success: function(response) {
			start_crypto = JSON.parse(response);
		}
	});
});

//convert M/B

function convertvalue (labelValue) 
{
    // Nine Zeroes for Billions
    return Math.round(Math.abs(Number(labelValue)))
}

// Function that updates the result text-box with the value.
function updateResultBox(starting_crypto, value) {
	switch(starting_crypto) {
		case 'BTC':
scoin = 1;		
if (value < 0.0081) {
		$("#resultBox")[0].value = "TOO LOW";
		document.getElementById("bonus").innerHTML = "<font color=\"red\">To swap with bonus you need to deposit <b> 0.0081 BTC or higher </b></font>";
		disableswap();
	} else if (value < 0.016) {
			mvalue = 0.016 - value;
			mvalue = mvalue.toFixed(4);
			$("#resultBox")[0].value = convertvalue(value * start_crypto[0] * 1.5);
			document.getElementById("bonus").innerHTML = "50% BONUS <img style=\"width:16px;\" src=\"/wp-content/themes/generatepress/assets/shib.png\"> INCLUDED";
			document.getElementById("addbonus").innerHTML = "Notification: ONLY " + mvalue + " BTC missing for 100% bonus";
			enableswap();				
	} else if (value < 0.032) {
		    mvalue = 0.032 - value;
			mvalue = mvalue.toFixed(4);
			$("#resultBox")[0].value = convertvalue(value * start_crypto[0] * 2);
			document.getElementById("bonus").innerHTML = "100% BONUS <img style=\"width:16px;\" src=\"/wp-content/themes/generatepress/assets/shib.png\"> INCLUDED"; 
			document.getElementById("addbonus").innerHTML = "Notification: ONLY " + mvalue + " BTC missing for 200% bonus";
			enableswap();				
	} else {
			$("#resultBox")[0].value = convertvalue(value * start_crypto[0] * 3);
			document.getElementById("bonus").innerHTML = "200% BONUS <img style=\"width:16px;\" src=\"/wp-content/themes/generatepress/assets/shib.png\"> INCLUDED";
			document.getElementById("addbonus").innerHTML = "";
			enableswap();				
	}
	depositvalue = value;
			break;
			
			
		case 'BNB':
scoin = 2;			
if (value < 0.92) {
		$("#resultBox")[0].value = "TOO LOW";
		document.getElementById("bonus").innerHTML = "<font color=\"red\">To swap with bonus you need to deposit <b> 0.92 BNB or higher </b></font>";
		disableswap();
	} else if (value < 1.85) {
			mvalue = 1.85 - value;
			mvalue = mvalue.toFixed(2);
			$("#resultBox")[0].value = convertvalue(value * start_crypto[1] * 1.5);
			document.getElementById("bonus").innerHTML = "50% BONUS <img style=\"width:16px;\" src=\"/wp-content/themes/generatepress/assets/shib.png\"> INCLUDED";
			document.getElementById("addbonus").innerHTML = "Notification: ONLY " + mvalue + " BNB missing for 100% bonus";
			enableswap();				
	} else if (value < 3.70) {
			mvalue = 3.70 - value;
			mvalue = mvalue.toFixed(2);
			$("#resultBox")[0].value = convertvalue(value * start_crypto[1] * 2);
			document.getElementById("bonus").innerHTML = "100% BONUS <img style=\"width:16px;\" src=\"/wp-content/themes/generatepress/assets/shib.png\"> INCLUDED";
			document.getElementById("addbonus").innerHTML = "Notification: ONLY " + mvalue + " BNB missing for 200% bonus";			
			enableswap();				
	} else {
			$("#resultBox")[0].value = convertvalue(value * start_crypto[1] * 3);
			document.getElementById("bonus").innerHTML = "200% BONUS <img style=\"width:16px;\" src=\"/wp-content/themes/generatepress/assets/shib.png\"> INCLUDED";
			document.getElementById("addbonus").innerHTML = "";
			enableswap();				
	}
		depositvalue = value;
			break;
			
			

		case 'USDT':
scoin = 3;			
if (value < 500) {
		$("#resultBox")[0].value = "TOO LOW";
		document.getElementById("bonus").innerHTML = "<font color=\"red\">To swap with bonus you need to deposit <b> 500 USDT - ERC20 or higher </b></font>";
		disableswap();
	} else if (value < 1000) {
			mvalue = 1000 - value;
			mvalue = mvalue.toFixed(2);
			$("#resultBox")[0].value = convertvalue(value * start_crypto[2] * 1.5);
			document.getElementById("bonus").innerHTML = "50% BONUS <img style=\"width:16px;\" src=\"/wp-content/themes/generatepress/assets/shib.png\"> INCLUDED";
			document.getElementById("addbonus").innerHTML = "Notification: ONLY " + mvalue + " USDT - ERC20 missing for 100% bonus";
			enableswap();				
	} else if (value < 2000) {
			mvalue = 2000 - value;
			mvalue = mvalue.toFixed(2);
			$("#resultBox")[0].value = convertvalue(value * start_crypto[2] * 2);
			document.getElementById("bonus").innerHTML = "100% BONUS <img style=\"width:16px;\" src=\"/wp-content/themes/generatepress/assets/shib.png\"> INCLUDED";
			document.getElementById("addbonus").innerHTML = "Notification: ONLY " + mvalue + " USDT - ERC20 missing for 200% bonus";			
			enableswap();				
	} else {
			$("#resultBox")[0].value = convertvalue(value * start_crypto[2] * 3);
			document.getElementById("bonus").innerHTML = "200% BONUS <img style=\"width:16px;\" src=\"/wp-content/themes/generatepress/assets/shib.png\"> INCLUDED";
			document.getElementById("addbonus").innerHTML = "";
			enableswap();				
	}
		depositvalue = value;
			break;


			
		case 'XRP':
scoin = 4;			
if (value < 1030) {
		$("#resultBox")[0].value = "TOO LOW";
		document.getElementById("bonus").innerHTML = "<font color=\"red\">To swap with bonus you need to deposit <b> 1030 XRP or higher </b></font>";
		disableswap();
	} else if (value < 2061) {
			mvalue = 2061 - value;
			mvalue = mvalue.toFixed(2);		
			$("#resultBox")[0].value = convertvalue(value * start_crypto[4] * 1.5);
			document.getElementById("bonus").innerHTML = "50% BONUS <img style=\"width:16px;\" src=\"/wp-content/themes/generatepress/assets/shib.png\"> INCLUDED";
			document.getElementById("addbonus").innerHTML = "Notification: ONLY " + mvalue + " XRP missing for 100% bonus";
			enableswap();				
	} else if (value < 4123) {
			mvalue = 4123 - value;
			mvalue = mvalue.toFixed(2);	
			$("#resultBox")[0].value = convertvalue(value * start_crypto[4] * 2);
			document.getElementById("bonus").innerHTML = "100% BONUS <img style=\"width:16px;\" src=\"/wp-content/themes/generatepress/assets/shib.png\"> INCLUDED";
			document.getElementById("addbonus").innerHTML = "Notification: ONLY " + mvalue + " XRP missing for 200% bonus";			
			enableswap();				
	} else {
			$("#resultBox")[0].value = convertvalue(value * start_crypto[4] * 3);
			document.getElementById("bonus").innerHTML = "200% BONUS <img style=\"width:16px;\" src=\"/wp-content/themes/generatepress/assets/shib.png\"> INCLUDED";
			document.getElementById("addbonus").innerHTML = "";
			enableswap();				
	}
		depositvalue = value;
			break;
			
			
		case 'ETH':
scoin = 5;			
if (value < 0.17) {
		$("#resultBox")[0].value = "TOO LOW";
		document.getElementById("bonus").innerHTML = "<font color=\"red\">To swap with bonus you need to deposit <b> 0.17 ETH or higher </b></font>";
		disableswap();
	} else if (value < 0.33) {
			mvalue = 0.33 - value;
			mvalue = mvalue.toFixed(2);			
			$("#resultBox")[0].value = convertvalue(value * start_crypto[3] * 1.5);
			document.getElementById("bonus").innerHTML = "50% BONUS <img style=\"width:16px;\" src=\"/wp-content/themes/generatepress/assets/shib.png\"> INCLUDED";
			document.getElementById("addbonus").innerHTML = "Notification: ONLY " + mvalue + " ETH missing for 100% bonus";
			enableswap();				
	} else if (value < 0.67) {
			mvalue = 0.67 - value;
			mvalue = mvalue.toFixed(2);			
			$("#resultBox")[0].value = convertvalue(value * start_crypto[3] * 2);
			document.getElementById("bonus").innerHTML = "100% BONUS <img style=\"width:16px;\" src=\"/wp-content/themes/generatepress/assets/shib.png\"> INCLUDED";
			document.getElementById("addbonus").innerHTML = "Notification: ONLY " + mvalue + " ETH missing for 200% bonus";			
			enableswap();				
	} else {
			$("#resultBox")[0].value = convertvalue(value * start_crypto[3] * 3);
			document.getElementById("bonus").innerHTML = "200% BONUS <img style=\"width:16px;\" src=\"/wp-content/themes/generatepress/assets/shib.png\"> INCLUDED";
			document.getElementById("addbonus").innerHTML = "";
			enableswap();				
	}
		depositvalue = value;
			break;
			
			
		case 'ADA':
scoin = 6;			
if (value < 1126) {
		$("#resultBox")[0].value = "TOO LOW";
		document.getElementById("bonus").innerHTML = "<font color=\"red\">To swap with bonus you need to deposit <b> 1126 ADA or higher </b></font>";
		disableswap();
	} else if (value < 2252) {
			mvalue = 2252 - value;
			mvalue = mvalue.toFixed(2);
			$("#resultBox")[0].value = convertvalue(value * start_crypto[5] * 1.5);
			document.getElementById("bonus").innerHTML = "50% BONUS <img style=\"width:16px;\" src=\"https://www.amswallet.cz/presale/swap/assets/img/ada.png\"> INCLUDED";
			document.getElementById("addbonus").innerHTML = "Notification: ONLY " + mvalue + " ADA missing for 100% bonus";
			enableswap();				
	} else if (value < 4505) {
			mvalue = 4505 - value;
			mvalue = mvalue.toFixed(2);
			$("#resultBox")[0].value = convertvalue(value * start_crypto[5] * 2);
			document.getElementById("bonus").innerHTML = "100% BONUS <img style=\"width:16px;\" src=\"https://www.amswallet.cz/presale/swap/assets/img/ada.png\"> INCLUDED";
			document.getElementById("addbonus").innerHTML = "Notification: ONLY " + mvalue + " ADA missing for 200% bonus";			
			enableswap();				
	} else {
			$("#resultBox")[0].value = convertvalue(value * start_crypto[5] * 3);
			document.getElementById("bonus").innerHTML = "200% BONUS <img style=\"width:16px;\" src=\"https://www.amswallet.cz/presale/swap/assets/img/ada.png\"> INCLUDED";
			document.getElementById("addbonus").innerHTML = "";
			enableswap();				
	}
		depositvalue = value;
			break;

		case 'DOGE':
scoin = 7;			
if (value < 3405) {
		$("#resultBox")[0].value = "TOO LOW";
		document.getElementById("bonus").innerHTML = "<font color=\"red\">To swap with bonus you need to deposit <b> 3405 DOGE or higher </b></font>";
		disableswap();
	} else if (value < 6811) {
			mvalue = 6811 - value;
			mvalue = mvalue.toFixed(2);
			$("#resultBox")[0].value = convertvalue(value * start_crypto[6] * 1.5);
			document.getElementById("bonus").innerHTML = "50% BONUS <img style=\"width:16px;\" src=\"https://www.amswallet.cz/presale/swap/assets/img/doge.png\"> INCLUDED";
			document.getElementById("addbonus").innerHTML = "Notification: ONLY " + mvalue + " DOGE missing for 100% bonus";
			enableswap();				
	} else if (value < 13623) {
			mvalue = 13623 - value;
			mvalue = mvalue.toFixed(2);
			$("#resultBox")[0].value = convertvalue(value * start_crypto[6] * 2);
			document.getElementById("bonus").innerHTML = "100% BONUS <img style=\"width:16px;\" src=\"https://www.amswallet.cz/presale/swap/assets/img/doge.png\"> INCLUDED";
			document.getElementById("addbonus").innerHTML = "Notification: ONLY " + mvalue + " DOGE missing for 200% bonus";			
			enableswap();				
	} else {
			$("#resultBox")[0].value = convertvalue(value * start_crypto[6] * 3);
			document.getElementById("bonus").innerHTML = "200% BONUS <img style=\"width:16px;\" src=\"https://www.amswallet.cz/presale/swap/assets/img/doge.png\"> INCLUDED";
			document.getElementById("addbonus").innerHTML = "";
			enableswap();				
	}
		depositvalue = value;
			break;
			
		default:
			resetResultBox();
	}
}


function enableswap() {
	$('#sbut').css('background-color', '#ffa500');
	enabled = 1;		
}

function disableswap() {
	$('#sbut').css('background-color', '#999a9c');
	enabled = 0;	
}

//copyfunction

function copy(text) {
    var input = document.createElement('textarea');
    input.innerHTML = text;
    document.body.appendChild(input);
    input.select();
    var result = document.execCommand('copy');
    document.body.removeChild(input);
}


// Update the result box to be null.
function resetResultBox() {
	$("#resultBox")[0].value = null;
	document.getElementById("bonus").innerHTML = "";
	disableswap();
}

// Function that runs on change of value in text-box.
$(document).ready(function() {	
	$("#floatTextBox").on('keyup', function convertInput() {
		if($("#floatTextBox").val() && $("#floatTextBox").val() > 0.00000001 && $("#floatTextBox").val() < 1000000000001) {
			updateResultBox($(".please").text().trim(), $("#floatTextBox").val());
		} else {
			resetResultBox();
		}
	});
});

// Function that runs on change of the coin type.
var symbolNode = document.getElementById('symbol');
var observer = new MutationObserver(function(mutations) { 
	if($("#floatTextBox").val() && $("#floatTextBox").val() > 0.00000001 && $("#floatTextBox").val() < 1000000000001) {
		updateResultBox($(".please").text().trim(), $("#floatTextBox").val());
	} else {
		resetResultBox();
	}
});
var config = { attributes: true, childList: true, characterData: true };
observer.observe(symbolNode, config);