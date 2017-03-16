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


  constructor(public navCtrl: NavController, public navParams: NavParams, public gameService: GameService) {
    this.gameID = navParams.get('id');
  }

  ionViewDidLoad() {
    this.gameService.getGameDetails(this.gameID)
    .then(game => {
      this.game = game
      console.log(this.game)
    }).catch(error => {
      console.log(error)
    }).then(() => {
      this.splitObject()
    })
    };

  splitObject() {
    this.players = this.game.players;
    this.tasks = this.game.goal.tasks;
    this.hardships = this.game.goal.hardships;
    console.log(this.game);
    console.log('players', this.players)
    console.log('tasks', this.tasks)
    console.log('hardships', this.hardships)
  }

}
