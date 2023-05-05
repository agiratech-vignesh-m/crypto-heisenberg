const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");

let provider = new HDWalletProvider({
    mnemonic: {
        phrase: "test test test test test test test test test test test junk"
    },
    providerOrUrl: "https://polygon-mumbai.g.alchemy.com/v2/Q7kht3sot891WYSQKRLYbmR91uEGMwFJ"
});

const web3 = new Web3(provider);
console.log(web3)