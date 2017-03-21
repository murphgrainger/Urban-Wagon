import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

import { CreatePage } from '../create/create';


@Component({
  selector: 'page-loser',
  templateUrl: 'loser.html'
})
export class LoserPage {
  menuIsHidden: boolean = false;


  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController) {}

  ionViewWillEnter() {
      this.view.showBackButton(false);
     }
     
  startGame() {
    this.navCtrl.push(CreatePage);
  }
}
