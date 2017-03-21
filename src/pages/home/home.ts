import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {TabsService} from '../../providers/tabs-service';

import { CreatePage } from '../create/create';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[TabsService]
})
export class HomePage {

  constructor(public navCtrl: NavController, public tabs: TabsService) {
  }

  ionViewDidLoad() {
    this.tabs.hide()
  }



startGame() {
  this.navCtrl.push(CreatePage);
}

}
