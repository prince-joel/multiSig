/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan")

// const privateKey = process.env.PRIVATE_KEY;
// const endpoint = process.env.URL;
// const etherscanKey = process.env.ETHERSCAN_KEY;
module.exports = {
  solidity: "0.8.8",

  networks: {
    // rinkeby: {
    //   url: endpoint,
    //   accounts:[privateKey]
    // }
  },

  // etherscan: {
  //   apiKey: etherscanKey
  // }

};
