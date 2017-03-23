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

  getStyle(player){
    if (player.morale === 'Fair') {
      return '#F75733'
    }
    else if(player.morale === 'Great'){
      return '#6AC669'
    }
    else if(player.morale === 'Poor') {
      return 'E02F2F'
    }
    else if(player.morale === 'Dead') {
      return 'black'
    }
    else {
      return '#C6D34E'
    }
  }

}
