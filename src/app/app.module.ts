import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Ionic native plugins

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Contacts } from '@ionic-native/contacts';
import { Globalization } from '@ionic-native/globalization';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { WiFiCalling } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { CallPage } from '../pages/call/call';
import { CallingPage } from '../pages/call/calling';
import { HistoryPage } from '../pages/history/history';
import { TopupPage } from '../pages/topup/topup';
import { ContactsPage } from '../pages/contacts/contacts';

import { SharedModule } from '../shared/shared.module';
import { metaReducers, reducers } from '../reducers/index';
import { FireHttpModule } from '../auth/http/fire-http.module';

import { AuthEffects } from '../auth/effects/auth.effects';


// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    WiFiCalling,
    TabsPage,
    CallPage,
    CallingPage,
    HistoryPage,
    TopupPage,
    ContactsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(WiFiCalling),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,
    SharedModule,
    FireHttpModule.forRoot(),
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([AuthEffects]),
    StoreDevtoolsModule.instrument()
  ],
  entryComponents: [
    WiFiCalling,
    TabsPage,
    CallPage,
    CallingPage,
    HistoryPage,
    TopupPage,
    ContactsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Contacts,
    Globalization,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ],
  bootstrap: [IonicApp]
})
export class AppModule {
}
