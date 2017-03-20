import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CreatePage } from '../create/create';


@Component({
  selector: 'page-loser',
  templateUrl: 'loser.html'
})
export class LoserPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoserPage');
  }
  startGame() {
    this.navCtrl.push(CreatePage);
  }
}
