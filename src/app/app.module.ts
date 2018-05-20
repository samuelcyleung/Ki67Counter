import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HotspotPage } from '../pages/hotspot/hotspot';
import { HotspotReportPage } from '../pages/hotspot/hotspotReport';
import { GlobalEstimatePage } from '../pages/global/estimate';
import { GlobalCounterPage } from '../pages/global/counter';
import { GlobalReportPage } from '../pages/global/global'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HotspotPage,
    HotspotReportPage,
    GlobalEstimatePage,
    GlobalCounterPage,
    GlobalReportPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HotspotPage,
    HotspotReportPage,
    GlobalEstimatePage,
    GlobalCounterPage,
    GlobalReportPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeAudio,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
