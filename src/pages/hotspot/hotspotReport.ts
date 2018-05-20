import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { HotspotPage } from './hotspot';

@Component({
  templateUrl: 'hotspotReport.html'
})
export class HotspotReportPage {
  negCount: number;
  posCount: number;
  hotspotScore: number;
  constructor(
              public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController) {
    this.negCount = this.navParams.get('negCount');
    this.posCount = this.navParams.get('posCount');
    this.hotspotScore = Math.round(this.posCount/(this.negCount+this.posCount)*1000)/10;
  }
  openHotspotPage() {
    this.navCtrl.setRoot(HotspotPage);
  }
}
