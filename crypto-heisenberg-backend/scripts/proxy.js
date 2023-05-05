const {ethers, upgrades} = require("hardhat");
async function setup(){
    console.log("This setup deploys two contracts please check the deployed wallet address");
    const baseC = await ethers.getContractFactory("contracts/StudentRegistration.sol:StudentRegistration");
    const deployC = await upgrades.deployProxy(baseC);
    await deployC.deployed();
    console.log("The student registration contract has been deployed and this is proxy contract address",deployC.address);
}
setup().catch((err)=>{
    console.log("The contract has failed to deploy", err);
})