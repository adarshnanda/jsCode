var whatsAppText = (text) => {
	let textbox = document.getElementsByClassName("_13NKt copyable-text selectable-text")[1];
	textbox.textContent = text;
	textbox.dispatchEvent(new Event('input',{bubbles:true}));
	document.getElementsByClassName("_4sWnG")[0].click();
}


var sendRepeatedText = (content, numberofTimes) => {
	for(let i=0;i<numberofTimes;i++){
		whatsAppText(content);
	}
};
var getDetails = ()=> {
	let message = prompt("enter your message here");
	let numbers = null;
	if(message){
		numbers = prompt("how many times do you want to send it");
	}
	if(message &&numbers){
		sendRepeatedText(message, numbers);
	}
}


var createButton = (callBack)=>{
	let button = document.createElement("button");
	button.innerHTML = "Send Repeated text";
	Object.assign(button.style,{
  		"line-height": "20px",
  		"font-weight": "bold",
  		"padding": "0 40px",
  		"background": "salmon",
  		"border": "none",
	});
	let body = document.getElementsByClassName("_1G3Wr")[0];
	body.appendChild(button);
	button.addEventListener ("click", callBack);
}
createButton(getDetails);
