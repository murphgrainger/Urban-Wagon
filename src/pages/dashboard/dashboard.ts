import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {GameService} from '../../providers/game-service';


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


  constructor(public navCtrl: NavController, public navParams: NavParams, public gameService: GameService) {
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
      })
    }

  splitObject() {
    this.players = this.game.players;
    this.tasks = this.game.goal.tasks;
    this.hardships = this.game.goal.hardships;
    console.log(this.game);
    console.log('players', this.players)
    console.log('tasks', this.tasks)
    console.log('hardships', this.hardships)
  }

  updateProgress(val) {
    this.trailProgress = val + '%';
  }

}
