import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


import {TabsService} from '../../providers/tabs-service';
import { AddplayerPage } from '../addplayer/addplayer';

@Component({
  selector: 'page-create',
  templateUrl: 'create.html',
  providers:[TabsService]
})
export class CreatePage {
  public game:any = {};


  constructor(public navCtrl: NavController, public navParams: NavParams, public tabs: TabsService) {
    this.game.difficulty = 1;
    this.game.players = 1;
    this.game.goal = 4;
  }

  logForm() {
    this.navCtrl.push(AddplayerPage, {
      game: this.game
    });
  }

}
