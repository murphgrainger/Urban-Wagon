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
  objDate:any;
  public trailProgress: string = '0' + '%';
  testRadioOpen: boolean;
  testRadioResult;
  taskAccepted: boolean;
  activePlayer:any;
  player:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public gameService: GameService, public alertCtrl: AlertController) {
    this.gameID = navParams.get('id');
    console.log('component', this.gameID)
    this.objDate = Date.now();
    this.updateProgress(30)
  }

  ionViewDidLoad() {
    this.getGame()
    };

  getGame() {
    this.gameService.getGameDetails(this.gameID)
    .then(game => {
      this.game = game
    }).catch(error => {
      console.log(error)
    }).then(() => {
      this.splitObject()
    }).catch(error => {
      console.log('splitObject', error)
    })
  }

  splitObject() {
    this.players = this.game.players;
    this.hardships = this.game.goal.hardships;
    this.tasks = this.game.goal.tasks;
    console.log(this.game);
    console.log('players', this.players)
    console.log('tasks', this.tasks)
    console.log('hardships', this.hardships)
  }

  assignTask(id) {
    let taskID = id;
    let alert = this.alertCtrl.create();
    alert.setTitle('Assign Task To Player');

    this.players.forEach(element => {
      alert.addInput({
        type: 'radio',
        label: element.trail_name,
        value: element
      })
    })

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        this.taskAccepted = true;
        this.activePlayer = data;
        this.gameService.assignTask(this.activePlayer.id, taskID)
        .then(response => {
          this.testRadioOpen = false;
          this.gameService.getActivePlayer(response.json().player_id)
          .then(res => {
            console.log('back from getActivePlayer', res.json())
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

  updateProgress(val) {
    this.trailProgress = val + '%';
  }

}
