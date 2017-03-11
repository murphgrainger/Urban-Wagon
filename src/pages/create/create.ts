import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Create page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-create',
  templateUrl: 'create.html'
})
export class CreatePage {
  public game:any = {};
  logForm(){
    this.game.date_started = new Date();
    console.log(this.game)
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
}
