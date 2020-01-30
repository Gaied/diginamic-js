const axios = require ('axios');

async function test(){
    let response = await axios.get("https://swapi.co/api/planets/");
    console.log(response.data);
    console.log(response.data.results);

    /*data.forEach(elements => {
        console.log(elements);
    });*/
   
}

test();
console.log("Welcome in planet star wars");

