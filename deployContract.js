const Web3 = require('web3')
const fs = require('fs')


 // Connect the web3 API to local ganache ethereum network

 const web3 = new Web3('http://localhost:8545')
 
// .abi filename
const abiFileName = "contracts_MyContract_sol_MyContract.abi"
// .bin filename
const binFileName = "contracts_MyContract_sol_MyContract.bin"

//Path for ABI file
const abiPath = `./build/contracts/${abiFileName}`

// Path for bin file
const binPath = `./build/contracts/${binFileName}`



// Load the compiled Contract bytecode from /build/contract
const bytecode = fs.readFileSync(binPath).toString();

// Load the compiled Contract abi from /build/contracts
const abi = JSON.parse(fs.readFileSync(abiPath).toString());



async function  deploy(){


    // Create contract object 
    const deployedContract = new web3.eth.Contract(abi)

    console.log("Getting account for deployment...")
    const accounts = await web3.eth.getAccounts()

    // Select the first account for deployment
    const account = accounts[0];
    console.log('Deployment Account :', account)


    console.log('Deploying contract...')
    // deploy contract
    const newContractInstance = await deployedContract.deploy({
            data: bytecode,
            arguments: ["Default Name"]
        }).send({
            from:account,
            gas: 1500000,
            gasPrice: web3.utils.toWei('0.00003', 'ether')
          })

    console.log('Contract deployed')
    deployedContract.options.address = newContractInstance.options.address   
    return deployedContract
}


module.exports.deploy = deploy

