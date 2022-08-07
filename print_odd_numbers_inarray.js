//Print odd numbers in array
//Anonmous function

let array=[20,100,3,55,7,32];
let arr1=function()
{
	let array2=[];
	let count=0;
	for(i of array)
	{
		if(i%2!=0)
		{
			array2[count]=i;
			count++;
		}
	}
	return array2;
	};

let result=arr1();
console.log(result);

//IIFE 
let array=[20,100,3,55,7,32];
(function()
{
let array2=[];
	let count=0;
	for(i of array)
	{
		if(i%2!=0)
		{
			array2[count]=i;
			count++;
		}
	}
	console.log(array2);
})();

//Arrow Function
let array=[20,100,3,55,7,32];
let oddnum=	()=>{
	let array2=[];
	let count=0;
	for(i of array)
	{
		if(i%2!=0)
		{
			array2[count]=i;
			count++;
		}
	}
	return array2;
};
console.log(oddnum());
