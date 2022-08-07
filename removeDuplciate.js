//Anonymous function
//Remove duplicates from an array
array1=[1,1,2,3,3,4,4,2,3,3,5,6,7,8,98,34,2,100,100,-1];
array1.sort(function(a,b){return a-b;});
console.log(array1);
let removeDuplicate=(function(){for(let i=0;i<array1.length;i++)
{
	for(j=i+1;j<array1.length;j++)
	{
		if(array1[i]==array1[j])
		{
			array1.splice(j,1);
			j=j-1;
				}
}
}
return array1;
});
console.log(removeDuplicate());

//IIFE
array1=[1,1,2,3,3,4,4,2,3,3,5,6,7,8,98,34,2,100,100,-1];
array1.sort(function(a,b){return a-b;});
console.log(array1);
(function(){for(let i=0;i<array1.length;i++)
{
	for(j=i+1;j<array1.length;j++)
	{
		if(array1[i]==array1[j])
		{
			array1.splice(j,1);
			j=j-1;
				}
}
}
return array1;
})();