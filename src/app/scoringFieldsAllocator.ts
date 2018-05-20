/*
 * specific to Ki67-QC phase 3 study ...
 *
 * Allocate scoring fields based on user's estimate of percentage of Ki67 scores
 * across the whole slide
 */

/**
 * allocate scoring regions according to Mitch's algorithm (2014-02-13)
 *
 * For each category of staining for which there is non-zero representation on
 * the full slide, allocate one field for counting. If any of the categories of
 * staining is zero, less than 4 fields will have been allocated and the
 * following should be adhered to complete the selection of fields:
 * - one field left:
 *    - if there are ties between the three non-zero percentages
 *      (e.g. 20% low, 40% medium, 40% high) do not allocate i.e. only pick and
 *      score three fields.
 *    - otherwise allocate this field to the category with the highest percentage.
 * - two fields left
 *    - if the two non-zero percentages are similar i.e. absolute difference
 *      between the two non-zero percentages is less then some threshold, TH
 *      (e.g. 50%) allocate the remaining two fields to the two categories
 *      e.g. 74% low, 26% medium -> 2 fields low, 2 fields medium
 *    - otherwise allocate the remaining two fields to the category with the
 *      highest percentage e.g. 75% low, 25% medium -> 3 fields low, 1 field medium
 * - three fields left.
 *    - allocate all three fields to the single non-zero percentage category.

 *
 * @author samuelc
 */
export class ScoringFieldsAllocator {
	percent_negligible: number;
	percent_low: number;
	percent_medium: number;
	percent_high: number;

	numNegligible: number;
	numLow: number;
	numMedium: number;
	numHigh: number;
/**
 * return TRUE if they are all different
 * false if at least two of them are equal
 */
allDifferent = function(a, b, c) {
	return !(a==b || a==c || b==c);
}

// do nothing
constructor(){}

/**
 * constructor
 *
 * NOTE: assume sum of the percentages is 100
 *
 * @param percent_negligible
 * @param percent_low
 * @param percent_medium
 * @param percent_high
 */
init(
	percent_negligible: number,
	percent_low: number,
	percent_medium: number,
	percent_high: number) {
	this.percent_negligible = percent_negligible;
	this.percent_low = percent_low;
	this.percent_medium = percent_medium;
	this.percent_high = percent_high;

	var THRESHOLD = 25;

	// For each category of staining for which there is non-zero
	// representation on the full slide, allocate one field for counting.
	this.numNegligible = percent_negligible == 0 ? 0 : 1; // number of fields allocated to represent negligible ki67 score
	this.numLow        = percent_low        == 0 ? 0 : 1; // number of fields allocated to represent low ki67 score
	this.numMedium     = percent_medium     == 0 ? 0 : 1; // number of fields allocated to represent medium ki67 score
	this.numHigh       = percent_high       == 0 ? 0 : 1; // number of fields allocated to represent high ki67 score

	// NOTE: INITIAL required number of fields is 4.  The algorithm needs to be changed if the number is not 4.
	var requiredNumFields = 4; // final required fields may be THREE.

	var numFieldsRemaining = requiredNumFields - this.numNegligible - this.numLow - this.numMedium - this.numHigh;

	// If any of the categories of staining is zero, less than 4 fields will
	// have been allocated and the following should be adhered to complete
	// the selection of fields:
	if (numFieldsRemaining == 0) {
		return; // done!
	} else if (numFieldsRemaining == 1) {
		// if one left ...
		// if there are ties between the three non-zero percentages
		//    (e.g. 20% low, 40% medium, 40% high) do not allocate
		//    i.e. only pick and score three fields.
		// otherwise allocate this field to the category with the highest percentage.
		if (percent_high > Math.max(percent_medium, percent_low, percent_negligible) && this.allDifferent(percent_medium, percent_low, percent_negligible)) {
			this.numHigh++;
		} else if (percent_medium > Math.max(percent_high, percent_low, percent_negligible) && this.allDifferent(percent_high, percent_low, percent_negligible)) {
			this.numMedium++;
		} else if (percent_low > Math.max(percent_high, percent_medium, percent_negligible) && this.allDifferent(percent_high, percent_medium, percent_negligible)) {
			this.numLow++;
		} else if (percent_negligible > Math.max(percent_high, percent_medium, percent_low) && this.allDifferent(percent_high, percent_medium, percent_low)) {
			this.numNegligible++;
		} else {
			// there must be a tide ... only pick and score three fields.
		}
	} else if (numFieldsRemaining == 2) {
		// if two left ...
		// - if the two non-zero percentages are similar i.e. absolute
		//   difference between the two non-zero percentages is less then
		//   some threshold, TH (e.g. 50%) allocate the remaining two fields
		//   to the two categories
		//   e.g. 74% low, 26% medium -> 2 fields low, 2 fields medium
		this.numNegligible = this.numNegligible + (this.numNegligible > 0 ? 1 : 0);
		this.numLow        = this.numLow        + (this.numLow        > 0 ? 1 : 0);
		this.numMedium     = this.numMedium     + (this.numMedium     > 0 ? 1 : 0);
		this.numHigh       = this.numHigh       + (this.numHigh       > 0 ? 1 : 0);
		if (Math.max(
				percent_high       == 0 ? 0 : Math.abs(percent_high       - Math.max(percent_medium, percent_low,    percent_negligible)),
				percent_medium     == 0 ? 0 : Math.abs(percent_medium     - Math.max(percent_high,   percent_low,    percent_negligible)),
				percent_low        == 0 ? 0 : Math.abs(percent_low        - Math.max(percent_high,   percent_medium, percent_negligible)),
				percent_negligible == 0 ? 0 : Math.abs(percent_negligible - Math.max(percent_high,   percent_medium, percent_low       ))
		) >= THRESHOLD) {
			// get rid of the one with the min percent ... there must be only one left hence "else if" statements
			if (percent_high !=0 && percent_high < Math.max(percent_medium, percent_low, percent_negligible)) {
				this.numHigh--;
				this.numMedium     = this.numMedium     + (this.numMedium     == 2 ? 1 : 0);
				this.numLow        = this.numLow        + (this.numLow        == 2 ? 1 : 0);
				this.numNegligible = this.numNegligible + (this.numNegligible == 2 ? 1 : 0);
			} else if (percent_medium != 0 && percent_medium < Math.max(percent_high, percent_low, percent_negligible)) {
				this.numMedium--;
				this.numHigh       = this.numHigh       + (this.numHigh       == 2 ? 1 : 0);
				this.numLow        = this.numLow        + (this.numLow        == 2 ? 1 : 0);
				this.numNegligible = this.numNegligible + (this.numNegligible == 2 ? 1 : 0);
			} else if (percent_low != 0 && percent_low < Math.max(percent_high, percent_medium, percent_negligible)) {
				this.numLow--;
				this.numHigh       = this.numHigh       + (this.numHigh       == 2 ? 1 : 0);
				this.numMedium     = this.numMedium     + (this.numMedium     == 2 ? 1 : 0);
				this.numNegligible = this.numNegligible + (this.numNegligible == 2 ? 1 : 0);
			} else {
				this.numNegligible--;
				this.numHigh   = this.numHigh   + (this.numHigh   == 2 ? 1 : 0);
				this.numMedium = this.numMedium + (this.numMedium == 2 ? 1 : 0);
				this.numLow    = this.numLow    + (this.numLow    == 2 ? 1 : 0);
			}
		}
	} else {
		// if three left, assign all three to same group!
		if (this.numNegligible > 0) {
			this.numNegligible = this.numNegligible + 3;
		} else if (this.numLow > 0) {
			this.numLow = this.numLow + 3;
		} else if (this.numMedium > 0) {
			this.numMedium = this.numMedium + 3;
		} else {
			this.numHigh = this.numHigh + 3;
		}
	}
}

/**
 * return number of negligible fields allocated
 */
getNumNegligible() {
	return this.numNegligible;
}

/**
 * return number of low fields allocated
 */
getNumLow() {
	return this.numLow;
}

/**
 * return number of medium fields allocated
 */
getNumMedium() {
	return this.numMedium;
}

/**
 * return number of high fields allocated
 */
getNumHigh() {
	return this.numHigh;
}

}
