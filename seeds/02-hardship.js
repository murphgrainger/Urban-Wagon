exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM hardship; ALTER SEQUENCE hardship_id_seq RESTART WITH 1;')
    .then(function() {
      const hardship = [{
        title: 'Drink Spill',
        description: 'Someone has spilled their drink on your right shoulder.  Please go wash out the stain by dabbing the area with water.',
        penalty_value: 1,
        allotted_time: 7,
        goal_id: 2
      }, {
        title: 'Awkward Silence',
        description: 'You are tongue tied! Must remain silent for 10 minutes without a single word!',
        penalty_value: 2,
        allotted_time: 10,
        goal_id: 1
      }, {
        title: 'Laugh Attack!',
        description: 'Laugh as loudly as you can next to the nearest person for 20 seconds straight.',
        penalty_value: 2,
        allotted_time: 1,
        goal_id: 3
      }, {
        title: 'Ex Alert!',
        description: 'Your ex just walked in! Proceed to the nearest dark corner and hide for 5 minutes.',
        penalty_value: 3,
        allotted_time: 9,
        goal_id: 4
      }];
      return knex('hardship').insert(hardship);
    });
};
