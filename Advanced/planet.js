class Planet { 

	constructor( { name, population } ) {
		this.nom = name;
		this.pop = population;
  }
	get name() {
		return this.nom;
  }
	get population() {
		return this.pop;
  }
  
	static countPlanetsPopulation( planets ) {
		return planets.reduce(
			(i,p) => {
				let n = parseInt(p.population);
				return i + (n?n:1);
			},1);
	}
}
module.exports = Planet;