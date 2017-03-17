exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM task; ALTER SEQUENCE task_id_seq RESTART WITH 1;')
    .then(function() {
      const task = [{
        title: 'Get Business Card',
        image: 'https://s3.amazonaws.com/digitaltrends-uploads-prod/2014/02/business-card.jpg',
        description: 'Go talk to someone you have not before and bring back a business card to the group.',
        allotted_time: 10,
        difficulty: 2,
        goal_id: 1
      }, {
        title: 'Cheers with a Stranger',
        image: 'http://chimneypark.com/wp-content/uploads/champagne-toast.jpg',
        description: 'Go find a stranger to cheers with.  Bonus points for a champagne toast, selfie, or group toast with strangers.',
        allotted_time: 5,
        difficulty: 2,
        goal_id: 2
      }, {
        title: 'Dog or Cheetos',
        image: 'https://img.wonderhowto.com/img/75/78/63494545470634/0/keep-your-fingers-clean-while-eating-cheetos-chocolate-chips-and-more.w1456.jpg',
        description: 'Ask a stranger: Would you rather smell dog breath every morning when you wake up, or have cheetos on your fingers every day between 2pm and 5pm?',
        allotted_time: 7,
        difficulty: 2,
        goal_id: 2
      }, {
        title: 'Find 3 People Who...',
        image: 'http://i2.cdn.cnn.com/cnnnext/dam/assets/150406130230-american-pie-lyrics-exlarge-169.jpeg',
        description: 'Know the opening lyrics to American Pie by Don McLean',
        allotted_time: 7,
        difficulty: 2,
        goal_id: 2
      }, {
        title: 'T-Pain',
        image: 'https://static2.businessinsider.com/image/4c936cdc7f8b9a9d30030300/hulus-10-most-watched-videos-ever-snl-and-family-guy-dominate.jpg',
        description: 'Ask someone if you can "Buy You a Drank" in a T-Pain voice',
        allotted_time: 7,
        difficulty: 2,
        goal_id: 2
      }, {
        title: 'Wink',
        image: 'https://s3.amazonaws.com/digitaltrends-uploads-prod/2014/02/business-card.jpg',
        description: 'Wink at someone looking at you.  Bonus points for the double wink to the same person.',
        allotted_time: 9,
        difficulty: 1,
        goal_id: 4
      }];
      return knex('task').insert(task);
    });
};
