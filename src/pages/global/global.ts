import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Ki67Score } from '../../app/ki67Score';
import { GlobalEstimatePage } from './estimate';


@Component({
  templateUrl: 'global.html'
})
export class GlobalReportPage {
  ki67Score: Ki67Score;
  constructor(
              public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController) {
    this.ki67Score = this.navParams.get('ki67Score');
  }
  openGlobalPage() {
    this.navCtrl.setRoot(GlobalEstimatePage);
  }
}
