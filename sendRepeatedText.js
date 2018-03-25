function whatsAppText(text){
	let textbox = document.getElementsByClassName("_2S1VP copyable-text selectable-text")[0];
	textbox.textContent = text;
	textbox.dispatchEvent(new Event('input',{bubbles:true}));
	document.getElementsByClassName("_2lkdt")[0].click();
}


function sendRepeatedText(content, numberofTimes){
	for(let i=0;i<numberofTimes;i++){
		whatsAppText(content);
	}
};
