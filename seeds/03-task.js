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
        title: 'Would You Rather',
        image: 'https://img.wonderhowto.com/img/75/78/63494545470634/0/keep-your-fingers-clean-while-eating-cheetos-chocolate-chips-and-more.w1456.jpg',
        description: 'Dog breath when you wakeup, or cheetos on your fingers when going to bed? Ask a stranger!',
        allotted_time: 7,
        difficulty: 2,
        goal_id: 4
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
        title: 'Would You Rather',
        image: 'http://www.growingyourbaby.com/wp-content/uploads/2010/12/8407056_s.jpg',
        description: 'Have 10 nights filled with incessant jackhammering, or 10 days with no sun? Ask someone!',
        allotted_time: 7,
        difficulty: 2,
        goal_id: 4
      },{
        title: 'Listen to a Joke',
        image: 'http://www.bradleyjobling.com/wp-content/uploads/2014/02/180956603.jpg',
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
      } , {
        title: 'Twins!',
        image: 'http://www.funpedia.net/imgs/apr12/celebs-look-like-01.jpg',
        description: 'Find someone who is a twin!',
        allotted_time: 9,
        difficulty: 1,
        goal_id: 4
      } , {
        title: 'Open Mic',
        image: 'http://artinest.com/wp-content/uploads/2015/09/openmic.jpg',
        description: 'Find someone who has sung at an open mic night.',
        allotted_time: 9,
        difficulty: 1,
        goal_id: 4
      } , {
        title: 'Limbo?',
        image: 'http://dazedimg.dazedgroup.netdna-cdn.com/786/azure/dazed-prod/1120/2/1122563.jpg',
        description: 'Find someone who can explain the ending of inception.',
        allotted_time: 9,
        difficulty: 1,
        goal_id: 4
      } , {
        title: 'To be or not to be...',
        image: 'https://usercontent1.hubstatic.com/6928866_f520.jpg',
        description: 'that is the question! Discuss with someone the meaning of this line.',
        allotted_time: 9,
        difficulty: 1,
        goal_id: 4
      } , {
        title: 'Patterned Shirt',
        image: 'https://www.heddels.com/wp-content/uploads/2015/05/hawaiianshirts_magnumpi2.jpg',
        description: 'Compliment someone with a patterned shirt.',
        allotted_time: 9,
        difficulty: 1,
        goal_id: 4
      } , {
        title: 'Industry Specific',
        image: 'https://tradegov.files.wordpress.com/2016/11/istock_85340257_small.jpg?w=603&h=338',
        description: 'Can you find to someone who works in an industry you are interested in?',
        allotted_time: 9,
        difficulty: 1,
        goal_id: 4
      } , {
        title: 'Shout it Out',
        image: 'https://static.domain.com.au/domainblog/uploads/2016/02/24202352/2_gn2bu6.jpg',
        description: "Yell out your sibing's name and talk to the first person who looks over.",
        allotted_time: 9,
        difficulty: 1,
        goal_id: 4
      } , {
        title: 'Repeat Convo',
        image: 'http://blindgossip.com/wp-content/uploads/2015/08/circle-back.png',
        description: 'Circle back with someone you have already talked to.',
        allotted_time: 9,
        difficulty: 1,
        goal_id: 4
      } , {
        title: 'Repeat Convo',
        image: 'http://blindgossip.com/wp-content/uploads/2015/08/circle-back.png',
        description: 'Circle back with someone you have already talked to.',
        allotted_time: 9,
        difficulty: 1,
        goal_id: 4
      } , {
        title: 'About Me',
        image: 'https://assets3.thrillist.com/v1/image/1477368/size/tmg-article_default_mobile;jpeg_quality=20.jpg',
        description: 'Tell someone a fun fact about yourself.',
        allotted_time: 9,
        difficulty: 1,
        goal_id: 4
      } , {
        title: 'About Me',
        image: 'http://insiderlouisville.com/wp-content/uploads/2015/05/Taco_Bell_Night.jpg',
        description: 'Tell someone a fun fact about yourself.',
        allotted_time: 9,
        difficulty: 1,
        goal_id: 4
      } , {
        title: 'Would You Rather',
        image: 'http://blindgossip.com/wp-content/uploads/2015/08/circle-back.png',
        description: 'Control space or time?  Did you both agree?',
        allotted_time: 9,
        difficulty: 1,
        goal_id: 4
      } , {
        title: 'Would You Rather',
        image: 'https://s-media-cache-ak0.pinimg.com/736x/8b/c5/bd/8bc5bdbf5fa27633baeaad06f8e3a58f.jpg',
        description: 'Wear clown shoes every day or a clown wig every day?',
        allotted_time: 9,
        difficulty: 1,
        goal_id: 4
      } , {
        title: 'Gift',
        image: 'https://s-media-cache-ak0.pinimg.com/736x/41/2e/9a/412e9a3ad44462ae6fcffe81260d7669.jpg',
        description: 'Gift something to somone. Anything.',
        allotted_time: 9,
        difficulty: 1,
        goal_id: 4
      } , {
        title: 'Hoite Toite',
        image: 'https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAIIAAAAJDVmMmU0MDZkLWQzNjQtNGYzYS1iNDM0LTVjNjA4NWVmODQwMw.jpg',
        description: 'Put a napkin in your shirt for 5 minutes.',
        allotted_time: 9,
        difficulty: 1,
        goal_id: 4
      } , {
        title: 'Accent',
        image: 'https://cdn3.whatculture.com/images/2013/11/the-weather-man-michael-caine.jpg',
        description: 'Have a conversation with someone in any accent.  Bonus points for Australian.',
        allotted_time: 9,
        difficulty: 1,
        goal_id: 4
      }];
      return knex('task').insert(task);
    });
};
