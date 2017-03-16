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
  public game:any;


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
      })
    };

}
