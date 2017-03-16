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
    this.game = navParams.get('game');
    this.test = navParams.get('test');
    console.log(this.gameID)
    console.log(this.game)
    console.log(this.test)
  }

  ionViewDidLoad() {
    this.gameService.getGameDetails()
  }

}
