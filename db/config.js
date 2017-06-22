var Loki = require('lokijs');
var db = new Loki('loki.json');
var vehicles = db.addCollection('vehicles');

vehicles.insert([
  {
    year: 2013,
    make: "Honda",
    model: "Accord LX"
  },
  {
    year: 2015,
    make: "GMC",
    model: "Sierra"
  },
  {
    year: 2013,
    make: "Honda",
    model: "Civic DX"
  },
  {
    year: 2010,
    make: "Chevy",
    model: "Cavalier"
  },
  {
    year: 2017,
    make: "Chevy",
    model: "Volt"
  },
])

module.exports = {
  vehicles: vehicles
};
