const axios = require ('axios');
const Planet = require('./planet');

async function planet() {
    let api = 'https://swapi.co/api/planets/';
    let plan = [];
	while( api ) {
		await axios.get(api)
		.then(
			res => {
				res.data.results
				.forEach(p => { 
					let planet = new Planet( p );
					plan.push( planet );
				})
				api = res.data.next;
			})
	}
	plan.forEach(
		p => console.log(`Planete ${p.name} _ Population : ${p.population}`)
	);
	console.log( `Populaton totale ${Planet.countPlanetsPopulation(plan)}` );
}

planet();
console.log("Welcome in planets star wars.. ");

