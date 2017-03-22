import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {GameService} from '../../providers/game-service';


@Component({
  selector: 'page-players',
  templateUrl: 'players.html',
  providers: [GameService]
})
export class PlayersPage {
  public game:any = {};
  public players:any = [];


  constructor(public navCtrl: NavController, public navParams: NavParams, public gameService: GameService) {
  }

  ionViewDidLoad() {
    this.gameService.getGameDetails(2)
    .then(game => {
      this.game = game
      this.gameService.getPlayers(2)
      .then(data => {
       this.players = data
       console.log(this.players)
      })
      .catch(err => {
        console.log(err)
      })
    })

}

}
