exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM hardship; ALTER SEQUENCE hardship_id_seq RESTART WITH 1;')
    .then(function() {
      const hardship = [{
        title: 'Exhaustion!',
        description: 'is extremely tired.  Continue on or sit player out for the next task.',
        image: 'https://roeselienraimond.files.wordpress.com/2013/11/yawning_fox_side.jpg',
        button_1: 'Continue',
        button_2: 'Rest Player',
        rest_value: 1,
        morale_decrease: 1,
        goal_id: 2
      }, {
        title: 'Extreme Thirst!',
        description: 'is parched.  Contine on or get player something to drink.',
        image: 'https://images.contentful.com/hqceq7tr0t1k/00000002000090a100000000/f5a78004b3aee90f371ba9b4bbdb6fdb/TERI-Extreme-Thirst-300.jpg?fm=jpg&q=65&fl=progressive&fit=thumb&w=400&h=300',
        button_1: 'Continue',
        button_2: 'Buy Drink',
        rest_value: 0,
        morale_decrease: 1,
        goal_id: 2
      },{
        title: 'Claustrophobia!',
        description: 'feels crowded!  Continue or everyone go outside for 5 minutes.',
        image: 'https://pbs.twimg.com/media/B0WCQwkCYAAD3bW.jpg:large',
        button_1: 'Continue',
        button_2: 'Go Outside',
        rest_value: 0,
        morale_decrease: 2,
        goal_id: 2
      },{
        title: 'Tongue Tied!',
        description: 'is at a loss for words! Player must sit out for 2 tasks.',
        image: 'http://az616578.vo.msecnd.net/files/2016/08/18/63607086471849654642803183_Michael-in-Branch-Closing-michael-scott-1468612-1280-720.jpg',
        button_1: 'Rest Player',
        button_2: '',
        rest_value: 2,
        morale_decrease: 1,
        goal_id: 2
      },{
        title: 'Extreme Shyness!',
        description: 'is overwhelmed! Player must sit out for 3 tasks.',
        image: 'https://cynicritics.files.wordpress.com/2011/04/actresska_jeff_55633306_max-thumb-500xauto-4668.jpg',
        button_1: 'Rest Player',
        button_2: '',
        rest_value: 3,
        morale_decrease: 1,
        goal_id: 2
      }, {
        title: 'Awkward Conditions!',
        description: 'feels like this crowd is stiff. Continue on or as a group laugh as loudly as you can for 10 seconds.',
        image: 'http://img03.deviantart.net/11a1/i/2009/277/8/3/awkward_group_shot_by_goth_girl225.jpg',
        button_1: 'Continue',
        button_2: 'Laugh',
        rest_value: 1,
        morale_decrease: 1,
        goal_id: 2
      } , {
        title: 'Injury!',
        description: 'has tripped and fallen! Player must quit the game.',
        image: 'https://www.dolmanlaw.com/wp-content/uploads/2014/09/slip-and-fall-dolman.jpg',
        button_1: 'Continue',
        button_2: '',
        rest_value: 0,
        morale_decrease: 4,
        goal_id: 2
      }, {
        title: 'Dysentery!',
        description: 'has died of Dysentery.',
        image: 'https://i.ytimg.com/vi/-8rXtXG735w/maxresdefault.jpg',
        button_1: 'Continue',
        button_2: '',
        rest_value: 0,
        morale_decrease: 4,
        goal_id: 2
      }];
      return knex('hardship').insert(hardship);
    });
};
