# generate test data
# first use phase 3A data
library(ki67p3)
data("ki67p3.raw.d")
data("ki67p3.ug.d")
data("ki67p3.wg.d")
library(ki67p3b)
data("ki67p3b.raw")
data("ki67p3b.ug.ws")
data("ki67p3b.wg.ws")

OUTPUT_DIR <- "/home/samuelc/workspace/js/Ki67Counter/test cases/unit_tests/spec"

print_sa_header <- function(){
  cat(
    "describe(\"ScoringFieldsAllocator\", function() {\n",
    "  var ScoringFieldsAllocator = require(\"../lib/scoringFieldsAllocator\").ScoringFieldsAllocator\n",
    "  var scoringFieldsAllocator;\n",
    "  beforeEach(function() {\n",
    "});\n")
}

print_sa_footer <- function(){
  cat("});")
}

print_sa_test_case <- function(desc,pNeg,pLow,pMed,pHigh,nNeg,nLow,nMed,nHigh) {
  cat(
    "  it(\"",desc,"\", function() {\n",
    "    scoringFieldsAllocator = new ScoringFieldsAllocator();\n",
    "    scoringFieldsAllocator.init(",pNeg,",",pLow,",",pMed,",",pHigh,");\n",
    "    expect(scoringFieldsAllocator.getNumNegligible()).toEqual(",nNeg,");\n",
    "    expect(scoringFieldsAllocator.getNumLow()).toEqual(",nLow,");\n",
    "    expect(scoringFieldsAllocator.getNumMedium()).toEqual(",nMed,");\n",
    "    expect(scoringFieldsAllocator.getNumHigh()).toEqual(",nHigh,");\n",
    "  });\n"
  )
}


print_ks_header <- function(){
  cat(
    "describe(\"Ki67Score\", function() {\n",
    "  var Ki67Score = require(\"../lib/ki67Score\").Ki67Score\n",
    "  var ki67Score;\n",
    "\n",
    "  beforeEach(function() {\n",
    "});\n"
  )
}
print_ks_test_case <-function(desc,pNeg,pLow,pMed,pHigh,
                              fields,
                              ug,wg){
  cat(
    "it(\"",desc,"\", function() {\n",
    "   ki67Score = new Ki67Score(",pNeg,",",pLow,",",pMed,",",pHigh,");\n",
    "\n")
  for (field in fields) {
    cat("    ki67Score.addField(",field["nCount"],",",field["pCount"],",",field["type"],");\n")
  }
  cat(
    "  expect(Math.abs(ki67Score.getGlobalScore()-",ug,")).toBeLessThan(0.1);\n",
    "  expect(Math.abs(ki67Score.getWeightedGlobalScore()-",wg,")).toBeLessThan(0.1);\n",
    "});\n")
}
print_ks_footer <- function(){
  cat("});")
}


sink(file=file.path(OUTPUT_DIR,"scoringFieldsAllocatorSpec.js"))
print_sa_header()

# generate test cases using phase 3A data ...
for (lab in unique(ki67p3.raw.d$deid)) {
  for (acc_num in unique(ki67p3.raw.d$surgical.number[which(ki67p3.raw.d$deid==lab)])) {
    temp <- ki67p3.raw.d[which(ki67p3.raw.d$deid==lab & ki67p3.raw.d$surgical.number==acc_num & ki67p3.raw.d$field.name!="hot-spot"),]
    fields <- list()
    print_sa_test_case(
      paste0("Phase 3A, lab ",lab,", case ",acc_num),
      temp$slide.pp.neg[1],
      temp$slide.pp.low[1],
      temp$slide.pp.med[1],
      temp$slide.pp.high[1],
      sum(temp$field.name=="negative"),
      sum(temp$field.name=="low"),
      sum(temp$field.name=="medium"),
      sum(temp$field.name=="high"))
  }
}

# generate test cases using phase 3B data ...
for (lab in unique(ki67p3b.raw$deid[which(ki67p3b.raw$specimen.type=="surgery")])) {
  for (acc_num in unique(ki67p3b.raw$surgical.number[which(ki67p3b.raw$deid==lab & ki67p3b.raw$specimen.type=="surgery")])) {
    temp <- ki67p3b.raw[which(ki67p3b.raw$deid==lab & ki67p3b.raw$surgical.number==acc_num & ki67p3b.raw$field.name!="hot-spot" & ki67p3b.raw$specimen.type=="surgery"),]
    fields <- list()
    print_sa_test_case(
      paste0("Phase 3A, lab ",lab,", case ",acc_num),
      temp$slide.pp.neg[1],
      temp$slide.pp.low[1],
      temp$slide.pp.med[1],
      temp$slide.pp.high[1],
      sum(temp$field.name=="negative"),
      sum(temp$field.name=="low"),
      sum(temp$field.name=="medium"),
      sum(temp$field.name=="high"))
  }
}

print_sa_footer()
sink()

sink(file=file.path(OUTPUT_DIR,"ki67ScoreSpec.js"))
print_ks_header()

get_field_type_const <- function(x){
  return(switch(x,
                "negative"="Ki67Score.FIELD_TYPE_NEG",
                "low"="Ki67Score.FIELD_TYPE_LOW",
                "medium"="Ki67Score.FIELD_TYPE_MED",
                "high"="Ki67Score.FIELD_TYPE_HIGH"
  ))
}

# generate test cases using phase 3A data ...
for (lab in unique(ki67p3.raw.d$deid)) {
  for (acc_num in unique(ki67p3.raw.d$surgical.number[which(ki67p3.raw.d$deid==lab)])) {
    temp <- ki67p3.raw.d[which(ki67p3.raw.d$deid==lab & ki67p3.raw.d$surgical.number==acc_num & ki67p3.raw.d$field.name!="hot-spot"),]
    fields <- list()
    for (i in 1:nrow(temp)) {
      fields[[i]] <- c(
        "pCount"=temp$count.pos.first.100[i],
        "nCount"=min(100,as.numeric(temp$count.total[i]))-as.numeric(temp$count.pos.first.100[i]),
        "type"=get_field_type_const(temp$field.name[i])
      )
    }
    print_ks_test_case(
      paste0("Phase 3A, lab ",lab,", case ",acc_num),
      temp$slide.pp.neg[1],
      temp$slide.pp.low[1],
      temp$slide.pp.med[1],
      temp$slide.pp.high[1],
      fields,
      ki67p3.ug.d[acc_num,lab],
      ki67p3.wg.d[acc_num,lab])
  }
}

# generate test cases using phase 3B data ...
for (lab in unique(ki67p3b.raw$deid[which(ki67p3b.raw$specimen.type=="surgery")])) {
  for (acc_num in unique(ki67p3b.raw$surgical.number[which(ki67p3b.raw$deid==lab & ki67p3b.raw$specimen.type=="surgery")])) {
    temp <- ki67p3b.raw[which(ki67p3b.raw$deid==lab & ki67p3b.raw$surgical.number==acc_num & ki67p3b.raw$field.name!="hot-spot" & ki67p3b.raw$specimen.type=="surgery"),]
    fields <- list()
    for (i in 1:nrow(temp)) {
      fields[[i]] <- c(
        "pCount"=as.numeric(temp$count.pos.first.100[i]),
        "nCount"=min(100,as.numeric(temp$count.total[i]))-as.numeric(temp$count.pos.first.100[i]),
        "type"=get_field_type_const(temp$field.name[i])
      )
    }
    print_ks_test_case(
      paste0("Phase 3B, lab ",lab,", case ",acc_num),
      temp$slide.pp.neg[1],
      temp$slide.pp.low[1],
      temp$slide.pp.med[1],
      temp$slide.pp.high[1],
      fields,
      ki67p3b.ug.ws[acc_num,lab],
      ki67p3b.wg.ws[acc_num,lab])
  }
}

print_ks_footer()
sink()


