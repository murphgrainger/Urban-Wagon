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
  public gameID:number;
  public yo:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public gameService: GameService) {
  this.game = navParams.get('game');
  this.game.players = this.objToArr(this.players);
  this.game.access_code = this.makeid();
  this.game.date_started = new Date();
  this.game.progress = 0;
  this.game.user_id = 1;
  }


  startGame() {
    this.gameService.postGame(this.game)
    .subscribe(data => {
      this.gameID = data.json().id
      console.log(this.gameID)
  }, error => {
   console.log(error)
  });

    this.navCtrl.push(DashboardPage, {
      id: this.gameID,
      game: this.game,
      test: 'hey there!! data woo hoo'
    });
  }

  objToArr(obj) {
let arr = [];
for (var key in obj) {
 arr.push(obj[key]);
}
 return arr;
}

makeid() {
     let text = "";
     let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
     for( var i=0; i < 5; i++ )
         text += possible.charAt(Math.floor(Math.random() * possible.length));
     return text;
 }



}
