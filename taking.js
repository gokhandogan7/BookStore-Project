fetch("http://localhost:5000/api/auth/register", {
    method:'POST',
    headers:{
        'Content-Type': 'application/json'
    },
    body:JSON.stringify({
    "firstName": "Göagakhan",
    "lastName": "Doagaagan",
    "email": "gad@ggmail.com",
    "password": "3g1a20654"
})
}).then(res=>res.json()).then(console.log)
