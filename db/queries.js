const knex = require('./knex');

const bookshelf = require('../models/bookshelf_config');
const Game = require('../models/gameModel').game;
const Goal = require('../models/goalModel');
const Game_Goal = require('../models/game_goalModel').game_goal;
const Hardship = require('../models/hardshipModel').hardship;
const Hardship_Status = require('../models/hardship_statusModel').hardship_status;
const Task = require('../models/taskModel');
const Task_Status = require('../models/task_statusModel').task_status;
const User = require('../models/userModel').user;
const Player = require('../models/playerModel').player;


module.exports = {
  getTask: function() {
    console.log('getting tasks');
    Task.fetchAll()
      .then(task => {
        // console.log(task.related('goal').toJSON());
        console.log(task.toJSON());

        return task.toJSON();
      });

  }
};


// postNewGame: function(body) {
//   return knex('game')
//     .insert({
//       date_started: body.date_started,
//       location: body.location,
//       player_count: body.player_count,
//       difficulty: body.difficulty,
//       progress: 0,
//     }, 'id')
//     .then((id) => {
//       console.log(id[0]);
//       return knex('player')
//         .insert({
//           trail_name: body.players.player_1,
//           game_id: id[0],
//         }, 'id');
//     })
// }
//
// postNewJob: function(body) {
//   return knex('location')
//     .insert({
//       name: body.name,
//       address: body.address,
//       lat: body.lat,
//       long: body.long,
//       phone_number: body.phone_number
//     }, 'id')
//     .then((fKey) => {
//       let fkey_id = fKey[0];
//       return knex('job')
//         .returning('id')
//         .insert({
//           date: body.date,
//           time: body.time,
//           rate: body.rate,
//           status: body.status,
//           start_time: body.start_time,
//           end_time: body.end_time,
//           location_id: fkey_id
//         }, '*')
//         .then((jobID) => {
//           return knex('user_job')
//             .insert({
//               requester_id: body.userID,
//               job_id: jobID[0].id
//             });
//         });
//     });
// },
