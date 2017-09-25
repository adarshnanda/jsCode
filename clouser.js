const printArray = ()=>{
	const array = [];
	for(let i=0;i<3;i++){
		array.push(
			()=>console.log(i)
		);
	}
	return array;
};

const functionArray = printArray();

functionArray[1]();
functionArray[2]();
functionArray[0]();