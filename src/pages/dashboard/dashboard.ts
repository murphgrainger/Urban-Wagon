import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {GameService} from '../../providers/game-service';
import { AlertController } from 'ionic-angular';


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
  public currentHardship = [];
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
        this.players = players;
      })
      .catch(err => {
        console.log('trying to get players again')
        this.gameService.getPlayers(this.game.id)
        .then(players => {
          this.players = players;
        })
        .catch(err => {
          console.log('still could not retreive players');
        })
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

  completeTask(status) {
    if (status === 'Completed') {
      this.completedCounter++
      this.updateProgress(this.game.difficulty)
    } else {
      this.skipCounter++
      if (this.skipCounter > 1) {
          this.assignPlayerToHardship()
      }
    }
    this.tasks.pop();
    this.taskAccepted = false;
    this.gameService.updateTaskStatus(this.activeTask[0].id, status)
    .then(data => {
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
      console.log(this.illPlayer)
      this.taskSkipped = true;
  }

  continueOn(choice) {
    console.log(choice)
    console.log(this.illPlayer)
    this.currentHardship.push(this.hardships[this.hardships.length -1])
    this.decreaseMorale(this.illPlayer)
    this.updateHealth()
    this.skipCounter = 0;
    this.taskSkipped = false;
    this.hardships.pop()
  }

  otherOption(choice) {
    if (choice === 'Rest Player') {
      this.currentHardship.push(this.hardships[this.hardships.length -1])
      this.decreaseMorale(this.illPlayer)
      this.updateHealth()
      this.skipCounter = 0;
      this.taskSkipped = false;
      this.hardships.pop()
    }
    else {
      this.currentHardship.push(this.hardships[this.hardships.length -1])
      this.skipCounter = 0;
      this.taskSkipped = false;
      this.hardships.pop()
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

  updateHealth() {
    this.gameService.updatePlayerHealth(this.illPlayer)
    .then(data => {
      this.gameService.getPlayers(this.game.id)
      .then(players => {
        this.players = players;
      })
      .catch(err => {
        console.log('problem getting players')
      })
    }).catch(err => {
      console.log(err)
    })
  }

  getStyle(player){
    if (player.health === 'Fair') {
      return '#FF5C30'
    }
    else if(player.health === 'Great'){
      return '#FFC55E'
    }
    else if(player.health === 'Poor') {
      return 'red'
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

shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

}
