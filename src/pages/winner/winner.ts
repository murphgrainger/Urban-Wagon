import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

import { CreatePage } from '../create/create';

@Component({
  selector: 'page-winner',
  templateUrl: 'winner.html'
})
export class WinnerPage {
  game:{}
  players:{}
  taskCount:number;
  menuIsHidden: boolean = false;


  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController) {
    this.game = navParams.get('game');
    this.players = navParams.get('players');
    this.taskCount = navParams.get('tasks');
  }

ionViewWillEnter() {
    this.view.showBackButton(false);
   }

startGame() {
  this.navCtrl.push(CreatePage);
  }

}
