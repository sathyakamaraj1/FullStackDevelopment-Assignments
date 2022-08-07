//Anonymous function
//find the median of the two sorted array.
let array1=[2,9,7,9,45];
let array2=[1,3,4,10];
let array3=[];
for (i of array1)
{
	array3.push(i);
}
for (i of array2)
{
	array3.push(i);
}
array3.sort(function(a, b){return a-b});
console.log(array3);
let median=(function()
{
let m=0;
let length=array3.length;
if(length%2==0)
{

	let pos=length/2;
m=(array3[pos]+array3[pos-1])/2;
}
else
{
			let pos=Math.floor(length/2);
 m=array3[pos];
}
console.log(m);
});
median();

//IIFE

let array1=[2,9,7,9,45];
let array2=[1,3,4,10];
let array3=[];
for (i of array1)
{
	array3.push(i);
}
for (i of array2)
{
	array3.push(i);
}
array3.sort(function(a, b){return a-b});
console.log(array3);
(function()
{
let m=0;
let length=array3.length;
if(length%2==0)
{

	let pos=length/2;
m=(array3[pos]+array3[pos-1])/2;
}
else
{
			let pos=Math.floor(length/2);
 m=array3[pos];
}
console.log(m);
})();

