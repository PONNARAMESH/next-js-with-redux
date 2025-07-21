const { exec } = require('child_process');
/**  Defining re-usable Functions */
const runShellCommand = (cmd: string) => {
  // eslint-disable-next-line 
  exec('command', (error: any, stdout: any, stderr: any) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
}

const localBranchDeletion = (branchList: string[]) => {
  if(Array.isArray(branchList)){
    branchList.forEach(branchName => {
      runShellCommand(`git branch -D ${branchName}`);
    })
  }
}
/** Executing re-usable Functions */
const branchList = [
  "develop/241201",
  "develop/DOB_KYC/marchGolive",
  "develop/DOB_KYC/release_dec_15",
  "develop/DOB_KYC/release_jan_19",
  "develop/DOB_KYC_TCM/mayGoLive",
  "develop/March/GoLive",
  "develop/PEP/Conflict",
  "develop/PEP/MarchSync",
  "develop/PEP/goLive",
  "develop/QATAR_EGYPT/AprilGoLive",
  "develop/QATAR_EGYPT/GoLive",
  "develop/UMR/GoLive",
  "develop/etbGoLive",
  "feat/adverseMedia",
  "feat/prod-fixes-March",
  "feat/sit-fixes-Dec",
  "feat/uat-fixes-241201",
  "feat/uat-fixes-250102",
  "feat/uat-fixes-250202",
  "feature/RestrictedActivities",
  "feature/aprilConfigChanges",
  "feature/companyDetailsUpdate",
  "feature/companyUpdatePage",
  "feature/componayUpdatePage-api-integration",
  "feature/crsChanges",
  "feature/gen_Ai_Table",
  "feature/genaiAip",
  "feature/licenseDetails_Fix",
  "feature/marchProdFix",
  "feature/multiFileUpload",
  "feature/qatarShareholder",
  "feature/sprint-1201",
  "feature/tltest",
  "fix/fatca-crs",
  "fix/fatca-crs-fixes",
  "fix/kyc/250101",
  "fix/test-cases",
];


/** deleting local branches */
localBranchDeletion(branchList);