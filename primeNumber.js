//Anonymous function
//print prime numbers in an array
let array=[1,3,45,67,31,11];
let prime=(function(){
	for(i of array)
	{
       let flag=0;
		for(j=2;j<=i/2;j++){
		if(i%j==0)
		{
			flag=1;
		}
	}
	if(flag==0)
		{console.log(i);
		}
	}}
);
prime();


//IIEF
let array=[1,3,45,67,31,11];
(function(){
	for(i of array)
	{
       let flag=0;
		for(j=2;j<=i/2;j++){
		if(i%j==0)
		{
			flag=1;
		}
	}
	if(flag==0)
		{console.log(i);
		}
	}}
)();

//Arrow function

let array=[1,3,45,67,31,11];
let prime=()=>{
	let array2=[];
	for(i of array)
	{
       let flag=0;
		for(j=2;j<=i/2;j++){
		if(i%j==0)
		{
			flag=1;
		}
	}
	if(flag==0)
		{
			array2.push(i);
		}
	}
	return array2;
};
prime();