pragma solidity ^0.5.1;

contract MyContract{
    
    string public name;
    
    constructor( string memory _name) public{
        name = _name;
    }
    
    function setName(string memory _name) public {
        name = _name;
    }
}