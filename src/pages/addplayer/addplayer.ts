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
    console.log(this.players)
    this.game.players = this.playersToArr(this.players);
    console.log(this.game.players)
    this.game.access_code = this.makeid();
    this.game.date_started = new Date();
    this.game.progress = 0;
    this.game.user_id = 1;
    this.gameService.postGame(this.game)
    this.navCtrl.push(DashboardPage, {
      game: this.game
    });
  }

playersToArr(obj) {
   let arr = [];
   let arr2 = [];
   for (var key in obj) {
     arr.push(obj[key]);
   }
      arr.forEach(function(item) {
        arr2.push({
           trail_name : item
        });
      });
      return arr2;
  }

makeid() {
     let text = "";
     let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
     for( var i=0; i < 5; i++ )
         text += possible.charAt(Math.floor(Math.random() * possible.length));
     return text;
 }



}
