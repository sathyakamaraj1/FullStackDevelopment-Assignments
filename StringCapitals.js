//Anonmyous function
let sampleStrings=["kamaraj","subathra","sriRAM","PUPPY","SATHYA"];
let titlecase=(function()
{
	let array2=[];
	for(let i in sampleStrings){
		array2[i]=sampleStrings[i].toLowerCase();
array2[i]=array2[i].charAt(0).toUpperCase()+ array2[i].slice(1);
}
console.log(array2);
});
titlecase();

//IIFE
let sampleStrings=["kamaraj","subathra","sriRAM","PUPPY","SATHYA"];
(function()
{
	let array2=[];
	for(let i in sampleStrings){
		array2[i]=sampleStrings[i].toLowerCase();
array2[i]=array2[i].charAt(0).toUpperCase()+ array2[i].slice(1);
}
console.log(array2);
})();

//Arrow function
let sampleStrings=["kamaraj","subathra","sriRAM","PUPPY","SATHYA"];
let titlecase=()=>
{
	let array2=[];
	for(let i in sampleStrings){
		array2[i]=sampleStrings[i].toLowerCase();
array2[i]=array2[i].charAt(0).toUpperCase()+ array2[i].slice(1);
}
return array2;
};
console.log(titlecase());