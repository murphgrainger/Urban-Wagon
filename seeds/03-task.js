exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM task; ALTER SEQUENCE task_id_seq RESTART WITH 1;')
    .then(function() {
      const task = [{
        title: 'Get Business Card',
        image: 'http://beastpieces.com/wp-content/uploads/2010/03/0000_Squarespace__letterpress_business_cards-600x450.jpg',
        description: 'Go talk to someone you have not before and bring back a business card to the group.',
        allotted_time: 10,
        difficulty: 2,
        goal_id: 1
      },
      {
        title: 'Seek Advice',
        image: 'https://farm4.static.flickr.com/3567/5743969497_14dff8729e_b.jpg',
        description: 'Ask someone for advice about anything!',
        allotted_time: 10,
        difficulty: 2,
        goal_id: 4
      },
      {
        title: 'Meet a VP',
        image: 'https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAbhAAAAJGJlYWMzOTcyLTM2YzgtNDAwMy05ZjgwLWQ0YzkzZjk3Njc5YQ.jpg',
        description: 'Search through the crowd to find someone with VP status.',
        allotted_time: 10,
        difficulty: 2,
        goal_id: 1
      },
      {
        title: 'Find Two People Who...',
        image: 'https://farm6.static.flickr.com/5338/31278686722_2b5f9e17e1_b.jpg',
        description: 'Started their career as a janitor, assistant, or bartender.',
        allotted_time: 10,
        difficulty: 2,
        goal_id: 4
      },
      {
        title: 'Give Someone Your Business Card',
        image: 'http://e1.365dm.com/16/01/16-9/20/simon-francis-bournemouth-leicester-red-card-andre-marriner_3394695.jpg?20160102162647',
        description: 'Not a red card. A business card!',
        allotted_time: 10,
        difficulty: 2,
        goal_id: 4
      },
      {
        title: 'Shared Hobbies',
        image: 'https://68.media.tumblr.com/07e7f74eaf513073ea63e42069a44da7/tumblr_mhvy8fDK5T1s5s9zxo1_540.jpg',
        description: 'Discover someone that shares the same hobby as you. Golf? Stamp collecting?',
        allotted_time: 10,
        difficulty: 2,
        goal_id: 4
      },
      {
        title: 'Find Someone Who',
        image: 'http://www.theruggedmale.com/dev/wp-content/uploads/2013/07/women-sitting-at-a-bar-and-having-drinks1.jpeg',
        description: 'Besides those in your group, can you find someone you have met before?',
        allotted_time: 10,
        difficulty: 2,
        goal_id: 4
      },
      {
        title: 'Introduce Yourself to the Speaker',
        image: 'http://www.ftlcomm.com/ensign/editorials/LTE/thornton/thorntonlist/thornton063/cover.jpg',
        description: 'Tell he/she how interested you were in their talk.',
        allotted_time: 10,
        difficulty: 2,
        goal_id: 1
      },{
        title: 'Find Someone Who...',
        image: 'https://c1.staticflickr.com/5/4091/5049518652_7a80bae13a_b.jpg',
        description: 'Lives less than 100 miles from your hometown.',
        allotted_time: 10,
        difficulty: 2,
        goal_id: 4
      },{
        title: 'Cheers with a Stranger',
        image: 'http://chimneypark.com/wp-content/uploads/champagne-toast.jpg',
        description: 'Bonus points for a champagne toast, selfie, or group toast with strangers.',
        allotted_time: 5,
        difficulty: 2,
        goal_id: 4
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
        goal_id: 4
      }, {
        title: 'Ask Someone',
        image: 'http://scoopempire.com/wp-content/uploads/2015/08/Joyful2.jpg',
        description: 'What is your take on the meaning of life? Do you agree?',
        allotted_time: 7,
        difficulty: 2,
        goal_id: 4
      },{
        title: '10 Days or 10 Nights',
        image: 'http://www.growingyourbaby.com/wp-content/uploads/2010/12/8407056_s.jpg',
        description: 'Ask someone: "Would you rather have 10 nights filled with incessant jackhammering, or 10 days with no sun?"',
        allotted_time: 7,
        difficulty: 2,
        goal_id: 4
      },{
        title: 'Listen to a Joke',
        image: 'https://www.bradmontgomery.com/wp-content/uploads/2008/09/leno.jpg',
        description: 'Ask someone to tell you a joke. Repeat the joke back to your group.',
        allotted_time: 7,
        difficulty: 2,
        goal_id: 4
      }, {
        title: 'Tell a Joke',
        image: 'http://www.nbc.com/sites/nbcunbc/files/files/images/2015/4/21/140207_2721821_Little_Richard_Simmons_Show_anvver_3.jpg',
        description: 'Tell your best joke to a complete stranger...keep it tasteful!',
        allotted_time: 7,
        difficulty: 2,
        goal_id: 4
      },{
        title: 'Seek Advice',
        image: 'https://bacontoday.com/wp-content/uploads/2009/08/bacon-briefcase.jpg',
        description: 'Ask someone how you should proceed with your career.',
        allotted_time: 7,
        difficulty: 2,
        goal_id: 4
      },{
        title: 'T-Pain',
        image: 'https://static2.businessinsider.com/image/4c936cdc7f8b9a9d30030300/hulus-10-most-watched-videos-ever-snl-and-family-guy-dominate.jpg',
        description: 'Ask someone "Can I Buy You a Drank" in a T-Pain voice',
        allotted_time: 7,
        difficulty: 2,
        goal_id: 2
      }, {
        title: 'Wink',
        image: 'https://s3.amazonaws.com/digitaltrends-uploads-prod/2014/02/business-card.jpg',
        description: 'Wink at someone looking at you.  Bonus points for the double wink to the same person.',
        allotted_time: 9,
        difficulty: 1,
        goal_id: 3
      }];
      return knex('task').insert(task);
    });
};
