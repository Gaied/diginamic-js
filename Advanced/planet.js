class Planet {
    constructor(name, population) {
      this.name = name;
      this.population = population;
    }

      get name() {
        return this.nom;
      }

      get population() {
        return this.popul;
      }

    static countPlanetPopulation(p) {

        p.reduce((i, p)=>{
            return i + p;
          });
        
      }
      
  }

  module.exports = Planet;
