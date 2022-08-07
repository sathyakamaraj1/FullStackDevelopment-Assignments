//Anonymous function
let array1=[1,3,55,67,4];
let sum=(function()
	{
		let sum1=0;
		for(i of array1)
		{
            sum1+=i;
		}
		console.log(sum1);
	});
sum();
//IIFE
let array1=[1,3,55,67,4];
(function()
	{
		let sum1=0;
		for(i of array1)
		{
            sum1+=i;
		}
		console.log(sum1);
	})();

//Arrow functionlet 
array1=[1,3,55,67,4];
let sum=()=>
	{
		let sum1=0;
		for(i of array1)
		{
            sum1+=i;
		}
		return sum1;
	};
console.log(sum());
