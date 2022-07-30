let resume=[
{
    name: "Sathya",
    emailid: "sathyakamarajrks@gmail.com",
    phonenum: 9876543210,
    course: "BE",
    location:{
        district: "Dindigul",
        state: "TamilNadu"
    },
    experience:3,
    
},
{
    name: "Sriram",
    emailid: "sriram@gmail.com",
    phonenum: 9878527410,
    course: "BTech",
    location:{
        district: "Dindigul",
        state: "TamilNadu"
    },
    experience:3,
}];
for(let i=0;i<resume.length;i++) //for loop
{
    console.log(`name:${resume[i].name}`);
    console.log(`email:${resume[i].emailid}`);
    console.log(`phonrno:${resume[i].phonenum}`);
}

for(let i in resume) //for in loop
{
    console.log(`course:${resume[i].course}`);
    console.log(`location:${resume[i].location.district}`);
}

for (let i of resume) //for of loop
{
    console.log(`location:${i.location.state}`);
    console.log(`experience:${i.experience}`);
}

Object.keys(resume).forEach(key => { //for each loop
    console.log(key , resume[key]) 
})