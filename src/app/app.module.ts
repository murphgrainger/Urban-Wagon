import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { CreatePage } from '../pages/create/create';
import { AddplayerPage } from '../pages/addplayer/addplayer';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { WinnerPage } from '../pages/winner/winner';
import { LoserPage } from '../pages/loser/loser';
import { PlayersPage } from '../pages/players/players';
import { GuidePage } from '../pages/guide/guide';

import { GameService } from '../providers/game-service';
import { TabsService } from '../providers/tabs-service';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    CreatePage,
    AddplayerPage,
    DashboardPage,
    WinnerPage,
    LoserPage,
    PlayersPage,
    GuidePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    CreatePage,
    AddplayerPage,
    DashboardPage,
    WinnerPage,
    LoserPage,
    PlayersPage,
    GuidePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, TabsService, GameService]
})
export class AppModule {}
