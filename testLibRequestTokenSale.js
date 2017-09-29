var LibRequestTokenSale = require('./libRequestTokenSale.js');
var rts = new LibRequestTokenSale("http://localhost:8545",'0xa29f5F30B715949B61F42E39FE335801E2aBd861',"0xaccdd9bac6fdd4e730f183b9e450a0ec6fd8e3c7",971869);
var BigNumber = require("BigNumber.js");


// console.log("rts.getToken()");
// console.log(rts.getToken());

// console.log("rts.getHardCap()");
// console.log(rts.getHardCap());
// console.log("rts.getSaleStartTime()");
// console.log(rts.getSaleStartTime());
// console.log("rts.getSaleEndTime()");
// console.log(rts.getSaleEndTime());
// console.log("rts.getTokenTradableStartTime()");
// console.log(rts.getTokenTradableStartTime());
// console.log("rts.getPeriodIndividualCap()");
// console.log(rts.getPeriodIndividualCap());
// console.log("rts.getBaseIndividualCap()");
// console.log(rts.getBaseIndividualCap());


// console.log("rts.getAmountRaisedInWei()");
// console.log(rts.getAmountRaisedInWei());
// console.log("rts.getCurrentIndividualCapInWei()");
// console.log(rts.getCurrentIndividualCapInWei());
// console.log("rts.getNumberOfTokenIssue()");
// console.log(rts.getNumberOfTokenIssue());


// console.log("rts.isRegistered(0x8c00498e97a5381f8fb4e0a618828d0685735949)");
// console.log(rts.isRegistered(0x8c00498e97a5381f8fb4e0a618828d0685735949));
// console.log("rts.parcitipationInWei(0x8c00498e97a5381f8fb4e0a618828d0685735949)");
// console.log(rts.parcitipationInWei(0x8c00498e97a5381f8fb4e0a618828d0685735949));
// console.log("rts.getNumberOfToken(0x8c00498e97a5381f8fb4e0a618828d0685735949)");
// console.log(rts.getNumberOfToken(0x8c00498e97a5381f8fb4e0a618828d0685735949));

// rts.getListEventRegistered(function(err,data) {
//   console.log("getListEventRegistered err")
//   console.log(err)
//   console.log("getListEventRegistered data")
//   console.log(data)
// });

// rts.getListRegistered(function(err,data) {
//   console.log("getListRegistered err")
//   console.log(err)
//   console.log("getListRegistered data")
//   console.log(data)
// });

// rts.getListEventTokenPurchase(function(err,data) {
//   console.log("getListEventTokenPurchase err")
//   console.log(err)
//   console.log("getListEventTokenPurchase data")
//   console.log(data)
// });

// rts.getListTokenPurchase(function(err,data) {
//   console.log("getListTokenPurchase err")
//   console.log(err)
//   console.log("getListTokenPurchase data")
//   console.log(data)
//   var amounttotal = new BigNumber(0);
//   data.forEach(function(l) {
//     amounttotal  = amounttotal.plus(l.amount);
//   })
//   console.log("amounttotal")
//   console.log(amounttotal)
// });

// rts.getFirstBlockOfContract(function(err,data) {
//   console.log("getFirstBlockOfContract err")
//   console.log(err)
//   console.log("getFirstBlockOfContract data")
//   console.log(data)
// });

// getFirstBlockOfContract



  // web3.eth.getTransactionReceipt("0xbd0ce6878e6351da8bba2885365849dbecf9008269046b2f196895de11e4bc0f",function(err,data){
  // // web3.eth.getTransactionReceipt("0x4bc8b51c217edf32b72b88728c70262fcd2516e583d6b59150164ca888728884",function(err,data){
  //   console.log("getTransaction err")
  //   console.log(err)
  //   console.log("getTransaction data")
  //   console.log(data)
  // });

  // rts.setBaseEthCapPerAddressInEther(3, function(err,data) {
  //   console.log("setBaseEthCapPerAddressInEther created err");
  //   console.log(err);
  //   console.log("setBaseEthCapPerAddressInEther created data");
  //   console.log(data);
  //   console.log("setBaseEthCapPerAddressInEther created!");
  // }, function(err,data) {
  //   console.log("setBaseEthCapPerAddressInEther mined err");
  //   console.log(err);
  //   console.log("setBaseEthCapPerAddressInEther mined data");
  //   console.log(data);
  //   console.log("setBaseEthCapPerAddressInEther mined!");
  // });


  // rts.changeRegistrationStatuses(
  //   ["0xb948a1b425797bc83fabf62ba856573e70c2be36","0x2ecad042bf3be14b4427a08c0dd91391064135b8","0xbeb5d17d0fbc660842514f0fd94afe4d01327466","0x48aa96b8b82f64b0f5ab46eeab2adc45f98427ff"],
  //   true,
  // function(err,data) {
  //   console.log("changeRegistrationStatuses created err");
  //   console.log(err);
  //   console.log("changeRegistrationStatuses created data");
  //   console.log(data);
  //   console.log("changeRegistrationStatuses created!");
  // }, function(err,data) {
  //   console.log("changeRegistrationStatuses mined err");
  //   console.log(err);
  //   console.log("changeRegistrationStatuses mined data");
  //   console.log(data);
  //   console.log("changeRegistrationStatuses mined!");
  // });

  // rts.changeRegistrationStatus(
  //   "0xb948a1b425797bc83fabf62ba856573e70c2be36",
  //   true,
  // function(err,data) {
  //   console.log("changeRegistrationStatus created err");
  //   console.log(err);
  //   console.log("changeRegistrationStatus created data");
  //   console.log(data);
  //   console.log("changeRegistrationStatus created!");
  // }, function(err,data) {
  //   console.log("changeRegistrationStatus mined err");
  //   console.log(err);
  //   console.log("changeRegistrationStatus mined data");
  //   console.log(data);
  //   console.log("changeRegistrationStatus mined!");
  // });


return;




























// var Web3 = require('web3');
// var async = require('async')
// var request = require('request');

// // var _DELAY_GET_TRANSACTION_LOOP = 3000;

// if (typeof web3 !== 'undefined') {
//   web3 = new Web3(web3.currentProvider);
// } else {
//   // set the provider you want from Web3.providers
//   web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
// }

// var abi =
// [
//   ];

// var _requestTokenSale = web3.eth.contract(abi);
// var _contractInstance = _requestTokenSale.at("0x8c018167c8e0a7e2ea52522989657187eb7209a0")
// // 0xaccdd9bac6fdd4e730f183b9e450a0ec6fd8e3c7

// // _contractInstance.startTime.call().then(function(res) {
// //   console.log("res");
//   console.log(_contractInstance.startTime.call());
//   console.log(_contractInstance.owner.call());

//   // console.log(_contractInstance.changeRegistrationStatus("0xaccdd9bac6fdd4e730f183b9e450a0ec6fd8e3c7",true,{from:"0x6202ae1784ed4bd5264de417bf371617ff548645"}));
//   // console.log(_contractInstance.changeRegistrationStatus("0xaccdd9bac6fdd4e730f183b9e450a0ec6fd8e3c7",true, {from:_contractInstance.owner.call(),gas:223322}))
// // });

// // _contractInstance.changeRegistrationStatus("0xaccdd9bac6fdd4e730f183b9e450a0ec6fd8e3c7",true, {from:"0x9741697a3ab94d103bcb09c11340dfe8a379822b",gas:2233227}, function(res,res2) {
// //   console.log("res");
// //   console.log(res);
// //   console.log("res2");
// //   console.log(res2);
// // });

//   _contractInstance.changeRegistrationStatus("0xaccdd9bac6fdd4e730f183b9e450a0ec6fd8e3c7",true, {from:"0x9741697a3ab94d103bcb09c11340dfe8a379822b",gas:2233227}, function(res,res2) {
//     console.log("res");
//     console.log(res);
//     console.log("res2");
//     console.log(res2);
//   });

//     var _events = _contractInstance.allEvents({fromBlock: 0 /*_ethBlockNumberWhenStarted*/, toBlock: 'latest'});

//     _events.watch(function(err, data){
//       console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
//       console.log(data.event)
//       console.log(data)
//     });



// // var greeter = _requestTokenSale.new(RequestTokenSale.contract_name,{from:web3.eth.accounts[0], data: RequestTokenSale.unlinked_binary, gas: 4712388}, function(e, contract){
// //     if(!e) {

// //       if(!contract.address) {
// //         console.log("Contract transaction send: TransactionHash: " + contract.transactionHash + " waiting to be mined...");

// //       } else {
// //         console.log("Contract mined! Address: " + contract.address);
// //         console.log(contract);
// //       }

// //     } else {
// //     	console.log("e")
// //     	console.log(e)
// //     }
// // })



// // requestTokenSale.address
// // 0x23a9002C5283309591040cb84CF8cf722d5c8F37
// // requestToken.address
// // 0xeea60d0cc95a1cce5f12fb09bc1266708829ee8a

// // console.log("_contractInstance.owner.call()")
// // console.log(_contractInstance.owner.call())

// // console.log("_contractInstance.cap.call()")
// // console.log(_contractInstance.cap.call())

// // console.log("_contractInstance.token.call()")
// // console.log(_contractInstance.token.call())

// // console.log("_contractInstance.startTime.call()")
// // console.log(_contractInstance.startTime.call())

// // console.log("_contractInstance.endTime.call()")
// // console.log(_contractInstance.endTime.call())
