import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AddplayerPage } from '../addplayer/addplayer';

@Component({
  selector: 'page-create',
  templateUrl: 'create.html'
})
export class CreatePage {
  public game:any = {};

  logForm() {
    this.navCtrl.push(AddplayerPage, {
      game: this.game
    });
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }


}
