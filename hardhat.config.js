require("@nomicfoundation/hardhat-toolbox");

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    quorum: {
      url: "http://172.16.239.15:8545", //nodo de Quorum
      accounts: "0x8b112010207bba9d0aa080b61124e28a0ea66e29ef85e27f99e814ed66c19a48", 
      gasPrice: 0,
      gas: 4500000,
    },
  },
};
