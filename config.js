const mongo_id = process.env.MLABUSER;
const mongo_pwd = process.env.MLABPWD;
let mongoURI = '';

if(process.env.NODE_ENV === 'production'){
		mongoURI = 'mongodb://' +mongo_id+':'+mongo_pwd+'@ds137703.mlab.com:37703/sentient'
}
else
{	
		mongoURI = 'mongodb://localhost:27017/votingDapp'
}


module.exports = {
    abi : {
        factoryABI: '[ { "constant": true, "inputs": [ { "name": "index", "type": "uint256" } ], "name": "getPollAddList", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "renounceOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "question", "type": "string" } ], "name": "createPoll", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "isOwner", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "hash", "type": "string" } ], "name": "addVoter", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "getPollSize", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_store", "type": "address" } ], "name": "setStorageContract", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "getStorageContract", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "newOwner", "type": "address" } ], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "name": "_store", "type": "address" } ], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "previousOwner", "type": "address" }, { "indexed": true, "name": "newOwner", "type": "address" } ], "name": "OwnershipTransferred", "type": "event" } ]',
        pollABI: '[{ "constant": false, "inputs": [{ "name": "ind", "type": "uint256" }, { "name": "voterHash", "type": "string" }], "name": "vote", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "voterHash", "type": "string" }], "name": "checkParams", "outputs": [{ "name": "", "type": "bool" }, { "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "numberOfOptions", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "ind", "type": "uint256" }], "name": "getOptions", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_option", "type": "string" }], "name": "addOptions", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "getQuestion", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "ind", "type": "uint256" }], "name": "getVotes", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "inputs": [{ "name": "_question", "type": "string" }, { "name": "_store", "type": "address" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }]'        
    },
    contractAddresses : {
        storeAddress: '0x6E4A92Cdb689002C9557A8fb255c20ccaF2662D7',
        voterFactoryAddress: '0xa189abcd860ae21807a2d4db63d4c33961600f86'
    },
    db : {
        mongoURI: mongoURI
    } 
}

