let array = ['https://adarshnanda93-test.apigee.net/adarsh/getName?name=nanda','https://adarshnanda93-test.apigee.net/adarsh/getName?name=adarsh'];
function *apiCalls(){
	let length = array.length;
	for(let i=0;i<length;i++){
		yield makeAjaxCall(array[i], 'get');
	}
}

var iterator = apiCalls();

 function promise(param){
 	param.then((respJson)=>{
			console.log(respJson);
			var nextIterator = iterator.next();
			if(nextIterator.done===false){
				promise(nextIterator.value);
			}
		},()=>{
			console.log('error');
		});
 }
promise(iterator.next().value);


function makeAjaxCall(url, methodType){
   var promiseObj = new Promise(function(resolve, reject){
      var xhr = new XMLHttpRequest();
      xhr.open(methodType, url, true);
      setTimeout(function(){
      	xhr.send();
      }, 10000);
      xhr.onreadystatechange = function(){
      if (xhr.readyState === 4){
         if (xhr.status === 200){
            console.log("xhr done successfully");
            var resp = xhr.responseText;
            var respJson = JSON.parse(resp);
            resolve(respJson);
         } else {
            console.log("xhr failed");
            reject(xhr.status);
         }
      } else {
         console.log("xhr processing going on");
      }
   };
   console.log("request sent succesfully");
 });
   return promiseObj;
}