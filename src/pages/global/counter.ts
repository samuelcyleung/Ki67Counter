import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';
import { Ki67Score } from '../../app/ki67Score';
import { GlobalReportPage } from './global'
import { Platform } from 'ionic-angular';

@Component({
  templateUrl: 'counter.html'
})
export class GlobalCounterPage {
  negCount: number;
  posCount: number;
  threshold: number;
  ki67Score: Ki67Score;
  ki67ScoreIndex: number;

  constructor(
              public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              private nativeAudio: NativeAudio,
              public platform: Platform) {
    this.negCount = 0;
    this.posCount = 0;
    this.threshold = 100;
    this.ki67Score = this.navParams.get('ki67Score');
    this.ki67ScoreIndex = this.navParams.get('ki67ScoreIndex');

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
      this.showAlert(); // enough nuclei counted
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

  /** show next button text
   * if scoring last field, should show "SHOW SCORE"
   * otherwise show "NEXT FIELD"
   */
  showNextButtonText() {
    if ((this.ki67ScoreIndex+1) == this.ki67Score.showNumFields()){
      return "SHOW SCORE";
    } else {
      return "NEXT FIELD";
    }
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: `Enough nuclei counted`,
      subTitle: `Please press button below to continue`,
      buttons: ['OK']
    });
    alert.present();
  }

  /**
   * go to next page
   */
  showNext(event) {
    // update nuclei count
    this.ki67Score.setPosCount(this.ki67ScoreIndex,this.posCount);
    this.ki67Score.setNegCount(this.ki67ScoreIndex,this.negCount);
    if ((this.ki67ScoreIndex+1) == this.ki67Score.showNumFields()){
      // show final score
      this.navCtrl.setRoot(GlobalReportPage,
        // pass data to navParams
        {ki67Score: this.ki67Score});
    } else {
      // next field
      this.navCtrl.push(GlobalCounterPage,
        // pass data to navParams
        {
          ki67Score: this.ki67Score,
          ki67ScoreIndex: this.ki67ScoreIndex+1
        });
    }
  }

}
