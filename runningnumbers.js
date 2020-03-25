function createElement(firstNumber,lastNumber){
	
	let box = document.createElement('div');
	
	box.classList.add('box');
	
	document.body.appendChild(box);
	
	   let object1 = {
	   firstNum: firstNumber,
	   lastNum: lastNumber
    }
	
	let interval = setInterval(function(){
		
		object1.firstNum++;
		
		if(object1.firstNum == object1.lastNum){
			
			clearInterval(interval);
			
		}
		
			box.innerHTML = object1.firstNum;
		
	}, 5)
	
	console.log(object1.firstNum);
	
}

createElement(1000,2000);


