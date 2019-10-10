const { deploy } = require('./deployContract')

// address of the user
// Can be used from ganache fake accounts
const userAddress = "YOUR ADDRESS"

async function testMyContract(){


    try{
          //Deploy the contract
            const deployedContract = await deploy()


            console.log('Testing the deployed contract..')
            console.log('Your address : ', userAddress)


            //Write your contract test methods here

            // Get the default name
            let name = await deployedContract.methods.name().call()
            console.log(name)

            
            const newName = "MyTestName"
            // Set any name
            await deployedContract.methods.setName(newName).send({
                from: userAddress
            })

            // Fetch the name again
            name = await deployedContract.methods.name().call()
            console.log(name)



        }catch(err){
        console.log(err)
    }
   

}


// Test the deployed contract
testMyContract()



















