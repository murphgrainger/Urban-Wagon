import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Winner page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-winner',
  templateUrl: 'winner.html'
})
export class WinnerPage {
  game:{}
  players:{}
  taskCount:number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.game = navParams.get('game');
    this.players = navParams.get('players');
    this.taskCount = navParams.get('tasks');

    console.log(this.game)
    console.log(this.players)
    console.log(this.taskCount)

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WinnerPage');
  }

}
