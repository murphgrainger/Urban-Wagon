import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';


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

    console.log(this.game)
    console.log(this.players)
    console.log(this.taskCount)

  }

  ionViewWillEnter() {
      this.view.showBackButton(false);
     }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WinnerPage');
  }

}
