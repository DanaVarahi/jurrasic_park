const Park = function (name, ticket) {
    this.name = name;
    this.ticket = ticket;
    this.dinosaurs = [];
  }

  Park.prototype.addDino = function(dino){
    this.dinosaurs.push(dino)
  }

  Park.prototype.removeDino = function(dino){
     const indexOfDino = this.dinosaurs.indexOf(dino)
     this.dinosaurs.splice(indexOfDino, 1)
  }
  Park.prototype.findMostPopularDino = function(){
     const dinosaurs = this.dinosaurs
     let popular = dinosaurs[0]

     for (let dinosaur of dinosaurs){
         
        if (dinosaur.guestsAttractedPerDay > popular.guestsAttractedPerDay)
        popular = dinosaur
     }

     return popular.species
     
  }

  Park.prototype.findAllOfSpecies = function(species){
    const dinosaurs = this.dinosaurs
    allOfThisSpecies = []

    for (let dinosaur of dinosaurs){
        if(dinosaur.species === species){
            allOfThisSpecies.push(dinosaur)
        }
    }

    return allOfThisSpecies.length
  }

  Park.prototype.visitorsPerDay = function(){
    const dinosaurs = this.dinosaurs
    dailyVisitors = 0

      for (let dinosaur of dinosaurs){
          dailyVisitors += dinosaur.guestsAttractedPerDay
          
      }
      return dailyVisitors

  }

  Park.prototype.visitorsPerYear = function(){
    return this.visitorsPerDay() * 365
  }

  Park.prototype.totalRevenuePerYear = function(){
      const revenue = this.visitorsPerYear() * this.ticket
      return revenue
  }
  module.exports = Park;