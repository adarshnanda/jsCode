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

getDetails();
