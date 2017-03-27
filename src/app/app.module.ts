import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { CreatePage } from '../pages/create/create';
import { AddplayerPage } from '../pages/addplayer/addplayer';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { WinnerPage } from '../pages/winner/winner';
import { LoserPage } from '../pages/loser/loser';
import { GuidePage } from '../pages/guide/guide';

import { GameService } from '../providers/game-service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CreatePage,
    AddplayerPage,
    DashboardPage,
    WinnerPage,
    LoserPage,
    GuidePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CreatePage,
    AddplayerPage,
    DashboardPage,
    WinnerPage,
    LoserPage,
    GuidePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, GameService]
})
export class AppModule {}
