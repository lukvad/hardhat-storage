const {ethers} = require("hardhat")
const {assert, expect} = require("chai")

describe("SimpleStorage", ()=>{
    let simpleStorage, simpleStorageFactory;
    beforeEach(async ()=>{
        simpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
        simpleStorage = await simpleStorageFactory.deploy()
    })
    it("Should start with a favorite number 0", async ()=>{
        const currentValue = await simpleStorage.retrieve()
        const expectedValue = "0"
        assert.equal(currentValue.toString(),expectedValue);
    })
    it("Should update when we call store",async ()=>{
        const expectedValue = "7"
        const txResponse = await simpleStorage.store(expectedValue)
        txResponse.wait(1)
        const updatedValue = await simpleStorage.retrieve()
        assert.equal(expectedValue,updatedValue.toString())
    })
})