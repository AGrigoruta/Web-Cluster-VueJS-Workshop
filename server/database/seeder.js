require('./index');
const mongoose = require('mongoose');
const { Placing } = require('../app/models');
const moment = require('moment'); // require


async function seedPlacing() {
  var seats = [];

  for (var x = 0; x < 70; x++) {
    const object = {
      id: x + 1,
      occupied: false,
      person: null
    }
    seats.push(object);
  }

  for (let index = 0; index < 365; index++) {
    const place = {
      date: moment().add(index, 'days'),
      seats: seats
    };
    await new Placing(place).save()
  }
  console.log("Seed Complete. Refresh Mongoose to see newly added data.")
  process.exit();
}

try {
  seedPlacing();
} catch (error) {
  console.log("Oopsie we made the following bubu:" + error)
}

