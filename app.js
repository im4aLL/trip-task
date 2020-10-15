const { Trip } = require('./trip.js');

const trip = new Trip([
    ['Cologne', 'Berlin'],
    ['Munich', 'Cologne'],
    ['Dhaka', 'Munich'],
]);

console.log(trip.getStartingPlace());