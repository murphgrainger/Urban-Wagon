import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {
  game:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.game = navParams.get('game');
    console.log(this.game)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

}
