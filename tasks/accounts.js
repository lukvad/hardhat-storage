const {task} = require("hardhat/config")

task("accounts", "Prints the list of accounts", async(taskArgs, hre)=> {
    const accounts = await hre.ethers.getSigners();
    let n=1;
    for (const account of accounts) {
      console.log(`Account no. ${n}: ${account.address}`);
      n++;
    }
})

module.exports = {}