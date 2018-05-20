import { Component } from '@angular/core';
import { NavController, NavParams, AlertController} from 'ionic-angular';
import { ScoringFieldsAllocator } from '../../app/scoringFieldsAllocator';
import { Ki67Score } from '../../app/ki67Score';
import { GlobalCounterPage } from './counter'

@Component({
  templateUrl: 'estimate.html'
})
export class GlobalEstimatePage {
  instruction: string;
  percentEstNotOk: boolean;
  defaultInstruction: string;
  pNeg: number;
  pLow: number;
  pMed: number;
  pHigh: number;
  ki67Score: Ki67Score;
  ki67ScoreIndex: number;

  constructor(
              public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController) {

    this.instruction = this.navParams.get('instruction');
    this.defaultInstruction = "Please estimate percentage of invasive tumor area with various levels of Ki67: negligible, low, medium and high.";
    this.ki67Score = this.navParams.get('ki67Score');
    this.ki67ScoreIndex = this.navParams.get('ki67ScoreIndex'); // keep track of the currently scoring field.

    if (this.instruction==null) {
      this.instruction=this.defaultInstruction;
    }
    this.pNeg = this.navParams.get('pNeg');
    this.pLow = this.navParams.get('pLow');
    this.pMed = this.navParams.get('pMed');
    this.pHigh = this.navParams.get('pHigh');
    if (this.pNeg==null) {this.pNeg=0;}
    if (this.pLow==null) {this.pLow=0;}
    if (this.pMed==null) {this.pMed=0;}
    if (this.pHigh==null) {this.pHigh=0;}
    this.percentEstNotOk = (
      this.pNeg+
      this.pLow+
      this.pMed+
      this.pHigh)==100 ? null : true;
    if (this.ki67Score==null) {
      this.ki67Score=new Ki67Score(this.pNeg, this.pLow, this.pMed, this.pHigh);
    }
    if (this.ki67ScoreIndex==null) {this.ki67ScoreIndex=0;}
  }

  refreshPage() {
    this.navCtrl.setRoot(this.navCtrl.getActive().component,
    // pass data to navParams
    {
      instruction: this.instruction,
      pNeg: this.pNeg,
      pLow: this.pLow,
      pMed: this.pMed,
      pHigh: this.pHigh,
      ki67Score: this.ki67Score,
      ki67ScoreIndex: this.ki67ScoreIndex
    });
  }

  onChangeSlider(event: Event, val: any) {
    if ((this.pNeg+this.pLow+this.pMed+this.pHigh)>=100) {
      if (val=="pNeg") {
        this.pNeg = 100-this.pLow-this.pMed-this.pHigh;
      } else if (val=="pLow") {
        this.pLow= 100-this.pNeg-this.pMed-this.pHigh;
      } else if (val=="pMed") {
        this.pMed = 100-this.pNeg-this.pLow-this.pHigh;
      } else if(val=="pHigh") {
        this.pHigh = 100-this.pNeg-this.pLow-this.pMed;
      }
      // calculate required fields to score
      let sfa = new ScoringFieldsAllocator();
      sfa.init(this.pNeg,this.pLow,this.pMed,this.pHigh);
      this.instruction="Required fields to score: ";
      let numNeg = sfa.getNumNegligible();
      let numLow = sfa.getNumLow();
      let numMed = sfa.getNumMedium();
      let numHigh = sfa.getNumHigh();
      this.ki67Score = new Ki67Score(this.pNeg, this.pLow, this.pMed, this.pHigh);
      if (numNeg>0) {
        this.instruction=this.instruction+numNeg+" negligible; ";
        for (let i=0; i<numNeg; i++) {
          this.ki67Score.addField(0,0,Ki67Score.FIELD_TYPE_NEG);
        }
      }
      if (numLow>0) {
        this.instruction=this.instruction+numLow+" low; ";
        for (let i=0; i<numLow; i++) {
          this.ki67Score.addField(0,0,Ki67Score.FIELD_TYPE_LOW);
        }
      }
      if (numMed>0) {
        this.instruction=this.instruction+numMed+" medium; ";
        for (let i=0; i<numMed; i++) {
          this.ki67Score.addField(0,0,Ki67Score.FIELD_TYPE_MED);
        }
      }
      if (numHigh>0) {
        this.instruction=this.instruction+numHigh+" high; ";
        for (let i=0; i<numHigh; i++) {
          this.ki67Score.addField(0,0,Ki67Score.FIELD_TYPE_HIGH);
        }
      }
      this.instruction=this.instruction+"Please press the NEXT button to continue";

      this.refreshPage(); // refresh page
    } else {
      if (this.percentEstNotOk == null) {
        this.instruction=this.defaultInstruction;
        this.refreshPage(); // refresh page to disable 'next' button
      }
    }
  }

  /**
   * to to scoring counter
   * scores are stored in
   */
  goToCounter(event: Event) {
    this.navCtrl.push(GlobalCounterPage,
    // pass data to navParams
    {
      ki67Score: this.ki67Score,
      ki67ScoreIndex: this.ki67ScoreIndex
    });
  }
}
