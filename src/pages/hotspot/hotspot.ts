import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';
import { HotspotReportPage } from './hotspotReport'
import { Platform } from 'ionic-angular';

@Component({
  templateUrl: 'hotspot.html'
})
export class HotspotPage {
  negCount: number;
  posCount: number;
  threshold: number;

  constructor(
              public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              private nativeAudio: NativeAudio,
              public platform: Platform
) {
    this.negCount = 0;
    this.posCount = 0;
    this.threshold = 500;


    this.platform.ready().then(() => {
      // initialize sound objects
      // NOTES (2018-05-20): preloadSimple does NOT work for iOS, but preloadComplex worked
      //this.nativeAudio.preloadSimple('negSound', 'assets/sound/beep_09.wav');
      this.nativeAudio.preloadComplex('negSound', 'assets/sound/beep_09.wav',1,1,0);
      //this.nativeAudio.preloadSimple('posSound', 'assets/sound/Click01.wav');
      this.nativeAudio.preloadComplex('posSound', 'assets/sound/Click01.wav',1,1,0);
      //this.nativeAudio.preloadSimple('doneSound', 'assets/sound/DingLing.wav');
      this.nativeAudio.preloadComplex('doneSound', 'assets/sound/DingLing.wav',1,1,0);
    });
}

  enoughCounted() {
    if (this.negCount+this.posCount >= this.threshold) {
      this.nativeAudio.play('doneSound');
      this.showScore(undefined); // enough nuclei counted
    }
  }

  incrNegCount(event) {
    this.nativeAudio.play('negSound');
    this.negCount++;
    this.enoughCounted();
  }

  incrPosCount(event) {
    this.nativeAudio.play('posSound');
    this.posCount++;
    this.enoughCounted();
  }

  resetCounter(event) {
    this.showConfirmReset()
  }

  showConfirmReset() {
    let confirm = this.alertCtrl.create({
      title: 'Reset counter?',
      message: '',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.negCount=0;
            this.posCount=0;
          }
        },
        {
          text: 'No',
          handler: () => {
          }
        }
      ]
    });
    confirm.present();
  }

  showScore(event) {
    let alert = this.alertCtrl.create({
      title: `Hot-spot score: ${Math.round(this.posCount/(this.negCount+this.posCount)*1000)/10}%`,
      subTitle: `negative nuclei counted: ${this.negCount}\npositive nuclei counted: ${this.posCount}\ntotal nuclei counted: ${this.negCount+this.posCount}`,
      buttons: ['OK']
    });
    alert.present();
  }

  /**
   * go to next page: score report
   */
  showNext(event) {
    // show final score
    this.navCtrl.setRoot(HotspotReportPage,
    // pass data to navParams
      {negCount: this.negCount, posCount: this.posCount});
  }

}
