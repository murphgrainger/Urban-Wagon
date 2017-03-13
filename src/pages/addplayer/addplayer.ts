import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DashboardPage } from '../dashboard/dashboard';
import {GameService} from '../../providers/game-service';


@Component({
  selector: 'page-addplayer',
  templateUrl: 'addplayer.html',
  providers: [GameService]

})
export class AddplayerPage {
  game:any;
  players:any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public gameService: GameService) {
  this.game = navParams.get('game');
  }


  startGame() {
    this.game.players = this.objToArr(this.players);
    console.log(this.game.players)
    this.gameService.postGame(this.game)
    this.navCtrl.push(DashboardPage, {
      game: this.game
    });
  }

  objToArr(obj) {
 let arr = [];
 for (var key in obj) {
   arr.push(obj[key]);
 }
   return arr;
 }



}
