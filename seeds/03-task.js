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
        title: 'Find Someone You Have Met Previously',
        image: 'http://www.lifeshareusa.com/UploadedFiles/Images/news_stories/man_with_cane_9x6_72.jpg',
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
        description: 'Go find a stranger to cheers with.  Bonus points for a champagne toast, selfie, or group toast with strangers.',
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
        goal_id: 4
      }];
      return knex('task').insert(task);
    });
};
