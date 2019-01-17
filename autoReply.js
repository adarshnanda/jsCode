var whatsAppText = (text) => {
    console.log("sent");
	let textbox = document.getElementsByClassName("_2S1VP copyable-text selectable-text")[0];
	textbox.textContent = text;
	textbox.dispatchEvent(new Event('input', {
		bubbles:true
		}));
	document.getElementsByClassName("_35EW6")[0].click();
}

var check = function () {
console.log("inside check");
var arr = document.getElementsByClassName('copyable-text');
var len = arr.length;
var elem = arr[len-2];
var parentElement;
var text;
if (elem.toString().indexOf("Image") !==-1) {
	parentElement = elem.parentElement.parentElement.parentElement.parentElement.attributes["data-pre-plain-text"];
	text = elem.alt;
} else {
	parentElement = elem.parentElement.parentElement.attributes["data-pre-plain-text"];
	text = elem.innerText;
}


if(parentElement.value.indexOf("Akankshya")!=-1) {
    whatsAppText(text);
}
}

var x = setInterval(check, 5000);
