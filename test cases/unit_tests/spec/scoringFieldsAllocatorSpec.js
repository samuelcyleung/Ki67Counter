describe("ScoringFieldsAllocator", function() {
   var ScoringFieldsAllocator = require("../lib/scoringFieldsAllocator").ScoringFieldsAllocator
   var scoringFieldsAllocator;
   beforeEach(function() {
 });
  it(" Phase 3A, lab A, case TB016 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 80 , 20 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab A, case TB022 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 50 , 25 , 25 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab A, case TB033 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 80 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab A, case TB036 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 100 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab A, case TB040 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 95 , 0 , 5 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab A, case TB067 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 100 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab A, case TB077 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 80 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab A, case TB082 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 100 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab A, case TB083 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab A, case TB090 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 80 , 20 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab A, case TB105 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 90 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab A, case TB107 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 90 , 10 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab A, case TB112 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 80 , 20 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab A, case TB113 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 90 , 10 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab A, case TB192 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 70 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab A, case TB193 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 80 , 20 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab A, case TB196 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 25 , 75 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab A, case TB203 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 20 , 80 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab A, case TB245 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab A, case TB250 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 70 , 30 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab A, case TB286 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 90 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab A, case TB310 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab A, case TB319 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab A, case TB374 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab A, case TB381 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 30 , 50 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab A, case TB405 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 80 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab A, case TB460 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab A, case TB468 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 30 , 70 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab A, case TB633 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 80 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab A, case TB634 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 80 , 20 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab B, case TB016 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 50 , 50 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab B, case TB022 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 20 , 70 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab B, case TB033 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 80 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab B, case TB036 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 100 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab B, case TB040 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 40 , 60 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab B, case TB067 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 90 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab B, case TB077 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 60 , 40 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab B, case TB082 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 100 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab B, case TB083 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab B, case TB090 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 50 , 25 , 25 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab B, case TB105 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 90 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab B, case TB107 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 50 , 50 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab B, case TB112 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 60 , 20 , 20 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab B, case TB113 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 20 , 80 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab B, case TB192 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 84 , 16 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab B, case TB193 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 85 , 15 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab B, case TB196 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 90 , 10 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab B, case TB203 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab B, case TB245 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab B, case TB250 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 45 , 55 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab B, case TB286 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 90 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab B, case TB310 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab B, case TB319 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 40 , 60 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab B, case TB374 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 95 , 5 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab B, case TB381 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 30 , 60 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab B, case TB405 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 92 , 8 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab B, case TB460 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab B, case TB468 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 80 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab B, case TB633 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 30 , 70 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab B, case TB634 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 75 , 25 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab C, case TB016 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 10 , 20 , 10 , 60 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab C, case TB022 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 16 , 16 , 25 , 43 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab C, case TB033 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 0 , 80 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab C, case TB036 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab C, case TB040 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 33.3 , 66.7 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab C, case TB067 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 14.3 , 0 , 85.7 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab C, case TB077 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 25 , 75 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab C, case TB082 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 8.4 , 91.6 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab C, case TB083 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab C, case TB090 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 80 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab C, case TB105 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 7 , 0 , 93 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab C, case TB107 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab C, case TB112 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 55.6 , 11.1 , 0 , 33.3 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab C, case TB113 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 81.2 , 18.8 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab C, case TB192 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 16.7 , 16.7 , 66.6 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab C, case TB193 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 61.1 , 22.2 , 16.7 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab C, case TB196 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 75 , 25 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab C, case TB203 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab C, case TB245 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab C, case TB250 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 80 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab C, case TB286 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 16.7 , 16.7 , 0 , 66.6 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab C, case TB310 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab C, case TB319 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab C, case TB374 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 86.7 , 13.3 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab C, case TB381 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 40 , 20 , 40 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab C, case TB405 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 60 , 30 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab C, case TB460 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab C, case TB468 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 100 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab C, case TB633 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 70 , 30 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab C, case TB634 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 78.6 , 21.4 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab D, case TB016 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 89 , 11 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab D, case TB022 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 87.5 , 12.5 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab D, case TB033 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 30 , 70 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab D, case TB036 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 100 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab D, case TB040 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab D, case TB067 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 15 , 85 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab D, case TB077 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 0 , 80 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab D, case TB082 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 8.5 , 91.5 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab D, case TB083 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab D, case TB090 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 14.5 , 85.5 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab D, case TB105 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 100 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab D, case TB107 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab D, case TB112 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 40 , 30 , 30 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab D, case TB113 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 85.7 , 14.3 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab D, case TB192 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 100 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab D, case TB193 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 80 , 20 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab D, case TB196 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab D, case TB203 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 50 , 50 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab D, case TB245 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab D, case TB250 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 50 , 50 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab D, case TB286 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 50 , 50 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab D, case TB310 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 15 , 85 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab D, case TB319 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab D, case TB374 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab D, case TB381 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 25 , 25 , 50 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab D, case TB405 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 100 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab D, case TB460 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab D, case TB468 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab D, case TB633 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 75 , 25 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab D, case TB634 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 85 , 15 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab E, case TB016 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 10 , 20 , 60 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab E, case TB022 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 10 , 50 , 30 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab E, case TB033 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 70 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab E, case TB036 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 80 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab E, case TB040 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 10 , 80 , 10 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab E, case TB067 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 80 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab E, case TB077 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 15 , 70 , 15 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab E, case TB082 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 80 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab E, case TB083 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 10 , 20 , 70 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab E, case TB090 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 70 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab E, case TB105 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 90 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab E, case TB107 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 90 , 10 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab E, case TB112 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 20 , 50 , 30 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab E, case TB113 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 10 , 80 , 10 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab E, case TB192 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 80 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab E, case TB193 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 70 , 30 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab E, case TB196 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 20 , 80 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab E, case TB203 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 80 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab E, case TB245 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 20 , 80 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab E, case TB250 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 50 , 50 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab E, case TB286 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 80 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab E, case TB310 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab E, case TB319 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 10 , 90 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab E, case TB374 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 50 , 50 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab E, case TB381 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 40 , 10 , 50 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab E, case TB405 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 90 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab E, case TB460 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab E, case TB468 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 90 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab E, case TB633 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 60 , 40 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab E, case TB634 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 80 , 20 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab F, case TB016 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab F, case TB022 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 60 , 20 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab F, case TB033 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 25 , 63 , 12 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab F, case TB036 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 100 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab F, case TB040 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 33 , 57 , 10 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab F, case TB067 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 5 , 15 , 80 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab F, case TB077 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 85 , 15 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab F, case TB082 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 40 , 60 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab F, case TB083 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 95 , 5 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab F, case TB090 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 30 , 40 , 30 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab F, case TB105 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 50 , 40 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab F, case TB107 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab F, case TB112 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 70 , 28 , 2 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab F, case TB113 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 90 , 10 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab F, case TB192 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 33 , 67 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab F, case TB193 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 50 , 35 , 15 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab F, case TB196 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 20 , 78 , 2 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab F, case TB203 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 2 , 28 , 70 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab F, case TB245 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 40 , 60 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab F, case TB250 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 42 , 43 , 15 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab F, case TB286 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 35 , 65 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab F, case TB310 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 5 , 85 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab F, case TB319 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 10 , 90 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab F, case TB374 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 99 , 1 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab F, case TB381 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 50 , 17 , 33 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab F, case TB405 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 27 , 60 , 13 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab F, case TB460 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 55 , 45 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab F, case TB468 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 11 , 67 , 22 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab F, case TB633 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 67 , 33 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab F, case TB634 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 80 , 20 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab G, case TB016 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 50 , 50 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab G, case TB022 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 40 , 40 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab G, case TB033 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 70 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab G, case TB036 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 100 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab G, case TB040 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 10 , 40 , 40 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab G, case TB067 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 80 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab G, case TB077 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 15 , 60 , 25 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab G, case TB082 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 15 , 70 , 15 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab G, case TB083 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 10 , 70 , 10 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab G, case TB090 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 50 , 40 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab G, case TB105 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 80 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab G, case TB107 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 90 , 0 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab G, case TB112 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 40 , 40 , 10 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab G, case TB113 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 20 , 60 , 0 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab G, case TB192 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 25 , 50 , 25 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab G, case TB193 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 50 , 25 , 25 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab G, case TB196 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 60 , 30 , 0 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab G, case TB203 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 40 , 40 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab G, case TB245 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 50 , 50 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab G, case TB250 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 40 , 40 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab G, case TB286 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 50 , 30 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab G, case TB310 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab G, case TB319 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 20 , 80 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab G, case TB374 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 40 , 50 , 0 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab G, case TB381 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 30 , 40 , 30 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab G, case TB405 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 30 , 40 , 30 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab G, case TB460 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 85 , 15 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab G, case TB468 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 60 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab G, case TB633 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 40 , 60 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab G, case TB634 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 70 , 20 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab H, case TB016 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 30 , 70 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab H, case TB022 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 25 , 50 , 25 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab H, case TB033 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 30 , 60 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab H, case TB036 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 100 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab H, case TB040 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 20 , 60 , 20 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab H, case TB067 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 10 , 90 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab H, case TB077 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 5 , 5 , 90 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab H, case TB082 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 5 , 85 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab H, case TB083 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab H, case TB090 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 20 , 80 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab H, case TB105 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 30 , 70 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab H, case TB107 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 30 , 70 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab H, case TB112 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 50 , 0 , 50 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab H, case TB113 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 50 , 50 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab H, case TB192 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 20 , 70 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab H, case TB193 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 30 , 60 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab H, case TB196 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 40 , 60 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab H, case TB203 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 5 , 0 , 95 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab H, case TB245 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab H, case TB250 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 80 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab H, case TB286 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 80 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab H, case TB310 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab H, case TB319 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 5 , 95 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab H, case TB374 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 80 , 20 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab H, case TB381 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 40 , 50 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab H, case TB405 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 25 , 75 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab H, case TB460 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 5 , 95 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab H, case TB468 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 30 , 70 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab H, case TB633 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 20 , 80 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab H, case TB634 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 60 , 40 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab I, case TB016 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab I, case TB022 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 60 , 20 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab I, case TB033 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 80 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab I, case TB036 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 100 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab I, case TB040 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab I, case TB067 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab I, case TB077 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 80 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab I, case TB082 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 90 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab I, case TB083 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab I, case TB090 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 80 , 20 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab I, case TB105 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 80 , 20 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab I, case TB107 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab I, case TB112 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 50 , 50 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab I, case TB113 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 80 , 20 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab I, case TB192 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 100 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab I, case TB193 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 60 , 40 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab I, case TB196 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab I, case TB203 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab I, case TB245 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab I, case TB250 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 50 , 50 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab I, case TB286 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 40 , 40 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab I, case TB310 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab I, case TB319 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab I, case TB374 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab I, case TB381 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 40 , 0 , 60 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab I, case TB405 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 50 , 50 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab I, case TB460 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab I, case TB468 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 80 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab I, case TB633 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 60 , 40 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab I, case TB634 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 90 , 10 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab J, case TB016 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 30 , 40 , 30 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab J, case TB022 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 30 , 30 , 40 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab J, case TB033 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 20 , 60 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab J, case TB036 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 100 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab J, case TB040 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 40 , 60 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab J, case TB067 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 20 , 80 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab J, case TB077 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 10 , 90 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab J, case TB082 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 10 , 70 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab J, case TB083 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 20 , 70 , 10 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab J, case TB090 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 20 , 70 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab J, case TB105 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 20 , 80 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab J, case TB107 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 20 , 80 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab J, case TB112 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 50 , 10 , 15 , 25 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab J, case TB113 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 50 , 50 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab J, case TB192 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 20 , 60 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab J, case TB193 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 40 , 40 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab J, case TB196 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 40 , 60 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab J, case TB203 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 20 , 70 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab J, case TB245 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 10 , 90 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab J, case TB250 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 30 , 50 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab J, case TB286 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 40 , 50 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab J, case TB310 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 20 , 80 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab J, case TB319 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 20 , 80 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab J, case TB374 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 60 , 40 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab J, case TB381 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 30 , 50 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab J, case TB405 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 20 , 80 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab J, case TB460 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab J, case TB468 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 30 , 50 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab J, case TB633 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 10 , 80 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab J, case TB634 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 80 , 20 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab K, case TB016 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab K, case TB022 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 30 , 40 , 30 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab K, case TB033 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 100 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab K, case TB036 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 100 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab K, case TB040 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 10 , 90 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab K, case TB067 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 10 , 90 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab K, case TB077 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 20 , 80 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab K, case TB082 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 10 , 90 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab K, case TB083 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab K, case TB090 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab K, case TB105 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab K, case TB107 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab K, case TB112 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 15 , 70 , 15 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab K, case TB113 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab K, case TB192 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 60 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab K, case TB193 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 60 , 30 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab K, case TB196 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab K, case TB203 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab K, case TB245 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 30 , 70 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab K, case TB250 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 75 , 25 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab K, case TB286 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 30 , 70 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab K, case TB310 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 5 , 95 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab K, case TB319 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab K, case TB374 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 25 , 75 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab K, case TB381 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 40 , 25 , 35 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab K, case TB405 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 40 , 60 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab K, case TB460 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab K, case TB468 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 50 , 50 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab K, case TB633 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab K, case TB634 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab L, case TB016 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 90 , 10 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab L, case TB022 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 70 , 25 , 5 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab L, case TB033 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 18 , 80 , 2 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab L, case TB036 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 5 , 90 , 5 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab L, case TB040 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 98 , 1 , 1 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab L, case TB067 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 5 , 95 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab L, case TB077 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 5 , 95 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab L, case TB082 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 1 , 94 , 5 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab L, case TB083 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 89 , 10 , 1 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab L, case TB090 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 5 , 85 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab L, case TB105 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 5 , 85 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab L, case TB107 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 5 , 90 , 5 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab L, case TB112 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 80 , 15 , 5 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab L, case TB113 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 80 , 20 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab L, case TB192 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 5 , 85 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab L, case TB193 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 15 , 80 , 5 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab L, case TB196 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 5 , 95 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab L, case TB203 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 1 , 0 , 99 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab L, case TB245 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab L, case TB250 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 15 , 80 , 5 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab L, case TB286 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 5 , 80 , 15 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab L, case TB310 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 15 , 85 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab L, case TB319 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 10 , 90 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab L, case TB374 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 9 , 90 , 0 , 1 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab L, case TB381 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 40 , 40 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab L, case TB405 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 80 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab L, case TB460 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab L, case TB468 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 15 , 80 , 5 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab L, case TB633 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 50 , 50 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab L, case TB634 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 95 , 5 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab M, case TB016 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 80 , 20 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab M, case TB022 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 10 , 0 , 20 , 70 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab M, case TB033 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 85 , 15 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab M, case TB036 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 100 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab M, case TB040 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 30 , 70 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab M, case TB067 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab M, case TB077 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab M, case TB082 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab M, case TB083 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab M, case TB090 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab M, case TB105 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab M, case TB107 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 30 , 70 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab M, case TB112 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 70 , 30 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab M, case TB113 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 80 , 20 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab M, case TB192 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 15 , 0 , 85 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab M, case TB193 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 15 , 85 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab M, case TB196 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 80 , 20 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab M, case TB203 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 10 , 90 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab M, case TB245 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab M, case TB250 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 50 , 50 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab M, case TB286 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 20 , 80 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab M, case TB310 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab M, case TB319 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab M, case TB374 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 90 , 10 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab M, case TB381 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 50 , 50 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab M, case TB405 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 30 , 70 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab M, case TB460 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab M, case TB468 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab M, case TB633 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab M, case TB634 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 20 , 80 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab N, case TB016 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 10 , 70 , 20 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab N, case TB022 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 10 , 40 , 40 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab N, case TB033 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 5 , 15 , 80 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab N, case TB036 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 100 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab N, case TB040 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 50 , 50 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab N, case TB067 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 30 , 60 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab N, case TB077 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 20 , 80 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab N, case TB082 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 100 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab N, case TB083 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab N, case TB090 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 80 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab N, case TB105 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 20 , 80 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab N, case TB107 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab N, case TB112 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 10 , 60 , 30 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab N, case TB113 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 10 , 90 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab N, case TB192 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 30 , 60 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab N, case TB193 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 50 , 50 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab N, case TB196 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 50 , 50 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab N, case TB203 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab N, case TB245 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab N, case TB250 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 100 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab N, case TB286 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 20 , 80 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab N, case TB310 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab N, case TB319 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab N, case TB374 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 80 , 20 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab N, case TB381 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 25 , 75 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab N, case TB405 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 20 , 80 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab N, case TB460 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab N, case TB468 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 100 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab N, case TB633 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab N, case TB634 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 90 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab O, case TB016 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 10 , 90 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab O, case TB022 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 20 , 20 , 60 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab O, case TB033 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 10 , 10 , 80 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab O, case TB036 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab O, case TB040 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 90 , 10 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab O, case TB067 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 90 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab O, case TB077 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 70 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab O, case TB082 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 90 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab O, case TB083 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab O, case TB090 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 70 , 30 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab O, case TB105 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 30 , 60 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab O, case TB107 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 20 , 80 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab O, case TB112 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 60 , 30 , 10 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab O, case TB113 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 80 , 20 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab O, case TB192 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 20 , 50 , 20 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab O, case TB193 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 80 , 20 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab O, case TB196 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 75 , 20 , 5 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab O, case TB203 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 5 , 0 , 95 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab O, case TB245 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 5 , 25 , 70 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab O, case TB250 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 70 , 30 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab O, case TB286 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 25 , 75 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab O, case TB310 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 10 , 90 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab O, case TB319 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 5 , 95 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab O, case TB374 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 80 , 20 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab O, case TB381 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 50 , 10 , 40 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab O, case TB405 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 60 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab O, case TB460 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab O, case TB468 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 5 , 85 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab O, case TB633 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 30 , 70 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab O, case TB634 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 20 , 80 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab P, case TB016 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 80 , 20 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab P, case TB022 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 10 , 60 , 20 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab P, case TB033 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 30 , 70 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab P, case TB036 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 100 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab P, case TB040 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab P, case TB067 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 28.6 , 57.1 , 14.3 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab P, case TB077 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 85 , 15 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab P, case TB082 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 30 , 70 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab P, case TB083 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab P, case TB090 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 50 , 50 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab P, case TB105 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 80 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab P, case TB107 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab P, case TB112 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 20 , 40 , 40 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab P, case TB113 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 10 , 90 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab P, case TB192 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 40 , 40 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab P, case TB193 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 90 , 10 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab P, case TB196 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 90 , 10 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab P, case TB203 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 10 , 70 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab P, case TB245 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 40 , 60 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab P, case TB250 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 50 , 50 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab P, case TB286 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 40 , 40 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab P, case TB310 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 20 , 80 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab P, case TB319 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 10 , 90 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab P, case TB374 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab P, case TB381 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 60 , 10 , 30 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab P, case TB405 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 60 , 30 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab P, case TB460 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab P, case TB468 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 50 , 40 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab P, case TB633 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 50 , 50 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab P, case TB634 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab Q, case TB016 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 80 , 10 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab Q, case TB022 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 70 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab Q, case TB033 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 40 , 40 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab Q, case TB036 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 100 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab Q, case TB040 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 80 , 0 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab Q, case TB067 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 25 , 50 , 25 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab Q, case TB077 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 80 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab Q, case TB082 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 80 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab Q, case TB083 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 20 , 40 , 40 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab Q, case TB090 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 30 , 0 , 70 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab Q, case TB105 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 100 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab Q, case TB107 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 80 , 10 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab Q, case TB112 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 60 , 20 , 0 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab Q, case TB113 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 10 , 10 , 70 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab Q, case TB192 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 40 , 30 , 30 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab Q, case TB193 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 70 , 20 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab Q, case TB196 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 70 , 10 , 10 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab Q, case TB203 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 90 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab Q, case TB245 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 60 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab Q, case TB250 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 60 , 20 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab Q, case TB286 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 60 , 0 , 40 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab Q, case TB310 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 0 , 90 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab Q, case TB319 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 90 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab Q, case TB374 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 90 , 0 , 0 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab Q, case TB381 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 60 , 20 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab Q, case TB405 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 60 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab Q, case TB460 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 90 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab Q, case TB468 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 50 , 50 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab Q, case TB633 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 100 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab Q, case TB634 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 80 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab R, case TB016 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab R, case TB022 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 50 , 30 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab R, case TB033 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 80 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab R, case TB036 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab R, case TB040 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 5 , 95 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab R, case TB067 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 75 , 25 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab R, case TB077 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 18 , 65 , 17 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab R, case TB082 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 80 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab R, case TB083 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab R, case TB090 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 7 , 93 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab R, case TB105 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 100 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab R, case TB107 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab R, case TB112 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab R, case TB113 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab R, case TB192 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 60 , 40 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab R, case TB193 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab R, case TB196 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 7 , 93 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab R, case TB203 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 100 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab R, case TB245 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab R, case TB250 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab R, case TB286 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 75 , 25 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab R, case TB310 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 100 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab R, case TB319 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab R, case TB374 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 75 , 25 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab R, case TB381 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 11 , 22 , 67 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab R, case TB405 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 100 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab R, case TB460 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab R, case TB468 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 100 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab R, case TB633 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 80 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab R, case TB634 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab S, case TB016 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab S, case TB022 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 10 , 60 , 30 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab S, case TB033 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 90 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab S, case TB036 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 100 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab S, case TB040 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab S, case TB067 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 30 , 70 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab S, case TB077 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 40 , 60 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab S, case TB082 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 100 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab S, case TB083 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab S, case TB090 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 30 , 70 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab S, case TB105 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 100 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab S, case TB107 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab S, case TB112 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 90 , 10 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab S, case TB113 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab S, case TB192 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 30 , 70 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab S, case TB193 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 80 , 20 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab S, case TB196 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 20 , 80 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab S, case TB203 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 40 , 60 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab S, case TB245 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab S, case TB250 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 50 , 50 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab S, case TB286 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 40 , 60 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab S, case TB310 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 10 , 90 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab S, case TB319 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab S, case TB374 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 10 , 90 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab S, case TB381 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 40 , 20 , 40 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab S, case TB405 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 70 , 30 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab S, case TB460 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab S, case TB468 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 100 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab S, case TB633 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab S, case TB634 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 50 , 50 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab T, case TB016 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab T, case TB022 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 10 , 10 , 80 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab T, case TB033 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 25 , 75 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab T, case TB036 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 90 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab T, case TB040 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 65 , 35 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab T, case TB067 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 100 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab T, case TB077 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 75 , 25 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab T, case TB082 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 90 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab T, case TB083 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 25 , 60 , 15 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab T, case TB090 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 18 , 2 , 80 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab T, case TB105 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 100 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab T, case TB107 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 5 , 50 , 45 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab T, case TB112 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 40 , 25 , 35 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab T, case TB113 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 35 , 55 , 10 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab T, case TB192 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 3 , 27 , 70 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab T, case TB193 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 55 , 45 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab T, case TB196 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 40 , 45 , 15 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab T, case TB203 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 85 , 15 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab T, case TB245 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 20 , 80 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab T, case TB250 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 20 , 50 , 30 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab T, case TB286 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 35 , 65 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab T, case TB310 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 90 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab T, case TB319 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 70 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab T, case TB374 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 85 , 15 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab T, case TB381 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 50 , 40 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab T, case TB405 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 25 , 65 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab T, case TB460 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab T, case TB468 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 2 , 40 , 48 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab T, case TB633 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 2 , 15 , 83 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab T, case TB634 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 5 , 75 , 20 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab U, case TB016 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab U, case TB022 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 50 , 50 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab U, case TB033 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 80 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab U, case TB036 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab U, case TB040 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 50 , 50 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab U, case TB067 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab U, case TB077 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 25 , 75 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab U, case TB082 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 25 , 75 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab U, case TB083 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 50 , 50 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab U, case TB090 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 50 , 50 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab U, case TB105 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 100 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab U, case TB107 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 25 , 75 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab U, case TB112 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 50 , 50 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab U, case TB113 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 50 , 50 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab U, case TB192 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 25 , 50 , 25 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab U, case TB193 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 50 , 50 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab U, case TB196 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 75 , 25 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab U, case TB203 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 100 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab U, case TB245 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab U, case TB250 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 10 , 70 , 20 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab U, case TB286 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 80 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab U, case TB310 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 100 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab U, case TB319 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 25 , 75 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab U, case TB374 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 80 , 20 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab U, case TB381 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 50 , 50 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab U, case TB405 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 90 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab U, case TB460 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab U, case TB468 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 100 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab U, case TB633 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 25 , 25 , 50 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab U, case TB634 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab V, case TB016 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab V, case TB022 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 30 , 70 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab V, case TB033 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 30 , 70 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab V, case TB036 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 100 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab V, case TB040 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 80 , 20 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab V, case TB067 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 100 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab V, case TB077 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 60 , 40 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab V, case TB082 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 100 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab V, case TB083 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 20 , 80 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab V, case TB090 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 100 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab V, case TB105 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 100 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab V, case TB107 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab V, case TB112 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 50 , 30 , 20 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab V, case TB113 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 30 , 70 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab V, case TB192 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 40 , 60 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab V, case TB193 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 80 , 20 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab V, case TB196 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 40 , 60 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab V, case TB203 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 100 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab V, case TB245 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 30 , 70 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab V, case TB250 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 50 , 50 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab V, case TB286 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 40 , 60 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab V, case TB310 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 100 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab V, case TB319 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 50 , 50 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab V, case TB374 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 95 , 5 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab V, case TB381 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 60 , 40 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab V, case TB405 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 40 , 40 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab V, case TB460 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab V, case TB468 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 100 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab V, case TB633 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 50 , 50 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab V, case TB634 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab E, case TB022 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 30 , 10 , 60 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab E, case TB040 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 90 , 10 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab E, case TB067 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 30 , 50 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab E, case TB077 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 25 , 60 , 15 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab E, case TB083 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 30 , 55 , 15 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab E, case TB090 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 70 , 15 , 15 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab E, case TB196 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 30 , 70 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab E, case TB203 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 30 , 60 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab E, case TB250 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 50 , 30 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab E, case TB381 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 50 , 30 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab E, case KMS8 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 70 , 20 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab E, case KMS18 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 40 , 40 , 10 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab E, case KMS20 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 60 , 30 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab E, case TB016 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 90 , 0 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab E, case TB113 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab E, case KMS2 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 40 , 40 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab E, case KMS3 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 50 , 20 , 30 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab E, case KMS4 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 25 , 60 , 15 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab E, case KMS5 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 50 , 50 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab E, case KMS6 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 70 , 30 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab E, case KMS11 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 60 , 20 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab E, case KMS14 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 60 , 15 , 25 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab E, case KMS15 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 85 , 0 , 15 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab E, case KMS19 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 50 , 30 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab E, case KMS23 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 15 , 75 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab E, case TB036 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 30 , 55 , 15 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab E, case TB107 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 50 , 35 , 15 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab E, case TB319 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 30 , 70 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab E, case KMS13 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 75 , 10 , 15 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab E, case KMS21 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 30 , 20 , 50 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab H, case TB022 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 50 , 30 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab H, case TB040 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 60 , 40 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab H, case TB067 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 45 , 45 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab H, case TB077 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 45 , 45 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab H, case TB083 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 60 , 30 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab H, case TB090 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 80 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab H, case TB196 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 10 , 90 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab H, case TB203 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 70 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab H, case TB250 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 25 , 65 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab H, case TB381 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 50 , 30 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab H, case KMS8 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 80 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab H, case KMS18 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 30 , 20 , 30 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab H, case KMS20 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 70 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab H, case TB016 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 100 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab H, case TB113 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 10 , 10 , 80 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab H, case KMS2 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 25 , 75 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab H, case KMS3 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 70 , 30 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab H, case KMS4 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 60 , 30 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab H, case KMS5 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 80 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab H, case KMS6 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 10 , 40 , 50 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab H, case KMS11 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 30 , 70 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab H, case KMS14 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 10 , 30 , 60 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab H, case KMS15 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 80 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab H, case KMS19 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 20 , 80 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab H, case KMS23 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 40 , 60 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab H, case TB036 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 80 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab H, case TB107 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 20 , 60 , 20 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab H, case TB319 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 10 , 70 , 20 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab H, case KMS13 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 30 , 50 , 20 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab H, case KMS21 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 40 , 60 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab B, case TB022 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 20 , 60 , 20 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab B, case TB040 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 95 , 5 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab B, case TB067 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 20 , 80 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab B, case TB077 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 25 , 50 , 25 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab B, case TB083 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 60 , 30 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab B, case TB090 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 80 , 20 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab B, case TB196 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 100 , 0 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab B, case TB203 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 50 , 25 , 25 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab B, case TB250 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 30 , 60 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab B, case TB381 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 60 , 20 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab B, case KMS8 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 35 , 35 , 30 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab B, case KMS18 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 85 , 0 , 15 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab B, case KMS20 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 30 , 70 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab B, case TB016 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 40 , 60 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab B, case TB113 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 85 , 15 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab B, case KMS2 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 60 , 20 , 20 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab B, case KMS3 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 50 , 50 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab B, case KMS4 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 15 , 55 , 30 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab B, case KMS5 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 50 , 50 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab B, case KMS6 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 60 , 40 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab B, case KMS11 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 30 , 30 , 40 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab B, case KMS14 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 60 , 40 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab B, case KMS15 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 100 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab B, case KMS19 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 10 , 90 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab B, case KMS23 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 60 , 0 , 40 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab B, case TB036 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 20 , 80 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab B, case TB107 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 90 , 10 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab B, case TB319 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab B, case KMS13 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 90 , 10 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab B, case KMS21 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 50 , 20 , 30 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab F, case TB022 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 40 , 40 , 20 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab F, case TB040 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 90 , 10 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab F, case TB067 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 40 , 60 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab F, case TB077 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 30 , 60 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab F, case TB083 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 80 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab F, case TB090 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 40 , 40 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab F, case TB196 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 40 , 50 , 10 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab F, case TB203 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 60 , 30 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab F, case TB250 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 10 , 80 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab F, case TB381 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 30 , 40 , 30 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab F, case KMS8 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 70 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab F, case KMS18 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 55 , 15 , 15 , 15 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab F, case KMS20 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 80 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab F, case TB016 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 100 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab F, case TB113 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab F, case KMS2 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 60 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab F, case KMS3 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 30 , 50 , 20 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab F, case KMS4 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 5 , 15 , 60 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab F, case KMS5 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 60 , 40 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab F, case KMS6 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 5 , 55 , 40 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab F, case KMS11 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 50 , 45 , 5 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab F, case KMS14 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 10 , 10 , 45 , 35 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab F, case KMS15 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 90 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab F, case KMS19 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 15 , 85 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab F, case KMS23 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 50 , 50 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab F, case TB036 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab F, case TB107 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 95 , 5 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab F, case TB319 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 60 , 40 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab F, case KMS13 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 40 , 50 , 10 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab F, case KMS21 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 40 , 45 , 15 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab G, case TB022 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 70 , 30 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab G, case TB040 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 50 , 50 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab G, case TB067 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 40 , 50 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab G, case TB077 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 60 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab G, case TB083 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 75 , 15 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab G, case TB090 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 50 , 50 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab G, case TB196 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 30 , 40 , 30 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab G, case TB203 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 30 , 40 , 30 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab G, case TB250 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 40 , 50 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab G, case TB381 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 30 , 35 , 35 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab G, case KMS8 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 10 , 45 , 45 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab G, case KMS18 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 50 , 20 , 30 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab G, case KMS20 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 30 , 40 , 30 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab G, case TB016 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab G, case TB113 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 60 , 40 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab G, case KMS2 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 40 , 10 , 50 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab G, case KMS3 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 50 , 50 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab G, case KMS4 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 30 , 40 , 30 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab G, case KMS5 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 65 , 15 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab G, case KMS6 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 50 , 30 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab G, case KMS11 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 20 , 30 , 40 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab G, case KMS14 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 30 , 50 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab G, case KMS15 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 80 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab G, case KMS19 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 15 , 15 , 70 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab G, case KMS23 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 50 , 50 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab G, case TB036 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 50 , 50 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab G, case TB107 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 90 , 10 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab G, case TB319 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 40 , 60 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab G, case KMS13 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 90 , 10 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab G, case KMS21 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 50 , 20 , 30 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab V, case TB022 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 80 , 20 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab V, case TB040 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 100 , 0 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab V, case TB067 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 25 , 50 , 25 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab V, case TB077 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 5 , 20 , 55 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab V, case TB083 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 30 , 70 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab V, case TB090 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 85 , 15 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab V, case TB196 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 90 , 10 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab V, case TB203 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 60 , 30 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab V, case TB250 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 70 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab V, case TB381 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 60 , 40 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab V, case KMS8 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 70 , 30 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab V, case KMS18 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 60 , 0 , 20 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab V, case KMS20 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 40 , 50 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab V, case TB016 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 80 , 20 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab V, case TB113 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 50 , 50 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab V, case KMS2 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 40 , 60 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab V, case KMS3 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 80 , 20 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab V, case KMS4 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 30 , 50 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab V, case KMS5 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 30 , 70 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab V, case KMS6 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 20 , 60 , 20 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab V, case KMS11 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 30 , 50 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab V, case KMS14 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 20 , 40 , 40 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab V, case KMS15 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 10 , 40 , 40 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab V, case KMS19 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 30 , 70 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab V, case KMS23 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 40 , 40 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab V, case TB036 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab V, case TB107 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 60 , 40 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab V, case TB319 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 50 , 50 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab V, case KMS13 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 45 , 50 , 5 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab V, case KMS21 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 70 , 30 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab R, case TB022 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab R, case TB040 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 100 , 0 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab R, case TB067 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 25 , 30 , 45 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab R, case TB077 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 25 , 50 , 25 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab R, case TB083 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 55 , 22 , 23 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab R, case TB090 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 63 , 37 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab R, case TB196 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 100 , 0 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab R, case TB203 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 22 , 71 , 7 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab R, case TB250 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 15 , 85 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab R, case TB381 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 67 , 25 , 8 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab R, case KMS8 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 60 , 40 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab R, case KMS18 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 60 , 25 , 10 , 5 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab R, case KMS20 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 100 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab R, case TB016 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab R, case TB113 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 100 , 0 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab R, case KMS2 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab R, case KMS3 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab R, case KMS4 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 25 , 75 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab R, case KMS5 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab R, case KMS6 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 20 , 80 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab R, case KMS11 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 90 , 10 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab R, case KMS14 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 20 , 80 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab R, case KMS15 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 85 , 10 , 5 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab R, case KMS19 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 15 , 85 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab R, case KMS23 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 40 , 60 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab R, case TB036 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 5 , 95 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab R, case TB107 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 35 , 65 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab R, case TB319 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 100 , 0 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab R, case KMS13 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 75 , 25 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab R, case KMS21 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 70 , 30 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab P, case TB022 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 20 , 80 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab P, case TB040 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 100 , 0 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab P, case TB067 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 40 , 40 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab P, case TB077 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 30 , 30 , 30 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab P, case TB083 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 70 , 20 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab P, case TB090 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 50 , 50 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab P, case TB196 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 80 , 20 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab P, case TB203 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 50 , 30 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab P, case TB250 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 60 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab P, case TB381 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 50 , 30 , 20 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab P, case KMS8 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 80 , 20 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab P, case KMS18 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 40 , 40 , 20 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab P, case KMS20 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 60 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab P, case TB016 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 30 , 70 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab P, case TB113 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 30 , 70 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab P, case KMS2 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 80 , 20 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab P, case KMS3 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 40 , 60 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab P, case KMS4 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 70 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab P, case KMS5 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab P, case KMS6 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 20 , 40 , 40 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab P, case KMS11 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 20 , 40 , 40 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab P, case KMS14 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 40 , 30 , 30 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab P, case KMS15 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 10 , 80 , 10 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab P, case KMS19 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 40 , 50 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab P, case KMS23 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 50 , 50 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab P, case TB036 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab P, case TB107 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 80 , 20 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab P, case TB319 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 40 , 60 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab P, case KMS13 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 65 , 30 , 5 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab P, case KMS21 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 50 , 30 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab O, case TB022 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 70 , 30 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab O, case TB040 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 100 , 0 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab O, case TB067 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 30 , 70 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab O, case TB077 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 60 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab O, case TB083 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 10 , 50 , 40 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab O, case TB090 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 80 , 20 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab O, case TB196 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 90 , 10 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab O, case TB203 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 50 , 30 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab O, case TB250 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 20 , 80 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab O, case TB381 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 20 , 60 , 20 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab O, case KMS8 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 90 , 10 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab O, case KMS18 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 60 , 20 , 20 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab O, case KMS20 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 80 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab O, case TB016 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab O, case TB113 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 90 , 10 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab O, case KMS2 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 80 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab O, case KMS3 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 20 , 80 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab O, case KMS4 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 10 , 70 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab O, case KMS5 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 40 , 60 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab O, case KMS6 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 50 , 50 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab O, case KMS11 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 50 , 50 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab O, case KMS14 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 40 , 60 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab O, case KMS15 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 80 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab O, case KMS19 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 30 , 70 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab O, case KMS23 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 40 , 60 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab O, case TB036 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 100 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab O, case TB107 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 30 , 70 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab O, case TB319 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 30 , 70 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab O, case KMS13 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 20 , 60 , 20 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab O, case KMS21 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 80 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab L, case TB022 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 60 , 35 , 5 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab L, case TB040 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 95 , 5 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab L, case TB067 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 60 , 30 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab L, case TB077 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 30 , 50 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab L, case TB083 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 75 , 5 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab L, case TB090 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 60 , 35 , 5 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab L, case TB196 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 5 , 95 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab L, case TB203 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 40 , 50 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab L, case TB250 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 70 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab L, case TB381 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 50 , 45 , 5 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab L, case KMS8 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 95 , 5 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab L, case KMS18 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 10 , 75 , 10 , 5 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab L, case KMS20 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 30 , 65 , 5 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab L, case TB016 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab L, case TB113 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 10 , 90 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab L, case KMS2 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 95 , 5 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab L, case KMS3 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 95 , 5 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab L, case KMS4 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 50 , 40 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab L, case KMS5 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 100 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab L, case KMS6 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 40 , 60 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab L, case KMS11 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 30 , 65 , 5 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab L, case KMS14 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 65 , 30 , 5 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab L, case KMS15 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 95 , 5 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab L, case KMS19 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab L, case KMS23 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 100 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab L, case TB036 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 95 , 5 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab L, case TB107 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab L, case TB319 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 80 , 20 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab L, case KMS13 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 95 , 0 , 5 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab L, case KMS21 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 65 , 30 , 5 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab T, case TB022 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 20 , 80 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab T, case TB040 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 95 , 5 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab T, case TB067 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 5 , 15 , 55 , 25 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab T, case TB077 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 30 , 50 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab T, case TB083 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 10 , 30 , 40 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab T, case TB090 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 75 , 25 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab T, case TB196 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 83 , 17 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab T, case TB203 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 25 , 50 , 25 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab T, case TB250 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 50 , 40 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab T, case TB381 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 5 , 70 , 20 , 5 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab T, case KMS8 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 5 , 60 , 35 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab T, case KMS18 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 35 , 40 , 25 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab T, case KMS20 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 65 , 35 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab T, case TB016 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab T, case TB113 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 60 , 40 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab T, case KMS2 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 70 , 30 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab T, case KMS3 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 25 , 65 , 10 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab T, case KMS4 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 15 , 70 , 15 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab T, case KMS5 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 5 , 95 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab T, case KMS6 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 60 , 40 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab T, case KMS11 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 20 , 50 , 30 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab T, case KMS14 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 80 , 0 , 20 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab T, case KMS15 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 15 , 75 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab T, case KMS19 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 15 , 85 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab T, case KMS23 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 100 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab T, case TB036 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab T, case TB107 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 65 , 35 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab T, case TB319 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 15 , 75 , 10 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab T, case KMS13 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 35 , 50 , 15 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab T, case KMS21 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 80 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab K, case TB022 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 40 , 60 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab K, case TB040 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 90 , 10 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab K, case TB067 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 40 , 60 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab K, case TB077 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 20 , 60 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab K, case TB083 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 40 , 40 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab K, case TB090 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 30 , 50 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab K, case TB196 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab K, case TB203 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 70 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab K, case TB250 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 0 , 90 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab K, case TB381 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 60 , 30 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab K, case KMS8 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 80 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab K, case KMS18 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 30 , 40 , 20 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab K, case KMS20 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 40 , 50 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab K, case TB016 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 70 , 30 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab K, case TB113 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab K, case KMS2 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 30 , 70 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab K, case KMS3 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 80 , 20 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab K, case KMS4 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 5 , 10 , 85 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab K, case KMS5 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 90 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab K, case KMS6 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 60 , 40 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab K, case KMS11 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 60 , 40 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab K, case KMS14 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 60 , 40 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab K, case KMS15 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 80 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab K, case KMS19 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 10 , 90 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab K, case KMS23 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 50 , 50 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab K, case TB036 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 40 , 60 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab K, case TB107 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 90 , 10 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab K, case TB319 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab K, case KMS13 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 90 , 10 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab K, case KMS21 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 60 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab A, case TB022 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 90 , 10 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab A, case TB040 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab A, case TB067 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 50 , 50 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab A, case TB077 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 60 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab A, case TB083 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 70 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab A, case TB090 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 5 , 90 , 5 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab A, case TB196 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 95 , 5 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab A, case TB203 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 90 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab A, case TB250 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 50 , 50 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab A, case TB381 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 80 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab A, case KMS8 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 90 , 10 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab A, case KMS18 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 80 , 0 , 20 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab A, case KMS20 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 95 , 5 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab A, case TB016 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 95 , 5 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab A, case TB113 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab A, case KMS2 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 80 , 20 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab A, case KMS3 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 5 , 55 , 40 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab A, case KMS4 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 60 , 40 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab A, case KMS5 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 80 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab A, case KMS6 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 60 , 40 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab A, case KMS11 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 50 , 50 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab A, case KMS14 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 40 , 60 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab A, case KMS15 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 50 , 50 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab A, case KMS19 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab A, case KMS23 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 50 , 50 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab A, case TB036 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab A, case TB107 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab A, case TB319 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 70 , 30 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab A, case KMS13 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 95 , 5 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab A, case KMS21 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 50 , 50 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab U, case TB022 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab U, case TB040 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 100 , 0 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab U, case TB067 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 30 , 40 , 30 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab U, case TB077 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 30 , 50 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab U, case TB083 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 10 , 30 , 30 , 30 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab U, case TB090 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 20 , 70 , 0 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab U, case TB196 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 100 , 0 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab U, case TB203 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 40 , 40 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab U, case TB250 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 50 , 50 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab U, case TB381 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 10 , 40 , 20 , 30 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab U, case KMS8 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 10 , 20 , 70 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab U, case KMS18 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 40 , 60 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab U, case KMS20 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 50 , 50 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab U, case TB016 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab U, case TB113 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 50 , 50 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab U, case KMS2 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 30 , 30 , 40 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab U, case KMS3 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 30 , 40 , 30 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab U, case KMS4 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 25 , 25 , 50 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab U, case KMS5 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 100 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab U, case KMS6 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 30 , 30 , 40 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab U, case KMS11 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 30 , 40 , 30 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab U, case KMS14 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 30 , 40 , 30 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab U, case KMS15 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 50 , 50 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab U, case KMS19 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab U, case KMS23 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 25 , 25 , 50 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab U, case TB036 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab U, case TB107 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 50 , 50 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab U, case TB319 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 50 , 50 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab U, case KMS13 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 20 , 50 , 30 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab U, case KMS21 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 50 , 50 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab M, case TB022 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 37 , 50 , 13 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab M, case TB040 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 100 , 0 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab M, case TB067 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 14 , 28 , 58 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab M, case TB077 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 14 , 14 , 58 , 14 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab M, case TB083 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 20 , 0 , 70 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab M, case TB090 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 10 , 65 , 25 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab M, case TB196 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 90 , 10 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab M, case TB203 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 50 , 50 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab M, case TB250 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 10 , 90 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab M, case TB381 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 40 , 10 , 50 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab M, case KMS8 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 20 , 70 , 10 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab M, case KMS18 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 40 , 30 , 20 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab M, case KMS20 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 60 , 40 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab M, case TB016 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab M, case TB113 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab M, case KMS2 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 90 , 10 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab M, case KMS3 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 30 , 70 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab M, case KMS4 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 30 , 70 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab M, case KMS5 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 20 , 80 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab M, case KMS6 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 60 , 40 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab M, case KMS11 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 90 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab M, case KMS14 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 80 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab M, case KMS15 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 20 , 80 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab M, case KMS19 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 10 , 90 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab M, case KMS23 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 20 , 80 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab M, case TB036 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 80 , 20 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab M, case TB107 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 40 , 40 , 20 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab M, case TB319 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 30 , 70 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab M, case KMS13 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 30 , 50 , 20 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab M, case KMS21 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 40 , 60 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab I, case TB022 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 20 , 0 , 80 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab I, case TB040 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 90 , 10 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab I, case TB067 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 40 , 50 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab I, case TB077 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 60 , 30 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab I, case TB083 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 60 , 30 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab I, case TB090 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 60 , 30 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab I, case TB196 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab I, case TB203 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 50 , 50 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab I, case TB250 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab I, case TB381 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 30 , 30 , 40 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab I, case KMS8 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 50 , 50 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab I, case KMS18 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 60 , 20 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab I, case KMS20 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 70 , 30 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab I, case TB016 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 100 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab I, case TB113 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 90 , 10 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab I, case KMS2 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 50 , 50 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab I, case KMS3 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 80 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab I, case KMS4 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 20 , 80 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab I, case KMS5 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 80 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab I, case KMS6 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 50 , 50 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab I, case KMS11 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 40 , 60 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab I, case KMS14 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 100 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab I, case KMS15 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 80 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab I, case KMS19 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab I, case KMS23 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 40 , 60 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab I, case TB036 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 30 , 70 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab I, case TB107 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 20 , 80 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab I, case TB319 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 60 , 40 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab I, case KMS13 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 60 , 40 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab I, case KMS21 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 30 , 50 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab D, case TB022 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 90 , 10 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab D, case TB040 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 90 , 10 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab D, case TB067 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 60 , 40 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab D, case TB077 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 10 , 10 , 70 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab D, case TB083 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 80 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab D, case TB090 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 40 , 50 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab D, case TB196 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab D, case TB203 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 80 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab D, case TB250 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 30 , 70 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab D, case TB381 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 75 , 5 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab D, case KMS8 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 50 , 50 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab D, case KMS18 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 25 , 25 , 25 , 25 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab D, case KMS20 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 90 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab D, case TB016 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 66.6666666666667 , 33.3333333333333 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab D, case TB113 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab D, case KMS2 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 60 , 40 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab D, case KMS3 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 70 , 30 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab D, case KMS4 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 40 , 60 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab D, case KMS5 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 40 , 40 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab D, case KMS6 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 15 , 25 , 35 , 25 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab D, case KMS11 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 30 , 30 , 30 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab D, case KMS14 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 30 , 70 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab D, case KMS15 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 50 , 50 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab D, case KMS19 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab D, case KMS23 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 30 , 70 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab D, case TB036 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 75 , 25 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab D, case TB107 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 50 , 50 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab D, case TB319 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 70 , 30 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab D, case KMS13 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 50 , 50 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab D, case KMS21 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 90 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab J, case TB022 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 60 , 20 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab J, case TB040 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 90 , 10 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab J, case TB067 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 30 , 30 , 40 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab J, case TB077 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 40 , 40 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab J, case TB083 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 60 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab J, case TB090 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 60 , 20 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab J, case TB196 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 80 , 10 , 10 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab J, case TB203 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 40 , 40 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab J, case TB250 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 40 , 50 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab J, case TB381 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 50 , 40 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab J, case KMS8 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 40 , 50 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab J, case KMS18 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 70 , 20 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab J, case KMS20 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 40 , 50 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab J, case TB016 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 70 , 30 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab J, case TB113 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 90 , 10 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab J, case KMS2 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 60 , 40 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab J, case KMS3 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 50 , 30 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab J, case KMS4 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 30 , 30 , 40 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab J, case KMS5 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 30 , 40 , 30 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab J, case KMS6 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 20 , 30 , 30 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab J, case KMS11 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 30 , 30 , 30 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab J, case KMS14 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 10 , 30 , 40 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab J, case KMS15 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 40 , 30 , 30 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab J, case KMS19 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 20 , 80 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab J, case KMS23 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 40 , 50 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab J, case TB036 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 20 , 50 , 30 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab J, case TB107 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 70 , 30 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab J, case TB319 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 50 , 50 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab J, case KMS13 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 60 , 20 , 20 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab J, case KMS21 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 40 , 20 , 20 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab S, case TB022 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 50 , 50 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab S, case TB040 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 90 , 10 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab S, case TB067 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 30 , 60 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab S, case TB077 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 20 , 60 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab S, case TB083 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 45 , 45 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab S, case TB090 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 60 , 20 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab S, case TB196 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 90 , 10 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab S, case TB203 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 30 , 40 , 30 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab S, case TB250 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 40 , 50 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab S, case TB381 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 50 , 30 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab S, case KMS8 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 60 , 20 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab S, case KMS18 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 40 , 40 , 10 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab S, case KMS20 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 50 , 40 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab S, case TB016 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 70 , 20 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab S, case TB113 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 80 , 20 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab S, case KMS2 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 60 , 40 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab S, case KMS3 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 80 , 20 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab S, case KMS4 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 40 , 30 , 30 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab S, case KMS5 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 80 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab S, case KMS6 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 40 , 40 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab S, case KMS11 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 50 , 30 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab S, case KMS14 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 60 , 30 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab S, case KMS15 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 40 , 30 , 30 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab S, case KMS19 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 10 , 90 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab S, case KMS23 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 60 , 40 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab S, case TB036 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 90 , 10 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab S, case TB107 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 80 , 20 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab S, case TB319 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab S, case KMS13 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 90 , 10 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab S, case KMS21 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 60 , 40 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab W, case TB022 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 100 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab W, case TB040 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 90 , 5 , 5 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab W, case TB067 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 50 , 50 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab W, case TB077 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 70 , 30 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab W, case TB083 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 90 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab W, case TB090 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 60 , 40 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab W, case TB196 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 25 , 75 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab W, case TB203 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 50 , 50 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab W, case TB250 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 70 , 30 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab W, case TB381 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 30 , 60 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab W, case KMS8 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab W, case KMS18 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 50 , 40 , 10 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab W, case KMS20 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 100 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab W, case TB016 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab W, case TB113 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab W, case KMS2 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 60 , 40 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab W, case KMS3 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab W, case KMS4 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 30 , 70 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab W, case KMS5 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 100 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab W, case KMS6 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 40 , 60 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab W, case KMS11 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 30 , 70 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab W, case KMS14 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 100 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab W, case KMS15 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 60 , 40 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab W, case KMS19 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 30 , 70 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab W, case KMS23 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 60 , 30 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab W, case TB036 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab W, case TB107 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab W, case TB319 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 10 , 90 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab W, case KMS13 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 90 , 10 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab W, case KMS21 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 60 , 40 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab N, case TB022 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab N, case TB040 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 80 , 20 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab N, case TB067 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 30 , 70 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab N, case TB077 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 40 , 50 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab N, case TB083 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 50 , 50 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab N, case TB090 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 70 , 30 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab N, case TB196 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 40 , 60 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab N, case TB203 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 5 , 25 , 70 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab N, case TB250 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 20 , 80 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab N, case TB381 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 30 , 40 , 30 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab N, case KMS8 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 70 , 30 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab N, case KMS18 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 70 , 20 , 10 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab N, case KMS20 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 80 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab N, case TB016 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 20 , 40 , 40 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab N, case TB113 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 30 , 70 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab N, case KMS2 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 20 , 60 , 20 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab N, case KMS3 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab N, case KMS4 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 30 , 60 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab N, case KMS5 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 100 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab N, case KMS6 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 40 , 60 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab N, case KMS11 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 40 , 20 , 40 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab N, case KMS14 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 50 , 40 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab N, case KMS15 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 90 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab N, case KMS19 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab N, case KMS23 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 20 , 80 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab N, case TB036 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab N, case TB107 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 50 , 50 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab N, case TB319 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 10 , 90 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab N, case KMS13 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 10 , 80 , 10 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab N, case KMS21 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 50 , 50 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab Q, case TB022 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab Q, case TB040 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 98 , 2 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab Q, case TB067 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 60 , 40 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab Q, case TB077 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 30 , 65 , 5 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab Q, case TB083 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 80 , 20 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab Q, case TB090 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 70 , 20 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab Q, case TB196 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab Q, case TB203 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 25 , 50 , 25 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab Q, case TB250 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 45 , 45 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab Q, case TB381 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 60 , 30 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab Q, case KMS8 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab Q, case KMS18 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 90 , 5 , 5 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab Q, case KMS20 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 85 , 15 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab Q, case TB016 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab Q, case TB113 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab Q, case KMS2 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab Q, case KMS3 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab Q, case KMS4 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 70 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab Q, case KMS5 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 60 , 40 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab Q, case KMS6 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab Q, case KMS11 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 95 , 5 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab Q, case KMS14 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 80 , 20 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab Q, case KMS15 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 50 , 50 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab Q, case KMS19 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 15 , 85 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab Q, case KMS23 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 65 , 35 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab Q, case TB036 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab Q, case TB107 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab Q, case TB319 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab Q, case KMS13 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab Q, case KMS21 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 90 , 10 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab X, case TB022 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 75 , 15 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab X, case TB040 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 50 , 5 , 40 , 5 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab X, case TB067 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 25 , 0 , 75 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 3 );
   });
  it(" Phase 3A, lab X, case TB077 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 15 , 65 , 20 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab X, case TB083 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 20 , 40 , 40 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab X, case TB090 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 30 , 20 , 50 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab X, case TB196 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 77.2727272727273 , 13.6363636363636 , 4.54545454545454 , 4.54545454545454 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab X, case TB203 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 10 , 80 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab X, case TB250 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 90 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab X, case TB381 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 45 , 45 , 10 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab X, case KMS8 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 90 , 10 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab X, case KMS18 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 75 , 25 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab X, case KMS20 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 100 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab X, case TB016 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab X, case TB113 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab X, case KMS2 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab X, case KMS3 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab X, case KMS4 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 60 , 40 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab X, case KMS5 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 100 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab X, case KMS6 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 65 , 35 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab X, case KMS11 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 70 , 30 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab X, case KMS14 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 90 , 10 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab X, case KMS15 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 5 , 80 , 15 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 1 );
   });
  it(" Phase 3A, lab X, case KMS19 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 0 , 100 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 4 );
   });
  it(" Phase 3A, lab X, case KMS23 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 0 , 50 , 50 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 2 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 2 );
   });
  it(" Phase 3A, lab X, case TB036 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab X, case TB107 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab X, case TB319 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab X, case KMS13 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 100 , 0 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 4 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
  it(" Phase 3A, lab X, case KMS21 ", function() {
     scoringFieldsAllocator = new ScoringFieldsAllocator();
     scoringFieldsAllocator.init( 0 , 75 , 25 , 0 );
     expect(scoringFieldsAllocator.getNumNegligible()).toEqual( 0 );
     expect(scoringFieldsAllocator.getNumLow()).toEqual( 3 );
     expect(scoringFieldsAllocator.getNumMedium()).toEqual( 1 );
     expect(scoringFieldsAllocator.getNumHigh()).toEqual( 0 );
   });
});