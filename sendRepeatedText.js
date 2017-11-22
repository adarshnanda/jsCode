function whatsAppText(text){
	let textbox = document.getElementsByClassName("pluggable-input-body copyable-text selectable-text")[0];
	textbox.textContent = text;
	textbox.dispatchEvent(new Event('input',{bubbles:true}));
	document.querySelector("button.compose-btn-send").click();
}


function sendRepeatedText(content, numberofTimes){
	for(let i=0;i<numberofTimes;i++){
		whatsAppText(content);
	}
};


sendRepeatedText("hii", 200);