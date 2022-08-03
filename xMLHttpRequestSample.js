const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://gorest.co.in/public/v2/users');
xhr.responseType = 'json';
xhr.send();
xhr.onload = () => {
    const user = xhr.response;
    for(let i of user)
{
    console.log(`${i.name}`);
    
}
}
