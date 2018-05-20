/**
 * represents a global ki67 score.  each score consists of up to 4 fields.
 * each field consist of three component: num positive, num negative and type
 *
 * @author samuelc
 */
 // dictionary
 // ref: https://stackoverflow.com/questions/29043279/how-to-use-string-indexed-interface-of-typescript
 interface myDictionary {
  [index: string]: number;
 }
 class Ki67ScoreField {
   negCount: number;
   posCount: number;
   fieldType: string;
   constructor(negCount: number, posCount: number, fieldType: string){
     this.negCount = negCount;
     this.posCount = posCount;
     this.fieldType = fieldType;
   }
   humanName() {
      switch(this.fieldType) {
        case Ki67Score.FIELD_TYPE_HIGH:
          return "high";
        case Ki67Score.FIELD_TYPE_MED:
          return "medium";
        case Ki67Score.FIELD_TYPE_LOW:
          return "low";
        case Ki67Score.FIELD_TYPE_NEG:
          return "negligible";
      }
   }
   showColor() {
     switch(this.fieldType) {
       case Ki67Score.FIELD_TYPE_HIGH:
         return "ki67high";
       case Ki67Score.FIELD_TYPE_MED:
         return "ki67medium";
       case Ki67Score.FIELD_TYPE_LOW:
         return "ki67low";
       case Ki67Score.FIELD_TYPE_NEG:
         return "ki67negative";
       }
   }
   setNegCount(negCount) {this.negCount = negCount;}
   setPosCount(posCount) {this.posCount = posCount;}
   getScore(){return Math.round(this.posCount/(this.negCount+this.posCount)*1000)/10}
 }
export class Ki67Score {
  static FIELD_TYPE_HIGH = "field_type_high";
  static FIELD_TYPE_MED = "field_type_med";
  static FIELD_TYPE_LOW = "field_type_low";
  static FIELD_TYPE_NEG = "field_type_neg";

  pNeg: number;
  pLow: number;
  pMed: number;
  pHigh: number;
  ki67ScoreFields: Ki67ScoreField[] = new Array();

  // do nothing
  constructor(pNeg: number, pLow: number, pMed: number, pHigh: number) {
    this.pNeg = pNeg;
    this.pLow = pLow;
    this.pMed = pMed;
    this.pHigh = pHigh;
  }

  addField(negCount: number, posCount: number, fieldType: string){
    this.ki67ScoreFields.push(new Ki67ScoreField(negCount,posCount,fieldType));
  }

  showNumFields() {
    return this.ki67ScoreFields.length;
  }

  setNegCount(i,negCount) {this.ki67ScoreFields[i].setNegCount(negCount);}
  setPosCount(i,posCount) {this.ki67ScoreFields[i].setPosCount(posCount);}

  getFields(fieldType: string) {
    var outputFields: Ki67ScoreField[];
    outputFields = new Array();
    for (let field of this.ki67ScoreFields) {
      if (field.fieldType == fieldType) {
        outputFields.push(field);
      }
    }
    return outputFields;
  }

  getFieldsNeg() {return this.getFields(Ki67Score.FIELD_TYPE_NEG);}
  getFieldsLow() {return this.getFields(Ki67Score.FIELD_TYPE_LOW);}
  getFieldsMed() {return this.getFields(Ki67Score.FIELD_TYPE_MED);}
  getFieldsHigh() {return this.getFields(Ki67Score.FIELD_TYPE_HIGH);}

  getGlobalScore(){
    let totalNegCount = 0;
    let totalPosCount = 0;
    for (let field of this.ki67ScoreFields) {
      totalNegCount = totalNegCount + field.negCount;
      totalPosCount = totalPosCount + field.posCount;
    }
    return Math.round(totalPosCount/(totalPosCount+totalNegCount)*1000)/10;
  }
  getWeightedGlobalScore(){
    var negCount = {} as myDictionary;
    var posCount = {} as myDictionary;
    negCount[Ki67Score.FIELD_TYPE_NEG] = 0;
    negCount[Ki67Score.FIELD_TYPE_LOW] = 0;
    negCount[Ki67Score.FIELD_TYPE_MED] = 0;
    negCount[Ki67Score.FIELD_TYPE_HIGH] = 0;
    posCount[Ki67Score.FIELD_TYPE_NEG] = 0;
    posCount[Ki67Score.FIELD_TYPE_LOW] = 0;
    posCount[Ki67Score.FIELD_TYPE_MED] = 0;
    posCount[Ki67Score.FIELD_TYPE_HIGH] = 0;
    for (let field of this.ki67ScoreFields) {
      negCount[field.fieldType] = negCount[field.fieldType] + field.negCount;
      posCount[field.fieldType] = posCount[field.fieldType] + field.posCount;
    }
    let finalScore = 0;
    if (this.pNeg>0 && (posCount[Ki67Score.FIELD_TYPE_NEG] + negCount[Ki67Score.FIELD_TYPE_NEG]) > 0) {
      finalScore = finalScore +
        this.pNeg/100 *
        (posCount[Ki67Score.FIELD_TYPE_NEG] /
          (posCount[Ki67Score.FIELD_TYPE_NEG]+negCount[Ki67Score.FIELD_TYPE_NEG]));
    }
    if (this.pLow>0 && (posCount[Ki67Score.FIELD_TYPE_LOW] + negCount[Ki67Score.FIELD_TYPE_LOW])> 0) {
      finalScore = finalScore +
        this.pLow/100 *
        (posCount[Ki67Score.FIELD_TYPE_LOW] /
          (posCount[Ki67Score.FIELD_TYPE_LOW]+negCount[Ki67Score.FIELD_TYPE_LOW]));
    }
    if (this.pMed>0 && (posCount[Ki67Score.FIELD_TYPE_MED] + negCount[Ki67Score.FIELD_TYPE_MED]) > 0) {
      finalScore = finalScore +
        this.pMed/100 *
        (posCount[Ki67Score.FIELD_TYPE_MED] /
          (posCount[Ki67Score.FIELD_TYPE_MED]+negCount[Ki67Score.FIELD_TYPE_MED]));
    }
    if (this.pHigh>0 && (posCount[Ki67Score.FIELD_TYPE_HIGH] + negCount[Ki67Score.FIELD_TYPE_HIGH]) > 0) {
      finalScore = finalScore +
        this.pHigh/100 *
        (posCount[Ki67Score.FIELD_TYPE_HIGH] /
          (posCount[Ki67Score.FIELD_TYPE_HIGH]+negCount[Ki67Score.FIELD_TYPE_HIGH]));
    }
    return Math.round(finalScore*1000)/10;
  }
}
