var obj1={
    name:"Person1",
    age:5
};
var obj2={
age:5,
name:"Person1"
};
	let keyObj1 = Object.keys(obj1); 
    console.log(keyObj1);
	keyObj2 = Object.keys(obj2);
	 console.log(keyObj2);
	 
//To check the keys in the first json present in the second json
count=0;
obj1length=keyObj1.length;
for(i in keyObj1)
{
for(j in keyObj2)
{
if(keyObj1[i]==keyObj2[j])
{
count++;
}
}
}
if(count==obj1length)
{
console.log("Two objects are having same property");
}
else
console.log("Two objects are not having same property");
