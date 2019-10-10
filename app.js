const { deploy } = require('./deployContract')



deploy((deployedContract)=> {
    //console.log(deployedContract)
    deployedContract.methods.name().call(console.log)
    deployedContract.methods.setName('Divyanshu').send({
        from :"0xCD22E3A8E51e13B2c95a73cD6A8AC32A19b94602"
    }).then((f) => deployedContract.methods.name().call(console.log) )
    
}, console.log)






