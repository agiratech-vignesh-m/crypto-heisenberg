const {ethers} = require("hardhat");

async function deployScript(){
    console.log("Deploying the AME_TOKEN Contract...");
    const baseC = await ethers.getContractFactory("contracts/NoProxyUpgrade/Eduloan.sol:Eduloan");
    const deployC = await baseC.deploy("0x71A66921E1429c29C9c234f8d71504C88e503392",
    "0xb9Bc22C3dF733F9bF44da3644e118386195c154A",
    "0xfE48bcaA0a362E3B3859F3269cFeb2fa011dadeF",
    "0xE7295C6569dDF883edF0B5a667d13dda955CB197",
    5);
    await deployC.deployed();
    console.log("The deployed AME_TOKEN Contract address is =>  ", deployC.address);
}

deployScript();
