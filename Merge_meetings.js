var input = [{start_time:1,end_time:3},{start_time:2,end_time:4},{start_time:8,end_time:9},{start_time:5,end_time:8},{start_time:8,end_time:10}];
var output = [];
function startMerging(input){
	  var  temp1 = input[0];
	  var temp2 = input[1];
	  var temp3 = {};
	  if(temp1.start_time==temp2.start_time){
        temp3.start_time = temp1.start_time;
        temp3.end_time = temp1.end_time
        if(temp1.end_time<temp2.end_time){
          temp3.end_time = temp2.end_time;
        }
	  }else{
	   if(temp1.end_time<temp2.end_time){
		   if(temp1.end_time>=temp2.start_time){
			temp3.start_time = temp1.start_time;
			temp3.end_time = temp2.end_time;
			input.splice(0,2);
		 }else{
			 temp3 = temp1;
			 input.splice(0,1);
		 }
	   }else{
	     temp3 = temp1;
	     input.splice(1,1);
	   }
	  }
	  if(output.indexOf(temp3)==-1)
	  output.push(temp3);

	  if(input.indexOf(temp2)==input.lenght-1){
	    return output;
	  }
	  if(input.length>1){
	    startMerging(input);
	  }else{
		  if(input.length!=0){
		      if(output[output.length-1].end_time>=input[0].start_time){
		          output[output.length-1].end_time = input[0].end_time;
		      }else if(output.indexOf(input[0])==-1)
			output.push(input[0]);  
		  }
	    return output;
	  }
	}
function merge(input){
	input.sort(function(a, b){
	  return a.start_time -b.start_time;
	});
	if(input.length==1){
	  return input;
	}
	startMerging(input);
	return output;
};
merge(input); 