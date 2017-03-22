import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { GuidePage } from '../guide/guide';

import { DashboardPage } from '../dashboard/dashboard';
import { LoserPage } from '../loser/loser';
import { WinnerPage } from '../winner/winner';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = HomePage;
  tab2Root: any = GuidePage;


  constructor() {

  }

}
