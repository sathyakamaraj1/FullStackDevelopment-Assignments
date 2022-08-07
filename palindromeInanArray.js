//Return palindrome in an array
//Anonymous function
let array=[24,343,88,11,35,96,66,1];
let array2=[];
for(let i in array)
{
array2.push(array[i].toString().split("").reverse().join(""));
}
let palindrome=(function()
{
for(i in array2)
{
	if(array[i]==array2[i])
	{
		console.log(array[i]);
	}
}
});
palindrome();


//IIFE 
let array=[24,343,88,11,35,96,66,1];
let array2=[];
for(let i in array)
{
array2.push(array[i].toString().split("").reverse().join(""));
}
(function()
{
for(i in array2)
{
	if(array[i]==array2[i])
	{
		console.log(array[i]);
	}
}
})();

//Arrow function

let array=[24,343,88,11,35,96,66,1];
let array2=[];
let array3=[];
for(let i in array)
{
array2.push(array[i].toString().split("").reverse().join(""));
}
let palindrome=()=>
{
for(i in array2)
{
	if(array[i]==array2[i])
	{
		array3.push(array[i]);
	}
}
return array3;
};
palindrome();
