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
    console.log('component', this.gameID)
    this.objDate = Date.now();
    this.updateProgress(0)
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
        console.log('problem getting players')
      })
    }).catch(error => {
      console.log(error)
    }).then(() => {
      this.splitObject()
    }).catch(error => {
      console.log('splitObject', error)
    })
  }

  splitObject() {
    this.hardships = this.game.goal.hardships;
    this.tasks = this.game.goal.tasks;
  }

  assignTask(id) {
    let taskID = id;
    let alert = this.alertCtrl.create();
    alert.setTitle('Assign Task To Player');

    this.players.forEach(element => {
      alert.addInput({
        type: 'radio',
        label: element.trail_name,
        value: element.id
      })
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
    if (status = 'Completed') {
      this.completedCounter++
    } else {
      this.skipCounter++
    }
    this.tasks.pop()
    this.taskAccepted = false;
    this.gameService.updateTaskStatus(this.activeTask[0].id, status)
    .then(data => {
      this.updateProgress(10)
    }).catch(err => {
      console.log(err)
    })
  }

  updateProgress(val) {
    let withoutPercent = this.trailProgress.replace('%', '')
    this.trailProgress = Number(withoutPercent) + val + '%';
  }

  skipTask() {
    this.tasks.pop()
    this.taskAccepted = false;
    this.skipCounter++;
    if (this.skipCounter > 1) {
      this.isHardship = true;
      this.illPlayer = this.players[Math.floor(Math.random()*this.players.length)];
      this.gameService.updatePlayerHealth(this.illPlayer.id)
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
      this.taskSkipped = true;
    }
  }

  assignHardship(hardship) {
    this.currentHardship.push(hardship)
    this.skipCounter = 0;
    this.taskSkipped = false;
    this.hardships.pop()
  }

  getStyle(player){
    if (player.health === 'Fair') {
      return 'orange'
    }
    else if(player.health === 'Great'){
      return 'green'
    }
    else if(player.health === 'Poor') {
      return 'red'
    }
  }

  getBackground(type) {
    if (type === "task") {
      return '#FFC55E'
    }
    else {
      return '#FF5C30'
    }
  }

}
