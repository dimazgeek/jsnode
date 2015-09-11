

// assignment week 1 fizzbuzz
// dimaz ardhi
// javascript function iterate number 

window.onload = function(){ 
    
	var n = 100;
	
	for(var i =1; i<n; i++){
		
		if(i % 3 === 0 && i % 5 === 0)
		{
			console.log("fizzbuzz");
		
		}
		 else if(i % 3 ===0)
		{
			console.log("fizz");
		}
		else if(i % 5 ===0){
			console.log("buzz");
		}
		else {
			console.log(i)
		}
		
	}
	
                
};
