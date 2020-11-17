const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park
  let dino1
  let dino2
  let dinosaurs
  beforeEach(function () {
    dino1 = new Dinosaur('Velociraptor', 'carnivore', 50)
    dino2 = new Dinosaur('Oviraptor', 'omnivore', 35)
    dino3 = new Dinosaur('Saltasaurus', 'herbivore', 40)
    dinosaurs = [dino1, dino2, dino3]
    park = new Park('Jurassic Park', 20)
  })

  it('should have a name', function(){
    assert.strictEqual(park.name ,'Jurassic Park')
  });

  it('should have a ticket price', function(){
    assert.strictEqual(park.ticket, 20)
  });

  it('should have a collection of dinosaurs', function(){
    park.dinosaurs = dinosaurs
    assert.strictEqual(park.dinosaurs.length, 3 )
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDino(dino1)
    assert.strictEqual(park.dinosaurs.length, 1)
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.dinosaurs = dinosaurs
    park.removeDino(dino1)
    assert.strictEqual(park.dinosaurs.length, 2)
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.dinosaurs = dinosaurs
    assert.strictEqual(park.findMostPopularDino(),'Velociraptor' )
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.dinosaurs = dinosaurs
    assert.strictEqual(park.findAllOfSpecies('Oviraptor'), 1) 
  });

  it('should be able to calculate the total number of visitors per day', function(){
    park.dinosaurs = dinosaurs
    assert.strictEqual(park.visitorsPerDay(), 125)
  });

  it('should be able to calculate the total number of visitors per year', function(){
    park.dinosaurs = dinosaurs
    assert.strictEqual(park.visitorsPerYear(), 45625 )
  });

  it('should be able to calculate total revenue for one year', function(){
    park.dinosaurs = dinosaurs
    assert.strictEqual(park.totalRevenuePerYear(), 912500 )
  });

});
