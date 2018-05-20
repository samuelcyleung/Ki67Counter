tsc ../../src/app/ki67Score.ts
mv ../../src/app/ki67Score.js lib
tsc ../../src/app/scoringFieldsAllocator.ts 
mv ../../src/app/scoringFieldsAllocator.js lib/

Rscript generate_test_data.R 

jasmine spec/ki67ScoreSpec.js 
jasmine spec/scoringFieldsAllocatorSpec.js

