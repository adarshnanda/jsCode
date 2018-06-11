let whatsAppText = (text) => {
	let textbox = document.getElementsByClassName("_2S1VP copyable-text selectable-text")[0];
	textbox.textContent = text;
	textbox.dispatchEvent(new Event('input',{bubbles:true}));
	document.getElementsByClassName("_2lkdt")[0].click();
}


let sendRepeatedText = (content, numberofTimes) => {
	for(let i=0;i<numberofTimes;i++){
		whatsAppText(content);
	}
};
let getDetails = ()=> {
	let message = prompt("enter your message here");
	let numbers = null;
	if(message!=null&&message!=''){
		numbers = prompt("how many times do you want to send it");
	}
	if(message!=null&&message!=''&&numbers!=null&&numbers!=''){
		sendRepeatedText(message, numbers);
	}
}


function createButton(callBack){
	var button = document.createElement("button");
	button.innerHTML = "Send Repeated text";
	Object.assign(button.style,{
  		"line-height": "20px",
  		"font-weight": "bold",
  		"padding": "0 40px",
  		"background": "salmon",
  		"border": "none",
	});
	var body = document.getElementsByClassName("_2umId")[0];
	body.appendChild(button);
	button.addEventListener ("click", function() {
	  callBack();
	});
}

createButton(getDetails);



