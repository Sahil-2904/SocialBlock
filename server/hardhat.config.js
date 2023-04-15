require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    googleCloudPlatforms: {
      // url: "https://eth-sepolia.g.alchemy.com/v2/INW8tlo9AVMkYkIVa0-J8rWU6cbCGvrN",
      // accounts: ["405127314faaa3cddd91e137bdb5ee67a8caf82b5bde54a7f8a97f765300ca9f"]
      url: process.env.GCP_URL,
      accounts: [process.env.ACCOUNT_PRIVATE_KEY],
    }
  }
};
