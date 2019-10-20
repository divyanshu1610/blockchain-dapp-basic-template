# Blockchain Dapp Basic Template
 A basic template for deploying a smart contract on **Ganache** local network. Sample code consists of a smart contract that has a **name** property that can be **viewed** or **set** by appropriate transactions.

## Prerequisite
> NodeJs should be installed.
> Check out  [ https://nodejs.org/en/ ](https://nodejs.org/en/)  for NodeJs installation.

#  Usage
## 1. Clone/ Download the repository to local system.
>Use git clone https://github.com/divyanshu1610/blockchain-dapp-basic-template.git
>Or Download as zip.
## 2. Install the dependencies
**`npm install `**

## 3. Paste the smart contract code in or just go with the sample code.
**`contracts/MyContract.sol`**
><b>Note</b>: The name of the file **MyContract.sol** should not be altered. 


## 4. Compiling the contract
**`npm start`**
> This will compile **MyContract.sol** file and two output files are generated  .bin  and .abi  in **build/contracts**
> **Note:** After compilation make sure the filenames for **.bin** and **.abi** used in **deployContract.js** is same
> as the output files obtained. If not then change the filenames in **deployContract.js** 

## 5. Running the ganache network
**`npm run ganache`**
>Open a terminal and  execute following command. Make sure you are in project directory.
>This will start the local blockchain network and 10 accounts will be alloted with 100 ethers.
>**Note**: These are not real Ethers :P 


## 6. Deploying and testing the contract
**`npm run app`**
> Before running the command:
> Take a public address obtained from *ganache* and paste in 
> **`const userAddress = "Your address"`**
> This will be the account from which contract will be tested.
> **Note:** If you have written your own contract then change the testing calls in **app.js** 
