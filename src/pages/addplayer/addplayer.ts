import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DashboardPage } from '../dashboard/dashboard';


@Component({
  selector: 'page-addplayer',
  templateUrl: 'addplayer.html'
})
export class AddplayerPage {
  game:any;
  players:any = {};
  addPlayers(){
    this.game.players = this.players
    console.log(this.game)
}

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.game = navParams.get('game');
  }

  startGame(game) {
    this.navCtrl.push(DashboardPage, {
      game: game
    });
  }

}
