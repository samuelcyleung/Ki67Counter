"use strict";
exports.__esModule = true;
var Ki67ScoreField = /** @class */ (function () {
    function Ki67ScoreField(negCount, posCount, fieldType) {
        this.negCount = negCount;
        this.posCount = posCount;
        this.fieldType = fieldType;
    }
    Ki67ScoreField.prototype.humanName = function () {
        switch (this.fieldType) {
            case Ki67Score.FIELD_TYPE_HIGH:
                return "high";
            case Ki67Score.FIELD_TYPE_MED:
                return "medium";
            case Ki67Score.FIELD_TYPE_LOW:
                return "low";
            case Ki67Score.FIELD_TYPE_NEG:
                return "negligible";
        }
    };
    Ki67ScoreField.prototype.showColor = function () {
        switch (this.fieldType) {
            case Ki67Score.FIELD_TYPE_HIGH:
                return "ki67high";
            case Ki67Score.FIELD_TYPE_MED:
                return "ki67medium";
            case Ki67Score.FIELD_TYPE_LOW:
                return "ki67low";
            case Ki67Score.FIELD_TYPE_NEG:
                return "ki67negative";
        }
    };
    Ki67ScoreField.prototype.setNegCount = function (negCount) { this.negCount = negCount; };
    Ki67ScoreField.prototype.setPosCount = function (posCount) { this.posCount = posCount; };
    Ki67ScoreField.prototype.getScore = function () { return Math.round(this.posCount / (this.negCount + this.posCount) * 1000) / 10; };
    return Ki67ScoreField;
}());
var Ki67Score = /** @class */ (function () {
    // do nothing
    function Ki67Score(pNeg, pLow, pMed, pHigh) {
        this.ki67ScoreFields = new Array();
        this.pNeg = pNeg;
        this.pLow = pLow;
        this.pMed = pMed;
        this.pHigh = pHigh;
    }
    Ki67Score.prototype.addField = function (negCount, posCount, fieldType) {
        this.ki67ScoreFields.push(new Ki67ScoreField(negCount, posCount, fieldType));
    };
    Ki67Score.prototype.showNumFields = function () {
        return this.ki67ScoreFields.length;
    };
    Ki67Score.prototype.setNegCount = function (i, negCount) { this.ki67ScoreFields[i].setNegCount(negCount); };
    Ki67Score.prototype.setPosCount = function (i, posCount) { this.ki67ScoreFields[i].setPosCount(posCount); };
    Ki67Score.prototype.getFields = function (fieldType) {
        var outputFields;
        outputFields = new Array();
        for (var _i = 0, _a = this.ki67ScoreFields; _i < _a.length; _i++) {
            var field = _a[_i];
            if (field.fieldType == fieldType) {
                outputFields.push(field);
            }
        }
        return outputFields;
    };
    Ki67Score.prototype.getFieldsNeg = function () { return this.getFields(Ki67Score.FIELD_TYPE_NEG); };
    Ki67Score.prototype.getFieldsLow = function () { return this.getFields(Ki67Score.FIELD_TYPE_LOW); };
    Ki67Score.prototype.getFieldsMed = function () { return this.getFields(Ki67Score.FIELD_TYPE_MED); };
    Ki67Score.prototype.getFieldsHigh = function () { return this.getFields(Ki67Score.FIELD_TYPE_HIGH); };
    Ki67Score.prototype.getGlobalScore = function () {
        var totalNegCount = 0;
        var totalPosCount = 0;
        for (var _i = 0, _a = this.ki67ScoreFields; _i < _a.length; _i++) {
            var field = _a[_i];
            totalNegCount = totalNegCount + field.negCount;
            totalPosCount = totalPosCount + field.posCount;
        }
        return Math.round(totalPosCount / (totalPosCount + totalNegCount) * 1000) / 10;
    };
    Ki67Score.prototype.getWeightedGlobalScore = function () {
        var negCount = {};
        var posCount = {};
        negCount[Ki67Score.FIELD_TYPE_NEG] = 0;
        negCount[Ki67Score.FIELD_TYPE_LOW] = 0;
        negCount[Ki67Score.FIELD_TYPE_MED] = 0;
        negCount[Ki67Score.FIELD_TYPE_HIGH] = 0;
        posCount[Ki67Score.FIELD_TYPE_NEG] = 0;
        posCount[Ki67Score.FIELD_TYPE_LOW] = 0;
        posCount[Ki67Score.FIELD_TYPE_MED] = 0;
        posCount[Ki67Score.FIELD_TYPE_HIGH] = 0;
        for (var _i = 0, _a = this.ki67ScoreFields; _i < _a.length; _i++) {
            var field = _a[_i];
            negCount[field.fieldType] = negCount[field.fieldType] + field.negCount;
            posCount[field.fieldType] = posCount[field.fieldType] + field.posCount;
        }
        var finalScore = 0;
        if (this.pNeg > 0 && (posCount[Ki67Score.FIELD_TYPE_NEG] + negCount[Ki67Score.FIELD_TYPE_NEG]) > 0) {
            finalScore = finalScore +
                this.pNeg / 100 *
                    (posCount[Ki67Score.FIELD_TYPE_NEG] /
                        (posCount[Ki67Score.FIELD_TYPE_NEG] + negCount[Ki67Score.FIELD_TYPE_NEG]));
        }
        if (this.pLow > 0 && (posCount[Ki67Score.FIELD_TYPE_LOW] + negCount[Ki67Score.FIELD_TYPE_LOW]) > 0) {
            finalScore = finalScore +
                this.pLow / 100 *
                    (posCount[Ki67Score.FIELD_TYPE_LOW] /
                        (posCount[Ki67Score.FIELD_TYPE_LOW] + negCount[Ki67Score.FIELD_TYPE_LOW]));
        }
        if (this.pMed > 0 && (posCount[Ki67Score.FIELD_TYPE_MED] + negCount[Ki67Score.FIELD_TYPE_MED]) > 0) {
            finalScore = finalScore +
                this.pMed / 100 *
                    (posCount[Ki67Score.FIELD_TYPE_MED] /
                        (posCount[Ki67Score.FIELD_TYPE_MED] + negCount[Ki67Score.FIELD_TYPE_MED]));
        }
        if (this.pHigh > 0 && (posCount[Ki67Score.FIELD_TYPE_HIGH] + negCount[Ki67Score.FIELD_TYPE_HIGH]) > 0) {
            finalScore = finalScore +
                this.pHigh / 100 *
                    (posCount[Ki67Score.FIELD_TYPE_HIGH] /
                        (posCount[Ki67Score.FIELD_TYPE_HIGH] + negCount[Ki67Score.FIELD_TYPE_HIGH]));
        }
        return Math.round(finalScore * 1000) / 10;
    };
    Ki67Score.FIELD_TYPE_HIGH = "field_type_high";
    Ki67Score.FIELD_TYPE_MED = "field_type_med";
    Ki67Score.FIELD_TYPE_LOW = "field_type_low";
    Ki67Score.FIELD_TYPE_NEG = "field_type_neg";
    return Ki67Score;
}());
exports.Ki67Score = Ki67Score;
