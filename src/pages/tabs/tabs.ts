import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { DashboardPage } from '../dashboard/dashboard';
import { PlayersPage } from '../players/players';
import { GuidePage } from '../guide/guide';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = HomePage;
  tab2Root: any = PlayersPage;
  tab3Root: any = GuidePage;

  constructor() {

  }
}
