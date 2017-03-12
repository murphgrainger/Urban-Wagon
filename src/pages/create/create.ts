import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AddplayerPage } from '../addplayer/addplayer';

@Component({
  selector: 'page-create',
  templateUrl: 'create.html'
})
export class CreatePage {
  public game:any = {};
  logForm(){
    this.game.date_started = new Date();
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  addPlayers(game) {
    this.navCtrl.push(AddplayerPage, {
      game: game
    });
  }
}
