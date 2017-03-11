import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddplayerPage');
  }

}
