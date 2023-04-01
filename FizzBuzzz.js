function FizzBuzz(sum){
    let outputArr = []
	for (let i=1; i<=sum; i++)
	{
		if (i%3 == 0 && i%4 == 0)
			outputArr.push("FizzBuzz");
		else if ((i%3) == 0)
			outputArr.push("Fizz");			
		else if ((i%4) == 0)				
			outputArr.push("Buzz");			
		else 	
			outputArr.push(i);			
	}
	console.log(...outputArr)
}

function calculateSum(number){
    let sum = 0;
    while(number){
        sum += (number % 10);
        number = Math.floor(number/10);
    }
    return sum;
}

FizzBuzz(calculateSum(910081072))