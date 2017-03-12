exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM hardship; ALTER SEQUENCE hardship_id_seq RESTART WITH 1;')
    .then(function() {
      const hardship = [{
        title: 'Get Business Card',
        description: 'Go talk to someone you have not before and bring back a business card to the group.',
        type: 'professional',
        allotted_time: 10,
        difficulty: 2
      }, {
        title: 'Cheers with a Stranger',
        description: 'Go find a stranger to cheers with.  Bonus points for a champagne toast, selfie, or group toast with strangers.',
        type: 'drink',
        allotted_time: 5,
        difficulty: 2
      }, {
        title: 'Dog or Cheetos',
        description: 'Ask a stranger: Would you rather smell dog breath every morning when you wake up, or have cheetos on your fingers every day between 2 and 5?',
        type: 'funny',
        allotted_time: 7,
        difficulty: 2
      }, {
        title: 'Wink',
        description: 'Wink at someone looking at you.  Bonus points for the double wink to the same person.',
        type: 'flirt',
        allotted_time: 9,
        difficulty: 1
      }];
      return knex('hardship').insert(hardship);
    });
};
