exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM task; ALTER SEQUENCE task_id_seq RESTART WITH 1;')
    .then(function() {
      const task = [{
        title: 'Get Business Card',
        description: 'Go talk to someone you have not before and bring back a business card to the group.',
        allotted_time: 10,
        difficulty: 2,
        goal_id: 1
      }, {
        title: 'Cheers with a Stranger',
        description: 'Go find a stranger to cheers with.  Bonus points for a champagne toast, selfie, or group toast with strangers.',
        allotted_time: 5,
        difficulty: 2,
        goal_id: 2
      }, {
        title: 'Dog or Cheetos',
        description: 'Ask a stranger: Would you rather smell dog breath every morning when you wake up, or have cheetos on your fingers every day between 2 and 5?',
        allotted_time: 7,
        difficulty: 2,
        goal_id: 3
      }, {
        title: 'Wink',
        description: 'Wink at someone looking at you.  Bonus points for the double wink to the same person.',
        allotted_time: 9,
        difficulty: 1,
        goal_id: 4
      }];
      return knex('task').insert(task);
    });
};
