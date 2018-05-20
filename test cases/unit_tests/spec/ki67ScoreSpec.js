describe("Ki67Score", function() {
   var Ki67Score = require("../lib/ki67Score").Ki67Score
   var ki67Score;
 
   beforeEach(function() {
 });
it(" Phase 3A, lab A, case TB016 ", function() {
    ki67Score = new Ki67Score( 0 , 80 , 20 , 0 );
 
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 7.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 7.2 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab A, case TB022 ", function() {
    ki67Score = new Ki67Score( 0 , 50 , 25 , 25 );
 
    ki67Score.addField( 71 , 29 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 14 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 11 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab A, case TB033 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 80 , 10 );
 
    ki67Score.addField( 68 , 32 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 19 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 16.9 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab A, case TB036 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 100 , 0 );
 
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 15.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 15.25 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab A, case TB040 ", function() {
    ki67Score = new Ki67Score( 0 , 95 , 0 , 5 );
 
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 2.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 2.416667 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab A, case TB067 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 100 , 0 );
 
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 61 , 39 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 72 , 28 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 75 , 25 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 29.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 29.5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab A, case TB077 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 80 , 20 );
 
    ki67Score.addField( 72 , 28 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 59 , 41 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 68 , 32 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 29.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 29.86667 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab A, case TB082 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 100 , 0 );
 
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 75 , 25 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 17.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 17.25 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab A, case TB083 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 3.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 3.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab A, case TB090 ", function() {
    ki67Score = new Ki67Score( 0 , 80 , 20 , 0 );
 
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 14.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 14.13333 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab A, case TB105 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 90 , 10 );
 
    ki67Score.addField( 72 , 28 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 24.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 24.1 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab A, case TB107 ", function() {
    ki67Score = new Ki67Score( 0 , 90 , 10 , 0 );
 
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 4 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 3.6 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab A, case TB112 ", function() {
    ki67Score = new Ki67Score( 0 , 80 , 20 , 0 );
 
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 7.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 6.733333 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab A, case TB113 ", function() {
    ki67Score = new Ki67Score( 0 , 90 , 10 , 0 );
 
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 7.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 5.5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab A, case TB192 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 70 , 20 );
 
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 9.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 8.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab A, case TB193 ", function() {
    ki67Score = new Ki67Score( 0 , 80 , 20 , 0 );
 
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 7.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 6.8 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab A, case TB196 ", function() {
    ki67Score = new Ki67Score( 25 , 75 , 0 , 0 );
 
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 3.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 3.5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab A, case TB203 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 20 , 80 );
 
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 65 , 35 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 68 , 32 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 28.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 29.26667 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab A, case TB245 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 29 , 71 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 13 , 87 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 67 , 33 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 19 , 81 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 68 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 68 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab A, case TB250 ", function() {
    ki67Score = new Ki67Score( 0 , 70 , 30 , 0 );
 
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 12.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 12.5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab A, case TB286 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 90 , 0 );
 
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 14.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 16.1 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab A, case TB310 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 70 , 30 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 66 , 34 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 64 , 36 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 31.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 31.5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab A, case TB319 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 45 , 55 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 63 , 37 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 67 , 33 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 62 , 38 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 40.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 40.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab A, case TB374 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 2.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 2.5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab A, case TB381 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 30 , 50 );
 
    ki67Score.addField( 56 , 44 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 66 , 34 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 24.6 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab A, case TB405 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 80 , 20 );
 
    ki67Score.addField( 62 , 38 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 75 , 25 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 25.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 24.93333 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab A, case TB460 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 8 , 92 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 13 , 87 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 5 , 95 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 17 , 83 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 89.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 89.25 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab A, case TB468 ", function() {
    ki67Score = new Ki67Score( 0 , 30 , 70 , 0 );
 
    ki67Score.addField( 70 , 30 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 65 , 35 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 72 , 28 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 23.8 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab A, case TB633 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 80 , 20 );
 
    ki67Score.addField( 42 , 58 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 62 , 38 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 63 , 37 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 70 , 30 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 40.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 39.6 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab A, case TB634 ", function() {
    ki67Score = new Ki67Score( 0 , 80 , 20 , 0 );
 
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 7.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 7.733333 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab B, case TB016 ", function() {
    ki67Score = new Ki67Score( 0 , 50 , 50 , 0 );
 
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 9.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 9.5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab B, case TB022 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 20 , 70 );
 
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 71 , 29 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 18.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 22.05 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab B, case TB033 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 80 , 20 );
 
    ki67Score.addField( 72 , 28 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 19.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 18.66667 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab B, case TB036 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 100 , 0 );
 
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 18.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 18.25 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab B, case TB040 ", function() {
    ki67Score = new Ki67Score( 40 , 60 , 0 , 0 );
 
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 4.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 5.1 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab B, case TB067 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 90 , 10 );
 
    ki67Score.addField( 55 , 45 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 70 , 30 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 64 , 36 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 34.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 32.1 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab B, case TB077 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 60 , 40 );
 
    ki67Score.addField( 36 , 64 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 24 , 76 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 59 , 41 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 71 , 29 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 52.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 49 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab B, case TB082 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 100 , 0 );
 
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 22.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 22.5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab B, case TB083 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 5.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 5.25 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab B, case TB090 ", function() {
    ki67Score = new Ki67Score( 0 , 50 , 25 , 25 );
 
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 68 , 32 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 23.66667 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 20.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab B, case TB105 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 90 , 10 );
 
    ki67Score.addField( 57 , 43 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 64 , 36 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 30 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 27.4 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab B, case TB107 ", function() {
    ki67Score = new Ki67Score( 50 , 50 , 0 , 0 );
 
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 7 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 7 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab B, case TB112 ", function() {
    ki67Score = new Ki67Score( 60 , 20 , 20 , 0 );
 
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 10.33333 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 6.6 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab B, case TB113 ", function() {
    ki67Score = new Ki67Score( 20 , 80 , 0 , 0 );
 
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 6 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 6.266667 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab B, case TB192 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 84 , 16 );
 
    ki67Score.addField( 55 , 45 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 75 , 25 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 68 , 32 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 31 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 29.32 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab B, case TB193 ", function() {
    ki67Score = new Ki67Score( 0 , 85 , 15 , 0 );
 
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 11.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 9.816667 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab B, case TB196 ", function() {
    ki67Score = new Ki67Score( 90 , 10 , 0 , 0 );
 
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 5.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 3.7 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab B, case TB203 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 37 , 63 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 53 , 47 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 55 , 45 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 50 , 50 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 51.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 51.25 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab B, case TB245 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 12 , 88 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 13 , 87 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 25 , 75 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 40 , 60 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 77.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 77.5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab B, case TB250 ", function() {
    ki67Score = new Ki67Score( 0 , 45 , 55 , 0 );
 
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 15.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 15.625 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab B, case TB286 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 90 , 0 );
 
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 75 , 25 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 17.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 19.5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab B, case TB310 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 67 , 33 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 53 , 47 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 45 , 55 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 44 , 56 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 47.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 47.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab B, case TB319 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 40 , 60 );
 
    ki67Score.addField( 25 , 75 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 37 , 63 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 30 , 70 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 42 , 58 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 66.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 67 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab B, case TB374 ", function() {
    ki67Score = new Ki67Score( 95 , 5 , 0 , 0 );
 
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 6.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 3.65 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab B, case TB381 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 30 , 60 );
 
    ki67Score.addField( 41 , 59 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 46 , 54 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 69 , 31 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 37.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 43.8 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab B, case TB405 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 92 , 8 );
 
    ki67Score.addField( 31 , 69 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 59 , 41 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 38.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 31.28 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab B, case TB460 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 11 , 89 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 2 , 98 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 7 , 93 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 73.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 73.5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab B, case TB468 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 80 , 0 );
 
    ki67Score.addField( 49 , 51 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 55 , 45 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 49 , 51 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 41 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 42.6 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab B, case TB633 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 30 , 70 );
 
    ki67Score.addField( 38 , 62 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 30 , 70 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 54 , 46 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 62 , 38 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 54 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 52.93333 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab B, case TB634 ", function() {
    ki67Score = new Ki67Score( 75 , 25 , 0 , 0 );
 
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 10.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 10.5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab C, case TB016 ", function() {
    ki67Score = new Ki67Score( 10 , 20 , 10 , 60 );
 
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 13.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 15.4 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab C, case TB022 ", function() {
    ki67Score = new Ki67Score( 16 , 16 , 25 , 43 );
 
    ki67Score.addField( 65 , 35 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 72 , 28 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 22 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 26.05 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab C, case TB033 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 0 , 80 );
 
    ki67Score.addField( 70 , 30 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 72 , 28 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 66 , 34 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 25.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 26.53333 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab C, case TB036 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 20 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 20 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab C, case TB040 ", function() {
    ki67Score = new Ki67Score( 33.3 , 66.7 , 0 , 0 );
 
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 6 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 5.336 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab C, case TB067 ", function() {
    ki67Score = new Ki67Score( 0 , 14.3 , 0 , 85.7 );
 
    ki67Score.addField( 47 , 53 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 55 , 45 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 58 , 42 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 75 , 25 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 41.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 43.56833 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab C, case TB077 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 25 , 75 );
 
    ki67Score.addField( 43 , 57 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 55 , 45 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 34 , 66 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 66 , 34 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 50.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 50.5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab C, case TB082 ", function() {
    ki67Score = new Ki67Score( 0 , 8.4 , 91.6 , 0 );
 
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 75 , 25 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 62 , 38 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 26.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 28.824 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab C, case TB083 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 7.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 7.25 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab C, case TB090 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 80 , 20 );
 
    ki67Score.addField( 63 , 37 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 25.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 24.46667 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab C, case TB105 ", function() {
    ki67Score = new Ki67Score( 0 , 7 , 0 , 93 );
 
    ki67Score.addField( 52 , 48 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 61 , 39 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 63 , 37 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 32.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 38.79 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab C, case TB107 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 6 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 6 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab C, case TB112 ", function() {
    ki67Score = new Ki67Score( 55.6 , 11.1 , 0 , 33.3 );
 
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 8.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 8.992 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab C, case TB113 ", function() {
    ki67Score = new Ki67Score( 81.2 , 18.8 , 0 , 0 );
 
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 4.586667 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab C, case TB192 ", function() {
    ki67Score = new Ki67Score( 0 , 16.7 , 16.7 , 66.6 );
 
    ki67Score.addField( 54 , 46 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 68 , 32 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 31 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 38.485 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab C, case TB193 ", function() {
    ki67Score = new Ki67Score( 0 , 61.1 , 22.2 , 16.7 );
 
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 10.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 8.9755 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab C, case TB196 ", function() {
    ki67Score = new Ki67Score( 75 , 25 , 0 , 0 );
 
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 3.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 3.5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab C, case TB203 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 45 , 55 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 52 , 48 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 48 , 52 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 49 , 51 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 51.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 51.5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab C, case TB245 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 28 , 72 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 39 , 61 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 14 , 86 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 16 , 84 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 75.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 75.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab C, case TB250 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 80 , 20 );
 
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 15.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 15.06667 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab C, case TB286 ", function() {
    ki67Score = new Ki67Score( 16.7 , 16.7 , 0 , 66.6 );
 
    ki67Score.addField( 64 , 36 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 20.33333 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 28.151 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab C, case TB310 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 60 , 40 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 49 , 51 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 54 , 46 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 53 , 47 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 46 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 46 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab C, case TB319 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 52 , 48 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 45 , 55 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 55 , 45 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 53 , 47 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 48.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 48.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab C, case TB374 ", function() {
    ki67Score = new Ki67Score( 86.7 , 13.3 , 0 , 0 );
 
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 3 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 1.908 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab C, case TB381 ", function() {
    ki67Score = new Ki67Score( 0 , 40 , 20 , 40 );
 
    ki67Score.addField( 64 , 36 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 72 , 28 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 28 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 28 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab C, case TB405 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 60 , 30 );
 
    ki67Score.addField( 46 , 54 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 72 , 28 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 30.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 33.3 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab C, case TB460 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 12 , 88 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 15 , 85 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 12 , 88 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 8 , 92 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 88.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 88.25 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab C, case TB468 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 100 , 0 );
 
    ki67Score.addField( 67 , 33 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 65 , 35 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 63 , 37 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 32.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 32.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab C, case TB633 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 70 , 30 );
 
    ki67Score.addField( 43 , 57 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 63 , 37 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 61 , 39 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 67 , 33 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 41.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 42.53333 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab C, case TB634 ", function() {
    ki67Score = new Ki67Score( 0 , 78.6 , 21.4 , 0 );
 
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 12.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 12.14 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab D, case TB016 ", function() {
    ki67Score = new Ki67Score( 0 , 89 , 11 , 0 );
 
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 11 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 10.06667 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab D, case TB022 ", function() {
    ki67Score = new Ki67Score( 0 , 87.5 , 12.5 , 0 );
 
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 8.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 6.458333 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab D, case TB033 ", function() {
    ki67Score = new Ki67Score( 0 , 30 , 70 , 0 );
 
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 72 , 28 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 21 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 20.46667 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab D, case TB036 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 100 , 0 );
 
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 19.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 19.25 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab D, case TB040 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 4 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 4 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab D, case TB067 ", function() {
    ki67Score = new Ki67Score( 0 , 15 , 85 , 0 );
 
    ki67Score.addField( 68 , 32 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 64 , 36 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 27.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 29.01667 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab D, case TB077 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 0 , 80 );
 
    ki67Score.addField( 70 , 30 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 55 , 45 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 61 , 39 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 33.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 34.2 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab D, case TB082 ", function() {
    ki67Score = new Ki67Score( 0 , 8.5 , 91.5 , 0 );
 
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 70 , 30 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 23.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 24.405 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab D, case TB083 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 6.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 6.5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab D, case TB090 ", function() {
    ki67Score = new Ki67Score( 0 , 14.5 , 85.5 , 0 );
 
    ki67Score.addField( 70 , 30 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 58 , 42 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 58 , 42 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 31.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 34.085 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab D, case TB105 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 100 , 0 );
 
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 66 , 34 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 55 , 45 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 31 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 31 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab D, case TB107 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 6.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 6.5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab D, case TB112 ", function() {
    ki67Score = new Ki67Score( 40 , 30 , 30 , 0 );
 
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 9 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 8.1 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab D, case TB113 ", function() {
    ki67Score = new Ki67Score( 0 , 85.7 , 14.3 , 0 );
 
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 12.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 11.145 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab D, case TB192 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 100 , 0 );
 
    ki67Score.addField( 75 , 25 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 75 , 25 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 69 , 31 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 26.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 26.25 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab D, case TB193 ", function() {
    ki67Score = new Ki67Score( 0 , 80 , 20 , 0 );
 
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 12 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 11.33333 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab D, case TB196 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 3.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 3.25 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab D, case TB203 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 50 , 50 );
 
    ki67Score.addField( 59 , 41 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 43 , 57 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 62 , 38 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 53 , 47 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 45.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 45.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab D, case TB245 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 18 , 82 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 37 , 63 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 25 , 75 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 39 , 61 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 70.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 70.25 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab D, case TB250 ", function() {
    ki67Score = new Ki67Score( 0 , 50 , 50 , 0 );
 
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 13 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 13 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab D, case TB286 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 50 , 50 );
 
    ki67Score.addField( 69 , 31 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 68 , 32 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 25.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 25.5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab D, case TB310 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 15 , 85 );
 
    ki67Score.addField( 66 , 34 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 54 , 46 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 50 , 50 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 60 , 40 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 42.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 42.83333 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab D, case TB319 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 34 , 66 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 35 , 65 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 49 , 51 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 47 , 53 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 58.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 58.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab D, case TB374 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 3.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 3.5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab D, case TB381 ", function() {
    ki67Score = new Ki67Score( 0 , 25 , 25 , 50 );
 
    ki67Score.addField( 36 , 64 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 57 , 43 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 42.33333 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 47.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab D, case TB405 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 100 , 0 );
 
    ki67Score.addField( 70 , 30 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 69 , 31 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 63 , 37 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 59 , 41 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 34.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 34.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab D, case TB460 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 2 , 98 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 4 , 96 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 1 , 99 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 6 , 94 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 96.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 96.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab D, case TB468 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 64 , 36 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 62 , 38 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 56 , 44 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 46 , 54 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 43 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 43 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab D, case TB633 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 75 , 25 );
 
    ki67Score.addField( 40 , 60 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 64 , 36 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 56 , 44 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 61 , 39 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 44.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 44.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab D, case TB634 ", function() {
    ki67Score = new Ki67Score( 0 , 85 , 15 , 0 );
 
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 13.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 12.61667 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab E, case TB016 ", function() {
    ki67Score = new Ki67Score( 10 , 20 , 60 , 10 );
 
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 9.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 9.3 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab E, case TB022 ", function() {
    ki67Score = new Ki67Score( 10 , 50 , 30 , 10 );
 
    ki67Score.addField( 57 , 43 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 18 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 14.6 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab E, case TB033 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 70 , 10 );
 
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 71 , 29 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 21.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 21.85 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab E, case TB036 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 80 , 20 );
 
    ki67Score.addField( 72 , 28 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 71 , 29 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 25.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 25.6 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab E, case TB040 ", function() {
    ki67Score = new Ki67Score( 10 , 80 , 10 , 0 );
 
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 9 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 9 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab E, case TB067 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 80 , 10 );
 
    ki67Score.addField( 56 , 44 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 61 , 39 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 33.33333 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 37.3 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab E, case TB077 ", function() {
    ki67Score = new Ki67Score( 0 , 15 , 70 , 15 );
 
    ki67Score.addField( 29 , 71 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 55 , 45 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 62 , 38 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 51.33333 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 47.85 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab E, case TB082 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 80 , 10 );
 
    ki67Score.addField( 75 , 25 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 26 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 26.7 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab E, case TB083 ", function() {
    ki67Score = new Ki67Score( 10 , 20 , 70 , 0 );
 
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 7.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 8.5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab E, case TB090 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 70 , 20 );
 
    ki67Score.addField( 59 , 41 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 61 , 39 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 72 , 28 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 33.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 34.25 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab E, case TB105 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 90 , 10 );
 
    ki67Score.addField( 53 , 47 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 68 , 32 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 46 , 54 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 60 , 40 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 43.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 42.5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab E, case TB107 ", function() {
    ki67Score = new Ki67Score( 0 , 90 , 10 , 0 );
 
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 6.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 5.4 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab E, case TB112 ", function() {
    ki67Score = new Ki67Score( 20 , 50 , 30 , 0 );
 
    ki67Score.addField( 69 , 31 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 8.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 10.3 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab E, case TB113 ", function() {
    ki67Score = new Ki67Score( 10 , 80 , 10 , 0 );
 
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 9.333333 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 11.9 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab E, case TB192 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 80 , 0 );
 
    ki67Score.addField( 62 , 38 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 67 , 33 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 65 , 35 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 28 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 29.46667 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab E, case TB193 ", function() {
    ki67Score = new Ki67Score( 0 , 70 , 30 , 0 );
 
    ki67Score.addField( 71 , 29 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 15 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 15.93333 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab E, case TB196 ", function() {
    ki67Score = new Ki67Score( 20 , 80 , 0 , 0 );
 
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 6 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 6.4 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab E, case TB203 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 80 , 10 );
 
    ki67Score.addField( 52 , 48 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 43 , 57 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 69 , 31 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 45.33333 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 53.5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab E, case TB245 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 20 , 80 );
 
    ki67Score.addField( 21 , 79 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 24 , 76 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 23 , 77 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 39 , 61 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 73.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 74.06667 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab E, case TB250 ", function() {
    ki67Score = new Ki67Score( 0 , 50 , 50 , 0 );
 
    ki67Score.addField( 70 , 30 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 15 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 15 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab E, case TB286 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 80 , 0 );
 
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 20.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 21.4 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab E, case TB310 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 55 , 45 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 60 , 40 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 48 , 52 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 52 , 48 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 46.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 46.25 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab E, case TB319 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 10 , 90 );
 
    ki67Score.addField( 27 , 73 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 46 , 54 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 39 , 61 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 57 , 43 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 57.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 60.7 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab E, case TB374 ", function() {
    ki67Score = new Ki67Score( 50 , 50 , 0 , 0 );
 
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 4.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 4.25 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab E, case TB381 ", function() {
    ki67Score = new Ki67Score( 0 , 40 , 10 , 50 );
 
    ki67Score.addField( 45 , 55 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 46 , 54 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 67 , 33 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 37.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 33.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab E, case TB405 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 90 , 0 );
 
    ki67Score.addField( 62 , 38 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 56 , 44 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 33 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 34.4 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab E, case TB460 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 2 , 98 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 11 , 89 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 9 , 91 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 9 , 91 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 92.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 92.25 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab E, case TB468 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 90 , 0 );
 
    ki67Score.addField( 59 , 41 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 56 , 44 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 49 , 51 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 71 , 29 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 41.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 43.7 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab E, case TB633 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 60 , 40 );
 
    ki67Score.addField( 24 , 76 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 33 , 67 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 53 , 47 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 56 , 44 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 58.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 55.9 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab E, case TB634 ", function() {
    ki67Score = new Ki67Score( 0 , 80 , 20 , 0 );
 
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 12.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 11.93333 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab F, case TB016 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 9.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 9.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab F, case TB022 ", function() {
    ki67Score = new Ki67Score( 0 , 60 , 20 , 20 );
 
    ki67Score.addField( 63 , 37 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 21.66667 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 13.8 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab F, case TB033 ", function() {
    ki67Score = new Ki67Score( 0 , 25 , 63 , 12 );
 
    ki67Score.addField( 70 , 30 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 20 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 19.09 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab F, case TB036 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 100 , 0 );
 
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 16.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 16.25 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab F, case TB040 ", function() {
    ki67Score = new Ki67Score( 33 , 57 , 10 , 0 );
 
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 2.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 1.27 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab F, case TB067 ", function() {
    ki67Score = new Ki67Score( 0 , 5 , 15 , 80 );
 
    ki67Score.addField( 49 , 51 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 56 , 44 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 32.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 42 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab F, case TB077 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 85 , 15 );
 
    ki67Score.addField( 21 , 79 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 71 , 29 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 55 , 45 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 62 , 38 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 47.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 43.58333 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab F, case TB082 ", function() {
    ki67Score = new Ki67Score( 0 , 40 , 60 , 0 );
 
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 15.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 16.7 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab F, case TB083 ", function() {
    ki67Score = new Ki67Score( 0 , 95 , 5 , 0 );
 
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 4.2 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab F, case TB090 ", function() {
    ki67Score = new Ki67Score( 0 , 30 , 40 , 30 );
 
    ki67Score.addField( 67 , 33 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 23.66667 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 23.7 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab F, case TB105 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 50 , 40 );
 
    ki67Score.addField( 66 , 34 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 70 , 30 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 25.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 28.2 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab F, case TB107 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 5.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 5.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab F, case TB112 ", function() {
    ki67Score = new Ki67Score( 0 , 70 , 28 , 2 );
 
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 8.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 3.42 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab F, case TB113 ", function() {
    ki67Score = new Ki67Score( 0 , 90 , 10 , 0 );
 
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 6.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 4.6 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab F, case TB192 ", function() {
    ki67Score = new Ki67Score( 0 , 33 , 67 , 0 );
 
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 12.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 11.71 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab F, case TB193 ", function() {
    ki67Score = new Ki67Score( 0 , 50 , 35 , 15 );
 
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 8 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 7 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab F, case TB196 ", function() {
    ki67Score = new Ki67Score( 20 , 78 , 2 , 0 );
 
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 2.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 0.92 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab F, case TB203 ", function() {
    ki67Score = new Ki67Score( 0 , 2 , 28 , 70 );
 
    ki67Score.addField( 56 , 44 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 60 , 40 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 27.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 35.1 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab F, case TB245 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 40 , 60 );
 
    ki67Score.addField( 3 , 97 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 20 , 80 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 55 , 45 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 40 , 60 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 70.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 74.1 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab F, case TB250 ", function() {
    ki67Score = new Ki67Score( 0 , 42 , 43 , 15 );
 
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 10.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 7.72 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab F, case TB286 ", function() {
    ki67Score = new Ki67Score( 0 , 35 , 65 , 0 );
 
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 16.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 15.63333 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab F, case TB310 ", function() {
    ki67Score = new Ki67Score( 0 , 5 , 85 , 10 );
 
    ki67Score.addField( 47 , 53 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 62 , 38 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 69 , 31 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 34.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 35.425 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab F, case TB319 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 10 , 90 );
 
    ki67Score.addField( 31 , 69 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 44 , 56 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 40 , 60 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 49 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 56.6 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab F, case TB374 ", function() {
    ki67Score = new Ki67Score( 0 , 99 , 1 , 0 );
 
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 3.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 0.78 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab F, case TB381 ", function() {
    ki67Score = new Ki67Score( 0 , 50 , 17 , 33 );
 
    ki67Score.addField( 36 , 64 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 72 , 28 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 25.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 28.38 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab F, case TB405 ", function() {
    ki67Score = new Ki67Score( 0 , 27 , 60 , 13 );
 
    ki67Score.addField( 61 , 39 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 75 , 25 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 23.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 21.09 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab F, case TB460 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 55 , 45 );
 
    ki67Score.addField( 5 , 95 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 4 , 96 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 20 , 80 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 9 , 91 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 90.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 90 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab F, case TB468 ", function() {
    ki67Score = new Ki67Score( 0 , 11 , 67 , 22 );
 
    ki67Score.addField( 72 , 28 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 21 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 21.995 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab F, case TB633 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 67 , 33 );
 
    ki67Score.addField( 35 , 65 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 56 , 44 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 59 , 41 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 44.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 46.46333 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab F, case TB634 ", function() {
    ki67Score = new Ki67Score( 0 , 80 , 20 , 0 );
 
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 8 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 7.6 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab G, case TB016 ", function() {
    ki67Score = new Ki67Score( 0 , 50 , 50 , 0 );
 
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 12.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 12.5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab G, case TB022 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 40 , 40 );
 
    ki67Score.addField( 62 , 38 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 17.66667 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 20.2 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab G, case TB033 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 70 , 10 );
 
    ki67Score.addField( 64 , 36 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 72 , 28 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 22.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 21 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab G, case TB036 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 100 , 0 );
 
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 22.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 22.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab G, case TB040 ", function() {
    ki67Score = new Ki67Score( 10 , 40 , 40 , 10 );
 
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 5.3 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab G, case TB067 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 80 , 10 );
 
    ki67Score.addField( 44 , 56 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 59 , 41 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 41.33333 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 31.3 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab G, case TB077 ", function() {
    ki67Score = new Ki67Score( 0 , 15 , 60 , 25 );
 
    ki67Score.addField( 18 , 82 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 56 , 44 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 38.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 40.9 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab G, case TB082 ", function() {
    ki67Score = new Ki67Score( 0 , 15 , 70 , 15 );
 
    ki67Score.addField( 54 , 46 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 26 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 24.35 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab G, case TB083 ", function() {
    ki67Score = new Ki67Score( 10 , 70 , 10 , 10 );
 
    ki67Score.addField( 75 , 25 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 9.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 6.8 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab G, case TB090 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 50 , 40 );
 
    ki67Score.addField( 55 , 45 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 62 , 38 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 68 , 32 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 30.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 36.2 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab G, case TB105 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 80 , 20 );
 
    ki67Score.addField( 51 , 49 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 71 , 29 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 61 , 39 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 69 , 31 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 37 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 36.2 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab G, case TB107 ", function() {
    ki67Score = new Ki67Score( 0 , 90 , 0 , 10 );
 
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 7.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 7.3 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab G, case TB112 ", function() {
    ki67Score = new Ki67Score( 40 , 40 , 10 , 10 );
 
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 7.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 4.4 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab G, case TB113 ", function() {
    ki67Score = new Ki67Score( 20 , 60 , 0 , 20 );
 
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 7 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 7 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab G, case TB192 ", function() {
    ki67Score = new Ki67Score( 0 , 25 , 50 , 25 );
 
    ki67Score.addField( 63 , 37 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 72 , 28 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 24.66667 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 25.5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab G, case TB193 ", function() {
    ki67Score = new Ki67Score( 0 , 50 , 25 , 25 );
 
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 16.33333 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 13 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab G, case TB196 ", function() {
    ki67Score = new Ki67Score( 60 , 30 , 0 , 10 );
 
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 6 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 3.6 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab G, case TB203 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 40 , 40 );
 
    ki67Score.addField( 36 , 64 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 75 , 25 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 37.33333 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 40.2 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab G, case TB245 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 50 , 50 );
 
    ki67Score.addField( 18 , 82 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 21 , 79 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 42 , 58 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 46 , 54 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 68.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 68.25 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab G, case TB250 ", function() {
    ki67Score = new Ki67Score( 0 , 40 , 40 , 20 );
 
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 12.66667 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 9.8 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab G, case TB286 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 50 , 30 );
 
    ki67Score.addField( 64 , 36 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 72 , 28 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 23.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 24.8 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab G, case TB310 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 55 , 45 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 46 , 54 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 36 , 64 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 43 , 57 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 55 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 55 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab G, case TB319 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 20 , 80 );
 
    ki67Score.addField( 21 , 79 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 40 , 60 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 30 , 70 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 70 , 30 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 59.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 61.73333 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab G, case TB374 ", function() {
    ki67Score = new Ki67Score( 40 , 50 , 0 , 10 );
 
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 6.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 3.35 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab G, case TB381 ", function() {
    ki67Score = new Ki67Score( 0 , 30 , 40 , 30 );
 
    ki67Score.addField( 42 , 58 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 60 , 40 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 38 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 38.2 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab G, case TB405 ", function() {
    ki67Score = new Ki67Score( 0 , 30 , 40 , 30 );
 
    ki67Score.addField( 38 , 62 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 68 , 32 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 35.66667 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 35.3 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab G, case TB460 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 85 , 15 );
 
    ki67Score.addField( 0 , 100 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 3 , 97 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 4 , 96 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 3 , 97 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 97.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 97.16667 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab G, case TB468 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 60 , 20 );
 
    ki67Score.addField( 36 , 64 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 30.66667 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 27.6 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab G, case TB633 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 40 , 60 );
 
    ki67Score.addField( 28 , 72 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 20 , 80 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 75 , 25 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 67 , 33 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 52.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 57.2 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab G, case TB634 ", function() {
    ki67Score = new Ki67Score( 0 , 70 , 20 , 10 );
 
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 13.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 10.95 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab H, case TB016 ", function() {
    ki67Score = new Ki67Score( 0 , 30 , 70 , 0 );
 
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 75 , 25 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 19.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 19.1 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab H, case TB022 ", function() {
    ki67Score = new Ki67Score( 0 , 25 , 50 , 25 );
 
    ki67Score.addField( 63 , 37 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 24.25 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab H, case TB033 ", function() {
    ki67Score = new Ki67Score( 0 , 30 , 60 , 10 );
 
    ki67Score.addField( 63 , 37 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 70 , 30 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 63 , 37 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 29.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 28.3 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab H, case TB036 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 100 , 0 );
 
    ki67Score.addField( 69 , 31 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 71 , 29 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 63 , 37 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 29.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 29.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab H, case TB040 ", function() {
    ki67Score = new Ki67Score( 20 , 60 , 20 , 0 );
 
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 14.66667 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 16.4 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab H, case TB067 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 10 , 90 );
 
    ki67Score.addField( 50 , 50 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 54 , 46 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 47 , 53 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 42 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 46.6 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab H, case TB077 ", function() {
    ki67Score = new Ki67Score( 0 , 5 , 5 , 90 );
 
    ki67Score.addField( 43 , 57 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 75 , 25 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 31.33333 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 53.15 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab H, case TB082 ", function() {
    ki67Score = new Ki67Score( 0 , 5 , 85 , 10 );
 
    ki67Score.addField( 62 , 38 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 69 , 31 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 71 , 29 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 28.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 30.15 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab H, case TB083 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 10.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 10.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab H, case TB090 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 20 , 80 );
 
    ki67Score.addField( 55 , 45 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 60 , 40 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 58 , 42 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 75 , 25 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 38 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 38.86667 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab H, case TB105 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 30 , 70 );
 
    ki67Score.addField( 53 , 47 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 52 , 48 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 56 , 44 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 75 , 25 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 41 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 39.93333 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab H, case TB107 ", function() {
    ki67Score = new Ki67Score( 0 , 30 , 70 , 0 );
 
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 12 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 11.93333 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab H, case TB112 ", function() {
    ki67Score = new Ki67Score( 50 , 0 , 50 , 0 );
 
    ki67Score.addField( 71 , 29 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 15.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 15.5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab H, case TB113 ", function() {
    ki67Score = new Ki67Score( 0 , 50 , 50 , 0 );
 
    ki67Score.addField( 71 , 29 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 18 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 18 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab H, case TB192 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 20 , 70 );
 
    ki67Score.addField( 53 , 47 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 49 , 51 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 33.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 40.2 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab H, case TB193 ", function() {
    ki67Score = new Ki67Score( 0 , 30 , 60 , 10 );
 
    ki67Score.addField( 60 , 40 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 70 , 30 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 26.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 23.8 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab H, case TB196 ", function() {
    ki67Score = new Ki67Score( 40 , 60 , 0 , 0 );
 
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 6.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 7.1 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab H, case TB203 ", function() {
    ki67Score = new Ki67Score( 0 , 5 , 0 , 95 );
 
    ki67Score.addField( 45 , 55 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 41 , 59 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 41 , 59 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 45.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 55.18333 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab H, case TB245 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 21 , 79 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 16 , 84 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 21 , 79 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 41 , 59 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 75.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 75.25 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab H, case TB250 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 80 , 0 );
 
    ki67Score.addField( 72 , 28 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 20.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 21.26667 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab H, case TB286 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 80 , 0 );
 
    ki67Score.addField( 71 , 29 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 23.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 23.93333 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab H, case TB310 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 51 , 49 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 47 , 53 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 46 , 54 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 43 , 57 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 53.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 53.25 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab H, case TB319 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 5 , 95 );
 
    ki67Score.addField( 27 , 73 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 32 , 68 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 39 , 61 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 59 , 41 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 60.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 66.01667 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab H, case TB374 ", function() {
    ki67Score = new Ki67Score( 80 , 20 , 0 , 0 );
 
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 6 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 5.466667 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab H, case TB381 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 40 , 50 );
 
    ki67Score.addField( 41 , 59 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 40 , 60 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 37.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 37.85 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab H, case TB405 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 25 , 75 );
 
    ki67Score.addField( 55 , 45 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 52 , 48 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 47 , 53 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 43.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 43.25 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab H, case TB460 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 5 , 95 );
 
    ki67Score.addField( 12 , 88 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 14 , 86 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 9 , 91 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 57 , 43 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 77 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 86.06667 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab H, case TB468 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 30 , 70 );
 
    ki67Score.addField( 46 , 54 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 42 , 58 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 44 , 56 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 47 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 45.2 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab H, case TB633 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 20 , 80 );
 
    ki67Score.addField( 32 , 68 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 38 , 62 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 39 , 61 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 60 , 40 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 57.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 58.93333 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab H, case TB634 ", function() {
    ki67Score = new Ki67Score( 0 , 60 , 40 , 0 );
 
    ki67Score.addField( 68 , 32 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 67 , 33 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 22.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 20.8 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab I, case TB016 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 9.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 9.25 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab I, case TB022 ", function() {
    ki67Score = new Ki67Score( 0 , 60 , 20 , 20 );
 
    ki67Score.addField( 70 , 30 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 21.33333 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 17.6 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab I, case TB033 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 80 , 0 );
 
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 68 , 32 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 75 , 25 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 17.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 18.13333 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab I, case TB036 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 100 , 0 );
 
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 15.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 15.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab I, case TB040 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 3 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 3 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab I, case TB067 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 64 , 36 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 69 , 31 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 72 , 28 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 69 , 31 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 31.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 31.5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab I, case TB077 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 80 , 20 );
 
    ki67Score.addField( 66 , 34 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 61 , 39 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 50 , 50 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 75 , 25 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 37 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 37.2 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab I, case TB082 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 90 , 0 );
 
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 17 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 18.4 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab I, case TB083 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab I, case TB090 ", function() {
    ki67Score = new Ki67Score( 0 , 80 , 20 , 0 );
 
    ki67Score.addField( 68 , 32 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 71 , 29 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 23.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 22.66667 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab I, case TB105 ", function() {
    ki67Score = new Ki67Score( 0 , 80 , 20 , 0 );
 
    ki67Score.addField( 55 , 45 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 29 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 27.93333 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab I, case TB107 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 6 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 6 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab I, case TB112 ", function() {
    ki67Score = new Ki67Score( 0 , 50 , 50 , 0 );
 
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 11.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 11.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab I, case TB113 ", function() {
    ki67Score = new Ki67Score( 0 , 80 , 20 , 0 );
 
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 9.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 8.6 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab I, case TB192 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 100 , 0 );
 
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 18.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 18.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab I, case TB193 ", function() {
    ki67Score = new Ki67Score( 0 , 60 , 40 , 0 );
 
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 10.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 9 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab I, case TB196 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 3.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 3.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab I, case TB203 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 65 , 35 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 64 , 36 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 62 , 38 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 48 , 52 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 40.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 40.25 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab I, case TB245 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 19 , 81 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 24 , 76 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 33 , 67 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 46 , 54 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 69.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 69.5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab I, case TB250 ", function() {
    ki67Score = new Ki67Score( 0 , 50 , 50 , 0 );
 
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 10.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 10.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab I, case TB286 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 40 , 40 );
 
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 10.66667 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 12 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab I, case TB310 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 59 , 41 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 64 , 36 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 57 , 43 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 56 , 44 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 41 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 41 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab I, case TB319 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 54 , 46 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 51 , 49 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 40 , 60 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 45.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 45.25 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab I, case TB374 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 1.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 1.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab I, case TB381 ", function() {
    ki67Score = new Ki67Score( 0 , 40 , 0 , 60 );
 
    ki67Score.addField( 70 , 30 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 64 , 36 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 22 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 24.2 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab I, case TB405 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 50 , 50 );
 
    ki67Score.addField( 57 , 43 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 66 , 34 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 24.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 24.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab I, case TB460 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 30 , 70 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 9 , 91 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 12 , 88 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 13 , 87 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 84 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 84 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab I, case TB468 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 80 , 20 );
 
    ki67Score.addField( 51 , 49 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 27.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 26.06667 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab I, case TB633 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 60 , 40 );
 
    ki67Score.addField( 62 , 38 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 42 , 58 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 67 , 33 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 55 , 45 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 43.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 42.6 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab I, case TB634 ", function() {
    ki67Score = new Ki67Score( 0 , 90 , 10 , 0 );
 
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 12 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 10.6 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab J, case TB016 ", function() {
    ki67Score = new Ki67Score( 0 , 30 , 40 , 30 );
 
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 15 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 14.6 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab J, case TB022 ", function() {
    ki67Score = new Ki67Score( 0 , 30 , 30 , 40 );
 
    ki67Score.addField( 57 , 43 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 23.66667 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 25.6 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab J, case TB033 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 20 , 60 );
 
    ki67Score.addField( 56 , 44 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 26 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 33.2 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab J, case TB036 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 100 , 0 );
 
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 21 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 21 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab J, case TB040 ", function() {
    ki67Score = new Ki67Score( 40 , 60 , 0 , 0 );
 
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 2 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 2.3 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab J, case TB067 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 20 , 80 );
 
    ki67Score.addField( 46 , 54 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 62 , 38 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 65 , 35 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 34.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 36.06667 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab J, case TB077 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 10 , 90 );
 
    ki67Score.addField( 66 , 34 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 51 , 49 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 42 , 58 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 39.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 44 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab J, case TB082 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 10 , 70 );
 
    ki67Score.addField( 40 , 60 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 60 , 40 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 33.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 39.7 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab J, case TB083 ", function() {
    ki67Score = new Ki67Score( 20 , 70 , 10 , 0 );
 
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 7.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 7.1 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab J, case TB090 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 20 , 70 );
 
    ki67Score.addField( 62 , 38 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 56 , 44 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 27 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 33.2 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab J, case TB105 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 20 , 80 );
 
    ki67Score.addField( 51 , 49 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 50 , 50 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 40 , 60 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 45.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 47.2 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab J, case TB107 ", function() {
    ki67Score = new Ki67Score( 20 , 80 , 0 , 0 );
 
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 9.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 10.26667 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab J, case TB112 ", function() {
    ki67Score = new Ki67Score( 50 , 10 , 15 , 25 );
 
    ki67Score.addField( 70 , 30 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 13.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 10.7 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab J, case TB113 ", function() {
    ki67Score = new Ki67Score( 50 , 50 , 0 , 0 );
 
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab J, case TB192 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 20 , 60 );
 
    ki67Score.addField( 47 , 53 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 24.66667 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 36 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab J, case TB193 ", function() {
    ki67Score = new Ki67Score( 0 , 40 , 40 , 20 );
 
    ki67Score.addField( 67 , 33 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 18.33333 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 15.4 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab J, case TB196 ", function() {
    ki67Score = new Ki67Score( 40 , 60 , 0 , 0 );
 
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 3 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 3.5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab J, case TB203 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 20 , 70 );
 
    ki67Score.addField( 42 , 58 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 43 , 57 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 35.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 45.25 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab J, case TB245 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 10 , 90 );
 
    ki67Score.addField( 21 , 79 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 27 , 73 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 27 , 73 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 56 , 44 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 67.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 71.9 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab J, case TB250 ", function() {
    ki67Score = new Ki67Score( 0 , 30 , 50 , 20 );
 
    ki67Score.addField( 67 , 33 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 18.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 17.55 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab J, case TB286 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 40 , 50 );
 
    ki67Score.addField( 75 , 25 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 62 , 38 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 21.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 23.15 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab J, case TB310 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 20 , 80 );
 
    ki67Score.addField( 50 , 50 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 47 , 53 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 52 , 48 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 42.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 44.06667 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab J, case TB319 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 20 , 80 );
 
    ki67Score.addField( 37 , 63 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 31 , 69 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 34 , 66 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 72 , 28 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 56.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 58.4 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab J, case TB374 ", function() {
    ki67Score = new Ki67Score( 60 , 40 , 0 , 0 );
 
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 2.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 2 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab J, case TB381 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 30 , 50 );
 
    ki67Score.addField( 41 , 59 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 53 , 47 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 33.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 34.6 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab J, case TB405 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 20 , 80 );
 
    ki67Score.addField( 48 , 52 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 58 , 42 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 47 , 53 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 42 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 43.4 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab J, case TB460 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 10 , 90 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 5 , 95 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 2 , 98 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 9 , 91 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 93.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 93.5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab J, case TB468 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 30 , 50 );
 
    ki67Score.addField( 53 , 47 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 53 , 47 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 31.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 32.2 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab J, case TB633 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 10 , 80 );
 
    ki67Score.addField( 47 , 53 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 29.66667 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 46 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab J, case TB634 ", function() {
    ki67Score = new Ki67Score( 0 , 80 , 20 , 0 );
 
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 15 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 14.53333 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab K, case TB016 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 12.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 12.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab K, case TB022 ", function() {
    ki67Score = new Ki67Score( 0 , 30 , 40 , 30 );
 
    ki67Score.addField( 65 , 35 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 19.66667 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 19.8 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab K, case TB033 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 100 , 0 );
 
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 65 , 35 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 28 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 28 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab K, case TB036 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 100 , 0 );
 
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 23.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 23.5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab K, case TB040 ", function() {
    ki67Score = new Ki67Score( 10 , 90 , 0 , 0 );
 
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 6.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 8.1 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab K, case TB067 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 10 , 90 );
 
    ki67Score.addField( 54 , 46 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 62 , 38 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 60 , 40 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 37.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 39.9 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab K, case TB077 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 20 , 80 );
 
    ki67Score.addField( 52 , 48 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 59 , 41 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 44 , 56 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 43 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 44.06667 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab K, case TB082 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 10 , 90 );
 
    ki67Score.addField( 66 , 34 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 56 , 44 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 70 , 30 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 72 , 28 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 34 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 35.2 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab K, case TB083 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 9.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 9.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab K, case TB090 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 61 , 39 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 65 , 35 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 58 , 42 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 62 , 38 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 38.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 38.5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab K, case TB105 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 62 , 38 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 66 , 34 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 61 , 39 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 61 , 39 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 37.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 37.5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab K, case TB107 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 8.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 8.25 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab K, case TB112 ", function() {
    ki67Score = new Ki67Score( 15 , 70 , 15 , 0 );
 
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 9 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 6.8 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab K, case TB113 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 7 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 7 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab K, case TB192 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 60 , 20 );
 
    ki67Score.addField( 71 , 29 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 18.33333 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 19 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab K, case TB193 ", function() {
    ki67Score = new Ki67Score( 0 , 60 , 30 , 10 );
 
    ki67Score.addField( 71 , 29 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 14.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 11.9 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab K, case TB196 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 7.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 7.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab K, case TB203 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 53 , 47 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 58 , 42 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 57 , 43 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 61 , 39 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 42.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 42.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab K, case TB245 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 30 , 70 );
 
    ki67Score.addField( 32 , 68 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 29 , 71 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 40 , 60 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 55 , 45 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 61 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 59.93333 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab K, case TB250 ", function() {
    ki67Score = new Ki67Score( 0 , 75 , 25 , 0 );
 
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 9.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 9.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab K, case TB286 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 30 , 70 );
 
    ki67Score.addField( 65 , 35 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 70 , 30 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 68 , 32 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 29 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 28.33333 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab K, case TB310 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 5 , 95 );
 
    ki67Score.addField( 53 , 47 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 55 , 45 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 68 , 32 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 75 , 25 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 37.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 40.51667 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab K, case TB319 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 64 , 36 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 53 , 47 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 41 , 59 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 40 , 60 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 50.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 50.5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab K, case TB374 ", function() {
    ki67Score = new Ki67Score( 25 , 75 , 0 , 0 );
 
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 4 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 4 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab K, case TB381 ", function() {
    ki67Score = new Ki67Score( 0 , 40 , 25 , 35 );
 
    ki67Score.addField( 48 , 52 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 75 , 25 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 24.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 28.45 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab K, case TB405 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 40 , 60 );
 
    ki67Score.addField( 64 , 36 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 59 , 41 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 29 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 30.9 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab K, case TB460 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 6 , 94 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 11 , 89 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 8 , 92 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 14 , 86 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 90.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 90.25 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab K, case TB468 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 50 , 50 );
 
    ki67Score.addField( 65 , 35 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 65 , 35 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 29.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 29.5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab K, case TB633 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 43 , 57 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 35 , 65 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 44 , 56 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 51 , 49 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 56.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 56.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab K, case TB634 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 12.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 12.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab L, case TB016 ", function() {
    ki67Score = new Ki67Score( 0 , 90 , 10 , 0 );
 
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 72 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 11.51832 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 10.53617 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab L, case TB022 ", function() {
    ki67Score = new Ki67Score( 0 , 70 , 25 , 5 );
 
    ki67Score.addField( 69 , 31 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 68 , 32 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 18.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 13.05 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab L, case TB033 ", function() {
    ki67Score = new Ki67Score( 0 , 18 , 80 , 2 );
 
    ki67Score.addField( 67 , 33 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 70 , 30 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 26 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 25.76 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab L, case TB036 ", function() {
    ki67Score = new Ki67Score( 0 , 5 , 90 , 5 );
 
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 72 , 28 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 31 , 10 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 24.06639 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 27.41951 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab L, case TB040 ", function() {
    ki67Score = new Ki67Score( 0 , 98 , 1 , 1 );
 
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 11.66667 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 1.32 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab L, case TB067 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 5 , 95 );
 
    ki67Score.addField( 62 , 38 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 70 , 30 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 60 , 40 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 32.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 35.25 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab L, case TB077 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 5 , 95 );
 
    ki67Score.addField( 48 , 52 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 70 , 30 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 65 , 35 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 63 , 37 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 38.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 38.9 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab L, case TB082 ", function() {
    ki67Score = new Ki67Score( 0 , 1 , 94 , 5 );
 
    ki67Score.addField( 70 , 30 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 72 , 28 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 67 , 33 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 27.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 30.36 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab L, case TB083 ", function() {
    ki67Score = new Ki67Score( 0 , 89 , 10 , 1 );
 
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 11.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 7.71 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab L, case TB090 ", function() {
    ki67Score = new Ki67Score( 0 , 5 , 85 , 10 );
 
    ki67Score.addField( 62 , 38 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 62 , 38 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 64 , 36 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 67 , 33 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 36.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 36.9 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab L, case TB105 ", function() {
    ki67Score = new Ki67Score( 0 , 5 , 85 , 10 );
 
    ki67Score.addField( 56 , 44 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 57 , 43 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 72 , 28 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 30.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 34.875 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab L, case TB107 ", function() {
    ki67Score = new Ki67Score( 0 , 5 , 90 , 5 );
 
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 13.33333 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 10.5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab L, case TB112 ", function() {
    ki67Score = new Ki67Score( 0 , 80 , 15 , 5 );
 
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 12 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 8 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab L, case TB113 ", function() {
    ki67Score = new Ki67Score( 0 , 80 , 20 , 0 );
 
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 9.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 9.933333 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab L, case TB192 ", function() {
    ki67Score = new Ki67Score( 0 , 5 , 85 , 10 );
 
    ki67Score.addField( 57 , 43 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 69 , 31 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 27.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 29.075 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab L, case TB193 ", function() {
    ki67Score = new Ki67Score( 0 , 15 , 80 , 5 );
 
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 12.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 11.9 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab L, case TB196 ", function() {
    ki67Score = new Ki67Score( 5 , 95 , 0 , 0 );
 
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 4.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 5.7 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab L, case TB203 ", function() {
    ki67Score = new Ki67Score( 0 , 1 , 0 , 99 );
 
    ki67Score.addField( 54 , 46 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 57 , 43 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 31.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 38.37 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab L, case TB245 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 24 , 76 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 33 , 67 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 60 , 40 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 51 , 49 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 58 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 58 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab L, case TB250 ", function() {
    ki67Score = new Ki67Score( 0 , 15 , 80 , 5 );
 
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 15.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 16.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab L, case TB286 ", function() {
    ki67Score = new Ki67Score( 0 , 5 , 80 , 15 );
 
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 72 , 28 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 20 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 23.55 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab L, case TB310 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 15 , 85 );
 
    ki67Score.addField( 56 , 44 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 64 , 36 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 55 , 45 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 36.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 38.41667 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab L, case TB319 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 10 , 90 );
 
    ki67Score.addField( 47 , 53 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 63 , 37 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 53 , 47 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 68 , 32 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 42.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 44.3 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab L, case TB374 ", function() {
    ki67Score = new Ki67Score( 9 , 90 , 0 , 1 );
 
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 4 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 4.56 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab L, case TB381 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 40 , 40 );
 
    ki67Score.addField( 65 , 35 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 67 , 33 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 27.33333 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 30 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab L, case TB405 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 80 , 20 );
 
    ki67Score.addField( 51 , 49 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 63 , 37 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 68 , 32 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 68 , 32 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 37.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 36.73333 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab L, case TB460 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 19 , 81 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 25 , 75 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 21 , 79 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 7 , 93 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 82 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 82 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab L, case TB468 ", function() {
    ki67Score = new Ki67Score( 0 , 15 , 80 , 5 );
 
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 75 , 25 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 64 , 36 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 24.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 27.2 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab L, case TB633 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 50 , 50 );
 
    ki67Score.addField( 37 , 63 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 44 , 56 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 58 , 42 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 57 , 43 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 51 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 51 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab L, case TB634 ", function() {
    ki67Score = new Ki67Score( 0 , 95 , 5 , 0 );
 
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 9.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 9.316667 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab M, case TB016 ", function() {
    ki67Score = new Ki67Score( 0 , 80 , 20 , 0 );
 
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 13.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 12.86667 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab M, case TB022 ", function() {
    ki67Score = new Ki67Score( 10 , 0 , 20 , 70 );
 
    ki67Score.addField( 53 , 47 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 48 , 52 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 30 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 38.15 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab M, case TB033 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 85 , 15 );
 
    ki67Score.addField( 54 , 46 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 28.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 26.16667 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab M, case TB036 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 100 , 0 );
 
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 25 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab M, case TB040 ", function() {
    ki67Score = new Ki67Score( 30 , 70 , 0 , 0 );
 
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 9 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 8.6 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab M, case TB067 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 45 , 55 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 52 , 48 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 46 , 54 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 38 , 62 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 54.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 54.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab M, case TB077 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 44 , 56 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 25 , 75 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 47 , 53 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 14 , 86 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 67.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 67.5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab M, case TB082 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 66 , 34 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 52 , 48 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 65 , 35 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 62 , 38 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 38.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 38.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab M, case TB083 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 12 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 12 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab M, case TB090 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 48 , 52 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 59 , 41 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 55 , 45 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 64 , 36 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 43.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 43.5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab M, case TB105 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 56 , 44 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 57 , 43 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 62 , 38 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 66 , 34 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 39.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 39.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab M, case TB107 ", function() {
    ki67Score = new Ki67Score( 30 , 70 , 0 , 0 );
 
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 12 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 11.46667 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab M, case TB112 ", function() {
    ki67Score = new Ki67Score( 70 , 30 , 0 , 0 );
 
    ki67Score.addField( 72 , 28 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 7.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 9.1 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab M, case TB113 ", function() {
    ki67Score = new Ki67Score( 80 , 20 , 0 , 0 );
 
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 9 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 8.533333 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab M, case TB192 ", function() {
    ki67Score = new Ki67Score( 15 , 0 , 85 , 0 );
 
    ki67Score.addField( 66 , 34 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 71 , 29 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 21.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 23.96667 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab M, case TB193 ", function() {
    ki67Score = new Ki67Score( 15 , 85 , 0 , 0 );
 
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 15 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 16.33333 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab M, case TB196 ", function() {
    ki67Score = new Ki67Score( 80 , 20 , 0 , 0 );
 
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 4.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 3.866667 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab M, case TB203 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 10 , 90 );
 
    ki67Score.addField( 59 , 41 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 68 , 32 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 55 , 45 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 75 , 25 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 35.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 37.9 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab M, case TB245 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 10 , 90 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 28 , 72 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 18 , 82 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 36 , 64 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 77 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 77 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab M, case TB250 ", function() {
    ki67Score = new Ki67Score( 0 , 50 , 50 , 0 );
 
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 15.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 15.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab M, case TB286 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 20 , 80 );
 
    ki67Score.addField( 54 , 46 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 28 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 29.06667 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab M, case TB310 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 50 , 50 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 56 , 44 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 54 , 46 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 54 , 46 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 46.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 46.5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab M, case TB319 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 41 , 59 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 32 , 68 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 39 , 61 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 21 , 79 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 66.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 66.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab M, case TB374 ", function() {
    ki67Score = new Ki67Score( 90 , 10 , 0 , 0 );
 
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 3.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 1.9 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab M, case TB381 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 50 , 50 );
 
    ki67Score.addField( 43 , 57 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 49 , 51 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 33.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 33.25 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab M, case TB405 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 30 , 70 );
 
    ki67Score.addField( 62 , 38 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 51 , 49 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 54 , 46 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 38.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 37.33333 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab M, case TB460 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 3 , 97 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 5 , 95 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 8 , 92 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 5 , 95 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 94.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 94.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab M, case TB468 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 68 , 32 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 60 , 40 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 68 , 32 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 61 , 39 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 35.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 35.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab M, case TB633 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 53 , 47 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 39 , 61 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 32 , 68 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 42 , 58 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 58.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 58.5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab M, case TB634 ", function() {
    ki67Score = new Ki67Score( 20 , 80 , 0 , 0 );
 
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 75 , 25 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 18.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 19.73333 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab N, case TB016 ", function() {
    ki67Score = new Ki67Score( 10 , 70 , 20 , 0 );
 
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 6.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 7.15 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab N, case TB022 ", function() {
    ki67Score = new Ki67Score( 10 , 40 , 40 , 10 );
 
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 12.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 13.2 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab N, case TB033 ", function() {
    ki67Score = new Ki67Score( 5 , 15 , 80 , 0 );
 
    ki67Score.addField( 69 , 31 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 17.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 24.5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab N, case TB036 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 100 , 0 );
 
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 19.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 19.25 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab N, case TB040 ", function() {
    ki67Score = new Ki67Score( 50 , 50 , 0 , 0 );
 
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 3.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 3.5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab N, case TB067 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 30 , 60 );
 
    ki67Score.addField( 46 , 54 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 49 , 51 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 70 , 30 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 38 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 42.2 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab N, case TB077 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 20 , 80 );
 
    ki67Score.addField( 35 , 65 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 27 , 73 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 29 , 71 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 59 , 41 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 62.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 63.93333 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab N, case TB082 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 100 , 0 );
 
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 75 , 25 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 22.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 22.25 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab N, case TB083 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 5.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 5.25 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab N, case TB090 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 80 , 0 );
 
    ki67Score.addField( 68 , 32 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 63 , 37 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 27 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 27.93333 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab N, case TB105 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 20 , 80 );
 
    ki67Score.addField( 67 , 33 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 61 , 39 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 59 , 41 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 71 , 29 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 35.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 35.93333 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab N, case TB107 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 8.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 8.5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab N, case TB112 ", function() {
    ki67Score = new Ki67Score( 10 , 60 , 30 , 0 );
 
    ki67Score.addField( 71 , 29 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 14.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 16.4 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab N, case TB113 ", function() {
    ki67Score = new Ki67Score( 10 , 90 , 0 , 0 );
 
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 8.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 9.3 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab N, case TB192 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 30 , 60 );
 
    ki67Score.addField( 49 , 51 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 49 , 51 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 67 , 33 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 37.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 41.9 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab N, case TB193 ", function() {
    ki67Score = new Ki67Score( 0 , 50 , 50 , 0 );
 
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 15.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 15.25 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab N, case TB196 ", function() {
    ki67Score = new Ki67Score( 50 , 50 , 0 , 0 );
 
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 5.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 5.5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab N, case TB203 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 39 , 61 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 30 , 70 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 26 , 74 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 48 , 52 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 64.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 64.25 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab N, case TB245 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 24 , 76 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 30 , 70 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 7 , 93 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 7 , 93 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 83 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 83 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab N, case TB250 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 100 , 0 );
 
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 72 , 28 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 20.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 20.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab N, case TB286 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 20 , 80 );
 
    ki67Score.addField( 17 , 83 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 29 , 71 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 37 , 63 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 70 , 30 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 61.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 63.86667 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab N, case TB310 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 14 , 86 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 24 , 76 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 14 , 86 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 8 , 92 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 85 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 85 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab N, case TB319 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 19 , 81 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 12 , 88 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 23 , 77 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 16 , 84 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 82.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 82.5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab N, case TB374 ", function() {
    ki67Score = new Ki67Score( 80 , 20 , 0 , 0 );
 
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 4 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 3.666667 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab N, case TB381 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 25 , 75 );
 
    ki67Score.addField( 15 , 85 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 12 , 88 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 30 , 70 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 67.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 67.25 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab N, case TB405 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 20 , 80 );
 
    ki67Score.addField( 20 , 80 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 30 , 70 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 31 , 69 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 63 , 37 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 64 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 65.8 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab N, case TB460 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 7 , 93 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 6 , 94 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 6 , 94 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 5 , 95 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 94 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 94 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab N, case TB468 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 100 , 0 );
 
    ki67Score.addField( 51 , 49 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 56 , 44 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 59 , 41 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 57 , 43 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 44.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 44.25 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab N, case TB633 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 10 , 90 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 8 , 92 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 9 , 91 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 14 , 86 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 89.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 89.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab N, case TB634 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 90 , 0 );
 
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 65 , 35 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 58 , 42 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 28 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 31.8 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab O, case TB016 ", function() {
    ki67Score = new Ki67Score( 10 , 90 , 0 , 0 );
 
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 8.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 9.9 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab O, case TB022 ", function() {
    ki67Score = new Ki67Score( 20 , 20 , 60 , 0 );
 
    ki67Score.addField( 64 , 36 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 15.66667 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 23.8 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab O, case TB033 ", function() {
    ki67Score = new Ki67Score( 10 , 10 , 80 , 0 );
 
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 9.666667 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 14.8 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab O, case TB036 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 16 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 16 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab O, case TB040 ", function() {
    ki67Score = new Ki67Score( 90 , 10 , 0 , 0 );
 
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 5.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 4.5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab O, case TB067 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 90 , 0 );
 
    ki67Score.addField( 64 , 36 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 69 , 31 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 55 , 45 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 31.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 35.1 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab O, case TB077 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 70 , 20 );
 
    ki67Score.addField( 37 , 63 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 70 , 30 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 33 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 32.5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab O, case TB082 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 90 , 0 );
 
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 75 , 25 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 22 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 23 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab O, case TB083 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 8 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 8 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab O, case TB090 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 70 , 30 );
 
    ki67Score.addField( 54 , 46 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 75 , 25 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 72 , 28 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 29.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 30.83333 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab O, case TB105 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 30 , 60 );
 
    ki67Score.addField( 58 , 42 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 55 , 45 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 33.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 36.3 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab O, case TB107 ", function() {
    ki67Score = new Ki67Score( 20 , 80 , 0 , 0 );
 
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 13.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 14.2 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab O, case TB112 ", function() {
    ki67Score = new Ki67Score( 60 , 30 , 10 , 0 );
 
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 8.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab O, case TB113 ", function() {
    ki67Score = new Ki67Score( 80 , 20 , 0 , 0 );
 
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 4.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 4.333333 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab O, case TB192 ", function() {
    ki67Score = new Ki67Score( 20 , 50 , 20 , 10 );
 
    ki67Score.addField( 61 , 39 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 17 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 11.8 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab O, case TB193 ", function() {
    ki67Score = new Ki67Score( 0 , 80 , 20 , 0 );
 
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 7.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 7 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab O, case TB196 ", function() {
    ki67Score = new Ki67Score( 75 , 20 , 5 , 0 );
 
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 8.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 3.675 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab O, case TB203 ", function() {
    ki67Score = new Ki67Score( 5 , 0 , 95 , 0 );
 
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 70 , 30 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 21.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 26.65 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab O, case TB245 ", function() {
    ki67Score = new Ki67Score( 0 , 5 , 25 , 70 );
 
    ki67Score.addField( 20 , 80 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 26 , 74 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 62 , 38 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 53.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 64.55 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab O, case TB250 ", function() {
    ki67Score = new Ki67Score( 0 , 70 , 30 , 0 );
 
    ki67Score.addField( 68 , 32 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 14 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 15.2 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab O, case TB286 ", function() {
    ki67Score = new Ki67Score( 0 , 25 , 75 , 0 );
 
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 68 , 32 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 71 , 29 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 24 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 24 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab O, case TB310 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 10 , 90 );
 
    ki67Score.addField( 58 , 42 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 62 , 38 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 50 , 50 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 36.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 40.5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab O, case TB319 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 5 , 95 );
 
    ki67Score.addField( 42 , 58 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 57 , 43 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 46 , 54 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 44 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 50.13333 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab O, case TB374 ", function() {
    ki67Score = new Ki67Score( 80 , 20 , 0 , 0 );
 
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 4.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 4.266667 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab O, case TB381 ", function() {
    ki67Score = new Ki67Score( 0 , 50 , 10 , 40 );
 
    ki67Score.addField( 46 , 54 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 22.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 27.15 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab O, case TB405 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 60 , 20 );
 
    ki67Score.addField( 47 , 53 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 32 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 28.8 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab O, case TB460 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 14 , 86 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 9 , 91 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 16 , 84 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 16 , 84 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 86.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 86.25 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab O, case TB468 ", function() {
    ki67Score = new Ki67Score( 0 , 5 , 85 , 10 );
 
    ki67Score.addField( 52 , 48 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 64 , 36 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 69 , 31 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 32.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 34.025 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab O, case TB633 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 30 , 70 );
 
    ki67Score.addField( 54 , 46 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 43 , 57 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 49 , 51 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 67 , 33 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 46.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 45.83333 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab O, case TB634 ", function() {
    ki67Score = new Ki67Score( 20 , 80 , 0 , 0 );
 
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 9.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 9.666667 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab P, case TB016 ", function() {
    ki67Score = new Ki67Score( 0 , 80 , 20 , 0 );
 
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 50 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 9.887006 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 9.414173 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab P, case TB022 ", function() {
    ki67Score = new Ki67Score( 10 , 60 , 20 , 10 );
 
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 16.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 15.3 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab P, case TB033 ", function() {
    ki67Score = new Ki67Score( 0 , 30 , 70 , 0 );
 
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 70 , 30 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 20 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 19.4 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab P, case TB036 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 100 , 0 );
 
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 12.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 12.5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab P, case TB040 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 8.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 8.25 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab P, case TB067 ", function() {
    ki67Score = new Ki67Score( 0 , 28.6 , 57.1 , 14.3 );
 
    ki67Score.addField( 60 , 40 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 69 , 31 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 27 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 25.142 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab P, case TB077 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 85 , 15 );
 
    ki67Score.addField( 36 , 64 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 70 , 30 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 61 , 39 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 38 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 34.53333 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab P, case TB082 ", function() {
    ki67Score = new Ki67Score( 0 , 30 , 70 , 0 );
 
    ki67Score.addField( 69 , 31 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 23.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 23.1 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab P, case TB083 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 7 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 7 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab P, case TB090 ", function() {
    ki67Score = new Ki67Score( 0 , 50 , 50 , 0 );
 
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 72 , 28 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 16 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 16 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab P, case TB105 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 80 , 0 );
 
    ki67Score.addField( 61 , 39 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 60 , 40 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 69 , 31 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 32.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 33.13333 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab P, case TB107 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 6.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 6.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab P, case TB112 ", function() {
    ki67Score = new Ki67Score( 20 , 40 , 40 , 0 );
 
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 8 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 9.6 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab P, case TB113 ", function() {
    ki67Score = new Ki67Score( 10 , 90 , 0 , 0 );
 
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 8 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 9.6 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab P, case TB192 ", function() {
    ki67Score = new Ki67Score( 0 , 40 , 40 , 20 );
 
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 17.33333 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 16.2 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab P, case TB193 ", function() {
    ki67Score = new Ki67Score( 0 , 90 , 10 , 0 );
 
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 8.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 7.3 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab P, case TB196 ", function() {
    ki67Score = new Ki67Score( 0 , 90 , 10 , 0 );
 
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 6 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 4.6 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab P, case TB203 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 10 , 70 );
 
    ki67Score.addField( 75 , 25 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 70 , 30 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 22 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 23.95 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab P, case TB245 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 40 , 60 );
 
    ki67Score.addField( 23 , 77 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 21 , 79 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 29 , 71 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 64 , 36 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 65.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 68.2 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab P, case TB250 ", function() {
    ki67Score = new Ki67Score( 0 , 50 , 50 , 0 );
 
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 14.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 14.25 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab P, case TB286 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 40 , 40 );
 
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 16 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 16.6 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab P, case TB310 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 20 , 80 );
 
    ki67Score.addField( 71 , 29 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 70 , 30 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 70 , 30 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 27.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 28.13333 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab P, case TB319 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 10 , 90 );
 
    ki67Score.addField( 47 , 53 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 44 , 56 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 48 , 52 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 71 , 29 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 47.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 51.2 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab P, case TB374 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 4.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 4.25 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab P, case TB381 ", function() {
    ki67Score = new Ki67Score( 0 , 60 , 10 , 30 );
 
    ki67Score.addField( 31 , 69 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 64 , 36 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 31.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 30.3 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab P, case TB405 ", function() {
    ki67Score = new Ki67Score( 0 , 60 , 30 , 10 );
 
    ki67Score.addField( 67 , 33 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 67 , 33 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 22.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 20.1 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab P, case TB460 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 19 , 81 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 6 , 94 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 9 , 91 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 10 , 90 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 89 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 89 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab P, case TB468 ", function() {
    ki67Score = new Ki67Score( 0 , 50 , 40 , 10 );
 
    ki67Score.addField( 53 , 47 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 62 , 38 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 32 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 28.85 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab P, case TB633 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 50 , 50 );
 
    ki67Score.addField( 55 , 45 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 46 , 54 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 69 , 31 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 57 , 43 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 43.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 43.25 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab P, case TB634 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 11.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 11.5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab Q, case TB016 ", function() {
    ki67Score = new Ki67Score( 0 , 80 , 10 , 10 );
 
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 8 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 5.2 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab Q, case TB022 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 70 , 20 );
 
    ki67Score.addField( 60 , 40 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 21.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 23.45 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab Q, case TB033 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 40 , 40 );
 
    ki67Score.addField( 64 , 36 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 22 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 24.4 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab Q, case TB036 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 100 , 0 );
 
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 17.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 17.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab Q, case TB040 ", function() {
    ki67Score = new Ki67Score( 0 , 80 , 0 , 20 );
 
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 5.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab Q, case TB067 ", function() {
    ki67Score = new Ki67Score( 0 , 25 , 50 , 25 );
 
    ki67Score.addField( 69 , 31 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 70 , 30 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 25.66667 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 26.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab Q, case TB077 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 80 , 10 );
 
    ki67Score.addField( 42 , 58 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 71 , 29 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 32 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 29.9 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab Q, case TB082 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 80 , 10 );
 
    ki67Score.addField( 63 , 37 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 20 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 17.2 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab Q, case TB083 ", function() {
    ki67Score = new Ki67Score( 20 , 40 , 40 , 0 );
 
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 5.6 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab Q, case TB090 ", function() {
    ki67Score = new Ki67Score( 0 , 30 , 0 , 70 );
 
    ki67Score.addField( 71 , 29 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 66 , 34 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 56 , 44 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 31.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 30.36667 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab Q, case TB105 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 100 , 0 );
 
    ki67Score.addField( 59 , 41 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 66 , 34 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 59 , 41 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 64 , 36 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 38 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 38 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab Q, case TB107 ", function() {
    ki67Score = new Ki67Score( 0 , 80 , 10 , 10 );
 
    ki67Score.addField( 75 , 25 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 14.33333 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 7.8 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab Q, case TB112 ", function() {
    ki67Score = new Ki67Score( 60 , 20 , 0 , 20 );
 
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 9 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 5.4 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab Q, case TB113 ", function() {
    ki67Score = new Ki67Score( 10 , 10 , 70 , 10 );
 
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 9 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 11.4 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab Q, case TB192 ", function() {
    ki67Score = new Ki67Score( 0 , 40 , 30 , 30 );
 
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 20.66667 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 20.1 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab Q, case TB193 ", function() {
    ki67Score = new Ki67Score( 0 , 70 , 20 , 10 );
 
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 11 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 9 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab Q, case TB196 ", function() {
    ki67Score = new Ki67Score( 70 , 10 , 10 , 10 );
 
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 9 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 3.6 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab Q, case TB203 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 90 , 0 );
 
    ki67Score.addField( 61 , 39 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 67 , 33 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 65 , 35 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 29.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 33.3 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab Q, case TB245 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 60 , 20 );
 
    ki67Score.addField( 24 , 76 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 60 , 40 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 65 , 35 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 50.33333 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 46.2 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab Q, case TB250 ", function() {
    ki67Score = new Ki67Score( 0 , 60 , 20 , 20 );
 
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 12 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 8.4 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab Q, case TB286 ", function() {
    ki67Score = new Ki67Score( 0 , 60 , 0 , 40 );
 
    ki67Score.addField( 69 , 31 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 19.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 17.7 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab Q, case TB310 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 0 , 90 );
 
    ki67Score.addField( 52 , 48 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 50 , 50 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 57 , 43 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 39.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 43.9 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab Q, case TB319 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 90 , 0 );
 
    ki67Score.addField( 48 , 52 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 44 , 56 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 44 , 56 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 47.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 51.8 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab Q, case TB374 ", function() {
    ki67Score = new Ki67Score( 90 , 0 , 0 , 10 );
 
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 4.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 2.3 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab Q, case TB381 ", function() {
    ki67Score = new Ki67Score( 0 , 60 , 20 , 20 );
 
    ki67Score.addField( 60 , 40 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 71 , 29 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 26.66667 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 20.4 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab Q, case TB405 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 60 , 20 );
 
    ki67Score.addField( 48 , 52 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 28 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 27.6 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab Q, case TB460 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 90 , 0 );
 
    ki67Score.addField( 9 , 91 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 5 , 95 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 10 , 90 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 35 , 65 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 85.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 89.3 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab Q, case TB468 ", function() {
    ki67Score = new Ki67Score( 0 , 50 , 50 , 0 );
 
    ki67Score.addField( 64 , 36 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 60 , 40 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 25.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 25.25 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab Q, case TB633 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 100 , 0 );
 
    ki67Score.addField( 47 , 53 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 41 , 59 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 48 , 52 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 52 , 48 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 53 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 53 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab Q, case TB634 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 80 , 0 );
 
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 15.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 16.53333 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab R, case TB016 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 8.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 8.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab R, case TB022 ", function() {
    ki67Score = new Ki67Score( 0 , 50 , 30 , 20 );
 
    ki67Score.addField( 66 , 34 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 15.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 14.1 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab R, case TB033 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 80 , 0 );
 
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 13.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 13.86667 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab R, case TB036 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 13.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 13.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab R, case TB040 ", function() {
    ki67Score = new Ki67Score( 5 , 95 , 0 , 0 );
 
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 3.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 4.483333 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab R, case TB067 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 75 , 25 );
 
    ki67Score.addField( 59 , 41 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 71 , 29 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 29 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 29 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab R, case TB077 ", function() {
    ki67Score = new Ki67Score( 0 , 18 , 65 , 17 );
 
    ki67Score.addField( 38 , 62 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 72 , 28 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 64 , 36 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 33.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 32.6 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab R, case TB082 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 80 , 0 );
 
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 12.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 13 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab R, case TB083 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 4.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 4.5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab R, case TB090 ", function() {
    ki67Score = new Ki67Score( 0 , 7 , 93 , 0 );
 
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 14.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 16.3 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab R, case TB105 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 100 , 0 );
 
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 65 , 35 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 24 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 24 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab R, case TB107 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 6.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 6.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab R, case TB112 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 6.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 6.5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab R, case TB113 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 6.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 6.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab R, case TB192 ", function() {
    ki67Score = new Ki67Score( 0 , 60 , 40 , 0 );
 
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 17.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 16 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab R, case TB193 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 9.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 9.25 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab R, case TB196 ", function() {
    ki67Score = new Ki67Score( 7 , 93 , 0 , 0 );
 
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 3.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 3.79 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab R, case TB203 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 100 , 0 );
 
    ki67Score.addField( 69 , 31 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 66 , 34 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 67 , 33 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 29.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 29.25 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab R, case TB245 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 25 , 75 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 23 , 77 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 28 , 72 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 16 , 84 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 77 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 77 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab R, case TB250 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 9 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 9 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab R, case TB286 ", function() {
    ki67Score = new Ki67Score( 0 , 75 , 25 , 0 );
 
    ki67Score.addField( 71 , 29 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 15.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 15.25 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab R, case TB310 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 100 , 0 );
 
    ki67Score.addField( 65 , 35 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 70 , 30 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 29 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 29 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab R, case TB319 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 52 , 48 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 47 , 53 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 46 , 54 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 51 , 49 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 51 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 51 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab R, case TB374 ", function() {
    ki67Score = new Ki67Score( 75 , 25 , 0 , 0 );
 
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 3.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 3.5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab R, case TB381 ", function() {
    ki67Score = new Ki67Score( 0 , 11 , 22 , 67 );
 
    ki67Score.addField( 57 , 43 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 63 , 37 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 67 , 33 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 30.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 35.05 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab R, case TB405 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 100 , 0 );
 
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 15.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 15.5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab R, case TB460 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 17 , 83 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 10 , 90 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 18 , 82 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 8 , 92 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 86.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 86.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab R, case TB468 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 100 , 0 );
 
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 20 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 20 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab R, case TB633 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 80 , 20 );
 
    ki67Score.addField( 38 , 62 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 75 , 25 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 64 , 36 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 68 , 32 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 38.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 37.2 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab R, case TB634 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 10.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 10.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab S, case TB016 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 10.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 10.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab S, case TB022 ", function() {
    ki67Score = new Ki67Score( 10 , 60 , 30 , 0 );
 
    ki67Score.addField( 64 , 36 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 20 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 23.6 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab S, case TB033 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 90 , 0 );
 
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 18.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 21.5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab S, case TB036 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 100 , 0 );
 
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 21.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 21.25 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab S, case TB040 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 6 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 6 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab S, case TB067 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 30 , 70 );
 
    ki67Score.addField( 56 , 44 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 65 , 35 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 60 , 40 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 36.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 35.86667 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab S, case TB077 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 40 , 60 );
 
    ki67Score.addField( 46 , 54 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 47 , 53 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 75 , 25 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 38.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 41.7 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab S, case TB082 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 100 , 0 );
 
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 72 , 28 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 71 , 29 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 69 , 31 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 28.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 28.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab S, case TB083 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 7.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 7.5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab S, case TB090 ", function() {
    ki67Score = new Ki67Score( 0 , 30 , 70 , 0 );
 
    ki67Score.addField( 62 , 38 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 55 , 45 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 72 , 28 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 32 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 31 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab S, case TB105 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 100 , 0 );
 
    ki67Score.addField( 65 , 35 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 64 , 36 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 64 , 36 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 72 , 28 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 33.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 33.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab S, case TB107 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 12.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 12.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab S, case TB112 ", function() {
    ki67Score = new Ki67Score( 0 , 90 , 10 , 0 );
 
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 12.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 10.9 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab S, case TB113 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 10.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 10.25 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab S, case TB192 ", function() {
    ki67Score = new Ki67Score( 0 , 30 , 70 , 0 );
 
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 18.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 17.3 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab S, case TB193 ", function() {
    ki67Score = new Ki67Score( 0 , 80 , 20 , 0 );
 
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 10.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 10.2 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab S, case TB196 ", function() {
    ki67Score = new Ki67Score( 20 , 80 , 0 , 0 );
 
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 1.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 1.333333 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab S, case TB203 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 40 , 60 );
 
    ki67Score.addField( 52 , 48 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 63 , 37 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 31.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 33.5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab S, case TB245 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 16 , 84 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 25 , 75 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 17 , 83 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 38 , 62 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 76 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 76 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab S, case TB250 ", function() {
    ki67Score = new Ki67Score( 0 , 50 , 50 , 0 );
 
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 14.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 14.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab S, case TB286 ", function() {
    ki67Score = new Ki67Score( 0 , 40 , 60 , 0 );
 
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 13.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 14.2 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab S, case TB310 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 10 , 90 );
 
    ki67Score.addField( 47 , 53 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 58 , 42 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 56 , 44 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 75 , 25 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 41 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 44.2 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab S, case TB319 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 36 , 64 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 47 , 53 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 45 , 55 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 46 , 54 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 56.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 56.5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab S, case TB374 ", function() {
    ki67Score = new Ki67Score( 10 , 90 , 0 , 0 );
 
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 2 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 2.4 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab S, case TB381 ", function() {
    ki67Score = new Ki67Score( 0 , 40 , 20 , 40 );
 
    ki67Score.addField( 47 , 53 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 29 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 30.8 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab S, case TB405 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 70 , 30 );
 
    ki67Score.addField( 51 , 49 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 72 , 28 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 29.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 30.8 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab S, case TB460 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 14 , 86 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 14 , 86 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 21 , 79 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 16 , 84 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 83.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 83.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab S, case TB468 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 100 , 0 );
 
    ki67Score.addField( 63 , 37 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 68 , 32 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 28.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 28.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab S, case TB633 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 43 , 57 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 33 , 67 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 45 , 55 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 37 , 63 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 60.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 60.5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab S, case TB634 ", function() {
    ki67Score = new Ki67Score( 0 , 50 , 50 , 0 );
 
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 16.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 16.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab T, case TB016 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 60 , 12 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 18.01075 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 18.01075 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab T, case TB022 ", function() {
    ki67Score = new Ki67Score( 10 , 10 , 80 , 0 );
 
    ki67Score.addField( 55 , 45 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 24.33333 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 38.8 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab T, case TB033 ", function() {
    ki67Score = new Ki67Score( 0 , 25 , 75 , 0 );
 
    ki67Score.addField( 75 , 25 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 67 , 33 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 57 , 43 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 29 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 29 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab T, case TB036 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 90 , 0 );
 
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 20.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 21.9 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab T, case TB040 ", function() {
    ki67Score = new Ki67Score( 65 , 35 , 0 , 0 );
 
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 9.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 10.31667 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab T, case TB067 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 100 , 0 );
 
    ki67Score.addField( 55 , 45 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 64 , 36 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 69 , 31 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 51 , 49 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 40.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 40.25 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab T, case TB077 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 75 , 25 );
 
    ki67Score.addField( 28 , 72 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 53 , 47 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 42 , 58 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 71 , 29 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 51.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 51.5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab T, case TB082 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 90 , 0 );
 
    ki67Score.addField( 60 , 40 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 58 , 42 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 64 , 36 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 33.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 37.1 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab T, case TB083 ", function() {
    ki67Score = new Ki67Score( 25 , 60 , 15 , 0 );
 
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 16.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 16.5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab T, case TB090 ", function() {
    ki67Score = new Ki67Score( 18 , 2 , 80 , 0 );
 
    ki67Score.addField( 64 , 36 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 57 , 43 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 25.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 33.04 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab T, case TB105 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 100 , 0 );
 
    ki67Score.addField( 63 , 37 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 55 , 45 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 39 , 61 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 53 , 47 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 47.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 47.5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab T, case TB107 ", function() {
    ki67Score = new Ki67Score( 5 , 50 , 45 , 0 );
 
    ki67Score.addField( 75 , 25 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 17.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 20.1 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab T, case TB112 ", function() {
    ki67Score = new Ki67Score( 40 , 25 , 35 , 0 );
 
    ki67Score.addField( 63 , 37 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 15.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 18.35 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab T, case TB113 ", function() {
    ki67Score = new Ki67Score( 35 , 55 , 10 , 0 );
 
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 13.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 11.7 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab T, case TB192 ", function() {
    ki67Score = new Ki67Score( 3 , 27 , 70 , 0 );
 
    ki67Score.addField( 62 , 38 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 58 , 42 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 27 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 32.68 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab T, case TB193 ", function() {
    ki67Score = new Ki67Score( 0 , 55 , 45 , 0 );
 
    ki67Score.addField( 69 , 31 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 20.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 19.8 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab T, case TB196 ", function() {
    ki67Score = new Ki67Score( 40 , 45 , 15 , 0 );
 
    ki67Score.addField( 41 , 27 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 54 , 4 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 17.17791 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 14.3395 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab T, case TB203 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 85 , 15 );
 
    ki67Score.addField( 46 , 54 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 59 , 41 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 61 , 39 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 60 , 40 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 43.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 42.1 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab T, case TB245 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 20 , 80 );
 
    ki67Score.addField( 30 , 70 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 27 , 73 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 29 , 71 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 50 , 50 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 66 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 67.06667 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab T, case TB250 ", function() {
    ki67Score = new Ki67Score( 20 , 50 , 30 , 0 );
 
    ki67Score.addField( 72 , 28 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 16.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 17.55 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab T, case TB286 ", function() {
    ki67Score = new Ki67Score( 0 , 35 , 65 , 0 );
 
    ki67Score.addField( 65 , 35 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 75 , 25 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 63 , 37 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 28.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 26.61667 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab T, case TB310 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 90 , 0 );
 
    ki67Score.addField( 59 , 41 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 60 , 40 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 40 , 60 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 42 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 45 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab T, case TB319 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 70 , 20 );
 
    ki67Score.addField( 35 , 65 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 53 , 47 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 37 , 63 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 48.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 53.4 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab T, case TB374 ", function() {
    ki67Score = new Ki67Score( 85 , 15 , 0 , 0 );
 
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 4 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 3.733333 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab T, case TB381 ", function() {
    ki67Score = new Ki67Score( 0 , 50 , 40 , 10 );
 
    ki67Score.addField( 51 , 49 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 71 , 29 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 29.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 26.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab T, case TB405 ", function() {
    ki67Score = new Ki67Score( 0 , 25 , 65 , 10 );
 
    ki67Score.addField( 49 , 51 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 62 , 38 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 63 , 37 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 33.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 31.225 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab T, case TB460 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 14 , 86 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 21 , 79 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 28 , 72 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 21 , 79 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 79 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 79 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab T, case TB468 ", function() {
    ki67Score = new Ki67Score( 2 , 40 , 48 , 10 );
 
    ki67Score.addField( 40 , 60 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 60 , 40 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 34 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 34.28 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab T, case TB633 ", function() {
    ki67Score = new Ki67Score( 0 , 2 , 15 , 83 );
 
    ki67Score.addField( 35 , 65 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 37 , 63 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 58 , 42 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 61 , 24 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 50.38961 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 59.98471 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab T, case TB634 ", function() {
    ki67Score = new Ki67Score( 5 , 75 , 20 , 0 );
 
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 23.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 24.9 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab U, case TB016 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 7 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 7 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab U, case TB022 ", function() {
    ki67Score = new Ki67Score( 0 , 50 , 50 , 0 );
 
    ki67Score.addField( 68 , 32 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 57 , 43 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 20.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 20.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab U, case TB033 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 80 , 0 );
 
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 75 , 25 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 19.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 20.8 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab U, case TB036 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 13.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 13.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab U, case TB040 ", function() {
    ki67Score = new Ki67Score( 50 , 50 , 0 , 0 );
 
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 9 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 9 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab U, case TB067 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 48 , 52 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 53 , 47 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 55 , 45 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 47 , 53 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 49.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 49.25 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab U, case TB077 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 25 , 75 );
 
    ki67Score.addField( 44 , 56 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 44 , 56 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 30 , 70 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 52.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 52.25 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab U, case TB082 ", function() {
    ki67Score = new Ki67Score( 0 , 25 , 75 , 0 );
 
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 63 , 37 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 64 , 36 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 27.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 27.25 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab U, case TB083 ", function() {
    ki67Score = new Ki67Score( 50 , 50 , 0 , 0 );
 
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 7 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 7 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab U, case TB090 ", function() {
    ki67Score = new Ki67Score( 0 , 50 , 50 , 0 );
 
    ki67Score.addField( 59 , 41 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 24 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 24 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab U, case TB105 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 100 , 0 );
 
    ki67Score.addField( 60 , 40 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 51 , 49 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 55 , 45 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 62 , 38 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 43 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 43 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab U, case TB107 ", function() {
    ki67Score = new Ki67Score( 25 , 75 , 0 , 0 );
 
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 4 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 4 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab U, case TB112 ", function() {
    ki67Score = new Ki67Score( 50 , 50 , 0 , 0 );
 
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 75 , 25 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 9.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 9.5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab U, case TB113 ", function() {
    ki67Score = new Ki67Score( 50 , 50 , 0 , 0 );
 
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 6.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 6.25 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab U, case TB192 ", function() {
    ki67Score = new Ki67Score( 25 , 50 , 25 , 0 );
 
    ki67Score.addField( 67 , 33 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 18 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 17.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab U, case TB193 ", function() {
    ki67Score = new Ki67Score( 50 , 50 , 0 , 0 );
 
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 6.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 6.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab U, case TB196 ", function() {
    ki67Score = new Ki67Score( 75 , 25 , 0 , 0 );
 
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 2.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 2.5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab U, case TB203 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 100 , 0 );
 
    ki67Score.addField( 70 , 30 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 69 , 31 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 54 , 46 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 61 , 39 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 36.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 36.5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab U, case TB245 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 13 , 87 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 8 , 92 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 30 , 70 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 37 , 63 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 78 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 78 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab U, case TB250 ", function() {
    ki67Score = new Ki67Score( 10 , 70 , 20 , 0 );
 
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 12.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 13 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab U, case TB286 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 80 , 0 );
 
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 67 , 33 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 65 , 35 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 27.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 28.26667 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab U, case TB310 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 100 , 0 );
 
    ki67Score.addField( 63 , 37 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 58 , 42 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 55 , 45 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 57 , 43 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 41.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 41.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab U, case TB319 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 25 , 75 );
 
    ki67Score.addField( 45 , 55 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 50 , 50 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 39 , 61 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 59 , 41 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 51.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 51.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab U, case TB374 ", function() {
    ki67Score = new Ki67Score( 80 , 20 , 0 , 0 );
 
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 1.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 1.533333 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab U, case TB381 ", function() {
    ki67Score = new Ki67Score( 0 , 50 , 50 , 0 );
 
    ki67Score.addField( 62 , 38 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 70 , 30 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 20.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 20.5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab U, case TB405 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 90 , 0 );
 
    ki67Score.addField( 62 , 38 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 63 , 37 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 63 , 37 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 33.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 35.7 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab U, case TB460 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 26 , 74 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 14 , 86 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 31 , 69 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 13 , 87 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 79 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 79 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab U, case TB468 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 100 , 0 );
 
    ki67Score.addField( 69 , 31 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 67 , 33 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 70 , 30 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 30.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 30.25 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab U, case TB633 ", function() {
    ki67Score = new Ki67Score( 0 , 25 , 25 , 50 );
 
    ki67Score.addField( 31 , 69 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 58 , 42 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 45.66667 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 51.5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab U, case TB634 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 12.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 12.25 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab V, case TB016 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 8.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 8.5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab V, case TB022 ", function() {
    ki67Score = new Ki67Score( 0 , 30 , 70 , 0 );
 
    ki67Score.addField( 68 , 32 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 18.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 17.5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab V, case TB033 ", function() {
    ki67Score = new Ki67Score( 0 , 30 , 70 , 0 );
 
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 69 , 31 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 19.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 18.46667 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab V, case TB036 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 100 , 0 );
 
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 15.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 15.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab V, case TB040 ", function() {
    ki67Score = new Ki67Score( 80 , 20 , 0 , 0 );
 
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 2.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 2.6 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab V, case TB067 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 100 , 0 );
 
    ki67Score.addField( 67 , 33 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 71 , 29 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 68 , 32 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 29.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 29.5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab V, case TB077 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 60 , 40 );
 
    ki67Score.addField( 47 , 53 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 44 , 56 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 63 , 37 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 75 , 25 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 42.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 40.4 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab V, case TB082 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 100 , 0 );
 
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 68 , 32 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 67 , 33 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 70 , 30 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 29.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 29.5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab V, case TB083 ", function() {
    ki67Score = new Ki67Score( 20 , 80 , 0 , 0 );
 
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 5.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 6.066667 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab V, case TB090 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 100 , 0 );
 
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 70 , 30 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 64 , 36 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 69 , 31 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 30.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 30.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab V, case TB105 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 100 , 0 );
 
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 67 , 33 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 61 , 39 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 30 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 30 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab V, case TB107 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 10.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 10.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab V, case TB112 ", function() {
    ki67Score = new Ki67Score( 50 , 30 , 20 , 0 );
 
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 6.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 6 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab V, case TB113 ", function() {
    ki67Score = new Ki67Score( 30 , 70 , 0 , 0 );
 
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 6 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 5.6 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab V, case TB192 ", function() {
    ki67Score = new Ki67Score( 0 , 40 , 60 , 0 );
 
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 15 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 15.8 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab V, case TB193 ", function() {
    ki67Score = new Ki67Score( 0 , 80 , 20 , 0 );
 
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 11 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 10.4 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab V, case TB196 ", function() {
    ki67Score = new Ki67Score( 40 , 60 , 0 , 0 );
 
    ki67Score.addField( 68 , 16 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 5.46875 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 6.721739 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab V, case TB203 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 100 , 0 );
 
    ki67Score.addField( 69 , 31 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 71 , 29 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 59 , 41 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 75 , 25 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 31.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 31.5 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab V, case TB245 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 30 , 70 );
 
    ki67Score.addField( 30 , 70 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 30 , 70 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 32 , 68 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 63 , 37 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 61.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 59.63333 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab V, case TB250 ", function() {
    ki67Score = new Ki67Score( 0 , 50 , 50 , 0 );
 
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 13.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 13.25 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab V, case TB286 ", function() {
    ki67Score = new Ki67Score( 0 , 40 , 60 , 0 );
 
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 69 , 31 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 19.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 21 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab V, case TB310 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 100 , 0 );
 
    ki67Score.addField( 64 , 36 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 62 , 38 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 62 , 38 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 59 , 41 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 38.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 38.25 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab V, case TB319 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 50 , 50 );
 
    ki67Score.addField( 41 , 59 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 46 , 54 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 57 , 43 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 64 , 36 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 48 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 48 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab V, case TB374 ", function() {
    ki67Score = new Ki67Score( 95 , 5 , 0 , 0 );
 
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 1.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 0.7833333 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab V, case TB381 ", function() {
    ki67Score = new Ki67Score( 0 , 60 , 40 , 0 );
 
    ki67Score.addField( 62 , 38 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 62 , 38 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 24 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 21.2 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab V, case TB405 ", function() {
    ki67Score = new Ki67Score( 0 , 40 , 40 , 10 );
 
    ki67Score.addField( 59 , 41 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 57 , 43 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 33.66667 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 28.1 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab V, case TB460 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 12 , 88 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 16 , 84 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 8 , 92 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 29 , 71 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 83.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 83.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab V, case TB468 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 100 , 0 );
 
    ki67Score.addField( 66 , 34 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 66 , 34 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 64 , 36 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 31.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 31.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab V, case TB633 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 50 , 50 );
 
    ki67Score.addField( 40 , 60 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 59 , 41 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 61 , 39 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 69 , 31 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 42.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 42.75 )).toBeLessThan(0.1);
 });
it(" Phase 3A, lab V, case TB634 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 15 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 15 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab E, case TB022 ", function() {
    ki67Score = new Ki67Score( 0 , 30 , 10 , 60 );
 
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 10.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 9.9 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab E, case TB040 ", function() {
    ki67Score = new Ki67Score( 90 , 10 , 0 , 0 );
 
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 0.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 0.3 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab E, case TB067 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 30 , 50 );
 
    ki67Score.addField( 60 , 40 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 41 , 59 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 32.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 32.95 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab E, case TB077 ", function() {
    ki67Score = new Ki67Score( 0 , 25 , 60 , 15 );
 
    ki67Score.addField( 60 , 40 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 66 , 34 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 69 , 31 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 27 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 26.25 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab E, case TB083 ", function() {
    ki67Score = new Ki67Score( 0 , 30 , 55 , 15 );
 
    ki67Score.addField( 69 , 31 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 65 , 35 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 68 , 32 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 26.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 25.775 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab E, case TB090 ", function() {
    ki67Score = new Ki67Score( 0 , 70 , 15 , 15 );
 
    ki67Score.addField( 67 , 33 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 72 , 28 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 24 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 16.85 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab E, case TB196 ", function() {
    ki67Score = new Ki67Score( 30 , 70 , 0 , 0 );
 
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 6 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 5.6 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab E, case TB203 ", function() {
    ki67Score = new Ki67Score( 0 , 30 , 60 , 10 );
 
    ki67Score.addField( 42 , 58 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 66 , 34 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 61 , 39 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 37 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 32.8 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab E, case TB250 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 50 , 30 );
 
    ki67Score.addField( 44 , 56 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 55 , 45 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 41 , 59 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 44.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 46.2 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab E, case TB381 ", function() {
    ki67Score = new Ki67Score( 0 , 50 , 30 , 20 );
 
    ki67Score.addField( 72 , 28 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 18.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 18.2 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab E, case KMS8 ", function() {
    ki67Score = new Ki67Score( 0 , 70 , 20 , 10 );
 
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 15.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 11.8 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab E, case KMS18 ", function() {
    ki67Score = new Ki67Score( 40 , 40 , 10 , 10 );
 
    ki67Score.addField( 67 , 33 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 16.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 9.1 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab E, case KMS20 ", function() {
    ki67Score = new Ki67Score( 0 , 60 , 30 , 10 );
 
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 9.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 8.3 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab E, case TB016 ", function() {
    ki67Score = new Ki67Score( 0 , 90 , 0 , 10 );
 
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 8.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 7.7 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab E, case TB113 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 5.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 5.75 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab E, case KMS2 ", function() {
    ki67Score = new Ki67Score( 0 , 40 , 40 , 20 );
 
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 7.333333 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 6.6 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab E, case KMS3 ", function() {
    ki67Score = new Ki67Score( 0 , 50 , 20 , 30 );
 
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 13.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 13.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab E, case KMS4 ", function() {
    ki67Score = new Ki67Score( 0 , 25 , 60 , 15 );
 
    ki67Score.addField( 42 , 58 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 64 , 36 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 60 , 40 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 34.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 32.75 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab E, case KMS5 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 50 , 50 );
 
    ki67Score.addField( 56 , 44 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 27.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 27.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab E, case KMS6 ", function() {
    ki67Score = new Ki67Score( 0 , 70 , 30 , 0 );
 
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 6 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 6.466667 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab E, case KMS11 ", function() {
    ki67Score = new Ki67Score( 0 , 60 , 20 , 20 );
 
    ki67Score.addField( 72 , 28 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 72 , 28 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 19.33333 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 12.4 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab E, case KMS14 ", function() {
    ki67Score = new Ki67Score( 0 , 60 , 15 , 25 );
 
    ki67Score.addField( 63 , 37 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 18 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 17.2 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab E, case KMS15 ", function() {
    ki67Score = new Ki67Score( 0 , 85 , 0 , 15 );
 
    ki67Score.addField( 63 , 37 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 21.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 19.15 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab E, case KMS19 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 50 , 30 );
 
    ki67Score.addField( 24 , 76 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 33 , 67 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 25 , 75 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 52 , 48 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 66.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 67.9 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab E, case KMS23 ", function() {
    ki67Score = new Ki67Score( 0 , 15 , 75 , 10 );
 
    ki67Score.addField( 51 , 49 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 63 , 37 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 66 , 34 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 35.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 34.975 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab E, case TB036 ", function() {
    ki67Score = new Ki67Score( 0 , 30 , 55 , 15 );
 
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 11.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 11.675 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab E, case TB107 ", function() {
    ki67Score = new Ki67Score( 0 , 50 , 35 , 15 );
 
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 6 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 5.4 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab E, case TB319 ", function() {
    ki67Score = new Ki67Score( 0 , 30 , 70 , 0 );
 
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 7.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 7.433333 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab E, case KMS13 ", function() {
    ki67Score = new Ki67Score( 0 , 75 , 10 , 15 );
 
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 10.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 8.25 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab E, case KMS21 ", function() {
    ki67Score = new Ki67Score( 0 , 30 , 20 , 50 );
 
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 16.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 15.95 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab H, case TB022 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 50 , 30 );
 
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 13.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 14.65 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab H, case TB040 ", function() {
    ki67Score = new Ki67Score( 60 , 40 , 0 , 0 );
 
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 1.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 1 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab H, case TB067 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 45 , 45 );
 
    ki67Score.addField( 45 , 55 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 28.33333 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 36.15 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab H, case TB077 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 45 , 45 );
 
    ki67Score.addField( 39 , 61 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 31.33333 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 39.15 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab H, case TB083 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 60 , 30 );
 
    ki67Score.addField( 50 , 50 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 69 , 31 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 27.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 31.7 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab H, case TB090 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 80 , 20 );
 
    ki67Score.addField( 63 , 37 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 25.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 24.46667 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab H, case TB196 ", function() {
    ki67Score = new Ki67Score( 10 , 90 , 0 , 0 );
 
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 5.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 6.1 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab H, case TB203 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 70 , 20 );
 
    ki67Score.addField( 42 , 58 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 67 , 33 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 64 , 36 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 36 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 37.45 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab H, case TB250 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 25 , 65 );
 
    ki67Score.addField( 34 , 66 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 44 , 56 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 39.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 46.7 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab H, case TB381 ", function() {
    ki67Score = new Ki67Score( 0 , 50 , 30 , 20 );
 
    ki67Score.addField( 55 , 45 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 21.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 20.8 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab H, case KMS8 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 80 , 0 );
 
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 20.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 21.73333 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab H, case KMS18 ", function() {
    ki67Score = new Ki67Score( 30 , 20 , 30 , 20 );
 
    ki67Score.addField( 63 , 37 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 19.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 18.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab H, case KMS20 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 70 , 20 );
 
    ki67Score.addField( 52 , 48 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 24 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 23.65 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab H, case TB016 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 100 , 0 );
 
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 15 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 15 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab H, case TB113 ", function() {
    ki67Score = new Ki67Score( 10 , 10 , 80 , 0 );
 
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 9.333333 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 18.2 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab H, case KMS2 ", function() {
    ki67Score = new Ki67Score( 0 , 25 , 75 , 0 );
 
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 16 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 16 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab H, case KMS3 ", function() {
    ki67Score = new Ki67Score( 0 , 70 , 30 , 0 );
 
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 10.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 11.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab H, case KMS4 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 60 , 30 );
 
    ki67Score.addField( 43 , 57 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 62 , 38 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 31.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 36.7 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab H, case KMS5 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 80 , 0 );
 
    ki67Score.addField( 67 , 33 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 66 , 34 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 71 , 29 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 27.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 28.4 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab H, case KMS6 ", function() {
    ki67Score = new Ki67Score( 10 , 40 , 50 , 0 );
 
    ki67Score.addField( 67 , 33 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 67 , 33 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 21 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 22.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab H, case KMS11 ", function() {
    ki67Score = new Ki67Score( 0 , 30 , 70 , 0 );
 
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 66 , 34 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 23.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 22.9 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab H, case KMS14 ", function() {
    ki67Score = new Ki67Score( 10 , 30 , 60 , 0 );
 
    ki67Score.addField( 66 , 34 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 66 , 34 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 20 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 23.8 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab H, case KMS15 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 80 , 10 );
 
    ki67Score.addField( 56 , 44 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 70 , 30 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 26.33333 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 28.9 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab H, case KMS19 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 20 , 80 );
 
    ki67Score.addField( 31 , 69 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 23 , 77 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 29 , 71 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 70 , 30 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 61.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 63.86667 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab H, case KMS23 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 40 , 60 );
 
    ki67Score.addField( 49 , 51 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 35 , 65 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 62 , 38 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 68 , 32 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 46.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 48.8 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab H, case TB036 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 80 , 0 );
 
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 19 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 19.6 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab H, case TB107 ", function() {
    ki67Score = new Ki67Score( 20 , 60 , 20 , 0 );
 
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 11 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 10.2 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab H, case TB319 ", function() {
    ki67Score = new Ki67Score( 10 , 70 , 20 , 0 );
 
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 10.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 10 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab H, case KMS13 ", function() {
    ki67Score = new Ki67Score( 30 , 50 , 20 , 0 );
 
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 10.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 9.25 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab H, case KMS21 ", function() {
    ki67Score = new Ki67Score( 0 , 40 , 60 , 0 );
 
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 13.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 15.1 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab B, case TB022 ", function() {
    ki67Score = new Ki67Score( 20 , 60 , 20 , 0 );
 
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 7.666667 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 7.4 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab B, case TB040 ", function() {
    ki67Score = new Ki67Score( 95 , 5 , 0 , 0 );
 
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 2 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 0.9333333 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab B, case TB067 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 20 , 80 );
 
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 58 , 42 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 57 , 43 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 30.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 31.66667 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab B, case TB077 ", function() {
    ki67Score = new Ki67Score( 0 , 25 , 50 , 25 );
 
    ki67Score.addField( 61 , 39 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 70 , 30 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 26.33333 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 27.25 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab B, case TB083 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 60 , 30 );
 
    ki67Score.addField( 64 , 36 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 18 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 20.6 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab B, case TB090 ", function() {
    ki67Score = new Ki67Score( 0 , 80 , 20 , 0 );
 
    ki67Score.addField( 67 , 33 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 15.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 14.06667 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab B, case TB196 ", function() {
    ki67Score = new Ki67Score( 100 , 0 , 0 , 0 );
 
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 2.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 2.75 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab B, case TB203 ", function() {
    ki67Score = new Ki67Score( 0 , 50 , 25 , 25 );
 
    ki67Score.addField( 58 , 42 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 29 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 26.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab B, case TB250 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 30 , 60 );
 
    ki67Score.addField( 52 , 48 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 38 , 62 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 33.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 39.7 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab B, case TB381 ", function() {
    ki67Score = new Ki67Score( 0 , 60 , 20 , 20 );
 
    ki67Score.addField( 49 , 51 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 25.66667 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 16.6 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab B, case KMS8 ", function() {
    ki67Score = new Ki67Score( 35 , 35 , 30 , 0 );
 
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 11.66667 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 11.3 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab B, case KMS18 ", function() {
    ki67Score = new Ki67Score( 85 , 0 , 15 , 0 );
 
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 8 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 6.266667 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab B, case KMS20 ", function() {
    ki67Score = new Ki67Score( 0 , 30 , 70 , 0 );
 
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 12.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 12.06667 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab B, case TB016 ", function() {
    ki67Score = new Ki67Score( 40 , 60 , 0 , 0 );
 
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 5.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 5.6 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab B, case TB113 ", function() {
    ki67Score = new Ki67Score( 85 , 15 , 0 , 0 );
 
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 6.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 5.616667 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab B, case KMS2 ", function() {
    ki67Score = new Ki67Score( 60 , 20 , 20 , 0 );
 
    ki67Score.addField( 72 , 28 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 18 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 12.8 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab B, case KMS3 ", function() {
    ki67Score = new Ki67Score( 50 , 50 , 0 , 0 );
 
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 6.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 6.75 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab B, case KMS4 ", function() {
    ki67Score = new Ki67Score( 0 , 15 , 55 , 30 );
 
    ki67Score.addField( 35 , 65 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 65 , 35 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 61 , 39 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 41.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 43.9 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab B, case KMS5 ", function() {
    ki67Score = new Ki67Score( 0 , 50 , 50 , 0 );
 
    ki67Score.addField( 69 , 31 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 75 , 25 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 20.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 20.25 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab B, case KMS6 ", function() {
    ki67Score = new Ki67Score( 60 , 40 , 0 , 0 );
 
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 9.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 8.8 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab B, case KMS11 ", function() {
    ki67Score = new Ki67Score( 30 , 30 , 40 , 0 );
 
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 15 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 16.1 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab B, case KMS14 ", function() {
    ki67Score = new Ki67Score( 60 , 40 , 0 , 0 );
 
    ki67Score.addField( 66 , 34 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 59 , 41 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 27 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 24.9 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab B, case KMS15 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 100 , 0 );
 
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 63 , 37 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 21.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 21.75 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab B, case KMS19 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 10 , 90 );
 
    ki67Score.addField( 6 , 94 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 26 , 74 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 17 , 83 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 45 , 55 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 76.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 80.8 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab B, case KMS23 ", function() {
    ki67Score = new Ki67Score( 0 , 60 , 0 , 40 );
 
    ki67Score.addField( 28 , 72 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 72 , 28 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 65 , 35 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 37.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 34.7 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab B, case TB036 ", function() {
    ki67Score = new Ki67Score( 20 , 80 , 0 , 0 );
 
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 7.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 7.533333 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab B, case TB107 ", function() {
    ki67Score = new Ki67Score( 90 , 10 , 0 , 0 );
 
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 4 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab B, case TB319 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 6.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 6.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab B, case KMS13 ", function() {
    ki67Score = new Ki67Score( 90 , 10 , 0 , 0 );
 
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 9 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 6.6 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab B, case KMS21 ", function() {
    ki67Score = new Ki67Score( 50 , 20 , 30 , 0 );
 
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 10.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 10.9 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab F, case TB022 ", function() {
    ki67Score = new Ki67Score( 40 , 40 , 20 , 0 );
 
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 9.666667 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 8.4 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab F, case TB040 ", function() {
    ki67Score = new Ki67Score( 90 , 10 , 0 , 0 );
 
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 0.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 0.1 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab F, case TB067 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 40 , 60 );
 
    ki67Score.addField( 38 , 62 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 59 , 41 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 71 , 29 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 38 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 40.7 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab F, case TB077 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 30 , 60 );
 
    ki67Score.addField( 53 , 47 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 49 , 51 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 29.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 34.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab F, case TB083 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 80 , 10 );
 
    ki67Score.addField( 64 , 36 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 19 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 17.6 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab F, case TB090 ", function() {
    ki67Score = new Ki67Score( 0 , 40 , 40 , 20 );
 
    ki67Score.addField( 63 , 37 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 19 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 15.4 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab F, case TB196 ", function() {
    ki67Score = new Ki67Score( 40 , 50 , 10 , 0 );
 
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 6 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 3.45 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab F, case TB203 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 60 , 30 );
 
    ki67Score.addField( 59 , 41 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 20.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 23.6 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab F, case TB250 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 10 , 80 );
 
    ki67Score.addField( 43 , 57 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 47.4 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab F, case TB381 ", function() {
    ki67Score = new Ki67Score( 0 , 30 , 40 , 30 );
 
    ki67Score.addField( 63 , 37 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 20.66667 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 20.6 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab F, case KMS8 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 70 , 10 );
 
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 12 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 10.35 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab F, case KMS18 ", function() {
    ki67Score = new Ki67Score( 55 , 15 , 15 , 15 );
 
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 13.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 8.1 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab F, case KMS20 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 80 , 20 );
 
    ki67Score.addField( 72 , 28 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 16.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 15.73333 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab F, case TB016 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 100 , 0 );
 
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 8.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 8.25 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab F, case TB113 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 4.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 4.25 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab F, case KMS2 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 60 , 20 );
 
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 9 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 8.6 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab F, case KMS3 ", function() {
    ki67Score = new Ki67Score( 30 , 50 , 20 , 0 );
 
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 10.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 9.35 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab F, case KMS4 ", function() {
    ki67Score = new Ki67Score( 5 , 15 , 60 , 20 );
 
    ki67Score.addField( 38 , 62 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 54 , 46 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 31 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 42 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab F, case KMS5 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 60 , 40 );
 
    ki67Score.addField( 68 , 32 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 66 , 34 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 26.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 24.9 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab F, case KMS6 ", function() {
    ki67Score = new Ki67Score( 5 , 55 , 40 , 0 );
 
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 10.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 13.15 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab F, case KMS11 ", function() {
    ki67Score = new Ki67Score( 0 , 50 , 45 , 5 );
 
    ki67Score.addField( 66 , 34 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 13.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 9.7 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab F, case KMS14 ", function() {
    ki67Score = new Ki67Score( 10 , 10 , 45 , 35 );
 
    ki67Score.addField( 54 , 46 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 21.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 27.1 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab F, case KMS15 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 90 , 0 );
 
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 75 , 17 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 13.0102 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 15.51096 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab F, case KMS19 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 15 , 85 );
 
    ki67Score.addField( 31 , 69 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 25 , 75 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 8 , 92 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 49 , 51 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 71.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 74.51667 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab F, case KMS23 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 50 , 50 );
 
    ki67Score.addField( 69 , 31 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 65 , 35 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 71 , 29 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 28.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 28.25 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab F, case TB036 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 9.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 9.25 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab F, case TB107 ", function() {
    ki67Score = new Ki67Score( 0 , 95 , 5 , 0 );
 
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 6.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 5.033333 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab F, case TB319 ", function() {
    ki67Score = new Ki67Score( 0 , 60 , 40 , 0 );
 
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 7 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 6 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab F, case KMS13 ", function() {
    ki67Score = new Ki67Score( 40 , 50 , 10 , 0 );
 
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 8.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 4.95 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab F, case KMS21 ", function() {
    ki67Score = new Ki67Score( 0 , 40 , 45 , 15 );
 
    ki67Score.addField( 70 , 30 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 15.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 12.525 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab G, case TB022 ", function() {
    ki67Score = new Ki67Score( 0 , 70 , 30 , 0 );
 
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 9.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 9.9 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab G, case TB040 ", function() {
    ki67Score = new Ki67Score( 50 , 50 , 0 , 0 );
 
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 0.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 0.75 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab G, case TB067 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 40 , 50 );
 
    ki67Score.addField( 44 , 56 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 54 , 46 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 31.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 32.1 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab G, case TB077 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 60 , 20 );
 
    ki67Score.addField( 37 , 63 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 50 , 50 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 44.33333 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 46.6 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab G, case TB083 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 75 , 15 );
 
    ki67Score.addField( 59 , 41 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 21 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 20.9 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab G, case TB090 ", function() {
    ki67Score = new Ki67Score( 0 , 50 , 50 , 0 );
 
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 14.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 14.75 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab G, case TB196 ", function() {
    ki67Score = new Ki67Score( 30 , 40 , 30 , 0 );
 
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 4 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 4 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab G, case TB203 ", function() {
    ki67Score = new Ki67Score( 0 , 30 , 40 , 30 );
 
    ki67Score.addField( 53 , 47 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 72 , 28 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 30 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 29.8 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab G, case TB250 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 40 , 50 );
 
    ki67Score.addField( 32 , 68 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 55 , 45 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 37.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 39.25 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab G, case TB381 ", function() {
    ki67Score = new Ki67Score( 0 , 30 , 35 , 35 );
 
    ki67Score.addField( 52 , 48 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 25.95 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab G, case KMS8 ", function() {
    ki67Score = new Ki67Score( 10 , 45 , 45 , 0 );
 
    ki67Score.addField( 69 , 31 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 13 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 17.55 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab G, case KMS18 ", function() {
    ki67Score = new Ki67Score( 50 , 20 , 30 , 0 );
 
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 8.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 9.7 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab G, case KMS20 ", function() {
    ki67Score = new Ki67Score( 0 , 30 , 40 , 30 );
 
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 10.66667 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 10.6 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab G, case TB016 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 9.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 9.75 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab G, case TB113 ", function() {
    ki67Score = new Ki67Score( 0 , 60 , 40 , 0 );
 
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 7.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 6.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab G, case KMS2 ", function() {
    ki67Score = new Ki67Score( 0 , 40 , 10 , 50 );
 
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 12.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 11 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab G, case KMS3 ", function() {
    ki67Score = new Ki67Score( 0 , 50 , 50 , 0 );
 
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 72 , 28 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 15.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 15.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab G, case KMS4 ", function() {
    ki67Score = new Ki67Score( 0 , 30 , 40 , 30 );
 
    ki67Score.addField( 21 , 79 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 54 , 46 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 47 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 46.9 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab G, case KMS5 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 65 , 15 );
 
    ki67Score.addField( 66 , 34 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 75 , 25 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 25.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 24.625 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab G, case KMS6 ", function() {
    ki67Score = new Ki67Score( 0 , 50 , 30 , 20 );
 
    ki67Score.addField( 67 , 33 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 14.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 13.65 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab G, case KMS11 ", function() {
    ki67Score = new Ki67Score( 20 , 30 , 40 , 10 );
 
    ki67Score.addField( 67 , 33 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 12.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 10.1 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab G, case KMS14 ", function() {
    ki67Score = new Ki67Score( 0 , 30 , 50 , 20 );
 
    ki67Score.addField( 69 , 31 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 21.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 20.4 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab G, case KMS15 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 80 , 10 );
 
    ki67Score.addField( 58 , 42 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 18.33333 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 13.2 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab G, case KMS19 ", function() {
    ki67Score = new Ki67Score( 0 , 15 , 15 , 70 );
 
    ki67Score.addField( 8 , 92 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 30 , 70 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 47 , 53 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 71.66667 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 82.85 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab G, case KMS23 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 50 , 50 );
 
    ki67Score.addField( 48 , 52 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 37 , 63 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 60 , 40 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 68 , 32 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 46.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 46.75 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab G, case TB036 ", function() {
    ki67Score = new Ki67Score( 0 , 50 , 50 , 0 );
 
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 12.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 12.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab G, case TB107 ", function() {
    ki67Score = new Ki67Score( 0 , 90 , 10 , 0 );
 
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 6.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 5.1 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab G, case TB319 ", function() {
    ki67Score = new Ki67Score( 0 , 40 , 60 , 0 );
 
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 8.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 9.7 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab G, case KMS13 ", function() {
    ki67Score = new Ki67Score( 0 , 90 , 10 , 0 );
 
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 11 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 7.8 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab G, case KMS21 ", function() {
    ki67Score = new Ki67Score( 0 , 50 , 20 , 30 );
 
    ki67Score.addField( 71 , 29 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 14.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 15.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab V, case TB022 ", function() {
    ki67Score = new Ki67Score( 80 , 20 , 0 , 0 );
 
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 5.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 4.933333 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab V, case TB040 ", function() {
    ki67Score = new Ki67Score( 100 , 0 , 0 , 0 );
 
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 0.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 0.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab V, case TB067 ", function() {
    ki67Score = new Ki67Score( 0 , 25 , 50 , 25 );
 
    ki67Score.addField( 67 , 33 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 68 , 32 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 26.33333 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 27.75 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab V, case TB077 ", function() {
    ki67Score = new Ki67Score( 5 , 20 , 55 , 20 );
 
    ki67Score.addField( 63 , 37 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 75 , 25 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 20.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 24.4 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab V, case TB083 ", function() {
    ki67Score = new Ki67Score( 0 , 30 , 70 , 0 );
 
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 67 , 33 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 23.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 22.9 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab V, case TB090 ", function() {
    ki67Score = new Ki67Score( 0 , 85 , 15 , 0 );
 
    ki67Score.addField( 68 , 32 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 16 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 13.86667 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab V, case TB196 ", function() {
    ki67Score = new Ki67Score( 90 , 10 , 0 , 0 );
 
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 3 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 2.6 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab V, case TB203 ", function() {
    ki67Score = new Ki67Score( 0 , 60 , 30 , 10 );
 
    ki67Score.addField( 49 , 51 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 67 , 33 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 28.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 24 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab V, case TB250 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 70 , 10 );
 
    ki67Score.addField( 48 , 52 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 60 , 40 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 67 , 33 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 35.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 34.35 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab V, case TB381 ", function() {
    ki67Score = new Ki67Score( 0 , 60 , 40 , 0 );
 
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 75 , 25 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 14.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 12.8 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab V, case KMS8 ", function() {
    ki67Score = new Ki67Score( 0 , 70 , 30 , 0 );
 
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 8.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 9 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab V, case KMS18 ", function() {
    ki67Score = new Ki67Score( 60 , 0 , 20 , 20 );
 
    ki67Score.addField( 70 , 30 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 14 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 8.4 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab V, case KMS20 ", function() {
    ki67Score = new Ki67Score( 0 , 40 , 50 , 10 );
 
    ki67Score.addField( 75 , 25 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 15 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 12.15 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab V, case TB016 ", function() {
    ki67Score = new Ki67Score( 0 , 80 , 20 , 0 );
 
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 8.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 7.933333 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab V, case TB113 ", function() {
    ki67Score = new Ki67Score( 50 , 50 , 0 , 0 );
 
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 5.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 5.75 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab V, case KMS2 ", function() {
    ki67Score = new Ki67Score( 0 , 40 , 60 , 0 );
 
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 13.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 14.2 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab V, case KMS3 ", function() {
    ki67Score = new Ki67Score( 0 , 80 , 20 , 0 );
 
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 9.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 8.933333 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab V, case KMS4 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 30 , 50 );
 
    ki67Score.addField( 51 , 49 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 40 , 60 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 37.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 37.95 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab V, case KMS5 ", function() {
    ki67Score = new Ki67Score( 0 , 30 , 70 , 0 );
 
    ki67Score.addField( 71 , 29 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 75 , 25 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 21.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 20.3 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab V, case KMS6 ", function() {
    ki67Score = new Ki67Score( 20 , 60 , 20 , 0 );
 
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 11 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 11.4 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab V, case KMS11 ", function() {
    ki67Score = new Ki67Score( 0 , 30 , 50 , 20 );
 
    ki67Score.addField( 72 , 28 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 14.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 13.2 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab V, case KMS14 ", function() {
    ki67Score = new Ki67Score( 20 , 40 , 40 , 0 );
 
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 17.66667 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 19.4 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab V, case KMS15 ", function() {
    ki67Score = new Ki67Score( 10 , 40 , 40 , 10 );
 
    ki67Score.addField( 64 , 36 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 17.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 16.9 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab V, case KMS19 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 30 , 70 );
 
    ki67Score.addField( 16 , 84 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 18 , 82 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 31 , 69 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 60 , 40 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 68.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 66.83333 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab V, case KMS23 ", function() {
    ki67Score = new Ki67Score( 0 , 40 , 40 , 20 );
 
    ki67Score.addField( 47 , 53 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 69 , 31 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 34 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 30.2 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab V, case TB036 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 11.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 11.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab V, case TB107 ", function() {
    ki67Score = new Ki67Score( 60 , 40 , 0 , 0 );
 
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 8.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 7.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab V, case TB319 ", function() {
    ki67Score = new Ki67Score( 50 , 50 , 0 , 0 );
 
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 3.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 3.25 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab V, case KMS13 ", function() {
    ki67Score = new Ki67Score( 45 , 50 , 5 , 0 );
 
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 7.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 3.3 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab V, case KMS21 ", function() {
    ki67Score = new Ki67Score( 0 , 70 , 30 , 0 );
 
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 13.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 14.4 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab R, case TB022 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 5.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 5.75 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab R, case TB040 ", function() {
    ki67Score = new Ki67Score( 100 , 0 , 0 , 0 );
 
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 1.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 1.25 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab R, case TB067 ", function() {
    ki67Score = new Ki67Score( 0 , 25 , 30 , 45 );
 
    ki67Score.addField( 66 , 34 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 66 , 34 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 25.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 24.65 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab R, case TB077 ", function() {
    ki67Score = new Ki67Score( 0 , 25 , 50 , 25 );
 
    ki67Score.addField( 70 , 30 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 19 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 19.25 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab R, case TB083 ", function() {
    ki67Score = new Ki67Score( 0 , 55 , 22 , 23 );
 
    ki67Score.addField( 66 , 34 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 19.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 19.095 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab R, case TB090 ", function() {
    ki67Score = new Ki67Score( 0 , 63 , 37 , 0 );
 
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 10 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 10.96 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab R, case TB196 ", function() {
    ki67Score = new Ki67Score( 100 , 0 , 0 , 0 );
 
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 5.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 5.25 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab R, case TB203 ", function() {
    ki67Score = new Ki67Score( 0 , 22 , 71 , 7 );
 
    ki67Score.addField( 63 , 37 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 19.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 16.15 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab R, case TB250 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 15 , 85 );
 
    ki67Score.addField( 63 , 37 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 60 , 40 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 57 , 43 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 35.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 37.3 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab R, case TB381 ", function() {
    ki67Score = new Ki67Score( 67 , 25 , 8 , 0 );
 
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 17.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 14.615 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab R, case KMS8 ", function() {
    ki67Score = new Ki67Score( 0 , 60 , 40 , 0 );
 
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 11.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 10.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab R, case KMS18 ", function() {
    ki67Score = new Ki67Score( 60 , 25 , 10 , 5 );
 
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 15 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 8.95 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab R, case KMS20 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 100 , 0 );
 
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 11.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 11.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab R, case TB016 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 7.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 7.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab R, case TB113 ", function() {
    ki67Score = new Ki67Score( 100 , 0 , 0 , 0 );
 
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 5.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 5.25 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab R, case KMS2 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 8.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 8.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab R, case KMS3 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 8.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 8.75 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab R, case KMS4 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 25 , 75 );
 
    ki67Score.addField( 45 , 55 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 44 , 56 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 41 , 59 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 71 , 29 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 49.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 49.75 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab R, case KMS5 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 13 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 13 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab R, case KMS6 ", function() {
    ki67Score = new Ki67Score( 20 , 80 , 0 , 0 );
 
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 10.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 10.73333 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab R, case KMS11 ", function() {
    ki67Score = new Ki67Score( 0 , 90 , 10 , 0 );
 
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 11.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 9.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab R, case KMS14 ", function() {
    ki67Score = new Ki67Score( 20 , 80 , 0 , 0 );
 
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 14.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 15.13333 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab R, case KMS15 ", function() {
    ki67Score = new Ki67Score( 0 , 85 , 10 , 5 );
 
    ki67Score.addField( 64 , 36 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 19 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 11.65 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab R, case KMS19 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 15 , 85 );
 
    ki67Score.addField( 12 , 88 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 28 , 72 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 17 , 83 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 66 , 34 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 69.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 73.95 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab R, case KMS23 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 40 , 60 );
 
    ki67Score.addField( 67 , 33 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 57 , 43 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 75 , 25 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 31 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 32.4 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab R, case TB036 ", function() {
    ki67Score = new Ki67Score( 5 , 95 , 0 , 0 );
 
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 11.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 13.28333 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab R, case TB107 ", function() {
    ki67Score = new Ki67Score( 35 , 65 , 0 , 0 );
 
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 9.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 8.9 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab R, case TB319 ", function() {
    ki67Score = new Ki67Score( 100 , 0 , 0 , 0 );
 
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 5.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 5.25 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab R, case KMS13 ", function() {
    ki67Score = new Ki67Score( 75 , 25 , 0 , 0 );
 
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 7.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 7.75 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab R, case KMS21 ", function() {
    ki67Score = new Ki67Score( 0 , 70 , 30 , 0 );
 
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 11 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 11.2 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab P, case TB022 ", function() {
    ki67Score = new Ki67Score( 20 , 80 , 0 , 0 );
 
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 9.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 10 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab P, case TB040 ", function() {
    ki67Score = new Ki67Score( 100 , 0 , 0 , 0 );
 
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 1.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 1.25 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab P, case TB067 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 40 , 40 );
 
    ki67Score.addField( 62 , 38 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 21.66667 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 24.6 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab P, case TB077 ", function() {
    ki67Score = new Ki67Score( 30 , 30 , 30 , 10 );
 
    ki67Score.addField( 57 , 43 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 21.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 17.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab P, case TB083 ", function() {
    ki67Score = new Ki67Score( 0 , 70 , 20 , 10 );
 
    ki67Score.addField( 70 , 30 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 14.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 9.6 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab P, case TB090 ", function() {
    ki67Score = new Ki67Score( 0 , 50 , 50 , 0 );
 
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 75 , 25 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 16 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 16 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab P, case TB196 ", function() {
    ki67Score = new Ki67Score( 80 , 20 , 0 , 0 );
 
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 2 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 1.666667 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab P, case TB203 ", function() {
    ki67Score = new Ki67Score( 0 , 50 , 30 , 20 );
 
    ki67Score.addField( 61 , 39 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 19.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 19.1 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab P, case TB250 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 60 , 20 );
 
    ki67Score.addField( 55 , 45 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 67 , 33 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 30.66667 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 31.6 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab P, case TB381 ", function() {
    ki67Score = new Ki67Score( 50 , 30 , 20 , 0 );
 
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 10.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 9.85 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab P, case KMS8 ", function() {
    ki67Score = new Ki67Score( 0 , 80 , 20 , 0 );
 
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 10.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 10.26667 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab P, case KMS18 ", function() {
    ki67Score = new Ki67Score( 40 , 40 , 20 , 0 );
 
    ki67Score.addField( 62 , 38 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 16 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 11.6 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab P, case KMS20 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 60 , 20 );
 
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 9.666667 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 9.4 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab P, case TB016 ", function() {
    ki67Score = new Ki67Score( 30 , 70 , 0 , 0 );
 
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 7 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 6.666667 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab P, case TB113 ", function() {
    ki67Score = new Ki67Score( 30 , 70 , 0 , 0 );
 
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 6.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 6.3 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab P, case KMS2 ", function() {
    ki67Score = new Ki67Score( 0 , 80 , 20 , 0 );
 
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 9.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 9.4 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab P, case KMS3 ", function() {
    ki67Score = new Ki67Score( 40 , 60 , 0 , 0 );
 
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 6 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 7.1 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab P, case KMS4 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 70 , 20 );
 
    ki67Score.addField( 47 , 53 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 27 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 28.1 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab P, case KMS5 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 13.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 13.75 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab P, case KMS6 ", function() {
    ki67Score = new Ki67Score( 20 , 40 , 40 , 0 );
 
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 9 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 10.6 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab P, case KMS11 ", function() {
    ki67Score = new Ki67Score( 20 , 40 , 40 , 0 );
 
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 11.33333 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 13.6 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab P, case KMS14 ", function() {
    ki67Score = new Ki67Score( 40 , 30 , 30 , 0 );
 
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 13.66667 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 12.3 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab P, case KMS15 ", function() {
    ki67Score = new Ki67Score( 10 , 80 , 10 , 0 );
 
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 10.33333 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 7.3 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab P, case KMS19 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 40 , 50 );
 
    ki67Score.addField( 46 , 54 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 17 , 83 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 43 , 57 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 55 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 59.65 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab P, case KMS23 ", function() {
    ki67Score = new Ki67Score( 0 , 50 , 50 , 0 );
 
    ki67Score.addField( 69 , 31 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 64 , 36 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 25.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 25.25 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab P, case TB036 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 5.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 5.25 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab P, case TB107 ", function() {
    ki67Score = new Ki67Score( 80 , 20 , 0 , 0 );
 
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 3 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 2.733333 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab P, case TB319 ", function() {
    ki67Score = new Ki67Score( 40 , 60 , 0 , 0 );
 
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 4 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 4.6 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab P, case KMS13 ", function() {
    ki67Score = new Ki67Score( 65 , 30 , 5 , 0 );
 
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 2.3 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab P, case KMS21 ", function() {
    ki67Score = new Ki67Score( 0 , 50 , 30 , 20 );
 
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 6 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 5.55 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab O, case TB022 ", function() {
    ki67Score = new Ki67Score( 70 , 30 , 0 , 0 );
 
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 4.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 4.8 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab O, case TB040 ", function() {
    ki67Score = new Ki67Score( 100 , 0 , 0 , 0 );
 
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 1 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 1 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab O, case TB067 ", function() {
    ki67Score = new Ki67Score( 0 , 30 , 70 , 0 );
 
    ki67Score.addField( 61 , 39 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 70 , 30 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 25.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 23.9 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab O, case TB077 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 60 , 20 );
 
    ki67Score.addField( 53 , 47 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 72 , 28 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 28 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 28 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab O, case TB083 ", function() {
    ki67Score = new Ki67Score( 10 , 50 , 40 , 0 );
 
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 16 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 19.15 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab O, case TB090 ", function() {
    ki67Score = new Ki67Score( 0 , 80 , 20 , 0 );
 
    ki67Score.addField( 75 , 25 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 12.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 11.4 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab O, case TB196 ", function() {
    ki67Score = new Ki67Score( 90 , 10 , 0 , 0 );
 
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 4.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 3.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab O, case TB203 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 50 , 30 );
 
    ki67Score.addField( 61 , 39 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 68 , 32 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 23.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 25.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab O, case TB250 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 20 , 80 );
 
    ki67Score.addField( 51 , 49 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 51 , 49 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 49 , 51 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 39.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 41.33333 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab O, case TB381 ", function() {
    ki67Score = new Ki67Score( 20 , 60 , 20 , 0 );
 
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 15 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 19.8 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab O, case KMS8 ", function() {
    ki67Score = new Ki67Score( 0 , 90 , 10 , 0 );
 
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 10.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 8.4 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab O, case KMS18 ", function() {
    ki67Score = new Ki67Score( 60 , 20 , 20 , 0 );
 
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 10.66667 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 6.4 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab O, case KMS20 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 80 , 0 );
 
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 17 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 17.73333 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab O, case TB016 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 13.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 13.25 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab O, case TB113 ", function() {
    ki67Score = new Ki67Score( 90 , 10 , 0 , 0 );
 
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 7.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 7.7 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab O, case KMS2 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 80 , 0 );
 
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 11 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 11.4 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab O, case KMS3 ", function() {
    ki67Score = new Ki67Score( 20 , 80 , 0 , 0 );
 
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 8 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 8.4 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab O, case KMS4 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 10 , 70 );
 
    ki67Score.addField( 43 , 57 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 35 , 65 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 69 , 31 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 40 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 47.2 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab O, case KMS5 ", function() {
    ki67Score = new Ki67Score( 0 , 40 , 60 , 0 );
 
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 16.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 17.7 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab O, case KMS6 ", function() {
    ki67Score = new Ki67Score( 0 , 50 , 50 , 0 );
 
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 61 , 39 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 19 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 19 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab O, case KMS11 ", function() {
    ki67Score = new Ki67Score( 0 , 50 , 50 , 0 );
 
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 10.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 10.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab O, case KMS14 ", function() {
    ki67Score = new Ki67Score( 0 , 40 , 60 , 0 );
 
    ki67Score.addField( 65 , 35 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 62 , 38 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 25.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 27.9 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab O, case KMS15 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 80 , 0 );
 
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 70 , 30 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 18.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 19.4 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab O, case KMS19 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 30 , 70 );
 
    ki67Score.addField( 23 , 77 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 31 , 69 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 26 , 74 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 66 , 34 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 63.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 61.53333 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab O, case KMS23 ", function() {
    ki67Score = new Ki67Score( 0 , 40 , 60 , 0 );
 
    ki67Score.addField( 62 , 38 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 52 , 48 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 70 , 30 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 32.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 34.6 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab O, case TB036 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 100 , 0 );
 
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 13.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 13.25 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab O, case TB107 ", function() {
    ki67Score = new Ki67Score( 30 , 70 , 0 , 0 );
 
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 6 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 5.733333 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab O, case TB319 ", function() {
    ki67Score = new Ki67Score( 30 , 70 , 0 , 0 );
 
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 8.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 8.433333 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab O, case KMS13 ", function() {
    ki67Score = new Ki67Score( 20 , 60 , 20 , 0 );
 
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 13.33333 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 12.4 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab O, case KMS21 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 80 , 0 );
 
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 75 , 25 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 18.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 18.8 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab L, case TB022 ", function() {
    ki67Score = new Ki67Score( 60 , 35 , 5 , 0 );
 
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 7.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 4.55 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab L, case TB040 ", function() {
    ki67Score = new Ki67Score( 95 , 5 , 0 , 0 );
 
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 1.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 0.35 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab L, case TB067 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 60 , 30 );
 
    ki67Score.addField( 49 , 51 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 59 , 41 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 53 , 47 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 70 , 30 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 42.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 44.7 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab L, case TB077 ", function() {
    ki67Score = new Ki67Score( 0 , 30 , 50 , 20 );
 
    ki67Score.addField( 46 , 54 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 61 , 39 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 32.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 30.45 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab L, case TB083 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 75 , 5 );
 
    ki67Score.addField( 51 , 49 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 67 , 33 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 68 , 32 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 31.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 29.225 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab L, case TB090 ", function() {
    ki67Score = new Ki67Score( 0 , 60 , 35 , 5 );
 
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 17.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 15.55 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab L, case TB196 ", function() {
    ki67Score = new Ki67Score( 5 , 95 , 0 , 0 );
 
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 2 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 2.533333 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab L, case TB203 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 40 , 50 );
 
    ki67Score.addField( 43 , 57 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 49 , 51 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 57 , 43 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 39.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 45 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab L, case TB250 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 70 , 20 );
 
    ki67Score.addField( 40 , 60 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 45 , 55 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 50 , 50 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 64 , 20 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 48.17708 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 51.13095 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab L, case TB381 ", function() {
    ki67Score = new Ki67Score( 0 , 50 , 45 , 5 );
 
    ki67Score.addField( 53 , 47 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 68 , 32 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 65 , 35 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 31.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 28.75 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab L, case KMS8 ", function() {
    ki67Score = new Ki67Score( 0 , 95 , 5 , 0 );
 
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 75 , 25 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 22.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 22.41667 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab L, case KMS18 ", function() {
    ki67Score = new Ki67Score( 10 , 75 , 10 , 5 );
 
    ki67Score.addField( 69 , 31 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 70 , 30 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 20 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 18.8 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab L, case KMS20 ", function() {
    ki67Score = new Ki67Score( 0 , 30 , 65 , 5 );
 
    ki67Score.addField( 58 , 42 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 70 , 30 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 27.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 23.85 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab L, case TB016 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 20.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 20.75 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab L, case TB113 ", function() {
    ki67Score = new Ki67Score( 10 , 90 , 0 , 0 );
 
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 7.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 9 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab L, case KMS2 ", function() {
    ki67Score = new Ki67Score( 0 , 95 , 5 , 0 );
 
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 21.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 19.71667 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab L, case KMS3 ", function() {
    ki67Score = new Ki67Score( 0 , 95 , 5 , 0 );
 
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 14.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 11.96667 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab L, case KMS4 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 50 , 40 );
 
    ki67Score.addField( 30 , 70 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 54 , 46 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 68 , 32 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 70 , 30 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 44.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 50.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab L, case KMS5 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 100 , 0 );
 
    ki67Score.addField( 71 , 29 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 58 , 42 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 30.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 30.75 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab L, case KMS6 ", function() {
    ki67Score = new Ki67Score( 0 , 40 , 60 , 0 );
 
    ki67Score.addField( 64 , 36 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 18 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 20.1 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab L, case KMS11 ", function() {
    ki67Score = new Ki67Score( 0 , 30 , 65 , 5 );
 
    ki67Score.addField( 55 , 45 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 75 , 25 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 68 , 32 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 26.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 22.275 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab L, case KMS14 ", function() {
    ki67Score = new Ki67Score( 0 , 65 , 30 , 5 );
 
    ki67Score.addField( 65 , 35 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 56 , 44 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 30 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 28.275 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab L, case KMS15 ", function() {
    ki67Score = new Ki67Score( 0 , 95 , 5 , 0 );
 
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 68 , 24 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 74 , 17 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 21.67102 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 21.29134 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab L, case KMS19 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 29 , 71 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 31 , 69 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 46 , 54 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 36 , 64 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 64.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 64.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab L, case KMS23 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 100 , 0 );
 
    ki67Score.addField( 64 , 36 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 54 , 46 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 57 , 43 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 39 , 61 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 46.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 46.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab L, case TB036 ", function() {
    ki67Score = new Ki67Score( 0 , 95 , 5 , 0 );
 
    ki67Score.addField( 71 , 29 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 23 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 21.4 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab L, case TB107 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 8 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 8 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab L, case TB319 ", function() {
    ki67Score = new Ki67Score( 0 , 80 , 20 , 0 );
 
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 7.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 7.2 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab L, case KMS13 ", function() {
    ki67Score = new Ki67Score( 0 , 95 , 0 , 5 );
 
    ki67Score.addField( 66 , 34 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 14.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 9.3 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab L, case KMS21 ", function() {
    ki67Score = new Ki67Score( 0 , 65 , 30 , 5 );
 
    ki67Score.addField( 63 , 37 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 66 , 34 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 26.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 23.75 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab T, case TB022 ", function() {
    ki67Score = new Ki67Score( 20 , 80 , 0 , 0 );
 
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 14 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 14.66667 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab T, case TB040 ", function() {
    ki67Score = new Ki67Score( 95 , 5 , 0 , 0 );
 
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 2 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 0.4 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab T, case TB067 ", function() {
    ki67Score = new Ki67Score( 5 , 15 , 55 , 25 );
 
    ki67Score.addField( 50 , 50 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 44 , 56 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 32.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 46.15 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab T, case TB077 ", function() {
    ki67Score = new Ki67Score( 0 , 30 , 50 , 20 );
 
    ki67Score.addField( 58 , 42 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 69 , 31 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 65 , 35 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 33.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 32.7 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab T, case TB083 ", function() {
    ki67Score = new Ki67Score( 10 , 30 , 40 , 20 );
 
    ki67Score.addField( 58 , 42 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 72 , 28 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 22.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 24 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab T, case TB090 ", function() {
    ki67Score = new Ki67Score( 0 , 75 , 25 , 0 );
 
    ki67Score.addField( 66 , 34 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 15.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 15.25 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab T, case TB196 ", function() {
    ki67Score = new Ki67Score( 83 , 17 , 0 , 0 );
 
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 3.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 3.126667 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab T, case TB203 ", function() {
    ki67Score = new Ki67Score( 0 , 25 , 50 , 25 );
 
    ki67Score.addField( 43 , 57 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 26.66667 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 24.75 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab T, case TB250 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 50 , 40 );
 
    ki67Score.addField( 33 , 67 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 67 , 33 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 69 , 31 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 35.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 44 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab T, case TB381 ", function() {
    ki67Score = new Ki67Score( 5 , 70 , 20 , 5 );
 
    ki67Score.addField( 61 , 39 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 65 , 35 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 23.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 19.65 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab T, case KMS8 ", function() {
    ki67Score = new Ki67Score( 5 , 60 , 35 , 0 );
 
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 12.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 15.25 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab T, case KMS18 ", function() {
    ki67Score = new Ki67Score( 35 , 40 , 25 , 0 );
 
    ki67Score.addField( 72 , 28 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 16.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 15.95 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab T, case KMS20 ", function() {
    ki67Score = new Ki67Score( 0 , 65 , 35 , 0 );
 
    ki67Score.addField( 68 , 32 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 13 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 15.53333 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab T, case TB016 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 11 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 11 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab T, case TB113 ", function() {
    ki67Score = new Ki67Score( 60 , 40 , 0 , 0 );
 
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 8.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 8.3 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab T, case KMS2 ", function() {
    ki67Score = new Ki67Score( 0 , 70 , 30 , 0 );
 
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 12.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 13.1 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab T, case KMS3 ", function() {
    ki67Score = new Ki67Score( 25 , 65 , 10 , 0 );
 
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 11.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 9.25 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab T, case KMS4 ", function() {
    ki67Score = new Ki67Score( 0 , 15 , 70 , 15 );
 
    ki67Score.addField( 33 , 67 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 33 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 27.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab T, case KMS5 ", function() {
    ki67Score = new Ki67Score( 0 , 5 , 95 , 0 );
 
    ki67Score.addField( 71 , 29 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 71 , 29 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 72 , 28 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 24.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 27.83333 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab T, case KMS6 ", function() {
    ki67Score = new Ki67Score( 0 , 60 , 40 , 0 );
 
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 75 , 25 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 16.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 15.7 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab T, case KMS11 ", function() {
    ki67Score = new Ki67Score( 20 , 50 , 30 , 0 );
 
    ki67Score.addField( 71 , 29 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 13 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 14.35 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab T, case KMS14 ", function() {
    ki67Score = new Ki67Score( 80 , 0 , 20 , 0 );
 
    ki67Score.addField( 65 , 35 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 15 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 13.66667 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab T, case KMS15 ", function() {
    ki67Score = new Ki67Score( 0 , 15 , 75 , 10 );
 
    ki67Score.addField( 44 , 56 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 20.525 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab T, case KMS19 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 15 , 85 );
 
    ki67Score.addField( 23 , 77 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 24 , 76 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 37 , 63 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 58 , 42 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 64.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 67.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab T, case KMS23 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 100 , 0 );
 
    ki67Score.addField( 56 , 44 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 55 , 45 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 62 , 38 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 75 , 25 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 38 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 38 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab T, case TB036 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 14 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 14 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab T, case TB107 ", function() {
    ki67Score = new Ki67Score( 65 , 35 , 0 , 0 );
 
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 8 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 8.4 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab T, case TB319 ", function() {
    ki67Score = new Ki67Score( 15 , 75 , 10 , 0 );
 
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 7 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 5.75 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab T, case KMS13 ", function() {
    ki67Score = new Ki67Score( 35 , 50 , 15 , 0 );
 
    ki67Score.addField( 60 , 40 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 15 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 11.4 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab T, case KMS21 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 80 , 10 );
 
    ki67Score.addField( 59 , 41 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 68 , 32 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 26.33333 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 30.3 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab K, case TB022 ", function() {
    ki67Score = new Ki67Score( 0 , 40 , 60 , 0 );
 
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 11.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 13 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab K, case TB040 ", function() {
    ki67Score = new Ki67Score( 90 , 10 , 0 , 0 );
 
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 0.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 0.2 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab K, case TB067 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 40 , 60 );
 
    ki67Score.addField( 55 , 45 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 68 , 32 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 30 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 31.7 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab K, case TB077 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 20 , 60 );
 
    ki67Score.addField( 55 , 45 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 23.66667 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 32.2 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab K, case TB083 ", function() {
    ki67Score = new Ki67Score( 0 , 40 , 40 , 20 );
 
    ki67Score.addField( 62 , 38 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 22 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 18.8 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab K, case TB090 ", function() {
    ki67Score = new Ki67Score( 0 , 30 , 50 , 20 );
 
    ki67Score.addField( 70 , 30 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 18.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 17.35 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab K, case TB196 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 2.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 2.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab K, case TB203 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 70 , 20 );
 
    ki67Score.addField( 55 , 45 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 67 , 33 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 24.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 25.95 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab K, case TB250 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 0 , 90 );
 
    ki67Score.addField( 49 , 51 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 71 , 29 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 52 , 48 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 34 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 39.2 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab K, case TB381 ", function() {
    ki67Score = new Ki67Score( 0 , 60 , 30 , 10 );
 
    ki67Score.addField( 63 , 37 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 17.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 13.6 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab K, case KMS8 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 80 , 0 );
 
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 17.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 18.2 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab K, case KMS18 ", function() {
    ki67Score = new Ki67Score( 30 , 40 , 20 , 10 );
 
    ki67Score.addField( 68 , 32 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 15.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 10.6 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab K, case KMS20 ", function() {
    ki67Score = new Ki67Score( 0 , 40 , 50 , 10 );
 
    ki67Score.addField( 72 , 28 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 16.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 12.95 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab K, case TB016 ", function() {
    ki67Score = new Ki67Score( 0 , 70 , 30 , 0 );
 
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 8.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 8.9 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab K, case TB113 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 5.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 5.75 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab K, case KMS2 ", function() {
    ki67Score = new Ki67Score( 0 , 30 , 70 , 0 );
 
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 15 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 14.26667 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab K, case KMS3 ", function() {
    ki67Score = new Ki67Score( 0 , 80 , 20 , 0 );
 
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 7.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 6.666667 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab K, case KMS4 ", function() {
    ki67Score = new Ki67Score( 0 , 5 , 10 , 85 );
 
    ki67Score.addField( 47 , 53 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 53 , 47 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 33.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 45.4 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab K, case KMS5 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 90 , 0 );
 
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 67 , 33 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 22.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 24.9 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab K, case KMS6 ", function() {
    ki67Score = new Ki67Score( 0 , 60 , 40 , 0 );
 
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 10.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 8.7 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab K, case KMS11 ", function() {
    ki67Score = new Ki67Score( 0 , 60 , 40 , 0 );
 
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 11.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 10.6 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab K, case KMS14 ", function() {
    ki67Score = new Ki67Score( 0 , 60 , 40 , 0 );
 
    ki67Score.addField( 66 , 34 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 72 , 28 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 17.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 15.1 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab K, case KMS15 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 80 , 10 );
 
    ki67Score.addField( 68 , 32 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 18 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 19.4 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab K, case KMS19 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 10 , 90 );
 
    ki67Score.addField( 25 , 75 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 31 , 69 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 26 , 74 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 49 , 51 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 67.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 70.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab K, case KMS23 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 50 , 50 );
 
    ki67Score.addField( 53 , 47 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 64 , 36 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 30.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 30.25 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab K, case TB036 ", function() {
    ki67Score = new Ki67Score( 0 , 40 , 60 , 0 );
 
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 9.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 10.9 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab K, case TB107 ", function() {
    ki67Score = new Ki67Score( 0 , 90 , 10 , 0 );
 
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 7.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 6.2 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab K, case TB319 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 5.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 5.25 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab K, case KMS13 ", function() {
    ki67Score = new Ki67Score( 0 , 90 , 10 , 0 );
 
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 6.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 3.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab K, case KMS21 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 60 , 20 );
 
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 19.33333 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 21.2 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab A, case TB022 ", function() {
    ki67Score = new Ki67Score( 0 , 90 , 10 , 0 );
 
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 3.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 3 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab A, case TB040 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 0.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 0.25 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab A, case TB067 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 50 , 50 );
 
    ki67Score.addField( 72 , 28 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 66 , 34 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 24.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 24.25 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab A, case TB077 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 60 , 20 );
 
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 62 , 38 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 19 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 26.6 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab A, case TB083 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 70 , 20 );
 
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 71 , 29 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 21.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 24.9 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab A, case TB090 ", function() {
    ki67Score = new Ki67Score( 0 , 5 , 90 , 5 );
 
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 17.66667 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 19.65 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab A, case TB196 ", function() {
    ki67Score = new Ki67Score( 0 , 95 , 5 , 0 );
 
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 2.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 1.566667 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab A, case TB203 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 90 , 10 );
 
    ki67Score.addField( 50 , 50 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 23 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 17.6 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab A, case TB250 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 50 , 50 );
 
    ki67Score.addField( 43 , 57 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 53 , 47 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 62 , 38 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 41.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 41.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab A, case TB381 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 80 , 10 );
 
    ki67Score.addField( 60 , 40 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 19.33333 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 16.3 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab A, case KMS8 ", function() {
    ki67Score = new Ki67Score( 0 , 90 , 10 , 0 );
 
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 9 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 8.6 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab A, case KMS18 ", function() {
    ki67Score = new Ki67Score( 80 , 0 , 20 , 0 );
 
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 3.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 3 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab A, case KMS20 ", function() {
    ki67Score = new Ki67Score( 0 , 95 , 5 , 0 );
 
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 12.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 9.7 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab A, case TB016 ", function() {
    ki67Score = new Ki67Score( 0 , 95 , 5 , 0 );
 
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 6.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 5.25 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab A, case TB113 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 3.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 3.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab A, case KMS2 ", function() {
    ki67Score = new Ki67Score( 0 , 80 , 20 , 0 );
 
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 4.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 4.733333 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab A, case KMS3 ", function() {
    ki67Score = new Ki67Score( 5 , 55 , 40 , 0 );
 
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 5.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 7.05 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab A, case KMS4 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 60 , 40 );
 
    ki67Score.addField( 45 , 55 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 55 , 45 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 75 , 25 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 32.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 29 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab A, case KMS5 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 80 , 10 );
 
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 14.66667 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 17.7 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab A, case KMS6 ", function() {
    ki67Score = new Ki67Score( 0 , 60 , 40 , 0 );
 
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 68 , 32 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 14.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 12.1 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab A, case KMS11 ", function() {
    ki67Score = new Ki67Score( 0 , 50 , 50 , 0 );
 
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 11.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 11.75 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab A, case KMS14 ", function() {
    ki67Score = new Ki67Score( 0 , 40 , 60 , 0 );
 
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 9.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 9.8 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab A, case KMS15 ", function() {
    ki67Score = new Ki67Score( 0 , 50 , 50 , 0 );
 
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 8.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 8.25 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab A, case KMS19 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 10 , 90 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 11 , 89 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 19 , 81 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 9 , 91 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 87.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 87.75 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab A, case KMS23 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 50 , 50 );
 
    ki67Score.addField( 58 , 42 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 24.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 24.25 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab A, case TB036 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 4.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 4.25 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab A, case TB107 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 3.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 3.25 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab A, case TB319 ", function() {
    ki67Score = new Ki67Score( 0 , 70 , 30 , 0 );
 
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 2.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 2.3 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab A, case KMS13 ", function() {
    ki67Score = new Ki67Score( 0 , 95 , 5 , 0 );
 
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 4.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 2.45 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab A, case KMS21 ", function() {
    ki67Score = new Ki67Score( 0 , 50 , 50 , 0 );
 
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 10.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 10.75 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab U, case TB022 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 7 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 7 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab U, case TB040 ", function() {
    ki67Score = new Ki67Score( 100 , 0 , 0 , 0 );
 
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 1 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 1 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab U, case TB067 ", function() {
    ki67Score = new Ki67Score( 0 , 30 , 40 , 30 );
 
    ki67Score.addField( 61 , 39 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 23.66667 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 23.2 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab U, case TB077 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 30 , 50 );
 
    ki67Score.addField( 70 , 30 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 56 , 44 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 59 , 41 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 35.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 36.2 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab U, case TB083 ", function() {
    ki67Score = new Ki67Score( 10 , 30 , 30 , 30 );
 
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 14.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 17 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab U, case TB090 ", function() {
    ki67Score = new Ki67Score( 20 , 70 , 0 , 10 );
 
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 11.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 9.65 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab U, case TB196 ", function() {
    ki67Score = new Ki67Score( 100 , 0 , 0 , 0 );
 
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 1.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 1.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab U, case TB203 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 40 , 40 );
 
    ki67Score.addField( 50 , 50 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 65 , 35 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 32.66667 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 36.6 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab U, case TB250 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 50 , 50 );
 
    ki67Score.addField( 53 , 47 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 55 , 45 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 58 , 42 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 51 , 49 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 45.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 45.75 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab U, case TB381 ", function() {
    ki67Score = new Ki67Score( 10 , 40 , 20 , 30 );
 
    ki67Score.addField( 54 , 46 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 18.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 20.1 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab U, case KMS8 ", function() {
    ki67Score = new Ki67Score( 10 , 20 , 70 , 0 );
 
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 13.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 16.75 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab U, case KMS18 ", function() {
    ki67Score = new Ki67Score( 40 , 60 , 0 , 0 );
 
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 8 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 9.1 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab U, case KMS20 ", function() {
    ki67Score = new Ki67Score( 0 , 50 , 50 , 0 );
 
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 15.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 15.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab U, case TB016 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 10.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 10.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab U, case TB113 ", function() {
    ki67Score = new Ki67Score( 50 , 50 , 0 , 0 );
 
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 6.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 6.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab U, case KMS2 ", function() {
    ki67Score = new Ki67Score( 30 , 30 , 40 , 0 );
 
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 9.333333 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 10 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab U, case KMS3 ", function() {
    ki67Score = new Ki67Score( 30 , 40 , 30 , 0 );
 
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 12 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 12.1 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab U, case KMS4 ", function() {
    ki67Score = new Ki67Score( 0 , 25 , 25 , 50 );
 
    ki67Score.addField( 35 , 65 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 60 , 40 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 38 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 44.75 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab U, case KMS5 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 100 , 0 );
 
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 66 , 34 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 69 , 31 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 27.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 27.75 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab U, case KMS6 ", function() {
    ki67Score = new Ki67Score( 30 , 30 , 40 , 0 );
 
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 9.666667 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 10.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab U, case KMS11 ", function() {
    ki67Score = new Ki67Score( 30 , 40 , 30 , 0 );
 
    ki67Score.addField( 55 , 45 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 19.66667 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 18.7 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab U, case KMS14 ", function() {
    ki67Score = new Ki67Score( 30 , 40 , 30 , 0 );
 
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 14.66667 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 14.8 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab U, case KMS15 ", function() {
    ki67Score = new Ki67Score( 0 , 50 , 50 , 0 );
 
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 14.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 14.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab U, case KMS19 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 20 , 80 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 17 , 83 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 28 , 72 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 12 , 88 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 80.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 80.75 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab U, case KMS23 ", function() {
    ki67Score = new Ki67Score( 0 , 25 , 25 , 50 );
 
    ki67Score.addField( 44 , 56 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 60 , 40 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 38.33333 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 42.75 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab U, case TB036 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 13.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 13.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab U, case TB107 ", function() {
    ki67Score = new Ki67Score( 50 , 50 , 0 , 0 );
 
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 6.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 6.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab U, case TB319 ", function() {
    ki67Score = new Ki67Score( 50 , 50 , 0 , 0 );
 
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 6 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 6 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab U, case KMS13 ", function() {
    ki67Score = new Ki67Score( 20 , 50 , 30 , 0 );
 
    ki67Score.addField( 58 , 42 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 15.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 17.15 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab U, case KMS21 ", function() {
    ki67Score = new Ki67Score( 0 , 50 , 50 , 0 );
 
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 15 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 15 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab M, case TB022 ", function() {
    ki67Score = new Ki67Score( 37 , 50 , 13 , 0 );
 
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 10.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 9.43 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab M, case TB040 ", function() {
    ki67Score = new Ki67Score( 100 , 0 , 0 , 0 );
 
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 0.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 0.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab M, case TB067 ", function() {
    ki67Score = new Ki67Score( 0 , 14 , 28 , 58 );
 
    ki67Score.addField( 43 , 57 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 51 , 49 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 35.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 38.3 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab M, case TB077 ", function() {
    ki67Score = new Ki67Score( 14 , 14 , 58 , 14 );
 
    ki67Score.addField( 57 , 43 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 22 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 22.88 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab M, case TB083 ", function() {
    ki67Score = new Ki67Score( 20 , 0 , 70 , 10 );
 
    ki67Score.addField( 63 , 37 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 19.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 17.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab M, case TB090 ", function() {
    ki67Score = new Ki67Score( 10 , 65 , 25 , 0 );
 
    ki67Score.addField( 70 , 30 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 75 , 25 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 19.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 22.3 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab M, case TB196 ", function() {
    ki67Score = new Ki67Score( 90 , 10 , 0 , 0 );
 
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 4.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 3.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab M, case TB203 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 50 , 50 );
 
    ki67Score.addField( 50 , 50 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 48 , 52 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 32.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 32.75 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab M, case TB250 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 10 , 90 );
 
    ki67Score.addField( 41 , 59 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 52 , 48 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 47 , 53 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 45 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 50 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab M, case TB381 ", function() {
    ki67Score = new Ki67Score( 0 , 40 , 10 , 50 );
 
    ki67Score.addField( 64 , 36 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 45 , 55 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 30.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 28.15 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab M, case KMS8 ", function() {
    ki67Score = new Ki67Score( 20 , 70 , 10 , 0 );
 
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 12 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 10.35 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab M, case KMS18 ", function() {
    ki67Score = new Ki67Score( 40 , 30 , 20 , 10 );
 
    ki67Score.addField( 62 , 38 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 16.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 10.2 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab M, case KMS20 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 60 , 40 );
 
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 16.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 15.3 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab M, case TB016 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 9.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 9.75 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab M, case TB113 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 6.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 6.75 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab M, case KMS2 ", function() {
    ki67Score = new Ki67Score( 0 , 90 , 10 , 0 );
 
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 9.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 9 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab M, case KMS3 ", function() {
    ki67Score = new Ki67Score( 0 , 30 , 70 , 0 );
 
    ki67Score.addField( 75 , 25 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 15.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 14.9 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab M, case KMS4 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 30 , 70 );
 
    ki67Score.addField( 25 , 75 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 33 , 67 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 38 , 62 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 55.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 53.3 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab M, case KMS5 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 20 , 80 );
 
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 71 , 29 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 71 , 29 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 24 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 24.66667 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab M, case KMS6 ", function() {
    ki67Score = new Ki67Score( 0 , 60 , 40 , 0 );
 
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 16 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 15.3 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab M, case KMS11 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 90 , 0 );
 
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 13.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 15.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab M, case KMS14 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 80 , 0 );
 
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 63 , 37 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 70 , 30 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 25.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 26.33333 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab M, case KMS15 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 20 , 80 );
 
    ki67Score.addField( 64 , 36 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 22.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 23.2 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab M, case KMS19 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 10 , 90 );
 
    ki67Score.addField( 21 , 79 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 24 , 76 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 11 , 89 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 64 , 36 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 70 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 76.8 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab M, case KMS23 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 20 , 80 );
 
    ki67Score.addField( 54 , 46 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 47 , 53 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 49 , 51 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 44.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 45.4 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab M, case TB036 ", function() {
    ki67Score = new Ki67Score( 0 , 80 , 20 , 0 );
 
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 12 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 11.6 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab M, case TB107 ", function() {
    ki67Score = new Ki67Score( 40 , 40 , 20 , 0 );
 
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 10 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 8.4 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab M, case TB319 ", function() {
    ki67Score = new Ki67Score( 30 , 70 , 0 , 0 );
 
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 6.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 6.366667 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab M, case KMS13 ", function() {
    ki67Score = new Ki67Score( 30 , 50 , 20 , 0 );
 
    ki67Score.addField( 72 , 28 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 11.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 10.55 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab M, case KMS21 ", function() {
    ki67Score = new Ki67Score( 0 , 40 , 60 , 0 );
 
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 19.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 19.9 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab I, case TB022 ", function() {
    ki67Score = new Ki67Score( 20 , 0 , 80 , 0 );
 
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 9.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 10.26667 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab I, case TB040 ", function() {
    ki67Score = new Ki67Score( 0 , 90 , 10 , 0 );
 
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 2 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 1.4 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab I, case TB067 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 40 , 50 );
 
    ki67Score.addField( 55 , 45 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 64 , 36 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 30 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 30.75 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab I, case TB077 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 60 , 30 );
 
    ki67Score.addField( 58 , 42 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 67 , 33 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 26.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 31.1 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab I, case TB083 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 60 , 30 );
 
    ki67Score.addField( 60 , 40 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 19.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 22.8 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab I, case TB090 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 60 , 30 );
 
    ki67Score.addField( 70 , 30 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 21.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 21.1 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab I, case TB196 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 3.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 3.75 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab I, case TB203 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 50 , 50 );
 
    ki67Score.addField( 56 , 44 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 54 , 46 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 34.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 34.25 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab I, case TB250 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 47 , 53 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 54 , 46 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 43 , 57 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 54 , 46 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 50.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 50.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab I, case TB381 ", function() {
    ki67Score = new Ki67Score( 0 , 30 , 30 , 40 );
 
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 13.33333 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 13.9 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab I, case KMS8 ", function() {
    ki67Score = new Ki67Score( 0 , 50 , 50 , 0 );
 
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 11.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 11.25 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab I, case KMS18 ", function() {
    ki67Score = new Ki67Score( 0 , 60 , 20 , 20 );
 
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 12.33333 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 7.8 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab I, case KMS20 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 70 , 30 );
 
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 11.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 11.83333 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab I, case TB016 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 100 , 0 );
 
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 13 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 13 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab I, case TB113 ", function() {
    ki67Score = new Ki67Score( 0 , 90 , 10 , 0 );
 
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 6.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 6.1 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab I, case KMS2 ", function() {
    ki67Score = new Ki67Score( 0 , 50 , 50 , 0 );
 
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 10.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 10.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab I, case KMS3 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 80 , 0 );
 
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 14.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 15.53333 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab I, case KMS4 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 20 , 80 );
 
    ki67Score.addField( 30 , 70 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 43 , 57 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 44 , 56 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 48 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 50.6 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab I, case KMS5 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 80 , 0 );
 
    ki67Score.addField( 66 , 34 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 70 , 30 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 64 , 36 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 26.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 28.06667 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab I, case KMS6 ", function() {
    ki67Score = new Ki67Score( 0 , 50 , 50 , 0 );
 
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 9 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 9 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab I, case KMS11 ", function() {
    ki67Score = new Ki67Score( 0 , 40 , 60 , 0 );
 
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 12 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 14 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab I, case KMS14 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 100 , 0 );
 
    ki67Score.addField( 69 , 31 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 24 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 24 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab I, case KMS15 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 80 , 0 );
 
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 72 , 28 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 16.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 17.13333 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab I, case KMS19 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 47 , 53 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 29 , 71 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 25 , 75 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 25 , 75 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 68.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 68.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab I, case KMS23 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 40 , 60 );
 
    ki67Score.addField( 54 , 46 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 51 , 49 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 71 , 29 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 36.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 38.9 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab I, case TB036 ", function() {
    ki67Score = new Ki67Score( 0 , 30 , 70 , 0 );
 
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 15.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 14.9 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab I, case TB107 ", function() {
    ki67Score = new Ki67Score( 20 , 80 , 0 , 0 );
 
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 7.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 8.133333 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab I, case TB319 ", function() {
    ki67Score = new Ki67Score( 0 , 60 , 40 , 0 );
 
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 4.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 3.7 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab I, case KMS13 ", function() {
    ki67Score = new Ki67Score( 0 , 60 , 40 , 0 );
 
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 11.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 10.2 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab I, case KMS21 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 30 , 50 );
 
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 72 , 28 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 14.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 14.6 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab D, case TB022 ", function() {
    ki67Score = new Ki67Score( 0 , 90 , 10 , 0 );
 
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 7.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 6.8 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab D, case TB040 ", function() {
    ki67Score = new Ki67Score( 90 , 10 , 0 , 0 );
 
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 0.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 0.7 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab D, case TB067 ", function() {
    ki67Score = new Ki67Score( 0 , 60 , 40 , 0 );
 
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 43 , 57 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 66 , 34 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 30 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 33.1 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab D, case TB077 ", function() {
    ki67Score = new Ki67Score( 10 , 10 , 70 , 10 );
 
    ki67Score.addField( 62 , 38 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 44 , 56 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 27.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 44.6 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab D, case TB083 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 80 , 10 );
 
    ki67Score.addField( 62 , 38 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 21.33333 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 20.4 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab D, case TB090 ", function() {
    ki67Score = new Ki67Score( 0 , 40 , 50 , 10 );
 
    ki67Score.addField( 66 , 34 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 23.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 21.3 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab D, case TB196 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 2 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 2 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab D, case TB203 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 80 , 20 );
 
    ki67Score.addField( 66 , 34 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 24.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 24.13333 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab D, case TB250 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 30 , 70 );
 
    ki67Score.addField( 60 , 40 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 58 , 42 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 55 , 45 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 36.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 35.33333 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab D, case TB381 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 75 , 5 );
 
    ki67Score.addField( 67 , 33 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 22.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 21.25 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab D, case KMS8 ", function() {
    ki67Score = new Ki67Score( 0 , 50 , 50 , 0 );
 
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 13.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 13.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab D, case KMS18 ", function() {
    ki67Score = new Ki67Score( 25 , 25 , 25 , 25 );
 
    ki67Score.addField( 72 , 28 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 15.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 15.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab D, case KMS20 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 90 , 0 );
 
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 75 , 25 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 17.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 19.1 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab D, case TB016 ", function() {
    ki67Score = new Ki67Score( 0 , 66.6666666666667 , 33.3333333333333 , 0 );
 
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 9.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 10.22222 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab D, case TB113 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab D, case KMS2 ", function() {
    ki67Score = new Ki67Score( 0 , 60 , 40 , 0 );
 
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 11.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 11.4 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab D, case KMS3 ", function() {
    ki67Score = new Ki67Score( 0 , 70 , 30 , 0 );
 
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 11.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 11.83333 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab D, case KMS4 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 40 , 60 );
 
    ki67Score.addField( 46 , 54 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 51 , 49 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 35.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 38.9 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab D, case KMS5 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 40 , 40 );
 
    ki67Score.addField( 69 , 31 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 18.33333 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 20.6 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab D, case KMS6 ", function() {
    ki67Score = new Ki67Score( 15 , 25 , 35 , 25 );
 
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 62 , 38 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 20.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 23.85 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab D, case KMS11 ", function() {
    ki67Score = new Ki67Score( 30 , 30 , 30 , 10 );
 
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 8.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 6.7 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab D, case KMS14 ", function() {
    ki67Score = new Ki67Score( 0 , 30 , 70 , 0 );
 
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 20 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 19.6 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab D, case KMS15 ", function() {
    ki67Score = new Ki67Score( 0 , 50 , 50 , 0 );
 
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 71 , 29 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 19.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 19.25 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab D, case KMS19 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 21 , 79 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 21 , 79 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 11 , 89 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 18 , 82 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 82.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 82.25 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab D, case KMS23 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 30 , 70 );
 
    ki67Score.addField( 63 , 37 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 68 , 32 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 50 , 50 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 35 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 34.06667 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab D, case TB036 ", function() {
    ki67Score = new Ki67Score( 0 , 75 , 25 , 0 );
 
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 11.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 11.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab D, case TB107 ", function() {
    ki67Score = new Ki67Score( 50 , 50 , 0 , 0 );
 
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 7 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 7 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab D, case TB319 ", function() {
    ki67Score = new Ki67Score( 0 , 70 , 30 , 0 );
 
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 8.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 8.633333 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab D, case KMS13 ", function() {
    ki67Score = new Ki67Score( 50 , 50 , 0 , 0 );
 
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 4.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 4.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab D, case KMS21 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 90 , 0 );
 
    ki67Score.addField( 72 , 28 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 21 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 21.6 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab J, case TB022 ", function() {
    ki67Score = new Ki67Score( 0 , 60 , 20 , 20 );
 
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 10 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 7.6 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab J, case TB040 ", function() {
    ki67Score = new Ki67Score( 90 , 10 , 0 , 0 );
 
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 0.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 0.2 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab J, case TB067 ", function() {
    ki67Score = new Ki67Score( 0 , 30 , 30 , 40 );
 
    ki67Score.addField( 55 , 45 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 25.66667 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 27.6 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab J, case TB077 ", function() {
    ki67Score = new Ki67Score( 0 , 40 , 40 , 20 );
 
    ki67Score.addField( 67 , 33 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 17.66667 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 14.6 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab J, case TB083 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 60 , 20 );
 
    ki67Score.addField( 70 , 30 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 15.66667 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 15 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab J, case TB090 ", function() {
    ki67Score = new Ki67Score( 0 , 60 , 20 , 20 );
 
    ki67Score.addField( 67 , 33 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 16 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 10.8 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab J, case TB196 ", function() {
    ki67Score = new Ki67Score( 80 , 10 , 10 , 0 );
 
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 3.666667 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 1.1 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab J, case TB203 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 40 , 40 );
 
    ki67Score.addField( 44 , 56 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 27.33333 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 31.2 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab J, case TB250 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 40 , 50 );
 
    ki67Score.addField( 45 , 55 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 42 , 58 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 37 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 39.55 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab J, case TB381 ", function() {
    ki67Score = new Ki67Score( 0 , 50 , 40 , 10 );
 
    ki67Score.addField( 64 , 36 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 14.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 11.35 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab J, case KMS8 ", function() {
    ki67Score = new Ki67Score( 0 , 40 , 50 , 10 );
 
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 12.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 9.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab J, case KMS18 ", function() {
    ki67Score = new Ki67Score( 0 , 70 , 20 , 10 );
 
    ki67Score.addField( 64 , 36 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 12 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 6.3 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab J, case KMS20 ", function() {
    ki67Score = new Ki67Score( 0 , 40 , 50 , 10 );
 
    ki67Score.addField( 75 , 25 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 14.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 11.35 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab J, case TB016 ", function() {
    ki67Score = new Ki67Score( 0 , 70 , 30 , 0 );
 
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 7 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 7.533333 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab J, case TB113 ", function() {
    ki67Score = new Ki67Score( 0 , 90 , 10 , 0 );
 
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 3.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 2.7 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab J, case KMS2 ", function() {
    ki67Score = new Ki67Score( 0 , 60 , 40 , 0 );
 
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 10.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 9.3 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab J, case KMS3 ", function() {
    ki67Score = new Ki67Score( 0 , 50 , 30 , 20 );
 
    ki67Score.addField( 75 , 25 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 10 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 9.2 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab J, case KMS4 ", function() {
    ki67Score = new Ki67Score( 0 , 30 , 30 , 40 );
 
    ki67Score.addField( 42 , 58 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 28 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 31 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab J, case KMS5 ", function() {
    ki67Score = new Ki67Score( 0 , 30 , 40 , 30 );
 
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 11 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 10.8 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab J, case KMS6 ", function() {
    ki67Score = new Ki67Score( 20 , 30 , 30 , 20 );
 
    ki67Score.addField( 75 , 25 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 10.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 10.4 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab J, case KMS11 ", function() {
    ki67Score = new Ki67Score( 30 , 30 , 30 , 10 );
 
    ki67Score.addField( 71 , 29 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 11 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 7.4 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab J, case KMS14 ", function() {
    ki67Score = new Ki67Score( 10 , 30 , 40 , 20 );
 
    ki67Score.addField( 63 , 37 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 15.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 16.4 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab J, case KMS15 ", function() {
    ki67Score = new Ki67Score( 0 , 40 , 30 , 30 );
 
    ki67Score.addField( 71 , 29 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 16 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 14.9 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab J, case KMS19 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 20 , 80 );
 
    ki67Score.addField( 31 , 69 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 27 , 73 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 34 , 66 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 71 , 29 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 59.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 61.26667 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab J, case KMS23 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 40 , 50 );
 
    ki67Score.addField( 50 , 50 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 51 , 49 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 31.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 33.55 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab J, case TB036 ", function() {
    ki67Score = new Ki67Score( 20 , 50 , 30 , 0 );
 
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 0 , 100 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 29.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 24.9 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab J, case TB107 ", function() {
    ki67Score = new Ki67Score( 70 , 30 , 0 , 0 );
 
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 2.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 2.633333 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab J, case TB319 ", function() {
    ki67Score = new Ki67Score( 50 , 50 , 0 , 0 );
 
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 4.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 4.25 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab J, case KMS13 ", function() {
    ki67Score = new Ki67Score( 60 , 20 , 20 , 0 );
 
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 6.333333 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 3.8 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab J, case KMS21 ", function() {
    ki67Score = new Ki67Score( 40 , 20 , 20 , 20 );
 
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 12.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 10 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab S, case TB022 ", function() {
    ki67Score = new Ki67Score( 0 , 50 , 50 , 0 );
 
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 14.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 14.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab S, case TB040 ", function() {
    ki67Score = new Ki67Score( 90 , 10 , 0 , 0 );
 
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 0.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 0.2 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab S, case TB067 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 30 , 60 );
 
    ki67Score.addField( 46 , 54 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 56 , 44 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 28.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 33.3 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab S, case TB077 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 20 , 60 );
 
    ki67Score.addField( 58 , 42 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 22.66667 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 30.4 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab S, case TB083 ", function() {
    ki67Score = new Ki67Score( 0 , 45 , 45 , 10 );
 
    ki67Score.addField( 58 , 42 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 23.33333 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 16.8 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab S, case TB090 ", function() {
    ki67Score = new Ki67Score( 0 , 60 , 20 , 20 );
 
    ki67Score.addField( 62 , 38 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 65 , 35 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 28.33333 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 21.8 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab S, case TB196 ", function() {
    ki67Score = new Ki67Score( 0 , 90 , 10 , 0 );
 
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 3.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 2.4 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab S, case TB203 ", function() {
    ki67Score = new Ki67Score( 0 , 30 , 40 , 30 );
 
    ki67Score.addField( 52 , 48 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 67 , 33 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 31.33333 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 31.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab S, case TB250 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 40 , 50 );
 
    ki67Score.addField( 46 , 54 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 56 , 44 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 66 , 34 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 37.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 39.8 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab S, case TB381 ", function() {
    ki67Score = new Ki67Score( 0 , 50 , 30 , 20 );
 
    ki67Score.addField( 53 , 47 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 22 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 20.8 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab S, case KMS8 ", function() {
    ki67Score = new Ki67Score( 0 , 60 , 20 , 20 );
 
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 13.66667 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 9.8 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab S, case KMS18 ", function() {
    ki67Score = new Ki67Score( 40 , 40 , 10 , 10 );
 
    ki67Score.addField( 69 , 31 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 11.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 5.3 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab S, case KMS20 ", function() {
    ki67Score = new Ki67Score( 0 , 50 , 40 , 10 );
 
    ki67Score.addField( 66 , 34 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 19 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 17.05 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab S, case TB016 ", function() {
    ki67Score = new Ki67Score( 0 , 70 , 20 , 10 );
 
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 8 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 6.85 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab S, case TB113 ", function() {
    ki67Score = new Ki67Score( 0 , 80 , 20 , 0 );
 
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 7.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 7 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab S, case KMS2 ", function() {
    ki67Score = new Ki67Score( 0 , 60 , 40 , 0 );
 
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 11.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 10.3 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab S, case KMS3 ", function() {
    ki67Score = new Ki67Score( 0 , 80 , 20 , 0 );
 
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 10 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 8.866667 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab S, case KMS4 ", function() {
    ki67Score = new Ki67Score( 0 , 40 , 30 , 30 );
 
    ki67Score.addField( 31 , 69 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 69 , 31 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 35.66667 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 32.8 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab S, case KMS5 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 80 , 0 );
 
    ki67Score.addField( 72 , 28 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 58 , 42 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 69 , 31 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 28.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 29.73333 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab S, case KMS6 ", function() {
    ki67Score = new Ki67Score( 0 , 40 , 40 , 20 );
 
    ki67Score.addField( 63 , 37 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 18.33333 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 14.6 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab S, case KMS11 ", function() {
    ki67Score = new Ki67Score( 0 , 50 , 30 , 20 );
 
    ki67Score.addField( 62 , 38 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 14.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 13.55 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab S, case KMS14 ", function() {
    ki67Score = new Ki67Score( 0 , 60 , 30 , 10 );
 
    ki67Score.addField( 56 , 44 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 71 , 29 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 28 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 24.8 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab S, case KMS15 ", function() {
    ki67Score = new Ki67Score( 0 , 40 , 30 , 30 );
 
    ki67Score.addField( 50 , 50 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 26 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 23.9 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab S, case KMS19 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 10 , 90 );
 
    ki67Score.addField( 34 , 66 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 31 , 69 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 27 , 73 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 54 , 46 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 63.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 67 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab S, case KMS23 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 60 , 40 );
 
    ki67Score.addField( 41 , 59 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 49 , 51 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 72 , 28 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 67 , 33 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 42.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 40.3 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab S, case TB036 ", function() {
    ki67Score = new Ki67Score( 0 , 90 , 10 , 0 );
 
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 12.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 9.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab S, case TB107 ", function() {
    ki67Score = new Ki67Score( 0 , 80 , 20 , 0 );
 
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 10 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 9.333333 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab S, case TB319 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 3.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 3.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab S, case KMS13 ", function() {
    ki67Score = new Ki67Score( 0 , 90 , 10 , 0 );
 
    ki67Score.addField( 65 , 35 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 11.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 6.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab S, case KMS21 ", function() {
    ki67Score = new Ki67Score( 0 , 60 , 40 , 0 );
 
    ki67Score.addField( 61 , 39 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 19.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 17.3 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab W, case TB022 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 100 , 0 );
 
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 6.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 6.25 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab W, case TB040 ", function() {
    ki67Score = new Ki67Score( 90 , 5 , 5 , 0 );
 
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 2 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 0.3 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab W, case TB067 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 50 , 50 );
 
    ki67Score.addField( 67 , 33 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 70 , 30 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 70 , 30 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 75 , 25 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 29.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 29.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab W, case TB077 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 70 , 30 );
 
    ki67Score.addField( 43 , 57 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 69 , 31 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 32.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 33.9 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab W, case TB083 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 90 , 10 );
 
    ki67Score.addField( 71 , 29 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 18.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 16.1 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab W, case TB090 ", function() {
    ki67Score = new Ki67Score( 0 , 60 , 40 , 0 );
 
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 75 , 25 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 16 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 14.3 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab W, case TB196 ", function() {
    ki67Score = new Ki67Score( 25 , 75 , 0 , 0 );
 
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 3 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 3 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab W, case TB203 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 50 , 50 );
 
    ki67Score.addField( 45 , 55 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 42 , 58 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 34.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 34.25 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab W, case TB250 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 70 , 30 );
 
    ki67Score.addField( 47 , 53 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 75 , 25 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 30 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 31.53333 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab W, case TB381 ", function() {
    ki67Score = new Ki67Score( 0 , 30 , 60 , 10 );
 
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 11.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 10.1 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab W, case KMS8 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 7 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 7 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab W, case KMS18 ", function() {
    ki67Score = new Ki67Score( 50 , 40 , 10 , 0 );
 
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 6.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 5.3 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab W, case KMS20 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 100 , 0 );
 
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 12.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 12.75 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab W, case TB016 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 7.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 7.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab W, case TB113 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 5.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 5.25 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab W, case KMS2 ", function() {
    ki67Score = new Ki67Score( 0 , 60 , 40 , 0 );
 
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 10 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 9.2 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab W, case KMS3 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 11.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 11.25 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab W, case KMS4 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 30 , 70 );
 
    ki67Score.addField( 38 , 62 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 39 , 61 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 54 , 46 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 72 , 28 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 49.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 47.83333 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab W, case KMS5 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 100 , 0 );
 
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 75 , 25 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 22 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 22 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab W, case KMS6 ", function() {
    ki67Score = new Ki67Score( 0 , 40 , 60 , 0 );
 
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 10.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 11.4 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab W, case KMS11 ", function() {
    ki67Score = new Ki67Score( 0 , 30 , 70 , 0 );
 
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 12.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 11.56667 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab W, case KMS14 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 100 , 0 );
 
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 72 , 28 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 23.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 23.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab W, case KMS15 ", function() {
    ki67Score = new Ki67Score( 0 , 60 , 40 , 0 );
 
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 72 , 28 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 15 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 12.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab W, case KMS19 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 30 , 70 );
 
    ki67Score.addField( 21 , 79 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 39 , 61 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 36 , 64 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 67 , 33 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 59.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 57.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab W, case KMS23 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 60 , 30 );
 
    ki67Score.addField( 47 , 53 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 69 , 31 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 32.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 34.1 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab W, case TB036 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 9 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 9 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab W, case TB107 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 4.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 4.75 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab W, case TB319 ", function() {
    ki67Score = new Ki67Score( 10 , 90 , 0 , 0 );
 
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 5.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 6.6 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab W, case KMS13 ", function() {
    ki67Score = new Ki67Score( 0 , 90 , 10 , 0 );
 
    ki67Score.addField( 82 , 18 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 8.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 6.6 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab W, case KMS21 ", function() {
    ki67Score = new Ki67Score( 0 , 60 , 40 , 0 );
 
    ki67Score.addField( 75 , 25 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 11 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 9.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab N, case TB022 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 11 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 11 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab N, case TB040 ", function() {
    ki67Score = new Ki67Score( 80 , 20 , 0 , 0 );
 
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 0.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 0.2 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab N, case TB067 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 30 , 70 );
 
    ki67Score.addField( 56 , 44 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 54 , 46 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 30.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 28.83333 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab N, case TB077 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 40 , 50 );
 
    ki67Score.addField( 61 , 39 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 64 , 36 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 29.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 30.35 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab N, case TB083 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 50 , 50 );
 
    ki67Score.addField( 72 , 28 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 61 , 39 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 23.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 23.75 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab N, case TB090 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 70 , 30 );
 
    ki67Score.addField( 70 , 30 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 19.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 19.96667 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab N, case TB196 ", function() {
    ki67Score = new Ki67Score( 40 , 60 , 0 , 0 );
 
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 3.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 4.2 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab N, case TB203 ", function() {
    ki67Score = new Ki67Score( 0 , 5 , 25 , 70 );
 
    ki67Score.addField( 42 , 58 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 53 , 47 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 33.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 42.65 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab N, case TB250 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 20 , 80 );
 
    ki67Score.addField( 50 , 50 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 60 , 40 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 51 , 49 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 38.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 40.06667 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab N, case TB381 ", function() {
    ki67Score = new Ki67Score( 0 , 30 , 40 , 30 );
 
    ki67Score.addField( 68 , 32 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 19.66667 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 19.8 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab N, case KMS8 ", function() {
    ki67Score = new Ki67Score( 0 , 70 , 30 , 0 );
 
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 8.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 9.033333 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab N, case KMS18 ", function() {
    ki67Score = new Ki67Score( 70 , 20 , 10 , 0 );
 
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 4.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 2.2 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab N, case KMS20 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 80 , 0 );
 
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 18.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 18.93333 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab N, case TB016 ", function() {
    ki67Score = new Ki67Score( 20 , 40 , 40 , 0 );
 
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 5.666667 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 6.6 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab N, case TB113 ", function() {
    ki67Score = new Ki67Score( 30 , 70 , 0 , 0 );
 
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 3 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 2.8 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab N, case KMS2 ", function() {
    ki67Score = new Ki67Score( 20 , 60 , 20 , 0 );
 
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 4.666667 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 3.6 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab N, case KMS3 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 9.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 9.25 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab N, case KMS4 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 30 , 60 );
 
    ki67Score.addField( 59 , 41 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 69 , 31 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 24.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 27 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab N, case KMS5 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 100 , 0 );
 
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 75 , 25 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 18.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 18.25 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab N, case KMS6 ", function() {
    ki67Score = new Ki67Score( 0 , 40 , 60 , 0 );
 
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 7 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 8.2 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab N, case KMS11 ", function() {
    ki67Score = new Ki67Score( 0 , 40 , 20 , 40 );
 
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 10.33333 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 11.2 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab N, case KMS14 ", function() {
    ki67Score = new Ki67Score( 0 , 50 , 40 , 10 );
 
    ki67Score.addField( 56 , 44 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 22.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 19.15 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab N, case KMS15 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 90 , 10 );
 
    ki67Score.addField( 69 , 31 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 15.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 12.7 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab N, case KMS19 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 37 , 63 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 48 , 52 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 52 , 48 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 20 , 80 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 60.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 60.75 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab N, case KMS23 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 20 , 80 );
 
    ki67Score.addField( 64 , 36 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 58 , 42 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 59 , 41 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 33 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 34.33333 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab N, case TB036 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 8.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 8.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab N, case TB107 ", function() {
    ki67Score = new Ki67Score( 50 , 50 , 0 , 0 );
 
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 4.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 4.25 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab N, case TB319 ", function() {
    ki67Score = new Ki67Score( 10 , 90 , 0 , 0 );
 
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 4.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 5.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab N, case KMS13 ", function() {
    ki67Score = new Ki67Score( 10 , 80 , 10 , 0 );
 
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 4.666667 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 2.8 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab N, case KMS21 ", function() {
    ki67Score = new Ki67Score( 0 , 50 , 50 , 0 );
 
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 15.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 15.25 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab Q, case TB022 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 10.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 10.25 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab Q, case TB040 ", function() {
    ki67Score = new Ki67Score( 98 , 2 , 0 , 0 );
 
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 0.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 0.3666667 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab Q, case TB067 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 60 , 40 );
 
    ki67Score.addField( 60 , 40 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 60 , 40 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 30.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 28.9 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab Q, case TB077 ", function() {
    ki67Score = new Ki67Score( 0 , 30 , 65 , 5 );
 
    ki67Score.addField( 56 , 44 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 23.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 18.275 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab Q, case TB083 ", function() {
    ki67Score = new Ki67Score( 0 , 80 , 20 , 0 );
 
    ki67Score.addField( 76 , 24 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 10.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 9.333333 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab Q, case TB090 ", function() {
    ki67Score = new Ki67Score( 0 , 70 , 20 , 10 );
 
    ki67Score.addField( 67 , 33 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 17.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 13.6 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab Q, case TB196 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 4.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 4.25 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab Q, case TB203 ", function() {
    ki67Score = new Ki67Score( 0 , 25 , 50 , 25 );
 
    ki67Score.addField( 51 , 49 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 24.33333 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 23 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab Q, case TB250 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 45 , 45 );
 
    ki67Score.addField( 64 , 36 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 21.66667 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 26.8 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab Q, case TB381 ", function() {
    ki67Score = new Ki67Score( 0 , 60 , 30 , 10 );
 
    ki67Score.addField( 70 , 30 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 16.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 13.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab Q, case KMS8 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 8.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 8.25 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab Q, case KMS18 ", function() {
    ki67Score = new Ki67Score( 0 , 90 , 5 , 5 );
 
    ki67Score.addField( 67 , 33 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 69 , 31 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 23.66667 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 9.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab Q, case KMS20 ", function() {
    ki67Score = new Ki67Score( 0 , 85 , 15 , 0 );
 
    ki67Score.addField( 70 , 30 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 5 , 95 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 35.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 35.95 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab Q, case TB016 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 6 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 6 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab Q, case TB113 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 3.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 3.75 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab Q, case KMS2 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 6.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 6.25 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab Q, case KMS3 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 5.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 5.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab Q, case KMS4 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 70 , 10 );
 
    ki67Score.addField( 45 , 55 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 68 , 32 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 28.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 24.9 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab Q, case KMS5 ", function() {
    ki67Score = new Ki67Score( 0 , 60 , 40 , 0 );
 
    ki67Score.addField( 69 , 31 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 20 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 18.2 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab Q, case KMS6 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 11.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 11.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab Q, case KMS11 ", function() {
    ki67Score = new Ki67Score( 0 , 95 , 5 , 0 );
 
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 12.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 9.7 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab Q, case KMS14 ", function() {
    ki67Score = new Ki67Score( 0 , 80 , 20 , 0 );
 
    ki67Score.addField( 73 , 27 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 16 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 15.26667 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab Q, case KMS15 ", function() {
    ki67Score = new Ki67Score( 0 , 50 , 50 , 0 );
 
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 71 , 29 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 15.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 15.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab Q, case KMS19 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 15 , 85 );
 
    ki67Score.addField( 41 , 59 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 32 , 68 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 27 , 73 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 65 , 35 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 58.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 61.91667 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab Q, case KMS23 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 65 , 35 );
 
    ki67Score.addField( 52 , 48 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 78 , 22 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 27.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 30.01667 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab Q, case TB036 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 8.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 8.75 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab Q, case TB107 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab Q, case TB319 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 5.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 5.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab Q, case KMS13 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 7.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 7.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab Q, case KMS21 ", function() {
    ki67Score = new Ki67Score( 0 , 90 , 10 , 0 );
 
    ki67Score.addField( 75 , 25 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 13.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 10.9 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab X, case TB022 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 75 , 15 );
 
    ki67Score.addField( 83 , 17 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 11 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 11.025 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab X, case TB040 ", function() {
    ki67Score = new Ki67Score( 50 , 5 , 40 , 5 );
 
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 98 , 2 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 1.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 1 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab X, case TB067 ", function() {
    ki67Score = new Ki67Score( 0 , 25 , 0 , 75 );
 
    ki67Score.addField( 59 , 41 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 72 , 28 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 55 , 45 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 33.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 33.75 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab X, case TB077 ", function() {
    ki67Score = new Ki67Score( 0 , 15 , 65 , 20 );
 
    ki67Score.addField( 63 , 37 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 64 , 36 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 67 , 33 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 27.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 30.575 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab X, case TB083 ", function() {
    ki67Score = new Ki67Score( 0 , 20 , 40 , 40 );
 
    ki67Score.addField( 60 , 40 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 72 , 28 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 24.66667 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 28.4 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab X, case TB090 ", function() {
    ki67Score = new Ki67Score( 0 , 30 , 20 , 50 );
 
    ki67Score.addField( 72 , 28 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 70 , 30 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 20 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 20.3 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab X, case TB196 ", function() {
    ki67Score = new Ki67Score( 77.2727272727273 , 13.6363636363636 , 4.54545454545454 , 4.54545454545454 );
 
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 99 , 1 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 5.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 2.045455 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab X, case TB203 ", function() {
    ki67Score = new Ki67Score( 0 , 10 , 80 , 10 );
 
    ki67Score.addField( 61 , 39 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 22 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 17.8 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab X, case TB250 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 90 , 10 );
 
    ki67Score.addField( 57 , 43 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 66 , 34 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 69 , 31 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 32.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 30.7 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab X, case TB381 ", function() {
    ki67Score = new Ki67Score( 0 , 45 , 45 , 10 );
 
    ki67Score.addField( 71 , 29 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 16 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 11.45 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab X, case KMS8 ", function() {
    ki67Score = new Ki67Score( 0 , 90 , 10 , 0 );
 
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 9.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 9 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab X, case KMS18 ", function() {
    ki67Score = new Ki67Score( 75 , 25 , 0 , 0 );
 
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
    ki67Score.addField( 100 , 0 , Ki67Score.FIELD_TYPE_NEG );
  expect(Math.abs(ki67Score.getGlobalScore()- 1.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 1.75 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab X, case KMS20 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 100 , 0 );
 
    ki67Score.addField( 89 , 11 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 13.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 13.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab X, case TB016 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 11.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 11.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab X, case TB113 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 6.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 6.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab X, case KMS2 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 11 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 11 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab X, case KMS3 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 11 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 11 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab X, case KMS4 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 60 , 40 );
 
    ki67Score.addField( 45 , 55 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 37 , 63 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 60 , 40 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 54 , 46 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 51 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 49.4 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab X, case KMS5 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 100 , 0 );
 
    ki67Score.addField( 66 , 34 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 80 , 20 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 64 , 36 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 29 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 29 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab X, case KMS6 ", function() {
    ki67Score = new Ki67Score( 0 , 65 , 35 , 0 );
 
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 17.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 17.75 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab X, case KMS11 ", function() {
    ki67Score = new Ki67Score( 0 , 70 , 30 , 0 );
 
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 90 , 10 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 11 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 11.33333 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab X, case KMS14 ", function() {
    ki67Score = new Ki67Score( 0 , 90 , 10 , 0 );
 
    ki67Score.addField( 72 , 28 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 84 , 16 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 81 , 19 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 19.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 18.1 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab X, case KMS15 ", function() {
    ki67Score = new Ki67Score( 0 , 5 , 80 , 15 );
 
    ki67Score.addField( 64 , 36 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 86 , 14 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 88 , 12 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 17 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 16.1 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab X, case KMS19 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 0 , 100 );
 
    ki67Score.addField( 38 , 62 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 53 , 47 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 35 , 65 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 27 , 73 , Ki67Score.FIELD_TYPE_HIGH );
  expect(Math.abs(ki67Score.getGlobalScore()- 61.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 61.75 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab X, case KMS23 ", function() {
    ki67Score = new Ki67Score( 0 , 0 , 50 , 50 );
 
    ki67Score.addField( 60 , 40 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 54 , 46 , Ki67Score.FIELD_TYPE_HIGH );
    ki67Score.addField( 74 , 26 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 77 , 23 , Ki67Score.FIELD_TYPE_MED );
  expect(Math.abs(ki67Score.getGlobalScore()- 33.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 33.75 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab X, case TB036 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 13.25 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 13.25 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab X, case TB107 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 96 , 4 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 87 , 13 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 6.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 6.75 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab X, case TB319 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 91 , 9 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 94 , 6 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 7.5 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 7.5 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab X, case KMS13 ", function() {
    ki67Score = new Ki67Score( 0 , 100 , 0 , 0 );
 
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 95 , 5 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 97 , 3 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 4 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 4 )).toBeLessThan(0.1);
 });
it(" Phase 3B, lab X, case KMS21 ", function() {
    ki67Score = new Ki67Score( 0 , 75 , 25 , 0 );
 
    ki67Score.addField( 79 , 21 , Ki67Score.FIELD_TYPE_MED );
    ki67Score.addField( 92 , 8 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 85 , 15 , Ki67Score.FIELD_TYPE_LOW );
    ki67Score.addField( 93 , 7 , Ki67Score.FIELD_TYPE_LOW );
  expect(Math.abs(ki67Score.getGlobalScore()- 12.75 )).toBeLessThan(0.1);
   expect(Math.abs(ki67Score.getWeightedGlobalScore()- 12.75 )).toBeLessThan(0.1);
 });
});