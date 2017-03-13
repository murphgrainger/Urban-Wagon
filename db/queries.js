const knex = require('./knex');

const bookshelf = require('../models/bookshelf_config');
const Game = require('../models/gameModel');
const Goal = require('../models/goalModel');
const Game_Goal = require('../models/game_goalModel');
const Hardship = require('../models/hardshipModel');
const Hardship_Status = require('../models/hardship_statusModel');
const Task = require('../models/taskModel');
const Task_Status = require('../models/task_statusModel');
const User = require('../models/userModel');
const Player = require('../models/playerModel');


module.exports = {
  getTask: function() {
    console.log('getting tasks');
    return Task.fetchAll()
      .then(task => {
        // console.log(task.related('goal').toJSON());
        console.log(task.toJSON());

        return task.toJSON();
      });

  },
  getGoal: function() {
    console.log('getting goals');
    return Goal.fetchAll()
      .then(goal => {
        // console.log(task.related('goal').toJSON());
        console.log(goal.toJSON());

        return goal.toJSON();
      });
  },

  getGoalsAndTasks: function() {
    console.log('getting goals & tasks');
    return Goal
      .where({
        id: 1
      })
      .fetch({
        withRelated: ['task']
      })
      .then(goal => {
        console.log('got data!');
        console.log(goal.related('task').toJSON());
        console.log(goal.toJSON());

        return goal.toJSON();
      }).catch(err => {
        res.json(err)
      })

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
