import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {GameService} from '../../providers/game-service';
import { AlertController } from 'ionic-angular';

import { LoserPage } from '../loser/loser';
import { WinnerPage } from '../winner/winner';



@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
  providers: [GameService]

})
export class DashboardPage {
  public gameID:any;
  public test:any;
  public game:any = {};
  public players = [];
  public tasks = [];
  public hardships = [];
  public skipCounter:number;
  public completedCounter:number;
  objDate:any;
  public trailProgress: string = '0' + '%';
  testRadioOpen: boolean;
  testRadioResult;
  taskAccepted: boolean;
  taskSkipped: boolean;
  activePlayer:any = {};
  activeTask:any;
  public currentHardship:any;
  public illPlayer:any;
  isHardship: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public gameService: GameService, public alertCtrl: AlertController) {
    this.gameID = navParams.get('id');
    this.objDate = Date.now();
    this.trailProgress = '0%'
    this.skipCounter = 0;
    this.completedCounter = 0;
    this.taskSkipped = false;
  }

  ionViewDidLoad() {
    this.getGame()
    };

  getGame() {
    this.gameService.getGameDetails(this.gameID)
    .then(game => {
      this.game = game
      this.gameService.getPlayers(this.game.id)
      .then(players => {
        this.players = players.sort(this.compare);
      })
      .catch(err => {
        console.log('trying to get players')
        console.log(err)
        this.refreshPlayers()
      })
    }).catch(error => {
      console.log('could not get game details', error)
    }).then(() => {
      this.splitObject()
    }).catch(error => {
      console.log('splitObject', error)
    })
  }

  splitObject() {
    this.hardships = this.shuffleArray(this.game.goal.hardships)
    this.tasks = this.shuffleArray(this.game.goal.tasks)
  }

  assignTask(id) {
    if (this.isEligible(this.players) === false) {
      console.log(this.players)
      console.log(false)
      this.navCtrl.push(LoserPage, {
        game: this.game
      });
      console.log('no eligible players! you lose!')
    }
    else {
      let taskID = id;
      let alert = this.alertCtrl.create();
      alert.setTitle('Assign Task To Player');
      this.players.forEach(element => {
      if (element.morale != 'Dead' && element.rest_count === 0) {
        alert.addInput({
          type: 'radio',
          label: element.trail_name,
          value: element.id
        })
      }
    })

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Start',
      handler: data => {
        this.gameService.assignTask(data, taskID)
        .then(response => {
          this.testRadioOpen = false;
          this.gameService.getActivePlayer()
          .then(task => {
            this.activeTask = task;
            this.activePlayer = task[0].player
            this.taskAccepted = true;
          }).catch(err => {
            console.log(err)
          })
        }).catch(error => {
          console.log(error)
        })
      }
    });
    alert.present()
  }
}

  completeTask(status) {
    if (status === 'Completed') {
      this.completedCounter++
      this.updateProgress(this.game.difficulty)
      this.decreaseRestCount()
      this.increaseMorale(this.activePlayer)
    } else {
      this.skipCounter++
      if (this.skipCounter > 2) {
          this.assignPlayerToHardship()
      }
    }
    this.tasks.pop();
    this.taskAccepted = false;
    this.gameService.updateTaskStatus(this.activeTask[0].id, status)
    .then(data => {
      console.log('refreshing players')
      this.refreshPlayers()
    }).catch(err => {
      console.log(err)
    })
  }

  updateProgress(difficulty) {
    let withoutPercent = this.trailProgress.replace('%', '')
    if (difficulty === 1) {
      this.trailProgress = Number(withoutPercent) + 20 + '%';
    }
    else if(difficulty === 2){
      this.trailProgress = Number(withoutPercent) + 10 + '%';
    }
    else {
      this.trailProgress = Number(withoutPercent) + 4 + '%';
    }
  }

  skipTask() {
    this.tasks.pop()
    this.taskAccepted = false;
    this.skipCounter++;
    if (this.skipCounter > 1) {
      this.assignPlayerToHardship()
    }
  }

  assignPlayerToHardship(){
      this.isHardship = true;
      this.illPlayer = this.players[Math.floor(Math.random()*this.players.length)];
      this.taskSkipped = true;
      this.currentHardship = this.hardships[this.hardships.length - 1]
  }

  continueOn(choice) {
    if (choice === 'Rest Player') {
      this.addRestCount(this.currentHardship.rest_value)
      this.decreaseMorale(this.illPlayer)
      this.updateHealth()
      this.skipCounter = 0;
      this.taskSkipped = false;
      this.hardships.pop()
      this.refreshPlayers()

    }
    else {
      this.decreaseMorale(this.illPlayer)
      this.updateHealth()
      this.skipCounter = 0;
      this.taskSkipped = false;
      this.hardships.pop()
      this.refreshPlayers()

    }
  }

  otherOption(choice) {
    if (choice === 'Rest Player') {
      this.decreaseMorale(this.illPlayer)
      this.addRestCount(this.currentHardship.rest_value)
      this.updateHealth()
      this.skipCounter = 0;
      this.taskSkipped = false;
      this.hardships.pop()
      this.refreshPlayers()
    }
    else {
      this.decreaseMorale(this.illPlayer)
      this.updateHealth()
      this.skipCounter = 0;
      this.taskSkipped = false;
      this.hardships.pop()
      this.refreshPlayers()
    }
  }

  decreaseMorale(player) {
    let morale = ['Dead', 'Poor', 'Fair', 'Good', 'Great'];
    let val = this.hardships[this.hardships.length - 1].morale_decrease;
    let newPlayerMoraleIndex;
    let finalNewMorale;
    for (let i = 0; i < morale.length; i++) {
        if (player.morale === morale[i]) {
            var playerMoraleIndex = i;
            newPlayerMoraleIndex = playerMoraleIndex - val;
        }
        if (newPlayerMoraleIndex < 0) {
            finalNewMorale = morale[0]
        }
        else{
          finalNewMorale = morale[newPlayerMoraleIndex]
        }
    }
    return this.illPlayer.morale = finalNewMorale;
  }

  increaseMorale(player) {
      let morale = ['Dead', 'Poor', 'Fair', 'Good', 'Great'];
      let newPlayerMoraleIndex;
      let finalNewMorale;
      for (let i = 0; i < morale.length; i++) {
          if (player.morale === morale[i]) {
            if (player.morale !== 'Great') {
              var playerMoraleIndex = i;
              newPlayerMoraleIndex = playerMoraleIndex + 1;
              finalNewMorale = morale[newPlayerMoraleIndex]
            }
          }
        }
     this.activePlayer.morale = finalNewMorale;
     this.gameService.updatePlayerHealth(this.activePlayer)
     .then(response => {
       console.log('Success')
     })
     .catch(err => {
       console.log(err)
     })
  }

  addRestCount(count) {
     this.illPlayer.rest_count += count
     return this.illPlayer.rest_count
  }

  decreaseRestCount() {
    this.players.forEach(player => {
      if (player.rest_count > 0) {
        this.gameService.updatePlayerRest(player)
        .then(data => {
          this.refreshPlayers()
        })
        .catch(error => {
          console.log(error)
        })
      }
    })
  }

  updateHealth() {
    this.gameService.updatePlayerHealth(this.illPlayer)
    .then(data => {
      this.gameService.getPlayers(this.game.id)
      .then(players => {
        this.players = players.sort(this.compare);
      })
      .catch(err => {
        console.log('problem getting players')
      })
    }).catch(err => {
      console.log(err)
    })
  }

  getStyle(player){
    if (player.morale === 'Fair') {
      return '#FF5C30'
    }
    else if(player.morale === 'Great'){
      return '#32db64'
    }
    else if(player.morale === 'Poor') {
      return 'red'
    }
    else if(player.morale === 'Dead') {
      return 'black'
    }
    else {
      return '#FFC55E'
    }
  }

  getBackground(type) {
    if (type === "task") {
      return '10px solid #FFC55E'
    }
    else {
      return '10px solid #FF5C30'
    }
  }

  refreshPlayers() {
    this.gameService.getPlayers(this.game.id)
    .then(data => {
     this.players = data.sort(this.compare);
    })
    .catch(err => {
      console.log(err)
    })
    .then(players => {
      if (this.isEligible(this.players) === false) {
        this.navCtrl.push(LoserPage, {
          game: this.game
        });
        console.log('no eligible players! you lose!')
      }
    })
  }

shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

compare(a,b) {
  if (a.trail_name < b.trail_name)
    return -1;
  if (a.trail_name > b.trail_name)
    return 1;
  return 0;
}

isEligible(arr) {
  let arr2 = []
  arr.forEach(element => {
    if (element.morale !== "Dead" && element.rest_count === 0) {
      arr2.push(element);
    }
  })
  if (arr2.length === 0) {
    return false;
  }
  else {
    return true;
  }
}

}
