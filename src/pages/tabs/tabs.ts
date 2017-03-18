import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { DashboardPage } from '../dashboard/dashboard';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = DashboardPage;
  tab2Root: any = AboutPage;
  tab3Root: any = ContactPage;

  constructor() {

  }
}
