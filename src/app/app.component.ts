import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { AdminPage } from '../pages/admin/admin';
import { LoginPage } from '../pages/login/login';
import { Store } from '@ngrx/store';
import { AppState } from '../store';

@Component({
  template: `
    <main [state]="store | async" [pages]="pages"></main>
  `
})
export class WiFiCalling {

  pages;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public store: Store<AppState>) {

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages = [
      {title: 'WifiCall', component: TabsPage},
      {title: 'Login', component: LoginPage},
      {title: 'Admin', component: AdminPage},
      {title: 'Settings', component: TabsPage},
      {title: 'Check Network', component: TabsPage},
      {title: 'About', component: TabsPage},
      {title: 'License', component: TabsPage},
      {title: 'Log Out', component: TabsPage},
    ];

  }
}
